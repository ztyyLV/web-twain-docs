---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Error message - User cancelled the operation
keywords: Dynamic Web TWAIN, Error Troubleshooting, product key does not support version
breadcrumbText: Error message - User cancelled the operation
description: Error message - User cancelled the operation
permalink: /faq/error-message-user-cancelled-the-operation.html
---

# Error Troubleshooting

## Error message - User cancelled the operation

### Symptom

You may encounter the error "user cancelled the operation" after successfully scanning all pages. But you can still run the application normally.

### Cause

1) The user manually terminated thte ongoing operation.

2) This is known to happen if you use a WIA driver instead of TWAIN driver. Our SDK is developed based upon the TWAIN protocol, therefore the performance in WIA driver cannot be guaranteed.

### Resolution

To avoid issues using the WIA driver, please use the manufacturer supplied TWAIN driver.

> **If you want to continue with WIA driver:**
_You can ignore the error message since it won't affect the actual usage. Dynamic Web TWAIN will officially support WIA driver in the coming release._