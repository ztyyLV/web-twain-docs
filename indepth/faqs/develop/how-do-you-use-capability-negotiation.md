---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN FAQs Develop How Do You Use Capability Negotiation
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How Do You Use Capability Negotiation
description: Dynamic Web TWAIN SDK Documentation FAQs How Do You Use Capability Negotiation
---

# Develop

## How do you use Capability Negotiation? 

> This feature is only available for [TWAIN scanners]({{site.getstarted}}hardware.html#twain-scanners)

**A**: Capability Negotiation is the way a TWAIN application communicates with a TWAIN source. This is how `DWT` communicates with a scanner. The process looks something like this:

* [DWT] Are you capable of ***?
* [Scanner] Yes, and here is what I can do...
* [DWT] Great, here is what I want done...
* [Scanner] Consider it done

`DWT` provides two methods, `getCapabilities()` and `setCapabilities()`, for negotiation. The following shows how to ask for supported page sizes and set it to A4 using Capability Negotiation.

##### Ask for supported sizes

``` javascript
DWObject.getCapabilities(function(result) {
    for (var i = 0; i < result.length; i++) {
        if (result[i].capability.value === Dynamsoft.DWT.EnumDWT_Cap.ICAP_SUPPORTEDSIZES)
            sizes = result[i].values;
    }
    console.log(sizes);
}, function(error) {
    console.log(error);
});
```

##### Set page size to A4

``` javascript
DWObject.setCapabilities({
        exception: "ignore",
        capabilities: [{
            capability: Dynamsoft.DWT.EnumDWT_Cap.ICAP_SUPPORTEDSIZES,
            curValue: 1, // 1 means 'A4' in our case
            exception: "fail"
        }]
    },
    function(result) {
        console.log(result)
    },
    function(error) {
        console.log(error);
    }
);
```