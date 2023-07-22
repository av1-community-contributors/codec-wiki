---
sidebar_position: 5
---

# Psycho-visual

:::info Under Maintenance
The content in this entry is incomplete & is in the process of being completed.
:::

:::caution Pending Review
The content in this entry may not be entirely accurate, & is pending further review to assess the quality of the information.
:::

"*Traditionally, the encoder tends to favor blurred reconstructed blocks over blocks which have wrong motion. The human eye generally prefers the wrong motion over the blur. Psycho-visual options combat this. While technically less “correct”, which is why they are disabled for research purposes, they should be enabled for content intended for “human eyes”.* "

-- Kokomins' x265 [guide](https://kokomins.wordpress.com/2019/10/10/anime-encoding-guide-for-x265-and-why-to-never-use-flac)

&nbsp;&nbsp;
## In English

Encoders favor blurring out fine details whenever possible because that is what's mathematically correct, but the human eye prefers them to look sharp. Just like how Tiktok users say "16K quality" whenever an oversharpened image of a waifu upscaled using AI is posted. But the encoder says "hell no wtf" because it doesn't "fit" correctly with the other blocks. But "Psycho-visual" options that exist combat this by giving some needed "confidence" to the encoder that it's okay to put in the wrong blocks.

Although blurring also have their benefits especially at lower bitrates, because at that point there's not much detail to retain from the original source form, you do prefer to look at a blurry picture than a blocky DCT mess right? As always, setting psycho-visual options too high is also bad. Experiment and find the sweet spot for your type of content.
