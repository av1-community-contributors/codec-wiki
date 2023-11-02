---
label: WebP
sidebar_position: 4
---

# WebP

:::warning Help Wanted
This section is in need of contributions. If you believe you can help, please see our [Contribution Guide](../contribution-guide.md) to get started as a contributor!
:::

WebP is a free image file format first released by Google in 2010. It consists of 2 primary "modes" of operation. A lossy mode derived from the [VP8](../video/VP8.md) video codec, and a novel lossless mode added in 2011.

## Encoding

### Using libwebp
libwebp supports WebP, JPEG, PNG, PNM (PGM, PPM, PAM), TIFF as input formats, and a quality (`-q`) value between 0 (lowest quality, smallest file) and 100 (highest quality, largest file).
```bash
cwebp example.png -q 75 -o example.webp
```

## Performance Checklist

Lossless? *Yes*

Lossy? *Yes*

Supported Bit Depth:
*8 BPC*

HDR/Wide Gamut? *No*

Animation? *Yes*

Transparency? *Yes*

Progressive Decode? *No*

Royalty Free? *Yes*