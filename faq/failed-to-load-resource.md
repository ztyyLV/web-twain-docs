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

## Error Message - Failed to load resource: net::ERR_CERT_DATE_INVALID

### Symptom 

You get an error message that says **"Failed to load resource: net::ERR_CERT_DATE_INVALID https://local.dynamsoft.com:18623/f/VersionInfo?ts=XXXXXXXXXXXX"**. And the browser keeps asking to install the Dynamsoft Service. 

### Cause 

By default, we use "127.0.0.1" for service connection. However, you may use our "local.dynamsoft.com" certificate by setting dynamsoft.dcp.ip = "local.dynamsoft.com" or Dynamsoft.DWT.Host="local.dynamsoft.com". 

In this case, if you are trying to access an application that integrates a version of Dynamic Web TWAIN V15.3 ~ V17.1.1, you will get the error. Because "local.dynamsoft.com" certificate has expired on November 20th, 2021. To slove this issue, the only resolution is to update the certificate or use your own valid certificate. See below.

### Resolution 

 1) Find _DSConfiguration.ini_.  
 Generally, this file can be found under C:\Windows\SysWOW64\Dynamsoft\DynamsoftService(DynamsoftServicex64/DynamsoftServicex64_16/DynamsoftServicex64_17),   
 then add the following code lines in DSConfiguration.ini  

```javascript
[local.dynamsoftwebtwain.com]  
cert_name=server.pem.ldsc  
key_name=server_key.pem.ldsc  
```

 2) Click <a href="https://tst.dynamsoft.com/public/download/dwt/newcert/newcert.zip" target="_blank">here</a> to dwoanload the new certificate and use the new server.pem.ldsc & server_key.pem.ldsc to replace the old one under   

<ul>
<li>C:\Windows\SysWOW64\Dynamsoft\DynamsoftService(DynamsoftServicex64/DynamsoftServicex64_16/DynamsoftServicex64_17)\cert\server.pem.ldsc </li> 
 &
 <li>C:\Windows\SysWOW64\Dynamsoft\DynamsoftService(DynamsoftServicex64/DynamsoftServicex64_16/DynamsoftServicex64_17)\cert\server_key.pem.ldsc</li>
</ul>

**Note**: the new certificate will expire on September 23th, 2022. This means you will need to update the certificate again after this certificate expires.
<br>

 3) Go to Resources/dynamsoft.webtwain.initiate.js, and add the following line to the end of dynamsoft.webtwain.initiate.js. 
   ```javascript 
   dynamsoft.dcp.ip='local.dynamsoftwebtwain.com';  
   ```

