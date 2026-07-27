(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let n={};for(var r in e)t(n,r,{get:e[r],enumerable:!0});return a||t(n,Symbol.toStringTag,{value:"Module"}),n}])},257177,e=>{"use strict";var t=e.i(433512),a=e.i(481178),n=e.i(317477),r=e.i(44091),o=e.i(391466),l=e.i(956449),i=e.i(232471),s={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"},c=e.i(391398);let d=(0,a.createVarsResolver)((e,{radius:a,color:r,gradient:o,variant:l,size:i,autoContrast:s,circle:c})=>{let d=e.variantColorResolver({color:r||e.primaryColor,theme:e,gradient:o,variant:l||"filled",autoContrast:s});return{root:{"--badge-height":(0,t.getSize)(i,"badge-height"),"--badge-padding-x":(0,t.getSize)(i,"badge-padding-x"),"--badge-fz":(0,t.getSize)(i,"badge-fz"),"--badge-radius":c||void 0===a?void 0:(0,t.getRadius)(a),"--badge-bg":r||l?d.background:void 0,"--badge-color":r||l?d.color:void 0,"--badge-bd":r||l?d.border:void 0,"--badge-dot-color":"dot"===l?(0,n.getThemeColor)(r,e):void 0}}}),u=(0,l.polymorphicFactory)(e=>{let t=(0,r.useProps)("Badge",null,e),{classNames:a,className:n,style:l,styles:u,unstyled:m,vars:p,radius:f,color:h,gradient:y,leftSection:v,rightSection:g,children:x,variant:b,fullWidth:j,autoContrast:S,circle:k,mod:A,attributes:C,...w}=t,M=(0,o.useStyles)({name:"Badge",props:t,classes:s,className:n,style:l,classNames:a,styles:u,unstyled:m,attributes:C,vars:p,varsResolver:d});return(0,c.jsxs)(i.Box,{variant:b,mod:[{block:j,circle:k,"with-right-section":!!g,"with-left-section":!!v},A],...M("root",{variant:b}),...w,children:[v&&(0,c.jsx)("span",{...M("section"),"data-position":"left",children:v}),(0,c.jsx)("span",{...M("label"),children:x}),g&&(0,c.jsx)("span",{...M("section"),"data-position":"right",children:g})]})});u.classes=s,u.varsResolver=d,u.displayName="@mantine/core/Badge",e.s(["Badge",0,u],257177)},123895,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20a108,108,0,0,0,0,216c22.27,0,45.69-6.73,62.64-18a12,12,0,1,0-13.29-20c-13,8.63-31.89,14-49.35,14a84,84,0,1,1,84-84c0,9.29-1.67,17.08-4.69,21.95-2.64,4.24-6,6.05-11.31,6.05s-8.67-1.81-11.31-6.05c-3-4.87-4.69-12.66-4.69-21.95V88a12,12,0,0,0-23.49-3.46,52,52,0,1,0,8.86,79.57C172.3,174.3,182.81,180,196,180c24.67,0,40-19.92,40-52A108.12,108.12,0,0,0,128,20Zm0,136a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232,128c0,.51,0,1,0,1.52-.34,14.26-5.63,30.48-28,30.48-23.14,0-28-17.4-28-32V88a8,8,0,0,0-8.53-8A8.17,8.17,0,0,0,160,88.27v4a48,48,0,1,0,6.73,64.05,40.19,40.19,0,0,0,3.38,5C175.48,168,185.71,176,204,176a54.81,54.81,0,0,0,9.22-.75,4,4,0,0,1,4.09,6A104.05,104.05,0,0,1,125.91,232C71.13,230.9,26.2,186.86,24.08,132.11A104,104,0,1,1,232,128ZM96,128a32,32,0,1,0,32-32A32,32,0,0,0,96,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26a102,102,0,0,0,0,204c21.13,0,43.31-6.35,59.32-17a6,6,0,0,0-6.65-10c-13.9,9.25-34.09,15-52.67,15a90,90,0,1,1,90-90c0,29.58-13.78,34-22,34s-22-4.42-22-34V88a6,6,0,0,0-12,0v9a46,46,0,1,0,4.34,56.32C171.76,166.6,182,174,196,174c21.29,0,34-17.2,34-46A102.12,102.12,0,0,0,128,26Zm0,136a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28a100,100,0,0,0,0,200c20.76,0,42.52-6.23,58.21-16.66a4,4,0,1,0-4.43-6.67C167.35,214.27,147.24,220,128,220a92,92,0,1,1,92-92c0,31.32-15,36-24,36s-24-4.68-24-36V88a4,4,0,0,0-8,0v14.75a44,44,0,1,0,2.82,45.94C171.46,163.58,181.66,172,196,172c20,0,32-16.45,32-44A100.11,100.11,0,0,0,128,28Zm0,136a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="AtIcon",e.s(["AtIcon",0,r],123895)},541772,e=>{"use strict";var t=e.i(191788);e.s(["useDisclosure",0,function(e=!1,a={}){let[n,r]=(0,t.useState)(e),o=(0,t.useCallback)(()=>{r(e=>e||(a.onOpen?.(),!0))},[a.onOpen]),l=(0,t.useCallback)(()=>{r(e=>e?(a.onClose?.(),!1):e)},[a.onClose]);return[n,{open:o,close:l,toggle:(0,t.useCallback)(()=>{n?l():o()},[l,o,n]),set:r}]}])},477777,430731,637245,225147,811590,426611,32044,446817,e=>{"use strict";var t=e.i(232471);let[a,n]=(0,e.i(386179).createSafeContext)("ModalBase component was not found in tree");var r=e.i(191788),o=e.i(56206),l=e.i(391398);function i({className:e,...a}){let s,c=(s=n(),(0,r.useEffect)(()=>(s.setBodyMounted(!0),()=>s.setBodyMounted(!1)),[]),s.getBodyId()),d=n();return(0,l.jsx)(t.Box,{id:c,className:(0,o.default)({m_5df29311:!d.unstyled},e),...a})}i.displayName="@mantine/core/ModalBaseBody",e.s(["ModalBaseBody",0,i],477777);var s=e.i(802046);function c({className:e,onClick:t,...a}){let r=n();return(0,l.jsx)(s.CloseButton,{...a,onClick:e=>{r.onClose(),t?.(e)},className:(0,o.default)({m_606cb269:!r.unstyled},e),unstyled:r.unstyled})}c.displayName="@mantine/core/ModalBaseCloseButton",e.s(["ModalBaseCloseButton",0,c],430731);var d=e.i(470743),u=e.i(34515),m=e.i(22630);function p({transitionProps:e,className:t,innerProps:a,onKeyDown:r,style:i,ref:s,...c}){let f=n();return(0,l.jsx)(u.Transition,{mounted:f.opened,transition:"pop",...f.transitionProps,onExited:()=>{f.onExitTransitionEnd?.(),f.transitionProps?.onExited?.()},onEntered:()=>{f.onEnterTransitionEnd?.(),f.transitionProps?.onEntered?.()},...e,children:e=>(0,l.jsx)("div",{...a,className:(0,o.default)({m_60c222c7:!f.unstyled},a.className),children:(0,l.jsx)(m.FocusTrap,{active:f.opened&&f.trapFocus,innerRef:s,children:(0,l.jsx)(d.Paper,{...c,component:"section",role:"dialog",tabIndex:-1,"aria-modal":!0,"aria-describedby":f.bodyMounted?f.getBodyId():void 0,"aria-labelledby":f.titleMounted?f.getTitleId():void 0,style:[i,e],className:(0,o.default)({m_fd1ab0aa:!f.unstyled},t),unstyled:f.unstyled,children:c.children})})})})}function f({className:e,...a}){let r=n();return(0,l.jsx)(t.Box,{component:"header",className:(0,o.default)({m_b5489c3c:!r.unstyled},e),...a})}p.displayName="@mantine/core/ModalBaseContent",e.s(["ModalBaseContent",0,p],637245),e.s(["NativeScrollArea",0,function({children:e}){return(0,l.jsx)(l.Fragment,{children:e})}],225147),f.displayName="@mantine/core/ModalBaseHeader",e.s(["ModalBaseHeader",0,f],811590);var h=e.i(476273);let y={duration:200,timingFunction:"ease",transition:"fade"};function v({onClick:e,transitionProps:t,style:a,visible:r,...o}){let i,s=n(),c=(i=n(),{...y,...i.transitionProps,...t});return(0,l.jsx)(u.Transition,{mounted:void 0!==r?r:s.opened,...c,transition:"fade",children:t=>(0,l.jsx)(h.Overlay,{fixed:!0,style:[a,t],zIndex:s.zIndex,unstyled:s.unstyled,onClick:t=>{e?.(t),s.closeOnClickOutside&&s.onClose()},...o})})}v.displayName="@mantine/core/ModalBaseOverlay",e.s(["ModalBaseOverlay",0,v],426611);var g=e.i(749218),x=e.i(433512),b=e.i(164483),j=e.i(779861),S=e.i(484108),k=e.i(107315),A=e.i(133613),C=e.i(865823);function w({keepMounted:e,keepMountedMode:n="activity",opened:o,onClose:i,id:s,transitionProps:c,onExitTransitionEnd:d,onEnterTransitionEnd:u,trapFocus:m,closeOnEscape:p,returnFocus:f,closeOnClickOutside:h,withinPortal:y,portalProps:v,lockScroll:M,children:O,zIndex:B,shadow:D,padding:P,__vars:T,unstyled:E,removeScrollProps:I,...V}){let{_id:N,titleMounted:F,bodyMounted:L,shouldLockScroll:z,setTitleMounted:R,setBodyMounted:_}=function({id:e,transitionProps:t,opened:a,trapFocus:n,closeOnEscape:o,onClose:l,returnFocus:i}){let s=(0,k.useId)(e),[c,d]=(0,r.useState)(!1),[u,m]=(0,r.useState)(!1),p=function({opened:e,transitionDuration:t}){let[a,n]=(0,r.useState)(e),o=(0,r.useRef)(-1),l=(0,j.useReducedMotion)()?0:t;return(0,r.useEffect)(()=>(e?(n(!0),window.clearTimeout(o.current)):0===l?n(!1):o.current=window.setTimeout(()=>n(!1),l),()=>window.clearTimeout(o.current)),[e,l]),a}({opened:a,transitionDuration:"number"==typeof t?.duration?t?.duration:200});return(0,A.useWindowEvent)("keydown",e=>{"Escape"===e.key&&o&&!e.isComposing&&a&&e.target?.getAttribute("data-mantine-stop-propagation")!=="true"&&l()},{capture:!0}),(0,S.useFocusReturn)({opened:a,shouldReturnFocus:n&&i}),{_id:s,titleMounted:c,bodyMounted:u,shouldLockScroll:p,setTitleMounted:d,setBodyMounted:m}}({id:s,transitionProps:c,opened:o,trapFocus:m,closeOnEscape:p,onClose:i,returnFocus:f}),{key:Z,...H}=I||{};return(0,l.jsx)(b.OptionalPortal,{...v,withinPortal:y,children:(0,l.jsx)(a,{value:{opened:o,onClose:i,closeOnClickOutside:h,onExitTransitionEnd:d,onEnterTransitionEnd:u,transitionProps:{...c,keepMounted:e,keepMountedMode:n},getTitleId:()=>`${N}-title`,getBodyId:()=>`${N}-body`,titleMounted:F,bodyMounted:L,setTitleMounted:R,setBodyMounted:_,trapFocus:m,closeOnEscape:p,zIndex:B,unstyled:E},children:(0,l.jsx)(C.RemoveScroll,{enabled:z&&M,...H,children:(0,l.jsx)(t.Box,{...V,id:N,__vars:{...T,"--mb-z-index":(B||(0,g.getDefaultZIndex)("modal")).toString(),"--mb-shadow":(0,x.getShadow)(D),"--mb-padding":(0,x.getSpacing)(P)},children:O})},Z)})})}function M({className:e,...a}){let i,s=(i=n(),(0,r.useEffect)(()=>(i.setTitleMounted(!0),()=>i.setTitleMounted(!1)),[]),i.getTitleId()),c=n();return(0,l.jsx)(t.Box,{component:"h2",className:(0,o.default)({m_615af6c9:!c.unstyled},e),id:s,...a})}w.displayName="@mantine/core/ModalBase",e.s(["ModalBase",0,w],32044),M.displayName="@mantine/core/ModalBaseTitle",e.s(["ModalBaseTitle",0,M],446817)},424302,e=>{"use strict";var t=e.i(749218),a=e.i(44091),n=e.i(275519),r={root:"m_9df02822",content:"m_54c44539",inner:"m_1f958f16",header:"m_d0e2b9cd"},o=e.i(477777);let[l,i]=(0,e.i(386179).createSafeContext)("Modal component was not found in tree");var s=e.i(391398);let c=(0,n.factory)(e=>{let{classNames:t,className:n,style:r,styles:l,vars:c,...d}=(0,a.useProps)("ModalBody",null,e);return(0,s.jsx)(o.ModalBaseBody,{...i().getStyles("body",{classNames:t,style:r,styles:l,className:n}),...d})});c.classes=r,c.displayName="@mantine/core/ModalBody";var d=e.i(430731);let u=(0,n.factory)(e=>{let{classNames:t,className:n,style:r,styles:o,vars:l,...c}=(0,a.useProps)("ModalCloseButton",null,e);return(0,s.jsx)(d.ModalBaseCloseButton,{...i().getStyles("close",{classNames:t,style:r,styles:o,className:n}),...c})});u.classes=r,u.displayName="@mantine/core/ModalCloseButton";var m=e.i(779177),p=e.i(637245),f=e.i(225147);let h=(0,n.factory)(e=>{let{classNames:t,className:n,style:r,styles:o,vars:l,children:c,__hidden:d,...u}=(0,a.useProps)("ModalContent",null,e),h=i(),y=h.scrollAreaComponent||f.NativeScrollArea;return(0,s.jsx)(p.ModalBaseContent,{...h.getStyles("content",{className:n,style:r,styles:o,classNames:t}),innerProps:h.getStyles("inner",{className:n,style:r,styles:o,classNames:t}),"data-full-screen":h.fullScreen||void 0,"data-modal-content":!0,"data-hidden":d||void 0,...u,children:(0,s.jsx)(y,{style:{maxHeight:h.fullScreen?"100dvh":`calc(100dvh - (${(0,m.rem)(h.yOffset)} * 2))`},children:c})})});h.classes=r,h.displayName="@mantine/core/ModalContent";var y=e.i(811590);let v=(0,n.factory)(e=>{let{classNames:t,className:n,style:r,styles:o,vars:l,...c}=(0,a.useProps)("ModalHeader",null,e);return(0,s.jsx)(y.ModalBaseHeader,{...i().getStyles("header",{classNames:t,style:r,styles:o,className:n}),...c})});v.classes=r,v.displayName="@mantine/core/ModalHeader";var g=e.i(426611);let x=(0,n.factory)(e=>{let{classNames:t,className:n,style:r,styles:o,vars:l,...c}=(0,a.useProps)("ModalOverlay",null,e);return(0,s.jsx)(g.ModalBaseOverlay,{...i().getStyles("overlay",{classNames:t,style:r,styles:o,className:n}),...c})});x.classes=r,x.displayName="@mantine/core/ModalOverlay";var b=e.i(433512),j=e.i(481178),S=e.i(391466),k=e.i(19300),A=e.i(32044);let C={__staticSelector:"Modal",closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:(0,t.getDefaultZIndex)("modal"),transitionProps:{duration:200,transition:"fade-down"},yOffset:"5dvh"},w=(0,j.createVarsResolver)((e,{radius:t,size:a,yOffset:n,xOffset:r})=>({root:{"--modal-radius":void 0===t?void 0:(0,b.getRadius)(t),"--modal-size":(0,b.getSize)(a,"modal-size"),"--modal-y-offset":(0,m.rem)(n),"--modal-x-offset":(0,m.rem)(r)}})),M=(0,n.factory)(e=>{let t=(0,a.useProps)("ModalRoot",C,e),{classNames:n,className:o,style:i,styles:c,unstyled:d,vars:u,yOffset:m,scrollAreaComponent:p,radius:f,fullScreen:h,centered:y,xOffset:v,__staticSelector:g,attributes:x,...b}=t,j=(0,S.useStyles)({name:g,classes:r,props:t,className:o,style:i,classNames:n,styles:c,unstyled:d,attributes:x,vars:u,varsResolver:w});return(0,s.jsx)(l,{value:{yOffset:m,scrollAreaComponent:p,getStyles:j,fullScreen:h},children:(0,s.jsx)(A.ModalBase,{...j("root"),"data-full-screen":h||void 0,"data-centered":y||void 0,"data-offset-scrollbars":p===k.ScrollArea.Autosize||void 0,unstyled:d,...b})})});M.classes=r,M.varsResolver=w,M.displayName="@mantine/core/ModalRoot";var O=e.i(191788);let B=(0,O.createContext)(null);function D({children:e}){let[a,n]=(0,O.useState)([]),[r,o]=(0,O.useState)((0,t.getDefaultZIndex)("modal"));return(0,s.jsx)(B,{value:{stack:a,addModal:(e,t)=>{n(t=>[...new Set([...t,e])]),o(e=>"number"==typeof t&&"number"==typeof e?Math.max(e,t):e)},removeModal:e=>n(t=>t.filter(t=>t!==e)),getZIndex:e=>`calc(${r} + ${a.indexOf(e)} + 1)`,currentId:a[a.length-1],maxZIndex:r},children:e})}D.displayName="@mantine/core/ModalStack";var P=e.i(446817);let T=(0,n.factory)(e=>{let{classNames:t,className:n,style:r,styles:o,vars:l,...c}=(0,a.useProps)("ModalTitle",null,e);return(0,s.jsx)(P.ModalBaseTitle,{...i().getStyles("title",{classNames:t,style:r,styles:o,className:n}),...c})});T.classes=r,T.displayName="@mantine/core/ModalTitle";let E={closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:(0,t.getDefaultZIndex)("modal"),transitionProps:{duration:200,transition:"fade-down"},withOverlay:!0,withCloseButton:!0},I=(0,n.factory)(e=>{let{title:n,withOverlay:r,overlayProps:o,withCloseButton:l,closeButtonProps:i,children:d,radius:m,opened:p,stackId:f,zIndex:y,...g}=(0,a.useProps)("Modal",E,e),b=(0,O.use)(B),j=!!n||l,S=b&&f?{closeOnEscape:b.currentId===f,trapFocus:b.currentId===f,zIndex:b.getZIndex(f)}:{},k=!1!==r&&(f&&b?b.currentId===f:p);return(0,O.useEffect)(()=>{b&&f&&(p?b.addModal(f,y||(0,t.getDefaultZIndex)("modal")):b.removeModal(f))},[p,f,y]),(0,s.jsxs)(M,{radius:m,opened:p,zIndex:b&&f?b.getZIndex(f):y,...g,...S,children:[r&&(0,s.jsx)(x,{visible:k,transitionProps:b&&f?{duration:0}:void 0,...o}),(0,s.jsxs)(h,{radius:m,__hidden:!!b&&!!f&&!!p&&f!==b.currentId,children:[j&&(0,s.jsxs)(v,{children:[n&&(0,s.jsx)(T,{children:n}),l&&(0,s.jsx)(u,{...i})]}),(0,s.jsx)(c,{children:d})]})]})});I.classes=r,I.displayName="@mantine/core/Modal",I.Root=M,I.Overlay=x,I.Content=h,I.Body=c,I.Header=v,I.Title=T,I.CloseButton=u,I.Stack=D,e.s(["Modal",0,I],424302)},692385,e=>{"use strict";var t=e.i(852361),a=e.i(191788);let n={min:-1/0,max:1/0};e.s(["useCounter",0,function(e=0,r){let{min:o,max:l,step:i=1}={...n,...r},s=Math.abs(i),[c,d]=(0,a.useState)((0,t.clamp)(e,o,l));return[c,{increment:(0,a.useCallback)(()=>d(e=>(0,t.clamp)(e+s,o,l)),[o,l,s]),decrement:(0,a.useCallback)(()=>d(e=>(0,t.clamp)(e-s,o,l)),[o,l,s]),set:(0,a.useCallback)(e=>d((0,t.clamp)(e,o,l)),[o,l]),reset:(0,a.useCallback)(()=>d((0,t.clamp)(e,o,l)),[e,o,l])}]}])},76206,e=>{"use strict";var t=e.i(648863),a=e.i(60695),n=e.i(391398);let r={type:"configurator",component:function(e){return(0,n.jsx)(a.Slider,{defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],...e})},code:`
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
`,centered:!0,maxWidth:400,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"__none__"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"showLabelOnHover",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"labelAlwaysOn",type:"boolean",initialValue:!1,libraryValue:!1}]};var o={track:"m_7b015c03",mark:"m_88156515",markLabel:"m_beb40edf",thumb:"m_7afd1c8e"},l=e.i(232471);let i={type:"code",component:function(){return(0,n.jsx)(l.Box,{maw:400,pt:15,pb:20,mx:"auto",children:(0,n.jsx)(a.Slider,{defaultValue:40,size:2,classNames:o,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}]})})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}]},s={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Slider,{defaultValue:40,marks:[{value:10},{value:40},{value:95}],mb:32}),(0,n.jsx)(a.Slider,{mb:32,defaultValue:40,marks:[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}]})]})},code:`
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
`,centered:!0,maxWidth:400};var c=e.i(883364);let d={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.Text,{size:"sm",children:"No label"}),(0,n.jsx)(a.Slider,{defaultValue:40,label:null}),(0,n.jsx)(c.Text,{size:"sm",mt:"xl",children:"Formatted label"}),(0,n.jsx)(a.Slider,{defaultValue:40,label:e=>`${e} \xb0C`}),(0,n.jsx)(c.Text,{size:"sm",mt:"xl",children:"Label always visible"}),(0,n.jsx)(a.Slider,{defaultValue:40,labelAlwaysOn:!0}),(0,n.jsx)(c.Text,{size:"sm",mt:"xl",children:"Custom label transition"}),(0,n.jsx)(a.Slider,{defaultValue:40,labelTransitionProps:{transition:"skew-down",duration:150,timingFunction:"linear"}})]})},code:`
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
`,centered:!0,maxWidth:400},u=[{value:0,label:"xs"},{value:25,label:"sm"},{value:50,label:"md"},{value:75,label:"lg"},{value:100,label:"xl"}],m={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.Text,{children:"Decimal step"}),(0,n.jsx)(a.Slider,{defaultValue:0,min:-10,max:10,label:e=>e.toFixed(1),step:.1,styles:{markLabel:{display:"none"}}}),(0,n.jsx)(c.Text,{mt:"md",children:"Step matched with marks"}),(0,n.jsx)(a.Slider,{defaultValue:50,label:e=>u.find(t=>t.value===e).label,step:25,marks:u,styles:{markLabel:{display:"none"}}})]})},code:`
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
`,centered:!0,maxWidth:400};var p=e.i(191788);let f={type:"code",component:function(){let[e,t]=(0,p.useState)(50),[r,o]=(0,p.useState)(50);return(0,n.jsxs)(l.Box,{maw:400,mx:"auto",children:[(0,n.jsx)(a.Slider,{value:e,onChange:t,onChangeEnd:o}),(0,n.jsxs)(c.Text,{mt:"md",size:"sm",children:["onChange value: ",(0,n.jsx)("b",{children:e})]}),(0,n.jsxs)(c.Text,{mt:5,size:"sm",children:["onChangeEnd value: ",(0,n.jsx)("b",{children:r})]})]})},code:`
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
`},h={type:"code",component:function(){return(0,n.jsx)(a.Slider,{defaultValue:60,disabled:!0})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider defaultValue={60} disabled />;
}
`,centered:!0,maxWidth:340},y={type:"configurator",component:function(e){return(0,n.jsx)(a.Slider,{...e,defaultValue:20})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} defaultValue={20} />;
}
`,maxWidth:400,centered:!0,controls:[{prop:"thumbSize",type:"number",min:16,max:32,initialValue:14,libraryValue:null}]};var v=e.i(171481);let g=new Map([["bold",p.createElement(p.Fragment,null,p.createElement("path",{d:"M178,36a65.6,65.6,0,0,0-46.67,19.33L128,58.66l-3.33-3.33A66,66,0,0,0,12,102c0,72.34,105.81,130.14,110.31,132.57a12,12,0,0,0,11.38,0C138.19,232.14,244,174.34,244,102A66.08,66.08,0,0,0,178,36Zm-5.49,142.36A328.69,328.69,0,0,1,128,210.16a328.69,328.69,0,0,1-44.51-31.8C61.82,159.77,36,131.42,36,102a42,42,0,0,1,71.7-29.7L111,75.63l-7.52,7.52a12,12,0,0,0,0,17l21.7,21.7-13.7,13.69a12,12,0,1,0,17,17l22.18-22.19a12,12,0,0,0,0-17L129,91.63,148.3,72.3A42,42,0,0,1,220,102C220,131.42,194.18,159.77,172.51,178.36Z"}))],["duotone",p.createElement(p.Fragment,null,p.createElement("path",{d:"M232,102c0,66-104,122-104,122S24,168,24,102a54,54,0,0,1,92.18-38.18L128,75.63l11.82-11.81A54,54,0,0,1,232,102Z",opacity:"0.2"}),p.createElement("path",{d:"M178,40a61.6,61.6,0,0,0-43.84,18.16L128,64.32l-6.16-6.16A62,62,0,0,0,16,102c0,70,103.79,126.67,108.21,129a8,8,0,0,0,7.58,0C136.21,228.67,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102a46,46,0,0,1,78.53-32.53l6.16,6.16L106.34,86a8,8,0,0,0,0,11.31l24.53,24.53-16.53,16.52a8,8,0,0,0,11.32,11.32l22.18-22.19a8,8,0,0,0,0-11.31L123.31,91.63l22.16-22.16A46,46,0,0,1,224,102C224,155.61,146.24,204.15,128,214.8Z"}))],["fill",p.createElement(p.Fragment,null,p.createElement("path",{d:"M239.81,107.5c-5.19,67.42-103.7,121.23-108,123.54a8,8,0,0,1-7.58,0C119.8,228.67,16,172,16,102a62,62,0,0,1,96.47-51.55,4,4,0,0,1,.61,6.17L99.72,70a8,8,0,0,0,0,11.31l32.53,32.53L111,135a8,8,0,1,0,11.31,11.31l26.88-26.87a8,8,0,0,0,0-11.31L116.7,75.63l17.47-17.47h0A61.63,61.63,0,0,1,178.41,40C214.73,40.23,242.59,71.29,239.81,107.5Z"}))],["light",p.createElement(p.Fragment,null,p.createElement("path",{d:"M178,42a59.63,59.63,0,0,0-42.43,17.57L128,67.15l-7.57-7.58A60,60,0,0,0,18,102c0,29.2,18.2,59.59,54.1,90.31a334.68,334.68,0,0,0,53.06,37,6,6,0,0,0,5.68,0,334.68,334.68,0,0,0,53.06-37C219.8,161.59,238,131.2,238,102A60.07,60.07,0,0,0,178,42ZM128,217.11C111.59,207.64,30,157.72,30,102a48,48,0,0,1,81.94-33.94l7.57,7.57L107.76,87.39a6,6,0,0,0,0,8.49l25.94,25.94-17.94,17.94a6,6,0,0,0,8.48,8.48l22.19-22.18a6,6,0,0,0,0-8.49L120.49,91.63l23.57-23.57A48,48,0,0,1,226,102C226,157.72,144.41,207.64,128,217.11Z"}))],["regular",p.createElement(p.Fragment,null,p.createElement("path",{d:"M178,40a61.6,61.6,0,0,0-43.84,18.16L128,64.32l-6.16-6.16A62,62,0,0,0,16,102c0,70,103.79,126.67,108.21,129a8,8,0,0,0,7.58,0C136.21,228.67,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102a46,46,0,0,1,78.53-32.53l6.16,6.16L106.34,86a8,8,0,0,0,0,11.31l24.53,24.53-16.53,16.52a8,8,0,0,0,11.32,11.32l22.18-22.19a8,8,0,0,0,0-11.31L123.31,91.63l22.16-22.16A46,46,0,0,1,224,102C224,155.61,146.24,204.15,128,214.8Z"}))],["thin",p.createElement(p.Fragment,null,p.createElement("path",{d:"M178,44a57.59,57.59,0,0,0-41,17l-9,9-9-9a58,58,0,0,0-99,41c0,28.59,18,58.47,53.4,88.79a333.81,333.81,0,0,0,52.7,36.73,4,4,0,0,0,3.8,0,333.81,333.81,0,0,0,52.7-36.73C218,160.47,236,130.59,236,102A58.07,58.07,0,0,0,178,44ZM128,219.42c-14-8-100-59.35-100-117.42a50,50,0,0,1,85.36-35.36l9,9L109.17,88.8a4,4,0,0,0,0,5.66l27.36,27.36-19.36,19.35a4,4,0,0,0,5.66,5.66L145,124.64a4,4,0,0,0,0-5.65L117.66,91.63l13.16-13.16h0l11.8-11.81A50,50,0,0,1,228,102C228,160,142,211.46,128,219.42Z"}))]]),x=p.forwardRef((e,t)=>p.createElement(v.default,{ref:t,...e,weights:g}));x.displayName="HeartBreakIcon";var b=e.i(853907),j=e.i(328940);let S={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Slider,{thumbChildren:(0,n.jsx)(b.HeartIcon,{size:16}),color:"red",label:null,defaultValue:40,thumbSize:26,styles:{thumb:{borderWidth:2,padding:3}}}),(0,n.jsx)(j.RangeSlider,{mt:"xl",styles:{thumb:{borderWidth:2,padding:3}},color:"red",label:null,defaultValue:[20,60],thumbSize:26,thumbChildren:[(0,n.jsx)(b.HeartIcon,{size:16},"1"),(0,n.jsx)(x,{size:16},"2")]})]})},code:`
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
`,maxWidth:400,centered:!0};function k(e){let t=["KB","MB","GB","TB"],a=0,n=e;for(;n>=1024&&a<t.length-1;)a+=1,n/=1024;return`${n} ${t[a]}`}let A=e=>2**e,C={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Slider,{scale:A,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:10,label:k}),(0,n.jsx)(j.RangeSlider,{mt:50,scale:A,step:1,min:2,max:30,labelAlwaysOn:!0,defaultValue:[10,20],label:k})]})},code:`
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
`,centered:!0,maxWidth:400},w={type:"code",component:function(){return(0,n.jsx)(a.Slider,{inverted:!0,defaultValue:80})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider inverted defaultValue={80} />;
}
`,centered:!0,maxWidth:400};var M=e.i(220026);let O=`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider{{props}} marks={[{ value: 20, label: '20%' }, { value: 80, label: '80%' }]} labelAlwaysOn />;
}
`,B={type:"styles-api",data:M.SliderStylesApi,component:function(e){return(0,n.jsx)(a.Slider,{marks:[{value:20,label:"20%"},{value:80,label:"80%"}],defaultValue:40,labelAlwaysOn:!0,mb:40,...e})},code:O,centered:!0,maxWidth:400},D={type:"code",component:function(){return(0,n.jsx)(a.Slider,{min:0,max:1,step:5e-4,defaultValue:.5535})},code:`
import { Slider } from '@mantine/core';

function Demo() {
  return <Slider min={0} max={1} step={0.0005} defaultValue={0.5535} />;
}
`,centered:!0,maxWidth:340};var P="m_b2d44517",T=e.i(414124),E=e.i(852361),I=e.i(502315);let V={type:"code",component:function(){let[e,t]=(0,p.useState)(.3),{ref:a}=(0,I.useMove)(({x:e})=>t((0,E.clamp)(e,.1,.9))),r=e<.2||e>.8;return(0,n.jsx)("div",{className:"m_1e8dea5f",children:(0,n.jsxs)("div",{className:"m_b34cb76e",ref:a,children:[(0,n.jsx)("div",{className:"m_9decab9f",style:{width:`calc(${100*e}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,n.jsx)("span",{className:P,"data-floating":r||void 0,"data-filled":!0,children:(100*e).toFixed(0)})}),(0,n.jsx)("div",{className:"m_b2774b70",style:{width:`calc(${(1-e)*100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,n.jsx)("span",{className:P,"data-floating":r||void 0,children:((1-e)*100).toFixed(0)})}),(0,n.jsx)("div",{className:"m_b34877f9",style:{left:`calc(${100*e}% - var(--thumb-width) / 2)`},children:(0,n.jsx)(T.DotsSixVerticalIcon,{})})]})})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}],maxWidth:500,centered:!0};var N=e.i(671640);let F={type:"code",component:function(){return(0,n.jsxs)(N.Stack,{children:[(0,n.jsx)(a.Slider,{restrictToMarks:!0,defaultValue:25,marks:Array.from({length:5}).map((e,t)=>({value:25*t}))}),(0,n.jsx)(j.RangeSlider,{restrictToMarks:!0,defaultValue:[5,15],marks:[{value:5},{value:15},{value:25},{value:35},{value:70},{value:80},{value:90}]})]})},code:`
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
`,centered:!0,maxWidth:400},L={type:"code",component:function(){return(0,n.jsx)(a.Slider,{domain:[0,100],min:10,max:90,defaultValue:25,mb:40,marks:[{value:10,label:"min"},{value:90,label:"max"}]})},code:`
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
`,maxWidth:400,centered:!0},z=[{value:20,label:"20%"},{value:50,label:"50%"},{value:80,label:"80%"}],R={type:"code",component:function(){return(0,n.jsxs)("div",{style:{display:"flex",gap:40},children:[(0,n.jsx)(a.Slider,{orientation:"vertical",defaultValue:45,marks:z}),(0,n.jsx)(j.RangeSlider,{orientation:"vertical",defaultValue:[25,65],marks:z})]})},code:`
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
`,centered:!0},_={type:"code",component:function(){let[e,t]=(0,p.useState)(50);return(0,n.jsxs)(l.Box,{pb:"md",children:[(0,n.jsxs)(c.Text,{size:"sm",mb:"xs",children:["Hidden marks allow you to snap to specific values without displaying them visually. Current value: ",e]}),(0,n.jsx)(a.Slider,{value:e,onChange:t,min:0,max:100,step:1,restrictToMarks:!0,marks:[{value:0,label:"0%"},{value:25,hidden:!0},{value:50,label:"50%"},{value:75,hidden:!0},{value:100,label:"100%"}]})]})},code:`
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
`},Z={type:"code",component:function(){return(0,n.jsx)(a.Slider,{startPointValue:-50,min:-100,max:100,defaultValue:40,mb:40,marks:[{value:-100,label:"-100"},{value:-50,label:"-50"},{value:0,label:"0"},{value:50,label:"50"},{value:100,label:"100"}]})},code:`
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
`,centered:!0,maxWidth:400};var H=(0,t.__exportAll)({changeEnd:()=>f,configurator:()=>r,customSlider:()=>V,customize:()=>i,decimal:()=>D,disabled:()=>h,domain:()=>L,hiddenMarks:()=>_,inverted:()=>w,label:()=>d,marks:()=>s,restrictToMarks:()=>F,scale:()=>C,startPoint:()=>Z,step:()=>m,stylesApi:()=>B,thumbChildren:()=>S,thumbSize:()=>y,vertical:()=>R});e.s(["SliderDemos",0,H],76206)},505716,e=>{"use strict";var t=e.i(749218),a=e.i(481178),n=e.i(951254),r=e.i(44091),o=e.i(391466),l=e.i(275519),i=e.i(232471),s=e.i(476273),c=e.i(34515),d=e.i(935769),u={root:"m_6e45937b",loader:"m_e8eb006c",overlay:"m_df587f17"},m=e.i(391398);let p={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,t.getDefaultZIndex)("overlay")},f=(0,a.createVarsResolver)((e,{zIndex:t})=>({root:{"--lo-z-index":t?.toString()}})),h=(0,l.factory)(e=>{let t=(0,r.useProps)("LoadingOverlay",p,e),{classNames:a,className:l,style:h,styles:y,unstyled:v,vars:g,transitionProps:x,loaderProps:b,overlayProps:j,visible:S,zIndex:k,attributes:A,onEnter:C,onEntered:w,onExit:M,onExited:O,...B}=t,D=(0,n.useMantineTheme)(),P=(0,o.useStyles)({name:"LoadingOverlay",classes:u,props:t,className:l,style:h,classNames:a,styles:y,unstyled:v,attributes:A,vars:g,varsResolver:f}),T={...p.overlayProps,...j};return(0,m.jsx)(c.Transition,{transition:"fade",...x,mounted:!!S,onEnter:C,onEntered:w,onExit:M,onExited:O,children:e=>(0,m.jsxs)(i.Box,{...P("root",{style:e}),...B,children:[(0,m.jsx)(d.Loader,{unstyled:v,...b,...P("loader",{className:b?.className,style:b?.style})}),(0,m.jsx)(s.Overlay,{...T,...P("overlay",{className:T?.className,style:T?.style}),darkHidden:!0,unstyled:v,color:j?.color||D.white}),(0,m.jsx)(s.Overlay,{...T,...P("overlay",{className:T?.className,style:T?.style}),lightHidden:!0,unstyled:v,color:j?.color||D.colors.dark[5]})]})})});h.classes=u,h.varsResolver=f,h.displayName="@mantine/core/LoadingOverlay",e.s(["LoadingOverlay",0,h],505716)},645640,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM100,56a28,28,0,0,1,56,0V76H100ZM204,204H52V100H204Zm-60-52a16,16,0,1,1-16-16A16,16,0,0,1,144,152Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z",opacity:"0.2"}),t.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm32-84H96V56a32,32,0,0,1,64,0Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,82H174V56a46,46,0,0,0-92,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82ZM94,56a34,34,0,0,1,68,0V82H94ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Zm-72-56a10,10,0,1,1-10-10A10,10,0,0,1,138,152Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,84H172V56a44,44,0,0,0-88,0V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84ZM92,56a36,36,0,0,1,72,0V84H92ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-76-56a8,8,0,1,1-8-8A8,8,0,0,1,136,152Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="LockIcon",e.s(["LockIcon",0,r],645640)},29260,e=>{"use strict";var t=e.i(191788),a=e.i(123895),n=e.i(645640),r=e.i(79897),o=e.i(485108),l=e.i(37541),i=e.i(725695),s=e.i(505716),c=e.i(470743),d=e.i(937389),u=e.i(883364),m=e.i(841209),p=e.i(582498),f=e.i(391398);e.s(["AuthenticationForm",0,function({noShadow:e,noPadding:h,noSubmit:y,style:v}){let[g,x]=(0,t.useState)("register"),[b,j]=(0,t.useState)(!1),[S,k]=(0,t.useState)(null),A=(0,p.useForm)({initialValues:{firstName:"",lastName:"",email:"",password:"",confirmPassword:"",termsOfService:!0}});return(0,f.jsx)(c.Paper,{p:h?0:"lg",shadow:e?"none":"sm",style:{...v,position:"relative",backgroundColor:"var(--mantine-color-body)"},children:(0,f.jsxs)("form",{onSubmit:A.onSubmit(()=>{j(!0),k(null),setTimeout(()=>{j(!1),k("register"===g?"User with this email already exists":"User with this email does not exist")},3e3)}),children:[(0,f.jsx)(s.LoadingOverlay,{visible:b}),"register"===g&&(0,f.jsxs)(i.Group,{grow:!0,children:[(0,f.jsx)(m.TextInput,{"data-autofocus":!0,required:!0,placeholder:"Your first name",label:"First name",...A.getInputProps("firstName")}),(0,f.jsx)(m.TextInput,{required:!0,placeholder:"Your last name",label:"Last name",...A.getInputProps("lastName")})]}),(0,f.jsx)(m.TextInput,{mt:"md",required:!0,placeholder:"Your email",label:"Email",leftSection:(0,f.jsx)(a.AtIcon,{size:16}),...A.getInputProps("email")}),(0,f.jsx)(d.PasswordInput,{mt:"md",required:!0,placeholder:"Password",label:"Password",leftSection:(0,f.jsx)(n.LockIcon,{size:16}),...A.getInputProps("password")}),"register"===g&&(0,f.jsx)(d.PasswordInput,{mt:"md",required:!0,label:"Confirm Password",placeholder:"Confirm password",leftSection:(0,f.jsx)(n.LockIcon,{size:16}),...A.getInputProps("confirmPassword")}),"register"===g&&(0,f.jsx)(l.Checkbox,{mt:"xl",label:"I agree to sell my soul and privacy to this corporation",...A.getInputProps("termsOfService",{type:"checkbox"})}),S&&(0,f.jsx)(u.Text,{c:"red",size:"sm",mt:"sm",children:S}),!y&&(0,f.jsxs)(i.Group,{justify:"space-between",mt:"xl",children:[(0,f.jsx)(r.Anchor,{component:"button",type:"button",c:"dimmed",onClick:()=>{x(e=>"register"===e?"login":"register"),k(null)},size:"sm",children:"register"===g?"Have an account? Login":"Don't have an account? Register"}),(0,f.jsx)(o.Button,{color:"blue",type:"submit",children:"register"===g?"Register":"Login"})]})]})})}])},299593,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M164.24,100.24,136.48,128l27.76,27.76a6,6,0,1,1-8.48,8.48L128,136.48l-27.76,27.76a6,6,0,0,1-8.48-8.48L119.52,128,91.76,100.24a6,6,0,0,1,8.48-8.48L128,119.52l27.76-27.76a6,6,0,0,1,8.48,8.48ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M162.83,98.83,133.66,128l29.17,29.17a4,4,0,0,1-5.66,5.66L128,133.66,98.83,162.83a4,4,0,0,1-5.66-5.66L122.34,128,93.17,98.83a4,4,0,0,1,5.66-5.66L128,122.34l29.17-29.17a4,4,0,1,1,5.66,5.66ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(a.default,{ref:r,...e,weights:n}));r.displayName="XCircleIcon",e.s(["XCircleIcon",0,r],299593)},323121,e=>{"use strict";var t=e.i(191788);function a(e){let a=e.reduce((e,t)=>({...e,[t]:!1}),{}),[n,r]=(0,t.useState)(a),o=(0,t.useCallback)(e=>{r(t=>({...t,[e]:!0}))},[]),l=(0,t.useCallback)(e=>r(t=>({...t,[e]:!1})),[]),i=(0,t.useCallback)(e=>r(t=>({...t,[e]:!t[e]})),[]);return{state:n,open:o,close:l,closeAll:(0,t.useCallback)(()=>r(a),[]),toggle:i,register:(0,t.useCallback)(e=>({opened:n[e],onClose:()=>l(e),stackId:e}),[n])}}e.s(["useDrawersStack",0,a,"useModalsStack",0,a])},14625,e=>{"use strict";var t=e.i(648863),a=e.i(29260),n=e.i(485108),r=e.i(424302),o=e.i(391398),l=e.i(541772);let i={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,l.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Modal,{opened:e,onClose:i,title:"Authentication",children:(0,o.jsx)(a.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,o.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},s={type:"code",code:`
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

`,centered:!0,component:function(){let[e,{open:t,close:a}]=(0,l.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Modal,{opened:e,onClose:a,withCloseButton:!1,children:"Modal without header, press escape or click on overlay to close"}),(0,o.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var c=e.i(191788),d=e.i(725695);let u=["xs","sm","md","lg","xl","55rem","70%","100%"],m={type:"code",component:function(){let[e,t]=(0,c.useState)(!1),[l,i]=(0,c.useState)("md"),s=u.map(e=>(0,o.jsx)(n.Button,{variant:"default",onClick:()=>{i(e),t(!0)},children:e},e));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Modal,{opened:e,onClose:()=>t(!1),title:"Introduce yourself!",size:l,children:(0,o.jsx)(a.AuthenticationForm,{noPadding:!0,noShadow:!0})}),(0,o.jsx)(d.Group,{justify:"center",children:s})]})}},p={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,l.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Modal,{opened:e,onClose:i,title:"Authentication",overlayProps:{backgroundOpacity:.55,blur:3},children:(0,o.jsx)(a.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,o.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},f={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:a}]=(0,l.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Modal,{opened:e,onClose:a,title:"Header is sticky",children:Array(100).fill(0).map((e,t)=>(0,o.jsx)("p",{children:"Modal with scroll"},t))}),(0,o.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},h={type:"code",code:`
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
`,component:function(){let[e,t]=(0,c.useState)(!1),[a,l]=(0,c.useState)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Modal,{opened:a,onClose:()=>l(!1),title:"Please consider this",transitionProps:{transition:"rotate-left"},children:"rotate-left transition"}),(0,o.jsx)(r.Modal,{opened:e,onClose:()=>t(!1),title:"Please consider this",transitionProps:{transition:"fade",duration:600,timingFunction:"linear"},children:"fade transition 600ms linear transition"}),(0,o.jsxs)(d.Group,{justify:"center",children:[(0,o.jsx)(n.Button,{onClick:()=>l(!0),variant:"default",children:"Rotate left transition"}),(0,o.jsx)(n.Button,{onClick:()=>t(!0),variant:"default",children:"Fade transition"})]})]})}},y={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,l.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Modal,{opened:e,onClose:i,title:"Authentication",centered:!0,children:(0,o.jsx)(a.AuthenticationForm,{noPadding:!0,noShadow:!0})}),(0,o.jsx)(n.Button,{variant:"default",onClick:t,children:"Open centered Modal"})]})}};var v=e.i(883364);let g={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,l.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.Modal,{opened:e,onClose:i,title:"This is a fullscreen modal",fullScreen:!0,radius:0,transitionProps:{transition:"fade",duration:200},children:[(0,o.jsx)(v.Text,{mb:"xl",children:"It takes the entire screen and does not have overlay and border-radius, you can use it small screens to save up some space. It also has fade transition by default, but you can change that with transition prop. Now here is an authentication form used in previous examples to see the difference."}),(0,o.jsx)(a.AuthenticationForm,{noPadding:!0,noShadow:!0})]}),(0,o.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var x=e.i(257177),b=e.i(692385);let j={type:"code",component:function(){let[e,{close:t,open:a}]=(0,l.useDisclosure)(!1),[i,{increment:s,decrement:c}]=(0,b.useCounter)(3,{min:0}),u=Array(i).fill(0).map((e,t)=>(0,o.jsxs)(x.Badge,{children:["Badge ",t]},t));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.Modal,{opened:e,onClose:t,size:"auto",title:"Modal size auto",children:[(0,o.jsx)(v.Text,{children:"Modal with size auto will fits its content"}),(0,o.jsx)(d.Group,{wrap:"nowrap",mt:"md",children:u}),(0,o.jsxs)(d.Group,{mt:"xl",children:[(0,o.jsx)(n.Button,{onClick:s,children:"Add badge"}),(0,o.jsx)(n.Button,{onClick:c,children:"Remove badge"})]})]}),(0,o.jsx)(n.Button,{variant:"default",onClick:a,children:"Open modal"})]})},centered:!0,code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:a}]=(0,l.useDisclosure)(!1),i=Array(100).fill(0).map((e,t)=>(0,o.jsx)("p",{children:"Modal with scroll"},t));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Modal,{opened:e,onClose:a,title:"Header is sticky",scrollAreaComponent:S.ScrollArea.Autosize,children:i}),(0,o.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},A={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:a}]=(0,l.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.Modal.Root,{opened:e,onClose:a,children:[(0,o.jsx)(r.Modal.Overlay,{}),(0,o.jsxs)(r.Modal.Content,{children:[(0,o.jsxs)(r.Modal.Header,{children:[(0,o.jsx)(r.Modal.Title,{children:"Modal title"}),(0,o.jsx)(r.Modal.CloseButton,{})]}),(0,o.jsx)(r.Modal.Body,{children:"Modal content"})]})]}),(0,o.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}},C={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,l.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Modal,{opened:e,onClose:i,title:"Authentication",yOffset:"1vh",xOffset:0,children:(0,o.jsx)(a.AuthenticationForm,{noPadding:!0,noShadow:!0})}),(0,o.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var w=e.i(841209);let M={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:a}]=(0,l.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.Modal,{opened:e,onClose:a,title:"Focus demo",children:[(0,o.jsx)(w.TextInput,{label:"First input",placeholder:"First input"}),(0,o.jsx)(w.TextInput,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,o.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var O=e.i(779177),B=e.i(839608);let D={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:a}]=(0,l.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Modal,{opened:e,onClose:a,title:"This is a fullscreen modal",fullScreen:(0,B.useMediaQuery)(`(max-width: ${(0,O.em)(800)})`),transitionProps:{transition:"fade",duration:200},children:"The Modal will be full screen only on mobile"}),(0,o.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var P=e.i(299593);let T={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,l.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Modal,{opened:e,onClose:i,title:"Authentication",closeButtonProps:{icon:(0,o.jsx)(P.XCircleIcon,{size:20})},children:(0,o.jsx)(a.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,o.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var E=e.i(22630);let I={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:a}]=(0,l.useDisclosure)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.Modal,{opened:e,onClose:a,title:"Focus demo",children:[(0,o.jsx)(E.FocusTrap.InitialFocus,{}),(0,o.jsx)(w.TextInput,{label:"First input",placeholder:"First input"}),(0,o.jsx)(w.TextInput,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,o.jsx)(n.Button,{variant:"default",onClick:t,children:"Open modal"})]})}};var V=e.i(323121);let N={type:"code",code:`
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
`,centered:!0,component:function(){let e=(0,V.useModalsStack)(["delete-page","confirm-action","really-confirm-action"]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.Modal.Stack,{children:[(0,o.jsxs)(r.Modal,{...e.register("delete-page"),title:"Delete this page?",children:["Are you sure you want to delete this page? This action cannot be undone.",(0,o.jsxs)(d.Group,{mt:"lg",justify:"flex-end",children:[(0,o.jsx)(n.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,o.jsx)(n.Button,{onClick:()=>e.open("confirm-action"),color:"red",children:"Delete"})]})]}),(0,o.jsxs)(r.Modal,{...e.register("confirm-action"),title:"Confirm action",children:["Are you sure you want to perform this action? This action cannot be undone. If you are sure, press confirm button below.",(0,o.jsxs)(d.Group,{mt:"lg",justify:"flex-end",children:[(0,o.jsx)(n.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,o.jsx)(n.Button,{onClick:()=>e.open("really-confirm-action"),color:"red",children:"Confirm"})]})]}),(0,o.jsxs)(r.Modal,{...e.register("really-confirm-action"),title:"Really confirm action",children:["Jokes aside. You have confirmed this action. This is your last chance to cancel it. After you press confirm button below, action will be performed and cannot be undone. For real this time. Are you sure you want to proceed?",(0,o.jsxs)(d.Group,{mt:"lg",justify:"flex-end",children:[(0,o.jsx)(n.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,o.jsx)(n.Button,{onClick:e.closeAll,color:"red",children:"Confirm"})]})]})]}),(0,o.jsx)(n.Button,{variant:"default",onClick:()=>e.open("delete-page"),children:"Open modal"})]})}},F={type:"code",code:`
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
`,centered:!0,component:function(){let[e,t]=(0,l.useDisclosure)(!1),[a,i]=(0,l.useDisclosure)(!1),[s,u]=(0,c.useState)({title:"",message:""});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.Modal,{opened:e,onClose:()=>{t.close(),u({title:"",message:""})},transitionProps:{duration:300,exitDuration:1e3,transition:"fade-down"},title:s.title,children:s.message}),(0,o.jsx)(r.Modal,{opened:a,onClose:i.close,transitionProps:{duration:300,exitDuration:1e3,transition:"fade-down"},onExitTransitionEnd:()=>u({title:"",message:""}),title:s.title,children:s.message}),(0,o.jsxs)(d.Group,{children:[(0,o.jsx)(n.Button,{onClick:()=>{t.open(),u({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onClose"}),(0,o.jsx)(n.Button,{onClick:()=>{i.open(),u({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onExitTransitionEnd"})]})]})},defaultExpanded:!1};var L=(0,t.__exportAll)({centered:()=>y,closeIcon:()=>T,composition:()=>A,fullScreen:()=>g,fullScreenMobile:()=>D,header:()=>s,initialFocus:()=>M,initialFocusTrap:()=>I,offset:()=>C,overflow:()=>f,overlay:()=>p,scrollarea:()=>k,sizeAuto:()=>j,sizes:()=>m,stack:()=>N,transitionEnd:()=>F,transitions:()=>h,usage:()=>i});e.s(["ModalDemos",0,L],14625)},299887,985743,e=>{"use strict";var t=e.i(314169),a=e.i(399479),n=e.i(83727),r=e.i(901841),o=e.i(516257),l=e.i(708248),i=e.i(349229),s=e.i(755335),c=e.i(128991),d=e=>e.graphicalItems.polarItems,u=(0,t.createSelector)([l.pickAxisType,i.pickAxisId],n.itemAxisPredicate),m=(0,t.createSelector)([d,n.selectBaseAxis,u],n.combineGraphicalItemsSettings),p=(0,t.createSelector)([m],n.combineGraphicalItemsData),f=(0,t.createSelector)([p,a.selectChartDataAndAlwaysIgnoreIndexes],n.combineDisplayedData),h=(0,t.createSelector)([f,n.selectBaseAxis,m],n.combineAppliedValues);(0,t.createSelector)([f,n.selectBaseAxis,m],(e,t,a)=>a.length>0?e.flatMap(e=>a.flatMap(a=>{var n;return{value:(0,o.getValueByDataKey)(e,null!=(n=t.dataKey)?n:a.dataKey),errorDomain:[]}})).filter(Boolean):(null==t?void 0:t.dataKey)!=null?e.map(e=>({value:(0,o.getValueByDataKey)(e,t.dataKey),errorDomain:[]})):e.map(e=>({value:e,errorDomain:[]})));var y=()=>void 0,v=(0,t.createSelector)([f,n.selectBaseAxis,m,n.selectAllErrorBarSettings,l.pickAxisType,a.selectChartDataSliceIgnoringIndexes],n.combineDomainOfAllAppliedNumericalValuesIncludingErrorValues),g=(0,t.createSelector)([n.selectBaseAxis,n.selectDomainDefinition,n.selectDomainFromUserPreference,y,v,y,r.selectChartLayout,l.pickAxisType],n.combineNumericalDomain),x=(0,t.createSelector)([n.selectBaseAxis,r.selectChartLayout,f,h,s.selectStackOffsetType,l.pickAxisType,g],n.combineAxisDomain),b=(0,t.createSelector)([x,n.selectRenderableAxisSettings,n.selectRealScaleType],n.combineNiceTicks),j=(0,t.createSelector)([n.selectBaseAxis,x,b,l.pickAxisType],n.combineAxisDomainWithNiceTicks),S=(0,t.createSelector)([n.selectRealScaleType,j],c.combineCheckedDomain);e.s(["selectPolarAppliedValues",0,h,"selectPolarAxisCheckedDomain",0,S,"selectPolarItemsSettings",0,m,"selectPolarNiceTicks",0,b,"selectUnfilteredPolarItems",0,d],299887);var k=e.i(191788),A=e.i(546189),C=e.i(888494),w=e.i(688532),M=e.i(998227),O=e.i(451494),B=e.i(543372),D=e.i(863751);function P(e){var t=(0,B.useAppDispatch)();return(0,k.useEffect)(()=>{t((0,D.updatePolarOptions)(e))},[t,e]),null}var T=e.i(390241),E=e.i(297974),I=e.i(560894),V=["layout"];function N(){return(N=Object.assign.bind()).apply(null,arguments)}function F(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}var L=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?F(Object(a),!0).forEach(function(t){var n,r,o;n=e,r=t,o=a[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):F(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({accessibilityLayer:!0,stackOffset:"none",barCategoryGap:"10%",barGap:4,margin:{top:5,right:5,bottom:5,left:5},reverseStackOrder:!1,syncMethod:"index",layout:"radial",responsive:!1,cx:"50%",cy:"50%",innerRadius:0,outerRadius:"80%"},I.initialEventSettingsState),z=(0,k.forwardRef)(function(e,t){var a,n=(0,E.resolveDefaultProps)(e.categoricalChartProps,L),r=n.layout,o=function(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;a[n]=e[n]}return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}(n,V),l=e.chartName,i=e.defaultTooltipEventType,s=e.validateTooltipEventTypes,c=e.tooltipPayloadSearcher;return k.createElement(A.RechartsStoreProvider,{preloadedState:{options:{chartName:l,defaultTooltipEventType:i,validateTooltipEventTypes:s,tooltipPayloadSearcher:c,eventEmitter:void 0}},reduxStoreName:null!=(a=n.id)?a:l},k.createElement(C.ChartDataContextProvider,{chartData:n.data}),k.createElement(w.ReportMainChartProps,{layout:r,margin:n.margin}),k.createElement(O.ReportEventSettings,{throttleDelay:n.throttleDelay,throttledEvents:n.throttledEvents}),k.createElement(M.ReportChartProps,{baseValue:void 0,accessibilityLayer:n.accessibilityLayer,barCategoryGap:n.barCategoryGap,maxBarSize:n.maxBarSize,stackOffset:n.stackOffset,barGap:n.barGap,barSize:n.barSize,syncId:n.syncId,syncMethod:n.syncMethod,className:n.className,reverseStackOrder:n.reverseStackOrder}),k.createElement(P,{cx:n.cx,cy:n.cy,startAngle:n.startAngle,endAngle:n.endAngle,innerRadius:n.innerRadius,outerRadius:n.outerRadius}),k.createElement(T.CategoricalChart,N({},o,{ref:t})))});e.s(["PolarChart",0,z,"defaultPolarChartProps",0,L],985743)},42201,e=>{"use strict";var t=e.i(314169),a=e.i(83727),n=e.i(586489),r=e.i(901841),o=e.i(299887),l=e.i(708248),i=e.i(163337),s=e.i(952317),c=(e,t,a)=>{switch(t){case"angleAxis":return(0,n.selectAngleAxis)(e,a);case"radiusAxis":return(0,n.selectRadiusAxis)(e,a);default:throw Error("Unexpected axis type: ".concat(t))}},d=(e,t,a)=>{switch(t){case"angleAxis":return(0,n.selectAngleAxisRangeWithReversed)(e,a);case"radiusAxis":return(0,n.selectRadiusAxisRangeWithReversed)(e,a);default:throw Error("Unexpected axis type: ".concat(t))}},u=(0,t.createSelector)([c,a.selectRealScaleType,o.selectPolarAxisCheckedDomain,d],s.combineConfiguredScale),m=(0,t.createSelector)([u],i.rechartsScaleFactory),p=(0,t.createSelector)([r.selectChartLayout,o.selectPolarAppliedValues,a.selectRenderableAxisSettings,l.pickAxisType],a.combineCategoricalDomain),f=(0,t.createSelector)([r.selectChartLayout,c,a.selectRealScaleType,m,o.selectPolarNiceTicks,d,a.selectDuplicateDomain,p,l.pickAxisType],a.combineAxisTicks),h=(0,t.createSelector)([f],e=>{if(e){var t=new Map;return e.forEach(e=>{var a=(e.coordinate+360)%360;t.has(a)||t.set(a,e)}),Array.from(t.values())}}),y=(0,t.createSelector)([r.selectChartLayout,c,m,d,a.selectDuplicateDomain,p,l.pickAxisType],a.combineGraphicalItemTicks);e.s(["selectPolarAngleAxisTicks",0,h,"selectPolarAxisScale",0,m,"selectPolarAxisTicks",0,f,"selectPolarGraphicalItemAxisTicks",0,y])},857006,(e,t,a)=>{"use strict";var n=e.i(221168);Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),a.isBuffer=function(e){return void 0!==n.Buffer&&n.Buffer.isBuffer(e)}},857811,(e,t,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),a.isPrototype=function(e){let t=e?.constructor;return e===("function"==typeof t?t.prototype:Object.prototype)}},72852,(e,t,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});let n=e.r(181825);a.isTypedArray=function(e){return n.isTypedArray(e)}},690071,(e,t,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});let n=e.r(877115);a.toInteger=function(e){let t=n.toFinite(e),a=t%1;return a?t-a:t}},252532,(e,t,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});let n=e.r(690071);a.times=function(e,t){if((e=n.toInteger(e))<1||!Number.isSafeInteger(e))return[];let a=Array(e);for(let n=0;n<e;n++)a[n]="function"==typeof t?t(n):n;return a}},254663,(e,t,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});let n=e.r(857006),r=e.r(857811),o=e.r(232040),l=e.r(72852),i=e.r(252532);function s(e){let t=[];for(let a in e)t.push(a);return t}a.keysIn=function(e){if(null==e)return[];switch(typeof e){case"object":case"function":if(o.isArrayLike(e)){var t;let a,r;return t=e,r=new Set(a=i.times(t.length,e=>`${e}`)),n.isBuffer(t)&&(r.add("offset"),r.add("parent")),l.isTypedArray(t)&&(r.add("buffer"),r.add("byteLength"),r.add("byteOffset")),[...a,...s(t).filter(e=>!r.has(e))]}if(r.isPrototype(e))return s(e).filter(e=>"constructor"!==e);return s(e);default:return s(Object(e))}}},339978,(e,t,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});let n=e.r(461119),r=e.r(568716),o=e.r(819206),l=e.r(810613),i=e.r(323247);function s(e,t){let a=1===t.length?e:n.get(e,t.slice(0,-1)),o=t[t.length-1];if(a?.[o]===void 0)return!0;if(r.isUnsafeProperty(o))return!1;try{return delete a[o],!0}catch{return!1}}a.unset=function(e,t){if(null==e)return!0;switch(typeof t){case"symbol":case"number":case"object":if(Array.isArray(t))return s(e,t);if("number"==typeof t?t=l.toKey(t):"object"==typeof t&&(t=Object.is(t?.valueOf(),-0)?"-0":String(t)),r.isUnsafeProperty(t))return!1;if(e?.[t]===void 0)return!0;try{return delete e[t],!0}catch{return!1}case"string":if(e?.[t]===void 0&&o.isDeepKey(t))return s(e,i.toPath(t));if(r.isUnsafeProperty(t))return!1;try{return delete e[t],!0}catch{return!1}}}},159629,(e,t,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});let n=e.r(467341);a.getSymbolsIn=function(e){let t=[];for(;e;)t.push(...n.getSymbols(e)),e=Object.getPrototypeOf(e);return t}},29300,(e,t,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});let n=e.r(232040);a.flatten=function(e,t=1){let a=[],r=Math.floor(t);if(!n.isArrayLike(e))return a;let o=(e,t)=>{for(let n=0;n<e.length;n++){let l=e[n];t<r&&(Array.isArray(l)||l?.[Symbol.isConcatSpreadable]||null!==l&&"object"==typeof l&&"[object Arguments]"===Object.prototype.toString.call(l))?Array.isArray(l)?o(l,t+1):o(Array.from(l),t+1):a.push(l)}};return o(Array.from(e),0),a}},824188,(e,t,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),a.isPlainObject=function(e){if("object"!=typeof e||null==e)return!1;if(null===Object.getPrototypeOf(e))return!0;if("[object Object]"!==Object.prototype.toString.call(e)){let t=e[Symbol.toStringTag];return null!=t&&!!Object.getOwnPropertyDescriptor(e,Symbol.toStringTag)?.writable&&e.toString()===`[object ${t}]`}let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}},71917,(e,t,a)=>{"use strict";Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});let n=e.r(828021),r=e.r(254663),o=e.r(339978),l=e.r(159629),i=e.r(819206),s=e.r(29300),c=e.r(824188);a.omit=function(e,...t){var a;if(null==e)return{};let d=(a=e,(t=s.flatten(t)).some(e=>Array.isArray(e)||i.isDeepKey(e))?function(e){let t={},a=[...r.keysIn(e),...l.getSymbolsIn(e)];for(let r=0;r<a.length;r++){let o=a[r];t[o]=n.cloneDeepWith(e[o],e=>{if(!c.isPlainObject(e))return e})}return t}(a):function(e){let t={},a=[...r.keysIn(e),...l.getSymbolsIn(e)];for(let n=0;n<a.length;n++){let r=a[n];t[r]=e[r]}return t}(a));for(let e=0;e<t.length;e++){let a=t[e];switch(typeof a){case"object":Array.isArray(a)||(a=Array.from(a));for(let e=0;e<a.length;e++){let t=a[e];o.unset(d,t)}break;case"string":case"symbol":case"number":o.unset(d,a)}}return d}},337174,(e,t,a)=>{t.exports=e.r(71917).omit},453869,e=>{"use strict";var t=e.i(648863),a=e.i(946288),n=e.i(391398);let r={type:"configurator",component:function(e){return(0,n.jsx)(a.AngleSlider,{"aria-label":"Angle slider",...e})},code:`
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider"{{props}} />;
}
`,centered:!0,controls:[{type:"number",prop:"size",initialValue:60,libraryValue:"__",min:50,max:200},{type:"number",prop:"thumbSize",initialValue:8,libraryValue:"__",min:1,max:100},{type:"boolean",prop:"withLabel",initialValue:!0,libraryValue:!0}]};var o=e.i(725695);let l={type:"code",component:function(){return(0,n.jsxs)(o.Group,{p:"lg",gap:50,children:[(0,n.jsx)(a.AngleSlider,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,restrictToMarks:!0,marks:[{value:0},{value:45},{value:90},{value:135},{value:180},{value:225},{value:270},{value:315}]}),(0,n.jsx)(a.AngleSlider,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`,size:100,marks:[{value:0,label:"0°"},{value:45,label:"45°"},{value:90,label:"90°"},{value:135,label:"135°"},{value:180,label:"180°"},{value:225,label:"225°"},{value:270,label:"270°"},{value:315,label:"315°"}]})]})},code:`
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
`,centered:!0},i={type:"code",component:function(){return(0,n.jsx)(a.AngleSlider,{"aria-label":"Angle slider",formatLabel:e=>`${e}\xb0`})},code:`
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider" formatLabel={(value) => \`\${value}\xb0\`} />;
}
`,centered:!0};var s=e.i(191788),c=e.i(883364);let d={type:"code",component:function(){let[e,t]=(0,s.useState)(0),[r,o]=(0,s.useState)(0);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.AngleSlider,{value:e,onChange:t,onChangeEnd:o}),(0,n.jsxs)(c.Text,{mt:"md",children:["Current value: ",e]}),(0,n.jsxs)(c.Text,{children:["End value: ",r]})]})},code:`
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
`,centered:!0,maxWidth:200},u={type:"code",component:function(){return(0,n.jsx)(a.AngleSlider,{"aria-label":"Angle slider",disabled:!0})},code:`
import { AngleSlider } from '@mantine/core';

function Demo() {
  return <AngleSlider aria-label="Angle slider" disabled />;
}
`,centered:!0};var m=(0,t.__exportAll)({disabled:()=>u,formatLabel:()=>i,marks:()=>l,onChangeEnd:()=>d,usage:()=>r});e.s(["AngleSliderDemos",0,m],453869)},370267,e=>{"use strict";var t=e.i(648863);let a=[{name:"18-24",value:31.47,color:"blue.7"},{name:"25-29",value:26.69,color:"orange.6"},{name:"30-34",value:15.69,color:"yellow.7"},{name:"35-39",value:8.22,color:"cyan.6"},{name:"40-49",value:8.63,color:"green"},{name:"50+",value:2.63,color:"pink"},{name:"unknown",value:6.67,color:"gray"}],n=`
export const data = [
  { name: '18-24', value: 31.47, color: 'blue.7' },
  { name: '25-29', value: 26.69, color: 'orange.6' },
  { name: '30-34', value: 15.69, color: 'yellow.7' },
  { name: '35-39', value: 8.22, color: 'cyan.6' },
  { name: '40-49', value: 8.63, color: 'green' },
  { name: '50+', value: 2.63, color: 'pink' },
  { name: 'unknown', value: 6.67, color: 'gray' },
];
`;var r=e.i(391398),o=e.i(577596),l={root:"m_cd2bd9e5",tooltip:"m_6bcc3420"},i=e.i(232471),s=e.i(771820),c=e.i(725695),d=e.i(470743),u=e.i(481178),m=e.i(275519),p=e.i(317477),f=e.i(951254),h=e.i(44091),y=e.i(62904),v=e.i(391466),g=e.i(881264),x=e.i(191788),b=e.i(56206),j=e.i(896915),S=e.i(134959),k=["option"],A=j.Sector;function C(e){return"string"==typeof e?parseInt(e,10):e}function w(e){var t=e.option,a=function(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;a[n]=e[n]}return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}(e,k);return x.createElement(S.Shape,{option:t,DefaultShape:A,shapeProps:a})}var M=e.i(815954),O=e.i(106043),B=e.i(301426),D=e.i(300244),P=e.i(270627),T=e.i(516257),E=e.i(778979),I=e.i(616468),V=e.i(128002),N=e.i(314169),F=e.i(399479),L=e.i(42201),z=e.i(83727),R=e.i(586489),_=e.i(901841),Z=e.i(755335),H=e.i(299887),K=e.i(620930),W=e.i(63713),G=e.i(467765),$=e.i(333710),U=e.i(808550),q=e.i(343311);function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Y(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(Object(a),!0).forEach(function(t){var n,r,o;n=e,r=t,o=a[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var J=(0,N.createSelector)([(e,t)=>(0,R.selectRadiusAxis)(e,t),(e,t)=>(0,L.selectPolarAxisScale)(e,"radiusAxis",t)],(e,t)=>{if(null!=e&&null!=t)return Y(Y({},e),{},{scale:t})}),Q=(e,t)=>(0,L.selectPolarGraphicalItemAxisTicks)(e,"radiusAxis",t,!1),ee=(0,N.createSelector)([(e,t,a)=>(0,R.selectAngleAxis)(e,a),(e,t,a)=>(0,L.selectPolarAxisScale)(e,"angleAxis",a)],(e,t)=>{if(null!=e&&null!=t)return Y(Y({},e),{},{scale:t})}),et=(e,t,a)=>(0,L.selectPolarAxisTicks)(e,"angleAxis",a,!1),ea=(0,N.createSelector)([H.selectUnfilteredPolarItems,(e,t,a,n)=>n],(e,t)=>{if(e.some(e=>"radialBar"===e.type&&t.dataKey===e.dataKey&&t.stackId===e.stackId))return t}),en=(0,N.createSelector)([_.selectChartLayout,J,Q,ee,et],(e,t,a,n,r)=>(0,T.isCategoricalAxis)(e,"radiusAxis")?(0,T.getBandSizeOfAxis)(t,a,!1):(0,T.getBandSizeOfAxis)(n,r,!1)),er=(0,N.createSelector)([ee,J,_.selectChartLayout],(e,t,a)=>{var n="radial"===a?e:t;if(null!=n&&null!=n.scale)return(0,T.getBaseValueOfBar)({numericAxis:n})}),eo=(e,t,a,n,r)=>n.maxBarSize,el=e=>"radialBar"===e.type,ei=(0,N.createSelector)([_.selectChartLayout,H.selectUnfilteredPolarItems,(e,t,a,n,r)=>a,(e,t,a,n,r)=>t],(e,t,a,n)=>t.filter(t=>"centric"===e?t.angleAxisId===a:t.radiusAxisId===n).filter(e=>!1===e.hide).filter(el)),es=(0,N.createSelector)([ei,Z.selectRootBarSize,()=>void 0],G.combineBarSizeList),ec=(0,N.createSelector)([_.selectChartLayout,Z.selectRootMaxBarSize,ee,et,J,Q,eo],(e,t,a,n,r,o,l)=>{var i,s,c,d,u=(0,P.isNullish)(l)?t:l;return"centric"===e?null!=(c=null!=(d=(0,T.getBandSizeOfAxis)(a,n,!0))?d:u)?c:0:null!=(i=null!=(s=(0,T.getBandSizeOfAxis)(r,o,!0))?s:u)?i:0}),ed=(0,N.createSelector)([es,Z.selectRootMaxBarSize,Z.selectBarGap,Z.selectBarCategoryGap,ec,en,eo],$.combineAllBarPositions),eu=(0,N.createSelector)([ed,ea],q.combineBarPosition),em=(0,N.createSelector)([H.selectPolarItemsSettings],e=>e.filter(el).filter(W.isStacked)),ep=(0,N.createSelector)([em,F.selectChartDataAndAlwaysIgnoreIndexes,z.selectTooltipAxis],K.combineDisplayedStackedData),ef=(0,N.createSelector)([ep,em,Z.selectStackOffsetType,Z.selectReverseStackOrder],z.combineStackGroups),eh=(0,N.createSelector)([(e,t,a)=>"centric"===(0,_.selectChartLayout)(e)?ef(e,"radiusAxis",t):ef(e,"angleAxis",a),ea],U.combineStackedData),ey=(0,N.createSelector)([ee,et,J,Q,F.selectChartDataWithIndexes,ea,en,_.selectChartLayout,er,R.selectPolarViewBox,(e,t,a,n,r)=>r,eu,eh],(e,t,a,n,r,o,l,i,s,c,d,u,m)=>{var p,f,h,y,v,g,x,b,j,S,k,A,C,w,M,O,B,D,E,I,V=r.chartData,N=r.dataStartIndex,F=r.dataEndIndex;if(null==o||null==a||null==e||null==V||null==l||null==u||"centric"!==i&&"radial"!==i||null==n||null==c)return[];var L=o.dataKey,z=o.minPointSize,R=c.cx,_=c.cy,Z=c.startAngle,H=c.endAngle,K=V.slice(N,F+1),W="centric"===i?a:e,G=m?W.scale.domain():null;return f=(p={angleAxis:e,angleAxisTicks:t,bandSize:l,baseValue:s,cells:d,cx:R,cy:_,dataKey:L,dataStartIndex:N,displayedData:K,endAngle:H,layout:i,minPointSize:z,pos:u,radiusAxis:a,radiusAxisTicks:n,stackedData:m,stackedDomain:G,startAngle:Z}).displayedData,h=p.stackedData,y=p.dataStartIndex,v=p.stackedDomain,g=p.dataKey,x=p.baseValue,b=p.layout,j=p.radiusAxis,S=p.radiusAxisTicks,k=p.bandSize,A=p.pos,C=p.angleAxis,w=p.minPointSize,M=p.cx,O=p.cy,B=p.angleAxisTicks,D=p.cells,E=p.startAngle,I=p.endAngle,null==B||null==S?eF:(null!=f?f:[]).map((e,t)=>{if(h?a=(0,T.truncateByDomain)(h[y+t],v):Array.isArray(a=(0,T.getValueByDataKey)(e,g))||(a=[x,a]),"radial"===b){if(r=null!=(i=C.scale.map(a[0]))?i:E,o=null!=(s=C.scale.map(a[1]))?s:I,null!=(n=(0,T.getCateCoordinateOfBar)({axis:j,ticks:S,bandSize:k,offset:A.offset,entry:e,index:t}))&&null!=o&&null!=r){var a,n,r,o,l,i,s,c=n+A.size,d=o-r;Math.abs(w)>0&&Math.abs(d)<Math.abs(w)&&(o+=(0,P.mathSign)(d||w)*(Math.abs(w)-Math.abs(d))),l={background:{cx:M,cy:O,innerRadius:n,outerRadius:c,startAngle:E,endAngle:I}}}}else if(n=j.scale.map(a[0]),c=j.scale.map(a[1]),r=(0,T.getCateCoordinateOfBar)({axis:C,ticks:B,bandSize:k,offset:A.offset,entry:e,index:t}),null!=n&&null!=c&&null!=r){o=r+A.size;var u=c-n;Math.abs(w)>0&&Math.abs(u)<Math.abs(w)&&(c+=(0,P.mathSign)(u||w)*(Math.abs(w)-Math.abs(u)))}return eV(eV(eV({},e),l),{},{payload:e,value:h?a:a[1],cx:M,cy:O,innerRadius:n,outerRadius:c,startAngle:r,endAngle:o},D&&D[t]&&D[t].props)})}),ev=(0,N.createSelector)([F.selectChartDataAndAlwaysIgnoreIndexes,(e,t)=>t],(e,t)=>{var a=e.chartData,n=e.dataStartIndex,r=e.dataEndIndex;if(null==a)return[];var o=a.slice(n,r+1);return 0===o.length?[]:o.map(e=>({type:t,value:e.name,color:e.fill,payload:e}))}),eg=e.i(543372),ex=e.i(281695),eb=e.i(836094),ej=e.i(945031),eS=e.i(634200),ek=e.i(768069),eA=e.i(436323),eC=e.i(883388),ew=e.i(297974),eM=e.i(561622),eO=e.i(446354),eB=e.i(384464),eD=["shape","activeShape","cornerRadius","id"],eP=["onMouseEnter","onClick","onMouseLeave"],eT=["value","background"];function eE(){return(eE=Object.assign.bind()).apply(null,arguments)}function eI(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function eV(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?eI(Object(a),!0).forEach(function(t){var n,r,o;n=e,r=t,o=a[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):eI(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function eN(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;a[n]=e[n]}return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var eF=[];function eL(e){var t=e.showLabels,a=e.sectors,n=e.children,r=a.map(e=>({value:e.value,payload:e.payload,parentViewBox:void 0,clockWise:!1,viewBox:{cx:e.cx,cy:e.cy,innerRadius:e.innerRadius,outerRadius:e.outerRadius,startAngle:e.startAngle,endAngle:e.endAngle,clockWise:!1},fill:e.fill}));return x.createElement(B.PolarLabelListContextProvider,{value:t?r:void 0},n)}function ez(e){var t=e.sectors,a=e.allOtherRadialBarProps,n=e.showLabels,r=e.animationElapsedTime,o=e.isAnimating,l=e.isEntrance,i=a.shape,s=a.activeShape,c=a.cornerRadius,d=a.id,u=eN(a,eD),m=(0,eC.svgPropertiesNoEvents)(u),p=(0,eg.useAppSelector)(ex.selectActiveTooltipIndex),f=a.onMouseEnter,h=a.onClick,y=a.onMouseLeave,v=eN(a,eP),g=(0,I.useMouseEnterItemDispatch)(f,a.dataKey,d),b=(0,I.useMouseLeaveItemDispatch)(y),j=(0,I.useMouseClickItemDispatch)(h,a.dataKey,d);return null==t?null:x.createElement(eL,{showLabels:n,sectors:t},t.map((e,t)=>{var a=!!(s&&p===String(t)),n=g(e,t),d=b(e,t),f=j(e,t),h=eV(eV(eV(eV({},m),{},{cornerRadius:C(c)},e),(0,E.adaptEventsOfChild)(v,e,t)),{},{onMouseEnter:n,onMouseLeave:d,onClick:f,className:"recharts-radial-bar-sector ".concat(e.className),forceCornerRadius:u.forceCornerRadius,cornerIsExternal:u.cornerIsExternal,animationElapsedTime:r,isAnimating:o,isEntrance:l,isActive:a,option:a&&null!=s?s:i,index:t});return a?x.createElement(eM.ZIndexLayer,{zIndex:eO.DefaultZIndexes.activeBar,key:"sector-".concat(e.cx,"-").concat(e.cy,"-").concat(e.innerRadius,"-").concat(e.outerRadius,"-").concat(e.startAngle,"-").concat(e.endAngle,"-").concat(t)},x.createElement(w,h)):x.createElement(w,eE({key:"sector-".concat(e.cx,"-").concat(e.cy,"-").concat(e.innerRadius,"-").concat(e.outerRadius,"-").concat(e.startAngle,"-").concat(e.endAngle,"-").concat(t)},h))}),x.createElement(B.LabelListFromLabelProp,{label:a.label}),a.children)}function eR(e){var t=e.props,a=e.previousSectorsRef,n=t.sectors,r=t.isAnimationActive,o=t.animationBegin,l=t.animationDuration,i=t.animationEasing,s=t.onAnimationStart,c=t.onAnimationEnd,d=(0,ej.useAnimationCallbacks)(s,c),u=d.isAnimating,m=d.handleAnimationStart,p=d.handleAnimationEnd,f=(0,_.usePolarChartLayout)();return null==f?null:x.createElement(ej.AnimatedItems,{animationInput:t,animationIdPrefix:"recharts-radialbar-",items:n,previousItemsRef:a,isAnimationActive:r,animationBegin:o,animationDuration:l,animationEasing:i,onAnimationStart:m,onAnimationEnd:p,animationInterpolateFn:t.animationInterpolateFn,animationMatchBy:t.animationMatchBy,layout:f},(e,a,n)=>x.createElement(ez,{sectors:e,allOtherRadialBarProps:t,showLabels:!u,animationElapsedTime:a,isAnimating:u||a<1,isEntrance:n}))}function e_(e){var t=(0,x.useRef)(null);return x.createElement(eR,{props:e,previousSectorsRef:t})}function eZ(e){var t=(0,eg.useAppSelector)(t=>ev(t,e.legendType));return x.createElement(eb.SetPolarLegendPayload,{legendPayload:null!=t?t:[]})}var eH=x.memo(e=>{var t=e.dataKey,a=e.sectors,n=e.stroke,r=e.strokeWidth,o=e.name,l=e.hide,i=e.fill,s=e.tooltipType,c=e.formatter,d=e.id,u={dataDefinedOnItem:a,getPosition:P.noop,settings:{graphicalItemId:d,stroke:n,strokeWidth:r,fill:i,nameKey:void 0,dataKey:t,name:(0,T.getTooltipNameProp)(o,t),hide:l,type:s,color:i,unit:"",formatter:c}};return x.createElement(V.SetTooltipEntrySettings,{tooltipEntrySettings:u})});class eK extends x.PureComponent{renderBackground(e){if(null==e)return null;var t=this.props.cornerRadius,a=(0,eC.svgPropertiesNoEventsFromUnknown)(this.props.background);return x.createElement(eM.ZIndexLayer,{zIndex:(0,eB.getZIndexFromUnknown)(this.props.background,eO.DefaultZIndexes.barBackground)},e.map((e,n)=>{e.value;var r=e.background,o=eN(e,eT);if(!r)return null;var l=eV(eV(eV(eV(eV({cornerRadius:C(t)},o),{},{fill:"#eee"},r),a),(0,E.adaptEventsOfChild)(this.props,e,n)),{},{index:n,className:(0,b.clsx)("recharts-radial-bar-background-sector",String(null==a?void 0:a.className)),option:r,isActive:!1});return x.createElement(w,eE({key:"background-".concat(o.cx,"-").concat(o.cy,"-").concat(o.innerRadius,"-").concat(o.outerRadius,"-").concat(o.startAngle,"-").concat(o.endAngle,"-").concat(n)},l))}))}render(){var e=this.props,t=e.hide,a=e.sectors,n=e.className,r=e.background;if(t)return null;var o=(0,b.clsx)("recharts-area",n);return x.createElement(eM.ZIndexLayer,{zIndex:this.props.zIndex},x.createElement(M.Layer,{className:o},r&&x.createElement(M.Layer,{className:"recharts-radial-bar-background"},this.renderBackground(a)),x.createElement(M.Layer,{className:"recharts-radial-bar-sectors"},x.createElement(e_,this.props))))}}function eW(e){var t,a=x.useMemo(()=>(0,O.findAllByType)(e.children,D.Cell),[e.children]),n=x.useMemo(()=>({data:void 0,hide:!1,id:e.id,dataKey:e.dataKey,minPointSize:e.minPointSize,stackId:(0,T.getNormalizedStackId)(e.stackId),maxBarSize:e.maxBarSize,barSize:e.barSize,type:"radialBar",angleAxisId:e.angleAxisId,radiusAxisId:e.radiusAxisId}),[e.id,e.dataKey,e.minPointSize,e.stackId,e.maxBarSize,e.barSize,e.angleAxisId,e.radiusAxisId]),r=null!=(t=(0,eg.useAppSelector)(t=>ey(t,e.radiusAxisId,e.angleAxisId,n,a)))?t:eF;return x.createElement(x.Fragment,null,x.createElement(eH,{dataKey:e.dataKey,sectors:r,stroke:e.stroke,strokeWidth:e.strokeWidth,name:e.name,hide:e.hide,fill:e.fill,tooltipType:e.tooltipType,formatter:e.formatter,id:e.id}),x.createElement(eK,eE({},e,{sectors:r})))}var eG={angleAxisId:0,animationBegin:0,animationDuration:1500,animationEasing:"ease",animationMatchBy:eS.matchAppend,animationInterpolateFn:(e,t)=>null==e?[]:1===t?e.flatMap(e=>"removed"===e.status?[]:[e.next]):e.flatMap(e=>"removed"===e.status?[]:"matched"===e.status?[eV(eV({},e.next),{},{startAngle:(0,P.interpolate)(e.prev.startAngle,e.next.startAngle,t),endAngle:(0,P.interpolate)(e.prev.endAngle,e.next.endAngle,t)})]:[eV(eV({},e.next),{},{endAngle:(0,P.interpolate)(e.next.startAngle,e.next.endAngle,t)})]),background:!1,cornerIsExternal:!1,cornerRadius:0,forceCornerRadius:!1,hide:!1,isAnimationActive:"auto",label:!1,legendType:"rect",minPointSize:0,radiusAxisId:0,shape:A,zIndex:eO.DefaultZIndexes.bar};function e$(e){var t=(0,ew.resolveDefaultProps)(e,eG);return x.createElement(ek.RegisterGraphicalItemId,{id:t.id,type:"radialBar"},e=>{var a,n,r;return x.createElement(x.Fragment,null,x.createElement(eA.SetPolarGraphicalItem,{type:"radialBar",id:e,data:void 0,dataKey:t.dataKey,hide:null!=(a=t.hide)?a:eG.hide,angleAxisId:null!=(n=t.angleAxisId)?n:eG.angleAxisId,radiusAxisId:null!=(r=t.radiusAxisId)?r:eG.radiusAxisId,stackId:(0,T.getNormalizedStackId)(t.stackId),barSize:t.barSize,minPointSize:t.minPointSize,maxBarSize:t.maxBarSize}),x.createElement(eZ,t),x.createElement(eW,eE({},t,{id:e})))})}e$.displayName="RadialBar";var eU=e.i(471970),eq=e.i(985743);function eX(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function eY(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?eX(Object(a),!0).forEach(function(t){var n,r,o;n=e,r=t,o=a[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):eX(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var eJ=["axis","item"],eQ=eY(eY({},eq.defaultPolarChartProps),{},{layout:"radial",startAngle:0,endAngle:360}),e0=(0,x.forwardRef)((e,t)=>{var a=(0,ew.resolveDefaultProps)(e,eQ);return x.createElement(eq.PolarChart,{chartName:"RadialBarChart",defaultTooltipEventType:"axis",validateTooltipEventTypes:eJ,tooltipPayloadSearcher:eU.arrayTooltipSearcher,categoricalChartProps:a,ref:t})}),e1=e.i(723451),e2=e.i(694713);let e8={barSize:20,startAngle:90,endAngle:-270,withBackground:!0,withTooltip:!0,accessibilityLayer:!0},e6=(0,u.createVarsResolver)((e,{emptyBackgroundColor:t})=>({root:{"--chart-empty-background":t?(0,p.getThemeColor)(t,e):void 0}})),e4=(0,m.factory)(e=>{let t=(0,h.useProps)("RadialBarChart",e8,e),{classNames:a,className:n,style:u,styles:m,unstyled:b,vars:j,data:S,barSize:k,withBackground:A,dataKey:C,radialBarProps:w,radialBarChartProps:M,withLabels:O,withLegend:B,legendProps:D,withTooltip:P,tooltipProps:T,startAngle:E,endAngle:I,attributes:V,accessibilityLayer:N,...F}=t,[L,z]=(0,x.useState)(null),R=(0,v.useStyles)({name:"RadialBarChart",classes:l,props:t,className:n,style:u,classNames:a,styles:m,unstyled:b,attributes:V,vars:j,varsResolver:e6}),_=(0,f.useMantineTheme)(),Z=S.map(({color:e,...t},a)=>{let n=(0,p.getThemeColor)(e,_);return{...t,__segmentIndex:a,fill:n,fillOpacity:null!==L?L===a?t.opacity||1:.05:t.opacity||1}}),{resolvedClassNames:H,resolvedStyles:K}=(0,y.useResolvedStylesApi)({classNames:a,styles:m,props:t});return(0,r.jsx)(i.Box,{...R("root"),...F,children:(0,r.jsx)(e1.ResponsiveContainer,{children:(0,r.jsxs)(e0,{margin:{top:0,bottom:0,left:0,right:0},innerRadius:"10%",outerRadius:"100%",cx:"50%",cy:"50%",barSize:k,startAngle:E,endAngle:I,data:Z,accessibilityLayer:N,...M,children:[(0,r.jsx)(e$,{label:O?{position:"insideStart",fill:"var(--mantine-color-white)",fontSize:12}:void 0,background:A?{fill:"var(--chart-empty-background)"}:void 0,dataKey:C,isAnimationActive:!1,...w}),B&&(0,r.jsx)(g.Legend,{verticalAlign:"bottom",content:e=>(0,r.jsx)(o.ChartLegend,{payload:e.payload?.map(e=>({...e,dataKey:e.payload?.name,highlightKey:e.payload?.__segmentIndex})),onHighlight:e=>z("number"==typeof e?e:null),legendPosition:D?.verticalAlign||"bottom",classNames:H,styles:K,centered:!0,attributes:V}),...D}),P&&(0,r.jsx)(e2.Tooltip,{animationDuration:0,isAnimationActive:!1,cursor:{stroke:"var(--chart-cursor-color)"},content:({payload:e})=>(0,r.jsxs)(d.Paper,{...R("tooltip"),children:[(0,r.jsxs)(c.Group,{gap:"sm",children:[(0,r.jsx)(s.ColorSwatch,{color:e?.[0]?.payload.fill,size:12,withShadow:!1}),(0,r.jsx)("span",{children:e?.[0]?.payload.name})]}),(0,r.jsx)("span",{children:e?.[0]?.payload[C]})]}),...T})]})})})});e4.displayName="@mantine/core/RadialBarChart",e4.classes=l,e4.varsResolver=e6;let e3={type:"code",component:function(){return(0,r.jsx)(e4,{data:a,dataKey:"value",h:220})},code:[{fileName:"Demo.tsx",code:`
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={220} />;
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]},e5={type:"configurator",component:function(e){return(0,r.jsx)(e4,{data:[{name:"18-24",value:31.47,color:e.color},{name:"25-29",value:26.69,color:e.color},{name:"30-34",value:15.69,color:e.color},{name:"35-39",value:8.22,color:e.color},{name:"40-49",value:8.63,color:e.color},{name:"50+",value:2.63,color:e.color},{name:"unknown",value:6.67,color:e.color}],dataKey:"value",h:220,w:220})},code:e=>`
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
`,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:null}]},e7={type:"code",component:function(){return(0,r.jsx)(e4,{data:a,dataKey:"value",h:260,withLegend:!0})},code:[{fileName:"Demo.tsx",code:`
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={220} withLegend />;
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]},e9={type:"code",component:function(){return(0,r.jsx)(e4,{data:a,dataKey:"value",h:220,withTooltip:!1})},code:[{fileName:"Demo.tsx",code:`
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={220} withTooltip={false} />;
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]},te={type:"code",component:function(){return(0,r.jsx)(e4,{data:a,dataKey:"value",h:280,withLabels:!0})},code:[{fileName:"Demo.tsx",code:`
import { RadialBarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <RadialBarChart data={data} dataKey="value" h={280} withLabels />;
}
`,language:"tsx"},{fileName:"data.ts",code:n,language:"tsx"}]};var tt=(0,t.__exportAll)({color:()=>e5,labels:()=>te,legend:()=>e7,noTooltip:()=>e9,usage:()=>e3});e.s(["RadialBarChartDemos",0,tt],370267)},51567,e=>{"use strict";var t,a,n,r,o,l=e.i(648863),i=e.i(391398),s=e.i(520916),c=e.i(577596),d={root:"m_80d531e7"},u=e.i(232471),m=e.i(481178),p=e.i(275519),f=e.i(317477),h=e.i(779177),y=e.i(951254),v=e.i(44091),g=e.i(62904),x=e.i(391466),b=e.i(191788),j=e.i(337174),S=e.i(56206),k=e.i(524970),A=e.i(543372),C=e.i(815954),w=e.i(301426),M=e.i(270627),O=e.i(516257),B=e.i(778979),D=e.i(297974),P=e.i(355476),T=e.i(3304),E=e.i(213743),I=e.i(62037),V=e.i(438596);function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function F(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(Object(a),!0).forEach(function(t){var n,r,o;n=e,r=t,o=a[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function L(){return(L=Object.assign.bind()).apply(null,arguments)}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}function R(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var _=(e,l,i,s,c)=>{var d=i-s;return(0,V.roundTemplateLiteral)(t||(t=R(["M ",",",""])),e,l)+(0,V.roundTemplateLiteral)(a||(a=R(["L ",",",""])),e+i,l)+(0,V.roundTemplateLiteral)(n||(n=R(["L ",",",""])),e+i-d/2,l+c)+(0,V.roundTemplateLiteral)(r||(r=R(["L ",",",""])),e+i-d/2-s,l+c)+(0,V.roundTemplateLiteral)(o||(o=R(["L ",","," Z"])),e,l)},Z={x:0,y:0,upperWidth:0,lowerWidth:0,height:0,isUpdateAnimationActive:!1,animationBegin:0,animationDuration:1500,animationEasing:"ease"},H=e.i(134959),K=["option"],W=e=>{var t,a=(0,D.resolveDefaultProps)(e,Z),n=a.x,r=a.y,o=a.upperWidth,l=a.lowerWidth,i=a.height,s=a.className,c=a.animationEasing,d=a.animationDuration,u=a.animationBegin,m=a.isUpdateAnimationActive,p=(0,b.useRef)(null),f=function(e){if(Array.isArray(e))return e}(t=(0,b.useState)(-1))||function(e){var t=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,n,r,o,l=[],i=!0,s=!1;try{r=(t=t.call(e)).next,!1;for(;!(i=(a=r.call(t)).done)&&(l.push(a.value),2!==l.length);i=!0);}catch(e){s=!0,n=e}finally{try{if(!i&&null!=t.return&&(o=t.return(),Object(o)!==o))return}finally{if(s)throw n}}return l}}(t)||function(e){if(e){if("string"==typeof e)return z(e,2);var t=({}).toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?z(e,2):void 0}}(t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),h=f[0],y=f[1],v=(0,b.useRef)(o),g=(0,b.useRef)(l),x=(0,b.useRef)(i),j=(0,b.useRef)(n),k=(0,b.useRef)(r),A=(0,T.useAnimationId)(e,"trapezoid-");if((0,b.useEffect)(()=>{if(p.current&&p.current.getTotalLength)try{var e=p.current.getTotalLength();e&&y(e)}catch(e){}},[]),n!==+n||r!==+r||o!==+o||l!==+l||i!==+i||0===o&&0===l||0===i)return null;var C=(0,S.clsx)("recharts-trapezoid",s);if(!m)return b.createElement("g",null,b.createElement("path",L({},(0,I.svgPropertiesAndEvents)(a),{className:C,d:_(n,r,o,l,i)})));var w=v.current,O=g.current,B=x.current,V=j.current,N=k.current,R="0px ".concat(-1===h?1:h,"px"),H="".concat(h,"px ").concat(h,"px"),K=(0,E.getTransitionVal)(["strokeDasharray"],d,"string"==typeof c?c:"ease");return b.createElement(P.JavascriptAnimate,{animationId:A,key:A,canBegin:h>0,duration:d,easing:c,isActive:m,begin:u},e=>{var t=(0,M.interpolate)(w,o,e),s=(0,M.interpolate)(O,l,e),c=(0,M.interpolate)(B,i,e),d=(0,M.interpolate)(V,n,e),u=(0,M.interpolate)(N,r,e);p.current&&(v.current=t,g.current=s,x.current=c,j.current=d,k.current=u);var m=e>0?{transition:K,strokeDasharray:H}:{strokeDasharray:R};return b.createElement("path",L({},(0,I.svgPropertiesAndEvents)(a),{className:C,d:_(d,u,t,s,c),ref:p,style:F(F({},m),a.style)}))})};function G(e){var t=e.option,a=function(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;a[n]=e[n]}return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}(e,K);return b.createElement(H.Shape,{option:t,DefaultShape:W,shapeProps:a})}var $=e.i(616468),U=e.i(128002),q=e.i(314169),X=e.i(868413),Y=e.i(399479);function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function Q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(Object(a),!0).forEach(function(t){var n,r,o;n=e,r=t,o=a[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var ee=(0,q.createSelector)([X.selectChartOffsetInternal,(e,t)=>t,Y.selectChartDataAndAlwaysIgnoreIndexes],(e,t,a)=>{var n,r=t.data,o=t.dataKey,l=t.nameKey,i=t.tooltipType,s=t.lastShapeType,c=t.reversed,d=t.customWidth,u=t.cells,m=t.presentationProps,p=t.id,f=a.chartData;if(null!=r&&r.length>0?n=r:null!=f&&f.length>0&&(n=f),n&&n.length)n=n.map((e,t)=>Q(Q(Q({payload:e},m),e),u&&u[t]&&u[t].props));else{if(!u||!u.length)return[];n=u.map(e=>Q(Q({},m),e.props))}return function(e){var t,a,n,r,o=e.dataKey,l=e.nameKey,i=e.displayedData,s=e.tooltipType,c=e.lastShapeType,d=e.reversed,u=e.offset,m=e.customWidth,p=e.graphicalItemId,f=(t=u.width,a=u.height,n=u.left,r=u.top,{realWidth:(0,M.getPercentValue)(m,t,t),realHeight:a,offsetX:n,offsetY:r}),h=f.realHeight,y=f.realWidth,v=f.offsetX,g=f.offsetY,x=i.map(e=>{var t=(0,O.getValueByDataKey)(e,o,0);return"number"==typeof t?t:0}),b=Math.max.apply(null,x),S=i.length,k=h/S,A={x:u.left,y:u.top,width:u.width,height:u.height},C=i.map((e,t)=>{var a,n=(0,O.getValueByDataKey)(e,o,0),r=String((0,O.getValueByDataKey)(e,l,t)),d=n;if(t!==S-1){var u=(0,O.getValueByDataKey)(i[t+1],o,0);if("number"==typeof u)a=u;else if(Array.isArray(u)){var m=ep(u,2),f=m[0],h=m[1];"number"==typeof f&&(d=f),"number"==typeof h&&(a=h)}}else if(n instanceof Array&&2===n.length){var x=ep(n,2),C=x[0],w=x[1];"number"==typeof C&&(d=C),"number"==typeof w&&(a=w)}else a="rectangle"===c?d:0;var M=0===b?v:(b-d)*y/(2*b)+v,B=k*t+g,D=0===b?0:d/b*y,P=0===b?0:a/b*y,T=[{name:r,value:d,payload:e,dataKey:o,type:s,graphicalItemId:p}],E={x:M,y:B,upperWidth:D,lowerWidth:P,width:Math.max(D,P),height:k};return eg(eg(eg({},E),{},{name:r,val:d,tooltipPayload:T,tooltipPosition:{x:M+D/2,y:B+k/2}},null!=e&&"object"==typeof e?(0,j.default)(e,["width"]):{}),{},{payload:e,parentViewBox:A,labelViewBox:E})});return d&&(C=C.map((e,t)=>{var a={x:e.x-(e.lowerWidth-e.upperWidth)/2,y:e.y-t*k+(S-1-t)*k,upperWidth:e.lowerWidth,lowerWidth:e.upperWidth,width:Math.max(e.lowerWidth,e.upperWidth),height:k};return eg(eg(eg({},e),a),{},{tooltipPosition:eg(eg({},e.tooltipPosition),{},{y:e.y-t*k+(S-1-t)*k+k/2}),labelViewBox:a})})),C}({dataKey:o,nameKey:l,displayedData:n,tooltipType:i,lastShapeType:s,reversed:c,offset:e,customWidth:d,graphicalItemId:p})}),et=e.i(106043),ea=e.i(300244),en=e.i(630173),er=e.i(883388),eo=e.i(945031),el=e.i(634200),ei=e.i(768069),es=e.i(901841),ec=["onMouseEnter","onClick","onMouseLeave","shape","activeShape"],ed=["id"],eu=["stroke","fill","legendType","hide","isAnimationActive","animationBegin","animationDuration","animationEasing","nameKey","lastShapeType","id"],em=["id"];function ep(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"u">typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,o,l,i=[],s=!0,c=!1;try{if(o=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;s=!1}else for(;!(s=(n=o.call(a)).done)&&(i.push(n.value),i.length!==t);s=!0);}catch(e){c=!0,r=e}finally{try{if(!s&&null!=a.return&&(l=a.return(),Object(l)!==l))return}finally{if(c)throw r}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return ef(e,t);var a=({}).toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?ef(e,t):void 0}}(e,t)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ef(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=Array(t);a<t;a++)n[a]=e[a];return n}function eh(){return(eh=Object.assign.bind()).apply(null,arguments)}function ey(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a={};for(var n in e)if(({}).hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;a[n]=e[n]}return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],-1===t.indexOf(a)&&({}).propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}function ev(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function eg(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ev(Object(a),!0).forEach(function(t){var n,r,o;n=e,r=t,o=a[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in n?Object.defineProperty(n,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):n[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ev(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var ex=b.memo(e=>{var t=e.dataKey,a=e.nameKey,n=e.stroke,r=e.strokeWidth,o=e.fill,l=e.name,i=e.hide,s=e.tooltipType,c=e.formatter,d=e.data,u=e.trapezoids,m=e.id;return b.createElement(U.SetTooltipEntrySettings,{tooltipEntrySettings:{dataDefinedOnItem:d,getPosition:e=>{var t;return null==(t=u[Number(e)])?void 0:t.tooltipPosition},settings:{stroke:n,strokeWidth:r,fill:o,dataKey:t,name:l,nameKey:a,hide:i,type:s,color:o,unit:"",formatter:c,graphicalItemId:m}}})});function eb(e){var t=e.showLabels,a=e.trapezoids,n=e.children,r=(0,b.useMemo)(()=>{if(t)return null==a?void 0:a.map(e=>{var t=e.labelViewBox;return eg(eg({},t),{},{value:e.name,payload:e.payload,parentViewBox:e.parentViewBox,viewBox:t,fill:e.fill})})},[t,a]);return b.createElement(w.CartesianLabelListContextProvider,{value:r},n)}function ej(e){var t=e.trapezoids,a=e.allOtherFunnelProps,n=e.animationElapsedTime,r=e.isAnimating,o=e.isEntrance,l=(0,A.useAppSelector)(e=>(0,k.selectActiveIndex)(e,"item",e.tooltip.settings.trigger,void 0)),i=a.onMouseEnter,s=a.onClick,c=a.onMouseLeave,d=a.shape,u=a.activeShape,m=ey(a,ec),p=(0,$.useMouseEnterItemDispatch)(i,a.dataKey,a.id),f=(0,$.useMouseLeaveItemDispatch)(c),h=(0,$.useMouseClickItemDispatch)(s,a.dataKey,a.id);return b.createElement(b.Fragment,null,t.map((e,t)=>{var a=!!u&&l===String(t),i=eg(eg({},e),{},{option:a?u:d,isActive:a,stroke:e.stroke,animationElapsedTime:n,isAnimating:r,isEntrance:o}),s=(i.id,ey(i,ed));return b.createElement(C.Layer,eh({key:"trapezoid-".concat(null==e?void 0:e.x,"-").concat(null==e?void 0:e.y,"-").concat(null==e?void 0:e.name,"-").concat(null==e?void 0:e.value),className:"recharts-funnel-trapezoid"},(0,B.adaptEventsOfChild)(m,e,t),{onMouseEnter:p(e,t),onMouseLeave:f(e,t),onClick:h(e,t)}),b.createElement(G,s))}))}function eS(e){var t=e.previousTrapezoidsRef,a=e.props,n=a.trapezoids,r=a.isAnimationActive,o=a.animationBegin,l=a.animationDuration,i=a.animationEasing,s=a.animationInterpolateFn,c=(0,es.useCartesianChartLayout)(),d=(0,eo.useAnimationCallbacks)(a.onAnimationStart,a.onAnimationEnd),u=d.isAnimating,m=d.handleAnimationStart,p=d.handleAnimationEnd;return null==c?null:b.createElement(eb,{showLabels:!u,trapezoids:n},b.createElement(eo.AnimatedItems,{animationInput:n,animationIdPrefix:"recharts-funnel-",items:n,previousItemsRef:t,isAnimationActive:r,animationBegin:o,animationDuration:l,animationEasing:i,onAnimationStart:m,onAnimationEnd:p,animationInterpolateFn:s,animationMatchBy:a.animationMatchBy,layout:c},(e,t,n)=>b.createElement(C.Layer,null,b.createElement(ej,{trapezoids:e,allOtherFunnelProps:a,animationElapsedTime:t,isAnimating:u||t<1,isEntrance:n}))),b.createElement(w.LabelListFromLabelProp,{label:a.label}),a.children)}function ek(e){var t=(0,b.useRef)(void 0);return b.createElement(eS,{props:e,previousTrapezoidsRef:t})}var eA={animationBegin:400,animationDuration:1500,animationEasing:"ease",animationInterpolateFn:(e,t)=>null==e?[]:1===t?e.flatMap(e=>"removed"===e.status?[]:[e.next]):e.flatMap(e=>{if("removed"===e.status)return[];if("matched"===e.status)return[eg(eg({},e.next),{},{x:(0,M.interpolate)(e.prev.x,e.next.x,t),y:(0,M.interpolate)(e.prev.y,e.next.y,t),upperWidth:(0,M.interpolate)(e.prev.upperWidth,e.next.upperWidth,t),lowerWidth:(0,M.interpolate)(e.prev.lowerWidth,e.next.lowerWidth,t),height:(0,M.interpolate)(e.prev.height,e.next.height,t)})];var a=e.next;return[eg(eg({},a),{},{x:(0,M.interpolate)(a.x+a.upperWidth/2,a.x,t),y:(0,M.interpolate)(a.y+a.height/2,a.y,t),upperWidth:(0,M.interpolate)(0,a.upperWidth,t),lowerWidth:(0,M.interpolate)(0,a.lowerWidth,t),height:(0,M.interpolate)(0,a.height,t)})]}),animationMatchBy:el.matchAppend,fill:"#808080",hide:!1,isAnimationActive:"auto",lastShapeType:"triangle",legendType:"rect",nameKey:"name",reversed:!1,shape:W,stroke:"#fff"};function eC(e){var t=(0,en.usePlotArea)(),a=e.stroke,n=e.fill,r=e.legendType,o=e.hide,l=e.isAnimationActive,i=e.animationBegin,s=e.animationDuration,c=e.animationEasing,d=e.nameKey,u=e.lastShapeType,m=e.id,p=ey(e,eu),f=(0,er.svgPropertiesNoEvents)(e),h=(0,et.findAllByType)(e.children,ea.Cell),y=(0,b.useMemo)(()=>({dataKey:e.dataKey,nameKey:d,data:e.data,tooltipType:e.tooltipType,lastShapeType:u,reversed:e.reversed,customWidth:e.width,cells:h,presentationProps:f,id:m}),[e.dataKey,d,e.data,e.tooltipType,u,e.reversed,e.width,h,f,m]),v=(0,A.useAppSelector)(e=>ee(e,y));if(o||!v||!v.length||!t)return null;var g=t.height,x=t.width,j=(0,S.clsx)("recharts-trapezoids",e.className);return b.createElement(b.Fragment,null,b.createElement(ex,{dataKey:e.dataKey,nameKey:e.nameKey,stroke:e.stroke,strokeWidth:e.strokeWidth,fill:e.fill,name:e.name,hide:e.hide,tooltipType:e.tooltipType,formatter:e.formatter,data:e.data,trapezoids:v,id:m}),b.createElement(C.Layer,{className:j},b.createElement(ek,eh({},p,{id:m,stroke:a,fill:n,nameKey:d,lastShapeType:u,animationBegin:i,animationDuration:s,animationEasing:c,isAnimationActive:l,hide:o,legendType:r,height:g,width:x,trapezoids:v}))))}var ew=function(e){var t=(0,D.resolveDefaultProps)(e,eA),a=t.id,n=ey(t,em);return b.createElement(ei.RegisterGraphicalItemId,{id:a,type:"funnel"},e=>b.createElement(eC,eh({},n,{id:e})))};ew.displayName="Funnel";var eM=e.i(471970),eO=e.i(437515),eB=["item"],eD=(0,b.forwardRef)((e,t)=>b.createElement(eO.CartesianChart,{chartName:"FunnelChart",defaultTooltipEventType:"item",validateTooltipEventTypes:eB,tooltipPayloadSearcher:eM.arrayTooltipSearcher,categoricalChartProps:e,ref:t})),eP=e.i(881264),eT=e.i(723451),eE=e.i(694713);let eI={withTooltip:!0,size:300,strokeWidth:1,withLabels:!1,labelsPosition:"right",tooltipDataSource:"all",accessibilityLayer:!0},eV=(0,m.createVarsResolver)((e,{strokeColor:t,labelColor:a,size:n})=>({root:{"--chart-stroke-color":t?(0,f.getThemeColor)(t,e):void 0,"--chart-labels-color":a?(0,f.getThemeColor)(a,e):void 0,"--chart-size":(0,h.rem)(n)}})),eN=(0,p.factory)(e=>{let t=(0,v.useProps)("FunnelChart",eI,e),{classNames:a,className:n,style:r,styles:o,unstyled:l,vars:m,data:p,withTooltip:h,withLegend:j,legendProps:S,tooltipAnimationDuration:k,tooltipProps:A,strokeWidth:C,withLabels:M,size:O,valueFormatter:B,children:D,funnelChartProps:P,funnelProps:T,labelsPosition:E,tooltipDataSource:I,strokeColor:V,labelColor:N,attributes:F,accessibilityLayer:L,...z}=t,R=(0,y.useMantineTheme)(),[_,Z]=(0,b.useState)(null),H=(0,x.useStyles)({name:"FunnelChart",classes:d,props:t,className:n,style:r,classNames:a,styles:o,unstyled:l,attributes:F,vars:m,varsResolver:eV}),{resolvedClassNames:K,resolvedStyles:W}=(0,g.useResolvedStylesApi)({classNames:a,styles:o,props:t});return(0,i.jsx)(u.Box,{size:O,...H("root"),...z,children:(0,i.jsx)(eT.ResponsiveContainer,{children:(0,i.jsxs)(eD,{accessibilityLayer:L,...P,children:[(0,i.jsx)(ew,{data:p.map((e,t)=>({...e,__segmentIndex:t,fill:(0,f.getThemeColor)(e.color,R),fillOpacity:null!==_?_===t?1:.2:1})),dataKey:"value",isAnimationActive:!1,stroke:"var(--chart-stroke-color, var(--mantine-color-body))",strokeWidth:C,...T,children:M&&(0,i.jsx)(w.LabelList,{position:E,fill:"inside"===E?"var(--chart-labels-color, var(--mantine-color-white))":"var(--chart-labels-color, var(--mantine-color-dimmed))",stroke:"none",fontFamily:"var(--mantine-font-family)",fontSize:12,dataKey:e=>"function"==typeof B?B(e.value):e.value})}),h&&(0,i.jsx)(eE.Tooltip,{animationDuration:k,isAnimationActive:!1,content:({payload:e})=>(0,i.jsx)(s.ChartTooltip,{payload:p,classNames:K,styles:W,type:"radial",segmentId:"segment"===I?e?.[0]?.payload?.__segmentIndex:void 0,valueFormatter:B,attributes:F}),...A}),j&&(0,i.jsx)(eP.Legend,{verticalAlign:"bottom",content:()=>(0,i.jsx)(c.ChartLegend,{payload:p.map((e,t)=>({value:e.name,color:(0,f.getThemeColor)(e.color,R),dataKey:e.name,highlightKey:t})),onHighlight:e=>Z("number"==typeof e?e:null),legendPosition:S?.verticalAlign||"bottom",classNames:K,styles:W,centered:!0,attributes:F}),...S}),D]})})})});eN.displayName="@mantine/charts/FunnelChart",eN.classes=d,eN.varsResolver=eV;let eF={type:"configurator",component:function(e){return(0,i.jsx)(eN,{...e,data:[{name:"USA",value:400,color:e.color},{name:"Other",value:200,color:"gray.6"}]})},code:e=>`
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
`,centered:!0,controls:[{type:"color",prop:"color",initialValue:"blue",libraryValue:"__"}]},eL=[{name:"USA",value:400,color:"indigo.6"},{name:"India",value:300,color:"yellow.6"},{name:"Japan",value:100,color:"teal.6"},{name:"Other",value:200,color:"gray.6"}],ez=`
export const data = [
  { name: 'USA', value: 400, color: 'indigo.6' },
  { name: 'India', value: 300, color: 'yellow.6' },
  { name: 'Japan', value: 100, color: 'teal.6' },
  { name: 'Other', value: 200, color: 'gray.6' },
];
`,eR={type:"code",component:function(){return(0,i.jsx)(eN,{data:eL,withLegend:!0})},code:[{code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart data={data} withLegend />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:ez,language:"tsx",fileName:"data.ts"}],centered:!0},e_={type:"code",component:function(){return(0,i.jsx)(eN,{data:eL,withTooltip:!1})},code:[{code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart data={data} withTooltip={false} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:ez,language:"tsx",fileName:"data.ts"}],centered:!0};var eZ=e.i(330573);let eH={type:"configurator",component:function(e){return(0,i.jsx)(eZ.Center,{mih:300,children:(0,i.jsx)(eN,{...e,data:eL})})},code:[{fileName:"Demo.tsx",code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart{{props}} data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:ez,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"size",initialValue:160,min:80,max:300,step:1,libraryValue:"__"}]},eK={type:"code",component:function(){return(0,i.jsx)("div",{className:"m_87d42249",children:(0,i.jsx)(eN,{data:eL,strokeColor:"var(--card-bg)"})})},code:[{code:`
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
`,language:"scss",fileName:"Demo.module.css"},{code:ez,language:"tsx",fileName:"data.ts"}],centered:!0},eW={type:"configurator",component:function(e){return(0,i.jsx)(eN,{...e,data:eL})},code:[{fileName:"Demo.tsx",code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart{{props}} data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:ez,language:"tsx"}],centered:!0,controls:[{type:"number",prop:"strokeWidth",initialValue:1,min:0,max:5,step:.1,libraryValue:"__"}]};var eG=e.i(725695),e$=e.i(883364);let eU={type:"code",component:function(){return(0,i.jsxs)(eG.Group,{gap:50,children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(e$.Text,{fz:"xs",mb:"sm",ta:"center",children:"Data only for hovered segment"}),(0,i.jsx)(eN,{data:eL,tooltipDataSource:"segment",mx:"auto"})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)(e$.Text,{fz:"xs",mb:"sm",ta:"center",children:"Data only for all segments"}),(0,i.jsx)(eN,{data:eL,mx:"auto"})]})]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:ez,language:"tsx",fileName:"data.ts"}],centered:!0},eq={type:"code",component:function(){return(0,i.jsx)(eN,{data:eL})},code:[{code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart data={data} />;
}
`,language:"tsx",fileName:"Demo.tsx"},{code:ez,language:"tsx",fileName:"data.ts"}],centered:!0},eX={type:"configurator",component:function(e){return(0,i.jsx)(eN,{...e,withLabels:!0,data:eL,miw:300})},code:[{fileName:"Demo.tsx",code:`
import { FunnelChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return <FunnelChart{{props}} withLabels data={data} />;
}
`,language:"tsx"},{fileName:"data.ts",code:ez,language:"tsx"}],centered:!0,controls:[{type:"segmented",prop:"labelsPosition",initialValue:"right",libraryValue:"__",data:["left","inside","right"]}]};var eY=(0,l.__exportAll)({color:()=>eF,legend:()=>eR,noTooltip:()=>e_,size:()=>eH,strokeColor:()=>eK,strokeWidth:()=>eW,tooltipDataSource:()=>eU,usage:()=>eq,withLabels:()=>eX});e.s(["FunnelChartDemos",0,eY],51567)},7819,e=>{"use strict";var t=e.i(391398),a=e.i(38856),n=e.i(453869),r=e.i(491607),o=e.i(51567),l=e.i(14625),i=e.i(370267),s=e.i(76206);e.i(603441);var c=e.i(62558);e.i(457450);var d=e.i(418026);let u=(0,c.Layout)(d.MDX_DATA.Changelog7140);function m(e){let c={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.useMDXComponents)(),...e.components},{Demo:d}=c;return d||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.h2,{id:"angleslider-component",children:"AngleSlider component"}),"\n",(0,t.jsxs)(c.p,{children:["New ",(0,t.jsx)(c.a,{href:"/core/angle-slider/",children:"AngleSlider"})," component:"]}),"\n",(0,t.jsx)(d,{data:n.AngleSliderDemos.marks}),"\n",(0,t.jsx)(c.h2,{id:"radialbarchart-component",children:"RadialBarChart component"}),"\n",(0,t.jsxs)(c.p,{children:["New ",(0,t.jsx)(c.a,{href:"/charts/radial-bar-chart/",children:"RadialBarChart"})," component:"]}),"\n",(0,t.jsx)(d,{data:i.RadialBarChartDemos.labels}),"\n",(0,t.jsx)(c.h2,{id:"funnelchart-component",children:"FunnelChart component"}),"\n",(0,t.jsxs)(c.p,{children:["New ",(0,t.jsx)(c.a,{href:"/charts/funnel-chart/",children:"FunnelChart"})," component:"]}),"\n",(0,t.jsx)(d,{data:o.FunnelChartDemos.usage}),"\n",(0,t.jsx)(c.h2,{id:"modalstack-and-drawerstack-components",children:"Modal.Stack and Drawer.Stack components"}),"\n",(0,t.jsxs)(c.p,{children:["New ",(0,t.jsx)(c.a,{href:"/core/modal/",children:"Modal.Stack"})," and ",(0,t.jsx)(c.a,{href:"/core/drawer",children:"Drawer.Stack"})," components simplify usage of multiple modals/drawers at the same time."]}),"\n",(0,t.jsxs)(c.p,{children:["Use ",(0,t.jsx)(c.code,{children:"Modal.Stack"})," component to render multiple modals at the same time.\n",(0,t.jsx)(c.code,{children:"Modal.Stack"})," keeps track of opened modals, manages z-index values, focus trapping\nand ",(0,t.jsx)(c.code,{children:"closeOnEscape"})," behavior. ",(0,t.jsx)(c.code,{children:"Modal.Stack"})," is designed to be used with ",(0,t.jsx)(c.code,{children:"useModalsStack"})," hook."]}),"\n",(0,t.jsxs)(c.p,{children:["Differences from using multiple ",(0,t.jsx)(c.code,{children:"Modal"})," components:"]}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.code,{children:"Modal.Stack"})," manages z-index values – modals that are opened later will always have higher z-index value disregarding their order in the DOM"]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.code,{children:"Modal.Stack"})," disables focus trap and ",(0,t.jsx)(c.code,{children:"Escape"})," key handling for all modals except the one that is currently opened"]}),"\n",(0,t.jsxs)(c.li,{children:["Modals that are not currently opened are present in the DOM but are hidden with ",(0,t.jsx)(c.code,{children:"opacity: 0"})," and ",(0,t.jsx)(c.code,{children:"pointer-events: none"})]}),"\n",(0,t.jsx)(c.li,{children:"Only one overlay is rendered at a time"}),"\n"]}),"\n",(0,t.jsx)(d,{data:l.ModalDemos.stack}),"\n",(0,t.jsx)(c.h2,{id:"usemodalsstackusedrawersstack-hooks",children:"useModalsStack/useDrawersStack hooks"}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.code,{children:"useModalsStack"})," hook provides an easy way to control multiple modals at the same time.\nIt accepts an array of unique modals ids and returns an object with the following properties:"]}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-tsx",children:"interface ModalStackReturnType<T extends string> {\n  // Current opened state of each modal\n  state: Record<T, boolean>;\n\n  // Opens modal with the given id\n  open: (id: T) => void;\n\n  // Closes modal with the given id\n  close: (id: T) => void;\n\n  // Toggles modal with the given id\n  toggle: (id: T) => void;\n\n  // Closes all modals within the stack\n  closeAll: () => void;\n\n  // Returns props for modal with the given id\n  register: (id: T) => {\n    opened: boolean;\n    onClose: () => void;\n    stackId: T;\n  };\n}\n"})}),"\n",(0,t.jsxs)(c.p,{children:["Example of using ",(0,t.jsx)(c.code,{children:"useModalsStack"})," with ",(0,t.jsx)(c.code,{children:"Modal"})," component:"]}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-tsx",children:"import { Modal, useModalsStack } from '@mantine/core';\n\nfunction Demo() {\n  const stack = useModalsStack(['first', 'second']);\n\n  return (\n    <>\n      <Modal {...stack.register('first')}>First</Modal>\n      <Modal {...stack.register('second')}>Second</Modal>\n      <Button onClick={() => stack.open('first')}>Open first</Button>\n    </>\n  );\n}\n"})}),"\n",(0,t.jsx)(c.h2,{id:"restrict-slider-selection-to-marks",children:"Restrict Slider selection to marks"}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.a,{href:"/core/slider",children:"Slider"})," component now supports ",(0,t.jsx)(c.code,{children:"restrictToMarks"})," prop that restricts slider value to marks only.\nNote that in this case ",(0,t.jsx)(c.code,{children:"step"})," prop is ignored:"]}),"\n",(0,t.jsx)(d,{data:s.SliderDemos.restrictToMarks}),"\n",(0,t.jsx)(c.h2,{id:"barchart-svg-pattern-fill",children:"BarChart SVG pattern fill"}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsx)(c.a,{href:"/charts/bar-chart",children:"BarChart"})," now can be used with SVG pattern fill:"]}),"\n",(0,t.jsx)(d,{data:r.BarChartDemos.stripes}),"\n",(0,t.jsx)(c.h2,{id:"help-center-updates",children:"Help center updates"}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsxs)(c.li,{children:["New ",(0,t.jsx)(c.a,{href:"https://help.mantine.dev/q/nested-inline-styles",children:"Can I use nested inline styles with Mantine components?"})," question"]}),"\n",(0,t.jsxs)(c.li,{children:["New ",(0,t.jsx)(c.a,{href:"https://help.mantine.dev/q/postcss-fns-inline",children:"Can I use PostCSS function in inline styles?"})," question"]}),"\n",(0,t.jsxs)(c.li,{children:["New ",(0,t.jsx)(c.a,{href:"https://help.mantine.dev/q/carousel-missing-styles",children:"Why my Carousel slides are in vertical orientation?"})," question"]}),"\n",(0,t.jsxs)(c.li,{children:["New ",(0,t.jsx)(c.a,{href:"https://help.mantine.dev/q/transparent-buttons",children:"My buttons are transparent and the background is visible only on hover, what is wrong?"})," question"]}),"\n",(0,t.jsxs)(c.li,{children:["New ",(0,t.jsx)(c.a,{href:"https://help.mantine.dev/q/primary-virtual-color",children:"Can I have different primary color for light and dark color schemes?"})," question"]}),"\n",(0,t.jsxs)(c.li,{children:["New ",(0,t.jsx)(c.a,{href:"https://help.mantine.dev/q/body-background",children:"How can I change body background color?"})," question"]}),"\n",(0,t.jsxs)(c.li,{children:["New ",(0,t.jsx)(c.a,{href:"https://help.mantine.dev/q/nested-popover-closes",children:"My Popover dropdown closes when I click on the dropdown of nested Popover"})," question"]}),"\n"]}),"\n",(0,t.jsx)(c.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(c.ul,{children:["\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.a,{href:"/core/tree/",children:"useTree"})," hook now accepts ",(0,t.jsx)(c.code,{children:"onNodeExpand"})," and ",(0,t.jsx)(c.code,{children:"onNodeCollapse"})," callbacks"]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.a,{href:"/core/tree/",children:"useTree"})," hook now returns additional ",(0,t.jsx)(c.code,{children:"checkAllNodes"}),", ",(0,t.jsx)(c.code,{children:"uncheckAllNodes"})," and ",(0,t.jsx)(c.code,{children:"setCheckedState"})," handlers"]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.a,{href:"/core/tree",children:"Tree"})," component now includes ",(0,t.jsx)(c.code,{children:"getTreeExpandedState"})," to generate expanded state based on the tree data"]}),"\n",(0,t.jsxs)(c.li,{children:[(0,t.jsx)(c.a,{href:"/form/use-form",children:"use-form"})," now supports ",(0,t.jsx)(c.code,{children:"form.replaceListItem"})," handler to replace list item at given index"]}),"\n"]})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(u,{...e,children:(0,t.jsx)(m,{...e})})}])},383517,(e,t,a)=>{let n="/changelog/7-14-0";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(7819)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);