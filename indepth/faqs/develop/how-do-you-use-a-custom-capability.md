---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN FAQs Develop How Do You Use A Custom Capability
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How Do You Use A Custom Capability
description: Dynamic Web TWAIN SDK Documentation FAQs How Do You Use A Custom Capability
---

# Develop

## How do you use a custom capability? 

The TWAIN specification defines more than 150 standard capabilities for TWAIN applications and sources to choose from. However, some scanner vendors provide advanced and model-specific capabilities which are not included in the specification. We call them custom capabilities. The following steps show how to use them:

* Install the [TWAIN Sample App](http://www.dynamsoft.com/download/support/twainapp.win32.installer.msi).

* Use the TWAIN Sample App to open the source and then check what the hexadecimal value of the custom capability is.

![Indepth-input-1]({{site.assets}}imgs/Indepth-input-1.png)

* Double click and check the available values.

![Indepth-input-2]({{site.assets}}imgs/Indepth-input-2.png)

* Use this custom capability.

``` javascript
DWObject.SelectSource(function() {
        DWObject.OpenSource();
        DWObject.setCapabilities({
                exception: "ignore",
                capabilities: [{
                    capability: 0xA03D,
                    curValue: 3,
                    exception: "fail",
                }]
            },
            function(capabilities) {
                console.log(capabilities);
            },
            function(error) {
                console.error(error);
            });
    },
    function(code, error) {
        console.log(error);
    }
);
```
