---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Document scanning via the Dynamic Web TWAIN SDK is slower than using the native scanner application. How can I speed it up?
keywords: Dynamic Web TWAIN, Capture/ Image Source, slow scan
breadcrumbText: Document scanning via the Dynamic Web TWAIN SDK is slower than using the native scanner application. How can I speed it up?
description: Document scanning via the Dynamic Web TWAIN SDK is slower than using the native scanner application. How can I speed it up?
---

# Capture/ Image Source

## Document scanning via the Dynamic Web TWAIN SDK is slower than using the native scanner application. How can I speed it up?

Please first check if you use the same pre-scanning settings, e.g. color mode, resolution, etc.

Assume the pre-scanning settings are the same, please double check if there are any automatic actions after scanning pages. You may double check the call back functions of the <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Acquire.html?ver=latest" target="_blank">AcquireImage</a> function or check if you write any code in the <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Acquire.html?ver=latest#onposttransfer" target="_blank">OnPostTransfer</a> or <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Acquire.html?ver=latest#onpostalltransfers" target="_blank">OnPostAllTransfers</a> event. If you need to run some automatic action right after each page is scanned, it’s recommended to use our the <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Acquire.html?ver=latest#onposttransferasync" target="_blank">OnPostTransferAsync</a> event.

If the scanning performance issue persists, please <a href="mailto:support@dynamsoft.com">contact us</a>.
