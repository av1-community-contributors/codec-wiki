---
title: Containers
---

# Containers

A video container is a digital file format that holds video and audio data, as well as additional information such as subtitles, metadata, and chapter markers. It acts as a "wrapper" that packages all these elements into a single file that can be played on various devices and software platforms. Think of it like a container you might use to transport goods - the video and audio data are like the items being transported, while the container itself provides a structure and organization for the contents.

&nbsp;&nbsp;

## MP4 / M4V

The most common container out there on the internet and supported almost universally as long as it contains the right codecs, has limited maximum amount of streams. The supported video codecs are H.264, H.265, H.266, DivX, Xvid, VP9 (Unofficial, hacky), and AV1 (Unofficial, hacky). For audio codecs it's AAC, USAC (xHE-AAC), MP3, FLAC (Unofficial), Opus (Unofficial, hacky). For subtitles only MPEG-4 Timed Text (TTXT) is supported.

The best tool to work with this container is MP4Box, but FFmpeg also works.

&nbsp;&nbsp;

## MOV

Pretty much the same as MP4 but less supported in general and was made in mind for Apple Quicktime, also supports ProRes.

&nbsp;&nbsp;

## MKV / MKA / MKS / MK3D

Very common among the media piracy scene. Also known as Matroska, allows an unlimited amount of video/audio/subtitle streams and any codec that probably still exists in Area 51, you can put literally anything in there and it won't even care, MPEG-2/DivX/H.266/Theora/Thor/RealVideo/MJPEG/AVS3/AMR-WB, you name it. All around best container for working with.

&nbsp;&nbsp;

## WebM

A container made with web streaming in mind, basically stripped down MKV that only allows FOSS codecs such as VP8/VP9/AV1 for video, Vorbis/Opus for audio, and WebVTT for subtitles.
