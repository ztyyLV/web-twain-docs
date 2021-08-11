---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How to uninstall the Dynamsoft service without MSI installer
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How to uninstall the Dynamsoft service without MSI installer
description: How to uninstall the Dynamsoft service without MSI installer
---

# Development

## How to uninstall the Dynamsoft service without MSI installer?

Run 'Command Prompt' as **administrator**, go to C:\WINDOWS\system32, then execute the following line:

``` shell
wmic product where name="Dynamsoft Service" call uninstall /nointeractive
```

![How-to-uninstall-the-Dynamsoft-Service-without MSI-installer.png]({{site.assets}}imgs/How-to-uninstall-the-Dynamsoft-Service-without MSI-installer.png)
