---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How to use pure WIA source instead of WIATWAIN source from version 18.2?
keywords: Dynamic Web TWAIN, Capture/ Image Source, WIA
breadcrumbText: How to use pure WIA source instead of WIATWAIN source?
description: How to use pure WIA source instead of WIATWAIN source?
permalink: /faq/use-wia-insteadof-wiatwain.html
---

# Capture/Image Source

## How to use pure WIA source instead of WIATWAIN source from version 18.2?

As of Dynamic Web TWAIN version 18.2, we start to support WIA protocol officially. 

### WIA 

WIA stands for Windows Image Acquisition which is a Microsoft driver model for capturing digital images from various devices, such as scanners, cameras and other imaging devices. 

Compared with TWAIN, the WIA protocol is built-in supported by Windows OS. No extra drivers needed for WIA-supported devices.

WIA offers standardized hardware compatibility and a stable driver environment, making it easier to integrate imaging capabilities into the web scanning applications. 


### Difference between `WIASCANNER` and `WIATWAINSCANNER`

We add a new Enumaration `WIASCANNER` to [`Dynamsoft.DWT.EnumDWT_DeviceType`](https://www.dynamsoft.com/web-twain/docs/info/api/Dynamsoft_Enum.html?ver=latest&&cVer=true#dynamsoftdwtenumdwt_devicetype) to support WIA protocol. There is another Enumaration named `WIATWAINSCANNER` which is a WIA Source mapped through the TWAIN protocol after packaging by Microsoft and it was used to support WIA in the previous version.

If you are using `WIATWAINSCANNER` before and would like to use `WIASCANNER` from version 18.2 instead, you need to modify the APIs used in your code accordingly.

| `WIASCANNER` | `WIATWAINSCANNER`|
|:-|:-|
| [GetDeviceAsync()](https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Acquire.html#getdevicesasync) | [GetSourceNames()](https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Acquire.html#getsourcenames), [GetSourceNamesAsync()](https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Acquire.html#getsourcenamesasync)|
| [SelectDeviceAsync()](https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Acquire.html#selectdeviceasync) | [SelectSourceByIndex()](https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Acquire.html#selectsourcebyindex), [SelectSourceByIndexAsync()](https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Acquire.html#selectsourcebyindexasync) |
| [SelectSourceAsync()](https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Acquire.html#selectsourceasync) | [SelectSource()](https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Acquire.html#selectsource) |
| [AcquireImageAsync()](https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Acquire.html#acquireimageasync) | [AcquireImage()](https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Acquire.html#acquireimage) |

*`WIATWAINSCANNER` is still available.*