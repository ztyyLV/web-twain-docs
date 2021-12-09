---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How can I create the thumbnail viewer to navigate images?
keywords: Dynamic Web TWAIN, Image Viewer, navigate images, thumbnail viewer
breadcrumbText: How can I create the thumbnail viewer to navigate images?
description: How can I create the thumbnail viewer to navigate images?
---

# Image Viewer

## How can I create the thumbnail viewer to navigate images?

You can create a thumbnail viewer by using the API <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Viewer.html?ver=latest#createthumbnailviewer" target="_blank">createThumbnailViewer()</a>. There are two ways to use it by using the default settings and other one is to customize the viewer. You can check the sample code below:

```javascript
// Use default settings
var objThumbnailViewer = DWObject.Viewer.createThumbnailViewer();
objThumbnailViewer.background = "rgb(0,0,255)";
objThumbnailViewer.show();

// Customize the thumbnail viewer
var thumbnailViewerSettings = {
  location: "left",
  size: "30%",
  columns: 1,
  rows: 3,
  scrollDirection: "vertical", // 'horizontal'
  pageMargin: 10,
  background: "rgb(255, 255, 255)",
  border: "",
  allowKeyboardControl: true,
  allowPageDragging: true,
  allowResizing: false,
  showPageNumber: false,
  pageBackground: "transparent",
  pageBorder: "1px solid rgb(238, 238, 238)",
  hoverBackground: "rgb(239, 246, 253)",
  hoverPageBorder: "1px solid rgb(238, 238, 238)",
  placeholderBackground: "rgb(251, 236, 136)",
  selectedPageBorder: "1px solid rgb(125,162,206)",
  selectedPageBackground: "rgb(199, 222, 252)",
};

var thumbnail = DWObject.Viewer.createThumbnailViewer(thumbnailViewerSettings);
thumbnail.show();
```
