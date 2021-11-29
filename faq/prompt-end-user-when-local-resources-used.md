---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Can I prompt end-user when the Dynamic Web TWAIN SDK attempts to visit any local resources (scanner, camera, or disk drive)?
keywords: Dynamic Web TWAIN, Security, end user, prompt
breadcrumbText: Can I prompt end-user when the Dynamic Web TWAIN SDK attempts to visit any local resources (scanner, camera, or disk drive)?
description: Can I prompt end-user when the Dynamic Web TWAIN SDK attempts to visit any local resources (scanner, camera, or disk drive)?
---

# Security

## Can I prompt end-user when the Dynamic Web TWAIN SDK attempts to visit any local resources (scanner, camera, or disk drive)?

### Reason

Yes, Dynamic Web TWAIN supports authorization for accessing local files, scanners, or webcams.

Upon popular demand, the end-user authorization feature was added in version 12. The feature is disabled by default. When enabled, users are prompted for authorization whenever a web application is trying to use a connected scanner/webcam device or to access any local files.

To enable user authorization, please contact <a href="mailto:support@dynamsoft.com" target="_blank">support@dynamsoft.com</a> for a special key.

To disable manual authorization:

[ref: <a href="https://www.dynamsoft.com/web-twain/docs/indepth/faqs/troubleshooting/how-to-disable-end-user-authorization.html" target="_blank">How to disable end-user manual authorization when accessing local hardware (dynamsoft.com)</a>]
If you are installing the SDK by a .msi to multiple machines at a time (as the system admin), you can use the file DynamicWebTWAINHTML5Edition.msi located under Resources/MSI and use the following command when installing.

```javascript
DynamicWebTWAINHTML5Edition.msi MyCustomParameter="DisableScannerAccessAuth; DisableFileAccessAuth"
```

The same works too if you are installing on a single machine by CMD by a singer user.
