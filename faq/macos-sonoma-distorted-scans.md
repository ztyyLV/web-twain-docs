---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Why are my images coming out distorted in MacOS Sonoma?
keywords: Dynamic Web TWAIN, MacOS, Sonoma, Colour, Grayscale, Greyscale, distorted
breadcrumbText: Why are my images coming out distorted in MacOS Sonoma?
description: Why are my images coming out distorted in MacOS Sonoma?
permalink: /faq/macos-sonoma-distorted-scans.html
---

# MacOS Sonoma issue identified

<div class="blockquote-note"></div>
> [10-16-2023] This information provided in this FAQ is still being updated with results of further testing.

## Symptoms
The user may see distorted, duplicated, or ghost copies of the image when acquiring the scan.

## Background
ICA are the drivers that are put out by the manufacturers to specifically work with the [ImageCaptureCore](https://developer.apple.com/documentation/imagecapturecore) specification on the Mac platform. Generally, the ICA drivers are bundled with MacOS and are updated with MacOS updates. Some manufacturers will make ICA drivers available for their scanners through their own support portals. 

It has been discovered that with the release of MacOS Sonoma (MacOS 14.0), Dynamic Web TWAIN may behave unexpectedly when acquiring images using ICA drivers. We have investigated and it seems that there was a change in how ICA drivers respond to Dynamic Web TWAIN commands. Based on this information, it would be recommended to avoid upgrading to Sonoma, if possible. However, Dynamsoft understands that many end users will automatically upgrade and therefore adjustments to Dynamic Web TWAIN must be made.

## Solution
The recommended solution is to download and install the TWAIN driver from the scanner manufacturer, and use the TWAIN driver.

## Workaround
Dynamsoft understands that not all manufacturers provide TWAIN drivers for MacOS, therefore a workaround has been identified that will help with the distortion, but may still have colour artifacts in the scanned image. If your environment uses Dynamic Web TWAIN 18.4, you may be able to simply install a patched Dynamsoft Service. Please contact [support@dynamsoft.com](mailto:support@dynamsoft.com) for further details.