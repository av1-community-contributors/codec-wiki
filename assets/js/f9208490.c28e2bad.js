"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[3229],{1181:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"utilities/hdr10plus_tool","title":"hdr10plus_tool","description":"hdr10plus_tool is a command line tool written in Rust for working with HDR10+ in HEVC files. It was previously named hdr10plus_parser.","source":"@site/docs/utilities/hdr10plus_tool.mdx","sourceDirName":"utilities","slug":"/utilities/hdr10plus_tool","permalink":"/docs/utilities/hdr10plus_tool","draft":false,"unlisted":false,"editUrl":"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/utilities/hdr10plus_tool.mdx","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"hdr10plus_tool","sidebar_position":11},"sidebar":"tutorialSidebar","previous":{"title":"eac3to","permalink":"/docs/utilities/eac3to"},"next":{"title":"MP4Box","permalink":"/docs/utilities/mp4box"}}');var a=n(4848),l=n(8453),s=n(2464),o=n(4345);const i={title:"hdr10plus_tool",sidebar_position:11},u="hdr10plus_tool",c={},d=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Extracting",id:"extracting",level:3},{value:"Injecting",id:"injecting",level:3},{value:"Removing HDR10+ Metadata",id:"removing-hdr10-metadata",level:3}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"hdr10plus_tool",children:"hdr10plus_tool"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"hdr10plus_tool"})," is a command line tool written in Rust for working with HDR10+ in HEVC files. It was previously named ",(0,a.jsx)(t.em,{children:"hdr10plus_parser"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsxs)(o.A,{value:"unixlike",label:"Linux & macOS",children:[(0,a.jsxs)(t.p,{children:["You can download official pre-built binaries for Linux & macOS from ",(0,a.jsx)(t.a,{href:"https://github.com/quietvoid/hdr10plus_tool/releases",children:"the GitHub Releases"}),", or you may compile the tool yourself via the instructions below."]}),(0,a.jsx)(t.p,{children:"Ensure you have Rust installed."}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'git clone https://github.com/quietvoid/hdr10plus_tool.git\ncd hdr10plus_tool\nRUSTFLAGS="-C target-cpu=native" cargo build --release\n'})})]}),(0,a.jsxs)(o.A,{value:"windows",label:"Windows",children:[(0,a.jsxs)(t.p,{children:["You can download official pre-built binaries for Windows from ",(0,a.jsx)(t.a,{href:"https://github.com/quietvoid/hdr10plus_tool/releases",children:"the GitHub Releases"}),", or you may compile the tool yourself via the instructions below."]}),(0,a.jsx)(t.p,{children:"Ensure you have Rust installed."}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-pwsh",children:"git clone https://github.com/quietvoid/hdr10plus_tool.git\ncd hdr10plus_tool\nset RUSTFLAGS=-C target-cpu=native \ncargo build --release\n"})})]})]}),"\n",(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="General usage"',children:"hdr10plus_tool [OPTIONS] <SUBCOMMAND>\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Get more options for a subcommand"',children:"hdr10plus_tool <SUBCOMMAND> --help\n"})}),"\n",(0,a.jsx)(t.h3,{id:"extracting",children:"Extracting"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Extract using FFmpeg pipe (Recommended)"',children:"ffmpeg -hide_banner -strict -2 -i input.mkv -map 0:v:0 -c copy -vbsf hevc_mp4toannexb -f hevc - | hdr10plus_tool extract -o metadata.json -\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Extract from raw bitstream"',children:"hdr10plus_tool extract video.hevc -o metadata.json\n"})}),"\n",(0,a.jsx)(t.h3,{id:"injecting",children:"Injecting"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Inject to raw bitstream"',children:"hdr10plus_tool inject -i video.hevc -j metadata.json -o injected_output.hevc\n"})}),"\n",(0,a.jsx)(t.h3,{id:"removing-hdr10-metadata",children:"Removing HDR10+ Metadata"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Remove using FFmpeg pipe (Recommended)"',children:"ffmpeg -hide_banner -strict -2 -i input.mkv -map 0:v:0 -c copy -vbsf hevc_mp4toannexb -f hevc - | hdr10plus_tool remove -\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",metastring:'title="Remove from raw bitstream"',children:"hdr10plus_tool remove video.hevc -o hdr10plus_removed_output.hevc\n"})})]})}function p(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},2464:(e,t,n)=>{n.d(t,{A:()=>w});var r=n(6540),a=n(4164),l=n(52),s=n(6347),o=n(5793),i=n(9025),u=n(4430),c=n(4148);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=h(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[u,d]=m({queryString:n,groupId:a}),[b,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,c.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),v=(()=>{const e=u??b;return p({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,l]),tabValues:l}}var f=n(5251);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(4848);function x(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.a_)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=o[n].value;a!==r&&(u(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{i.push(e)},onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",v.tabItem,l?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:l}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===l));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==l})))})}function _(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(j,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,g.jsx)(_,{...e,children:d(e.children)},String(t))}},4345:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var l=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>o});var r=n(6540);const a={},l=r.createContext(a);function s(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);