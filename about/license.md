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

Please visit our [customer portal](https://www.dynamsoft.com/customer/license/trialLicense) to request for a trial license.

## Full licenses

Dynamic Web TWAIN has the following licensing options:

### [Per Client Device](https://www.dynamsoft.com/Products/WebTWAIN_License.aspx#per_browser_client)/ [Per Page](https://www.dynamsoft.com/Products/WebTWAIN_License.aspx#per_page)

For Per Client Device/ Per Page license, you need to use [organizationID]({{site.info}}api/Dynamsoft_WebTwainEnv.html#organizationid) to set.

``` javascript
Dynamsoft.DWT.organizationID = "123456"; // replace the number 123456 with YOUR-ORGANIZATION-ID
```

Please note that this licensing mode is only supported from `DWT` 17.0 and needs to be used with Dynamsfot License Server (`DLS` for short). See more about [What is a DLS](https://www.dynamsoft.com/license-tracking/docs/selfhosting/managelts.html?ver=latest)

LTS supports two deployment methods: [Dynamsoft-hosting](https://www.dynamsoft.com/license-tracking/docs/dshosting/index.html?ver=latest) and [Self-hosting](https://www.dynamsoft.com/license-tracking/docs/selfhosting/index.html?ver=latest). See [How secure is the License Tracking Server](https://www.dynamsoft.com/license-tracking/docs/about/licensefaq.html?ver=latest#how-secure-is-the-license-tracking-server)

### [Per Server License](https://www.dynamsoft.com/Products/WebTWAIN_License.aspx#per_server)

For [Per Server License](https://www.dynamsoft.com/Products/WebTWAIN_License.aspx#per_browser_client) license, you need to use [ProductKey]({{site.info}}api/Dynamsoft_Util.html#productkey) to set.

In most cases, you can just make the change in the file `dynamsoft.webtwain.config.js` .

``` javascript
// If you have multiple license keys, just separate them with semicolons.
Dynamsoft.DWT.ProductKey = 't0076lQAAAGNcO61He******; t0076lQAAAGNcO61He******';
```

If it is set elsewhere, you need to find it and replace it. For example, if you are making use of the [dwt package](https://www.npmjs.com/package/dwt) ( `dynamsoft.webtwain.min.js` or `dynamsoft.webtwain.min.mjs` ), the file `dynamsoft.webtwain.config.js` doesn't exist and you should already have the above line of code in your own JavaScript where you can update the license when needed.

### Other Licenses

The license setting way is the same as Per Server License, please refer to the above Per Server License section.

#### Notes:
Please note that `DLS` license organizationid and ProductKey cannot be used together. And you need to connect to `DLS` to track license usage. 

All license usage data is submitted to the `DLS` hosted by Dynamsoft. You can

* [View activated license items](https://www.dynamsoft.com/license-tracking/docs/common/licenseitems.html)
* [View the license usage statistics](https://www.dynamsoft.com/license-tracking/docs/common/statistics.html)
* [Get notified about license status](https://www.dynamsoft.com/license-tracking/docs/common/usagealerts.html)

> Read more about [the mechanism](https://www.dynamsoft.com/license-tracking/docs/common/mechanism.html) behind license tracking.

## Terms

View the [Dynamic Web TWAIN License Agreement](https://www.dynamsoft.com/Products/WebTwain_license.aspx).

