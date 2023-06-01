---
title: aomenc
---

# aomenc
aomenc or **libaom** is a command line application for encoding AV1 written in C and Assembly developed by AOMedia, which is also the reference encoder for AV1.

&nbsp;&nbsp;

## Choosing forks
Mainline aomenc is unfortunately not good, as it suffers from bad defaults, heavy focus on PSNR which reduces its psycho-visual capabilities, clickbait (or should I call, "usebait") settings that does X instead of Y, among others. Fortunately two forks were created to combat these, first there's [aom-av1-psy](https://github.com/BlueSwordM/aom-av1-psy) which was created by BlueSwordM. But it is no longer maintained as of 13th January 2023, another fork called [aom-av1-lavish](https://github.com/Clybius/aom-av1-lavish) was then created off of it by Clybius to continue on the legacy.

These forks fix up the horrid decisions made by the original AOM devs and most importantly introduce new parameters and tunes to help fine tune (haha get it? sorry ill see myself out) the encoder more. TL;DR use [aom-av1-lavish](https://github.com/Clybius/aom-av1-lavish)

&nbsp;&nbsp;

## FFmpeg

!!! warning Mainline aomenc
Since FFmpeg encoder libraries come as the most default, barebones as possible (Therefore mainline aomenc), it is not recommended to use it. Unless you build it yourself.
!!!

aomenc is available in FFmpeg via ``libaom-av1``, check if you have it by running ``ffmpeg -h encoder=libaom-av1`` which would display the following output (As of 2023-05-09):
==- CLI output
```bash
Encoder libaom-av1 [libaom AV1]:
    General capabilities: dr1 delay threads 
    Threading capabilities: other
    Supported pixel formats: yuv420p yuv422p yuv444p gbrp yuv420p10le yuv422p10le yuv444p10le yuv420p12le yuv422p12le yuv444p12le gbrp10le gbrp12le gray gray10le gray12le
libaom-av1 encoder AVOptions:
  -cpu-used          <int>        E..V....... Quality/Speed ratio modifier (from 0 to 8) (default 1)
  -auto-alt-ref      <int>        E..V....... Enable use of alternate reference frames (2-pass only) (from -1 to 2) (default -1)
  -lag-in-frames     <int>        E..V....... Number of frames to look ahead at for alternate reference frame selection (from -1 to INT_MAX) (default -1)
  -arnr-max-frames   <int>        E..V....... altref noise reduction max frame count (from -1 to INT_MAX) (default -1)
  -arnr-strength     <int>        E..V....... altref noise reduction filter strength (from -1 to 6) (default -1)
  -aq-mode           <int>        E..V....... adaptive quantization mode (from -1 to 4) (default -1)
     none            0            E..V....... Aq not used
     variance        1            E..V....... Variance based Aq
     complexity      2            E..V....... Complexity based Aq
     cyclic          3            E..V....... Cyclic Refresh Aq
  -error-resilience  <flags>      E..V....... Error resilience configuration (default 0)
     default                      E..V....... Improve resiliency against losses of whole frames
  -crf               <int>        E..V....... Select the quality for constant quality mode (from -1 to 63) (default -1)
  -static-thresh     <int>        E..V....... A change threshold on blocks below which they will be skipped by the encoder (from 0 to INT_MAX) (default 0)
  -drop-threshold    <int>        E..V....... Frame drop threshold (from INT_MIN to INT_MAX) (default 0)
  -denoise-noise-level <int>        E..V....... Amount of noise to be removed (from -1 to INT_MAX) (default -1)
  -denoise-block-size <int>        E..V....... Denoise block size  (from -1 to INT_MAX) (default -1)
  -undershoot-pct    <int>        E..V....... Datarate undershoot (min) target (%) (from -1 to 100) (default -1)
  -overshoot-pct     <int>        E..V....... Datarate overshoot (max) target (%) (from -1 to 1000) (default -1)
  -minsection-pct    <int>        E..V....... GOP min bitrate (% of target) (from -1 to 100) (default -1)
  -maxsection-pct    <int>        E..V....... GOP max bitrate (% of target) (from -1 to 5000) (default -1)
  -frame-parallel    <boolean>    E..V....... Enable frame parallel decodability features (default auto)
  -tiles             <image_size> E..V....... Tile columns x rows
  -tile-columns      <int>        E..V....... Log2 of number of tile columns to use (from -1 to 6) (default -1)
  -tile-rows         <int>        E..V....... Log2 of number of tile rows to use (from -1 to 6) (default -1)
  -row-mt            <boolean>    E..V....... Enable row based multi-threading (default auto)
  -enable-cdef       <boolean>    E..V....... Enable CDEF filtering (default auto)
  -enable-global-motion <boolean>    E..V....... Enable global motion (default auto)
  -enable-intrabc    <boolean>    E..V....... Enable intra block copy prediction mode (default auto)
  -enable-restoration <boolean>    E..V....... Enable Loop Restoration filtering (default auto)
  -usage             <int>        E..V....... Quality and compression efficiency vs speed trade-off (from 0 to INT_MAX) (default good)
     good            0            E..V....... Good quality
     realtime        1            E..V....... Realtime encoding
     allintra        2            E..V....... All Intra encoding
  -tune              <int>        E..V....... The metric that the encoder tunes for. Automatically chosen by the encoder by default (from -1 to 1) (default -1)
     psnr            0            E..V.......
     ssim            1            E..V.......
  -still-picture     <boolean>    E..V....... Encode in single frame mode (typically used for still AVIF images). (default false)
  -enable-rect-partitions <boolean>    E..V....... Enable rectangular partitions (default auto)
  -enable-1to4-partitions <boolean>    E..V....... Enable 1:4/4:1 partitions (default auto)
  -enable-ab-partitions <boolean>    E..V....... Enable ab shape partitions (default auto)
  -enable-angle-delta <boolean>    E..V....... Enable angle delta intra prediction (default auto)
  -enable-cfl-intra  <boolean>    E..V....... Enable chroma predicted from luma intra prediction (default auto)
  -enable-filter-intra <boolean>    E..V....... Enable filter intra predictor (default auto)
  -enable-intra-edge-filter <boolean>    E..V....... Enable intra edge filter (default auto)
  -enable-smooth-intra <boolean>    E..V....... Enable smooth intra prediction mode (default auto)
  -enable-paeth-intra <boolean>    E..V....... Enable paeth predictor in intra prediction (default auto)
  -enable-palette    <boolean>    E..V....... Enable palette prediction mode (default auto)
  -enable-flip-idtx  <boolean>    E..V....... Enable extended transform type (default auto)
  -enable-tx64       <boolean>    E..V....... Enable 64-pt transform (default auto)
  -reduced-tx-type-set <boolean>    E..V....... Use reduced set of transform types (default auto)
  -use-intra-dct-only <boolean>    E..V....... Use DCT only for INTRA modes (default auto)
  -use-inter-dct-only <boolean>    E..V....... Use DCT only for INTER modes (default auto)
  -use-intra-default-tx-only <boolean>    E..V....... Use default-transform only for INTRA modes (default auto)
  -enable-ref-frame-mvs <boolean>    E..V....... Enable temporal mv prediction (default auto)
  -enable-reduced-reference-set <boolean>    E..V....... Use reduced set of single and compound references (default auto)
  -enable-obmc       <boolean>    E..V....... Enable obmc (default auto)
  -enable-dual-filter <boolean>    E..V....... Enable dual filter (default auto)
  -enable-diff-wtd-comp <boolean>    E..V....... Enable difference-weighted compound (default auto)
  -enable-dist-wtd-comp <boolean>    E..V....... Enable distance-weighted compound (default auto)
  -enable-onesided-comp <boolean>    E..V....... Enable one sided compound (default auto)
  -enable-interinter-wedge <boolean>    E..V....... Enable interinter wedge compound (default auto)
  -enable-interintra-wedge <boolean>    E..V....... Enable interintra wedge compound (default auto)
  -enable-masked-comp <boolean>    E..V....... Enable masked compound (default auto)
  -enable-interintra-comp <boolean>    E..V....... Enable interintra compound (default auto)
  -enable-smooth-interintra <boolean>    E..V....... Enable smooth interintra mode (default auto)
  -aom-params        <dictionary> E..V....... Set libaom options using a :-separated list of key=value pairs
```
===

You can input non-FFmpeg standard aomenc parameters via ``-aom-params``. Please keep in mind that unless you built FFmpeg yourself.

&nbsp;&nbsp;

## Installation

### Microsoft Windows
**The Easy Way:** Download the pre-built versions, which can be found below:

[Skylake build](https://cdn.discordapp.com/attachments/1042536514783023124/1069212358989336626/aomenc-skylake.7z)

[Zen 2 build](https://cdn.discordapp.com/attachments/1042536514783023124/1069198775899398234/aomenc.7z)
!!! warning Updating and compiling
Join the [AV1 Discord server](https://discord.gg/vpREHAvYvh) and head to #community-builds for updated versions, you can opt to compile it yourself with those custom (Butteraugli, VMAF) tunes but its a huge PITA on Windows.
!!!

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

Sorry, I don't use or have Mac. You're on your own.

&nbsp;&nbsp;
### Linux

**The Easy Way:** 
Install [Aviator](https://github.com/gianni-rosato/aviator), it is currently only available as a [Flatpak](https://beta.flathub.org/apps/net.natesales.Aviator)
or
Install [rAV1ator](https://giannirosato.com/blog/post/aviator-1/), basically same thing but av1an + rav1e
**Keep in mind Aviator ships with SVT-AV1 and rAV1ator with rav1e instead of Aomenc/AOM-AV1, which I will not be covering here**

**The compiling route:**
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


!!!info Branches
``Endless_Butter`` used to be bleeding edge but now it's been taken over by ``Endless_Merging``, be sure to check the Github page on which is more updated!
!!!
&nbsp;&nbsp;

## Usage

the

