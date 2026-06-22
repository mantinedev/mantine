(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let r={};for(var n in e)t(r,n,{get:e[n],enumerable:!0});return a||t(r,Symbol.toStringTag,{value:"Module"}),r}])},257177,e=>{"use strict";var t=e.i(433512),a=e.i(481178),r=e.i(317477),n=e.i(44091),o=e.i(391466),l=e.i(956449),i=e.i(232471),s={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},c=e.i(391398);let d=(0,a.createVarsResolver)((e,{radius:a,color:n,gradient:o,variant:l,size:i,autoContrast:s,circle:c})=>{let d=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:o,variant:l||"filled",autoContrast:s});return{root:{"--badge-height":(0,t.getSize)(i,"badge-height"),"--badge-padding-x":(0,t.getSize)(i,"badge-padding-x"),"--badge-fz":(0,t.getSize)(i,"badge-fz"),"--badge-radius":c||void 0===a?void 0:(0,t.getRadius)(a),"--badge-bg":n||l?d.background:void 0,"--badge-color":n||l?d.color:void 0,"--badge-bd":n||l?d.border:void 0,"--badge-dot-color":"dot"===l?(0,r.getThemeColor)(n,e):void 0}}}),u=(0,l.polymorphicFactory)(e=>{let t=(0,n.useProps)("Badge",null,e),{classNames:a,className:r,style:l,styles:u,unstyled:m,vars:p,radius:f,color:h,gradient:v,leftSection:x,rightSection:y,children:g,variant:b,fullWidth:j,autoContrast:S,circle:k,mod:C,attributes:A,...M}=t,w=(0,o.useStyles)({name:"Badge",props:t,classes:s,className:r,style:l,classNames:a,styles:u,unstyled:m,attributes:A,vars:p,varsResolver:d});return(0,c.jsxs)(i.Box,{variant:b,mod:[{block:j,circle:k,"with-right-section":!!y,"with-left-section":!!x},C],...w("root",{variant:b}),...M,children:[x&&(0,c.jsx)("span",{...w("section"),"data-position":"left",children:x}),(0,c.jsx)("span",{...w("label"),children:g}),y&&(0,c.jsx)("span",{...w("section"),"data-position":"right",children:y})]})});u.classes=s,u.varsResolver=d,u.displayName="@mantine/core/Badge",e.s(["Badge",0,u],257177)},123895,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20a108,108,0,0,0,0,216c22.27,0,45.69-6.73,62.64-18a12,12,0,1,0-13.29-20c-13,8.63-31.89,14-49.35,14a84,84,0,1,1,84-84c0,9.29-1.67,17.08-4.69,21.95-2.64,4.24-6,6.05-11.31,6.05s-8.67-1.81-11.31-6.05c-3-4.87-4.69-12.66-4.69-21.95V88a12,12,0,0,0-23.49-3.46,52,52,0,1,0,8.86,79.57C172.3,174.3,182.81,180,196,180c24.67,0,40-19.92,40-52A108.12,108.12,0,0,0,128,20Zm0,136a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232,128c0,.51,0,1,0,1.52-.34,14.26-5.63,30.48-28,30.48-23.14,0-28-17.4-28-32V88a8,8,0,0,0-8.53-8A8.17,8.17,0,0,0,160,88.27v4a48,48,0,1,0,6.73,64.05,40.19,40.19,0,0,0,3.38,5C175.48,168,185.71,176,204,176a54.81,54.81,0,0,0,9.22-.75,4,4,0,0,1,4.09,6A104.05,104.05,0,0,1,125.91,232C71.13,230.9,26.2,186.86,24.08,132.11A104,104,0,1,1,232,128ZM96,128a32,32,0,1,0,32-32A32,32,0,0,0,96,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26a102,102,0,0,0,0,204c21.13,0,43.31-6.35,59.32-17a6,6,0,0,0-6.65-10c-13.9,9.25-34.09,15-52.67,15a90,90,0,1,1,90-90c0,29.58-13.78,34-22,34s-22-4.42-22-34V88a6,6,0,0,0-12,0v9a46,46,0,1,0,4.34,56.32C171.76,166.6,182,174,196,174c21.29,0,34-17.2,34-46A102.12,102.12,0,0,0,128,26Zm0,136a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28a100,100,0,0,0,0,200c20.76,0,42.52-6.23,58.21-16.66a4,4,0,1,0-4.43-6.67C167.35,214.27,147.24,220,128,220a92,92,0,1,1,92-92c0,31.32-15,36-24,36s-24-4.68-24-36V88a4,4,0,0,0-8,0v14.75a44,44,0,1,0,2.82,45.94C171.46,163.58,181.66,172,196,172c20,0,32-16.45,32-44A100.11,100.11,0,0,0,128,28Zm0,136a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(a.default,{ref:n,...e,weights:r}));n.displayName="AtIcon",e.s(["AtIcon",0,n],123895)},541772,e=>{"use strict";var t=e.i(191788);e.s(["useDisclosure",0,function(e=!1,a={}){let[r,n]=(0,t.useState)(e),o=(0,t.useCallback)(()=>{n(e=>e||(a.onOpen?.(),!0))},[a.onOpen]),l=(0,t.useCallback)(()=>{n(e=>e?(a.onClose?.(),!1):e)},[a.onClose]);return[r,{open:o,close:l,toggle:(0,t.useCallback)(()=>{r?l():o()},[l,o,r]),set:n}]}])},477777,430731,637245,225147,811590,426611,32044,446817,e=>{"use strict";var t=e.i(232471);let[a,r]=(0,e.i(386179).createSafeContext)("ModalBase component was not found in tree");var n=e.i(191788),o=e.i(56206),l=e.i(391398);function i({className:e,...a}){let s,c=(s=r(),(0,n.useEffect)(()=>(s.setBodyMounted(!0),()=>s.setBodyMounted(!1)),[]),s.getBodyId()),d=r();return(0,l.jsx)(t.Box,{id:c,className:(0,o.default)({m_5df29311:!d.unstyled},e),...a})}i.displayName="@mantine/core/ModalBaseBody",e.s(["ModalBaseBody",0,i],477777);var s=e.i(802046);function c({className:e,onClick:t,...a}){let n=r();return(0,l.jsx)(s.CloseButton,{...a,onClick:e=>{n.onClose(),t?.(e)},className:(0,o.default)({m_606cb269:!n.unstyled},e),unstyled:n.unstyled})}c.displayName="@mantine/core/ModalBaseCloseButton",e.s(["ModalBaseCloseButton",0,c],430731);var d=e.i(470743),u=e.i(34515),m=e.i(22630);function p({transitionProps:e,className:t,innerProps:a,onKeyDown:n,style:i,ref:s,...c}){let f=r();return(0,l.jsx)(u.Transition,{mounted:f.opened,transition:"pop",...f.transitionProps,onExited:()=>{f.onExitTransitionEnd?.(),f.transitionProps?.onExited?.()},onEntered:()=>{f.onEnterTransitionEnd?.(),f.transitionProps?.onEntered?.()},...e,children:e=>(0,l.jsx)("div",{...a,className:(0,o.default)({m_60c222c7:!f.unstyled},a.className),children:(0,l.jsx)(m.FocusTrap,{active:f.opened&&f.trapFocus,innerRef:s,children:(0,l.jsx)(d.Paper,{...c,component:"section",role:"dialog",tabIndex:-1,"aria-modal":!0,"aria-describedby":f.bodyMounted?f.getBodyId():void 0,"aria-labelledby":f.titleMounted?f.getTitleId():void 0,style:[i,e],className:(0,o.default)({m_fd1ab0aa:!f.unstyled},t),unstyled:f.unstyled,children:c.children})})})})}function f({className:e,...a}){let n=r();return(0,l.jsx)(t.Box,{component:"header",className:(0,o.default)({m_b5489c3c:!n.unstyled},e),...a})}p.displayName="@mantine/core/ModalBaseContent",e.s(["ModalBaseContent",0,p],637245),e.s(["NativeScrollArea",0,function({children:e}){return(0,l.jsx)(l.Fragment,{children:e})}],225147),f.displayName="@mantine/core/ModalBaseHeader",e.s(["ModalBaseHeader",0,f],811590);var h=e.i(476273);let v={duration:200,timingFunction:"ease",transition:"fade"};function x({onClick:e,transitionProps:t,style:a,visible:n,...o}){let i,s=r(),c=(i=r(),{...v,...i.transitionProps,...t});return(0,l.jsx)(u.Transition,{mounted:void 0!==n?n:s.opened,...c,transition:"fade",children:t=>(0,l.jsx)(h.Overlay,{fixed:!0,style:[a,t],zIndex:s.zIndex,unstyled:s.unstyled,onClick:t=>{e?.(t),s.closeOnClickOutside&&s.onClose()},...o})})}x.displayName="@mantine/core/ModalBaseOverlay",e.s(["ModalBaseOverlay",0,x],426611);var y=e.i(749218),g=e.i(433512),b=e.i(164483),j=e.i(779861),S=e.i(484108),k=e.i(107315),C=e.i(133613),A=e.i(865823);function M({keepMounted:e,opened:r,onClose:o,id:i,transitionProps:s,onExitTransitionEnd:c,onEnterTransitionEnd:d,trapFocus:u,closeOnEscape:m,returnFocus:p,closeOnClickOutside:f,withinPortal:h,portalProps:v,lockScroll:x,children:w,zIndex:O,shadow:B,padding:D,__vars:P,unstyled:T,removeScrollProps:E,...I}){let{_id:V,titleMounted:N,bodyMounted:F,shouldLockScroll:z,setTitleMounted:L,setBodyMounted:R}=function({id:e,transitionProps:t,opened:a,trapFocus:r,closeOnEscape:o,onClose:l,returnFocus:i}){let s=(0,k.useId)(e),[c,d]=(0,n.useState)(!1),[u,m]=(0,n.useState)(!1),p=function({opened:e,transitionDuration:t}){let[a,r]=(0,n.useState)(e),o=(0,n.useRef)(-1),l=(0,j.useReducedMotion)()?0:t;return(0,n.useEffect)(()=>(e?(r(!0),window.clearTimeout(o.current)):0===l?r(!1):o.current=window.setTimeout(()=>r(!1),l),()=>window.clearTimeout(o.current)),[e,l]),a}({opened:a,transitionDuration:"number"==typeof t?.duration?t?.duration:200});return(0,C.useWindowEvent)("keydown",e=>{"Escape"===e.key&&o&&!e.isComposing&&a&&e.target?.getAttribute("data-mantine-stop-propagation")!=="true"&&l()},{capture:!0}),(0,S.useFocusReturn)({opened:a,shouldReturnFocus:r&&i}),{_id:s,titleMounted:c,bodyMounted:u,shouldLockScroll:p,setTitleMounted:d,setBodyMounted:m}}({id:i,transitionProps:s,opened:r,trapFocus:u,closeOnEscape:m,onClose:o,returnFocus:p}),{key:_,...Z}=E||{};return(0,l.jsx)(b.OptionalPortal,{...v,withinPortal:h,children:(0,l.jsx)(a,{value:{opened:r,onClose:o,closeOnClickOutside:f,onExitTransitionEnd:c,onEnterTransitionEnd:d,transitionProps:{...s,keepMounted:e},getTitleId:()=>`${V}-title`,getBodyId:()=>`${V}-body`,titleMounted:N,bodyMounted:F,setTitleMounted:L,setBodyMounted:R,trapFocus:u,closeOnEscape:m,zIndex:O,unstyled:T},children:(0,l.jsx)(A.RemoveScroll,{enabled:z&&x,...Z,children:(0,l.jsx)(t.Box,{...I,id:V,__vars:{...P,"--mb-z-index":(O||(0,y.getDefaultZIndex)("modal")).toString(),"--mb-shadow":(0,g.getShadow)(B),"--mb-padding":(0,g.getSpacing)(D)},children:w})},_)})})}function w({className:e,...a}){let i,s=(i=r(),(0,n.useEffect)(()=>(i.setTitleMounted(!0),()=>i.setTitleMounted(!1)),[]),i.getTitleId()),c=r();return(0,l.jsx)(t.Box,{component:"h2",className:(0,o.default)({m_615af6c9:!c.unstyled},e),id:s,...a})}M.displayName="@mantine/core/ModalBase",e.s(["ModalBase",0,M],32044),w.displayName="@mantine/core/ModalBaseTitle",e.s(["ModalBaseTitle",0,w],446817)},424302,e=>{"use strict";var t=e.i(749218),a=e.i(44091),r=e.i(275519),n={root:"m_9df02822",content:"m_54c44539",inner:"m_1f958f16",header:"m_d0e2b9cd"},o=e.i(477777);let[l,i]=(0,e.i(386179).createSafeContext)("Modal component was not found in tree");var s=e.i(391398);let c=(0,r.factory)(e=>{let{classNames:t,className:r,style:n,styles:l,vars:c,...d}=(0,a.useProps)("ModalBody",null,e);return(0,s.jsx)(o.ModalBaseBody,{...i().getStyles("body",{classNames:t,style:n,styles:l,className:r}),...d})});c.classes=n,c.displayName="@mantine/core/ModalBody";var d=e.i(430731);let u=(0,r.factory)(e=>{let{classNames:t,className:r,style:n,styles:o,vars:l,...c}=(0,a.useProps)("ModalCloseButton",null,e);return(0,s.jsx)(d.ModalBaseCloseButton,{...i().getStyles("close",{classNames:t,style:n,styles:o,className:r}),...c})});u.classes=n,u.displayName="@mantine/core/ModalCloseButton";var m=e.i(779177),p=e.i(637245),f=e.i(225147);let h=(0,r.factory)(e=>{let{classNames:t,className:r,style:n,styles:o,vars:l,children:c,__hidden:d,...u}=(0,a.useProps)("ModalContent",null,e),h=i(),v=h.scrollAreaComponent||f.NativeScrollArea;return(0,s.jsx)(p.ModalBaseContent,{...h.getStyles("content",{className:r,style:n,styles:o,classNames:t}),innerProps:h.getStyles("inner",{className:r,style:n,styles:o,classNames:t}),"data-full-screen":h.fullScreen||void 0,"data-modal-content":!0,"data-hidden":d||void 0,...u,children:(0,s.jsx)(v,{style:{maxHeight:h.fullScreen?"100dvh":`calc(100dvh - (${(0,m.rem)(h.yOffset)} * 2))`},children:c})})});h.classes=n,h.displayName="@mantine/core/ModalContent";var v=e.i(811590);let x=(0,r.factory)(e=>{let{classNames:t,className:r,style:n,styles:o,vars:l,...c}=(0,a.useProps)("ModalHeader",null,e);return(0,s.jsx)(v.ModalBaseHeader,{...i().getStyles("header",{classNames:t,style:n,styles:o,className:r}),...c})});x.classes=n,x.displayName="@mantine/core/ModalHeader";var y=e.i(426611);let g=(0,r.factory)(e=>{let{classNames:t,className:r,style:n,styles:o,vars:l,...c}=(0,a.useProps)("ModalOverlay",null,e);return(0,s.jsx)(y.ModalBaseOverlay,{...i().getStyles("overlay",{classNames:t,style:n,styles:o,className:r}),...c})});g.classes=n,g.displayName="@mantine/core/ModalOverlay";var b=e.i(433512),j=e.i(481178),S=e.i(391466),k=e.i(19300),C=e.i(32044);let A={__staticSelector:"Modal",closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:(0,t.getDefaultZIndex)("modal"),transitionProps:{duration:200,transition:"fade-down"},yOffset:"5dvh"},M=(0,j.createVarsResolver)((e,{radius:t,size:a,yOffset:r,xOffset:n})=>({root:{"--modal-radius":void 0===t?void 0:(0,b.getRadius)(t),"--modal-size":(0,b.getSize)(a,"modal-size"),"--modal-y-offset":(0,m.rem)(r),"--modal-x-offset":(0,m.rem)(n)}})),w=(0,r.factory)(e=>{let t=(0,a.useProps)("ModalRoot",A,e),{classNames:r,className:o,style:i,styles:c,unstyled:d,vars:u,yOffset:m,scrollAreaComponent:p,radius:f,fullScreen:h,centered:v,xOffset:x,__staticSelector:y,attributes:g,...b}=t,j=(0,S.useStyles)({name:y,classes:n,props:t,className:o,style:i,classNames:r,styles:c,unstyled:d,attributes:g,vars:u,varsResolver:M});return(0,s.jsx)(l,{value:{yOffset:m,scrollAreaComponent:p,getStyles:j,fullScreen:h},children:(0,s.jsx)(C.ModalBase,{...j("root"),"data-full-screen":h||void 0,"data-centered":v||void 0,"data-offset-scrollbars":p===k.ScrollArea.Autosize||void 0,unstyled:d,...b})})});w.classes=n,w.varsResolver=M,w.displayName="@mantine/core/ModalRoot";var O=e.i(191788);let B=(0,O.createContext)(null);function D({children:e}){let[a,r]=(0,O.useState)([]),[n,o]=(0,O.useState)((0,t.getDefaultZIndex)("modal"));return(0,s.jsx)(B,{value:{stack:a,addModal:(e,t)=>{r(t=>[...new Set([...t,e])]),o(e=>"number"==typeof t&&"number"==typeof e?Math.max(e,t):e)},removeModal:e=>r(t=>t.filter(t=>t!==e)),getZIndex:e=>`calc(${n} + ${a.indexOf(e)} + 1)`,currentId:a[a.length-1],maxZIndex:n},children:e})}D.displayName="@mantine/core/ModalStack";var P=e.i(446817);let T=(0,r.factory)(e=>{let{classNames:t,className:r,style:n,styles:o,vars:l,...c}=(0,a.useProps)("ModalTitle",null,e);return(0,s.jsx)(P.ModalBaseTitle,{...i().getStyles("title",{classNames:t,style:n,styles:o,className:r}),...c})});T.classes=n,T.displayName="@mantine/core/ModalTitle";let E={closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:(0,t.getDefaultZIndex)("modal"),transitionProps:{duration:200,transition:"fade-down"},withOverlay:!0,withCloseButton:!0},I=(0,r.factory)(e=>{let{title:r,withOverlay:n,overlayProps:o,withCloseButton:l,closeButtonProps:i,children:d,radius:m,opened:p,stackId:f,zIndex:v,...y}=(0,a.useProps)("Modal",E,e),b=(0,O.use)(B),j=!!r||l,S=b&&f?{closeOnEscape:b.currentId===f,trapFocus:b.currentId===f,zIndex:b.getZIndex(f)}:{},k=!1!==n&&(f&&b?b.currentId===f:p);return(0,O.useEffect)(()=>{b&&f&&(p?b.addModal(f,v||(0,t.getDefaultZIndex)("modal")):b.removeModal(f))},[p,f,v]),(0,s.jsxs)(w,{radius:m,opened:p,zIndex:b&&f?b.getZIndex(f):v,...y,...S,children:[n&&(0,s.jsx)(g,{visible:k,transitionProps:b&&f?{duration:0}:void 0,...o}),(0,s.jsxs)(h,{radius:m,__hidden:!!b&&!!f&&!!p&&f!==b.currentId,children:[j&&(0,s.jsxs)(x,{children:[r&&(0,s.jsx)(T,{children:r}),l&&(0,s.jsx)(u,{...i})]}),(0,s.jsx)(c,{children:d})]})]})});I.classes=n,I.displayName="@mantine/core/Modal",I.Root=w,I.Overlay=g,I.Content=h,I.Body=c,I.Header=x,I.Title=T,I.CloseButton=u,I.Stack=D,e.s(["Modal",0,I],424302)},692385,e=>{"use strict";var t=e.i(852361),a=e.i(191788);let r={min:-1/0,max:1/0};e.s(["useCounter",0,function(e=0,n){let{min:o,max:l,step:i=1}={...r,...n},s=Math.abs(i),[c,d]=(0,a.useState)((0,t.clamp)(e,o,l));return[c,{increment:(0,a.useCallback)(()=>d(e=>(0,t.clamp)(e+s,o,l)),[o,l,s]),decrement:(0,a.useCallback)(()=>d(e=>(0,t.clamp)(e-s,o,l)),[o,l,s]),set:(0,a.useCallback)(e=>d((0,t.clamp)(e,o,l)),[o,l]),reset:(0,a.useCallback)(()=>d((0,t.clamp)(e,o,l)),[e,o,l])}]}])},501655,e=>{"use strict";var t=e.i(648863),a=e.i(60695),r=e.i(391398);let n={type:"configurator",component:function(e){return(0,r.jsx)(a.Slider,{defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],...e})},code:`
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
`,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"showLabelOnHover",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"labelAlwaysOn",type:"boolean",initialValue:!1,libraryValue:!1}]};var o={track:"m_7b015c03",mark:"m_88156515",markLabel:"m_beb40edf",thumb:"m_7afd1c8e"},l=e.i(232471);let i={type:"code",component:function(){return(0,r.jsx)(l.Box,{maw:400,pt:15,pb:20,mx:"auto",children:(0,r.jsx)(a.Slider,{defaultValue:40,size:2,classNames:o,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}]})})},code:[{fileName:"Demo.tsx",code:`
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
`,centered:!0,maxWidth:400};var p=e.i(191788);let f={type:"code",component:function(){let[e,t]=(0,p.useState)(50),[n,o]=(0,p.useState)(50);return(0,r.jsxs)(l.Box,{maw:400,mx:"auto",children:[(0,r.jsx)(a.Slider,{value:e,onChange:t,onChangeEnd:o}),(0,r.jsxs)(c.Text,{mt:"md",size:"sm",children:["onChange value: ",(0,r.jsx)("b",{children:e})]}),(0,r.jsxs)(c.Text,{mt:5,size:"sm",children:["onChangeEnd value: ",(0,r.jsx)("b",{children:n})]})]})},code:`
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
`},h={type:"code",component:function(){return(0,r.jsx)(a.Slider,{defaultValue:60,disabled:!0})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider defaultValue={60} disabled />;
}
`,centered:!0,maxWidth:340},v={type:"configurator",component:function(e){return(0,r.jsx)(a.Slider,{...e,defaultValue:20})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} defaultValue={20} />;
}
`,maxWidth:400,centered:!0,controls:[{prop:"thumbSize",type:"number",min:16,max:32,initialValue:14,libraryValue:null}]};var x=e.i(171481);let y=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M178,36a65.6,65.6,0,0,0-46.67,19.33L128,58.66l-3.33-3.33A66,66,0,0,0,12,102c0,72.34,105.81,130.14,110.31,132.57a12,12,0,0,0,11.38,0C138.19,232.14,244,174.34,244,102A66.08,66.08,0,0,0,178,36Zm-5.49,142.36A328.69,328.69,0,0,1,128,210.16a328.69,328.69,0,0,1-44.51-31.8C61.82,159.77,36,131.42,36,102a42,42,0,0,1,71.7-29.7L111,75.63l-7.52,7.52a12,12,0,0,0,0,17l21.7,21.7-13.7,13.69a12,12,0,1,0,17,17l22.18-22.19a12,12,0,0,0,0-17L129,91.63,148.3,72.3A42,42,0,0,1,220,102C220,131.42,194.18,159.77,172.51,178.36Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M232,102c0,66-104,122-104,122S24,168,24,102a54,54,0,0,1,92.18-38.18L128,75.63l11.82-11.81A54,54,0,0,1,232,102Z",opacity:"0.2"}),p.createElement("path",{d:"M178,40a61.6,61.6,0,0,0-43.84,18.16L128,64.32l-6.16-6.16A62,62,0,0,0,16,102c0,70,103.79,126.67,108.21,129a8,8,0,0,0,7.58,0C136.21,228.67,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102a46,46,0,0,1,78.53-32.53l6.16,6.16L106.34,86a8,8,0,0,0,0,11.31l24.53,24.53-16.53,16.52a8,8,0,0,0,11.32,11.32l22.18-22.19a8,8,0,0,0,0-11.31L123.31,91.63l22.16-22.16A46,46,0,0,1,224,102C224,155.61,146.24,204.15,128,214.8Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M239.81,107.5c-5.19,67.42-103.7,121.23-108,123.54a8,8,0,0,1-7.58,0C119.8,228.67,16,172,16,102a62,62,0,0,1,96.47-51.55,4,4,0,0,1,.61,6.17L99.72,70a8,8,0,0,0,0,11.31l32.53,32.53L111,135a8,8,0,1,0,11.31,11.31l26.88-26.87a8,8,0,0,0,0-11.31L116.7,75.63l17.47-17.47h0A61.63,61.63,0,0,1,178.41,40C214.73,40.23,242.59,71.29,239.81,107.5Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M178,42a59.63,59.63,0,0,0-42.43,17.57L128,67.15l-7.57-7.58A60,60,0,0,0,18,102c0,29.2,18.2,59.59,54.1,90.31a334.68,334.68,0,0,0,53.06,37,6,6,0,0,0,5.68,0,334.68,334.68,0,0,0,53.06-37C219.8,161.59,238,131.2,238,102A60.07,60.07,0,0,0,178,42ZM128,217.11C111.59,207.64,30,157.72,30,102a48,48,0,0,1,81.94-33.94l7.57,7.57L107.76,87.39a6,6,0,0,0,0,8.49l25.94,25.94-17.94,17.94a6,6,0,0,0,8.48,8.48l22.19-22.18a6,6,0,0,0,0-8.49L120.49,91.63l23.57-23.57A48,48,0,0,1,226,102C226,157.72,144.41,207.64,128,217.11Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M178,40a61.6,61.6,0,0,0-43.84,18.16L128,64.32l-6.16-6.16A62,62,0,0,0,16,102c0,70,103.79,126.67,108.21,129a8,8,0,0,0,7.58,0C136.21,228.67,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102a46,46,0,0,1,78.53-32.53l6.16,6.16L106.34,86a8,8,0,0,0,0,11.31l24.53,24.53-16.53,16.52a8,8,0,0,0,11.32,11.32l22.18-22.19a8,8,0,0,0,0-11.31L123.31,91.63l22.16-22.16A46,46,0,0,1,224,102C224,155.61,146.24,204.15,128,214.8Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M178,44a57.59,57.59,0,0,0-41,17l-9,9-9-9a58,58,0,0,0-99,41c0,28.59,18,58.47,53.4,88.79a333.81,333.81,0,0,0,52.7,36.73,4,4,0,0,0,3.8,0,333.81,333.81,0,0,0,52.7-36.73C218,160.47,236,130.59,236,102A58.07,58.07,0,0,0,178,44ZM128,219.42c-14-8-100-59.35-100-117.42a50,50,0,0,1,85.36-35.36l9,9L109.17,88.8a4,4,0,0,0,0,5.66l27.36,27.36-19.36,19.35a4,4,0,0,0,5.66,5.66L145,124.64a4,4,0,0,0,0-5.65L117.66,91.63l13.16-13.16h0l11.8-11.81A50,50,0,0,1,228,102C228,160,142,211.46,128,219.42Z"}))]]),g=p.forwardRef((e,t)=>p.createElement(x.default,{ref:t,...e,weights:y}));g.displayName="HeartBreakIcon";var b=e.i(853907),j=e.i(328940);let S={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Slider,{thumbChildren:(0,r.jsx)(b.HeartIcon,{size:16}),color:"red",label:null,defaultValue:40,thumbSize:26,styles:{thumb:{borderWidth:2,padding:3}}}),(0,r.jsx)(j.RangeSlider,{mt:"xl",styles:{thumb:{borderWidth:2,padding:3}},color:"red",label:null,defaultValue:[20,60],thumbSize:26,thumbChildren:[(0,r.jsx)(b.HeartIcon,{size:16},"1"),(0,r.jsx)(g,{size:16},"2")]})]})},code:`
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
`,maxWidth:400,centered:!0};function k(e){let t=["KB","MB","GB","TB"],a=0,r=e;for(;r>=1024&&a<t.length-1;)a+=1,r/=1024;return`${r} ${t[a]}`}let C=e=>2**e,A={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Slider,{scale:C,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:10,label:k}),(0,r.jsx)(j.RangeSlider,{mt:50,scale:C,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:[10,20],label:k})]})},code:`
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
`,centered:!0,maxWidth:400},M={type:"code",component:function(){return(0,r.jsx)(a.Slider,{inverted:!0,defaultValue:80})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider inverted defaultValue={80} />;
}
`,centered:!0,maxWidth:400};var w=e.i(220026);let O=`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} marks={[{ value: 20, label: '20%' }, { value: 80, label: '80%' }]} labelAlwaysOn />;
}
`,B={type:"styles-api",data:w.SliderStylesApi,component:function(e){return(0,r.jsx)(a.Slider,{marks:[{value:20,label:"20%"},{value:80,label:"80%"}],defaultValue:40,labelAlwaysOn:!0,mb:40,...e})},code:O,centered:!0,maxWidth:400},D={type:"code",component:function(){return(0,r.jsx)(a.Slider,{min:0,max:1,step:5e-4,defaultValue:.5535})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider min={0} max={1} step={0.0005} defaultValue={0.5535} />;
}
`,centered:!0,maxWidth:340};var P="m_b2d44517",T=e.i(414124),E=e.i(852361),I=e.i(502315);let V={type:"code",component:function(){let[e,t]=(0,p.useState)(.3),{ref:a}=(0,I.useMove)(({x:e})=>t((0,E.clamp)(e,.1,.9))),n=e<.2||e>.8;return(0,r.jsx)("div",{className:"m_1e8dea5f",children:(0,r.jsxs)("div",{className:"m_b34cb76e",ref:a,children:[(0,r.jsx)("div",{className:"m_9decab9f",style:{width:`calc(${100*e}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,r.jsx)("span",{className:P,"data-floating":n||void 0,"data-filled":!0,children:(100*e).toFixed(0)})}),(0,r.jsx)("div",{className:"m_b2774b70",style:{width:`calc(${(1-e)*100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,r.jsx)("span",{className:P,"data-floating":n||void 0,children:((1-e)*100).toFixed(0)})}),(0,r.jsx)("div",{className:"m_b34877f9",style:{left:`calc(${100*e}% - var(--thumb-width) / 2)`},children:(0,r.jsx)(T.DotsSixVerticalIcon,{})})]})})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}],maxWidth:500,centered:!0};var N=e.i(671640);let F={type:"code",component:function(){return(0,r.jsxs)(N.Stack,{children:[(0,r.jsx)(a.Slider,{restrictToMarks:!0,defaultValue:25,marks:Array.from({length:5}).map((e,t)=>({value:25*t}))}),(0,r.jsx)(j.RangeSlider,{restrictToMarks:!0,defaultValue:[5,15],marks:[{value:5},{value:15},{value:25},{value:35},{value:70},{value:80},{value:90}]})]})},code:`
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
`,centered:!0,maxWidth:400},z={type:"code",component:function(){return(0,r.jsx)(a.Slider,{domain:[0,100],min:10,max:90,defaultValue:25,mb:40,marks:[{value:10,label:"min"},{value:90,label:"max"}]})},code:`
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
`,maxWidth:400,centered:!0},L=[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],R={type:"code",component:function(){return(0,r.jsxs)("div",{style:{display:"flex",gap:40},children:[(0,r.jsx)(a.Slider,{orientation:"vertical",defaultValue:45,marks:L}),(0,r.jsx)(j.RangeSlider,{orientation:"vertical",defaultValue:[25,65],marks:L})]})},code:`
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
`,centered:!0},_={type:"code",component:function(){let[e,t]=(0,p.useState)(50);return(0,r.jsxs)(l.Box,{pb:"md",children:[(0,r.jsxs)(c.Text,{size:"sm",mb:"xs",children:["Hidden marks allow you to snap to specific values without displaying them visually. Current value: ",e]}),(0,r.jsx)(a.Slider,{value:e,onChange:t,min:0,max:100,step:1,restrictToMarks:!0,marks:[{value:0,label:"0%"},{value:25,hidden:!0},{value:50,label:"50%"},{value:75,hidden:!0},{value:100,label:"100%"}]})]})},code:`
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
`},Z={type:"code",component:function(){return(0,r.jsx)(a.Slider,{startPointValue:-50,min:-100,max:100,defaultValue:40,mb:40,marks:[{value:-100,label:"-100"},{value:-50,label:"-50"},{value:0,label:"0"},{value:50,label:"50"},{value:100,label:"100"}]})},code:`
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
`,centered:!0,maxWidth:400};var H=(0,t.__exportAll)({changeEnd:()=>f,configurator:()=>n,customSlider:()=>V,customize:()=>i,decimal:()=>D,disabled:()=>h,domain:()=>z,hiddenMarks:()=>_,inverted:()=>M,label:()=>d,marks:()=>s,restrictToMarks:()=>F,scale:()=>A,startPoint:()=>Z,step:()=>m,stylesApi:()=>B,thumbChildren:()=>S,thumbSize:()=>v,vertical:()=>R});e.s(["SliderDemos",0,H],501655)},505716,e=>{"use strict";var t=e.i(749218),a=e.i(481178),r=e.i(951254),n=e.i(44091),o=e.i(391466),l=e.i(275519),i=e.i(232471),s=e.i(476273),c=e.i(34515),d=e.i(935769),u={root:"m_6e45937b",loader:"m_e8eb006c",overlay:"m_df587f17"},m=e.i(391398);let p={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,t.getDefaultZIndex)("overlay")},f=(0,a.createVarsResolver)((e,{zIndex:t})=>({root:{"--lo-z-index":t?.toString()}})),h=(0,l.factory)(e=>{let t=(0,n.useProps)("LoadingOverlay",p,e),{classNames:a,className:l,style:h,styles:v,unstyled:x,vars:y,transitionProps:g,loaderProps:b,overlayProps:j,visible:S,zIndex:k,attributes:C,onEnter:A,onEntered:M,onExit:w,onExited:O,...B}=t,D=(0,r.useMantineTheme)(),P=(0,o.useStyles)({name:"LoadingOverlay",classes:u,props:t,className:l,style:h,classNames:a,styles:v,unstyled:x,attributes:C,vars:y,varsResolver:f}),T={...p.overlayProps,...j};return(0,m.jsx)(c.Transition,{transition:"fade",...g,mounted:!!S,onEnter:A,onEntered:M,onExit:w,onExited:O,children:e=>(0,m.jsxs)(i.Box,{...P("root",{style:e}),...B,children:[(0,m.jsx)(d.Loader,{unstyled:x,...b,...P("loader",{className:b?.className,style:b?.style})}),(0,m.jsx)(s.Overlay,{...T,...P("overlay",{className:T?.className,style:T?.style}),darkHidden:!0,unstyled:x,color:j?.color||D.white}),(0,m.jsx)(s.Overlay,{...T,...P("overlay",{className:T?.className,style:T?.style}),lightHidden:!0,unstyled:x,color:j?.color||D.colors.dark[5]})]})})});h.classes=u,h.varsResolver=f,h.displayName="@mantine/core/LoadingOverlay",e.s(["LoadingOverlay",0,h],505716)},645640,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM100,56a28,28,0,0,1,56,0V76H100ZM204,204H52V100H204Zm-60-52a16,16,0,1,1-16-16A16,16,0,0,1,144,152Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z",opacity:"0.2"}),t.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm32-84H96V56a32,32,0,0,1,64,0Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,82H174V56a46,46,0,0,0-92,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82ZM94,56a34,34,0,0,1,68,0V82H94ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Zm-72-56a10,10,0,1,1-10-10A10,10,0,0,1,138,152Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,84H172V56a44,44,0,0,0-88,0V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84ZM92,56a36,36,0,0,1,72,0V84H92ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-76-56a8,8,0,1,1-8-8A8,8,0,0,1,136,152Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(a.default,{ref:n,...e,weights:r}));n.displayName="LockIcon",e.s(["LockIcon",0,n],645640)},29260,e=>{"use strict";var t=e.i(191788),a=e.i(123895),r=e.i(645640),n=e.i(79897),o=e.i(485108),l=e.i(37541),i=e.i(725695),s=e.i(505716),c=e.i(470743),d=e.i(937389),u=e.i(883364),m=e.i(841209),p=e.i(582498),f=e.i(391398);e.s(["AuthenticationForm",0,function({noShadow:e,noPadding:h,noSubmit:v,style:x}){let[y,g]=(0,t.useState)("register"),[b,j]=(0,t.useState)(!1),[S,k]=(0,t.useState)(null),C=(0,p.useForm)({initialValues:{firstName:"",lastName:"",email:"",password:"",confirmPassword:"",termsOfService:!0}});return(0,f.jsx)(c.Paper,{p:h?0:"lg",shadow:e?"none":"sm",style:{...x,position:"relative",backgroundColor:"var(--mantine-color-body)"},children:(0,f.jsxs)("form",{onSubmit:C.onSubmit(()=>{j(!0),k(null),setTimeout(()=>{j(!1),k("register"===y?"User with this email already exists":"User with this email does not exist")},3e3)}),children:[(0,f.jsx)(s.LoadingOverlay,{visible:b}),"register"===y&&(0,f.jsxs)(i.Group,{grow:!0,children:[(0,f.jsx)(m.TextInput,{"data-autofocus":!0,required:!0,placeholder:"Your first name",label:"First name",...C.getInputProps("firstName")}),(0,f.jsx)(m.TextInput,{required:!0,placeholder:"Your last name",label:"Last name",...C.getInputProps("lastName")})]}),(0,f.jsx)(m.TextInput,{mt:"md",required:!0,placeholder:"Your email",label:"Email",leftSection:(0,f.jsx)(a.AtIcon,{size:16}),...C.getInputProps("email")}),(0,f.jsx)(d.PasswordInput,{mt:"md",required:!0,placeholder:"Password",label:"Password",leftSection:(0,f.jsx)(r.LockIcon,{size:16}),...C.getInputProps("password")}),"register"===y&&(0,f.jsx)(d.PasswordInput,{mt:"md",required:!0,label:"Confirm Password",placeholder:"Confirm password",leftSection:(0,f.jsx)(r.LockIcon,{size:16}),...C.getInputProps("confirmPassword")}),"register"===y&&(0,f.jsx)(l.Checkbox,{mt:"xl",label:"I agree to sell my soul and privacy to this corporation",...C.getInputProps("termsOfService",{type:"checkbox"})}),S&&(0,f.jsx)(u.Text,{c:"red",size:"sm",mt:"sm",children:S}),!v&&(0,f.jsxs)(i.Group,{justify:"space-between",mt:"xl",children:[(0,f.jsx)(n.Anchor,{component:"button",type:"button",c:"dimmed",onClick:()=>{g(e=>"register"===e?"login":"register"),k(null)},size:"sm",children:"register"===y?"Have an account? Login":"Don't have an account? Register"}),(0,f.jsx)(o.Button,{color:"blue",type:"submit",children:"register"===y?"Register":"Login"})]})]})})}])},299593,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M164.24,100.24,136.48,128l27.76,27.76a6,6,0,1,1-8.48,8.48L128,136.48l-27.76,27.76a6,6,0,0,1-8.48-8.48L119.52,128,91.76,100.24a6,6,0,0,1,8.48-8.48L128,119.52l27.76-27.76a6,6,0,0,1,8.48,8.48ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M162.83,98.83,133.66,128l29.17,29.17a4,4,0,0,1-5.66,5.66L128,133.66,98.83,162.83a4,4,0,0,1-5.66-5.66L122.34,128,93.17,98.83a4,4,0,0,1,5.66-5.66L128,122.34l29.17-29.17a4,4,0,1,1,5.66,5.66ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(a.default,{ref:n,...e,weights:r}));n.displayName="XCircleIcon",e.s(["XCircleIcon",0,n],299593)},323121,e=>{"use strict";var t=e.i(191788);function a(e){let a=e.reduce((e,t)=>({...e,[t]:!1}),{}),[r,n]=(0,t.useState)(a),o=(0,t.useCallback)(e=>{n(t=>({...t,[e]:!0}))},[]),l=(0,t.useCallback)(e=>n(t=>({...t,[e]:!1})),[]),i=(0,t.useCallback)(e=>n(t=>({...t,[e]:!t[e]})),[]);return{state:r,open:o,close:l,closeAll:(0,t.useCallback)(()=>n(a),[]),toggle:i,register:(0,t.useCallback)(e=>({opened:r[e],onClose:()=>l(e),stackId:e}),[r])}}e.s(["useDrawersStack",0,a,"useModalsStack",0,a])},18584,e=>{"use strict";var t=e.i(648863),a=e.i(29260),r=e.i(485108),n=e.i(424302),o=e.i(391398),l=e.i(541772);let i={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,l.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.Modal,{opened:e,onClose:i,title:"Authentication",children:(0,o.jsx)(a.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,o.jsx)(r.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},s={type:"code",code:`
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

`,centered:!0,component:function(){let[e,{open:t,close:a}]=(0,l.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.Modal,{opened:e,onClose:a,withCloseButton:!1,children:"Modal without header, press escape or click on overlay to close"}),(0,o.jsx)(r.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var c=e.i(191788),d=e.i(725695);let u=["xs","sm","md","lg","xl","55rem","70%","100%"],m={type:"code",component:function(){let[e,t]=(0,c.useState)(!1),[l,i]=(0,c.useState)("md"),s=u.map(e=>(0,o.jsx)(r.Button,{variant:"default",onClick:()=>{i(e),t(!0)},children:e},e));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.Modal,{opened:e,onClose:()=>t(!1),title:"Introduce yourself!",size:l,children:(0,o.jsx)(a.AuthenticationForm,{noPadding:!0,noShadow:!0})}),(0,o.jsx)(d.Group,{justify:"center",children:s})]})}},p={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,l.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.Modal,{opened:e,onClose:i,title:"Authentication",overlayProps:{backgroundOpacity:.55,blur:3},children:(0,o.jsx)(a.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,o.jsx)(r.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},f={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:a}]=(0,l.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.Modal,{opened:e,onClose:a,title:"Header is sticky",children:Array(100).fill(0).map((e,t)=>(0,o.jsx)("p",{children:"Modal with scroll"},t))}),(0,o.jsx)(r.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},h={type:"code",code:`
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
`,component:function(){let[e,t]=(0,c.useState)(!1),[a,l]=(0,c.useState)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.Modal,{opened:a,onClose:()=>l(!1),title:"Please consider this",transitionProps:{transition:"rotate-left"},children:"rotate-left transition"}),(0,o.jsx)(n.Modal,{opened:e,onClose:()=>t(!1),title:"Please consider this",transitionProps:{transition:"fade",duration:600,timingFunction:"linear"},children:"fade transition 600ms linear transition"}),(0,o.jsxs)(d.Group,{justify:"center",children:[(0,o.jsx)(r.Button,{onClick:()=>l(!0),variant:"default",children:"Rotate left transition"}),(0,o.jsx)(r.Button,{onClick:()=>t(!0),variant:"default",children:"Fade transition"})]})]})}},v={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,l.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.Modal,{opened:e,onClose:i,title:"Authentication",centered:!0,children:(0,o.jsx)(a.AuthenticationForm,{noPadding:!0,noShadow:!0})}),(0,o.jsx)(r.Button,{variant:"default",onClick:t,children:"Open centered Modal"})]})}};var x=e.i(883364);let y={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,l.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.Modal,{opened:e,onClose:i,title:"This is a fullscreen modal",fullScreen:!0,radius:0,transitionProps:{transition:"fade",duration:200},children:[(0,o.jsx)(x.Text,{mb:"xl",children:"It takes the entire screen and does not have overlay and border-radius, you can use it small screens to save up some space. It also has fade transition by default, but you can change that with transition prop. Now here is an authentication form used in previous examples to see the difference."}),(0,o.jsx)(a.AuthenticationForm,{noPadding:!0,noShadow:!0})]}),(0,o.jsx)(r.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var g=e.i(257177),b=e.i(692385);let j={type:"code",component:function(){let[e,{close:t,open:a}]=(0,l.useDisclosure)(!1),[i,{increment:s,decrement:c}]=(0,b.useCounter)(3,{min:0}),u=Array(i).fill(0).map((e,t)=>(0,o.jsxs)(g.Badge,{children:["Badge ",t]},t));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.Modal,{opened:e,onClose:t,size:"auto",title:"Modal size auto",children:[(0,o.jsx)(x.Text,{children:"Modal with size auto will fits its content"}),(0,o.jsx)(d.Group,{wrap:"nowrap",mt:"md",children:u}),(0,o.jsxs)(d.Group,{mt:"xl",children:[(0,o.jsx)(r.Button,{onClick:s,children:"Add badge"}),(0,o.jsx)(r.Button,{onClick:c,children:"Remove badge"})]})]}),(0,o.jsx)(r.Button,{variant:"default",onClick:a,children:"Open modal"})]})},centered:!0,code:`
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
`};var S=e.i(19300);let k={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:a}]=(0,l.useDisclosure)(!1),i=Array(100).fill(0).map((e,t)=>(0,o.jsx)("p",{children:"Modal with scroll"},t));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.Modal,{opened:e,onClose:a,title:"Header is sticky",scrollAreaComponent:S.ScrollArea.Autosize,children:i}),(0,o.jsx)(r.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},C={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:a}]=(0,l.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.Modal.Root,{opened:e,onClose:a,children:[(0,o.jsx)(n.Modal.Overlay,{}),(0,o.jsxs)(n.Modal.Content,{children:[(0,o.jsxs)(n.Modal.Header,{children:[(0,o.jsx)(n.Modal.Title,{children:"Modal title"}),(0,o.jsx)(n.Modal.CloseButton,{})]}),(0,o.jsx)(n.Modal.Body,{children:"Modal content"})]})]}),(0,o.jsx)(r.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},A={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,l.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.Modal,{opened:e,onClose:i,title:"Authentication",yOffset:"1vh",xOffset:0,children:(0,o.jsx)(a.AuthenticationForm,{noPadding:!0,noShadow:!0})}),(0,o.jsx)(r.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var M=e.i(841209);let w={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:a}]=(0,l.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.Modal,{opened:e,onClose:a,title:"Focus demo",children:[(0,o.jsx)(M.TextInput,{label:"First input",placeholder:"First input"}),(0,o.jsx)(M.TextInput,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,o.jsx)(r.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var O=e.i(779177),B=e.i(839608);let D={type:"code",code:`
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);
  const isMobile = useMediaQuery('(max-width: ${(0,O.em)(800)})');

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
`,centered:!0,component:function(){let[e,{open:t,close:a}]=(0,l.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.Modal,{opened:e,onClose:a,title:"This is a fullscreen modal",fullScreen:(0,B.useMediaQuery)(`(max-width: ${(0,O.em)(800)})`),transitionProps:{transition:"fade",duration:200},children:"The Modal will be full screen only on mobile"}),(0,o.jsx)(r.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var P=e.i(299593);let T={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,l.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.Modal,{opened:e,onClose:i,title:"Authentication",closeButtonProps:{icon:(0,o.jsx)(P.XCircleIcon,{size:20})},children:(0,o.jsx)(a.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,o.jsx)(r.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var E=e.i(22630);let I={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:a}]=(0,l.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.Modal,{opened:e,onClose:a,title:"Focus demo",children:[(0,o.jsx)(E.FocusTrap.InitialFocus,{}),(0,o.jsx)(M.TextInput,{label:"First input",placeholder:"First input"}),(0,o.jsx)(M.TextInput,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,o.jsx)(r.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var V=e.i(323121);let N={type:"code",code:`
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
`,centered:!0,component:function(){let e=(0,V.useModalsStack)(["delete-page","confirm-action","really-confirm-action"]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.Modal.Stack,{children:[(0,o.jsxs)(n.Modal,{...e.register("delete-page"),title:"Delete this page?",children:["Are you sure you want to delete this page? This action cannot be undone.",(0,o.jsxs)(d.Group,{mt:"lg",justify:"flex-end",children:[(0,o.jsx)(r.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,o.jsx)(r.Button,{onClick:()=>e.open("confirm-action"),color:"red",children:"Delete"})]})]}),(0,o.jsxs)(n.Modal,{...e.register("confirm-action"),title:"Confirm action",children:["Are you sure you want to perform this action? This action cannot be undone. If you are sure, press confirm button below.",(0,o.jsxs)(d.Group,{mt:"lg",justify:"flex-end",children:[(0,o.jsx)(r.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,o.jsx)(r.Button,{onClick:()=>e.open("really-confirm-action"),color:"red",children:"Confirm"})]})]}),(0,o.jsxs)(n.Modal,{...e.register("really-confirm-action"),title:"Really confirm action",children:["Jokes aside. You have confirmed this action. This is your last chance to cancel it. After you press confirm button below, action will be performed and cannot be undone. For real this time. Are you sure you want to proceed?",(0,o.jsxs)(d.Group,{mt:"lg",justify:"flex-end",children:[(0,o.jsx)(r.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,o.jsx)(r.Button,{onClick:e.closeAll,color:"red",children:"Confirm"})]})]})]}),(0,o.jsx)(r.Button,{variant:"default",onClick:()=>e.open("delete-page"),children:"Open modal"})]})}},F={type:"code",code:`
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
`,centered:!0,component:function(){let[e,t]=(0,l.useDisclosure)(!1),[a,i]=(0,l.useDisclosure)(!1),[s,u]=(0,c.useState)({title:"",message:""});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.Modal,{opened:e,onClose:()=>{t.close(),u({title:"",message:""})},transitionProps:{duration:300,exitDuration:1e3,transition:"fade-down"},title:s.title,children:s.message}),(0,o.jsx)(n.Modal,{opened:a,onClose:i.close,transitionProps:{duration:300,exitDuration:1e3,transition:"fade-down"},onExitTransitionEnd:()=>u({title:"",message:""}),title:s.title,children:s.message}),(0,o.jsxs)(d.Group,{children:[(0,o.jsx)(r.Button,{onClick:()=>{t.open(),u({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onClose"}),(0,o.jsx)(r.Button,{onClick:()=>{i.open(),u({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onExitTransitionEnd"})]})]})},defaultExpanded:!1};var z=(0,t.__exportAll)({centered:()=>v,closeIcon:()=>T,composition:()=>C,fullScreen:()=>y,fullScreenMobile:()=>D,header:()=>s,initialFocus:()=>w,initialFocusTrap:()=>I,offset:()=>A,overflow:()=>f,overlay:()=>p,scrollarea:()=>k,sizeAuto:()=>j,sizes:()=>m,stack:()=>N,transitionEnd:()=>F,transitions:()=>h,usage:()=>i});e.s(["ModalDemos",0,z],18584)},299887,985743,e=>{"use strict";var t=e.i(451400),a=e.i(399479),r=e.i(83727),n=e.i(901841),o=e.i(516257),l=e.i(708248),i=e.i(349229),s=e.i(755335),c=e.i(128991),d=e=>e.graphicalItems.polarItems,u=(0,t.createSelector)([l.pickAxisType,i.pickAxisId],r.itemAxisPredicate),m=(0,t.createSelector)([d,r.selectBaseAxis,u],r.combineGraphicalItemsSettings),p=(0,t.createSelector)([m],r.combineGraphicalItemsData),f=(0,t.createSelector)([p,a.selectChartDataAndAlwaysIgnoreIndexes],r.combineDisplayedData),h=(0,t.createSelector)([f,r.selectBaseAxis,m],r.combineAppliedValues);(0,t.createSelector)([f,r.selectBaseAxis,m],(e,t,a)=>a.length>0?e.flatMap(e=>a.flatMap(a=>{var r;return{value:(0,o.getValueByDataKey)(e,null!=(r=t.dataKey)?r:a.dataKey),errorDomain:[]}})).filter(Boolean):(null==t?void 0:t.dataKey)!=null?e.map(e=>({value:(0,o.getValueByDataKey)(e,t.dataKey),errorDomain:[]})):e.map(e=>({value:e,errorDomain:[]})));var v=()=>void 0,x=(0,t.createSelector)([f,r.selectBaseAxis,m,r.selectAllErrorBarSettings,l.pickAxisType,a.selectChartDataSliceIgnoringIndexes],r.combineDomainOfAllAppliedNumericalValuesIncludingErrorValues),y=(0,t.createSelector)([r.selectBaseAxis,r.selectDomainDefinition,r.selectDomainFromUserPreference,v,x,v,n.selectChartLayout,l.pickAxisType],r.combineNumericalDomain),g=(0,t.createSelector)([r.selectBaseAxis,n.selectChartLayout,f,h,s.selectStackOffsetType,l.pickAxisType,y],r.combineAxisDomain),b=(0,t.createSelector)([g,r.selectRenderableAxisSettings,r.selectRealScaleType],r.combineNiceTicks),j=(0,t.createSelector)([r.selectBaseAxis,g,b,l.pickAxisType],r.combineAxisDomainWithNiceTicks),S=(0,t.createSelector)([r.selectRealScaleType,j],c.combineCheckedDomain);e.s(["selectPolarAppliedValues",0,h,"selectPolarAxisCheckedDomain",0,S,"selectPolarItemsSettings",0,m,"selectPolarNiceTicks",0,b,"selectUnfilteredPolarItems",0,d],299887);var k=e.i(191788),C=e.i(546189),A=e.i(888494),M=e.i(688532),w=e.i(998227),O=e.i(451494),B=e.i(543372),D=e.i(863751);function P(e){var t=(0,B.useAppDispatch)();return(0,k.useEffect)(()=>{t((0,D.updatePolarOptions)(e))},[t,e]),null}var T=e.i(390241),E=e.i(297974),I=e.i(560894),V=["layout"];function N(){return(N=Object.assign.bind()).apply(null,arguments)}function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var z=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(Object(a),!0).forEach(function(t){var r,n,o;r=e,n=t,o=a[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({accessibilityLayer:!0,stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index",layout:"radial",responsive:!1,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"},I.initialEventSettingsState),L=(0,k.forwardRef)(function(e,t){var a,r=(0,E.resolveDefaultProps)(e.categoricalChartProps,z),{layout:n}=r,o=function(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}(r,V),{chartName:l,defaultTooltipEventType:i,validateTooltipEventTypes:s,tooltipPayloadSearcher:c}=e;return k.createElement(C.RechartsStoreProvider,{preloadedState:{options:{chartName:l,defaultTooltipEventType:i,validateTooltipEventTypes:s,tooltipPayloadSearcher:c,eventEmitter:void 0}},reduxStoreName:null!=(a=r.id)?a:l},k.createElement(A.ChartDataContextProvider,{chartData:r.data}),k.createElement(M.ReportMainChartProps,{layout:n,margin:r.margin}),k.createElement(O.ReportEventSettings,{throttleDelay:r.throttleDelay,throttledEvents:r.throttledEvents}),k.createElement(w.ReportChartProps,{baseValue:void 0,accessibilityLayer:r.accessibilityLayer,barCategoryGap:r.barCategoryGap,maxBarSize:r.maxBarSize,stackOffset:r.stackOffset,barGap:r.barGap,barSize:r.barSize,syncId:r.syncId,syncMethod:r.syncMethod,className:r.className,reverseStackOrder:r.reverseStackOrder}),k.createElement(P,{cx:r.cx,cy:r.cy,startAngle:r.startAngle,endAngle:r.endAngle,innerRadius:r.innerRadius,outerRadius:r.outerRadius}),k.createElement(T.CategoricalChart,N({},o,{ref:t})))});e.s(["PolarChart",0,L,"defaultPolarChartProps",0,z],985743)},42201,e=>{"use strict";var t=e.i(451400),a=e.i(83727),r=e.i(586489),n=e.i(901841),o=e.i(299887),l=e.i(708248),i=e.i(163337),s=e.i(952317),c=(e,t,a)=>{switch(t){case"angleAxis":return(0,r.selectAngleAxis)(e,a);case"radiusAxis":return(0,r.selectRadiusAxis)(e,a);default:throw Error("Unexpected axis type: ".concat(t))}},d=(e,t,a)=>{switch(t){case"angleAxis":return(0,r.selectAngleAxisRangeWithReversed)(e,a);case"radiusAxis":return(0,r.selectRadiusAxisRangeWithReversed)(e,a);default:throw Error("Unexpected axis type: ".concat(t))}},u=(0,t.createSelector)([c,a.selectRealScaleType,o.selectPolarAxisCheckedDomain,d],s.combineConfiguredScale),m=(0,t.createSelector)([u],i.rechartsScaleFactory),p=(0,t.createSelector)([n.selectChartLayout,o.selectPolarAppliedValues,a.selectRenderableAxisSettings,l.pickAxisType],a.combineCategoricalDomain),f=(0,t.createSelector)([n.selectChartLayout,c,a.selectRealScaleType,m,o.selectPolarNiceTicks,d,a.selectDuplicateDomain,p,l.pickAxisType],a.combineAxisTicks),h=(0,t.createSelector)([f],e=>{if(e){var t=new Map;return e.forEach(e=>{var a=(e.coordinate+360)%360;t.has(a)||t.set(a,e)}),Array.from(t.values())}}),v=(0,t.createSelector)([n.selectChartLayout,c,m,d,a.selectDuplicateDomain,p,l.pickAxisType],a.combineGraphicalItemTicks);e.s(["selectPolarAngleAxisTicks",0,h,"selectPolarAxisScale",0,m,"selectPolarAxisTicks",0,f,"selectPolarGraphicalItemAxisTicks",0,v])},857006,(e,t,a)=>{"use strict";var r=e.i(221168);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),a.isBuffer=function(e){return void 0!==r.Buffer&&r.Buffer.isBuffer(e)}},857811,(e,t,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),a.isPrototype=function(e){let t=e?.constructor;return e===("function"==typeof t?t.prototype:Object.prototype)}},72852,(e,t,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});let r=e.r(181825);a.isTypedArray=function(e){return r.isTypedArray(e)}},690071,(e,t,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});let r=e.r(877115);a.toInteger=function(e){let t=r.toFinite(e),a=t%1;return a?t-a:t}},252532,(e,t,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});let r=e.r(690071);a.times=function(e,t){if((e=r.toInteger(e))<1||!Number.isSafeInteger(e))return[];let a=Array(e);for(let r=0;r<e;r++)a[r]="function"==typeof t?t(r):r;return a}},254663,(e,t,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});let r=e.r(857006),n=e.r(857811),o=e.r(232040),l=e.r(72852),i=e.r(252532);function s(e){let t=[];for(let a in e)t.push(a);return t}a.keysIn=function(e){if(null==e)return[];switch(typeof e){case"object":case"function":if(o.isArrayLike(e)){var t;let a,n;return t=e,n=new Set(a=i.times(t.length,e=>`${e}`)),r.isBuffer(t)&&(n.add("offset"),n.add("parent")),l.isTypedArray(t)&&(n.add("buffer"),n.add("byteLength"),n.add("byteOffset")),[...a,...s(t).filter(e=>!n.has(e))]}if(n.isPrototype(e))return s(e).filter(e=>"constructor"!==e);return s(e);default:return s(Object(e))}}},339978,(e,t,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});let r=e.r(461119),n=e.r(568716),o=e.r(819206),l=e.r(810613),i=e.r(323247);function s(e,t){let a=1===t.length?e:r.get(e,t.slice(0,-1)),o=t[t.length-1];if(a?.[o]===void 0)return!0;if(n.isUnsafeProperty(o))return!1;try{return delete a[o],!0}catch{return!1}}a.unset=function(e,t){if(null==e)return!0;switch(typeof t){case"symbol":case"number":case"object":if(Array.isArray(t))return s(e,t);if("number"==typeof t?t=l.toKey(t):"object"==typeof t&&(t=Object.is(t?.valueOf(),-0)?"-0":String(t)),n.isUnsafeProperty(t))return!1;if(e?.[t]===void 0)return!0;try{return delete e[t],!0}catch{return!1}case"string":if(e?.[t]===void 0&&o.isDeepKey(t))return s(e,i.toPath(t));if(n.isUnsafeProperty(t))return!1;try{return delete e[t],!0}catch{return!1}}}},159629,(e,t,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});let r=e.r(467341);a.getSymbolsIn=function(e){let t=[];for(;e;)t.push(...r.getSymbols(e)),e=Object.getPrototypeOf(e);return t}},29300,(e,t,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});let r=e.r(232040);a.flatten=function(e,t=1){let a=[],n=Math.floor(t);if(!r.isArrayLike(e))return a;let o=(e,t)=>{for(let r=0;r<e.length;r++){let l=e[r];t<n&&(Array.isArray(l)||l?.[Symbol.isConcatSpreadable]||null!==l&&"object"==typeof l&&"[object Arguments]"===Object.prototype.toString.call(l))?Array.isArray(l)?o(l,t+1):o(Array.from(l),t+1):a.push(l)}};return o(Array.from(e),0),a}},71917,(e,t,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});let r=e.r(828021),n=e.r(254663),o=e.r(339978),l=e.r(159629),i=e.r(819206),s=e.r(29300),c=e.r(824188);a.omit=function(e,...t){var a;if(null==e)return{};let d=(a=e,(t=s.flatten(t)).some(e=>Array.isArray(e)||i.isDeepKey(e))?function(e){let t={},a=[...n.keysIn(e),...l.getSymbolsIn(e)];for(let n=0;n<a.length;n++){let o=a[n];t[o]=r.cloneDeepWith(e[o],e=>{if(!c.isPlainObject(e))return e})}return t}(a):function(e){let t={},a=[...n.keysIn(e),...l.getSymbolsIn(e)];for(let r=0;r<a.length;r++){let n=a[r];t[n]=e[n]}return t}(a));for(let e=0;e<t.length;e++){let a=t[e];switch(typeof a){case"object":Array.isArray(a)||(a=Array.from(a));for(let e=0;e<a.length;e++){let t=a[e];o.unset(d,t)}break;case"string":case"symbol":case"number":o.unset(d,a)}}return d}},337174,(e,t,a)=>{t.exports=e.r(71917).omit},562019,e=>{"use strict";var t=e.i(648863),a=e.i(946288),r=e.i(391398);let n={type:"configurator",component:function(e){return(0,r.jsx)(a.AngleSlider,{"aria-label":"Angle slider",...e})},code:`
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider"{{props}} />;
}
`,centered:!0,controls:[{type:"number",prop:"size",initialValue:60,libraryValue:"__",min:50,max:200},{type:"number",prop:"thumbSize",initialValue:8,libraryValue:"__",min:1,max:100},{type:"boolean",prop:"withLabel",initialValue:!0,libraryValue:!0}]};var o=e.i(725695);let l={type:"code",component:function(){return(0,r.jsxs)(o.Group,{p:"lg",gap:50,children:[(0,r.jsx)(a.AngleSlider,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,restrictToMarks:!0,marks:[{value:0},{value:45},{value:90},{value:135},{value:180},{value:225},{value:270},{value:315}]}),(0,r.jsx)(a.AngleSlider,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,marks:[{value:0,label:"0°"},{value:45,label:"45°"},{value:90,label:"90°"},{value:135,label:"135°"},{value:180,label:"180°"},{value:225,label:"225°"},{value:270,label:"270°"},{value:315,label:"315°"}]})]})},code:`
import { AngleSlider, Group } from '@mantine/core';

function Demo() {
  return (
    <Group p="lg" gap={50}>
      <AngleSlider
        aria-label="Angle slider"
        formatLabel={(value) => \`\${value}\xb0\`}
        size={100}
        restrictToMarks
        marks={[
          { value: 0 },
          { value: 45 },
          { value: 90 },
          { value: 135 },
          { value: 180 },
          { value: 225 },
          { value: 270 },
          { value: 315 },
        ]}
      />

      <AngleSlider
        aria-label="Angle slider"
        formatLabel={(value) => \`\${value}\xb0\`}
        size={100}
        marks={[
          { value: 0, label: '0\xb0' },
          { value: 45, label: '45\xb0' },
          { value: 90, label: '90\xb0' },
          { value: 135, label: '135\xb0' },
          { value: 180, label: '180\xb0' },
          { value: 225, label: '225\xb0' },
          { value: 270, label: '270\xb0' },
          { value: 315, label: '315\xb0' },
        ]}
      />
    </Group>
  );
}
`,centered:!0},i={type:"code",component:function(){return(0,r.jsx)(a.AngleSlider,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`})},code:`
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider" formatLabel={(value) => \`\${value}\xb0\`} />;
}
`,centered:!0};var s=e.i(191788),c=e.i(883364);let d={type:"code",component:function(){let[e,t]=(0,s.useState)(0),[n,o]=(0,s.useState)(0);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.AngleSlider,{value:e,onChange:t,onChangeEnd:o}),(0,r.jsxs)(c.Text,{mt:"md",children:["Current value: ",e]}),(0,r.jsxs)(c.Text,{children:["End value: ",n]})]})},code:`
import { useState } from 'react';
import { AngleSlider, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(0);
  const [endValue, setEndValue] = useState(0);

  return (
    <>
      <AngleSlider value={value} onChange={setValue} onChangeEnd={setEndValue} />
      <Text mt="md">Current value: {value}</Text>
      <Text>End value: {endValue}</Text>
    </>
  );
}
`,centered:!0,maxWidth:200},u={type:"code",component:function(){return(0,r.jsx)(a.AngleSlider,{"aria-label":"Angle slider",disabled:!0})},code:`
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider" disabled />;
}
`,centered:!0};var m=(0,t.__exportAll)({disabled:()=>u,formatLabel:()=>i,marks:()=>l,onChangeEnd:()=>d,usage:()=>n});e.s(["AngleSliderDemos",0,m],562019)},905380,e=>{"use strict";var t=e.i(648863),a=e.i(391398),r=e.i(520916),n=e.i(577596),o={root:"m_80d531e7"},l=e.i(232471),i=e.i(481178),s=e.i(275519),c=e.i(317477),d=e.i(779177),u=e.i(951254),m=e.i(44091),p=e.i(62904),f=e.i(391466),h=e.i(191788),v=e.i(337174),x=e.i(56206),y=e.i(524970),g=e.i(543372),b=e.i(815954),j=e.i(301426),S=e.i(270627),k=e.i(516257),C=e.i(778979),A=e.i(134959);function M(){return(M=Object.assign.bind()).apply(null,arguments)}function w(e){return h.createElement(A.Shape,M({shapeType:"trapezoid"},e))}var O=e.i(616468),B=e.i(128002),D=e.i(451400),P=e.i(868413),T=e.i(399479);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach(function(t){var r,n,o;r=e,n=t,o=a[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var V=(0,D.createSelector)([P.selectChartOffsetInternal,(e,t)=>t,T.selectChartDataAndAlwaysIgnoreIndexes],(e,t,a)=>{var r,{data:n,dataKey:o,nameKey:l,tooltipType:i,lastShapeType:s,reversed:c,customWidth:d,cells:u,presentationProps:m,id:p}=t,{chartData:f}=a;if(null!=n&&n.length>0?r=n:null!=f&&f.length>0&&(r=f),r&&r.length)r=r.map((e,t)=>I(I(I({payload:e},m),e),u&&u[t]&&u[t].props));else{if(!u||!u.length)return[];r=u.map(e=>I(I({},m),e.props))}return function(e){var{dataKey:t,nameKey:a,displayedData:r,tooltipType:n,lastShapeType:o,reversed:l,offset:i,customWidth:s,graphicalItemId:c}=e,{realHeight:d,realWidth:u,offsetX:m,offsetY:p}=((e,t)=>{var{width:a,height:r,left:n,top:o}=t;return{realWidth:(0,S.getPercentValue)(e,a,a),realHeight:r,offsetX:n,offsetY:o}})(s,i),f=r.map(e=>{var a=(0,k.getValueByDataKey)(e,t,0);return"number"==typeof a?a:0}),h=Math.max.apply(null,f),x=r.length,y=d/x,g={x:i.left,y:i.top,width:i.width,height:i.height},b=r.map((e,l)=>{var i,s=(0,k.getValueByDataKey)(e,t,0),d=String((0,k.getValueByDataKey)(e,a,l)),f=s;if(l!==x-1){var b=(0,k.getValueByDataKey)(r[l+1],t,0);if("number"==typeof b)i=b;else if(Array.isArray(b)){var[j,S]=b;"number"==typeof j&&(f=j),"number"==typeof S&&(i=S)}}else if(s instanceof Array&&2===s.length){var[C,A]=s;"number"==typeof C&&(f=C),"number"==typeof A&&(i=A)}else i="rectangle"===o?f:0;var M=(h-f)*u/(2*h)+m,w=y*l+p,O=f/h*u,B=i/h*u,D=[{name:d,value:f,payload:e,dataKey:t,type:n,graphicalItemId:c}],P={x:M,y:w,upperWidth:O,lowerWidth:B,width:Math.max(O,B),height:y};return Y(Y(Y({},P),{},{name:d,val:f,tooltipPayload:D,tooltipPosition:{x:M+O/2,y:w+y/2}},null!=e&&"object"==typeof e?(0,v.default)(e,["width"]):{}),{},{payload:e,parentViewBox:g,labelViewBox:P})});return l&&(b=b.map((e,t)=>{var a={x:e.x-(e.lowerWidth-e.upperWidth)/2,y:e.y-t*y+(x-1-t)*y,upperWidth:e.lowerWidth,lowerWidth:e.upperWidth,width:Math.max(e.lowerWidth,e.upperWidth),height:y};return Y(Y(Y({},e),a),{},{tooltipPosition:Y(Y({},e.tooltipPosition),{},{y:e.y-t*y+(x-1-t)*y+y/2}),labelViewBox:a})})),b}({dataKey:o,nameKey:l,displayedData:r,tooltipType:i,lastShapeType:s,reversed:c,offset:e,customWidth:d,graphicalItemId:p})}),N=e.i(106043),F=e.i(300244),z=e.i(297974),L=e.i(630173),R=e.i(883388),_=e.i(355476),Z=e.i(3304),H=e.i(768069),G=["onMouseEnter","onClick","onMouseLeave","shape","activeShape"],K=["id"],W=["stroke","fill","legendType","hide","isAnimationActive","animationBegin","animationDuration","animationEasing","nameKey","lastShapeType","id"],$=["id"];function q(){return(q=Object.assign.bind()).apply(null,arguments)}function U(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function Y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(Object(a),!0).forEach(function(t){var r,n,o;r=e,n=t,o=a[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var J=h.memo(e=>{var{dataKey:t,nameKey:a,stroke:r,strokeWidth:n,fill:o,name:l,hide:i,tooltipType:s,data:c,trapezoids:d,id:u}=e;return h.createElement(B.SetTooltipEntrySettings,{tooltipEntrySettings:{dataDefinedOnItem:c,getPosition:e=>{var t;return null==(t=d[Number(e)])?void 0:t.tooltipPosition},settings:{stroke:r,strokeWidth:n,fill:o,dataKey:t,name:l,nameKey:a,hide:i,type:s,color:o,unit:"",graphicalItemId:u}}})});function Q(e){var{showLabels:t,trapezoids:a,children:r}=e,n=(0,h.useMemo)(()=>{if(t)return null==a?void 0:a.map(e=>{var t=e.labelViewBox;return Y(Y({},t),{},{value:e.name,payload:e.payload,parentViewBox:e.parentViewBox,viewBox:t,fill:e.fill})})},[t,a]);return h.createElement(j.CartesianLabelListContextProvider,{value:n},r)}function ee(e){var{trapezoids:t,allOtherFunnelProps:a}=e,r=(0,g.useAppSelector)(e=>(0,y.selectActiveIndex)(e,"item",e.tooltip.settings.trigger,void 0)),{onMouseEnter:n,onClick:o,onMouseLeave:l,shape:i,activeShape:s}=a,c=U(a,G),d=(0,O.useMouseEnterItemDispatch)(n,a.dataKey,a.id),u=(0,O.useMouseLeaveItemDispatch)(l),m=(0,O.useMouseClickItemDispatch)(o,a.dataKey,a.id);return h.createElement(h.Fragment,null,t.map((e,t)=>{var a=!!s&&r===String(t),n=Y(Y({},e),{},{option:a?s:i,isActive:a,stroke:e.stroke}),{id:o}=n,l=U(n,K);return h.createElement(b.Layer,q({key:"trapezoid-".concat(null==e?void 0:e.x,"-").concat(null==e?void 0:e.y,"-").concat(null==e?void 0:e.name,"-").concat(null==e?void 0:e.value),className:"recharts-funnel-trapezoid"},(0,C.adaptEventsOfChild)(c,e,t),{onMouseEnter:d(e,t),onMouseLeave:u(e,t),onClick:m(e,t)}),h.createElement(w,l))}))}function et(e){var{previousTrapezoidsRef:t,props:a}=e,{trapezoids:r,isAnimationActive:n,animationBegin:o,animationDuration:l,animationEasing:i,onAnimationEnd:s,onAnimationStart:c}=a,d=t.current,[u,m]=(0,h.useState)(!1),p=(0,Z.useAnimationId)(r,"recharts-funnel-"),f=(0,h.useCallback)(()=>{"function"==typeof s&&s(),m(!1)},[s]),v=(0,h.useCallback)(()=>{"function"==typeof c&&c(),m(!0)},[c]);return h.createElement(Q,{showLabels:!u,trapezoids:r},h.createElement(_.JavascriptAnimate,{animationId:p,begin:o,duration:l,isActive:n,easing:i,key:p,onAnimationStart:v,onAnimationEnd:f},e=>{var n=1===e?r:r.map((t,a)=>{var r=d&&d[a];return r?Y(Y({},t),{},{x:(0,S.interpolate)(r.x,t.x,e),y:(0,S.interpolate)(r.y,t.y,e),upperWidth:(0,S.interpolate)(r.upperWidth,t.upperWidth,e),lowerWidth:(0,S.interpolate)(r.lowerWidth,t.lowerWidth,e),height:(0,S.interpolate)(r.height,t.height,e)}):Y(Y({},t),{},{x:(0,S.interpolate)(t.x+t.upperWidth/2,t.x,e),y:(0,S.interpolate)(t.y+t.height/2,t.y,e),upperWidth:(0,S.interpolate)(0,t.upperWidth,e),lowerWidth:(0,S.interpolate)(0,t.lowerWidth,e),height:(0,S.interpolate)(0,t.height,e)})});return e>0&&(t.current=n),h.createElement(b.Layer,null,h.createElement(ee,{trapezoids:n,allOtherFunnelProps:a}))}),h.createElement(j.LabelListFromLabelProp,{label:a.label}),a.children)}function ea(e){var t=(0,h.useRef)(void 0);return h.createElement(et,{props:e,previousTrapezoidsRef:t})}var er={animationBegin:400,animationDuration:1500,animationEasing:"ease",fill:"#808080",hide:!1,isAnimationActive:"auto",lastShapeType:"triangle",legendType:"rect",nameKey:"name",reversed:!1,stroke:"#fff"};function en(e){var t=(0,L.usePlotArea)(),{stroke:a,fill:r,legendType:n,hide:o,isAnimationActive:l,animationBegin:i,animationDuration:s,animationEasing:c,nameKey:d,lastShapeType:u,id:m}=e,p=U(e,W),f=(0,R.svgPropertiesNoEvents)(e),v=(0,N.findAllByType)(e.children,F.Cell),y=(0,h.useMemo)(()=>({dataKey:e.dataKey,nameKey:d,data:e.data,tooltipType:e.tooltipType,lastShapeType:u,reversed:e.reversed,customWidth:e.width,cells:v,presentationProps:f,id:m}),[e.dataKey,d,e.data,e.tooltipType,u,e.reversed,e.width,v,f,m]),j=(0,g.useAppSelector)(e=>V(e,y));if(o||!j||!j.length||!t)return null;var{height:S,width:k}=t,C=(0,x.clsx)("recharts-trapezoids",e.className);return h.createElement(h.Fragment,null,h.createElement(J,{dataKey:e.dataKey,nameKey:e.nameKey,stroke:e.stroke,strokeWidth:e.strokeWidth,fill:e.fill,name:e.name,hide:e.hide,tooltipType:e.tooltipType,data:e.data,trapezoids:j,id:m}),h.createElement(b.Layer,{className:C},h.createElement(ea,q({},p,{id:m,stroke:a,fill:r,nameKey:d,lastShapeType:u,animationBegin:i,animationDuration:s,animationEasing:c,isAnimationActive:l,hide:o,legendType:n,height:S,width:k,trapezoids:j}))))}var eo=function(e){var t=(0,z.resolveDefaultProps)(e,er),{id:a}=t,r=U(t,$);return h.createElement(H.RegisterGraphicalItemId,{id:a,type:"funnel"},e=>h.createElement(en,q({},r,{id:e})))};eo.displayName="Funnel";var el=e.i(471970),ei=e.i(437515),es=["item"],ec=(0,h.forwardRef)((e,t)=>h.createElement(ei.CartesianChart,{chartName:"FunnelChart",defaultTooltipEventType:"item",validateTooltipEventTypes:es,tooltipPayloadSearcher:el.arrayTooltipSearcher,categoricalChartProps:e,ref:t})),ed=e.i(881264),eu=e.i(723451),em=e.i(694713);let ep={withTooltip:!0,size:300,strokeWidth:1,withLabels:!1,labelsPosition:"right",tooltipDataSource:"all"},ef=(0,i.createVarsResolver)((e,{strokeColor:t,labelColor:a,size:r})=>({root:{"--chart-stroke-color":t?(0,c.getThemeColor)(t,e):void 0,"--chart-labels-color":a?(0,c.getThemeColor)(a,e):void 0,"--chart-size":(0,d.rem)(r)}})),eh=(0,s.factory)(e=>{let t=(0,m.useProps)("FunnelChart",ep,e),{classNames:i,className:s,style:d,styles:v,unstyled:x,vars:y,data:g,withTooltip:b,withLegend:S,legendProps:k,tooltipAnimationDuration:C,tooltipProps:A,strokeWidth:M,withLabels:w,size:O,valueFormatter:B,children:D,funnelChartProps:P,funnelProps:T,labelsPosition:E,tooltipDataSource:I,strokeColor:V,labelColor:N,attributes:F,...z}=t,L=(0,u.useMantineTheme)(),[R,_]=(0,h.useState)(null),Z=(0,f.useStyles)({name:"FunnelChart",classes:o,props:t,className:s,style:d,classNames:i,styles:v,unstyled:x,attributes:F,vars:y,varsResolver:ef}),{resolvedClassNames:H,resolvedStyles:G}=(0,p.useResolvedStylesApi)({classNames:i,styles:v,props:t});return(0,a.jsx)(l.Box,{size:O,...Z("root"),...z,children:(0,a.jsx)(eu.ResponsiveContainer,{children:(0,a.jsxs)(ec,{...P,children:[(0,a.jsx)(eo,{data:g.map((e,t)=>({...e,__segmentIndex:t,fill:(0,c.getThemeColor)(e.color,L),fillOpacity:null!==R?R===t?1:.2:1})),dataKey:"value",isAnimationActive:!1,stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:M,...T,children:w&&(0,a.jsx)(j.LabelList,{position:E,fill:"inside"===E?"var(--chart-labels-color, var(--mantine-color-white))":"var(--chart-labels-color, var(--mantine-color-dimmed))",stroke:"none",fontFamily:"var(--mantine-font-family)",fontSize:12,dataKey:e=>"function"==typeof B?B(e.value):e.value})}),b&&(0,a.jsx)(em.Tooltip,{animationDuration:C,isAnimationActive:!1,content:({payload:e})=>(0,a.jsx)(r.ChartTooltip,{payload:g,classNames:H,styles:G,type:"radial",segmentId:"segment"===I?e?.[0]?.payload?.__segmentIndex:void 0,valueFormatter:B,attributes:F}),...A}),S&&(0,a.jsx)(ed.Legend,{verticalAlign:"bottom",content:()=>(0,a.jsx)(n.ChartLegend,{payload:g.map((e,t)=>({value:e.name,color:(0,c.getThemeColor)(e.color,L),dataKey:e.name,highlightKey:t})),onHighlight:e=>_("number"==typeof e?e:null),legendPosition:k?.verticalAlign||"bottom",classNames:H,styles:G,centered:!0,attributes:F}),...k}),D]})})})});eh.displayName="@mantine/charts/FunnelChart",eh.classes=o,eh.varsResolver=ef;let ev={type:"configurator",component:function(e){return(0,a.jsx)(eh,{...e,data:[{name:"USA",value:400,color:e.color},{name:"Other",value:200,color:"gray.6"}]})},code:e=>`
import { FunnelChart } from '@mantine/charts';

function Demo() {
  return (
    <FunnelChart
      data={[
        { name: 'USA', value: 400, color: '${e.color}' },
        { name: 'Other', value: 200, color: 'gray.6' },
      ]}
    />
  );
}
`,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:"__"}]},ex=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:100,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],ey=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`,eg={type:"code",component:function(){return(0,a.jsx)(eh,{data:ex,withLegend:!0})},code:[{code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart data={data} withLegend />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:ey,language:"tsx",fileName:"data.ts"}],centered:!0},eb={type:"code",component:function(){return(0,a.jsx)(eh,{data:ex,withTooltip:!1})},code:[{code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart data={data} withTooltip={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:ey,language:"tsx",fileName:"data.ts"}],centered:!0};var ej=e.i(330573);let eS={type:"configurator",component:function(e){return(0,a.jsx)(ej.Center,{mih:300,children:(0,a.jsx)(eh,{...e,data:ex})})},code:[{fileName:"Demo.tsx",code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart{{props}} data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:ey,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"size",initialValue:160,min:80,max:300,step:1,libraryValue:"__"}]},ek={type:"code",component:function(){return(0,a.jsx)("div",{className:"m_87d42249",children:(0,a.jsx)(eh,{data:ex,strokeColor:"var(--card-bg)"})})},code:[{code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';
import classes from './Demo.module.css';

function Demo() {
  return (
    <div className={classes.root}>
      <FunnelChart data={data} strokeColor="var(--card-bg)" />
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
`,language:"scss",fileName:"Demo.module.css"},{code:ey,language:"tsx",fileName:"data.ts"}],centered:!0},eC={type:"configurator",component:function(e){return(0,a.jsx)(eh,{...e,data:ex})},code:[{fileName:"Demo.tsx",code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart{{props}} data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:ey,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"strokeWidth",initialValue:1,min:0,max:5,step:.1,libraryValue:"__"}]};var eA=e.i(725695),eM=e.i(883364);let ew={type:"code",component:function(){return(0,a.jsxs)(eA.Group,{gap:50,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(eM.Text,{fz:"xs",mb:"sm",ta:"center",children:"Data only for hovered segment"}),(0,a.jsx)(eh,{data:ex,tooltipDataSource:"segment",mx:"auto"})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)(eM.Text,{fz:"xs",mb:"sm",ta:"center",children:"Data only for all segments"}),(0,a.jsx)(eh,{data:ex,mx:"auto"})]})]})},code:[{code:`
import { Group, Text } from '@mantine/core';
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <Group gap={50}>
      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for hovered segment
        </Text>
        <FunnelChart data={data} tooltipDataSource="segment" mx="auto" />
      </div>

      <div>
        <Text fz="xs" mb="sm" ta="center">
          Data only for all segments
        </Text>
        <FunnelChart data={data} mx="auto" />
      </div>
    </Group>
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:ey,language:"tsx",fileName:"data.ts"}],centered:!0},eO={type:"code",component:function(){return(0,a.jsx)(eh,{data:ex})},code:[{code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:ey,language:"tsx",fileName:"data.ts"}],centered:!0},eB={type:"configurator",component:function(e){return(0,a.jsx)(eh,{...e,withLabels:!0,data:ex,miw:300})},code:[{fileName:"Demo.tsx",code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart{{props}} withLabels data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:ey,language:"tsx"}],centered:!0,controls:[{type:"segmented",prop:"labelsPosition",initialValue:"right",libraryValue:"__",data:["left","inside","right"]}]};var eD=(0,t.__exportAll)({color:()=>ev,legend:()=>eg,noTooltip:()=>eb,size:()=>eS,strokeColor:()=>ek,strokeWidth:()=>eC,tooltipDataSource:()=>ew,usage:()=>eO,withLabels:()=>eB});e.s(["FunnelChartDemos",0,eD],905380)},834803,e=>{"use strict";var t=e.i(648863);let a=[{name:"18-24",value:31.47,color:"blue.7"},{name:"25-29",value:26.69,color:"orange.6"},{name:"30-34",value:15.69,color:"yellow.7"},{name:"35-39",value:8.22,color:"cyan.6"},{name:"40-49",value:8.63,color:"green"},{name:"50+",value:2.63,color:"pink"},{name:"unknown",value:6.67,color:"gray"}],r=`
export const data = [
  { name: '18-24', value: 31.47, color: 'blue.7' },
  { name: '25-29', value: 26.69, color: 'orange.6' },
  { name: '30-34', value: 15.69, color: 'yellow.7' },
  { name: '35-39', value: 8.22, color: 'cyan.6' },
  { name: '40-49', value: 8.63, color: 'green' },
  { name: '50+', value: 2.63, color: 'pink' },
  { name: 'unknown', value: 6.67, color: 'gray' },
];
`;var n=e.i(391398),o=e.i(577596),l={root:"m_cd2bd9e5",tooltip:"m_6bcc3420"},i=e.i(232471),s=e.i(771820),c=e.i(725695),d=e.i(470743),u=e.i(481178),m=e.i(275519),p=e.i(317477),f=e.i(951254),h=e.i(44091),v=e.i(62904),x=e.i(391466),y=e.i(191788),g=e.i(881264),b=y,j=e.i(56206),S=e.i(134959);function k(){return(k=Object.assign.bind()).apply(null,arguments)}function C(e){return"string"==typeof e?parseInt(e,10):e}function A(e){return y.createElement(S.Shape,k({shapeType:"sector"},e))}var M=e.i(815954),w=e.i(106043),O=e.i(301426),B=e.i(300244),D=e.i(270627),P=e.i(516257),T=e.i(778979),E=e.i(616468),I=e.i(128002),V=e.i(451400),N=e.i(399479),F=e.i(42201),z=e.i(83727),L=e.i(586489),R=e.i(901841),_=e.i(755335),Z=e.i(299887),H=e.i(620930),G=e.i(63713),K=e.i(467765),W=e.i(333710),$=e.i(808550),q=e.i(343311);function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function X(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(Object(a),!0).forEach(function(t){var r,n,o;r=e,n=t,o=a[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var Y=(0,V.createSelector)([(e,t)=>(0,L.selectRadiusAxis)(e,t),(e,t)=>(0,F.selectPolarAxisScale)(e,"radiusAxis",t)],(e,t)=>{if(null!=e&&null!=t)return X(X({},e),{},{scale:t})}),J=(e,t)=>(0,F.selectPolarGraphicalItemAxisTicks)(e,"radiusAxis",t,!1),Q=(0,V.createSelector)([(e,t,a)=>(0,L.selectAngleAxis)(e,a),(e,t,a)=>(0,F.selectPolarAxisScale)(e,"angleAxis",a)],(e,t)=>{if(null!=e&&null!=t)return X(X({},e),{},{scale:t})}),ee=(e,t,a)=>(0,F.selectPolarAxisTicks)(e,"angleAxis",a,!1),et=(0,V.createSelector)([Z.selectUnfilteredPolarItems,(e,t,a,r)=>r],(e,t)=>{if(e.some(e=>"radialBar"===e.type&&t.dataKey===e.dataKey&&t.stackId===e.stackId))return t}),ea=(0,V.createSelector)([R.selectChartLayout,Y,J,Q,ee],(e,t,a,r,n)=>(0,P.isCategoricalAxis)(e,"radiusAxis")?(0,P.getBandSizeOfAxis)(t,a,!1):(0,P.getBandSizeOfAxis)(r,n,!1)),er=(0,V.createSelector)([Q,Y,R.selectChartLayout],(e,t,a)=>{var r="radial"===a?e:t;if(null!=r&&null!=r.scale)return(0,P.getBaseValueOfBar)({numericAxis:r})}),en=(e,t,a,r,n)=>r.maxBarSize,eo=e=>"radialBar"===e.type,el=(0,V.createSelector)([R.selectChartLayout,Z.selectUnfilteredPolarItems,(e,t,a,r,n)=>a,(e,t,a,r,n)=>t],(e,t,a,r)=>t.filter(t=>"centric"===e?t.angleAxisId===a:t.radiusAxisId===r).filter(e=>!1===e.hide).filter(eo)),ei=(0,V.createSelector)([el,_.selectRootBarSize,()=>void 0],K.combineBarSizeList),es=(0,V.createSelector)([R.selectChartLayout,_.selectRootMaxBarSize,Q,ee,Y,J,en],(e,t,a,r,n,o,l)=>{var i,s,c,d,u=(0,D.isNullish)(l)?t:l;return"centric"===e?null!=(c=null!=(d=(0,P.getBandSizeOfAxis)(a,r,!0))?d:u)?c:0:null!=(i=null!=(s=(0,P.getBandSizeOfAxis)(n,o,!0))?s:u)?i:0}),ec=(0,V.createSelector)([ei,_.selectRootMaxBarSize,_.selectBarGap,_.selectBarCategoryGap,es,ea,en],W.combineAllBarPositions),ed=(0,V.createSelector)([ec,et],q.combineBarPosition),eu=(0,V.createSelector)([Z.selectPolarItemsSettings],e=>e.filter(eo).filter(G.isStacked)),em=(0,V.createSelector)([eu,N.selectChartDataAndAlwaysIgnoreIndexes,z.selectTooltipAxis],H.combineDisplayedStackedData),ep=(0,V.createSelector)([em,eu,_.selectStackOffsetType,_.selectReverseStackOrder],z.combineStackGroups),ef=(0,V.createSelector)([(e,t,a)=>"centric"===(0,R.selectChartLayout)(e)?ep(e,"radiusAxis",t):ep(e,"angleAxis",a),et],$.combineStackedData),eh=(0,V.createSelector)([Q,ee,Y,J,N.selectChartDataWithIndexes,et,ea,R.selectChartLayout,er,L.selectPolarViewBox,(e,t,a,r,n)=>n,ed,ef],(e,t,a,r,n,o,l,i,s,c,d,u,m)=>{var{chartData:p,dataStartIndex:f,dataEndIndex:h}=n;if(null==o||null==a||null==e||null==p||null==l||null==u||"centric"!==i&&"radial"!==i||null==r||null==c)return[];var{dataKey:v,minPointSize:x}=o,{cx:y,cy:g,startAngle:b,endAngle:j}=c,S=p.slice(f,h+1),k="centric"===i?a:e,C=m?k.scale.domain():null;return function(e){var{displayedData:t,stackedData:a,dataStartIndex:r,stackedDomain:n,dataKey:o,baseValue:l,layout:i,radiusAxis:s,radiusAxisTicks:c,bandSize:d,pos:u,angleAxis:m,minPointSize:p,cx:f,cy:h,angleAxisTicks:v,cells:x,startAngle:y,endAngle:g}=e;return null==v||null==c?eN:(null!=t?t:[]).map((e,t)=>{if(a?b=(0,P.truncateByDomain)(a[r+t],n):Array.isArray(b=(0,P.getValueByDataKey)(e,o))||(b=[l,b]),"radial"===i){if(S=null!=(A=m.scale.map(b[0]))?A:y,k=null!=(M=m.scale.map(b[1]))?M:g,null!=(j=(0,P.getCateCoordinateOfBar)({axis:s,ticks:c,bandSize:d,offset:u.offset,entry:e,index:t}))&&null!=k&&null!=S){var b,j,S,k,C,A,M,w=j+u.size,O=k-S;Math.abs(p)>0&&Math.abs(O)<Math.abs(p)&&(k+=(0,D.mathSign)(O||p)*(Math.abs(p)-Math.abs(O))),C={background:{cx:f,cy:h,innerRadius:j,outerRadius:w,startAngle:y,endAngle:g}}}}else if(j=s.scale.map(b[0]),w=s.scale.map(b[1]),S=(0,P.getCateCoordinateOfBar)({axis:m,ticks:v,bandSize:d,offset:u.offset,entry:e,index:t}),null!=j&&null!=w&&null!=S){k=S+u.size;var B=w-j;Math.abs(p)>0&&Math.abs(B)<Math.abs(p)&&(w+=(0,D.mathSign)(B||p)*(Math.abs(p)-Math.abs(B)))}return eI(eI(eI({},e),C),{},{payload:e,value:a?b:b[1],cx:f,cy:h,innerRadius:j,outerRadius:w,startAngle:S,endAngle:k},x&&x[t]&&x[t].props)})}({angleAxis:e,angleAxisTicks:t,bandSize:l,baseValue:s,cells:d,cx:y,cy:g,dataKey:v,dataStartIndex:f,displayedData:S,endAngle:j,layout:i,minPointSize:x,pos:u,radiusAxis:a,radiusAxisTicks:r,stackedData:m,stackedDomain:C,startAngle:b})}),ev=(0,V.createSelector)([N.selectChartDataAndAlwaysIgnoreIndexes,(e,t)=>t],(e,t)=>{var{chartData:a,dataStartIndex:r,dataEndIndex:n}=e;if(null==a)return[];var o=a.slice(r,n+1);return 0===o.length?[]:o.map(e=>({type:t,value:e.name,color:e.fill,payload:e}))}),ex=e.i(543372),ey=e.i(281695),eg=e.i(836094),eb=e.i(3304),ej=e.i(768069),eS=e.i(436323),ek=e.i(883388),eC=e.i(355476),eA=e.i(297974),eM=e.i(561622),ew=e.i(446354),eO=e.i(384464),eB=["shape","activeShape","cornerRadius","id"],eD=["onMouseEnter","onClick","onMouseLeave"],eP=["value","background"];function eT(){return(eT=Object.assign.bind()).apply(null,arguments)}function eE(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function eI(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?eE(Object(a),!0).forEach(function(t){var r,n,o;r=e,n=t,o=a[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):eE(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function eV(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a={};for(var r in e)if(({}).hasOwnProperty.call(e,r)){if(-1!==t.indexOf(r))continue;a[r]=e[r]}return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var eN=[];function eF(e){var{showLabels:t,sectors:a,children:r}=e,n=a.map(e=>({value:e.value,payload:e.payload,parentViewBox:void 0,clockWise:!1,viewBox:{cx:e.cx,cy:e.cy,innerRadius:e.innerRadius,outerRadius:e.outerRadius,startAngle:e.startAngle,endAngle:e.endAngle,clockWise:!1},fill:e.fill}));return b.createElement(O.PolarLabelListContextProvider,{value:t?n:void 0},r)}function ez(e){var{sectors:t,allOtherRadialBarProps:a,showLabels:r}=e,{shape:n,activeShape:o,cornerRadius:l,id:i}=a,s=eV(a,eB),c=(0,ek.svgPropertiesNoEvents)(s),d=(0,ex.useAppSelector)(ey.selectActiveTooltipIndex),{onMouseEnter:u,onClick:m,onMouseLeave:p}=a,f=eV(a,eD),h=(0,E.useMouseEnterItemDispatch)(u,a.dataKey,i),v=(0,E.useMouseLeaveItemDispatch)(p),x=(0,E.useMouseClickItemDispatch)(m,a.dataKey,i);return null==t?null:b.createElement(eF,{showLabels:r,sectors:t},t.map((e,t)=>{var a=!!(o&&d===String(t)),r=h(e,t),i=v(e,t),u=x(e,t),m=eI(eI(eI(eI({},c),{},{cornerRadius:C(l)},e),(0,T.adaptEventsOfChild)(f,e,t)),{},{onMouseEnter:r,onMouseLeave:i,onClick:u,className:"recharts-radial-bar-sector ".concat(e.className),forceCornerRadius:s.forceCornerRadius,cornerIsExternal:s.cornerIsExternal,isActive:a,option:a?o:n,index:t});return a?b.createElement(eM.ZIndexLayer,{zIndex:ew.DefaultZIndexes.activeBar,key:"sector-".concat(e.cx,"-").concat(e.cy,"-").concat(e.innerRadius,"-").concat(e.outerRadius,"-").concat(e.startAngle,"-").concat(e.endAngle,"-").concat(t)},b.createElement(A,m)):b.createElement(A,eT({key:"sector-".concat(e.cx,"-").concat(e.cy,"-").concat(e.innerRadius,"-").concat(e.outerRadius,"-").concat(e.startAngle,"-").concat(e.endAngle,"-").concat(t)},m))}),b.createElement(O.LabelListFromLabelProp,{label:a.label}),a.children)}function eL(e){var{props:t,previousSectorsRef:a}=e,{sectors:r,isAnimationActive:n,animationBegin:o,animationDuration:l,animationEasing:i,onAnimationEnd:s,onAnimationStart:c}=t,d=(0,eb.useAnimationId)(t,"recharts-radialbar-"),u=a.current,[m,p]=(0,b.useState)(!1),f=(0,b.useCallback)(()=>{"function"==typeof s&&s(),p(!1)},[s]),h=(0,b.useCallback)(()=>{"function"==typeof c&&c(),p(!0)},[c]);return b.createElement(eC.JavascriptAnimate,{animationId:d,begin:o,duration:l,isActive:n,easing:i,onAnimationStart:h,onAnimationEnd:f,key:d},e=>{var n=1===e?r:(null!=r?r:eN).map((t,a)=>{var r=u&&u[a];if(r)return eI(eI({},t),{},{startAngle:(0,D.interpolate)(r.startAngle,t.startAngle,e),endAngle:(0,D.interpolate)(r.endAngle,t.endAngle,e)});var{endAngle:n,startAngle:o}=t;return eI(eI({},t),{},{endAngle:(0,D.interpolate)(o,n,e)})});return e>0&&(a.current=null!=n?n:null),b.createElement(ez,{sectors:null!=n?n:eN,allOtherRadialBarProps:t,showLabels:!m})})}function eR(e){var t=(0,b.useRef)(null);return b.createElement(eL,{props:e,previousSectorsRef:t})}function e_(e){var t=(0,ex.useAppSelector)(t=>ev(t,e.legendType));return b.createElement(eg.SetPolarLegendPayload,{legendPayload:null!=t?t:[]})}var eZ=b.memo(e=>{var{dataKey:t,sectors:a,stroke:r,strokeWidth:n,name:o,hide:l,fill:i,tooltipType:s,id:c}=e,d={dataDefinedOnItem:a,getPosition:D.noop,settings:{graphicalItemId:c,stroke:r,strokeWidth:n,fill:i,nameKey:void 0,dataKey:t,name:(0,P.getTooltipNameProp)(o,t),hide:l,type:s,color:i,unit:""}};return b.createElement(I.SetTooltipEntrySettings,{tooltipEntrySettings:d})});class eH extends b.PureComponent{renderBackground(e){if(null==e)return null;var{cornerRadius:t}=this.props,a=(0,ek.svgPropertiesNoEventsFromUnknown)(this.props.background);return b.createElement(eM.ZIndexLayer,{zIndex:(0,eO.getZIndexFromUnknown)(this.props.background,ew.DefaultZIndexes.barBackground)},e.map((e,r)=>{var{value:n,background:o}=e,l=eV(e,eP);if(!o)return null;var i=eI(eI(eI(eI(eI({cornerRadius:C(t)},l),{},{fill:"#eee"},o),a),(0,T.adaptEventsOfChild)(this.props,e,r)),{},{index:r,className:(0,j.clsx)("recharts-radial-bar-background-sector",String(null==a?void 0:a.className)),option:o,isActive:!1});return b.createElement(A,eT({key:"background-".concat(l.cx,"-").concat(l.cy,"-").concat(l.innerRadius,"-").concat(l.outerRadius,"-").concat(l.startAngle,"-").concat(l.endAngle,"-").concat(r)},i))}))}render(){var{hide:e,sectors:t,className:a,background:r}=this.props;if(e)return null;var n=(0,j.clsx)("recharts-area",a);return b.createElement(eM.ZIndexLayer,{zIndex:this.props.zIndex},b.createElement(M.Layer,{className:n},r&&b.createElement(M.Layer,{className:"recharts-radial-bar-background"},this.renderBackground(t)),b.createElement(M.Layer,{className:"recharts-radial-bar-sectors"},b.createElement(eR,this.props))))}}function eG(e){var t,a=b.useMemo(()=>(0,w.findAllByType)(e.children,B.Cell),[e.children]),r=b.useMemo(()=>({data:void 0,hide:!1,id:e.id,dataKey:e.dataKey,minPointSize:e.minPointSize,stackId:(0,P.getNormalizedStackId)(e.stackId),maxBarSize:e.maxBarSize,barSize:e.barSize,type:"radialBar",angleAxisId:e.angleAxisId,radiusAxisId:e.radiusAxisId}),[e.id,e.dataKey,e.minPointSize,e.stackId,e.maxBarSize,e.barSize,e.angleAxisId,e.radiusAxisId]),n=null!=(t=(0,ex.useAppSelector)(t=>eh(t,e.radiusAxisId,e.angleAxisId,r,a)))?t:eN;return b.createElement(b.Fragment,null,b.createElement(eZ,{dataKey:e.dataKey,sectors:n,stroke:e.stroke,strokeWidth:e.strokeWidth,name:e.name,hide:e.hide,fill:e.fill,tooltipType:e.tooltipType,id:e.id}),b.createElement(eH,eT({},e,{sectors:n})))}var eK={angleAxisId:0,animationBegin:0,animationDuration:1500,animationEasing:"ease",background:!1,cornerIsExternal:!1,cornerRadius:0,forceCornerRadius:!1,hide:!1,isAnimationActive:"auto",label:!1,legendType:"rect",minPointSize:0,radiusAxisId:0,zIndex:ew.DefaultZIndexes.bar};function eW(e){var t=(0,eA.resolveDefaultProps)(e,eK);return b.createElement(ej.RegisterGraphicalItemId,{id:t.id,type:"radialBar"},e=>{var a,r,n;return b.createElement(b.Fragment,null,b.createElement(eS.SetPolarGraphicalItem,{type:"radialBar",id:e,data:void 0,dataKey:t.dataKey,hide:null!=(a=t.hide)?a:eK.hide,angleAxisId:null!=(r=t.angleAxisId)?r:eK.angleAxisId,radiusAxisId:null!=(n=t.radiusAxisId)?n:eK.radiusAxisId,stackId:(0,P.getNormalizedStackId)(t.stackId),barSize:t.barSize,minPointSize:t.minPointSize,maxBarSize:t.maxBarSize}),b.createElement(e_,t),b.createElement(eG,eT({},t,{id:e})))})}eW.displayName="RadialBar";var e$=e.i(471970),eq=e.i(985743);function eU(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}function eX(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?eU(Object(a),!0).forEach(function(t){var r,n,o;r=e,n=t,o=a[t],(n=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(n))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):eU(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var eY=["axis","item"],eJ=eX(eX({},eq.defaultPolarChartProps),{},{layout:"radial",startAngle:0,endAngle:360}),eQ=(0,y.forwardRef)((e,t)=>{var a=(0,eA.resolveDefaultProps)(e,eJ);return y.createElement(eq.PolarChart,{chartName:"RadialBarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:eY,tooltipPayloadSearcher:e$.arrayTooltipSearcher,categoricalChartProps:a,ref:t})}),e0=e.i(723451),e1=e.i(694713);let e2={barSize:20,startAngle:90,endAngle:-270,withBackground:!0,withTooltip:!0},e8=(0,u.createVarsResolver)((e,{emptyBackgroundColor:t})=>({root:{"--chart-empty-background":t?(0,p.getThemeColor)(t,e):void 0}})),e6=(0,m.factory)(e=>{let t=(0,h.useProps)("RadialBarChart",e2,e),{classNames:a,className:r,style:u,styles:m,unstyled:b,vars:j,data:S,barSize:k,withBackground:C,dataKey:A,radialBarProps:M,radialBarChartProps:w,withLabels:O,withLegend:B,legendProps:D,withTooltip:P,tooltipProps:T,startAngle:E,endAngle:I,attributes:V,...N}=t,[F,z]=(0,y.useState)(null),L=(0,x.useStyles)({name:"RadialBarChart",classes:l,props:t,className:r,style:u,classNames:a,styles:m,unstyled:b,attributes:V,vars:j,varsResolver:e8}),R=(0,f.useMantineTheme)(),_=S.map(({color:e,...t},a)=>{let r=(0,p.getThemeColor)(e,R);return{...t,__segmentIndex:a,fill:r,fillOpacity:null!==F?F===a?t.opacity||1:.05:t.opacity||1}}),{resolvedClassNames:Z,resolvedStyles:H}=(0,v.useResolvedStylesApi)({classNames:a,styles:m,props:t});return(0,n.jsx)(i.Box,{...L("root"),...N,children:(0,n.jsx)(e0.ResponsiveContainer,{children:(0,n.jsxs)(eQ,{margin:{top:0,bottom:0,left:0,right:0},innerRadius:"10%",outerRadius:"100%",cx:"50%",cy:"50%",barSize:k,startAngle:E,endAngle:I,data:_,...w,children:[(0,n.jsx)(eW,{label:O?{position:"insideStart",fill:"var(--mantine-color-white)",fontSize:12}:void 0,background:C?{fill:"var(--chart-empty-background)"}:void 0,dataKey:A,isAnimationActive:!1,...M}),B&&(0,n.jsx)(g.Legend,{verticalAlign:"bottom",content:e=>(0,n.jsx)(o.ChartLegend,{payload:e.payload?.map(e=>({...e,dataKey:e.payload?.name,highlightKey:e.payload?.__segmentIndex})),onHighlight:e=>z("number"==typeof e?e:null),legendPosition:D?.verticalAlign||"bottom",classNames:Z,styles:H,centered:!0,attributes:V}),...D}),P&&(0,n.jsx)(e1.Tooltip,{animationDuration:0,isAnimationActive:!1,cursor:{stroke:"var(--chart-cursor-color)"},content:({payload:e})=>(0,n.jsxs)(d.Paper,{...L("tooltip"),children:[(0,n.jsxs)(c.Group,{gap:"sm",children:[(0,n.jsx)(s.ColorSwatch,{color:e?.[0]?.payload.fill,size:12,withShadow:!1}),(0,n.jsx)("span",{children:e?.[0]?.payload.name})]}),(0,n.jsx)("span",{children:e?.[0]?.payload[A]})]}),...T})]})})})});e6.displayName="@mantine/core/RadialBarChart",e6.classes=l,e6.varsResolver=e8;let e4={type:"code",component:function(){return(0,n.jsx)(e6,{data:a,dataKey:"value",h:220})},code:[{fileName:"Demo.tsx",code:`
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={220} />;
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},e3={type:"configurator",component:function(e){return(0,n.jsx)(e6,{data:[{name:"18-24",value:31.47,color:e.color},{name:"25-29",value:26.69,color:e.color},{name:"30-34",value:15.69,color:e.color},{name:"35-39",value:8.22,color:e.color},{name:"40-49",value:8.63,color:e.color},{name:"50+",value:2.63,color:e.color},{name:"unknown",value:6.67,color:e.color}],dataKey:"value",h:220,w:220})},code:e=>`
import { RadialBarChart } from '@mantine/charts';

const data = [
    { name: '18-24', value: 31.47, color: '${e.color}' },
    { name: '25-29', value: 26.69, color: '${e.color}' },
    { name: '30-34', value: 15.69, color: '${e.color}' },
    { name: '35-39', value: 8.22, color: '${e.color}' },
    { name: '40-49', value: 8.63, color: '${e.color}' },
    { name: '50+', value: 2.63, color: '${e.color}' },
    { name: 'unknown', value: 6.67, color: '${e.color}' },
  ];

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={220} w={220} />;
}
`,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:null}]},e5={type:"code",component:function(){return(0,n.jsx)(e6,{data:a,dataKey:"value",h:260,withLegend:!0})},code:[{fileName:"Demo.tsx",code:`
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={220} withLegend />;
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},e7={type:"code",component:function(){return(0,n.jsx)(e6,{data:a,dataKey:"value",h:220,withTooltip:!1})},code:[{fileName:"Demo.tsx",code:`
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={220} withTooltip={false} />;
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]},e9={type:"code",component:function(){return(0,n.jsx)(e6,{data:a,dataKey:"value",h:280,withLabels:!0})},code:[{fileName:"Demo.tsx",code:`
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={280} withLabels />;
}
`,language:"tsx"},{fileName:"data.ts",code:r,language:"tsx"}]};var te=(0,t.__exportAll)({color:()=>e3,labels:()=>e9,legend:()=>e5,noTooltip:()=>e7,usage:()=>e4});e.s(["RadialBarChartDemos",0,te],834803)},7819,e=>{"use strict";var t=e.i(391398),a=e.i(38856),r=e.i(562019),n=e.i(113997),o=e.i(905380),l=e.i(18584),i=e.i(834803),s=e.i(501655);e.i(603441);var c=e.i(62558);e.i(457450);var d=e.i(418026);let u=(0,c.Layout)(d.MDX_DATA.Changelog7140);function m(e){let c={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.useMDXComponents)(),...e.components},{Demo:d}=c;return d||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.h2,{id:"angleslider-component",children:"AngleSlider component"}),"\n",(0,t.jsxs)(c.p,{children:["New ",(0,t.jsx)(c.a,{href:"/core/angle-slider/",children:"AngleSlider"})," component:"]}),"\n",(0,t.jsx)(d,{data:r.AngleSliderDemos.marks}),"\n",(0,t.jsx)(c.h2,{id:"radialbarchart-component",children:"RadialBarChart component"}),"\n",(0,t.jsxs)(c.p,{children:["New ",(0,t.jsx)(c.a,{href:"/charts/radial-bar-chart/",children:"RadialBarChart"})," component:"]}),"\n",(0,t.jsx)(d,{data:i.RadialBarChartDemos.labels}),"\n",(0,t.jsx)(c.h2,{id:"funnelchart-component",children:"FunnelChart component"}),"\n",(0,t.jsxs)(c.p,{children:["New ",(0,t.jsx)(c.a,{href:"/charts/funnel-chart/",children:"FunnelChart"})," component:"]}),"\n",(0,t.jsx)(d,{data:o.FunnelChartDemos.usage}),"\n",(0,t.jsx)(c.h2,{id:"modalstack-and-drawerstack-components",children:"Modal.Stack and Drawer.Stack components"}),"\n",(0,t.jsxs)(c.p,{children:["New ",(0,t.jsx)(c.a,{href:"/core/modal/",children:"Modal.Stack"})," and ",(0,t.jsx)(c.a,{href:"/core/drawer",children:"Drawer.Stack"})," components simplify usage of multiple modals/drawers at the same time."]}),"\n",(0,t.jsxs)(c.p,{children:["Use ",(0,t.jsx)(c.code,{children:"Modal.Stack"})," component to render multiple modals at the same time.\n",(0,t.jsx)(c.code,{children:"Modal.Stack"})," keeps track of opened modals, manages z-index values, focus trapping\nand ",(0,t.jsx)(c.code,{children:"closeOnEscape"})," behavior. ",(0,t.jsx)(c.code,{children:"Modal.Stack"})," is designed to be used with ",(0,t.jsx)(c.code,{children:"useModalsStack"})," hook."]}),"\n",(0,t.jsxs)(c.p,{children:["Differences from using multiple ",(0,t.jsx)(c.code,{children:"Modal"})," components:"]}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.code,{children:"Modal.Stack"})," manages z-index values – modals that are opened later will always have higher z-index value disregarding their order in the DOM"]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.code,{children:"Modal.Stack"})," disables focus trap and ",(0,t.jsx)(c.code,{children:"Escape"})," key handling for all modals except the one that is currently opened"]}),"\n",(0,t.jsxs)(c.li,{children:["Modals that are not currently opened are present in the DOM but are hidden with ",(0,t.jsx)(c.code,{children:"opacity: 0"})," and ",(0,t.jsx)(c.code,{children:"pointer-events: none"})]}),"\n",(0,t.jsx)(c.li,{children:"Only one overlay is rendered at a time"}),"\n"]}),"\n",(0,t.jsx)(d,{data:l.ModalDemos.stack}),"\n",(0,t.jsx)(c.h2,{id:"usemodalsstackusedrawersstack-hooks",children:"useModalsStack/useDrawersStack hooks"}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.code,{children:"useModalsStack"})," hook provides an easy way to control multiple modals at the same time.\nIt accepts an array of unique modals ids and returns an object with the following properties:"]}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-tsx",children:"interface ModalStackReturnType<T extends string> {\n  // Current opened state of each modal\n  state: Record<T, boolean>;\n\n  // Opens modal with the given id\n  open: (id: T) => void;\n\n  // Closes modal with the given id\n  close: (id: T) => void;\n\n  // Toggles modal with the given id\n  toggle: (id: T) => void;\n\n  // Closes all modals within the stack\n  closeAll: () => void;\n\n  // Returns props for modal with the given id\n  register: (id: T) => {\n    opened: boolean;\n    onClose: () => void;\n    stackId: T;\n  };\n}\n"})}),"\n",(0,t.jsxs)(c.p,{children:["Example of using ",(0,t.jsx)(c.code,{children:"useModalsStack"})," with ",(0,t.jsx)(c.code,{children:"Modal"})," component:"]}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-tsx",children:"import { Modal, useModalsStack } from '@mantine/core';\n\nfunction Demo() {\n  const stack = useModalsStack(['first', 'second']);\n\n  return (\n    <>\n      <Modal {...stack.register('first')}>First</Modal>\n      <Modal {...stack.register('second')}>Second</Modal>\n      <Button onClick={() => stack.open('first')}>Open first</Button>\n    </>\n  );\n}\n"})}),"\n",(0,t.jsx)(c.h2,{id:"restrict-slider-selection-to-marks",children:"Restrict Slider selection to marks"}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.a,{href:"/core/slider",children:"Slider"})," component now supports ",(0,t.jsx)(c.code,{children:"restrictToMarks"})," prop that restricts slider value to marks only.\nNote that in this case ",(0,t.jsx)(c.code,{children:"step"})," prop is ignored:"]}),"\n",(0,t.jsx)(d,{data:s.SliderDemos.restrictToMarks}),"\n",(0,t.jsx)(c.h2,{id:"barchart-svg-pattern-fill",children:"BarChart SVG pattern fill"}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.a,{href:"/charts/bar-chart",children:"BarChart"})," now can be used with SVG pattern fill:"]}),"\n",(0,t.jsx)(d,{data:n.BarChartDemos.stripes}),"\n",(0,t.jsx)(c.h2,{id:"help-center-updates",children:"Help center updates"}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsxs)(c.li,{children:["New ",(0,t.jsx)(c.a,{href:"https://help.mantine.dev/q/nested-inline-styles",children:"Can I use nested inline styles with Mantine components?"})," question"]}),"\n",(0,t.jsxs)(c.li,{children:["New ",(0,t.jsx)(c.a,{href:"https://help.mantine.dev/q/postcss-fns-inline",children:"Can I use PostCSS function in inline styles?"})," question"]}),"\n",(0,t.jsxs)(c.li,{children:["New ",(0,t.jsx)(c.a,{href:"https://help.mantine.dev/q/carousel-missing-styles",children:"Why my Carousel slides are in vertical orientation?"})," question"]}),"\n",(0,t.jsxs)(c.li,{children:["New ",(0,t.jsx)(c.a,{href:"https://help.mantine.dev/q/transparent-buttons",children:"My buttons are transparent and the background is visible only on hover, what is wrong?"})," question"]}),"\n",(0,t.jsxs)(c.li,{children:["New ",(0,t.jsx)(c.a,{href:"https://help.mantine.dev/q/primary-virtual-color",children:"Can I have different primary color for light and dark color schemes?"})," question"]}),"\n",(0,t.jsxs)(c.li,{children:["New ",(0,t.jsx)(c.a,{href:"https://help.mantine.dev/q/body-background",children:"How can I change body background color?"})," question"]}),"\n",(0,t.jsxs)(c.li,{children:["New ",(0,t.jsx)(c.a,{href:"https://help.mantine.dev/q/nested-popover-closes",children:"My Popover dropdown closes when I click on the dropdown of nested Popover"})," question"]}),"\n"]}),"\n",(0,t.jsx)(c.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.a,{href:"/core/tree/",children:"useTree"})," hook now accepts ",(0,t.jsx)(c.code,{children:"onNodeExpand"})," and ",(0,t.jsx)(c.code,{children:"onNodeCollapse"})," callbacks"]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.a,{href:"/core/tree/",children:"useTree"})," hook now returns additional ",(0,t.jsx)(c.code,{children:"checkAllNodes"}),", ",(0,t.jsx)(c.code,{children:"uncheckAllNodes"})," and ",(0,t.jsx)(c.code,{children:"setCheckedState"})," handlers"]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.a,{href:"/core/tree",children:"Tree"})," component now includes ",(0,t.jsx)(c.code,{children:"getTreeExpandedState"})," to generate expanded state based on the tree data"]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.a,{href:"/form/use-form",children:"use-form"})," now supports ",(0,t.jsx)(c.code,{children:"form.replaceListItem"})," handler to replace list item at given index"]}),"\n"]})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(u,{...e,children:(0,t.jsx)(m,{...e})})}])},383517,(e,t,a)=>{let r="/changelog/7-14-0";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(7819)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);