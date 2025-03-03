"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[7800],{8453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>a});var n=t(6540);const o={},s=n.createContext(o);function r(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:i},e.children)}},8562:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"introduction/terminology","title":"Terminology","description":"When learning about encoding technology, it is important to understand the vast terminology that is often used to describe concepts that are often not very complex to understand.","source":"@site/docs/introduction/terminology.mdx","sourceDirName":"introduction","slug":"/introduction/terminology","permalink":"/docs/introduction/terminology","draft":false,"unlisted":false,"editUrl":"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/introduction/terminology.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Terminology","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Prologue","permalink":"/docs/introduction/prologue"},"next":{"title":"Lossless Compression","permalink":"/docs/introduction/lossless"}}');var o=t(4848),s=t(8453);const r={title:"Terminology",sidebar_position:2},a="Terminology",d={},c=[{value:"Bitstream",id:"bitstream",level:2},{value:"Lossy / Lossless",id:"lossy--lossless",level:2},{value:"Elementary stream",id:"elementary-stream",level:2},{value:"Muxing",id:"muxing",level:2},{value:"Codec",id:"codec",level:2},{value:"Filter",id:"filter",level:2},{value:"Muxer/Demuxer",id:"muxerdemuxer",level:2},{value:"Bitstream filter",id:"bitstream-filter",level:2},{value:"Container",id:"container",level:2},{value:"MP4 / M4V",id:"mp4--m4v",level:4},{value:"MOV",id:"mov",level:4},{value:"MKV / MKA / MKS / MK3D",id:"mkv--mka--mks--mk3d",level:4},{value:"WebM",id:"webm",level:4},{value:"Transcoding",id:"transcoding",level:2},{value:"RDO",id:"rdo",level:2},{value:"Perceputal / Psychovisual / Psychoacoustic",id:"perceputal--psychovisual--psychoacoustic",level:2},{value:"Discrete Cosine Transform (DCT)",id:"discrete-cosine-transform-dct",level:2}];function l(e){const i={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",header:"header",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"terminology",children:"Terminology"})}),"\n",(0,o.jsx)(i.p,{children:"When learning about encoding technology, it is important to understand the vast terminology that is often used to describe concepts that are often not very complex to understand."}),"\n",(0,o.jsx)(i.h2,{id:"bitstream",children:"Bitstream"}),"\n",(0,o.jsxs)(i.p,{children:["A ",(0,o.jsx)(i.em,{children:"bitstream"})," or ",(0,o.jsx)(i.em,{children:"bit stream"})," is a media file, the kind that is played in a media player. It consists of a ",(0,o.jsx)(i.a,{href:"#container",children:"container"})," wrapping multiple ",(0,o.jsx)(i.a,{href:"#elementary-stream",children:"elementary streams"})]}),"\n",(0,o.jsx)(i.h2,{id:"lossy--lossless",children:"Lossy / Lossless"}),"\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.em,{children:"Lossy"})," encoding throws out some of the detail to achieve a smaller size. Often, this is an acceptable trade-off, but if you need a perfect recreation of the data, you need ",(0,o.jsx)(i.em,{children:"lossless"})," encoding."]}),"\n",(0,o.jsx)(i.h2,{id:"elementary-stream",children:"Elementary stream"}),"\n",(0,o.jsxs)(i.p,{children:["An elementary stream is an audio, video, or subtitle track. Basically, it's the compressed data you want to ",(0,o.jsx)(i.a,{href:"#muxing",children:"mux"})," into the container."]}),"\n",(0,o.jsx)(i.h2,{id:"muxing",children:"Muxing"}),"\n",(0,o.jsx)(i.p,{children:"Putting elementary streams into a container, which preserves them without making any changes to the data."}),"\n",(0,o.jsx)(i.h2,{id:"codec",children:"Codec"}),"\n",(0,o.jsxs)(i.p,{children:["A codec (",(0,o.jsx)(i.strong,{children:"co"}),"der/",(0,o.jsx)(i.strong,{children:"dec"}),"oder) is the piece of code that actually encodes the data you put in. It takes as input and produces as output an elementary stream. More information is provided ",(0,o.jsx)(i.a,{href:"/docs/introduction/prologue#what-is-a-codec",children:"in the prologue"}),' under "What is a Codec".']}),"\n",(0,o.jsx)(i.h2,{id:"filter",children:"Filter"}),"\n",(0,o.jsx)(i.p,{children:"A filter is a piece of code you can apply to the data to make something about it different, for instance sharpening, removing artifacts, shakiness, denoising, scaling, overlay, etc."}),"\n",(0,o.jsx)(i.h2,{id:"muxerdemuxer",children:"Muxer/Demuxer"}),"\n",(0,o.jsxs)(i.p,{children:["The pieces of code that ",(0,o.jsx)(i.a,{href:"#muxing",children:"mux"})," or do the reverse, getting elementary streams from the container."]}),"\n",(0,o.jsx)(i.h2,{id:"bitstream-filter",children:"Bitstream filter"}),"\n",(0,o.jsxs)(i.p,{children:["A bitstream filter is a filter that is directly applied to the ",(0,o.jsx)(i.a,{href:"#bitstream",children:"bitstream"})," in order to change something about the container, for instance, convert frame types, or corrupt some packets."]}),"\n",(0,o.jsx)(i.h2,{id:"container",children:"Container"}),"\n",(0,o.jsxs)(i.p,{children:["A container is a format for putting one or more elementary streams into one file, which is then called a ",(0,o.jsx)(i.a,{href:"#bitstream",children:"bitstream"}),"."]}),"\n",(0,o.jsx)(i.p,{children:'A video container is a digital file format that holds video and audio data, as well as additional information such as subtitles, metadata, and chapter markers. It acts as a "wrapper" that packages all these elements into a single file that can be played on various devices and software platforms. Think of it like a container you might use to transport goods - the video and audio data are like the items being transported, while the container itself provides a structure and organization for the contents.'}),"\n",(0,o.jsx)(i.p,{children:"Some kinds of containers:"}),"\n",(0,o.jsx)(i.h4,{id:"mp4--m4v",children:"MP4 / M4V"}),"\n",(0,o.jsxs)(i.p,{children:["This is likely the most common container you've encountered, & has near universal compatibility. Has a limited maximum amount of streams. The supported video codecs are ",(0,o.jsx)(i.a,{href:"/docs/video/AVC",children:"H.264"}),", ",(0,o.jsx)(i.a,{href:"/docs/video/HEVC",children:"H.265"}),", ",(0,o.jsx)(i.a,{href:"/docs/video/VVC",children:"H.266"}),", DivX, Xvid, ",(0,o.jsx)(i.a,{href:"/docs/video/VP9",children:"VP9"})," (Unofficial, hacky), and ",(0,o.jsx)(i.a,{href:"/docs/video/AV1",children:"AV1"})," (Unofficial, hacky). For audio codecs it's many of the various flavors of ",(0,o.jsx)(i.a,{href:"/docs/audio/AAC",children:"AAC"}),", ",(0,o.jsx)(i.a,{href:"/docs/audio/MP3",children:"MP3"}),", ",(0,o.jsx)(i.a,{href:"/docs/audio/FLAC",children:"FLAC"})," (Unofficial), ",(0,o.jsx)(i.a,{href:"/docs/audio/Opus",children:"Opus"})," (Unofficial, hacky). For subtitles only MPEG-4 Timed Text (TTXT) is supported."]}),"\n",(0,o.jsx)(i.p,{children:"The best tool to work with this container is MP4Box, but FFmpeg also works."}),"\n",(0,o.jsx)(i.h4,{id:"mov",children:"MOV"}),"\n",(0,o.jsx)(i.p,{children:"Similar to MP4, but less supported. Made with Apple Quicktime in mind, supports ProRes."}),"\n",(0,o.jsx)(i.h4,{id:"mkv--mka--mks--mk3d",children:"MKV / MKA / MKS / MK3D"}),"\n",(0,o.jsx)(i.p,{children:"Also known as Matroska, allows an unlimited amount of video/audio/subtitle streams and any codec that probably still exists in Area 51, you can put literally anything in there and it won't even care, MPEG-2/DivX/H.266/Theora/Thor/RealVideo/MJPEG/AVS3/AMR-WB, you name it. All around best container for working with if you have the choice."}),"\n",(0,o.jsx)(i.h4,{id:"webm",children:"WebM"}),"\n",(0,o.jsxs)(i.p,{children:["A container made with web streaming in mind. WebM is a stripped-down subset of MKV that only allows free & open source codecs such as VP8, VP9 or AV1 for video alongside Vorbis or Opus for audio. It is a common misconception that ",(0,o.jsx)(i.a,{href:"/docs/subtitles/webvtt",children:"WebVTT"})," tracks always work natively in browsers when within a WebM container; in practice, WebMs containing WebVTT subtitles ",(0,o.jsx)(i.em,{children:"will usually not"})," play back the subtitles in browsers. WebVTT subtitles can be utilized with the ",(0,o.jsx)(i.code,{children:"<track>"})," element instead, meaning they exist outside the WebM container itself. More info in the ",(0,o.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Web/Media/Audio_and_video_delivery/Adding_captions_and_subtitles_to_HTML5_video",children:"Mozilla Web Docs"}),"."]}),"\n",(0,o.jsx)(i.h2,{id:"transcoding",children:"Transcoding"}),"\n",(0,o.jsxs)(i.p,{children:["Taking an elementary stream & converting it to another format, lossless or lossy, using an encoder of some kind. For example, if I convert a lossless ",(0,o.jsx)(i.a,{href:"/docs/video/FFV1",children:"FFV1"})," video to a lossy AV1 video using an encoder like ",(0,o.jsx)(i.a,{href:"/docs/encoders/rav1e",children:"rav1e"}),", I have ",(0,o.jsx)(i.em,{children:"transcoded"})," this lossless video to AV1. Transcoding doesn't have anything to do with the container."]}),"\n",(0,o.jsx)(i.h2,{id:"rdo",children:"RDO"}),"\n",(0,o.jsxs)(i.p,{children:["RDO, or Rate-Distortion Optimization, is a technique used to find the best trade-off between the bit rate & the quality of lossily encoded content. RDO can be metric-based, optimizing to score well on metrics like ",(0,o.jsx)(i.a,{href:"/docs/metrics/PSNR",children:"PSNR"})," or ",(0,o.jsx)(i.a,{href:"/docs/metrics/SSIM",children:"SSIM"}),"."]}),"\n",(0,o.jsx)(i.h2,{id:"perceputal--psychovisual--psychoacoustic",children:"Perceputal / Psychovisual / Psychoacoustic"}),"\n",(0,o.jsxs)(i.p,{children:['"Psychovisual quality" (for videos), "Psychoacoustic quality" (for audio), or "perceptual quality" is a term used to describe the perception of quality of distorted media by the human senses. The goal of any multimedia codec is to minimize data while maintaining perceived quality, and optimizing around human perception theoretically yields the best performance within any limited set of coding techniques (like when using an older codec). Our model of human perception continues to evolve, which makes modelling perceptual quality very difficult. Presently, the metrics ',(0,o.jsx)(i.a,{href:"/docs/metrics/SSIMULACRA2",children:"SSIMULACRA2"})," (Images/Video) & ",(0,o.jsx)(i.a,{href:"/docs/metrics/butteraugli",children:"Butteraugli"})," (Video) are considered the most accurate to our human visual system."]}),"\n",(0,o.jsx)(i.h2,{id:"discrete-cosine-transform-dct",children:"Discrete Cosine Transform (DCT)"}),"\n",(0,o.jsx)(i.p,{children:"The Discrete Cosine Transform is a mathematical transformation that can transform discrete data into the frequency domain. This discrete data could be pixels in an image/video compression block or data points recorded temporally representing an audio recording. This algorithm is a particularly good choice for image, video, music, & speech compression because it has high energy compaction relative to our understanding of fidelity in media. High energy compaction means the DCT is able to represent a signal with a small number of significant coefficients."})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}}}]);