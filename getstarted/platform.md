---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN SDK Platform
keywords: Dynamic Web TWAIN, Documentation, Platform
breadcrumbText: System Requirements
description: Dynamic Web TWAIN SDK Documentation Platform Page
permalink: /getstarted/platform.html
---

# System Requirements

## Supported systems and browsers

Dynamic Web TWAIN is designed to be cross-platform, thus, it works in all major browsers across all major operating systems, including Windows, macOS, Linux and mobile. 

[See the list of supported systems and browsers >](https://www.dynamsoft.com/web-twain/features/)

## Additional notes

Besides the mainstream systems, here are some additional notes on WASM browsers, ActiveX browsers and more:

**WASM browsers**

WASM browsers refer to the browsers with the following advanced features.

- [Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob) - [More info](https://caniuse.com/#feat=blobbuilder)

- [URL/createObjectURL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL) - [More info](https://caniuse.com/#feat=bloburls)

- [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) - [More info](https://caniuse.com/#feat=webworkers)

- [WebAssembly](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/WebAssembly) -
[More info](https://caniuse.com/#feat=wasm)

- [MediaDevices/getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) - [More info](https://caniuse.com/#feat=stream)

**ActiveX browsers**

ActiveX browsers refers to Internet Explorer 9 ~ 11. They are not included in the above lists. By default, IE 10 ~ 11 runs in HTML5 mode. Setting the global API `Dynamsoft.DWT.IfUseActiveXForIE10Plus` to true can turn ActiveX mode on in IE 10 ~ 11.

Please refer to <a href="{{site.indepth}}development/activex.html" target="_blank">Dynamic Web TWAIN & ActiveX</a> for more information.

**Other operating systems**

There could be some other systems which are also supported but not listed above. Dynamsoft doesn't recommend the use of such systems as they are not officially tested. If you need to use Dynamic Web TWAIN on a system not mentioned above, please first contact [Dynamsoft Support]({{site.about}}getsupport.html) to get more information.

**Other browsers**

There are many different browsers on the market which may not have been listed above. However, these browsers most likely use the same browser engines that one of the listed browsers use. For example, on desktop Opera uses [ `Blink` ](https://en.wikipedia.org/wiki/Blink_(web_engine)) just like Chrome. These browsers probably work too. If you plan to use any of the browsers that are not listed above, you should

- Make sure it works by testing our [demo page](https://demo.dynamsoft.com/dwt/online_demo_scan.aspx)

- Do thorough tests before going into production
