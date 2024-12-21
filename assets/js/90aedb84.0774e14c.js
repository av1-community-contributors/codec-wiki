"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[1691],{829:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"introduction/psychovisual","title":"Psychovisual","description":"The content in this entry is incomplete & is in the process of being completed.","source":"@site/docs/introduction/psychovisual.mdx","sourceDirName":"introduction","slug":"/introduction/psychovisual","permalink":"/docs/introduction/psychovisual","draft":false,"unlisted":false,"editUrl":"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/introduction/psychovisual.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Spotting Video Artifacts","permalink":"/docs/introduction/video-artifacts"},"next":{"title":"High Dynamic Range","permalink":"/docs/introduction/high-dynamic-range"}}');var o=n(4848),s=n(8453);const r={sidebar_position:5},a="Psychovisual",l={},c=[{value:"Definition",id:"definition",level:2},{value:"Explanation",id:"explanation",level:2},{value:"Fidelity Versus Appeal",id:"fidelity-versus-appeal",level:3},{value:"Psychovisual Options",id:"psychovisual-options",level:3},{value:"Metrics",id:"metrics",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.header,{children:(0,o.jsx)(i.h1,{id:"psychovisual",children:"Psychovisual"})}),"\n",(0,o.jsx)(i.admonition,{title:"Under Maintenance",type:"info",children:(0,o.jsx)(i.p,{children:"The content in this entry is incomplete & is in the process of being completed."})}),"\n",(0,o.jsx)(i.h2,{id:"definition",children:"Definition"}),"\n",(0,o.jsx)(i.p,{children:'"Psychovisual fidelity" is a common term used in video encoding to describe the quality of an encoded video as perceived by the human visual system. It has a number of alternate terms that mean the same thing:'}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:'"Perceptual quality"'}),"\n",(0,o.jsx)(i.li,{children:'"Subjective quality"'}),"\n",(0,o.jsx)(i.li,{children:'"Visual quality"'}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["Psychovisual options are introduced into encoders to combat the limitations of traditional decision-making inside video encoders, which tends to prioritize efficiency as measured by simple metrics like ",(0,o.jsx)(i.a,{href:"/docs/metrics/PSNR",children:"PSNR"}),"."]}),"\n",(0,o.jsxs)(i.p,{children:["The amount of care and attention an encoder directs towards preserving psychovisual fidelity is often indicative of an encoder's maturity, and is a key reason why mature encoders like ",(0,o.jsx)(i.a,{href:"/docs/encoders/x264",children:"x264"})," and ",(0,o.jsx)(i.a,{href:"/docs/encoders/x265",children:"x265"})," are so widely regarded as being well-designed and effective."]}),"\n",(0,o.jsx)(i.h2,{id:"explanation",children:"Explanation"}),"\n",(0,o.jsxs)(i.p,{children:["Via the ",(0,o.jsx)(i.a,{href:"https://x265.readthedocs.io/en/master/cli.html#psycho-visual-options",children:"x265 documentation"}),":"]}),"\n",(0,o.jsxs)(i.blockquote,{children:["\n",(0,o.jsx)(i.p,{children:"Left to its own devices, video encoders will make mode decisions based on a simple rate distortion formula, trading distortion for bitrate. This is generally effective except for the manner in which this distortion is measured. It tends to favor blurred reconstructed blocks over blocks which have wrong motion. The human eye generally prefers the wrong motion over the blur and thus x265 offers psycho-visual adjustments to the rate distortion algorithm."}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["An important concept that is essential to understanding psychovisual fidelity is the idea behind ",(0,o.jsx)(i.em,{children:"visual energy"}),". While the x265 documentation snippet above correctly identifies that the human eye prefers wrong motion over blur, a similar concept applies in the case of detail preservation. The human eye is more forgiving in the presence of detail \u2013 even if it is wrong detail \u2013 than in the presence of blur due to our preference for visual energy. Psychovisual options are often tailored to preserving visual energy in the encoded video."]}),"\n",(0,o.jsx)(i.h3,{id:"fidelity-versus-appeal",children:"Fidelity Versus Appeal"}),"\n",(0,o.jsxs)(i.p,{children:["Via ",(0,o.jsx)(i.a,{href:"https://cloudinary.com/blog/what_to_focus_on_in_image_compression_fidelity_or_appeal",children:"Cloudinary's blog"}),":"]}),"\n",(0,o.jsxs)(i.blockquote,{children:["\n",(0,o.jsx)(i.p,{children:"Fidelity in images is about visually preserving the original; appeal is about hiding the compression artifacts. Depending on your priority, you would compress images with either of these approaches to reduce the file size while still maintaining a reasonable level of visual \u201cquality\u201d ..."}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["Many people report that they prefer blurring in videos over blocking artifacts, which is a conflation of the value of fidelity versus appeal. While blurring can be beneficial at lower bitrates to help reduce the visibility of blocking artifacts, it is generally preferable to view a slightly blurry image rather than a blocky one with ",(0,o.jsx)(i.em,{children:"distracting"})," artifacts. This underscores how essential it is to strike a balance with psychovisual options in encoders; heavily utilizing these settings can negatively effect visual quality in certain scenarios, like when encoding at low fidelity where artifacts would be erroneous enough that they would be distracting."]}),"\n",(0,o.jsx)(i.h3,{id:"psychovisual-options",children:"Psychovisual Options"}),"\n",(0,o.jsx)(i.p,{children:"The following are some common psychovisual options that are available in x265, from the x265 documentation linked prior:"}),"\n",(0,o.jsxs)(i.blockquote,{children:["\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.code,{children:"--psy-rd"})," will add an extra cost to reconstructed blocks which do not match the visual energy of the source block. The higher the strength of ",(0,o.jsx)(i.code,{children:"--psy-rd"})," the more strongly it will favor similar energy over blur and the more aggressively it will ignore rate distortion. If it is too high, it will introduce visual artifacts and increase bitrate enough for rate control to increase quantization globally, reducing overall quality. psy-rd will tend to reduce the use of blurred prediction modes, like DC and planar intra and bi-directional inter prediction."]}),"\n"]}),"\n",(0,o.jsxs)(i.blockquote,{children:["\n",(0,o.jsxs)(i.p,{children:[(0,o.jsx)(i.code,{children:"--psy-rdoq"})," will adjust the distortion cost used in rate-distortion optimized quantization (RDO quant), enabled by ",(0,o.jsx)(i.code,{children:"--rdoq-level"})," 1 or 2, favoring the preservation of energy in the reconstructed image. ",(0,o.jsx)(i.code,{children:"--psy-rdoq"})," prevents RDOQ from blurring all of the encoding options which psy-rd has to choose from. At low strength levels, psy-rdoq will influence the quantization level decisions, favoring higher AC energy in the reconstructed image. As psy-rdoq strength is increased, more non-zero coefficient levels are added, and fewer coefficients are zeroed by RDOQ's rate distortion analysis. High levels of psy-rdoq can double the bitrate which can have a drastic effect on rate control, forcing higher overall QP, and can cause ringing artifacts. psy-rdoq is less accurate than psy-rd, it is biasing towards energy in general while psy-rd biases towards the energy of the source image. But very large psy-rdoq values can sometimes be beneficial."]}),"\n"]}),"\n",(0,o.jsxs)(i.p,{children:["In summary, ",(0,o.jsx)(i.code,{children:"--psy-rd"})," attempts to preserve the visual energy of the encode relative to the source video, while ",(0,o.jsx)(i.code,{children:"--psy-rdoq"})," attempts to make decisions generally in favor of preserving visual energy."]}),"\n",(0,o.jsxs)(i.p,{children:["Currently, ",(0,o.jsx)(i.a,{href:"/docs/encoders/x264",children:"x264"})," includes both of the above options alongside a number of other psychovisual options, and is considered the most mature psychovisually optimized open source video encoder. While it doesn't have ",(0,o.jsx)(i.code,{children:"--psy-rdoq"}),", ",(0,o.jsx)(i.a,{href:"/docs/encoders/SVT-AV1-PSY",children:"SVT-AV1-PSY"})," is an AV1 encoder that includes a number of psychovisual options (including ",(0,o.jsx)(i.code,{children:"--psy-rd"}),", as of version 3.0.0)."]}),"\n",(0,o.jsx)(i.h3,{id:"metrics",children:"Metrics"}),"\n",(0,o.jsxs)(i.p,{children:["Currently, it is difficult to measure the effectiveness of psychovisual options in encoders without subjective visual testing. While metrics like ",(0,o.jsx)(i.a,{href:"/docs/metrics/VMAF",children:"VMAF"})," and ",(0,o.jsx)(i.a,{href:"/docs/metrics/SSIM",children:"SSIM"})," are designed to be more perceptually accurate than PSNR, they are far from perfect and are usually misleading."]}),"\n",(0,o.jsxs)(i.p,{children:["More modern metrics like ",(0,o.jsx)(i.a,{href:"/docs/metrics/SSIMULACRA2",children:"SSIMULACRA2"})," and ",(0,o.jsx)(i.a,{href:"/docs/metrics/XPSNR",children:"XPSNR"})," are designed to be more perceptually accurate than others, and while SSIMULACRA2 largely achieves this goal, newer metrics are still not perfect and usually reward disabling all psychovisual options even when the options clearly help preserve psychovisual fidelity."]}),"\n",(0,o.jsx)(i.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsx)(i.p,{children:"Psychovisual options are essential to preserving visual quality. While perceptually driven features are hard to develop, difficult to test and measure, and somewhat rare, they are generally considered to be beneficial to the encoding process. The inclusion of well-built psychovisual options in encoders often signifies maturity and effectiveness, contributing to the overwhelmingly positive legacies of encoders like x264 and x265 which have consistently prioritized visual quality to great effect."})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>a});var t=n(6540);const o={},s=t.createContext(o);function r(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);