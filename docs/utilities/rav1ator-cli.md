---
label: rav1ator-cli
sidebar_position: 4
templating: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# rAV1ator CLI Edition

rAV1ator CLI Edition, or just `rav1ator-cli`, is a TUI tool that provides an interactive command line interface for encoding videos with Av1an using various different encoders including [rav1e](../encoders/rav1e.md), [aomenc](../encoders/aomenc.md), [SVT-AV1](../encoders/SVT-AV1.md), [x265](../encoders/x265.md), and [x264](../encoders/x264.md).

rAV1ator CLI Edition can:

- Check if it is installed & up to date on its own without a package manager

- Download AVX2-optimized encoder binaries compiled with `-O3 -flto` in most cases & allow the user to install them with detailed instructions

- Encode with x264, x265, aomenc, SVT-AV1, or rav1e, set a speed preset, CRF/quality value, FFmpeg parameters, and encoder parameters

- Generate Av1an encoding commands with the user's chosen settings & run them to encode a provided input video to an MKV output.

- Encode from scratch, or resume a previous rav1ator-cli encode

- Rich interactivity featuring spinners, prompts, dropdowns, and the like

- Error checking with SHA256 hashes on the downloaded binaries for security & convenience

Overall, it aims to provide an easy way to encode videos on the command line with helpful visual feedback. The interactive prompts help users pick encoding settings without needing deep encoding knowledge.

## Installation

Installing rav1ator-cli on its own is as simple as running the following two commands:

```bash
curl -sOJ https://raw.githubusercontent.com/gianni-rosato/rav1ator-cli/main/rav1ator-cli && chmod +x rav1ator-cli
sudo cp rav1ator-cli /usr/local/bin
```

However, it has other dependencies that may need to be installed in addition to the script.

## Dependencies
These instructions are for Arch Linux specifically. Other distros should be very similar, and packages that are Arch-specific will be labelled. If you're on Ubuntu, you should see the relevant section of the [AV1 for Dummies](https://wiki.x266.mov/blog/av1-encoding-for-dummies) blog post on this site.

The first thing you should always do is update your system.

The first thing you'll want to do is install `yay` (Arch only) by running the following commands:
```bash
sudo pacman -S --needed base-devel git
git clone https://aur.archlinux.org/yay.git
cd yay && makepkg -si
```

Next, you'll want to install all of rav1ator-cli's dependencies. You can do that by doing:
```bash
yay -Sy rust ffmpeg python mkvtoolnix-cli vapoursynth gum l-smash vapoursynth-plugin-lsmashsource av1an ffms2
```

### Troubleshooting

- I've not tested if rAV1ator CLI's decision to run `ulimit -n 20000` right away actually works. If you get the mkvmerge "Open file error" on Linux, just run `ulimit -n 20000`
- If your encode features a grey screen flashing occaisonally in the output, create a lossless intermediary of your source with x264 `-qp 0`. This happens because of VC-1 decoding errors.
