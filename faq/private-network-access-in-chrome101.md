---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How to resolve Dynamic Web TWAIN issue in Chrome 101?
keywords: Dynamic Web TWAIN, Project Deployment and End-user Installation, Chrome 101, Private Network Access, preflight request
breadcrumbText: How to resolve Dynamic Web TWAIN issue in Chrome 101?
description: How to resolve Dynamic Web TWAIN issue in Chrome 101?
---

# Project Deployment and End-user Installation

## Dynamic Web TWAIN issue in Chrome 101

### Symptom

When visiting a website using Chrome 101+ that has Dynamic Web TWAIN SDK v17.2 or older integrated into the application, you may see the following **error message** in the browser console. For the end users of your website, they may be repeatedly prompted to download and install the Dynamsoft Service.

Chrome 101 is expected to be released in early April 2022.

NOTE that the same issue will also occur in any browser based on **Chromuim 101+**, such as Microsoft Edge 101.

```
Access to XMLHttpRequest at 'https://local.dynamsoft.com:****' from origin 'https://yourwebsiteURL' has been blocked by CORS policy: 
Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Private-Network' header was present in the preflight response 
for this private network request targeting the `local` address space.
```

In Chrome 98, you may have already noticed the following **warning/error message** in console, but it is not expected to cause any immediate issues.

```
A site requested a resource from a network that it could only access because of its users' privileged network position. 
These requests expose devices and servers to the internet, increasing the risk of a cross-site request forgery (CSRF) attack, and/or information leakage.

To mitigate these risks, Chrome will require non-public subresources to opt-into being accessed with a preflight request and will start blocking them in Chrome 101 (April 2022).
```

### Cause

As a part of the Private Network Access (PNA) specification, Chrome is deprecating direct access to private network endpoints from public websites. In Chrome 101, Chrome will enforce explicit permission from private network endpoints before requests from public websites can be allowed. More details can be found at [https://developer.chrome.com/blog/private-network-access-preflight/](https://developer.chrome.com/blog/private-network-access-preflight/).

Dynamic Web TWAIN utilizes a local service named 'Dynamsoft Service' to support document scanning from physical scanners. Your web scanning page needs to make requests to localhost or 127.0.0.1 to communicate with the local service. In Chrome 101, the connection from your public website to the private network (i.e. localhost/127.0.0.1) will be blocked.


### Resolution

You can apply one of the following solutions:

1. Upgrade Dynamic Web TWAIN SDK to **version 17.2.1** or later

   In version 17.2.1, we have made changes to handle preflight requests on our end to resolve the issue. This version is expected to be released by early March.

   Please note that once upgraded, the Dynamosft Service on all client machines also need to be updated. You may consider [installing Dynamsoft Service silently](https://www.dynamsoft.com/web-twain/docs/faq/can-i-install-dynamsoft-service-silently.html?ver=latest#can-i-install-dynamsoft-service-silently).

2. Disable Private Network Access checks using enterprise policies

   If you have administrative control over your users, you can disable Private Network Access checks using either of the following policies:

   [InsecurePrivateNetworkRequestsAllowed](https://chromeenterprise.google/policies/#InsecurePrivateNetworkRequestsAllowed)  
   [InsecurePrivateNetworkRequestsAllowedForUrls](https://chromeenterprise.google/policies/#InsecurePrivateNetworkRequestsAllowedForUrls)  

   For more details about managing policies for your users, please refer to Google's [help center article](https://support.google.com/chrome/a/answer/9037717).

### If you need more time to implement the solution

   Register for [Google's deprecation trials](https://developer.chrome.com/blog/origin-trials/#deprecation-trials) to request a time extension so your website will not be affected during the trial period which will last for at least 6 months.

