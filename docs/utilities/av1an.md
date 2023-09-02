---
label: Av1an
sidebar_position: 1
templating: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Av1an

<picture>
    <source srcset="https://raw.githubusercontent.com/av1-community-contributors/av1-wiki.github.io/main/static/img/av1an_96_workers.avif" type="image/avif" />
    <img src="https://autumn.revolt.chat/attachments/K3OhOCAy9bkUCkImek_q3-t6q3zctbn9SbWW-_RI19/av1an_96_workers.webp" alt="Av1an with 96 workers" width="1703" height="958" />
</picture>

Av1an is a video encoding framework. It can increase your encoding speed and improve cpu utilization by running multiple encoder processes in parallel. Target quality, VMAF plotting, and more, available to take advantage for video encoding.

&nbsp;&nbsp;
## Prerequisites
Since Av1an is just a tool that helps with parallelization, you'll need to have the following installed for the entire thing to work: 
- Rust
- Python (Required for [Vapoursynth](../filtering/vapoursynth.md), currently needs 3.11, this may change in the future so consult from [their website](http://www.vapoursynth.com/doc/installation.html))
- FFmpeg
- [MKVToolNix](../utilities/MKVToolNix.md) (mkvmerge)
- Vapoursynth
- L-SMASH (Vapoursynth plugin)
- FFMS2 (Vapoursynth plugin, optional)
- [VMAF](../metrics/VMAF.md) (For target VMAF, optional)
- Any of the supported encoders ([aomenc](../encoders/aomenc.md), [rav1e](../encoders/rav1e.md), [SVT-AV1](../encoders/SVT-AV1.md), [vpxenc](../encoders/vpxenc.md), [x264](../encoders/x264.md), [x265](../encoders/x265.md))

&nbsp;&nbsp;
## Installation
### Microsoft Windows
**GUI:**
1. Install [Nmkoder](../utilities/nmkoder.md) which is a GUI front-end to av1an with all dependencies installed
2. You're done!

:::danger Outdated Software
Since Nmkoder already ships everything by default and it's last release was 29th March 2022. You need to manually update EVERYTHING (``av1an.exe``, ``aomenc.exe``, etc) to get performance optimizations, better speeds, and more settings. Missing out on updates will result in your encodes being sub-optimal.
:::


**Pre-built binary, bleeding edge [Recommended]:**

- Download Av1an from [here](https://github.com/master-of-zen/Av1an/releases), select "Latest" and click the "Assets" dropdown. Put it in [PATH](https://www.maketecheasier.com/what-is-the-windows-path)

&nbsp;&nbsp;
### MacOS

To be filled.

&nbsp;&nbsp;
### Linux

**The Easy Way:** 

Install [rAV1ator](../utilities/rAV1ator.md), a GUI frontend for Av1an & the rust-based rav1e encoder.
:::note
Keep in mind Aviator only ships with **SVT-AV1** and rAV1ator with **rav1e** instead of Aomenc/AOM-AV1.
:::
&nbsp;&nbsp;


**The compiling route:**

Prerequisites: 
- Vapoursynth
- FFmpeg
- MKVToolNix (mkvmerge)
- Git
- Perl
- Nasm
- Rust (Use rustup on Debian/Ubuntu, as the package manager version is horribly outdated)
- Highway (libhwy)

```bash
git clone https://github.com/master-of-zen/Av1an.git
cd Av1an
RUSTFLAGS="-C target-cpu=native" cargo build --release
```

after done, the binary will be located in ``target/release``, copy it to somewhere like ``/usr/bin`` or ``/usr/local/bin``

&nbsp;&nbsp;

### Docker
The following examples assume the file you want to encode is in your current working directory.

<Tabs>
  <TabItem value="windows" label="Windows" default>

   ```bash
   docker run --privileged -v "$(pwd):/videos" --user $(id -u):$(id -g) -it --rm masterofzen/av1an:latest -i S01E01.mkv {options}
   ```
  </TabItem>
  <TabItem value="linux" label="Linux">

   ```bash
   docker run --privileged -v "${PWD}:/videos" -it --rm masterofzen/av1an:latest -i S01E01.mkv {options}
   ```
  </TabItem>
  <TabItem value="build" label="Manual Build">

   ```bash
   docker build -t "av1an" .
   ```
   Run in the root directory of the repository. The dependencies will automatically be installed into the image, no manual installations necessary.
  </TabItem>
</Tabs>


&nbsp;&nbsp;

:::info
To specify a different directory to use you would replace $(pwd) with the directory

```bash
docker run --privileged -v "/c/Users/masterofzen/Videos":/videos --user $(id -u):$(id -g) -it --rm masterofzen/av1an:latest -i S01E01.mkv {options}
```

The ``--user`` flag is required on Linux to avoid permission issues with the docker container not being able to write to the location, if you get permission issues ensure your user has access to the folder that you are using to encode.
:::

&nbsp;&nbsp;

## Troubleshooting

1. mkvmerge "Open file error" on Linux - Run ``ulimit -n 20000``
2. Gray screen flashing for a single frame in output - Create a lossless intermediary with x264 ``-qp 0``
