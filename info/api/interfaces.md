---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN API Reference - Interfaces
keywords: Dynamic Web TWAIN, Documentation, API Reference, Interfaces
breadcrumbText: Interfaces
description: Dynamic Web TWAIN SDK Documentation API Reference Interfaces Page
permalink: /info/api/interfaces.html
---

# Interfaces 

## ScanConfiguration

```typescript
interface ScanConfiguration{
  element?: HTMLDivElement, //Bind the element or element id. 
                             //After binding, display the video in the specified element, otherwise, display the video in full screen.
  scannerViewer?:{
    deviceId?: string,  
    maxDocuments?: number,       //The maximum documents can be captured/loaded in to the buffer. 
    enableBorderDetection?: boolean,  // Whether to enable border detection. The default value is true.
    fullScreen?: boolean,   //Whether to display the video in full screen. The default value is false.
    polygonStyle?:{      //The sytle of the auto detect border.       
      stroke: string,    //default: "#fe8e14". Only supports #16 hexadecimal.
      strokeWidth: string,  //default: "2px"
      dash: string          //The allowed value are "solid" and "dashed", the default value is "solid".
      },
    resolution?:{
      visibility?: boolean, //Whether to display the resolution icon in the upper left corner. The default value is true.
      valueList?:[ {   
       label: string,    //The resolution value listed in the drop-down list. For example："1920x1080"
       value: Resolution //The resolution you set. For example: { width:1920, height:1080}
      },{……}]
       defaultValue?: Resolution , //Set the default value according to the value set in the valueList.
      },
    autoScan?:{   //Automatically capture when a clear document is detected. Only applicable to video scanning. 
       visibility?: boolean,     //Whether to display the automatic scan icon. The default value is true.
       enableAutoScan?: boolean, //Whether to enable automatic scan. The default value is false.
       },
    autoDetect?:{  //Only applicable to video scanning.                  
       visibility?: boolean,         //Whether to display the automatic border detection icon. The default value is true.
       enableAutoDetect?: boolean,   //Whether to enable automatic border detection. The default value is false.     
       acceptedPolygonConfidence?: number, //The default value is 80. The higher the setting, the more accurate the automatic border detection.
       fpsLimit?: number,  //The maximum number of frames detected per second. The default value is 3.
       },     
    continuousScan?:{   //Only applicable to video scanning.
       visibility?: boolean,   //Whether to display the continuous scan icon. The default value is true.
       enableContinuousScan?: boolean,  //Whether to enable continuous scan. The default value is true.
       },
    switchCamera?:{  //The default camera is the rear camera.
       visibility?: boolean,   //Whether to display the switch camera icon. The default value is true.
       },
    loadLocalFile?:{  
       visibility?: boolean,   //Whether to display the load local file icon. The default value is true.
       },
    funcConfirmExitContinuousScan?: funcConfirmExitContinuousScan, 
      //funcConfirmExitContinuousScan is the callback funtion
      //Return true：Exit continuous scan mode without saving the captured image data. Return false: Stay on the original viewer
    funcConfirmExit?: funcConfirmExit, 
      //funcConfirmExit is the callback funtion
      //Return true：End this capture without saving the image data. Return false: Stay on the original viewer
    },

  filterViewer?:{
    visibility?: boolean,   //Whether to display filter viewer. The default value is true.
    insert?: {  //Insert an image  
       visibility?: boolean,   //Whether to display the insert icon. The default value is true.
       position?: string   //Set whether to insert the image "before" or "after" the current image. The default value is "before".
       },
    remove?: { //Remove an image
   	  visibility?: boolean,   //Whether to display the remove icon. The default value is true.
       },
    rotateLeft?: { 
      visibility?: boolean,   //Whether to display the rotate left icon. The default value is true.
      },
    filter?: {  
      visibility?: boolean,   //Whether to display the filter icon. The default value is true.
      valueList?:[ {   //If not specified, listing all the filters in the order of original, blackAndWhite, grayscale, clean, brightening, saveToner by default. 
                        //Support adjusting the valueList order to arrange the filter order.
       label: string,   //The label of the filter. For example. The filter "Original" can be modified to any word you want to describe
       value: string,   //The filter value. The value must be set according to our specification below.
			//Allowed values:
                        //original 
		        //blackAndWhite
			//grayscale
			//clean
			//brightening
			//saveToner	
       option?: {
          level: 1 //The filter level. The allowed values are 1(default value), 2, 3.
                      //The higher the level, the better the quality, but the more time it takes.
           }
        },{……}]
	 
       defaultValue?: string,   //Filter selected by default. By default, the original filter is selected.
       },
    exitDocumentScanAfterSave?: false  //The default value is false.
    },

  cropViewer?: { 
    visibility?: boolean,   //Whether to display the crop viewer. The default value is true. 
    polygonStyle?:{    //The polygon style in the crop viewer.       
      stroke: string,       //default : "#fe8e14".  Only supports #16 hexadecimal.
      strokeWidth: string,   //default: "2px"
      dash: string           //The allowed value are "solid" and "dashed", the default value is "solid".
      },
    rotateLeft?:{   
      visibility?: boolean,   //Whether to display the rotate left icon. The default value is true.
     },
    rotateRight?:{   
      visibility?: boolean,   //Whether to display the rotate right icon. The default value is true.
     },
    autoDetectBorder?:{   
      visibility?: boolean,   //Whether to display the automatic border detection icon. The default value is true.
     },
   }
 }
 ```