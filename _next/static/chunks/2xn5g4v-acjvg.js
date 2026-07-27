(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let a={};for(var i in e)t(a,i,{get:e[i],enumerable:!0});return n||t(a,Symbol.toStringTag,{value:"Module"}),a}])},257177,e=>{"use strict";var t=e.i(433512),n=e.i(481178),a=e.i(317477),i=e.i(44091),o=e.i(391466),r=e.i(956449),l=e.i(232471),s={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},c=e.i(391398);let d=(0,n.createVarsResolver)((e,{radius:n,color:i,gradient:o,variant:r,size:l,autoContrast:s,circle:c})=>{let d=e.variantColorResolver({color:i||e.primaryColor,theme:e,gradient:o,variant:r||"filled",autoContrast:s});return{root:{"--badge-height":(0,t.getSize)(l,"badge-height"),"--badge-padding-x":(0,t.getSize)(l,"badge-padding-x"),"--badge-fz":(0,t.getSize)(l,"badge-fz"),"--badge-radius":c||void 0===n?void 0:(0,t.getRadius)(n),"--badge-bg":i||r?d.background:void 0,"--badge-color":i||r?d.color:void 0,"--badge-bd":i||r?d.border:void 0,"--badge-dot-color":"dot"===r?(0,a.getThemeColor)(i,e):void 0}}}),u=(0,r.polymorphicFactory)(e=>{let t=(0,i.useProps)("Badge",null,e),{classNames:n,className:a,style:r,styles:u,unstyled:m,vars:h,radius:p,color:f,gradient:g,leftSection:b,rightSection:v,children:x,variant:y,fullWidth:T,autoContrast:w,circle:j,mod:D,attributes:A,...S}=t,C=(0,o.useStyles)({name:"Badge",props:t,classes:s,className:a,style:r,classNames:n,styles:u,unstyled:m,attributes:A,vars:h,varsResolver:d});return(0,c.jsxs)(l.Box,{variant:y,mod:[{block:T,circle:j,"with-right-section":!!v,"with-left-section":!!b},D],...C("root",{variant:y}),...S,children:[b&&(0,c.jsx)("span",{...C("section"),"data-position":"left",children:b}),(0,c.jsx)("span",{...C("label"),children:x}),v&&(0,c.jsx)("span",{...C("section"),"data-position":"right",children:v})]})});u.classes=s,u.varsResolver=d,u.displayName="@mantine/core/Badge",e.s(["Badge",0,u],257177)},960831,e=>{"use strict";e.s(["inputControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}],"inputOnlyControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],"inputWrapperOnlyControls",0,[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}]])},653122,e=>{"use strict";var t=e.i(433512),n=e.i(481178),a=e.i(44091),i=e.i(391466),o=e.i(425254),r=e.i(275519),l=e.i(232471),s=e.i(956031),c=e.i(191788),d=e.i(579560),u=e.i(391398);let m=(0,r.genericFactory)(e=>{let{value:t,defaultValue:n,onChange:i,multiple:o,children:r}=(0,a.useProps)("ChipGroup",null,e),[l,s]=(0,d.useUncontrolled)({value:t,defaultValue:n,finalValue:o?[]:null,onChange:i});return(0,u.jsx)(h,{value:{isChipSelected:e=>Array.isArray(l)?l.includes(e):e===l,onChange:e=>{let t=e.currentTarget.value;Array.isArray(l)?s(l.includes(t)?l.filter(e=>e!==t):[...l,t]):s(t)},multiple:o},children:r})});m.displayName="@mantine/core/ChipGroup";let h=(0,c.createContext)(null);var p={root:"m_f59ffda3",label:"m_be049a53","label--outline":"m_3904c1af","label--filled":"m_fa109255","label--light":"m_f7e165c3",iconWrapper:"m_9ac86df9",checkIcon:"m_d6d72580",input:"m_bde07329"},f=e.i(107315);let g={type:"checkbox"},b=(0,n.createVarsResolver)((e,{size:n,radius:a,variant:i,color:o,autoContrast:r})=>{let l=e.variantColorResolver({color:o||e.primaryColor,theme:e,variant:i||"filled",autoContrast:r});return{root:{"--chip-fz":(0,t.getFontSize)(n),"--chip-size":(0,t.getSize)(n,"chip-size"),"--chip-radius":void 0===a?void 0:(0,t.getRadius)(a),"--chip-checked-padding":(0,t.getSize)(n,"chip-checked-padding"),"--chip-padding":(0,t.getSize)(n,"chip-padding"),"--chip-icon-size":(0,t.getSize)(n,"chip-icon-size"),"--chip-bg":o||i?l.background:void 0,"--chip-hover":o||i?l.hover:void 0,"--chip-color":o||i?l.color:void 0,"--chip-bd":o||i?l.border:void 0,"--chip-spacing":(0,t.getSize)(n,"chip-spacing")}}}),v=(0,r.factory)(e=>{let t=(0,a.useProps)("Chip",g,e),{classNames:n,className:r,style:m,styles:v,unstyled:x,vars:y,id:T,checked:w,defaultChecked:j,onChange:D,value:A,wrapperProps:S,type:C,disabled:M,children:k,size:E,variant:I,icon:P,rootRef:H,autoContrast:V,mod:z,attributes:R,...L}=t,B=(0,i.useStyles)({name:"Chip",classes:p,props:t,className:r,style:m,classNames:n,styles:v,unstyled:x,attributes:R,vars:y,varsResolver:b}),O=(0,c.use)(h),_=(0,f.useId)(T),{styleProps:Y,rest:F}=(0,o.extractStyleProps)(L),[Z,N]=(0,d.useUncontrolled)({value:w,defaultValue:j,finalValue:!1,onChange:D}),W=O?{checked:O.isChipSelected(A),onChange:e=>{O.onChange(e),D?.(e.currentTarget.checked)},type:O.multiple?"checkbox":"radio"}:{},$=W.checked||Z;return(0,u.jsxs)(l.Box,{size:E,variant:I,ref:H,mod:z,...B("root"),...Y,...S,children:[(0,u.jsx)("input",{type:C,...B("input"),checked:$,onChange:e=>N(e.currentTarget.checked),id:_,disabled:M,value:A,...W,...F}),(0,u.jsxs)(l.Box,{component:"label",htmlFor:_,mod:{checked:$,disabled:M},...B("label",{variant:I||"filled"}),children:[$&&null!==P&&!1!==P&&(0,u.jsx)("span",{...B("iconWrapper"),children:void 0===P?(0,u.jsx)(s.CheckIcon,{...B("checkIcon")}):P}),(0,u.jsx)("span",{children:k})]})]})});v.classes=p,v.varsResolver=b,v.displayName="@mantine/core/Chip",v.Group=m,e.s(["Chip",0,v],653122)},915793,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M116,36V20a12,12,0,0,1,24,0V36a12,12,0,0,1-24,0Zm80,92a68,68,0,1,1-68-68A68.07,68.07,0,0,1,196,128Zm-24,0a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,128ZM51.51,68.49a12,12,0,1,0,17-17l-12-12a12,12,0,0,0-17,17Zm0,119-12,12a12,12,0,0,0,17,17l12-12a12,12,0,1,0-17-17ZM196,72a12,12,0,0,0,8.49-3.51l12-12a12,12,0,0,0-17-17l-12,12A12,12,0,0,0,196,72Zm8.49,115.51a12,12,0,0,0-17,17l12,12a12,12,0,0,0,17-17ZM48,128a12,12,0,0,0-12-12H20a12,12,0,0,0,0,24H36A12,12,0,0,0,48,128Zm80,80a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V220A12,12,0,0,0,128,208Zm108-92H220a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z",opacity:"0.2"}),t.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M122,40V16a6,6,0,0,1,12,0V40a6,6,0,0,1-12,0Zm68,88a62,62,0,1,1-62-62A62.07,62.07,0,0,1,190,128Zm-12,0a50,50,0,1,0-50,50A50.06,50.06,0,0,0,178,128ZM59.76,68.24a6,6,0,1,0,8.48-8.48l-16-16a6,6,0,0,0-8.48,8.48Zm0,119.52-16,16a6,6,0,1,0,8.48,8.48l16-16a6,6,0,1,0-8.48-8.48ZM192,70a6,6,0,0,0,4.24-1.76l16-16a6,6,0,0,0-8.48-8.48l-16,16A6,6,0,0,0,192,70Zm4.24,117.76a6,6,0,0,0-8.48,8.48l16,16a6,6,0,0,0,8.48-8.48ZM46,128a6,6,0,0,0-6-6H16a6,6,0,0,0,0,12H40A6,6,0,0,0,46,128Zm82,82a6,6,0,0,0-6,6v24a6,6,0,0,0,12,0V216A6,6,0,0,0,128,210Zm112-88H216a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M124,40V16a4,4,0,0,1,8,0V40a4,4,0,0,1-8,0Zm64,88a60,60,0,1,1-60-60A60.07,60.07,0,0,1,188,128Zm-8,0a52,52,0,1,0-52,52A52.06,52.06,0,0,0,180,128ZM61.17,66.83a4,4,0,0,0,5.66-5.66l-16-16a4,4,0,0,0-5.66,5.66Zm0,122.34-16,16a4,4,0,0,0,5.66,5.66l16-16a4,4,0,0,0-5.66-5.66ZM192,68a4,4,0,0,0,2.83-1.17l16-16a4,4,0,1,0-5.66-5.66l-16,16A4,4,0,0,0,192,68Zm2.83,121.17a4,4,0,0,0-5.66,5.66l16,16a4,4,0,0,0,5.66-5.66ZM40,124H16a4,4,0,0,0,0,8H40a4,4,0,0,0,0-8Zm88,88a4,4,0,0,0-4,4v24a4,4,0,0,0,8,0V216A4,4,0,0,0,128,212Zm112-88H216a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Z"}))]]),i=t.forwardRef((e,i)=>t.createElement(n.default,{ref:i,...e,weights:a}));i.displayName="SunIcon",e.s(["SunIcon",0,i],915793)},692385,e=>{"use strict";var t=e.i(852361),n=e.i(191788);let a={min:-1/0,max:1/0};e.s(["useCounter",0,function(e=0,i){let{min:o,max:r,step:l=1}={...a,...i},s=Math.abs(l),[c,d]=(0,n.useState)((0,t.clamp)(e,o,r));return[c,{increment:(0,n.useCallback)(()=>d(e=>(0,t.clamp)(e+s,o,r)),[o,r,s]),decrement:(0,n.useCallback)(()=>d(e=>(0,t.clamp)(e-s,o,r)),[o,r,s]),set:(0,n.useCallback)(e=>d((0,t.clamp)(e,o,r)),[o,r]),reset:(0,n.useCallback)(()=>d((0,t.clamp)(e,o,r)),[e,o,r])}]}])},400117,e=>{"use strict";var t=e.i(951254),n=e.i(839608);let a=["xs","sm","md","lg","xl"];e.s(["useMatches",0,function(e,i){let o=(0,t.useMantineTheme)();var r=a[[(0,n.useMediaQuery)(`(min-width: ${o.breakpoints.xs})`,!1,i),(0,n.useMediaQuery)(`(min-width: ${o.breakpoints.sm})`,!1,i),(0,n.useMediaQuery)(`(min-width: ${o.breakpoints.md})`,!1,i),(0,n.useMediaQuery)(`(min-width: ${o.breakpoints.lg})`,!1,i),(0,n.useMediaQuery)(`(min-width: ${o.breakpoints.xl})`,!1,i)].findLastIndex(e=>e)];if(!r)return e.base;let l=a.indexOf(r);for(;l>=0;){if(a[l]in e)return e[a[l]];l-=1}return e.base}])},141806,e=>{"use strict";var t=e.i(433512),n=e.i(481178),a=e.i(44091),i=e.i(391466),o=e.i(956449),r=e.i(232471),l={group:"m_11def92b",root:"m_f85678b6",image:"m_11f8ac07",placeholder:"m_104cd71f"},s=e.i(275519),c=e.i(191788),d=e.i(391398);let u=(0,c.createContext)({withinGroup:!1}),m=(0,n.createVarsResolver)((e,{spacing:n})=>({group:{"--ag-spacing":(0,t.getSpacing)(n)}})),h=(0,s.factory)(e=>{let t=(0,a.useProps)("AvatarGroup",null,e),{classNames:n,className:o,style:s,styles:c,unstyled:h,vars:p,spacing:f,attributes:g,...b}=t,v=(0,i.useStyles)({name:"AvatarGroup",classes:l,props:t,className:o,style:s,classNames:n,styles:c,unstyled:h,attributes:g,vars:p,varsResolver:m,rootSelector:"group"});return(0,d.jsx)(u,{value:{withinGroup:!0},children:(0,d.jsx)(r.Box,{...v("group"),...b})})});function p(e){return(0,d.jsx)("svg",{...e,"data-avatar-placeholder-icon":!0,viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,d.jsx)("path",{d:"M0.877014 7.49988C0.877014 3.84219 3.84216 0.877045 7.49985 0.877045C11.1575 0.877045 14.1227 3.84219 14.1227 7.49988C14.1227 11.1575 11.1575 14.1227 7.49985 14.1227C3.84216 14.1227 0.877014 11.1575 0.877014 7.49988ZM7.49985 1.82704C4.36683 1.82704 1.82701 4.36686 1.82701 7.49988C1.82701 8.97196 2.38774 10.3131 3.30727 11.3213C4.19074 9.94119 5.73818 9.02499 7.50023 9.02499C9.26206 9.02499 10.8093 9.94097 11.6929 11.3208C12.6121 10.3127 13.1727 8.97172 13.1727 7.49988C13.1727 4.36686 10.6328 1.82704 7.49985 1.82704ZM10.9818 11.9787C10.2839 10.7795 8.9857 9.97499 7.50023 9.97499C6.01458 9.97499 4.71624 10.7797 4.01845 11.9791C4.97952 12.7272 6.18765 13.1727 7.49985 13.1727C8.81227 13.1727 10.0206 12.727 10.9818 11.9787ZM5.14999 6.50487C5.14999 5.207 6.20212 4.15487 7.49999 4.15487C8.79786 4.15487 9.84999 5.207 9.84999 6.50487C9.84999 7.80274 8.79786 8.85487 7.49999 8.85487C6.20212 8.85487 5.14999 7.80274 5.14999 6.50487ZM7.49999 5.10487C6.72679 5.10487 6.09999 5.73167 6.09999 6.50487C6.09999 7.27807 6.72679 7.90487 7.49999 7.90487C8.27319 7.90487 8.89999 7.27807 8.89999 6.50487C8.89999 5.73167 8.27319 5.10487 7.49999 5.10487Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}h.classes=l,h.varsResolver=m,h.displayName="@mantine/core/AvatarGroup";let f=["blue","cyan","grape","green","indigo","lime","orange","pink","red","teal","violet"],g=(0,n.createVarsResolver)((e,{size:n,radius:a,variant:i,gradient:o,color:r,autoContrast:l,name:s,allowedInitialsColors:c})=>{let d="initials"===r&&"string"==typeof s?function(e,t=f){return t[Math.abs(function(e){let t=0;for(let n=0;n<e.length;n+=1)t=(t<<5)-t+e.charCodeAt(n)|0;return t}(e))%t.length]}(s,c):r,u=e.variantColorResolver({color:d||"gray",theme:e,gradient:o,variant:i||"light",autoContrast:l});return{root:{"--avatar-size":(0,t.getSize)(n,"avatar-size"),"--avatar-radius":void 0===a?void 0:(0,t.getRadius)(a),"--avatar-bg":d||i?u.background:void 0,"--avatar-color":d||i?u.color:void 0,"--avatar-bd":d||i?u.border:void 0}}}),b=(0,o.polymorphicFactory)(e=>{let t=(0,a.useProps)("Avatar",null,e),{classNames:n,className:o,style:s,styles:m,unstyled:h,vars:f,src:b,alt:v,radius:x,color:y,gradient:T,imageProps:w,children:j,autoContrast:D,mod:A,name:S,allowedInitialsColors:C,attributes:M,...k}=t,E=(0,c.use)(u),[I,P]=(0,c.useState)(!b),H=(0,i.useStyles)({name:"Avatar",props:t,classes:l,className:o,style:s,classNames:n,styles:m,unstyled:h,attributes:M,vars:f,varsResolver:g});return(0,c.useEffect)(()=>P(!b),[b]),(0,d.jsx)(r.Box,{...H("root"),mod:[{"within-group":E.withinGroup},A],...k,children:I||!b?(0,d.jsx)("span",{...H("placeholder"),title:v,children:j||"string"==typeof S&&function(e,t=2){let n=e.split(" ");return 1===n.length?e.slice(0,t).toUpperCase():n.map(e=>e[0]).slice(0,t).join("").toUpperCase()}(S)||(0,d.jsx)(p,{})}):(0,d.jsx)("img",{...w,...H("image"),src:b,alt:v,onError:e=>{P(!0),w?.onError?.(e)}})})});b.classes=l,b.varsResolver=g,b.displayName="@mantine/core/Avatar",b.Group=h,e.s(["Avatar",0,b],141806)},613688,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M144,96a16,16,0,1,1,16,16A16,16,0,0,1,144,96Zm92-40V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56ZM44,60v79.72l33.86-33.86a20,20,0,0,1,28.28,0L147.31,147l17.18-17.17a20,20,0,0,1,28.28,0L212,149.09V60Zm0,136H162.34L92,125.66l-48,48Zm168,0V183l-33.37-33.37L164.28,164l32,32Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,56V178.06l-39.72-39.72a8,8,0,0,0-11.31,0L147.31,164,97.66,114.34a8,8,0,0,0-11.32,0L32,168.69V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z",opacity:"0.2"}),t.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM156,88a12,12,0,1,1-12,12A12,12,0,0,1,156,88Zm60,112H40V160.69l46.34-46.35a8,8,0,0,1,11.32,0h0L165,181.66a8,8,0,0,0,11.32-11.32l-17.66-17.65L173,138.34a8,8,0,0,1,11.31,0L216,170.07V200Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V163.57L188.53,134.1a14,14,0,0,0-19.8,0l-21.42,21.42L101.9,110.1a14,14,0,0,0-19.8,0L38,154.2V56A2,2,0,0,1,40,54ZM38,200V171.17l52.58-52.58a2,2,0,0,1,2.84,0L176.83,202H40A2,2,0,0,1,38,200Zm178,2H193.8l-38-38,21.41-21.42a2,2,0,0,1,2.83,0l38,38V200A2,2,0,0,1,216,202ZM146,100a10,10,0,1,1,10,10A10,10,0,0,1,146,100Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4V168.4l-32.89-32.89a12,12,0,0,0-17,0l-22.83,22.83-46.82-46.83a12,12,0,0,0-17,0L36,159V56A4,4,0,0,1,40,52ZM36,200V170.34l53.17-53.17a4,4,0,0,1,5.66,0L181.66,204H40A4,4,0,0,1,36,200Zm180,4H193l-40-40,22.83-22.83a4,4,0,0,1,5.66,0L220,179.71V200A4,4,0,0,1,216,204ZM148,100a8,8,0,1,1,8,8A8,8,0,0,1,148,100Z"}))]]),i=t.forwardRef((e,i)=>t.createElement(n.default,{ref:i,...e,weights:a}));i.displayName="ImageIcon",e.s(["ImageIcon",0,i],613688)},463044,e=>{"use strict";let t;var n=e.i(191788),a=e.i(730943);function i(e,t,n){let a,i=n.initialDeps??[],o=!0;function r(){let r=e();return(r.length!==i.length||r.some((e,t)=>i[t]!==e))&&(i=r,a=t(...r),(null==n?void 0:n.onChange)&&!(o&&n.skipInitialOnChange)&&n.onChange(a),o=!1),a}return r.updateDeps=e=>{i=e},r}function o(e,t){if(void 0!==e)return e;throw Error(`Unexpected undefined${t?`: ${t}`:""}`)}e.i(350461);let r=()=>{if(void 0!==t)return t;if("u"<typeof navigator)return t=!1;if(/iP(hone|od|ad)/.test(navigator.userAgent))return t=!0;let e=navigator.maxTouchPoints;return t="MacIntel"===navigator.platform&&void 0!==e&&e>0},l=e=>{let{offsetWidth:t,offsetHeight:n}=e;return{width:t,height:n}},s=e=>e,c=e=>{let t=Math.max(e.startIndex-e.overscan,0),n=Math.min(e.endIndex+e.overscan,e.count-1)-t+1,a=Array(n);for(let e=0;e<n;e++)a[e]=t+e;return a},d=(e,t)=>{let n=e.scrollElement;if(!n)return;let a=e.targetWindow;if(!a)return;let i=e=>{let{width:n,height:a}=e;t({width:Math.round(n),height:Math.round(a)})};if(i(l(n)),!a.ResizeObserver)return()=>{};let o=new a.ResizeObserver(t=>{let a=()=>{let e=t[0];if(null==e?void 0:e.borderBoxSize){let t=e.borderBoxSize[0];if(t)return void i({width:t.inlineSize,height:t.blockSize})}i(l(n))};e.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(a):a()});return o.observe(n,{box:"border-box"}),()=>{o.unobserve(n)}},u={passive:!0},m="u"<typeof window||"onscrollend"in window,h=(e,t)=>((e,t,n)=>{var a,i;let o,r=e.scrollElement;if(!r)return;let l=e.targetWindow;if(!l)return;let s=e.options.useScrollendEvent&&m,c=0,d=s?null:(a=()=>t(c,!1),i=e.options.isScrollingResetDelay,function(...e){l.clearTimeout(o),o=l.setTimeout(()=>a.apply(this,e),i)}),h=e=>()=>{c=n(r),null==d||d(),t(c,e)},p=h(!0),f=h(!1);return r.addEventListener("scroll",p,u),s&&r.addEventListener("scrollend",f,u),()=>{r.removeEventListener("scroll",p),s&&r.removeEventListener("scrollend",f)}})(e,t,t=>{let{horizontal:n,isRtl:a}=e.options;return n?t.scrollLeft*(a&&-1||1):t.scrollTop}),p=(e,t,n)=>{if(n.options.useCachedMeasurements){let t=n.indexFromElement(e),a=n.options.getItemKey(t);return n.itemSizeCache.get(a)??n.options.estimateSize(t)}if(null==t?void 0:t.borderBoxSize){let e=t.borderBoxSize[0];if(e)return Math.round(e[n.options.horizontal?"inlineSize":"blockSize"])}if(!t){let t=n.indexFromElement(e),a=n.options.getItemKey(t),i=n.itemSizeCache.get(a);if(void 0!==i)return i}return e[n.options.horizontal?"offsetWidth":"offsetHeight"]},f=(e,{adjustments:t=0,behavior:n},a)=>{var i,o;null==(o=null==(i=a.scrollElement)?void 0:i.scrollTo)||o.call(i,{[a.options.horizontal?"left":"top"]:e+t,behavior:n})};class g{constructor(e){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollState=null,this.measurementsCache=[],this._flatMeasurements=null,this.itemSizeCache=new Map,this.itemSizeCacheVersion=0,this.laneAssignments=new Map,this.pendingMin=null,this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.pendingScrollAnchor=null,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this._iosDeferredAdjustment=0,this._iosTouching=!1,this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._intendedScrollOffset=null,this.elementsCache=new Map,this.now=()=>{var e,t,n;return(null==(n=null==(t=null==(e=this.targetWindow)?void 0:e.performance)?void 0:t.now)?void 0:n.call(t))??Date.now()},this.observer=(()=>{let e=null,t=()=>e||(this.targetWindow&&this.targetWindow.ResizeObserver?e=new this.targetWindow.ResizeObserver(e=>{e.forEach(e=>{let t=()=>{let t=e.target,n=this.indexFromElement(t);if(!t.isConnected){for(let[e,n]of(this.observer.unobserve(t),this.elementsCache))if(n===t){this.elementsCache.delete(e);break}return}this.shouldMeasureDuringScroll(n)&&this.resizeItem(n,this.options.measureElement(t,e,this))};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(t):t()})}):null);return{disconnect:()=>{var n;null==(n=t())||n.disconnect(),e=null},observe:e=>{var n;return null==(n=t())?void 0:n.observe(e,{box:"border-box"})},unobserve:e=>{var n;return null==(n=t())?void 0:n.unobserve(e)}}})(),this.range=null,this.setOptions=e=>{var t,n;let a={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:s,rangeExtractor:c,onChange:()=>{},measureElement:p,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,anchorTo:"start",followOnAppend:!1,scrollEndThreshold:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,laneAssignmentMode:"estimate",useCachedMeasurements:!1};for(let t in e){let n=e[t];void 0!==n&&(a[t]=n)}let i=this.options,o=null,r=null,l=!1;if(void 0!==i&&i.enabled&&a.enabled&&"end"===a.anchorTo&&null!==this.scrollElement){let e=i.count,s=a.count,c=this.getMeasurements(),d=e>0?(null==(t=c[0])?void 0:t.key)??i.getItemKey(0):null,u=e>0?(null==(n=c[e-1])?void 0:n.key)??i.getItemKey(e-1):null;if(s!==e||e>0&&s>0&&(a.getItemKey(0)!==d||a.getItemKey(s-1)!==u)){l=!0;let t=e>0?this.getVirtualItemForOffset(this.getScrollOffset())??c[0]:null;t&&(o=[t.key,this.getScrollOffset()-t.start]);let n=!0===a.followOnAppend?"auto":a.followOnAppend||null;n&&s>e&&this.isAtEnd(i.scrollEndThreshold)&&(0===e||a.getItemKey(s-1)!==u)&&(r=n)}}this.options=a,l&&(this.pendingMin=0,this.itemSizeCacheVersion++);let d=!1,u=0;if(o&&null!==this.scrollOffset){let[e,t]=o,n=this.getMeasurements(),{count:a,getItemKey:i}=this.options,r=0;for(;r<a&&i(r)!==e;)r++;if(r<a){let e=n[r];if(e){let n=e.start+t;n!==this.scrollOffset&&(u=n-this.scrollOffset,this.scrollOffset=n,d=!0)}}}(d||r)&&(this.pendingScrollAnchor=[d?o[0]:null,d?o[1]:0,r,u])},this.notify=e=>{var t,n;null==(n=(t=this.options).onChange)||n.call(t,this,e)},this.maybeNotify=i(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),null!=this.rafId&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null,this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var e;let t=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==t){if(this.cleanup(),!t)return void this.maybeNotify();if(this.scrollElement=t,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=(null==(e=this.scrollElement)?void 0:e.window)??null,this.elementsCache.forEach(e=>{this.observer.observe(e)}),this.unsubs.push(this.options.observeElementRect(this,e=>{this.scrollRect=e,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(e,t)=>{if(t&&null===this._intendedScrollOffset&&e===this.scrollOffset)return;null!==this._intendedScrollOffset&&1.5>Math.abs(e-this._intendedScrollOffset)&&(e=this._intendedScrollOffset),this._intendedScrollOffset=null,this.scrollAdjustments=0;let n=this.getScrollOffset();this.scrollDirection=t?n===e?this.scrollDirection:n<e?"forward":"backward":null,this.scrollOffset=e,this.isScrolling=t,this._flushIosDeferredIfReady(),this.scrollState&&this.scheduleScrollReconcile(),this.maybeNotify()})),"addEventListener"in this.scrollElement){let e=this.scrollElement,t=()=>{this._iosTouching=!0,this._iosJustTouchEnded=!1,null!==this._iosTouchEndTimerId&&null!=this.targetWindow&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)},n=()=>{this._iosTouching=!1,r()&&null!=this.targetWindow&&(this._iosJustTouchEnded=!0,this._iosTouchEndTimerId=this.targetWindow.setTimeout(()=>{this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._flushIosDeferredIfReady()},150))};e.addEventListener("touchstart",t,u),e.addEventListener("touchend",n,u),this.unsubs.push(()=>{e.removeEventListener("touchstart",t),e.removeEventListener("touchend",n),null!==this._iosTouchEndTimerId&&null!=this.targetWindow&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)})}this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})}let n=this.pendingScrollAnchor;if(this.pendingScrollAnchor=null,n&&this.scrollElement&&this.options.enabled){let[e,t,a,i]=n;null===e||a||(r()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?0!==i&&(this._iosDeferredAdjustment+=i):this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})),a&&this.scrollToEnd({behavior:a})}},this._flushIosDeferredIfReady=()=>{if(0===this._iosDeferredAdjustment||this.isScrolling||this._iosTouching||this._iosJustTouchEnded)return;let e=this.getScrollOffset(),t=this.getMaxScrollOffset();if(e<0||e>t)return;let n=this._iosDeferredAdjustment;this._iosDeferredAdjustment=0,this._scrollToOffset(e,{adjustments:this.scrollAdjustments+=n,behavior:void 0})},this.rafId=null,this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??("function"==typeof this.options.initialOffset?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(e,t)=>{let n=new Map,a=new Map;for(let i=t-1;i>=0;i--){let t=e[i];if(n.has(t.lane))continue;let o=a.get(t.lane);if(null==o||t.end>o.end?a.set(t.lane,t):t.end<o.end&&n.set(t.lane,!0),n.size===this.options.lanes)break}return a.size===this.options.lanes?Array.from(a.values()).sort((e,t)=>e.end===t.end?e.index-t.index:e.end-t.end)[0]:void 0},this.getMeasurementOptions=i(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes,this.options.laneAssignmentMode],(e,t,n,a,i,o,r)=>(void 0!==this.prevLanes&&this.prevLanes!==o&&(this.lanesChangedFlag=!0),this.prevLanes=o,this.pendingMin=null,{count:e,paddingStart:t,scrollMargin:n,getItemKey:a,enabled:i,lanes:o,laneAssignmentMode:r}),{key:!1}),this.getMeasurements=i(()=>[this.getMeasurementOptions(),this.itemSizeCacheVersion],({count:e,paddingStart:t,scrollMargin:n,getItemKey:a,enabled:i,lanes:o,laneAssignmentMode:r},l)=>{let s=this.itemSizeCache;if(!i)return this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>e)for(let t of this.laneAssignments.keys())t>=e&&this.laneAssignments.delete(t);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMin=null),0!==this.measurementsCache.length||this.lanesSettling||(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}));let c=this.lanesSettling?0:this.pendingMin??0;if(this.pendingMin=null,this.lanesSettling&&this.measurementsCache.length===e&&(this.lanesSettling=!1),1===o){var d;let i,o=this.options.gap,r=2*e,l=this._flatMeasurements;if(!l||l.length<r){let e=new Float64Array(r);l&&c>0&&e.set(l.subarray(0,2*c)),l=e,this._flatMeasurements=l}if(0===c)i=t+n;else{let e=c-1;i=l[2*e]+l[2*e+1]+o}for(let t=c;t<e;t++){let e=a(t),n=s.get(e),r="number"==typeof n?n:this.options.estimateSize(t);l[2*t]=i,l[2*t+1]=r,i+=r+o}let u=(d=l,new Proxy(Array(e),{get(t,n,i){if("string"==typeof n){let i=n.charCodeAt(0);if(i>=48&&i<=57){let i=+n;if(Number.isInteger(i)&&i>=0&&i<e){let e=t[i];if(!e){let n=d[2*i];e=t[i]={index:i,key:a(i),start:n,size:d[2*i+1],end:n+d[2*i+1],lane:0}}return e}}if("length"===n)return e}return Reflect.get(t,n,i)}}));return this.measurementsCache=u,u}let u=this.measurementsCache.slice(0,c),m=Array(o).fill(void 0);for(let e=0;e<c;e++){let t=u[e];t&&(m[t.lane]=e)}for(let i=c;i<e;i++){let e,o,l=a(i),c=this.laneAssignments.get(i),d="estimate"===r||s.has(l);if(void 0!==c&&this.options.lanes>1){let a=m[e=c],i=void 0!==a?u[a]:void 0;o=i?i.end+this.options.gap:t+n}else{let a=1===this.options.lanes?u[i-1]:this.getFurthestMeasurement(u,i);o=a?a.end+this.options.gap:t+n,e=a?a.lane:i%this.options.lanes,this.options.lanes>1&&d&&this.laneAssignments.set(i,e)}let h=s.get(l),p="number"==typeof h?h:this.options.estimateSize(i),f=o+p;u[i]={index:i,start:o,size:p,end:f,key:l,lane:e},m[e]=i}return this.measurementsCache=u,u},{key:!1,debug:()=>this.options.debug}),this.calculateRange=i(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(e,t,n,a)=>0===e.length||0===t?(this.range=null,null):(this.range=function(e,t,n,a,i){let o=e.length-1;if(e.length<=a)return{startIndex:0,endIndex:o};if(1===a&&null!==i){let e=function(e,t,n){let a=0;for(;a<=t;){let i=(a+t)/2|0,o=e[2*i];if(o<n)a=i+1;else{if(!(o>n))return i;t=i-1}}return a>0?a-1:0}(i,o,n),a=e,r=n+t;for(;a<o&&i[2*a]+i[2*a+1]<r;)a++;return{startIndex:e,endIndex:a}}let r=b(0,o,t=>e[t].start,n),l=r;if(1===a)for(;l<o&&e[l].end<n+t;)l++;else if(a>1){let i=Array(a).fill(0);for(;l<o&&i.some(e=>e<n+t);){let t=e[l];i[t.lane]=t.end,l++}let s=Array(a).fill(n+t);for(;r>=0&&s.some(e=>e>=n);){let t=e[r];s[t.lane]=t.start,r--}r=Math.max(0,r-r%a),l=Math.min(o,l+(a-1-l%a))}return{startIndex:r,endIndex:l}}(e,t,n,a,1===a&&null!=this._flatMeasurements?this._flatMeasurements:null),this.range),{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=i(()=>{let e=null,t=null,n=this.calculateRange();return n&&(e=n.startIndex,t=n.endIndex),this.maybeNotify.updateDeps([this.isScrolling,e,t]),[this.options.rangeExtractor,this.options.overscan,this.options.count,e,t]},(e,t,n,a,i)=>null===a||null===i?[]:e({startIndex:a,endIndex:i,overscan:t,count:n}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{let t=this.options.indexAttribute,n=e.getAttribute(t);return n?parseInt(n,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this.shouldMeasureDuringScroll=e=>{var t;if(!this.scrollState||"smooth"!==this.scrollState.behavior)return!0;let n=this.scrollState.index??(null==(t=this.getVirtualItemForOffset(this.scrollState.lastTargetOffset))?void 0:t.index);if(void 0!==n&&this.range){let t=Math.max(this.options.overscan,Math.ceil((this.range.endIndex-this.range.startIndex)/2)),a=Math.max(0,n-t),i=Math.min(this.options.count-1,n+t);return e>=a&&e<=i}return!0},this.measureElement=e=>{if(!e)return void this.elementsCache.forEach((e,t)=>{e.isConnected||(this.observer.unobserve(e),this.elementsCache.delete(t))});let t=this.indexFromElement(e),n=this.options.getItemKey(t),a=this.elementsCache.get(n);a!==e&&(a&&this.observer.unobserve(a),this.observer.observe(e),this.elementsCache.set(n,e)),(!this.isScrolling||this.scrollState)&&this.shouldMeasureDuringScroll(t)&&this.resizeItem(t,this.options.measureElement(e,void 0,this))},this.resizeItem=(e,t)=>{var n,a;let i,o,r;if(e<0||e>=this.options.count)return;let l=this._flatMeasurements;if(1===this.options.lanes&&null!==l)r=this.options.getItemKey(e),o=l[2*e],i=l[2*e+1];else{let t=this.measurementsCache[e];if(!t)return;r=t.key,o=t.start,i=t.size}let s=t-(this.itemSizeCache.get(r)??i);if(0!==s){let l="end"===this.options.anchorTo&&(null==(n=this.scrollState)?void 0:n.behavior)!=="smooth"&&this.getVirtualDistanceFromEnd()<=this.options.scrollEndThreshold,c=l?this.getTotalSize():0,d=(null==(a=this.scrollState)?void 0:a.behavior)!=="smooth"&&(void 0!==this.shouldAdjustScrollPositionOnItemSizeChange?this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[e]??{index:e,key:r,start:o,size:i,end:o+i,lane:0},s,this):o<this.getScrollOffset()+this.scrollAdjustments&&(!this.itemSizeCache.has(r)||"backward"!==this.scrollDirection));(null===this.pendingMin||e<this.pendingMin)&&(this.pendingMin=e),this.itemSizeCache.set(r,t),this.itemSizeCacheVersion++,l?this.applyScrollAdjustment(this.getTotalSize()-c):d&&this.applyScrollAdjustment(s),this.notify(!1)}},this.getVirtualItems=i(()=>[this.getVirtualIndexes(),this.getMeasurements()],(e,t)=>{let n=[];for(let a=0,i=e.length;a<i;a++){let i=t[e[a]];n.push(i)}return n},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{let t=this.getMeasurements();if(0===t.length)return;let n=this._flatMeasurements,a=1===this.options.lanes&&null!=n,i=b(0,t.length-1,a?e=>n[2*e]:e=>o(t[e]).start,e);return o(t[i])},this.getMaxScrollOffset=()=>{if(!this.scrollElement)return 0;if("scrollHeight"in this.scrollElement)return this.options.horizontal?this.scrollElement.scrollWidth-this.scrollElement.clientWidth:this.scrollElement.scrollHeight-this.scrollElement.clientHeight;{let e=this.scrollElement.document.documentElement;return this.options.horizontal?e.scrollWidth-this.scrollElement.innerWidth:e.scrollHeight-this.scrollElement.innerHeight}},this.getVirtualDistanceFromEnd=()=>Math.max(this.getTotalSize()-this.getSize()-this.getScrollOffset(),0),this.getDistanceFromEnd=()=>Math.max(this.getMaxScrollOffset()-this.getScrollOffset(),0),this.isAtEnd=(e=this.options.scrollEndThreshold)=>this.getDistanceFromEnd()<=e,this.getOffsetForAlignment=(e,t,n=0)=>{if(!this.scrollElement)return 0;let a=this.getSize(),i=this.getScrollOffset();return"auto"===t&&(t=e>=i+a?"end":"start"),"center"===t?e+=(n-a)/2:"end"===t&&(e-=a),Math.max(Math.min(this.getMaxScrollOffset(),e),0)},this.getOffsetForIndex=(e,t="auto")=>{e=Math.max(0,Math.min(e,this.options.count-1));let n=this.getSize(),a=this.getScrollOffset(),i=this.measurementsCache[e];if(!i)return;if("auto"===t)if(i.end>=a+n-this.options.scrollPaddingEnd)t="end";else{if(!(i.start<=a+this.options.scrollPaddingStart))return[a,t];t="start"}if("end"===t&&e===this.options.count-1)return[this.getMaxScrollOffset(),t];let o="end"===t?i.end+this.options.scrollPaddingEnd:i.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(o,t,i.size),t]},this.scrollToOffset=(e,{align:t="start",behavior:n="auto"}={})=>{let a=this.getOffsetForAlignment(e,t),i=this.now();this.scrollState={index:null,align:t,behavior:n,startedAt:i,lastTargetOffset:a,stableFrames:0},this._scrollToOffset(a,{adjustments:void 0,behavior:n}),this.scheduleScrollReconcile()},this.scrollToIndex=(e,{align:t="auto",behavior:n="auto"}={})=>{e=Math.max(0,Math.min(e,this.options.count-1));let a=this.getOffsetForIndex(e,t);if(!a)return;let[i,o]=a,r=this.now();this.scrollState={index:e,align:o,behavior:n,startedAt:r,lastTargetOffset:i,stableFrames:0},this._scrollToOffset(i,{adjustments:void 0,behavior:n}),this.scheduleScrollReconcile()},this.scrollBy=(e,{behavior:t="auto"}={})=>{let n=this.getScrollOffset()+e,a=this.now();this.scrollState={index:null,align:"start",behavior:t,startedAt:a,lastTargetOffset:n,stableFrames:0},this._scrollToOffset(n,{adjustments:void 0,behavior:t}),this.scheduleScrollReconcile()},this.scrollToEnd=({behavior:e="auto"}={})=>{this.options.count>0?this.scrollToIndex(this.options.count-1,{align:"end",behavior:e}):this.scrollToOffset(Math.max(this.getTotalSize()-this.getSize(),0),{behavior:e})},this.getTotalSize=()=>{var e;let t,n=this.getMeasurements();if(0===n.length)t=this.options.paddingStart;else if(1===this.options.lanes){let a=n.length-1,i=this._flatMeasurements;t=null!=i?i[2*a]+i[2*a+1]:(null==(e=n[a])?void 0:e.end)??0}else{let e=Array(this.options.lanes).fill(null),a=n.length-1;for(;a>=0&&e.some(e=>null===e);){let t=n[a];null===e[t.lane]&&(e[t.lane]=t.end),a--}t=Math.max(...e.filter(e=>null!==e))}return Math.max(t-this.options.scrollMargin+this.options.paddingEnd,0)},this.takeSnapshot=()=>{let e=[];if(0===this.itemSizeCache.size)return e;for(let t of this.getMeasurements())t&&this.itemSizeCache.has(t.key)&&e.push({index:t.index,key:t.key,start:t.start,size:t.size,end:t.end,lane:t.lane});return e},this._scrollToOffset=(e,{adjustments:t,behavior:n})=>{this._intendedScrollOffset=e+(t??0),this.options.scrollToFn(e,{behavior:n,adjustments:t},this)},this.measure=()=>{this.pendingMin=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.itemSizeCacheVersion++,this.notify(!1)},this.setOptions(e)}applyScrollAdjustment(e,t){0!==e&&(r()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?this._iosDeferredAdjustment+=e:(this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=e,behavior:t}),null!==this.scrollOffset&&(this.scrollOffset+=this.scrollAdjustments,this.scrollAdjustments=0)))}scheduleScrollReconcile(){if(!this.targetWindow){this.scrollState=null;return}null==this.rafId&&(this.rafId=this.targetWindow.requestAnimationFrame(()=>{this.rafId=null,this.reconcileScroll()}))}reconcileScroll(){if(!this.scrollState||!this.scrollElement)return;if(this.now()-this.scrollState.startedAt>5e3){this.scrollState=null;return}let e=null!=this.scrollState.index?this.getOffsetForIndex(this.scrollState.index,this.scrollState.align):void 0,t=e?e[0]:this.scrollState.lastTargetOffset,n=t!==this.scrollState.lastTargetOffset;if(!n&&1.01>Math.abs(t-this.getScrollOffset())){if(this.scrollState.stableFrames++,this.scrollState.stableFrames>=1){this.getScrollOffset()!==t&&this._scrollToOffset(t,{adjustments:void 0,behavior:"auto"}),this.scrollState=null;return}}else if(this.scrollState.stableFrames=0,n){let e=this.getSize()||600,n=Math.abs(t-this.getScrollOffset()),a="smooth"===this.scrollState.behavior&&n>e;this.scrollState.lastTargetOffset=t,a||(this.scrollState.behavior="auto"),this._scrollToOffset(t,{adjustments:void 0,behavior:a?"smooth":"auto"})}this.scheduleScrollReconcile()}}let b=(e,t,n,a)=>{for(;e<=t;){let i=(e+t)/2|0,o=n(i);if(o<a)e=i+1;else{if(!(o>a))return i;t=i-1}}return e>0?e-1:0},v="u">typeof document?n.useLayoutEffect:n.useEffect;e.s(["useVirtualizer",0,function(e){return function({useFlushSync:e=!0,directDomUpdates:t=!1,directDomUpdatesMode:i="transform",...o}){let r=n.useReducer(e=>e+1,0)[1],l=n.useRef({enabled:t,mode:i,container:null,lastSize:null,lastPositions:new WeakMap,prevRange:null});l.current.enabled=t,l.current.mode=i;let s=e=>{let t=l.current;if(!t.enabled||!t.container)return;let n=e.getTotalSize();if(n!==t.lastSize){t.lastSize=n;let a=e.options.horizontal?"width":"height";t.container.style[a]=`${n}px`}let a=!!e.options.horizontal,i="transform"===t.mode,o=a?"left":"top",r=e.options.scrollMargin;for(let n of e.getVirtualItems()){let l=n.start-r,s=e.elementsCache.get(n.key);s&&t.lastPositions.get(s)!==l&&(t.lastPositions.set(s,l),i?s.style.transform=a?`translate3d(${l}px, 0, 0)`:`translate3d(0, ${l}px, 0)`:s.style[o]=`${l}px`)}},c={...o,onChange:(t,n)=>{var i;let c=l.current,d=!0;if(c.enabled){s(t);let e=t.range,n=c.prevRange;(d=!n||n.isScrolling!==t.isScrolling||n.startIndex!==(null==e?void 0:e.startIndex)||n.endIndex!==(null==e?void 0:e.endIndex))&&(c.prevRange=e?{startIndex:e.startIndex,endIndex:e.endIndex,isScrolling:t.isScrolling}:null)}d&&(e&&n?(0,a.flushSync)(r):r()),null==(i=o.onChange)||i.call(o,t,n)}},[d]=n.useState(()=>{let e=new g(c);return Object.assign(e,{containerRef:t=>{let n=l.current;if(n.container=t,n.lastSize=null,t&&n.enabled){let a=e.getTotalSize();n.lastSize=a;let i=e.options.horizontal?"width":"height";t.style[i]=`${a}px`}}})});return d.setOptions(c),v(()=>d._didMount(),[]),v(()=>d._willUpdate()),v(()=>{s(d)}),d}({observeElementRect:d,observeElementOffset:h,scrollToFn:f,...e})}],463044)},89495,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M144,128a16,16,0,1,1-16-16A16,16,0,0,1,144,128ZM60,112a16,16,0,1,0,16,16A16,16,0,0,0,60,112Zm136,0a16,16,0,1,0,16,16A16,16,0,0,0,196,112Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M240,96v64a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H224A16,16,0,0,1,240,96Z",opacity:"0.2"}),t.createElement("path",{d:"M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,80H32A16,16,0,0,0,16,96v64a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V96A16,16,0,0,0,224,80ZM60,140a12,12,0,1,1,12-12A12,12,0,0,1,60,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm68,0a12,12,0,1,1,12-12A12,12,0,0,1,196,140Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM60,118a10,10,0,1,0,10,10A10,10,0,0,0,60,118Zm136,0a10,10,0,1,0,10,10A10,10,0,0,0,196,118Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm56-12a12,12,0,1,0,12,12A12,12,0,0,0,196,116ZM60,116a12,12,0,1,0,12,12A12,12,0,0,0,60,116Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm-76-8a8,8,0,1,0,8,8A8,8,0,0,0,60,120Zm136,0a8,8,0,1,0,8,8A8,8,0,0,0,196,120Z"}))]]),i=t.forwardRef((e,i)=>t.createElement(n.default,{ref:i,...e,weights:a}));i.displayName="DotsThreeIcon",e.s(["DotsThreeIcon",0,i],89495)},739539,e=>{"use strict";var t=e.i(391398);e.s(["PointLabel",0,function({x:e,y:n,value:a,valueFormatter:i}){return(0,t.jsx)("g",{transform:`translate(${e},${n})`,children:(0,t.jsx)("text",{x:0,y:0,dy:-8,dx:-10,textAnchor:"start",fill:"var(--chart-text-color, var(--mantine-color-dimmed))",fontSize:8,children:i?i(a):a})})}])},37930,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",opacity:"0.2"}),t.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),i=t.forwardRef((e,i)=>t.createElement(n.default,{ref:i,...e,weights:a}));i.displayName="PlusIcon",e.s(["PlusIcon",0,i],37930)},780950,e=>{"use strict";var t=e.i(775538);e.s(["selectXAxisIdFromGraphicalItemId",0,function(e,n){var a,i;return null!=(a=null==(i=e.graphicalItems.cartesianItems.find(e=>e.id===n))?void 0:i.xAxisId)?a:t.defaultAxisId},"selectYAxisIdFromGraphicalItemId",0,function(e,n){var a,i;return null!=(a=null==(i=e.graphicalItems.cartesianItems.find(e=>e.id===n))?void 0:i.yAxisId)?a:t.defaultAxisId}])},789859,328233,482593,e=>{"use strict";var t=e.i(191788),n=e.i(56206),a=e.i(778979),i=e.i(883388),o=e.i(270627);function r(){return(r=Object.assign.bind()).apply(null,arguments)}var l=e=>{var l=e.cx,s=e.cy,c=e.r,d=e.className,u=(0,n.clsx)("recharts-dot",d);return(0,o.isNumber)(l)&&(0,o.isNumber)(s)&&(0,o.isNumber)(c)?t.createElement("circle",r({},(0,i.svgPropertiesNoEvents)(e),(0,a.adaptEventHandlers)(e),{className:u,cx:l,cy:s,r:c})):null};e.s(["Dot",0,l],328233);var s=e.i(815954),c=e.i(106043),d=e.i(62037),u=e.i(561622),m=e.i(446354),h=["points"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach(function(t){var a,i,o;a=e,i=t,o=n[t],(i=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(i))in a?Object.defineProperty(a,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[i]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function g(){return(g=Object.assign.bind()).apply(null,arguments)}function b(e){var a=e.option,i=e.dotProps,o=e.className;if((0,t.isValidElement)(a))return(0,t.cloneElement)(a,i);if("function"==typeof a)return a(i);var r=(0,n.clsx)(o,"boolean"!=typeof a?a.className:""),s=null!=i?i:{},c=(s.points,function(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n={};for(var a in e)if(({}).hasOwnProperty.call(e,a)){if(-1!==t.indexOf(a))continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],-1===t.indexOf(n)&&({}).propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(s,h));return t.createElement(l,g({},c,{className:r}))}e.s(["Dots",0,function(e){var n=e.points,a=e.dot,i=e.className,o=e.dotClassName,r=e.dataKey,l=e.baseProps,h=e.needClip,p=e.clipPathId,v=e.zIndex,x=void 0===v?m.DefaultZIndexes.scatter:v;if(null==n||!a&&1!==n.length)return null;var y=(0,c.isClipDot)(a),T=(0,d.svgPropertiesAndEventsFromUnknown)(a),w=n.map((e,i)=>{var s,c,d=f(f(f({r:3},l),T),{},{index:i,cx:null!=(s=e.x)?s:void 0,cy:null!=(c=e.y)?c:void 0,dataKey:r,value:e.value,payload:e.payload,points:n});return t.createElement(b,{key:"dot-".concat(i),option:a,dotProps:d,className:o})}),j={};return h&&null!=p&&(j.clipPath="url(#clipPath-".concat(y?"":"dots-").concat(p,")")),t.createElement(u.ZIndexLayer,{zIndex:x},t.createElement(s.Layer,g({className:i},j),w))}],789859);var v=e.i(543372),x=e.i(281695),y=e.i(630173);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach(function(t){var a,i,o;a=e,i=t,o=n[t],(i=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(i))in a?Object.defineProperty(a,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[i]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var j=e=>{var n,o=e.point,r=e.childIndex,c=e.mainColor,d=e.activeDot,u=e.dataKey,m=e.clipPath;if(!1===d||null==o.x||null==o.y)return null;var h=w(w(w({},{index:r,dataKey:u,cx:o.x,cy:o.y,r:4,fill:null!=c?c:"none",strokeWidth:2,stroke:"#fff",payload:o.payload,value:o.value}),(0,i.svgPropertiesNoEventsFromUnknown)(d)),(0,a.adaptEventHandlers)(d));return n=(0,t.isValidElement)(d)?(0,t.cloneElement)(d,h):"function"==typeof d?d(h):t.createElement(l,h),t.createElement(s.Layer,{className:"recharts-active-dot",clipPath:m},n)};e.s(["ActivePoints",0,function(e){var n=e.points,a=e.mainColor,i=e.activeDot,r=e.itemDataKey,l=e.clipPath,s=e.zIndex,c=void 0===s?m.DefaultZIndexes.activeDot:s,d=(0,v.useAppSelector)(x.selectActiveTooltipIndex),h=(0,y.useActiveTooltipDataPoints)();if(null==n||null==h)return null;var p=n.find(e=>h.includes(e.payload));return(0,o.isNullish)(p)?null:t.createElement(u.ZIndexLayer,{zIndex:c},t.createElement(j,{point:p,childIndex:Number(d),mainColor:a,dataKey:r,activeDot:i,clipPath:l}))}],482593)},554687,e=>{"use strict";var t=e.i(883388);e.s(["getRadiusAndStrokeWidthFromDot",0,function(e){var n=(0,t.svgPropertiesNoEventsFromUnknown)(e);if(null!=n){var a=n.r,i=n.strokeWidth,o=Number(a),r=Number(i);return(Number.isNaN(o)||o<0)&&(o=3),(Number.isNaN(r)||r<0)&&(r=2),{r:o,strokeWidth:r}}return{r:3,strokeWidth:2}}])},321020,e=>{"use strict";e.s(["Area",()=>ex,"computeArea",()=>ev],321020);var t=e.i(191788),n=e.i(56206),a=e.i(815954),i=e.i(301426),o=e.i(789859),r=e.i(270627),l=e.i(516257),s=e.i(106043),c=e.i(482593),d=e.i(128002),u=e.i(777814),m=e.i(314169),h=e.i(83727),p=e.i(901841),f=e.i(399479),g=e.i(365441),b=e.i(755335),v=e.i(780950),x=(e,t,n)=>(0,h.selectAxisWithScale)(e,"xAxis",(0,v.selectXAxisIdFromGraphicalItemId)(e,t),n),y=(e,t,n)=>(0,h.selectTicksOfGraphicalItem)(e,"xAxis",(0,v.selectXAxisIdFromGraphicalItemId)(e,t),n),T=(e,t,n)=>(0,h.selectAxisWithScale)(e,"yAxis",(0,v.selectYAxisIdFromGraphicalItemId)(e,t),n),w=(e,t,n)=>(0,h.selectTicksOfGraphicalItem)(e,"yAxis",(0,v.selectYAxisIdFromGraphicalItemId)(e,t),n),j=(0,m.createSelector)([p.selectChartLayout,x,T,y,w],(e,t,n,a,i)=>(0,l.isCategoricalAxis)(e,"xAxis")?(0,l.getBandSizeOfAxis)(t,a,!1):(0,l.getBandSizeOfAxis)(n,i,!1)),D=(0,m.createSelector)([h.selectUnfilteredCartesianItems,(e,t)=>t],(e,t)=>e.filter(e=>"area"===e.type).find(e=>e.id===t)),A=e=>{var t=(0,p.selectChartLayout)(e);return(0,l.isCategoricalAxis)(t,"xAxis")?"yAxis":"xAxis"},S=(0,m.createSelector)([D,(e,t,n)=>(0,h.selectStackGroups)(e,A(e),"yAxis"===A(e)?(0,v.selectYAxisIdFromGraphicalItemId)(e,t):(0,v.selectXAxisIdFromGraphicalItemId)(e,t),n)],(e,t)=>{if(null!=e&&null!=t){var n,a=e.stackId,i=(0,g.getStackSeriesIdentifier)(e);if(null!=a&&null!=i){var o=null==(n=t[a])?void 0:n.stackedData,r=null==o?void 0:o.find(e=>e.key===i);if(null!=r)return r.map(e=>[e[0],e[1]])}}}),C=(0,m.createSelector)([p.selectChartLayout,x,T,y,w,S,f.selectChartDataWithIndexesIfNotInPanoramaPosition3,j,D,b.selectChartBaseValue],(e,t,n,a,i,o,r,l,s,c)=>{var d,u=r.chartData,m=r.dataStartIndex,h=r.dataEndIndex;if(null!=s&&("horizontal"===e||"vertical"===e)&&null!=t&&null!=n&&null!=a&&null!=i&&0!==a.length&&0!==i.length&&null!=l){var p=s.data;if(null!=(d=p&&p.length>0?p:null==u?void 0:u.slice(m,h+1)))return ev({layout:e,xAxis:t,yAxis:n,xAxisTicks:a,yAxisTicks:i,dataStartIndex:m,areaSettings:s,stackedData:o,displayedData:d,chartBaseValue:c,bandSize:l})}}),M=e.i(662688),k=e.i(524970),E=e.i(836094),I=e.i(543372),P=e.i(945031),H=e.i(634200),V=e.i(325551),z=e.i(297974),R=e.i(630173),L=e.i(768069),B=e.i(436323),O=e.i(883388),_=e.i(554687),Y=e.i(62037),F=e.i(134959),Z=e.i(561622),N=e.i(446354),W=e.i(547810),$=e.i(366998),G=e.i(500678),U=e.i(382863),q=["animationElapsedTime","isAnimating","isEntrance","layout","isRange","stroke","connectNulls"],K=["id","baseLine"];function J(){return(J=Object.assign.bind()).apply(null,arguments)}function X(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n={};for(var a in e)if(({}).hasOwnProperty.call(e,a)){if(-1!==t.indexOf(a))continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],-1===t.indexOf(n)&&({}).propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Q(e){var n,a,i=e.alpha,o=e.baseLine,l=e.points,s=e.strokeWidth,c=null==(n=l[0])?void 0:n.x,d=null==(a=l[l.length-1])?void 0:a.x;if(!(0,G.isWellBehavedNumber)(c)||!(0,G.isWellBehavedNumber)(d))return null;var u=i*Math.abs(c-d),m=Math.max(...l.map(e=>e.y||0));return((0,r.isNumber)(o)?m=Math.max(o,m):o&&Array.isArray(o)&&o.length&&(m=Math.max(...o.map(e=>e.y||0),m)),(0,r.isNumber)(m))?t.createElement("rect",{x:c<d?c:c-u,y:0,width:u,height:Math.floor(m+(s?parseInt("".concat(s),10):1))}):null}function ee(e){var n,a,i=e.alpha,o=e.baseLine,l=e.points,s=e.strokeWidth,c=null==(n=l[0])?void 0:n.y,d=null==(a=l[l.length-1])?void 0:a.y;if(!(0,G.isWellBehavedNumber)(c)||!(0,G.isWellBehavedNumber)(d))return null;var u=i*Math.abs(c-d),m=Math.max(...l.map(e=>e.x||0));return((0,r.isNumber)(o)?m=Math.max(o,m):o&&Array.isArray(o)&&o.length&&(m=Math.max(...o.map(e=>e.x||0),m)),(0,r.isNumber)(m))?t.createElement("rect",{x:0,y:c<d?c:c-u,width:m+(s?parseInt("".concat(s),10):1),height:Math.floor(u)}):null}function et(e){var n=e.alpha,a=e.layout,i=e.points,o=e.baseLine,r=e.strokeWidth;return"vertical"===a?t.createElement(ee,{alpha:n,points:i,baseLine:o,strokeWidth:r}):t.createElement(Q,{alpha:n,points:i,baseLine:o,strokeWidth:r})}var en=["id"],ea=["activeDot","animationBegin","animationDuration","animationEasing","connectNulls","dot","fill","fillOpacity","hide","isAnimationActive","legendType","stroke","xAxisId","yAxisId"];function ei(){return(ei=Object.assign.bind()).apply(null,arguments)}function eo(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n={};for(var a in e)if(({}).hasOwnProperty.call(e,a)){if(-1!==t.indexOf(a))continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],-1===t.indexOf(n)&&({}).propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function er(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function el(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?er(Object(n),!0).forEach(function(t){var a,i,o;a=e,i=t,o=n[t],(i=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(i))in a?Object.defineProperty(a,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[i]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):er(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var es={activeDot:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",animationMatchBy:H.matchByIndex,animationInterpolateFn:(e,t)=>null==e?[]:1===t?e.flatMap(e=>"removed"===e.status?[]:[e.next]):e.flatMap(e=>"matched"===e.status?[el(el({},e.next),{},{x:(0,r.interpolate)(e.prev.x,e.next.x,t),y:(0,r.interpolate)(e.prev.y,e.next.y,t)})]:"added"===e.status?[e.next]:[]),connectNulls:!1,dot:!1,fill:"#3182bd",fillOpacity:.6,hide:!1,isAnimationActive:"auto",legendType:"line",stroke:"#3182bd",strokeWidth:1,type:"linear",label:!1,shape:function(e){var n,i=e.animationElapsedTime,o=void 0===i?1:i,r=e.isAnimating,l=e.isEntrance,s=e.layout,c=e.isRange,d=e.stroke,u=e.connectNulls,m=X(e,q),h="vertical"===s?"vertical":"horizontal",p=null!=u&&u,f=(0,U.useId)(),g=m.id,b=m.baseLine,v=X(m,K),x=(0,O.svgPropertiesNoEvents)(v),y=t.createElement($.Curve,J({},m,{id:g,baseLine:b,connectNulls:p,stroke:"none",className:"recharts-area-area",layout:h})),T="none"!==d&&t.createElement($.Curve,J({},x,{className:"recharts-area-curve",layout:h,type:m.type,connectNulls:p,fill:"none",stroke:d,points:m.points})),w="none"!==d&&c&&Array.isArray(b)&&t.createElement($.Curve,J({},x,{className:"recharts-area-curve",layout:h,type:m.type,connectNulls:p,fill:"none",stroke:d,points:b}));return void 0!==l&&l&&(void 0!==r&&r||o<1)?t.createElement(a.Layer,null,t.createElement("defs",null,t.createElement("clipPath",{id:f},t.createElement(et,{alpha:o,points:null!=(n=m.points)?n:[],baseLine:b,layout:h,strokeWidth:m.strokeWidth}))),t.createElement(a.Layer,{clipPath:"url(#".concat(f,")")},y,T,w)):t.createElement(t.Fragment,null,y,T,w)},xAxisId:0,yAxisId:0,zIndex:N.DefaultZIndexes.area};function ec(e,t){return e&&"none"!==e?e:t}var ed=t.memo(e=>{var n=e.dataKey,a=e.data,i=e.stroke,o=e.strokeWidth,s=e.fill,c=e.name,u=e.hide,m=e.unit,h=e.formatter,p=e.tooltipType,f=e.id,g={dataDefinedOnItem:a,getPosition:r.noop,settings:{stroke:i,strokeWidth:o,fill:s,dataKey:n,nameKey:void 0,name:(0,l.getTooltipNameProp)(c,n),hide:u,type:p,color:ec(i,s),unit:m,formatter:h,graphicalItemId:f}};return t.createElement(d.SetTooltipEntrySettings,{tooltipEntrySettings:g})});function eu(e){var n=e.clipPathId,a=e.points,i=e.props,r=i.needClip,l=i.dot,s=i.dataKey,c=(0,O.svgPropertiesNoEvents)(i);return t.createElement(o.Dots,{points:a,dot:l,className:"recharts-area-dots",dotClassName:"recharts-area-dot",dataKey:s,baseProps:c,needClip:r,clipPathId:n})}function em(e){var n=e.showLabels,a=e.children,o=e.points.map(e=>{var t,n,a={x:null!=(t=e.x)?t:0,y:null!=(n=e.y)?n:0,width:0,lowerWidth:0,upperWidth:0,height:0};return el(el({},a),{},{value:e.value,payload:e.payload,parentViewBox:void 0,viewBox:a,fill:void 0})});return t.createElement(i.CartesianLabelListContextProvider,{value:n?o:void 0},a)}function eh(e){var n=e.points,i=e.baseLine,o=e.needClip,r=e.clipPathId,l=e.props,s=e.animationElapsedTime,c=e.isAnimating,d=e.isEntrance,u=l.layout,m=l.type,h=l.stroke,p=l.connectNulls,f=l.isRange,g=l.shape,b=l.id,v=eo(l,en),x=el(el({},(0,Y.svgPropertiesAndEvents)(v)),{},{id:b,points:n,connectNulls:p,type:m,baseLine:i,layout:u,stroke:h,isRange:f,animationElapsedTime:s,isAnimating:c,isEntrance:d});return t.createElement(t.Fragment,null,(null==n?void 0:n.length)>1&&t.createElement(a.Layer,{clipPath:o?"url(#clipPath-".concat(r,")"):void 0},t.createElement(F.Shape,{option:g,DefaultShape:es.shape,shapeProps:x})),t.createElement(eu,{points:n,props:v,clipPathId:r}))}function ep(e){var n,a=e.needClip,o=e.clipPathId,l=e.props,s=e.previousPointsRef,c=e.previousBaselineRef,d=l.points,u=l.baseLine,m=l.isAnimationActive,h=l.animationBegin,f=l.animationDuration,g=l.animationEasing,b=l.animationMatchBy,v=l.animationInterpolateFn,x=(0,t.useMemo)(()=>({points:d,baseLine:u}),[d,u]),y=(0,V.useAnimationStartSnapshot)(x,c),T=(0,p.useCartesianChartLayout)(),w=(0,P.useAnimationCallbacks)(l.onAnimationStart,l.onAnimationEnd),j=w.isAnimating,D=w.handleAnimationStart,A=w.handleAnimationEnd,S=y.startValue;return null==T?null:(n=Array.isArray(u)&&Array.isArray(S)?(0,H.matchAnimationItems)(S,u,b):Array.isArray(u)?(0,H.matchAnimationItems)(null,u,b):null,t.createElement(P.AnimatedItems,{animationInput:x,animationIdPrefix:"recharts-area-",items:d,previousItemsRef:s,isAnimationActive:m,animationBegin:h,animationDuration:f,animationEasing:g,onAnimationStart:D,onAnimationEnd:A,animationInterpolateFn:v,animationMatchBy:b,layout:T},(e,s,c)=>{var m;return m=1===s?u:Array.isArray(u)?v(n,s,T):c?u:function(e,t,n){if((0,r.isNumber)(e)){var a=(0,r.isNumber)(t)?t:void 0;return(0,r.interpolate)(a,e,n)}if((0,r.isNullish)(e)||(0,r.isNan)(e)){var i=(0,r.isNumber)(t)?t:void 0;return(0,r.interpolate)(i,0,n)}return e}(u,S,s),y.syncStepValue(m,s),t.createElement(em,{showLabels:!j,points:d},l.children,t.createElement(eh,{points:e,baseLine:m,needClip:a,clipPathId:o,props:l,animationElapsedTime:s,isAnimating:j||s<1,isEntrance:c}),t.createElement(i.LabelListFromLabelProp,{label:l.label}))}))}function ef(e){var n=e.needClip,a=e.clipPathId,i=e.props,o=(0,t.useRef)(null),r=(0,t.useRef)();return t.createElement(ep,{needClip:n,clipPathId:a,props:i,previousPointsRef:o,previousBaselineRef:r})}class eg extends t.PureComponent{render(){var e=this.props,i=e.hide,o=e.dot,r=e.points,l=e.className,d=e.top,m=e.left,h=e.needClip,p=e.xAxisId,f=e.yAxisId,g=e.width,b=e.height,v=e.id,x=e.baseLine,y=e.zIndex;if(i)return null;var T=(0,n.clsx)("recharts-area",l),w=(0,_.getRadiusAndStrokeWidthFromDot)(o),j=w.r,D=w.strokeWidth,A=(0,s.isClipDot)(o),S=2*j+D,C=h?"url(#clipPath-".concat(A?"":"dots-").concat(v,")"):void 0;return t.createElement(Z.ZIndexLayer,{zIndex:y},t.createElement(a.Layer,{className:T},h&&t.createElement("defs",null,t.createElement(u.GraphicalItemClipPath,{clipPathId:v,xAxisId:p,yAxisId:f}),!A&&t.createElement("clipPath",{id:"clipPath-dots-".concat(v)},t.createElement("rect",{x:m-S/2,y:d-S/2,width:g+S,height:b+S}))),t.createElement(ef,{needClip:h,clipPathId:v,props:this.props})),t.createElement(c.ActivePoints,{points:r,mainColor:ec(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:C}),this.props.isRange&&Array.isArray(x)&&t.createElement(c.ActivePoints,{points:x,mainColor:ec(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:C}))}}function eb(e){var n,a=e.activeDot,i=e.animationBegin,o=e.animationDuration,r=e.animationEasing,l=e.connectNulls,s=e.dot,c=e.fill,d=e.fillOpacity,m=e.hide,h=e.isAnimationActive,f=e.legendType,g=e.stroke,b=e.xAxisId,v=e.yAxisId,x=eo(e,ea),y=(0,p.useChartLayout)(),T=(0,k.useChartName)(),w=(0,u.useNeedsClip)(b,v).needClip,j=(0,M.useIsPanorama)(),D=null!=(n=(0,I.useAppSelector)(t=>C(t,e.id,j)))?n:{},A=D.points,S=D.isRange,E=D.baseLine,P=(0,R.usePlotArea)();if("horizontal"!==y&&"vertical"!==y||null==P||"AreaChart"!==T&&"ComposedChart"!==T)return null;var H=P.height,V=P.width,z=P.x,L=P.y;return A&&A.length?t.createElement(eg,ei({},x,{activeDot:a,animationBegin:i,animationDuration:o,animationEasing:r,baseLine:E,connectNulls:l,dot:s,fill:c,fillOpacity:d,height:H,hide:m,layout:y,isAnimationActive:h,isRange:S,legendType:f,needClip:w,points:A,stroke:g,width:V,left:z,top:L,xAxisId:b,yAxisId:v})):null}function ev(e){var t,n=e.areaSettings,a=n.connectNulls,i=n.baseValue,o=n.dataKey,s=e.stackedData,c=e.layout,d=e.chartBaseValue,u=e.xAxis,m=e.yAxis,h=e.displayedData,p=e.dataStartIndex,f=e.xAxisTicks,g=e.yAxisTicks,b=e.bandSize,v=s&&s.length,x=((e,t,n,a,i)=>{var o=null!=n?n:t;if((0,r.isNumber)(o))return o;var l="horizontal"===e?i:a,s=l.scale.domain();if("number"===l.type){var c=Math.max(s[0],s[1]),d=Math.min(s[0],s[1]);return"dataMin"===o?d:"dataMax"===o||c<0?c:Math.max(Math.min(s[0],s[1]),0)}return"dataMin"===o?s[0]:"dataMax"===o?s[1]:s[0]})(c,d,i,u,m),y="horizontal"===c,T=!1,w=h.map((e,t)=>{if(v)c=s[p+t];else{var n,i,r,c,d,h=(0,l.getValueByDataKey)(e,o);Array.isArray(h)?(c=h,T=!0):c=[x,h]}var w=null!=(n=null==(i=c)?void 0:i[1])?n:null,j=null==w||v&&!a&&null==(0,l.getValueByDataKey)(e,o);return y?{x:(0,l.getCateCoordinateOfLine)({axis:u,ticks:f,bandSize:b,entry:e,index:t}),y:j?null:null!=(d=m.scale.map(w))?d:null,value:c,payload:e}:{x:j?null:null!=(r=u.scale.map(w))?r:null,y:(0,l.getCateCoordinateOfLine)({axis:m,ticks:g,bandSize:b,entry:e,index:t}),value:c,payload:e}});return t=v||T?w.map(e=>{var t,n,a=Array.isArray(e.value)?e.value[0]:null;return y?{x:e.x,y:null!=a&&null!=e.y&&null!=(n=m.scale.map(a))?n:null,payload:e.payload}:{x:null!=a&&null!=(t=u.scale.map(a))?t:null,y:e.y,payload:e.payload}}):y?m.scale.map(x):u.scale.map(x),{points:w,baseLine:null!=t?t:0,isRange:T}}var ex=t.memo(function(e){var n=(0,z.resolveDefaultProps)(e,es),a=(0,M.useIsPanorama)();return t.createElement(L.RegisterGraphicalItemId,{id:n.id,type:"area"},e=>{var i,o,r,s,c;return t.createElement(t.Fragment,null,t.createElement(E.SetLegendPayload,{legendPayload:(i=n.dataKey,o=n.name,r=n.stroke,s=n.fill,c=n.legendType,[{inactive:n.hide,dataKey:i,type:c,color:ec(r,s),value:(0,l.getTooltipNameProp)(o,i),payload:n}])}),t.createElement(ed,{dataKey:n.dataKey,data:n.data,stroke:n.stroke,strokeWidth:n.strokeWidth,fill:n.fill,name:n.name,hide:n.hide,unit:n.unit,formatter:n.formatter,tooltipType:n.tooltipType,id:e}),t.createElement(B.SetCartesianGraphicalItem,{type:"area",id:e,data:n.data,dataKey:n.dataKey,xAxisId:n.xAxisId,yAxisId:n.yAxisId,zAxisId:0,stackId:(0,l.getNormalizedStackId)(n.stackId),hide:n.hide,barSize:void 0,baseValue:n.baseValue,isPanorama:a,connectNulls:n.connectNulls}),t.createElement(eb,ei({},n,{id:e})))})},W.propsAreEqual);ex.displayName="Area"},990865,378097,e=>{"use strict";var t=e.i(391398);function n({color:e,id:a,withGradient:i,fillOpacity:o}){return(0,t.jsx)(t.Fragment,{children:i?(0,t.jsxs)("linearGradient",{id:a,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:e,stopOpacity:o}),(0,t.jsx)("stop",{offset:"100%",stopColor:e,stopOpacity:.01})]}):(0,t.jsx)("linearGradient",{id:a,x1:"0",y1:"0",x2:"0",y2:"1",children:(0,t.jsx)("stop",{stopColor:e,stopOpacity:o??.2})})})}n.displayName="@mantine/charts/AreaGradient",e.s(["AreaGradient",0,n],990865);var a=e.i(191788),i=e.i(471970),o=e.i(437515),r=["axis"],l=(0,a.forwardRef)((e,t)=>a.createElement(o.CartesianChart,{chartName:"AreaChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:r,tooltipPayloadSearcher:i.arrayTooltipSearcher,categoricalChartProps:e,ref:t}));e.s(["AreaChart",0,l],378097)},556457,103738,e=>{"use strict";var t=e.i(729262),n=e.i(332977),a=e.i(191788),i=e.i(730943);function o(e){return e.current?e.current.scrollHeight:"auto"}function r(e){return e.current?e.current.scrollWidth:"auto"}e.s(["useCollapse",0,function({transitionDuration:e,transitionTimingFunction:r="ease",onTransitionEnd:l,onTransitionStart:s,expanded:c,keepMounted:d}){let u={height:0,overflow:"hidden",...d?{}:{display:"none"}},m=(0,a.useEffectEvent)(()=>s?.()),h=(0,a.useRef)(null),[p,f]=(0,a.useState)(c?{}:u),[g,b]=(0,a.useState)(c?"entered":"exited"),v=e=>{(0,i.flushSync)(()=>f(e))},x=e=>{v(t=>({...t,...e}))},y=t=>{let n=e??function(e){if(!e||"string"==typeof e)return 0;let t=e/36;return Math.round((4+15*t**.25+t/5)*10)}(t);return{transition:`height ${n}ms ${r}, opacity ${n}ms ${r}`}};(0,t.useDidUpdate)(()=>{0!==e&&m(),c?window.requestAnimationFrame(()=>{(0,i.flushSync)(()=>b("entering")),x({willChange:"height",display:"block",overflow:"hidden"}),window.requestAnimationFrame(()=>{let e=o(h);x({...y(e),height:e})})}):window.requestAnimationFrame(()=>{(0,i.flushSync)(()=>b("exiting"));let e=o(h);x({...y(e),willChange:"height",height:e}),window.requestAnimationFrame(()=>x({height:0,overflow:"hidden"}))})},[c]);let T=e=>{if(e.target===h.current&&"height"===e.propertyName)if(c){let e=o(h);e===p.height?v({}):x({height:e}),b("entered"),l?.()}else 0===p.height&&(v(u),b("exited"),l?.())};return{state:g,getCollapseProps:e=>({"aria-hidden":!c,inert:!c,ref:(0,n.mergeRefs)(h,e?.ref),onTransitionEnd:T,style:{boxSizing:"border-box",...e?.style,...p}})}}],556457),e.s(["useHorizontalCollapse",0,function({transitionDuration:e,transitionTimingFunction:o="ease",onTransitionEnd:l,onTransitionStart:s,expanded:c,keepMounted:d}){let u={width:0,overflow:"hidden",...d?{}:{display:"none"}},m=(0,a.useEffectEvent)(()=>s?.()),h=(0,a.useRef)(null),[p,f]=(0,a.useState)(c?{}:u),[g,b]=(0,a.useState)(c?"entered":"exited"),v=e=>{(0,i.flushSync)(()=>f(e))},x=e=>{v(t=>({...t,...e}))},y=t=>{let n=e??function(e){if(!e||"string"==typeof e)return 0;let t=e/36;return Math.round((4+15*t**.25+t/5)*10)}(t);return{transition:`width ${n}ms ${o}, opacity ${n}ms ${o}`}};(0,t.useDidUpdate)(()=>{0!==e&&m(),c?window.requestAnimationFrame(()=>{(0,i.flushSync)(()=>b("entering")),x({willChange:"width",display:"block",overflow:"hidden"}),window.requestAnimationFrame(()=>{let e=r(h);x({...y(e),width:e})})}):window.requestAnimationFrame(()=>{(0,i.flushSync)(()=>b("exiting"));let e=r(h);x({...y(e),willChange:"width",width:e}),window.requestAnimationFrame(()=>x({width:0,overflow:"hidden"}))})},[c]);let T=e=>{if(e.target===h.current&&"width"===e.propertyName)if(c){let e=r(h);e===p.width?v({}):x({width:e}),b("entered"),l?.()}else 0===p.width&&(v(u),b("exited"),l?.())};return{state:g,getCollapseProps:e=>({"aria-hidden":!c,inert:!c,ref:(0,n.mergeRefs)(h,e?.ref),onTransitionEnd:T,style:{boxSizing:"border-box",...e?.style,...p}})}}],103738)},586692,e=>{"use strict";var t=e.i(330693),n=e.i(951254),a=e.i(44091),i=e.i(634917),o=e.i(275519),r=e.i(232471),l=e.i(191788),s=e.i(556457),c=e.i(103738),d=e.i(779861),u=e.i(391398);let m={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0,orientation:"vertical",keepMounted:!0,keepMountedMode:"activity"},h=(0,o.factory)(e=>{let o,{children:h,expanded:p,transitionDuration:f,transitionTimingFunction:g,style:b,onTransitionEnd:v,onTransitionStart:x,animateOpacity:y,keepMounted:T,keepMountedMode:w,ref:j,orientation:D,...A}=(0,a.useProps)("Collapse",m,e),S=(0,t.useMantineEnv)(),C=(0,n.useMantineTheme)(),M=(0,d.useReducedMotion)(),k=C.respectReducedMotion&&M?0:f,E=("horizontal"===D?c.useHorizontalCollapse:s.useCollapse)({expanded:p,transitionDuration:k,transitionTimingFunction:g,onTransitionEnd:v,onTransitionStart:x,keepMounted:!1});if(0===k)return!0===T&&("display-none"===w||"test"!==S)?"display-none"===w?(0,u.jsx)(r.Box,{...A,style:{...(0,i.getStyleObject)(b,C),...!p?{display:"none"}:{}},ref:j,children:h}):(0,u.jsx)(l.Activity,{mode:p?"visible":"hidden",children:(0,u.jsx)(r.Box,{...A,style:b,ref:j,children:h})}):p?(0,u.jsx)(r.Box,{...A,style:b,ref:j,children:h}):null;let I="exited"===E.state;return o=!1===T?I?null:h:!0===T?"display-none"===w?h:(0,u.jsx)(l.Activity,{mode:I?"hidden":"visible",children:h}):h,(0,u.jsx)(r.Box,{...A,...E.getCollapseProps({style:{opacity:p||!y?1:0,transition:y?`opacity ${k}ms ${g}`:"none",...(0,i.getStyleObject)(b,C),...T&&"display-none"===w&&I?{display:"none"}:{}},ref:j}),children:o})});h.displayName="@mantine/core/Collapse",e.s(["Collapse",0,h])},20035,e=>{"use strict";var t=e.i(481178),n=e.i(44091),a=e.i(391466),i=e.i(83353),o=e.i(275519),r=e.i(232471);let[l,s]=(0,e.i(386179).createSafeContext)("Grid component was not found in tree");var c={container:"m_8478a6da",root:"m_410352e9",inner:"m_dee7bd2f",col:"m_96bdd299"},d=e.i(76112),u=e.i(931718),m=e.i(230780),h=e.i(496766),p=e.i(951254),f=e.i(871346),g=e.i(391398);let b=(e,t)=>"content"===e?"auto":"auto"===e?"0rem":e?e===t?"100%":`calc(${100*e/t}% - ${(t-e)/t} * var(--grid-column-gap))`:void 0,v=(e,t,n)=>n||"auto"===e?"100%":"content"===e?"unset":b(e,t),x=(e,t)=>{if(e)return"auto"===e||t?"1":"auto"},y=(e,t)=>0===e?"0":e?`calc(${100*e/t}% + ${e/t} * var(--grid-column-gap))`:void 0;function T({span:e,order:t,offset:n,align:a,selector:i}){let o=(0,p.useMantineTheme)(),r=s(),l=r.breakpoints||o.breakpoints,c=(0,h.getBaseValue)(e),w=void 0===c?12:c,j=(0,u.filterProps)({"--col-order":(0,h.getBaseValue)(t)?.toString(),"--col-flex-grow":x(w,r.grow),"--col-flex-basis":b(w,r.columns),"--col-width":"content"===w?"auto":void 0,"--col-max-width":v(w,r.columns,r.grow),"--col-offset":y((0,h.getBaseValue)(n),r.columns),"--col-align-self":(0,h.getBaseValue)(a)}),D=(0,d.keys)(l).reduce((i,o)=>(i[o]||(i[o]={}),"object"==typeof t&&void 0!==t[o]&&(i[o]["--col-order"]=t[o]?.toString()),"object"==typeof e&&void 0!==e[o]&&(i[o]["--col-flex-grow"]=x(e[o],r.grow),i[o]["--col-flex-basis"]=b(e[o],r.columns),i[o]["--col-width"]="content"===e[o]?"auto":void 0,i[o]["--col-max-width"]=v(e[o],r.columns,r.grow)),"object"==typeof n&&void 0!==n[o]&&(i[o]["--col-offset"]=y(n[o],r.columns)),"object"==typeof a&&void 0!==a[o]&&(i[o]["--col-align-self"]=a[o]),i),{}),A=(0,m.getSortedBreakpoints)((0,d.keys)(D),l).filter(e=>(0,d.keys)(D[e.value]).length>0).map(e=>({query:"container"===r.type?`mantine-grid (min-width: ${l[e.value]})`:`(min-width: ${l[e.value]})`,styles:D[e.value]}));return(0,g.jsx)(f.InlineStyles,{styles:j,media:"container"===r.type?void 0:A,container:"container"===r.type?A:void 0,selector:i})}var w=e.i(56206);let j={span:12},D=(0,o.factory)(e=>{let{classNames:t,className:a,style:o,styles:l,vars:c,span:d,order:u,offset:m,align:h,...p}=(0,n.useProps)("GridCol",j,e),f=s(),b=(0,i.useRandomClassName)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(T,{selector:`.${b}`,span:d,order:u,offset:m,align:h}),(0,g.jsx)(r.Box,{...f.getStyles("col",{className:(0,w.default)(a,b),style:o,classNames:t,styles:l}),...p})]})});D.classes=c,D.displayName="@mantine/core/GridCol";var A=e.i(433512);function S({gap:e,rowGap:t,columnGap:n,selector:a,breakpoints:i,type:o}){let r=(0,p.useMantineTheme)(),l=i||r.breakpoints,s=(0,u.filterProps)({"--grid-gap":(0,A.getSpacing)((0,h.getBaseValue)(e)),"--grid-row-gap":(0,A.getSpacing)((0,h.getBaseValue)(t)),"--grid-column-gap":(0,A.getSpacing)((0,h.getBaseValue)(n))}),c=(0,d.keys)(l).reduce((a,i)=>(a[i]||(a[i]={}),"object"==typeof e&&void 0!==e[i]&&(a[i]["--grid-gap"]=(0,A.getSpacing)(e[i])),"object"==typeof t&&void 0!==t[i]&&(a[i]["--grid-row-gap"]=(0,A.getSpacing)(t[i])),"object"==typeof n&&void 0!==n[i]&&(a[i]["--grid-column-gap"]=(0,A.getSpacing)(n[i])),a),{}),b=(0,m.getSortedBreakpoints)((0,d.keys)(c),l).filter(e=>(0,d.keys)(c[e.value]).length>0).map(e=>({query:"container"===o?`mantine-grid (min-width: ${l[e.value]})`:`(min-width: ${l[e.value]})`,styles:c[e.value]}));return(0,g.jsx)(f.InlineStyles,{styles:s,media:"container"===o?void 0:b,container:"container"===o?b:void 0,selector:a})}let C={gap:"md",columns:12},M=(0,t.createVarsResolver)((e,{justify:t,align:n,overflow:a})=>({root:{"--grid-justify":t,"--grid-align":n,"--grid-overflow":a}})),k=(0,o.factory)(e=>{let t=(0,n.useProps)("Grid",C,e),{classNames:o,className:s,style:d,styles:u,unstyled:m,vars:h,grow:p,gap:f,rowGap:b,columnGap:v,columns:x,align:y,justify:T,children:w,breakpoints:j,type:D,attributes:A,...k}=t,E=(0,a.useStyles)({name:"Grid",classes:c,props:t,className:s,style:d,classNames:o,styles:u,unstyled:m,attributes:A,vars:h,varsResolver:M}),I=(0,i.useRandomClassName)();return"container"===D&&j?(0,g.jsxs)(l,{value:{getStyles:E,grow:p,columns:x,breakpoints:j,type:D},children:[(0,g.jsx)(S,{selector:`.${I}`,...t}),(0,g.jsx)("div",{...E("container"),children:(0,g.jsx)(r.Box,{...E("root",{className:I}),...k,children:(0,g.jsx)("div",{...E("inner"),children:w})})})]}):(0,g.jsxs)(l,{value:{getStyles:E,grow:p,columns:x,breakpoints:j,type:D},children:[(0,g.jsx)(S,{selector:`.${I}`,...t}),(0,g.jsx)(r.Box,{...E("root",{className:I}),...k,children:(0,g.jsx)("div",{...E("inner"),children:w})})]})});k.classes=c,k.varsResolver=M,k.displayName="@mantine/core/Grid",k.Col=D,e.s(["Grid",0,k],20035)},67312,e=>{"use strict";var t=e.i(86473),n=e.i(891343),a={moreEventsButton:"m_c958249f",moreEventsDropdown:"m_fc2b9a3e",moreEventsList:"m_89f3254b"},i=e.i(424302),o=e.i(392862),r=e.i(284629),l=e.i(275519),s=e.i(44091),c=e.i(391466),d=e.i(541772),u=e.i(391398);let m={dropdownType:"popover"},h=(0,l.factory)(e=>{let l=(0,s.useProps)("MoreEvents",m,e),{classNames:h,className:p,style:f,styles:g,unstyled:b,vars:v,attributes:x,radius:y,dropdownType:T,events:w,moreEventsCount:j,popoverProps:D,modalProps:A,onDropdownClose:S,children:C,modalTitle:M,renderEventBody:k,renderEvent:E,id:I,labels:P,mode:H,onEventClick:V,...z}=l,[R,L]=(0,d.useDisclosure)(),B=(0,c.useStyles)({name:"MoreEvents",classes:a,props:l,className:p,style:f,classNames:h,styles:g,unstyled:b,attributes:x,vars:v,rootSelector:"moreEventsButton"}),O=()=>{L.close(),S?.()},_=(0,u.jsx)("div",{...B("moreEventsList"),children:w.map(e=>(0,u.jsx)(n.ScheduleEvent,{radius:y,event:e,size:"md",renderEventBody:k,renderEvent:E,mode:H,onClick:V?t=>V(e,t):void 0,children:e.title},e.id))});return(0,u.jsxs)(u.Fragment,{children:["modal"===T&&(0,u.jsx)(i.Modal,{opened:R,onClose:O,unstyled:b,radius:y,title:M,...A,children:_}),(0,u.jsxs)(o.Popover,{position:"bottom-start",width:260,opened:R,trapFocus:!0,returnFocus:!1,unstyled:b,disabled:D?.disabled||"modal"===T,radius:y,transitionProps:{transition:"pop",duration:120},offset:-46,id:I,...D,onChange:e=>{e||(D?.onChange?.(e),O())},children:[(0,u.jsx)(o.Popover.Target,{children:(0,u.jsx)(r.UnstyledButton,{...B("moreEventsButton"),mod:{static:"static"===H},onClick:()=>L.toggle(),...z,children:(0,t.getLabel)("moreLabel",P)(j)})}),(0,u.jsx)(o.Popover.Dropdown,{...B("moreEventsDropdown"),children:_})]})]})});h.displayName="@mantine/schedule/MoreEvents",h.classes=a,e.s(["MoreEvents",0,h],67312)},922621,e=>{"use strict";var t=e.i(969610),n=e.i(813982),a=e.i(751198),i=e.i(532965);e.s(["getDayPositionedEvents",0,function({events:e,startTime:o,endTime:r,intervalMinutes:l,date:s}){let c=[],d=[];for(let u of(0,n.sortEvents)(e)){let e=(0,t.isAllDayEvent)({event:u,date:s}),n=0;for(;function({columns:e,columnIndex:n,event:i,allDay:o,date:r}){return!!e[n]&&e[n].some(e=>{let n=(0,t.isAllDayEvent)({event:e,date:r}),l=(0,a.isEventsOverlap)(e,i);return!o&&!n&&l})}({columns:c,columnIndex:n,event:u,allDay:e,date:s});)n++;c[n]||(c[n]=[]),c[n].push(u);let m=e?{top:0,height:100}:(0,i.getDayPosition)({event:u,startTime:o,endTime:r,intervalMinutes:l});d.push({...u,position:{...m,allDay:e,column:n,width:0,offset:0,overlaps:0}})}for(let e of d){let{allDay:t,column:n}=e.position;if(t){e.position.overlaps=1,e.position.width=100,e.position.offset=0;continue}let i=[];for(let t of d)t!==e&&!t.position.allDay&&(0,a.isEventsOverlap)(t,e)&&i.push(t);let o=n;for(let e of i)for(let t of(o=Math.max(o,e.position.column),d))t!==e&&!t.position.allDay&&(0,a.isEventsOverlap)(t,e)&&(o=Math.max(o,t.position.column));let r=o+1,l=r;for(let e of i)e.position.column>n&&e.position.column<l&&(l=e.position.column);let s=l-n;e.position.overlaps=r,e.position.width=s/r*100,e.position.offset=100*n/r}return d}])},369974,e=>{"use strict";var t=e.i(44091),n=e.i(392862);let[a,i]=(0,e.i(386179).createSafeContext)("HoverCard component was not found in the tree");var o=e.i(191788),r=e.i(391398),l=e.i(458272);let s=(0,o.createContext)({withinGroup:!1}),c={openDelay:0,closeDelay:0};function d(e){let{openDelay:n,closeDelay:a,children:i}=(0,t.useProps)("HoverCardGroup",c,e);return(0,r.jsx)(s,{value:{withinGroup:!0},children:(0,r.jsx)(l.FloatingDelayGroup,{delay:{open:n,close:a},children:i})})}d.displayName="@mantine/core/HoverCardGroup",d.extend=e=>e;var u=e.i(334816);function m(e){let{children:a,onMouseEnter:l,onMouseLeave:c,...d}=(0,t.useProps)("HoverCardDropdown",null,e),m=i();if((0,o.use)(s).withinGroup&&m.getFloatingProps&&m.floating){let e=m.getFloatingProps();return(0,r.jsx)(n.Popover.Dropdown,{ref:m.floating,...e,onMouseEnter:(0,u.createEventHandler)(l,e.onMouseEnter),onMouseLeave:(0,u.createEventHandler)(c,e.onMouseLeave),...d,children:a})}let h=(0,u.createEventHandler)(l,m.openDropdown),p=(0,u.createEventHandler)(c,m.closeDropdown);return(0,r.jsx)(n.Popover.Dropdown,{onMouseEnter:h,onMouseLeave:p,...d,children:a})}m.displayName="@mantine/core/HoverCardDropdown";var h=e.i(275825),p=e.i(409703),f=e.i(332977);let g={refProp:"ref"};function b(e){let{children:a,refProp:l,eventPropsWrapperName:c,...d}=(0,t.useProps)("HoverCardTarget",g,e),m=(0,p.getSingleElementChild)(a);if(!m)throw Error("HoverCard.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let b=i(),v=(0,o.use)(s),x=(0,f.useMergedRef)((0,h.getRefProp)(m),b.assignTarget);if(v.withinGroup&&b.getReferenceProps&&b.reference){let e=b.getReferenceProps();return(0,r.jsx)(n.Popover.Target,{refProp:l,...d,children:(0,o.cloneElement)(m,c?{[c]:{...e,ref:b.reference}}:{...e,ref:b.reference})})}let y={onMouseEnter:(0,u.createEventHandler)(m.props.onMouseEnter,b.openDropdown),onMouseLeave:(0,u.createEventHandler)(m.props.onMouseLeave,b.closeDropdown)},T={...c?{[c]:y}:y,ref:x};return(0,r.jsx)(n.Popover.Target,{refProp:l,...d,children:(0,o.cloneElement)(m,T)})}b.displayName="@mantine/core/HoverCardTarget";var v=e.i(107315);let x={openDelay:0,closeDelay:150,initiallyOpened:!1};function y(e){let{children:i,onOpen:c,onClose:d,openDelay:u,closeDelay:m,initiallyOpened:h,...p}=(0,t.useProps)("HoverCard",x,e),f=function(e){let[t,n]=(0,o.useState)(e.defaultOpened),a="boolean"==typeof e.opened?e.opened:t,i=(0,o.use)(s).withinGroup,r=(0,v.useId)(),c=(0,o.useRef)(-1),d=(0,o.useRef)(-1),u=(0,o.useRef)(null),m=(0,o.useCallback)(e=>{u.current=e},[]),h=(0,o.useCallback)(()=>{window.clearTimeout(c.current),window.clearTimeout(d.current)},[]),p=(0,o.useCallback)(t=>{n(t),t?(x(r),e.onOpen?.()):e.onClose?.()},[r,e.onOpen,e.onClose]),{context:f,refs:g}=(0,l.useFloating)({open:a,onOpenChange:p}),{delay:b,setCurrentId:x}=(0,l.useDelayGroup)(f,{id:r}),{getReferenceProps:y,getFloatingProps:T}=(0,l.useInteractions)([(0,l.useHover)(f,{enabled:!0,delay:i?b:{open:e.openDelay,close:e.closeDelay}}),(0,l.useRole)(f,{role:"dialog"}),(0,l.useDismiss)(f,{enabled:i})]),w=(0,o.useCallback)(()=>{i||(h(),0===e.openDelay||void 0===e.openDelay?p(!0):c.current=window.setTimeout(()=>p(!0),e.openDelay))},[i,h,e.openDelay,p]),j=(0,o.useCallback)(()=>{i||(h(),0===e.closeDelay||void 0===e.closeDelay?p(!1):d.current=window.setTimeout(()=>p(!1),e.closeDelay))},[i,h,e.closeDelay,p]),D=(0,o.useRef)(p);return D.current=p,(0,o.useEffect)(()=>()=>h(),[h]),(0,o.useEffect)(()=>{if(!a||i||"u"<typeof IntersectionObserver)return;let e=u.current;if(!e)return;let t=new IntersectionObserver(()=>{e.isConnected&&0!==e.getClientRects().length||(h(),D.current(!1))});return t.observe(e),()=>t.disconnect()},[a,i,h]),{opened:a,reference:g.setReference,floating:g.setFloating,assignTarget:m,getReferenceProps:y,getFloatingProps:T,openDropdown:w,closeDropdown:j}}({openDelay:u,closeDelay:m,defaultOpened:h,onOpen:c,onClose:d});return(0,r.jsx)(a,{value:{openDropdown:f.openDropdown,closeDropdown:f.closeDropdown,assignTarget:f.assignTarget,getReferenceProps:f.getReferenceProps,getFloatingProps:f.getFloatingProps,reference:f.reference,floating:f.floating},children:(0,r.jsx)(n.Popover,{...p,opened:f.opened,__staticSelector:"HoverCard",children:i})})}y.displayName="@mantine/core/HoverCard",y.Target=b,y.Dropdown=m,y.Group=d,y.extend=e=>e,e.s(["HoverCard",0,y],369974)},27355,(e,t,n)=>{e.e,t.exports=function(e){"use strict";var t={name:"es",monthsShort:"ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(e){return e+"º"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(t,null,!0),t}(e.r(494834))},19683,e=>{"use strict";var t=e.i(257177),n=e.i(725695),a=e.i(671640),i=e.i(883364),o=e.i(391398),r=e.i(494834);let l=`import dayjs from 'dayjs';
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
}`;e.s(["EventDetails",0,function({event:e,resources:l}){let s=l?.find(t=>t.id===e.resourceId);return(0,o.jsxs)(a.Stack,{gap:"xs",children:[(0,o.jsx)(i.Text,{fw:600,size:"sm",children:e.title}),(0,o.jsxs)(i.Text,{size:"xs",c:"dimmed",children:[(0,r.default)(e.start).format("MMM D, YYYY HH:mm")," – ",(0,r.default)(e.end).format("HH:mm")]}),s&&(0,o.jsx)(i.Text,{size:"xs",c:"dimmed",children:s.label}),e.payload?.description&&(0,o.jsx)(i.Text,{size:"xs",c:"dimmed",children:e.payload.description}),e.payload?.location&&(0,o.jsx)(n.Group,{gap:4,children:(0,o.jsx)(t.Badge,{size:"sm",variant:"light",children:e.payload.location})}),e.payload?.attendees&&(0,o.jsxs)("div",{children:[(0,o.jsx)(i.Text,{size:"xs",fw:500,mb:4,children:"Attendees:"}),(0,o.jsx)(i.Text,{size:"xs",c:"dimmed",children:e.payload.attendees.join(", ")})]})]})},"_eventDetailsCode",0,l])},664894,(e,t,n)=>{e.e,t.exports=function(){"use strict";var e={year:0,month:1,day:2,hour:3,minute:4,second:5},t={};return function(n,a,i){var o,r=function(e,n,a){void 0===a&&(a={});var i,o,r,l,s=new Date(e);return(void 0===(i=a)&&(i={}),(l=t[r=n+"|"+(o=i.timeZoneName||"short")])||(l=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:n,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:o}),t[r]=l),l).formatToParts(s)},l=function(t,n){for(var a=r(t,n),o=[],l=0;l<a.length;l+=1){var s=a[l],c=s.type,d=s.value,u=e[c];u>=0&&(o[u]=parseInt(d,10))}var m=o[3],h=o[0]+"-"+o[1]+"-"+o[2]+" "+(24===m?0:m)+":"+o[4]+":"+o[5]+":000",p=+t;return(i.utc(h).valueOf()-(p-=p%1e3))/6e4},s=a.prototype;s.tz=function(e,t){void 0===e&&(e=o);var n,a=this.utcOffset(),r=this.toDate(),l=r.toLocaleString("en-US",{timeZone:e}),s=Math.round((r-new Date(l))/1e3/60),c=-(15*Math.round(r.getTimezoneOffset()/15))-s;if(Number(c)){if(n=i(l,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(c,!0),t){var d=n.utcOffset();n=n.add(a-d,"minute")}}else n=this.utcOffset(0,t);return n.$x.$timezone=e,n},s.offsetName=function(e){var t=this.$x.$timezone||i.tz.guess(),n=r(this.valueOf(),t,{timeZoneName:e}).find(function(e){return"timezonename"===e.type.toLowerCase()});return n&&n.value};var c=s.startOf;s.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return c.call(this,e,t);var n=i(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return c.call(n,e,t).tz(this.$x.$timezone,!0)},i.tz=function(e,t,n){var a=n&&t,r=n||t||o,s=l(+i(),r);if("string"!=typeof e)return i(e).tz(r);var c=function(e,t,n){var a=e-60*t*1e3,i=l(a,n);if(t===i)return[a,t];var o=l(a-=60*(i-t)*1e3,n);return i===o?[a,i]:[e-60*Math.min(i,o)*1e3,Math.max(i,o)]}(i.utc(e,a).valueOf(),s,r),d=c[0],u=c[1],m=i(d).utcOffset(u);return m.$x.$timezone=r,m},i.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},i.tz.setDefault=function(e){o=e}}}()},53157,(e,t,n)=>{e.e,t.exports=function(){"use strict";var e="minute",t=/[+-]\d\d(?::?\d\d)?/g,n=/([+-]|\d\d)/g;return function(a,i,o){var r=i.prototype;o.utc=function(e){var t={date:e,utc:!0,args:arguments};return new i(t)},r.utc=function(t){var n=o(this.toDate(),{locale:this.$L,utc:!0});return t?n.add(this.utcOffset(),e):n},r.local=function(){return o(this.toDate(),{locale:this.$L,utc:!1})};var l=r.parse;r.parse=function(e){e.utc&&(this.$u=!0),this.$utils().u(e.$offset)||(this.$offset=e.$offset),l.call(this,e)};var s=r.init;r.init=function(){if(this.$u){var e=this.$d;this.$y=e.getUTCFullYear(),this.$M=e.getUTCMonth(),this.$D=e.getUTCDate(),this.$W=e.getUTCDay(),this.$H=e.getUTCHours(),this.$m=e.getUTCMinutes(),this.$s=e.getUTCSeconds(),this.$ms=e.getUTCMilliseconds()}else s.call(this)};var c=r.utcOffset;r.utcOffset=function(a,i){var o=this.$utils().u;if(o(a))return this.$u?0:o(this.$offset)?c.call(this):this.$offset;if("string"==typeof a&&null===(a=function(e){void 0===e&&(e="");var a=e.match(t);if(!a)return null;var i=(""+a[0]).match(n)||["-",0,0],o=i[0],r=60*i[1]+ +i[2];return 0===r?0:"+"===o?r:-r}(a)))return this;var r=16>=Math.abs(a)?60*a:a;if(0===r)return this.utc(i);var l=this.clone();if(i)return l.$offset=r,l.$u=!1,l;var s=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();return(l=this.local().add(r+s,e)).$offset=r,l.$x.$localOffset=s,l};var d=r.format;r.format=function(e){var t=e||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return d.call(this,t)},r.valueOf=function(){var e=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*e},r.isUTC=function(){return!!this.$u},r.toISOString=function(){return this.toDate().toISOString()},r.toString=function(){return this.toDate().toUTCString()};var u=r.toDate;r.toDate=function(e){return"s"===e&&this.$offset?o(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():u.call(this)};var m=r.diff;r.diff=function(e,t,n){if(e&&this.$u===e.$u)return m.call(this,e,t,n);var a=this.local(),i=o(e).local();return m.call(a,i,t,n)}}}()},554166,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,60a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,60Zm0,64a20,20,0,1,1,20-20A20,20,0,0,1,128,124Zm0-112a92.1,92.1,0,0,0-92,92c0,77.36,81.64,135.4,85.12,137.83a12,12,0,0,0,13.76,0,259,259,0,0,0,42.18-39C205.15,170.57,220,136.37,220,104A92.1,92.1,0,0,0,128,12Zm31.3,174.71A249.35,249.35,0,0,1,128,216.89a249.35,249.35,0,0,1-31.3-30.18C80,167.37,60,137.31,60,104a68,68,0,0,1,136,0C196,137.31,176,167.37,159.3,186.71Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24a80,80,0,0,0-80,80c0,72,80,128,80,128s80-56,80-128A80,80,0,0,0,128,24Zm0,112a32,32,0,1,1,32-32A32,32,0,0,1,128,136Z",opacity:"0.2"}),t.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,16a88.1,88.1,0,0,0-88,88c0,75.3,80,132.17,83.41,134.55a8,8,0,0,0,9.18,0C136,236.17,216,179.3,216,104A88.1,88.1,0,0,0,128,16Zm0,56a32,32,0,1,1-32,32A32,32,0,0,1,128,72Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,66a38,38,0,1,0,38,38A38,38,0,0,0,128,66Zm0,64a26,26,0,1,1,26-26A26,26,0,0,1,128,130Zm0-112a86.1,86.1,0,0,0-86,86c0,30.91,14.34,63.74,41.47,94.94a252.32,252.32,0,0,0,41.09,38,6,6,0,0,0,6.88,0,252.32,252.32,0,0,0,41.09-38c27.13-31.2,41.47-64,41.47-94.94A86.1,86.1,0,0,0,128,18Zm0,206.51C113,212.93,54,163.62,54,104a74,74,0,0,1,148,0C202,163.62,143,212.93,128,224.51Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,68a36,36,0,1,0,36,36A36,36,0,0,0,128,68Zm0,64a28,28,0,1,1,28-28A28,28,0,0,1,128,132Zm0-112a84.09,84.09,0,0,0-84,84c0,30.42,14.17,62.79,41,93.62a250,250,0,0,0,40.73,37.66,4,4,0,0,0,4.58,0A250,250,0,0,0,171,197.62c26.81-30.83,41-63.2,41-93.62A84.09,84.09,0,0,0,128,20Zm37.1,172.23A254.62,254.62,0,0,1,128,227a254.62,254.62,0,0,1-37.1-34.81C73.15,171.8,52,139.9,52,104a76,76,0,0,1,152,0C204,139.9,182.85,171.8,165.1,192.23Z"}))]]),i=t.forwardRef((e,i)=>t.createElement(n.default,{ref:i,...e,weights:a}));i.displayName="MapPinIcon",e.s(["MapPinIcon",0,i],554166)},943618,e=>{"use strict";var t=e.i(44091),n=e.i(391398),a=e.i(728649);function i(e){let{value:i,defaultValue:o,...r}=(0,t.useProps)("NumberFormatter",null,e);return void 0===i?null:(0,n.jsx)(a.NumericFormat,{displayType:"text",value:i,...r})}i.extend=e=>e,i.displayName="@mantine/core/NumberFormatter",e.s(["NumberFormatter",0,i])},241111,e=>{"use strict";let t,n,a;var i=e.i(648863);let o=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],r=[{position:1,mass:1.008,symbol:"H",name:"Hydrogen"},{position:2,mass:4.0026,symbol:"He",name:"Helium"},{position:3,mass:6.94,symbol:"Li",name:"Lithium"},{position:4,mass:9.0122,symbol:"Be",name:"Beryllium"},{position:5,mass:10.81,symbol:"B",name:"Boron"},{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:8,mass:15.999,symbol:"O",name:"Oxygen"},{position:9,mass:18.998,symbol:"F",name:"Fluorine"},{position:10,mass:20.18,symbol:"Ne",name:"Neon"},{position:11,mass:22.99,symbol:"Na",name:"Sodium"},{position:12,mass:24.305,symbol:"Mg",name:"Magnesium"},{position:13,mass:26.982,symbol:"Al",name:"Aluminium"},{position:14,mass:28.085,symbol:"Si",name:"Silicon"},{position:15,mass:30.974,symbol:"P",name:"Phosphorus"},{position:16,mass:32.06,symbol:"S",name:"Sulfur"},{position:17,mass:35.45,symbol:"Cl",name:"Chlorine"},{position:18,mass:39.948,symbol:"Ar",name:"Argon"},{position:19,mass:39.098,symbol:"K",name:"Potassium"},{position:20,mass:39.098,symbol:"Ca",name:"Calcium"},{position:21,mass:40.078,symbol:"Sc",name:"Scandium"},{position:22,mass:47.867,symbol:"Ti",name:"Titanium"},{position:23,mass:50.941,symbol:"V",name:"Vanadium"},{position:24,mass:51.996,symbol:"Cr",name:"Chromium"},{position:25,mass:54.938,symbol:"Mn",name:"Manganese"},{position:26,mass:55.845,symbol:"Fe",name:"Iron"},{position:27,mass:58.933,symbol:"Co",name:"Cobalt"},{position:28,mass:58.933,symbol:"Ni",name:"Nickel"},{position:29,mass:63.546,symbol:"Cu",name:"Copper"},{position:30,mass:65.38,symbol:"Zn",name:"Zinc"},{position:31,mass:69.723,symbol:"Ga",name:"Gallium"},{position:32,mass:72.63,symbol:"Ge",name:"Germanium"},{position:33,mass:74.922,symbol:"As",name:"Arsenic"},{position:34,mass:78.971,symbol:"Se",name:"Selenium"},{position:35,mass:79.904,symbol:"Br",name:"Bromine"},{position:36,mass:83.798,symbol:"Kr",name:"Krypton"},{position:37,mass:83.798,symbol:"Rb",name:"Rubidium"},{position:38,mass:87.62,symbol:"Sr",name:"Strontium"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:40,mass:91.224,symbol:"Zr",name:"Zirconium"},{position:41,mass:92.906,symbol:"Nb",name:"Niobium"},{position:42,mass:95.95,symbol:"Mo",name:"Molybdenum"},{position:43,mass:98,symbol:"Tc",name:"Technetium"},{position:44,mass:101.07,symbol:"Ru",name:"Ruthenium"},{position:45,mass:102.905,symbol:"Rh",name:"Rhodium"},{position:46,mass:106.42,symbol:"Pd",name:"Palladium"},{position:47,mass:106.42,symbol:"Ag",name:"Silver"},{position:48,mass:112.414,symbol:"Cd",name:"Cadmium"},{position:49,mass:114.818,symbol:"In",name:"Indium"},{position:50,mass:118.71,symbol:"Sn",name:"Tin"},{position:51,mass:121.76,symbol:"Sb",name:"Antimony"},{position:52,mass:127.6,symbol:"Te",name:"Tellurium"},{position:53,mass:126.904,symbol:"I",name:"Iodine"},{position:54,mass:126.904,symbol:"Xe",name:"Xenon"},{position:55,mass:126.904,symbol:"Cs",name:"Cesium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:57,mass:138.905,symbol:"La",name:"Lanthanum"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"},{position:59,mass:140.116,symbol:"Pr",name:"Praseodymium"},{position:60,mass:140.907,symbol:"Nd",name:"Neodymium"},{position:61,mass:144.242,symbol:"Pm",name:"Promethium"},{position:62,mass:145,symbol:"Sm",name:"Samarium"},{position:63,mass:150.36,symbol:"Eu",name:"Europium"},{position:64,mass:151.964,symbol:"Gd",name:"Gadolinium"},{position:65,mass:157.25,symbol:"Tb",name:"Terbium"},{position:66,mass:158.925,symbol:"Dy",name:"Dysprosium"},{position:67,mass:162.5,symbol:"Ho",name:"Holmium"},{position:68,mass:164.93,symbol:"Er",name:"Erbium"},{position:69,mass:167.259,symbol:"Tm",name:"Thulium"}];var l=e.i(245745),s=e.i(391398);let c={type:"code",code:`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`,component:function(){let e=o.map(e=>(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Td,{children:e.position}),(0,s.jsx)(l.Table.Td,{children:e.name}),(0,s.jsx)(l.Table.Td,{children:e.symbol}),(0,s.jsx)(l.Table.Td,{children:e.mass})]},e.name));return(0,s.jsxs)(l.Table,{children:[(0,s.jsx)(l.Table.Thead,{children:(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Th,{children:"Element position"}),(0,s.jsx)(l.Table.Th,{children:"Element name"}),(0,s.jsx)(l.Table.Th,{children:"Symbol"}),(0,s.jsx)(l.Table.Th,{children:"Atomic mass"})]})}),(0,s.jsx)(l.Table.Tbody,{children:e})]})}},d={type:"code",code:`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  const ths = (
    <Table.Tr>
      <Table.Th>Element position</Table.Th>
      <Table.Th>Element name</Table.Th>
      <Table.Th>Symbol</Table.Th>
      <Table.Th>Atomic mass</Table.Th>
    </Table.Tr>
  );

  return (
    <Table captionSide="bottom">
      <Table.Caption>Some elements from periodic table</Table.Caption>
      <Table.Thead>{ths}</Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <Table.Tfoot>{ths}</Table.Tfoot>
    </Table>
  );
}
`,component:function(){let e=o.map(e=>(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Td,{children:e.position}),(0,s.jsx)(l.Table.Td,{children:e.name}),(0,s.jsx)(l.Table.Td,{children:e.symbol}),(0,s.jsx)(l.Table.Td,{children:e.mass})]},e.name)),t=(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Th,{children:"Element position"}),(0,s.jsx)(l.Table.Th,{children:"Element name"}),(0,s.jsx)(l.Table.Th,{children:"Symbol"}),(0,s.jsx)(l.Table.Th,{children:"Atomic mass"})]});return(0,s.jsxs)(l.Table,{captionSide:"bottom",children:[(0,s.jsx)(l.Table.Caption,{children:"Some elements from the periodic table"}),(0,s.jsx)(l.Table.Thead,{children:t}),(0,s.jsx)(l.Table.Tbody,{children:e}),(0,s.jsx)(l.Table.Tfoot,{children:t})]})}},u={type:"configurator",component:function(e){return(0,s.jsxs)(l.Table,{...e,children:[(0,s.jsx)(l.Table.Thead,{children:(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Th,{children:"Element position"}),(0,s.jsx)(l.Table.Th,{children:"Element name"}),(0,s.jsx)(l.Table.Th,{children:"Symbol"}),(0,s.jsx)(l.Table.Th,{children:"Atomic mass"})]})}),(0,s.jsx)(l.Table.Tbody,{children:o.map(e=>(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Td,{children:e.position}),(0,s.jsx)(l.Table.Td,{children:e.name}),(0,s.jsx)(l.Table.Td,{children:e.symbol}),(0,s.jsx)(l.Table.Td,{children:e.mass})]},e.name))})]})},code:`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,controls:[{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"highlightOnHover",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withTableBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withColumnBorders",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withRowBorders",type:"boolean",initialValue:!0,libraryValue:!0}]},m={type:"configurator",component:function(e){return(0,s.jsxs)(l.Table,{...e,children:[(0,s.jsx)(l.Table.Thead,{children:(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Th,{children:"Position"}),(0,s.jsx)(l.Table.Th,{children:"Name"}),(0,s.jsx)(l.Table.Th,{children:"Symbol"})]})}),(0,s.jsx)(l.Table.Tbody,{children:o.map(e=>(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Td,{children:e.position}),(0,s.jsx)(l.Table.Td,{children:e.name}),(0,s.jsx)(l.Table.Td,{children:e.symbol})]},e.name))})]})},code:`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,controls:[{prop:"horizontalSpacing",type:"size",libraryValue:"xs",initialValue:"xs"},{prop:"verticalSpacing",type:"size",initialValue:"xs",libraryValue:"xs"}]},h={type:"code",code:`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
`,component:function(){let e=o.map(e=>(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Td,{children:e.position}),(0,s.jsx)(l.Table.Td,{children:e.name}),(0,s.jsx)(l.Table.Td,{children:e.symbol}),(0,s.jsx)(l.Table.Td,{children:e.mass})]},e.name));return(0,s.jsx)(l.Table.ScrollContainer,{minWidth:500,children:(0,s.jsxs)(l.Table,{children:[(0,s.jsx)(l.Table.Thead,{children:(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Th,{children:"Element position"}),(0,s.jsx)(l.Table.Th,{children:"Element name"}),(0,s.jsx)(l.Table.Th,{children:"Symbol"}),(0,s.jsx)(l.Table.Th,{children:"Atomic mass"})]})}),(0,s.jsx)(l.Table.Tbody,{children:e})]})})}},p={type:"code",code:`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elementsLong.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500} maxHeight={300}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
`,component:function(){let e=r.map(e=>(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Td,{children:e.position}),(0,s.jsx)(l.Table.Td,{children:e.name}),(0,s.jsx)(l.Table.Td,{children:e.symbol}),(0,s.jsx)(l.Table.Td,{children:e.mass})]},e.name));return(0,s.jsx)(l.Table.ScrollContainer,{minWidth:500,maxHeight:300,children:(0,s.jsxs)(l.Table,{children:[(0,s.jsx)(l.Table.Thead,{children:(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Th,{children:"Element position"}),(0,s.jsx)(l.Table.Th,{children:"Element name"}),(0,s.jsx)(l.Table.Th,{children:"Symbol"}),(0,s.jsx)(l.Table.Th,{children:"Atomic mass"})]})}),(0,s.jsx)(l.Table.Tbody,{children:e})]})})}},f={type:"code",code:`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500} type="native">
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
`,component:function(){let e=o.map(e=>(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Td,{children:e.position}),(0,s.jsx)(l.Table.Td,{children:e.name}),(0,s.jsx)(l.Table.Td,{children:e.symbol}),(0,s.jsx)(l.Table.Td,{children:e.mass})]},e.name));return(0,s.jsx)(l.Table.ScrollContainer,{minWidth:500,type:"native",children:(0,s.jsxs)(l.Table,{children:[(0,s.jsx)(l.Table.Thead,{children:(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Th,{children:"Element position"}),(0,s.jsx)(l.Table.Th,{children:"Element name"}),(0,s.jsx)(l.Table.Th,{children:"Symbol"}),(0,s.jsx)(l.Table.Th,{children:"Atomic mass"})]})}),(0,s.jsx)(l.Table.Tbody,{children:e})]})})}},g={type:"code",code:`
import { Table } from '@mantine/core';

function Demo() {
  const rows = elementsLong.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table.ScrollContainer minWidth={500} maxHeight={300} type="native">
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Element position</Table.Th>
            <Table.Th>Element name</Table.Th>
            <Table.Th>Symbol</Table.Th>
            <Table.Th>Atomic mass</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
`,component:function(){let e=r.map(e=>(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Td,{children:e.position}),(0,s.jsx)(l.Table.Td,{children:e.name}),(0,s.jsx)(l.Table.Td,{children:e.symbol}),(0,s.jsx)(l.Table.Td,{children:e.mass})]},e.name));return(0,s.jsx)(l.Table.ScrollContainer,{minWidth:500,maxHeight:300,type:"native",children:(0,s.jsxs)(l.Table,{children:[(0,s.jsx)(l.Table.Thead,{children:(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Th,{children:"Element position"}),(0,s.jsx)(l.Table.Th,{children:"Element name"}),(0,s.jsx)(l.Table.Th,{children:"Symbol"}),(0,s.jsx)(l.Table.Th,{children:"Atomic mass"})]})}),(0,s.jsx)(l.Table.Tbody,{children:e})]})})}};var b=e.i(191788),v=e.i(37541);let x=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],y={type:"code",component:function(){let[e,t]=(0,b.useState)([]),n=x.map(n=>(0,s.jsxs)(l.Table.Tr,{bg:e.includes(n.position)?"var(--mantine-color-blue-light)":void 0,children:[(0,s.jsx)(l.Table.Td,{children:(0,s.jsx)(v.Checkbox,{"aria-label":"Select row",checked:e.includes(n.position),onChange:a=>t(a.currentTarget.checked?[...e,n.position]:e.filter(e=>e!==n.position))})}),(0,s.jsx)(l.Table.Td,{children:n.position}),(0,s.jsx)(l.Table.Td,{children:n.name}),(0,s.jsx)(l.Table.Td,{children:n.symbol}),(0,s.jsx)(l.Table.Td,{children:n.mass})]},n.name));return(0,s.jsxs)(l.Table,{children:[(0,s.jsx)(l.Table.Thead,{visibleFrom:"sm",children:(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Th,{}),(0,s.jsx)(l.Table.Th,{children:"Element position"}),(0,s.jsx)(l.Table.Th,{children:"Element name"}),(0,s.jsx)(l.Table.Th,{children:"Symbol"}),(0,s.jsx)(l.Table.Th,{children:"Atomic mass"})]})}),(0,s.jsx)(l.Table.Tbody,{children:n})]})},defaultExpanded:!1,code:`
import { useState } from 'react';
import { Table, Checkbox } from '@mantine/core';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.name}
      bg={selectedRows.includes(element.position) ? 'var(--mantine-color-blue-light)' : undefined}
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(element.position)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.position]
                : selectedRows.filter((position) => position !== element.position)
            )
          }
        />
      </Table.Td>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th />
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`},T={caption:"Some elements from the periodic table",head:["Element position","Atomic mass","Symbol","Element name"],body:[[6,12.011,"C","Carbon"],[7,14.007,"N","Nitrogen"],[39,88.906,"Y","Yttrium"],[56,137.33,"Ba","Barium"],[58,140.12,"Ce","Cerium"]]},w={type:"code",component:function(){return(0,s.jsx)(l.Table,{data:T})},code:`
import { Table, TableData } from '@mantine/core';

const tableData: TableData = {
  caption: 'Some elements from periodic table',
  head: ['Element position', 'Atomic mass', 'Symbol', 'Element name'],
  body: [
    [6, 12.011, 'C', 'Carbon'],
    [7, 14.007, 'N', 'Nitrogen'],
    [39, 88.906, 'Y', 'Yttrium'],
    [56, 137.33, 'Ba', 'Barium'],
    [58, 140.12, 'Ce', 'Cerium'],
  ],
};

function Demo() {
  return <Table data={tableData} />;
}
`},j={type:"code",code:`
import { Table } from '@mantine/core';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table stickyHeader stickyHeaderOffset={60}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
      <Table.Caption>Scroll page to see sticky thead</Table.Caption>
    </Table>
  );
}
`,component:function(){let e=o.map(e=>(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Td,{children:e.position}),(0,s.jsx)(l.Table.Td,{children:e.name}),(0,s.jsx)(l.Table.Td,{children:e.symbol}),(0,s.jsx)(l.Table.Td,{children:e.mass})]},e.name));return(0,s.jsxs)(l.Table,{stickyHeader:!0,stickyHeaderOffset:"var(--docs-header-height)",children:[(0,s.jsx)(l.Table.Thead,{children:(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Th,{children:"Element position"}),(0,s.jsx)(l.Table.Th,{children:"Element name"}),(0,s.jsx)(l.Table.Th,{children:"Symbol"}),(0,s.jsx)(l.Table.Th,{children:"Atomic mass"})]})}),(0,s.jsx)(l.Table.Tbody,{children:e}),(0,s.jsx)(l.Table.Caption,{children:"Scroll page to see sticky thead"})]})}},D={type:"code",code:`
import { Table } from '@mantine/core';

export function Demo() {
  return (
    <Table variant="vertical" layout="fixed" withTableBorder>
      <Table.Tbody>
        <Table.Tr>
          <Table.Th w={160}>Epic name</Table.Th>
          <Table.Td>7.x migration</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Status</Table.Th>
          <Table.Td>Open</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Total issues</Table.Th>
          <Table.Td>135</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Total story points</Table.Th>
          <Table.Td>874</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Last updated at</Table.Th>
          <Table.Td>September 26, 2024 17:41:26</Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
}
`,component:function(){return(0,s.jsx)(l.Table,{variant:"vertical",layout:"fixed",withTableBorder:!0,children:(0,s.jsxs)(l.Table.Tbody,{children:[(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Th,{w:160,children:"Epic name"}),(0,s.jsx)(l.Table.Td,{children:"7.x migration"})]}),(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Th,{children:"Status"}),(0,s.jsx)(l.Table.Td,{children:"Open"})]}),(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Th,{children:"Total issues"}),(0,s.jsx)(l.Table.Td,{children:"135"})]}),(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Th,{children:"Total story points"}),(0,s.jsx)(l.Table.Td,{children:"874"})]}),(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Th,{children:"Last updated at"}),(0,s.jsx)(l.Table.Td,{children:"September 26, 2024 17:41:26"})]})]})})}};var A=e.i(943618);let S=[{product:"Apples",unitsSold:0x83fd3be2},{product:"Oranges",unitsSold:0x25314e33b},{product:"Bananas",unitsSold:0x499602d2},{product:"Pineapples",unitsSold:994881e4},{product:"Pears",unitsSold:0x250195167}],C={type:"configurator",component:function(e){let t=S.map(e=>(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Td,{children:e.product}),(0,s.jsx)(l.Table.Td,{children:(0,s.jsx)(A.NumberFormatter,{value:e.unitsSold,thousandSeparator:!0})})]},e.product));return(0,s.jsxs)(l.Table,{...e,children:[(0,s.jsx)(l.Table.Thead,{children:(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Th,{children:"Product"}),(0,s.jsx)(l.Table.Th,{children:"Units sold"})]})}),(0,s.jsx)(l.Table.Tbody,{children:t})]})},code:`
import { NumberFormatter, Table } from '@mantine/core';

const data = [
  { product: 'Apples', unitsSold: 2214411234 },
  { product: 'Oranges', unitsSold: 9983812411 },
  { product: 'Bananas', unitsSold: 1234567890 },
  { product: 'Pineapples', unitsSold: 9948810000 },
  { product: 'Pears', unitsSold: 9933771111 },
];

function Demo() {
  const rows = data.map((item) => (
    <Table.Tr key={item.product}>
      <Table.Td>{item.product}</Table.Td>
      <Table.Td>
        <NumberFormatter value={item.unitsSold} thousandSeparator />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table{{props}}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Product</Table.Th>
          <Table.Th>Units sold</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`,controls:[{type:"boolean",prop:"tabularNums",initialValue:!0,libraryValue:!1}]};var M=e.i(463044);let k=`interface RowData {
  id: number;
  name: string;
  email: string;
  company: string;
  city: string;
}

export function generateData(count: number): RowData[] {
  const names = [
    'James Smith',
    'Maria Garcia',
    'Robert Johnson',
    'Linda Williams',
    'Michael Brown',
    'Barbara Jones',
    'David Miller',
    'Susan Davis',
    'Richard Wilson',
    'Jessica Moore',
    'Charles Taylor',
    'Sarah Anderson',
    'Thomas Jackson',
    'Karen White',
    'Daniel Harris',
    'Nancy Martin',
    'Matthew Thompson',
    'Lisa Robinson',
    'Anthony Clark',
    'Betty Lewis',
  ];

  const companies = [
    'Acme Corp',
    'Globex Inc',
    'Initech',
    'Umbrella Corp',
    'Stark Industries',
    'Wayne Enterprises',
    'Cyberdyne Systems',
    'Oscorp',
    'Hooli',
    'Pied Piper',
  ];

  const cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'San Antonio',
    'San Diego',
    'Dallas',
    'Austin',
    'Seattle',
  ];

  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    name: names[index % names.length],
    email: \`user\${index + 1}@example.com\`,
    company: companies[index % companies.length],
    city: cities[index % cities.length],
  }));
}`,E=`
import { useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Table } from '@mantine/core';
import { generateData } from './data';


const data = generateData(5000);
const ROW_HEIGHT = 36;

function Demo() {
  const [scrollParent, setScrollParent] = useState<HTMLDivElement | null>(null);

  const virtualizer = useVirtualizer({
    count: data.length,
    getScrollElement: () => scrollParent,
    estimateSize: () => ROW_HEIGHT,
    overscan: 20,
  });

  const virtualItems = virtualizer.getVirtualItems();

  return (
    <Table.ScrollContainer
      minWidth={500}
      maxHeight={400}
      scrollAreaProps={{ viewportRef: setScrollParent }}
    >
      <Table stickyHeader layout="fixed">
        <Table.Thead>
          <Table.Tr>
            <Table.Th w={50}>#</Table.Th>
            <Table.Th>Name</Table.Th>
            <Table.Th>Email</Table.Th>
            <Table.Th>Company</Table.Th>
            <Table.Th>City</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {virtualItems.length > 0 && (
            <tr aria-hidden>
              <td
                aria-hidden
                colSpan={5}
                style={{ height: virtualItems[0].start, padding: 0, border: 'none' }}
              />
            </tr>
          )}

          {virtualItems.map((virtualItem) => {
            const row = data[virtualItem.index];
            return (
              <Table.Tr key={virtualItem.index}>
                <Table.Td>{row.id}</Table.Td>
                <Table.Td>{row.name}</Table.Td>
                <Table.Td>{row.email}</Table.Td>
                <Table.Td>{row.company}</Table.Td>
                <Table.Td>{row.city}</Table.Td>
              </Table.Tr>
            );
          })}

          {virtualItems.length > 0 && (
            <tr aria-hidden>
              <td
                aria-hidden
                colSpan={5}
                style={{
                  height:
                    virtualizer.getTotalSize() -
                    virtualItems[virtualItems.length - 1].end,
                  padding: 0,
                  border: 'none',
                }}
              />
            </tr>
          )}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  );
}
`,I=(t=["James Smith","Maria Garcia","Robert Johnson","Linda Williams","Michael Brown","Barbara Jones","David Miller","Susan Davis","Richard Wilson","Jessica Moore","Charles Taylor","Sarah Anderson","Thomas Jackson","Karen White","Daniel Harris","Nancy Martin","Matthew Thompson","Lisa Robinson","Anthony Clark","Betty Lewis"],n=["Acme Corp","Globex Inc","Initech","Umbrella Corp","Stark Industries","Wayne Enterprises","Cyberdyne Systems","Oscorp","Hooli","Pied Piper"],a=["New York","Los Angeles","Chicago","Houston","Phoenix","San Antonio","San Diego","Dallas","Austin","Seattle"],Array.from({length:5e3},(e,i)=>({id:i+1,name:t[i%t.length],email:`user${i+1}@example.com`,company:n[i%n.length],city:a[i%a.length]}))),P={type:"code",component:function(){let[e,t]=(0,b.useState)(null),n=(0,M.useVirtualizer)({count:I.length,getScrollElement:()=>e,estimateSize:()=>36,overscan:20}),a=n.getVirtualItems();return(0,s.jsx)(l.Table.ScrollContainer,{minWidth:500,maxHeight:400,scrollAreaProps:{viewportRef:t},children:(0,s.jsxs)(l.Table,{stickyHeader:!0,layout:"fixed",children:[(0,s.jsx)(l.Table.Thead,{children:(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Th,{w:50,children:"#"}),(0,s.jsx)(l.Table.Th,{children:"Name"}),(0,s.jsx)(l.Table.Th,{children:"Email"}),(0,s.jsx)(l.Table.Th,{children:"Company"}),(0,s.jsx)(l.Table.Th,{children:"City"})]})}),(0,s.jsxs)(l.Table.Tbody,{children:[a.length>0&&(0,s.jsx)("tr",{"aria-hidden":!0,children:(0,s.jsx)("td",{"aria-hidden":!0,colSpan:5,style:{height:a[0].start,padding:0,border:"none"}})}),a.map(e=>{let t=I[e.index];return(0,s.jsxs)(l.Table.Tr,{children:[(0,s.jsx)(l.Table.Td,{children:t.id}),(0,s.jsx)(l.Table.Td,{children:t.name}),(0,s.jsx)(l.Table.Td,{children:t.email}),(0,s.jsx)(l.Table.Td,{children:t.company}),(0,s.jsx)(l.Table.Td,{children:t.city})]},e.index)}),a.length>0&&(0,s.jsx)("tr",{"aria-hidden":!0,children:(0,s.jsx)("td",{"aria-hidden":!0,colSpan:5,style:{height:n.getTotalSize()-a[a.length-1].end,padding:0,border:"none"}})})]})]})})},code:[{fileName:"Demo.tsx",language:"tsx",code:E},{fileName:"data.ts",language:"tsx",code:k}],defaultExpanded:!1};var H=(0,i.__exportAll)({captions:()=>d,configurator:()=>u,data:()=>w,rowSelection:()=>y,scrollContainer:()=>h,scrollContainerMaxHeight:()=>p,scrollContainerNative:()=>f,scrollContainerNativeMaxHeight:()=>g,spacingConfigurator:()=>m,stickyHeader:()=>j,tabularNums:()=>C,usage:()=>c,vertical:()=>D,virtualized:()=>P});e.s(["TableDemos",0,H],241111)},614148,e=>{"use strict";var t=e.i(433512),n=e.i(481178),a=e.i(44091),i=e.i(391466),o=e.i(275519),r=e.i(232471),l={root:"m_7341320d"},s=e.i(391398);let c=(0,n.createVarsResolver)((e,{size:n,radius:a,variant:i,gradient:o,color:r,autoContrast:l})=>{let s=e.variantColorResolver({color:r||e.primaryColor,theme:e,gradient:o,variant:i||"filled",autoContrast:l});return{root:{"--ti-size":(0,t.getSize)(n,"ti-size"),"--ti-radius":void 0===a?void 0:(0,t.getRadius)(a),"--ti-bg":r||i?s.background:void 0,"--ti-color":r||i?s.color:void 0,"--ti-bd":r||i?s.border:void 0}}}),d=(0,o.factory)(e=>{let t=(0,a.useProps)("ThemeIcon",null,e),{classNames:n,className:o,style:d,styles:u,unstyled:m,vars:h,autoContrast:p,attributes:f,...g}=t;return(0,s.jsx)(r.Box,{...(0,i.useStyles)({name:"ThemeIcon",classes:l,props:t,className:o,style:d,classNames:n,styles:u,unstyled:m,attributes:f,vars:h,varsResolver:c})("root"),...g})});d.classes=l,d.varsResolver=c,d.displayName="@mantine/core/ThemeIcon",e.s(["ThemeIcon",0,d],614148)},19830,216339,e=>{"use strict";var t=e.i(931718),n=e.i(330693),a=e.i(951254),i=e.i(44091),o=e.i(391466),r=e.i(871346),l=e.i(41298),s=e.i(7535),c=e.i(83353),d=e.i(956449),u=e.i(232471);let m={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}};e.s(["FLEX_STYLE_PROPS_DATA",0,m],216339);var h={root:"m_8bffd616"},p=e.i(391398);let f=(0,d.polymorphicFactory)(e=>{let d=(0,i.useProps)("Flex",null,e),{classNames:f,className:g,style:b,styles:v,unstyled:x,vars:y,gap:T,rowGap:w,columnGap:j,align:D,justify:A,wrap:S,direction:C,attributes:M,...k}=d,E=(0,o.useStyles)({name:"Flex",classes:h,props:d,className:g,style:b,classNames:f,styles:v,unstyled:x,attributes:M,vars:y}),I=(0,a.useMantineTheme)(),P=(0,c.useRandomClassName)(),H=(0,s.parseStyleProps)({styleProps:{gap:T,rowGap:w,columnGap:j,align:D,justify:A,wrap:S,direction:C},theme:I,data:m}),V=(0,n.useMantineDeduplicateInlineStyles)(),z=V&&H.hasResponsiveStyles?(0,l.hashStyleProps)(H.styles,H.media):P;return(0,p.jsxs)(p.Fragment,{children:[H.hasResponsiveStyles&&(0,p.jsx)(r.InlineStyles,{selector:`.${z}`,styles:H.styles,media:H.media,deduplicate:V}),(0,p.jsx)(u.Box,{...E("root",{className:z,style:(0,t.filterProps)(H.inlineStyles)}),...k})]})});f.classes=h,f.displayName="@mantine/core/Flex",e.s(["Flex",0,f],19830)},753623,e=>{"use strict";var t=e.i(648863);let n={"2025-02-14":2,"2025-02-11":3,"2025-02-06":4,"2025-02-05":1,"2025-02-03":2,"2025-02-01":2,"2025-01-31":4,"2025-01-30":2,"2025-01-29":3,"2025-01-26":2,"2025-01-25":2,"2025-01-24":2,"2025-01-23":2,"2025-01-20":3,"2025-01-19":2,"2025-01-17":3,"2025-01-16":2,"2025-01-14":3,"2025-01-08":2,"2025-01-07":1,"2025-01-05":3,"2025-01-04":1,"2025-01-03":1,"2025-01-01":2,"2024-12-30":4,"2024-12-27":3,"2024-12-26":1,"2024-12-22":3,"2024-12-20":2,"2024-12-19":3,"2024-12-16":4,"2024-12-15":1,"2024-12-14":4,"2024-12-11":2,"2024-12-09":4,"2024-12-05":4,"2024-12-04":3,"2024-12-03":2,"2024-12-01":1,"2024-11-30":3,"2024-11-29":1,"2024-11-28":1,"2024-11-26":4,"2024-11-25":3,"2024-11-24":3,"2024-11-22":4,"2024-11-20":2,"2024-11-19":3,"2024-11-16":3,"2024-11-15":1,"2024-11-14":4,"2024-11-12":1,"2024-11-11":2,"2024-11-10":1,"2024-11-09":3,"2024-11-07":1,"2024-11-06":4,"2024-11-04":1,"2024-11-03":4,"2024-11-02":4,"2024-10-31":1,"2024-10-30":1,"2024-10-28":4,"2024-10-27":2,"2024-10-26":3,"2024-10-25":4,"2024-10-23":1,"2024-10-22":1,"2024-10-21":4,"2024-10-20":3,"2024-10-15":3,"2024-10-13":4,"2024-10-10":1,"2024-10-08":1,"2024-10-07":4,"2024-10-05":1,"2024-10-04":4,"2024-10-02":2,"2024-10-01":3,"2024-09-29":4,"2024-09-27":3,"2024-09-26":4,"2024-09-25":3,"2024-09-20":4,"2024-09-18":3,"2024-09-17":1,"2024-09-14":2,"2024-09-12":3,"2024-09-10":1,"2024-09-08":1,"2024-09-06":2,"2024-09-04":4,"2024-08-31":4,"2024-08-29":3,"2024-08-26":4,"2024-08-25":1,"2024-08-23":2,"2024-08-21":4,"2024-08-19":1,"2024-08-14":4,"2024-08-13":2,"2024-08-11":4,"2024-08-09":4,"2024-08-06":4,"2024-08-05":4,"2024-08-04":1,"2024-08-02":4,"2024-08-01":4,"2024-07-31":3,"2024-07-30":2,"2024-07-29":2,"2024-07-28":1,"2024-07-27":4,"2024-07-25":2,"2024-07-22":4,"2024-07-21":1,"2024-07-19":2,"2024-07-17":2,"2024-07-16":1,"2024-07-15":4,"2024-07-14":4,"2024-07-13":2,"2024-07-12":1,"2024-07-11":3,"2024-07-10":3,"2024-07-09":4,"2024-07-08":2,"2024-07-07":2,"2024-07-06":4,"2024-07-05":3,"2024-07-03":4,"2024-06-30":4,"2024-06-26":2,"2024-06-25":1,"2024-06-24":2,"2024-06-22":3,"2024-06-19":4,"2024-06-18":2,"2024-06-17":1,"2024-06-14":4,"2024-06-13":4,"2024-06-12":1,"2024-06-11":2,"2024-06-10":1,"2024-06-08":4,"2024-06-06":2,"2024-06-04":2,"2024-06-03":1,"2024-06-01":2,"2024-05-31":1,"2024-05-30":3,"2024-05-26":4,"2024-05-23":3,"2024-05-22":1,"2024-05-21":4,"2024-05-18":4,"2024-05-16":4,"2024-05-14":2,"2024-05-10":1,"2024-05-08":3,"2024-05-07":2,"2024-05-03":2,"2024-05-02":4,"2024-04-30":3,"2024-04-29":1,"2024-04-28":4,"2024-04-26":1,"2024-04-22":1,"2024-04-21":4,"2024-04-20":2,"2024-04-19":2,"2024-04-17":1,"2024-04-16":3,"2024-04-15":4,"2024-04-14":3,"2024-04-13":4,"2024-04-12":3,"2024-04-11":2,"2024-04-10":3,"2024-04-08":4,"2024-04-05":1,"2024-04-03":4,"2024-03-31":1,"2024-03-30":2,"2024-03-29":1,"2024-03-28":1,"2024-03-27":3,"2024-03-26":1,"2024-03-24":4,"2024-03-20":1,"2024-03-19":1,"2024-03-17":1,"2024-03-14":2,"2024-03-13":3,"2024-03-12":2,"2024-03-11":1,"2024-03-09":3,"2024-03-06":1,"2024-03-03":1,"2024-03-02":2,"2024-03-01":1,"2024-02-29":2,"2024-02-28":2,"2024-02-23":3,"2024-02-22":4,"2024-02-20":4,"2024-02-19":4,"2024-02-17":3,"2024-02-16":3},a=`export const data = ${JSON.stringify(n,null,2)};`;var i=e.i(391398);function o(e,t){if(!t)return e.map((e,t)=>({type:"column",month:new Date(e.find(e=>null!==e)).getUTCMonth(),weekIndex:t}));let n=[];e.forEach((e,t)=>{let a=e.map(e=>e?new Date(e).getUTCMonth():null),i=null,o=null;for(let e=0;e<a.length;e+=1)if(null!==a[e]){if(null===i)i=a[e];else if(a[e]!==i){o=e;break}}if(null!==i)if(null===o)n.push({type:"column",month:i,weekIndex:t});else{let e=null;for(let t=o;t<a.length;t+=1)if(null!==a[t]){e=a[t];break}null===e?n.push({type:"column",month:i,weekIndex:t}):(n.push({type:"column",month:i,weekIndex:t}),n.push({type:"column",month:e,weekIndex:t}))}});let a=[];for(let e=0;e<n.length;e+=1)e>0&&n[e].month!==n[e-1].month&&a.push({type:"spacer"}),a.push(n[e]);return a}function r(e,t){return new Date(e.getTime()+864e5*t)}function l(e){if("string"==typeof e){let t=e.match(/^(\d{4})-(\d{2})-(\d{2})$/);if(t)return new Date(Date.UTC(Number(t[1]),Number(t[2])-1,Number(t[3])));let n=new Date(e);return new Date(Date.UTC(n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()))}return new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate()))}function s({value:e,min:t,max:n,colors:a}){let i=Math.min(1,Math.max(0,n===t?1:(e-t)/(n-t)));return a[Math.round((a.length-1)*i)]}function c({data:e,datesRange:t,rectSize:n,gap:a,rectRadius:r,min:l,max:d,colors:u,withTooltip:m,setHoveredRect:h,getRectProps:p,getStyles:f}){let g=n+a;return(0,i.jsx)(i.Fragment,{children:o(t,!0).map((o,c)=>{if("spacer"===o.type)return(0,i.jsx)("g",{transform:`translate(${c*g}, 0)`},`spacer-${c}`);let b=t[o.weekIndex].map((t,c)=>{if(!t||new Date(t).getUTCMonth()!==o.month)return null;let b=t in e&&null!==e[t],v=b?e[t]:null;return(0,i.jsx)("rect",{width:n,height:n,x:a,y:c*g+a,rx:r,"data-empty":!b||void 0,fill:b?s({value:e[t],min:l,max:d,colors:u}):void 0,onPointerEnter:m?()=>h({date:t,value:v}):void 0,...p?.({date:t,value:v}),...f("rect")},`${t}-${o.month}`)});return(0,i.jsx)("g",{transform:`translate(${c*g}, 0)`,"data-id":"week",children:b},`col-${o.weekIndex}-${o.month}-${c}`)})})}function d({data:e,datesRange:t,rectSize:n,gap:a,rectRadius:o,min:r,max:l,colors:c,withTooltip:u,setHoveredRect:m,getRectProps:h,getStyles:p}){let f=n+a;return(0,i.jsx)(i.Fragment,{children:t.map((t,d)=>{let g=t.map((t,d)=>{if(!t)return null;let g=t in e&&null!==e[t],b=g?e[t]:null;return(0,i.jsx)("rect",{width:n,height:n,x:a,y:d*f+a,rx:o,"data-empty":!g||void 0,fill:g?s({value:e[t],min:r,max:l,colors:c}):void 0,onPointerEnter:u?()=>m({date:t,value:b}):void 0,...h?.({date:t,value:b}),...p("rect")},t)});return(0,i.jsx)("g",{transform:`translate(${d*f}, 0)`,"data-id":"week",children:g},d)})})}var u={root:"m_2ef228c3",rect:"m_2ef201c5",monthLabel:"m_7e977775",weekdayLabel:"m_c4b68f8d",legendLabel:"m_75b4f3e6",legendRect:"m_da847eb2"},m=e.i(232471),h=e.i(431868),p=e.i(275519),f=e.i(44091),g=e.i(391466),b=e.i(191788);let v={monthLabels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],weekdayLabels:["Sun","Mon","","Wed","","Fri",""],monthLabelsPosition:"top",withOutsideDates:!0,firstDayOfWeek:1,rectSize:10,weekdaysLabelsWidth:30,monthsLabelsHeight:14,gap:1,rectRadius:2,fontSize:12,colors:["var(--heatmap-level-1)","var(--heatmap-level-2)","var(--heatmap-level-3)","var(--heatmap-level-4)"],legendLabels:["Less","More"]},x=(0,p.factory)(e=>{let t,n,a,s,p,x,y,T,w,j,D=(0,f.useProps)("Heatmap",v,e),{classNames:A,className:S,style:C,styles:M,unstyled:k,vars:E,data:I,startDate:P,endDate:H,withMonthLabels:V,monthLabelsPosition:z,withWeekdayLabels:R,weekdayLabels:L,withOutsideDates:B,monthLabels:O,firstDayOfWeek:_,rectSize:Y=10,gap:F=1,rectRadius:Z,domain:N,colors:W,weekdaysLabelsWidth:$,monthsLabelsHeight:G,fontSize:U,getTooltipLabel:q,withTooltip:K,tooltipProps:J,getRectProps:X,splitMonths:Q,withLegend:ee,legendLabels:et,attributes:en,...ea}=D,ei=(0,g.useStyles)({name:"Heatmap",classes:u,props:D,className:S,style:C,classNames:A,styles:M,unstyled:k,attributes:en,vars:E}),[eo,er]=(0,b.useState)(null),el=Y+F,es=R?$:0,ec=V&&"top"===z,ed=V&&"bottom"===z,eu=ec?G:0,em=ed?G:0,[eh,ep]=function({data:e,domain:t}){if(Array.isArray(t))return t;let n=Object.values(e);return[Math.min(...n),Math.max(...n)]}({data:I,domain:N}),ef=(0,b.useMemo)(()=>(function(e,t){let n=[...e];for(let e=0;e<t;e+=1)n.push(n.shift());return n})(L,_),[L,_]),eg=function({startDate:e,endDate:t,withOutsideDates:n=!0,firstDayOfWeek:a=1}={}){let i,o=new Date,s=new Date(o.getFullYear()-1,o.getMonth(),o.getDate()),c=e?l(e):l(s),d=t?l(t):l(o),u=function(e,t){let n=new Date(e);for(;n.getUTCDay()!==t;)n=r(n,-1);return n}(c,a),m=(i=d.getUTCDay(),r(d,6-(7*(i<a)+i-a))),h=[],p=u;for(;p<=m;){let e=Array.from({length:7},(e,t)=>{let a=r(p,t);return n||a>=c&&a<=d?`${a.getUTCFullYear()}-${String(a.getUTCMonth()+1).padStart(2,"0")}-${String(a.getUTCDate()).padStart(2,"0")}`:null});h.push(e),p=r(p,7)}return h}({startDate:P,endDate:H,withOutsideDates:B,firstDayOfWeek:_}),eb=V||Q?(t=0,n=null,a=[],eg.forEach(e=>{let i=new Date(null===e[0]?e[e.length-1]:e[0]).getUTCMonth();n!==i&&(n=i,a.push({month:n,position:t,size:0})),a[a.length-1].size+=1,t+=1}),a):[],ev={data:I,datesRange:eg,rectSize:Y,gap:F,rectRadius:Z,min:eh,max:ep,colors:W,withTooltip:K,setHoveredRect:er,getRectProps:X,getStyles:ei},ex=Q?(0,i.jsx)(c,{...ev}):(0,i.jsx)(d,{...ev}),ey=Q?o(eg,Q).length:eg.length,eT=V&&O?eb.map((e,t)=>{let n=Q?2:3;if(e.size<n)return null;let a=O[e.month];return(0,i.jsx)("text",{x:((e,t)=>{if(!Q)return e*el+F+es;let n=eb[t],a=function(e,t){for(let n=0;n<e.length;n+=1){let a=e[n];if("column"===a.type&&a.month===t)return n}return -1}(o(eg,Q),n.month);return((a>=0?a:e)+1)*el+F+es})(e.position,t),y:ed?7*el+F+G-4:G-4,width:e.size*el,fontSize:U,...ei("monthLabel"),children:a},t)}):null,ew=R&&L?ef.map((e,t)=>(0,i.jsx)("text",{x:0,y:(t+1)*el-F+eu,width:$,fontSize:U,...ei("weekdayLabel"),children:e},t)):null,ej=q&&eo&&K?q(eo):null,eD=el*ey+F+es,eA=7*el+F+eu+em+(ee?10+Y:0),eS=ee?(s=et[0],p=et[1],x=.6*U,y=s.length*x,w=(T=[void 0,...W||[]]).length*Y+(T.length-1)*F,j=p.length*x,(0,i.jsxs)("g",{transform:`translate(${eD-(y+6+w+6+j)}, ${7*el+F+eu+em+10})`,"data-id":"legend",...ei("legend"),children:[(0,i.jsx)("text",{x:0,y:Y/2,fontSize:U,dominantBaseline:"central",...ei("legendLabel"),children:s}),T.map((e,t)=>(0,i.jsx)("rect",{x:y+6+t*(Y+F),y:0,width:Y,height:Y,rx:Z,fill:e,"data-empty":void 0===e||void 0,...ei("legendRect")},t)),(0,i.jsx)("text",{x:y+6+w+6,y:Y/2,fontSize:U,dominantBaseline:"central",...ei("legendLabel"),children:p})]})):null;return(0,i.jsxs)(m.Box,{component:"svg",width:eD,height:eA,...ei("root"),...ea,children:[(0,i.jsx)(h.Tooltip.Floating,{label:ej,disabled:!K||!ej,position:"top",...J,children:(0,i.jsxs)("g",{transform:`translate(${es}, ${eu})`,"data-id":"all-weeks",children:[K&&(0,i.jsx)("rect",{fill:"transparent",width:el*ey+F,height:7*el+F}),ex]})}),ew,eT,eS]})});x.displayName="@mantine/charts/Heatmap",x.classes=u;let y={type:"code",component:function(){return(0,i.jsx)(x,{data:n,startDate:"2024-02-16",endDate:"2025-02-16"})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <Heatmap data={data} startDate="2024-02-16" endDate="2025-02-16" />;
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]},T={type:"code",component:function(){return(0,i.jsx)(x,{data:n,startDate:"2024-02-16",endDate:"2025-02-16",withMonthLabels:!0,withWeekdayLabels:!0})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      withWeekdayLabels
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]},w={type:"code",component:function(){return(0,i.jsx)(x,{data:n,startDate:"2024-02-16",endDate:"2025-02-16",withMonthLabels:!0,withWeekdayLabels:!0,weekdayLabels:["Вс","Пн","","Ср","","Пт",""],monthLabels:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"]})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      withWeekdayLabels
      weekdayLabels={['Вс', 'Пн', '', 'Ср', '', 'Пт', '']}
      monthLabels={[
        'Янв',
        'Фев',
        'Мар',
        'Апр',
        'Май',
        'Июн',
        'Июл',
        'Авг',
        'Сен',
        'Окт',
        'Ноя',
        'Дек',
      ]}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]},j={type:"configurator",component:function(e){return(0,i.jsx)(x,{data:n,withMonthLabels:!0,withWeekdayLabels:!0,startDate:"2024-02-16",endDate:"2024-04-16",...e})},code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';


function Demo() {
  return (
    <Heatmap
      data={data}
      withMonthLabels
      withWeekdayLabels
      startDate="2024-02-16"
      endDate="2024-04-16"
      {{props}}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"rectSize",min:6,max:20,initialValue:10,libraryValue:"__"},{type:"number",prop:"rectRadius",min:0,max:20,initialValue:2,libraryValue:"__"},{type:"number",prop:"gap",min:0,max:5,initialValue:1,libraryValue:"__"}]};var D=e.i(494834);let A={type:"code",component:function(){return(0,i.jsx)(x,{data:n,startDate:"2024-02-16",endDate:"2025-02-16",withTooltip:!0,withWeekdayLabels:!0,withMonthLabels:!0,getTooltipLabel:({date:e,value:t})=>`${(0,D.default)(e).format("DD MMM, YYYY")} – ${null===t||0===t?"No contributions":`${t} contribution${t>1?"s":""}`}`})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import dayjs from 'dayjs';
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withTooltip
      withWeekdayLabels
      withMonthLabels
      getTooltipLabel={({ date, value }) =>
        \`\${dayjs(date).format('DD MMM, YYYY')} – \${value === null || value === 0 ? 'No contributions' : \`\${value} contribution\${value > 1 ? 's' : ''}\`}\`
      }
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]},S={type:"code",component:function(){return(0,i.jsx)(x,{data:n,startDate:"2024-02-16",endDate:"2024-04-16",withOutsideDates:!1,withMonthLabels:!0,withWeekdayLabels:!0,withTooltip:!0,getTooltipLabel:({date:e,value:t})=>`${e} – ${t??0} contributions`})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2024-04-16"
      withOutsideDates={false}
      withMonthLabels
      withWeekdayLabels
      withTooltip
      getTooltipLabel={({ date, value }) => \`\${date} – \${value ?? 0} contributions\`}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]},C={type:"code",component:function(){return(0,i.jsx)(x,{data:n,startDate:"2024-02-16",endDate:"2024-04-26",withMonthLabels:!0,withWeekdayLabels:!0,withTooltip:!0,firstDayOfWeek:0,weekdayLabels:["","Mon","","Wed","","Fri",""],getTooltipLabel:({date:e,value:t})=>`${e} – ${t??0} contributions`})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2024-04-26"
      withMonthLabels
      withWeekdayLabels
      withTooltip
      firstDayOfWeek={0}
      weekdayLabels={['', 'Mon', '', 'Wed', '', 'Fri', '']}
      getTooltipLabel={({ date, value }) => \`\${date} – \${value ?? 0} contributions\`}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]},M={type:"code",component:function(){return(0,i.jsx)(x,{data:n,startDate:"2024-02-16",endDate:"2025-02-16",getRectProps:({date:e,value:t})=>({onClick:()=>console.log({date:e,value:t})})})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      getRectProps={({ date, value }) => ({
        onClick: () => console.log({ date, value }),
      })}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]},k={type:"code",component:function(){return(0,i.jsx)(x,{data:n,startDate:"2024-02-16",endDate:"2025-02-16",colors:["var(--mantine-color-orange-4)","var(--mantine-color-orange-6)","var(--mantine-color-orange-7)","var(--mantine-color-orange-9)"]})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      colors={[
        'var(--mantine-color-orange-4)',
        'var(--mantine-color-orange-6)',
        'var(--mantine-color-orange-7)',
        'var(--mantine-color-orange-9)',
      ]}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]};var E={root:"m_2b796525"};let I={type:"code",component:function(){return(0,i.jsx)(x,{classNames:E,data:n,startDate:"2024-02-16",endDate:"2025-02-16"})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      classNames={classes}
    />
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`.root {
  @mixin light {
    --heatmap-level-1: var(--mantine-color-blue-2);
    --heatmap-level-2: var(--mantine-color-blue-4);
    --heatmap-level-3: var(--mantine-color-blue-6);
    --heatmap-level-4: var(--mantine-color-blue-9);
  }

  @mixin dark {
    --heatmap-level-1: alpha(var(--mantine-color-orange-6), 0.35);
    --heatmap-level-2: alpha(var(--mantine-color-orange-6), 0.65);
    --heatmap-level-3: var(--mantine-color-orange-6);
    --heatmap-level-4: var(--mantine-color-yellow-4);
  }
}`,language:"scss"},{fileName:"data.ts",code:a,language:"tsx"}]},P={type:"code",component:function(){return(0,i.jsx)(x,{data:n,startDate:"2024-02-16",endDate:"2025-02-16",withMonthLabels:!0,splitMonths:!0})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      splitMonths
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]},H={type:"code",component:function(){return(0,i.jsx)(x,{data:n,startDate:"2024-02-16",endDate:"2025-02-16",withMonthLabels:!0,withWeekdayLabels:!0,withLegend:!0})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      withWeekdayLabels
      withLegend
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]},V={type:"code",component:function(){return(0,i.jsx)(x,{data:n,startDate:"2024-02-16",endDate:"2025-02-16",withMonthLabels:!0,withWeekdayLabels:!0,monthLabelsPosition:"bottom"})},centered:!0,overflow:"hidden",code:[{fileName:"Demo.tsx",code:`
import { Heatmap } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Heatmap
      data={data}
      startDate="2024-02-16"
      endDate="2025-02-16"
      withMonthLabels
      withWeekdayLabels
      monthLabelsPosition="bottom"
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]};var z=(0,t.__exportAll)({colors:()=>k,cssColors:()=>I,firstDayOfWeek:()=>C,getRectProps:()=>M,labels:()=>T,labelsText:()=>w,legend:()=>H,monthLabelsPosition:()=>V,rectSize:()=>j,splitMonths:()=>P,tooltip:()=>A,usage:()=>y,withOutsideDates:()=>S});e.s(["HeatmapDemos",0,z],753623)},393353,e=>{"use strict";var t=e.i(779177),n=e.i(433512),a=e.i(481178),i=e.i(317477),o=e.i(700145),r=e.i(853487),l=e.i(44091),s=e.i(391466),c=e.i(275519),d=e.i(232471),u={root:"m_e5262200",indicator:"m_760d1fb1",processing:"m_885901b1"},m=e.i(391398);let h={position:"top-end",offset:0,showZero:!0},p=(0,a.createVarsResolver)((e,{color:a,position:l,offset:s,size:c,radius:d,zIndex:u,autoContrast:m})=>({root:{"--indicator-color":a?(0,i.getThemeColor)(a,e):void 0,"--indicator-text-color":(0,r.getAutoContrastValue)(m,e)?(0,o.getContrastColor)({color:a,theme:e,autoContrast:m}):void 0,"--indicator-size":(0,t.rem)(c),"--indicator-radius":void 0===d?void 0:(0,n.getRadius)(d),"--indicator-z-index":u?.toString(),...function(e="top-end",n=0){let a={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},i="number"==typeof n?n:n.x,o="number"==typeof n?n:n.y,r=(0,t.rem)(i),l=(0,t.rem)(o),[s,c]=e.split("-");return"top"===s&&(a["--indicator-top"]=l,a["--indicator-translate-y"]="-50%"),"middle"===s&&(a["--indicator-top"]="50%",a["--indicator-translate-y"]="-50%"),"bottom"===s&&(a["--indicator-bottom"]=l,a["--indicator-translate-y"]="50%"),"start"===c&&(a["--indicator-left"]=r,a["--indicator-translate-x"]="-50%"),"center"===c&&(a["--indicator-left"]="50%",a["--indicator-translate-x"]="-50%"),"end"===c&&(a["--indicator-right"]=r,a["--indicator-translate-x"]="50%"),a}(l,s)}})),f=(0,c.factory)(e=>{let t=(0,l.useProps)("Indicator",h,e),{classNames:n,className:a,style:i,styles:o,unstyled:r,vars:c,children:f,position:g,offset:b,inline:v,label:x,radius:y,color:T,withBorder:w,disabled:j,processing:D,zIndex:A,autoContrast:S,maxValue:C,showZero:M,mod:k,attributes:E,...I}=t,P=(0,s.useStyles)({name:"Indicator",classes:u,props:t,className:a,style:i,classNames:n,styles:o,unstyled:r,attributes:E,vars:c,varsResolver:p}),H=!M&&(0===x||"0"===x),V=void 0!==C&&"number"==typeof x&&x>C?`${C}+`:x;return(0,m.jsxs)(d.Box,{...P("root"),mod:[{inline:v},k],...I,children:[!j&&!H&&(0,m.jsx)(d.Box,{mod:{"with-label":!!x,"with-border":w,processing:D},...P("indicator"),children:V}),f]})});f.classes=u,f.varsResolver=p,f.displayName="@mantine/core/Indicator",e.s(["Indicator",0,f],393353)},39167,(e,t,n)=>{e.e,t.exports=function(e){"use strict";var t="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),n="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),a="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),i="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),o=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function r(e,t,n){var a,i;return"m"===n?t?"минута":"минуту":e+" "+(a=+e,i=({mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"})[n].split("_"),a%10==1&&a%100!=11?i[0]:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?i[1]:i[2])}var l=function(e,a){return o.test(a)?t[e.month()]:n[e.month()]};l.s=n,l.f=t;var s=function(e,t){return o.test(t)?a[e.month()]:i[e.month()]};s.s=i,s.f=a;var c={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:l,monthsShort:s,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:r,mm:r,h:"час",hh:r,d:"день",dd:r,M:"месяц",MM:r,y:"год",yy:r},ordinal:function(e){return e},meridiem:function(e){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(c,null,!0),c}(e.r(494834))},111018,e=>{"use strict";var t=e.i(191788),n=e.i(391398),a=e.i(883364),i=e.i(494834);e.s(["getSharedPickerDemos",0,function(e){let o,r,l,s,c,d,u;return{usage:{type:"code",centered:!0,code:(o=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${o} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <${o} value={value} onChange={setValue} />;
}
`),component:()=>{let[a,i]=(0,t.useState)(null);return(0,n.jsx)(e,{value:a,onChange:i})}},range:{type:"code",centered:!0,code:(r=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${r} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return <${r} type="range" value={value} onChange={setValue} />;
}
`),component:()=>{let[a,i]=(0,t.useState)([null,null]);return(0,n.jsx)(e,{type:"range",value:a,onChange:i})}},multiple:{type:"code",centered:!0,code:(l=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${l} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string[]>([]);
  return <${l} type="multiple" value={value} onChange={setValue} />;
}
`),component:()=>{let[a,i]=(0,t.useState)([]);return(0,n.jsx)(e,{type:"multiple",value:a,onChange:i})}},deselect:{type:"code",centered:!0,code:(s=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${s} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <${s} allowDeselect value={value} onChange={setValue} />;
}
`),component:()=>{let[a,i]=(0,t.useState)(null);return(0,n.jsx)(e,{allowDeselect:!0,value:a,onChange:i})}},singleRange:{type:"code",centered:!0,code:(c=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${c} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <${c} type="range" allowSingleDateInRange value={value} onChange={setValue} />
  );
}
`),component:()=>{let[a,i]=(0,t.useState)([null,null]);return(0,n.jsx)(e,{type:"range",allowSingleDateInRange:!0,value:a,onChange:i})}},numberOfColumns:{type:"code",centered:!0,code:(d=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${d} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <${d} type="range" numberOfColumns={2} value={value} onChange={setValue} />
  );
}
`),component:()=>{let[i,o]=(0,t.useState)([null,null]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e,{type:"range",numberOfColumns:2,value:i,onChange:o,visibleFrom:"sm"}),(0,n.jsx)(a.Text,{ta:"center",hiddenFrom:"sm",children:"Demo is not available on small screens. Make your screen larger to see the demo."})]})}},sizeConfigurator:{type:"configurator",centered:!0,code:(u=e.displayName.replace("@mantine/dates/",""),`import dayjs from 'dayjs';
import { ${u} } from '@mantine/dates';

function Demo() {
  return <${u} defaultValue={dayjs().format('YYYY-MM-DD')}{{props}} />;
}
`),controls:[{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"}],component:t=>(0,n.jsx)(e,{defaultValue:(0,i.default)().format("YYYY-MM-DD"),...t})}}}],111018)},341921,e=>{"use strict";var t=e.i(648863),n=e.i(111018),a=e.i(191788),i=e.i(391398),o=e.i(777141),r=e.i(494834);let l={type:"code",centered:!0,component:function(){let[e,t]=(0,a.useState)([null,null]),[n,l]=(0,a.useState)((0,r.default)().format("YYYY-MM-DD"));return(0,i.jsx)(o.DatePicker,{date:n,onDateChange:l,type:"range",value:e,onChange:e=>{null!==e[0]&&null===e[1]&&l(e=>(0,r.default)(e).add(1,"month").format("YYYY-MM-DD")),t(e)}})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);
  const [date, setDate] = useState(new Date());

  const handleChange = (val: [Date | null, Date | null]) => {
    if (val[0] !== null && val[1] === null) {
      setDate((current) => new Date(current.getFullYear() + 1, 1));
    }

    setValue(val);
  };

  return (
    <DatePicker
      date={date}
      onDateChange={setDate}
      type="range"
      value={value}
      onChange={handleChange}
    />
  );
}
`},s=e=>{let t=(0,r.default)(e);return 5===t.day()&&13===t.date()?{style:{backgroundColor:"var(--mantine-color-red-filled)",color:"var(--mantine-color-white)"}}:{}},c=e=>{let t=(0,r.default)(e);return t.year()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:t.year()===new Date().getFullYear()+1?{disabled:!0}:{}},d=e=>{let t=(0,r.default)(e);return 1===t.month()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:5===t.month()?{disabled:!0}:{}},u={type:"code",centered:!0,component:function(){let[e,t]=(0,a.useState)(null);return(0,i.jsx)(o.DatePicker,{value:e,onChange:t,defaultDate:"2021-08-01",getDayProps:s,getYearControlProps:c,getMonthControlProps:d})},code:`
import dayjs from 'dayjs';
import { useState } from 'react';
import { DatePicker, DatePickerProps } from '@mantine/dates';

const getDayProps: DatePickerProps['getDayProps'] = (date) => {
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

const getYearControlProps: DatePickerProps['getYearControlProps'] = (date) => {
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

const getMonthControlProps: DatePickerProps['getMonthControlProps'] = (date) => {
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
    <DatePicker
      value={value}
      onChange={setValue}
      defaultDate="2021-08-01"
      getDayProps={getDayProps}
      getYearControlProps={getYearControlProps}
      getMonthControlProps={getMonthControlProps}
    />
  );
}
`},m={type:"code",centered:!0,component:function(){let[e,t]=(0,a.useState)(null);return(0,i.jsx)(o.DatePicker,{defaultDate:"2015-02-01",value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <DatePicker defaultDate="2015-02-01" value={value} onChange={setValue} />;
}
`},h={type:"code",centered:!0,component:function(){let[e,t]=(0,a.useState)(null);return(0,i.jsx)(o.DatePicker,{defaultLevel:"decade",decadeLabelFormat:"YY",yearLabelFormat:"YYYY [year]",monthLabelFormat:"MM/YY",value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePicker
      defaultLevel="decade"
      decadeLabelFormat="YY"
      yearLabelFormat="YYYY [year]"
      monthLabelFormat="MM/YY"
      value={value}
      onChange={setValue}
    />
  );
}
`},p={type:"code",centered:!0,component:function(){return(0,i.jsx)(o.DatePicker,{monthsListFormat:"MM",yearsListFormat:"YY"})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker monthsListFormat="MM" yearsListFormat="YY" />;
}
`};e.i(39167);let f={type:"code",centered:!0,component:function(){return(0,i.jsx)(o.DatePicker,{locale:"ru"})},code:`
import 'dayjs/locale/ru';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker locale="ru" />;
}
`};var g=e.i(725695);let b={type:"code",component:function(){return(0,i.jsxs)(g.Group,{justify:"center",children:[(0,i.jsx)(o.DatePicker,{maxLevel:"year"}),(0,i.jsx)(o.DatePicker,{maxLevel:"month"})]})},code:`
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker maxLevel="year" />
      <DatePicker maxLevel="month" />
    </Group>
  );
}
`},v={type:"code",centered:!0,component:function(){let[e,t]=(0,a.useState)(null);return(0,i.jsx)(o.DatePicker,{value:e,onChange:t,defaultDate:"2022-02-01",minDate:"2022-02-10",maxDate:"2022-02-25"})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return (
    <DatePicker
      value={value}
      onChange={setValue}
      defaultDate="2022-02-01"
      minDate="2022-02-10"
      maxDate="2022-02-25"
    />
  );
}
`},x={type:"code",component:function(){return(0,i.jsxs)(g.Group,{justify:"center",children:[(0,i.jsx)(o.DatePicker,{defaultLevel:"decade"}),(0,i.jsx)(o.DatePicker,{defaultLevel:"year"})]})},code:`
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker defaultLevel="decade" />
      <DatePicker defaultLevel="year" />
    </Group>
  );
}
`},y={type:"code",component:function(){return(0,i.jsxs)(g.Group,{justify:"center",children:[(0,i.jsx)(o.DatePicker,{firstDayOfWeek:0}),(0,i.jsx)(o.DatePicker,{firstDayOfWeek:6})]})},code:`
import { Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <Group justify="center">
      <DatePicker firstDayOfWeek={0} />
      <DatePicker firstDayOfWeek={6} />
    </Group>
  );
}
`},T={type:"code",centered:!0,component:function(){return(0,i.jsx)(o.DatePicker,{weekendDays:[1,2]})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker weekendDays={[1, 2]} />;
}
`};var w=e.i(393353);let j=e=>{let t=(0,r.default)(e).date();return(0,i.jsx)(w.Indicator,{size:6,color:"red",offset:-5,disabled:16!==t,children:(0,i.jsx)("div",{children:t})})},D={type:"code",centered:!0,component:function(){return(0,i.jsx)(o.DatePicker,{renderDay:j})},code:`
import dayjs from 'dayjs';
import { Indicator } from '@mantine/core';
import { DatePicker, DatePickerProps } from '@mantine/dates';

const dayRenderer: DatePickerProps['renderDay'] = (date) => {
  const day = dayjs(date).date();
  return (
    <Indicator size={6} color="red" offset={-5} disabled={day !== 16}>
      <div>{day}</div>
    </Indicator>
  );
};

function Demo() {
  return <DatePicker renderDay={dayRenderer} />;
}
`},A={type:"code",centered:!0,component:function(){return(0,i.jsx)(o.DatePicker,{hideWeekdays:!0})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker hideWeekdays />;
}
`},S={type:"code",centered:!0,component:function(){return(0,i.jsx)(o.DatePicker,{hideOutsideDates:!0})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker hideOutsideDates />;
}
`},C={type:"code",component:function(){return(0,i.jsx)(o.DatePicker,{excludeDate:e=>5!==new Date(e).getDay()})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker excludeDate={(date) => new Date(date).getDay() !== 5} />;
}
`,centered:!0},M={type:"code",centered:!0,component:function(){return(0,i.jsx)(o.DatePicker,{withWeekNumbers:!0})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker withWeekNumbers />;
}
`},k={type:"code",centered:!0,component:function(){return(0,i.jsx)(o.DatePicker,{presets:[{value:(0,r.default)().subtract(1,"day").format("YYYY-MM-DD"),label:"Yesterday"},{value:(0,r.default)().format("YYYY-MM-DD"),label:"Today"},{value:(0,r.default)().add(1,"day").format("YYYY-MM-DD"),label:"Tomorrow"},{value:(0,r.default)().add(1,"month").format("YYYY-MM-DD"),label:"Next month"},{value:(0,r.default)().add(1,"year").format("YYYY-MM-DD"),label:"Next year"},{value:(0,r.default)().subtract(1,"month").format("YYYY-MM-DD"),label:"Last month"},{value:(0,r.default)().subtract(1,"year").format("YYYY-MM-DD"),label:"Last year"}]})},code:`
import dayjs from 'dayjs';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <DatePicker
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
`},E={type:"code",centered:!0,component:function(){let e=(0,r.default)();return(0,i.jsx)(o.DatePicker,{type:"range",presets:[{value:[e.subtract(2,"day").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"Last two days"},{value:[e.subtract(7,"day").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"Last 7 days"},{value:[e.startOf("month").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"This month"},{value:[e.subtract(1,"month").startOf("month").format("YYYY-MM-DD"),e.subtract(1,"month").endOf("month").format("YYYY-MM-DD")],label:"Last month"},{value:[e.subtract(1,"year").startOf("year").format("YYYY-MM-DD"),e.subtract(1,"year").endOf("year").format("YYYY-MM-DD")],label:"Last year"}]})},code:`
import dayjs from 'dayjs';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const today = dayjs();

  return (
    <DatePicker
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
`,defaultExpanded:!1},I={type:"code",centered:!0,component:function(){return(0,i.jsx)(o.DatePicker,{defaultDate:"2022-02-01",headerControlsOrder:["level","previous","next"],styles:{calendarHeaderLevel:{justifyContent:"flex-start",paddingInlineStart:8}}})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return (
    <DatePicker
      defaultDate="2022-02-01"
      headerControlsOrder={['level', 'previous', 'next']}
      styles={{
        calendarHeaderLevel: {
          justifyContent: 'flex-start',
          paddingInlineStart: 8,
        },
      }}
    />
  );
}
`},P={type:"code",centered:!0,maxWidth:600,component:function(){let[e,t]=(0,a.useState)(null);return(0,i.jsx)(o.DatePicker,{fullWidth:!0,value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <DatePicker fullWidth value={value} onChange={setValue} />;
}
`},H={type:"code",centered:!0,component:function(){return(0,i.jsx)(o.DatePicker,{withNativeLevelSelect:!0,yearsSelectRange:[2020,2035]})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker withNativeLevelSelect yearsSelectRange={[2020, 2035]} />;
}
`};var V=(0,t.__exportAll)({controlProps:()=>u,controlledDate:()=>l,defaultDate:()=>m,defaultLevel:()=>x,deselect:()=>L,excludeDate:()=>C,firstDayOfWeek:()=>y,fullWidth:()=>P,headerControlsOrder:()=>I,hideOutsideDates:()=>S,hideWeekdays:()=>A,labelFormat:()=>h,listFormat:()=>p,locale:()=>f,maxLevel:()=>b,minMax:()=>v,multiple:()=>R,nativeLevelSelect:()=>H,numberOfColumns:()=>_,presets:()=>k,presetsRange:()=>E,range:()=>B,renderDay:()=>D,singleRange:()=>O,sizeConfigurator:()=>Y,usage:()=>z,weekendDays:()=>T,withWeekNumbers:()=>M});let{usage:z,multiple:R,deselect:L,range:B,singleRange:O,numberOfColumns:_,sizeConfigurator:Y}=(0,n.getSharedPickerDemos)(o.DatePicker);e.s(["DatePickerDemos",0,V],341921)},943664,e=>{"use strict";var t=e.i(648863),n=e.i(883364),a=e.i(391398);function i(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Text,{size:"xl",fw:700,children:"Charizard (Pokémon)"}),(0,a.jsx)(n.Text,{c:"dimmed",children:"Charizard description from Bulbapedia"}),(0,a.jsx)(n.Text,{size:"sm",mt:"md",children:"Charizard is a draconic, bipedal Pokémon. It is primarily orange with a cream underside from the chest to the tip of its tail. It has a long neck, small blue eyes, slightly raised nostrils, and two horn-like structures protruding from the back of its rectangular head. There are two fangs visible in the upper jaw when its mouth is closed. Two large wings with blue-green undersides sprout from its back, and a horn-like appendage juts out from the top of the third joint of each wing. A single wing-finger is visible through the center of each wing membrane. Charizard's arms are short and skinny compared to its robust belly, and each limb has three white claws. It has stocky legs with cream-colored soles on each of its plantigrade feet. The tip of its long, tapering tail burns with a sizable flame."}),(0,a.jsx)(n.Text,{size:"sm",mt:"md",children:"As Mega Charizard X, its body and legs are more physically fit, though its arms remain thin. Its skin turns black with a sky-blue underside and soles. Two spikes with blue tips curve upward from the front and back of each shoulder, while the tips of its horns sharpen, turn blue, and curve slightly upward. Its brow and claws are larger, and its eyes are now red. It has two small, fin-like spikes under each horn and two more down its lower neck. The finger disappears from the wing membrane, and the lower edges are divided into large, rounded points. The third joint of each wing-arm is adorned with a claw-like spike. Mega Charizard X breathes blue flames out the sides of its mouth, and the flame on its tail now burns blue. It is said that its new power turns it black and creates more intense flames."})]})}var o=e.i(232471),r=e.i(19300);let l={type:"configurator",component:function(e){return(0,a.jsx)(o.Box,{maw:400,mx:"auto",children:(0,a.jsx)(r.ScrollArea,{h:250,...e,children:(0,a.jsx)(i,{})})})},code:`
import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea h={250}{{props}}>
      {/* ... content */}
    </ScrollArea>
  );
}
`,controls:[{prop:"type",type:"select",data:[{value:"hover",label:"Hover"},{value:"auto",label:"Auto"},{value:"always",label:"Always"},{value:"scroll",label:"Scroll"},{value:"never",label:"Never"}],initialValue:"hover",libraryValue:"hover"},{prop:"offsetScrollbars",type:"boolean",libraryValue:!1,initialValue:!1},{prop:"overscrollBehavior",type:"segmented",initialValue:"auto",libraryValue:"auto",data:[{value:"auto",label:"Auto"},{value:"contain",label:"Contain"},{value:"none",label:"None"}]},{prop:"scrollbarSize",type:"number",min:2,max:20,step:2,libraryValue:10,initialValue:10},{prop:"scrollHideDelay",type:"number",min:0,max:6e3,step:500,libraryValue:1e3,initialValue:1e3}]},s={type:"code",component:function(){return(0,a.jsx)(r.ScrollArea,{w:300,h:200,children:(0,a.jsx)(o.Box,{w:600,children:(0,a.jsx)(i,{})})})},centered:!0,code:`
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
`};var c=e.i(191788),d=e.i(485108),u=e.i(725695),m=e.i(671640);let h={type:"code",component:function(){let e=(0,c.useRef)(null);return(0,a.jsxs)(m.Stack,{align:"center",children:[(0,a.jsx)(r.ScrollArea,{w:300,h:200,viewportRef:e,children:(0,a.jsx)(i,{})}),(0,a.jsxs)(u.Group,{justify:"center",children:[(0,a.jsx)(d.Button,{onClick:()=>e.current.scrollTo({top:e.current.scrollHeight,behavior:"smooth"}),children:"Scroll to bottom"}),(0,a.jsx)(d.Button,{onClick:()=>e.current.scrollTo({top:e.current.scrollHeight/2,behavior:"smooth"}),children:"Scroll to center"}),(0,a.jsx)(d.Button,{onClick:()=>e.current.scrollTo({top:0,behavior:"smooth"}),children:"Scroll to top"})]})]})},code:`
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
`};var p=e.i(301388);let f={type:"code",component:function(){let[e,t]=(0,c.useState)({x:0,y:0});return(0,a.jsxs)(m.Stack,{align:"center",children:[(0,a.jsx)(r.ScrollArea,{w:300,h:200,onScrollPositionChange:t,children:(0,a.jsx)(o.Box,{w:600,children:(0,a.jsx)(i,{})})}),(0,a.jsxs)(n.Text,{children:["Scroll position: ",(0,a.jsx)(p.Code,{children:`{ x: ${e.x}, y: ${e.y} }`})]})]})},code:`
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
`};var g=e.i(692385);let b={type:"code",component:function(){let[e,t]=(0,g.useCounter)(3,{min:0,max:10}),n=Array(e).fill(0).map((e,t)=>(0,a.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis reiciendis voluptate eaque itaque quos. Natus iure tenetur libero, reprehenderit ad, sequi, in aliquam eos necessitatibus expedita delectus veniam culpa!"},t));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.ScrollArea.Autosize,{mah:300,maw:400,mx:"auto",children:n}),(0,a.jsxs)(u.Group,{justify:"center",mt:"md",children:[(0,a.jsx)(d.Button,{color:"red",onClick:t.decrement,children:"Remove paragraph"}),(0,a.jsx)(d.Button,{onClick:t.increment,children:"Add paragraph"})]})]})},code:`
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
`};var v={scrollbar:"m_3dc2e23a",thumb:"m_b848b7ea",corner:"m_342d2ec1"};let x={type:"code",component:function(){return(0,a.jsx)(r.ScrollArea,{w:300,h:200,type:"always",offsetScrollbars:!0,classNames:v,children:(0,a.jsx)(o.Box,{w:600,children:(0,a.jsx)(i,{})})})},centered:!0,code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}]};var y=e.i(841209),T=e.i(284629);let w=["🍎 Apples","🍌 Bananas","🍊 Oranges","🥛 Milk","🍞 Bread","🥚 Eggs","🍗 Chicken","🥩 Beef","🍝 Pasta","🍚 Rice","🥔 Potatoes","🧅 Onions","🍅 Tomatoes","🥒 Cucumbers","🥕 Carrots","🥬 Lettuce","🍃 Spinach","🥦 Broccoli","🧀 Cheese","🍦 Yogurt","🧈 Butter","🍚 Sugar","🧂 Salt","🌶️ Pepper","☕ Coffee","🍵 Tea","🥤 Juice","💧 Water","🍪 Cookies","🍫 Chocolate"],j={type:"code",component:function(){let e=(0,c.useRef)(null),[t,n]=(0,c.useState)(""),[i,o]=(0,c.useState)(-1),l=w.filter(e=>e.toLowerCase().includes(t.toLowerCase())),s=l.map((e,t)=>(0,a.jsx)(T.UnstyledButton,{"data-list-item":!0,display:"block",bg:t===i?"var(--mantine-color-blue-light)":void 0,w:"100%",p:5,children:e},e));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(y.TextInput,{value:t,onChange:e=>{n(e.currentTarget.value),o(-1)},onKeyDown:t=>{"ArrowDown"===t.key&&(t.preventDefault(),o(t=>{let n=t+1>=l.length?t:t+1;return e.current?.querySelectorAll("[data-list-item]")?.[n]?.scrollIntoView({block:"nearest"}),n})),"ArrowUp"===t.key&&(t.preventDefault(),o(t=>{let n=t-1<0?t:t-1;return e.current?.querySelectorAll("[data-list-item]")?.[n]?.scrollIntoView({block:"nearest"}),n}))},placeholder:"Search groceries"}),(0,a.jsx)(r.ScrollArea,{h:150,type:"always",mt:"md",viewportRef:e,children:s})]})},code:`
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
`,centered:!0,maxWidth:340};var D=e.i(392862);let A=["Apples","Bananas","Oranges","Milk","Bread","Eggs","Chicken","Beef","Pasta","Rice","Potatoes","Onions","Tomatoes","Cucumbers","Carrots","Lettuce","Spinach","Broccoli","Cheese","Yogurt","Butter","Sugar","Salt","Pepper","Coffee","Tea","Juice","Water","Cookies","Chocolate"],S={type:"code",component:function(){let e=(0,c.useRef)(null),[t,i]=(0,c.useState)(""),[l,s]=(0,c.useState)(!1),[d,u]=(0,c.useState)(-1),m=A.filter(e=>e.toLowerCase().includes(t.toLowerCase())),h=m.map((e,t)=>(0,a.jsx)(T.UnstyledButton,{"data-list-item":!0,display:"block",bg:t===d?"var(--mantine-color-blue-light)":void 0,w:"100%",p:5,children:e},e));return(0,a.jsxs)(D.Popover,{width:"target",opened:l,children:[(0,a.jsx)(D.Popover.Target,{children:(0,a.jsx)(y.TextInput,{value:t,onFocus:()=>s(!0),onBlur:()=>s(!1),onChange:e=>{i(e.currentTarget.value),u(-1)},onKeyDown:t=>{"ArrowDown"===t.key&&(t.preventDefault(),u(t=>{let n=t+1>=m.length?t:t+1;return e.current?.querySelectorAll("[data-list-item]")?.[n]?.scrollIntoView({block:"nearest"}),n})),"ArrowUp"===t.key&&(t.preventDefault(),u(t=>{let n=t-1<0?t:t-1;return e.current?.querySelectorAll("[data-list-item]")?.[n]?.scrollIntoView({block:"nearest"}),n}))},placeholder:"Search groceries"})}),(0,a.jsx)(D.Popover.Dropdown,{p:0,children:(0,a.jsx)(r.ScrollArea.Autosize,{viewportRef:e,mah:200,type:"always",scrollbars:"y",children:(0,a.jsx)(o.Box,{px:"xs",py:5,children:h.length>0?h:(0,a.jsx)(n.Text,{c:"dimmed",children:"Nothing found"})})})})]})},code:`
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
`,centered:!0,maxWidth:340},C={type:"code",component:function(){return(0,a.jsx)(r.ScrollArea,{w:300,h:200,scrollbars:"y",children:(0,a.jsx)(o.Box,{w:600,children:(0,a.jsx)(i,{})})})},centered:!0,code:`
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
`};var M=e.i(257177);let k={type:"code",component:function(){let[e,t]=(0,c.useState)(0),[i,l]=(0,c.useState)(0),[s,d]=(0,c.useState)(0),[h,p]=(0,c.useState)(0);return(0,a.jsxs)(m.Stack,{align:"center",children:[(0,a.jsxs)(u.Group,{children:[(0,a.jsxs)(M.Badge,{color:"blue",children:["Top: ",e]}),(0,a.jsxs)(M.Badge,{color:"green",children:["Bottom: ",i]}),(0,a.jsxs)(M.Badge,{color:"orange",children:["Left: ",s]}),(0,a.jsxs)(M.Badge,{color:"grape",children:["Right: ",h]})]}),(0,a.jsx)(r.ScrollArea,{h:200,w:300,onTopReached:()=>t(e=>e+1),onBottomReached:()=>l(e=>e+1),onLeftReached:()=>d(e=>e+1),onRightReached:()=>p(e=>e+1),children:(0,a.jsx)(o.Box,{w:600,children:Array(50).fill(0).map((e,t)=>(0,a.jsxs)(n.Text,{children:["Line ",t+1," - This is a long line that requires horizontal scrolling"]},t))})})]})},code:`
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
`},E={type:"code",component:function(){return(0,a.jsx)(r.ScrollArea,{h:200,startScrollPosition:{y:250},children:(0,a.jsx)(i,{})})},code:`
import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea h={200} startScrollPosition={{ y: 250 }}>
      {/* ... content */}
    </ScrollArea>
  );
}
`,centered:!0,maxWidth:300},I={type:"configurator",component:function(e){return(0,a.jsx)(r.ScrollArea,{w:300,h:200,type:"always",scrollbars:"y",...e,children:(0,a.jsx)(i,{})})},centered:!0,code:`
import { ScrollArea } from '@mantine/core';

function Demo() {
  return (
    <ScrollArea
      w={300}
      h={200}
      type="always"
      scrollbars="y"
      {{props}}
    >
      {/* ... content */}
    </ScrollArea>
  );
}
`,controls:[{prop:"verticalScrollbarPosition",type:"segmented",initialValue:"right",libraryValue:null,data:["left","right"]},{prop:"offsetScrollbars",type:"boolean",initialValue:!0,libraryValue:null}]};var P=(0,t.__exportAll)({autosizePopover:()=>S,boundaries:()=>k,horizontal:()=>s,maxHeight:()=>b,scrollIntoView:()=>j,scrollPosition:()=>f,scrollTo:()=>h,scrollbars:()=>C,startScrollPosition:()=>E,stylesApi:()=>x,usage:()=>l,verticalScrollbarPosition:()=>I});e.s(["ScrollAreaDemos",0,P],943664)},420924,176304,461304,e=>{"use strict";e.s(["getOrderedResources",0,function(e,t){if(!t||0===t.length)return{orderedResources:e,groupRanges:[],resourceGroupMap:[]};let n=new Map(e.map(e=>[e.id,e])),a=new Set,i=[],o=[];for(let e of t){let t=i.length,r=0;for(let t of e.resourceIds){let e=n.get(t);e&&!a.has(t)&&(i.push(e),a.add(t),r++)}r>0&&o.push({group:e,startIndex:t,count:r})}for(let t of e)a.has(t.id)||i.push(t);let r=Array(i.length).fill(null);for(let e of o)for(let t=0;t<e.count;t++){let n,a=e.startIndex+t;n=1===e.count?"only":0===t?"first":t===e.count-1?"last":"middle",r[a]={group:e.group,position:n,count:e.count}}return{orderedResources:i,groupRanges:o,resourceGroupMap:r}}],420924),e.s(["getGroupToResourceIdMap",0,function(e){let t=new Map;for(let n of e)t.set(String(n.id),n.id);return t}],176304),e.s(["getIndexFromDragPoint",0,function(e,t){let n=e.findIndex(e=>{if(!e)return!1;let n=e.getBoundingClientRect();return t>=n.left&&t<=n.right});if(n>=0)return n;let a=e[0],i=e[e.length-1];if(!a||!i)return null;let o=a.getBoundingClientRect(),r=i.getBoundingClientRect();return t<o.left?0:t>r.right?e.length-1:null}],461304)},640542,343355,367752,578373,e=>{"use strict";e.s(["handleResourcesGridKeyDown",0,function({controlsRef:e,resourceIndex:t,slotIndex:n,event:a}){let i=function(e){switch(e){case"ArrowDown":return"down";case"ArrowUp":return"up";case"ArrowRight":return"right";case"ArrowLeft":return"left";default:return null}}(a.key);if(i){a.preventDefault();let o=e.current?e.current.map(e=>e?e.length:0):null;if(!o)return;!function e({controlsRef:t,direction:n,resourceIndex:a,slotIndex:i,size:o}){let r=function({direction:e,resourceIndex:t,slotIndex:n,size:a}){let i=a[t];if(!i)return null;switch(e){case"left":if(0===n)return null;return{resourceIndex:t,slotIndex:n-1};case"right":if(n===i-1)return null;return{resourceIndex:t,slotIndex:n+1};case"up":{if(0===t)return null;let e=a[t-1];return{resourceIndex:t-1,slotIndex:Math.min(n,e-1)}}case"down":{if(t===a.length-1)return null;let e=a[t+1];return{resourceIndex:t+1,slotIndex:Math.min(n,e-1)}}default:return null}}({direction:n,resourceIndex:a,slotIndex:i,size:o});if(!r)return;let l=t.current?.[r.resourceIndex]?.[r.slotIndex];l&&(l.disabled||l.getAttribute("data-hidden")?e({controlsRef:t,direction:n,resourceIndex:r.resourceIndex,slotIndex:r.slotIndex,size:o}):l.focus())}({controlsRef:e,direction:i,resourceIndex:t,slotIndex:n,size:o})}}],640542);var t=e.i(672654),n=e.i(42916),a=e.i(494834),i=e.i(191788);e.s(["useHorizontalEventResize",0,function({enabled:e=!1,mode:o="default",startTime:r,endTime:l,intervalMinutes:s,onEventResize:c,canResizeEvent:d}){let[u,m]=(0,i.useState)(null),h=(0,i.useRef)(null),p=(0,i.useRef)(!1),f=(0,i.useEffectEvent)(c||(()=>{})),g=(0,n.parseTimeString)(r),b=(0,n.parseTimeString)(l),v=60*g.hours+g.minutes,x=60*b.hours+b.minutes,y=(0,t.clampIntervalMinutes)(s),T=x-v,w=Math.ceil(T/y)*y,j=y/w*100,D=(0,i.useCallback)(e=>Math.max(0,Math.min(T,Math.round(e/y)*y)),[T,y]),A=(0,i.useCallback)((e,t)=>{let n=v+D(e/100*w),a=Math.floor(n/60);return`${t} ${String(a).padStart(2,"0")}:${String(n%60).padStart(2,"0")}:00`},[w,v,D]),S=(0,i.useCallback)(e=>D(e/100*w)/w*100,[w,D]),C=(0,i.useCallback)(({event:t,edge:n,container:i,originalLeft:r,originalWidth:l,eventDate:s,dayIndex:c=0,dayCount:d=1,pointerEvent:u})=>{if(!e||"static"===o)return;u.preventDefault(),u.stopPropagation();let p={eventId:t.id,event:t,edge:n,container:i,originalLeft:r,originalWidth:l,currentLeft:r,currentWidth:l,eventDate:s,originalStart:(0,a.default)(t.start).format("YYYY-MM-DD HH:mm:ss"),originalEnd:(0,a.default)(t.end).format("YYYY-MM-DD HH:mm:ss"),dayIndex:c,dayCount:d};h.current=p,m(p)},[e,o]),M=null!==u;(0,i.useEffect)(()=>{if(!M)return;let e=document.body.style.userSelect,t=document.body.style.cursor;document.body.style.userSelect="none",document.body.style.cursor="ew-resize";let n=e=>{let t=h.current;if(!t)return;let n=t.container.getBoundingClientRect(),a=S(function({clientX:e,containerLeft:t,containerWidth:n,dayIndex:a,dayCount:i}){let o=n/i;return o<=0?0:Math.max(0,Math.min(100,(e-(t+a*o))/o*100))}({clientX:e.clientX,containerLeft:n.left,containerWidth:n.width,dayIndex:t.dayIndex,dayCount:t.dayCount})),i=t.originalLeft,o=t.originalWidth;if("end"===t.edge)o=Math.max(j,a-t.originalLeft);else{let e=t.originalLeft+t.originalWidth;i=Math.min(a,e-j),o=e-i}h.current={...t,currentLeft:i,currentWidth:o},m(h.current)},a=()=>{let e=h.current;if(e&&(e.currentLeft!==e.originalLeft||e.currentWidth!==e.originalWidth)){let t,n;"start"===e.edge?(t=A(e.currentLeft,e.eventDate),n=e.originalEnd):(t=e.originalStart,n=A(e.currentLeft+e.currentWidth,e.eventDate)),f({eventId:e.eventId,newStart:t,newEnd:n,event:e.event})}h.current=null,m(null),p.current=!0,requestAnimationFrame(()=>{p.current=!1})};return document.addEventListener("pointermove",n),document.addEventListener("pointerup",a),()=>{document.body.style.userSelect=e,document.body.style.cursor=t,document.removeEventListener("pointermove",n),document.removeEventListener("pointerup",a)}},[M]);let k=(0,i.useCallback)(e=>u&&u.eventId===e?{left:u.currentLeft,width:u.currentWidth}:null,[u]),E=(0,i.useCallback)(t=>!!e&&"static"!==o&&"background"!==t.display&&(!d||d(t)),[e,o,d]),I=(0,i.useCallback)(()=>p.current,[]);return{handleResizeStart:C,isResizing:M,resizingEventId:u?.eventId??null,resizingEdge:u?.edge??null,getResizePosition:k,isResizableEvent:E,wasResizing:I}}],343355);var o=e.i(751198);e.s(["getOverlapClusters",0,function(e){let t=[],n=new Set;for(let a=0;a<e.length;a++){if(n.has(a))continue;let i=[e[a]];n.add(a);let r=0;for(;r<i.length;){for(let t=0;t<e.length;t++)!n.has(t)&&(0,o.isEventsOverlap)(i[r],e[t])&&(i.push(e[t]),n.add(t));r++}t.push(i)}return t}],367752);var r=e.i(969610),l=e.i(298008),s=e.i(68642),c=e.i(532965),d=e.i(922621);e.s(["getResourcesDayViewEvents",0,function({events:e,resources:t,date:n,startTime:i,endTime:o,intervalMinutes:u}){let m={regularEvents:{},allDayEvents:{},backgroundTimedEvents:{},backgroundAllDayEvents:{}};for(let e of t)m.regularEvents[e.id]=[],m.allDayEvents[e.id]=[],m.backgroundTimedEvents[e.id]=[],m.backgroundAllDayEvents[e.id]=[];if(void 0===e)return m;let h=(0,a.default)(n).startOf("day"),p=(0,a.default)(n).endOf("day"),f={},g={};for(let e of t)f[e.id]=[],g[e.id]=[];let b=new Set;for(let t of e){if(void 0===t.resourceId||!(t.resourceId in f))continue;let e=(0,a.default)(t.start),n=(0,a.default)(t.end),r=e.isSame(h,"day"),c=e.isBefore(p)&&n.isAfter(h);if(r||c){if(r&&!(0,s.isEventInTimeRange)({event:t,startTime:i,endTime:o}))continue;let a=(0,l.validateEvent)(t);if(b.has(t.id))throw Error(`[@mantine/schedule] ResourcesDayView: Duplicated event ids found: ${t.id}`);if(b.add(t.id),"background"===t.display)g[t.resourceId].push(a);else if(r)f[t.resourceId].push(a);else{let r=e.isBefore(h)?h:e,l=n.isAfter(p)?p:n,c={...a,start:r.format("YYYY-MM-DD HH:mm:ss"),end:l.format("YYYY-MM-DD HH:mm:ss")};(0,s.isEventInTimeRange)({event:c,startTime:i,endTime:o})&&f[t.resourceId].push(c)}}}for(let e of t){for(let t of(0,d.getDayPositionedEvents)({events:f[e.id],startTime:i,endTime:o,date:n,intervalMinutes:u}))t.position.allDay?m.allDayEvents[e.id].push(t):m.regularEvents[e.id].push(t);for(let t of g[e.id]){let l=(0,a.default)(t.start),s=(0,a.default)(t.end),d=l.isBefore(h)?h:l,f=s.isAfter(p)?p:s,g={...t,start:d.format("YYYY-MM-DD HH:mm:ss"),end:f.format("YYYY-MM-DD HH:mm:ss")};if((0,r.isAllDayEvent)({event:g,date:n}))m.backgroundAllDayEvents[e.id].push({...t,position:{top:0,height:100,allDay:!0,width:100,offset:0,column:0,overlaps:1}});else{let{top:n,height:a}=(0,c.getDayPosition)({event:g,startTime:i,endTime:o,intervalMinutes:u});if(a<=0)continue;m.backgroundTimedEvents[e.id].push({...t,position:{top:n,height:a,allDay:!1,width:100,offset:0,column:0,overlaps:1}})}}}return m}],578373)},613490,e=>{"use strict";var t=e.i(86473),n=e.i(27748),a=e.i(898496),i=e.i(4332),o=e.i(688785),r=e.i(664397),l=e.i(969610),s=e.i(575148),c=e.i(792930),d=e.i(505696),u=e.i(657068),m=e.i(420924),h=e.i(640542),p=e.i(176304),f=e.i(461304),g=e.i(783261),b=e.i(376879),v=e.i(201867),x=e.i(891343),y=e.i(67312),T=e.i(966696),w=e.i(343355),j=e.i(367752),D=e.i(578373),A=e.i(232471),S=e.i(284629),C=e.i(391398);function M({resource:e,resourceIndex:n,date:a,slots:i,getStyles:o,children:r,labels:l,highlightBusinessHours:s,businessHours:c,withEventsDragAndDrop:u,onRowSlotsDragOver:m,onRowSlotsDragLeave:h,onRowSlotsDrop:p,onSlotClick:f,dropTargetSlotIndex:g,mode:b,slotsRef:v,firstSlotIndex:x,onSlotKeyDown:y,withDragSlotSelect:T,onSlotPointerDown:w,isSlotDragSelected:j,rowSlotsContainerRef:D,renderResourceLabel:k,renderGroupLabel:E,scrolledX:I,groupInfo:P,allDayCount:H}){let V=String(e.id),z=i.map((i,r)=>{let m=g===r,h=x?.resourceIndex===n&&x?.slotIndex===r,p=j?.(r,V)||!1;return(0,C.jsx)(S.UnstyledButton,{ref:e=>{if(!v?.current)return;v.current[n]||(v.current[n]=[]);let t=v.current[n];if(e)t[r]=e;else for(delete t[r];t.length>0&&null==t[t.length-1];)t.length-=1},...o("resourcesDayViewRowSlot"),mod:{"hour-start":i.isHourStart,...(0,d.getBusinessHoursMod)({time:i.startTime,businessHours:c,highlightBusinessHours:s}),"drop-target":m,"drag-selected":p,static:"static"===b},"aria-label":`${(0,t.getLabel)("resourceSlot",l)} ${e.label} ${a} ${i.startTime} - ${i.endTime}`,tabIndex:"static"===b?-1:h?0:-1,"data-drag-slot-index":T&&"static"!==b?r:void 0,"data-drag-slot-group":T&&"static"!==b?V:void 0,onKeyDown:e=>{y&&y(e,n,r)},onPointerDown:T&&"static"!==b?e=>w?.(e,r,V):void 0,onClick:"static"!==b&&f?t=>f(e.id,i.startTime,t):void 0,onDragOver:u&&"static"!==b?e=>e.preventDefault():void 0},i.startTime)}),R=P?.position==="first"||P?.position==="only",L=void 0!==P?null!==P?(0,C.jsx)(A.Box,{...o("resourcesDayViewGroupColumn"),mod:{"scrolled-x":I,"group-position":P.position},children:R&&(0,C.jsx)("span",{style:P.count>1?{transform:`translateY(calc((${P.count-1} * (var(--resources-day-view-row-height) + 1px)) / 2))`}:void 0,children:E?E(P.group):P.group.label})}):(0,C.jsx)(A.Box,{...o("resourcesDayViewGroupColumnEmpty"),mod:{"scrolled-x":I}}):null;return(0,C.jsxs)(A.Box,{...o("resourcesDayViewRow"),children:[L,(0,C.jsx)(A.Box,{...o("resourcesDayViewResourceLabel"),mod:{"scrolled-x":I,"has-groups":void 0!==P},children:k?k(e):e.label}),(0,C.jsxs)(A.Box,{ref:D,...o("resourcesDayViewRowSlots",{style:H?{minHeight:`max(var(--resources-day-view-row-height), calc(${H} * (var(--resources-day-view-all-day-height) + 2px) + 4px))`}:void 0}),onDragOver:u&&"static"!==b?t=>m?.(t,e.id,n):void 0,onDragLeave:u&&"static"!==b?h:void 0,onDrop:u&&"static"!==b?t=>p?.(t,e.id,n):void 0,children:[r,z]})]})}var k={resourcesDayView:"m_25154d8d",resourcesDayViewRoot:"m_d790b40f",resourcesDayViewScrollArea:"m_d54c5a67",resourcesDayViewInner:"m_1a0680c9",resourcesDayViewTimeLabelsRow:"m_26532081",resourcesDayViewCorner:"m_1c9c8e42",resourcesDayViewTimeLabel:"m_de91b51a",resourcesDayViewRow:"m_6a0ced0d",resourcesDayViewResourceLabel:"m_ac632f9",resourcesDayViewGroupColumn:"m_6c75eae8",resourcesDayViewGroupColumnEmpty:"m_f2903b45",resourcesDayViewRowSlots:"m_84f29928",resourcesDayViewRowSlot:"m_90acfcab",resourcesDayViewCurrentTimeIndicator:"m_3f0b79f6",resourcesDayViewCurrentTimeIndicatorLine:"m_7855b30a",resourcesDayViewCurrentTimeIndicatorThumb:"m_92d11180",resourcesDayViewCurrentTimeIndicatorTimeBubble:"m_e2aac04f",resourcesDayViewBackgroundEvent:"m_9cc838bf",resourcesDayViewAllDayEvent:"m_d6d6dd52",resourcesDayViewResizeHandle:"m_97715629",resourcesDayViewEventWrapper:"m_93bc1ec6"},E=e.i(494834),I=e.i(19300),P=e.i(481178),H=e.i(275519),V=e.i(433512),z=e.i(779177),R=e.i(951254),L=e.i(44091),B=e.i(62904),O=e.i(391466),_=e.i(822933),Y=e.i(417241),F=e.i(332977),Z=e.i(191788),N=e.i(205693);let W={__staticSelector:"ResourcesDayView",startTime:"00:00:00",endTime:"23:59:59",slotLabelFormat:"HH:mm",intervalMinutes:60,minEventSize:1,withHeader:!0,headerFormat:"MMMM D, YYYY",highlightBusinessHours:!1,businessHours:["09:00:00","17:00:00"],withEventsDragAndDrop:!1,withDragSlotSelect:!1,withEventResize:!1,mode:"default",maxEventsPerTimeSlot:2},$=(0,P.createVarsResolver)((e,{radius:t,slotWidth:n,rowHeight:a,groupLabelWidth:i})=>({resourcesDayView:{"--resources-day-view-radius":t?(0,V.getRadius)(t):void 0,"--resources-day-view-slot-width":(0,z.rem)(n),"--resources-day-view-row-height":(0,z.rem)(a),"--resources-day-view-group-label-width":(0,z.rem)(i)}})),G=(0,H.factory)(e=>{let S=(0,L.useProps)("ResourcesDayView",W,e),{classNames:P,className:H,style:V,styles:z,unstyled:G,attributes:U,vars:q,startTime:K,endTime:J,date:X,onDateChange:Q,resources:ee,intervalMinutes:et,minEventSize:en,slotLabelFormat:ea,radius:ei,startScrollTime:eo,scrollAreaProps:er,locale:el,withCurrentTimeIndicator:es,withCurrentTimeBubble:ec=!0,getCurrentTime:ed,__staticSelector:eu,withHeader:em,onViewChange:eh,previousControlProps:ep,nextControlProps:ef,todayControlProps:eg,viewSelectProps:eb,headerFormat:ev,events:ex,slotWidth:ey,rowHeight:eT,labels:ew,highlightBusinessHours:ej,businessHours:eD,renderEventBody:eA,renderEvent:eS,renderResourceLabel:eC,groups:eM,renderGroupLabel:ek,groupLabelWidth:eE,withEventsDragAndDrop:eI,onEventDrop:eP,canDragEvent:eH,onEventDragStart:eV,onEventDragEnd:ez,onTimeSlotClick:eR,onEventClick:eL,withDragSlotSelect:eB,onSlotDragEnd:eO,mode:e_,onExternalEventDrop:eY,withEventResize:eF,onEventResize:eZ,canResizeEvent:eN,recurrenceExpansionLimit:eW,maxEventsPerTimeSlot:e$,moreEventsProps:eG,...eU}=S,eq=void 0!==e$?Math.max(1,e$):void 0,eK=(0,O.useStyles)({name:eu,classes:k,props:S,className:H,style:V,classNames:P,styles:z,unstyled:G,vars:q,varsResolver:$,attributes:U,rootSelector:"resourcesDayView"}),{resolvedClassNames:eJ,resolvedStyles:eX}=(0,B.useResolvedStylesApi)({classNames:P,styles:z,props:S}),eQ={classNames:eJ,styles:eX,attributes:U,__staticSelector:eu,radius:ei},e0=(0,R.useMantineTheme)(),[e1,e2]=(0,Z.useState)(!1),[e4,e8]=(0,Z.useState)(!1),e6=(0,N.useDatesContext)(),e3=(0,a.getDayTimeIntervals)({startTime:K,endTime:J,intervalMinutes:et}),{orderedResources:e7,groupRanges:e5,resourceGroupMap:e9}=(0,Z.useMemo)(()=>(0,m.getOrderedResources)(ee,eM),[ee,eM]),te=e5.length>0,tt=(0,Z.useCallback)((e,t)=>{if(!eY)return;let n=(0,E.default)(X).format("YYYY-MM-DD");eY({dataTransfer:e.dataTransfer,dropDateTime:`${n} ${e3[t.slotIndex].startTime}`,resourceId:t.resourceId})},[eY,e3,X]),tn=(0,Z.useRef)(void 0),ta=(0,g.useDragDropHandlers)({enabled:eI,mode:e_,onEventDrop:(0,Z.useCallback)(e=>{eP?.({...e,resourceId:tn.current})},[eP]),canDragEvent:eH,onEventDragStart:eV,onEventDragEnd:ez,calculateDropTarget:(e,t)=>{tn.current=e.resourceId;let n=e3[e.slotIndex].startTime;return(0,c.calculateDropTime)({draggedEvent:t,targetDate:(0,E.default)(X).format("YYYY-MM-DD"),targetSlotTime:n,intervalMinutes:et})},onExternalDrop:eY?tt:void 0}),ti=(0,Z.useMemo)(()=>(0,p.getGroupToResourceIdMap)(ee),[ee]),to=(0,b.useSlotDragSelect)({enabled:eB&&"static"!==e_,onDragEnd:(e,t,n)=>{if(!eO)return;let a=(0,E.default)(X).format("YYYY-MM-DD");eO({rangeStart:`${a} ${e3[e].startTime}`,rangeEnd:`${a} ${e3[t].endTime}`,resourceId:ti.get(n)??n})}}),tr=(0,w.useHorizontalEventResize)({enabled:eF,mode:e_,startTime:K,endTime:J,intervalMinutes:et,onEventResize:eZ,canResizeEvent:eN}),tl=(eI||!!eY)&&"static"!==e_,ts=(e,t,n)=>{if(!eR)return;let a=(0,E.default)(X).format("YYYY-MM-DD"),i=e3.findIndex(e=>e.startTime===t);if(-1===i)return;let o=e3[i];eR({slotStart:`${a} ${o.startTime}`,slotEnd:`${a} ${o.endTime}`,nativeEvent:n,resourceId:e})},tc=(0,E.default)(X).format("YYYY-MM-DD"),td=()=>ed?(0,E.default)(ed()):(0,E.default)(),tu=td(),tm=(0,E.default)(X).isSame(tu,"day"),[,th]=(0,Z.useState)(0);(0,_.useInterval)(()=>th(e=>e+1),6e4,{autoInvoke:!0});let tp=(0,o.getCurrentTimePosition)({startTime:K,endTime:J,intervalMinutes:et,now:tu}),tf=(es??tm)&&(0,r.isInTimeRange)({date:tu.toDate(),startTime:K,endTime:J}),tg=ec?(0,n.formatDate)({locale:e6.getLocale(el),date:tu,format:ea}):"",tb=(0,Z.useMemo)(()=>(0,u.expandRecurringEvents)({events:ex,rangeStart:(0,E.default)(X).startOf("day").toDate(),rangeEnd:(0,E.default)(X).endOf("day").toDate(),expansionLimit:eW}),[ex,X,eW]),tv=(0,Z.useMemo)(()=>(0,D.getResourcesDayViewEvents)({date:X,events:tb,resources:ee,startTime:K,endTime:J,intervalMinutes:et}),[X,tb,ee,K,J,et]),tx=e3.map(e=>{let t=(0,n.formatDate)({date:(0,E.default)(`${tc} ${e.startTime}`),locale:e6.getLocale(el),format:ea});return(0,Z.createElement)(A.Box,{...eK("resourcesDayViewTimeLabel"),key:e.startTime,mod:{"hour-start":e.isHourStart,...(0,d.getBusinessHoursMod)({time:e.startTime,businessHours:eD,highlightBusinessHours:ej})}},t)}),ty=(0,Z.useRef)([]),tT=(0,Z.useRef)([]),tw=(0,Z.useRef)(null),tj=(0,F.useMergedRef)(tw,er?.viewportRef),tD={resourceIndex:0,slotIndex:0};(0,Y.useIsomorphicEffect)(()=>{if(!eo||!tw.current)return;let e=ty.current[0];if(!e||0===e.length)return;let t=e3.findIndex(e=>e.startTime>=eo);if(t<0)return;let n=e[t];if(!n)return;let a=n.getBoundingClientRect(),i=tw.current.getBoundingClientRect(),o=tw.current.querySelector(`.${k.resourcesDayViewCorner}`),r=o?o.getBoundingClientRect().width:0;tw.current.scrollTo({left:a.left-i.left-r,top:0})},[]);let tA=(0,Z.useCallback)((e,t)=>(0,f.getIndexFromDragPoint)(ty.current[t]??[],e.clientX),[]),tS=(e,t,n)=>{(0,h.handleResourcesGridKeyDown)({controlsRef:ty,resourceIndex:t,slotIndex:n,event:e})},tC=e7.map((e,t)=>{let n=[...tv.backgroundTimedEvents[e.id]||[],...tv.backgroundAllDayEvents[e.id]||[]].map(e=>{let t=e0.variantColorResolver({color:e.color||e0.primaryColor,theme:e0,variant:"light",autoContrast:!0}),n="function"==typeof eA?eA(e):e.title,a={key:`bg-${e.id}`,...eK("resourcesDayViewBackgroundEvent",{style:{left:`${e.position.top}%`,width:`${e.position.height}%`,top:0,height:"100%"}}),__vars:{"--bg-event-bg":t.background,"--bg-event-color":t.color},children:n};return"function"==typeof eS?eS(e,a):(0,C.jsx)(A.Box,{...a})}),a=(tv.regularEvents[e.id]||[]).filter(e=>!(0,l.isAllDayEvent)({event:e,date:X})),i=(void 0!==eq?a.filter(e=>e.position.column<eq):a).map(e=>{let n=ta.isDraggableEvent(e),a=tr.isResizableEvent(e),i=tr.getResizePosition(e.id),o=i?i.left:e.position.top,r=i?i.width:e.position.height,l=void 0!==eq&&e.position.overlaps>eq,c=a?e0.variantColorResolver({color:e.color||e0.primaryColor,theme:e0,variant:e.variant||"light",autoContrast:!0}):null,d=null!==i,u=d&&tr.resizingEdge?tr.resizingEdge:null;return(0,C.jsxs)(A.Box,{...eK("resourcesDayViewEventWrapper"),__vars:c?{"--event-color":c.color}:void 0,"data-resizing":d||void 0,style:{...(0,s.getTimeAxisEventStyle)({start:o,span:r,minSize:en}),top:l?`calc((100% - 22px) * ${e.position.column} / ${eq})`:`${e.position.offset}%`,height:l?`calc((100% - 22px) / ${eq})`:`${e.position.width}%`},children:[(0,C.jsx)(x.ScheduleEvent,{event:e,autoSize:!0,nowrap:!0,draggable:n,isResizing:d,renderEventBody:eA,renderEvent:eS,radius:ei,mode:e_,onClick:eL?t=>{tr.wasResizing()||eL(e,t)}:void 0,style:{width:"100%",height:"100%",padding:0}}),a&&"static"!==e_&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("div",{...eK("resourcesDayViewResizeHandle"),"data-edge":"start","data-active":"start"===u||void 0,onPointerDown:n=>{let a=tT.current[t];a&&tr.handleResizeStart({event:e,edge:"start",container:a,originalLeft:e.position.top,originalWidth:e.position.height,eventDate:tc,pointerEvent:n})}}),(0,C.jsx)("div",{...eK("resourcesDayViewResizeHandle"),"data-edge":"end","data-active":"end"===u||void 0,onPointerDown:n=>{let a=tT.current[t];a&&tr.handleResizeStart({event:e,edge:"end",container:a,originalLeft:e.position.top,originalWidth:e.position.height,eventDate:tc,pointerEvent:n})}})]})]},e.id)}),o=tv.allDayEvents[e.id]||[],r=o.map((e,t)=>(0,C.jsx)(A.Box,{...eK("resourcesDayViewAllDayEvent",{style:{top:`calc(${t} * (var(--resources-day-view-all-day-height) + 2px) + 2px)`}}),children:(0,C.jsx)(x.ScheduleEvent,{event:e,autoSize:!0,nowrap:!0,renderEventBody:eA,renderEvent:eS,radius:ei,mode:e_,onClick:eL?t=>eL(e,t):void 0,style:{width:"100%",height:"100%"}})},`all-day-${e.id}`)),c=void 0!==eq?(0,j.getOverlapClusters)(a).filter(e=>e.some(e=>e.position.column>=eq)).map(e=>{let t=e.filter(e=>e.position.column>=eq).length,n=Math.min(...e.map(e=>e.position.top)),a=Math.max(...e.map(e=>e.position.top+e.position.height));return(0,C.jsx)(y.MoreEvents,{events:e,moreEventsCount:t,mode:e_,labels:ew,renderEventBody:eA,renderEvent:eS,onEventClick:eL,style:{position:"absolute",left:`calc(${n}% + 1px)`,width:`calc(${a-n}% - 2px)`,bottom:0,height:"22px",paddingInline:4,zIndex:4},...eQ,...eG},`more-${e[0].id}`)}):[];return(0,C.jsxs)(M,{resource:e,resourceIndex:t,date:tc,slots:e3,getStyles:eK,labels:ew,highlightBusinessHours:ej,businessHours:eD,withEventsDragAndDrop:tl,mode:e_,slotsRef:ty,firstSlotIndex:tD,onSlotKeyDown:tS,onSlotClick:ts,onRowSlotsDragOver:(e,t,n)=>{let a=tA(e,n);null!==a&&ta.handleDragOver(e,{resourceId:t,slotIndex:a})},onRowSlotsDragLeave:ta.handleDragLeave,onRowSlotsDrop:(e,t,n)=>{let a=tA(e,n);null!==a&&ta.handleDrop(e,{resourceId:t,slotIndex:a})},dropTargetSlotIndex:ta.dropTarget?.resourceId===e.id?ta.dropTarget.slotIndex:void 0,withDragSlotSelect:eB,onSlotPointerDown:to.handleSlotPointerDown,isSlotDragSelected:to.isSlotSelected,rowSlotsContainerRef:e=>{tT.current[t]=e},renderResourceLabel:eC,renderGroupLabel:ek,scrolledX:e4,groupInfo:te?e9[t]:void 0,allDayCount:o.length,children:[n,r,i,c]},e.id)}),tM=(0,n.formatDate)({date:(0,E.default)(X),locale:e6.getLocale(el),format:ev}),tk=(0,C.jsxs)(A.Box,{...eK("resourcesDayView"),mod:{static:"static"===e_,"slot-dragging":to.isDragging,resizing:tr.isResizing,"event-interaction":tr.isResizing||ta.dragContextValue.isDragging},...eU,children:[em&&(0,C.jsx)(T.ScheduleHeaderBase,{view:"day",navigationHandlers:{previous:()=>(0,i.toDateString)((0,E.default)(X).subtract(1,"day")),next:()=>(0,i.toDateString)((0,E.default)(X).add(1,"day")),today:()=>(0,i.toDateString)(td())},control:{miw:140,title:tM},labels:ew,onDateChange:Q,onViewChange:eh,previousControlProps:ep,nextControlProps:ef,todayControlProps:eg,viewSelectProps:{views:["day","week","month"],...eb},stylesApiProps:eQ}),(0,C.jsx)(A.Box,{...eK("resourcesDayViewRoot"),children:(0,C.jsx)(I.ScrollArea,{scrollbarSize:4,...er,...eK("resourcesDayViewScrollArea",{className:er?.className,style:er?.style}),onScrollPositionChange:e=>{er?.onScrollPositionChange?.(e),e2(0!==e.y),e8(0!==e.x)},viewportRef:tj,children:(0,C.jsxs)("div",{...eK("resourcesDayViewInner"),children:[(0,C.jsxs)(A.Box,{...eK("resourcesDayViewTimeLabelsRow"),mod:{scrolled:e1},children:[(0,Z.createElement)("div",{...eK("resourcesDayViewCorner"),key:"corner",style:te?{flexBasis:"calc(var(--resources-day-view-resource-label-width) + var(--resources-day-view-group-label-width))",minWidth:"calc(var(--resources-day-view-resource-label-width) + var(--resources-day-view-group-label-width))"}:void 0},(0,t.getLabel)("resources",ew)),tx]}),tC,tf&&(0,C.jsxs)(A.Box,{...eK("resourcesDayViewCurrentTimeIndicator"),__vars:{"--indicator-left-offset":te?`calc(var(--resources-day-view-resource-label-width) + var(--resources-day-view-group-label-width) + (100% - var(--resources-day-view-resource-label-width) - var(--resources-day-view-group-label-width)) * ${tp} / 100)`:`calc(var(--resources-day-view-resource-label-width) + (100% - var(--resources-day-view-resource-label-width)) * ${tp} / 100)`,"--_time-bubble-width":tg?.toString().toLowerCase().includes("m")?"64px":"46px"},children:[ec&&(0,C.jsx)("div",{...eK("resourcesDayViewCurrentTimeIndicatorTimeBubble"),children:tg}),!ec&&(0,C.jsx)("div",{...eK("resourcesDayViewCurrentTimeIndicatorThumb")}),(0,C.jsx)("div",{...eK("resourcesDayViewCurrentTimeIndicatorLine")})]})]})})})]}),tE=(0,Z.useMemo)(()=>ta.dragContextValue,[ta.dragContextValue]);return eI?(0,C.jsx)(v.DragContext.Provider,{value:tE,children:tk}):tk});G.displayName="@mantine/schedule/ResourcesDayView",G.classes=k,G.varsResolver=$,e.s(["ResourcesDayView",0,G],613490)},119764,378073,e=>{"use strict";var t=e.i(648863),n=e.i(485108),a=e.i(802046),i=e.i(749218),o=e.i(44091),r=e.i(391466),l=e.i(275519),s=e.i(470743),c=e.i(164483);let[d,u]=(0,e.i(386179).createSafeContext)("FloatingWindow.ResizeHandle must be used within FloatingWindow");var m=e.i(232471),h=e.i(191788),p=e.i(332977),f=e.i(391398);let g={};function b(e,t,n,a){let i=e;return null!=t&&(i=Math.max(i,t)),null!=n&&(i=Math.min(i,n)),null!=a&&(i=Math.min(i,a)),i}function v(e,t,n){if(!t)return{maxWidth:void 0,maxHeight:void 0};let a=e.getBoundingClientRect(),i=n??0;return{maxWidth:window.innerWidth-a.left-i,maxHeight:window.innerHeight-a.top-i}}let x=(0,l.factory)(e=>{let{children:t,ref:n,style:a,...i}=(0,o.useProps)("FloatingWindowResizeHandle",g,e),r=u(),l=(0,h.useRef)(null),s=r.dimensions?.initialWidth!=null||r.dimensions?.minWidth!=null||r.dimensions?.maxWidth!=null,c=r.dimensions?.initialHeight!=null||r.dimensions?.minHeight!=null||r.dimensions?.maxHeight!=null;return(0,h.useEffect)(()=>{let e=l.current;if(!e)return;let t=new AbortController,{signal:n}=t,a=!1,i=0,o=0,d=0,u=0,m=(t,n)=>{let a=r.rootRef.current;if(a){if(null!==t){let n=function(e,t,n,a,i){let{maxWidth:o}=v(e,a,i);return b(t,n?.minWidth,n?.maxWidth,o)}(a,t,r.dimensions,r.constrainToViewport,r.constrainOffset);a.style.width=`${n}px`,e.setAttribute("aria-valuenow",String(Math.round(n)))}if(null!==n){let e=function(e,t,n,a,i){let{maxHeight:o}=v(e,a,i);return b(t,n?.minHeight,n?.maxHeight,o)}(a,n,r.dimensions,r.constrainToViewport,r.constrainOffset);a.style.height=`${e}px`}}},h=e=>{if("button"in e&&0!==e.button)return;e.stopPropagation(),e.preventDefault();let t=r.rootRef.current;if(!t)return;let l="touches"in e?e.touches[0]:e;i=l.clientX,o=l.clientY;let s=t.getBoundingClientRect();d=s.width,u=s.height,a=!0,document.body.style.userSelect="none",document.body.style.webkitUserSelect="none",document.addEventListener("mousemove",p,{signal:n}),document.addEventListener("mouseup",f,{signal:n}),document.addEventListener("touchmove",p,{signal:n,passive:!1}),document.addEventListener("touchend",f,{signal:n})},p=e=>{if(!a)return;e.preventDefault();let t="touches"in e?e.touches[0]:e,n=t.clientX-i,r=t.clientY-o;m(s?d+n:null,c?u+r:null)},f=()=>{a&&(a=!1,document.body.style.userSelect="",document.body.style.webkitUserSelect="")};return e.addEventListener("mousedown",h,{signal:n}),e.addEventListener("touchstart",h,{signal:n,passive:!1}),e.addEventListener("keydown",e=>{let t=r.rootRef.current;if(!t)return;let n=t.getBoundingClientRect(),a=null,i=null;"ArrowRight"===e.key&&s?a=n.width+10:"ArrowLeft"===e.key&&s?a=n.width-10:"ArrowDown"===e.key&&c?i=n.height+10:"ArrowUp"===e.key&&c?i=n.height-10:"Home"===e.key?(s&&(a=r.dimensions?.minWidth??n.width),c&&(i=r.dimensions?.minHeight??n.height)):"End"===e.key&&(s&&(a=r.dimensions?.maxWidth??n.width),c&&(i=r.dimensions?.maxHeight??n.height)),(null!==a||null!==i)&&(e.preventDefault(),m(a,i))},{signal:n}),()=>{t.abort()}},[r.rootRef,r.dimensions,r.constrainToViewport,r.constrainOffset,s,c]),(0,f.jsx)(m.Box,{ref:(0,p.useMergedRef)(n,l),role:"separator","aria-label":"Resize window","aria-valuenow":r.dimensions?.initialWidth,"aria-valuemin":r.dimensions?.minWidth,"aria-valuemax":r.dimensions?.maxWidth,tabIndex:0,...i,style:[{touchAction:"none"},a],children:t})});x.displayName="@mantine/core/FloatingWindowResizeHandle";var y={root:"m_df020499"};function T(e={}){var t;let n,[a,i]=(0,h.useState)(null),o=(0,h.useRef)(null),r=(0,h.useRef)({x:0,y:0}),l=(0,h.useRef)({x:0,y:0}),[s,c]=(0,h.useState)(!1),d=(0,h.useRef)(!1),u=(0,h.useRef)(!1),m=(t=e.enabled,(n=(0,h.useRef)(t)).current=t,n),p=(0,h.useCallback)(e=>{c(e),d.current=e},[]),f=(0,h.useCallback)(e=>{e?(o.current=e,i(e)):(o.current=null,i(null))},[]);return(0,h.useEffect)(()=>{var t,n;let a,i,l,s,c,d,m,h,p,f,g,b=o.current;return!u.current&&b&&(u.current=!0,t=b,n=e,a=t.getBoundingClientRect(),i=n.constrainOffset??0,l=window.innerWidth,s=window.innerHeight,c=window.getComputedStyle(t),d=n.initialPosition?.top,m=n.initialPosition?.left,h=n.initialPosition?.right,p=n.initialPosition?.bottom,f=i,g=i,f=null!=m?m:null!=h?l-a.width-h:w(c.left)||l-a.width-w(c.right)||i,g=null!=d?d:null!=p?s-a.height-p:w(c.top)||s-a.height-w(c.bottom)||i,r.current=n.constrainToViewport?A(f,g,t,n.constrainOffset):{x:f,y:g},b.style.left=`${r.current.x}px`,b.style.top=`${r.current.y}px`,b.style.right="unset",b.style.bottom="unset"),()=>{u.current=!1}},[a,e.constrainOffset,e.initialPosition?.top,e.initialPosition?.left,e.initialPosition?.right,e.initialPosition?.bottom,e.constrainToViewport]),(0,h.useEffect)(()=>{let t=o.current;if(!t)return;let n=new AbortController,a=n.signal,i=n=>{var i,o,r;if(!1===m.current)return;let d="touches"in n?n.touches[0]:n;if("button"in n&&0!==n.button||(i=t,o=n.target,r=e,!(o instanceof Node&&(r.dragHandleSelector?Array.from(i.querySelectorAll(r.dragHandleSelector)).some(e=>e.contains(o)&&!D(o,r.excludeDragHandleSelector)):!D(o,r.excludeDragHandleSelector)))))return;p(!0),document.body.style.userSelect="none",document.body.style.webkitUserSelect="none";let u=t.getBoundingClientRect();l.current={x:d.clientX-u.left,y:d.clientY-u.top},e.onDragStart?.(),document.addEventListener("mousemove",s,{signal:a}),document.addEventListener("mouseup",c,{signal:a}),document.addEventListener("touchmove",s,{signal:a,passive:!1}),document.addEventListener("touchend",c,{signal:a})},s=n=>{if(!d.current)return;let a="touches"in n?n.touches[0]:n;n.preventDefault();let i=a.clientX-l.current.x,s=a.clientY-l.current.y,c=j(t,{x:i,y:s},e);"x"===e.axis?(i=c.x,s=r.current.y):(i="y"===e.axis?r.current.x:c.x,s=c.y),r.current={x:i,y:s},o.current&&(o.current.style.left=`${i}px`,o.current.style.top=`${s}px`),e.onPositionChange?.({x:i,y:s})},c=()=>{d.current&&(p(!1),document.body.style.userSelect="",document.body.style.webkitUserSelect="",e.onDragEnd?.())};return t.addEventListener("mousedown",i,{signal:a}),t.addEventListener("touchstart",i,{signal:a,passive:!1}),()=>{n.abort()}},[e.constrainToViewport,e.constrainOffset,e.dragHandleSelector,e.axis,e.onPositionChange,e.onDragStart,e.onDragEnd,e.initialPosition?.top,e.initialPosition?.left,e.initialPosition?.right,e.initialPosition?.bottom,a]),(0,h.useEffect)(()=>{let t=o.current;if(!t)return;let n=new ResizeObserver(()=>{let n=j(t,r.current,e);r.current=n,t.style.left=`${n.x}px`,t.style.top=`${n.y}px`});return n.observe(t),()=>{n.disconnect()}},[e.constrainToViewport,e.constrainOffset]),{ref:f,setPosition:(0,h.useCallback)(t=>{let n,a,i=o.current;if(!i)return;let l=e.constrainOffset??0,s=i.getBoundingClientRect();if(null!=t.left?n=t.left:null!=t.right&&(n=window.innerWidth-s.width-t.right),null!=t.top?a=t.top:null!=t.bottom&&(a=window.innerHeight-s.height-t.bottom),n=n??r.current.x,a=a??r.current.y,e.constrainToViewport){let e=A(n,a,i,l);n=e.x,a=e.y}r.current={x:n,y:a},i.style.left=`${n}px`,i.style.top=`${a}px`,e.onPositionChange?.({x:n,y:a})},[e.constrainToViewport,e.constrainOffset,e.onPositionChange]),isDragging:s}}function w(e){return e.endsWith("px")?parseFloat(e):0}function j(e,t,n){if(!n.constrainToViewport||!e)return t;let a=e.getBoundingClientRect(),i=n.constrainOffset??0,o=window.innerWidth-a.width-i,r=window.innerHeight-a.height-i;return{x:Math.min(Math.max(i,t.x),o),y:Math.min(Math.max(i,t.y),r)}}function D(e,t){return!!t&&e instanceof Element&&!!e.closest(t)}function A(e,t,n,a=0){let i=n.getBoundingClientRect(),o=window.innerWidth-i.width-a,r=window.innerHeight-i.height-a;return{x:Math.min(Math.max(a,e),o),y:Math.min(Math.max(a,t),r)}}e.s(["useFloatingWindow",0,T],378073);let S={constrainToViewport:!0,zIndex:(0,i.getDefaultZIndex)("overlay")};function C(e,t,n){let a=e;return null!=t&&(a=Math.max(a,t)),null!=n&&(a=Math.min(a,n)),a}let M=(0,l.factory)(e=>{let t=(0,o.useProps)("FloatingWindow",S,e),{classNames:n,className:a,style:i,styles:l,unstyled:u,vars:m,mod:g,enabled:b,constrainToViewport:v,constrainOffset:x,dragHandleSelector:w,excludeDragHandleSelector:j,axis:D,initialPosition:A,onPositionChange:M,onDragStart:k,onDragEnd:E,setPositionRef:I,withinPortal:P,portalProps:H,zIndex:V,dimensions:z,ref:R,...L}=t,B=(0,h.useRef)(null),O=(0,r.useStyles)({name:"FloatingWindow",classes:y,props:t,className:a,style:i,classNames:n,styles:l,unstyled:u,vars:m}),_=T({enabled:b,constrainToViewport:v,constrainOffset:x,dragHandleSelector:w,excludeDragHandleSelector:j,axis:D,initialPosition:A,onPositionChange:M,onDragStart:k,onDragEnd:E});(0,h.useImperativeHandle)(I,()=>_.setPosition,[_.setPosition]);let Y={"--floating-window-z-index":V.toString()};return z?.initialWidth!=null&&(Y["--floating-window-width"]=`${C(z.initialWidth,z.minWidth,z.maxWidth)}px`),z?.initialHeight!=null&&(Y["--floating-window-height"]=`${C(z.initialHeight,z.minHeight,z.maxHeight)}px`),(0,f.jsx)(d,{value:{rootRef:B,dimensions:z,constrainToViewport:v,constrainOffset:x},children:(0,f.jsx)(c.OptionalPortal,{withinPortal:P,...H,children:(0,f.jsx)(s.Paper,{ref:(0,p.useMergedRef)(R,_.ref,B),mod:[{dragging:_.isDragging},g],...O("root"),...L,__vars:Y})})})});M.displayName="@mantine/core/FloatingWindow",M.classes=y,M.ResizeHandle=x;var k=e.i(725695),E=e.i(883364),I=e.i(541772);let P={type:"code",component:function(){let[e,t]=(0,I.useDisclosure)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(n.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),e&&(0,f.jsxs)(M,{w:280,p:"md",withBorder:!0,excludeDragHandleSelector:"button",initialPosition:{top:300,left:20},style:{cursor:"move"},children:[(0,f.jsxs)(k.Group,{justify:"space-between",mb:"md",children:[(0,f.jsx)(E.Text,{children:"Usage demo"}),(0,f.jsx)(a.CloseButton,{onClick:t.close})]}),(0,f.jsx)(E.Text,{fz:"sm",children:"This is a floating window. You can drag it around."})]})]})},code:`
import { Button, CloseButton, FloatingWindow, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();

  return (
    <>
      <Button onClick={handlers.toggle} variant="default">
        {visible ? 'Hide' : 'Show'} floating window
      </Button>

      {visible && (
        <FloatingWindow
          w={280}
          p="md"
          withBorder
          excludeDragHandleSelector="button"
          initialPosition={{ top: 300, left: 20 }}
          style={{ cursor: 'move' }}
        >
          <Group justify="space-between" mb="md">
            <Text>Usage demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm">This is a floating window. You can drag it around.</Text>
        </FloatingWindow>
      )}
    </>
  );
}
`,centered:!0};var H=e.i(892791);let V={type:"code",component:function(){let[e,t]=(0,I.useDisclosure)(),[i,o]=(0,h.useState)("y");return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(k.Group,{children:[(0,f.jsxs)(n.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),(0,f.jsx)(H.SegmentedControl,{data:["x","y"],onChange:e=>o(e),value:i})]}),e&&(0,f.jsxs)(M,{w:280,p:"md",withBorder:!0,excludeDragHandleSelector:"button",initialPosition:{top:200,left:40},style:{cursor:"move"},axis:i,children:[(0,f.jsxs)(k.Group,{justify:"space-between",mb:"md",children:[(0,f.jsx)(E.Text,{children:"Axis demo"}),(0,f.jsx)(a.CloseButton,{onClick:t.close})]}),(0,f.jsx)(E.Text,{fz:"sm",children:"When you set axis prop, the floating window can be dragged only horizontally or vertically."})]})]})},code:`
import { Button, CloseButton, FloatingWindow, Group, SegmentedControl, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  const [axis, setAxis] = useState<'x' | 'y'>('y');

  return (
    <>
      <Group>
        <Button onClick={handlers.toggle} variant="default">
          {visible ? 'Hide' : 'Show'} floating window
        </Button>
        <SegmentedControl data={['x', 'y']} onChange={(val) => setAxis(val as 'x')} value={axis} />
      </Group>

      {visible && (
        <FloatingWindow
          w={280}
          p="md"
          withBorder
          excludeDragHandleSelector="button"
          initialPosition={{ top: 200, left: 40 }}
          style={{ cursor: 'move' }}
          axis={axis}
        >
          <Group justify="space-between" mb="md">
            <Text>Axis demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm">
            When you set axis prop, the floating window can be dragged only horizontally or
            vertically.
          </Text>
        </FloatingWindow>
      )}
    </>
  );
}
`,centered:!0},z={type:"code",component:function(){let[e,t]=(0,I.useDisclosure)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(n.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),e&&(0,f.jsxs)(M,{w:280,p:"md",withBorder:!0,excludeDragHandleSelector:"button",initialPosition:{top:300,left:20},style:{cursor:"move"},constrainToViewport:!1,children:[(0,f.jsxs)(k.Group,{justify:"space-between",mb:"md",children:[(0,f.jsx)(E.Text,{children:"No constrain demo"}),(0,f.jsx)(a.CloseButton,{onClick:t.close})]}),(0,f.jsx)(E.Text,{fz:"sm",children:"The floating window is not constrained by the viewport, it can move out of bounds."})]})]})},code:`
import { Button, CloseButton, FloatingWindow, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  return (
    <>
      <Button onClick={handlers.toggle} variant="default">
        {visible ? 'Hide' : 'Show'} floating window
      </Button>

      {visible && (
        <FloatingWindow
          w={280}
          p="md"
          withBorder
          excludeDragHandleSelector="button"
          initialPosition={{ top: 300, left: 20 }}
          style={{ cursor: 'move' }}
          constrainToViewport={false}
        >
          <Group justify="space-between" mb="md">
            <Text>No constrain demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm">
            The floating window is not constrained by the viewport, it can move out of bounds.
          </Text>
        </FloatingWindow>
      )}
    </>
  );
}
`,centered:!0},R={type:"code",component:function(){let[e,t]=(0,I.useDisclosure)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(n.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),e&&(0,f.jsxs)(M,{w:280,p:"md",withBorder:!0,excludeDragHandleSelector:"button",initialPosition:{top:300,left:30},style:{cursor:"move"},constrainToViewport:!0,constrainOffset:30,children:[(0,f.jsxs)(k.Group,{justify:"space-between",mb:"md",children:[(0,f.jsx)(E.Text,{children:"Constrain offset demo"}),(0,f.jsx)(a.CloseButton,{onClick:t.close})]}),(0,f.jsx)(E.Text,{fz:"sm",children:"This floating window has 30px offset, it cannot move closer that 30px to the edge of the viewport."})]})]})},code:`
import { Button, CloseButton, FloatingWindow, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();

  return (
    <>
      <Button onClick={handlers.toggle} variant="default">
        {visible ? 'Hide' : 'Show'} floating window
      </Button>

      {visible && (
        <FloatingWindow
          w={280}
          p="md"
          withBorder
          excludeDragHandleSelector="button"
          initialPosition={{ top: 300, left: 30 }}
          style={{ cursor: 'move' }}
          constrainToViewport
          constrainOffset={30}
        >
          <Group justify="space-between" mb="md">
            <Text>Constrain offset demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm">
            This floating window has 30px offset, it cannot move closer that 30px to the edge of the
            viewport.
          </Text>
        </FloatingWindow>
      )}
    </>
  );
}
`,centered:!0},L={type:"code",component:function(){let[e,t]=(0,I.useDisclosure)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(n.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),e&&(0,f.jsxs)(M,{w:280,withBorder:!0,dragHandleSelector:".drag-handle",excludeDragHandleSelector:"button",initialPosition:{top:300,left:20},children:[(0,f.jsxs)(k.Group,{justify:"space-between",px:"md",py:"sm",className:"drag-handle",style:{cursor:"move"},children:[(0,f.jsx)(E.Text,{children:"Drag handle demo"}),(0,f.jsx)(a.CloseButton,{onClick:t.close})]}),(0,f.jsx)(E.Text,{fz:"sm",px:"md",pb:"sm",children:"Drag floating window around with drag handle element."})]})]})},code:`
import { Button, CloseButton, FloatingWindow, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();

  return (
    <>
      <Button onClick={handlers.toggle} variant="default">
        {visible ? 'Hide' : 'Show'} floating window
      </Button>

      {visible && (
        <FloatingWindow
          w={280}
          withBorder
          dragHandleSelector=".drag-handle"
          excludeDragHandleSelector="button"
          initialPosition={{ top: 300, left: 20 }}
        >
          <Group
            justify="space-between"
            px="md"
            py="sm"
            className="drag-handle"
            style={{ cursor: 'move' }}
          >
            <Text>Drag handle demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm" px="md" pb="sm">
            Drag floating window around with drag handle element.
          </Text>
        </FloatingWindow>
      )}
    </>
  );
}
`,centered:!0};var B=e.i(653122);let O={type:"code",component:function(){let[e,t]=(0,I.useDisclosure)(),[i,o]=(0,h.useState)(!0);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(k.Group,{children:[(0,f.jsxs)(n.Button,{variant:"default",onClick:t.toggle,children:[e?"Hide":"Show"," floating window"]}),(0,f.jsxs)(B.Chip,{checked:i,onChange:()=>o(e=>!e),children:["Drag ",i?"enabled":"disabled"]})]}),e&&(0,f.jsxs)(M,{w:280,p:"md",withBorder:!0,excludeDragHandleSelector:"button",initialPosition:{top:300,left:20},style:{cursor:"move"},enabled:i,children:[(0,f.jsxs)(k.Group,{justify:"space-between",mb:"md",children:[(0,f.jsx)(E.Text,{children:"Enabled demo"}),(0,f.jsx)(a.CloseButton,{onClick:t.close})]}),(0,f.jsx)(E.Text,{fz:"sm",children:"This is a floating window. You can drag it around."})]})]})},code:`
import { Button, Chip, CloseButton, FloatingWindow, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  const [enabled, setEnabled] = useState(true);

  return (
    <>
      <Group>
        <Button variant="default" onClick={handlers.toggle}>
          {visible ? 'Hide' : 'Show'} floating window
        </Button>
        <Chip checked={enabled} onChange={() => setEnabled((e) => !e)}>
          Drag {enabled ? 'enabled' : 'disabled'}
        </Chip>
      </Group>

      {visible && (
        <FloatingWindow
          w={280}
          p="md"
          withBorder
          excludeDragHandleSelector="button"
          initialPosition={{ top: 300, left: 20 }}
          style={{ cursor: 'move' }}
          enabled={enabled}
        >
          <Group justify="space-between" mb="md">
            <Text>Enabled demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm">This is a floating window. You can drag it around.</Text>
        </FloatingWindow>
      )}
    </>
  );
}
`,centered:!0},_={type:"code",component:function(){let[e,t]=(0,I.useDisclosure)(),i=(0,h.useRef)(null);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(k.Group,{children:[(0,f.jsxs)(n.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),(0,f.jsx)(n.Button,{onClick:()=>{i.current?.({bottom:40,right:40})},variant:"default",children:"Set position to bottom right corner"})]}),e&&(0,f.jsxs)(M,{w:280,p:"md",withBorder:!0,excludeDragHandleSelector:"button",initialPosition:{top:300,left:20},style:{cursor:"move"},setPositionRef:i,children:[(0,f.jsxs)(k.Group,{justify:"space-between",mb:"md",children:[(0,f.jsx)(E.Text,{children:"Set position demo"}),(0,f.jsx)(a.CloseButton,{onClick:t.close})]}),(0,f.jsx)(E.Text,{fz:"sm",children:"You can control floating window position programmatically with setPositionRef."})]})]})},code:`
import { useRef } from 'react';
import { Button, CloseButton, FloatingWindow, Group, Text } from '@mantine/core';
import { SetFloatingWindowPosition, useDisclosure } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();
  const setPositionRef = useRef<SetFloatingWindowPosition | null>(null);
  const setPosition = () => {
    setPositionRef.current?.({ bottom: 40, right: 40 });
  };

  return (
    <>
      <Group>
        <Button onClick={handlers.toggle} variant="default">
          {visible ? 'Hide' : 'Show'} floating window
        </Button>
        <Button onClick={setPosition} variant="default">
          Set position to bottom right corner
        </Button>
      </Group>

      {visible && (
        <FloatingWindow
          w={280}
          p="md"
          withBorder
          excludeDragHandleSelector="button"
          initialPosition={{ top: 300, left: 20 }}
          style={{ cursor: 'move' }}
          setPositionRef={setPositionRef}
        >
          <Group justify="space-between" mb="md">
            <Text>Set position demo</Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm">
            You can control floating window position programmatically with setPositionRef.
          </Text>
        </FloatingWindow>
      )}
    </>
  );
}
`,centered:!0};var Y=e.i(171481);let F=new Map([["bold",h.createElement(h.Fragment,null,h.createElement("path",{d:"M216.49,136.49l-80,80a12,12,0,1,1-17-17l80-80a12,12,0,1,1,17,17Zm-16-105a12,12,0,0,0-17,0l-152,152a12,12,0,0,0,17,17l152-152A12,12,0,0,0,200.49,31.51Z"}))],["duotone",h.createElement(h.Fragment,null,h.createElement("path",{d:"M192,40V192H40Z",opacity:"0.2"}),h.createElement("path",{d:"M195.06,32.61a8,8,0,0,0-8.72,1.73l-152,152A8,8,0,0,0,40,200H192a8,8,0,0,0,8-8V40A8,8,0,0,0,195.06,32.61ZM184,184H59.31L184,59.31Z"}))],["fill",h.createElement(h.Fragment,null,h.createElement("path",{d:"M200,40V192a8,8,0,0,1-8,8H40a8,8,0,0,1-5.66-13.66l152-152A8,8,0,0,1,200,40Z"}))],["light",h.createElement(h.Fragment,null,h.createElement("path",{d:"M212.24,132.24l-80,80a6,6,0,1,1-8.48-8.48l80-80a6,6,0,1,1,8.48,8.48Zm-16-96.48a6,6,0,0,0-8.48,0l-152,152a6,6,0,1,0,8.48,8.48l152-152A6,6,0,0,0,196.24,35.76Z"}))],["regular",h.createElement(h.Fragment,null,h.createElement("path",{d:"M213.66,133.66l-80,80a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,11.32Zm-16-99.32a8,8,0,0,0-11.32,0l-152,152a8,8,0,0,0,11.32,11.32l152-152A8,8,0,0,0,197.66,34.34Z"}))],["thin",h.createElement(h.Fragment,null,h.createElement("path",{d:"M210.83,130.83l-80,80a4,4,0,1,1-5.66-5.66l80-80a4,4,0,1,1,5.66,5.66Zm-16-93.66a4,4,0,0,0-5.66,0l-152,152a4,4,0,0,0,5.66,5.66l152-152A4,4,0,0,0,194.83,37.17Z"}))]]),Z=h.forwardRef((e,t)=>h.createElement(Y.default,{ref:t,...e,weights:F}));Z.displayName="NotchesIcon";let N={type:"code",component:function(){let[e,t]=(0,I.useDisclosure)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(n.Button,{onClick:t.toggle,variant:"default",children:[e?"Hide":"Show"," floating window"]}),e&&(0,f.jsxs)(M,{withBorder:!0,constrainOffset:40,dimensions:{initialWidth:260,maxWidth:500,minWidth:180,initialHeight:260,maxHeight:400,minHeight:220},dragHandleSelector:".drag-handle",excludeDragHandleSelector:"button",initialPosition:{top:300,left:60},style:{overflow:"hidden"},children:[(0,f.jsxs)(k.Group,{justify:"space-between",px:"md",py:"sm",className:"drag-handle",style:{cursor:"move"},children:[(0,f.jsx)(E.Text,{fw:500,fz:"sm",children:"Resize demo"}),(0,f.jsx)(a.CloseButton,{onClick:t.close})]}),(0,f.jsx)(E.Text,{fz:"sm",px:"md",pb:"sm",children:"Drag the grip icon in the bottom-right corner to resize. Use Arrow keys when the handle is focused: Left/Right for width, Up/Down for height."}),(0,f.jsx)(M.ResizeHandle,{"aria-label":"Resize floating window",style:{position:"absolute",right:0,bottom:0,width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center",cursor:"nwse-resize"},children:(0,f.jsx)(Z,{size:14,style:{opacity:.5}})})]})]})},code:`
import { NotchesIcon } from '@phosphor-icons/react';
import { Button, CloseButton, FloatingWindow, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [visible, handlers] = useDisclosure();

  return (
    <>
      <Button onClick={handlers.toggle} variant="default">
        {visible ? 'Hide' : 'Show'} floating window
      </Button>

      {visible && (
        <FloatingWindow
          withBorder
          constrainOffset={40}
          dimensions={{
            initialWidth: 260,
            maxWidth: 500,
            minWidth: 180,
            initialHeight: 260,
            maxHeight: 400,
            minHeight: 220,
          }}
          dragHandleSelector=".drag-handle"
          excludeDragHandleSelector="button"
          initialPosition={{ top: 300, left: 60 }}
          style={{ overflow: 'hidden' }}
        >
          <Group
            justify="space-between"
            px="md"
            py="sm"
            className="drag-handle"
            style={{ cursor: 'move' }}
          >
            <Text fw={500} fz="sm">
              Resize demo
            </Text>
            <CloseButton onClick={handlers.close} />
          </Group>
          <Text fz="sm" px="md" pb="sm">
            Drag the grip icon in the bottom-right corner to resize.
            Use Arrow keys when the handle is focused:
            Left/Right for width, Up/Down for height.
          </Text>
          <FloatingWindow.ResizeHandle
            aria-label="Resize floating window"
            style={{
              position: 'absolute',
              right: 0,
              bottom: 0,
              width: 20,
              height: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'nwse-resize',
            }}
          >
            <NotchesIcon size={14} style={{ opacity: 0.5 }} />
          </FloatingWindow.ResizeHandle>
        </FloatingWindow>
      )}
    </>
  );
}
`,centered:!0};var W=(0,t.__exportAll)({axis:()=>V,constrainOffset:()=>R,constrainToViewport:()=>z,dragHandleSelector:()=>L,enabled:()=>O,resizeHandle:()=>N,setPosition:()=>_,usage:()=>P});e.s(["FloatingWindowDemos",0,W],119764)},803451,e=>{"use strict";var t=e.i(648863);let n=[{value:1e5,color:"red.8",label:"Poor"},{value:2e5,color:"yellow.8",label:"Average"},{value:3e5,color:"teal.8",label:"Good"}],a=`export const ranges = ${JSON.stringify(n,null,2)};`;var i=e.i(391398),o={root:"m_f1b033",label:"m_1ce939c3",trackWrapper:"m_dcd57f19",track:"m_1d61ac1a",range:"m_1d3df40c",bar:"m_8499ea2",target:"m_8dec10a2",rangeLabel:"m_18314248",barLabel:"m_73d6c572",targetLabel:"m_abeb9372"},r=e.i(232471),l=e.i(431868),s=e.i(481178),c=e.i(275519),d=e.i(317477),u=e.i(779177),m=e.i(951254),h=e.i(44091),p=e.i(391466);let f={orientation:"horizontal",size:32,barSize:16,targetRatio:.7,targetSize:2,withTooltip:!1},g=(0,s.createVarsResolver)((e,{size:t,barSize:n})=>({root:{"--bullet-size":(0,u.rem)(t),"--bullet-bar-size":(0,u.rem)(n)}})),b=(0,c.factory)(e=>{let t,n=(0,h.useProps)("BulletChart",f,e),{classNames:a,className:s,style:c,styles:b,unstyled:v,vars:x,attributes:y,value:T,target:w,ranges:j,orientation:D,label:A,valueFormatter:S,barColor:C,targetColor:M,size:k,barSize:E,targetRatio:I,targetSize:P,withTooltip:H,getTooltipLabel:V,variant:z,...R}=n,L=(0,m.useMantineTheme)(),B=(0,p.useStyles)({name:"BulletChart",classes:o,props:n,className:s,style:c,classNames:a,styles:b,unstyled:v,attributes:y,vars:x,varsResolver:g}),O="vertical"===D,_=Math.max(...j.map(e=>e.value),0),Y=e=>S?S(e):e.toString(),F=e=>_>0?Math.max(0,Math.min(e/_*100,100)):0,Z=C?(0,d.getThemeColor)(C,L):"var(--mantine-color-white)",N=M?(0,d.getThemeColor)(M,L):void 0,W=[...j].sort((e,t)=>t.value-e.value),$=W.map((e,t)=>{let n=F(e.value),a=O?{height:`${n}%`,bottom:0}:{width:`${n}%`};return(0,i.jsx)("div",{...B("range",{style:{...a,backgroundColor:(0,d.getThemeColor)(e.color,L)}})},t)}),G=W.map((e,t)=>{let n=F(e.value),a=O?{bottom:`${n}%`}:{left:`${n}%`};return(0,i.jsx)("div",{...B("rangeLabel",{style:a}),children:Y(e.value)},t)}),U=F(T),q=(0,i.jsx)("div",{...B("bar",{style:{...O?{height:`${U}%`,bottom:0}:{width:`${U}%`},backgroundColor:Z}})}),K=(0,i.jsx)("div",{...B("barLabel",{style:O?{bottom:`${U}%`}:{left:`${U}%`}}),children:Y(T)}),J=null!=w?F(w):0,X=null!=w?(0,i.jsx)("div",{...B("target",{style:O?{bottom:`${J}%`,width:`${100*I}%`,height:(0,u.rem)(P),backgroundColor:N}:{left:`${J}%`,height:`${100*I}%`,width:(0,u.rem)(P),backgroundColor:N}})}):null,Q=null!=w?(0,i.jsx)("div",{...B("targetLabel",{style:O?{bottom:`${J}%`}:{left:`${J}%`}}),children:Y(w)}):null,ee=V?V({value:T,target:w}):(t=[`Value: ${Y(T)}`],null!=w&&t.push(`Target: ${Y(w)}`),t.join(" / ")),et=(0,i.jsxs)("div",{...B("trackWrapper"),"data-orientation":D,children:[G,Q,(0,i.jsxs)("div",{...B("track"),"data-orientation":D,children:[$,q,X]}),K]});return(0,i.jsxs)(r.Box,{...B("root"),variant:z,mod:{orientation:D},...R,children:[A&&(0,i.jsx)("div",{...B("label"),children:A}),H?(0,i.jsx)(l.Tooltip,{label:ee,position:O?"right":"top",children:et}):et]})});b.displayName="@mantine/charts/BulletChart",b.classes=o,b.varsResolver=g;let v={type:"code",centered:!0,maxWidth:400,component:function(){return(0,i.jsx)(b,{value:23e4,target:15e4,ranges:n,valueFormatter:e=>`$${(e/1e3).toFixed(0)}k`})},code:[{fileName:"Demo.tsx",code:`
import { BulletChart } from '@mantine/charts';
import { ranges } from './data';

function Demo() {
  return (
    <BulletChart
      value={230000}
      target={150000}
      ranges={ranges}
      valueFormatter={(value) => \`$\${(value / 1000).toFixed(0)}k\`}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]},x={type:"code",centered:!0,maxWidth:400,component:function(){return(0,i.jsx)(b,{value:23e4,target:15e4,ranges:n,label:"Revenue",valueFormatter:e=>`$${(e/1e3).toFixed(0)}k`})},code:[{fileName:"Demo.tsx",code:`
import { BulletChart } from '@mantine/charts';
import { ranges } from './data';

function Demo() {
  return (
    <BulletChart
      value={230000}
      target={150000}
      ranges={ranges}
      label="Revenue"
      valueFormatter={(value) => \`$\${(value / 1000).toFixed(0)}k\`}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]},y={type:"code",centered:!0,maxWidth:400,component:function(){return(0,i.jsx)(b,{value:23e4,target:15e4,ranges:n,orientation:"vertical",valueFormatter:e=>`$${(e/1e3).toFixed(0)}k`,h:250})},code:[{fileName:"Demo.tsx",code:`
import { BulletChart } from '@mantine/charts';
import { ranges } from './data';

function Demo() {
  return (
    <BulletChart
      value={230000}
      target={150000}
      ranges={ranges}
      orientation="vertical"
      valueFormatter={(value) => \`$\${(value / 1000).toFixed(0)}k\`}
      h={250}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]},T={type:"code",centered:!0,maxWidth:400,component:function(){return(0,i.jsx)(b,{value:23e4,target:15e4,ranges:n,barColor:"black",targetColor:"white",valueFormatter:e=>`$${(e/1e3).toFixed(0)}k`})},code:[{fileName:"Demo.tsx",code:`
import { BulletChart } from '@mantine/charts';
import { ranges } from './data';

function Demo() {
  return (
    <BulletChart
      value={230000}
      target={150000}
      ranges={ranges}
      barColor="black"
      targetColor="white"
      valueFormatter={(value) => \`$\${(value / 1000).toFixed(0)}k\`}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]};var w=e.i(671640);let j={type:"code",centered:!0,maxWidth:400,component:function(){return(0,i.jsxs)(w.Stack,{children:[(0,i.jsx)(b,{value:23e4,target:15e4,ranges:n,size:20,label:"Small",valueFormatter:e=>`$${(e/1e3).toFixed(0)}k`}),(0,i.jsx)(b,{value:23e4,target:15e4,ranges:n,size:32,label:"Default",valueFormatter:e=>`$${(e/1e3).toFixed(0)}k`}),(0,i.jsx)(b,{value:23e4,target:15e4,ranges:n,size:48,label:"Large",valueFormatter:e=>`$${(e/1e3).toFixed(0)}k`})]})},code:[{fileName:"Demo.tsx",code:`
import { BulletChart } from '@mantine/charts';
import { Stack } from '@mantine/core';
import { ranges } from './data';

function Demo() {
  return (
    <Stack>
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        size={20}
        label="Small"
        valueFormatter={(value) => \`$\${(value / 1000).toFixed(0)}k\`}
      />
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        size={32}
        label="Default"
        valueFormatter={(value) => \`$\${(value / 1000).toFixed(0)}k\`}
      />
      <BulletChart
        value={230000}
        target={150000}
        ranges={ranges}
        size={48}
        label="Large"
        valueFormatter={(value) => \`$\${(value / 1000).toFixed(0)}k\`}
      />
    </Stack>
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]},D={type:"code",centered:!0,maxWidth:400,component:function(){return(0,i.jsx)(b,{value:23e4,target:15e4,ranges:n,withTooltip:!0,valueFormatter:e=>`$${(e/1e3).toFixed(0)}k`})},code:[{fileName:"Demo.tsx",code:`
import { BulletChart } from '@mantine/charts';
import { ranges } from './data';

function Demo() {
  return (
    <BulletChart
      value={230000}
      target={150000}
      ranges={ranges}
      withTooltip
      valueFormatter={(value) => \`$\${(value / 1000).toFixed(0)}k\`}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]},A={type:"code",centered:!0,maxWidth:400,component:function(){return(0,i.jsx)(b,{value:23e4,ranges:n,valueFormatter:e=>`$${(e/1e3).toFixed(0)}k`})},code:[{fileName:"Demo.tsx",code:`
import { BulletChart } from '@mantine/charts';
import { ranges } from './data';

function Demo() {
  return (
    <BulletChart
      value={230000}
      ranges={ranges}
      valueFormatter={(value) => \`$\${(value / 1000).toFixed(0)}k\`}
    />
  );
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]};var S=(0,t.__exportAll)({barColor:()=>T,barSize:()=>j,label:()=>x,noTarget:()=>A,usage:()=>v,valueFormatter:()=>D,vertical:()=>y});e.s(["BulletChartDemos",0,S],803451)},280958,e=>{"use strict";var t=e.i(648863);let n=[{name:"Analytics",value:100,color:"pink.6"},{name:"DevOps",color:"grape.6",children:[{name:"Docker",value:80},{name:"Kubernetes",value:50}]},{name:"Backend",color:"teal.6",children:[{name:"Node",value:150},{name:"Python",children:[{name:"Django",value:110},{name:"FastAPI",value:60}]},{name:"Go",value:50}]},{name:"Frontend",color:"blue.6",children:[{name:"React",children:[{name:"Frameworks",children:[{name:"Next.js",value:150},{name:"Remix",value:40}]},{name:"CRA",value:20}]},{name:"Vue",value:90},{name:"Svelte",value:30}]}],a=`
export const data = [
  { name: 'Analytics', value: 100, color: 'pink.6' },
  {
    name: 'DevOps',
    color: 'grape.6',
    children: [
      { name: 'Docker', value: 80 },
      { name: 'Kubernetes', value: 50 },
    ],
  },
  {
    name: 'Backend',
    color: 'teal.6',
    children: [
      { name: 'Node', value: 150 },
      {
        name: 'Python',
        children: [
          { name: 'Django', value: 110 },
          { name: 'FastAPI', value: 60 },
        ],
      },
      { name: 'Go', value: 50 },
    ],
  },
  {
    name: 'Frontend',
    color: 'blue.6',
    children: [
      {
        name: 'React',
        children: [
          {
            name: 'Frameworks',
            children: [
              { name: 'Next.js', value: 150 },
              { name: 'Remix', value: 40 },
            ],
          },
          { name: 'CRA', value: 20 },
        ],
      },
      { name: 'Vue', value: 90 },
      { name: 'Svelte', value: 30 },
    ],
  },
];
`;var i=e.i(391398),o=e.i(520916),r={root:"m_a73eff05"},l=e.i(232471),s=e.i(481178),c=e.i(275519),d=e.i(317477),u=e.i(670989),m=e.i(779177),h=e.i(951254),p=e.i(44091),f=e.i(62904),g=e.i(391466),b=e.i(723451),v=e.i(191788),x=e.i(762362),x=x,y=e.i(56206),T=e.i(449691),w=e.i(777541),j=e.i(815954),D=e.i(896915),A=e.i(61320),S=e.i(193555),C=e.i(901841),M=e.i(492900),k=e.i(458985),E=e.i(134518),I=e.i(128002),P=e.i(546189),H=e.i(451494),V=e.i(543372),z=e.i(768069),R=e.i(297974),L=e.i(560894);function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=Array(t);n<t;n++)a[n]=e[n];return a}function O(){return(O=Object.assign.bind()).apply(null,arguments)}function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach(function(t){var a,i,o;a=e,i=t,o=n[t],(i=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(i))in a?Object.defineProperty(a,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[i]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var F=v.memo(e=>{var t=e.dataKey,n=e.nameKey,a=e.data,i=e.stroke,o=e.fill,r=e.positions,l=e.id,s={dataDefinedOnItem:a.children,getPosition:e=>r.get(e),settings:{stroke:i,strokeWidth:void 0,fill:o,nameKey:n,dataKey:t,name:n?void 0:t,hide:!1,type:void 0,color:o,unit:"",graphicalItemId:l}};return v.createElement(I.SetTooltipEntrySettings,{tooltipEntrySettings:s})}),Z={top:0,right:0,bottom:0,left:0},N=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"".concat(t,"children[").concat(e,"]")},W={options:{validateTooltipEventTypes:["item"],defaultTooltipEventType:"item",chartName:"Sunburst",tooltipPayloadSearcher:(e,t)=>{if(null!=t)return(0,T.default)(e,t)},eventEmitter:void 0}},$=Y({padding:2,dataKey:"value",nameKey:"name",ringPadding:2,innerRadius:50,fill:"#333",stroke:"#FFF",textOptions:{fontWeight:"bold",paintOrder:"stroke fill",fontSize:".75rem",stroke:"#FFF",fill:"black",pointerEvents:"none"},startAngle:0,endAngle:360,responsive:!1},L.initialEventSettingsState),G=e=>{var t=e.className,n=e.data,a=e.children,i=e.padding,o=e.dataKey,r=e.nameKey,l=e.ringPadding,s=e.innerRadius,c=e.fill,d=e.stroke,u=e.textOptions,m=e.outerRadius,h=e.cx,p=e.cy,f=e.startAngle,g=e.endAngle,b=e.onClick,T=e.onMouseEnter,M=e.onMouseLeave,k=e.id,I=(0,V.useAppDispatch)(),P=(0,C.useChartWidth)(),H=(0,C.useChartHeight)();if(null==P||null==H)return null;var z=null!=m?m:Math.min(P,H)/2,R=null!=h?h:P/2,L=null!=p?p:H/2,B=(0,x.default)([0,n[o]],[0,g]),_=function e(t){return t.children&&0!==t.children.length?1+Math.max(...t.children.map(t=>e(t))):1}(n),Z=[],W=new Map([]);!function e(t,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=n.radius,s=n.innerR,m=n.initialAngle,h=n.childColor,p=n.nestedActiveTooltipIndex,f=m;t&&t.forEach((t,n)=>{var m,g,x=1===a?"[".concat(n,"]"):N(n,p),y=Y(Y({},t),{},{tooltipIndex:x}),w=B(t[o]),j=f,C=null!=(m=null!=(g=null==t?void 0:t.fill)?g:h)?m:c,P=(0,S.polarToCartesian)(0,0,s+r/2,-(j+w-w/2)),H=P.x,V=P.y;f+=w,Z.push(v.createElement("g",{key:"sunburst-sector-".concat(t.name,"-").concat(n)},v.createElement(D.Sector,{onClick:()=>{b&&b(y),I((0,E.setActiveClickItemIndex)({activeIndex:y.tooltipIndex,activeDataKey:o,activeCoordinate:W.get(y.name),activeGraphicalItemId:k}))},onMouseEnter:e=>{T&&T(y,e),I((0,E.setActiveMouseOverItemIndex)({activeIndex:y.tooltipIndex,activeDataKey:o,activeCoordinate:W.get(y.name),activeGraphicalItemId:k}))},onMouseLeave:e=>{M&&M(y,e),I((0,E.mouseLeaveItem)())},fill:C,stroke:d,strokeWidth:i,startAngle:j,endAngle:j+w,innerRadius:s,outerRadius:s+r,cx:R,cy:L}),v.createElement(A.Text,O({},u,{alignmentBaseline:"middle",textAnchor:"middle",x:H+R,y:L-V}),t[o])));var z=(0,S.polarToCartesian)(R,L,s+r/2,j),_=z.x,F=z.y;return W.set(t.name,{x:_,y:F}),e(t.children,{radius:r,innerR:s+r+l,initialAngle:j,childColor:C,nestedActiveTooltipIndex:x},a+1)})}(n.children,{radius:(z-s)/_,innerR:s,initialAngle:f});var $=(0,y.clsx)("recharts-sunburst",t);return v.createElement(w.Surface,{width:P,height:H},v.createElement(j.Layer,{className:$},Z),v.createElement(F,{dataKey:o,nameKey:r,data:n,stroke:d,fill:c,positions:W,id:k}),a)},U=e=>{var t,n=(0,R.resolveDefaultProps)(e,$),a=n.className,i=n.width,o=n.height,r=n.responsive,l=n.style,s=n.id,c=n.throttleDelay,d=n.throttledEvents,u=function(e){if(Array.isArray(e))return e}(t=(0,v.useState)(null))||function(e){var t=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,a,i,o,r=[],l=!0,s=!1;try{i=(t=t.call(e)).next,!1;for(;!(l=(n=i.call(t)).done)&&(r.push(n.value),2!==r.length);l=!0);}catch(e){s=!0,a=e}finally{try{if(!l&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(s)throw a}}return r}}(t)||function(e){if(e){if("string"==typeof e)return B(e,2);var t=({}).toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?B(e,2):void 0}}(t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),m=u[0],h=u[1];return v.createElement(P.RechartsStoreProvider,{preloadedState:W,reduxStoreName:null!=a?a:"SunburstChart"},v.createElement(C.ReportChartSize,{width:i,height:o}),v.createElement(C.ReportChartMargin,{margin:Z}),v.createElement(H.ReportEventSettings,{throttleDelay:c,throttledEvents:d}),v.createElement(M.TooltipPortalContext.Provider,{value:m},v.createElement(k.RechartsWrapper,{className:a,width:i,height:o,responsive:r,style:l,ref:e=>{null==m&&null!=e&&h(e)},onMouseEnter:void 0,onMouseLeave:void 0,onClick:void 0,onMouseMove:void 0,onMouseDown:void 0,onMouseUp:void 0,onContextMenu:void 0,onDoubleClick:void 0,onTouchStart:void 0,onTouchMove:void 0,onTouchEnd:void 0},v.createElement(z.RegisterGraphicalItemId,{id:s,type:"sunburst"},e=>v.createElement(G,O({},n,{id:e}))))))},q=e.i(694713);let K={dataKey:"value",withTooltip:!0,tooltipAnimationDuration:0,size:300,innerRadius:50,gap:1,startAngle:0,endAngle:360},J=(0,s.createVarsResolver)((e,{strokeColor:t,size:n})=>({root:{"--chart-stroke-color":t?(0,d.getThemeColor)(t,e):void 0,"--chart-size":(0,m.rem)(n)}})),X=(0,c.factory)(e=>{let t=(0,p.useProps)("SunburstChart",K,e),{classNames:n,className:a,style:s,styles:c,unstyled:d,vars:m,data:x,dataKey:y,withTooltip:T,tooltipAnimationDuration:w,tooltipProps:j,sunburstChartProps:D,strokeColor:A,size:S,innerRadius:C,gap:M,startAngle:k,endAngle:E,withLabels:I,valueFormatter:P,children:H,attributes:V,...z}=t,R=(0,h.useMantineTheme)(),L=(0,g.useStyles)({name:"SunburstChart",classes:r,props:t,className:a,style:s,classNames:n,styles:c,unstyled:d,attributes:V,vars:m,varsResolver:J}),{resolvedClassNames:B,resolvedStyles:O}=(0,f.useResolvedStylesApi)({classNames:n,styles:c,props:t}),_=(0,v.useMemo)(()=>{let{resolved:e,total:t}=function e(t,n,a,i){let o=0;return{resolved:t.map(t=>{let r=(t.color?(0,u.parseThemeColor)({color:t.color,theme:n}).value:i)||void 0,l={...t,fill:r};if(t.children){let i=e(t.children,n,a,r);l.children=i.resolved,null==l[a]&&(l[a]=i.total),o+=i.total}else o+=Number(t[a])||0;return l}),total:o}}(x,R,y);return{name:"root",[y]:t,children:e}},[x,R,y]);return(0,i.jsx)(l.Box,{size:S,...L("root"),...z,children:(0,i.jsx)(b.ResponsiveContainer,{children:(0,i.jsxs)(U,{data:_,dataKey:y,innerRadius:C,padding:M,ringPadding:0,startAngle:k,endAngle:E,stroke:"var(--chart-stroke-color, var(--mantine-color-body))",textOptions:I?{fontWeight:"bold",fontSize:".65rem",paintOrder:"stroke fill",stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:1,fill:"var(--mantine-color-bright)",pointerEvents:"none"}:{display:"none"},...D,children:[T&&(0,i.jsx)(q.Tooltip,{animationDuration:w,isAnimationActive:!1,content:({payload:e})=>(0,i.jsx)(o.ChartTooltip,{payload:e?.map(e=>({name:e.name,value:e.value,color:e.payload?.fill||"var(--mantine-color-blue-6)"}))||[],classNames:B,styles:O,type:"radial",valueFormatter:P,attributes:V}),...j}),H]})})})});X.displayName="@mantine/charts/SunburstChart",X.classes=r,X.varsResolver=J;let Q={type:"code",component:function(){return(0,i.jsx)(X,{data:n})},centered:!0,code:[{code:`
import { SunburstChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SunburstChart data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:a,language:"tsx",fileName:"data.ts"}]},ee=[{name:"Sales",value:500,color:"violet.6"},{name:"Marketing",value:300,color:"grape.6"},{name:"Engineering",value:400,color:"pink.6"},{name:"Support",value:200,color:"red.6"}],et={type:"code",component:function(){return(0,i.jsx)(X,{data:ee})},centered:!0,code:`
import { SunburstChart } from '@mantine/charts';

const data = [
  { name: 'Sales', value: 500, color: 'violet.6' },
  { name: 'Marketing', value: 300, color: 'grape.6' },
  { name: 'Engineering', value: 400, color: 'pink.6' },
  { name: 'Support', value: 200, color: 'red.6' },
];

function Demo() {
  return <SunburstChart data={data} />;
}
`},en={type:"code",component:function(){return(0,i.jsx)(X,{data:n,withTooltip:!1})},centered:!0,code:[{code:`
import { SunburstChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SunburstChart data={data} withTooltip={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:a,language:"tsx",fileName:"data.ts"}]},ea={type:"code",component:function(){return(0,i.jsx)(X,{data:n,strokeColor:"gray.3"})},centered:!0,code:[{code:`
import { SunburstChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SunburstChart data={data} strokeColor="gray.3" />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:a,language:"tsx",fileName:"data.ts"}]},ei={type:"code",component:function(){return(0,i.jsx)(X,{data:n,size:400})},centered:!0,code:[{code:`
import { SunburstChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SunburstChart data={data} size={400} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:a,language:"tsx",fileName:"data.ts"}]},eo={type:"configurator",component:function(e){return(0,i.jsx)(X,{data:n,...e})},centered:!0,code:[{fileName:"Demo.tsx",code:`
import { SunburstChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SunburstChart data={data} {{props}} />;
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}],controls:[{type:"number",prop:"gap",min:0,max:10,step:1,initialValue:1,libraryValue:"__"}]},er={type:"code",component:function(){return(0,i.jsx)(X,{data:n,withLabels:!0,size:400})},centered:!0,code:[{fileName:"Demo.tsx",code:`
import { SunburstChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <SunburstChart data={data} withLabels size={400} />;
}
`,language:"tsx"},{fileName:"data.ts",code:a,language:"tsx"}]};var el=(0,t.__exportAll)({color:()=>et,gap:()=>eo,noTooltip:()=>en,size:()=>ei,strokeColor:()=>ea,usage:()=>Q,withLabels:()=>er});e.s(["SunburstChartDemos",0,el],280958)},380272,e=>{"use strict";var t=e.i(648863),n=e.i(191788),a=e.i(171481);let i=new Map([["bold",n.createElement(n.Fragment,null,n.createElement("path",{d:"M120,128a16,16,0,1,1-16-16A16,16,0,0,1,120,128Zm32-16a16,16,0,1,0,16,16A16,16,0,0,0,152,112Zm84,16A108,108,0,0,1,78.77,224.15L46.34,235A20,20,0,0,1,21,209.66l10.81-32.43A108,108,0,1,1,236,128Zm-24,0A84,84,0,1,0,55.27,170.06a12,12,0,0,1,1,9.81l-9.93,29.79,29.79-9.93a12.1,12.1,0,0,1,3.8-.62,12,12,0,0,1,6,1.62A84,84,0,0,0,212,128Z"}))],["duotone",n.createElement(n.Fragment,null,n.createElement("path",{d:"M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z",opacity:"0.2"}),n.createElement("path",{d:"M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-4-1.08,7.85,7.85,0,0,0-2.53.42L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Zm12-88a12,12,0,1,1-12-12A12,12,0,0,1,140,128Zm-44,0a12,12,0,1,1-12-12A12,12,0,0,1,96,128Zm88,0a12,12,0,1,1-12-12A12,12,0,0,1,184,128Z"}))],["fill",n.createElement(n.Fragment,null,n.createElement("path",{d:"M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24ZM84,140a12,12,0,1,1,12-12A12,12,0,0,1,84,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,172,140Z"}))],["light",n.createElement(n.Fragment,null,n.createElement("path",{d:"M138,128a10,10,0,1,1-10-10A10,10,0,0,1,138,128ZM84,118a10,10,0,1,0,10,10A10,10,0,0,0,84,118Zm88,0a10,10,0,1,0,10,10A10,10,0,0,0,172,118Zm58,10A102,102,0,0,1,79.31,217.65L44.44,229.27a14,14,0,0,1-17.71-17.71l11.62-34.87A102,102,0,1,1,230,128Zm-12,0A90,90,0,1,0,50.08,173.06a6,6,0,0,1,.5,4.91L38.12,215.35a2,2,0,0,0,2.53,2.53L78,205.42a6.2,6.2,0,0,1,1.9-.31,6.09,6.09,0,0,1,3,.81A90,90,0,0,0,218,128Z"}))],["regular",n.createElement(n.Fragment,null,n.createElement("path",{d:"M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z"}))],["thin",n.createElement(n.Fragment,null,n.createElement("path",{d:"M136,128a8,8,0,1,1-8-8A8,8,0,0,1,136,128Zm-52-8a8,8,0,1,0,8,8A8,8,0,0,0,84,120Zm88,0a8,8,0,1,0,8,8A8,8,0,0,0,172,120Zm56,8A100,100,0,0,1,79.5,215.47l-35.69,11.9a12,12,0,0,1-15.18-15.18l11.9-35.69A100,100,0,1,1,228,128Zm-8,0A92,92,0,1,0,48.35,174.07a4,4,0,0,1,.33,3.27L36.22,214.72a4,4,0,0,0,5.06,5.06l37.38-12.46a3.93,3.93,0,0,1,1.27-.21,4.05,4.05,0,0,1,2,.54A92,92,0,0,0,220,128Z"}))]]),o=n.forwardRef((e,t)=>n.createElement(a.default,{ref:t,...e,weights:i}));o.displayName="ChatCircleDotsIcon";let r=new Map([["bold",n.createElement(n.Fragment,null,n.createElement("path",{d:"M236,64a36,36,0,1,0-48,33.94V112a4,4,0,0,1-4,4H96a27.8,27.8,0,0,0-4,.29V97.94a36,36,0,1,0-24,0v60.12a36,36,0,1,0,24,0V144a4,4,0,0,1,4-4h88a28,28,0,0,0,28-28V97.94A36.07,36.07,0,0,0,236,64ZM80,52A12,12,0,1,1,68,64,12,12,0,0,1,80,52Zm0,152a12,12,0,1,1,12-12A12,12,0,0,1,80,204ZM200,76a12,12,0,1,1,12-12A12,12,0,0,1,200,76Z"}))],["duotone",n.createElement(n.Fragment,null,n.createElement("path",{d:"M224,64a24,24,0,1,1-24-24A24,24,0,0,1,224,64Z",opacity:"0.2"}),n.createElement("path",{d:"M232,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H96a23.84,23.84,0,0,0-8,1.38V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0V144a8,8,0,0,1,8-8h88a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,232,64ZM64,64A16,16,0,1,1,80,80,16,16,0,0,1,64,64ZM96,192a16,16,0,1,1-16-16A16,16,0,0,1,96,192ZM200,80a16,16,0,1,1,16-16A16,16,0,0,1,200,80Z"}))],["fill",n.createElement(n.Fragment,null,n.createElement("path",{d:"M232,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H96a23.84,23.84,0,0,0-8,1.38V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0V144a8,8,0,0,1,8-8h88a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,232,64ZM64,64A16,16,0,1,1,80,80,16,16,0,0,1,64,64ZM96,192a16,16,0,1,1-16-16A16,16,0,0,1,96,192Z"}))],["light",n.createElement(n.Fragment,null,n.createElement("path",{d:"M230,64a30,30,0,1,0-36,29.4V112a10,10,0,0,1-10,10H96a21.84,21.84,0,0,0-10,2.42v-31a30,30,0,1,0-12,0v69.2a30,30,0,1,0,12,0V144a10,10,0,0,1,10-10h88a22,22,0,0,0,22-22V93.4A30.05,30.05,0,0,0,230,64ZM62,64A18,18,0,1,1,80,82,18,18,0,0,1,62,64ZM98,192a18,18,0,1,1-18-18A18,18,0,0,1,98,192ZM200,82a18,18,0,1,1,18-18A18,18,0,0,1,200,82Z"}))],["regular",n.createElement(n.Fragment,null,n.createElement("path",{d:"M232,64a32,32,0,1,0-40,31v17a8,8,0,0,1-8,8H96a23.84,23.84,0,0,0-8,1.38V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0V144a8,8,0,0,1,8-8h88a24,24,0,0,0,24-24V95A32.06,32.06,0,0,0,232,64ZM64,64A16,16,0,1,1,80,80,16,16,0,0,1,64,64ZM96,192a16,16,0,1,1-16-16A16,16,0,0,1,96,192ZM200,80a16,16,0,1,1,16-16A16,16,0,0,1,200,80Z"}))],["thin",n.createElement(n.Fragment,null,n.createElement("path",{d:"M228,64a28,28,0,1,0-32,27.71V112a12,12,0,0,1-12,12H96a19.91,19.91,0,0,0-12,4V91.71a28,28,0,1,0-8,0v72.58a28,28,0,1,0,8,0V144a12,12,0,0,1,12-12h88a20,20,0,0,0,20-20V91.71A28,28,0,0,0,228,64ZM60,64A20,20,0,1,1,80,84,20,20,0,0,1,60,64Zm40,128a20,20,0,1,1-20-20A20,20,0,0,1,100,192ZM200,84a20,20,0,1,1,20-20A20,20,0,0,1,200,84Z"}))]]),l=n.forwardRef((e,t)=>n.createElement(a.default,{ref:t,...e,weights:r}));l.displayName="GitBranchIcon";let s=new Map([["bold",n.createElement(n.Fragment,null,n.createElement("path",{d:"M244,116H186.79a60,60,0,0,0-117.58,0H12a12,12,0,0,0,0,24H69.21a60,60,0,0,0,117.58,0H244a12,12,0,0,0,0-24ZM128,164a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))],["duotone",n.createElement(n.Fragment,null,n.createElement("path",{d:"M176,128a48,48,0,1,1-48-48A48,48,0,0,1,176,128Z",opacity:"0.2"}),n.createElement("path",{d:"M248,120H183.42a56,56,0,0,0-110.84,0H8a8,8,0,0,0,0,16H72.58a56,56,0,0,0,110.84,0H248a8,8,0,0,0,0-16ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["fill",n.createElement(n.Fragment,null,n.createElement("path",{d:"M256,128a8,8,0,0,1-8,8H183.42a56,56,0,0,1-110.84,0H8a8,8,0,0,1,0-16H72.58a56,56,0,0,1,110.84,0H248A8,8,0,0,1,256,128Z"}))],["light",n.createElement(n.Fragment,null,n.createElement("path",{d:"M248,122H181.66a54,54,0,0,0-107.32,0H8a6,6,0,0,0,0,12H74.34a54,54,0,0,0,107.32,0H248a6,6,0,0,0,0-12ZM128,170a42,42,0,1,1,42-42A42,42,0,0,1,128,170Z"}))],["regular",n.createElement(n.Fragment,null,n.createElement("path",{d:"M248,120H183.42a56,56,0,0,0-110.84,0H8a8,8,0,0,0,0,16H72.58a56,56,0,0,0,110.84,0H248a8,8,0,0,0,0-16ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["thin",n.createElement(n.Fragment,null,n.createElement("path",{d:"M248,124H179.83a52,52,0,0,0-103.66,0H8a4,4,0,0,0,0,8H76.17a52,52,0,0,0,103.66,0H248a4,4,0,0,0,0-8ZM128,172a44,44,0,1,1,44-44A44.05,44.05,0,0,1,128,172Z"}))]]),c=n.forwardRef((e,t)=>n.createElement(a.default,{ref:t,...e,weights:s}));c.displayName="GitCommitIcon";let d=new Map([["bold",n.createElement(n.Fragment,null,n.createElement("path",{d:"M108,64A36,36,0,1,0,60,97.94v60.12a36,36,0,1,0,24,0V97.94A36.07,36.07,0,0,0,108,64ZM72,52A12,12,0,1,1,60,64,12,12,0,0,1,72,52Zm0,152a12,12,0,1,1,12-12A12,12,0,0,1,72,204Zm140-45.94V110.63a27.81,27.81,0,0,0-8.2-19.8L173,60h19a12,12,0,0,0,0-24H144a12,12,0,0,0-12,12V96a12,12,0,0,0,24,0V77l30.83,30.83a4,4,0,0,1,1.17,2.83v47.43a36,36,0,1,0,24,0ZM200,204a12,12,0,1,1,12-12A12,12,0,0,1,200,204Z"}))],["duotone",n.createElement(n.Fragment,null,n.createElement("path",{d:"M96,64A24,24,0,1,1,72,40,24,24,0,0,1,96,64ZM200,168a24,24,0,1,0,24,24A24,24,0,0,0,200,168Z",opacity:"0.2"}),n.createElement("path",{d:"M104,64A32,32,0,1,0,64,95v66a32,32,0,1,0,16,0V95A32.06,32.06,0,0,0,104,64ZM56,64A16,16,0,1,1,72,80,16,16,0,0,1,56,64ZM88,192a16,16,0,1,1-16-16A16,16,0,0,1,88,192Zm120-31V110.63a23.85,23.85,0,0,0-7-17L163.31,56H192a8,8,0,0,0,0-16H144a8,8,0,0,0-8,8V96a8,8,0,0,0,16,0V67.31L189.66,105a8,8,0,0,1,2.34,5.66V161a32,32,0,1,0,16,0Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,200,208Z"}))],["fill",n.createElement(n.Fragment,null,n.createElement("path",{d:"M104,64A32,32,0,1,0,64,95v66a32,32,0,1,0,16,0V95A32.06,32.06,0,0,0,104,64ZM88,192a16,16,0,1,1-16-16A16,16,0,0,1,88,192Zm144,0a32,32,0,1,1-40-31V110.63a8,8,0,0,0-2.34-5.66L152,67.31V96a8,8,0,0,1-16,0V48a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H163.31L201,93.66a23.85,23.85,0,0,1,7,17V161A32.06,32.06,0,0,1,232,192Z"}))],["light",n.createElement(n.Fragment,null,n.createElement("path",{d:"M102,64A30,30,0,1,0,66,93.4v69.2a30,30,0,1,0,12,0V93.4A30.05,30.05,0,0,0,102,64ZM54,64A18,18,0,1,1,72,82,18,18,0,0,1,54,64ZM90,192a18,18,0,1,1-18-18A18,18,0,0,1,90,192Zm116-29.4v-52a21.88,21.88,0,0,0-6.44-15.56L158.48,54H192a6,6,0,0,0,0-12H144a6,6,0,0,0-6,6V96a6,6,0,0,0,12,0V62.48l41.07,41.08a9.91,9.91,0,0,1,2.93,7.07v52a30,30,0,1,0,12,0ZM200,210a18,18,0,1,1,18-18A18,18,0,0,1,200,210Z"}))],["regular",n.createElement(n.Fragment,null,n.createElement("path",{d:"M104,64A32,32,0,1,0,64,95v66a32,32,0,1,0,16,0V95A32.06,32.06,0,0,0,104,64ZM56,64A16,16,0,1,1,72,80,16,16,0,0,1,56,64ZM88,192a16,16,0,1,1-16-16A16,16,0,0,1,88,192Zm120-31V110.63a23.85,23.85,0,0,0-7-17L163.31,56H192a8,8,0,0,0,0-16H144a8,8,0,0,0-8,8V96a8,8,0,0,0,16,0V67.31L189.66,105a8,8,0,0,1,2.34,5.66V161a32,32,0,1,0,16,0Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,200,208Z"}))],["thin",n.createElement(n.Fragment,null,n.createElement("path",{d:"M100,64A28,28,0,1,0,68,91.71v72.58a28,28,0,1,0,8,0V91.71A28,28,0,0,0,100,64ZM52,64A20,20,0,1,1,72,84,20,20,0,0,1,52,64ZM92,192a20,20,0,1,1-20-20A20,20,0,0,1,92,192Zm112-27.71V110.63a19.89,19.89,0,0,0-5.86-14.15L153.66,52H192a4,4,0,0,0,0-8H144a4,4,0,0,0-4,4V96a4,4,0,0,0,8,0V57.66l44.49,44.48a12,12,0,0,1,3.51,8.49v53.66a28,28,0,1,0,8,0ZM200,212a20,20,0,1,1,20-20A20,20,0,0,1,200,212Z"}))]]),u=n.forwardRef((e,t)=>n.createElement(a.default,{ref:t,...e,weights:d}));u.displayName="GitPullRequestIcon";var m=e.i(883364),h=e.i(779177),p=e.i(433512),f=e.i(481178),g=e.i(317477),b=e.i(700145),v=e.i(853487),x=e.i(44091),y=e.i(391466),T=e.i(275519),w=e.i(232471);let[j,D]=(0,e.i(386179).createSafeContext)("Timeline component was not found in tree");var A={root:"m_43657ece",itemTitle:"m_2ebe8099",item:"m_436178ff",itemBullet:"m_8affcee1",itemBody:"m_540e8f41",itemOpposite:"m_f3ba506"},S=e.i(951254),C=e.i(391398);let M=(0,T.factory)(e=>{let{classNames:t,className:n,style:a,styles:i,vars:o,__active:r,__align:l,__lineActive:s,__vars:c,bullet:d,opposite:u,alternate:m,radius:h,color:f,lineVariant:b,children:v,title:y,mod:T,...j}=(0,x.useProps)("TimelineItem",null,e),A=D(),M=(0,S.useMantineTheme)(),k={classNames:t,styles:i},E="left"===l&&!!m||"right"===l&&!m,I=null!=u&&(0,C.jsx)("div",{...A.getStyles("itemOpposite",k),children:u}),P=(0,C.jsxs)("div",{...A.getStyles("itemBody",k),children:[y&&(0,C.jsx)("div",{...A.getStyles("itemTitle",k),children:y}),(0,C.jsx)("div",{...A.getStyles("itemContent",k),children:v})]});return(0,C.jsxs)(w.Box,{...A.getStyles("item",{...k,className:n,style:a}),mod:[{"line-active":s,active:r,alternate:m},T],__vars:{"--tli-radius":void 0!==h?(0,p.getRadius)(h):void 0,"--tli-color":f?(0,g.getThemeColor)(f,M):void 0,"--tli-border-style":b||void 0},...j,children:[E?P:I,(0,C.jsx)(w.Box,{...A.getStyles("itemBullet",k),mod:{"with-child":!!d,align:l,active:r},children:d}),E?I:P]})});M.classes=A,M.displayName="@mantine/core/TimelineItem";let k={active:-1,align:"left"},E=(0,f.createVarsResolver)((e,{bulletSize:t,lineWidth:n,radius:a,color:i,autoContrast:o})=>({root:{"--tl-bullet-size":(0,h.rem)(t),"--tl-line-width":(0,h.rem)(n),"--tl-radius":void 0===a?void 0:(0,p.getRadius)(a),"--tl-color":i?(0,g.getThemeColor)(i,e):void 0,"--tl-icon-color":(0,v.getAutoContrastValue)(o,e)?(0,b.getContrastColor)({color:i,theme:e,autoContrast:o}):void 0}})),I=(0,T.factory)(e=>{let t=(0,x.useProps)("Timeline",k,e),{classNames:a,className:i,style:o,styles:r,unstyled:l,vars:s,children:c,active:d,color:u,radius:m,bulletSize:h,align:p,lineWidth:f,reverseActive:g,mod:b,autoContrast:v,attributes:T,...D}=t,S=(0,y.useStyles)({name:"Timeline",classes:A,props:t,className:i,style:o,classNames:a,styles:r,unstyled:l,attributes:T,vars:s,varsResolver:E}),M=n.Children.toArray(c),I=M.some(e=>e.props?.opposite!=null),P=M.map((e,t)=>(0,n.cloneElement)(e,{unstyled:l,__align:p,__active:e.props?.active||(g?d>=M.length-t-1:d>=t),__lineActive:e.props?.lineActive||(g?d>=M.length-t-1:d-1>=t)}));return(0,C.jsx)(j,{value:{getStyles:S},children:(0,C.jsx)(w.Box,{...S("root"),mod:[{align:p,opposite:I},b],...D,children:P})})});function P({noIcon:e,...t}){let n=!e;return(0,C.jsxs)(I,{active:1,bulletSize:24,lineWidth:2,...t,children:[(0,C.jsxs)(I.Item,{bullet:n?(0,C.jsx)(l,{size:13}):null,title:"New branch",children:[(0,C.jsxs)(m.Text,{c:"dimmed",size:"sm",children:["You've created new branch"," ",(0,C.jsx)(m.Text,{variant:"link",component:"span",inherit:!0,children:"fix-notifications"})," ","from master"]}),(0,C.jsx)(m.Text,{size:"xs",mt:4,children:"2 hours ago"})]}),(0,C.jsxs)(I.Item,{bullet:n?(0,C.jsx)(c,{size:13}):null,title:"Commits",children:[(0,C.jsxs)(m.Text,{c:"dimmed",size:"sm",children:["You've pushed 23 commits to"," ",(0,C.jsx)(m.Text,{variant:"link",component:"span",inherit:!0,children:"fix-notifications"})," ","branch"]}),(0,C.jsx)(m.Text,{size:"xs",mt:4,children:"52 minutes ago"})]}),(0,C.jsxs)(I.Item,{title:"Pull request",bullet:n?(0,C.jsx)(u,{size:13}):null,lineVariant:"dashed",children:[(0,C.jsxs)(m.Text,{c:"dimmed",size:"sm",children:["You've submitted a pull request"," ",(0,C.jsx)(m.Text,{variant:"link",component:"span",inherit:!0,children:"Fix incorrect notification message (#187)"})," "]}),(0,C.jsx)(m.Text,{size:"xs",mt:4,children:"34 minutes ago"})]}),(0,C.jsxs)(I.Item,{title:"Code review",bullet:n?(0,C.jsx)(o,{size:13}):null,children:[(0,C.jsxs)(m.Text,{c:"dimmed",size:"sm",children:[(0,C.jsx)(m.Text,{variant:"link",component:"span",inherit:!0,children:"Robert Gluesticker"})," ","left a code review on your pull request"]}),(0,C.jsx)(m.Text,{size:"xs",mt:4,children:"12 minutes ago"})]})]})}I.classes=A,I.varsResolver=E,I.displayName="@mantine/core/Timeline",I.Item=M;let H={type:"code",component:function(){return(0,C.jsx)(w.Box,{maw:320,mx:"auto",children:(0,C.jsx)(P,{})})},code:`
import { Timeline, Text } from '@mantine/core';
import { GitBranchIcon, GitPullRequestIcon, GitCommitIcon, ChatCircleDotsIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Timeline active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item bullet={<GitBranchIcon size={12} />} title="New branch">
        <Text c="dimmed" size="sm">You&apos;ve created new branch <Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>
        <Text size="xs" mt={4}>2 hours ago</Text>
      </Timeline.Item>

      <Timeline.Item bullet={<GitCommitIcon size={12} />} title="Commits">
        <Text c="dimmed" size="sm">You&apos;ve pushed 23 commits to<Text variant="link" component="span" inherit>fix-notifications branch</Text></Text>
        <Text size="xs" mt={4}>52 minutes ago</Text>
      </Timeline.Item>

      <Timeline.Item title="Pull request" bullet={<GitPullRequestIcon size={12} />} lineVariant="dashed">
        <Text c="dimmed" size="sm">You&apos;ve submitted a pull request<Text variant="link" component="span" inherit>Fix incorrect notification message (#187)</Text></Text>
        <Text size="xs" mt={4}>34 minutes ago</Text>
      </Timeline.Item>

      <Timeline.Item title="Code review" bullet={<ChatCircleDotsIcon size={12} />}>
        <Text c="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
        <Text size="xs" mt={4}>12 minutes ago</Text>
      </Timeline.Item>
    </Timeline>
  );
}
`},V={type:"configurator",component:function(e){return(0,C.jsx)(w.Box,{maw:320,mx:"auto",children:(0,C.jsx)(P,{noIcon:!0,...e})})},code:`
import { Timeline } from '@mantine/core';

function Demo() {
  return (
    <Timeline{{props}}>
      {/* items */}
    </Timeline>
  );
}
`,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"active",type:"number",initialValue:1,libraryValue:null,min:-1,max:3},{prop:"reverseActive",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"lineWidth",type:"number",initialValue:4,libraryValue:4,min:1,max:6},{prop:"bulletSize",type:"number",initialValue:25,libraryValue:20,min:18,max:40,step:1},{prop:"align",type:"segmented",data:[{label:"Left",value:"left"},{label:"Right",value:"right"}],initialValue:"left",libraryValue:"left"}]};var z=e.i(915793);let R=new Map([["bold",n.createElement(n.Fragment,null,n.createElement("path",{d:"M249.45,69.31a12,12,0,0,0-12.51,1L212,88.43V72a20,20,0,0,0-20-20H32A20,20,0,0,0,12,72V184a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V167.57l24.94,18.14A12,12,0,0,0,256,176V80A12,12,0,0,0,249.45,69.31ZM188,180H36V76H188Zm44-27.57-20-14.54V118.11l20-14.54Z"}))],["duotone",n.createElement(n.Fragment,null,n.createElement("path",{d:"M200,72V184a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8H192A8,8,0,0,1,200,72Z",opacity:"0.2"}),n.createElement("path",{d:"M251.77,73a8,8,0,0,0-8.21.39L208,97.05V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V159l35.56,23.71A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73ZM192,184H32V72H192V184Zm48-22.95-32-21.33V116.28L240,95Z"}))],["fill",n.createElement(n.Fragment,null,n.createElement("path",{d:"M192,72V184a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V72A16,16,0,0,1,32,56H176A16,16,0,0,1,192,72Zm58,.25a8.23,8.23,0,0,0-6.63,1.22L209.78,95.86A4,4,0,0,0,208,99.19v57.62a4,4,0,0,0,1.78,3.33l33.78,22.52a8,8,0,0,0,8.58.19,8.33,8.33,0,0,0,3.86-7.17V80A8,8,0,0,0,250,72.25Z"}))],["light",n.createElement(n.Fragment,null,n.createElement("path",{d:"M250.83,74.71a6,6,0,0,0-6.16.3L206,100.79V72a14,14,0,0,0-14-14H32A14,14,0,0,0,18,72V184a14,14,0,0,0,14,14H192a14,14,0,0,0,14-14V155.21L244.67,181a6,6,0,0,0,9.33-5V80A6,6,0,0,0,250.83,74.71ZM194,184a2,2,0,0,1-2,2H32a2,2,0,0,1-2-2V72a2,2,0,0,1,2-2H192a2,2,0,0,1,2,2Zm48-19.21-36-24V115.21l36-24Z"}))],["regular",n.createElement(n.Fragment,null,n.createElement("path",{d:"M251.77,73a8,8,0,0,0-8.21.39L208,97.05V72a16,16,0,0,0-16-16H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V159l35.56,23.71A8,8,0,0,0,248,184a8,8,0,0,0,8-8V80A8,8,0,0,0,251.77,73ZM192,184H32V72H192V184Zm48-22.95-32-21.33V116.28L240,95Z"}))],["thin",n.createElement(n.Fragment,null,n.createElement("path",{d:"M249.89,76.47a4,4,0,0,0-4.11.2L204,104.53V72a12,12,0,0,0-12-12H32A12,12,0,0,0,20,72V184a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V151.47l41.78,27.86A4,4,0,0,0,252,176V80A4,4,0,0,0,249.89,76.47ZM196,184a4,4,0,0,1-4,4H32a4,4,0,0,1-4-4V72a4,4,0,0,1,4-4H192a4,4,0,0,1,4,4Zm48-15.47-40-26.67V114.14l40-26.67Z"}))]]),L=n.forwardRef((e,t)=>n.createElement(a.default,{ref:t,...e,weights:R}));L.displayName="VideoCameraIcon";var B=e.i(141806),O=e.i(614148);let _={type:"code",centered:!0,maxWidth:320,component:function(){return(0,C.jsxs)(I,{bulletSize:24,children:[(0,C.jsx)(I.Item,{title:"Default bullet",children:(0,C.jsx)(m.Text,{c:"dimmed",size:"sm",children:"Default bullet without anything"})}),(0,C.jsx)(I.Item,{title:"Avatar",bullet:(0,C.jsx)(B.Avatar,{size:22,radius:"xl",src:"https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"}),children:(0,C.jsx)(m.Text,{c:"dimmed",size:"sm",children:"Timeline bullet as avatar image"})}),(0,C.jsx)(I.Item,{title:"Icon",bullet:(0,C.jsx)(z.SunIcon,{size:13}),children:(0,C.jsx)(m.Text,{c:"dimmed",size:"sm",children:"Timeline bullet as icon"})}),(0,C.jsx)(I.Item,{title:"ThemeIcon",bullet:(0,C.jsx)(O.ThemeIcon,{size:22,variant:"gradient",gradient:{from:"lime",to:"cyan"},radius:"xl",children:(0,C.jsx)(L,{size:13})}),children:(0,C.jsx)(m.Text,{c:"dimmed",size:"sm",children:"Timeline bullet as ThemeIcon component"})})]})},code:`
import { ThemeIcon, Text, Avatar, Timeline } from '@mantine/core';
import { SunIcon, VideoCameraIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Timeline bulletSize={24}>
      <Timeline.Item title="Default bullet">
        <Text c="dimmed" size="sm">
          Default bullet without anything
        </Text>
      </Timeline.Item>
      <Timeline.Item
        title="Avatar"
        bullet={
          <Avatar
            size={22}
            radius="xl"
            src="https://avatars0.githubusercontent.com/u/10353856?s=460&u=88394dfd67727327c1f7670a1764dc38a8a24831&v=4"
          />
        }
      >
        <Text c="dimmed" size="sm">
          Timeline bullet as avatar image
        </Text>
      </Timeline.Item>
      <Timeline.Item title="Icon" bullet={<SunIcon size={13} />}>
        <Text c="dimmed" size="sm">
          Timeline bullet as icon
        </Text>
      </Timeline.Item>
      <Timeline.Item
        title="ThemeIcon"
        bullet={
          <ThemeIcon
            size={22}
            variant="gradient"
            gradient={{ from: 'lime', to: 'cyan' }}
            radius="xl"
          >
            <VideoCameraIcon size={13} />
          </ThemeIcon>
        }
      >
        <Text c="dimmed" size="sm">
          Timeline bullet as ThemeIcon component
        </Text>
      </Timeline.Item>
    </Timeline>
  );
}
`},Y={type:"code",component:function(){return(0,C.jsxs)(I,{active:1,bulletSize:24,lineWidth:2,children:[(0,C.jsx)(I.Item,{bullet:(0,C.jsx)(l,{size:12}),title:"New branch",opposite:(0,C.jsx)(m.Text,{size:"sm",c:"dimmed",children:"2 hours ago"}),children:(0,C.jsxs)(m.Text,{c:"dimmed",size:"sm",children:["You've created new branch"," ",(0,C.jsx)(m.Text,{variant:"link",component:"span",inherit:!0,children:"fix-notifications"})," ","from master"]})}),(0,C.jsx)(I.Item,{bullet:(0,C.jsx)(c,{size:12}),title:"Commits",opposite:(0,C.jsx)(m.Text,{size:"sm",c:"dimmed",children:"52 minutes ago"}),children:(0,C.jsxs)(m.Text,{c:"dimmed",size:"sm",children:["You've pushed 23 commits to"," ",(0,C.jsx)(m.Text,{variant:"link",component:"span",inherit:!0,children:"fix-notifications branch"})]})}),(0,C.jsx)(I.Item,{title:"Pull request",bullet:(0,C.jsx)(u,{size:12}),lineVariant:"dashed",opposite:(0,C.jsx)(m.Text,{size:"sm",c:"dimmed",children:"34 minutes ago"}),children:(0,C.jsxs)(m.Text,{c:"dimmed",size:"sm",children:["You've submitted a pull request"," ",(0,C.jsx)(m.Text,{variant:"link",component:"span",inherit:!0,children:"Fix incorrect notification message (#187)"})]})}),(0,C.jsx)(I.Item,{title:"Code review",bullet:(0,C.jsx)(o,{size:12}),children:(0,C.jsxs)(m.Text,{c:"dimmed",size:"sm",children:[(0,C.jsx)(m.Text,{variant:"link",component:"span",inherit:!0,children:"Robert Gluesticker"})," ","left a code review on your pull request"]})})]})},code:`
import { Timeline, Text } from '@mantine/core';
import { GitBranchIcon, GitCommitIcon, GitPullRequestIcon, ChatCircleDotsIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Timeline active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item
        bullet={<GitBranchIcon size={12} />}
        title="New branch"
        opposite={
          <Text size="sm" c="dimmed">
            2 hours ago
          </Text>
        }
      >
        <Text c="dimmed" size="sm">You&apos;ve created new branch <Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>
      </Timeline.Item>

      <Timeline.Item
        bullet={<GitCommitIcon size={12} />}
        title="Commits"
        opposite={
          <Text size="sm" c="dimmed">
            52 minutes ago
          </Text>
        }
      >
        <Text c="dimmed" size="sm">You&apos;ve pushed 23 commits to <Text variant="link" component="span" inherit>fix-notifications branch</Text></Text>
      </Timeline.Item>

      <Timeline.Item
        title="Pull request"
        bullet={<GitPullRequestIcon size={12} />}
        lineVariant="dashed"
        opposite={
          <Text size="sm" c="dimmed">
            34 minutes ago
          </Text>
        }
      >
        <Text c="dimmed" size="sm">You&apos;ve submitted a pull request <Text variant="link" component="span" inherit>Fix incorrect notification message (#187)</Text></Text>
      </Timeline.Item>

      <Timeline.Item title="Code review" bullet={<ChatCircleDotsIcon size={12} />}>
        <Text c="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
      </Timeline.Item>
    </Timeline>
  );
}
`,centered:!0,maxWidth:480},F={type:"code",component:function(){return(0,C.jsxs)(I,{active:2,bulletSize:24,lineWidth:2,children:[(0,C.jsx)(I.Item,{bullet:(0,C.jsx)(l,{size:12}),title:"New branch",opposite:(0,C.jsx)(m.Text,{size:"sm",c:"dimmed",children:"2 hours ago"}),children:(0,C.jsxs)(m.Text,{c:"dimmed",size:"sm",children:["You've created new branch"," ",(0,C.jsx)(m.Text,{variant:"link",component:"span",inherit:!0,children:"fix-notifications"})," ","from master"]})}),(0,C.jsx)(I.Item,{bullet:(0,C.jsx)(c,{size:12}),title:"Commits",opposite:(0,C.jsx)(m.Text,{size:"sm",c:"dimmed",children:"52 minutes ago"}),alternate:!0,children:(0,C.jsxs)(m.Text,{c:"dimmed",size:"sm",children:["You've pushed 23 commits to"," ",(0,C.jsx)(m.Text,{variant:"link",component:"span",inherit:!0,children:"fix-notifications branch"})]})}),(0,C.jsx)(I.Item,{title:"Pull request",bullet:(0,C.jsx)(u,{size:12}),lineVariant:"dashed",opposite:(0,C.jsx)(m.Text,{size:"sm",c:"dimmed",children:"34 minutes ago"}),children:(0,C.jsxs)(m.Text,{c:"dimmed",size:"sm",children:["You've submitted a pull request"," ",(0,C.jsx)(m.Text,{variant:"link",component:"span",inherit:!0,children:"Fix incorrect notification message (#187)"})]})}),(0,C.jsx)(I.Item,{title:"Code review",bullet:(0,C.jsx)(o,{size:12}),opposite:(0,C.jsx)(m.Text,{size:"sm",c:"dimmed",children:"12 minutes ago"}),alternate:!0,children:(0,C.jsxs)(m.Text,{c:"dimmed",size:"sm",children:[(0,C.jsx)(m.Text,{variant:"link",component:"span",inherit:!0,children:"Robert Gluesticker"})," ","left a code review on your pull request"]})})]})},code:`
import { Timeline, Text } from '@mantine/core';
import { GitBranchIcon, GitCommitIcon, GitPullRequestIcon, ChatCircleDotsIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Timeline active={2} bulletSize={24} lineWidth={2}>
      <Timeline.Item
        bullet={<GitBranchIcon size={12} />}
        title="New branch"
        opposite={
          <Text size="sm" c="dimmed">
            2 hours ago
          </Text>
        }
      >
        <Text c="dimmed" size="sm">You&apos;ve created new branch <Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>
      </Timeline.Item>

      <Timeline.Item
        bullet={<GitCommitIcon size={12} />}
        title="Commits"
        opposite={
          <Text size="sm" c="dimmed">
            52 minutes ago
          </Text>
        }
        alternate
      >
        <Text c="dimmed" size="sm">You&apos;ve pushed 23 commits to <Text variant="link" component="span" inherit>fix-notifications branch</Text></Text>
      </Timeline.Item>

      <Timeline.Item
        title="Pull request"
        bullet={<GitPullRequestIcon size={12} />}
        lineVariant="dashed"
        opposite={
          <Text size="sm" c="dimmed">
            34 minutes ago
          </Text>
        }
      >
        <Text c="dimmed" size="sm">You&apos;ve submitted a pull request <Text variant="link" component="span" inherit>Fix incorrect notification message (#187)</Text></Text>
      </Timeline.Item>

      <Timeline.Item
        title="Code review"
        bullet={<ChatCircleDotsIcon size={12} />}
        opposite={
          <Text size="sm" c="dimmed">
            12 minutes ago
          </Text>
        }
        alternate
      >
        <Text c="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
      </Timeline.Item>
    </Timeline>
  );
}
`};var Z=(0,t.__exportAll)({alternate:()=>F,bullet:()=>_,configurator:()=>V,opposite:()=>Y,usage:()=>H});e.s(["TimelineDemos",0,Z],380272)},670084,e=>{"use strict";var t=e.i(648863),n=e.i(779177),a=e.i(325505),i=e.i(433512),o=e.i(481178),r=e.i(44091),l=e.i(391466),s=e.i(275519),c=e.i(232471),d=e.i(386179);let[u,m]=(0,d.createSafeContext)("Accordion component was not found in the tree");var h=e.i(462138),p={root:"m_9bdbb667",panel:"m_df78851f",content:"m_4ba554d4",itemTitle:"m_8fa820a0",control:"m_4ba585b8","control--default":"m_6939a5e9","control--contained":"m_4271d21b",label:"m_df3ffa0f",chevron:"m_3f35ae96",icon:"m_9bd771fe",item:"m_9bd7b098","item--default":"m_fe19b709","item--contained":"m_1f921b3b","item--filled":"m_2cdf939a","item--separated":"m_9f59b069"},f=e.i(654486),g=e.i(284629);let[b,v]=(0,d.createSafeContext)("Accordion.Item component was not found in the tree");var x=e.i(391398);let y=(0,s.factory)(e=>{let{classNames:t,className:n,style:a,styles:i,vars:o,chevron:l,icon:s,onClick:d,onKeyDown:u,children:h,disabled:p,mod:b,...y}=(0,r.useProps)("AccordionControl",null,e),{value:T}=v(),w=m(),j=w.isItemActive(T),D="number"==typeof w.order,A=`h${w.order}`,S=(0,x.jsxs)(g.UnstyledButton,{...w.getStyles("control",{className:n,classNames:t,style:a,styles:i,variant:w.variant}),unstyled:w.unstyled,mod:["accordion-control",{active:j,"chevron-position":w.chevronPosition,disabled:p},b],onClick:e=>{d?.(e),w.onChange(T)},type:"button",disabled:p,"aria-expanded":j,"aria-controls":w.getRegionId(T),id:w.getControlId(T),onKeyDown:(0,f.createScopedKeydownHandler)({siblingSelector:"[data-accordion-control]",parentSelector:"[data-accordion]",activateOnFocus:!1,loop:w.loop,orientation:"vertical",onKeyDown:u}),...y,children:[(0,x.jsx)(c.Box,{component:"span",mod:{rotate:!w.disableChevronRotation&&j,position:w.chevronPosition},...w.getStyles("chevron",{classNames:t,styles:i}),children:l||w.chevron}),(0,x.jsx)("span",{...w.getStyles("label",{classNames:t,styles:i}),children:h}),s&&(0,x.jsx)(c.Box,{component:"span",mod:{"chevron-position":w.chevronPosition},...w.getStyles("icon",{classNames:t,styles:i}),children:s})]});return D?(0,x.jsx)(A,{...w.getStyles("itemTitle",{classNames:t,styles:i}),children:S}):S});y.displayName="@mantine/core/AccordionControl",y.classes=p;let T=(0,s.factory)(e=>{let{classNames:t,className:n,style:a,styles:i,vars:o,value:l,mod:s,...d}=(0,r.useProps)("AccordionItem",null,e),u=m();return(0,x.jsx)(b,{value:{value:l},children:(0,x.jsx)(c.Box,{mod:[{active:u.isItemActive(l)},s],...u.getStyles("item",{className:n,classNames:t,styles:i,style:a,variant:u.variant}),...d})})});T.displayName="@mantine/core/AccordionItem",T.classes=p;var w=e.i(586692);let j=(0,s.factory)(e=>{let{classNames:t,className:n,style:a,styles:i,vars:o,children:l,keepMounted:s,keepMountedMode:c,...d}=(0,r.useProps)("AccordionPanel",null,e),{value:u}=v(),h=m();return(0,x.jsx)(w.Collapse,{...h.getStyles("panel",{className:n,classNames:t,style:a,styles:i}),expanded:h.isItemActive(u),transitionDuration:h.transitionDuration??200,role:"region",id:h.getRegionId(u),"aria-labelledby":h.getControlId(u),keepMounted:s??h.keepMounted,keepMountedMode:c??h.keepMountedMode,...d,children:(0,x.jsx)("div",{...h.getStyles("content",{classNames:t,styles:i}),children:l})})});j.displayName="@mantine/core/AccordionPanel",j.classes=p;var D=e.i(107315),A=e.i(579560);let S={multiple:!1,loop:!0,disableChevronRotation:!1,disableCollapse:!1,chevronPosition:"right",variant:"default",chevronSize:"auto",chevronIconSize:16,keepMountedMode:"activity"},C=(0,o.createVarsResolver)((e,{transitionDuration:t,chevronSize:a,radius:o})=>({root:{"--accordion-transition-duration":void 0===t?void 0:`${t}ms`,"--accordion-chevron-size":void 0===a?void 0:(0,n.rem)(a),"--accordion-radius":void 0===o?void 0:(0,i.getRadius)(o)}})),M=(0,s.genericFactory)(e=>{let t=(0,r.useProps)("Accordion",S,e),{classNames:n,className:i,style:o,styles:s,unstyled:d,vars:m,children:f,multiple:g,value:b,defaultValue:v,onChange:y,id:T,loop:w,transitionDuration:j,disableChevronRotation:M,disableCollapse:k,chevronPosition:E,chevronSize:I,order:P,chevron:H,variant:V,radius:z,chevronIconSize:R,attributes:L,keepMounted:B,keepMountedMode:O,..._}=t,Y=(0,D.useId)(T),[F,Z]=(0,A.useUncontrolled)({value:b,defaultValue:v,finalValue:g?[]:null,onChange:y}),N=(0,l.useStyles)({name:"Accordion",classes:p,props:t,className:i,style:o,classNames:n,styles:s,unstyled:d,attributes:L,vars:m,varsResolver:C});return(0,x.jsx)(u,{value:{isItemActive:e=>Array.isArray(F)?F.includes(e):e===F,onChange:e=>{!Array.isArray(F)&&k&&e===F||Z(Array.isArray(F)?F.includes(e)?F.filter(t=>t!==e):[...F,e]:e===F?null:e)},getControlId:(0,a.getSafeId)(`${Y}-control`,"Accordion.Item component was rendered with invalid value or without value"),getRegionId:(0,a.getSafeId)(`${Y}-panel`,"Accordion.Item component was rendered with invalid value or without value"),chevron:null===H?null:H||(0,x.jsx)(h.AccordionChevron,{size:R}),transitionDuration:j,disableChevronRotation:M,chevronPosition:E,order:P,loop:w,getStyles:N,variant:V,unstyled:d,keepMounted:B,keepMountedMode:O},children:(0,x.jsx)(c.Box,{...N("root"),id:Y,..._,variant:V,"data-accordion":!0,children:f})})});M.classes=p,M.varsResolver=C,M.displayName="@mantine/core/Accordion",M.Item=T,M.Panel=j,M.Control=y,M.Chevron=h.AccordionChevron;var k=e.i(141806),E=e.i(19830),I=e.i(883364);let P=[{id:"bender",image:"https://img.icons8.com/clouds/256/000000/futurama-bender.png",label:"Bender Bending Rodríguez",description:"Fascinated with cooking, though has no sense of taste",content:"Bender Bending Rodríguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend."},{id:"carol",image:"https://img.icons8.com/clouds/256/000000/futurama-mom.png",label:"Carol Miller",description:"One of the richest people on Earth",content:"Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series."},{id:"homer",image:"https://img.icons8.com/clouds/256/000000/homer-simpson.png",label:"Homer Simpson",description:"Overweight, lazy, and often ignorant",content:"Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson."}];function H({label:e,image:t,description:n}){return(0,x.jsxs)(E.Flex,{component:"span",gap:"md",align:"center",wrap:"nowrap",children:[(0,x.jsx)(k.Avatar,{src:t,radius:"xl",size:"lg",alt:e}),(0,x.jsxs)("div",{children:[(0,x.jsx)(I.Text,{span:!0,children:e}),(0,x.jsx)(I.Text,{span:!0,display:"block",size:"sm",c:"dimmed",fw:400,children:n})]})]})}function V(e){let t=P.map(e=>(0,x.jsxs)(M.Item,{value:e.id,children:[(0,x.jsx)(M.Control,{"aria-label":e.label,children:(0,x.jsx)(H,{...e})}),(0,x.jsx)(M.Panel,{children:(0,x.jsx)(I.Text,{size:"sm",children:e.content})})]},e.label));return(0,x.jsx)(M,{chevronPosition:"right",variant:"contained",order:3,...e,children:t})}let z={type:"code",code:`
import { Flex, Avatar, Text, Accordion } from '@mantine/core';

const charactersList = [
  {
    id: 'bender',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-bender.png',
    label: 'Bender Bending Rodr\xedguez',
    description: 'Fascinated with cooking, though has no sense of taste',
    content: "Bender Bending Rodr\xedguez, (born September 4, 2996), designated Bending Unit 22, and commonly known as Bender, is a bending unit created by a division of MomCorp in Tijuana, Mexico, and his serial number is 2716057. His mugshot id number is 01473. He is Fry's best friend.",
  },

  {
    id: 'carol',
    image: 'https://img.icons8.com/clouds/256/000000/futurama-mom.png',
    label: 'Carol Miller',
    description: 'One of the richest people on Earth',
    content: "Carol Miller (born January 30, 2880), better known as Mom, is the evil chief executive officer and shareholder of 99.7% of Momcorp, one of the largest industrial conglomerates in the universe and the source of most of Earth's robots. She is also one of the main antagonists of the Futurama series.",
  },

  {
    id: 'homer',
    image: 'https://img.icons8.com/clouds/256/000000/homer-simpson.png',
    label: 'Homer Simpson',
    description: 'Overweight, lazy, and often ignorant',
    content: 'Homer Jay Simpson (born May 12) is the main protagonist and one of the five main characters of The Simpsons series(or show). He is the spouse of Marge Simpson and father of Bart, Lisa and Maggie Simpson.',
  },
];

interface AccordionLabelProps {
  label: string;
  image: string;
  description: string;
}

function AccordionLabel({ label, image, description }: AccordionLabelProps) {
  return (
    <Flex component="span" gap="md" align="center" wrap="nowrap">
      <Avatar src={image} radius="xl" size="lg" alt={label} />
      <div>
        <Text span>{label}</Text>
        <Text span display="block" size="sm" c="dimmed" fw={400}>
          {description}
        </Text>
      </div>
    </Flex>
  );
}

function Demo() {
  const items = charactersList.map((item) => (
    <Accordion.Item value={item.id} key={item.label}>
      <Accordion.Control aria-label={item.label}>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text size="sm">{item.content}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion chevronPosition="right" variant="contained">
      {items}
    </Accordion>
  );
}
`,component:function(){return(0,x.jsx)(V,{})},maxWidth:540,centered:!0,defaultExpanded:!1},R=[{emoji:"🍎",value:"Apples",description:"Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads."},{emoji:"🍌",value:"Bananas",description:"Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking."},{emoji:"🥦",value:"Broccoli",description:"Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries."}],L=`export const data = [
  {
    emoji: '🍎',
    value: 'Apples',
    description:
      'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
  },
  {
    emoji: '🍌',
    value: 'Bananas',
    description:
      'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
  },
  {
    emoji: '🥦',
    value: 'Broccoli',
    description:
      'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
  },
];`,B=R.map(e=>(0,x.jsxs)(M.Item,{value:e.value,children:[(0,x.jsx)(M.Control,{icon:e.emoji,children:e.value}),(0,x.jsx)(M.Panel,{children:e.description})]},e.value));function O(e){return(0,x.jsx)(M,{order:3,...e,children:B})}let _={type:"configurator",component:function(e){let t=R.map(e=>(0,x.jsxs)(M.Item,{value:e.value,children:[(0,x.jsx)(M.Control,{icon:e.emoji,children:e.value}),(0,x.jsx)(M.Panel,{children:e.description})]},e.value));return(0,x.jsx)(M,{...e,defaultValue:"Apples",order:3,mih:320,children:t})},code:[{fileName:"Demo.tsx",code:`
import { Accordion } from '@mantine/core';
import { data } from './data';

function Demo() {
  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion{{props}} order={3} defaultValue="Apples">
      {items}
    </Accordion>
  );
}
`,language:"tsx"},{fileName:"data.ts",code:L,language:"tsx"}],controls:[{prop:"variant",type:"select",initialValue:"default",libraryValue:"default",data:[{label:"Default",value:"default"},{label:"Contained",value:"contained"},{label:"Filled",value:"filled"},{label:"Separated",value:"separated"},{label:"Unstyled",value:"unstyled"}]},{prop:"radius",type:"size",libraryValue:"md",initialValue:"md"},{prop:"chevronPosition",type:"segmented",data:[{label:"Left",value:"left"},{label:"Right",value:"right"}],initialValue:"right",libraryValue:"right"},{prop:"chevronIconSize",type:"number",initialValue:16,libraryValue:16,min:12,max:25},{prop:"disableChevronRotation",type:"boolean",initialValue:!1,libraryValue:!1}]},Y={type:"code",component:function(){return(0,x.jsx)(M,{defaultValue:"Apples",order:3,mih:270,children:R.map(e=>(0,x.jsxs)(M.Item,{value:e.value,children:[(0,x.jsx)(M.Control,{icon:e.emoji,disabled:"Bananas"===e.value,children:e.value}),(0,x.jsx)(M.Panel,{children:e.description})]},e.value))})},code:[{fileName:"Demo.tsx",code:`
import { Accordion } from '@mantine/core';
import { data } from './data';

function Demo() {
  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji} disabled={item.value === 'Bananas'}>
        {item.value}
      </Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion defaultValue="Apples" order={3}>
      {items}
    </Accordion>
  );
}
`,language:"tsx"},{fileName:"data.ts",code:L,language:"tsx"}],centered:!0,maxWidth:600},F={type:"code",component:function(){return(0,x.jsx)(M,{defaultValue:"Apples",disableCollapse:!0,order:3,mih:270,children:R.map(e=>(0,x.jsxs)(M.Item,{value:e.value,children:[(0,x.jsx)(M.Control,{icon:e.emoji,children:e.value}),(0,x.jsx)(M.Panel,{children:e.description})]},e.value))})},code:[{fileName:"Demo.tsx",code:`
import { Accordion } from '@mantine/core';
import { data } from './data';

function Demo() {
  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion defaultValue="Apples" disableCollapse order={3}>
      {items}
    </Accordion>
  );
}
`,language:"tsx"},{fileName:"data.ts",code:L,language:"tsx"}],centered:!0,maxWidth:600};var Z=e.i(37930);let N={type:"code",component:function(){let e=R.map(e=>(0,x.jsxs)(M.Item,{value:e.value,children:[(0,x.jsx)(M.Control,{icon:e.emoji,children:e.value}),(0,x.jsx)(M.Panel,{children:e.description})]},e.value));return(0,x.jsx)(M,{defaultValue:"Apples",classNames:{chevron:"m_85bcba4"},chevron:(0,x.jsx)(Z.PlusIcon,{className:"m_b7471fb0"}),order:3,mih:270,children:e})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { PlusIcon } from '@phosphor-icons/react';
import { Accordion } from '@mantine/core';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion
      defaultValue="Apples"
      classNames={{ chevron: classes.chevron }}
      chevron={<PlusIcon className={classes.icon} />}
      order={3}
    >
      {items}
    </Accordion>
  );
}
`},{fileName:"Demo.module.css",code:`
.chevron {
  &[data-rotate] {
    transform: rotate(45deg);
  }
}

.icon {
  width: 16px;
  height: 16px;
}
`,language:"scss"},{fileName:"data.ts",code:L,language:"tsx"}],centered:!0,maxWidth:600};var W=e.i(191788),$=e.i(171481);let G=new Map([["bold",W.createElement(W.Fragment,null,W.createElement("path",{d:"M208,52H182.42L170,33.34A12,12,0,0,0,160,28H96a12,12,0,0,0-10,5.34L73.57,52H48A28,28,0,0,0,20,80V192a28,28,0,0,0,28,28H208a28,28,0,0,0,28-28V80A28,28,0,0,0,208,52Zm4,140a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V80a4,4,0,0,1,4-4H80a12,12,0,0,0,10-5.34L102.42,52h51.15L166,70.66A12,12,0,0,0,176,76h32a4,4,0,0,1,4,4ZM128,84a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,84Zm0,72a24,24,0,1,1,24-24A24,24,0,0,1,128,156Z"}))],["duotone",W.createElement(W.Fragment,null,W.createElement("path",{d:"M208,64H176L160,40H96L80,64H48A16,16,0,0,0,32,80V192a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V80A16,16,0,0,0,208,64ZM128,168a36,36,0,1,1,36-36A36,36,0,0,1,128,168Z",opacity:"0.2"}),W.createElement("path",{d:"M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"}))],["fill",W.createElement(W.Fragment,null,W.createElement("path",{d:"M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm-44,76a36,36,0,1,1-36-36A36,36,0,0,1,164,132Z"}))],["light",W.createElement(W.Fragment,null,W.createElement("path",{d:"M208,58H179.21L165,36.67A6,6,0,0,0,160,34H96a6,6,0,0,0-5,2.67L76.78,58H48A22,22,0,0,0,26,80V192a22,22,0,0,0,22,22H208a22,22,0,0,0,22-22V80A22,22,0,0,0,208,58Zm10,134a10,10,0,0,1-10,10H48a10,10,0,0,1-10-10V80A10,10,0,0,1,48,70H80a6,6,0,0,0,5-2.67L99.21,46h57.57L171,67.33A6,6,0,0,0,176,70h32a10,10,0,0,1,10,10ZM128,90a42,42,0,1,0,42,42A42,42,0,0,0,128,90Zm0,72a30,30,0,1,1,30-30A30,30,0,0,1,128,162Z"}))],["regular",W.createElement(W.Fragment,null,W.createElement("path",{d:"M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.71,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.66-3.56L100.28,48h55.43l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"}))],["thin",W.createElement(W.Fragment,null,W.createElement("path",{d:"M208,60H178.13L163.32,37.78A4,4,0,0,0,160,36H96a4,4,0,0,0-3.32,1.78L77.85,60H48A20,20,0,0,0,28,80V192a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V80A20,20,0,0,0,208,60Zm12,132a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V80A12,12,0,0,1,48,68H80a4,4,0,0,0,3.33-1.78L98.13,44h59.72l14.82,22.22A4,4,0,0,0,176,68h32a12,12,0,0,1,12,12ZM128,92a40,40,0,1,0,40,40A40,40,0,0,0,128,92Zm0,72a32,32,0,1,1,32-32A32,32,0,0,1,128,164Z"}))]]),U=W.forwardRef((e,t)=>W.createElement($.default,{ref:t,...e,weights:G}));U.displayName="CameraIcon";var q=e.i(613688);let K=new Map([["bold",W.createElement(W.Fragment,null,W.createElement("path",{d:"M214.67,68H204V40a12,12,0,0,0-12-12H64A12,12,0,0,0,52,40V68H41.33C25.16,68,12,80.56,12,96v80a12,12,0,0,0,12,12H52v28a12,12,0,0,0,12,12H192a12,12,0,0,0,12-12V188h28a12,12,0,0,0,12-12V96C244,80.56,230.84,68,214.67,68ZM76,52H180V68H76ZM180,204H76V172H180Zm40-40H204v-4a12,12,0,0,0-12-12H64a12,12,0,0,0-12,12v4H36V96c0-2.17,2.44-4,5.33-4H214.67c2.89,0,5.33,1.83,5.33,4Zm-16-44a16,16,0,1,1-16-16A16,16,0,0,1,204,120Z"}))],["duotone",W.createElement(W.Fragment,null,W.createElement("path",{d:"M232,96v80H192V152H64v24H24V96c0-8.84,7.76-16,17.33-16H214.67C224.24,80,232,87.16,232,96Z",opacity:"0.2"}),W.createElement("path",{d:"M214.67,72H200V40a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V72H41.33C27.36,72,16,82.77,16,96v80a8,8,0,0,0,8,8H56v32a8,8,0,0,0,8,8H192a8,8,0,0,0,8-8V184h32a8,8,0,0,0,8-8V96C240,82.77,228.64,72,214.67,72ZM72,48H184V72H72ZM184,208H72V160H184Zm40-40H200V152a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8v16H32V96c0-4.41,4.19-8,9.33-8H214.67c5.14,0,9.33,3.59,9.33,8Zm-24-52a12,12,0,1,1-12-12A12,12,0,0,1,200,116Z"}))],["fill",W.createElement(W.Fragment,null,W.createElement("path",{d:"M240,96v80a8,8,0,0,1-8,8H200v32a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V184H24a8,8,0,0,1-8-8V96c0-13.23,11.36-24,25.33-24H56V40a8,8,0,0,1,8-8H192a8,8,0,0,1,8,8V72h14.67C228.64,72,240,82.77,240,96ZM72,72H184V48H72Zm112,88H72v48H184Zm16-44a12,12,0,1,0-12,12A12,12,0,0,0,200,116Z"}))],["light",W.createElement(W.Fragment,null,W.createElement("path",{d:"M214.67,74H198V40a6,6,0,0,0-6-6H64a6,6,0,0,0-6,6V74H41.33C28.47,74,18,83.87,18,96v80a6,6,0,0,0,6,6H58v34a6,6,0,0,0,6,6H192a6,6,0,0,0,6-6V182h34a6,6,0,0,0,6-6V96C238,83.87,227.53,74,214.67,74ZM70,46H186V74H70ZM186,210H70V158H186Zm40-40H198V152a6,6,0,0,0-6-6H64a6,6,0,0,0-6,6v18H30V96c0-5.51,5.08-10,11.33-10H214.67C220.92,86,226,90.49,226,96Zm-28-54a10,10,0,1,1-10-10A10,10,0,0,1,198,116Z"}))],["regular",W.createElement(W.Fragment,null,W.createElement("path",{d:"M214.67,72H200V40a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8V72H41.33C27.36,72,16,82.77,16,96v80a8,8,0,0,0,8,8H56v32a8,8,0,0,0,8,8H192a8,8,0,0,0,8-8V184h32a8,8,0,0,0,8-8V96C240,82.77,228.64,72,214.67,72ZM72,48H184V72H72ZM184,208H72V160H184Zm40-40H200V152a8,8,0,0,0-8-8H64a8,8,0,0,0-8,8v16H32V96c0-4.41,4.19-8,9.33-8H214.67c5.14,0,9.33,3.59,9.33,8Zm-24-52a12,12,0,1,1-12-12A12,12,0,0,1,200,116Z"}))],["thin",W.createElement(W.Fragment,null,W.createElement("path",{d:"M214.67,76H196V40a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4V76H41.33C29.57,76,20,85,20,96v80a4,4,0,0,0,4,4H60v36a4,4,0,0,0,4,4H192a4,4,0,0,0,4-4V180h36a4,4,0,0,0,4-4V96C236,85,226.43,76,214.67,76ZM68,44H188V76H68ZM188,212H68V156H188Zm40-40H196V152a4,4,0,0,0-4-4H64a4,4,0,0,0-4,4v20H28V96c0-6.62,6-12,13.33-12H214.67C222,84,228,89.38,228,96Zm-32-56a8,8,0,1,1-8-8A8,8,0,0,1,196,116Z"}))]]),J=W.forwardRef((e,t)=>W.createElement($.default,{ref:t,...e,weights:K}));J.displayName="PrinterIcon";let X={type:"code",component:function(){return(0,x.jsxs)(M,{variant:"filled",defaultValue:"photos",order:3,mih:200,children:[(0,x.jsxs)(M.Item,{value:"photos",children:[(0,x.jsx)(M.Control,{icon:(0,x.jsx)(q.ImageIcon,{size:22,color:"var(--mantine-color-dimmed)"}),children:"Recent photos"}),(0,x.jsx)(M.Panel,{children:"Content"})]}),(0,x.jsxs)(M.Item,{value:"print",children:[(0,x.jsx)(M.Control,{icon:(0,x.jsx)(J,{size:22,color:"var(--mantine-color-dimmed)"}),children:"Print photos"}),(0,x.jsx)(M.Panel,{children:"Content"})]}),(0,x.jsxs)(M.Item,{value:"camera",children:[(0,x.jsx)(M.Control,{icon:(0,x.jsx)(U,{size:22,color:"var(--mantine-color-dimmed)"}),children:"CameraIcon settings"}),(0,x.jsx)(M.Panel,{children:"Content"})]})]})},code:`
import { ImageIcon, PrinterIcon, CameraIcon } from '@phosphor-icons/react';
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion variant="filled" defaultValue="photos" order={3}>
      <Accordion.Item value="photos">
        <Accordion.Control
          icon={<ImageIcon size={22} color="var(--mantine-color-dimmed)" />}
        >
          Recent photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="print">
        <Accordion.Control
          icon={<PrinterIcon size={22} color="var(--mantine-color-dimmed)" />}
        >
          Print photos
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="camera">
        <Accordion.Control
          icon={<CameraIcon size={22} color="var(--mantine-color-dimmed)" />}
        >
          CameraIcon settings
        </Accordion.Control>
        <Accordion.Panel>Content</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
`,maxWidth:400,centered:!0,defaultExpanded:!1};var Q=e.i(89495),ee=e.i(658109),et=e.i(330573);function en(e){return(0,x.jsxs)(et.Center,{children:[(0,x.jsx)(M.Control,{...e}),(0,x.jsx)(ee.ActionIcon,{size:"lg",variant:"subtle",color:"gray","aria-label":"More options",children:(0,x.jsx)(Q.DotsThreeIcon,{size:20})})]})}let ea={type:"code",component:function(){return(0,x.jsxs)(M,{chevronPosition:"left",order:3,children:[(0,x.jsxs)(M.Item,{value:"item-1",children:[(0,x.jsx)(en,{children:"Control 1"}),(0,x.jsx)(M.Panel,{children:"Panel 1"})]}),(0,x.jsxs)(M.Item,{value:"item-2",children:[(0,x.jsx)(en,{children:"Control 2"}),(0,x.jsx)(M.Panel,{children:"Panel 2"})]}),(0,x.jsxs)(M.Item,{value:"item-3",children:[(0,x.jsx)(en,{children:"Control 3"}),(0,x.jsx)(M.Panel,{children:"Panel 3"})]})]})},code:`
import { Accordion, ActionIcon, AccordionControlProps, Center } from '@mantine/core';
import { DotsThreeIcon } from '@phosphor-icons/react';

function AccordionControl(props: AccordionControlProps) {
  return (
    <Center>
      <Accordion.Control {...props} />
      <ActionIcon size="lg" variant="subtle" color="gray" aria-label="More options">
        <DotsThreeIcon size={20} />
      </ActionIcon>
    </Center>
  );
}

function Demo() {
  return (
    <Accordion chevronPosition="left" order={3}>
      <Accordion.Item value="item-1">
        <AccordionControl>Control 1</AccordionControl>
        <Accordion.Panel>Panel 1</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-2">
        <AccordionControl>Control 2</AccordionControl>
        <Accordion.Panel>Panel 2</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="item-3">
        <AccordionControl>Control 3</AccordionControl>
        <Accordion.Panel>Panel 3</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
`,centered:!0,maxWidth:400};var ei={root:"m_333cc5d1",item:"m_3338c002",chevron:"m_67366eec"};let eo={type:"code",component:function(){return(0,x.jsx)(M,{defaultValue:"Apples",classNames:ei,variant:"filled",order:3,children:R.map(e=>(0,x.jsxs)(M.Item,{value:e.value,children:[(0,x.jsx)(M.Control,{icon:e.emoji,children:e.value}),(0,x.jsx)(M.Panel,{children:e.description})]},e.value))})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Accordion } from '@mantine/core';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion defaultValue="Apples" classNames={classes} variant="filled" order={3}>
      {items}
    </Accordion>
  );
}
`},{fileName:"Demo.module.css",code:`.root {
  border-radius: var(--mantine-radius-sm);
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
}

.item {
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-6));
  border: 1px solid transparent;
  position: relative;
  z-index: 0;
  transition: transform 150ms ease;

  &[data-active] {
    transform: scale(1.03);
    z-index: 1;
    background-color: var(--mantine-color-body);
    border-color: light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-4));
    box-shadow: var(--mantine-shadow-md);
    border-radius: var(--mantine-radius-md);
  }
}

.chevron {
  &[data-rotate] {
    transform: rotate(-90deg);
  }
}
`,language:"scss"},{fileName:"data.ts",code:L,language:"tsx"}],centered:!0,maxWidth:500},er=e=>`
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion order={3} ${e}>
      {/* ...content */}
    </Accordion>
  )
}
`,el={type:"code",component:()=>(0,x.jsx)(O,{transitionDuration:0}),code:er("transitionDuration={0}"),maxWidth:380,centered:!0},es={type:"code",component:()=>(0,x.jsx)(O,{transitionDuration:1e3}),code:er("transitionDuration={1000}"),maxWidth:380,centered:!0},ec={type:"code",component:function(){return(0,x.jsx)(O,{unstyled:!0})},code:`
import { Accordion } from '@mantine/core';

function Demo() {
  return (
    <Accordion order={3} unstyled>
      {/* ... Accordion items */}
    </Accordion>
  );
}
`};var ed=e.i(225190);let eu=`
import { Accordion } from '@mantine/core';
import { data } from './data';

function Demo() {
  const items = data.map((item) => (
    <Accordion.Item key={item.value} value={item.value}>
      <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
      <Accordion.Panel>{item.description}</Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion value="Apples" order={3}{{props}}>
      {items}
    </Accordion>
  );
}
`,em={type:"styles-api",data:ed.AccordionStylesApi,component:function(e){let t=R.map(e=>(0,x.jsxs)(M.Item,{value:e.value,children:[(0,x.jsx)(M.Control,{icon:e.emoji,children:e.value}),(0,x.jsx)(M.Panel,{children:e.description})]},e.value));return(0,x.jsx)(M,{value:"Apples",order:3,...e,children:t})},centered:!0,maxWidth:"100%",code:eu};var eh=(0,t.__exportAll)({chevron:()=>N,configurator:()=>_,customTransitions:()=>es,customize:()=>eo,disableCollapse:()=>F,disableTransitions:()=>el,disabled:()=>Y,icons:()=>X,label:()=>z,sideControls:()=>ea,stylesApi:()=>em,unstyled:()=>ec});e.s(["AccordionDemos",0,eh],670084)},197460,e=>{"use strict";var t=e.i(391398),n=e.i(38856),a=e.i(670084),i=e.i(803451),o=e.i(959870),r=e.i(341921),l=e.i(119764),s=e.i(753623),c=e.i(226605),d=e.i(943664),u=e.i(280958),m=e.i(241111),h=e.i(380272),p=e.i(832112);e.i(603441);var f=e.i(62558);e.i(457450);var g=e.i(418026);let b=(0,f.Layout)(g.MDX_DATA.Changelog950);function v(e){let f={a:"a",code:"code",h2:"h2",p:"p",...(0,n.useMDXComponents)(),...e.components},{Demo:g,SponsorButton:b}=f;return g||x("Demo",!0),b||x("SponsorButton",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f.h2,{id:"support-mantine-development",children:"Support Mantine development"}),"\n",(0,t.jsxs)(f.p,{children:["You can now sponsor Mantine development with ",(0,t.jsx)(f.a,{href:"https://opencollective.com/mantinedev",children:"OpenCollective"}),".\nAll funds are used to improve Mantine and create new features and components."]}),"\n",(0,t.jsx)(b,{}),"\n",(0,t.jsx)(f.h2,{id:"migration-to-oxc",children:"Migration to oxc"}),"\n",(0,t.jsxs)(f.p,{children:["Mantine has migrated its linting and formatting toolchain from ESLint and Prettier\nto ",(0,t.jsx)(f.a,{href:"https://oxc.rs",children:"oxc"})," – ",(0,t.jsx)(f.a,{href:"https://www.npmjs.com/package/oxlint",children:"oxlint"})," is now used\nas the linter and ",(0,t.jsx)(f.a,{href:"https://www.npmjs.com/package/oxfmt",children:"oxfmt"})," as the formatter. Both\ntools are written in Rust and are significantly faster than their predecessors, which\nmakes linting and formatting the entire codebase almost instant."]}),"\n",(0,t.jsxs)(f.p,{children:["The shared configuration is available as a new\n",(0,t.jsx)(f.a,{href:"/oxc-config-mantine",children:"oxc-config-mantine"})," package (a replacement for the previous\n",(0,t.jsx)(f.code,{children:"eslint-config-mantine"}),"). You can use it in your own projects to follow the same\ncode style and conventions as Mantine."]}),"\n",(0,t.jsx)(f.h2,{id:"native-level-select-in-date-pickers",children:"Native level select in date pickers"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/dates/date-picker",children:"DatePicker"})," and all other date picker components (",(0,t.jsx)(f.a,{href:"/dates/date-picker-input",children:"DatePickerInput"}),",\n",(0,t.jsx)(f.a,{href:"/dates/month-picker",children:"MonthPicker"}),", ",(0,t.jsx)(f.a,{href:"/dates/year-picker",children:"YearPicker"}),", ",(0,t.jsx)(f.a,{href:"/dates/date-time-picker",children:"DateTimePicker"}),", etc.)\nnow support the ",(0,t.jsx)(f.code,{children:"withNativeLevelSelect"})," prop. When enabled, it replaces the calendar header level button\nwith native ",(0,t.jsx)(f.code,{children:"<select>"})," elements, making it easy to quickly navigate to a specific month and year."]}),"\n",(0,t.jsx)(g,{data:r.DatePickerDemos.nativeLevelSelect}),"\n",(0,t.jsx)(f.h2,{id:"timeline-opposite-and-alternate-content",children:"Timeline opposite and alternate content"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/core/timeline",children:"Timeline"})," ",(0,t.jsx)(f.code,{children:"Timeline.Item"})," component now supports the ",(0,t.jsx)(f.code,{children:"opposite"})," prop that allows\nrendering content on the opposite side of the timeline. When any item has the ",(0,t.jsx)(f.code,{children:"opposite"})," prop,\nthe timeline switches to a centered layout with content on both sides of the line."]}),"\n",(0,t.jsx)(g,{data:h.TimelineDemos.opposite}),"\n",(0,t.jsxs)(f.p,{children:["Set the ",(0,t.jsx)(f.code,{children:"alternate"})," prop on individual ",(0,t.jsx)(f.code,{children:"Timeline.Item"})," components to switch\nthe position of content and opposite:"]}),"\n",(0,t.jsx)(g,{data:h.TimelineDemos.alternate}),"\n",(0,t.jsx)(f.h2,{id:"floatingwindow-resize-handle",children:"FloatingWindow resize handle"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/core/floating-window",children:"FloatingWindow"})," now supports a ",(0,t.jsx)(f.code,{children:"ResizeHandle"})," compound component\nthat allows users to resize the floating window by dragging a handle element.\nSet the ",(0,t.jsx)(f.code,{children:"dimensions"})," prop on ",(0,t.jsx)(f.code,{children:"FloatingWindow"})," to control resize constraints for both\nwidth (",(0,t.jsx)(f.code,{children:"initialWidth"}),", ",(0,t.jsx)(f.code,{children:"minWidth"}),", ",(0,t.jsx)(f.code,{children:"maxWidth"}),") and height (",(0,t.jsx)(f.code,{children:"initialHeight"}),", ",(0,t.jsx)(f.code,{children:"minHeight"}),", ",(0,t.jsx)(f.code,{children:"maxHeight"}),")."]}),"\n",(0,t.jsxs)(f.p,{children:["The resize handle is fully accessible – it supports keyboard interaction with\n",(0,t.jsx)(f.code,{children:"Arrow Left"}),"/",(0,t.jsx)(f.code,{children:"Arrow Right"})," keys for width, ",(0,t.jsx)(f.code,{children:"Arrow Up"}),"/",(0,t.jsx)(f.code,{children:"Arrow Down"})," for height (10px steps),\nand ",(0,t.jsx)(f.code,{children:"Home"}),"/",(0,t.jsx)(f.code,{children:"End"})," keys (jump to min/max size)."]}),"\n",(0,t.jsx)(g,{data:l.FloatingWindowDemos.resizeHandle}),"\n",(0,t.jsx)(f.h2,{id:"cascader-component",children:"Cascader component"}),"\n",(0,t.jsxs)(f.p,{children:["New ",(0,t.jsx)(f.a,{href:"/core/cascader",children:"Cascader"})," component allows selecting a value from hierarchical data\nby drilling down through cascading columns. Picking an option in one column reveals its\nchildren in a new column to the right, and the value is an ordered path from the root option\nto the selected node. It supports ",(0,t.jsx)(f.code,{children:"changeOnSelect"}),", ",(0,t.jsx)(f.code,{children:"hover"})," expand trigger, search, a flat list\nlayout for mobile, and full keyboard navigation."]}),"\n",(0,t.jsx)(g,{data:o.CascaderDemos.usage}),"\n",(0,t.jsx)(f.h2,{id:"sunburstchart-component",children:"SunburstChart component"}),"\n",(0,t.jsxs)(f.p,{children:["New ",(0,t.jsx)(f.a,{href:"/charts/sunburst-chart",children:"SunburstChart"})," component displays hierarchical data\nas concentric rings, similar to a treemap plotted in polar coordinates."]}),"\n",(0,t.jsx)(g,{data:u.SunburstChartDemos.usage}),"\n",(0,t.jsx)(f.h2,{id:"bulletchart-component",children:"BulletChart component"}),"\n",(0,t.jsxs)(f.p,{children:["New ",(0,t.jsx)(f.a,{href:"/charts/bullet-chart",children:"BulletChart"})," component displays a single measure against\na qualitative range, useful for comparing a primary value (such as revenue) against\na target and qualitative thresholds like poor, average, and good."]}),"\n",(0,t.jsx)(g,{data:i.BulletChartDemos.usage}),"\n",(0,t.jsx)(f.h2,{id:"charts-keyboard-navigation",children:"Charts keyboard navigation"}),"\n",(0,t.jsxs)(f.p,{children:["All ",(0,t.jsx)(f.a,{href:"/charts/getting-started/#keyboard-navigation",children:"@mantine/charts"})," components now expose the\n",(0,t.jsx)(f.code,{children:"accessibilityLayer"})," prop (",(0,t.jsx)(f.code,{children:"true"})," by default) that makes charts navigable with the keyboard.\nThe chart surface is focusable and displays the Mantine focus ring; once focused, the arrow keys\nmove the active tooltip point-by-point and ",(0,t.jsx)("kbd",{children:"Enter"})," toggles the tooltip, so users who do not\nuse a mouse can read the underlying values. The prop is supported by ",(0,t.jsx)(f.code,{children:"AreaChart"}),", ",(0,t.jsx)(f.code,{children:"BarChart"}),",\n",(0,t.jsx)(f.code,{children:"LineChart"}),", ",(0,t.jsx)(f.code,{children:"CompositeChart"}),", ",(0,t.jsx)(f.code,{children:"ScatterChart"}),", ",(0,t.jsx)(f.code,{children:"BubbleChart"}),", ",(0,t.jsx)(f.code,{children:"PieChart"}),", ",(0,t.jsx)(f.code,{children:"DonutChart"}),", ",(0,t.jsx)(f.code,{children:"RadarChart"}),",\n",(0,t.jsx)(f.code,{children:"RadialBarChart"})," and ",(0,t.jsx)(f.code,{children:"FunnelChart"})," components."]}),"\n",(0,t.jsx)(f.h2,{id:"charts-brush",children:"Charts brush"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/charts/area-chart",children:"AreaChart"}),", ",(0,t.jsx)(f.a,{href:"/charts/bar-chart",children:"BarChart"}),", ",(0,t.jsx)(f.a,{href:"/charts/line-chart",children:"LineChart"}),"\nand ",(0,t.jsx)(f.a,{href:"/charts/composite-chart",children:"CompositeChart"})," now support the ",(0,t.jsx)(f.code,{children:"withBrush"})," prop that displays a\nbrush (range selector) under the chart. Drag the brush handles to zoom into a subset of the data.\nUse the ",(0,t.jsx)(f.code,{children:"brushProps"})," prop to customize the underlying recharts ",(0,t.jsx)(f.code,{children:"Brush"}),", or render the new\nthemed ",(0,t.jsx)(f.code,{children:"ChartBrush"})," component as a child of the chart for full control."]}),"\n",(0,t.jsx)(g,{data:p.AreaChartDemos.brush}),"\n",(0,t.jsx)(f.h2,{id:"heatmap-month-labels-position",children:"Heatmap month labels position"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/charts/heatmap",children:"Heatmap"})," now supports ",(0,t.jsx)(f.code,{children:"monthLabelsPosition"})," prop that allows\ndisplaying month labels at the bottom of the heatmap instead of the top (default)."]}),"\n",(0,t.jsx)(g,{data:s.HeatmapDemos.monthLabelsPosition}),"\n",(0,t.jsx)(f.h2,{id:"accordion-disable-collapse",children:"Accordion disable collapse"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/core/accordion",children:"Accordion"})," now supports the ",(0,t.jsx)(f.code,{children:"disableCollapse"})," prop. When enabled in single\nmode (",(0,t.jsx)(f.code,{children:"multiple={false}"}),"), the open item cannot be collapsed by clicking it again, so one item\nalways stays open. Pair it with ",(0,t.jsx)(f.code,{children:"defaultValue"})," or ",(0,t.jsx)(f.code,{children:"value"})," to guarantee that a section is open\nfrom the start – useful for settings panels, stepper-style flows and FAQ pages."]}),"\n",(0,t.jsx)(g,{data:a.AccordionDemos.disableCollapse}),"\n",(0,t.jsx)(f.h2,{id:"scrollarea-vertical-scrollbar-position",children:"ScrollArea vertical scrollbar position"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/core/scroll-area",children:"ScrollArea"})," now supports the ",(0,t.jsx)(f.code,{children:"verticalScrollbarPosition"})," prop that pins the\nvertical scrollbar to a physical side (",(0,t.jsx)(f.code,{children:"left"})," or ",(0,t.jsx)(f.code,{children:"right"}),") regardless of direction. This is useful\nfor RTL applications where users expect the vertical scrollbar to stay on the right, matching the\nbehavior of most desktop software. The prop also realigns the offset padding, the corner and the\nhorizontal scrollbar gap, so it works correctly with ",(0,t.jsx)(f.code,{children:"offsetScrollbars"})," and ",(0,t.jsx)(f.code,{children:'scrollbars="xy"'}),"."]}),"\n",(0,t.jsx)(g,{data:d.ScrollAreaDemos.verticalScrollbarPosition}),"\n",(0,t.jsx)(f.h2,{id:"schedule-intervals-larger-than-one-hour",children:"Schedule intervals larger than one hour"}),"\n",(0,t.jsxs)(f.p,{children:[(0,t.jsx)(f.a,{href:"/schedule/resources-day-view",children:"ResourcesDayView"})," and\n",(0,t.jsx)(f.a,{href:"/schedule/resources-week-view",children:"ResourcesWeekView"})," now support ",(0,t.jsx)(f.code,{children:"intervalMinutes"})," values\nlarger than 60. Previously the interval was capped at one hour – you can now set it to any\nwhole number of hours (for example ",(0,t.jsx)(f.code,{children:"120"})," or ",(0,t.jsx)(f.code,{children:"240"}),") to display multi-hour time slots. Values\nof 60 or less must still divide evenly into an hour; any value that does not keep the grid on\nhour boundaries falls back to ",(0,t.jsx)(f.code,{children:"60"}),"."]}),"\n",(0,t.jsx)(g,{data:c.ResourcesDayViewDemos.multiHourIntervals}),"\n",(0,t.jsx)(f.h2,{id:"new-example-table-virtualization",children:"New example: Table virtualization"}),"\n",(0,t.jsxs)(f.p,{children:["New ",(0,t.jsx)(f.a,{href:"/core/table",children:"Table"})," example demonstrates how to use ",(0,t.jsx)(f.code,{children:"Table.ScrollContainer"})," with\n",(0,t.jsx)(f.code,{children:"@tanstack/react-virtual"})," to efficiently render large datasets with 5,000 rows."]}),"\n",(0,t.jsx)(g,{data:m.TableDemos.virtualized})]})}function x(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(b,{...e,children:(0,t.jsx)(v,{...e})})}])},524326,(e,t,n)=>{let a="/changelog/9-5-0";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(197460)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);