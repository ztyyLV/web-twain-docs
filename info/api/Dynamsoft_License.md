---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN API Reference - License Server APIs
keywords: Dynamic Web TWAIN, Documentation, API Reference, License Server APIs
breadcrumbText: License Server
description: Dynamic Web TWAIN SDK Documentation API Reference License Server APIs Page
---

# `Dynamsoft.DWT`

> License Server properties.

## licenseServer

**Syntax**

``` typescript
/**
 * Specify by URL the license server from where authorization is acquired at runtime.
 */
licenseServer: string [];
```

**Example**
``` javascript
Dynamsoft.DWT.licenseServer = ["https://your.mainServer.com", "https://your.backupServer.com"];
```

**Usage notes**

Gets or sets the URL of the license tracking server used to authenticate the license (handshakeCode) and track barcode reading usage. When set to null (default value), it will connect to Dynamsoft's license tracking servers for online verification. A self hosting option is available. Learn more about [License Tracking Server 2.0](https://www.dynamsoft.com/license-tracking/docs/about/index.html?ver=latest). 

## handshakeCode

**Syntax**

``` typescript
/**
 * Gets or sets the handshake code to interact with the license server(s).
 */
handshakeCode: string;
```

**Example**
``` javascript
Dynamsoft.DWT.handshakeCode = "1000**601-1000***44";
```

**Usage notes**

Learn more about [What is handshakeCode](https://www.dynamsoft.com/license-tracking/docs/about/terms.html?ver=latest#handshake-code)

## sessionPassword

**Syntax**

``` typescript
/**
 * Gets or sets the session password of the handshake code set in license tracking server.
 */
handshakeCode: string;
```

**Example**
``` javascript
Dynamsoft.DWT.sessionPassword = "MyPassw0rd";
```

**Usage notes**
Learn more about [session password](https://www.dynamsoft.com/license-tracking/docs/about/terms.html?ver=latest#session-password) in License Tracking Server 2.0.

## licenseException

**Syntax**

``` typescript
/**
 * Error message related to license.
 */
licenseException: string;
```

**Usage notes**

Check [license error list](https://www.dynamsoft.com/license-tracking/docs/common/errorlist.html?ver=latest) 