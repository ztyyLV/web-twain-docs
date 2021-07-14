---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN FAQs Develop How To Uninstall Dynamic Web TWAIN
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How To Uninstall Dynamic Web TWAIN
description: Dynamic Web TWAIN SDK Documentation FAQs How To Uninstall Dynamic Web TWAIN
---

# Develop

## How To Uninstall Dynamic Web TWAIN? 

### On Windows

* Remove Dynamsoft Service through Control Panel, if you see anything named along the lines of "Dynamsoft " or "Dynamic Web TWAIN ", remove them as well
* Remove the folders `C:\Windows\SysWOW64\Dynamsoft\DynamsoftService` and `C:\Windows\SysWOW64\Dynamsoft\DynamsoftServicex64(version)`

### On macOS

* Run the file `Uninstall.pkg` . The file can be found in `Go > Applications > Dynamsoft > WebTwain > {installed version No.}`
* Remove the folder `Go > Applications > Dynamsoft > WebTwain > {installed version No.}`

### On Linux

* Run the file `uninstall.sh` . The file can be found in `opt/dynamsoft/DynamsoftService`
* Remove the folder `opt/dynamsoft/DynamsoftService`