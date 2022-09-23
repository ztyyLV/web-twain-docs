---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Can I protect sensitive information of an image from being seen?
keywords: Dynamic Web TWAIN, Image Viewer, object defined
breadcrumbText: Can I protect sensitive information of an image from being seen?
description: Can I protect sensitive information of an image from being seen?
permalink: /faq/protect-sensitive-information.html
---

# Image Viewer

## Can I protect sensitive information of an image from being seen?

No, currently this functionality is not available, but our development team is working on an <a href="{{site.info}}schedule/proposed.html#add-annotations" target="_blank">annotation</a> feature which can be used to protect sensitive information.

Another Use Case: If you want to modify the image and not only hide some parts of the image, then you can try using the <a href="{{site.indepth}}features/edit.html#cutting-cropping-and-copying" target="_blank">erase()</a> method. So, if the request is to replace a rectangle area of an image with a specific color block, then erase() can help achieve that.
