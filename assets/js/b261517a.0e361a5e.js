"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[1454],{1165:(e,t,i)=>{i.d(t,{Ck:()=>m,kS:()=>v});var s=i(4848),o=i(8453),a=i(6540),r=i(4016),n=i(3517),l=i(3343),c=i(3864),d=i(8633),p=i(363);const m=({imageData:e,pixelsAbove:t,pixelsBelow:i})=>{const a={div:"div",...(0,o.R)()},c=({currentSlide:e,direction:t,slideCount:i,...o})=>"left"===t?(0,s.jsx)(d.A,{...o,style:{color:"#fff",fontSize:24,width:24,height:24,zIndex:1,left:10}}):(0,s.jsx)(p.A,{...o,style:{color:"#fff",fontSize:24,width:24,height:24,zIndex:1,right:10}});return(!t||t<0)&&(t=0),(!i||i<0)&&(i=0),(0,s.jsxs)(r.A,{justify:"space-between",vertical:!0,children:[(0,s.jsx)(a.div,{style:{height:`${t}px`}}),(0,s.jsx)(n.A,{arrows:!0,prevArrow:(0,s.jsx)(c,{direction:"left"}),nextArrow:(0,s.jsx)(c,{direction:"right"}),children:e.map((e=>(0,s.jsx)(l.A,{src:e.src},e.src)))}),(0,s.jsx)(a.div,{style:{height:`${i}px`}})]})},v=({tabMap:e,pixelsAbove:t,pixelsBelow:i})=>{const n={div:"div",...(0,o.R)()},[l,d]=(0,a.useState)(Object.keys(e)[0]);return(!t||t<0)&&(t=0),(!i||i<0)&&(i=0),(0,s.jsxs)(r.A,{justify:"space-between",vertical:!0,children:[(0,s.jsx)(n.div,{style:{height:`${t}px`}}),(0,s.jsx)(c.A,{tabList:Object.entries(e).map((([e,t])=>({key:e,label:t.label}))),activeTabKey:l,onTabChange:e=>{d(e)},children:e[l].component}),(0,s.jsx)(n.div,{style:{height:`${i}px`}})]})}},3165:e=>{e.exports=JSON.parse('{"permalink":"/blog/svt-av1-second-deep-dive","source":"@site/blog/2024-05-19-svt-av1-deep-dive2-v2-1-0.mdx","title":"Observing SVT-AV1 v2.1.0\'s improvements: A New Deep Dive","description":"SVT-AV1 2.1.0 just released, how does it compare to the previous version?","date":"2024-05-19T00:00:00.000Z","tags":[{"inline":true,"label":"video","permalink":"/blog/tags/video"},{"inline":true,"label":"compression","permalink":"/blog/tags/compression"},{"inline":true,"label":"benchmarks","permalink":"/blog/tags/benchmarks"}],"readingTime":35.07,"hasTruncateMarker":true,"authors":[{"name":"Trix","title":"Encoder","url":"https://github.com/trixoniisama/","image_url":"https://avatars.githubusercontent.com/u/93526043","imageURL":"https://avatars.githubusercontent.com/u/93526043","socials":{},"key":null,"page":null}],"frontMatter":{"title":"Observing SVT-AV1 v2.1.0\'s improvements: A New Deep Dive","description":"SVT-AV1 2.1.0 just released, how does it compare to the previous version?","slug":"svt-av1-second-deep-dive","authors":[{"name":"Trix","title":"Encoder","url":"https://github.com/trixoniisama/","image_url":"https://avatars.githubusercontent.com/u/93526043","imageURL":"https://avatars.githubusercontent.com/u/93526043"}],"tags":["video","compression","benchmarks"],"image":"/img/svt-2.1.0-testing-blog-image.webp","hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"AV1 for Dummies","permalink":"/blog/av1-for-dummies"},"nextItem":{"title":"Encoding Animation with SVT-AV1: A Deep Dive","permalink":"/blog/svt-av1-deep-dive"}}')},7390:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var s=i(3165),o=i(4848),a=i(8453);i(1165);const r={title:"Observing SVT-AV1 v2.1.0's improvements: A New Deep Dive",description:"SVT-AV1 2.1.0 just released, how does it compare to the previous version?",slug:"svt-av1-second-deep-dive",authors:[{name:"Trix",title:"Encoder",url:"https://github.com/trixoniisama/",image_url:"https://avatars.githubusercontent.com/u/93526043"}],tags:["video","compression","benchmarks"],image:"/img/svt-2.1.0-testing-blog-image.webp",hide_table_of_contents:!1},n="Introduction",l={authorsImageUrls:[void 0]},c=[];function d(e){const t={p:"p",...(0,a.R)(),...e.components};return(0,o.jsx)(t.p,{children:"SVT-AV1, the most scalable AV1 encoder, has received a new update and one may wonder if the old presets recommendation still holds today. We will delve into that in this blog post, based on a series of speed and visual quality benchmarks with SSIMULACRA2 and XPSNR of SVT-AV1 2.1.0 on a corpus of varied animated clips."})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}}}]);