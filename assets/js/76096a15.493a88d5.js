"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[8924],{9:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>a});const i=JSON.parse('{"id":"subtitles/SRT","title":"SRT","description":"SubRip Text (SRT) is a text format for subtitles, described as \'the most basic of all subtitle formats\'. SRT files are plain text with the extension .srt.","source":"@site/docs/subtitles/SRT.mdx","sourceDirName":"subtitles","slug":"/subtitles/SRT","permalink":"/docs/subtitles/SRT","draft":false,"unlisted":false,"editUrl":"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/subtitles/SRT.mdx","tags":[],"version":"current","frontMatter":{"title":"SRT"},"sidebar":"tutorialSidebar","previous":{"title":"Mediacodec","permalink":"/docs/encoders_hw/mediacodec"},"next":{"title":"SubStation Alpha","permalink":"/docs/subtitles/SSA"}}');var n=s(4848),r=s(8453);const l={title:"SRT"},o="SRT",c={},a=[{value:"Format",id:"format",level:2},{value:"Unoffical features",id:"unoffical-features",level:3},{value:"Example",id:"example",level:2}];function d(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"srt",children:"SRT"})}),"\n",(0,n.jsxs)(t.p,{children:["SubRip Text (SRT) is a text format for subtitles, described as 'the most basic of all subtitle formats'. SRT files are plain text with the extension ",(0,n.jsx)(t.code,{children:".srt"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"format",children:"Format"}),"\n",(0,n.jsxs)(t.p,{children:["Subtitles are placed into sequentially ordered groups, called cues, with a starting and ending timestamp, encoded ",(0,n.jsx)(t.code,{children:"hours:minutes:seconds,milliseconds"}),". Note the seperator for the millisecond value is a comma. The starting and ending value are seperated by ",(0,n.jsx)(t.code,{children:"--\x3e"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"unoffical-features",children:"Unoffical features"}),"\n",(0,n.jsx)(t.p,{children:"Some basic HTML tags are supported by some viewers, such as:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"<b>bold</b>"})," ",(0,n.jsx)(t.strong,{children:"bold"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"<i>italics</i>"})," ",(0,n.jsx)(t.em,{children:"italics"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"<u></u>"})," underlined"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:'<font color="#0000FF">Blue</font>'})," colored text."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Note these will be displayed verbatim on viewers that don't support these features."}),"\n",(0,n.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"1\n00:00:00,000 --\x3e 00:01:00,000\nThis subtitle will be visible for the first minute of the stream\n\n2\n00:01:00,000 --\x3e 00:01:30,000\nand this one for thirty seconds after that.\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>o});var i=s(6540);const n={},r=i.createContext(n);function l(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);