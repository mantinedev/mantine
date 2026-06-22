(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,o)=>{let n={};for(var a in e)t(n,a,{get:e[a],enumerable:!0});return o||t(n,Symbol.toStringTag,{value:"Module"}),n}])},257177,e=>{"use strict";var t=e.i(433512),o=e.i(481178),n=e.i(317477),a=e.i(44091),l=e.i(391466),i=e.i(956449),s=e.i(232471),r={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},c=e.i(391398);let d=(0,o.createVarsResolver)((e,{radius:o,color:a,gradient:l,variant:i,size:s,autoContrast:r,circle:c})=>{let d=e.variantColorResolver({color:a||e.primaryColor,theme:e,gradient:l,variant:i||"filled",autoContrast:r});return{root:{"--badge-height":(0,t.getSize)(s,"badge-height"),"--badge-padding-x":(0,t.getSize)(s,"badge-padding-x"),"--badge-fz":(0,t.getSize)(s,"badge-fz"),"--badge-radius":c||void 0===o?void 0:(0,t.getRadius)(o),"--badge-bg":a||i?d.background:void 0,"--badge-color":a||i?d.color:void 0,"--badge-bd":a||i?d.border:void 0,"--badge-dot-color":"dot"===i?(0,n.getThemeColor)(a,e):void 0}}}),u=(0,i.polymorphicFactory)(e=>{let t=(0,a.useProps)("Badge",null,e),{classNames:o,className:n,style:i,styles:u,unstyled:p,vars:m,radius:f,color:h,gradient:x,leftSection:M,rightSection:j,children:g,variant:y,fullWidth:v,autoContrast:C,circle:B,mod:k,attributes:b,...T}=t,w=(0,l.useStyles)({name:"Badge",props:t,classes:r,className:n,style:i,classNames:o,styles:u,unstyled:p,attributes:b,vars:m,varsResolver:d});return(0,c.jsxs)(s.Box,{variant:y,mod:[{block:v,circle:B,"with-right-section":!!j,"with-left-section":!!M},k],...w("root",{variant:y}),...T,children:[M&&(0,c.jsx)("span",{...w("section"),"data-position":"left",children:M}),(0,c.jsx)("span",{...w("label"),children:g}),j&&(0,c.jsx)("span",{...w("section"),"data-position":"right",children:j})]})});u.classes=r,u.varsResolver=d,u.displayName="@mantine/core/Badge",e.s(["Badge",0,u],257177)},123895,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20a108,108,0,0,0,0,216c22.27,0,45.69-6.73,62.64-18a12,12,0,1,0-13.29-20c-13,8.63-31.89,14-49.35,14a84,84,0,1,1,84-84c0,9.29-1.67,17.08-4.69,21.95-2.64,4.24-6,6.05-11.31,6.05s-8.67-1.81-11.31-6.05c-3-4.87-4.69-12.66-4.69-21.95V88a12,12,0,0,0-23.49-3.46,52,52,0,1,0,8.86,79.57C172.3,174.3,182.81,180,196,180c24.67,0,40-19.92,40-52A108.12,108.12,0,0,0,128,20Zm0,136a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232,128c0,.51,0,1,0,1.52-.34,14.26-5.63,30.48-28,30.48-23.14,0-28-17.4-28-32V88a8,8,0,0,0-8.53-8A8.17,8.17,0,0,0,160,88.27v4a48,48,0,1,0,6.73,64.05,40.19,40.19,0,0,0,3.38,5C175.48,168,185.71,176,204,176a54.81,54.81,0,0,0,9.22-.75,4,4,0,0,1,4.09,6A104.05,104.05,0,0,1,125.91,232C71.13,230.9,26.2,186.86,24.08,132.11A104,104,0,1,1,232,128ZM96,128a32,32,0,1,0,32-32A32,32,0,0,0,96,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26a102,102,0,0,0,0,204c21.13,0,43.31-6.35,59.32-17a6,6,0,0,0-6.65-10c-13.9,9.25-34.09,15-52.67,15a90,90,0,1,1,90-90c0,29.58-13.78,34-22,34s-22-4.42-22-34V88a6,6,0,0,0-12,0v9a46,46,0,1,0,4.34,56.32C171.76,166.6,182,174,196,174c21.29,0,34-17.2,34-46A102.12,102.12,0,0,0,128,26Zm0,136a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28a100,100,0,0,0,0,200c20.76,0,42.52-6.23,58.21-16.66a4,4,0,1,0-4.43-6.67C167.35,214.27,147.24,220,128,220a92,92,0,1,1,92-92c0,31.32-15,36-24,36s-24-4.68-24-36V88a4,4,0,0,0-8,0v14.75a44,44,0,1,0,2.82,45.94C171.46,163.58,181.66,172,196,172c20,0,32-16.45,32-44A100.11,100.11,0,0,0,128,28Zm0,136a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),a=t.forwardRef((e,a)=>t.createElement(o.default,{ref:a,...e,weights:n}));a.displayName="AtIcon",e.s(["AtIcon",0,a],123895)},541772,e=>{"use strict";var t=e.i(191788);e.s(["useDisclosure",0,function(e=!1,o={}){let[n,a]=(0,t.useState)(e),l=(0,t.useCallback)(()=>{a(e=>e||(o.onOpen?.(),!0))},[o.onOpen]),i=(0,t.useCallback)(()=>{a(e=>e?(o.onClose?.(),!1):e)},[o.onClose]);return[n,{open:l,close:i,toggle:(0,t.useCallback)(()=>{n?i():l()},[i,l,n]),set:a}]}])},477777,430731,637245,225147,811590,426611,32044,446817,e=>{"use strict";var t=e.i(232471);let[o,n]=(0,e.i(386179).createSafeContext)("ModalBase component was not found in tree");var a=e.i(191788),l=e.i(56206),i=e.i(391398);function s({className:e,...o}){let r,c=(r=n(),(0,a.useEffect)(()=>(r.setBodyMounted(!0),()=>r.setBodyMounted(!1)),[]),r.getBodyId()),d=n();return(0,i.jsx)(t.Box,{id:c,className:(0,l.default)({m_5df29311:!d.unstyled},e),...o})}s.displayName="@mantine/core/ModalBaseBody",e.s(["ModalBaseBody",0,s],477777);var r=e.i(802046);function c({className:e,onClick:t,...o}){let a=n();return(0,i.jsx)(r.CloseButton,{...o,onClick:e=>{a.onClose(),t?.(e)},className:(0,l.default)({m_606cb269:!a.unstyled},e),unstyled:a.unstyled})}c.displayName="@mantine/core/ModalBaseCloseButton",e.s(["ModalBaseCloseButton",0,c],430731);var d=e.i(470743),u=e.i(34515),p=e.i(22630);function m({transitionProps:e,className:t,innerProps:o,onKeyDown:a,style:s,ref:r,...c}){let f=n();return(0,i.jsx)(u.Transition,{mounted:f.opened,transition:"pop",...f.transitionProps,onExited:()=>{f.onExitTransitionEnd?.(),f.transitionProps?.onExited?.()},onEntered:()=>{f.onEnterTransitionEnd?.(),f.transitionProps?.onEntered?.()},...e,children:e=>(0,i.jsx)("div",{...o,className:(0,l.default)({m_60c222c7:!f.unstyled},o.className),children:(0,i.jsx)(p.FocusTrap,{active:f.opened&&f.trapFocus,innerRef:r,children:(0,i.jsx)(d.Paper,{...c,component:"section",role:"dialog",tabIndex:-1,"aria-modal":!0,"aria-describedby":f.bodyMounted?f.getBodyId():void 0,"aria-labelledby":f.titleMounted?f.getTitleId():void 0,style:[s,e],className:(0,l.default)({m_fd1ab0aa:!f.unstyled},t),unstyled:f.unstyled,children:c.children})})})})}function f({className:e,...o}){let a=n();return(0,i.jsx)(t.Box,{component:"header",className:(0,l.default)({m_b5489c3c:!a.unstyled},e),...o})}m.displayName="@mantine/core/ModalBaseContent",e.s(["ModalBaseContent",0,m],637245),e.s(["NativeScrollArea",0,function({children:e}){return(0,i.jsx)(i.Fragment,{children:e})}],225147),f.displayName="@mantine/core/ModalBaseHeader",e.s(["ModalBaseHeader",0,f],811590);var h=e.i(476273);let x={duration:200,timingFunction:"ease",transition:"fade"};function M({onClick:e,transitionProps:t,style:o,visible:a,...l}){let s,r=n(),c=(s=n(),{...x,...s.transitionProps,...t});return(0,i.jsx)(u.Transition,{mounted:void 0!==a?a:r.opened,...c,transition:"fade",children:t=>(0,i.jsx)(h.Overlay,{fixed:!0,style:[o,t],zIndex:r.zIndex,unstyled:r.unstyled,onClick:t=>{e?.(t),r.closeOnClickOutside&&r.onClose()},...l})})}M.displayName="@mantine/core/ModalBaseOverlay",e.s(["ModalBaseOverlay",0,M],426611);var j=e.i(749218),g=e.i(433512),y=e.i(164483),v=e.i(779861),C=e.i(484108),B=e.i(107315),k=e.i(133613),b=e.i(865823);function T({keepMounted:e,opened:n,onClose:l,id:s,transitionProps:r,onExitTransitionEnd:c,onEnterTransitionEnd:d,trapFocus:u,closeOnEscape:p,returnFocus:m,closeOnClickOutside:f,withinPortal:h,portalProps:x,lockScroll:M,children:w,zIndex:D,shadow:F,padding:A,__vars:I,unstyled:S,removeScrollProps:O,...E}){let{_id:P,titleMounted:_,bodyMounted:Z,shouldLockScroll:N,setTitleMounted:R,setBodyMounted:z}=function({id:e,transitionProps:t,opened:o,trapFocus:n,closeOnEscape:l,onClose:i,returnFocus:s}){let r=(0,B.useId)(e),[c,d]=(0,a.useState)(!1),[u,p]=(0,a.useState)(!1),m=function({opened:e,transitionDuration:t}){let[o,n]=(0,a.useState)(e),l=(0,a.useRef)(-1),i=(0,v.useReducedMotion)()?0:t;return(0,a.useEffect)(()=>(e?(n(!0),window.clearTimeout(l.current)):0===i?n(!1):l.current=window.setTimeout(()=>n(!1),i),()=>window.clearTimeout(l.current)),[e,i]),o}({opened:o,transitionDuration:"number"==typeof t?.duration?t?.duration:200});return(0,k.useWindowEvent)("keydown",e=>{"Escape"===e.key&&l&&!e.isComposing&&o&&e.target?.getAttribute("data-mantine-stop-propagation")!=="true"&&i()},{capture:!0}),(0,C.useFocusReturn)({opened:o,shouldReturnFocus:n&&s}),{_id:r,titleMounted:c,bodyMounted:u,shouldLockScroll:m,setTitleMounted:d,setBodyMounted:p}}({id:s,transitionProps:r,opened:n,trapFocus:u,closeOnEscape:p,onClose:l,returnFocus:m}),{key:G,...H}=O||{};return(0,i.jsx)(y.OptionalPortal,{...x,withinPortal:h,children:(0,i.jsx)(o,{value:{opened:n,onClose:l,closeOnClickOutside:f,onExitTransitionEnd:c,onEnterTransitionEnd:d,transitionProps:{...r,keepMounted:e},getTitleId:()=>`${P}-title`,getBodyId:()=>`${P}-body`,titleMounted:_,bodyMounted:Z,setTitleMounted:R,setBodyMounted:z,trapFocus:u,closeOnEscape:p,zIndex:D,unstyled:S},children:(0,i.jsx)(b.RemoveScroll,{enabled:N&&M,...H,children:(0,i.jsx)(t.Box,{...E,id:P,__vars:{...I,"--mb-z-index":(D||(0,j.getDefaultZIndex)("modal")).toString(),"--mb-shadow":(0,g.getShadow)(F),"--mb-padding":(0,g.getSpacing)(A)},children:w})},G)})})}function w({className:e,...o}){let s,r=(s=n(),(0,a.useEffect)(()=>(s.setTitleMounted(!0),()=>s.setTitleMounted(!1)),[]),s.getTitleId()),c=n();return(0,i.jsx)(t.Box,{component:"h2",className:(0,l.default)({m_615af6c9:!c.unstyled},e),id:r,...o})}T.displayName="@mantine/core/ModalBase",e.s(["ModalBase",0,T],32044),w.displayName="@mantine/core/ModalBaseTitle",e.s(["ModalBaseTitle",0,w],446817)},424302,e=>{"use strict";var t=e.i(749218),o=e.i(44091),n=e.i(275519),a={root:"m_9df02822",content:"m_54c44539",inner:"m_1f958f16",header:"m_d0e2b9cd"},l=e.i(477777);let[i,s]=(0,e.i(386179).createSafeContext)("Modal component was not found in tree");var r=e.i(391398);let c=(0,n.factory)(e=>{let{classNames:t,className:n,style:a,styles:i,vars:c,...d}=(0,o.useProps)("ModalBody",null,e);return(0,r.jsx)(l.ModalBaseBody,{...s().getStyles("body",{classNames:t,style:a,styles:i,className:n}),...d})});c.classes=a,c.displayName="@mantine/core/ModalBody";var d=e.i(430731);let u=(0,n.factory)(e=>{let{classNames:t,className:n,style:a,styles:l,vars:i,...c}=(0,o.useProps)("ModalCloseButton",null,e);return(0,r.jsx)(d.ModalBaseCloseButton,{...s().getStyles("close",{classNames:t,style:a,styles:l,className:n}),...c})});u.classes=a,u.displayName="@mantine/core/ModalCloseButton";var p=e.i(779177),m=e.i(637245),f=e.i(225147);let h=(0,n.factory)(e=>{let{classNames:t,className:n,style:a,styles:l,vars:i,children:c,__hidden:d,...u}=(0,o.useProps)("ModalContent",null,e),h=s(),x=h.scrollAreaComponent||f.NativeScrollArea;return(0,r.jsx)(m.ModalBaseContent,{...h.getStyles("content",{className:n,style:a,styles:l,classNames:t}),innerProps:h.getStyles("inner",{className:n,style:a,styles:l,classNames:t}),"data-full-screen":h.fullScreen||void 0,"data-modal-content":!0,"data-hidden":d||void 0,...u,children:(0,r.jsx)(x,{style:{maxHeight:h.fullScreen?"100dvh":`calc(100dvh - (${(0,p.rem)(h.yOffset)} * 2))`},children:c})})});h.classes=a,h.displayName="@mantine/core/ModalContent";var x=e.i(811590);let M=(0,n.factory)(e=>{let{classNames:t,className:n,style:a,styles:l,vars:i,...c}=(0,o.useProps)("ModalHeader",null,e);return(0,r.jsx)(x.ModalBaseHeader,{...s().getStyles("header",{classNames:t,style:a,styles:l,className:n}),...c})});M.classes=a,M.displayName="@mantine/core/ModalHeader";var j=e.i(426611);let g=(0,n.factory)(e=>{let{classNames:t,className:n,style:a,styles:l,vars:i,...c}=(0,o.useProps)("ModalOverlay",null,e);return(0,r.jsx)(j.ModalBaseOverlay,{...s().getStyles("overlay",{classNames:t,style:a,styles:l,className:n}),...c})});g.classes=a,g.displayName="@mantine/core/ModalOverlay";var y=e.i(433512),v=e.i(481178),C=e.i(391466),B=e.i(19300),k=e.i(32044);let b={__staticSelector:"Modal",closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:(0,t.getDefaultZIndex)("modal"),transitionProps:{duration:200,transition:"fade-down"},yOffset:"5dvh"},T=(0,v.createVarsResolver)((e,{radius:t,size:o,yOffset:n,xOffset:a})=>({root:{"--modal-radius":void 0===t?void 0:(0,y.getRadius)(t),"--modal-size":(0,y.getSize)(o,"modal-size"),"--modal-y-offset":(0,p.rem)(n),"--modal-x-offset":(0,p.rem)(a)}})),w=(0,n.factory)(e=>{let t=(0,o.useProps)("ModalRoot",b,e),{classNames:n,className:l,style:s,styles:c,unstyled:d,vars:u,yOffset:p,scrollAreaComponent:m,radius:f,fullScreen:h,centered:x,xOffset:M,__staticSelector:j,attributes:g,...y}=t,v=(0,C.useStyles)({name:j,classes:a,props:t,className:l,style:s,classNames:n,styles:c,unstyled:d,attributes:g,vars:u,varsResolver:T});return(0,r.jsx)(i,{value:{yOffset:p,scrollAreaComponent:m,getStyles:v,fullScreen:h},children:(0,r.jsx)(k.ModalBase,{...v("root"),"data-full-screen":h||void 0,"data-centered":x||void 0,"data-offset-scrollbars":m===B.ScrollArea.Autosize||void 0,unstyled:d,...y})})});w.classes=a,w.varsResolver=T,w.displayName="@mantine/core/ModalRoot";var D=e.i(191788);let F=(0,D.createContext)(null);function A({children:e}){let[o,n]=(0,D.useState)([]),[a,l]=(0,D.useState)((0,t.getDefaultZIndex)("modal"));return(0,r.jsx)(F,{value:{stack:o,addModal:(e,t)=>{n(t=>[...new Set([...t,e])]),l(e=>"number"==typeof t&&"number"==typeof e?Math.max(e,t):e)},removeModal:e=>n(t=>t.filter(t=>t!==e)),getZIndex:e=>`calc(${a} + ${o.indexOf(e)} + 1)`,currentId:o[o.length-1],maxZIndex:a},children:e})}A.displayName="@mantine/core/ModalStack";var I=e.i(446817);let S=(0,n.factory)(e=>{let{classNames:t,className:n,style:a,styles:l,vars:i,...c}=(0,o.useProps)("ModalTitle",null,e);return(0,r.jsx)(I.ModalBaseTitle,{...s().getStyles("title",{classNames:t,style:a,styles:l,className:n}),...c})});S.classes=a,S.displayName="@mantine/core/ModalTitle";let O={closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:(0,t.getDefaultZIndex)("modal"),transitionProps:{duration:200,transition:"fade-down"},withOverlay:!0,withCloseButton:!0},E=(0,n.factory)(e=>{let{title:n,withOverlay:a,overlayProps:l,withCloseButton:i,closeButtonProps:s,children:d,radius:p,opened:m,stackId:f,zIndex:x,...j}=(0,o.useProps)("Modal",O,e),y=(0,D.use)(F),v=!!n||i,C=y&&f?{closeOnEscape:y.currentId===f,trapFocus:y.currentId===f,zIndex:y.getZIndex(f)}:{},B=!1!==a&&(f&&y?y.currentId===f:m);return(0,D.useEffect)(()=>{y&&f&&(m?y.addModal(f,x||(0,t.getDefaultZIndex)("modal")):y.removeModal(f))},[m,f,x]),(0,r.jsxs)(w,{radius:p,opened:m,zIndex:y&&f?y.getZIndex(f):x,...j,...C,children:[a&&(0,r.jsx)(g,{visible:B,transitionProps:y&&f?{duration:0}:void 0,...l}),(0,r.jsxs)(h,{radius:p,__hidden:!!y&&!!f&&!!m&&f!==y.currentId,children:[v&&(0,r.jsxs)(M,{children:[n&&(0,r.jsx)(S,{children:n}),i&&(0,r.jsx)(u,{...s})]}),(0,r.jsx)(c,{children:d})]})]})});E.classes=a,E.displayName="@mantine/core/Modal",E.Root=w,E.Overlay=g,E.Content=h,E.Body=c,E.Header=M,E.Title=S,E.CloseButton=u,E.Stack=A,e.s(["Modal",0,E],424302)},692385,e=>{"use strict";var t=e.i(852361),o=e.i(191788);let n={min:-1/0,max:1/0};e.s(["useCounter",0,function(e=0,a){let{min:l,max:i,step:s=1}={...n,...a},r=Math.abs(s),[c,d]=(0,o.useState)((0,t.clamp)(e,l,i));return[c,{increment:(0,o.useCallback)(()=>d(e=>(0,t.clamp)(e+r,l,i)),[l,i,r]),decrement:(0,o.useCallback)(()=>d(e=>(0,t.clamp)(e-r,l,i)),[l,i,r]),set:(0,o.useCallback)(e=>d((0,t.clamp)(e,l,i)),[l,i]),reset:(0,o.useCallback)(()=>d((0,t.clamp)(e,l,i)),[e,l,i])}]}])},299593,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M164.24,100.24,136.48,128l27.76,27.76a6,6,0,1,1-8.48,8.48L128,136.48l-27.76,27.76a6,6,0,0,1-8.48-8.48L119.52,128,91.76,100.24a6,6,0,0,1,8.48-8.48L128,119.52l27.76-27.76a6,6,0,0,1,8.48,8.48ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M162.83,98.83,133.66,128l29.17,29.17a4,4,0,0,1-5.66,5.66L128,133.66,98.83,162.83a4,4,0,0,1-5.66-5.66L122.34,128,93.17,98.83a4,4,0,0,1,5.66-5.66L128,122.34l29.17-29.17a4,4,0,1,1,5.66,5.66ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"}))]]),a=t.forwardRef((e,a)=>t.createElement(o.default,{ref:a,...e,weights:n}));a.displayName="XCircleIcon",e.s(["XCircleIcon",0,a],299593)},323121,e=>{"use strict";var t=e.i(191788);function o(e){let o=e.reduce((e,t)=>({...e,[t]:!1}),{}),[n,a]=(0,t.useState)(o),l=(0,t.useCallback)(e=>{a(t=>({...t,[e]:!0}))},[]),i=(0,t.useCallback)(e=>a(t=>({...t,[e]:!1})),[]),s=(0,t.useCallback)(e=>a(t=>({...t,[e]:!t[e]})),[]);return{state:n,open:l,close:i,closeAll:(0,t.useCallback)(()=>a(o),[]),toggle:s,register:(0,t.useCallback)(e=>({opened:n[e],onClose:()=>i(e),stackId:e}),[n])}}e.s(["useDrawersStack",0,o,"useModalsStack",0,o])},18584,e=>{"use strict";var t=e.i(648863),o=e.i(29260),n=e.i(485108),a=e.i(424302),l=e.i(391398),i=e.i(541772);let s={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:s}]=(0,i.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Modal,{opened:e,onClose:s,title:"Authentication",children:(0,l.jsx)(o.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},r={type:"code",code:`
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

`,centered:!0,component:function(){let[e,{open:t,close:o}]=(0,i.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Modal,{opened:e,onClose:o,withCloseButton:!1,children:"Modal without header, press escape or click on overlay to close"}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var c=e.i(191788),d=e.i(725695);let u=["xs","sm","md","lg","xl","55rem","70%","100%"],p={type:"code",component:function(){let[e,t]=(0,c.useState)(!1),[i,s]=(0,c.useState)("md"),r=u.map(e=>(0,l.jsx)(n.Button,{variant:"default",onClick:()=>{s(e),t(!0)},children:e},e));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Modal,{opened:e,onClose:()=>t(!1),title:"Introduce yourself!",size:i,children:(0,l.jsx)(o.AuthenticationForm,{noPadding:!0,noShadow:!0})}),(0,l.jsx)(d.Group,{justify:"center",children:r})]})}},m={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:s}]=(0,i.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Modal,{opened:e,onClose:s,title:"Authentication",overlayProps:{backgroundOpacity:.55,blur:3},children:(0,l.jsx)(o.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},f={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:o}]=(0,i.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Modal,{opened:e,onClose:o,title:"Header is sticky",children:Array(100).fill(0).map((e,t)=>(0,l.jsx)("p",{children:"Modal with scroll"},t))}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},h={type:"code",code:`
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
`,component:function(){let[e,t]=(0,c.useState)(!1),[o,i]=(0,c.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Modal,{opened:o,onClose:()=>i(!1),title:"Please consider this",transitionProps:{transition:"rotate-left"},children:"rotate-left transition"}),(0,l.jsx)(a.Modal,{opened:e,onClose:()=>t(!1),title:"Please consider this",transitionProps:{transition:"fade",duration:600,timingFunction:"linear"},children:"fade transition 600ms linear transition"}),(0,l.jsxs)(d.Group,{justify:"center",children:[(0,l.jsx)(n.Button,{onClick:()=>i(!0),variant:"default",children:"Rotate left transition"}),(0,l.jsx)(n.Button,{onClick:()=>t(!0),variant:"default",children:"Fade transition"})]})]})}},x={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:s}]=(0,i.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Modal,{opened:e,onClose:s,title:"Authentication",centered:!0,children:(0,l.jsx)(o.AuthenticationForm,{noPadding:!0,noShadow:!0})}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open centered Modal"})]})}};var M=e.i(883364);let j={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:s}]=(0,i.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.Modal,{opened:e,onClose:s,title:"This is a fullscreen modal",fullScreen:!0,radius:0,transitionProps:{transition:"fade",duration:200},children:[(0,l.jsx)(M.Text,{mb:"xl",children:"It takes the entire screen and does not have overlay and border-radius, you can use it small screens to save up some space. It also has fade transition by default, but you can change that with transition prop. Now here is an authentication form used in previous examples to see the difference."}),(0,l.jsx)(o.AuthenticationForm,{noPadding:!0,noShadow:!0})]}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var g=e.i(257177),y=e.i(692385);let v={type:"code",component:function(){let[e,{close:t,open:o}]=(0,i.useDisclosure)(!1),[s,{increment:r,decrement:c}]=(0,y.useCounter)(3,{min:0}),u=Array(s).fill(0).map((e,t)=>(0,l.jsxs)(g.Badge,{children:["Badge ",t]},t));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.Modal,{opened:e,onClose:t,size:"auto",title:"Modal size auto",children:[(0,l.jsx)(M.Text,{children:"Modal with size auto will fits its content"}),(0,l.jsx)(d.Group,{wrap:"nowrap",mt:"md",children:u}),(0,l.jsxs)(d.Group,{mt:"xl",children:[(0,l.jsx)(n.Button,{onClick:r,children:"Add badge"}),(0,l.jsx)(n.Button,{onClick:c,children:"Remove badge"})]})]}),(0,l.jsx)(n.Button,{variant:"default",onClick:o,children:"Open modal"})]})},centered:!0,code:`
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
`};var C=e.i(19300);let B={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:o}]=(0,i.useDisclosure)(!1),s=Array(100).fill(0).map((e,t)=>(0,l.jsx)("p",{children:"Modal with scroll"},t));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Modal,{opened:e,onClose:o,title:"Header is sticky",scrollAreaComponent:C.ScrollArea.Autosize,children:s}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},k={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:o}]=(0,i.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.Modal.Root,{opened:e,onClose:o,children:[(0,l.jsx)(a.Modal.Overlay,{}),(0,l.jsxs)(a.Modal.Content,{children:[(0,l.jsxs)(a.Modal.Header,{children:[(0,l.jsx)(a.Modal.Title,{children:"Modal title"}),(0,l.jsx)(a.Modal.CloseButton,{})]}),(0,l.jsx)(a.Modal.Body,{children:"Modal content"})]})]}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},b={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:s}]=(0,i.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Modal,{opened:e,onClose:s,title:"Authentication",yOffset:"1vh",xOffset:0,children:(0,l.jsx)(o.AuthenticationForm,{noPadding:!0,noShadow:!0})}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var T=e.i(841209);let w={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:o}]=(0,i.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.Modal,{opened:e,onClose:o,title:"Focus demo",children:[(0,l.jsx)(T.TextInput,{label:"First input",placeholder:"First input"}),(0,l.jsx)(T.TextInput,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var D=e.i(779177),F=e.i(839608);let A={type:"code",code:`
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: ${(0,D.em)(800)})');

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
`,centered:!0,component:function(){let[e,{open:t,close:o}]=(0,i.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Modal,{opened:e,onClose:o,title:"This is a fullscreen modal",fullScreen:(0,F.useMediaQuery)(`(max-width: ${(0,D.em)(800)})`),transitionProps:{transition:"fade",duration:200},children:"The Modal will be full screen only on mobile"}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var I=e.i(299593);let S={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:s}]=(0,i.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Modal,{opened:e,onClose:s,title:"Authentication",closeButtonProps:{icon:(0,l.jsx)(I.XCircleIcon,{size:20})},children:(0,l.jsx)(o.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var O=e.i(22630);let E={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:o}]=(0,i.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.Modal,{opened:e,onClose:o,title:"Focus demo",children:[(0,l.jsx)(O.FocusTrap.InitialFocus,{}),(0,l.jsx)(T.TextInput,{label:"First input",placeholder:"First input"}),(0,l.jsx)(T.TextInput,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var P=e.i(323121);let _={type:"code",code:`
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
`,centered:!0,component:function(){let e=(0,P.useModalsStack)(["delete-page","confirm-action","really-confirm-action"]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.Modal.Stack,{children:[(0,l.jsxs)(a.Modal,{...e.register("delete-page"),title:"Delete this page?",children:["Are you sure you want to delete this page? This action cannot be undone.",(0,l.jsxs)(d.Group,{mt:"lg",justify:"flex-end",children:[(0,l.jsx)(n.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,l.jsx)(n.Button,{onClick:()=>e.open("confirm-action"),color:"red",children:"Delete"})]})]}),(0,l.jsxs)(a.Modal,{...e.register("confirm-action"),title:"Confirm action",children:["Are you sure you want to perform this action? This action cannot be undone. If you are sure, press confirm button below.",(0,l.jsxs)(d.Group,{mt:"lg",justify:"flex-end",children:[(0,l.jsx)(n.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,l.jsx)(n.Button,{onClick:()=>e.open("really-confirm-action"),color:"red",children:"Confirm"})]})]}),(0,l.jsxs)(a.Modal,{...e.register("really-confirm-action"),title:"Really confirm action",children:["Jokes aside. You have confirmed this action. This is your last chance to cancel it. After you press confirm button below, action will be performed and cannot be undone. For real this time. Are you sure you want to proceed?",(0,l.jsxs)(d.Group,{mt:"lg",justify:"flex-end",children:[(0,l.jsx)(n.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,l.jsx)(n.Button,{onClick:e.closeAll,color:"red",children:"Confirm"})]})]})]}),(0,l.jsx)(n.Button,{variant:"default",onClick:()=>e.open("delete-page"),children:"Open modal"})]})}},Z={type:"code",code:`
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
`,centered:!0,component:function(){let[e,t]=(0,i.useDisclosure)(!1),[o,s]=(0,i.useDisclosure)(!1),[r,u]=(0,c.useState)({title:"",message:""});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Modal,{opened:e,onClose:()=>{t.close(),u({title:"",message:""})},transitionProps:{duration:300,exitDuration:1e3,transition:"fade-down"},title:r.title,children:r.message}),(0,l.jsx)(a.Modal,{opened:o,onClose:s.close,transitionProps:{duration:300,exitDuration:1e3,transition:"fade-down"},onExitTransitionEnd:()=>u({title:"",message:""}),title:r.title,children:r.message}),(0,l.jsxs)(d.Group,{children:[(0,l.jsx)(n.Button,{onClick:()=>{t.open(),u({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onClose"}),(0,l.jsx)(n.Button,{onClick:()=>{s.open(),u({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onExitTransitionEnd"})]})]})},defaultExpanded:!1};var N=(0,t.__exportAll)({centered:()=>x,closeIcon:()=>S,composition:()=>k,fullScreen:()=>j,fullScreenMobile:()=>A,header:()=>r,initialFocus:()=>w,initialFocusTrap:()=>E,offset:()=>b,overflow:()=>f,overlay:()=>m,scrollarea:()=>B,sizeAuto:()=>v,sizes:()=>p,stack:()=>_,transitionEnd:()=>Z,transitions:()=>h,usage:()=>s});e.s(["ModalDemos",0,N],18584)},590920,e=>{"use strict";var t=e.i(391398),o=e.i(38856),n=e.i(648863),a=e.i(232471),l=e.i(485108),i=e.i(22630),s=e.i(841209),r=e.i(541772);let c={type:"code",component:function(){let[e,{toggle:o}]=(0,r.useDisclosure)(!1);return(0,t.jsxs)(a.Box,{maw:400,mx:"auto",children:[(0,t.jsxs)(l.Button,{onClick:o,children:[e?"Deactivate":"Activate"," focus trap"]}),(0,t.jsx)(i.FocusTrap,{active:e,children:(0,t.jsxs)("div",{children:[(0,t.jsx)(s.TextInput,{mt:"sm",label:"First input",placeholder:"First input"}),(0,t.jsx)(s.TextInput,{mt:"sm",label:"Second input",placeholder:"Second input"}),(0,t.jsx)(s.TextInput,{mt:"sm",label:"Third input",placeholder:"Third input"})]})})]})},code:`
import { useDisclosure } from '@mantine/hooks';
import { FocusTrap, TextInput, Button, Box } from '@mantine/core';

function Demo() {
  const [active, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Button onClick={toggle}>{active ? 'Deactivate' : 'Activate'} focus trap</Button>

      <FocusTrap active={active}>
        <div>
          <TextInput mt="sm" label="First input" placeholder="First input" />
          <TextInput mt="sm" label="Second input" placeholder="Second input" />
          <TextInput mt="sm" label="Third input" placeholder="Third input" />
        </div>
      </FocusTrap>
    </Box>
  );
}
`},d={type:"code",component:function(){let[e,{toggle:o}]=(0,r.useDisclosure)(!1);return(0,t.jsxs)(a.Box,{maw:400,mx:"auto",children:[(0,t.jsxs)(l.Button,{onClick:o,children:[e?"Deactivate":"Activate"," focus trap"]}),(0,t.jsx)(i.FocusTrap,{active:e,children:(0,t.jsxs)("div",{children:[(0,t.jsx)(s.TextInput,{mt:"sm",label:"First input",placeholder:"First input"}),(0,t.jsx)(s.TextInput,{mt:"sm",label:"Second input",placeholder:"Second input","data-autofocus":!0}),(0,t.jsx)(s.TextInput,{mt:"sm",label:"Third input",placeholder:"Third input"})]})})]})},code:`
import { useDisclosure } from '@mantine/hooks';
import { FocusTrap, TextInput, Button, Box } from '@mantine/core';

function Demo() {
  const [active, { toggle }] = useDisclosure(false);

  return (
    <Box maw={400} mx="auto">
      <Button onClick={toggle}>{active ? 'Deactivate' : 'Activate'} focus trap</Button>

      <FocusTrap active={active}>
        <div>
          <TextInput mt="sm" label="First input" placeholder="First input" />
          <TextInput mt="sm" label="Second input" placeholder="Second input" data-autofocus />
          <TextInput mt="sm" label="Third input" placeholder="Third input" />
        </div>
      </FocusTrap>
    </Box>
  );
}
`};var u=(0,n.__exportAll)({initial:()=>d,usage:()=>c}),p=e.i(18584);e.i(603441);var m=e.i(62558);e.i(457450);var f=e.i(418026);let h=(0,m.Layout)(f.MDX_DATA.FocusTrap);function x(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.useMDXComponents)(),...e.components},{Demo:a}=n;return a||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(n.p,{children:["FocusTrap is a component implementation of the ",(0,t.jsx)(n.a,{href:"/hooks/use-focus-trap/",children:"use-focus-trap"})," hook.\nIt is used in all Mantine components that require focus trap (",(0,t.jsx)(n.a,{href:"/core/modal/",children:"Modal"}),", ",(0,t.jsx)(n.a,{href:"/dates/date-picker/",children:"DatePicker"}),", ",(0,t.jsx)(n.a,{href:"/core/popover/",children:"Popover"}),", etc.)."]}),"\n",(0,t.jsx)(a,{data:u.usage}),"\n",(0,t.jsx)(n.h2,{id:"initial-focus",children:"Initial focus"}),"\n",(0,t.jsxs)(n.p,{children:["To define the element that will receive initial focus, set the ",(0,t.jsx)(n.code,{children:"data-autofocus"})," attribute:"]}),"\n",(0,t.jsx)(a,{data:u.initial}),"\n",(0,t.jsx)(n.h2,{id:"focustrapinitialfocus",children:"FocusTrap.InitialFocus"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"FocusTrap.InitialFocus"})," is a special component that adds a visually hidden\nelement which will receive the focus when the focus trap is activated.\nOnce ",(0,t.jsx)(n.code,{children:"FocusTrap.InitialFocus"})," loses focus, it is removed from the tab order."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, it is useful if you do not want to focus any elements inside the ",(0,t.jsx)(n.a,{href:"/core/modal/",children:"Modal"})," when it is opened:"]}),"\n",(0,t.jsx)(a,{data:p.ModalDemos.initialFocusTrap}),"\n",(0,t.jsx)(n.h2,{id:"focus-trapping-logic",children:"Focus trapping logic"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Focus is trapped within the child node if the ",(0,t.jsx)(n.code,{children:"active"})," prop is ",(0,t.jsx)(n.code,{children:"true"})]}),"\n",(0,t.jsxs)(n.li,{children:["When the FocusTrap component is mounted or when the ",(0,t.jsx)(n.code,{children:"active"})," prop changes from ",(0,t.jsx)(n.code,{children:"false"})," to ",(0,t.jsx)(n.code,{children:"true"}),", the first element with the ",(0,t.jsx)(n.code,{children:"data-autofocus"})," attribute is focused"]}),"\n",(0,t.jsxs)(n.li,{children:["If there are no elements with the ",(0,t.jsx)(n.code,{children:"data-autofocus"})," attribute, then the first element that supports keyboard interaction is focused"]}),"\n",(0,t.jsxs)(n.li,{children:["If the target element does not have focusable elements or does not support ",(0,t.jsx)(n.code,{children:"ref"}),", then the focus trap will not work"]}),"\n",(0,t.jsxs)(n.li,{children:["Trap stops working when an element outside of the ",(0,t.jsx)(n.code,{children:"FocusTrap"})," child is focused"]}),"\n"]})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(h,{...e,children:(0,t.jsx)(x,{...e})})}],590920)},861194,(e,t,o)=>{let n="/core/focus-trap";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(590920)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);