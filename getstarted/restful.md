---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN SDK Development - RESTful Integration
keywords: Dynamic Web TWAIN, Documentation, Development, RESTful Integration
breadcrumbText: RESTful Integration, REST API
description: Dynamic Web TWAIN SDK Documentation RESTful Integration Page
permalink: /indepth/development/restful.html
---

# Dynamic Web TWAIN's RESTful API

## Overview
Dynamic Web TWAIN (DWT) 18.4 brings forward a new RESTful API allowing developers a new avenue to access scanners across platforms and languages. This allows the Dynamsoft Service installed on the scanner host (local or server), to be accessed by desktop, mobile, and server-side applications.

## Currently Available Libraries
- [Node.js](https://github.com/yushulx/dynamsoft-service-REST-API)
- [Flutter](https://github.com/yushulx/flutter_twain_scanner)
- [Java](https://github.com/tony-xlh/JavaFX-Document-Scanner)
- [Python](https://github.com/yushulx/twain-wia-sane-scanner)
- [.NET](https://github.com/yushulx/dotnet-twain-wia-sane-scanner)

## Prerequisites
- The Dynamsoft Service must be installed on the scanner host machine, whether it be a remote PC, server, or local workstation.

## Points to consider
- Using the RESTful API will return pure images as a stream and will not make use of the Dynamic Web TWAIN Viewer. You may instantiate a Viewer in your web application and load the images into the Viewer if you wish.

## How to use
The general workflow to use the RESTful API is as follows:
1. Set DWT license key
2. Initiate ScannerController
3. Declare scanner host IP address
4. Query scanners at scanner host
5. Select scanner
6. Set scan parameters
7. Obtain a scan job via ScannerController
8. Open the data stream to get the images from the host
9. Take the images and display or maniuplate as necessary. 