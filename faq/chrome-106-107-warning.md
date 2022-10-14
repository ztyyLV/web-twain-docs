---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Warning message - Canvas2D Warning
keywords: Dynamic Web TWAIN, Error Troubleshooting, Canvas2D, Warning
breadcrumbText: Warning message - Canvas2D Warning
description: Canvas2D Warning
permalink: /faq/chrome-106-107-warning.html
---

# Error Troubleshooting

## Warning message - Canvas2D: Multiple readback operations using getImageData are faster with the willReadFrequently attribute set to true.

### Symptom

When you are using Chrome 107(developer version) & 106 (official version) or any version above these, you could encounter a warning in console:

Canvas2D: Multiple readback operations using getImageData are faster with the willReadFrequently attribute set to true. See: https://html.spec.whatwg.org/multipage/canvas.html#concept-canvas-will-read-frequently

### Cause

The attribute `willReadFrequently` in `getContext("2d")` has not been set to `ture` if you are using Chrome 107(developer version) & 106 (official version).


### Solution

Our online demo has already fixed this warning. Please contact us if you would like to eliminate this in your application.

### Planning

The warning message will be fixed in version 18.0.