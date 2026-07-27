(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let a={};for(var o in e)t(a,o,{get:e[o],enumerable:!0});return n||t(a,Symbol.toStringTag,{value:"Module"}),a}])},257177,e=>{"use strict";var t=e.i(433512),n=e.i(481178),a=e.i(317477),o=e.i(44091),l=e.i(391466),i=e.i(956449),r=e.i(232471),s={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},c=e.i(391398);let d=(0,n.createVarsResolver)((e,{radius:n,color:o,gradient:l,variant:i,size:r,autoContrast:s,circle:c})=>{let d=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:l,variant:i||"filled",autoContrast:s});return{root:{"--badge-height":(0,t.getSize)(r,"badge-height"),"--badge-padding-x":(0,t.getSize)(r,"badge-padding-x"),"--badge-fz":(0,t.getSize)(r,"badge-fz"),"--badge-radius":c||void 0===n?void 0:(0,t.getRadius)(n),"--badge-bg":o||i?d.background:void 0,"--badge-color":o||i?d.color:void 0,"--badge-bd":o||i?d.border:void 0,"--badge-dot-color":"dot"===i?(0,a.getThemeColor)(o,e):void 0}}}),m=(0,i.polymorphicFactory)(e=>{let t=(0,o.useProps)("Badge",null,e),{classNames:n,className:a,style:i,styles:m,unstyled:u,vars:h,radius:p,color:f,gradient:b,leftSection:T,rightSection:g,children:y,variant:x,fullWidth:v,autoContrast:M,circle:j,mod:C,attributes:A,...D}=t,S=(0,l.useStyles)({name:"Badge",props:t,classes:s,className:a,style:i,classNames:n,styles:m,unstyled:u,attributes:A,vars:h,varsResolver:d});return(0,c.jsxs)(r.Box,{variant:x,mod:[{block:v,circle:j,"with-right-section":!!g,"with-left-section":!!T},C],...S("root",{variant:x}),...D,children:[T&&(0,c.jsx)("span",{...S("section"),"data-position":"left",children:T}),(0,c.jsx)("span",{...S("label"),children:y}),g&&(0,c.jsx)("span",{...S("section"),"data-position":"right",children:g})]})});m.classes=s,m.varsResolver=d,m.displayName="@mantine/core/Badge",e.s(["Badge",0,m],257177)},530514,e=>{"use strict";e.s(["createTheme",0,function(e){return e}])},931882,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),t.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(n.default,{ref:o,...e,weights:a}));o.displayName="CaretDownIcon",e.s(["CaretDownIcon",0,o],931882)},123895,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20a108,108,0,0,0,0,216c22.27,0,45.69-6.73,62.64-18a12,12,0,1,0-13.29-20c-13,8.63-31.89,14-49.35,14a84,84,0,1,1,84-84c0,9.29-1.67,17.08-4.69,21.95-2.64,4.24-6,6.05-11.31,6.05s-8.67-1.81-11.31-6.05c-3-4.87-4.69-12.66-4.69-21.95V88a12,12,0,0,0-23.49-3.46,52,52,0,1,0,8.86,79.57C172.3,174.3,182.81,180,196,180c24.67,0,40-19.92,40-52A108.12,108.12,0,0,0,128,20Zm0,136a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232,128c0,.51,0,1,0,1.52-.34,14.26-5.63,30.48-28,30.48-23.14,0-28-17.4-28-32V88a8,8,0,0,0-8.53-8A8.17,8.17,0,0,0,160,88.27v4a48,48,0,1,0,6.73,64.05,40.19,40.19,0,0,0,3.38,5C175.48,168,185.71,176,204,176a54.81,54.81,0,0,0,9.22-.75,4,4,0,0,1,4.09,6A104.05,104.05,0,0,1,125.91,232C71.13,230.9,26.2,186.86,24.08,132.11A104,104,0,1,1,232,128ZM96,128a32,32,0,1,0,32-32A32,32,0,0,0,96,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26a102,102,0,0,0,0,204c21.13,0,43.31-6.35,59.32-17a6,6,0,0,0-6.65-10c-13.9,9.25-34.09,15-52.67,15a90,90,0,1,1,90-90c0,29.58-13.78,34-22,34s-22-4.42-22-34V88a6,6,0,0,0-12,0v9a46,46,0,1,0,4.34,56.32C171.76,166.6,182,174,196,174c21.29,0,34-17.2,34-46A102.12,102.12,0,0,0,128,26Zm0,136a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28a100,100,0,0,0,0,200c20.76,0,42.52-6.23,58.21-16.66a4,4,0,1,0-4.43-6.67C167.35,214.27,147.24,220,128,220a92,92,0,1,1,92-92c0,31.32-15,36-24,36s-24-4.68-24-36V88a4,4,0,0,0-8,0v14.75a44,44,0,1,0,2.82,45.94C171.46,163.58,181.66,172,196,172c20,0,32-16.45,32-44A100.11,100.11,0,0,0,128,28Zm0,136a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(n.default,{ref:o,...e,weights:a}));o.displayName="AtIcon",e.s(["AtIcon",0,o],123895)},541772,e=>{"use strict";var t=e.i(191788);e.s(["useDisclosure",0,function(e=!1,n={}){let[a,o]=(0,t.useState)(e),l=(0,t.useCallback)(()=>{o(e=>e||(n.onOpen?.(),!0))},[n.onOpen]),i=(0,t.useCallback)(()=>{o(e=>e?(n.onClose?.(),!1):e)},[n.onClose]);return[a,{open:l,close:i,toggle:(0,t.useCallback)(()=>{a?i():l()},[i,l,a]),set:o}]}])},477777,430731,637245,225147,811590,426611,32044,446817,e=>{"use strict";var t=e.i(232471);let[n,a]=(0,e.i(386179).createSafeContext)("ModalBase component was not found in tree");var o=e.i(191788),l=e.i(56206),i=e.i(391398);function r({className:e,...n}){let s,c=(s=a(),(0,o.useEffect)(()=>(s.setBodyMounted(!0),()=>s.setBodyMounted(!1)),[]),s.getBodyId()),d=a();return(0,i.jsx)(t.Box,{id:c,className:(0,l.default)({m_5df29311:!d.unstyled},e),...n})}r.displayName="@mantine/core/ModalBaseBody",e.s(["ModalBaseBody",0,r],477777);var s=e.i(802046);function c({className:e,onClick:t,...n}){let o=a();return(0,i.jsx)(s.CloseButton,{...n,onClick:e=>{o.onClose(),t?.(e)},className:(0,l.default)({m_606cb269:!o.unstyled},e),unstyled:o.unstyled})}c.displayName="@mantine/core/ModalBaseCloseButton",e.s(["ModalBaseCloseButton",0,c],430731);var d=e.i(470743),m=e.i(34515),u=e.i(22630);function h({transitionProps:e,className:t,innerProps:n,onKeyDown:o,style:r,ref:s,...c}){let p=a();return(0,i.jsx)(m.Transition,{mounted:p.opened,transition:"pop",...p.transitionProps,onExited:()=>{p.onExitTransitionEnd?.(),p.transitionProps?.onExited?.()},onEntered:()=>{p.onEnterTransitionEnd?.(),p.transitionProps?.onEntered?.()},...e,children:e=>(0,i.jsx)("div",{...n,className:(0,l.default)({m_60c222c7:!p.unstyled},n.className),children:(0,i.jsx)(u.FocusTrap,{active:p.opened&&p.trapFocus,innerRef:s,children:(0,i.jsx)(d.Paper,{...c,component:"section",role:"dialog",tabIndex:-1,"aria-modal":!0,"aria-describedby":p.bodyMounted?p.getBodyId():void 0,"aria-labelledby":p.titleMounted?p.getTitleId():void 0,style:[r,e],className:(0,l.default)({m_fd1ab0aa:!p.unstyled},t),unstyled:p.unstyled,children:c.children})})})})}function p({className:e,...n}){let o=a();return(0,i.jsx)(t.Box,{component:"header",className:(0,l.default)({m_b5489c3c:!o.unstyled},e),...n})}h.displayName="@mantine/core/ModalBaseContent",e.s(["ModalBaseContent",0,h],637245),e.s(["NativeScrollArea",0,function({children:e}){return(0,i.jsx)(i.Fragment,{children:e})}],225147),p.displayName="@mantine/core/ModalBaseHeader",e.s(["ModalBaseHeader",0,p],811590);var f=e.i(476273);let b={duration:200,timingFunction:"ease",transition:"fade"};function T({onClick:e,transitionProps:t,style:n,visible:o,...l}){let r,s=a(),c=(r=a(),{...b,...r.transitionProps,...t});return(0,i.jsx)(m.Transition,{mounted:void 0!==o?o:s.opened,...c,transition:"fade",children:t=>(0,i.jsx)(f.Overlay,{fixed:!0,style:[n,t],zIndex:s.zIndex,unstyled:s.unstyled,onClick:t=>{e?.(t),s.closeOnClickOutside&&s.onClose()},...l})})}T.displayName="@mantine/core/ModalBaseOverlay",e.s(["ModalBaseOverlay",0,T],426611);var g=e.i(749218),y=e.i(433512),x=e.i(164483),v=e.i(779861),M=e.i(484108),j=e.i(107315),C=e.i(133613),A=e.i(865823);function D({keepMounted:e,keepMountedMode:a="activity",opened:l,onClose:r,id:s,transitionProps:c,onExitTransitionEnd:d,onEnterTransitionEnd:m,trapFocus:u,closeOnEscape:h,returnFocus:p,closeOnClickOutside:f,withinPortal:b,portalProps:T,lockScroll:S,children:k,zIndex:w,shadow:I,padding:E,__vars:P,unstyled:L,removeScrollProps:O,...B}){let{_id:z,titleMounted:Y,bodyMounted:_,shouldLockScroll:F,setTitleMounted:Z,setBodyMounted:H}=function({id:e,transitionProps:t,opened:n,trapFocus:a,closeOnEscape:l,onClose:i,returnFocus:r}){let s=(0,j.useId)(e),[c,d]=(0,o.useState)(!1),[m,u]=(0,o.useState)(!1),h=function({opened:e,transitionDuration:t}){let[n,a]=(0,o.useState)(e),l=(0,o.useRef)(-1),i=(0,v.useReducedMotion)()?0:t;return(0,o.useEffect)(()=>(e?(a(!0),window.clearTimeout(l.current)):0===i?a(!1):l.current=window.setTimeout(()=>a(!1),i),()=>window.clearTimeout(l.current)),[e,i]),n}({opened:n,transitionDuration:"number"==typeof t?.duration?t?.duration:200});return(0,C.useWindowEvent)("keydown",e=>{"Escape"===e.key&&l&&!e.isComposing&&n&&e.target?.getAttribute("data-mantine-stop-propagation")!=="true"&&i()},{capture:!0}),(0,M.useFocusReturn)({opened:n,shouldReturnFocus:a&&r}),{_id:s,titleMounted:c,bodyMounted:m,shouldLockScroll:h,setTitleMounted:d,setBodyMounted:u}}({id:s,transitionProps:c,opened:l,trapFocus:u,closeOnEscape:h,onClose:r,returnFocus:p}),{key:V,...N}=O||{};return(0,i.jsx)(x.OptionalPortal,{...T,withinPortal:b,children:(0,i.jsx)(n,{value:{opened:l,onClose:r,closeOnClickOutside:f,onExitTransitionEnd:d,onEnterTransitionEnd:m,transitionProps:{...c,keepMounted:e,keepMountedMode:a},getTitleId:()=>`${z}-title`,getBodyId:()=>`${z}-body`,titleMounted:Y,bodyMounted:_,setTitleMounted:Z,setBodyMounted:H,trapFocus:u,closeOnEscape:h,zIndex:w,unstyled:L},children:(0,i.jsx)(A.RemoveScroll,{enabled:F&&S,...N,children:(0,i.jsx)(t.Box,{...B,id:z,__vars:{...P,"--mb-z-index":(w||(0,g.getDefaultZIndex)("modal")).toString(),"--mb-shadow":(0,y.getShadow)(I),"--mb-padding":(0,y.getSpacing)(E)},children:k})},V)})})}function S({className:e,...n}){let r,s=(r=a(),(0,o.useEffect)(()=>(r.setTitleMounted(!0),()=>r.setTitleMounted(!1)),[]),r.getTitleId()),c=a();return(0,i.jsx)(t.Box,{component:"h2",className:(0,l.default)({m_615af6c9:!c.unstyled},e),id:s,...n})}D.displayName="@mantine/core/ModalBase",e.s(["ModalBase",0,D],32044),S.displayName="@mantine/core/ModalBaseTitle",e.s(["ModalBaseTitle",0,S],446817)},424302,e=>{"use strict";var t=e.i(749218),n=e.i(44091),a=e.i(275519),o={root:"m_9df02822",content:"m_54c44539",inner:"m_1f958f16",header:"m_d0e2b9cd"},l=e.i(477777);let[i,r]=(0,e.i(386179).createSafeContext)("Modal component was not found in tree");var s=e.i(391398);let c=(0,a.factory)(e=>{let{classNames:t,className:a,style:o,styles:i,vars:c,...d}=(0,n.useProps)("ModalBody",null,e);return(0,s.jsx)(l.ModalBaseBody,{...r().getStyles("body",{classNames:t,style:o,styles:i,className:a}),...d})});c.classes=o,c.displayName="@mantine/core/ModalBody";var d=e.i(430731);let m=(0,a.factory)(e=>{let{classNames:t,className:a,style:o,styles:l,vars:i,...c}=(0,n.useProps)("ModalCloseButton",null,e);return(0,s.jsx)(d.ModalBaseCloseButton,{...r().getStyles("close",{classNames:t,style:o,styles:l,className:a}),...c})});m.classes=o,m.displayName="@mantine/core/ModalCloseButton";var u=e.i(779177),h=e.i(637245),p=e.i(225147);let f=(0,a.factory)(e=>{let{classNames:t,className:a,style:o,styles:l,vars:i,children:c,__hidden:d,...m}=(0,n.useProps)("ModalContent",null,e),f=r(),b=f.scrollAreaComponent||p.NativeScrollArea;return(0,s.jsx)(h.ModalBaseContent,{...f.getStyles("content",{className:a,style:o,styles:l,classNames:t}),innerProps:f.getStyles("inner",{className:a,style:o,styles:l,classNames:t}),"data-full-screen":f.fullScreen||void 0,"data-modal-content":!0,"data-hidden":d||void 0,...m,children:(0,s.jsx)(b,{style:{maxHeight:f.fullScreen?"100dvh":`calc(100dvh - (${(0,u.rem)(f.yOffset)} * 2))`},children:c})})});f.classes=o,f.displayName="@mantine/core/ModalContent";var b=e.i(811590);let T=(0,a.factory)(e=>{let{classNames:t,className:a,style:o,styles:l,vars:i,...c}=(0,n.useProps)("ModalHeader",null,e);return(0,s.jsx)(b.ModalBaseHeader,{...r().getStyles("header",{classNames:t,style:o,styles:l,className:a}),...c})});T.classes=o,T.displayName="@mantine/core/ModalHeader";var g=e.i(426611);let y=(0,a.factory)(e=>{let{classNames:t,className:a,style:o,styles:l,vars:i,...c}=(0,n.useProps)("ModalOverlay",null,e);return(0,s.jsx)(g.ModalBaseOverlay,{...r().getStyles("overlay",{classNames:t,style:o,styles:l,className:a}),...c})});y.classes=o,y.displayName="@mantine/core/ModalOverlay";var x=e.i(433512),v=e.i(481178),M=e.i(391466),j=e.i(19300),C=e.i(32044);let A={__staticSelector:"Modal",closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:(0,t.getDefaultZIndex)("modal"),transitionProps:{duration:200,transition:"fade-down"},yOffset:"5dvh"},D=(0,v.createVarsResolver)((e,{radius:t,size:n,yOffset:a,xOffset:o})=>({root:{"--modal-radius":void 0===t?void 0:(0,x.getRadius)(t),"--modal-size":(0,x.getSize)(n,"modal-size"),"--modal-y-offset":(0,u.rem)(a),"--modal-x-offset":(0,u.rem)(o)}})),S=(0,a.factory)(e=>{let t=(0,n.useProps)("ModalRoot",A,e),{classNames:a,className:l,style:r,styles:c,unstyled:d,vars:m,yOffset:u,scrollAreaComponent:h,radius:p,fullScreen:f,centered:b,xOffset:T,__staticSelector:g,attributes:y,...x}=t,v=(0,M.useStyles)({name:g,classes:o,props:t,className:l,style:r,classNames:a,styles:c,unstyled:d,attributes:y,vars:m,varsResolver:D});return(0,s.jsx)(i,{value:{yOffset:u,scrollAreaComponent:h,getStyles:v,fullScreen:f},children:(0,s.jsx)(C.ModalBase,{...v("root"),"data-full-screen":f||void 0,"data-centered":b||void 0,"data-offset-scrollbars":h===j.ScrollArea.Autosize||void 0,unstyled:d,...x})})});S.classes=o,S.varsResolver=D,S.displayName="@mantine/core/ModalRoot";var k=e.i(191788);let w=(0,k.createContext)(null);function I({children:e}){let[n,a]=(0,k.useState)([]),[o,l]=(0,k.useState)((0,t.getDefaultZIndex)("modal"));return(0,s.jsx)(w,{value:{stack:n,addModal:(e,t)=>{a(t=>[...new Set([...t,e])]),l(e=>"number"==typeof t&&"number"==typeof e?Math.max(e,t):e)},removeModal:e=>a(t=>t.filter(t=>t!==e)),getZIndex:e=>`calc(${o} + ${n.indexOf(e)} + 1)`,currentId:n[n.length-1],maxZIndex:o},children:e})}I.displayName="@mantine/core/ModalStack";var E=e.i(446817);let P=(0,a.factory)(e=>{let{classNames:t,className:a,style:o,styles:l,vars:i,...c}=(0,n.useProps)("ModalTitle",null,e);return(0,s.jsx)(E.ModalBaseTitle,{...r().getStyles("title",{classNames:t,style:o,styles:l,className:a}),...c})});P.classes=o,P.displayName="@mantine/core/ModalTitle";let L={closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:(0,t.getDefaultZIndex)("modal"),transitionProps:{duration:200,transition:"fade-down"},withOverlay:!0,withCloseButton:!0},O=(0,a.factory)(e=>{let{title:a,withOverlay:o,overlayProps:l,withCloseButton:i,closeButtonProps:r,children:d,radius:u,opened:h,stackId:p,zIndex:b,...g}=(0,n.useProps)("Modal",L,e),x=(0,k.use)(w),v=!!a||i,M=x&&p?{closeOnEscape:x.currentId===p,trapFocus:x.currentId===p,zIndex:x.getZIndex(p)}:{},j=!1!==o&&(p&&x?x.currentId===p:h);return(0,k.useEffect)(()=>{x&&p&&(h?x.addModal(p,b||(0,t.getDefaultZIndex)("modal")):x.removeModal(p))},[h,p,b]),(0,s.jsxs)(S,{radius:u,opened:h,zIndex:x&&p?x.getZIndex(p):b,...g,...M,children:[o&&(0,s.jsx)(y,{visible:j,transitionProps:x&&p?{duration:0}:void 0,...l}),(0,s.jsxs)(f,{radius:u,__hidden:!!x&&!!p&&!!h&&p!==x.currentId,children:[v&&(0,s.jsxs)(T,{children:[a&&(0,s.jsx)(P,{children:a}),i&&(0,s.jsx)(m,{...r})]}),(0,s.jsx)(c,{children:d})]})]})});O.classes=o,O.displayName="@mantine/core/Modal",O.Root=S,O.Overlay=y,O.Content=f,O.Body=c,O.Header=T,O.Title=P,O.CloseButton=m,O.Stack=I,e.s(["Modal",0,O],424302)},604363,(e,t,n)=>{e.e,t.exports=function(e,t,n){var a=function(e){return e.add(4-e.isoWeekday(),"day")},o=t.prototype;o.isoWeekYear=function(){return a(this).year()},o.isoWeek=function(e){if(!this.$utils().u(e))return this.add(7*(e-this.isoWeek()),"day");var t,o,l,i=a(this),r=(t=this.isoWeekYear(),l=4-(o=(this.$u?n.utc:n)().year(t).startOf("year")).isoWeekday(),o.isoWeekday()>4&&(l+=7),o.add(l,"day"));return i.diff(r,"week")+1},o.isoWeekday=function(e){return this.$utils().u(e)?this.day()||7:this.day(this.day()%7?e:e-7)};var l=o.startOf;o.startOf=function(e,t){var n=this.$utils(),a=!!n.u(t)||t;return"isoweek"===n.p(e)?a?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):l.bind(this)(e,t)}}},462138,e=>{"use strict";var t=e.i(779177),n=e.i(391398);function a({style:e,size:o=16,...l}){return(0,n.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,t.rem)(o),height:(0,t.rem)(o),display:"block"},...l,children:(0,n.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}a.displayName="@mantine/core/AccordionChevron",e.s(["AccordionChevron",0,a])},494834,(e,t,n)=>{e.e,t.exports=function(){"use strict";var e="millisecond",t="second",n="minute",a="hour",o="week",l="month",i="quarter",r="year",s="date",c="Invalid Date",d=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|YYYY|YY|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=function(e,t,n){var a=String(e);return!a||a.length>=t?e:""+Array(t+1-a.length).join(n)+e},h="en",p={};p[h]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}};var f="$isDayjsObject",b=function(e){return e instanceof x||!(!e||!e[f])},T=function e(t,n,a){var o;if(!t)return h;if("string"==typeof t){var l=t.toLowerCase();p[l]&&(o=l),n&&(p[l]=n,o=l);var i=t.split("-");if(!o&&i.length>1)return e(i[0])}else{var r=t.name;p[r]=t,o=r}return!a&&o&&(h=o),o||!a&&h},g=function(e,t){if(b(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new x(n)},y={s:u,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+u(Math.floor(n/60),2,"0")+":"+u(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var a=12*(n.year()-t.year())+(n.month()-t.month()),o=t.clone().add(a,l),i=n-o<0,r=t.clone().add(a+(i?-1:1),l);return+(-(a+(n-o)/(i?o-r:r-o))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(c){return({M:l,y:r,w:o,d:"day",D:s,h:a,m:n,s:t,ms:e,Q:i})[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}};y.l=T,y.i=b,y.w=function(e,t){return g(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var x=function(){function u(e){this.$L=T(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[f]=!0}var h=u.prototype;return h.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(y.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var a=t.match(d);if(a){var o=a[2]-1||0,l=(a[7]||"0").substring(0,3);return n?new Date(Date.UTC(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,l)):new Date(a[1],o,a[3]||1,a[4]||0,a[5]||0,a[6]||0,l)}}return new Date(t)}(e),this.init()},h.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},h.$utils=function(){return y},h.isValid=function(){return this.$d.toString()!==c},h.isSame=function(e,t){var n=g(e);return this.startOf(t)<=n&&n<=this.endOf(t)},h.isAfter=function(e,t){return g(e)<this.startOf(t)},h.isBefore=function(e,t){return this.endOf(t)<g(e)},h.$g=function(e,t,n){return y.u(e)?this[t]:this.set(n,e)},h.unix=function(){return Math.floor(this.valueOf()/1e3)},h.valueOf=function(){return this.$d.getTime()},h.startOf=function(e,i){var c=this,d=!!y.u(i)||i,m=y.p(e),u=function(e,t){var n=y.w(c.$u?Date.UTC(c.$y,t,e):new Date(c.$y,t,e),c);return d?n:n.endOf("day")},h=function(e,t){return y.w(c.toDate()[e].apply(c.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),c)},p=this.$W,f=this.$M,b=this.$D,T="set"+(this.$u?"UTC":"");switch(m){case r:return d?u(1,0):u(31,11);case l:return d?u(1,f):u(0,f+1);case o:var g=this.$locale().weekStart||0,x=(p<g?p+7:p)-g;return u(d?b-x:b+(6-x),f);case"day":case s:return h(T+"Hours",0);case a:return h(T+"Minutes",1);case n:return h(T+"Seconds",2);case t:return h(T+"Milliseconds",3);default:return this.clone()}},h.endOf=function(e){return this.startOf(e,!1)},h.$set=function(o,i){var c,d=y.p(o),m="set"+(this.$u?"UTC":""),u=((c={}).day=m+"Date",c[s]=m+"Date",c[l]=m+"Month",c[r]=m+"FullYear",c[a]=m+"Hours",c[n]=m+"Minutes",c[t]=m+"Seconds",c[e]=m+"Milliseconds",c)[d],h="day"===d?this.$D+(i-this.$W):i;if(d===l||d===r){var p=this.clone().set(s,1);p.$d[u](h),p.init(),this.$d=p.set(s,Math.min(this.$D,p.daysInMonth())).$d}else u&&this.$d[u](h);return this.init(),this},h.set=function(e,t){return this.clone().$set(e,t)},h.get=function(e){return this[y.p(e)]()},h.add=function(e,i){var s,c=this;e=Number(e);var d=y.p(i),m=function(t){var n=g(c);return y.w(n.date(n.date()+Math.round(t*e)),c)};if(d===l)return this.set(l,this.$M+e);if(d===r)return this.set(r,this.$y+e);if("day"===d)return m(1);if(d===o)return m(7);var u=((s={})[n]=6e4,s[a]=36e5,s[t]=1e3,s)[d]||1,h=this.$d.getTime()+e*u;return y.w(h,this)},h.subtract=function(e,t){return this.add(-1*e,t)},h.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||c;var a=e||"YYYY-MM-DDTHH:mm:ssZ",o=y.z(this),l=this.$H,i=this.$m,r=this.$M,s=n.weekdays,d=n.months,u=n.meridiem,h=function(e,n,o,l){return e&&(e[n]||e(t,a))||o[n].slice(0,l)},p=function(e){return y.s(l%12||12,e,"0")},f=u||function(e,t,n){var a=e<12?"AM":"PM";return n?a.toLowerCase():a};return a.replace(m,function(e,a){return a||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return y.s(t.$y,4,"0");case"M":return r+1;case"MM":return y.s(r+1,2,"0");case"MMM":return h(n.monthsShort,r,d,3);case"MMMM":return h(d,r);case"D":return t.$D;case"DD":return y.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return h(n.weekdaysMin,t.$W,s,2);case"ddd":return h(n.weekdaysShort,t.$W,s,3);case"dddd":return s[t.$W];case"H":return String(l);case"HH":return y.s(l,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return f(l,i,!0);case"A":return f(l,i,!1);case"m":return String(i);case"mm":return y.s(i,2,"0");case"s":return String(t.$s);case"ss":return y.s(t.$s,2,"0");case"SSS":return y.s(t.$ms,3,"0");case"Z":return o}return null}(e)||o.replace(":","")})},h.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},h.diff=function(e,s,c){var d,m=this,u=y.p(s),h=g(e),p=(h.utcOffset()-this.utcOffset())*6e4,f=this-h,b=function(){return y.m(m,h)};switch(u){case r:d=b()/12;break;case l:d=b();break;case i:d=b()/3;break;case o:d=(f-p)/6048e5;break;case"day":d=(f-p)/864e5;break;case a:d=f/36e5;break;case n:d=f/6e4;break;case t:d=f/1e3;break;default:d=f}return c?d:y.a(d)},h.daysInMonth=function(){return this.endOf(l).$D},h.$locale=function(){return p[this.$L]},h.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),a=T(e,t,!0);return a&&(n.$L=a),n},h.clone=function(){return y.w(this.$d,this)},h.toDate=function(){return new Date(this.valueOf())},h.toJSON=function(){return this.isValid()?this.toISOString():null},h.toISOString=function(){return this.$d.toISOString()},h.toString=function(){return this.$d.toUTCString()},u}(),v=x.prototype;return g.prototype=v,[["$ms",e],["$s",t],["$m",n],["$H",a],["$W","day"],["$M",l],["$y",r],["$D",s]].forEach(function(e){v[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),g.extend=function(e,t){return e.$i||(e(t,x,g),e.$i=!0),g},g.locale=T,g.isDayjs=b,g.unix=function(e){return g(1e3*e)},g.en=p[h],g.Ls=p,g.p={},g}()},205693,135140,e=>{"use strict";var t=e.i(191788),n=e.i(391398);let a={locale:"en",firstDayOfWeek:1,weekendDays:[0,6],labelSeparator:"–",consistentWeeks:!1},o=(0,t.createContext)(a);e.s(["DatesProvider",0,function({settings:e,children:t}){return(0,n.jsx)(o,{value:{...a,...e},children:t})},"DatesProviderContext",0,o],135140),e.s(["useDatesContext",0,function(){let e=(0,t.use)(o),n=(0,t.useCallback)(t=>t||e.locale,[e.locale]),a=(0,t.useCallback)(t=>"number"==typeof t?t:e.firstDayOfWeek,[e.firstDayOfWeek]),l=(0,t.useCallback)(t=>Array.isArray(t)?t:e.weekendDays,[e.weekendDays]),i=(0,t.useCallback)(t=>"string"==typeof t?t:e.labelSeparator,[e.labelSeparator]);return{...e,getLocale:n,getFirstDayOfWeek:a,getWeekendDays:l,getLabelSeparator:i}}],205693)},110198,e=>{"use strict";var t=e.i(494834);e.s(["toDateString",0,function(e){return null==e||""===e?e:(0,t.default)(e).format("YYYY-MM-DD")},"toDateTimeString",0,function(e){return null==e||""===e?e:(0,t.default)(e).format("YYYY-MM-DD HH:mm:ss")}])},831474,e=>{"use strict";e.s(["pickCalendarProps",0,function(e){let{maxLevel:t,minLevel:n,defaultLevel:a,level:o,onLevelChange:l,nextIcon:i,previousIcon:r,date:s,defaultDate:c,onDateChange:d,numberOfColumns:m,columnsToScroll:u,ariaLabels:h,nextLabel:p,previousLabel:f,onYearSelect:b,onMonthSelect:T,onYearMouseEnter:g,onMonthMouseEnter:y,onNextMonth:x,onPreviousMonth:v,onNextYear:M,onPreviousYear:j,onNextDecade:C,onPreviousDecade:A,withCellSpacing:D,highlightToday:S,withNativeLevelSelect:k,yearsSelectRange:w,__updateDateOnYearSelect:I,__updateDateOnMonthSelect:E,__setDateRef:P,__setLevelRef:L,withWeekNumbers:O,headerControlsOrder:B,firstDayOfWeek:z,weekdayFormat:Y,weekendDays:_,getDayProps:F,excludeDate:Z,renderDay:H,hideOutsideDates:V,hideWeekdays:N,getDayAriaLabel:R,monthLabelFormat:$,monthsListFormat:W,getMonthControlProps:G,yearLabelFormat:q,yearsListFormat:U,getYearControlProps:J,decadeLabelFormat:K,allowSingleDateInRange:X,allowDeselect:Q,minDate:ee,maxDate:et,locale:en,...ea}=e;return{calendarProps:{maxLevel:t,minLevel:n,defaultLevel:a,level:o,onLevelChange:l,nextIcon:i,previousIcon:r,date:s,defaultDate:c,onDateChange:d,numberOfColumns:m,columnsToScroll:u,ariaLabels:h,nextLabel:p,previousLabel:f,onYearSelect:b,onMonthSelect:T,onYearMouseEnter:g,onMonthMouseEnter:y,onNextMonth:x,onPreviousMonth:v,onNextYear:M,onPreviousYear:j,onNextDecade:C,onPreviousDecade:A,withCellSpacing:D,highlightToday:S,withNativeLevelSelect:k,yearsSelectRange:w,__updateDateOnYearSelect:I,__updateDateOnMonthSelect:E,__setDateRef:P,withWeekNumbers:O,headerControlsOrder:B,firstDayOfWeek:z,weekdayFormat:Y,weekendDays:_,getDayProps:F,excludeDate:Z,renderDay:H,hideOutsideDates:V,hideWeekdays:N,getDayAriaLabel:R,monthLabelFormat:$,monthsListFormat:W,getMonthControlProps:G,yearLabelFormat:q,yearsListFormat:U,getYearControlProps:J,decadeLabelFormat:K,allowSingleDateInRange:X,allowDeselect:Q,minDate:ee,maxDate:et,locale:en},others:ea}}])},337976,e=>{"use strict";var t=e.i(422696),n=e.i(494834);function a(e,t){let a=[...t].sort((e,t)=>(0,n.default)(e).isAfter((0,n.default)(t))?1:-1);return(0,n.default)(a[0]).startOf("day").subtract(1,"ms").isBefore(e)&&(0,n.default)(a[1]).endOf("day").add(1,"ms").isAfter(e)}var o=e.i(191788);e.s(["useDatesState",0,function({type:e,level:l,value:i,defaultValue:r,onChange:s,allowSingleDateInRange:c,allowDeselect:d,onMouseLeave:m}){let[u,h]=(0,t.useUncontrolledDates)({type:e,value:i,defaultValue:r,onChange:s}),[p,f]=(0,o.useState)("range"===e&&u[0]&&!u[1]?u[0]:null),[b,T]=(0,o.useState)(null),g="range"===e?e=>{m?.(e),T(null)}:m,y="range"===e&&p?T:()=>{};return(0,o.useEffect)(()=>{if("range"===e)if(u[0]&&!u[1])f(u[0]);else{let e=null==u[0]&&null==u[1],t=null!=u[0]&&null!=u[1];(e||t)&&(f(null),T(null))}},[u]),{onDateChange:t=>{if("range"===e){if(p&&!u[1]){if((0,n.default)(t).isSame(p,l)&&!c){f(null),T(null),h([null,null]);return}let e=[t,p];e.sort((e,t)=>(0,n.default)(e).isAfter((0,n.default)(t))?1:-1),h(e),T(null),f(null);return}if(u[0]&&!u[1]&&(0,n.default)(t).isSame(u[0],l)&&!c){f(null),T(null),h([null,null]);return}h([t,null]),T(null),f(t);return}"multiple"===e?u.some(e=>(0,n.default)(e).isSame(t,l))?h(u.filter(e=>!(0,n.default)(e).isSame(t,l))):h([...u,t]):u&&d&&(0,n.default)(t).isSame(u,l)?h(null):h(t)},onRootMouseLeave:g,onHoveredDateChange:y,getControlProps:t=>{if("range"===e)return{selected:u.some(e=>e&&(0,n.default)(e).isSame(t,l)),inRange:p&&b?a(t,[b,p]):!!u[0]&&!!u[1]&&a(t,u),firstInRange:!!u[0]&&!!(0,n.default)(t).isSame(u[0],l)&&!(b&&(0,n.default)(b).isBefore(u[0])),lastInRange:u[1]?(0,n.default)(t).isSame(u[1],l):!!u[0]&&!!b&&(0,n.default)(b).isBefore(u[0])&&(0,n.default)(t).isSame(u[0],l),"data-autofocus":!!u[0]&&(0,n.default)(u[0]).isSame(t,l)||void 0};if("multiple"===e)return{selected:u.some(e=>e&&(0,n.default)(e).isSame(t,l)),"data-autofocus":!!u[0]&&(0,n.default)(u[0]).isSame(t,l)||void 0};let o=(0,n.default)(u).isSame(t,l);return{selected:o,"data-autofocus":o||void 0}},_value:u,setValue:h}}],337976)},777141,e=>{"use strict";var t=e.i(146509),n=e.i(337976),a=e.i(164036),o=e.i(831474),l={datePickerRoot:"m_765a40cf",presetsList:"m_d6a681e1",presetButton:"m_acd30b22"},i=e.i(494834),r=e.i(191788),s=e.i(391398),c=e.i(232471),d=e.i(284629),m=e.i(481178),u=e.i(275519),h=e.i(433512),p=e.i(44091),f=e.i(62904),b=e.i(391466);let T=(0,m.createVarsResolver)((e,{size:t})=>({datePickerRoot:{"--preset-font-size":(0,h.getFontSize)(t)}})),g={type:"default",defaultLevel:"month",numberOfColumns:1,size:"sm"},y=(0,u.factory)(e=>{let m=(0,p.useProps)("DatePicker",g,e),{allowDeselect:u,allowSingleDateInRange:h,value:y,defaultValue:x,onChange:v,onMouseLeave:M,classNames:j,styles:C,__staticSelector:A,__onDayClick:D,__onDayMouseEnter:S,__onPresetSelect:k,__stopPropagation:w,presets:I,className:E,style:P,unstyled:L,size:O,vars:B,attributes:z,fullWidth:Y,..._}=m,{calendarProps:F,others:Z}=(0,o.pickCalendarProps)(_),H=(0,r.useRef)(null),V=(0,r.useRef)(null),N=(0,b.useStyles)({name:A||"DatePicker",classes:l,props:m,className:E,style:P,classNames:j,styles:C,unstyled:L,attributes:z,rootSelector:I?"datePickerRoot":void 0,varsResolver:T,vars:B}),{onDateChange:R,onRootMouseLeave:$,onHoveredDateChange:W,getControlProps:G,_value:q,setValue:U}=(0,n.useDatesState)({type:Z.type,level:"day",allowDeselect:u,allowSingleDateInRange:h,value:y,defaultValue:x,onChange:v,onMouseLeave:M}),{resolvedClassNames:J,resolvedStyles:K}=(0,f.useResolvedStylesApi)({classNames:j,styles:C,props:m}),X=(0,s.jsx)(a.Calendar,{classNames:J,styles:K,__staticSelector:A||"DatePicker",onMouseLeave:$,size:O,fullWidth:Y,...F,...!I?Z:{},__stopPropagation:w,__setDateRef:H,__setLevelRef:V,minLevel:F.minLevel||"month",__onDayMouseEnter:(e,t)=>{W(t),S?.(e,t)},__onDayClick:(e,t)=>{R(t),D?.(e,t)},getDayProps:e=>({...G(e),...F.getDayProps?.(e)}),getMonthControlProps:e=>({selected:"string"==typeof q&&(0,t.isSameMonth)(e,q),...F.getMonthControlProps?.(e)}),getYearControlProps:e=>({selected:"string"==typeof q&&(0,i.default)(e).isSame(q,"year"),...F.getYearControlProps?.(e)}),hideOutsideDates:F.hideOutsideDates??1!==F.numberOfColumns,attributes:z,...!I?{className:E,style:P}:{}});if(!I)return X;let Q=I.map((e,t)=>(0,s.jsx)(d.UnstyledButton,{...N("presetButton"),onClick:()=>{var t;let n;void 0!==(n=Array.isArray(t=e.value)?t[0]:t)&&(H.current?.(n),V.current?.("month"),k?k(t):U(t))},onMouseDown:e=>e.preventDefault(),"data-mantine-stop-propagation":w||void 0,children:e.label},t));return(0,s.jsxs)(c.Box,{...N("datePickerRoot"),size:O,...Z,children:[(0,s.jsx)("div",{...N("presetsList"),children:Q}),X]})});y.classes=a.Calendar.classes,y.varsResolver=T,y.displayName="@mantine/dates/DatePicker",e.s(["DatePicker",0,y],777141)},692385,e=>{"use strict";var t=e.i(852361),n=e.i(191788);let a={min:-1/0,max:1/0};e.s(["useCounter",0,function(e=0,o){let{min:l,max:i,step:r=1}={...a,...o},s=Math.abs(r),[c,d]=(0,n.useState)((0,t.clamp)(e,l,i));return[c,{increment:(0,n.useCallback)(()=>d(e=>(0,t.clamp)(e+s,l,i)),[l,i,s]),decrement:(0,n.useCallback)(()=>d(e=>(0,t.clamp)(e-s,l,i)),[l,i,s]),set:(0,n.useCallback)(e=>d((0,t.clamp)(e,l,i)),[l,i]),reset:(0,n.useCallback)(()=>d((0,t.clamp)(e,l,i)),[e,l,i])}]}])},463044,e=>{"use strict";let t;var n=e.i(191788),a=e.i(730943);function o(e,t,n){let a,o=n.initialDeps??[],l=!0;function i(){let i=e();return(i.length!==o.length||i.some((e,t)=>o[t]!==e))&&(o=i,a=t(...i),(null==n?void 0:n.onChange)&&!(l&&n.skipInitialOnChange)&&n.onChange(a),l=!1),a}return i.updateDeps=e=>{o=e},i}function l(e,t){if(void 0!==e)return e;throw Error(`Unexpected undefined${t?`: ${t}`:""}`)}e.i(350461);let i=()=>{if(void 0!==t)return t;if("u"<typeof navigator)return t=!1;if(/iP(hone|od|ad)/.test(navigator.userAgent))return t=!0;let e=navigator.maxTouchPoints;return t="MacIntel"===navigator.platform&&void 0!==e&&e>0},r=e=>{let{offsetWidth:t,offsetHeight:n}=e;return{width:t,height:n}},s=e=>e,c=e=>{let t=Math.max(e.startIndex-e.overscan,0),n=Math.min(e.endIndex+e.overscan,e.count-1)-t+1,a=Array(n);for(let e=0;e<n;e++)a[e]=t+e;return a},d=(e,t)=>{let n=e.scrollElement;if(!n)return;let a=e.targetWindow;if(!a)return;let o=e=>{let{width:n,height:a}=e;t({width:Math.round(n),height:Math.round(a)})};if(o(r(n)),!a.ResizeObserver)return()=>{};let l=new a.ResizeObserver(t=>{let a=()=>{let e=t[0];if(null==e?void 0:e.borderBoxSize){let t=e.borderBoxSize[0];if(t)return void o({width:t.inlineSize,height:t.blockSize})}o(r(n))};e.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(a):a()});return l.observe(n,{box:"border-box"}),()=>{l.unobserve(n)}},m={passive:!0},u="u"<typeof window||"onscrollend"in window,h=(e,t)=>((e,t,n)=>{var a,o;let l,i=e.scrollElement;if(!i)return;let r=e.targetWindow;if(!r)return;let s=e.options.useScrollendEvent&&u,c=0,d=s?null:(a=()=>t(c,!1),o=e.options.isScrollingResetDelay,function(...e){r.clearTimeout(l),l=r.setTimeout(()=>a.apply(this,e),o)}),h=e=>()=>{c=n(i),null==d||d(),t(c,e)},p=h(!0),f=h(!1);return i.addEventListener("scroll",p,m),s&&i.addEventListener("scrollend",f,m),()=>{i.removeEventListener("scroll",p),s&&i.removeEventListener("scrollend",f)}})(e,t,t=>{let{horizontal:n,isRtl:a}=e.options;return n?t.scrollLeft*(a&&-1||1):t.scrollTop}),p=(e,t,n)=>{if(n.options.useCachedMeasurements){let t=n.indexFromElement(e),a=n.options.getItemKey(t);return n.itemSizeCache.get(a)??n.options.estimateSize(t)}if(null==t?void 0:t.borderBoxSize){let e=t.borderBoxSize[0];if(e)return Math.round(e[n.options.horizontal?"inlineSize":"blockSize"])}if(!t){let t=n.indexFromElement(e),a=n.options.getItemKey(t),o=n.itemSizeCache.get(a);if(void 0!==o)return o}return e[n.options.horizontal?"offsetWidth":"offsetHeight"]},f=(e,{adjustments:t=0,behavior:n},a)=>{var o,l;null==(l=null==(o=a.scrollElement)?void 0:o.scrollTo)||l.call(o,{[a.options.horizontal?"left":"top"]:e+t,behavior:n})};class b{constructor(e){this.unsubs=[],this.scrollElement=null,this.targetWindow=null,this.isScrolling=!1,this.scrollState=null,this.measurementsCache=[],this._flatMeasurements=null,this.itemSizeCache=new Map,this.itemSizeCacheVersion=0,this.laneAssignments=new Map,this.pendingMin=null,this.prevLanes=void 0,this.lanesChangedFlag=!1,this.lanesSettling=!1,this.pendingScrollAnchor=null,this.scrollRect=null,this.scrollOffset=null,this.scrollDirection=null,this.scrollAdjustments=0,this._iosDeferredAdjustment=0,this._iosTouching=!1,this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._intendedScrollOffset=null,this.elementsCache=new Map,this.now=()=>{var e,t,n;return(null==(n=null==(t=null==(e=this.targetWindow)?void 0:e.performance)?void 0:t.now)?void 0:n.call(t))??Date.now()},this.observer=(()=>{let e=null,t=()=>e||(this.targetWindow&&this.targetWindow.ResizeObserver?e=new this.targetWindow.ResizeObserver(e=>{e.forEach(e=>{let t=()=>{let t=e.target,n=this.indexFromElement(t);if(!t.isConnected){for(let[e,n]of(this.observer.unobserve(t),this.elementsCache))if(n===t){this.elementsCache.delete(e);break}return}this.shouldMeasureDuringScroll(n)&&this.resizeItem(n,this.options.measureElement(t,e,this))};this.options.useAnimationFrameWithResizeObserver?requestAnimationFrame(t):t()})}):null);return{disconnect:()=>{var n;null==(n=t())||n.disconnect(),e=null},observe:e=>{var n;return null==(n=t())?void 0:n.observe(e,{box:"border-box"})},unobserve:e=>{var n;return null==(n=t())?void 0:n.unobserve(e)}}})(),this.range=null,this.setOptions=e=>{var t,n;let a={debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:s,rangeExtractor:c,onChange:()=>{},measureElement:p,initialRect:{width:0,height:0},scrollMargin:0,gap:0,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1,anchorTo:"start",followOnAppend:!1,scrollEndThreshold:1,isScrollingResetDelay:150,enabled:!0,isRtl:!1,useScrollendEvent:!1,useAnimationFrameWithResizeObserver:!1,laneAssignmentMode:"estimate",useCachedMeasurements:!1};for(let t in e){let n=e[t];void 0!==n&&(a[t]=n)}let o=this.options,l=null,i=null,r=!1;if(void 0!==o&&o.enabled&&a.enabled&&"end"===a.anchorTo&&null!==this.scrollElement){let e=o.count,s=a.count,c=this.getMeasurements(),d=e>0?(null==(t=c[0])?void 0:t.key)??o.getItemKey(0):null,m=e>0?(null==(n=c[e-1])?void 0:n.key)??o.getItemKey(e-1):null;if(s!==e||e>0&&s>0&&(a.getItemKey(0)!==d||a.getItemKey(s-1)!==m)){r=!0;let t=e>0?this.getVirtualItemForOffset(this.getScrollOffset())??c[0]:null;t&&(l=[t.key,this.getScrollOffset()-t.start]);let n=!0===a.followOnAppend?"auto":a.followOnAppend||null;n&&s>e&&this.isAtEnd(o.scrollEndThreshold)&&(0===e||a.getItemKey(s-1)!==m)&&(i=n)}}this.options=a,r&&(this.pendingMin=0,this.itemSizeCacheVersion++);let d=!1,m=0;if(l&&null!==this.scrollOffset){let[e,t]=l,n=this.getMeasurements(),{count:a,getItemKey:o}=this.options,i=0;for(;i<a&&o(i)!==e;)i++;if(i<a){let e=n[i];if(e){let n=e.start+t;n!==this.scrollOffset&&(m=n-this.scrollOffset,this.scrollOffset=n,d=!0)}}}(d||i)&&(this.pendingScrollAnchor=[d?l[0]:null,d?l[1]:0,i,m])},this.notify=e=>{var t,n;null==(n=(t=this.options).onChange)||n.call(t,this,e)},this.maybeNotify=o(()=>(this.calculateRange(),[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]),e=>{this.notify(e)},{key:!1,debug:()=>this.options.debug,initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=()=>{this.unsubs.filter(Boolean).forEach(e=>e()),this.unsubs=[],this.observer.disconnect(),null!=this.rafId&&this.targetWindow&&(this.targetWindow.cancelAnimationFrame(this.rafId),this.rafId=null),this.scrollState=null,this.scrollElement=null,this.targetWindow=null},this._didMount=()=>()=>{this.cleanup()},this._willUpdate=()=>{var e;let t=this.options.enabled?this.options.getScrollElement():null;if(this.scrollElement!==t){if(this.cleanup(),!t)return void this.maybeNotify();if(this.scrollElement=t,this.scrollElement&&"ownerDocument"in this.scrollElement?this.targetWindow=this.scrollElement.ownerDocument.defaultView:this.targetWindow=(null==(e=this.scrollElement)?void 0:e.window)??null,this.elementsCache.forEach(e=>{this.observer.observe(e)}),this.unsubs.push(this.options.observeElementRect(this,e=>{this.scrollRect=e,this.maybeNotify()})),this.unsubs.push(this.options.observeElementOffset(this,(e,t)=>{if(t&&null===this._intendedScrollOffset&&e===this.scrollOffset)return;null!==this._intendedScrollOffset&&1.5>Math.abs(e-this._intendedScrollOffset)&&(e=this._intendedScrollOffset),this._intendedScrollOffset=null,this.scrollAdjustments=0;let n=this.getScrollOffset();this.scrollDirection=t?n===e?this.scrollDirection:n<e?"forward":"backward":null,this.scrollOffset=e,this.isScrolling=t,this._flushIosDeferredIfReady(),this.scrollState&&this.scheduleScrollReconcile(),this.maybeNotify()})),"addEventListener"in this.scrollElement){let e=this.scrollElement,t=()=>{this._iosTouching=!0,this._iosJustTouchEnded=!1,null!==this._iosTouchEndTimerId&&null!=this.targetWindow&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)},n=()=>{this._iosTouching=!1,i()&&null!=this.targetWindow&&(this._iosJustTouchEnded=!0,this._iosTouchEndTimerId=this.targetWindow.setTimeout(()=>{this._iosJustTouchEnded=!1,this._iosTouchEndTimerId=null,this._flushIosDeferredIfReady()},150))};e.addEventListener("touchstart",t,m),e.addEventListener("touchend",n,m),this.unsubs.push(()=>{e.removeEventListener("touchstart",t),e.removeEventListener("touchend",n),null!==this._iosTouchEndTimerId&&null!=this.targetWindow&&(this.targetWindow.clearTimeout(this._iosTouchEndTimerId),this._iosTouchEndTimerId=null)})}this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})}let n=this.pendingScrollAnchor;if(this.pendingScrollAnchor=null,n&&this.scrollElement&&this.options.enabled){let[e,t,a,o]=n;null===e||a||(i()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?0!==o&&(this._iosDeferredAdjustment+=o):this._scrollToOffset(this.getScrollOffset(),{adjustments:void 0,behavior:void 0})),a&&this.scrollToEnd({behavior:a})}},this._flushIosDeferredIfReady=()=>{if(0===this._iosDeferredAdjustment||this.isScrolling||this._iosTouching||this._iosJustTouchEnded)return;let e=this.getScrollOffset(),t=this.getMaxScrollOffset();if(e<0||e>t)return;let n=this._iosDeferredAdjustment;this._iosDeferredAdjustment=0,this._scrollToOffset(e,{adjustments:this.scrollAdjustments+=n,behavior:void 0})},this.rafId=null,this.getSize=()=>this.options.enabled?(this.scrollRect=this.scrollRect??this.options.initialRect,this.scrollRect[this.options.horizontal?"width":"height"]):(this.scrollRect=null,0),this.getScrollOffset=()=>this.options.enabled?(this.scrollOffset=this.scrollOffset??("function"==typeof this.options.initialOffset?this.options.initialOffset():this.options.initialOffset),this.scrollOffset):(this.scrollOffset=null,0),this.getFurthestMeasurement=(e,t)=>{let n=new Map,a=new Map;for(let o=t-1;o>=0;o--){let t=e[o];if(n.has(t.lane))continue;let l=a.get(t.lane);if(null==l||t.end>l.end?a.set(t.lane,t):t.end<l.end&&n.set(t.lane,!0),n.size===this.options.lanes)break}return a.size===this.options.lanes?Array.from(a.values()).sort((e,t)=>e.end===t.end?e.index-t.index:e.end-t.end)[0]:void 0},this.getMeasurementOptions=o(()=>[this.options.count,this.options.paddingStart,this.options.scrollMargin,this.options.getItemKey,this.options.enabled,this.options.lanes,this.options.laneAssignmentMode],(e,t,n,a,o,l,i)=>(void 0!==this.prevLanes&&this.prevLanes!==l&&(this.lanesChangedFlag=!0),this.prevLanes=l,this.pendingMin=null,{count:e,paddingStart:t,scrollMargin:n,getItemKey:a,enabled:o,lanes:l,laneAssignmentMode:i}),{key:!1}),this.getMeasurements=o(()=>[this.getMeasurementOptions(),this.itemSizeCacheVersion],({count:e,paddingStart:t,scrollMargin:n,getItemKey:a,enabled:o,lanes:l,laneAssignmentMode:i},r)=>{let s=this.itemSizeCache;if(!o)return this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),[];if(this.laneAssignments.size>e)for(let t of this.laneAssignments.keys())t>=e&&this.laneAssignments.delete(t);this.lanesChangedFlag&&(this.lanesChangedFlag=!1,this.lanesSettling=!0,this.measurementsCache=[],this.itemSizeCache.clear(),this.laneAssignments.clear(),this.pendingMin=null),0!==this.measurementsCache.length||this.lanesSettling||(this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(e=>{this.itemSizeCache.set(e.key,e.size)}));let c=this.lanesSettling?0:this.pendingMin??0;if(this.pendingMin=null,this.lanesSettling&&this.measurementsCache.length===e&&(this.lanesSettling=!1),1===l){var d;let o,l=this.options.gap,i=2*e,r=this._flatMeasurements;if(!r||r.length<i){let e=new Float64Array(i);r&&c>0&&e.set(r.subarray(0,2*c)),r=e,this._flatMeasurements=r}if(0===c)o=t+n;else{let e=c-1;o=r[2*e]+r[2*e+1]+l}for(let t=c;t<e;t++){let e=a(t),n=s.get(e),i="number"==typeof n?n:this.options.estimateSize(t);r[2*t]=o,r[2*t+1]=i,o+=i+l}let m=(d=r,new Proxy(Array(e),{get(t,n,o){if("string"==typeof n){let o=n.charCodeAt(0);if(o>=48&&o<=57){let o=+n;if(Number.isInteger(o)&&o>=0&&o<e){let e=t[o];if(!e){let n=d[2*o];e=t[o]={index:o,key:a(o),start:n,size:d[2*o+1],end:n+d[2*o+1],lane:0}}return e}}if("length"===n)return e}return Reflect.get(t,n,o)}}));return this.measurementsCache=m,m}let m=this.measurementsCache.slice(0,c),u=Array(l).fill(void 0);for(let e=0;e<c;e++){let t=m[e];t&&(u[t.lane]=e)}for(let o=c;o<e;o++){let e,l,r=a(o),c=this.laneAssignments.get(o),d="estimate"===i||s.has(r);if(void 0!==c&&this.options.lanes>1){let a=u[e=c],o=void 0!==a?m[a]:void 0;l=o?o.end+this.options.gap:t+n}else{let a=1===this.options.lanes?m[o-1]:this.getFurthestMeasurement(m,o);l=a?a.end+this.options.gap:t+n,e=a?a.lane:o%this.options.lanes,this.options.lanes>1&&d&&this.laneAssignments.set(o,e)}let h=s.get(r),p="number"==typeof h?h:this.options.estimateSize(o),f=l+p;m[o]={index:o,start:l,size:p,end:f,key:r,lane:e},u[e]=o}return this.measurementsCache=m,m},{key:!1,debug:()=>this.options.debug}),this.calculateRange=o(()=>[this.getMeasurements(),this.getSize(),this.getScrollOffset(),this.options.lanes],(e,t,n,a)=>0===e.length||0===t?(this.range=null,null):(this.range=function(e,t,n,a,o){let l=e.length-1;if(e.length<=a)return{startIndex:0,endIndex:l};if(1===a&&null!==o){let e=function(e,t,n){let a=0;for(;a<=t;){let o=(a+t)/2|0,l=e[2*o];if(l<n)a=o+1;else{if(!(l>n))return o;t=o-1}}return a>0?a-1:0}(o,l,n),a=e,i=n+t;for(;a<l&&o[2*a]+o[2*a+1]<i;)a++;return{startIndex:e,endIndex:a}}let i=T(0,l,t=>e[t].start,n),r=i;if(1===a)for(;r<l&&e[r].end<n+t;)r++;else if(a>1){let o=Array(a).fill(0);for(;r<l&&o.some(e=>e<n+t);){let t=e[r];o[t.lane]=t.end,r++}let s=Array(a).fill(n+t);for(;i>=0&&s.some(e=>e>=n);){let t=e[i];s[t.lane]=t.start,i--}i=Math.max(0,i-i%a),r=Math.min(l,r+(a-1-r%a))}return{startIndex:i,endIndex:r}}(e,t,n,a,1===a&&null!=this._flatMeasurements?this._flatMeasurements:null),this.range),{key:!1,debug:()=>this.options.debug}),this.getVirtualIndexes=o(()=>{let e=null,t=null,n=this.calculateRange();return n&&(e=n.startIndex,t=n.endIndex),this.maybeNotify.updateDeps([this.isScrolling,e,t]),[this.options.rangeExtractor,this.options.overscan,this.options.count,e,t]},(e,t,n,a,o)=>null===a||null===o?[]:e({startIndex:a,endIndex:o,overscan:t,count:n}),{key:!1,debug:()=>this.options.debug}),this.indexFromElement=e=>{let t=this.options.indexAttribute,n=e.getAttribute(t);return n?parseInt(n,10):(console.warn(`Missing attribute name '${t}={index}' on measured element.`),-1)},this.shouldMeasureDuringScroll=e=>{var t;if(!this.scrollState||"smooth"!==this.scrollState.behavior)return!0;let n=this.scrollState.index??(null==(t=this.getVirtualItemForOffset(this.scrollState.lastTargetOffset))?void 0:t.index);if(void 0!==n&&this.range){let t=Math.max(this.options.overscan,Math.ceil((this.range.endIndex-this.range.startIndex)/2)),a=Math.max(0,n-t),o=Math.min(this.options.count-1,n+t);return e>=a&&e<=o}return!0},this.measureElement=e=>{if(!e)return void this.elementsCache.forEach((e,t)=>{e.isConnected||(this.observer.unobserve(e),this.elementsCache.delete(t))});let t=this.indexFromElement(e),n=this.options.getItemKey(t),a=this.elementsCache.get(n);a!==e&&(a&&this.observer.unobserve(a),this.observer.observe(e),this.elementsCache.set(n,e)),(!this.isScrolling||this.scrollState)&&this.shouldMeasureDuringScroll(t)&&this.resizeItem(t,this.options.measureElement(e,void 0,this))},this.resizeItem=(e,t)=>{var n,a;let o,l,i;if(e<0||e>=this.options.count)return;let r=this._flatMeasurements;if(1===this.options.lanes&&null!==r)i=this.options.getItemKey(e),l=r[2*e],o=r[2*e+1];else{let t=this.measurementsCache[e];if(!t)return;i=t.key,l=t.start,o=t.size}let s=t-(this.itemSizeCache.get(i)??o);if(0!==s){let r="end"===this.options.anchorTo&&(null==(n=this.scrollState)?void 0:n.behavior)!=="smooth"&&this.getVirtualDistanceFromEnd()<=this.options.scrollEndThreshold,c=r?this.getTotalSize():0,d=(null==(a=this.scrollState)?void 0:a.behavior)!=="smooth"&&(void 0!==this.shouldAdjustScrollPositionOnItemSizeChange?this.shouldAdjustScrollPositionOnItemSizeChange(this.measurementsCache[e]??{index:e,key:i,start:l,size:o,end:l+o,lane:0},s,this):l<this.getScrollOffset()+this.scrollAdjustments&&(!this.itemSizeCache.has(i)||"backward"!==this.scrollDirection));(null===this.pendingMin||e<this.pendingMin)&&(this.pendingMin=e),this.itemSizeCache.set(i,t),this.itemSizeCacheVersion++,r?this.applyScrollAdjustment(this.getTotalSize()-c):d&&this.applyScrollAdjustment(s),this.notify(!1)}},this.getVirtualItems=o(()=>[this.getVirtualIndexes(),this.getMeasurements()],(e,t)=>{let n=[];for(let a=0,o=e.length;a<o;a++){let o=t[e[a]];n.push(o)}return n},{key:!1,debug:()=>this.options.debug}),this.getVirtualItemForOffset=e=>{let t=this.getMeasurements();if(0===t.length)return;let n=this._flatMeasurements,a=1===this.options.lanes&&null!=n,o=T(0,t.length-1,a?e=>n[2*e]:e=>l(t[e]).start,e);return l(t[o])},this.getMaxScrollOffset=()=>{if(!this.scrollElement)return 0;if("scrollHeight"in this.scrollElement)return this.options.horizontal?this.scrollElement.scrollWidth-this.scrollElement.clientWidth:this.scrollElement.scrollHeight-this.scrollElement.clientHeight;{let e=this.scrollElement.document.documentElement;return this.options.horizontal?e.scrollWidth-this.scrollElement.innerWidth:e.scrollHeight-this.scrollElement.innerHeight}},this.getVirtualDistanceFromEnd=()=>Math.max(this.getTotalSize()-this.getSize()-this.getScrollOffset(),0),this.getDistanceFromEnd=()=>Math.max(this.getMaxScrollOffset()-this.getScrollOffset(),0),this.isAtEnd=(e=this.options.scrollEndThreshold)=>this.getDistanceFromEnd()<=e,this.getOffsetForAlignment=(e,t,n=0)=>{if(!this.scrollElement)return 0;let a=this.getSize(),o=this.getScrollOffset();return"auto"===t&&(t=e>=o+a?"end":"start"),"center"===t?e+=(n-a)/2:"end"===t&&(e-=a),Math.max(Math.min(this.getMaxScrollOffset(),e),0)},this.getOffsetForIndex=(e,t="auto")=>{e=Math.max(0,Math.min(e,this.options.count-1));let n=this.getSize(),a=this.getScrollOffset(),o=this.measurementsCache[e];if(!o)return;if("auto"===t)if(o.end>=a+n-this.options.scrollPaddingEnd)t="end";else{if(!(o.start<=a+this.options.scrollPaddingStart))return[a,t];t="start"}if("end"===t&&e===this.options.count-1)return[this.getMaxScrollOffset(),t];let l="end"===t?o.end+this.options.scrollPaddingEnd:o.start-this.options.scrollPaddingStart;return[this.getOffsetForAlignment(l,t,o.size),t]},this.scrollToOffset=(e,{align:t="start",behavior:n="auto"}={})=>{let a=this.getOffsetForAlignment(e,t),o=this.now();this.scrollState={index:null,align:t,behavior:n,startedAt:o,lastTargetOffset:a,stableFrames:0},this._scrollToOffset(a,{adjustments:void 0,behavior:n}),this.scheduleScrollReconcile()},this.scrollToIndex=(e,{align:t="auto",behavior:n="auto"}={})=>{e=Math.max(0,Math.min(e,this.options.count-1));let a=this.getOffsetForIndex(e,t);if(!a)return;let[o,l]=a,i=this.now();this.scrollState={index:e,align:l,behavior:n,startedAt:i,lastTargetOffset:o,stableFrames:0},this._scrollToOffset(o,{adjustments:void 0,behavior:n}),this.scheduleScrollReconcile()},this.scrollBy=(e,{behavior:t="auto"}={})=>{let n=this.getScrollOffset()+e,a=this.now();this.scrollState={index:null,align:"start",behavior:t,startedAt:a,lastTargetOffset:n,stableFrames:0},this._scrollToOffset(n,{adjustments:void 0,behavior:t}),this.scheduleScrollReconcile()},this.scrollToEnd=({behavior:e="auto"}={})=>{this.options.count>0?this.scrollToIndex(this.options.count-1,{align:"end",behavior:e}):this.scrollToOffset(Math.max(this.getTotalSize()-this.getSize(),0),{behavior:e})},this.getTotalSize=()=>{var e;let t,n=this.getMeasurements();if(0===n.length)t=this.options.paddingStart;else if(1===this.options.lanes){let a=n.length-1,o=this._flatMeasurements;t=null!=o?o[2*a]+o[2*a+1]:(null==(e=n[a])?void 0:e.end)??0}else{let e=Array(this.options.lanes).fill(null),a=n.length-1;for(;a>=0&&e.some(e=>null===e);){let t=n[a];null===e[t.lane]&&(e[t.lane]=t.end),a--}t=Math.max(...e.filter(e=>null!==e))}return Math.max(t-this.options.scrollMargin+this.options.paddingEnd,0)},this.takeSnapshot=()=>{let e=[];if(0===this.itemSizeCache.size)return e;for(let t of this.getMeasurements())t&&this.itemSizeCache.has(t.key)&&e.push({index:t.index,key:t.key,start:t.start,size:t.size,end:t.end,lane:t.lane});return e},this._scrollToOffset=(e,{adjustments:t,behavior:n})=>{this._intendedScrollOffset=e+(t??0),this.options.scrollToFn(e,{behavior:n,adjustments:t},this)},this.measure=()=>{this.pendingMin=null,this.itemSizeCache.clear(),this.laneAssignments.clear(),this.itemSizeCacheVersion++,this.notify(!1)},this.setOptions(e)}applyScrollAdjustment(e,t){0!==e&&(i()&&(this.isScrolling||this._iosTouching||this._iosJustTouchEnded)?this._iosDeferredAdjustment+=e:(this._scrollToOffset(this.getScrollOffset(),{adjustments:this.scrollAdjustments+=e,behavior:t}),null!==this.scrollOffset&&(this.scrollOffset+=this.scrollAdjustments,this.scrollAdjustments=0)))}scheduleScrollReconcile(){if(!this.targetWindow){this.scrollState=null;return}null==this.rafId&&(this.rafId=this.targetWindow.requestAnimationFrame(()=>{this.rafId=null,this.reconcileScroll()}))}reconcileScroll(){if(!this.scrollState||!this.scrollElement)return;if(this.now()-this.scrollState.startedAt>5e3){this.scrollState=null;return}let e=null!=this.scrollState.index?this.getOffsetForIndex(this.scrollState.index,this.scrollState.align):void 0,t=e?e[0]:this.scrollState.lastTargetOffset,n=t!==this.scrollState.lastTargetOffset;if(!n&&1.01>Math.abs(t-this.getScrollOffset())){if(this.scrollState.stableFrames++,this.scrollState.stableFrames>=1){this.getScrollOffset()!==t&&this._scrollToOffset(t,{adjustments:void 0,behavior:"auto"}),this.scrollState=null;return}}else if(this.scrollState.stableFrames=0,n){let e=this.getSize()||600,n=Math.abs(t-this.getScrollOffset()),a="smooth"===this.scrollState.behavior&&n>e;this.scrollState.lastTargetOffset=t,a||(this.scrollState.behavior="auto"),this._scrollToOffset(t,{adjustments:void 0,behavior:a?"smooth":"auto"})}this.scheduleScrollReconcile()}}let T=(e,t,n,a)=>{for(;e<=t;){let o=(e+t)/2|0,l=n(o);if(l<a)e=o+1;else{if(!(l>a))return o;t=o-1}}return e>0?e-1:0},g="u">typeof document?n.useLayoutEffect:n.useEffect;e.s(["useVirtualizer",0,function(e){return function({useFlushSync:e=!0,directDomUpdates:t=!1,directDomUpdatesMode:o="transform",...l}){let i=n.useReducer(e=>e+1,0)[1],r=n.useRef({enabled:t,mode:o,container:null,lastSize:null,lastPositions:new WeakMap,prevRange:null});r.current.enabled=t,r.current.mode=o;let s=e=>{let t=r.current;if(!t.enabled||!t.container)return;let n=e.getTotalSize();if(n!==t.lastSize){t.lastSize=n;let a=e.options.horizontal?"width":"height";t.container.style[a]=`${n}px`}let a=!!e.options.horizontal,o="transform"===t.mode,l=a?"left":"top",i=e.options.scrollMargin;for(let n of e.getVirtualItems()){let r=n.start-i,s=e.elementsCache.get(n.key);s&&t.lastPositions.get(s)!==r&&(t.lastPositions.set(s,r),o?s.style.transform=a?`translate3d(${r}px, 0, 0)`:`translate3d(0, ${r}px, 0)`:s.style[l]=`${r}px`)}},c={...l,onChange:(t,n)=>{var o;let c=r.current,d=!0;if(c.enabled){s(t);let e=t.range,n=c.prevRange;(d=!n||n.isScrolling!==t.isScrolling||n.startIndex!==(null==e?void 0:e.startIndex)||n.endIndex!==(null==e?void 0:e.endIndex))&&(c.prevRange=e?{startIndex:e.startIndex,endIndex:e.endIndex,isScrolling:t.isScrolling}:null)}d&&(e&&n?(0,a.flushSync)(i):i()),null==(o=l.onChange)||o.call(l,t,n)}},[d]=n.useState(()=>{let e=new b(c);return Object.assign(e,{containerRef:t=>{let n=r.current;if(n.container=t,n.lastSize=null,t&&n.enabled){let a=e.getTotalSize();n.lastSize=a;let o=e.options.horizontal?"width":"height";t.style[o]=`${a}px`}}})});return d.setOptions(c),g(()=>d._didMount(),[]),g(()=>d._willUpdate()),g(()=>{s(d)}),d}({observeElementRect:d,observeElementOffset:h,scrollToFn:f,...e})}],463044)},613688,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M144,96a16,16,0,1,1,16,16A16,16,0,0,1,144,96Zm92-40V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56ZM44,60v79.72l33.86-33.86a20,20,0,0,1,28.28,0L147.31,147l17.18-17.17a20,20,0,0,1,28.28,0L212,149.09V60Zm0,136H162.34L92,125.66l-48,48Zm168,0V183l-33.37-33.37L164.28,164l32,32Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,56V178.06l-39.72-39.72a8,8,0,0,0-11.31,0L147.31,164,97.66,114.34a8,8,0,0,0-11.32,0L32,168.69V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z",opacity:"0.2"}),t.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM156,88a12,12,0,1,1-12,12A12,12,0,0,1,156,88Zm60,112H40V160.69l46.34-46.35a8,8,0,0,1,11.32,0h0L165,181.66a8,8,0,0,0,11.32-11.32l-17.66-17.65L173,138.34a8,8,0,0,1,11.31,0L216,170.07V200Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V163.57L188.53,134.1a14,14,0,0,0-19.8,0l-21.42,21.42L101.9,110.1a14,14,0,0,0-19.8,0L38,154.2V56A2,2,0,0,1,40,54ZM38,200V171.17l52.58-52.58a2,2,0,0,1,2.84,0L176.83,202H40A2,2,0,0,1,38,200Zm178,2H193.8l-38-38,21.41-21.42a2,2,0,0,1,2.83,0l38,38V200A2,2,0,0,1,216,202ZM146,100a10,10,0,1,1,10,10A10,10,0,0,1,146,100Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4V168.4l-32.89-32.89a12,12,0,0,0-17,0l-22.83,22.83-46.82-46.83a12,12,0,0,0-17,0L36,159V56A4,4,0,0,1,40,52ZM36,200V170.34l53.17-53.17a4,4,0,0,1,5.66,0L181.66,204H40A4,4,0,0,1,36,200Zm180,4H193l-40-40,22.83-22.83a4,4,0,0,1,5.66,0L220,179.71V200A4,4,0,0,1,216,204ZM148,100a8,8,0,1,1,8,8A8,8,0,0,1,148,100Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(n.default,{ref:o,...e,weights:a}));o.displayName="ImageIcon",e.s(["ImageIcon",0,o],613688)},900374,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,76a52,52,0,1,0,52,52A52.06,52.06,0,0,0,128,76Zm0,80a28,28,0,1,1,28-28A28,28,0,0,1,128,156Zm113.86-49.57A12,12,0,0,0,236,98.34L208.21,82.49l-.11-31.31a12,12,0,0,0-4.25-9.12,116,116,0,0,0-38-21.41,12,12,0,0,0-9.68.89L128,37.27,99.83,21.53a12,12,0,0,0-9.7-.9,116.06,116.06,0,0,0-38,21.47,12,12,0,0,0-4.24,9.1l-.14,31.34L20,98.35a12,12,0,0,0-5.85,8.11,110.7,110.7,0,0,0,0,43.11A12,12,0,0,0,20,157.66l27.82,15.85.11,31.31a12,12,0,0,0,4.25,9.12,116,116,0,0,0,38,21.41,12,12,0,0,0,9.68-.89L128,218.73l28.14,15.74a12,12,0,0,0,9.7.9,116.06,116.06,0,0,0,38-21.47,12,12,0,0,0,4.24-9.1l.14-31.34,27.81-15.81a12,12,0,0,0,5.85-8.11A110.7,110.7,0,0,0,241.86,106.43Zm-22.63,33.18-26.88,15.28a11.94,11.94,0,0,0-4.55,4.59c-.54,1-1.11,1.93-1.7,2.88a12,12,0,0,0-1.83,6.31L184.13,199a91.83,91.83,0,0,1-21.07,11.87l-27.15-15.19a12,12,0,0,0-5.86-1.53h-.29c-1.14,0-2.3,0-3.44,0a12.08,12.08,0,0,0-6.14,1.51L93,210.82A92.27,92.27,0,0,1,71.88,199l-.11-30.24a12,12,0,0,0-1.83-6.32c-.58-.94-1.16-1.91-1.7-2.88A11.92,11.92,0,0,0,63.7,155L36.8,139.63a86.53,86.53,0,0,1,0-23.24l26.88-15.28a12,12,0,0,0,4.55-4.58c.54-1,1.11-1.94,1.7-2.89a12,12,0,0,0,1.83-6.31L71.87,57A91.83,91.83,0,0,1,92.94,45.17l27.15,15.19a11.92,11.92,0,0,0,6.15,1.52c1.14,0,2.3,0,3.44,0a12.08,12.08,0,0,0,6.14-1.51L163,45.18A92.27,92.27,0,0,1,184.12,57l.11,30.24a12,12,0,0,0,1.83,6.32c.58.94,1.16,1.91,1.7,2.88A11.92,11.92,0,0,0,192.3,101l26.9,15.33A86.53,86.53,0,0,1,219.23,139.61Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M230.1,108.76,198.25,90.62c-.64-1.16-1.31-2.29-2-3.41l-.12-36A104.61,104.61,0,0,0,162,32L130,49.89c-1.34,0-2.69,0-4,0L94,32A104.58,104.58,0,0,0,59.89,51.25l-.16,36c-.7,1.12-1.37,2.26-2,3.41l-31.84,18.1a99.15,99.15,0,0,0,0,38.46l31.85,18.14c.64,1.16,1.31,2.29,2,3.41l.12,36A104.61,104.61,0,0,0,94,224l32-17.87c1.34,0,2.69,0,4,0L162,224a104.58,104.58,0,0,0,34.08-19.25l.16-36c.7-1.12,1.37-2.26,2-3.41l31.84-18.1A99.15,99.15,0,0,0,230.1,108.76ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z",opacity:"0.2"}),t.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.1,8.1,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8,8,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M237.94,107.21a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A111.92,111.92,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.63a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,82a46,46,0,1,0,46,46A46.06,46.06,0,0,0,128,82Zm0,80a34,34,0,1,1,34-34A34,34,0,0,1,128,162Zm108-54.4a6,6,0,0,0-2.92-4L202.64,86.22l-.42-.71L202.1,51.2A6,6,0,0,0,200,46.64a110.12,110.12,0,0,0-36.07-20.31,6,6,0,0,0-4.84.45L128.46,43.86h-1L96.91,26.76a6,6,0,0,0-4.86-.44A109.92,109.92,0,0,0,56,46.68a6,6,0,0,0-2.12,4.55l-.16,34.34c-.14.23-.28.47-.41.71L22.91,103.57A6,6,0,0,0,20,107.62a104.81,104.81,0,0,0,0,40.78,6,6,0,0,0,2.92,4l30.42,17.33.42.71.12,34.31A6,6,0,0,0,56,209.36a110.12,110.12,0,0,0,36.07,20.31,6,6,0,0,0,4.84-.45l30.61-17.08h1l30.56,17.1A6.09,6.09,0,0,0,162,230a5.83,5.83,0,0,0,1.93-.32,109.92,109.92,0,0,0,36-20.36,6,6,0,0,0,2.12-4.55l.16-34.34c.14-.23.28-.47.41-.71l30.42-17.29a6,6,0,0,0,2.92-4.05A104.81,104.81,0,0,0,236,107.6Zm-11.25,35.79L195.32,160.1a6.07,6.07,0,0,0-2.28,2.3c-.59,1-1.21,2.11-1.86,3.14a6,6,0,0,0-.91,3.16l-.16,33.21a98.15,98.15,0,0,1-27.52,15.53L133,200.88a6,6,0,0,0-2.93-.77h-.14c-1.24,0-2.5,0-3.74,0a6,6,0,0,0-3.07.76L93.45,217.43a98,98,0,0,1-27.56-15.49l-.12-33.17a6,6,0,0,0-.91-3.16c-.64-1-1.27-2.08-1.86-3.14a6,6,0,0,0-2.27-2.3L31.3,143.4a93,93,0,0,1,0-30.79L60.68,95.9A6.07,6.07,0,0,0,63,93.6c.59-1,1.21-2.11,1.86-3.14a6,6,0,0,0,.91-3.16l.16-33.21A98.15,98.15,0,0,1,93.41,38.56L123,55.12a5.81,5.81,0,0,0,3.07.76c1.24,0,2.5,0,3.74,0a6,6,0,0,0,3.07-.76l29.65-16.56a98,98,0,0,1,27.56,15.49l.12,33.17a6,6,0,0,0,.91,3.16c.64,1,1.27,2.08,1.86,3.14a6,6,0,0,0,2.27,2.3L224.7,112.6A93,93,0,0,1,224.73,143.39Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm109.94-52.79a8,8,0,0,0-3.89-5.4l-29.83-17-.12-33.62a8,8,0,0,0-2.83-6.08,111.91,111.91,0,0,0-36.72-20.67,8,8,0,0,0-6.46.59L128,41.85,97.88,25a8,8,0,0,0-6.47-.6A112.1,112.1,0,0,0,54.73,45.15a8,8,0,0,0-2.83,6.07l-.15,33.65-29.83,17a8,8,0,0,0-3.89,5.4,106.47,106.47,0,0,0,0,41.56,8,8,0,0,0,3.89,5.4l29.83,17,.12,33.62a8,8,0,0,0,2.83,6.08,111.91,111.91,0,0,0,36.72,20.67,8,8,0,0,0,6.46-.59L128,214.15,158.12,231a7.91,7.91,0,0,0,3.9,1,8.09,8.09,0,0,0,2.57-.42,112.1,112.1,0,0,0,36.68-20.73,8,8,0,0,0,2.83-6.07l.15-33.65,29.83-17a8,8,0,0,0,3.89-5.4A106.47,106.47,0,0,0,237.94,107.21Zm-15,34.91-28.57,16.25a8,8,0,0,0-3,3c-.58,1-1.19,2.06-1.81,3.06a7.94,7.94,0,0,0-1.22,4.21l-.15,32.25a95.89,95.89,0,0,1-25.37,14.3L134,199.13a8,8,0,0,0-3.91-1h-.19c-1.21,0-2.43,0-3.64,0a8.08,8.08,0,0,0-4.1,1l-28.84,16.1A96,96,0,0,1,67.88,201l-.11-32.2a8,8,0,0,0-1.22-4.22c-.62-1-1.23-2-1.8-3.06a8.09,8.09,0,0,0-3-3.06l-28.6-16.29a90.49,90.49,0,0,1,0-28.26L61.67,97.63a8,8,0,0,0,3-3c.58-1,1.19-2.06,1.81-3.06a7.94,7.94,0,0,0,1.22-4.21l.15-32.25a95.89,95.89,0,0,1,25.37-14.3L122,56.87a8,8,0,0,0,4.1,1c1.21,0,2.43,0,3.64,0a8.08,8.08,0,0,0,4.1-1l28.84-16.1A96,96,0,0,1,188.12,55l.11,32.2a8,8,0,0,0,1.22,4.22c.62,1,1.23,2,1.8,3.06a8.09,8.09,0,0,0,3,3.06l28.6,16.29A90.49,90.49,0,0,1,222.9,142.12Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,84a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,84Zm0,80a36,36,0,1,1,36-36A36,36,0,0,1,128,164Zm106-56a4,4,0,0,0-2-2.7l-30.89-17.6q-.47-.82-1-1.62L200.1,51.2a3.94,3.94,0,0,0-1.42-3,107.8,107.8,0,0,0-35.41-19.94,4,4,0,0,0-3.23.29L129,45.87h-2l-31-17.36a4,4,0,0,0-3.23-.3,108.05,108.05,0,0,0-35.39,20,4,4,0,0,0-1.41,3l-.16,34.9-1,1.62L23.9,105.3A4,4,0,0,0,22,108a102.76,102.76,0,0,0,0,40,4,4,0,0,0,1.95,2.7l30.89,17.6q.47.83,1,1.62l.12,34.87a3.94,3.94,0,0,0,1.42,3,107.8,107.8,0,0,0,35.41,19.94,4,4,0,0,0,3.23-.29L127,210.13h2l31,17.36a4,4,0,0,0,3.23.3,108.05,108.05,0,0,0,35.39-20,4,4,0,0,0,1.41-3l.16-34.9,1-1.62L232.1,150.7a4,4,0,0,0,2-2.71A102.76,102.76,0,0,0,234,108Zm-7.48,36.67L196.3,161.84a4,4,0,0,0-1.51,1.53c-.61,1.09-1.25,2.17-1.91,3.24a3.92,3.92,0,0,0-.61,2.1l-.16,34.15a99.8,99.8,0,0,1-29.7,16.77l-30.4-17a4.06,4.06,0,0,0-2-.51H130c-1.28,0-2.57,0-3.84,0a4.1,4.1,0,0,0-2.05.51l-30.45,17A100.23,100.23,0,0,1,63.89,202.9l-.12-34.12a3.93,3.93,0,0,0-.61-2.11c-.66-1-1.3-2.14-1.91-3.23a4,4,0,0,0-1.51-1.53L29.49,144.68a94.78,94.78,0,0,1,0-33.34L59.7,94.16a4,4,0,0,0,1.51-1.53c.61-1.09,1.25-2.17,1.91-3.23a4,4,0,0,0,.61-2.11l.16-34.15a99.8,99.8,0,0,1,29.7-16.77l30.4,17a4.1,4.1,0,0,0,2.05.51c1.28,0,2.57,0,3.84,0a4,4,0,0,0,2.05-.51l30.45-17A100.23,100.23,0,0,1,192.11,53.1l.12,34.12a3.93,3.93,0,0,0,.61,2.11c.66,1,1.3,2.14,1.91,3.23a4,4,0,0,0,1.51,1.53l30.25,17.23A94.78,94.78,0,0,1,226.54,144.66Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(n.default,{ref:o,...e,weights:a}));o.displayName="GearSixIcon",e.s(["GearSixIcon",0,o],900374)},505716,e=>{"use strict";var t=e.i(749218),n=e.i(481178),a=e.i(951254),o=e.i(44091),l=e.i(391466),i=e.i(275519),r=e.i(232471),s=e.i(476273),c=e.i(34515),d=e.i(935769),m={root:"m_6e45937b",loader:"m_e8eb006c",overlay:"m_df587f17"},u=e.i(391398);let h={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,t.getDefaultZIndex)("overlay")},p=(0,n.createVarsResolver)((e,{zIndex:t})=>({root:{"--lo-z-index":t?.toString()}})),f=(0,i.factory)(e=>{let t=(0,o.useProps)("LoadingOverlay",h,e),{classNames:n,className:i,style:f,styles:b,unstyled:T,vars:g,transitionProps:y,loaderProps:x,overlayProps:v,visible:M,zIndex:j,attributes:C,onEnter:A,onEntered:D,onExit:S,onExited:k,...w}=t,I=(0,a.useMantineTheme)(),E=(0,l.useStyles)({name:"LoadingOverlay",classes:m,props:t,className:i,style:f,classNames:n,styles:b,unstyled:T,attributes:C,vars:g,varsResolver:p}),P={...h.overlayProps,...v};return(0,u.jsx)(c.Transition,{transition:"fade",...y,mounted:!!M,onEnter:A,onEntered:D,onExit:S,onExited:k,children:e=>(0,u.jsxs)(r.Box,{...E("root",{style:e}),...w,children:[(0,u.jsx)(d.Loader,{unstyled:T,...x,...E("loader",{className:x?.className,style:x?.style})}),(0,u.jsx)(s.Overlay,{...P,...E("overlay",{className:P?.className,style:P?.style}),darkHidden:!0,unstyled:T,color:v?.color||I.white}),(0,u.jsx)(s.Overlay,{...P,...E("overlay",{className:P?.className,style:P?.style}),lightHidden:!0,unstyled:T,color:v?.color||I.colors.dark[5]})]})})});f.classes=m,f.varsResolver=p,f.displayName="@mantine/core/LoadingOverlay",e.s(["LoadingOverlay",0,f],505716)},645640,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM100,56a28,28,0,0,1,56,0V76H100ZM204,204H52V100H204Zm-60-52a16,16,0,1,1-16-16A16,16,0,0,1,144,152Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z",opacity:"0.2"}),t.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm32-84H96V56a32,32,0,0,1,64,0Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,82H174V56a46,46,0,0,0-92,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82ZM94,56a34,34,0,0,1,68,0V82H94ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Zm-72-56a10,10,0,1,1-10-10A10,10,0,0,1,138,152Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,84H172V56a44,44,0,0,0-88,0V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84ZM92,56a36,36,0,0,1,72,0V84H92ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-76-56a8,8,0,1,1-8-8A8,8,0,0,1,136,152Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(n.default,{ref:o,...e,weights:a}));o.displayName="LockIcon",e.s(["LockIcon",0,o],645640)},29260,e=>{"use strict";var t=e.i(191788),n=e.i(123895),a=e.i(645640),o=e.i(79897),l=e.i(485108),i=e.i(37541),r=e.i(725695),s=e.i(505716),c=e.i(470743),d=e.i(937389),m=e.i(883364),u=e.i(841209),h=e.i(582498),p=e.i(391398);e.s(["AuthenticationForm",0,function({noShadow:e,noPadding:f,noSubmit:b,style:T}){let[g,y]=(0,t.useState)("register"),[x,v]=(0,t.useState)(!1),[M,j]=(0,t.useState)(null),C=(0,h.useForm)({initialValues:{firstName:"",lastName:"",email:"",password:"",confirmPassword:"",termsOfService:!0}});return(0,p.jsx)(c.Paper,{p:f?0:"lg",shadow:e?"none":"sm",style:{...T,position:"relative",backgroundColor:"var(--mantine-color-body)"},children:(0,p.jsxs)("form",{onSubmit:C.onSubmit(()=>{v(!0),j(null),setTimeout(()=>{v(!1),j("register"===g?"User with this email already exists":"User with this email does not exist")},3e3)}),children:[(0,p.jsx)(s.LoadingOverlay,{visible:x}),"register"===g&&(0,p.jsxs)(r.Group,{grow:!0,children:[(0,p.jsx)(u.TextInput,{"data-autofocus":!0,required:!0,placeholder:"Your first name",label:"First name",...C.getInputProps("firstName")}),(0,p.jsx)(u.TextInput,{required:!0,placeholder:"Your last name",label:"Last name",...C.getInputProps("lastName")})]}),(0,p.jsx)(u.TextInput,{mt:"md",required:!0,placeholder:"Your email",label:"Email",leftSection:(0,p.jsx)(n.AtIcon,{size:16}),...C.getInputProps("email")}),(0,p.jsx)(d.PasswordInput,{mt:"md",required:!0,placeholder:"Password",label:"Password",leftSection:(0,p.jsx)(a.LockIcon,{size:16}),...C.getInputProps("password")}),"register"===g&&(0,p.jsx)(d.PasswordInput,{mt:"md",required:!0,label:"Confirm Password",placeholder:"Confirm password",leftSection:(0,p.jsx)(a.LockIcon,{size:16}),...C.getInputProps("confirmPassword")}),"register"===g&&(0,p.jsx)(i.Checkbox,{mt:"xl",label:"I agree to sell my soul and privacy to this corporation",...C.getInputProps("termsOfService",{type:"checkbox"})}),M&&(0,p.jsx)(m.Text,{c:"red",size:"sm",mt:"sm",children:M}),!b&&(0,p.jsxs)(r.Group,{justify:"space-between",mt:"xl",children:[(0,p.jsx)(o.Anchor,{component:"button",type:"button",c:"dimmed",onClick:()=>{y(e=>"register"===e?"login":"register"),j(null)},size:"sm",children:"register"===g?"Have an account? Login":"Don't have an account? Register"}),(0,p.jsx)(l.Button,{color:"blue",type:"submit",children:"register"===g?"Register":"Login"})]})]})})}])},299593,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M164.24,100.24,136.48,128l27.76,27.76a6,6,0,1,1-8.48,8.48L128,136.48l-27.76,27.76a6,6,0,0,1-8.48-8.48L119.52,128,91.76,100.24a6,6,0,0,1,8.48-8.48L128,119.52l27.76-27.76a6,6,0,0,1,8.48,8.48ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M162.83,98.83,133.66,128l29.17,29.17a4,4,0,0,1-5.66,5.66L128,133.66,98.83,162.83a4,4,0,0,1-5.66-5.66L122.34,128,93.17,98.83a4,4,0,0,1,5.66-5.66L128,122.34l29.17-29.17a4,4,0,1,1,5.66,5.66ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(n.default,{ref:o,...e,weights:a}));o.displayName="XCircleIcon",e.s(["XCircleIcon",0,o],299593)},323121,e=>{"use strict";var t=e.i(191788);function n(e){let n=e.reduce((e,t)=>({...e,[t]:!1}),{}),[a,o]=(0,t.useState)(n),l=(0,t.useCallback)(e=>{o(t=>({...t,[e]:!0}))},[]),i=(0,t.useCallback)(e=>o(t=>({...t,[e]:!1})),[]),r=(0,t.useCallback)(e=>o(t=>({...t,[e]:!t[e]})),[]);return{state:a,open:l,close:i,closeAll:(0,t.useCallback)(()=>o(n),[]),toggle:r,register:(0,t.useCallback)(e=>({opened:a[e],onClose:()=>i(e),stackId:e}),[a])}}e.s(["useDrawersStack",0,n,"useModalsStack",0,n])},14625,e=>{"use strict";var t=e.i(648863),n=e.i(29260),a=e.i(485108),o=e.i(424302),l=e.i(391398),i=e.i(541772);let r={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:r}]=(0,i.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Modal,{opened:e,onClose:r,title:"Authentication",children:(0,l.jsx)(n.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,l.jsx)(a.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},s={type:"code",code:`
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

`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,i.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Modal,{opened:e,onClose:n,withCloseButton:!1,children:"Modal without header, press escape or click on overlay to close"}),(0,l.jsx)(a.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var c=e.i(191788),d=e.i(725695);let m=["xs","sm","md","lg","xl","55rem","70%","100%"],u={type:"code",component:function(){let[e,t]=(0,c.useState)(!1),[i,r]=(0,c.useState)("md"),s=m.map(e=>(0,l.jsx)(a.Button,{variant:"default",onClick:()=>{r(e),t(!0)},children:e},e));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Modal,{opened:e,onClose:()=>t(!1),title:"Introduce yourself!",size:i,children:(0,l.jsx)(n.AuthenticationForm,{noPadding:!0,noShadow:!0})}),(0,l.jsx)(d.Group,{justify:"center",children:s})]})}},h={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:r}]=(0,i.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Modal,{opened:e,onClose:r,title:"Authentication",overlayProps:{backgroundOpacity:.55,blur:3},children:(0,l.jsx)(n.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,l.jsx)(a.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},p={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,i.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Modal,{opened:e,onClose:n,title:"Header is sticky",children:Array(100).fill(0).map((e,t)=>(0,l.jsx)("p",{children:"Modal with scroll"},t))}),(0,l.jsx)(a.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},f={type:"code",code:`
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
`,component:function(){let[e,t]=(0,c.useState)(!1),[n,i]=(0,c.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Modal,{opened:n,onClose:()=>i(!1),title:"Please consider this",transitionProps:{transition:"rotate-left"},children:"rotate-left transition"}),(0,l.jsx)(o.Modal,{opened:e,onClose:()=>t(!1),title:"Please consider this",transitionProps:{transition:"fade",duration:600,timingFunction:"linear"},children:"fade transition 600ms linear transition"}),(0,l.jsxs)(d.Group,{justify:"center",children:[(0,l.jsx)(a.Button,{onClick:()=>i(!0),variant:"default",children:"Rotate left transition"}),(0,l.jsx)(a.Button,{onClick:()=>t(!0),variant:"default",children:"Fade transition"})]})]})}},b={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:r}]=(0,i.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Modal,{opened:e,onClose:r,title:"Authentication",centered:!0,children:(0,l.jsx)(n.AuthenticationForm,{noPadding:!0,noShadow:!0})}),(0,l.jsx)(a.Button,{variant:"default",onClick:t,children:"Open centered Modal"})]})}};var T=e.i(883364);let g={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:r}]=(0,i.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o.Modal,{opened:e,onClose:r,title:"This is a fullscreen modal",fullScreen:!0,radius:0,transitionProps:{transition:"fade",duration:200},children:[(0,l.jsx)(T.Text,{mb:"xl",children:"It takes the entire screen and does not have overlay and border-radius, you can use it small screens to save up some space. It also has fade transition by default, but you can change that with transition prop. Now here is an authentication form used in previous examples to see the difference."}),(0,l.jsx)(n.AuthenticationForm,{noPadding:!0,noShadow:!0})]}),(0,l.jsx)(a.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var y=e.i(257177),x=e.i(692385);let v={type:"code",component:function(){let[e,{close:t,open:n}]=(0,i.useDisclosure)(!1),[r,{increment:s,decrement:c}]=(0,x.useCounter)(3,{min:0}),m=Array(r).fill(0).map((e,t)=>(0,l.jsxs)(y.Badge,{children:["Badge ",t]},t));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o.Modal,{opened:e,onClose:t,size:"auto",title:"Modal size auto",children:[(0,l.jsx)(T.Text,{children:"Modal with size auto will fits its content"}),(0,l.jsx)(d.Group,{wrap:"nowrap",mt:"md",children:m}),(0,l.jsxs)(d.Group,{mt:"xl",children:[(0,l.jsx)(a.Button,{onClick:s,children:"Add badge"}),(0,l.jsx)(a.Button,{onClick:c,children:"Remove badge"})]})]}),(0,l.jsx)(a.Button,{variant:"default",onClick:n,children:"Open modal"})]})},centered:!0,code:`
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
`};var M=e.i(19300);let j={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,i.useDisclosure)(!1),r=Array(100).fill(0).map((e,t)=>(0,l.jsx)("p",{children:"Modal with scroll"},t));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Modal,{opened:e,onClose:n,title:"Header is sticky",scrollAreaComponent:M.ScrollArea.Autosize,children:r}),(0,l.jsx)(a.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},C={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,i.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o.Modal.Root,{opened:e,onClose:n,children:[(0,l.jsx)(o.Modal.Overlay,{}),(0,l.jsxs)(o.Modal.Content,{children:[(0,l.jsxs)(o.Modal.Header,{children:[(0,l.jsx)(o.Modal.Title,{children:"Modal title"}),(0,l.jsx)(o.Modal.CloseButton,{})]}),(0,l.jsx)(o.Modal.Body,{children:"Modal content"})]})]}),(0,l.jsx)(a.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},A={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:r}]=(0,i.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Modal,{opened:e,onClose:r,title:"Authentication",yOffset:"1vh",xOffset:0,children:(0,l.jsx)(n.AuthenticationForm,{noPadding:!0,noShadow:!0})}),(0,l.jsx)(a.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var D=e.i(841209);let S={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,i.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o.Modal,{opened:e,onClose:n,title:"Focus demo",children:[(0,l.jsx)(D.TextInput,{label:"First input",placeholder:"First input"}),(0,l.jsx)(D.TextInput,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,l.jsx)(a.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var k=e.i(779177),w=e.i(839608);let I={type:"code",code:`
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: ${(0,k.em)(800)})');

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
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,i.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Modal,{opened:e,onClose:n,title:"This is a fullscreen modal",fullScreen:(0,w.useMediaQuery)(`(max-width: ${(0,k.em)(800)})`),transitionProps:{transition:"fade",duration:200},children:"The Modal will be full screen only on mobile"}),(0,l.jsx)(a.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var E=e.i(299593);let P={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:r}]=(0,i.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Modal,{opened:e,onClose:r,title:"Authentication",closeButtonProps:{icon:(0,l.jsx)(E.XCircleIcon,{size:20})},children:(0,l.jsx)(n.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,l.jsx)(a.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var L=e.i(22630);let O={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,i.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o.Modal,{opened:e,onClose:n,title:"Focus demo",children:[(0,l.jsx)(L.FocusTrap.InitialFocus,{}),(0,l.jsx)(D.TextInput,{label:"First input",placeholder:"First input"}),(0,l.jsx)(D.TextInput,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,l.jsx)(a.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var B=e.i(323121);let z={type:"code",code:`
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
`,centered:!0,component:function(){let e=(0,B.useModalsStack)(["delete-page","confirm-action","really-confirm-action"]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(o.Modal.Stack,{children:[(0,l.jsxs)(o.Modal,{...e.register("delete-page"),title:"Delete this page?",children:["Are you sure you want to delete this page? This action cannot be undone.",(0,l.jsxs)(d.Group,{mt:"lg",justify:"flex-end",children:[(0,l.jsx)(a.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,l.jsx)(a.Button,{onClick:()=>e.open("confirm-action"),color:"red",children:"Delete"})]})]}),(0,l.jsxs)(o.Modal,{...e.register("confirm-action"),title:"Confirm action",children:["Are you sure you want to perform this action? This action cannot be undone. If you are sure, press confirm button below.",(0,l.jsxs)(d.Group,{mt:"lg",justify:"flex-end",children:[(0,l.jsx)(a.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,l.jsx)(a.Button,{onClick:()=>e.open("really-confirm-action"),color:"red",children:"Confirm"})]})]}),(0,l.jsxs)(o.Modal,{...e.register("really-confirm-action"),title:"Really confirm action",children:["Jokes aside. You have confirmed this action. This is your last chance to cancel it. After you press confirm button below, action will be performed and cannot be undone. For real this time. Are you sure you want to proceed?",(0,l.jsxs)(d.Group,{mt:"lg",justify:"flex-end",children:[(0,l.jsx)(a.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,l.jsx)(a.Button,{onClick:e.closeAll,color:"red",children:"Confirm"})]})]})]}),(0,l.jsx)(a.Button,{variant:"default",onClick:()=>e.open("delete-page"),children:"Open modal"})]})}},Y={type:"code",code:`
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
`,centered:!0,component:function(){let[e,t]=(0,i.useDisclosure)(!1),[n,r]=(0,i.useDisclosure)(!1),[s,m]=(0,c.useState)({title:"",message:""});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.Modal,{opened:e,onClose:()=>{t.close(),m({title:"",message:""})},transitionProps:{duration:300,exitDuration:1e3,transition:"fade-down"},title:s.title,children:s.message}),(0,l.jsx)(o.Modal,{opened:n,onClose:r.close,transitionProps:{duration:300,exitDuration:1e3,transition:"fade-down"},onExitTransitionEnd:()=>m({title:"",message:""}),title:s.title,children:s.message}),(0,l.jsxs)(d.Group,{children:[(0,l.jsx)(a.Button,{onClick:()=>{t.open(),m({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onClose"}),(0,l.jsx)(a.Button,{onClick:()=>{r.open(),m({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onExitTransitionEnd"})]})]})},defaultExpanded:!1};var _=(0,t.__exportAll)({centered:()=>b,closeIcon:()=>P,composition:()=>C,fullScreen:()=>g,fullScreenMobile:()=>I,header:()=>s,initialFocus:()=>S,initialFocusTrap:()=>O,offset:()=>A,overflow:()=>p,overlay:()=>h,scrollarea:()=>j,sizeAuto:()=>v,sizes:()=>u,stack:()=>z,transitionEnd:()=>Y,transitions:()=>f,usage:()=>r});e.s(["ModalDemos",0,_],14625)},943618,e=>{"use strict";var t=e.i(44091),n=e.i(391398),a=e.i(728649);function o(e){let{value:o,defaultValue:l,...i}=(0,t.useProps)("NumberFormatter",null,e);return void 0===o?null:(0,n.jsx)(a.NumericFormat,{displayType:"text",value:o,...i})}o.extend=e=>e,o.displayName="@mantine/core/NumberFormatter",e.s(["NumberFormatter",0,o])},241111,e=>{"use strict";let t,n,a;var o=e.i(648863);let l=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],i=[{position:1,mass:1.008,symbol:"H",name:"Hydrogen"},{position:2,mass:4.0026,symbol:"He",name:"Helium"},{position:3,mass:6.94,symbol:"Li",name:"Lithium"},{position:4,mass:9.0122,symbol:"Be",name:"Beryllium"},{position:5,mass:10.81,symbol:"B",name:"Boron"},{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:8,mass:15.999,symbol:"O",name:"Oxygen"},{position:9,mass:18.998,symbol:"F",name:"Fluorine"},{position:10,mass:20.18,symbol:"Ne",name:"Neon"},{position:11,mass:22.99,symbol:"Na",name:"Sodium"},{position:12,mass:24.305,symbol:"Mg",name:"Magnesium"},{position:13,mass:26.982,symbol:"Al",name:"Aluminium"},{position:14,mass:28.085,symbol:"Si",name:"Silicon"},{position:15,mass:30.974,symbol:"P",name:"Phosphorus"},{position:16,mass:32.06,symbol:"S",name:"Sulfur"},{position:17,mass:35.45,symbol:"Cl",name:"Chlorine"},{position:18,mass:39.948,symbol:"Ar",name:"Argon"},{position:19,mass:39.098,symbol:"K",name:"Potassium"},{position:20,mass:39.098,symbol:"Ca",name:"Calcium"},{position:21,mass:40.078,symbol:"Sc",name:"Scandium"},{position:22,mass:47.867,symbol:"Ti",name:"Titanium"},{position:23,mass:50.941,symbol:"V",name:"Vanadium"},{position:24,mass:51.996,symbol:"Cr",name:"Chromium"},{position:25,mass:54.938,symbol:"Mn",name:"Manganese"},{position:26,mass:55.845,symbol:"Fe",name:"Iron"},{position:27,mass:58.933,symbol:"Co",name:"Cobalt"},{position:28,mass:58.933,symbol:"Ni",name:"Nickel"},{position:29,mass:63.546,symbol:"Cu",name:"Copper"},{position:30,mass:65.38,symbol:"Zn",name:"Zinc"},{position:31,mass:69.723,symbol:"Ga",name:"Gallium"},{position:32,mass:72.63,symbol:"Ge",name:"Germanium"},{position:33,mass:74.922,symbol:"As",name:"Arsenic"},{position:34,mass:78.971,symbol:"Se",name:"Selenium"},{position:35,mass:79.904,symbol:"Br",name:"Bromine"},{position:36,mass:83.798,symbol:"Kr",name:"Krypton"},{position:37,mass:83.798,symbol:"Rb",name:"Rubidium"},{position:38,mass:87.62,symbol:"Sr",name:"Strontium"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:40,mass:91.224,symbol:"Zr",name:"Zirconium"},{position:41,mass:92.906,symbol:"Nb",name:"Niobium"},{position:42,mass:95.95,symbol:"Mo",name:"Molybdenum"},{position:43,mass:98,symbol:"Tc",name:"Technetium"},{position:44,mass:101.07,symbol:"Ru",name:"Ruthenium"},{position:45,mass:102.905,symbol:"Rh",name:"Rhodium"},{position:46,mass:106.42,symbol:"Pd",name:"Palladium"},{position:47,mass:106.42,symbol:"Ag",name:"Silver"},{position:48,mass:112.414,symbol:"Cd",name:"Cadmium"},{position:49,mass:114.818,symbol:"In",name:"Indium"},{position:50,mass:118.71,symbol:"Sn",name:"Tin"},{position:51,mass:121.76,symbol:"Sb",name:"Antimony"},{position:52,mass:127.6,symbol:"Te",name:"Tellurium"},{position:53,mass:126.904,symbol:"I",name:"Iodine"},{position:54,mass:126.904,symbol:"Xe",name:"Xenon"},{position:55,mass:126.904,symbol:"Cs",name:"Cesium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:57,mass:138.905,symbol:"La",name:"Lanthanum"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"},{position:59,mass:140.116,symbol:"Pr",name:"Praseodymium"},{position:60,mass:140.907,symbol:"Nd",name:"Neodymium"},{position:61,mass:144.242,symbol:"Pm",name:"Promethium"},{position:62,mass:145,symbol:"Sm",name:"Samarium"},{position:63,mass:150.36,symbol:"Eu",name:"Europium"},{position:64,mass:151.964,symbol:"Gd",name:"Gadolinium"},{position:65,mass:157.25,symbol:"Tb",name:"Terbium"},{position:66,mass:158.925,symbol:"Dy",name:"Dysprosium"},{position:67,mass:162.5,symbol:"Ho",name:"Holmium"},{position:68,mass:164.93,symbol:"Er",name:"Erbium"},{position:69,mass:167.259,symbol:"Tm",name:"Thulium"}];var r=e.i(245745),s=e.i(391398);let c={type:"code",code:`
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
`,component:function(){let e=l.map(e=>(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Td,{children:e.position}),(0,s.jsx)(r.Table.Td,{children:e.name}),(0,s.jsx)(r.Table.Td,{children:e.symbol}),(0,s.jsx)(r.Table.Td,{children:e.mass})]},e.name));return(0,s.jsxs)(r.Table,{children:[(0,s.jsx)(r.Table.Thead,{children:(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Th,{children:"Element position"}),(0,s.jsx)(r.Table.Th,{children:"Element name"}),(0,s.jsx)(r.Table.Th,{children:"Symbol"}),(0,s.jsx)(r.Table.Th,{children:"Atomic mass"})]})}),(0,s.jsx)(r.Table.Tbody,{children:e})]})}},d={type:"code",code:`
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
`,component:function(){let e=l.map(e=>(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Td,{children:e.position}),(0,s.jsx)(r.Table.Td,{children:e.name}),(0,s.jsx)(r.Table.Td,{children:e.symbol}),(0,s.jsx)(r.Table.Td,{children:e.mass})]},e.name)),t=(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Th,{children:"Element position"}),(0,s.jsx)(r.Table.Th,{children:"Element name"}),(0,s.jsx)(r.Table.Th,{children:"Symbol"}),(0,s.jsx)(r.Table.Th,{children:"Atomic mass"})]});return(0,s.jsxs)(r.Table,{captionSide:"bottom",children:[(0,s.jsx)(r.Table.Caption,{children:"Some elements from the periodic table"}),(0,s.jsx)(r.Table.Thead,{children:t}),(0,s.jsx)(r.Table.Tbody,{children:e}),(0,s.jsx)(r.Table.Tfoot,{children:t})]})}},m={type:"configurator",component:function(e){return(0,s.jsxs)(r.Table,{...e,children:[(0,s.jsx)(r.Table.Thead,{children:(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Th,{children:"Element position"}),(0,s.jsx)(r.Table.Th,{children:"Element name"}),(0,s.jsx)(r.Table.Th,{children:"Symbol"}),(0,s.jsx)(r.Table.Th,{children:"Atomic mass"})]})}),(0,s.jsx)(r.Table.Tbody,{children:l.map(e=>(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Td,{children:e.position}),(0,s.jsx)(r.Table.Td,{children:e.name}),(0,s.jsx)(r.Table.Td,{children:e.symbol}),(0,s.jsx)(r.Table.Td,{children:e.mass})]},e.name))})]})},code:`
import { Table } from '@mantine/core';

function Demo() {
  return (
    <Table{{props}}>
      {/* {...rows} */}
    </Table>
  );
}
`,controls:[{prop:"striped",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"highlightOnHover",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withTableBorder",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withColumnBorders",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"withRowBorders",type:"boolean",initialValue:!0,libraryValue:!0}]},u={type:"configurator",component:function(e){return(0,s.jsxs)(r.Table,{...e,children:[(0,s.jsx)(r.Table.Thead,{children:(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Th,{children:"Position"}),(0,s.jsx)(r.Table.Th,{children:"Name"}),(0,s.jsx)(r.Table.Th,{children:"Symbol"})]})}),(0,s.jsx)(r.Table.Tbody,{children:l.map(e=>(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Td,{children:e.position}),(0,s.jsx)(r.Table.Td,{children:e.name}),(0,s.jsx)(r.Table.Td,{children:e.symbol})]},e.name))})]})},code:`
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
`,component:function(){let e=l.map(e=>(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Td,{children:e.position}),(0,s.jsx)(r.Table.Td,{children:e.name}),(0,s.jsx)(r.Table.Td,{children:e.symbol}),(0,s.jsx)(r.Table.Td,{children:e.mass})]},e.name));return(0,s.jsx)(r.Table.ScrollContainer,{minWidth:500,children:(0,s.jsxs)(r.Table,{children:[(0,s.jsx)(r.Table.Thead,{children:(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Th,{children:"Element position"}),(0,s.jsx)(r.Table.Th,{children:"Element name"}),(0,s.jsx)(r.Table.Th,{children:"Symbol"}),(0,s.jsx)(r.Table.Th,{children:"Atomic mass"})]})}),(0,s.jsx)(r.Table.Tbody,{children:e})]})})}},p={type:"code",code:`
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
`,component:function(){let e=i.map(e=>(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Td,{children:e.position}),(0,s.jsx)(r.Table.Td,{children:e.name}),(0,s.jsx)(r.Table.Td,{children:e.symbol}),(0,s.jsx)(r.Table.Td,{children:e.mass})]},e.name));return(0,s.jsx)(r.Table.ScrollContainer,{minWidth:500,maxHeight:300,children:(0,s.jsxs)(r.Table,{children:[(0,s.jsx)(r.Table.Thead,{children:(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Th,{children:"Element position"}),(0,s.jsx)(r.Table.Th,{children:"Element name"}),(0,s.jsx)(r.Table.Th,{children:"Symbol"}),(0,s.jsx)(r.Table.Th,{children:"Atomic mass"})]})}),(0,s.jsx)(r.Table.Tbody,{children:e})]})})}},f={type:"code",code:`
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
`,component:function(){let e=l.map(e=>(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Td,{children:e.position}),(0,s.jsx)(r.Table.Td,{children:e.name}),(0,s.jsx)(r.Table.Td,{children:e.symbol}),(0,s.jsx)(r.Table.Td,{children:e.mass})]},e.name));return(0,s.jsx)(r.Table.ScrollContainer,{minWidth:500,type:"native",children:(0,s.jsxs)(r.Table,{children:[(0,s.jsx)(r.Table.Thead,{children:(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Th,{children:"Element position"}),(0,s.jsx)(r.Table.Th,{children:"Element name"}),(0,s.jsx)(r.Table.Th,{children:"Symbol"}),(0,s.jsx)(r.Table.Th,{children:"Atomic mass"})]})}),(0,s.jsx)(r.Table.Tbody,{children:e})]})})}},b={type:"code",code:`
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
`,component:function(){let e=i.map(e=>(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Td,{children:e.position}),(0,s.jsx)(r.Table.Td,{children:e.name}),(0,s.jsx)(r.Table.Td,{children:e.symbol}),(0,s.jsx)(r.Table.Td,{children:e.mass})]},e.name));return(0,s.jsx)(r.Table.ScrollContainer,{minWidth:500,maxHeight:300,type:"native",children:(0,s.jsxs)(r.Table,{children:[(0,s.jsx)(r.Table.Thead,{children:(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Th,{children:"Element position"}),(0,s.jsx)(r.Table.Th,{children:"Element name"}),(0,s.jsx)(r.Table.Th,{children:"Symbol"}),(0,s.jsx)(r.Table.Th,{children:"Atomic mass"})]})}),(0,s.jsx)(r.Table.Tbody,{children:e})]})})}};var T=e.i(191788),g=e.i(37541);let y=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],x={type:"code",component:function(){let[e,t]=(0,T.useState)([]),n=y.map(n=>(0,s.jsxs)(r.Table.Tr,{bg:e.includes(n.position)?"var(--mantine-color-blue-light)":void 0,children:[(0,s.jsx)(r.Table.Td,{children:(0,s.jsx)(g.Checkbox,{"aria-label":"Select row",checked:e.includes(n.position),onChange:a=>t(a.currentTarget.checked?[...e,n.position]:e.filter(e=>e!==n.position))})}),(0,s.jsx)(r.Table.Td,{children:n.position}),(0,s.jsx)(r.Table.Td,{children:n.name}),(0,s.jsx)(r.Table.Td,{children:n.symbol}),(0,s.jsx)(r.Table.Td,{children:n.mass})]},n.name));return(0,s.jsxs)(r.Table,{children:[(0,s.jsx)(r.Table.Thead,{visibleFrom:"sm",children:(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Th,{}),(0,s.jsx)(r.Table.Th,{children:"Element position"}),(0,s.jsx)(r.Table.Th,{children:"Element name"}),(0,s.jsx)(r.Table.Th,{children:"Symbol"}),(0,s.jsx)(r.Table.Th,{children:"Atomic mass"})]})}),(0,s.jsx)(r.Table.Tbody,{children:n})]})},defaultExpanded:!1,code:`
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
`},v={caption:"Some elements from the periodic table",head:["Element position","Atomic mass","Symbol","Element name"],body:[[6,12.011,"C","Carbon"],[7,14.007,"N","Nitrogen"],[39,88.906,"Y","Yttrium"],[56,137.33,"Ba","Barium"],[58,140.12,"Ce","Cerium"]]},M={type:"code",component:function(){return(0,s.jsx)(r.Table,{data:v})},code:`
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
`,component:function(){let e=l.map(e=>(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Td,{children:e.position}),(0,s.jsx)(r.Table.Td,{children:e.name}),(0,s.jsx)(r.Table.Td,{children:e.symbol}),(0,s.jsx)(r.Table.Td,{children:e.mass})]},e.name));return(0,s.jsxs)(r.Table,{stickyHeader:!0,stickyHeaderOffset:"var(--docs-header-height)",children:[(0,s.jsx)(r.Table.Thead,{children:(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Th,{children:"Element position"}),(0,s.jsx)(r.Table.Th,{children:"Element name"}),(0,s.jsx)(r.Table.Th,{children:"Symbol"}),(0,s.jsx)(r.Table.Th,{children:"Atomic mass"})]})}),(0,s.jsx)(r.Table.Tbody,{children:e}),(0,s.jsx)(r.Table.Caption,{children:"Scroll page to see sticky thead"})]})}},C={type:"code",code:`
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
`,component:function(){return(0,s.jsx)(r.Table,{variant:"vertical",layout:"fixed",withTableBorder:!0,children:(0,s.jsxs)(r.Table.Tbody,{children:[(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Th,{w:160,children:"Epic name"}),(0,s.jsx)(r.Table.Td,{children:"7.x migration"})]}),(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Th,{children:"Status"}),(0,s.jsx)(r.Table.Td,{children:"Open"})]}),(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Th,{children:"Total issues"}),(0,s.jsx)(r.Table.Td,{children:"135"})]}),(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Th,{children:"Total story points"}),(0,s.jsx)(r.Table.Td,{children:"874"})]}),(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Th,{children:"Last updated at"}),(0,s.jsx)(r.Table.Td,{children:"September 26, 2024 17:41:26"})]})]})})}};var A=e.i(943618);let D=[{product:"Apples",unitsSold:0x83fd3be2},{product:"Oranges",unitsSold:0x25314e33b},{product:"Bananas",unitsSold:0x499602d2},{product:"Pineapples",unitsSold:994881e4},{product:"Pears",unitsSold:0x250195167}],S={type:"configurator",component:function(e){let t=D.map(e=>(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Td,{children:e.product}),(0,s.jsx)(r.Table.Td,{children:(0,s.jsx)(A.NumberFormatter,{value:e.unitsSold,thousandSeparator:!0})})]},e.product));return(0,s.jsxs)(r.Table,{...e,children:[(0,s.jsx)(r.Table.Thead,{children:(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Th,{children:"Product"}),(0,s.jsx)(r.Table.Th,{children:"Units sold"})]})}),(0,s.jsx)(r.Table.Tbody,{children:t})]})},code:`
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
`,controls:[{type:"boolean",prop:"tabularNums",initialValue:!0,libraryValue:!1}]};var k=e.i(463044);let w=`interface RowData {
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
}`,I=`
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
`,E=(t=["James Smith","Maria Garcia","Robert Johnson","Linda Williams","Michael Brown","Barbara Jones","David Miller","Susan Davis","Richard Wilson","Jessica Moore","Charles Taylor","Sarah Anderson","Thomas Jackson","Karen White","Daniel Harris","Nancy Martin","Matthew Thompson","Lisa Robinson","Anthony Clark","Betty Lewis"],n=["Acme Corp","Globex Inc","Initech","Umbrella Corp","Stark Industries","Wayne Enterprises","Cyberdyne Systems","Oscorp","Hooli","Pied Piper"],a=["New York","Los Angeles","Chicago","Houston","Phoenix","San Antonio","San Diego","Dallas","Austin","Seattle"],Array.from({length:5e3},(e,o)=>({id:o+1,name:t[o%t.length],email:`user${o+1}@example.com`,company:n[o%n.length],city:a[o%a.length]}))),P={type:"code",component:function(){let[e,t]=(0,T.useState)(null),n=(0,k.useVirtualizer)({count:E.length,getScrollElement:()=>e,estimateSize:()=>36,overscan:20}),a=n.getVirtualItems();return(0,s.jsx)(r.Table.ScrollContainer,{minWidth:500,maxHeight:400,scrollAreaProps:{viewportRef:t},children:(0,s.jsxs)(r.Table,{stickyHeader:!0,layout:"fixed",children:[(0,s.jsx)(r.Table.Thead,{children:(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Th,{w:50,children:"#"}),(0,s.jsx)(r.Table.Th,{children:"Name"}),(0,s.jsx)(r.Table.Th,{children:"Email"}),(0,s.jsx)(r.Table.Th,{children:"Company"}),(0,s.jsx)(r.Table.Th,{children:"City"})]})}),(0,s.jsxs)(r.Table.Tbody,{children:[a.length>0&&(0,s.jsx)("tr",{"aria-hidden":!0,children:(0,s.jsx)("td",{"aria-hidden":!0,colSpan:5,style:{height:a[0].start,padding:0,border:"none"}})}),a.map(e=>{let t=E[e.index];return(0,s.jsxs)(r.Table.Tr,{children:[(0,s.jsx)(r.Table.Td,{children:t.id}),(0,s.jsx)(r.Table.Td,{children:t.name}),(0,s.jsx)(r.Table.Td,{children:t.email}),(0,s.jsx)(r.Table.Td,{children:t.company}),(0,s.jsx)(r.Table.Td,{children:t.city})]},e.index)}),a.length>0&&(0,s.jsx)("tr",{"aria-hidden":!0,children:(0,s.jsx)("td",{"aria-hidden":!0,colSpan:5,style:{height:n.getTotalSize()-a[a.length-1].end,padding:0,border:"none"}})})]})]})})},code:[{fileName:"Demo.tsx",language:"tsx",code:I},{fileName:"data.ts",language:"tsx",code:w}],defaultExpanded:!1};var L=(0,o.__exportAll)({captions:()=>d,configurator:()=>m,data:()=>M,rowSelection:()=>x,scrollContainer:()=>h,scrollContainerMaxHeight:()=>p,scrollContainerNative:()=>f,scrollContainerNativeMaxHeight:()=>b,spacingConfigurator:()=>u,stickyHeader:()=>j,tabularNums:()=>S,usage:()=>c,vertical:()=>C,virtualized:()=>P});e.s(["TableDemos",0,L],241111)},322091,e=>{"use strict";var t,n=e.i(417241),a=e.i(57807);let[o,l]=(t="mantine-modals",[function(e){let a=Object.keys(e).reduce((n,a)=>(n[`${t}:${a}`]=t=>e[a](t.detail),n),{});(0,n.useIsomorphicEffect)(()=>(Object.keys(a).forEach(e=>{window.removeEventListener(e,a[e]),window.addEventListener(e,a[e])}),()=>Object.keys(a).forEach(e=>{window.removeEventListener(e,a[e])})),[a])},function(e){return(...n)=>{var a,o;return a=`${t}:${String(e)}`,o=n[0],void window.dispatchEvent(new CustomEvent(a,{detail:o}))}}]),i=l("closeModal"),r=l("closeAllModals");e.s(["modals",0,{open:e=>{let t=e.modalId||(0,a.randomId)();return l("openModal")({...e,modalId:t}),t},close:i,closeAll:r,openConfirmModal:e=>{let t=e.modalId||(0,a.randomId)();return l("openConfirmModal")({...e,modalId:t}),t},openContextModal:e=>{let t=e.modalId||(0,a.randomId)();return l("openContextModal")({...e,modalId:t}),t},updateModal:e=>l("updateModal")(e),updateContextModal:e=>l("updateContextModal")(e)},"useModalsEvents",0,o],322091)},981377,e=>{"use strict";var t=e.i(44091),n=e.i(391466),a=e.i(275519),o=e.i(232471),l={root:"m_d08caa0"},i=e.i(391398);let r=(0,a.factory)(e=>{let a=(0,t.useProps)("Typography",null,e),{classNames:r,className:s,style:c,styles:d,unstyled:m,attributes:u,...h}=a;return(0,i.jsx)(o.Box,{...(0,n.useStyles)({name:"Typography",classes:l,props:a,className:s,style:c,classNames:r,styles:d,unstyled:m,attributes:u})("root"),...h})});r.classes=l,r.displayName="@mantine/core/Typography",e.s(["Typography",0,r],981377)},471714,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M243,96a20.33,20.33,0,0,0-17.74-14l-56.59-4.57L146.83,24.62a20.36,20.36,0,0,0-37.66,0L87.35,77.44,30.76,82A20.45,20.45,0,0,0,19.1,117.88l43.18,37.24-13.2,55.7A20.37,20.37,0,0,0,79.57,233L128,203.19,176.43,233a20.39,20.39,0,0,0,30.49-22.15l-13.2-55.7,43.18-37.24A20.43,20.43,0,0,0,243,96ZM172.53,141.7a12,12,0,0,0-3.84,11.86L181.58,208l-47.29-29.08a12,12,0,0,0-12.58,0L74.42,208l12.89-54.4a12,12,0,0,0-3.84-11.86L41.2,105.24l55.4-4.47a12,12,0,0,0,10.13-7.38L128,41.89l21.27,51.5a12,12,0,0,0,10.13,7.38l55.4,4.47Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M229.06,108.79l-48.7,42,14.88,62.79a8.4,8.4,0,0,1-12.52,9.17L128,189.09,73.28,222.74a8.4,8.4,0,0,1-12.52-9.17l14.88-62.79-48.7-42A8.46,8.46,0,0,1,31.73,94L95.64,88.8l24.62-59.6a8.36,8.36,0,0,1,15.48,0l24.62,59.6L224.27,94A8.46,8.46,0,0,1,229.06,108.79Z",opacity:"0.2"}),t.createElement("path",{d:"M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M237.28,97.87A14.18,14.18,0,0,0,224.76,88l-60.25-4.87-23.22-56.2a14.37,14.37,0,0,0-26.58,0L91.49,83.11,31.24,88a14.18,14.18,0,0,0-12.52,9.89A14.43,14.43,0,0,0,23,113.32L69,152.93l-14,59.25a14.4,14.4,0,0,0,5.59,15,14.1,14.1,0,0,0,15.91.6L128,196.12l51.58,31.71a14.1,14.1,0,0,0,15.91-.6,14.4,14.4,0,0,0,5.59-15l-14-59.25L233,113.32A14.43,14.43,0,0,0,237.28,97.87Zm-12.14,6.37-48.69,42a6,6,0,0,0-1.92,5.92l14.88,62.79a2.35,2.35,0,0,1-.95,2.57,2.24,2.24,0,0,1-2.6.1L131.14,184a6,6,0,0,0-6.28,0L70.14,217.61a2.24,2.24,0,0,1-2.6-.1,2.35,2.35,0,0,1-1-2.57l14.88-62.79a6,6,0,0,0-1.92-5.92l-48.69-42a2.37,2.37,0,0,1-.73-2.65,2.28,2.28,0,0,1,2.07-1.65l63.92-5.16a6,6,0,0,0,5.06-3.69l24.63-59.6a2.35,2.35,0,0,1,4.38,0l24.63,59.6a6,6,0,0,0,5.06,3.69l63.92,5.16a2.28,2.28,0,0,1,2.07,1.65A2.37,2.37,0,0,1,225.14,104.24Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M235.36,98.49A12.21,12.21,0,0,0,224.59,90l-61.47-5L139.44,27.67a12.37,12.37,0,0,0-22.88,0L92.88,85,31.41,90a12.45,12.45,0,0,0-7.07,21.84l46.85,40.41L56.87,212.64a12.35,12.35,0,0,0,18.51,13.49L128,193.77l52.62,32.36a12.12,12.12,0,0,0,13.69-.51,12.28,12.28,0,0,0,4.82-13l-14.32-60.42,46.85-40.41A12.29,12.29,0,0,0,235.36,98.49Zm-8.93,7.26-48.68,42a4,4,0,0,0-1.28,3.95l14.87,62.79a4.37,4.37,0,0,1-1.72,4.65,4.24,4.24,0,0,1-4.81.18L130.1,185.67a4,4,0,0,0-4.2,0L71.19,219.32a4.24,4.24,0,0,1-4.81-.18,4.37,4.37,0,0,1-1.72-4.65L79.53,151.7a4,4,0,0,0-1.28-3.95l-48.68-42A4.37,4.37,0,0,1,28.25,101a4.31,4.31,0,0,1,3.81-3L96,92.79a4,4,0,0,0,3.38-2.46L124,30.73a4.35,4.35,0,0,1,8.08,0l24.62,59.6A4,4,0,0,0,160,92.79l63.9,5.15a4.31,4.31,0,0,1,3.81,3A4.37,4.37,0,0,1,226.43,105.75Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(n.default,{ref:o,...e,weights:a}));o.displayName="StarIcon",e.s(["StarIcon",0,o],471714)},26485,e=>{"use strict";var t=e.i(191788);e.s(["useInputState",0,function(e){let[n,a]=(0,t.useState)(e);return[n,e=>{if(e)if("function"==typeof e)a(e);else if("object"==typeof e&&"nativeEvent"in e){let{currentTarget:t}=e;a("checkbox"===t.type?t.checked:t.value)}else a(e);else a(e)}]}])},648858,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M228,67.24a39.77,39.77,0,0,0-12.51-28.52C199.91,24,174.71,24.5,159.29,39.93L142.48,56.84a28,28,0,0,0-35.64,3.29l-9,9a20,20,0,0,0-.73,27.49L48.9,144.84A43.76,43.76,0,0,0,37,185.28l-7.5,17.19a17.66,17.66,0,0,0,3.71,19.65,19.9,19.9,0,0,0,22.15,4.19l16.31-7.13a43.88,43.88,0,0,0,39.45-12.09l48.24-48.26a20,20,0,0,0,27.47-.73l9-9a28.06,28.06,0,0,0,3.26-35.72l17.23-17.33A39.69,39.69,0,0,0,228,67.24ZM94.15,190.11a20,20,0,0,1-20,5,11.93,11.93,0,0,0-8.32.47L57,199.38,60.69,191a12,12,0,0,0,.37-8.64,19.92,19.92,0,0,1,4.81-20.55l48.2-48.22,28.28,28.3Zm105.14-111-25.37,25.52a12,12,0,0,0,0,16.95l4.88,4.89a4,4,0,0,1,0,5.66l-6.14,6.15-55-55.05,6.14-6.14a4,4,0,0,1,5.65,0L134.35,82a12,12,0,0,0,8.49,3.51h0A12,12,0,0,0,151.34,82l24.94-25.08c6.3-6.3,16.48-6.63,22.71-.74a16,16,0,0,1,.3,23Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M207.8,87.6l-25.37,25.53,4.89,4.88a16,16,0,0,1,0,22.64l-9,9a8,8,0,0,1-11.32,0l-60.68-60.7a8,8,0,0,1,0-11.32l9-9a16,16,0,0,1,22.63,0l4.88,4.89,25-25.11c10.79-10.79,28.37-11.45,39.45-1A28,28,0,0,1,207.8,87.6Z",opacity:"0.2"}),t.createElement("path",{d:"M224,67.3a35.79,35.79,0,0,0-11.26-25.66c-14-13.28-36.72-12.78-50.62,1.13L142.8,62.2a24,24,0,0,0-33.14.77l-9,9a16,16,0,0,0,0,22.64l2,2.06-51,51a39.75,39.75,0,0,0-10.53,38l-8,18.41A13.68,13.68,0,0,0,36,219.3a15.92,15.92,0,0,0,17.71,3.35L71.23,215a39.89,39.89,0,0,0,37.06-10.75l51-51,2.06,2.06a16,16,0,0,0,22.62,0l9-9a24,24,0,0,0,.74-33.18l19.75-19.87A35.75,35.75,0,0,0,224,67.3ZM97,193a24,24,0,0,1-24,6,8,8,0,0,0-5.55.31l-18.1,7.91L57,189.41a8,8,0,0,0,.25-5.75A23.88,23.88,0,0,1,63,159l51-51,33.94,34ZM202.13,82l-25.37,25.52a8,8,0,0,0,0,11.3l4.89,4.89a8,8,0,0,1,0,11.32l-9,9L112,83.26l9-9a8,8,0,0,1,11.31,0l4.89,4.89a8,8,0,0,0,5.65,2.34h0a8,8,0,0,0,5.66-2.36l24.94-25.09c7.81-7.82,20.5-8.18,28.29-.81a20,20,0,0,1,.39,28.7Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,67.3a35.79,35.79,0,0,0-11.26-25.66c-14-13.28-36.72-12.78-50.62,1.13L138.8,66.2a24,24,0,0,0-33.14.77l-5,5a16,16,0,0,0,0,22.64l2,2.06-51,51a39.75,39.75,0,0,0-10.53,38l-8,18.41A13.68,13.68,0,0,0,36,219.3a15.92,15.92,0,0,0,17.71,3.35L71.23,215a39.89,39.89,0,0,0,37.06-10.75l51-51,2.06,2.06a16,16,0,0,0,22.62,0l5-5a24,24,0,0,0,.74-33.18l23.75-23.87A35.75,35.75,0,0,0,224,67.3ZM97,193a24,24,0,0,1-24,6,8,8,0,0,0-5.55.31l-18.1,7.91L57,189.41a8,8,0,0,0,.25-5.75A23.88,23.88,0,0,1,63,159l51-51,33.94,34Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M222,67.34a33.81,33.81,0,0,0-10.64-24.25C198.12,30.56,176.68,31,163.54,44.18L142.82,65l-.63-.63a22,22,0,0,0-31.11,0l-9,9a14,14,0,0,0,0,19.81l3.47,3.47L53.14,149.1a37.79,37.79,0,0,0-9.84,36.73l-8.31,19a11.68,11.68,0,0,0,2.46,13A13.91,13.91,0,0,0,47.32,222,14.15,14.15,0,0,0,53,220.82L71,212.92a37.92,37.92,0,0,0,35.84-10.07l52.44-52.46,3.47,3.48a14,14,0,0,0,19.8,0l9-9a22,22,0,0,0,0-31.12l-.66-.66L212,91.85A33.76,33.76,0,0,0,222,67.34Zm-123.61,127a26,26,0,0,1-26,6.47,6,6,0,0,0-4.16.24l-20,8.75a2,2,0,0,1-2.09-.31l9.12-20.9a5.94,5.94,0,0,0,.19-4.31,25.88,25.88,0,0,1,6.26-26.72l52.44-52.45,36.76,36.78Zm105.16-111L178.17,108.9a6,6,0,0,0,0,8.47l4.88,4.89a10,10,0,0,1,0,14.15l-9,9a2,2,0,0,1-2.82,0l-60.69-60.7a2,2,0,0,1,0-2.83l9-9a10,10,0,0,1,14.14,0l4.89,4.89a6,6,0,0,0,4.24,1.75h0a6,6,0,0,0,4.25-1.77L172,52.66c8.58-8.58,22.52-9,31.08-.85a22,22,0,0,1,.44,31.57Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,67.3a35.79,35.79,0,0,0-11.26-25.66c-14-13.28-36.72-12.78-50.62,1.13L142.8,62.2a24,24,0,0,0-33.14.77l-9,9a16,16,0,0,0,0,22.64l2,2.06-51,51a39.75,39.75,0,0,0-10.53,38l-8,18.41A13.68,13.68,0,0,0,36,219.3a15.92,15.92,0,0,0,17.71,3.35L71.23,215a39.89,39.89,0,0,0,37.06-10.75l51-51,2.06,2.06a16,16,0,0,0,22.62,0l9-9a24,24,0,0,0,.74-33.18l19.75-19.87A35.75,35.75,0,0,0,224,67.3ZM97,193a24,24,0,0,1-24,6,8,8,0,0,0-5.55.31l-18.1,7.91L57,189.41a8,8,0,0,0,.25-5.75A23.88,23.88,0,0,1,63,159l51-51,33.94,34ZM202.13,82l-25.37,25.52a8,8,0,0,0,0,11.3l4.89,4.89a8,8,0,0,1,0,11.32l-9,9L112,83.26l9-9a8,8,0,0,1,11.31,0l4.89,4.89a8,8,0,0,0,11.33,0l24.94-25.09c7.81-7.82,20.5-8.18,28.29-.81a20,20,0,0,1,.39,28.7Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M220,67.37a31.82,31.82,0,0,0-10-22.82c-12.46-11.8-32.66-11.33-45,1.05L142.82,67.86l-2-2a20,20,0,0,0-28.28,0l-9,9a12,12,0,0,0,0,17l4.89,4.89L54.55,150.52A35.81,35.81,0,0,0,45.42,186l-8.6,19.7a9.7,9.7,0,0,0,2,10.79A12,12,0,0,0,52.15,219l18.72-8.18a35.9,35.9,0,0,0,34.59-9.37l53.86-53.87,4.88,4.89a12,12,0,0,0,17,0l9-9a20,20,0,0,0,0-28.3l-2.06-2.06,22.55-22.69A31.75,31.75,0,0,0,220,67.37ZM99.81,195.78a28,28,0,0,1-28,7,4,4,0,0,0-2.78.15l-20,8.75a4,4,0,0,1-4.43-.84,1.73,1.73,0,0,1-.36-1.93l9.19-21.06a4,4,0,0,0,.12-2.88,27.87,27.87,0,0,1,6.74-28.77l53.85-53.87,39.6,39.61Zm79.78-85.47a4,4,0,0,0,0,5.65l4.89,4.89a12,12,0,0,1,0,17l-9,9a4,4,0,0,1-5.66,0L109.18,86.1a4,4,0,0,1,0-5.66l9-9a12,12,0,0,1,17,0L140,76.36a4,4,0,0,0,2.83,1.17h0a4,4,0,0,0,2.83-1.18l25-25.1c9.33-9.34,24.52-9.73,33.87-.89A24,24,0,0,1,205,84.79Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(n.default,{ref:o,...e,weights:a}));o.displayName="EyedropperIcon",e.s(["EyedropperIcon",0,o],648858)},393353,e=>{"use strict";var t=e.i(779177),n=e.i(433512),a=e.i(481178),o=e.i(317477),l=e.i(700145),i=e.i(853487),r=e.i(44091),s=e.i(391466),c=e.i(275519),d=e.i(232471),m={root:"m_e5262200",indicator:"m_760d1fb1",processing:"m_885901b1"},u=e.i(391398);let h={position:"top-end",offset:0,showZero:!0},p=(0,a.createVarsResolver)((e,{color:a,position:r,offset:s,size:c,radius:d,zIndex:m,autoContrast:u})=>({root:{"--indicator-color":a?(0,o.getThemeColor)(a,e):void 0,"--indicator-text-color":(0,i.getAutoContrastValue)(u,e)?(0,l.getContrastColor)({color:a,theme:e,autoContrast:u}):void 0,"--indicator-size":(0,t.rem)(c),"--indicator-radius":void 0===d?void 0:(0,n.getRadius)(d),"--indicator-z-index":m?.toString(),...function(e="top-end",n=0){let a={"--indicator-top":void 0,"--indicator-bottom":void 0,"--indicator-left":void 0,"--indicator-right":void 0,"--indicator-translate-x":void 0,"--indicator-translate-y":void 0},o="number"==typeof n?n:n.x,l="number"==typeof n?n:n.y,i=(0,t.rem)(o),r=(0,t.rem)(l),[s,c]=e.split("-");return"top"===s&&(a["--indicator-top"]=r,a["--indicator-translate-y"]="-50%"),"middle"===s&&(a["--indicator-top"]="50%",a["--indicator-translate-y"]="-50%"),"bottom"===s&&(a["--indicator-bottom"]=r,a["--indicator-translate-y"]="50%"),"start"===c&&(a["--indicator-left"]=i,a["--indicator-translate-x"]="-50%"),"center"===c&&(a["--indicator-left"]="50%",a["--indicator-translate-x"]="-50%"),"end"===c&&(a["--indicator-right"]=i,a["--indicator-translate-x"]="50%"),a}(r,s)}})),f=(0,c.factory)(e=>{let t=(0,r.useProps)("Indicator",h,e),{classNames:n,className:a,style:o,styles:l,unstyled:i,vars:c,children:f,position:b,offset:T,inline:g,label:y,radius:x,color:v,withBorder:M,disabled:j,processing:C,zIndex:A,autoContrast:D,maxValue:S,showZero:k,mod:w,attributes:I,...E}=t,P=(0,s.useStyles)({name:"Indicator",classes:m,props:t,className:a,style:o,classNames:n,styles:l,unstyled:i,attributes:I,vars:c,varsResolver:p}),L=!k&&(0===y||"0"===y),O=void 0!==S&&"number"==typeof y&&y>S?`${S}+`:y;return(0,u.jsxs)(d.Box,{...P("root"),mod:[{inline:g},w],...E,children:[!j&&!L&&(0,u.jsx)(d.Box,{mod:{"with-label":!!y,"with-border":M,processing:C},...P("indicator"),children:O}),f]})});f.classes=m,f.varsResolver=p,f.displayName="@mantine/core/Indicator",e.s(["Indicator",0,f],393353)},39167,(e,t,n)=>{e.e,t.exports=function(e){"use strict";var t="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),n="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),a="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),o="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"),l=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function i(e,t,n){var a,o;return"m"===n?t?"минута":"минуту":e+" "+(a=+e,o=({mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"})[n].split("_"),a%10==1&&a%100!=11?o[0]:a%10>=2&&a%10<=4&&(a%100<10||a%100>=20)?o[1]:o[2])}var r=function(e,a){return l.test(a)?t[e.month()]:n[e.month()]};r.s=n,r.f=t;var s=function(e,t){return l.test(t)?a[e.month()]:o[e.month()]};s.s=o,s.f=a;var c={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:r,monthsShort:s,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:i,mm:i,h:"час",hh:i,d:"день",dd:i,M:"месяц",MM:i,y:"год",yy:i},ordinal:function(e){return e},meridiem:function(e){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"}};return(e&&"object"==typeof e&&"default"in e?e:{default:e}).default.locale(c,null,!0),c}(e.r(494834))},111018,e=>{"use strict";var t=e.i(191788),n=e.i(391398),a=e.i(883364),o=e.i(494834);e.s(["getSharedPickerDemos",0,function(e){let l,i,r,s,c,d,m;return{usage:{type:"code",centered:!0,code:(l=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${l} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <${l} value={value} onChange={setValue} />;
}
`),component:()=>{let[a,o]=(0,t.useState)(null);return(0,n.jsx)(e,{value:a,onChange:o})}},range:{type:"code",centered:!0,code:(i=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${i} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return <${i} type="range" value={value} onChange={setValue} />;
}
`),component:()=>{let[a,o]=(0,t.useState)([null,null]);return(0,n.jsx)(e,{type:"range",value:a,onChange:o})}},multiple:{type:"code",centered:!0,code:(r=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${r} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string[]>([]);
  return <${r} type="multiple" value={value} onChange={setValue} />;
}
`),component:()=>{let[a,o]=(0,t.useState)([]);return(0,n.jsx)(e,{type:"multiple",value:a,onChange:o})}},deselect:{type:"code",centered:!0,code:(s=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${s} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <${s} allowDeselect value={value} onChange={setValue} />;
}
`),component:()=>{let[a,o]=(0,t.useState)(null);return(0,n.jsx)(e,{allowDeselect:!0,value:a,onChange:o})}},singleRange:{type:"code",centered:!0,code:(c=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${c} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <${c} type="range" allowSingleDateInRange value={value} onChange={setValue} />
  );
}
`),component:()=>{let[a,o]=(0,t.useState)([null,null]);return(0,n.jsx)(e,{type:"range",allowSingleDateInRange:!0,value:a,onChange:o})}},numberOfColumns:{type:"code",centered:!0,code:(d=e.displayName.replace("@mantine/dates/",""),`
import { useState } from 'react';
import { ${d} } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<[string | null, string | null]>([null, null]);
  return (
    <${d} type="range" numberOfColumns={2} value={value} onChange={setValue} />
  );
}
`),component:()=>{let[o,l]=(0,t.useState)([null,null]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e,{type:"range",numberOfColumns:2,value:o,onChange:l,visibleFrom:"sm"}),(0,n.jsx)(a.Text,{ta:"center",hiddenFrom:"sm",children:"Demo is not available on small screens. Make your screen larger to see the demo."})]})}},sizeConfigurator:{type:"configurator",centered:!0,code:(m=e.displayName.replace("@mantine/dates/",""),`import dayjs from 'dayjs';
import { ${m} } from '@mantine/dates';

function Demo() {
  return <${m} defaultValue={dayjs().format('YYYY-MM-DD')}{{props}} />;
}
`),controls:[{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"}],component:t=>(0,n.jsx)(e,{defaultValue:(0,o.default)().format("YYYY-MM-DD"),...t})}}}],111018)},341921,e=>{"use strict";var t=e.i(648863),n=e.i(111018),a=e.i(191788),o=e.i(391398),l=e.i(777141),i=e.i(494834);let r={type:"code",centered:!0,component:function(){let[e,t]=(0,a.useState)([null,null]),[n,r]=(0,a.useState)((0,i.default)().format("YYYY-MM-DD"));return(0,o.jsx)(l.DatePicker,{date:n,onDateChange:r,type:"range",value:e,onChange:e=>{null!==e[0]&&null===e[1]&&r(e=>(0,i.default)(e).add(1,"month").format("YYYY-MM-DD")),t(e)}})},code:`
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
`},s=e=>{let t=(0,i.default)(e);return 5===t.day()&&13===t.date()?{style:{backgroundColor:"var(--mantine-color-red-filled)",color:"var(--mantine-color-white)"}}:{}},c=e=>{let t=(0,i.default)(e);return t.year()===new Date().getFullYear()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:t.year()===new Date().getFullYear()+1?{disabled:!0}:{}},d=e=>{let t=(0,i.default)(e);return 1===t.month()?{style:{color:"var(--mantine-color-blue-filled)",fontWeight:700}}:5===t.month()?{disabled:!0}:{}},m={type:"code",centered:!0,component:function(){let[e,t]=(0,a.useState)(null);return(0,o.jsx)(l.DatePicker,{value:e,onChange:t,defaultDate:"2021-08-01",getDayProps:s,getYearControlProps:c,getMonthControlProps:d})},code:`
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
`},u={type:"code",centered:!0,component:function(){let[e,t]=(0,a.useState)(null);return(0,o.jsx)(l.DatePicker,{defaultDate:"2015-02-01",value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <DatePicker defaultDate="2015-02-01" value={value} onChange={setValue} />;
}
`},h={type:"code",centered:!0,component:function(){let[e,t]=(0,a.useState)(null);return(0,o.jsx)(l.DatePicker,{defaultLevel:"decade",decadeLabelFormat:"YY",yearLabelFormat:"YYYY [year]",monthLabelFormat:"MM/YY",value:e,onChange:t})},code:`
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
`},p={type:"code",centered:!0,component:function(){return(0,o.jsx)(l.DatePicker,{monthsListFormat:"MM",yearsListFormat:"YY"})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker monthsListFormat="MM" yearsListFormat="YY" />;
}
`};e.i(39167);let f={type:"code",centered:!0,component:function(){return(0,o.jsx)(l.DatePicker,{locale:"ru"})},code:`
import 'dayjs/locale/ru';
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker locale="ru" />;
}
`};var b=e.i(725695);let T={type:"code",component:function(){return(0,o.jsxs)(b.Group,{justify:"center",children:[(0,o.jsx)(l.DatePicker,{maxLevel:"year"}),(0,o.jsx)(l.DatePicker,{maxLevel:"month"})]})},code:`
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
`},g={type:"code",centered:!0,component:function(){let[e,t]=(0,a.useState)(null);return(0,o.jsx)(l.DatePicker,{value:e,onChange:t,defaultDate:"2022-02-01",minDate:"2022-02-10",maxDate:"2022-02-25"})},code:`
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
`},y={type:"code",component:function(){return(0,o.jsxs)(b.Group,{justify:"center",children:[(0,o.jsx)(l.DatePicker,{defaultLevel:"decade"}),(0,o.jsx)(l.DatePicker,{defaultLevel:"year"})]})},code:`
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
`},x={type:"code",component:function(){return(0,o.jsxs)(b.Group,{justify:"center",children:[(0,o.jsx)(l.DatePicker,{firstDayOfWeek:0}),(0,o.jsx)(l.DatePicker,{firstDayOfWeek:6})]})},code:`
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
`},v={type:"code",centered:!0,component:function(){return(0,o.jsx)(l.DatePicker,{weekendDays:[1,2]})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker weekendDays={[1, 2]} />;
}
`};var M=e.i(393353);let j=e=>{let t=(0,i.default)(e).date();return(0,o.jsx)(M.Indicator,{size:6,color:"red",offset:-5,disabled:16!==t,children:(0,o.jsx)("div",{children:t})})},C={type:"code",centered:!0,component:function(){return(0,o.jsx)(l.DatePicker,{renderDay:j})},code:`
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
`},A={type:"code",centered:!0,component:function(){return(0,o.jsx)(l.DatePicker,{hideWeekdays:!0})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker hideWeekdays />;
}
`},D={type:"code",centered:!0,component:function(){return(0,o.jsx)(l.DatePicker,{hideOutsideDates:!0})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker hideOutsideDates />;
}
`},S={type:"code",component:function(){return(0,o.jsx)(l.DatePicker,{excludeDate:e=>5!==new Date(e).getDay()})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker excludeDate={(date) => new Date(date).getDay() !== 5} />;
}
`,centered:!0},k={type:"code",centered:!0,component:function(){return(0,o.jsx)(l.DatePicker,{withWeekNumbers:!0})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker withWeekNumbers />;
}
`},w={type:"code",centered:!0,component:function(){return(0,o.jsx)(l.DatePicker,{presets:[{value:(0,i.default)().subtract(1,"day").format("YYYY-MM-DD"),label:"Yesterday"},{value:(0,i.default)().format("YYYY-MM-DD"),label:"Today"},{value:(0,i.default)().add(1,"day").format("YYYY-MM-DD"),label:"Tomorrow"},{value:(0,i.default)().add(1,"month").format("YYYY-MM-DD"),label:"Next month"},{value:(0,i.default)().add(1,"year").format("YYYY-MM-DD"),label:"Next year"},{value:(0,i.default)().subtract(1,"month").format("YYYY-MM-DD"),label:"Last month"},{value:(0,i.default)().subtract(1,"year").format("YYYY-MM-DD"),label:"Last year"}]})},code:`
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
`},I={type:"code",centered:!0,component:function(){let e=(0,i.default)();return(0,o.jsx)(l.DatePicker,{type:"range",presets:[{value:[e.subtract(2,"day").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"Last two days"},{value:[e.subtract(7,"day").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"Last 7 days"},{value:[e.startOf("month").format("YYYY-MM-DD"),e.format("YYYY-MM-DD")],label:"This month"},{value:[e.subtract(1,"month").startOf("month").format("YYYY-MM-DD"),e.subtract(1,"month").endOf("month").format("YYYY-MM-DD")],label:"Last month"},{value:[e.subtract(1,"year").startOf("year").format("YYYY-MM-DD"),e.subtract(1,"year").endOf("year").format("YYYY-MM-DD")],label:"Last year"}]})},code:`
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
`,defaultExpanded:!1},E={type:"code",centered:!0,component:function(){return(0,o.jsx)(l.DatePicker,{defaultDate:"2022-02-01",headerControlsOrder:["level","previous","next"],styles:{calendarHeaderLevel:{justifyContent:"flex-start",paddingInlineStart:8}}})},code:`
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
`},P={type:"code",centered:!0,maxWidth:600,component:function(){let[e,t]=(0,a.useState)(null);return(0,o.jsx)(l.DatePicker,{fullWidth:!0,value:e,onChange:t})},code:`
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';

function Demo() {
  const [value, setValue] = useState<string | null>(null);
  return <DatePicker fullWidth value={value} onChange={setValue} />;
}
`},L={type:"code",centered:!0,component:function(){return(0,o.jsx)(l.DatePicker,{withNativeLevelSelect:!0,yearsSelectRange:[2020,2035]})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker withNativeLevelSelect yearsSelectRange={[2020, 2035]} />;
}
`};var O=(0,t.__exportAll)({controlProps:()=>m,controlledDate:()=>r,defaultDate:()=>u,defaultLevel:()=>y,deselect:()=>Y,excludeDate:()=>S,firstDayOfWeek:()=>x,fullWidth:()=>P,headerControlsOrder:()=>E,hideOutsideDates:()=>D,hideWeekdays:()=>A,labelFormat:()=>h,listFormat:()=>p,locale:()=>f,maxLevel:()=>T,minMax:()=>g,multiple:()=>z,nativeLevelSelect:()=>L,numberOfColumns:()=>Z,presets:()=>w,presetsRange:()=>I,range:()=>_,renderDay:()=>C,singleRange:()=>F,sizeConfigurator:()=>H,usage:()=>B,weekendDays:()=>v,withWeekNumbers:()=>k});let{usage:B,multiple:z,deselect:Y,range:_,singleRange:F,numberOfColumns:Z,sizeConfigurator:H}=(0,n.getSharedPickerDemos)(l.DatePicker);e.s(["DatePickerDemos",0,O],341921)},696812,e=>{"use strict";var t=e.i(648863),n=e.i(191788),a=e.i(232471),o=e.i(391398),l=e.i(200814);let i={type:"code",component:function(){let[e,t]=(0,n.useState)(115),{ref:i}=(0,l.useRadialMove)(t);return(0,o.jsxs)(a.Box,{className:"m_7cf02604",ref:i,style:{"--angle":`${e}deg`},children:[(0,o.jsxs)("div",{className:"m_2146908f",children:[e,"°"]}),(0,o.jsx)("div",{className:"m_212db0f4"})]})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import { Box } from '@mantine/core';
import { useRadialMove } from '@mantine/hooks';
import classes from './Demo.module.css';

function Demo() {
  const [value, setValue] = useState(115);
  const { ref } = useRadialMove(setValue);

  return (
    <Box className={classes.root} ref={ref} style={{ '--angle': \`\${value}deg\` }}>
      <div className={classes.value}>{value}\xb0</div>
      <div className={classes.thumb} />
    </Box>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`.root {
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 160px;
  display: flex;
  align-items: center;
  justify-content: center;

  --empty-color: light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-6));
  --filled-color: light-dark(var(--mantine-color-blue-6), var(--mantine-color-blue-8));

  background-image: conic-gradient(
    var(--filled-color) 0deg,
    var(--filled-color) var(--angle, 0deg),
    var(--empty-color) var(--angle, 0deg)
  );
}

.value {
  background-color: var(--mantine-color-body);
  width: 132px;
  height: 132px;
  border-radius: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.thumb {
  position: absolute;
  width: 14px;
  height: 160px;
  transform: rotate(var(--angle, 0deg));

  &::before {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    background-color: light-dark(var(--mantine-color-white), var(--filled-color));
    border: 2px solid light-dark(var(--filled-color), var(--mantine-color-white));
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
}`,language:"scss"}],centered:!0};var r=(0,t.__exportAll)({usage:()=>i});e.s(["UseRadialMoveDemos",0,r],696812)},577830,e=>{"use strict";e.s(["gradientControls",0,[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]])},153338,e=>{"use strict";e.s(["interactiveVariantsControl",0,{type:"select",prop:"variant",data:["default","filled","light","outline","subtle","transparent","white"],initialValue:"filled",libraryValue:"__none__"},"staticVariantsControl",0,{type:"select",prop:"variant",data:["filled","light","outline","transparent","white","default"],initialValue:"filled",libraryValue:"__none__"}])},617576,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,160H48l80-80Z",opacity:"0.2"}),t.createElement("path",{d:"M213.66,154.34l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,48,168H208a8,8,0,0,0,5.66-13.66ZM67.31,152,128,91.31,188.69,152Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M215.39,163.06A8,8,0,0,1,208,168H48a8,8,0,0,1-5.66-13.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,215.39,163.06Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M212.24,164.24a6,6,0,0,1-8.48,0L128,88.49,52.24,164.24a6,6,0,0,1-8.48-8.48l80-80a6,6,0,0,1,8.48,0l80,80A6,6,0,0,1,212.24,164.24Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M210.83,162.83a4,4,0,0,1-5.66,0L128,85.66,50.83,162.83a4,4,0,0,1-5.66-5.66l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,210.83,162.83Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(n.default,{ref:o,...e,weights:a}));o.displayName="CaretUpIcon",e.s(["CaretUpIcon",0,o],617576)},500954,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M160,128a224.48,224.48,0,0,1-26.37,105.54,12,12,0,1,1-21.16-11.32A200.33,200.33,0,0,0,136,128a8,8,0,0,0-16,0,12,12,0,0,1-24,0,32,32,0,0,1,64,0ZM128,56a12,12,0,1,0,0,24,48.05,48.05,0,0,1,48,48c0,7.62-.36,15.32-1.07,22.87A12,12,0,0,0,185.74,164c.38,0,.76,0,1.14,0a12,12,0,0,0,11.93-10.87c.79-8.3,1.18-16.76,1.18-25.13A72.08,72.08,0,0,0,128,56ZM96,92.23A12,12,0,0,0,80,74.35,72.1,72.1,0,0,0,56,128a120.11,120.11,0,0,1-15.12,58.37,12,12,0,0,0,21,11.69A144.14,144.14,0,0,0,80,128,48.08,48.08,0,0,1,96,92.23Zm10.1,64.1a12,12,0,0,0-14.46,8.9,158.61,158.61,0,0,1-18.88,45.86,12,12,0,0,0,20.5,12.48A182.86,182.86,0,0,0,115,170.79,12,12,0,0,0,106.1,156.33Zm76.73,24.07A12,12,0,0,0,168.19,189a241.5,241.5,0,0,1-8,24.87,12,12,0,0,0,6.91,15.49,11.76,11.76,0,0,0,4.29.8,12,12,0,0,0,11.21-7.71,260.2,260.2,0,0,0,8.79-27.37A12,12,0,0,0,182.83,180.4ZM128,16A112.12,112.12,0,0,0,16,127.44c0,.19,0,.38,0,.57a79.81,79.81,0,0,1-5,27.82,12,12,0,1,0,22.5,8.35A103.59,103.59,0,0,0,40,128.58c0-.19,0-.38,0-.57a88,88,0,0,1,176-.5c0,.16,0,.33,0,.5a282.12,282.12,0,0,1-6.74,61.38,12,12,0,0,0,9.09,14.33A11.84,11.84,0,0,0,221,204a12,12,0,0,0,11.7-9.38A305.87,305.87,0,0,0,240,128.55c0-.18,0-.36,0-.54A112.13,112.13,0,0,0,128,16Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M72,128a134.63,134.63,0,0,1-14.16,60.47,8,8,0,1,1-14.32-7.12A118.8,118.8,0,0,0,56,128,71.73,71.73,0,0,1,83,71.8,8,8,0,1,1,93,84.29,55.76,55.76,0,0,0,72,128Zm56-8a8,8,0,0,0-8,8,184.12,184.12,0,0,1-23,89.1,8,8,0,0,0,14,7.76A200.19,200.19,0,0,0,136,128,8,8,0,0,0,128,120Zm0-32a40,40,0,0,0-40,40,8,8,0,0,0,16,0,24,24,0,0,1,48,0,214.09,214.09,0,0,1-20.51,92A8,8,0,1,0,146,226.83,230,230,0,0,0,168,128,40,40,0,0,0,128,88Zm0-64A104.11,104.11,0,0,0,24,128a87.76,87.76,0,0,1-5,29.33,8,8,0,0,0,15.09,5.33A103.9,103.9,0,0,0,40,128a88,88,0,0,1,176,0,282.24,282.24,0,0,1-5.29,54.45,8,8,0,0,0,6.3,9.4,8.22,8.22,0,0,0,1.55.15,8,8,0,0,0,7.84-6.45A298.37,298.37,0,0,0,232,128,104.12,104.12,0,0,0,128,24ZM94.4,152.17A8,8,0,0,0,85,158.42a151,151,0,0,1-17.21,45.44,8,8,0,0,0,13.86,8,166.67,166.67,0,0,0,19-50.25A8,8,0,0,0,94.4,152.17ZM128,56a72.85,72.85,0,0,0-9,.56,8,8,0,0,0,2,15.87A56.08,56.08,0,0,1,184,128a252.12,252.12,0,0,1-1.92,31A8,8,0,0,0,189,168a8.39,8.39,0,0,0,1,.06,8,8,0,0,0,7.92-7,266.48,266.48,0,0,0,2-33A72.08,72.08,0,0,0,128,56Zm57.93,128.25a8,8,0,0,0-9.75,5.75c-1.46,5.69-3.15,11.4-5,17a8,8,0,0,0,5,10.13,7.88,7.88,0,0,0,2.55.42,8,8,0,0,0,7.58-5.46c2-5.92,3.79-12,5.35-18.05A8,8,0,0,0,185.94,184.26Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M126.42,24C70.73,24.85,25.21,70.09,24,125.81a103.53,103.53,0,0,0,13.52,53.54,4,4,0,0,0,7.1-.3,119.35,119.35,0,0,0,11.37-51A71.77,71.77,0,0,1,83,71.83a8,8,0,1,1,9.86,12.61A55.82,55.82,0,0,0,72,128.07a135.28,135.28,0,0,1-18.45,68.35,4,4,0,0,0,.61,4.85c2,2,4.09,4,6.25,5.82a4,4,0,0,0,6-1A151.18,151.18,0,0,0,85,158.49a8,8,0,1,1,15.68,3.19,167.33,167.33,0,0,1-21.07,53.64,4,4,0,0,0,1.6,5.63c2.47,1.25,5,2.41,7.57,3.47a4,4,0,0,0,5-1.61A183,183,0,0,0,120,128.28a8.16,8.16,0,0,1,7.44-8.21,8,8,0,0,1,8.56,8,198.94,198.94,0,0,1-25.21,97.16,4,4,0,0,0,2.95,5.92q4.55.63,9.21.86a4,4,0,0,0,3.67-2.1A214.88,214.88,0,0,0,152,128.8c.05-13.25-10.3-24.49-23.54-24.74A24,24,0,0,0,104,128a8.1,8.1,0,0,1-7.29,8,8,8,0,0,1-8.71-8,40,40,0,0,1,40.42-40c22,.23,39.68,19.17,39.57,41.16a231.37,231.37,0,0,1-20.52,94.57,4,4,0,0,0,4.62,5.51,103.49,103.49,0,0,0,10.26-3,4,4,0,0,0,2.35-2.22,243.76,243.76,0,0,0,11.48-34,8,8,0,1,1,15.5,4q-1.12,4.37-2.4,8.7a4,4,0,0,0,6.46,4.17A104,104,0,0,0,126.42,24ZM198,161.08a8,8,0,0,1-7.92,7,8.39,8.39,0,0,1-1-.06,8,8,0,0,1-6.95-8.93,252.57,252.57,0,0,0,1.92-31,56.08,56.08,0,0,0-56-56,56.78,56.78,0,0,0-7,.43,8,8,0,0,1-2-15.89,72.1,72.1,0,0,1,81,71.49A266.93,266.93,0,0,1,198,161.08Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M70,128a132.68,132.68,0,0,1-14,59.58,6,6,0,0,1-5.38,3.33,6,6,0,0,1-5.36-8.67A120.74,120.74,0,0,0,58,128,69.72,69.72,0,0,1,84.25,73.36a6,6,0,0,1,7.51,9.37A57.73,57.73,0,0,0,70,128Zm58-6a6,6,0,0,0-6,6,186.07,186.07,0,0,1-23.23,90.07,6,6,0,0,0,10.5,5.82A198.14,198.14,0,0,0,134,128,6,6,0,0,0,128,122Zm0-32a38,38,0,0,0-38,38,6,6,0,0,0,12,0,26,26,0,0,1,52,0,216.06,216.06,0,0,1-20.71,92.85A6,6,0,1,0,144.16,226,227.94,227.94,0,0,0,166,128,38,38,0,0,0,128,90Zm0-64A102.11,102.11,0,0,0,26,128a90,90,0,0,1-5.12,30,6,6,0,1,0,11.31,4A101.83,101.83,0,0,0,38,128a90,90,0,0,1,180,0,284.7,284.7,0,0,1-5.33,54.84,6,6,0,0,0,4.72,7.05,6.8,6.8,0,0,0,1.17.11,6,6,0,0,0,5.88-4.84A295.92,295.92,0,0,0,230,128,102.12,102.12,0,0,0,128,26ZM94,154.13a6,6,0,0,0-7.07,4.69,152.82,152.82,0,0,1-17.44,46,6,6,0,0,0,10.4,6,164.77,164.77,0,0,0,18.8-49.65A6,6,0,0,0,94,154.13ZM128,58a70.76,70.76,0,0,0-8.75.54,6,6,0,1,0,1.49,11.91A58,58,0,0,1,186,128a252.27,252.27,0,0,1-1.94,31.26,6,6,0,0,0,5.21,6.69,6.59,6.59,0,0,0,.75,0,6,6,0,0,0,5.95-5.26A266.46,266.46,0,0,0,198,128,70.08,70.08,0,0,0,128,58ZM185.44,186.2a6,6,0,0,0-7.31,4.31c-1.47,5.74-3.18,11.49-5.06,17.09a6,6,0,0,0,11.38,3.82c2-5.88,3.75-11.9,5.3-17.92A6,6,0,0,0,185.44,186.2Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M72,128a134.63,134.63,0,0,1-14.16,60.47,8,8,0,1,1-14.32-7.12A118.8,118.8,0,0,0,56,128,71.73,71.73,0,0,1,83,71.8,8,8,0,1,1,93,84.29,55.76,55.76,0,0,0,72,128Zm56-8a8,8,0,0,0-8,8,184.12,184.12,0,0,1-23,89.1,8,8,0,0,0,14,7.76A200.19,200.19,0,0,0,136,128,8,8,0,0,0,128,120Zm0-32a40,40,0,0,0-40,40,8,8,0,0,0,16,0,24,24,0,0,1,48,0,214.09,214.09,0,0,1-20.51,92A8,8,0,1,0,146,226.83,230,230,0,0,0,168,128,40,40,0,0,0,128,88Zm0-64A104.11,104.11,0,0,0,24,128a87.76,87.76,0,0,1-5,29.33,8,8,0,0,0,15.09,5.33A103.9,103.9,0,0,0,40,128a88,88,0,0,1,176,0,282.24,282.24,0,0,1-5.29,54.45,8,8,0,0,0,6.3,9.4,8.22,8.22,0,0,0,1.55.15,8,8,0,0,0,7.84-6.45A298.37,298.37,0,0,0,232,128,104.12,104.12,0,0,0,128,24ZM94.4,152.17A8,8,0,0,0,85,158.42a151,151,0,0,1-17.21,45.44,8,8,0,0,0,13.86,8,166.67,166.67,0,0,0,19-50.25A8,8,0,0,0,94.4,152.17ZM128,56a72.85,72.85,0,0,0-9,.56,8,8,0,0,0,2,15.87A56.08,56.08,0,0,1,184,128a252.12,252.12,0,0,1-1.92,31A8,8,0,0,0,189,168a8.39,8.39,0,0,0,1,.06,8,8,0,0,0,7.92-7,266.48,266.48,0,0,0,2-33A72.08,72.08,0,0,0,128,56Zm57.93,128.25a8,8,0,0,0-9.75,5.75c-1.46,5.69-3.15,11.4-5,17a8,8,0,0,0,5,10.13,7.88,7.88,0,0,0,2.55.42,8,8,0,0,0,7.58-5.46c2-5.92,3.79-12,5.35-18.05A8,8,0,0,0,185.94,184.26Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M68,128A130.71,130.71,0,0,1,54.27,186.7a4,4,0,0,1-3.58,2.22,3.91,3.91,0,0,1-1.78-.42,4,4,0,0,1-1.8-5.36A122.71,122.71,0,0,0,60,128,67.74,67.74,0,0,1,85.5,74.92a4,4,0,0,1,5,6.25A59.74,59.74,0,0,0,68,128Zm60-4a4,4,0,0,0-4,4,188.1,188.1,0,0,1-23.48,91,4,4,0,0,0,7,3.88A196.22,196.22,0,0,0,132,128,4,4,0,0,0,128,124Zm0-32a36,36,0,0,0-36,36,4,4,0,0,0,8,0,28,28,0,0,1,56,0,218,218,0,0,1-20.9,93.7,4,4,0,1,0,7.24,3.41A226,226,0,0,0,164,128,36,36,0,0,0,128,92Zm0-64A100.11,100.11,0,0,0,28,128a91.66,91.66,0,0,1-5.24,30.67,4,4,0,1,0,7.54,2.66A99.66,99.66,0,0,0,36,128a92,92,0,0,1,184,0,286.37,286.37,0,0,1-5.37,55.23,4,4,0,0,0,3.15,4.69,4.13,4.13,0,0,0,.78.08,4,4,0,0,0,3.92-3.23A294.25,294.25,0,0,0,228,128,100.11,100.11,0,0,0,128,28ZM93.6,156.09a4,4,0,0,0-4.71,3.12,155,155,0,0,1-17.66,46.64,4,4,0,0,0,6.93,4,163.13,163.13,0,0,0,18.57-49A4,4,0,0,0,93.6,156.09ZM128,60a68.79,68.79,0,0,0-8.5.53,4,4,0,0,0,1,7.93A62.57,62.57,0,0,1,128,68a60.07,60.07,0,0,1,60,60,256.15,256.15,0,0,1-1.95,31.5,4,4,0,0,0,3.47,4.47l.5,0a4,4,0,0,0,4-3.51A264.37,264.37,0,0,0,196,128,68.08,68.08,0,0,0,128,60Zm56.93,128.12a4,4,0,0,0-4.87,2.88c-1.49,5.78-3.21,11.58-5.1,17.23a4,4,0,1,0,7.58,2.54c2-5.83,3.73-11.81,5.27-17.77A4,4,0,0,0,184.94,188.13Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(n.default,{ref:o,...e,weights:a}));o.displayName="FingerprintIcon",e.s(["FingerprintIcon",0,o],500954)},799678,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22c6.3-11,22.52-11,28.82,0l87.46,151.87C236,202.79,228.08,216,215.46,216Z",opacity:"0.2"}),t.createElement("path",{d:"M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M235.07,189.09,147.61,37.22h0a22.75,22.75,0,0,0-39.22,0L20.93,189.09a21.53,21.53,0,0,0,0,21.72A22.35,22.35,0,0,0,40.55,222h174.9a22.35,22.35,0,0,0,19.6-11.19A21.53,21.53,0,0,0,235.07,189.09ZM224.66,204.8a10.46,10.46,0,0,1-9.21,5.2H40.55a10.46,10.46,0,0,1-9.21-5.2,9.51,9.51,0,0,1,0-9.72L118.79,43.21a10.75,10.75,0,0,1,18.42,0l87.46,151.87A9.51,9.51,0,0,1,224.66,204.8ZM122,144V104a6,6,0,0,1,12,0v40a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,180Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M233.34,190.09,145.88,38.22h0a20.75,20.75,0,0,0-35.76,0L22.66,190.09a19.52,19.52,0,0,0,0,19.71A20.36,20.36,0,0,0,40.54,220H215.46a20.36,20.36,0,0,0,17.86-10.2A19.52,19.52,0,0,0,233.34,190.09ZM226.4,205.8a12.47,12.47,0,0,1-10.94,6.2H40.54a12.47,12.47,0,0,1-10.94-6.2,11.45,11.45,0,0,1,0-11.72L117.05,42.21a12.76,12.76,0,0,1,21.9,0L226.4,194.08A11.45,11.45,0,0,1,226.4,205.8ZM124,144V104a4,4,0,0,1,8,0v40a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,180Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(n.default,{ref:o,...e,weights:a}));o.displayName="WarningIcon",e.s(["WarningIcon",0,o],799678)},953177,e=>{"use strict";var t=e.i(648863),n=e.i(153338),a=e.i(405289),o=e.i(658109),l=e.i(391398);let i={type:"configurator",component:function(e){return(0,l.jsx)(o.ActionIcon,{...e,"aria-label":"Settings",children:(0,l.jsx)(a.SlidersHorizontalIcon,{style:{width:"70%",height:"70%"}})})},code:`
import { ActionIcon } from '@mantine/core';
import { SlidersHorizontalIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <ActionIcon{{props}} aria-label="Settings">
      <SlidersHorizontalIcon style={{ width: '70%', height: '70%' }} />
    </ActionIcon>
  );
}
`,centered:!0,controls:[n.interactiveVariantsControl,{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"md",libraryValue:"md"}]};var r=e.i(900374),s=e.i(853907),c=e.i(613688);let d={type:"configurator",component:function(e){return(0,l.jsxs)(o.ActionIcon.Group,{...e,children:[(0,l.jsx)(o.ActionIcon,{variant:"default",size:"lg","aria-label":"Gallery",children:(0,l.jsx)(c.ImageIcon,{size:20})}),(0,l.jsx)(o.ActionIcon,{variant:"default",size:"lg","aria-label":"Settings",children:(0,l.jsx)(r.GearSixIcon,{size:20})}),(0,l.jsx)(o.ActionIcon,{variant:"default",size:"lg","aria-label":"Likes",children:(0,l.jsx)(s.HeartIcon,{size:20})})]})},code:`
import { ActionIcon } from '@mantine/core';
import { ImageIcon, GearSixIcon, HeartIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <ActionIcon.Group{{props}}>
      <ActionIcon variant="default" size="lg" aria-label="Gallery">
        <ImageIcon size={20} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Settings">
        <GearSixIcon size={20} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Likes">
        <HeartIcon size={20} />
      </ActionIcon>
    </ActionIcon.Group>
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"orientation",data:["horizontal","vertical"],initialValue:"horizontal",libraryValue:"horizontal"}]},m={type:"code",centered:!0,component:function(){return(0,l.jsx)(o.ActionIcon,{size:42,variant:"default","aria-label":"ActionIcon with size as a number",children:(0,l.jsx)(s.HeartIcon,{size:24})})},code:`
import { ActionIcon } from '@mantine/core';
import { HeartIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <ActionIcon size={42} variant="default" aria-label="ActionIcon with size as a number">
      <HeartIcon size={24} />
    </ActionIcon>
  );
}
`},u={type:"configurator",component:function(e){return(0,l.jsx)(o.ActionIcon,{variant:"gradient",size:"xl","aria-label":"Gradient action icon",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree},children:(0,l.jsx)(s.HeartIcon,{})})},code:e=>`
import { ActionIcon } from '@mantine/core';
import { HeartIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <ActionIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{ from: '${e.gradientFrom}', to: '${e.gradientTo}', deg: ${e.gradientDegree} }}
    >
      <HeartIcon />
    </ActionIcon>
  );
}
`,centered:!0,controls:e.i(577830).gradientControls};var h=e.i(725695);let p={type:"code",component:function(){return(0,l.jsxs)(h.Group,{justify:"center",children:[(0,l.jsx)(o.ActionIcon,{size:"xl",disabled:!0,"aria-label":"Disabled and not interactive",children:(0,l.jsx)(s.HeartIcon,{})}),(0,l.jsx)(o.ActionIcon,{size:"xl","data-disabled":!0,"aria-label":"Has disabled styles but still interactive",children:(0,l.jsx)(s.HeartIcon,{})})]})},code:`
import { ActionIcon, Group } from '@mantine/core';
import { HeartIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Group justify="center">
      <ActionIcon size="xl" disabled aria-label="Disabled and not interactive">
        <HeartIcon />
      </ActionIcon>

      <ActionIcon size="xl" data-disabled aria-label="Has disabled styles but still interactive">
        <HeartIcon />
      </ActionIcon>
    </Group>
  );
}
`};var f=e.i(544117);let b={type:"code",component:function(){return(0,l.jsx)(o.ActionIcon,{component:"a",href:"https://mantine.dev","data-disabled":!0,size:"xl","aria-label":"Open in a new tab",onClick:e=>e.preventDefault(),children:(0,l.jsx)(f.ArrowSquareOutIcon,{})})},centered:!0,code:`
import { ActionIcon } from '@mantine/core';
import { ArrowSquareOutIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <ActionIcon
      component="a"
      href="https://mantine.dev"
      data-disabled
      size="xl"
      aria-label="Open in a new tab"
      onClick={(event) => event.preventDefault()}
    >
      <ArrowSquareOutIcon />
    </ActionIcon>
  );
}
`};var T=e.i(431868);let g={type:"code",component:function(){return(0,l.jsx)(T.Tooltip,{label:"Tooltip for disabled button",children:(0,l.jsx)(o.ActionIcon,{"aria-label":"Hover to see tooltip",size:"xl","data-disabled":!0,onClick:e=>e.preventDefault(),children:(0,l.jsx)(s.HeartIcon,{})})})},centered:!0,code:`
import { ActionIcon, Tooltip } from '@mantine/core';
import { HeartIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <ActionIcon
        aria-label="Hover to see tooltip"
        size="xl"
        data-disabled
        onClick={(event) => event.preventDefault()}
      >
        <HeartIcon />
      </ActionIcon>
    </Tooltip>
  );
}
`},y={type:"code",component:function(){return(0,l.jsx)(o.ActionIcon,{size:"xl",className:"m_892ca4f5",disabled:!0,"aria-label":"Disabled with styles",children:(0,l.jsx)(s.HeartIcon,{})})},centered:!0,code:[{fileName:"Demo.module.css",code:`
.button {
  &:disabled,
  &[data-disabled] {
    border-color: light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
    background-color: transparent;
  }
}
`,language:"scss"},{fileName:"Demo.tsx",code:`
import { ActionIcon } from '@mantine/core';
import { HeartIcon } from '@phosphor-icons/react';
import classes from './Demo.module.css';

function Demo() {
  return (
    <ActionIcon size="xl" className={classes.button} disabled aria-label="Disabled with styles">
      <HeartIcon />
    </ActionIcon>
  );
}
`,language:"tsx"}]};var x=e.i(502325),v=e.i(541772);let M={type:"code",component:function(){let[e,{toggle:t}]=(0,v.useDisclosure)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(h.Group,{children:[(0,l.jsx)(o.ActionIcon,{loading:e,"aria-label":"Like",children:(0,l.jsx)(s.HeartIcon,{size:18})}),(0,l.jsx)(o.ActionIcon,{variant:"light",loading:e,"aria-label":"Like",children:(0,l.jsx)(s.HeartIcon,{size:18})}),(0,l.jsx)(o.ActionIcon,{variant:"outline",loading:e,"aria-label":"Like",children:(0,l.jsx)(s.HeartIcon,{size:18})})]}),(0,l.jsx)(x.Switch,{checked:e,onChange:t,label:"Loading state",mt:"md"})]})},centered:!0,code:`
import { ActionIcon, Group, Switch } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { HeartIcon } from '@phosphor-icons/react';

function Demo() {
  const [loading, { toggle }] = useDisclosure();
  return (
    <>
      <Group>
        <ActionIcon loading={loading} aria-label="Like">
          <HeartIcon size={18} />
        </ActionIcon>
        <ActionIcon variant="light" loading={loading} aria-label="Like">
          <HeartIcon size={18} />
        </ActionIcon>
        <ActionIcon variant="outline" loading={loading} aria-label="Like">
          <HeartIcon size={18} />
        </ActionIcon>
      </Group>

      <Switch checked={loading} onChange={toggle} label="Loading state" mt="md" />
    </>
  );
}
`},j={type:"code",component:function(){return(0,l.jsx)(o.ActionIcon,{size:"xl",loading:!0,"aria-label":"Loading...",loaderProps:{type:"dots"}})},centered:!0,code:`
import { ActionIcon } from '@mantine/core';

function Demo() {
  return <ActionIcon size="xl" loading loaderProps={{ type: 'dots' }} aria-label="Loading..." />;
}
`};var C=e.i(951254),A=e.i(530514);let D=`
import { Group, ActionIcon, MantineProvider, createTheme } from '@mantine/core';
import { HeartIcon } from '@phosphor-icons/react';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    ActionIcon: ActionIcon.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group justify="center">
        <ActionIcon size="xl" variant="danger" aria-label="Danger variant">
          <HeartIcon />
        </ActionIcon>
        <ActionIcon size="xl" variant="primary" aria-label="Primary variant">
          <HeartIcon />
        </ActionIcon>
      </Group>
    </MantineProvider>
  );
}
`,S=`
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
`,k=(0,A.createTheme)({components:{ActionIcon:o.ActionIcon.extend({classNames:{root:"m_6f3d7427"}})}}),w={type:"code",component:function(){return(0,l.jsx)(C.MantineThemeProvider,{theme:k,children:(0,l.jsxs)(h.Group,{justify:"center",children:[(0,l.jsx)(o.ActionIcon,{size:"xl",variant:"danger","aria-label":"Danger variant",children:(0,l.jsx)(s.HeartIcon,{})}),(0,l.jsx)(o.ActionIcon,{size:"xl",variant:"primary","aria-label":"Primary variant",children:(0,l.jsx)(s.HeartIcon,{})})]})})},centered:!0,code:[{fileName:"Demo.tsx",code:D,language:"tsx"},{fileName:"Demo.module.css",code:S,language:"scss"}]},I=`
import { ActionIcon, createTheme, Group, MantineThemeProvider } from '@mantine/core';
import { HeartIcon } from '@phosphor-icons/react';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    ActionIcon: ActionIcon.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Group justify="center">
        <ActionIcon size="xxs" aria-label="Custom xxs size">
          <HeartIcon size={10} />
        </ActionIcon>

        <ActionIcon size="xxl" aria-label="Custom xxl size">
          <HeartIcon size={32} />
        </ActionIcon>
      </Group>
    </MantineThemeProvider>
  );
}
`,E=`
.root {
  --ai-size-xxs: 16px;
  --ai-size-xxl: 50px;
}
`,P=(0,A.createTheme)({components:{ActionIcon:o.ActionIcon.extend({classNames:{root:"m_2be4ed51"}})}}),L={type:"code",component:function(){return(0,l.jsx)(C.MantineThemeProvider,{theme:P,children:(0,l.jsxs)(h.Group,{justify:"center",children:[(0,l.jsx)(o.ActionIcon,{size:"xxs","aria-label":"Custom xxs size",children:(0,l.jsx)(s.HeartIcon,{size:10})}),(0,l.jsx)(o.ActionIcon,{size:"xxl","aria-label":"Custom xxl size",children:(0,l.jsx)(s.HeartIcon,{size:32})})]})})},code:[{fileName:"Demo.tsx",code:I,language:"tsx"},{fileName:"Demo.module.css",code:E,language:"scss"}]};var O=e.i(500954),B=e.i(799678),z=e.i(4518),Y=e.i(649069),_=e.i(670989),F=e.i(744335);let Z=e=>{let t=(0,Y.defaultVariantColorsResolver)(e),n=(0,_.parseThemeColor)({color:e.color||e.theme.primaryColor,theme:e.theme});return n.isThemeColor&&"lime"===n.color&&"filled"===e.variant?{...t,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,F.rgba)(n.value,.1),hover:(0,F.rgba)(n.value,.15),border:`1px solid ${n.value}`,color:(0,z.darken)(n.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:t},H={type:"code",component:function(){return(0,l.jsx)(C.MantineThemeProvider,{theme:{variantColorResolver:Z},children:(0,l.jsxs)(h.Group,{children:[(0,l.jsx)(o.ActionIcon,{color:"lime.4",variant:"filled",size:"lg","aria-label":"Photo",children:(0,l.jsx)(c.ImageIcon,{size:20})}),(0,l.jsx)(o.ActionIcon,{color:"orange",variant:"light",size:"lg","aria-label":"FingerprintIcon",children:(0,l.jsx)(O.FingerprintIcon,{size:20})}),(0,l.jsx)(o.ActionIcon,{variant:"danger",size:"lg","aria-label":"Error 404",children:(0,l.jsx)(B.WarningIcon,{size:20})})]})})},centered:!0,defaultExpanded:!1,code:`
import { ImageIcon, FingerprintIcon, WarningIcon } from '@phosphor-icons/react';
import {
  ActionIcon,
  Group,
  MantineProvider,
  defaultVariantColorsResolver,
  VariantColorsResolver,
  parseThemeColor,
  rgba,
  darken,
} from '@mantine/core';

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  // Override some properties for variant
  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return {
      ...defaultResolvedColors,
      color: 'var(--mantine-color-black)',
      hoverColor: 'var(--mantine-color-black)',
    };
  }

  // Completely override variant
  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: \`1px solid \${parsedColor.value}\`,
      color: darken(parsedColor.value, 0.1),
    };
  }

  // Add new variants support
  if (input.variant === 'danger') {
    return {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  return defaultResolvedColors;
};

function Demo() {
  return (
    <MantineProvider theme={{ variantColorResolver }}>
      <Group>
        <ActionIcon color="lime.4" variant="filled" size="lg" aria-label="Photo">
          <ImageIcon size={20} />
        </ActionIcon>

        <ActionIcon color="orange" variant="light" size="lg" aria-label="FingerprintIcon">
          <FingerprintIcon size={20} />
        </ActionIcon>

        <ActionIcon variant="danger" size="lg" aria-label="Error 404">
          <WarningIcon size={20} />
        </ActionIcon>
      </Group>
    </MantineProvider>
  );
}
`},V={type:"code",component:function(){return(0,l.jsxs)(h.Group,{children:[(0,l.jsx)(o.ActionIcon,{"aria-label":"default action icon",size:"lg",color:"lime.4",children:(0,l.jsx)(O.FingerprintIcon,{size:20})}),(0,l.jsx)(o.ActionIcon,{autoContrast:!0,"aria-label":"autoContrast action icon",size:"lg",color:"lime.4",children:(0,l.jsx)(O.FingerprintIcon,{size:20})})]})},code:`
import { FingerprintIcon } from '@phosphor-icons/react';
import { ActionIcon, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <ActionIcon aria-label="default action icon" size="lg" color="lime.4">
        <FingerprintIcon size={20} />
      </ActionIcon>
      <ActionIcon autoContrast aria-label="autoContrast action icon" size="lg" color="lime.4">
        <FingerprintIcon size={20} />
      </ActionIcon>
    </Group>
  );
}
`,centered:!0};var N=e.i(841209);let R={type:"code",component:function(){return(0,l.jsxs)(h.Group,{children:[(0,l.jsx)(N.TextInput,{placeholder:"sm size input",size:"sm"}),(0,l.jsx)(o.ActionIcon,{size:"input-sm",variant:"default","aria-label":"ActionIcon the same size as inputs",children:"SM"})]})},code:`
import { ActionIcon, Group, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <TextInput placeholder="sm size input" size="sm" />
      <ActionIcon size="input-sm" variant="default" aria-label="ActionIcon the same size as inputs">
        SM
      </ActionIcon>
    </Group>
  );
}
`,centered:!0};var $=e.i(931882),W=e.i(617576),G=e.i(692385);let q={type:"code",component:function(){let[e,{increment:t,decrement:n}]=(0,G.useCounter)(135,{min:0});return(0,l.jsxs)(o.ActionIcon.Group,{children:[(0,l.jsx)(o.ActionIcon,{variant:"default",size:"lg",onClick:n,"aria-label":"Decrement value",children:(0,l.jsx)($.CaretDownIcon,{color:"var(--mantine-color-red-text)"})}),(0,l.jsx)(o.ActionIcon.GroupSection,{variant:"default",size:"lg",bg:"var(--mantine-color-body)",miw:60,children:e}),(0,l.jsx)(o.ActionIcon,{variant:"default",size:"lg",onClick:t,"aria-label":"Increment value",children:(0,l.jsx)(W.CaretUpIcon,{color:"var(--mantine-color-teal-text)"})})]})},code:`
import { CaretDownIcon, CaretUpIcon } from '@phosphor-icons/react';
import { ActionIcon } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

function Demo() {
  const [value, { increment, decrement }] = useCounter(135, { min: 0 });

  return (
    <ActionIcon.Group>
      <ActionIcon
        variant="default"
        size="lg"
        onClick={decrement}
        aria-label="Decrement value"
      >
        <CaretDownIcon color="var(--mantine-color-red-text)" />
      </ActionIcon>
      <ActionIcon.GroupSection variant="default" size="lg" bg="var(--mantine-color-body)" miw={60}>
        {value}
      </ActionIcon.GroupSection>
      <ActionIcon
        variant="default"
        size="lg"
        onClick={increment}
        aria-label="Increment value"
      >
        <CaretUpIcon color="var(--mantine-color-teal-text)" />
      </ActionIcon>
    </ActionIcon.Group>
  );
}
`,centered:!0};var U=(0,t.__exportAll)({autoContrast:()=>V,customSize:()=>L,customVariant:()=>w,disabled:()=>p,disabledLink:()=>b,disabledStyles:()=>y,disabledTooltip:()=>g,gradient:()=>u,group:()=>d,groupSection:()=>q,inputSize:()=>R,loaderProps:()=>j,loading:()=>M,size:()=>m,usage:()=>i,variantColorsResolver:()=>H});e.s(["ActionIconDemos",0,U],953177)},926923,e=>{"use strict";var t=e.i(648863),n=e.i(485108),a=e.i(883364),o=e.i(391398),l=e.i(200140),i=e.i(322091);let r={type:"code",centered:!0,component:function(){return(0,o.jsx)(n.Button,{onClick:()=>i.modals.openConfirmModal({modalId:"test-id",title:"Please confirm your action",children:(0,o.jsx)(a.Text,{size:"sm",children:"This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."}),onCancel:()=>l.notifications.show({title:"Canceled",message:"Confirm modal was canceled",color:"gray"}),onConfirm:()=>l.notifications.show({title:"Confirmed",message:"Confirm modal was confirmed",color:"teal"})}),children:"Open confirm modal"})},code:`
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  const openModal = () => modals.openConfirmModal({
    title: 'Please confirm your action',
    children: (
      <Text size="sm">
        This action is so important that you are required to confirm it with a modal. Please click
        one of these buttons to proceed.
      </Text>
    ),
    labels: { confirm: 'Confirm', cancel: 'Cancel' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => console.log('Confirmed'),
  });

  return <Button onClick={openModal}>Open confirm modal</Button>;
}
`},s={type:"code",centered:!0,component:function(){return(0,o.jsx)(n.Button,{onClick:()=>i.modals.openContextModal({modal:"demonstration",title:"Test modal from context",innerProps:{modalBody:"This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook"}}),children:"Open demonstration context modal"})},code:`
import { Button } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  return (
    <Button
      onClick={() =>
        modals.openContextModal({
          modal: 'demonstration',
          title: 'Test modal from context',
          innerProps: {
            modalBody:
              'This modal was defined in ModalsProvider, you can open it anywhere in you app with useModals hook',
          },
        })
      }
    >
      Open demonstration context modal
    </Button>
  );
}
`},c={type:"code",centered:!0,component:function(){return(0,o.jsx)(n.Button,{onClick:()=>i.modals.openConfirmModal({title:"Delete your profile",centered:!0,children:(0,o.jsx)(a.Text,{size:"sm",children:"Are you sure you want to delete your profile? This action is destructive and you will have to contact support to restore your data."}),labels:{confirm:"Delete account",cancel:"No don't delete it"},confirmProps:{color:"red"},onCancel:()=>l.notifications.show({title:"Canceled",message:"Delete modal was canceled",color:"gray"}),onConfirm:()=>l.notifications.show({title:"Deleted",message:"Delete modal was confirmed",color:"red"})}),color:"red",children:"Delete account"})},code:`
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: 'Delete your profile',
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete your profile? This action is destructive and you will have
          to contact support to restore your data.
        </Text>
      ),
      labels: { confirm: 'Delete account', cancel: "No don't delete it" },
      confirmProps: { color: 'red' },
      onCancel: () => console.log('Cancel'),
      onConfirm: () => console.log('Confirmed'),
    });

  return <Button onClick={openDeleteModal} color="red">Delete account</Button>;
}
`},d={type:"code",centered:!0,component:function(){return(0,o.jsx)(n.Button,{onClick:()=>i.modals.openConfirmModal({title:"Please confirm your action",closeOnConfirm:!1,labels:{confirm:"Next modal",cancel:"Close modal"},children:(0,o.jsx)(a.Text,{size:"sm",children:"This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."}),onConfirm:()=>i.modals.openConfirmModal({title:"This is modal at second layer",labels:{confirm:"Close modal",cancel:"Back"},closeOnConfirm:!1,children:(0,o.jsx)(a.Text,{size:"sm",children:"When this modal is closed modals state will revert to first modal"}),onConfirm:i.modals.closeAll})}),children:"Open multiple steps modal"})},code:`
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  return (
    <Button
      onClick={() =>
        modals.openConfirmModal({
          title: 'Please confirm your action',
          closeOnConfirm: false,
          labels: { confirm: 'Next modal', cancel: 'Close modal' },
          children: (
            <Text size="sm">
              This action is so important that you are required to confirm it with a modal. Please
              click one of these buttons to proceed.
            </Text>
          ),
          onConfirm: () =>
            modals.openConfirmModal({
              title: 'This is modal at second layer',
              labels: { confirm: 'Close modal', cancel: 'Back' },
              closeOnConfirm: false,
              children: (
                <Text size="sm">
                  When this modal is closed modals state will revert to first modal
                </Text>
              ),
              onConfirm: modals.closeAll,
            }),
        })
      }
    >
      Open multiple steps modal
    </Button>
  );
}
`};var m=e.i(841209);let u={type:"code",centered:!0,component:function(){return(0,o.jsx)(n.Button,{onClick:()=>{i.modals.open({title:"Subscribe to newsletter",children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.TextInput,{label:"Your email",placeholder:"Your email","data-autofocus":!0}),(0,o.jsx)(n.Button,{fullWidth:!0,onClick:()=>i.modals.closeAll(),mt:"md",children:"Submit"})]})})},children:"Open content modal"})},code:`
import { TextInput, Button } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  return (
    <Button
      onClick={() => {
        modals.open({
          title: 'Subscribe to newsletter',
          children: (
            <>
              <TextInput label="Your email" placeholder="Your email" data-autofocus />
              <Button fullWidth onClick={() => modals.closeAll()} mt="md">
                Submit
              </Button>
            </>
          ),
        });
      }}
    >
      Open content modal
    </Button>
  );
}
`},h={type:"code",centered:!0,component:function(){return(0,o.jsx)(n.Button,{onClick:()=>i.modals.openConfirmModal({modalId:"test-id",title:"Please confirm your action",size:"sm",withCloseButton:!1,children:(0,o.jsx)(a.Text,{size:"sm",children:"This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."}),onCancel:()=>l.notifications.show({title:"Canceled",message:"Confirm modal was canceled",color:"gray"}),onConfirm:()=>l.notifications.show({title:"Confirmed",message:"Confirm modal was confirmed",color:"teal"})}),children:"Open confirm modal"})},code:`
import { Button, Text } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  const openModal = () => modals.openConfirmModal({
    title: 'Please confirm your action',
    size: 'sm',
    withCloseButton: false,
    children: (
      <Text size="sm">
        This action is so important that you are required to confirm it with a modal. Please click
        one of these buttons to proceed.
      </Text>
    ),
    labels: { confirm: 'Confirm', cancel: 'Cancel' },
    onCancel: () => console.log('Cancel'),
    onConfirm: () => console.log('Confirmed'),
  });

  return <Button onClick={openModal}>Open confirm modal</Button>;
}
`},p={type:"code",centered:!0,component:function(){return(0,o.jsx)(n.Button,{onClick:()=>{let e=i.modals.open({title:"Initial Modal Title",children:(0,o.jsx)(a.Text,{size:"sm",children:"This text will update after 2 seconds."})});setTimeout(()=>{i.modals.updateModal({modalId:e,title:"Updated Modal Title",children:(0,o.jsx)(a.Text,{size:"sm",children:"This is the updated content of the modal."})})},2e3)},children:"Open updating modal"})},code:`
import { Button } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  return (
    <Button
      onClick={() => {
        const modalId = modals.open({
          title: 'Initial Modal Title',
          children: <Text>This text will update in 2 seconds.</Text>,
        });

        setTimeout(() => {
          modals.updateModal({
            modalId,
            title: 'Updated Modal Title',
            children: (
              <Text size="sm" c="dimmed">
                This is the updated content of the modal.
              </Text>
            ),
          });
        }, 2000);
      }}
    >
      Open updating modal
    </Button>
  );
}
`},f={type:"code",centered:!0,component:function(){return(0,o.jsx)(n.Button,{onClick:()=>{let e=i.modals.openContextModal({modal:"asyncDemonstration",title:"Processing...",closeOnEscape:!1,closeOnClickOutside:!1,closeButtonProps:{disabled:!0},innerProps:{modalBody:"You cannot close this modal until 2 seconds have passed.",loading:!0}});setTimeout(()=>{i.modals.updateContextModal({modalId:e,title:"Processing Complete!",closeOnEscape:!0,closeOnClickOutside:!0,closeButtonProps:{disabled:!1},innerProps:{modalBody:"You can now close the modal.",loading:!1}})},2e3)},children:"Open updating context modal"})},code:`
import { Button, Text, Stack, Center, Loader } from '@mantine/core';
import { modals, ContextModalProps, ModalsProvider } from '@mantine/modals';
import { CheckIcon } from '@phosphor-icons/react';

const TestModal = ({
  context,
  id,
  innerProps,
}: ContextModalProps<{ modalBody: string, loading: boolean }>) => (
  <>
    <Stack>
      <Text size="sm">{innerProps.modalBody}</Text>
      <Center>
        {innerProps.loading ? (
          <Loader size={32}/>
        ): (
          <CheckIcon size={23} color="var(--mantine-color-teal-6)" />
        )}
      </Center>
    </Stack>
    <Button fullWidth mt="md" disabled={innerProps.loading} onClick={() => context.closeModal(id)}>
      Close modal
    </Button>
  </>
);

function Demo() {
  return (
    <ModalsProvider
      modals={{ demonstration: TestModal /* ...other modals */ }}
    >
      <Button
        onClick={() => {
          const modalId = modals.openContextModal({
            modal: 'asyncDemonstration',
            title: 'Processing...',
            closeOnEscape: false,
            closeOnClickOutside: false,
            closeButtonProps:{ disabled:true },
            innerProps: {
              modalBody:
                'You cannot close this modal until 2 seconds have passed.',
              loading: true,
            },
          });

          setTimeout(() => {
            modals.updateContextModal({
              modalId,
              title: "Processing Complete!",
              closeOnEscape: true,
              closeOnClickOutside: true,
              closeButtonProps:{ disabled: false },
              innerProps: {
                modalBody:
                  'You can now close the modal.',
                loading: false,
              },
            })
          }, 2000);
        }}
      >
        Open updating context modal
      </Button>
    </ModalsProvider>
  );
}
`};var b=(0,t.__exportAll)({confirm:()=>r,confirmCustomize:()=>c,content:()=>u,context:()=>s,modalProps:()=>h,multipleSteps:()=>d,updateContextModal:()=>f,updateModal:()=>p});e.s(["ModalsDemos",0,b],926923)},504176,e=>{"use strict";var t=e.i(391398),n=e.i(38856),a=e.i(953177),o=e.i(491607),l=e.i(341921),i=e.i(574280),r=e.i(14625),s=e.i(926923),c=e.i(241111),d=e.i(975073),m=e.i(696812);e.i(603441);var u=e.i(62558);e.i(457450);var h=e.i(418026);let p=(0,u.Layout)(h.MDX_DATA.Changelog7150);function f(e){let u={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.useMDXComponents)(),...e.components},{Demo:h,SponsorButton:p}=u;return h||b("Demo",!0),p||b("SponsorButton",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(u.h2,{id:"support-mantine-development",children:"Support Mantine development"}),"\n",(0,t.jsxs)(u.p,{children:["You can now sponsor Mantine development with ",(0,t.jsx)(u.a,{href:"https://opencollective.com/mantinedev",children:"OpenCollective"}),".\nAll funds are used to improve Mantine and create new features and components."]}),"\n",(0,t.jsx)(p,{}),"\n",(0,t.jsx)(u.h2,{id:"use-radial-move-hook",children:"use-radial-move hook"}),"\n",(0,t.jsxs)(u.p,{children:["New ",(0,t.jsx)(u.a,{href:"/hooks/use-radial-move",children:"use-radial-move"})," hook can be used to create custom radial sliders:"]}),"\n",(0,t.jsx)(h,{data:m.UseRadialMoveDemos.usage}),"\n",(0,t.jsx)(u.h2,{id:"barchart-color-based-on-value",children:"BarChart color based on value"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.a,{href:"/charts/bar-chart",children:"BarChart"})," component now supports ",(0,t.jsx)(u.code,{children:"getBarColor"})," prop to assign color based on value.\n",(0,t.jsx)(u.code,{children:"getBarColor"})," function is called with two arguments: value and series object. It should return a color\nstring (theme color reference or any valid CSS color value)."]}),"\n",(0,t.jsx)(h,{data:o.BarChartDemos.getBarColor}),"\n",(0,t.jsx)(u.h2,{id:"buttongroupsection-and-actionicongroupsection",children:"Button.GroupSection and ActionIcon.GroupSection"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.code,{children:"ActionIcon.GroupSection"})," and ",(0,t.jsx)(u.code,{children:"Button.GroupSection"})," are new components that\ncan be used in ",(0,t.jsx)(u.code,{children:"ActionIcon.Group"}),"/",(0,t.jsx)(u.code,{children:"Button.Group"})," to create sections that are\nnot ",(0,t.jsx)(u.code,{children:"ActionIcon"}),"/",(0,t.jsx)(u.code,{children:"Button"})," components:"]}),"\n",(0,t.jsx)(h,{data:a.ActionIconDemos.groupSection}),"\n",(0,t.jsx)(u.h2,{id:"table-vertical-variant",children:"Table vertical variant"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.a,{href:"/core/table",children:"Table"})," component now support ",(0,t.jsx)(u.code,{children:'variant="vertical"'}),":"]}),"\n",(0,t.jsx)(h,{data:c.TableDemos.vertical}),"\n",(0,t.jsx)(u.h2,{id:"table-tabular-numbers",children:"Table tabular numbers"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.a,{href:"/core/table",children:"Table"})," component now supports ",(0,t.jsx)(u.code,{children:"tabularNums"})," prop to render numbers in tabular style. It sets\n",(0,t.jsx)(u.code,{children:"font-variant-numeric: tabular-nums"})," which makes numbers to have equal width.\nThis is useful when you have columns with numbers and you want them to be aligned:"]}),"\n",(0,t.jsx)(h,{data:c.TableDemos.tabularNums}),"\n",(0,t.jsx)(u.h2,{id:"update-function-in-modals-manager",children:"Update function in modals manager"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.a,{href:"/x/modals",children:"Modals manager"})," now supports ",(0,t.jsx)(u.code,{children:"modals.updateModal"})," and ",(0,t.jsx)(u.code,{children:"modals.updateContextModal"}),"\nfunction to update modal after it was opened:"]}),"\n",(0,t.jsx)(h,{data:s.ModalsDemos.updateModal}),"\n",(0,t.jsx)(u.h2,{id:"useform-submitting-state",children:"useForm submitting state"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.a,{href:"/form/use-form",children:"use-form"})," hook now supports ",(0,t.jsx)(u.code,{children:"form.submitting"})," field\nand ",(0,t.jsx)(u.code,{children:"form.setSubmitting"})," function to track form submission state."]}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.code,{children:"form.submitting"})," field will be set to ",(0,t.jsx)(u.code,{children:"true"})," if function passed to\n",(0,t.jsx)(u.code,{children:"form.onSubmit"})," returns a promise. After the promise is resolved or rejected,\n",(0,t.jsx)(u.code,{children:"form.submitting"})," will be set to ",(0,t.jsx)(u.code,{children:"false"}),":"]}),"\n",(0,t.jsx)(h,{data:i.FormDemos.submitting}),"\n",(0,t.jsxs)(u.p,{children:["You can also manually set ",(0,t.jsx)(u.code,{children:"form.submitting"})," to ",(0,t.jsx)(u.code,{children:"true"})," or ",(0,t.jsx)(u.code,{children:"false"}),":"]}),"\n",(0,t.jsx)(u.pre,{children:(0,t.jsx)(u.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({ mode: 'uncontrolled' });\nform.submitting; // -> false\n\nform.setSubmitting(true);\nform.submitting; // -> true\n\nform.setSubmitting(false);\nform.submitting; // -> false\n"})}),"\n",(0,t.jsx)(u.h2,{id:"useform-onsubmitpreventdefault-option",children:"useForm onSubmitPreventDefault option"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.a,{href:"/form/use-form",children:"use-form"})," hook now supports ",(0,t.jsx)(u.code,{children:"onSubmitPreventDefault"})," option.\nThis option is useful if you want to integrate ",(0,t.jsx)(u.code,{children:"useForm"})," hook with ",(0,t.jsx)(u.a,{href:"https://github.com/mantinedev/mantine/issues/7142",children:"server actions"}),".\nBy default, ",(0,t.jsx)(u.code,{children:"event.preventDefault()"})," is called on the form ",(0,t.jsx)(u.code,{children:"onSubmit"})," handler.\nIf you want to change this behavior, you can pass ",(0,t.jsx)(u.code,{children:"onSubmitPreventDefault"})," option\nto ",(0,t.jsx)(u.code,{children:"useForm"})," hook. It can have the following values:"]}),"\n",(0,t.jsxs)(u.ul,{children:["\n",(0,t.jsxs)(u.li,{children:[(0,t.jsx)(u.code,{children:"always"})," (default) - always call ",(0,t.jsx)(u.code,{children:"event.preventDefault()"})]}),"\n",(0,t.jsxs)(u.li,{children:[(0,t.jsx)(u.code,{children:"never"})," - never call ",(0,t.jsx)(u.code,{children:"event.preventDefault()"})]}),"\n",(0,t.jsxs)(u.li,{children:[(0,t.jsx)(u.code,{children:"validation-failed"})," - call ",(0,t.jsx)(u.code,{children:"event.preventDefault()"})," only if validation failed"]}),"\n"]}),"\n",(0,t.jsx)(u.pre,{children:(0,t.jsx)(u.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  onSubmitPreventDefault: 'never',\n});\n"})}),"\n",(0,t.jsx)(u.h2,{id:"subtle-richtexteditor-variant",children:"Subtle RichTextEditor variant"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.a,{href:"/x/tiptap",children:"RichTextEditor"})," component now supports ",(0,t.jsx)(u.code,{children:"subtle"})," variant:"]}),"\n",(0,t.jsx)(h,{data:d.TipTapDemos.subtleVariant}),"\n",(0,t.jsx)(u.h2,{id:"onexittransitionend-and-onentertransitionend",children:"onExitTransitionEnd and onEnterTransitionEnd"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.a,{href:"/core/modal",children:"Modal"})," and ",(0,t.jsx)(u.a,{href:"/core/drawer",children:"Drawer"})," components now support ",(0,t.jsx)(u.code,{children:"onExitTransitionEnd"})," and ",(0,t.jsx)(u.code,{children:"onEnterTransitionEnd"})," props,\nwhich can be used to run code after exit/enter transition is finished. For example, this is useful when you want to clear\ndata after modal is closed:"]}),"\n",(0,t.jsx)(h,{data:r.ModalDemos.transitionEnd}),"\n",(0,t.jsx)(u.h2,{id:"week-numbers-in-datepicker",children:"Week numbers in DatePicker"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.a,{href:"/dates/date-picker",children:"DatePicker"})," and other components based on Calendar component now support ",(0,t.jsx)(u.code,{children:"withWeekNumbers"})," prop to display week numbers:"]}),"\n",(0,t.jsx)(h,{data:l.DatePickerDemos.withWeekNumbers}),"\n",(0,t.jsx)(u.h2,{id:"new-demo-barchart-with-overlay",children:"New demo: BarChart with overlay"}),"\n",(0,t.jsx)(h,{data:o.BarChartDemos.overlay}),"\n",(0,t.jsx)(u.h2,{id:"variants-types-augmentation",children:"Variants types augmentation"}),"\n",(0,t.jsxs)(u.p,{children:[(0,t.jsx)(u.a,{href:"/styles/variants-sizes#custom-variants-types",children:"Custom variants"})," types augmentation guide was added to the documentation."]}),"\n",(0,t.jsxs)(u.p,{children:["Example of adding custom variant type to ",(0,t.jsx)(u.a,{href:"/core/button",children:"Button"})," component:"]}),"\n",(0,t.jsx)(u.pre,{children:(0,t.jsx)(u.code,{className:"language-tsx",children:"import { ButtonVariant, MantineSize } from '@mantine/core';\n\ntype ExtendedButtonVariant = ButtonVariant | 'contrast' | 'radial-gradient';\n\ndeclare module '@mantine/core' {\n  export interface ButtonProps {\n    variant?: ExtendedButtonVariant;\n  }\n}\n"})}),"\n",(0,t.jsx)(u.h2,{id:"help-center-updates",children:"Help Center updates"}),"\n",(0,t.jsxs)(u.ul,{children:["\n",(0,t.jsxs)(u.li,{children:[(0,t.jsx)(u.a,{href:"https://help.mantine.dev/q/templates-usage",children:"How to use Mantine template on GitHub?"})," and ",(0,t.jsx)(u.a,{href:"https://help.mantine.dev/q/submit-template",children:"How can I submit a template to Mantine documentation?"})," pages were moved from the documentation to Help Center"]}),"\n",(0,t.jsxs)(u.li,{children:[(0,t.jsx)(u.a,{href:"https://help.mantine.dev/q/how-that-thing-is-done",children:"How that thing is done on mantine.dev website?"})," question"]}),"\n",(0,t.jsxs)(u.li,{children:[(0,t.jsx)(u.a,{href:"https://help.mantine.dev/q/ten-shades-per-color",children:"Why is it required to have 10 shades per color?"})," question"]}),"\n",(0,t.jsxs)(u.li,{children:[(0,t.jsx)(u.a,{href:"https://help.mantine.dev/q/color-scheme-flickering",children:"Why I see color scheme flickering on page load?"})," question"]}),"\n",(0,t.jsxs)(u.li,{children:[(0,t.jsx)(u.a,{href:"https://help.mantine.dev/q/portals-testing",children:"How can I test Modal/Drawer/Popover components?"})," question"]}),"\n"]})]})}function b(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(p,{...e,children:(0,t.jsx)(f,{...e})})}])},291147,(e,t,n)=>{let a="/changelog/7-15-0";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(504176)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);