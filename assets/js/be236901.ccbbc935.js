"use strict";(self.webpackChunkcodec_wiki=self.webpackChunkcodec_wiki||[]).push([[8261],{2016:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var t=i(5893),o=i(1151);const s={title:"Contribution Guide",sidebar_label:"\u2712\ufe0f Contribution Guide",sidebar_position:13},r="Contribution Guide",l={id:"contribution-guide",title:"Contribution Guide",description:"Codec Wiki - community-maintained wiki for all things encoding.",source:"@site/docs/contribution-guide.mdx",sourceDirName:".",slug:"/contribution-guide",permalink:"/docs/contribution-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/av1-community-contributors/codec-wiki/tree/main/docs/contribution-guide.mdx",tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"Contribution Guide",sidebar_label:"\u2712\ufe0f Contribution Guide",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"\ud83d\uddc3\ufe0f Resources",permalink:"/docs/resources"},next:{title:"\u2753 FAQ",permalink:"/docs/FAQ"}},c={},a=[{value:"Before You Contribute",id:"before-you-contribute",level:2},{value:"Connect With Us",id:"connect-with-us",level:3},{value:"Clone &amp; Push Instructions",id:"clone--push-instructions",level:2},{value:"Website",id:"website",level:2},{value:"Installation",id:"installation",level:3},{value:"Local Development",id:"local-development",level:3},{value:"Build",id:"build",level:3},{value:"Deployment",id:"deployment",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"contribution-guide",children:"Contribution Guide"}),"\n",(0,t.jsx)(n.p,{children:"Codec Wiki - community-maintained wiki for all things encoding."}),"\n",(0,t.jsx)(n.h2,{id:"before-you-contribute",children:"Before You Contribute"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"By contributing to the Codec Wiki, you are communicating that you have read & agreed to our Terms & Conditions, Privacy Policy, & Code of Conduct."}),"\n",(0,t.jsx)(n.li,{children:"Ensure your understanding of the material you're contributing is sufficient to a point where it is useful to the project. It is perfectly acceptable not to get everything right the first time, but always double-check your contributions for factual correctness."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Our current priority is filling out the existing pages with content. Please assist in doing this, if possible, before considering adding new pages."})}),"\n",(0,t.jsx)(n.p,{children:"If you're unsure the content in your entry is completely correct or you believe your entry needs review, please attach the following message at the top of your entry:"}),"\n",(0,t.jsx)(n.admonition,{title:"Pending Review",type:"caution",children:(0,t.jsx)(n.p,{children:"The content in this entry may not be entirely accurate, & is pending further review to assess the quality of the information."})}),"\n",(0,t.jsx)(n.p,{children:"If you're aware your entry is too short or incomplete, please add the following message to the top of your entry:"}),"\n",(0,t.jsx)(n.admonition,{title:"Under Maintenance",type:"info",children:(0,t.jsx)(n.p,{children:"The content in this entry is incomplete & is in the process of being completed."})}),"\n",(0,t.jsx)(n.p,{children:"If you've added a new page & you aren't sure what should go there (this isn't recommended while there are still so many empty pages to be filled), add the following message as your page entry:"}),"\n",(0,t.jsx)(n.admonition,{title:"Help Wanted",type:"danger",children:(0,t.jsxs)(n.p,{children:["This section is in need of contributions. If you believe you can help, please see our ",(0,t.jsx)(n.a,{href:"/docs/contribution-guide",children:"Contribution Guide"})," to get started as a contributor!"]})}),"\n",(0,t.jsx)(n.h3,{id:"connect-with-us",children:"Connect With Us"}),"\n",(0,t.jsx)(n.p,{children:'If you\'d like to join the "AV1 for Dummies" Discord server to communicate with other passionate contributors helping this project, please join using the widget below:'}),"\n",(0,t.jsx)("iframe",{src:"https://discord.com/widget?id=1163724583472472138&theme=dark",width:"350",height:"500",allowtransparency:"true",frameborder:"0",sandbox:"allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"}),"\n",(0,t.jsxs)(n.p,{children:["Alternatively, we have a (soon to be) bridged Revolt server linked ",(0,t.jsx)(n.a,{href:"https://rvlt.gg/eSERRhSG",children:"right here"}),". Revolt is an open-source Discord alternative, which you can read more about on ",(0,t.jsx)(n.a,{href:"https://github.com/revoltchat/legal/blob/master/About.mdx#communication-is-critical",children:"this page"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"clone--push-instructions",children:"Clone & Push Instructions"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Make sure to clone from & edit the"})," ",(0,t.jsx)(n.code,{children:"main"})," ",(0,t.jsx)(n.strong,{children:"branch only, & push your final changes to the"})," ",(0,t.jsx)(n.code,{children:"deployment"})," ",(0,t.jsx)(n.strong,{children:"branch according to the instructions below. Also be sure to use node 18 LTS, as later versions tend to be troublesome."})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"don't forget to add unimportant files to the .gitignore before making any commits"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Clone from the ",(0,t.jsx)(n.code,{children:"main"})," branch to start to make a contribution:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"% git clone git@github.com:av1-community-contributors/av1-wiki.github.io.git -b main\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Test your changes locally before making a commit:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"% yarn\n% npx docusaurus start\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Push changes to ",(0,t.jsx)(n.code,{children:"main"})," branch:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'% git add .\n% git commit -m "Commit Message"\n% git push -u origin main\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsxs)(n.li,{children:["Deploy to ",(0,t.jsx)(n.code,{children:"deployment"})," branch to make live on site:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"% GIT_USER=<username> DEPLOYMENT_BRANCH=deployment yarn deploy\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Docusaurus Info"})}),"\n",(0,t.jsx)(n.h2,{id:"website",children:"Website"}),"\n",(0,t.jsxs)(n.p,{children:["This website is built using ",(0,t.jsx)(n.a,{href:"https://docusaurus.io/",children:"Docusaurus 2"}),", a modern static website generator."]}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ yarn\n"})}),"\n",(0,t.jsx)(n.h3,{id:"local-development",children:"Local Development"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ yarn start\n"})}),"\n",(0,t.jsx)(n.p,{children:"This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server."}),"\n",(0,t.jsx)(n.h3,{id:"build",children:"Build"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"$ yarn build\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This command generates static content into the ",(0,t.jsx)(n.code,{children:"build"})," directory and can be served using any static contents hosting service."]}),"\n",(0,t.jsx)(n.h3,{id:"deployment",children:"Deployment"}),"\n",(0,t.jsx)(n.p,{children:"See the initial instructions at the top."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>r});var t=i(7294);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);