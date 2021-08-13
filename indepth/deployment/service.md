---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN Deployment - Dynamsoft Service
keywords: Dynamic Web TWAIN, Documentation, Deployment, Dynamsoft Service
breadcrumbText: Dynamsoft Service
description: Dynamic Web TWAIN SDK Documentation Dynamsoft Service Page
---

# Dynamsoft Service 

> This article is meant exclusively for the <a href="{{site.indepth}}features/initialize.html#service-mode" target="_blank">Service mode</a> of `DWT` .

Dynamsoft Service is the core piece of `DWT` when running in <a href="{{site.indepth}}features/initialize.html#service-mode" target="_blank">Service mode</a>. It handles the communication between the hardware (scanner, webcam, etc.) and the browser, manages the image buffer, and coordinates data between different modules. There are two different contexts where installing the SDK applies: a development context or a client/end-user context. For the latter, installing the SDK just entails installing the Dynamsoft Service component since the service installation includes the installation of all the major modules of `DWT` .

## About Dynamsoft Service

The Dynamsoft Service uses `localhost` and the ports **18622, 18625, 18623, and 18626** for connection. The latter two ports are used when there is an SSL encryption, and the earlier two when otherwise. These ports can be configured in the `DSConfiguration.ini` file located in:
`C:\Windows\SysWOW64\Dynamsoft\DynamsoftService(DynamsoftServicex64)\DSConfiguration.ini` (Windows)

By default, there are always three Dynamsoft Service processes running. All of them are called "Dynamsoft Service" and use the same file `DynamsoftService.exe` . However, they are initiated with different arguments.

The main process starts without any argument as follows:

``` cmd
C:\Windows\SysWOW64\Dynamsoft\DynamsoftServicex64\DynamsoftService.exe
```

Then there is a monitor process which is meant to monitor the main process and automatically start it in case it crashes. This one starts like this:

``` cmd
C:\Windows\SysWOW64\Dynamsoft\DynamsoftServicex64\DynamsoftService.exe -asmonitor Global\Dynamsoft_1.5.0_352325843_stop_service_event Global\Dynamsoft_1.5.0_352325828_certcheck_event
```

The last always-running process is meant to support the SSL certificate specifically for the Firefox browser:

``` 
"-scan" "\\.\pipe\dynamsoftscan_15.0_70056_60" "0" "Global\ss352604281_61_70056" "0" "C:\Windows\SysWOW64\Dynamsoft\DynamsoftServicex64\dwt_trial_15.0.0.0625.dll"
```

Service mode **needs** to be used if you wish to <a href="{{site.indepth}}features/input.html#scan-from-a-local-scanner" target="_blank">use a connected physical scanner</a>. It is this Dynamsoft Service that handles all communication between the browser client and the scanner driver. As mentioned previously, Service mode is used by default if the user is on <a href="{{site.getstarted}}platform.html#browsers-on-desktop-devices" target="_blank">desktop</a>.

> NOTE:
> * On Windows, the service runs in the "Local System" account
> * On macOS, the service runs in the "current user" account
> * On Linux, the service runs in the "root" account 

### Related files and folders

There are multiple files and folders in the service directory. We'll take the Windows service as an example. The directory is `C:\Windows\SysWOW64\Dynamsoft\DynamsoftServicex64_16` and the content is (you may not see all these files on your own machine)

#### For the Service

* `\cache\` : Data cached on the disk. Check out <a href="{{site.indepth}}features/buffer.html#disk-caching" target="_blank">Disk Caching</a>.
* `\cert\` : The certificates used for SSL connection. Check out <a href="{{site.indepth}}faqs/develop/how-to-change-the-certificate-of-the-dynamsoft-service.html" target="_blank">How to change the certificates</a>.
* `\dump\` : Dump files in case the service crashes.
* `\log\` : Log files for debugging purposes.
* `\upload\` : Temporary location for image data to be uploaded by the file uploader.
* `DSConfiguration.ini` : Service configuration file. Check out <a href="{{site.indepth}}faqs/develop/how-to-set-the-configuration-of-the-dynamsoft-service.html" target="_blank">How to configure the service</a>.
* `DWASManager_16000428.dll` : The service manager. The name of the file may vary among different versions.
* `DynamsoftService.exe` : The service.
* `DynamicSocket.dll` : For socket connections.
* `service.ini` : Define service name.
* `user_config.ini` : User configuration file.
* `welcome.htm` : The home page for the service (present when you visit http://127.0.0.1:18625)

#### Components

> NOTE
>  
> These files are named with their version number. Different versions of `DWT` will have different files. The following uses v16.1.1 as an example.

* Core scanning module
  + `dwt_16.1.0.0728.dll`
  + `DSSCN2.exe`
  + `DSSCN2x64.exe`
  + `TWAINDSM.dll`
  + `TWAINDSMx64.dll`
* Barcode Reader Addon
  + `\x64\`
  + `\x86\`
  + `dbr_7.4.0.0428.dll`
  + `dbrx64_7.4.0.0428.dll`
* PDF Addon (the last two files are for the PDF Rasterizer)
  + `DynamicPdfCore_11.0.0.0428.dll`
  + `DynamicPdfCorex64_11.0.0.0428.dll`
  + `DynamicPdfR_11.0.0.0428.dll`
  + `DynamicPdfRx64_11.0.0.0428.dll`
* Webcam Addon
  + `DynamicWebcam_15.0.0.0625.dll`
  + `DynamicWebcamx64_15.0.0.0625.dll`
* OCR Basic
  + `\DynamicOCR\`
  + `DynamicOCR_10.0.0.0618.dll`
  + `DynamicOCRx64_10.0.0.0618.dll`
* OCR Professional
  + `\OCRProResource\`
  + `DynamicOCRPro_1.2.0.0806.dll`
  + `DynamicOCRProx64_1.2.0.0806.dll`
  + `ocrp.lic`
  + `OCRPro.lic`
* File Uploader
  + `UploadModule_1.6.0.0428.dll`
* Imaging features
  + `DynamicImage.dll`
  + `DynamicImagex64.dll`

#### Supporting files

* `favicon.ico` : The favicon.
* `legal.txt` : Legal notice.
* `libcurl.dll` : The file transfer library.
* For OpenSSL
  + `libeay32.dll`
  + `ssleay32.dll`
* `port.lock`


Related Resources:
* <a href="{{site.indepth}}faqs/develop/how-to-uninstall-dynamic-web-twain.html" target="_blank">How to uninstall Dynamsoft Service?</a>
* <a href="{{site.indepth}}faqs/develop/what-does-dynamsoft-service-do.html" target="_blank">What does Dynamsoft Service do?</a>




