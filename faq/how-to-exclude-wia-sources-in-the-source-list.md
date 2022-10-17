---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN SDK FAQs Develop How to Exclude WIA Sources in the Source List
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How To Exclude WIA Sources in the Source List
description: Dynamic Web TWAIN SDK Documentation FAQs How to Exclude WIA Sources in the Source List
permalink: /faq/how-to-exclude-wia-sources-in-the-source-list.html
---

# Develop

## How to exclude WIA sources in the source list?

> Applicable to Windows only

There are two ways to achieve this:

* Set `IfUseTwainDSM` to `true`

``` javascript
DWObject.IfUseTwainDSM = true;
```

* Filter sources before listing them

``` javascript
var sources = DWObject.GetSourceNames();
for (var i = 0; i < sources.length; i++) {
    if (sources[i].toLowerCase().indexOf('epson') != -1) {
        sources.splice(i, 1);
    }
}
```

If you are still having issues with a device, please feel free to [contact us](https://www.dynamsoft.com/company/contact/) via email, live chat, or phone call.