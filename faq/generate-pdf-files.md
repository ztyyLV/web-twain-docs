---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How can I generate PDF/A files?
keywords: Dynamic Web TWAIN, Addon, separate, license
breadcrumbText: How can I generate PDF/A files?
description: How can I generate PDF/A files?
---

# Addon

## How can I generate PDF/A files?

Dynamic Web TWAIN does not support the generation of PDF/A files. However, OCR Basic and OCR Pro Addon support. 

For OCR Basic, you can set <a href="https://www.dynamsoft.com/web-twain/docs/info/api/Addon_OCR.html?ver=latest#setoutputformat" target="_blank">SetOutputFormat</a> to OCROF_PDFPLAINTEXT_PDFX (3)	or OCROF_PDFIMAGEOVERTEXT_PDFX (4). Check out the enum API here: <a href="https://www.dynamsoft.com/web-twain/docs/info/api/Dynamsoft_Enum.html?ver=latest#dynamsoftdwtenumdwt_ocroutputformat" target="_blank">EnumDWT_OCROutputFormat</a>.

For OCR Pro, configure the output format through <a href="https://www.dynamsoft.com/web-twain/docs/info/api/Addon_OCRPro.html?ver=latest#settings" target="_blank">Settings</a>.
Check out the enum API here: <a href="https://www.dynamsoft.com/web-twain/docs/info/api/Dynamsoft_Enum.html?ver=latest#dynamsoftdwtenumdwt_ocrprooutputformat" target="_blank">Dynamsoft.DWT.EnumDWT_OCRProOutputFormat</a> (IOTPDF/ IOTPDF_MRC)

For the differences between OCR Basic and OCR Pro, please refer to [this article]({{site.faq}}difference-between-ocr-basic-and-pro.html).
