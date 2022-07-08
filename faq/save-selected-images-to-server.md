---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How can I save selected images instead of all images to my server or database?
keywords: Dynamic Web TWAIN, Document Saving, save selected images
breadcrumbText: How can I save selected images instead of all images to my server or database?
description: How can I save selected images instead of all images to my server or database?
permalink: /faq/save-selected-images-to-server.html
---

# Document Saving

## How can I save selected images instead of all images to my server or database?

The API <a href="{{site.info}}api/WebTwain_Buffer.html#selectedimagesindices" target="_blank">SelectedImagesIndices</a> returns the indices of the selected images.

You can pass those indices as a parameter to <a href="{{site.info}}api/WebTwain_IO.html#httpupload" target="_blank">HTTPUpload</a> which uploads files to the server/database.

To upload all images in the buffer with HTTPUpload, you can use the API <a href="{{site.info}}api/WebTwain_Buffer.html#selectallimages" target="_blank">SelectAllImages</a> which returns the indices of all images.

There are other HTTP upload APIs that can achieve the same. Please refer to this link: <a href="{{site.info}}api/WebTwain_IO.html#output" target="_blank">Dynamic Web TWAIN API Reference - IO APIs</a>
