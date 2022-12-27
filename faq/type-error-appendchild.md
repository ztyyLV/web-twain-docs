---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Error Message - Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
keywords: Dynamic Web TWAIN, UI Customization, hide, spinner, loading bar
breadcrumbText: Error Message - Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
description: Error Message - Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
permalink: /faq/type-error-appendchild.html
---

# Error Troubleshooting

## Error Message - Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.

### Symptom:
You may see following errors when you opened up the application or running the application, then your program will be stopped by the errors.
![type-error-1]({{site.assets}}imgs/TypeError.png)
![type-error-2]({{site.assets}}imgs/type-error.png)

### Cause:
The issue is because when the application implements this line `DWObject = Dynamsoft.DWT.GetWebTwain('dwtcontrolContainer')`, the container is still null. Although it may finish the initialization success, the issue will appear when you upload the files.

### Workaround:
Please check if your container is created dynamically (specially if you are using framework). If yes, the object should be created dynamically as well. Here is the sample code to create the object dynamically:

```javascript
Dynamsoft.DWT.CreateDWTObjectEx(
    {
        WebTwainId: 'myDWT'
    },
    function(obj) {
        DWObject = obj;
        DWObject.Viewer.bind(document.getElementById('dwtcontrolContainer'));
        DWObject.Viewer.height = 400;
        DWObject.Viewer.width = 600;
        DWObject.Viewer.show();
    },
    function(err) {
        console.log(err);
    }
);
```