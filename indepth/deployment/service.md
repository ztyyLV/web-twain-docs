---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN Deployment - Dynamsoft Service
keywords: Dynamic Web TWAIN, Documentation, Deployment, Dynamsoft Service
breadcrumbText: Dynamsoft Service
description: Dynamic Web TWAIN SDK Documentation Dynamsoft Service Page
---

# DYNAMSOFT SERVICE

> This article is meant exclusively for the [Service mode]({{site.indepth}}features/initialize.html#service-mode) of `DWT` .

Dynamsoft Service is the core piece of `DWT` when it runs in [Service mode]({{site.indepth}}features/initialize.html#service-mode). It handles the communication between the hardware (scanner, webcam, etc.) and the browser, manages the image buffer and coordinates data between different modules. When we say "install `DWT` ", we are actually saying "install Dynamsoft Service" because the service installation includes the installation of all the major modules of `DWT` .

## How to install DWT

### For development and test

Refer to [how to get dwt]({{site.about}}resources.html#how-to-get-dwt) to download and install `DWT` , the official installer is recommended in most cases.

### For production

Once `DWT` has been integrated into your application and you have properly deployed your application on the server. Your clients will get prompted to install `DWT` the first time they access your application. For more information on the process, check out [installation of the Dynamsoft Service]({{site.indepth}}features/initialize.html#installation-of-the-dynamsoft-service).

#### Questions

##### Q: Does installation require administrator rights

A: Yes, the installer is a `.msi` file which requires administrator rights. If your organization doesn't allow end users to have admin rights, you can contact [Dynamsoft Support]({{site.about}}getsupport.html) to get a special "Personal Installer" that doesn't require admin rights.

> NOTE
>  
> Once Dynamsoft Service is installed with admin rights, every user on that machine can use it. On the other hand, if it is installed with a "Personal Installer", only that specific user can use it.

##### Q: What if I am installing over an old version

A: If an old version already exist, since it's unknown which version it is. It's recommended that the user uninstalls the old version before installing the new one. Check out [how to uninstall](#how-to-uninstall-dwt). Check out more [here]({{site.indepth}}development/upgrade.html#service-mode).

##### Q: Can I install Dynamsoft Service for all my clients

A: Yes. In a controlled environment, Dynamic Web TWAIN can be pushed to all clients in one go just like other similar programs. [Group Policy](https://docs.microsoft.com/en-us/troubleshoot/windows-server/group-policy/use-group-policy-to-install-software) is one such technology.

##### Q: Can I install Dynamsoft Service silently

A: Yes. The following are the commands for this purpose

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

## How to uninstall DWT

### On Windows

* Remove Dynamsoft Service through Control Panel, if you see anything named like "Dynamsoft " or "Dynamic Web TWAIN ", remove them as well.
* Remove the folder `C:\Windows\SysWOW64\Dynamsoft\DynamsoftService` and `C:\Windows\SysWOW64\Dynamsoft\DynamsoftServicex64(version)` together with all files under there.

On macOS
3)Run the file Uninstall.pkg to uninstall it. The file can be found in Go > Applications > Dynamsoft > WebTwain > {installed version No.} >

On Linux
Run the file uninstall.sh to uninstall it. The file can be found in opt/dynamsoft/DynamsoftService

# Install the new service on the Client Machines

Dynamic Web TWAIN runs 100% on the client-side, every client machine needs to install its components (known as the Dynamsoft Service) in order to use the SDK.

When users first visit the web page which has Dynamic Web TWAIN implemented, the automatic initialization of the SDK which is built in its JavaScript library will try to establish connection with the Dynamsoft Service which is expected to be installed locally.

NOTE: the initialization happens after the DOMContentLoaded event fires.

Should the connection fail, it means the service is not installed and the following prompt will come up and ask the end user to download and install the service.

![service install](../assets/serviceinstall.png)

NOTE: the same prompt will appear no matter whether the client OS is Windows, macOS or Linux. But the file you download differs on different Systems. On Windows and macOS, the users can double click the downloaded installer to install the SDK. On Linux, however, the users will need to run either one of the following command to install it

Debian / Ubuntu

dpkg -i DynamsoftServiceSetup.deb
Fedora

rpm -ivh DynamsoftServiceSetup.rpm

Once the installation is done, you can click 'Reconnect to the service' or refresh the page to start using the SDK.

![service reconnect](../assets/servicereconnect.png)

* Customize the installer
    - Built into customer's bigger installer
    - White label options

* How it works
    - What does the service do?
    - Why are multiple services running?
    - Crash control?
    - what are these files and folders in the installation dir
* Customize the service
    - What do all the settings in the INI mean and how to set them
* Info about the service status page

https://127.0.0.1:18626/

https://developer.dynamsoft.com/dwt/kb/how-to-get-support/dynamic-web-twain-how-to-restart-dynamic-web-twain-service
https://www.dynamsoft.com/docs/dwt/KB/Deploy-Dist.html#aboutservices
https://www.dynamsoft.com/docs/dwt/KB/Deploy-Dist.html#aboutdistfiles
https://developer.dynamsoft.com/dwt/kb/installation-and-upgrade/dynamic-web-twain-module-is-not-installed

https://developer.dynamsoft.com/dwt/kb/2472

https://developer.dynamsoft.com/dwt/kb/2128
https://developer.dynamsoft.com/dwt/kb/installation-and-upgrade/why-am-i-prompted-to-install-the-dynamsoft-service
https://developer.dynamsoft.com/dwt/kb/2890
https://developer.dynamsoft.com/dwt/kb/2907
https://developer.dynamsoft.com/dwt/kb/2678

https://developer.dynamsoft.com/dwt/kb/2638
https://developer.dynamsoft.com/dwt/kb/2866
https://developer.dynamsoft.com/dwt/kb/2046
https://developer.dynamsoft.com/dwt/kb/distribution-deployment/dynamic-web-twain-installation-problem-temp-solution
https://developer.dynamsoft.com/dwt/kb/distribution-deployment/why-is-the-browser-prompting-me-to-install-the-scanning-service-repeatedly
https://developer.dynamsoft.com/dwt/kb/2894
https://developer.dynamsoft.com/dwt/kb/trouble-shooting-for-end-users/how-to-locate-the-pluginservices-on-client-machines
