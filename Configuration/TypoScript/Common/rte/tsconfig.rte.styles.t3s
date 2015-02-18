	## Define labels and styles to be applied to class selectors in the interface of the RTE
	## The default examples are included into /typo3/sysext/rtehtmlarea/res/typical/pageTSConfig.txt	
	
RTE.classes{
 //example of an addition
 green{
 	name=green
 	value=color:#006600;background:#ccffcc; 	
 }
}

RTE.default {
	#custom css copied from /typo3/sysext/rtehtmlarea/res/contentcss/contentcss.css
	# In order to see the styles in the RTE dropdown, they MUST be configured here, also!!
	#remove them here to hide them in RTE dropdown!	
	contentCSS = EXT:bhsiteconf/Configuration/Typoscript/common/rte/default.css
}

RTE.default{	
	## Configuration of links
	## These classes should also be in the list proc.allowedClasses
	buttons.link.properties.class.allowedClasses = external-link
	buttons.link.page.properties.class.default >
	buttons.link.url.properties.class.default = external-link
	buttons.link.file.properties.class.default >
	buttons.link.mail.properties.class.default >	
	
	//example of an addition
	buttons.textstyle.tags.span.allowedClasses :=addToList(green)
	proc.allowedClasses :=addtolist(green)
} 

