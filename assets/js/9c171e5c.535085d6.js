"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[8773],{4060:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"metrics/SSIM","title":"SSIM","description":"The Structural Similarity Index Measure (SSIM) is a full-reference image and video quality metric that quantifies image fidelity degradation caused by processing such as lossy compression. Published in 2004 as part of an issue of IEEE Transactions on Image Processing, SSIM attempts to address the limitations of traditional metrics like Peak Signal-to-Noise Ratio (PSNR) by evaluating visual quality based on the structural information that humans naturally use to assess visual quality.","source":"@site/docs/metrics/SSIM.mdx","sourceDirName":"metrics","slug":"/metrics/SSIM","permalink":"/docs/metrics/SSIM","draft":false,"unlisted":false,"editUrl":"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/metrics/SSIM.mdx","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"SSIM","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"PSNR","permalink":"/docs/metrics/PSNR"},"next":{"title":"SSIMULACRA2","permalink":"/docs/metrics/SSIMULACRA2"}}');var a=t(4848),n=t(8453);const r={title:"SSIM",sidebar_position:1},o="SSIM",c={},l=[{value:"Overview",id:"overview",level:2},{value:"Limitations",id:"limitations",level:2}];function d(e){const i={a:"a",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.header,{children:(0,a.jsx)(i.h1,{id:"ssim",children:"SSIM"})}),"\n",(0,a.jsxs)(i.p,{children:["The Structural Similarity Index Measure (SSIM) is a full-reference image and video quality metric that quantifies image fidelity degradation caused by processing such as lossy compression. Published in 2004 as part of an issue of ",(0,a.jsx)(i.a,{href:"https://en.wikipedia.org/wiki/IEEE_Transactions_on_Image_Processing",children:(0,a.jsx)(i.em,{children:"IEEE Transactions on Image Processing"})}),", SSIM attempts to address the limitations of traditional metrics like ",(0,a.jsx)(i.a,{href:"/docs/metrics/PSNR",children:"Peak Signal-to-Noise Ratio (PSNR)"})," by evaluating visual quality based on the structural information that humans naturally use to assess visual quality."]}),"\n",(0,a.jsx)(i.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(i.p,{children:"SSIM works by comparing three key elements between the original and processed images: luminance, contrast, and structure. The luminance comparison measures the similarity of the average pixel intensities between the two images. These three comparisons are combined to produce a single similarity score ranging from -1 to 1, where 1 indicates perfect structural similarity."}),"\n",(0,a.jsx)(i.p,{children:"One of SSIM's main advantages is its ability to better align with human visual perception compared to traditional metrics. SSIM recognizes that pixels have strong inter-dependencies, especially when they are spatially close, which makes SSIM particularly effective at detecting changes in structural information that human observers would notice, such as blurring, blocking artifacts, or noise."}),"\n",(0,a.jsxs)(i.p,{children:["As an in-loop metric in video encoders to improve decisionmaking, SSIM is more computationally expensive than PSNR, and doesn't always yield drastic improvements in fidelity per bit. ",(0,a.jsx)(i.a,{href:"/docs/introduction/psychovisual",children:"Psychovisual"})," encoder options are still necessary in many cases to achieve the best perceptual efficiency."]}),"\n",(0,a.jsx)(i.h2,{id:"limitations",children:"Limitations"}),"\n",(0,a.jsxs)(i.p,{children:["In multimedia compression, SSIM can be more valuable in optimization scenarios where the goal is to maintain optimal perceptual quality for a given size. However, SSIM doesn't perfectly correlate with the human visual system; newer metrics like ",(0,a.jsx)(i.a,{href:"/docs/metrics/XPSNR",children:"XPSNR"})," and ",(0,a.jsx)(i.a,{href:"/docs/metrics/SSIMULACRA2",children:"SSIMULACRA2"})," have been developed to correlate more closely with human perception. Modern variations and extensions of SSIM have been developed to address specific needs. Multi-scale SSIM (MS-SSIM) evaluates images at different scales to better match human visual perception. Color SSIM variants have been proposed to better handle color information, and SSIMULACRA (succeeded by SSIMULACRA2) was developed to improve correlation with human perception. These adaptations have improved upon SSIM's perceptual goals in an ever-changing multimedia compression landscape."]})]})}function m(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,i,t)=>{t.d(i,{R:()=>r,x:()=>o});var s=t(6540);const a={},n=s.createContext(a);function r(e){const i=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(n.Provider,{value:i},e.children)}}}]);