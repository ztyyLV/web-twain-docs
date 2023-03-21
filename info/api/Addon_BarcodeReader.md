---
layout: default-layout
needAutoGenerateSidebar: true
title: Dynamic Web TWAIN SDK API Reference - BarcodeReader Addon APIs
keywords: Dynamic Web TWAIN, Documentation, API Reference, BarcodeReader Addon APIs
breadcrumbText: Barcode Reader Addon
description: Dynamic Web TWAIN SDK Documentation API Reference BarcodeReader Addon APIs Page
permalink: /info/api/Addon_BarcodeReader.html
---

# `{WebTwainObject}.Addon.BarcodeReader`

> {WebTwainObject} denotes the `WebTwain` instance.

**Methods**

|                                                                                            |
| :----------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [`decode()`]({{site.info}}api/Addon_BarcodeReader.html#decode)                             | [`getRuntimeSettings()`]({{site.info}}api/Addon_BarcodeReader.html#getruntimesettings)                       | [`updateRuntimeSettings()`]({{site.info}}api/Addon_BarcodeReader.html#updateruntimesettings) |
| [`resetRuntimeSettings()`]({{site.info}}api/Addon_BarcodeReader.html#resetruntimesettings) | [`initRuntimeSettingsWithString()`]({{site.info}}api/Addon_BarcodeReader.html#initruntimesettingswithstring) |

---

## decode

Read an image in the buffer and try to locate and decode barcode(s) on it.

**Syntax**

```typescript
decode(index: number): Promise < ITextResults > ;

interface TextResults {
    [index: number]: TextResult;
    description ? : string;
    exception ? : number;
    imageid ? : number;
}
interface TextResult {
    /**
     * Barcode result content in a byte array.
     */
    barcodeBytes: number[];
    /**
     * The barcode format.
     */
    barcodeFormat: Dynamsoft.DBR.EnumBarcodeFormat | number;
    /**
     * Extra barcde formats.
     */
    barcodeFormat_2: Dynamsoft.DBR.EnumBarcodeFormat_2 | number;
    /**
     * Barcode formats as a string.
     */
    barcodeFormatString: string;
    /**
     * Extra barcode formats as a string.
     */
    barcodeFormatString_2: string;
    /**
     * The barcode result text.
     */
    barcodeText: string;
    /**
     * Detailed result information.
     */
    detailedResult: any | null;
    /**
     * The corresponding localization result.
     */
    localizationResult: LocalizationResult;
    /**
     * Other information
     */
    results: Result[];
}
interface LocalizationResult {
    /**
     * The angle of a barcode. Values range from 0 to 360.
     */
    angle: number;
    /**
     * The X coordinate of the left-most point.
     */
    x1: number;
    /**
     * The X coordinate of the second point in a clockwise direction.
     */
    x2: number;
    /**
     * The X coordinate of the third point in a clockwise direction.
     */
    x3: number;
    /**
     * The X coordinate of the fourth point in a clockwise direction.
     */
    x4: number;
    /**
     * The Y coordinate of the left-most point.
     */
    y1: number;
    /**
     * The Y coordinate of the second point in a clockwise direction.
     */
    y2: number;
    /**
     * The Y coordinate of the third point in a clockwise direction.
     */
    y3: number;
    /**
     * The Y coordinate of the fourth point in a clockwise direction.
     */
    y4: number;
    moduleSize: number;
    pageNumber: number;
    regionName: number;
    resultCoordinateType: number;
    terminatePhase: number;
}
interface Result {
    accompanyingTextBytes: number[];
    clarity: number;
    confidence: number;
    deformation: number;
    resultType: number;
}
```

**Parameters**

`index`: Specify the image to decode.

**Availability**

<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
</tr>

<tr>
<td align="center">v14.3.1+ </td>
<td align="center">v14.1+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## getRuntimeSettings

Return the current runtime settings or the settings of the specified built-in template. The template can only be "speed", "balance", or "coverage".

**Syntax**

```typescript
getRuntimeSettings(template?: string): Promise < RuntimeSettings > ;

interface RuntimeSettings {
    barcodeFormatIds: number;
    barcodeFormatIds_2: number;
    binarizationModes: number[];
    deblurLevel: number;
    expectedBarcodesCount: number;
    furtherModes: FurtherModes;
    intermediateResultSavingMode: number;
    intermediateResultTypes: number;
    localizationModes: number[];
    maxAlgorithmThreadCount: number;
    minBarcodeTextLength: number;
    minResultConfidence: number;
    pdfRasterDPI: number;
    pdfReadingMode: number;
    region: Region;
    resultCoordinateType: number;
    returnBarcodeZoneClarity: number;
    scaleDownThreshold: number;
    scaleUpModes: number[];
    terminatePhase: number;
    textResultOrderModes: number[];
    timeout: number;
}
interface FurtherModes {
    accompanyingTextRecognitionModes: number[];
    barcodeColourModes: number[];
    barcodeComplementModes: number[];
    colourClusteringModes: number[];
    colourConversionModes: number[];
    deformationResistingModes: number[];
    dpmCodeReadingModes: number[];
    grayscaleTransformationModes: number[];
    imagePreprocessingModes: number[];
    regionPredetectionModes: number[];
    textAssistedCorrectionMode: number;
    textFilterModes: number[];
    textureDetectionModes: number[];
}
interface Region {
    regionBottom: number;
    regionLeft: number;
    regionMeasuredByPercentage: number;
    regionRight: number;
    regionTop: number;
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
</tr>

<tr>
<td align="center">v14.3.1+ </td>
<td align="center">v14.1+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## updateRuntimeSettings

Update the runtime settings with a given object or use the string "speed", "balance", or "coverage" to use our preset settings. The default setting is "coverage".

**Syntax**

```typescript
updateRuntimeSettings(settings: RuntimeSettings): Promise < RuntimeSettings > ;
```

**Parameters**

`settings`: Specify the runtime settings.

**Availability**

<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
</tr>

<tr>
<td align="center">v14.3.1+ </td>
<td align="center">v14.1+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

**Example**

```javascript
DWObject.Addon.BarcodeReader.getRuntimeSettings("balance")
  .then(function (settings) {
    settings.barcodeFormatIds = Dynamsoft.DBR.EnumBarcodeFormat.BF_ONED;
    return DWObject.Addon.BarcodeReader.updateRuntimeSettings(settings);
  })
  .then(function () {
    DWObject.Addon.BarcodeReader.decode(0).then(
      function (textResult) {
        console.log(textResult);
      },
      function (ex) {
        console.log(ex.message || ex);
      }
    );
  });
```

---

## resetRuntimeSettings

Reset all runtime settings to default values.

**Syntax**

```typescript
resetRuntimeSettings(): Promise < RuntimeSettings > ;
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
</tr>

<tr>
<td align="center">v14.3.1+ </td>
<td align="center">v14.1+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>

---

## initRuntimeSettingsWithString

Set up the barcode reader with advanced settings.

**Syntax**

```typescript
initRuntimeSettingsWithString(
    settings: string
): Promise < RuntimeSettings > ;
```

**Parameters**

`settings`: The runtime setting in the form of a string.

**Availability**

<div class="availability">
<table>

<tr>
<td align="center">ActiveX</td>
<td align="center">H5(Windows)</td>
<td align="center">H5(macOS/TWAIN)</td>
<td align="center">H5(macOS/ICA)</td>
<td align="center">H5(Linux)</td>
</tr>

<tr>
<td align="center">v16.0+ </td>
<td align="center">v16.0+ </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
<td align="center">not supported </td>
</tr>

</table>
</div>