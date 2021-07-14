---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN FAQs Develop Can I Change The Fields Of The HTTP Form
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: Can I Change The Fields Of The HTTP Form
description: Dynamic Web TWAIN SDK Documentation FAQs Can I Change The Fields Of The HTTP Form
---

# Develop

## Can I change the fields of the HTTP form? 

 Yes, you can use the method [ `SetHTTPFormField()` ]({{site.info}}api/WebTwain_IO.html#sethttpformfield) to add extra fields to the form. In a [previous question](#q-can-i-upload-multiple-images-as-separate-files-in-one-go), the method is used to add files to the form. But you can also use the method to add extra text information to the form as shown below

``` javascript
// Clear old fields before adding new ones
DWObject.ClearAllHTTPFormField();
DWObject.SetHTTPFormField("FileType", "Insurance Doc");
```