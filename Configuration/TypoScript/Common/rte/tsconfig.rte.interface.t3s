## Default RTE options
RTE.default {	
	buttons{	
	##options for the image dialog popup
  image{
		## Disable TYPO3 element browser in the image popup
		TYPO3Browser.disabled = 0				
		## List of tab items to remove from the dialog of the image button.
		## Possible tab items are: magic, plain, dragdrop, image		
		options.removeItems >
		}	
	
	##options for the link dialog popup		
	link{
		## Disable TYPO3 element browser in the link popup
		TYPO3Browser.disabled = 0	

		## Default target for links	
		properties.target.default >
		## List of tab items to remove from the dialog of the link button.  
		## Possible tab items are: page,file,url,mail,spec
		options.removeItems >				
		## If set, the selection of link target is removed from the link insertion/update dialog.
		targetSelector.disabled = 0		
		## If set, the selection of a popup window as link target is removed from the link insertion/update dialog.
		popupSelector.disabled = 0	  
		## If set, the specification of a page id, without using the page tree, is enabled in the link insertion/update dialog (useful esp. with very large pagetrees)	
	  pageIdSelector.enabled = 0			
		## Shows the field to set the rel attribute
		relAttribute.enabled = 0		
		 ## specify query parameters to be added on the link
		queryParametersSelector.enabled = 1
			
		}

	## List of default items to be removed from the block formating drop-down list.
  ## The default items are: p, h1, h2, h3, h4, h5, h6, pre, address, article, aside, blockquote, div, footer, header, nav, section
  formatblock.removeItems = h1,h5,h6,pre,address, div, article, aside, blockquote, div, footer, header, nav, section	
	}
	
	## Buttons to show
	showButtons = *

		## Buttons to hide
	hideButtons (
     bgcolor, blockquote, editelement, fontsize, fontstyle, language, insertparagraphbefore, insertparagraphafter,insertsofthyphen, lefttoright, righttoleft, showlanguagemarks, showmicrodata, spellcheck,textindicator, underline, user 
	)
	

		## Toolbar customization
	//toolbarOrder(    
	//)

		## Group buttons (Mozilla only)
	keepButtonGroupTogether = 1
		## Hide table operations
	hideTableOperationsInToolbar = 0
		## Show toggle borders item even if table operations are disabled
	buttons.toggleborders.keepInToolbar = 0

		## Configuration specific to the TableOperations feature
		## Remove the following fieldsets from the table operations dialogs
	disableAlignmentFieldsetInTableOperations = 1
	disableSpacingFieldsetInTableOperations = 1
	disableColorFieldsetInTableOperations = 1
	disableLayoutFieldsetInTableOperations = 1
	disableBordersFieldsetInTableOperations = 1
		## Show borders on table creation
	buttons.toggleborders.setOnTableCreation = 1
}
