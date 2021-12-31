---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Do you support image deskew?
keywords: Dynamic Web TWAIN, Image Editing, image deskew
breadcrumbText: Do you support image deskew?
description: Do you support image deskew?
---

# Image Editing

## Do you support image deskew?

Yes, Dynamic Web TWAIN supports image deskew functionality. You can enable automatic deskew using the two ways mentioned below.

- Enable the capability of a scanner
  Note: Applicable only to TWAIN-compatible scanners
  There is a standard TWAIN capability called ICAP_AUTOMATICDESKEW which, when enabled, does the deskewing of all scanned images automatically. If your scanner supports this capability, you can enable the functionality through Dynamic Web TWAIN using the API <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Acquire.html?ver=latest#ifautomaticdeskew" target="_blank">IfAutomaticDeskew</a>

```javascript
DWObject.OpenSource();
DWObject.IfAutomaticDeskew = true;
```

- Use Dynamic Web TWAIN to deskew an image as it is scanned
  The function deskew() below is applicable to all platforms. The event <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Acquire.html?ver=latest#onposttransferasync" target="_blank">OnPostTransferAsync</a> is only triggered during scanning

```javascript
function deskew(index) {
  DWObject.GetSkewAngle(
    index,
    function (angle) {
      console.log("skew angle: " + angle);
      DWObject.Rotate(
        index,
        angle,
        true,
        function () {
          console.log("Successfully deskewed an image!");
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
}
DWObject.RegisterEvent("OnPostTransferAsync", function (info) {
  deskew(DWObject.ImageIDToIndex(info.imageId));
});
```
