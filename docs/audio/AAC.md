---
label: AAC
sidebar_position: 1
---

# AAC

AAC, or Advanced Audio Coding, is an umbrella for a number of different codecs. When people refer to AAC, they are often referring to the commonly used AAC-LC profile developed as part of the original AAC standard in 1997 (although there is a distinction between this version of AAC-LC, called MPEG-2 AAC, & MPEG-4 AAC which is newer). However, there are a number of other variants that have been created over time. These include:
- AAC-LC (low-complexity AAC)
- AAC-LD (low delay AAC)
- AAC-ELD (enhanced low delay AAC)
- HE-AAC (high efficiency AAC, uses Spectral Band Replication)
- HE-AACv2 (high efficiency AAC v2, uses Spectral Band Replication + Parametric Stereo)
- xHE-AAC (extended high efficiency AAC (kinda), uses USAC (Unified Speech & Audio Coding))

AAC is even used as a Bluetooth audio codec for encoding audio streams & sending them to a Bluetooth audio device. Encoding & even decoding some of the above formats can prove to be difficult, so it is worth exploring each codec individually.

## Format Breakdown

Let's explore each codec individually.

### AAC-LC

While AAC-LC was introduced alongside two higher complexity profiles (AAC Main & AAC-SSR), AAC-LC has seen much more widespread adoption through various distribution mediums for video (often paired with AVC video) & audio alike. AAC-LC is ubiquitous within the Apple ecosystem & was (& still is) used on YouTube before their switch to primarily using Opus. Encoding AAC-LC can be done with relative ease, accessible through nearly every encoder in the "Encoders" section.

### AAC-LD & AAC-ELD

AAC-LD & AAC-ELD are both designed to transmit audio in instances where latency is very important. Both are far more efficient than previous low-latency audio coding offerings. Over AAC-LD, AAC-ELD offers better audio quality through Spectral Band Replication, lower latency, & a greater quality range with a lower bitrate minimum & higher maximum.

### HE-AAC

High Efficiency AAC introduces Spectral Band Replication (SBR) to the AAC specification for the purpose of higher quality audio at lower bitrates. SBR is an encoding technique that allows the decoder to reconstruct higher frequencies from an audio signal given lower frequencies & data that informs the decoder about information in the higher frequencies, allowing them to be effectively restored from this helper data. In short, lower frequencies are encoded with extra detail incorporated to allow the reconstruction of higher frequency information in an audio signal. This feature alone allows HE-AAC to be much more efficient than AAC-LC at lower bitrates; the gap closes substantially at higher bitrates, however.

### HE-AACv2

High Efficiency AAC v2 introduces Parametric Stereo (PS), which further increases audio quality with an emphasis on lower bitrates. PS uses a mono signal downmixed from a multichannel stereo input alongside information about the spatial properties of the stereo input to allow the decoder to reconstruct a left & right channel using salient spatial data from the mono signal. HE-AACv2 combine PS with SBR for greater efficiency gains over HE-AAC & AAC-LC, although again the gap closes at higher bitrates.

### xHE-AAC

Extended High Efficiency AAC is actually slightly different from xHE-AAC. While Extended High Efficiency AAC specifically includes all of HE-AACv2's coding techniques as well as compression techniques from the USAC specification, the Extended High Efficiency AAC profile was designed in such a manner that building an encoder for the format would allow it to be perfectly backwards compatible with past variations of AAC. xHE-AAC is a codec that combines tho Extended High Efficiency AAC profile with further USAC coding techniques, specifically within the *MPEG-D DRC Loudness Control Profile*. For all intents and purposes, when someone refers to "USAC audio," they probably mean xHE-AAC. xHE-AAC further extends performance at lower bitrates compared to past variants of AAC. USAC's specialty & purpose was to create an audio codec that didn't compromise music performance for speech & vice versa, but rather automatically tuned its coding technique selection to perform the best on any given source.

## Encoders
There are a number of ways to encode each format, which I'll outline below.

### FDK-AAC
FDK-AAC is a high quality source available AAC encoder by [Fraunhofer IIS](https://en.wikipedia.org/wiki/Fraunhofer_Society). It was initially included in Android, and issues regarding the legality of its distribution have arisen since its inception. Its license doesn't grant the user rights to the patented technologies used in the source code & therefore restricts its use, but this topic is still debated. Debian does not consider FDK-AAC free software, while Red Hat does. The Free Software Foundation remains relatively neutral, stating that the tool should be used with caution & patents always loom over FOSS programs even if these patents don't explicitly exist to threaten these tools yet.

Another similar tool, FhG-AAC, performs similarly to FDK-AAC but with greater precision as it performs floating point operations. It can be used through the proprietary Windows media player Winamp.

FDK-AAC can encode the following formats:
`AAC-LC AAC-LD AAC-ELD HE-AAC HE-AACv2`

### CoreAudio on macOS
If you're on a Mac, you can encode using Apple's proprietary CoreAudio framework. CoreAudio supports a number of formats including its own container (.caf/.caff). CoreAudio's CLI utility can be called using `afconvert`. Running `afconvert -h` will allow you to see the help. Specifying a filetype & format is required when using `afconvert`. The qaac encoder can be used through CoreAudio, & is known for its high quality output; Apple's AAC encoding is considered the highest quality compared to competing encoders for the supported formats.

Using this tool, we can encode the following formats:
`AAC-LC HE-AAC HE-AACv2`

### FFmpeg AAC
FFmpeg's native AAC encoder is known for being completely free & open source, licensed under the GNU General Public License (or LGPL, depending on how FFmpeg is configured). If you want a completely FOSS solution for encoding AAC, FFmpeg AAC is one of the only places you'll find this. It is not known for being particularly feature rich or high quality & doesn't support the entire profile of the AAC variants it can encode, but it gets the job done in most scenarios.

Using FFmpeg AAC, we can encode the following formats:
`AAC-LC AAC-LD HE-AAC`

### FAAC
FAAC is an old AAC encoder, name meaning Freeware Advanced Audio Coder. It is one of the lower quality options, & isn't recommended for general use. It only supports `AAC-LC`.

### Nero AAC
The discontinued Nero AAC audio coder had its last release in 2010. The developer of FAAC worked on Nero AAC, & the Nero AAC encoder & decoder are proprietary. Nero AAC was known to produce decent quality output while it was maintained, although development has since stalled.

Nero AAC can encode the following formats:
`AAC-LC, HE-AAC, HE-AACv2`

### Exhale

Exhale is the only encoder on this list capable of encoding xHE-AAC audio. While it does not excel at this task compared to proprietary competition, there isn't really a straightforward way to encode xHE-AAC outside of using exhale on most platforms right now. Given that fact, it is the only xHE-AAC encoder many can consider using due to the lack of real competition. It can encode Extended HE-AAC audio with or without eSBR, although encoding using eSBR produces higher quality results.

`exhale` can encode the following formats:
`xHE-AAC`

## Conclusion

Alternatives to AAC