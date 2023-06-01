---
label: eac3to
order: 195
date: 2023-05-09
---

# eac3to

eac3to is a command line tool written by madshi to mostly work with audios (conversion) and raw, unencrypted Blu-rays (BDMV).

:::info Compatibility
This is a Windows only software, although usage with Wine is possible.
:::

:::warning Avoid using when possible
There is absolutely no reason whatsoever to use this software unless required by paleolithic [private trackers](https://wiki.installgentoo.com/wiki/Private_trackers), due to a bajillion dependencies needed that aren't bundled with the download itself. Use something like FFmpeg instead.
:::

&nbsp;&nbsp;

## Installation

- Download from [VideoHelp](https://www.videohelp.com/software/eac3to), drag and drop into your designated folder, add to PATH when necessary.

&nbsp;&nbsp;

## Usage

&nbsp;&nbsp;

### Audio conversion

Examples:
```bash
eac3to source.pcm destination.flac
```
(Convert PCM audio to FLAC)

```bash
eac3to source.thd destination.flac destination.ac3
```
(Convert TrueHD to FLAC while also extracting the AC-3 compatibility layer)


### Get BDMV info

```bash
eac3to Movie.2024.Bluray/BDMV
```

### Demux

```bash
eac3to Movie.2024.Bluray/BDMV -demux
```
