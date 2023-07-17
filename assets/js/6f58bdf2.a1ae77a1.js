"use strict";(self.webpackChunkav1_wiki=self.webpackChunkav1_wiki||[]).push([[1444],{3905:(t,e,i)=>{i.d(e,{Zo:()=>c,kt:()=>v});var o=i(7294);function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function l(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function a(t,e){if(null==t)return{};var i,o,n=function(t,e){if(null==t)return{};var i,o,n={},r=Object.keys(t);for(o=0;o<r.length;o++)i=r[o],e.indexOf(i)>=0||(n[i]=t[i]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)i=r[o],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}var u=o.createContext({}),s=function(t){var e=o.useContext(u),i=e;return t&&(i="function"==typeof t?t(e):l(l({},e),t)),i},c=function(t){var e=s(t.components);return o.createElement(u.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var i=t.components,n=t.mdxType,r=t.originalType,u=t.parentName,c=a(t,["components","mdxType","originalType","parentName"]),p=s(i),m=n,v=p["".concat(u,".").concat(m)]||p[m]||d[m]||r;return i?o.createElement(v,l(l({ref:e},c),{},{components:i})):o.createElement(v,l({ref:e},c))}));function v(t,e){var i=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=i.length,l=new Array(r);l[0]=m;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a[p]="string"==typeof t?t:n,l[1]=a;for(var s=2;s<r;s++)l[s]=i[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,i)}m.displayName="MDXCreateElement"},64:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var o=i(7462),n=(i(7294),i(3905));const r={label:"dovi_tool",sidebar_position:6},l="dovi_tool",a={unversionedId:"utilities/dovi_tool",id:"utilities/dovi_tool",title:"dovi_tool",description:"dovi_tool is a command line tool written in Rust combining multiple utilities for working with Dolby Vision.",source:"@site/docs/utilities/dovi_tool.md",sourceDirName:"utilities",slug:"/utilities/dovi_tool",permalink:"/av1-wiki.github.io/docs/utilities/dovi_tool",draft:!1,editUrl:"https://github.com/av1-community-contributors/av1-wiki.github.io/tree/main/docs/utilities/dovi_tool.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{label:"dovi_tool",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"YUView",permalink:"/av1-wiki.github.io/docs/utilities/YUView"},next:{title:"hdr10plus_tool",permalink:"/av1-wiki.github.io/docs/utilities/hdr10plus_tool"}},u={},s=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],c={toc:s},p="wrapper";function d(t){let{components:e,...i}=t;return(0,n.kt)(p,(0,o.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"dovi_tool"},"dovi_tool"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"dovi_tool")," is a command line tool written in Rust combining multiple utilities for working with Dolby Vision."),(0,n.kt)("h2",{id:"installation"},"Installation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Download pre-built binaries from ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/quietvoid/dovi_tool/releases"},"here"))),(0,n.kt)("p",null,"or"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Compile yourself (Rust must be installed, minimum v1.64.0 at the time of writing)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'git clone https://github.com/quietvoid/dovi_tool.git\ncd dovi_tool\nRUSTFLAGS="-C target-cpu=native" cargo build --release\n')),(0,n.kt)("p",null,"on Windows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/quietvoid/dovi_tool.git\ncd dovi_tool\nset RUSTFLAGS=-C target-cpu=native \ncargo build --release\n")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dovi_tool [OPTIONS] <SUBCOMMAND>\n")),(0,n.kt)("p",null,"To get more detailed options for a subcommand"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dovi_tool <SUBCOMMAND> --help\n")))}d.isMDXComponent=!0}}]);