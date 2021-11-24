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
<!--
## scanDocument

**Syntax**

``` typescript
/**
 * Open the camera and enable real-time border detection to capture document(s).
 * @param scanConfiguration Specify the scan configuration.
 */
scanDocument(scanConfiguration?: ScanConfiguration
): Promise<Resolution>;

interface ScanConfiguration {
element?: HTMLDivElement,  //可以绑定element也可以绑定element的id，绑定过了，就在
                               //element里面显示showVideo. 不绑定，则全屏显示
scannerViewer?: {
      deviceId?: string,   //摄像头id
   mode?: string,  //” document”: 文档模式，”picture”: 图片模式，Default：” document”； 
             //如果为图片模式拍照或load后就直接结束。
                 //mode属性17.2版本先不允许设置，17.2只支持document
       maxDocuments:int    // scanDocument显示的界面中，最多可以连续scan 与load
                         //本地 document的张数。默认值为：MaxImagesInBuffer-buffer中已经存在的图片数, 
                         //scan或load超过了这个数值，则会触发video-error事件
       fullScreen?: boolean,   //是否video显示全屏, default: false
       polygonStyle?:{          
  	    stroke: "yellow",            //default : "#fe8e14"
          strokeWidth: "2px",       //default: "1px"
          dash:string //    "solid ", "dashed"    default: "solid "
       },

       resolution?: {
	     visibility?: boolean,   //Resolution图标是否可见，Default：true
	  valueList?:[ {   
	    label: string,  // 下拉框中的可见值for example：”1920x1080”
           value: Resolution  //设置到camera中的真正分辨率, 类似于{ width:1920, height:1080}
         },{……}]
	  defaultValue?: Resolution , //根据ValueList中设置值的顺序，设置默认值。
//如果该值不设置，默认给出四组值：
    //“720P”：{width：1280，height：720}
    //“1080P”：{width：1920，height：1080}
//“2K”：{width：2560，height：1440}
//“4K”：{width：3840，height：2160} 
    //上面四组值，如果当前的camera不支持，Resolution就取设置值的最接近的那个，有可能后面几组值的Resolution会重复。  

//如果设置defaultValue，并能在当前的camera中成功设置，如果设置的defaultValue不存在valueList中，则在最后加一个defaultValue，label显示形式为：widthxheight
如果设置成功的defaultValue存在于valueList中，则默认选中defaultValue。

    //如果设置defaultValue，并在当前的camera中设置不成功，则会取设置值的最接近的Resolution， 并会按取到的最接近的Resolution去valueList 匹配，如果匹配成功，则默认选中那个选项，否则在valueList列表的最后添加一个最接近的Resolution的值，label的格式参考上面的，并选中添加的选项（这里需要注意，选中的选项不是设置的defaultValue， 而是与defaultValue最接近的Resolution）
//如果没设置defaultValue，只设置了valueList，则取valueList最后一个值。
//如果valueList也没设置，则取默认值：1280x720 最接近的值（包括1280x720）

默认值为value List中最后一个值。
              },

   autoScan?: { //这个属性只是对拍照有效，对本地图片的load无效
	  visibility?: boolean,   //自动拍照图标是否可见，Default：true
	   enableAutoScan?: boolean,   //是否自动拍照，Default：false, 
   },

   autoDetect?: { //这个属性只是对拍照有效，对本地图片的load无效
	  visibility?: boolean,   //自动检测图标是否可见，Default：true
       enableAutoDetect?: boolean,   //是否出现自动检测，Default：false,        
       acceptedPolygonConfidence:80,  //默认值为80

           //下面两个属性是隐藏的设置，注意写文档时先不公开
       acceptedBlurryScore:0， //默认值为0
	    autoCaptureDelay: 1000   //默认1000ms
    },


        continuousScan?:{   //这个属性只是对拍照有效，对本地图片的load无效
	   visibility?: boolean,   //连续拍照图标是否可见，Default：true
	   enableContinuousScan?: boolean,   //是否默认连续拍照，Default：true,
    },

    switchCamera?: {  //默认显示的是后置摄像头
   visibility?: boolean,   //前后摄像头切换图标是否可见，Default：true
    },
                                   
    loadLocalFile?: {  
	   visibility?: boolean,   //Load本地图片图标是否可见，Default：true
    },

 funcConfirmExitContinuousScan: funcConfirmExitContinuousScan, 
// funcConfirmExitContinuousScan为回调函数，
//返回值为true：退出连续拍照模式，并不保留数据。 false:停留在原来界面

funcConfirmExit: funcConfirmExit, 
// funcConfirmExit为回调函数，
// 返回值为true：结束这次capture，并不保存数据。 false:停留在原来界面


    },

filterViewer? {
       visibility?: boolean,   //filter界面是否可见，Default：true

insert?: {  //这个属性只是针对多张的图片或文档，单张不支持
		   //insert只能一张一张插入，拍照与Load都只能是一张，详见下面需求
		visibility?: boolean,   //replace图标是否可见，Default：true
		position: string  //“before” “after”, default: “before”
},

remove?: { //这个属性只是针对多张的图片或文档，单张不支持
		visibility?: boolean,   //右上角的delete图标是否可见，Default：true
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


function funcConfirmExitContinuousScan(){
	return true;  //true：退出连续模式，并不保留数据。 false:停留在原来界面
}

function funcConfirmExit(){
	return true;  //true：结束这次capture，并不保存数据。 false:停留在原来界面
}

```


-->






