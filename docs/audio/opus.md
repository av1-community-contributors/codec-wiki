---
label: Opus
sidebar_position: 2
---

# Opus

:::warning Help Wanted
This section is in need of contributions. If you believe you can help, please see our [Contribution Guide](../contribution-guide.md) to get started as a contributor!
:::

Opus is an open-source audio codec that has largely replaced [Vorbis](../audio/vorbis.md) as the standard open audio codec. It is the recommended codec for usage in WebM video containers in tandem with the [VP9](../video/VP9.md) or [AV1](../video/AV1.md) video codecs.

Opus is known for its incredible coding efficiency and unique multi-channel optimizations. Stereo Opus audio reaches *transparency* (psychoacoustically lossless audio quality) at 128kb/s, compared to [AAC](../audio/AAC.md)'s 256kb/s and [MP3](../audio/MP3.md)'s 320kb/s. Transparency varies based on the type of content & the encoding implementation used, especially for codecs other than Opus.

Opus's reference encoder is opusenc, which is known for its fantastic performance and versatility.

TODO: Explain how to use [opusenc](https://wiki.xiph.org/Opus_Recommended_Settings)