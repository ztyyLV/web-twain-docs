---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN FAQs License When Is A License Validated
keywords: Dynamic Web TWAIN, Documentation, License
breadcrumbText: When Is A License Validated
description: Dynamic Web TWAIN SDK Documentation FAQs When Is A License Validated
---

# License

## When is a license validated? 

`DWT` verifies whether there is a valid license when a [ `WebTwain` instance is created]({{site.indepth}}features/initialize.html#creating-the-webtwain-instance). For individual modules, such as the PDF Rasterizer, or the Barcode Reader, the add-on license is validated when the respective add-on api is invoked.