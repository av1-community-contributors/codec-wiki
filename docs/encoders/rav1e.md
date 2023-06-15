---
label: rav1e
sidebar_position: 5
date: 2023-05-09
---

# rav1e

rav1e is a command line application for encoding AV1 written in Rust and Assembly joint-developed by Xiph.org and Mozilla.

&nbsp;&nbsp;

## FFmpeg

rav1e is available in FFmpeg via ``librav1e``, check if you have it by running ``ffmpeg -h encoder=librav1e``. You can input non-FFmpeg standard rav1e parameters via ``-rav1e-params``. Please keep in mind that unless you built FFmpeg yourself, you are using the most vanilla version of rav1e.

&nbsp;&nbsp;

## Installation

**Pre-built binary [Recommended]:**

- https://github.com/xiph/rav1e/releases

&nbsp;&nbsp;

:::caution
Compilation requires NASM
:::

**Compiling, via cargo:**

- ``cargo install rav1e``


**Compiling, manually (Linux/MacOS):**

```bash
git clone https://github.com/xiph/rav1e.git
cd rav1e
RUSTFLAGS="-C target-cpu=native" cargo build --release
```

**Compiling, manually (Windows):**

```bash
git clone https://github.com/xiph/rav1e.git
cd rav1e
set RUSTFLAGS=-C target-cpu=native
cargo build --release
```

When done, the binary can be found in ``target/release``

&nbsp;&nbsp;


&nbsp;&nbsp;

## Installation with HDR10+ support

rav1e currently have an [unmerged pull request](https://github.com/xiph/rav1e/pull/3000) none other by quietvoid, the person behind ``hdr10plus_tool`` and ``dovi_tool``. The PR adds a new parameter called ``--hdr10plus-json`` for HDR10+ JSON dynamic metadata input, to merge it locally do the following

```bash
git clone https://github.com/xiph/rav1e.git
cd rav1e
git fetch origin pull/3000/head:HDR10+
```
now the patch should be applied, build as usual

&nbsp;&nbsp;

## Usage

rav1e is made to "Just work", so you don't have to fiddle around with cargo cult settings, here are some examples

Basic usage:
```bash
rav1e -i input.y4m -o output.ivf --quantizer 60 --photon-noise 8
```

Basic usage with FFmpeg piping, 10bit input:
```bash
ffmpeg -i input.mkv -pix_fmt yuv420p10le -strict -2 -f yuv4mpegpipe - | rav1e - -o output.ivf --quantizer 80 --photon-noise 8
```

Basic usage with FFmpeg piping, 10bit input and assuming 4K:
```bash
ffmpeg -i input.mkv -pix_fmt yuv420p10le -strict -2 -f yuv4mpegpipe - | rav1e - -o output.ivf --quantizer 68 --tile-columns 2 --tile-rows 1 --photon-noise 8
```

&nbsp;&nbsp;

## Tips and tricks

1. Use 2x1 tiles or ``tile-columns 2`` and ``tile-rows 1`` for 4K (2160p) encoding, this will help with both encoding and decoding.