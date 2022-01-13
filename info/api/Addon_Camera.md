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

| |
|:-|:-|
|[`getSourceList()`](#getsourcelist) | [`selectSource()`](#selectsource)|[`getCurrentSource()`](#getcurrentsource)|[`closeSource()`](#closesource)|
|[`getResolution()`](#getresolution)| [`setResolution()`](#setresolution)| [`getCurrentResolution()`](#getcurrentresolution)| [`play()`](#play)|
|[`pause()`](#pause)| [`resume()`](#resume)| [`stop()`](#stop)|[`getStatus()`](#getstatus)|
|[`capture()`](#capture)| [`showVideo()`](#showvideo)| [`closeVideo()`](#closevideo)|[`scanDocument()`](#scandocument)|

---

## getSourceList

**Syntax**

``` typescript
/**
 * Return a list of all available cameras.
 */
getSourceList(): Promise<DeviceInfo[]>;

interface DeviceInfo{
    deviceId: string;
    label: string;
}
```

**Example**

``` javascript
DWObject.Addon.Camera.getSourceList();
```

---

## selectSource

**Syntax**

``` typescript
/**
 * Select a camera to use.
 * @param deviceId Specify the camera with its deviceId.
 */
selectSource(deviceId: string): Promise<DeviceInfo>;
```

---

## getCurrentSource

**Syntax**

``` typescript
/**
 * Return the info about the current camera.
 */
getCurrentSource():DeviceInfo;
```

---

## closeSource

**Syntax**

``` typescript
/**
 * Close the current camera.
 */
closeSource(): Promise<DeviceInfo>;
```

---

## getResolution

**Syntax**

``` typescript
/**
 * Return the resolutions supported by the current camera.
 */
getResolution(): Promise<Resolution[]>

interface Resolution{
    width: number;
    height: number;
}
```

---

## setResolution

**Syntax**

``` typescript
/**
 * Set the resolution for the current camera.
 * @param resolution Specify the resolution.
 */
setResolution(resolution: Resolution): Promise<Resolution>;
```

---

## getCurrentResolution

**Syntax**

``` typescript
/**
 * Return the resolution of the current camera.
 */
getCurrentResolution(): Promise<Resolution>;
```

**Usage notes**

If the camera is playing, the actual resolution is returned. If the camera is not playing, the last set resolution or null is returned.

---

## play

**Syntax**

``` typescript
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

---

## pause

**Syntax**

``` typescript
/**
 * Pause the video stream.
 */
pause(): void;
```

---

## resume

**Syntax**

``` typescript
/**
 * Resume the video stream.
 */
resume(): void;
```

---

## stop

**Syntax**

``` typescript
/**
 * Stop the video stream.
 */
stop(): void;
```

---

## getStatus

**Syntax**

``` typescript
/**
 * Return the status of the current camera.
 */
getStatus(): string;
```

**Usage notes**

The status string is either empty or one of the following: "playing", "paused", "stopped". An empty string means no camera is open.

---

## capture

**Syntax**

``` typescript
/**
 * Capture a frame from the video stream.
 */
capture(): Promise<Blob>;
```

---

## showVideo

**Syntax**

``` typescript
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

* `picture`: border detection is turned off and supports taking images consecutively. This is the default mode.
* `document`: border detection will be on and only supports taking one image at a time.

---

## closeVideo

**Syntax**

``` typescript
/**
 * Close the camera and hide the video streaming UI.
 */
closeVideo(): void;
```

**Availability**

<div class="availability"></div>

|:-|:-|
|ActiveX|H5(Windows)|H5(macOS/TWAIN)|H5(macOS/ICA)|H5(Linux)|WASM|
| not supported | v17.2+ | v17.2+ | v17.2+ | v17.2+ | supported |

<!--
## scanDocument

**Syntax**

``` typescript
/**
 * Open the camera to capture document(s).
 * @param scanConfiguration Specify the scan configuration.
 */
scanDocument(scanConfiguration?: ScanConfiguration
): Promise<Resolution>;

    element?: HTMLDivElement,  //Bind the elment or elment id. After binding, display the video in the spcified element, otherwise, display the video in full screen.
    scannerViewer?:{
       deviceId?: string,
       maxDocuments:int,       //The maximum documents can be captured/loaded in to the buffer.
       fullScreen?: boolean,   //Whether to display the video in full screen, the default value is false.

       polygonStyle?:{         //the sytle of the auto detect border
  	  stroke: "yellow",    //default : "#fe8e14"
          strokeWidth: "2px",  //default: "1px"
          dash:string          //the allowed value are "solid" and "dashed", the default value is "solid"
       },

       resolution?:{
	  visibility?: boolean,  //Whether to display the resolution icon in the upper left corner. The default value is true.
	  valueList?:[ {
	     label: string,     //The resolution value listed in the drop-down list. For example："1920x1080"
             value: Resolution  //The resolution you set. For example: { width:1920, height:1080}
               },{……}]
        },

       autoScan?:{   //Automatically capture when a clear document is detected. Only applicable to video scanning.
	  visibility?: boolean,     //Whether to display the automatic scan icon. The default value is true.
	  enableAutoScan?: boolean, //Whether to enable automatic scan. The default value is false.
        },

       autoDetect?:{  //Only applicable to video scanning.
	  visibility?: boolean,         //Whether to display the automatic border detection icon. The default value is true.
          enableAutoDetect?: boolean,   //Whether to enable automatic border detection. The default value is false.
          acceptedPolygonConfidence:80,  //The default value is 80. The higher the setting, the more accurate the automatic border detection.
        },

        continuousScan?:{   //Only applicable to video scanning.
	  visibility?: boolean,   //Whether to display the continuous scan icon. The default value is true.
	  enableContinuousScan?: boolean,  //Whether to enable continuous scan. The default value is true.
        },

        switchCamera?:{  //The default camera is the rear camera
          visibility?: boolean,   //Whether to display the switch camera icon. The default value is true.
        },

        loadLocalFile?:{
	   visibility?: boolean,   //Whether to display the load local file icon. The default value is true.
    },

 funcConfirmExitContinuousScan: funcConfirmExitContinuousScan,
// funcConfirmExitContinuousScan为回调函数，
//返回值为true：退出连续拍照模式，并不保留数据。 false:停留在原来界面

funcConfirmExit: funcConfirmExit,
// funcConfirmExit为回调函数，
// 返回值为true：结束这次capture，并不保存数据。 false:停留在原来界面

   funcConfirmExit: funcConfirmExit, 
      //funcConfirmExit is the callback funtion
      //Return true：End this capture without saving the image data. Return false: Stay on the original viewer
    },

   filterViewer? {
     visibility?: boolean,   //Whether to display filter viewer. The default value is true.

     insert?: {  //Insert an image  
       visibility?: boolean,   //Whether to display the insert icon. The default value is true.
       position: string   //Set whether to insert the image "before" or "after" the current image. The default value is "before".
       },

     remove?: { //Remove an image
	visibility?: boolean,   //Whether to display the remove icon. The default value is true.
       },
rotateLeft?: { //对图片与文档，无论单张与多张都有效。如果是图片，图片左旋转；
              //如果是文档，则crop之后的图片与原document都会跟则左转
		visibility?: boolean,   //左转图标是否可见，Default：true
},

filter?: {  //滤镜配置
      visibility?: boolean,   //滤镜配置图标是否可见，Default：true
	      valueList?:[ {   //如果该值不设置，默认6个全部列出来，original排在第一位，
                         //如果用户自己设置了该值，则按用户设置的顺序出现。
                         //用户在如果不设置original，则会默认在第一位置加上
	         label: string,  // 下拉框中的可见值for example：”Original”,该值可以修改为
                             //任意值，只是用来显示
                value: string, //真正作用的filter值，该值一定要按我们规定来来设置，否则无效,
			  //可以设置的值为：
			  //blackAndWhite: 黑白  1
			  //grayscale: 灰度  1
			  //removeShadow: 去阴影  1
			  //brightening: 增亮
			  //enhancementAndSharpening: 增强并锐化
			  // saveToner: 省墨
			  //original : 原图
		  option?: {
                   level: 1 //1,2,3  数字越大越慢，质量越好。Default：1
                }
              },{……}]
	      defaultValue?: string,   //defaultValue值如果设置为valueList中的值，
                              //则按用户设置的取,否则取original
       是否出现应用到所有页面   //当连续拍照或load多张图片或文档时
	},
	exitDocumentScanAfterSave: false  //default: false, 即save之后还可以继续capture
}，

cropViewer?: { //裁剪配置，该属性的配置只作用于文档
       visibility?: boolean,   //裁剪界面是否可见，Default：true

       polygonStyle?:{
  	    stroke: "yellow",            //default : "#fe8e14"
          strokeWidth: "2px",       //default: "1px"
          dash:string //    "solid ", "dashed"    default: "solid "
       },

rotateLeft?:{
		visibility?: boolean,   //左转图标是否可见，Default：true
},
rotateRight?:{
		visibility?: boolean,   //右转图标是否可见，Default：true
},
    	autoDetectBorder?:{
		visibility?: boolean,   //自动检测图标是否可见，Default：true
		enableAutoDetectBorder?: boolean,   //是否默认自动检测，Default：true，
				     //如果为false，则全图选中
},
}
}
-->





