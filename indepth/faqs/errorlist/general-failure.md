---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: General failure
keywords: Dynamic Web TWAIN, Documentation, ErrorList
breadcrumbText: General failure
description: General failure
---

# ErrorList

## General failure

- Symptom

When you try scanning an image with Dynamic Web TWAIN, you may receive the error message "General failure" in the ErrorString property.

- Cause

The problem occurs when the source (scanner) is _not_ disabled completely after a scanning session or the source is currently unavailable.

- Resolution

You can set [IfDisableSourceAfterAcquire]({{site.info}}api/WebTwain_Acquire.html#ifdisablesourceafteracquire) to `true` . It must be set before the call to [SelectSource]({{site.info}}api/WebTwain_Acquire.html#selectsource)

```javascript
function AcquireImage() {
  DWObject.IfDisableSourceAfterAcquire = true;
  DWObject.SelectSource();
  DWObject.OpenSource();
  DWObject.AcquireImage();
}
```
