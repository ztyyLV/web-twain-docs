---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN Features - Input
keywords: Dynamic Web TWAIN, Documentation, Input
breadcrumbText: Input
description: Dynamic Web TWAIN SDK Documentation Input Page
permalink: /indepth/features/input.html
---

# Input

This section introduces different ways to get data into the `DWT` buffer.

## Scanners

### Scan From a Local Scanner

> Supported on [desktop]({{site.getstarted}}platform.html#browsers-on-desktop-devices).

A local scanner refers to a scanner that is plugged in the same desktop via USB or is available on the local network and is accessible on the local desktop. The latter is generally known as a network scanner. A network scanner is connected to the LAN itself (cable or WI-FI) and is assigned a static IP. The scanner driver from the device vendor then configures the IP to connect to the scanner.

> As far as `DWT` is concerned, a network scanner is just like a local scanner because its driver has taken care of the network connection behind the scene.

### Scan From a Remote Scanner

> Supported on [desktop]({{site.getstarted}}platform.html#browsers-on-desktop-devices) and [mobile]({{site.getstarted}}platform.html#browsers-on-mobile-devices) platforms.

A remote scanner refers to a scanner that is.

* Not connected to the initiating device
* Connected and accessible on a `Windows` desktop on LAN (USB or network) where 'Dynamsoft Service' must be installed

Since Dynamic Web TWAIN v18, Remote Scan can be configured to allow connection to all available Dynamsoft Services and eSCL scanners. For more information, check out <a href="{{site.faq}}how-to-enable-remote-scan.html" target="_blank">how to enable remote scan</a>.

<!--

### Scan from a TWAIN-Direct scanner

> Supported on [desktop]({{site.getstarted}}platform.html#browsers-on-desktop-devices) and [mobile]({{site.getstarted}}platform.html#browsers-on-mobile-devices).

A TWAIN-Direct scanner refers to a device that supports the next generation of the TWAIN protocal called [ `TWAIN-Direct` ](https://www.twaindirect.org/).

For more information, check [How to use a TWAIN-Direct scanner](#how-to-use-a-twain-direct-scanner).
-->


#### Get a list of services from the proxy server and a list of devices for the selected service.

``` javascript
//Get a list of services
var dynamsoftServices;
Dynamsoft.DWT.FindDynamsoftServiceAsync("https://s0000001.dynamsoftwebtwain.com:port")    //e.g. http://192.168.8.126:10086
	.then(function (serviceInfo) {
		dynamsoftServices = serviceInfo;  //populates the service list dropdown
	}).catch((exp) => { console.log(exp.message); });

//Get a list of devices for the service
var deviceList, serviceDWTObject;
function service_onchange() {   //triggers when selecting a different service from the dropdown.
	Dynamsoft.DWT.CreateDWTObjectAsync(dynamsoftServices[0]).then((obj) => {
		serviceDWTObject = obj;
		return serviceDWTObject.GetDevicesAsync(0x3F0);
	}).then(function (devices) {
		deviceList = devices;   //populates the device list dropdown
	}).catch((exp) => { console.log(exp.message); });
}
```

With the above configuration, you can scan using one of the following two options.

*Option 1: Directly scan with the selected device. This is the simpler option.*

``` javascript
function onClickScanButton() {
	deviceList[0].acquireImage({}, DWObject).catch(function (exp) {
		console.error(exp.message);
	});
}
```

*Option 2: Scan with serviceDWTObject. This option allows more capability settings.*

``` javascript
function onClickScanButton() {
	serviceDWTObject.SelectDeviceAsync(deviceList[0]).then(function () {
		serviceDWTObject.OpenSource();
		serviceDWTObject.setCapabilities(
			{
				exception: "ignore",
				capabilities: [
					{
						capability: Dynamsoft.DWT.EnumDWT_Cap.ICAP_CONTRAST, // your own capability
						curValue: 500, // your own curValue
					},
					{
						capability: Dynamsoft.DWT.EnumDWT_Cap.CAP_PRINTERSTRING, // your own capability
						curValue: "abc", // your own curValue
						exception: "fail",
					},
					{
						capability: Dynamsoft.DWT.EnumDWT_Cap.ICAP_PIXELTYPE, // your own capability
						curValue: 0, // your own curValue
					},
				],
			},
			function (successData) {
				serviceDWTObject.AcquireImageAsync({}, DWObject).catch(function (exp) {
					console.error(exp.message);
				});

			},
			function (errorData) {
				console.error(errorData);
				serviceDWTObject.AcquireImageAsync({}, DWObject).catch(function (exp) {
					console.error(exp.message);
				});
			}
		);
		return serviceDWTObject.AcquireImageAsync({}, DWObject);
	}).catch(function (exp) {
		console.error(exp.message);
	});
}
```

#### Get a list of all devices for all the services from the proxy server

``` javascript
//Get all devices for all available services
var deviceList;
Dynamsoft.DWT.FindDevicesAsync("https://s0000001.dynamsoftwebtwain.com:port").then(function (devices) {   //e.g. http://192.168.8.126:10086
	deviceList = devices;   //populates the device list dropdown
}).catch(function (exp) {
	console.error(exp.message);
});
```

With the above configuration, you can scan using one of the following two options.

*Option 1: Directly scan with the selected device. This is the simpler option.*

``` javascript
function onClickScanButton() {
	deviceList[0].acquireImage({}, DWObject).catch(function (exp) {
		console.error(exp.message);
	});
}
```

*Option 2: Scan with serviceDWTObject. This option allows more capability settings.*

``` javascript
function onClickScanButton() {
	var serviceDWTObject;
	Dynamsoft.DWT.CreateDWTObjectAsync(deviceList[0].serviceInfo).then((obj) => {
		serviceDWTObject = obj;
	}).then(function () {
		return serviceDWTObject.SelectDeviceAsync(deviceList[0]);
	}).then(function () {
		serviceDWTObject.OpenSource();
		serviceDWTObject.setCapabilities(
			{
				exception: "ignore",
				capabilities: [
					{
						capability: Dynamsoft.DWT.EnumDWT_Cap.ICAP_CONTRAST, // your own capability
						curValue: 500, // your own curValue
					},
					{
						capability: Dynamsoft.DWT.EnumDWT_Cap.CAP_PRINTERSTRING, // your own capability
						curValue: "abc", // your own curValue
						exception: "fail",
					},
					{
						capability: Dynamsoft.DWT.EnumDWT_Cap.ICAP_PIXELTYPE, // your own capability
						curValue: 0, // your own curValue
					},
				],
			},
			function (successData) {
				serviceDWTObject.AcquireImageAsync({}, DWObject).catch(function (exp) {
					console.error(exp.message);
				});
			},
			function (errorData) {
				console.error(errorData);
				serviceDWTObject.AcquireImageAsync({}, DWObject).catch(function (exp) {
					console.error(exp.message);
				});
			}
		);
		return serviceDWTObject.AcquireImageAsync({}, DWObject);
	}).catch((exp) => { console.log(exp.message); });
}
```

#### Scanning on Android:  Get a list of all available devices

``` javascript
    var deviceList;
    Dynamsoft.DWT.FindDevicesAsync().then(function (devices) {
        deviceList = devices;   //This can be used to populate the device list dropdown.
    }).catch(function (exp) {
        console.error(exp.message);
    });

    function onClickScanButton() {
        deviceList[0].acquireImage({}, DWObject).catch(function (exp) {
            console.error(exp.message);
        });
    }
```

## Capture from cameras

### Use [MediaDevices Cameras]({{site.getstarted}}hardware.html#mediadevices-cameras)

Dynamic Web TWAIN also comes with a Camera add-on for you to capture images or documents using MediaDevices cameras, auto crop and adjust perspective. 

To include the Camera add-on, simply add a reference to the corresponding camera JS file which is included in the [resources folder]({{site.faq}}what-are-the-resources-files.html).

``` html
<script src="Resources/addon/dynamsoft.webtwain.addon.camera.js"></script>
```

[Try an online demo](https://demo.dynamsoft.com/web-twain/mobile-online-camera-scanner/) | [Get sample code](https://download.dynamsoft.com/Samples/DWT/SourceCode-DWT-Mobile-Camera-Scanner.zip)

Notes:

Make sure you deploy the sample to a web server that
   - runs HTTPS
   - serves the `*.wasm` file with `Content-Type: application/wasm`

The following code snippet shows how to use the camera add-on:

``` javascript
function CaptureImage() {
    if (DWObject) {
        var showVideoConfigs = {
            scannerViewer: {
                autoDetect: {
                    enableAutoDetect: true
                }
            },
            filterViewer: {
                exitDocumentScanAfterSave: true
            }
        };

        DWObject.Addon.Camera.scanDocument(showVideoConfigs).then(
            function () {
                console.log("OK");
            },
            function (error) {
                console.log(error.message);
            });
    }
}
```

### Use [DirectShow Cameras]({{site.getstarted}}hardware.html#directshow-cameras)

To include the Webcam add-on, simply add a reference to the corresponding webcam JS file which is included in the [resources folder]({{site.faq}}what-are-the-resources-files.html).

``` html
<script src="Resources/addon/dynamsoft.webtwain.addon.webcam.js"></script>
```

The following code snippet shows how to use a camera through `DirectShow`.
  

``` javascript
function PlayVideo(bShow) {
    if (DWObject) {
        DWObject.Addon.Webcam.StopVideo();
        DWObject.Addon.Webcam.SelectSource("CAMERA-NAME");
        DWObject.Addon.Webcam.PlayVideo(DWObject, 80, function() {});
    }
}

function CaptureImage() {
    if (DWObject) {
        DWObject.Addon.Webcam.SelectSource("CAMERA-NAME");
        var funCaptureImage = function() {
            setTimeout(function() {
                DWObject.Addon.Webcam.StopVideo();
            }, 50);
        };
        DWObject.Addon.Webcam.CaptureImage(funCaptureImage, funCaptureImage);
    }
}
```

## Load files

Load in this context means to open files which are accessible on the file system. These files can reside on the local disk or shared on the network.

> As a lightweight library, `DWT` only supports the following file types: BMP, JPG, TIF, PNG, and PDF. However, not all files of these types can be loaded correctly. Learn more [here]({{site.getstarted}}Filetype.html). If you come across a file that is of one of the supported file types but fails to load, please contact [Dynamsoft Support]({{site.about}}getsupport.html).

### [Recommended] Show the `Open File` dialog and select files to load.

> Supported on [desktop]({{site.getstarted}}platform.html#browsers-on-desktop-devices) and [mobile]({{site.getstarted}}platform.html#browsers-on-mobile-devices) platforms. 

The `Open File` dialog is only displayed on [desktop]({{site.getstarted}}platform.html#browsers-on-desktop-devices). On mobile browsers, users are presented with the option to take a picture, use an existing image on the device, or open an existing file stored on the device. 

``` javascript
var onSuccess = function() {
    console.log("Loaded a file successfully!");
};
var onFailure = function(errorCode, errorString) {
    console.log(errorString);
};
DWObject.IfShowFileDialog = true;
// PDF Rasterizer Addon is used here to ensure PDF support
DWObject.Addon.PDF.SetResolution(200);
DWObject.Addon.PDF.SetConvertMode(Dynamsoft.DWT.EnumDWT_ConvertMode.CM_RENDERALL);
DWObject.LoadImageEx("", Dynamsoft.DWT.EnumDWT_ImageType.IT_ALL, onSuccess, onFailure);
```

### Open an existing file using its absolute path

> Supported on [desktop]({{site.getstarted}}platform.html#browsers-on-desktop-devices) only. 

``` javascript
var onSuccess = function() {
    console.log("Loaded a file successfully!");
};
var onFailure = function(errorCode, errorString) {
    console.log(errorString);
};
DWObject.IfShowFileDialog = false;
// PDF Addon is used here to ensure PDF support
DWObject.Addon.PDF.SetResolution(200);
DWObject.Addon.PDF.SetConvertMode(Dynamsoft.DWT.EnumDWT_ConvertMode.CM_RENDERALL);
/* "YOUR-FILE-PATH" - example path
 * Windows: 
 *   Local: "D:\\Files\\sample.pdf"
 *   LAN: "\\\\192.168.1.45\\sme\\sample.tif"
 * macOS: "/Applications/Images/sample.pdf"
 * Linux: "/home/userA/Files/sample.pdf"
 */
DWObject.LoadImage("YOUR-FILE-PATH", onSuccess, onFailure);
```

### Drag and drop files onto the viewer area of a `WebTwain` instance

> Only supported on [desktop]({{site.getstarted}}platform.html#browsers-on-desktop-devices) platform.

### Download

> `Download` is another type of `Load`. The only difference between a `Download` with what's written above is that the file to load needs to be transferred to the local device via the network first. `DWT` takes care of the whole process and supports both `HTTP` and `FTP`.

#### `HTTP` or `HTTPS`

> Supported on [desktop]({{site.getstarted}}platform.html#browsers-on-desktop-devices) and [mobile]({{site.getstarted}}platform.html#browsers-on-mobile-devices) platforms. For this option, a URL is used to fetch the file. The URL either specifies the path of the file itself or points to a server-side script that eventually returns a file. Check out the code snippets below demonstrating both scenarios.

##### The URL specifies a file

``` javascript
/* The sample file path is: 
 * "http://localhost:300/files/sample.tif"
 */
var onSuccess = function() {
    console.log("Downloaded a file successfully!");
};
var onFailure = function(errorCode, errorString) {
    console.log(errorString);
};
DWObject.HTTPPort = 300;
DWObject.HTTPDownload("localhost", "/files/sample.tif", onSuccess, onFailure);
```

##### The URL points to a server-side script

> The method `HTTPDownloadEx` is used because the file type needs to be specified.

JavaScript

``` javascript
/* The sample file path is: 
 * "http://localhost:300/files/sample.tif"
 */
var onSuccess = function() {
    console.log("Downloaded a file successfully!");
};
var onFailure = function(errorCode, errorString) {
    console.log(errorString);
};
DWObject.HTTPPort = 300;
DWObject.HTTPDownloadEx("localhost", "/getFile.aspx", Dynamsoft.DWT.EnumDWT_ImageType.IT_TIF, onSuccess, onFailure);
```

Server-side script

> The server-side script can be written in any language and in any logic as long as it returns a file.

``` csharp
<%@ Page Language="C#"%>
<%
try
{
    String fileName = "sample.tif";
    String filePath = Server.MapPath(".") + "\\files\\" + fileName;
    System.IO.FileInfo fileInfo = new System.IO.FileInfo(filePath);
    Response.ClearContent();
    Response.ClearHeaders();
    Response.Clear();
    Response.Buffer = true;
    String fileNameEncode;
    fileNameEncode = HttpUtility.UrlEncode(fileName, System.Text.Encoding.UTF8);
    fileNameEncode = fileNameEncode.Replace("+", "%20");
    String appendedheader = "attachment;filename=" + fileNameEncode;
    Response.AppendHeader("Content-Disposition", appendedheader);
    Response.WriteFile(fileInfo.FullName);
    }
catch (Exception)
{	}
%>
```

#### `FTP`

> Supported on [desktop]({{site.getstarted}}platform.html#browsers-on-desktop-devices) platform.

The following code shows how to download a file from FTP.

``` javascript
/* The sample file path is: 
 * "ftp://192.168.8.20/files/sample.pdf"
 */
var onSuccess = function() {
    console.log("Downloaded a file successfully!");
};
var onFailure = function(errorCode, errorString) {
    console.log(errorString);
};
DWObject.FTPPort = 21;
DWObject.FTPUserName = "FTPUser";
DWObject.FTPPassword = "SomePassword";
DWObject.FTPDownloadEx("192.168.8.20", "/files/sample.pdf", Dynamsoft.DWT.EnumDWT_ImageType.IT_PDF, onSuccess, onFailure);
```

### Load files in binary or base64 string format 

> Supported on [desktop]({{site.getstarted}}platform.html#browsers-on-desktop-devices) and [mobile]({{site.getstarted}}platform.html#browsers-on-mobile-devices) platforms.

`DWT` is capable of reading files in binary or base64 string format.

``` javascript
var onSuccess = function() {
    console.log("Loaded a file successfully!");
};
var onFailure = function(errorCode, errorString) {
    console.log(errorString);
};
/**
 * The following function loads a binary/blob. 
 * The method ConvertToBlob() is used to create
 * the Blob as an example but the actual Blob can 
 * come from anywhere.
 */
function loadFileFromBinary() {
    if (DWObject) {
        DWObject.ConvertToBlob(
            [0],
            Dynamsoft.DWT.EnumDWT_ImageType.IT_PDF,
            function(result) {
                DWObject.LoadImageFromBinary(
                    result, onSuccess, onFailure);
            }, onFailure);
    }
}
/**
 * The following function loads a base64 string. 
 * The method ConvertToBase64() is used to create
 * the string as an example but the string can 
 * come from anywhere.
 * NOTE: the prefix such as "data:image/png;base64,"
 * should NOT be included in the data to load.
 */
function loadFileFromBase64() {
    if (DWObject) {
        DWObject.ConvertToBase64(
            [0],
            Dynamsoft.DWT.EnumDWT_ImageType.IT_PDF,
            function(result) {
                DWObject.LoadImageFromBase64Binary(
                    result.getData(0, result.getLength()),
                    Dynamsoft.DWT.EnumDWT_ImageType.IT_PDF,
                    onSuccess, onFailure);
            }, onFailure);
    }
}
```

### Load files from the system clipboard

> Supported on [desktop]({{site.getstarted}}platform.html#browsers-on-desktop-devices) only.

``` javascript
DWObject.LoadDibFromClipboard()
```

## Related KBs

<a href="{{site.faq}}what-physical-scanners-are-supported.html" target="_blank">What physical document scanners does the Dynamic Web TWAIN SDK support?</a>   
<a href="{{site.faq}}how-to-use-TWACKER-to-check-if-your-device-is-TWAIN-Compliant.html" target="_blank">How to use TWACKER to check if your device is TWAIN Compliant?</a>  
<a href="{{site.faq}}how-to-test-if-your-scanner-supports-ICA-scanning-on-Mac-OS.html" target="_blank">How to test if your scanner supports ICA scanning on Mac OS?</a>  
<a href="{{site.faq}}how-to-test-if-your-device-is-SANE-compliant.html" target="_blank">How to test if your device is SANE compliant?</a>  
<a href="{{site.faq}}setting-scan-settings-without-ui.html" target="_blank">Can I set scanning settings without using the default scanner’s UI? What pre-scanning settings do you support?</a>  
<a href="{{site.faq}}hide-offline-scanners-from-source-list.html" target="_blank">Can I hide offline scanner devices from the select source list?</a>  
<a href="{{site.faq}}hide-webcam-from-source-list.html" target="_blank">Can I hide webcam devices from the select source list? </a>  
