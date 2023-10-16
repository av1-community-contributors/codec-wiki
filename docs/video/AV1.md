---
label: AV1
sidebar_position: 6
---

# AV1

:::warning Help Wanted
This section is in need of contributions. If you believe you can help, please see our [Contribution Guide](../contribution-guide.md) to get started as a contributor!
:::

AV1 is a royalty-free video compression format designed to succeed [VP9](../video/VP9.md). It presently competes with [VP9](../video/VP9.md), [VVC](../video/VVC.md), and [HEVC](../video/HEVC.md). AV1 is computationally more complex than VP9, but is fast to decode due to the mature and efficient dav1d AV1 decoder. AV1 hardware accelerated decoding is also available on a variety of different consumer hardware devices, all of which are enumerated [on Wikipedia](https://en.wikipedia.org/wiki/AV1#Hardware). Standout entries include modern Intel, AMD, & Nvidia integrated & discrete GPUs, Google's Tensor SoC powering the Pixel line, Apple's A17 Pro in the iPhone 15 Pro series, and modern Mediatek & Qualcomm chips. YouTube is currently in the process of transitioning their videos to use AV1.

There are a number of viable AV1 encoding solutions available today. The three best, most ubiquitous, and free implementations are [aomenc](../encoders/aomenc.md), [SVT-AV1](../encoders/SVT-AV1.md), & [rav1e](../encoders/rav1e.md).