---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: The loading bar keeps spinning when capture the image with iPhone.
keywords: Dynamic Web TWAIN, Error Troubleshooting, wasm, iphone
breadcrumbText: The loading bar keeps spinning when capture the image with iPhone.
description: The loading bar keeps spinning when capture the image with iPhone.
permalink: /faq/the-loading-bar-keeps-spinning-when-capture-the-image-with-iphone.html
---

# Error Troubleshooting

## The loading bar keeps spinning when capture the image with iPhone.

### Symptom

iOS 16.4 was released on March 27th, 2023. In this version, all browsers on iOS have begun to support `OffscreenCanvas`. Unfortunately, Apple's implementation of the API is still incomplete and is missing the important feature "webgl context". Please see the MDN docs on [OffscreenCanvas](https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas) for more details.

### Cause

`OffscreenCanvas` is utilized in all versions of Dynamic Web TWAIN WASM Edition (You can ignore this issue if you are using Service Edition). After you upgrade your iOS to v16.4, the loading bar will keep spinning if you want to capture an image.

### Resolution

Add the following lines of code to disable the API.

```javascript
if (Dynamsoft.navInfoSync.biPhone || Dynamsoft.navInfoSync.biPad) {
    window.OffscreenCanvas = null
}
```

> If the resolution doesn't work for you, please [contact us](https://www.dynamsoft.com/company/contact/).