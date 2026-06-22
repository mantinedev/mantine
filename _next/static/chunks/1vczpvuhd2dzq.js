(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let r={};for(var o in e)t(r,o,{get:e[o],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:"Module"}),r}])},541772,e=>{"use strict";var t=e.i(191788);e.s(["useDisclosure",0,function(e=!1,n={}){let[r,o]=(0,t.useState)(e),a=(0,t.useCallback)(()=>{o(e=>e||(n.onOpen?.(),!0))},[n.onOpen]),s=(0,t.useCallback)(()=>{o(e=>e?(n.onClose?.(),!1):e)},[n.onClose]);return[r,{open:a,close:s,toggle:(0,t.useCallback)(()=>{r?s():a()},[s,a,r]),set:o}]}])},477777,430731,637245,225147,811590,426611,32044,446817,e=>{"use strict";var t=e.i(232471);let[n,r]=(0,e.i(386179).createSafeContext)("ModalBase component was not found in tree");var o=e.i(191788),a=e.i(56206),s=e.i(391398);function i({className:e,...n}){let l,c=(l=r(),(0,o.useEffect)(()=>(l.setBodyMounted(!0),()=>l.setBodyMounted(!1)),[]),l.getBodyId()),d=r();return(0,s.jsx)(t.Box,{id:c,className:(0,a.default)({m_5df29311:!d.unstyled},e),...n})}i.displayName="@mantine/core/ModalBaseBody",e.s(["ModalBaseBody",0,i],477777);var l=e.i(802046);function c({className:e,onClick:t,...n}){let o=r();return(0,s.jsx)(l.CloseButton,{...n,onClick:e=>{o.onClose(),t?.(e)},className:(0,a.default)({m_606cb269:!o.unstyled},e),unstyled:o.unstyled})}c.displayName="@mantine/core/ModalBaseCloseButton",e.s(["ModalBaseCloseButton",0,c],430731);var d=e.i(470743),u=e.i(34515),h=e.i(22630);function p({transitionProps:e,className:t,innerProps:n,onKeyDown:o,style:i,ref:l,...c}){let m=r();return(0,s.jsx)(u.Transition,{mounted:m.opened,transition:"pop",...m.transitionProps,onExited:()=>{m.onExitTransitionEnd?.(),m.transitionProps?.onExited?.()},onEntered:()=>{m.onEnterTransitionEnd?.(),m.transitionProps?.onEntered?.()},...e,children:e=>(0,s.jsx)("div",{...n,className:(0,a.default)({m_60c222c7:!m.unstyled},n.className),children:(0,s.jsx)(h.FocusTrap,{active:m.opened&&m.trapFocus,innerRef:l,children:(0,s.jsx)(d.Paper,{...c,component:"section",role:"dialog",tabIndex:-1,"aria-modal":!0,"aria-describedby":m.bodyMounted?m.getBodyId():void 0,"aria-labelledby":m.titleMounted?m.getTitleId():void 0,style:[i,e],className:(0,a.default)({m_fd1ab0aa:!m.unstyled},t),unstyled:m.unstyled,children:c.children})})})})}function m({className:e,...n}){let o=r();return(0,s.jsx)(t.Box,{component:"header",className:(0,a.default)({m_b5489c3c:!o.unstyled},e),...n})}p.displayName="@mantine/core/ModalBaseContent",e.s(["ModalBaseContent",0,p],637245),e.s(["NativeScrollArea",0,function({children:e}){return(0,s.jsx)(s.Fragment,{children:e})}],225147),m.displayName="@mantine/core/ModalBaseHeader",e.s(["ModalBaseHeader",0,m],811590);var w=e.i(476273);let f={duration:200,timingFunction:"ease",transition:"fade"};function x({onClick:e,transitionProps:t,style:n,visible:o,...a}){let i,l=r(),c=(i=r(),{...f,...i.transitionProps,...t});return(0,s.jsx)(u.Transition,{mounted:void 0!==o?o:l.opened,...c,transition:"fade",children:t=>(0,s.jsx)(w.Overlay,{fixed:!0,style:[n,t],zIndex:l.zIndex,unstyled:l.unstyled,onClick:t=>{e?.(t),l.closeOnClickOutside&&l.onClose()},...a})})}x.displayName="@mantine/core/ModalBaseOverlay",e.s(["ModalBaseOverlay",0,x],426611);var D=e.i(749218),j=e.i(433512),g=e.i(164483),y=e.i(779861),v=e.i(484108),C=e.i(107315),k=e.i(133613),B=e.i(865823);function b({keepMounted:e,opened:r,onClose:a,id:i,transitionProps:l,onExitTransitionEnd:c,onEnterTransitionEnd:d,trapFocus:u,closeOnEscape:h,returnFocus:p,closeOnClickOutside:m,withinPortal:w,portalProps:f,lockScroll:x,children:A,zIndex:S,shadow:T,padding:F,__vars:E,unstyled:I,removeScrollProps:O,...M}){let{_id:P,titleMounted:N,bodyMounted:Z,shouldLockScroll:z,setTitleMounted:R,setBodyMounted:_}=function({id:e,transitionProps:t,opened:n,trapFocus:r,closeOnEscape:a,onClose:s,returnFocus:i}){let l=(0,C.useId)(e),[c,d]=(0,o.useState)(!1),[u,h]=(0,o.useState)(!1),p=function({opened:e,transitionDuration:t}){let[n,r]=(0,o.useState)(e),a=(0,o.useRef)(-1),s=(0,y.useReducedMotion)()?0:t;return(0,o.useEffect)(()=>(e?(r(!0),window.clearTimeout(a.current)):0===s?r(!1):a.current=window.setTimeout(()=>r(!1),s),()=>window.clearTimeout(a.current)),[e,s]),n}({opened:n,transitionDuration:"number"==typeof t?.duration?t?.duration:200});return(0,k.useWindowEvent)("keydown",e=>{"Escape"===e.key&&a&&!e.isComposing&&n&&e.target?.getAttribute("data-mantine-stop-propagation")!=="true"&&s()},{capture:!0}),(0,v.useFocusReturn)({opened:n,shouldReturnFocus:r&&i}),{_id:l,titleMounted:c,bodyMounted:u,shouldLockScroll:p,setTitleMounted:d,setBodyMounted:h}}({id:i,transitionProps:l,opened:r,trapFocus:u,closeOnEscape:h,onClose:a,returnFocus:p}),{key:H,...L}=O||{};return(0,s.jsx)(g.OptionalPortal,{...f,withinPortal:w,children:(0,s.jsx)(n,{value:{opened:r,onClose:a,closeOnClickOutside:m,onExitTransitionEnd:c,onEnterTransitionEnd:d,transitionProps:{...l,keepMounted:e},getTitleId:()=>`${P}-title`,getBodyId:()=>`${P}-body`,titleMounted:N,bodyMounted:Z,setTitleMounted:R,setBodyMounted:_,trapFocus:u,closeOnEscape:h,zIndex:S,unstyled:I},children:(0,s.jsx)(B.RemoveScroll,{enabled:z&&x,...L,children:(0,s.jsx)(t.Box,{...M,id:P,__vars:{...E,"--mb-z-index":(S||(0,D.getDefaultZIndex)("modal")).toString(),"--mb-shadow":(0,j.getShadow)(T),"--mb-padding":(0,j.getSpacing)(F)},children:A})},H)})})}function A({className:e,...n}){let i,l=(i=r(),(0,o.useEffect)(()=>(i.setTitleMounted(!0),()=>i.setTitleMounted(!1)),[]),i.getTitleId()),c=r();return(0,s.jsx)(t.Box,{component:"h2",className:(0,a.default)({m_615af6c9:!c.unstyled},e),id:l,...n})}b.displayName="@mantine/core/ModalBase",e.s(["ModalBase",0,b],32044),A.displayName="@mantine/core/ModalBaseTitle",e.s(["ModalBaseTitle",0,A],446817)},123895,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20a108,108,0,0,0,0,216c22.27,0,45.69-6.73,62.64-18a12,12,0,1,0-13.29-20c-13,8.63-31.89,14-49.35,14a84,84,0,1,1,84-84c0,9.29-1.67,17.08-4.69,21.95-2.64,4.24-6,6.05-11.31,6.05s-8.67-1.81-11.31-6.05c-3-4.87-4.69-12.66-4.69-21.95V88a12,12,0,0,0-23.49-3.46,52,52,0,1,0,8.86,79.57C172.3,174.3,182.81,180,196,180c24.67,0,40-19.92,40-52A108.12,108.12,0,0,0,128,20Zm0,136a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232,128c0,.51,0,1,0,1.52-.34,14.26-5.63,30.48-28,30.48-23.14,0-28-17.4-28-32V88a8,8,0,0,0-8.53-8A8.17,8.17,0,0,0,160,88.27v4a48,48,0,1,0,6.73,64.05,40.19,40.19,0,0,0,3.38,5C175.48,168,185.71,176,204,176a54.81,54.81,0,0,0,9.22-.75,4,4,0,0,1,4.09,6A104.05,104.05,0,0,1,125.91,232C71.13,230.9,26.2,186.86,24.08,132.11A104,104,0,1,1,232,128ZM96,128a32,32,0,1,0,32-32A32,32,0,0,0,96,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26a102,102,0,0,0,0,204c21.13,0,43.31-6.35,59.32-17a6,6,0,0,0-6.65-10c-13.9,9.25-34.09,15-52.67,15a90,90,0,1,1,90-90c0,29.58-13.78,34-22,34s-22-4.42-22-34V88a6,6,0,0,0-12,0v9a46,46,0,1,0,4.34,56.32C171.76,166.6,182,174,196,174c21.29,0,34-17.2,34-46A102.12,102.12,0,0,0,128,26Zm0,136a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28a100,100,0,0,0,0,200c20.76,0,42.52-6.23,58.21-16.66a4,4,0,1,0-4.43-6.67C167.35,214.27,147.24,220,128,220a92,92,0,1,1,92-92c0,31.32-15,36-24,36s-24-4.68-24-36V88a4,4,0,0,0-8,0v14.75a44,44,0,1,0,2.82,45.94C171.46,163.58,181.66,172,196,172c20,0,32-16.45,32-44A100.11,100.11,0,0,0,128,28Zm0,136a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(n.default,{ref:o,...e,weights:r}));o.displayName="AtIcon",e.s(["AtIcon",0,o],123895)},299593,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M164.24,100.24,136.48,128l27.76,27.76a6,6,0,1,1-8.48,8.48L128,136.48l-27.76,27.76a6,6,0,0,1-8.48-8.48L119.52,128,91.76,100.24a6,6,0,0,1,8.48-8.48L128,119.52l27.76-27.76a6,6,0,0,1,8.48,8.48ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M162.83,98.83,133.66,128l29.17,29.17a4,4,0,0,1-5.66,5.66L128,133.66,98.83,162.83a4,4,0,0,1-5.66-5.66L122.34,128,93.17,98.83a4,4,0,0,1,5.66-5.66L128,122.34l29.17-29.17a4,4,0,1,1,5.66,5.66ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(n.default,{ref:o,...e,weights:r}));o.displayName="XCircleIcon",e.s(["XCircleIcon",0,o],299593)},323121,e=>{"use strict";var t=e.i(191788);function n(e){let n=e.reduce((e,t)=>({...e,[t]:!1}),{}),[r,o]=(0,t.useState)(n),a=(0,t.useCallback)(e=>{o(t=>({...t,[e]:!0}))},[]),s=(0,t.useCallback)(e=>o(t=>({...t,[e]:!1})),[]),i=(0,t.useCallback)(e=>o(t=>({...t,[e]:!t[e]})),[]);return{state:r,open:a,close:s,closeAll:(0,t.useCallback)(()=>o(n),[]),toggle:i,register:(0,t.useCallback)(e=>({opened:r[e],onClose:()=>s(e),stackId:e}),[r])}}e.s(["useDrawersStack",0,n,"useModalsStack",0,n])},191830,e=>{"use strict";var t=e.i(749218),n=e.i(44091),r=e.i(275519),o={root:"m_f11b401e",header:"m_5a7c2c9",content:"m_b8a05bbd",inner:"m_31cd769a"},a=e.i(477777);let[s,i]=(0,e.i(386179).createSafeContext)("Drawer component was not found in tree");var l=e.i(391398);let c=(0,r.factory)(e=>{let{classNames:t,className:r,style:o,styles:s,vars:c,...d}=(0,n.useProps)("DrawerBody",null,e);return(0,l.jsx)(a.ModalBaseBody,{...i().getStyles("body",{classNames:t,style:o,styles:s,className:r}),...d})});c.classes=o,c.displayName="@mantine/core/DrawerBody";var d=e.i(430731);let u=(0,r.factory)(e=>{let{classNames:t,className:r,style:o,styles:a,vars:s,...c}=(0,n.useProps)("DrawerCloseButton",null,e);return(0,l.jsx)(d.ModalBaseCloseButton,{...i().getStyles("close",{classNames:t,style:o,styles:a,className:r}),...c})});u.classes=o,u.displayName="@mantine/core/DrawerCloseButton";var h=e.i(637245),p=e.i(225147);let m=(0,r.factory)(e=>{let{classNames:t,className:r,style:o,styles:a,vars:s,children:c,radius:d,__hidden:u,...m}=(0,n.useProps)("DrawerContent",null,e),w=i(),f=w.scrollAreaComponent||p.NativeScrollArea;return(0,l.jsx)(h.ModalBaseContent,{...w.getStyles("content",{className:r,style:o,styles:a,classNames:t}),innerProps:w.getStyles("inner",{className:r,style:o,styles:a,classNames:t}),...m,radius:d||w.radius||0,"data-hidden":u||void 0,children:(0,l.jsx)(f,{style:{height:"calc(100vh - var(--drawer-offset) * 2)"},children:c})})});m.classes=o,m.displayName="@mantine/core/DrawerContent";var w=e.i(811590);let f=(0,r.factory)(e=>{let{classNames:t,className:r,style:o,styles:a,vars:s,...c}=(0,n.useProps)("DrawerHeader",null,e);return(0,l.jsx)(w.ModalBaseHeader,{...i().getStyles("header",{classNames:t,style:o,styles:a,className:r}),...c})});f.classes=o,f.displayName="@mantine/core/DrawerHeader";var x=e.i(426611);let D=(0,r.factory)(e=>{let{classNames:t,className:r,style:o,styles:a,vars:s,...c}=(0,n.useProps)("DrawerOverlay",null,e);return(0,l.jsx)(x.ModalBaseOverlay,{...i().getStyles("overlay",{classNames:t,style:o,styles:a,className:r}),...c})});D.classes=o,D.displayName="@mantine/core/DrawerOverlay";var j=e.i(779177),g=e.i(433512),y=e.i(481178),v=e.i(391466),C=e.i(323283),k=e.i(19300),B=e.i(32044);let b={top:"slide-down",bottom:"slide-up",left:"slide-right",right:"slide-left"},A={top:"slide-down",bottom:"slide-up",right:"slide-right",left:"slide-left"},S={closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:(0,t.getDefaultZIndex)("modal"),position:"left"},T=(0,y.createVarsResolver)((e,{position:t,size:n,offset:r})=>({root:{"--drawer-size":(0,g.getSize)(n,"drawer-size"),"--drawer-flex":function(e){if("top"===e||"bottom"===e)return"0 0 calc(100% - var(--drawer-offset, 0rem) * 2)"}(t),"--drawer-height":"left"===t||"right"===t?void 0:"var(--drawer-size)","--drawer-align":function(e){switch(e){case"top":return"flex-start";case"bottom":return"flex-end";default:return}}(t),"--drawer-justify":"right"===t?"flex-end":void 0,"--drawer-offset":(0,j.rem)(r)}})),F=(0,r.factory)(e=>{let t=(0,n.useProps)("DrawerRoot",S,e),{classNames:r,className:a,style:i,styles:c,unstyled:d,vars:u,scrollAreaComponent:h,position:p,transitionProps:m,radius:w,attributes:f,...x}=t,{dir:D}=(0,C.useDirection)(),j=(0,v.useStyles)({name:"Drawer",classes:o,props:t,className:a,style:i,classNames:r,styles:c,unstyled:d,attributes:f,vars:u,varsResolver:T}),g=("rtl"===D?A:b)[p];return(0,l.jsx)(s,{value:{scrollAreaComponent:h,getStyles:j,radius:w},children:(0,l.jsx)(B.ModalBase,{...j("root"),transitionProps:{transition:g,...m},"data-offset-scrollbars":h===k.ScrollArea.Autosize||void 0,unstyled:d,...x})})});F.classes=o,F.varsResolver=T,F.displayName="@mantine/core/DrawerRoot";var E=e.i(191788);let I=(0,E.createContext)(null);function O({children:e}){let[n,r]=(0,E.useState)([]),[o,a]=(0,E.useState)((0,t.getDefaultZIndex)("modal"));return(0,l.jsx)(I,{value:{stack:n,addModal:(e,t)=>{r(t=>[...new Set([...t,e])]),a(e=>"number"==typeof t&&"number"==typeof e?Math.max(e,t):e)},removeModal:e=>r(t=>t.filter(t=>t!==e)),getZIndex:e=>`calc(${o} + ${n.indexOf(e)} + 1)`,currentId:n[n.length-1],maxZIndex:o},children:e})}O.displayName="@mantine/core/DrawerStack";var M=e.i(446817);let P=(0,r.factory)(e=>{let{classNames:t,className:r,style:o,styles:a,vars:s,...c}=(0,n.useProps)("DrawerTitle",null,e);return(0,l.jsx)(M.ModalBaseTitle,{...i().getStyles("title",{classNames:t,style:o,styles:a,className:r}),...c})});P.classes=o,P.displayName="@mantine/core/DrawerTitle";let N={closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:(0,t.getDefaultZIndex)("modal"),withOverlay:!0,withCloseButton:!0},Z=(0,r.factory)(e=>{let{title:r,withOverlay:o,overlayProps:a,withCloseButton:s,closeButtonProps:i,children:d,opened:h,stackId:p,zIndex:w,...x}=(0,n.useProps)("Drawer",N,e),j=(0,E.use)(I),g=!!r||s,y=j&&p?{closeOnEscape:j.currentId===p,trapFocus:j.currentId===p,zIndex:j.getZIndex(p)}:{},v=!1!==o&&(p&&j?j.currentId===p:h);return(0,E.useEffect)(()=>{j&&p&&(h?j.addModal(p,w||(0,t.getDefaultZIndex)("modal")):j.removeModal(p))},[h,p,w]),(0,l.jsxs)(F,{opened:h,zIndex:j&&p?j.getZIndex(p):w,...x,...y,children:[o&&(0,l.jsx)(D,{visible:v,transitionProps:j&&p?{duration:0}:void 0,...a}),(0,l.jsxs)(m,{__hidden:!!j&&!!p&&!!h&&p!==j.currentId,children:[g&&(0,l.jsxs)(f,{children:[r&&(0,l.jsx)(P,{children:r}),s&&(0,l.jsx)(u,{...i})]}),(0,l.jsx)(c,{children:d})]})]})});Z.classes=o,Z.displayName="@mantine/core/Drawer",Z.Root=F,Z.Overlay=D,Z.Content=m,Z.Body=c,Z.Header=f,Z.Title=P,Z.CloseButton=u,Z.Stack=O,e.s(["Drawer",0,Z],191830)},231245,e=>{"use strict";var t=e.i(648863),n=e.i(29260),r=e.i(485108),o=e.i(191830),a=e.i(391398),s=e.i(541772);let i={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,s.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Drawer,{opened:e,onClose:i,title:"Authentication",children:(0,a.jsx)(n.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,a.jsx)(r.Button,{variant:"default",onClick:t,children:"Open Drawer"})]})}};var l=e.i(191788),c=e.i(725695);let d={type:"code",component:function(){let[e,t]=(0,l.useState)(!1),[n,s]=(0,l.useState)("top"),i=e=>{s(e),t(!0)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Drawer,{opened:e,onClose:()=>t(!1),padding:"md",position:n,withCloseButton:!1,children:"Press escape to close the drawer"}),(0,a.jsxs)(c.Group,{justify:"center",children:[(0,a.jsx)(r.Button,{variant:"default",onClick:()=>i("left"),children:"Left"}),(0,a.jsx)(r.Button,{variant:"default",onClick:()=>i("right"),children:"Right"}),(0,a.jsx)(r.Button,{variant:"default",onClick:()=>i("top"),children:"Top"}),(0,a.jsx)(r.Button,{variant:"default",onClick:()=>i("bottom"),children:"Bottom"})]})]})}},u={type:"code",component:function(){let[e,t]=(0,l.useState)(!1),[n,s]=(0,l.useState)("top"),i=["xs","sm","md","lg","xl","100%","40rem","25%"].map(e=>(0,a.jsx)(r.Button,{variant:"default",onClick:()=>{s(e),t(!0)},children:e},e));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Drawer,{opened:e,onClose:()=>t(!1),padding:"md",size:n,withCloseButton:!1,children:"Press escape to close the drawer"}),(0,a.jsx)(c.Group,{justify:"center",children:i})]})}},h={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        transitionProps={{ transition: 'rotate-left', duration: 150, timingFunction: 'linear' }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}

`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,s.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Drawer,{opened:e,onClose:i,title:"Authentication",transitionProps:{transition:"rotate-left",duration:150,timingFunction:"linear"},children:(0,a.jsx)(n.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,a.jsx)(r.Button,{variant:"default",onClick:t,children:"Open Drawer"})]})}},p={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,s.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Drawer,{opened:e,onClose:i,title:"Authentication",overlayProps:{backgroundOpacity:.5,blur:4},children:(0,a.jsx)(n.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,a.jsx)(r.Button,{variant:"default",onClick:t,children:"Open Drawer"})]})}},m={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer.Root opened={opened} onClose={close}>
        <Drawer.Overlay />
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Drawer title</Drawer.Title>
            <Drawer.CloseButton />
          </Drawer.Header>
          <Drawer.Body>Drawer content</Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,s.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.Drawer.Root,{opened:e,onClose:n,children:[(0,a.jsx)(o.Drawer.Overlay,{}),(0,a.jsxs)(o.Drawer.Content,{children:[(0,a.jsxs)(o.Drawer.Header,{children:[(0,a.jsx)(o.Drawer.Title,{children:"Drawer title"}),(0,a.jsx)(o.Drawer.CloseButton,{})]}),(0,a.jsx)(o.Drawer.Body,{children:"Drawer content"})]})]}),(0,a.jsx)(r.Button,{variant:"default",onClick:t,children:"Open Drawer"})]})}},w={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} withCloseButton={false}>
        Drawer without header, press escape or click on overlay to close
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}

`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,s.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Drawer,{opened:e,onClose:n,withCloseButton:!1,children:"Drawer without header, press escape or click on overlay to close"}),(0,a.jsx)(r.Button,{variant:"default",onClick:t,children:"Open Drawer"})]})}};var f=e.i(841209);let x={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, TextInput } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Focus demo">
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,s.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.Drawer,{opened:e,onClose:n,title:"Focus demo",children:[(0,a.jsx)(f.TextInput,{label:"First input",placeholder:"First input"}),(0,a.jsx)(f.TextInput,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,a.jsx)(r.Button,{variant:"default",onClick:t,children:"Open Drawer"})]})}};var D=e.i(19300);let j={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, ScrollArea } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Drawer with scroll</p>);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Header is sticky"
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {content}
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,s.useDisclosure)(!1),i=Array(100).fill(0).map((e,t)=>(0,a.jsx)("p",{children:"Drawer with scroll"},t));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Drawer,{opened:e,onClose:n,title:"Header is sticky",scrollAreaComponent:D.ScrollArea.Autosize,children:i}),(0,a.jsx)(r.Button,{variant:"default",onClick:t,children:"Open Drawer"})]})}},g={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  const content = Array(100)
    .fill(0)
    .map((_, index) => <p key={index}>Drawer with scroll</p>);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Header is sticky">
        {content}
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,s.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Drawer,{opened:e,onClose:n,title:"Header is sticky",children:Array(100).fill(0).map((e,t)=>(0,a.jsx)("p",{children:"Drawer with scroll"},t))}),(0,a.jsx)(r.Button,{variant:"default",onClick:t,children:"Open Drawer"})]})}},y={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer offset={8} radius="md" opened={opened} onClose={close} title="Authentication">
        {/* Drawer content */}
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,s.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Drawer,{offset:8,radius:"md",opened:e,onClose:i,title:"Authentication",children:(0,a.jsx)(n.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,a.jsx)(r.Button,{variant:"default",onClick:t,children:"Open Drawer"})]})}};var v=e.i(299593);let C={type:"code",code:`
import { XCircleIcon } from '@phosphor-icons/react';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Authentication"
        closeButtonProps={{
          icon: <XCircleIcon size={20} />,
        }}
      >
        {/* Drawer content */}
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,s.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Drawer,{opened:e,onClose:i,title:"Authentication",closeButtonProps:{icon:(0,a.jsx)(v.XCircleIcon,{size:20})},children:(0,a.jsx)(n.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,a.jsx)(r.Button,{variant:"default",onClick:t,children:"Open Drawer"})]})}};var k=e.i(22630);let B={type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, TextInput, FocusTrap } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer opened={opened} onClose={close} title="Focus demo">
        <FocusTrap.InitialFocus />
        <TextInput label="First input" placeholder="First input" />
        <TextInput
          data-autofocus
          label="Input with initial focus"
          placeholder="It has data-autofocus attribute"
          mt="md"
        />
      </Drawer>

      <Button variant="default" onClick={open}>
        Open Drawer
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,s.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.Drawer,{opened:e,onClose:n,title:"Focus demo",children:[(0,a.jsx)(k.FocusTrap.InitialFocus,{}),(0,a.jsx)(f.TextInput,{label:"First input",placeholder:"First input"}),(0,a.jsx)(f.TextInput,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,a.jsx)(r.Button,{variant:"default",onClick:t,children:"Open Drawer"})]})}};var b=e.i(323121);let A={type:"code",code:`
import { Button, Group, Drawer, useDrawersStack } from '@mantine/core';

function Demo() {
  const stack = useDrawersStack(['delete-page', 'confirm-action', 'really-confirm-action']);

  return (
    <>
      <Drawer.Stack>
        <Drawer {...stack.register('delete-page')} title="Delete this page?">
          Are you sure you want to delete this page? This action cannot be undone.
          <Group mt="lg" justify="flex-end">
            <Button onClick={stack.closeAll} variant="default">
              Cancel
            </Button>
            <Button onClick={() => stack.open('confirm-action')} color="red">
              Delete
            </Button>
          </Group>
        </Drawer>

        <Drawer {...stack.register('confirm-action')} title="Confirm action">
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
        </Drawer>

        <Drawer {...stack.register('really-confirm-action')} title="Really confirm action">
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
        </Drawer>
      </Drawer.Stack>

      <Button variant="default" onClick={() => stack.open('delete-page')}>
        Open drawer
      </Button>
    </>
  );
}
`,centered:!0,component:function(){let e=(0,b.useDrawersStack)(["delete-page","confirm-action","really-confirm-action"]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.Drawer.Stack,{children:[(0,a.jsxs)(o.Drawer,{...e.register("delete-page"),title:"Delete this page?",children:["Are you sure you want to delete this page? This action cannot be undone.",(0,a.jsxs)(c.Group,{mt:"lg",justify:"flex-end",children:[(0,a.jsx)(r.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,a.jsx)(r.Button,{onClick:()=>e.open("confirm-action"),color:"red",children:"Delete"})]})]}),(0,a.jsxs)(o.Drawer,{...e.register("confirm-action"),title:"Confirm action",children:["Are you sure you want to perform this action? This action cannot be undone. If you are sure, press confirm button below.",(0,a.jsxs)(c.Group,{mt:"lg",justify:"flex-end",children:[(0,a.jsx)(r.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,a.jsx)(r.Button,{onClick:()=>e.open("really-confirm-action"),color:"red",children:"Confirm"})]})]}),(0,a.jsxs)(o.Drawer,{...e.register("really-confirm-action"),title:"Really confirm action",children:["Jokes aside. You have confirmed this action. This is your last chance to cancel it. After you press confirm button below, action will be performed and cannot be undone. For real this time. Are you sure you want to proceed?",(0,a.jsxs)(c.Group,{mt:"lg",justify:"flex-end",children:[(0,a.jsx)(r.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,a.jsx)(r.Button,{onClick:e.closeAll,color:"red",children:"Confirm"})]})]})]}),(0,a.jsx)(r.Button,{variant:"default",onClick:()=>e.open("delete-page"),children:"Open drawer"})]})}},S={type:"code",code:`
import { useState } from 'react';
import { Button, Group, Drawer } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [firstOpened, firstHandlers] = useDisclosure(false);
  const [secondOpened, secondHandlers] = useDisclosure(false);
  const [drawerData, setDrawerData] = useState({
    title: '',
    message: '',
  });

  return (
    <>
      <Drawer
        opened={firstOpened}
        onClose={() => {
          firstHandlers.close();
          setDrawerData({ title: '', message: '' });
        }}
        title={drawerData.title}
      >
        {drawerData.message}
      </Drawer>
      <Drawer
        opened={secondOpened}
        onClose={secondHandlers.close}
        onExitTransitionEnd={() => setDrawerData({ title: '', message: '' })}
        title={drawerData.title}
      >
        {drawerData.message}
      </Drawer>

      <Group>
        <Button
          onClick={() => {
            firstHandlers.open();
            setDrawerData({ title: 'Edit your profile', message: 'Imagine a form here' });
          }}
        >
          Clear data in onClose
        </Button>

        <Button
          onClick={() => {
            secondHandlers.open();
            setDrawerData({ title: 'Edit your profile', message: 'Imagine a form here' });
          }}
        >
          Clear data in onExitTransitionEnd
        </Button>
      </Group>
    </>
  );
}
`,centered:!0,component:function(){let[e,t]=(0,s.useDisclosure)(!1),[n,i]=(0,s.useDisclosure)(!1),[d,u]=(0,l.useState)({title:"",message:""});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Drawer,{opened:e,onClose:()=>{t.close(),u({title:"",message:""})},transitionProps:{duration:300,exitDuration:1e3},title:d.title,children:d.message}),(0,a.jsx)(o.Drawer,{opened:n,onClose:i.close,transitionProps:{duration:300,exitDuration:1e3},onExitTransitionEnd:()=>u({title:"",message:""}),title:d.title,children:d.message}),(0,a.jsxs)(c.Group,{children:[(0,a.jsx)(r.Button,{onClick:()=>{t.open(),u({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onClose"}),(0,a.jsx)(r.Button,{onClick:()=>{i.open(),u({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onExitTransitionEnd"})]})]})},defaultExpanded:!1};var T=(0,t.__exportAll)({closeIcon:()=>C,composition:()=>m,header:()=>w,initialFocus:()=>x,initialFocusTrap:()=>B,offset:()=>y,overflow:()=>g,overlay:()=>p,positions:()=>d,scrollarea:()=>j,sizes:()=>u,stack:()=>A,transitionEnd:()=>S,transitions:()=>h,usage:()=>i});e.s(["DrawerDemos",0,T],231245)},360890,e=>{"use strict";var t=e.i(391398),n=e.i(38856),r=e.i(231245);e.i(603441);var o=e.i(62558);e.i(457450);var a=e.i(418026);let s=(0,o.Layout)(a.MDX_DATA.Drawer);function i(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.useMDXComponents)(),...e.components},{Demo:a}=o;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(a,{data:r.DrawerDemos.usage}),"\n",(0,t.jsx)(o.h2,{id:"position",children:"Position"}),"\n",(0,t.jsxs)(o.p,{children:["Drawer can be placed on ",(0,t.jsx)(o.code,{children:"left"})," (default), ",(0,t.jsx)(o.code,{children:"top"}),", ",(0,t.jsx)(o.code,{children:"right"})," and ",(0,t.jsx)(o.code,{children:"bottom"}),". Control the drawer position with the ",(0,t.jsx)(o.code,{children:"position"})," prop,\nfor example ",(0,t.jsx)(o.code,{children:'<Drawer position="top" />'}),"."]}),"\n",(0,t.jsx)(a,{data:r.DrawerDemos.positions}),"\n",(0,t.jsx)(o.h2,{id:"offset",children:"Offset"}),"\n",(0,t.jsxs)(o.p,{children:["Set the ",(0,t.jsx)(o.code,{children:"offset"})," prop to change the drawer offset from the edge of the viewport:"]}),"\n",(0,t.jsx)(a,{data:r.DrawerDemos.offset}),"\n",(0,t.jsx)(o.h2,{id:"customize-overlay",children:"Customize overlay"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Drawer"})," uses the ",(0,t.jsx)(o.a,{href:"/core/overlay/",children:"Overlay"})," component. You can set any props that ",(0,t.jsx)(o.a,{href:"/core/overlay/",children:"Overlay"}),"\nsupports with ",(0,t.jsx)(o.code,{children:"overlayProps"}),":"]}),"\n",(0,t.jsx)(a,{data:r.DrawerDemos.overlay}),"\n",(0,t.jsx)(o.h2,{id:"sizes",children:"Sizes"}),"\n",(0,t.jsxs)(o.p,{children:["You can change the drawer width/height (depends on ",(0,t.jsx)(o.code,{children:"position"}),") by setting the ",(0,t.jsx)(o.code,{children:"size"})," prop to a predefined size or any valid width,\nfor example, ",(0,t.jsx)(o.code,{children:'size="55%"'})," or ",(0,t.jsx)(o.code,{children:"size={200}"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:'import { Drawer } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Drawer position="right" size="xl" opened onClose={() => {}}>\n      {/* Drawer content */}\n    </Drawer>\n  );\n}\n'})}),"\n",(0,t.jsx)(a,{data:r.DrawerDemos.sizes}),"\n",(0,t.jsx)(o.h2,{id:"remove-header",children:"Remove header"}),"\n",(0,t.jsxs)(o.p,{children:["To remove the header, set ",(0,t.jsx)(o.code,{children:"withCloseButton={false}"})]}),"\n",(0,t.jsx)(a,{data:r.DrawerDemos.header}),"\n",(0,t.jsx)(o.h2,{id:"drawer-with-scroll",children:"Drawer with scroll"}),"\n",(0,t.jsx)(a,{data:r.DrawerDemos.overflow}),"\n",(0,t.jsx)(o.h2,{id:"usage-with-scrollarea",children:"Usage with ScrollArea"}),"\n",(0,t.jsx)(a,{data:r.DrawerDemos.scrollarea}),"\n",(0,t.jsx)(o.h2,{id:"change-transition",children:"Change transition"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Drawer"})," is built with the ",(0,t.jsx)(o.a,{href:"/core/transition/",children:"Transition"})," component. Use the ",(0,t.jsx)(o.code,{children:"transitionProps"}),"\nprop to customize any ",(0,t.jsx)(o.a,{href:"/core/transition/",children:"Transition"})," properties:"]}),"\n",(0,t.jsx)(a,{data:r.DrawerDemos.transitions}),"\n",(0,t.jsx)(o.h2,{id:"onexittransitionend-and-onentertransitionend",children:"onExitTransitionEnd and onEnterTransitionEnd"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"onExitTransitionEnd"})," and ",(0,t.jsx)(o.code,{children:"onEnterTransitionEnd"})," props can be used to run code after\nthe exit/enter transition is finished. For example, this is useful when you want to clear\ndata after the drawer is closed:"]}),"\n",(0,t.jsx)(a,{data:r.DrawerDemos.transitionEnd}),"\n",(0,t.jsx)(o.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Drawer"})," uses ",(0,t.jsx)(o.a,{href:"/core/focus-trap/",children:"FocusTrap"})," to trap focus. Add the ",(0,t.jsx)(o.code,{children:"data-autofocus"}),"\nattribute to the element that should receive initial focus."]}),"\n",(0,t.jsx)(a,{data:r.DrawerDemos.initialFocus}),"\n",(0,t.jsxs)(o.p,{children:["If you do not want to focus any elements when the drawer is opened, use the ",(0,t.jsx)(o.code,{children:"FocusTrap.InitialFocus"}),"\ncomponent to create a visually hidden element that will receive initial focus:"]}),"\n",(0,t.jsx)(a,{data:r.DrawerDemos.initialFocusTrap}),"\n",(0,t.jsxs)(o.p,{children:["If you do not add the ",(0,t.jsx)(o.code,{children:"data-autofocus"})," attribute and do not use ",(0,t.jsx)(o.code,{children:"FocusTrap.InitialFocus"}),",\nthe drawer will focus the first focusable element inside it which is usually the close button."]}),"\n",(0,t.jsx)(o.h2,{id:"control-behavior",children:"Control behavior"}),"\n",(0,t.jsxs)(o.p,{children:["The following props can be used to control ",(0,t.jsx)(o.code,{children:"Drawer"})," behavior.\nIn most cases it is not recommended to turn these features off –\nit will make the component less accessible."]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"trapFocus"})," – determines whether focus should be trapped inside drawer"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"closeOnEscape"})," – determines whether the drawer should be closed when ",(0,t.jsx)(o.code,{children:"Escape"})," key is pressed"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"closeOnClickOutside"})," – determines whether the drawer should be closed when user clicks on the overlay"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"returnFocus"})," – determines whether focus should be returned to the element that was focused before the drawer was opened"]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"react-remove-scroll-settings",children:"react-remove-scroll settings"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Drawer"})," uses ",(0,t.jsx)(o.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. You can pass props down to the ",(0,t.jsx)(o.code,{children:"RemoveScroll"})," component\nwith ",(0,t.jsx)(o.code,{children:"removeScrollProps"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { Drawer } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Drawer\n      removeScrollProps={{ allowPinchZoom: true }}\n      opened\n      onClose={() => {}}\n    >\n      {/* Drawer content */}\n    </Drawer>\n  );\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"change-close-icon",children:"Change close icon"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"closeButtonProps"})," to customize close button:"]}),"\n",(0,t.jsx)(a,{data:r.DrawerDemos.closeIcon}),"\n",(0,t.jsx)(o.h2,{id:"compound-components",children:"Compound components"}),"\n",(0,t.jsxs)(o.p,{children:["You can use the following compound components to have full control over the ",(0,t.jsx)(o.code,{children:"Drawer"})," rendering:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Drawer.Root"})," – context provider"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Drawer.Overlay"})," – render ",(0,t.jsx)(o.a,{href:"/core/overlay/",children:"Overlay"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Drawer.Content"})," – main drawer element, should include all drawer content"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Drawer.Header"})," – sticky header, usually contains ",(0,t.jsx)(o.code,{children:"Drawer.Title"})," and ",(0,t.jsx)(o.code,{children:"Drawer.CloseButton"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Drawer.Title"})," – ",(0,t.jsx)(o.code,{children:"h2"})," element, ",(0,t.jsx)(o.code,{children:"aria-labelledby"})," of ",(0,t.jsx)(o.code,{children:"Drawer.Content"})," is pointing to this element, usually is rendered inside ",(0,t.jsx)(o.code,{children:"Drawer.Header"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Drawer.CloseButton"})," – close button, usually rendered inside ",(0,t.jsx)(o.code,{children:"Drawer.Header"})]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Drawer.Body"})," – a place for main content, ",(0,t.jsx)(o.code,{children:"aria-describedby"})," of ",(0,t.jsx)(o.code,{children:"Drawer.Content"})," is pointing to this element"]}),"\n"]}),"\n",(0,t.jsx)(a,{data:r.DrawerDemos.composition}),"\n",(0,t.jsx)(o.h2,{id:"drawerstack",children:"Drawer.Stack"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"Drawer.Stack"})," component to render multiple drawers at the same time.\n",(0,t.jsx)(o.code,{children:"Drawer.Stack"})," keeps track of opened drawers, manages z-index values, focus trapping\nand ",(0,t.jsx)(o.code,{children:"closeOnEscape"})," behavior. ",(0,t.jsx)(o.code,{children:"Drawer.Stack"})," is designed to be used with ",(0,t.jsx)(o.code,{children:"useDrawersStack"})," hook."]}),"\n",(0,t.jsxs)(o.p,{children:["Differences from using multiple ",(0,t.jsx)(o.code,{children:"Drawer"})," components:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Drawer.Stack"})," manages z-index values – drawers that are opened later will always have higher z-index value disregarding their order in the DOM"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"Drawer.Stack"})," disables focus trap and ",(0,t.jsx)(o.code,{children:"Escape"})," key handling for all drawers except the one that is currently opened"]}),"\n",(0,t.jsxs)(o.li,{children:["Drawers that are not currently opened are present in the DOM but are hidden with ",(0,t.jsx)(o.code,{children:"opacity: 0"})," and ",(0,t.jsx)(o.code,{children:"pointer-events: none"})]}),"\n",(0,t.jsx)(o.li,{children:"Only one overlay is rendered at a time"}),"\n"]}),"\n",(0,t.jsx)(a,{data:r.DrawerDemos.stack}),"\n",(0,t.jsxs)(o.p,{children:["Note that ",(0,t.jsx)(o.code,{children:"Drawer.Stack"})," can only be used with ",(0,t.jsx)(o.code,{children:"Drawer"})," component. Components built with ",(0,t.jsx)(o.code,{children:"Drawer.Root"}),"\nand other compound components are not compatible with ",(0,t.jsx)(o.code,{children:"Drawer.Stack"}),"."]}),"\n",(0,t.jsx)(o.h2,{id:"usedrawersstack-hook",children:"useDrawersStack hook"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"useDrawersStack"})," hook provides an easy way to control multiple drawers at the same time.\nIt accepts an array of unique drawers ids and returns an object with the following properties:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"interface UseDrawersStackReturnType<T extends string> {\n  // Current opened state of each drawer\n  state: Record<T, boolean>;\n\n  // Opens drawer with the given id\n  open: (id: T) => void;\n\n  // Closes drawer with the given id\n  close: (id: T) => void;\n\n  // Toggles drawer with the given id\n  toggle: (id: T) => void;\n\n  // Closes all drawers within the stack\n  closeAll: () => void;\n\n  // Returns props for drawer with the given id\n  register: (id: T) => {\n    opened: boolean;\n    onClose: () => void;\n    stackId: T;\n  };\n}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["Example of using ",(0,t.jsx)(o.code,{children:"useDrawersStack"})," with ",(0,t.jsx)(o.code,{children:"Drawer"})," component:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { Drawer, useDrawersStack } from '@mantine/core';\n\nfunction Demo() {\n  const stack = useDrawersStack(['first', 'second']);\n\n  return (\n    <>\n      <Drawer {...stack.register('first')}>First</Drawer>\n      <Drawer {...stack.register('second')}>Second</Drawer>\n      <Button onClick={() => stack.open('first')}>Open first</Button>\n    </>\n  );\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"fixed-elements-offset",children:"Fixed elements offset"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Drawer"})," component uses ",(0,t.jsx)(o.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"\npackage to lock scroll. To properly size these ",(0,t.jsx)(o.code,{children:"elements"})," add a ",(0,t.jsx)(o.code,{children:"className"})," to them (",(0,t.jsx)(o.a,{href:"https://github.com/theKashey/react-remove-scroll#positionfixed-elements",children:"documentation"}),"):"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { RemoveScroll } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <>\n      <div className={RemoveScroll.classNames.fullWidth}>\n        width: 100%\n      </div>\n      <div className={RemoveScroll.classNames.zeroRight}>\n        right: 0\n      </div>\n    </>\n  );\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Drawer"})," component follows ",(0,t.jsx)(o.a,{href:"https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog",children:"WAI-ARIA recommendations"})," on accessibility."]}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"title"})," props to make component accessible, will add ",(0,t.jsx)(o.code,{children:"aria-labelledby"})," to the content element:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { Drawer } from '@mantine/core';\n\nfunction Demo() {\n  return <Drawer title=\"Drawer label\" opened onClose={() => {}} />;\n}\n"})}),"\n",(0,t.jsxs)(o.p,{children:["To set close button ",(0,t.jsx)(o.code,{children:"aria-label"})," use ",(0,t.jsx)(o.code,{children:"closeButtonProps"}),":"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { Drawer } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Drawer\n      closeButtonProps={{ 'aria-label': 'Close drawer' }}\n      opened\n      onClose={() => {}}\n    />\n  );\n}\n"})})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(s,{...e,children:(0,t.jsx)(i,{...e})})}])},585393,(e,t,n)=>{let r="/core/drawer";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(360890)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);