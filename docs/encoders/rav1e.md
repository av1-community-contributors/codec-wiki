---
label: rav1e
sidebar_position: 5
date: 2023-05-09
---

# rav1e

rav1e is a command line application for encoding AV1 written in Rust & Assembly co-developed by Xiph.org and Mozilla.

rav1e is available in FFmpeg via `librav1e`. You can check if you have it by running `ffmpeg -h encoder=librav1e`. You can input non-FFmpeg standard rav1e parameters via `-rav1e-params`. Please keep in mind that unless you build FFmpeg yourself, you are using the most vanilla version of rav1e.

&nbsp;&nbsp;

## Building

### Linux/macOS

Pre-built binaries can be found in the [releases page](https://github.com/xiph/rav1e/releases) on Github. rav1e can also be installed with Cargo by running `cargo install rav1e`. 

:::caution Warning
For stability & a proper version number, please reset the source to the correct release commit. In the releases page, click the icon to the right of the release tag & copy the commit in the url bar. Then, in the cloned rav1e directory, `git reset --hard [commit hash]`
:::

Here are instructions for resetting to release 0.6.6. Omit the git reset command to use the latest git, if you have a *specific* reason to use the latest git instead of an official tagged release.

```zsh
git clone https://github.com/xiph/rav1e.git
cd rav1e
git reset --hard 7c9db10494c2fffa98a572027d756e55bf754036
RUSTFLAGS="-C target-cpu=native" cargo build --release
```

When done, the binary can be found in `/target/release`. You can then `cp /target/release/rav1e /usr/local/bin` or wherever you desire the binary to go.

### Windows
```powershell
git clone https://github.com/xiph/rav1e.git
cd rav1e
git reset --hard 7c9db10494c2fffa98a572027d756e55bf754036
set RUSTFLAGS=-C target-cpu=native
cargo build --release
```
When done, the binary can be found in ``target/release``

**Installation with HDR10+ support**

rav1e currently has an [unmerged pull request](https://github.com/xiph/rav1e/pull/3000) by quietvoid, the person behind ``hdr10plus_tool`` and ``dovi_tool``. The PR adds a new parameter called ``--hdr10plus-json`` for HDR10+ JSON dynamic metadata input. To merge it locally, do the following:

```zsh
git clone https://github.com/xiph/rav1e.git
cd rav1e
git reset --hard [release commit]
git fetch origin pull/3000/head:HDR10+
```
now the patch should be applied, build as usual

### AV1

For AV1 encoding, rav1e has very sane defaults. It is very hard to go wrong with parameters if you modify as few as possible.

Basic usage:
```zsh
rav1e -i input.y4m -o output.ivf --quantizer 60 --photon-noise 8
```

Basic usage with FFmpeg piping, 10bit input:
```zsh
ffmpeg -i input.mkv -pix_fmt yuv420p10le -strict -2 -f yuv4mpegpipe - | rav1e - -o output.ivf --quantizer 80 --photon-noise 8
```

Basic usage with FFmpeg piping, 10bit input and assuming 4K:
```zsh
ffmpeg -i input.mkv -pix_fmt yuv420p10le -strict -2 -f yuv4mpegpipe - | rav1e - -o output.ivf --quantizer 68 --tile-columns 2 --tile-rows 1 --photon-noise 8
```

1. Use 2x1 tiles or ``tile-columns 2`` and ``tile-rows 1`` for 4K (2160p) encoding, this will help with both encoding and decoding.