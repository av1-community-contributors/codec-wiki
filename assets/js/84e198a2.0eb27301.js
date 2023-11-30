"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[5385],{1161:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>r});var n=t(5893),o=t(1151);const a={label:"eac3to",sidebar_position:8},s="eac3to",l={id:"utilities/eac3to",title:"eac3to",description:"eac3to is a command line tool written by madshi to mostly work with audios (conversion) and raw, unencrypted Blu-rays (BDMV).",source:"@site/docs/utilities/eac3to.mdx",sourceDirName:"utilities",slug:"/utilities/eac3to",permalink:"/docs/utilities/eac3to",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/utilities/eac3to.mdx",tags:[],version:"current",sidebarPosition:8,frontMatter:{label:"eac3to",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"hdr10plus_tool",permalink:"/docs/utilities/hdr10plus_tool"},next:{title:"FFmpeg",permalink:"/docs/utilities/ffmpeg"}},d={},r=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Audio conversion",id:"audio-conversion",level:3},{value:"Get BDMV info",id:"get-bdmv-info",level:3},{value:"Demux",id:"demux",level:3},{value:"Delay audio",id:"delay-audio",level:3}];function c(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"eac3to",children:"eac3to"}),"\n",(0,n.jsx)(i.p,{children:"eac3to is a command line tool written by madshi to mostly work with audios (conversion) and raw, unencrypted Blu-rays (BDMV)."}),"\n",(0,n.jsx)(i.admonition,{title:"Compatibility",type:"info",children:(0,n.jsx)(i.p,{children:"This is a Windows only software, although usage with Wine is possible."})}),"\n",(0,n.jsx)(i.admonition,{title:"Avoid using when possible",type:"caution",children:(0,n.jsxs)(i.p,{children:["There is absolutely no reason whatsoever to use this software unless required by paleolithic ",(0,n.jsx)(i.a,{href:"https://wiki.installgentoo.com/wiki/Private_trackers",children:"private trackers"}),", due to a bajillion dependencies needed that aren't bundled with the download itself. Use something like FFmpeg instead."]})}),"\n",(0,n.jsx)(i.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Download from ",(0,n.jsx)(i.a,{href:"https://www.videohelp.com/software/eac3to",children:"VideoHelp"}),", drag and drop into your designated folder, add to PATH when necessary."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(i.h3,{id:"audio-conversion",children:"Audio conversion"}),"\n",(0,n.jsx)(i.p,{children:"Examples:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"eac3to source.pcm destination.flac\n"})}),"\n",(0,n.jsx)(i.p,{children:"(Convert PCM audio to FLAC)"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"eac3to source.thd destination.flac destination.ac3\n"})}),"\n",(0,n.jsx)(i.p,{children:"(Convert TrueHD to FLAC while also extracting the AC-3 compatibility layer)"}),"\n",(0,n.jsx)(i.h3,{id:"get-bdmv-info",children:"Get BDMV info"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"eac3to Movie.2024.Bluray/BDMV\n"})}),"\n",(0,n.jsx)(i.h3,{id:"demux",children:"Demux"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"eac3to Movie.2024.Bluray/BDMV -demux\n"})}),"\n",(0,n.jsx)(i.h3,{id:"delay-audio",children:"Delay audio"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-bash",children:"eac3to input.eac3 output.eac3 1000ms\n"})})]})}function u(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,i,t)=>{t.d(i,{Z:()=>l,a:()=>s});var n=t(7294);const o={},a=n.createContext(o);function s(e){const i=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:i},e.children)}}}]);