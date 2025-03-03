"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[8599],{8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>r});var i=o(6540);const n={},s=i.createContext(n);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(s.Provider,{value:t},e.children)}},8922:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"data/brotli","title":"brotli","description":"This section is in need of contributions. If you believe you can help, please see our Contribution Guide to get started as a contributor!","source":"@site/docs/data/brotli.mdx","sourceDirName":"data","slug":"/data/brotli","permalink":"/docs/data/brotli","draft":false,"unlisted":false,"editUrl":"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/data/brotli.mdx","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"brotli","sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"xz","permalink":"/docs/data/xz"},"next":{"title":"zpaq","permalink":"/docs/data/zpaq"}}');var n=o(4848),s=o(8453);const a={title:"brotli",sidebar_position:6},r="Brotli",l={},c=[];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"brotli",children:"Brotli"})}),"\n",(0,n.jsx)(t.admonition,{title:"Help Wanted",type:"danger",children:(0,n.jsxs)(t.p,{children:["This section is in need of contributions. If you believe you can help, please see our ",(0,n.jsx)(t.a,{href:"/docs/contribution-guide",children:"Contribution Guide"})," to get started as a contributor!"]})}),"\n",(0,n.jsxs)(t.p,{children:["Brotli was released by Google in late 2013, & it is commonly used on the Web for content delivery. It is a core part of the ",(0,n.jsx)(t.code,{children:".woff2"})," Web Open Font Format, allowing web fonts to be smaller when sent to users as part of a website. It is not very common to pass around ",(0,n.jsx)(t.code,{children:".tar.br"})," Brotli archives like you would with ",(0,n.jsx)(t.a,{href:"/docs/data/gzip",children:"gzip"})," or ",(0,n.jsx)(t.a,{href:"/docs/data/xz",children:"xz"}),", so it is perfectly acceptable that such files aren't really compatible anywhere. Brotli is almost universally compatible across the Web, supported by as much as 96% of the World Wide Web's users."]}),"\n",(0,n.jsx)(t.p,{children:"Brotli is based on LZ77 & Huffman coding, much like ZIP. It also uses context modeling to allow the use of multiple Huffman trees for the same alphabet in the same block; this essentially means that based on the context of the data being compressed, it can be compressed more efficiently especially if it contains multiple different kinds of data."}),"\n",(0,n.jsxs)(t.p,{children:["Brotli was co-authored & partially developed by Jyrki Alakuijala, who also worked on ",(0,n.jsx)(t.a,{href:"/docs/images/JXL",children:"JPEG-XL"})," & the efficient ",(0,n.jsx)(t.a,{href:"/docs/images/JPEG",children:"JPEG"})," encoder jpegli. JPEG-XL's metadata information is usually Brotli-compressed."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);