(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let a={};for(var o in e)t(a,o,{get:e[o],enumerable:!0});return n||t(a,Symbol.toStringTag,{value:"Module"}),a}])},257177,e=>{"use strict";var t=e.i(433512),n=e.i(481178),a=e.i(317477),o=e.i(44091),r=e.i(391466),i=e.i(956449),l=e.i(232471),s={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},c=e.i(391398);let d=(0,n.createVarsResolver)((e,{radius:n,color:o,gradient:r,variant:i,size:l,autoContrast:s,circle:c})=>{let d=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:r,variant:i||"filled",autoContrast:s});return{root:{"--badge-height":(0,t.getSize)(l,"badge-height"),"--badge-padding-x":(0,t.getSize)(l,"badge-padding-x"),"--badge-fz":(0,t.getSize)(l,"badge-fz"),"--badge-radius":c||void 0===n?void 0:(0,t.getRadius)(n),"--badge-bg":o||i?d.background:void 0,"--badge-color":o||i?d.color:void 0,"--badge-bd":o||i?d.border:void 0,"--badge-dot-color":"dot"===i?(0,a.getThemeColor)(o,e):void 0}}}),u=(0,i.polymorphicFactory)(e=>{let t=(0,o.useProps)("Badge",null,e),{classNames:n,className:a,style:i,styles:u,unstyled:p,vars:m,radius:h,color:f,gradient:x,leftSection:g,rightSection:v,children:y,variant:b,fullWidth:j,autoContrast:M,circle:w,mod:A,attributes:C,...k}=t,I=(0,r.useStyles)({name:"Badge",props:t,classes:s,className:a,style:i,classNames:n,styles:u,unstyled:p,attributes:C,vars:m,varsResolver:d});return(0,c.jsxs)(l.Box,{variant:b,mod:[{block:j,circle:w,"with-right-section":!!v,"with-left-section":!!g},A],...I("root",{variant:b}),...k,children:[g&&(0,c.jsx)("span",{...I("section"),"data-position":"left",children:g}),(0,c.jsx)("span",{...I("label"),children:y}),v&&(0,c.jsx)("span",{...I("section"),"data-position":"right",children:v})]})});u.classes=s,u.varsResolver=d,u.displayName="@mantine/core/Badge",e.s(["Badge",0,u],257177)},123895,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20a108,108,0,0,0,0,216c22.27,0,45.69-6.73,62.64-18a12,12,0,1,0-13.29-20c-13,8.63-31.89,14-49.35,14a84,84,0,1,1,84-84c0,9.29-1.67,17.08-4.69,21.95-2.64,4.24-6,6.05-11.31,6.05s-8.67-1.81-11.31-6.05c-3-4.87-4.69-12.66-4.69-21.95V88a12,12,0,0,0-23.49-3.46,52,52,0,1,0,8.86,79.57C172.3,174.3,182.81,180,196,180c24.67,0,40-19.92,40-52A108.12,108.12,0,0,0,128,20Zm0,136a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232,128c0,.51,0,1,0,1.52-.34,14.26-5.63,30.48-28,30.48-23.14,0-28-17.4-28-32V88a8,8,0,0,0-8.53-8A8.17,8.17,0,0,0,160,88.27v4a48,48,0,1,0,6.73,64.05,40.19,40.19,0,0,0,3.38,5C175.48,168,185.71,176,204,176a54.81,54.81,0,0,0,9.22-.75,4,4,0,0,1,4.09,6A104.05,104.05,0,0,1,125.91,232C71.13,230.9,26.2,186.86,24.08,132.11A104,104,0,1,1,232,128ZM96,128a32,32,0,1,0,32-32A32,32,0,0,0,96,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26a102,102,0,0,0,0,204c21.13,0,43.31-6.35,59.32-17a6,6,0,0,0-6.65-10c-13.9,9.25-34.09,15-52.67,15a90,90,0,1,1,90-90c0,29.58-13.78,34-22,34s-22-4.42-22-34V88a6,6,0,0,0-12,0v9a46,46,0,1,0,4.34,56.32C171.76,166.6,182,174,196,174c21.29,0,34-17.2,34-46A102.12,102.12,0,0,0,128,26Zm0,136a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28a100,100,0,0,0,0,200c20.76,0,42.52-6.23,58.21-16.66a4,4,0,1,0-4.43-6.67C167.35,214.27,147.24,220,128,220a92,92,0,1,1,92-92c0,31.32-15,36-24,36s-24-4.68-24-36V88a4,4,0,0,0-8,0v14.75a44,44,0,1,0,2.82,45.94C171.46,163.58,181.66,172,196,172c20,0,32-16.45,32-44A100.11,100.11,0,0,0,128,28Zm0,136a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(n.default,{ref:o,...e,weights:a}));o.displayName="AtIcon",e.s(["AtIcon",0,o],123895)},541772,e=>{"use strict";var t=e.i(191788);e.s(["useDisclosure",0,function(e=!1,n={}){let[a,o]=(0,t.useState)(e),r=(0,t.useCallback)(()=>{o(e=>e||(n.onOpen?.(),!0))},[n.onOpen]),i=(0,t.useCallback)(()=>{o(e=>e?(n.onClose?.(),!1):e)},[n.onClose]);return[a,{open:r,close:i,toggle:(0,t.useCallback)(()=>{a?i():r()},[i,r,a]),set:o}]}])},477777,430731,637245,225147,811590,426611,32044,446817,e=>{"use strict";var t=e.i(232471);let[n,a]=(0,e.i(386179).createSafeContext)("ModalBase component was not found in tree");var o=e.i(191788),r=e.i(56206),i=e.i(391398);function l({className:e,...n}){let s,c=(s=a(),(0,o.useEffect)(()=>(s.setBodyMounted(!0),()=>s.setBodyMounted(!1)),[]),s.getBodyId()),d=a();return(0,i.jsx)(t.Box,{id:c,className:(0,r.default)({m_5df29311:!d.unstyled},e),...n})}l.displayName="@mantine/core/ModalBaseBody",e.s(["ModalBaseBody",0,l],477777);var s=e.i(802046);function c({className:e,onClick:t,...n}){let o=a();return(0,i.jsx)(s.CloseButton,{...n,onClick:e=>{o.onClose(),t?.(e)},className:(0,r.default)({m_606cb269:!o.unstyled},e),unstyled:o.unstyled})}c.displayName="@mantine/core/ModalBaseCloseButton",e.s(["ModalBaseCloseButton",0,c],430731);var d=e.i(470743),u=e.i(34515),p=e.i(22630);function m({transitionProps:e,className:t,innerProps:n,onKeyDown:o,style:l,ref:s,...c}){let h=a();return(0,i.jsx)(u.Transition,{mounted:h.opened,transition:"pop",...h.transitionProps,onExited:()=>{h.onExitTransitionEnd?.(),h.transitionProps?.onExited?.()},onEntered:()=>{h.onEnterTransitionEnd?.(),h.transitionProps?.onEntered?.()},...e,children:e=>(0,i.jsx)("div",{...n,className:(0,r.default)({m_60c222c7:!h.unstyled},n.className),children:(0,i.jsx)(p.FocusTrap,{active:h.opened&&h.trapFocus,innerRef:s,children:(0,i.jsx)(d.Paper,{...c,component:"section",role:"dialog",tabIndex:-1,"aria-modal":!0,"aria-describedby":h.bodyMounted?h.getBodyId():void 0,"aria-labelledby":h.titleMounted?h.getTitleId():void 0,style:[l,e],className:(0,r.default)({m_fd1ab0aa:!h.unstyled},t),unstyled:h.unstyled,children:c.children})})})})}function h({className:e,...n}){let o=a();return(0,i.jsx)(t.Box,{component:"header",className:(0,r.default)({m_b5489c3c:!o.unstyled},e),...n})}m.displayName="@mantine/core/ModalBaseContent",e.s(["ModalBaseContent",0,m],637245),e.s(["NativeScrollArea",0,function({children:e}){return(0,i.jsx)(i.Fragment,{children:e})}],225147),h.displayName="@mantine/core/ModalBaseHeader",e.s(["ModalBaseHeader",0,h],811590);var f=e.i(476273);let x={duration:200,timingFunction:"ease",transition:"fade"};function g({onClick:e,transitionProps:t,style:n,visible:o,...r}){let l,s=a(),c=(l=a(),{...x,...l.transitionProps,...t});return(0,i.jsx)(u.Transition,{mounted:void 0!==o?o:s.opened,...c,transition:"fade",children:t=>(0,i.jsx)(f.Overlay,{fixed:!0,style:[n,t],zIndex:s.zIndex,unstyled:s.unstyled,onClick:t=>{e?.(t),s.closeOnClickOutside&&s.onClose()},...r})})}g.displayName="@mantine/core/ModalBaseOverlay",e.s(["ModalBaseOverlay",0,g],426611);var v=e.i(749218),y=e.i(433512),b=e.i(164483),j=e.i(779861),M=e.i(484108),w=e.i(107315),A=e.i(133613),C=e.i(865823);function k({keepMounted:e,keepMountedMode:a="activity",opened:r,onClose:l,id:s,transitionProps:c,onExitTransitionEnd:d,onEnterTransitionEnd:u,trapFocus:p,closeOnEscape:m,returnFocus:h,closeOnClickOutside:f,withinPortal:x,portalProps:g,lockScroll:I,children:P,zIndex:S,shadow:B,padding:T,__vars:D,unstyled:E,removeScrollProps:O,...N}){let{_id:F,titleMounted:H,bodyMounted:L,shouldLockScroll:z,setTitleMounted:Z,setBodyMounted:R}=function({id:e,transitionProps:t,opened:n,trapFocus:a,closeOnEscape:r,onClose:i,returnFocus:l}){let s=(0,w.useId)(e),[c,d]=(0,o.useState)(!1),[u,p]=(0,o.useState)(!1),m=function({opened:e,transitionDuration:t}){let[n,a]=(0,o.useState)(e),r=(0,o.useRef)(-1),i=(0,j.useReducedMotion)()?0:t;return(0,o.useEffect)(()=>(e?(a(!0),window.clearTimeout(r.current)):0===i?a(!1):r.current=window.setTimeout(()=>a(!1),i),()=>window.clearTimeout(r.current)),[e,i]),n}({opened:n,transitionDuration:"number"==typeof t?.duration?t?.duration:200});return(0,A.useWindowEvent)("keydown",e=>{"Escape"===e.key&&r&&!e.isComposing&&n&&e.target?.getAttribute("data-mantine-stop-propagation")!=="true"&&i()},{capture:!0}),(0,M.useFocusReturn)({opened:n,shouldReturnFocus:a&&l}),{_id:s,titleMounted:c,bodyMounted:u,shouldLockScroll:m,setTitleMounted:d,setBodyMounted:p}}({id:s,transitionProps:c,opened:r,trapFocus:p,closeOnEscape:m,onClose:l,returnFocus:h}),{key:V,..._}=O||{};return(0,i.jsx)(b.OptionalPortal,{...g,withinPortal:x,children:(0,i.jsx)(n,{value:{opened:r,onClose:l,closeOnClickOutside:f,onExitTransitionEnd:d,onEnterTransitionEnd:u,transitionProps:{...c,keepMounted:e,keepMountedMode:a},getTitleId:()=>`${F}-title`,getBodyId:()=>`${F}-body`,titleMounted:H,bodyMounted:L,setTitleMounted:Z,setBodyMounted:R,trapFocus:p,closeOnEscape:m,zIndex:S,unstyled:E},children:(0,i.jsx)(C.RemoveScroll,{enabled:z&&I,..._,children:(0,i.jsx)(t.Box,{...N,id:F,__vars:{...D,"--mb-z-index":(S||(0,v.getDefaultZIndex)("modal")).toString(),"--mb-shadow":(0,y.getShadow)(B),"--mb-padding":(0,y.getSpacing)(T)},children:P})},V)})})}function I({className:e,...n}){let l,s=(l=a(),(0,o.useEffect)(()=>(l.setTitleMounted(!0),()=>l.setTitleMounted(!1)),[]),l.getTitleId()),c=a();return(0,i.jsx)(t.Box,{component:"h2",className:(0,r.default)({m_615af6c9:!c.unstyled},e),id:s,...n})}k.displayName="@mantine/core/ModalBase",e.s(["ModalBase",0,k],32044),I.displayName="@mantine/core/ModalBaseTitle",e.s(["ModalBaseTitle",0,I],446817)},424302,e=>{"use strict";var t=e.i(749218),n=e.i(44091),a=e.i(275519),o={root:"m_9df02822",content:"m_54c44539",inner:"m_1f958f16",header:"m_d0e2b9cd"},r=e.i(477777);let[i,l]=(0,e.i(386179).createSafeContext)("Modal component was not found in tree");var s=e.i(391398);let c=(0,a.factory)(e=>{let{classNames:t,className:a,style:o,styles:i,vars:c,...d}=(0,n.useProps)("ModalBody",null,e);return(0,s.jsx)(r.ModalBaseBody,{...l().getStyles("body",{classNames:t,style:o,styles:i,className:a}),...d})});c.classes=o,c.displayName="@mantine/core/ModalBody";var d=e.i(430731);let u=(0,a.factory)(e=>{let{classNames:t,className:a,style:o,styles:r,vars:i,...c}=(0,n.useProps)("ModalCloseButton",null,e);return(0,s.jsx)(d.ModalBaseCloseButton,{...l().getStyles("close",{classNames:t,style:o,styles:r,className:a}),...c})});u.classes=o,u.displayName="@mantine/core/ModalCloseButton";var p=e.i(779177),m=e.i(637245),h=e.i(225147);let f=(0,a.factory)(e=>{let{classNames:t,className:a,style:o,styles:r,vars:i,children:c,__hidden:d,...u}=(0,n.useProps)("ModalContent",null,e),f=l(),x=f.scrollAreaComponent||h.NativeScrollArea;return(0,s.jsx)(m.ModalBaseContent,{...f.getStyles("content",{className:a,style:o,styles:r,classNames:t}),innerProps:f.getStyles("inner",{className:a,style:o,styles:r,classNames:t}),"data-full-screen":f.fullScreen||void 0,"data-modal-content":!0,"data-hidden":d||void 0,...u,children:(0,s.jsx)(x,{style:{maxHeight:f.fullScreen?"100dvh":`calc(100dvh - (${(0,p.rem)(f.yOffset)} * 2))`},children:c})})});f.classes=o,f.displayName="@mantine/core/ModalContent";var x=e.i(811590);let g=(0,a.factory)(e=>{let{classNames:t,className:a,style:o,styles:r,vars:i,...c}=(0,n.useProps)("ModalHeader",null,e);return(0,s.jsx)(x.ModalBaseHeader,{...l().getStyles("header",{classNames:t,style:o,styles:r,className:a}),...c})});g.classes=o,g.displayName="@mantine/core/ModalHeader";var v=e.i(426611);let y=(0,a.factory)(e=>{let{classNames:t,className:a,style:o,styles:r,vars:i,...c}=(0,n.useProps)("ModalOverlay",null,e);return(0,s.jsx)(v.ModalBaseOverlay,{...l().getStyles("overlay",{classNames:t,style:o,styles:r,className:a}),...c})});y.classes=o,y.displayName="@mantine/core/ModalOverlay";var b=e.i(433512),j=e.i(481178),M=e.i(391466),w=e.i(19300),A=e.i(32044);let C={__staticSelector:"Modal",closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:(0,t.getDefaultZIndex)("modal"),transitionProps:{duration:200,transition:"fade-down"},yOffset:"5dvh"},k=(0,j.createVarsResolver)((e,{radius:t,size:n,yOffset:a,xOffset:o})=>({root:{"--modal-radius":void 0===t?void 0:(0,b.getRadius)(t),"--modal-size":(0,b.getSize)(n,"modal-size"),"--modal-y-offset":(0,p.rem)(a),"--modal-x-offset":(0,p.rem)(o)}})),I=(0,a.factory)(e=>{let t=(0,n.useProps)("ModalRoot",C,e),{classNames:a,className:r,style:l,styles:c,unstyled:d,vars:u,yOffset:p,scrollAreaComponent:m,radius:h,fullScreen:f,centered:x,xOffset:g,__staticSelector:v,attributes:y,...b}=t,j=(0,M.useStyles)({name:v,classes:o,props:t,className:r,style:l,classNames:a,styles:c,unstyled:d,attributes:y,vars:u,varsResolver:k});return(0,s.jsx)(i,{value:{yOffset:p,scrollAreaComponent:m,getStyles:j,fullScreen:f},children:(0,s.jsx)(A.ModalBase,{...j("root"),"data-full-screen":f||void 0,"data-centered":x||void 0,"data-offset-scrollbars":m===w.ScrollArea.Autosize||void 0,unstyled:d,...b})})});I.classes=o,I.varsResolver=k,I.displayName="@mantine/core/ModalRoot";var P=e.i(191788);let S=(0,P.createContext)(null);function B({children:e}){let[n,a]=(0,P.useState)([]),[o,r]=(0,P.useState)((0,t.getDefaultZIndex)("modal"));return(0,s.jsx)(S,{value:{stack:n,addModal:(e,t)=>{a(t=>[...new Set([...t,e])]),r(e=>"number"==typeof t&&"number"==typeof e?Math.max(e,t):e)},removeModal:e=>a(t=>t.filter(t=>t!==e)),getZIndex:e=>`calc(${o} + ${n.indexOf(e)} + 1)`,currentId:n[n.length-1],maxZIndex:o},children:e})}B.displayName="@mantine/core/ModalStack";var T=e.i(446817);let D=(0,a.factory)(e=>{let{classNames:t,className:a,style:o,styles:r,vars:i,...c}=(0,n.useProps)("ModalTitle",null,e);return(0,s.jsx)(T.ModalBaseTitle,{...l().getStyles("title",{classNames:t,style:o,styles:r,className:a}),...c})});D.classes=o,D.displayName="@mantine/core/ModalTitle";let E={closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:(0,t.getDefaultZIndex)("modal"),transitionProps:{duration:200,transition:"fade-down"},withOverlay:!0,withCloseButton:!0},O=(0,a.factory)(e=>{let{title:a,withOverlay:o,overlayProps:r,withCloseButton:i,closeButtonProps:l,children:d,radius:p,opened:m,stackId:h,zIndex:x,...v}=(0,n.useProps)("Modal",E,e),b=(0,P.use)(S),j=!!a||i,M=b&&h?{closeOnEscape:b.currentId===h,trapFocus:b.currentId===h,zIndex:b.getZIndex(h)}:{},w=!1!==o&&(h&&b?b.currentId===h:m);return(0,P.useEffect)(()=>{b&&h&&(m?b.addModal(h,x||(0,t.getDefaultZIndex)("modal")):b.removeModal(h))},[m,h,x]),(0,s.jsxs)(I,{radius:p,opened:m,zIndex:b&&h?b.getZIndex(h):x,...v,...M,children:[o&&(0,s.jsx)(y,{visible:w,transitionProps:b&&h?{duration:0}:void 0,...r}),(0,s.jsxs)(f,{radius:p,__hidden:!!b&&!!h&&!!m&&h!==b.currentId,children:[j&&(0,s.jsxs)(g,{children:[a&&(0,s.jsx)(D,{children:a}),i&&(0,s.jsx)(u,{...l})]}),(0,s.jsx)(c,{children:d})]})]})});O.classes=o,O.displayName="@mantine/core/Modal",O.Root=I,O.Overlay=y,O.Content=f,O.Body=c,O.Header=g,O.Title=D,O.CloseButton=u,O.Stack=B,e.s(["Modal",0,O],424302)},692385,e=>{"use strict";var t=e.i(852361),n=e.i(191788);let a={min:-1/0,max:1/0};e.s(["useCounter",0,function(e=0,o){let{min:r,max:i,step:l=1}={...a,...o},s=Math.abs(l),[c,d]=(0,n.useState)((0,t.clamp)(e,r,i));return[c,{increment:(0,n.useCallback)(()=>d(e=>(0,t.clamp)(e+s,r,i)),[r,i,s]),decrement:(0,n.useCallback)(()=>d(e=>(0,t.clamp)(e-s,r,i)),[r,i,s]),set:(0,n.useCallback)(e=>d((0,t.clamp)(e,r,i)),[r,i]),reset:(0,n.useCallback)(()=>d((0,t.clamp)(e,r,i)),[e,r,i])}]}])},937389,e=>{"use strict";var t=e.i(433512),n=e.i(481178),a=e.i(44091),o=e.i(62904),r=e.i(391466),i=e.i(425254),l=e.i(275519),s=e.i(658109),c=e.i(294788),d=e.i(586488),u=e.i(391398),p={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"},m=e.i(107315),h=e.i(579560),f=e.i(56206);let x={visibilityToggleIcon:function({reveal:e}){return(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"},children:e?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("path",{fill:"none",d:"M0 0h256v256H0z"}),(0,u.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16",d:"M48 40l160 176M154.91 157.6a40 40 0 01-53.82-59.2M135.53 88.71a40 40 0 0132.3 35.53"}),(0,u.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16",d:"M208.61 169.1C230.41 149.58 240 128 240 128s-32-72-112-72a126 126 0 00-20.68 1.68M74 68.6C33.23 89.24 16 128 16 128s32 72 112 72a118.05 118.05 0 0054-12.6"})]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("path",{fill:"none",d:"M0 0h256v256H0z"}),(0,u.jsx)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16",d:"M128 56c-80 0-112 72-112 72s32 72 112 72 112-72 112-72-32-72-112-72z"}),(0,u.jsx)("circle",{cx:"128",cy:"128",r:"40",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})})},size:"sm"},g=(0,n.createVarsResolver)((e,{size:n})=>({root:{"--psi-icon-size":(0,t.getSize)(n,"psi-icon-size"),"--psi-button-size":(0,t.getSize)(n,"psi-button-size")}})),v=(0,l.factory)(e=>{let t=(0,a.useProps)(["Input","InputWrapper","PasswordInput"],x,e),{classNames:n,className:l,style:d,styles:v,unstyled:y,vars:b,required:j,error:M,success:w,leftSection:A,disabled:C,id:k,variant:I,inputContainer:P,description:S,label:B,size:T,errorProps:D,successProps:E,descriptionProps:O,labelProps:N,withAsterisk:F,inputWrapperOrder:H,wrapperProps:L,radius:z,rightSection:Z,rightSectionWidth:R,rightSectionPointerEvents:V,leftSectionWidth:_,visible:G,defaultVisible:W,onVisibilityChange:q,visibilityToggleIcon:$,visibilityToggleButtonProps:X,rightSectionProps:K,leftSectionProps:U,leftSectionPointerEvents:Y,withErrorStyles:Q,withSuccessStyles:J,mod:ee,attributes:et,dir:en,...ea}=t,eo=(0,m.useId)(k),[er,ei]=(0,h.useUncontrolled)({value:G,defaultValue:W,finalValue:!1,onChange:q}),el=(0,r.useStyles)({name:"PasswordInput",classes:p,props:t,className:l,style:d,classNames:n,styles:v,unstyled:y,attributes:et,vars:b,varsResolver:g}),{resolvedClassNames:es,resolvedStyles:ec}=(0,o.useResolvedStylesApi)({classNames:n,styles:v,props:t}),{styleProps:ed,rest:eu}=(0,i.extractStyleProps)(ea),ep=D?.id||`${eo}-error`,em=E?.id||`${eo}-success`,eh=O?.id||`${eo}-description`,ef=!!M&&"boolean"!=typeof M,ex=`${ef?ep:""} ${w&&"boolean"!=typeof w&&!ef?em:""} ${S?eh:""}`,eg=ex.trim().length>0?ex.trim():void 0,ev=(0,u.jsx)(s.ActionIcon,{...el("visibilityToggle"),disabled:C,radius:z,"aria-pressed":er,tabIndex:-1,"aria-label":"Toggle password visibility",...X,variant:X?.variant??"subtle",color:"gray",unstyled:y,onTouchEnd:e=>{e.preventDefault(),X?.onTouchEnd?.(e),ei(!er)},onMouseDown:e=>{e.preventDefault(),X?.onMouseDown?.(e),ei(!er)},onKeyDown:e=>{X?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),ei(!er))},children:(0,u.jsx)($,{reveal:er})});return(0,u.jsx)(c.Input.Wrapper,{required:j,id:eo,label:B,error:M,success:w,description:S,size:T,classNames:es,styles:ec,__staticSelector:"PasswordInput",__stylesApiProps:t,unstyled:y,withAsterisk:F,inputWrapperOrder:H,inputContainer:P,variant:I,labelProps:{...N,htmlFor:eo},descriptionProps:{...O,id:eh},errorProps:{...D,id:ep},successProps:{...E,id:em},mod:ee,attributes:et,...el("root"),...ed,...L,children:(0,u.jsx)(c.Input,{component:"div",dir:en,error:M,success:w,leftSection:A,size:T,classNames:{...es,input:(0,f.default)(p.input,es?.input)},styles:ec,radius:z,disabled:C,__staticSelector:"PasswordInput",__stylesApiProps:t,rightSectionWidth:R,rightSection:Z??ev,variant:I,unstyled:y,leftSectionWidth:_,rightSectionPointerEvents:V||"all",rightSectionProps:K,leftSectionProps:U,leftSectionPointerEvents:Y,withAria:!1,withErrorStyles:Q,withSuccessStyles:J,attributes:et,children:(0,u.jsx)("input",{required:j,"data-invalid":!!M||void 0,"data-with-left-section":!!A||void 0,...el("innerInput"),disabled:C,id:eo,dir:en,...eu,"aria-describedby":eg,autoComplete:eu.autoComplete||"off",type:er?"text":"password"})})})});v.classes={...d.InputBase.classes,...p},v.varsResolver=g,v.displayName="@mantine/core/PasswordInput",e.s(["PasswordInput",0,v],937389)},122057,419569,e=>{"use strict";var t=e.i(433512),n=e.i(481178),a=e.i(44091),o=e.i(391466),r=e.i(275519),i=e.i(232471),l=e.i(802046),s=e.i(191788);let c=(0,s.createContext)(null);e.s(["PillsInputContext",0,c],419569);var d={root:"m_7cda1cd6","root--default":"m_44da308b","root--contrast":"m_e3a01f8",label:"m_1e0e6180",remove:"m_ae386778",group:"m_1dcfd90b"},u=e.i(391398);let p=(0,s.createContext)(null),m=(0,n.createVarsResolver)((e,{gap:n},{size:a})=>({group:{"--pg-gap":void 0!==n?(0,t.getSize)(n):(0,t.getSize)(a,"pg-gap")}})),h=(0,r.factory)(e=>{let t=(0,a.useProps)("PillGroup",null,e),{classNames:n,className:r,style:l,styles:h,unstyled:f,vars:x,size:g,disabled:v,attributes:y,...b}=t,j=(0,s.use)(c)?.size||g||void 0,M=(0,o.useStyles)({name:"PillGroup",classes:d,props:t,className:r,style:l,classNames:n,styles:h,unstyled:f,attributes:y,vars:x,varsResolver:m,stylesCtx:{size:j},rootSelector:"group"});return(0,u.jsx)(p,{value:{size:j,disabled:v},children:(0,u.jsx)(i.Box,{size:j,...M("group"),...b})})});h.classes=d,h.varsResolver=m,h.displayName="@mantine/core/PillGroup";let f={variant:"default"},x=(0,n.createVarsResolver)((e,{radius:n},{size:a})=>({root:{"--pill-fz":(0,t.getSize)(a,"pill-fz"),"--pill-height":(0,t.getSize)(a,"pill-height"),"--pill-radius":void 0===n?void 0:(0,t.getRadius)(n)}})),g=(0,r.factory)(e=>{let t=(0,a.useProps)("Pill",f,e),{classNames:n,className:r,style:m,styles:h,unstyled:g,vars:v,variant:y,children:b,withRemoveButton:j,onRemove:M,removeButtonProps:w,radius:A,size:C,disabled:k,mod:I,attributes:P,...S}=t,B=(0,s.use)(p),T=(0,s.use)(c),D=C||B?.size||void 0,E=T?.variant==="filled"?"contrast":y||"default",O=(0,o.useStyles)({name:"Pill",classes:d,props:t,className:r,style:m,classNames:n,styles:h,unstyled:g,attributes:P,vars:v,varsResolver:x,stylesCtx:{size:D}});return(0,u.jsxs)(i.Box,{component:"span",variant:E,size:D,...O("root",{variant:E}),mod:[{"with-remove":j&&!k,disabled:k||B?.disabled},I],...S,children:[(0,u.jsx)("span",{...O("label"),children:b}),j&&(0,u.jsx)(l.CloseButton,{variant:"transparent",radius:A,tabIndex:-1,"aria-hidden":!0,unstyled:g,...w,...O("remove",{className:w?.className,style:w?.style}),onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),w?.onMouseDown?.(e)},onClick:e=>{e.stopPropagation(),M?.(),w?.onClick?.(e)}})]})});g.classes=d,g.varsResolver=x,g.displayName="@mantine/core/Pill",g.Group=h,e.s(["Pill",0,g],122057)},217633,e=>{"use strict";var t=e.i(44091),n=e.i(275519),a=e.i(586488),o=e.i(419569),r=e.i(391466),i=e.i(232471),l=e.i(561946),s={field:"m_45c4369d"},c=e.i(191788),d=e.i(332977),u=e.i(391398);let p={type:"visible"},m=(0,n.factory)(e=>{let n=(0,t.useProps)("PillsInputField",p,e),{classNames:a,className:m,style:h,styles:f,unstyled:x,vars:g,type:v,disabled:y,id:b,pointer:j,mod:M,attributes:w,ref:A,...C}=n,k=(0,c.use)(o.PillsInputContext),I=(0,c.use)(l.InputWrapperContext),P=(0,r.useStyles)({name:"PillsInputField",classes:s,props:n,className:m,style:h,classNames:a,styles:f,unstyled:x,attributes:w,rootSelector:"field"}),S=y||k?.disabled;return(0,u.jsx)(i.Box,{component:"input",ref:(0,d.useMergedRef)(A,k?.fieldRef),"data-type":v,disabled:S,mod:[{disabled:S,pointer:j},M],...P("field"),...C,id:I?.inputId||b,"aria-invalid":k?.hasError,"aria-describedby":I?.describedBy,type:"text",onMouseDown:e=>!j&&e.stopPropagation()})});m.classes=s,m.displayName="@mantine/core/PillsInputField";let h={size:"sm"},f=(0,n.factory)(e=>{let{children:n,onMouseDown:r,onClick:i,size:l,disabled:s,__staticSelector:d,error:p,variant:m,...f}=(0,t.useProps)(["Input","InputWrapper","PillsInput"],h,e),x=(0,c.useRef)(null);return(0,u.jsx)(o.PillsInputContext,{value:{fieldRef:x,size:l,disabled:s,hasError:!!p,variant:m},children:(0,u.jsx)(a.InputBase,{size:l,error:p,variant:m,component:"div","data-no-overflow":!0,onMouseDown:e=>{e.preventDefault(),r?.(e),x.current?.focus()},onClick:e=>{e.preventDefault(),e.currentTarget.closest("fieldset")?.disabled||(x.current?.focus(),i?.(e))},...f,multiline:!0,disabled:s,__staticSelector:d||"PillsInput",withAria:!1,children:n})})});f.displayName="@mantine/core/PillsInput",f.classes=a.InputBase.classes,f.Field=m,e.s(["PillsInput",0,f],217633)},798270,e=>{"use strict";function t(e,t,n,a){if(t===n||"before"===a&&n===t+1||"after"===a&&n===t-1)return e;let o=e.slice(),[r]=o.splice(t,1),i=t<n?n-1:n;return"after"===a&&(i+=1),o.splice(i,0,r),o}var n=e.i(191788);e.s(["usePillsReorder",0,function({value:e,onChange:a,enabled:o}){let r=(0,n.useRef)({draggedIndex:null,currentDropTarget:null}),i=(0,n.useRef)(null),l=(0,n.useRef)(null),s=(0,n.useRef)(e);s.current=e,(0,n.useEffect)(()=>{let e=i.current;!e||(i.current=null,((e,t)=>{if(e===t)return!0;if(e.length!==t.length)return!1;for(let n=0;n<e.length;n+=1)if(e[n]!==t[n])return!1;return!0})(s.current,e.expectedValue)&&e.container?.querySelector(`[data-mantine-pill-index="${e.index}"]`)?.focus())});let c=(0,n.useCallback)(e=>{l.current=e},[]);return{getPillProps:e=>{if(o)return{draggable:!0,tabIndex:-1,"data-mantine-pill-index":e,"aria-keyshortcuts":"Alt+ArrowLeft Alt+ArrowRight",onMouseDown:e=>{0===e.button&&e.stopPropagation()},onDragStart:t=>{t.stopPropagation(),t.dataTransfer.effectAllowed="move",t.dataTransfer.setData("text/plain",String(e)),r.current.draggedIndex=e;let n=t.currentTarget,a=n.getBoundingClientRect(),o=n.cloneNode(!0);o.removeAttribute("data-dragging"),o.removeAttribute("data-drag-over"),o.style.position="fixed",o.style.top="-9999px",o.style.left="-9999px",o.style.width=`${a.width}px`,o.style.height=`${a.height}px`,o.style.pointerEvents="none",document.body.appendChild(o),t.dataTransfer.setDragImage(o,t.clientX-a.left,t.clientY-a.top),setTimeout(()=>o.parentNode?.removeChild(o),0),requestAnimationFrame(()=>{n.setAttribute("data-dragging","true")})},onDragOver:t=>{let{draggedIndex:n}=r.current;if(null===n||n===e)return;let a=t.currentTarget,o=a.getBoundingClientRect(),i=t.clientX-o.left,l=("rtl"===getComputedStyle(a).direction?i>o.width/2:i<o.width/2)?"before":"after";t.preventDefault(),t.stopPropagation(),t.dataTransfer.dropEffect="move";let s=r.current.currentDropTarget;s&&s!==a&&s.removeAttribute("data-drag-over"),a.setAttribute("data-drag-over",l),r.current.currentDropTarget=a},onDragLeave:e=>{let t=e.currentTarget,n=e.relatedTarget;n&&t.contains(n)||(t.removeAttribute("data-drag-over"),r.current.currentDropTarget===t&&(r.current.currentDropTarget=null))},onDrop:n=>{n.preventDefault(),n.stopPropagation();let o=n.currentTarget,i=o.getAttribute("data-drag-over");o.removeAttribute("data-drag-over");let{draggedIndex:l}=r.current;if(null!==l&&i&&l!==e){let n=t(s.current,l,e,i);n!==s.current&&a(n)}r.current.draggedIndex=null,r.current.currentDropTarget=null},onDragEnd:e=>{e.currentTarget.removeAttribute("data-dragging");let t=r.current.currentDropTarget;t&&t.removeAttribute("data-drag-over"),r.current.draggedIndex=null,r.current.currentDropTarget=null},onKeyDown:n=>{if("ArrowLeft"!==n.key&&"ArrowRight"!==n.key)return;let o=n.currentTarget,r="rtl"===getComputedStyle(o).direction?"ArrowLeft"===n.key:"ArrowRight"===n.key,l=r?e+1:e-1;if(n.altKey){if(l<0||l>=s.current.length)return;n.preventDefault(),n.stopPropagation();let c=t(s.current,e,l,r?"after":"before");if(c===s.current)return;i.current={container:o.parentElement,index:l,expectedValue:c},a(c);return}if(l<0)return;let c=o.parentElement;if(c){if(n.preventDefault(),n.stopPropagation(),l>=s.current.length){let e;return void(!(e=c.lastElementChild)?null:e instanceof HTMLInputElement?e:e.querySelector("input"))?.focus()}c.querySelector(`[data-mantine-pill-index="${l}"]`)?.focus()}}}},getListProps:()=>o?{ref:c}:{},handleInputKeyDown:e=>{if(!o||"ArrowLeft"!==e.key)return;let t=e.currentTarget;if(0!==t.value.length&&(0!==t.selectionStart||0!==t.selectionEnd))return;let n=l.current;if(!n)return;let a=n.querySelectorAll("[data-mantine-pill-index]");0!==a.length&&(e.preventDefault(),a[a.length-1].focus())}}}],798270)},788350,e=>{"use strict";var t=e.i(44091),n=e.i(62904),a=e.i(391466),o=e.i(425254),r=e.i(275519),i=e.i(586488),l=e.i(205764),s=e.i(464224),c=e.i(734858),d=e.i(711976),u=e.i(212491),p=e.i(798270),m=e.i(122057),h=e.i(217633),f=e.i(463112);function x({splitChars:e,allowDuplicates:t,maxTags:n,value:a,currentTags:o,isDuplicate:r,onDuplicate:i}){let l=e?a.split(RegExp(`[${e.join("")}]`)).map(e=>e.trim()).filter(e=>""!==e):[a],s=[];if(t)s.push(...o,...l);else for(let e of(s.push(...o),l))(r?e=>r(e,s):e=>s.some(t=>t.toLowerCase()===e.toLowerCase()))(e)?i?.(e):s.push(e);return n?s.slice(0,n):s}var g=e.i(191788),v=e.i(107315),y=e.i(332977),b=e.i(579560),j=e.i(391398);let M={maxTags:1/0,acceptValueOnBlur:!0,splitChars:[","],hiddenInputValuesDivider:",",openOnFocus:!0,size:"sm"},w=(0,r.factory)(e=>{let r=(0,t.useProps)(["Input","InputWrapper","TagsInput"],M,e),{classNames:i,className:w,style:A,styles:C,unstyled:k,vars:I,size:P,value:S,defaultValue:B,onChange:T,onKeyDown:D,maxTags:E,allowDuplicates:O,onDuplicate:N,variant:F,data:H,dropdownOpened:L,defaultDropdownOpened:z,onDropdownOpen:Z,onDropdownClose:R,selectFirstOptionOnChange:V,selectFirstOptionOnDropdownOpen:_,onOptionSubmit:G,comboboxProps:W,filter:q,limit:$,withScrollArea:X,maxDropdownHeight:K,floatingHeight:U,searchValue:Y,defaultSearchValue:Q,onSearchChange:J,readOnly:ee,disabled:et,splitChars:en,onFocus:ea,onBlur:eo,onPaste:er,radius:ei,rightSection:el,rightSectionWidth:es,rightSectionPointerEvents:ec,rightSectionProps:ed,leftSection:eu,leftSectionWidth:ep,leftSectionPointerEvents:em,leftSectionProps:eh,inputContainer:ef,inputWrapperOrder:ex,withAsterisk:eg,required:ev,labelProps:ey,descriptionProps:eb,errorProps:ej,successProps:eM,wrapperProps:ew,description:eA,label:eC,error:ek,success:eI,withErrorStyles:eP,withSuccessStyles:eS,name:eB,form:eT,id:eD,clearable:eE,clearSectionMode:eO,clearButtonProps:eN,hiddenInputProps:eF,hiddenInputValuesDivider:eH,mod:eL,renderOption:ez,renderPill:eZ,onRemove:eR,onClear:eV,onMaxTags:e_,scrollAreaProps:eG,acceptValueOnBlur:eW,isDuplicate:eq,openOnFocus:e$,attributes:eX,ref:eK,loading:eU,loadingPosition:eY,withPillsReorder:eQ,...eJ}=r,e0=(0,v.useId)(eD),e1=(0,l.getParsedComboboxData)(H),e2=(0,s.getOptionsLockup)(e1),e8=(0,g.useRef)(null),e6=(0,y.useMergedRef)(e8,eK),e4=(0,c.useCombobox)({opened:L,defaultOpened:z,onDropdownOpen:()=>{Z?.(),_&&e4.selectFirstOption()},onDropdownClose:()=>{R?.(),e4.resetSelectedOption()}}),{styleProps:e3,rest:{type:e5,autoComplete:e9,...e7}}=(0,o.extractStyleProps)(eJ),[te,tt]=(0,b.useUncontrolled)({value:S,defaultValue:B,finalValue:[],onChange:T}),{getPillProps:tn,getListProps:ta,handleInputKeyDown:to}=(0,p.usePillsReorder)({value:te,onChange:tt,enabled:eQ&&!et&&!ee}),[tr,ti]=(0,b.useUncontrolled)({value:Y,defaultValue:Q,finalValue:"",onChange:J}),tl=e=>{ti(e),e4.resetSelectedOption()},ts=(0,a.useStyles)({name:"TagsInput",classes:{},props:r,classNames:i,styles:C,unstyled:k}),{resolvedClassNames:tc,resolvedStyles:td}=(0,n.useResolvedStylesApi)({props:r,styles:C,classNames:i}),tu=e=>{(eq?eq(e,te):te.some(t=>t.toLowerCase()===e.toLowerCase()))&&(N?.(e),!O)?tl(""):te.length>=E?e_?.(e):(G?.(e),tl(""),e.length>0&&tt([...te,e]))},tp=te.map((e,t)=>{let n=()=>{let n=te.slice();n.splice(t,1),tt(n),eR?.(e)},a=tn(t);return eZ?(0,j.jsx)(g.Fragment,{children:eZ({option:e2[e]||{value:e,label:e,disabled:!1},value:e,onRemove:n,disabled:et||ee,reorderProps:a})},`${e}-${t}`):(0,j.jsx)(m.Pill,{withRemoveButton:!ee,onRemove:n,unstyled:k,disabled:et,attributes:eX,...ts("pill"),...a,children:e},`${e}-${t}`)});(0,g.useEffect)(()=>{V&&e4.selectFirstOption()},[V,te,tr]);let tm=(0,j.jsx)(d.Combobox.ClearButton,{...eN,onClear:()=>{tt([]),tl(""),e8.current?.focus(),e4.openDropdown(),eV?.()}});return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(d.Combobox,{store:e4,classNames:tc,styles:td,unstyled:k,size:P,readOnly:ee,__staticSelector:"TagsInput",attributes:eX,floatingHeight:U,onOptionSubmit:e=>{G?.(e),tl(""),te.length>=E?e_?.(e):tt([...te,e2[e].value]),e4.resetSelectedOption()},...W,children:[(0,j.jsx)(d.Combobox.DropdownTarget,{children:(0,j.jsx)(h.PillsInput,{...e3,__staticSelector:"TagsInput",classNames:tc,styles:td,unstyled:k,size:P,className:w,style:A,variant:F,disabled:et,radius:ei,rightSection:el,__clearSection:tm,__clearable:eE&&te.length>0&&!et&&!ee,__clearSectionMode:eO,rightSectionWidth:es,rightSectionPointerEvents:ec,rightSectionProps:ed,leftSection:eu,leftSectionWidth:ep,leftSectionPointerEvents:em,leftSectionProps:eh,loading:eU,loadingPosition:eY,inputContainer:ef,inputWrapperOrder:ex,withAsterisk:eg,required:ev,labelProps:ey,descriptionProps:eb,errorProps:ej,successProps:eM,wrapperProps:ew,description:eA,label:eC,error:ek,success:eI,withErrorStyles:eP,withSuccessStyles:eS,__stylesApiProps:{...r,multiline:!0},id:e0,mod:eL,attributes:eX,children:(0,j.jsxs)(m.Pill.Group,{disabled:et,unstyled:k,...ts("pillsList"),...ta(),children:[tp,(0,j.jsx)(d.Combobox.EventsTarget,{autoComplete:e9,withExpandedAttribute:!0,children:(0,j.jsx)(h.PillsInput.Field,{...e7,ref:e6,...ts("inputField"),unstyled:k,onKeyDown:e=>{if(D?.(e),e.defaultPrevented||e.isPropagationStopped())return;let t=tr.trim(),{length:n}=t;if(en.includes(e.key)&&n>0&&(tt(x({splitChars:en,allowDuplicates:O,maxTags:E,value:tr,currentTags:te,isDuplicate:eq,onDuplicate:N})),tl(""),e.preventDefault()),"Enter"===e.key&&n>0&&!e.nativeEvent.isComposing){if(e.preventDefault(),document.querySelector(`#${e4.listId} [data-combobox-option][data-combobox-selected]`))return;tu(t)}"Backspace"!==e.key||0!==n||!(te.length>0)||e.nativeEvent.isComposing||ee||(eR?.(te[te.length-1]),tt(te.slice(0,te.length-1))),to(e)},onFocus:e=>{ea?.(e),e$&&e4.openDropdown()},onBlur:e=>{eo?.(e),eW&&tu(tr),e4.closeDropdown()},onPaste:e=>{if(er?.(e),e.preventDefault(),e.clipboardData){let t=e.clipboardData.getData("text/plain");tt(x({splitChars:en,allowDuplicates:O,maxTags:E,value:`${tr}${t}`,currentTags:te,isDuplicate:eq,onDuplicate:N})),tl("")}},value:tr,onChange:e=>tl(e.currentTarget.value),required:ev&&0===te.length,disabled:et,readOnly:ee,id:e0})})]})})}),(0,j.jsx)(u.OptionsDropdown,{data:function({data:e,value:t}){let n=t.map(e=>e.trim().toLowerCase());return e.reduce((e,t)=>((0,f.isOptionsGroup)(t)?e.push({group:t.group,items:t.items.filter(e=>-1===n.indexOf(e.label.toLowerCase().trim()))}):-1===n.indexOf(t.label.toLowerCase().trim())&&e.push(t),e),[])}({data:e1,value:te}),hidden:ee||et,filter:q,search:tr,limit:$,hiddenWhenEmpty:!0,withScrollArea:X,maxDropdownHeight:K,unstyled:k,labelId:eC?`${e0}-label`:void 0,"aria-label":eC?void 0:eJ["aria-label"],renderOption:ez,scrollAreaProps:eG})]}),(0,j.jsx)(d.Combobox.HiddenInput,{name:eB,form:eT,value:te,valuesDivider:eH,disabled:et,...eF})]})});w.classes={...i.InputBase.classes,...d.Combobox.classes},w.displayName="@mantine/core/TagsInput",e.s(["TagsInput",0,w],788350)},530514,e=>{"use strict";e.s(["createTheme",0,function(e){return e}])},169972,387136,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64Zm12,52H168a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24Zm176,16H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm-48,40H40a12,12,0,0,0,0,24H168a12,12,0,0,0,0-24Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,64V168a16,16,0,0,1-16,16H40V64Z",opacity:"0.2"}),t.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,48H168a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm176,24H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-48,40H40a8,8,0,0,0,0,16H168a8,8,0,0,0,0-16Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM160,184H64a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm32-32H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16ZM56,112a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H64A8,8,0,0,1,56,112ZM192,88H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64Zm6,46H168a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12Zm176,28H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm-48,40H40a6,6,0,0,0,0,12H168a6,6,0,0,0,0-12Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64Zm8,48H168a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Zm176,24H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm-48,40H40a8,8,0,0,0,0,16H168a8,8,0,0,0,0-16Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm4,44H168a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8Zm176,32H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm-48,40H40a4,4,0,0,0,0,8H168a4,4,0,0,0,0-8Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(n.default,{ref:o,...e,weights:a}));o.displayName="TextAlignLeftIcon",e.s(["TextAlignLeftIcon",0,o],169972);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M28,64A12,12,0,0,1,40,52H216a12,12,0,0,1,0,24H40A12,12,0,0,1,28,64ZM216,92H88a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,40H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Zm0,40H88a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,64V184H56a16,16,0,0,1-16-16V64Z",opacity:"0.2"}),t.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM216,96H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H96a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm0-32H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M34,64a6,6,0,0,1,6-6H216a6,6,0,0,1,0,12H40A6,6,0,0,1,34,64ZM216,98H88a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm0,40H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Zm0,40H88a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M32,64a8,8,0,0,1,8-8H216a8,8,0,0,1,0,16H40A8,8,0,0,1,32,64ZM216,96H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Zm0,40H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M36,64a4,4,0,0,1,4-4H216a4,4,0,0,1,0,8H40A4,4,0,0,1,36,64Zm180,36H88a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm0,40H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Zm0,40H88a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"}))]]),i=t.forwardRef((e,a)=>t.createElement(n.default,{ref:a,...e,weights:r}));i.displayName="TextAlignRightIcon",e.s(["TextAlignRightIcon",0,i],387136)},400117,e=>{"use strict";var t=e.i(951254),n=e.i(839608);let a=["xs","sm","md","lg","xl"];e.s(["useMatches",0,function(e,o){let r=(0,t.useMantineTheme)();var i=a[[(0,n.useMediaQuery)(`(min-width: ${r.breakpoints.xs})`,!1,o),(0,n.useMediaQuery)(`(min-width: ${r.breakpoints.sm})`,!1,o),(0,n.useMediaQuery)(`(min-width: ${r.breakpoints.md})`,!1,o),(0,n.useMediaQuery)(`(min-width: ${r.breakpoints.lg})`,!1,o),(0,n.useMediaQuery)(`(min-width: ${r.breakpoints.xl})`,!1,o)].findLastIndex(e=>e)];if(!i)return e.base;let l=a.indexOf(i);for(;l>=0;){if(a[l]in e)return e[a[l]];l-=1}return e.base}])},366586,e=>{"use strict";var t=e.i(648863),n=e.i(232471),a=e.i(391398);let o={type:"code",component:function(){return(0,a.jsxs)(n.Box,{className:"m_3b7b8cc2",children:["Box component with ",(0,a.jsx)("span",{className:"m_b0c0466b",children:"some styles"})]})},code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { Box } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Box className={classes.box}>
      Box component with <span className={classes.highlight}>some styles</span>
    </Box>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`
.box {
  font-size: var(--mantine-font-size-xl);
  text-align: center;
  font-weight: 600;
}

.highlight {
  padding: 4px 10px;
  display: inline-block;
  border-radius: var(--mantine-radius-md);
  background: var(--mantine-color-blue-light);
  color: var(--mantine-color-blue-light-color);
}
`}]};var r=e.i(725695);let i={type:"code",component:function(){return(0,a.jsxs)(r.Group,{children:[(0,a.jsx)("button",{type:"button",className:"mantine-focus-auto",children:"Focus auto"}),(0,a.jsx)("button",{type:"button",className:"mantine-focus-always",children:"Focus always"}),(0,a.jsx)("button",{type:"button",className:"mantine-focus-never",children:"Focus never"}),(0,a.jsx)("button",{type:"button",className:"mantine-active",children:"Active"})]})},code:`
import { Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <button type="button" className="mantine-focus-auto">
        Focus auto
      </button>
      <button type="button" className="mantine-focus-always">
        Focus always
      </button>
      <button type="button" className="mantine-focus-never">
        Focus never
      </button>
      <button type="button" className="mantine-active">
        Active
      </button>
    </Group>
  );
}
`},l={type:"code",component:function(){return(0,a.jsx)("div",{className:"m_f2874dbd",children:"Demo"})},code:[{fileName:"Demo.module.css",code:`
.demo {
  background-color: var(--mantine-color-blue-filled);
  color: var(--mantine-color-white);
  padding: var(--mantine-spacing-md);
  text-align: center;

  @media (min-width: em(750px)) {
    background-color: var(--mantine-color-red-filled);
  }
}
`,language:"scss"},{fileName:"Demo.tsx",code:`
import classes from './Demo.module.css';

function Demo() {
  return <div className={classes.demo}>Demo</div>;
}
`,language:"tsx"}]};var s=e.i(841209);let c={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.TextInput,{size:"xs",hiddenFrom:"sm",label:"My input",placeholder:"My input"}),(0,a.jsx)(s.TextInput,{size:"xl",visibleFrom:"sm",label:"My input",placeholder:"My input"})]})},code:[{fileName:"Demo.tsx",code:`
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput size="xs" hiddenFrom="sm" label="My input" placeholder="My input" />
      <TextInput size="xl" visibleFrom="sm" label="My input" placeholder="My input" />
    </>
  );
}
`,language:"tsx"}]};var d=e.i(485108),u=e.i(431868),p=e.i(779177),m=e.i(839608);let h={type:"code",component:function(){return(0,a.jsx)(u.Tooltip,{label:(0,m.useMediaQuery)(`(max-width: ${(0,p.em)(750)})`)?"Mobile":"Desktop",children:(0,a.jsx)(d.Button,{children:"Hover me"})})},code:`
import { Tooltip, Button, em } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function Demo() {
  const isMobile = useMediaQuery(\`(max-width: \${em(750)})\`);

  return (
    <Tooltip label={isMobile ? 'Mobile' : 'Desktop'}>
      <Button>Hover me</Button>
    </Tooltip>
  );
}
`};var f=e.i(191788);let x={type:"code",component:function(){let[e,t]=(0,f.useState)(""),[n,o]=(0,f.useState)(!1);return(0,a.jsx)(s.TextInput,{label:"Floating label input",labelProps:{"data-floating":n||e.length>0||void 0},classNames:{root:"m_bf550b40",input:"m_2acd192c",label:"m_2af14056"},onFocus:()=>o(!0),onBlur:()=>o(!1),value:e,onChange:e=>t(e.currentTarget.value)})},maxWidth:360,centered:!0,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import { TextInput } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);
  const floating = focused || value.length > 0 || undefined;

  return (
    <TextInput
      label="Floating label input"
      labelProps={{ 'data-floating': floating }}
      classNames={{
        root: classes.root,
        input: classes.input,
        label: classes.label,
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`
.root {
  position: relative;
  margin-top: 5px;
}

.input {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom-width: 2px;
  border-radius: 0;
  padding-left: 0;
  background-color: var(--mantine-color-body);
}

.label {
  position: absolute;
  z-index: 1;
  pointer-events: none;
  top: 7px;
  color: var(--mantine-color-placeholder);
  font-weight: 400;
  font-size: var(--mantine-font-size-sm);
  transition: color 100ms ease, transform 100ms ease, font-size 100ms ease;

  &[data-floating] {
    transform: translateY(-20px);
    font-size: var(--mantine-font-size-xs);
    color: var(--mantine-color-text);
  }
}
`}]},g={type:"code",component:function(){let e="linear-gradient(45deg, var(--mantine-color-pink-filled) 0%, var(--mantine-color-orange-filled) 50%, var(--mantine-color-yellow-filled) 100%)";return(0,a.jsx)(d.Button,{styles:{root:{padding:2,border:0,backgroundImage:e},inner:{background:"var(--mantine-color-body)",color:"var(--mantine-color-text)",borderRadius:"calc(var(--button-radius) - 2px)",paddingLeft:"var(--mantine-spacing-md)",paddingRight:"var(--mantine-spacing-md)"},label:{backgroundImage:e,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"}},children:"Gradient button"})},centered:!0,code:`
import { Button } from '@mantine/core';

function Demo() {
  const gradient =
    'linear-gradient(45deg, var(--mantine-color-pink-filled) 0%, var(--mantine-color-orange-filled) 50%, var(--mantine-color-yellow-filled) 100%)';

  return (
    <Button
      styles={{
        root: {
          padding: 2,
          border: 0,
          backgroundImage: gradient,
        },

        inner: {
          background: 'var(--mantine-color-body)',
          color: 'var(--mantine-color-text)',
          borderRadius: 'calc(var(--button-radius) - 2px)',
          paddingLeft: 'var(--mantine-spacing-md)',
          paddingRight: 'var(--mantine-spacing-md)',
        },

        label: {
          backgroundImage: gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
      }}
    >
      Gradient button
    </Button>
  );
}
`},v={type:"code",component:function(){return(0,a.jsx)(n.Box,{w:{base:200,sm:400,lg:500},py:{base:"xs",sm:"md",lg:"xl"},bg:{base:"blue.7",sm:"red.7",lg:"green.7"},c:"#fff",ta:"center",mx:"auto",children:"Box with responsive style props"})},code:`
import { Box } from '@mantine/core';

function Demo() {
  return (
    <Box
      w={{ base: 200, sm: 400, lg: 500 }}
      py={{ base: 'xs', sm: 'md', lg: 'xl' }}
      bg={{ base: 'blue.7', sm: 'red.7', lg: 'green.7' }}
      c="#fff"
      ta="center"
      mx="auto"
    >
      Box with responsive style props
    </Box>
  );
}
`};var y=e.i(169972),b=e.i(387136),j=e.i(658109),M=e.i(323283);let w={type:"code",component:function(){let{toggleDirection:e,dir:t,setDirection:n}=(0,M.useDirection)();return(0,f.useEffect)(()=>()=>n("ltr"),[]),(0,a.jsx)(j.ActionIcon,{onClick:()=>e(),variant:"default",size:"lg",children:"rtl"===t?(0,a.jsx)(y.TextAlignLeftIcon,{}):(0,a.jsx)(b.TextAlignRightIcon,{})})},centered:!0,code:`
import { ActionIcon, useDirection } from '@mantine/core';
import { TextAlignLeftIcon, TextAlignRightIcon } from '@phosphor-icons/react';

function Demo() {
  const { toggleDirection, dir } = useDirection();
  return (
    <ActionIcon onClick={() => toggleDirection()} variant="default" size="lg">
      {dir === 'rtl' ? (
        <TextAlignLeftIcon />
      ) : (
        <TextAlignRightIcon />
      )}
    </ActionIcon>
  );
}
`},A={type:"code",component:function(){return(0,a.jsx)("div",{className:"m_7bd29d5a",children:"Demo"})},code:[{fileName:"Demo.module.css",code:`
.demo {
  text-align: center;
  color: var(--mantine-color-white);
  padding: var(--mantine-spacing-md);

  /* LTR styles */
  background-color: var(--mantine-color-blue-filled);

  @mixin rtl {
    /* RTL styles override LTR styles */
    background-color: var(--mantine-color-red-filled);
  }
}
`,language:"scss"},{fileName:"Demo.tsx",code:`
import classes from './Demo.module.css';

function Demo() {
  return <div className={classes.demo}>Demo</div>;
}
`,language:"tsx"}]};var C={root:"m_8b35c16f",section:"m_27c75738"},k=e.i(858508);function I(e){return(0,a.jsx)(d.Button,{...e,classNames:C})}let P={type:"code",component:function(){return(0,a.jsxs)(r.Group,{children:[(0,a.jsx)(I,{leftSection:"12",rightSection:(0,a.jsx)(k.ArrowRightIcon,{size:18}),children:"Send files"}),(0,a.jsx)(I,{leftSection:"3",rightSection:(0,a.jsx)(k.ArrowRightIcon,{size:18}),disabled:!0,children:"Send files"})]})},centered:!0,code:[{fileName:"Demo.module.css",code:`
.root {
  border-top-left-radius: var(--mantine-radius-xl);
  border-bottom-left-radius: var(--mantine-radius-xl);
  padding-left: 4px;

  /* The following styles will be applied only when button is disabled */
  &[data-disabled] {
    /* You can use Mantine PostCSS mixins inside data attributes */
    @mixin light {
      border: 1px solid var(--mantine-color-gray-2);
    }

    @mixin dark {
      border: 1px solid var(--mantine-color-dark-4);
    }

    /* You can target child elements that are inside .root[data-disabled] */
    & .section[data-position='left'] {
      opacity: 0.6;
    }
  }
}

.section {
  /* Apply styles only to left section */
  &[data-position='left'] {
    --section-size: calc(var(--button-height) - 8px);

    background-color: var(--mantine-color-body);
    color: var(--mantine-color-text);
    height: var(--section-size);
    width: var(--section-size);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--mantine-radius-xl);
  }

  &[data-position='right'] {
    @mixin rtl {
      transform: rotate(180deg);
    }
  }
}
`,language:"scss"},{fileName:"Demo.tsx",code:`
import { Button, ButtonProps, Group } from '@mantine/core';
import { ArrowRightIcon } from '@phosphor-icons/react';
import classes from './Demo.module.css';

function SendFilesButton(props: ButtonProps & React.ComponentProps<'button'>) {
  return <Button {...props} classNames={classes} />;
}

function Demo() {
  return (
    <Group>
      <SendFilesButton
        leftSection="12"
        rightSection={<ArrowRightIcon size={18} />}
      >
        Send files
      </SendFilesButton>
      <SendFilesButton
        leftSection="3"
        rightSection={<ArrowRightIcon size={18} />}
        disabled
      >
        Send files
      </SendFilesButton>
    </Group>
  );
}
`,language:"tsx"}]};var S=e.i(383312);let B={type:"code",component:function(){return(0,a.jsxs)(S.Tabs,{defaultValue:"chat",unstyled:!0,children:[(0,a.jsxs)(S.Tabs.List,{children:[(0,a.jsx)(S.Tabs.Tab,{value:"chat",children:"Chat"}),(0,a.jsx)(S.Tabs.Tab,{value:"gallery",children:"Gallery"}),(0,a.jsx)(S.Tabs.Tab,{value:"account",children:"Account"})]}),(0,a.jsx)(S.Tabs.Panel,{value:"chat",children:"Chat panel"}),(0,a.jsx)(S.Tabs.Panel,{value:"gallery",children:"Gallery panel"}),(0,a.jsx)(S.Tabs.Panel,{value:"account",children:"Account panel"})]})},code:`
import { Tabs } from '@mantine/core';

function Demo() {
  return (
    <Tabs defaultValue="chat" unstyled>
      <Tabs.List>
        <Tabs.Tab value="chat">Chat</Tabs.Tab>
        <Tabs.Tab value="gallery">Gallery</Tabs.Tab>
        <Tabs.Tab value="account">Account</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="chat">Chat panel</Tabs.Panel>
      <Tabs.Panel value="gallery">Gallery panel</Tabs.Panel>
      <Tabs.Panel value="account">Account panel</Tabs.Panel>
    </Tabs>
  );
}
`},T=`
import { Button, PartialVarsResolver, ButtonFactory, Group } from '@mantine/core';

const varsResolver: PartialVarsResolver<ButtonFactory> = (theme, props) => {
  if (props.size === 'xxl') {
    return {
      root: {
        '--button-height': '60px',
        '--button-padding-x': '30px',
        '--button-fz': '24px',
      },
    };
  }

  if (props.size === 'xxs') {
    return {
      root: {
        '--button-height': '24px',
        '--button-padding-x': '10px',
        '--button-fz': '10px',
      },
    };
  }

  return { root: {} };
};

function Demo() {
  return (
    <Group>
      <Button vars={varsResolver} size="xxl">
        XXL Button
      </Button>
      <Button vars={varsResolver} size="xxs">
        XXS Button
      </Button>
    </Group>
  );
}
`,D=`
import { Button, Group, MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  components: {
    Button: Button.extend({
      vars: (theme, props) => {
        if (props.size === 'xxl') {
          return {
            root: {
              '--button-height': '60px',
              '--button-padding-x': '30px',
              '--button-fz': '24px',
            },
          };
        }

        if (props.size === 'xxs') {
          return {
            root: {
              '--button-height': '24px',
              '--button-padding-x': '10px',
              '--button-fz': '10px',
            },
          };
        }

        return { root: {} };
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button size="xxl">XXL Button</Button>
        <Button size="xxs">XXS Button</Button>
      </Group>
    </MantineProvider>
  );
}
`,E=(e,t)=>"xxl"===t.size?{root:{"--button-height":"60px","--button-padding-x":"30px","--button-fz":"24px"}}:"xxs"===t.size?{root:{"--button-height":"24px","--button-padding-x":"10px","--button-fz":"10px"}}:{root:{}};d.Button.extend({vars:(e,t)=>"xxl"===t.size?{root:{"--button-height":"60px","--button-padding-x":"30px","--button-fz":"24px"}}:"xxs"===t.size?{root:{"--button-height":"24px","--button-padding-x":"10px","--button-fz":"10px"}}:{root:{}}});let O={type:"code",component:function(){return(0,a.jsxs)(r.Group,{children:[(0,a.jsx)(d.Button,{vars:E,size:"xxl",children:"XXL Button"}),(0,a.jsx)(d.Button,{vars:E,size:"xxs",children:"XXS Button"})]})},centered:!0,code:[{code:D,language:"tsx",fileName:"MantineProvider.tsx"},{code:T,language:"tsx",fileName:"Inline.tsx"}]};var N={input:"m_93131372"},F=e.i(294788);let H={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(F.Input,{classNames:N,variant:"underline",placeholder:"Underline input"}),(0,a.jsx)(F.Input,{classNames:N,variant:"filled",placeholder:"Filled input",mt:"md"})]})},maxWidth:360,centered:!0,code:[{fileName:"Demo.tsx",code:`
import { Input, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

// It is better to add new variants in theme.components
// This way you will be able to use them in anywhere in the app
const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  }
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Input variant="underline" placeholder="Underline input" />
      <Input variant="filled" placeholder="Filled input" mt="md" />
    </MantineProvider>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.input {
  &[data-variant='underline'] {
    border-bottom: 2px solid;
    border-radius: 0;
    padding-left: 0;
    padding-right: 0;

    @mixin light {
      border-color: var(--mantine-color-gray-3);
    }

    @mixin dark {
      border-color: var(--mantine-color-dark-3);
    }

    &:focus {
      border-color: var(--mantine-color-blue-filled);
    }
  }
}
`,language:"scss"}]};var L=e.i(951254),z=e.i(530514);let Z=`
import { Input, createTheme, MantineProvider } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Input placeholder="Size XXL" size="xxl" />
      <Input placeholder="Size XXS" size="xxs" mt="md" />
    </MantineProvider>
  );
}
`,R=`
.wrapper {
  &[data-size='xxl'] {
    & .input {
      padding-left: 28px;
      padding-right: 28px;
      height: 68px;
      font-size: 28px;
    }
  }

  &[data-size='xxs'] {
    & .input {
      padding-left: 10px;
      padding-right: 10px;
      height: 28px;
      font-size: 10px;
    }
  }
}
`,V=(0,z.createTheme)({components:{Input:F.Input.extend({classNames:{wrapper:"m_b4c95450",input:"m_2be5f2c7"}})}}),_={type:"code",component:function(){return(0,a.jsxs)(L.MantineThemeProvider,{theme:V,children:[(0,a.jsx)(F.Input,{placeholder:"Size XXL",size:"xxl"}),(0,a.jsx)(F.Input,{placeholder:"Size XXS",size:"xxs",mt:"md"})]})},maxWidth:360,centered:!0,code:[{language:"tsx",code:Z,fileName:"Demo.tsx"},{language:"scss",code:R,fileName:"Demo.module.css"}]};var G=e.i(56206);let W=`
import cx from 'clsx';
import { MantineProvider, createTheme, TextInput } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    TextInput: TextInput.extend({
      classNames: (_theme, props) => ({
        label: cx({ [classes.labelRequired]: props.required }),
        input: cx({ [classes.inputError]: props.error }),
      }),
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput required label="Required input" placeholder="Required input" />
      <TextInput error label="Input with error" placeholder="Input with error" mt="md" />
    </MantineProvider>
  );
}
`,q=`
.labelRequired {
  color: var(--mantine-color-red-filled);
}

.inputError {
  background-color: var(--mantine-color-red-light);
}
`,$=(0,z.createTheme)({components:{TextInput:s.TextInput.extend({classNames:(e,t)=>({label:(0,G.default)({m_686577e7:t.required}),input:(0,G.default)({m_933d67aa:t.error})})})}}),X={type:"code",component:function(){return(0,a.jsxs)(L.MantineThemeProvider,{theme:$,children:[(0,a.jsx)(s.TextInput,{required:!0,label:"Required input",placeholder:"Required input"}),(0,a.jsx)(s.TextInput,{error:!0,label:"Input with error",placeholder:"Input with error",mt:"md"})]})},code:[{fileName:"Demo.tsx",code:W,language:"tsx"},{fileName:"Demo.module.css",code:q,language:"scss"}]};var K=e.i(60695);let U={type:"code",component:function(){return(0,f.useEffect)(()=>()=>{document.documentElement.style.fontSize="100%"},[]),(0,a.jsx)(K.Slider,{defaultValue:100,min:70,max:130,onChange:e=>{document.documentElement.style.fontSize=`${e}%`}})},maxWidth:340,centered:!0,code:`
import { Slider } from '@mantine/core';

function Demo() {
  return (
    <Slider
      defaultValue={100}
      min={70}
      max={130}
      onChange={(value) => {
        document.documentElement.style.fontSize = \`\${value}%\`;
      }}
    />
  );
}
`},Y={type:"code",component:function(){return(0,a.jsxs)(r.Group,{justify:"center",children:[(0,a.jsx)(d.Button,{hiddenFrom:"sm",color:"orange",children:"Hidden from sm"}),(0,a.jsx)(d.Button,{visibleFrom:"sm",color:"cyan",children:"Visible from sm"}),(0,a.jsx)(d.Button,{visibleFrom:"md",color:"pink",children:"Visible from md"})]})},code:`
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Button hiddenFrom="sm" color="orange">
        Hidden from sm
      </Button>
      <Button visibleFrom="sm" color="cyan">
        Visible from sm
      </Button>
      <Button visibleFrom="md" color="pink">
        Visible from md
      </Button>
    </Group>
  );
}
`},Q={type:"code",centered:!0,component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.Button,{color:"cyan",lightHidden:!0,children:"Visible in dark color scheme only"}),(0,a.jsx)(d.Button,{color:"pink",darkHidden:!0,children:"Visible in light color scheme only"})]})},code:`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <>
      <Button color="cyan" lightHidden>
        Visible in dark color scheme only
      </Button>

      <Button color="pink" darkHidden>
        Visible in light color scheme only
      </Button>
    </>
  );
}
`},J={type:"code",component:function(){return(0,a.jsx)("div",{className:"m_cd12fd1e",children:(0,a.jsx)("div",{className:"m_d4760060",children:"Resize parent element to see container query in action"})})},code:[{code:`.root {
  min-width: 200px;
  max-width: 100%;
  min-height: 120px;
  container-type: inline-size;
  overflow: auto;
  resize: horizontal;
}

.child {
  background-color: var(--mantine-color-dimmed);
  color: var(--mantine-color-white);
  padding: var(--mantine-spacing-md);

  @container (max-width: 500px) {
    background-color: var(--mantine-color-blue-filled);
  }

  @container (max-width: 300px) {
    background-color: var(--mantine-color-red-filled);
  }
}`,language:"scss",fileName:"Demo.module.css"},{code:`
import classes from './Demo.module.css';

function Demo() {
  return (
    <div className={classes.root}>
      <div className={classes.child}>Resize parent element to see container query in action</div>
    </div>
  );
}
`,language:"tsx",fileName:"Demo.tsx"}]};var ee=e.i(400117);let et={type:"code",component:function(){return(0,a.jsx)(n.Box,{bg:(0,ee.useMatches)({base:"blue.9",sm:"orange.9",lg:"red.9"}),c:"white",p:"xl",children:"Box with color that changes based on screen size"})},code:`
import { Box, useMatches } from '@mantine/core';

function Demo() {
  const color = useMatches({
    base: 'blue.9',
    sm: 'orange.9',
    lg: 'red.9',
  });

  return (
    <Box bg={color} c="white" p="xl">
      Box with color that changes based on screen size
    </Box>
  );
}
`};var en=(0,t.__exportAll)({className:()=>o,classNames:()=>x,classNamesProps:()=>X,containers:()=>J,customVariant:()=>H,dataAttributes:()=>P,dataSize:()=>_,directionControl:()=>w,globalClasses:()=>i,hiddenVisible:()=>Y,lightDarkHidden:()=>Q,remSlider:()=>U,responsive:()=>l,responsiveStyleProps:()=>v,rtlMixin:()=>A,sizesMedia:()=>c,styles:()=>g,unstyled:()=>B,useMatchesHook:()=>et,useMediaQueryHook:()=>h,vars:()=>O});e.s(["StylesDemos",0,en],366586)},789859,328233,482593,e=>{"use strict";var t=e.i(191788),n=e.i(56206),a=e.i(778979),o=e.i(883388),r=e.i(270627);function i(){return(i=Object.assign.bind()).apply(null,arguments)}var l=e=>{var l=e.cx,s=e.cy,c=e.r,d=e.className,u=(0,n.clsx)("recharts-dot",d);return(0,r.isNumber)(l)&&(0,r.isNumber)(s)&&(0,r.isNumber)(c)?t.createElement("circle",i({},(0,o.svgPropertiesNoEvents)(e),(0,a.adaptEventHandlers)(e),{className:u,cx:l,cy:s,r:c})):null};e.s(["Dot",0,l],328233);var s=e.i(815954),c=e.i(106043),d=e.i(62037),u=e.i(561622),p=e.i(446354),m=["points"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach(function(t){var a,o,r;a=e,o=t,r=n[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(o))in a?Object.defineProperty(a,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[o]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function x(){return(x=Object.assign.bind()).apply(null,arguments)}function g(e){var a=e.option,o=e.dotProps,r=e.className;if((0,t.isValidElement)(a))return(0,t.cloneElement)(a,o);if("function"==typeof a)return a(o);var i=(0,n.clsx)(r,"boolean"!=typeof a?a.className:""),s=null!=o?o:{},c=(s.points,function(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n={};for(var a in e)if(({}).hasOwnProperty.call(e,a)){if(-1!==t.indexOf(a))continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],-1===t.indexOf(n)&&({}).propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(s,m));return t.createElement(l,x({},c,{className:i}))}e.s(["Dots",0,function(e){var n=e.points,a=e.dot,o=e.className,r=e.dotClassName,i=e.dataKey,l=e.baseProps,m=e.needClip,h=e.clipPathId,v=e.zIndex,y=void 0===v?p.DefaultZIndexes.scatter:v;if(null==n||!a&&1!==n.length)return null;var b=(0,c.isClipDot)(a),j=(0,d.svgPropertiesAndEventsFromUnknown)(a),M=n.map((e,o)=>{var s,c,d=f(f(f({r:3},l),j),{},{index:o,cx:null!=(s=e.x)?s:void 0,cy:null!=(c=e.y)?c:void 0,dataKey:i,value:e.value,payload:e.payload,points:n});return t.createElement(g,{key:"dot-".concat(o),option:a,dotProps:d,className:r})}),w={};return m&&null!=h&&(w.clipPath="url(#clipPath-".concat(b?"":"dots-").concat(h,")")),t.createElement(u.ZIndexLayer,{zIndex:y},t.createElement(s.Layer,x({className:o},w),M))}],789859);var v=e.i(543372),y=e.i(281695),b=e.i(630173);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach(function(t){var a,o,r;a=e,o=t,r=n[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(o))in a?Object.defineProperty(a,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[o]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var w=e=>{var n,r=e.point,i=e.childIndex,c=e.mainColor,d=e.activeDot,u=e.dataKey,p=e.clipPath;if(!1===d||null==r.x||null==r.y)return null;var m=M(M(M({},{index:i,dataKey:u,cx:r.x,cy:r.y,r:4,fill:null!=c?c:"none",strokeWidth:2,stroke:"#fff",payload:r.payload,value:r.value}),(0,o.svgPropertiesNoEventsFromUnknown)(d)),(0,a.adaptEventHandlers)(d));return n=(0,t.isValidElement)(d)?(0,t.cloneElement)(d,m):"function"==typeof d?d(m):t.createElement(l,m),t.createElement(s.Layer,{className:"recharts-active-dot",clipPath:p},n)};e.s(["ActivePoints",0,function(e){var n=e.points,a=e.mainColor,o=e.activeDot,i=e.itemDataKey,l=e.clipPath,s=e.zIndex,c=void 0===s?p.DefaultZIndexes.activeDot:s,d=(0,v.useAppSelector)(y.selectActiveTooltipIndex),m=(0,b.useActiveTooltipDataPoints)();if(null==n||null==m)return null;var h=n.find(e=>m.includes(e.payload));return(0,r.isNullish)(h)?null:t.createElement(u.ZIndexLayer,{zIndex:c},t.createElement(w,{point:h,childIndex:Number(d),mainColor:a,dataKey:i,activeDot:o,clipPath:l}))}],482593)},554687,e=>{"use strict";var t=e.i(883388);e.s(["getRadiusAndStrokeWidthFromDot",0,function(e){var n=(0,t.svgPropertiesNoEventsFromUnknown)(e);if(null!=n){var a=n.r,o=n.strokeWidth,r=Number(a),i=Number(o);return(Number.isNaN(r)||r<0)&&(r=3),(Number.isNaN(i)||i<0)&&(i=2),{r:r,strokeWidth:i}}return{r:3,strokeWidth:2}}])},321020,e=>{"use strict";e.s(["Area",()=>ey,"computeArea",()=>ev],321020);var t=e.i(191788),n=e.i(56206),a=e.i(815954),o=e.i(301426),r=e.i(789859),i=e.i(270627),l=e.i(516257),s=e.i(106043),c=e.i(482593),d=e.i(128002),u=e.i(777814),p=e.i(314169),m=e.i(83727),h=e.i(901841),f=e.i(399479),x=e.i(365441),g=e.i(755335),v=e.i(780950),y=(e,t,n)=>(0,m.selectAxisWithScale)(e,"xAxis",(0,v.selectXAxisIdFromGraphicalItemId)(e,t),n),b=(e,t,n)=>(0,m.selectTicksOfGraphicalItem)(e,"xAxis",(0,v.selectXAxisIdFromGraphicalItemId)(e,t),n),j=(e,t,n)=>(0,m.selectAxisWithScale)(e,"yAxis",(0,v.selectYAxisIdFromGraphicalItemId)(e,t),n),M=(e,t,n)=>(0,m.selectTicksOfGraphicalItem)(e,"yAxis",(0,v.selectYAxisIdFromGraphicalItemId)(e,t),n),w=(0,p.createSelector)([h.selectChartLayout,y,j,b,M],(e,t,n,a,o)=>(0,l.isCategoricalAxis)(e,"xAxis")?(0,l.getBandSizeOfAxis)(t,a,!1):(0,l.getBandSizeOfAxis)(n,o,!1)),A=(0,p.createSelector)([m.selectUnfilteredCartesianItems,(e,t)=>t],(e,t)=>e.filter(e=>"area"===e.type).find(e=>e.id===t)),C=e=>{var t=(0,h.selectChartLayout)(e);return(0,l.isCategoricalAxis)(t,"xAxis")?"yAxis":"xAxis"},k=(0,p.createSelector)([A,(e,t,n)=>(0,m.selectStackGroups)(e,C(e),"yAxis"===C(e)?(0,v.selectYAxisIdFromGraphicalItemId)(e,t):(0,v.selectXAxisIdFromGraphicalItemId)(e,t),n)],(e,t)=>{if(null!=e&&null!=t){var n,a=e.stackId,o=(0,x.getStackSeriesIdentifier)(e);if(null!=a&&null!=o){var r=null==(n=t[a])?void 0:n.stackedData,i=null==r?void 0:r.find(e=>e.key===o);if(null!=i)return i.map(e=>[e[0],e[1]])}}}),I=(0,p.createSelector)([h.selectChartLayout,y,j,b,M,k,f.selectChartDataWithIndexesIfNotInPanoramaPosition3,w,A,g.selectChartBaseValue],(e,t,n,a,o,r,i,l,s,c)=>{var d,u=i.chartData,p=i.dataStartIndex,m=i.dataEndIndex;if(null!=s&&("horizontal"===e||"vertical"===e)&&null!=t&&null!=n&&null!=a&&null!=o&&0!==a.length&&0!==o.length&&null!=l){var h=s.data;if(null!=(d=h&&h.length>0?h:null==u?void 0:u.slice(p,m+1)))return ev({layout:e,xAxis:t,yAxis:n,xAxisTicks:a,yAxisTicks:o,dataStartIndex:p,areaSettings:s,stackedData:r,displayedData:d,chartBaseValue:c,bandSize:l})}}),P=e.i(662688),S=e.i(524970),B=e.i(836094),T=e.i(543372),D=e.i(945031),E=e.i(634200),O=e.i(325551),N=e.i(297974),F=e.i(630173),H=e.i(768069),L=e.i(436323),z=e.i(883388),Z=e.i(554687),R=e.i(62037),V=e.i(134959),_=e.i(561622),G=e.i(446354),W=e.i(547810),q=e.i(366998),$=e.i(500678),X=e.i(382863),K=["animationElapsedTime","isAnimating","isEntrance","layout","isRange","stroke","connectNulls"],U=["id","baseLine"];function Y(){return(Y=Object.assign.bind()).apply(null,arguments)}function Q(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n={};for(var a in e)if(({}).hasOwnProperty.call(e,a)){if(-1!==t.indexOf(a))continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],-1===t.indexOf(n)&&({}).propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function J(e){var n,a,o=e.alpha,r=e.baseLine,l=e.points,s=e.strokeWidth,c=null==(n=l[0])?void 0:n.x,d=null==(a=l[l.length-1])?void 0:a.x;if(!(0,$.isWellBehavedNumber)(c)||!(0,$.isWellBehavedNumber)(d))return null;var u=o*Math.abs(c-d),p=Math.max(...l.map(e=>e.y||0));return((0,i.isNumber)(r)?p=Math.max(r,p):r&&Array.isArray(r)&&r.length&&(p=Math.max(...r.map(e=>e.y||0),p)),(0,i.isNumber)(p))?t.createElement("rect",{x:c<d?c:c-u,y:0,width:u,height:Math.floor(p+(s?parseInt("".concat(s),10):1))}):null}function ee(e){var n,a,o=e.alpha,r=e.baseLine,l=e.points,s=e.strokeWidth,c=null==(n=l[0])?void 0:n.y,d=null==(a=l[l.length-1])?void 0:a.y;if(!(0,$.isWellBehavedNumber)(c)||!(0,$.isWellBehavedNumber)(d))return null;var u=o*Math.abs(c-d),p=Math.max(...l.map(e=>e.x||0));return((0,i.isNumber)(r)?p=Math.max(r,p):r&&Array.isArray(r)&&r.length&&(p=Math.max(...r.map(e=>e.x||0),p)),(0,i.isNumber)(p))?t.createElement("rect",{x:0,y:c<d?c:c-u,width:p+(s?parseInt("".concat(s),10):1),height:Math.floor(u)}):null}function et(e){var n=e.alpha,a=e.layout,o=e.points,r=e.baseLine,i=e.strokeWidth;return"vertical"===a?t.createElement(ee,{alpha:n,points:o,baseLine:r,strokeWidth:i}):t.createElement(J,{alpha:n,points:o,baseLine:r,strokeWidth:i})}var en=["id"],ea=["activeDot","animationBegin","animationDuration","animationEasing","connectNulls","dot","fill","fillOpacity","hide","isAnimationActive","legendType","stroke","xAxisId","yAxisId"];function eo(){return(eo=Object.assign.bind()).apply(null,arguments)}function er(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n={};for(var a in e)if(({}).hasOwnProperty.call(e,a)){if(-1!==t.indexOf(a))continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],-1===t.indexOf(n)&&({}).propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function ei(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function el(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ei(Object(n),!0).forEach(function(t){var a,o,r;a=e,o=t,r=n[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(o))in a?Object.defineProperty(a,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[o]=r}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ei(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var es={activeDot:!0,animationBegin:0,animationDuration:1500,animationEasing:"ease",animationMatchBy:E.matchByIndex,animationInterpolateFn:(e,t)=>null==e?[]:1===t?e.flatMap(e=>"removed"===e.status?[]:[e.next]):e.flatMap(e=>"matched"===e.status?[el(el({},e.next),{},{x:(0,i.interpolate)(e.prev.x,e.next.x,t),y:(0,i.interpolate)(e.prev.y,e.next.y,t)})]:"added"===e.status?[e.next]:[]),connectNulls:!1,dot:!1,fill:"#3182bd",fillOpacity:.6,hide:!1,isAnimationActive:"auto",legendType:"line",stroke:"#3182bd",strokeWidth:1,type:"linear",label:!1,shape:function(e){var n,o=e.animationElapsedTime,r=void 0===o?1:o,i=e.isAnimating,l=e.isEntrance,s=e.layout,c=e.isRange,d=e.stroke,u=e.connectNulls,p=Q(e,K),m="vertical"===s?"vertical":"horizontal",h=null!=u&&u,f=(0,X.useId)(),x=p.id,g=p.baseLine,v=Q(p,U),y=(0,z.svgPropertiesNoEvents)(v),b=t.createElement(q.Curve,Y({},p,{id:x,baseLine:g,connectNulls:h,stroke:"none",className:"recharts-area-area",layout:m})),j="none"!==d&&t.createElement(q.Curve,Y({},y,{className:"recharts-area-curve",layout:m,type:p.type,connectNulls:h,fill:"none",stroke:d,points:p.points})),M="none"!==d&&c&&Array.isArray(g)&&t.createElement(q.Curve,Y({},y,{className:"recharts-area-curve",layout:m,type:p.type,connectNulls:h,fill:"none",stroke:d,points:g}));return void 0!==l&&l&&(void 0!==i&&i||r<1)?t.createElement(a.Layer,null,t.createElement("defs",null,t.createElement("clipPath",{id:f},t.createElement(et,{alpha:r,points:null!=(n=p.points)?n:[],baseLine:g,layout:m,strokeWidth:p.strokeWidth}))),t.createElement(a.Layer,{clipPath:"url(#".concat(f,")")},b,j,M)):t.createElement(t.Fragment,null,b,j,M)},xAxisId:0,yAxisId:0,zIndex:G.DefaultZIndexes.area};function ec(e,t){return e&&"none"!==e?e:t}var ed=t.memo(e=>{var n=e.dataKey,a=e.data,o=e.stroke,r=e.strokeWidth,s=e.fill,c=e.name,u=e.hide,p=e.unit,m=e.formatter,h=e.tooltipType,f=e.id,x={dataDefinedOnItem:a,getPosition:i.noop,settings:{stroke:o,strokeWidth:r,fill:s,dataKey:n,nameKey:void 0,name:(0,l.getTooltipNameProp)(c,n),hide:u,type:h,color:ec(o,s),unit:p,formatter:m,graphicalItemId:f}};return t.createElement(d.SetTooltipEntrySettings,{tooltipEntrySettings:x})});function eu(e){var n=e.clipPathId,a=e.points,o=e.props,i=o.needClip,l=o.dot,s=o.dataKey,c=(0,z.svgPropertiesNoEvents)(o);return t.createElement(r.Dots,{points:a,dot:l,className:"recharts-area-dots",dotClassName:"recharts-area-dot",dataKey:s,baseProps:c,needClip:i,clipPathId:n})}function ep(e){var n=e.showLabels,a=e.children,r=e.points.map(e=>{var t,n,a={x:null!=(t=e.x)?t:0,y:null!=(n=e.y)?n:0,width:0,lowerWidth:0,upperWidth:0,height:0};return el(el({},a),{},{value:e.value,payload:e.payload,parentViewBox:void 0,viewBox:a,fill:void 0})});return t.createElement(o.CartesianLabelListContextProvider,{value:n?r:void 0},a)}function em(e){var n=e.points,o=e.baseLine,r=e.needClip,i=e.clipPathId,l=e.props,s=e.animationElapsedTime,c=e.isAnimating,d=e.isEntrance,u=l.layout,p=l.type,m=l.stroke,h=l.connectNulls,f=l.isRange,x=l.shape,g=l.id,v=er(l,en),y=el(el({},(0,R.svgPropertiesAndEvents)(v)),{},{id:g,points:n,connectNulls:h,type:p,baseLine:o,layout:u,stroke:m,isRange:f,animationElapsedTime:s,isAnimating:c,isEntrance:d});return t.createElement(t.Fragment,null,(null==n?void 0:n.length)>1&&t.createElement(a.Layer,{clipPath:r?"url(#clipPath-".concat(i,")"):void 0},t.createElement(V.Shape,{option:x,DefaultShape:es.shape,shapeProps:y})),t.createElement(eu,{points:n,props:v,clipPathId:i}))}function eh(e){var n,a=e.needClip,r=e.clipPathId,l=e.props,s=e.previousPointsRef,c=e.previousBaselineRef,d=l.points,u=l.baseLine,p=l.isAnimationActive,m=l.animationBegin,f=l.animationDuration,x=l.animationEasing,g=l.animationMatchBy,v=l.animationInterpolateFn,y=(0,t.useMemo)(()=>({points:d,baseLine:u}),[d,u]),b=(0,O.useAnimationStartSnapshot)(y,c),j=(0,h.useCartesianChartLayout)(),M=(0,D.useAnimationCallbacks)(l.onAnimationStart,l.onAnimationEnd),w=M.isAnimating,A=M.handleAnimationStart,C=M.handleAnimationEnd,k=b.startValue;return null==j?null:(n=Array.isArray(u)&&Array.isArray(k)?(0,E.matchAnimationItems)(k,u,g):Array.isArray(u)?(0,E.matchAnimationItems)(null,u,g):null,t.createElement(D.AnimatedItems,{animationInput:y,animationIdPrefix:"recharts-area-",items:d,previousItemsRef:s,isAnimationActive:p,animationBegin:m,animationDuration:f,animationEasing:x,onAnimationStart:A,onAnimationEnd:C,animationInterpolateFn:v,animationMatchBy:g,layout:j},(e,s,c)=>{var p;return p=1===s?u:Array.isArray(u)?v(n,s,j):c?u:function(e,t,n){if((0,i.isNumber)(e)){var a=(0,i.isNumber)(t)?t:void 0;return(0,i.interpolate)(a,e,n)}if((0,i.isNullish)(e)||(0,i.isNan)(e)){var o=(0,i.isNumber)(t)?t:void 0;return(0,i.interpolate)(o,0,n)}return e}(u,k,s),b.syncStepValue(p,s),t.createElement(ep,{showLabels:!w,points:d},l.children,t.createElement(em,{points:e,baseLine:p,needClip:a,clipPathId:r,props:l,animationElapsedTime:s,isAnimating:w||s<1,isEntrance:c}),t.createElement(o.LabelListFromLabelProp,{label:l.label}))}))}function ef(e){var n=e.needClip,a=e.clipPathId,o=e.props,r=(0,t.useRef)(null),i=(0,t.useRef)();return t.createElement(eh,{needClip:n,clipPathId:a,props:o,previousPointsRef:r,previousBaselineRef:i})}class ex extends t.PureComponent{render(){var e=this.props,o=e.hide,r=e.dot,i=e.points,l=e.className,d=e.top,p=e.left,m=e.needClip,h=e.xAxisId,f=e.yAxisId,x=e.width,g=e.height,v=e.id,y=e.baseLine,b=e.zIndex;if(o)return null;var j=(0,n.clsx)("recharts-area",l),M=(0,Z.getRadiusAndStrokeWidthFromDot)(r),w=M.r,A=M.strokeWidth,C=(0,s.isClipDot)(r),k=2*w+A,I=m?"url(#clipPath-".concat(C?"":"dots-").concat(v,")"):void 0;return t.createElement(_.ZIndexLayer,{zIndex:b},t.createElement(a.Layer,{className:j},m&&t.createElement("defs",null,t.createElement(u.GraphicalItemClipPath,{clipPathId:v,xAxisId:h,yAxisId:f}),!C&&t.createElement("clipPath",{id:"clipPath-dots-".concat(v)},t.createElement("rect",{x:p-k/2,y:d-k/2,width:x+k,height:g+k}))),t.createElement(ef,{needClip:m,clipPathId:v,props:this.props})),t.createElement(c.ActivePoints,{points:i,mainColor:ec(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:I}),this.props.isRange&&Array.isArray(y)&&t.createElement(c.ActivePoints,{points:y,mainColor:ec(this.props.stroke,this.props.fill),itemDataKey:this.props.dataKey,activeDot:this.props.activeDot,clipPath:I}))}}function eg(e){var n,a=e.activeDot,o=e.animationBegin,r=e.animationDuration,i=e.animationEasing,l=e.connectNulls,s=e.dot,c=e.fill,d=e.fillOpacity,p=e.hide,m=e.isAnimationActive,f=e.legendType,x=e.stroke,g=e.xAxisId,v=e.yAxisId,y=er(e,ea),b=(0,h.useChartLayout)(),j=(0,S.useChartName)(),M=(0,u.useNeedsClip)(g,v).needClip,w=(0,P.useIsPanorama)(),A=null!=(n=(0,T.useAppSelector)(t=>I(t,e.id,w)))?n:{},C=A.points,k=A.isRange,B=A.baseLine,D=(0,F.usePlotArea)();if("horizontal"!==b&&"vertical"!==b||null==D||"AreaChart"!==j&&"ComposedChart"!==j)return null;var E=D.height,O=D.width,N=D.x,H=D.y;return C&&C.length?t.createElement(ex,eo({},y,{activeDot:a,animationBegin:o,animationDuration:r,animationEasing:i,baseLine:B,connectNulls:l,dot:s,fill:c,fillOpacity:d,height:E,hide:p,layout:b,isAnimationActive:m,isRange:k,legendType:f,needClip:M,points:C,stroke:x,width:O,left:N,top:H,xAxisId:g,yAxisId:v})):null}function ev(e){var t,n=e.areaSettings,a=n.connectNulls,o=n.baseValue,r=n.dataKey,s=e.stackedData,c=e.layout,d=e.chartBaseValue,u=e.xAxis,p=e.yAxis,m=e.displayedData,h=e.dataStartIndex,f=e.xAxisTicks,x=e.yAxisTicks,g=e.bandSize,v=s&&s.length,y=((e,t,n,a,o)=>{var r=null!=n?n:t;if((0,i.isNumber)(r))return r;var l="horizontal"===e?o:a,s=l.scale.domain();if("number"===l.type){var c=Math.max(s[0],s[1]),d=Math.min(s[0],s[1]);return"dataMin"===r?d:"dataMax"===r||c<0?c:Math.max(Math.min(s[0],s[1]),0)}return"dataMin"===r?s[0]:"dataMax"===r?s[1]:s[0]})(c,d,o,u,p),b="horizontal"===c,j=!1,M=m.map((e,t)=>{if(v)c=s[h+t];else{var n,o,i,c,d,m=(0,l.getValueByDataKey)(e,r);Array.isArray(m)?(c=m,j=!0):c=[y,m]}var M=null!=(n=null==(o=c)?void 0:o[1])?n:null,w=null==M||v&&!a&&null==(0,l.getValueByDataKey)(e,r);return b?{x:(0,l.getCateCoordinateOfLine)({axis:u,ticks:f,bandSize:g,entry:e,index:t}),y:w?null:null!=(d=p.scale.map(M))?d:null,value:c,payload:e}:{x:w?null:null!=(i=u.scale.map(M))?i:null,y:(0,l.getCateCoordinateOfLine)({axis:p,ticks:x,bandSize:g,entry:e,index:t}),value:c,payload:e}});return t=v||j?M.map(e=>{var t,n,a=Array.isArray(e.value)?e.value[0]:null;return b?{x:e.x,y:null!=a&&null!=e.y&&null!=(n=p.scale.map(a))?n:null,payload:e.payload}:{x:null!=a&&null!=(t=u.scale.map(a))?t:null,y:e.y,payload:e.payload}}):b?p.scale.map(y):u.scale.map(y),{points:M,baseLine:null!=t?t:0,isRange:j}}var ey=t.memo(function(e){var n=(0,N.resolveDefaultProps)(e,es),a=(0,P.useIsPanorama)();return t.createElement(H.RegisterGraphicalItemId,{id:n.id,type:"area"},e=>{var o,r,i,s,c;return t.createElement(t.Fragment,null,t.createElement(B.SetLegendPayload,{legendPayload:(o=n.dataKey,r=n.name,i=n.stroke,s=n.fill,c=n.legendType,[{inactive:n.hide,dataKey:o,type:c,color:ec(i,s),value:(0,l.getTooltipNameProp)(r,o),payload:n}])}),t.createElement(ed,{dataKey:n.dataKey,data:n.data,stroke:n.stroke,strokeWidth:n.strokeWidth,fill:n.fill,name:n.name,hide:n.hide,unit:n.unit,formatter:n.formatter,tooltipType:n.tooltipType,id:e}),t.createElement(L.SetCartesianGraphicalItem,{type:"area",id:e,data:n.data,dataKey:n.dataKey,xAxisId:n.xAxisId,yAxisId:n.yAxisId,zAxisId:0,stackId:(0,l.getNormalizedStackId)(n.stackId),hide:n.hide,barSize:void 0,baseValue:n.baseValue,isPanorama:a,connectNulls:n.connectNulls}),t.createElement(eg,eo({},n,{id:e})))})},W.propsAreEqual);ey.displayName="Area"},990865,378097,e=>{"use strict";var t=e.i(391398);function n({color:e,id:a,withGradient:o,fillOpacity:r}){return(0,t.jsx)(t.Fragment,{children:o?(0,t.jsxs)("linearGradient",{id:a,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,t.jsx)("stop",{offset:"0%",stopColor:e,stopOpacity:r}),(0,t.jsx)("stop",{offset:"100%",stopColor:e,stopOpacity:.01})]}):(0,t.jsx)("linearGradient",{id:a,x1:"0",y1:"0",x2:"0",y2:"1",children:(0,t.jsx)("stop",{stopColor:e,stopOpacity:r??.2})})})}n.displayName="@mantine/charts/AreaGradient",e.s(["AreaGradient",0,n],990865);var a=e.i(191788),o=e.i(471970),r=e.i(437515),i=["axis"],l=(0,a.forwardRef)((e,t)=>a.createElement(r.CartesianChart,{chartName:"AreaChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:i,tooltipPayloadSearcher:o.arrayTooltipSearcher,categoricalChartProps:e,ref:t}));e.s(["AreaChart",0,l],378097)},505716,e=>{"use strict";var t=e.i(749218),n=e.i(481178),a=e.i(951254),o=e.i(44091),r=e.i(391466),i=e.i(275519),l=e.i(232471),s=e.i(476273),c=e.i(34515),d=e.i(935769),u={root:"m_6e45937b",loader:"m_e8eb006c",overlay:"m_df587f17"},p=e.i(391398);let m={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,t.getDefaultZIndex)("overlay")},h=(0,n.createVarsResolver)((e,{zIndex:t})=>({root:{"--lo-z-index":t?.toString()}})),f=(0,i.factory)(e=>{let t=(0,o.useProps)("LoadingOverlay",m,e),{classNames:n,className:i,style:f,styles:x,unstyled:g,vars:v,transitionProps:y,loaderProps:b,overlayProps:j,visible:M,zIndex:w,attributes:A,onEnter:C,onEntered:k,onExit:I,onExited:P,...S}=t,B=(0,a.useMantineTheme)(),T=(0,r.useStyles)({name:"LoadingOverlay",classes:u,props:t,className:i,style:f,classNames:n,styles:x,unstyled:g,attributes:A,vars:v,varsResolver:h}),D={...m.overlayProps,...j};return(0,p.jsx)(c.Transition,{transition:"fade",...y,mounted:!!M,onEnter:C,onEntered:k,onExit:I,onExited:P,children:e=>(0,p.jsxs)(l.Box,{...T("root",{style:e}),...S,children:[(0,p.jsx)(d.Loader,{unstyled:g,...b,...T("loader",{className:b?.className,style:b?.style})}),(0,p.jsx)(s.Overlay,{...D,...T("overlay",{className:D?.className,style:D?.style}),darkHidden:!0,unstyled:g,color:j?.color||B.white}),(0,p.jsx)(s.Overlay,{...D,...T("overlay",{className:D?.className,style:D?.style}),lightHidden:!0,unstyled:g,color:j?.color||B.colors.dark[5]})]})})});f.classes=u,f.varsResolver=h,f.displayName="@mantine/core/LoadingOverlay",e.s(["LoadingOverlay",0,f],505716)},645640,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM100,56a28,28,0,0,1,56,0V76H100ZM204,204H52V100H204Zm-60-52a16,16,0,1,1-16-16A16,16,0,0,1,144,152Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z",opacity:"0.2"}),t.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm32-84H96V56a32,32,0,0,1,64,0Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,82H174V56a46,46,0,0,0-92,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82ZM94,56a34,34,0,0,1,68,0V82H94ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Zm-72-56a10,10,0,1,1-10-10A10,10,0,0,1,138,152Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,84H172V56a44,44,0,0,0-88,0V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84ZM92,56a36,36,0,0,1,72,0V84H92ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-76-56a8,8,0,1,1-8-8A8,8,0,0,1,136,152Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(n.default,{ref:o,...e,weights:a}));o.displayName="LockIcon",e.s(["LockIcon",0,o],645640)},29260,e=>{"use strict";var t=e.i(191788),n=e.i(123895),a=e.i(645640),o=e.i(79897),r=e.i(485108),i=e.i(37541),l=e.i(725695),s=e.i(505716),c=e.i(470743),d=e.i(937389),u=e.i(883364),p=e.i(841209),m=e.i(582498),h=e.i(391398);e.s(["AuthenticationForm",0,function({noShadow:e,noPadding:f,noSubmit:x,style:g}){let[v,y]=(0,t.useState)("register"),[b,j]=(0,t.useState)(!1),[M,w]=(0,t.useState)(null),A=(0,m.useForm)({initialValues:{firstName:"",lastName:"",email:"",password:"",confirmPassword:"",termsOfService:!0}});return(0,h.jsx)(c.Paper,{p:f?0:"lg",shadow:e?"none":"sm",style:{...g,position:"relative",backgroundColor:"var(--mantine-color-body)"},children:(0,h.jsxs)("form",{onSubmit:A.onSubmit(()=>{j(!0),w(null),setTimeout(()=>{j(!1),w("register"===v?"User with this email already exists":"User with this email does not exist")},3e3)}),children:[(0,h.jsx)(s.LoadingOverlay,{visible:b}),"register"===v&&(0,h.jsxs)(l.Group,{grow:!0,children:[(0,h.jsx)(p.TextInput,{"data-autofocus":!0,required:!0,placeholder:"Your first name",label:"First name",...A.getInputProps("firstName")}),(0,h.jsx)(p.TextInput,{required:!0,placeholder:"Your last name",label:"Last name",...A.getInputProps("lastName")})]}),(0,h.jsx)(p.TextInput,{mt:"md",required:!0,placeholder:"Your email",label:"Email",leftSection:(0,h.jsx)(n.AtIcon,{size:16}),...A.getInputProps("email")}),(0,h.jsx)(d.PasswordInput,{mt:"md",required:!0,placeholder:"Password",label:"Password",leftSection:(0,h.jsx)(a.LockIcon,{size:16}),...A.getInputProps("password")}),"register"===v&&(0,h.jsx)(d.PasswordInput,{mt:"md",required:!0,label:"Confirm Password",placeholder:"Confirm password",leftSection:(0,h.jsx)(a.LockIcon,{size:16}),...A.getInputProps("confirmPassword")}),"register"===v&&(0,h.jsx)(i.Checkbox,{mt:"xl",label:"I agree to sell my soul and privacy to this corporation",...A.getInputProps("termsOfService",{type:"checkbox"})}),M&&(0,h.jsx)(u.Text,{c:"red",size:"sm",mt:"sm",children:M}),!x&&(0,h.jsxs)(l.Group,{justify:"space-between",mt:"xl",children:[(0,h.jsx)(o.Anchor,{component:"button",type:"button",c:"dimmed",onClick:()=>{y(e=>"register"===e?"login":"register"),w(null)},size:"sm",children:"register"===v?"Have an account? Login":"Don't have an account? Register"}),(0,h.jsx)(r.Button,{color:"blue",type:"submit",children:"register"===v?"Register":"Login"})]})]})})}])},299593,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M164.24,100.24,136.48,128l27.76,27.76a6,6,0,1,1-8.48,8.48L128,136.48l-27.76,27.76a6,6,0,0,1-8.48-8.48L119.52,128,91.76,100.24a6,6,0,0,1,8.48-8.48L128,119.52l27.76-27.76a6,6,0,0,1,8.48,8.48ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M162.83,98.83,133.66,128l29.17,29.17a4,4,0,0,1-5.66,5.66L128,133.66,98.83,162.83a4,4,0,0,1-5.66-5.66L122.34,128,93.17,98.83a4,4,0,0,1,5.66-5.66L128,122.34l29.17-29.17a4,4,0,1,1,5.66,5.66ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(n.default,{ref:o,...e,weights:a}));o.displayName="XCircleIcon",e.s(["XCircleIcon",0,o],299593)},323121,e=>{"use strict";var t=e.i(191788);function n(e){let n=e.reduce((e,t)=>({...e,[t]:!1}),{}),[a,o]=(0,t.useState)(n),r=(0,t.useCallback)(e=>{o(t=>({...t,[e]:!0}))},[]),i=(0,t.useCallback)(e=>o(t=>({...t,[e]:!1})),[]),l=(0,t.useCallback)(e=>o(t=>({...t,[e]:!t[e]})),[]);return{state:a,open:r,close:i,closeAll:(0,t.useCallback)(()=>o(n),[]),toggle:l,register:(0,t.useCallback)(e=>({opened:a[e],onClose:()=>i(e),stackId:e}),[a])}}e.s(["useDrawersStack",0,n,"useModalsStack",0,n])},14625,e=>{"use strict";var t=e.i(648863),n=e.i(29260),a=e.i(485108),o=e.i(424302),r=e.i(391398),i=e.i(541772);let l={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:l}]=(0,i.useDisclosure)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Modal,{opened:e,onClose:l,title:"Authentication",children:(0,r.jsx)(n.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,r.jsx)(a.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},s={type:"code",code:`
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

`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,i.useDisclosure)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Modal,{opened:e,onClose:n,withCloseButton:!1,children:"Modal without header, press escape or click on overlay to close"}),(0,r.jsx)(a.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var c=e.i(191788),d=e.i(725695);let u=["xs","sm","md","lg","xl","55rem","70%","100%"],p={type:"code",component:function(){let[e,t]=(0,c.useState)(!1),[i,l]=(0,c.useState)("md"),s=u.map(e=>(0,r.jsx)(a.Button,{variant:"default",onClick:()=>{l(e),t(!0)},children:e},e));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Modal,{opened:e,onClose:()=>t(!1),title:"Introduce yourself!",size:i,children:(0,r.jsx)(n.AuthenticationForm,{noPadding:!0,noShadow:!0})}),(0,r.jsx)(d.Group,{justify:"center",children:s})]})}},m={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:l}]=(0,i.useDisclosure)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Modal,{opened:e,onClose:l,title:"Authentication",overlayProps:{backgroundOpacity:.55,blur:3},children:(0,r.jsx)(n.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,r.jsx)(a.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},h={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,i.useDisclosure)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Modal,{opened:e,onClose:n,title:"Header is sticky",children:Array(100).fill(0).map((e,t)=>(0,r.jsx)("p",{children:"Modal with scroll"},t))}),(0,r.jsx)(a.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},f={type:"code",code:`
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
`,component:function(){let[e,t]=(0,c.useState)(!1),[n,i]=(0,c.useState)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Modal,{opened:n,onClose:()=>i(!1),title:"Please consider this",transitionProps:{transition:"rotate-left"},children:"rotate-left transition"}),(0,r.jsx)(o.Modal,{opened:e,onClose:()=>t(!1),title:"Please consider this",transitionProps:{transition:"fade",duration:600,timingFunction:"linear"},children:"fade transition 600ms linear transition"}),(0,r.jsxs)(d.Group,{justify:"center",children:[(0,r.jsx)(a.Button,{onClick:()=>i(!0),variant:"default",children:"Rotate left transition"}),(0,r.jsx)(a.Button,{onClick:()=>t(!0),variant:"default",children:"Fade transition"})]})]})}},x={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:l}]=(0,i.useDisclosure)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Modal,{opened:e,onClose:l,title:"Authentication",centered:!0,children:(0,r.jsx)(n.AuthenticationForm,{noPadding:!0,noShadow:!0})}),(0,r.jsx)(a.Button,{variant:"default",onClick:t,children:"Open centered Modal"})]})}};var g=e.i(883364);let v={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:l}]=(0,i.useDisclosure)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.Modal,{opened:e,onClose:l,title:"This is a fullscreen modal",fullScreen:!0,radius:0,transitionProps:{transition:"fade",duration:200},children:[(0,r.jsx)(g.Text,{mb:"xl",children:"It takes the entire screen and does not have overlay and border-radius, you can use it small screens to save up some space. It also has fade transition by default, but you can change that with transition prop. Now here is an authentication form used in previous examples to see the difference."}),(0,r.jsx)(n.AuthenticationForm,{noPadding:!0,noShadow:!0})]}),(0,r.jsx)(a.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var y=e.i(257177),b=e.i(692385);let j={type:"code",component:function(){let[e,{close:t,open:n}]=(0,i.useDisclosure)(!1),[l,{increment:s,decrement:c}]=(0,b.useCounter)(3,{min:0}),u=Array(l).fill(0).map((e,t)=>(0,r.jsxs)(y.Badge,{children:["Badge ",t]},t));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.Modal,{opened:e,onClose:t,size:"auto",title:"Modal size auto",children:[(0,r.jsx)(g.Text,{children:"Modal with size auto will fits its content"}),(0,r.jsx)(d.Group,{wrap:"nowrap",mt:"md",children:u}),(0,r.jsxs)(d.Group,{mt:"xl",children:[(0,r.jsx)(a.Button,{onClick:s,children:"Add badge"}),(0,r.jsx)(a.Button,{onClick:c,children:"Remove badge"})]})]}),(0,r.jsx)(a.Button,{variant:"default",onClick:n,children:"Open modal"})]})},centered:!0,code:`
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
`};var M=e.i(19300);let w={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,i.useDisclosure)(!1),l=Array(100).fill(0).map((e,t)=>(0,r.jsx)("p",{children:"Modal with scroll"},t));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Modal,{opened:e,onClose:n,title:"Header is sticky",scrollAreaComponent:M.ScrollArea.Autosize,children:l}),(0,r.jsx)(a.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},A={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,i.useDisclosure)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.Modal.Root,{opened:e,onClose:n,children:[(0,r.jsx)(o.Modal.Overlay,{}),(0,r.jsxs)(o.Modal.Content,{children:[(0,r.jsxs)(o.Modal.Header,{children:[(0,r.jsx)(o.Modal.Title,{children:"Modal title"}),(0,r.jsx)(o.Modal.CloseButton,{})]}),(0,r.jsx)(o.Modal.Body,{children:"Modal content"})]})]}),(0,r.jsx)(a.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},C={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:l}]=(0,i.useDisclosure)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Modal,{opened:e,onClose:l,title:"Authentication",yOffset:"1vh",xOffset:0,children:(0,r.jsx)(n.AuthenticationForm,{noPadding:!0,noShadow:!0})}),(0,r.jsx)(a.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var k=e.i(841209);let I={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,i.useDisclosure)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.Modal,{opened:e,onClose:n,title:"Focus demo",children:[(0,r.jsx)(k.TextInput,{label:"First input",placeholder:"First input"}),(0,r.jsx)(k.TextInput,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,r.jsx)(a.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var P=e.i(779177),S=e.i(839608);let B={type:"code",code:`
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: ${(0,P.em)(800)})');

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
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,i.useDisclosure)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Modal,{opened:e,onClose:n,title:"This is a fullscreen modal",fullScreen:(0,S.useMediaQuery)(`(max-width: ${(0,P.em)(800)})`),transitionProps:{transition:"fade",duration:200},children:"The Modal will be full screen only on mobile"}),(0,r.jsx)(a.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var T=e.i(299593);let D={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:l}]=(0,i.useDisclosure)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Modal,{opened:e,onClose:l,title:"Authentication",closeButtonProps:{icon:(0,r.jsx)(T.XCircleIcon,{size:20})},children:(0,r.jsx)(n.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,r.jsx)(a.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var E=e.i(22630);let O={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,i.useDisclosure)(!1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.Modal,{opened:e,onClose:n,title:"Focus demo",children:[(0,r.jsx)(E.FocusTrap.InitialFocus,{}),(0,r.jsx)(k.TextInput,{label:"First input",placeholder:"First input"}),(0,r.jsx)(k.TextInput,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,r.jsx)(a.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var N=e.i(323121);let F={type:"code",code:`
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
`,centered:!0,component:function(){let e=(0,N.useModalsStack)(["delete-page","confirm-action","really-confirm-action"]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.Modal.Stack,{children:[(0,r.jsxs)(o.Modal,{...e.register("delete-page"),title:"Delete this page?",children:["Are you sure you want to delete this page? This action cannot be undone.",(0,r.jsxs)(d.Group,{mt:"lg",justify:"flex-end",children:[(0,r.jsx)(a.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,r.jsx)(a.Button,{onClick:()=>e.open("confirm-action"),color:"red",children:"Delete"})]})]}),(0,r.jsxs)(o.Modal,{...e.register("confirm-action"),title:"Confirm action",children:["Are you sure you want to perform this action? This action cannot be undone. If you are sure, press confirm button below.",(0,r.jsxs)(d.Group,{mt:"lg",justify:"flex-end",children:[(0,r.jsx)(a.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,r.jsx)(a.Button,{onClick:()=>e.open("really-confirm-action"),color:"red",children:"Confirm"})]})]}),(0,r.jsxs)(o.Modal,{...e.register("really-confirm-action"),title:"Really confirm action",children:["Jokes aside. You have confirmed this action. This is your last chance to cancel it. After you press confirm button below, action will be performed and cannot be undone. For real this time. Are you sure you want to proceed?",(0,r.jsxs)(d.Group,{mt:"lg",justify:"flex-end",children:[(0,r.jsx)(a.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,r.jsx)(a.Button,{onClick:e.closeAll,color:"red",children:"Confirm"})]})]})]}),(0,r.jsx)(a.Button,{variant:"default",onClick:()=>e.open("delete-page"),children:"Open modal"})]})}},H={type:"code",code:`
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
`,centered:!0,component:function(){let[e,t]=(0,i.useDisclosure)(!1),[n,l]=(0,i.useDisclosure)(!1),[s,u]=(0,c.useState)({title:"",message:""});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Modal,{opened:e,onClose:()=>{t.close(),u({title:"",message:""})},transitionProps:{duration:300,exitDuration:1e3,transition:"fade-down"},title:s.title,children:s.message}),(0,r.jsx)(o.Modal,{opened:n,onClose:l.close,transitionProps:{duration:300,exitDuration:1e3,transition:"fade-down"},onExitTransitionEnd:()=>u({title:"",message:""}),title:s.title,children:s.message}),(0,r.jsxs)(d.Group,{children:[(0,r.jsx)(a.Button,{onClick:()=>{t.open(),u({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onClose"}),(0,r.jsx)(a.Button,{onClick:()=>{l.open(),u({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onExitTransitionEnd"})]})]})},defaultExpanded:!1};var L=(0,t.__exportAll)({centered:()=>x,closeIcon:()=>D,composition:()=>A,fullScreen:()=>v,fullScreenMobile:()=>B,header:()=>s,initialFocus:()=>I,initialFocusTrap:()=>O,offset:()=>C,overflow:()=>h,overlay:()=>m,scrollarea:()=>w,sizeAuto:()=>j,sizes:()=>p,stack:()=>F,transitionEnd:()=>H,transitions:()=>f,usage:()=>l});e.s(["ModalDemos",0,L],14625)},359250,(e,t,n)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),n.maxBy=function(e,t){if(0===e.length)return;let n=e[0],a=t(n);for(let o=1;o<e.length;o++){let r=e[o],i=t(r);i>a&&(a=i,n=r)}return n}},446106,(e,t,n)=>{"use strict";Object.defineProperty(n,Symbol.toStringTag,{value:"Module"});let a=e.r(359250),o=e.r(387022),r=e.r(20972);n.maxBy=function(e,t){if(null!=e)return a.maxBy(Array.from(e),r.iteratee(t??o.identity))}},767577,(e,t,n)=>{t.exports=e.r(446106).maxBy},42201,e=>{"use strict";var t=e.i(314169),n=e.i(83727),a=e.i(586489),o=e.i(901841),r=e.i(299887),i=e.i(708248),l=e.i(163337),s=e.i(952317),c=(e,t,n)=>{switch(t){case"angleAxis":return(0,a.selectAngleAxis)(e,n);case"radiusAxis":return(0,a.selectRadiusAxis)(e,n);default:throw Error("Unexpected axis type: ".concat(t))}},d=(e,t,n)=>{switch(t){case"angleAxis":return(0,a.selectAngleAxisRangeWithReversed)(e,n);case"radiusAxis":return(0,a.selectRadiusAxisRangeWithReversed)(e,n);default:throw Error("Unexpected axis type: ".concat(t))}},u=(0,t.createSelector)([c,n.selectRealScaleType,r.selectPolarAxisCheckedDomain,d],s.combineConfiguredScale),p=(0,t.createSelector)([u],l.rechartsScaleFactory),m=(0,t.createSelector)([o.selectChartLayout,r.selectPolarAppliedValues,n.selectRenderableAxisSettings,i.pickAxisType],n.combineCategoricalDomain),h=(0,t.createSelector)([o.selectChartLayout,c,n.selectRealScaleType,p,r.selectPolarNiceTicks,d,n.selectDuplicateDomain,m,i.pickAxisType],n.combineAxisTicks),f=(0,t.createSelector)([h],e=>{if(e){var t=new Map;return e.forEach(e=>{var n=(e.coordinate+360)%360;t.has(n)||t.set(n,e)}),Array.from(t.values())}}),x=(0,t.createSelector)([o.selectChartLayout,c,p,d,n.selectDuplicateDomain,m,i.pickAxisType],n.combineGraphicalItemTicks);e.s(["selectPolarAngleAxisTicks",0,f,"selectPolarAxisScale",0,p,"selectPolarAxisTicks",0,h,"selectPolarGraphicalItemAxisTicks",0,x])},629566,e=>{"use strict";var t,n=e.i(191788),a=e.i(56206),o=e.i(62037),r=e.i(438596),i=["points","className","baseLinePoints","connectNulls"];function l(){return(l=Object.assign.bind()).apply(null,arguments)}var s=e=>null!=e&&e.x===+e.x&&e.y===+e.y,c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[[]];e.forEach(e=>{var n=t[t.length-1];s(e)?n&&n.push(e):n&&n.length>0&&t.push([])});var n=e[0],a=t[t.length-1];s(n)&&a&&a.push(n);var o=t[t.length-1];return o&&o.length<=0&&(t=t.slice(0,-1)),t},d=(e,n)=>{var a=c(e);n&&(a=[a.reduce((e,t)=>[...e,...t],[])]);var o=a.map(e=>e.reduce((e,n,a)=>{var o,i;return(0,r.roundTemplateLiteral)(t||(o=["","","",",",""],i||(i=o.slice(0)),t=Object.freeze(Object.defineProperties(o,{raw:{value:Object.freeze(i)}}))),e,0===a?"M":"L",n.x,n.y)},"")).join("");return 1===a.length?"".concat(o,"Z"):o};e.s(["Polygon",0,e=>{var t=e.points,r=e.className,s=e.baseLinePoints,c=e.connectNulls,u=function(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n={};for(var a in e)if(({}).hasOwnProperty.call(e,a)){if(-1!==t.indexOf(a))continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],-1===t.indexOf(n)&&({}).propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,i);if(!t||!t.length)return null;var p=(0,a.clsx)("recharts-polygon",r);if(s&&s.length){var m,h=u.stroke&&"none"!==u.stroke,f=(m=d(t,c),"".concat("Z"===m.slice(-1)?m.slice(0,-1):m,"L").concat(d(Array.from(s).reverse(),c).slice(1)));return n.createElement("g",{className:p},n.createElement("path",l({},(0,o.svgPropertiesAndEvents)(u),{fill:"Z"===f.slice(-1)?u.fill:"none",stroke:"none",d:f})),h?n.createElement("path",l({},(0,o.svgPropertiesAndEvents)(u),{fill:"none",d:d(t,c)})):null,h?n.createElement("path",l({},(0,o.svgPropertiesAndEvents)(u),{fill:"none",d:d(s,c)})):null)}var x=d(t,c);return n.createElement("path",l({},(0,o.svgPropertiesAndEvents)(u),{fill:"Z"===x.slice(-1)?u.fill:"none",className:p,d:x}))}])},981377,e=>{"use strict";var t=e.i(44091),n=e.i(391466),a=e.i(275519),o=e.i(232471),r={root:"m_d08caa0"},i=e.i(391398);let l=(0,a.factory)(e=>{let a=(0,t.useProps)("Typography",null,e),{classNames:l,className:s,style:c,styles:d,unstyled:u,attributes:p,...m}=a;return(0,i.jsx)(o.Box,{...(0,n.useStyles)({name:"Typography",classes:r,props:a,className:s,style:c,classNames:l,styles:d,unstyled:u,attributes:p})("root"),...m})});l.classes=r,l.displayName="@mantine/core/Typography",e.s(["Typography",0,l],981377)},471714,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M243,96a20.33,20.33,0,0,0-17.74-14l-56.59-4.57L146.83,24.62a20.36,20.36,0,0,0-37.66,0L87.35,77.44,30.76,82A20.45,20.45,0,0,0,19.1,117.88l43.18,37.24-13.2,55.7A20.37,20.37,0,0,0,79.57,233L128,203.19,176.43,233a20.39,20.39,0,0,0,30.49-22.15l-13.2-55.7,43.18-37.24A20.43,20.43,0,0,0,243,96ZM172.53,141.7a12,12,0,0,0-3.84,11.86L181.58,208l-47.29-29.08a12,12,0,0,0-12.58,0L74.42,208l12.89-54.4a12,12,0,0,0-3.84-11.86L41.2,105.24l55.4-4.47a12,12,0,0,0,10.13-7.38L128,41.89l21.27,51.5a12,12,0,0,0,10.13,7.38l55.4,4.47Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M229.06,108.79l-48.7,42,14.88,62.79a8.4,8.4,0,0,1-12.52,9.17L128,189.09,73.28,222.74a8.4,8.4,0,0,1-12.52-9.17l14.88-62.79-48.7-42A8.46,8.46,0,0,1,31.73,94L95.64,88.8l24.62-59.6a8.36,8.36,0,0,1,15.48,0l24.62,59.6L224.27,94A8.46,8.46,0,0,1,229.06,108.79Z",opacity:"0.2"}),t.createElement("path",{d:"M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M234.29,114.85l-45,38.83L203,211.75a16.4,16.4,0,0,1-24.5,17.82L128,198.49,77.47,229.57A16.4,16.4,0,0,1,53,211.75l13.76-58.07-45-38.83A16.46,16.46,0,0,1,31.08,86l59-4.76,22.76-55.08a16.36,16.36,0,0,1,30.27,0l22.75,55.08,59,4.76a16.46,16.46,0,0,1,9.37,28.86Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M237.28,97.87A14.18,14.18,0,0,0,224.76,88l-60.25-4.87-23.22-56.2a14.37,14.37,0,0,0-26.58,0L91.49,83.11,31.24,88a14.18,14.18,0,0,0-12.52,9.89A14.43,14.43,0,0,0,23,113.32L69,152.93l-14,59.25a14.4,14.4,0,0,0,5.59,15,14.1,14.1,0,0,0,15.91.6L128,196.12l51.58,31.71a14.1,14.1,0,0,0,15.91-.6,14.4,14.4,0,0,0,5.59-15l-14-59.25L233,113.32A14.43,14.43,0,0,0,237.28,97.87Zm-12.14,6.37-48.69,42a6,6,0,0,0-1.92,5.92l14.88,62.79a2.35,2.35,0,0,1-.95,2.57,2.24,2.24,0,0,1-2.6.1L131.14,184a6,6,0,0,0-6.28,0L70.14,217.61a2.24,2.24,0,0,1-2.6-.1,2.35,2.35,0,0,1-1-2.57l14.88-62.79a6,6,0,0,0-1.92-5.92l-48.69-42a2.37,2.37,0,0,1-.73-2.65,2.28,2.28,0,0,1,2.07-1.65l63.92-5.16a6,6,0,0,0,5.06-3.69l24.63-59.6a2.35,2.35,0,0,1,4.38,0l24.63,59.6a6,6,0,0,0,5.06,3.69l63.92,5.16a2.28,2.28,0,0,1,2.07,1.65A2.37,2.37,0,0,1,225.14,104.24Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M239.18,97.26A16.38,16.38,0,0,0,224.92,86l-59-4.76L143.14,26.15a16.36,16.36,0,0,0-30.27,0L90.11,81.23,31.08,86a16.46,16.46,0,0,0-9.37,28.86l45,38.83L53,211.75a16.38,16.38,0,0,0,24.5,17.82L128,198.49l50.53,31.08A16.4,16.4,0,0,0,203,211.75l-13.76-58.07,45-38.83A16.43,16.43,0,0,0,239.18,97.26Zm-15.34,5.47-48.7,42a8,8,0,0,0-2.56,7.91l14.88,62.8a.37.37,0,0,1-.17.48c-.18.14-.23.11-.38,0l-54.72-33.65a8,8,0,0,0-8.38,0L69.09,215.94c-.15.09-.19.12-.38,0a.37.37,0,0,1-.17-.48l14.88-62.8a8,8,0,0,0-2.56-7.91l-48.7-42c-.12-.1-.23-.19-.13-.5s.18-.27.33-.29l63.92-5.16A8,8,0,0,0,103,91.86l24.62-59.61c.08-.17.11-.25.35-.25s.27.08.35.25L153,91.86a8,8,0,0,0,6.75,4.92l63.92,5.16c.15,0,.24,0,.33.29S224,102.63,223.84,102.73Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M235.36,98.49A12.21,12.21,0,0,0,224.59,90l-61.47-5L139.44,27.67a12.37,12.37,0,0,0-22.88,0L92.88,85,31.41,90a12.45,12.45,0,0,0-7.07,21.84l46.85,40.41L56.87,212.64a12.35,12.35,0,0,0,18.51,13.49L128,193.77l52.62,32.36a12.12,12.12,0,0,0,13.69-.51,12.28,12.28,0,0,0,4.82-13l-14.32-60.42,46.85-40.41A12.29,12.29,0,0,0,235.36,98.49Zm-8.93,7.26-48.68,42a4,4,0,0,0-1.28,3.95l14.87,62.79a4.37,4.37,0,0,1-1.72,4.65,4.24,4.24,0,0,1-4.81.18L130.1,185.67a4,4,0,0,0-4.2,0L71.19,219.32a4.24,4.24,0,0,1-4.81-.18,4.37,4.37,0,0,1-1.72-4.65L79.53,151.7a4,4,0,0,0-1.28-3.95l-48.68-42A4.37,4.37,0,0,1,28.25,101a4.31,4.31,0,0,1,3.81-3L96,92.79a4,4,0,0,0,3.38-2.46L124,30.73a4.35,4.35,0,0,1,8.08,0l24.62,59.6A4,4,0,0,0,160,92.79l63.9,5.15a4.31,4.31,0,0,1,3.81,3A4.37,4.37,0,0,1,226.43,105.75Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(n.default,{ref:o,...e,weights:a}));o.displayName="StarIcon",e.s(["StarIcon",0,o],471714)},26485,e=>{"use strict";var t=e.i(191788);e.s(["useInputState",0,function(e){let[n,a]=(0,t.useState)(e);return[n,e=>{if(e)if("function"==typeof e)a(e);else if("object"==typeof e&&"nativeEvent"in e){let{currentTarget:t}=e;a("checkbox"===t.type?t.checked:t.value)}else a(e);else a(e)}]}])},648858,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let a=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M228,67.24a39.77,39.77,0,0,0-12.51-28.52C199.91,24,174.71,24.5,159.29,39.93L142.48,56.84a28,28,0,0,0-35.64,3.29l-9,9a20,20,0,0,0-.73,27.49L48.9,144.84A43.76,43.76,0,0,0,37,185.28l-7.5,17.19a17.66,17.66,0,0,0,3.71,19.65,19.9,19.9,0,0,0,22.15,4.19l16.31-7.13a43.88,43.88,0,0,0,39.45-12.09l48.24-48.26a20,20,0,0,0,27.47-.73l9-9a28.06,28.06,0,0,0,3.26-35.72l17.23-17.33A39.69,39.69,0,0,0,228,67.24ZM94.15,190.11a20,20,0,0,1-20,5,11.93,11.93,0,0,0-8.32.47L57,199.38,60.69,191a12,12,0,0,0,.37-8.64,19.92,19.92,0,0,1,4.81-20.55l48.2-48.22,28.28,28.3Zm105.14-111-25.37,25.52a12,12,0,0,0,0,16.95l4.88,4.89a4,4,0,0,1,0,5.66l-6.14,6.15-55-55.05,6.14-6.14a4,4,0,0,1,5.65,0L134.35,82a12,12,0,0,0,8.49,3.51h0A12,12,0,0,0,151.34,82l24.94-25.08c6.3-6.3,16.48-6.63,22.71-.74a16,16,0,0,1,.3,23Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M207.8,87.6l-25.37,25.53,4.89,4.88a16,16,0,0,1,0,22.64l-9,9a8,8,0,0,1-11.32,0l-60.68-60.7a8,8,0,0,1,0-11.32l9-9a16,16,0,0,1,22.63,0l4.88,4.89,25-25.11c10.79-10.79,28.37-11.45,39.45-1A28,28,0,0,1,207.8,87.6Z",opacity:"0.2"}),t.createElement("path",{d:"M224,67.3a35.79,35.79,0,0,0-11.26-25.66c-14-13.28-36.72-12.78-50.62,1.13L142.8,62.2a24,24,0,0,0-33.14.77l-9,9a16,16,0,0,0,0,22.64l2,2.06-51,51a39.75,39.75,0,0,0-10.53,38l-8,18.41A13.68,13.68,0,0,0,36,219.3a15.92,15.92,0,0,0,17.71,3.35L71.23,215a39.89,39.89,0,0,0,37.06-10.75l51-51,2.06,2.06a16,16,0,0,0,22.62,0l9-9a24,24,0,0,0,.74-33.18l19.75-19.87A35.75,35.75,0,0,0,224,67.3ZM97,193a24,24,0,0,1-24,6,8,8,0,0,0-5.55.31l-18.1,7.91L57,189.41a8,8,0,0,0,.25-5.75A23.88,23.88,0,0,1,63,159l51-51,33.94,34ZM202.13,82l-25.37,25.52a8,8,0,0,0,0,11.3l4.89,4.89a8,8,0,0,1,0,11.32l-9,9L112,83.26l9-9a8,8,0,0,1,11.31,0l4.89,4.89a8,8,0,0,0,5.65,2.34h0a8,8,0,0,0,5.66-2.36l24.94-25.09c7.81-7.82,20.5-8.18,28.29-.81a20,20,0,0,1,.39,28.7Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,67.3a35.79,35.79,0,0,0-11.26-25.66c-14-13.28-36.72-12.78-50.62,1.13L138.8,66.2a24,24,0,0,0-33.14.77l-5,5a16,16,0,0,0,0,22.64l2,2.06-51,51a39.75,39.75,0,0,0-10.53,38l-8,18.41A13.68,13.68,0,0,0,36,219.3a15.92,15.92,0,0,0,17.71,3.35L71.23,215a39.89,39.89,0,0,0,37.06-10.75l51-51,2.06,2.06a16,16,0,0,0,22.62,0l5-5a24,24,0,0,0,.74-33.18l23.75-23.87A35.75,35.75,0,0,0,224,67.3ZM97,193a24,24,0,0,1-24,6,8,8,0,0,0-5.55.31l-18.1,7.91L57,189.41a8,8,0,0,0,.25-5.75A23.88,23.88,0,0,1,63,159l51-51,33.94,34Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M222,67.34a33.81,33.81,0,0,0-10.64-24.25C198.12,30.56,176.68,31,163.54,44.18L142.82,65l-.63-.63a22,22,0,0,0-31.11,0l-9,9a14,14,0,0,0,0,19.81l3.47,3.47L53.14,149.1a37.79,37.79,0,0,0-9.84,36.73l-8.31,19a11.68,11.68,0,0,0,2.46,13A13.91,13.91,0,0,0,47.32,222,14.15,14.15,0,0,0,53,220.82L71,212.92a37.92,37.92,0,0,0,35.84-10.07l52.44-52.46,3.47,3.48a14,14,0,0,0,19.8,0l9-9a22,22,0,0,0,0-31.12l-.66-.66L212,91.85A33.76,33.76,0,0,0,222,67.34Zm-123.61,127a26,26,0,0,1-26,6.47,6,6,0,0,0-4.16.24l-20,8.75a2,2,0,0,1-2.09-.31l9.12-20.9a5.94,5.94,0,0,0,.19-4.31,25.88,25.88,0,0,1,6.26-26.72l52.44-52.45,36.76,36.78Zm105.16-111L178.17,108.9a6,6,0,0,0,0,8.47l4.88,4.89a10,10,0,0,1,0,14.15l-9,9a2,2,0,0,1-2.82,0l-60.69-60.7a2,2,0,0,1,0-2.83l9-9a10,10,0,0,1,14.14,0l4.89,4.89a6,6,0,0,0,4.24,1.75h0a6,6,0,0,0,4.25-1.77L172,52.66c8.58-8.58,22.52-9,31.08-.85a22,22,0,0,1,.44,31.57Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,67.3a35.79,35.79,0,0,0-11.26-25.66c-14-13.28-36.72-12.78-50.62,1.13L142.8,62.2a24,24,0,0,0-33.14.77l-9,9a16,16,0,0,0,0,22.64l2,2.06-51,51a39.75,39.75,0,0,0-10.53,38l-8,18.41A13.68,13.68,0,0,0,36,219.3a15.92,15.92,0,0,0,17.71,3.35L71.23,215a39.89,39.89,0,0,0,37.06-10.75l51-51,2.06,2.06a16,16,0,0,0,22.62,0l9-9a24,24,0,0,0,.74-33.18l19.75-19.87A35.75,35.75,0,0,0,224,67.3ZM97,193a24,24,0,0,1-24,6,8,8,0,0,0-5.55.31l-18.1,7.91L57,189.41a8,8,0,0,0,.25-5.75A23.88,23.88,0,0,1,63,159l51-51,33.94,34ZM202.13,82l-25.37,25.52a8,8,0,0,0,0,11.3l4.89,4.89a8,8,0,0,1,0,11.32l-9,9L112,83.26l9-9a8,8,0,0,1,11.31,0l4.89,4.89a8,8,0,0,0,11.33,0l24.94-25.09c7.81-7.82,20.5-8.18,28.29-.81a20,20,0,0,1,.39,28.7Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M220,67.37a31.82,31.82,0,0,0-10-22.82c-12.46-11.8-32.66-11.33-45,1.05L142.82,67.86l-2-2a20,20,0,0,0-28.28,0l-9,9a12,12,0,0,0,0,17l4.89,4.89L54.55,150.52A35.81,35.81,0,0,0,45.42,186l-8.6,19.7a9.7,9.7,0,0,0,2,10.79A12,12,0,0,0,52.15,219l18.72-8.18a35.9,35.9,0,0,0,34.59-9.37l53.86-53.87,4.88,4.89a12,12,0,0,0,17,0l9-9a20,20,0,0,0,0-28.3l-2.06-2.06,22.55-22.69A31.75,31.75,0,0,0,220,67.37ZM99.81,195.78a28,28,0,0,1-28,7,4,4,0,0,0-2.78.15l-20,8.75a4,4,0,0,1-4.43-.84,1.73,1.73,0,0,1-.36-1.93l9.19-21.06a4,4,0,0,0,.12-2.88,27.87,27.87,0,0,1,6.74-28.77l53.85-53.87,39.6,39.61Zm79.78-85.47a4,4,0,0,0,0,5.65l4.89,4.89a12,12,0,0,1,0,17l-9,9a4,4,0,0,1-5.66,0L109.18,86.1a4,4,0,0,1,0-5.66l9-9a12,12,0,0,1,17,0L140,76.36a4,4,0,0,0,2.83,1.17h0a4,4,0,0,0,2.83-1.18l25-25.1c9.33-9.34,24.52-9.73,33.87-.89A24,24,0,0,1,205,84.79Z"}))]]),o=t.forwardRef((e,o)=>t.createElement(n.default,{ref:o,...e,weights:a}));o.displayName="EyedropperIcon",e.s(["EyedropperIcon",0,o],648858)},559902,e=>{"use strict";var t=e.i(648863),n=e.i(391398),a=e.i(990865),o={root:"m_f9458cfe"},r=e.i(232471),i=e.i(481178),l=e.i(275519),s=e.i(317477),c=e.i(44091),d=e.i(391466),u=e.i(321020),p=e.i(378097),m=e.i(723451),h=e.i(191788);let f={withGradient:!0,connectNulls:!0,fillOpacity:.6,strokeWidth:2,curveType:"linear"},x=(0,i.createVarsResolver)((e,{color:t,data:n,trendColors:a})=>{let o,r;return{root:{"--chart-color":a?(0,s.getThemeColor)((o=n[0],r=n[n.length-1],null===o||null===r?a.neutral||a.positive:o<r?a.positive:o>r?a.negative:a.neutral||a.positive),e):t?(0,s.getThemeColor)(t,e):void 0}}}),g=(0,l.factory)(e=>{let t=(0,c.useProps)("Sparkline",f,e),{classNames:i,className:l,style:s,styles:g,unstyled:v,vars:y,data:b,withGradient:j,fillOpacity:M,curveType:w,strokeWidth:A,trendColors:C,connectNulls:k,areaProps:I,attributes:P,...S}=t,B=(0,d.useStyles)({name:"Sparkline",classes:o,props:t,className:l,style:s,classNames:i,styles:g,unstyled:v,attributes:P,vars:y,varsResolver:x}),T=(0,h.useId)(),D=(0,h.useMemo)(()=>b.map((e,t)=>({value:e,index:t})),[b]);return(0,n.jsx)(r.Box,{...B("root"),...S,dir:"ltr",children:(0,n.jsx)(m.ResponsiveContainer,{children:(0,n.jsxs)(p.AreaChart,{data:D,children:[(0,n.jsx)(u.Area,{dataKey:"value",type:w,fill:`url(#${T})`,stroke:"var(--chart-color, var(--mantine-color-blue-filled))",isAnimationActive:!1,connectNulls:k,strokeWidth:A,fillOpacity:1,activeDot:!1,...I}),(0,n.jsx)("defs",{children:(0,n.jsx)(a.AreaGradient,{id:T,color:"var(--chart-color, var(--mantine-color-blue-filled))",fillOpacity:M,withGradient:j})})]})})})});g.displayName="@mantine/charts/Sparkline",g.classes=o,g.varsResolver=x;let v={type:"configurator",component:function(e){return(0,n.jsx)(g,{w:200,h:60,data:[10,20,40,20,40,10,50],...e})},code:`
import { Sparkline } from '@mantine/charts';


function Demo() {
  return (
    <Sparkline
      w={200}
      h={60}
      data={[10, 20, 40, 20, 40, 10, 50]}
      {{props}}
    />
  );
}
`,centered:!0,controls:[{type:"select",prop:"curveType",initialValue:"linear",libraryValue:null,data:[{value:"bump",label:"bump"},{value:"linear",label:"linear"},{value:"natural",label:"natural"},{value:"monotone",label:"monotone"},{value:"step",label:"step"},{value:"stepBefore",label:"stepBefore"},{value:"stepAfter",label:"stepAfter"}]},{type:"color",prop:"color",initialValue:"blue",libraryValue:null},{type:"number",prop:"fillOpacity",initialValue:.6,libraryValue:null,min:0,max:1,step:.01},{type:"boolean",prop:"withGradient",initialValue:!0,libraryValue:!0},{type:"number",prop:"strokeWidth",initialValue:2,libraryValue:null,step:.1,min:.5,max:5}]},y={type:"code",component:function(){return(0,n.jsx)(g,{w:200,h:80,data:[10,20,40,20,40,10,50],className:"m_b7fa7826"})},code:[{code:`.root {
  @mixin light {
    --chart-color: var(--mantine-color-orange-8);
  }

  @mixin dark {
    --chart-color: var(--mantine-color-lime-4);
  }
}
`,language:"scss",fileName:"Demo.module.css"},{code:`
import { Sparkline } from '@mantine/charts';
import classes from './Demo.module.css';

function Demo() {
  return <Sparkline w={200} h={80} data={[10, 20, 40, 20, 40, 10, 50]} className={classes.root} />;
}
`,language:"tsx",fileName:"Demo.tsx"}],centered:!0};var b=e.i(671640),j=e.i(883364);let M=[10,20,40,20,40,10,50],w=[50,40,20,40,20,40,10],A=[10,20,40,20,40,10,50,5,10],C={type:"code",component:function(){return(0,n.jsxs)(b.Stack,{gap:"sm",children:[(0,n.jsx)(j.Text,{children:"Positive trend:"}),(0,n.jsx)(g,{w:200,h:60,data:M,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2}),(0,n.jsx)(j.Text,{mt:"md",children:"Negative trend:"}),(0,n.jsx)(g,{w:200,h:60,data:w,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2}),(0,n.jsx)(j.Text,{mt:"md",children:"Neutral trend:"}),(0,n.jsx)(g,{w:200,h:60,data:A,trendColors:{positive:"teal.6",negative:"red.6",neutral:"gray.5"},fillOpacity:.2})]})},code:`
import { Sparkline } from '@mantine/charts';
import { Stack, Text } from '@mantine/core';

const positiveTrend = [10, 20, 40, 20, 40, 10, 50];
const negativeTrend = [50, 40, 20, 40, 20, 40, 10];
const neutralTrend = [10, 20, 40, 20, 40, 10, 50, 5, 10];

function Demo() {
  return (
    <Stack gap="sm">
      <Text>Positive trend:</Text>
      <Sparkline
        w={200}
        h={60}
        data={positiveTrend}
        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
      />

      <Text mt="md">Negative trend:</Text>
      <Sparkline
        w={200}
        h={60}
        data={negativeTrend}
        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
      />

      <Text mt="md">Neutral trend:</Text>
      <Sparkline
        w={200}
        h={60}
        data={neutralTrend}
        trendColors={{ positive: 'teal.6', negative: 'red.6', neutral: 'gray.5' }}
        fillOpacity={0.2}
      />
    </Stack>
  );
}
`,centered:!0};var k=(0,t.__exportAll)({colorSchemeColor:()=>y,trendColors:()=>C,usage:()=>v});e.s(["SparklineDemos",0,k],559902)},517494,e=>{"use strict";var t=e.i(391398),n=e.i(38856),a=e.i(491607),o=e.i(14625),r=e.i(816093),i=e.i(823608),l=e.i(137334),s=e.i(559902),c=e.i(366586),d=e.i(233151),u=e.i(975073);e.i(603441);var p=e.i(62558);e.i(457450);var m=e.i(418026);let h=(0,p.Layout)(m.MDX_DATA.Changelog760);function f(e){let p={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.useMDXComponents)(),...e.components},{Demo:m}=p;return m||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(p.h2,{id:"container-queries-support",children:"Container queries support"}),"\n",(0,t.jsxs)(p.p,{children:["You can now use ",(0,t.jsx)(p.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries",children:"container queries"}),"\nwith Mantine components. ",(0,t.jsx)(p.code,{children:"rem"})," and ",(0,t.jsx)(p.code,{children:"em"})," functions from ",(0,t.jsx)(p.a,{href:"/styles/postcss-preset/#remem-functions",children:"postcss-preset-mantine"}),"\nare available in container queries staring from ",(0,t.jsx)(p.code,{children:"postcss-preset-mantine@1.13.0"}),"."]}),"\n",(0,t.jsx)(m,{data:c.StylesDemos.containers}),"\n",(0,t.jsx)(p.h2,{id:"radarchart-component",children:"RadarChart component"}),"\n",(0,t.jsxs)(p.p,{children:["New ",(0,t.jsx)(p.a,{href:"/charts/radar-chart/",children:"RadarChart"})," component:"]}),"\n",(0,t.jsx)(m,{data:i.RadarChartDemos.multiple}),"\n",(0,t.jsx)(p.h2,{id:"focustrapinitialfocus-component",children:"FocusTrap.InitialFocus component"}),"\n",(0,t.jsxs)(p.p,{children:[(0,t.jsx)(p.a,{href:"/core/focus-trap",children:"FocusTrap.InitialFocus"})," is a new component that adds a visually hidden\nelement which will receive the focus when the focus trap is activated.\nOnce ",(0,t.jsx)(p.code,{children:"FocusTrap.InitialFocus"})," loses focus, it is removed from the tab order."]}),"\n",(0,t.jsxs)(p.p,{children:["For example, it is useful if you do not want to focus any elements inside the ",(0,t.jsx)(p.a,{href:"/core/modal",children:"Modal"})," when it is opened:"]}),"\n",(0,t.jsx)(m,{data:o.ModalDemos.initialFocusTrap}),"\n",(0,t.jsx)(p.h2,{id:"new-mantineprovider-props",children:"New MantineProvider props"}),"\n",(0,t.jsxs)(p.p,{children:[(0,t.jsx)(p.a,{href:"/theming/mantine-provider",children:"MantineProvider"})," now includes more props to control how styles\nare generated and injected. These props are useful if you use Mantine as a headless library\nand in test environments."]}),"\n",(0,t.jsx)(p.h3,{id:"deduplicatecssvariables",children:"deduplicateCssVariables"}),"\n",(0,t.jsxs)(p.p,{children:[(0,t.jsx)(p.code,{children:"deduplicateCssVariables"})," prop determines whether CSS variables should be deduplicated: if a CSS variable has the same value as in the default theme, it is not added in the runtime.\nBy default, it is set to ",(0,t.jsx)(p.code,{children:"true"}),". If set to ",(0,t.jsx)(p.code,{children:"false"}),", all Mantine CSS variables will be added in ",(0,t.jsx)(p.code,{children:"<style />"})," tag,\neven if they have the same value as in the default theme."]}),"\n",(0,t.jsx)(p.pre,{children:(0,t.jsx)(p.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider deduplicateCssVariables={false}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(p.h3,{id:"withstaticclasses",children:"withStaticClasses"}),"\n",(0,t.jsxs)(p.p,{children:[(0,t.jsx)(p.code,{children:"withStaticClasses"})," determines whether components should have static classes, for example, ",(0,t.jsx)(p.code,{children:"mantine-Button-root"}),".\nBy default, static classes are enabled, to disable them set ",(0,t.jsx)(p.code,{children:"withStaticClasses"})," to ",(0,t.jsx)(p.code,{children:"false"}),":"]}),"\n",(0,t.jsx)(p.pre,{children:(0,t.jsx)(p.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider withStaticClasses={false}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(p.h3,{id:"withglobalclasses",children:"withGlobalClasses"}),"\n",(0,t.jsxs)(p.p,{children:[(0,t.jsx)(p.code,{children:"withGlobalClasses"})," determines whether global classes should be added with ",(0,t.jsx)(p.code,{children:"<style />"})," tag.\nGlobal classes are required for ",(0,t.jsx)(p.code,{children:"hiddenFrom"}),"/",(0,t.jsx)(p.code,{children:"visibleFrom"})," and ",(0,t.jsx)(p.code,{children:"lightHidden"}),"/",(0,t.jsx)(p.code,{children:"darkHidden"})," props to work.\nBy default, global classes are enabled, to disable them set ",(0,t.jsx)(p.code,{children:"withGlobalClasses"})," to ",(0,t.jsx)(p.code,{children:"false"}),". Note that\ndisabling global classes may break styles of some components."]}),"\n",(0,t.jsx)(p.pre,{children:(0,t.jsx)(p.code,{className:"language-tsx",children:"import { MantineProvider } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <MantineProvider withGlobalClasses={false}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(p.h2,{id:"headlessmantineprovider",children:"HeadlessMantineProvider"}),"\n",(0,t.jsxs)(p.p,{children:[(0,t.jsx)(p.code,{children:"HeadlessMantineProvider"})," is an alternative to ",(0,t.jsx)(p.a,{href:"/theming/mantine-provider",children:"MantineProvider"}),"\nthat should be used when you want to use Mantine as a headless UI library. It removes all\nfeatures that are related to Mantine styles:"]}),"\n",(0,t.jsxs)(p.ul,{children:["\n",(0,t.jsx)(p.li,{children:"Mantine classes are not applied to components"}),"\n",(0,t.jsxs)(p.li,{children:["Inline CSS variables are not added with ",(0,t.jsx)(p.code,{children:"style"})," attribute"]}),"\n",(0,t.jsx)(p.li,{children:"All color scheme related features are removed"}),"\n",(0,t.jsx)(p.li,{children:"Global styles are not generated"}),"\n"]}),"\n",(0,t.jsxs)(p.p,{children:["Limitations of ",(0,t.jsx)(p.code,{children:"HeadlessMantineProvider"}),":"]}),"\n",(0,t.jsxs)(p.ul,{children:["\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.a,{href:"/theming/color-schemes/",children:"Color scheme switching"})," will not work. If your application has a dark mode, you will need to implement it on your side."]}),"\n",(0,t.jsxs)(p.li,{children:["Props that are related to styles in all components (",(0,t.jsx)(p.code,{children:"color"}),", ",(0,t.jsx)(p.code,{children:"radius"}),", ",(0,t.jsx)(p.code,{children:"size"}),", etc.) will have no effect."]}),"\n",(0,t.jsxs)(p.li,{children:["Some components that rely on styles will become unusable (",(0,t.jsx)(p.a,{href:"/core/grid",children:"Grid"}),", ",(0,t.jsx)(p.a,{href:"/core/simple-grid",children:"SimpleGrid"}),", ",(0,t.jsx)(p.a,{href:"/core/container",children:"Container"}),", etc.)."]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.code,{children:"lightHidden"}),"/",(0,t.jsx)(p.code,{children:"darkHidden"}),", ",(0,t.jsx)(p.code,{children:"visibleFrom"}),"/",(0,t.jsx)(p.code,{children:"hiddenFrom"})," props will not work."]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.a,{href:"/styles/style-props/",children:"Style props"})," will work only with explicit values, for example ",(0,t.jsx)(p.code,{children:'mt="xs"'})," will not work, but ",(0,t.jsx)(p.code,{children:"mt={5}"})," will."]}),"\n"]}),"\n",(0,t.jsxs)(p.p,{children:["To use ",(0,t.jsx)(p.code,{children:"HeadlessMantineProvider"}),", follow the ",(0,t.jsx)(p.a,{href:"/getting-started/",children:"getting started guide"})," and replace ",(0,t.jsx)(p.code,{children:"MantineProvider"})," with ",(0,t.jsx)(p.code,{children:"HeadlessMantineProvider"}),".\nNote that you do not need to use ",(0,t.jsx)(p.a,{href:"/theming/color-schemes/#colorschemescript",children:"ColorSchemeScript"})," in your application, it will not have any effect,\nyou can ignore this part of the guide."]}),"\n",(0,t.jsx)(p.pre,{children:(0,t.jsx)(p.code,{className:"language-tsx",children:"import { HeadlessMantineProvider } from '@mantine/core';\n\nfunction App() {\n  return (\n    <HeadlessMantineProvider>\n      {/* Your application */}\n    </HeadlessMantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(p.h2,{id:"sparkline-trendcolors",children:"Sparkline trendColors"}),"\n",(0,t.jsxs)(p.p,{children:[(0,t.jsx)(p.a,{href:"/charts/sparkline/",children:"Sparkline"})," now supports ",(0,t.jsx)(p.code,{children:"trendColors"})," prop to change chart color depending on the trend.\nThe prop accepts an object with ",(0,t.jsx)(p.code,{children:"positive"}),", ",(0,t.jsx)(p.code,{children:"negative"})," and ",(0,t.jsx)(p.code,{children:"neutral"})," properties:"]}),"\n",(0,t.jsxs)(p.ul,{children:["\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.code,{children:"positive"})," - color for positive trend (first value is less than the last value in ",(0,t.jsx)(p.code,{children:"data"})," array)"]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.code,{children:"negative"})," - color for negative trend (first value is greater than the last value in ",(0,t.jsx)(p.code,{children:"data"})," array)"]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.code,{children:"neutral"})," - color for neutral trend (first and last values are equal)"]}),"\n"]}),"\n",(0,t.jsxs)(p.p,{children:[(0,t.jsx)(p.code,{children:"neutral"})," is optional, if not provided, the color will be the same as ",(0,t.jsx)(p.code,{children:"positive"}),"."]}),"\n",(0,t.jsx)(m,{data:s.SparklineDemos.trendColors}),"\n",(0,t.jsx)(p.h2,{id:"richtexteditor-tasks-extension",children:"RichTextEditor tasks extension"}),"\n",(0,t.jsxs)(p.p,{children:[(0,t.jsx)(p.a,{href:"/x/tiptap/#tasks",children:"RichTextEditor"})," now supports tasks ",(0,t.jsx)(p.a,{href:"https://tiptap.dev/docs/editor/api/nodes/task-list",children:"tiptap extension"}),":"]}),"\n",(0,t.jsx)(m,{data:u.TipTapDemos.tasks}),"\n",(0,t.jsx)(p.h2,{id:"renderoption-prop",children:"renderOption prop"}),"\n",(0,t.jsxs)(p.p,{children:[(0,t.jsx)(p.a,{href:"/core/select",children:"Select"}),", ",(0,t.jsx)(p.a,{href:"/core/multi-select",children:"MultiSelect"}),", ",(0,t.jsx)(p.a,{href:"/inputs/tags-input",children:"TagsInput"})," and ",(0,t.jsx)(p.a,{href:"/inputs/autocomplete",children:"Autocomplete"}),"\ncomponents now support ",(0,t.jsx)(p.code,{children:"renderOption"})," prop that allows to customize option rendering:"]}),"\n",(0,t.jsx)(m,{data:l.SelectDemos.renderOption}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(m,{data:d.TagsInputDemos.renderOption}),"\n",(0,t.jsx)(p.h2,{id:"styles-improvements",children:"Styles improvements"}),"\n",(0,t.jsxs)(p.p,{children:["All Mantine components have been migrated to ",(0,t.jsx)(p.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values",children:"logical CSS properties"}),"\n(as a replacement for rtl styles) and ",(0,t.jsx)(p.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:where",children:":where"})," pseudo-class\n(as a replacement for ",(0,t.jsx)(p.a,{href:"https://help.mantine.dev/q/private-css-variables",children:"private CSS variables"}),"). These changes\nshould not impact the usage of Mantine components, but now Mantine CSS files have smaller size. For example,\n",(0,t.jsx)(p.code,{children:"@mantine/core/styles.css"})," now has ~ 8% smaller size (192kb -> 177kb)."]}),"\n",(0,t.jsx)(p.h2,{id:"pass-props-to-inner-recharts-components",children:"Pass props to inner recharts components"}),"\n",(0,t.jsxs)(p.p,{children:["You can now pass props down to recharts ",(0,t.jsx)(p.a,{href:"https://recharts.org/en-US/api/Bar",children:"Bar"}),", ",(0,t.jsx)(p.a,{href:"https://recharts.org/en-US/api/Area",children:"Area"})," and ",(0,t.jsx)(p.a,{href:"https://recharts.org/en-US/api/Line",children:"Line"})," components\nwith ",(0,t.jsx)(p.code,{children:"barProps"}),", ",(0,t.jsx)(p.code,{children:"areaProps"})," and ",(0,t.jsx)(p.code,{children:"lineProps"})," props on ",(0,t.jsx)(p.a,{href:"/charts/bar-chart",children:"BarChart"}),", ",(0,t.jsx)(p.a,{href:"/charts/area-chart",children:"AreaChart"})," and ",(0,t.jsx)(p.a,{href:"/charts/line-chart",children:"LineChart"})," components."]}),"\n",(0,t.jsx)(p.p,{children:"All props accept either an object with props or a function that receives\nseries data as an argument and returns an object with props."}),"\n",(0,t.jsx)(m,{data:a.BarChartDemos.barProps}),"\n",(0,t.jsx)(p.h2,{id:"piechart-percent-labels",children:"PieChart percent labels"}),"\n",(0,t.jsxs)(p.p,{children:[(0,t.jsx)(p.a,{href:"/charts/pie-chart/",children:"PieChart"})," now supports ",(0,t.jsx)(p.code,{children:"percent"})," labels:"]}),"\n",(0,t.jsx)(m,{data:r.PieChartDemos.withLabels}),"\n",(0,t.jsx)(p.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,t.jsxs)(p.ul,{children:["\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.a,{href:"/styles/responsive",children:"Responsive styles guide"})," now includes new sections about responsive props and container queries"]}),"\n",(0,t.jsxs)(p.li,{children:["New ",(0,t.jsx)(p.a,{href:"/styles/unstyled/#headlessmantineprovider",children:"HeadlessMantineProvider section"})," in the unstyled guide"]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.a,{href:"/core/action-icon/",children:"ActionIcon"})," now includes additional documentation section on how to make the button the same size as Mantine inputs"]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.a,{href:"/charts/area-chart",children:"AreaChart"})," now includes an example of how to rotate x-axis labels"]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.a,{href:"/guides/redwood/",children:"Redwood guide"})," has been updated to the latest redwood version with Vite"]}),"\n"]}),"\n",(0,t.jsx)(p.h2,{id:"help-center-updates",children:"Help center updates"}),"\n",(0,t.jsxs)(p.p,{children:["New articles added to the ",(0,t.jsx)(p.a,{href:"https://help.mantine.dev",children:"help center"}),":"]}),"\n",(0,t.jsxs)(p.ul,{children:["\n",(0,t.jsx)(p.li,{children:(0,t.jsx)(p.a,{href:"https://help.mantine.dev/q/browser-zooms-on-focus",children:"Browser zooms in when input is focused. What should I do?"})}),"\n",(0,t.jsx)(p.li,{children:(0,t.jsx)(p.a,{href:"https://help.mantine.dev/q/pinch-to-zoom-modal",children:"It is not possible to pinch to zoom when Modal is opened. What should I do?"})}),"\n",(0,t.jsx)(p.li,{children:(0,t.jsx)(p.a,{href:"https://help.mantine.dev/q/how-to-lock-scroll",children:"How can I lock scroll in my application?"})}),"\n",(0,t.jsx)(p.li,{children:(0,t.jsx)(p.a,{href:"https://help.mantine.dev/q/roadmap",children:"Where can I find the roadmap?"})}),"\n",(0,t.jsx)(p.li,{children:(0,t.jsx)(p.a,{href:"https://help.mantine.dev/q/tabs-border-color",children:"How can I change Tabs border color?"})}),"\n",(0,t.jsx)(p.li,{children:(0,t.jsx)(p.a,{href:"https://help.mantine.dev/q/input-focus-styles",children:"How can I change inputs focus styles?"})}),"\n",(0,t.jsx)(p.li,{children:(0,t.jsx)(p.a,{href:"https://help.mantine.dev/q/third-party-styles",children:"Can I use Mantine with Emotion/styled-components/tailwindcss?"})}),"\n",(0,t.jsx)(p.li,{children:(0,t.jsx)(p.a,{href:"https://help.mantine.dev/q/input-mask",children:"Is there a way to add mask to Mantine input?"})}),"\n",(0,t.jsx)(p.li,{children:(0,t.jsx)(p.a,{href:"https://help.mantine.dev/q/align-input-button",children:"How to align input with a button in a flex container?"})}),"\n",(0,t.jsx)(p.li,{children:(0,t.jsx)(p.a,{href:"https://help.mantine.dev/q/color-scheme-color",children:"How can I change component color prop value depending on the color scheme?"})}),"\n"]}),"\n",(0,t.jsx)(p.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(p.ul,{children:["\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.a,{href:"/hooks/use-list-state/",children:"use-list-state"})," hook now supports ",(0,t.jsx)(p.code,{children:"swap"})," handler"]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.code,{children:"form.setFieldValue"})," now supports callback function as an argument"]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.code,{children:"px"}),", ",(0,t.jsx)(p.code,{children:"py"}),", ",(0,t.jsx)(p.code,{children:"mx"})," and ",(0,t.jsx)(p.code,{children:"my"})," ",(0,t.jsx)(p.a,{href:"/styles/style-props/",children:"style props"})," now use logical CSS properties ",(0,t.jsx)(p.code,{children:"padding-inline"}),", ",(0,t.jsx)(p.code,{children:"padding-block"}),", ",(0,t.jsx)(p.code,{children:"margin-inline"})," and ",(0,t.jsx)(p.code,{children:"margin-block"})," instead of ",(0,t.jsx)(p.code,{children:"padding-left"}),", ",(0,t.jsx)(p.code,{children:"padding-right"}),", etc."]}),"\n",(0,t.jsxs)(p.li,{children:["All components now support ",(0,t.jsx)(p.code,{children:"me"}),", ",(0,t.jsx)(p.code,{children:"ms"}),", ",(0,t.jsx)(p.code,{children:"ps"}),", ",(0,t.jsx)(p.code,{children:"pe"})," ",(0,t.jsx)(p.a,{href:"/styles/style-props/",children:"style props"})," to set ",(0,t.jsx)(p.code,{children:"margin-inline-end"}),", ",(0,t.jsx)(p.code,{children:"margin-inline-start"}),", ",(0,t.jsx)(p.code,{children:"padding-inline-start"})," and ",(0,t.jsx)(p.code,{children:"padding-inline-end"})," CSS properties"]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.a,{href:"/core/tooltip",children:"Tooltip"}),", ",(0,t.jsx)(p.a,{href:"/core/popover",children:"Popover"})," and other components based on ",(0,t.jsx)(p.code,{children:"Popover"})," now support ",(0,t.jsx)(p.code,{children:"floatingStrategy"})," prop to control ",(0,t.jsx)(p.a,{href:"https://floating-ui.com/docs/usefloating#strategy",children:"Floating UI strategy"})]}),"\n",(0,t.jsxs)(p.li,{children:["All ",(0,t.jsx)(p.code,{children:"@mantine/charts"})," components now support ",(0,t.jsx)(p.code,{children:"children"})," prop, which passes children to the root recharts component"]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.a,{href:"/hooks/use-resize-observer/",children:"use-resize-observer"})," and ",(0,t.jsx)(p.a,{href:"/hooks/use-element-size/",children:"use-element-size"})," hooks now support ",(0,t.jsx)(p.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe#parameters",children:"ResizeObserver options"})," as hook argument"]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.a,{href:"/core/select",children:"Select"}),", ",(0,t.jsx)(p.a,{href:"/core/multi-select",children:"MultiSelect"})," and ",(0,t.jsx)(p.a,{href:"/inputs/tags-input",children:"TagsInput"})," now support ",(0,t.jsx)(p.code,{children:"onClear"})," prop, the function is called when clear button is clicked"]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.a,{href:"/core/multi-select",children:"MultiSelect"})," and ",(0,t.jsx)(p.a,{href:"/inputs/tags-input",children:"TagsInput"})," now support ",(0,t.jsx)(p.code,{children:"onRemove"})," prop, the function is called with removed item value when one of the items is deselected"]}),"\n",(0,t.jsxs)(p.li,{children:[(0,t.jsx)(p.a,{href:"https://github.com/mantinedev/redwood-template",children:"Redwood template"})," has been updated to the latest redwood version with Vite"]}),"\n"]})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(h,{...e,children:(0,t.jsx)(f,{...e})})}])},10001,(e,t,n)=>{let a="/changelog/7-6-0";(window.__NEXT_P=window.__NEXT_P||[]).push([a,()=>e.r(517494)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([a])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);