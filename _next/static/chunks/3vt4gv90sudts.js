(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var o=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let n={};for(var l in e)o(n,l,{get:e[l],enumerable:!0});return t||o(n,Symbol.toStringTag,{value:"Module"}),n}])},257177,e=>{"use strict";var o=e.i(433512),t=e.i(481178),n=e.i(317477),l=e.i(44091),a=e.i(391466),s=e.i(956449),i=e.i(232471),r={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},d=e.i(391398);let c=(0,t.createVarsResolver)((e,{radius:t,color:l,gradient:a,variant:s,size:i,autoContrast:r,circle:d})=>{let c=e.variantColorResolver({color:l||e.primaryColor,theme:e,gradient:a,variant:s||"filled",autoContrast:r});return{root:{"--badge-height":(0,o.getSize)(i,"badge-height"),"--badge-padding-x":(0,o.getSize)(i,"badge-padding-x"),"--badge-fz":(0,o.getSize)(i,"badge-fz"),"--badge-radius":d||void 0===t?void 0:(0,o.getRadius)(t),"--badge-bg":l||s?c.background:void 0,"--badge-color":l||s?c.color:void 0,"--badge-bd":l||s?c.border:void 0,"--badge-dot-color":"dot"===s?(0,n.getThemeColor)(l,e):void 0}}}),u=(0,s.polymorphicFactory)(e=>{let o=(0,l.useProps)("Badge",null,e),{classNames:t,className:n,style:s,styles:u,unstyled:h,vars:m,radius:p,color:f,gradient:x,leftSection:j,rightSection:M,children:g,variant:y,fullWidth:v,autoContrast:C,circle:k,mod:B,attributes:b,...w}=o,D=(0,a.useStyles)({name:"Badge",props:o,classes:r,className:n,style:s,classNames:t,styles:u,unstyled:h,attributes:b,vars:m,varsResolver:c});return(0,d.jsxs)(i.Box,{variant:y,mod:[{block:v,circle:k,"with-right-section":!!M,"with-left-section":!!j},B],...D("root",{variant:y}),...w,children:[j&&(0,d.jsx)("span",{...D("section"),"data-position":"left",children:j}),(0,d.jsx)("span",{...D("label"),children:g}),M&&(0,d.jsx)("span",{...D("section"),"data-position":"right",children:M})]})});u.classes=r,u.varsResolver=c,u.displayName="@mantine/core/Badge",e.s(["Badge",0,u],257177)},123895,e=>{"use strict";var o=e.i(191788),t=e.i(171481);let n=new Map([["bold",o.createElement(o.Fragment,null,o.createElement("path",{d:"M128,20a108,108,0,0,0,0,216c22.27,0,45.69-6.73,62.64-18a12,12,0,1,0-13.29-20c-13,8.63-31.89,14-49.35,14a84,84,0,1,1,84-84c0,9.29-1.67,17.08-4.69,21.95-2.64,4.24-6,6.05-11.31,6.05s-8.67-1.81-11.31-6.05c-3-4.87-4.69-12.66-4.69-21.95V88a12,12,0,0,0-23.49-3.46,52,52,0,1,0,8.86,79.57C172.3,174.3,182.81,180,196,180c24.67,0,40-19.92,40-52A108.12,108.12,0,0,0,128,20Zm0,136a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z"}))],["duotone",o.createElement(o.Fragment,null,o.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),o.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",o.createElement(o.Fragment,null,o.createElement("path",{d:"M232,128c0,.51,0,1,0,1.52-.34,14.26-5.63,30.48-28,30.48-23.14,0-28-17.4-28-32V88a8,8,0,0,0-8.53-8A8.17,8.17,0,0,0,160,88.27v4a48,48,0,1,0,6.73,64.05,40.19,40.19,0,0,0,3.38,5C175.48,168,185.71,176,204,176a54.81,54.81,0,0,0,9.22-.75,4,4,0,0,1,4.09,6A104.05,104.05,0,0,1,125.91,232C71.13,230.9,26.2,186.86,24.08,132.11A104,104,0,1,1,232,128ZM96,128a32,32,0,1,0,32-32A32,32,0,0,0,96,128Z"}))],["light",o.createElement(o.Fragment,null,o.createElement("path",{d:"M128,26a102,102,0,0,0,0,204c21.13,0,43.31-6.35,59.32-17a6,6,0,0,0-6.65-10c-13.9,9.25-34.09,15-52.67,15a90,90,0,1,1,90-90c0,29.58-13.78,34-22,34s-22-4.42-22-34V88a6,6,0,0,0-12,0v9a46,46,0,1,0,4.34,56.32C171.76,166.6,182,174,196,174c21.29,0,34-17.2,34-46A102.12,102.12,0,0,0,128,26Zm0,136a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",o.createElement(o.Fragment,null,o.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",o.createElement(o.Fragment,null,o.createElement("path",{d:"M128,28a100,100,0,0,0,0,200c20.76,0,42.52-6.23,58.21-16.66a4,4,0,1,0-4.43-6.67C167.35,214.27,147.24,220,128,220a92,92,0,1,1,92-92c0,31.32-15,36-24,36s-24-4.68-24-36V88a4,4,0,0,0-8,0v14.75a44,44,0,1,0,2.82,45.94C171.46,163.58,181.66,172,196,172c20,0,32-16.45,32-44A100.11,100.11,0,0,0,128,28Zm0,136a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),l=o.forwardRef((e,l)=>o.createElement(t.default,{ref:l,...e,weights:n}));l.displayName="AtIcon",e.s(["AtIcon",0,l],123895)},541772,e=>{"use strict";var o=e.i(191788);e.s(["useDisclosure",0,function(e=!1,t={}){let[n,l]=(0,o.useState)(e),a=(0,o.useCallback)(()=>{l(e=>e||(t.onOpen?.(),!0))},[t.onOpen]),s=(0,o.useCallback)(()=>{l(e=>e?(t.onClose?.(),!1):e)},[t.onClose]);return[n,{open:a,close:s,toggle:(0,o.useCallback)(()=>{n?s():a()},[s,a,n]),set:l}]}])},477777,430731,637245,225147,811590,426611,32044,446817,e=>{"use strict";var o=e.i(232471);let[t,n]=(0,e.i(386179).createSafeContext)("ModalBase component was not found in tree");var l=e.i(191788),a=e.i(56206),s=e.i(391398);function i({className:e,...t}){let r,d=(r=n(),(0,l.useEffect)(()=>(r.setBodyMounted(!0),()=>r.setBodyMounted(!1)),[]),r.getBodyId()),c=n();return(0,s.jsx)(o.Box,{id:d,className:(0,a.default)({m_5df29311:!c.unstyled},e),...t})}i.displayName="@mantine/core/ModalBaseBody",e.s(["ModalBaseBody",0,i],477777);var r=e.i(802046);function d({className:e,onClick:o,...t}){let l=n();return(0,s.jsx)(r.CloseButton,{...t,onClick:e=>{l.onClose(),o?.(e)},className:(0,a.default)({m_606cb269:!l.unstyled},e),unstyled:l.unstyled})}d.displayName="@mantine/core/ModalBaseCloseButton",e.s(["ModalBaseCloseButton",0,d],430731);var c=e.i(470743),u=e.i(34515),h=e.i(22630);function m({transitionProps:e,className:o,innerProps:t,onKeyDown:l,style:i,ref:r,...d}){let p=n();return(0,s.jsx)(u.Transition,{mounted:p.opened,transition:"pop",...p.transitionProps,onExited:()=>{p.onExitTransitionEnd?.(),p.transitionProps?.onExited?.()},onEntered:()=>{p.onEnterTransitionEnd?.(),p.transitionProps?.onEntered?.()},...e,children:e=>(0,s.jsx)("div",{...t,className:(0,a.default)({m_60c222c7:!p.unstyled},t.className),children:(0,s.jsx)(h.FocusTrap,{active:p.opened&&p.trapFocus,innerRef:r,children:(0,s.jsx)(c.Paper,{...d,component:"section",role:"dialog",tabIndex:-1,"aria-modal":!0,"aria-describedby":p.bodyMounted?p.getBodyId():void 0,"aria-labelledby":p.titleMounted?p.getTitleId():void 0,style:[i,e],className:(0,a.default)({m_fd1ab0aa:!p.unstyled},o),unstyled:p.unstyled,children:d.children})})})})}function p({className:e,...t}){let l=n();return(0,s.jsx)(o.Box,{component:"header",className:(0,a.default)({m_b5489c3c:!l.unstyled},e),...t})}m.displayName="@mantine/core/ModalBaseContent",e.s(["ModalBaseContent",0,m],637245),e.s(["NativeScrollArea",0,function({children:e}){return(0,s.jsx)(s.Fragment,{children:e})}],225147),p.displayName="@mantine/core/ModalBaseHeader",e.s(["ModalBaseHeader",0,p],811590);var f=e.i(476273);let x={duration:200,timingFunction:"ease",transition:"fade"};function j({onClick:e,transitionProps:o,style:t,visible:l,...a}){let i,r=n(),d=(i=n(),{...x,...i.transitionProps,...o});return(0,s.jsx)(u.Transition,{mounted:void 0!==l?l:r.opened,...d,transition:"fade",children:o=>(0,s.jsx)(f.Overlay,{fixed:!0,style:[t,o],zIndex:r.zIndex,unstyled:r.unstyled,onClick:o=>{e?.(o),r.closeOnClickOutside&&r.onClose()},...a})})}j.displayName="@mantine/core/ModalBaseOverlay",e.s(["ModalBaseOverlay",0,j],426611);var M=e.i(749218),g=e.i(433512),y=e.i(164483),v=e.i(779861),C=e.i(484108),k=e.i(107315),B=e.i(133613),b=e.i(865823);function w({keepMounted:e,opened:n,onClose:a,id:i,transitionProps:r,onExitTransitionEnd:d,onEnterTransitionEnd:c,trapFocus:u,closeOnEscape:h,returnFocus:m,closeOnClickOutside:p,withinPortal:f,portalProps:x,lockScroll:j,children:D,zIndex:T,shadow:S,padding:A,__vars:O,unstyled:F,removeScrollProps:I,...E}){let{_id:P,titleMounted:z,bodyMounted:N,shouldLockScroll:R,setTitleMounted:Z,setBodyMounted:_}=function({id:e,transitionProps:o,opened:t,trapFocus:n,closeOnEscape:a,onClose:s,returnFocus:i}){let r=(0,k.useId)(e),[d,c]=(0,l.useState)(!1),[u,h]=(0,l.useState)(!1),m=function({opened:e,transitionDuration:o}){let[t,n]=(0,l.useState)(e),a=(0,l.useRef)(-1),s=(0,v.useReducedMotion)()?0:o;return(0,l.useEffect)(()=>(e?(n(!0),window.clearTimeout(a.current)):0===s?n(!1):a.current=window.setTimeout(()=>n(!1),s),()=>window.clearTimeout(a.current)),[e,s]),t}({opened:t,transitionDuration:"number"==typeof o?.duration?o?.duration:200});return(0,B.useWindowEvent)("keydown",e=>{"Escape"===e.key&&a&&!e.isComposing&&t&&e.target?.getAttribute("data-mantine-stop-propagation")!=="true"&&s()},{capture:!0}),(0,C.useFocusReturn)({opened:t,shouldReturnFocus:n&&i}),{_id:r,titleMounted:d,bodyMounted:u,shouldLockScroll:m,setTitleMounted:c,setBodyMounted:h}}({id:i,transitionProps:r,opened:n,trapFocus:u,closeOnEscape:h,onClose:a,returnFocus:m}),{key:G,...H}=I||{};return(0,s.jsx)(y.OptionalPortal,{...x,withinPortal:f,children:(0,s.jsx)(t,{value:{opened:n,onClose:a,closeOnClickOutside:p,onExitTransitionEnd:d,onEnterTransitionEnd:c,transitionProps:{...r,keepMounted:e},getTitleId:()=>`${P}-title`,getBodyId:()=>`${P}-body`,titleMounted:z,bodyMounted:N,setTitleMounted:Z,setBodyMounted:_,trapFocus:u,closeOnEscape:h,zIndex:T,unstyled:F},children:(0,s.jsx)(b.RemoveScroll,{enabled:R&&j,...H,children:(0,s.jsx)(o.Box,{...E,id:P,__vars:{...O,"--mb-z-index":(T||(0,M.getDefaultZIndex)("modal")).toString(),"--mb-shadow":(0,g.getShadow)(S),"--mb-padding":(0,g.getSpacing)(A)},children:D})},G)})})}function D({className:e,...t}){let i,r=(i=n(),(0,l.useEffect)(()=>(i.setTitleMounted(!0),()=>i.setTitleMounted(!1)),[]),i.getTitleId()),d=n();return(0,s.jsx)(o.Box,{component:"h2",className:(0,a.default)({m_615af6c9:!d.unstyled},e),id:r,...t})}w.displayName="@mantine/core/ModalBase",e.s(["ModalBase",0,w],32044),D.displayName="@mantine/core/ModalBaseTitle",e.s(["ModalBaseTitle",0,D],446817)},424302,e=>{"use strict";var o=e.i(749218),t=e.i(44091),n=e.i(275519),l={root:"m_9df02822",content:"m_54c44539",inner:"m_1f958f16",header:"m_d0e2b9cd"},a=e.i(477777);let[s,i]=(0,e.i(386179).createSafeContext)("Modal component was not found in tree");var r=e.i(391398);let d=(0,n.factory)(e=>{let{classNames:o,className:n,style:l,styles:s,vars:d,...c}=(0,t.useProps)("ModalBody",null,e);return(0,r.jsx)(a.ModalBaseBody,{...i().getStyles("body",{classNames:o,style:l,styles:s,className:n}),...c})});d.classes=l,d.displayName="@mantine/core/ModalBody";var c=e.i(430731);let u=(0,n.factory)(e=>{let{classNames:o,className:n,style:l,styles:a,vars:s,...d}=(0,t.useProps)("ModalCloseButton",null,e);return(0,r.jsx)(c.ModalBaseCloseButton,{...i().getStyles("close",{classNames:o,style:l,styles:a,className:n}),...d})});u.classes=l,u.displayName="@mantine/core/ModalCloseButton";var h=e.i(779177),m=e.i(637245),p=e.i(225147);let f=(0,n.factory)(e=>{let{classNames:o,className:n,style:l,styles:a,vars:s,children:d,__hidden:c,...u}=(0,t.useProps)("ModalContent",null,e),f=i(),x=f.scrollAreaComponent||p.NativeScrollArea;return(0,r.jsx)(m.ModalBaseContent,{...f.getStyles("content",{className:n,style:l,styles:a,classNames:o}),innerProps:f.getStyles("inner",{className:n,style:l,styles:a,classNames:o}),"data-full-screen":f.fullScreen||void 0,"data-modal-content":!0,"data-hidden":c||void 0,...u,children:(0,r.jsx)(x,{style:{maxHeight:f.fullScreen?"100dvh":`calc(100dvh - (${(0,h.rem)(f.yOffset)} * 2))`},children:d})})});f.classes=l,f.displayName="@mantine/core/ModalContent";var x=e.i(811590);let j=(0,n.factory)(e=>{let{classNames:o,className:n,style:l,styles:a,vars:s,...d}=(0,t.useProps)("ModalHeader",null,e);return(0,r.jsx)(x.ModalBaseHeader,{...i().getStyles("header",{classNames:o,style:l,styles:a,className:n}),...d})});j.classes=l,j.displayName="@mantine/core/ModalHeader";var M=e.i(426611);let g=(0,n.factory)(e=>{let{classNames:o,className:n,style:l,styles:a,vars:s,...d}=(0,t.useProps)("ModalOverlay",null,e);return(0,r.jsx)(M.ModalBaseOverlay,{...i().getStyles("overlay",{classNames:o,style:l,styles:a,className:n}),...d})});g.classes=l,g.displayName="@mantine/core/ModalOverlay";var y=e.i(433512),v=e.i(481178),C=e.i(391466),k=e.i(19300),B=e.i(32044);let b={__staticSelector:"Modal",closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:(0,o.getDefaultZIndex)("modal"),transitionProps:{duration:200,transition:"fade-down"},yOffset:"5dvh"},w=(0,v.createVarsResolver)((e,{radius:o,size:t,yOffset:n,xOffset:l})=>({root:{"--modal-radius":void 0===o?void 0:(0,y.getRadius)(o),"--modal-size":(0,y.getSize)(t,"modal-size"),"--modal-y-offset":(0,h.rem)(n),"--modal-x-offset":(0,h.rem)(l)}})),D=(0,n.factory)(e=>{let o=(0,t.useProps)("ModalRoot",b,e),{classNames:n,className:a,style:i,styles:d,unstyled:c,vars:u,yOffset:h,scrollAreaComponent:m,radius:p,fullScreen:f,centered:x,xOffset:j,__staticSelector:M,attributes:g,...y}=o,v=(0,C.useStyles)({name:M,classes:l,props:o,className:a,style:i,classNames:n,styles:d,unstyled:c,attributes:g,vars:u,varsResolver:w});return(0,r.jsx)(s,{value:{yOffset:h,scrollAreaComponent:m,getStyles:v,fullScreen:f},children:(0,r.jsx)(B.ModalBase,{...v("root"),"data-full-screen":f||void 0,"data-centered":x||void 0,"data-offset-scrollbars":m===k.ScrollArea.Autosize||void 0,unstyled:c,...y})})});D.classes=l,D.varsResolver=w,D.displayName="@mantine/core/ModalRoot";var T=e.i(191788);let S=(0,T.createContext)(null);function A({children:e}){let[t,n]=(0,T.useState)([]),[l,a]=(0,T.useState)((0,o.getDefaultZIndex)("modal"));return(0,r.jsx)(S,{value:{stack:t,addModal:(e,o)=>{n(o=>[...new Set([...o,e])]),a(e=>"number"==typeof o&&"number"==typeof e?Math.max(e,o):e)},removeModal:e=>n(o=>o.filter(o=>o!==e)),getZIndex:e=>`calc(${l} + ${t.indexOf(e)} + 1)`,currentId:t[t.length-1],maxZIndex:l},children:e})}A.displayName="@mantine/core/ModalStack";var O=e.i(446817);let F=(0,n.factory)(e=>{let{classNames:o,className:n,style:l,styles:a,vars:s,...d}=(0,t.useProps)("ModalTitle",null,e);return(0,r.jsx)(O.ModalBaseTitle,{...i().getStyles("title",{classNames:o,style:l,styles:a,className:n}),...d})});F.classes=l,F.displayName="@mantine/core/ModalTitle";let I={closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:(0,o.getDefaultZIndex)("modal"),transitionProps:{duration:200,transition:"fade-down"},withOverlay:!0,withCloseButton:!0},E=(0,n.factory)(e=>{let{title:n,withOverlay:l,overlayProps:a,withCloseButton:s,closeButtonProps:i,children:c,radius:h,opened:m,stackId:p,zIndex:x,...M}=(0,t.useProps)("Modal",I,e),y=(0,T.use)(S),v=!!n||s,C=y&&p?{closeOnEscape:y.currentId===p,trapFocus:y.currentId===p,zIndex:y.getZIndex(p)}:{},k=!1!==l&&(p&&y?y.currentId===p:m);return(0,T.useEffect)(()=>{y&&p&&(m?y.addModal(p,x||(0,o.getDefaultZIndex)("modal")):y.removeModal(p))},[m,p,x]),(0,r.jsxs)(D,{radius:h,opened:m,zIndex:y&&p?y.getZIndex(p):x,...M,...C,children:[l&&(0,r.jsx)(g,{visible:k,transitionProps:y&&p?{duration:0}:void 0,...a}),(0,r.jsxs)(f,{radius:h,__hidden:!!y&&!!p&&!!m&&p!==y.currentId,children:[v&&(0,r.jsxs)(j,{children:[n&&(0,r.jsx)(F,{children:n}),s&&(0,r.jsx)(u,{...i})]}),(0,r.jsx)(d,{children:c})]})]})});E.classes=l,E.displayName="@mantine/core/Modal",E.Root=D,E.Overlay=g,E.Content=f,E.Body=d,E.Header=j,E.Title=F,E.CloseButton=u,E.Stack=A,e.s(["Modal",0,E],424302)},692385,e=>{"use strict";var o=e.i(852361),t=e.i(191788);let n={min:-1/0,max:1/0};e.s(["useCounter",0,function(e=0,l){let{min:a,max:s,step:i=1}={...n,...l},r=Math.abs(i),[d,c]=(0,t.useState)((0,o.clamp)(e,a,s));return[d,{increment:(0,t.useCallback)(()=>c(e=>(0,o.clamp)(e+r,a,s)),[a,s,r]),decrement:(0,t.useCallback)(()=>c(e=>(0,o.clamp)(e-r,a,s)),[a,s,r]),set:(0,t.useCallback)(e=>c((0,o.clamp)(e,a,s)),[a,s]),reset:(0,t.useCallback)(()=>c((0,o.clamp)(e,a,s)),[e,a,s])}]}])},299593,e=>{"use strict";var o=e.i(191788),t=e.i(171481);let n=new Map([["bold",o.createElement(o.Fragment,null,o.createElement("path",{d:"M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"}))],["duotone",o.createElement(o.Fragment,null,o.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),o.createElement("path",{d:"M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["fill",o.createElement(o.Fragment,null,o.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",o.createElement(o.Fragment,null,o.createElement("path",{d:"M164.24,100.24,136.48,128l27.76,27.76a6,6,0,1,1-8.48,8.48L128,136.48l-27.76,27.76a6,6,0,0,1-8.48-8.48L119.52,128,91.76,100.24a6,6,0,0,1,8.48-8.48L128,119.52l27.76-27.76a6,6,0,0,1,8.48,8.48ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"}))],["regular",o.createElement(o.Fragment,null,o.createElement("path",{d:"M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["thin",o.createElement(o.Fragment,null,o.createElement("path",{d:"M162.83,98.83,133.66,128l29.17,29.17a4,4,0,0,1-5.66,5.66L128,133.66,98.83,162.83a4,4,0,0,1-5.66-5.66L122.34,128,93.17,98.83a4,4,0,0,1,5.66-5.66L128,122.34l29.17-29.17a4,4,0,1,1,5.66,5.66ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"}))]]),l=o.forwardRef((e,l)=>o.createElement(t.default,{ref:l,...e,weights:n}));l.displayName="XCircleIcon",e.s(["XCircleIcon",0,l],299593)},323121,e=>{"use strict";var o=e.i(191788);function t(e){let t=e.reduce((e,o)=>({...e,[o]:!1}),{}),[n,l]=(0,o.useState)(t),a=(0,o.useCallback)(e=>{l(o=>({...o,[e]:!0}))},[]),s=(0,o.useCallback)(e=>l(o=>({...o,[e]:!1})),[]),i=(0,o.useCallback)(e=>l(o=>({...o,[e]:!o[e]})),[]);return{state:n,open:a,close:s,closeAll:(0,o.useCallback)(()=>l(t),[]),toggle:i,register:(0,o.useCallback)(e=>({opened:n[e],onClose:()=>s(e),stackId:e}),[n])}}e.s(["useDrawersStack",0,t,"useModalsStack",0,t])},18584,e=>{"use strict";var o=e.i(648863),t=e.i(29260),n=e.i(485108),l=e.i(424302),a=e.i(391398),s=e.i(541772);let i={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:o,close:i}]=(0,s.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Modal,{opened:e,onClose:i,title:"Authentication",children:(0,a.jsx)(t.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,a.jsx)(n.Button,{variant:"default",onClick:o,children:"Open modal"})]})}},r={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        Modal without header, press escape or click on overlay to close
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}

`,centered:!0,component:function(){let[e,{open:o,close:t}]=(0,s.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Modal,{opened:e,onClose:t,withCloseButton:!1,children:"Modal without header, press escape or click on overlay to close"}),(0,a.jsx)(n.Button,{variant:"default",onClick:o,children:"Open modal"})]})}};var d=e.i(191788),c=e.i(725695);let u=["xs","sm","md","lg","xl","55rem","70%","100%"],h={type:"code",component:function(){let[e,o]=(0,d.useState)(!1),[s,i]=(0,d.useState)("md"),r=u.map(e=>(0,a.jsx)(n.Button,{variant:"default",onClick:()=>{i(e),o(!0)},children:e},e));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Modal,{opened:e,onClose:()=>o(!1),title:"Introduce yourself!",size:s,children:(0,a.jsx)(t.AuthenticationForm,{noPadding:!0,noShadow:!0})}),(0,a.jsx)(c.Group,{justify:"center",children:r})]})}},m={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 3,
        }}
      >
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:o,close:i}]=(0,s.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Modal,{opened:e,onClose:i,title:"Authentication",overlayProps:{backgroundOpacity:.55,blur:3},children:(0,a.jsx)(t.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,a.jsx)(n.Button,{variant:"default",onClick:o,children:"Open modal"})]})}},p={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Modal with scroll</p>);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Header is sticky">
        {content}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:o,close:t}]=(0,s.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Modal,{opened:e,onClose:t,title:"Header is sticky",children:Array(100).fill(0).map((e,o)=>(0,a.jsx)("p",{children:"Modal with scroll"},o))}),(0,a.jsx)(n.Button,{variant:"default",onClick:o,children:"Open modal"})]})}},f={type:"code",code:`
import { useState } from 'react';
import { Modal, Group, Button } from '@mantine/core';

function Demo() {
  const [noTransitionOpened, setNoTransitionOpened] = useState(false);
  const [slowTransitionOpened, setSlowTransitionOpened] = useState(false);

  return (
    <>
      <Modal
        opened={slowTransitionOpened}
        onClose={() => setSlowTransitionOpened(false)}
        title="Please consider this"
        transitionProps={{ transition: 'rotate-left' }}
      >
        rotate-left transition
      </Modal>

      <Modal
        opened={noTransitionOpened}
        onClose={() => setNoTransitionOpened(false)}
        title="Please consider this"
        transitionProps={{ transition: 'fade', duration: 600, timingFunction: 'linear' }}
      >
        fade transition 600ms linear transition
      </Modal>

      <Group justify="center">
        <Button onClick={() => setSlowTransitionOpened(true)} variant="default">
          Rotate left transition
        </Button>
        <Button onClick={() => setNoTransitionOpened(true)} variant="default">
          Fade transition
        </Button>
      </Group>
    </>
  );
}
`,component:function(){let[e,o]=(0,d.useState)(!1),[t,s]=(0,d.useState)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Modal,{opened:t,onClose:()=>s(!1),title:"Please consider this",transitionProps:{transition:"rotate-left"},children:"rotate-left transition"}),(0,a.jsx)(l.Modal,{opened:e,onClose:()=>o(!1),title:"Please consider this",transitionProps:{transition:"fade",duration:600,timingFunction:"linear"},children:"fade transition 600ms linear transition"}),(0,a.jsxs)(c.Group,{justify:"center",children:[(0,a.jsx)(n.Button,{onClick:()=>s(!0),variant:"default",children:"Rotate left transition"}),(0,a.jsx)(n.Button,{onClick:()=>o(!0),variant:"default",children:"Fade transition"})]})]})}},x={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" centered>
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open centered Modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:o,close:i}]=(0,s.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Modal,{opened:e,onClose:i,title:"Authentication",centered:!0,children:(0,a.jsx)(t.AuthenticationForm,{noPadding:!0,noShadow:!0})}),(0,a.jsx)(n.Button,{variant:"default",onClick:o,children:"Open centered Modal"})]})}};var j=e.i(883364);let M={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen
        radius={0}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:o,close:i}]=(0,s.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.Modal,{opened:e,onClose:i,title:"This is a fullscreen modal",fullScreen:!0,radius:0,transitionProps:{transition:"fade",duration:200},children:[(0,a.jsx)(j.Text,{mb:"xl",children:"It takes the entire screen and does not have overlay and border-radius, you can use it small screens to save up some space. It also has fade transition by default, but you can change that with transition prop. Now here is an authentication form used in previous examples to see the difference."}),(0,a.jsx)(t.AuthenticationForm,{noPadding:!0,noShadow:!0})]}),(0,a.jsx)(n.Button,{variant:"default",onClick:o,children:"Open modal"})]})}};var g=e.i(257177),y=e.i(692385);let v={type:"code",component:function(){let[e,{close:o,open:t}]=(0,s.useDisclosure)(!1),[i,{increment:r,decrement:d}]=(0,y.useCounter)(3,{min:0}),u=Array(i).fill(0).map((e,o)=>(0,a.jsxs)(g.Badge,{children:["Badge ",o]},o));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.Modal,{opened:e,onClose:o,size:"auto",title:"Modal size auto",children:[(0,a.jsx)(j.Text,{children:"Modal with size auto will fits its content"}),(0,a.jsx)(c.Group,{wrap:"nowrap",mt:"md",children:u}),(0,a.jsxs)(c.Group,{mt:"xl",children:[(0,a.jsx)(n.Button,{onClick:r,children:"Add badge"}),(0,a.jsx)(n.Button,{onClick:d,children:"Remove badge"})]})]}),(0,a.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})},centered:!0,code:`
import { useDisclosure, useCounter } from '@mantine/hooks';
import { Modal, Button, Group, Text, Badge } from '@mantine/core';

function Demo() {
  const [opened, { close, open }] = useDisclosure(false);
  const [count, { increment, decrement }] = useCounter(3, { min: 0 });

  const badges = Array(count)
    .fill(0)
    .map((_, index) => <Badge key={index}>Badge {index}</Badge>);

  return (
    <>
      <Modal opened={opened} onClose={close} size="auto" title="Modal size auto">
        <Text>Modal with size auto will fits its content</Text>

        <Group wrap="nowrap" mt="md">
          {badges}
        </Group>

        <Group mt="xl">
          <Button onClick={increment}>Add badge</Button>
          <Button onClick={decrement}>Remove badge</Button>
        </Group>
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`};var C=e.i(19300);let k={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, ScrollArea } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Modal with scroll</p>);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Header is sticky"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {content}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:o,close:t}]=(0,s.useDisclosure)(!1),i=Array(100).fill(0).map((e,o)=>(0,a.jsx)("p",{children:"Modal with scroll"},o));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Modal,{opened:e,onClose:t,title:"Header is sticky",scrollAreaComponent:C.ScrollArea.Autosize,children:i}),(0,a.jsx)(n.Button,{variant:"default",onClick:o,children:"Open modal"})]})}},B={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal.Root opened={opened} onClose={close}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Header>
            <Modal.Title>Modal title</Modal.Title>
            <Modal.CloseButton />
          </Modal.Header>
          <Modal.Body>Modal content</Modal.Body>
        </Modal.Content>
      </Modal.Root>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:o,close:t}]=(0,s.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.Modal.Root,{opened:e,onClose:t,children:[(0,a.jsx)(l.Modal.Overlay,{}),(0,a.jsxs)(l.Modal.Content,{children:[(0,a.jsxs)(l.Modal.Header,{children:[(0,a.jsx)(l.Modal.Title,{children:"Modal title"}),(0,a.jsx)(l.Modal.CloseButton,{})]}),(0,a.jsx)(l.Modal.Body,{children:"Modal content"})]})]}),(0,a.jsx)(n.Button,{variant:"default",onClick:o,children:"Open modal"})]})}},b={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication" yOffset="1vh" xOffset={0}>
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:o,close:i}]=(0,s.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Modal,{opened:e,onClose:i,title:"Authentication",yOffset:"1vh",xOffset:0,children:(0,a.jsx)(t.AuthenticationForm,{noPadding:!0,noShadow:!0})}),(0,a.jsx)(n.Button,{variant:"default",onClick:o,children:"Open modal"})]})}};var w=e.i(841209);let D={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Focus demo">
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:o,close:t}]=(0,s.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.Modal,{opened:e,onClose:t,title:"Focus demo",children:[(0,a.jsx)(w.TextInput,{label:"First input",placeholder:"First input"}),(0,a.jsx)(w.TextInput,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,a.jsx)(n.Button,{variant:"default",onClick:o,children:"Open modal"})]})}};var T=e.i(779177),S=e.i(839608);let A={type:"code",code:`
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: ${(0,T.em)(800)})');

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        fullScreen={isMobile}
        transitionProps={{ transition: 'fade', duration: 200 }}
      >
        The Modal will be full screen only on mobile
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:o,close:t}]=(0,s.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Modal,{opened:e,onClose:t,title:"This is a fullscreen modal",fullScreen:(0,S.useMediaQuery)(`(max-width: ${(0,T.em)(800)})`),transitionProps:{transition:"fade",duration:200},children:"The Modal will be full screen only on mobile"}),(0,a.jsx)(n.Button,{variant:"default",onClick:o,children:"Open modal"})]})}};var O=e.i(299593);let F={type:"code",code:`
import { XCircleIcon } from '@phosphor-icons/react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Authentication"
        closeButtonProps={{
          icon: <XCircleIcon size={20} />,
        }}
      >
        {/* Modal content */}
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:o,close:i}]=(0,s.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Modal,{opened:e,onClose:i,title:"Authentication",closeButtonProps:{icon:(0,a.jsx)(O.XCircleIcon,{size:20})},children:(0,a.jsx)(t.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,a.jsx)(n.Button,{variant:"default",onClick:o,children:"Open modal"})]})}};var I=e.i(22630);let E={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, TextInput, FocusTrap } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Focus demo">
        <FocusTrap.InitialFocus />
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Modal>

      <Button variant="default" onClick={open}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:o,close:t}]=(0,s.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.Modal,{opened:e,onClose:t,title:"Focus demo",children:[(0,a.jsx)(I.FocusTrap.InitialFocus,{}),(0,a.jsx)(w.TextInput,{label:"First input",placeholder:"First input"}),(0,a.jsx)(w.TextInput,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,a.jsx)(n.Button,{variant:"default",onClick:o,children:"Open modal"})]})}};var P=e.i(323121);let z={type:"code",code:`
import { Button, Group, Modal, useModalsStack } from '@mantine/core';

function Demo() {
  const stack = useModalsStack(['delete-page', 'confirm-action', 'really-confirm-action']);

  return (
    <>
      <Modal.Stack>
        <Modal {...stack.register('delete-page')} title="Delete this page?">
          Are you sure you want to delete this page? This action cannot be undone.
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={() => stack.open('confirm-action')} color="red">
              Delete
            </Button>
          </Group>
        </Modal>

        <Modal {...stack.register('confirm-action')} title="Confirm action">
          Are you sure you want to perform this action? This action cannot be undone. If you are
          sure, press confirm button below.
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={() => stack.open('really-confirm-action')} color="red">
              Confirm
            </Button>
          </Group>
        </Modal>

        <Modal {...stack.register('really-confirm-action')} title="Really confirm action">
          Jokes aside. You have confirmed this action. This is your last chance to cancel it. After
          you press confirm button below, action will be performed and cannot be undone. For real
          this time. Are you sure you want to proceed?
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={stack.closeAll} color="red">
              Confirm
            </Button>
          </Group>
        </Modal>
      </Modal.Stack>

      <Button variant="default" onClick={() => stack.open('delete-page')}>
        Open modal
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let e=(0,P.useModalsStack)(["delete-page","confirm-action","really-confirm-action"]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.Modal.Stack,{children:[(0,a.jsxs)(l.Modal,{...e.register("delete-page"),title:"Delete this page?",children:["Are you sure you want to delete this page? This action cannot be undone.",(0,a.jsxs)(c.Group,{mt:"lg",justify:"flex-end",children:[(0,a.jsx)(n.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,a.jsx)(n.Button,{onClick:()=>e.open("confirm-action"),color:"red",children:"Delete"})]})]}),(0,a.jsxs)(l.Modal,{...e.register("confirm-action"),title:"Confirm action",children:["Are you sure you want to perform this action? This action cannot be undone. If you are sure, press confirm button below.",(0,a.jsxs)(c.Group,{mt:"lg",justify:"flex-end",children:[(0,a.jsx)(n.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,a.jsx)(n.Button,{onClick:()=>e.open("really-confirm-action"),color:"red",children:"Confirm"})]})]}),(0,a.jsxs)(l.Modal,{...e.register("really-confirm-action"),title:"Really confirm action",children:["Jokes aside. You have confirmed this action. This is your last chance to cancel it. After you press confirm button below, action will be performed and cannot be undone. For real this time. Are you sure you want to proceed?",(0,a.jsxs)(c.Group,{mt:"lg",justify:"flex-end",children:[(0,a.jsx)(n.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,a.jsx)(n.Button,{onClick:e.closeAll,color:"red",children:"Confirm"})]})]})]}),(0,a.jsx)(n.Button,{variant:"default",onClick:()=>e.open("delete-page"),children:"Open modal"})]})}},N={type:"code",code:`
import { useState } from 'react';
import { Button, Group, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [firstOpened, firstHandlers] = useDisclosure(false);
  const [secondOpened, secondHandlers] = useDisclosure(false);
  const [modalData, setModalData] = useState({
    title: '',
    message: '',
  });

  return (
    <>
      <Modal
        opened={firstOpened}
        onClose={() => {
          firstHandlers.close();
          setModalData({ title: '', message: '' });
        }}
        title={modalData.title}
      >
        {modalData.message}
      </Modal>
      <Modal
        opened={secondOpened}
        onClose={secondHandlers.close}
        onExitTransitionEnd={() => setModalData({ title: '', message: '' })}
        title={modalData.title}
      >
        {modalData.message}
      </Modal>

      <Group>
        <Button
          onClick={() => {
            firstHandlers.open();
            setModalData({ title: 'Edit your profile', message: 'Imagine a form here' });
          }}
        >
          Clear data in onClose
        </Button>

        <Button
          onClick={() => {
            secondHandlers.open();
            setModalData({ title: 'Edit your profile', message: 'Imagine a form here' });
          }}
        >
          Clear data in onExitTransitionEnd
        </Button>
      </Group>
    </>
  );
}
`,centered:!0,component:function(){let[e,o]=(0,s.useDisclosure)(!1),[t,i]=(0,s.useDisclosure)(!1),[r,u]=(0,d.useState)({title:"",message:""});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Modal,{opened:e,onClose:()=>{o.close(),u({title:"",message:""})},transitionProps:{duration:300,exitDuration:1e3,transition:"fade-down"},title:r.title,children:r.message}),(0,a.jsx)(l.Modal,{opened:t,onClose:i.close,transitionProps:{duration:300,exitDuration:1e3,transition:"fade-down"},onExitTransitionEnd:()=>u({title:"",message:""}),title:r.title,children:r.message}),(0,a.jsxs)(c.Group,{children:[(0,a.jsx)(n.Button,{onClick:()=>{o.open(),u({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onClose"}),(0,a.jsx)(n.Button,{onClick:()=>{i.open(),u({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onExitTransitionEnd"})]})]})},defaultExpanded:!1};var R=(0,o.__exportAll)({centered:()=>x,closeIcon:()=>F,composition:()=>B,fullScreen:()=>M,fullScreenMobile:()=>A,header:()=>r,initialFocus:()=>D,initialFocusTrap:()=>E,offset:()=>b,overflow:()=>p,overlay:()=>m,scrollarea:()=>k,sizeAuto:()=>v,sizes:()=>h,stack:()=>z,transitionEnd:()=>N,transitions:()=>f,usage:()=>i});e.s(["ModalDemos",0,R],18584)},715171,e=>{"use strict";var o=e.i(391398),t=e.i(38856),n=e.i(18584);e.i(603441);var l=e.i(62558);e.i(457450);var a=e.i(418026);let s=(0,l.Layout)(a.MDX_DATA.Modal);function i(e){let l={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.useMDXComponents)(),...e.components},{Demo:a}=l;return a||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(a,{data:n.ModalDemos.usage}),"\n",(0,o.jsx)(l.h2,{id:"center-modal-vertically",children:"Center modal vertically"}),"\n",(0,o.jsx)(a,{data:n.ModalDemos.centered}),"\n",(0,o.jsx)(l.h2,{id:"remove-header",children:"Remove header"}),"\n",(0,o.jsxs)(l.p,{children:["To remove the header, set ",(0,o.jsx)(l.code,{children:"withCloseButton={false}"}),":"]}),"\n",(0,o.jsx)(a,{data:n.ModalDemos.header}),"\n",(0,o.jsx)(l.h2,{id:"change-size",children:"Change size"}),"\n",(0,o.jsxs)(l.p,{children:["You can change the modal width by setting the ",(0,o.jsx)(l.code,{children:"size"})," prop to a predefined size or any valid width, for example, ",(0,o.jsx)(l.code,{children:"55%"})," or ",(0,o.jsx)(l.code,{children:"50rem"}),".\nThe ",(0,o.jsx)(l.code,{children:"Modal"})," width cannot exceed ",(0,o.jsx)(l.code,{children:"100vw"}),"."]}),"\n",(0,o.jsx)(a,{data:n.ModalDemos.sizes}),"\n",(0,o.jsx)(l.h2,{id:"size-auto",children:"Size auto"}),"\n",(0,o.jsxs)(l.p,{children:[(0,o.jsx)(l.code,{children:"Modal"})," with ",(0,o.jsx)(l.code,{children:'size="auto"'})," will have width that fits its content:"]}),"\n",(0,o.jsx)(a,{data:n.ModalDemos.sizeAuto}),"\n",(0,o.jsx)(l.h2,{id:"fullscreen",children:"Fullscreen"}),"\n",(0,o.jsxs)(l.p,{children:["A fullscreen modal will take the entire screen. It is usually better to change the transition to ",(0,o.jsx)(l.code,{children:"fade"}),"\nwhen the ",(0,o.jsx)(l.code,{children:"fullScreen"})," prop is set:"]}),"\n",(0,o.jsx)(a,{data:n.ModalDemos.fullScreen}),"\n",(0,o.jsxs)(l.p,{children:["To switch Modal to fullscreen on devices with small screens only, use the ",(0,o.jsx)(l.a,{href:"/hooks/use-media-query/",children:"use-media-query"})," hook.\nThe ",(0,o.jsx)(l.code,{children:"size"})," prop is ignored if the ",(0,o.jsx)(l.code,{children:"fullScreen"})," prop is set:"]}),"\n",(0,o.jsx)(a,{data:n.ModalDemos.fullScreenMobile}),"\n",(0,o.jsx)(l.h2,{id:"customize-overlay",children:"Customize overlay"}),"\n",(0,o.jsxs)(l.p,{children:[(0,o.jsx)(l.code,{children:"Modal"})," uses the ",(0,o.jsx)(l.a,{href:"/core/overlay/",children:"Overlay"})," component. You can set any props that ",(0,o.jsx)(l.a,{href:"/core/overlay/",children:"Overlay"}),"\nsupports with ",(0,o.jsx)(l.code,{children:"overlayProps"}),":"]}),"\n",(0,o.jsx)(a,{data:n.ModalDemos.overlay}),"\n",(0,o.jsx)(l.h2,{id:"modal-with-scroll",children:"Modal with scroll"}),"\n",(0,o.jsx)(a,{data:n.ModalDemos.overflow}),"\n",(0,o.jsx)(l.h2,{id:"usage-with-scrollarea",children:"Usage with ScrollArea"}),"\n",(0,o.jsx)(a,{data:n.ModalDemos.scrollarea}),"\n",(0,o.jsx)(l.h2,{id:"change-offsets",children:"Change offsets"}),"\n",(0,o.jsxs)(l.p,{children:["Use ",(0,o.jsx)(l.code,{children:"xOffset"}),"/",(0,o.jsx)(l.code,{children:"yOffset"})," to configure the horizontal/vertical content offsets:"]}),"\n",(0,o.jsx)(a,{data:n.ModalDemos.offset}),"\n",(0,o.jsx)(l.h2,{id:"change-transitions",children:"Change transitions"}),"\n",(0,o.jsxs)(l.p,{children:[(0,o.jsx)(l.code,{children:"Modal"})," is built with the ",(0,o.jsx)(l.a,{href:"/core/transition/",children:"Transition"})," component. Use the ",(0,o.jsx)(l.code,{children:"transitionProps"}),"\nprop to customize any ",(0,o.jsx)(l.a,{href:"/core/transition/",children:"Transition"})," properties:"]}),"\n",(0,o.jsx)(a,{data:n.ModalDemos.transitions}),"\n",(0,o.jsx)(l.h2,{id:"onexittransitionend-and-onentertransitionend",children:"onExitTransitionEnd and onEnterTransitionEnd"}),"\n",(0,o.jsxs)(l.p,{children:["The ",(0,o.jsx)(l.code,{children:"onExitTransitionEnd"})," and ",(0,o.jsx)(l.code,{children:"onEnterTransitionEnd"})," props can be used to run code after\nthe exit/enter transition is finished. For example, this is useful when you want to clear\ndata after the modal is closed:"]}),"\n",(0,o.jsx)(a,{data:n.ModalDemos.transitionEnd}),"\n",(0,o.jsx)(l.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,o.jsxs)(l.p,{children:["Modal uses ",(0,o.jsx)(l.a,{href:"/core/focus-trap/",children:"FocusTrap"})," to trap focus. Add the ",(0,o.jsx)(l.code,{children:"data-autofocus"}),"\nattribute to the element that should receive initial focus."]}),"\n",(0,o.jsx)(a,{data:n.ModalDemos.initialFocus}),"\n",(0,o.jsxs)(l.p,{children:["If you do not want to focus any elements when the modal is opened, use the ",(0,o.jsx)(l.code,{children:"FocusTrap.InitialFocus"}),"\ncomponent to create a visually hidden element that will receive initial focus:"]}),"\n",(0,o.jsx)(a,{data:n.ModalDemos.initialFocusTrap}),"\n",(0,o.jsxs)(l.p,{children:["If you do not add the ",(0,o.jsx)(l.code,{children:"data-autofocus"})," attribute and do not use ",(0,o.jsx)(l.code,{children:"FocusTrap.InitialFocus"}),",\nthe modal will focus the first focusable element inside it, which is usually the close button."]}),"\n",(0,o.jsx)(l.h2,{id:"control-behavior",children:"Control behavior"}),"\n",(0,o.jsxs)(l.p,{children:["The following props can be used to control ",(0,o.jsx)(l.code,{children:"Modal"})," behavior.\nIn most cases, it is not recommended to turn these features off –\nit will make the component less accessible."]}),"\n",(0,o.jsxs)(l.ul,{children:["\n",(0,o.jsxs)(l.li,{children:[(0,o.jsx)(l.code,{children:"trapFocus"})," – determines whether focus should be trapped inside the modal"]}),"\n",(0,o.jsxs)(l.li,{children:[(0,o.jsx)(l.code,{children:"closeOnEscape"})," – determines whether the modal should be closed when the ",(0,o.jsx)(l.code,{children:"Escape"})," key is pressed"]}),"\n",(0,o.jsxs)(l.li,{children:[(0,o.jsx)(l.code,{children:"closeOnClickOutside"})," – determines whether the modal should be closed when the user clicks on the overlay"]}),"\n",(0,o.jsxs)(l.li,{children:[(0,o.jsx)(l.code,{children:"returnFocus"})," – determines whether focus should be returned to the element that was focused before the modal was opened"]}),"\n"]}),"\n",(0,o.jsx)(l.h2,{id:"react-remove-scroll-settings",children:"react-remove-scroll settings"}),"\n",(0,o.jsxs)(l.p,{children:[(0,o.jsx)(l.code,{children:"Modal"})," uses the ",(0,o.jsx)(l.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. You can pass props down to the ",(0,o.jsx)(l.code,{children:"RemoveScroll"})," component\nwith ",(0,o.jsx)(l.code,{children:"removeScrollProps"}),":"]}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Modal\n      removeScrollProps={{ allowPinchZoom: true }}\n      opened\n      onClose={() => {}}\n    />\n  );\n}\n"})}),"\n",(0,o.jsx)(l.h2,{id:"change-close-icon",children:"Change close icon"}),"\n",(0,o.jsxs)(l.p,{children:["Use ",(0,o.jsx)(l.code,{children:"closeButtonProps"})," to customize the close button:"]}),"\n",(0,o.jsx)(a,{data:n.ModalDemos.closeIcon}),"\n",(0,o.jsx)(l.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,o.jsxs)(l.p,{children:["You can use the following compound components to have full control over the ",(0,o.jsx)(l.code,{children:"Modal"})," rendering:"]}),"\n",(0,o.jsxs)(l.ul,{children:["\n",(0,o.jsxs)(l.li,{children:[(0,o.jsx)(l.code,{children:"Modal.Root"})," – context provider"]}),"\n",(0,o.jsxs)(l.li,{children:[(0,o.jsx)(l.code,{children:"Modal.Overlay"})," – render ",(0,o.jsx)(l.a,{href:"/core/overlay/",children:"Overlay"})]}),"\n",(0,o.jsxs)(l.li,{children:[(0,o.jsx)(l.code,{children:"Modal.Content"})," – main modal element, should include all modal content"]}),"\n",(0,o.jsxs)(l.li,{children:[(0,o.jsx)(l.code,{children:"Modal.Header"})," – sticky header, usually contains ",(0,o.jsx)(l.code,{children:"Modal.Title"})," and ",(0,o.jsx)(l.code,{children:"Modal.CloseButton"})]}),"\n",(0,o.jsxs)(l.li,{children:[(0,o.jsx)(l.code,{children:"Modal.Title"})," – ",(0,o.jsx)(l.code,{children:"h2"})," element, the ",(0,o.jsx)(l.code,{children:"aria-labelledby"})," of ",(0,o.jsx)(l.code,{children:"Modal.Content"})," is pointing to this element, usually rendered inside ",(0,o.jsx)(l.code,{children:"Modal.Header"})]}),"\n",(0,o.jsxs)(l.li,{children:[(0,o.jsx)(l.code,{children:"Modal.CloseButton"})," – close button, usually rendered inside ",(0,o.jsx)(l.code,{children:"Modal.Header"})]}),"\n",(0,o.jsxs)(l.li,{children:[(0,o.jsx)(l.code,{children:"Modal.Body"})," – a place for main content, the ",(0,o.jsx)(l.code,{children:"aria-describedby"})," of ",(0,o.jsx)(l.code,{children:"Modal.Content"})," is pointing to this element"]}),"\n"]}),"\n",(0,o.jsx)(a,{data:n.ModalDemos.composition}),"\n",(0,o.jsx)(l.h2,{id:"modalstack",children:"Modal.Stack"}),"\n",(0,o.jsxs)(l.p,{children:["Use the ",(0,o.jsx)(l.code,{children:"Modal.Stack"})," component to render multiple modals at the same time.\n",(0,o.jsx)(l.code,{children:"Modal.Stack"})," keeps track of opened modals, manages z-index values, focus trapping,\nand ",(0,o.jsx)(l.code,{children:"closeOnEscape"})," behavior. ",(0,o.jsx)(l.code,{children:"Modal.Stack"})," is designed to be used with the ",(0,o.jsx)(l.code,{children:"useModalsStack"})," hook."]}),"\n",(0,o.jsxs)(l.p,{children:["Differences from using multiple ",(0,o.jsx)(l.code,{children:"Modal"})," components:"]}),"\n",(0,o.jsxs)(l.ul,{children:["\n",(0,o.jsxs)(l.li,{children:[(0,o.jsx)(l.code,{children:"Modal.Stack"})," manages z-index values – modals that are opened later will always have a higher z-index value regardless of their order in the DOM"]}),"\n",(0,o.jsxs)(l.li,{children:[(0,o.jsx)(l.code,{children:"Modal.Stack"})," disables focus trap and ",(0,o.jsx)(l.code,{children:"Escape"})," key handling for all modals except the one that is currently opened"]}),"\n",(0,o.jsxs)(l.li,{children:["Modals that are not currently opened are present in the DOM but are hidden with ",(0,o.jsx)(l.code,{children:"opacity: 0"})," and ",(0,o.jsx)(l.code,{children:"pointer-events: none"})]}),"\n",(0,o.jsx)(l.li,{children:"Only one overlay is rendered at a time"}),"\n"]}),"\n",(0,o.jsx)(a,{data:n.ModalDemos.stack}),"\n",(0,o.jsxs)(l.p,{children:["Note that ",(0,o.jsx)(l.code,{children:"Modal.Stack"})," can only be used with the ",(0,o.jsx)(l.code,{children:"Modal"})," component. Components built with ",(0,o.jsx)(l.code,{children:"Modal.Root"}),"\nand other compound components are not compatible with ",(0,o.jsx)(l.code,{children:"Modal.Stack"}),"."]}),"\n",(0,o.jsx)(l.h2,{id:"usemodalsstack-hook",children:"useModalsStack hook"}),"\n",(0,o.jsxs)(l.p,{children:["The ",(0,o.jsx)(l.code,{children:"useModalsStack"})," hook provides an easy way to control multiple modals at the same time.\nIt accepts an array of unique modal IDs and returns an object with the following properties:"]}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{className:"language-tsx",children:"interface UseModalsStackReturnType<T extends string> {\n  // Current opened state of each modal\n  state: Record<T, boolean>;\n\n  // Opens modal with the given id\n  open: (id: T) => void;\n\n  // Closes modal with the given id\n  close: (id: T) => void;\n\n  // Toggles modal with the given id\n  toggle: (id: T) => void;\n\n  // Closes all modals within the stack\n  closeAll: () => void;\n\n  // Returns props for modal with the given id\n  register: (id: T) => {\n    opened: boolean;\n    onClose: () => void;\n    stackId: T;\n  };\n}\n"})}),"\n",(0,o.jsxs)(l.p,{children:["Example of using ",(0,o.jsx)(l.code,{children:"useModalsStack"})," with the ",(0,o.jsx)(l.code,{children:"Modal"})," component:"]}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{className:"language-tsx",children:"import { Modal, useModalsStack } from '@mantine/core';\n\nfunction Demo() {\n  const stack = useModalsStack(['first', 'second']);\n\n  return (\n    <>\n      <Modal {...stack.register('first')}>First</Modal>\n      <Modal {...stack.register('second')}>Second</Modal>\n      <Button onClick={() => stack.open('first')}>Open first</Button>\n    </>\n  );\n}\n"})}),"\n",(0,o.jsx)(l.h2,{id:"fixed-elements-offset",children:"Fixed elements offset"}),"\n",(0,o.jsxs)(l.p,{children:["The ",(0,o.jsx)(l.code,{children:"Modal"})," component uses the ",(0,o.jsx)(l.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. To properly size these elements, add a ",(0,o.jsx)(l.code,{children:"className"})," to them (",(0,o.jsx)(l.a,{href:"https://github.com/theKashey/react-remove-scroll#positionfixed-elements",children:"documentation"}),"):"]}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{className:"language-tsx",children:"import { RemoveScroll } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <div className={RemoveScroll.classNames.fullWidth}>\n        width: 100%\n      </div>\n      <div className={RemoveScroll.classNames.zeroRight}>\n        right: 0\n      </div>\n    </>\n  );\n}\n"})}),"\n",(0,o.jsx)(l.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(l.p,{children:["The ",(0,o.jsx)(l.code,{children:"Modal"})," component follows ",(0,o.jsx)(l.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,o.jsxs)(l.p,{children:["Set the ",(0,o.jsx)(l.code,{children:"title"})," prop to make the component accessible, which will add ",(0,o.jsx)(l.code,{children:"aria-labelledby"})," to the content element:"]}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return <Modal title=\"Modal label\" opened onClose={() => {}} />;\n}\n"})}),"\n",(0,o.jsxs)(l.p,{children:["To set the close button's ",(0,o.jsx)(l.code,{children:"aria-label"}),", use ",(0,o.jsx)(l.code,{children:"closeButtonProps"}),":"]}),"\n",(0,o.jsx)(l.pre,{children:(0,o.jsx)(l.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Modal\n      closeButtonProps={{ 'aria-label': 'Close modal' }}\n      opened\n      onClose={() => {}}\n    />\n  );\n}\n"})})]})}e.s(["default",0,function(e={}){return(0,o.jsx)(s,{...e,children:(0,o.jsx)(i,{...e})})}])},154924,(e,o,t)=>{let n="/core/modal";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(715171)]),o.hot&&o.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(o=>Promise.all(["static/chunks/22379_btw709h.js"].map(o=>e.l(o))).then(()=>o(493594)))},828805,e=>{e.v(o=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(o=>e.l(o))).then(()=>o(879466)))}]);