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

### Reason

For OCR Basic add-on, use API <a href="https://www.dynamsoft.com/web-twain/docs/info/api/Addon_OCR.html?ver=latest#setoutputformat" target="_blank">SetOutputFormat</a>(3 | 4).

Check out the enum API here: <a href="https://www.dynamsoft.com/web-twain/docs/info/api/Dynamsoft_Enum.html?ver=latest#dynamsoftdwtenumdwt_ocroutputformat" target="_blank">EnumDWT_OCROutputFormat</a>.
OCROF_PDFPLAINTEXT_PDFX, 3, Outputs the OCR text results to a PDF/A. Any images from the original scanned image are lost.
OCROF_PDFIMAGEOVERTEXT_PDFX, 4, Outputs the OCR text results to a PDF/A, with the original scanned image printed overtop.

For OCR Pro addon, configure the output format through <a href="https://www.dynamsoft.com/web-twain/docs/info/api/Addon_OCRPro.html?ver=latest#settings" target="_blank">Settings</a>.
Check out the enum API here: <a href="https://www.dynamsoft.com/web-twain/docs/info/api/Dynamsoft_Enum.html?ver=latest#dynamsoftdwtenumdwt_ocrprooutputformat" target="_blank">Dynamsoft.DWT.EnumDWT_OCRProOutputFormat</a> (IOTPDF/ IOTPDF_MRC)

For the differences between OCR Basic and OCR Pro, please refer to this <a href="" target="_blank">FAQ</a>: (Q#12).
