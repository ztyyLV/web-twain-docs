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

This happened frequently if you use the WIA driver instead of TWAIN driver. Our SDK is developed based on the TWAIN protocol, therefore the performance in WIA driver cannot be guaranteed.

In another case, just like its literal meaning, the user manually terminated the ongoing operation.

### Resolution

Since Dynamic Web TWAIN has better compatibility and stability with TWAIN driver, please use TWAIN driver to avoid issue.

> **If you want to continue with WIA driver:**
_You can ignore the error message since it won't affect the actual usage, Dynamsoft is planning to fix the issue at v18.2. Moreover, Dynamic Web TWAIN will officially support WIA driver starting from v18.2._