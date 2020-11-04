---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN Schedule - Developping
keywords: Dynamic Web TWAIN, Documentation, Schedule, Developping
breadcrumbText: Developping
description: Dynamic Web TWAIN SDK Documentation Schedule - Developping Page
---

# Features Under Development

## More independent viewer

* All old APIs for the Viewer that were called by the `WebTwain` instance directly are being deprecated and replaced by APIs in the `WebTwain.Viewer` interface
  + `Width` to be replaced by `Viewer.width`
  + `Height` to be replaced by `Viewer.height`
* More APIs are made public for delicate customization of the Viewer
  + Add `Viewer.idPostfix` to retrieve the postfix of the names of the elements in the Viewer

  
