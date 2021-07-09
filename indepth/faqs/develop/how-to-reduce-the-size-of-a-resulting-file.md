---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN FAQs Develop How to reduce the size of a resulting file
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How to reduce the size of a resulting file
description: Dynamic Web TWAIN SDK Documentation FAQs How to reduce the size of a resulting file
---

# Develop

## How to reduce the size of a resulting file

There are a few things that you can try to reduce the size of a resulting file

* Scan in grayscale or black & white instead of RGB; 
* Convert the images to grayscale or black & white before the save or upload call. Read more [here]({{site.indepth}}features/edit.html#working-with-pixels-and-bit-depth); 
* Scan in a lower resolution; 
* Convert the images to a lower resolution (DPI). Read more [here]({{site.indepth}}features/edit.html#working-with-pixels-and-bit-depth); 
* [Optional] If the resulting file is in the JPEG format (.jpg) or is a TIF or PDF that is encoded by the JPEG standard, you can set [ `JPEGQuality` ]({{site.info}}api/WebTwain_IO.html#jpegquality) to a lower value.