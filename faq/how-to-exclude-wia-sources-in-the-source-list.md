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



* Set [IfUseTwainDSM]({{site.info}}api/WebTwain_Acquire.html#ifusetwaindsm) to `true`

``` javascript
DWObject.IfUseTwainDSM = true;
```

If you are still having issues with a device, please feel free to [contact us](https://www.dynamsoft.com/company/contact/) via email, live chat, or phone call.