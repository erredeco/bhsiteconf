# bhsiteconf
This extension is the provider for all the frontend configuration in TYPO3 CMS enviroment;
it depends on flux, fluidcontent,fluidpages,vhs and the CSS is a customized version of Zurb Foundation.
                                                                      
##Installation instructions 
####Install Ruby
               
gem install sass (1)

gem install compass (1)

gem install bundler (1) (2)

bundle install (2)

####Install Grunt and Bower:  
npm install -g grunt-cli bower (1)

##copy from git

##Running instructions

npm install (1)

## available commands with grunt:

- grunt cleaner
	- deletes ./Source, .sass-cache, /Bck and /bower_components folders! Use with care!!!
  
- grunt initialize
 - performs clean of ./Source, .sass-cache, downloads dependencies from bower, copies scss files to ./Source folder  
  
- grunt
	- default task: concatenates and minifies all js foundation files and executes compass for the fiels in ./Source/scss/ 
  
NOTE: you can always use compass watch and bundle exec compass watch  
 
### Additional tasks: 
  
- grunt prettifyhtml
  - prettify all html files in /Resources/Private  

- grunt updatebower 
  - deletes  /bower_components  and download dependencies again.
 
- grunt backup
  - copies all files from ./Source to ./Bck/Subfolder where Subfolder has the format: "yyyy-mm-dd-HH.MM.ss-version-VERSIONNUMBER" ; it is useful when you want to update your bower components with initialize 
 and you must perform this before you launch initialize (because it deletes ./Source folder!!), then perform manually a diff
However, the relevant files are  ./Source/scss/_foundation.scss which holds the components and ./Source/scss/foundation/_settings.scss which defines the settings (colors etc.) 


 
 This folders must be emptied manually or with grunt cleaner (which deletes Source, too)                                                        

(1) run the command with "sudo " if it doesn't work

(2)This seems not anymore necessary; it should have been necessary to compile Foundation's SCSS
                            