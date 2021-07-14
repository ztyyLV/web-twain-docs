---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN FAQs Develop Can I Install Dynamsoft Service Silently
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: Can I Install Dynamsoft Service Silently
description: Dynamic Web TWAIN SDK Documentation FAQs Can I Install Dynamsoft Service Silently
---

# Develop

## Can I install Dynamsoft Service silently? 

Yes. The following are the commands for this purpose

* Windows

``` shell
msiexec  /i  "/path/to/DynamsoftServiceSetup.msi"   /qn
```

* macOS

``` shell
// Install
sudo installer -pkg /path/to/DynamsoftServiceSetup.pkg -target /Applications
// Stop service
sudo launchctl unload /Library/LaunchAgents/com.dynamsoft.dynamsoftservicex64.plist
// Start service
launchctl load /Library/LaunchAgents/com.dynamsoft.dynamsoftservicex64.plist
```

* Linux

``` shell
sudo dpkg -i  /path/to/DynamsoftServiceSetup.deb
```

or

``` shell
sudo rpm -i path/to/DynamsoftServiceSetup.rpm
```