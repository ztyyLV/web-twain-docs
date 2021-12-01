---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Error Message - Failed to load resource
keywords: Dynamic Web TWAIN, Error Meaasge, Failed to load resource, CERT INVALID
breadcrumbText: Error Message - Failed to load resource
description: Error Message - Failed to load resource
---

# Error Troubleshooting

## Error Message - Failed to load resource

### Symptom 

You get an error message that says "Failed to load resource: net::ERR_CERT_DATE_INVALID https://local.dynamsoft.com:18623/f/VersionInfo?ts=XXXXXXXXXXXX". And the browser keeps asking to install the Dynamsoft Service. 

### Cause 

You are trying to access an application that integrates a version of Dynamic Web TWAIN V15.3 ~ V17.1.1. Because in V15.3 ~ V17.1.1, we use "local.dynamsoft.com" certificate for service connection. However, this certificate has expired on November 20th, 2021. To slove this issue, the only resolution is to update the certificate. See below.

### Resolution 

1. Find DSConfiguration.ini. Generally, this file can be found under C:\Windows\SysWOW64\Dynamsoft\DynamsoftService(DynamsoftServicex64/DynamsoftServicex64_16/DynamsoftServicex64_17)

then add the following code lines in DSConfiguration.ini

```javascript
[local.dynamsoftwebtwain.com]
cert_name=server.pem.ldsc
key_name=server_key.pem.ldsc
```

2. Click <a href="https://tst.dynamsoft.com/public/download/dwt/newcert/newcert.zip" target="_blank">here</a> to dwoanload newcert.zip and use the new server.pem.ldsc & server_key.pem.ldsc to replace the old one under 

C:\Windows\SysWOW64\Dynamsoft\DynamsoftService(DynamsoftServicex64/DynamsoftServicex64_16/DynamsoftServicex64_17)\cert\server.pem.ldsc & C:\Windows\SysWOW64\Dynamsoft\DynamsoftService(DynamsoftServicex64/DynamsoftServicex64_16/DynamsoftServicex64_17)\cert\server_key.pem.ldsc

3. Set dynamsoft.dcp.ip to 'local.dynamsoftwebtwain.com'
```javascript
dynamsoft.dcp.ip='local.dynamsoftwebtwain.com';
```
