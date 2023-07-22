---
title: aomenc
sidebar_position: 3
---

# aomenc
aomenc or **libaom** is a command line application for encoding AV1 written in C and Assembly developed by AOMedia, which is also the reference encoder for AV1.

&nbsp;&nbsp;

## Choosing forks
Mainline aomenc is unfortunately not good, as it suffers from bad defaults, heavy focus on PSNR which reduces its psycho-visual capabilities, clickbait (or should I call, "usebait") settings that does X instead of Y, among others. Fortunately two forks were created to combat these, first there's [aom-av1-psy](https://github.com/BlueSwordM/aom-av1-psy) which was created by BlueSwordM. But it is no longer maintained as of 13th January 2023, another fork called [aom-av1-lavish](https://github.com/Clybius/aom-av1-lavish) was then created off of it by Clybius to continue on the legacy.

These forks fix up the horrid decisions made by the original AOM devs and most importantly introduce new parameters and tunes to help fine tune (haha get it? sorry ill see myself out) the encoder more. TL;DR use [aom-av1-lavish](https://github.com/Clybius/aom-av1-lavish)

&nbsp;&nbsp;

## FFmpeg

aomenc is available in FFmpeg via ``libaom-av1``, check if you have it by running ``ffmpeg -h encoder=libaom-av1``. You can input non-FFmpeg standard aomenc parameters via ``-aom-params``.
:::warning Mainline aomenc
Since FFmpeg encoder libraries come as the most default, barebones as possible (Therefore mainline aomenc), it is not recommended to use it. Unless you build it yourself.
:::
&nbsp;&nbsp;

## Installation

### Microsoft Windows
**The Easy Way:** Download the pre-built versions, which can be found below:

[Skylake build](https://cdn.discordapp.com/attachments/1042536514783023124/1069212358989336626/aomenc-skylake.7z)

[Zen 2 build](https://cdn.discordapp.com/attachments/1042536514783023124/1069198775899398234/aomenc.7z)
:::caution Updating and compiling
Join the [AV1 Discord server](https://discord.gg/vpREHAvYvh) and head to #community-builds for updated versions, you can opt to compile it yourself with those custom (Butteraugli, VMAF) tunes but its a huge PITA on Windows.
:::

**The Compiling Route:**

Tools needed: Visual Studio (Any), Git, CMake, nasm (or yasm for 32bit)

``` bash
git clone https://github.com/Clybius/aom-av1-lavish -b Endless_Merging
cd aom-av1-lavish && mkdir -p aom_build && cd aom_build
cmake .. -DBUILD_SHARED_LIBS=0 -DENABLE_DOCS=0 -DCONFIG_TUNE_BUTTERAUGLI=0 -DCONFIG_TUNE_VMAF=0 -DCONFIG_AV1_DECODER=0 -DENABLE_TESTS=0 -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-flto -O3 -march=native" -DCMAKE_C_FLAGS="-flto -O3 -march=native -pipe -fno-plt" -DCMAKE_LD_FLAGS="-flto -O3 -march=native"
cmake --build . -j 16
```

Built files should be in the "Debug" folder

&nbsp;&nbsp;
### MacOS

macOS is very similar to Linux. Note that some commands may have to be run with `sudo`, which I won't explicitly include for security reasons.

**Homebrew**

Installing the Homebrew package manager is a well documented process at this point:
```zsh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
Installing mainline libaom is as simple as running the following:

```zsh
brew update && brew upgrade
brew install aom
```

FFmpeg can also be installed via brew.

**Building From Source**

If you want aom-av1-lavish instead of mainline, you'll have to compile from source. Things are very similar to Linux, with a few oddities:

- macOS sometimes doesn't have a `/usr/local/bin` by default. You can fix this by doing `mkdir /usr/local/bin`.
- Homebrew installs *everything* in its own directory structure. If you're building things from source that rely on libraries from libvmaf, libjxl, etc, make sure to copy them from `/opt/homebrew/lib` to `/usr/local/lib`. Finding them is a matter of `ls | grep "keyword"` & copying what looks reasonable to be associated with the tool you're using.
- Building most things from source will have instructions for \*nix which work for both macOS & Linux. Even if it says Linux, there's a good chance it'll work on macOS as well, & it is always worth trying Linux build instructions on Mac. aom-av1-lavish requires some additional steps, though.

If you want to make the most out of your hardware & eke out every last drop of quality, it may be worth building aom-av1-lavish from source. The first step is to clone it from the Endless Merging branch, which contains all of the latest lavish improvements:
```zsh
git clone https://github.com/Clybius/aom-av1-lavish -b Endless_Merging
cd aom-av1-lavish
```
Now, you need to make some manual changes to the source code until [this commit](https://github.com/Clybius/aom-av1-lavish/pull/1/files) is merged to fix build errors.
- Add the line `#include "aq_variance.h"` at line 19 in `av1/encoder/encodeframe_utils.c`
- Comment out line 2546 in `av1/encoder/speed_features.c`. This line is `const int qindex_thresh_cdef_sf_s1_s3_l2[2] = { 92, 48 };` & becomes `// const int qindex_thresh_cdef_sf_s1_s3_l2[2] = { 92, 48 };`.

Now you can continue to build according to the Linux instructions below. Obviously you'll need cmake, which you can install with homebrew along with any other tools. While still in the `aom-av1-lavish` directory:
```zsh
mkdir -p aom_build && cd aom_build
cmake .. -DBUILD_SHARED_LIBS=0 -DENABLE_DOCS=0 -DCONFIG_TUNE_BUTTERAUGLI=0 -DCONFIG_TUNE_VMAF=0 -DCONFIG_AV1_DECODER=0 -DENABLE_TESTS=0 -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-flto -O3 -march=native" -DCMAKE_C_FLAGS="-flto -O3 -march=native -pipe -fno-plt" -DCMAKE_LD_FLAGS="-flto -O3 -march=native"
make -j$(nproc)
# This may need to be run as root. If it doesn't work properly, you can always copy the binary into /usr/local/bin manually:
make install
```

Now you can run `aomenc --help | grep "AOMedia" -C 3` to see if lavish installed. If you're getting the same output as above, you may need to copy the `aomenc` executable to `/opt/local/bin`, `/usr/local/bin`, & `/opt/homebrew/bin` if you already installed mainline aomenc. Running the version info command again, the correct output should look something like this:
```zsh
% aomenc --help | grep AOMedia -C 3

Included encoders:

    av1    - AOMedia Project AV1 Encoder Psy v3.6.0 (default)

        Use --codec to switch to a non-default encoder.
```

Notice how it says `AOMedia Project AV1 Encoder Psy` instead of `AOMedia Project AV1 Encoder`. You should be all set after this to start using aom-av1-lavish.

&nbsp;&nbsp;
### Linux

You know what to do, so I'll just list the things you'll need: ``Vapoursynth, Av1an, FFmpeg, mkvtoolnix, Git, Perl, CMake, Ninja, Meson, Nasm, Rust (USE RUSTUP ON DEBIAN/UBUNTU), Highway (libhwy)``

**Compiling aom-av1-lavish (Basic, recommended for beginners)**
``` bash
git clone https://github.com/Clybius/aom-av1-lavish -b Endless_Merging
cd aom-av1-lavish && mkdir -p aom_build && cd aom_build
cmake .. -DBUILD_SHARED_LIBS=0 -DENABLE_DOCS=0 -DCONFIG_TUNE_BUTTERAUGLI=0 -DCONFIG_TUNE_VMAF=0 -DCONFIG_AV1_DECODER=0 -DENABLE_TESTS=0 -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-flto -O3 -march=native" -DCMAKE_C_FLAGS="-flto -O3 -march=native -pipe -fno-plt" -DCMAKE_LD_FLAGS="-flto -O3 -march=native"
make -j$(nproc)
sudo make install
```


**Compiling aom-av1-lavish (Full)**
1. VMAF shenanigans
``` bash
git clone https://github.com/Netflix/vmaf
cd vmaf/libvmaf && mkdir build && cd build
meson .. --buildtype=release --default-library=both -Db_lto=true -Dc_args="-march=native" -Dcpp_args="-march=native" && ninja
sudo ninja install
```

2. Copy VMAF models (Assuming user cloned in $HOME)
```bash 
sudo cp -r /home/$USER/vmaf/model /usr/share
```

3. Install libjxl libraries
``` bash
git clone https://github.com/libjxl/libjxl && cd libjxl && chmod +x deps.sh && ./deps.sh
mkdir build && cd build
cmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-O3 -march=native" -DCMAKE_C_FLAGS="-O3 -march=native" -DJPEGXL_ENABLE_PLUGINS=ON -DJPEGXL_ENABLE_DEVTOOLS=ON -DJPEGXL_WARNINGS_AS_ERRORS=OFF -DJPEGXL_ENABLE_SJPEG=OFF  .. && cmake --build . -- -j$(nproc)
sudo make install
```

4. Install aom-av1-lavish
``` bash
git clone https://github.com/Clybius/aom-av1-lavish -b Endless_Merging
cd aom-av1-lavish && mkdir -p aom_build && cd aom_build
cmake .. -DBUILD_SHARED_LIBS=0 -DENABLE_DOCS=0 -DCONFIG_TUNE_BUTTERAUGLI=1 -DCONFIG_TUNE_VMAF=1 -DCONFIG_AV1_DECODER=0 -DENABLE_TESTS=0 -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-flto -O3 -march=native" -DCMAKE_C_FLAGS="-flto -O3 -march=native -pipe -fno-plt" -DCMAKE_LD_FLAGS="-flto -O3 -march=native"
make -j$(nproc)
sudo make install
```


:::info Branches
``Endless_Butter`` used to be bleeding edge but now it's been taken over by ``Endless_Merging``.
:::
&nbsp;&nbsp;

## Usage

### AV1 Encoding
the

### AVIF Encoding

Using aomenc through avifenc is widely considered to be the best way to encode AVIF images, as SVT-AV1 only supports 4:2:0 chroma subsampling, rav1e isn't fast enough for still images, & the libaom team have put more effort into intra coding than the teams responsible for producing the other prominent open source AV1 encoders. A sample command for encoding AVIF looks like this:

`avifenc -c aom -s 4 -j 8 -d 10 -y 444 --min 1 --max 63 -a end-usage=q -a cq-level=16 -a tune=ssim [input] output.avif`

Where:

- `-c aom` is the encoder
- `-s 4` is the speed. Speeds 4 & below offer the best compression quality at the expense of longer encode times.
- `-j 8` is the number of threads the encoder is allowed to use. Increasing this past 12 will sometimes hurt encode times, as AVIF encoding via aomenc doesn't parallelize perfectly. Test using a speed benchmark to verify which value works best for you.
- `-d 10` is the bit depth. Specifying a value below 10 isn't recommended, as it will hurt coding efficiency even with an 8-bit source image.
- `-y 444` is the chroma subsampling mode. 4:4:4 chroma subsampling tends to provide better compression than 4:2:0 with AVIF, though on some images 4:2:0 chroma subsampling might be the better choice.
- `cq-level=16` is how you specify quality. Lower values correspond to higher quality & filesize, while higher values mean a smaller, lower-quality output is desired. This is preceded by `-a` because it is an aomenc option, not an avifenc one.
- `tune=ssim` is how the encoder handles RDO (rate-distortion optimization). This may be redundant with the default aomenc parameters, but specifying doesn't hurt to avoid an unintended change if a default is modified sometime in the future.