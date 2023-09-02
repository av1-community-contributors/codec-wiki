---
label: SVT-AV1
sidebar_position: 4
---

# SVT-AV1

:::info Under Maintenance
The content in this entry is incomplete & is in the process of being completed.
:::

SVT-AV1 (Scalable Video Technology for AV1) is an AV1-compliant software encoder/decoder library. This entry discusses the SVT-AV1 encoder, also known as the "Production" AV1 encoder (while [aomenc](../encoders/aomenc.md) is the "reference" AV1 encoder), & refers to SVT-AV1 as such. SVT-AV1 is known for its parallelization, high coding efficiency, & active development. SVT-AV1 scales across multiple CPU cores much more effectively than aomenc or [rav1e](../encoders/rav1e.md), so the use of tools like [Av1an](../utilities/av1an.md) is less helpful.

## Building

### (Linux/macOS)

To build SVT-AV1 from source, clone the official SVT-AV1 repository from Gitlab & build from source.

```zsh
git clone https://gitlab.com/AOMediaCodec/SVT-AV1/
cd SVT-AV1/Build/linux
./build.sh release
```

If you want extra performance, it is possible to build SVT-AV1 using PGO (Profile-guided Optimization). **Be aware that this particular script infers that you have a .y4m file (or multiple) in `/dev/shm` for transcoding**. You can compile statically linked SVT-AV1 with PGO by following this script:

```zsh
git clone https://gitlab.com/AOMediaCodec/SVT-AV1/
cd SVT-AV1/Build/linux
./build.sh cc=gcc cxx=g++ enable-lto enable-pgo static native jobs=$(nproc) pgo-dir=/dev/shm pgo-videos=/dev/shm release
```

If you wish to store videos elsewhere or provide custom parameters to the SvtAv1EncApp binary, try this script:

```zsh
git clone https://gitlab.com/AOMediaCodec/SVT-AV1/
cd SVT-AV1/Build/linux
./build.sh cc=gcc cxx=g++ enable-lto enable-pgo static native jobs=$(nproc) pgo-dir=/dev/shm pgo-compile-gen release
../../Bin/Release/SvtAv1EncApp # Run this binary as many times as you'd like with arguments of your choice to collect data
./build.sh cc=gcc cxx=g++ enable-lto enable-pgo static native jobs=$(nproc) pgo-dir=/dev/shm pgo-compile-use release
```

### Windows

To be filled.

## Encoding

### Strengths

SVT-AV1's greatest strength is its parallelization capability, where it outclasses other AV1 encoders by a significant margin. SVT-AV1's parallelization techniques do not involve tiling & don't harm video quality, & can comfortably utilize up to 16 cores given standard 1080p video. This is while maintaining competitive coding efficiency to rav1e. Both are outperformed by well-tuned aomenc, as the reference encoder has a more complete AV1 implementation.

### Weaknesses

SVT-AV1 is strongest on x86 CPUs, & it doesn't have any ARM NEON assembly which makes it underperform on ARM. For this reason, it is not a good cross-architecture CPU benchmark. SVT-AV1's support for various AV1 features is also limited; it only supports up to 4:2:0 chroma subsampling with no support for 12-bit color, and it does not support scene change detection (there are no plans to implement this, either).

### Encoder Optimization

Aside from build optimizations for speed, there is further tweaking to be done to the `SvtAv1EncApp` binary parameters when encoding.

- `--film-grain` & `--film-grain-denoise`

Most live-action sources feature hard-to-compress CCD noise that is easily smoothed out by AV1 compression. To add this grain back, or even denoise through the encoder and then add grain, it is possible to use the `--film-grain` parameter to specify an amount of film grain to add to the encode (& `--film-grain-denoise` to specify how to denoise the input video before encoding for potentially better appeal). Denoising a video always removes fine details, so sticking with just `--film-grain` is recommended in most cases. According to [SVT-AV1 documentation](https://gitlab.com/AOMediaCodec/SVT-AV1/-/blob/master/Docs/CommonQuestions.md#practical-advice-on-grain-synthesis), a level of 8 should be used for live-action content with a normal amount of grain while a level of 4 works well for hand-drawn animation or other smoother-looking sources that still stand to benefit from some grain synthesis.

- `--input-depth 10`

10-bit output from AV1 encoding is always desirable for coding efficiency, even if your source is 8-bit.

- `--tune 2`

There are three tunes in SVT-AV1: Tune 1 is for [PSNR](../metrics/PSNR.md) [RDO](../introduction/psychovisual.md), Tune 2 is for [SSIM](../metrics/SSIM.md) RDO, & Tune 0 is a [psychovisual](../introduction/psychovisual.md) tune labeled VQ. It has been common practice to lean away from the PSNR tune, as it is not designed for visual quality but rather to perform better on the PSNR metric which is widely considered to be inconsistent with our human perception of fidelity. Using the VQ tune is a safe bet for now, but many believe the newer SSIM tune provides better visual fidelity. This is anecdotal, & has yet to be meaningfully proven

- `--enable-overlays 1`

Enables overlay pictures to be used as additional reference frames for the referenced picture, disabled by default. Improves coding efficiency.

- `--keyint [FPS*10]` 

Similar to `--kf-max-dist` in [vpxenc](../encoders/vpxenc.md), this tells the encoder when to place keyframes. Because SVT-AV1 doesn't have scene detection, this isn't the maximum distance between keyframes, but rather a fixed interval for placing keyframes.

- `--irefresh-type 2`

Intra refresh is specified through this option, & lets the user decide between Closed GOP & Open GOP. GOP stands for Group of Pictures. Open GOP allows GOPs to [reference one another](https://ottverse.com/closed-gop-open-gop-idr/), but support for this feature is currently incomplete. Therefore, it is recommended to use Closed GOP for the time being via `--irefresh-type 2` until this is rectified.

- `--preset X`

SVT-AV1 can be used in 14 different presets, labeled 0 through 13. Preset 0 is the slowest, but provides the best coding efficiency; Preset 13 is the fastest. Using presets 2 through 8 is the best course of action for non-realtime applications.

- `--crf X`

CRF is the best way to target quality for optimal visual fidelity. VBR & CBR lose efficiency due to their inherently limited rate control.