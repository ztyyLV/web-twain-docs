---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Can I hide the Dynamsoft image viewer and use my own image viewer?
keywords: Dynamic Web TWAIN, Image Viewer, hide, use custom image viewer
breadcrumbText: Can I hide the Dynamsoft image viewer and use my own image viewer?
description: Can I hide the Dynamsoft image viewer and use my own image viewer?
permalink: /faq/hide-image-viewer.html
---

# Image Viewer

## Can I hide the Dynamsoft image viewer and use my own image viewer?

If you want to use your own viewer, you can use <a href="{{site.indepth}}features/initialize.html#-dynamsoftdwtcreatedwtobjectex-" target="_blank">Dynamsoft.DWT.CreateDWTObjectEx()</a> to create a WebTwain instance that doesn't come with a viewer. You can also unbind the viewer by using the steps mentioned <a href="{{site.indepth}}features/viewer.html#bind-the-viewer" target="_blank">here</a>.
