---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Can I insert newly scanned pages to an existing document?
keywords: Dynamic Web TWAIN, Document Saving, insert new page to existing document
breadcrumbText: Can I insert newly scanned pages to an existing document?
description: Can I insert newly scanned pages to an existing document?
---

# Document Saving

## Can I insert newly scanned pages to an existing document?

When you save newly scanned pages in the same name of an existing PDF or TIFF document, you can set the <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_IO.html?ver=latest#iftiffmultipage" target="_blank">IfTiffMultiPage</a> to true; this appends the new pages to the existing file, instead of replacing the existing file.

You can also scan or load a page to a specific page number onto the viewer.

By default, when you scan or load images, they are appended to the end of the image array in buffer. However, in some business scenarios, the user might want to insert these new images to a specified index. Unfortunately, Dynamic Web TWAIN doesn’t provide a native method for that. The following code snippet shows how it can be done

<strong>Insert when acquiring</strong>

```javascript
function acquireToIndex(index) {
  DWObject.IfAppendImage = false;
  DWObject.CurrentImageIndexInBuffer = index;
  DWObject.RegisterEvent("OnPostTransfer", function () {
    DWObject.CurrentImageIndexInBuffer++;
  });
  DWObject.RegisterEvent("OnPostAllTransfers", function () {
    DWObject.IfAppendImage = true;
  });
  DWObject.AcquireImage();
}
```

<strong>Insert when loading</strong>

```javascript
function loadToIndex(index) {
  var oldCount = DWObject.HowManyImagesInBuffer;
  DWObject.RegisterEvent("OnPostLoad", function () {
    var newCount = DWObject.HowManyImagesInBuffer;
    for (var j = 0; j < newCount - oldCount; j++)
      DWObject.MoveImage(oldCount + j, index + j);
  });
  DWObject.LoadImageEx("", 5);
}
```
