---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How to know ResourcesPath is wrong
keywords: Dynamic Web TWAIN, Documentation, Distribution and Deployment
breadcrumbText: How to know ResourcesPath is wrong
description: How to know ResourcesPath is wrong
---

# Distribution and Deployment

## How to know ResourcesPath is wrong

When you set `ResourcesPath` wrong, static files such as `dynamsoft.webtwain.install.js` , `dynamsoft.viewer.css` will fail to load and you will see 404 errors in the browser console.

If you wish to use an absolute path instead, such as "https://www.dynamsoft.com/dwt/demo/resources/", this is supported. 

> Note: If you want to use the [Camera module]({{site.indepth}}features/Input.html#use-mediadevices-cameras), please make sure the absolute path stays in the same domain to avoid cross-origin issues.
