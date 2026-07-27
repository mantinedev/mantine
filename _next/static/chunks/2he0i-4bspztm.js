(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:"Module"}),r}])},257177,e=>{"use strict";var t=e.i(433512),n=e.i(481178),r=e.i(317477),i=e.i(44091),o=e.i(391466),a=e.i(956449),l=e.i(232471),s={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},c=e.i(391398);let d=(0,n.createVarsResolver)((e,{radius:n,color:i,gradient:o,variant:a,size:l,autoContrast:s,circle:c})=>{let d=e.variantColorResolver({color:i||e.primaryColor,theme:e,gradient:o,variant:a||"filled",autoContrast:s});return{root:{"--badge-height":(0,t.getSize)(l,"badge-height"),"--badge-padding-x":(0,t.getSize)(l,"badge-padding-x"),"--badge-fz":(0,t.getSize)(l,"badge-fz"),"--badge-radius":c||void 0===n?void 0:(0,t.getRadius)(n),"--badge-bg":i||a?d.background:void 0,"--badge-color":i||a?d.color:void 0,"--badge-bd":i||a?d.border:void 0,"--badge-dot-color":"dot"===a?(0,r.getThemeColor)(i,e):void 0}}}),u=(0,a.polymorphicFactory)(e=>{let t=(0,i.useProps)("Badge",null,e),{classNames:n,className:r,style:a,styles:u,unstyled:h,vars:p,radius:m,color:f,gradient:g,leftSection:v,rightSection:x,children:b,variant:y,fullWidth:w,autoContrast:T,circle:S,mod:j,attributes:A,...C}=t,D=(0,o.useStyles)({name:"Badge",props:t,classes:s,className:r,style:a,classNames:n,styles:u,unstyled:h,attributes:A,vars:p,varsResolver:d});return(0,c.jsxs)(l.Box,{variant:y,mod:[{block:w,circle:S,"with-right-section":!!x,"with-left-section":!!v},j],...D("root",{variant:y}),...C,children:[v&&(0,c.jsx)("span",{...D("section"),"data-position":"left",children:v}),(0,c.jsx)("span",{...D("label"),children:b}),x&&(0,c.jsx)("span",{...D("section"),"data-position":"right",children:x})]})});u.classes=s,u.varsResolver=d,u.displayName="@mantine/core/Badge",e.s(["Badge",0,u],257177)},960831,e=>{"use strict";e.s(["inputControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}],"inputOnlyControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],"inputWrapperOnlyControls",0,[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}]])},123895,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20a108,108,0,0,0,0,216c22.27,0,45.69-6.73,62.64-18a12,12,0,1,0-13.29-20c-13,8.63-31.89,14-49.35,14a84,84,0,1,1,84-84c0,9.29-1.67,17.08-4.69,21.95-2.64,4.24-6,6.05-11.31,6.05s-8.67-1.81-11.31-6.05c-3-4.87-4.69-12.66-4.69-21.95V88a12,12,0,0,0-23.49-3.46,52,52,0,1,0,8.86,79.57C172.3,174.3,182.81,180,196,180c24.67,0,40-19.92,40-52A108.12,108.12,0,0,0,128,20Zm0,136a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232,128c0,.51,0,1,0,1.52-.34,14.26-5.63,30.48-28,30.48-23.14,0-28-17.4-28-32V88a8,8,0,0,0-8.53-8A8.17,8.17,0,0,0,160,88.27v4a48,48,0,1,0,6.73,64.05,40.19,40.19,0,0,0,3.38,5C175.48,168,185.71,176,204,176a54.81,54.81,0,0,0,9.22-.75,4,4,0,0,1,4.09,6A104.05,104.05,0,0,1,125.91,232C71.13,230.9,26.2,186.86,24.08,132.11A104,104,0,1,1,232,128ZM96,128a32,32,0,1,0,32-32A32,32,0,0,0,96,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26a102,102,0,0,0,0,204c21.13,0,43.31-6.35,59.32-17a6,6,0,0,0-6.65-10c-13.9,9.25-34.09,15-52.67,15a90,90,0,1,1,90-90c0,29.58-13.78,34-22,34s-22-4.42-22-34V88a6,6,0,0,0-12,0v9a46,46,0,1,0,4.34,56.32C171.76,166.6,182,174,196,174c21.29,0,34-17.2,34-46A102.12,102.12,0,0,0,128,26Zm0,136a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28a100,100,0,0,0,0,200c20.76,0,42.52-6.23,58.21-16.66a4,4,0,1,0-4.43-6.67C167.35,214.27,147.24,220,128,220a92,92,0,1,1,92-92c0,31.32-15,36-24,36s-24-4.68-24-36V88a4,4,0,0,0-8,0v14.75a44,44,0,1,0,2.82,45.94C171.46,163.58,181.66,172,196,172c20,0,32-16.45,32-44A100.11,100.11,0,0,0,128,28Zm0,136a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),i=t.forwardRef((e,i)=>t.createElement(n.default,{ref:i,...e,weights:r}));i.displayName="AtIcon",e.s(["AtIcon",0,i],123895)},141806,e=>{"use strict";var t=e.i(433512),n=e.i(481178),r=e.i(44091),i=e.i(391466),o=e.i(956449),a=e.i(232471),l={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"},s=e.i(275519),c=e.i(191788),d=e.i(391398);let u=(0,c.createContext)({withinGroup:!1}),h=(0,n.createVarsResolver)((e,{spacing:n})=>({group:{"--ag-spacing":(0,t.getSpacing)(n)}})),p=(0,s.factory)(e=>{let t=(0,r.useProps)("AvatarGroup",null,e),{classNames:n,className:o,style:s,styles:c,unstyled:p,vars:m,spacing:f,attributes:g,...v}=t,x=(0,i.useStyles)({name:"AvatarGroup",classes:l,props:t,className:o,style:s,classNames:n,styles:c,unstyled:p,attributes:g,vars:m,varsResolver:h,rootSelector:"group"});return(0,d.jsx)(u,{value:{withinGroup:!0},children:(0,d.jsx)(a.Box,{...x("group"),...v})})});function m(e){return(0,d.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}p.classes=l,p.varsResolver=h,p.displayName="@mantine/core/AvatarGroup";let f=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],g=(0,n.createVarsResolver)((e,{size:n,radius:r,variant:i,gradient:o,color:a,autoContrast:l,name:s,allowedInitialsColors:c})=>{let d="initials"===a&&"string"==typeof s?function(e,t=f){return t[Math.abs(function(e){let t=0;for(let n=0;n<e.length;n+=1)t=(t<<5)-t+e.charCodeAt(n)|0;return t}(e))%t.length]}(s,c):a,u=e.variantColorResolver({color:d||"gray",theme:e,gradient:o,variant:i||"light",autoContrast:l});return{root:{"--avatar-size":(0,t.getSize)(n,"avatar-size"),"--avatar-radius":void 0===r?void 0:(0,t.getRadius)(r),"--avatar-bg":d||i?u.background:void 0,"--avatar-color":d||i?u.color:void 0,"--avatar-bd":d||i?u.border:void 0}}}),v=(0,o.polymorphicFactory)(e=>{let t=(0,r.useProps)("Avatar",null,e),{classNames:n,className:o,style:s,styles:h,unstyled:p,vars:f,src:v,alt:x,radius:b,color:y,gradient:w,imageProps:T,children:S,autoContrast:j,mod:A,name:C,allowedInitialsColors:D,attributes:P,...M}=t,E=(0,c.use)(u),[z,I]=(0,c.useState)(!v),B=(0,i.useStyles)({name:"Avatar",props:t,classes:l,className:o,style:s,classNames:n,styles:h,unstyled:p,attributes:P,vars:f,varsResolver:g});return(0,c.useEffect)(()=>I(!v),[v]),(0,d.jsx)(a.Box,{...B("root"),mod:[{"within-group":E.withinGroup},A],...M,children:z||!v?(0,d.jsx)("span",{...B("placeholder"),title:x,children:S||"string"==typeof C&&function(e,t=2){let n=e.split(" ");return 1===n.length?e.slice(0,t).toUpperCase():n.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(C)||(0,d.jsx)(m,{})}):(0,d.jsx)("img",{...T,...B("image"),src:v,alt:x,onError:e=>{I(!0),T?.onError?.(e)}})})});v.classes=l,v.varsResolver=g,v.displayName="@mantine/core/Avatar",v.Group=p,e.s(["Avatar",0,v],141806)},330573,e=>{"use strict";var t=e.i(44091),n=e.i(391466),r=e.i(956449),i=e.i(232471),o={root:"m_4451eb3a"},a=e.i(391398);let l=(0,r.polymorphicFactory)(e=>{let r=(0,t.useProps)("Center",null,e),{classNames:l,className:s,style:c,styles:d,unstyled:u,vars:h,inline:p,mod:m,attributes:f,...g}=r,v=(0,n.useStyles)({name:"Center",props:r,classes:o,className:s,style:c,classNames:l,styles:d,unstyled:u,attributes:f,vars:h});return(0,a.jsx)(i.Box,{mod:[{inline:p},m],...v("root"),...g})});l.classes=o,l.displayName="@mantine/core/Center",e.s(["Center",0,l],330573)},158178,e=>{"use strict";var t=e.i(100861),n=e.i(44091),r=e.i(275519),i=e.i(586488),o=e.i(191788),a=e.i(332977),l=e.i(391398);let s=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak","wordSpacing","scrollbarGutter"],c={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0",display:"block"};function d(e){Object.keys(c).forEach(t=>{e.style.setProperty(t,c[t],"important")})}let u=null;function h({maxRows:e,minRows:t,onChange:n,ref:r,...i}){let c=void 0!==i.value,p=(0,o.useRef)(null),m=(0,a.useMergedRef)(p,r),f=(0,o.useRef)(0),g=(0,o.useRef)(0),v=()=>{let n=p.current;if(!n)return;let r=function(e){let t=window.getComputedStyle(e);if(null===t)return null;let n={};for(let e of s)n[e]=t[e];return""===n.boxSizing?null:{sizingStyle:n,paddingSize:parseFloat(n.paddingBottom)+parseFloat(n.paddingTop),borderSize:parseFloat(n.borderBottomWidth)+parseFloat(n.borderTopWidth)}}(n);if(!r)return;let[i]=function(e,t,n=1,r=1/0){u||((u=document.createElement("textarea")).setAttribute("tabindex","-1"),u.setAttribute("aria-hidden","true"),u.setAttribute("aria-label","autosize measurement"),d(u)),null===u.parentNode&&document.body.appendChild(u);let{paddingSize:i,borderSize:o,sizingStyle:a}=e,{boxSizing:l}=a;Object.keys(a).forEach(e=>{u.style[e]=a[e]}),d(u),u.value=t;let s="border-box"===l?u.scrollHeight+o:u.scrollHeight-i;u.value=t,s="border-box"===l?u.scrollHeight+o:u.scrollHeight-i,u.value="x";let c=u.scrollHeight-i,h=c*n;"border-box"===l&&(h=h+i+o),s=Math.max(h,s);let p=c*r;return"border-box"===l&&(p=p+i+o),[s=Math.min(p,s),c]}(r,n.value||n.placeholder||"x",t,e);f.current!==i&&(f.current=i,n.style.setProperty("height",`${i}px`,"important"))};return(0,o.useLayoutEffect)(v),(0,o.useEffect)(()=>{let e=()=>v();return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,o.useEffect)(()=>{let e=p.current;if(!e||"u"<typeof ResizeObserver)return;g.current=e.offsetWidth;let t=new ResizeObserver(()=>{p.current&&p.current.offsetWidth!==g.current&&(g.current=p.current.offsetWidth,v())});return t.observe(e),()=>t.disconnect()},[]),(0,o.useEffect)(()=>{let e=()=>v();return document.fonts.addEventListener("loadingdone",e),()=>document.fonts.removeEventListener("loadingdone",e)},[]),(0,o.useEffect)(()=>{let e=e=>{if(p.current?.form===e.target&&!c){let e=p.current.value;requestAnimationFrame(()=>{p.current&&e!==p.current.value&&v()})}};return document.body.addEventListener("reset",e),()=>document.body.removeEventListener("reset",e)},[c]),(0,l.jsx)("textarea",{rows:t,...i,onChange:e=>{c||v(),n?.(e)},ref:m})}let p=(0,r.factory)(e=>{let{autosize:r,maxRows:o,minRows:a,__staticSelector:s,resize:c,bottomSection:d,bottomSectionProps:u,...p}=(0,n.useProps)(["Input","InputWrapper","Textarea"],null,e),m=r&&"test"!==(0,t.getEnv)();return(0,l.jsx)(i.InputBase,{component:m?h:"textarea",...p,__staticSelector:s||"Textarea",__bottomSection:d,__bottomSectionProps:u,multiline:!0,"data-no-overflow":r&&void 0===o||void 0,__vars:{"--input-resize":c},...m?{maxRows:o,minRows:a}:{}})});p.classes=i.InputBase.classes,p.displayName="@mantine/core/Textarea",e.s(["Textarea",0,p],158178)},122057,419569,e=>{"use strict";var t=e.i(433512),n=e.i(481178),r=e.i(44091),i=e.i(391466),o=e.i(275519),a=e.i(232471),l=e.i(802046),s=e.i(191788);let c=(0,s.createContext)(null);e.s(["PillsInputContext",0,c],419569);var d={root:"m_7cda1cd6","root--default":"m_44da308b","root--contrast":"m_e3a01f8",label:"m_1e0e6180",remove:"m_ae386778",group:"m_1dcfd90b"},u=e.i(391398);let h=(0,s.createContext)(null),p=(0,n.createVarsResolver)((e,{gap:n},{size:r})=>({group:{"--pg-gap":void 0!==n?(0,t.getSize)(n):(0,t.getSize)(r,"pg-gap")}})),m=(0,o.factory)(e=>{let t=(0,r.useProps)("PillGroup",null,e),{classNames:n,className:o,style:l,styles:m,unstyled:f,vars:g,size:v,disabled:x,attributes:b,...y}=t,w=(0,s.use)(c)?.size||v||void 0,T=(0,i.useStyles)({name:"PillGroup",classes:d,props:t,className:o,style:l,classNames:n,styles:m,unstyled:f,attributes:b,vars:g,varsResolver:p,stylesCtx:{size:w},rootSelector:"group"});return(0,u.jsx)(h,{value:{size:w,disabled:x},children:(0,u.jsx)(a.Box,{size:w,...T("group"),...y})})});m.classes=d,m.varsResolver=p,m.displayName="@mantine/core/PillGroup";let f={variant:"default"},g=(0,n.createVarsResolver)((e,{radius:n},{size:r})=>({root:{"--pill-fz":(0,t.getSize)(r,"pill-fz"),"--pill-height":(0,t.getSize)(r,"pill-height"),"--pill-radius":void 0===n?void 0:(0,t.getRadius)(n)}})),v=(0,o.factory)(e=>{let t=(0,r.useProps)("Pill",f,e),{classNames:n,className:o,style:p,styles:m,unstyled:v,vars:x,variant:b,children:y,withRemoveButton:w,onRemove:T,removeButtonProps:S,radius:j,size:A,disabled:C,mod:D,attributes:P,...M}=t,E=(0,s.use)(h),z=(0,s.use)(c),I=A||E?.size||void 0,B=z?.variant==="filled"?"contrast":b||"default",V=(0,i.useStyles)({name:"Pill",classes:d,props:t,className:o,style:p,classNames:n,styles:m,unstyled:v,attributes:P,vars:x,varsResolver:g,stylesCtx:{size:I}});return(0,u.jsxs)(a.Box,{component:"span",variant:B,size:I,...V("root",{variant:B}),mod:[{"with-remove":w&&!C,disabled:C||E?.disabled},D],...M,children:[(0,u.jsx)("span",{...V("label"),children:y}),w&&(0,u.jsx)(l.CloseButton,{variant:"transparent",radius:j,tabIndex:-1,"aria-hidden":!0,unstyled:v,...S,...V("remove",{className:S?.className,style:S?.style}),onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),S?.onMouseDown?.(e)},onClick:e=>{e.stopPropagation(),T?.(),S?.onClick?.(e)}})]})});v.classes=d,v.varsResolver=g,v.displayName="@mantine/core/Pill",v.Group=m,e.s(["Pill",0,v],122057)},217633,e=>{"use strict";var t=e.i(44091),n=e.i(275519),r=e.i(586488),i=e.i(419569),o=e.i(391466),a=e.i(232471),l=e.i(561946),s={field:"m_45c4369d"},c=e.i(191788),d=e.i(332977),u=e.i(391398);let h={type:"visible"},p=(0,n.factory)(e=>{let n=(0,t.useProps)("PillsInputField",h,e),{classNames:r,className:p,style:m,styles:f,unstyled:g,vars:v,type:x,disabled:b,id:y,pointer:w,mod:T,attributes:S,ref:j,...A}=n,C=(0,c.use)(i.PillsInputContext),D=(0,c.use)(l.InputWrapperContext),P=(0,o.useStyles)({name:"PillsInputField",classes:s,props:n,className:p,style:m,classNames:r,styles:f,unstyled:g,attributes:S,rootSelector:"field"}),M=b||C?.disabled;return(0,u.jsx)(a.Box,{component:"input",ref:(0,d.useMergedRef)(j,C?.fieldRef),"data-type":x,disabled:M,mod:[{disabled:M,pointer:w},T],...P("field"),...A,id:D?.inputId||y,"aria-invalid":C?.hasError,"aria-describedby":D?.describedBy,type:"text",onMouseDown:e=>!w&&e.stopPropagation()})});p.classes=s,p.displayName="@mantine/core/PillsInputField";let m={size:"sm"},f=(0,n.factory)(e=>{let{children:n,onMouseDown:o,onClick:a,size:l,disabled:s,__staticSelector:d,error:h,variant:p,...f}=(0,t.useProps)(["Input","InputWrapper","PillsInput"],m,e),g=(0,c.useRef)(null);return(0,u.jsx)(i.PillsInputContext,{value:{fieldRef:g,size:l,disabled:s,hasError:!!h,variant:p},children:(0,u.jsx)(r.InputBase,{size:l,error:h,variant:p,component:"div","data-no-overflow":!0,onMouseDown:e=>{e.preventDefault(),o?.(e),g.current?.focus()},onClick:e=>{e.preventDefault(),e.currentTarget.closest("fieldset")?.disabled||(g.current?.focus(),a?.(e))},...f,multiline:!0,disabled:s,__staticSelector:d||"PillsInput",withAria:!1,children:n})})});f.displayName="@mantine/core/PillsInput",f.classes=r.InputBase.classes,f.Field=p,e.s(["PillsInput",0,f],217633)},414124,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M108,60A16,16,0,1,1,92,44,16,16,0,0,1,108,60Zm56,16a16,16,0,1,0-16-16A16,16,0,0,0,164,76ZM92,112a16,16,0,1,0,16,16A16,16,0,0,0,92,112Zm72,0a16,16,0,1,0,16,16A16,16,0,0,0,164,112ZM92,180a16,16,0,1,0,16,16A16,16,0,0,0,92,180Zm72,0a16,16,0,1,0,16,16A16,16,0,0,0,164,180Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32V224a16,16,0,0,1-16,16H64a16,16,0,0,1-16-16V32A16,16,0,0,1,64,16H192A16,16,0,0,1,208,32Z",opacity:"0.2"}),t.createElement("path",{d:"M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M192,16H64A16,16,0,0,0,48,32V224a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V32A16,16,0,0,0,192,16ZM100,200a12,12,0,1,1,12-12A12,12,0,0,1,100,200Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,100,140Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,100,80Zm56,120a12,12,0,1,1,12-12A12,12,0,0,1,156,200Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,156,140Zm0-60a12,12,0,1,1,12-12A12,12,0,0,1,156,80Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M102,60A10,10,0,1,1,92,50,10,10,0,0,1,102,60Zm62,10a10,10,0,1,0-10-10A10,10,0,0,0,164,70ZM92,118a10,10,0,1,0,10,10A10,10,0,0,0,92,118Zm72,0a10,10,0,1,0,10,10A10,10,0,0,0,164,118ZM92,186a10,10,0,1,0,10,10A10,10,0,0,0,92,186Zm72,0a10,10,0,1,0,10,10A10,10,0,0,0,164,186Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M104,60A12,12,0,1,1,92,48,12,12,0,0,1,104,60Zm60,12a12,12,0,1,0-12-12A12,12,0,0,0,164,72ZM92,116a12,12,0,1,0,12,12A12,12,0,0,0,92,116Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,116ZM92,184a12,12,0,1,0,12,12A12,12,0,0,0,92,184Zm72,0a12,12,0,1,0,12,12A12,12,0,0,0,164,184Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M100,60a8,8,0,1,1-8-8A8,8,0,0,1,100,60Zm64,8a8,8,0,1,0-8-8A8,8,0,0,0,164,68ZM92,120a8,8,0,1,0,8,8A8,8,0,0,0,92,120Zm72,0a8,8,0,1,0,8,8A8,8,0,0,0,164,120ZM92,188a8,8,0,1,0,8,8A8,8,0,0,0,92,188Zm72,0a8,8,0,1,0,8,8A8,8,0,0,0,164,188Z"}))]]),i=t.forwardRef((e,i)=>t.createElement(n.default,{ref:i,...e,weights:r}));i.displayName="DotsSixVerticalIcon",e.s(["DotsSixVerticalIcon",0,i],414124)},420759,e=>{"use strict";var t=e.i(779177),n=e.i(391398);e.s(["RadioIcon",0,function({size:e,style:r,...i}){return(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 5 5",style:{width:(0,t.rem)(e),height:(0,t.rem)(e),...r},"aria-hidden":!0,...i,children:(0,n.jsx)("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"currentColor"})})}])},823439,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56Z",opacity:"0.2"}),t.createElement("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,50H174V40a22,22,0,0,0-22-22H104A22,22,0,0,0,82,40V50H40a6,6,0,0,0,0,12H50V208a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V62h10a6,6,0,0,0,0-12ZM94,40a10,10,0,0,1,10-10h48a10,10,0,0,1,10,10V50H94ZM194,208a2,2,0,0,1-2,2H64a2,2,0,0,1-2-2V62H194ZM110,104v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Zm48,0v64a6,6,0,0,1-12,0V104a6,6,0,0,1,12,0Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM96,40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96Zm96,168H64V64H192ZM112,104v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,52H172V40a20,20,0,0,0-20-20H104A20,20,0,0,0,84,40V52H40a4,4,0,0,0,0,8H52V208a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V60h12a4,4,0,0,0,0-8ZM92,40a12,12,0,0,1,12-12h48a12,12,0,0,1,12,12V52H92ZM196,208a4,4,0,0,1-4,4H64a4,4,0,0,1-4-4V60H196ZM108,104v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm48,0v64a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Z"}))]]),i=t.forwardRef((e,i)=>t.createElement(n.default,{ref:i,...e,weights:r}));i.displayName="TrashIcon",e.s(["TrashIcon",0,i],823439)},134959,e=>{"use strict";var t=e.i(191788),n=e.i(815954);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){var r,i,o;r=e,i=t,o=n[t],(i=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(i))in r?Object.defineProperty(r,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[i]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}e.s(["Shape",0,function(e){var r,o,a=e.option,l=e.DefaultShape,s=e.shapeProps,c=e.activeClassName,d=e.inActiveClassName,u=function(e){if("index"in e){var t=e.index;return"number"==typeof t||"string"==typeof t?t:void 0}}(s);return o=(0,t.isValidElement)(a)?(0,t.cloneElement)(a,(r=(0,t.isValidElement)(a)?a.props:a,i(i({},s),r))):a===l?t.createElement(l,s):"function"==typeof a?a(s,u):"object"==typeof a?t.createElement(l,i(i({},s),a)):t.createElement(l,s),"isActive"in s&&!0===s.isActive?t.createElement(n.Layer,{className:void 0===c?"recharts-active-shape":c},o):t.createElement(n.Layer,{className:void 0===d?"recharts-shape":d},o)}])},777079,(e,t,n)=>{"use strict";var r=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),f=Symbol.for("react.view_transition"),g=Symbol.for("react.client.reference");function v(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case o:case l:case a:case u:case h:case f:return e;default:switch(e=e&&e.$$typeof){case c:case d:case m:case p:case s:return e;default:return t}}case i:return t}}}n.ContextConsumer=s,n.ContextProvider=c,n.Element=r,n.ForwardRef=d,n.Fragment=o,n.Lazy=m,n.Memo=p,n.Portal=i,n.Profiler=l,n.StrictMode=a,n.Suspense=u,n.SuspenseList=h,n.isContextConsumer=function(e){return v(e)===s},n.isContextProvider=function(e){return v(e)===c},n.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===r},n.isForwardRef=function(e){return v(e)===d},n.isFragment=function(e){return v(e)===o},n.isLazy=function(e){return v(e)===m},n.isMemo=function(e){return v(e)===p},n.isPortal=function(e){return v(e)===i},n.isProfiler=function(e){return v(e)===l},n.isStrictMode=function(e){return v(e)===a},n.isSuspense=function(e){return v(e)===u},n.isSuspenseList=function(e){return v(e)===h},n.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===o||e===l||e===a||e===u||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===p||e.$$typeof===c||e.$$typeof===s||e.$$typeof===d||e.$$typeof===g||void 0!==e.getModuleId)||!1},n.typeOf=v},767875,(e,t,n)=>{"use strict";t.exports=e.r(777079)},888494,e=>{"use strict";var t=e.i(191788),n=e.i(395598),r=e.i(543372),i=e.i(662688),o=e=>e.chartData.chartData,a=e=>{var t=e.chartData;return{startIndex:t.dataStartIndex,endIndex:t.dataEndIndex}};e.s(["ChartDataContextProvider",0,e=>{var o=e.chartData,a=(0,r.useAppDispatch)(),l=(0,i.useIsPanorama)();return(0,t.useEffect)(()=>l?()=>{}:(a((0,n.setChartData)(o)),()=>{a((0,n.setChartData)(void 0))}),[o,a,l]),null},"SetComputedData",0,e=>{var i=e.computedData,o=(0,r.useAppDispatch)();return(0,t.useEffect)(()=>(o((0,n.setComputedData)(i)),()=>{o((0,n.setChartData)(void 0))}),[i,o]),null},"useChartData",0,()=>(0,r.useAppSelector)(o),"useDataIndex",0,()=>(0,r.useAppSelector)(a)])},602227,e=>{"use strict";var t=e.i(57216);function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach(function(t){var n,i,o;n=e,i=t,o=r[t],(i=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(i))in n?Object.defineProperty(n,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[i]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},{cacheSize:2e3,enableCache:!0}),i=new class{constructor(e){!function(e,t,n){var r;(t="symbol"==typeof(r=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?r:r+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(this,"cache",new Map),this.maxSize=e}get(e){var t=this.cache.get(e);return void 0!==t&&(this.cache.delete(e),this.cache.set(e,t)),t}set(e,t){if(this.cache.has(e))this.cache.delete(e);else if(this.cache.size>=this.maxSize){var n=this.cache.keys().next().value;null!=n&&this.cache.delete(n)}this.cache.set(e,t)}clear(){this.cache.clear()}size(){return this.cache.size}}(r.cacheSize),o={position:"absolute",top:"-20000px",left:0,padding:0,margin:0,border:"none",whiteSpace:"pre"},a="recharts_measurement_span",l=(e,t)=>{try{var n=document.getElementById(a);n||((n=document.createElement("span")).setAttribute("id",a),n.setAttribute("aria-hidden","true"),document.body.appendChild(n)),Object.assign(n.style,o,t),n.textContent="".concat(e);var r=n.getBoundingClientRect();return{width:r.width,height:r.height}}catch(e){return{width:0,height:0}}};e.s(["getStringSize",0,function(e){var n,o,a,s,c,d,u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null==e||t.Global.isSsr)return{width:0,height:0};if(!r.enableCache)return l(e,u);var h=(n=u.fontSize||"",o=u.fontFamily||"",a=u.fontWeight||"",s=u.fontStyle||"",c=u.letterSpacing||"",d=u.textTransform||"","".concat(e,"|").concat(n,"|").concat(o,"|").concat(a,"|").concat(s,"|").concat(c,"|").concat(d)),p=i.get(h);if(p)return p;var m=l(e,u);return i.set(h,m),m}],602227)},61320,e=>{"use strict";var t,n,r,i=e.i(191788),o=e.i(56206),a=e.i(270627),l=e.i(57216),s=e.i(602227);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,l=[],s=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,i=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=({}).toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var u=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([*/])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,h=/(-?\d+(?:\.\d+)?[a-zA-Z%]*)([+-])(-?\d+(?:\.\d+)?[a-zA-Z%]*)/,p=/^(px|cm|vh|vw|em|rem|%|mm|in|pt|pc|ex|ch|vmin|vmax|Q)$/,m=/(-?\d+(?:\.\d+)?)([a-zA-Z%]+)?/,f={cm:96/2.54,mm:96/25.4,pt:96/72,pc:16,in:96,Q:96/101.6,px:1},g=["cm","mm","pt","pc","in","Q","px"];class v{static parse(e){var t,n=c(null!=(t=m.exec(e))?t:[],3),r=n[1],i=n[2];return null==r?v.NaN:new v(parseFloat(r),null!=i?i:"")}constructor(e,t){this.num=e,this.unit=t,this.num=e,this.unit=t,(0,a.isNan)(e)&&(this.unit=""),""===t||p.test(t)||(this.num=NaN,this.unit=""),function(e){return g.includes(e)}(t)&&(this.num=function(e,t){return e*f[t]}(e,t),this.unit="px")}add(e){return this.unit!==e.unit?new v(NaN,""):new v(this.num+e.num,this.unit)}subtract(e){return this.unit!==e.unit?new v(NaN,""):new v(this.num-e.num,this.unit)}multiply(e){return""!==this.unit&&""!==e.unit&&this.unit!==e.unit?new v(NaN,""):new v(this.num*e.num,this.unit||e.unit)}divide(e){return""!==this.unit&&""!==e.unit&&this.unit!==e.unit?new v(NaN,""):new v(this.num/e.num,this.unit||e.unit)}toString(){return"".concat(this.num).concat(this.unit)}isNaN(){return(0,a.isNan)(this.num)}}function x(e){if(null==e||e.includes("NaN"))return"NaN";for(var t=e;t.includes("*")||t.includes("/");){var n,r=c(null!=(n=u.exec(t))?n:[],4),i=r[1],o=r[2],a=r[3],l=v.parse(null!=i?i:""),s=v.parse(null!=a?a:""),d="*"===o?l.multiply(s):l.divide(s);if(d.isNaN())return"NaN";t=t.replace(u,d.toString())}for(;t.includes("+")||/.-\d+(?:\.\d+)?/.test(t);){var p,m=c(null!=(p=h.exec(t))?p:[],4),f=m[1],g=m[2],x=m[3],b=v.parse(null!=f?f:""),y=v.parse(null!=x?x:""),w="+"===g?b.add(y):b.subtract(y);if(w.isNaN())return"NaN";t=t.replace(h,w.toString())}return t}n="NaN",r=new v(NaN,""),(n="symbol"==typeof(t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(n,"string"))?t:t+"")in v?Object.defineProperty(v,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):v[n]=r;var b=/\(([^()]*)\)/;function y(e){var t=function(e){try{var t;return t=e.replace(/\s+/g,""),t=function(e){for(var t,n=e;null!=(t=b.exec(n));){var r=c(t,2)[1];n=n.replace(b,x(r))}return n}(t),t=x(t)}catch(e){return"NaN"}}(e.slice(5,-1));return"NaN"===t?"":t}var w=e.i(62037),T=e.i(297974),S=e.i(500678),j=["x","y","lineHeight","capHeight","fill","scaleToFit","textAnchor","verticalAnchor"],A=["dx","dy","angle","className","breakAll"];function C(){return(C=Object.assign.bind()).apply(null,arguments)}function D(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],-1===t.indexOf(n)&&({}).propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function P(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,l=[],s=!0,c=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){c=!0,i=e}finally{try{if(!s&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw i}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=({}).toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var E=/[ \f\n\r\t\v\u2028\u2029]+/,z=e=>{var t=e.children,n=e.breakAll,r=e.style;try{var i=[];(0,a.isNullish)(t)||(i=n?t.toString().split(""):t.toString().split(E));var o=i.map(e=>({word:e,width:(0,s.getStringSize)(e,r).width})),l=n?0:(0,s.getStringSize)(" ",r).width;return{wordsWithComputedWidth:o,spaceWidth:l}}catch(e){return null}},I=(e,t,n,r)=>e.reduce((e,i)=>{var o=i.word,a=i.width,l=e[e.length-1];return l&&null!=a&&(null==t||r||l.width+a+n<Number(t))?(l.words.push(o),l.width+=a+n):e.push({words:[o],width:a}),e},[]),B=e=>e.reduce((e,t)=>e.width>t.width?e:t),V=(e,t,n,r,i,o,a,l)=>{var s=z({breakAll:n,style:r,children:e.slice(0,t)+"…"});if(!s)return[!1,[]];var c=I(s.wordsWithComputedWidth,o,a,l);return[c.length>i||B(c).width>Number(o),c]},k=e=>[{words:(0,a.isNullish)(e)?[]:e.toString().split(E),width:void 0}],H="#808080",L={angle:0,breakAll:!1,capHeight:"0.71em",fill:H,lineHeight:"1em",scaleToFit:!1,textAnchor:"start",verticalAnchor:"end",x:0,y:0},O=(0,i.forwardRef)((e,t)=>{var n,r=(0,T.resolveDefaultProps)(e,L),s=r.x,c=r.y,d=r.lineHeight,u=r.capHeight,h=r.fill,p=r.scaleToFit,m=r.textAnchor,f=r.verticalAnchor,g=D(r,j),v=(0,i.useMemo)(()=>(e=>{var t=e.width,n=e.scaleToFit,r=e.children,i=e.style,o=e.breakAll,s=e.maxLines;if((t||n)&&!l.Global.isSsr){var c=z({breakAll:o,children:r,style:i});if(!c)return k(r);var d=c.wordsWithComputedWidth,u=c.spaceWidth;return((e,t,n,r,i)=>{var o,l=e.maxLines,s=e.children,c=e.style,d=e.breakAll,u=(0,a.isNumber)(l),h=String(s),p=I(t,r,n,i);if(!u||i||!(p.length>l||B(p).width>Number(r)))return p;for(var m=0,f=h.length-1,g=0;m<=f&&g<=h.length-1;){var v=Math.floor((m+f)/2),x=P(V(h,v-1,d,c,l,r,n,i),2),b=x[0],y=x[1],w=P(V(h,v,d,c,l,r,n,i),1)[0];if(b||w||(m=v+1),b&&w&&(f=v-1),!b&&w){o=y;break}g++}return o||p})({breakAll:o,children:r,maxLines:s,style:i},d,u,t,!!n)}return k(r)})({breakAll:g.breakAll,children:g.children,maxLines:g.maxLines,scaleToFit:p,style:g.style,width:g.width}),[g.breakAll,g.children,g.maxLines,p,g.style,g.width]),x=g.dx,b=g.dy,M=g.angle,E=g.className,O=g.breakAll,_=D(g,A);if(!(0,a.isNumOrStr)(s)||!(0,a.isNumOrStr)(c)||0===v.length)return null;var Z=Number(s)+((0,a.isNumber)(x)?x:0),R=Number(c)+((0,a.isNumber)(b)?b:0);if(!(0,S.isWellBehavedNumber)(Z)||!(0,S.isWellBehavedNumber)(R))return null;switch(f){case"start":n=y("calc(".concat(u,")"));break;case"middle":n=y("calc(".concat((v.length-1)/2," * -").concat(d," + (").concat(u," / 2))"));break;default:n=y("calc(".concat(v.length-1," * -").concat(d,")"))}var F=[],N=v[0];if(p&&null!=N){var $=N.width,W=g.width;F.push("scale(".concat((0,a.isNumber)(W)&&(0,a.isNumber)($)?W/$:1,")"))}return M&&F.push("rotate(".concat(M,", ").concat(Z,", ").concat(R,")")),F.length&&(_.transform=F.join(" ")),i.createElement("text",C({},(0,w.svgPropertiesAndEvents)(_),{ref:t,x:Z,y:R,className:(0,o.clsx)("recharts-text",E),textAnchor:m,fill:h.includes("url")?H:h}),v.map((e,t)=>{var r=e.words.join(O?"":" ");return i.createElement("tspan",{x:Z,dy:0===t?n:d,key:"".concat(r,"-").concat(t)},r)}))});O.displayName="Text",e.s(["Text",0,O,"isRenderableText",0,function(e){return(0,a.isNullish)(e)||"string"==typeof e||"number"==typeof e||"boolean"==typeof e},"isValidTextAnchor",0,function(e){return"start"===e||"middle"===e||"end"===e||"inherit"===e}],61320)},836094,436323,e=>{"use strict";var t=e.i(191788),n=e.i(662688),r=e.i(901841),i=e.i(543372),o=e.i(245073);e.s(["SetLegendPayload",0,function(e){var r=e.legendPayload,a=(0,i.useAppDispatch)(),l=(0,n.useIsPanorama)(),s=(0,t.useRef)(null);return(0,t.useLayoutEffect)(()=>{l||(null===s.current?a((0,o.addLegendPayload)(r)):s.current!==r&&a((0,o.replaceLegendPayload)({prev:s.current,next:r})),s.current=r)},[a,l,r]),(0,t.useLayoutEffect)(()=>()=>{s.current&&(a((0,o.removeLegendPayload)(s.current)),s.current=null)},[a]),null},"SetPolarLegendPayload",0,function(e){var n=e.legendPayload,a=(0,i.useAppDispatch)(),l=(0,i.useAppSelector)(r.selectChartLayout),s=(0,t.useRef)(null);return(0,t.useLayoutEffect)(()=>{("centric"===l||"radial"===l)&&(null===s.current?a((0,o.addLegendPayload)(n)):s.current!==n&&a((0,o.replaceLegendPayload)({prev:s.current,next:n})),s.current=n)},[a,l,n]),(0,t.useLayoutEffect)(()=>()=>{s.current&&(a((0,o.removeLegendPayload)(s.current)),s.current=null)},[a]),null}],836094);var a=e.i(120271),l=(0,t.memo)(e=>{var n=(0,i.useAppDispatch)(),r=(0,t.useRef)(null);return(0,t.useLayoutEffect)(()=>{null===r.current?n((0,a.addCartesianGraphicalItem)(e)):r.current!==e&&n((0,a.replaceCartesianGraphicalItem)({prev:r.current,next:e})),r.current=e},[n,e]),(0,t.useLayoutEffect)(()=>()=>{r.current&&(n((0,a.removeCartesianGraphicalItem)(r.current)),r.current=null)},[n]),null}),s=(0,t.memo)(e=>{var n=(0,i.useAppDispatch)(),r=(0,t.useRef)(null);return(0,t.useLayoutEffect)(()=>{null===r.current?n((0,a.addPolarGraphicalItem)(e)):r.current!==e&&n((0,a.replacePolarGraphicalItem)({prev:r.current,next:e})),r.current=e},[n,e]),(0,t.useLayoutEffect)(()=>()=>{r.current&&(n((0,a.removePolarGraphicalItem)(r.current)),r.current=null)},[n]),null});e.s(["SetCartesianGraphicalItem",0,l,"SetPolarGraphicalItem",0,s],436323)},174755,e=>{"use strict";e.s(["getClassNameFromUnknown",0,function(e){return e&&"object"==typeof e&&"className"in e&&"string"==typeof e.className?e.className:""}])},300244,e=>{"use strict";var t=e=>null;t.displayName="Cell",e.s(["Cell",0,t])},616468,e=>{"use strict";var t=e.i(543372),n=e.i(134518);e.s(["useMouseClickItemDispatch",0,(e,r,i)=>{var o=(0,t.useAppDispatch)();return(t,a)=>l=>{null==e||e(t,a,l),o((0,n.setActiveClickItemIndex)({activeIndex:String(a),activeDataKey:r,activeCoordinate:t.tooltipPosition,activeGraphicalItemId:i}))}},"useMouseEnterItemDispatch",0,(e,r,i)=>{var o=(0,t.useAppDispatch)();return(t,a)=>l=>{null==e||e(t,a,l),o((0,n.setActiveMouseOverItemIndex)({activeIndex:String(a),activeDataKey:r,activeCoordinate:t.tooltipPosition,activeGraphicalItemId:i}))}},"useMouseLeaveItemDispatch",0,e=>{var r=(0,t.useAppDispatch)();return(t,i)=>o=>{null==e||e(t,i,o),r((0,n.mouseLeaveItem)())}}])},463044,e=>{"use strict";let t;var n=e.i(191788),r=e.i(730943);function i(e,t,n){let r,i=n.initialDeps??[],o=!0;function a(){let a=e();return(a.length!==i.length||a.some((e,t)=>i[t]!==e))&&(i=a,r=t(...a),(null==n?void 0:n.onChange)&&!(o&&n.skipInitialOnChange)&&n.onChange(r),o=!1),r}return a.updateDeps=e=>{i=e},a}function o(e,t){if(void 0!==e)return e;throw Error(`Unexpected undefined${t?`: ${t}`:""}`)}e.i(350461);let a=()=>{if(void 0!==t)return t;if("u"<typeof navigator)return t=!1;if(/iP(hone|od|ad)/.test(navigator.userAgent))return t=!0;let e=navigator.maxTouchPoints;return t="MacIntel"===navigator.platform&&void 0!==e&&e>0},l=e=>{let{offsetWidth:t,offsetHeight:n}=e;return{width:t,height:n}},s=e=>e,c=e=>{let t=Math.max(e.startIndex-e.overscan,0),n=Math.min(e.endIndex+e.overscan,e.count-1)-t+1,r=Array(n);for(let e=0;e<n;e++)r[e]=t+e;return r},d=(e,t)=>{let n=e.scrollElement;if(!n)return;let r=e.targetWindow;if(!r)return;let i=e=>{let{width:n,height:r}=e;t({width:Math.round(n),height:Math.round(r)})};if(i(l(n)),!r.ResizeObserver)return()=>{};let o=new r.ResizeObserver(t=>{let r=()=>{let e=t[0];if(null==e?void 0:e.borderBoxSize){let t=e.borderBoxSize[0];if(t)return void i({width:t.inlineSize,height:t.blockSize})}i(l(n))};e.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(r):r()});return o.observe(n,{box:"border-box"}),()=>{o.unobserve(n)}},u={passive:!0},h="u"<typeof window||"onscrollend"in window,p=(e,t)=>((e,t,n)=>{var r,i;let o,a=e.scrollElement;if(!a)return;let l=e.targetWindow;if(!l)return;let s=e.options.useScrollendEvent&&h,c=0,d=s?null:(r=()=>t(c,!1),i=e.options.isScrollingResetDelay,function(...e){l.clearTimeout(o),o=l.setTimeout(()=>r.apply(this,e),i)}),p=e=>()=>{c=n(a),null==d||d(),t(c,e)},m=p(!0),f=p(!1);return a.addEventListener("scroll",m,u),s&&a.addEventListener("scrollend",f,u),()=>{a.removeEventListener("scroll",m),s&&a.removeEventListener("scrollend",f)}})(e,t,t=>{let{horizontal:n,isRtl:r}=e.options;return n?t.scrollLeft*(r&&-1||1):t.scrollTop}),m=(e,t,n)=>{if(n.options.useCachedMeasurements){let t=n.indexFromElement(e),r=n.options.getItemKey(t);return n.itemSizeCache.get(r)??n.options.estimateSize(t)}if(null==t?void 0:t.borderBoxSize){let e=t.borderBoxSize[0];if(e)return Math.round(e[n.options.horizontal?"inlineSize":"blockSize"])}if(!t){let t=n.indexFromElement(e),r=n.options.getItemKey(t),i=n.itemSizeCache.get(r);if(void 0!==i)return i}return e[n.options.horizontal?"offsetWidth":"offsetHeight"]},f=(e,{adjustments:t=0,behavior:n},r)=>{var i,o;null==(o=null==(i=r.scrollElement)?void 0:i.scrollTo)||o.call(i,{[r.options.horizontal?"left":"top"]:e+t,behavior:n})};class g{constructor(e){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollState=null,this.measurementsCache=[],this._flatMeasurements=null,this.itemSizeCache=new Map,this.itemSizeCacheVersion=0,this.laneAssignments=new Map,this.pendingMin=null,this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.pendingScrollAnchor=null,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this._iosDeferredAdjustment=0,this._iosTouching=!1,this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._intendedScrollOffset=null,this.elementsCache=new Map,this.now=()=>{var e,t,n;return(null==(n=null==(t=null==(e=this.targetWindow)?void 0:e.performance)?void 0:t.now)?void 0:n.call(t))??Date.now()},this.observer=(()=>{let e=null,t=()=>e||(this.targetWindow&&this.targetWindow.ResizeObserver?e=new this.targetWindow.ResizeObserver(e=>{e.forEach(e=>{let t=()=>{let t=e.target,n=this.indexFromElement(t);if(!t.isConnected){for(let[e,n]of(this.observer.unobserve(t),this.elementsCache))if(n===t){this.elementsCache.delete(e);break}return}this.shouldMeasureDuringScroll(n)&&this.resizeItem(n,this.options.measureElement(t,e,this))};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(t):t()})}):null);return{disconnect:()=>{var n;null==(n=t())||n.disconnect(),e=null},observe:e=>{var n;return null==(n=t())?void 0:n.observe(e,{box:"border-box"})},unobserve:e=>{var n;return null==(n=t())?void 0:n.unobserve(e)}}})(),this.range=null,this.setOptions=e=>{var t,n;let r={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:s,rangeExtractor:c,onChange:()=>{},measureElement:m,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,anchorTo:"start",followOnAppend:!1,scrollEndThreshold:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,laneAssignmentMode:"estimate",useCachedMeasurements:!1};for(let t in e){let n=e[t];void 0!==n&&(r[t]=n)}let i=this.options,o=null,a=null,l=!1;if(void 0!==i&&i.enabled&&r.enabled&&"end"===r.anchorTo&&null!==this.scrollElement){let e=i.count,s=r.count,c=this.getMeasurements(),d=e>0?(null==(t=c[0])?void 0:t.key)??i.getItemKey(0):null,u=e>0?(null==(n=c[e-1])?void 0:n.key)??i.getItemKey(e-1):null;if(s!==e||e>0&&s>0&&(r.getItemKey(0)!==d||r.getItemKey(s-1)!==u)){l=!0;let t=e>0?this.getVirtualItemForOffset(this.getScrollOffset())??c[0]:null;t&&(o=[t.key,this.getScrollOffset()-t.start]);let n=!0===r.followOnAppend?"auto":r.followOnAppend||null;n&&s>e&&this.isAtEnd(i.scrollEndThreshold)&&(0===e||r.getItemKey(s-1)!==u)&&(a=n)}}this.options=r,l&&(this.pendingMin=0,this.itemSizeCacheVersion++);let d=!1,u=0;if(o&&null!==this.scrollOffset){let[e,t]=o,n=this.getMeasurements(),{count:r,getItemKey:i}=this.options,a=0;for(;a<r&&i(a)!==e;)a++;if(a<r){let e=n[a];if(e){let n=e.start+t;n!==this.scrollOffset&&(u=n-this.scrollOffset,this.scrollOffset=n,d=!0)}}}(d||a)&&(this.pendingScrollAnchor=[d?o[0]:null,d?o[1]:0,a,u])},this.notify=e=>{var t,n;null==(n=(t=this.options).onChange)||n.call(t,this,e)},this.maybeNotify=i(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),null!=this.rafId&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null,this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var e;let t=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==t){if(this.cleanup(),!t)return void this.maybeNotify();if(this.scrollElement=t,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=(null==(e=this.scrollElement)?void 0:e.window)??null,this.elementsCache.forEach(e=>{this.observer.observe(e)}),this.unsubs.push(this.options.observeElementRect(this,e=>{this.scrollRect=e,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(e,t)=>{if(t&&null===this._intendedScrollOffset&&e===this.scrollOffset)return;null!==this._intendedScrollOffset&&1.5>Math.abs(e-this._intendedScrollOffset)&&(e=this._intendedScrollOffset),this._intendedScrollOffset=null,this.scrollAdjustments=0;let n=this.getScrollOffset();this.scrollDirection=t?n===e?this.scrollDirection:n<e?"forward":"backward":null,this.scrollOffset=e,this.isScrolling=t,this._flushIosDeferredIfReady(),this.scrollState&&this.scheduleScrollReconcile(),this.maybeNotify()})),"addEventListener"in this.scrollElement){let e=this.scrollElement,t=()=>{this._iosTouching=!0,this._iosJustTouchEnded=!1,null!==this._iosTouchEndTimerId&&null!=this.targetWindow&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)},n=()=>{this._iosTouching=!1,a()&&null!=this.targetWindow&&(this._iosJustTouchEnded=!0,this._iosTouchEndTimerId=this.targetWindow.setTimeout(()=>{this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._flushIosDeferredIfReady()},150))};e.addEventListener("touchstart",t,u),e.addEventListener("touchend",n,u),this.unsubs.push(()=>{e.removeEventListener("touchstart",t),e.removeEventListener("touchend",n),null!==this._iosTouchEndTimerId&&null!=this.targetWindow&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)})}this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})}let n=this.pendingScrollAnchor;if(this.pendingScrollAnchor=null,n&&this.scrollElement&&this.options.enabled){let[e,t,r,i]=n;null===e||r||(a()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?0!==i&&(this._iosDeferredAdjustment+=i):this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})),r&&this.scrollToEnd({behavior:r})}},this._flushIosDeferredIfReady=()=>{if(0===this._iosDeferredAdjustment||this.isScrolling||this._iosTouching||this._iosJustTouchEnded)return;let e=this.getScrollOffset(),t=this.getMaxScrollOffset();if(e<0||e>t)return;let n=this._iosDeferredAdjustment;this._iosDeferredAdjustment=0,this._scrollToOffset(e,{adjustments:this.scrollAdjustments+=n,behavior:void 0})},this.rafId=null,this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??("function"==typeof this.options.initialOffset?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(e,t)=>{let n=new Map,r=new Map;for(let i=t-1;i>=0;i--){let t=e[i];if(n.has(t.lane))continue;let o=r.get(t.lane);if(null==o||t.end>o.end?r.set(t.lane,t):t.end<o.end&&n.set(t.lane,!0),n.size===this.options.lanes)break}return r.size===this.options.lanes?Array.from(r.values()).sort((e,t)=>e.end===t.end?e.index-t.index:e.end-t.end)[0]:void 0},this.getMeasurementOptions=i(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes,this.options.laneAssignmentMode],(e,t,n,r,i,o,a)=>(void 0!==this.prevLanes&&this.prevLanes!==o&&(this.lanesChangedFlag=!0),this.prevLanes=o,this.pendingMin=null,{count:e,paddingStart:t,scrollMargin:n,getItemKey:r,enabled:i,lanes:o,laneAssignmentMode:a}),{key:!1}),this.getMeasurements=i(()=>[this.getMeasurementOptions(),this.itemSizeCacheVersion],({count:e,paddingStart:t,scrollMargin:n,getItemKey:r,enabled:i,lanes:o,laneAssignmentMode:a},l)=>{let s=this.itemSizeCache;if(!i)return this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>e)for(let t of this.laneAssignments.keys())t>=e&&this.laneAssignments.delete(t);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMin=null),0!==this.measurementsCache.length||this.lanesSettling||(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}));let c=this.lanesSettling?0:this.pendingMin??0;if(this.pendingMin=null,this.lanesSettling&&this.measurementsCache.length===e&&(this.lanesSettling=!1),1===o){var d;let i,o=this.options.gap,a=2*e,l=this._flatMeasurements;if(!l||l.length<a){let e=new Float64Array(a);l&&c>0&&e.set(l.subarray(0,2*c)),l=e,this._flatMeasurements=l}if(0===c)i=t+n;else{let e=c-1;i=l[2*e]+l[2*e+1]+o}for(let t=c;t<e;t++){let e=r(t),n=s.get(e),a="number"==typeof n?n:this.options.estimateSize(t);l[2*t]=i,l[2*t+1]=a,i+=a+o}let u=(d=l,new Proxy(Array(e),{get(t,n,i){if("string"==typeof n){let i=n.charCodeAt(0);if(i>=48&&i<=57){let i=+n;if(Number.isInteger(i)&&i>=0&&i<e){let e=t[i];if(!e){let n=d[2*i];e=t[i]={index:i,key:r(i),start:n,size:d[2*i+1],end:n+d[2*i+1],lane:0}}return e}}if("length"===n)return e}return Reflect.get(t,n,i)}}));return this.measurementsCache=u,u}let u=this.measurementsCache.slice(0,c),h=Array(o).fill(void 0);for(let e=0;e<c;e++){let t=u[e];t&&(h[t.lane]=e)}for(let i=c;i<e;i++){let e,o,l=r(i),c=this.laneAssignments.get(i),d="estimate"===a||s.has(l);if(void 0!==c&&this.options.lanes>1){let r=h[e=c],i=void 0!==r?u[r]:void 0;o=i?i.end+this.options.gap:t+n}else{let r=1===this.options.lanes?u[i-1]:this.getFurthestMeasurement(u,i);o=r?r.end+this.options.gap:t+n,e=r?r.lane:i%this.options.lanes,this.options.lanes>1&&d&&this.laneAssignments.set(i,e)}let p=s.get(l),m="number"==typeof p?p:this.options.estimateSize(i),f=o+m;u[i]={index:i,start:o,size:m,end:f,key:l,lane:e},h[e]=i}return this.measurementsCache=u,u},{key:!1,debug:()=>this.options.debug}),this.calculateRange=i(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(e,t,n,r)=>0===e.length||0===t?(this.range=null,null):(this.range=function(e,t,n,r,i){let o=e.length-1;if(e.length<=r)return{startIndex:0,endIndex:o};if(1===r&&null!==i){let e=function(e,t,n){let r=0;for(;r<=t;){let i=(r+t)/2|0,o=e[2*i];if(o<n)r=i+1;else{if(!(o>n))return i;t=i-1}}return r>0?r-1:0}(i,o,n),r=e,a=n+t;for(;r<o&&i[2*r]+i[2*r+1]<a;)r++;return{startIndex:e,endIndex:r}}let a=v(0,o,t=>e[t].start,n),l=a;if(1===r)for(;l<o&&e[l].end<n+t;)l++;else if(r>1){let i=Array(r).fill(0);for(;l<o&&i.some(e=>e<n+t);){let t=e[l];i[t.lane]=t.end,l++}let s=Array(r).fill(n+t);for(;a>=0&&s.some(e=>e>=n);){let t=e[a];s[t.lane]=t.start,a--}a=Math.max(0,a-a%r),l=Math.min(o,l+(r-1-l%r))}return{startIndex:a,endIndex:l}}(e,t,n,r,1===r&&null!=this._flatMeasurements?this._flatMeasurements:null),this.range),{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=i(()=>{let e=null,t=null,n=this.calculateRange();return n&&(e=n.startIndex,t=n.endIndex),this.maybeNotify.updateDeps([this.isScrolling,e,t]),[this.options.rangeExtractor,this.options.overscan,this.options.count,e,t]},(e,t,n,r,i)=>null===r||null===i?[]:e({startIndex:r,endIndex:i,overscan:t,count:n}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{let t=this.options.indexAttribute,n=e.getAttribute(t);return n?parseInt(n,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this.shouldMeasureDuringScroll=e=>{var t;if(!this.scrollState||"smooth"!==this.scrollState.behavior)return!0;let n=this.scrollState.index??(null==(t=this.getVirtualItemForOffset(this.scrollState.lastTargetOffset))?void 0:t.index);if(void 0!==n&&this.range){let t=Math.max(this.options.overscan,Math.ceil((this.range.endIndex-this.range.startIndex)/2)),r=Math.max(0,n-t),i=Math.min(this.options.count-1,n+t);return e>=r&&e<=i}return!0},this.measureElement=e=>{if(!e)return void this.elementsCache.forEach((e,t)=>{e.isConnected||(this.observer.unobserve(e),this.elementsCache.delete(t))});let t=this.indexFromElement(e),n=this.options.getItemKey(t),r=this.elementsCache.get(n);r!==e&&(r&&this.observer.unobserve(r),this.observer.observe(e),this.elementsCache.set(n,e)),(!this.isScrolling||this.scrollState)&&this.shouldMeasureDuringScroll(t)&&this.resizeItem(t,this.options.measureElement(e,void 0,this))},this.resizeItem=(e,t)=>{var n,r;let i,o,a;if(e<0||e>=this.options.count)return;let l=this._flatMeasurements;if(1===this.options.lanes&&null!==l)a=this.options.getItemKey(e),o=l[2*e],i=l[2*e+1];else{let t=this.measurementsCache[e];if(!t)return;a=t.key,o=t.start,i=t.size}let s=t-(this.itemSizeCache.get(a)??i);if(0!==s){let l="end"===this.options.anchorTo&&(null==(n=this.scrollState)?void 0:n.behavior)!=="smooth"&&this.getVirtualDistanceFromEnd()<=this.options.scrollEndThreshold,c=l?this.getTotalSize():0,d=(null==(r=this.scrollState)?void 0:r.behavior)!=="smooth"&&(void 0!==this.shouldAdjustScrollPositionOnItemSizeChange?this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[e]??{index:e,key:a,start:o,size:i,end:o+i,lane:0},s,this):o<this.getScrollOffset()+this.scrollAdjustments&&(!this.itemSizeCache.has(a)||"backward"!==this.scrollDirection));(null===this.pendingMin||e<this.pendingMin)&&(this.pendingMin=e),this.itemSizeCache.set(a,t),this.itemSizeCacheVersion++,l?this.applyScrollAdjustment(this.getTotalSize()-c):d&&this.applyScrollAdjustment(s),this.notify(!1)}},this.getVirtualItems=i(()=>[this.getVirtualIndexes(),this.getMeasurements()],(e,t)=>{let n=[];for(let r=0,i=e.length;r<i;r++){let i=t[e[r]];n.push(i)}return n},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{let t=this.getMeasurements();if(0===t.length)return;let n=this._flatMeasurements,r=1===this.options.lanes&&null!=n,i=v(0,t.length-1,r?e=>n[2*e]:e=>o(t[e]).start,e);return o(t[i])},this.getMaxScrollOffset=()=>{if(!this.scrollElement)return 0;if("scrollHeight"in this.scrollElement)return this.options.horizontal?this.scrollElement.scrollWidth-this.scrollElement.clientWidth:this.scrollElement.scrollHeight-this.scrollElement.clientHeight;{let e=this.scrollElement.document.documentElement;return this.options.horizontal?e.scrollWidth-this.scrollElement.innerWidth:e.scrollHeight-this.scrollElement.innerHeight}},this.getVirtualDistanceFromEnd=()=>Math.max(this.getTotalSize()-this.getSize()-this.getScrollOffset(),0),this.getDistanceFromEnd=()=>Math.max(this.getMaxScrollOffset()-this.getScrollOffset(),0),this.isAtEnd=(e=this.options.scrollEndThreshold)=>this.getDistanceFromEnd()<=e,this.getOffsetForAlignment=(e,t,n=0)=>{if(!this.scrollElement)return 0;let r=this.getSize(),i=this.getScrollOffset();return"auto"===t&&(t=e>=i+r?"end":"start"),"center"===t?e+=(n-r)/2:"end"===t&&(e-=r),Math.max(Math.min(this.getMaxScrollOffset(),e),0)},this.getOffsetForIndex=(e,t="auto")=>{e=Math.max(0,Math.min(e,this.options.count-1));let n=this.getSize(),r=this.getScrollOffset(),i=this.measurementsCache[e];if(!i)return;if("auto"===t)if(i.end>=r+n-this.options.scrollPaddingEnd)t="end";else{if(!(i.start<=r+this.options.scrollPaddingStart))return[r,t];t="start"}if("end"===t&&e===this.options.count-1)return[this.getMaxScrollOffset(),t];let o="end"===t?i.end+this.options.scrollPaddingEnd:i.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(o,t,i.size),t]},this.scrollToOffset=(e,{align:t="start",behavior:n="auto"}={})=>{let r=this.getOffsetForAlignment(e,t),i=this.now();this.scrollState={index:null,align:t,behavior:n,startedAt:i,lastTargetOffset:r,stableFrames:0},this._scrollToOffset(r,{adjustments:void 0,behavior:n}),this.scheduleScrollReconcile()},this.scrollToIndex=(e,{align:t="auto",behavior:n="auto"}={})=>{e=Math.max(0,Math.min(e,this.options.count-1));let r=this.getOffsetForIndex(e,t);if(!r)return;let[i,o]=r,a=this.now();this.scrollState={index:e,align:o,behavior:n,startedAt:a,lastTargetOffset:i,stableFrames:0},this._scrollToOffset(i,{adjustments:void 0,behavior:n}),this.scheduleScrollReconcile()},this.scrollBy=(e,{behavior:t="auto"}={})=>{let n=this.getScrollOffset()+e,r=this.now();this.scrollState={index:null,align:"start",behavior:t,startedAt:r,lastTargetOffset:n,stableFrames:0},this._scrollToOffset(n,{adjustments:void 0,behavior:t}),this.scheduleScrollReconcile()},this.scrollToEnd=({behavior:e="auto"}={})=>{this.options.count>0?this.scrollToIndex(this.options.count-1,{align:"end",behavior:e}):this.scrollToOffset(Math.max(this.getTotalSize()-this.getSize(),0),{behavior:e})},this.getTotalSize=()=>{var e;let t,n=this.getMeasurements();if(0===n.length)t=this.options.paddingStart;else if(1===this.options.lanes){let r=n.length-1,i=this._flatMeasurements;t=null!=i?i[2*r]+i[2*r+1]:(null==(e=n[r])?void 0:e.end)??0}else{let e=Array(this.options.lanes).fill(null),r=n.length-1;for(;r>=0&&e.some(e=>null===e);){let t=n[r];null===e[t.lane]&&(e[t.lane]=t.end),r--}t=Math.max(...e.filter(e=>null!==e))}return Math.max(t-this.options.scrollMargin+this.options.paddingEnd,0)},this.takeSnapshot=()=>{let e=[];if(0===this.itemSizeCache.size)return e;for(let t of this.getMeasurements())t&&this.itemSizeCache.has(t.key)&&e.push({index:t.index,key:t.key,start:t.start,size:t.size,end:t.end,lane:t.lane});return e},this._scrollToOffset=(e,{adjustments:t,behavior:n})=>{this._intendedScrollOffset=e+(t??0),this.options.scrollToFn(e,{behavior:n,adjustments:t},this)},this.measure=()=>{this.pendingMin=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.itemSizeCacheVersion++,this.notify(!1)},this.setOptions(e)}applyScrollAdjustment(e,t){0!==e&&(a()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?this._iosDeferredAdjustment+=e:(this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=e,behavior:t}),null!==this.scrollOffset&&(this.scrollOffset+=this.scrollAdjustments,this.scrollAdjustments=0)))}scheduleScrollReconcile(){if(!this.targetWindow){this.scrollState=null;return}null==this.rafId&&(this.rafId=this.targetWindow.requestAnimationFrame(()=>{this.rafId=null,this.reconcileScroll()}))}reconcileScroll(){if(!this.scrollState||!this.scrollElement)return;if(this.now()-this.scrollState.startedAt>5e3){this.scrollState=null;return}let e=null!=this.scrollState.index?this.getOffsetForIndex(this.scrollState.index,this.scrollState.align):void 0,t=e?e[0]:this.scrollState.lastTargetOffset,n=t!==this.scrollState.lastTargetOffset;if(!n&&1.01>Math.abs(t-this.getScrollOffset())){if(this.scrollState.stableFrames++,this.scrollState.stableFrames>=1){this.getScrollOffset()!==t&&this._scrollToOffset(t,{adjustments:void 0,behavior:"auto"}),this.scrollState=null;return}}else if(this.scrollState.stableFrames=0,n){let e=this.getSize()||600,n=Math.abs(t-this.getScrollOffset()),r="smooth"===this.scrollState.behavior&&n>e;this.scrollState.lastTargetOffset=t,r||(this.scrollState.behavior="auto"),this._scrollToOffset(t,{adjustments:void 0,behavior:r?"smooth":"auto"})}this.scheduleScrollReconcile()}}let v=(e,t,n,r)=>{for(;e<=t;){let i=(e+t)/2|0,o=n(i);if(o<r)e=i+1;else{if(!(o>r))return i;t=i-1}}return e>0?e-1:0},x="u">typeof document?n.useLayoutEffect:n.useEffect;e.s(["useVirtualizer",0,function(e){return function({useFlushSync:e=!0,directDomUpdates:t=!1,directDomUpdatesMode:i="transform",...o}){let a=n.useReducer(e=>e+1,0)[1],l=n.useRef({enabled:t,mode:i,container:null,lastSize:null,lastPositions:new WeakMap,prevRange:null});l.current.enabled=t,l.current.mode=i;let s=e=>{let t=l.current;if(!t.enabled||!t.container)return;let n=e.getTotalSize();if(n!==t.lastSize){t.lastSize=n;let r=e.options.horizontal?"width":"height";t.container.style[r]=`${n}px`}let r=!!e.options.horizontal,i="transform"===t.mode,o=r?"left":"top",a=e.options.scrollMargin;for(let n of e.getVirtualItems()){let l=n.start-a,s=e.elementsCache.get(n.key);s&&t.lastPositions.get(s)!==l&&(t.lastPositions.set(s,l),i?s.style.transform=r?`translate3d(${l}px, 0, 0)`:`translate3d(0, ${l}px, 0)`:s.style[o]=`${l}px`)}},c={...o,onChange:(t,n)=>{var i;let c=l.current,d=!0;if(c.enabled){s(t);let e=t.range,n=c.prevRange;(d=!n||n.isScrolling!==t.isScrolling||n.startIndex!==(null==e?void 0:e.startIndex)||n.endIndex!==(null==e?void 0:e.endIndex))&&(c.prevRange=e?{startIndex:e.startIndex,endIndex:e.endIndex,isScrolling:t.isScrolling}:null)}d&&(e&&n?(0,r.flushSync)(a):a()),null==(i=o.onChange)||i.call(o,t,n)}},[d]=n.useState(()=>{let e=new g(c);return Object.assign(e,{containerRef:t=>{let n=l.current;if(n.container=t,n.lastSize=null,t&&n.enabled){let r=e.getTotalSize();n.lastSize=r;let i=e.options.horizontal?"width":"height";t.style[i]=`${r}px`}}})});return d.setOptions(c),x(()=>d._didMount(),[]),x(()=>d._willUpdate()),x(()=>{s(d)}),d}({observeElementRect:d,observeElementOffset:p,scrollToFn:f,...e})}],463044)},577830,e=>{"use strict";e.s(["gradientControls",0,[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]])},981377,e=>{"use strict";var t=e.i(44091),n=e.i(391466),r=e.i(275519),i=e.i(232471),o={root:"m_d08caa0"},a=e.i(391398);let l=(0,r.factory)(e=>{let r=(0,t.useProps)("Typography",null,e),{classNames:l,className:s,style:c,styles:d,unstyled:u,attributes:h,...p}=r;return(0,a.jsx)(i.Box,{...(0,n.useStyles)({name:"Typography",classes:o,props:r,className:s,style:c,classNames:l,styles:d,unstyled:u,attributes:h})("root"),...p})});l.classes=o,l.displayName="@mantine/core/Typography",e.s(["Typography",0,l],981377)},392385,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M176,128,96,208V48Z",opacity:"0.2"}),t.createElement("path",{d:"M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z"}))]]),i=t.forwardRef((e,i)=>t.createElement(n.default,{ref:i,...e,weights:r}));i.displayName="CaretRightIcon",e.s(["CaretRightIcon",0,i],392385)},593612,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm68-84a12,12,0,0,1-12,12H128a12,12,0,0,1-12-12V72a12,12,0,0,1,24,0v44h44A12,12,0,0,1,196,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm56,112H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm62-90a6,6,0,0,1-6,6H128a6,6,0,0,1-6-6V72a6,6,0,0,1,12,0v50h50A6,6,0,0,1,190,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm60-92a4,4,0,0,1-4,4H128a4,4,0,0,1-4-4V72a4,4,0,0,1,8,0v52h52A4,4,0,0,1,188,128Z"}))]]),i=t.forwardRef((e,i)=>t.createElement(n.default,{ref:i,...e,weights:r}));i.displayName="ClockIcon",e.s(["ClockIcon",0,i],593612)},663551,e=>{"use strict";var t=e.i(86473),n=e.i(27748),r=e.i(969610),i=e.i(813982),o=e.i(898770),a=e.i(657068),l=e.i(298008),s=e.i(494834),c={agendaView:"m_c5e63f2d",agendaViewHeader:"m_b70d381a",agendaViewHeaderLabel:"m_693056fa",agendaViewBody:"m_dd488e6f",agendaViewDateGroup:"m_e7e356c4",agendaViewDateHeader:"m_157e8ae8",agendaViewEvent:"m_cbf6b76d",agendaViewEventBody:"m_f9e2e6af",agendaViewEventColor:"m_428823f6",agendaViewEventTime:"m_f9eaffda",agendaViewNoEvents:"m_7a1aec87"},d=e.i(232471),u=e.i(883364),h=e.i(284629),p=e.i(481178),m=e.i(275519),f=e.i(433512),g=e.i(317477),v=e.i(951254),x=e.i(44091),b=e.i(391466),y=e.i(191788),w=e.i(205693),T=e.i(391398);let S={__staticSelector:"AgendaView",mode:"default",dateHeaderFormat:"dddd, MMMM D",headerFormat:"MMMM D, YYYY"},j=(0,p.createVarsResolver)((e,{radius:t})=>({agendaView:{"--agenda-view-radius":(0,f.getRadius)(t)}})),A=(0,m.factory)(e=>{let p=(0,x.useProps)("AgendaView",S,e),{classNames:m,className:f,style:A,styles:C,unstyled:D,vars:P,attributes:M,__staticSelector:E,rangeStart:z,rangeEnd:I,events:B,locale:V,radius:k,labels:H,mode:L,renderEvent:O,dateHeaderFormat:_,headerFormat:Z,onEventClick:R,recurrenceExpansionLimit:F,...N}=p,$=(0,w.useDatesContext)(),W=(0,v.useMantineTheme)(),Y=(0,b.useStyles)({name:E,classes:c,props:p,className:f,style:A,classNames:m,styles:C,unstyled:D,attributes:M,vars:P,varsResolver:j,rootSelector:"agendaView"}),G=function({rangeStart:e,rangeEnd:t,events:n}){let r={};if(void 0===n)return r;let i=(0,s.default)(e).startOf("day"),a=(0,s.default)(t).startOf("day"),c=new Set;for(let e of n){if("background"===e.display)continue;let t=(0,s.default)(e.start).startOf("day");if(!((0,s.default)(e.end).startOf("day").isBefore(i)||t.isAfter(a))){if(c.has(e.id))throw Error(`[@mantine/schedule] AgendaView: Duplicated event ids found: ${e.id}`);c.add(e.id),!function(e,t,n,r){if((0,o.isMultidayEvent)(e)){let i,o=(0,s.default)(e.start).startOf("day"),a=(i=(0,s.default)(e.end).startOf("day"),0===(0,s.default)(e.end).hour()&&0===(0,s.default)(e.end).minute()?i.subtract(1,"day"):i);for(let i=o;i.isBefore(a)||i.isSame(a);i=i.add(1,"day")){if(i.isBefore(n)||i.isAfter(r))continue;let o=i.format("YYYY-MM-DD");t[o]||(t[o]=[]),t[o].push(e)}return}let i=(0,s.default)(e.start).format("YYYY-MM-DD");t[i]||(t[i]=[]),t[i].push(e)}((0,l.validateEvent)(e),r,i,a)}}return r}({rangeStart:z,rangeEnd:I,events:(0,a.expandRecurringEvents)({events:B,rangeStart:(0,s.default)(z).startOf("day").toDate(),rangeEnd:(0,s.default)(I).endOf("day").toDate(),expansionLimit:F})}),U=Object.keys(G).sort(),q=`${(0,n.formatDate)({locale:$.getLocale(V),date:z,format:Z})} – ${(0,n.formatDate)({locale:$.getLocale(V),date:I,format:Z})}`,K=U.map(e=>{let a=(0,i.sortEvents)(G[e]).map(n=>{let i=(0,s.default)(n.start).format("HH:mm"),a=(0,s.default)(n.end).format("HH:mm"),l=(0,o.isMultidayEvent)(n)||(0,r.isAllDayEvent)({event:n,date:e}),c=(0,T.jsxs)(d.Box,{...Y("agendaViewEventBody"),children:[(0,T.jsx)("div",{...Y("agendaViewEventColor",{style:{backgroundColor:(0,g.getThemeColor)(n.color,W)}})}),(0,T.jsxs)("div",{children:[(0,T.jsx)(u.Text,{...Y("agendaViewEventTitle"),children:n.title}),(0,T.jsx)(u.Text,{...Y("agendaViewEventTime"),children:l?(0,t.getLabel)("allDay",H):`${i} – ${a}`})]})]}),p={...Y("agendaViewEvent"),onClick:"static"===L?void 0:e=>{R?.(n,e)},tabIndex:"static"===L?-1:0,children:c};return"function"==typeof O?(0,T.jsx)(y.default.Fragment,{children:O(n,p)},n.id):(0,y.createElement)(h.UnstyledButton,{...p,key:n.id})});return(0,y.createElement)("div",{...Y("agendaViewDateGroup"),key:e},(0,T.jsx)(u.Text,{...Y("agendaViewDateHeader"),children:(0,n.formatDate)({locale:$.getLocale(V),date:e,format:_})}),a)});return(0,T.jsxs)(d.Box,{...Y("agendaView"),...N,children:[(0,T.jsx)("div",{...Y("agendaViewHeader"),children:(0,T.jsx)(u.Text,{...Y("agendaViewHeaderLabel"),children:q})}),(0,T.jsx)(d.Box,{...Y("agendaViewBody"),children:K.length>0?K:(0,T.jsx)(u.Text,{...Y("agendaViewNoEvents"),children:(0,t.getLabel)("noEvents",H)})})]})});A.displayName="@mantine/schedule/AgendaView",A.classes=c,A.varsResolver=j,e.s(["AgendaView",0,A],663551)},245086,637079,312709,e=>{"use strict";var t=e.i(191788);e.s(["useAutoScrollOnDrag",0,function({viewportRef:e,enabled:n}){let r=(0,t.useRef)(null),i=(0,t.useRef)(0),o=(0,t.useEffectEvent)(()=>{null!==r.current&&(cancelAnimationFrame(r.current),r.current=null),i.current=0}),a=(0,t.useEffectEvent)(()=>{if(null!==r.current)return;let t=()=>{let n=e.current;if(!n||0===i.current){r.current=null;return}n.scrollTop+=i.current,r.current=requestAnimationFrame(t)};r.current=requestAnimationFrame(t)});(0,t.useEffect)(()=>{if(!n)return;let t=e.current;if(!t)return;let r=e=>{let n=t.getBoundingClientRect(),r=e.clientY-n.top,l=n.bottom-e.clientY;r<50?(i.current=-Math.ceil((1-r/50)*8),a()):l<50?(i.current=Math.ceil((1-l/50)*8),a()):o()},l=()=>{o()};return t.addEventListener("dragover",r),t.addEventListener("dragleave",l),t.addEventListener("dragend",l),t.addEventListener("drop",l),()=>{o(),t.removeEventListener("dragover",r),t.removeEventListener("dragleave",l),t.removeEventListener("dragend",l),t.removeEventListener("drop",l)}},[n,e])}],245086);var n=e.i(672654),r=e.i(42916),i=e.i(494834);e.s(["useEventResize",0,function({enabled:e=!1,mode:o="default",startTime:a,endTime:l,intervalMinutes:s,onEventResize:c,canResizeEvent:d}){let[u,h]=(0,t.useState)(null),p=(0,t.useRef)(null),m=(0,t.useRef)(!1),f=(0,t.useEffectEvent)(c||(()=>{})),g=(0,r.parseTimeString)(a),v=(0,r.parseTimeString)(l),x=60*g.hours+g.minutes,b=60*v.hours+v.minutes,y=(0,n.clampIntervalMinutes)(s),w=b-x,T=Math.ceil(w/y)*y,S=y/T*100,j=(0,t.useCallback)(e=>Math.max(0,Math.min(w,Math.round(e/y)*y)),[w,y]),A=(0,t.useCallback)((e,t)=>{let n=x+j(e/100*T),r=Math.floor(n/60);return`${t} ${String(r).padStart(2,"0")}:${String(n%60).padStart(2,"0")}:00`},[T,x,j]),C=(0,t.useCallback)(e=>j(e/100*T)/T*100,[T,j]),D=(0,t.useCallback)(({event:t,edge:n,container:r,originalTop:a,originalHeight:l,eventDate:s,pointerEvent:c})=>{if(!e||"static"===o)return;c.preventDefault(),c.stopPropagation();let d={eventId:t.id,event:t,edge:n,container:r,originalTop:a,originalHeight:l,currentTop:a,currentHeight:l,eventDate:s,originalStart:(0,i.default)(t.start).format("YYYY-MM-DD HH:mm:ss"),originalEnd:(0,i.default)(t.end).format("YYYY-MM-DD HH:mm:ss")};p.current=d,h(d)},[e,o]),P=null!==u;(0,t.useEffect)(()=>{if(!P)return;let e=document.body.style.userSelect;document.body.style.userSelect="none";let t=e=>{let t=p.current;if(!t)return;let n=t.container.getBoundingClientRect(),r=C(Math.max(0,Math.min(100,(e.clientY-n.top)/n.height*100))),i=t.originalTop,o=t.originalHeight;if("bottom"===t.edge)o=Math.max(S,r-t.originalTop);else{let e=t.originalTop+t.originalHeight;i=Math.min(r,e-S),o=e-i}p.current={...t,currentTop:i,currentHeight:o},h(p.current)},n=()=>{let e=p.current;if(e&&(e.currentTop!==e.originalTop||e.currentHeight!==e.originalHeight)){let t,n;"top"===e.edge?(t=A(e.currentTop,e.eventDate),n=e.originalEnd):(t=e.originalStart,n=A(e.currentTop+e.currentHeight,e.eventDate)),f({eventId:e.eventId,newStart:t,newEnd:n,event:e.event})}p.current=null,h(null),m.current=!0,requestAnimationFrame(()=>{m.current=!1})};return document.addEventListener("pointermove",t),document.addEventListener("pointerup",n),()=>{document.body.style.userSelect=e,document.removeEventListener("pointermove",t),document.removeEventListener("pointerup",n)}},[P]);let M=(0,t.useCallback)(e=>u&&u.eventId===e?{top:u.currentTop,height:u.currentHeight}:null,[u]),E=(0,t.useCallback)(t=>!!e&&"static"!==o&&"background"!==t.display&&(!d||d(t)),[e,o,d]),z=(0,t.useCallback)(()=>m.current,[]);return{handleResizeStart:D,isResizing:P,resizingEventId:u?.eventId??null,getResizePosition:M,isResizableEvent:E,wasResizing:z}}],637079);var o=e.i(27748),a=e.i(688785),l=e.i(664397),s={currentTimeIndicator:"m_74c54f2d",currentTimeIndicatorLine:"m_e62414c1",currentTimeIndicatorThumb:"m_decee6a9",currentTimeIndicatorTimeBubble:"m_4b00bcc6"},c=e.i(232471),d=e.i(481178),u=e.i(275519),h=e.i(317477),p=e.i(44091),m=e.i(391466),f=e.i(822933),g=e.i(205693),v=e.i(391398);let x={__staticSelector:"CurrentTimeIndicator",withTimeBubble:!0,withThumb:!0,currentTimeFormat:"HH:mm",topOffset:"0rem"},b=(0,d.createVarsResolver)((e,{color:t})=>({currentTimeIndicator:{"--indicator-color":t?(0,h.getThemeColor)(t,e):void 0}})),y=(0,u.factory)(e=>{let n=(0,p.useProps)("CurrentTimeIndicator",x,e),{classNames:r,className:d,style:u,styles:h,unstyled:y,vars:w,attributes:T,startOffset:S,endOffset:j,color:A,withTimeBubble:C,withThumb:D,currentTimeFormat:P,locale:M,timeBubbleStartOffset:E,__staticSelector:z,topOffset:I,startTime:B,endTime:V,intervalMinutes:k,getCurrentTime:H,...L}=n,O=(0,m.useStyles)({name:z,classes:s,props:n,className:d,style:u,classNames:r,styles:h,unstyled:y,vars:w,varsResolver:b,attributes:T,rootSelector:"currentTimeIndicator"}),_=(0,g.useDatesContext)(),[,Z]=(0,t.useState)(0);(0,f.useInterval)(()=>Z(e=>e+1),6e4,{autoInvoke:!0});let R=H?(0,i.default)(H()):(0,i.default)(),F=(0,a.getCurrentTimePosition)({startTime:B,endTime:V,intervalMinutes:k,now:R}),N=C?(0,o.formatDate)({locale:_.getLocale(M),date:R,format:P}):"";return(0,l.isInTimeRange)({date:R,startTime:B,endTime:V})?(0,v.jsxs)(c.Box,{...O("currentTimeIndicator"),__vars:{"--top-offset":`calc(${F}% + ${I})`,"--start-offset":S,"--end-offset":j,"--time-bubble-start-offset":E,"--time-bubble-width":N?.toString().toLowerCase().includes("m")?"64px":"46px"},...L,children:[C&&(0,v.jsx)("div",{...O("currentTimeIndicatorTimeBubble"),children:N}),D&&(0,v.jsx)("div",{...O("currentTimeIndicatorThumb")}),(0,v.jsx)("div",{...O("currentTimeIndicatorLine")})]}):null});y.displayName="@mantine/schedule/CurrentTimeIndicator",y.classes=s,y.varsResolver=b,e.s(["CurrentTimeIndicator",0,y],312709)},369974,e=>{"use strict";var t=e.i(44091),n=e.i(392862);let[r,i]=(0,e.i(386179).createSafeContext)("HoverCard component was not found in the tree");var o=e.i(191788),a=e.i(391398),l=e.i(458272);let s=(0,o.createContext)({withinGroup:!1}),c={openDelay:0,closeDelay:0};function d(e){let{openDelay:n,closeDelay:r,children:i}=(0,t.useProps)("HoverCardGroup",c,e);return(0,a.jsx)(s,{value:{withinGroup:!0},children:(0,a.jsx)(l.FloatingDelayGroup,{delay:{open:n,close:r},children:i})})}d.displayName="@mantine/core/HoverCardGroup",d.extend=e=>e;var u=e.i(334816);function h(e){let{children:r,onMouseEnter:l,onMouseLeave:c,...d}=(0,t.useProps)("HoverCardDropdown",null,e),h=i();if((0,o.use)(s).withinGroup&&h.getFloatingProps&&h.floating){let e=h.getFloatingProps();return(0,a.jsx)(n.Popover.Dropdown,{ref:h.floating,...e,onMouseEnter:(0,u.createEventHandler)(l,e.onMouseEnter),onMouseLeave:(0,u.createEventHandler)(c,e.onMouseLeave),...d,children:r})}let p=(0,u.createEventHandler)(l,h.openDropdown),m=(0,u.createEventHandler)(c,h.closeDropdown);return(0,a.jsx)(n.Popover.Dropdown,{onMouseEnter:p,onMouseLeave:m,...d,children:r})}h.displayName="@mantine/core/HoverCardDropdown";var p=e.i(275825),m=e.i(409703),f=e.i(332977);let g={refProp:"ref"};function v(e){let{children:r,refProp:l,eventPropsWrapperName:c,...d}=(0,t.useProps)("HoverCardTarget",g,e),h=(0,m.getSingleElementChild)(r);if(!h)throw Error("HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let v=i(),x=(0,o.use)(s),b=(0,f.useMergedRef)((0,p.getRefProp)(h),v.assignTarget);if(x.withinGroup&&v.getReferenceProps&&v.reference){let e=v.getReferenceProps();return(0,a.jsx)(n.Popover.Target,{refProp:l,...d,children:(0,o.cloneElement)(h,c?{[c]:{...e,ref:v.reference}}:{...e,ref:v.reference})})}let y={onMouseEnter:(0,u.createEventHandler)(h.props.onMouseEnter,v.openDropdown),onMouseLeave:(0,u.createEventHandler)(h.props.onMouseLeave,v.closeDropdown)},w={...c?{[c]:y}:y,ref:b};return(0,a.jsx)(n.Popover.Target,{refProp:l,...d,children:(0,o.cloneElement)(h,w)})}v.displayName="@mantine/core/HoverCardTarget";var x=e.i(107315);let b={openDelay:0,closeDelay:150,initiallyOpened:!1};function y(e){let{children:i,onOpen:c,onClose:d,openDelay:u,closeDelay:h,initiallyOpened:p,...m}=(0,t.useProps)("HoverCard",b,e),f=function(e){let[t,n]=(0,o.useState)(e.defaultOpened),r="boolean"==typeof e.opened?e.opened:t,i=(0,o.use)(s).withinGroup,a=(0,x.useId)(),c=(0,o.useRef)(-1),d=(0,o.useRef)(-1),u=(0,o.useRef)(null),h=(0,o.useCallback)(e=>{u.current=e},[]),p=(0,o.useCallback)(()=>{window.clearTimeout(c.current),window.clearTimeout(d.current)},[]),m=(0,o.useCallback)(t=>{n(t),t?(b(a),e.onOpen?.()):e.onClose?.()},[a,e.onOpen,e.onClose]),{context:f,refs:g}=(0,l.useFloating)({open:r,onOpenChange:m}),{delay:v,setCurrentId:b}=(0,l.useDelayGroup)(f,{id:a}),{getReferenceProps:y,getFloatingProps:w}=(0,l.useInteractions)([(0,l.useHover)(f,{enabled:!0,delay:i?v:{open:e.openDelay,close:e.closeDelay}}),(0,l.useRole)(f,{role:"dialog"}),(0,l.useDismiss)(f,{enabled:i})]),T=(0,o.useCallback)(()=>{i||(p(),0===e.openDelay||void 0===e.openDelay?m(!0):c.current=window.setTimeout(()=>m(!0),e.openDelay))},[i,p,e.openDelay,m]),S=(0,o.useCallback)(()=>{i||(p(),0===e.closeDelay||void 0===e.closeDelay?m(!1):d.current=window.setTimeout(()=>m(!1),e.closeDelay))},[i,p,e.closeDelay,m]),j=(0,o.useRef)(m);return j.current=m,(0,o.useEffect)(()=>()=>p(),[p]),(0,o.useEffect)(()=>{if(!r||i||"u"<typeof IntersectionObserver)return;let e=u.current;if(!e)return;let t=new IntersectionObserver(()=>{e.isConnected&&0!==e.getClientRects().length||(p(),j.current(!1))});return t.observe(e),()=>t.disconnect()},[r,i,p]),{opened:r,reference:g.setReference,floating:g.setFloating,assignTarget:h,getReferenceProps:y,getFloatingProps:w,openDropdown:T,closeDropdown:S}}({openDelay:u,closeDelay:h,defaultOpened:p,onOpen:c,onClose:d});return(0,a.jsx)(r,{value:{openDropdown:f.openDropdown,closeDropdown:f.closeDropdown,assignTarget:f.assignTarget,getReferenceProps:f.getReferenceProps,getFloatingProps:f.getFloatingProps,reference:f.reference,floating:f.floating},children:(0,a.jsx)(n.Popover,{...m,opened:f.opened,__staticSelector:"HoverCard",children:i})})}y.displayName="@mantine/core/HoverCard",y.Target=v,y.Dropdown=h,y.Group=d,y.extend=e=>e,e.s(["HoverCard",0,y],369974)},27355,(e,t,n)=>{e.e,t.exports=function(e){"use strict";var t={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(494834))},19683,e=>{"use strict";var t=e.i(257177),n=e.i(725695),r=e.i(671640),i=e.i(883364),o=e.i(391398),a=e.i(494834);let l=`import dayjs from 'dayjs';
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
}`;e.s(["EventDetails",0,function({event:e,resources:l}){let s=l?.find(t=>t.id===e.resourceId);return(0,o.jsxs)(r.Stack,{gap:"xs",children:[(0,o.jsx)(i.Text,{fw:600,size:"sm",children:e.title}),(0,o.jsxs)(i.Text,{size:"xs",c:"dimmed",children:[(0,a.default)(e.start).format("MMM D, YYYY HH:mm")," – ",(0,a.default)(e.end).format("HH:mm")]}),s&&(0,o.jsx)(i.Text,{size:"xs",c:"dimmed",children:s.label}),e.payload?.description&&(0,o.jsx)(i.Text,{size:"xs",c:"dimmed",children:e.payload.description}),e.payload?.location&&(0,o.jsx)(n.Group,{gap:4,children:(0,o.jsx)(t.Badge,{size:"sm",variant:"light",children:e.payload.location})}),e.payload?.attendees&&(0,o.jsxs)("div",{children:[(0,o.jsx)(i.Text,{size:"xs",fw:500,mb:4,children:"Attendees:"}),(0,o.jsx)(i.Text,{size:"xs",c:"dimmed",children:e.payload.attendees.join(", ")})]})]})},"_eventDetailsCode",0,l])},664894,(e,t,n)=>{e.e,t.exports=function(){"use strict";var e={year:0,month:1,day:2,hour:3,minute:4,second:5},t={};return function(n,r,i){var o,a=function(e,n,r){void 0===r&&(r={});var i,o,a,l,s=new Date(e);return(void 0===(i=r)&&(i={}),(l=t[a=n+"|"+(o=i.timeZoneName||"short")])||(l=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:n,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:o}),t[a]=l),l).formatToParts(s)},l=function(t,n){for(var r=a(t,n),o=[],l=0;l<r.length;l+=1){var s=r[l],c=s.type,d=s.value,u=e[c];u>=0&&(o[u]=parseInt(d,10))}var h=o[3],p=o[0]+"-"+o[1]+"-"+o[2]+" "+(24===h?0:h)+":"+o[4]+":"+o[5]+":000",m=+t;return(i.utc(p).valueOf()-(m-=m%1e3))/6e4},s=r.prototype;s.tz=function(e,t){void 0===e&&(e=o);var n,r=this.utcOffset(),a=this.toDate(),l=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(l))/1e3/60),c=-(15*Math.round(a.getTimezoneOffset()/15))-s;if(Number(c)){if(n=i(l,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(c,!0),t){var d=n.utcOffset();n=n.add(r-d,"minute")}}else n=this.utcOffset(0,t);return n.$x.$timezone=e,n},s.offsetName=function(e){var t=this.$x.$timezone||i.tz.guess(),n=a(this.valueOf(),t,{timeZoneName:e}).find(function(e){return"timezonename"===e.type.toLowerCase()});return n&&n.value};var c=s.startOf;s.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return c.call(this,e,t);var n=i(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return c.call(n,e,t).tz(this.$x.$timezone,!0)},i.tz=function(e,t,n){var r=n&&t,a=n||t||o,s=l(+i(),a);if("string"!=typeof e)return i(e).tz(a);var c=function(e,t,n){var r=e-60*t*1e3,i=l(r,n);if(t===i)return[r,t];var o=l(r-=60*(i-t)*1e3,n);return i===o?[r,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(i.utc(e,r).valueOf(),s,a),d=c[0],u=c[1],h=i(d).utcOffset(u);return h.$x.$timezone=a,h},i.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},i.tz.setDefault=function(e){o=e}}}()},53157,(e,t,n)=>{e.e,t.exports=function(){"use strict";var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(r,i,o){var a=i.prototype;o.utc=function(e){var t={date:e,utc:!0,args:arguments};return new i(t)},a.utc=function(t){var n=o(this.toDate(),{locale:this.$L,utc:!0});return t?n.add(this.utcOffset(),e):n},a.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var l=a.parse;a.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),l.call(this,e)};var s=a.init;a.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else s.call(this)};var c=a.utcOffset;a.utcOffset=function(r,i){var o=this.$utils().u;if(o(r))return this.$u?0:o(this.$offset)?c.call(this):this.$offset;if("string"==typeof r&&null===(r=function(e){void 0===e&&(e="");var r=e.match(t);if(!r)return null;var i=(""+r[0]).match(n)||["-",0,0],o=i[0],a=60*i[1]+ +i[2];return 0===a?0:"+"===o?a:-a}(r)))return this;var a=16>=Math.abs(r)?60*r:r;if(0===a)return this.utc(i);var l=this.clone();if(i)return l.$offset=a,l.$u=!1,l;var s=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();return(l=this.local().add(a+s,e)).$offset=a,l.$x.$localOffset=s,l};var d=a.format;a.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return d.call(this,t)},a.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},a.isUTC=function(){return!!this.$u},a.toISOString=function(){return this.toDate().toISOString()},a.toString=function(){return this.toDate().toUTCString()};var u=a.toDate;a.toDate=function(e){return"s"===e&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():u.call(this)};var h=a.diff;a.diff=function(e,t,n){if(e&&this.$u===e.$u)return h.call(this,e,t,n);var r=this.local(),i=o(e).local();return h.call(r,i,t,n)}}}()},554166,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",opacity:"0.2"}),t.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,66a38,38,0,1,0,38,38A38,38,0,0,0,128,66Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,130Zm0-112a86.1,86.1,0,0,0-86,86c0,30.91,14.34,63.74,41.47,94.94a252.32,252.32,0,0,0,41.09,38,6,6,0,0,0,6.88,0,252.32,252.32,0,0,0,41.09-38c27.13-31.2,41.47-64,41.47-94.94A86.1,86.1,0,0,0,128,18Zm0,206.51C113,212.93,54,163.62,54,104a74,74,0,0,1,148,0C202,163.62,143,212.93,128,224.51Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,68a36,36,0,1,0,36,36A36,36,0,0,0,128,68Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,132Zm0-112a84.09,84.09,0,0,0-84,84c0,30.42,14.17,62.79,41,93.62a250,250,0,0,0,40.73,37.66,4,4,0,0,0,4.58,0A250,250,0,0,0,171,197.62c26.81-30.83,41-63.2,41-93.62A84.09,84.09,0,0,0,128,20Zm37.1,172.23A254.62,254.62,0,0,1,128,227a254.62,254.62,0,0,1-37.1-34.81C73.15,171.8,52,139.9,52,104a76,76,0,0,1,152,0C204,139.9,182.85,171.8,165.1,192.23Z"}))]]),i=t.forwardRef((e,i)=>t.createElement(n.default,{ref:i,...e,weights:r}));i.displayName="MapPinIcon",e.s(["MapPinIcon",0,i],554166)},613688,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M144,96a16,16,0,1,1,16,16A16,16,0,0,1,144,96Zm92-40V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56ZM44,60v79.72l33.86-33.86a20,20,0,0,1,28.28,0L147.31,147l17.18-17.17a20,20,0,0,1,28.28,0L212,149.09V60Zm0,136H162.34L92,125.66l-48,48Zm168,0V183l-33.37-33.37L164.28,164l32,32Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,56V178.06l-39.72-39.72a8,8,0,0,0-11.31,0L147.31,164,97.66,114.34a8,8,0,0,0-11.32,0L32,168.69V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z",opacity:"0.2"}),t.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM156,88a12,12,0,1,1-12,12A12,12,0,0,1,156,88Zm60,112H40V160.69l46.34-46.35a8,8,0,0,1,11.32,0h0L165,181.66a8,8,0,0,0,11.32-11.32l-17.66-17.65L173,138.34a8,8,0,0,1,11.31,0L216,170.07V200Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V163.57L188.53,134.1a14,14,0,0,0-19.8,0l-21.42,21.42L101.9,110.1a14,14,0,0,0-19.8,0L38,154.2V56A2,2,0,0,1,40,54ZM38,200V171.17l52.58-52.58a2,2,0,0,1,2.84,0L176.83,202H40A2,2,0,0,1,38,200Zm178,2H193.8l-38-38,21.41-21.42a2,2,0,0,1,2.83,0l38,38V200A2,2,0,0,1,216,202ZM146,100a10,10,0,1,1,10,10A10,10,0,0,1,146,100Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4V168.4l-32.89-32.89a12,12,0,0,0-17,0l-22.83,22.83-46.82-46.83a12,12,0,0,0-17,0L36,159V56A4,4,0,0,1,40,52ZM36,200V170.34l53.17-53.17a4,4,0,0,1,5.66,0L181.66,204H40A4,4,0,0,1,36,200Zm180,4H193l-40-40,22.83-22.83a4,4,0,0,1,5.66,0L220,179.71V200A4,4,0,0,1,216,204ZM148,100a8,8,0,1,1,8,8A8,8,0,0,1,148,100Z"}))]]),i=t.forwardRef((e,i)=>t.createElement(n.default,{ref:i,...e,weights:r}));i.displayName="ImageIcon",e.s(["ImageIcon",0,i],613688)},900374,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,76a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,76Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm113.86-49.57A12,12,0,0,0,236,98.34L208.21,82.49l-.11-31.31a12,12,0,0,0-4.25-9.12,116,116,0,0,0-38-21.41,12,12,0,0,0-9.68.89L128,37.27,99.83,21.53a12,12,0,0,0-9.7-.9,116.06,116.06,0,0,0-38,21.47,12,12,0,0,0-4.24,9.1l-.14,31.34L20,98.35a12,12,0,0,0-5.85,8.11,110.7,110.7,0,0,0,0,43.11A12,12,0,0,0,20,157.66l27.82,15.85.11,31.31a12,12,0,0,0,4.25,9.12,116,116,0,0,0,38,21.41,12,12,0,0,0,9.68-.89L128,218.73l28.14,15.74a12,12,0,0,0,9.7.9,116.06,116.06,0,0,0,38-21.47,12,12,0,0,0,4.24-9.1l.14-31.34,27.81-15.81a12,12,0,0,0,5.85-8.11A110.7,110.7,0,0,0,241.86,106.43Zm-22.63,33.18-26.88,15.28a11.94,11.94,0,0,0-4.55,4.59c-.54,1-1.11,1.93-1.7,2.88a12,12,0,0,0-1.83,6.31L184.13,199a91.83,91.83,0,0,1-21.07,11.87l-27.15-15.19a12,12,0,0,0-5.86-1.53h-.29c-1.14,0-2.3,0-3.44,0a12.08,12.08,0,0,0-6.14,1.51L93,210.82A92.27,92.27,0,0,1,71.88,199l-.11-30.24a12,12,0,0,0-1.83-6.32c-.58-.94-1.16-1.91-1.7-2.88A11.92,11.92,0,0,0,63.7,155L36.8,139.63a86.53,86.53,0,0,1,0-23.24l26.88-15.28a12,12,0,0,0,4.55-4.58c.54-1,1.11-1.94,1.7-2.89a12,12,0,0,0,1.83-6.31L71.87,57A91.83,91.83,0,0,1,92.94,45.17l27.15,15.19a11.92,11.92,0,0,0,6.15,1.52c1.14,0,2.3,0,3.44,0a12.08,12.08,0,0,0,6.14-1.51L163,45.18A92.27,92.27,0,0,1,184.12,57l.11,30.24a12,12,0,0,0,1.83,6.32c.58.94,1.16,1.91,1.7,2.88A11.92,11.92,0,0,0,192.3,101l26.9,15.33A86.53,86.53,0,0,1,219.23,139.61Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),t.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.1,8.1,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8,8,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M237.94,107.21a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Zm108-54.4a6,6,0,0,0-2.92-4L202.64,86.22l-.42-.71L202.1,51.2A6,6,0,0,0,200,46.64a110.12,110.12,0,0,0-36.07-20.31,6,6,0,0,0-4.84.45L128.46,43.86h-1L96.91,26.76a6,6,0,0,0-4.86-.44A109.92,109.92,0,0,0,56,46.68a6,6,0,0,0-2.12,4.55l-.16,34.34c-.14.23-.28.47-.41.71L22.91,103.57A6,6,0,0,0,20,107.62a104.81,104.81,0,0,0,0,40.78,6,6,0,0,0,2.92,4l30.42,17.33.42.71.12,34.31A6,6,0,0,0,56,209.36a110.12,110.12,0,0,0,36.07,20.31,6,6,0,0,0,4.84-.45l30.61-17.08h1l30.56,17.1A6.09,6.09,0,0,0,162,230a5.83,5.83,0,0,0,1.93-.32,109.92,109.92,0,0,0,36-20.36,6,6,0,0,0,2.12-4.55l.16-34.34c.14-.23.28-.47.41-.71l30.42-17.29a6,6,0,0,0,2.92-4.05A104.81,104.81,0,0,0,236,107.6Zm-11.25,35.79L195.32,160.1a6.07,6.07,0,0,0-2.28,2.3c-.59,1-1.21,2.11-1.86,3.14a6,6,0,0,0-.91,3.16l-.16,33.21a98.15,98.15,0,0,1-27.52,15.53L133,200.88a6,6,0,0,0-2.93-.77h-.14c-1.24,0-2.5,0-3.74,0a6,6,0,0,0-3.07.76L93.45,217.43a98,98,0,0,1-27.56-15.49l-.12-33.17a6,6,0,0,0-.91-3.16c-.64-1-1.27-2.08-1.86-3.14a6,6,0,0,0-2.27-2.3L31.3,143.4a93,93,0,0,1,0-30.79L60.68,95.9A6.07,6.07,0,0,0,63,93.6c.59-1,1.21-2.11,1.86-3.14a6,6,0,0,0,.91-3.16l.16-33.21A98.15,98.15,0,0,1,93.41,38.56L123,55.12a5.81,5.81,0,0,0,3.07.76c1.24,0,2.5,0,3.74,0a6,6,0,0,0,3.07-.76l29.65-16.56a98,98,0,0,1,27.56,15.49l.12,33.17a6,6,0,0,0,.91,3.16c.64,1,1.27,2.08,1.86,3.14a6,6,0,0,0,2.27,2.3L224.7,112.6A93,93,0,0,1,224.73,143.39Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A112.1,112.1,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.62a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.08,8.08,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8.08,8.08,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Zm106-56a4,4,0,0,0-2-2.7l-30.89-17.6q-.47-.82-1-1.62L200.1,51.2a3.94,3.94,0,0,0-1.42-3,107.8,107.8,0,0,0-35.41-19.94,4,4,0,0,0-3.23.29L129,45.87h-2l-31-17.36a4,4,0,0,0-3.23-.3,108.05,108.05,0,0,0-35.39,20,4,4,0,0,0-1.41,3l-.16,34.9-1,1.62L23.9,105.3A4,4,0,0,0,22,108a102.76,102.76,0,0,0,0,40,4,4,0,0,0,1.95,2.7l30.89,17.6q.47.83,1,1.62l.12,34.87a3.94,3.94,0,0,0,1.42,3,107.8,107.8,0,0,0,35.41,19.94,4,4,0,0,0,3.23-.29L127,210.13h2l31,17.36a4,4,0,0,0,3.23.3,108.05,108.05,0,0,0,35.39-20,4,4,0,0,0,1.41-3l.16-34.9,1-1.62L232.1,150.7a4,4,0,0,0,2-2.71A102.76,102.76,0,0,0,234,108Zm-7.48,36.67L196.3,161.84a4,4,0,0,0-1.51,1.53c-.61,1.09-1.25,2.17-1.91,3.24a3.92,3.92,0,0,0-.61,2.1l-.16,34.15a99.8,99.8,0,0,1-29.7,16.77l-30.4-17a4.06,4.06,0,0,0-2-.51H130c-1.28,0-2.57,0-3.84,0a4.1,4.1,0,0,0-2.05.51l-30.45,17A100.23,100.23,0,0,1,63.89,202.9l-.12-34.12a3.93,3.93,0,0,0-.61-2.11c-.66-1-1.3-2.14-1.91-3.23a4,4,0,0,0-1.51-1.53L29.49,144.68a94.78,94.78,0,0,1,0-33.34L59.7,94.16a4,4,0,0,0,1.51-1.53c.61-1.09,1.25-2.17,1.91-3.23a4,4,0,0,0,.61-2.11l.16-34.15a99.8,99.8,0,0,1,29.7-16.77l30.4,17a4.1,4.1,0,0,0,2.05.51c1.28,0,2.57,0,3.84,0a4,4,0,0,0,2.05-.51l30.45-17A100.23,100.23,0,0,1,192.11,53.1l.12,34.12a3.93,3.93,0,0,0,.61,2.11c.66,1,1.3,2.14,1.91,3.23a4,4,0,0,0,1.51,1.53l30.25,17.23A94.78,94.78,0,0,1,226.54,144.66Z"}))]]),i=t.forwardRef((e,i)=>t.createElement(n.default,{ref:i,...e,weights:r}));i.displayName="GearSixIcon",e.s(["GearSixIcon",0,i],900374)},210200,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20A108,108,0,0,0,31.85,177.23L21,209.66A20,20,0,0,0,46.34,235l32.43-10.81A108,108,0,1,0,128,20Zm0,192a84,84,0,0,1-42.06-11.27,12,12,0,0,0-6-1.62,12.1,12.1,0,0,0-3.8.62l-29.79,9.93,9.93-29.79a12,12,0,0,0-1-9.81A84,84,0,1,1,128,212Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26A102,102,0,0,0,38.35,176.69L26.73,211.56a14,14,0,0,0,17.71,17.71l34.87-11.62A102,102,0,1,0,128,26Zm0,192a90,90,0,0,1-45.06-12.08,6.09,6.09,0,0,0-3-.81,6.2,6.2,0,0,0-1.9.31L40.65,217.88a2,2,0,0,1-2.53-2.53L50.58,178a6,6,0,0,0-.5-4.91A90,90,0,1,1,128,218Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28A100,100,0,0,0,40.53,176.5l-11.9,35.69a12,12,0,0,0,15.18,15.18l35.69-11.9A100,100,0,1,0,128,28Zm0,192a92,92,0,0,1-46.07-12.35,4.05,4.05,0,0,0-2-.54,3.93,3.93,0,0,0-1.27.21L41.28,219.78a4,4,0,0,1-5.06-5.06l12.46-37.38a4,4,0,0,0-.33-3.27A92,92,0,1,1,128,220Z"}))]]),i=t.forwardRef((e,i)=>t.createElement(n.default,{ref:i,...e,weights:r}));i.displayName="ChatCircleIcon",e.s(["ChatCircleIcon",0,i],210200)},878166,e=>{"use strict";var t=e.i(494834),n=e.i(205693),r=e.i(422696),i=e.i(541772);e.s(["useDatesInput",0,function({type:e,value:o,defaultValue:a,onChange:l,locale:s,format:c,closeOnChange:d,sortDates:u,labelSeparator:h,valueFormatter:p}){let m=(0,n.useDatesContext)(),[f,g]=(0,i.useDisclosure)(!1),[v,x]=(0,r.useUncontrolledDates)({type:e,value:o,defaultValue:a,onChange:l}),b=function({formatter:e,...n}){return(e||function({type:e,date:n,locale:r,format:i,labelSeparator:o}){let a=e=>(0,t.default)(e).locale(r).format(i);if("default"===e)return null===n?"":a(n);if("multiple"===e)return n.map(a).join(", ");if("range"===e&&Array.isArray(n)){if(n[0]&&n[1])return`${a(n[0])} ${o} ${a(n[1])}`;if(n[0])return`${a(n[0])} ${o} `}return""})(n)}({type:e,date:v,locale:m.getLocale(s),format:c,labelSeparator:m.getLabelSeparator(h),formatter:p}),y=n=>{d&&("default"===e&&g.close(),"range"===e&&n[0]&&n[1]&&g.close()),u&&"multiple"===e?x([...n].sort((e,n)=>(0,t.default)(e).isAfter((0,t.default)(n))?1:-1)):x(n)};return{_value:v,setValue:y,onClear:()=>y("range"===e?[null,null]:"multiple"===e?[]:null),shouldClear:"range"===e?!!v[0]:"multiple"===e?v.length>0:null!==v,formattedValue:b,dropdownOpened:f,dropdownHandlers:g}}],878166)},267073,e=>{"use strict";var t=e.i(568827),n=e.i(782681),r=e.i(878166),i=e.i(831474),o=e.i(777141),a=e.i(391398),l=e.i(275519),s=e.i(44091),c=e.i(62904);let d={type:"default",size:"sm",valueFormat:"MMMM D, YYYY",closeOnChange:!0,sortDates:!0,dropdownType:"popover"},u=(0,l.factory)(e=>{let l=(0,s.useProps)(["Input","InputWrapper","DatePickerInput"],d,e),{type:u,value:h,defaultValue:p,onChange:m,valueFormat:f,labelSeparator:g,locale:v,classNames:x,styles:b,unstyled:y,closeOnChange:w,size:T,variant:S,dropdownType:j,sortDates:A,minDate:C,maxDate:D,vars:P,defaultDate:M,valueFormatter:E,presets:z,attributes:I,...B}=l,{resolvedClassNames:V,resolvedStyles:k}=(0,c.useResolvedStylesApi)({classNames:x,styles:b,props:l}),{calendarProps:H,others:L}=(0,i.pickCalendarProps)(B),{_value:O,setValue:_,formattedValue:Z,dropdownHandlers:R,dropdownOpened:F,onClear:N,shouldClear:$}=(0,r.useDatesInput)({type:u,value:h,defaultValue:p,onChange:m,locale:v,format:f,labelSeparator:g,closeOnChange:w,sortDates:A,valueFormatter:E}),W=Array.isArray(O)?O[0]||M:O||M;return(0,a.jsx)(n.PickerInputBase,{formattedValue:Z,dropdownOpened:F,dropdownHandlers:R,classNames:V,styles:k,unstyled:y,onClear:N,shouldClear:$,value:O,size:T,variant:S,dropdownType:j,...L,type:u,__staticSelector:"DatePickerInput",attributes:I,children:(0,a.jsx)(o.DatePicker,{...H,size:T,variant:S,type:u,value:O,defaultDate:W||(0,t.getDefaultClampedDate)({maxDate:D,minDate:C}),onChange:_,locale:v,classNames:V,styles:k,unstyled:y,__staticSelector:"DatePickerInput",__stopPropagation:"popover"===j,minDate:C,maxDate:D,presets:z,attributes:I})})});u.classes={...n.PickerInputBase.classes,...o.DatePicker.classes},u.displayName="@mantine/dates/DatePickerInput",e.s(["DatePickerInput",0,u])},7883,e=>{"use strict";e.s(["FLOATING_ARROW_POSITION_DATA",0,[{label:"side",value:"side"},{label:"center",value:"center"}],"FLOATING_POSITION_DATA",0,[{label:"top",value:"top"},{label:"top-start",value:"top-start"},{label:"top-end",value:"top-end"},{label:"left",value:"left"},{label:"left-start",value:"left-start"},{label:"left-end",value:"left-end"},{label:"right",value:"right"},{label:"right-start",value:"right-start"},{label:"right-end",value:"right-end"},{label:"bottom",value:"bottom"},{label:"bottom-start",value:"bottom-start"},{label:"bottom-end",value:"bottom-end"}]])},755136,e=>{"use strict";var t=e.i(648863),n=e.i(485108),r=e.i(392862),i=e.i(883364),o=e.i(391398);let a={type:"code",code:`
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">This is uncontrolled popover, it is opened when button is clicked</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,component:function(){return(0,o.jsxs)(r.Popover,{width:200,position:"bottom",withArrow:!0,shadow:"md",children:[(0,o.jsx)(r.Popover.Target,{children:(0,o.jsx)(n.Button,{children:"Toggle popover"})}),(0,o.jsx)(r.Popover.Dropdown,{children:(0,o.jsx)(i.Text,{size:"xs",children:"This is uncontrolled popover, it is opened when button is clicked"})})]})}};var l=e.i(841209);let s={type:"code",code:`
import { Popover, Button, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Popover width={300} trapFocus position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <TextInput label="Name" placeholder="Name" size="xs" />
        <TextInput label="Email" placeholder="john@doe.com" size="xs" mt="xs" />
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,component:function(){return(0,o.jsxs)(r.Popover,{width:300,trapFocus:!0,position:"bottom",withArrow:!0,shadow:"md",children:[(0,o.jsx)(r.Popover.Target,{children:(0,o.jsx)(n.Button,{children:"Toggle popover"})}),(0,o.jsxs)(r.Popover.Dropdown,{children:[(0,o.jsx)(l.TextInput,{label:"Name",placeholder:"Name",size:"xs"}),(0,o.jsx)(l.TextInput,{label:"Email",placeholder:"john@doe.com",size:"xs",mt:"xs"})]})]})}};var c=e.i(541772);let d={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  return (
    <Popover width={200} position="bottom" withArrow shadow="md" opened={opened}>
      <Popover.Target>
        <Button onMouseEnter={open} onMouseLeave={close}>
          Hover to see popover
        </Button>
      </Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: 'none' }}>
        <Text size="sm">This popover is shown when user hovers the target element</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,component:function(){let[e,{close:t,open:a}]=(0,c.useDisclosure)(!1);return(0,o.jsxs)(r.Popover,{width:200,position:"bottom",withArrow:!0,shadow:"md",opened:e,children:[(0,o.jsx)(r.Popover.Target,{children:(0,o.jsx)(n.Button,{onMouseEnter:a,onMouseLeave:t,children:"Hover to see popover"})}),(0,o.jsx)(r.Popover.Dropdown,{style:{pointerEvents:"none"},children:(0,o.jsx)(i.Text,{size:"sm",children:"This popover is shown when user hovers the target element"})})]})}},u={type:"code",code:`
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width="target" position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button w={280}>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="sm">
          This popover has same width as target, it is useful when you are building input dropdowns
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}

`,centered:!0,component:function(){return(0,o.jsxs)(r.Popover,{width:"target",position:"bottom",withArrow:!0,shadow:"md",children:[(0,o.jsx)(r.Popover.Target,{children:(0,o.jsx)(n.Button,{w:280,children:"Toggle popover"})}),(0,o.jsx)(r.Popover.Dropdown,{children:(0,o.jsx)(i.Text,{size:"sm",children:"This popover has same width as target, it is useful when you are building input dropdowns"})})]})}};var h=e.i(218262);let p={type:"code",component:function(){return(0,o.jsxs)(i.Text,{children:["Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers."," ",(0,o.jsxs)(r.Popover,{middlewares:{flip:!0,shift:!0,inline:!0},position:"top",children:[(0,o.jsx)(r.Popover.Target,{children:(0,o.jsx)(h.Mark,{children:"When visiting a junkyard"})}),(0,o.jsx)(r.Popover.Dropdown,{children:"Inline dropdown"})]}),", you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot of a rainbow."]})},code:`
import { Popover, Mark, Text } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this
      Pok\xe9mon was hunted close to extinction by those who were after the priceless antlers.{' '}
      <Popover middlewares={{ flip: true, shift: true, inline: true }} position="top">
        <Popover.Target>
          <Mark>When visiting a junkyard</Mark>
        </Popover.Target>
        <Popover.Dropdown>Inline dropdown</Popover.Dropdown>
      </Popover>
      , you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s
      feathers glow in seven colors depending on the angle at which they are struck by light. These
      feathers are said to bring happiness to the bearers. This Pok\xe9mon is said to live at the foot
      of a rainbow.
    </Text>
  );
}
`};var m=e.i(7883);let f={type:"configurator",component:function(e){return(0,o.jsxs)(r.Popover,{width:200,position:e.position,opened:!0,offset:{mainAxis:e.mainAxis,crossAxis:e.crossAxis},children:[(0,o.jsx)(r.Popover.Target,{children:(0,o.jsx)(n.Button,{children:"Popover target"})}),(0,o.jsx)(r.Popover.Dropdown,{children:(0,o.jsx)(i.Text,{size:"xs",children:"Change position and offset to configure dropdown offset relative to target"})})]})},code:e=>`
import { Popover, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <Popover
      width={200}
      position="${e.position}"
      opened
      offset={{ mainAxis: ${e.mainAxis}, crossAxis: ${e.crossAxis} }}
    >
      <Popover.Target>
        <Button>Popover target</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">
          Change position and offset to configure dropdown offset relative to target
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,controls:[{type:"select",prop:"position",initialValue:"bottom",data:m.FLOATING_POSITION_DATA,libraryValue:null},{type:"number",prop:"mainAxis",initialValue:0,libraryValue:null,min:-50,max:50},{type:"number",prop:"crossAxis",initialValue:0,libraryValue:null,min:-50,max:50}]},g={type:"configurator",component:function(e){return(0,o.jsxs)(r.Popover,{width:200,opened:!0,...e,children:[(0,o.jsx)(r.Popover.Target,{children:(0,o.jsx)(n.Button,{children:"Popover target"})}),(0,o.jsx)(r.Popover.Dropdown,{children:(0,o.jsx)(i.Text,{size:"xs",children:"Change position and offset to configure dropdown offset relative to target"})})]})},code:`
import { Popover, Button, Text } from '@mantine/core';


function Demo() {
  return (
    <Popover
      width={200}
      opened
      {{props}}
    >
      <Popover.Target>
        <Button>Popover target</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">
          Change position and offset to configure dropdown offset relative to target
        </Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,controls:[{type:"select",prop:"position",initialValue:"bottom",data:m.FLOATING_POSITION_DATA,libraryValue:null},{type:"number",prop:"offset",initialValue:0,libraryValue:null,min:-50,max:50}]},v={type:"configurator",component:function(e){return(0,o.jsxs)(r.Popover,{width:200,opened:!0,position:"bottom-start",withArrow:!0,...e,children:[(0,o.jsx)(r.Popover.Target,{children:(0,o.jsx)(n.Button,{children:"Target element"})}),(0,o.jsx)(r.Popover.Dropdown,{children:(0,o.jsx)(i.Text,{size:"xs",children:"Arrow position can be changed for *-start and *-end positions"})})]})},code:`
import { Popover, Button, Text } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} opened position="bottom-start" withArrow{{props}}>
      <Popover.Target>
        <Button>Target element</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Arrow position can be changed for *-start and *-end positions</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"arrowPosition",initialValue:"center",libraryValue:"center",data:["center","side"]},{type:"number",prop:"arrowOffset",initialValue:10,libraryValue:10,min:5,max:50},{type:"number",prop:"arrowSize",initialValue:7,libraryValue:7,min:5,max:12},{type:"number",prop:"arrowRadius",initialValue:0,libraryValue:0,min:0,max:10}]},x={type:"code",component:function(){return(0,o.jsxs)(r.Popover,{width:200,position:"bottom",clickOutsideEvents:["mouseup","touchend"],children:[(0,o.jsx)(r.Popover.Target,{children:(0,o.jsx)(n.Button,{children:"Toggle popover"})}),(0,o.jsx)(r.Popover.Dropdown,{children:(0,o.jsx)(i.Text,{size:"xs",children:"Popover will be closed with mouseup and touchend events"})})]})},code:`
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200} position="bottom" clickOutsideEvents={['mouseup', 'touchend']}>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Popover will be closed with mouseup and touchend events</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0},b={type:"configurator",component:function(e){return(0,o.jsxs)(r.Popover,{width:200,...e,children:[(0,o.jsx)(r.Popover.Target,{children:(0,o.jsx)(n.Button,{children:"Toggle popover"})}),(0,o.jsx)(r.Popover.Dropdown,{children:(0,o.jsx)(i.Text,{size:"xs",children:"Disabled popover dropdown is always hidden"})})]})},code:`
import { Popover, Text, Button } from '@mantine/core';

function Demo() {
  return (
    <Popover width={200}{{props}}>
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown>
        <Text size="xs">Disabled popover dropdown is always hidden</Text>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,controls:[{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1}]};var y=e.i(988798),w=e.i(267073);let T={type:"code",component:function(){return(0,o.jsxs)(r.Popover,{width:300,position:"bottom",withArrow:!0,shadow:"md",children:[(0,o.jsx)(r.Popover.Target,{children:(0,o.jsx)(n.Button,{children:"Toggle popover"})}),(0,o.jsxs)(r.Popover.Dropdown,{bg:"var(--mantine-color-body)",children:[(0,o.jsx)(y.Select,{label:"Select within Popover",placeholder:"Select within Popover",comboboxProps:{withinPortal:!1},data:["React","Angular","Svelte","Vue"]}),(0,o.jsx)(w.DatePickerInput,{label:"DatePickerInput within Popover",placeholder:"DatePickerInput within Popover",popoverProps:{withinPortal:!1},mt:"md"})]})]})},code:`
import { Button, Popover, Select } from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';

function Demo() {
  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <Button>Toggle popover</Button>
      </Popover.Target>
      <Popover.Dropdown bg="var(--mantine-color-body)">
        <Select
          label="Select within Popover"
          placeholder="Select within Popover"
          comboboxProps={{ withinPortal: false }}
          data={['React', 'Angular', 'Svelte', 'Vue']}
        />
        <DatePickerInput
          label="DatePickerInput within Popover"
          placeholder="DatePickerInput within Popover"
          popoverProps={{ withinPortal: false }}
          mt="md"
        />
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0};var S=e.i(79897),j=e.i(141806),A=e.i(725695),C=e.i(671640),D=e.i(284629);let P={type:"code",component:function(){return(0,o.jsxs)(r.Popover,{width:320,shadow:"md",withArrow:!0,withOverlay:!0,overlayProps:{zIndex:1e4,blur:"8px"},zIndex:10001,children:[(0,o.jsx)(r.Popover.Target,{children:(0,o.jsx)(D.UnstyledButton,{style:{zIndex:10001,position:"relative"},children:(0,o.jsx)(j.Avatar,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"})})}),(0,o.jsxs)(r.Popover.Dropdown,{children:[(0,o.jsxs)(A.Group,{children:[(0,o.jsx)(j.Avatar,{src:"https://avatars.githubusercontent.com/u/79146003?s=200&v=4",radius:"xl"}),(0,o.jsxs)(C.Stack,{gap:5,children:[(0,o.jsx)(i.Text,{size:"sm",fw:700,style:{lineHeight:1},children:"Mantine"}),(0,o.jsx)(S.Anchor,{href:"https://x.com/mantinedev",c:"dimmed",size:"xs",style:{lineHeight:1},children:"@mantinedev"})]})]}),(0,o.jsx)(i.Text,{size:"sm",mt:"md",children:"Customizable React components and hooks library with focus on usability, accessibility and developer experience"}),(0,o.jsxs)(A.Group,{mt:"md",gap:"xl",children:[(0,o.jsxs)(i.Text,{size:"sm",children:[(0,o.jsx)("b",{children:"0"})," Following"]}),(0,o.jsxs)(i.Text,{size:"sm",children:[(0,o.jsx)("b",{children:"1,174"})," Followers"]})]})]})]})},code:`
import { Popover, Avatar, Text, Group, Anchor, Stack } from '@mantine/core';

function Demo() {
  return (
    <Popover
      width={320}
      shadow="md"
      withArrow
      withOverlay
      overlayProps={{ zIndex: 10000, blur: '8px' }}
      zIndex={10001}
    >
      <Popover.Target>
        <UnstyledButton style={{ zIndex: 10001, position: 'relative' }}>
          <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
        </UnstyledButton>
      </Popover.Target>
      <Popover.Dropdown>
        <Group>
          <Avatar src="https://avatars.githubusercontent.com/u/79146003?s=200&v=4" radius="xl" />
          <Stack gap={5}>
            <Text size="sm" fw={700} style={{ lineHeight: 1 }}>
              Mantine
            </Text>
            <Anchor href="https://x.com/mantinedev" c="dimmed" size="xs" style={{ lineHeight: 1 }}>
              @mantinedev
            </Anchor>
          </Stack>
        </Group>

        <Text size="sm" mt="md">
          Customizable React components and hooks library with focus on usability, accessibility and
          developer experience
        </Text>

        <Group mt="md" gap="xl">
          <Text size="sm">
            <b>0</b> Following
          </Text>
          <Text size="sm">
            <b>1,174</b> Followers
          </Text>
        </Group>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0};var M=e.i(232471),E=e.i(580312);let z={type:"code",code:`
import { Box, Button, Group, Popover } from '@mantine/core';

function Demo() {
  return (
    <Box
      bd="1px solid var(--mantine-color-dimmed)"
      p="xl"
      w={{ base: 340, sm: 400 }}
      h={200}
      style={{ overflow: 'auto' }}
    >
      <Box w={1000} h={400}>
        <Group>
          <Popover width="target" position="bottom" opened>
            <Popover.Target>
              <Button>Toggle popover</Button>
            </Popover.Target>
            <Popover.Dropdown>This popover dropdown is hidden when detached</Popover.Dropdown>
          </Popover>

          <Popover width="target" position="bottom" opened hideDetached={false}>
            <Popover.Target>
              <Button>Toggle popover</Button>
            </Popover.Target>
            <Popover.Dropdown>This popover dropdown is visible when detached</Popover.Dropdown>
          </Popover>
        </Group>
      </Box>
    </Box>
  );
}
`,centered:!0,component:function(){return(0,o.jsx)(M.Box,{bd:"1px solid var(--mantine-color-dimmed)",p:"xl",w:{base:340,sm:400},h:200,style:{overflow:"auto",colorScheme:(0,E.useComputedColorScheme)()},children:(0,o.jsx)(M.Box,{w:1e3,h:400,children:(0,o.jsxs)(A.Group,{children:[(0,o.jsxs)(r.Popover,{width:"target",position:"bottom",opened:!0,children:[(0,o.jsx)(r.Popover.Target,{children:(0,o.jsx)(n.Button,{children:"Toggle popover"})}),(0,o.jsx)(r.Popover.Dropdown,{children:"This popover dropdown is hidden when detached"})]}),(0,o.jsxs)(r.Popover,{width:"target",position:"bottom",opened:!0,hideDetached:!1,children:[(0,o.jsx)(r.Popover.Target,{children:(0,o.jsx)(n.Button,{children:"Toggle popover"})}),(0,o.jsx)(r.Popover.Dropdown,{children:"This popover dropdown is visible when detached"})]})]})})})}};var I=e.i(470743);let B={type:"code",code:`
import { Avatar, Button, Group, Paper, Popover, Stack, Text } from '@mantine/core';

function Demo() {
  return (
    <Popover width={260} shadow="md" position="bottom-start" offset={0}>
      <Popover.ContextMenu>
        <Paper withBorder p="xl" radius="md" style={{ userSelect: 'none', textAlign: 'center' }}>
          <Text fw={500}>Right-click anywhere inside this area</Text>
          <Text c="dimmed" size="sm" mt={4}>
            A popover will open at the cursor position
          </Text>
        </Paper>
      </Popover.ContextMenu>

      <Popover.Dropdown>
        <Stack gap="xs">
          <Group gap="sm" wrap="nowrap">
            <Avatar radius="xl" color="blue">JD</Avatar>
            <div>
              <Text size="sm" fw={500}>Jane Doe</Text>
              <Text size="xs" c="dimmed">jane@example.com</Text>
            </div>
          </Group>
          <Group grow gap="xs">
            <Button size="xs" variant="default">Message</Button>
            <Button size="xs">Follow</Button>
          </Group>
        </Stack>
      </Popover.Dropdown>
    </Popover>
  );
}
`,centered:!0,component:function(){return(0,o.jsxs)(r.Popover,{width:260,shadow:"md",position:"bottom-start",offset:0,children:[(0,o.jsx)(r.Popover.ContextMenu,{children:(0,o.jsxs)(I.Paper,{withBorder:!0,p:"xl",radius:"md",style:{userSelect:"none",textAlign:"center"},children:[(0,o.jsx)(i.Text,{fw:500,children:"Right-click anywhere inside this area"}),(0,o.jsx)(i.Text,{c:"dimmed",size:"sm",mt:4,children:"A popover will open at the cursor position"})]})}),(0,o.jsx)(r.Popover.Dropdown,{children:(0,o.jsxs)(C.Stack,{gap:"xs",children:[(0,o.jsxs)(A.Group,{gap:"sm",wrap:"nowrap",children:[(0,o.jsx)(j.Avatar,{radius:"xl",color:"blue",children:"JD"}),(0,o.jsxs)("div",{children:[(0,o.jsx)(i.Text,{size:"sm",fw:500,children:"Jane Doe"}),(0,o.jsx)(i.Text,{size:"xs",c:"dimmed",children:"jane@example.com"})]})]}),(0,o.jsxs)(A.Group,{grow:!0,gap:"xs",children:[(0,o.jsx)(n.Button,{size:"xs",variant:"default",children:"Message"}),(0,o.jsx)(n.Button,{size:"xs",children:"Follow"})]})]})})]})}};var V=(0,t.__exportAll)({arrow:()=>v,clickOutsideEvents:()=>x,contextMenu:()=>B,disabled:()=>b,form:()=>s,hideDetached:()=>z,hover:()=>d,inline:()=>p,offset:()=>g,offsetAxis:()=>f,overlay:()=>P,portalChildren:()=>T,sameWidth:()=>u,usage:()=>a});e.s(["PopoverDemos",0,V],755136)},20035,e=>{"use strict";var t=e.i(481178),n=e.i(44091),r=e.i(391466),i=e.i(83353),o=e.i(275519),a=e.i(232471);let[l,s]=(0,e.i(386179).createSafeContext)("Grid component was not found in tree");var c={container:"m_8478a6da",root:"m_410352e9",inner:"m_dee7bd2f",col:"m_96bdd299"},d=e.i(76112),u=e.i(931718),h=e.i(230780),p=e.i(496766),m=e.i(951254),f=e.i(871346),g=e.i(391398);let v=(e,t)=>"content"===e?"auto":"auto"===e?"0rem":e?e===t?"100%":`calc(${100*e/t}% - ${(t-e)/t} * var(--grid-column-gap))`:void 0,x=(e,t,n)=>n||"auto"===e?"100%":"content"===e?"unset":v(e,t),b=(e,t)=>{if(e)return"auto"===e||t?"1":"auto"},y=(e,t)=>0===e?"0":e?`calc(${100*e/t}% + ${e/t} * var(--grid-column-gap))`:void 0;function w({span:e,order:t,offset:n,align:r,selector:i}){let o=(0,m.useMantineTheme)(),a=s(),l=a.breakpoints||o.breakpoints,c=(0,p.getBaseValue)(e),T=void 0===c?12:c,S=(0,u.filterProps)({"--col-order":(0,p.getBaseValue)(t)?.toString(),"--col-flex-grow":b(T,a.grow),"--col-flex-basis":v(T,a.columns),"--col-width":"content"===T?"auto":void 0,"--col-max-width":x(T,a.columns,a.grow),"--col-offset":y((0,p.getBaseValue)(n),a.columns),"--col-align-self":(0,p.getBaseValue)(r)}),j=(0,d.keys)(l).reduce((i,o)=>(i[o]||(i[o]={}),"object"==typeof t&&void 0!==t[o]&&(i[o]["--col-order"]=t[o]?.toString()),"object"==typeof e&&void 0!==e[o]&&(i[o]["--col-flex-grow"]=b(e[o],a.grow),i[o]["--col-flex-basis"]=v(e[o],a.columns),i[o]["--col-width"]="content"===e[o]?"auto":void 0,i[o]["--col-max-width"]=x(e[o],a.columns,a.grow)),"object"==typeof n&&void 0!==n[o]&&(i[o]["--col-offset"]=y(n[o],a.columns)),"object"==typeof r&&void 0!==r[o]&&(i[o]["--col-align-self"]=r[o]),i),{}),A=(0,h.getSortedBreakpoints)((0,d.keys)(j),l).filter(e=>(0,d.keys)(j[e.value]).length>0).map(e=>({query:"container"===a.type?`mantine-grid (min-width: ${l[e.value]})`:`(min-width: ${l[e.value]})`,styles:j[e.value]}));return(0,g.jsx)(f.InlineStyles,{styles:S,media:"container"===a.type?void 0:A,container:"container"===a.type?A:void 0,selector:i})}var T=e.i(56206);let S={span:12},j=(0,o.factory)(e=>{let{classNames:t,className:r,style:o,styles:l,vars:c,span:d,order:u,offset:h,align:p,...m}=(0,n.useProps)("GridCol",S,e),f=s(),v=(0,i.useRandomClassName)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(w,{selector:`.${v}`,span:d,order:u,offset:h,align:p}),(0,g.jsx)(a.Box,{...f.getStyles("col",{className:(0,T.default)(r,v),style:o,classNames:t,styles:l}),...m})]})});j.classes=c,j.displayName="@mantine/core/GridCol";var A=e.i(433512);function C({gap:e,rowGap:t,columnGap:n,selector:r,breakpoints:i,type:o}){let a=(0,m.useMantineTheme)(),l=i||a.breakpoints,s=(0,u.filterProps)({"--grid-gap":(0,A.getSpacing)((0,p.getBaseValue)(e)),"--grid-row-gap":(0,A.getSpacing)((0,p.getBaseValue)(t)),"--grid-column-gap":(0,A.getSpacing)((0,p.getBaseValue)(n))}),c=(0,d.keys)(l).reduce((r,i)=>(r[i]||(r[i]={}),"object"==typeof e&&void 0!==e[i]&&(r[i]["--grid-gap"]=(0,A.getSpacing)(e[i])),"object"==typeof t&&void 0!==t[i]&&(r[i]["--grid-row-gap"]=(0,A.getSpacing)(t[i])),"object"==typeof n&&void 0!==n[i]&&(r[i]["--grid-column-gap"]=(0,A.getSpacing)(n[i])),r),{}),v=(0,h.getSortedBreakpoints)((0,d.keys)(c),l).filter(e=>(0,d.keys)(c[e.value]).length>0).map(e=>({query:"container"===o?`mantine-grid (min-width: ${l[e.value]})`:`(min-width: ${l[e.value]})`,styles:c[e.value]}));return(0,g.jsx)(f.InlineStyles,{styles:s,media:"container"===o?void 0:v,container:"container"===o?v:void 0,selector:r})}let D={gap:"md",columns:12},P=(0,t.createVarsResolver)((e,{justify:t,align:n,overflow:r})=>({root:{"--grid-justify":t,"--grid-align":n,"--grid-overflow":r}})),M=(0,o.factory)(e=>{let t=(0,n.useProps)("Grid",D,e),{classNames:o,className:s,style:d,styles:u,unstyled:h,vars:p,grow:m,gap:f,rowGap:v,columnGap:x,columns:b,align:y,justify:w,children:T,breakpoints:S,type:j,attributes:A,...M}=t,E=(0,r.useStyles)({name:"Grid",classes:c,props:t,className:s,style:d,classNames:o,styles:u,unstyled:h,attributes:A,vars:p,varsResolver:P}),z=(0,i.useRandomClassName)();return"container"===j&&S?(0,g.jsxs)(l,{value:{getStyles:E,grow:m,columns:b,breakpoints:S,type:j},children:[(0,g.jsx)(C,{selector:`.${z}`,...t}),(0,g.jsx)("div",{...E("container"),children:(0,g.jsx)(a.Box,{...E("root",{className:z}),...M,children:(0,g.jsx)("div",{...E("inner"),children:T})})})]}):(0,g.jsxs)(l,{value:{getStyles:E,grow:m,columns:b,breakpoints:S,type:j},children:[(0,g.jsx)(C,{selector:`.${z}`,...t}),(0,g.jsx)(a.Box,{...E("root",{className:z}),...M,children:(0,g.jsx)("div",{...E("inner"),children:T})})]})});M.classes=c,M.varsResolver=P,M.displayName="@mantine/core/Grid",M.Col=j,e.s(["Grid",0,M],20035)},67312,e=>{"use strict";var t=e.i(86473),n=e.i(891343),r={moreEventsButton:"m_c958249f",moreEventsDropdown:"m_fc2b9a3e",moreEventsList:"m_89f3254b"},i=e.i(424302),o=e.i(392862),a=e.i(284629),l=e.i(275519),s=e.i(44091),c=e.i(391466),d=e.i(541772),u=e.i(391398);let h={dropdownType:"popover"},p=(0,l.factory)(e=>{let l=(0,s.useProps)("MoreEvents",h,e),{classNames:p,className:m,style:f,styles:g,unstyled:v,vars:x,attributes:b,radius:y,dropdownType:w,events:T,moreEventsCount:S,popoverProps:j,modalProps:A,onDropdownClose:C,children:D,modalTitle:P,renderEventBody:M,renderEvent:E,id:z,labels:I,mode:B,onEventClick:V,...k}=l,[H,L]=(0,d.useDisclosure)(),O=(0,c.useStyles)({name:"MoreEvents",classes:r,props:l,className:m,style:f,classNames:p,styles:g,unstyled:v,attributes:b,vars:x,rootSelector:"moreEventsButton"}),_=()=>{L.close(),C?.()},Z=(0,u.jsx)("div",{...O("moreEventsList"),children:T.map(e=>(0,u.jsx)(n.ScheduleEvent,{radius:y,event:e,size:"md",renderEventBody:M,renderEvent:E,mode:B,onClick:V?t=>V(e,t):void 0,children:e.title},e.id))});return(0,u.jsxs)(u.Fragment,{children:["modal"===w&&(0,u.jsx)(i.Modal,{opened:H,onClose:_,unstyled:v,radius:y,title:P,...A,children:Z}),(0,u.jsxs)(o.Popover,{position:"bottom-start",width:260,opened:H,trapFocus:!0,returnFocus:!1,unstyled:v,disabled:j?.disabled||"modal"===w,radius:y,transitionProps:{transition:"pop",duration:120},offset:-46,id:z,...j,onChange:e=>{e||(j?.onChange?.(e),_())},children:[(0,u.jsx)(o.Popover.Target,{children:(0,u.jsx)(a.UnstyledButton,{...O("moreEventsButton"),mod:{static:"static"===B},onClick:()=>L.toggle(),...k,children:(0,t.getLabel)("moreLabel",I)(S)})}),(0,u.jsx)(o.Popover.Dropdown,{...O("moreEventsDropdown"),children:Z})]})]})});p.displayName="@mantine/schedule/MoreEvents",p.classes=r,e.s(["MoreEvents",0,p],67312)},922621,e=>{"use strict";var t=e.i(969610),n=e.i(813982),r=e.i(751198),i=e.i(532965);e.s(["getDayPositionedEvents",0,function({events:e,startTime:o,endTime:a,intervalMinutes:l,date:s}){let c=[],d=[];for(let u of(0,n.sortEvents)(e)){let e=(0,t.isAllDayEvent)({event:u,date:s}),n=0;for(;function({columns:e,columnIndex:n,event:i,allDay:o,date:a}){return!!e[n]&&e[n].some(e=>{let n=(0,t.isAllDayEvent)({event:e,date:a}),l=(0,r.isEventsOverlap)(e,i);return!o&&!n&&l})}({columns:c,columnIndex:n,event:u,allDay:e,date:s});)n++;c[n]||(c[n]=[]),c[n].push(u);let h=e?{top:0,height:100}:(0,i.getDayPosition)({event:u,startTime:o,endTime:a,intervalMinutes:l});d.push({...u,position:{...h,allDay:e,column:n,width:0,offset:0,overlaps:0}})}for(let e of d){let{allDay:t,column:n}=e.position;if(t){e.position.overlaps=1,e.position.width=100,e.position.offset=0;continue}let i=[];for(let t of d)t!==e&&!t.position.allDay&&(0,r.isEventsOverlap)(t,e)&&i.push(t);let o=n;for(let e of i)for(let t of(o=Math.max(o,e.position.column),d))t!==e&&!t.position.allDay&&(0,r.isEventsOverlap)(t,e)&&(o=Math.max(o,t.position.column));let a=o+1,l=a;for(let e of i)e.position.column>n&&e.position.column<l&&(l=e.position.column);let s=l-n;e.position.overlaps=a,e.position.width=s/a*100,e.position.offset=100*n/a}return d}])},200183,e=>{"use strict";var t=e.i(86473),n=e.i(27748),r=e.i(672654),i=e.i(898496),o=e.i(4332),a=e.i(969610),l=e.i(575148),s=e.i(792930),c=e.i(505696),d=e.i(657068),u=e.i(245086),h=e.i(783261),p=e.i(637079),m=e.i(376879),f=e.i(663551),g=e.i(312709),v=e.i(201867),x=e.i(891343),b=e.i(67312),y=e.i(966696),w=e.i(298008),T=e.i(68642),S=e.i(532965),j=e.i(922621),A=e.i(494834),C={dayView:"m_3c5fb2d5",dayViewHeader:"m_d27b4dc2",dayViewScrollArea:"m_f2eec5af",dayViewInner:"m_d5502881",dayViewTimeSlots:"m_9389813",dayViewSlot:"m_cd179e73",dayViewSlotLabels:"m_c30b0852",dayViewSlotLabel:"m_2f950041",dayViewSlots:"m_d5dc3060",dayViewBackgroundEvent:"m_c5cd9a77",dayViewAllDay:"m_c6f08d70",dayViewAllDayEvents:"m_42b986a9"},D=e.i(232471),P=e.i(19300),M=e.i(284629),E=e.i(481178),z=e.i(275519),I=e.i(433512),B=e.i(779177),V=e.i(951254),k=e.i(44091),H=e.i(62904),L=e.i(391466),O=e.i(417241),_=e.i(332977),Z=e.i(191788),R=e.i(205693),F=e.i(391398);let N={__staticSelector:"DayView",startTime:"00:00:00",endTime:"23:59:59",intervalMinutes:15,withSubHourGridLines:!0,withAllDaySlot:!0,slotLabelFormat:"HH:mm",headerFormat:"MMMM D, YYYY",withCurrentTimeBubble:!0,withHeader:!0,highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withEventResize:!1,mode:"default"},$=(0,E.createVarsResolver)((e,{radius:t,slotHeight:n,allDaySlotHeight:r})=>({dayView:{"--day-view-radius":void 0!==t?(0,I.getRadius)(t):void 0,"--day-view-slot-height":(0,B.rem)(n),"--day-view-all-day-slot-height":(0,B.rem)(r)}})),W=(0,z.factory)(e=>{let E=(0,k.useProps)("DayView",N,e),{classNames:z,className:I,style:B,styles:W,unstyled:Y,attributes:G,vars:U,__staticSelector:q,startTime:K,endTime:J,intervalMinutes:X,withSubHourGridLines:Q,withAllDaySlot:ee,date:et,locale:en,slotLabelFormat:er,headerFormat:ei,getCurrentTime:eo,withCurrentTimeIndicator:ea,withCurrentTimeBubble:el,withHeader:es,radius:ec,onDateChange:ed,onViewChange:eu,previousControlProps:eh,nextControlProps:ep,todayControlProps:em,viewSelectProps:ef,slotHeight:eg,allDaySlotHeight:ev,scrollAreaProps:ex,events:eb,moreEventsProps:ey,renderEventBody:ew,renderEvent:eT,labels:eS,highlightBusinessHours:ej,businessHours:eA,withEventsDragAndDrop:eC,onEventDrop:eD,canDragEvent:eP,onEventDragStart:eM,onEventDragEnd:eE,onTimeSlotClick:ez,onAllDaySlotClick:eI,onEventClick:eB,withDragSlotSelect:eV,onSlotDragEnd:ek,mode:eH,startScrollTime:eL,onExternalEventDrop:eO,withEventResize:e_,onEventResize:eZ,canResizeEvent:eR,recurrenceExpansionLimit:eF,getTimeSlotProps:eN,withAgenda:e$,...eW}=E,[eY,eG]=(0,Z.useState)(!1),eU=(0,L.useStyles)({name:q,classes:C,props:E,className:I,style:B,classNames:z,styles:W,unstyled:Y,attributes:G,vars:U,varsResolver:$,rootSelector:"dayView"}),{resolvedClassNames:eq,resolvedStyles:eK}=(0,H.useResolvedStylesApi)({classNames:z,styles:W,props:E}),eJ={classNames:eq,styles:eK,attributes:G,__staticSelector:q,radius:ec},eX=(0,V.useMantineTheme)(),eQ=(0,R.useDatesContext)(),e0=()=>eo?(0,A.default)(eo()):(0,A.default)(),e1=ea??(0,A.default)(et).isSame(e0(),"day"),e2=(0,i.getDayTimeIntervals)({startTime:K,endTime:J,intervalMinutes:X}),e8=(0,Z.useRef)([]),e4=(0,Z.useRef)(null),e6=(0,Z.useRef)(null),e3=(0,_.useMergedRef)(e4,ex?.viewportRef);(0,u.useAutoScrollOnDrag)({viewportRef:e4,enabled:(eC||!!eO)&&"static"!==eH}),(0,O.useIsomorphicEffect)(()=>{if(!eL||!e4.current||0===e8.current.length)return;let e=e2.findIndex(e=>e.startTime>=eL);if(e<0)return;let t=e8.current[e];if(!t)return;let n=t.getBoundingClientRect(),r=e4.current.getBoundingClientRect();e4.current.scrollTo({left:0,top:n.top-r.top})},[]);let e9=(0,Z.useCallback)(e=>{let t=e8.current.findIndex(t=>{if(!t)return!1;let n=t.getBoundingClientRect();return e.clientY>=n.top&&e.clientY<=n.bottom});if(t>=0)return t;let n=e8.current[0],r=e8.current[e8.current.length-1];if(!n||!r)return null;let i=n.getBoundingClientRect(),o=r.getBoundingClientRect();return e.clientY<i.top?0:e.clientY>o.bottom?e8.current.length-1:null},[]),e5=(0,m.useSlotDragSelect)({enabled:eV&&"static"!==eH,onDragEnd:(e,t)=>{if(!ek)return;let n=(0,A.default)(et).format("YYYY-MM-DD");ek(`${n} ${e2[e].startTime}`,`${n} ${e2[t].endTime}`)}}),e7=function({events:e,date:t,startTime:n,endTime:r,intervalMinutes:i}){if(void 0===e)return{allDayEvents:[],regularEvents:[],backgroundTimedEvents:[],backgroundAllDayEvents:[]};let o=new Set,l=[],s=[],c=(0,A.default)(t).startOf("day"),d=(0,A.default)(t).endOf("day");for(let t of e){let e=(0,A.default)(t.start),i=(0,A.default)(t.end),a=e.isSame(c,"day"),u=!a&&"background"===t.display&&e.isBefore(d)&&i.isAfter(c);if(a||u){if(a&&!(0,T.isEventInTimeRange)({event:t,startTime:n,endTime:r}))continue;let e=(0,w.validateEvent)(t);if(o.has(t.id))throw Error(`[@mantine/schedule] DayView: Duplicated event ids found: ${t.id}`);o.add(t.id),"background"===t.display?s.push(e):l.push(e)}}let u=(0,j.getDayPositionedEvents)({events:l,startTime:n,endTime:r,intervalMinutes:i,date:t}),h=[],p=[];for(let e of u)e.position.allDay?h.push(e):p.push(e);let m=[],f=[];for(let e of s){let o=(0,A.default)(e.start),l=(0,A.default)(e.end),s=o.isBefore(c)?c:o,u=l.isAfter(d)?d:l,h={...e,start:s.format("YYYY-MM-DD HH:mm:ss"),end:u.format("YYYY-MM-DD HH:mm:ss")};if((0,a.isAllDayEvent)({event:h,date:t}))f.push({...e,position:{top:0,height:100,allDay:!0,width:100,offset:0,column:0,overlaps:1}});else{let{top:t,height:o}=(0,S.getDayPosition)({event:h,startTime:n,endTime:r,intervalMinutes:i});if(o<=0)continue;m.push({...e,position:{top:t,height:o,allDay:!1,width:100,offset:0,column:0,overlaps:1}})}}return{allDayEvents:h,regularEvents:p,backgroundTimedEvents:m,backgroundAllDayEvents:f}}({events:(0,d.expandRecurringEvents)({events:eb,rangeStart:(0,A.default)(et).startOf("day").toDate(),rangeEnd:(0,A.default)(et).endOf("day").toDate(),expansionLimit:eF}),date:et,startTime:K,endTime:J,intervalMinutes:X}),te=(0,Z.useCallback)((e,t)=>{if(!eO)return;let n=(0,A.default)(et).format("YYYY-MM-DD");eO(e.dataTransfer,`${n} ${e2[t].startTime}`)},[eO,et,e2]),tt=(0,h.useDragDropHandlers)({enabled:eC,mode:eH,onEventDrop:eD,canDragEvent:eP,onEventDragStart:eM,onEventDragEnd:eE,calculateDropTarget:(e,t)=>{let n=e2[e].startTime;return(0,s.calculateDropTime)({draggedEvent:t,targetDate:et,targetSlotTime:n,intervalMinutes:X})},onExternalDrop:eO?te:void 0}),tn=(0,p.useEventResize)({enabled:e_,mode:eH,startTime:K,endTime:J,intervalMinutes:X,onEventResize:eZ,canResizeEvent:eR}),tr=(eC||!!eO)&&"static"!==eH,ti=e7.regularEvents.map(e=>{let t=(0,a.isAllDayEvent)({event:e,date:et}),n=!t&&tt.isDraggableEvent(e),r=!t&&tn.isResizableEvent(e),i=tn.getResizePosition(e.id),o=i?i.top:e.position.top,l=i?i.height:e.position.height;return(0,F.jsx)(x.ScheduleEvent,{event:e,renderEventBody:ew,renderEvent:eT,autoSize:!0,draggable:n,withResize:r,isResizing:null!==i,onResizeStart:r?(t,n)=>{e6.current&&tn.handleResizeStart({event:e,edge:t,container:e6.current,originalTop:e.position.top,originalHeight:e.position.height,eventDate:(0,A.default)(et).format("YYYY-MM-DD"),pointerEvent:n})}:void 0,mode:eH,onClick:eB?t=>{tn.wasResizing()||eB(e,t)}:void 0,...eJ,style:{...eJ.styles?.event,top:`${o}%`,height:`${l}%`,insetInlineStart:`${e.position.offset}%`,width:`${e.position.width}%`,position:"absolute"}},e.id)}),to=function({maxEvents:e,totalEvents:t}){return t<=e?{visibleEventsCount:t,hiddenEventsCount:0}:{visibleEventsCount:e-1,hiddenEventsCount:t-(e-1)}}({maxEvents:2,totalEvents:e7.allDayEvents.length}),ta=e7.allDayEvents.slice(0,to.visibleEventsCount).map(e=>(0,F.jsx)(x.ScheduleEvent,{event:e,renderEventBody:ew,renderEvent:eT,style:{maxHeight:"50%"},nowrap:!0,autoSize:!0,mode:eH,onClick:eB?t=>eB(e,t):void 0,...eJ},e.id)),tl=(0,A.default)(et).format("YYYY-MM-DD"),ts=e2.map((e,n)=>{let i=tt.isDropTarget(n),o=e5.isSlotSelected(n,tl),a=`${tl} ${e.startTime}`,l=`${tl} ${e.endTime}`,{onClick:s,...d}=eN?.({start:a,end:l})||{},u="static"===eH?void 0:e=>{ez?.({slotStart:a,slotEnd:l,nativeEvent:e}),s?.(e)};return(0,Z.createElement)(M.UnstyledButton,{...eU("dayViewSlot"),key:e.startTime,ref:e=>{e8.current[n]=e},mod:{first:0===n,"hour-start":e.isHourStart,...(0,c.getBusinessHoursMod)({time:e.startTime,businessHours:eA,highlightBusinessHours:ej}),"drop-target":i,"drag-selected":o,static:"static"===eH},__vars:{"--slot-size":`${(0,r.clampIntervalMinutes)(X)/60}`},"aria-label":`${(0,t.getLabel)("timeSlot",eS)} ${e.startTime} - ${e.endTime}`,tabIndex:"static"===eH?-1:0===n?0:-1,"data-drag-slot-index":eV&&"static"!==eH?n:void 0,"data-drag-slot-group":eV&&"static"!==eH?tl:void 0,onKeyDown:"static"===eH?void 0:e=>{let t;"ArrowDown"===(t=e.key)&&n<e2.length-1?(e.preventDefault(),e8.current[n+1]?.focus()):"ArrowUp"===t&&n>0&&(e.preventDefault(),e8.current[n-1]?.focus())},onPointerDown:eV&&"static"!==eH?e=>e5.handleSlotPointerDown(e,n,tl):void 0,onClick:u,onDragOver:tr?e=>e.preventDefault():void 0,...d})}),tc=e2.reduce((e,t)=>{if(t.isHourStart){let r=(0,A.default)(`${(0,A.default)(et).format("YYYY-MM-DD")} ${t.startTime}`),i=(0,n.formatDate)({locale:eQ.getLocale(en),date:r,format:er});e.push((0,Z.createElement)(D.Box,{...eU("dayViewSlotLabel"),key:t.startTime,mod:(0,c.getBusinessHoursMod)({time:t.startTime,businessHours:eA,highlightBusinessHours:ej})},i))}return e},[]),td=e7.backgroundAllDayEvents.map(e=>{let t=eX.variantColorResolver({color:e.color||eX.primaryColor,theme:eX,variant:"light",autoContrast:!0}),n="function"==typeof ew?ew(e):e.title,r={key:`bg-allday-${e.id}`,...eU("dayViewBackgroundEvent",{style:{top:0,height:"100%",width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:n};if("function"==typeof eT)return eT(e,r);let{key:i,...o}=r;return(0,F.jsx)(D.Box,{...o},i)}),tu=e7.backgroundTimedEvents.map(e=>{let t=eX.variantColorResolver({color:e.color||eX.primaryColor,theme:eX,variant:"light",autoContrast:!0}),n="function"==typeof ew?ew(e):e.title,r={key:e.id,...eU("dayViewBackgroundEvent",{style:{...(0,l.getTimeAxisEventStyle)({start:e.position.top,span:e.position.height,axis:"vertical"}),width:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:n};if("function"==typeof eT)return eT(e,r);let{key:i,...o}=r;return(0,F.jsx)(D.Box,{...o},i)}),th=(0,F.jsxs)(D.Box,{...eU("dayView"),mod:{static:"static"===eH,"slot-dragging":e5.isDragging,"hide-sub-hour-grid-lines":!Q,"event-interaction":tn.isResizing||tt.dragContextValue.isDragging},...eW,children:[es&&(0,F.jsx)(y.ScheduleHeaderBase,{view:"day",navigationHandlers:{previous:()=>(0,o.toDateString)((0,A.default)(et).subtract(1,"day")),next:()=>(0,o.toDateString)((0,A.default)(et).add(1,"day")),today:()=>(0,o.toDateString)(e0())},control:{title:(0,n.formatDate)({locale:eQ.getLocale(en),date:et,format:ei}),miw:140},labels:eS,onDateChange:ed,onViewChange:eu,previousControlProps:eh,nextControlProps:ep,todayControlProps:em,viewSelectProps:ef,stylesApiProps:eJ,onAgendaClick:e$?()=>eG(e=>!e):void 0,agendaActive:eY}),eY&&(0,F.jsx)(f.AgendaView,{rangeStart:(0,A.default)(et).startOf("day").format("YYYY-MM-DD"),rangeEnd:(0,A.default)(et).endOf("day").format("YYYY-MM-DD"),events:eb,locale:en,labels:eS,mode:eH,onEventClick:eB,recurrenceExpansionLimit:eF,...eJ}),!eY&&(0,F.jsx)(P.ScrollArea.Autosize,{scrollbarSize:4,...ex,...eU("dayViewScrollArea",{className:ex?.className,style:ex?.style}),viewportRef:e3,children:(0,F.jsxs)(D.Box,{...eU("dayViewInner"),children:[(0,F.jsxs)("div",{...eU("dayViewSlotLabels"),children:[ee&&(0,F.jsx)(D.Box,{...eU("dayViewSlotLabel"),mod:{"all-day":!0},children:(0,t.getLabel)("allDay",eS)}),tc]}),(0,F.jsxs)("div",{...eU("dayViewSlots"),children:[ee&&(0,F.jsxs)("div",{...eU("dayViewAllDay"),children:[td,(0,F.jsxs)("div",{...eU("dayViewAllDayEvents"),children:[ta,to.hiddenEventsCount>0&&(0,F.jsx)(b.MoreEvents,{events:e7.allDayEvents,moreEventsCount:to.hiddenEventsCount,renderEventBody:ew,renderEvent:eT,mode:eH,labels:eS,onEventClick:eB,...eJ,...ey})]}),(0,F.jsx)(M.UnstyledButton,{...eU("dayViewSlot"),mod:{"all-day":!0,static:"static"===eH},"aria-label":`${(0,t.getLabel)("timeSlot",eS)} ${(0,t.getLabel)("allDay",eS)}`,onClick:"static"!==eH&&eI?e=>{eI((0,A.default)(et).format("YYYY-MM-DD"),e)}:void 0})]}),(0,F.jsxs)("div",{ref:e6,...eU("dayViewTimeSlots"),onDragOver:tr?e=>{let t=e9(e);null!==t&&tt.handleDragOver(e,t)}:void 0,onDragLeave:tr?tt.handleDragLeave:void 0,onDrop:tr?e=>{let t=e9(e);null!==t&&tt.handleDrop(e,t)}:void 0,children:[tu,ti,e1&&(0,F.jsx)(g.CurrentTimeIndicator,{startOffset:"calc(var(--day-view-slot-labels-width) * -1)",endOffset:"0rem",topOffset:"0rem",timeBubbleStartOffset:"calc(var(--day-view-slot-labels-width) * -1 + 30px)",currentTimeFormat:er,withTimeBubble:el,withThumb:!el,locale:en,startTime:K,endTime:J,intervalMinutes:X,getCurrentTime:eo,...eJ}),ts]})]})]})})]});return eC?(0,F.jsx)(v.DragContext.Provider,{value:tt.dragContextValue,children:th}):th});W.displayName="@mantine/schedule/DayView",W.classes=C,W.varsResolver=$,e.s(["DayView",0,W],200183)},882151,e=>{"use strict";var t=e.i(648863),n=e.i(485108),r=e.i(431868),i=e.i(391398);let o={type:"configurator",component:function(e){return(0,i.jsx)(r.Tooltip,{label:"Tooltip",...e,children:(0,i.jsx)(n.Button,{children:"With tooltip"})})},code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip"{{props}}>
      <Button>With tooltip</Button>
    </Tooltip>
  );
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"}]};var a=e.i(191788);let l={type:"code",centered:!0,code:`
import { useState } from 'react';
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  const [opened, setOpened] = useState(true);

  return (
    <Tooltip label="Ctrl + J" opened={opened}>
      <Button onClick={() => setOpened((o) => !o)}>
        Toggle color scheme
      </Button>
    </Tooltip>
  );
}`,component:function(){let[e,t]=(0,a.useState)(!1);return(0,i.jsx)(r.Tooltip,{label:"Ctrl + J",opened:e,children:(0,i.jsx)(n.Button,{onClick:()=>t(e=>!e),children:"Toggle color scheme"})})}},s={type:"configurator",component:function(e){return(0,i.jsx)(r.Tooltip,{label:"Tooltip",withArrow:!0,opened:!0,position:"top-start",...e,children:(0,i.jsx)(n.Button,{children:"Button with tooltip"})})},code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip{{props}} label="Tooltip" withArrow opened position="top-start">
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"arrowPosition",initialValue:"center",libraryValue:"center",data:["center","side","merge"]},{type:"number",prop:"arrowOffset",initialValue:10,libraryValue:null,min:5,max:50},{type:"number",prop:"arrowSize",initialValue:4,libraryValue:null,min:2,max:8},{type:"number",prop:"arrowRadius",initialValue:0,libraryValue:0,min:0,max:10}]},c={type:"code",code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      multiline
      w={220}
      withArrow
      transitionProps={{ duration: 200 }}
      label="Use this button to save this information in your profile, after that you will be able to access it any time and share it via email."
    >
      <Button>Multiline tooltip</Button>
    </Tooltip>
  );
}
`,centered:!0,component:function(){return(0,i.jsx)(r.Tooltip,{multiline:!0,w:220,withArrow:!0,transitionProps:{duration:200},label:"Use this button to save this information in your profile, after that you will be able to access it any time and share it via email.",children:(0,i.jsx)(n.Button,{children:"Multiline tooltip"})})}};var d=e.i(257177),u=e.i(725695),h=e.i(412011),h=h,p=e.i(76112);let m={type:"code",component:function(){return(0,i.jsx)(u.Group,{justify:"center",style:{cursor:"default"},children:(0,p.keys)(h.transitions).map(e=>(0,i.jsx)(r.Tooltip,{label:e,transitionProps:{transition:e,duration:300},children:(0,i.jsx)(d.Badge,{variant:"light",children:e})},e))})}},f={type:"code",code:`
import { Button, Tooltip, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Tooltip label="Opened after 500ms" openDelay={500}>
        <Button>Delay open - 500ms</Button>
      </Tooltip>
      <Tooltip label="Closes after 500ms" closeDelay={500}>
        <Button>Delay close - 500ms</Button>
      </Tooltip>
    </Group>
  );
}
`,component:function(){return(0,i.jsxs)(u.Group,{justify:"center",children:[(0,i.jsx)(r.Tooltip,{label:"Opened after 500ms",openDelay:500,children:(0,i.jsx)(n.Button,{children:"Delay open - 500ms"})}),(0,i.jsx)(r.Tooltip,{label:"Closes after 500ms",closeDelay:500,children:(0,i.jsx)(n.Button,{children:"Delay close - 500ms"})})]})}};var g=e.i(232471);let v={type:"code",component:function(){return(0,i.jsx)(r.Tooltip.Floating,{label:"Floating tooltip",children:(0,i.jsx)(g.Box,{p:"xl",bg:"var(--mantine-color-blue-light)",style:{cursor:"default"},children:"Hover over the box to see tooltip"})})},code:`
import { Box, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Floating label="Floating tooltip">
      <Box p="xl" bg="var(--mantine-color-blue-light)" style={{ cursor: 'default' }}>
        Hover over the box to see tooltip
      </Box>
    </Tooltip.Floating>
  );
}
`,centered:!0},x={type:"code",component:function(){return(0,i.jsx)(r.Tooltip,{label:"Tooltip",children:(0,i.jsx)(n.Button,{children:"Button with tooltip"})})},centered:!0,code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip">
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`},b={type:"code",component:function(){return(0,i.jsx)(r.Tooltip.Group,{openDelay:500,closeDelay:100,children:(0,i.jsxs)(u.Group,{justify:"center",children:[(0,i.jsx)(r.Tooltip,{label:"Tooltip 1",children:(0,i.jsx)(n.Button,{children:"Button 1"})}),(0,i.jsx)(r.Tooltip,{label:"Tooltip 2",children:(0,i.jsx)(n.Button,{children:"Button 2"})}),(0,i.jsx)(r.Tooltip,{label:"Tooltip 3",children:(0,i.jsx)(n.Button,{children:"Button 3"})})]})})},code:`
import { Tooltip, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Tooltip.Group openDelay={500} closeDelay={100}>
      <Group justify="center">
        <Tooltip label="Tooltip 1">
          <Button>Button 1</Button>
        </Tooltip>
        <Tooltip label="Tooltip 2">
          <Button>Button 2</Button>
        </Tooltip>
        <Tooltip label="Tooltip 3">
          <Button>Button 3</Button>
        </Tooltip>
      </Group>
    </Tooltip.Group>
  );
}
`};var y=e.i(7883);let w={type:"configurator",component:function(e){return(0,i.jsx)(r.Tooltip,{label:"Tooltip",opened:!0,...e,children:(0,i.jsx)(n.Button,{children:"Button with tooltip"})})},code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip" opened{{props}}>
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`,centered:!0,controls:[{type:"select",prop:"position",initialValue:"top",data:y.FLOATING_POSITION_DATA,libraryValue:null},{type:"number",prop:"offset",initialValue:5,libraryValue:null,min:-50,max:50}]};var T=e.i(218262),S=e.i(883364);let j={type:"code",component:function(){return(0,i.jsxs)(S.Text,{children:["Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this Pokémon was hunted close to extinction by those who were after the priceless antlers."," ",(0,i.jsx)(r.Tooltip,{inline:!0,label:"Inline tooltip",children:(0,i.jsx)(T.Mark,{children:"When visiting a junkyard"})}),", you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s feathers glow in seven colors depending on the angle at which they are struck by light. These feathers are said to bring happiness to the bearers. This Pokémon is said to live at the foot of a rainbow."]})},code:`
import { Tooltip, Mark, Text } from '@mantine/core';

function Demo() {
  return (
    <Text>
      Stantler’s magnificent antlers were traded at high prices as works of art. As a result, this
      Pok\xe9mon was hunted close to extinction by those who were after the priceless antlers.{' '}
      <Tooltip inline label="Inline tooltip">
        <Mark>When visiting a junkyard</Mark>
      </Tooltip>
      , you may catch sight of it having an intense fight with Murkrow over shiny objects.Ho-Oh’s
      feathers glow in seven colors depending on the angle at which they are struck by light. These
      feathers are said to bring happiness to the bearers. This Pok\xe9mon is said to live at the foot
      of a rainbow.
    </Text>
  );
}
`},A={type:"code",centered:!0,component:function(){return(0,i.jsx)(r.Tooltip,{label:"top",position:"top",closeDelay:1500,children:(0,i.jsx)(r.Tooltip,{label:"bottom",position:"bottom",openDelay:500,closeDelay:1e3,children:(0,i.jsx)(r.Tooltip,{label:"left",position:"left",openDelay:1e3,closeDelay:500,children:(0,i.jsx)(r.Tooltip,{label:"right",position:"right",openDelay:1500,children:(0,i.jsx)(n.Button,{children:"Nested Tooltips"})})})})})},code:`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="top" position="top" closeDelay={1500}>
      <Tooltip label="bottom" position="bottom" openDelay={500} closeDelay={1000}>
        <Tooltip label="left" position="left" openDelay={1000} closeDelay={500}>
          <Tooltip label="right" position="right" openDelay={1500}>
            <Button>Nested Tooltips</Button>
          </Tooltip>
        </Tooltip>
      </Tooltip>
    </Tooltip>
  );
}
`},C={type:"configurator",component:function(e){return(0,i.jsx)(r.Tooltip,{position:e.position,opened:!0,label:"Tooltip",offset:{mainAxis:e.mainAxis,crossAxis:e.crossAxis},children:(0,i.jsx)(n.Button,{children:"Button with tooltip"})})},code:e=>`
import { Tooltip, Button } from '@mantine/core';

function Demo() {
  return (
    <Tooltip
      position="${e.position}"
      opened
      label="Tooltip"
      offset={{ mainAxis: ${e.mainAxis}, crossAxis: ${e.crossAxis} }}
    >
      <Button>Button with tooltip</Button>
    </Tooltip>
  );
}
`,centered:!0,controls:[{type:"select",prop:"position",initialValue:"top",data:y.FLOATING_POSITION_DATA,libraryValue:null},{type:"number",prop:"mainAxis",initialValue:5,libraryValue:null,min:-50,max:50},{type:"number",prop:"crossAxis",initialValue:0,libraryValue:null,min:-50,max:50}]},D={type:"code",component:function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Tooltip,{target:"#hover-me",label:"Tooltip over button"}),(0,i.jsx)(n.Button,{id:"hover-me",children:"Hover me to see tooltip"})]})},code:`
import { Button, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip target="#hover-me" label="Tooltip over button" />
      <Button id="hover-me">Hover me to see tooltip</Button>
    </>
  );
}
`,centered:!0};var P=(0,t.__exportAll)({arrow:()=>s,configurator:()=>o,controlled:()=>l,delay:()=>f,floating:()=>v,group:()=>b,inline:()=>j,multiline:()=>c,nested:()=>A,offset:()=>w,offsetAxis:()=>C,target:()=>D,transitions:()=>m,usage:()=>x});e.s(["TooltipDemos",0,P],882151)},79040,e=>{"use strict";var t=e.i(648863),n=e.i(391398),r=e.i(577824);let i=`
type FilterPropsRes<T extends Record<string, any>> = {
  [Key in keyof T]-?: T[Key] extends undefined ? never : T[Key];
};

export function filterProps<T extends Record<string, any>>(props: T) {
  return Object.keys(props).reduce<FilterPropsRes<T>>((acc, key: keyof T) => {
    if (props[key] !== undefined) {
      acc[key] = props[key];
    }
    return acc;
  }, {} as FilterPropsRes<T>);
}
`,o={type:"code",component:function(){return(0,n.jsx)(r.CodeHighlight,{code:i,language:"tsx",radius:"md"})},code:`
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`${i}\`;

function Demo() {
  return <CodeHighlight code={exampleCode} language="tsx" radius="md" />;
}
`};var a=e.i(137218);let l=`
import { Group, Button, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Button: Button.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button variant="danger">Danger variant</Button>
        <Button variant="primary">Primary variant</Button>
      </Group>
    </MantineProvider>
  );
}
`,s=`
.root {
  &[data-variant='danger'] {
    background-color: var(--mantine-color-red-9);
    color: var(--mantine-color-red-0);
  }

  &[data-variant='primary'] {
    background: linear-gradient(45deg, #4b6cb7 10%, #253b67 90%);
    color: var(--mantine-color-white);
  }
}
`,c={type:"code",component:function(){return(0,n.jsx)(a.CodeHighlightTabs,{radius:"md",code:[{fileName:"Demo.tsx",code:l,language:"tsx"},{fileName:"Demo.module.css",code:s,language:"scss"}]})},code:[{fileName:"Demo.tsx",code:`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { tsxCode, cssCode } from './code';

function Demo() {
  return (
    <CodeHighlightTabs
      radius="md"
      code={[
        { fileName: 'Demo.tsx', code: tsxCode, language: 'tsx' },
        { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
      ]}
    />
  );
}
`,language:"tsx"},{fileName:"code.ts",code:`
export const tsxCode = \`${l}\`;

export const cssCode = \`${s}\`;
`,language:"tsx"}]};var d=e.i(271270),u=e.i(999479);let h=`
function Button() {
  return <button>Click me</button>;
}
`,p=`
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`,m={type:"code",component:function(){return(0,n.jsx)(a.CodeHighlightTabs,{radius:"md",code:[{fileName:"Button.tsx",code:h,language:"tsx",icon:(0,n.jsx)(u.TypeScriptIcon,{size:14})},{fileName:"Button.module.css",code:p,language:"scss",icon:(0,n.jsx)(d.CssIcon,{size:14})}]})},code:`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons';

const tsxCode = \`${h}\`;

const cssCode = \`${p}\`;

function Demo() {
  const tsIcon = <TypeScriptIcon size={14} />;
  const cssIcon = <CssIcon size={14} />;

  return (
    <CodeHighlightTabs
      radius="md"
      code={[
        {
          fileName: 'Button.tsx',
          code: tsxCode,
          language: 'tsx',
          icon: tsIcon,
        },
        {
          fileName: 'Button.module.css',
          code: cssCode,
          language: 'scss',
          icon: cssIcon,
        },
      ]}
    />
  );
}
`},f=`
function Button() {
  return <button>Click me</button>;
}
`,g=`
.button {
  background-color: transparent;
  color: var(--mantine-color-blue-9);
}
`;function v(e){return e.endsWith(".ts")||e.endsWith(".tsx")?(0,n.jsx)(u.TypeScriptIcon,{size:14}):e.endsWith(".css")?(0,n.jsx)(d.CssIcon,{size:14}):null}let x={type:"code",component:function(){return(0,n.jsx)(a.CodeHighlightTabs,{getFileIcon:v,radius:"md",code:[{fileName:"Button.tsx",code:f,language:"tsx"},{fileName:"Button.module.css",code:g,language:"scss"}]})},code:`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon, CssIcon } from '@mantinex/dev-icons';

const tsxCode = \`${f}\`;

const cssCode = \`${g}\`;

function getFileIcon(fileName: string) {
  if (fileName.endsWith('.ts') || fileName.endsWith('.tsx')) {
    return <TypeScriptIcon size={14} />;
  }

  if (fileName.endsWith('.css')) {
    return <CssIcon size={14} />;
  }

  return null;
}

function Demo() {
  return (
    <CodeHighlightTabs
      getFileIcon={getFileIcon}
      radius="md"
      code={[
        {
          fileName: 'Button.tsx',
          code: tsxCode,
          language: 'tsx',
        },
        {
          fileName: 'Button.module.css',
          code: cssCode,
          language: 'scss',
        },
      ]}
    />
  );
}
`},b=`
import { Group, Button, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Button: Button.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button variant="danger">Danger variant</Button>
        <Button variant="primary">Primary variant</Button>
      </Group>
    </MantineProvider>
  );
}
`,y=`
.root {
  &[data-variant='danger'] {
    background-color: var(--mantine-color-red-9);
    color: var(--mantine-color-red-0);
  }

  &[data-variant='primary'] {
    background: linear-gradient(45deg, #4b6cb7 10%, #253b67 90%);
    color: var(--mantine-color-white);
  }
}
`,w={type:"code",component:function(){return(0,n.jsx)(a.CodeHighlightTabs,{withExpandButton:!0,defaultExpanded:!1,expandCodeLabel:"Show full code",collapseCodeLabel:"Show less",code:[{fileName:"Demo.tsx",code:b,language:"tsx"},{fileName:"Demo.module.css",code:y,language:"scss"}]})},code:[{fileName:"Demo.tsx",code:`
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { tsxCode, cssCode } from './code';

function Demo() {
  return (
    <CodeHighlightTabs
      withExpandButton
      defaultExpanded={false}
      expandLabel="Show full code"
      collapseLabel="Show less"
      code={[
        { fileName: 'Demo.tsx', code: tsxCode, language: 'tsx' },
        { fileName: 'Demo.module.css', code: cssCode, language: 'scss' },
      ]}
    />
  );
}
`,language:"tsx"},{fileName:"code.ts",code:`
export const tsxCode = \`${b}\`;

export const cssCode = \`${y}\`;
`,language:"tsx"}]},T=`
function Button() {
  return <button>Click me</button>;
}
`,S={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.CodeHighlight,{code:`// Custom copy label${T}`,language:"tsx",copyLabel:"Copy button code",copiedLabel:"Copied!",radius:"md"}),(0,n.jsx)(r.CodeHighlight,{code:`// Without copy button${T}`,language:"tsx",withCopyButton:!1,mt:"md",radius:"md"})]})},code:`
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`${T}\`;

function Demo() {
  return (
    <>
      <CodeHighlight
        code={\`// Custom copy label\${exampleCode}\`}
        language="tsx"
        copyLabel="Copy button code"
        copiedLabel="Copied!"
        radius="md"
      />
      <CodeHighlight
        code={\`// Without copy button\${exampleCode}\`}
        language="tsx"
        withCopyButton={false}
        mt="md"
        radius="md"
      />
    </>
  );
}
`};var j=e.i(883364),A=e.i(297800),C=e.i(481178),D=e.i(275519),P=e.i(433512),M=e.i(317477),E=e.i(44091),z=e.i(391466);let I=(0,C.createVarsResolver)((e,{background:t,radius:n})=>({inlineCodeHighlight:{"--ch-background":t?(0,M.getThemeColor)(t,e):void 0,"--ch-radius":void 0!==n?(0,P.getRadius)(n):void 0}})),B=(0,D.factory)(e=>{let t=(0,E.useProps)("InlineCodeHighlight",null,e),{classNames:i,className:o,style:a,styles:l,unstyled:s,vars:c,attributes:d,ref:u,...h}=t,p=(0,z.useStyles)({name:"InlineCodeHighlight",classes:A.default,props:t,className:o,style:a,classNames:i,styles:l,unstyled:s,attributes:d,vars:c,varsResolver:I,rootSelector:"inlineCodeHighlight"});return(0,n.jsx)(r.CodeHighlight,{...h,ref:u,...p("inlineCodeHighlight"),__inline:!0})});B.displayName="@mantine/code-highlight/InlineCodeHighlight",B.classes=A.default,B.varsResolver=I;let V={type:"code",component:function(){return(0,n.jsxs)(j.Text,{children:["You can highlight code inline:"," ",(0,n.jsx)(B,{code:'<InlineCodeHighlight code="" language="tsx" />',language:"tsx",withBorder:!0}),". Is that not cool?"]})},code:`
import { Text } from '@mantine/core';
import { InlineCodeHighlight } from '@mantine/code-highlight';

function Demo() {
  return (
    <Text>
      You can highlight code inline:{' '}
      <InlineCodeHighlight
        code='<InlineCodeHighlight code="" language="tsx" />'
        language="tsx"
        withBorder
      />
      . Is that not cool?
    </Text>
  );
}
`};var k=e.i(210200),H=e.i(191788),L=e.i(171481);let O=new Map([["bold",H.createElement(H.Fragment,null,H.createElement("path",{d:"M225.6,62.65l-88-48.18a19.91,19.91,0,0,0-19.2,0l-88,48.17A20,20,0,0,0,20,80.19v95.62a20,20,0,0,0,10.4,17.55l88,48.17a19.89,19.89,0,0,0,19.2,0l88-48.18A20,20,0,0,0,236,175.81V80.19A20,20,0,0,0,225.6,62.65ZM164,152v47.72l-24,13.14V135.11l72-39.42v22.92l-41.76,22.86A12,12,0,0,0,164,152ZM85.76,141.47,44,118.61V95.69l72,39.42v77.75L92,199.72V152A12,12,0,0,0,85.76,141.47ZM83.14,61.13l39.1,21.4a11.95,11.95,0,0,0,11.52,0l39.1-21.4L199,75.45l-71,38.87L57,75.45ZM128,36.57l19.87,10.88L128,58.33,108.13,47.45ZM44,146l24,13.14v27.47L44,173.44Zm144,40.61V159.11L212,146v27.47Z"}))],["duotone",H.createElement(H.Fragment,null,H.createElement("path",{d:"M32,125.73,80,152v54.84l-43.84-24a8,8,0,0,1-4.16-7ZM176,152v54.84l43.84-24a8,8,0,0,0,4.16-7v-50.1ZM124.16,25l-41,22.46h0L128,72l44.86-24.56L131.84,25A8,8,0,0,0,124.16,25Z",opacity:"0.2"}),H.createElement("path",{d:"M223.68,66.15,135.68,18a15.94,15.94,0,0,0-15.36,0l-88,48.18a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM168,152v50.09l-32,17.52V132.74l80-43.8v32l-43.84,24A8,8,0,0,0,168,152Zm-84.16-7L40,121v-32l80,43.8v86.87L88,202.09V152A8,8,0,0,0,83.84,145Zm-.7-88.41,41,22.45a8,8,0,0,0,7.68,0l41-22.45,34.48,18.87L128,118.88,48.66,75.44ZM128,32h0l28.2,15.44L128,62.89,99.8,47.45ZM40,139.22l32,17.52v36.59L40,175.82Zm144,54.11V156.74l32-17.52v36.6Z"}))],["fill",H.createElement(H.Fragment,null,H.createElement("path",{d:"M229.89,72.25v0l0,0a15.93,15.93,0,0,0-6.18-6.06L135.68,18a15.94,15.94,0,0,0-15.36,0l-88,48.18a15.93,15.93,0,0,0-6.18,6.06l0,0v0A16,16,0,0,0,24,80.18v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,229.89,72.25ZM120,219.61,88,202.09V152a8,8,0,0,0-4.16-7L40,121v-32l80,43.8Zm8-100.73L48.66,75.44,83.14,56.57l41,22.45a8,8,0,0,0,7.68,0l41-22.45,34.48,18.87Zm88,2.1-43.84,24a8,8,0,0,0-4.16,7v50.09l-32,17.52V132.74l80-43.8Z"}))],["light",H.createElement(H.Fragment,null,H.createElement("path",{d:"M222.72,67.91l-88-48.18a13.9,13.9,0,0,0-13.44,0l-88,48.17A14,14,0,0,0,26,80.18v95.64a14,14,0,0,0,7.28,12.28l88,48.17a13.92,13.92,0,0,0,13.44,0l88-48.17A14,14,0,0,0,230,175.82V80.18A14,14,0,0,0,222.72,67.91ZM128,121.16,44.49,75.44,83.14,54.29l42,23a6,6,0,0,0,5.76,0l42-23,38.65,21.15Zm-1-90.91a2,2,0,0,1,1.92,0l31.4,17.2L128,65.16,95.63,47.45ZM38,175.82v-40l36,19.7v41.16L39,177.57A2,2,0,0,1,38,175.82Zm48,27.46V152a6,6,0,0,0-3.12-5.26L38,122.17V85.57l84,46V223ZM134,223V131.56l84-46v36.6l-44.88,24.57A6,6,0,0,0,170,152v51.28Zm83-45.42-35,19.14V155.55l36-19.7v40A2,2,0,0,1,217,177.57Z"}))],["regular",H.createElement(H.Fragment,null,H.createElement("path",{d:"M223.68,66.15,135.68,18a15.94,15.94,0,0,0-15.36,0l-88,48.18a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM168,152v50.09l-32,17.52V132.74l80-43.8v32l-43.84,24A8,8,0,0,0,168,152Zm-84.16-7L40,121v-32l80,43.8v86.87L88,202.09V152A8,8,0,0,0,83.84,145Zm-.7-88.41,41,22.45a8,8,0,0,0,7.68,0l41-22.45,34.48,18.87L128,118.88,48.66,75.44ZM128,32h0l28.2,15.44L128,62.89,99.8,47.45ZM40,139.22l32,17.52v36.59L40,175.82Zm144,54.11V156.74l32-17.52v36.6Z"}))],["thin",H.createElement(H.Fragment,null,H.createElement("path",{d:"M221.76,69.66l-88-48.18a12,12,0,0,0-11.52,0l-88,48.18A12,12,0,0,0,28,80.18v95.64a12,12,0,0,0,6.24,10.52l88,48.18a11.95,11.95,0,0,0,11.52,0l88-48.18A12,12,0,0,0,228,175.82V80.18A12,12,0,0,0,221.76,69.66ZM128,123.44l-87.67-48L83.14,52l42.94,23.5a4,4,0,0,0,3.84,0L172.86,52l42.81,23.43ZM126.08,28.5a3.94,3.94,0,0,1,3.84,0l34.61,19L128,67.44l-36.53-20ZM36,175.82V132.47l40,21.9v45.72L38.08,179.33A4,4,0,0,1,36,175.82Zm48,28.65V152a4,4,0,0,0-2.08-3.51L36,123.35V82.19l88,48.18v96Zm48,21.89v-96l88-48.18v41.16l-45.92,25.14A4,4,0,0,0,172,152v52.47Zm85.92-47L180,200.09V154.37l40-21.9v43.35A4,4,0,0,1,217.92,179.33Z"}))]]),_=H.forwardRef((e,t)=>H.createElement(L.default,{ref:t,...e,weights:O}));_.displayName="CodesandboxLogoIcon";var Z=e.i(417063);let R=`
function greet() {
  return 'Hello, World!';
}
`,F={type:"code",component:function(){return(0,n.jsx)(r.CodeHighlight,{code:R,language:"tsx",radius:"md",controls:[(0,n.jsx)(Z.CodeHighlightControl,{component:"a",href:"https://codesandbox.io",target:"_blank",tooltipLabel:"Open on codesandbox",children:(0,n.jsx)(_,{})},"sandbox"),(0,n.jsx)(Z.CodeHighlightControl,{tooltipLabel:"Discuss with GPT",children:(0,n.jsx)(k.ChatCircleIcon,{})},"gpt")]})},code:`
import { CodesandboxLogoIcon, ChatCircleIcon } from '@phosphor-icons/react';
import { CodeHighlight, CodeHighlightControl } from '@mantine/code-highlight';

const exampleCode = \`${R}\`;

function Demo() {
  return (
    <CodeHighlight
      code={exampleCode}
      language="tsx"
      radius="md"
      controls={[
        <CodeHighlightControl
          component="a"
          href="https://codesandbox.io"
          target="_blank"
          tooltipLabel="Open on codesandbox"
          key="sandbox"
        >
          <CodesandboxLogoIcon />
        </CodeHighlightControl>,
        <CodeHighlightControl tooltipLabel="Discuss with GPT" key="gpt">
          <ChatCircleIcon />
        </CodeHighlightControl>,
      ]}
    />
  );
}
`},N=`
import { Group, Avatar, Text } from '@mantine/core';

interface ItemProps extends React.ComponentProps<'div'> {
  image: string;
  label: string;
  description: string;
}

const SelectItem = ({ image, label, description, ...others }: ItemProps) => (
  <div {...others}>
    <Group noWrap>
      <Avatar src={image} />
      <div>
        <Text size="sm">{label}</Text>
        <Text size="xs" opacity={0.65}>
          {description}
        </Text>
      </div>
    </Group>
  </div>
);
`,$={type:"code",component:function(){return(0,n.jsx)(r.CodeHighlight,{code:N,language:"tsx",withLineNumbers:!0})},code:`
import { CodeHighlight } from '@mantine/code-highlight';

const exampleCode = \`...\`;

function Demo() {
  return <CodeHighlight code={exampleCode} language="tsx" withLineNumbers />;
}
`};var W=(0,t.__exportAll)({copy:()=>S,customControl:()=>F,expand:()=>w,inline:()=>V,lineNumbers:()=>$,tabs:()=>c,tabsGetIcons:()=>x,tabsIcons:()=>m,usage:()=>o});e.s(["CodeHighlightDemos",0,W],79040)},540920,e=>{"use strict";var t=e.i(648863),n=e.i(754067),r=e.i(671640),i=e.i(883364),o=e.i(391398);let a={type:"code",code:`
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
`,component:function(){return(0,o.jsxs)(r.Stack,{gap:"md",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(i.Text,{size:"sm",fw:500,mb:5,children:"With accent-insensitive matching (default)"}),(0,o.jsx)(n.Highlight,{highlight:"cafe",children:"We visited café and cafe."})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(i.Text,{size:"sm",fw:500,mb:5,children:"With accent-sensitive matching (accentInsensitive={false})"}),(0,o.jsx)(n.Highlight,{highlight:"cafe",accentInsensitive:!1,children:"We visited café and cafe."})]})]})}},l={type:"code",code:`
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
`,component:function(){return(0,o.jsxs)(r.Stack,{gap:"md",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(i.Text,{size:"sm",fw:500,mb:5,children:"With case-insensitive matching (default)"}),(0,o.jsx)(n.Highlight,{highlight:"this",children:"Highlight This, definitely THIS and also this!"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(i.Text,{size:"sm",fw:500,mb:5,children:"With case-sensitive matching (caseInsensitive={false})"}),(0,o.jsx)(n.Highlight,{highlight:"this",caseInsensitive:!1,children:"Highlight This, definitely THIS and also this!"})]})]})}},s={type:"code",code:`
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
`,component:function(){return(0,o.jsx)(n.Highlight,{highlight:[{text:"error",color:"red"},{text:"warning",color:"yellow"},{text:"success",color:"green"}],children:"Error: Invalid input. Warning: Check this field. Success: All tests passed."})}},c={type:"code",code:`
import { Highlight } from '@mantine/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
`,component:function(){return(0,o.jsx)(n.Highlight,{highlight:["this","that"],children:"Highlight this and also that"})}},d={type:"code",code:`
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

`,centered:!0,component:function(){return(0,o.jsx)(n.Highlight,{component:"a",href:"https://mantine.dev",target:"_blank",highlight:"mantine",fw:500,c:"var(--mantine-color-anchor)",children:"Mantine website"})}},u={type:"code",code:`
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
`,component:function(){return(0,o.jsx)(n.Highlight,{ta:"center",highlight:["highlighted","default"],highlightStyles:{backgroundImage:"linear-gradient(45deg, var(--mantine-color-cyan-5), var(--mantine-color-indigo-5))",fontWeight:700,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"You can change styles of highlighted part if you do not like default styles"})}},h={type:"configurator",component:function(e){return(0,o.jsx)(n.Highlight,{maw:400,mx:"auto",...e})},code:`
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
`,component:function(){return(0,o.jsxs)(r.Stack,{gap:"md",children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)(i.Text,{size:"sm",fw:500,mb:5,children:["With whole word matching (wholeWord=","{","true","}",")"]}),(0,o.jsx)(n.Highlight,{highlight:"the",wholeWord:!0,children:"The theme is there"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(i.Text,{size:"sm",fw:500,mb:5,children:"Without whole word matching (default)"}),(0,o.jsx)(n.Highlight,{highlight:"the",children:"The theme is there"})]})]})}};var m=(0,t.__exportAll)({accentInsensitive:()=>a,caseInsensitive:()=>l,colors:()=>s,multiple:()=>c,props:()=>d,styles:()=>u,usage:()=>h,wholeword:()=>p});e.s(["HighlightDemos",0,m],540920)},150875,e=>{"use strict";var t=e.i(648863);let n=["Apple","Banana","Cherry","Date","Elderberry","Fig","Grape","Honeydew","Indian Fig","Jackfruit","Kiwi","Lemon","Mango","Nectarine","Orange","Papaya"],r=`export const data = [
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
];`;var i=e.i(257177),o=e.i(433512),a=e.i(481178),l=e.i(44091),s=e.i(391466),c=e.i(275519),d=e.i(232471);function u(e,t){if(!e.current)return null;let n=Array.from(e.current.children).filter(e=>t.current!==e);if(0===n.length)return null;let r=function(e){if(0===e.length)return{};let t={};return e.forEach(e=>{let n=e.getBoundingClientRect(),r=Math.round(n.top),i=Math.round(n.bottom);t[r]?t[r].bottom=Math.max(t[r].bottom,i):t[r]={elements:new Set,bottom:i,top:r},t[r].elements.add(e)}),t}(n);return{itemsSizesMap:r,rowPositions:Object.keys(r).map(Number),children:n}}var h=e.i(191788),p=e.i(730943),m={root:"m_f62ab2af"},f=e.i(417241),g=e.i(332977),v=e.i(391398);let x={maxRows:1,maxVisibleItems:1/0},b=(0,a.createVarsResolver)((e,{gap:t})=>({root:{"--ol-gap":(0,o.getSpacing)(t)}})),y=(0,c.genericFactory)(e=>{let t=(0,l.useProps)("OverflowList",x,e),{classNames:n,className:r,style:i,styles:o,unstyled:a,vars:c,attributes:y,data:w,renderOverflow:T,renderItem:S,maxRows:j,maxVisibleItems:A,collapseFrom:C,getItemKey:D,ref:P,...M}=t,E=(0,s.useStyles)({name:"OverflowList",classes:m,props:t,className:r,style:i,classNames:n,styles:o,unstyled:a,attributes:y,vars:c,varsResolver:b}),[z,I]=(0,h.useState)(w.length),[B,V]=(0,h.useState)(0),[k,H]=(0,h.useState)("normal"),L=(0,h.useRef)(null),O=(0,g.useMergedRef)(L,P),_=z-B,Z=w.length-_>0&&"measuring"!==k,R="start"===C,F=R?w.slice(0,w.length-_):w.slice(_),N=Z?T?.(F):null,$=(0,h.useRef)(null),W=(0,g.useMergedRef)($,N?.ref),Y=function(e){let t=(0,h.useRef)(null),[n,r]=(0,h.useState)(null);return(0,h.useEffect)(()=>{if(e.current)return t.current=new ResizeObserver(e=>{if(e[0]){let t=e[0];(0,p.flushSync)(()=>{r({width:t.borderBoxSize[0]?.inlineSize??t.target.clientWidth,height:t.borderBoxSize[0]?.blockSize??t.target.clientHeight,contentWidth:t.contentRect.width,contentHeight:t.contentRect.height})})}}),t.current.observe(e.current),()=>{t.current&&(t.current.disconnect(),t.current=null)}},[e.current]),n}(L);(0,f.useIsomorphicEffect)(()=>{H("measuring"),I(w.length),V(0)},[(0,h.useMemo)(()=>w.map((e,t)=>D?D(e,t):null!==e&&("object"==typeof e||"function"==typeof e)?t:String(e)).join("\0"),[w,D]),j,C]),(0,f.useIsomorphicEffect)(()=>{"measuring"===k&&(U(),H("measuring-overflow-indicator"))},[k]),(0,f.useIsomorphicEffect)(()=>{"measuring-overflow-indicator"!==k||q()||H("normal")},[k,B]),(0,f.useIsomorphicEffect)(()=>{"normal"===k&&(H("measuring"),V(0))},[Y]);let G=(e,t,n,r=0)=>{let i=1,o=0;for(let a=r;a<e.length;a+=1){let r=e[a],l=o>0?r+n:r;if(o+l>t&&o>0){if(++i>j)return!1;o=r}else o+=l}return!0},U=()=>{let e=u(L,$);if(!e)return;let t=L.current;if(!t)return;if(R){let n=t.getBoundingClientRect().width,r=parseFloat(getComputedStyle(t).columnGap)||0,i=e.children.map(e=>e.getBoundingClientRect().width),o=0;for(let e=i.length-1;e>=0&&G(i,n,r,e);e--)o=i.length-e;I(o=Math.min(o,A));return}if(1===w.length){let n=e.itemsSizesMap[e.rowPositions[0]].elements.values().next().value,r=t.getBoundingClientRect().width;(n?.getBoundingClientRect().width??0)>r?I(0):I(1);return}let n=e.rowPositions.slice(0,j).reduce((t,n)=>t+e.itemsSizesMap[n].elements.size,0);I(n=Math.min(n,A))},q=()=>{if(!$.current)return!1;let e=u(L,$);if(!e)return!1;let{rowPositions:t,itemsSizesMap:n}=e;if(R){let t=L.current;if(!t)return!1;let n=t.getBoundingClientRect().width,r=parseFloat(getComputedStyle(t).columnGap)||0;return!G([$.current.getBoundingClientRect().width,...e.children.map(e=>e.getBoundingClientRect().width)],n,r)&&(V(e=>e+1),!0)}let r=$.current.getBoundingClientRect();return r.top+r.height/2>n[t[t.length-1]].bottom&&(V(e=>e+1),!0)},K=N?(0,h.cloneElement)(N,{ref:W}):null,J=w;A&&(J=R?J.slice(-A):J.slice(0,A));let X=R?w.length-J.length:0;return(0,v.jsxs)(d.Box,{ref:O,...E("root"),...M,children:[R&&K,J.map((e,t)=>{if(!("measuring"===k||(R?t>=J.length-_:t<_)))return null;let n=X+t;return(0,v.jsx)(v.Fragment,{children:S(e,n)},n)}),!R&&K]})});y.displayName="@mantine/core/OverflowList",y.classes=m,y.varsResolver=b;let w={type:"code",component:function(){return(0,v.jsx)("div",{style:{resize:"horizontal",overflow:"auto",maxWidth:"100%"},children:(0,v.jsx)(y,{data:n,gap:4,renderOverflow:e=>(0,v.jsxs)(i.Badge,{children:["+",e.length," more"]}),renderItem:(e,t)=>(0,v.jsx)(i.Badge,{children:e},t)})})},code:[{fileName:"OverflowListDemo.tsx",code:`
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
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},T={type:"code",component:function(){return(0,v.jsx)("div",{style:{resize:"horizontal",overflow:"auto",maxWidth:500},children:(0,v.jsx)(y,{data:n,gap:4,maxRows:2,renderOverflow:e=>(0,v.jsxs)(i.Badge,{children:["+",e.length," more"]}),renderItem:(e,t)=>(0,v.jsx)(i.Badge,{children:e},t)})})},code:[{fileName:"OverflowListDemo.tsx",code:`
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
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},S={type:"code",component:function(){return(0,v.jsx)("div",{style:{resize:"horizontal",overflow:"auto",maxWidth:"100%"},children:(0,v.jsx)(y,{data:n,gap:4,maxVisibleItems:5,renderOverflow:e=>(0,v.jsxs)(i.Badge,{children:["+",e.length," more"]}),renderItem:(e,t)=>(0,v.jsx)(i.Badge,{children:e},t)})})},code:[{fileName:"OverflowListDemo.tsx",code:`
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
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},j={type:"code",component:function(){return(0,v.jsx)("div",{style:{resize:"horizontal",overflow:"auto",maxWidth:"100%"},children:(0,v.jsx)(y,{data:n,gap:4,collapseFrom:"start",renderOverflow:e=>(0,v.jsxs)(i.Badge,{children:["+",e.length," more"]}),renderItem:(e,t)=>(0,v.jsx)(i.Badge,{children:e},t)})})},code:[{fileName:"OverflowListDemo.tsx",code:`
import { Badge, OverflowList } from '@mantine/core';
import { data } from './data';

function Demo() {
  return (
    <div style={{ resize: 'horizontal', overflow: 'auto', maxWidth: '100%' }}>
      <OverflowList
        data={data}
        gap={4}
        collapseFrom="start"
        renderOverflow={(items) => <Badge>+{items.length} more</Badge>}
        renderItem={(item, index) => <Badge key={index}>{item}</Badge>}
      />
    </div>
  );
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]};var A=e.i(330573),C=e.i(369974);let D={type:"code",component:function(){return(0,v.jsx)("div",{style:{resize:"horizontal",overflow:"auto",maxWidth:"100%"},children:(0,v.jsx)(y,{data:n,gap:4,renderItem:(e,t)=>(0,v.jsx)(i.Badge,{children:e},t),renderOverflow:e=>(0,v.jsx)(A.Center,{children:(0,v.jsxs)(C.HoverCard,{children:[(0,v.jsx)(C.HoverCard.Target,{children:(0,v.jsxs)(i.Badge,{children:["+",e.length," more"]})}),(0,v.jsx)(C.HoverCard.Dropdown,{children:e.map((e,t)=>(0,v.jsx)("div",{children:e},t))})]})})})})},code:[{fileName:"OverflowListDemo.tsx",code:`
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
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]};var P=(0,t.__exportAll)({collapseFrom:()=>j,hoverCard:()=>D,maxRows:()=>T,maxVisibleItems:()=>S,usage:()=>w});e.s(["OverflowListDemos",0,P],150875)},841649,e=>{"use strict";var t=e.i(579560),n=e.i(191788);let r=/^(-?[\d.]+)px$/,i=/^(-?[\d.]+)rem$/,o=/^(-?[\d.]+)%$/;function a(e){return"string"==typeof e&&(r.test(e)||i.test(e))}function l(e){return"number"==typeof e?e:parseFloat(e)}function s(e){return e.panels.some(e=>a(e.defaultSize)||a(e.min)||a(e.max)||a(e.collapseThreshold))||a(e.step)||a(e.shiftStep)||(e.sizes?.some(a)??!1)}function c(){let e=parseFloat(getComputedStyle(document.documentElement).fontSize);return Number.isFinite(e)&&e>0?e:16}function d(e,t,n,a){if(!t)return l(e);if("number"==typeof e)return e/100*n;let s=o.exec(e);if(s)return parseFloat(s[1])/100*n;let c=i.exec(e);if(c)return parseFloat(c[1])*a;let d=r.exec(e);return d?parseFloat(d[1]):0}function u(e,t,n,r){if(!t)return 1;let i=0;return e.forEach(e=>{a(e)&&(i+=d(e,!0,n,r))}),i>n&&i>0?n/i:1}function h(e,t,n,r){if(!t)return e.map(e=>l(e));let i=0,o=0;e.forEach(e=>{a(e)?i+=d(e,!0,n,r):o+=l(e)});let s=Math.max(0,n-i),c=u(e,t,n,r);return e.map(e=>a(e)?d(e,!0,n,r)*c:o>0?l(e)/o*s:0)}function p(e,t,n,r,a,l=1){if(!n)return"string"==typeof t&&o.test(t)?`${e}%`:e;if("number"==typeof t)return r>0?e/r*100:t;if(o.test(t))return`${r>0?e/r*100:parseFloat(t)}%`;let s=l>0?e/l:e;return i.test(t)?`${a>0?s/a:0}rem`:`${s}px`}function m(e,t,n,r,i,o){let l=u(n,r,i,o),s=0;e.forEach((e,t)=>{a(n[t])&&(s+=e)});let c=l<1&&s<i-1e-6,d=c?1:l;return e.map((e,a)=>c||Math.abs(e-t[a])>1e-6?p(e,n[a],r,i,o,d):n[a])}function f(e,t,n,r){return{defaultSize:d(e.defaultSize,t,n,r),min:null!=e.min?d(e.min,t,n,r):0,max:null!=e.max?d(e.max,t,n,r):t?n:100,collapseThreshold:null!=e.collapseThreshold?d(e.collapseThreshold,t,n,r):void 0,collapsible:e.collapsible}}function g(e){return e.min??0}function v(e){return e.max??1/0}function x(e){return e.collapseThreshold??g(e)}function b(e,t,n,r){let i=[...e],o=n+1,a=i[n]+i[o],l=Math.min(v(t[n]),a-g(t[o])),s=Math.max(g(t[n]),a-v(t[o])),c=Math.min(Math.max(i[n]+r,s),l);return i[n]=c,i[o]=a-c,i}function y(e,t,n,r,i){if("function"==typeof i)return i({sizes:[...e],panels:t,handleIndex:n,delta:r});if("nearest"===i||"equal"===i){let o=("nearest"===i?function(e,t,n,r){let i=[...e];if(r>0){let e=Math.min(r,v(t[n])-i[n]),o=0;for(let r=n+1;r<i.length&&o<e;r+=1){let n=Math.min(i[r]-g(t[r]),e-o);i[r]-=n,o+=n}i[n]+=o}else if(r<0){let e=n+1,o=Math.min(Math.abs(r),v(t[e])-i[e]),a=0;for(let e=n;e>=0&&a<o;e-=1){let n=Math.min(i[e]-g(t[e]),o-a);i[e]-=n,a+=n}i[e]+=a}return i}:function(e,t,n,r){let i=[...e];if(r>0){let e=Math.min(r,v(t[n])-i[n]),o=[];for(let e=n+1;e<i.length;e+=1)i[e]>g(t[e])&&o.push(e);let a=e;for(;a>.001&&o.length>0;){let e=a/o.length,n=[];for(let r=0;r<o.length;r+=1){let l=o[r],s=i[l]-g(t[l]),c=Math.min(s,e);i[l]-=c,a-=c,s<=e+.001&&n.push(r)}for(let e=n.length-1;e>=0;e-=1)o.splice(n[e],1);if(0===n.length)break}i[n]+=e-a}else if(r<0){let e=n+1,o=Math.min(Math.abs(r),v(t[e])-i[e]),a=[];for(let e=n;e>=0;e-=1)i[e]>g(t[e])&&a.push(e);let l=o;for(;l>.001&&a.length>0;){let e=l/a.length,n=[];for(let r=0;r<a.length;r+=1){let o=a[r],s=i[o]-g(t[o]),c=Math.min(s,e);i[o]-=c,l-=c,s<=e+.001&&n.push(r)}for(let e=n.length-1;e>=0;e-=1)a.splice(n[e],1);if(0===n.length)break}i[e]+=o-l}return i})(e,t,n,r),a=n+1,l=t[n],s=t[a];if(l.collapsible&&o[n]<x(l)&&o[n]<e[n]){let e=o[n];o[a]+=e,o[n]=0}else if(s.collapsible&&o[a]<x(s)&&o[a]<e[a]){let e=o[a];o[n]+=e,o[a]=0}return o}let o=function(e,t,n,r){let i=n+1,o=t[n],a=t[i],l=e[n]+r,s=e[i]-r;if(o.collapsible&&l<x(o)&&l<e[n]){let t=[...e];return t[i]+=t[n],t[n]=0,t}if(a.collapsible&&s<x(a)&&s<e[i]){let t=[...e];return t[n]+=t[i],t[i]=0,t}return null}(e,t,n,r);return o||b(e,t,n,r)}e.s(["useSplitter",0,function(e){let{panels:r,orientation:i="horizontal",sizes:o,onSizeChange:a,onCollapseChange:u,redistribute:x,step:w=1,shiftStep:T=10,dir:S="ltr",resetOnDoubleClick:j=!0,enabled:A=!0}=e,C=s(e),D=r.map(e=>e.defaultSize),[P,M]=(0,t.useUncontrolled)({value:o,defaultValue:D,finalValue:D,onChange:a}),[E,z]=(0,n.useState)(-1),[I,B]=(0,n.useState)(0),V=(0,n.useRef)(e);V.current=e;let k=(0,n.useRef)({isDragging:!1,handleIndex:-1,startPointer:0,containerSize:0,rootFontSize:16,pixelMode:!1,startSizes:[],startRaw:[],preCollapseSizes:[]}),H=(0,n.useRef)(null),L=(0,n.useRef)(0),O=(0,n.useRef)(16),_=(0,n.useRef)(null),Z=(0,n.useRef)(0),R=(0,n.useRef)(P);R.current=P;let F=(0,n.useRef)(D),N=P.map(e=>0===l(e)),$=(0,n.useCallback)(()=>{let e=H.current;if(!e)return 0;let t=e.getBoundingClientRect();return(V.current.orientation??"horizontal")==="horizontal"?t.width:t.height},[]),W=(0,n.useCallback)(e=>{R.current=e,M(e)},[M]),Y=(0,n.useCallback)(e=>{if(!r[e]?.collapsible)return;let t=R.current;if(0===l(t[e]))return;let n=C?L.current||$():0,i=O.current,o=h(t,C,n,i);F.current=[...t];let a=o[e];o[e]=0,o[0===e?1:e-1]+=a,W(o.map((e,r)=>p(e,t[r],C,n,i))),u?.(e,!0)},[r,C,$,W,u]),G=(0,n.useCallback)(e=>{if(!r[e]?.collapsible)return;let t=R.current;if(0!==l(t[e]))return;let n=C?L.current||$():0,i=O.current,o=h(t,C,n,i),a=F.current,s=d(null!=a[e]&&0!==l(a[e])?a[e]:r[e].defaultSize,C,n,i),c=0===e?1:e-1,m=null!=r[c].min?d(r[c].min,C,n,i):0,f=Math.min(s,Math.max(0,o[c]-m));f<=0||(o[e]=f,o[c]-=f,W(o.map((e,r)=>p(e,t[r],C,n,i))),u?.(e,!1))},[r,C,$,W,u]),U=(0,n.useCallback)(e=>{0===l(R.current[e])?G(e):Y(e)},[Y,G]),q=(0,n.useCallback)((e,t,n,r)=>{let i=V.current.onCollapseChange;for(let o of n){let n=0===l(e[o]),a=0===t[o];!n&&a?(F.current=[...r],i?.(o,!0)):n&&!a&&i?.(o,!1)}},[]),K=(0,n.useCallback)(e=>{let t=R.current,n=e+1;if(e<0||n>=t.length)return;let r=C?L.current||$():0,i=O.current,o=h(t,C,r,i),a=V.current.panels.map(e=>f(e,C,r,i)),l=o[e]+o[n],s=a[e].defaultSize,c=s+a[n].defaultSize,d=b(o,a,e,(0===c?l/2:s/c*l)-o[e]);q(t,d,[e,n],t),W(m(d,o,t,C,r,i))},[q,W,C,$]),J=(0,n.useCallback)(e=>{H.current=e},[]);(0,n.useEffect)(()=>{if(!C||"u"<typeof ResizeObserver)return;let e=H.current;if(!e)return;let t=0,n=()=>{let t=e.getBoundingClientRect(),n=(V.current.orientation??"horizontal")==="horizontal"?t.width:t.height;O.current=c(),L.current=n,B(e=>e!==n?n:e)},r=new ResizeObserver(()=>{cancelAnimationFrame(t),t=requestAnimationFrame(n)});return r.observe(e),n(),()=>{cancelAnimationFrame(t),r.disconnect()}},[C,i]);let X=(0,n.useRef)(new Map),Q=(0,n.useRef)(new Map),ee=(0,n.useCallback)(e=>{if(X.current.has(e))return X.current.get(e);let t=t=>{let n=Q.current.get(e);if(n&&(n.abort(),Q.current.delete(e)),!t)return;let r=new AbortController;Q.current.set(e,r);let i=e=>{let t=k.current;if(!t.containerSize)return;let n=V.current,r=(n.orientation??"horizontal")==="horizontal",i=(r&&"rtl"===n.dir?-1:1)*((r?e.clientX:e.clientY)-t.startPointer),o=t.pixelMode?i:i/t.containerSize*100,a=n.panels.map(e=>f(e,t.pixelMode,t.containerSize,t.rootFontSize)),l=y(t.startSizes,a,t.handleIndex,o,n.redistribute);q(R.current,l,[t.handleIndex,t.handleIndex+1],t.startRaw);let s=m(l,t.startSizes,t.startRaw,t.pixelMode,t.containerSize,t.rootFontSize);R.current=s,M(s)},o=e=>{k.current.isDragging&&(cancelAnimationFrame(Z.current),Z.current=requestAnimationFrame(()=>{i(e)}))},a=e=>{let t=k.current;if(!t.isDragging)return;cancelAnimationFrame(Z.current),i(e),t.isDragging=!1;let n=t.handleIndex;t.handleIndex=-1,z(-1),document.body.style.userSelect="",document.body.style.webkitUserSelect="",document.body.style.cursor="",_.current?.abort(),_.current=null,V.current.onResizeEnd?.(n,[...R.current])};t.addEventListener("pointerdown",t=>{if(!1===V.current.enabled||0!==t.button)return;let n=H.current;if(!n)return;let r=V.current,i=(r.orientation??"horizontal")==="horizontal",l=n.getBoundingClientRect(),d=i?l.width:l.height,u=i?t.clientX:t.clientY,p=s(r),m=c(),f=k.current;f.isDragging=!0,f.handleIndex=e,f.startPointer=u,f.containerSize=d,f.rootFontSize=m,f.pixelMode=p,f.startRaw=[...R.current],f.startSizes=h(f.startRaw,p,d,m),f.preCollapseSizes=[...F.current],z(e),document.body.style.userSelect="none",document.body.style.webkitUserSelect="none",document.body.style.cursor=i?"col-resize":"row-resize",r.onResizeStart?.(e),_.current?.abort(),_.current=new AbortController;let g=_.current.signal;document.addEventListener("pointermove",o,{signal:g}),document.addEventListener("pointerup",a,{signal:g}),document.addEventListener("pointercancel",a,{signal:g})},{signal:r.signal})};return X.current.set(e,t),t},[M]),et=(0,n.useCallback)(e=>{let{index:t}=e,n=O.current,o=h(P,C,I,n),a=r.map(e=>f(e,C,I,n)),l=o[t]??0,s=a[t];return{ref:ee(t),role:"separator","aria-orientation":i,"aria-valuenow":Math.round(l),"aria-valuemin":Math.round(g(s)),"aria-valuemax":Math.round(v(s)),tabIndex:0,onKeyDown:e=>{if(!A)return;let n="horizontal"===i,o="rtl"===S,a=C?L.current||$():0,l=O.current,s=h(P,C,a,l),c=r.map(e=>f(e,C,a,l)),u=c[t],p=c[t+1],b=0,j=d(e.shiftKey?T:w,C,a,l);switch(e.key){case"ArrowLeft":if(!n)return;b=o?j:-j;break;case"ArrowRight":if(!n)return;b=o?-j:j;break;case"ArrowUp":if(n)return;b=-j;break;case"ArrowDown":if(n)return;b=j;break;case"Home":b=-(s[t]-g(u));break;case"End":b=v(u)-s[t];break;case"Enter":{let n=u?.collapsible,r=p?.collapsible;if(n&&s[t]<=s[t+1]){U(t),e.preventDefault();return}if(r){U(t+1),e.preventDefault();return}n&&(U(t),e.preventDefault());return}default:return}if(e.preventDefault(),0!==b){let e=y(s,c,t,b,x);q(P,e,[t,t+1],P),W(m(e,s,P,C,a,l))}},onDoubleClick:()=>{A&&j&&K(t)},"data-active":E===t||void 0,"data-orientation":i}},[i,P,r,C,I,A,S,w,T,j,E,x,$,ee,U,W,q,K]);return(0,n.useEffect)(()=>()=>{_.current?.abort(),_.current=null,Q.current.forEach(e=>e.abort()),Q.current.clear(),cancelAnimationFrame(Z.current),k.current.isDragging&&(k.current.isDragging=!1,document.body.style.userSelect="",document.body.style.webkitUserSelect="",document.body.style.cursor="")},[]),{ref:J,sizes:P,pixelMode:C,collapsed:N,activeHandle:E,getHandleProps:et,setSizes:W,collapse:Y,expand:G,toggleCollapse:U,reset:K}}])},151553,e=>{"use strict";var t=e.i(648863),n=e.i(779177),r=e.i(481178),i=e.i(317477),o=e.i(44091),a=e.i(391466),l=e.i(275519),s=e.i(232471),c=e.i(323283),d=e.i(191788),u=e.i(391398);function h(e){return(0,u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,u.jsx)("path",{d:"M8 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,u.jsx)("path",{d:"M8 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,u.jsx)("path",{d:"M8 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,u.jsx)("path",{d:"M14 5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,u.jsx)("path",{d:"M14 12a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,u.jsx)("path",{d:"M14 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"})]})}function p(e){return(0,u.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,u.jsx)("path",{d:"M4 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,u.jsx)("path",{d:"M4 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,u.jsx)("path",{d:"M11 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,u.jsx)("path",{d:"M11 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,u.jsx)("path",{d:"M18 9a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}),(0,u.jsx)("path",{d:"M18 15a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"})]})}let[m,f]=(0,e.i(386179).createSafeContext)("Splitter component was not found in the tree");var g={root:"m_19e66008",pane:"m_19e5428e",handle:"m_27f81bce",thumb:"m_22feb770"};let v=(0,l.factory)(e=>{let t=(0,o.useProps)("SplitterPane",null,e),{className:n,classNames:r,style:i,styles:a,vars:l,children:c,defaultSize:d,min:h,max:p,collapsible:m,collapseThreshold:g,__index:v,mod:x,...b}=t,y=f(),w=y.collapsed[v],T=y.getPaneStyle(v);return(0,u.jsx)(s.Box,{...y.getStyles("pane",{className:n,classNames:r,style:[T,i],styles:a,props:t}),mod:[{collapsed:w||void 0},x],...b,children:c})});v.classes=g,v.displayName="@mantine/core/SplitterPane";var x=e.i(332977),b=e.i(841649);let y=/^(-?[\d.]+)px$/,w=/^(-?[\d.]+)rem$/,T={orientation:"horizontal",lineSize:2,withHandle:!0,resetOnDoubleClick:!0},S=(0,r.createVarsResolver)((e,{lineSize:t,handleColor:r})=>({root:{"--splitter-line-size":(0,n.rem)(t),"--splitter-handle-color":r?(0,i.getThemeColor)(r,e):void 0}})),j=(0,l.factory)(e=>{let t=(0,o.useProps)("Splitter",T,e),{orientation:n,sizes:r,onSizeChange:i,onResizeStart:l,onResizeEnd:f,onCollapseChange:v,redistribute:j,step:A,shiftStep:C,lineSize:D,handleColor:P,handleIcon:M,withHandle:E,resetOnDoubleClick:z,splitterRef:I,children:B,className:V,classNames:k,style:H,styles:L,unstyled:O,vars:_,mod:Z,attributes:R,ref:F,...N}=t,{dir:$}=(0,c.useDirection)(),W=d.Children.toArray(B),Y=(0,b.useSplitter)({panels:W.map(e=>({defaultSize:e.props.defaultSize,min:e.props.min,max:e.props.max,collapsible:e.props.collapsible,collapseThreshold:e.props.collapseThreshold})),orientation:n,sizes:r,onSizeChange:i,onResizeStart:l,onResizeEnd:f,onCollapseChange:v,redistribute:j,step:A,shiftStep:C,dir:$,resetOnDoubleClick:z});(0,d.useImperativeHandle)(I,()=>Y,[Y]);let G=(0,x.useMergedRef)(F,Y.ref),U=(0,a.useStyles)({name:"Splitter",classes:g,props:t,className:V,style:H,classNames:k,styles:L,unstyled:O,attributes:R,vars:_,varsResolver:S}),q=void 0!==M?M:"vertical"===n?(0,u.jsx)(p,{}):(0,u.jsx)(h,{}),K=[];return W.forEach((e,t)=>{if(t>0){let e=Y.getHandleProps({index:t-1}),r=Y.activeHandle===t-1;K.push((0,d.createElement)(s.Box,{...U("handle"),key:`handle-${t-1}`,...e},E&&(0,u.jsx)("div",{...U("thumb"),"data-orientation":n,"data-active":r||void 0,children:q})))}K.push((0,d.cloneElement)(e,{key:`pane-${t}`,__index:t}))}),(0,u.jsx)(m,{value:{getStyles:U,sizes:Y.sizes,collapsed:Y.collapsed,orientation:n,getPaneStyle:e=>(function(e,t){let n="number"==typeof e?e:parseFloat(e);return t?"string"==typeof e&&(y.test(e)||w.test(e))?{flexGrow:0,flexShrink:1,flexBasis:e}:{flexGrow:n,flexShrink:1,flexBasis:0}:{flexBasis:`${n}%`}})(Y.sizes[e],Y.pixelMode)},children:(0,u.jsx)(s.Box,{ref:G,...U("root"),mod:[{orientation:n},Z],...N,children:K})})});j.classes=g,j.varsResolver=S,j.displayName="@mantine/core/Splitter",j.Pane=v;let A={type:"configurator",component:function(e){return(0,u.jsxs)(j,{...e,h:200,children:[(0,u.jsx)(j.Pane,{defaultSize:50,min:20,bg:"blue",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"First pane"}),(0,u.jsx)(j.Pane,{defaultSize:50,min:20,bg:"teal",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Second pane"})]})},code:`
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
}`,centered:!0,maxWidth:"100%",controls:[{prop:"orientation",type:"segmented",initialValue:"horizontal",libraryValue:"horizontal",data:[{value:"horizontal",label:"Horizontal"},{value:"vertical",label:"Vertical"}]}]},C={type:"code",component:function(){return(0,u.jsxs)(j,{h:200,children:[(0,u.jsx)(j.Pane,{defaultSize:"240px",min:"160px",max:"50%",bg:"blue",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Fixed 240px sidebar"}),(0,u.jsx)(j.Pane,{defaultSize:100,bg:"teal",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Flexible content"})]})},code:`
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
}`,centered:!0,maxWidth:"100%"},D={type:"code",component:function(){return(0,u.jsxs)(j,{orientation:"vertical",h:300,children:[(0,u.jsx)(j.Pane,{defaultSize:60,min:20,bg:"blue",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Top pane"}),(0,u.jsx)(j.Pane,{defaultSize:40,min:20,bg:"teal",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Bottom pane"})]})},code:`
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
}`,centered:!0,maxWidth:"100%"};var P=e.i(485108),M=e.i(725695);let E={type:"code",component:function(){let e=(0,d.useRef)(null);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(j,{splitterRef:e,h:200,children:[(0,u.jsx)(j.Pane,{defaultSize:30,min:20,collapsible:!0,bg:"blue",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Collapsible sidebar"}),(0,u.jsx)(j.Pane,{defaultSize:70,min:30,bg:"teal",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Main content"})]}),(0,u.jsx)(M.Group,{mt:"md",children:(0,u.jsx)(P.Button,{size:"xs",onClick:()=>e.current?.toggleCollapse(0),children:"Toggle sidebar"})})]})},code:`
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
}`,centered:!0,maxWidth:"100%"};var z=e.i(883364);let I={type:"code",component:function(){let[e,t]=(0,d.useState)([50,50]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(j,{sizes:e,onSizeChange:e=>t(e),h:200,children:[(0,u.jsxs)(j.Pane,{defaultSize:50,min:20,bg:"blue",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:["Panel A (",Math.round(e[0]),"%)"]}),(0,u.jsxs)(j.Pane,{defaultSize:50,min:20,bg:"teal",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:["Panel B (",Math.round(e[1]),"%)"]})]}),(0,u.jsxs)(z.Text,{size:"sm",mt:"sm",children:["Current sizes: [",e.map(e=>Math.round(e)).join(", "),"]"]}),(0,u.jsxs)(M.Group,{mt:"xs",children:[(0,u.jsx)(P.Button,{size:"xs",onClick:()=>t([30,70]),children:"30 / 70"}),(0,u.jsx)(P.Button,{size:"xs",onClick:()=>t([50,50]),children:"50 / 50"}),(0,u.jsx)(P.Button,{size:"xs",onClick:()=>t([70,30]),children:"70 / 30"})]})]})},code:`
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
}`,centered:!0,maxWidth:"100%"},B=["blue","teal","grape"],V=["First","Second","Third"],k={type:"code",component:function(){return(0,u.jsx)(j,{h:200,children:V.map((e,t)=>(0,u.jsx)(j.Pane,{defaultSize:1===t?50:25,min:10,bg:B[t],c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:e},e))})},code:`
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
}`,centered:!0,maxWidth:"100%"},H={type:"code",component:function(){return(0,u.jsxs)(j,{h:350,children:[(0,u.jsx)(j.Pane,{defaultSize:30,min:15,bg:"blue",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Sidebar"}),(0,u.jsx)(j.Pane,{defaultSize:70,min:30,children:(0,u.jsxs)(j,{orientation:"vertical",h:"100%",children:[(0,u.jsx)(j.Pane,{defaultSize:60,min:20,bg:"teal",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Editor"}),(0,u.jsx)(j.Pane,{defaultSize:40,min:20,bg:"grape",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Terminal"})]})})]})},code:`
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
}`,centered:!0,maxWidth:"100%"},L=["blue","teal","grape","orange"],O=["Panel A","Panel B","Panel C","Panel D"],_={type:"code",component:function(){return(0,u.jsx)(j,{redistribute:"nearest",h:200,children:O.map((e,t)=>(0,u.jsx)(j.Pane,{defaultSize:25,min:10,bg:L[t],c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:e},e))})},code:`
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
}`,centered:!0,maxWidth:"100%"},Z={type:"configurator",component:function(e){return(0,u.jsxs)(j,{...e,h:200,children:[(0,u.jsx)(j.Pane,{defaultSize:50,min:20,bg:"blue",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"First pane"}),(0,u.jsx)(j.Pane,{defaultSize:50,min:20,bg:"teal",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Second pane"})]})},code:`
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
}`,centered:!0,maxWidth:"100%",controls:[{prop:"lineSize",type:"number",initialValue:2,libraryValue:2,min:1,max:10,step:1}]},R={type:"code",component:function(){return(0,u.jsxs)(j,{withHandle:!1,h:200,children:[(0,u.jsx)(j.Pane,{defaultSize:50,min:20,bg:"blue",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"First pane"}),(0,u.jsx)(j.Pane,{defaultSize:50,min:20,bg:"teal",c:"white",fw:500,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:"Second pane"})]})},code:`
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
}`,centered:!0,maxWidth:"100%"};var F=(0,t.__exportAll)({collapsible:()=>E,controlled:()=>I,cssUnits:()=>C,lineSize:()=>Z,multiple:()=>k,nested:()=>H,redistribute:()=>_,usage:()=>A,vertical:()=>D,withHandle:()=>R});e.s(["SplitterDemos",0,F],151553)},705021,e=>{"use strict";var t=e.i(648863),n=e.i(960831),r=e.i(158178),i=e.i(391398);let o={type:"configurator",component:function(e){return(0,i.jsx)(r.Textarea,{...e,placeholder:"Input placeholder"})},code:`
import { Textarea } from '@mantine/core';


function Demo() {
  return (
    <Textarea
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:340,controls:n.inputControls},a={type:"code",code:`
import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <>
      <Textarea
        placeholder="Autosize with no rows limit"
        label="Autosize with no rows limit"
        autosize
        minRows={4}
      />

      <Textarea
        label="Autosize with 4 rows max"
        placeholder="Autosize with 4 rows max"
        autosize
        minRows={2}
        maxRows={4}
      />
    </>
  );
}

`,component:function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Textarea,{placeholder:"Autosize with no rows limit",label:"Autosize with no rows limit",autosize:!0,minRows:4}),(0,i.jsx)(r.Textarea,{label:"Autosize with 4 rows max",placeholder:"Autosize with 4 rows max",autosize:!0,minRows:2,maxRows:4,mt:"md"})]})},maxWidth:340,centered:!0},l={type:"code",component:function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.Textarea,{label:"Boolean error",placeholder:"Boolean error",error:!0}),(0,i.jsx)(r.Textarea,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"})]})},maxWidth:340,centered:!0,code:`
import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <>
      <Textarea label="Boolean error" placeholder="Boolean error" error />
      <Textarea
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
`},s={type:"code",component:function(){return(0,i.jsx)(r.Textarea,{label:"Textarea",placeholder:"Textarea",success:"Looks good!"})},code:`
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea label="Textarea" placeholder="Textarea" success="Looks good!" />;
}
`,maxWidth:340,centered:!0},c={type:"code",code:`
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea label="Disabled" placeholder="Your comment" disabled />;
}
`,component:function(){return(0,i.jsx)(r.Textarea,{label:"Disabled",placeholder:"Your comment",disabled:!0})},centered:!0,maxWidth:340};var d=e.i(123895),u=e.i(866338);let h=`
import { AtIcon } from '@phosphor-icons/react';
import { Textarea } from '@mantine/core';

function Demo() {
  return (
    <Textarea
      label="Label"
      placeholder="Textarea"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<AtIcon size={18} />}
      autosize
      {{props}}
    />
  );
}
`,p={type:"styles-api",data:u.TextareaStylesApi,component:function(e){return(0,i.jsx)(r.Textarea,{label:"Label",placeholder:"Textarea",description:"Description",error:"Error",withAsterisk:!0,leftSection:(0,i.jsx)(d.AtIcon,{size:18}),autosize:!0,...e})},code:h,centered:!0,maxWidth:340},m={type:"code",code:`
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea resize="vertical" label="Disabled" placeholder="Your comment" />;
}
`,component:function(){return(0,i.jsx)(r.Textarea,{resize:"vertical",label:"Disabled",placeholder:"Your comment"})},centered:!0,maxWidth:340},f={type:"code",component:function(){return(0,i.jsx)(r.Textarea,{placeholder:"Your comment",loading:!0})},code:`
import { Textarea } from '@mantine/core';

function Demo() {
  return <Textarea placeholder="Your comment" loading />;
}
`,centered:!0,maxWidth:340};var g=e.i(191788),v=e.i(883364);let x={type:"code",code:`
import { useState } from 'react';
import { Text, Textarea } from '@mantine/core';

function Demo() {
  const maxLength = 500;
  const [value, setValue] = useState('');

  return (
    <Textarea
      label="Your message"
      placeholder="Type your message..."
      autosize
      minRows={4}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value.slice(0, maxLength))}
      bottomSection={
        <Text size="xs" c="dimmed">
          {value.length}/{maxLength} characters
        </Text>
      }
    />
  );
}
`,component:function(){let[e,t]=(0,g.useState)("");return(0,i.jsx)(r.Textarea,{label:"Your message",placeholder:"Type your message...",autosize:!0,minRows:4,value:e,onChange:e=>t(e.currentTarget.value.slice(0,500)),bottomSection:(0,i.jsxs)(v.Text,{size:"xs",c:"dimmed",children:[e.length,"/",500," characters"]})})},maxWidth:340,centered:!0};var b=(0,t.__exportAll)({autosize:()=>a,bottomSection:()=>x,configurator:()=>o,disabled:()=>c,error:()=>l,loading:()=>f,resize:()=>m,stylesApi:()=>p,success:()=>s});e.s(["TextareaDemos",0,b],705021)},477180,e=>{"use strict";var t=e.i(648863),n=e.i(883364),r=e.i(391398);let i={type:"code",code:`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text size="xs">Extra small text</Text>
      <Text size="sm">Small text</Text>
      <Text size="md">Default text</Text>
      <Text size="lg">Large text</Text>
      <Text size="xl">Extra large text</Text>
      <Text fw={500}>Semibold</Text>
      <Text fw={700}>Bold</Text>
      <Text fs="italic">Italic</Text>
      <Text td="underline">Underlined</Text>
      <Text td="line-through">Strikethrough</Text>
      <Text c="dimmed">Dimmed text</Text>
      <Text c="blue">Blue text</Text>
      <Text c="teal.4">Teal 4 text</Text>
      <Text tt="uppercase">Uppercase</Text>
      <Text tt="capitalize">capitalized text</Text>
      <Text ta="center">Aligned to center</Text>
      <Text ta="right">Aligned to right</Text>
    </>
  );
}
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Text,{size:"xs",children:"Extra small text"}),(0,r.jsx)(n.Text,{size:"sm",children:"Small text"}),(0,r.jsx)(n.Text,{size:"md",children:"Default text"}),(0,r.jsx)(n.Text,{size:"lg",children:"Large text"}),(0,r.jsx)(n.Text,{size:"xl",children:"Extra large text"}),(0,r.jsx)(n.Text,{fw:500,children:"Semibold"}),(0,r.jsx)(n.Text,{fw:700,children:"Bold"}),(0,r.jsx)(n.Text,{fs:"italic",children:"Italic"}),(0,r.jsx)(n.Text,{td:"underline",children:"Underlined"}),(0,r.jsx)(n.Text,{td:"line-through",children:"Strikethrough"}),(0,r.jsx)(n.Text,{c:"dimmed",children:"Dimmed text"}),(0,r.jsx)(n.Text,{c:"blue",children:"Blue text"}),(0,r.jsx)(n.Text,{c:"teal.4",children:"Teal 4 text"}),(0,r.jsx)(n.Text,{tt:"uppercase",children:"Uppercase"}),(0,r.jsx)(n.Text,{tt:"capitalize",children:"capitalized text"}),(0,r.jsx)(n.Text,{ta:"center",children:"Aligned to center"}),(0,r.jsx)(n.Text,{ta:"right",children:"Aligned to right"})]})}};var o=e.i(232471);let a={type:"configurator",component:function(e){return(0,r.jsx)(o.Box,{maw:400,mx:"auto",children:(0,r.jsx)(n.Text,{...e,children:"From Bulbapedia: Bulbasaur is a small, quadrupedal Pokémon that has blue-green skin with darker patches. It has red eyes with white pupils, pointed, ear-like structures on top of its head, and a short, blunt snout with a wide mouth. A pair of small, pointed teeth are visible in the upper jaw when its mouth is open. Each of its thick legs ends with three sharp claws. On Bulbasaur's back is a green plant bulb, which is grown from a seed planted there at birth. The bulb also conceals two slender, tentacle-like vines and provides it with energy through photosynthesis as well as from the nutrient-rich seeds contained within."})})},code:`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text{{props}}>
      {/* Text content */}
    </Text>
  );
}
`,controls:[{prop:"size",type:"size",libraryValue:"md",initialValue:"md"},{prop:"lineClamp",type:"number",initialValue:4,libraryValue:null,min:1,max:10,step:1}]};var l=e.i(981377);let s={type:"code",code:`
import { Typography, Text } from '@mantine/core';

function Demo() {
  return (
    <Text lineClamp={3} component="div">
      <Typography>
        <h3>Line clamp with Typography</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed
          corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis
          non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum
          veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae
          perspiciatis.
        </p>
      </Typography>
    </Text>
  );
}
`,component:function(){return(0,r.jsx)(n.Text,{lineClamp:3,component:"div",children:(0,r.jsxs)(l.Typography,{children:[(0,r.jsx)("h3",{style:{marginTop:0},children:"Line clamp with Typography"}),(0,r.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae perspiciatis."})]})})}},c={type:"configurator",component:function(e){return(0,r.jsx)(n.Text,{size:"xl",fw:900,variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree},children:"Gradient Text"})},code:e=>`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text
      size="xl"
      fw={900}
      variant="gradient"
      gradient={{ from: '${e.gradientFrom}', to: '${e.gradientTo}', deg: ${e.gradientDegree} }}
    >
      Gradient Text
    </Text>
  );
}
`,centered:!0,controls:e.i(577830).gradientControls};var d=e.i(804052);let u={type:"code",component:function(){return(0,r.jsxs)(d.Title,{order:3,children:["Title in which you want to"," ",(0,r.jsx)(n.Text,{span:!0,c:"blue",inherit:!0,children:"highlight"})," ","something"]})},code:`
import { Text, Title } from '@mantine/core';

function Demo() {
  return <Title order={3}>Title in which you want to <Text span c="blue" inherit>highlight</Text> something</Title>;
}
`},h={type:"configurator",component:function(e){return(0,r.jsx)(o.Box,{w:300,children:(0,r.jsx)(n.Text,{...e,children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam perspiciatis excepturi iste sint itaque sunt laborum. Nihil?"})})},code:`
import { Text, Box } from '@mantine/core';

function Demo() {
  return (
    <Box w={300}>
      <Text{{props}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde provident eos fugiat id
        necessitatibus magni ducimus molestias. Placeat, consequatur. Quisquam, quae magnam
        perspiciatis excepturi iste sint itaque sunt laborum. Nihil?
      </Text>
    </Box>
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"truncate",data:["start","end"],initialValue:"end",libraryValue:null}]},p={type:"configurator",component:function(e){return(0,r.jsx)(n.Text,{...e,children:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!"})},code:`
import { Text } from '@mantine/core';

function Demo() {
  return (
    <Text{{props}}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi voluptatibus inventore iusto
      cum dolore molestiae perspiciatis! Totam repudiandae impedit maxime!
    </Text>
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"textWrap",initialValue:"wrap",libraryValue:"__",data:[{value:"wrap",label:"wrap"},{value:"balance",label:"balance"}]}]};var m=(0,t.__exportAll)({gradient:()=>c,inherit:()=>u,lineClamp:()=>s,linesConfigurator:()=>a,textWrap:()=>p,truncate:()=>h,usage:()=>i});e.s(["TextDemos",0,m],477180)},48125,e=>{"use strict";var t=e.i(391398),n=e.i(38856),r=e.i(79040),i=e.i(557455),o=e.i(625003),a=e.i(540920),l=e.i(830653),s=e.i(150875),c=e.i(302252),d=e.i(816093),u=e.i(755136),h=e.i(151553),p=e.i(705021),m=e.i(477180),f=e.i(882151),g=e.i(633331);e.i(603441);var v=e.i(62558);e.i(457450);var x=e.i(418026);let b=(0,v.Layout)(x.MDX_DATA.Changelog930);function y(e){let v={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.useMDXComponents)(),...e.components},{Demo:x,SponsorButton:b}=v;return x||w("Demo",!0),b||w("SponsorButton",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(v.h2,{id:"support-mantine-development",children:"Support Mantine development"}),"\n",(0,t.jsxs)(v.p,{children:["You can now sponsor Mantine development with ",(0,t.jsx)(v.a,{href:"https://opencollective.com/mantinedev",children:"OpenCollective"}),".\nAll funds are used to improve Mantine and create new features and components."]}),"\n",(0,t.jsx)(b,{}),"\n",(0,t.jsx)(v.h2,{id:"pagination-responsive-layout",children:"Pagination responsive layout"}),"\n",(0,t.jsxs)(v.p,{children:[(0,t.jsx)(v.a,{href:"/core/pagination/",children:"Pagination"})," component now supports ",(0,t.jsx)(v.code,{children:'layout="responsive"'}),' prop that uses CSS container\nqueries to switch between page number buttons and a compact "Page X of Y" label based on the available width.']}),"\n",(0,t.jsx)(x,{data:c.PaginationDemos.responsive}),"\n",(0,t.jsx)(v.h2,{id:"text-textwrap-prop",children:"Text textWrap prop"}),"\n",(0,t.jsxs)(v.p,{children:[(0,t.jsx)(v.a,{href:"/core/text/",children:"Text"})," and ",(0,t.jsx)(v.a,{href:"/core/blockquote/",children:"Blockquote"})," components now support\n",(0,t.jsx)(v.code,{children:"textWrap"})," prop that controls the ",(0,t.jsx)(v.code,{children:"text-wrap"})," CSS property. You can use it to balance line lengths\nor prevent orphaned words in paragraphs."]}),"\n",(0,t.jsx)(x,{data:m.TextDemos.textWrap}),"\n",(0,t.jsx)(v.h2,{id:"use-splitter-hook",children:"use-splitter hook"}),"\n",(0,t.jsxs)(v.p,{children:["New ",(0,t.jsx)(v.a,{href:"/hooks/use-splitter/",children:"use-splitter"})," hook provides resizable split-pane functionality\nwith pointer drag, keyboard navigation (WAI-ARIA Window Splitter pattern), collapsible panels\nand min/max constraints:"]}),"\n",(0,t.jsx)(x,{data:g.UseSplitterDemos.usage}),"\n",(0,t.jsx)(v.h2,{id:"splitter-component",children:"Splitter component"}),"\n",(0,t.jsxs)(v.p,{children:["New ",(0,t.jsx)(v.a,{href:"/core/splitter/",children:"Splitter"})," component provides declarative resizable split pane layout\nbuilt on top of the ",(0,t.jsx)(v.a,{href:"/hooks/use-splitter/",children:"use-splitter"})," hook:"]}),"\n",(0,t.jsx)(x,{data:h.SplitterDemos.usage}),"\n",(0,t.jsx)(v.h2,{id:"codehighlight-line-numbers",children:"CodeHighlight line numbers"}),"\n",(0,t.jsxs)(v.p,{children:[(0,t.jsx)(v.a,{href:"/x/code-highlight/",children:"CodeHighlight"})," component now supports ",(0,t.jsx)(v.code,{children:"withLineNumbers"})," prop\nto display line numbers alongside the code:"]}),"\n",(0,t.jsx)(x,{data:r.CodeHighlightDemos.lineNumbers}),"\n",(0,t.jsx)(v.h2,{id:"overflowlist-collapsefrom",children:"OverflowList collapseFrom"}),"\n",(0,t.jsxs)(v.p,{children:[(0,t.jsx)(v.a,{href:"/core/overflow-list/",children:"OverflowList"})," component now supports ",(0,t.jsx)(v.code,{children:"collapseFrom"})," prop that controls\nfrom which direction items are collapsed when they overflow. Set ",(0,t.jsx)(v.code,{children:'collapseFrom="start"'})," to\ncollapse items from the beginning – this is useful for breadcrumb-like patterns where\nthe last items should remain visible."]}),"\n",(0,t.jsx)(x,{data:s.OverflowListDemos.collapseFrom}),"\n",(0,t.jsx)(v.h2,{id:"textarea-bottomsection",children:"Textarea bottomSection"}),"\n",(0,t.jsxs)(v.p,{children:[(0,t.jsx)(v.a,{href:"/core/textarea/",children:"Textarea"})," component now supports ",(0,t.jsx)(v.code,{children:"bottomSection"})," prop that renders content\ninside the input border at the bottom. This is useful for displaying character counters\nor other supplementary information:"]}),"\n",(0,t.jsx)(x,{data:p.TextareaDemos.bottomSection}),"\n",(0,t.jsx)(v.h2,{id:"combobox-floatingheight",children:"Combobox floatingHeight"}),"\n",(0,t.jsxs)(v.p,{children:[(0,t.jsx)(v.a,{href:"/core/combobox/",children:"Combobox"}),", ",(0,t.jsx)(v.a,{href:"/core/select/",children:"Select"}),", ",(0,t.jsx)(v.a,{href:"/core/multi-select/",children:"MultiSelect"}),",\n",(0,t.jsx)(v.a,{href:"/core/autocomplete/",children:"Autocomplete"})," and ",(0,t.jsx)(v.a,{href:"/core/tags-input/",children:"TagsInput"})," now support\n",(0,t.jsx)(v.code,{children:'floatingHeight="viewport"'}),". When set, the dropdown grows to fill the available vertical\nspace in the viewport and the ",(0,t.jsx)(v.code,{children:"flip"})," middleware is disabled – useful when working with\nlarge option lists:"]}),"\n",(0,t.jsx)(x,{data:i.ComboboxDemos.floatingHeight}),"\n",(0,t.jsx)(v.h2,{id:"menu-submenu-safe-polygon",children:"Menu submenu safe polygon"}),"\n",(0,t.jsxs)(v.p,{children:[(0,t.jsx)(v.a,{href:"/core/menu/",children:"Menu"})," submenus now use a safe polygon when moving the cursor from\nthe parent item to the dropdown. This allows you to move the cursor diagonally\nacross other menu items without accidentally closing the submenu."]}),"\n",(0,t.jsx)(x,{data:l.MenuDemos.sub,demoProps:{defaultExpanded:!1}}),"\n",(0,t.jsx)(v.h2,{id:"menu-search",children:"Menu search"}),"\n",(0,t.jsxs)(v.p,{children:[(0,t.jsx)(v.a,{href:"/core/menu/",children:"Menu"})," now supports ",(0,t.jsx)(v.code,{children:"Menu.Search"})," – a search input that filters items\nwithout taking focus away from the input. Use ",(0,t.jsx)(v.code,{children:"ArrowUp"}),"/",(0,t.jsx)(v.code,{children:"ArrowDown"})," to move the\nhighlight, ",(0,t.jsx)(v.code,{children:"Enter"})," to trigger the highlighted item. Filtering logic is controlled\nby the user: pass ",(0,t.jsx)(v.code,{children:"value"}),"/",(0,t.jsx)(v.code,{children:"onChange"})," and filter ",(0,t.jsx)(v.code,{children:"Menu.Item"})," children based on the query.\nThe search value is cleared automatically after the menu close transition completes; set\n",(0,t.jsx)(v.code,{children:"clearSearchOnClose={false}"})," to keep the query between openings."]}),"\n",(0,t.jsx)(x,{data:l.MenuDemos.search}),"\n",(0,t.jsx)(v.h2,{id:"menu-checkbox-and-radio-items",children:"Menu checkbox and radio items"}),"\n",(0,t.jsxs)(v.p,{children:[(0,t.jsx)(v.a,{href:"/core/menu/",children:"Menu"})," now supports ",(0,t.jsx)(v.code,{children:"Menu.CheckboxItem"}),", ",(0,t.jsx)(v.code,{children:"Menu.RadioItem"}),", and ",(0,t.jsx)(v.code,{children:"Menu.RadioGroup"}),"\nfor building option menus. Checkbox and radio items render an indicator slot at the start\nand do not close the menu on click by default. The new ",(0,t.jsx)(v.code,{children:"alignItemsLabels"})," prop on ",(0,t.jsx)(v.code,{children:"Menu"}),"\ncontrols how indicator slot space is reserved so labels stay aligned when mixing plain\nand indicator items."]}),"\n",(0,t.jsx)(x,{data:l.MenuDemos.checkboxItem}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(x,{data:l.MenuDemos.radioItem}),"\n",(0,t.jsx)(v.h2,{id:"menu-context-menu",children:"Menu context menu"}),"\n",(0,t.jsxs)(v.p,{children:[(0,t.jsx)(v.a,{href:"/core/menu/",children:"Menu"})," now supports ",(0,t.jsx)(v.code,{children:"Menu.ContextMenu"})," – a target replacement that opens the\ndropdown at the cursor position when the wrapped element is right-clicked. The browser's\ndefault context menu is suppressed, and right-clicking again repositions the dropdown to\nthe new coordinates."]}),"\n",(0,t.jsx)(x,{data:l.MenuDemos.contextMenu}),"\n",(0,t.jsx)(v.h2,{id:"popover-context-menu",children:"Popover context menu"}),"\n",(0,t.jsxs)(v.p,{children:[(0,t.jsx)(v.a,{href:"/core/popover/",children:"Popover"})," now supports ",(0,t.jsx)(v.code,{children:"Popover.ContextMenu"})," – a target replacement that\nopens the dropdown at the cursor position on right-click. Unlike ",(0,t.jsx)(v.code,{children:"Menu.ContextMenu"}),",\n",(0,t.jsx)(v.code,{children:"Popover.Dropdown"})," can contain any content."]}),"\n",(0,t.jsx)(x,{data:u.PopoverDemos.contextMenu}),"\n",(0,t.jsx)(v.h2,{id:"menu-type-ahead-navigation",children:"Menu type-ahead navigation"}),"\n",(0,t.jsxs)(v.p,{children:["When focus is inside ",(0,t.jsx)(v.a,{href:"/core/menu/",children:"Menu"})," dropdown (and ",(0,t.jsx)(v.code,{children:"Menu.Search"})," is not used), pressing a\nprintable character key now moves focus to the next item whose label starts with the typed\ncharacter. Pressing the same character cycles through matches, and multiple characters typed\nwithin 500ms match items by full prefix."]}),"\n",(0,t.jsx)(x,{data:l.MenuDemos.usage}),"\n",(0,t.jsx)(v.h2,{id:"highlight-accent-and-case-insensitive-matching",children:"Highlight accent and case insensitive matching"}),"\n",(0,t.jsxs)(v.p,{children:[(0,t.jsx)(v.a,{href:"/core/highlight/",children:"Highlight"})," component now supports ",(0,t.jsx)(v.code,{children:"caseInsensitive"})," and ",(0,t.jsx)(v.code,{children:"accentInsensitive"}),"\nprops. Both are enabled by default – matching is case-insensitive and accent-insensitive,\nso ",(0,t.jsx)(v.code,{children:"cafe"})," matches ",(0,t.jsx)(v.code,{children:"café"}),", ",(0,t.jsx)(v.code,{children:"CAFÉ"}),", etc. Set either prop to ",(0,t.jsx)(v.code,{children:"false"})," to opt out:"]}),"\n",(0,t.jsx)(x,{data:a.HighlightDemos.accentInsensitive}),"\n",(0,t.jsx)(v.h2,{id:"piechart-and-donutchart-labelstypename",children:'PieChart and DonutChart labelsType="name"'}),"\n",(0,t.jsxs)(v.p,{children:[(0,t.jsx)(v.a,{href:"/charts/pie-chart/",children:"PieChart"})," and ",(0,t.jsx)(v.a,{href:"/charts/donut-chart/",children:"DonutChart"})," components now support\n",(0,t.jsx)(v.code,{children:'labelsType="name"'})," to display segment names as labels instead of values or percentages:"]}),"\n",(0,t.jsx)(x,{data:d.PieChartDemos.labelsTypeName}),"\n",(0,t.jsx)(v.h2,{id:"tooltip-merge-arrow-position",children:"Tooltip merge arrow position"}),"\n",(0,t.jsxs)(v.p,{children:[(0,t.jsx)(v.a,{href:"/core/tooltip/",children:"Tooltip"}),", ",(0,t.jsx)(v.a,{href:"/core/popover/",children:"Popover"})," and other components based on ",(0,t.jsx)(v.a,{href:"/core/popover/",children:"Popover"}),"\nnow support ",(0,t.jsx)(v.code,{children:'arrowPosition="merge"'}),". When set, the arrow forms a right triangle merged\nwith the corresponding corner of the dropdown, and the border radius of that corner is removed."]}),"\n",(0,t.jsx)(x,{data:f.TooltipDemos.arrow}),"\n",(0,t.jsx)(v.h2,{id:"popover-preventpositionchangewhenvisible-default",children:"Popover preventPositionChangeWhenVisible default"}),"\n",(0,t.jsxs)(v.p,{children:[(0,t.jsx)(v.a,{href:"/core/popover/",children:"Popover"})," and all components built on top of it (",(0,t.jsx)(v.a,{href:"/core/combobox/",children:"Combobox"}),",\n",(0,t.jsx)(v.a,{href:"/core/select/",children:"Select"}),", ",(0,t.jsx)(v.a,{href:"/core/multi-select/",children:"MultiSelect"}),", ",(0,t.jsx)(v.a,{href:"/core/autocomplete/",children:"Autocomplete"}),",\n",(0,t.jsx)(v.a,{href:"/core/tags-input/",children:"TagsInput"}),", ",(0,t.jsx)(v.a,{href:"/core/menu/",children:"Menu"}),", ",(0,t.jsx)(v.a,{href:"/core/hover-card/",children:"HoverCard"}),", ",(0,t.jsx)(v.a,{href:"/core/tooltip/",children:"Tooltip"}),",\n",(0,t.jsx)(v.a,{href:"/core/color-input/",children:"ColorInput"}),", date pickers and others) now treat ",(0,t.jsx)(v.code,{children:"preventPositionChangeWhenVisible"}),"\nas ",(0,t.jsx)(v.code,{children:"true"})," by default."]}),"\n",(0,t.jsxs)(v.p,{children:["With this behavior, the dropdown picks its side once on open – respecting the ",(0,t.jsx)(v.code,{children:"position"})," prop\nwhen there is enough room – and then stays on that side until the dropdown is closed. Scrolling,\nresizing, or changes to the dropdown content (for example narrowing a searchable ",(0,t.jsx)(v.code,{children:"Select"}),") no\nlonger cause the dropdown to flip between top and bottom while it is open. The next open recalculates\nthe side from scratch."]}),"\n",(0,t.jsxs)(v.p,{children:["The flip is also more predictable: when neither side fits, the dropdown falls back to the\npreferred ",(0,t.jsx)(v.code,{children:"position"})," prop instead of the side with marginally more space."]}),"\n",(0,t.jsxs)(v.p,{children:["To restore the previous behavior – where the dropdown could re-flip while open whenever\navailable space changed – pass ",(0,t.jsx)(v.code,{children:"preventPositionChangeWhenVisible={false}"}),":"]}),"\n",(0,t.jsx)(v.pre,{children:(0,t.jsx)(v.code,{className:"language-tsx",children:"<Select\n  comboboxProps={{ preventPositionChangeWhenVisible: false }}\n  data={['React', 'Angular', 'Svelte']}\n/>\n"})}),"\n",(0,t.jsx)(v.h2,{id:"schedule-getcurrenttime",children:"Schedule getCurrentTime"}),"\n",(0,t.jsxs)(v.p,{children:[(0,t.jsx)(v.a,{href:"/schedule/day-view/",children:"DayView"})," and ",(0,t.jsx)(v.a,{href:"/schedule/week-view/",children:"WeekView"})," components now support ",(0,t.jsx)(v.code,{children:"getCurrentTime"}),"\nprop – a function that returns the current time used by the current time indicator. It is called on\nevery tick, so the indicator keeps updating automatically. Combined with the timezone-agnostic event\nstrings, this allows displaying the indicator in any timezone without re-implementing the update loop:"]}),"\n",(0,t.jsx)(x,{data:o.DayViewDemos.timezone})]})}function w(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(b,{...e,children:(0,t.jsx)(y,{...e})})}])},471470,(e,t,n)=>{let r="/changelog/9-3-0";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(48125)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);