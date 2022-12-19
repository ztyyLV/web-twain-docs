----
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
acquireImage(deviceConfiguration?: DeviceConfiguration, sendTo?:DWObject ). Promise< boolean>;
```

**Example**

```javascript
Dynamsoft.DWT.FindDevicesAsync("https://s0000001.dynamsoftwebtwain.com:port", 1).then((device[])=>{
   Dynamsoft.DWT.createDWObjectAsync(device[0].serviceInfo).then((dwt)=>{
      return dwt.AcquireImageAsync(deviceConfiguration, DWTObject).then(
          function(){dwt.dispose();}, function(dwt.dispose(); throw;););
  }).catch((exp) => {console.log(exp.message);
      //eSCL scanners
     return device[0].acquireImage(deviceConfiguration, DWTObject);
  });
}).catch((exp) => {console.log(exp.message);});
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
<td align="center">not supported</td>
<td align="center">v18.0+</td>
<td align="center">v18.0+</td>
<td align="center">v18.0+</td>
<td align="center">v18.0+</td>
<td align="center">not supported</td>
</tr>

</table>
</div>