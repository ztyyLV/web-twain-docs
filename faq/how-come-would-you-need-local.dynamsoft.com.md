---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How come would you need local.dynamsoft.com instead of 127.0.0.1
keywords: Dynamic Web TWAIN, CERT INVALID, local.dynamsoft.com
breadcrumbText: How come would you need local.dynamsoft.com instead of 127.0.0.1?
description: How come would you need local.dynamsoft.com instead of 127.0.0.1?
---

# Project Deployment and End-user Installation

## How come would you need local.dynamsoft.com instead of 127.0.0.1?

By default, we use "127.0.0.1" for service connection. **127.0.0.1** uses a self-signed certificate because it is an internal IP address, your environment may request high level security, self-signed certificate is not accepted, so we also provide a 3rd party authority issued certificate - **local.dynamsoft.com**, as an official domain, uses VeriSign'ed certificate.  

Please note: all official certificates issued by 3rd party **come with an expiry date** - generally one year. 

