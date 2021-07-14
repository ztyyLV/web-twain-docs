---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN FAQs Develop How To Exclude WIA Sources In The Source List
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How To Exclude WIA Sources In The Source List
description: Dynamic Web TWAIN SDK Documentation FAQs How To Exclude WIA Sources In The Source List
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

If you are still having issues with a device after reading the above information. You can

  + Check out [hardware issue]({{site.indepth}}troubleshooting/scanners-hardware.html) troubleshooting page,
  + Or contact [Dynamsoft Support]({{site.about}}getsupport.html)
