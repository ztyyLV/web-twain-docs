---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN License
keywords: Dynamic Web TWAIN, Documentation, License
breadcrumbText: License
description: Dynamic Web TWAIN SDK Documentation License Page
---

# License

## Terms

The official [DWT License Agreement](https://www.dynamsoft.com/Products/WebTwain_license.aspx).

## Questions

### Q: When is license verified

**A**: `DWT` verifies whether there is a valid license when a [ `WebTwain` instance is created]({{site.indepth}}features/initialize.html#creating-the-webtwain-instance). Then for individual modules such as the PDF Rasterizer, or the Barcode Reader, the license is verified when you try to invoke their respective APIs.

### Q: How to use a DWT license

**A**: The DWT license is set using the global API `Dynamsoft.WebTwainEnv.ProductKey` , check out more on [Update the License Key]({{site.indepth}}development/upgrade.html#update-the-license-key).
