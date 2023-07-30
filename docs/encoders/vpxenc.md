---
title: vpxenc
sidebar_position: 3
---

# vpxenc

:::info Under Maintenance
The content in this entry is incomplete & is in the process of being completed.
:::

vpxenc is part of the libvpx library for working with the [VP9](../video/VP9.md) & [VP8](../video/VP8.md) video codecs. It is capable of encoding & decoding both formats, where vpxenc is the multipurpose encoder. VP9 competes with [HEVC](../video/h265.md) (h265) & [AVC](../video/h264.md) (h264) in coding efficiency, and has been superseded by [AV1](../video/av1.md). VP8 competes with AVC. By default, vpxenc isn't as competitive as it could be, but even when used properly, most tests show that h265 offers slightly better quality per bit with efficient encoders like [x265](../encoders/x265.md).

## Building

**Linux & macOS**

To build libvpx from source:
```zsh
git clone https://chromium.googlesource.com/webm/libvpx
cd libvpx
./configure
make -j [# of CPU threads]
```

It may be worth digging through the `configure` options, which can be listed by running `./configure -h`. Keeping in mind some flags might be redundant with defaults, here's an example of a tweaked configuration (without VP8 support) for efficient performance on an Apple Silicon Mac running macOS Ventura:
```zsh
./configure --disable-vp8 --target=arm64-darwin22-gcc --disable-docs --enable-webm-io --enable-vp9-postproc --enable-vp9-highbitdepth --extra-cxxflags="-O3 -flto -march=native" --extra-cflags="-O3 -flto -march=native" --enable-postproc
```

From the build, a binary will be produced called `vpxenc`. You can copy this build to `/usr/local/bin` or execute it directly in the directory, shown below:

```zsh
./vpxenc --help | grep vp9 -C 3

Included encoders:

    vp9    - WebM Project VP9 Encoder v1.13.0 (default)

        Use --codec to switch to a non-default encoder.
```

## VP8

*Incomplete*

## VP9

For encoding VP9, vpxenc's default parameters are not considered optimal. There are a lot of options that are either disabled without reason or are simply misconfigured, hurting coding efficiency at little cost otherwise. As of mid-2021, some parameters (the TPL-model, lag-in-frames and auto-alt-ref frames) were changed (since libvpx 1.9.0 and libvpx 1.10.0) which means that there's not much use of setting these three parameters unless you're in [FFmpeg](../utilities/ffmpeg.md). This section covers the most important options libvpx-vp9 has to offer, recommended settings, & what they do.

### Encoding

- `--codec=vp9`

Self-explanatory.

- `--passes=2`

vpxenc's 2-pass mode is quite fast compared to 2-pass in [x264](../encoders/x264.md) and x265. Only use 1-pass mode for real-time applications, which won't be covered here yet. It is the default in the standalone vpxenc libvpx-vp9 encoder.

- `--webm`

Enables WebM output for the encoder, and passes the encoder flags set. It is not necessary to enable it, but since it passes the encoder flags, I would use it. Can be changed to `--ivf` for an ivf video stream.

- `--good`

This is a sort of quality deadline, the minimum speed the encoder is allowed to go to. It isn't recommended to use `-–best` as it is slow for the quality uplift you get. Do not use RT for anything but real-time encoding.

- `--threads=8` 

Dictates the number of threads the encoder should spawn. It doesn’t mean it’ll scale all that well over those 8 threads. On a 16 thread CPU with a single encoder instance, I would use 8 threads. With multiple encoder instance encoding(with qencoder/av1an/neav1e), I would set it to 2 threads.

- `--profile=2` 

VP9 profile 2 is obligatory if you want 10-bit & 12-bit support for HDR, and improved quality from 8-bit.

- `--lag-in-frames=25` 

Lag-in-frames is the libvpx equivalent of lookahead in x264. The higher the number, the slower the encoder will be, but at the upside of making it more efficient. Going above –lag-in-frames=12 also activates another setting called alternate reference frames. 25 is the maximum you can get in libvpx-vp9. It is the default in the standalone vpxenc libvpx-vp9 encoder.

- `--end-usage=q` 

Q mode is the closest equivalent to CRF that libvpx-vp9 offers, so use it if maximum quality is desired.

- `--cq-level=25` 

For 1080p30 8-bit content, it is recommended to go with a Q of 25; you can go lower if you value higher quality over pure efficiency. For 1080p60 8-bit content, I would recommend going with a higher Q value with a delta of around 15. So, a Q of 30 to 40 is usually recommended. Depending on the content, you may have to tune this value, so this advice is only useful in choosing a starting point.

- `--kf-max-dist=[input FPS * 10]` 

This tells the encoder to have a maximum number of frames between keyframes. It will usually place a lower number of keyframes in content like movies, TV shows, or animated shows, so you can set it to a very high number or not set it at all if you want maximum efficiency for this kind of content. Otherwise, I would go with the 10-second rule: `--kf-max-dist=240` for 24FPS content, 300 for 30FPS content, 600 for 60FPS content, and so on.

- `--cpu-used=3` 

This is where the biggest balance of quality to speed is with libvpx-vp9. This is similar to presets in x264 and x265, except the lower the number, the slower the encoder takes. Using `--cpu-used=3` & below enables RDO, which increases quality at the expense of speed. Another note: --cpu-used=5 and above are *slower* in the 1st pass, so it isn't recommended to use them anyway.

- `--auto-alt-ref=1`

Activates alternate reference frames. Alternate reference frames are "invisible" frames which are used as references when creating the final display frames. This allows the encoder to be a lot more efficient, so always use it. It is the default in the latest standalone vpxenc libvpx-vp9 encoder. `--auto-alt-ref=6` can also be used, but be aware that this does require `--profile=2` be set as mentioned above.

- `--arnr-maxframes=7`

This is the maximum number of alternate reference frames the encoder is allowed to use. For most content, 7 is usually a good bet, and it is the default. With animated content, going with a value of 12 or to the max is a good bet, as animated content benefits from more additional alt-ref frames than other content. Be aware that increasing this value will impact encode speed.

- `--arnr-strength=4`

This setting dictates how much denoising will occur in the alt-ref frames. Lowering it to 2 or 3 is usually a good bet for noisier/grainy content to try and retain more detail, but 4 is a sane starting place. The default setting is 5, which is fine for most content, but it can be beneficial going a bit lower. For animation, keeping the default of 5 is likely a better option.

- `--aq-mode=0`

Adaptive quantization is the way for an encoder to spend more bits in certain areas to improve [psychovisual fidelity](../introduction/psychovisual.md). `-–aq-mode=0` works well on clean content (animation, video games, screen content). `--aq-mode=2` is recommended when you want to give more detail to more complex parts of a video.

- `--frame-boost=1`

This flag lets the encoder periodically boost the bitrate of a scene/frame if it needs it. Leaving it at the default `--frame-boost=0` is usually a good bet, & this isn't a particularly salient change.

- `--tune-content=default`

This determines how the encoder is tuned. In libvpx-vp9, there are three options: `default`, `screen`, and `film`. Default is for most scenarios, screen is for screen content(video games, live-streaming content like web pages & your screen), and film is for heavily dithered/grainy video. Leaving it at the default for about everything but screen content as described above is probably the best option. `--tune-content=screen` with `--aq-mode=2` is not recommended, as it creates some odd artifacts. It is advised to use `--aq-mode=0` if `--tune-content=screen` is activated, or if you want better perceptual quality, `--aq-mode=1`.

- `--row-mt=1`

Enables row multi-threading in libvpx-vp9. *Always* enable it no matter what, as it does not hurt efficiency, but boosts speed considerably. This feature is disabled by default.

- `--bit-depth=10`

Always use 10-bit for maximum efficiency & minimal banding, even with an 8-bit source. Make sure to enable `-–profile=2` as mentioned above.

- `--tile-columns=1`

This setting divides the video into tile columns for easier parallelization when encoding & decoding. Setting `-–tile-columns=1`, you will get 2¹ tile columns. Setting it higher is a trade-off between parallelization & coding efficiency, as more tiles means less information your encoder can work with, and this will result in decreased efficiency. Do note there is an upper threshold in regards to the number of tile columns you can get due to the fixed minimum tile width of 256 pixels. So, this means 4 tile columns (2²) for 720p and 1080p, 8 tile columns (2⁴) for 1440p/4k, and so on. If you set a tile column number that is too high, it will drop down to the lowest supported number of tile columns at the input resolution.

- `--tile-rows=0`

This setting divides the video into tile rows. This option is different from columns because although it also makes decoding performance higher, it does not scale as well as tile columns & doesn’t increase encoder threading nearly as much. Always use more tile-columns than rows, or leave the number of tile rows at default (0). Leaving the encoder defaults at `-–tile-rows=0` & `–-tile-columns=0` will result in the highest overall coding efficiency possible with these options.

- `--enable-tpl=1`

This option enables a temporal layer model, which helps with coding efficiency. It is the default in the standalone vpxenc libvpx-vp9 encoder.

All of these options are only available for the standalone vpxenc program. Here is a sample FFmpeg command line interpretation of the commands above, with some options missing:

```zsh
ffmpeg -i input.mkv -c:v libvpx-vp9 -pix_fmt yuv420p10le -pass 1 -quality good -threads 4 -profile:v 2 -lag-in-frames 25 -crf 25 -b:v 0 -g 240 -cpu-used 4 -auto-alt-ref 1 -arnr-maxframes 7 -arnr-strength 4 -aq-mode 0 -tile-rows 0 -tile-columns 1 -enable-tpl 1 -row-mt 1 -f null -
ffmpeg -i input.mkv -c:v libvpx-vp9 -pix_fmt yuv420p10le -pass 2 -quality good -threads 4 -profile:v 2 -lag-in-frames 25 -crf 25 -b:v 0 -g 240 -cpu-used 4 -auto-alt-ref 1 -arnr-maxframes 7 -arnr-strength 4 -aq-mode 0 -tile-rows 0 -tile-columns 1 -enable-tpl 1 -row-mt 1 output.mkv
```

Alternatively, you can pass a raw .y4m stream to standalone vpxenc & encode that way.

*VP9 section written based on work by BlueSwordM, who has granted written permission for this wiki page to exist in its current fashion*