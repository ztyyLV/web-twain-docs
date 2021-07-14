---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN FAQs Develop Is SSL Supported
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: Is SSL Supported
description: Dynamic Web TWAIN SDK Documentation FAQs Is SSL Supported
---

# Develop

## Is SSL Supported? 

Yes, as shown in the following line, you just need to make sure the correct protocol is used

``` javascript
var protocol = Dynamsoft.Lib.detect.ssl ? "https://" : "http://"
```
