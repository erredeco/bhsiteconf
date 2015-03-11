# bhsiteconf
This extension is the provider for all the frontend configuration in TYPO3 CMS enviroment;
it depends on flux, fluidcontent,fluidpages,vhs and the CSS is a customized version of Zurb Foundation.
                                                                      
##Installation instructions 
####Install Ruby
               
gem install sass (*)

gem install compass (*)

gem install bundler (*) (**)

bundle install (**)

####Install Grunt and Bower:  
npm install -g grunt-cli bower (*)

##copy from git

##Running instructions

npm install (*)

## available commands with grunt:

- grunt cleaner
	- deletes ./Source, .sass-cache, /Bck and /bower_components folders! Use with care!!!
  
- grunt initialize
 - performs clean, downloads dependencies from bower, copies scss files to ./Source folder  
  
- grunt
	- default task: concatenates and minifies all js foundation files and executes compass for the fiels in ./Source/scss/ 
  
- grunt prettifyhtml
 - prettify all html files in /Resources/Private  
 
- grunt backup
 - copies all files from ./Source to ./Bck; it is useful when you want to update your bower components with initialize 
 you should perform this before you launch initialize, then perform manually a diff
   



( * ) run the command with "sudo " if it doesn't work

( * * )This seems not anymore necessary; it should be necessary to compile Foundation's SCSS
                            