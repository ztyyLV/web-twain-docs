---
layout: default-layout
needAutoGenerateSidebar: true
noTitleIndex: true
title: Dynamic Web TWAIN License
keywords: Dynamic Web TWAIN, Documentation, License
breadcrumbText: License
description: Dynamic Web TWAIN SDK Documentation License Page
---

# License

## How do I get a trial License

Please visit our <a href="https://www.dynamsoft.com/customer/license/trialLicense" target="_blank">customer portal</a> to request for a trial license.

## Full licenses

Dynamic Web TWAIN has the following licensing options:

### <a href="https://www.dynamsoft.com/Products/WebTWAIN_License.aspx#per_browser_client" target="_blank">Per Client Device</a> / <a href="https://www.dynamsoft.com/Products/WebTWAIN_License.aspx#per_page" target="_blank">Per Page</a>  

For Per Client Device/ Per Page license, you need to use <a href="{{site.info}}api/Dynamsoft_WebTwainEnv.html#organizationid" target="_blank">organizationID</a> to set.

``` javascript
Dynamsoft.DWT.organizationID = "123456"; // replace the number 123456 with YOUR-ORGANIZATION-ID
```

Please note that this licensing mode is only supported from `DWT` 17.0 and needs to be used with Dynamsfot License Server (`DLS` for short). See more about <a href="https://www.dynamsoft.com/license-tracking/docs/selfhosting/managelts.html?ver=latest" target="_blank">What is a DLS</a>

LTS supports two deployment methods: <a href="https://www.dynamsoft.com/license-tracking/docs/dshosting/index.html?ver=latest" target="_blank">Dynamsoft-hosting</a> and <a href="https://www.dynamsoft.com/license-tracking/docs/selfhosting/index.html?ver=latest" target="_blank">Self-hosting</a>. See <a href="https://www.dynamsoft.com/license-server/docs/about/licensefaq.html?ver=latest#how-secure-is-the-dynamsoft-license-server" target="_blank">How secure is the Dynamsoft License Server</a>

###  <a href="https://www.dynamsoft.com/Products/WebTWAIN_License.aspx#per_server" target="_blank">Per Server</a>

For <a href="https://www.dynamsoft.com/Products/WebTWAIN_License.aspx#per_server" target="_blank">Per Server</a> license, you need to use <a href="{{site.info}}api/WebTwain_Util.html#productkey" target="_blank">ProductKey</a> to set.

In most cases, you can just make the change in the file `dynamsoft.webtwain.config.js` .

``` javascript
// If you have multiple license keys, just separate them with semicolons.
Dynamsoft.DWT.ProductKey = 't0076lQAAAGNcO61He******; t0076lQAAAGNcO61He******';
```

If it is set elsewhere, you need to find it and replace it. For example, if you are making use of the <a href="https://www.npmjs.com/package/dwt" target="_blank">dwt package</a>  ( `dynamsoft.webtwain.min.js` or `dynamsoft.webtwain.min.mjs` ), the file `dynamsoft.webtwain.config.js` doesn't exist and you should already have the above line of code in your own JavaScript where you can update the license when needed.

### Other Licenses

The license setting way is the same as Per Server License, please refer to the above Per Server License section.

#### Notes:
Please note that `DLS` license <strong>organizationID and ProductKey cannot be used together</strong>. And you need to connect to `DLS` to track license usage. 

All license usage data is submitted to the `DLS` hosted by Dynamsoft. You can

* <a href="https://www.dynamsoft.com/license-tracking/docs/common/licenseitems.html" target="_blank">View activated license items</a>
* <a href="https://www.dynamsoft.com/license-tracking/docs/common/statistics.html" target="_blank">View the license usage statistics</a>
* <a href="https://www.dynamsoft.com/license-tracking/docs/common/usagealerts.html" target="_blank">Get notified about license status</a> 

> Read more about <a href="https://www.dynamsoft.com/license-tracking/docs/common/mechanism.html" target="_blank">the mechanism</a> behind license tracking.

## Terms

View the <a href="https://www.dynamsoft.com/Products/WebTwain_license.aspx" target="_blank">Dynamic Web TWAIN License Agreement</a>.

