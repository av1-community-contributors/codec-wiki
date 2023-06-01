---
label: Av1an
order: 200
templating: true
---

# Av1an

![Av1an encoding AV1 with 96 workers](https://cdn.discordapp.com/attachments/756076013372440656/1103284312675188777/av1an_96_workers.jpeg)

Av1an is a video encoding framework. It can increase your encoding speed and improve cpu utilization by running multiple encoder processes in parallel. Target quality, VMAF plotting, and more, available to take advantage for video encoding.

&nbsp;&nbsp;
## Prerequisites
Since Av1an is just a tool that helps with parallelization, you'll need to have the following installed for the entire thing to work: 
- Rust
- Python (Required for Vapoursynth, currently needs 3.11, this will change in the future so consult from [their website](http://www.vapoursynth.com/doc/installation.html))
- FFmpeg
- MKVToolNix (mkvmerge)
- Vapoursynth
- L-SMASH (Vapoursynth plugin)
- FFMS2 (Vapoursynth plugin, optional)
- VMAF (For target VMAF, optional)
- Any of the supported encoders (aomenc, rav1e, SVT-AV1, vpxenc, x264, x265)

&nbsp;&nbsp;
## Installation
### Microsoft Windows
**GUI:**
1. Install [Nmkoder](https://github.com/n00mkrad/nmkoder) which is a GUI front-end to av1an with all dependencies installed
2. You're done!

:::danger Outdated Software
Since Nmkoder already ships everything by default and it's last release was 29th March 2022. You need to manually update EVERYTHING (``av1an.exe``, ``aomenc.exe``, etc) to get performance optimizations, better speeds, and more settings. Missing out on updates will result in your encodes being sub-optimal.
:::


**Pre-built binary, bleeding edge [Recommended]:**

- Download Av1an from [here](https://github.com/master-of-zen/Av1an/releases), select "Latest" and click the "Assets" dropdown. Put it in PATH

**Compiling, via cargo:**

- ``cargo install av1an``

**Compiling [NOT recommended]:**
```bash
git clone https://github.com/master-of-zen/Av1an.git
cd Av1an
set RUSTFLAGS=-C target-cpu=native
cargo build --release
```
You will run into errors with pkg-config ``libavutil.pc`` being unavailable or whatnot, I am a total noob at software compilation and cannot help you with this as I am also stuck with it, which is why I am heavily against this method. If you know how to solve this contact me and I'll get this section updated.

&nbsp;&nbsp;
### MacOS

Sorry, I don't use or have Mac. You're on your own.

&nbsp;&nbsp;
### Linux

**The Easy Way:** 

Install [Aviator](https://github.com/gianni-rosato/aviator), it is currently only available as a [Flatpak](https://beta.flathub.org/apps/net.natesales.Aviator)
or
Install [rAV1ator](https://giannirosato.com/blog/post/aviator-1/), basically same thing but av1an + rav1e
**Keep in mind Aviator ships with SVT-AV1 and rAV1ator with rav1e instead of Aomenc/AOM-AV1.**
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

**Linux**

```bash
docker run --privileged -v "$(pwd):/videos" --user $(id -u):$(id -g) -it --rm masterofzen/av1an:latest -i S01E01.mkv {options}
```

**Windows**

```bash
docker run --privileged -v "${PWD}:/videos" -it --rm masterofzen/av1an:latest -i S01E01.mkv {options}
```

**The image can also be manually built by running**

```bash
docker build -t "av1an" .
```
in the root directory of this repository. The dependencies will automatically be installed into the image, no manual installations necessary.


To specify a different directory to use you would replace $(pwd) with the directory

```bash
docker run --privileged -v "/c/Users/masterofzen/Videos":/videos --user $(id -u):$(id -g) -it --rm masterofzen/av1an:latest -i S01E01.mkv {options}
```

The ``--user`` flag is required on linux to avoid permission issues with the docker container not being able to write to the location, if you get permission issues ensure your user has access to the folder that you are using to encode.
