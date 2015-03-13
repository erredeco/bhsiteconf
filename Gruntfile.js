module.exports = function (grunt) {
  'use strict';
  grunt.initConfig({
    vendor: grunt.file.readJSON('.bowerrc').directory,
    pkg: grunt.file.readJSON('./package.json'),
    date: grunt.template.today("yyyy-mm-dd-HH.MM.ss"),
    
    sourcedir: './Source',
    destinationdir: './Resources/Public/Assets/Js',
    bckdir: './Bck',                        
    foundation: {
      js: grunt.file.readJSON('foundationjs.json').files 
    },

    //TASKS
      
    //Clean
    clean:{
      source: ['./Source/'],
      cache: ['.sass-cache'],
      bower: ['./<%= vendor %>'],
      bck: ['./Bck/'] 
    },


    //Get components from bower
    bower: {
      install: {
        options: {
          copy: false
        }
      }
    },

    //copies  files 

    copy: { 
      //use this the 1st time to copy everything
      scss: {
        files: [
          {expand:true, cwd: './<%= vendor %>/myfoundation-scss-only/source/', src: ['scss/**/*.scss'], dest: '<%= sourcedir %>/'}
        ]
      },
      //use this to backup scss and foundation javascript  files into another folder
      //please take note that you must do a diff after the update
      backup: { 
      files: [
        {expand:true, cwd: './<%= sourcedir %>/', src: ['./**/*.*'], dest: '<%= bckdir %>/<%= date%>-version<%= pkg.version%>'}  
      ]            
      }
    },     

    uglify: {
          options: {
              preserveComments: 'some'
          },                      
      js: {
        files: {
          '<%= destinationdir%>/Vendor/foundation.min.js': ['<%= foundation.js %>'],
          '<%= destinationdir%>/Vendor/modernizr.min.js': ['./<%= vendor %>/modernizr/modernizr.js'],
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
          config: './config.rb'
        }
      }
    },  
     
    watch: {    
      grunt: {
        options: {
          reload: true,
          
        },
        files: ['Gruntfile.js'],
        tasks: ['build']
      },
      js: {
        files: ['foundationjs.json'],
        tasks: ['uglify','newer:uglify'],        
      },    
      
       compass: {
        files: ['<%= sourcedir %>/scss/**/*.scss'],
        tasks: ['compass:dist','newer:compass:dist'],
        
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
  grunt.loadNpmTasks('grunt-contrib-watch');  
  grunt.loadNpmTasks('grunt-newer'); 
  
  /* grunt tasks */
  grunt.registerTask('cleaner',['clean:source','clean:cache','clean:bower','clean:bck']);
  grunt.registerTask('initialize',['clean:source','clean:cache','bower:install','copy:scss']);
  grunt.registerTask('build',['uglify','compass']);    
  grunt.registerTask('default', ['build','watch']);
  grunt.registerTask ('updatebower',['clean:bower','bower:install']);
  grunt.registerTask ('prettifyhtml',['prettify:all']);
  grunt.registerTask('backup',['copy:backup']);   
};