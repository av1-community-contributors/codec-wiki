---
title: Terminology
sidebar_position: 2
---

# Terminology
When learning about encoding technology, it is important to understand the vast terminology that is often used to describe concepts that are often not very complex to understand.

## Bitstream
A *bitstream* or *bit stream* is a media file, the kind that is played in a media player. It consists of a [container](#container) wrapping multiple [elementary streams](#elementary-stream)

## Elementary stream
An elementary stream is an audio, video, or subtitle track. Basically, it's the compressed data you want to [mux](#muxing) into the container.

## Muxing
Putting elementary streams into a container, which preserves them without making any changes to the data.

## Codec
A codec (**co**der/**dec**oder) is the piece of code that actually encodes the data you put in. It takes as input and produces as output an elementary stream. More information is provided [in the prologue](../introduction/prologue.md/#what-is-a-codec).

## Filter
A filter is a piece of code you can apply to the data to make something about it different, for instance sharpening, removing artifacts, shakiness, denoising, scaling, overlay, etc.

## Muxer/Demuxer
The pieces of code that [mux](#muxing) or do the reverse, getting elementary streams from the container.

## Bitstream filter
A bitstream filter is a filter that is directly applied to the [bitstream](#bitstream) in order to change something about the container, for instance, convert frame types, or corrupt some packets.

## Container
A container is a format for putting one or more elementary streams into one file, which is then called a [bitstream](#bitstream).

A video container is a digital file format that holds video and audio data, as well as additional information such as subtitles, metadata, and chapter markers. It acts as a "wrapper" that packages all these elements into a single file that can be played on various devices and software platforms. Think of it like a container you might use to transport goods - the video and audio data are like the items being transported, while the container itself provides a structure and organization for the contents.

Some kinds of containers:

#### MP4 / M4V

This is likely the most common container you've encountered, & has near universal compatibility. Has a limited maximum amount of streams. The supported video codecs are [H.264](../video/AVC.md), [H.265](../video/HEVC.md), [H.266](../video/VVC.md), DivX, Xvid, [VP9](../video/VP9.md) (Unofficial, hacky), and [AV1](../video/AV1.md) (Unofficial, hacky). For audio codecs it's many of the various flavors of [AAC](../audio/AAC.md), [MP3](../audio/MP3.md), [FLAC](../audio/flac.md) (Unofficial), [Opus](../audio/opus.md) (Unofficial, hacky). For subtitles only MPEG-4 Timed Text (TTXT) is supported.

The best tool to work with this container is MP4Box, but FFmpeg also works.

#### MOV

Similar to MP4, but less supported. Made with Apple Quicktime in mind, supports ProRes.

#### MKV / MKA / MKS / MK3D

Also known as Matroska, allows an unlimited amount of video/audio/subtitle streams and any codec that probably still exists in Area 51, you can put literally anything in there and it won't even care, MPEG-2/DivX/H.266/Theora/Thor/RealVideo/MJPEG/AVS3/AMR-WB, you name it. All around best container for working with if you have the choice.

#### WebM

A container made with web streaming in mind. WebM is stripped-down MKV that only allows free & open source codecs such as VP8, VP9 & AV1 for video, Vorbis & Opus for audio, and [WebVTT](../subtitles/webvtt.md) for subtitles.

## Transcoding
Taking an elementary stream & converting it to another format, lossless or lossy, using an encoder of some kind. For example, if I convert a lossless [FFV1](../video/FFV1.md) video to lossy AV1 using an encoder, let's say [rav1e](../encoders/rav1e.md), I have *transcoded* this lossless video to AV1. Transcoding doesn't have anything to do with the container.

## RDO
RDO, or Rate-Distortion Optimization, is a technique used to find the best trade-off between the bit rate & the quality of lossily encoded content. RDO can be metric-based, optimizing to score well on metrics like [PSNR](../metrics/PSNR.md) or [SSIM](../metrics/SSIM.md).

## Perceputal / Psychovisual / Psychoacoustic
"Psychovisual quality" (for videos), "Psychoacoustic quality" (for audio), or "perceptual quality" is a term used to describe the perception of quality of a distorted video by the human visual system. The goal of any multimedia codec is to minimize data while maintaining perceived quality, and optimizing around human perception theoretically yields the best performance even within a limited set of coding techniques (like when using an older codec). Our model of human perception continues to evolve, and there is currently no such thing as a perfect model of the human visual system available. The current best available options in the form of metrics appear to be [SSIMULACRA2](../metrics/SSIMULACRA2.md) & [Butteraugli](../metrics/butteraugli.md).