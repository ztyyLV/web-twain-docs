---
layout: default-layout
noTitleIndex: true
needAutoGenerateSidebar: true
title: Is there undo functionality?
keywords: Dynamic Web TWAIN, Image Editing, undo
breadcrumbText: Is there undo functionality?
description: Is there undo functionality?
---

# Image Editing

## Is there undo functionality?

No, we don’t have an undo functionality while the user tries to edit an image because it may not be easy to achieve step-by-step undo with our SDK. However, we do offer a restore changes functionality inside of an image editor, before saving any changes that were made. But our advice would be to save the image/images first before editing and then if you want to revert, you can simply load the previously saved version in case of any mistakes made while editing.
