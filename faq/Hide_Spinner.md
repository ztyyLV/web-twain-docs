# UI Customization

## Why I cannot hide the spinner?

### ***Symptom:***
The issue is the loading bar is unable to hide with the method mentioned in this [link]({{site.indepth}}features/ui.html#loading-bar-and-backdrop), it will continue to spin or will never stop.
![image1]({{site.assets}}imgs/Hide_Spinner_spinner.png)

### ***Cause:***
The event `Dynamsoft.OnWebTwainPreExecuteCallback` is not register in the install.js file in v17.3 so that the `Dynamsoft.DWT.OnWebTwainPreExecute()` will never be called.
![image2]({{site.assets}}imgs/Hide_Spinner_install_code.png)

### ***Workaround:***
Step 1) In the install.js file, add the event behind the function `OnWebTwainPostExecuteCallback`.
![image3]({{site.assets}}imgs/Hide_Spinner_install_code2.png)

````javascript
Dynamsoft.OnWebTwainPreExecuteCallback = function(){
    console.log("OnWebTwainPreExecuteCallback")
}
````

Step 2) In the config.js file, add `Dynamsoft.DWT.OnWebTwainPreExecute()` and `Dynamsoft.DWT.OnWebTwainPostExecute()` behind the function `Dynamsoft.DWT.AutoLoad`. (Refer to this [link]({{site.indepth}}features/ui.html#loading-bar-and-backdrop)
![image4]({{site.assets}}imgs/Hide_Spinner_config_code.png)


**Pleae note: if `Dynamsoft.DWT.AutoLoad = false`**
Need to add `Dynamsoft.DWT.showLoadingMsgDialog = false` in the config.js as well.
![image5]({{site.assets}}imgs/Hide_Spinner_config_code2.png)

````javascript
Dynamsoft.DWT.showLoadingMsgDialog = false;
````
