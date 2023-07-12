"use strict";(self.webpackChunkav1_wiki=self.webpackChunkav1_wiki||[]).push([[9060],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(a),u=o,h=p["".concat(s,".").concat(u)]||p[u]||d[u]||i;return a?n.createElement(h,r(r({ref:t},m),{},{components:a})):n.createElement(h,r({ref:t},m))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4901:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const i={title:"aomenc",sidebar_position:3},r="aomenc",l={unversionedId:"encoders/aomenc",id:"encoders/aomenc",title:"aomenc",description:"aomenc or libaom is a command line application for encoding AV1 written in C and Assembly developed by AOMedia, which is also the reference encoder for AV1.",source:"@site/docs/encoders/aomenc.md",sourceDirName:"encoders",slug:"/encoders/aomenc",permalink:"/av1-wiki.github.io/docs/encoders/aomenc",draft:!1,editUrl:"https://github.com/av1-community-contributors/av1-wiki.github.io/tree/main/docs/encoders/aomenc.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"aomenc",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"x265",permalink:"/av1-wiki.github.io/docs/encoders/x265"},next:{title:"vpxenc",permalink:"/av1-wiki.github.io/docs/encoders/vpxenc"}},s={},c=[{value:"Choosing forks",id:"choosing-forks",level:2},{value:"FFmpeg",id:"ffmpeg",level:2},{value:"Installation",id:"installation",level:2},{value:"Microsoft Windows",id:"microsoft-windows",level:3},{value:"MacOS",id:"macos",level:3},{value:"Linux",id:"linux",level:3},{value:"Usage",id:"usage",level:2}],m={toc:c},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aomenc"},"aomenc"),(0,o.kt)("p",null,"aomenc or ",(0,o.kt)("strong",{parentName:"p"},"libaom")," is a command line application for encoding AV1 written in C and Assembly developed by AOMedia, which is also the reference encoder for AV1."),(0,o.kt)("h2",{id:"choosing-forks"},"Choosing forks"),(0,o.kt)("p",null,'Mainline aomenc is unfortunately not good, as it suffers from bad defaults, heavy focus on PSNR which reduces its psycho-visual capabilities, clickbait (or should I call, "usebait") settings that does X instead of Y, among others. Fortunately two forks were created to combat these, first there\'s ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/BlueSwordM/aom-av1-psy"},"aom-av1-psy")," which was created by BlueSwordM. But it is no longer maintained as of 13th January 2023, another fork called ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Clybius/aom-av1-lavish"},"aom-av1-lavish")," was then created off of it by Clybius to continue on the legacy."),(0,o.kt)("p",null,"These forks fix up the horrid decisions made by the original AOM devs and most importantly introduce new parameters and tunes to help fine tune (haha get it? sorry ill see myself out) the encoder more. TL;DR use ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Clybius/aom-av1-lavish"},"aom-av1-lavish")),(0,o.kt)("h2",{id:"ffmpeg"},"FFmpeg"),(0,o.kt)("p",null,"aomenc is available in FFmpeg via ",(0,o.kt)("inlineCode",{parentName:"p"},"libaom-av1"),", check if you have it by running ",(0,o.kt)("inlineCode",{parentName:"p"},"ffmpeg -h encoder=libaom-av1"),". You can input non-FFmpeg standard aomenc parameters via ",(0,o.kt)("inlineCode",{parentName:"p"},"-aom-params"),"."),(0,o.kt)("admonition",{title:"Mainline aomenc",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Since FFmpeg encoder libraries come as the most default, barebones as possible (Therefore mainline aomenc), it is not recommended to use it. Unless you build it yourself.")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("h3",{id:"microsoft-windows"},"Microsoft Windows"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The Easy Way:")," Download the pre-built versions, which can be found below:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cdn.discordapp.com/attachments/1042536514783023124/1069212358989336626/aomenc-skylake.7z"},"Skylake build")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://cdn.discordapp.com/attachments/1042536514783023124/1069198775899398234/aomenc.7z"},"Zen 2 build")),(0,o.kt)("admonition",{title:"Updating and compiling",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Join the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/vpREHAvYvh"},"AV1 Discord server")," and head to #community-builds for updated versions, you can opt to compile it yourself with those custom (Butteraugli, VMAF) tunes but its a huge PITA on Windows.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The Compiling Route:")),(0,o.kt)("p",null,"Tools needed: Visual Studio (Any), Git, CMake, nasm (or yasm for 32bit)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/Clybius/aom-av1-lavish -b Endless_Merging\ncd aom-av1-lavish && mkdir -p aom_build && cd aom_build\ncmake .. -DBUILD_SHARED_LIBS=0 -DENABLE_DOCS=0 -DCONFIG_TUNE_BUTTERAUGLI=0 -DCONFIG_TUNE_VMAF=0 -DCONFIG_AV1_DECODER=0 -DENABLE_TESTS=0 -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-flto -O3 -march=native" -DCMAKE_C_FLAGS="-flto -O3 -march=native -pipe -fno-plt" -DCMAKE_LD_FLAGS="-flto -O3 -march=native"\ncmake --build . -j 16\n')),(0,o.kt)("p",null,'Built files should be in the "Debug" folder'),(0,o.kt)("h3",{id:"macos"},"MacOS"),(0,o.kt)("p",null,"To be filled. Maybe try the Linux route?"),(0,o.kt)("h3",{id:"linux"},"Linux"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The Easy Way:"),"\nInstall ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gianni-rosato/aviator"},"Aviator"),", it is currently only available as a ",(0,o.kt)("a",{parentName:"p",href:"https://beta.flathub.org/apps/net.natesales.Aviator"},"Flatpak"),"\nor\nInstall ",(0,o.kt)("a",{parentName:"p",href:"https://giannirosato.com/blog/post/aviator-1/"},"rAV1ator"),", basically same thing but av1an + rav1e"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Aviator ships with SVT-AV1 and rAV1ator with rav1e instead of Aomenc/AOM-AV1.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The compiling route:"),"\nYou know what to do, so I'll just list the things you'll need: ",(0,o.kt)("inlineCode",{parentName:"p"},"Vapoursynth, Av1an, FFmpeg, mkvtoolnix, Git, Perl, CMake, Ninja, Meson, Nasm, Rust (USE RUSTUP ON DEBIAN/UBUNTU), Highway (libhwy)")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Compiling aom-av1-lavish (Basic, recommended for beginners)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/Clybius/aom-av1-lavish -b Endless_Merging\ncd aom-av1-lavish && mkdir -p aom_build && cd aom_build\ncmake .. -DBUILD_SHARED_LIBS=0 -DENABLE_DOCS=0 -DCONFIG_TUNE_BUTTERAUGLI=0 -DCONFIG_TUNE_VMAF=0 -DCONFIG_AV1_DECODER=0 -DENABLE_TESTS=0 -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-flto -O3 -march=native" -DCMAKE_C_FLAGS="-flto -O3 -march=native -pipe -fno-plt" -DCMAKE_LD_FLAGS="-flto -O3 -march=native"\nmake -j$(nproc)\nsudo make install\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Compiling aom-av1-lavish (Full)")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"VMAF shenanigans")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/Netflix/vmaf\ncd vmaf/libvmaf && mkdir build && cd build\nmeson .. --buildtype=release --default-library=both -Db_lto=true -Dc_args="-march=native" -Dcpp_args="-march=native" && ninja\nsudo ninja install\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Copy VMAF models (Assuming user cloned in $HOME)")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo cp -r /home/$USER/vmaf/model /usr/share\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Install libjxl libraries")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/libjxl/libjxl && cd libjxl && chmod +x deps.sh && ./deps.sh\nmkdir build && cd build\ncmake -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-O3 -march=native" -DCMAKE_C_FLAGS="-O3 -march=native" -DJPEGXL_ENABLE_PLUGINS=ON -DJPEGXL_ENABLE_DEVTOOLS=ON -DJPEGXL_WARNINGS_AS_ERRORS=OFF -DJPEGXL_ENABLE_SJPEG=OFF  .. && cmake --build . -- -j$(nproc)\nsudo make install\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Install aom-av1-lavish")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/Clybius/aom-av1-lavish -b Endless_Merging\ncd aom-av1-lavish && mkdir -p aom_build && cd aom_build\ncmake .. -DBUILD_SHARED_LIBS=0 -DENABLE_DOCS=0 -DCONFIG_TUNE_BUTTERAUGLI=1 -DCONFIG_TUNE_VMAF=1 -DCONFIG_AV1_DECODER=0 -DENABLE_TESTS=0 -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-flto -O3 -march=native" -DCMAKE_C_FLAGS="-flto -O3 -march=native -pipe -fno-plt" -DCMAKE_LD_FLAGS="-flto -O3 -march=native"\nmake -j$(nproc)\nsudo make install\n')),(0,o.kt)("admonition",{title:"Branches",type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"Endless_Butter")," used to be bleeding edge but now it's been taken over by ",(0,o.kt)("inlineCode",{parentName:"p"},"Endless_Merging"),".")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"the"))}d.isMDXComponent=!0}}]);