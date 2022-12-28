---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Error Message - Uncaught TypeError: Cannot read properties of null (reading 'appendChild') or Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
keywords: Dynamic Web TWAIN, Error message
breadcrumbText: Error Message - Uncaught TypeError: Cannot read properties of null (reading 'appendChild') or Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
description: Error Message - Uncaught TypeError: Cannot read properties of null (reading 'appendChild') or Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.
permalink: /faq/type-error-appendchild.html
---

# Error Troubleshooting

## Error Message - Uncaught TypeError: Cannot read properties of null (reading 'appendChild') or Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.

### Symptom:
You may see the following errors when you open up the application or run the application, then your program will be stopped by the errors.

- Uncaught TypeError: Cannot read properties of null (reading 'appendChild')

- Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'


### Cause:
The issue is because when the application implements this line `DWObject = Dynamsoft.DWT.GetWebTwain('dwtcontrolContainer')`, the container is still null or haven't been created yet. Although it may finish the initialization success, the issue will appear when you upload the files.

### Workaround:
Please check if your container is created dynamically (specially if you are using framework). There are two ways to get rid of the issue. 

(1) If you want to use dynamic initialization method, here is the sample code to create the object dynamically:

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

(2) If you want to use default initialization method, please set `Dynamsoft.DWT.AutoLoad` to `false`. Manually implement `Dynamsoft.DWT.Load()` after you confirm the container has been created.