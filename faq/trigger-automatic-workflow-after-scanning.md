---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How can I trigger an automatic workflow right after document scanning or image importing?
keywords: Dynamic Web TWAIN, Capture/ Image Source, trigger, automatic workflow
breadcrumbText: How can I trigger an automatic workflow right after document scanning or image importing?
description: How can I trigger an automatic workflow right after document scanning or image importing?
---

# Capture/ Image Source

## How can I trigger an automatic workflow right after document scanning or image importing?

There are many events available to help you build an automatic business workflow in your document scanning application.

If you scan papers from your physical document scanners, you can use <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Acquire.html#onposttransfer" target="_blank">OnPostTransfer</a> or <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_Acquire.html#onposttransferasync" target="_blank">OnPostTransferAsync</a> event to trigger action right after each page is successfully scanned. When all pages are scanned successfully, you can use OnPostAllTransfers if you need to trigger any actions.

If you import images from your local disk, you can use <a href="https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_IO.html#onpostload" target="_blank">OnPostLoad</a> event which triggers after right each file is successfully loaded.
