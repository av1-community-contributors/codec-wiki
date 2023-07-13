---
title: Codecs
sidebar_position: 3
---

# Codecs
Codecs, shortened from **coder-decoders**, are a system for encoding and decoding data. Image codecs convert the color channels, (often Red, Green, and Blue) into a stream of bits that can be turned back into a sequence of Red, Green, and Blue at the other end.

## Compression
Codecs can be uncompressed, where they encode the data as-is, or compressed, where it tries to encode in a smaller representation than the original form.

## Lossy and Lossless
Within compression, there is the further distiction between lossy and lossless compression. Lossless compression can be reversed to the exact same as the input data. Lossy compression throws out some of the data, resulting in a smaller compressed form.

## Examples
### Video codecs
- **AVC / H.264** - The JPEG of video codecs, very commonly found throughout the internet.
- **HEVC / H.265** - The successor to AVC, lacks web browser support and is mostly used to serve UHD content from streaming services. Excellent support for HDR10+ and Dolby Vision but not very good for extremely high fidelity content due to the default filters being applied.
- **VVC / H.266** - The latest and greatest MPEG codec, however encoding it is extremely slow and pretty much the same case with adoption. Avoid unless for experimentation.
- **VP8** - Google's competitor to AVC, the most useless codec ever created for the love of God don't use it. It's worse than AVC in terms of efficiency.
- **VP9** - Google's competitor to HEVC, a decent alternative to HEVC when dealing with web browser compatibility. But has awful threading.
- **AV1** - Successor to VP9, features include more efficiency and most attractively, grain synthesis. Currently adoption being pushed hard by all major companies such as Google, NVIDIA, Intel, and many more. Only HDR10+ support is available as of now although the spec does allow for Dolby Vision aswell, just waiting for someone to create the tool to inject into the bitstream.

### Audio codecs
- **AAC** - The ubiquitous audio codec found everywhere you go nowadays. Goes together like bread and butter when combined with AVC. There are multiple encoders for this, listed from best to worse, ``qaac`` (Medium-high bitrates), ``FDK-AAC`` & ``FhG-AAC``, ``Nero AAC``, and ``FFmpeg AAC``.
- **MP3** - Pretty much everyone knows about MP3, was used everywhere in the 2000s to early 2010s.
- **Vorbis** - The competitor to MP3 and actually sounds better, most commonly contained in the ``.ogg`` container which means you've probably heard of it before from Minecraft sound effects. Now obsolete and you should consider using Opus instead.
- **Opus** - The successor to Vorbis. Extremely efficient and has excellent surround channel optimizations, probably the best lossy audio codec with good support out there, recommended settings can be found [here](https://wiki.xiph.org/Opus_Recommended_Settings). If you set the bitrate too low you might hear crackling noises as part of artifacts, this has the advantage of making it sound better for voices but worse for music.
