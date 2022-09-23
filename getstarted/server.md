---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN Deployment - Server Deployment
keywords: Dynamic Web TWAIN, Documentation, Deployment, Server
breadcrumbText: Server Deployment
description: Dynamic Web TWAIN SDK Documentation Server Deployment Page
permalink: /indepth/deployment/server.html
---

# Deploy your application on the server

Once you have finished integrating `DWT` in your application, you can deploy it on your server to test it. As far as `DWT` is concerned, all related files are to be served as static files which makes the deployment very easy.

## How-to

The Resources folder is typically found in the following location after the installation:

- Windows: C:\Program Files (x86)\Dynamsoft\Dynamic Web TWAIN SDK {Version Number}\
- macOS: Applications > Dynamsoft > Dynamic Web TWAIN SDK {Version Number}

The deployment of Dynamic Web TWAIN is easy. Simply copy the Resources folder to your web server. Learn more on [Set ResourcesPath](#set-resourcespath)

## Technical details

### Make sure the static files can be served correctly

`DWT` comes with lots of static resources files, for the full list, check out [What are the Resources files]({{site.faq}}what-are-the-resources-files.html). The following table shows each file type and its MIME type which must be configured in your webserver in order for that type of file(s) to be correctly served to the client browsers.

| File Type | MIME Type | Required by |
|:-:|:-:|:-:|
| `.js` | `application/javascript` | All Browsers |
| `.css` | `text/css` | All Browsers |
| `.wasm` | `application/wasm` | [WASM Browsers]({{site.getstarted}}Platform.html#wasm-browsers) |
| `.msi` | `application/octet-stream` | [Browsers on Windows]({{site.getstarted}}Platform.html#browsers-on-windows) |
| `.pkg` | `application/pkg-mac` | [Browsers on macOS]({{site.getstarted}}Platform.html#browsers-on-macos) |
| `.deb` | `application/x-debian-package` | [Browsers on Linux]({{site.getstarted}}Platform.html#browsers-on-linux) |
| `.rpm` | `application/x-redhat-package-manager` | [Browsers on Linux]({{site.getstarted}}Platform.html#browsers-on-linux) |

### Enable HTTPS

If you need to use any of the following features, you must enable HTTPS on the server.

* Use the new [Camera module]({{site.indepth}}features/Input.html#use-mediadevices-cameras)
* Upload or Download via SSL
* Any other features that require a secure connection

For how to enable HTTPS, please check out the manual of your webserver.

### Set ResourcesPath

The global API [ `Dynamsoft.DWT.ResourcesPath` ]({{site.info}}api/Dynamsoft_WebTwainEnv.html#resourcespath) sets a relative or absolute path that tells `DWT` where to look for the resources files at runtime. Its default value is `Resources` which means all these files are put in a directory called *Resources* that is in the same location as the web page on which `DWT` is running. This is the simplest situation possible, in most cases, it's a lot more complicated and you must make sure the correct value is set.

#### How to know ResourcesPath is wrong

When you set `ResourcesPath` wrong, static files such as `dynamsoft.webtwain.install.js` , `dynamsoft.viewer.css` will fail to load and you see 404 errors in the browser console.

#### Using an absolute path

If you wish to use an absolute path instead, such as "https://www.dynamsoft.com/dwt/demo/resources/", this is supported. 

> Note: If you want to use the [Camera module]({{site.indepth}}features/Input.html#use-mediadevices-cameras), please make sure the absolute path stays in the same domain to avoid cross-origin issues.

#### Setting ResourcePath using global API

If you do not wish to add an absolute path, you can add codes before you define the `DWObject`. Learn more on how to [change the reference path]({{site.faq}}change-reference-path.html)

```javascript
Dynamsoft.DWT.ResourcesPath = "New folder/Resources";
```
