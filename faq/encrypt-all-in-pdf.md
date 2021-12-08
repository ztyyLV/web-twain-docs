---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Can I encrypt all documents in PDF format before uploading?
keywords: Dynamic Web TWAIN, Security, encrypt all, pdf
breadcrumbText: Can I encrypt all documents in PDF format before uploading?
description: Can I encrypt all documents in PDF format before uploading?
---

# Security

## Can I encrypt all documents in PDF format before uploading?

### Reason

While we do not support encrypting documents in PDF format before uploading, you can use other tools to encrypt the PDF documents before loading them.

We support loading encrypted pdf files by using the API <a href="https://www.dynamsoft.com/web-twain/docs/info/api/Addon_PDF.html?ver=latest#setpassword" target="_blank">SetPassword</a>, which sets the password needed to open the encrypted PDF files. Note that this method needs to be called before importing a PDF into the viewer.
