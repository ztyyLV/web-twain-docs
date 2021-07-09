---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN FAQs Develop Can I OCR multiple languages at the same time
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: Can I OCR multiple languages at the same time
description: Dynamic Web TWAIN SDK Documentation FAQs Can I OCR multiple languages at the same time
---

# Develop

## Can I OCR multiple languages at the same time

Yes, but only with `OCRPro` . The code is like

``` javascript
// Reads both English and Arabic
settings.Languages = "eng,arabic"
```