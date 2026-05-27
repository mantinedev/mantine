(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,366317,e=>{"use strict";e.s(["px",0,function(e){let t="string"==typeof e&&e.includes("var(--mantine-scale)")?e.match(/^calc\((.*?)\)$/)?.[1].split("*")[0].trim():e;return"number"==typeof t?t:"string"==typeof t?t.includes("calc")||t.includes("var")?t:t.includes("px")?Number(t.replace("px","")):t.includes("rem")?16*Number(t.replace("rem","")):t.includes("em")?16*Number(t.replace("em","")):Number(t):NaN}])},632057,e=>{"use strict";var t=e.i(366317);e.s(["getBreakpointValue",0,function(e,a){return e in a?(0,t.px)(a[e]):(0,t.px)(e)}])},230780,e=>{"use strict";var t=e.i(632057);e.s(["getSortedBreakpoints",0,function(e,a){let r=e.map(e=>({value:e,px:(0,t.getBreakpointValue)(e,a)}));return r.sort((e,t)=>e.px-t.px),r}])},804052,e=>{"use strict";var t=e.i(481178),a=e.i(44091),r=e.i(391466),o=e.i(275519),n=e.i(232471),l=e.i(779177);let i=["h1","h2","h3","h4","h5","h6"],s=["xs","sm","md","lg","xl"];var c={root:"m_8a5d1357"},d=e.i(391398);let u={order:1},m=(0,t.createVarsResolver)((e,{order:t,size:a,lineClamp:r,textWrap:o})=>{var n;let c,d=(n=t||1,c=void 0!==a?a:`h${n}`,i.includes(c)?{fontSize:`var(--mantine-${c}-font-size)`,fontWeight:`var(--mantine-${c}-font-weight)`,lineHeight:`var(--mantine-${c}-line-height)`}:s.includes(c)?{fontSize:`var(--mantine-font-size-${c})`,fontWeight:`var(--mantine-h${n}-font-weight)`,lineHeight:`var(--mantine-h${n}-line-height)`}:{fontSize:(0,l.rem)(c),fontWeight:`var(--mantine-h${n}-font-weight)`,lineHeight:`var(--mantine-h${n}-line-height)`});return{root:{"--title-fw":d.fontWeight,"--title-lh":d.lineHeight,"--title-fz":d.fontSize,"--title-line-clamp":"number"==typeof r?r.toString():void 0,"--title-text-wrap":o}}}),p=(0,o.factory)(e=>{let t=(0,a.useProps)("Title",u,e),{classNames:o,className:l,style:i,styles:s,unstyled:p,order:h,vars:f,size:g,variant:x,lineClamp:v,textWrap:b,mod:y,attributes:w,...S}=t,k=(0,r.useStyles)({name:"Title",props:t,classes:c,className:l,style:i,classNames:o,styles:s,unstyled:p,attributes:w,vars:f,varsResolver:m});return[1,2,3,4,5,6].includes(h)?(0,d.jsx)(n.Box,{...k("root"),component:`h${h}`,variant:x,mod:[{order:h,"data-line-clamp":"number"==typeof v},y],size:g,...S}):null});p.classes=c,p.varsResolver=m,p.displayName="@mantine/core/Title",e.s(["Title",0,p],804052)},671640,e=>{"use strict";var t=e.i(433512),a=e.i(481178),r=e.i(44091),o=e.i(391466),n=e.i(275519),l=e.i(232471),i={root:"m_6d731127"},s=e.i(391398);let c={gap:"md",align:"stretch",justify:"flex-start"},d=(0,a.createVarsResolver)((e,{gap:a,align:r,justify:o})=>({root:{"--stack-gap":(0,t.getSpacing)(a),"--stack-align":r,"--stack-justify":o}})),u=(0,n.factory)(e=>{let t=(0,r.useProps)("Stack",c,e),{classNames:a,className:n,style:u,styles:m,unstyled:p,vars:h,align:f,justify:g,gap:x,variant:v,attributes:b,...y}=t;return(0,s.jsx)(l.Box,{...(0,o.useStyles)({name:"Stack",props:t,classes:i,className:n,style:u,classNames:a,styles:m,unstyled:p,attributes:b,vars:h,varsResolver:d})("root"),variant:v,...y})});u.classes=i,u.varsResolver=d,u.displayName="@mantine/core/Stack",e.s(["Stack",0,u],671640)},200140,e=>{"use strict";var t=e.i(57807),a=e.i(561299);let r=(0,a.createStore)({notifications:[],queue:[],defaultPosition:"bottom-right",limit:5});function o(e,t){let a=e.getState(),r=function(e,t,a){let r=[],o=[],n={};for(let l of e){let e=l.position||t;n[e]=n[e]||0,n[e]+=1,n[e]<=a?o.push(l):r.push(l)}return{notifications:o,queue:r}}(t([...a.notifications,...a.queue]),a.defaultPosition,a.limit);e.setState({notifications:r.notifications,queue:r.queue,limit:a.limit,defaultPosition:a.defaultPosition})}function n(e,t=r){return o(t,t=>t.filter(t=>t.id!==e||(t.onClose?.(t),!1))),e}e.s(["hideNotification",0,n,"notifications",0,{show:function(e,a=r){let n=e.id||(0,t.randomId)();return o(a,t=>e.id&&t.some(t=>t.id===e.id)?t:[...t,{...e,id:n}]),n},hide:n,update:function(e,t=r){return o(t,t=>t.map(t=>t.id===e.id?{...t,...e}:t)),e.id},clean:function(e=r){o(e,()=>[])},cleanQueue:function(e=r){o(e,t=>t.slice(0,e.getState().limit))},updateState:o},"notificationsStore",0,r,"useNotifications",0,(e=r)=>(0,a.useStore)(e)])},382422,e=>{"use strict";var t=e.i(433512),a=e.i(481178),r=e.i(44091),o=e.i(391466),n=e.i(956449),l=e.i(470743);let[i,s]=(0,e.i(386179).createSafeContext)("Card component was not found in tree");var c={root:"m_e615b15f",section:"m_599a2148"},d=e.i(232471),u=e.i(391398);let m=(0,n.polymorphicFactory)(e=>{let{classNames:t,className:a,style:o,styles:n,vars:l,withBorder:i,inheritPadding:c,mod:m,...p}=(0,r.useProps)("CardSection",null,e),h=s();return(0,u.jsx)(d.Box,{mod:[{"with-border":i,"inherit-padding":c},m],...h.getStyles("section",{className:a,style:o,styles:n,classNames:t}),...p})});m.classes=c,m.displayName="@mantine/core/CardSection";var p=e.i(191788);let h=(0,a.createVarsResolver)((e,{padding:a})=>({root:{"--card-padding":(0,t.getSpacing)(a)}})),f={orientation:"vertical"},g=(0,n.polymorphicFactory)(e=>{let t=(0,r.useProps)("Card",f,e),{classNames:a,className:n,style:s,styles:d,unstyled:g,vars:x,children:v,padding:b,attributes:y,orientation:w,...S}=t,k=(0,o.useStyles)({name:"Card",props:t,classes:c,className:n,style:s,classNames:a,styles:d,unstyled:g,attributes:y,vars:x,varsResolver:h}),D=p.Children.toArray(v),M=D.map((e,t)=>"object"==typeof e&&e&&"type"in e&&(e.type===m||e.type?.displayName==="@mantine/core/CardSection")?(0,p.cloneElement)(e,{"data-orientation":w,"data-first-section":0===t||void 0,"data-last-section":t===D.length-1||void 0}):e);return(0,u.jsx)(i,{value:{getStyles:k},children:(0,u.jsx)(l.Paper,{unstyled:g,"data-orientation":w,...k("root"),...S,children:M})})});g.classes=c,g.varsResolver=h,g.displayName="@mantine/core/Card",g.Section=m,e.s(["Card",0,g],382422)},858508,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),t.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(a.default,{ref:o,...e,weights:r}));o.displayName="ArrowRightIcon",e.s(["ArrowRightIcon",0,o],858508)},220026,e=>{"use strict";let t={selectors:{root:"Root element",label:"Thumb label",thumb:"Thumb element",trackContainer:"Wraps track element",track:"Slider track",bar:"Track filled part",markWrapper:"Contains `mark` and `markLabel` elements",mark:"Mark displayed on track",markLabel:"Label of the associated mark, displayed below track"},vars:{root:{"--slider-size":"Controls track `height`","--slider-color":"Controls filled track, thumb and marks `background`","--slider-thumb-size":"Controls thumb `width` and `height`","--slider-radius":"Controls `border-radius` of track and thumb"}},modifiers:[{modifier:"data-orientation",selector:"root",condition:"Determines slider orientation, `horizontal` by default"},{modifier:"data-disabled",selector:["trackContainer","track","bar","thumb","mark"],condition:"`disabled` prop is set"},{modifier:"data-inverted",selector:["track","bar"],condition:"`inverted` prop is set"},{modifier:"data-dragging",selector:"thumb",condition:"slider is being dragged"},{modifier:"data-filled",selector:"mark",condition:"mark position is less or equal slider value"}]};e.s(["RangeSliderStylesApi",0,t,"SliderStylesApi",0,t])},948671,e=>{e.v({logo:"Logo-module__VZ1V8q__logo"})},495823,e=>{e.v({discordButton:"SocialButton-module__86RcBW__discordButton",socialButton:"SocialButton-module__86RcBW__socialButton",socialButtonSection:"SocialButton-module__86RcBW__socialButtonSection",xButton:"SocialButton-module__86RcBW__xButton"})},981713,e=>{e.v({link:"LinksGroup-module__TciAwa__link",title:"LinksGroup-module__TciAwa__title",wrapper:"LinksGroup-module__TciAwa__wrapper"})},978924,e=>{e.v({afterFooter:"DocsFooter-module__IQhwVq__afterFooter",afterFooterNote:"DocsFooter-module__IQhwVq__afterFooterNote",description:"DocsFooter-module__IQhwVq__description",groups:"DocsFooter-module__IQhwVq__groups",inner:"DocsFooter-module__IQhwVq__inner",logoSection:"DocsFooter-module__IQhwVq__logoSection",root:"DocsFooter-module__IQhwVq__root",social:"DocsFooter-module__IQhwVq__social",socialButton:"DocsFooter-module__IQhwVq__socialButton",spacer:"DocsFooter-module__IQhwVq__spacer",wrapper:"DocsFooter-module__IQhwVq__wrapper"})},629122,517923,e=>{"use strict";var t=e.i(391398),a=e.i(191788),r=e.i(56206),o=e.i(232471),n=e.i(882377),l=e.i(725695),i=e.i(865823),s=e.i(883364),c=e.i(133613),d=e.i(41158),u=e.i(647831),m=e.i(293736),p=e.i(78747),h=e.i(948671);function f(e){return(0,t.jsxs)(d.default,{href:"/",className:(0,r.default)(h.default.logo,u.FOCUS_CLASS_NAMES.auto),"aria-label":"Mantine",children:[(0,t.jsx)(m.VisuallyHidden,{children:"Welcome to Mantine, React components library that you always wished for"}),(0,t.jsx)(p.MantineLogo,{size:30,...e})]})}var g=e.i(485108),x=e.i(804938),v=e.i(779177);function b({size:e,style:a,...r}){return(0,t.jsx)(o.Box,{component:"svg",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 24 24",style:[{width:(0,v.rem)(e),height:(0,v.rem)(e)},a],...r,children:(0,t.jsx)("path",{d:"M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z"})})}var y=e.i(266721),w=e.i(495823);function S({icon:e,...a}){return(0,t.jsx)(g.Button,{component:"a",target:"_blank",rel:"noopener noreferrer",leftSection:e,radius:"md",classNames:{root:w.default.socialButton,section:w.default.socialButtonSection},...a})}function k({className:e,...a}){return(0,t.jsx)(S,{className:(0,r.default)(w.default.discordButton,e),icon:(0,t.jsx)(x.DiscordIcon,{size:16}),href:y.meta.discordLink,...a,children:"Join Discord community"})}function D({className:e,...a}){return(0,t.jsx)(S,{className:(0,r.default)(w.default.xButton,e),icon:(0,t.jsx)(b,{size:16}),href:y.meta.twitterLink,...a,children:"Follow Mantine on X"})}let M=[{title:"About",data:[{type:"link",label:"OpenCollective",link:"https://opencollective.com/mantinedev"},{type:"next",label:"Contribute",link:"/contribute"},{type:"next",label:"Changelog",link:"/changelog/previous-versions"},{type:"link",label:"GitHub Releases",link:y.meta.gitHubLinks.releases}]},{title:"Community",data:[{type:"link",label:"Chat on Discord",link:y.meta.discordLink},{type:"link",label:"Follow on X",link:y.meta.twitterLink},{type:"link",label:"Follow on Github",link:"https://github.com/rtivital"},{type:"link",label:"GitHub discussions",link:y.meta.gitHubLinks.discussions}]},{title:"Project",data:[{type:"link",label:"Mantine UI",link:y.meta.uiLink},{type:"link",label:"Help Center",link:y.meta.helpCenterLink},{type:"link",label:"Github organization",link:y.meta.gitHubLinks.organization},{type:"link",label:"npm organization",link:y.meta.npmLink}]}];var j=e.i(981713);function C({data:e,title:a}){let r=e.map((e,a)=>(0,t.jsx)(s.Text,{className:j.default.link,component:"next"===e.type?d.default:"a",href:e.link,children:e.label},a));return(0,t.jsxs)("div",{className:j.default.wrapper,children:[(0,t.jsx)(s.Text,{className:j.default.title,children:a}),r]})}var A=e.i(978924);e.s(["DocsFooter",0,function({withNavbar:e}){let d=(0,a.useRef)(null),u=M.map(e=>(0,t.jsx)(C,{data:e.data,title:e.title},e.title));return(0,c.useWindowEvent)("scroll",()=>{let e,t,a=(e=document.documentElement.scrollTop,t=window.innerHeight,document.documentElement.scrollHeight-(e+t)-30);d.current&&(d.current.style.transform=`translateY(${a>0?a/2:0}px)`)}),(0,t.jsxs)("div",{className:A.default.root,children:[(0,t.jsx)("div",{className:A.default.spacer}),(0,t.jsx)(o.Box,{component:"footer",mod:{"with-navbar":e},className:(0,r.default)(A.default.wrapper,i.RemoveScroll.classNames.fullWidth),ref:d,children:(0,t.jsxs)(n.Container,{size:e?1170:1440,children:[(0,t.jsxs)("div",{className:A.default.inner,children:[(0,t.jsxs)("div",{className:A.default.logoSection,children:[(0,t.jsx)(f,{}),(0,t.jsx)(s.Text,{className:A.default.description,fz:"sm",children:"Build fully functional accessible web applications faster than ever"})]}),(0,t.jsx)("div",{className:A.default.groups,children:u})]}),(0,t.jsx)("div",{className:A.default.afterFooter,children:(0,t.jsxs)(l.Group,{justify:"space-between",wrap:"wrap",children:[(0,t.jsxs)(s.Text,{fz:"xs",className:A.default.afterFooterNote,children:["Built by ",(0,t.jsx)("a",{href:"https://github.com/rtivital",children:"Vitaly Rtishchev"})," and"," ",(0,t.jsx)("a",{href:"https://github.com/mantinedev/mantine/graphs/contributors",children:"these awesome people"})]}),(0,t.jsxs)("div",{className:A.default.social,children:[(0,t.jsx)(k,{className:A.default.socialButton}),(0,t.jsx)(D,{className:A.default.socialButton})]})]})})]})})]})}],517923),e.s([],629122)},689579,e=>{"use strict";var t=e.i(44091),a=e.i(275519),r=e.i(232471),o=e.i(391398);let n=(0,a.factory)(e=>{let{w:a,h:n,miw:l,mih:i,...s}=(0,t.useProps)("Space",null,e);return(0,o.jsx)(r.Box,{...s,w:a,miw:l??a,h:n,mih:i??n})});n.displayName="@mantine/core/Space",e.s(["Space",0,n])},119004,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V88A12,12,0,0,0,216.49,79.52ZM160,57l23,23H160ZM60,212V44h76V92a12,12,0,0,0,12,12h48V212Zm112-80a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,132Zm0,40a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h64A12,12,0,0,1,172,172Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,88H152V32Z",opacity:"0.2"}),t.createElement("path",{d:"M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,176H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm-8-56V44l44,44Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V88A6,6,0,0,0,212.24,83.76ZM158,46.48,193.52,82H158ZM200,218H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50V216A2,2,0,0,1,200,218Zm-34-82a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,136Zm0,32a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h64A6,6,0,0,1,166,168Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V88A4,4,0,0,0,210.83,85.17ZM156,41.65,198.34,84H156ZM200,220H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52V216A4,4,0,0,1,200,220Zm-36-84a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,136Zm0,32a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h64A4,4,0,0,1,164,168Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(a.default,{ref:o,...e,weights:r}));o.displayName="FileTextIcon",e.s(["FileTextIcon",0,o],119004)},405289,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M40,92H70.06a36,36,0,0,0,67.88,0H216a12,12,0,0,0,0-24H137.94a36,36,0,0,0-67.88,0H40a12,12,0,0,0,0,24Zm64-24A12,12,0,1,1,92,80,12,12,0,0,1,104,68Zm112,96H201.94a36,36,0,0,0-67.88,0H40a12,12,0,0,0,0,24h94.06a36,36,0,0,0,67.88,0H216a12,12,0,0,0,0-24Zm-48,24a12,12,0,1,1,12-12A12,12,0,0,1,168,188Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,80a24,24,0,1,1-24-24A24,24,0,0,1,128,80Zm40,72a24,24,0,1,0,24,24A24,24,0,0,0,168,152Z",opacity:"0.2"}),t.createElement("path",{d:"M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16h97a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M32,80a8,8,0,0,1,8-8H77.17a28,28,0,0,1,53.66,0H216a8,8,0,0,1,0,16H130.83a28,28,0,0,1-53.66,0H40A8,8,0,0,1,32,80Zm184,88H194.83a28,28,0,0,0-53.66,0H40a8,8,0,0,0,0,16H141.17a28,28,0,0,0,53.66,0H216a8,8,0,0,0,0-16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M40,86H74.6a30,30,0,0,0,58.8,0H216a6,6,0,0,0,0-12H133.4a30,30,0,0,0-58.8,0H40a6,6,0,0,0,0,12Zm64-24A18,18,0,1,1,86,80,18,18,0,0,1,104,62ZM216,170H197.4a30,30,0,0,0-58.8,0H40a6,6,0,0,0,0,12h98.6a30,30,0,0,0,58.8,0H216a6,6,0,0,0,0-12Zm-48,24a18,18,0,1,1,18-18A18,18,0,0,1,168,194Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M40,88H73a32,32,0,0,0,62,0h81a8,8,0,0,0,0-16H135a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16Zm64-24A16,16,0,1,1,88,80,16,16,0,0,1,104,64ZM216,168H199a32,32,0,0,0-62,0H40a8,8,0,0,0,0,16h97a32,32,0,0,0,62,0h17a8,8,0,0,0,0-16Zm-48,24a16,16,0,1,1,16-16A16,16,0,0,1,168,192Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M40,84H76.29a28,28,0,0,0,55.42,0H216a4,4,0,0,0,0-8H131.71a28,28,0,0,0-55.42,0H40a4,4,0,0,0,0,8Zm64-24A20,20,0,1,1,84,80,20,20,0,0,1,104,60ZM216,172H195.71a28,28,0,0,0-55.42,0H40a4,4,0,0,0,0,8H140.29a28,28,0,0,0,55.42,0H216a4,4,0,0,0,0-8Zm-48,24a20,20,0,1,1,20-20A20,20,0,0,1,168,196Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(a.default,{ref:o,...e,weights:r}));o.displayName="SlidersHorizontalIcon",e.s(["SlidersHorizontalIcon",0,o],405289)},289058,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,28H88A12,12,0,0,0,76,40V76H40A12,12,0,0,0,28,88V216a12,12,0,0,0,12,12H168a12,12,0,0,0,12-12V180h36a12,12,0,0,0,12-12V40A12,12,0,0,0,216,28ZM156,204H52V100H156Zm48-48H180V88a12,12,0,0,0-12-12H100V52H204Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,40V168H168V88H88V40Z",opacity:"0.2"}),t.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32Zm-8,128H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,34H88a6,6,0,0,0-6,6V82H40a6,6,0,0,0-6,6V216a6,6,0,0,0,6,6H168a6,6,0,0,0,6-6V174h42a6,6,0,0,0,6-6V40A6,6,0,0,0,216,34ZM162,210H46V94H162Zm48-48H174V88a6,6,0,0,0-6-6H94V46H210Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,32H88a8,8,0,0,0-8,8V80H40a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H168a8,8,0,0,0,8-8V176h40a8,8,0,0,0,8-8V40A8,8,0,0,0,216,32ZM160,208H48V96H160Zm48-48H176V88a8,8,0,0,0-8-8H96V48H208Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,36H88a4,4,0,0,0-4,4V84H40a4,4,0,0,0-4,4V216a4,4,0,0,0,4,4H168a4,4,0,0,0,4-4V172h44a4,4,0,0,0,4-4V40A4,4,0,0,0,216,36ZM164,212H44V92H164Zm48-48H172V88a4,4,0,0,0-4-4H92V44H212Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(a.default,{ref:o,...e,weights:r}));o.displayName="CopyIcon",e.s(["CopyIcon",0,o],289058)},89837,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M71.68,97.22,34.74,128l36.94,30.78a12,12,0,1,1-15.36,18.44l-48-40a12,12,0,0,1,0-18.44l48-40A12,12,0,0,1,71.68,97.22Zm176,21.56-48-40a12,12,0,1,0-15.36,18.44L221.26,128l-36.94,30.78a12,12,0,1,0,15.36,18.44l48-40a12,12,0,0,0,0-18.44ZM164.1,28.72a12,12,0,0,0-15.38,7.18l-64,176a12,12,0,0,0,7.18,15.37A11.79,11.79,0,0,0,96,228a12,12,0,0,0,11.28-7.9l64-176A12,12,0,0,0,164.1,28.72Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M240,128l-48,40H64L16,128,64,88H192Z",opacity:"0.2"}),t.createElement("path",{d:"M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM92.8,145.6a8,8,0,1,1-9.6,12.8l-32-24a8,8,0,0,1,0-12.8l32-24a8,8,0,0,1,9.6,12.8L69.33,128Zm58.89-71.4-32,112a8,8,0,1,1-15.38-4.4l32-112a8,8,0,0,1,15.38,4.4Zm53.11,60.2-32,24a8,8,0,0,1-9.6-12.8L186.67,128,163.2,110.4a8,8,0,1,1,9.6-12.8l32,24a8,8,0,0,1,0,12.8Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M67.84,92.61,25.37,128l42.47,35.39a6,6,0,1,1-7.68,9.22l-48-40a6,6,0,0,1,0-9.22l48-40a6,6,0,0,1,7.68,9.22Zm176,30.78-48-40a6,6,0,1,0-7.68,9.22L230.63,128l-42.47,35.39a6,6,0,1,0,7.68,9.22l48-40a6,6,0,0,0,0-9.22Zm-81.79-89A6,6,0,0,0,154.36,38l-64,176A6,6,0,0,0,94,221.64a6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95l64-176A6,6,0,0,0,162.05,34.36Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M66.56,91.07,22.25,128l44.31,36.93A4,4,0,0,1,64,172a3.94,3.94,0,0,1-2.56-.93l-48-40a4,4,0,0,1,0-6.14l48-40a4,4,0,0,1,5.12,6.14Zm176,33.86-48-40a4,4,0,1,0-5.12,6.14L233.75,128l-44.31,36.93a4,4,0,1,0,5.12,6.14l48-40a4,4,0,0,0,0-6.14ZM161.37,36.24a4,4,0,0,0-5.13,2.39l-64,176a4,4,0,0,0,2.39,5.13A4.12,4.12,0,0,0,96,220a4,4,0,0,0,3.76-2.63l64-176A4,4,0,0,0,161.37,36.24Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(a.default,{ref:o,...e,weights:r}));o.displayName="CodeIcon",e.s(["CodeIcon",0,o],89837)},161465,772197,e=>{"use strict";var t=e.i(391398),a=e.i(958678);e.s(["PageHead",0,function({title:e,description:r}){let o=e?`${e} | Mantine`:"Mantine",n=r||"React components and hooks library with native dark theme support and focus on usability, accessibility and developer experience";return(0,t.jsxs)(a.default,{children:[(0,t.jsx)("title",{children:o}),(0,t.jsx)("meta",{property:"description",name:"description",content:n}),(0,t.jsx)("meta",{property:"og:title",name:"og:title",content:o}),(0,t.jsx)("meta",{property:"og:description",name:"og:description",content:n}),(0,t.jsx)("meta",{property:"twitter:title",name:"twitter:title",content:o}),(0,t.jsx)("meta",{property:"twitter:description",name:"twitter:description",content:n})]})}],772197),e.s([],161465)},943311,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M112,56V200L40,128Z",opacity:"0.2"}),t.createElement("path",{d:"M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(a.default,{ref:o,...e,weights:r}));o.displayName="ArrowLeftIcon",e.s(["ArrowLeftIcon",0,o],943311)},976550,e=>{"use strict";var t=e.i(749218),a=e.i(433512),r=e.i(481178),o=e.i(44091),n=e.i(391466),l=e.i(275519),i=e.i(232471),s=e.i(164483),c={root:"m_7f854edf"},d=e.i(391398);let u={position:{bottom:0,right:0},zIndex:(0,t.getDefaultZIndex)("modal"),withinPortal:!0},m=(0,r.createVarsResolver)((e,{zIndex:t,position:r})=>({root:{"--affix-z-index":t?.toString(),"--affix-top":(0,a.getSpacing)(r?.top),"--affix-left":(0,a.getSpacing)(r?.left),"--affix-bottom":(0,a.getSpacing)(r?.bottom),"--affix-right":(0,a.getSpacing)(r?.right)}})),p=(0,l.factory)(e=>{let t=(0,o.useProps)("Affix",u,e),{classNames:a,className:r,style:l,styles:p,unstyled:h,vars:f,portalProps:g,zIndex:x,withinPortal:v,position:b,attributes:y,...w}=t,S=(0,n.useStyles)({name:"Affix",classes:c,props:t,className:r,style:l,classNames:a,styles:p,unstyled:h,attributes:y,vars:f,varsResolver:m});return(0,d.jsx)(s.OptionalPortal,{...g,withinPortal:v,children:(0,d.jsx)(i.Box,{...S("root"),...w})})});p.classes=c,p.varsResolver=m,p.displayName="@mantine/core/Affix",e.s(["Affix",0,p],976550)},648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let r={};for(var o in e)t(r,o,{get:e[o],enumerable:!0});return a||t(r,Symbol.toStringTag,{value:"Module"}),r}])},530514,e=>{"use strict";e.s(["createTheme",0,function(e){return e}])},257177,e=>{"use strict";var t=e.i(433512),a=e.i(481178),r=e.i(317477),o=e.i(44091),n=e.i(391466),l=e.i(956449),i=e.i(232471),s={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},c=e.i(391398);let d=(0,a.createVarsResolver)((e,{radius:a,color:o,gradient:n,variant:l,size:i,autoContrast:s,circle:c})=>{let d=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:n,variant:l||"filled",autoContrast:s});return{root:{"--badge-height":(0,t.getSize)(i,"badge-height"),"--badge-padding-x":(0,t.getSize)(i,"badge-padding-x"),"--badge-fz":(0,t.getSize)(i,"badge-fz"),"--badge-radius":c||void 0===a?void 0:(0,t.getRadius)(a),"--badge-bg":o||l?d.background:void 0,"--badge-color":o||l?d.color:void 0,"--badge-bd":o||l?d.border:void 0,"--badge-dot-color":"dot"===l?(0,r.getThemeColor)(o,e):void 0}}}),u=(0,l.polymorphicFactory)(e=>{let t=(0,o.useProps)("Badge",null,e),{classNames:a,className:r,style:l,styles:u,unstyled:m,vars:p,radius:h,color:f,gradient:g,leftSection:x,rightSection:v,children:b,variant:y,fullWidth:w,autoContrast:S,circle:k,mod:D,attributes:M,...j}=t,C=(0,n.useStyles)({name:"Badge",props:t,classes:s,className:r,style:l,classNames:a,styles:u,unstyled:m,attributes:M,vars:p,varsResolver:d});return(0,c.jsxs)(i.Box,{variant:y,mod:[{block:w,circle:k,"with-right-section":!!v,"with-left-section":!!x},D],...C("root",{variant:y}),...j,children:[x&&(0,c.jsx)("span",{...C("section"),"data-position":"left",children:x}),(0,c.jsx)("span",{...C("label"),children:b}),v&&(0,c.jsx)("span",{...C("section"),"data-position":"right",children:v})]})});u.classes=s,u.varsResolver=d,u.displayName="@mantine/core/Badge",e.s(["Badge",0,u],257177)},692385,e=>{"use strict";var t=e.i(852361),a=e.i(191788);let r={min:-1/0,max:1/0};e.s(["useCounter",0,function(e=0,o){let{min:n,max:l,step:i=1}={...r,...o},s=Math.abs(i),[c,d]=(0,a.useState)((0,t.clamp)(e,n,l));return[c,{increment:(0,a.useCallback)(()=>d(e=>(0,t.clamp)(e+s,n,l)),[n,l,s]),decrement:(0,a.useCallback)(()=>d(e=>(0,t.clamp)(e-s,n,l)),[n,l,s]),set:(0,a.useCallback)(e=>d((0,t.clamp)(e,n,l)),[n,l]),reset:(0,a.useCallback)(()=>d((0,t.clamp)(e,n,l)),[e,n,l])}]}])},141806,e=>{"use strict";var t=e.i(433512),a=e.i(481178),r=e.i(44091),o=e.i(391466),n=e.i(956449),l=e.i(232471),i={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"},s=e.i(275519),c=e.i(191788),d=e.i(391398);let u=(0,c.createContext)({withinGroup:!1}),m=(0,a.createVarsResolver)((e,{spacing:a})=>({group:{"--ag-spacing":(0,t.getSpacing)(a)}})),p=(0,s.factory)(e=>{let t=(0,r.useProps)("AvatarGroup",null,e),{classNames:a,className:n,style:s,styles:c,unstyled:p,vars:h,spacing:f,attributes:g,...x}=t;return(0,d.jsx)(u,{value:{withinGroup:!0},children:(0,d.jsx)(l.Box,{...(0,o.useStyles)({name:"AvatarGroup",classes:i,props:t,className:n,style:s,classNames:a,styles:c,unstyled:p,attributes:g,vars:h,varsResolver:m,rootSelector:"group"})("group"),...x})})});function h(e){return(0,d.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}p.classes=i,p.varsResolver=m,p.displayName="@mantine/core/AvatarGroup";let f=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],g=(0,a.createVarsResolver)((e,{size:a,radius:r,variant:o,gradient:n,color:l,autoContrast:i,name:s,allowedInitialsColors:c})=>{let d="initials"===l&&"string"==typeof s?function(e,t=f){return t[Math.abs(function(e){let t=0;for(let a=0;a<e.length;a+=1)t=(t<<5)-t+e.charCodeAt(a)|0;return t}(e))%t.length]}(s,c):l,u=e.variantColorResolver({color:d||"gray",theme:e,gradient:n,variant:o||"light",autoContrast:i});return{root:{"--avatar-size":(0,t.getSize)(a,"avatar-size"),"--avatar-radius":void 0===r?void 0:(0,t.getRadius)(r),"--avatar-bg":d||o?u.background:void 0,"--avatar-color":d||o?u.color:void 0,"--avatar-bd":d||o?u.border:void 0}}}),x=(0,n.polymorphicFactory)(e=>{let t=(0,r.useProps)("Avatar",null,e),{classNames:a,className:n,style:s,styles:m,unstyled:p,vars:f,src:x,alt:v,radius:b,color:y,gradient:w,imageProps:S,children:k,autoContrast:D,mod:M,name:j,allowedInitialsColors:C,attributes:A,...V}=t,Y=(0,c.use)(u),[P,I]=(0,c.useState)(!x),T=(0,o.useStyles)({name:"Avatar",props:t,classes:i,className:n,style:s,classNames:a,styles:m,unstyled:p,attributes:A,vars:f,varsResolver:g});return(0,c.useEffect)(()=>I(!x),[x]),(0,d.jsx)(l.Box,{...T("root"),mod:[{"within-group":Y.withinGroup},M],...V,children:P||!x?(0,d.jsx)("span",{...T("placeholder"),title:v,children:k||"string"==typeof j&&function(e,t=2){let a=e.split(" ");return 1===a.length?e.slice(0,t).toUpperCase():a.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(j)||(0,d.jsx)(h,{})}):(0,d.jsx)("img",{...S,...T("image"),src:x,alt:v,onError:e=>{I(!0),S?.onError?.(e)}})})});x.classes=i,x.varsResolver=g,x.displayName="@mantine/core/Avatar",x.Group=p,e.s(["Avatar",0,x],141806)},123895,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20a108,108,0,0,0,0,216c22.27,0,45.69-6.73,62.64-18a12,12,0,1,0-13.29-20c-13,8.63-31.89,14-49.35,14a84,84,0,1,1,84-84c0,9.29-1.67,17.08-4.69,21.95-2.64,4.24-6,6.05-11.31,6.05s-8.67-1.81-11.31-6.05c-3-4.87-4.69-12.66-4.69-21.95V88a12,12,0,0,0-23.49-3.46,52,52,0,1,0,8.86,79.57C172.3,174.3,182.81,180,196,180c24.67,0,40-19.92,40-52A108.12,108.12,0,0,0,128,20Zm0,136a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232,128c0,.51,0,1,0,1.52-.34,14.26-5.63,30.48-28,30.48-23.14,0-28-17.4-28-32V88a8,8,0,0,0-8.53-8A8.17,8.17,0,0,0,160,88.27v4a48,48,0,1,0,6.73,64.05,40.19,40.19,0,0,0,3.38,5C175.48,168,185.71,176,204,176a54.81,54.81,0,0,0,9.22-.75,4,4,0,0,1,4.09,6A104.05,104.05,0,0,1,125.91,232C71.13,230.9,26.2,186.86,24.08,132.11A104,104,0,1,1,232,128ZM96,128a32,32,0,1,0,32-32A32,32,0,0,0,96,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26a102,102,0,0,0,0,204c21.13,0,43.31-6.35,59.32-17a6,6,0,0,0-6.65-10c-13.9,9.25-34.09,15-52.67,15a90,90,0,1,1,90-90c0,29.58-13.78,34-22,34s-22-4.42-22-34V88a6,6,0,0,0-12,0v9a46,46,0,1,0,4.34,56.32C171.76,166.6,182,174,196,174c21.29,0,34-17.2,34-46A102.12,102.12,0,0,0,128,26Zm0,136a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28a100,100,0,0,0,0,200c20.76,0,42.52-6.23,58.21-16.66a4,4,0,1,0-4.43-6.67C167.35,214.27,147.24,220,128,220a92,92,0,1,1,92-92c0,31.32-15,36-24,36s-24-4.68-24-36V88a4,4,0,0,0-8,0v14.75a44,44,0,1,0,2.82,45.94C171.46,163.58,181.66,172,196,172c20,0,32-16.45,32-44A100.11,100.11,0,0,0,128,28Zm0,136a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(a.default,{ref:o,...e,weights:r}));o.displayName="AtIcon",e.s(["AtIcon",0,o],123895)},931882,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),t.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(a.default,{ref:o,...e,weights:r}));o.displayName="CaretDownIcon",e.s(["CaretDownIcon",0,o],931882)},960831,e=>{"use strict";e.s(["inputControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}],"inputOnlyControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],"inputWrapperOnlyControls",0,[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}]])},293907,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M100,36H56A20,20,0,0,0,36,56v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,100,36ZM96,96H60V60H96ZM200,36H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V56A20,20,0,0,0,200,36Zm-4,60H160V60h36Zm-96,40H56a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,100,136Zm-4,60H60V160H96Zm104-60H156a20,20,0,0,0-20,20v44a20,20,0,0,0,20,20h44a20,20,0,0,0,20-20V156A20,20,0,0,0,200,136Zm-4,60H160V160h36Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M112,56v48a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8h48A8,8,0,0,1,112,56Zm88-8H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V56A8,8,0,0,0,200,48Zm-96,96H56a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,104,144Zm96,0H152a8,8,0,0,0-8,8v48a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,200,144Z",opacity:"0.2"}),t.createElement("path",{d:"M200,136H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48ZM104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M120,56v48a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40h48A16,16,0,0,1,120,56Zm80-16H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm-96,96H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm96,0H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M104,42H56A14,14,0,0,0,42,56v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,104,42Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V56A14,14,0,0,0,200,42Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V56a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm-98,34H56a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,104,138Zm2,62a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Zm94-62H152a14,14,0,0,0-14,14v48a14,14,0,0,0,14,14h48a14,14,0,0,0,14-14V152A14,14,0,0,0,200,138Zm2,62a2,2,0,0,1-2,2H152a2,2,0,0,1-2-2V152a2,2,0,0,1,2-2h48a2,2,0,0,1,2,2Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M104,40H56A16,16,0,0,0,40,56v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,104,40Zm0,64H56V56h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Zm0,64H152V56h48v48Zm-96,32H56a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,104,136Zm0,64H56V152h48v48Zm96-64H152a16,16,0,0,0-16,16v48a16,16,0,0,0,16,16h48a16,16,0,0,0,16-16V152A16,16,0,0,0,200,136Zm0,64H152V152h48v48Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M104,44H56A12,12,0,0,0,44,56v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,104,44Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V56A12,12,0,0,0,200,44Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V56a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM104,140H56a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,104,140Zm4,60a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Zm92-60H152a12,12,0,0,0-12,12v48a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V152A12,12,0,0,0,200,140Zm4,60a4,4,0,0,1-4,4H152a4,4,0,0,1-4-4V152a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(a.default,{ref:o,...e,weights:r}));o.displayName="SquaresFourIcon",e.s(["SquaresFourIcon",0,o],293907)},981377,e=>{"use strict";var t=e.i(44091),a=e.i(391466),r=e.i(275519),o=e.i(232471),n={root:"m_d08caa0"},l=e.i(391398);let i=(0,r.factory)(e=>{let r=(0,t.useProps)("Typography",null,e),{classNames:i,className:s,style:c,styles:d,unstyled:u,attributes:m,...p}=r;return(0,l.jsx)(o.Box,{...(0,a.useStyles)({name:"Typography",classes:n,props:r,className:s,style:c,classNames:i,styles:d,unstyled:u,attributes:m})("root"),...p})});i.classes=n,i.displayName="@mantine/core/Typography",e.s(["Typography",0,i],981377)},393353,e=>{"use strict";var t=e.i(779177),a=e.i(433512),r=e.i(481178),o=e.i(317477),n=e.i(700145),l=e.i(853487),i=e.i(44091),s=e.i(391466),c=e.i(275519),d=e.i(232471),u={root:"m_e5262200",indicator:"m_760d1fb1",processing:"m_885901b1"},m=e.i(391398);let p={position:"top-end",offset:0,showZero:!0},h=(0,r.createVarsResolver)((e,{color:r,position:i,offset:s,size:c,radius:d,zIndex:u,autoContrast:m})=>({root:{"--indicator-color":r?(0,o.getThemeColor)(r,e):void 0,"--indicator-text-color":(0,l.getAutoContrastValue)(m,e)?(0,n.getContrastColor)({color:r,theme:e,autoContrast:m}):void 0,"--indicator-size":(0,t.rem)(c),"--indicator-radius":void 0===d?void 0:(0,a.getRadius)(d),"--indicator-z-index":u?.toString(),...function(e="top-end",a=0){let r={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},o="number"==typeof a?a:a.x,n="number"==typeof a?a:a.y,l=(0,t.rem)(o),i=(0,t.rem)(n),[s,c]=e.split("-");return"top"===s&&(r["--indicator-top"]=i,r["--indicator-translate-y"]="-50%"),"middle"===s&&(r["--indicator-top"]="50%",r["--indicator-translate-y"]="-50%"),"bottom"===s&&(r["--indicator-bottom"]=i,r["--indicator-translate-y"]="50%"),"start"===c&&(r["--indicator-left"]=l,r["--indicator-translate-x"]="-50%"),"center"===c&&(r["--indicator-left"]="50%",r["--indicator-translate-x"]="-50%"),"end"===c&&(r["--indicator-right"]=l,r["--indicator-translate-x"]="50%"),r}(i,s)}})),f=(0,c.factory)(e=>{let t=(0,i.useProps)("Indicator",p,e),{classNames:a,className:r,style:o,styles:n,unstyled:l,vars:c,children:f,position:g,offset:x,inline:v,label:b,radius:y,color:w,withBorder:S,disabled:k,processing:D,zIndex:M,autoContrast:j,maxValue:C,showZero:A,mod:V,attributes:Y,...P}=t,I=(0,s.useStyles)({name:"Indicator",classes:u,props:t,className:r,style:o,classNames:a,styles:n,unstyled:l,attributes:Y,vars:c,varsResolver:h}),T=!A&&(0===b||"0"===b),H=void 0!==C&&"number"==typeof b&&b>C?`${C}+`:b;return(0,m.jsxs)(d.Box,{...I("root"),mod:[{inline:v},V],...P,children:[!k&&!T&&(0,m.jsx)(d.Box,{mod:{"with-label":!!b,"with-border":S,processing:D},...I("indicator"),children:H}),f]})});f.classes=u,f.varsResolver=h,f.displayName="@mantine/core/Indicator",e.s(["Indicator",0,f],393353)},501655,e=>{"use strict";var t=e.i(648863),a=e.i(60695),r=e.i(391398);let o={type:"configurator",component:function(e){return(0,r.jsx)(a.Slider,{defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],...e})},code:`
import { Slider } from '@mantine/core';


function Demo() {
  return (
    <Slider
      {{props}}
      defaultValue={40}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}
`,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"showLabelOnHover",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"labelAlwaysOn",type:"boolean",initialValue:!1,libraryValue:!1}]};var n={track:"m_7b015c03",mark:"m_88156515",markLabel:"m_beb40edf",thumb:"m_7afd1c8e"},l=e.i(232471);let i={type:"code",component:function(){return(0,r.jsx)(l.Box,{maw:400,pt:15,pb:20,mx:"auto",children:(0,r.jsx)(a.Slider,{defaultValue:40,size:2,classNames:n,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}]})})},code:[{fileName:"Demo.tsx",code:`
import { Slider } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Slider
      defaultValue={40}
      size={2}
      classNames={classes}
      marks={[
        { value: 20, label: '20%' },
        { value: 50, label: '50%' },
        { value: 80, label: '80%' },
      ]}
    />
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.track {
  &::before {
    background-color: light-dark(var(--mantine-color-blue-1), var(--mantine-color-dark-3));
  }
}

.mark {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  transform: translateX(-3px) translateY(-2px);
  border-color: light-dark(var(--mantine-color-blue-1), var(--mantine-color-dark-3));

  &[data-filled] {
    border-color: var(--mantine-color-blue-6);
  }
}

.markLabel {
  font-size: var(--mantine-font-size-xs);
  margin-bottom: 5px;
  margin-top: 0;
}

.thumb {
  height: 16px;
  width: 16px;
  background-color: var(--mantine-color-white);
  border-width: 1px;
  box-shadow: var(--mantine-shadow-sm);
}
`,language:"scss"}]},s={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Slider,{defaultValue:40,marks:[{value:10},{value:40},{value:95}],mb:32}),(0,r.jsx)(a.Slider,{mb:32,defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}]})]})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Slider defaultValue={40} marks={[{ value: 10 }, { value: 40 }, { value: 95 }]} mb={32} />
      <Slider
        mb={32}
        defaultValue={40}
        marks={[
          { value: 20, label: '20%' },
          { value: 50, label: '50%' },
          { value: 80, label: '80%' },
        ]}
      />
    </>
  );
}
`,centered:!0,maxWidth:400};var c=e.i(883364);let d={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Text,{size:"sm",children:"No label"}),(0,r.jsx)(a.Slider,{defaultValue:40,label:null}),(0,r.jsx)(c.Text,{size:"sm",mt:"xl",children:"Formatted label"}),(0,r.jsx)(a.Slider,{defaultValue:40,label:e=>`${e} \xb0C`}),(0,r.jsx)(c.Text,{size:"sm",mt:"xl",children:"Label always visible"}),(0,r.jsx)(a.Slider,{defaultValue:40,labelAlwaysOn:!0}),(0,r.jsx)(c.Text,{size:"sm",mt:"xl",children:"Custom label transition"}),(0,r.jsx)(a.Slider,{defaultValue:40,labelTransitionProps:{transition:"skew-down",duration:150,timingFunction:"linear"}})]})},code:`
import { Slider, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="sm">No label</Text>
      <Slider defaultValue={40} label={null} />

      <Text size="sm" mt="xl">Formatted label</Text>
      <Slider defaultValue={40} label={(value) => \`\${value} \xb0C\`} />

      <Text size="sm" mt="xl">Label always visible</Text>
      <Slider defaultValue={40} labelAlwaysOn />

      <Text size="sm" mt="xl">Custom label transition</Text>
      <Slider
        defaultValue={40}
        labelTransitionProps={{
          transition: 'skew-down',
          duration: 150,
          timingFunction: 'linear',
        }}
      />
    </>
  );
}
`,centered:!0,maxWidth:400},u=[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}],m={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Text,{children:"Decimal step"}),(0,r.jsx)(a.Slider,{defaultValue:0,min:-10,max:10,label:e=>e.toFixed(1),step:.1,styles:{markLabel:{display:"none"}}}),(0,r.jsx)(c.Text,{mt:"md",children:"Step matched with marks"}),(0,r.jsx)(a.Slider,{defaultValue:50,label:e=>u.find(t=>t.value===e).label,step:25,marks:u,styles:{markLabel:{display:"none"}}})]})},code:`
import { Slider, Text } from '@mantine/core';

const marks = [
  { value: 0, label: 'xs' },
  { value: 25, label: 'sm' },
  { value: 50, label: 'md' },
  { value: 75, label: 'lg' },
  { value: 100, label: 'xl' },
];

function Demo() {
  return (
    <>
      <Text>Decimal step</Text>
      <Slider
        defaultValue={0}
        min={-10}
        max={10}
        label={(value) => value.toFixed(1)}
        step={0.1}
        styles={{ markLabel: { display: 'none' } }}
      />

      <Text mt="md">Step matched with marks</Text>
      <Slider
        defaultValue={50}
        label={(val) => marks.find((mark) => mark.value === val)!.label}
        step={25}
        marks={marks}
        styles={{ markLabel: { display: 'none' } }}
      />
    </>
  );
}
`,centered:!0,maxWidth:400};var p=e.i(191788);let h={type:"code",component:function(){let[e,t]=(0,p.useState)(50),[o,n]=(0,p.useState)(50);return(0,r.jsxs)(l.Box,{maw:400,mx:"auto",children:[(0,r.jsx)(a.Slider,{value:e,onChange:t,onChangeEnd:n}),(0,r.jsxs)(c.Text,{mt:"md",size:"sm",children:["onChange value: ",(0,r.jsx)("b",{children:e})]}),(0,r.jsxs)(c.Text,{mt:5,size:"sm",children:["onChangeEnd value: ",(0,r.jsx)("b",{children:o})]})]})},code:`
import { useState } from 'react';
import { Slider, Text, Box } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(50);
  const [endValue, setEndValue] = useState(50);

  return (
    <Box maw={400} mx="auto">
      <Slider value={value} onChange={setValue} onChangeEnd={setEndValue} />

      <Text mt="md" size="sm">
        onChange value: <b>{value}</b>
      </Text>
      <Text mt={5} size="sm">
        onChangeEnd value: <b>{endValue}</b>
      </Text>
    </Box>
  );
}
`},f={type:"code",component:function(){return(0,r.jsx)(a.Slider,{defaultValue:60,disabled:!0})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider defaultValue={60} disabled />;
}
`,centered:!0,maxWidth:340},g={type:"configurator",component:function(e){return(0,r.jsx)(a.Slider,{...e,defaultValue:20})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} defaultValue={20} />;
}
`,maxWidth:400,centered:!0,controls:[{prop:"thumbSize",type:"number",min:16,max:32,initialValue:14,libraryValue:null}]};var x=e.i(171481);let v=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M178,36a65.6,65.6,0,0,0-46.67,19.33L128,58.66l-3.33-3.33A66,66,0,0,0,12,102c0,72.34,105.81,130.14,110.31,132.57a12,12,0,0,0,11.38,0C138.19,232.14,244,174.34,244,102A66.08,66.08,0,0,0,178,36Zm-5.49,142.36A328.69,328.69,0,0,1,128,210.16a328.69,328.69,0,0,1-44.51-31.8C61.82,159.77,36,131.42,36,102a42,42,0,0,1,71.7-29.7L111,75.63l-7.52,7.52a12,12,0,0,0,0,17l21.7,21.7-13.7,13.69a12,12,0,1,0,17,17l22.18-22.19a12,12,0,0,0,0-17L129,91.63,148.3,72.3A42,42,0,0,1,220,102C220,131.42,194.18,159.77,172.51,178.36Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M232,102c0,66-104,122-104,122S24,168,24,102a54,54,0,0,1,92.18-38.18L128,75.63l11.82-11.81A54,54,0,0,1,232,102Z",opacity:"0.2"}),p.createElement("path",{d:"M178,40a61.6,61.6,0,0,0-43.84,18.16L128,64.32l-6.16-6.16A62,62,0,0,0,16,102c0,70,103.79,126.67,108.21,129a8,8,0,0,0,7.58,0C136.21,228.67,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102a46,46,0,0,1,78.53-32.53l6.16,6.16L106.34,86a8,8,0,0,0,0,11.31l24.53,24.53-16.53,16.52a8,8,0,0,0,11.32,11.32l22.18-22.19a8,8,0,0,0,0-11.31L123.31,91.63l22.16-22.16A46,46,0,0,1,224,102C224,155.61,146.24,204.15,128,214.8Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M239.81,107.5c-5.19,67.42-103.7,121.23-108,123.54a8,8,0,0,1-7.58,0C119.8,228.67,16,172,16,102a62,62,0,0,1,96.47-51.55,4,4,0,0,1,.61,6.17L99.72,70a8,8,0,0,0,0,11.31l32.53,32.53L111,135a8,8,0,1,0,11.31,11.31l26.88-26.87a8,8,0,0,0,0-11.31L116.7,75.63l17.47-17.47h0A61.63,61.63,0,0,1,178.41,40C214.73,40.23,242.59,71.29,239.81,107.5Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M178,42a59.63,59.63,0,0,0-42.43,17.57L128,67.15l-7.57-7.58A60,60,0,0,0,18,102c0,29.2,18.2,59.59,54.1,90.31a334.68,334.68,0,0,0,53.06,37,6,6,0,0,0,5.68,0,334.68,334.68,0,0,0,53.06-37C219.8,161.59,238,131.2,238,102A60.07,60.07,0,0,0,178,42ZM128,217.11C111.59,207.64,30,157.72,30,102a48,48,0,0,1,81.94-33.94l7.57,7.57L107.76,87.39a6,6,0,0,0,0,8.49l25.94,25.94-17.94,17.94a6,6,0,0,0,8.48,8.48l22.19-22.18a6,6,0,0,0,0-8.49L120.49,91.63l23.57-23.57A48,48,0,0,1,226,102C226,157.72,144.41,207.64,128,217.11Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M178,40a61.6,61.6,0,0,0-43.84,18.16L128,64.32l-6.16-6.16A62,62,0,0,0,16,102c0,70,103.79,126.67,108.21,129a8,8,0,0,0,7.58,0C136.21,228.67,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102a46,46,0,0,1,78.53-32.53l6.16,6.16L106.34,86a8,8,0,0,0,0,11.31l24.53,24.53-16.53,16.52a8,8,0,0,0,11.32,11.32l22.18-22.19a8,8,0,0,0,0-11.31L123.31,91.63l22.16-22.16A46,46,0,0,1,224,102C224,155.61,146.24,204.15,128,214.8Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M178,44a57.59,57.59,0,0,0-41,17l-9,9-9-9a58,58,0,0,0-99,41c0,28.59,18,58.47,53.4,88.79a333.81,333.81,0,0,0,52.7,36.73,4,4,0,0,0,3.8,0,333.81,333.81,0,0,0,52.7-36.73C218,160.47,236,130.59,236,102A58.07,58.07,0,0,0,178,44ZM128,219.42c-14-8-100-59.35-100-117.42a50,50,0,0,1,85.36-35.36l9,9L109.17,88.8a4,4,0,0,0,0,5.66l27.36,27.36-19.36,19.35a4,4,0,0,0,5.66,5.66L145,124.64a4,4,0,0,0,0-5.65L117.66,91.63l13.16-13.16h0l11.8-11.81A50,50,0,0,1,228,102C228,160,142,211.46,128,219.42Z"}))]]),b=p.forwardRef((e,t)=>p.createElement(x.default,{ref:t,...e,weights:v}));b.displayName="HeartBreakIcon";var y=e.i(853907),w=e.i(328940);let S={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Slider,{thumbChildren:(0,r.jsx)(y.HeartIcon,{size:16}),color:"red",label:null,defaultValue:40,thumbSize:26,styles:{thumb:{borderWidth:2,padding:3}}}),(0,r.jsx)(w.RangeSlider,{mt:"xl",styles:{thumb:{borderWidth:2,padding:3}},color:"red",label:null,defaultValue:[20,60],thumbSize:26,thumbChildren:[(0,r.jsx)(y.HeartIcon,{size:16},"1"),(0,r.jsx)(b,{size:16},"2")]})]})},code:`
import { Slider, RangeSlider } from '@mantine/core';
import { HeartIcon, HeartBreakIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      <Slider
        thumbChildren={<HeartIcon size={16} />}
        color="red"
        label={null}
        defaultValue={40}
        thumbSize={26}
        styles={{ thumb: { borderWidth: 2, padding: 3 } }}
      />

      <RangeSlider
        mt="xl"
        styles={{ thumb: { borderWidth: 2, padding: 3 } }}
        color="red"
        label={null}
        defaultValue={[20, 60]}
        thumbSize={26}
        thumbChildren={[<HeartIcon size={16} key="1" />, <HeartBreakIcon size={16} key="2" />]}
      />
    </>
  );
}
`,maxWidth:400,centered:!0};function k(e){let t=["KB","MB","GB","TB"],a=0,r=e;for(;r>=1024&&a<t.length-1;)a+=1,r/=1024;return`${r} ${t[a]}`}let D=e=>2**e,M={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Slider,{scale:D,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:10,label:k}),(0,r.jsx)(w.RangeSlider,{mt:50,scale:D,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:[10,20],label:k})]})},code:`
import { RangeSlider, Slider } from '@mantine/core';

function valueLabelFormat(value: number) {
  const units = ['KB', 'MB', 'GB', 'TB'];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return \`\${scaledValue} \${units[unitIndex]}\`;
}

const getScale = (v: number) => 2 ** v;

function Demo() {
  return (
    <>
      <Slider
        scale={getScale}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={10}
        label={valueLabelFormat}
      />
      <RangeSlider
        mt={50}
        scale={getScale}
        step={1}
        min={2}
        max={30}
        labelAlwaysOn
        defaultValue={[10, 20]}
        label={valueLabelFormat}
      />
    </>
  );
}
`,centered:!0,maxWidth:400},j={type:"code",component:function(){return(0,r.jsx)(a.Slider,{inverted:!0,defaultValue:80})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider inverted defaultValue={80} />;
}
`,centered:!0,maxWidth:400};var C=e.i(220026);let A=`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} marks={[{ value: 20, label: '20%' }, { value: 80, label: '80%' }]} labelAlwaysOn />;
}
`,V={type:"styles-api",data:C.SliderStylesApi,component:function(e){return(0,r.jsx)(a.Slider,{marks:[{value:20,label:"20%"},{value:80,label:"80%"}],defaultValue:40,labelAlwaysOn:!0,mb:40,...e})},code:A,centered:!0,maxWidth:400},Y={type:"code",component:function(){return(0,r.jsx)(a.Slider,{min:0,max:1,step:5e-4,defaultValue:.5535})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider min={0} max={1} step={0.0005} defaultValue={0.5535} />;
}
`,centered:!0,maxWidth:340};var P="m_b2d44517",I=e.i(414124),T=e.i(852361),H=e.i(502315);let L={type:"code",component:function(){let[e,t]=(0,p.useState)(.3),{ref:a}=(0,H.useMove)(({x:e})=>t((0,T.clamp)(e,.1,.9))),o=e<.2||e>.8;return(0,r.jsx)("div",{className:"m_1e8dea5f",children:(0,r.jsxs)("div",{className:"m_b34cb76e",ref:a,children:[(0,r.jsx)("div",{className:"m_9decab9f",style:{width:`calc(${100*e}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,r.jsx)("span",{className:P,"data-floating":o||void 0,"data-filled":!0,children:(100*e).toFixed(0)})}),(0,r.jsx)("div",{className:"m_b2774b70",style:{width:`calc(${(1-e)*100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,r.jsx)("span",{className:P,"data-floating":o||void 0,children:((1-e)*100).toFixed(0)})}),(0,r.jsx)("div",{className:"m_b34877f9",style:{left:`calc(${100*e}% - var(--thumb-width) / 2)`},children:(0,r.jsx)(I.DotsSixVerticalIcon,{})})]})})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import { DotsSixVerticalIcon } from '@phosphor-icons/react';
import { clamp, useMove } from '@mantine/hooks';
import classes from './Demo.module.css';

function Demo() {
  const [value, setValue] = useState(0.3);
  const { ref } = useMove(({ x }) => setValue(clamp(x, 0.1, 0.9)));
  const labelFloating = value < 0.2 || value > 0.8;

  return (
    <div className={classes.root}>
      <div className={classes.track} ref={ref}>
        <div
          className={classes.filled}
          style={{
            width: \`calc(\${value * 100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)\`,
          }}
        >
          <span className={classes.label} data-floating={labelFloating || undefined} data-filled>
            {(value * 100).toFixed(0)}
          </span>
        </div>

        <div
          className={classes.empty}
          style={{
            width: \`calc(\${(1 - value) * 100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)\`,
          }}
        >
          <span className={classes.label} data-floating={labelFloating || undefined}>
            {((1 - value) * 100).toFixed(0)}
          </span>
        </div>

        <div
          className={classes.thumb}
          style={{ left: \`calc(\${value * 100}% - var(--thumb-width) / 2)\` }}
        >
          <DotsSixVerticalIcon />
        </div>
      </div>
    </div>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.root {
  padding-top: 20px;
}

.track {
  --thumb-width: 20px;
  --thumb-offset: 10px;

  position: relative;
  height: 60px;
  display: flex;
}

.filled {
  height: 100%;
  margin-right: calc(var(--thumb-offset) / 2 + var(--thumb-width) / 2);
  border-radius: var(--mantine-radius-md);
  background-color: var(--mantine-color-blue-filled);
  display: flex;
  align-items: center;
  padding-inline: 10px;
}

.empty {
  height: 100%;
  margin-left: calc(var(--thumb-offset) / 2 + var(--thumb-width) / 2);
  border-radius: var(--mantine-radius-md);
  background-color: var(--mantine-color-gray-1);
  display: flex;
  align-items: center;
  padding-inline: 10px;
  justify-content: flex-end;

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
  }
}

.thumb {
  position: absolute;
  background-color: var(--mantine-color-white);
  border: 1px solid var(--mantine-color-gray-2);
  border-radius: var(--mantine-radius-md);
  height: 100%;
  width: var(--thumb-width);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mantine-color-gray-5);

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
    border-color: var(--mantine-color-dark-4);
    color: var(--mantine-color-dark-0);
  }
}

.label {
  font-size: var(--mantine-font-size-xl);
  font-weight: 700;
  transition:
    transform 100ms ease,
    color 100ms ease;

  &[data-filled] {
    color: var(--mantine-color-white);
  }

  &[data-floating] {
    transform: translateY(-44px) translateX(-10px);
    color: var(--mantine-color-black);

    &:not([data-filled]) {
      transform: translateY(-44px) translateX(10px);
    }

    @mixin dark {
      color: var(--mantine-color-white);
    }
  }
}
`,language:"scss"}],maxWidth:500,centered:!0};var B=e.i(671640);let E={type:"code",component:function(){return(0,r.jsxs)(B.Stack,{children:[(0,r.jsx)(a.Slider,{restrictToMarks:!0,defaultValue:25,marks:Array.from({length:5}).map((e,t)=>({value:25*t}))}),(0,r.jsx)(w.RangeSlider,{restrictToMarks:!0,defaultValue:[5,15],marks:[{value:5},{value:15},{value:25},{value:35},{value:70},{value:80},{value:90}]})]})},code:`
import { RangeSlider, Slider, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Slider
        restrictToMarks
        defaultValue={25}
        marks={Array.from({ length: 5 }).map((_, index) => ({ value: index * 25 }))}
      />

      <RangeSlider
        restrictToMarks
        defaultValue={[5, 15]}
        marks={[
          { value: 5 },
          { value: 15 },
          { value: 25 },
          { value: 35 },
          { value: 70 },
          { value: 80 },
          { value: 90 },
        ]}
      />
    </Stack>
  );
}
`,centered:!0,maxWidth:400},R={type:"code",component:function(){return(0,r.jsx)(a.Slider,{domain:[0,100],min:10,max:90,defaultValue:25,mb:40,marks:[{value:10,label:"min"},{value:90,label:"max"}]})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <Slider
      domain={[0, 100]}
      min={10}
      max={90}
      defaultValue={25}
      marks={[
        { value: 10, label: 'min' },
        { value: 90, label: 'max' },
      ]}
    />
  );
}
`,maxWidth:400,centered:!0},Z=[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],z={type:"code",component:function(){return(0,r.jsxs)("div",{style:{display:"flex",gap:40},children:[(0,r.jsx)(a.Slider,{orientation:"vertical",defaultValue:45,marks:Z}),(0,r.jsx)(w.RangeSlider,{orientation:"vertical",defaultValue:[25,65],marks:Z})]})},code:`
import { RangeSlider, Slider } from '@mantine/core';

const marks = [
  { value: 20, label: '20%' },
  { value: 50, label: '50%' },
  { value: 80, label: '80%' },
];

function Demo() {
  return (
    <div style={{ display: 'flex', gap: 40 }}>
      <Slider orientation="vertical" defaultValue={45} marks={marks} />
      <RangeSlider orientation="vertical" defaultValue={[25, 65]} marks={marks} />
    </div>
  );
}
`,centered:!0},F={type:"code",component:function(){let[e,t]=(0,p.useState)(50);return(0,r.jsxs)(l.Box,{pb:"md",children:[(0,r.jsxs)(c.Text,{size:"sm",mb:"xs",children:["Hidden marks allow you to snap to specific values without displaying them visually. Current value: ",e]}),(0,r.jsx)(a.Slider,{value:e,onChange:t,min:0,max:100,step:1,restrictToMarks:!0,marks:[{value:0,label:"0%"},{value:25,hidden:!0},{value:50,label:"50%"},{value:75,hidden:!0},{value:100,label:"100%"}]})]})},code:`
import { Slider, Text, Box } from '@mantine/core';
import { useState } from 'react';

function Demo() {
  const [value, setValue] = useState(50);

  return (
    <Box pb="md">
      <Text size="sm" mb="xs">
        Hidden marks allow you to snap to specific values without displaying them visually. Current
        value: {value}
      </Text>
      <Slider
        value={value}
        onChange={setValue}
        min={0}
        max={100}
        step={1}
        restrictToMarks
        marks={[
          { value: 0, label: '0%' },
          { value: 25, hidden: true },
          { value: 50, label: '50%' },
          { value: 75, hidden: true },
          { value: 100, label: '100%' },
        ]}
      />
    </Box>
  );
}
`},W={type:"code",component:function(){return(0,r.jsx)(a.Slider,{startPointValue:-50,min:-100,max:100,defaultValue:40,mb:40,marks:[{value:-100,label:"-100"},{value:-50,label:"-50"},{value:0,label:"0"},{value:50,label:"50"},{value:100,label:"100"}]})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <Slider
      startPointValue={0}
      min={-100}
      max={100}
      defaultValue={40}
      marks={[
        { value: -100, label: '-100' },
        { value: -50, label: '-50' },
        { value: 0, label: '0' },
        { value: 50, label: '50' },
        { value: 100, label: '100' },
      ]}
    />
  );
}
`,centered:!0,maxWidth:400};var N=(0,t.__exportAll)({changeEnd:()=>h,configurator:()=>o,customSlider:()=>L,customize:()=>i,decimal:()=>Y,disabled:()=>f,domain:()=>R,hiddenMarks:()=>F,inverted:()=>j,label:()=>d,marks:()=>s,restrictToMarks:()=>E,scale:()=>M,startPoint:()=>W,step:()=>m,stylesApi:()=>V,thumbChildren:()=>S,thumbSize:()=>g,vertical:()=>z});e.s(["SliderDemos",0,N],501655)},724288,e=>{"use strict";var t=e.i(433512),a=e.i(481178),r=e.i(44091),o=e.i(391466),n=e.i(956449),l=e.i(232471),i={root:"m_9e117634"},s=e.i(191788),c=e.i(391398);let d=(0,a.createVarsResolver)((e,{radius:a,fit:r})=>({root:{"--image-radius":void 0===a?void 0:(0,t.getRadius)(a),"--image-object-fit":r}})),u=(0,n.polymorphicFactory)(e=>{let t=(0,r.useProps)("Image",null,e),{classNames:a,className:n,style:u,styles:m,unstyled:p,vars:h,onError:f,src:g,radius:x,fit:v,fallbackSrc:b,mod:y,attributes:w,...S}=t,[k,D]=(0,s.useState)(!g);(0,s.useEffect)(()=>D(!g),[g]);let M=(0,o.useStyles)({name:"Image",classes:i,props:t,className:n,style:u,classNames:a,styles:m,unstyled:p,attributes:w,vars:h,varsResolver:d});return k&&b?(0,c.jsx)(l.Box,{component:"img",src:b,...M("root"),onError:f,mod:["fallback",y],...S}):(0,c.jsx)(l.Box,{component:"img",...M("root"),src:g,onError:e=>{f?.(e),D(!0)},mod:y,...S})});u.classes=i,u.varsResolver=d,u.displayName="@mantine/core/Image",e.s(["Image",0,u],724288)},610287,e=>{"use strict";var t=e.i(262055),a=e.i(44091),r=e.i(62904),o=e.i(391466),n=e.i(275519),l=e.i(191788),i=e.i(392862);let[s,c]=(0,e.i(386179).createSafeContext)("Menu component was not found in the tree");var d={dropdown:"m_dc9b7c9f",label:"m_9bfac126",divider:"m_efdf90cb",item:"m_99ac2aa1",itemLabel:"m_5476e0d3",itemSection:"m_8b75e504",chevron:"m_b85b0bed"},u=e.i(232471),m=e.i(391398);let p=(0,n.factory)(e=>{let{classNames:t,className:r,style:o,styles:n,vars:l,...i}=(0,a.useProps)("MenuDivider",null,e);return(0,m.jsx)(u.Box,{...c().getStyles("divider",{className:r,style:o,styles:n,classNames:t}),...i})});p.classes=d,p.displayName="@mantine/core/MenuDivider";var h=e.i(334816),f=e.i(332977);let g=(0,n.factory)(e=>{let{classNames:t,className:r,style:o,styles:n,vars:s,onMouseEnter:d,onMouseLeave:u,onKeyDown:p,children:g,ref:x,...v}=(0,a.useProps)("MenuDropdown",null,e),b=(0,l.useRef)(null),y=c(),w=(0,h.createEventHandler)(p,e=>{("ArrowUp"===e.key||"ArrowDown"===e.key)&&(e.preventDefault(),b.current?.querySelectorAll("[data-menu-item]:not(:disabled)")[0]?.focus())}),S=(0,h.createEventHandler)(d,()=>("hover"===y.trigger||"click-hover"===y.trigger)&&y.openDropdown()),k=(0,h.createEventHandler)(u,()=>("hover"===y.trigger||"click-hover"===y.trigger)&&y.closeDropdown());return(0,m.jsxs)(i.Popover.Dropdown,{...v,onMouseEnter:S,onMouseLeave:k,role:"menu","aria-orientation":"vertical",ref:(0,f.useMergedRef)(x,b),...y.getStyles("dropdown",{className:r,style:o,styles:n,classNames:t,withStaticClass:!1}),tabIndex:-1,"data-menu-dropdown":!0,onKeyDown:w,children:[y.withInitialFocusPlaceholder&&(0,m.jsx)("div",{tabIndex:-1,"data-autofocus":!0,"data-mantine-stop-propagation":!0,style:{outline:0}}),g]})});g.classes=d,g.displayName="@mantine/core/MenuDropdown";var x=e.i(654486),v=e.i(670989),b=e.i(951254),y=e.i(956449),w=e.i(323283),S=e.i(284629);let k=(0,l.createContext)(null),D=(0,y.polymorphicFactory)(e=>{let{classNames:t,className:r,style:o,styles:n,vars:i,color:s,closeMenuOnClick:d,leftSection:u,rightSection:p,children:g,disabled:y,"data-disabled":D,ref:M,...j}=(0,a.useProps)("MenuItem",null,e),C=c(),A=(0,l.use)(k),V=(0,b.useMantineTheme)(),{dir:Y}=(0,w.useDirection)(),P=(0,l.useRef)(null),I=(0,h.createEventHandler)(j.onClick,()=>{!D&&("boolean"==typeof d?d&&C.closeDropdownImmediately():C.closeOnItemClick&&C.closeDropdownImmediately())}),T=s?V.variantColorResolver({color:s,theme:V,variant:"light"}):void 0,H=s?(0,v.parseThemeColor)({color:s,theme:V}):null,L=(0,h.createEventHandler)(j.onKeyDown,e=>{"ArrowLeft"===e.key&&A&&(A.close(),A.focusParentItem())});return(0,m.jsxs)(S.UnstyledButton,{onMouseDown:e=>e.preventDefault(),...j,unstyled:C.unstyled,tabIndex:C.menuItemTabIndex,...C.getStyles("item",{className:r,style:o,styles:n,classNames:t}),ref:(0,f.useMergedRef)(P,M),role:"menuitem",disabled:y,"data-menu-item":!0,"data-disabled":y||D||void 0,"data-mantine-stop-propagation":!0,onClick:I,onKeyDown:(0,x.createScopedKeydownHandler)({siblingSelector:"[data-menu-item]:not([data-disabled])",parentSelector:"[data-menu-dropdown]",activateOnFocus:!1,loop:C.loop,dir:Y,orientation:"vertical",onKeyDown:L}),__vars:{"--menu-item-color":H?.isThemeColor&&H?.shade===void 0?`var(--mantine-color-${H.color}-6)`:T?.color,"--menu-item-hover":T?.hover},children:[u&&(0,m.jsx)("div",{...C.getStyles("itemSection",{styles:n,classNames:t}),"data-position":"left",children:u}),g&&(0,m.jsx)("div",{...C.getStyles("itemLabel",{styles:n,classNames:t}),children:g}),p&&(0,m.jsx)("div",{...C.getStyles("itemSection",{styles:n,classNames:t}),"data-position":"right",children:p})]})});D.classes=d,D.displayName="@mantine/core/MenuItem";let M=(0,n.factory)(e=>{let{classNames:t,className:r,style:o,styles:n,vars:l,...i}=(0,a.useProps)("MenuLabel",null,e);return(0,m.jsx)(u.Box,{...c().getStyles("label",{className:r,style:o,styles:n,classNames:t}),...i})});M.classes=d,M.displayName="@mantine/core/MenuLabel";var j=e.i(332432);let C=(0,n.factory)(e=>{let{classNames:t,className:r,style:o,styles:n,vars:s,onMouseEnter:d,onMouseLeave:u,onPointerEnter:p,onPointerLeave:h,onKeyDown:g,children:x,ref:v,...b}=(0,a.useProps)("MenuSubDropdown",null,e),y=(0,l.useRef)(null),w=c(),S=(0,l.use)(k),D=S?.getFloatingProps({onMouseEnter:d,onMouseLeave:u,onPointerEnter:p,onPointerLeave:h});return(0,m.jsx)(i.Popover.Dropdown,{...b,...D,role:"menu","aria-orientation":"vertical",ref:(0,f.useMergedRef)(v,y,S?.setFloating),...w.getStyles("dropdown",{className:r,style:o,styles:n,classNames:t,withStaticClass:!1}),tabIndex:-1,"data-menu-dropdown":!0,children:x})});C.classes=d,C.displayName="@mantine/core/MenuSubDropdown";var A=e.i(462138);let V=(0,y.polymorphicFactory)(e=>{let{classNames:t,className:r,style:o,styles:n,vars:i,color:s,leftSection:d,rightSection:u,children:p,disabled:g,"data-disabled":y,closeMenuOnClick:D,ref:M,...j}=(0,a.useProps)("MenuSubItem",null,e),C=c(),V=(0,l.use)(k),Y=(0,b.useMantineTheme)(),{dir:P}=(0,w.useDirection)(),I=(0,l.useRef)(null),T=s?Y.variantColorResolver({color:s,theme:Y,variant:"light"}):void 0,H=s?(0,v.parseThemeColor)({color:s,theme:Y}):null,L=(0,h.createEventHandler)(j.onKeyDown,e=>{"ArrowRight"===e.key&&(V?.open(),V?.focusFirstItem()),"ArrowLeft"===e.key&&V?.parentContext&&(V.parentContext.close(),V.parentContext.focusParentItem())}),B=(0,h.createEventHandler)(j.onClick,()=>{!y&&D&&C.closeDropdownImmediately()}),E=V?.getReferenceProps({onMouseEnter:j.onMouseEnter,onMouseLeave:j.onMouseLeave,onPointerEnter:j.onPointerEnter,onPointerLeave:j.onPointerLeave});return(0,m.jsxs)(S.UnstyledButton,{onMouseDown:e=>e.preventDefault(),...j,...E,unstyled:C.unstyled,tabIndex:C.menuItemTabIndex,...C.getStyles("item",{className:r,style:o,styles:n,classNames:t}),ref:(0,f.useMergedRef)(I,M,V?.setReference),role:"menuitem",disabled:g,"data-menu-item":!0,"data-sub-menu-item":!0,"data-disabled":g||y||void 0,"data-mantine-stop-propagation":!0,onClick:B,onKeyDown:(0,x.createScopedKeydownHandler)({siblingSelector:"[data-menu-item]:not([data-disabled])",parentSelector:"[data-menu-dropdown]",activateOnFocus:!1,loop:C.loop,dir:P,orientation:"vertical",onKeyDown:L}),__vars:{"--menu-item-color":H?.isThemeColor&&H?.shade===void 0?`var(--mantine-color-${H.color}-6)`:T?.color,"--menu-item-hover":T?.hover},children:[d&&(0,m.jsx)("div",{...C.getStyles("itemSection",{styles:n,classNames:t}),"data-position":"left",children:d}),p&&(0,m.jsx)("div",{...C.getStyles("itemLabel",{styles:n,classNames:t}),children:p}),(0,m.jsx)("div",{...C.getStyles("itemSection",{styles:n,classNames:t}),"data-position":"right",children:u||(0,m.jsx)(A.AccordionChevron,{...C.getStyles("chevron"),size:14})})]})});V.classes=d,V.displayName="@mantine/core/MenuSubItem";var Y=e.i(826639);function P({children:e,refProp:t}){if(!(0,Y.isElement)(e))throw Error("Menu.Sub.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");return c(),(0,m.jsx)(i.Popover.Target,{refProp:t,popupType:"menu",children:e})}P.displayName="@mantine/core/MenuSubTarget";var I=e.i(541772),T=e.i(107315),H=e.i(458272);let L={offset:0,position:"right-start",safeAreaPolygon:!0,transitionProps:{duration:0},openDelay:0,middlewares:{shift:{crossAxis:!0}}};function B(e){let{children:t,closeDelay:r,openDelay:o,position:n,safeAreaPolygon:s,...d}=(0,a.useProps)("MenuSub",L,e),u=(0,T.useId)(),[p,{open:h,close:f}]=(0,I.useDisclosure)(!1),g=(0,l.use)(k),x=c(),{dir:v}=(0,w.useDirection)(),b=(0,j.getFloatingPosition)(v,n),y=g?.registerOpenSub??x.registerOpenSub,S=(0,l.useRef)(null),D=(0,l.useRef)(null),M=(0,l.useCallback)(e=>{let t=D.current;return t&&t!==e&&t(),D.current=e,()=>{D.current===e&&(D.current=null)}},[]),C=(0,l.useCallback)(()=>{S.current=y(f),h()},[f,y,h]),A=(0,l.useCallback)(()=>{S.current?.(),S.current=null,f()},[f]),{context:V,refs:Y}=(0,H.useFloating)({placement:b,open:p,onOpenChange:e=>{e?C():A()}}),{getReferenceProps:P,getFloatingProps:B}=(0,H.useInteractions)([(0,H.useHover)(V,{handleClose:s?(0,H.safePolygon)("object"==typeof s?s:void 0):void 0,delay:{open:o,close:r}})]);return(0,m.jsx)(k,{value:{opened:p,close:A,open:C,focusFirstItem:()=>window.setTimeout(()=>{document.getElementById(`${u}-dropdown`)?.querySelectorAll("[data-menu-item]:not([data-disabled])")[0]?.focus()},16),focusParentItem:()=>window.setTimeout(()=>{document.getElementById(`${u}-target`)?.focus()},16),parentContext:g,setReference:Y.setReference,setFloating:Y.setFloating,getReferenceProps:P,getFloatingProps:B,registerOpenSub:M},children:(0,m.jsx)(i.Popover,{opened:p,withinPortal:!1,withArrow:!1,id:u,position:n,...d,children:t})})}B.extend=e=>e,B.displayName="@mantine/core/MenuSub",B.Target=P,B.Dropdown=C,B.Item=V;var E=e.i(409703);let R={refProp:"ref"};function Z(e){let{children:t,refProp:r,...o}=(0,a.useProps)("MenuTarget",R,e),n=(0,E.getSingleElementChild)(t);if(!n)throw Error("Menu.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let s=c(),d=n.props,u=(0,h.createEventHandler)(d.onClick,()=>{"click"===s.trigger?s.toggleDropdown():"click-hover"===s.trigger&&(s.setOpenedViaClick(!0),s.opened||s.openDropdown())}),p=(0,h.createEventHandler)(d.onMouseEnter,()=>("hover"===s.trigger||"click-hover"===s.trigger)&&s.openDropdown()),f=(0,h.createEventHandler)(d.onMouseLeave,()=>{"hover"===s.trigger?s.closeDropdown():"click-hover"!==s.trigger||s.openedViaClick||s.closeDropdown()});return(0,m.jsx)(i.Popover.Target,{refProp:r,popupType:"menu",...o,children:(0,l.cloneElement)(n,{onClick:u,onMouseEnter:p,onMouseLeave:f,"data-expanded":!!s.opened||void 0})})}Z.displayName="@mantine/core/MenuTarget";var z=e.i(579560);let F={trapFocus:!0,closeOnItemClick:!0,withInitialFocusPlaceholder:!0,clickOutsideEvents:["mousedown","touchstart","keydown"],loop:!0,trigger:"click",openDelay:0,closeDelay:100,menuItemTabIndex:-1},W=(0,n.factory)(e=>{let n=(0,a.useProps)("Menu",F,e),{children:c,onOpen:u,onClose:p,opened:h,defaultOpened:f,trapFocus:g,onChange:x,closeOnItemClick:v,loop:b,closeOnEscape:y,trigger:w,openDelay:S,closeDelay:k,classNames:D,styles:M,unstyled:j,variant:C,vars:A,menuItemTabIndex:V,keepMounted:Y,withInitialFocusPlaceholder:P,attributes:I,...T}=n,H=(0,o.useStyles)({name:"Menu",classes:d,props:n,classNames:D,styles:M,unstyled:j,attributes:I}),[L,B]=(0,z.useUncontrolled)({value:h,defaultValue:f,finalValue:!1,onChange:x}),[E,R]=(0,l.useState)(!1),Z=()=>{B(!1),R(!1),L&&p?.()},W=()=>{B(!0),L||u?.()},N=()=>{L?Z():W()},{openDropdown:_,closeDropdown:G}=function({open:e,close:t,openDelay:a,closeDelay:r}){let o=(0,l.useRef)(-1),n=(0,l.useRef)(-1),i=()=>{window.clearTimeout(o.current),window.clearTimeout(n.current)};return(0,l.useEffect)(()=>i,[]),{openDropdown:()=>{i(),0===a||void 0===a?e():o.current=window.setTimeout(e,a)},closeDropdown:()=>{i(),0===r||void 0===r?t():n.current=window.setTimeout(t,r)}}}({open:W,close:Z,closeDelay:k,openDelay:S}),O=(0,l.useRef)(null),$=(0,l.useCallback)(e=>{let t=O.current;return t&&t!==e&&t(),O.current=e,()=>{O.current===e&&(O.current=null)}},[]),{resolvedClassNames:q,resolvedStyles:U}=(0,r.useResolvedStylesApi)({classNames:D,styles:M,props:n});return(0,m.jsx)(s,{value:{getStyles:H,opened:L,toggleDropdown:N,getItemIndex:e=>e?Array.from((0,t.findElementAncestor)(e,"[data-menu-dropdown]")?.querySelectorAll("[data-menu-item]")||[]).findIndex(t=>t===e):null,openedViaClick:E,setOpenedViaClick:R,closeOnItemClick:v,closeDropdown:"click"===w?Z:G,openDropdown:"click"===w?W:_,closeDropdownImmediately:Z,loop:b,trigger:w,unstyled:j,menuItemTabIndex:V,withInitialFocusPlaceholder:P,registerOpenSub:$},children:(0,m.jsx)(i.Popover,{returnFocus:!0,...T,opened:L,onChange:N,defaultOpened:f,trapFocus:!Y&&g,closeOnEscape:y,__staticSelector:"Menu",classNames:q,styles:U,unstyled:j,variant:C,keepMounted:Y,children:c})})});W.displayName="@mantine/core/Menu",W.classes=d,W.Item=D,W.Label=M,W.Dropdown=g,W.Target=Z,W.Divider=p,W.Sub=B,e.s(["Menu",0,W],610287)},556457,103738,e=>{"use strict";var t=e.i(729262),a=e.i(332977),r=e.i(191788),o=e.i(730943);function n(e){return e.current?e.current.scrollHeight:"auto"}function l(e){return e.current?e.current.scrollWidth:"auto"}e.s(["useCollapse",0,function({transitionDuration:e,transitionTimingFunction:l="ease",onTransitionEnd:i,onTransitionStart:s,expanded:c,keepMounted:d}){let u={height:0,overflow:"hidden",...d?{}:{display:"none"}},m=(0,r.useEffectEvent)(()=>s?.()),p=(0,r.useRef)(null),[h,f]=(0,r.useState)(c?{}:u),[g,x]=(0,r.useState)(c?"entered":"exited"),v=e=>{(0,o.flushSync)(()=>f(e))},b=e=>{v(t=>({...t,...e}))},y=t=>{let a=e??function(e){if(!e||"string"==typeof e)return 0;let t=e/36;return Math.round((4+15*t**.25+t/5)*10)}(t);return{transition:`height ${a}ms ${l}, opacity ${a}ms ${l}`}};(0,t.useDidUpdate)(()=>{0!==e&&m(),c?window.requestAnimationFrame(()=>{(0,o.flushSync)(()=>x("entering")),b({willChange:"height",display:"block",overflow:"hidden"}),window.requestAnimationFrame(()=>{let e=n(p);b({...y(e),height:e})})}):window.requestAnimationFrame(()=>{(0,o.flushSync)(()=>x("exiting"));let e=n(p);b({...y(e),willChange:"height",height:e}),window.requestAnimationFrame(()=>b({height:0,overflow:"hidden"}))})},[c]);let w=e=>{if(e.target===p.current&&"height"===e.propertyName)if(c){let e=n(p);e===h.height?v({}):b({height:e}),x("entered"),i?.()}else 0===h.height&&(v(u),x("exited"),i?.())};return{state:g,getCollapseProps:e=>({"aria-hidden":!c,inert:!c,ref:(0,a.mergeRefs)(p,e?.ref),onTransitionEnd:w,style:{boxSizing:"border-box",...e?.style,...h}})}}],556457),e.s(["useHorizontalCollapse",0,function({transitionDuration:e,transitionTimingFunction:n="ease",onTransitionEnd:i,onTransitionStart:s,expanded:c,keepMounted:d}){let u={width:0,overflow:"hidden",...d?{}:{display:"none"}},m=(0,r.useEffectEvent)(()=>s?.()),p=(0,r.useRef)(null),[h,f]=(0,r.useState)(c?{}:u),[g,x]=(0,r.useState)(c?"entered":"exited"),v=e=>{(0,o.flushSync)(()=>f(e))},b=e=>{v(t=>({...t,...e}))},y=t=>{let a=e??function(e){if(!e||"string"==typeof e)return 0;let t=e/36;return Math.round((4+15*t**.25+t/5)*10)}(t);return{transition:`width ${a}ms ${n}, opacity ${a}ms ${n}`}};(0,t.useDidUpdate)(()=>{0!==e&&m(),c?window.requestAnimationFrame(()=>{(0,o.flushSync)(()=>x("entering")),b({willChange:"width",display:"block",overflow:"hidden"}),window.requestAnimationFrame(()=>{let e=l(p);b({...y(e),width:e})})}):window.requestAnimationFrame(()=>{(0,o.flushSync)(()=>x("exiting"));let e=l(p);b({...y(e),willChange:"width",width:e}),window.requestAnimationFrame(()=>b({width:0,overflow:"hidden"}))})},[c]);let w=e=>{if(e.target===p.current&&"width"===e.propertyName)if(c){let e=l(p);e===h.width?v({}):b({width:e}),x("entered"),i?.()}else 0===h.width&&(v(u),x("exited"),i?.())};return{state:g,getCollapseProps:e=>({"aria-hidden":!c,inert:!c,ref:(0,a.mergeRefs)(p,e?.ref),onTransitionEnd:w,style:{boxSizing:"border-box",...e?.style,...h}})}}],103738)},586692,e=>{"use strict";var t=e.i(330693),a=e.i(951254),r=e.i(44091),o=e.i(634917),n=e.i(275519),l=e.i(232471),i=e.i(191788),s=e.i(556457),c=e.i(103738),d=e.i(779861),u=e.i(391398);let m={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0,orientation:"vertical"},p=(0,n.factory)(e=>{let n,{children:p,expanded:h,transitionDuration:f,transitionTimingFunction:g,style:x,onTransitionEnd:v,onTransitionStart:b,animateOpacity:y,keepMounted:w,ref:S,orientation:k,...D}=(0,r.useProps)("Collapse",m,e),M=(0,t.useMantineEnv)(),j=(0,a.useMantineTheme)(),C=(0,d.useReducedMotion)(),A=j.respectReducedMotion&&C?0:f,V=("horizontal"===k?c.useHorizontalCollapse:s.useCollapse)({expanded:h,transitionDuration:A,transitionTimingFunction:g,onTransitionEnd:v,onTransitionStart:b,keepMounted:!1});if(0===A)return!0===w&&"test"!==M?(0,u.jsx)(i.Activity,{mode:h?"visible":"hidden",children:(0,u.jsx)(l.Box,{...D,children:p})}):h?(0,u.jsx)(l.Box,{...D,children:p}):null;let Y="exited"===V.state;return n=!1===w?Y?null:p:!0===w?(0,u.jsx)(i.Activity,{mode:Y?"hidden":"visible",children:p}):p,(0,u.jsx)(l.Box,{...D,...V.getCollapseProps({style:{opacity:h||!y?1:0,transition:y?`opacity ${A}ms ${g}`:"none",...(0,o.getStyleObject)(x,j)},ref:S}),children:n})});p.displayName="@mantine/core/Collapse",e.s(["Collapse",0,p])},89495,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128ZM60,112a16,16,0,1,0,16,16A16,16,0,0,0,60,112Zm136,0a16,16,0,1,0,16,16A16,16,0,0,0,196,112Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M240,96v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H224A16,16,0,0,1,240,96Z",opacity:"0.2"}),t.createElement("path",{d:"M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A16,16,0,0,0,224,80ZM60,140a12,12,0,1,1,12-12A12,12,0,0,1,60,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,196,140Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM60,118a10,10,0,1,0,10,10A10,10,0,0,0,60,118Zm136,0a10,10,0,1,0,10,10A10,10,0,0,0,196,118Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm-76-8a8,8,0,1,0,8,8A8,8,0,0,0,60,120Zm136,0a8,8,0,1,0,8,8A8,8,0,0,0,196,120Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(a.default,{ref:o,...e,weights:r}));o.displayName="DotsThreeIcon",e.s(["DotsThreeIcon",0,o],89495)},604955,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M251,123.13c-.37-.81-9.13-20.26-28.48-39.61C196.63,57.67,164,44,128,44S59.37,57.67,33.51,83.52C14.16,102.87,5.4,122.32,5,123.13a12.08,12.08,0,0,0,0,9.75c.37.82,9.13,20.26,28.49,39.61C59.37,198.34,92,212,128,212s68.63-13.66,94.48-39.51c19.36-19.35,28.12-38.79,28.49-39.61A12.08,12.08,0,0,0,251,123.13Zm-46.06,33C183.47,177.27,157.59,188,128,188s-55.47-10.73-76.91-31.88A130.36,130.36,0,0,1,29.52,128,130.45,130.45,0,0,1,51.09,99.89C72.54,78.73,98.41,68,128,68s55.46,10.73,76.91,31.89A130.36,130.36,0,0,1,226.48,128,130.45,130.45,0,0,1,204.91,156.12ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,148Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Zm0,112a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),t.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M245.48,125.57c-.34-.78-8.66-19.23-27.24-37.81C201,70.54,171.38,50,128,50S55,70.54,37.76,87.76c-18.58,18.58-26.9,37-27.24,37.81a6,6,0,0,0,0,4.88c.34.77,8.66,19.22,27.24,37.8C55,185.47,84.62,206,128,206s73-20.53,90.24-37.75c18.58-18.58,26.9-37,27.24-37.8A6,6,0,0,0,245.48,125.57ZM128,194c-31.38,0-58.78-11.42-81.45-33.93A134.77,134.77,0,0,1,22.69,128,134.56,134.56,0,0,1,46.55,95.94C69.22,73.42,96.62,62,128,62s58.78,11.42,81.45,33.94A134.56,134.56,0,0,1,233.31,128C226.94,140.21,195,194,128,194Zm0-112a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M243.66,126.38c-.34-.76-8.52-18.89-26.83-37.2C199.87,72.22,170.7,52,128,52S56.13,72.22,39.17,89.18c-18.31,18.31-26.49,36.44-26.83,37.2a4.08,4.08,0,0,0,0,3.25c.34.77,8.52,18.89,26.83,37.2,17,17,46.14,37.17,88.83,37.17s71.87-20.21,88.83-37.17c18.31-18.31,26.49-36.43,26.83-37.2A4.08,4.08,0,0,0,243.66,126.38Zm-32.7,35c-23.07,23-51,34.62-83,34.62s-59.89-11.65-83-34.62A135.71,135.71,0,0,1,20.44,128,135.69,135.69,0,0,1,45,94.62C68.11,71.65,96,60,128,60s59.89,11.65,83,34.62A135.79,135.79,0,0,1,235.56,128,135.71,135.71,0,0,1,211,161.38ZM128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(a.default,{ref:o,...e,weights:r}));o.displayName="EyeIcon",e.s(["EyeIcon",0,o],604955)},604531,e=>{"use strict";var t=e.i(648863),a=e.i(232471),r=e.i(883364),o=e.i(391398),n=e.i(56206);function l({className:e,children:t,...i}){return(0,o.jsx)(a.Box,{className:(0,n.default)("m_a4dc100e",e),...i,children:(0,o.jsx)(r.Text,{className:"m_f6c78959",children:t})})}let i=[,,,,,].fill(0).map((e,t)=>(0,o.jsx)(l,{children:t+1},t));var s=e.i(140763);let c={type:"configurator",component:function(e){return(0,o.jsx)(s.SimpleGrid,{...e,id:"grid-configurator",children:i})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid{{props}}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  )
}
`,controls:[{prop:"cols",type:"number",initialValue:3,min:1,max:6,step:1,libraryValue:"__"},{prop:"spacing",type:"size",initialValue:"md",libraryValue:"md"},{prop:"verticalSpacing",type:"size",initialValue:"md",libraryValue:"md"}]},d={type:"code",component:function(){return(0,o.jsx)(s.SimpleGrid,{cols:{base:1,sm:2,lg:5},spacing:{base:10,sm:"xl"},verticalSpacing:{base:"md",sm:"xl"},children:i})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2, lg: 5 }}
      spacing={{ base: 10, sm: 'xl' }}
      verticalSpacing={{ base: 'md', sm: 'xl' }}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
`},u={type:"code",component:function(){return(0,o.jsx)("div",{style:{resize:"horizontal",overflow:"hidden",maxWidth:"100%"},children:(0,o.jsx)(s.SimpleGrid,{type:"container",cols:{base:1,"300px":2,"500px":5},spacing:{base:10,"300px":"xl"},children:i})})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    // Wrapper div is added for demonstration purposes only,
    // it is not required in real projects
    <div style={{ resize: 'horizontal', overflow: 'hidden', maxWidth: '100%' }}>
      <SimpleGrid
        type="container"
        cols={{ base: 1, '300px': 2, '500px': 5 }}
        spacing={{ base: 10, '300px': 'xl' }}
      >
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
      </SimpleGrid>
    </div>
  );
}
`},m={type:"code",component:function(){return(0,o.jsx)(s.SimpleGrid,{minColWidth:"200px",children:i})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid minColWidth="200px">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
`};var p=e.i(671640);let h=`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* auto-fill: empty tracks are preserved, items do not stretch */}
      <SimpleGrid minColWidth="200px" autoFlow="auto-fill">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </SimpleGrid>

      {/* auto-fit: empty tracks are collapsed, items stretch to fill the row */}
      <SimpleGrid minColWidth="200px" autoFlow="auto-fit">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </SimpleGrid>
    </>
  );
}
`,f=[,,,].fill(0).map((e,t)=>(0,o.jsx)(l,{children:t+1},t)),g={type:"code",component:function(){return(0,o.jsxs)(p.Stack,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(r.Text,{mb:"xs",fw:500,children:"auto-fill"}),(0,o.jsx)(s.SimpleGrid,{minColWidth:"200px",autoFlow:"auto-fill",children:f})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(r.Text,{mb:"xs",fw:500,children:"auto-fit"}),(0,o.jsx)(s.SimpleGrid,{minColWidth:"200px",autoFlow:"auto-fit",children:f})]})]})},code:h},x={type:"code",component:function(){return(0,o.jsx)(s.SimpleGrid,{cols:3,autoRows:"minmax(100px, auto)",children:i})},code:`
import { SimpleGrid } from '@mantine/core';

function Demo() {
  return (
    <SimpleGrid cols={3} autoRows="minmax(100px, auto)">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
    </SimpleGrid>
  );
}
`};var v=(0,t.__exportAll)({autoFlow:()=>g,autoRows:()=>x,container:()=>u,minColWidth:()=>m,responsive:()=>d,usage:()=>c});e.s(["SimpleGridDemos",0,v],604531)},878166,e=>{"use strict";var t=e.i(494834),a=e.i(205693),r=e.i(422696),o=e.i(541772);e.s(["useDatesInput",0,function({type:e,value:n,defaultValue:l,onChange:i,locale:s,format:c,closeOnChange:d,sortDates:u,labelSeparator:m,valueFormatter:p}){let h=(0,a.useDatesContext)(),[f,g]=(0,o.useDisclosure)(!1),[x,v]=(0,r.useUncontrolledDates)({type:e,value:n,defaultValue:l,onChange:i}),b=function({formatter:e,...a}){return(e||function({type:e,date:a,locale:r,format:o,labelSeparator:n}){let l=e=>(0,t.default)(e).locale(r).format(o);if("default"===e)return null===a?"":l(a);if("multiple"===e)return a.map(l).join(", ");if("range"===e&&Array.isArray(a)){if(a[0]&&a[1])return`${l(a[0])} ${n} ${l(a[1])}`;if(a[0])return`${l(a[0])} ${n} `}return""})(a)}({type:e,date:x,locale:h.getLocale(s),format:c,labelSeparator:h.getLabelSeparator(m),formatter:p}),y=a=>{d&&("default"===e&&g.close(),"range"===e&&a[0]&&a[1]&&g.close()),u&&"multiple"===e?v([...a].sort((e,a)=>(0,t.default)(e).isAfter((0,t.default)(a))?1:-1)):v(a)};return{_value:x,setValue:y,onClear:()=>y("range"===e?[null,null]:"multiple"===e?[]:null),shouldClear:"range"===e?!!x[0]:"multiple"===e?x.length>0:null!==x,formattedValue:b,dropdownOpened:f,dropdownHandlers:g}}],878166)},267073,e=>{"use strict";var t=e.i(568827),a=e.i(782681),r=e.i(878166),o=e.i(831474),n=e.i(777141),l=e.i(391398),i=e.i(275519),s=e.i(44091),c=e.i(62904);let d={type:"default",size:"sm",valueFormat:"MMMM D, YYYY",closeOnChange:!0,sortDates:!0,dropdownType:"popover"},u=(0,i.factory)(e=>{let i=(0,s.useProps)(["Input","InputWrapper","DatePickerInput"],d,e),{type:u,value:m,defaultValue:p,onChange:h,valueFormat:f,labelSeparator:g,locale:x,classNames:v,styles:b,unstyled:y,closeOnChange:w,size:S,variant:k,dropdownType:D,sortDates:M,minDate:j,maxDate:C,vars:A,defaultDate:V,valueFormatter:Y,presets:P,attributes:I,...T}=i,{resolvedClassNames:H,resolvedStyles:L}=(0,c.useResolvedStylesApi)({classNames:v,styles:b,props:i}),{calendarProps:B,others:E}=(0,o.pickCalendarProps)(T),{_value:R,setValue:Z,formattedValue:z,dropdownHandlers:F,dropdownOpened:W,onClear:N,shouldClear:_}=(0,r.useDatesInput)({type:u,value:m,defaultValue:p,onChange:h,locale:x,format:f,labelSeparator:g,closeOnChange:w,sortDates:M,valueFormatter:Y}),G=Array.isArray(R)?R[0]||V:R||V;return(0,l.jsx)(a.PickerInputBase,{formattedValue:z,dropdownOpened:W,dropdownHandlers:F,classNames:H,styles:L,unstyled:y,onClear:N,shouldClear:_,value:R,size:S,variant:k,dropdownType:D,...E,type:u,__staticSelector:"DatePickerInput",attributes:I,children:(0,l.jsx)(n.DatePicker,{...B,size:S,variant:k,type:u,value:R,defaultDate:G||(0,t.getDefaultClampedDate)({maxDate:C,minDate:j}),onChange:Z,locale:x,classNames:H,styles:L,unstyled:y,__staticSelector:"DatePickerInput",__stopPropagation:"popover"===D,minDate:j,maxDate:C,presets:P,attributes:I})})});u.classes={...a.PickerInputBase.classes,...n.DatePicker.classes},u.displayName="@mantine/dates/DatePickerInput",e.s(["DatePickerInput",0,u])},70530,e=>{"use strict";var t=e.i(391398),a=e.i(494834),r=e.i(191788),o=e.i(632036);let n=({type:e,date:t,locale:r,format:o})=>{if("multiple"===e&&Array.isArray(t)){if(1===t.length)return(0,a.default)(t[0]).locale(r).format(o);if(t.length>1)return`${t.length} dates selected`}return""};e.s(["getSharedPickerInputDemos",0,function(e){let l,i,s,c,d,u,m,p;return{usage:{type:"code",centered:!0,maxWidth:400,code:(l=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${l} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <${l}
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`),component:()=>{let[a,o]=(0,r.useState)(null);return(0,t.jsx)(e,{label:"Pick date",placeholder:"Pick date",value:a,onChange:o})}},multiple:{type:"code",centered:!0,maxWidth:400,code:(i=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${i} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string[]>([]);
  return (
    <${i}
      type="multiple"
      label="Pick dates"
      placeholder="Pick dates"
      value={value}
      onChange={setValue}
    />
  );
}
`),component:()=>{let[a,o]=(0,r.useState)([]);return(0,t.jsx)(e,{type:"multiple",label:"Pick dates",placeholder:"Pick dates",value:a,onChange:o})}},range:{type:"code",centered:!0,maxWidth:400,code:(s=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${s} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <${s}
      type="range"
      label="Pick dates range"
      placeholder="Pick dates range"
      value={value}
      onChange={setValue}
    />
  );
}
`),component:()=>{let[a,o]=(0,r.useState)([null,null]);return(0,t.jsx)(e,{type:"range",label:"Pick dates range",placeholder:"Pick dates range",value:a,onChange:o})}},configurator:{type:"configurator",component:e,centered:!0,maxWidth:400,code:(c=e.displayName.replace("@mantine/dates/",""),`import { ${c} } from '@mantine/dates';


function Demo() {
  return (
    <${c}
      {{props}}
    />
  );
}
`),controls:[{prop:"placeholder",type:"string",initialValue:"Pick date",libraryValue:"__"},{prop:"label",type:"string",initialValue:"Pick date",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"variant",type:"select",data:[{label:"default",value:"default"},{label:"filled",value:"filled"},{label:"unstyled",value:"unstyled"}],initialValue:"default",libraryValue:"default"},{prop:"radius",type:"size",initialValue:"md",libraryValue:"md"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]},modal:{type:"code",centered:!0,maxWidth:400,code:(d=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${d} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <${d}
      dropdownType="modal"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`),component:()=>{let[a,o]=(0,r.useState)(null);return(0,t.jsx)(e,{dropdownType:"modal",label:"Pick date",placeholder:"Pick date",value:a,onChange:o})}},icon:{type:"code",centered:!0,maxWidth:400,code:(u=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { CalendarBlankIcon } from '@phosphor-icons/react';
import { ${u} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  const icon = <CalendarBlankIcon size={18} />;
  return (
    <${u}
      leftSection={<CalendarBlankIcon size={18} />}
      leftSectionPointerEvents="none"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`),component:()=>{let[a,n]=(0,r.useState)(null);return(0,t.jsx)(e,{leftSection:(0,t.jsx)(o.CalendarBlankIcon,{size:18}),leftSectionPointerEvents:"none",label:"Pick date",placeholder:"Pick date",value:a,onChange:n})}},clearable:{type:"code",centered:!0,maxWidth:400,code:(m=e.displayName.replace("@mantine/dates/",""),`
import dayjs from 'dayjs';
import { ${m} } from '@mantine/dates';

function Demo() {
  return (
    <${m}
      clearable
      defaultValue={dayjs().format('YYYY-MM-DD')}
      label="Pick date"
      placeholder="Pick date"
    />
  );
}
`),component:()=>(0,t.jsx)(e,{clearable:!0,defaultValue:(0,a.default)().format("YYYY-MM-DD"),label:"Pick date",placeholder:"Pick date"})},valueFormatter:{type:"code",centered:!0,maxWidth:400,code:(p=e.displayName.replace("@mantine/dates/",""),`
import dayjs from 'dayjs';
import { useState } from 'react';
import { ${p}, DateFormatter } from '@mantine/dates';

const formatter: DateFormatter = ({ type, date, locale, format }) => {
  if (type === 'multiple' && Array.isArray(date)) {
    if (date.length === 1) {
      return dayjs(date[0]).locale(locale).format(format);
    }

    if (date.length > 1) {
      return \`\${date.length} dates selected\`;
    }

    return '';
  }

  return '';
};

function Demo() {
  const [value, setValue] = useState<string[]>([]);

  return (
    <${p}
      label="Pick 2 dates or more"
      placeholder="Pick 2 dates or more"
      value={value}
      onChange={setValue}
      type="multiple"
      valueFormatter={formatter}
    />
  );
}
`),component:()=>{let[a,o]=(0,r.useState)([]);return(0,t.jsx)(e,{label:"Pick 2 dates or more",placeholder:"Pick 2 dates or more",value:a,onChange:o,type:"multiple",valueFormatter:n})}}}}],70530)},403360,e=>{"use strict";var t=e.i(648863),a=e.i(70530),r=e.i(931882),o=e.i(671640),n=e.i(391398),l=e.i(267073);let i={type:"code",component:function(){return(0,n.jsxs)(o.Stack,{children:[(0,n.jsx)(l.DatePickerInput,{label:"clearSectionMode='both' (default)",placeholder:"Pick date",defaultValue:new Date,clearable:!0,rightSection:(0,n.jsx)(r.CaretDownIcon,{size:16}),clearSectionMode:"both"}),(0,n.jsx)(l.DatePickerInput,{label:"clearSectionMode='rightSection'",placeholder:"Pick date",defaultValue:new Date,clearable:!0,rightSection:(0,n.jsx)(r.CaretDownIcon,{size:16}),clearSectionMode:"rightSection"}),(0,n.jsx)(l.DatePickerInput,{label:"clearSectionMode='clear'",placeholder:"Pick date",defaultValue:new Date,clearable:!0,rightSection:(0,n.jsx)(r.CaretDownIcon,{size:16}),clearSectionMode:"clear"})]})},code:`
import { CaretDownIcon } from '@phosphor-icons/react';
import { Stack } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <Stack>
      <DatePickerInput
        label="clearSectionMode='both' (default)"
        placeholder="Pick date"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <DatePickerInput
        label="clearSectionMode='rightSection'"
        placeholder="Pick date"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <DatePickerInput
        label="clearSectionMode='clear'"
        placeholder="Pick date"
        defaultValue={new Date()}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
`,maxWidth:340,centered:!0},s={type:"code",centered:!0,maxWidth:400,component:function(){return(0,n.jsx)(l.DatePickerInput,{valueFormat:"YYYY MMM DD",type:"multiple",label:"Pick date",placeholder:"Pick date"})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      valueFormat="YYYY MMM DD"
      type="multiple"
      label="Pick date"
      placeholder="Pick date"
    />
  );
}
`},c={type:"code",centered:!0,maxWidth:400,component:function(){return(0,n.jsx)(l.DatePickerInput,{valueFormat:"YYYY MMM DD",type:"multiple",label:"Disabled",placeholder:"Pick date",disabled:!0})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      valueFormat="YYYY MMM DD"
      type="multiple"
      label="Disabled"
      placeholder="Pick date"
      disabled
    />
  );
}
`};var d=e.i(494834);let u={type:"code",centered:!0,maxWidth:400,component:function(){return(0,n.jsx)(l.DatePickerInput,{label:"With presets",placeholder:"Select date",presets:[{value:(0,d.default)().subtract(1,"day").format("YYYY-MM-DD"),label:"Yesterday"},{value:(0,d.default)().format("YYYY-MM-DD"),label:"Today"},{value:(0,d.default)().add(1,"day").format("YYYY-MM-DD"),label:"Tomorrow"},{value:(0,d.default)().add(1,"month").format("YYYY-MM-DD"),label:"Next month"},{value:(0,d.default)().add(1,"year").format("YYYY-MM-DD"),label:"Next year"},{value:(0,d.default)().subtract(1,"month").format("YYYY-MM-DD"),label:"Last month"},{value:(0,d.default)().subtract(1,"year").format("YYYY-MM-DD"),label:"Last year"}]})},code:`
import dayjs from 'dayjs';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      label="With presets"
      placeholder="Select date"
      presets={[
        { value: dayjs().subtract(1, 'day').format('YYYY-MM-DD'), label: 'Yesterday' },
        { value: dayjs().format('YYYY-MM-DD'), label: 'Today' },
        { value: dayjs().add(1, 'day').format('YYYY-MM-DD'), label: 'Tomorrow' },
        { value: dayjs().add(1, 'month').format('YYYY-MM-DD'), label: 'Next month' },
        { value: dayjs().add(1, 'year').format('YYYY-MM-DD'), label: 'Next year' },
        { value: dayjs().subtract(1, 'month').format('YYYY-MM-DD'), label: 'Last month' },
        { value: dayjs().subtract(1, 'year').format('YYYY-MM-DD'), label: 'Last year' },
      ]}
    />
  );
}
`},m={type:"code",centered:!0,maxWidth:400,component:function(){let e=(0,d.default)();return(0,n.jsx)(l.DatePickerInput,{type:"range",label:"With presets",placeholder:"Select date",presets:[{value:[e.subtract(2,"day").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"Last two days"},{value:[e.subtract(7,"day").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"Last 7 days"},{value:[e.startOf("month").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"This month"},{value:[e.subtract(1,"month").startOf("month").format("YYYY-MM-DD"),e.subtract(1,"month").endOf("month").format("YYYY-MM-DD")],label:"Last month"},{value:[e.subtract(1,"year").startOf("year").format("YYYY-MM-DD"),e.subtract(1,"year").endOf("year").format("YYYY-MM-DD")],label:"Last year"}]})},code:`
import dayjs from 'dayjs';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  const today = dayjs();

  return (
    <DatePickerInput
      type="range"
      presets={[
        {
          value: [today.subtract(2, 'day').format('YYYY-MM-DD'), today.format('YYYY-MM-DD')],
          label: 'Last two days',
        },
        {
          value: [today.subtract(7, 'day').format('YYYY-MM-DD'), today.format('YYYY-MM-DD')],
          label: 'Last 7 days',
        },
        {
          value: [today.startOf('month').format('YYYY-MM-DD'), today.format('YYYY-MM-DD')],
          label: 'This month',
        },
        {
          value: [
            today.subtract(1, 'month').startOf('month').format('YYYY-MM-DD'),
            today.subtract(1, 'month').endOf('month').format('YYYY-MM-DD'),
          ],
          label: 'Last month',
        },
        {
          value: [
            today.subtract(1, 'year').startOf('year').format('YYYY-MM-DD'),
            today.subtract(1, 'year').endOf('year').format('YYYY-MM-DD'),
          ],
          label: 'Last year',
        },
      ]}
    />
  );
}
`,defaultExpanded:!1};var p=e.i(191788);let h={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,p.useState)(null);return(0,n.jsx)(l.DatePickerInput,{label:"Pick date",placeholder:"Pick date",value:e,onChange:t,minDate:new Date(2022,1,10),maxDate:new Date(2022,1,28)})},code:`
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePickerInput
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
      minDate={new Date(2022, 1, 10)}
      maxDate={new Date(2022, 1, 28)}
    />
  );
}
`},f=e=>{let t=(0,d.default)(e);return 5===t.day()&&13===t.date()?{style:{backgroundColor:"var(--mantine-color-red-filled)",color:"var(--mantine-color-white)"}}:{}},g=e=>{let t=(0,d.default)(e);return t.year()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:t.year()===new Date().getFullYear()+1?{disabled:!0}:{}},x=e=>{let t=(0,d.default)(e);return 1===t.month()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:5===t.month()?{disabled:!0}:{}},v={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,p.useState)(null);return(0,n.jsx)(l.DatePickerInput,{label:"Pick date",placeholder:"Pick date",value:e,onChange:t,getDayProps:f,getYearControlProps:g,getMonthControlProps:x})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DatePickerInput, DatePickerInputProps } from '@mantine/dates';

const getDayProps: DatePickerInputProps['getDayProps'] = (date) => {
  const d = dayjs(date);

  if (d.day() === 5 && d.date() === 13) {
    return {
      style: {
        backgroundColor: 'var(--mantine-color-red-filled)',
        color: 'var(--mantine-color-white)',
      },
    };
  }

  return {};
};

const getYearControlProps: DatePickerInputProps['getYearControlProps'] = (date) => {
  const d = dayjs(date);

  if (d.year() === new Date().getFullYear()) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (d.year() === new Date().getFullYear() + 1) {
    return { disabled: true };
  }

  return {};
};

const getMonthControlProps: DatePickerInputProps['getMonthControlProps'] = (date) => {
  const d = dayjs(date);
  if (d.month() === 1) {
    return {
      style: {
        color: 'var(--mantine-color-blue-filled)',
        fontWeight: 700,
      },
    };
  }

  if (d.month() === 5) {
    return { disabled: true };
  }

  return {};
};

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePickerInput
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
      getDayProps={getDayProps}
      getYearControlProps={getYearControlProps}
      getMonthControlProps={getMonthControlProps}
    />
  );
}
`};var b=e.i(393353);let y=e=>{let t=(0,d.default)(e).date();return(0,n.jsx)(b.Indicator,{size:6,color:"red",offset:-5,disabled:16!==t,children:(0,n.jsx)("div",{children:t})})},w={type:"code",centered:!0,maxWidth:400,component:function(){return(0,n.jsx)(l.DatePickerInput,{label:"Pick date",placeholder:"Pick date",renderDay:y})},code:`
import dayjs from 'dayjs';
import { Indicator } from '@mantine/core';
import { DatePickerInput, DatePickerInputProps } from '@mantine/dates';

const dayRenderer: DatePickerInputProps['renderDay'] = (date) => {
  const day = dayjs(date).date();
  return (
    <Indicator size={6} color="red" offset={-5} disabled={day !== 16}>
      <div>{day}</div>
    </Indicator>
  );
};

function Demo() {
  return (
    <DatePickerInput
      label="Pick date"
      placeholder="Pick date"
      renderDay={dayRenderer}
    />
  );
}
`},S={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,p.useState)(null);return(0,n.jsx)(l.DatePickerInput,{label:"Pick date",placeholder:"Pick date",value:e,onChange:t,excludeDate:e=>0===new Date(e).getDay()||6===new Date(e).getDay()})},code:`
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePickerInput
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
      excludeDate={(date) => new Date(date).getDay() === 0 || new Date(date).getDay() === 6}
    />
  );
}
`},k={type:"code",centered:!0,maxWidth:400,component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.DatePickerInput,{defaultLevel:"decade",label:"Decade level",placeholder:"Decade level",mb:"md"}),(0,n.jsx)(l.DatePickerInput,{defaultLevel:"year",label:"Year level",placeholder:"Year level"})]})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <>
      <DatePickerInput
        defaultLevel="decade"
        label="Decade level"
        placeholder="Decade level"
        mb="md"
      />
      <DatePickerInput
        defaultLevel="year"
        label="Year level"
        placeholder="Year level"
      />
    </>
  );
}
`},D={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,p.useState)(null);return(0,n.jsx)(l.DatePickerInput,{hideOutsideDates:!0,label:"Pick date",placeholder:"Pick date",value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePickerInput
      hideOutsideDates
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`},M={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,p.useState)(null);return(0,n.jsx)(l.DatePickerInput,{label:"Pick date",placeholder:"Pick date",value:e,onChange:t,hideWeekdays:!0})},code:`
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePickerInput
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
      hideWeekdays
    />
  );
}
`},j={type:"code",centered:!0,maxWidth:400,component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.DatePickerInput,{firstDayOfWeek:0,label:"Sunday as first day of week",placeholder:"Sunday as first day of week",mb:"md"}),(0,n.jsx)(l.DatePickerInput,{firstDayOfWeek:6,label:"Saturday as first day of week",placeholder:"Saturday as first day of week"})]})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <>
      <DatePickerInput
        firstDayOfWeek={0}
        label="Sunday as first day of week"
        placeholder="Sunday as first day of week"
        mb="md"
      />
      <DatePickerInput
        firstDayOfWeek={6}
        label="Saturday as first day of week"
        placeholder="Saturday as first day of week"
      />
    </>
  );
}
`},C={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,p.useState)(null);return(0,n.jsx)(l.DatePickerInput,{defaultLevel:"decade",decadeLabelFormat:"YY",yearLabelFormat:"YYYY [year]",monthLabelFormat:"MM/YY",label:"Pick date",placeholder:"Pick date",value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePickerInput
      defaultLevel="decade"
      decadeLabelFormat="YY"
      yearLabelFormat="YYYY [year]"
      monthLabelFormat="MM/YY"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`},A={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,p.useState)(null);return(0,n.jsx)(l.DatePickerInput,{monthsListFormat:"MM",yearsListFormat:"YY",label:"Pick date",placeholder:"Pick date",value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePickerInput
      monthsListFormat="MM"
      yearsListFormat="YY"
      label="Pick date"
      placeholder="Pick date"
      value={value}
      onChange={setValue}
    />
  );
}
`},V={type:"code",centered:!0,maxWidth:400,component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.DatePickerInput,{maxLevel:"year",label:"Year max level",placeholder:"Year max level",mb:"md"}),(0,n.jsx)(l.DatePickerInput,{maxLevel:"month",label:"Month max level",placeholder:"Month max level"})]})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <>
      <DatePickerInput
        maxLevel="year"
        label="Year max level"
        placeholder="Year max level"
        mb="md"
      />
      <DatePickerInput
        maxLevel="month"
        label="Month max level"
        placeholder="Month max level"
      />
    </>
  );
}
`},Y={type:"code",centered:!0,maxWidth:400,component:function(){return(0,n.jsx)(l.DatePickerInput,{weekendDays:[1,2],label:"Weekend days are Monday and Tuesday",placeholder:"Pick date"})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      weekendDays={[1, 2]}
      label="Weekend days are Monday and Tuesday"
      placeholder="Pick date"
    />
  );
}
`},P={type:"code",centered:!0,maxWidth:400,component:function(){return(0,n.jsx)(l.DatePickerInput,{withWeekNumbers:!0,label:"With week numbers",placeholder:"Pick date"})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      withWeekNumbers
      label="With week numbers"
      placeholder="Pick date"
    />
  );
}
`},I={type:"code",centered:!0,maxWidth:400,component:function(){return(0,n.jsx)(l.DatePickerInput,{defaultDate:new Date(2022,1),headerControlsOrder:["level","previous","next"],styles:{calendarHeaderLevel:{justifyContent:"flex-start",paddingInlineStart:8}},label:"Header controls order",placeholder:"Header controls order"})},code:`
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <DatePickerInput
      defaultDate={new Date(2022, 1)}
      headerControlsOrder={['level', 'previous', 'next']}
      styles={{
        calendarHeaderLevel: {
          justifyContent: 'flex-start',
          paddingInlineStart: 8,
        },
      }}
      label="Header controls order"
      placeholder="Header controls order"
    />
  );
}
`};var T=(0,t.__exportAll)({clearSectionMode:()=>i,clearable:()=>z,configurator:()=>E,controlProps:()=>v,defaultLevel:()=>k,disabled:()=>c,excludeDate:()=>S,firstDayOfWeek:()=>j,headerControlsOrder:()=>I,hideOutsideDates:()=>D,hideWeekdays:()=>M,icon:()=>Z,labelFormat:()=>C,listFormat:()=>A,maxLevel:()=>V,minMax:()=>h,modal:()=>R,multiple:()=>L,presets:()=>u,presetsRange:()=>m,range:()=>B,renderDay:()=>w,usage:()=>H,valueFormat:()=>s,valueFormatter:()=>F,weekendDays:()=>Y,withWeekNumbers:()=>P});let{usage:H,multiple:L,range:B,configurator:E,modal:R,icon:Z,clearable:z,valueFormatter:F}=(0,a.getSharedPickerInputDemos)(l.DatePickerInput);e.s(["DatePickerInputDemos",0,T],403360)},975419,e=>{"use strict";var t=e.i(648863),a=e.i(37541),r=e.i(391398);let o={type:"configurator",component:e=>(0,r.jsx)(a.Checkbox,{...e,defaultChecked:!0}),code:`
import { Checkbox } from '@mantine/core';


function Demo() {
  return (
    <Checkbox
      defaultChecked
      {{props}}
    />
  );
}
`,centered:!0,controls:[{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I agree to sell my privacy",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"outline",label:"Outline"}],initialValue:"filled",libraryValue:"filled"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"indeterminate",type:"boolean",initialValue:!1,libraryValue:!1}]};var n=e.i(232471),l=e.i(57807),i=e.i(191788);let s=`
import { useListState, randomId } from '@mantine/hooks';
import { Checkbox } from '@mantine/core';

const initialValues = [
  { label: 'Receive email notifications', checked: false, key: randomId() },
  { label: 'Receive sms notifications', checked: false, key: randomId() },
  { label: 'Receive push notifications', checked: false, key: randomId() },
];

export function IndeterminateCheckbox() {
  const [values, handlers] = useListState(initialValues);

  const allChecked = values.every((value) => value.checked);
  const indeterminate = values.some((value) => value.checked) && !allChecked;

  const items = values.map((value, index) => (
    <Checkbox
      mt="xs"
      ml={33}
      label={value.label}
      key={value.key}
      checked={value.checked}
      onChange={(event) => handlers.setItemProp(index, 'checked', event.currentTarget.checked)}
    />
  ));

  return (
    <>
      <Checkbox
        checked={allChecked}
        indeterminate={indeterminate}
        label="Receive all notifications"
        onChange={() =>
          handlers.setState((current) =>
            current.map((value) => ({ ...value, checked: !allChecked }))
          )
        }
      />
      {items}
    </>
  );
}
`,c=[{label:"Receive email notifications",checked:!1,key:(0,l.randomId)()},{label:"Receive sms notifications",checked:!1,key:(0,l.randomId)()},{label:"Receive push notifications",checked:!1,key:(0,l.randomId)()}],d={type:"code",code:s,component:function(){let[e,t]=function(e=[]){let[t,a]=(0,i.useState)(e),r=(0,i.useCallback)((...e)=>a(t=>[...t,...e]),[]),o=(0,i.useCallback)((...e)=>a(t=>[...e,...t]),[]),n=(0,i.useCallback)((e,...t)=>a(a=>[...a.slice(0,e),...t,...a.slice(e)]),[]),l=(0,i.useCallback)(e=>a(t=>t.map((t,a)=>e(t,a))),[]),s=(0,i.useCallback)((...e)=>a(t=>t.filter((t,a)=>!e.includes(a))),[]),c=(0,i.useCallback)(()=>a(e=>{let t=[...e];return t.pop(),t}),[]),d=(0,i.useCallback)(()=>a(e=>{let t=[...e];return t.shift(),t}),[]),u=(0,i.useCallback)(({from:e,to:t})=>a(a=>{let r=[...a],o=a[e];return r.splice(e,1),r.splice(t,0,o),r}),[]),m=(0,i.useCallback)(({from:e,to:t})=>a(a=>{let r=[...a],o=r[e],n=r[t];return r.splice(t,1,o),r.splice(e,1,n),r}),[]),p=(0,i.useCallback)((e,t)=>a(a=>{let r=[...a];return r[e]=t,r}),[]),h=(0,i.useCallback)((e,t,r)=>a(a=>{let o=[...a];return o[e]={...o[e],[t]:r},o}),[]),f=(0,i.useCallback)((e,t)=>a(a=>a.map((a,r)=>e(a,r)?t(a,r):a)),[]),g=(0,i.useCallback)(e=>{a(t=>t.filter(e))},[]);return[t,(0,i.useMemo)(()=>({setState:a,append:r,prepend:o,insert:n,pop:c,shift:d,apply:l,applyWhere:f,remove:s,reorder:u,swap:m,setItem:p,setItemProp:h,filter:g}),[])]}(c),o=e.every(e=>e.checked),l=e.some(e=>e.checked)&&!o,s=e.map((e,o)=>(0,r.jsx)(a.Checkbox,{mt:"xs",ml:33,label:e.label,checked:e.checked,onChange:e=>t.setItemProp(o,"checked",e.currentTarget.checked)},e.key));return(0,r.jsxs)(n.Box,{maw:400,mx:"auto",children:[(0,r.jsx)(a.Checkbox,{checked:o,indeterminate:l,label:"Receive all notifications",onChange:()=>t.setState(e=>e.map(e=>({...e,checked:!o})))}),s]})}};var u=e.i(671640);let m={type:"code",component:function(){return(0,r.jsxs)(u.Stack,{children:[(0,r.jsx)(a.Checkbox,{checked:!1,onChange:()=>{},label:"Default checkbox"}),(0,r.jsx)(a.Checkbox,{checked:!1,onChange:()=>{},indeterminate:!0,label:"Indeterminate checkbox"}),(0,r.jsx)(a.Checkbox,{checked:!0,onChange:()=>{},label:"Checked checkbox"}),(0,r.jsx)(a.Checkbox,{checked:!0,variant:"outline",onChange:()=>{},label:"Outline checked checkbox"}),(0,r.jsx)(a.Checkbox,{variant:"outline",onChange:()=>{},indeterminate:!0,label:"Outline indeterminate checkbox"}),(0,r.jsx)(a.Checkbox,{disabled:!0,label:"Disabled checkbox"}),(0,r.jsx)(a.Checkbox,{disabled:!0,checked:!0,onChange:()=>{},label:"Disabled checked checkbox"}),(0,r.jsx)(a.Checkbox,{disabled:!0,indeterminate:!0,label:"Disabled indeterminate checkbox"})]})},code:`
import { Checkbox, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Checkbox checked={false} onChange={() => {}} label="Default checkbox" />
      <Checkbox checked={false} onChange={() => {}} indeterminate label="Indeterminate checkbox" />
      <Checkbox checked onChange={() => {}} label="Checked checkbox" />
      <Checkbox checked variant="outline" onChange={() => {}} label="Outline checked checkbox" />
      <Checkbox
        variant="outline"
        onChange={() => {}}
        indeterminate
        label="Outline indeterminate checkbox"
      />
      <Checkbox disabled label="Disabled checkbox" />
      <Checkbox disabled checked onChange={() => {}} label="Disabled checked checkbox" />
      <Checkbox disabled indeterminate label="Disabled indeterminate checkbox" />
    </Stack>
  );
}
`};var p=e.i(171481);let h=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M188.26,100.55c-.37-.71-.76-1.42-1.16-2.11a64,64,0,0,0-29.55-81.29,12,12,0,1,0-11.1,21.28A39.91,39.91,0,0,1,168,73.92c0,1-.05,2-.13,3a67.79,67.79,0,0,0-79.74,0c-.08-1-.13-2-.13-3a39.92,39.92,0,0,1,21.55-35.5A12,12,0,1,0,98.46,17.14,64,64,0,0,0,68.89,98.45c-.4.7-.78,1.39-1.15,2.1A64.08,64.08,0,0,0,12,164a12,12,0,0,0,24,0,40,40,0,0,1,24.18-36.73c-.11,1.56-.18,3.14-.18,4.73a68.12,68.12,0,0,0,41.63,62.68,40,40,0,0,1-47.16,3,12,12,0,1,0-12.94,20.21A63.95,63.95,0,0,0,128,201.24a63.95,63.95,0,0,0,86.47,16.69,12,12,0,1,0-12.94-20.21,40,40,0,0,1-47.16-3A68.12,68.12,0,0,0,196,132c0-1.59-.07-3.17-.18-4.73A40,40,0,0,1,220,164a12,12,0,0,0,24,0A64.08,64.08,0,0,0,188.26,100.55ZM128,88a43.85,43.85,0,0,1,30.23,12.07,39.93,39.93,0,0,1-60.46,0A43.81,43.81,0,0,1,128,88ZM84,132a44.35,44.35,0,0,1,.57-7.06,40,40,0,0,1,30.18,49A44.08,44.08,0,0,1,84,132Zm57.25,42a40,40,0,0,1,30.18-49,44,44,0,0,1-30.18,49Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M184,132a56,56,0,1,1-56-56A56,56,0,0,1,184,132Z",opacity:"0.2"}),i.createElement("path",{d:"M185.68,104.28q-1.4-2.88-3.06-5.6a60,60,0,0,0-26.92-78,8,8,0,0,0-7.4,14.19A44,44,0,0,1,170.72,84.4a63.85,63.85,0,0,0-85.46,0A44,44,0,0,1,107.7,34.87a8,8,0,1,0-7.4-14.19,60,60,0,0,0-26.93,78,62.59,62.59,0,0,0-3.05,5.58A60.07,60.07,0,0,0,16,164a8,8,0,0,0,16,0,44.09,44.09,0,0,1,32.89-42.58A63.94,63.94,0,0,0,109,193.11a44,44,0,0,1-56.65,8,8,8,0,1,0-8.62,13.47A60,60,0,0,0,126.74,196l1.26,0,1.26,0a60,60,0,0,0,83.05,18.59,8,8,0,1,0-8.62-13.47,44,44,0,0,1-56.65-8,63.94,63.94,0,0,0,44.07-71.69A44.09,44.09,0,0,1,224,164a8,8,0,0,0,16,0A60.07,60.07,0,0,0,185.68,104.28ZM128,84a47.91,47.91,0,0,1,35.56,15.79,44,44,0,0,1-71.13,0A47.89,47.89,0,0,1,128,84Zm.12,49.92-.12.2-.12-.2h.24ZM80,132a47.6,47.6,0,0,1,1.44-11.65,44,44,0,0,1,36,58.46A48.07,48.07,0,0,1,80,132Zm58.57,46.81a44,44,0,0,1,36-58.46,48,48,0,0,1-36,58.46Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M239.83,159.58a60.09,60.09,0,0,0-54.17-55.31,61.63,61.63,0,0,0-3-5.59,59.94,59.94,0,0,0-26.82-77.93l-.14-.08a8.1,8.1,0,0,0-1.14-.48h0a8,8,0,0,0-6.21,14.69l.07,0C149.6,35.57,168,45.73,168,68a40,40,0,0,1-2,12.53,63.83,63.83,0,0,0-76,0A40,40,0,0,1,88,68c0-22.35,18.53-32.51,19.65-33.1l0,0a8,8,0,0,0-7.33-14.22l-.15.08a60,60,0,0,0-26.85,78c-1.1,1.8-2.12,3.66-3,5.57a60.11,60.11,0,0,0-54.15,55.32,35.86,35.86,0,0,0-.14,4.87A8,8,0,0,0,32,164c0-1.36.07-2.71.19-4,.73-6.25,4.06-19.08,18.64-27.49a39.83,39.83,0,0,1,13.32-4.81c-.1,1.43-.16,2.88-.16,4.34a64.09,64.09,0,0,0,39,58.91,39.81,39.81,0,0,1-12.15,10.84c-19.07,11-36.88.36-38.39-.58l-.12-.08a8,8,0,0,0-8.71,13.42l.24.15A59.95,59.95,0,0,0,126.74,196c.42,0,.83,0,1.25,0s.84,0,1.27,0a60,60,0,0,0,82.89,18.69l.23-.15a8,8,0,0,0-8.71-13.42l-.12.08c-1.51.94-19.32,11.59-38.39.58A39.84,39.84,0,0,1,153,190.9,64.09,64.09,0,0,0,192,132c0-1.46-.07-2.9-.16-4.33a39.84,39.84,0,0,1,13.33,4.8c14.47,8.35,17.86,21.06,18.63,27.32.13,1.39.2,2.79.2,4.21a8,8,0,0,0,16,.46A36,36,0,0,0,239.83,159.58Zm-130.1,16.8A48.08,48.08,0,0,1,80,132c0-1.27.07-2.53.17-3.78l1,.25a40,40,0,0,1,28.54,47.91ZM128,134.11l-.11-.19h.22ZM128,108A39.91,39.91,0,0,1,98.07,94.51a47.84,47.84,0,0,1,59.84,0A39.88,39.88,0,0,1,128,108Zm18.29,68.37a39.9,39.9,0,0,1,29.55-48.13c.1,1.24.16,2.49.16,3.76A48.07,48.07,0,0,1,146.28,176.37Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M184.35,106.18a61.77,61.77,0,0,0-4-7.33,58,58,0,0,0-25.58-76.38,6,6,0,1,0-5.54,10.64,46,46,0,0,1,22.51,55,61.89,61.89,0,0,0-87.5,0,46,46,0,0,1,22.53-55,6,6,0,0,0-5.54-10.64A58,58,0,0,0,75.64,98.87a60.67,60.67,0,0,0-4,7.31A58.06,58.06,0,0,0,18,164a6,6,0,0,0,12,0,46.08,46.08,0,0,1,37.43-45.19,61.95,61.95,0,0,0,45,73.21,46,46,0,0,1-61.2,10.75,6,6,0,0,0-6.48,10.11,58,58,0,0,0,80.9-18.94c.77,0,1.55.06,2.34.06s1.57,0,2.34-.06a58,58,0,0,0,80.9,18.94,6,6,0,0,0-6.48-10.11A46,46,0,0,1,143.56,192a61.95,61.95,0,0,0,45-73.21A46.08,46.08,0,0,1,226,164a6,6,0,0,0,12,0A58.06,58.06,0,0,0,184.35,106.18ZM128,82a49.87,49.87,0,0,1,38.09,17.67,46,46,0,0,1-76.19,0A49.86,49.86,0,0,1,128,82Zm3.8,49.79a56.82,56.82,0,0,0-3.8,6.56,58.24,58.24,0,0,0-3.79-6.56c1.25.08,2.51.13,3.78.13S130.54,131.87,131.8,131.79ZM78,132a49.68,49.68,0,0,1,2-13.82A46.06,46.06,0,0,1,122,164a45.59,45.59,0,0,1-3.32,17.12A50.07,50.07,0,0,1,78,132Zm59.32,49.12A45.59,45.59,0,0,1,134,164a46.06,46.06,0,0,1,42-45.82,50,50,0,0,1-38.72,62.94Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M185.68,104.28q-1.4-2.88-3.06-5.6a60,60,0,0,0-26.92-78,8,8,0,0,0-7.4,14.19A44,44,0,0,1,170.72,84.4a63.85,63.85,0,0,0-85.46,0A44,44,0,0,1,107.7,34.87a8,8,0,1,0-7.4-14.19,60,60,0,0,0-26.93,78,62.59,62.59,0,0,0-3.05,5.58A60.07,60.07,0,0,0,16,164a8,8,0,0,0,16,0,44.09,44.09,0,0,1,32.89-42.58A63.94,63.94,0,0,0,109,193.11a44,44,0,0,1-56.65,8,8,8,0,1,0-8.62,13.47A60,60,0,0,0,126.74,196l1.26,0,1.26,0a60,60,0,0,0,83.05,18.59,8,8,0,1,0-8.62-13.47,44,44,0,0,1-56.65-8,63.94,63.94,0,0,0,44.07-71.69A44.09,44.09,0,0,1,224,164a8,8,0,0,0,16,0A60.07,60.07,0,0,0,185.68,104.28ZM128,84a47.91,47.91,0,0,1,35.56,15.79,44,44,0,0,1-71.13,0A47.89,47.89,0,0,1,128,84Zm.12,49.92-.12.2-.12-.2h.24ZM80,132a47.6,47.6,0,0,1,1.44-11.65,44,44,0,0,1,36,58.46A48.07,48.07,0,0,1,80,132Zm58.57,46.81a44,44,0,0,1,36-58.46,48,48,0,0,1-36,58.46Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M183,108.08A60.22,60.22,0,0,0,178.06,99a56,56,0,0,0-24.21-74.73,4,4,0,1,0-3.7,7.09,48,48,0,0,1,22.37,60.49,59.91,59.91,0,0,0-89.05,0,48,48,0,0,1,22.38-60.5,4,4,0,0,0-3.7-7.1A56,56,0,0,0,77.93,99,60.85,60.85,0,0,0,73,108.08,56.07,56.07,0,0,0,20,164a4,4,0,0,0,8,0,48.06,48.06,0,0,1,42.08-47.62,60,60,0,0,0,45.75,74.38,48,48,0,0,1-65.67,13.7,4,4,0,1,0-4.32,6.73,56,56,0,0,0,78.69-19.3c1.15.07,2.3.11,3.47.11s2.32,0,3.47-.11a56,56,0,0,0,78.69,19.3,4,4,0,1,0-4.32-6.73,48,48,0,0,1-65.67-13.7,60,60,0,0,0,45.75-74.38A48.06,48.06,0,0,1,228,164a4,4,0,0,0,8,0A56.07,56.07,0,0,0,183,108.08Zm-8.75.21c-.79.08-1.56.19-2.34.3.5-.63,1-1.28,1.46-1.93C173.69,107.2,174,107.74,174.26,108.29ZM128,80a51.93,51.93,0,0,1,40.57,19.52,48,48,0,0,1-81.15,0A51.94,51.94,0,0,1,128,80Zm8.07,49.33A56.11,56.11,0,0,0,128,143.25a55.87,55.87,0,0,0-8.07-13.91,56.43,56.43,0,0,0,8.06.58A55.29,55.29,0,0,0,136.07,129.33Zm-52-20.74c-.77-.11-1.54-.22-2.32-.3q.42-.81.87-1.62C83.08,107.32,83.56,108,84.06,108.59ZM76,132a51.78,51.78,0,0,1,2.51-15.93,48,48,0,0,1,41.39,67.3A52.08,52.08,0,0,1,76,132Zm60.1,51.37a48,48,0,0,1,41.39-67.3,52,52,0,0,1-41.39,67.3Z"}))]]),f=i.forwardRef((e,t)=>i.createElement(p.default,{ref:t,...e,weights:h}));f.displayName="BiohazardIcon";let g=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M128,112a16,16,0,1,1-16,16A16,16,0,0,1,128,112ZM96,128a12,12,0,0,0-12-12H44.47a83.88,83.88,0,0,1,31.2-54.11L95.38,96a12,12,0,1,0,20.78-12l-22-38a20,20,0,0,0-28.87-6.34,107.85,107.85,0,0,0-45.26,78.4,20.22,20.22,0,0,0,5.21,15.43A20,20,0,0,0,40,140H84A12,12,0,0,0,96,128Zm139.92-9.94a107.81,107.81,0,0,0-45.26-78.39A20,20,0,0,0,161.79,46L139.84,84a12,12,0,0,0,20.78,12l19.71-34.13A83.88,83.88,0,0,1,211.53,116H172a12,12,0,0,0,0,24h44a20,20,0,0,0,14.71-6.51A20.22,20.22,0,0,0,235.92,118.06ZM160.4,160.11a12,12,0,0,0-20.79,12L159.19,206a84.33,84.33,0,0,1-62.38,0l19.58-33.91a12,12,0,0,0-20.79-12l-21.82,37.8a20,20,0,0,0,8.91,28.15,108.24,108.24,0,0,0,90.62,0,20,20,0,0,0,8.91-28.15Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M92,128H40a8.1,8.1,0,0,1-8-8.86A95.94,95.94,0,0,1,72.27,49.47,8,8,0,0,1,83.82,52l26,44.94A36,36,0,0,0,92,128Zm54,31.18a36,36,0,0,1-36,0L84.17,203.91a8,8,0,0,0,3.56,11.26,96.24,96.24,0,0,0,80.54,0,8,8,0,0,0,3.56-11.26Zm78-40a95.94,95.94,0,0,0-40.24-69.67A8,8,0,0,0,172.18,52L146.23,97A36,36,0,0,1,164,126.12c0,.62.05,1.23.05,1.85l52,0A8.1,8.1,0,0,0,224,119.14Z",opacity:"0.2"}),i.createElement("path",{d:"M116,128a12,12,0,1,1,12,12A12,12,0,0,1,116,128Zm-16,0a8,8,0,0,0-8-8l-51.93,0a.19.19,0,0,1-.07-.16A87.83,87.83,0,0,1,76.89,56l26,45a8,8,0,1,0,13.86-8L90.75,48a16,16,0,0,0-23.1-5.07,103.83,103.83,0,0,0-43.58,75.49,16.21,16.21,0,0,0,4.17,12.37A16,16,0,0,0,40,136H92A8,8,0,0,0,100,128Zm131.93-9.58a103.83,103.83,0,0,0-43.58-75.49A16,16,0,0,0,165.25,48L139.3,93a8,8,0,0,0,13.86,8l26-45A87.87,87.87,0,0,1,216,119.86c0,.07,0,.12,0,.14H164a8,8,0,0,0,0,16h52a16,16,0,0,0,11.76-5.21A16.21,16.21,0,0,0,231.93,118.42Zm-79,36.76a8,8,0,1,0-13.86,8l25.84,44.73a88.22,88.22,0,0,1-73.81,0l25.83-44.73a8,8,0,1,0-13.86-8L77.25,199.91a16,16,0,0,0,7.12,22.52,104.24,104.24,0,0,0,87.26,0,16,16,0,0,0,7.12-22.52Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M116,128a12,12,0,1,1,12,12A12,12,0,0,1,116,128Zm-15.78,3.51A29,29,0,0,1,100,128a28,28,0,0,1,16.94-25.73,4,4,0,0,0,1.87-5.66L90.75,48a16,16,0,0,0-23.1-5.07,103.83,103.83,0,0,0-43.58,75.49,16.21,16.21,0,0,0,4.17,12.37A16,16,0,0,0,40,136H96.26A4,4,0,0,0,100.22,131.51Zm131.71-13.09a103.83,103.83,0,0,0-43.58-75.49A16,16,0,0,0,165.25,48L137.19,96.61a4,4,0,0,0,1.87,5.66A28,28,0,0,1,156,128a29,29,0,0,1-.22,3.51,4,4,0,0,0,4,4.49H216a16,16,0,0,0,11.76-5.21A16.21,16.21,0,0,0,231.93,118.42ZM150.8,151.48a4,4,0,0,0-5.91-1.15,28,28,0,0,1-33.78,0,4,4,0,0,0-5.91,1.15L77.25,199.91a16,16,0,0,0,7.12,22.52,104.24,104.24,0,0,0,87.26,0,16,16,0,0,0,7.12-22.52Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M92,134H40a13.94,13.94,0,0,1-10.28-4.56,14.17,14.17,0,0,1-3.66-10.84,101.81,101.81,0,0,1,42.75-74A14,14,0,0,1,89,49l26,45a6,6,0,0,1-10.4,6L78.62,55a2,2,0,0,0-2.88-.65A89.83,89.83,0,0,0,38,119.68a2.13,2.13,0,0,0,.57,1.67A1.88,1.88,0,0,0,40,122H92a6,6,0,0,1,0,12Zm137.94-15.4a101.81,101.81,0,0,0-42.75-74A14,14,0,0,0,167,49L141,94a6,6,0,0,0,10.4,6L177.38,55a2,2,0,0,1,2.88-.65A89.83,89.83,0,0,1,218,119.68a2.13,2.13,0,0,1-.57,1.67A1.88,1.88,0,0,1,216,122H164a6,6,0,0,0,0,12h52a13.94,13.94,0,0,0,10.28-4.56A14.17,14.17,0,0,0,229.94,118.6ZM151.2,156.18a6,6,0,1,0-10.39,6l25.82,44.73a2,2,0,0,1-.88,2.82,90.29,90.29,0,0,1-75.5,0,2,2,0,0,1-.88-2.82l25.82-44.73a6,6,0,1,0-10.39-6L79,200.91a14,14,0,0,0,6.23,19.71,102.29,102.29,0,0,0,85.58,0A14,14,0,0,0,177,200.91ZM128,138a10,10,0,1,0-10-10A10,10,0,0,0,128,138Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M92,136H40a16,16,0,0,1-11.76-5.21,16.21,16.21,0,0,1-4.17-12.37A103.83,103.83,0,0,1,67.65,42.93,16,16,0,0,1,90.75,48l26,45a8,8,0,1,1-13.86,8L76.89,56A87.83,87.83,0,0,0,40,119.86a.19.19,0,0,0,.07.16L92,120a8,8,0,0,1,0,16Zm139.93-17.58a103.83,103.83,0,0,0-43.58-75.49A16,16,0,0,0,165.25,48L139.3,93a8,8,0,0,0,13.86,8l26-45A87.87,87.87,0,0,1,216,119.86c0,.07,0,.12,0,.14H164a8,8,0,0,0,0,16h52a16,16,0,0,0,11.76-5.21A16.21,16.21,0,0,0,231.93,118.42Zm-79,36.76a8,8,0,1,0-13.86,8l25.84,44.73a88.22,88.22,0,0,1-73.81,0l25.83-44.73a8,8,0,1,0-13.86-8L77.25,199.91a16,16,0,0,0,7.12,22.52,104.24,104.24,0,0,0,87.26,0,16,16,0,0,0,7.12-22.52ZM128,140a12,12,0,1,0-12-12A12,12,0,0,0,128,140Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M92,132H40a12,12,0,0,1-8.81-3.91,12.2,12.2,0,0,1-3.14-9.31A99.82,99.82,0,0,1,70,46.2,12,12,0,0,1,87.29,50l25.94,45a4,4,0,0,1-6.92,4L80.36,54a4,4,0,0,0-5.78-1.27A91.83,91.83,0,0,0,36,119.5a4.2,4.2,0,0,0,1.08,3.2A3.9,3.9,0,0,0,40,124H92a4,4,0,0,1,0,8Zm136-13.22A99.82,99.82,0,0,0,186,46.2,12,12,0,0,0,168.72,50L142.77,95a4,4,0,0,0,6.92,4L175.64,54a4,4,0,0,1,5.78-1.27A91.83,91.83,0,0,1,220,119.5a4.2,4.2,0,0,1-1.08,3.2A3.9,3.9,0,0,1,216,124H164a4,4,0,0,0,0,8h52a12,12,0,0,0,8.81-3.91A12.2,12.2,0,0,0,228,118.78Zm-78.48,38.4a4,4,0,0,0-6.93,4l25.82,44.73a4,4,0,0,1,.35,3.22,3.9,3.9,0,0,1-2.12,2.41,92.24,92.24,0,0,1-77.18,0,3.9,3.9,0,0,1-2.12-2.41,4,4,0,0,1,.35-3.22l25.82-44.73a4,4,0,0,0-6.93-4L80.71,201.91a12,12,0,0,0,5.34,16.89,100.24,100.24,0,0,0,83.9,0,12,12,0,0,0,5.34-16.89ZM128,136a8,8,0,1,0-8-8A8,8,0,0,0,128,136Z"}))]]),x=i.forwardRef((e,t)=>i.createElement(p.default,{ref:t,...e,weights:g}));x.displayName="RadioactiveIcon";let v=({indeterminate:e,...t})=>e?(0,r.jsx)(x,{...t}):(0,r.jsx)(f,{...t}),b={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Checkbox,{icon:v,label:"Custom icon",defaultChecked:!0}),(0,r.jsx)(a.Checkbox,{icon:v,label:"Custom icon: indeterminate",indeterminate:!0,mt:"sm"})]})},code:`
import { Checkbox, CheckboxIconComponent } from '@mantine/core';
import { BiohazardIcon, RadioactiveIcon } from '@phosphor-icons/react';

const CheckboxIcon: CheckboxIconComponent = ({ indeterminate, ...others }) =>
  indeterminate ? <RadioactiveIcon {...others} /> : <BiohazardIcon {...others} />;

function Demo() {
  return (
    <>
      <Checkbox icon={CheckboxIcon} label="Custom icon" defaultChecked />
      <Checkbox icon={CheckboxIcon} label="Custom icon: indeterminate" indeterminate mt="sm" />
    </>
  );
}
`};var y=e.i(725695);let w={type:"configurator",component:function(e){return(0,r.jsx)(a.Checkbox.Group,{defaultValue:["react"],...e,children:(0,r.jsxs)(y.Group,{mt:"xs",children:[(0,r.jsx)(a.Checkbox,{value:"react",label:"React"}),(0,r.jsx)(a.Checkbox,{value:"svelte",label:"Svelte"}),(0,r.jsx)(a.Checkbox,{value:"ng",label:"Angular"}),(0,r.jsx)(a.Checkbox,{value:"vue",label:"Vue"})]})})},code:`
import { Checkbox, Group } from '@mantine/core';


function Demo() {
  return (
    <Checkbox.Group
      defaultValue={['react']}
      {{props}}
    >
      <Group mt="xs">
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="ng" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Group>
    </Checkbox.Group>
  );
}
`,centered:!0,maxWidth:"100%",controls:[{prop:"label",type:"string",initialValue:"Select your favorite frameworks/libraries",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]};var S=e.i(79897);let k={type:"code",component:function(){return(0,r.jsx)(a.Checkbox,{label:(0,r.jsxs)(r.Fragment,{children:["I accept"," ",(0,r.jsx)(S.Anchor,{href:"https://mantine.dev",target:"_blank",inherit:!0,children:"terms and conditions"})]})})},code:`
import { Checkbox, Anchor } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      label={
        <>
          I accept{' '}
          <Anchor href="https://mantine.dev" target="_blank" inherit>
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}
`};var D="m_2cb8989f",M="m_69ff5ed7",j="m_cf98ad9f",C=e.i(883364);let A={type:"code",centered:!0,maxWidth:320,component:function(){let[e,t]=(0,i.useState)(!1);return(0,r.jsx)(a.Checkbox.Card,{className:D,checked:e,onClick:()=>t(e=>!e),children:(0,r.jsxs)(y.Group,{wrap:"nowrap",align:"flex-start",children:[(0,r.jsx)(a.Checkbox.Indicator,{}),(0,r.jsxs)("div",{children:[(0,r.jsx)(C.Text,{className:M,children:"mantine/core"}),(0,r.jsx)(C.Text,{className:j,children:"Core components library: inputs, buttons, overlays, etc."})]})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import { Checkbox, Group, Text } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox.Card
      className={classes.root}
      checked={checked}
      onClick={() => setChecked((c) => !c)}
    >
      <Group wrap="nowrap" align="flex-start">
        <Checkbox.Indicator />

        <div>
          <Text className={classes.label}>mantine/core</Text>
          <Text className={classes.description}>
            Core components library: inputs, buttons, overlays, etc.
          </Text>
        </div>
      </Group>
    </Checkbox.Card>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`.root {
  position: relative;
  padding: var(--mantine-spacing-md);
  transition: border-color 150ms ease;

  &[data-checked] {
    border-color: var(--mantine-primary-color-filled);
  }

  @mixin hover {
    @mixin light {
      background-color: var(--mantine-color-gray-0);
    }

    @mixin dark {
      background-color: var(--mantine-color-dark-6);
    }
  }
}

.label {
  font-weight: 600;
  font-size: var(--mantine-font-size-sm);
  line-height: 1.3;
  color: var(--mantine-color-bright);
}

.description {
  margin-top: 4px;
  color: var(--mantine-color-dimmed);
  font-size: var(--mantine-font-size-xs);
}
`}]};var V=e.i(529755);let Y=`
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      label="Checkbox"
      description="Checkbox description"
      error="Checkbox error"
      defaultChecked
     {{props}}
    />
  );
}
`,P={type:"styles-api",data:V.CheckboxStylesApi,component:function(e){return(0,r.jsx)(a.Checkbox,{label:"Checkbox",description:"Checkbox description",error:"Checkbox error",defaultChecked:!0,...e})},code:Y,centered:!0};var I={root:"m_43bfb50c"};let T={type:"code",component:function(){let[e,t]=(0,i.useState)(!1);return(0,r.jsx)(a.Checkbox,{classNames:I,label:"Checkbox button",checked:e,onChange:e=>t(e.currentTarget.checked),wrapperProps:{onClick:()=>t(e=>!e)}})},centered:!0,defaultExpanded:!1,code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import { Checkbox } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      classNames={classes}
      label="Checkbox button"
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      wrapperProps={{
        onClick: () => setChecked((c) => !c),
      }}
    />
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.root {
  border: 1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
  padding: var(--mantine-spacing-xs) var(--mantine-spacing-sm);
  border-radius: var(--mantine-radius-md);
  font-weight: 600;
  transition:
    color 100ms ease,
    background-color 100ms ease,
    border-color 100ms ease;
  cursor: pointer;

  &[data-checked] {
    background-color: var(--mantine-color-blue-filled);
    border-color: var(--mantine-color-blue-filled);
    color: var(--mantine-color-white);
  }

  & * {
    pointer-events: none;
    user-select: none;
  }
}
`,language:"scss"}]},H={type:"code",component:function(){return(0,r.jsx)(a.Checkbox,{defaultChecked:!0,color:"lime.4",iconColor:"dark.8",size:"md",label:"Bright lime checkbox"})},code:`
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      defaultChecked
      color="lime.4"
      iconColor="dark.8"
      size="md"
      label="Bright lime checkbox"
    />
  );
}
`,centered:!0};var L=e.i(431868);let B={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(L.Tooltip,{label:"Checkbox with tooltip",children:(0,r.jsx)(a.Checkbox,{label:"Tooltip on checkbox only"})}),(0,r.jsx)(L.Tooltip,{label:"Checkbox with tooltip",refProp:"rootRef",children:(0,r.jsx)(a.Checkbox,{label:"Tooltip the entire element",mt:"md"})})]})},code:`
import { Tooltip, Checkbox } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip label="Checkbox with tooltip">
        <Checkbox label="Tooltip on checkbox only" />
      </Tooltip>

      <Tooltip label="Checkbox with tooltip" refProp="rootRef">
        <Checkbox label="Tooltip the entire element" mt="md" />
      </Tooltip>
    </>
  );
}
`,centered:!0};var E=e.i(951254),R=e.i(530514);let Z=`.root {
  --checkbox-size-xxl: 42px;
  --checkbox-size-xxs: 14px;

  &[data-size='xxl'] {
    .label {
      font-size: 22px;
      line-height: 40px;
    }
  }

  &[data-size='xxs'] {
    .label {
      font-size: 10px;
      line-height: 14px;
    }
  }
}
`,z=`
import { MantineProvider, Checkbox, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Checkbox: Checkbox.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Checkbox size="xxs" label="Extra small checkbox" />
      <Checkbox size="xxl" label="Extra large checkbox" mt="md" />
    </MantineProvider>
  );
}
`,F=(0,R.createTheme)({components:{Checkbox:a.Checkbox.extend({classNames:{root:"m_4308addd",label:"m_1db1f159"}})}}),W={type:"code",centered:!0,component:function(){return(0,r.jsxs)(E.MantineThemeProvider,{theme:F,children:[(0,r.jsx)(a.Checkbox,{size:"xxs",label:"Extra small checkbox"}),(0,r.jsx)(a.Checkbox,{size:"xxl",label:"Extra large checkbox",mt:"md"})]})},code:[{fileName:"Demo.tsx",code:z,language:"tsx"},{fileName:"Demo.module.css",code:Z,language:"scss"}]},N=[{name:"mantine/core",description:"Core components library: inputs, buttons, overlays, etc."},{name:"mantine/hooks",description:"Collection of reusable hooks for React applications."},{name:"mantine/notifications",description:"Notifications system"}],_={type:"code",centered:!0,maxWidth:320,component:function(){let[e,t]=(0,i.useState)([]),o=N.map(e=>(0,r.jsx)(a.Checkbox.Card,{className:D,value:e.name,children:(0,r.jsxs)(y.Group,{wrap:"nowrap",align:"flex-start",children:[(0,r.jsx)(a.Checkbox.Indicator,{}),(0,r.jsxs)("div",{children:[(0,r.jsx)(C.Text,{className:M,children:e.name}),(0,r.jsx)(C.Text,{className:j,children:e.description})]})]})},e.name));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Checkbox.Group,{value:e,onChange:t,label:"Pick packages to install",description:"Choose all packages that you will need in your application",children:(0,r.jsx)(u.Stack,{pt:"md",gap:"xs",children:o})}),(0,r.jsxs)(C.Text,{fz:"xs",mt:"md",children:["CurrentValue: ",e.join(", ")||"–"]})]})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import { Checkbox, Group, Stack, Text } from '@mantine/core';
import classes from './Demo.module.css';

const data = [
  {
    name: 'mantine/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
  },
  { name: 'mantine/hooks', description: 'Collection of reusable hooks for React applications.' },
  { name: 'mantine/notifications', description: 'Notifications system' },
];

function Demo() {
  const [value, setValue] = useState<string[]>([]);

  const cards = data.map((item) => (
    <Checkbox.Card className={classes.root} value={item.name} key={item.name}>
      <Group wrap="nowrap" align="flex-start">
        <Checkbox.Indicator />
        <div>
          <Text className={classes.label}>{item.name}</Text>
          <Text className={classes.description}>{item.description}</Text>
        </div>
      </Group>
    </Checkbox.Card>
  ));

  return (
    <>
      <Checkbox.Group
        value={value}
        onChange={setValue}
        label="Pick packages to install"
        description="Choose all packages that you will need in your application"
      >
        <Stack pt="md" gap="xs">
          {cards}
        </Stack>
      </Checkbox.Group>

      <Text fz="xs" mt="md">
        CurrentValue: {value.join(', ') || '–'}
      </Text>
    </>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`.root {
  position: relative;
  padding: var(--mantine-spacing-md);
  transition: border-color 150ms ease;

  &[data-checked] {
    border-color: var(--mantine-primary-color-filled);
  }

  @mixin hover {
    @mixin light {
      background-color: var(--mantine-color-gray-0);
    }

    @mixin dark {
      background-color: var(--mantine-color-dark-6);
    }
  }
}

.label {
  font-weight: 600;
  font-size: var(--mantine-font-size-sm);
  line-height: 1.3;
  color: var(--mantine-color-bright);
}

.description {
  margin-top: 4px;
  color: var(--mantine-color-dimmed);
  font-size: var(--mantine-font-size-xs);
}
`}]},G={type:"code",component:function(){return(0,r.jsxs)(y.Group,{children:[(0,r.jsx)(a.Checkbox.Indicator,{}),(0,r.jsx)(a.Checkbox.Indicator,{checked:!0}),(0,r.jsx)(a.Checkbox.Indicator,{indeterminate:!0}),(0,r.jsx)(a.Checkbox.Indicator,{disabled:!0}),(0,r.jsx)(a.Checkbox.Indicator,{disabled:!0,checked:!0}),(0,r.jsx)(a.Checkbox.Indicator,{disabled:!0,indeterminate:!0})]})},code:`
import { Checkbox, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Checkbox.Indicator />
      <Checkbox.Indicator checked />
      <Checkbox.Indicator indeterminate />
      <Checkbox.Indicator disabled />
      <Checkbox.Indicator disabled checked />
      <Checkbox.Indicator disabled indeterminate />
    </Group>
  );
}
`},O={type:"code",component:function(){return(0,r.jsxs)(u.Stack,{children:[(0,r.jsx)(a.Checkbox,{checked:!0,label:"regular checkbox",size:"lg",color:"lime.4",onChange:()=>{}}),(0,r.jsx)(a.Checkbox,{autoContrast:!0,checked:!0,label:"autoContrast checkbox",size:"lg",color:"lime.4",onChange:()=>{}})]})},code:`
import { Checkbox, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Checkbox checked label="regular checkbox" size="lg" color="lime.4" />
      <Checkbox autoContrast checked label="autoContrast checkbox" size="lg" color="lime.4" />
    </Stack>
  );
}
`,centered:!0},$={type:"code",component:function(){return(0,r.jsxs)(u.Stack,{children:[(0,r.jsx)(a.Checkbox,{label:"With boolean error",error:!0}),(0,r.jsx)(a.Checkbox,{label:"With error message",error:"Must be checked"}),(0,r.jsx)(a.Checkbox,{label:"With error message",error:"No error styles",withErrorStyles:!1})]})},code:`
import { Checkbox, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Checkbox label="With boolean error" error />
      <Checkbox label="With error message" error="Must be checked" />
      <Checkbox label="With error message" error="No error styles" withErrorStyles={false} />
    </Stack>
  );
}
`,centered:!0};var q=e.i(485108),U=e.i(387703),Q=e.i(582498);let K={type:"code",component:function(){let e=(0,Q.useForm)({mode:"uncontrolled",initialValues:{terms:!1},validate:{terms:(0,U.isNotEmpty)("You must accept terms and conditions")}});return(0,r.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,r.jsx)(a.Checkbox,{label:"I accept the terms and conditions",...e.getInputProps("terms",{type:"checkbox"})},e.key("terms")),(0,r.jsx)(q.Button,{type:"submit",mt:"md",children:"Submit"})]})},code:`
import { Button, Checkbox } from '@mantine/core';
import { isNotEmpty, useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { terms: false },
    validate: {
      terms: isNotEmpty('You must accept terms and conditions'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Checkbox
        label="I accept the terms and conditions"
        key={form.key('terms')}
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />

      <Button type="submit" mt="md">
        Submit
      </Button>
    </form>
  );
}
`,maxWidth:340,centered:!0};var J=e.i(638895);let X={type:"code",component:function(){let e=(0,Q.useForm)({mode:"uncontrolled",initialValues:{frameworks:[]},validate:{frameworks:(0,J.hasLength)({min:1},"Select at least one framework")}});return(0,r.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,i.createElement)(a.Checkbox.Group,{...e.getInputProps("frameworks"),key:e.key("frameworks"),label:"Select your favorite frameworks/libraries",withAsterisk:!0},(0,r.jsxs)(y.Group,{my:5,children:[(0,r.jsx)(a.Checkbox,{value:"react",label:"React"}),(0,r.jsx)(a.Checkbox,{value:"svelte",label:"Svelte"}),(0,r.jsx)(a.Checkbox,{value:"ng",label:"Angular"}),(0,r.jsx)(a.Checkbox,{value:"vue",label:"Vue"})]})),(0,r.jsx)(q.Button,{type:"submit",mt:"md",children:"Submit"})]})},code:`
import { Button, Checkbox, Group } from '@mantine/core';
import { hasLength, useForm } from '@mantine/form';

interface FormValues {
  frameworks: string[];
}

function Demo() {
  const form = useForm<FormValues>({
    mode: 'uncontrolled',
    initialValues: { frameworks: [] },
    validate: {
      frameworks: hasLength({ min: 1 }, 'Select at least one framework'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <Checkbox.Group
        {...form.getInputProps('frameworks')}
        key={form.key('frameworks')}
        label="Select your favorite frameworks/libraries"
        withAsterisk
      >
        <Group my={5}>
          <Checkbox value="react" label="React" />
          <Checkbox value="svelte" label="Svelte" />
          <Checkbox value="ng" label="Angular" />
          <Checkbox value="vue" label="Vue" />
        </Group>
      </Checkbox.Group>

      <Button type="submit" mt="md">
        Submit
      </Button>
    </form>
  );
}
`},ee={type:"code",component:function(){return(0,r.jsx)(a.Checkbox.Group,{defaultValue:["react"],maxSelectedValues:2,children:(0,r.jsxs)(y.Group,{children:[(0,r.jsx)(a.Checkbox,{value:"react",label:"React"}),(0,r.jsx)(a.Checkbox,{value:"svelte",label:"Svelte"}),(0,r.jsx)(a.Checkbox,{value:"ng",label:"Angular"}),(0,r.jsx)(a.Checkbox,{value:"vue",label:"Vue"})]})})},code:`
import { Checkbox, Group } from '@mantine/core';

function Demo() {
  return (
    <Checkbox.Group defaultValue={['react']} maxSelectedValues={2}>
      <Group>
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="ng" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Group>
    </Checkbox.Group>
  );
}
`},et={type:"code",component:function(){return(0,r.jsx)(a.Checkbox.Group,{disabled:!0,label:"Select your favorite frameworks/libraries",description:"This is anonymous",children:(0,r.jsxs)(u.Stack,{mt:"xs",children:[(0,r.jsx)(a.Checkbox,{value:"react",label:"React"}),(0,r.jsx)(a.Checkbox,{value:"svelte",label:"Svelte"}),(0,r.jsx)(a.Checkbox,{value:"angular",label:"Angular"}),(0,r.jsx)(a.Checkbox,{value:"vue",label:"Vue"})]})})},code:`
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox.Group disabled>
      <Stack>
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="angular" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Stack>
    </Checkbox.Group>
  );
}
`,centered:!0};var ea=(0,t.__exportAll)({anchor:()=>k,autoContrast:()=>O,card:()=>A,cardGroup:()=>_,configurator:()=>o,customSize:()=>W,customize:()=>T,error:()=>$,groupConfigurator:()=>w,groupDisabled:()=>et,groupWithUseForm:()=>X,icon:()=>b,iconColor:()=>H,indeterminate:()=>d,indicator:()=>G,maxSelectedValues:()=>ee,states:()=>m,stylesApi:()=>P,tooltip:()=>B,withUseForm:()=>K});e.s(["CheckboxDemos",0,ea],975419)},124307,151461,e=>{"use strict";var t=e.i(44091),a=e.i(275519),r=e.i(725695),o={root:"m_4addd315",control:"m_326d024a",dots:"m_4ad7767d"},n=e.i(284629);let[l,i]=(0,e.i(386179).createSafeContext)("Pagination.Root component was not found in tree");var s=e.i(391398);let c={withPadding:!0},d=(0,a.factory)(e=>{let{classNames:a,className:r,style:o,styles:l,vars:d,active:u,disabled:m,withPadding:p,mod:h,...f}=(0,t.useProps)("PaginationControl",c,e),g=i(),x=m||g.disabled;return(0,s.jsx)(n.UnstyledButton,{disabled:x,mod:[{active:u,disabled:x,"with-padding":p},h],...g.getStyles("control",{className:r,style:o,classNames:a,styles:l,active:!x}),...f})});d.classes=o,d.displayName="@mantine/core/PaginationControl";var u=e.i(232471);function m({style:e,children:t,path:a,...r}){return(0,s.jsx)("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",style:{width:"calc(var(--pagination-control-size) / 1.8)",height:"calc(var(--pagination-control-size) / 1.8)",...e},...r,children:(0,s.jsx)("path",{d:a,fill:"currentColor"})})}let p={icon:e=>(0,s.jsx)(m,{...e,path:"M2 8c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333C2.6 9.333 2 8.733 2 8zm9.333 0c0-.733.6-1.333 1.334-1.333C13.4 6.667 14 7.267 14 8s-.6 1.333-1.333 1.333c-.734 0-1.334-.6-1.334-1.333zM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8z"})},h=(0,a.factory)(e=>{let{classNames:a,className:r,style:o,styles:n,vars:l,icon:c,...d}=(0,t.useProps)("PaginationDots",p,e);return(0,s.jsx)(u.Box,{...i().getStyles("dots",{className:r,style:o,styles:n,classNames:a}),...d,children:(0,s.jsx)(c,{style:{width:"calc(var(--pagination-control-size) / 1.8)",height:"calc(var(--pagination-control-size) / 1.8)"}})})});h.classes=o,h.displayName="@mantine/core/PaginationDots";var f=e.i(642291);function g({icon:e,name:a,action:r,type:o}){let n={icon:e},l=e=>{let{icon:l,...c}=(0,t.useProps)(a,n,e),u=i(),m="next"===o?u.active===u.total:1===u.active;return(0,s.jsx)(d,{disabled:u.disabled||m,onClick:u[r],withPadding:!1,...c,children:(0,s.jsx)(l,{className:"mantine-rotate-rtl",style:{width:"calc(var(--pagination-control-size) / 1.8)",height:"calc(var(--pagination-control-size) / 1.8)"}})})};return l.displayName=`@mantine/core/${a}`,(0,f.polymorphic)(l)}let x=g({icon:e=>(0,s.jsx)(m,{...e,path:"M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z"}),name:"PaginationNext",action:"onNext",type:"next"}),v=g({icon:e=>(0,s.jsx)(m,{...e,path:"M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z"}),name:"PaginationPrevious",action:"onPrevious",type:"previous"}),b=g({icon:e=>(0,s.jsx)(m,{...e,path:"M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"}),name:"PaginationFirst",action:"onFirst",type:"previous"}),y=g({icon:e=>(0,s.jsx)(m,{...e,path:"M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"}),name:"PaginationLast",action:"onLast",type:"next"});function w({dotsIcon:e}){let t=i();return(0,s.jsx)(s.Fragment,{children:t.range.map((a,r)=>"dots"===a?(0,s.jsx)(h,{icon:e},r):(0,s.jsx)(d,{active:a===t.active,"aria-current":a===t.active?"page":void 0,onClick:()=>t.onChange(a),disabled:t.disabled,...t.getItemProps?.(a),children:t.getItemProps?.(a)?.children??a},r))})}w.displayName="@mantine/core/PaginationItems";var S=e.i(433512),k=e.i(334816),D=e.i(481178),M=e.i(317477),j=e.i(700145),C=e.i(853487),A=e.i(391466),V=e.i(579560),Y=e.i(191788);function P(e,t){return Array.from({length:t-e+1},(t,a)=>a+e)}let I="dots";function T({total:e,siblings:t=1,boundaries:a=1,page:r,initialPage:o,onChange:n,startValue:l=1}){let i=Math.max(Math.trunc(l),1),s=Math.max(Math.trunc(e),i),c=s-i+1,d=o??i,[u,m]=(0,V.useUncontrolled)({value:r,onChange:n,defaultValue:d,finalValue:d}),p=(0,Y.useCallback)(e=>{e<i?m(i):e>s?m(s):m(e)},[i,s,m]),h=(0,Y.useCallback)(()=>p(u+1),[u,p]),f=(0,Y.useCallback)(()=>p(u-1),[u,p]),g=(0,Y.useCallback)(()=>p(i),[p,i]),x=(0,Y.useCallback)(()=>p(s),[s,p]);return{range:(0,Y.useMemo)(()=>{if(2*t+3+2*a>=c)return P(i,s);let e=Math.max(u-t,i+a-1),r=Math.min(u+t,s-a),o=e>i+a+1,n=r<s-a;if(!o&&n)return[...P(i,i+(2*t+a+2)-1),I,...P(s-(a-1),s)];if(o&&!n){let e=a+1+2*t;return[...P(i,i+a-1),I,...P(s-e,s)]}return[...P(i,i+a-1),I,...P(e,r),I,...P(s-a+1,s)]},[c,t,u,i,s,a]),active:u,setPage:p,next:h,previous:f,first:g,last:x}}e.s(["usePagination",0,T],151461);let H={siblings:1,boundaries:1},L=(0,D.createVarsResolver)((e,{size:t,radius:a,color:r,autoContrast:o})=>({root:{"--pagination-control-radius":void 0===a?void 0:(0,S.getRadius)(a),"--pagination-control-size":(0,S.getSize)(t,"pagination-control-size"),"--pagination-control-fz":(0,S.getFontSize)(t),"--pagination-active-bg":r?(0,M.getThemeColor)(r,e):void 0,"--pagination-active-color":(0,C.getAutoContrastValue)(o,e)?(0,j.getContrastColor)({color:r,theme:e,autoContrast:o}):void 0}})),B=(0,a.factory)(e=>{let a=(0,t.useProps)("PaginationRoot",H,e),{classNames:r,className:n,style:i,styles:c,unstyled:d,vars:m,total:p,value:h,defaultValue:f,onChange:g,disabled:x,siblings:v,boundaries:b,color:y,radius:w,onNextPage:S,onPreviousPage:D,onFirstPage:M,onLastPage:j,getItemProps:C,autoContrast:V,startValue:Y,attributes:P,...I}=a,B=(0,A.useStyles)({name:"Pagination",classes:o,props:a,className:n,style:i,classNames:r,styles:c,unstyled:d,attributes:P,vars:m,varsResolver:L}),{range:E,setPage:R,next:Z,previous:z,active:F,first:W,last:N}=T({page:h,initialPage:f,onChange:g,total:p,siblings:v,boundaries:b,startValue:Y});return(0,s.jsx)(l,{value:{total:p,range:E,active:F,disabled:x,getItemProps:C,onChange:R,onNext:(0,k.createEventHandler)(S,Z),onPrevious:(0,k.createEventHandler)(D,z),onFirst:(0,k.createEventHandler)(M,W),onLast:(0,k.createEventHandler)(j,N),getStyles:B},children:(0,s.jsx)(u.Box,{...B("root"),...I})})});B.classes=o,B.varsResolver=L,B.displayName="@mantine/core/PaginationRoot";let E={withControls:!0,withPages:!0,siblings:1,boundaries:1,gap:8},R=(0,a.factory)(e=>{let{withEdges:a,withControls:o,getControlProps:n,nextIcon:l,previousIcon:i,lastIcon:c,firstIcon:d,dotsIcon:u,total:m,gap:p,hideWithOnePage:h,withPages:f,...g}=(0,t.useProps)("Pagination",E,e);return m<=0||h&&1===m?null:(0,s.jsx)(B,{total:m,...g,children:(0,s.jsxs)(r.Group,{gap:p,children:[a&&(0,s.jsx)(b,{icon:d,...n?.("first")}),o&&(0,s.jsx)(v,{icon:i,...n?.("previous")}),f&&(0,s.jsx)(w,{dotsIcon:u}),o&&(0,s.jsx)(x,{icon:l,...n?.("next")}),a&&(0,s.jsx)(y,{icon:c,...n?.("last")})]})})});R.classes=o,R.displayName="@mantine/core/Pagination",R.Root=B,R.Control=d,R.Dots=h,R.First=b,R.Last=y,R.Next=x,R.Previous=v,R.Items=w,e.s(["Pagination",0,R],124307)},806205,e=>{"use strict";var t=e.i(648863),a=e.i(124307),r=e.i(391398);let o={type:"configurator",component:function(e){return(0,r.jsx)(a.Pagination,{total:10,...e})},code:`
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"md",libraryValue:"md"},{prop:"withControls",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"withEdges",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1}]};var n=e.i(883364);let l={type:"code",code:`
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 sibling (default)</Text>
      <Pagination total={20} siblings={1} defaultValue={10} />

      <Text mb="xs" mt="xl">2 siblings</Text>
      <Pagination total={20} siblings={2} defaultValue={10} />

      <Text mb="xs" mt="xl">3 siblings</Text>
      <Pagination total={20} siblings={3} defaultValue={10} />
    </>
  );
}
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Text,{mb:"xs",children:"1 sibling (default)"}),(0,r.jsx)(a.Pagination,{total:20,siblings:1,defaultValue:10}),(0,r.jsx)(n.Text,{mb:"xs",mt:"xl",children:"2 siblings"}),(0,r.jsx)(a.Pagination,{total:20,siblings:2,defaultValue:10}),(0,r.jsx)(n.Text,{mb:"xs",mt:"xl",children:"3 siblings"}),(0,r.jsx)(a.Pagination,{total:20,siblings:3,defaultValue:10})]})}},i={type:"code",code:`
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">1 boundary (default)</Text>
      <Pagination total={20} boundaries={1} defaultValue={10} />

      <Text mt="xl" mb="xs">2 boundaries</Text>
      <Pagination total={20} boundaries={2} defaultValue={10} />

      <Text mt="xl" mb="xs">3 boundaries</Text>
      <Pagination total={20} boundaries={3} defaultValue={10} />
    </>
  );
}
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Text,{mb:"xs",children:"1 boundary (default)"}),(0,r.jsx)(a.Pagination,{total:20,boundaries:1,defaultValue:10}),(0,r.jsx)(n.Text,{mt:"xl",mb:"xs",children:"2 boundaries"}),(0,r.jsx)(a.Pagination,{total:20,boundaries:2,defaultValue:10}),(0,r.jsx)(n.Text,{mt:"xl",mb:"xs",children:"3 boundaries"}),(0,r.jsx)(a.Pagination,{total:20,boundaries:3,defaultValue:10})]})}},s={type:"code",component:function(){return(0,r.jsx)(a.Pagination,{total:10})},centered:!0};var c=e.i(363937);let d=`
import { Pagination } from '@mantine/core';

function Demo() {
  return <Pagination total={10}{{props}} />;
}
`,u={type:"styles-api",data:c.PaginationStylesApi,component:function(e){return(0,r.jsx)(a.Pagination,{total:10,...e})},code:d,centered:!0};var m=e.i(725695);let p={type:"code",component:function(){return(0,r.jsx)(a.Pagination.Root,{total:10,children:(0,r.jsxs)(m.Group,{gap:5,justify:"center",children:[(0,r.jsx)(a.Pagination.First,{}),(0,r.jsx)(a.Pagination.Previous,{}),(0,r.jsx)(a.Pagination.Items,{}),(0,r.jsx)(a.Pagination.Next,{}),(0,r.jsx)(a.Pagination.Last,{})]})})},code:`
import { Group, Pagination } from '@mantine/core';

function Demo() {
  return (
    <Pagination.Root total={10}>
      <Group gap={5} justify="center">
        <Pagination.First />
        <Pagination.Previous />
        <Pagination.Items />
        <Pagination.Next />
        <Pagination.Last />
      </Group>
    </Pagination.Root>
  );
}
`};var h=e.i(943311),f=e.i(191788),g=e.i(171481);let x=new Map([["bold",f.createElement(f.Fragment,null,f.createElement("path",{d:"M236,128a12,12,0,0,1-12,12H109l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L109,116H224A12,12,0,0,1,236,128ZM40,28A12,12,0,0,0,28,40V216a12,12,0,0,0,24,0V40A12,12,0,0,0,40,28Z"}))],["duotone",f.createElement(f.Fragment,null,f.createElement("path",{d:"M144,56V200L72,128Z",opacity:"0.2"}),f.createElement("path",{d:"M224,120H152V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,152,200V136h72a8,8,0,0,0,0-16Zm-88,60.69L83.31,128,136,75.31ZM48,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0Z"}))],["fill",f.createElement(f.Fragment,null,f.createElement("path",{d:"M48,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0Zm176,80H152V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,152,200V136h72a8,8,0,0,0,0-16Z"}))],["light",f.createElement(f.Fragment,null,f.createElement("path",{d:"M230,128a6,6,0,0,1-6,6H86.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L86.49,122H224A6,6,0,0,1,230,128ZM40,34a6,6,0,0,0-6,6V216a6,6,0,0,0,12,0V40A6,6,0,0,0,40,34Z"}))],["regular",f.createElement(f.Fragment,null,f.createElement("path",{d:"M232,128a8,8,0,0,1-8,8H91.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L91.31,120H224A8,8,0,0,1,232,128ZM40,32a8,8,0,0,0-8,8V216a8,8,0,0,0,16,0V40A8,8,0,0,0,40,32Z"}))],["thin",f.createElement(f.Fragment,null,f.createElement("path",{d:"M228,128a4,4,0,0,1-4,4H81.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,1,1,5.66,5.66L81.66,124H224A4,4,0,0,1,228,128ZM40,36a4,4,0,0,0-4,4V216a4,4,0,0,0,8,0V40A4,4,0,0,0,40,36Z"}))]]),v=f.forwardRef((e,t)=>f.createElement(g.default,{ref:t,...e,weights:x}));v.displayName="ArrowLineLeftIcon";let b=new Map([["bold",f.createElement(f.Fragment,null,f.createElement("path",{d:"M184.49,119.51a12,12,0,0,1,0,17l-72,72a12,12,0,0,1-17-17L147,140H32a12,12,0,0,1,0-24H147L95.51,64.49a12,12,0,0,1,17-17ZM216,28a12,12,0,0,0-12,12V216a12,12,0,0,0,24,0V40A12,12,0,0,0,216,28Z"}))],["duotone",f.createElement(f.Fragment,null,f.createElement("path",{d:"M184,128l-72,72V56Z",opacity:"0.2"}),f.createElement("path",{d:"M117.66,50.34A8,8,0,0,0,104,56v64H32a8,8,0,0,0,0,16h72v64a8,8,0,0,0,13.66,5.66l72-72a8,8,0,0,0,0-11.32ZM120,180.69V75.31L172.69,128ZM224,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0Z"}))],["fill",f.createElement(f.Fragment,null,f.createElement("path",{d:"M224,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM117.66,50.34A8,8,0,0,0,104,56v64H32a8,8,0,0,0,0,16h72v64a8,8,0,0,0,13.66,5.66l72-72a8,8,0,0,0,0-11.32Z"}))],["light",f.createElement(f.Fragment,null,f.createElement("path",{d:"M188.24,123.76a6,6,0,0,1,0,8.48l-72,72a6,6,0,0,1-8.48-8.48L169.51,134H32a6,6,0,0,1,0-12H169.51L107.76,60.24a6,6,0,0,1,8.48-8.48ZM216,34a6,6,0,0,0-6,6V216a6,6,0,0,0,12,0V40A6,6,0,0,0,216,34Z"}))],["regular",f.createElement(f.Fragment,null,f.createElement("path",{d:"M189.66,122.34a8,8,0,0,1,0,11.32l-72,72a8,8,0,0,1-11.32-11.32L164.69,136H32a8,8,0,0,1,0-16H164.69L106.34,61.66a8,8,0,0,1,11.32-11.32ZM216,32a8,8,0,0,0-8,8V216a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32Z"}))],["thin",f.createElement(f.Fragment,null,f.createElement("path",{d:"M186.83,125.17a4,4,0,0,1,0,5.66l-72,72a4,4,0,0,1-5.66-5.66L174.34,132H32a4,4,0,0,1,0-8H174.34L109.17,58.83a4,4,0,0,1,5.66-5.66ZM216,36a4,4,0,0,0-4,4V216a4,4,0,0,0,8,0V40A4,4,0,0,0,216,36Z"}))]]),y=f.forwardRef((e,t)=>f.createElement(g.default,{ref:t,...e,weights:b}));y.displayName="ArrowLineRightIcon";var w=e.i(858508);let S=new Map([["bold",f.createElement(f.Fragment,null,f.createElement("path",{d:"M76,92A16,16,0,1,1,60,76,16,16,0,0,1,76,92Zm52-16a16,16,0,1,0,16,16A16,16,0,0,0,128,76Zm68,32a16,16,0,1,0-16-16A16,16,0,0,0,196,108ZM60,148a16,16,0,1,0,16,16A16,16,0,0,0,60,148Zm68,0a16,16,0,1,0,16,16A16,16,0,0,0,128,148Zm68,0a16,16,0,1,0,16,16A16,16,0,0,0,196,148Z"}))],["duotone",f.createElement(f.Fragment,null,f.createElement("path",{d:"M240,64V192a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V64A16,16,0,0,1,32,48H224A16,16,0,0,1,240,64Z",opacity:"0.2"}),f.createElement("path",{d:"M72,92A12,12,0,1,1,60,80,12,12,0,0,1,72,92Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,80Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,104ZM60,152a12,12,0,1,0,12,12A12,12,0,0,0,60,152Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,152Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,152Z"}))],["fill",f.createElement(f.Fragment,null,f.createElement("path",{d:"M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM68,168a12,12,0,1,1,12-12A12,12,0,0,1,68,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,68,112Zm60,56a12,12,0,1,1,12-12A12,12,0,0,1,128,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,128,112Zm60,56a12,12,0,1,1,12-12A12,12,0,0,1,188,168Zm0-56a12,12,0,1,1,12-12A12,12,0,0,1,188,112Z"}))],["light",f.createElement(f.Fragment,null,f.createElement("path",{d:"M70,92A10,10,0,1,1,60,82,10,10,0,0,1,70,92Zm58-10a10,10,0,1,0,10,10A10,10,0,0,0,128,82Zm68,20a10,10,0,1,0-10-10A10,10,0,0,0,196,102ZM60,154a10,10,0,1,0,10,10A10,10,0,0,0,60,154Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,128,154Zm68,0a10,10,0,1,0,10,10A10,10,0,0,0,196,154Z"}))],["regular",f.createElement(f.Fragment,null,f.createElement("path",{d:"M72,92A12,12,0,1,1,60,80,12,12,0,0,1,72,92Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,128,80Zm68,24a12,12,0,1,0-12-12A12,12,0,0,0,196,104ZM60,152a12,12,0,1,0,12,12A12,12,0,0,0,60,152Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,128,152Zm68,0a12,12,0,1,0,12,12A12,12,0,0,0,196,152Z"}))],["thin",f.createElement(f.Fragment,null,f.createElement("path",{d:"M68,92a8,8,0,1,1-8-8A8,8,0,0,1,68,92Zm60-8a8,8,0,1,0,8,8A8,8,0,0,0,128,84Zm68,16a8,8,0,1,0-8-8A8,8,0,0,0,196,100ZM60,156a8,8,0,1,0,8,8A8,8,0,0,0,60,156Zm68,0a8,8,0,1,0,8,8A8,8,0,0,0,128,156Zm68,0a8,8,0,1,0,8,8A8,8,0,0,0,196,156Z"}))]]),k=f.forwardRef((e,t)=>f.createElement(g.default,{ref:t,...e,weights:S}));k.displayName="DotsSixIcon";let D={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Pagination,{total:10,withEdges:!0,nextIcon:w.ArrowRightIcon,previousIcon:h.ArrowLeftIcon,firstIcon:v,lastIcon:y,dotsIcon:k}),(0,r.jsx)(a.Pagination.Root,{total:10,children:(0,r.jsxs)(m.Group,{gap:7,mt:"xl",children:[(0,r.jsx)(a.Pagination.First,{icon:v}),(0,r.jsx)(a.Pagination.Previous,{icon:h.ArrowLeftIcon}),(0,r.jsx)(a.Pagination.Items,{dotsIcon:k}),(0,r.jsx)(a.Pagination.Next,{icon:w.ArrowRightIcon}),(0,r.jsx)(a.Pagination.Last,{icon:y})]})})]})},code:`
import { Group, Pagination } from '@mantine/core';
import { ArrowLineRightIcon, ArrowLineLeftIcon, ArrowLeftIcon, ArrowRightIcon, DotsSixIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      {/* Regular pagination */}
      <Pagination
        total={10}
        withEdges
        nextIcon={ArrowRightIcon}
        previousIcon={ArrowLeftIcon}
        firstIcon={ArrowLineLeftIcon}
        lastIcon={ArrowLineRightIcon}
        dotsIcon={DotsSixIcon}
      />

      {/* Compound pagination */}
      <Pagination.Root total={10}>
        <Group gap={7} mt="xl">
          <Pagination.First icon={ArrowLineLeftIcon} />
          <Pagination.Previous icon={ArrowLeftIcon} />
          <Pagination.Items dotsIcon={DotsSixIcon} />
          <Pagination.Next icon={ArrowRightIcon} />
          <Pagination.Last icon={ArrowLineRightIcon} />
        </Group>
      </Pagination.Root>
    </>
  );
}
`},M={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Pagination,{total:10,withEdges:!0,getItemProps:e=>({component:"a",href:`#page-${e}`}),getControlProps:e=>"first"===e?{component:"a",href:"#page-0"}:"last"===e?{component:"a",href:"#page-10"}:"next"===e?{component:"a",href:"#page-2"}:"previous"===e?{component:"a",href:"#page-1"}:{}}),(0,r.jsx)(a.Pagination.Root,{total:10,getItemProps:e=>({component:"a",href:`#page-${e}`}),children:(0,r.jsxs)(m.Group,{gap:7,mt:"xl",children:[(0,r.jsx)(a.Pagination.First,{component:"a",href:"#page-0"}),(0,r.jsx)(a.Pagination.Previous,{component:"a",href:"#page-1"}),(0,r.jsx)(a.Pagination.Items,{}),(0,r.jsx)(a.Pagination.Next,{component:"a",href:"#page-2"}),(0,r.jsx)(a.Pagination.Last,{component:"a",href:"#page-10"})]})})]})},code:`
import { Group, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      {/* Regular pagination */}
      <Pagination
        total={10}
        withEdges
        getItemProps={(page) => ({
          component: 'a',
          href: \`#page-\${page}\`,
        })}
        getControlProps={(control) => {
          if (control === 'first') {
            return { component: 'a', href: '#page-0' };
          }

          if (control === 'last') {
            return { component: 'a', href: '#page-10' };
          }

          if (control === 'next') {
            return { component: 'a', href: '#page-2' };
          }

          if (control === 'previous') {
            return { component: 'a', href: '#page-1' };
          }

          return {};
        }}
      />

      {/* Compound pagination */}
      <Pagination.Root
        total={10}
        getItemProps={(page) => ({
          component: 'a',
          href: \`#page-\${page}\`,
        })}
      >
        <Group gap={7} mt="xl">
          <Pagination.First component="a" href="#page-0" />
          <Pagination.Previous component="a" href="#page-1" />
          <Pagination.Items />
          <Pagination.Next component="a" href="#page-2" />
          <Pagination.Last component="a" href="#page-10" />
        </Group>
      </Pagination.Root>
    </>
  );
}

`};var j=e.i(57807);let C=`
import { useState } from 'react';
import { randomId } from '@mantine/hooks';
import { Pagination, Text } from '@mantine/core';

function chunk<T>(array: T[], size: number): T[][] {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
}

const data = chunk(
  Array(30)
    .fill(0)
    .map((_, index) => ({ id: index, name: randomId() })),
  5
);

function Demo() {
  const [activePage, setPage] = useState(1);
  const items = data[activePage - 1].map((item) => (
    <Text key={item.id}>
      id: {item.id}, name: {item.name}
    </Text>
  ));

  return (
    <>
      {items}
      <Pagination total={data.length} value={activePage} onChange={setPage} mt="sm" />
    </>
  );
}
`,A=function e(t,a){return t.length?[t.slice(0,a),...e(t.slice(a),a)]:[]}(Array(30).fill(0).map((e,t)=>({id:t,name:(0,j.randomId)()})),5),V={type:"code",component:function(){let[e,t]=(0,f.useState)(1);return(0,r.jsxs)(r.Fragment,{children:[A[e-1].map(e=>(0,r.jsxs)(n.Text,{children:["id: ",e.id,", name: ",e.name]},e.id)),(0,r.jsx)(a.Pagination,{total:A.length,value:e,onChange:t,mt:"sm"})]})},code:C,centered:!0},Y={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Text,{children:"autoContrast: off"}),(0,r.jsx)(a.Pagination,{total:10,color:"lime.4"}),(0,r.jsx)(n.Text,{mt:"md",children:"autoContrast: on"}),(0,r.jsx)(a.Pagination,{total:10,autoContrast:!0,color:"lime.4"})]})},code:`
import { Pagination, Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text>autoContrast: off</Text>
      <Pagination total={10} color="lime.4" />

      <Text mt="md">autoContrast: on</Text>
      <Pagination total={10} autoContrast color="lime.4" />
    </>
  );
}`,centered:!0},P=Math.ceil(14.5),I={type:"code",component:function(){let[e,t]=(0,f.useState)(1);return(0,r.jsxs)(m.Group,{justify:"flex-end",children:[(0,r.jsx)(n.Text,{size:"sm",children:`Showing ${10*(e-1)+1} – ${Math.min(145,10*e)} of 145`}),(0,r.jsx)(a.Pagination,{total:P,value:e,onChange:t,withPages:!1})]})},code:`
import { useState } from 'react';
import { Group, Pagination, Text } from '@mantine/core';

const limit = 10;
const total = 145;
const totalPages = Math.ceil(total / limit);

function Demo() {
  const [page, setPage] = useState(1);
  const message = \`Showing \${limit * (page - 1) + 1} – \${Math.min(total, limit * page)} of \${total}\`;

  return (
    <Group justify="flex-end">
      <Text size="sm">{message}</Text>
      <Pagination total={totalPages} value={page} onChange={setPage} withPages={false} />
    </Group>
  );
}
`};var T=e.i(485108),H=e.i(841209);let L={type:"code",component:function(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(m.Group,{children:[(0,r.jsx)(a.Pagination,{total:45,size:"sm"}),(0,r.jsx)(T.Button,{size:"sm",children:"sm button"}),(0,r.jsx)(H.TextInput,{size:"sm",placeholder:"sm input"})]}),(0,r.jsxs)(m.Group,{mt:"md",children:[(0,r.jsx)(a.Pagination,{total:45,size:"input-sm"}),(0,r.jsx)(T.Button,{size:"sm",children:"sm button"}),(0,r.jsx)(H.TextInput,{size:"sm",placeholder:"sm input"})]})]})},code:`
import { Button, Group, Pagination, TextInput } from '@mantine/core';

function Demo() {
  return (
    <div>
      <Group>
        <Pagination total={45} size="sm" />
        <Button size="sm">sm button</Button>
        <TextInput size="sm" placeholder="sm input" />
      </Group>

      <Group mt="md">
        <Pagination total={45} size="input-sm" />
        <Button size="sm">sm button</Button>
        <TextInput size="sm" placeholder="sm input" />
      </Group>
    </div>
  );
}
`},B={type:"code",code:`
import { Text, Pagination } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text mb="xs">Pages 5–15 (startValue=5, total=15)</Text>
      <Pagination total={15} startValue={5} defaultValue={5} />
    </>
  );
}
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Text,{mb:"xs",children:"Pages 5–15 (startValue=5, total=15)"}),(0,r.jsx)(a.Pagination,{total:15,startValue:5,defaultValue:5})]})}};var E=(0,t.__exportAll)({autoContrast:()=>Y,boundaries:()=>i,composition:()=>p,configurator:()=>o,icons:()=>D,links:()=>M,siblings:()=>l,size:()=>L,startValue:()=>B,stylesApi:()=>u,usage:()=>s,withContent:()=>V,withPages:()=>I});e.s(["PaginationDemos",0,E],806205)},900424,e=>{"use strict";var t=e.i(648863),a=e.i(883364),r=e.i(391398);function o(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Text,{size:"xl",fw:700,children:"Charizard (Pokémon)"}),(0,r.jsx)(a.Text,{c:"dimmed",children:"Charizard description from Bulbapedia"}),(0,r.jsx)(a.Text,{size:"sm",mt:"md",children:"Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like appendage juts out from the top of the third joint of each wing. A single wing-finger is visible through the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade feet. The tip of its long, tapering tail burns with a sizable flame."}),(0,r.jsx)(a.Text,{size:"sm",mt:"md",children:"As Mega Charizard X, its body and legs are more physically fit, though its arms remain thin. Its skin turns black with a sky-blue underside and soles. Two spikes with blue tips curve upward from the front and back of each shoulder, while the tips of its horns sharpen, turn blue, and curve slightly upward. Its brow and claws are larger, and its eyes are now red. It has two small, fin-like spikes under each horn and two more down its lower neck. The finger disappears from the wing membrane, and the lower edges are divided into large, rounded points. The third joint of each wing-arm is adorned with a claw-like spike. Mega Charizard X breathes blue flames out the sides of its mouth, and the flame on its tail now burns blue. It is said that its new power turns it black and creates more intense flames."})]})}var n=e.i(232471),l=e.i(19300);let i={type:"configurator",component:function(e){return(0,r.jsx)(n.Box,{maw:400,mx:"auto",children:(0,r.jsx)(l.ScrollArea,{h:250,...e,children:(0,r.jsx)(o,{})})})},code:`
import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea h={250}{{props}}>
      {/* ... content */}
    </ScrollArea>
  );
}
`,controls:[{prop:"type",type:"select",data:[{value:"hover",label:"Hover"},{value:"auto",label:"Auto"},{value:"always",label:"Always"},{value:"scroll",label:"Scroll"},{value:"never",label:"Never"}],initialValue:"hover",libraryValue:"hover"},{prop:"offsetScrollbars",type:"boolean",libraryValue:!1,initialValue:!1},{prop:"overscrollBehavior",type:"segmented",initialValue:"auto",libraryValue:"auto",data:[{value:"auto",label:"Auto"},{value:"contain",label:"Contain"},{value:"none",label:"None"}]},{prop:"scrollbarSize",type:"number",min:2,max:20,step:2,libraryValue:10,initialValue:10},{prop:"scrollHideDelay",type:"number",min:0,max:6e3,step:500,libraryValue:1e3,initialValue:1e3}]},s={type:"code",component:function(){return(0,r.jsx)(l.ScrollArea,{w:300,h:200,children:(0,r.jsx)(n.Box,{w:600,children:(0,r.jsx)(o,{})})})},centered:!0,code:`
import { ScrollArea, Box } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea w={300} h={200}>
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
`};var c=e.i(191788),d=e.i(485108),u=e.i(725695),m=e.i(671640);let p={type:"code",component:function(){let e=(0,c.useRef)(null);return(0,r.jsxs)(m.Stack,{align:"center",children:[(0,r.jsx)(l.ScrollArea,{w:300,h:200,viewportRef:e,children:(0,r.jsx)(o,{})}),(0,r.jsxs)(u.Group,{justify:"center",children:[(0,r.jsx)(d.Button,{onClick:()=>e.current.scrollTo({top:e.current.scrollHeight,behavior:"smooth"}),children:"Scroll to bottom"}),(0,r.jsx)(d.Button,{onClick:()=>e.current.scrollTo({top:e.current.scrollHeight/2,behavior:"smooth"}),children:"Scroll to center"}),(0,r.jsx)(d.Button,{onClick:()=>e.current.scrollTo({top:0,behavior:"smooth"}),children:"Scroll to top"})]})]})},code:`
import { useRef } from 'react';
import { ScrollArea, Button, Stack, Group } from '@mantine/core';

function Demo() {
  const viewport = useRef<HTMLDivElement>(null);

  const scrollToBottom = () =>
    viewport.current!.scrollTo({ top: viewport.current!.scrollHeight, behavior: 'smooth' });

  const scrollToCenter = () =>
    viewport.current!.scrollTo({ top: viewport.current!.scrollHeight / 2, behavior: 'smooth' });

  const scrollToTop = () => viewport.current!.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Stack align="center">
      <ScrollArea w={300} h={200} viewportRef={viewport}>
        {/* ... content */}
      </ScrollArea>

      <Group justify="center">
        <Button onClick={scrollToBottom}>Scroll to bottom</Button>
        <Button onClick={scrollToCenter}>Scroll to center</Button>
        <Button onClick={scrollToTop}>Scroll to top</Button>
      </Group>
    </Stack>
  );
}
`};var h=e.i(301388);let f={type:"code",component:function(){let[e,t]=(0,c.useState)({x:0,y:0});return(0,r.jsxs)(m.Stack,{align:"center",children:[(0,r.jsx)(l.ScrollArea,{w:300,h:200,onScrollPositionChange:t,children:(0,r.jsx)(n.Box,{w:600,children:(0,r.jsx)(o,{})})}),(0,r.jsxs)(a.Text,{children:["Scroll position: ",(0,r.jsx)(h.Code,{children:`{ x: ${e.x}, y: ${e.y} }`})]})]})},code:`
import { useState } from 'react';
import { Text, ScrollArea, Code, Box } from '@mantine/core';

function Demo() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

  return (
    <>
      <ScrollArea
        w={300}
        h={200}
        onScrollPositionChange={onScrollPositionChange}
      >
        <Box w={600}>
          {/* ... content */}
        </Box>
      </ScrollArea>

      <Text>
        Scroll position: <Code>{\`{ x: \${scrollPosition.x}, y: \${scrollPosition.y} }\`}</Code>
      </Text>
    </>
  );
}
`};var g=e.i(692385);let x={type:"code",component:function(){let[e,t]=(0,g.useCounter)(3,{min:0,max:10}),a=Array(e).fill(0).map((e,t)=>(0,r.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!"},t));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.ScrollArea.Autosize,{mah:300,maw:400,mx:"auto",children:a}),(0,r.jsxs)(u.Group,{justify:"center",mt:"md",children:[(0,r.jsx)(d.Button,{color:"red",onClick:t.decrement,children:"Remove paragraph"}),(0,r.jsx)(d.Button,{onClick:t.increment,children:"Add paragraph"})]})]})},code:`
import { useCounter } from '@mantine/hooks';
import { ScrollArea, Button, Group } from '@mantine/core';

const lorem =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!';

function Demo() {
  const [count, handlers] = useCounter(3, { min: 0, max: 10 });
  const content = Array(count)
    .fill(0)
    .map((_, index) => <p key={index}>{lorem}</p>);

  return (
    <>
      <ScrollArea.Autosize mah={300} maw={400} mx="auto">
        {content}
      </ScrollArea.Autosize>

      <Group justify="center" mt="md">
        <Button color="red" onClick={handlers.decrement}>
          Remove paragraph
        </Button>
        <Button onClick={handlers.increment}>
          Add paragraph
        </Button>
      </Group>
    </>
  );
}
`};var v={scrollbar:"m_3dc2e23a",thumb:"m_b848b7ea",corner:"m_342d2ec1"};let b={type:"code",component:function(){return(0,r.jsx)(l.ScrollArea,{w:300,h:200,type:"always",offsetScrollbars:!0,classNames:v,children:(0,r.jsx)(n.Box,{w:600,children:(0,r.jsx)(o,{})})})},centered:!0,code:[{fileName:"Demo.tsx",code:`
import { ScrollArea, Box } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <ScrollArea w={300} h={200} type="always" offsetScrollbars classNames={classes}>
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.scrollbar {
  &,
  &:hover {
    background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  }

  &[data-orientation='vertical'] .thumb {
    background-color: var(--mantine-color-red-6);
  }

  &[data-orientation='horizontal'] .thumb {
    background-color: var(--mantine-color-blue-6);
  }
}

.corner {
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  opacity: 1;
}
`,language:"scss"}]};var y=e.i(841209),w=e.i(284629);let S=["🍎 Apples","🍌 Bananas","🍊 Oranges","🥛 Milk","🍞 Bread","🥚 Eggs","🍗 Chicken","🥩 Beef","🍝 Pasta","🍚 Rice","🥔 Potatoes","🧅 Onions","🍅 Tomatoes","🥒 Cucumbers","🥕 Carrots","🥬 Lettuce","🍃 Spinach","🥦 Broccoli","🧀 Cheese","🍦 Yogurt","🧈 Butter","🍚 Sugar","🧂 Salt","🌶️ Pepper","☕ Coffee","🍵 Tea","🥤 Juice","💧 Water","🍪 Cookies","🍫 Chocolate"],k={type:"code",component:function(){let e=(0,c.useRef)(null),[t,a]=(0,c.useState)(""),[o,n]=(0,c.useState)(-1),i=S.filter(e=>e.toLowerCase().includes(t.toLowerCase())),s=i.map((e,t)=>(0,r.jsx)(w.UnstyledButton,{"data-list-item":!0,display:"block",bg:t===o?"var(--mantine-color-blue-light)":void 0,w:"100%",p:5,children:e},e));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y.TextInput,{value:t,onChange:e=>{a(e.currentTarget.value),n(-1)},onKeyDown:t=>{"ArrowDown"===t.key&&(t.preventDefault(),n(t=>{let a=t+1>=i.length?t:t+1;return e.current?.querySelectorAll("[data-list-item]")?.[a]?.scrollIntoView({block:"nearest"}),a})),"ArrowUp"===t.key&&(t.preventDefault(),n(t=>{let a=t-1<0?t:t-1;return e.current?.querySelectorAll("[data-list-item]")?.[a]?.scrollIntoView({block:"nearest"}),a}))},placeholder:"Search groceries"}),(0,r.jsx)(l.ScrollArea,{h:150,type:"always",mt:"md",viewportRef:e,children:s})]})},code:`
import { useState, useRef } from 'react';
import { ScrollArea, UnstyledButton, TextInput } from '@mantine/core';

const groceries: string[] = [
  '🍎 Apples',
  '🍌 Bananas',
  '🍊 Oranges',
  '🥛 Milk',
  '🍞 Bread',
  '🥚 Eggs',
  '🍗 Chicken',
  '🥩 Beef',
  '🍝 Pasta',
  '🍚 Rice',
  '🥔 Potatoes',
  '🧅 Onions',
  '🍅 Tomatoes',
  '🥒 Cucumbers',
  '🥕 Carrots',
  '🥬 Lettuce',
  '🍃 Spinach',
  '🥦 Broccoli',
  '🧀 Cheese',
  '🍦 Yogurt',
  '🧈 Butter',
  '🍚 Sugar',
  '🧂 Salt',
  '🌶️ Pepper',
  '☕ Coffee',
  '🍵 Tea',
  '🥤 Juice',
  '💧 Water',
  '🍪 Cookies',
  '🍫 Chocolate',
];

function Demo() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  const [hovered, setHovered] = useState(-1);
  const filtered = groceries.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  const items = filtered.map((item, index) => (
    <UnstyledButton
      data-list-item
      key={item}
      display="block"
      bg={index === hovered ? 'var(--mantine-color-blue-light)' : undefined}
      w="100%"
      p={5}
    >
      {item}
    </UnstyledButton>
  ));

  return (
    <>
      <TextInput
        value={query}
        onChange={(event) => {
          setQuery(event.currentTarget.value);
          setHovered(-1);
        }}
        onKeyDown={(event) => {
          if (event.key === 'ArrowDown') {
            event.preventDefault();
            setHovered((current) => {
              const nextIndex = current + 1 >= filtered.length ? current : current + 1;
              viewportRef.current
                ?.querySelectorAll('[data-list-item]')
                ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
              return nextIndex;
            });
          }

          if (event.key === 'ArrowUp') {
            event.preventDefault();
            setHovered((current) => {
              const nextIndex = current - 1 < 0 ? current : current - 1;
              viewportRef.current
                ?.querySelectorAll('[data-list-item]')
                ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
              return nextIndex;
            });
          }
        }}
        placeholder="Search groceries"
      />
      <ScrollArea h={150} type="always" mt="md" viewportRef={viewportRef}>
        {items}
      </ScrollArea>
    </>
  );
}
`,centered:!0,maxWidth:340};var D=e.i(392862);let M=["Apples","Bananas","Oranges","Milk","Bread","Eggs","Chicken","Beef","Pasta","Rice","Potatoes","Onions","Tomatoes","Cucumbers","Carrots","Lettuce","Spinach","Broccoli","Cheese","Yogurt","Butter","Sugar","Salt","Pepper","Coffee","Tea","Juice","Water","Cookies","Chocolate"],j={type:"code",component:function(){let e=(0,c.useRef)(null),[t,o]=(0,c.useState)(""),[i,s]=(0,c.useState)(!1),[d,u]=(0,c.useState)(-1),m=M.filter(e=>e.toLowerCase().includes(t.toLowerCase())),p=m.map((e,t)=>(0,r.jsx)(w.UnstyledButton,{"data-list-item":!0,display:"block",bg:t===d?"var(--mantine-color-blue-light)":void 0,w:"100%",p:5,children:e},e));return(0,r.jsxs)(D.Popover,{width:"target",opened:i,children:[(0,r.jsx)(D.Popover.Target,{children:(0,r.jsx)(y.TextInput,{value:t,onFocus:()=>s(!0),onBlur:()=>s(!1),onChange:e=>{o(e.currentTarget.value),u(-1)},onKeyDown:t=>{"ArrowDown"===t.key&&(t.preventDefault(),u(t=>{let a=t+1>=m.length?t:t+1;return e.current?.querySelectorAll("[data-list-item]")?.[a]?.scrollIntoView({block:"nearest"}),a})),"ArrowUp"===t.key&&(t.preventDefault(),u(t=>{let a=t-1<0?t:t-1;return e.current?.querySelectorAll("[data-list-item]")?.[a]?.scrollIntoView({block:"nearest"}),a}))},placeholder:"Search groceries"})}),(0,r.jsx)(D.Popover.Dropdown,{p:0,children:(0,r.jsx)(l.ScrollArea.Autosize,{viewportRef:e,mah:200,type:"always",scrollbars:"y",children:(0,r.jsx)(n.Box,{px:"xs",py:5,children:p.length>0?p:(0,r.jsx)(a.Text,{c:"dimmed",children:"Nothing found"})})})})]})},code:`
import { useState, useRef } from 'react';
import { ScrollArea, Popover, TextInput, UnstyledButton, Text, Box } from '@mantine/core';

const groceries = [
  'Apples',
  'Bananas',
  'Oranges',
  'Milk',
  'Bread',
  'Eggs',
  'Chicken',
  'Beef',
  'Pasta',
  'Rice',
  'Potatoes',
  'Onions',
  'Tomatoes',
  'Cucumbers',
  'Carrots',
  'Lettuce',
  'Spinach',
  'Broccoli',
  'Cheese',
  'Yogurt',
  'Butter',
  'Sugar',
  'Salt',
  'Pepper',
  'Coffee',
  'Tea',
  'Juice',
  'Water',
  'Cookies',
  'Chocolate',
];

function Demo() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState('');
  const [opened, setOpened] = useState(false);
  const [hovered, setHovered] = useState(-1);
  const filtered = groceries.filter((item) => item.toLowerCase().includes(query.toLowerCase()));
  const items = filtered.map((item, index) => (
    <UnstyledButton
      data-list-item
      key={item}
      display="block"
      bg={index === hovered ? 'var(--mantine-color-blue-light)' : undefined}
      w="100%"
      p={5}
    >
      {item}
    </UnstyledButton>
  ));

  return (
    <Popover width="target" opened={opened}>
      <Popover.Target>
        <TextInput
          value={query}
          onFocus={() => setOpened(true)}
          onBlur={() => setOpened(false)}
          onChange={(event) => {
            setQuery(event.currentTarget.value);
            setHovered(-1);
          }}
          onKeyDown={(event) => {
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              setHovered((current) => {
                const nextIndex = current + 1 >= filtered.length ? current : current + 1;
                viewportRef.current
                  ?.querySelectorAll('[data-list-item]')
                  ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
                return nextIndex;
              });
            }

            if (event.key === 'ArrowUp') {
              event.preventDefault();
              setHovered((current) => {
                const nextIndex = current - 1 < 0 ? current : current - 1;
                viewportRef.current
                  ?.querySelectorAll('[data-list-item]')
                  ?.[nextIndex]?.scrollIntoView({ block: 'nearest' });
                return nextIndex;
              });
            }
          }}
          placeholder="Search groceries"
        />
      </Popover.Target>
      <Popover.Dropdown p={0}>
        <ScrollArea.Autosize viewportRef={viewportRef} mah={200} type="always" scrollbars="y">
          <Box px="xs" py={5}>
            {items.length > 0 ? items : <Text c="dimmed">Nothing found</Text>}
          </Box>
        </ScrollArea.Autosize>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,maxWidth:340},C={type:"code",component:function(){return(0,r.jsx)(l.ScrollArea,{w:300,h:200,scrollbars:"y",children:(0,r.jsx)(n.Box,{w:600,children:(0,r.jsx)(o,{})})})},centered:!0,code:`
import { ScrollArea, Box } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea w={300} h={200} scrollbars="y">
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
`};var A=e.i(257177);let V={type:"code",component:function(){let[e,t]=(0,c.useState)(0),[o,i]=(0,c.useState)(0),[s,d]=(0,c.useState)(0),[p,h]=(0,c.useState)(0);return(0,r.jsxs)(m.Stack,{align:"center",children:[(0,r.jsxs)(u.Group,{children:[(0,r.jsxs)(A.Badge,{color:"blue",children:["Top: ",e]}),(0,r.jsxs)(A.Badge,{color:"green",children:["Bottom: ",o]}),(0,r.jsxs)(A.Badge,{color:"orange",children:["Left: ",s]}),(0,r.jsxs)(A.Badge,{color:"grape",children:["Right: ",p]})]}),(0,r.jsx)(l.ScrollArea,{h:200,w:300,onTopReached:()=>t(e=>e+1),onBottomReached:()=>i(e=>e+1),onLeftReached:()=>d(e=>e+1),onRightReached:()=>h(e=>e+1),children:(0,r.jsx)(n.Box,{w:600,children:Array(50).fill(0).map((e,t)=>(0,r.jsxs)(a.Text,{children:["Line ",t+1," - This is a long line that requires horizontal scrolling"]},t))})})]})},code:`
import { useState } from 'react';
import { Badge, Box, Group, ScrollArea, Stack, Text } from '@mantine/core';

function Demo() {
  const [topReached, setTopReached] = useState(0);
  const [bottomReached, setBottomReached] = useState(0);
  const [leftReached, setLeftReached] = useState(0);
  const [rightReached, setRightReached] = useState(0);

  return (
    <Stack align="center">
      <Group>
        <Badge color="blue">Top: {topReached}</Badge>
        <Badge color="green">Bottom: {bottomReached}</Badge>
        <Badge color="orange">Left: {leftReached}</Badge>
        <Badge color="grape">Right: {rightReached}</Badge>
      </Group>

      <ScrollArea
        h={200}
        w={300}
        onTopReached={() => setTopReached((c) => c + 1)}
        onBottomReached={() => setBottomReached((c) => c + 1)}
        onLeftReached={() => setLeftReached((c) => c + 1)}
        onRightReached={() => setRightReached((c) => c + 1)}
      >
        <Box w={600}>
          {Array(50)
            .fill(0)
            .map((_, i) => (
              <Text key={i}>
                Line {i + 1} - This is a long line that requires horizontal scrolling
              </Text>
            ))}
        </Box>
      </ScrollArea>
    </Stack>
  );
}
`},Y={type:"code",component:function(){return(0,r.jsx)(l.ScrollArea,{h:200,startScrollPosition:{y:250},children:(0,r.jsx)(o,{})})},code:`
import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea h={200} startScrollPosition={{ y: 250 }}>
      {/* ... content */}
    </ScrollArea>
  );
}
`,centered:!0,maxWidth:300};var P=(0,t.__exportAll)({autosizePopover:()=>j,boundaries:()=>V,horizontal:()=>s,maxHeight:()=>x,scrollIntoView:()=>k,scrollPosition:()=>f,scrollTo:()=>p,scrollbars:()=>C,startScrollPosition:()=>Y,stylesApi:()=>b,usage:()=>i});e.s(["ScrollAreaDemos",0,P],900424)},122308,e=>{"use strict";var t=e.i(605520),a=e.i(753381),r=e.i(494834),o=e.i(4332),n=e.i(657068),l=e.i(966696),i=e.i(298008),s=e.i(898770),c=e.i(27748),d=e.i(621304),u=e.i(855578),m=e.i(232471),p=e.i(284629),h=e.i(317477),f=e.i(951254),g=e.i(191788),x=e.i(205693),v=e.i(391398);function b({month:e,getStyles:o,monthLabelFormat:n="MMMM",withWeekNumbers:l,withWeekDays:i,locale:s,firstDayOfWeek:y,weekdayFormat:w,weekendDays:S,getDayProps:k,onDayClick:D,onWeekNumberClick:M,onMonthClick:j,getWeekNumberProps:C,highlightToday:A,groupedEvents:V,mode:Y,withOutsideDays:P,__getDayRef:I,__onDayKeyDown:T,firstDayIndex:H}){let L=(0,x.useDatesContext)(),B=(0,f.useMantineTheme)(),E=(0,r.default)(),R=i?(0,d.getWeekdaysNames)({locale:L.getLocale(s),format:w,firstDayOfWeek:L.getFirstDayOfWeek(y)}).map((e,t)=>(0,g.createElement)("div",{...o("yearViewWeekday"),key:t},e)):null,Z=(0,t.getMonthDays)({month:(0,r.default)(e).format("YYYY-MM-DD"),firstDayOfWeek:L.getFirstDayOfWeek(y),consistentWeeks:!0}).map((t,n)=>{let i=t.map((t,l)=>{let i=!(0,a.isSameMonth)(t,e);if(i&&!P)return(0,g.createElement)("div",{...o("yearViewDay"),"data-day-placeholder":!0,key:t});let c=L.getWeekendDays(S).includes((0,r.default)(t).day()),d=(0,r.default)(t).locale(s||L.locale).format("MMMM D, YYYY"),u=k?.((0,r.default)(t).format("YYYY-MM-DD"))||{},m=(0,r.default)(t).isSame(E,"day")&&A,f=V?.[(0,r.default)(t).format("YYYY-MM-DD")]||[],x=H&&n===H.weekIndex&&l===H.dayIndex,b="static"!==Y&&!i&&x,y=f.slice(0,3).map(e=>(0,g.createElement)("div",{...o("yearViewDayIndicator",{style:{backgroundColor:(0,h.getThemeColor)(e.color,B)}}),key:e.id}));return(0,g.createElement)(p.UnstyledButton,{"aria-label":d,...u,...o("yearViewDay",{className:u.className,style:u.style}),key:t,mod:[{outside:i,weekend:c,today:m,static:"static"===Y},u.mod],tabIndex:b?0:-1,ref:e=>{e&&I?.(n,l,e)},onKeyDown:e=>{u.onKeyDown?.(e),T?.(e,{weekIndex:n,dayIndex:l,date:t})},onClick:"static"===Y?void 0:e=>{D?.((0,r.default)(t).format("YYYY-MM-DD"),e),u.onClick?.(e)}},(0,r.default)(t).format("D"),(0,v.jsx)("div",{...o("yearViewDayIndicators"),children:y}))}),c=C?.((0,r.default)(t[0]).format("YYYY-MM-DD"))||{},d=(0,u.getWeekNumber)(t);return(0,g.createElement)("div",{...o("yearViewWeek"),key:n},l&&(0,v.jsx)(p.UnstyledButton,{"aria-label":`Week ${d}`,title:`Week ${d}`,...c,onClick:"static"===Y?void 0:e=>{M?.((0,r.default)(t[0]).format("YYYY-MM-DD"),e),c.onClick?.(e)},mod:{static:"static"===Y},tabIndex:"static"===Y?-1:0,...o("yearViewWeekNumber",{className:c.className,style:c.style}),children:d},d),i)});return(0,v.jsxs)(m.Box,{mod:[{"with-week-numbers":l,"with-weekdays":i,static:"static"===Y}],...o("yearViewMonth"),children:[(0,v.jsx)(p.UnstyledButton,{onClick:"static"===Y?void 0:t=>j?.((0,r.default)(e).startOf("month").format("YYYY-MM-DD"),t),mod:{static:"static"===Y},tabIndex:"static"===Y?-1:0,...o("yearViewMonthCaption"),children:(0,c.formatDate)({locale:L.getLocale(s),date:e,format:n})}),R&&(0,v.jsxs)("div",{...o("yearViewWeekdays"),children:[l&&(0,v.jsx)("div",{...o("yearViewWeekdaysCorner")}),R]}),Z]})}var y={yearView:"m_7301354d",yearViewMonths:"m_8b7a61a0",yearViewMonth:"m_3e4e4533",yearViewWeekdays:"m_845972b8",yearViewWeek:"m_f9c4dae1",yearViewWeekNumber:"m_af51358a",yearViewWeekday:"m_e33cb11b",yearViewWeekdaysCorner:"m_221ce72d",yearViewDay:"m_399ab70f",yearViewMonthCaption:"m_950e3d33",yearViewDayIndicators:"m_98250b3",yearViewDayIndicator:"m_10d2a7c0"},w=e.i(481178),S=e.i(275519),k=e.i(433512),D=e.i(44091),M=e.i(62904),j=e.i(391466);let C={__staticSelector:"YearView",monthLabelFormat:"MMMM",withWeekDays:!0,highlightToday:!0,withHeader:!0,withOutsideDays:!0,mode:"default"},A=(0,w.createVarsResolver)((e,{radius:t})=>({yearView:{"--year-view-radius":void 0!==t?(0,k.getRadius)(t):void 0}})),V=(0,S.factory)(e=>{let c=(0,D.useProps)("YearView",C,e),{date:d,onDateChange:u,events:p,monthLabelFormat:h,withWeekNumbers:f,withWeekDays:w,locale:S,firstDayOfWeek:k,weekdayFormat:V,weekendDays:Y,onMonthClick:P,onDayClick:I,onWeekNumberClick:T,getDayProps:H,getWeekNumberProps:L,highlightToday:B,labels:E,withOutsideDays:R,withHeader:Z,monthYearSelectProps:z,onViewChange:F,previousControlProps:W,nextControlProps:N,todayControlProps:_,viewSelectProps:G,__staticSelector:O,classNames:$,className:q,style:U,styles:Q,unstyled:K,vars:J,attributes:X,radius:ee,mode:et,recurrenceExpansionLimit:ea,...er}=c,eo=(0,x.useDatesContext)(),en=(0,j.useStyles)({name:O,classes:y,props:c,className:q,style:U,classNames:$,styles:Q,unstyled:K,vars:J,varsResolver:A,attributes:X,rootSelector:"yearView"}),{resolvedClassNames:el,resolvedStyles:ei}=(0,M.useResolvedStylesApi)({classNames:$,styles:Q,props:c}),es=function({date:e,events:t}){let a={};if(void 0===t)return a;let o=new Set;for(let n of t)if((0,r.default)(n.start).isSame((0,r.default)(e),"year")){if(!function(e,t){if((0,s.isMultidayEvent)(e)){let a=(0,r.default)(e.start).startOf("day"),o=(0,r.default)(e.end).startOf("day");for(let r=a;r.isBefore(o)||r.isSame(o);r=r.add(1,"day")){let a=r.format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}return}let a=(0,r.default)(e.start).format("YYYY-MM-DD");t[a]||(t[a]=[]),t[a].push(e)}((0,i.validateEvent)(n),a),o.has(n.id))throw Error(`[@mantine/schedule] YearView: Duplicated event ids found: ${n.id}`);o.add(n.id)}return a}({date:d,events:(0,n.expandRecurringEvents)({events:p,rangeStart:(0,r.default)(d).startOf("year").toDate(),rangeEnd:(0,r.default)(d).endOf("year").toDate(),expansionLimit:ea})}),ec=(0,g.useRef)([]),ed=0,eu=(function(e){let t=(0,r.default)(e).startOf("year").toDate(),a=[[],[],[],[]],o=0;for(let e=0;e<4;e+=1)for(let n=0;n<3;n+=1)a[e].push((0,r.default)(t).add(o,"months").format("YYYY-MM-DD")),o+=1;return a})((0,r.default)(d).format("YYYY-MM-DD")).flat().map(e=>{let o=ed;return ed++,(0,v.jsx)(b,{month:e,getStyles:en,monthLabelFormat:h,withWeekNumbers:f,withWeekDays:w,locale:S,firstDayOfWeek:k,weekdayFormat:V||(e=>(0,r.default)(e).locale(eo.getLocale(S)).format("dd").slice(0,1)),weekendDays:Y,getDayProps:H,getWeekNumberProps:L,onMonthClick:P,onDayClick:I,onWeekNumberClick:T,highlightToday:B,groupedEvents:es,mode:et,withOutsideDays:R,firstDayIndex:(e=>{let o=(0,t.getMonthDays)({month:(0,r.default)(e).format("YYYY-MM-DD"),firstDayOfWeek:eo.getFirstDayOfWeek(k),consistentWeeks:!0});for(let t=0;t<o.length;t++){let r=o[t];for(let o=0;o<r.length;o++){let n=r[o];if((0,a.isSameMonth)(n,e))return{weekIndex:t,dayIndex:o}}}})(e),__getDayRef:(e,t,a)=>{Array.isArray(ec.current[o])||(ec.current[o]=[]),Array.isArray(ec.current[o][e])||(ec.current[o][e]=[]),ec.current[o][e][t]=a},__onDayKeyDown:(e,t)=>{!function({controlsRef:e,monthIndex:t,weekIndex:a,dayIndex:r,event:o}){let n=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(o.key);if(n){o.preventDefault();let l=e.current?e.current.map(e=>e?e.map(e=>e?e.length:0):[]):null;if(!l)return;!function e({controlsRef:t,direction:a,monthIndex:r,weekIndex:o,dayIndex:n,size:l}){let i=function({direction:e,monthIndex:t,weekIndex:a,dayIndex:r,size:o}){let n=o[t];if(!n)return null;switch(e){case"up":{if(0===a){if(0===t)return null;let e=o[t-1];if(!e||0===e.length)return null;let a=e.length-1,n=Math.min(r,e[a]-1);return{monthIndex:t-1,weekIndex:a,dayIndex:n}}let e=Math.min(r,n[a-1]-1);return{monthIndex:t,weekIndex:a-1,dayIndex:e}}case"down":{if(a===n.length-1){if(t===o.length-1)return null;let e=o[t+1];if(!e||0===e.length)return null;return{monthIndex:t+1,weekIndex:0,dayIndex:Math.min(r,e[0]-1)}}let e=Math.min(r,n[a+1]-1);return{monthIndex:t,weekIndex:a+1,dayIndex:e}}case"left":if(0===r){if(0===a){if(0===t)return null;let e=o[t-1];if(!e||0===e.length)return null;let a=e.length-1;return{monthIndex:t-1,weekIndex:a,dayIndex:e[a]-1}}return{monthIndex:t,weekIndex:a-1,dayIndex:n[a-1]-1}}return{monthIndex:t,weekIndex:a,dayIndex:r-1};case"right":if(r===n[a]-1){if(a===n.length-1){if(t===o.length-1)return null;let e=o[t+1];if(!e||0===e.length)return null;return{monthIndex:t+1,weekIndex:0,dayIndex:0}}return{monthIndex:t,weekIndex:a+1,dayIndex:0}}return{monthIndex:t,weekIndex:a,dayIndex:r+1};default:return null}}({direction:a,monthIndex:r,weekIndex:o,dayIndex:n,size:l});if(!i)return;let s=t.current?.[i.monthIndex]?.[i.weekIndex]?.[i.dayIndex];s&&(s.disabled||s.getAttribute("data-hidden")||s.getAttribute("data-outside")||s.getAttribute("data-day-placeholder")?e({controlsRef:t,direction:a,monthIndex:i.monthIndex,weekIndex:i.weekIndex,dayIndex:i.dayIndex,size:l}):s.focus())}({controlsRef:e,direction:n,monthIndex:t,weekIndex:a,dayIndex:r,size:l})}}({controlsRef:ec,monthIndex:o,weekIndex:t.weekIndex,dayIndex:t.dayIndex,event:e})}},e)});return(0,v.jsxs)(m.Box,{...en("yearView"),mod:{static:"static"===et},...er,children:[Z&&(0,v.jsx)(l.ScheduleHeaderBase,{view:"year",navigationHandlers:{previous:()=>(0,o.toDateString)((0,r.default)(d).subtract(1,"year").startOf("year")),next:()=>(0,o.toDateString)((0,r.default)(d).add(1,"year").startOf("year")),today:()=>(0,o.toDateString)((0,r.default)())},control:{monthYearSelect:{locale:S,withMonths:!1,yearValue:(0,r.default)(d).get("year"),monthValue:(0,r.default)(d).get("month"),onYearChange:e=>u?.((0,o.toDateString)((0,r.default)(d).set("year",e).startOf("year"))),...z}},labels:E,onDateChange:u,onViewChange:F,previousControlProps:W,nextControlProps:N,todayControlProps:_,viewSelectProps:G,stylesApiProps:{classNames:el,styles:ei,attributes:X,__staticSelector:O,radius:ee}}),(0,v.jsx)("div",{...en("yearViewMonths"),children:eu})]})});V.displayName="@mantine/schedule/YearView",V.classes=y,V.varsResolver=A,e.s(["YearView",0,V],122308)},408169,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let r=(0,a.default)().format("YYYY"),o=[{id:1,title:"New Year",start:`${r}-01-01 00:00:00`,end:(0,a.default)(`${r}-01-01`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"blue"},{id:2,title:"Spring Event",start:`${r}-03-15 00:00:00`,end:(0,a.default)(`${r}-03-15`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"green"},{id:3,title:"Summer Conference",start:`${r}-07-20 00:00:00`,end:(0,a.default)(`${r}-07-20`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"orange"},{id:4,title:"Fall Workshop",start:`${r}-10-10 00:00:00`,end:(0,a.default)(`${r}-10-10`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"violet"},{id:5,title:"Year End Party",start:`${r}-12-25 00:00:00`,end:(0,a.default)(`${r}-12-25`).add(1,"day").startOf("day").format("YYYY-MM-DD HH:mm:ss"),color:"red"}],n=`
import dayjs from 'dayjs';

const thisYear = dayjs().format('YYYY');

const events = [
  {
    id: 1,
    title: 'New Year',
    start: \\\`\\\${thisYear}-01-01 00:00:00\\\`,
    end: dayjs(\\\`\\\${thisYear}-01-01\\\`).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'blue',
  },
  {
    id: 2,
    title: 'Spring Event',
    start: \\\`\\\${thisYear}-03-15 00:00:00\\\`,
    end: dayjs(\\\`\\\${thisYear}-03-15\\\`).add(1, 'day').startOf('day').format('YYYY-MM-DD HH:mm:ss'),
    color: 'green',
  },
];
`;var l=e.i(191788),i=e.i(391398),s=e.i(122308);let c={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,l.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,i.jsx)(s.YearView,{date:e,onDateChange:t,events:o})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <YearView
      date={date}
      onDateChange={setDate}
      events={events}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},d={defaultExpanded:!1,type:"code",component:function(){return(0,i.jsx)(s.YearView,{date:new Date,events:o,withWeekNumbers:!0})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withWeekNumbers />;
}
`},u={defaultExpanded:!1,type:"code",component:function(){return(0,i.jsx)(s.YearView,{date:new Date,events:o,withWeekDays:!1})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withWeekDays={false} />;
}
`},m={defaultExpanded:!1,type:"code",component:function(){return(0,i.jsx)(s.YearView,{date:new Date,events:o,withOutsideDays:!1})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withOutsideDays={false} />;
}
`},p={defaultExpanded:!1,type:"code",component:function(){return(0,i.jsx)(s.YearView,{date:new Date,events:o,firstDayOfWeek:0})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} firstDayOfWeek={0} />;
}
`},h={defaultExpanded:!1,type:"code",component:function(){return(0,i.jsx)(s.YearView,{date:new Date,events:o,weekdayFormat:"dd"})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} weekdayFormat="dd" />;
}
`},f={defaultExpanded:!1,type:"code",component:function(){return(0,i.jsx)(s.YearView,{date:new Date,events:o,highlightToday:!1})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} highlightToday={false} />;
}
`},g={defaultExpanded:!1,type:"code",component:function(){return(0,i.jsx)(s.YearView,{date:new Date,events:o,withHeader:!1})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} withHeader={false} />;
}
`},x={defaultExpanded:!1,type:"code",component:function(){return(0,i.jsx)(s.YearView,{date:new Date,events:o,mode:"static"})},code:`
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return <YearView date={new Date()} events={events} mode="static" />;
}
`},v=(0,a.default)().year(),b=[{id:"yearly-series",title:"Monthly architecture review (series)",start:`${v}-01-10 09:00:00`,end:`${v}-01-10 10:00:00`,color:"blue",recurrence:{rrule:"FREQ=MONTHLY;COUNT=12",exdate:[`${v}-11-10 09:00:00`]}},{id:"yearly-series-override",title:"Monthly architecture review (moved in Nov)",start:`${v}-11-10 13:00:00`,end:`${v}-11-10 14:00:00`,color:"grape",recurringEventId:"yearly-series",recurrenceId:`${v}-11-10 09:00:00`},{id:"year-one-off",title:"One-off summit",start:`${v}-12-01 00:00:00`,end:`${v}-12-02 00:00:00`,color:"green"}],y={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,l.useState)(`${v}-01-01`);return(0,i.jsx)(s.YearView,{date:e,onDateChange:t,events:b,withWeekNumbers:!0})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { YearView } from '@mantine/schedule';

const year = dayjs().year();

const events = [
  {
    id: 'yearly-series',
    title: 'Monthly architecture review (series)',
    start: \`\${year}-01-10 09:00:00\`,
    end: \`\${year}-01-10 10:00:00\`,
    color: 'blue',
    recurrence: {
      rrule: 'FREQ=MONTHLY;COUNT=12',
      exdate: [\`\${year}-11-10 09:00:00\`],
    },
  },
  {
    id: 'yearly-series-override',
    title: 'Monthly architecture review (moved in Nov)',
    start: \`\${year}-11-10 13:00:00\`,
    end: \`\${year}-11-10 14:00:00\`,
    color: 'grape',
    recurringEventId: 'yearly-series',
    recurrenceId: \`\${year}-11-10 09:00:00\`,
  },
];

function Demo() {
  const [date, setDate] = useState(\`\${year}-01-01\`);
  return <YearView date={date} onDateChange={setDate} events={events} withWeekNumbers />;
}
`};var w=e.i(428127);let S={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,l.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,i.jsxs)("div",{children:[(0,i.jsxs)(w.ScheduleHeader,{children:[(0,i.jsx)(w.ScheduleHeader.Previous,{onClick:()=>t((0,a.default)(e).subtract(1,"year").startOf("year").format("YYYY-MM-DD"))}),(0,i.jsx)(w.ScheduleHeader.MonthYearSelect,{withMonths:!1,yearValue:(0,a.default)(e).year(),monthValue:(0,a.default)(e).month(),onYearChange:r=>t((0,a.default)(e).year(r).startOf("year").format("YYYY-MM-DD"))}),(0,i.jsx)(w.ScheduleHeader.Next,{onClick:()=>t((0,a.default)(e).add(1,"year").startOf("year").format("YYYY-MM-DD"))}),(0,i.jsx)(w.ScheduleHeader.Today,{onClick:()=>t((0,a.default)().format("YYYY-MM-DD"))}),(0,i.jsx)(w.ScheduleHeader.Control,{style:{marginInlineStart:"auto"},onClick:()=>window.print(),children:"Print"})]}),(0,i.jsx)(s.YearView,{date:e,onDateChange:t,events:o,withHeader:!1})]})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DateStringValue, ScheduleHeader, YearView } from '@mantine/schedule';
import { events } from './data';

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
                .subtract(1, 'year')
                .startOf('year')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.MonthYearSelect
          withMonths={false}
          yearValue={dayjs(date).year()}
          monthValue={dayjs(date).month()}
          onYearChange={(year) =>
            setDate(
              dayjs(date)
                .year(year)
                .startOf('year')
                .format('YYYY-MM-DD') as DateStringValue
            )
          }
        />
        <ScheduleHeader.Next
          onClick={() =>
            setDate(
              dayjs(date)
                .add(1, 'year')
                .startOf('year')
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
        <ScheduleHeader.Control
          style={{ marginInlineStart: 'auto' }}
          onClick={() => window.print()}
        >
          Print
        </ScheduleHeader.Control>
      </ScheduleHeader>

      <YearView
        date={date}
        onDateChange={setDate}
        events={events}
        withHeader={false}
      />
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]};e.i(27355);let k={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,l.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,i.jsx)(s.YearView,{date:e,onDateChange:t,events:o,locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",today:"Hoy",previous:"Anterior",next:"Siguiente"}})},code:[{code:`
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import { useState } from 'react';
import { YearView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));

  return (
    <YearView
      date={date}
      onDateChange={setDate}
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
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]};var D=(0,t.__exportAll)({customHeader:()=>S,firstDayOfWeek:()=>p,highlightToday:()=>f,localization:()=>k,recurringEvents:()=>y,staticMode:()=>x,usage:()=>c,weekdayFormat:()=>h,withOutsideDays:()=>m,withWeekNumbers:()=>d,withoutHeader:()=>g,withoutWeekDays:()=>u});e.s(["YearViewDemos",0,D],408169)},131022,e=>{"use strict";var t=e.i(648863),a=e.i(996969),r=e.i(391398);let o={type:"code",component:function(){return(0,r.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"]})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`,maxWidth:340,centered:!0},n={type:"code",component:function(){return(0,r.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
    />
  );
}
`,maxWidth:340,centered:!0},l={type:"code",component:function(){return(0,r.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Select up to 2 libraries",data:["React","Angular","Vue","Svelte"],maxValues:2})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Select up to 2 libraries"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      maxValues={2}
    />
  );
}
`,maxWidth:340,centered:!0},i={type:"code",component:function(){return(0,r.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],hidePickedOptions:!0})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      hidePickedOptions
    />
  );
}
`,maxWidth:340,centered:!0},s={type:"code",component:function(){return(0,r.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],searchable:!0,nothingFoundMessage:"Nothing found..."})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      searchable
      nothingFoundMessage="Nothing found..."
    />
  );
}
`,maxWidth:340,centered:!0},c={type:"configurator",component:function(e){return(0,r.jsx)(a.MultiSelect,{...e,data:["React","Angular","Svelte","Vue"],dropdownOpened:!0,pb:150,label:"Control check icon",placeholder:"Pick value",defaultValue:["React"]})},code:`
import { MultiSelect } from '@mantine/core';


function Demo() {
  return (
    <MultiSelect
      {{props}}
      data={['React', 'Angular', 'Svelte', 'Vue']}
      dropdownOpened
      pb={150}
      label="Control check icon"
      placeholder="Pick value"
      defaultValue={["React"]}
    />
  );
}
`,centered:!0,maxWidth:340,controls:[{type:"boolean",prop:"withCheckIcon",initialValue:!0,libraryValue:!0},{type:"boolean",prop:"withAlignedLabels",initialValue:!1,libraryValue:!1},{type:"segmented",prop:"checkIconPosition",initialValue:"left",libraryValue:null,data:["left","right"]}]},d={type:"configurator",component:function(e){return(0,r.jsx)(a.MultiSelect,{...e,placeholder:"MultiSelect placeholder",data:["React","Angular","Vue","Svelte"]})},code:`
import { MultiSelect } from '@mantine/core';


function Demo() {
  return (
    <MultiSelect
      {{props}}
      placeholder="MultiSelect placeholder"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
  );
}
`,centered:!0,maxWidth:340,controls:e.i(960831).inputControls},u={type:"code",component:function(){return(0,r.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],disabled:!0})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      disabled
    />
  );
}
`,maxWidth:340,centered:!0},m={type:"code",component:function(){return(0,r.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:[{value:"react",label:"React"},{value:"ng",label:"Angular"},{value:"vue",label:"Vue",disabled:!0},{value:"svelte",label:"Svelte",disabled:!0}]})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'vue', label: 'Vue', disabled: true },
        { value: 'svelte', label: 'Svelte', disabled: true },
      ]}
    />
  );
}
`,maxWidth:340,centered:!0},p={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.MultiSelect,{label:"Boolean error",placeholder:"Boolean error",error:!0,data:["React","Angular","Vue","Svelte"]}),(0,r.jsx)(a.MultiSelect,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name",data:["React","Angular","Vue","Svelte"]})]})},maxWidth:340,centered:!0,code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <MultiSelect
        label="Boolean error"
        placeholder="Boolean error"
        error
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
      <MultiSelect
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </>
  );
}
`},h={type:"code",component:function(){return(0,r.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Express","Django"]}]})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Express', 'Django'] },
      ]}
    />
  );
}
`,maxWidth:340,centered:!0},f=`
import { MultiSelect } from '@mantine/core';

const largeData = Array(100_000)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <MultiSelect
      label="100 000 options autocomplete"
      placeholder="Use limit to optimize performance"
      limit={5}
      data={largeData}
      searchable
    />
  );
}
`,g=Array(1e5).fill(0).map((e,t)=>`Option ${t}`),x={type:"code",component:function(){return(0,r.jsx)(a.MultiSelect,{label:"100 000 options autocomplete",placeholder:"Use limit to optimize performance",limit:5,data:g,searchable:!0})},code:f,maxWidth:340,centered:!0},v={type:"code",component:function(){return(0,r.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],readOnly:!0})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      readOnly
    />
  );
}
`,maxWidth:340,centered:!0},b=`
import { MultiSelect } from '@mantine/core';

const data = Array(100)
  .fill(0)
  .map((_, index) => \`Option \${index}\`);

function Demo() {
  return (
    <>
      <MultiSelect
        label="With scroll area (default)"
        placeholder="Pick value"
        data={data}
        maxDropdownHeight={200}
      />

      <MultiSelect
        label="With native scroll"
        placeholder="Pick value"
        data={data}
        withScrollArea={false}
        styles={{ dropdown: { maxHeight: 200, overflowY: 'auto' } }}
        mt="md"
      />
    </>
  );
}
`,y=Array(100).fill(0).map((e,t)=>`Option ${t}`),w={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.MultiSelect,{label:"With scroll area (default)",placeholder:"Pick value",data:y,maxDropdownHeight:200}),(0,r.jsx)(a.MultiSelect,{label:"With native scroll",placeholder:"Pick value",data:y,withScrollArea:!1,styles:{dropdown:{maxHeight:200,overflowY:"auto"}},mt:"md"})]})},code:b,maxWidth:340,centered:!0},S=({options:e,search:t})=>{let a=t.toLowerCase().trim().split(" ");return e.filter(e=>{let t=e.label.toLowerCase().trim().split(" ");return a.every(e=>t.some(t=>t.includes(e)))})},k={type:"code",component:function(){return(0,r.jsx)(a.MultiSelect,{label:"What countries have you visited?",placeholder:"Pick values",data:["Great Britain","Russian Federation","United States"],filter:S,searchable:!0})},code:`
import { MultiSelect, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const splittedSearch = search.toLowerCase().trim().split(' ');
  return (options as ComboboxItem[]).filter((option) => {
    const words = option.label.toLowerCase().trim().split(' ');
    return splittedSearch.every((searchWord) => words.some((word) => word.includes(searchWord)));
  });
};

function Demo() {
  return (
    <MultiSelect
      label="What countries have you visited?"
      placeholder="Pick values"
      data={['Great Britain', 'Russian Federation', 'United States']}
      filter={optionsFilter}
      searchable
    />
  );
}
`,maxWidth:340,centered:!0},D=({options:e,search:t})=>{let a=e.filter(e=>e.label.toLowerCase().trim().includes(t.toLowerCase().trim()));return a.sort((e,t)=>e.label.localeCompare(t.label)),a},M={type:"code",component:function(){return(0,r.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick values",data:["4 – React","1 – Angular","3 – Vue","2 – Svelte"],filter:D,searchable:!0})},code:`
import { MultiSelect, ComboboxItem, OptionsFilter } from '@mantine/core';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  const filtered = (options as ComboboxItem[]).filter((option) =>
    option.label.toLowerCase().trim().includes(search.toLowerCase().trim())
  );

  filtered.sort((a, b) => a.label.localeCompare(b.label));
  return filtered;
};

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['4 – React', '1 – Angular', '3 – Vue', '2 – Svelte']}
      filter={optionsFilter}
      searchable
    />
  );
}
`,maxWidth:340,centered:!0};var j=e.i(123895),C=e.i(726869);let A=`
import { AtIcon } from '@phosphor-icons/react';
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
     {{props}}
      leftSection={<AtIcon size={18} />}
      label="MultiSelect"
      description="Description"
      error="Error"
      placeholder="MultiSelect"
      defaultValue={['React', 'Angular']}
      data={[
        { group: 'Frontend', items: ['React', 'Angular'] },
        { group: 'Backend', items: ['Node', 'Django'] },
      ]}
    />
  );
}
`,V={type:"styles-api",data:C.MultiSelectStylesApi,component:function(e){return(0,r.jsx)(a.MultiSelect,{...e,dropdownOpened:!0,leftSection:(0,r.jsx)(j.AtIcon,{size:18}),withAsterisk:!0,label:"MultiSelect",description:"Description",placeholder:"MultiSelect",defaultValue:["React","Angular"],comboboxProps:{hideDetached:!1},data:[{group:"Frontend",items:["React","Angular"]},{group:"Backend",items:["Node","Django"]}]})},code:A,centered:!0,maxWidth:340},Y={type:"code",component:function(){return(0,r.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],defaultValue:["React"],clearable:!0})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      defaultValue={['React']}
      clearable
    />
  );
}
`,maxWidth:340,centered:!0};var P=e.i(931882),I=e.i(671640);let T={type:"code",component:function(){return(0,r.jsxs)(I.Stack,{children:[(0,r.jsx)(a.MultiSelect,{label:"clearSectionMode='both' (default)",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],defaultValue:["React"],clearable:!0,rightSection:(0,r.jsx)(P.CaretDownIcon,{size:16}),clearSectionMode:"both"}),(0,r.jsx)(a.MultiSelect,{label:"clearSectionMode='rightSection'",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],defaultValue:["React"],clearable:!0,rightSection:(0,r.jsx)(P.CaretDownIcon,{size:16}),clearSectionMode:"rightSection"}),(0,r.jsx)(a.MultiSelect,{label:"clearSectionMode='clear'",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],defaultValue:["React"],clearable:!0,rightSection:(0,r.jsx)(P.CaretDownIcon,{size:16}),clearSectionMode:"clear"})]})},code:`
import { CaretDownIcon } from '@phosphor-icons/react';
import { MultiSelect, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <MultiSelect
        label="clearSectionMode='both' (default)"
        placeholder="Pick values"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue={['React']}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="both"
      />

      <MultiSelect
        label="clearSectionMode='rightSection'"
        placeholder="Pick values"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue={['React']}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="rightSection"
      />

      <MultiSelect
        label="clearSectionMode='clear'"
        placeholder="Pick values"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        defaultValue={['React']}
        clearable
        rightSection={<CaretDownIcon size={16} />}
        clearSectionMode="clear"
      />
    </Stack>
  );
}
`,maxWidth:340,centered:!0};var H=e.i(293907);let L={type:"code",component:function(){let e=(0,r.jsx)(H.SquaresFourIcon,{size:16});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.MultiSelect,{data:["React","Angular","Vue"],leftSectionPointerEvents:"none",leftSection:e,label:"Your favorite libraries",placeholder:"Your favorite libraries"}),(0,r.jsx)(a.MultiSelect,{mt:"md",data:["React","Angular","Vue"],rightSectionPointerEvents:"none",rightSection:e,label:"Your favorite libraries",placeholder:"Your favorite libraries"})]})},maxWidth:340,centered:!0,code:`
import { MultiSelect } from '@mantine/core';
import { SquaresFourIcon } from '@phosphor-icons/react';

function Demo() {
  const icon = <SquaresFourIcon size={16} />;
  return (
    <>
      <MultiSelect
        data={['React', 'Angular', 'Vue']}
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your favorite libraries"
        placeholder="Your favorite libraries"
      />
      <MultiSelect
        mt="md"
        data={['React', 'Angular', 'Vue']}
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your favorite libraries"
        placeholder="Your favorite libraries"
      />
    </>
  );
}
`};var B=e.i(485108),E=e.i(541772);let R={type:"code",component:function(){let[e,{toggle:t}]=(0,E.useDisclosure)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(B.Button,{onClick:t,mb:"md",children:"Toggle dropdown"}),(0,r.jsx)(a.MultiSelect,{label:"Your favorite library",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],dropdownOpened:e})]})},code:`
import { MultiSelect, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [dropdownOpened, { toggle }] = useDisclosure();
  return (
    <>
      <Button onClick={toggle} mb="md">
        Toggle dropdown
      </Button>

      <MultiSelect
        label="Your favorite library"
        placeholder="Pick values"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        dropdownOpened={dropdownOpened}
      />
    </>
  );
}
`,maxWidth:340,centered:!0},Z={type:"code",component:function(){return(0,r.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{position:"top",middlewares:{flip:!1,shift:!1}}})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ position: 'top', middlewares: { flip: false, shift: false } }}
    />
  );
}
`,maxWidth:340,centered:!0},z={type:"code",component:function(){return(0,r.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{transitionProps:{transition:"pop",duration:200}}})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ transitionProps: { transition: 'pop', duration: 200 } }}
    />
  );
}
`,maxWidth:340,centered:!0},F={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.MultiSelect,{label:"Zero padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:0}}),(0,r.jsx)(a.MultiSelect,{mt:"md",label:"10px padding",placeholder:"Pick value or enter anything",data:["React","Angular","Vue","Svelte"],comboboxProps:{dropdownPadding:10}})]})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <MultiSelect
        label="Zero padding"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 0 }}
      />
      <MultiSelect
        mt="md"
        label="10px padding"
        placeholder="Pick value or enter anything"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        comboboxProps={{ dropdownPadding: 10 }}
      />
    </>
  );
}
`,maxWidth:340,centered:!0},W={type:"code",component:function(){return(0,r.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{shadow:"md"}})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ shadow: 'md' }}
    />
  );
}
`,maxWidth:340,centered:!0};var N=e.i(392862);let _={type:"code",code:`
import { Popover, Button, MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <MultiSelect
          label="Your favorite libraries"
          placeholder="Pick values"
          data={['React', 'Angular', 'Vue', 'Svelte']}
          comboboxProps={{ withinPortal: false }}
        />
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,component:function(){return(0,r.jsxs)(N.Popover,{width:300,position:"bottom",withArrow:!0,shadow:"md",children:[(0,r.jsx)(N.Popover.Target,{children:(0,r.jsx)(B.Button,{children:"Toggle popover"})}),(0,r.jsx)(N.Popover.Dropdown,{children:(0,r.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],comboboxProps:{withinPortal:!1}})})]})}};var G={dropdown:"m_a9824888",input:"m_f5487eb3"};let O={type:"code",component:function(){return(0,r.jsx)(a.MultiSelect,{label:"Your favorite library",placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],classNames:G,comboboxProps:{position:"bottom",middlewares:{flip:!1,shift:!1},offset:0}})},code:[{fileName:"Demo.tsx",code:`
import { MultiSelect } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite library"
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      classNames={classes}
      comboboxProps={{ position: 'bottom', middlewares: { flip: false, shift: false }, offset: 0 }}
    />
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`.dropdown {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-color: light-dark(var(--mantine-color-gray-4), var(--mantine-color-dark-4));
  border-top: 0;
}

.input {
  transition: none;

  &[data-expanded] {
    border-color: light-dark(var(--mantine-color-gray-4), var(--mantine-color-dark-4));
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
}
`,language:"scss"}],maxWidth:340,centered:!0};var $=e.i(141806),q=e.i(725695),U=e.i(883364);let Q={"Emily Johnson":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png",email:"emily92@gmail.com"},"Ava Rodriguez":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png",email:"ava_rose@gmail.com"},"Olivia Chen":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png",email:"livvy_globe@gmail.com"},"Ethan Barnes":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png",email:"ethan_explorer@gmail.com"},"Mason Taylor":{image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png",email:"mason_musician@gmail.com"}},K=({option:e})=>(0,r.jsxs)(q.Group,{gap:"sm",children:[(0,r.jsx)($.Avatar,{src:Q[e.value].image,size:36,radius:"xl"}),(0,r.jsxs)("div",{children:[(0,r.jsx)(U.Text,{size:"sm",children:e.value}),(0,r.jsx)(U.Text,{size:"xs",opacity:.5,children:Q[e.value].email})]})]}),J={type:"code",component:function(){return(0,r.jsx)(a.MultiSelect,{data:["Emily Johnson","Ava Rodriguez","Olivia Chen","Ethan Barnes","Mason Taylor"],renderOption:K,maxDropdownHeight:300,label:"Employees of the month",placeholder:"Search for employee",hidePickedOptions:!0,searchable:!0})},code:`
import { MultiSelect, MultiSelectProps, Avatar, Group, Text } from '@mantine/core';

const usersData: Record<string, { image: string; email: string }> = {
  'Emily Johnson': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png',
    email: 'emily92@gmail.com',
  },
  'Ava Rodriguez': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png',
    email: 'ava_rose@gmail.com',
  },
  'Olivia Chen': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png',
    email: 'livvy_globe@gmail.com',
  },
  'Ethan Barnes': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png',
    email: 'ethan_explorer@gmail.com',
  },
  'Mason Taylor': {
    image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png',
    email: 'mason_musician@gmail.com',
  },
};

const renderMultiSelectOption: MultiSelectProps['renderOption'] = ({ option }) => (
  <Group gap="sm">
    <Avatar src={usersData[option.value].image} size={36} radius="xl" />
    <div>
      <Text size="sm">{option.value}</Text>
      <Text size="xs" opacity={0.5}>
        {usersData[option.value].email}
      </Text>
    </div>
  </Group>
);

function Demo() {
  return (
    <MultiSelect
      data={['Emily Johnson', 'Ava Rodriguez', 'Olivia Chen', 'Ethan Barnes', 'Mason Taylor']}
      renderOption={renderMultiSelectOption}
      maxDropdownHeight={300}
      label="Employees of the month"
      placeholder="Search for employee"
      hidePickedOptions
      searchable
    />
  );
}
`,centered:!0,maxWidth:340,defaultExpanded:!1};var X=e.i(122057);let ee=`
import { MultiSelect, Pill, Avatar } from '@mantine/core';

const users = [
  { value: 'Emily Johnson', label: 'Emily Johnson', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png' },
  { value: 'Ava Rodriguez', label: 'Ava Rodriguez', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png' },
  { value: 'Olivia Chen', label: 'Olivia Chen', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png' },
  { value: 'Ethan Barnes', label: 'Ethan Barnes', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png' },
  { value: 'Mason Taylor', label: 'Mason Taylor', image: 'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png' },
];

const usersMap = new Map(users.map((user) => [user.value.toString(), user]));

function Demo() {
  return (
    <MultiSelect
      data={users}
      label="Candidates"
      placeholder="Select candidates"
      defaultValue={['Emily Johnson', 'Ava Rodriguez']}
      renderPill={({ option, onRemove }) => {
        const user = usersMap.get(option?.value.toString());
        return (
          <Pill withRemoveButton onRemove={onRemove}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Avatar src={user?.image} size={16} />
              {option?.label}
            </div>
          </Pill>
        );
      }}
    />
  );
}
`,et=[{value:"Emily Johnson",label:"Emily Johnson",image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"},{value:"Ava Rodriguez",label:"Ava Rodriguez",image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"},{value:"Olivia Chen",label:"Olivia Chen",image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-4.png"},{value:"Ethan Barnes",label:"Ethan Barnes",image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"},{value:"Mason Taylor",label:"Mason Taylor",image:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-2.png"}],ea=new Map(et.map(e=>[e.value.toString(),e])),er={type:"code",component:function(){return(0,r.jsx)(a.MultiSelect,{data:et,label:"Candidates",placeholder:"Select candidates",defaultValue:["Emily Johnson","Ava Rodriguez"],renderPill:({option:e,onRemove:t})=>(0,r.jsx)(X.Pill,{withRemoveButton:!0,onRemove:t,style:{paddingInlineStart:2},children:(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:8},children:[(0,r.jsx)($.Avatar,{src:ea.get(e?.value.toString())?.image,size:16}),e?.label]})})})},code:ee,centered:!0,maxWidth:400};var eo=e.i(191788);let en={type:"code",component:function(){let[e,t]=(0,eo.useState)(["React","Angular","Vue"]);return(0,r.jsx)(a.MultiSelect,{label:"Drag pills to reorder",description:"Selected values can be reordered by dragging pills",placeholder:"Pick value",data:["React","Angular","Vue","Svelte","Solid","Ember"],value:e,onChange:t,withPillsReorder:!0})},code:`
import { useState } from 'react';
import { MultiSelect } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(['React', 'Angular', 'Vue']);

  return (
    <MultiSelect
      label="Drag pills to reorder"
      description="Selected values can be reordered by dragging pills"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte', 'Solid', 'Ember']}
      value={value}
      onChange={setValue}
      withPillsReorder
    />
  );
}
`,maxWidth:340,centered:!0},el={type:"code",component:function(){return(0,r.jsx)(a.MultiSelect,{label:"Your favorite libraries",placeholder:"Pick value",data:["React","Angular","Vue","Svelte"],comboboxProps:{width:200,position:"bottom-start"}})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      comboboxProps={{ width: 200, position: 'bottom-start' }}
    />
  );
}
`,maxWidth:340,centered:!0};var ei=e.i(280130);let es=({options:e,search:t})=>t.trim()?new ei.default(e,{keys:["label"],threshold:.3,minMatchCharLength:1}).search(t).map(e=>e.item):e,ec={type:"code",component:function(){return(0,r.jsx)(a.MultiSelect,{label:"What countries have you visited?",placeholder:"Pick values",data:["Great Britain","Russian Federation","United States","Germany","France"],filter:es,searchable:!0})},code:`
import { MultiSelect, ComboboxItem, OptionsFilter } from '@mantine/core';
import Fuse from 'fuse.js';

const optionsFilter: OptionsFilter = ({ options, search }) => {
  if (!search.trim()) {
    return options;
  }

  const fuse = new Fuse(options as ComboboxItem[], {
    keys: ['label'],
    threshold: 0.3,
    minMatchCharLength: 1,
  });

  return fuse.search(search).map((result) => result.item);
};

function Demo() {
  return (
    <MultiSelect
      label="What countries have you visited?"
      placeholder="Pick values"
      data={['Great Britain', 'Russian Federation', 'United States', 'Germany', 'France']}
      filter={optionsFilter}
      searchable
    />
  );
}
`,maxWidth:340,centered:!0},ed={type:"code",component:function(){return(0,r.jsx)(a.MultiSelect,{placeholder:"Pick values",data:["React","Angular","Vue","Svelte"],loading:!0})},code:`
import { MultiSelect } from '@mantine/core';

function Demo() {
  return (
    <MultiSelect
      placeholder="Pick values"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      loading
    />
  );
}
`,centered:!0,maxWidth:340};var eu=(0,t.__exportAll)({checkIcon:()=>c,clearSectionMode:()=>T,clearable:()=>Y,configurator:()=>d,disabled:()=>u,disabledOptions:()=>m,dragReorder:()=>en,dropdownAnimation:()=>z,dropdownOffset:()=>O,dropdownOpened:()=>R,dropdownPadding:()=>F,dropdownPosition:()=>Z,dropdownShadow:()=>W,dropdownWidth:()=>el,error:()=>p,fuzzySearch:()=>ec,groups:()=>h,hidePickedOptions:()=>i,limit:()=>x,loading:()=>ed,maxValues:()=>l,nothingFound:()=>s,readOnly:()=>v,renderOption:()=>J,renderPill:()=>er,scrollArea:()=>w,search:()=>k,searchable:()=>n,sections:()=>L,sort:()=>M,stylesApi:()=>V,usage:()=>o,withinPopover:()=>_});e.s(["MultiSelectDemos",0,eu],131022)},501345,e=>{"use strict";var t=e.i(648863),a=e.i(485108),r=e.i(981377),o=e.i(391398),n=e.i(556457),l=e.i(541772);let i={type:"code",component:function(){let[e,t]=(0,l.useDisclosure)(!1),{getCollapseProps:i}=(0,n.useCollapse)({expanded:e});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.Button,{onClick:t.toggle,mb:"md",children:e?"Collapse":"Expand"}),(0,o.jsx)("div",{...i(),children:(0,o.jsx)(r.Typography,{bg:"var(--mantine-color-blue-light)",p:"xs",bdrs:"md",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})})]})},code:`
import { Button, Typography } from '@mantine/core';
import { useCollapse, useDisclosure } from '@mantine/hooks';

function Demo() {
  const [expanded, handlers] = useDisclosure(false);
  const { getCollapseProps } = useCollapse({ expanded });

  return (
    <>
      <Button onClick={handlers.toggle} mb="md">
        {expanded ? 'Collapse' : 'Expand'}
      </Button>

      <div {...getCollapseProps()}>
        <Typography bg="var(--mantine-color-blue-light)" p="xs" bdrs="md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Typography>
      </div>
    </>
  );
}
`};var s=(0,t.__exportAll)({usage:()=>i});e.s(["UseCollapseDemos",0,s],501345)},281383,e=>{"use strict";var t=e.i(648863),a=e.i(485108),r=e.i(671640),o=e.i(981377),n=e.i(391398),l=e.i(541772),i=e.i(103738);let s={type:"code",component:function(){let[e,t]=(0,l.useDisclosure)(!1),{getCollapseProps:s}=(0,i.useHorizontalCollapse)({expanded:e});return(0,n.jsxs)(r.Stack,{h:240,children:[(0,n.jsx)(a.Button,{onClick:t.toggle,w:"fit-content",children:e?"Collapse":"Expand"}),(0,n.jsx)("div",{...s({style:{width:200}}),children:(0,n.jsx)(o.Typography,{bg:"var(--mantine-color-blue-light)",p:"xs",bdrs:"md",w:200,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]})},code:`
import { Button, Stack, Typography } from '@mantine/core';
import { useDisclosure, useHorizontalCollapse } from '@mantine/hooks';

function Demo() {
  const [expanded, handlers] = useDisclosure(false);
  const { getCollapseProps } = useHorizontalCollapse({ expanded });

  return (
    <Stack h={240}>
      <Button onClick={handlers.toggle} w="fit-content">
        {expanded ? 'Collapse' : 'Expand'}
      </Button>

      <div {...getCollapseProps({ style: { width: 200 } })}>
        <Typography bg="var(--mantine-color-blue-light)" p="xs" bdrs="md" w={200}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Typography>
      </div>
    </Stack>
  );
}
`};var c=(0,t.__exportAll)({usage:()=>s});e.s(["UseHorizontalCollapseDemos",0,c],281383)},608373,e=>{"use strict";var t=e.i(648863),a=e.i(232471),r=e.i(485108),o=e.i(586692),n=e.i(725695),l=e.i(883364),i=e.i(391398),s=e.i(541772);let c={type:"code",code:`
import { Button, Group, Text, Collapse, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [expanded, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button onClick={toggle}>Toggle content</Button>
      </Group>

      <Collapse expanded={expanded}>
        <Text>{/* ... content */}</Text>
      </Collapse>
    </Box>
  );
}
`,component:function(){let[e,{toggle:t}]=(0,s.useDisclosure)(!1);return(0,i.jsxs)(a.Box,{maw:400,mx:"auto",children:[(0,i.jsx)(n.Group,{justify:"center",mb:5,children:(0,i.jsx)(r.Button,{onClick:t,children:"Toggle content"})}),(0,i.jsx)(o.Collapse,{expanded:e,children:(0,i.jsx)(l.Text,{children:"From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within."})})]})}},d={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Button, Group, Text, Collapse, Box } from '@mantine/core';

function Demo() {
  const [expanded, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button onClick={toggle}>Toggle with linear transition</Button>
      </Group>

      <Collapse expanded={expanded} transitionDuration={1000} transitionTimingFunction="linear">
        <Text>{/* ...content */}</Text>
      </Collapse>
    </Box>
  );
}
`,component:function(){let[e,{toggle:t}]=(0,s.useDisclosure)(!1);return(0,i.jsxs)(a.Box,{maw:400,mx:"auto",children:[(0,i.jsx)(n.Group,{justify:"center",mb:5,children:(0,i.jsx)(r.Button,{onClick:t,children:"Toggle with linear transition"})}),(0,i.jsx)(o.Collapse,{expanded:e,transitionDuration:1e3,transitionTimingFunction:"linear",children:(0,i.jsx)(l.Text,{children:"From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within."})})]})}};var u=e.i(191788);function m({children:e,buttonProps:t,...n}){let[l,s]=(0,u.useState)(!1);return(0,i.jsxs)(a.Box,{maw:400,mx:"auto",mt:"md",children:[(0,i.jsx)(r.Button,{onClick:()=>s(e=>!e),mb:5,...t}),(0,i.jsx)(o.Collapse,{expanded:l,...n,children:e})]})}let p="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea atque in est quaerat dolore odio! Quibusdam, a nihil modi, maiores consequuntur ex quod suscipit illum ducimus doloribus odit commodi tenetur.",h={type:"code",component:function(){return(0,i.jsxs)(m,{buttonProps:{children:"Root collapse"},children:[(0,i.jsx)(l.Text,{mt:"md",size:"lg",fw:700,children:"This collapse contains another collapse"}),(0,i.jsx)(l.Text,{mt:"xs",children:p}),(0,i.jsxs)(m,{buttonProps:{variant:"outline",children:"Inner collapse"},children:[(0,i.jsx)(l.Text,{mt:"md",size:"lg",fw:700,children:"This collapse is inside another collapse"}),(0,i.jsx)(l.Text,{mt:"xs",children:p})]})]})}};var f=e.i(671640),g=e.i(981377);let x={type:"code",component:function(){let[e,t]=(0,s.useDisclosure)(!1);return(0,i.jsxs)(f.Stack,{h:240,align:"flex-start",children:[(0,i.jsx)(r.Button,{onClick:t.toggle,w:"fit-content",children:e?"Collapse":"Expand"}),(0,i.jsx)(o.Collapse,{expanded:e,orientation:"horizontal",children:(0,i.jsx)(g.Typography,{bg:"var(--mantine-color-blue-light)",p:"xs",bdrs:"md",w:200,children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]})},code:`
import { Button, Collapse, Stack, Typography } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [expanded, handlers] = useDisclosure(false);

  return (
    <Stack h={240} align="flex-start">
      <Button onClick={handlers.toggle} w="fit-content">
        {expanded ? 'Collapse' : 'Expand'}
      </Button>

      <Collapse expanded={expanded} orientation="horizontal">
        <Typography bg="var(--mantine-color-blue-light)" p="xs" bdrs="md" w={200}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </Typography>
      </Collapse>
    </Stack>
  );
}
`};var v=(0,t.__exportAll)({horizontal:()=>x,nested:()=>h,transition:()=>d,usage:()=>c});e.s(["CollapseDemos",0,v],608373)},643125,e=>{"use strict";var t=e.i(648863),a=e.i(391398),r=e.i(164036);let o={type:"code",centered:!0,component:function(){return(0,a.jsx)(r.Calendar,{})},code:`
import { Calendar } from '@mantine/dates';

function Demo() {
  return <Calendar />;
}
`};var n=e.i(393353),l=e.i(494834);let i={type:"code",centered:!0,component:function(){return(0,a.jsx)(r.Calendar,{static:!0,renderDay:e=>{let t=(0,l.default)(e).date();return(0,a.jsx)(n.Indicator,{size:6,color:"red",offset:-2,disabled:16!==t,children:(0,a.jsx)("div",{children:t})})}})},code:`
import dayjs from 'dayjs';
import { Indicator } from '@mantine/core';
import { Calendar } from '@mantine/dates';

function Demo() {
  return (
    <Calendar
      static
      renderDay={(date) => {
        const day = dayjs(date).date();
        return (
          <Indicator size={6} color="red" offset={-2} disabled={day !== 16}>
            <div>{day}</div>
          </Indicator>
        );
      }}
    />
  );
}
`};var s=e.i(191788);let c={type:"code",centered:!0,component:function(){let[e,t]=(0,s.useState)([]);return(0,a.jsx)(r.Calendar,{getDayProps:a=>({selected:e.some(e=>(0,l.default)(a).isSame(e,"date")),onClick:()=>{e.some(e=>(0,l.default)(a).isSame(e,"date"))?t(e=>e.filter(e=>!(0,l.default)(e).isSame(a,"date"))):e.length<3&&t(e=>[...e,a])}})})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { Calendar } from '@mantine/dates';

function Demo() {
  const [selected, setSelected] = useState<string[]>([]);
  const handleSelect = (date: string) => {
    const isSelected = selected.some((s) => dayjs(date).isSame(s, 'date'));
    if (isSelected) {
      setSelected((current) => current.filter((d) => !dayjs(d).isSame(date, 'date')));
    } else if (selected.length < 3) {
      setSelected((current) => [...current, date]);
    }
  };

  return (
    <Calendar
      getDayProps={(date) => ({
        selected: selected.some((s) => dayjs(date).isSame(s, 'date')),
        onClick: () => handleSelect(date),
      })}
    />
  );
}
`};function d(e){let t=(0,l.default)(e).day();return 0===t?6:t-1}function u(e,t){return!!t&&(0,l.default)(e).isBefore((0,l.default)(t).add(6-d(t),"day").endOf("day").toDate())&&(0,l.default)(e).isAfter((0,l.default)(t).subtract(d(t)+1,"day").toDate())}let m={type:"code",centered:!0,component:function(){let[e,t]=(0,s.useState)(null),[o,n]=(0,s.useState)(null);return(0,a.jsx)(r.Calendar,{withCellSpacing:!1,getDayProps:a=>{let r=u(a,e),l=u(a,o),i=r||l;return{onMouseEnter:()=>t(a),onMouseLeave:()=>t(null),inRange:i,firstInRange:i&&1===new Date(a).getDay(),lastInRange:i&&0===new Date(a).getDay(),selected:l,onClick:()=>n(a)}}})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { Calendar } from '@mantine/dates';

function getDay(date: string) {
  const day = dayjs(date).day();
  return day === 0 ? 6 : day - 1;
}

function startOfWeek(date: string) {
  return dayjs(date)
    .subtract(getDay(date) + 1, 'day')
    .toDate();
}

function endOfWeek(date: string) {
  return dayjs(date)
    .add(6 - getDay(date), 'day')
    .endOf('day')
    .toDate();
}

function isInWeekRange(date: string, value: string | null) {
  return value
    ? dayjs(date).isBefore(endOfWeek(value)) && dayjs(date).isAfter(startOfWeek(value))
    : false;
}

function Demo() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [value, setValue] = useState<string | null>(null);

  return (
    <Calendar
      withCellSpacing={false}
      getDayProps={(date) => {
        const isHovered = isInWeekRange(date, hovered);
        const isSelected = isInWeekRange(date, value);
        const isInRange = isHovered || isSelected;
        return {
          onMouseEnter: () => setHovered(date),
          onMouseLeave: () => setHovered(null),
          inRange: isInRange,
          firstInRange: isInRange && new Date(date).getDay() === 1,
          lastInRange: isInRange && new Date(date).getDay() === 0,
          selected: isSelected,
          onClick: () => setValue(date),
        };
      }}
    />
  );
}
`},p={type:"code",centered:!0,maxWidth:600,component:function(){return(0,a.jsx)(r.Calendar,{fullWidth:!0})},code:`
import { Calendar } from '@mantine/dates';

function Demo() {
  return <Calendar fullWidth />;
}
`};var h=(0,t.__exportAll)({fullWidth:()=>p,isStatic:()=>i,picker:()=>c,usage:()=>o,weekPicker:()=>m});e.s(["CalendarDemos",0,h],643125)},550218,e=>{"use strict";var t=e.i(648863),a=e.i(960831),r=e.i(841209),o=e.i(391398);let n={type:"configurator",component:function(e){return(0,o.jsx)(r.TextInput,{...e,placeholder:"Input placeholder"})},code:`
import { TextInput } from '@mantine/core';


function Demo() {
  return (
    <TextInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:340,controls:a.inputControls},l={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.TextInput,{type:"password",label:"Password input",placeholder:"Password input"}),(0,o.jsx)(r.TextInput,{mt:"md",type:"date",label:"Date input",placeholder:"Date input"}),(0,o.jsx)(r.TextInput,{mt:"md",type:"datetime-local",label:"Date time input",placeholder:"Date time input"})]})},maxWidth:340,centered:!0,code:`
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput type="password" label="Password input" placeholder="Password input" />
      <TextInput mt="md" type="date" label="Date input" placeholder="Date input" />
      <TextInput
        mt="md"
        type="datetime-local"
        label="Date time input"
        placeholder="Date time input"
      />
    </>
  );
}
`};var i=e.i(123895);let s={type:"code",component:function(){let e=(0,o.jsx)(i.AtIcon,{size:16});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.TextInput,{leftSectionPointerEvents:"none",leftSection:e,label:"Your email",placeholder:"Your email"}),(0,o.jsx)(r.TextInput,{mt:"md",rightSectionPointerEvents:"none",rightSection:e,label:"Your email",placeholder:"Your email"})]})},maxWidth:340,centered:!0,code:`
import { TextInput } from '@mantine/core';
import { AtIcon } from '@phosphor-icons/react';

function Demo() {
  const icon = <AtIcon size={16} />;
  return (
    <>
      <TextInput
        leftSectionPointerEvents="none"
        leftSection={icon}
        label="Your email"
        placeholder="Your email"
      />
      <TextInput
        mt="md"
        rightSectionPointerEvents="none"
        rightSection={icon}
        label="Your email"
        placeholder="Your email"
      />
    </>
  );
}
`},c={type:"code",component:function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.TextInput,{label:"Boolean error",placeholder:"Boolean error",error:!0}),(0,o.jsx)(r.TextInput,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"})]})},maxWidth:340,centered:!0,code:`
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput label="Boolean error" placeholder="Boolean error" error />
      <TextInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
`},d={type:"code",component:function(){return(0,o.jsx)(r.TextInput,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:`
import { TextInput } from '@mantine/core';

function Demo() {
  return <TextInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`};var u=e.i(473638);let m=`
import { AtIcon } from '@phosphor-icons/react';
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <TextInput
      label="Label"
      placeholder="TextInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<AtIcon size={18} />}
      {{props}}
    />
  );
}
`,p={type:"styles-api",data:u.TextInputStylesApi,component:function(e){return(0,o.jsx)(r.TextInput,{label:"Label",placeholder:"TextInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:(0,o.jsx)(i.AtIcon,{size:18}),...e})},code:m,centered:!0,maxWidth:340},h={type:"code",component:function(){return(0,o.jsx)(r.TextInput,{placeholder:"Your email",loading:!0})},code:`
import { TextInput } from '@mantine/core';

function Demo() {
  return <TextInput placeholder="Your email" loading />;
}
`,centered:!0,maxWidth:340};var f=(0,t.__exportAll)({disabled:()=>d,error:()=>c,loading:()=>h,sections:()=>s,stylesApi:()=>p,type:()=>l,usage:()=>n});e.s(["TextInputDemos",0,f],550218)},94922,e=>{"use strict";var t=e.i(648863),a=e.i(754067),r=e.i(671640),o=e.i(883364),n=e.i(391398);let l={type:"code",code:`
import { Highlight, Stack, Text } from '@mantine/core';

function Demo() {
  return (
    <Stack gap="md">
      <div>
        <Text size="sm" fw={500} mb={5}>
          With accent-insensitive matching (default)
        </Text>
        <Highlight highlight="cafe">We visited caf\xe9 and cafe.</Highlight>
      </div>

      <div>
        <Text size="sm" fw={500} mb={5}>
          {'With accent-sensitive matching (accentInsensitive={false})'}
        </Text>
        <Highlight highlight="cafe" accentInsensitive={false}>
          We visited caf\xe9 and cafe.
        </Highlight>
      </div>
    </Stack>
  );
}
`,component:function(){return(0,n.jsxs)(r.Stack,{gap:"md",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(o.Text,{size:"sm",fw:500,mb:5,children:"With accent-insensitive matching (default)"}),(0,n.jsx)(a.Highlight,{highlight:"cafe",children:"We visited café and cafe."})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o.Text,{size:"sm",fw:500,mb:5,children:"With accent-sensitive matching (accentInsensitive={false})"}),(0,n.jsx)(a.Highlight,{highlight:"cafe",accentInsensitive:!1,children:"We visited café and cafe."})]})]})}},i={type:"code",code:`
import { Highlight, Stack, Text } from '@mantine/core';

function Demo() {
  return (
    <Stack gap="md">
      <div>
        <Text size="sm" fw={500} mb={5}>
          With case-insensitive matching (default)
        </Text>
        <Highlight highlight="this">Highlight This, definitely THIS and also this!</Highlight>
      </div>

      <div>
        <Text size="sm" fw={500} mb={5}>
          {'With case-sensitive matching (caseInsensitive={false})'}
        </Text>
        <Highlight highlight="this" caseInsensitive={false}>
          Highlight This, definitely THIS and also this!
        </Highlight>
      </div>
    </Stack>
  );
}
`,component:function(){return(0,n.jsxs)(r.Stack,{gap:"md",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(o.Text,{size:"sm",fw:500,mb:5,children:"With case-insensitive matching (default)"}),(0,n.jsx)(a.Highlight,{highlight:"this",children:"Highlight This, definitely THIS and also this!"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o.Text,{size:"sm",fw:500,mb:5,children:"With case-sensitive matching (caseInsensitive={false})"}),(0,n.jsx)(a.Highlight,{highlight:"this",caseInsensitive:!1,children:"Highlight This, definitely THIS and also this!"})]})]})}},s={type:"code",code:`
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      highlight={[
        { text: 'error', color: 'red' },
        { text: 'warning', color: 'yellow' },
        { text: 'success', color: 'green' },
      ]}
    >
      Error: Invalid input. Warning: Check this field. Success: All tests passed.
    </Highlight>
  );
}
`,component:function(){return(0,n.jsx)(a.Highlight,{highlight:[{text:"error",color:"red"},{text:"warning",color:"yellow"},{text:"success",color:"green"}],children:"Error: Invalid input. Warning: Check this field. Success: All tests passed."})}},c={type:"code",code:`
import { Highlight } from '@mantine/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
`,component:function(){return(0,n.jsx)(a.Highlight,{highlight:["this","that"],children:"Highlight this and also that"})}},d={type:"code",code:`
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://mantine.dev"
      target="_blank"
      highlight="mantine"
      fw={500}
      c="var(--mantine-color-anchor)"
    >
      Mantine website
    </Highlight>
  );
}

`,centered:!0,component:function(){return(0,n.jsx)(a.Highlight,{component:"a",href:"https://mantine.dev",target:"_blank",highlight:"mantine",fw:500,c:"var(--mantine-color-anchor)",children:"Mantine website"})}},u={type:"code",code:`
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight
      ta="center"
      highlight={['highlighted', 'default']}
      highlightStyles={{
        backgroundImage:
          'linear-gradient(45deg, var(--mantine-color-cyan-5), var(--mantine-color-indigo-5))',
        fontWeight: 700,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
      }}
    >
      You can change styles of highlighted part if you do not like default styles
    </Highlight>
  );
}
`,component:function(){return(0,n.jsx)(a.Highlight,{ta:"center",highlight:["highlighted","default"],highlightStyles:{backgroundImage:"linear-gradient(45deg, var(--mantine-color-cyan-5), var(--mantine-color-indigo-5))",fontWeight:700,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"You can change styles of highlighted part if you do not like default styles"})}},m={type:"configurator",component:function(e){return(0,n.jsx)(a.Highlight,{maw:400,mx:"auto",...e})},code:`
import { Highlight } from '@mantine/core';

function Demo() {
  return (
    <Highlight{{props}}>
      {{children}}
    </Highlight>
  );
}
`,centered:!0,maxWidth:"100%",controls:[{prop:"color",type:"color",initialValue:"yellow",libraryValue:"yellow"},{prop:"highlight",type:"string",initialValue:"this",libraryValue:null},{prop:"children",type:"string",initialValue:"Highlight This, definitely THIS and also this!",libraryValue:null}]},p={type:"code",code:`
import { Highlight, Stack, Text } from '@mantine/core';

function Demo() {
  return (
    <Stack gap="md">
      <div>
        <Text size="sm" fw={500} mb={5}>
          With whole word matching (wholeWord={'{'}true{'}'})
        </Text>
        <Highlight highlight="the" wholeWord>
          The theme is there
        </Highlight>
      </div>

      <div>
        <Text size="sm" fw={500} mb={5}>
          Without whole word matching (default)
        </Text>
        <Highlight highlight="the">The theme is there</Highlight>
      </div>
    </Stack>
  );
}
`,component:function(){return(0,n.jsxs)(r.Stack,{gap:"md",children:[(0,n.jsxs)("div",{children:[(0,n.jsxs)(o.Text,{size:"sm",fw:500,mb:5,children:["With whole word matching (wholeWord=","{","true","}",")"]}),(0,n.jsx)(a.Highlight,{highlight:"the",wholeWord:!0,children:"The theme is there"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(o.Text,{size:"sm",fw:500,mb:5,children:"Without whole word matching (default)"}),(0,n.jsx)(a.Highlight,{highlight:"the",children:"The theme is there"})]})]})}};var h=(0,t.__exportAll)({accentInsensitive:()=>l,caseInsensitive:()=>i,colors:()=>s,multiple:()=>c,props:()=>d,styles:()=>u,usage:()=>m,wholeword:()=>p});e.s(["HighlightDemos",0,h],94922)},895791,e=>{"use strict";var t=e.i(648863),a=e.i(433512),r=e.i(481178),o=e.i(44091),n=e.i(391466),l=e.i(275519),i=e.i(232471),s={root:"m_7dc7d3cd",content:"m_1f9675ae","marquee-horizontal":"m_55dc625a","marquee-vertical":"m_cdef532c",group:"m_3a9900f4"},c=e.i(391398);let d={repeat:4,duration:1e5,orientation:"horizontal",fadeEdges:!0},u=(0,r.createVarsResolver)((e,{duration:t,gap:r,repeat:o,fadeEdgeColor:n,fadeEdgeSize:l})=>({root:{"--marquee-duration":`${t}ms`,"--marquee-gap":(0,a.getSpacing)(r),"--marquee-repeat":(o??4).toString(),"--marquee-fade-color":n,"--marquee-fade-size":l}})),m=(0,l.factory)(e=>{let t=(0,o.useProps)("Marquee",d,e),{classNames:a,className:r,style:l,styles:m,unstyled:p,vars:h,children:f,reverse:g,pauseOnHover:x,orientation:v,repeat:b,duration:y,gap:w,fadeEdges:S,fadeEdgeColor:k,fadeEdgeSize:D,mod:M,attributes:j,...C}=t,A=(0,n.useStyles)({name:"Marquee",classes:s,props:t,className:r,style:l,classNames:a,styles:m,unstyled:p,attributes:j,vars:h,varsResolver:u}),V=Array(b).fill(0).map((e,t)=>(0,c.jsx)("div",{...A("group"),children:f},t));return(0,c.jsx)(i.Box,{...A("root"),mod:[{orientation:v,reverse:g,pauseOnHover:x,"fade-edges":S},M],...C,children:(0,c.jsx)("div",{...A("content"),children:V})})});m.classes=s,m.varsResolver=u,m.displayName="@mantine/core/Marquee";var p=e.i(78747);let h={type:"configurator",component:function(e){return(0,c.jsxs)(m,{...e,mah:200,maw:400,children:[(0,c.jsx)(p.MantineLogo,{width:120,type:"full",color:"blue"}),(0,c.jsx)(p.MantineLogo,{width:120,type:"full",color:"cyan"}),(0,c.jsx)(p.MantineLogo,{width:120,type:"full",color:"teal"}),(0,c.jsx)(p.MantineLogo,{width:120,type:"full",color:"green"}),(0,c.jsx)(p.MantineLogo,{width:120,type:"full",color:"lime"}),(0,c.jsx)(p.MantineLogo,{width:120,type:"full",color:"yellow"}),(0,c.jsx)(p.MantineLogo,{width:120,type:"full",color:"orange"}),(0,c.jsx)(p.MantineLogo,{width:120,type:"full",color:"red"})]})},code:`
import { Marquee } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return (
    <Marquee{{props}} mah={200} maw={400}>
      <MantineLogo width={120} type="full" color="blue" />
      <MantineLogo width={120} type="full" color="cyan" />
      <MantineLogo width={120} type="full" color="teal" />
      <MantineLogo width={120} type="full" color="green" />
      <MantineLogo width={120} type="full" color="lime" />
      <MantineLogo width={120} type="full" color="yellow" />
      <MantineLogo width={120} type="full" color="orange" />
      <MantineLogo width={120} type="full" color="red" />
    </Marquee>
  );
}
`,centered:!0,maxWidth:400,controls:[{prop:"reverse",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"pauseOnHover",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"orientation",type:"segmented",data:["horizontal","vertical"],initialValue:"horizontal",libraryValue:"horizontal"},{prop:"repeat",type:"number",min:1,max:10,initialValue:4,libraryValue:4},{prop:"duration",type:"number",min:5e3,max:1e5,step:1e3,initialValue:4e4,libraryValue:4e4},{prop:"gap",type:"size",initialValue:"md",libraryValue:"md"},{prop:"fadeEdges",type:"boolean",initialValue:!0,libraryValue:!0}]},f={type:"code",component:function(){return(0,c.jsxs)(m,{gap:"lg",children:[(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"blue"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"cyan"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"teal"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"green"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"lime"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"yellow"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"orange"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"red"})]})},code:`
import { Marquee } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return (
    <Marquee gap="lg">
      <MantineLogo width={80} type="full" color="blue" />
      <MantineLogo width={80} type="full" color="cyan" />
      <MantineLogo width={80} type="full" color="teal" />
      <MantineLogo width={80} type="full" color="green" />
      <MantineLogo width={80} type="full" color="lime" />
      <MantineLogo width={80} type="full" color="yellow" />
      <MantineLogo width={80} type="full" color="orange" />
      <MantineLogo width={80} type="full" color="red" />
    </Marquee>
  );
}
`,centered:!0,maxWidth:"100%"},g={type:"code",component:function(){return(0,c.jsxs)(m,{orientation:"vertical",h:300,children:[(0,c.jsx)(p.MantineLogo,{height:40,type:"full",color:"blue"}),(0,c.jsx)(p.MantineLogo,{height:40,type:"full",color:"cyan"}),(0,c.jsx)(p.MantineLogo,{height:40,type:"full",color:"teal"}),(0,c.jsx)(p.MantineLogo,{height:40,type:"full",color:"green"}),(0,c.jsx)(p.MantineLogo,{height:40,type:"full",color:"lime"}),(0,c.jsx)(p.MantineLogo,{height:40,type:"full",color:"yellow"}),(0,c.jsx)(p.MantineLogo,{height:40,type:"full",color:"orange"}),(0,c.jsx)(p.MantineLogo,{height:40,type:"full",color:"red"})]})},code:`
import { Marquee } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return (
    <Marquee orientation="vertical" h={300}>
      <MantineLogo height={40} type="full" color="blue" />
      <MantineLogo height={40} type="full" color="cyan" />
      <MantineLogo height={40} type="full" color="teal" />
      <MantineLogo height={40} type="full" color="green" />
      <MantineLogo height={40} type="full" color="lime" />
      <MantineLogo height={40} type="full" color="yellow" />
      <MantineLogo height={40} type="full" color="orange" />
      <MantineLogo height={40} type="full" color="red" />
    </Marquee>
  );
}
`,centered:!0},x={type:"code",component:function(){return(0,c.jsxs)(m,{pauseOnHover:!0,children:[(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"blue"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"cyan"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"teal"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"green"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"lime"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"yellow"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"orange"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"red"})]})},code:`
import { Marquee } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return (
    <Marquee pauseOnHover>
      <MantineLogo width={80} type="full" color="blue" />
      <MantineLogo width={80} type="full" color="cyan" />
      <MantineLogo width={80} type="full" color="teal" />
      <MantineLogo width={80} type="full" color="green" />
      <MantineLogo width={80} type="full" color="lime" />
      <MantineLogo width={80} type="full" color="yellow" />
      <MantineLogo width={80} type="full" color="orange" />
      <MantineLogo width={80} type="full" color="red" />
    </Marquee>
  );
}
`,centered:!0,maxWidth:"100%"};var v=e.i(671640);let b={type:"code",component:function(){return(0,c.jsxs)(v.Stack,{children:[(0,c.jsxs)(m,{children:[(0,c.jsx)(p.MantineLogo,{height:20,type:"full",color:"blue"}),(0,c.jsx)(p.MantineLogo,{height:20,type:"full",color:"cyan"}),(0,c.jsx)(p.MantineLogo,{height:20,type:"full",color:"teal"}),(0,c.jsx)(p.MantineLogo,{height:20,type:"full",color:"green"})]}),(0,c.jsxs)(m,{reverse:!0,children:[(0,c.jsx)(p.MantineLogo,{height:20,type:"full",color:"lime"}),(0,c.jsx)(p.MantineLogo,{height:20,type:"full",color:"yellow"}),(0,c.jsx)(p.MantineLogo,{height:20,type:"full",color:"orange"}),(0,c.jsx)(p.MantineLogo,{height:20,type:"full",color:"red"})]})]})},code:`
import { Marquee, Stack } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return (
    <Stack>
      <Marquee>
        <MantineLogo height={20} type="full" color="blue" />
        <MantineLogo height={20} type="full" color="cyan" />
        <MantineLogo height={20} type="full" color="teal" />
        <MantineLogo height={20} type="full" color="green" />
      </Marquee>
      <Marquee reverse>
        <MantineLogo height={20} type="full" color="lime" />
        <MantineLogo height={20} type="full" color="yellow" />
        <MantineLogo height={20} type="full" color="orange" />
        <MantineLogo height={20} type="full" color="red" />
      </Marquee>
    </Stack>
  );
}
`,centered:!0,maxWidth:"100%"};var y=e.i(883364);let w={type:"code",component:function(){return(0,c.jsxs)(v.Stack,{children:[(0,c.jsxs)("div",{children:[(0,c.jsx)(y.Text,{size:"sm",mb:"xs",children:"Default fade (5%)"}),(0,c.jsxs)(m,{children:[(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"blue"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"cyan"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"teal"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"green"})]})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(y.Text,{size:"sm",mb:"xs",children:"Larger fade (15%)"}),(0,c.jsxs)(m,{fadeEdgeSize:"15%",children:[(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"lime"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"yellow"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"orange"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"red"})]})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(y.Text,{size:"sm",mb:"xs",children:"Custom fade color"}),(0,c.jsxs)(m,{fadeEdgeColor:"var(--mantine-color-blue-light)",children:[(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"violet"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"grape"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"pink"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"red"})]})]}),(0,c.jsxs)("div",{children:[(0,c.jsx)(y.Text,{size:"sm",mb:"xs",children:"No fade"}),(0,c.jsxs)(m,{fadeEdges:!1,children:[(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"blue"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"teal"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"green"}),(0,c.jsx)(p.MantineLogo,{width:80,type:"full",color:"yellow"})]})]})]})},code:`
import { Marquee, Stack, Text } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return (
    <Stack>
      <div>
        <Text size="sm" mb="xs">Default fade (5%)</Text>
        <Marquee>
          <MantineLogo width={80} type="full" color="blue" />
          <MantineLogo width={80} type="full" color="cyan" />
          <MantineLogo width={80} type="full" color="teal" />
          <MantineLogo width={80} type="full" color="green" />
        </Marquee>
      </div>

      <div>
        <Text size="sm" mb="xs">Larger fade (15%)</Text>
        <Marquee fadeEdgeSize="15%">
          <MantineLogo width={80} type="full" color="lime" />
          <MantineLogo width={80} type="full" color="yellow" />
          <MantineLogo width={80} type="full" color="orange" />
          <MantineLogo width={80} type="full" color="red" />
        </Marquee>
      </div>

      <div>
        <Text size="sm" mb="xs">Custom fade color</Text>
        <Marquee fadeEdgeColor="var(--mantine-color-blue-light)">
          <MantineLogo width={80} type="full" color="violet" />
          <MantineLogo width={80} type="full" color="grape" />
          <MantineLogo width={80} type="full" color="pink" />
          <MantineLogo width={80} type="full" color="red" />
        </Marquee>
      </div>

      <div>
        <Text size="sm" mb="xs">No fade</Text>
        <Marquee fadeEdges={false}>
          <MantineLogo width={80} type="full" color="blue" />
          <MantineLogo width={80} type="full" color="teal" />
          <MantineLogo width={80} type="full" color="green" />
          <MantineLogo width={80} type="full" color="yellow" />
        </Marquee>
      </div>
    </Stack>
  );
}
`};var S=(0,t.__exportAll)({configurator:()=>h,fadeEdges:()=>w,multipleRows:()=>b,pauseOnHover:()=>x,usage:()=>f,vertical:()=>g});e.s(["MarqueeDemos",0,S],895791)},485150,e=>{"use strict";var t=e.i(648863),a=e.i(494834);let r=(0,a.default)().format("YYYY-MM"),o=[{id:1,title:"Team Meeting",start:`${r}-05 09:00:00`,end:`${r}-05 10:00:00`,color:"blue"},{id:2,title:"Project Review",start:`${r}-05 14:00:00`,end:`${r}-05 15:30:00`,color:"green"},{id:3,title:"Conference",start:`${r}-10 00:00:00`,end:`${r}-12 00:00:00`,color:"violet"},{id:4,title:"Lunch with Client",start:`${r}-15 12:00:00`,end:`${r}-15 13:30:00`,color:"orange"},{id:5,title:"Sprint Planning",start:`${r}-15 15:00:00`,end:`${r}-15 17:00:00`,color:"cyan"},{id:6,title:"Code Review",start:`${r}-20 10:00:00`,end:`${r}-20 11:00:00`,color:"pink"},{id:7,title:"Workshop Day",start:`${r}-25 00:00:00`,end:`${r}-25 00:00:00`,color:"yellow"}],n=`
import dayjs from 'dayjs';

const thisMonth = dayjs().format('YYYY-MM');

export const events = [
  {
    id: 1,
    title: 'Team Meeting',
    start: \`\${thisMonth}-05 09:00:00\`,
    end: \`\${thisMonth}-05 10:00:00\`,
    color: 'blue',
  },
  {
    id: 2,
    title: 'Project Review',
    start: \`\${thisMonth}-05 14:00:00\`,
    end: \`\${thisMonth}-05 15:30:00\`,
    color: 'green',
  },
  {
    id: 3,
    title: 'Conference',
    start: \`\${thisMonth}-10 00:00:00\`,
    end: \`\${thisMonth}-12 00:00:00\`,
    color: 'violet',
  },
  // ... more events
];
`;var l=e.i(191788),i=e.i(391398),s=e.i(433396);let c={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,l.useState)((0,a.default)().format("YYYY-MM-DD")),[r,n]=(0,l.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,i.jsx)(s.MobileMonthView,{date:e,onDateChange:t,selectedDate:r,onSelectedDateChange:n,events:o})},centered:!0,maxWidth:375,code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={regularEvents}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},d={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,l.useState)((0,a.default)().format("YYYY-MM-DD")),[r,n]=(0,l.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,i.jsx)(s.MobileMonthView,{date:e,onDateChange:t,selectedDate:r,onSelectedDateChange:n,events:o,withWeekNumbers:!0})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={regularEvents}
      withWeekNumbers
    />
  );
}
`,centered:!0,maxWidth:375},u={defaultExpanded:!1,type:"code",component:function(){let[e,t]=(0,l.useState)((0,a.default)().format("YYYY-MM-DD")),[r,n]=(0,l.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,i.jsx)(s.MobileMonthView,{date:e,onDateChange:t,selectedDate:r,onSelectedDateChange:n,events:o,withOutsideDays:!0})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={regularEvents}
      withOutsideDays
    />
  );
}
`,centered:!0,maxWidth:375},m={defaultExpanded:!1,type:"code",component:function(){return(0,i.jsx)(s.MobileMonthView,{date:(0,a.default)().format("YYYY-MM-DD"),selectedDate:(0,a.default)().format("YYYY-MM-DD"),events:o,mode:"static"})},code:`
import dayjs from 'dayjs';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  return (
    <MobileMonthView
      date={dayjs().format('YYYY-MM-DD')}
      selectedDate={dayjs().format('YYYY-MM-DD')}
      events={regularEvents}
      mode="static"
    />
  );
}
`,centered:!0,maxWidth:375};e.i(27355);let p={defaultExpanded:!1,type:"code",centered:!0,maxWidth:375,component:function(){let[e,t]=(0,l.useState)((0,a.default)().format("YYYY-MM-DD")),[r,n]=(0,l.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,i.jsx)(s.MobileMonthView,{date:e,onDateChange:t,selectedDate:r,onSelectedDateChange:n,events:o,locale:"es",labels:{day:"Día",week:"Semana",month:"Mes",year:"Año",today:"Hoy",previous:"Anterior",next:"Siguiente",noEvents:"Sin eventos"}})},code:[{code:`
import 'dayjs/locale/es';
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
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
        noEvents: 'Sin eventos',
      }}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},h={defaultExpanded:!1,type:"code",centered:!0,maxWidth:375,component:function(){let[e,t]=(0,l.useState)((0,a.default)().format("YYYY-MM-DD")),[r,n]=(0,l.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,i.jsx)(s.MobileMonthView,{date:e,onDateChange:t,selectedDate:r,onSelectedDateChange:n,events:o,highlightToday:!1})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={events}
      highlightToday={false}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},f={defaultExpanded:!1,type:"code",centered:!0,maxWidth:375,component:function(){let[e,t]=(0,l.useState)((0,a.default)().format("YYYY-MM-DD")),[r,n]=(0,l.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,i.jsx)(s.MobileMonthView,{date:e,onDateChange:t,selectedDate:r,onSelectedDateChange:n,events:o,firstDayOfWeek:0})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={events}
      firstDayOfWeek={0}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]};var g=e.i(257177);let x={defaultExpanded:!1,type:"code",centered:!0,maxWidth:375,component:function(){let[e,t]=(0,l.useState)((0,a.default)().format("YYYY-MM-DD")),[r,n]=(0,l.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,i.jsx)(s.MobileMonthView,{date:e,onDateChange:t,selectedDate:r,onSelectedDateChange:n,events:o,renderHeader:({defaultHeader:e})=>(0,i.jsxs)(i.Fragment,{children:[e,(0,i.jsx)(g.Badge,{variant:"light",size:"sm",children:"3 events today"})]})})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { Badge } from '@mantine/core';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={events}
      renderHeader={({ defaultHeader }) => (
        <>
          {defaultHeader}
          <Badge variant="light" size="sm">3 events today</Badge>
        </>
      )}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},v={defaultExpanded:!1,type:"code",centered:!0,maxWidth:375,component:function(){let[e,t]=(0,l.useState)((0,a.default)().format("YYYY-MM-DD")),[r,n]=(0,l.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,i.jsx)(s.MobileMonthView,{date:e,onDateChange:t,selectedDate:r,onSelectedDateChange:n,events:o,consistentWeeks:!1})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={events}
      consistentWeeks={false}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},b={defaultExpanded:!1,type:"code",centered:!0,maxWidth:375,component:function(){let[e,t]=(0,l.useState)((0,a.default)().format("YYYY-MM-DD")),[r,n]=(0,l.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,i.jsx)(s.MobileMonthView,{date:e,onDateChange:t,selectedDate:r,onSelectedDateChange:n,events:o,weekdayFormat:"ddd"})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={events}
      weekdayFormat="ddd"
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]},y={defaultExpanded:!1,type:"code",centered:!0,maxWidth:375,component:function(){let[e,t]=(0,l.useState)((0,a.default)().format("YYYY-MM-DD")),[r,n]=(0,l.useState)((0,a.default)().format("YYYY-MM-DD"));return(0,i.jsx)(s.MobileMonthView,{date:e,onDateChange:t,selectedDate:r,onSelectedDateChange:n,events:o,withWeekDays:!1})},code:[{code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { MobileMonthView } from '@mantine/schedule';
import { events } from './data';

function Demo() {
  const [date, setDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [selectedDate, setSelectedDate] = useState<string | null>(dayjs().format('YYYY-MM-DD'));

  return (
    <MobileMonthView
      date={date}
      onDateChange={setDate}
      selectedDate={selectedDate}
      onSelectedDateChange={setSelectedDate}
      events={events}
      withWeekDays={false}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:n,language:"tsx",fileName:"data.ts"}]};var w=(0,t.__exportAll)({consistentWeeks:()=>v,firstDayOfWeek:()=>f,highlightToday:()=>h,localization:()=>p,renderHeader:()=>x,staticMode:()=>m,usage:()=>c,weekdayFormat:()=>b,withOutsideDays:()=>u,withWeekNumbers:()=>d,withoutWeekDays:()=>y});e.s(["MobileMonthViewDemos",0,w],485150)},695009,e=>{"use strict";var t=e.i(648863);let a=[{name:"React",value:95e4},{name:"Vue",value:32e4},{name:"Angular",value:58e4},{name:"Svelte",value:145e3},{name:"Next.js",value:72e4},{name:"Nuxt",value:18e4},{name:"Remix",value:95e3}],r=`export const data = ${JSON.stringify(a,null,2)};`;var o=e.i(391398),n={root:"m_1ea785b1",labelsRow:"m_294011ec",bar:"m_9de42164",barLabel:"m_6f89abf0",barValue:"m_7016be6d"},l=e.i(232471),i=e.i(481178),s=e.i(275519),c=e.i(433512),d=e.i(317477),u=e.i(779177),m=e.i(951254),p=e.i(44091),h=e.i(391466),f=e.i(191788);let g={barGap:5,minBarSize:0,barHeight:32},x=(0,i.createVarsResolver)((e,{barGap:t,minBarSize:a,barHeight:r})=>({root:{"--bars-list-gap":(0,c.getSpacing)(t),"--bars-list-min-bar-size":(0,u.rem)(a),"--bars-list-bar-height":(0,u.rem)(r)}})),v=(0,s.factory)(e=>{let t=(0,p.useProps)("BarsList",g,e),{classNames:a,className:r,style:i,styles:s,unstyled:c,vars:u,attributes:v,data:b,valueFormatter:y,barsLabel:w,valueLabel:S,getBarProps:k,renderBar:D,barGap:M,minBarSize:j,barHeight:C,barColor:A,barTextColor:V,autoContrast:Y,variant:P,...I}=t,T=(0,m.useMantineTheme)(),H=(0,h.useStyles)({name:"BarsList",classes:n,props:t,className:r,style:i,classNames:a,styles:s,unstyled:c,attributes:v,vars:u,varsResolver:x}),L=(0,f.useMemo)(()=>Math.max(...b.map(e=>e.value),0),[b]),B=b.map((e,t)=>{var a;let r=L>0?e.value/L*100:0,{style:n,className:l,...i}=k?k(e):{},s=e.color||A||T.primaryColor,c=T.variantColorResolver({color:s,theme:T,variant:e.variant||P||"light",autoContrast:Y}),u=c.background,m=e.textColor||V?(0,d.getThemeColor)(e.textColor||V,T):c.color,p=(0,o.jsxs)("div",{...H("bar"),children:[(0,o.jsx)("div",{...H("barLabel",{className:l,style:{width:`${r}%`,backgroundColor:u,color:m,padding:0===r?0:void 0,...n}}),...i,children:e.name}),(0,o.jsx)("div",{...H("barValue"),children:(a=e.value,y?y(a):a.toString())})]},t);return D?(0,o.jsx)("div",{children:D(e,p)},t):p}),E=w||S?(0,o.jsxs)("div",{...H("labelsRow"),children:[(0,o.jsx)("div",{children:w}),(0,o.jsx)("div",{children:S})]}):null;return(0,o.jsxs)(l.Box,{...H("root"),variant:P,...I,children:[E,B]})});v.displayName="@mantine/charts/BarsList",v.classes=n,v.varsResolver=x;let b={type:"code",component:function(){return(0,o.jsx)(v,{data:a})},code:[{fileName:"Demo.tsx",code:`
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <BarsList data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},y={type:"code",component:function(){return(0,o.jsx)(v,{data:a,valueFormatter:e=>e.toLocaleString("en-US")})},code:[{fileName:"Demo.tsx",code:`
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <BarsList data={data} valueFormatter={(value) => value.toLocaleString('en-US')} />;
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},w={type:"code",component:function(){return(0,o.jsx)(v,{data:a,barsLabel:"Traffic Source",valueLabel:"Visits",valueFormatter:e=>e.toLocaleString("en-US")})},code:[{fileName:"Demo.tsx",code:`
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      barsLabel="Traffic Source"
      valueLabel="Visits"
      valueFormatter={(value) => value.toLocaleString('en-US')}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},S={type:"code",component:function(){return(0,o.jsx)(v,{data:a,barGap:"xl",valueFormatter:e=>e.toLocaleString("en-US")})},code:[{fileName:"Demo.tsx",code:`
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      barGap="xl"
      valueFormatter={(value) => value.toLocaleString('en-US')}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},k={type:"code",component:function(){return(0,o.jsx)(v,{data:a,minBarSize:200,valueFormatter:e=>e.toLocaleString("en-US")})},code:[{fileName:"Demo.tsx",code:`
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      minBarSize={200}
      valueFormatter={(value) => value.toLocaleString('en-US')}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},D={type:"code",component:function(){return(0,o.jsx)(v,{data:a,barHeight:48,valueFormatter:e=>e.toLocaleString("en-US")})},code:[{fileName:"Demo.tsx",code:`
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      barHeight={48}
      valueFormatter={(value) => value.toLocaleString('en-US')}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},M={type:"code",component:function(){return(0,o.jsx)(v,{data:a,barColor:"teal.6",barTextColor:"white",valueFormatter:e=>e.toLocaleString("en-US")})},code:[{fileName:"Demo.tsx",code:`
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      barColor="teal.6"
      barTextColor="white"
      valueFormatter={(value) => value.toLocaleString('en-barsUS')}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},j=[{name:"Yellow",value:12e5,color:"yellow.4"},{name:"Cyan",value:8e5,color:"cyan.2"},{name:"Lime",value:6e5,color:"lime.3"},{name:"Dark Blue",value:4e5,color:"blue.9"},{name:"Dark Red",value:2e5,color:"red.9"}],C={type:"code",component:function(){return(0,o.jsx)(v,{data:j,variant:"filled",autoContrast:!0,valueFormatter:e=>e.toLocaleString("en-US")})},code:[{fileName:"Demo.tsx",code:`
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      variant="filled"
      autoContrast
      valueFormatter={(value) => value.toLocaleString('en-US')}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:`export const data = ${JSON.stringify(j,null,2)};`,language:"tsx"}]},A=[{name:"React",value:85e4,color:"blue.6"},{name:"Vue",value:62e4,color:"green.6"},{name:"Angular",value:54e4,color:"yellow.6"},{name:"Svelte",value:38e4,color:"red.6"},{name:"Next.js",value:92e4,color:"teal.6"},{name:"Nuxt",value:41e4,color:"gray.8"},{name:"Remix",value:295e3,color:"orange.6"}],V={type:"code",component:function(){return(0,o.jsx)(v,{data:A,barsLabel:"Traffic Source",valueLabel:"Visits",variant:"filled",valueFormatter:e=>e.toLocaleString("en-US")})},code:[{fileName:"Demo.tsx",code:`
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      barsLabel="Traffic Source"
      valueLabel="Visits"
      variant="filled"
      valueFormatter={(value) => value.toLocaleString('en-US')}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:`export const data = ${JSON.stringify(A,null,2)};`,language:"tsx"}]},Y={type:"code",component:function(){return(0,o.jsx)(v,{data:a,valueFormatter:e=>e.toLocaleString("en-US"),barTextColor:"white",getBarProps:e=>({style:{backgroundColor:e.value>5e5?"#10a37f":void 0,fontWeight:e.value>5e5?700:void 0}})})},code:[{fileName:"Demo.tsx",code:`
import { BarsList } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarsList
      data={data}
      valueFormatter={(value) => value.toLocaleString('en-US')}
      barTextColor="white"
      getBarProps={(barData) => ({
        style: {
          backgroundColor: barData.value > 500000 ? '#10a37f' : undefined,
          fontWeight: barData.value > 500000 ? 700 : undefined,
        },
      })}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]};var P=e.i(431868);let I={type:"code",component:function(){let e=Math.max(...a.map(e=>e.value));return(0,o.jsx)(v,{data:a,barsLabel:"Traffic Source",valueLabel:"Visits",renderBar:(t,a)=>{let r=(t.value/e*100).toFixed(1);return(0,o.jsx)(P.Tooltip,{label:`${t.name}: ${r}% of total traffic`,position:"top-start",children:a})}})},code:[{fileName:"Demo.tsx",code:`
import { BarsList } from '@mantine/charts';
import { Tooltip } from '@mantine/core';
import { data } from './data';

function Demo() {
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <BarsList
      data={data}
      barsLabel="Traffic Source"
      valueLabel="Visits"
      renderBar={(barData, defaultBar) => {
        const percentage = ((barData.value / maxValue) * 100).toFixed(1);

        return (
          <Tooltip
            label={\`\${barData.name}: \${percentage}% of total traffic\`}
            position="top"
            withArrow
          >
            {defaultBar}
          </Tooltip>
        );
      }}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]};var T=(0,t.__exportAll)({autoContrast:()=>C,barColor:()=>M,barGap:()=>S,barHeight:()=>D,customColors:()=>V,getBarProps:()=>Y,labels:()=>w,minBarSize:()=>k,renderBar:()=>I,usage:()=>b,valueFormatter:()=>y});e.s(["BarsListDemos",0,T],695009)},130096,e=>{"use strict";var t=e.i(648863);let a=["Apple","Banana","Cherry","Date","Elderberry","Fig","Grape","Honeydew","Indian Fig","Jackfruit","Kiwi","Lemon","Mango","Nectarine","Orange","Papaya"],r=`export const data = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Elderberry',
  'Fig',
  'Grape',
  'Honeydew',
  'Indian Fig',
  'Jackfruit',
  'Kiwi',
  'Lemon',
  'Mango',
  'Nectarine',
  'Orange',
  'Papaya',
];`;var o=e.i(257177),n=e.i(433512),l=e.i(481178),i=e.i(44091),s=e.i(391466),c=e.i(275519),d=e.i(232471);function u(e,t){if(!e.current)return null;let a=Array.from(e.current.children).filter(e=>t.current!==e);if(0===a.length)return null;let r=function(e){if(0===e.length)return{};let t={};return e.forEach(e=>{let a=e.getBoundingClientRect(),r=Math.round(a.top),o=Math.round(a.bottom);t[r]?t[r].bottom=Math.max(t[r].bottom,o):t[r]={elements:new Set,bottom:o,top:r},t[r].elements.add(e)}),t}(a);return{itemsSizesMap:r,rowPositions:Object.keys(r).map(Number),children:a}}var m=e.i(191788),p=e.i(730943),h={root:"m_f62ab2af"},f=e.i(417241),g=e.i(332977),x=e.i(391398);let v={maxRows:1,maxVisibleItems:1/0},b=(0,l.createVarsResolver)((e,{gap:t})=>({root:{"--ol-gap":(0,n.getSpacing)(t)}})),y=(0,c.genericFactory)(e=>{let t=(0,i.useProps)("OverflowList",v,e),{classNames:a,className:r,style:o,styles:n,unstyled:l,vars:c,attributes:y,data:w,renderOverflow:S,renderItem:k,maxRows:D,maxVisibleItems:M,ref:j,...C}=t,A=(0,s.useStyles)({name:"OverflowList",classes:h,props:t,className:r,style:o,classNames:a,styles:n,unstyled:l,attributes:y,vars:c,varsResolver:b}),[V,Y]=(0,m.useState)(w.length),[P,I]=(0,m.useState)(0),[T,H]=(0,m.useState)("normal"),L=(0,m.useRef)(null),B=(0,g.useMergedRef)(L,j),E=V-P,R=w.length-E>0&&"measuring"!==T?S?.(w.slice(E)):null,Z=(0,m.useRef)(null),z=(0,g.useMergedRef)(Z,R?.ref),F=function(e){let t=(0,m.useRef)(null),[a,r]=(0,m.useState)(null);return(0,m.useEffect)(()=>{if(e.current)return t.current=new ResizeObserver(e=>{if(e[0]){let t=e[0];(0,p.flushSync)(()=>{r({width:t.borderBoxSize[0]?.inlineSize??t.target.clientWidth,height:t.borderBoxSize[0]?.blockSize??t.target.clientHeight,contentWidth:t.contentRect.width,contentHeight:t.contentRect.height})})}}),t.current.observe(e.current),()=>{t.current&&(t.current.disconnect(),t.current=null)}},[e.current]),a}(L);(0,f.useIsomorphicEffect)(()=>{H("measuring"),Y(w.length),I(0)},[w.length,D]),(0,f.useIsomorphicEffect)(()=>{"measuring"===T&&(W(),H("measuring-overflow-indicator"))},[T]),(0,f.useIsomorphicEffect)(()=>{"measuring-overflow-indicator"!==T||N()||H("normal")},[T,P]),(0,f.useIsomorphicEffect)(()=>{"normal"===T&&(H("measuring"),I(0))},[F]);let W=()=>{let e=u(L,Z);if(!e)return;if(1===w.length){let t=e.itemsSizesMap[e.rowPositions[0]].elements.values().next().value,a=L.current?.getBoundingClientRect().width??0;(t?.getBoundingClientRect().width??0)>a?Y(0):Y(1);return}let t=e.rowPositions.slice(0,D).reduce((t,a)=>t+e.itemsSizesMap[a].elements.size,0);Y(t=Math.min(t,M))},N=()=>{if(!Z.current)return!1;let e=u(L,Z);if(!e)return!1;let{rowPositions:t,itemsSizesMap:a}=e,r=Z.current.getBoundingClientRect();return r.top+r.height/2>a[t[t.length-1]].bottom&&(I(e=>e+1),!0)},_=R?(0,m.cloneElement)(R,{ref:z}):null,G=w;return M&&(G=G.slice(0,M)),(0,x.jsxs)(d.Box,{ref:B,...A("root"),...C,children:[G.map((e,t)=>"measuring"===T||t<E?(0,x.jsx)(x.Fragment,{children:k(e,t)},t):null),_]})});y.displayName="@mantine/core/OverflowList",y.classes=h,y.varsResolver=b;let w={type:"code",component:function(){return(0,x.jsx)("div",{style:{resize:"horizontal",overflow:"auto",maxWidth:"100%"},children:(0,x.jsx)(y,{data:a,gap:4,renderOverflow:e=>(0,x.jsxs)(o.Badge,{children:["+",e.length," more"]}),renderItem:(e,t)=>(0,x.jsx)(o.Badge,{children:e},t)})})},code:[{fileName:"OverflowListDemo.tsx",code:`
import { Badge, OverflowList } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <div style={{ resize: 'horizontal', overflow: 'auto', maxWidth: '100%' }}>
      <OverflowList
        data={data}
        gap={4}
        renderOverflow={(items) => <Badge>+{items.length} more</Badge>}
        renderItem={(item, index) => <Badge key={index}>{item}</Badge>}
      />
    </div>
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},S={type:"code",component:function(){return(0,x.jsx)("div",{style:{resize:"horizontal",overflow:"auto",maxWidth:500},children:(0,x.jsx)(y,{data:a,gap:4,maxRows:2,renderOverflow:e=>(0,x.jsxs)(o.Badge,{children:["+",e.length," more"]}),renderItem:(e,t)=>(0,x.jsx)(o.Badge,{children:e},t)})})},code:[{fileName:"OverflowListDemo.tsx",code:`
import { Badge, OverflowList } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <div style={{ resize: 'horizontal', overflow: 'auto', maxWidth: 500 }}>
      <OverflowList
        data={data}
        gap={4}
        maxRows={2}
        renderOverflow={(items) => <Badge>+{items.length} more</Badge>}
        renderItem={(item, index) => <Badge key={index}>{item}</Badge>}
      />
    </div>
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},k={type:"code",component:function(){return(0,x.jsx)("div",{style:{resize:"horizontal",overflow:"auto",maxWidth:"100%"},children:(0,x.jsx)(y,{data:a,gap:4,maxVisibleItems:5,renderOverflow:e=>(0,x.jsxs)(o.Badge,{children:["+",e.length," more"]}),renderItem:(e,t)=>(0,x.jsx)(o.Badge,{children:e},t)})})},code:[{fileName:"OverflowListDemo.tsx",code:`
import { Badge, OverflowList } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <div style={{ resize: 'horizontal', overflow: 'auto', maxWidth: '100%' }}>
      <OverflowList
        data={data}
        gap={4}
        maxVisibleItems={5}
        renderOverflow={(items) => <Badge>+{items.length} more</Badge>}
        renderItem={(item, index) => <Badge key={index}>{item}</Badge>}
      />
    </div>
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]};var D=e.i(330573),M=e.i(369974);let j={type:"code",component:function(){return(0,x.jsx)("div",{style:{resize:"horizontal",overflow:"auto",maxWidth:"100%"},children:(0,x.jsx)(y,{data:a,gap:4,renderItem:(e,t)=>(0,x.jsx)(o.Badge,{children:e},t),renderOverflow:e=>(0,x.jsx)(D.Center,{children:(0,x.jsxs)(M.HoverCard,{children:[(0,x.jsx)(M.HoverCard.Target,{children:(0,x.jsxs)(o.Badge,{children:["+",e.length," more"]})}),(0,x.jsx)(M.HoverCard.Dropdown,{children:e.map((e,t)=>(0,x.jsx)("div",{children:e},t))})]})})})})},code:[{fileName:"OverflowListDemo.tsx",code:`
import { Badge, Center, HoverCard, OverflowList } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <div style={{ resize: 'horizontal', overflow: 'auto', maxWidth: '100%' }}>
      <OverflowList
        data={data}
        gap={4}
        renderItem={(item, index) => <Badge key={index}>{item}</Badge>}
        renderOverflow={(items) => (
          <Center>
            <HoverCard>
              <HoverCard.Target>
                <Badge>+{items.length} more</Badge>
              </HoverCard.Target>
              <HoverCard.Dropdown>
                {items.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </HoverCard.Dropdown>
            </HoverCard>
          </Center>
        )}
      />
    </div>
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]};var C=(0,t.__exportAll)({hoverCard:()=>j,maxRows:()=>S,maxVisibleItems:()=>k,usage:()=>w});e.s(["OverflowListDemos",0,C],130096)},417693,412563,e=>{"use strict";var t=e.i(779177),a=e.i(481178),r=e.i(317477),o=e.i(44091),n=e.i(391466),l=e.i(275519),i=e.i(232471),s=e.i(284629),c=e.i(462138),d={root:"m_bc8f275",container:"m_ee44dece",content:"m_53e4f606",chevron:"m_47754fc8",control:"m_53e526ea"},u=e.i(191788);function m(e={}){let{scrollAmount:t=200,draggable:a=!0,onScrollStateChange:r}=e,o=(0,u.useRef)(null),[n,l]=(0,u.useState)(!1),[i,s]=(0,u.useState)(!1),[c,d]=(0,u.useState)(!1),p=(0,u.useRef)(!1),h=(0,u.useRef)(!1),f=(0,u.useRef)(0),g=(0,u.useRef)(0),x=(0,u.useRef)(r);x.current=r;let v=(0,u.useCallback)(()=>{let e=o.current;if(e){let t,a,{scrollLeft:r,scrollWidth:o,clientWidth:n}=e;"rtl"===getComputedStyle(e).direction?(t=r<-1,a=r>-(o-n)+1):(t=r>1,a=r<o-n-1),l(t),s(a),x.current?.({canScrollStart:t,canScrollEnd:a})}},[]);(0,u.useEffect)(()=>{v();let e=o.current;if(e){e.addEventListener("scroll",v);let t=new ResizeObserver(v);return t.observe(e),()=>{e.removeEventListener("scroll",v),t.disconnect()}}},[v]);let b=(0,u.useCallback)(e=>{let a=o.current;if(a){let r="rtl"===getComputedStyle(a).direction,o="end"===e?t:-t;a.scrollBy({left:r?-o:o,behavior:"smooth"})}},[t]),y=(0,u.useCallback)(()=>b("start"),[b]),w=(0,u.useCallback)(()=>b("end"),[b]),S=(0,u.useCallback)(e=>{if(!a)return;let t=o.current;t&&(p.current=!0,h.current=!1,d(!0),f.current=e.pageX-t.offsetLeft,g.current=t.scrollLeft,t.style.cursor="grabbing",t.style.userSelect="none")},[a]),k=(0,u.useCallback)(e=>{if(!p.current)return;e.preventDefault();let t=o.current;if(t){let a=e.pageX-t.offsetLeft-f.current;Math.abs(a)>5&&(h.current=!0),t.scrollLeft=g.current-a}},[]),D=(0,u.useCallback)(()=>{let e=h.current;p.current=!1,h.current=!1,d(!1);let t=o.current;if(t&&(t.style.cursor="",t.style.userSelect="",e)){let e=a=>{a.stopPropagation(),a.preventDefault(),t.removeEventListener("click",e,!0)};t.addEventListener("click",e,!0)}},[]),M=(0,u.useCallback)(()=>{p.current&&D()},[D]);return{ref:(0,u.useCallback)(e=>{o.current=e,e&&v()},[v]),canScrollStart:n,canScrollEnd:i,scrollStart:y,scrollEnd:w,isDragging:c,dragHandlers:{onMouseDown:S,onMouseMove:k,onMouseUp:D,onMouseLeave:M}}}e.s(["useScroller",0,m],412563);var p=e.i(391398);let h={scrollAmount:200,draggable:!0},f=(0,a.createVarsResolver)((e,{controlSize:a,edgeGradientColor:o})=>({root:{"--scroller-control-size":(0,t.rem)(a),"--scroller-background-color":o?(0,r.getThemeColor)(o,e):void 0}})),g=(0,l.factory)(e=>{let t=(0,o.useProps)("Scroller",h,e),{classNames:a,className:r,style:l,styles:u,unstyled:g,vars:x,children:v,scrollAmount:b,controlSize:y,edgeGradientColor:w,startControlProps:S,endControlProps:k,startControlIcon:D,endControlIcon:M,showStartControl:j,showEndControl:C,draggable:A,mod:V,ref:Y,attributes:P,...I}=t,T=(0,n.useStyles)({name:"Scroller",classes:d,props:t,className:r,style:l,classNames:a,styles:u,unstyled:g,vars:x,varsResolver:f,attributes:P}),H=m({scrollAmount:b,draggable:A}),L=j||H.canScrollStart,B=C||H.canScrollEnd;return(0,p.jsxs)(i.Box,{...T("root"),ref:Y,mod:V,...I,children:[(0,p.jsx)(s.UnstyledButton,{...T("control"),onClick:H.scrollStart,"data-position":"start","data-hidden":!L||void 0,"aria-label":"Scroll left",tabIndex:L?0:-1,...S,children:D||(0,p.jsx)(c.AccordionChevron,{...T("chevron")})}),(0,p.jsx)("div",{...T("container"),ref:H.ref,role:"presentation","data-draggable":A||void 0,...H.dragHandlers,children:(0,p.jsx)("div",{...T("content"),children:v})}),(0,p.jsx)(s.UnstyledButton,{...T("control"),onClick:H.scrollEnd,"data-position":"end","data-hidden":!B||void 0,"aria-label":"Scroll right",tabIndex:B?0:-1,...k,children:M||(0,p.jsx)(c.AccordionChevron,{...T("chevron")})})]})});g.classes=d,g.varsResolver=f,g.displayName="@mantine/core/Scroller",e.s(["Scroller",0,g],417693)},520226,e=>{"use strict";var t=e.i(648863),a=e.i(257177),r=e.i(725695),o=e.i(417693),n=e.i(391398);let l={type:"code",component:function(){return(0,n.jsx)(o.Scroller,{children:(0,n.jsx)(r.Group,{gap:"xs",wrap:"nowrap",children:Array.from({length:20}).map((e,t)=>(0,n.jsxs)(a.Badge,{variant:"light",size:"lg",miw:"fit-content",children:["Badge ",t+1]},t))})})},code:`
import { Badge, Group, Scroller } from '@mantine/core';

function Demo() {
  return (
    <Scroller>
      <Group gap="xs" wrap="nowrap">
        {Array.from({ length: 20 }).map((_, index) => (
          <Badge key={index} variant="light" size="lg">
            Badge {index + 1}
          </Badge>
        ))}
      </Group>
    </Scroller>
  );
}
`,maxWidth:500},i={type:"code",component:function(){return(0,n.jsx)(o.Scroller,{scrollAmount:300,children:(0,n.jsx)(r.Group,{gap:"xs",wrap:"nowrap",children:Array.from({length:30}).map((e,t)=>(0,n.jsxs)(a.Badge,{variant:"light",size:"lg",miw:"fit-content",children:["Badge ",t+1]},t))})})},code:`
import { Badge, Group, Scroller } from '@mantine/core';

function Demo() {
  return (
    <Scroller scrollAmount={300}>
      <Group gap="xs" wrap="nowrap">
        {Array.from({ length: 30 }).map((_, index) => (
          <Badge key={index} variant="light" size="lg" miw="fit-content">
            Badge {index + 1}
          </Badge>
        ))}
      </Group>
    </Scroller>
  );
}
`,centered:!0,maxWidth:500},s={type:"code",component:function(){return(0,n.jsx)(o.Scroller,{controlSize:"xl",children:(0,n.jsx)(r.Group,{gap:"xs",wrap:"nowrap",children:Array.from({length:20}).map((e,t)=>(0,n.jsxs)(a.Badge,{variant:"light",size:"lg",miw:"fit-content",children:["Badge ",t+1]},t))})})},code:`
import { Badge, Group, Scroller } from '@mantine/core';

function Demo() {
  return (
    <Scroller controlSize="xl">
      <Group gap="xs" wrap="nowrap">
        {Array.from({ length: 20 }).map((_, index) => (
          <Badge key={index} variant="light" size="lg" miw="fit-content">
            Badge {index + 1}
          </Badge>
        ))}
      </Group>
    </Scroller>
  );
}
`,centered:!0,maxWidth:500};var c=e.i(943311),d=e.i(858508);let u={type:"code",component:function(){return(0,n.jsx)(o.Scroller,{startControlIcon:(0,n.jsx)(c.ArrowLeftIcon,{size:16}),endControlIcon:(0,n.jsx)(d.ArrowRightIcon,{size:16}),children:(0,n.jsx)(r.Group,{gap:"xs",wrap:"nowrap",children:Array.from({length:20}).map((e,t)=>(0,n.jsxs)(a.Badge,{variant:"light",size:"lg",miw:"fit-content",children:["Badge ",t+1]},t))})})},code:`
import { ArrowLeftIcon, ArrowRightIcon } from '@phosphor-icons/react';
import { Badge, Group, Scroller } from '@mantine/core';

function Demo() {
  return (
    <Scroller
      startControlIcon={<ArrowLeftIcon size={16} />}
      endControlIcon={<ArrowRightIcon size={16} />}
    >
      <Group gap="xs" wrap="nowrap">
        {Array.from({ length: 20 }).map((_, index) => (
          <Badge key={index} variant="light" size="lg" miw="fit-content">
            Badge {index + 1}
          </Badge>
        ))}
      </Group>
    </Scroller>
  );
}
`,centered:!0,maxWidth:500},m={type:"code",component:function(){return(0,n.jsx)(o.Scroller,{draggable:!0,children:(0,n.jsx)(r.Group,{gap:"xs",wrap:"nowrap",children:Array.from({length:20}).map((e,t)=>(0,n.jsxs)(a.Badge,{variant:"light",size:"lg",miw:"fit-content",children:["Badge ",t+1]},t))})})},code:`
import { Badge, Group, Scroller } from '@mantine/core';

function Demo() {
  return (
    <Scroller draggable>
      <Group gap="xs" wrap="nowrap">
        {Array.from({ length: 20 }).map((_, index) => (
          <Badge key={index} variant="light" size="lg" miw="fit-content">
            Badge {index + 1}
          </Badge>
        ))}
      </Group>
    </Scroller>
  );
}
`,centered:!0,maxWidth:500};var p=(0,t.__exportAll)({controlSize:()=>s,customIcons:()=>u,draggable:()=>m,scrollAmount:()=>i,usage:()=>l});e.s(["ScrollerDemos",0,p],520226)},813916,e=>{"use strict";var t=e.i(648863),a=e.i(232471),r=e.i(485108),o=e.i(725695),n=e.i(391398),l=e.i(412563);let i={type:"code",code:`
import { Box, Button, Group } from '@mantine/core';
import { useScroller } from '@mantine/hooks';

function Demo() {
  const scroller = useScroller();

  return (
    <Box>
      <Group mb="md">
        <Button
          onClick={scroller.scrollStart}
          disabled={!scroller.canScrollStart}
          variant="default"
          size="xs"
        >
          ← Scroll left
        </Button>
        <Button
          onClick={scroller.scrollEnd}
          disabled={!scroller.canScrollEnd}
          variant="default"
          size="xs"
        >
          Scroll right →
        </Button>
      </Group>

      <div
        ref={scroller.ref}
        {...scroller.dragHandlers}
        style={{
          overflow: 'auto',
          cursor: scroller.isDragging ? 'grabbing' : 'grab',
        }}
      >
        <Group wrap="nowrap" gap="md">
          {Array.from({ length: 20 }).map((_, index) => (
            <Box
              key={index}
              style={{
                minWidth: 100,
                height: 80,
                backgroundColor: 'var(--mantine-color-blue-filled)',
                borderRadius: 'var(--mantine-radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 500,
              }}
            >
              {index + 1}
            </Box>
          ))}
        </Group>
      </div>
    </Box>
  );
}
`,component:function(){let e=(0,l.useScroller)();return(0,n.jsxs)(a.Box,{children:[(0,n.jsxs)(o.Group,{mb:"md",children:[(0,n.jsx)(r.Button,{onClick:e.scrollStart,disabled:!e.canScrollStart,variant:"default",size:"xs",children:"← Scroll left"}),(0,n.jsx)(r.Button,{onClick:e.scrollEnd,disabled:!e.canScrollEnd,variant:"default",size:"xs",children:"Scroll right →"})]}),(0,n.jsx)("div",{ref:e.ref,...e.dragHandlers,style:{overflow:"auto",cursor:e.isDragging?"grabbing":"grab"},children:(0,n.jsx)(o.Group,{wrap:"nowrap",gap:"md",children:Array.from({length:20}).map((e,t)=>(0,n.jsx)(a.Box,{style:{minWidth:100,height:80,backgroundColor:"var(--mantine-color-blue-filled)",borderRadius:"var(--mantine-radius-md)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:500},children:t+1},t))})})]})}};var s=e.i(883364);let c={type:"code",code:`
import { Box, Button, Group, Text } from '@mantine/core';
import { useScroller } from '@mantine/hooks';

function Demo() {
  const scroller = useScroller({ scrollAmount: 400 });

  return (
    <Box>
      <Group mb="md" justify="space-between">
        <Group>
          <Button
            onClick={scroller.scrollStart}
            disabled={!scroller.canScrollStart}
            variant="default"
            size="xs"
          >
            ← Scroll left
          </Button>
          <Button
            onClick={scroller.scrollEnd}
            disabled={!scroller.canScrollEnd}
            variant="default"
            size="xs"
          >
            Scroll right →
          </Button>
        </Group>
        <Text size="sm" c="dimmed">scrollAmount: 400px</Text>
      </Group>

      <div
        ref={scroller.ref}
        {...scroller.dragHandlers}
        style={{
          overflow: 'auto',
          cursor: scroller.isDragging ? 'grabbing' : 'grab',
        }}
      >
        <Group wrap="nowrap" gap="md">
          {Array.from({ length: 20 }).map((_, index) => (
            <Box
              key={index}
              style={{
                minWidth: 100,
                height: 80,
                backgroundColor: 'var(--mantine-color-blue-filled)',
                borderRadius: 'var(--mantine-radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 500,
              }}
            >
              {index + 1}
            </Box>
          ))}
        </Group>
      </div>
    </Box>
  );
}
`,component:function(){let e=(0,l.useScroller)({scrollAmount:400});return(0,n.jsxs)(a.Box,{children:[(0,n.jsxs)(o.Group,{mb:"md",justify:"space-between",children:[(0,n.jsxs)(o.Group,{children:[(0,n.jsx)(r.Button,{onClick:e.scrollStart,disabled:!e.canScrollStart,variant:"default",size:"xs",children:"← Scroll left"}),(0,n.jsx)(r.Button,{onClick:e.scrollEnd,disabled:!e.canScrollEnd,variant:"default",size:"xs",children:"Scroll right →"})]}),(0,n.jsx)(s.Text,{size:"sm",c:"dimmed",children:"scrollAmount: 400px"})]}),(0,n.jsx)("div",{ref:e.ref,...e.dragHandlers,style:{overflow:"auto",cursor:e.isDragging?"grabbing":"grab"},children:(0,n.jsx)(o.Group,{wrap:"nowrap",gap:"md",children:Array.from({length:20}).map((e,t)=>(0,n.jsx)(a.Box,{style:{minWidth:100,height:80,backgroundColor:"var(--mantine-color-blue-filled)",borderRadius:"var(--mantine-radius-md)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:500},children:t+1},t))})})]})}},d={type:"code",code:`
import { Box, Button, Group, Text } from '@mantine/core';
import { useScroller } from '@mantine/hooks';

function Demo() {
  const scroller = useScroller({ draggable: false });

  return (
    <Box>
      <Group mb="md" justify="space-between">
        <Group>
          <Button
            onClick={scroller.scrollStart}
            disabled={!scroller.canScrollStart}
            variant="default"
            size="xs"
          >
            ← Scroll left
          </Button>
          <Button
            onClick={scroller.scrollEnd}
            disabled={!scroller.canScrollEnd}
            variant="default"
            size="xs"
          >
            Scroll right →
          </Button>
        </Group>
        <Text size="sm" c="dimmed">draggable: false</Text>
      </Group>

      <div
        ref={scroller.ref}
        style={{
          overflow: 'auto',
        }}
      >
        <Group wrap="nowrap" gap="md">
          {Array.from({ length: 20 }).map((_, index) => (
            <Box
              key={index}
              style={{
                minWidth: 100,
                height: 80,
                backgroundColor: 'var(--mantine-color-blue-filled)',
                borderRadius: 'var(--mantine-radius-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 500,
              }}
            >
              {index + 1}
            </Box>
          ))}
        </Group>
      </div>
    </Box>
  );
}
`,component:function(){let e=(0,l.useScroller)({draggable:!1});return(0,n.jsxs)(a.Box,{children:[(0,n.jsxs)(o.Group,{mb:"md",justify:"space-between",children:[(0,n.jsxs)(o.Group,{children:[(0,n.jsx)(r.Button,{onClick:e.scrollStart,disabled:!e.canScrollStart,variant:"default",size:"xs",children:"← Scroll left"}),(0,n.jsx)(r.Button,{onClick:e.scrollEnd,disabled:!e.canScrollEnd,variant:"default",size:"xs",children:"Scroll right →"})]}),(0,n.jsx)(s.Text,{size:"sm",c:"dimmed",children:"draggable: false"})]}),(0,n.jsx)("div",{ref:e.ref,style:{overflow:"auto"},children:(0,n.jsx)(o.Group,{wrap:"nowrap",gap:"md",children:Array.from({length:20}).map((e,t)=>(0,n.jsx)(a.Box,{style:{minWidth:100,height:80,backgroundColor:"var(--mantine-color-blue-filled)",borderRadius:"var(--mantine-radius-md)",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:500},children:t+1},t))})})]})}};var u=(0,t.__exportAll)({draggable:()=>d,scrollAmount:()=>c,usage:()=>i});e.s(["UseScrollerDemos",0,u],813916)},848719,e=>{"use strict";var t=e.i(779177),a=e.i(481178),r=e.i(44091),o=e.i(391466),n=e.i(275519),l=e.i(232471),i=e.i(317477),s=e.i(951254),c=e.i(431868),d=e.i(391398);function u({size:e,value:t,offset:a,sum:r,thickness:o,root:n,color:m,lineRoundCaps:p,tooltip:h,getStyles:f,display:g,...x}){let v=(0,s.useMantineTheme)();return(0,d.jsx)(c.Tooltip.Floating,{disabled:!h,label:h,children:(0,d.jsx)(l.Box,{component:"circle",...x,...f("curve"),__vars:{"--curve-color":m?(0,i.getThemeColor)(m,v):void 0},fill:"none",strokeLinecap:p?"round":"butt",...function({size:e,thickness:t,sum:a,value:r,root:o,offset:n}){let l=(.9*e-2*t)/2,i=Math.PI*l*2/100,s=o||void 0===r?`${(100-a)*i}, ${a*i}`:`${r*i}, ${(100-r)*i}`;return{strokeWidth:Number.isNaN(t)?12:t,cx:e/2||0,cy:e/2||0,r:l||0,transform:o?`scale(1, -1) translate(0, -${e})`:void 0,strokeDasharray:s,strokeDashoffset:o?0:n||0}}({sum:r,size:e,thickness:o,value:t,offset:a,root:n})})})}u.displayName="@mantine/core/Curve";var m={root:"m_b32e4812",svg:"m_d43b5134",curve:"m_b1ca1fbf",label:"m_b23f9dc4"},p=e.i(191788);let h={size:120,thickness:12,startAngle:270},f=(0,a.createVarsResolver)((e,{size:a,thickness:r,transitionDuration:o,startAngle:n})=>({root:{"--rp-size":(0,t.rem)(a),"--rp-label-offset":(0,t.rem)(2*r),"--rp-transition-duration":o?`${o}ms`:void 0},svg:{"--rp-start-angle":`${n}deg`}})),g=(0,n.factory)(e=>{let t=(0,r.useProps)("RingProgress",h,e),{classNames:a,className:n,style:i,styles:s,unstyled:c,vars:g,label:x,sections:v,size:b,thickness:y,roundCaps:w,rootColor:S,transitionDuration:k,sectionGap:D,startAngle:M,attributes:j,...C}=t,A=(0,o.useStyles)({name:"RingProgress",classes:m,props:t,className:n,style:i,classNames:a,styles:s,unstyled:c,attributes:j,vars:g,varsResolver:f}),V=Math.min(y||12,(b||120)/4),Y=(function({size:e,thickness:t,sections:a,renderRoundedLineCaps:r,rootColor:o,sectionGap:n=0}){let l=a.reduce((e,t)=>e+t.value,0),i=(.9*e-2*t)/2*Math.PI*2,s=i,c=[],d=[],u=n/360*100;for(let e=0;e<a.length;e+=1){let t=Math.max(0,a[e].value-u);c.push({sum:l,offset:s,data:{...a[e],value:t},root:!1}),s-=a[e].value/100*i}if(c.push({sum:l,offset:s,data:{color:o},root:!0}),d.push({...c[c.length-1],lineRoundCaps:!1}),c.length>2){d.push({...c[0],lineRoundCaps:r}),d.push({...c[c.length-2],lineRoundCaps:r});for(let e=1;e<=c.length-3;e+=1)d.push({...c[e],lineRoundCaps:!1})}else d.push({...c[0],lineRoundCaps:r});return d})({size:b,thickness:V,sections:v,renderRoundedLineCaps:w,rootColor:S,sectionGap:D}).map(({data:e,sum:t,root:a,lineRoundCaps:r,offset:o},n)=>(0,p.createElement)(u,{...e,key:n,size:b,thickness:V,sum:t,offset:o,color:e?.color,root:a,lineRoundCaps:r,getStyles:A}));return(0,d.jsxs)(l.Box,{...A("root"),size:b,...C,children:[(0,d.jsx)("svg",{...A("svg"),viewBox:`0 0 ${b} ${b}`,children:Y}),x&&(0,d.jsx)("div",{...A("label"),children:x})]})});g.classes=m,g.varsResolver=f,g.displayName="@mantine/core/RingProgress",e.s(["RingProgress",0,g],848719)},209996,e=>{"use strict";var t=e.i(648863),a=e.i(257177),r=e.i(485108),o=e.i(382422),n=e.i(725695),l=e.i(724288),i=e.i(883364),s=e.i(391398);let c={type:"code",code:`
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Card shadow="sm" padding="lg" withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md">
        Book classic tour now
      </Button>
    </Card>
  );
}

`,component:function(){return(0,s.jsxs)(o.Card,{shadow:"sm",padding:"lg",withBorder:!0,children:[(0,s.jsx)(o.Card.Section,{children:(0,s.jsx)(l.Image,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",height:160,alt:"Norway"})}),(0,s.jsxs)(n.Group,{justify:"space-between",mt:"md",mb:"xs",children:[(0,s.jsx)(i.Text,{fw:500,children:"Norway Fjord Adventures"}),(0,s.jsx)(a.Badge,{color:"pink",children:"On Sale"})]}),(0,s.jsx)(i.Text,{size:"sm",c:"dimmed",children:"With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"}),(0,s.jsx)(r.Button,{color:"blue",fullWidth:!0,mt:"md",children:"Book classic tour now"})]})},centered:!0,maxWidth:340,dimmed:!0},d={type:"code",code:`
import { Card, Image, Text } from '@mantine/core';

function Demo() {
  return (
    <Card
      shadow="sm"
      padding="xl"
      component="a"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
    >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          h={160}
          alt="No way!"
        />
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        You&apos;ve won a million dollars in cash!
      </Text>

      <Text mt="xs" c="dimmed" size="sm">
        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
      </Text>
    </Card>
  );
}
`,component:function(){return(0,s.jsxs)(o.Card,{shadow:"sm",padding:"lg",component:"a",href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",target:"_blank",children:[(0,s.jsx)(o.Card.Section,{children:(0,s.jsx)(l.Image,{src:"https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",h:160,alt:"No way!"})}),(0,s.jsx)(i.Text,{fw:500,size:"lg",mt:"md",children:"You've won a million dollars in cash!"}),(0,s.jsx)(i.Text,{mt:"xs",c:"dimmed",size:"sm",children:"Please click anywhere on this card to claim your reward, this is not a fraud, trust us"})]})},centered:!0,maxWidth:340,dimmed:!0},u={type:"code",code:`
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Card shadow="sm" padding="lg" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md">
        Book classic tour now
      </Button>
    </Card>
  );
}
`,component:function(){return(0,s.jsxs)(o.Card,{shadow:"sm",padding:"lg",withBorder:!0,children:[(0,s.jsx)(o.Card.Section,{component:"a",href:"https://mantine.dev/",children:(0,s.jsx)(l.Image,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",height:160,alt:"Norway"})}),(0,s.jsxs)(n.Group,{justify:"space-between",mt:"md",mb:"xs",children:[(0,s.jsx)(i.Text,{fw:500,children:"Norway Fjord Adventures"}),(0,s.jsx)(a.Badge,{color:"pink",children:"On Sale"})]}),(0,s.jsx)(i.Text,{size:"sm",c:"dimmed",children:"With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"}),(0,s.jsx)(r.Button,{color:"blue",fullWidth:!0,mt:"md",children:"Book classic tour now"})]})},centered:!0,maxWidth:340,dimmed:!0};var m=e.i(89495),p=e.i(604955),h=e.i(191788),f=e.i(171481);let g=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M188,140H172a12,12,0,0,0-12,12v56a12,12,0,0,0,24,0v-4h4a32,32,0,0,0,0-64Zm0,40h-4V164h4a8,8,0,0,1,0,16Zm-48-28v56a12,12,0,0,1-24,0V152a12,12,0,0,1,24,0ZM96,208a12,12,0,0,1-12,12H52a12,12,0,0,1-10.42-17.95L63.32,164H52a12,12,0,0,1,0-24H84A12,12,0,0,1,94.42,158L72.68,196H84A12,12,0,0,1,96,208ZM216.49,79.52l-56-56A12,12,0,0,0,152,20H56A20,20,0,0,0,36,40v68a12,12,0,0,0,24,0V44h76V92a12,12,0,0,0,12,12h48v4a12,12,0,0,0,24,0V88A12,12,0,0,0,216.49,79.52ZM160,80V57l23,23Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M208,88H152V32Z",opacity:"0.2"}),h.createElement("path",{d:"M184,144H168a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0v-8h8a28,28,0,0,0,0-56Zm0,40h-8V160h8a12,12,0,0,1,0,24Zm-48-32v56a8,8,0,0,1-16,0V152a8,8,0,0,1,16,0ZM96,208a8,8,0,0,1-8,8H56a8,8,0,0,1-7-12l25.16-44H56a8,8,0,0,1,0-16H88a8,8,0,0,1,7,12L69.79,200H88A8,8,0,0,1,96,208ZM213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48v16a8,8,0,0,0,16,0V88A8,8,0,0,0,213.66,82.34ZM160,80V51.31L188.69,80Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M184,144H168a8,8,0,0,0-8,8v55.73a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8v-8h7.4c15.24,0,28.14-11.92,28.59-27.15A28,28,0,0,0,184,144Zm-.35,40H176V160h8A12,12,0,0,1,196,173.16,12.25,12.25,0,0,1,183.65,184ZM136,152v55.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V152.27a8.17,8.17,0,0,1,7.47-8.25A8,8,0,0,1,136,152ZM96,208.53A8.17,8.17,0,0,1,87.73,216H56.23a8.27,8.27,0,0,1-6-2.5A8,8,0,0,1,49.05,204l25.16-44H56.27A8.17,8.17,0,0,1,48,152.53,8,8,0,0,1,56,144H87.77a8.27,8.27,0,0,1,6,2.5A8,8,0,0,1,95,156L69.79,200H88A8,8,0,0,1,96,208.53ZM213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76a4,4,0,0,0,4,4H212a4,4,0,0,0,4-4V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M184,146H168a6,6,0,0,0-6,6v56a6,6,0,0,0,12,0V198h10a26,26,0,0,0,0-52Zm0,40H174V158h10a14,14,0,0,1,0,28Zm-50-34v56a6,6,0,0,1-12,0V152a6,6,0,0,1,12,0ZM94,208a6,6,0,0,1-6,6H56a6,6,0,0,1-5.21-9l26.87-47H56a6,6,0,0,1,0-12H88a6,6,0,0,1,5.21,9L66.34,202H88A6,6,0,0,1,94,208ZM212.24,83.76l-56-56A6,6,0,0,0,152,26H56A14,14,0,0,0,42,40v72a6,6,0,0,0,12,0V40a2,2,0,0,1,2-2h90V88a6,6,0,0,0,6,6h50v18a6,6,0,0,0,12,0V88A6,6,0,0,0,212.24,83.76ZM158,82V46.48L193.52,82Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M184,144H168a8,8,0,0,0-8,8v56a8,8,0,0,0,16,0v-8h8a28,28,0,0,0,0-56Zm0,40h-8V160h8a12,12,0,0,1,0,24Zm-48-32v56a8,8,0,0,1-16,0V152a8,8,0,0,1,16,0ZM96,208a8,8,0,0,1-8,8H56a8,8,0,0,1-7-12l25.16-44H56a8,8,0,0,1,0-16H88a8,8,0,0,1,7,12L69.79,200H88A8,8,0,0,1,96,208ZM213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v72a8,8,0,0,0,16,0V40h88V88a8,8,0,0,0,8,8h48v16a8,8,0,0,0,16,0V88A8,8,0,0,0,213.66,82.34ZM160,80V51.31L188.69,80Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M184,148H168a4,4,0,0,0-4,4v56a4,4,0,0,0,8,0V196h12a24,24,0,0,0,0-48Zm0,40H172V156h12a16,16,0,0,1,0,32Zm-52-36v56a4,4,0,0,1-8,0V152a4,4,0,0,1,8,0Zm-40.53,2L62.89,204H88a4,4,0,0,1,0,8H56a4,4,0,0,1-3.47-6l28.58-50H56a4,4,0,0,1,0-8H88a4,4,0,0,1,3.47,6ZM210.83,85.17l-56-56A4,4,0,0,0,152,28H56A12,12,0,0,0,44,40v72a4,4,0,0,0,8,0V40a4,4,0,0,1,4-4h92V88a4,4,0,0,0,4,4h52v20a4,4,0,0,0,8,0V88A4,4,0,0,0,210.83,85.17ZM156,84V41.65L198.34,84Z"}))]]),x=h.forwardRef((e,t)=>h.createElement(f.default,{ref:t,...e,weights:g}));x.displayName="FileZipIcon";var v=e.i(823439),b=e.i(658109),y=e.i(610287),w=e.i(140763);let S=["https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png"],k={type:"code",component:function(){return(0,s.jsxs)(o.Card,{withBorder:!0,shadow:"sm",children:[(0,s.jsx)(o.Card.Section,{withBorder:!0,inheritPadding:!0,py:"xs",children:(0,s.jsxs)(n.Group,{justify:"space-between",children:[(0,s.jsx)(i.Text,{fw:500,children:"Review pictures"}),(0,s.jsxs)(y.Menu,{withinPortal:!0,position:"bottom-end",shadow:"sm",children:[(0,s.jsx)(y.Menu.Target,{children:(0,s.jsx)(b.ActionIcon,{variant:"subtle",color:"gray",children:(0,s.jsx)(m.DotsThreeIcon,{size:16})})}),(0,s.jsxs)(y.Menu.Dropdown,{children:[(0,s.jsx)(y.Menu.Item,{leftSection:(0,s.jsx)(x,{size:14}),children:"Download zip"}),(0,s.jsx)(y.Menu.Item,{leftSection:(0,s.jsx)(p.EyeIcon,{size:14}),children:"Preview all"}),(0,s.jsx)(y.Menu.Item,{leftSection:(0,s.jsx)(v.TrashIcon,{size:14}),color:"red",children:"Delete all"})]})]})]})}),(0,s.jsxs)(i.Text,{mt:"sm",c:"dimmed",size:"sm",children:[(0,s.jsx)(i.Text,{span:!0,inherit:!0,c:"var(--mantine-color-anchor)",children:"200+ images uploaded"})," ","since last visit, review them to select which one should be added to your gallery"]}),(0,s.jsx)(o.Card.Section,{mt:"sm",children:(0,s.jsx)(l.Image,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png"})}),(0,s.jsx)(o.Card.Section,{inheritPadding:!0,mt:"sm",pb:"md",children:(0,s.jsx)(w.SimpleGrid,{cols:3,children:S.map(e=>(0,s.jsx)(l.Image,{src:e,radius:"sm"},e))})})]})},code:`
import { ActionIcon, Card, Group, Image, Menu, SimpleGrid, Text } from '@mantine/core';
import { DotsThreeIcon, EyeIcon, FileZipIcon, TrashIcon } from '@phosphor-icons/react';

const images = [
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
];

function Demo() {
  return (
    <Card withBorder shadow="sm">
      <Card.Section withBorder inheritPadding py="xs">
        <Group justify="space-between">
          <Text fw={500}>Review pictures</Text>
          <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
              <ActionIcon variant="subtle" color="gray">
                <DotsThreeIcon size={16} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item leftSection={<FileZipIcon size={14} />}>
                Download zip
              </Menu.Item>
              <Menu.Item leftSection={<EyeIcon size={14} />}>
                Preview all
              </Menu.Item>
              <Menu.Item
                leftSection={<TrashIcon size={14} />}
                color="red"
              >
                Delete all
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card.Section>

      <Text mt="sm" c="dimmed" size="sm">
        <Text span inherit c="var(--mantine-color-anchor)">
          200+ images uploaded
        </Text>{' '}
        since last visit, review them to select which one should be added to your gallery
      </Text>

      <Card.Section mt="sm">
        <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png" />
      </Card.Section>

      <Card.Section inheritPadding mt="sm" pb="md">
        <SimpleGrid cols={3}>
          {images.map((image) => (
            <Image src={image} key={image} radius="sm" />
          ))}
        </SimpleGrid>
      </Card.Section>
    </Card>
  );
}
`,centered:!0,maxWidth:340,dimmed:!0};var D=e.i(232471),M=e.i(848719);let j=[{value:447,label:"Remaining"},{value:76,label:"In progress"}],C={type:"code",code:`
import { Box, Card, Group, RingProgress, Text } from '@mantine/core';

const completed = 1887;
const total = 2334;
const stats = [
  { value: 447, label: 'Remaining' },
  { value: 76, label: 'In progress' },
];

function Demo() {
  const items = stats.map((stat) => (
    <div key={stat.label}>
      <Text>{stat.value}</Text>
      <Text size="xs" c="dimmed">
        {stat.label}
      </Text>
    </div>
  ));

  return (
    <Card padding="sm" withBorder orientation="horizontal">
      <Card.Section inheritPadding px="xs" withBorder>
        <RingProgress
          roundCaps
          thickness={6}
          size={150}
          sections={[{ value: (completed / total) * 100, color: 'blue' }]}
          label={
            <div>
              <Text ta="center" fz="lg">
                {((completed / total) * 100).toFixed(0)}%
              </Text>
              <Text ta="center" fz="xs" c="dimmed">
                Completed
              </Text>
            </div>
          }
        />
      </Card.Section>

      <Card.Section inheritPadding px="md">
        <Text fz="xl">Project tasks</Text>
        <Box mt="xs">
          <Text>1887</Text>
          <Text fz="xs" c="dimmed">
            Completed
          </Text>
        </Box>

        <Group mt="sm">{items}</Group>
      </Card.Section>
    </Card>
  );
}
`,component:function(){let e=j.map(e=>(0,s.jsxs)("div",{children:[(0,s.jsx)(i.Text,{children:e.value}),(0,s.jsx)(i.Text,{size:"xs",c:"dimmed",children:e.label})]},e.label));return(0,s.jsxs)(o.Card,{padding:"sm",withBorder:!0,orientation:"horizontal",children:[(0,s.jsx)(o.Card.Section,{inheritPadding:!0,px:"xs",withBorder:!0,children:(0,s.jsx)(M.RingProgress,{roundCaps:!0,thickness:6,size:150,sections:[{value:1887/2334*100,color:"blue"}],label:(0,s.jsxs)("div",{children:[(0,s.jsxs)(i.Text,{ta:"center",fz:"lg",children:[(1887/2334*100).toFixed(0),"%"]}),(0,s.jsx)(i.Text,{ta:"center",fz:"xs",c:"dimmed",children:"Completed"})]})})}),(0,s.jsxs)(o.Card.Section,{inheritPadding:!0,px:"md",children:[(0,s.jsx)(i.Text,{fz:"xl",children:"Project tasks"}),(0,s.jsxs)(D.Box,{mt:"xs",children:[(0,s.jsx)(i.Text,{children:"1887"}),(0,s.jsx)(i.Text,{fz:"xs",c:"dimmed",children:"Completed"})]}),(0,s.jsx)(n.Group,{mt:"sm",children:e})]})]})},maxWidth:400,centered:!0,dimmed:!0};var A=(0,t.__exportAll)({horizontal:()=>C,link:()=>d,linkSection:()=>u,section:()=>k,usage:()=>c});e.s(["CardDemos",0,A],209996)},648761,e=>{e.v(t=>Promise.all(["static/chunks/0n..hexfw6r85.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/18bztvpdorkth.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);