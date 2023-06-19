---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN SDK Features - PDF Compressor (Alpha)
keywords: Dynamic Web TWAIN, Documentation, PDF Compressor
breadcrumbText: PDF Compressor (Alpha)
description: Dynamic Web TWAIN SDK Documentation PDF Compressor
permalink: /indepth/features/pdfc.html
---

# PDF Compressor (Alpha)

PDF Compressor is a compression technology based on color clustering which can help to reduce the file size when saving images as a PDF file.
Color clustering is an algorithm, which is based on the RGB value of each pixel in the image to cluster similarly colored pixels to achieve compression.

> This feature is only available for the color or gray-scale images and need a PDF Compressor module license.

## Benefits

PDF Compressor provides a new way of PDF compression. For the image which is 

- High contrast,
- Less color variety,
- Concentrated distribution of similar colors,
- With low complexity graphics,

the compression effect is good.

## Things to keep in mind

- If the contrast between the text in the picture and the background is not high, and the thickness of the text is not large, it is easy to cause the text to be incomplete or thin after compression.
- If the image being compressed contains complex graphics, the quality of the compressed graphics may deteriorate.

## Sample Demo

To preview this feature, please see <a href="https://demo.dynamsoft.com/Samples/dwt/PDF-Compressor/PDF-Compressor.html" target="_blank">this demo</a>. Please <a href="https://www.dynamsoft.com/company/customer-service/#contact" target="_blank">contact us</a> if you have any feedback or suggestions.

## How to enable this feature in your code

**Code snippet**

```typescript
DWObject.Addon.PDF.Write.Setup({
  docCompressor: {
    enabled: true, //Enable PDF Compressor
  },
});
//Save PDF file to local disk
DWObject.SaveAllAsPDF(
  "testmrc.pdf", //File Name
  function () {
    console.log("successful.");
  },
  function (errorCode, errorString) {
    console.log(errorString);
  }
);
```
