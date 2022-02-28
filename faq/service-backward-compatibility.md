---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Can I use two different websites integrated with two different versions of Dynamic Web TWAIN on the same computer?
keywords: Dynamic Web TWAIN, Project Deployment and End-user Installation, Chrome 101, Private Network Access, preflight request
breadcrumbText: Can I use two different websites integrated with two different versions of Dynamic Web TWAIN on the same computer?
description: Can I use two different websites integrated with two different versions of Dynamic Web TWAIN on the same computer?
---

# Project Deployment and End-user Installation

## Running two different websites integrated with two different versions of Dynamic Web TWAIN on the same computer

Dynamic Web TWAIN has limited backward compatibility between different versions and only one version is expected to be used on an end-user's computer.

However, as Dynamic Web TWAIN is a popular document scanning SDK and has been integrated to many web applications all over the world. It is not uncommon that some end users use two different websites (developed by two different vendors) integrated with different versions of Dynamic Web TWAIN on the same computer.

As a result, we provided the following instructions for backward compatiblity between **version 17.2.1** and older versions, in order to support running both versions on the same computer.

#### Version 17 Minor Versions

Version 17.2.1 is compatiable with other minor versions: 17.2， 17.1.1， 17.1，and 17.0.

#### Older Versions
For older versions to work with version 17.2.1, please copy the following .dll files to the version 17 Service Installation folder: `C:\Windows\SysWOW64\Dynamsoft\DynamsoftServicex64_17`

**Version 16.x (16.2, 16.1.1,  16.1, 16.0)**
```javascript
dwt_16.2.0.0112.dll
DynamicPdfCorex64_11.1.0.0112.dll
DynamicPdfRx64_11.1.0.0112.dll
DynamicImagex64.dll (16.2.0.0112)
```

**Version 15.3.1**
```javascript
dwt_15.3.0.0116.dll
DynamicPdfCorex64_10.3.3.0924.dll
DynamicPdfRx64_10.3.3.0924.dll
DynamicImagex64.dll (16.2.0.0112/15.2.0.0924)
```

**Verisin 15.3**
```javascript
dwt_15.3.0.0107.dll
DynamicPdfCorex64_10.3.3.0924.dll
DynamicPdfRx64_10.3.3.0924.dll
DynamicImagex64.dll (16.2.0.0112/15.2.0.0924)
```

**Versoin 15.2**
```javascript
dwt_15.2.0.0924.dll
DynamicPdfCorex64_10.3.3.0924.dll
DynamicPdfRx64_10.3.3.0924.dll
DynamicImagex64.dll (16.2.0.0112/15.2.0.0924)
```

**Version 15.1**
```javascript
dwt_15.1.0.0806.dll
DynamicPdfCorex64_10.3.2.0806.dll
DynamicPdfRx64_10.3.2.0806.dll
DynamicImagex64.dll (16.2.0.0112/15.2.0.0924/15.1.0.0806)
```

**Version 15.0**
```javascript
dwt_15.0.0.0625.dll
DynamicPdfCorex64_10.3.1.0124.dll
DynamicPdfRx64_10.3.1.0124.dll
DynamicImagex64.dll (16.2.0.0112/15.2.0.0924/15.1.0.0806/15.0.0.0625)
```