---
layout: default-layout
needAutoGenerateSidebar: true
noTitleIndex: true
title: Dynamic Web TWAIN Development - Upgrade Guide
keywords: Dynamic Web TWAIN, Documentation, Development, Upgrade Guide
breadcrumbText: Upgrade Guide
description: Dynamic Web TWAIN SDK Documentation Upgrade Guide Page
---

# Upgrade

This upgrade section talks about how to upgrade Dynamic Web TWAIN to the latest version. 

## How to upgrade

You can follow the steps below to upgrade Dynamic Web TWAIN:

1. On your development machine, uninstall the old version of Dynamic Web TWAIN and install the new one.

2. Get the new **Resources** files under the installation folder of Dynamic Web TWAIN and update Resources in your application. 

    Typical paths of Dynamic Web TWAIN folder:

   * **Windows**: `C:\Program Files (x86)\Dynamsoft\Dynamic Web TWAIN SDK {Version Number}\`
   * **macOS**: `Applications > Dynamsoft > Dynamic Web TWAIN SDK {Version Number}`

3. Make necessary updates to the related code.

    If you get a new license key for the new version, you may follow the steps in <a href="{{site.info}}about/license.html">License</a> to update it.

    And you can check the <a href="{{site.info}}schedule/stable.html">Release Notes</a> to learn the changes in the new version.

4. Deploy the new version files to your server and test. 

## Update `dwt` package

If your application uses a framework or library like Angular, React, Vue, etc. and uses the `dwt` package, you can just install the new version of Dynamic Web TWAIN to replace the old one and update the types definition as well. For example:

For npm:

``` cmd
npm install dwt
```

``` cmd
npm install @types/dwt
```

For Yarn:

``` cmd
yarn add dwt
```

``` cmd
yarn add @types/dwt
```
