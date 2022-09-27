---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN API Reference - Interfaces
keywords: Dynamic Web TWAIN, Documentation, API Reference, Interfaces
breadcrumbText: Utility
description: Dynamic Web TWAIN SDK Documentation API Reference Interfaces Page
permalink: /info/api/interfaces.html
---

# Interfaces

|                                       |
| :------------------------------------ | :---------------------------- | ----------------------------- | ------------------------------- |
| [`serviceInfo`](#serviceinfo)             | [`Device`](#device)             |

---

## serviceInfo

**Syntax**

```typescript
interface serviceInfo {
   server: string,
   attrs?: any
}
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported</td>
<td align="center">v18.0+</td>
<td align="center">v18.0+</td>
<td align="center">v18.0+</td>
<td align="center">v18.0+</td>
<td align="center">not supported</td>
</tr>

</table>
</div>

---

## Device

**Syntax**

```typescript
interface Device{
   name: string;
   displayName: string;
   deviceType: DeviceType;
   serverInfo?: serverInfo;
   deviceInfo?: any;
}
```

**Availability**
<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
<td align="center">WASM</td>
</tr>

<tr>
<td align="center">not supported</td>
<td align="center">v18.0+</td>
<td align="center">v18.0+</td>
<td align="center">v18.0+</td>
<td align="center">v18.0+</td>
<td align="center">not supported</td>
</tr>

</table>
</div>
