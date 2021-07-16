---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN FAQs Develop How Do You Configure The Scan
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How Do You Configure The Scan
description: Dynamic Web TWAIN SDK Documentation FAQs How Do You Configure The Scan
---

# Develop

## How do you configure the scan? 

`DWT` provides two ways to set up a scan operation.

* Change one setting at a time. Below are a few APIs, for example
  + [PageSize]({{site.info}}api/WebTwain_Acquire.html#pagesize) 
  + [PixelType]({{site.info}}api/WebTwain_Acquire.html#pixeltype)
  + [Resolution]({{site.info}}api/WebTwain_Acquire.html#resolution) 
  + [SourceCount]({{site.info}}api/WebTwain_Acquire.html#sourcecount)
* Change all settings at once. Use one of the two APIs below to achieve this.
  + [AcquireImage()]({{site.info}}api/WebTwain_Acquire.html#acquireimage)
  + [startScan()]({{site.info}}api/WebTwain_Acquire.html#startscan)
