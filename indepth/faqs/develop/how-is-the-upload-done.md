---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN FAQs Develop How Is The Upload Done
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How Is The Upload Done
description: Dynamic Web TWAIN SDK Documentation FAQs How Is The Upload Done
---

# Develop

## How is the upload done?

 `DWT` does the uploading in a few steps

1. Grab the image(s) specified by `indices` ; 
* Encode the image(s) in the specified type which results in a binary file; 
* [Optional] Convert the file into a base64 string; 
* Create an HTTP Form and perform an asynchronous HTTP (Ajax) request to send the form to the specified `url` ; 
* Wait for the confirmation from the server.

The server-side script specified by `url` is very important, check out [Server-side Scripting]({{site.indepth}}development/Server-script.html) for more information.