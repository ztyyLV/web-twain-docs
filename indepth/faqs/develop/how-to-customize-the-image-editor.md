---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: How To Customize The Image Editor
keywords: Dynamic Web TWAIN, Documentation, Develop
breadcrumbText: How To Customize The Image Editor
description: How To Customize The Image Editor
---

# Development

## How To Customize The Image Editor? 

### Can I change the language of the Editor?

Yes, as shown in the sample code above, you can use the parameters `titles` and `dialogText` to specify the language used in the editor

### Can I remove or add buttons on the toolbar of the Editor?

While you can use `visibility` (as shown in the sample code above) to remove a default button(s), currently you cannot add a custom button yet.

### Can I specify where and how big the Editor is? 

Yes, as shown in the sample code above, you can use the parameter `element` to specify where the editor is created and then use `width` and `height` to specify its size.

### Can I change the colors of the Editor?

Yes, as shown in the sample code above, the parameters `border` , `topMenuBorder` , `innerBorder` and `background` can be used to specify the style including color of the editor.
