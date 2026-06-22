(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,671640,e=>{"use strict";var t=e.i(433512),a=e.i(481178),n=e.i(44091),r=e.i(391466),o=e.i(275519),i=e.i(232471),l={root:"m_6d731127"},s=e.i(391398);let d={gap:"md",align:"stretch",justify:"flex-start"},c=(0,a.createVarsResolver)((e,{gap:a,align:n,justify:r})=>({root:{"--stack-gap":(0,t.getSpacing)(a),"--stack-align":n,"--stack-justify":r}})),u=(0,o.factory)(e=>{let t=(0,n.useProps)("Stack",d,e),{classNames:a,className:o,style:u,styles:m,unstyled:p,vars:h,align:f,justify:g,gap:y,variant:x,attributes:v,...b}=t;return(0,s.jsx)(i.Box,{...(0,r.useStyles)({name:"Stack",props:t,classes:l,className:o,style:u,classNames:a,styles:m,unstyled:p,attributes:v,vars:h,varsResolver:c})("root"),variant:x,...b})});u.classes=l,u.varsResolver=c,u.displayName="@mantine/core/Stack",e.s(["Stack",0,u],671640)},200140,e=>{"use strict";var t=e.i(57807),a=e.i(561299);let n=0;function r(e,t,a){let n=[],r=[],o=new Map;for(let a of e){let e=a.position||t,n=o.get(e);n?n.push(a):o.set(e,[a])}for(let e of o.values())e.sort((e,t)=>(t.priority??0)-(e.priority??0)||(e.__sequence??0)-(t.__sequence??0)),e.forEach((e,t)=>{t<a?r.push(e):n.push(e)});return{notifications:r,queue:n}}let o=()=>(0,a.createStore)({notifications:[],queue:[],defaultPosition:"bottom-right",limit:5}),i=o();function l(e,t){let a=e.getState(),o=t([...a.notifications,...a.queue]);for(let e of o)void 0===e.__sequence&&(e.__sequence=n,n+=1);let i=r(o,a.defaultPosition,a.limit);e.setState({notifications:i.notifications,queue:i.queue,limit:a.limit,defaultPosition:a.defaultPosition})}function s(e,t=i){return l(t,t=>t.filter(t=>t.id!==e||(t.onClose?.(t),!1))),e}e.s(["createNotificationsStore",0,o,"hideNotification",0,s,"notifications",0,{show:function(e,a=i){let n=e.id||(0,t.randomId)();return l(a,t=>e.id&&t.some(t=>t.id===e.id)?t:[...t,{...e,id:n}]),n},hide:s,update:function(e,t=i){return l(t,t=>t.map(t=>t.id===e.id?{...t,...e}:t)),e.id},clean:function(e=i){l(e,()=>[])},cleanQueue:function(e=i){let{defaultPosition:t,limit:a}=e.getState();l(e,e=>r(e,t,a).notifications)},updateState:l},"notificationsStore",0,i,"useNotifications",0,(e=i)=>(0,a.useStore)(e)])},382422,e=>{"use strict";var t=e.i(433512),a=e.i(481178),n=e.i(44091),r=e.i(391466),o=e.i(956449),i=e.i(470743);let[l,s]=(0,e.i(386179).createSafeContext)("Card component was not found in tree");var d={root:"m_e615b15f",section:"m_599a2148"},c=e.i(232471),u=e.i(391398);let m=(0,o.polymorphicFactory)(e=>{let{classNames:t,className:a,style:r,styles:o,vars:i,withBorder:l,inheritPadding:d,mod:m,...p}=(0,n.useProps)("CardSection",null,e),h=s();return(0,u.jsx)(c.Box,{mod:[{"with-border":l,"inherit-padding":d},m],...h.getStyles("section",{className:a,style:r,styles:o,classNames:t}),...p})});m.classes=d,m.displayName="@mantine/core/CardSection";var p=e.i(191788);let h=(0,a.createVarsResolver)((e,{padding:a})=>({root:{"--card-padding":(0,t.getSpacing)(a)}})),f={orientation:"vertical"},g=(0,o.polymorphicFactory)(e=>{let t=(0,n.useProps)("Card",f,e),{classNames:a,className:o,style:s,styles:c,unstyled:g,vars:y,children:x,padding:v,attributes:b,orientation:M,...D}=t,S=(0,r.useStyles)({name:"Card",props:t,classes:d,className:o,style:s,classNames:a,styles:c,unstyled:g,attributes:b,vars:y,varsResolver:h}),j=p.Children.toArray(x),w=j.map((e,t)=>"object"==typeof e&&e&&"type"in e&&(e.type===m||e.type?.displayName==="@mantine/core/CardSection")?(0,p.cloneElement)(e,{"data-orientation":M,"data-first-section":0===t||void 0,"data-last-section":t===j.length-1||void 0}):e);return(0,u.jsx)(l,{value:{getStyles:S},children:(0,u.jsx)(i.Paper,{unstyled:g,"data-orientation":M,...S("root"),...D,children:w})})});g.classes=d,g.varsResolver=h,g.displayName="@mantine/core/Card",g.Section=m,e.s(["Card",0,g],382422)},858508,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),t.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="ArrowRightIcon",e.s(["ArrowRightIcon",0,r],858508)},948671,e=>{e.v({logo:"Logo-module__VZ1V8q__logo"})},495823,e=>{e.v({discordButton:"SocialButton-module__86RcBW__discordButton",socialButton:"SocialButton-module__86RcBW__socialButton",socialButtonSection:"SocialButton-module__86RcBW__socialButtonSection",xButton:"SocialButton-module__86RcBW__xButton"})},981713,e=>{e.v({link:"LinksGroup-module__TciAwa__link",title:"LinksGroup-module__TciAwa__title",wrapper:"LinksGroup-module__TciAwa__wrapper"})},978924,e=>{e.v({afterFooter:"DocsFooter-module__IQhwVq__afterFooter",afterFooterNote:"DocsFooter-module__IQhwVq__afterFooterNote",description:"DocsFooter-module__IQhwVq__description",groups:"DocsFooter-module__IQhwVq__groups",inner:"DocsFooter-module__IQhwVq__inner",logoSection:"DocsFooter-module__IQhwVq__logoSection",root:"DocsFooter-module__IQhwVq__root",social:"DocsFooter-module__IQhwVq__social",socialButton:"DocsFooter-module__IQhwVq__socialButton",spacer:"DocsFooter-module__IQhwVq__spacer",wrapper:"DocsFooter-module__IQhwVq__wrapper"})},629122,517923,e=>{"use strict";var t=e.i(391398),a=e.i(191788),n=e.i(56206),r=e.i(232471),o=e.i(882377),i=e.i(725695),l=e.i(865823),s=e.i(883364),d=e.i(133613),c=e.i(41158),u=e.i(647831),m=e.i(293736),p=e.i(78747),h=e.i(948671);function f(e){return(0,t.jsxs)(c.default,{href:"/",className:(0,n.default)(h.default.logo,u.FOCUS_CLASS_NAMES.auto),"aria-label":"Mantine",children:[(0,t.jsx)(m.VisuallyHidden,{children:"Welcome to Mantine, React components library that you always wished for"}),(0,t.jsx)(p.MantineLogo,{size:30,...e})]})}var g=e.i(485108),y=e.i(804938),x=e.i(779177);function v({size:e,style:a,...n}){return(0,t.jsx)(r.Box,{component:"svg",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",style:[{width:(0,x.rem)(e),height:(0,x.rem)(e)},a],...n,children:(0,t.jsx)("path",{d:"M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z"})})}var b=e.i(266721),M=e.i(495823);function D({icon:e,...a}){return(0,t.jsx)(g.Button,{component:"a",target:"_blank",rel:"noopener noreferrer",leftSection:e,radius:"md",classNames:{root:M.default.socialButton,section:M.default.socialButtonSection},...a})}function S({className:e,...a}){return(0,t.jsx)(D,{className:(0,n.default)(M.default.discordButton,e),icon:(0,t.jsx)(y.DiscordIcon,{size:16}),href:b.meta.discordLink,...a,children:"Join Discord community"})}function j({className:e,...a}){return(0,t.jsx)(D,{className:(0,n.default)(M.default.xButton,e),icon:(0,t.jsx)(v,{size:16}),href:b.meta.twitterLink,...a,children:"Follow Mantine on X"})}let w=[{title:"About",data:[{type:"link",label:"OpenCollective",link:"https://opencollective.com/mantinedev"},{type:"next",label:"Contribute",link:"/contribute"},{type:"next",label:"Changelog",link:"/changelog/previous-versions"},{type:"link",label:"GitHub Releases",link:b.meta.gitHubLinks.releases}]},{title:"Community",data:[{type:"link",label:"Chat on Discord",link:b.meta.discordLink},{type:"link",label:"Follow on X",link:b.meta.twitterLink},{type:"link",label:"Follow on Github",link:"https://github.com/rtivital"},{type:"link",label:"GitHub discussions",link:b.meta.gitHubLinks.discussions}]},{title:"Project",data:[{type:"link",label:"Mantine UI",link:b.meta.uiLink},{type:"link",label:"Help Center",link:b.meta.helpCenterLink},{type:"link",label:"Github organization",link:b.meta.gitHubLinks.organization},{type:"link",label:"npm organization",link:b.meta.npmLink}]}];var Y=e.i(981713);function I({data:e,title:a}){let n=e.map((e,a)=>(0,t.jsx)(s.Text,{className:Y.default.link,component:"next"===e.type?c.default:"a",href:e.link,children:e.label},a));return(0,t.jsxs)("div",{className:Y.default.wrapper,children:[(0,t.jsx)(s.Text,{className:Y.default.title,children:a}),n]})}var C=e.i(978924);e.s(["DocsFooter",0,function({withNavbar:e}){let c=(0,a.useRef)(null),u=w.map(e=>(0,t.jsx)(I,{data:e.data,title:e.title},e.title));return(0,d.useWindowEvent)("scroll",()=>{let e,t,a=(e=document.documentElement.scrollTop,t=window.innerHeight,document.documentElement.scrollHeight-(e+t)-30);c.current&&(c.current.style.transform=`translateY(${a>0?a/2:0}px)`)}),(0,t.jsxs)("div",{className:C.default.root,children:[(0,t.jsx)("div",{className:C.default.spacer}),(0,t.jsx)(r.Box,{component:"footer",mod:{"with-navbar":e},className:(0,n.default)(C.default.wrapper,l.RemoveScroll.classNames.fullWidth),ref:c,children:(0,t.jsxs)(o.Container,{size:e?1170:1440,children:[(0,t.jsxs)("div",{className:C.default.inner,children:[(0,t.jsxs)("div",{className:C.default.logoSection,children:[(0,t.jsx)(f,{}),(0,t.jsx)(s.Text,{className:C.default.description,fz:"sm",children:"Build fully functional accessible web applications faster than ever"})]}),(0,t.jsx)("div",{className:C.default.groups,children:u})]}),(0,t.jsx)("div",{className:C.default.afterFooter,children:(0,t.jsxs)(i.Group,{justify:"space-between",wrap:"wrap",children:[(0,t.jsxs)(s.Text,{fz:"xs",className:C.default.afterFooterNote,children:["Built by ",(0,t.jsx)("a",{href:"https://github.com/rtivital",children:"Vitaly Rtishchev"})," and"," ",(0,t.jsx)("a",{href:"https://github.com/mantinedev/mantine/graphs/contributors",children:"these awesome people"})]}),(0,t.jsxs)("div",{className:C.default.social,children:[(0,t.jsx)(S,{className:C.default.socialButton}),(0,t.jsx)(j,{className:C.default.socialButton})]})]})})]})})]})}],517923),e.s([],629122)},689579,e=>{"use strict";var t=e.i(44091),a=e.i(275519),n=e.i(232471),r=e.i(391398);let o=(0,a.factory)(e=>{let{w:a,h:o,miw:i,mih:l,...s}=(0,t.useProps)("Space",null,e);return(0,r.jsx)(n.Box,{...s,w:a,miw:i??a,h:o,mih:l??o})});o.displayName="@mantine/core/Space",e.s(["Space",0,o])},119004,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM160,57l23,23H160ZM60,212V44h76V92a12,12,0,0,0,12,12h48V212Zm112-80a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,132Zm0,40a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,172Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,88H152V32Z",opacity:"0.2"}),t.createElement("path",{d:"M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,176H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm-8-56V44l44,44Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM200,218H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216A2,2,0,0,1,200,218Zm-34-82a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,136Zm0,32a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,168Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM200,220H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216A4,4,0,0,1,200,220Zm-36-84a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,136Zm0,32a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,168Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="FileTextIcon",e.s(["FileTextIcon",0,r],119004)},405289,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M40,92H70.06a36,36,0,0,0,67.88,0H216a12,12,0,0,0,0-24H137.94a36,36,0,0,0-67.88,0H40a12,12,0,0,0,0,24Zm64-24A12,12,0,1,1,92,80,12,12,0,0,1,104,68Zm112,96H201.94a36,36,0,0,0-67.88,0H40a12,12,0,0,0,0,24h94.06a36,36,0,0,0,67.88,0H216a12,12,0,0,0,0-24Zm-48,24a12,12,0,1,1,12-12A12,12,0,0,1,168,188Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,80a24,24,0,1,1-24-24A24,24,0,0,1,128,80Zm40,72a24,24,0,1,0,24,24A24,24,0,0,0,168,152Z",opacity:"0.2"}),t.createElement("path",{d:"M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16h97a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M32,80a8,8,0,0,1,8-8H77.17a28,28,0,0,1,53.66,0H216a8,8,0,0,1,0,16H130.83a28,28,0,0,1-53.66,0H40A8,8,0,0,1,32,80Zm184,88H194.83a28,28,0,0,0-53.66,0H40a8,8,0,0,0,0,16H141.17a28,28,0,0,0,53.66,0H216a8,8,0,0,0,0-16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M40,86H74.6a30,30,0,0,0,58.8,0H216a6,6,0,0,0,0-12H133.4a30,30,0,0,0-58.8,0H40a6,6,0,0,0,0,12Zm64-24A18,18,0,1,1,86,80,18,18,0,0,1,104,62ZM216,170H197.4a30,30,0,0,0-58.8,0H40a6,6,0,0,0,0,12h98.6a30,30,0,0,0,58.8,0H216a6,6,0,0,0,0-12Zm-48,24a18,18,0,1,1,18-18A18,18,0,0,1,168,194Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16h97a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M40,84H76.29a28,28,0,0,0,55.42,0H216a4,4,0,0,0,0-8H131.71a28,28,0,0,0-55.42,0H40a4,4,0,0,0,0,8Zm64-24A20,20,0,1,1,84,80,20,20,0,0,1,104,60ZM216,172H195.71a28,28,0,0,0-55.42,0H40a4,4,0,0,0,0,8H140.29a28,28,0,0,0,55.42,0H216a4,4,0,0,0,0-8Zm-48,24a20,20,0,1,1,20-20A20,20,0,0,1,168,196Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="SlidersHorizontalIcon",e.s(["SlidersHorizontalIcon",0,r],405289)},220026,e=>{"use strict";let t={selectors:{root:"Root element",label:"Thumb label",thumb:"Thumb element",trackContainer:"Wraps track element",track:"Slider track",bar:"Track filled part",markWrapper:"Contains `mark` and `markLabel` elements",mark:"Mark displayed on track",markLabel:"Label of the associated mark, displayed below track"},vars:{root:{"--slider-size":"Controls track `height`","--slider-color":"Controls filled track, thumb and marks `background`","--slider-thumb-size":"Controls thumb `width` and `height`","--slider-radius":"Controls `border-radius` of track and thumb"}},modifiers:[{modifier:"data-orientation",selector:"root",condition:"Determines slider orientation, `horizontal` by default"},{modifier:"data-disabled",selector:["trackContainer","track","bar","thumb","mark"],condition:"`disabled` prop is set"},{modifier:"data-inverted",selector:["track","bar"],condition:"`inverted` prop is set"},{modifier:"data-dragging",selector:"thumb",condition:"slider is being dragged"},{modifier:"data-filled",selector:"mark",condition:"mark position is less or equal slider value"}]};e.s(["RangeSliderStylesApi",0,t,"SliderStylesApi",0,t])},289058,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,40V168H168V88H88V40Z",opacity:"0.2"}),t.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,36H88a4,4,0,0,0-4,4V84H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H168a4,4,0,0,0,4-4V172h44a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM164,212H44V92H164Zm48-48H172V88a4,4,0,0,0-4-4H92V44H212Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="CopyIcon",e.s(["CopyIcon",0,r],289058)},366317,e=>{"use strict";e.s(["px",0,function(e){let t="string"==typeof e&&e.includes("var(--mantine-scale)")?e.match(/^calc\((.*?)\)$/)?.[1].split("*")[0].trim():e;return"number"==typeof t?t:"string"==typeof t?t.includes("calc")||t.includes("var")?t:t.includes("px")?Number(t.replace("px","")):t.includes("rem")?16*Number(t.replace("rem","")):t.includes("em")?16*Number(t.replace("em","")):Number(t):NaN}])},632057,e=>{"use strict";var t=e.i(366317);e.s(["getBreakpointValue",0,function(e,a){return e in a?(0,t.px)(a[e]):(0,t.px)(e)}])},230780,e=>{"use strict";var t=e.i(632057);e.s(["getSortedBreakpoints",0,function(e,a){let n=e.map(e=>({value:e,px:(0,t.getBreakpointValue)(e,a)}));return n.sort((e,t)=>e.px-t.px),n}])},804052,e=>{"use strict";var t=e.i(481178),a=e.i(44091),n=e.i(391466),r=e.i(275519),o=e.i(232471),i=e.i(779177);let l=["h1","h2","h3","h4","h5","h6"],s=["xs","sm","md","lg","xl"];var d={root:"m_8a5d1357"},c=e.i(391398);let u={order:1},m=(0,t.createVarsResolver)((e,{order:t,size:a,lineClamp:n,textWrap:r})=>{var o;let d,c=(o=t||1,d=void 0!==a?a:`h${o}`,l.includes(d)?{fontSize:`var(--mantine-${d}-font-size)`,fontWeight:`var(--mantine-${d}-font-weight)`,lineHeight:`var(--mantine-${d}-line-height)`}:s.includes(d)?{fontSize:`var(--mantine-font-size-${d})`,fontWeight:`var(--mantine-h${o}-font-weight)`,lineHeight:`var(--mantine-h${o}-line-height)`}:{fontSize:(0,i.rem)(d),fontWeight:`var(--mantine-h${o}-font-weight)`,lineHeight:`var(--mantine-h${o}-line-height)`});return{root:{"--title-fw":c.fontWeight,"--title-lh":c.lineHeight,"--title-fz":c.fontSize,"--title-line-clamp":"number"==typeof n?n.toString():void 0,"--title-text-wrap":r}}}),p=(0,r.factory)(e=>{let t=(0,a.useProps)("Title",u,e),{classNames:r,className:i,style:l,styles:s,unstyled:p,order:h,vars:f,size:g,variant:y,lineClamp:x,textWrap:v,mod:b,attributes:M,...D}=t,S=(0,n.useStyles)({name:"Title",props:t,classes:d,className:i,style:l,classNames:r,styles:s,unstyled:p,attributes:M,vars:f,varsResolver:m});return[1,2,3,4,5,6].includes(h)?(0,c.jsx)(o.Box,{...S("root"),component:`h${h}`,variant:y,mod:[{order:h,"data-line-clamp":"number"==typeof x},b],size:g,...D}):null});p.classes=d,p.varsResolver=m,p.displayName="@mantine/core/Title",e.s(["Title",0,p],804052)},89837,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M71.68,97.22,34.74,128l36.94,30.78a12,12,0,1,1-15.36,18.44l-48-40a12,12,0,0,1,0-18.44l48-40A12,12,0,0,1,71.68,97.22Zm176,21.56-48-40a12,12,0,1,0-15.36,18.44L221.26,128l-36.94,30.78a12,12,0,1,0,15.36,18.44l48-40a12,12,0,0,0,0-18.44ZM164.1,28.72a12,12,0,0,0-15.38,7.18l-64,176a12,12,0,0,0,7.18,15.37A11.79,11.79,0,0,0,96,228a12,12,0,0,0,11.28-7.9l64-176A12,12,0,0,0,164.1,28.72Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M240,128l-48,40H64L16,128,64,88H192Z",opacity:"0.2"}),t.createElement("path",{d:"M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM92.8,145.6a8,8,0,1,1-9.6,12.8l-32-24a8,8,0,0,1,0-12.8l32-24a8,8,0,0,1,9.6,12.8L69.33,128Zm58.89-71.4-32,112a8,8,0,1,1-15.38-4.4l32-112a8,8,0,0,1,15.38,4.4Zm53.11,60.2-32,24a8,8,0,0,1-9.6-12.8L186.67,128,163.2,110.4a8,8,0,1,1,9.6-12.8l32,24a8,8,0,0,1,0,12.8Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M67.84,92.61,25.37,128l42.47,35.39a6,6,0,1,1-7.68,9.22l-48-40a6,6,0,0,1,0-9.22l48-40a6,6,0,0,1,7.68,9.22Zm176,30.78-48-40a6,6,0,1,0-7.68,9.22L230.63,128l-42.47,35.39a6,6,0,1,0,7.68,9.22l48-40a6,6,0,0,0,0-9.22Zm-81.79-89A6,6,0,0,0,154.36,38l-64,176A6,6,0,0,0,94,221.64a6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95l64-176A6,6,0,0,0,162.05,34.36Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M66.56,91.07,22.25,128l44.31,36.93A4,4,0,0,1,64,172a3.94,3.94,0,0,1-2.56-.93l-48-40a4,4,0,0,1,0-6.14l48-40a4,4,0,0,1,5.12,6.14Zm176,33.86-48-40a4,4,0,1,0-5.12,6.14L233.75,128l-44.31,36.93a4,4,0,1,0,5.12,6.14l48-40a4,4,0,0,0,0-6.14ZM161.37,36.24a4,4,0,0,0-5.13,2.39l-64,176a4,4,0,0,0,2.39,5.13A4.12,4.12,0,0,0,96,220a4,4,0,0,0,3.76-2.63l64-176A4,4,0,0,0,161.37,36.24Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="CodeIcon",e.s(["CodeIcon",0,r],89837)},161465,772197,e=>{"use strict";var t=e.i(391398),a=e.i(958678);e.s(["PageHead",0,function({title:e,description:n}){let r=e?`${e} | Mantine`:"Mantine",o=n||"React components and hooks library with native dark theme support and focus on usability, accessibility and developer experience";return(0,t.jsxs)(a.default,{children:[(0,t.jsx)("title",{children:r}),(0,t.jsx)("meta",{property:"description",name:"description",content:o}),(0,t.jsx)("meta",{property:"og:title",name:"og:title",content:r}),(0,t.jsx)("meta",{property:"og:description",name:"og:description",content:o}),(0,t.jsx)("meta",{property:"twitter:title",name:"twitter:title",content:r}),(0,t.jsx)("meta",{property:"twitter:description",name:"twitter:description",content:o})]})}],772197),e.s([],161465)},976550,e=>{"use strict";var t=e.i(749218),a=e.i(433512),n=e.i(481178),r=e.i(44091),o=e.i(391466),i=e.i(275519),l=e.i(232471),s=e.i(164483),d={root:"m_7f854edf"},c=e.i(391398);let u={position:{bottom:0,right:0},zIndex:(0,t.getDefaultZIndex)("modal"),withinPortal:!0},m=(0,n.createVarsResolver)((e,{zIndex:t,position:n})=>({root:{"--affix-z-index":t?.toString(),"--affix-top":(0,a.getSpacing)(n?.top),"--affix-left":(0,a.getSpacing)(n?.left),"--affix-bottom":(0,a.getSpacing)(n?.bottom),"--affix-right":(0,a.getSpacing)(n?.right)}})),p=(0,i.factory)(e=>{let t=(0,r.useProps)("Affix",u,e),{classNames:a,className:n,style:i,styles:p,unstyled:h,vars:f,portalProps:g,zIndex:y,withinPortal:x,position:v,attributes:b,...M}=t,D=(0,o.useStyles)({name:"Affix",classes:d,props:t,className:n,style:i,classNames:a,styles:p,unstyled:h,attributes:b,vars:f,varsResolver:m});return(0,c.jsx)(s.OptionalPortal,{...g,withinPortal:x,children:(0,c.jsx)(l.Box,{...D("root"),...M})})});p.classes=d,p.varsResolver=m,p.displayName="@mantine/core/Affix",e.s(["Affix",0,p],976550)},943311,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M112,56V200L40,128Z",opacity:"0.2"}),t.createElement("path",{d:"M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="ArrowLeftIcon",e.s(["ArrowLeftIcon",0,r],943311)},648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let n={};for(var r in e)t(n,r,{get:e[r],enumerable:!0});return a||t(n,Symbol.toStringTag,{value:"Module"}),n}])},257177,e=>{"use strict";var t=e.i(433512),a=e.i(481178),n=e.i(317477),r=e.i(44091),o=e.i(391466),i=e.i(956449),l=e.i(232471),s={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},d=e.i(391398);let c=(0,a.createVarsResolver)((e,{radius:a,color:r,gradient:o,variant:i,size:l,autoContrast:s,circle:d})=>{let c=e.variantColorResolver({color:r||e.primaryColor,theme:e,gradient:o,variant:i||"filled",autoContrast:s});return{root:{"--badge-height":(0,t.getSize)(l,"badge-height"),"--badge-padding-x":(0,t.getSize)(l,"badge-padding-x"),"--badge-fz":(0,t.getSize)(l,"badge-fz"),"--badge-radius":d||void 0===a?void 0:(0,t.getRadius)(a),"--badge-bg":r||i?c.background:void 0,"--badge-color":r||i?c.color:void 0,"--badge-bd":r||i?c.border:void 0,"--badge-dot-color":"dot"===i?(0,n.getThemeColor)(r,e):void 0}}}),u=(0,i.polymorphicFactory)(e=>{let t=(0,r.useProps)("Badge",null,e),{classNames:a,className:n,style:i,styles:u,unstyled:m,vars:p,radius:h,color:f,gradient:g,leftSection:y,rightSection:x,children:v,variant:b,fullWidth:M,autoContrast:D,circle:S,mod:j,attributes:w,...Y}=t,I=(0,o.useStyles)({name:"Badge",props:t,classes:s,className:n,style:i,classNames:a,styles:u,unstyled:m,attributes:w,vars:p,varsResolver:c});return(0,d.jsxs)(l.Box,{variant:b,mod:[{block:M,circle:S,"with-right-section":!!x,"with-left-section":!!y},j],...I("root",{variant:b}),...Y,children:[y&&(0,d.jsx)("span",{...I("section"),"data-position":"left",children:y}),(0,d.jsx)("span",{...I("label"),children:v}),x&&(0,d.jsx)("span",{...I("section"),"data-position":"right",children:x})]})});u.classes=s,u.varsResolver=c,u.displayName="@mantine/core/Badge",e.s(["Badge",0,u],257177)},123895,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20a108,108,0,0,0,0,216c22.27,0,45.69-6.73,62.64-18a12,12,0,1,0-13.29-20c-13,8.63-31.89,14-49.35,14a84,84,0,1,1,84-84c0,9.29-1.67,17.08-4.69,21.95-2.64,4.24-6,6.05-11.31,6.05s-8.67-1.81-11.31-6.05c-3-4.87-4.69-12.66-4.69-21.95V88a12,12,0,0,0-23.49-3.46,52,52,0,1,0,8.86,79.57C172.3,174.3,182.81,180,196,180c24.67,0,40-19.92,40-52A108.12,108.12,0,0,0,128,20Zm0,136a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232,128c0,.51,0,1,0,1.52-.34,14.26-5.63,30.48-28,30.48-23.14,0-28-17.4-28-32V88a8,8,0,0,0-8.53-8A8.17,8.17,0,0,0,160,88.27v4a48,48,0,1,0,6.73,64.05,40.19,40.19,0,0,0,3.38,5C175.48,168,185.71,176,204,176a54.81,54.81,0,0,0,9.22-.75,4,4,0,0,1,4.09,6A104.05,104.05,0,0,1,125.91,232C71.13,230.9,26.2,186.86,24.08,132.11A104,104,0,1,1,232,128ZM96,128a32,32,0,1,0,32-32A32,32,0,0,0,96,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26a102,102,0,0,0,0,204c21.13,0,43.31-6.35,59.32-17a6,6,0,0,0-6.65-10c-13.9,9.25-34.09,15-52.67,15a90,90,0,1,1,90-90c0,29.58-13.78,34-22,34s-22-4.42-22-34V88a6,6,0,0,0-12,0v9a46,46,0,1,0,4.34,56.32C171.76,166.6,182,174,196,174c21.29,0,34-17.2,34-46A102.12,102.12,0,0,0,128,26Zm0,136a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28a100,100,0,0,0,0,200c20.76,0,42.52-6.23,58.21-16.66a4,4,0,1,0-4.43-6.67C167.35,214.27,147.24,220,128,220a92,92,0,1,1,92-92c0,31.32-15,36-24,36s-24-4.68-24-36V88a4,4,0,0,0-8,0v14.75a44,44,0,1,0,2.82,45.94C171.46,163.58,181.66,172,196,172c20,0,32-16.45,32-44A100.11,100.11,0,0,0,128,28Zm0,136a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="AtIcon",e.s(["AtIcon",0,r],123895)},931882,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),t.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="CaretDownIcon",e.s(["CaretDownIcon",0,r],931882)},960831,e=>{"use strict";e.s(["inputControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}],"inputOnlyControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],"inputWrapperOnlyControls",0,[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}]])},530514,e=>{"use strict";e.s(["createTheme",0,function(e){return e}])},169972,387136,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64Zm12,52H168a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm176,16H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm-48,40H40a12,12,0,0,0,0,24H168a12,12,0,0,0,0-24Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,64V168a16,16,0,0,1-16,16H40V64Z",opacity:"0.2"}),t.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,48H168a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm176,24H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-48,40H40a8,8,0,0,0,0,16H168a8,8,0,0,0,0-16Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM160,184H64a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm32-32H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16ZM56,112a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H64A8,8,0,0,1,56,112ZM192,88H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64Zm6,46H168a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Zm176,28H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm-48,40H40a6,6,0,0,0,0,12H168a6,6,0,0,0,0-12Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,48H168a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm176,24H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-48,40H40a8,8,0,0,0,0,16H168a8,8,0,0,0,0-16Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm4,44H168a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Zm176,32H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm-48,40H40a4,4,0,0,0,0,8H168a4,4,0,0,0,0-8Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="TextAlignLeftIcon",e.s(["TextAlignLeftIcon",0,r],169972);let o=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64ZM216,92H88a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,40H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,40H88a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,64V184H56a16,16,0,0,1-16-16V64Z",opacity:"0.2"}),t.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM216,96H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H96a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64ZM216,98H88a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm0,40H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm0,40H88a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM216,96H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm180,36H88a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm0,40H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm0,40H88a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"}))]]),i=t.forwardRef((e,n)=>t.createElement(a.default,{ref:n,...e,weights:o}));i.displayName="TextAlignRightIcon",e.s(["TextAlignRightIcon",0,i],387136)},692385,e=>{"use strict";var t=e.i(852361),a=e.i(191788);let n={min:-1/0,max:1/0};e.s(["useCounter",0,function(e=0,r){let{min:o,max:i,step:l=1}={...n,...r},s=Math.abs(l),[d,c]=(0,a.useState)((0,t.clamp)(e,o,i));return[d,{increment:(0,a.useCallback)(()=>c(e=>(0,t.clamp)(e+s,o,i)),[o,i,s]),decrement:(0,a.useCallback)(()=>c(e=>(0,t.clamp)(e-s,o,i)),[o,i,s]),set:(0,a.useCallback)(e=>c((0,t.clamp)(e,o,i)),[o,i]),reset:(0,a.useCallback)(()=>c((0,t.clamp)(e,o,i)),[e,o,i])}]}])},67312,e=>{"use strict";var t=e.i(86473),a=e.i(891343),n={moreEventsButton:"m_c958249f",moreEventsDropdown:"m_fc2b9a3e",moreEventsList:"m_89f3254b"},r=e.i(424302),o=e.i(392862),i=e.i(284629),l=e.i(275519),s=e.i(44091),d=e.i(391466),c=e.i(541772),u=e.i(391398);let m={dropdownType:"popover"},p=(0,l.factory)(e=>{let l=(0,s.useProps)("MoreEvents",m,e),{classNames:p,className:h,style:f,styles:g,unstyled:y,vars:x,attributes:v,radius:b,dropdownType:M,events:D,moreEventsCount:S,popoverProps:j,modalProps:w,onDropdownClose:Y,children:I,modalTitle:C,renderEventBody:E,renderEvent:A,id:H,labels:k,mode:T,onEventClick:P,...V}=l,[R,L]=(0,c.useDisclosure)(),Z=(0,d.useStyles)({name:"MoreEvents",classes:n,props:l,className:h,style:f,classNames:p,styles:g,unstyled:y,attributes:v,vars:x,rootSelector:"moreEventsButton"}),z=()=>{L.close(),Y?.()},N=(0,u.jsx)("div",{...Z("moreEventsList"),children:D.map(e=>(0,u.jsx)(a.ScheduleEvent,{radius:b,event:e,size:"md",renderEventBody:E,renderEvent:A,mode:T,onClick:P?t=>P(e,t):void 0,children:e.title},e.id))});return(0,u.jsxs)(u.Fragment,{children:["modal"===M&&(0,u.jsx)(r.Modal,{opened:R,onClose:z,unstyled:y,radius:b,title:C,...w,children:N}),(0,u.jsxs)(o.Popover,{position:"bottom-start",width:260,opened:R,trapFocus:!0,returnFocus:!1,unstyled:y,disabled:j?.disabled||"modal"===M,radius:b,transitionProps:{transition:"pop",duration:120},offset:-46,id:H,...j,onChange:e=>{e||(j?.onChange?.(e),z())},children:[(0,u.jsx)(o.Popover.Target,{children:(0,u.jsx)(i.UnstyledButton,{...Z("moreEventsButton"),mod:{static:"static"===T},onClick:()=>L.toggle(),...V,children:(0,t.getLabel)("moreLabel",k)(S)})}),(0,u.jsx)(o.Popover.Dropdown,{...Z("moreEventsDropdown"),children:N})]})]})});p.displayName="@mantine/schedule/MoreEvents",p.classes=n,e.s(["MoreEvents",0,p],67312)},369974,e=>{"use strict";var t=e.i(44091),a=e.i(392862);let[n,r]=(0,e.i(386179).createSafeContext)("HoverCard component was not found in the tree");var o=e.i(191788),i=e.i(391398),l=e.i(458272);let s=(0,o.createContext)({withinGroup:!1}),d={openDelay:0,closeDelay:0};function c(e){let{openDelay:a,closeDelay:n,children:r}=(0,t.useProps)("HoverCardGroup",d,e);return(0,i.jsx)(s,{value:{withinGroup:!0},children:(0,i.jsx)(l.FloatingDelayGroup,{delay:{open:a,close:n},children:r})})}c.displayName="@mantine/core/HoverCardGroup",c.extend=e=>e;var u=e.i(334816);function m(e){let{children:n,onMouseEnter:l,onMouseLeave:d,...c}=(0,t.useProps)("HoverCardDropdown",null,e),m=r();if((0,o.use)(s).withinGroup&&m.getFloatingProps&&m.floating){let e=m.getFloatingProps();return(0,i.jsx)(a.Popover.Dropdown,{ref:m.floating,...e,onMouseEnter:(0,u.createEventHandler)(l,e.onMouseEnter),onMouseLeave:(0,u.createEventHandler)(d,e.onMouseLeave),...c,children:n})}let p=(0,u.createEventHandler)(l,m.openDropdown),h=(0,u.createEventHandler)(d,m.closeDropdown);return(0,i.jsx)(a.Popover.Dropdown,{onMouseEnter:p,onMouseLeave:h,...c,children:n})}m.displayName="@mantine/core/HoverCardDropdown";var p=e.i(275825),h=e.i(409703),f=e.i(332977);let g={refProp:"ref"};function y(e){let{children:n,refProp:l,eventPropsWrapperName:d,...c}=(0,t.useProps)("HoverCardTarget",g,e),m=(0,h.getSingleElementChild)(n);if(!m)throw Error("HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let y=r(),x=(0,o.use)(s),v=(0,f.useMergedRef)((0,p.getRefProp)(m),y.assignTarget);if(x.withinGroup&&y.getReferenceProps&&y.reference){let e=y.getReferenceProps();return(0,i.jsx)(a.Popover.Target,{refProp:l,...c,children:(0,o.cloneElement)(m,d?{[d]:{...e,ref:y.reference}}:{...e,ref:y.reference})})}let b={onMouseEnter:(0,u.createEventHandler)(m.props.onMouseEnter,y.openDropdown),onMouseLeave:(0,u.createEventHandler)(m.props.onMouseLeave,y.closeDropdown)},M={...d?{[d]:b}:b,ref:v};return(0,i.jsx)(a.Popover.Target,{refProp:l,...c,children:(0,o.cloneElement)(m,M)})}y.displayName="@mantine/core/HoverCardTarget";var x=e.i(107315);let v={openDelay:0,closeDelay:150,initiallyOpened:!1};function b(e){let{children:r,onOpen:d,onClose:c,openDelay:u,closeDelay:m,initiallyOpened:p,...h}=(0,t.useProps)("HoverCard",v,e),f=function(e){let[t,a]=(0,o.useState)(e.defaultOpened),n="boolean"==typeof e.opened?e.opened:t,r=(0,o.use)(s).withinGroup,i=(0,x.useId)(),d=(0,o.useRef)(-1),c=(0,o.useRef)(-1),u=(0,o.useRef)(null),m=(0,o.useCallback)(e=>{u.current=e},[]),p=(0,o.useCallback)(()=>{window.clearTimeout(d.current),window.clearTimeout(c.current)},[]),h=(0,o.useCallback)(t=>{a(t),t?(v(i),e.onOpen?.()):e.onClose?.()},[i,e.onOpen,e.onClose]),{context:f,refs:g}=(0,l.useFloating)({open:n,onOpenChange:h}),{delay:y,setCurrentId:v}=(0,l.useDelayGroup)(f,{id:i}),{getReferenceProps:b,getFloatingProps:M}=(0,l.useInteractions)([(0,l.useHover)(f,{enabled:!0,delay:r?y:{open:e.openDelay,close:e.closeDelay}}),(0,l.useRole)(f,{role:"dialog"}),(0,l.useDismiss)(f,{enabled:r})]),D=(0,o.useCallback)(()=>{r||(p(),0===e.openDelay||void 0===e.openDelay?h(!0):d.current=window.setTimeout(()=>h(!0),e.openDelay))},[r,p,e.openDelay,h]),S=(0,o.useCallback)(()=>{r||(p(),0===e.closeDelay||void 0===e.closeDelay?h(!1):c.current=window.setTimeout(()=>h(!1),e.closeDelay))},[r,p,e.closeDelay,h]),j=(0,o.useRef)(h);return j.current=h,(0,o.useEffect)(()=>()=>p(),[p]),(0,o.useEffect)(()=>{if(!n||r||"u"<typeof IntersectionObserver)return;let e=u.current;if(!e)return;let t=new IntersectionObserver(()=>{e.isConnected&&0!==e.getClientRects().length||(p(),j.current(!1))});return t.observe(e),()=>t.disconnect()},[n,r,p]),{opened:n,reference:g.setReference,floating:g.setFloating,assignTarget:m,getReferenceProps:b,getFloatingProps:M,openDropdown:D,closeDropdown:S}}({openDelay:u,closeDelay:m,defaultOpened:p,onOpen:d,onClose:c});return(0,i.jsx)(n,{value:{openDropdown:f.openDropdown,closeDropdown:f.closeDropdown,assignTarget:f.assignTarget,getReferenceProps:f.getReferenceProps,getFloatingProps:f.getFloatingProps,reference:f.reference,floating:f.floating},children:(0,i.jsx)(a.Popover,{...h,opened:f.opened,__staticSelector:"HoverCard",children:r})})}b.displayName="@mantine/core/HoverCard",b.Target=y,b.Dropdown=m,b.Group=c,b.extend=e=>e,e.s(["HoverCard",0,b],369974)},27355,(e,t,a)=>{e.e,t.exports=function(e){"use strict";var t={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(494834))},19683,e=>{"use strict";var t=e.i(257177),a=e.i(725695),n=e.i(671640),r=e.i(883364),o=e.i(391398),i=e.i(494834);let l=`import dayjs from 'dayjs';
import { Badge, Group, Stack, Text } from '@mantine/core';
import { ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

interface EventDetailsProps {
  event: ScheduleEventData;
  resources?: ScheduleResourceData[];
}

export function EventDetails({ event, resources }: EventDetailsProps) {
  const resource = resources?.find((r) => r.id === event.resourceId);

  return (
    <Stack gap="xs">
      <Text fw={600} size="sm">
        {event.title}
      </Text>

      <Text size="xs" c="dimmed">
        {dayjs(event.start).format('MMM D, YYYY HH:mm')} – {dayjs(event.end).format('HH:mm')}
      </Text>

      {resource && (
        <Text size="xs" c="dimmed">
          {resource.label}
        </Text>
      )}

      {event.payload?.description && (
        <Text size="xs" c="dimmed">
          {event.payload.description}
        </Text>
      )}

      {event.payload?.location && (
        <Group gap={4}>
          <Badge size="sm" variant="light">
            {event.payload.location}
          </Badge>
        </Group>
      )}

      {event.payload?.attendees && (
        <div>
          <Text size="xs" fw={500} mb={4}>
            Attendees:
          </Text>
          <Text size="xs" c="dimmed">
            {event.payload.attendees.join(', ')}
          </Text>
        </div>
      )}
    </Stack>
  );
}`;e.s(["EventDetails",0,function({event:e,resources:l}){let s=l?.find(t=>t.id===e.resourceId);return(0,o.jsxs)(n.Stack,{gap:"xs",children:[(0,o.jsx)(r.Text,{fw:600,size:"sm",children:e.title}),(0,o.jsxs)(r.Text,{size:"xs",c:"dimmed",children:[(0,i.default)(e.start).format("MMM D, YYYY HH:mm")," – ",(0,i.default)(e.end).format("HH:mm")]}),s&&(0,o.jsx)(r.Text,{size:"xs",c:"dimmed",children:s.label}),e.payload?.description&&(0,o.jsx)(r.Text,{size:"xs",c:"dimmed",children:e.payload.description}),e.payload?.location&&(0,o.jsx)(a.Group,{gap:4,children:(0,o.jsx)(t.Badge,{size:"sm",variant:"light",children:e.payload.location})}),e.payload?.attendees&&(0,o.jsxs)("div",{children:[(0,o.jsx)(r.Text,{size:"xs",fw:500,mb:4,children:"Attendees:"}),(0,o.jsx)(r.Text,{size:"xs",c:"dimmed",children:e.payload.attendees.join(", ")})]})]})},"_eventDetailsCode",0,l])},922621,e=>{"use strict";var t=e.i(969610),a=e.i(813982),n=e.i(751198),r=e.i(532965);e.s(["getDayPositionedEvents",0,function({events:e,startTime:o,endTime:i,intervalMinutes:l,date:s}){let d=[],c=[];for(let u of(0,a.sortEvents)(e)){let e=(0,t.isAllDayEvent)({event:u,date:s}),a=0;for(;function({columns:e,columnIndex:a,event:r,allDay:o,date:i}){return!!e[a]&&e[a].some(e=>{let a=(0,t.isAllDayEvent)({event:e,date:i}),l=(0,n.isEventsOverlap)(e,r);return!o&&!a&&l})}({columns:d,columnIndex:a,event:u,allDay:e,date:s});)a++;d[a]||(d[a]=[]),d[a].push(u);let m=e?{top:0,height:100}:(0,r.getDayPosition)({event:u,startTime:o,endTime:i,intervalMinutes:l});c.push({...u,position:{...m,allDay:e,column:a,width:0,offset:0,overlaps:0}})}for(let e of c){let{allDay:t,column:a}=e.position;if(t){e.position.overlaps=1,e.position.width=100,e.position.offset=0;continue}let r=[];for(let t of c)t!==e&&!t.position.allDay&&(0,n.isEventsOverlap)(t,e)&&r.push(t);let o=a;for(let e of r)for(let t of(o=Math.max(o,e.position.column),c))t!==e&&!t.position.allDay&&(0,n.isEventsOverlap)(t,e)&&(o=Math.max(o,t.position.column));let i=o+1,l=i;for(let e of r)e.position.column>a&&e.position.column<l&&(l=e.position.column);let s=l-a;e.position.overlaps=i,e.position.width=s/i*100,e.position.offset=100*a/i}return c}])},661426,433506,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64ZM64,92a12,12,0,0,0,0,24H192a12,12,0,0,0,0-24Zm152,40H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm-24,40H64a12,12,0,0,0,0,24H192a12,12,0,0,0,0-24Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,64V168a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V64Z",opacity:"0.2"}),t.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM64,96a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16Zm152,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-24,40H64a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM176,184H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm16-32H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16ZM72,112a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,112ZM192,88H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64ZM64,98a6,6,0,0,0,0,12H192a6,6,0,0,0,0-12Zm152,40H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm-24,40H64a6,6,0,0,0,0,12H192a6,6,0,0,0,0-12Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM64,96a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16Zm152,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-24,40H64a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm28,36a4,4,0,0,0,0,8H192a4,4,0,0,0,0-8Zm152,40H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm-24,40H64a4,4,0,0,0,0,8H192a4,4,0,0,0,0-8Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="TextAlignCenterIcon",e.s(["TextAlignCenterIcon",0,r],661426);let o=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64ZM216,92H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,40H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,40H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,64V184H40V64Z",opacity:"0.2"}),t.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM216,96H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-32H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-32H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-32H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64ZM216,98H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm0,40H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm0,40H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM216,96H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm180,36H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm0,40H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm0,40H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"}))]]),i=t.forwardRef((e,n)=>t.createElement(a.default,{ref:n,...e,weights:o}));i.displayName="TextAlignJustifyIcon",e.s(["TextAlignJustifyIcon",0,i],433506)},984083,e=>{"use strict";var t=e.i(648863),a=e.i(960831),n=e.i(294788),r=e.i(391398);let o={type:"configurator",component:function(e){return(0,r.jsx)(n.Input,{placeholder:"Input component",...e})},code:`
import { Input } from '@mantine/core';

function Demo() {
  return <Input{{props}} placeholder="Input component" />;
}
`,centered:!0,maxWidth:340,controls:a.inputOnlyControls};var i=e.i(931882);let l={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Input,{component:"button",pointer:!0,children:"Button input"}),(0,r.jsxs)(n.Input,{component:"select",rightSection:(0,r.jsx)(i.CaretDownIcon,{size:14}),pointer:!0,mt:"md",children:[(0,r.jsx)("option",{value:"1",children:"1"}),(0,r.jsx)("option",{value:"2",children:"2"})]})]})},code:`
import { Input } from '@mantine/core';
import { CaretDownIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      <Input component="button" pointer>
        Button input
      </Input>

      <Input
        component="select"
        rightSection={<CaretDownIcon size={14} />}
        pointer
        mt="md"
      >
        <option value="1">1</option>
        <option value="2">2</option>
      </Input>
    </>
  );
}
`};var s=e.i(191788),d=e.i(123895);let c={type:"code",component:function(){let[e,t]=(0,s.useState)("Clear me");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Input,{placeholder:"Your email",leftSection:(0,r.jsx)(d.AtIcon,{size:16})}),(0,r.jsx)(n.Input,{placeholder:"Clearable input",value:e,onChange:e=>t(e.currentTarget.value),rightSectionPointerEvents:"all",mt:"md",rightSection:e?(0,r.jsx)(n.Input.ClearButton,{"aria-label":"Clear input",onClick:()=>t("")}):null})]})},maxWidth:340,centered:!0,code:`
import { useState } from 'react';
import { Input } from '@mantine/core';
import { AtIcon } from '@phosphor-icons/react';

function Demo() {
  const [value, setValue] = useState('Clear me');
  return (
    <>
      <Input placeholder="Your email" leftSection={<AtIcon size={16} />} />
      <Input
        placeholder="Clearable input"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        mt="md"
        rightSection={
          value ? (
            <Input.ClearButton
              aria-label="Clear input"
              onClick={() => setValue('')}
            />
          ) : null
        }
      />
    </>
  );
}
`},u={type:"configurator",component:function(e){return(0,r.jsx)(n.Input.Wrapper,{...e,children:(0,r.jsx)(n.Input,{placeholder:"Input inside Input.Wrapper"})})},code:`
import { Input } from '@mantine/core';

function Wrapper() {
  return (
    <Input.Wrapper{{props}}>
      <Input placeholder="Input inside Input.Wrapper" />
    </Input.Wrapper>
  );
}
`,centered:!0,maxWidth:440,controls:a.inputWrapperOnlyControls};var m=e.i(841209),p=e.i(431868);let h={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,s.useState)(!1);return(0,r.jsx)(m.TextInput,{label:"TextInput with tooltip",description:"Tooltip will be relative to the input",placeholder:"Focus me to see tooltip",onFocus:()=>t(!0),onBlur:()=>t(!1),inputContainer:t=>(0,r.jsx)(p.Tooltip,{label:"Additional information",position:"top-start",opened:e,children:t})})},code:`
import { useState } from 'react';
import { TextInput, Tooltip } from '@mantine/core';

function Demo() {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      label="TextInput with tooltip"
      description="Tooltip will be relative to the input"
      placeholder="Focus me to see tooltip"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      inputContainer={(children) => (
        <Tooltip label="Additional information" position="top-start" opened={focused}>
          {children}
        </Tooltip>
      )}
    />
  );
}
`},f={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.TextInput,{label:"Custom layout",placeholder:"Custom layout",description:"Description below the input",inputWrapperOrder:["label","error","input","description"]}),(0,r.jsx)(m.TextInput,{mt:"md",label:"Custom layout",placeholder:"Custom layout",description:"Error and description are",error:"both below the input",inputWrapperOrder:["label","input","description","error"]})]})},maxWidth:340,centered:!0,code:`
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput
        label="Custom layout"
        placeholder="Custom layout"
        description="Description below the input"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
      <TextInput
        mt="xl"
        label="Custom layout"
        placeholder="Custom layout"
        description="Error and description are"
        error="both below the input"
        inputWrapperOrder={['label', 'input', 'description', 'error']}
      />
    </>
  );
}
`};var g=e.i(586488);let y={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.InputBase,{label:"Your phone",component:"input",placeholder:"Your phone"}),(0,r.jsxs)(g.InputBase,{label:"Custom native select",component:"select",mt:"md",children:[(0,r.jsx)("option",{value:"react",children:"React"}),(0,r.jsx)("option",{value:"react",children:"Angular"}),(0,r.jsx)("option",{value:"svelte",children:"Svelte"})]})]})},maxWidth:340,centered:!0,code:`
import { InputBase } from '@mantine/core';

function Demo() {
  return (
    <>
      <InputBase label="Your phone" component="input" placeholder="Your phone" />

      <InputBase label="Custom native select" component="select" mt="md">
        <option value="react">React</option>
        <option value="react">Angular</option>
        <option value="svelte">Svelte</option>
      </InputBase>
    </>
  );
}
`},x={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Input.Label,{required:!0,children:"Input label"}),(0,r.jsx)(n.Input.Description,{children:"Input description"}),(0,r.jsx)(n.Input.Error,{children:"Input error"})]})},code:`
import { Input } from '@mantine/core';

function Demo() {
  return (
    <>
      <Input.Label required>Input label</Input.Label>
      <Input.Description>Input description</Input.Description>
      <Input.Error>Input error</Input.Error>
    </>
  );
}
`},v={type:"code",component:function(){return(0,r.jsx)(n.Input,{component:"button",pointer:!0,children:(0,r.jsx)(n.Input.Placeholder,{children:"Placeholder content"})})},maxWidth:340,centered:!0,code:`
import { Input } from '@mantine/core';

function Demo() {
  return (
    <Input component="button" pointer>
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </Input>
  );
}
`};var b=e.i(951254),M=e.i(856171),D=e.i(530514);let S=`
import { TextInput, NativeSelect, MantineProvider, createTheme, Input } from '@mantine/core';

const theme = createTheme({
  components: {
    Input: Input.extend({
      defaultProps: {
        variant: 'filled',
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      defaultProps: {
        inputWrapperOrder: ['label', 'input', 'description', 'error'],
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput
        label="Text input"
        placeholder="Text input"
        description="Description below the input"
      />

      <NativeSelect
        mt="md"
        label="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        description="Description below the input"
      />
    </MantineProvider>
  );
}
`,j=(0,D.createTheme)({components:{Input:n.Input.extend({defaultProps:{variant:"filled"}}),InputWrapper:n.Input.Wrapper.extend({defaultProps:{inputWrapperOrder:["label","input","description","error"]}})}}),w={type:"code",component:function(){return(0,r.jsxs)(b.MantineThemeProvider,{theme:j,children:[(0,r.jsx)(m.TextInput,{label:"Text input",placeholder:"Text input",description:"Description below the input"}),(0,r.jsx)(M.NativeSelect,{mt:"md",label:"Native select",data:["React","Angular","Vue","Svelte"],description:"Description below the input"})]})},centered:!0,maxWidth:340,code:S};var Y=e.i(613529);let I=`
import { TextInput, NumberInput, NativeSelect, MantineProvider, createTheme, Input } from '@mantine/core';

const theme = createTheme({
  components: {
    Input: Input.extend({
      defaultProps: {
        size: 'md',
        radius: 'md',
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      defaultProps: {
        withAsterisk: true,
      },
    }),

    NumberInput: NumberInput.extend({
      defaultProps: {
        size: 'lg',
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput label="Text input" placeholder="Inherits size and radius from Input" />

      <NativeSelect
        mt="md"
        label="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />

      <NumberInput mt="md" label="Number input" placeholder="Overrides shared size with lg" />
    </MantineProvider>
  );
}
`,C=(0,D.createTheme)({components:{Input:n.Input.extend({defaultProps:{size:"md",radius:"md"}}),InputWrapper:n.Input.Wrapper.extend({defaultProps:{withAsterisk:!0}}),NumberInput:Y.NumberInput.extend({defaultProps:{size:"lg"}})}}),E={type:"code",component:function(){return(0,r.jsxs)(b.MantineThemeProvider,{theme:C,children:[(0,r.jsx)(m.TextInput,{label:"Text input",placeholder:"Inherits size and radius from Input"}),(0,r.jsx)(M.NativeSelect,{mt:"md",label:"Native select",data:["React","Angular","Vue","Svelte"]}),(0,r.jsx)(Y.NumberInput,{mt:"md",label:"Number input",placeholder:"Overrides shared size with lg"})]})},centered:!0,maxWidth:340,code:I},A=`
import { TextInput, NativeSelect, MantineProvider, createTheme, Input } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({
      classNames: {
        input: classes.input,
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      classNames: {
        label: classes.label,
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput label="Text input" placeholder="Text input" />

      <NativeSelect
        mt="md"
        label="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </MantineProvider>
  );
}
`,H=`
.label {
  background-color: var(--mantine-color-blue-light);
}

.input {
  border: 1px solid var(--mantine-color-violet-filled);
}
`,k=(0,D.createTheme)({components:{Input:n.Input.extend({classNames:{input:"m_8ca6a3cb"}}),InputWrapper:n.Input.Wrapper.extend({classNames:{label:"m_8ccacaf5"}})}}),T={type:"code",component:function(){return(0,r.jsxs)(b.MantineThemeProvider,{theme:k,children:[(0,r.jsx)(m.TextInput,{label:"Text input",placeholder:"Text input"}),(0,r.jsx)(M.NativeSelect,{mt:"md",label:"Native select",data:["React","Angular","Vue","Svelte"]})]})},centered:!0,maxWidth:340,code:[{fileName:"Demo.tsx",code:A,language:"tsx"},{fileName:"Demo.module.css",code:H,language:"scss"}]};var P={input:"m_4ba3a790"};let V={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Input,{placeholder:"Regular Input component",classNames:P}),(0,r.jsx)(m.TextInput,{placeholder:"TextInput component",label:"TextInput component",mt:"md",classNames:P})]})},maxWidth:340,centered:!0,code:[{fileName:"Demo.module.css",code:`
.input {
  transition: none;

  &:focus-within {
    outline: 2px solid var(--mantine-color-blue-filled);
    border-color: transparent;
  }
}
`,language:"scss"},{fileName:"Demo.tsx",code:`
import { Input, TextInput } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <>
      <Input placeholder="Regular Input component" classNames={classes} />
      <TextInput
        placeholder="TextInput component"
        label="TextInput component"
        mt="md"
        classNames={classes}
      />
    </>
  );
}
`,language:"tsx"}]};var R=e.i(579668);let L=`
import { Input } from '@mantine/core';

function Demo() {
  const at = <AtIcon size={16} />;
  const chevron = <CaretDownIcon size={16} />;
  return <Input{{props}} placeholder="Input component" leftSection={at} rightSection={chevron} />;
}
`,Z={type:"styles-api",data:R.InputStylesApi,component:function(e){return(0,r.jsx)(n.Input,{placeholder:"Input component",leftSection:(0,r.jsx)(d.AtIcon,{size:16}),rightSection:(0,r.jsx)(i.CaretDownIcon,{size:16}),...e})},code:L,centered:!0,maxWidth:340},z=`
import { Input } from '@mantine/core';

function Demo() {
  return <Input.Wrapper{{props}} label="Input label" description="Input description" error="Input error" withAsterisk />;
}
`,N={type:"styles-api",data:R.InputWrapperStylesApi,component:function(e){return(0,r.jsx)(n.Input.Wrapper,{label:"Input label",description:"Input description",error:"Input error",withAsterisk:!0,...e,children:(0,r.jsx)(n.Input,{placeholder:"Input"})})},code:z,centered:!0,maxWidth:340};var B=e.i(171481);let F=new Map([["bold",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm-12-80V80a12,12,0,0,1,24,0v52a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,172Z"}))],["duotone",s.createElement(s.Fragment,null,s.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),s.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"}))],["fill",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"}))],["light",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm-6-82V80a6,6,0,0,1,12,0v56a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,172Z"}))],["regular",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm-8-80V80a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,172Z"}))],["thin",s.createElement(s.Fragment,null,s.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm-4-84V80a4,4,0,0,1,8,0v56a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,172Z"}))]]),O=s.forwardRef((e,t)=>s.createElement(B.default,{ref:t,...e,weights:F}));O.displayName="WarningCircleIcon";let $={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.TextInput,{placeholder:"Error as boolean",label:"Error as boolean",error:!0}),(0,r.jsx)(m.TextInput,{mt:"md",placeholder:"Error as react node",label:"Error as react node",error:"Something went wrong"}),(0,r.jsx)(m.TextInput,{mt:"md",placeholder:"Without error styles on input",label:"Without error styles on input",error:"Something went wrong",withErrorStyles:!1,rightSectionPointerEvents:"none",rightSection:(0,r.jsx)(O,{size:20,color:"var(--mantine-color-error)"})})]})},code:`
import { TextInput } from '@mantine/core';
import { WarningCircleIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      <TextInput placeholder="Error as boolean" label="Error as boolean" error />
      <TextInput
        mt="md"
        placeholder="Error as react node"
        label="Error as react node"
        error="Something went wrong"
      />

      <TextInput
        mt="md"
        placeholder="Without error styles on input"
        label="Without error styles on input"
        error="Something went wrong"
        withErrorStyles={false}
        rightSectionPointerEvents="none"
        rightSection={
          <WarningCircleIcon
            size={20}
            color="var(--mantine-color-error)"
          />
        }
      />
    </>
  );
}
`,maxWidth:340,centered:!0},_={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.TextInput,{placeholder:"Success as boolean",label:"Success as boolean",success:!0}),(0,r.jsx)(m.TextInput,{mt:"md",placeholder:"Success as react node",label:"Success as react node",success:"Username is available"})]})},code:`
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput placeholder="Success as boolean" label="Success as boolean" success />
      <TextInput
        mt="md"
        placeholder="Success as react node"
        label="Success as react node"
        success="Username is available"
      />
    </>
  );
}
`,maxWidth:340,centered:!0},W={type:"configurator",component:function(e){let[t,a]=(0,s.useState)("clearable");return(0,r.jsx)(n.Input,{placeholder:"Clearable input",value:t,onChange:e=>a(e.currentTarget.value),rightSection:""!==t?(0,r.jsx)(n.Input.ClearButton,{onClick:()=>a("")}):void 0,rightSectionPointerEvents:"auto",...e})},code:e=>`
import { Input } from '@mantine/core';

function Demo(){
  const [value, setValue] = useState('clearable');

  return (
    <Input
      placeholder="Clearable input"
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      rightSection={value !== '' ? <Input.ClearButton onClick={() => setValue('')} /> : undefined}
      rightSectionPointerEvents="auto"
      size="${e.size}"
    />
  );
}
`,maxWidth:340,centered:!0,controls:[{type:"size",prop:"size",initialValue:"sm",libraryValue:"__"}]},G={type:"code",component:function(){return(0,r.jsx)(n.Input,{placeholder:"Your email",loading:!0})},code:`
import { Input } from '@mantine/core';

function Demo() {
  return <Input placeholder="Your email" loading />;
}
`,centered:!0,maxWidth:340};var U=(0,t.__exportAll)({clearButton:()=>W,component:()=>l,compound:()=>x,defaultProps:()=>w,error:()=>$,focusStyles:()=>V,inputBase:()=>y,inputContainer:()=>h,inputWrapperOrder:()=>f,loading:()=>G,placeholder:()=>v,sections:()=>c,sharedDefaultProps:()=>E,sharedStyles:()=>T,stylesApi:()=>Z,success:()=>_,usage:()=>o,wrapper:()=>u,wrapperStylesApi:()=>N});e.s(["InputDemos",0,U],984083)},26123,865749,586536,e=>{"use strict";var t=e.i(317477);e.s(["getPieChartData",0,function({data:e,theme:a,strokeWidth:n,highlightedIndex:r,cellProps:o}){return e.map((e,i)=>({...e,__segmentIndex:i,fill:(0,t.getThemeColor)(e.color,a),stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:n,..."function"==typeof o?o(e):o,...null!==r?{fillOpacity:r===i?1:.2}:null}))}],26123),e.s(["Pie",()=>el,"computePieSectors",()=>ea],865749);var a=e.i(191788),n=e.i(449691),r=e.i(56206),o=e.i(451400),i=e.i(399479),l=e.i(868413),s=e.i(516257),d=e.i(299887);function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach(function(t){var n,r,o;n=e,r=t,o=a[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var m=(0,o.createSelector)([d.selectUnfilteredPolarItems,(e,t)=>t],(e,t)=>e.filter(e=>"pie"===e.type).find(e=>e.id===t)),p=[],h=(e,t,a)=>(null==a?void 0:a.length)===0?p:a,f=(0,o.createSelector)([i.selectChartDataAndAlwaysIgnoreIndexes,m,h],(e,t,a)=>{var n,{chartData:r}=e;if(null!=t&&((n=(null==t?void 0:t.data)!=null&&t.data.length>0?t.data:r)&&n.length||null==a||(n=a.map(e=>u(u({},t.presentationProps),e.props))),null!=n))return n}),g=(0,o.createSelector)([f,m,h],(e,t,a)=>{if(null!=e&&null!=t)return e.map((e,n)=>{var r,o,i=(0,s.getValueByDataKey)(e,t.nameKey,t.name);return o=null!=a&&null!=(r=a[n])&&null!=(r=r.props)&&r.fill?a[n].props.fill:"object"==typeof e&&null!=e&&"fill"in e?e.fill:t.fill,{value:(0,s.getTooltipNameProp)(i,t.dataKey),color:o,payload:e,type:t.legendType}})}),y=(0,o.createSelector)([f,m,h,l.selectChartOffsetInternal],(e,t,a,n)=>{if(null!=t&&null!=e)return ea({offset:n,pieSettings:t,displayedData:e,cells:a})}),x=e.i(543372),v=e.i(815954),b=e.i(366998),M=e.i(61320),D=e.i(300244),S=e.i(106043),j=e.i(193555),w=e.i(270627),Y=e.i(778979),I=e.i(134959),C=e.i(616468),E=e.i(128002),A=e.i(281695),H=e.i(836094),k=e.i(258111),T=e.i(3304),P=e.i(297974),V=e.i(768069),R=e.i(436323),L=e.i(883388),Z=e.i(355476),z=e.i(301426),N=e.i(561622),B=e.i(446354),F=e.i(174755),O=["key"],$=["onMouseEnter","onClick","onMouseLeave"],_=["id"],W=["id"];function G(){return(G=Object.assign.bind()).apply(null,arguments)}function U(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;a[n]=e[n]}return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(Object(a),!0).forEach(function(t){var n,r,o;n=e,r=t,o=a[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function J(e){var t=(0,a.useMemo)(()=>(0,S.findAllByType)(e.children,D.Cell),[e.children]),n=(0,x.useAppSelector)(a=>g(a,e.id,t));return null==n?null:a.createElement(H.SetPolarLegendPayload,{legendPayload:n})}var Q=a.memo(e=>{var{dataKey:t,nameKey:n,sectors:r,stroke:o,strokeWidth:i,fill:l,name:d,hide:c,tooltipType:u,id:m,activeShape:p}=e,h=function(e){if(null!=e&&"boolean"!=typeof e&&"function"!=typeof e){if(a.isValidElement(e)){var t,n=null==(t=e.props)?void 0:t.fill;return"string"==typeof n?n:void 0}var{fill:r}=e;return"string"==typeof r?r:void 0}}(p),f={dataDefinedOnItem:r.map(e=>{var t=e.tooltipPayload;return null==h||null==t?t:t.map(e=>q(q({},e),{},{color:h,fill:h}))}),getPosition:e=>{var t;return null==(t=r[Number(e)])?void 0:t.tooltipPosition},settings:{stroke:o,strokeWidth:i,fill:l,dataKey:t,nameKey:n,name:(0,s.getTooltipNameProp)(d,t),hide:c,type:u,color:l,unit:"",graphicalItemId:m}};return a.createElement(E.SetTooltipEntrySettings,{tooltipEntrySettings:f})});function X(e){var{sectors:t,props:n,showLabels:o}=e,{label:i,labelLine:l,dataKey:d}=n;if(!o||!i||!t)return null;var c=(0,L.svgPropertiesNoEvents)(n),u=(0,L.svgPropertiesNoEventsFromUnknown)(i),m=(0,L.svgPropertiesNoEventsFromUnknown)(l),p="object"==typeof i&&"offsetRadius"in i&&"number"==typeof i.offsetRadius&&i.offsetRadius||20,h=t.map((e,t)=>{var n,o,h=(e.startAngle+e.endAngle)/2,f=(0,j.polarToCartesian)(e.cx,e.cy,e.outerRadius+p,h),g=q(q(q(q({},c),e),{},{stroke:"none"},u),{},{index:t,textAnchor:(n=f.x)>(o=e.cx)?"start":n<o?"end":"middle"},f),y=q(q(q(q({},c),e),{},{fill:"none",stroke:e.fill},m),{},{index:t,points:[(0,j.polarToCartesian)(e.cx,e.cy,e.outerRadius,h),f],key:"line"});return a.createElement(N.ZIndexLayer,{zIndex:B.DefaultZIndexes.label,key:"label-".concat(e.startAngle,"-").concat(e.endAngle,"-").concat(e.midAngle,"-").concat(t)},a.createElement(v.Layer,null,l&&((e,t)=>{if(a.isValidElement(e))return a.cloneElement(e,t);if("function"==typeof e)return e(t);var n=(0,r.clsx)("recharts-pie-label-line","boolean"!=typeof e?e.className:""),{key:o}=t,i=U(t,O);return a.createElement(b.Curve,G({},i,{type:"linear",className:n}))})(l,y),((e,t,n)=>{if(a.isValidElement(e))return a.cloneElement(e,t);var o=n;if("function"==typeof e&&(o=e(t),a.isValidElement(o)))return o;var i=(0,r.clsx)("recharts-pie-label-text",(0,F.getClassNameFromUnknown)(e));return a.createElement(M.Text,G({},t,{alignmentBaseline:"middle",className:i}),o)})(i,g,(0,s.getValueByDataKey)(e,d))))});return a.createElement(v.Layer,{className:"recharts-pie-labels"},h)}function ee(e){var{sectors:t,props:n,showLabels:r}=e,{label:o}=n;return"object"==typeof o&&null!=o&&"position"in o?a.createElement(z.LabelListFromLabelProp,{label:o}):a.createElement(X,{sectors:t,props:n,showLabels:r})}function et(e){var{sectors:t,activeShape:n,inactiveShape:r,allOtherPieProps:o,shape:i,id:l}=e,s=(0,x.useAppSelector)(A.selectActiveTooltipIndex),d=(0,x.useAppSelector)(A.selectActiveTooltipDataKey),c=(0,x.useAppSelector)(A.selectActiveTooltipGraphicalItemId),{onMouseEnter:u,onClick:m,onMouseLeave:p}=o,h=U(o,$),f=(0,C.useMouseEnterItemDispatch)(u,o.dataKey,l),g=(0,C.useMouseLeaveItemDispatch)(p),y=(0,C.useMouseClickItemDispatch)(m,o.dataKey,l);return null==t||0===t.length?null:a.createElement(a.Fragment,null,t.map((e,u)=>{if((null==e?void 0:e.startAngle)===0&&(null==e?void 0:e.endAngle)===0&&1!==t.length)return null;var m=null==c||c===l,p=String(u)===s&&(null==d||o.dataKey===d)&&m,x=n&&p?n:s?r:null,b=q(q({},e),{},{stroke:e.stroke,tabIndex:-1,[k.DATA_ITEM_INDEX_ATTRIBUTE_NAME]:u,[k.DATA_ITEM_GRAPHICAL_ITEM_ID_ATTRIBUTE_NAME]:l});return a.createElement(v.Layer,G({key:"sector-".concat(null==e?void 0:e.startAngle,"-").concat(null==e?void 0:e.endAngle,"-").concat(e.midAngle,"-").concat(u),tabIndex:-1,className:"recharts-pie-sector"},(0,Y.adaptEventsOfChild)(h,e,u),{onMouseEnter:f(e,u),onMouseLeave:g(e,u),onClick:y(e,u)}),a.createElement(I.Shape,G({option:null!=i?i:x,index:u,shapeType:"sector",isActive:p},b)))}))}function ea(e){var t,a,n,{pieSettings:r,displayedData:o,cells:i,offset:l}=e,{cornerRadius:d,startAngle:c,endAngle:u,dataKey:m,nameKey:p,tooltipType:h}=r,f=Math.abs(r.minAngle),g=(0,w.mathSign)(u-c)*Math.min(Math.abs(u-c),360),y=Math.abs(g),x=o.length<=1?0:null!=(t=r.paddingAngle)?t:0,v=o.filter(e=>0!==(0,s.getValueByDataKey)(e,m,0)).length,b=o.reduce((e,t)=>{var a=(0,s.getValueByDataKey)(t,m,0);return e+((0,w.isNumber)(a)?a:0)},0),M=f>0&&b>0&&o.some(e=>{var t=(0,s.getValueByDataKey)(e,m,0),a=((0,w.isNumber)(t)?t:0)/b;return 0!==t&&a*y<f})?f:0,D=y-v*M-(y>=360?v:v-1)*x;return b>0&&(a=o.map((e,t)=>{var a,o=(0,s.getValueByDataKey)(e,m,0),u=(0,s.getValueByDataKey)(e,p,t),f=((e,t,a)=>{var n,{top:r,left:o,width:i,height:l}=t,s=(0,j.getMaxRadius)(i,l),d=o+(0,w.getPercentValue)(e.cx,i,i/2),c=r+(0,w.getPercentValue)(e.cy,l,l/2),u=(0,w.getPercentValue)(e.innerRadius,s,0);return{cx:d,cy:c,innerRadius:u,outerRadius:(n=e.outerRadius,"function"==typeof n?(0,w.getPercentValue)(n(a),s,.8*s):(0,w.getPercentValue)(n,s,.8*s)),maxRadius:e.maxRadius||Math.sqrt(i*i+l*l)/2}})(r,l,e),y=((0,w.isNumber)(o)?o:0)/b,v=q(q({},e),i&&i[t]&&i[t].props),S=null!=v&&"fill"in v&&"string"==typeof v.fill?v.fill:r.fill,Y=(a=t?n.endAngle+(0,w.mathSign)(g)*x*(0!==o):c)+(0,w.mathSign)(g)*((0!==o?M:0)+y*D),I=(a+Y)/2,C=(f.innerRadius+f.outerRadius)/2,E=[{name:u,value:o,payload:v,dataKey:m,type:h,color:S,fill:S,graphicalItemId:r.id}],A=(0,j.polarToCartesian)(f.cx,f.cy,C,I);return n=q(q(q(q({},r.presentationProps),{},{percent:y,cornerRadius:"string"==typeof d?parseFloat(d):d,name:u,tooltipPayload:E,midAngle:I,middleRadius:C,tooltipPosition:A},v),f),{},{value:o,dataKey:m,startAngle:a,endAngle:Y,payload:v,paddingAngle:0!==o?(0,w.mathSign)(g)*x:0})})),a}function en(e){var{showLabels:t,sectors:n,children:r}=e,o=(0,a.useMemo)(()=>t&&n?n.map(e=>({value:e.value,payload:e.payload,clockWise:!1,parentViewBox:void 0,viewBox:{cx:e.cx,cy:e.cy,innerRadius:e.innerRadius,outerRadius:e.outerRadius,startAngle:e.startAngle,endAngle:e.endAngle,clockWise:!1},fill:e.fill})):[],[n,t]);return a.createElement(z.PolarLabelListContextProvider,{value:t?o:void 0},r)}function er(e){var{props:t,previousSectorsRef:r,id:o}=e,{sectors:i,isAnimationActive:l,animationBegin:s,animationDuration:d,animationEasing:c,activeShape:u,inactiveShape:m,onAnimationStart:p,onAnimationEnd:h}=t,f=(0,T.useAnimationId)(t,"recharts-pie-"),g=r.current,[y,x]=(0,a.useState)(!1),b=(0,a.useCallback)(()=>{"function"==typeof h&&h(),x(!1)},[h]),M=(0,a.useCallback)(()=>{"function"==typeof p&&p(),x(!0)},[p]);return a.createElement(en,{showLabels:!y,sectors:i},a.createElement(Z.JavascriptAnimate,{animationId:f,begin:s,duration:d,isActive:l,easing:c,onAnimationStart:M,onAnimationEnd:b,key:f},e=>{var l,s=[],d=i&&i[0],c=null!=(l=null==d?void 0:d.startAngle)?l:0;return null==i||i.forEach((t,a)=>{var r=g&&g[a],o=a>0?(0,n.default)(t,"paddingAngle",0):0;if(r){var i=(0,w.interpolate)(r.endAngle-r.startAngle,t.endAngle-t.startAngle,e),l=q(q({},t),{},{startAngle:c+o,endAngle:c+i+o});s.push(l),c=l.endAngle}else{var{endAngle:d,startAngle:u}=t,m=(0,w.interpolate)(0,d-u,e),p=q(q({},t),{},{startAngle:c+o,endAngle:c+m+o});s.push(p),c=p.endAngle}}),r.current=s,a.createElement(v.Layer,null,a.createElement(et,{sectors:s,activeShape:u,inactiveShape:m,allOtherPieProps:t,shape:t.shape,id:o}))}),a.createElement(ee,{showLabels:!y,sectors:i,props:t}),t.children)}var eo={animationBegin:400,animationDuration:1500,animationEasing:"ease",cx:"50%",cy:"50%",dataKey:"value",endAngle:360,fill:"#808080",hide:!1,innerRadius:0,isAnimationActive:"auto",label:!1,labelLine:!0,legendType:"rect",minAngle:0,nameKey:"name",outerRadius:"80%",paddingAngle:0,rootTabIndex:0,startAngle:0,stroke:"#fff",zIndex:B.DefaultZIndexes.area};function ei(e){var{id:t}=e,n=U(e,_),{hide:o,className:i,rootTabIndex:l}=e,s=(0,a.useMemo)(()=>(0,S.findAllByType)(e.children,D.Cell),[e.children]),d=(0,x.useAppSelector)(e=>y(e,t,s)),c=(0,a.useRef)(null),u=(0,r.clsx)("recharts-pie",i);return o||null==d?(c.current=null,a.createElement(v.Layer,{tabIndex:l,className:u})):a.createElement(N.ZIndexLayer,{zIndex:e.zIndex},a.createElement(Q,{dataKey:e.dataKey,nameKey:e.nameKey,sectors:d,stroke:e.stroke,strokeWidth:e.strokeWidth,fill:e.fill,name:e.name,hide:e.hide,tooltipType:e.tooltipType,id:t,activeShape:e.activeShape}),a.createElement(v.Layer,{tabIndex:l,className:u},a.createElement(er,{props:q(q({},n),{},{sectors:d}),previousSectorsRef:c,id:t})))}var el=function(e){var t=(0,P.resolveDefaultProps)(e,eo),{id:n}=t,r=U(t,W),o=(0,L.svgPropertiesNoEvents)(r);return a.createElement(V.RegisterGraphicalItemId,{id:n,type:"pie"},e=>a.createElement(a.Fragment,null,a.createElement(R.SetPolarGraphicalItem,{type:"pie",id:e,data:r.data,dataKey:r.dataKey,hide:r.hide,angleAxisId:0,radiusAxisId:0,name:r.name,nameKey:r.nameKey,tooltipType:r.tooltipType,legendType:r.legendType,fill:r.fill,cx:r.cx,cy:r.cy,startAngle:r.startAngle,endAngle:r.endAngle,paddingAngle:r.paddingAngle,minAngle:r.minAngle,innerRadius:r.innerRadius,outerRadius:r.outerRadius,cornerRadius:r.cornerRadius,presentationProps:o,maxRadius:t.maxRadius}),a.createElement(J,G({},r,{id:e})),a.createElement(ei,G({},r,{id:e}))))};el.displayName="Pie";var es=e.i(471970),ed=e.i(985743);function ec(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function eu(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ec(Object(a),!0).forEach(function(t){var n,r,o;n=e,r=t,o=a[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ec(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var em=["item"],ep=eu(eu({},ed.defaultPolarChartProps),{},{layout:"centric",startAngle:0,endAngle:360}),eh=(0,a.forwardRef)((e,t)=>{var n=(0,P.resolveDefaultProps)(e,ep);return a.createElement(ed.PolarChart,{chartName:"PieChart",defaultTooltipEventType:"item",validateTooltipEventTypes:em,tooltipPayloadSearcher:es.arrayTooltipSearcher,categoricalChartProps:n,ref:t})});e.s(["PieChart",0,eh],586536)},436100,e=>{"use strict";var t=e.i(648863);let a=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:300,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],n=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 300, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`;var r=e.i(391398),o=e.i(26123),i=e.i(520916),l=e.i(577596),s={root:"m_cd8943fd"},d=e.i(232471),c=e.i(481178),u=e.i(275519),m=e.i(317477),p=e.i(779177),h=e.i(951254),f=e.i(44091),g=e.i(62904),y=e.i(391466),x=e.i(191788),v=e.i(881264),b=e.i(865749),M=e.i(586536),D=e.i(723451),S=e.i(694713);let j={withTooltip:!1,withLabelsLine:!0,paddingAngle:0,size:160,strokeWidth:1,startAngle:0,endAngle:360,tooltipDataSource:"all",labelsPosition:"outside",labelsType:"value"},w=(0,c.createVarsResolver)((e,{strokeColor:t,labelColor:a,withLabels:n,withLegend:r,size:o,labelsPosition:i})=>({root:{"--chart-stroke-color":t?(0,m.getThemeColor)(t,e):void 0,"--chart-labels-color":a?(0,m.getThemeColor)(a,e):void 0,"--chart-size":(0,p.rem)(o+(n&&"outside"===i?80:0)+80*!!r)}})),Y=(e,t,a,n,r)=>"name"===e?n:"percent"===e&&"number"==typeof a?`${(100*a).toFixed(0)}%`:"function"==typeof r&&"number"==typeof t?r(t):t,I=(0,u.factory)(e=>{let t,a,n=(0,f.useProps)("PieChart",j,e),{classNames:c,className:u,style:m,styles:p,unstyled:I,vars:C,data:E,withTooltip:A,withLegend:H,legendProps:k,tooltipAnimationDuration:T,tooltipProps:P,pieProps:V,paddingAngle:R,withLabels:L,withLabelsLine:Z,size:z,strokeWidth:N,startAngle:B,endAngle:F,tooltipDataSource:O,children:$,pieChartProps:_,labelsPosition:W,valueFormatter:G,labelsType:U,strokeColor:K,attributes:q,cellProps:J,...Q}=n,X=(0,h.useMantineTheme)(),[ee,et]=(0,x.useState)(null),ea=(0,y.useStyles)({name:"PieChart",classes:s,props:n,className:u,style:m,classNames:c,styles:p,unstyled:I,attributes:q,vars:C,varsResolver:w}),{resolvedClassNames:en,resolvedStyles:er}=(0,g.useResolvedStylesApi)({classNames:c,styles:p,props:n}),eo=(0,o.getPieChartData)({data:E,theme:X,strokeWidth:N,highlightedIndex:ee,cellProps:J});return(0,r.jsx)(d.Box,{size:z,...ea("root"),...Q,children:(0,r.jsx)(D.ResponsiveContainer,{children:(0,r.jsxs)(M.PieChart,{..._,children:[(0,r.jsx)(b.Pie,{data:eo,innerRadius:0,outerRadius:z/2,dataKey:"value",isAnimationActive:!1,paddingAngle:R,startAngle:B,endAngle:F,label:!!L&&("inside"===W?(t=U||"value",({cx:e,cy:a,midAngle:n,innerRadius:o,outerRadius:i,value:l,percent:d,name:c})=>{let u=Math.PI/180,m=Number(o)+(Number(i)-Number(o))*.5,p=Number(e)+m*Math.cos(-(n||0)*u);return(0,r.jsx)("text",{x:p,y:Number(a)+m*Math.sin(-(n||0)*u),textAnchor:p>Number(e)?"start":"end",dominantBaseline:"central",className:s.label,children:Y(t,Number(l),Number(d),c,G)})}):(a=U||"value",({x:e,y:t,cx:n,cy:o,percent:i,value:l,name:s})=>(0,r.jsx)("text",{x:e,y:t,cx:n,cy:o,textAnchor:e>Number(n)?"start":"end",fill:"var(--chart-labels-color, var(--mantine-color-dimmed))",fontFamily:"var(--mantine-font-family)",fontSize:12,children:(0,r.jsx)("tspan",{x:e,children:Y(a,Number(l),Number(i),s,G)})}))),labelLine:!!Z&&"outside"===W&&{stroke:"var(--chart-label-color, var(--mantine-color-dimmed))",strokeWidth:1},...V}),A&&(0,r.jsx)(S.Tooltip,{animationDuration:T,isAnimationActive:!1,content:({payload:e})=>(0,r.jsx)(i.ChartTooltip,{payload:E,classNames:en,styles:er,type:"radial",segmentId:"segment"===O?e?.[0]?.payload?.__segmentIndex:void 0,valueFormatter:G,attributes:q}),...P}),H&&(0,r.jsx)(v.Legend,{verticalAlign:"bottom",content:e=>(0,r.jsx)(l.ChartLegend,{payload:e.payload?.map(e=>({...e,dataKey:e.payload?.name,highlightKey:e.payload?.__segmentIndex})),onHighlight:e=>et("number"==typeof e?e:null),legendPosition:k?.verticalAlign||"bottom",classNames:en,styles:er,centered:!0,attributes:q}),...k}),$]})})})});I.displayName="@mantine/charts/PieChart",I.classes=s,I.varsResolver=w;let C={type:"code",component:function(){return(0,r.jsx)(I,{data:a})},code:[{code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}],centered:!0},E={type:"code",component:function(){return(0,r.jsx)(I,{data:a,withLegend:!0})},code:[{code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} withLegend />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}],centered:!0},A={type:"code",component:function(){return(0,r.jsx)(I,{data:a,startAngle:180,endAngle:0})},code:[{code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} startAngle={180} endAngle={0} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}],centered:!0},H={type:"configurator",component:function(e){return(0,r.jsx)(I,{...e,data:[{name:"USA",value:400,color:e.color},{name:"Other",value:200,color:"gray.6"}]})},code:e=>`
import { PieChart } from '@mantine/charts';

function Demo() {
  return (
    <PieChart
      data={[
        { name: 'USA', value: 400, color: '${e.color}' },
        { name: 'Other', value: 200, color: 'gray.6' },
      ]}
    />
  );
}
`,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:"__"}]},k={type:"code",component:function(){return(0,r.jsx)(I,{data:a,withTooltip:!0})},code:[{code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} withTooltip />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}],centered:!0},T={type:"configurator",component:function(e){return(0,r.jsx)(I,{...e,data:a,mih:300})},code:[{fileName:"Demo.tsx",code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart{{props}} data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"size",initialValue:160,min:80,max:300,step:1,libraryValue:"__"}]},P={type:"code",component:function(){return(0,r.jsx)("div",{className:"m_e00fbef3",children:(0,r.jsx)(I,{data:a,strokeColor:"var(--card-bg)"})})},code:[{code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <div className={classes.root}>
      <PieChart data={data} strokeColor="var(--card-bg)" />
    </div>
  );
}

`,language:"tsx",fileName:"Demo.tsx"},{code:`
.root {
  --card-bg: light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-5));

  background-color: var(--card-bg);
  padding: var(--mantine-spacing-md);
  border-radius: var(--mantine-radius-md);
}
`,language:"scss",fileName:"Demo.module.css"},{code:n,language:"tsx",fileName:"data.ts"}],centered:!0},V={type:"configurator",component:function(e){return(0,r.jsx)(I,{...e,data:a})},code:[{fileName:"Demo.tsx",code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart{{props}} data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"strokeWidth",initialValue:1,min:0,max:2,step:.1,libraryValue:"__"}]};var R=e.i(725695),L=e.i(883364);let Z={type:"code",component:function(){return(0,r.jsxs)(R.Group,{gap:50,children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(L.Text,{fz:"xs",mb:"sm",ta:"center",children:"Data only for hovered segment"}),(0,r.jsx)(I,{data:a,withTooltip:!0,tooltipDataSource:"segment",mx:"auto"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(L.Text,{fz:"xs",mb:"sm",ta:"center",children:"Data only for all segments"}),(0,r.jsx)(I,{data:a,withTooltip:!0,mx:"auto"})]})]})},code:[{code:`
import { Group, Text } from '@mantine/core';
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Group gap={50}>
      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for hovered segment
        </Text>
        <PieChart data={data} withTooltip tooltipDataSource="segment" mx="auto" />
      </div>

      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for all segments
        </Text>
        <PieChart data={data} withTooltip mx="auto" />
      </div>
    </Group>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}],centered:!0},z={type:"configurator",component:function(e){return(0,r.jsx)(I,{...e,withLabels:!0,data:a,miw:300})},code:[{fileName:"Demo.tsx",code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart{{props}} withLabels data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}],centered:!0,controls:[{type:"boolean",prop:"withLabelsLine",initialValue:!0,libraryValue:"__"},{type:"segmented",prop:"labelsPosition",initialValue:"outside",libraryValue:"__",data:["inside","outside"]},{type:"segmented",prop:"labelsType",initialValue:"value",libraryValue:"__",data:["value","percent","name"]}]},N={type:"code",component:function(){return(0,r.jsx)(I,{data:a,withLabelsLine:!0,labelsPosition:"outside",labelsType:"name",withLabels:!0})},code:[{code:`
import { PieChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <PieChart data={data} withLabelsLine labelsPosition="outside" labelsType="name" withLabels />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}],centered:!0};var B=(0,t.__exportAll)({angle:()=>A,color:()=>H,labelsTypeName:()=>N,legend:()=>E,size:()=>T,strokeColor:()=>P,strokeWidth:()=>V,tooltip:()=>k,tooltipDataSource:()=>Z,usage:()=>C,withLabels:()=>z});e.s(["PieChartDemos",0,B],436100)},841649,e=>{"use strict";var t=e.i(579560),a=e.i(191788);let n=/^(-?[\d.]+)px$/,r=/^(-?[\d.]+)rem$/,o=/^(-?[\d.]+)%$/;function i(e){return"string"==typeof e&&(n.test(e)||r.test(e))}function l(e){return"number"==typeof e?e:parseFloat(e)}function s(e){return e.panels.some(e=>i(e.defaultSize)||i(e.min)||i(e.max)||i(e.collapseThreshold))||i(e.step)||i(e.shiftStep)||(e.sizes?.some(i)??!1)}function d(){let e=parseFloat(getComputedStyle(document.documentElement).fontSize);return Number.isFinite(e)&&e>0?e:16}function c(e,t,a,i){if(!t)return l(e);if("number"==typeof e)return e/100*a;let s=o.exec(e);if(s)return parseFloat(s[1])/100*a;let d=r.exec(e);if(d)return parseFloat(d[1])*i;let c=n.exec(e);return c?parseFloat(c[1]):0}function u(e,t,a,n){if(!t)return 1;let r=0;return e.forEach(e=>{i(e)&&(r+=c(e,!0,a,n))}),r>a&&r>0?a/r:1}function m(e,t,a,n){if(!t)return e.map(e=>l(e));let r=0,o=0;e.forEach(e=>{i(e)?r+=c(e,!0,a,n):o+=l(e)});let s=Math.max(0,a-r),d=u(e,t,a,n);return e.map(e=>i(e)?c(e,!0,a,n)*d:o>0?l(e)/o*s:0)}function p(e,t,a,n,i,l=1){if(!a)return"string"==typeof t&&o.test(t)?`${e}%`:e;if("number"==typeof t)return n>0?e/n*100:t;if(o.test(t))return`${n>0?e/n*100:parseFloat(t)}%`;let s=l>0?e/l:e;return r.test(t)?`${i>0?s/i:0}rem`:`${s}px`}function h(e,t,a,n,r,o){let l=u(a,n,r,o),s=0;e.forEach((e,t)=>{i(a[t])&&(s+=e)});let d=l<1&&s<r-1e-6,c=d?1:l;return e.map((e,i)=>d||Math.abs(e-t[i])>1e-6?p(e,a[i],n,r,o,c):a[i])}function f(e,t,a,n){return{defaultSize:c(e.defaultSize,t,a,n),min:null!=e.min?c(e.min,t,a,n):0,max:null!=e.max?c(e.max,t,a,n):t?a:100,collapseThreshold:null!=e.collapseThreshold?c(e.collapseThreshold,t,a,n):void 0,collapsible:e.collapsible}}function g(e){return e.min??0}function y(e){return e.max??1/0}function x(e){return e.collapseThreshold??g(e)}function v(e,t,a,n){let r=[...e],o=a+1,i=r[a]+r[o],l=Math.min(y(t[a]),i-g(t[o])),s=Math.max(g(t[a]),i-y(t[o])),d=Math.min(Math.max(r[a]+n,s),l);return r[a]=d,r[o]=i-d,r}function b(e,t,a,n,r){if("function"==typeof r)return r({sizes:[...e],panels:t,handleIndex:a,delta:n});if("nearest"===r||"equal"===r){let o=("nearest"===r?function(e,t,a,n){let r=[...e];if(n>0){let e=Math.min(n,y(t[a])-r[a]),o=0;for(let n=a+1;n<r.length&&o<e;n+=1){let a=Math.min(r[n]-g(t[n]),e-o);r[n]-=a,o+=a}r[a]+=o}else if(n<0){let e=a+1,o=Math.min(Math.abs(n),y(t[e])-r[e]),i=0;for(let e=a;e>=0&&i<o;e-=1){let a=Math.min(r[e]-g(t[e]),o-i);r[e]-=a,i+=a}r[e]+=i}return r}:function(e,t,a,n){let r=[...e];if(n>0){let e=Math.min(n,y(t[a])-r[a]),o=[];for(let e=a+1;e<r.length;e+=1)r[e]>g(t[e])&&o.push(e);let i=e;for(;i>.001&&o.length>0;){let e=i/o.length,a=[];for(let n=0;n<o.length;n+=1){let l=o[n],s=r[l]-g(t[l]),d=Math.min(s,e);r[l]-=d,i-=d,s<=e+.001&&a.push(n)}for(let e=a.length-1;e>=0;e-=1)o.splice(a[e],1);if(0===a.length)break}r[a]+=e-i}else if(n<0){let e=a+1,o=Math.min(Math.abs(n),y(t[e])-r[e]),i=[];for(let e=a;e>=0;e-=1)r[e]>g(t[e])&&i.push(e);let l=o;for(;l>.001&&i.length>0;){let e=l/i.length,a=[];for(let n=0;n<i.length;n+=1){let o=i[n],s=r[o]-g(t[o]),d=Math.min(s,e);r[o]-=d,l-=d,s<=e+.001&&a.push(n)}for(let e=a.length-1;e>=0;e-=1)i.splice(a[e],1);if(0===a.length)break}r[e]+=o-l}return r})(e,t,a,n),i=a+1,l=t[a],s=t[i];if(l.collapsible&&o[a]<x(l)&&o[a]<e[a]){let e=o[a];o[i]+=e,o[a]=0}else if(s.collapsible&&o[i]<x(s)&&o[i]<e[i]){let e=o[i];o[a]+=e,o[i]=0}return o}let o=function(e,t,a,n){let r=a+1,o=t[a],i=t[r],l=e[a]+n,s=e[r]-n;if(o.collapsible&&l<x(o)&&l<e[a]){let t=[...e];return t[r]+=t[a],t[a]=0,t}if(i.collapsible&&s<x(i)&&s<e[r]){let t=[...e];return t[a]+=t[r],t[r]=0,t}return null}(e,t,a,n);return o||v(e,t,a,n)}e.s(["useSplitter",0,function(e){let{panels:n,orientation:r="horizontal",sizes:o,onSizeChange:i,onCollapseChange:u,redistribute:x,step:M=1,shiftStep:D=10,dir:S="ltr",resetOnDoubleClick:j=!0,enabled:w=!0}=e,Y=s(e),I=n.map(e=>e.defaultSize),[C,E]=(0,t.useUncontrolled)({value:o,defaultValue:I,finalValue:I,onChange:i}),[A,H]=(0,a.useState)(-1),[k,T]=(0,a.useState)(0),P=(0,a.useRef)(e);P.current=e;let V=(0,a.useRef)({isDragging:!1,handleIndex:-1,startPointer:0,containerSize:0,rootFontSize:16,pixelMode:!1,startSizes:[],startRaw:[],preCollapseSizes:[]}),R=(0,a.useRef)(null),L=(0,a.useRef)(0),Z=(0,a.useRef)(16),z=(0,a.useRef)(null),N=(0,a.useRef)(0),B=(0,a.useRef)(C);B.current=C;let F=(0,a.useRef)(I),O=C.map(e=>0===l(e)),$=(0,a.useCallback)(()=>{let e=R.current;if(!e)return 0;let t=e.getBoundingClientRect();return(P.current.orientation??"horizontal")==="horizontal"?t.width:t.height},[]),_=(0,a.useCallback)(e=>{B.current=e,E(e)},[E]),W=(0,a.useCallback)(e=>{if(!n[e]?.collapsible)return;let t=B.current;if(0===l(t[e]))return;let a=Y?L.current||$():0,r=Z.current,o=m(t,Y,a,r);F.current=[...t];let i=o[e];o[e]=0,o[0===e?1:e-1]+=i,_(o.map((e,n)=>p(e,t[n],Y,a,r))),u?.(e,!0)},[n,Y,$,_,u]),G=(0,a.useCallback)(e=>{if(!n[e]?.collapsible)return;let t=B.current;if(0!==l(t[e]))return;let a=Y?L.current||$():0,r=Z.current,o=m(t,Y,a,r),i=F.current,s=c(null!=i[e]&&0!==l(i[e])?i[e]:n[e].defaultSize,Y,a,r),d=0===e?1:e-1,h=null!=n[d].min?c(n[d].min,Y,a,r):0,f=Math.min(s,Math.max(0,o[d]-h));f<=0||(o[e]=f,o[d]-=f,_(o.map((e,n)=>p(e,t[n],Y,a,r))),u?.(e,!1))},[n,Y,$,_,u]),U=(0,a.useCallback)(e=>{0===l(B.current[e])?G(e):W(e)},[W,G]),K=(0,a.useCallback)((e,t,a,n)=>{let r=P.current.onCollapseChange;for(let o of a){let a=0===l(e[o]),i=0===t[o];!a&&i?(F.current=[...n],r?.(o,!0)):a&&!i&&r?.(o,!1)}},[]),q=(0,a.useCallback)(e=>{let t=B.current,a=e+1;if(e<0||a>=t.length)return;let n=Y?L.current||$():0,r=Z.current,o=m(t,Y,n,r),i=P.current.panels.map(e=>f(e,Y,n,r)),l=o[e]+o[a],s=i[e].defaultSize,d=s+i[a].defaultSize,c=v(o,i,e,(0===d?l/2:s/d*l)-o[e]);K(t,c,[e,a],t),_(h(c,o,t,Y,n,r))},[K,_,Y,$]),J=(0,a.useCallback)(e=>{R.current=e},[]);(0,a.useEffect)(()=>{if(!Y||"u"<typeof ResizeObserver)return;let e=R.current;if(!e)return;let t=0,a=()=>{let t=e.getBoundingClientRect(),a=(P.current.orientation??"horizontal")==="horizontal"?t.width:t.height;Z.current=d(),L.current=a,T(e=>e!==a?a:e)},n=new ResizeObserver(()=>{cancelAnimationFrame(t),t=requestAnimationFrame(a)});return n.observe(e),a(),()=>{cancelAnimationFrame(t),n.disconnect()}},[Y,r]);let Q=(0,a.useRef)(new Map),X=(0,a.useRef)(new Map),ee=(0,a.useCallback)(e=>{if(Q.current.has(e))return Q.current.get(e);let t=t=>{let a=X.current.get(e);if(a&&(a.abort(),X.current.delete(e)),!t)return;let n=new AbortController;X.current.set(e,n);let r=e=>{let t=V.current;if(!t.containerSize)return;let a=P.current,n=(a.orientation??"horizontal")==="horizontal",r=(n&&"rtl"===a.dir?-1:1)*((n?e.clientX:e.clientY)-t.startPointer),o=t.pixelMode?r:r/t.containerSize*100,i=a.panels.map(e=>f(e,t.pixelMode,t.containerSize,t.rootFontSize)),l=b(t.startSizes,i,t.handleIndex,o,a.redistribute);K(B.current,l,[t.handleIndex,t.handleIndex+1],t.startRaw);let s=h(l,t.startSizes,t.startRaw,t.pixelMode,t.containerSize,t.rootFontSize);B.current=s,E(s)},o=e=>{V.current.isDragging&&(cancelAnimationFrame(N.current),N.current=requestAnimationFrame(()=>{r(e)}))},i=e=>{let t=V.current;if(!t.isDragging)return;cancelAnimationFrame(N.current),r(e),t.isDragging=!1;let a=t.handleIndex;t.handleIndex=-1,H(-1),document.body.style.userSelect="",document.body.style.webkitUserSelect="",document.body.style.cursor="",z.current?.abort(),z.current=null,P.current.onResizeEnd?.(a,[...B.current])};t.addEventListener("pointerdown",t=>{if(!1===P.current.enabled||0!==t.button)return;let a=R.current;if(!a)return;let n=P.current,r=(n.orientation??"horizontal")==="horizontal",l=a.getBoundingClientRect(),c=r?l.width:l.height,u=r?t.clientX:t.clientY,p=s(n),h=d(),f=V.current;f.isDragging=!0,f.handleIndex=e,f.startPointer=u,f.containerSize=c,f.rootFontSize=h,f.pixelMode=p,f.startRaw=[...B.current],f.startSizes=m(f.startRaw,p,c,h),f.preCollapseSizes=[...F.current],H(e),document.body.style.userSelect="none",document.body.style.webkitUserSelect="none",document.body.style.cursor=r?"col-resize":"row-resize",n.onResizeStart?.(e),z.current?.abort(),z.current=new AbortController;let g=z.current.signal;document.addEventListener("pointermove",o,{signal:g}),document.addEventListener("pointerup",i,{signal:g}),document.addEventListener("pointercancel",i,{signal:g})},{signal:n.signal})};return Q.current.set(e,t),t},[E]),et=(0,a.useCallback)(e=>{let{index:t}=e,a=Z.current,o=m(C,Y,k,a),i=n.map(e=>f(e,Y,k,a)),l=o[t]??0,s=i[t];return{ref:ee(t),role:"separator","aria-orientation":r,"aria-valuenow":Math.round(l),"aria-valuemin":Math.round(g(s)),"aria-valuemax":Math.round(y(s)),tabIndex:0,onKeyDown:e=>{if(!w)return;let a="horizontal"===r,o="rtl"===S,i=Y?L.current||$():0,l=Z.current,s=m(C,Y,i,l),d=n.map(e=>f(e,Y,i,l)),u=d[t],p=d[t+1],v=0,j=c(e.shiftKey?D:M,Y,i,l);switch(e.key){case"ArrowLeft":if(!a)return;v=o?j:-j;break;case"ArrowRight":if(!a)return;v=o?-j:j;break;case"ArrowUp":if(a)return;v=-j;break;case"ArrowDown":if(a)return;v=j;break;case"Home":v=-(s[t]-g(u));break;case"End":v=y(u)-s[t];break;case"Enter":{let a=u?.collapsible,n=p?.collapsible;if(a&&s[t]<=s[t+1]){U(t),e.preventDefault();return}if(n){U(t+1),e.preventDefault();return}a&&(U(t),e.preventDefault());return}default:return}if(e.preventDefault(),0!==v){let e=b(s,d,t,v,x);K(C,e,[t,t+1],C),_(h(e,s,C,Y,i,l))}},onDoubleClick:()=>{w&&j&&q(t)},"data-active":A===t||void 0,"data-orientation":r}},[r,C,n,Y,k,w,S,M,D,j,A,x,$,ee,U,_,K,q]);return(0,a.useEffect)(()=>()=>{z.current?.abort(),z.current=null,X.current.forEach(e=>e.abort()),X.current.clear(),cancelAnimationFrame(N.current),V.current.isDragging&&(V.current.isDragging=!1,document.body.style.userSelect="",document.body.style.webkitUserSelect="",document.body.style.cursor="")},[]),{ref:J,sizes:C,pixelMode:Y,collapsed:O,activeHandle:A,getHandleProps:et,setSizes:_,collapse:W,expand:G,toggleCollapse:U,reset:q}}])},598386,e=>{"use strict";var t=e.i(648863),a=e.i(779177),n=e.i(481178),r=e.i(317477),o=e.i(44091),i=e.i(391466),l=e.i(275519),s=e.i(232471),d=e.i(323283),c=e.i(191788),u=e.i(391398);function m(e){return(0,u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,u.jsx)("path",{d:"M8 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,u.jsx)("path",{d:"M8 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,u.jsx)("path",{d:"M8 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,u.jsx)("path",{d:"M14 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,u.jsx)("path",{d:"M14 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,u.jsx)("path",{d:"M14 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"})]})}function p(e){return(0,u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,u.jsx)("path",{d:"M4 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,u.jsx)("path",{d:"M4 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,u.jsx)("path",{d:"M11 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,u.jsx)("path",{d:"M11 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,u.jsx)("path",{d:"M18 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,u.jsx)("path",{d:"M18 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"})]})}let[h,f]=(0,e.i(386179).createSafeContext)("Splitter component was not found in the tree");var g={root:"m_19e66008",pane:"m_19e5428e",handle:"m_27f81bce",thumb:"m_22feb770"};let y=(0,l.factory)(e=>{let t=(0,o.useProps)("SplitterPane",null,e),{className:a,classNames:n,style:r,styles:i,vars:l,children:d,defaultSize:c,min:m,max:p,collapsible:h,collapseThreshold:g,__index:y,mod:x,...v}=t,b=f(),M=b.collapsed[y],D=b.getPaneStyle(y);return(0,u.jsx)(s.Box,{...b.getStyles("pane",{className:a,classNames:n,style:[D,r],styles:i,props:t}),mod:[{collapsed:M||void 0},x],...v,children:d})});y.classes=g,y.displayName="@mantine/core/SplitterPane";var x=e.i(332977),v=e.i(841649);let b=/^(-?[\d.]+)px$/,M=/^(-?[\d.]+)rem$/,D={orientation:"horizontal",lineSize:2,withHandle:!0,resetOnDoubleClick:!0},S=(0,n.createVarsResolver)((e,{lineSize:t,handleColor:n})=>({root:{"--splitter-line-size":(0,a.rem)(t),"--splitter-handle-color":n?(0,r.getThemeColor)(n,e):void 0}})),j=(0,l.factory)(e=>{let t=(0,o.useProps)("Splitter",D,e),{orientation:a,sizes:n,onSizeChange:r,onResizeStart:l,onResizeEnd:f,onCollapseChange:y,redistribute:j,step:w,shiftStep:Y,lineSize:I,handleColor:C,handleIcon:E,withHandle:A,resetOnDoubleClick:H,splitterRef:k,children:T,className:P,classNames:V,style:R,styles:L,unstyled:Z,vars:z,mod:N,attributes:B,ref:F,...O}=t,{dir:$}=(0,d.useDirection)(),_=c.Children.toArray(T),W=(0,v.useSplitter)({panels:_.map(e=>({defaultSize:e.props.defaultSize,min:e.props.min,max:e.props.max,collapsible:e.props.collapsible,collapseThreshold:e.props.collapseThreshold})),orientation:a,sizes:n,onSizeChange:r,onResizeStart:l,onResizeEnd:f,onCollapseChange:y,redistribute:j,step:w,shiftStep:Y,dir:$,resetOnDoubleClick:H});(0,c.useImperativeHandle)(k,()=>W,[W]);let G=(0,x.useMergedRef)(F,W.ref),U=(0,i.useStyles)({name:"Splitter",classes:g,props:t,className:P,style:R,classNames:V,styles:L,unstyled:Z,attributes:B,vars:z,varsResolver:S}),K=void 0!==E?E:"vertical"===a?(0,u.jsx)(p,{}):(0,u.jsx)(m,{}),q=[];return _.forEach((e,t)=>{if(t>0){let e=W.getHandleProps({index:t-1}),n=W.activeHandle===t-1;q.push((0,c.createElement)(s.Box,{...U("handle"),key:`handle-${t-1}`,...e},A&&(0,u.jsx)("div",{...U("thumb"),"data-orientation":a,"data-active":n||void 0,children:K})))}q.push((0,c.cloneElement)(e,{key:`pane-${t}`,__index:t}))}),(0,u.jsx)(h,{value:{getStyles:U,sizes:W.sizes,collapsed:W.collapsed,orientation:a,getPaneStyle:e=>(function(e,t){let a="number"==typeof e?e:parseFloat(e);return t?"string"==typeof e&&(b.test(e)||M.test(e))?{flexGrow:0,flexShrink:1,flexBasis:e}:{flexGrow:a,flexShrink:1,flexBasis:0}:{flexBasis:`${a}%`}})(W.sizes[e],W.pixelMode)},children:(0,u.jsx)(s.Box,{ref:G,...U("root"),mod:[{orientation:a},N],...O,children:q})})});j.classes=g,j.varsResolver=S,j.displayName="@mantine/core/Splitter",j.Pane=y;let w={type:"configurator",component:function(e){return(0,u.jsxs)(j,{...e,h:200,children:[(0,u.jsx)(j.Pane,{defaultSize:50,min:20,bg:"blue",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"First pane"}),(0,u.jsx)(j.Pane,{defaultSize:50,min:20,bg:"teal",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Second pane"})]})},code:`
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter{{props}} h={200}>
      <Splitter.Pane defaultSize={50} min={20} bg="blue">
        First pane
      </Splitter.Pane>
      <Splitter.Pane defaultSize={50} min={20} bg="teal">
        Second pane
      </Splitter.Pane>
    </Splitter>
  );
}`,centered:!0,maxWidth:"100%",controls:[{prop:"orientation",type:"segmented",initialValue:"horizontal",libraryValue:"horizontal",data:[{value:"horizontal",label:"Horizontal"},{value:"vertical",label:"Vertical"}]}]},Y={type:"code",component:function(){return(0,u.jsxs)(j,{h:200,children:[(0,u.jsx)(j.Pane,{defaultSize:"240px",min:"160px",max:"50%",bg:"blue",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Fixed 240px sidebar"}),(0,u.jsx)(j.Pane,{defaultSize:100,bg:"teal",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Flexible content"})]})},code:`
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter h={200}>
      <Splitter.Pane defaultSize="240px" min="160px" max="50%" bg="blue">
        Fixed 240px sidebar
      </Splitter.Pane>
      <Splitter.Pane defaultSize={100} bg="teal">
        Flexible content
      </Splitter.Pane>
    </Splitter>
  );
}`,centered:!0,maxWidth:"100%"},I={type:"code",component:function(){return(0,u.jsxs)(j,{orientation:"vertical",h:300,children:[(0,u.jsx)(j.Pane,{defaultSize:60,min:20,bg:"blue",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Top pane"}),(0,u.jsx)(j.Pane,{defaultSize:40,min:20,bg:"teal",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Bottom pane"})]})},code:`
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter orientation="vertical" h={300}>
      <Splitter.Pane defaultSize={60} min={20} bg="blue">
        Top pane
      </Splitter.Pane>
      <Splitter.Pane defaultSize={40} min={20} bg="teal">
        Bottom pane
      </Splitter.Pane>
    </Splitter>
  );
}`,centered:!0,maxWidth:"100%"};var C=e.i(485108),E=e.i(725695);let A={type:"code",component:function(){let e=(0,c.useRef)(null);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(j,{splitterRef:e,h:200,children:[(0,u.jsx)(j.Pane,{defaultSize:30,min:20,collapsible:!0,bg:"blue",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Collapsible sidebar"}),(0,u.jsx)(j.Pane,{defaultSize:70,min:30,bg:"teal",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Main content"})]}),(0,u.jsx)(E.Group,{mt:"md",children:(0,u.jsx)(C.Button,{size:"xs",onClick:()=>e.current?.toggleCollapse(0),children:"Toggle sidebar"})})]})},code:`
import { useRef } from 'react';
import { Button, Group, Splitter } from '@mantine/core';
import { UseSplitterReturnValue } from '@mantine/hooks';

function Demo() {
  const splitterRef = useRef<UseSplitterReturnValue>(null);

  return (
    <>
      <Splitter splitterRef={splitterRef} h={200}>
        <Splitter.Pane defaultSize={30} min={20} collapsible bg="blue">
          Collapsible sidebar
        </Splitter.Pane>
        <Splitter.Pane defaultSize={70} min={30} bg="teal">
          Main content
        </Splitter.Pane>
      </Splitter>
      <Group mt="md">
        <Button size="xs" onClick={() => splitterRef.current?.toggleCollapse(0)}>
          Toggle sidebar
        </Button>
      </Group>
    </>
  );
}`,centered:!0,maxWidth:"100%"};var H=e.i(883364);let k={type:"code",component:function(){let[e,t]=(0,c.useState)([50,50]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(j,{sizes:e,onSizeChange:e=>t(e),h:200,children:[(0,u.jsxs)(j.Pane,{defaultSize:50,min:20,bg:"blue",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:["Panel A (",Math.round(e[0]),"%)"]}),(0,u.jsxs)(j.Pane,{defaultSize:50,min:20,bg:"teal",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:["Panel B (",Math.round(e[1]),"%)"]})]}),(0,u.jsxs)(H.Text,{size:"sm",mt:"sm",children:["Current sizes: [",e.map(e=>Math.round(e)).join(", "),"]"]}),(0,u.jsxs)(E.Group,{mt:"xs",children:[(0,u.jsx)(C.Button,{size:"xs",onClick:()=>t([30,70]),children:"30 / 70"}),(0,u.jsx)(C.Button,{size:"xs",onClick:()=>t([50,50]),children:"50 / 50"}),(0,u.jsx)(C.Button,{size:"xs",onClick:()=>t([70,30]),children:"70 / 30"})]})]})},code:`
import { useState } from 'react';
import { Button, Group, Splitter, Text } from '@mantine/core';

function Demo() {
  const [sizes, setSizes] = useState([50, 50]);

  return (
    <>
      <Splitter sizes={sizes} onSizeChange={setSizes} h={200}>
        <Splitter.Pane defaultSize={50} min={20} bg="blue">
          Panel A ({Math.round(sizes[0])}%)
        </Splitter.Pane>
        <Splitter.Pane defaultSize={50} min={20} bg="teal">
          Panel B ({Math.round(sizes[1])}%)
        </Splitter.Pane>
      </Splitter>
      <Text size="sm" mt="sm">
        Current sizes: [{sizes.map((s) => Math.round(s)).join(', ')}]
      </Text>
      <Group mt="xs">
        <Button size="xs" onClick={() => setSizes([30, 70])}>30 / 70</Button>
        <Button size="xs" onClick={() => setSizes([50, 50])}>50 / 50</Button>
        <Button size="xs" onClick={() => setSizes([70, 30])}>70 / 30</Button>
      </Group>
    </>
  );
}`,centered:!0,maxWidth:"100%"},T=["blue","teal","grape"],P=["First","Second","Third"],V={type:"code",component:function(){return(0,u.jsx)(j,{h:200,children:P.map((e,t)=>(0,u.jsx)(j.Pane,{defaultSize:1===t?50:25,min:10,bg:T[t],c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:e},e))})},code:`
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter h={200}>
      <Splitter.Pane defaultSize={25} min={10} bg="blue">
        First
      </Splitter.Pane>
      <Splitter.Pane defaultSize={50} min={10} bg="teal">
        Second
      </Splitter.Pane>
      <Splitter.Pane defaultSize={25} min={10} bg="grape">
        Third
      </Splitter.Pane>
    </Splitter>
  );
}`,centered:!0,maxWidth:"100%"},R={type:"code",component:function(){return(0,u.jsxs)(j,{h:350,children:[(0,u.jsx)(j.Pane,{defaultSize:30,min:15,bg:"blue",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Sidebar"}),(0,u.jsx)(j.Pane,{defaultSize:70,min:30,children:(0,u.jsxs)(j,{orientation:"vertical",h:"100%",children:[(0,u.jsx)(j.Pane,{defaultSize:60,min:20,bg:"teal",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Editor"}),(0,u.jsx)(j.Pane,{defaultSize:40,min:20,bg:"grape",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Terminal"})]})})]})},code:`
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter h={350}>
      <Splitter.Pane defaultSize={30} min={15} bg="blue">
        Sidebar
      </Splitter.Pane>
      <Splitter.Pane defaultSize={70} min={30}>
        <Splitter orientation="vertical" h="100%">
          <Splitter.Pane defaultSize={60} min={20} bg="teal">
            Editor
          </Splitter.Pane>
          <Splitter.Pane defaultSize={40} min={20} bg="grape">
            Terminal
          </Splitter.Pane>
        </Splitter>
      </Splitter.Pane>
    </Splitter>
  );
}`,centered:!0,maxWidth:"100%"},L=["blue","teal","grape","orange"],Z=["Panel A","Panel B","Panel C","Panel D"],z={type:"code",component:function(){return(0,u.jsx)(j,{redistribute:"nearest",h:200,children:Z.map((e,t)=>(0,u.jsx)(j.Pane,{defaultSize:25,min:10,bg:L[t],c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:e},e))})},code:`
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter redistribute="nearest" h={200}>
      <Splitter.Pane defaultSize={25} min={10} bg="blue">
        Panel A
      </Splitter.Pane>
      <Splitter.Pane defaultSize={25} min={10} bg="teal">
        Panel B
      </Splitter.Pane>
      <Splitter.Pane defaultSize={25} min={10} bg="grape">
        Panel C
      </Splitter.Pane>
      <Splitter.Pane defaultSize={25} min={10} bg="orange">
        Panel D
      </Splitter.Pane>
    </Splitter>
  );
}`,centered:!0,maxWidth:"100%"},N={type:"configurator",component:function(e){return(0,u.jsxs)(j,{...e,h:200,children:[(0,u.jsx)(j.Pane,{defaultSize:50,min:20,bg:"blue",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"First pane"}),(0,u.jsx)(j.Pane,{defaultSize:50,min:20,bg:"teal",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Second pane"})]})},code:`
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter{{props}} h={200}>
      <Splitter.Pane defaultSize={50} min={20} bg="blue">
        First pane
      </Splitter.Pane>
      <Splitter.Pane defaultSize={50} min={20} bg="teal">
        Second pane
      </Splitter.Pane>
    </Splitter>
  );
}`,centered:!0,maxWidth:"100%",controls:[{prop:"lineSize",type:"number",initialValue:2,libraryValue:2,min:1,max:10,step:1}]},B={type:"code",component:function(){return(0,u.jsxs)(j,{withHandle:!1,h:200,children:[(0,u.jsx)(j.Pane,{defaultSize:50,min:20,bg:"blue",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"First pane"}),(0,u.jsx)(j.Pane,{defaultSize:50,min:20,bg:"teal",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Second pane"})]})},code:`
import { Splitter } from '@mantine/core';

function Demo() {
  return (
    <Splitter withHandle={false} h={200}>
      <Splitter.Pane defaultSize={50} min={20} bg="blue">
        First pane
      </Splitter.Pane>
      <Splitter.Pane defaultSize={50} min={20} bg="teal">
        Second pane
      </Splitter.Pane>
    </Splitter>
  );
}`,centered:!0,maxWidth:"100%"};var F=(0,t.__exportAll)({collapsible:()=>A,controlled:()=>k,cssUnits:()=>Y,lineSize:()=>N,multiple:()=>V,nested:()=>R,redistribute:()=>z,usage:()=>w,vertical:()=>I,withHandle:()=>B});e.s(["SplitterDemos",0,F],598386)},467269,e=>{"use strict";var t=e.i(648863),a=e.i(433512),n=e.i(481178),r=e.i(44091),o=e.i(391466),i=e.i(275519),l=e.i(232471);let[s,d]=(0,e.i(386179).createSafeContext)("DataList component was not found in tree");var c={root:"m_f84d0407",item:"m_f848fe38",itemLabel:"m_c791b39c",itemValue:"m_c81ec619"},u=e.i(391398);let m=(0,i.factory)(e=>{let{classNames:t,className:a,style:n,styles:o,vars:i,children:s,mod:c,...m}=(0,r.useProps)("DataListItem",null,e),p=d();return(0,u.jsx)(l.Box,{...p.getStyles("item",{classNames:t,styles:o,className:a,style:n}),mod:c,...m,children:s})});m.classes=c,m.displayName="@mantine/core/DataListItem";let p=(0,i.factory)(e=>{let{classNames:t,className:a,style:n,styles:o,vars:i,children:s,mod:c,...m}=(0,r.useProps)("DataListItemLabel",null,e),p=d();return(0,u.jsx)(l.Box,{component:"dt",...p.getStyles("itemLabel",{classNames:t,styles:o,className:a,style:n}),mod:c,...m,children:s})});p.classes=c,p.displayName="@mantine/core/DataListItemLabel";let h=(0,i.factory)(e=>{let{classNames:t,className:a,style:n,styles:o,vars:i,children:s,mod:c,...m}=(0,r.useProps)("DataListItemValue",null,e),p=d();return(0,u.jsx)(l.Box,{component:"dd",...p.getStyles("itemValue",{classNames:t,styles:o,className:a,style:n}),mod:c,...m,children:s})});h.classes=c,h.displayName="@mantine/core/DataListItemValue";let f={orientation:"horizontal"},g=(0,n.createVarsResolver)((e,{size:t,gap:n,labelWidth:r})=>({root:{"--data-list-fz":(0,a.getFontSize)(t),"--data-list-lh":(0,a.getLineHeight)(t),"--data-list-gap":(0,a.getSpacing)(n),"--data-list-label-width":void 0!==r?"number"==typeof r?`${r}px`:r:void 0}})),y=(0,i.factory)(e=>{let t=(0,r.useProps)("DataList",f,e),{classNames:a,className:n,style:i,styles:d,unstyled:m,vars:p,children:h,gap:y,orientation:x,withDivider:v,labelWidth:b,mod:M,attributes:D,...S}=t,j=(0,o.useStyles)({name:"DataList",classes:c,props:t,className:n,style:i,classNames:a,styles:d,unstyled:m,attributes:D,vars:p,varsResolver:g});return(0,u.jsx)(s,{value:{getStyles:j},children:(0,u.jsx)(l.Box,{...j("root"),component:"dl",mod:[{orientation:x,"with-divider":v},M],...S,children:h})})});y.classes=c,y.varsResolver=g,y.displayName="@mantine/core/DataList",y.Item=m,y.ItemLabel=p,y.ItemValue=h;let x=[{label:"Name",value:"John Doe"},{label:"Email",value:"john@example.com"},{label:"Role",value:"Software Engineer"},{label:"Location",value:"San Francisco, CA"}],v={type:"configurator",component:function(e){return(0,u.jsx)(y,{...e,children:x.map(e=>(0,u.jsxs)(y.Item,{children:[(0,u.jsx)(y.ItemLabel,{children:e.label}),(0,u.jsx)(y.ItemValue,{children:e.value})]},e.label))})},code:`
import { DataList } from '@mantine/core';

const data = [
  { label: 'Name', value: 'John Doe' },
  { label: 'Email', value: 'john@example.com' },
  { label: 'Role', value: 'Software Engineer' },
  { label: 'Location', value: 'San Francisco, CA' },
];

function Demo() {
  return (
    <DataList{{props}}>
      {data.map((item) => (
        <DataList.Item key={item.label}>
          <DataList.ItemLabel>{item.label}</DataList.ItemLabel>
          <DataList.ItemValue>{item.value}</DataList.ItemValue>
        </DataList.Item>
      ))}
    </DataList>
  );
}
`,controls:[{prop:"size",type:"size",libraryValue:"md",initialValue:"md"},{prop:"orientation",type:"segmented",data:[{value:"vertical",label:"Vertical"},{value:"horizontal",label:"Horizontal"}],initialValue:"vertical",libraryValue:"vertical"},{prop:"withDivider",type:"boolean",libraryValue:!1,initialValue:!1}]},b={type:"code",component:function(){return(0,u.jsxs)(y,{withDivider:!0,children:[(0,u.jsxs)(y.Item,{children:[(0,u.jsx)(y.ItemLabel,{children:"Name"}),(0,u.jsx)(y.ItemValue,{children:"John Doe"})]}),(0,u.jsxs)(y.Item,{children:[(0,u.jsx)(y.ItemLabel,{children:"Email"}),(0,u.jsx)(y.ItemValue,{children:"john@example.com"})]}),(0,u.jsxs)(y.Item,{children:[(0,u.jsx)(y.ItemLabel,{children:"Role"}),(0,u.jsx)(y.ItemValue,{children:"Software Engineer"})]})]})},code:`
import { DataList } from '@mantine/core';

function Demo() {
  return (
    <DataList withDivider>
      <DataList.Item>
        <DataList.ItemLabel>Name</DataList.ItemLabel>
        <DataList.ItemValue>John Doe</DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Email</DataList.ItemLabel>
        <DataList.ItemValue>john@example.com</DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Role</DataList.ItemLabel>
        <DataList.ItemValue>Software Engineer</DataList.ItemValue>
      </DataList.Item>
    </DataList>
  );
}
`},M={type:"code",component:function(){return(0,u.jsxs)(y,{orientation:"vertical",withDivider:!0,children:[(0,u.jsxs)(y.Item,{children:[(0,u.jsx)(y.ItemLabel,{children:"Name"}),(0,u.jsx)(y.ItemValue,{children:"John Doe"})]}),(0,u.jsxs)(y.Item,{children:[(0,u.jsx)(y.ItemLabel,{children:"Email"}),(0,u.jsx)(y.ItemValue,{children:"john@example.com"})]}),(0,u.jsxs)(y.Item,{children:[(0,u.jsx)(y.ItemLabel,{children:"Role"}),(0,u.jsx)(y.ItemValue,{children:"Software Engineer"})]})]})},code:`
import { DataList } from '@mantine/core';

function Demo() {
  return (
    <DataList orientation="vertical" withDivider>
      <DataList.Item>
        <DataList.ItemLabel>Name</DataList.ItemLabel>
        <DataList.ItemValue>John Doe</DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Email</DataList.ItemLabel>
        <DataList.ItemValue>john@example.com</DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Role</DataList.ItemLabel>
        <DataList.ItemValue>Software Engineer</DataList.ItemValue>
      </DataList.Item>
    </DataList>
  );
}
`};var D=e.i(770076);let S=`
import { DataList } from '@mantine/core';

function Demo() {
  return (
    <DataList{{props}}>
      <DataList.Item>
        <DataList.ItemLabel>Name</DataList.ItemLabel>
        <DataList.ItemValue>John Doe</DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Email</DataList.ItemLabel>
        <DataList.ItemValue>john@example.com</DataList.ItemValue>
      </DataList.Item>
      <DataList.Item>
        <DataList.ItemLabel>Role</DataList.ItemLabel>
        <DataList.ItemValue>Software Engineer</DataList.ItemValue>
      </DataList.Item>
    </DataList>
  );
}
`,j={type:"styles-api",data:D.DataListStylesApi,component:function(e){return(0,u.jsxs)(y,{...e,children:[(0,u.jsxs)(y.Item,{children:[(0,u.jsx)(y.ItemLabel,{children:"Name"}),(0,u.jsx)(y.ItemValue,{children:"John Doe"})]}),(0,u.jsxs)(y.Item,{children:[(0,u.jsx)(y.ItemLabel,{children:"Email"}),(0,u.jsx)(y.ItemValue,{children:"john@example.com"})]}),(0,u.jsxs)(y.Item,{children:[(0,u.jsx)(y.ItemLabel,{children:"Role"}),(0,u.jsx)(y.ItemValue,{children:"Software Engineer"})]})]})},code:S,centered:!0};var w=(0,t.__exportAll)({divider:()=>b,stylesApi:()=>j,usage:()=>v,vertical:()=>M});e.s(["DataListDemos",0,w],467269)},338333,e=>{"use strict";var t=e.i(648863),a=e.i(719834),n=e.i(485108),r=e.i(433512),o=e.i(481178),i=e.i(44091),l=e.i(391466),s=e.i(275519),d=e.i(232471);let[c,u]=(0,e.i(386179).createSafeContext)("EmptyState component was not found in tree");var m={root:"m_7ffcadab",body:"m_7ff5666b",indicator:"m_866226e6",title:"m_7fb28eaf",description:"m_5f111313",actions:"m_65f4fb94"},p=e.i(391398);let h=(0,s.factory)(e=>{let{classNames:t,className:a,style:n,styles:r,vars:o,children:l,mod:s,...c}=(0,i.useProps)("EmptyStateActions",null,e);return(0,p.jsx)(d.Box,{mod:s,...u().getStyles("actions",{className:a,style:n,classNames:t,styles:r}),...c,children:l})});h.classes=m,h.displayName="@mantine/core/EmptyStateActions";let f=(0,s.factory)(e=>{let{classNames:t,className:a,style:n,styles:r,vars:o,children:l,mod:s,...c}=(0,i.useProps)("EmptyStateDescription",null,e);return(0,p.jsx)(d.Box,{component:"p",mod:s,...u().getStyles("description",{className:a,style:n,classNames:t,styles:r}),...c,children:l})});f.classes=m,f.displayName="@mantine/core/EmptyStateDescription";let g=(0,s.factory)(e=>{let{classNames:t,className:a,style:n,styles:r,vars:o,children:l,mod:s,...c}=(0,i.useProps)("EmptyStateIndicator",null,e),m=u();return(0,p.jsx)(d.Box,{mod:[{"with-background":m.withIndicatorBackground},s],...m.getStyles("indicator",{className:a,style:n,classNames:t,styles:r}),...c,children:l})});g.classes=m,g.displayName="@mantine/core/EmptyStateIndicator";let y=(0,s.factory)(e=>{let{classNames:t,className:a,style:n,styles:r,vars:o,children:l,order:s,mod:c,...m}=(0,i.useProps)("EmptyStateTitle",null,e),h=u();return(0,p.jsx)(d.Box,{component:s?`h${s}`:"div",mod:c,...h.getStyles("title",{className:a,style:n,classNames:t,styles:r}),...m,children:l})});y.classes=m,y.displayName="@mantine/core/EmptyStateTitle";var x=e.i(191788);let v={size:"md",align:"center"},b=(0,o.createVarsResolver)((e,{size:t,variant:a,color:n})=>{let o=a?e.variantColorResolver({color:n||e.primaryColor,theme:e,variant:a}):null;return{root:{"--empty-state-indicator-size":(0,r.getSize)(t,"empty-state-indicator-size"),"--empty-state-gap":(0,r.getSize)(t,"empty-state-gap"),"--empty-state-title-fz":(0,r.getSize)(t,"empty-state-title-fz"),"--empty-state-description-fz":(0,r.getSize)(t,"empty-state-description-fz"),"--empty-state-indicator-bg":o?o.background:void 0,"--empty-state-indicator-color":o?o.color:void 0}}}),M=(0,s.factory)(e=>{let t,a,n=(0,i.useProps)("EmptyState",v,e),{classNames:r,className:o,style:s,styles:u,unstyled:h,vars:M,align:D,variant:S,color:j,title:w,description:Y,icon:I,withIndicatorBackground:C,children:E,mod:A,attributes:H,...k}=n,T=(0,l.useStyles)({name:"EmptyState",classes:m,props:n,className:o,style:s,classNames:r,styles:u,unstyled:h,attributes:H,vars:M,varsResolver:b}),P=[],V=null;(t=[],(a=e=>{x.Children.forEach(e,e=>{(0,x.isValidElement)(e)&&e.type===x.Fragment?a(e.props.children):t.push(e)})})(E),x.Children.toArray(t)).forEach(e=>{(0,x.isValidElement)(e)&&(e.type===g||e.type?.displayName==="@mantine/core/EmptyStateIndicator")?V=e:P.push(e)});let R=I?(0,p.jsx)(g,{children:I}):V,L=null!=w||null!=Y||P.length>0;return(0,p.jsx)(c,{value:{getStyles:T,withIndicatorBackground:C||!!S},children:(0,p.jsxs)(d.Box,{...T("root",{variant:S}),variant:S,mod:[{align:D},A],...k,children:[R,L&&(0,p.jsxs)("div",{...T("body"),children:[w&&(0,p.jsx)(y,{children:w}),Y&&(0,p.jsx)(f,{children:Y}),P]})]})})});M.classes=m,M.varsResolver=b,M.displayName="@mantine/core/EmptyState",M.Indicator=g,M.Title=y,M.Description=f,M.Actions=h;let D={type:"configurator",component:function(e){return(0,p.jsx)(M,{icon:(0,p.jsx)(a.MagnifyingGlassIcon,{}),title:"No results found",description:"We couldn't find anything matching your search. Try adjusting your filters or searching with different keywords to see more results.",...e,children:(0,p.jsx)(M.Actions,{children:(0,p.jsx)(n.Button,{variant:"default",children:"Reset filters"})})})},code:`
import { Button, EmptyState } from '@mantine/core';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <EmptyState
      icon={<MagnifyingGlassIcon />}
      title="No results found"
      description="We couldn't find anything matching your search. Try adjusting your filters or searching with different keywords to see more results."{{props}}
    >
      <EmptyState.Actions>
        <Button variant="default">Reset filters</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
}
`,centered:!0,maxWidth:420,controls:[{prop:"size",type:"size",libraryValue:"md",initialValue:"md"},{prop:"align",type:"segmented",data:[{value:"center",label:"Center"},{value:"left",label:"Left"},{value:"right",label:"Right"}],initialValue:"center",libraryValue:"center"},{prop:"withIndicatorBackground",type:"boolean",libraryValue:!1,initialValue:!1}]},S={type:"code",component:function(){return(0,p.jsxs)(M,{children:[(0,p.jsx)(M.Indicator,{children:(0,p.jsx)(a.MagnifyingGlassIcon,{})}),(0,p.jsx)(M.Title,{children:"No results found"}),(0,p.jsx)(M.Description,{children:"We couldn't find anything matching your search. Try adjusting your filters or searching with different keywords to see more results."}),(0,p.jsxs)(M.Actions,{children:[(0,p.jsx)(n.Button,{variant:"default",children:"Reset filters"}),(0,p.jsx)(n.Button,{variant:"default",children:"Create new"})]})]})},code:`
import { Button, EmptyState } from '@mantine/core';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <EmptyState>
      <EmptyState.Indicator>
        <MagnifyingGlassIcon />
      </EmptyState.Indicator>
      <EmptyState.Title>No results found</EmptyState.Title>
      <EmptyState.Description>
        We couldn't find anything matching your search. Try adjusting your filters or searching with
        different keywords to see more results.
      </EmptyState.Description>
      <EmptyState.Actions>
        <Button variant="default">Reset filters</Button>
        <Button variant="default">Create new</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
}
`,centered:!0,maxWidth:440},j={type:"configurator",component:function(e){return(0,p.jsx)(M,{icon:(0,p.jsx)(a.MagnifyingGlassIcon,{}),title:"No results found",description:"We couldn't find anything matching your search. Try adjusting your filters or searching with different keywords to see more results.",...e})},code:`
import { EmptyState } from '@mantine/core';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <EmptyState
      icon={<MagnifyingGlassIcon />}
      title="No results found"
      description="We couldn't find anything matching your search. Try adjusting your filters or searching with different keywords to see more results."{{props}}
    />
  );
}
`,centered:!0,maxWidth:420,controls:[{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"light",label:"Light"}],initialValue:"light",libraryValue:"light"},{prop:"color",type:"color",initialValue:"blue",libraryValue:null}]};var w=e.i(171481);let Y=new Map([["bold",x.createElement(x.Fragment,null,x.createElement("path",{d:"M241.55,64.74A12,12,0,0,0,232,60H60.23L51.56,28.79A12,12,0,0,0,40,20H20a12,12,0,0,0,0,24H30.88l34.3,123.49a28.09,28.09,0,0,0,27,20.51H191a28.09,28.09,0,0,0,27-20.51l25.63-92.28A12,12,0,0,0,241.55,64.74ZM194.8,161.07A4,4,0,0,1,191,164H92.16a4,4,0,0,1-3.85-2.93L66.9,84H216.21ZM108,220a20,20,0,1,1-20-20A20,20,0,0,1,108,220Zm104,0a20,20,0,1,1-20-20A20,20,0,0,1,212,220Z"}))],["duotone",x.createElement(x.Fragment,null,x.createElement("path",{d:"M232,72l-25.63,92.28A16,16,0,0,1,191,176H92.16a16,16,0,0,1-15.41-11.72L51.11,72Z",opacity:"0.2"}),x.createElement("path",{d:"M104,216a16,16,0,1,1-16-16A16,16,0,0,1,104,216Zm88-16a16,16,0,1,0,16,16A16,16,0,0,0,192,200ZM239.71,74.14l-25.64,92.28A24.06,24.06,0,0,1,191,184H92.16A24.06,24.06,0,0,1,69,166.42L33.92,40H16a8,8,0,0,1,0-16H40a8,8,0,0,1,7.71,5.86L57.19,64H232a8,8,0,0,1,7.71,10.14ZM221.47,80H61.64l22.81,82.14A8,8,0,0,0,92.16,168H191a8,8,0,0,0,7.71-5.86Z"}))],["fill",x.createElement(x.Fragment,null,x.createElement("path",{d:"M239.71,74.14l-25.64,92.28A24.06,24.06,0,0,1,191,184H92.16A24.06,24.06,0,0,1,69,166.42L33.92,40H16a8,8,0,0,1,0-16H40a8,8,0,0,1,7.71,5.86L57.19,64H232a8,8,0,0,1,7.71,10.14ZM88,200a16,16,0,1,0,16,16A16,16,0,0,0,88,200Zm104,0a16,16,0,1,0,16,16A16,16,0,0,0,192,200Z"}))],["light",x.createElement(x.Fragment,null,x.createElement("path",{d:"M236.78,68.37A6,6,0,0,0,232,66H55.67L45.78,30.39A6,6,0,0,0,40,26H16a6,6,0,0,0,0,12H35.44L71,165.89A22.08,22.08,0,0,0,92.16,182H191a22.08,22.08,0,0,0,21.2-16.11l25.63-92.28A6,6,0,0,0,236.78,68.37Zm-36.2,94.31A10,10,0,0,1,191,170H92.16a10,10,0,0,1-9.63-7.32L59,78H224.11ZM102,216a14,14,0,1,1-14-14A14,14,0,0,1,102,216Zm104,0a14,14,0,1,1-14-14A14,14,0,0,1,206,216Z"}))],["regular",x.createElement(x.Fragment,null,x.createElement("path",{d:"M104,216a16,16,0,1,1-16-16A16,16,0,0,1,104,216Zm88-16a16,16,0,1,0,16,16A16,16,0,0,0,192,200ZM239.71,74.14l-25.64,92.28A24.06,24.06,0,0,1,191,184H92.16A24.06,24.06,0,0,1,69,166.42L33.92,40H16a8,8,0,0,1,0-16H40a8,8,0,0,1,7.71,5.86L57.19,64H232a8,8,0,0,1,7.71,10.14ZM221.47,80H61.64l22.81,82.14A8,8,0,0,0,92.16,168H191a8,8,0,0,0,7.71-5.86Z"}))],["thin",x.createElement(x.Fragment,null,x.createElement("path",{d:"M235.18,69.58A4,4,0,0,0,232,68H54.15L43.85,30.93A4,4,0,0,0,40,28H16a4,4,0,0,0,0,8H37L72.89,165.35A20.06,20.06,0,0,0,92.16,180H191a20.06,20.06,0,0,0,19.27-14.65l25.63-92.28A4,4,0,0,0,235.18,69.58Zm-32.67,93.63A12,12,0,0,1,191,172H92.16a12,12,0,0,1-11.56-8.79L56.37,76H226.74ZM100,216a12,12,0,1,1-12-12A12,12,0,0,1,100,216Zm104,0a12,12,0,1,1-12-12A12,12,0,0,1,204,216Z"}))]]),I=x.forwardRef((e,t)=>x.createElement(w.default,{ref:t,...e,weights:Y}));I.displayName="ShoppingCartSimpleIcon";let C={type:"code",component:function(){return(0,p.jsxs)(M,{withIndicatorBackground:!0,icon:(0,p.jsx)(I,{}),title:"Your cart is empty",children:[(0,p.jsx)(M.Description,{children:"Your shopping cart is empty right now. Browse our catalog and add the items you like to get started with your first order."}),(0,p.jsx)(M.Actions,{children:(0,p.jsx)(n.Button,{variant:"default",children:"Browse products"})})]})},code:`
import { Button, EmptyState } from '@mantine/core';
import { ShoppingCartSimpleIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <EmptyState withIndicatorBackground icon={<ShoppingCartSimpleIcon />} title="Your cart is empty">
      <EmptyState.Description>
        Your shopping cart is empty right now. Browse our catalog and add the items you like to get
        started with your first order.
      </EmptyState.Description>
      <EmptyState.Actions>
        <Button variant="default">Browse products</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
}
`,centered:!0,maxWidth:440};var E=e.i(711253);let A=`
import { Button, EmptyState } from '@mantine/core';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <EmptyState
      icon={<MagnifyingGlassIcon />}
      title="No results found"
      description="We couldn't find anything matching your search. Try adjusting your filters or searching with different keywords to see more results."{{props}}
    >
      <EmptyState.Actions>
        <Button variant="default">Reset filters</Button>
      </EmptyState.Actions>
    </EmptyState>
  );
}
`,H={type:"styles-api",data:E.EmptyStateStylesApi,component:function(e){return(0,p.jsx)(M,{icon:(0,p.jsx)(a.MagnifyingGlassIcon,{}),title:"No results found",description:"We couldn't find anything matching your search. Try adjusting your filters or searching with different keywords to see more results.",...e,children:(0,p.jsx)(M.Actions,{children:(0,p.jsx)(n.Button,{variant:"default",children:"Reset filters"})})})},code:A,centered:!0,maxWidth:440};var k=(0,t.__exportAll)({compound:()=>S,indicatorBackground:()=>C,stylesApi:()=>H,usage:()=>D,variant:()=>j});e.s(["EmptyStateDemos",0,k],338333)},374137,e=>{"use strict";var t=e.i(648863),a=e.i(391398),n=e.i(494834),r=e.i(663551);let o=(0,n.default)().format("YYYY-MM-DD"),i=(0,n.default)().startOf("month").format("YYYY-MM-DD"),l=[{id:"team-meeting",title:"Team Meeting",start:`${i} 09:00:00`,end:`${i} 10:30:00`,color:"blue"},{id:"client-call",title:"Client Call",start:`${o} 14:00:00`,end:`${o} 15:00:00`,color:"green"},{id:"workshop",title:"Workshop",start:(0,n.default)().add(3,"day").format("YYYY-MM-DD 10:00:00"),end:(0,n.default)().add(3,"day").format("YYYY-MM-DD 12:00:00"),color:"orange"},{id:"daily-sync-series",title:"Daily sync",start:`${i} 09:30:00`,end:`${i} 10:00:00`,color:"grape",recurrence:{rrule:"FREQ=DAILY;BYDAY=MO,TU,WE,TH,FR;COUNT=30"}},{id:"weekly-review-series",title:"Weekly review",start:`${i} 16:00:00`,end:`${i} 17:00:00`,color:"cyan",recurrence:{rrule:"FREQ=WEEKLY;COUNT=8"}}],s={defaultExpanded:!1,type:"code",component:function(){return(0,a.jsx)(r.AgendaView,{rangeStart:(0,n.default)().startOf("month").format("YYYY-MM-DD"),rangeEnd:(0,n.default)().endOf("month").format("YYYY-MM-DD"),events:l})},centered:!0,maxWidth:500,code:`
import dayjs from 'dayjs';
import { AgendaView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');

const events = [
  {
    id: 'team-meeting',
    title: 'Team Meeting',
    start: \`\${startOfMonth} 09:00:00\`,
    end: \`\${startOfMonth} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 'client-call',
    title: 'Client Call',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
  {
    id: 'daily-sync-series',
    title: 'Daily sync',
    start: \`\${startOfMonth} 09:30:00\`,
    end: \`\${startOfMonth} 10:00:00\`,
    color: 'grape',
    recurrence: {
      rrule: 'FREQ=DAILY;BYDAY=MO,TU,WE,TH,FR;COUNT=30',
    },
  },
  {
    id: 'weekly-review-series',
    title: 'Weekly review',
    start: \`\${startOfMonth} 16:00:00\`,
    end: \`\${startOfMonth} 17:00:00\`,
    color: 'cyan',
    recurrence: {
      rrule: 'FREQ=WEEKLY;COUNT=8',
    },
  },
];

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().startOf('month').format('YYYY-MM-DD')}
      rangeEnd={dayjs().endOf('month').format('YYYY-MM-DD')}
      events={events}
    />
  );
}
`},d=(0,n.default)().format("YYYY-MM-DD"),c=[{id:"timed",title:"Team Meeting",start:`${d} 10:00:00`,end:`${d} 11:30:00`,color:"blue"},{id:"allday",title:"Company Holiday",start:(0,n.default)().add(1,"day").format("YYYY-MM-DD 00:00:00"),end:(0,n.default)().add(2,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"},{id:"multiday",title:"Sales Conference",start:(0,n.default)().add(2,"day").format("YYYY-MM-DD 00:00:00"),end:(0,n.default)().add(5,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"grape"},{id:"timed-2",title:"Client Call",start:(0,n.default)().add(3,"day").format("YYYY-MM-DD 14:00:00"),end:(0,n.default)().add(3,"day").format("YYYY-MM-DD 15:00:00"),color:"green"},{id:"evening",title:"Dinner Event",start:(0,n.default)().add(4,"day").format("YYYY-MM-DD 19:00:00"),end:(0,n.default)().add(4,"day").format("YYYY-MM-DD 21:00:00"),color:"orange"}],u={defaultExpanded:!1,type:"code",component:function(){return(0,a.jsx)(r.AgendaView,{rangeStart:(0,n.default)().format("YYYY-MM-DD"),rangeEnd:(0,n.default)().add(7,"day").format("YYYY-MM-DD"),events:c})},centered:!0,maxWidth:500,code:`
import dayjs from 'dayjs';
import { AgendaView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 'timed',
    title: 'Team Meeting',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'blue',
  },
  {
    id: 'allday',
    title: 'Company Holiday',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(2, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 'multiday',
    title: 'Sales Conference',
    start: dayjs().add(2, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(5, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'grape',
  },
  {
    id: 'timed-2',
    title: 'Client Call',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 14:00:00'),
    end: dayjs().add(3, 'day').format('YYYY-MM-DD 15:00:00'),
    color: 'green',
  },
  {
    id: 'evening',
    title: 'Dinner Event',
    start: dayjs().add(4, 'day').format('YYYY-MM-DD 19:00:00'),
    end: dayjs().add(4, 'day').format('YYYY-MM-DD 21:00:00'),
    color: 'orange',
  },
];

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().format('YYYY-MM-DD')}
      rangeEnd={dayjs().add(7, 'day').format('YYYY-MM-DD')}
      events={events}
    />
  );
}
`},m=(0,n.default)().format("YYYY-MM-DD"),p=[{id:"standup",title:"Morning Standup",start:`${m} 09:00:00`,end:`${m} 09:30:00`,color:"blue"},{id:"meeting",title:"Team Meeting",start:(0,n.default)().add(1,"day").format("YYYY-MM-DD 10:00:00"),end:(0,n.default)().add(1,"day").format("YYYY-MM-DD 11:30:00"),color:"green"},{id:"review",title:"Code Review",start:(0,n.default)().add(2,"day").format("YYYY-MM-DD 14:00:00"),end:(0,n.default)().add(2,"day").format("YYYY-MM-DD 15:00:00"),color:"violet"}],h={defaultExpanded:!1,type:"code",component:function(){return(0,a.jsx)(r.AgendaView,{rangeStart:(0,n.default)().format("YYYY-MM-DD"),rangeEnd:(0,n.default)().add(7,"day").format("YYYY-MM-DD"),events:p,headerFormat:"MMM D",dateHeaderFormat:"ddd, D MMM"})},centered:!0,maxWidth:500,code:`
import dayjs from 'dayjs';
import { AgendaView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 'standup',
    title: 'Morning Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 'meeting',
    title: 'Team Meeting',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(1, 'day').format('YYYY-MM-DD 11:30:00'),
    color: 'green',
  },
  {
    id: 'review',
    title: 'Code Review',
    start: dayjs().add(2, 'day').format('YYYY-MM-DD 14:00:00'),
    end: dayjs().add(2, 'day').format('YYYY-MM-DD 15:00:00'),
    color: 'violet',
  },
];

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().format('YYYY-MM-DD')}
      rangeEnd={dayjs().add(7, 'day').format('YYYY-MM-DD')}
      events={events}
      headerFormat="MMM D"
      dateHeaderFormat="ddd, D MMM"
    />
  );
}
`};var f=e.i(257177),g=e.i(232471),y=e.i(725695),x=e.i(883364),v=e.i(284629);let b=(0,n.default)().format("YYYY-MM-DD"),M=[{id:"standup",title:"Team Standup",start:`${b} 09:00:00`,end:`${b} 09:30:00`,color:"blue",payload:{location:"Room A",category:"meeting"}},{id:"workshop",title:"Design Workshop",start:`${b} 10:00:00`,end:`${b} 12:00:00`,color:"grape",payload:{location:"Creative Space",category:"workshop"}},{id:"review",title:"Code Review",start:(0,n.default)().add(1,"day").format("YYYY-MM-DD 14:00:00"),end:(0,n.default)().add(1,"day").format("YYYY-MM-DD 15:00:00"),color:"green",payload:{location:"Zoom",category:"dev"}},{id:"conference",title:"Tech Conference",start:(0,n.default)().add(2,"day").format("YYYY-MM-DD 00:00:00"),end:(0,n.default)().add(3,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red",payload:{location:"Convention Center",category:"event"}}],D={defaultExpanded:!1,type:"code",component:function(){return(0,a.jsx)(r.AgendaView,{rangeStart:(0,n.default)().format("YYYY-MM-DD"),rangeEnd:(0,n.default)().add(7,"day").format("YYYY-MM-DD"),events:M,renderEvent:(e,t)=>(0,a.jsx)(v.UnstyledButton,{...t,children:(0,a.jsxs)(g.Box,{style:{display:"flex",gap:"var(--mantine-spacing-sm)",padding:"var(--mantine-spacing-xs) var(--mantine-spacing-sm)"},children:[(0,a.jsx)(g.Box,{style:{width:4,borderRadius:2,flexShrink:0,backgroundColor:`var(--mantine-color-${e.color}-filled)`}}),(0,a.jsxs)("div",{style:{flex:1},children:[(0,a.jsxs)(y.Group,{justify:"space-between",wrap:"nowrap",children:[(0,a.jsx)(x.Text,{size:"sm",fw:500,children:e.title}),(0,a.jsx)(f.Badge,{size:"xs",variant:"light",color:e.color,children:e.payload?.category})]}),(0,a.jsxs)(x.Text,{size:"xs",c:"dimmed",children:[(0,n.default)(e.start).format("HH:mm")," – ",(0,n.default)(e.end).format("HH:mm")]}),e.payload?.location&&(0,a.jsxs)(x.Text,{size:"xs",c:"dimmed",mt:2,children:["📍"," ",e.payload.location]})]})]})})})},centered:!0,maxWidth:500,code:`
import dayjs from 'dayjs';
import { Badge, Box, Group, Text, UnstyledButton } from '@mantine/core';
import { AgendaView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events: ScheduleEventData[] = [
  {
    id: 'standup',
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    payload: { location: 'Room A', category: 'meeting' },
  },
  {
    id: 'workshop',
    title: 'Design Workshop',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'grape',
    payload: { location: 'Creative Space', category: 'workshop' },
  },
  {
    id: 'review',
    title: 'Code Review',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 14:00:00'),
    end: dayjs().add(1, 'day').format('YYYY-MM-DD 15:00:00'),
    color: 'green',
    payload: { location: 'Zoom', category: 'dev' },
  },
  {
    id: 'conference',
    title: 'Tech Conference',
    start: dayjs().add(2, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(3, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
    payload: { location: 'Convention Center', category: 'event' },
  },
];

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().format('YYYY-MM-DD')}
      rangeEnd={dayjs().add(7, 'day').format('YYYY-MM-DD')}
      events={events}
      renderEvent={(event, props) => (
        <UnstyledButton {...props}>
          <Box
            style={{
              display: 'flex',
              gap: 'var(--mantine-spacing-sm)',
              padding: 'var(--mantine-spacing-xs) var(--mantine-spacing-sm)',
            }}
          >
            <Box
              style={{
                width: 4,
                borderRadius: 2,
                flexShrink: 0,
                backgroundColor: \`var(--mantine-color-\${event.color}-filled)\`,
              }}
            />
            <div style={{ flex: 1 }}>
              <Group justify="space-between" wrap="nowrap">
                <Text size="sm" fw={500}>
                  {event.title}
                </Text>
                <Badge size="xs" variant="light" color={event.color}>
                  {event.payload?.category}
                </Badge>
              </Group>
              <Text size="xs" c="dimmed">
                {dayjs(event.start).format('HH:mm')} – {dayjs(event.end).format('HH:mm')}
              </Text>
              {event.payload?.location && (
                <Text size="xs" c="dimmed" mt={2}>
                  📍 {event.payload.location}
                </Text>
              )}
            </div>
          </Box>
        </UnstyledButton>
      )}
    />
  );
}
`};var S=e.i(191788),j=e.i(424302),w=e.i(671640);let Y=(0,n.default)().format("YYYY-MM-DD"),I=[{id:"standup",title:"Team Standup",start:`${Y} 09:00:00`,end:`${Y} 09:30:00`,color:"blue",payload:{description:"Daily team sync",location:"Room A"}},{id:"workshop",title:"Design Workshop",start:`${Y} 10:00:00`,end:`${Y} 12:00:00`,color:"grape",payload:{description:"Collaborative design session",location:"Creative Space"}},{id:"review",title:"Code Review",start:(0,n.default)().add(1,"day").format("YYYY-MM-DD 14:00:00"),end:(0,n.default)().add(1,"day").format("YYYY-MM-DD 15:00:00"),color:"green",payload:{description:"Review pull requests",location:"Zoom"}}],C={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,S.useState)(null);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.AgendaView,{rangeStart:(0,n.default)().format("YYYY-MM-DD"),rangeEnd:(0,n.default)().add(7,"day").format("YYYY-MM-DD"),events:I,onEventClick:e=>t(e)}),(0,a.jsx)(j.Modal,{opened:null!==e,onClose:()=>t(null),title:e?.title,children:e&&(0,a.jsxs)(w.Stack,{gap:"xs",children:[(0,a.jsxs)(x.Text,{size:"sm",c:"dimmed",children:[(0,n.default)(e.start).format("MMM D, YYYY HH:mm")," –"," ",(0,n.default)(e.end).format("HH:mm")]}),e.payload?.description&&(0,a.jsx)(x.Text,{size:"sm",children:e.payload.description}),e.payload?.location&&(0,a.jsxs)(x.Text,{size:"sm",c:"dimmed",children:["Location: ",e.payload.location]})]})})]})},centered:!0,maxWidth:500,code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { Modal, Stack, Text } from '@mantine/core';
import { AgendaView, ScheduleEventData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events: ScheduleEventData[] = [
  {
    id: 'standup',
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    payload: { description: 'Daily team sync', location: 'Room A' },
  },
  {
    id: 'workshop',
    title: 'Design Workshop',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'grape',
    payload: { description: 'Collaborative design session', location: 'Creative Space' },
  },
  {
    id: 'review',
    title: 'Code Review',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 14:00:00'),
    end: dayjs().add(1, 'day').format('YYYY-MM-DD 15:00:00'),
    color: 'green',
    payload: { description: 'Review pull requests', location: 'Zoom' },
  },
];

function Demo() {
  const [selected, setSelected] = useState<ScheduleEventData | null>(null);

  return (
    <>
      <AgendaView
        rangeStart={dayjs().format('YYYY-MM-DD')}
        rangeEnd={dayjs().add(7, 'day').format('YYYY-MM-DD')}
        events={events}
        onEventClick={(event) => setSelected(event)}
      />

      <Modal
        opened={selected !== null}
        onClose={() => setSelected(null)}
        title={selected?.title}
      >
        {selected && (
          <Stack gap="xs">
            <Text size="sm" c="dimmed">
              {dayjs(selected.start).format('MMM D, YYYY HH:mm')} –{' '}
              {dayjs(selected.end).format('HH:mm')}
            </Text>
            {selected.payload?.description && (
              <Text size="sm">{selected.payload.description}</Text>
            )}
            {selected.payload?.location && (
              <Text size="sm" c="dimmed">
                Location: {selected.payload.location}
              </Text>
            )}
          </Stack>
        )}
      </Modal>
    </>
  );
}
`};e.i(27355);let E=(0,n.default)().format("YYYY-MM-DD"),A=[{id:"standup",title:"Reunión diaria",start:`${E} 09:00:00`,end:`${E} 09:30:00`,color:"blue"},{id:"workshop",title:"Taller de diseño",start:(0,n.default)().add(1,"day").format("YYYY-MM-DD 10:00:00"),end:(0,n.default)().add(1,"day").format("YYYY-MM-DD 12:00:00"),color:"grape"},{id:"conference",title:"Conferencia",start:(0,n.default)().add(3,"day").format("YYYY-MM-DD 00:00:00"),end:(0,n.default)().add(4,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],H={defaultExpanded:!1,type:"code",component:function(){return(0,a.jsx)(r.AgendaView,{rangeStart:(0,n.default)().format("YYYY-MM-DD"),rangeEnd:(0,n.default)().add(7,"day").format("YYYY-MM-DD"),events:A,locale:"es",labels:{allDay:"Todo el día",noEvents:"Sin eventos"}})},centered:!0,maxWidth:500,code:`
import 'dayjs/locale/es';

import dayjs from 'dayjs';
import { AgendaView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const events = [
  {
    id: 'standup',
    title: 'Reuni\xf3n diaria',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
  },
  {
    id: 'workshop',
    title: 'Taller de dise\xf1o',
    start: dayjs().add(1, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(1, 'day').format('YYYY-MM-DD 12:00:00'),
    color: 'grape',
  },
  {
    id: 'conference',
    title: 'Conferencia',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(4, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
];

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().format('YYYY-MM-DD')}
      rangeEnd={dayjs().add(7, 'day').format('YYYY-MM-DD')}
      events={events}
      locale="es"
      labels={{
        allDay: 'Todo el d\xeda',
        noEvents: 'Sin eventos',
      }}
    />
  );
}
`},k=(0,n.default)().startOf("month").format("YYYY-MM-DD"),T=(0,n.default)().date(15).format("YYYY-MM-DD"),P=(0,n.default)().format("YYYY-MM-DD"),V=(0,n.default)().endOf("month").format("YYYY-MM-DD"),R=[{id:1,title:"Team Meeting",start:`${k} 09:00:00`,end:`${k} 10:30:00`,color:"blue"},{id:2,title:"Project Deadline",start:`${T} 00:00:00`,end:(0,n.default)(T).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"},{id:3,title:"Client Call",start:`${P} 14:00:00`,end:`${P} 15:00:00`,color:"green"},{id:4,title:"Monthly Review",start:`${V} 00:00:00`,end:(0,n.default)(V).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"violet"},{id:5,title:"Workshop",start:(0,n.default)().add(3,"day").format("YYYY-MM-DD 10:00:00"),end:(0,n.default)().add(3,"day").format("YYYY-MM-DD 12:00:00"),color:"orange"},{id:6,title:"Conference",start:(0,n.default)().add(5,"day").format("YYYY-MM-DD 00:00:00"),end:(0,n.default)().add(6,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"cyan"}],L={defaultExpanded:!1,type:"code",component:function(){return(0,a.jsx)(r.AgendaView,{rangeStart:(0,n.default)().startOf("month").format("YYYY-MM-DD"),rangeEnd:(0,n.default)().endOf("month").format("YYYY-MM-DD"),events:R,mode:"static"})},centered:!0,maxWidth:500,code:[{code:`
import dayjs from 'dayjs';
import { AgendaView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <AgendaView
      rangeStart={dayjs().startOf('month').format('YYYY-MM-DD')}
      rangeEnd={dayjs().endOf('month').format('YYYY-MM-DD')}
      events={events}
      mode="static"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`
import dayjs from 'dayjs';

const startOfMonth = dayjs().startOf('month').format('YYYY-MM-DD');
const midMonth = dayjs().date(15).format('YYYY-MM-DD');
const today = dayjs().format('YYYY-MM-DD');
const endOfMonth = dayjs().endOf('month').format('YYYY-MM-DD');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${startOfMonth} 09:00:00\`,
    end: \`\${startOfMonth} 10:30:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Deadline',
    start: \`\${midMonth} 00:00:00\`,
    end: dayjs(midMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'red',
  },
  {
    id: 3,
    title: 'Client Call',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 15:00:00\`,
    color: 'green',
  },
  {
    id: 4,
    title: 'Monthly Review',
    start: \`\${endOfMonth} 00:00:00\`,
    end: dayjs(endOfMonth).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'violet',
  },
  {
    id: 5,
    title: 'Workshop',
    start: dayjs().add(3, 'day').format('YYYY-MM-DD 10:00:00'),
    end: dayjs().add(3, 'day').format('YYYY-MM-DD 12:00:00'),
    color: 'orange',
  },
  {
    id: 6,
    title: 'Conference',
    start: dayjs().add(5, 'day').format('YYYY-MM-DD 00:00:00'),
    end: dayjs().add(6, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'cyan',
  },
];
`,language:"tsx",fileName:"data.ts"}]};var Z=(0,t.__exportAll)({allDayAndMultiday:()=>u,dateFormats:()=>h,eventClick:()=>C,localization:()=>H,renderEvent:()=>D,staticMode:()=>L,usage:()=>s});e.s(["AgendaViewDemos",0,Z],374137)},63887,e=>{"use strict";var t=e.i(648863),a=e.i(610287),n=e.i(44091),r=e.i(391466),o=e.i(275519),i=e.i(232471),l=e.i(386179);let[s,d]=(0,l.createSafeContext)("Menubar component was not found in the tree"),[c,u]=(0,l.createSafeContext)("Menubar.Menu component was not found in the tree");var m=e.i(334816),p=e.i(323283),h=e.i(391398);function f(e){let{onKeyDown:t,onMouseEnter:n,onMouseLeave:r,...o}=e,i=d(),l=u(),{dir:s}=(0,p.useDirection)(),c=(0,m.createEventHandler)(n,()=>i.cancelClose()),f=(0,m.createEventHandler)(r,()=>{"hover"===i.trigger&&i.scheduleClose()}),g=e=>{let t=i.getAdjacentIndex(l.index,e);t!==l.index&&(i.setActiveIndex(t),i.openMenu(t,"click"),i.focusMenuItem(t,"first"))},y=(0,m.createEventHandler)(t,e=>{let t=e.target;if("Tab"===e.key){i.focusTarget(l.index),i.closeMenu();return}if(t.closest("[data-menu-dropdown]")===e.currentTarget){if(e.key===("rtl"===s?"ArrowLeft":"ArrowRight")){if(t.closest("[data-menu-item]")?.hasAttribute("data-sub-menu-item"))return;e.preventDefault(),g(1)}else if(e.key===("rtl"===s?"ArrowRight":"ArrowLeft"))e.preventDefault(),g(-1);else if("Escape"===e.key){let e=l.index;i.setActiveIndex(e),window.setTimeout(()=>i.focusTarget(e),0)}}});return(0,h.jsx)(a.Menu.Dropdown,{...o,"data-menubar-dropdown":i.id,"data-mantine-stop-propagation":!0,onKeyDown:y,onMouseEnter:c,onMouseLeave:f})}f.displayName="@mantine/core/MenubarDropdown";var g=e.i(191788),y=e.i(107315),x=e.i(417241);function v({children:e,transitionProps:t,...n}){let r=d(),o=(0,y.useId)(),[i,l]=(0,g.useState)(-1);(0,x.useIsomorphicEffect)(()=>{let e=r.getMenuIndex(o);l(t=>t===e?t:e)});let s=null!==r.openIndex&&-1!==i&&r.openIndex===i,u=t?.duration??150,m=t?.exitDuration??u,p=null===r.getPreviousOpenIndex(),f=null===r.openIndex,b={...t,duration:p?u:0,exitDuration:f?m:0};return(0,h.jsx)(c,{value:{id:o,index:i,opened:s},children:(0,h.jsx)(a.Menu,{position:r.position,loop:r.loop,unstyled:r.unstyled,menuItemTabIndex:-1,trapFocus:!1,...n,transitionProps:b,opened:s,onChange:e=>{e?(r.openMenu(i,"click"),r.setActiveIndex(i)):r.closeMenu()},trigger:"click",returnFocus:!1,children:e})})}v.displayName="@mantine/core/MenubarMenu";var b=e.i(284629),M=e.i(392862);let D={refProp:"ref"};function S(e){let{children:t,refProp:a,className:r,style:o,disabled:i,"data-disabled":l,onClick:s,onMouseEnter:c,onMouseLeave:f,onFocus:g,onKeyDown:y,...x}=(0,n.useProps)("MenubarTarget",D,e),v=d(),S=u(),{dir:j}=(0,p.useDirection)(),w=i||l,Y=v.activeIndex===S.index,I=-1===S.index&&!w,C=e=>{let t=v.getAdjacentIndex(S.index,e);v.setActiveIndex(t),v.focusTarget(t),null!==v.openIndex&&v.openMenu(t,"click")},E=e=>{v.openMenu(S.index,"click"),v.setActiveIndex(S.index),v.focusMenuItem(S.index,e)},A=(0,m.createEventHandler)(s,()=>{w||(v.openIndex===S.index&&"hover"!==v.getOpenSource()?v.closeMenu():(v.openMenu(S.index,"click"),v.setActiveIndex(S.index)))}),H=(0,m.createEventHandler)(c,()=>{w||(v.cancelClose(),"hover"===v.trigger?(v.openMenu(S.index,"hover"),v.setActiveIndex(S.index)):null!==v.openIndex&&v.openIndex!==S.index&&(v.openMenu(S.index,"hover"),v.setActiveIndex(S.index)))}),k=(0,m.createEventHandler)(f,()=>{"hover"===v.trigger&&v.scheduleClose()}),T=(0,m.createEventHandler)(g,()=>v.setActiveIndex(S.index)),P=(0,m.createEventHandler)(y,e=>{if(!w)if(e.key===("rtl"===j?"ArrowLeft":"ArrowRight"))e.preventDefault(),C(1);else if(e.key===("rtl"===j?"ArrowRight":"ArrowLeft"))e.preventDefault(),C(-1);else if("ArrowDown"===e.key||"Enter"===e.key||" "===e.key)e.preventDefault(),E("first");else if("ArrowUp"===e.key)e.preventDefault(),E("last");else if("Home"===e.key){e.preventDefault();let t=v.getEnabledIndexes();t.length>0&&(v.setActiveIndex(t[0]),v.focusTarget(t[0]))}else if("End"===e.key){e.preventDefault();let t=v.getEnabledIndexes();if(t.length>0){let e=t[t.length-1];v.setActiveIndex(e),v.focusTarget(e)}}else if("Escape"===e.key)S.opened&&v.closeMenu();else if("Tab"===e.key)S.opened&&v.closeMenu();else 1!==e.key.length||" "===e.key||e.ctrlKey||e.metaKey||e.altKey||(e=>{let t=v.getTargets();if(0===t.length)return;let a=e.key.toLowerCase();for(let n=1;n<=t.length;n+=1){let r=(S.index+n)%t.length,o=t[r];if(o&&!o.disabled&&!o.hasAttribute("data-disabled")&&(o.textContent??"").trim().toLowerCase().startsWith(a)){e.preventDefault(),v.setActiveIndex(r),o.focus(),null!==v.openIndex&&v.openMenu(r,"click");break}}})(e)});return(0,h.jsx)(M.Popover.Target,{refProp:a,popupType:"menu",children:(0,h.jsx)(b.UnstyledButton,{...x,unstyled:v.unstyled,role:"menuitem",tabIndex:Y||I?0:-1,disabled:i,"data-menubar-target":!0,"data-menubar-id":S.id,"data-disabled":l||void 0,"data-expanded":S.opened||void 0,"data-mantine-stop-propagation":S.opened||void 0,...v.getStyles("target",{className:r,style:o}),onClick:A,onMouseEnter:H,onMouseLeave:k,onFocus:T,onKeyDown:P,children:t})})}S.displayName="@mantine/core/MenubarTarget";var j={root:"m_de2654db",target:"m_f08a2b4a"},w=e.i(332977),Y=e.i(579560);let I={trigger:"click",loop:!0,position:"bottom-start"},C=(0,o.factory)(e=>{let t=(0,n.useProps)("Menubar",I,e),{classNames:a,className:o,style:l,styles:d,unstyled:c,vars:u,children:m,openIndex:p,defaultOpenIndex:f,onOpenChange:v,trigger:b,loop:M,position:D,attributes:S,mod:C,ref:E,...A}=t,H=(0,r.useStyles)({name:"Menubar",classes:j,props:t,className:o,style:l,classNames:a,styles:d,unstyled:c,attributes:S}),k=(0,g.useRef)(null),T=(0,y.useId)(),[P,V]=(0,Y.useUncontrolled)({value:p,defaultValue:f,finalValue:null,onChange:v}),[R,L]=(0,g.useState)(0),Z=(0,g.useRef)(null),z=(0,g.useCallback)((e,t)=>{Z.current=t,V(e)},[V]),N=(0,g.useCallback)(()=>{Z.current=null,V(null)},[V]),B=(0,g.useRef)(-1),F=(0,g.useCallback)(()=>{window.clearTimeout(B.current)},[]),O=(0,g.useCallback)(()=>{window.clearTimeout(B.current),B.current=window.setTimeout(N,120)},[N]);(0,x.useIsomorphicEffect)(()=>()=>window.clearTimeout(B.current),[]);let $=(0,g.useCallback)(()=>Z.current,[]),_=(0,g.useRef)(P),W=(0,g.useCallback)(()=>_.current,[]);(0,x.useIsomorphicEffect)(()=>{_.current=P});let G=(0,g.useCallback)(()=>Array.from(k.current?.querySelectorAll("[data-menubar-target]")??[]),[]),U=(0,g.useCallback)(e=>G().findIndex(t=>t.getAttribute("data-menubar-id")===e),[G]),K=(0,g.useCallback)(()=>G().reduce((e,t,a)=>(t.disabled||t.hasAttribute("data-disabled")||e.push(a),e),[]),[G]),q=(0,g.useCallback)(e=>{G()[e]?.focus()},[G]),J=(0,g.useCallback)((e,t)=>{window.setTimeout(()=>{let a=G()[e]?.getAttribute("aria-controls"),n=(a?document.getElementById(a):document.querySelector(`[data-menubar-dropdown="${T}"]`))?.querySelectorAll("[data-menu-item]:not([data-disabled])");n&&n.length>0&&("first"===t?n[0]:n[n.length-1])?.focus()},40)},[G]),Q=(0,g.useCallback)((e,t)=>{let a=K();if(0===a.length)return e;let n=a.indexOf(e),r=-1===n?0:n+t;return r=M?(r+a.length)%a.length:Math.max(0,Math.min(a.length-1,r)),a[r]??e},[K,M]);return(0,x.useIsomorphicEffect)(()=>{let e=K();if(0!==e.length){if(null!==P&&e.includes(P)){R!==P&&L(P);return}e.includes(R)||L(e[0])}}),(0,h.jsx)(s,{value:{getStyles:H,id:T,openIndex:P,setOpenIndex:V,openMenu:z,closeMenu:N,scheduleClose:O,cancelClose:F,getOpenSource:$,getPreviousOpenIndex:W,activeIndex:R,setActiveIndex:L,trigger:b,loop:M,position:D,unstyled:c,getMenuIndex:U,getTargets:G,getEnabledIndexes:K,getAdjacentIndex:Q,focusTarget:q,focusMenuItem:J},children:(0,h.jsx)(i.Box,{ref:(0,w.useMergedRef)(E,k),role:"menubar","aria-orientation":"horizontal",mod:C,...H("root"),...A,"data-menubar":!0,children:m})})});C.classes=j,C.displayName="@mantine/core/Menubar",C.Menu=v,C.Target=S,C.Dropdown=f;var E=e.i(883364);let A={type:"code",component:function(){return(0,h.jsxs)(C,{children:[(0,h.jsxs)(C.Menu,{width:220,children:[(0,h.jsx)(C.Target,{children:"File"}),(0,h.jsxs)(C.Dropdown,{children:[(0,h.jsx)(a.Menu.Item,{rightSection:(0,h.jsx)(E.Text,{size:"xs",c:"dimmed",children:"⌘N"}),children:"New file"}),(0,h.jsx)(a.Menu.Item,{rightSection:(0,h.jsx)(E.Text,{size:"xs",c:"dimmed",children:"⌘⇧N"}),children:"New window"}),(0,h.jsxs)(a.Menu.Sub,{children:[(0,h.jsx)(a.Menu.Sub.Target,{children:(0,h.jsx)(a.Menu.Sub.Item,{children:"Open recent"})}),(0,h.jsxs)(a.Menu.Sub.Dropdown,{children:[(0,h.jsx)(a.Menu.Item,{children:"project-alpha"}),(0,h.jsx)(a.Menu.Item,{children:"project-beta"}),(0,h.jsx)(a.Menu.Item,{children:"project-gamma"})]})]}),(0,h.jsx)(a.Menu.Divider,{}),(0,h.jsx)(a.Menu.Item,{rightSection:(0,h.jsx)(E.Text,{size:"xs",c:"dimmed",children:"⌘S"}),children:"Save"}),(0,h.jsx)(a.Menu.Item,{children:"Save as…"})]})]}),(0,h.jsxs)(C.Menu,{width:220,children:[(0,h.jsx)(C.Target,{children:"Edit"}),(0,h.jsxs)(C.Dropdown,{children:[(0,h.jsx)(a.Menu.Item,{rightSection:(0,h.jsx)(E.Text,{size:"xs",c:"dimmed",children:"⌘Z"}),children:"Undo"}),(0,h.jsx)(a.Menu.Item,{rightSection:(0,h.jsx)(E.Text,{size:"xs",c:"dimmed",children:"⌘⇧Z"}),children:"Redo"}),(0,h.jsx)(a.Menu.Divider,{}),(0,h.jsx)(a.Menu.Item,{children:"Cut"}),(0,h.jsx)(a.Menu.Item,{children:"Copy"}),(0,h.jsx)(a.Menu.Item,{children:"Paste"})]})]}),(0,h.jsxs)(C.Menu,{width:220,children:[(0,h.jsx)(C.Target,{children:"Help"}),(0,h.jsxs)(C.Dropdown,{children:[(0,h.jsx)(a.Menu.Item,{children:"Documentation"}),(0,h.jsx)(a.Menu.Item,{children:"Keyboard shortcuts"}),(0,h.jsx)(a.Menu.Item,{children:"About"})]})]})]})},code:`
import { Menu, Menubar, Text } from '@mantine/core';

function Demo() {
  return (
    <Menubar>
      <Menubar.Menu width={220}>
        <Menubar.Target>File</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item rightSection={<Text size="xs" c="dimmed">⌘N</Text>}>New file</Menu.Item>
          <Menu.Item rightSection={<Text size="xs" c="dimmed">⌘⇧N</Text>}>New window</Menu.Item>
          <Menu.Sub>
            <Menu.Sub.Target>
              <Menu.Sub.Item>Open recent</Menu.Sub.Item>
            </Menu.Sub.Target>
            <Menu.Sub.Dropdown>
              <Menu.Item>project-alpha</Menu.Item>
              <Menu.Item>project-beta</Menu.Item>
              <Menu.Item>project-gamma</Menu.Item>
            </Menu.Sub.Dropdown>
          </Menu.Sub>
          <Menu.Divider />
          <Menu.Item rightSection={<Text size="xs" c="dimmed">⌘S</Text>}>Save</Menu.Item>
          <Menu.Item>Save as…</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>

      <Menubar.Menu width={220}>
        <Menubar.Target>Edit</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item rightSection={<Text size="xs" c="dimmed">⌘Z</Text>}>Undo</Menu.Item>
          <Menu.Item rightSection={<Text size="xs" c="dimmed">⌘⇧Z</Text>}>Redo</Menu.Item>
          <Menu.Divider />
          <Menu.Item>Cut</Menu.Item>
          <Menu.Item>Copy</Menu.Item>
          <Menu.Item>Paste</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>

      <Menubar.Menu width={220}>
        <Menubar.Target>Help</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item>Documentation</Menu.Item>
          <Menu.Item>Keyboard shortcuts</Menu.Item>
          <Menu.Item>About</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>
    </Menubar>
  );
}
`,centered:!0},H={type:"code",component:function(){return(0,h.jsxs)(C,{trigger:"hover",children:[(0,h.jsxs)(C.Menu,{width:220,children:[(0,h.jsx)(C.Target,{children:"File"}),(0,h.jsxs)(C.Dropdown,{children:[(0,h.jsx)(a.Menu.Item,{children:"New file"}),(0,h.jsx)(a.Menu.Item,{children:"New window"}),(0,h.jsx)(a.Menu.Item,{children:"Save"})]})]}),(0,h.jsxs)(C.Menu,{width:220,children:[(0,h.jsx)(C.Target,{children:"Edit"}),(0,h.jsxs)(C.Dropdown,{children:[(0,h.jsx)(a.Menu.Item,{children:"Undo"}),(0,h.jsx)(a.Menu.Item,{children:"Redo"}),(0,h.jsx)(a.Menu.Item,{children:"Cut"}),(0,h.jsx)(a.Menu.Item,{children:"Copy"})]})]}),(0,h.jsxs)(C.Menu,{width:220,children:[(0,h.jsx)(C.Target,{children:"View"}),(0,h.jsxs)(C.Dropdown,{children:[(0,h.jsx)(a.Menu.Item,{children:"Zoom in"}),(0,h.jsx)(a.Menu.Item,{children:"Zoom out"}),(0,h.jsx)(a.Menu.Item,{children:"Reset zoom"})]})]})]})},code:`
import { Menu, Menubar } from '@mantine/core';

function Demo() {
  return (
    <Menubar trigger="hover">
      <Menubar.Menu width={220}>
        <Menubar.Target>File</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item>New file</Menu.Item>
          <Menu.Item>New window</Menu.Item>
          <Menu.Item>Save</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>

      <Menubar.Menu width={220}>
        <Menubar.Target>Edit</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item>Undo</Menu.Item>
          <Menu.Item>Redo</Menu.Item>
          <Menu.Item>Cut</Menu.Item>
          <Menu.Item>Copy</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>

      <Menubar.Menu width={220}>
        <Menubar.Target>View</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item>Zoom in</Menu.Item>
          <Menu.Item>Zoom out</Menu.Item>
          <Menu.Item>Reset zoom</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>
    </Menubar>
  );
}
`,centered:!0},k={type:"code",component:function(){return(0,h.jsxs)(C,{children:[(0,h.jsxs)(C.Menu,{width:220,children:[(0,h.jsx)(C.Target,{children:"View"}),(0,h.jsxs)(C.Dropdown,{children:[(0,h.jsx)(a.Menu.CheckboxItem,{defaultChecked:!0,children:"Show sidebar"}),(0,h.jsx)(a.Menu.CheckboxItem,{children:"Show status bar"}),(0,h.jsx)(a.Menu.Divider,{}),(0,h.jsx)(a.Menu.Label,{children:"Appearance"}),(0,h.jsxs)(a.Menu.RadioGroup,{defaultValue:"comfortable",children:[(0,h.jsx)(a.Menu.RadioItem,{value:"compact",children:"Compact"}),(0,h.jsx)(a.Menu.RadioItem,{value:"comfortable",children:"Comfortable"}),(0,h.jsx)(a.Menu.RadioItem,{value:"spacious",children:"Spacious"})]})]})]}),(0,h.jsxs)(C.Menu,{width:220,children:[(0,h.jsx)(C.Target,{children:"Window"}),(0,h.jsxs)(C.Dropdown,{children:[(0,h.jsx)(a.Menu.Item,{children:"Minimize"}),(0,h.jsx)(a.Menu.Item,{children:"Zoom"}),(0,h.jsx)(a.Menu.Item,{children:"Bring all to front"})]})]})]})},code:`
import { Menu, Menubar } from '@mantine/core';

function Demo() {
  return (
    <Menubar>
      <Menubar.Menu width={220}>
        <Menubar.Target>View</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.CheckboxItem defaultChecked>Show sidebar</Menu.CheckboxItem>
          <Menu.CheckboxItem>Show status bar</Menu.CheckboxItem>
          <Menu.Divider />
          <Menu.Label>Appearance</Menu.Label>
          <Menu.RadioGroup defaultValue="comfortable">
            <Menu.RadioItem value="compact">Compact</Menu.RadioItem>
            <Menu.RadioItem value="comfortable">Comfortable</Menu.RadioItem>
            <Menu.RadioItem value="spacious">Spacious</Menu.RadioItem>
          </Menu.RadioGroup>
        </Menubar.Dropdown>
      </Menubar.Menu>

      <Menubar.Menu width={220}>
        <Menubar.Target>Window</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item>Minimize</Menu.Item>
          <Menu.Item>Zoom</Menu.Item>
          <Menu.Item>Bring all to front</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>
    </Menubar>
  );
}
`,centered:!0};var T=e.i(485108),P=e.i(725695),V=e.i(671640);let R={type:"code",component:function(){let[e,t]=(0,g.useState)(null);return(0,h.jsxs)(V.Stack,{children:[(0,h.jsxs)(P.Group,{children:[(0,h.jsx)(T.Button,{variant:"default",onClick:()=>t(0),children:"Open File"}),(0,h.jsx)(T.Button,{variant:"default",onClick:()=>t(1),children:"Open Edit"}),(0,h.jsx)(T.Button,{variant:"default",onClick:()=>t(null),children:"Close all"})]}),(0,h.jsxs)(C,{openIndex:e,onOpenChange:t,children:[(0,h.jsxs)(C.Menu,{width:220,children:[(0,h.jsx)(C.Target,{children:"File"}),(0,h.jsxs)(C.Dropdown,{children:[(0,h.jsx)(a.Menu.Item,{children:"New file"}),(0,h.jsx)(a.Menu.Item,{children:"Save"})]})]}),(0,h.jsxs)(C.Menu,{width:220,children:[(0,h.jsx)(C.Target,{children:"Edit"}),(0,h.jsxs)(C.Dropdown,{children:[(0,h.jsx)(a.Menu.Item,{children:"Undo"}),(0,h.jsx)(a.Menu.Item,{children:"Redo"})]})]})]})]})},code:`
import { useState } from 'react';
import { Button, Group, Menu, Menubar, Stack } from '@mantine/core';

function Demo() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <Stack>
      <Group>
        <Button variant="default" onClick={() => setOpenIndex(0)}>Open File</Button>
        <Button variant="default" onClick={() => setOpenIndex(1)}>Open Edit</Button>
        <Button variant="default" onClick={() => setOpenIndex(null)}>Close all</Button>
      </Group>

      <Menubar openIndex={openIndex} onOpenChange={setOpenIndex}>
        <Menubar.Menu width={220}>
          <Menubar.Target>File</Menubar.Target>
          <Menubar.Dropdown>
            <Menu.Item>New file</Menu.Item>
            <Menu.Item>Save</Menu.Item>
          </Menubar.Dropdown>
        </Menubar.Menu>

        <Menubar.Menu width={220}>
          <Menubar.Target>Edit</Menubar.Target>
          <Menubar.Dropdown>
            <Menu.Item>Undo</Menu.Item>
            <Menu.Item>Redo</Menu.Item>
          </Menubar.Dropdown>
        </Menubar.Menu>
      </Menubar>
    </Stack>
  );
}
`,centered:!0};var L=e.i(561319);let Z=`
import { Menu, Menubar } from '@mantine/core';

function Demo() {
  return (
    <Menubar{{props}}>
      <Menubar.Menu width={220}>
        <Menubar.Target>File</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item>New file</Menu.Item>
          <Menu.Item>Save</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>

      <Menubar.Menu width={220}>
        <Menubar.Target>Edit</Menubar.Target>
        <Menubar.Dropdown>
          <Menu.Item>Undo</Menu.Item>
          <Menu.Item>Redo</Menu.Item>
        </Menubar.Dropdown>
      </Menubar.Menu>
    </Menubar>
  );
}
`,z={type:"styles-api",data:L.MenubarStylesApi,component:function(e){return(0,h.jsxs)(C,{...e,children:[(0,h.jsxs)(C.Menu,{width:220,children:[(0,h.jsx)(C.Target,{children:"File"}),(0,h.jsxs)(C.Dropdown,{children:[(0,h.jsx)(a.Menu.Item,{children:"New file"}),(0,h.jsx)(a.Menu.Item,{children:"Save"})]})]}),(0,h.jsxs)(C.Menu,{width:220,children:[(0,h.jsx)(C.Target,{children:"Edit"}),(0,h.jsxs)(C.Dropdown,{children:[(0,h.jsx)(a.Menu.Item,{children:"Undo"}),(0,h.jsx)(a.Menu.Item,{children:"Redo"})]})]})]})},code:Z,centered:!0};var N=(0,t.__exportAll)({controlled:()=>R,hover:()=>H,selectable:()=>k,stylesApi:()=>z,usage:()=>A});e.s(["MenubarDemos",0,N],63887)},781041,e=>{"use strict";var t=e.i(648863),a=e.i(191788),n=e.i(485108),r=e.i(44091),o=e.i(62904),i=e.i(275519),l=e.i(19300),s=e.i(205764),d=e.i(464224),c=e.i(506712),u=e.i(734858),m=e.i(711976),p=e.i(956031),h=e.i(463112),f=e.i(211169),g=e.i(679089),y=e.i(212491),x=e.i(275825),v=e.i(409703),b=e.i(392862),M=e.i(219867),D=e.i(143796),S=e.i(332977),j=e.i(391398);let w={refProp:"ref"},Y=(0,i.factory)(e=>{let{children:t,refProp:n,ref:o,...i}=(0,r.useProps)("ComboboxPopoverTarget",w,e),l=(0,v.getSingleElementChild)(t);if(!l)throw Error("ComboboxPopover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let s=(0,M.useComboboxContext)(),d=(0,S.useMergedRef)(o,s.store.targetRef,(0,x.getRefProp)(l)),c=(0,a.cloneElement)(l,{...(0,D.useComboboxTargetProps)({targetType:"button",withAriaAttributes:!0,withKeyboardNavigation:!0,withExpandedAttribute:!0,onKeyDown:l.props.onKeyDown,onClick:e=>{s.store.toggleDropdown(),l.props.onClick?.(e)},autoComplete:"off"}),...i,[n]:d});return(0,j.jsx)(b.Popover.Target,{refProp:n,children:c})});Y.displayName="@mantine/core/ComboboxPopoverTarget";var I=e.i(579560),C=e.i(56206);function E({data:e,withCheckIcon:t,withAlignedLabels:a,value:n,checkIconPosition:r,unstyled:o,renderOption:i}){var l;if((0,h.isOptionsGroup)(e)){let l=e.items.map(e=>(0,j.jsx)(E,{data:e,value:n,unstyled:o,withCheckIcon:t,withAlignedLabels:a,checkIconPosition:r,renderOption:i},`${e.value}`));return(0,j.jsx)(m.Combobox.Group,{label:e.group,children:l})}let s=(l=e.value,Array.isArray(n)?n.includes(l):n===l),d=t&&(s?(0,j.jsx)(p.CheckIcon,{className:c.default.optionsDropdownCheckIcon}):a?(0,j.jsx)("div",{className:c.default.optionsDropdownCheckPlaceholder}):null),u=(0,j.jsxs)(j.Fragment,{children:["left"===r&&d,(0,j.jsx)("span",{children:e.label}),"right"===r&&d]});return(0,j.jsx)(m.Combobox.Option,{value:e.value,disabled:e.disabled,className:(0,C.default)({[c.default.optionsDropdownOption]:!o}),"data-reverse":"right"===r||void 0,"data-checked":s||void 0,"aria-selected":s,active:s,children:"function"==typeof i?i({option:e,checked:s}):u})}function A({data:e,filter:t,search:a,limit:n,nothingFoundMessage:r,withScrollArea:o=!0,maxDropdownHeight:i,value:s,checkIconPosition:d,withCheckIcon:c=!1,withAlignedLabels:u=!1,unstyled:p,renderOption:y,scrollAreaProps:x,onSearchChange:v}){let b=(t||f.defaultOptionsFilter)({options:e,search:a,limit:n??1/0}),M=(0,g.isEmptyComboboxData)(b),D=b.map((e,t)=>(0,j.jsx)(E,{data:e,withCheckIcon:c,withAlignedLabels:u,value:s,checkIconPosition:d,unstyled:p,renderOption:y},(0,h.isOptionsGroup)(e)?`group-${"string"==typeof e.group?e.group:t}`:`${e.value}`));return(0,j.jsxs)(m.Combobox.Dropdown,{"data-composed":!0,children:[(0,j.jsx)(m.Combobox.Search,{value:a,onChange:v,placeholder:"Search..."}),(0,j.jsxs)(m.Combobox.Options,{children:[o?(0,j.jsx)(l.ScrollArea.Autosize,{mah:i??220,type:"scroll",scrollbarSize:"var(--combobox-padding)",offsetScrollbars:"y",...x,children:D}):D,M&&r&&(0,j.jsx)(m.Combobox.Empty,{children:r})]})]})}let H={withCheckIcon:!0,allowDeselect:!0,checkIconPosition:"left",hiddenInputValuesDivider:","},k=(0,i.genericFactory)(e=>{let t=(0,r.useProps)("ComboboxPopover",H,e),{classNames:n,styles:i,unstyled:l,vars:c,children:p,multiple:h,value:f,defaultValue:g,onChange:x,data:v,dropdownOpened:b,defaultDropdownOpened:M,onDropdownOpen:D,onDropdownClose:S,onOptionSubmit:w,comboboxProps:Y,filter:C,limit:E,withScrollArea:k,maxDropdownHeight:T,selectFirstOptionOnDropdownOpen:P,withCheckIcon:V,withAlignedLabels:R,checkIconPosition:L,nothingFoundMessage:Z,searchable:z,searchValue:N,defaultSearchValue:B,onSearchChange:F,allowDeselect:O,renderOption:$,scrollAreaProps:_,hiddenInputProps:W,name:G,form:U,hiddenInputValuesDivider:K,attributes:q,...J}=t,Q=(0,a.useMemo)(()=>(0,s.getParsedComboboxData)(v),[v]),X=(0,a.useMemo)(()=>(0,d.getOptionsLockup)(Q),[Q]),[ee,et]=(0,I.useUncontrolled)({value:f,defaultValue:g,finalValue:h?[]:null,onChange:x}),[ea,en]=(0,I.useUncontrolled)({value:N,defaultValue:B,finalValue:"",onChange:F}),er=(0,u.useCombobox)({opened:b,defaultOpened:M,onDropdownOpen:()=>{D?.(),z&&er.focusSearchInput(),P&&er.selectFirstOption()},onDropdownClose:()=>{S?.(),er.resetSelectedOption(),z&&er.focusTarget()}}),eo=e=>{en(e),er.resetSelectedOption()},{resolvedClassNames:ei,resolvedStyles:el}=(0,o.useResolvedStylesApi)({props:t,styles:i,classNames:n});return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(m.Combobox,{store:er,__staticSelector:"ComboboxPopover",classNames:ei,styles:el,unstyled:l,attributes:q,onOptionSubmit:e=>{w?.(e);let t=X[e];if(h){let e=Array.isArray(ee)?ee:[];e.includes(t.value)?et(e.filter(e=>e!==t.value)):et([...e,t.value]),er.updateSelectedOptionIndex("selected")}else et(O&&`${t.value}`==`${ee}`?null:t.value),er.closeDropdown();z&&eo("")},...Y,...J,children:[p,z?(0,j.jsx)(A,{data:Q,filter:C,search:ea,limit:E,nothingFoundMessage:Z,withScrollArea:k,maxDropdownHeight:T,value:ee,checkIconPosition:L,withCheckIcon:V,withAlignedLabels:R,unstyled:l,renderOption:$,scrollAreaProps:_,onSearchChange:e=>{eo(e.currentTarget.value)}}):(0,j.jsx)(y.OptionsDropdown,{data:Q,filter:C,search:void 0,limit:E,hiddenWhenEmpty:!Z,withScrollArea:k,maxDropdownHeight:T,filterOptions:!1,value:ee,checkIconPosition:L,withCheckIcon:V,withAlignedLabels:R,nothingFoundMessage:Z,unstyled:l,renderOption:$,scrollAreaProps:_,labelId:void 0,"aria-label":void 0})]}),(0,j.jsx)(m.Combobox.HiddenInput,{name:G,value:ee,form:U,valuesDivider:K,...W})]})});k.classes=m.Combobox.classes,k.displayName="@mantine/core/ComboboxPopover",k.Target=Y;let T={type:"code",component:function(){let[e,t]=(0,a.useState)(null);return(0,j.jsx)(k,{data:["React","Angular","Vue","Svelte"],value:e,onChange:t,children:(0,j.jsx)(k.Target,{children:(0,j.jsx)(n.Button,{variant:"default",miw:200,children:e||"Select framework"})})})},code:`
import { useState } from 'react';
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <ComboboxPopover
      data={['React', 'Angular', 'Vue', 'Svelte']}
      value={value}
      onChange={setValue}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>{value || 'Select framework'}</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,centered:!0},P={type:"code",component:function(){let[e,t]=(0,a.useState)([]);return(0,j.jsx)(k,{data:["React","Angular","Vue","Svelte"],value:e,onChange:t,multiple:!0,children:(0,j.jsx)(k.Target,{children:(0,j.jsx)(n.Button,{variant:"default",miw:200,children:e.length>0?e.join(", "):"Select frameworks"})})})},code:`
import { useState } from 'react';
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <ComboboxPopover
      data={['React', 'Angular', 'Vue', 'Svelte']}
      value={value}
      onChange={setValue}
      multiple
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>
          {value.length > 0 ? value.join(', ') : 'Select frameworks'}
        </Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,centered:!0},V={type:"code",component:function(){let[e,t]=(0,a.useState)(null);return(0,j.jsx)(k,{data:[{group:"Frontend",items:["React","Angular","Vue"]},{group:"Backend",items:["Node.js","Django","Rails"]}],value:e,onChange:t,children:(0,j.jsx)(k.Target,{children:(0,j.jsx)(n.Button,{variant:"default",miw:200,children:e||"Select technology"})})})},code:`
import { useState } from 'react';
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <ComboboxPopover
      data={[
        { group: 'Frontend', items: ['React', 'Angular', 'Vue'] },
        { group: 'Backend', items: ['Node.js', 'Django', 'Rails'] },
      ]}
      value={value}
      onChange={setValue}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>{value || 'Select technology'}</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,centered:!0},R={type:"configurator",component:function(e){return(0,j.jsx)(k,{...e,data:["React","Angular","Svelte","Vue"],dropdownOpened:!0,defaultValue:"React",comboboxProps:{hideDetached:!1},children:(0,j.jsx)(k.Target,{children:(0,j.jsx)(n.Button,{variant:"default",miw:200,mb:150,children:"Select framework"})})})},code:`
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  return (
    <ComboboxPopover
      {{props}}
      data={['React', 'Angular', 'Svelte', 'Vue']}
      dropdownOpened
      defaultValue="React"
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200} mb={150}>Select framework</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,centered:!0,maxWidth:340,controls:[{type:"boolean",prop:"withCheckIcon",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withAlignedLabels",initialValue:!1,libraryValue:!1},{type:"segmented",prop:"checkIconPosition",initialValue:"left",libraryValue:null,data:["left","right"]}]},L={type:"code",component:function(){return(0,j.jsx)(k,{data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}],children:(0,j.jsx)(k.Target,{children:(0,j.jsx)(n.Button,{variant:"default",miw:200,children:"Select framework"})})})},code:`
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  return (
    <ComboboxPopover
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>Select framework</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,centered:!0};var Z=e.i(671640);let z={type:"code",component:function(){let[e,t]=(0,a.useState)("React"),[r,o]=(0,a.useState)("React");return(0,j.jsxs)(Z.Stack,{children:[(0,j.jsx)(k,{data:["React","Angular","Vue","Svelte"],value:e,onChange:t,allowDeselect:!1,children:(0,j.jsx)(k.Target,{children:(0,j.jsx)(n.Button,{variant:"default",miw:200,children:e||"Cannot deselect"})})}),(0,j.jsx)(k,{data:["React","Angular","Vue","Svelte"],value:r,onChange:o,allowDeselect:!0,children:(0,j.jsx)(k.Target,{children:(0,j.jsx)(n.Button,{variant:"default",miw:200,children:r||"Can deselect (default)"})})})]})},code:`
import { useState } from 'react';
import { Button, ComboboxPopover, Stack } from '@mantine/core';

function Demo() {
  const [value1, setValue1] = useState<string | null>('React');
  const [value2, setValue2] = useState<string | null>('React');

  return (
    <Stack>
      <ComboboxPopover
        data={['React', 'Angular', 'Vue', 'Svelte']}
        value={value1}
        onChange={setValue1}
        allowDeselect={false}
      >
        <ComboboxPopover.Target>
          <Button variant="default" miw={200}>
            {value1 || 'Cannot deselect'}
          </Button>
        </ComboboxPopover.Target>
      </ComboboxPopover>

      <ComboboxPopover
        data={['React', 'Angular', 'Vue', 'Svelte']}
        value={value2}
        onChange={setValue2}
        allowDeselect
      >
        <ComboboxPopover.Target>
          <Button variant="default" miw={200}>
            {value2 || 'Can deselect (default)'}
          </Button>
        </ComboboxPopover.Target>
      </ComboboxPopover>
    </Stack>
  );
}
`,centered:!0},N={type:"code",component:function(){return(0,j.jsx)(k,{data:[],nothingFoundMessage:"No options available",children:(0,j.jsx)(k.Target,{children:(0,j.jsx)(n.Button,{variant:"default",miw:200,children:"Open dropdown"})})})},code:`
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  return (
    <ComboboxPopover
      data={[]}
      nothingFoundMessage="No options available"
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>Open dropdown</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,centered:!0},B={type:"code",component:function(){let[e,t]=(0,a.useState)(null);return(0,j.jsx)(k,{data:["React","Angular","Vue","Svelte"],value:e,onChange:t,searchable:!0,nothingFoundMessage:"Nothing found...",children:(0,j.jsx)(k.Target,{children:(0,j.jsx)(n.Button,{variant:"default",miw:200,children:e||"Select framework"})})})},code:`
import { useState } from 'react';
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <ComboboxPopover
      data={['React', 'Angular', 'Vue', 'Svelte']}
      value={value}
      onChange={setValue}
      searchable
      nothingFoundMessage="Nothing found..."
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>{value || 'Select framework'}</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,centered:!0};var F=e.i(883364);let O={type:"code",component:function(){let[e,t]=(0,a.useState)(null),[r,o]=(0,a.useState)("");return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(k,{data:["React","Angular","Vue","Svelte"],value:e,onChange:t,searchable:!0,searchValue:r,onSearchChange:o,children:(0,j.jsx)(k.Target,{children:(0,j.jsx)(n.Button,{variant:"default",miw:200,children:e||"Select framework"})})}),(0,j.jsxs)(F.Text,{mt:"md",size:"sm",children:["Search value: ",(0,j.jsx)("b",{children:r||"(empty)"})]}),(0,j.jsxs)(F.Text,{size:"sm",children:["Selected value: ",(0,j.jsx)("b",{children:e||"(none)"})]})]})},code:`
import { useState } from 'react';
import { Button, ComboboxPopover, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <ComboboxPopover
        data={['React', 'Angular', 'Vue', 'Svelte']}
        value={value}
        onChange={setValue}
        searchable
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      >
        <ComboboxPopover.Target>
          <Button variant="default" miw={200}>{value || 'Select framework'}</Button>
        </ComboboxPopover.Target>
      </ComboboxPopover>

      <Text mt="md" size="sm">
        Search value: <b>{searchValue || '(empty)'}</b>
      </Text>
      <Text size="sm">
        Selected value: <b>{value || '(none)'}</b>
      </Text>
    </>
  );
}
`,centered:!0,maxWidth:340};var $=e.i(837048),_=e.i(661426),W=e.i(433506),G=e.i(169972),U=e.i(387136),K=e.i(725695);let q=`
import { useState } from 'react';
import {
  CheckIcon,
  TextAlignCenterIcon,
  TextAlignJustifyIcon,
  TextAlignLeftIcon,
  TextAlignRightIcon,
} from '@phosphor-icons/react';
import { Button, ComboboxPopover, ComboboxPopoverProps, Group } from '@mantine/core';

const iconProps = {
  color: 'currentColor',
  opacity: 0.6,
  size: 18,
};

const icons: Record<string, React.ReactNode> = {
  left: <TextAlignLeftIcon {...iconProps} />,
  center: <TextAlignCenterIcon {...iconProps} />,
  right: <TextAlignRightIcon {...iconProps} />,
  justify: <TextAlignJustifyIcon {...iconProps} />,
};

const renderSelectOption: ComboboxPopoverProps['renderOption'] = ({ option, checked }) => (
  <Group flex="1" gap="xs">
    {icons[option.value]}
    {option.label}
    {checked && <CheckIcon style={{ marginInlineStart: 'auto' }} {...iconProps} />}
  </Group>
);

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <ComboboxPopover
      data={[
        { value: 'left', label: 'Left' },
        { value: 'center', label: 'Center' },
        { value: 'right', label: 'Right' },
        { value: 'justify', label: 'Justify' },
      ]}
      value={value}
      onChange={setValue}
      renderOption={renderSelectOption}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>{value || 'Select alignment'}</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,J={color:"currentColor",opacity:.6,size:18},Q={left:(0,j.jsx)(G.TextAlignLeftIcon,{...J}),center:(0,j.jsx)(_.TextAlignCenterIcon,{...J}),right:(0,j.jsx)(U.TextAlignRightIcon,{...J}),justify:(0,j.jsx)(W.TextAlignJustifyIcon,{...J})},X=({option:e,checked:t})=>(0,j.jsxs)(K.Group,{flex:"1",gap:"xs",children:[Q[e.value],e.label,t&&(0,j.jsx)($.CheckIcon,{style:{marginInlineStart:"auto"},...J})]}),ee={type:"code",component:function(){let[e,t]=(0,a.useState)(null);return(0,j.jsx)(k,{data:[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"},{value:"justify",label:"Justify"}],value:e,onChange:t,renderOption:X,children:(0,j.jsx)(k.Target,{children:(0,j.jsx)(n.Button,{variant:"default",miw:200,children:e||"Select alignment"})})})},code:q,centered:!0,defaultExpanded:!1},et=`
import { Button, ComboboxPopover } from '@mantine/core';

const data = Array(50)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <ComboboxPopover data={data} maxDropdownHeight={200}>
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>Select option</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,ea=Array(50).fill(0).map((e,t)=>`Option ${t}`),en={type:"code",component:function(){return(0,j.jsx)(k,{data:ea,maxDropdownHeight:200,children:(0,j.jsx)(k.Target,{children:(0,j.jsx)(n.Button,{variant:"default",miw:200,children:"Select option"})})})},code:et,centered:!0},er={type:"code",component:function(){return(0,j.jsx)(k,{data:["React","Angular","Vue","Svelte"],comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}},children:(0,j.jsx)(k.Target,{children:(0,j.jsx)(n.Button,{variant:"default",miw:200,children:"Open dropdown above"})})})},code:`
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  return (
    <ComboboxPopover
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>Open dropdown above</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,centered:!0},eo={type:"code",component:function(){return(0,j.jsx)(k,{data:["React","Angular","Vue","Svelte"],comboboxProps:{transitionProps:{transition:"pop",duration:200}},children:(0,j.jsx)(k.Target,{children:(0,j.jsx)(n.Button,{variant:"default",miw:200,children:"With animation"})})})},code:`
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  return (
    <ComboboxPopover
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>With animation</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,centered:!0};var ei=e.i(541772);let el={type:"code",component:function(){let[e,{toggle:t}]=(0,ei.useDisclosure)();return(0,j.jsxs)(K.Group,{children:[(0,j.jsx)(n.Button,{onClick:t,children:"Toggle dropdown"}),(0,j.jsx)(k,{data:["React","Angular","Vue","Svelte"],dropdownOpened:e,children:(0,j.jsx)(k.Target,{children:(0,j.jsx)(n.Button,{variant:"default",miw:200,children:"Select framework"})})})]})},code:`
import { Button, ComboboxPopover, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [dropdownOpened, { toggle }] = useDisclosure();

  return (
    <Group>
      <Button onClick={toggle}>Toggle dropdown</Button>
      <ComboboxPopover
        data={['React', 'Angular', 'Vue', 'Svelte']}
        dropdownOpened={dropdownOpened}
      >
        <ComboboxPopover.Target>
          <Button variant="default" miw={200}>Select framework</Button>
        </ComboboxPopover.Target>
      </ComboboxPopover>
    </Group>
  );
}
`,centered:!0},es={type:"code",component:function(){let[e,t]=(0,a.useState)(null),[r,o]=(0,a.useState)("");return(0,j.jsx)("form",{onSubmit:e=>{e.preventDefault(),o(new FormData(e.currentTarget).get("framework"))},children:(0,j.jsxs)(Z.Stack,{children:[(0,j.jsx)(k,{data:["React","Angular","Vue","Svelte"],value:e,onChange:t,name:"framework",children:(0,j.jsx)(k.Target,{children:(0,j.jsx)(n.Button,{variant:"default",miw:200,type:"button",children:e||"Select framework"})})}),(0,j.jsx)(n.Button,{type:"submit",children:"Submit"}),r&&(0,j.jsxs)(F.Text,{size:"sm",children:["Submitted value: ",(0,j.jsx)("b",{children:r})]})]})})},code:`
import { useState } from 'react';
import { Button, ComboboxPopover, Stack, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState('');

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        setSubmitted(formData.get('framework') as string);
      }}
    >
      <Stack>
        <ComboboxPopover
          data={['React', 'Angular', 'Vue', 'Svelte']}
          value={value}
          onChange={setValue}
          name="framework"
        >
          <ComboboxPopover.Target>
            <Button variant="default" miw={200} type="button">
              {value || 'Select framework'}
            </Button>
          </ComboboxPopover.Target>
        </ComboboxPopover>

        <Button type="submit">Submit</Button>
        {submitted && <Text size="sm">Submitted value: <b>{submitted}</b></Text>}
      </Stack>
    </form>
  );
}
`,centered:!0,maxWidth:340},ed=({options:e,search:t})=>{let a=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return a.sort((e,t)=>e.label.localeCompare(t.label)),a},ec={type:"code",component:function(){let[e,t]=(0,a.useState)(null);return(0,j.jsx)(k,{data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],value:e,onChange:t,searchable:!0,filter:ed,nothingFoundMessage:"Nothing found...",children:(0,j.jsx)(k.Target,{children:(0,j.jsx)(n.Button,{variant:"default",miw:200,children:e||"Select framework"})})})},code:`
import { useState } from 'react';
import { Button, ComboboxItem, ComboboxPopover, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <ComboboxPopover
      data={['4 – React', '1 – Angular', '3 – Vue', '2 – Svelte']}
      value={value}
      onChange={setValue}
      searchable
      filter={optionsFilter}
      nothingFoundMessage="Nothing found..."
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>{value || 'Select framework'}</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,centered:!0},eu=`
import { useState } from 'react';
import { Button, ComboboxPopover } from '@mantine/core';

const largeData = Array(1000)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <ComboboxPopover
      data={largeData}
      value={value}
      onChange={setValue}
      searchable
      limit={5}
      nothingFoundMessage="Nothing found..."
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>{value || 'Select option'}</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,em=Array(1e3).fill(0).map((e,t)=>`Option ${t}`),ep={type:"code",component:function(){let[e,t]=(0,a.useState)(null);return(0,j.jsx)(k,{data:em,value:e,onChange:t,searchable:!0,limit:5,nothingFoundMessage:"Nothing found...",children:(0,j.jsx)(k.Target,{children:(0,j.jsx)(n.Button,{variant:"default",miw:200,children:e||"Select option"})})})},code:eu,centered:!0},eh={type:"code",component:function(){return(0,j.jsx)(k,{data:["React","Angular","Vue","Svelte"],comboboxProps:{width:250,position:"bottom-start"},children:(0,j.jsx)(k.Target,{children:(0,j.jsx)(n.Button,{variant:"default",miw:200,children:"Select framework"})})})},code:`
import { Button, ComboboxPopover } from '@mantine/core';

function Demo() {
  return (
    <ComboboxPopover
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ width: 250, position: 'bottom-start' }}
    >
      <ComboboxPopover.Target>
        <Button variant="default" miw={200}>Select framework</Button>
      </ComboboxPopover.Target>
    </ComboboxPopover>
  );
}
`,centered:!0};var ef=(0,t.__exportAll)({allowDeselect:()=>z,checkIcon:()=>R,controlledSearch:()=>O,disabledOptions:()=>L,dropdownAnimation:()=>eo,dropdownOpened:()=>el,dropdownPosition:()=>er,dropdownWidth:()=>eh,formSubmission:()=>es,groups:()=>V,limit:()=>ep,multiple:()=>P,nothingFound:()=>N,renderOption:()=>ee,scrollArea:()=>en,searchable:()=>B,sort:()=>ec,usage:()=>T});e.s(["ComboboxPopoverDemos",0,ef],781041)},573798,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let n=(0,a.default)().format("YYYY-MM-DD"),r=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),o=(0,a.default)().add(5,"day").format("YYYY-MM-DD"),i=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"}],l=[{id:1,title:"Team Standup",start:`${n} 09:00:00`,end:`${n} 09:30:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${n} 10:00:00`,end:`${n} 11:30:00`,color:"green",resourceId:"paris"},{id:3,title:"Design Review",start:`${r} 13:00:00`,end:`${r} 14:00:00`,color:"orange",resourceId:"tokyo"},{id:4,title:"Client Call",start:`${r} 09:30:00`,end:`${r} 10:30:00`,color:"violet",resourceId:"new-york"},{id:5,title:"Workshop",start:`${o} 14:00:00`,end:`${o} 16:00:00`,color:"pink",resourceId:"paris"}],s=`
import dayjs from 'dayjs';
import { ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');
const tomorrow = dayjs().add(1, 'day').format('YYYY-MM-DD');
const nextWeek = dayjs().add(5, 'day').format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
];

const events = [
  {
    id: 1,
    title: 'Team Standup',
    start: \`\${today} 09:00:00\`,
    end: \`\${today} 09:30:00\`,
    color: 'blue',
    resourceId: 'tokyo',
  },
  {
    id: 2,
    title: 'Sprint Planning',
    start: \`\${today} 10:00:00\`,
    end: \`\${today} 11:30:00\`,
    color: 'green',
    resourceId: 'paris',
  },
  {
    id: 3,
    title: 'Design Review',
    start: \`\${tomorrow} 13:00:00\`,
    end: \`\${tomorrow} 14:00:00\`,
    color: 'orange',
    resourceId: 'tokyo',
  },
  {
    id: 4,
    title: 'Client Call',
    start: \`\${tomorrow} 09:30:00\`,
    end: \`\${tomorrow} 10:30:00\`,
    color: 'violet',
    resourceId: 'new-york',
  },
  {
    id: 5,
    title: 'Workshop',
    start: \`\${nextWeek} 14:00:00\`,
    end: \`\${nextWeek} 16:00:00\`,
    color: 'pink',
    resourceId: 'paris',
  },
];
`;var d=e.i(191788),c=e.i(391398),u=e.i(272013);let m={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:i,events:l,startScrollDate:(0,a.default)().format("YYYY-MM-DD")})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},p={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:i,events:l,mode:"static",startScrollDate:(0,a.default)().format("YYYY-MM-DD")})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      mode="static"
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},h={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:i,events:l,radius:"md",startScrollDate:(0,a.default)().format("YYYY-MM-DD")})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      radius="md"
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},f={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,d.useState)(l);return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:i,events:n,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a,resourceId:n})=>{r(r=>r.map(r=>r.id===e?{...r,start:t,end:a,resourceId:n}:r))},startScrollDate:(0,a.default)().format("YYYY-MM-DD")})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView, ScheduleEventData } from '@mantine/schedule';
import { events as initialEvents, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      withEventsDragAndDrop
      onEventDrop={({ eventId, newStart, newEnd, resourceId }) => {
        setEvents((current) =>
          current.map((event) =>
            event.id === eventId
              ? { ...event, start: newStart, end: newEnd, resourceId }
              : event
          )
        );
      }}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var g=e.i(162077),y=e.i(988798);let x={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,d.useState)(l),[o,s]=(0,d.useState)(!1),[m,p]=(0,d.useState)(null),[h,f]=(0,d.useState)(null);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:i,events:n,withDragSlotSelect:!0,onDayClick:({date:e,resourceId:t})=>{f(t?String(t):null),p({title:"",start:(0,a.default)(e).startOf("day").toDate(),end:(0,a.default)(e).endOf("day").toDate(),color:"blue"}),s(!0)},onSlotDragEnd:({rangeStart:e,rangeEnd:t,resourceId:a})=>{f(a?String(a):null),p({title:"",start:new Date(e),end:new Date(t),color:"blue"}),s(!0)},onEventClick:e=>{f(e.resourceId?String(e.resourceId):null),p({id:e.id,title:e.title,start:new Date(e.start),end:new Date(e.end),color:e.color||"blue"}),s(!0)},startScrollDate:(0,a.default)().format("YYYY-MM-DD")}),(0,c.jsx)(g.EventForm,{opened:o,onClose:()=>s(!1),onExitTransitionEnd:()=>p(null),values:m,onSubmit:e=>{e.id?r(t=>t.map(t=>t.id===e.id?{...t,title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue",resourceId:h||t.resourceId}:t)):r(t=>[...t,{id:Math.random().toString(36).substring(2,11),title:e.title,start:(0,a.default)(e.start).toISOString(),end:(0,a.default)(e.end).toISOString(),color:e.color||"blue",resourceId:h||void 0}])},onDelete:m?.id?()=>{m?.id&&r(e=>e.filter(e=>e.id!==m.id))}:void 0,children:(0,c.jsx)(y.Select,{label:"Resource",placeholder:"Select resource",radius:"md",data:i.map(e=>({value:String(e.id),label:String(e.label)})),value:h,onChange:f})})]})},code:[{code:`import dayjs from 'dayjs';
import { useState } from 'react';
import { Select } from '@mantine/core';
import { ResourcesMonthView, ScheduleEventData } from '@mantine/schedule';
import { EventData, EventForm } from './EventForm';
import { events as initialEvents, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);
  const [formOpened, setFormOpened] = useState(false);
  const [selectedEventData, setSelectedEventData] = useState<EventData | null>(null);
  const [selectedResourceId, setSelectedResourceId] = useState<string | null>(null);

  const handleDayClick = ({
    date: clickedDate,
    resourceId,
  }: {
    date: string;
    nativeEvent: React.MouseEvent<HTMLButtonElement>;
    resourceId?: string | number;
  }) => {
    setSelectedResourceId(resourceId ? String(resourceId) : null);
    setSelectedEventData({
      title: '',
      start: dayjs(clickedDate).startOf('day').toDate(),
      end: dayjs(clickedDate).endOf('day').toDate(),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleEventClick = (event: ScheduleEventData) => {
    setSelectedResourceId(event.resourceId ? String(event.resourceId) : null);
    setSelectedEventData({
      id: event.id,
      title: event.title,
      start: new Date(event.start),
      end: new Date(event.end),
      color: event.color || 'blue',
    });
    setFormOpened(true);
  };

  const handleSlotDragEnd = ({
    rangeStart,
    rangeEnd,
    resourceId,
  }: {
    rangeStart: string;
    rangeEnd: string;
    resourceId?: string | number;
  }) => {
    setSelectedResourceId(resourceId ? String(resourceId) : null);
    setSelectedEventData({
      title: '',
      start: new Date(rangeStart),
      end: new Date(rangeEnd),
      color: 'blue',
    });
    setFormOpened(true);
  };

  const handleSubmit = (values: EventData) => {
    if (values.id) {
      setEvents((prev) =>
        prev.map((event) =>
          event.id === values.id
            ? {
                ...event,
                title: values.title,
                start: dayjs(values.start).toISOString(),
                end: dayjs(values.end).toISOString(),
                color: values.color || 'blue',
                resourceId: selectedResourceId || event.resourceId,
              }
            : event
        )
      );
    } else {
      setEvents((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substring(2, 11),
          title: values.title,
          start: dayjs(values.start).toISOString(),
          end: dayjs(values.end).toISOString(),
          color: values.color || 'blue',
          resourceId: selectedResourceId || undefined,
        },
      ]);
    }
  };

  const handleDeleteEvent = () => {
    if (selectedEventData?.id) {
      setEvents((prev) => prev.filter((e) => e.id !== selectedEventData.id));
    }
  };

  return (
    <>
      <ResourcesMonthView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        withDragSlotSelect
        onDayClick={handleDayClick}
        onSlotDragEnd={handleSlotDragEnd}
        onEventClick={handleEventClick}
        startScrollDate={dayjs().format('YYYY-MM-DD')}
      />

      <EventForm
        opened={formOpened}
        onClose={() => setFormOpened(false)}
        onExitTransitionEnd={() => setSelectedEventData(null)}
        values={selectedEventData}
        onSubmit={handleSubmit}
        onDelete={selectedEventData?.id ? handleDeleteEvent : undefined}
      >
        <Select
          label="Resource"
          placeholder="Select resource"
          radius="md"
          data={resources.map((r) => ({ value: String(r.id), label: r.label }))}
          value={selectedResourceId}
          onChange={setSelectedResourceId}
        />
      </EventForm>
    </>
  );
}`,language:"tsx",fileName:"Demo.tsx"},{code:g._eventFormCode,language:"tsx",fileName:"EventForm.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};var v=e.i(19683),b=e.i(369974),M=e.i(284629);let D=(0,a.default)().format("YYYY-MM-DD"),S=(0,a.default)().add(1,"day").format("YYYY-MM-DD"),j=(0,a.default)().add(5,"day").format("YYYY-MM-DD"),w=[{id:1,title:"Team Standup",start:`${D} 09:00:00`,end:`${D} 09:30:00`,color:"blue",resourceId:"tokyo",payload:{description:"Daily team sync meeting",attendees:["Alice","Bob","Charlie"],location:"Floor 3"}},{id:2,title:"Sprint Planning",start:`${D} 10:00:00`,end:`${D} 11:30:00`,color:"green",resourceId:"paris",payload:{description:"Plan next sprint tasks and goals",attendees:["Diana","Eve"],location:"Main Hall"}},{id:3,title:"Design Review",start:`${S} 13:00:00`,end:`${S} 14:00:00`,color:"orange",resourceId:"tokyo",payload:{description:"Review UI/UX designs for new feature",attendees:["Henry","Alice"],location:"Studio B"}},{id:4,title:"Client Call",start:`${S} 09:30:00`,end:`${S} 10:30:00`,color:"violet",resourceId:"new-york",payload:{description:"Quarterly review with client",attendees:["Frank","Grace"],location:"Zoom"}},{id:5,title:"Workshop",start:`${j} 14:00:00`,end:`${j} 16:00:00`,color:"pink",resourceId:"paris",payload:{description:"Hands-on coding workshop",attendees:["Bob","Charlie","Diana"],location:"Lab 2"}}],Y={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,a.default)().format("YYYY-MM-DD")),[n,r]=(0,d.useState)(w);return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:i,events:n,withEventsDragAndDrop:!0,onEventDrop:({eventId:e,newStart:t,newEnd:a,resourceId:n})=>{r(r=>r.map(r=>r.id===e?{...r,start:t,end:a,resourceId:n}:r))},renderEvent:(e,t)=>(0,c.jsxs)(b.HoverCard,{width:280,position:"right",closeDelay:0,transitionProps:{duration:0},children:[(0,c.jsx)(b.HoverCard.Target,{children:(0,c.jsx)(M.UnstyledButton,{...t})}),(0,c.jsx)(b.HoverCard.Dropdown,{children:(0,c.jsx)(v.EventDetails,{event:e,resources:i})})]}),startScrollDate:(0,a.default)().format("YYYY-MM-DD")})},code:[{fileName:"Demo.tsx",code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { HoverCard, UnstyledButton } from '@mantine/core';
import { ResourcesMonthView, ScheduleEventData } from '@mantine/schedule';
import { EventDetails } from './EventDetails';
import { events as initialEvents, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [events, setEvents] = useState<ScheduleEventData[]>(initialEvents);

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      withEventsDragAndDrop
      onEventDrop={({ eventId, newStart, newEnd, resourceId }) => {
        setEvents((current) =>
          current.map((event) =>
            event.id === eventId
              ? { ...event, start: newStart, end: newEnd, resourceId }
              : event
          )
        );
      }}
      renderEvent={(event, props) => (
        <HoverCard width={280} position="right" closeDelay={0} transitionProps={{ duration: 0 }}>
          <HoverCard.Target>
            <UnstyledButton {...props} />
          </HoverCard.Target>
          <HoverCard.Dropdown>
            <EventDetails event={event} resources={resources} />
          </HoverCard.Dropdown>
        </HoverCard>
      )}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`,language:"tsx"},{fileName:"EventDetails.tsx",code:v._eventDetailsCode,language:"tsx"},{fileName:"data.ts",code:`import { ScheduleResourceData } from '@mantine/schedule';

export const resources: ScheduleResourceData[] = ${JSON.stringify(i,null,2)};

// Events with payload data for EventDetails
export const events = [
  // ... events with payload: { description, attendees, location }
];`,language:"tsx"}]};var I=e.i(671640),C=e.i(883364);let E={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:i,events:l,renderResourceLabel:e=>(0,c.jsxs)(I.Stack,{gap:0,align:"flex-start",children:[(0,c.jsx)(C.Text,{fw:600,size:"sm",children:e.label}),(0,c.jsx)(C.Text,{size:"xs",c:"dimmed",children:"Office"})]}),startScrollDate:(0,a.default)().format("YYYY-MM-DD")})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { Stack, Text } from '@mantine/core';
import { ResourcesMonthView, ScheduleResourceData } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      renderResourceLabel={(resource: ScheduleResourceData) => (
        <Stack gap={0} align="flex-start">
          <Text fw={600} size="sm">
            {resource.label}
          </Text>
          <Text size="xs" c="dimmed">
            Office
          </Text>
        </Stack>
      )}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]};e.i(27355);let A={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:i,events:l,locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",today:"Hoy",previous:"Anterior",next:"Siguiente",more:"Más",resources:"Recursos",moreLabel:e=>`+${e} m\xe1s`},startScrollDate:(0,a.default)().format("YYYY-MM-DD")})},code:[{code:`
import 'dayjs/locale/es';

import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      locale="es"
      labels={{
        day: 'D\xeda',
        week: 'Semana',
        month: 'Mes',
        year: 'A\xf1o',
        today: 'Hoy',
        previous: 'Anterior',
        next: 'Siguiente',
        more: 'M\xe1s',
        resources: 'Recursos',
        moreLabel: (hiddenEventsCount) => \`+\${hiddenEventsCount} m\xe1s\`,
      }}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},H=(0,a.default)().format("YYYY-MM-DD"),k=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"}],T=[{id:1,title:"Team Meeting",start:`${H} 09:00:00`,end:`${H} 10:00:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Code Review",start:`${H} 11:00:00`,end:`${H} 12:00:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Design Review",start:`${H} 13:00:00`,end:`${H} 14:00:00`,color:"violet",resourceId:"tokyo"},{id:4,title:"Sprint Planning",start:`${H} 15:00:00`,end:`${H} 16:00:00`,color:"orange",resourceId:"tokyo"},{id:5,title:"Retrospective",start:`${H} 16:30:00`,end:`${H} 17:30:00`,color:"cyan",resourceId:"tokyo"},{id:6,title:"Client Call",start:`${H} 09:00:00`,end:`${H} 10:00:00`,color:"pink",resourceId:"paris"},{id:7,title:"Workshop",start:`${H} 11:00:00`,end:`${H} 12:00:00`,color:"grape",resourceId:"paris"},{id:8,title:"Standup",start:`${H} 14:00:00`,end:`${H} 15:00:00`,color:"red",resourceId:"paris"},{id:9,title:"Demo",start:`${H} 16:00:00`,end:`${H} 17:00:00`,color:"teal",resourceId:"paris"}],P={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:k,events:T,maxEventsPerTimeSlot:3,startScrollDate:(0,a.default)().format("YYYY-MM-DD")})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
];

const events: ScheduleEventData[] = [
  { id: 1, title: 'Team Meeting', start: \`\${today} 09:00:00\`, end: \`\${today} 10:00:00\`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Code Review', start: \`\${today} 11:00:00\`, end: \`\${today} 12:00:00\`, color: 'green', resourceId: 'tokyo' },
  { id: 3, title: 'Design Review', start: \`\${today} 13:00:00\`, end: \`\${today} 14:00:00\`, color: 'violet', resourceId: 'tokyo' },
  { id: 4, title: 'Sprint Planning', start: \`\${today} 15:00:00\`, end: \`\${today} 16:00:00\`, color: 'orange', resourceId: 'tokyo' },
  { id: 5, title: 'Retrospective', start: \`\${today} 16:30:00\`, end: \`\${today} 17:30:00\`, color: 'cyan', resourceId: 'tokyo' },
  { id: 6, title: 'Client Call', start: \`\${today} 09:00:00\`, end: \`\${today} 10:00:00\`, color: 'pink', resourceId: 'paris' },
  { id: 7, title: 'Workshop', start: \`\${today} 11:00:00\`, end: \`\${today} 12:00:00\`, color: 'grape', resourceId: 'paris' },
  { id: 8, title: 'Standup', start: \`\${today} 14:00:00\`, end: \`\${today} 15:00:00\`, color: 'red', resourceId: 'paris' },
  { id: 9, title: 'Demo', start: \`\${today} 16:00:00\`, end: \`\${today} 17:00:00\`, color: 'teal', resourceId: 'paris' },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      maxEventsPerTimeSlot={3}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`},V={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:i,events:l,dayWidth:60,rowHeight:64,startScrollDate:(0,a.default)().format("YYYY-MM-DD")})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      dayWidth={60}
      rowHeight={64}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},R={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:i,events:l,scrollAreaProps:{scrollbarSize:10,offsetScrollbars:!0,type:"always",scrollbars:"x"},startScrollDate:(0,a.default)().format("YYYY-MM-DD")})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      scrollAreaProps={{
        scrollbarSize: 10,
        offsetScrollbars: true,
        type: 'always',
        scrollbars: 'x',
      }}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},L={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:i,events:l,startScrollDate:(0,a.default)().format("YYYY-MM-DD")})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},Z={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:i,events:l,withWeekendDays:!1,startScrollDate:(0,a.default)().format("YYYY-MM-DD")})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      withWeekendDays={false}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},z=(0,a.default)().format("YYYY-MM-DD"),N=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"}],B=[{id:1,title:"Team Standup",start:`${z} 08:00:00`,end:`${z} 08:30:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${z} 09:00:00`,end:`${z} 10:00:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Design Review",start:`${z} 10:30:00`,end:`${z} 11:30:00`,color:"violet",resourceId:"tokyo"},{id:4,title:"Code Review",start:`${z} 13:00:00`,end:`${z} 14:00:00`,color:"orange",resourceId:"tokyo"},{id:5,title:"Retrospective",start:`${z} 14:30:00`,end:`${z} 15:30:00`,color:"cyan",resourceId:"tokyo"},{id:6,title:"Client Call",start:`${z} 16:00:00`,end:`${z} 17:00:00`,color:"pink",resourceId:"tokyo"},{id:7,title:"Workshop",start:`${z} 10:00:00`,end:`${z} 11:00:00`,color:"grape",resourceId:"paris"}],F={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:N,events:B,maxEventsPerTimeSlot:2,startScrollDate:(0,a.default)().format("YYYY-MM-DD")})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
];

const events: ScheduleEventData[] = [
  { id: 1, title: 'Team Standup', start: \`\${today} 08:00:00\`, end: \`\${today} 08:30:00\`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Sprint Planning', start: \`\${today} 09:00:00\`, end: \`\${today} 10:00:00\`, color: 'green', resourceId: 'tokyo' },
  { id: 3, title: 'Design Review', start: \`\${today} 10:30:00\`, end: \`\${today} 11:30:00\`, color: 'violet', resourceId: 'tokyo' },
  { id: 4, title: 'Code Review', start: \`\${today} 13:00:00\`, end: \`\${today} 14:00:00\`, color: 'orange', resourceId: 'tokyo' },
  { id: 5, title: 'Retrospective', start: \`\${today} 14:30:00\`, end: \`\${today} 15:30:00\`, color: 'cyan', resourceId: 'tokyo' },
  { id: 6, title: 'Client Call', start: \`\${today} 16:00:00\`, end: \`\${today} 17:00:00\`, color: 'pink', resourceId: 'tokyo' },
  { id: 7, title: 'Workshop', start: \`\${today} 10:00:00\`, end: \`\${today} 11:00:00\`, color: 'grape', resourceId: 'paris' },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      maxEventsPerTimeSlot={2}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`},O=(0,a.default)().format("YYYY-MM-DD"),$=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"}],_=[{id:1,title:"Team Standup",start:`${O} 08:00:00`,end:`${O} 08:30:00`,color:"blue",resourceId:"tokyo"},{id:2,title:"Sprint Planning",start:`${O} 09:00:00`,end:`${O} 10:00:00`,color:"green",resourceId:"tokyo"},{id:3,title:"Design Review",start:`${O} 10:30:00`,end:`${O} 11:30:00`,color:"violet",resourceId:"tokyo"},{id:4,title:"Code Review",start:`${O} 13:00:00`,end:`${O} 14:00:00`,color:"orange",resourceId:"tokyo"},{id:5,title:"Retrospective",start:`${O} 14:30:00`,end:`${O} 15:30:00`,color:"cyan",resourceId:"tokyo"},{id:6,title:"Client Call",start:`${O} 16:00:00`,end:`${O} 17:00:00`,color:"pink",resourceId:"tokyo"},{id:7,title:"Workshop",start:`${O} 10:00:00`,end:`${O} 11:00:00`,color:"grape",resourceId:"paris"}],W={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:$,events:_,maxEventsPerTimeSlot:2,startScrollDate:(0,a.default)().format("YYYY-MM-DD"),moreEventsProps:{dropdownType:"modal",modalTitle:"All Events"}})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView, ScheduleEventData, ScheduleResourceData } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources: ScheduleResourceData[] = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
];

const events: ScheduleEventData[] = [
  { id: 1, title: 'Team Standup', start: \`\${today} 08:00:00\`, end: \`\${today} 08:30:00\`, color: 'blue', resourceId: 'tokyo' },
  { id: 2, title: 'Sprint Planning', start: \`\${today} 09:00:00\`, end: \`\${today} 10:00:00\`, color: 'green', resourceId: 'tokyo' },
  { id: 3, title: 'Design Review', start: \`\${today} 10:30:00\`, end: \`\${today} 11:30:00\`, color: 'violet', resourceId: 'tokyo' },
  { id: 4, title: 'Code Review', start: \`\${today} 13:00:00\`, end: \`\${today} 14:00:00\`, color: 'orange', resourceId: 'tokyo' },
  { id: 5, title: 'Retrospective', start: \`\${today} 14:30:00\`, end: \`\${today} 15:30:00\`, color: 'cyan', resourceId: 'tokyo' },
  { id: 6, title: 'Client Call', start: \`\${today} 16:00:00\`, end: \`\${today} 17:00:00\`, color: 'pink', resourceId: 'tokyo' },
  { id: 7, title: 'Workshop', start: \`\${today} 10:00:00\`, end: \`\${today} 11:00:00\`, color: 'grape', resourceId: 'paris' },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      maxEventsPerTimeSlot={2}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
      moreEventsProps={{ dropdownType: 'modal', modalTitle: 'All Events' }}
    />
  );
}
`};var G=e.i(428127);let U={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsxs)("div",{children:[(0,c.jsxs)(G.ScheduleHeader,{children:[(0,c.jsx)(G.ScheduleHeader.Previous,{onClick:()=>t((0,a.default)(e).subtract(1,"month").startOf("month").format("YYYY-MM-DD"))}),(0,c.jsx)(G.ScheduleHeader.MonthYearSelect,{yearValue:(0,a.default)(e).year(),monthValue:(0,a.default)(e).month(),onYearChange:n=>t((0,a.default)(e).year(n).startOf("month").format("YYYY-MM-DD")),onMonthChange:n=>t((0,a.default)(e).month(n).startOf("month").format("YYYY-MM-DD"))}),(0,c.jsx)(G.ScheduleHeader.Next,{onClick:()=>t((0,a.default)(e).add(1,"month").startOf("month").format("YYYY-MM-DD"))}),(0,c.jsx)(G.ScheduleHeader.Today,{onClick:()=>t((0,a.default)().format("YYYY-MM-DD"))})]}),(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:i,events:l,withHeader:!1})]})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DateStringValue, ResourcesMonthView, ScheduleHeader } from '@mantine/schedule';
import { events, resources } from './data';

function Demo() {
  const [date, setDate] = useState<DateStringValue>(
    dayjs().format('YYYY-MM-DD')
  );

  return (
    <div>
      <ScheduleHeader>
        <ScheduleHeader.Previous
          onClick={() =>
            setDate(
              dayjs(date)
                .subtract(1, 'month')
                .startOf('month')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.MonthYearSelect
          yearValue={dayjs(date).year()}
          monthValue={dayjs(date).month()}
          onYearChange={(year) =>
            setDate(
              dayjs(date)
                .year(year)
                .startOf('month')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
          onMonthChange={(month) =>
            setDate(
              dayjs(date)
                .month(month)
                .startOf('month')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Next
          onClick={() =>
            setDate(
              dayjs(date)
                .add(1, 'month')
                .startOf('month')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Today
          onClick={() =>
            setDate(
              dayjs().format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
      </ScheduleHeader>

      <ResourcesMonthView
        date={date}
        onDateChange={setDate}
        resources={resources}
        events={events}
        withHeader={false}
      />
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s,language:"tsx",fileName:"data.ts"}]},K=(0,a.default)().format("YYYY-MM-DD"),q=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"}],J=[{id:"daily-sync-series",title:"Daily sync (series)",start:`${(0,a.default)(K).subtract(2,"day").format("YYYY-MM-DD")} 09:00:00`,end:`${(0,a.default)(K).subtract(2,"day").format("YYYY-MM-DD")} 09:30:00`,color:"blue",resourceId:"tokyo",recurrence:{rrule:"FREQ=DAILY;COUNT=10",exdate:[`${K} 09:00:00`]}},{id:"daily-sync-override",title:"Daily sync (moved today)",start:`${K} 14:00:00`,end:`${K} 14:30:00`,color:"grape",resourceId:"tokyo",recurringEventId:"daily-sync-series",recurrenceId:`${K} 09:00:00`},{id:"one-off",title:"One-off planning",start:`${K} 11:00:00`,end:`${K} 12:00:00`,color:"green",resourceId:"paris"}],Q={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)(K);return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:q,events:J,startScrollDate:K})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView } from '@mantine/schedule';

const today = dayjs().format('YYYY-MM-DD');

const resources = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
];

const events = [
  {
    id: 'daily-sync-series',
    title: 'Daily sync (series)',
    start: \`\${dayjs(today).subtract(2, 'day').format('YYYY-MM-DD')} 09:00:00\`,
    end: \`\${dayjs(today).subtract(2, 'day').format('YYYY-MM-DD')} 09:30:00\`,
    color: 'blue',
    resourceId: 'tokyo',
    recurrence: {
      rrule: 'FREQ=DAILY;COUNT=10',
      exdate: [\`\${today} 09:00:00\`],
    },
  },
  {
    id: 'daily-sync-override',
    title: 'Daily sync (moved today)',
    start: \`\${today} 14:00:00\`,
    end: \`\${today} 14:30:00\`,
    color: 'grape',
    resourceId: 'tokyo',
    recurringEventId: 'daily-sync-series',
    recurrenceId: \`\${today} 09:00:00\`,
  },
  {
    id: 'one-off',
    title: 'One-off planning',
    start: \`\${today} 11:00:00\`,
    end: \`\${today} 12:00:00\`,
    color: 'green',
    resourceId: 'paris',
  },
];

function Demo() {
  const [date, setDate] = useState(today);

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      startScrollDate={today}
    />
  );
}
`},X=[{id:"tokyo",label:"Meeting room: Tokyo"},{id:"paris",label:"Meeting room: Paris"},{id:"new-york",label:"Meeting room: New York"},{id:"overflow",label:"Overflow room"}],ee=[{label:"Floor 1",resourceIds:["tokyo","paris"]},{label:"Floor 2",resourceIds:["new-york"]}],et={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,d.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,c.jsx)(u.ResourcesMonthView,{date:e,onDateChange:t,resources:X,events:l,groups:ee,startScrollDate:(0,a.default)().format("YYYY-MM-DD")})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ResourcesMonthView, ScheduleResourceGroup } from '@mantine/schedule';
import { events } from './data';

const resources = [
  { id: 'tokyo', label: 'Meeting room: Tokyo' },
  { id: 'paris', label: 'Meeting room: Paris' },
  { id: 'new-york', label: 'Meeting room: New York' },
  { id: 'overflow', label: 'Overflow room' },
];

const groups: ScheduleResourceGroup[] = [
  { label: 'Floor 1', resourceIds: ['tokyo', 'paris'] },
  { label: 'Floor 2', resourceIds: ['new-york'] },
];

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <ResourcesMonthView
      date={date}
      onDateChange={setDate}
      resources={resources}
      events={events}
      groups={groups}
      startScrollDate={dayjs().format('YYYY-MM-DD')}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"}]};var ea=(0,t.__exportAll)({customHeader:()=>U,dayWidth:()=>V,dragDrop:()=>f,eventForm:()=>x,localization:()=>A,maxEventsPerTimeSlot:()=>P,moreEvents:()=>F,moreEventsProps:()=>W,radius:()=>h,recurringEvents:()=>Q,renderEvent:()=>Y,renderResourceLabel:()=>E,resourceGroups:()=>et,scrollAreaProps:()=>R,startScrollDate:()=>L,staticMode:()=>p,usage:()=>m,withoutWeekendDays:()=>Z});e.s(["ResourcesMonthViewDemos",0,ea],573798)},143747,e=>{"use strict";var t=e.i(391398),a=e.i(38856),n=e.i(374137),r=e.i(781041),o=e.i(467269),i=e.i(338333),l=e.i(984083),s=e.i(63887),d=e.i(791941),c=e.i(736897),u=e.i(436100),m=e.i(189305),p=e.i(573798),h=e.i(853905),f=e.i(259072),g=e.i(598386),y=e.i(156306),x=e.i(953813);e.i(603441);var v=e.i(62558);e.i(457450);var b=e.i(418026);let M=(0,v.Layout)(b.MDX_DATA.Changelog940);function D(e){let v={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.useMDXComponents)(),...e.components},{Demo:b,SponsorButton:M}=v;return b||S("Demo",!0),M||S("SponsorButton",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(v.h2,{id:"support-mantine-development",children:"Support Mantine development"}),"\n",(0,t.jsxs)(v.p,{children:["You can now sponsor Mantine development with ",(0,t.jsx)(v.a,{href:"https://opencollective.com/mantinedev",children:"OpenCollective"}),".\nAll funds are used to improve Mantine and create new features and components."]}),"\n",(0,t.jsx)(M,{}),"\n",(0,t.jsx)(v.h2,{id:"comboboxpopover-component",children:"ComboboxPopover component"}),"\n",(0,t.jsxs)(v.p,{children:["New ",(0,t.jsx)(v.a,{href:"/core/combobox-popover",children:"ComboboxPopover"})," component allows adding a combobox dropdown\nwith selectable options to any button element. Unlike ",(0,t.jsx)(v.code,{children:"Select"})," and ",(0,t.jsx)(v.code,{children:"MultiSelect"}),", it does not\nrender an input – you provide your own target element via ",(0,t.jsx)(v.code,{children:"ComboboxPopover.Target"}),". Supports\nsingle and multiple selection modes with the same ",(0,t.jsx)(v.code,{children:"data"})," format as ",(0,t.jsx)(v.code,{children:"Select"}),"."]}),"\n",(0,t.jsx)(b,{data:r.ComboboxPopoverDemos.usage}),"\n",(0,t.jsx)(v.h2,{id:"datalist-component",children:"DataList component"}),"\n",(0,t.jsxs)(v.p,{children:["New ",(0,t.jsx)(v.a,{href:"/core/data-list",children:"DataList"})," component displays label-value pairs as a semantic description\nlist using ",(0,t.jsx)(v.code,{children:"dl"}),", ",(0,t.jsx)(v.code,{children:"dt"}),", and ",(0,t.jsx)(v.code,{children:"dd"})," HTML elements. Supports vertical and horizontal orientations,\ndividers between items, and all standard Mantine features like Styles API and size prop."]}),"\n",(0,t.jsx)(b,{data:o.DataListDemos.usage}),"\n",(0,t.jsx)(v.h2,{id:"emptystate-component",children:"EmptyState component"}),"\n",(0,t.jsxs)(v.p,{children:["New ",(0,t.jsx)(v.a,{href:"/core/empty-state",children:"EmptyState"}),' component displays a placeholder for "no data" situations:\nempty search results, empty tables and lists, first-run states or error illustrations with an\noptional call to action. It can be used with ',(0,t.jsx)(v.code,{children:"icon"}),", ",(0,t.jsx)(v.code,{children:"title"})," and ",(0,t.jsx)(v.code,{children:"description"})," shorthand props\nor with ",(0,t.jsx)(v.code,{children:"EmptyState.Indicator"}),", ",(0,t.jsx)(v.code,{children:"EmptyState.Title"}),", ",(0,t.jsx)(v.code,{children:"EmptyState.Description"})," and\n",(0,t.jsx)(v.code,{children:"EmptyState.Actions"})," compound components for full control."]}),"\n",(0,t.jsx)(b,{data:i.EmptyStateDemos.compound}),"\n",(0,t.jsx)(v.h2,{id:"menubar-component",children:"Menubar component"}),"\n",(0,t.jsxs)(v.p,{children:["New ",(0,t.jsx)(v.a,{href:"/core/menubar",children:"Menubar"})," component adds a desktop-application style menu bar: a horizontal row\nof top-level menu triggers (File, Edit, View, …) where each trigger opens a dropdown. Arrow keys\nmove between the top-level menus, and once one menu is opened, moving to a sibling opens it\nimmediately. ",(0,t.jsx)(v.code,{children:"Menubar"})," is built on top of ",(0,t.jsx)(v.code,{children:"Menu"})," and follows the WAI-ARIA menubar pattern."]}),"\n",(0,t.jsx)(b,{data:s.MenubarDemos.usage}),"\n",(0,t.jsx)(v.h2,{id:"resourcesdayview-component",children:"ResourcesDayView component"}),"\n",(0,t.jsxs)(v.p,{children:["New ",(0,t.jsx)(v.a,{href:"/schedule/resources-day-view",children:"ResourcesDayView"})," component displays resources as rows and\ntime slots as columns. Each row represents a resource (conference room, person, equipment) and\nshows events assigned to that resource. Supports drag and drop across resources, business hours\nhighlighting, and slot drag select."]}),"\n",(0,t.jsx)(b,{data:m.ResourcesDayViewDemos.usage}),"\n",(0,t.jsx)(v.h2,{id:"resourcesweekview-component",children:"ResourcesWeekView component"}),"\n",(0,t.jsxs)(v.p,{children:["New ",(0,t.jsx)(v.a,{href:"/schedule/resources-week-view",children:"ResourcesWeekView"})," component displays resources as rows\nand a full week of time slots as columns with a two-level header showing day names and time\nlabels. Supports drag and drop, slot selection, business hours, and current time indicator."]}),"\n",(0,t.jsx)(b,{data:f.ResourcesWeekViewDemos.usage}),"\n",(0,t.jsx)(v.h2,{id:"resourcesmonthview-component",children:"ResourcesMonthView component"}),"\n",(0,t.jsxs)(v.p,{children:["New ",(0,t.jsx)(v.a,{href:"/schedule/resources-month-view",children:"ResourcesMonthView"})," component displays resources as rows\nand days of the month as columns. Events are shown as colored indicators within each\nresource-day cell for easy visualization of resource utilization across the month."]}),"\n",(0,t.jsx)(b,{data:p.ResourcesMonthViewDemos.usage}),"\n",(0,t.jsx)(v.h2,{id:"resourcesschedule-component",children:"ResourcesSchedule component"}),"\n",(0,t.jsxs)(v.p,{children:["New ",(0,t.jsx)(v.a,{href:"/schedule/resources-schedule",children:"ResourcesSchedule"})," wrapper component combines ",(0,t.jsx)(v.code,{children:"ResourcesDayView"}),",\n",(0,t.jsx)(v.code,{children:"ResourcesWeekView"})," and ",(0,t.jsx)(v.code,{children:"ResourcesMonthView"})," into a single component with view switching, similar\nto how ",(0,t.jsx)(v.code,{children:"Schedule"})," combines day, week, month and year views."]}),"\n",(0,t.jsx)(b,{data:h.ResourcesScheduleDemos.usage}),"\n",(0,t.jsx)(v.h2,{id:"agendaview-component",children:"AgendaView component"}),"\n",(0,t.jsxs)(v.p,{children:["New ",(0,t.jsx)(v.a,{href:"/schedule/agenda-view",children:"AgendaView"})," component renders a vertical list of events for a specified\ntime period. Events are grouped by date in chronological order."]}),"\n",(0,t.jsx)(b,{data:n.AgendaViewDemos.usage}),"\n",(0,t.jsx)(v.h2,{id:"withagenda-prop-for-dayview-weekview-monthview-and-schedule",children:"withAgenda prop for DayView, WeekView, MonthView and Schedule"}),"\n",(0,t.jsxs)(v.p,{children:[(0,t.jsx)(v.code,{children:"DayView"}),", ",(0,t.jsx)(v.code,{children:"WeekView"}),", ",(0,t.jsx)(v.code,{children:"MonthView"})," and ",(0,t.jsx)(v.code,{children:"Schedule"})," components now support ",(0,t.jsx)(v.code,{children:"withAgenda"}),' prop.\nWhen enabled, an "Agenda" button is displayed in the header. Clicking it opens an ',(0,t.jsx)(v.code,{children:"AgendaView"}),"\nfor the currently visible date range."]}),"\n",(0,t.jsx)(b,{data:d.MonthViewDemos.withAgenda}),"\n",(0,t.jsx)(v.h2,{id:"monthview-hide-weekend-days",children:"MonthView hide weekend days"}),"\n",(0,t.jsxs)(v.p,{children:[(0,t.jsx)(v.a,{href:"/schedule/month-view",children:"MonthView"})," now supports ",(0,t.jsx)(v.code,{children:"withWeekendDays"})," prop. Set it to ",(0,t.jsx)(v.code,{children:"false"}),"\nto hide weekend days: the grid shrinks to the remaining columns and events that span hidden\ndays are clipped to the visible days. The days that are considered weekend are controlled by\nthe ",(0,t.jsx)(v.code,{children:"weekendDays"})," prop (or ",(0,t.jsx)(v.code,{children:"DatesProvider"}),", ",(0,t.jsx)(v.code,{children:"[0, 6]"})," by default)."]}),"\n",(0,t.jsx)(b,{data:d.MonthViewDemos.withoutWeekendDays}),"\n",(0,t.jsx)(v.h2,{id:"dayview-and-weekview-sub-hour-grid-lines",children:"DayView and WeekView sub-hour grid lines"}),"\n",(0,t.jsxs)(v.p,{children:[(0,t.jsx)(v.a,{href:"/schedule/day-view",children:"DayView"})," and ",(0,t.jsx)(v.a,{href:"/schedule/week-view",children:"WeekView"})," now support ",(0,t.jsx)(v.code,{children:"withSubHourGridLines"}),"\nprop. When ",(0,t.jsx)(v.code,{children:"intervalMinutes"})," is smaller than ",(0,t.jsx)(v.code,{children:"60"}),", set ",(0,t.jsx)(v.code,{children:"withSubHourGridLines={false}"})," to display only\none grid line per hour while keeping the smaller interval for creating and resizing events. This is\nuseful to achieve a Google Calendar like layout: events snap to 15 or 30 minutes increments, but the\ngrid stays clean with hourly lines."]}),"\n",(0,t.jsx)(b,{data:x.WeekViewDemos.subHourGridLines}),"\n",(0,t.jsx)(v.h2,{id:"input-success-state",children:"Input success state"}),"\n",(0,t.jsxs)(v.p,{children:["All inputs based on ",(0,t.jsx)(v.code,{children:"Input"})," and ",(0,t.jsx)(v.code,{children:"Input.Wrapper"})," now support a ",(0,t.jsx)(v.code,{children:"success"})," prop. When set, it changes the\ninput border color to green (",(0,t.jsx)(v.code,{children:"--mantine-color-success"}),"). You can also pass a React node to display\na success message below the input. If both ",(0,t.jsx)(v.code,{children:"error"})," and ",(0,t.jsx)(v.code,{children:"success"})," props are set, ",(0,t.jsx)(v.code,{children:"error"})," takes precedence."]}),"\n",(0,t.jsxs)(v.p,{children:["New ",(0,t.jsx)(v.code,{children:"--mantine-color-success"})," CSS variable has been added (resolves to ",(0,t.jsx)(v.code,{children:"teal-6"})," in light mode and ",(0,t.jsx)(v.code,{children:"teal-8"})," in dark mode)."]}),"\n",(0,t.jsx)(b,{data:l.InputDemos.success}),"\n",(0,t.jsx)(v.h2,{id:"splitter-css-units",children:"Splitter CSS units"}),"\n",(0,t.jsxs)(v.p,{children:[(0,t.jsx)(v.a,{href:"/core/splitter",children:"Splitter.Pane"})," ",(0,t.jsx)(v.code,{children:"defaultSize"}),", ",(0,t.jsx)(v.code,{children:"min"})," and ",(0,t.jsx)(v.code,{children:"max"})," props now accept CSS units in\naddition to plain numbers. A plain ",(0,t.jsx)(v.code,{children:"number"})," or ",(0,t.jsx)(v.code,{children:"%"})," string is a flexible size that shares the\nleftover space, while a ",(0,t.jsx)(v.code,{children:"px"})," or ",(0,t.jsx)(v.code,{children:"rem"})," string is a fixed size that keeps its pixel size when the\ncontainer is resized. This makes it possible to mix a fixed-width sidebar with a fluid content pane:"]}),"\n",(0,t.jsx)(b,{data:g.SplitterDemos.cssUnits}),"\n",(0,t.jsx)(v.h2,{id:"notifications-priority",children:"Notifications priority"}),"\n",(0,t.jsxs)(v.p,{children:["Notifications now support a ",(0,t.jsx)(v.code,{children:"priority"})," property. When the number of active notifications exceeds\nthe ",(0,t.jsx)(v.code,{children:"limit"}),", notifications with a higher ",(0,t.jsx)(v.code,{children:"priority"})," take the visible slots and lower priority ones\nare pushed into the queue. Notifications with equal priority keep insertion order (FIFO), so the\ndefault behavior is unchanged (",(0,t.jsx)(v.code,{children:"priority"})," defaults to ",(0,t.jsx)(v.code,{children:"0"}),")."]}),"\n",(0,t.jsx)(b,{data:c.NotificationsDemos.priority}),"\n",(0,t.jsx)(v.h2,{id:"legend-support-for-piechart-donutchart-and-funnelchart",children:"Legend support for PieChart, DonutChart and FunnelChart"}),"\n",(0,t.jsxs)(v.p,{children:[(0,t.jsx)(v.a,{href:"/charts/pie-chart",children:"PieChart"}),", ",(0,t.jsx)(v.a,{href:"/charts/donut-chart",children:"DonutChart"})," and ",(0,t.jsx)(v.a,{href:"/charts/funnel-chart",children:"FunnelChart"}),"\nnow support the ",(0,t.jsx)(v.code,{children:"withLegend"})," prop. When enabled, a legend with the name and color of each segment\nis displayed. Hovering over a legend item highlights the corresponding segment. Use the ",(0,t.jsx)(v.code,{children:"legendProps"}),"\nprop to pass props down to the underlying recharts ",(0,t.jsx)(v.code,{children:"Legend"})," component."]}),"\n",(0,t.jsx)(b,{data:u.PieChartDemos.legend}),"\n",(0,t.jsx)(v.h2,{id:"autocontrast-support-for-virtual-colors",children:"autoContrast support for virtual colors"}),"\n",(0,t.jsxs)(v.p,{children:[(0,t.jsx)(v.a,{href:"/theming/colors/#virtual-colors",children:"Virtual colors"})," now support ",(0,t.jsx)(v.a,{href:"/theming/theme-object/#autocontrast",children:"autoContrast"}),".\nPreviously, ",(0,t.jsx)(v.code,{children:"filled"})," components with a virtual color always used white text because the underlying color\ncould not be resolved on the JavaScript side. The contrast color is now calculated separately for each\ncolor scheme based on the resolved background color, so text stays readable when the virtual color resolves\nto a light color in one scheme and a dark color in another. Switch between light and dark color schemes\n(",(0,t.jsx)(v.code,{children:"Ctrl + J"}),") to see the text color adjust:"]}),"\n",(0,t.jsx)(b,{data:y.ThemingDemos.virtualColorsAutoContrast}),"\n",(0,t.jsx)(v.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(v.ul,{children:["\n",(0,t.jsxs)(v.li,{children:[(0,t.jsx)(v.a,{href:"/core/splitter",children:"Splitter"})," now supports ",(0,t.jsx)(v.code,{children:"resetOnDoubleClick"})," prop. When enabled, double-clicking a resize handle restores the adjacent panes to their default ratio."]}),"\n",(0,t.jsxs)(v.li,{children:[(0,t.jsx)(v.a,{href:"/dates/time-picker",children:"TimePicker"})," now supports ",(0,t.jsx)(v.code,{children:"closeDropdownOnPresetSelect"})," prop. When set, the dropdown is closed once a value is selected from the presets list."]}),"\n",(0,t.jsxs)(v.li,{children:[(0,t.jsx)(v.a,{href:"/hooks/use-long-press",children:"useLongPress"})," hook now handles ",(0,t.jsx)(v.code,{children:"onTouchCancel"})," events: the returned handlers include an ",(0,t.jsx)(v.code,{children:"onTouchCancel"})," callback so that a long press is correctly canceled when the touch is interrupted by the system (incoming call, browser gesture, etc.)."]}),"\n"]})]})}function S(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(M,{...e,children:(0,t.jsx)(D,{...e})})}])},511984,(e,t,a)=>{let n="/changelog/9-4-0";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(143747)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);