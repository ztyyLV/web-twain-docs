---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN API Reference - Camera Addon APIs
keywords: Dynamic Web TWAIN, Documentation, API Reference, Camera Addon APIs
breadcrumbText: Camera Addon
description: Dynamic Web TWAIN SDK Documentation API Reference Camera Addon APIs Page
---

# `WebTwain.Addon.Camera`

> Dynamsoft provides a built-in feature to handle camera capturing, prospective adjusting, etc. Check out the APIs [`showVideo()`](#showvideo) and [`closeVideo()`](#closevideo). Please NOTE that these two APIs should not be mixed with other more specific APIs like [`play()`](#play), [`pause()`](#pause) and [`stop()`](#stop), etc.

**Methods**

|                                     |
| :---------------------------------- | :---------------------------------- | ------------------------------------------------- | --------------------------------- |
| [`getSourceList()`](#getsourcelist) | [`selectSource()`](#selectsource)   | [`getCurrentSource()`](#getcurrentsource)         | [`closeSource()`](#closesource)   |
| [`getResolution()`](#getresolution) | [`setResolution()`](#setresolution) | [`getCurrentResolution()`](#getcurrentresolution) | [`play()`](#play)                 |
| [`pause()`](#pause)                 | [`resume()`](#resume)               | [`stop()`](#stop)                                 | [`getStatus()`](#getstatus)       |
| [`capture()`](#capture)             | [`showVideo()`](#showvideo)         | [`closeVideo()`](#closevideo)                     | [`scanDocument()`](#scandocument) |

---

## getSourceList

**Syntax**

```typescript
/**
 * Return a list of all available cameras.
 */
getSourceList(): Promise<DeviceInfo[]>;

interface DeviceInfo{
    deviceId: string;
    label: string;
}
```

**Availability**

<div class="availability"></div>

|:-|:-|
|ActiveX|H5(Windows)|H5(macOS/TWAIN)|H5(macOS/ICA)|H5(Linux)|WASM(Mobile)|
| not supported | v16.1+ | v16.1+ | v16.1+ | v16.1+ | supported |

**Example**

```javascript
DWObject.Addon.Camera.getSourceList();
```

---

## selectSource

**Syntax**

```typescript
/**
 * Select a camera to use.
 * @param deviceId Specify the camera with its deviceId.
 */
selectSource(deviceId: string): Promise<DeviceInfo>;
```

**Availability**

<div class="availability"></div>

|:-|:-|
|ActiveX|H5(Windows)|H5(macOS/TWAIN)|H5(macOS/ICA)|H5(Linux)|WASM(Mobile)|
| not supported | v16.1+ | v16.1+ | v16.1+ | v16.1+ | supported |

---

## getCurrentSource

**Syntax**

```typescript
/**
 * Return the info about the current camera.
 */
getCurrentSource():DeviceInfo;
```

**Availability**

<div class="availability"></div>

|:-|:-|
|ActiveX|H5(Windows)|H5(macOS/TWAIN)|H5(macOS/ICA)|H5(Linux)|WASM(Mobile)|
| not supported | v16.1+ | v16.1+ | v16.1+ | v16.1+ | supported |

---

## closeSource

**Syntax**

```typescript
/**
 * Close the current camera.
 */
closeSource(): Promise<DeviceInfo>;
```

**Availability**

<div class="availability"></div>

|:-|:-|
|ActiveX|H5(Windows)|H5(macOS/TWAIN)|H5(macOS/ICA)|H5(Linux)|WASM(Mobile)|
| not supported | v16.1+ | v16.1+ | v16.1+ | v16.1+ | supported |

---

## getResolution

**Syntax**

```typescript
/**
 * Return the resolutions supported by the current camera.
 */
getResolution(): Promise<Resolution[]>

interface Resolution{
    width: number;
    height: number;
}
```

**Availability**

<div class="availability"></div>

|:-|:-|
|ActiveX|H5(Windows)|H5(macOS/TWAIN)|H5(macOS/ICA)|H5(Linux)|WASM(Mobile)|
| not supported | v16.1+ | v16.1+ | v16.1+ | v16.1+ | supported |

---

## setResolution

**Syntax**

```typescript
/**
 * Set the resolution for the current camera.
 * @param resolution Specify the resolution.
 */
setResolution(resolution: Resolution): Promise<Resolution>;
```

**Availability**

<div class="availability"></div>

|:-|:-|
|ActiveX|H5(Windows)|H5(macOS/TWAIN)|H5(macOS/ICA)|H5(Linux)|WASM(Mobile)|
| not supported | v16.1+ | v16.1+ | v16.1+ | v16.1+ | supported |

---

## getCurrentResolution

**Syntax**

```typescript
/**
 * Return the resolution of the current camera.
 */
getCurrentResolution(): Promise<Resolution>;
```

**Availability**

<div class="availability"></div>

|:-|:-|
|ActiveX|H5(Windows)|H5(macOS/TWAIN)|H5(macOS/ICA)|H5(Linux)|WASM(Mobile)|
| not supported | v16.1+ | v16.1+ | v16.1+ | v16.1+ | supported |

**Usage notes**

If the camera is playing, the actual resolution is returned. If the camera is not playing, the last set resolution or null is returned.

---

## play

**Syntax**

```typescript
/**
 * Start streaming video from the current camera.
 * @param element Specify an HTML element to put the video stream in.
 * @param resolution Specify the initial resolution.
 * @param fill Whether to fill the viewer space with the video stream and leave no margin. The default value is `false`.
 */
play(element?: HTMLElement,
    resolution?: Resolution,
    fill?: boolean
): Promise<Resolution>;
```

**Usage notes**

If no camera is chosen, the default camera is used.

If the method is called without arguments or `null` is passed to `element` , the video will show in the main viewer.

**Availability**

<div class="availability"></div>

|:-|:-|
|ActiveX|H5(Windows)|H5(macOS/TWAIN)|H5(macOS/ICA)|H5(Linux)|WASM(Mobile)|
| not supported | v16.1+ | v16.1+ | v16.1+ | v16.1+ | supported |

---

## pause

**Syntax**

```typescript
/**
 * Pause the video stream.
 */
pause(): void;
```

**Availability**

<div class="availability"></div>

|:-|:-|
|ActiveX|H5(Windows)|H5(macOS/TWAIN)|H5(macOS/ICA)|H5(Linux)|WASM(Mobile)|
| not supported | v16.1+ | v16.1+ | v16.1+ | v16.1+ | supported |

---

## resume

**Syntax**

```typescript
/**
 * Resume the video stream.
 */
resume(): void;
```

**Availability**

<div class="availability"></div>

|:-|:-|
|ActiveX|H5(Windows)|H5(macOS/TWAIN)|H5(macOS/ICA)|H5(Linux)|WASM(Mobile)|
| not supported | v16.1+ | v16.1+ | v16.1+ | v16.1+ | supported |

---

## stop

**Syntax**

```typescript
/**
 * Stop the video stream.
 */
stop(): void;
```

**Availability**

<div class="availability"></div>

|:-|:-|
|ActiveX|H5(Windows)|H5(macOS/TWAIN)|H5(macOS/ICA)|H5(Linux)|WASM(Mobile)|
| not supported | v16.1+ | v16.1+ | v16.1+ | v16.1+ | supported |

---

## getStatus

**Syntax**

```typescript
/**
 * Return the status of the current camera.
 */
getStatus(): string;
```

**Usage notes**

The status string is either empty or one of the following: "playing", "paused", "stopped". An empty string means no camera is open.

**Availability**

<div class="availability"></div>

|:-|:-|
|ActiveX|H5(Windows)|H5(macOS/TWAIN)|H5(macOS/ICA)|H5(Linux)|WASM(Mobile)|
| not supported | v16.1+ | v16.1+ | v16.1+ | v16.1+ | supported |

---

## capture

**Syntax**

```typescript
/**
 * Capture a frame from the video stream.
 */
capture(): Promise<Blob>;
```

**Availability**

<div class="availability"></div>

|:-|:-|
|ActiveX|H5(Windows)|H5(macOS/TWAIN)|H5(macOS/ICA)|H5(Linux)|WASM(Mobile)|
| not supported | v16.1+ | v16.1+ | v16.1+ | v16.1+ | supported |

---

## showVideo

**Syntax**

```typescript
/**
 * Start streaming video from the current camera in the viewer.
 * @param deviceId Specify a camera.
 * @param resolution Specify the initial resolution.
 * @param mode Specify the mode.
 * @param fill Whether to fill the viewer area with the video stream and leave no margin.
 */
showVideo(deviceId?: string,
    resolution?: Resolution,
    mode?: string,
    fill?: boolean
): Promise<Resolution>;
```

**Usage notes**

There are two available modes: `document` and `picture` .

- `picture`: border detection is turned off and supports taking images consecutively. This is the default mode.
- `document`: border detection will be on and only supports taking one image at a time.

**Availability**

<div class="availability"></div>

|:-|:-|
|ActiveX|H5(Windows)|H5(macOS/TWAIN)|H5(macOS/ICA)|H5(Linux)|WASM(Mobile)|
| not supported | v16.1+ | v16.1+ | v16.1+ | v16.1+ | supported |

---

## closeVideo

**Syntax**

```typescript
/**
 * Close the camera and hide the video streaming UI.
 */
closeVideo(): void;
```

**Availability**

<div class="availability"></div>

|:-|:-|
|ActiveX|H5(Windows)|H5(macOS/TWAIN)|H5(macOS/ICA)|H5(Linux)|WASM(Mobile)|
| not supported | v16.1+ | v16.1+ | v16.1+ | v16.1+ | supported |

## scanDocument

**Syntax**

``` typescript
/**
 * Open the camera to capture document(s).
 * @param scanConfiguration Specify the scan configuration.
 */
scanDocument(scanConfiguration?: ScanConfiguration
): Promise<Resolution>;

interface ScanConfiguration{
   element?: HTMLDivElement, //Bind the element or element id. 
                             //After binding, display the video in the specified element, otherwise, display the video in full screen.
   scannerViewer?:{
     deviceId?: string,  
     maxDocuments: int,       //The maximum documents can be captured/loaded in to the buffer. 
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
     acceptedPolygonConfidence: number, //The default value is 80. The higher the setting, the more accurate the automatic border detection.
     fpsLimit: number,  //The maximum number of frames detected per second. The default value is 3.
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

   funcConfirmExitContinuousScan: funcConfirmExitContinuousScan, 
      //funcConfirmExitContinuousScan is the callback funtion
      //Return true：Exit continuous scan mode without saving the captured image data. Return false: Stay on the original viewer

   funcConfirmExit: funcConfirmExit, 
      //funcConfirmExit is the callback funtion
      //Return true：End this capture without saving the image data. Return false: Stay on the original viewer
    },

   filterViewer?:{
     visibility?: boolean,   //Whether to display filter viewer. The default value is true.

     insert?: {  //Insert an image  
       visibility?: boolean,   //Whether to display the insert icon. The default value is true.
       position: string   //Set whether to insert the image "before" or "after" the current image. The default value is "before".
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
 
       exitDocumentScanAfterSave: false  //The default value is false.
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

     function funcConfirmExitContinuousScan(){
	return true;  
     }

     function funcConfirmExit(){
	return true;  
     }

```

**Availability**

<div class="availability"></div>

|:-|:-|
|ActiveX|H5(Windows)|H5(macOS/TWAIN)|H5(macOS/ICA)|H5(Linux)|WASM(Mobile)|
|  not supported  | not supported  |  not supported | not supported |  not supported |  v17.2+  |

**Example**

```javascript
<div id="dwtcontrolContainer" style="width:270px;height:350px"></div>
<input type="button" value="scan document" onclick="ScanDocument();" />
<script type="text/javascript">
function ScanDocument() {
  var DWObject = Dynamsoft.DWT.GetWebTwain('dwtcontrolContainer');
     if (DWObject) {
     if(!DWObject.UseLocalService) {
	DWObject.Addon.Camera.scanDocument({element: document.getElementById("dwtcontrolContainer")}).then(
	function(){console.log("OK");}, 
	function(error){console.log(error.message);});
	} 
      }
   }
 </script>
```

