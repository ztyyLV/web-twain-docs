---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN FAQs Develop Is It Necessary To Call Dynamsoft.DWT.Load Manually
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: Is It Necessary To Call Dynamsoft.DWT.Load Manually
description: Dynamic Web TWAIN SDK Documentation FAQs Is It Necessary To Call Dynamsoft.DWT.Load Manually
---

# Develop

## Is it necessary to call Dynamsoft.DWT.Load manually? 

No. It needs to be called only if `Dynamsoft.DWT.AutoLoad` is set to `false` . If `AutoLoad` is `true` , `Load` will be called automatically as soon as the running environment is ready.

`Dynamsoft.DWT.AutoLoad` is defined in the file `dynamsoft.webtwain.config.js` but can be called anywhere before the actual loading begins. It is set to `true` by default.