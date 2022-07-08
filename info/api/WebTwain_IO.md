---
layout: default-layout
needAutoGenerateSidebar: true
noTitleIndex: true
title: Dynamic Web TWAIN API Reference - Input and Output APIs
keywords: Dynamic Web TWAIN, Documentation, API Reference, IO APIs
breadcrumbText: IO
description: Dynamic Web TWAIN SDK Documentation | API Reference | IO APIs Page
permalink: /info/api/WebTwain_IO.html
---

# {WebTwainObject} IO

The properties and methods on this page dwdwthe namespace {WebTwainObject}. {WebTwainObject} denotes the `WebTwain` instance. Learn about [how to create a web twain object]({{site.indepth}}features/initialize.html#creating-the-webtwain-instance).

## Methods

### Input Methods

|                                                   |
| :------------------------------------------------ | :------------------------------------------------------ | ----------------------------------------------------------- | ----------------------------------------------- |
| [`LoadImage()`](#loadimage)                       | [`LoadImageEx()`](#loadimageex)                         | [`LoadImageFromBase64Binary()`](#loadimagefrombase64binary) | [`LoadImageFromBinary()`](#loadimagefrombinary) |
| [`LoadDibFromClipboard()`](#loaddibfromclipboard) | [`FTPDownload()`](#ftpdownload)                         | [`FTPDownloadEx()`](#ftpdownloadex)                         | [`HTTPDownload()`](#httpdownload)               |
| [`HTTPDownloadEx()`](#httpdownloadex)             | [`HTTPDownloadThroughPost()`](#httpdownloadthroughpost) | [`HTTPDownloadDirectly()`](#httpdownloaddirectly)           |

### Output Methods

|                                                                                                                          |
| :----------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`ConvertToBase64()`]({{site.info}}api/WebTwain_IO.html#converttobase64)                                                 | [`ConvertToBlob()`]({{site.info}}api/WebTwain_IO.html#converttoblob)                                       | [`FTPUpload()`]({{site.info}}api/WebTwain_IO.html#ftpupload)                                                     |
| [`FTPUploadEx()`]({{site.info}}api/WebTwain_IO.html#ftpuploadex)                                                         | [`FTPUploadAllAsMultiPageTIFF()`]({{site.info}}api/WebTwain_IO.html#ftpuploadallasmultipagetiff)           | [`FTPUploadAllAsPDF()`]({{site.info}}api/WebTwain_IO.html#ftpuploadallaspdf)                                     |
| [`FTPUploadAsMultiPagePDF()`]({{site.info}}api/WebTwain_IO.html#ftpuploadasmultipagepdf)                                 | [`FTPUploadAsMultiPageTIFF()`]({{site.info}}api/WebTwain_IO.html#ftpuploadasmultipagetiff)                 | [`HTTPUpload()`]({{site.info}}api/WebTwain_IO.html#httpupload)                                                   |
| [`HTTPUploadThroughPutEx()`]({{site.info}}api/WebTwain_IO.html#httpuploadthroughputex)                                   | [`HTTPUploadThroughPost()`]({{site.info}}api/WebTwain_IO.html#httpuploadthroughpost)                       | [`HTTPUploadThroughPostEx()`]({{site.info}}api/WebTwain_IO.html#httpuploadthroughpostex)                         |
| [`HTTPUploadAllThroughPostAsMultiPageTIFF()`]({{site.info}}api/WebTwain_IO.html#httpuploadallthroughpostasmultipagetiff) | [`HTTPUploadAllThroughPostAsPDF()`]({{site.info}}api/WebTwain_IO.html#httpuploadallthroughpostaspdf)       | [`HTTPUploadThroughPostAsMultiPagePDF()`]({{site.info}}api/WebTwain_IO.html#httpuploadthroughpostasmultipagepdf) |
| [`HTTPUploadThroughPostAsMultiPageTIFF()`]({{site.info}}api/WebTwain_IO.html#httpuploadthroughpostasmultipagetiff)       | [`HTTPUploadThroughPostDirectly()`]({{site.info}}api/WebTwain_IO.html#httpuploadthroughpostdirectly)       | [`SaveAsBMP()`]({{site.info}}api/WebTwain_IO.html#saveasbmp)                                                     |
| [`SaveAsJPEG()`]({{site.info}}api/WebTwain_IO.html#saveasjpeg)                                                           | [`SaveAsPDF()`]({{site.info}}api/WebTwain_IO.html#saveaspdf)                                               | [`SaveAsPNG()`]({{site.info}}api/WebTwain_IO.html#saveaspng)                                                     |
| [`SaveAsTIFF()`]({{site.info}}api/WebTwain_IO.html#saveastiff)                                                           | [`SaveSelectedImagesAsMultiPagePDF()`]({{site.info}}api/WebTwain_IO.html#saveselectedimagesasmultipagepdf) | [`SaveSelectedImagesAsMultiPageTIFF()`]({{site.info}}api/WebTwain_IO.html#saveselectedimagesasmultipagetiff)     |
| [`SaveAllAsMultiPageTIFF()`]({{site.info}}api/WebTwain_IO.html#saveallasmultipagetiff)                                   | [`SaveAllAsPDF()`]({{site.info}}api/WebTwain_IO.html#saveallaspdf)                                         |

### Other Methods

|                                               |
| :-------------------------------------------- | :---------------------------------------- | --------------------------------------------------- | ----------------------------------------- |
| [`ClearTiffCustomTag()`](#cleartiffcustomtag) | [`SetTiffCustomTag()`](#settiffcustomtag) | [`ClearAllHTTPFormField()`](#clearallhttpformfield) | [`SetHTTPFormField()`](#sethttpformfield) |
| [`SetHTTPHeader()`](#sethttpheader)           | [`SetUploadSegment()`](#setuploadsegment) | [`ShowFileDialog()`](#showfiledialog)               | [`Print()`](#print)                       |
| [`PrintEx()`](#printex)                       |

## Properties

|                                                                 |
| :-------------------------------------------------------------- | :---------------------------------------------------------------------------- | ------------------------------------------- | --------------------------------------------------- |
| [`FTPPassword`](#ftppassword)                                   | [`FTPPort`](#ftpport)                                                         | [`FTPUserName`](#ftpusername)               | [`IfPASVMode`](#ifpasvmode)                         |
| [`HttpFieldNameOfUploadedImage`](#httpfieldnameofuploadedimage) | [`HTTPPort`](#httpport)                                                       | [`IfSSL`](#ifssl)                           | [`HTTPPostResponseString`](#httppostresponsestring) |
| [`IfShowFileDialog`](#ifshowfiledialog)                         | [`IfShowCancelDialogWhenImageTransfer`](#ifshowcanceldialogwhenimagetransfer) | [`IfShowProgressBar`](#ifshowprogressbar)   | [`JPEGQuality`](#jpegquality)                       |
| [`IfTiffMultiPage`](#iftiffmultipage)                           | [`TIFFCompressionType`](#tiffcompressiontype)                                 | [`MaxUploadImageSize`](#maxuploadimagesize) | [`IfAppendImage`](#ifappendimage)                   |

## Events

|                                   |
| :-------------------------------- | :-------------------------- | --------------------------------------------------------------- |
| [`OnGetFilePath`](#ongetfilepath) | [`OnPostLoad`](#onpostload) | [`OnInternetTransferPercentage`](#oninternettransferpercentage) |

---

## IfAppendImage

**Syntax**

```javascript
/**
 * Return or set whether to insert or append images when they are scanned/loaded.
 */
IfAppendImage: boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v5.1+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Usage notes**

The default value is true which means the newly acquired images will be appended after the last image in buffer. If it's set to false, the images will be inserted before the current image.

An important thing to note here is that, by design, the current image is always the last acquired one which means the images acquired after `IfAppendImage` is set to false will be displayed/kept in reverse order.

To make sure the order is as the pages are scanned while `IfAppendImage` is false, the easiest way is to increase `CurrentImageIndexInBuffer` by 1 in the event `OnPostTransfer`.

---

## LoadImage

**Syntax**

```javascript
/**
 * Load image(s) specified by its absolute path.
 * @param fileName The path of the image to load.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
LoadImage(
    fileName: string,
    successCallback ? : () => void,
    failureCallback ? : (
        errorCode: number,
        errorString: string) => void
): void | boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v4.0+  </td>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Example**

```javascript
DWObject.LoadImage(
  "C:\\DWT.jpg",
  function () {
    console.log("success");
  },
  function (errorCode, errorString) {
    console.log(errorString);
  }
);
```

---

## LoadImageEx

**Syntax**

```javascript
/**
 * Load image(s) specified by its absolute path.
 * @param fileName The path of the image to load.
 * @param type The format of the image.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
LoadImageEx(
    fileName: string,
    type: Dynamsoft.DWT.EnumDWT_ImageType | number,
    successCallback ? : () => void,
    failureCallback ? : (
        errorCode: number,
        errorString: string) => void
): void | boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v5.0+  </td>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.1+ </td>
</tr>

</table>
</div>

**Usage notes**

On mobile devices, `Dynamsoft.DWT.EnumDWT_ImageType.IT_All` means "JPG, PNG, TIF" while it means "BMP, JPG, PNG, TIF, PDF" on desktop.

**Example**

```javascript
DWObject.LoadImageEx(
  "C:\\DWT.jpg",
  Dynamsoft.DWT.EnumDWT_ImageType.IT_JPG,
  function () {
    console.log("success");
  },
  function (errorCode, errorString) {
    console.log(errorString);
  }
);
```

---

## LoadImageFromBase64Binary

**Syntax**

```javascript
/**
 * Load image(s) from a base64 string.
 * @param imageData The image data which is a base64 string without the data URI scheme.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
LoadImageFromBase64Binary(
    imageData: string,
    imageType: Dynamsoft.DWT.EnumDWT_ImageType,
    successCallback ? : () => void,
    failureCallback ? : (
        errorCode: number,
        errorString: string) => void
): void | boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v6.2+ </td>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.1+ </td>
</tr>

</table>
</div>

**Example**

```javascript
DWObject.ConvertToBase64(
  [0, 1, 2],
  Dynamsoft.DWT.EnumDWT_ImageType.IT_PDF,
  function (result, indices, type) {
    DWObject.LoadImageFromBase64Binary(
      result.getData(0, result.getLength()),
      Dynamsoft.DWT.EnumDWT_ImageType.IT_PDF,
      function () {
        console.log("success");
      },
      function (errorCode, errorString) {
        console.log(errorString);
      }
    );
  },
  function (errorCode, errorString) {
    console.log(errorString);
  }
);
```

---

## LoadImageFromBinary

**Syntax**

```javascript
/**
 * Load image(s) from a binary object (Blob | ArrayBuffer).
 * @param imageData The image data.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
LoadImageFromBinary(
    imageData: Blob | ArrayBuffer,
    successCallback: () => void,
    failureCallback: (
        errorCode: number,
        errorString: string) => void
): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported </td>
<td align="center">v16.0+ </td>
<td align="center">v16.0+ </td>
<td align="center">v16.0+ </td>
<td align="center">v16.0+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

**Example**

```javascript
DWObject.ConvertToBlob(
  [0, 1, 2],
  Dynamsoft.DWT.EnumDWT_ImageType.IT_PDF,
  function (result, indices, type) {
    DWObject.LoadImageFromBinary(
      result,
      function () {
        console.log("success");
      },
      function (errorCode, errorString) {
        console.log(errorString);
      }
    );
  },
  function (errorCode, errorString) {
    console.log(errorString);
  }
);
```

---

## LoadDibFromClipboard

**Syntax**

```javascript
/**
 * Load an image from the system clipboard. The image must be in DIB format.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
LoadDibFromClipboard(
    successCallback ? : () => void,
    failureCallback ? : (
        errorCode: number,
        errorString: string) => void
): void | boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v4.1+ </td>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Usage notes**

If called without any callback functions, these methods (except for `LoadImageFromBinary()` ) become synchronously and return a boolean value to indicate whether it succeeded.

However, calling them asynchronously is recommended.

---

<!--

## LoadDibFromClipboardAsync

**Syntax**

``` javascript
/**
 * Load an image from the system clipboard. The image must be in DIB format.
 */
LoadDibFromClipboardAsync(): Promise < boolean > ;
```

--->

## OnGetFilePath

**Syntax**

```javascript
/**
 * This event is triggered when {ShowFileDialog} is called or when  {LoadImageEx} is called with {IfShowFileDialog} set to true.
 * @argument isSave Whether or not the event is triggered after a save-file dialog was shown or a open-file dialog.
 * @argument filesCount How many files were selected.
 * @argument index The index of the current image.
 * @argument directory The parent directory of currently selected file(s), "\\" is not included. If the methed ShowFileDialog() failed, the initial directory path set in the ShowFileDialog method is returned.
 * @argument fileName The current file name.
 */
RegisterEvent(
  "OnGetFilePath",
  function (
    isSave: boolean,
    filesCount: number,
    index: number,
    directory: string,
    fileName: string
  ) {}
);
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v8.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## OnPostLoad

**Syntax**

```javascript
/**
 * This event is triggered when a file from a local directory has been loaded into the control.
 * @argument directory The directory of the loaded file.
 * @argument fileName The name of the loaded file.
 * @argument fileType The file type.
 */
RegisterEvent(
  "OnPostLoad",
  function (directory: string, fileName: string, fileType: string) {}
);
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v6.3+ </td>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Example**

```javascript
DWObject.RegisterEvent("OnPostLoad", function (path, name, type) {
  alert(path + "\\" + name);
});
```

---

## FTPDownload

**Syntax**

```javascript
/**
 * Download the specified file via FTP
 * @param host The FTP Host.
 * @param path Specify the file to download.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
FTPDownload(
    host: string,
    path: string,
    successCallback: () => void,
    failureCallBack: (
        errorCode: number,
        errorString: string) => void
): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported  </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## FTPDownloadEx

**Syntax**

```javascript
/**
 * Download the specified file via FTP.
 * @param host The FTP Host.
 * @param path Specify the file to download.
 * @param type The format of the file.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
FTPDownloadEx(
    host: string,
    path: string,
    type: Dynamsoft.DWT.EnumDWT_ImageType | number,
    successCallback: () => void,
    failureCallBack: (
        errorCode: number,
        errorString: string) => void
): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported  </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## FTPUpload

**Syntax**

```javascript
/**
 * Upload the specified image via FTP.
 * @param host The FTP Host.
 * @param index Specify the image.
 * @param path The path to save the file.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
FTPUpload(
    host: string,
    index: number,
    path: string,
    successCallback: () => void,
    failureCallback: (
        errorCode: number,
        errorString: string) => void
): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported  </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## FTPUploadEx

**Syntax**

```javascript
/**
 * Upload the specified image via FTP.
 * @param host The FTP Host.
 * @param index Specify the image.
 * @param path The path to save the file.
 * @param type The format of the file.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
FTPUploadEx(
    host: string,
    index: number,
    path: string,
    type: Dynamsoft.DWT.EnumDWT_ImageType | number,
    successCallback: () => void,
    failureCallback: (
        errorCode: number,
        errorString: string) => void
): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported  </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## FTPUploadAllAsMultiPageTIFF

**Syntax**

```javascript
/**
 * Upload all images as a multi-page TIFF via FTP.
 * @param host The FTP Host.
 * @param path Specify the path to save the file.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
FTPUploadAllAsMultiPageTIFF(
    host: string,
    path: string,
    successCallback: () => void,
    failureCallback: (
        errorCode: number,
        errorString: string) => void
): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported  </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## FTPUploadAllAsPDF

**Syntax**

```javascript
/**
 * Upload all images as a multi-page PDF via FTP.
 * @param host The FTP Host.
 * @param path Specify the path to save the file.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
FTPUploadAllAsPDF(
    host: string,
    path: string,
    successCallback: () => void,
    failureCallback: (
        errorCode: number,
        errorString: string) => void
): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported  </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## FTPUploadAsMultiPagePDF

**Syntax**

```javascript
/**
 * Upload selected images as a multi-page PDF via FTP.
 * @param host The FTP Host.
 * @param path Specify the path to save the file.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
FTPUploadAsMultiPagePDF(
    host: string,
    path: string,
    successCallback: () => void,
    failureCallback: (
        errorCode: number,
        errorString: string) => void
): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported  </td>
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## FTPUploadAsMultiPageTIFF

**Syntax**

```javascript
/**
 * Upload selected images as a multi-page TIFF via FTP.
 * @param host The FTP Host.
 * @param path Specify the path to save the file.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
FTPUploadAsMultiPageTIFF(
    host: string,
    path: string,
    type: Dynamsoft.DWT.EnumDWT_ImageType | number,
    successCallback: () => void,
    failureCallback: (
        errorCode: number,
        errorString: string) => void
): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported  </td>
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## FTPUserName

**Syntax**

```javascript
/**
 * The password to connect to the FTP.
 */
FTPUserName: string;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported  </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## FTPPassword

**Syntax**

```javascript
/**
 * The password to connect to the FTP.
 */
FTPPassword: string;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported  </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## FTPPort

**Syntax**

```javascript
/**
 * The port to connect to the FTP.
 */
FTPPort: number;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported  </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## IfPASVMode

**Syntax**

```javascript
/**
 * Return or set whether to use passive mode when connect to the FTP.
 */
IfPASVMode: boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported  </td>
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">not supported </td>
</tr>


</table>
</div>

---

## HTTPPassword

**Syntax**

```javascript
/**
 * [Deprecation] Return or set the password used to log into the HTTP server.
 */
HTTPPassword: string;
```

---

## HTTPUserName

**Syntax**

```javascript
/**
 * [Deprecation] Return or set the user name used to log into the HTTP server.
 */
HTTPUserName: string;
```

---

## HTTPDownload

**Syntax**

```javascript
/**
 * Download the specified file via a HTTP Get request.
 * @param host The HTTP Host.
 * @param path Specify the path of the file to download.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
HTTPDownload(
    host: string,
    path: string,
    successCallback: () => void,
    failureCallback: (
        errorCode: number,
        errorString: string) => void
): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## HTTPDownloadEx

**Syntax**

```javascript
/**
 * Download the specified file via a HTTP Get request.
 * @param host The HTTP Host.
 * @param path Specify the path of the file to download.
 * @param type The format of the file.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
HTTPDownloadEx(
    host: string,
    path: string,
    type: Dynamsoft.DWT.EnumDWT_ImageType | number,
    successCallback: () => void,
    failureCallback: (
        errorCode: number,
        errorString: string) => void
): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## HTTPDownloadThroughPost

**Syntax**

```javascript
/**
 * Download the specified file via a HTTP Post request.
 * @param host The HTTP Host.
 * @param path Specify the path of the file to download.
 * @param type The format of the file.
 * @param onEmptyResponse A callback function that is executed if the response is empty.
 * @param onServerReturnedSomething A callback function that is executed if the response is not empty.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 * @argument response The response string.
 */
HTTPDownloadThroughPost(
    host: string,
    path: string,
    type: Dynamsoft.DWT.EnumDWT_ImageType | number,
    onEmptyResponse: () => void,
    onServerReturnedSomething: (
        errorCode: number,
        errorString: string,
        response: string, ) => void,
): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## HTTPDownloadDirectly

**Syntax**

```javascript
/**
 * Download the specified file via a HTTP Get request.
 * @param host The HTTP Host.
 * @param path Specify the path of the file to download.
 * @param localPath Specify where to save the file.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
HTTPDownloadDirectly(
    host: string,
    path: string,
    localPath: string,
    successCallback: () => void,
    failureCallback: (
        errorCode: number,
        errorString: string) => void
): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported </td>
<td align="center">v7.0+ </td>
<td align="center">v7.0+ </td>
<td align="center">v7.0+ </td>
<td align="center">v7.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Usage notes**

The Dynamic Web TWAIN library will decode the downloaded data based on the `type` parameter ( `HTTPDownloadEx()` , `HTTPDownloadThroughPost()` ) or the extension of the file in the `path` parameter ( `HTTPDownload()` ).

For security reasons, the method `HTTPDownloadDirectly()` can only download the specified file to a whitelisted location. In other words, the user needs to call the method [ShowFileDialog()](#showfiledialog) and then get a whitelisted location to use. Check out the example below.

**Example**

```javascript
DWObject.RegisterEvent(
  "OnGetFilePath",
  function (isSave, filesCount, index, directory, fileName) {
    DWObject.HTTPDownloadDirectly(
      "tst.dynamsoft.com",
      "/public/download/tools/Twack_32.msi",
      directory + "\\" + fileName,
      function () {},
      function (errorCode, errorString) {
        console.log(errorString);
      }
    );
  }
);
DWObject.ShowFileDialog(true, "MSI|*.msi", 0, ".msi", "", true, false, 1);
```

---

## HTTPUpload

**Syntax**

```javascript
/**
 * Upload the specified image(s) via a HTTP Post.
 * @param URL The server-side script to receive the post.
 * @param indices Specify the image(s).
 * @param type The format of the file.
 * @param dataFormat Whether to upload the file as binary or a base64 string.
 * @param fileName The file name.
 * @param onEmptyResponse A callback function that is executed if the response is empty.
 * @param onServerReturnedSomething A callback function that is executed if the response is not empty.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 * @argument response The response string.
 */
HTTPUpload(
    URL: string,
    indices: number[],
    type: Dynamsoft.DWT.EnumDWT_ImageType | number,
    dataFormat: Dynamsoft.DWT.EnumDWT_UploadDataFormat | number,
    fileName: string,
    onEmptyResponse: () => void,
    onServerReturnedSomething: (
        errorCode: number,
        errorString: string,
        response: string) => void
): void;
HTTPUpload(
    URL: string,
    indices: number[],
    type: Dynamsoft.DWT.EnumDWT_ImageType | number,
    dataFormat: Dynamsoft.DWT.EnumDWT_UploadDataFormat | number,
    onEmptyResponse: () => void,
    onServerReturnedSomething: (
        errorCode: number,
        errorString: string,
        response: string) => void
): void;
HTTPUpload(
    URL: string,
    onEmptyResponse: () => void,
    onServerReturnedSomething: (
        errorCode: number,
        errorString: string,
        response: string) => void
): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported  </td>
<td align="center">v12.0+ </td>
<td align="center">v12.0+ </td>
<td align="center">v12.0+ </td>
<td align="center">v12.0+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## HTTPUploadThroughPutEx

**Syntax**

```javascript
/**
 * Upload the specified image via a HTTP Put request.
 * @param host The HTTP Host.
 * @param index Specify the image.
 * @param path Specify the path to put the file.
 * @param type The format of the file.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
HTTPUploadThroughPutEx(
    host: string,
    index: number,
    path: string,
    type: Dynamsoft.DWT.EnumDWT_ImageType | number,
    successCallback: () => void,
    failureCallback: (
        errorCode: number,
        errorString: string) => void
): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## HTTPUploadThroughPost

**Syntax**

```javascript
/**
 * Upload the specified image via a HTTP Post request.
 * @param host The HTTP Host.
 * @param index Specify the image.
 * @param target The target wherethe request is sent.
 * @param type The format of the file.
 * @param fileName The file name.
 * @param onEmptyResponse A callback function that is executed if the response is empty.
 * @param onServerReturnedSomething A callback function that is executed if the response is not empty.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 * @argument response The response string.
 */
HTTPUploadThroughPost(
    host: string,
    index: number,
    target: string,
    fileName: string,
    onEmptyResponse: () => void,
    onServerReturnedSomething: (
        errorCode: number,
        errorString: string,
        response: string) => void
): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## HTTPUploadThroughPostEx

**Syntax**

```javascript
/**
 * Upload the specified image via a HTTP Post request.
 * @param host The HTTP Host.
 * @param index Specify the image.
 * @param target The target wherethe request is sent.
 * @param fileName The file name.
 * @param type The format of the file.
 * @param onEmptyResponse A callback function that is executed if the response is empty.
 * @param onServerReturnedSomething A callback function that is executed if the response is not empty.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 * @argument response The response string.
 */
HTTPUploadThroughPostEx(
    host: string,
    index: number,
    target: string,
    fileName: string,
    type: Dynamsoft.DWT.EnumDWT_ImageType | number,
    onEmptyResponse: () => void,
    onServerReturnedSomething: (
        errorCode: number,
        errorString: string,
        response: string) => void
): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## HTTPUploadAllThroughPostAsMultiPageTIFF

**Syntax**

```javascript
/**
 * Upload all images in the buffer as a TIFF file via a HTTP Post request.
 * @param host The HTTP Host.
 * @param target The target wherethe request is sent.
 * @param fileName The file name.
 * @param onEmptyResponse A callback function that is executed if the response is empty.
 * @param onServerReturnedSomething A callback function that is executed if the response is not empty.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 * @argument response The response string.
 */
HTTPUploadAllThroughPostAsMultiPageTIFF(
    host: string,
    target: string,
    fileName: string,
    onEmptyResponse: () => void,
    onServerReturnedSomething: (
        errorCode: number,
        errorString: string,
        response: string) => void
): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">v4.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## HTTPUploadAllThroughPostAsPDF

**Syntax**

```javascript
/**
 * Upload all images in the buffer as a PDF file via a HTTP Post request.
 * @param host The HTTP Host.
 * @param target The target where the request is sent.
 * @param fileName The file name.
 * @param onEmptyResponse A callback function that is executed if the response is empty.
 * @param onServerReturnedSomething A callback function that is executed if the response is not empty.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 * @argument response The response string.
 */
HTTPUploadAllThroughPostAsPDF(
    host: string,
    target: string,
    fileName: string,
    onEmptyResponse: () => void,
    onServerReturnedSomething: (
        errorCode: number,
        errorString: string,
        response: string) => void
): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## HTTPUploadThroughPostAsMultiPagePDF

**Syntax**

```javascript
/**
 * Upload all selected images in the buffer as a PDF file via a HTTP Post request.
 * @param host The HTTP Host.
 * @param target The target wherethe request is sent.
 * @param fileName The file name.
 * @param onEmptyResponse A callback function that is executed if the response is empty.
 * @param onServerReturnedSomething A callback function that is executed if the response is not empty.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 * @argument response The response string.
 */
HTTPUploadThroughPostAsMultiPagePDF(
    host: string,
    target: string,
    fileName: string,
    onEmptyResponse: () => void,
    onServerReturnedSomething: (
        errorCode: number,
        errorString: string,
        response: string) => void
): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## HTTPUploadThroughPostAsMultiPageTIFF

**Syntax**

```javascript
/**
 * Upload all selected images in the buffer as a TIFF file via a HTTP Post request.
 * @param host The HTTP Host.
 * @param target The target wherethe request is sent.
 * @param fileName The file name.
 * @param onEmptyResponse A callback function that is executed if the response is empty.
 * @param onServerReturnedSomething A callback function that is executed if the response is not empty.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 * @argument response The response string.
 */
HTTPUploadThroughPostAsMultiPageTIFF(
    host: string,
    target: string,
    fileName: string,
    onEmptyResponse: () => void,
    onServerReturnedSomething: (
        errorCode: number,
        errorString: string,
        response: string) => void
): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## HTTPUploadThroughPostDirectly

**Syntax**

```javascript
/**
 * Upload the specified file via a HTTP Post request.
 * @param host The HTTP Host.
 * @param path Specify the file to upload.
 * @param target The target wherethe request is sent.
 * @param fileName The file name.
 * @param onEmptyResponse A callback function that is executed if the response is empty.
 * @param onServerReturnedSomething A callback function that is executed if the response is not empty.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 * @argument response The response string.
 */
HTTPUploadThroughPostDirectly(
    host: string,
    path: string,
    target: string,
    fileName: string,
    onEmptyResponse: () => void,
    onServerReturnedSomething: (
        errorCode: number,
        errorString: string,
        response: string) => void
): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v7.0+ </td>
<td align="center">v7.0+ </td>
<td align="center">v7.0+ </td>
<td align="center">v7.0+ </td>
<td align="center">v7.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Usage notes**

For security reasons, the method `HTTPUploadThroughPostDirectly()` can only upload a whitelisted file. In other words, the local file to upload should be either created by the library or selected manually by the user.

To select a local file to upload, call the method [ShowFileDialog()](#showfiledialog) and then get the file path in the callback [OnGetFilePath](#ongetfilepath). Check out the example below.

**Example**

```javascript
DWObject.RegisterEvent(
  "OnGetFilePath",
  function (isSave, filesCount, index, directory, fileName) {
    DWObject.HTTPUploadThroughPostDirectly(
      "localhost",
      directory + "\\" + fileName,
      "SaveUploadedFile.aspx",
      fileName,
      function () {},
      function (errorCode, errorString, response) {
        console.log(errorString + " " + response);
      }
    );
  }
);
DWObject.ShowFileDialog(false, "All Files|*.*", 0, "", "", false, false, 1);
```

Sample code for the target script (SaveUploadedFile.aspx)

```csharp
<%@ Page Language="C#" %>
<%
    try{
        String strImageName;
        HttpFileCollection files = HttpContext.Current.Request.Files;
        HttpPostedFile uploadfile = files["RemoteFile"];
        strImageName = uploadfile.FileName;
        uploadfile.SaveAs(Server.MapPath(".") + "\\" + strImageName);
    }
    catch{
    }
%>
```

---

## HttpFieldNameOfUploadedImage

**Syntax**

```javascript
/**
 * Return or set the field name for the uploaded file.
 * By default, it's "RemoteFile".
 */
HttpFieldNameOfUploadedImage: string;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">v6.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>
---

## HTTPPort

**Syntax**

```javascript
/**
/**
 * Return or set the HTTP Port.
 */
HTTPPort: number;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v4.2.1+ </td>
<td align="center">v4.2.1+ </td>
<td align="center">v4.2.1+ </td>
<td align="center">v4.2.1+ </td>
<td align="center">v4.2.1+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## IfSSL

**Syntax**

```javascript
/**
/**
 * Return or set whether to use SSL in HTTP requests.
 */
IfSSL: boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## HTTPPostResponseString

**Syntax**

```javascript
/**
 * Return the response string of the latest HTTP Post request.
 */
readonly HTTPPostResponseString: string;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v3.0.3+ </td>
<td align="center">v3.0.3+ </td>
<td align="center">v3.0.3+ </td>
<td align="center">v3.0.3+ </td>
<td align="center">v3.0.3+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>
---

## MaxUploadImageSize

**Syntax**

```javascript
/**
 * Return or set the maximum allowed size of a file to upload (in bytes).
 */
MaxUploadImageSize: number;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## OnInternetTransferPercentage

**Syntax**

```javascript
/**
 * This event is triggered multiple times during a HTTP upload or download request.
 * @argument percentage Return the progress by percentage.
 */
RegisterEvent("OnInternetTransferPercentage", function (percentage: number) {});
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>
---

## ConvertToBase64

**Syntax**

```javascript
/**
 * Convert the specified images to a base64 string.
 * @param indices Specify one or multiple images.
 * @param type The file type.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument result The resulting base64 string.
 * @argument indices The indices of the converted images.
 * @argument type The file type.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
ConvertToBase64(
    indices: number[],
    type: Dynamsoft.DWT.EnumDWT_ImageType | number,
    successCallback: (
        result: Base64Result,
        indices: number[],
        type: number) => void,
    failureCallBack: (
        errorCode: number,
        errorString: string) => void
): void;

interface Base64Result {
    /**
     * Return the length of the result string.
     */
    getLength(): number;
    /**
     * Return part of the string.
     * @param offset The starting position.
     * @param length The length of the expected string.
     */
    getData(offset: number, length: number): string;
    /**
     * Return the MD5 value of the result.
     */
    getMD5(): string;
}
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported </td>
<td align="center">v12.0+ </td>
<td align="center">v12.0+ </td>
<td align="center">v12.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+</td>
</tr>

</table>
</div>

**Usage notes**

`getData()` returns the pure base64 string without the data URI scheme. For example, "/9j/4AAQSkZJRgABA...". If you want to use the string, you probably need to add the scheme. For example, "data:image/png; base64, /9j/4AAQSkZJRgABA...".

**Example**

```javascript
DWObject.ConvertToBase64(
  [0, 1, 2],
  Dynamsoft.DWT.EnumDWT_ImageType.IT_PDF,
  function (result, indices, type) {
    console.log(result.getData(0, result.getLength()));
  },
  function (errorCode, errorString) {
    console.log(errorString);
  }
);
```

---

## ConvertToBlob

**Syntax**

```javascript
/**
 * Convert the specified images to a blob.
 * @param indices Specify one or multiple images.
 * @param type The file type.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument result The resulting blob.
 * @argument indices The indices of the converted images.
 * @argument type The file type.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
ConvertToBlob(
    indices: number[],
    type: Dynamsoft.DWT.EnumDWT_ImageType | number,
    successCallback: (
        result: Blob,
        indices: number[],
        type: number) => void,
    failureCallBack: (
        errorCode: number,
        errorString: string) => void
): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported </td>
<td align="center">v13.0+ </td>
<td align="center">v13.0+ </td>
<td align="center">v13.0+ </td>
<td align="center">v13.0+ </td>
<td align="center">v16.0+</td>
</tr>

</table>
</div>

**Example**

```javascript
DWObject.ConvertToBlob(
  [0, 1, 2],
  Dynamsoft.DWT.EnumDWT_ImageType.IT_PDF,
  function (result, indices, type) {
    console.log(result.size);
  },
  function (errorCode, errorString) {
    console.log(errorString);
  }
);
```

---

## SaveAsBMP

**Syntax**

```javascript
/**
 * Save the specified image as a BMP file.
 * @param fileName The name to save to.
 * @param index The index which specifies the image to save.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
SaveAsBMP(
    fileName: string,
    index: number,
    successCallback ? : () => void,
    failureCallback ? : (errorCode: number, errorString: string) => void
): void | boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v4.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## SaveAsJPEG

**Syntax**

```javascript
/**
 * Save the specified image as a JPEG file.
 * @param fileName The name to save to.
 * @param index The index which specifies the image to save.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
SaveAsJPEG(
    fileName: string,
    index: number,
    successCallback ? : () => void,
    failureCallback ? : (errorCode: number, errorString: string) => void
): void | boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v4.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

**Usage notes**

If you are using WASM mode on the desktop, the image will always be saved to the Downloads folder even if you specify an absolute path.

---

## SaveAsPDF

**Syntax**

```javascript
/**
 * Save the specified image as a PDF file.
 * @param fileName The name to save to.
 * @param index The index which specifies the image to save.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
SaveAsPDF(
    fileName: string,
    index: number,
    successCallback ? : () => void,
    failureCallback ? : (errorCode: number, errorString: string) => void
): void | boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v5.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

**Usage notes**

Learn about [how to config PDF save settings](./Addon_PDF.md#writesetup).

If you are using WASM mode on the desktop, the image will always be saved to the Downloads folder even if you specify an absolute path.

---

## SaveAsPNG

**Syntax**

```javascript
/**
 * Save the specified image as a PNG file.
 * @param fileName The name to save to.
 * @param index The index which specifies the image to save.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
SaveAsPNG(
    fileName: string,
    index: number,
    successCallback ? : () => void,
    failureCallback ? : (errorCode: number, errorString: string) => void
): void | boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v4.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

**Usage notes**

If you are using WASM mode on the desktop, the image will always be saved to the Downloads folder even if you specify an absolute path.

---

## SaveAsTIFF

**Syntax**

```javascript
/**
 * Save the specified image as a TIFF file.
 * @param fileName The name to save to.
 * @param index The index which specifies the image to save.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
SaveAsTIFF(
    fileName: string,
    index: number,
    successCallback ? : () => void,
    failureCallback ? : (errorCode: number, errorString: string) => void
): void | boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v3.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>


**Usage notes**

If you are using WASM mode on the desktop, the image will always be saved to the Downloads folder even if you specify an absolute path.

---

## SaveAllAsMultiPageTIFF

**Syntax**

```javascript
/**
 * Saves all the images in buffer as a multi-page TIFF file.
 * @param fileName The name to save to.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
SaveAllAsMultiPageTIFF(
    fileName: string,
    successCallback ? : () => void,
    failureCallback ? : (errorCode: number, errorString: string) => void
): void | boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v4.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

**Usage notes**

If you are using WASM mode on the desktop, the image will always be saved to the Downloads folder even if you specify an absolute path.

---

## SaveAllAsPDF

**Syntax**

```javascript
/**
 * Saves all the images in buffer as a multi-page PDF file.
 * @param fileName The name to save to.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
SaveAllAsPDF(
    fileName: string,
    successCallback ? : () => void,
    failureCallback ? : (errorCode: number, errorString: string) => void
): void | boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v5.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

**Usage notes**

Learn about [how to config PDF save settings](./Addon_PDF.md#write-setup).

If you are using WASM mode on the desktop, the image will always be saved to the Downloads folder even if you specify an absolute path.

---

## SaveSelectedImagesAsMultiPagePDF

**Syntax**

```javascript
/**
 * Saves all selected images in buffer as a multi-page PDF file.
 * @param fileName The name to save to.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
SaveSelectedImagesAsMultiPagePDF(
    fileName: string,
    successCallback ? : () => void,
    failureCallback ? : (errorCode: number, errorString: string) => void
): void | boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v6.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

**Usage notes**

Learn about [how to config PDF save settings](./Addon_PDF.md#write-setup).

If you are using WASM mode on the desktop, the image will always be saved to the Downloads folder even if you specify an absolute path.

---

## SaveSelectedImagesAsMultiPageTIFF

**Syntax**

```javascript
/**
 * Saves all selected images in buffer as a multi-page TIFF file.
 * @param fileName The name to save to.
 * @param successCallback A callback function that is executed if the request succeeds.
 * @param failureCallback A callback function that is executed if the request fails.
 * @argument errorCode The error code.
 * @argument errorString The error string.
 */
SaveSelectedImagesAsMultiPageTIFF(
    fileName: string,
    successCallback ? : () => void,
    failureCallback ? : (
        errorCode: number,
        errorString: string) => void
): void | boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v6.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

**Usage notes**

If called without any callback functions, these methods become synchronously and return a boolean value to indicate whether it succeeded. However, calling them asynchronously is recommended.

If you are using WASM mode on the desktop, the image will always be saved to the Downloads folder even if you specify an absolute path.

---

## ClearTiffCustomTag

**Syntax**

```javascript
/**
 * Clear the content of all custom tiff tags.
 */
ClearTiffCustomTag(): boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## SetTiffCustomTag

**Syntax**

```javascript
/**
 * Sets a custom tiff tag (up to 32 tags). The string to be set in a tag can be base64 encoded.
 * @param id The id of the custom tag.
 * @param content The content of the tag.
 * @param useBase64Encoding Whether the content is encoded.
 */
SetTiffCustomTag(
    id: number,
    content: string,
    useBase64Encoding: boolean
): boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

**Usage notes**

The method `SetTiffCustomTag()` sets one or up to 32 tags to be added to a TIFF file when generating it. The content of the tags can be plain text or a base64-encoded string. If it's encoded, it'll be decoded when generating the TIFF file.

To make sure you don't included unwanted tags, call `ClearTiffCustomTag()` to clear old tags before setting up new ones.

**Example**

```javascript
DWObject.ClearTiffCustomTag();
DWObject.SetTiffCustomTag(700, "Created By DWT", false);
DWObject.SaveAsTIFF("C:\\DWT.tiff", 0);
```

---

## ClearAllHTTPFormField

**Syntax**

```javascript
/**
 * Clear all the custom fields from the HTTP Post Form.
 */
ClearAllHTTPFormField(): boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## SetHTTPFormField

**Syntax**

```javascript
/**
 * Add a custom field to the HTTP Post Form.
 * @param name The name of the field.
 * @param value The value of the field.
 */
SetHTTPFormField(
    name: string,
    value: string
): boolean;

/**
 * Add a binary file to the HTTP Post Form.
 * @param name The name of the field.
 * @param content The content of the file.
 * @param fileName The name of the file.
 */
SetHTTPFormField(
    name: string,
    content: Blob,
    fileName ? : string
): boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v5.0+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## SetHTTPHeader

**Syntax**

```javascript
/**
 * Add a custom header to the HTTP Post Form.
 * @param name The name of the header.
 * @param value The value of the header.
 */
SetHTTPHeader(
    name: string,
    value: string
): boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported </td>
<td align="center">v12.0+ </td>
<td align="center">v12.0+ </td>
<td align="center">v12.0+ </td>
<td align="center">v12.0+ </td>
<td align="center">v16.0+ </td>
</tr>

</table>
</div>

---

## SetUploadSegment

**Syntax**

```javascript
/**
 * Set the segmentation threshold and segment size.
 * @param threshold Specify the threshold (in MB).
 * @param size Specify the segment size (in KB).
 */
SetUploadSegment(
    threshold: number,
    size: number
): boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported  </td>
<td align="center">v12.1+ </td>
<td align="center">v12.1+ </td>
<td align="center">v12.1+ </td>
<td align="center">v12.1+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## IfShowFileDialog

**Syntax**

```javascript
/**
 * Return or set whether to show open/save file dialog when saving images in the buffer or loading images from a local directory.
 */
IfShowFileDialog: boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v6.2+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Usage notes**

Supported in Service mode only.

---

## IfShowCancelDialogWhenImageTransfer

**Syntax**

```javascript
/**
 * Return or set whether to show the progress of an operation with a button to cancel it.
 */
IfShowCancelDialogWhenImageTransfer: boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported  </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">v5.2+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## IfShowProgressBar

**Syntax**

```javascript
/**
 * Return or set whether the progress bar is/should be displayed during encoding or decoding. It works for any image encoding/decoding related methods. For example: LoadImage, LoadImageEx, ConvertToBlob, etc.
 */
IfShowProgressBar: boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v8.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## ShowFileDialog

**Syntax**

```javascript
/**
 * Show the system's save-file dialog or open-file dialog.
 * @param isSave Whether to show a save-file dialog or an open-file dialog
 * @param filter The filter pattern like "JPG | *.jpg".
 * @param filterIndex The order of the filter. Normally, just put 0.
 * @param defaultExtension Extension to be appended to the file name. Only valid in a save-file dialog
 * @param initialDirectory The initial directory that the dialog opens.
 * @param allowMultiSelect Whether or not multiple files can be selected at the same time. Only valid in an open-file dialog.
 * @param showOverwritePrompt Whether or not a prompt shows up when saving a file may overwrite an existing file.
 * @param flag If set to 0, bAllowMultiSelect and bShowOverwritePrompt will be effective. Otherwise, these two parameters are ignored.
 */
ShowFileDialog(
    isSave: boolean,
    filter: string,
    filterIndex: number,
    defaultExtension: string,
    initialDirectory: string,
    allowMultiSelect: boolean,
    showOverwritePrompt: boolean,
    flag: number
): boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v8.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Usage notes**

Supported in Service mode only.

The `filter` pattern string consists of a combination(s) of valid file extensions with asterisk (\*). For example: `JPG, PNG and TIF | *.jpg;*png;*.tif` . On macOS, the string is different. For example `JPG, PNG , TIF` . To show all files, use `All Files | *.*` . Do not include spaces in the pattern string.

This method will trigger [ `OnGetFilePath` ](#ongetfilepath) event even when it fails. If multiple files are selected, the event will be called multiple times.

**Example**

```javascript
DWObject.RegisterEvent(
  "OnGetFilePath",
  function (isSave, filesCount, index, directory, fileName) {
    alert(" directory: " + directory + "\\" + fileName);
  }
);

//On macOS
DWObject.ShowFileDialog(
  false,
  "TIF,TIFF,JPG,JPEG,PNG,PDF",
  0,
  "",
  "",
  true,
  false,
  0
);

//On Windows
DWObject.ShowFileDialog(
  false,
  "BMP,TIF,JPG,PNG,PDF|*.bmp;*.tif;*.png;*.jpg;*.pdf;*.tiff;*.jpeg",
  0,
  "",
  "",
  true,
  false,
  0
);
```

---

## Print

**Syntax**

```javascript
/**
 * Export all image data in the buffer to a new browser window and use the browser's built-in print feature to print the image(s).
 * @param useOSPrintWindow Whether to use the print feature of the operating system instead.
 * @Note the parameter only works in Windows Service mode.
 */
Print(useOSPrintWindow ? : boolean): boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v6.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>
---

## PrintEx

**Syntax**

```javascript
/**
 * Print selected image(s).
 * @param indices Specify the image.
 */
PrintEx(indices: number[]): void;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported  </td>
<td align="center">v17.0+ </td>
<td align="center">v17.0+ </td>
<td align="center">v17.0+ </td>
<td align="center">v17.0+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## JPEGQuality

**Syntax**

```javascript
/**
 * Return or set the quality for JPEG compression.
 */
JPEGQuality: number;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v5.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Usage notes**

The default value of JPEGQuality property is 80.

The valid range is 0-100. The higher the JPEGQuality property, the better the quality and the bigger the size of the file.

---

## IfTiffMultiPage

**Syntax**

```javascript
/**
 * Return or set whether to append to or replace an existing TIFF file with the same name.
 */
IfTiffMultiPage: boolean;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v3.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Usage notes**

When you save a new image in the same name of an existing TIFF file  
If this property is true, the new image will be added to the existing file  
If this property is false, the new image will replace the existing file

---

## TIFFCompressionType

**Syntax**

```javascript
/**
 * Return or set the compression type for TIFF files.
 */
TIFFCompressionType: Dynamsoft.DWT.EnumDWT_TIFFCompressionType | number;
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">v4.0+ </td>
<td align="center">v10.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v11.0+ </td>
<td align="center">v12.1+ </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Usage notes**

When set to TIFF_AUTO (0), 1-bit images will be compressed in TIFF_T6 (4) while images with other bit depth will be compressed in TIFF_LZW (5).

When set to TIFF_JPEG (7), 1-bit images will be compressed in TIFF_T6 (4), color images or grey images (8-bit or higher) in TIFF_JPEG (7) standard, and other images by TIFF_LZW (5).

TIFF_T4 (3) and TIFF_FAX3 (3) are two names for the same compression type. So are TIFF_T6 (4) and TIFF_FAX4 (4).

TIFF_RLE (2), TIFF_T4 (3), TIFF_FAX3 (3) and TIFF_PACKBITS (32773) only support compression of 1-bit images. TIFF_JPEG (7) supports compression of 8-bit above color images and 8-bit grey images.

When TIFF_JPEG (7) is used, you can use JPEGQuality to further reduce the size of the TIFF file.
