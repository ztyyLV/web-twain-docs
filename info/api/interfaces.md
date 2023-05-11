---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN API Reference - Interfaces
keywords: Dynamic Web TWAIN, Documentation, API Reference, Interfaces
breadcrumbText: Utility
description: Dynamic Web TWAIN SDK Documentation API Reference Interfaces Page
permalink: /info/api/interfaces.html
---

# Interfaces

| |
|:-|:-|
| [`Device`](#device)  | [`DeviceConfiguration`](#DeviceConfiguration)  |

---


## Device

**Syntax**

```typescript
interface Device{
   name: string;
   displayName: string;
   deviceType: DeviceType;
   serverInfo?: serverInfo;
   deviceInfo?: any;
}
```

---

## DeviceConfiguration

**Syntax**

```typescript
interface DeviceConfiguration {
    IfShowUI?: boolean; //Whether to show the built-in User Interface from the device vendor
    PixelType?: Dynamsoft.DWT.EnumDWT_PixelType | number | string; //Whether to scan in color, grey or black & white
    Resolution?: number; //Measured by dots per pixel (DPI)
    IfFeederEnabled?: boolean; //Whether to use the document feeder or the flatbed of the device
    IfDuplexEnabled?: boolean; //Whether to scan one side or both sides
    IfDisableSourceAfterAcquire?: boolean; //Whether to close the built-in User Interface after aquisition. Only valid when {IfShowUI} is true.
    IfGetImageInfo?: boolean; //Whether to retrieve information about the image after it's transferred.
    IfGetExtImageInfo?: boolean; //Whether to retrieve extended information about the image after it's transferred.
    extendedImageInfoQueryLevel?: Dynamsoft.DWT.EnumDWT_ExtImageInfo | number; //How much extended information is retrieved. Only valid when {IfGetExtImageInfo} is true.
    SelectSourceByIndex?: number; //Specify a source by its index.
    IfCloseSourceAfterAcquire?: boolean; //Whether to close the data source after aquisition. Default: false.
    PageSize?: Dynamsoft.DWT.EnumDWT_CapSupportedSizes | number; //Specify page size
}
```

---
