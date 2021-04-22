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

In V17.0, You can also set the full license through [Dynamsoft License 2.0](https://www.dynamsoft.com/license-tracking/docs/about/terms.html#license-20) 

The License Tracking Server, or `LTS` for short, is a proprietary software developed by Dynamsoft to track license usage. See more about [What is a LTS](https://www.dynamsoft.com/license-tracking/docs/selfhosting/managelts.html?ver=latest)

Please note that `LTS` license and ProductKey cannot be used together. And you need to connect to `LTS` to track license usage. We provide 2 ways to host `LTS`, one is [Dynamsoft-hosting](https://www.dynamsoft.com/license-tracking/docs/dshosting/index.html?ver=latest) and the other is [Self-hosting](https://www.dynamsoft.com/license-tracking/docs/selfhosting/index.html?ver=latest). 

All license usage data is submitted to the `LTS` hosted by Dynamsoft. You can

* [View activated license items](https://www.dynamsoft.com/license-tracking/docs/common/licenseitems.html)
* [View the license usage statistics](https://www.dynamsoft.com/license-tracking/docs/common/statistics.html)
* [Get notified about license status](https://www.dynamsoft.com/license-tracking/docs/common/usagealerts.html)

> Read more about [the mechanism](https://www.dynamsoft.com/license-tracking/docs/common/mechanism.html) behind license tracking.

## Terms


View the [Dynamic Web TWAIN License Agreement](https://www.dynamsoft.com/Products/WebTwain_license.aspx).

## Questions

### Q: When is a license validated?

**A**: `DWT` verifies whether there is a valid license when a [ `WebTwain` instance is created]({{site.indepth}}features/initialize.html#creating-the-webtwain-instance). For individual modules, such as the PDF Rasterizer, or the Barcode Reader, the add-on license is validated when the respective add-on api is invoked.

### Q: How do I set my DWT license?

**A**: The `DWT` license is set using the global API `Dynamsoft.DWT.ProductKey`. For more information, please refer to [Update the License Key]({{site.indepth}}development/upgrade.html?ver=latest#update-the-product-key).
