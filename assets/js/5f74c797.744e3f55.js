"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[5745],{2464:(e,n,i)=>{i.d(n,{A:()=>j});var r=i(6540),a=i(4164),t=i(52),s=i(6347),o=i(5793),l=i(9025),c=i(4430),d=i(4148);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:i}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:i,attributes:r,default:a}}=e;return{value:n,label:i,attributes:r,default:a}}))}(i);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function p(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:i}=e;const a=(0,s.W6)(),t=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,l.aZ)(t),(0,r.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(a.location.search);n.set(t,e),a.replace({...a.location,search:n.toString()})}),[t,a])]}function g(e){const{defaultValue:n,queryString:i=!1,groupId:a}=e,t=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=i.find((e=>e.default))??i[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:t}))),[c,u]=m({queryString:i,groupId:a}),[g,f]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,t]=(0,d.Dv)(i);return[a,(0,r.useCallback)((e=>{i&&t.set(e)}),[i,t])]}({groupId:a}),v=(()=>{const e=c??g;return p({value:e,tabValues:t})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,t]),tabValues:t}}var f=i(5251);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=i(4848);function b(e){let{className:n,block:i,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),d=e=>{const n=e.currentTarget,i=l.indexOf(n),a=o[i].value;a!==r&&(c(n),s(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;n=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;n=l[i]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":i},n),children:o.map((e=>{let{value:n,label:i,attributes:t}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>{l.push(e)},onKeyDown:u,onClick:d,...t,className:(0,a.A)("tabs__item",v.tabItem,t?.className,{"tabs__item--active":r===n}),children:i??n},n)}))})}function y(e){let{lazy:n,children:i,selectedValue:t}=e;const s=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function w(e){const n=g(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,x.jsx)(b,{...n,...e}),(0,x.jsx)(y,{...n,...e})]})}function j(e){const n=(0,f.A)();return(0,x.jsx)(w,{...e,children:u(e.children)},String(n))}},4345:(e,n,i)=>{i.d(n,{A:()=>s});i(6540);var r=i(4164);const a={tabItem:"tabItem_Ymn6"};var t=i(4848);function s(e){let{children:n,hidden:i,className:s}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:i,children:n})}},8412:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"utilities/av1an","title":"Av1an","description":"Av1an is a video encoding framework. It can increase your encoding speed and improve CPU utilization by running multiple encoder processes in parallel. Target quality, VMAF plotting, and more, available to take advantage for video encoding.","source":"@site/docs/utilities/av1an.mdx","sourceDirName":"utilities","slug":"/utilities/av1an","permalink":"/docs/utilities/av1an","draft":false,"unlisted":false,"editUrl":"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/utilities/av1an.mdx","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Av1an","sidebar_position":2,"templating":true},"sidebar":"tutorialSidebar","previous":{"title":"Aviator","permalink":"/docs/utilities/Aviator"},"next":{"title":"ffmpeg","permalink":"/docs/utilities/ffmpeg"}}');var a=i(4848),t=i(8453),s=i(2464),o=i(4345);const l={title:"Av1an",sidebar_position:2,templating:!0},c="Av1an",d={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Windows",id:"windows",level:3},{value:"Script",id:"script",level:4},{value:"Pre-built Binary",id:"pre-built-binary",level:4},{value:"Compile from Source",id:"compile-from-source",level:4},{value:"macOS",id:"macos",level:3},{value:"Using MacPorts",id:"using-macports",level:4},{value:"Compile from Source",id:"compile-from-source-1",level:4},{value:"Linux",id:"linux",level:3},{value:"Package Managers",id:"package-managers",level:4},{value:"Compile from Source",id:"compile-from-source-2",level:4},{value:"Docker",id:"docker",level:3},{value:"Installing Dependencies",id:"installing-dependencies",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"&quot;Error: The file &#39;XXXXX.ivf&#39; could not be opened for reading: open file error.&quot; with mkvmerge on Linux",id:"error-the-file-xxxxxivf-could-not-be-opened-for-reading-open-file-error-with-mkvmerge-on-linux",level:3},{value:"Gray screen flashing for a single frame in output",id:"gray-screen-flashing-for-a-single-frame-in-output",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"av1an",children:"Av1an"})}),"\n",(0,a.jsxs)("picture",{children:[(0,a.jsx)("source",{srcset:"https://raw.githubusercontent.com/av1-community-contributors/codec-wiki/main/static/img/av1an_96_workers.avif",type:"image/avif"}),(0,a.jsx)("img",{src:"https://autumn.revolt.chat/attachments/K3OhOCAy9bkUCkImek_q3-t6q3zctbn9SbWW-_RI19/av1an_96_workers.webp",alt:"Av1an with 96 workers"})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsx)(n.p,{children:"Av1an is a video encoding framework. It can increase your encoding speed and improve CPU utilization by running multiple encoder processes in parallel. Target quality, VMAF plotting, and more, available to take advantage for video encoding."}),"\n",(0,a.jsx)(n.p,{children:'The only downside to this, is that RAM usage increases significantly with each "worker" you add, so if you have a low amount of RAM (< 8GB), this might not be that useful to you.'}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"Av1an does not ship with any dependencies except for it's Docker image, so you will have to provide them on your own."})}),"\n",(0,a.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(n.p,{children:["You will need Python, ",(0,a.jsx)(n.a,{href:"/docs/utilities/ffmpeg",children:"FFmpeg"})," and ",(0,a.jsx)(n.a,{href:"/docs/filtering/vapoursynth",children:"Vapoursynth"})," to be installed regardless of your current operating system."]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(n.h3,{id:"windows",children:"Windows"}),"\n",(0,a.jsx)(n.h4,{id:"script",children:"Script"}),"\n",(0,a.jsxs)(n.p,{children:["Windows users can use this ",(0,a.jsx)(n.a,{href:"https://github.com/Hishiro64/av1an-win-script",children:"script"})," which installs everything needed in a single portable folder. Do note that you will need to update the dependencies manually once installed."]}),"\n",(0,a.jsx)(n.h4,{id:"pre-built-binary",children:"Pre-built Binary"}),"\n",(0,a.jsxs)(n.p,{children:['Av1an is available as a pre-built binary under the "',(0,a.jsx)(n.a,{href:"https://github.com/master-of-zen/Av1an/releases/tag/latest",children:"latest"}),'" tag on GitHub releases, you can simply download that and place it wherever you want.']}),"\n",(0,a.jsx)(n.h4,{id:"compile-from-source",children:"Compile from Source"}),"\n",(0,a.jsxs)(n.p,{children:["To compile from source, it is easier to use mingw-w64 which comes with ",(0,a.jsx)(n.a,{href:"https://msys2.org",children:"MSYS2"}),". Once installed, open MinGW64 and run the following:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pacman -Syuu; pacman -S cmake git nasm python3 mingw-w64-x86_64-gcc mingw-w64-x86_64-cmake base-devel mingw-w64-x86_64-ffmpeg mingw-w64-x86_64-rust mingw-w64-x86_64-lld mingw-w64-x86_64-clang mingw-w64-x86_64-make\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Then, before you do anything further. Download Vapoursynth ",(0,a.jsx)(n.strong,{children:"portable"})," (",(0,a.jsx)(n.code,{children:"VapourSynth64-Portable-RXX.7z"}),") from its GitHub ",(0,a.jsx)(n.a,{href:"https://github.com/vapoursynth/vapoursynth/releases",children:"release page"}),". Make sure the version you chose is compatible with the current MinGW64 Python version. For example, R65 supports 3.8 and 3.11, the version from Pacman (currently) is 3.11, so you should choose that."]}),"\n",(0,a.jsxs)(n.p,{children:["After downloading, open the 7z file and head to ",(0,a.jsx)(n.code,{children:"\\sdk\\lib64"}),", copy all the libraries from there to MinGW64's ",(0,a.jsx)(n.code,{children:"lib"})," directory, this usually resides in ",(0,a.jsx)(n.code,{children:"C:\\msys64\\mingw64\\lib"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Now finally, resume your session and run the following:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'git clone https://github.com/master-of-zen/Av1an\ncd Av1an\nRUSTFLAGS="-C target-cpu=native" cargo build --release\n'})}),"\n",(0,a.jsxs)(n.p,{children:["The binary will be available in ",(0,a.jsx)(n.code,{children:"C:\\msys64\\home\\USER\\Av1an\\target\\release"}),". The ",(0,a.jsx)(n.code,{children:"USER"})," part is your Windows username."]}),"\n",(0,a.jsx)(n.h3,{id:"macos",children:"macOS"}),"\n",(0,a.jsx)(n.h4,{id:"using-macports",children:"Using MacPorts"}),"\n",(0,a.jsx)(n.p,{children:"Av1an is available in the MacPorts repository, to install just simply run:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"port install av1an\n"})}),"\n",(0,a.jsx)(n.h4,{id:"compile-from-source-1",children:"Compile from Source"}),"\n",(0,a.jsxs)(n.p,{children:["You need to have Git, Nasm, and Rust to be installed first. You can achieve this by using ",(0,a.jsx)(n.a,{href:"https://brew.sh/",children:"Homebrew"})," or similar."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'git clone https://github.com/master-of-zen/Av1an\ncd Av1an\nRUSTFLAGS="-C target-cpu=native" cargo build --release\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Binary is located in ",(0,a.jsx)(n.code,{children:"Av1an/target/release"}),", you can optionally place it somewhere like ",(0,a.jsx)(n.code,{children:"/usr/local/bin"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"linux",children:"Linux"}),"\n",(0,a.jsx)(n.h4,{id:"package-managers",children:"Package Managers"}),"\n",(0,a.jsx)(n.p,{children:"Av1an is available in the package manager of some distributions such as Arch Linux. If not, you can skip to the next part every Linux user is familiar with."}),"\n",(0,a.jsx)(n.h4,{id:"compile-from-source-2",children:"Compile from Source"}),"\n",(0,a.jsx)(n.p,{children:"Just like macOS, you need to have Git, Nasm, and Rust to be installed. Can be achieved by either using your package manager or Rustup for Rust."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'git clone https://github.com/master-of-zen/Av1an.git\ncd Av1an\nRUSTFLAGS="-C target-cpu=native" cargo build --release\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Binary is located in ",(0,a.jsx)(n.code,{children:"Av1an/target/release"}),", you can optionally place it somewhere like ",(0,a.jsx)(n.code,{children:"/usr/local/bin"})," or ",(0,a.jsx)(n.code,{children:"/usr/bin"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"docker",children:"Docker"}),"\n",(0,a.jsx)(n.p,{children:"The following examples assume the file you want to encode is in your current working directory."}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(o.A,{value:"windows",label:"Windows",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'docker run --privileged -v "$(pwd):/videos" --user $(id -u):$(id -g) -it --rm masterofzen/av1an:latest -i S01E01.mkv {options}\n'})})}),(0,a.jsx)(o.A,{value:"linux",label:"Linux",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'docker run --privileged -v "${PWD}:/videos" -it --rm masterofzen/av1an:latest -i S01E01.mkv {options}\n'})})}),(0,a.jsxs)(o.A,{value:"build",label:"Manual Build",children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'docker build -t "av1an" .\n'})}),(0,a.jsx)(n.p,{children:"Run in the root directory of the repository. The dependencies will automatically be installed into the image, no manual installations necessary."})]})]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsx)(n.p,{children:"To specify a different directory to use you would replace $(pwd) with the directory"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'docker run --privileged -v "/c/Users/masterofzen/Videos":/videos --user $(id -u):$(id -g) -it --rm masterofzen/av1an:latest -i S01E01.mkv {options}\n'})}),(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"--user"})," flag is required on Linux to avoid permission issues with the docker container not being able to write to the location, if you get permission issues ensure your user has access to the folder that you are using to encode."]})]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"The Docker image ships with the default dependencies."})}),"\n",(0,a.jsx)(n.h2,{id:"installing-dependencies",children:"Installing Dependencies"}),"\n",(0,a.jsx)(n.p,{children:"You will need a chunk method installed as the built-in ones are very slow."}),"\n",(0,a.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,a.jsx)(n.h3,{id:"error-the-file-xxxxxivf-could-not-be-opened-for-reading-open-file-error-with-mkvmerge-on-linux",children:"\"Error: The file 'XXXXX.ivf' could not be opened for reading: open file error.\" with mkvmerge on Linux"}),"\n",(0,a.jsxs)(n.p,{children:["Since mkvmerge opens all the encoded chunks at once, this obviously hits the default open file descriptor limit of 1024 on longer videos.\nYou can temporarily increase it with ",(0,a.jsx)(n.code,{children:"ulimit -n 20000"})," to allow opening 20,000 files at once in that session."]}),"\n",(0,a.jsx)(n.h3,{id:"gray-screen-flashing-for-a-single-frame-in-output",children:"Gray screen flashing for a single frame in output"}),"\n",(0,a.jsx)(n.p,{children:"This is a unique problem with Av1an. Since Av1an does random seeking for chunks, traditional keyframe-based decoding methods\nsuch as L-SMASH and FFMS2 may fail and result in a gray frame. There are currently only two known methods to solve this:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Create a lossless intermediary with x264 ",(0,a.jsx)(n.code,{children:"-qp 0"}),", this always fixes all related seeking issues but will result in a huge file due to it's lossless nature."]}),"\n",(0,a.jsxs)(n.li,{children:["Using a linear-decoding chunk method such as ",(0,a.jsx)(n.code,{children:"bestsource"}),", the downside to this is it's mega slow. Tests shown encode speeds drop by a whopping 10-15x slower."]}),"\n",(0,a.jsxs)(n.li,{children:["Using ",(0,a.jsx)(n.code,{children:"dgdecnv"})," chunk method. ",(0,a.jsx)(n.code,{children:"dgdecnv"})," and ",(0,a.jsx)(n.code,{children:"DGIndexNV"}),' is a proprietary CUVID-accelerated Vapoursynth "Source" decoder created by ',(0,a.jsx)(n.a,{href:"https://www.rationalqm.us/",children:"Donald Alan Graft"})," where ",(0,a.jsx)(n.code,{children:"DGIndexNV"})," is the standalone program for seeking and ",(0,a.jsx)(n.code,{children:"dgdecnv"})," is the Vapoursynth plugin itself.\nIt is especially made with random seeking in mind which makes it perfect for Av1an. Only downside is you need an NVIDIA GPU and ",(0,a.jsx)(n.code,{children:"DGIndexNV"})," only supports x86_64 platforms."]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>o});var r=i(6540);const a={},t=r.createContext(a);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);