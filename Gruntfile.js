module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({
    vendor: grunt.file.readJSON('.bowerrc').directory,
    pkg: {
      mine: grunt.file.readJSON('./package.json'),
    },


    sourcedir: './Source',
    destinationdir: './Resources/Public/Assets/Js',
    bckdir: './Bck',
                
    foundation: {
          js: ['<%= sourcedir %>/assets/js/vendor/foundation/foundation.js', '<%= sourcedir %>/assets/js/vendor/foundation/foundation.*.js']
        },

    //Clean
    clean:{
      all: ['./Source/','.sass-cache'],
      bck: ['./Bck/'] 
    },


    //Get components from bower
    bower: {
      install: {
        options: {
          copy: false
        }
      }
    }

    //copies javascript files 
    copy: { 
      js: {
        files: [
          {src: './<%= vendor %>/modernizr/modernizr.js', dest: '<%= sourcedir %>/assets/js/vendor/modernizr.js'},
          {expand:true, cwd: './<%= vendor %>/bower-foundation/js/', src: ['foundation/*.js'], dest: '<%= sourcedir %>/assets/js/vendor/', filter: 'isFile'}
          
        ]
      },
      
      //use this the 1st time to copy everything
      scss: {
        files: [
          {expand:true, cwd: './<%= vendor %>/myfoundation-scss-only/source/', src: ['scss/**/*.scss'], dest: '<%= sourcedir %>/assets/'}
        ]
      },
      //use this to backup scss and foundation javascript  files into another folder
      //please take note that you must do a diff after the update
      backup: { 
      files:[
        {
          expand:true, cwd: './<%= sourcedir %>/assets/', src: ['./**/*.*'], dest: '<%= bckdir %>/assets/',

        }  
      ]    
         
      }
    },  

    uglify: {
          options: {
              preserveComments: 'some'
          },                    
  
      js: {
        files: {
          '<%= destinationdir%>/foundation.min.js': ['<%= foundation.js %>'],
          '<%= destinationdir%>/modernizr.min.js': ['<%= sourcedir %>/assets/js/vendor/modernizr.js'],
          '<%= destinationdir%>/app.min.js': ['<%= destinationdir%>/app.js']
        }
      },

    },
    
  prettify: {
    options: {
      config: '.prettifyrc'
    },
    all: {
        expand: true,
        ext: '.html',
        src: ['./Resources/Private/**/*.html'],
        dest: './'
      }
  },
  
  compass: {
      dist: {
        options: {
          config: './<%= vendor %>/myfoundation-scss-only/config.rb',  
          cssDir: 'Resources/Public/Assets/Css',
          sassDir: 'Source/assets/scss',
          imagesDir: 'Resources/Public/Assets/Img_layout',
          fontsDir: 'Resources/Public/Assets/Fonts',
          javascriptsDir: 'Resources/Public/Assets/Js',          
          environment: 'development', //development or production
          outputStyle: 'expanded' //nested, expanded, compact, compressed 

        }
      }
    },  
     
    watch: {
      options:{
        livereload: true,
      },      
      grunt: {
        options: {
          reload: true,
          
        },
        files: ['Gruntfile.js'],
        tasks: ['build']
      },

      js: {
        files: ['<%= sourcedir %>/assets/js/**/*.js'],
        tasks: ['uglify','newer:uglify'],
        
      },    
      prettify: {
        files: ['./Resources/Private/**/*.html'],
        tasks: ['prettify:all','newer:prettify:all'],
         
      },
      
       compass: {
        files: ['<%= sourcedir %>/assets/scss/**/*.scss'],
        tasks: ['compass'],
        
      },          
    }
  });

  /* load plugin in package.json */
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-clean'); 
  
  grunt.loadNpmTasks('grunt-contrib-copy'); 
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-prettify');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks( 'grunt-contrib-watch' );  
  grunt.loadNpmTasks('grunt-newer'); 
  
  /* grunt tasks */
  grunt.registerTask('cleaner',['clean:all']);
  grunt.registerTask('initialize',['cleaner','bower:install','copy:js','copy:scss']);
  grunt.registerTask('build',['uglify','prettify','compass']); 
  grunt.registerTask('default', ['build','watch']);
  grunt.registerTask('backup',['clean:bck','copy:backup']);   
};