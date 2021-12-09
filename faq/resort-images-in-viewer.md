---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How can I resort images in the viewer?
keywords: Dynamic Web TWAIN, Image Viewer, resort images
breadcrumbText: How can I resort images in the viewer?
description: How can I resort images in the viewer?
---

# Image Viewer

## How can I resort images in the viewer?

You can easily sort the images in the viewer. You may drag and drop the images in the order you want them to appear this process will trigger inbuilt callback event <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Buffer.html?ver=latest#onindexchangedragdropdone" target="_blank">OnIndexChangeDragDropDone</a>.
If you manually want to sort the images you can make use of the method <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Buffer.html?ver=latest#switchimage" target="_blank">SwitchImage(index1, index2)</a>
