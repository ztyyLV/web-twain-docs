---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN FAQs Develop How To Select A Scanner By Its Name
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How To Select A Scanner By Its Name
description: Dynamic Web TWAIN SDK Documentation FAQs How To Select A Scanner By Its Name
---

# Develop

## How to select a scanner by its name? 

Use the method `SelectSourceByIndex()` to select a scanner by its index in the source list. In some cases, you may want to select a source by its name as shown in the example below.

``` javascript
var sources = DWObject.GetSourceNames();
sources.find(function(name, index) {
    //"EPSON DS-530" is the name of the scanner
    if (name === "EPSON DS-530")
        DWObject.SelectSourceByIndex(index);
})
```
