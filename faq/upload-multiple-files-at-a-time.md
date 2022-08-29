---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How to upload multiple files at a time?
keywords: Dynamic Web TWAIN, Document Saving, upload files
breadcrumbText: How to upload multiple files at a time?
description: How to upload multiple files at a time?
permalink: /faq/upload-multiple-files-at-a-time.html
---

# Document Saving

## How to upload multiple files at a time?

### Scenario:
After scanning multiple files, you might want to upload them one by one as individual images. Before version 13.1, you have to call the upload method(s) multiple times. In v13.1+, you can do this in one go.

### Solution:
You can use the methods [ConvertToBlob]({{site.info}}api/WebTwain_IO.html#converttoblob) and [HTTPUpload]({{site.info}}api/WebTwain_IO.html#httpupload) to achieve this.

### Steps:

1. In JS, write code similar to the following:

```javascript
function UploadAsJPG() {
    var count = 0;
    DWObject.ClearAllHTTPFormField();
    DWObject.SetHTTPFormField("UploadedImagesCount",DWObject.HowManyImagesInBuffer);

    function asyncFailureFunc(errorCode, errorString) {
        alert("ErrorCode: " + errorCode + "\r" + "ErrorString:" + errorString);
    };

    var OnHttpUploadSuccess = function () {
        console.log("Uploaded Successfully");
    };

    var OnHttpUploadFailure = function (ecode,estring,resp) {
        console(resp);
    }

    var convertImage = function (_index) {
        DWObject.ConvertToBlob(
            [_index], 
            Dynamsoft.DWT.EnumDWT_ImageType.IT_JPG,
            function (result) {
                DWObject.SetHTTPFormField('image_' + _index, result, 'JPG_image_' + _index);
                count++;
                if (count < DWObject.HowManyImagesInBuffer) {
                    convertImage(count);
                } else {
                    DWObject.HTTPUpload("http://localhost:90/saveUploadedJPG.aspx", OnHttpUploadSuccess, OnHttpUploadFailure);// Please replace the URL with yours.
                }
            }, 
            asyncFailureFunc
        );
    };

    convertImage(0);
}
```
2. On the server, add an action page to process the uploaded data:

```csharp
<%@ Page Language="C#" %>
<%
    try
    {
        String strImageName;
        String strInfo = HttpContext.Current.Request["UploadedImagesCount"];
        short uploadedImagesCount = Convert.ToInt16(strInfo);
        HttpFileCollection files = HttpContext.Current.Request.Files;
        for (short i = 0; i < uploadedImagesCount; i++)
        {
            HttpPostedFile uploadfile = files["image_" + i.ToString()];
            strImageName = uploadfile.FileName;
    
            uploadfile.SaveAs(Server.MapPath(".") + "\\UploadedImages\\" + strImageName + ".jpg");
        }
    }
    catch
    {
    }
%>
```

The following image shows the schematic of the resources deployed on IIS.
![image1]({{site.assets}}imgs/schematic-resource-on-iis.png)

