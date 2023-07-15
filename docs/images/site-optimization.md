---
label: Site Optimization
sidebar_position: 7
---

# Site Optimization

# Reducing Image Load on the Web

A big part of understanding any multimedia codec technology is knowing the application for such technology. For images, a big use case is web delivery. Compared to other multimedia, images are incredibly popular on the Web & knowing how to serve them properly can be a massive boon to your website's traffic as well as less of a headache for users on slower connections or who are under bandwidth constraints. The most disappointing part is that images are often poorly done on the web; all too frequently will you run into a site serving massive photographic PNGs for no reason, or photography sites serving photographs fresh out of the editing software with no thought put into their final delivery. A little effort, patience, & knowledge will go a long way toward improving the user experience for individuals using your site, & this article will illustrate some of the basics.

:::caution
These instructions are for *photographic* images; other kinds of images, like non-photographic, artwork, pixel art, etc. should likely be handled differently.
:::

## Fire & Forget

First, we'll illustrate what *not* to do, which is fortunately not incredibly difficult to avoid. Taking an image straight out of your editing software at a massive size will often bloat the size & resolution to something that isn't generally usable for a website regardless of the codec you're using & its fidelity. It can be argued there are specific use cases where incredible resolution & fidelity need to coexist on the Web, but we won't be covering those here. Here's an example of a bloated image:

*exported straight from Darktable at JPEG q90, no scaling*

![bloated_jpeg](/img/_DSC8466.jpg)

**2.2 MB**

## Massive Improvement

The easiest way to have a large improvement without doing much work is to simply resize the image before serving it. Even if you exported a lossy JPEG, resizing should remove a lot of artifacts. The way to perceive a worst-case for an image's size on a site is to inspect the image element's width & height, which should give us an estimate for how large we should make our image. Any larger than this value is unreasonable since we're overfilling the element's size for no reason & the image is being scaled down anyway.

![box-size-mac](/img/box-size-mac.avif)
*Inspect Element in Firefox. The Mac used to take this screenshot has a relatively high display resolution of 2560x1664. Because Macs scale things differently, we're probably going to want to double the horizontal resolution here.*

The width is the most important value here, so our new image is going to be exported with a width of 1700 pixels. This new image, encoded at JPEG q90 with `cjpegli`, looks like this:

![smaller_jpeg](/img/_DSC8466-smaller.jpg)

Obviously there's lost fidelity compared to the original, but considering this is *so much smaller*, it is worth the trade-off for many. It is also worth noting we are using an improved jpeg encoder in the form of `cjpegli`, although that is secondary to the resize. If it doesn't look as good as you want it to, you can always scale the resolution up a bit too, though currently it looks plenty passable for its size.

2.2 MB -> **233 KB**

## New Codecs

If you desire further improvement, it may be time to consider using a newer codec like AVIF or JPEG-XL. These options will compress far more effectively than JPEG, with the only trade-off being browser support