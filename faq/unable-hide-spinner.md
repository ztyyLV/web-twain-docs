---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Why I cannot hide the spinner?
keywords: Dynamic Web TWAIN, UI Customization, hide, spinner
breadcrumbText: Why I cannot hide the spinner?
description: Why I cannot hide the spinner?
permalink: /faq/unable-hide-spinner.html
---

# UI Customization

## Why I cannot hide the spinner?

### ***Symptom:***
In v17.3 of the Dynamic Web TWAIN SDK, you may find the spinner is unable to hide with the method mentioned in this [link]({{site.indepth}}features/ui.html#loading-bar-and-backdrop), it will continue to spin or will never stop.
![image1]({{site.assets}}imgs/unable_hide_spinner_spinner.png)

### ***Cause:***
The event `Dynamsoft.OnWebTwainPreExecuteCallback` is not register in the **dynamsoft.webtwain.install.js** file in v17.3 so that the `Dynamsoft.DWT.OnWebTwainPreExecute()` will never be called.
![image2]({{site.assets}}imgs/unable_hide_spinner_install_code.png)

### ***Workaround:***
Step 1) In the **dynamsoft.webtwain.install.js file**, add the event behind the function `OnWebTwainPostExecuteCallback`.
![image3]({{site.assets}}imgs/unable_hide_spinner_install_code2.png)

````javascript
Dynamsoft.OnWebTwainPreExecuteCallback = function(){
    console.log("OnWebTwainPreExecuteCallback")
}
````

Step 2) In the **dynamsoft.webtwain.config.js** file, add `Dynamsoft.DWT.OnWebTwainPreExecute()` and `Dynamsoft.DWT.OnWebTwainPostExecute()` behind the function `Dynamsoft.DWT.AutoLoad`. (Refer to this [link]({{site.indepth}}features/ui.html#loading-bar-and-backdrop))
![image4]({{site.assets}}imgs/unable_hide_spinner_config_code.png)


**Note: if you set `Dynamsoft.DWT.AutoLoad = false`**
Please <a href="https://www.dynamsoft.com/company/contact/" target="_blank">contact us</a> so we can look into it directly.
