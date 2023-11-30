"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[8600],{9255:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var t=i(5893),o=i(1151);const a={title:"VVenC",sidebar_position:9},r="VVenC",s={id:"encoders/VVenC",title:"VVenC",description:'<img src="https://autumn.revolt.chat/attachments/wU4lo6SU-hRjZSVeqd9vCOeAskthYXmiWHaXUTjyTa/VVenC_Spam.webp"',source:"@site/docs/encoders/VVenC.mdx",sourceDirName:"encoders",slug:"/encoders/VVenC",permalink:"/docs/encoders/VVenC",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/encoders/VVenC.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"VVenC",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"SVT-VP9",permalink:"/docs/encoders/SVT-VP9"},next:{title:"uvg266",permalink:"/docs/encoders/uvg266"}},c={},d=[{value:"Installation",id:"installation",level:2},{value:"FFmpeg Integration",id:"ffmpeg-integration",level:2},{value:"Usage",id:"usage",level:2},{value:"Muxing",id:"muxing",level:2},{value:"VVdeC",id:"vvdec",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Decoding",id:"decoding",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"vvenc",children:"VVenC"}),"\n",(0,t.jsxs)("picture",{children:[(0,t.jsx)("source",{srcset:"https://raw.githubusercontent.com/av1-community-contributors/images/main/VVenC_Spam.avif?token=GHSAT0AAAAAACEZPDXI3OYO3Z4Q7LU3Z52EZHY7FMA",type:"image/avif"}),(0,t.jsx)("img",{src:"https://autumn.revolt.chat/attachments/wU4lo6SU-hRjZSVeqd9vCOeAskthYXmiWHaXUTjyTa/VVenC_Spam.webp",alt:"vvencapp spamming the terminal output with progress per-picture-order-count cause god knows why",width:"XX",height:"YY",loading:"lazy"})]}),"\n",(0,t.jsx)(n.p,{children:"VVenC is an open source command line application for encoding H.266/VVC written in C++ and developed by Fraunhofer Heinrich-Hertz-Institute (HHI)."}),"\n",(0,t.jsx)(n.admonition,{title:"General support",type:"info",children:(0,t.jsx)(n.p,{children:"There is currently no need for encoding VVC unless you are into bleeding edge codecs, a developer, video engineer, experimentations, academic papers, or an employee at Fraunhofer HHI. The general public won't bother if they can't play it on their crappy TV set top boxes."})}),"\n",(0,t.jsx)(n.p,{children:"\xa0\xa0"}),"\n",(0,t.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arch Linux users:"})," Check AUR."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Compilation requires CMake"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"The following build procedure should work across all common operating systems"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/fraunhoferhhi/vvenc.git\ncd vvenc\nmkdir build\ncd build\ncmake .. -DCMAKE_BUILD_TYPE=Release\ncmake --build .\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Binaries will be available in ",(0,t.jsx)(n.code,{children:"bin/release-static/"})]}),"\n",(0,t.jsx)(n.p,{children:"\xa0\xa0"}),"\n",(0,t.jsx)(n.h2,{id:"ffmpeg-integration",children:"FFmpeg Integration"}),"\n",(0,t.jsxs)(n.p,{children:["Although not officially supported, you can compile your own FFmpeg binary with ",(0,t.jsx)(n.code,{children:"libvvenc"})," and ",(0,t.jsx)(n.code,{children:"libvvdec"}),". The tutorial can be found in the ",(0,t.jsx)(n.a,{href:"https://github.com/fraunhoferhhi/vvenc/wiki/FFmpeg-Integration",children:"official VVenC wiki"})," (",(0,t.jsx)(n.a,{href:"https://web.archive.org/web/20230509115800/https://github.com/fraunhoferhhi/vvenc/wiki/FFmpeg-Integration",children:"archive"}),"), I do not want to include it here because some things change every so often and I'm not paid to keep them updated."]}),"\n",(0,t.jsx)(n.p,{children:"\xa0\xa0"}),"\n",(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["There are two encoders, the simple encoder (",(0,t.jsx)(n.code,{children:"vvencapp"}),") and the full-featured expert mode encoder (",(0,t.jsx)(n.code,{children:"vvencFFapp"}),") which is based on the VTM configuration scheme (good luck figuring that out). VVenC used to only accept YUV files input until they added Y4M also (Thank the LORD)"]}),"\n",(0,t.jsx)(n.p,{children:"!!! YUV vs Y4M\nYUV does not carry any of the original video's metadata, which means you'll have to manually input all the necessary parameters such as frame rates, resolution, bit depth, etc. Y4M takes care all of this\n!!!"}),"\n",(0,t.jsx)(n.p,{children:"A standard input would look like this:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"vvencapp -i input.y4m --qp 20 -o output.266\n"})}),"\n",(0,t.jsx)(n.p,{children:"Enhanced, preset slow + qpa + YUV420P10:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"vvencapp -i input.y4m --preset slow --qpa on --qp 20 -c yuv420_10 -o output.266\n"})}),"\n",(0,t.jsx)(n.p,{children:"With FFmpeg piping:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ffmpeg -hide_banner -loglevel error -i input.mkv -pix_fmt yuv420p10le -strict -1 -f yuv4mpegpipe - | vvencapp -i - --y4m --preset medium --qpa on --qp 20 -c yuv420_10 -o output.266\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsx)(n.p,{children:"For whatever reason, VVenC currently does not support input resolutions below 540p. Don't know why so ask the devs."})}),"\n",(0,t.jsxs)(n.admonition,{title:"QPA",type:"info",children:[(0,t.jsx)(n.p,{children:'VVenC by default operates with QP (Quantization Parameter), which is basically fixed quality. To enable "CRF-like" mode you need to enable QPA'}),(0,t.jsx)(n.p,{children:"note for nerds: it modifies the QP both in a spatial and temporal manner combined with temporal RDO."})]}),"\n",(0,t.jsx)(n.p,{children:"\xa0\xa0"}),"\n",(0,t.jsx)(n.h2,{id:"muxing",children:"Muxing"}),"\n",(0,t.jsxs)(n.p,{children:["Since VVenC only outputs raw ",(0,t.jsx)(n.code,{children:".266"})," bitstream files, you can't just shove audio and subtitle streams in there. Instead you can remux them using ",(0,t.jsx)(n.a,{href:"https://github.com/gpac/gpac",children:"GPAC MP4Box"})," ",(0,t.jsx)(n.strong,{children:"nightly/beta/git"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You can find all pre-built binaries for Windows, MacOS, and Ubuntu (Linux) right ",(0,t.jsx)(n.a,{href:"https://gpac.wp.imt.fr/downloads/gpac-nightly-builds",children:"here"}),", Arch Linux users can find mp4box/GPAC in the AUR, and those who aren't listed here can find the build instructions ",(0,t.jsx)(n.a,{href:"https://github.com/gpac/gpac/wiki/Build-Introduction",children:"here"}),". It is recommended to do a minimal build since most of the time you don't really need the extra stuff."]}),"\n",(0,t.jsx)(n.p,{children:"\xa0\xa0"}),"\n",(0,t.jsx)(n.h2,{id:"vvdec",children:"VVdeC"}),"\n",(0,t.jsx)(n.p,{children:"VVdeC is the software decoding implementation for decoding/playing VVC files developed by Fraunhofer HHI. All features of the VVC Main10 features are supported."}),"\n",(0,t.jsx)(n.h3,{id:"installation-1",children:"Installation"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arch Linux users:"})," Check AUR."]}),"\n",(0,t.jsx)(n.admonition,{type:"caution",children:(0,t.jsx)(n.p,{children:"Compilation requires CMake"})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"The following build procedure should work across all common operating systems"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/fraunhoferhhi/vvdec.git\ncd vvdec\nmkdir build\ncd build\ncmake .. -DCMAKE_BUILD_TYPE=Release\ncmake --build .\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Binaries will be available in ",(0,t.jsx)(n.code,{children:"bin/release-static/"})]}),"\n",(0,t.jsx)(n.p,{children:"\xa0\xa0"}),"\n",(0,t.jsx)(n.h2,{id:"decoding",children:"Decoding"}),"\n",(0,t.jsxs)(n.p,{children:["There are several ways to decode VVC. One of them made simple by the ",(0,t.jsx)(n.a,{href:"https://github.com/MartinEesmaa/VVCEasy",children:"VVCEasy project"})," by Martin Eesmaa. Or you can try the manual way by piping into several programs, MP4Box beta/nightly/git, VVdeC, and a video player of choice summonable via CLI (MPV, VLC, ffplay) is required"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"mp4box input.mp4 -raw vvc1:output=temp.266 && vvdecapp -v 0 -b temp.266 -o - | ffmpeg -video_size 1920x804 -framerate 24 -pixel_format yuv420p10le -f rawvideo -i - -i input.mp4 -c copy -map 0:v -map 1:a -f nut - | mpv -\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Adjust the ",(0,t.jsx)(n.strong,{children:"double"})," ",(0,t.jsx)(n.code,{children:"input.mp4"}),", ",(0,t.jsx)(n.code,{children:"-video_size"})," for resolution, ",(0,t.jsx)(n.code,{children:"-framerate"}),", ",(0,t.jsx)(n.code,{children:"-pixel_format"}),", and ",(0,t.jsx)(n.code,{children:"mpv"})," (Video player) accordingly, if not then your video will just play garbled glitches."]}),"\n",(0,t.jsx)(n.admonition,{title:"temp.266",type:"info",children:(0,t.jsxs)(n.p,{children:["You might see a new file appearing called ",(0,t.jsx)(n.code,{children:"temp.266"})," upon running the command, do not panic. This is completely normal as ",(0,t.jsx)(n.code,{children:"mp4box"})," needs to output the raw bitstream so ",(0,t.jsx)(n.code,{children:"vvdec"})," will be able to decode it properly."]})})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>r});var t=i(7294);const o={},a=t.createContext(o);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);