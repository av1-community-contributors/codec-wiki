"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[4598],{4893:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"metrics/PSNR","title":"PSNR","description":"PSNR (Peak Signal-to-Noise Ratio) is one of the most widely used objective full-reference image and video quality metrics. It measures the ratio between the maximum possible signal power and the power of corrupting noise, expressed in decibels (dB). The metric is calculated using the Mean Squared Error (MSE) between a reference image and a distorted image. The theory and math behind PSNR are well covered in Wikipedia\'s PSNR entry.","source":"@site/docs/metrics/PSNR.mdx","sourceDirName":"metrics","slug":"/metrics/PSNR","permalink":"/docs/metrics/PSNR","draft":false,"unlisted":false,"editUrl":"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/metrics/PSNR.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"PSNR","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"autocompressor","permalink":"/docs/utilities/autocompressor"},"next":{"title":"SSIM","permalink":"/docs/metrics/SSIM"}}');var n=t(4848),o=t(8453);const a={title:"PSNR",sidebar_position:1},r="PSNR",c={},d=[{value:"Video Compression",id:"video-compression",level:2},{value:"Inside Video Encoders",id:"inside-video-encoders",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Practical Use Cases",id:"practical-use-cases",level:2}];function l(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"psnr",children:"PSNR"})}),"\n",(0,n.jsxs)(i.p,{children:["PSNR (Peak Signal-to-Noise Ratio) is one of the most widely used objective full-reference image and video quality metrics. It measures the ratio between the maximum possible signal power and the power of corrupting noise, expressed in decibels (dB). The metric is calculated using the Mean Squared Error (MSE) between a reference image and a distorted image. The theory and math behind PSNR are well covered in ",(0,n.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/Peak_signal-to-noise_ratio",children:"Wikipedia's PSNR entry"}),"."]}),"\n",(0,n.jsx)(i.h2,{id:"video-compression",children:"Video Compression"}),"\n",(0,n.jsx)(i.p,{children:"PSNR is widely used in video encoding applications because it is fast to compute, making it practical for real-time encoding decisions, and because it provides a consistent mathematical basis for comparing different encoding approaches. It is also used within video encoders to help make compression decisions."}),"\n",(0,n.jsx)(i.h3,{id:"inside-video-encoders",children:"Inside Video Encoders"}),"\n",(0,n.jsx)(i.p,{children:"Within video encoders, PSNR plays a crucial role in rate-distortion optimization (RDO), which is the process of finding the optimal balance between bitrate and quality. Encoders use PSNR as an in-loop metric when evaluating different encoding decisions, such as mode selection, motion estimation, and quantization parameter (QP) selection."}),"\n",(0,n.jsx)(i.p,{children:"For example, when deciding between different prediction modes or block sizes, the encoder will calculate the PSNR impact of each option along with its bit cost to determine the best choice."}),"\n",(0,n.jsx)(i.h3,{id:"limitations",children:"Limitations"}),"\n",(0,n.jsxs)(i.p,{children:["While PSNR is widely used due to its simplicity and computational efficiency, it has several notable limitations. The metric has notoriously poor correlation with the human eye's perception of quality, as PSNR is highly sensitive to all pixel-level errors when many do not have any perceptually relevant impact. When PSNR is used to inform RDO in video encoding, it can lead to suboptimal quality decisions; to combat this, encoders have to creatively take the human visual system into account. We cover some of this in the ",(0,n.jsx)(i.a,{href:"/docs/introduction/psychovisual",children:"Psychovisual entry"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["PSNR's weaknesses as a full reference distortion metric have led to the development of more advanced metrics like ",(0,n.jsx)(i.a,{href:"/docs/metrics/SSIM",children:"SSIM"}),", ",(0,n.jsx)(i.a,{href:"/docs/metrics/VMAF",children:"VMAF"}),", and ",(0,n.jsx)(i.a,{href:"/docs/metrics/XPSNR",children:"XPSNR"}),", which attempt to better model human visual perception."]}),"\n",(0,n.jsx)(i.h2,{id:"practical-use-cases",children:"Practical Use Cases"}),"\n",(0,n.jsx)(i.p,{children:"PSNR is commonly used for evaluating image and video compression algorithms, assessing streaming quality, comparing codec performance, and more. Many video encoding tools and analysis suites report PSNR values for different luma/chroma components (Y, U, V) separately, as well as a weighted average. Despite its limitations, PSNR continues to be an important tool in the video compression field, particularly when used in conjunction with other quality metrics and subjective evaluation methods."})]})}function m(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>r});var s=t(6540);const n={},o=s.createContext(n);function a(e){const i=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(o.Provider,{value:i},e.children)}}}]);