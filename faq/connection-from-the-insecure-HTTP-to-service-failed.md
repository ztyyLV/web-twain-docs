---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Error Message - The connection from the insecure (HTTP) web page to the local 'Dynamsoft Service' failed
keywords: Dynamic Web TWAIN, Error Meaasge, connection failed, Dynamsoft Service, HTTP
breadcrumbText: Error Message - The connection from the insecure (HTTP) web page to the local 'Dynamsoft Service' failed
description: Error Message - The connection from the insecure (HTTP) web page to the local 'Dynamsoft Service' failed
---

# Error Troubleshooting

## Error Message - The connection from the insecure (HTTP) web page to the local 'Dynamsoft Service' failed

### Symptom 

On Windows 7 x86, Win7 64 Enterprise (or any older Windows OS), you get an error message that says **"The connection from the insecure (HTTP) web page to the local 'Dynamsoft Service' failed. To fix the issue, please update your website to HTTPS or refer to <a href="https://www.dynamsoft.com/web-twain/docs/faq/http-insecure-websites-in-chromium-browser.html?ver=latest" target="_blank">this article</a> for other workarounds"** even if you are accessing a secure (HTTPs) web page.

And refresh the web page does not work. 

### Cause 

GoDaddy Cert cannot be recognized.

### Resolution 

1. Click <a href="https://tst.dynamsoft.com/libs/dwt/17.2.1/GodaddyCert.zip" target="_blank">here</a> to download the certs. 

2. Import `godaddy Trusted Root Cert.cer` to Trusted Root Certification Authorities.

3. Import `godaddy Intermediate Cert.cer` to Intermediate Certificate Authorities.

