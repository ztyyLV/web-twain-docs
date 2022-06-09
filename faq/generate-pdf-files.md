---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How can I generate PDF/A files?
keywords: Dynamic Web TWAIN, Addon, separate, license
breadcrumbText: How can I generate PDF/A files?
description: How can I generate PDF/A files?
permalink: /faq/generate-pdf-files.html
---

# Addon

## How can I generate PDF/A files?

Dynamic Web TWAIN does not support the generation of PDF/A files. However, OCR Basic and OCR Pro Addon support. 

For OCR Basic, you can set <a href="{{site.info}}api/Addon_OCR.html#setoutputformat" target="_blank">SetOutputFormat</a> to OCROF_PDFPLAINTEXT_PDFX (3)	or OCROF_PDFIMAGEOVERTEXT_PDFX (4). Check out the enum API here: <a href="{{site.info}}api/Dynamsoft_Enum.html#dynamsoftdwtenumdwt_ocroutputformat" target="_blank">EnumDWT_OCROutputFormat</a>.

For OCR Pro, configure the output format through <a href="{{site.info}}api/Addon_OCRPro.html#settings" target="_blank">Settings</a>, use <a href="{{site.info}}api/Dynamsoft_Enum.html#dynamsoftdwtenumdwt_ocrprooutputformat" target="_blank">`OutputFormat`</a> and <a href="{{site.info}}api/Dynamsoft_Enum.html#dynamsoftdwtenumdwt_ocrpropdfaversion" target="_blank">`PDFAVersion`</a> to specify the output format and PDF/A version.


For the differences between OCR Basic and OCR Pro, please refer to [this article]({{site.faq}}difference-between-ocr-basic-and-pro.html).
