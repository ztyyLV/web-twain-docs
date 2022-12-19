---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN API Reference - Device APIs
keywords: Dynamic Web TWAIN, Documentation, API Reference, Device APIs
breadcrumbText: Device
description: Dynamic Web TWAIN SDK Documentation API Reference Device APIs Page
permalink: /info/api/Device.html
---

# {DeviceObject} Scan

> The properties and methods on this page live in the namespace {DeviceObject}.

``` typescript
interface Device  {
    /**
     * The real name of the device.
     */
    readonly name: string;
    /**
     * The displayed name of the device.
     */
    readonly displayName: string;
    readonly deviceType: Dynamsoft.EnumDWT_DeviceType;
    readonly serviceInfo?: ServiceInfo;
    readonly deviceInfo?: any;
    acquireImage(deviceConfiguration: DeviceConfiguration | null, sendTo: WebTwain): Promise< boolean>;
}
``` 

**Methods**

|                                                   |
| :------------------------------------------------ | :------------------------------------------ | ----------------------------------------------- | --------------------------------------------------------- |
| [`DeviceObject.acquireImage()`](#deviceobject.acquireimage)   |

---

## DeviceObject.acquireImage()

**Syntax**

```typescript
/**
 * Scan documents into another DWObject control. Supports eSCL scanners and all other scanners with limited capabilities.
 * @param deviceConfiguration The device configuration
 * @param sendTo The DWObject control to scan into
 */
acquireImage(deviceConfiguration: DeviceConfiguration | null, sendTo: WebTwain): Promise< boolean>;

interface DeviceConfiguration {
    /**
     * Whether to show the built-in User Interface from the device vendor.
     */
    IfShowUI?: boolean;
    /**
     * How a pixel is represented. Basically it means whether to scan in color, grey or black & white
     */
    PixelType?: Dynamsoft.DWT.EnumDWT_PixelType;
    /**
     * How detailed is the acquisition. Measured by dots per pixel (DPI)
     */
    Resolution?: number;
    /**
     * Whether to use the document feeder or the flatbed of the device.
     */
    IfFeederEnabled?: boolean;
    /**
     * Whether to scan one side or both sides of each paper.
     */
    IfDuplexEnabled?: boolean;
    /**
     * Whether to close the built-in User Interface after aquisition. Only valid when {IfShowUI} is true.
     */
    IfDisableSourceAfterAcquire?: boolean;
    /**
     * Whether to retrieve information about the image after it's transferred.
     */
    IfGetImageInfo?: boolean;
    /**
     * Whether to retrieve extended information about the image after it's transferred.
     */
    IfGetExtImageInfo?: boolean;
    /**
     * How much extended information is retrieved. Only valid when {IfGetExtImageInfo} is true.
     */
    extendedImageInfoQueryLevel?: number;
    /**
     * Whether to simulate the manufacturer's UI inside the client-side browser (only effective when IfShowUI is true).
     */
    RemoteScan?:boolean;
    /**
     * Whether to simulate the manufacturer's UI inside the client-side browser (only effective when IfShowUI and RemoteScan are both true and the WebTwain instance doing the scan has no viewer of its own).
     */
    ShowRemoteScanUI?:boolean;
    /**
     * Specify a source by its index.
     */
    SelectSourceByIndex?: number;
}
```

**Example**

```javascript
DWObject.GetDevicesAsync().then((devicleList)=>{
  return devicleList[0].acquireImage({},DWObject)  
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.error(e)
})
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
<td align="center">Android Service</td>
</tr>

<tr>
<td align="center">not supported</td>
<td align="center">v18.0+</td>
<td align="center">v18.0+</td>
<td align="center">v18.0+</td>
<td align="center">v18.0+</td>
<td align="center">not supported</td>
<td align="center">v18.0+</td>
</tr>

</table>
</div>
