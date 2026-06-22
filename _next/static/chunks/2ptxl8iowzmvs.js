(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,o)=>{let n={};for(var a in e)t(n,a,{get:e[a],enumerable:!0});return o||t(n,Symbol.toStringTag,{value:"Module"}),n}])},257177,e=>{"use strict";var t=e.i(433512),o=e.i(481178),n=e.i(317477),a=e.i(44091),l=e.i(391466),s=e.i(956449),i=e.i(232471),r={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},d=e.i(391398);let c=(0,o.createVarsResolver)((e,{radius:o,color:a,gradient:l,variant:s,size:i,autoContrast:r,circle:d})=>{let c=e.variantColorResolver({color:a||e.primaryColor,theme:e,gradient:l,variant:s||"filled",autoContrast:r});return{root:{"--badge-height":(0,t.getSize)(i,"badge-height"),"--badge-padding-x":(0,t.getSize)(i,"badge-padding-x"),"--badge-fz":(0,t.getSize)(i,"badge-fz"),"--badge-radius":d||void 0===o?void 0:(0,t.getRadius)(o),"--badge-bg":a||s?c.background:void 0,"--badge-color":a||s?c.color:void 0,"--badge-bd":a||s?c.border:void 0,"--badge-dot-color":"dot"===s?(0,n.getThemeColor)(a,e):void 0}}}),u=(0,s.polymorphicFactory)(e=>{let t=(0,a.useProps)("Badge",null,e),{classNames:o,className:n,style:s,styles:u,unstyled:m,vars:p,radius:f,color:h,gradient:x,leftSection:M,rightSection:y,children:g,variant:C,fullWidth:j,autoContrast:v,circle:B,mod:k,attributes:b,...w}=t,D=(0,l.useStyles)({name:"Badge",props:t,classes:r,className:n,style:s,classNames:o,styles:u,unstyled:m,attributes:b,vars:p,varsResolver:c});return(0,d.jsxs)(i.Box,{variant:C,mod:[{block:j,circle:B,"with-right-section":!!y,"with-left-section":!!M},k],...D("root",{variant:C}),...w,children:[M&&(0,d.jsx)("span",{...D("section"),"data-position":"left",children:M}),(0,d.jsx)("span",{...D("label"),children:g}),y&&(0,d.jsx)("span",{...D("section"),"data-position":"right",children:y})]})});u.classes=r,u.varsResolver=c,u.displayName="@mantine/core/Badge",e.s(["Badge",0,u],257177)},123895,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20a108,108,0,0,0,0,216c22.27,0,45.69-6.73,62.64-18a12,12,0,1,0-13.29-20c-13,8.63-31.89,14-49.35,14a84,84,0,1,1,84-84c0,9.29-1.67,17.08-4.69,21.95-2.64,4.24-6,6.05-11.31,6.05s-8.67-1.81-11.31-6.05c-3-4.87-4.69-12.66-4.69-21.95V88a12,12,0,0,0-23.49-3.46,52,52,0,1,0,8.86,79.57C172.3,174.3,182.81,180,196,180c24.67,0,40-19.92,40-52A108.12,108.12,0,0,0,128,20Zm0,136a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232,128c0,.51,0,1,0,1.52-.34,14.26-5.63,30.48-28,30.48-23.14,0-28-17.4-28-32V88a8,8,0,0,0-8.53-8A8.17,8.17,0,0,0,160,88.27v4a48,48,0,1,0,6.73,64.05,40.19,40.19,0,0,0,3.38,5C175.48,168,185.71,176,204,176a54.81,54.81,0,0,0,9.22-.75,4,4,0,0,1,4.09,6A104.05,104.05,0,0,1,125.91,232C71.13,230.9,26.2,186.86,24.08,132.11A104,104,0,1,1,232,128ZM96,128a32,32,0,1,0,32-32A32,32,0,0,0,96,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26a102,102,0,0,0,0,204c21.13,0,43.31-6.35,59.32-17a6,6,0,0,0-6.65-10c-13.9,9.25-34.09,15-52.67,15a90,90,0,1,1,90-90c0,29.58-13.78,34-22,34s-22-4.42-22-34V88a6,6,0,0,0-12,0v9a46,46,0,1,0,4.34,56.32C171.76,166.6,182,174,196,174c21.29,0,34-17.2,34-46A102.12,102.12,0,0,0,128,26Zm0,136a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28a100,100,0,0,0,0,200c20.76,0,42.52-6.23,58.21-16.66a4,4,0,1,0-4.43-6.67C167.35,214.27,147.24,220,128,220a92,92,0,1,1,92-92c0,31.32-15,36-24,36s-24-4.68-24-36V88a4,4,0,0,0-8,0v14.75a44,44,0,1,0,2.82,45.94C171.46,163.58,181.66,172,196,172c20,0,32-16.45,32-44A100.11,100.11,0,0,0,128,28Zm0,136a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),a=t.forwardRef((e,a)=>t.createElement(o.default,{ref:a,...e,weights:n}));a.displayName="AtIcon",e.s(["AtIcon",0,a],123895)},541772,e=>{"use strict";var t=e.i(191788);e.s(["useDisclosure",0,function(e=!1,o={}){let[n,a]=(0,t.useState)(e),l=(0,t.useCallback)(()=>{a(e=>e||(o.onOpen?.(),!0))},[o.onOpen]),s=(0,t.useCallback)(()=>{a(e=>e?(o.onClose?.(),!1):e)},[o.onClose]);return[n,{open:l,close:s,toggle:(0,t.useCallback)(()=>{n?s():l()},[s,l,n]),set:a}]}])},477777,430731,637245,225147,811590,426611,32044,446817,e=>{"use strict";var t=e.i(232471);let[o,n]=(0,e.i(386179).createSafeContext)("ModalBase component was not found in tree");var a=e.i(191788),l=e.i(56206),s=e.i(391398);function i({className:e,...o}){let r,d=(r=n(),(0,a.useEffect)(()=>(r.setBodyMounted(!0),()=>r.setBodyMounted(!1)),[]),r.getBodyId()),c=n();return(0,s.jsx)(t.Box,{id:d,className:(0,l.default)({m_5df29311:!c.unstyled},e),...o})}i.displayName="@mantine/core/ModalBaseBody",e.s(["ModalBaseBody",0,i],477777);var r=e.i(802046);function d({className:e,onClick:t,...o}){let a=n();return(0,s.jsx)(r.CloseButton,{...o,onClick:e=>{a.onClose(),t?.(e)},className:(0,l.default)({m_606cb269:!a.unstyled},e),unstyled:a.unstyled})}d.displayName="@mantine/core/ModalBaseCloseButton",e.s(["ModalBaseCloseButton",0,d],430731);var c=e.i(470743),u=e.i(34515),m=e.i(22630);function p({transitionProps:e,className:t,innerProps:o,onKeyDown:a,style:i,ref:r,...d}){let f=n();return(0,s.jsx)(u.Transition,{mounted:f.opened,transition:"pop",...f.transitionProps,onExited:()=>{f.onExitTransitionEnd?.(),f.transitionProps?.onExited?.()},onEntered:()=>{f.onEnterTransitionEnd?.(),f.transitionProps?.onEntered?.()},...e,children:e=>(0,s.jsx)("div",{...o,className:(0,l.default)({m_60c222c7:!f.unstyled},o.className),children:(0,s.jsx)(m.FocusTrap,{active:f.opened&&f.trapFocus,innerRef:r,children:(0,s.jsx)(c.Paper,{...d,component:"section",role:"dialog",tabIndex:-1,"aria-modal":!0,"aria-describedby":f.bodyMounted?f.getBodyId():void 0,"aria-labelledby":f.titleMounted?f.getTitleId():void 0,style:[i,e],className:(0,l.default)({m_fd1ab0aa:!f.unstyled},t),unstyled:f.unstyled,children:d.children})})})})}function f({className:e,...o}){let a=n();return(0,s.jsx)(t.Box,{component:"header",className:(0,l.default)({m_b5489c3c:!a.unstyled},e),...o})}p.displayName="@mantine/core/ModalBaseContent",e.s(["ModalBaseContent",0,p],637245),e.s(["NativeScrollArea",0,function({children:e}){return(0,s.jsx)(s.Fragment,{children:e})}],225147),f.displayName="@mantine/core/ModalBaseHeader",e.s(["ModalBaseHeader",0,f],811590);var h=e.i(476273);let x={duration:200,timingFunction:"ease",transition:"fade"};function M({onClick:e,transitionProps:t,style:o,visible:a,...l}){let i,r=n(),d=(i=n(),{...x,...i.transitionProps,...t});return(0,s.jsx)(u.Transition,{mounted:void 0!==a?a:r.opened,...d,transition:"fade",children:t=>(0,s.jsx)(h.Overlay,{fixed:!0,style:[o,t],zIndex:r.zIndex,unstyled:r.unstyled,onClick:t=>{e?.(t),r.closeOnClickOutside&&r.onClose()},...l})})}M.displayName="@mantine/core/ModalBaseOverlay",e.s(["ModalBaseOverlay",0,M],426611);var y=e.i(749218),g=e.i(433512),C=e.i(164483),j=e.i(779861),v=e.i(484108),B=e.i(107315),k=e.i(133613),b=e.i(865823);function w({keepMounted:e,opened:n,onClose:l,id:i,transitionProps:r,onExitTransitionEnd:d,onEnterTransitionEnd:c,trapFocus:u,closeOnEscape:m,returnFocus:p,closeOnClickOutside:f,withinPortal:h,portalProps:x,lockScroll:M,children:D,zIndex:F,shadow:A,padding:O,__vars:S,unstyled:T,removeScrollProps:I,...E}){let{_id:P,titleMounted:R,bodyMounted:N,shouldLockScroll:Z,setTitleMounted:_,setBodyMounted:z}=function({id:e,transitionProps:t,opened:o,trapFocus:n,closeOnEscape:l,onClose:s,returnFocus:i}){let r=(0,B.useId)(e),[d,c]=(0,a.useState)(!1),[u,m]=(0,a.useState)(!1),p=function({opened:e,transitionDuration:t}){let[o,n]=(0,a.useState)(e),l=(0,a.useRef)(-1),s=(0,j.useReducedMotion)()?0:t;return(0,a.useEffect)(()=>(e?(n(!0),window.clearTimeout(l.current)):0===s?n(!1):l.current=window.setTimeout(()=>n(!1),s),()=>window.clearTimeout(l.current)),[e,s]),o}({opened:o,transitionDuration:"number"==typeof t?.duration?t?.duration:200});return(0,k.useWindowEvent)("keydown",e=>{"Escape"===e.key&&l&&!e.isComposing&&o&&e.target?.getAttribute("data-mantine-stop-propagation")!=="true"&&s()},{capture:!0}),(0,v.useFocusReturn)({opened:o,shouldReturnFocus:n&&i}),{_id:r,titleMounted:d,bodyMounted:u,shouldLockScroll:p,setTitleMounted:c,setBodyMounted:m}}({id:i,transitionProps:r,opened:n,trapFocus:u,closeOnEscape:m,onClose:l,returnFocus:p}),{key:G,...H}=I||{};return(0,s.jsx)(C.OptionalPortal,{...x,withinPortal:h,children:(0,s.jsx)(o,{value:{opened:n,onClose:l,closeOnClickOutside:f,onExitTransitionEnd:d,onEnterTransitionEnd:c,transitionProps:{...r,keepMounted:e},getTitleId:()=>`${P}-title`,getBodyId:()=>`${P}-body`,titleMounted:R,bodyMounted:N,setTitleMounted:_,setBodyMounted:z,trapFocus:u,closeOnEscape:m,zIndex:F,unstyled:T},children:(0,s.jsx)(b.RemoveScroll,{enabled:Z&&M,...H,children:(0,s.jsx)(t.Box,{...E,id:P,__vars:{...S,"--mb-z-index":(F||(0,y.getDefaultZIndex)("modal")).toString(),"--mb-shadow":(0,g.getShadow)(A),"--mb-padding":(0,g.getSpacing)(O)},children:D})},G)})})}function D({className:e,...o}){let i,r=(i=n(),(0,a.useEffect)(()=>(i.setTitleMounted(!0),()=>i.setTitleMounted(!1)),[]),i.getTitleId()),d=n();return(0,s.jsx)(t.Box,{component:"h2",className:(0,l.default)({m_615af6c9:!d.unstyled},e),id:r,...o})}w.displayName="@mantine/core/ModalBase",e.s(["ModalBase",0,w],32044),D.displayName="@mantine/core/ModalBaseTitle",e.s(["ModalBaseTitle",0,D],446817)},424302,e=>{"use strict";var t=e.i(749218),o=e.i(44091),n=e.i(275519),a={root:"m_9df02822",content:"m_54c44539",inner:"m_1f958f16",header:"m_d0e2b9cd"},l=e.i(477777);let[s,i]=(0,e.i(386179).createSafeContext)("Modal component was not found in tree");var r=e.i(391398);let d=(0,n.factory)(e=>{let{classNames:t,className:n,style:a,styles:s,vars:d,...c}=(0,o.useProps)("ModalBody",null,e);return(0,r.jsx)(l.ModalBaseBody,{...i().getStyles("body",{classNames:t,style:a,styles:s,className:n}),...c})});d.classes=a,d.displayName="@mantine/core/ModalBody";var c=e.i(430731);let u=(0,n.factory)(e=>{let{classNames:t,className:n,style:a,styles:l,vars:s,...d}=(0,o.useProps)("ModalCloseButton",null,e);return(0,r.jsx)(c.ModalBaseCloseButton,{...i().getStyles("close",{classNames:t,style:a,styles:l,className:n}),...d})});u.classes=a,u.displayName="@mantine/core/ModalCloseButton";var m=e.i(779177),p=e.i(637245),f=e.i(225147);let h=(0,n.factory)(e=>{let{classNames:t,className:n,style:a,styles:l,vars:s,children:d,__hidden:c,...u}=(0,o.useProps)("ModalContent",null,e),h=i(),x=h.scrollAreaComponent||f.NativeScrollArea;return(0,r.jsx)(p.ModalBaseContent,{...h.getStyles("content",{className:n,style:a,styles:l,classNames:t}),innerProps:h.getStyles("inner",{className:n,style:a,styles:l,classNames:t}),"data-full-screen":h.fullScreen||void 0,"data-modal-content":!0,"data-hidden":c||void 0,...u,children:(0,r.jsx)(x,{style:{maxHeight:h.fullScreen?"100dvh":`calc(100dvh - (${(0,m.rem)(h.yOffset)} * 2))`},children:d})})});h.classes=a,h.displayName="@mantine/core/ModalContent";var x=e.i(811590);let M=(0,n.factory)(e=>{let{classNames:t,className:n,style:a,styles:l,vars:s,...d}=(0,o.useProps)("ModalHeader",null,e);return(0,r.jsx)(x.ModalBaseHeader,{...i().getStyles("header",{classNames:t,style:a,styles:l,className:n}),...d})});M.classes=a,M.displayName="@mantine/core/ModalHeader";var y=e.i(426611);let g=(0,n.factory)(e=>{let{classNames:t,className:n,style:a,styles:l,vars:s,...d}=(0,o.useProps)("ModalOverlay",null,e);return(0,r.jsx)(y.ModalBaseOverlay,{...i().getStyles("overlay",{classNames:t,style:a,styles:l,className:n}),...d})});g.classes=a,g.displayName="@mantine/core/ModalOverlay";var C=e.i(433512),j=e.i(481178),v=e.i(391466),B=e.i(19300),k=e.i(32044);let b={__staticSelector:"Modal",closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:(0,t.getDefaultZIndex)("modal"),transitionProps:{duration:200,transition:"fade-down"},yOffset:"5dvh"},w=(0,j.createVarsResolver)((e,{radius:t,size:o,yOffset:n,xOffset:a})=>({root:{"--modal-radius":void 0===t?void 0:(0,C.getRadius)(t),"--modal-size":(0,C.getSize)(o,"modal-size"),"--modal-y-offset":(0,m.rem)(n),"--modal-x-offset":(0,m.rem)(a)}})),D=(0,n.factory)(e=>{let t=(0,o.useProps)("ModalRoot",b,e),{classNames:n,className:l,style:i,styles:d,unstyled:c,vars:u,yOffset:m,scrollAreaComponent:p,radius:f,fullScreen:h,centered:x,xOffset:M,__staticSelector:y,attributes:g,...C}=t,j=(0,v.useStyles)({name:y,classes:a,props:t,className:l,style:i,classNames:n,styles:d,unstyled:c,attributes:g,vars:u,varsResolver:w});return(0,r.jsx)(s,{value:{yOffset:m,scrollAreaComponent:p,getStyles:j,fullScreen:h},children:(0,r.jsx)(k.ModalBase,{...j("root"),"data-full-screen":h||void 0,"data-centered":x||void 0,"data-offset-scrollbars":p===B.ScrollArea.Autosize||void 0,unstyled:c,...C})})});D.classes=a,D.varsResolver=w,D.displayName="@mantine/core/ModalRoot";var F=e.i(191788);let A=(0,F.createContext)(null);function O({children:e}){let[o,n]=(0,F.useState)([]),[a,l]=(0,F.useState)((0,t.getDefaultZIndex)("modal"));return(0,r.jsx)(A,{value:{stack:o,addModal:(e,t)=>{n(t=>[...new Set([...t,e])]),l(e=>"number"==typeof t&&"number"==typeof e?Math.max(e,t):e)},removeModal:e=>n(t=>t.filter(t=>t!==e)),getZIndex:e=>`calc(${a} + ${o.indexOf(e)} + 1)`,currentId:o[o.length-1],maxZIndex:a},children:e})}O.displayName="@mantine/core/ModalStack";var S=e.i(446817);let T=(0,n.factory)(e=>{let{classNames:t,className:n,style:a,styles:l,vars:s,...d}=(0,o.useProps)("ModalTitle",null,e);return(0,r.jsx)(S.ModalBaseTitle,{...i().getStyles("title",{classNames:t,style:a,styles:l,className:n}),...d})});T.classes=a,T.displayName="@mantine/core/ModalTitle";let I={closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:(0,t.getDefaultZIndex)("modal"),transitionProps:{duration:200,transition:"fade-down"},withOverlay:!0,withCloseButton:!0},E=(0,n.factory)(e=>{let{title:n,withOverlay:a,overlayProps:l,withCloseButton:s,closeButtonProps:i,children:c,radius:m,opened:p,stackId:f,zIndex:x,...y}=(0,o.useProps)("Modal",I,e),C=(0,F.use)(A),j=!!n||s,v=C&&f?{closeOnEscape:C.currentId===f,trapFocus:C.currentId===f,zIndex:C.getZIndex(f)}:{},B=!1!==a&&(f&&C?C.currentId===f:p);return(0,F.useEffect)(()=>{C&&f&&(p?C.addModal(f,x||(0,t.getDefaultZIndex)("modal")):C.removeModal(f))},[p,f,x]),(0,r.jsxs)(D,{radius:m,opened:p,zIndex:C&&f?C.getZIndex(f):x,...y,...v,children:[a&&(0,r.jsx)(g,{visible:B,transitionProps:C&&f?{duration:0}:void 0,...l}),(0,r.jsxs)(h,{radius:m,__hidden:!!C&&!!f&&!!p&&f!==C.currentId,children:[j&&(0,r.jsxs)(M,{children:[n&&(0,r.jsx)(T,{children:n}),s&&(0,r.jsx)(u,{...i})]}),(0,r.jsx)(d,{children:c})]})]})});E.classes=a,E.displayName="@mantine/core/Modal",E.Root=D,E.Overlay=g,E.Content=h,E.Body=d,E.Header=M,E.Title=T,E.CloseButton=u,E.Stack=O,e.s(["Modal",0,E],424302)},692385,e=>{"use strict";var t=e.i(852361),o=e.i(191788);let n={min:-1/0,max:1/0};e.s(["useCounter",0,function(e=0,a){let{min:l,max:s,step:i=1}={...n,...a},r=Math.abs(i),[d,c]=(0,o.useState)((0,t.clamp)(e,l,s));return[d,{increment:(0,o.useCallback)(()=>c(e=>(0,t.clamp)(e+r,l,s)),[l,s,r]),decrement:(0,o.useCallback)(()=>c(e=>(0,t.clamp)(e-r,l,s)),[l,s,r]),set:(0,o.useCallback)(e=>c((0,t.clamp)(e,l,s)),[l,s]),reset:(0,o.useCallback)(()=>c((0,t.clamp)(e,l,s)),[e,l,s])}]}])},299593,e=>{"use strict";var t=e.i(191788),o=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M164.24,100.24,136.48,128l27.76,27.76a6,6,0,1,1-8.48,8.48L128,136.48l-27.76,27.76a6,6,0,0,1-8.48-8.48L119.52,128,91.76,100.24a6,6,0,0,1,8.48-8.48L128,119.52l27.76-27.76a6,6,0,0,1,8.48,8.48ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M162.83,98.83,133.66,128l29.17,29.17a4,4,0,0,1-5.66,5.66L128,133.66,98.83,162.83a4,4,0,0,1-5.66-5.66L122.34,128,93.17,98.83a4,4,0,0,1,5.66-5.66L128,122.34l29.17-29.17a4,4,0,1,1,5.66,5.66ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"}))]]),a=t.forwardRef((e,a)=>t.createElement(o.default,{ref:a,...e,weights:n}));a.displayName="XCircleIcon",e.s(["XCircleIcon",0,a],299593)},323121,e=>{"use strict";var t=e.i(191788);function o(e){let o=e.reduce((e,t)=>({...e,[t]:!1}),{}),[n,a]=(0,t.useState)(o),l=(0,t.useCallback)(e=>{a(t=>({...t,[e]:!0}))},[]),s=(0,t.useCallback)(e=>a(t=>({...t,[e]:!1})),[]),i=(0,t.useCallback)(e=>a(t=>({...t,[e]:!t[e]})),[]);return{state:n,open:l,close:s,closeAll:(0,t.useCallback)(()=>a(o),[]),toggle:i,register:(0,t.useCallback)(e=>({opened:n[e],onClose:()=>s(e),stackId:e}),[n])}}e.s(["useDrawersStack",0,o,"useModalsStack",0,o])},18584,e=>{"use strict";var t=e.i(648863),o=e.i(29260),n=e.i(485108),a=e.i(424302),l=e.i(391398),s=e.i(541772);let i={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,s.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Modal,{opened:e,onClose:i,title:"Authentication",children:(0,l.jsx)(o.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},r={type:"code",code:`
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

`,centered:!0,component:function(){let[e,{open:t,close:o}]=(0,s.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Modal,{opened:e,onClose:o,withCloseButton:!1,children:"Modal without header, press escape or click on overlay to close"}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var d=e.i(191788),c=e.i(725695);let u=["xs","sm","md","lg","xl","55rem","70%","100%"],m={type:"code",component:function(){let[e,t]=(0,d.useState)(!1),[s,i]=(0,d.useState)("md"),r=u.map(e=>(0,l.jsx)(n.Button,{variant:"default",onClick:()=>{i(e),t(!0)},children:e},e));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Modal,{opened:e,onClose:()=>t(!1),title:"Introduce yourself!",size:s,children:(0,l.jsx)(o.AuthenticationForm,{noPadding:!0,noShadow:!0})}),(0,l.jsx)(c.Group,{justify:"center",children:r})]})}},p={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,s.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Modal,{opened:e,onClose:i,title:"Authentication",overlayProps:{backgroundOpacity:.55,blur:3},children:(0,l.jsx)(o.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},f={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:o}]=(0,s.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Modal,{opened:e,onClose:o,title:"Header is sticky",children:Array(100).fill(0).map((e,t)=>(0,l.jsx)("p",{children:"Modal with scroll"},t))}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},h={type:"code",code:`
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
`,component:function(){let[e,t]=(0,d.useState)(!1),[o,s]=(0,d.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Modal,{opened:o,onClose:()=>s(!1),title:"Please consider this",transitionProps:{transition:"rotate-left"},children:"rotate-left transition"}),(0,l.jsx)(a.Modal,{opened:e,onClose:()=>t(!1),title:"Please consider this",transitionProps:{transition:"fade",duration:600,timingFunction:"linear"},children:"fade transition 600ms linear transition"}),(0,l.jsxs)(c.Group,{justify:"center",children:[(0,l.jsx)(n.Button,{onClick:()=>s(!0),variant:"default",children:"Rotate left transition"}),(0,l.jsx)(n.Button,{onClick:()=>t(!0),variant:"default",children:"Fade transition"})]})]})}},x={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,s.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Modal,{opened:e,onClose:i,title:"Authentication",centered:!0,children:(0,l.jsx)(o.AuthenticationForm,{noPadding:!0,noShadow:!0})}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open centered Modal"})]})}};var M=e.i(883364);let y={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,s.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.Modal,{opened:e,onClose:i,title:"This is a fullscreen modal",fullScreen:!0,radius:0,transitionProps:{transition:"fade",duration:200},children:[(0,l.jsx)(M.Text,{mb:"xl",children:"It takes the entire screen and does not have overlay and border-radius, you can use it small screens to save up some space. It also has fade transition by default, but you can change that with transition prop. Now here is an authentication form used in previous examples to see the difference."}),(0,l.jsx)(o.AuthenticationForm,{noPadding:!0,noShadow:!0})]}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var g=e.i(257177),C=e.i(692385);let j={type:"code",component:function(){let[e,{close:t,open:o}]=(0,s.useDisclosure)(!1),[i,{increment:r,decrement:d}]=(0,C.useCounter)(3,{min:0}),u=Array(i).fill(0).map((e,t)=>(0,l.jsxs)(g.Badge,{children:["Badge ",t]},t));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.Modal,{opened:e,onClose:t,size:"auto",title:"Modal size auto",children:[(0,l.jsx)(M.Text,{children:"Modal with size auto will fits its content"}),(0,l.jsx)(c.Group,{wrap:"nowrap",mt:"md",children:u}),(0,l.jsxs)(c.Group,{mt:"xl",children:[(0,l.jsx)(n.Button,{onClick:r,children:"Add badge"}),(0,l.jsx)(n.Button,{onClick:d,children:"Remove badge"})]})]}),(0,l.jsx)(n.Button,{variant:"default",onClick:o,children:"Open modal"})]})},centered:!0,code:`
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
`};var v=e.i(19300);let B={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:o}]=(0,s.useDisclosure)(!1),i=Array(100).fill(0).map((e,t)=>(0,l.jsx)("p",{children:"Modal with scroll"},t));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Modal,{opened:e,onClose:o,title:"Header is sticky",scrollAreaComponent:v.ScrollArea.Autosize,children:i}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},k={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:o}]=(0,s.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.Modal.Root,{opened:e,onClose:o,children:[(0,l.jsx)(a.Modal.Overlay,{}),(0,l.jsxs)(a.Modal.Content,{children:[(0,l.jsxs)(a.Modal.Header,{children:[(0,l.jsx)(a.Modal.Title,{children:"Modal title"}),(0,l.jsx)(a.Modal.CloseButton,{})]}),(0,l.jsx)(a.Modal.Body,{children:"Modal content"})]})]}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},b={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,s.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Modal,{opened:e,onClose:i,title:"Authentication",yOffset:"1vh",xOffset:0,children:(0,l.jsx)(o.AuthenticationForm,{noPadding:!0,noShadow:!0})}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var w=e.i(841209);let D={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:o}]=(0,s.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.Modal,{opened:e,onClose:o,title:"Focus demo",children:[(0,l.jsx)(w.TextInput,{label:"First input",placeholder:"First input"}),(0,l.jsx)(w.TextInput,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var F=e.i(779177),A=e.i(839608);let O={type:"code",code:`
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: ${(0,F.em)(800)})');

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
`,centered:!0,component:function(){let[e,{open:t,close:o}]=(0,s.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Modal,{opened:e,onClose:o,title:"This is a fullscreen modal",fullScreen:(0,A.useMediaQuery)(`(max-width: ${(0,F.em)(800)})`),transitionProps:{transition:"fade",duration:200},children:"The Modal will be full screen only on mobile"}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var S=e.i(299593);let T={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,s.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Modal,{opened:e,onClose:i,title:"Authentication",closeButtonProps:{icon:(0,l.jsx)(S.XCircleIcon,{size:20})},children:(0,l.jsx)(o.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var I=e.i(22630);let E={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:o}]=(0,s.useDisclosure)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.Modal,{opened:e,onClose:o,title:"Focus demo",children:[(0,l.jsx)(I.FocusTrap.InitialFocus,{}),(0,l.jsx)(w.TextInput,{label:"First input",placeholder:"First input"}),(0,l.jsx)(w.TextInput,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,l.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var P=e.i(323121);let R={type:"code",code:`
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
`,centered:!0,component:function(){let e=(0,P.useModalsStack)(["delete-page","confirm-action","really-confirm-action"]);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.Modal.Stack,{children:[(0,l.jsxs)(a.Modal,{...e.register("delete-page"),title:"Delete this page?",children:["Are you sure you want to delete this page? This action cannot be undone.",(0,l.jsxs)(c.Group,{mt:"lg",justify:"flex-end",children:[(0,l.jsx)(n.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,l.jsx)(n.Button,{onClick:()=>e.open("confirm-action"),color:"red",children:"Delete"})]})]}),(0,l.jsxs)(a.Modal,{...e.register("confirm-action"),title:"Confirm action",children:["Are you sure you want to perform this action? This action cannot be undone. If you are sure, press confirm button below.",(0,l.jsxs)(c.Group,{mt:"lg",justify:"flex-end",children:[(0,l.jsx)(n.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,l.jsx)(n.Button,{onClick:()=>e.open("really-confirm-action"),color:"red",children:"Confirm"})]})]}),(0,l.jsxs)(a.Modal,{...e.register("really-confirm-action"),title:"Really confirm action",children:["Jokes aside. You have confirmed this action. This is your last chance to cancel it. After you press confirm button below, action will be performed and cannot be undone. For real this time. Are you sure you want to proceed?",(0,l.jsxs)(c.Group,{mt:"lg",justify:"flex-end",children:[(0,l.jsx)(n.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,l.jsx)(n.Button,{onClick:e.closeAll,color:"red",children:"Confirm"})]})]})]}),(0,l.jsx)(n.Button,{variant:"default",onClick:()=>e.open("delete-page"),children:"Open modal"})]})}},N={type:"code",code:`
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
`,centered:!0,component:function(){let[e,t]=(0,s.useDisclosure)(!1),[o,i]=(0,s.useDisclosure)(!1),[r,u]=(0,d.useState)({title:"",message:""});return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(a.Modal,{opened:e,onClose:()=>{t.close(),u({title:"",message:""})},transitionProps:{duration:300,exitDuration:1e3,transition:"fade-down"},title:r.title,children:r.message}),(0,l.jsx)(a.Modal,{opened:o,onClose:i.close,transitionProps:{duration:300,exitDuration:1e3,transition:"fade-down"},onExitTransitionEnd:()=>u({title:"",message:""}),title:r.title,children:r.message}),(0,l.jsxs)(c.Group,{children:[(0,l.jsx)(n.Button,{onClick:()=>{t.open(),u({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onClose"}),(0,l.jsx)(n.Button,{onClick:()=>{i.open(),u({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onExitTransitionEnd"})]})]})},defaultExpanded:!1};var Z=(0,t.__exportAll)({centered:()=>x,closeIcon:()=>T,composition:()=>k,fullScreen:()=>y,fullScreenMobile:()=>O,header:()=>r,initialFocus:()=>D,initialFocusTrap:()=>E,offset:()=>b,overflow:()=>f,overlay:()=>p,scrollarea:()=>B,sizeAuto:()=>j,sizes:()=>m,stack:()=>R,transitionEnd:()=>N,transitions:()=>h,usage:()=>i});e.s(["ModalDemos",0,Z],18584)},298323,e=>{"use strict";var t=e.i(391398),o=e.i(38856),n=e.i(18584);e.i(603441);var a=e.i(62558);e.i(457450);var l=e.i(418026);let s=(0,a.Layout)(l.MDX_DATA.useFocusReturn);function i(e){let a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.useMDXComponents)(),...e.components},{Demo:l}=a;return l||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"use-focus-return"})," hook automatically returns focus to the last focused element when a given condition is met.\nFor example, it is used in the ",(0,t.jsx)(a.a,{href:"/core/modal/",children:"Modal"})," component to restore focus after the modal was closed."]}),"\n",(0,t.jsxs)(a.p,{children:["Close the modal with the ",(0,t.jsx)(a.code,{children:"Escape"})," key and see how focus returns to the button after the modal closes:"]}),"\n",(0,t.jsx)(l,{data:n.ModalDemos.usage,demoProps:{toggle:!0}}),"\n",(0,t.jsxs)(a.p,{children:["In most cases, you should use this hook with ",(0,t.jsx)(a.a,{href:"/hooks/use-focus-trap/",children:"use-focus-trap"}),"."]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:"import { useFocusReturn } from '@mantine/hooks';\n\nuseFocusReturn({\n  // Is region with focus trap active?\n  // When it activates hook saves document.activeElement to the internal state\n  // and focuses this element once focus trap is deactivated\n  opened: false,\n\n  // Determines whether focus should be returned automatically, true by default\n  shouldReturnFocus: true,\n});\n"})}),"\n",(0,t.jsxs)(a.p,{children:["If the ",(0,t.jsx)(a.code,{children:"shouldReturnFocus"})," option is set to ",(0,t.jsx)(a.code,{children:"false"}),", you can call the returned function to focus the last active element:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:"import { useFocusReturn } from '@mantine/hooks';\n\nconst returnFocus = useFocusReturn({\n  opened: false,\n  shouldReturnFocus: false,\n});\n\n// ... later\nreturnFocus();\n"})}),"\n",(0,t.jsx)(a.h2,{id:"definition",children:"Definition"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:"interface UseFocusReturnOptions {\n  opened: boolean;\n  shouldReturnFocus?: boolean;\n}\n\ntype UseFocusReturnReturnValue = () => void;\n\nfunction useFocusReturn(options: UseFocusReturnOptions): UseFocusReturnReturnValue\n"})}),"\n",(0,t.jsx)(a.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"UseFocusReturnOptions"})," and ",(0,t.jsx)(a.code,{children:"UseFocusReturnReturnValue"})," types are exported from the ",(0,t.jsx)(a.code,{children:"@mantine/hooks"})," package;\nyou can import them in your application:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:"import type { UseFocusReturnOptions, UseFocusReturnReturnValue } from '@mantine/hooks';\n"})})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(s,{...e,children:(0,t.jsx)(i,{...e})})}])},565511,(e,t,o)=>{let n="/hooks/use-focus-return";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(298323)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);