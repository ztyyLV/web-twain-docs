---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How to resolve if Dynamic Web TWAIN stops working on insecure websites in Chrome v94
keywords: Dynamic Web TWAIN, Documentation, Troubleshooting
breadcrumbText: How to resolve if Dynamic Web TWAIN stops working on insecure websites in Chrome v94
description: How to resolve if Dynamic Web TWAIN stops working on insecure websites in Chrome v94
---

# Troubleshooting

## How to resolve if Dynamic Web TWAIN stops working on insecure websites in Chrome v94

- **Symptom**

Visiting a web page with Dynamic Web TWAIN SDK integrated via Chrome v94, you will get prompted to download and install the Dynamsoft Service repeatedly.

However, the same issue doesn't exist in Chrome v93 and earlier version or other web browsers like Firefox, Internet Explorer and Edge.

- **Reason**

Google introduced a new security feature from Chrome v94 to block any requests to private networks from insecure websites. More detail can be found at [https://developer.chrome.com/blog/private-network-access-update/](https://developer.chrome.com/blog/private-network-access-update/)


Dynamic Web TWAIN utilizes a local service - called 'Dynamsoft Service' to support document scanning from physical scanners. Therefore, your web scan page would need to make requests to localhost or 127.0.0.1 to communicate with the local service. However, if your website is hosted under HTTP, by using or upgrading to Chrome v94, the connection from your insecure website to localhost/127.0.0.1 is blocked.

If the web page couldn't connect to the Dynamsoft Service successfully, its default behavior is to prompt the dialog to install the service. That's why your end users would see the dialog appearing repeatedly.

- **Resolution**

As suggested by Google, the ultimate solution is to update your website from HTTP to **HTTPS**. Set [IfSSL](https://www.dynamsoft.com/web-twain/docs/info/api/WebTwain_IO.html?ver=latest#ifssl) to true to enable document uploading via HTTPS.

If you need time to make the change, you may try one of the following workarounds

 - ask your end users to temporarily use Chrome v93 (or an older version) or a different web browser like Firefox/IE 10+/Edge

 - disable the block setting. To do that, please
   + 1) visit chrome://flags/#block-insecure-private-network-requests
   + 2) set 'Block insecure private network requests' to Disabled

![activating-the-WebTwain-instance-1]({{site.assets}}imgs/block-insecure-private-network-request.png)

 - register for [Google's deprecation trials](https://developer.chrome.com/blog/origin-trials/#deprecation-trials)
