(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let o={};for(var r in e)t(o,r,{get:e[r],enumerable:!0});return n||t(o,Symbol.toStringTag,{value:"Module"}),o}])},530514,e=>{"use strict";e.s(["createTheme",0,function(e){return e}])},541772,e=>{"use strict";var t=e.i(191788);e.s(["useDisclosure",0,function(e=!1,n={}){let[o,r]=(0,t.useState)(e),a=(0,t.useCallback)(()=>{r(e=>e||(n.onOpen?.(),!0))},[n.onOpen]),l=(0,t.useCallback)(()=>{r(e=>e?(n.onClose?.(),!1):e)},[n.onClose]);return[o,{open:a,close:l,toggle:(0,t.useCallback)(()=>{o?l():a()},[l,a,o]),set:r}]}])},477777,430731,637245,225147,811590,426611,32044,446817,e=>{"use strict";var t=e.i(232471);let[n,o]=(0,e.i(386179).createSafeContext)("ModalBase component was not found in tree");var r=e.i(191788),a=e.i(56206),l=e.i(391398);function i({className:e,...n}){let s,c=(s=o(),(0,r.useEffect)(()=>(s.setBodyMounted(!0),()=>s.setBodyMounted(!1)),[]),s.getBodyId()),d=o();return(0,l.jsx)(t.Box,{id:c,className:(0,a.default)({m_5df29311:!d.unstyled},e),...n})}i.displayName="@mantine/core/ModalBaseBody",e.s(["ModalBaseBody",0,i],477777);var s=e.i(802046);function c({className:e,onClick:t,...n}){let r=o();return(0,l.jsx)(s.CloseButton,{...n,onClick:e=>{r.onClose(),t?.(e)},className:(0,a.default)({m_606cb269:!r.unstyled},e),unstyled:r.unstyled})}c.displayName="@mantine/core/ModalBaseCloseButton",e.s(["ModalBaseCloseButton",0,c],430731);var d=e.i(470743),u=e.i(34515),m=e.i(22630);function p({transitionProps:e,className:t,innerProps:n,onKeyDown:r,style:i,ref:s,...c}){let h=o();return(0,l.jsx)(u.Transition,{mounted:h.opened,transition:"pop",...h.transitionProps,onExited:()=>{h.onExitTransitionEnd?.(),h.transitionProps?.onExited?.()},onEntered:()=>{h.onEnterTransitionEnd?.(),h.transitionProps?.onEntered?.()},...e,children:e=>(0,l.jsx)("div",{...n,className:(0,a.default)({m_60c222c7:!h.unstyled},n.className),children:(0,l.jsx)(m.FocusTrap,{active:h.opened&&h.trapFocus,innerRef:s,children:(0,l.jsx)(d.Paper,{...c,component:"section",role:"dialog",tabIndex:-1,"aria-modal":!0,"aria-describedby":h.bodyMounted?h.getBodyId():void 0,"aria-labelledby":h.titleMounted?h.getTitleId():void 0,style:[i,e],className:(0,a.default)({m_fd1ab0aa:!h.unstyled},t),unstyled:h.unstyled,children:c.children})})})})}function h({className:e,...n}){let r=o();return(0,l.jsx)(t.Box,{component:"header",className:(0,a.default)({m_b5489c3c:!r.unstyled},e),...n})}p.displayName="@mantine/core/ModalBaseContent",e.s(["ModalBaseContent",0,p],637245),e.s(["NativeScrollArea",0,function({children:e}){return(0,l.jsx)(l.Fragment,{children:e})}],225147),h.displayName="@mantine/core/ModalBaseHeader",e.s(["ModalBaseHeader",0,h],811590);var f=e.i(476273);let x={duration:200,timingFunction:"ease",transition:"fade"};function g({onClick:e,transitionProps:t,style:n,visible:r,...a}){let i,s=o(),c=(i=o(),{...x,...i.transitionProps,...t});return(0,l.jsx)(u.Transition,{mounted:void 0!==r?r:s.opened,...c,transition:"fade",children:t=>(0,l.jsx)(f.Overlay,{fixed:!0,style:[n,t],zIndex:s.zIndex,unstyled:s.unstyled,onClick:t=>{e?.(t),s.closeOnClickOutside&&s.onClose()},...a})})}g.displayName="@mantine/core/ModalBaseOverlay",e.s(["ModalBaseOverlay",0,g],426611);var j=e.i(749218),v=e.i(433512),w=e.i(164483),y=e.i(779861),b=e.i(484108),D=e.i(107315),B=e.i(133613),C=e.i(865823);function k({keepMounted:e,opened:o,onClose:a,id:i,transitionProps:s,onExitTransitionEnd:c,onEnterTransitionEnd:d,trapFocus:u,closeOnEscape:m,returnFocus:p,closeOnClickOutside:h,withinPortal:f,portalProps:x,lockScroll:g,children:A,zIndex:E,shadow:M,padding:S,__vars:T,unstyled:V,removeScrollProps:I,...F}){let{_id:H,titleMounted:Z,bodyMounted:P,shouldLockScroll:L,setTitleMounted:z,setBodyMounted:_}=function({id:e,transitionProps:t,opened:n,trapFocus:o,closeOnEscape:a,onClose:l,returnFocus:i}){let s=(0,D.useId)(e),[c,d]=(0,r.useState)(!1),[u,m]=(0,r.useState)(!1),p=function({opened:e,transitionDuration:t}){let[n,o]=(0,r.useState)(e),a=(0,r.useRef)(-1),l=(0,y.useReducedMotion)()?0:t;return(0,r.useEffect)(()=>(e?(o(!0),window.clearTimeout(a.current)):0===l?o(!1):a.current=window.setTimeout(()=>o(!1),l),()=>window.clearTimeout(a.current)),[e,l]),n}({opened:n,transitionDuration:"number"==typeof t?.duration?t?.duration:200});return(0,B.useWindowEvent)("keydown",e=>{"Escape"===e.key&&a&&!e.isComposing&&n&&e.target?.getAttribute("data-mantine-stop-propagation")!=="true"&&l()},{capture:!0}),(0,b.useFocusReturn)({opened:n,shouldReturnFocus:o&&i}),{_id:s,titleMounted:c,bodyMounted:u,shouldLockScroll:p,setTitleMounted:d,setBodyMounted:m}}({id:i,transitionProps:s,opened:o,trapFocus:u,closeOnEscape:m,onClose:a,returnFocus:p}),{key:O,...N}=I||{};return(0,l.jsx)(w.OptionalPortal,{...x,withinPortal:f,children:(0,l.jsx)(n,{value:{opened:o,onClose:a,closeOnClickOutside:h,onExitTransitionEnd:c,onEnterTransitionEnd:d,transitionProps:{...s,keepMounted:e},getTitleId:()=>`${H}-title`,getBodyId:()=>`${H}-body`,titleMounted:Z,bodyMounted:P,setTitleMounted:z,setBodyMounted:_,trapFocus:u,closeOnEscape:m,zIndex:E,unstyled:V},children:(0,l.jsx)(C.RemoveScroll,{enabled:L&&g,...N,children:(0,l.jsx)(t.Box,{...F,id:H,__vars:{...T,"--mb-z-index":(E||(0,j.getDefaultZIndex)("modal")).toString(),"--mb-shadow":(0,v.getShadow)(M),"--mb-padding":(0,v.getSpacing)(S)},children:A})},O)})})}function A({className:e,...n}){let i,s=(i=o(),(0,r.useEffect)(()=>(i.setTitleMounted(!0),()=>i.setTitleMounted(!1)),[]),i.getTitleId()),c=o();return(0,l.jsx)(t.Box,{component:"h2",className:(0,a.default)({m_615af6c9:!c.unstyled},e),id:s,...n})}k.displayName="@mantine/core/ModalBase",e.s(["ModalBase",0,k],32044),A.displayName="@mantine/core/ModalBaseTitle",e.s(["ModalBaseTitle",0,A],446817)},931882,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let o=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),t.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(n.default,{ref:r,...e,weights:o}));r.displayName="CaretDownIcon",e.s(["CaretDownIcon",0,r],931882)},123895,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let o=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,20a108,108,0,0,0,0,216c22.27,0,45.69-6.73,62.64-18a12,12,0,1,0-13.29-20c-13,8.63-31.89,14-49.35,14a84,84,0,1,1,84-84c0,9.29-1.67,17.08-4.69,21.95-2.64,4.24-6,6.05-11.31,6.05s-8.67-1.81-11.31-6.05c-3-4.87-4.69-12.66-4.69-21.95V88a12,12,0,0,0-23.49-3.46,52,52,0,1,0,8.86,79.57C172.3,174.3,182.81,180,196,180c24.67,0,40-19.92,40-52A108.12,108.12,0,0,0,128,20Zm0,136a28,28,0,1,1,28-28A28,28,0,0,1,128,156Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M232,128c0,.51,0,1,0,1.52-.34,14.26-5.63,30.48-28,30.48-23.14,0-28-17.4-28-32V88a8,8,0,0,0-8.53-8A8.17,8.17,0,0,0,160,88.27v4a48,48,0,1,0,6.73,64.05,40.19,40.19,0,0,0,3.38,5C175.48,168,185.71,176,204,176a54.81,54.81,0,0,0,9.22-.75,4,4,0,0,1,4.09,6A104.05,104.05,0,0,1,125.91,232C71.13,230.9,26.2,186.86,24.08,132.11A104,104,0,1,1,232,128ZM96,128a32,32,0,1,0,32-32A32,32,0,0,0,96,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,26a102,102,0,0,0,0,204c21.13,0,43.31-6.35,59.32-17a6,6,0,0,0-6.65-10c-13.9,9.25-34.09,15-52.67,15a90,90,0,1,1,90-90c0,29.58-13.78,34-22,34s-22-4.42-22-34V88a6,6,0,0,0-12,0v9a46,46,0,1,0,4.34,56.32C171.76,166.6,182,174,196,174c21.29,0,34-17.2,34-46A102.12,102.12,0,0,0,128,26Zm0,136a34,34,0,1,1,34-34A34,34,0,0,1,128,162Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24a104,104,0,0,0,0,208c21.51,0,44.1-6.48,60.43-17.33a8,8,0,0,0-8.86-13.33C166,210.38,146.21,216,128,216a88,88,0,1,1,88-88c0,26.45-10.88,32-20,32s-20-5.55-20-32V88a8,8,0,0,0-16,0v4.26a48,48,0,1,0,5.93,65.1c6,12,16.35,18.64,30.07,18.64,22.54,0,36-17.94,36-48A104.11,104.11,0,0,0,128,24Zm0,136a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,28a100,100,0,0,0,0,200c20.76,0,42.52-6.23,58.21-16.66a4,4,0,1,0-4.43-6.67C167.35,214.27,147.24,220,128,220a92,92,0,1,1,92-92c0,31.32-15,36-24,36s-24-4.68-24-36V88a4,4,0,0,0-8,0v14.75a44,44,0,1,0,2.82,45.94C171.46,163.58,181.66,172,196,172c20,0,32-16.45,32-44A100.11,100.11,0,0,0,128,28Zm0,136a36,36,0,1,1,36-36A36,36,0,0,1,128,164Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(n.default,{ref:r,...e,weights:o}));r.displayName="AtIcon",e.s(["AtIcon",0,r],123895)},692385,e=>{"use strict";var t=e.i(852361),n=e.i(191788);let o={min:-1/0,max:1/0};e.s(["useCounter",0,function(e=0,r){let{min:a,max:l,step:i=1}={...o,...r},s=Math.abs(i),[c,d]=(0,n.useState)((0,t.clamp)(e,a,l));return[c,{increment:(0,n.useCallback)(()=>d(e=>(0,t.clamp)(e+s,a,l)),[a,l,s]),decrement:(0,n.useCallback)(()=>d(e=>(0,t.clamp)(e-s,a,l)),[a,l,s]),set:(0,n.useCallback)(e=>d((0,t.clamp)(e,a,l)),[a,l]),reset:(0,n.useCallback)(()=>d((0,t.clamp)(e,a,l)),[e,a,l])}]}])},505716,e=>{"use strict";var t=e.i(749218),n=e.i(481178),o=e.i(951254),r=e.i(44091),a=e.i(391466),l=e.i(275519),i=e.i(232471),s=e.i(476273),c=e.i(34515),d=e.i(935769),u={root:"m_6e45937b",loader:"m_e8eb006c",overlay:"m_df587f17"},m=e.i(391398);let p={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,t.getDefaultZIndex)("overlay")},h=(0,n.createVarsResolver)((e,{zIndex:t})=>({root:{"--lo-z-index":t?.toString()}})),f=(0,l.factory)(e=>{let t=(0,r.useProps)("LoadingOverlay",p,e),{classNames:n,className:l,style:f,styles:x,unstyled:g,vars:j,transitionProps:v,loaderProps:w,overlayProps:y,visible:b,zIndex:D,attributes:B,onEnter:C,onEntered:k,onExit:A,onExited:E,...M}=t,S=(0,o.useMantineTheme)(),T=(0,a.useStyles)({name:"LoadingOverlay",classes:u,props:t,className:l,style:f,classNames:n,styles:x,unstyled:g,attributes:B,vars:j,varsResolver:h}),V={...p.overlayProps,...y};return(0,m.jsx)(c.Transition,{transition:"fade",...v,mounted:!!b,onEnter:C,onEntered:k,onExit:A,onExited:E,children:e=>(0,m.jsxs)(i.Box,{...T("root",{style:e}),...M,children:[(0,m.jsx)(d.Loader,{unstyled:g,...w,...T("loader",{className:w?.className,style:w?.style})}),(0,m.jsx)(s.Overlay,{...V,...T("overlay",{className:V?.className,style:V?.style}),darkHidden:!0,unstyled:g,color:y?.color||S.white}),(0,m.jsx)(s.Overlay,{...V,...T("overlay",{className:V?.className,style:V?.style}),lightHidden:!0,unstyled:g,color:y?.color||S.colors.dark[5]})]})})});f.classes=u,f.varsResolver=h,f.displayName="@mantine/core/LoadingOverlay",e.s(["LoadingOverlay",0,f],505716)},645640,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let o=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,76H180V56A52,52,0,0,0,76,56V76H48A20,20,0,0,0,28,96V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V96A20,20,0,0,0,208,76ZM100,56a28,28,0,0,1,56,0V76H100ZM204,204H52V100H204Zm-60-52a16,16,0,1,1-16-16A16,16,0,0,1,144,152Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z",opacity:"0.2"}),t.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80Zm-80,84a12,12,0,1,1,12-12A12,12,0,0,1,128,164Zm32-84H96V56a32,32,0,0,1,64,0Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,82H174V56a46,46,0,0,0-92,0V82H48A14,14,0,0,0,34,96V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V96A14,14,0,0,0,208,82ZM94,56a34,34,0,0,1,68,0V82H94ZM210,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V96a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2Zm-72-56a10,10,0,1,1-10-10A10,10,0,0,1,138,152Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,84H172V56a44,44,0,0,0-88,0V84H48A12,12,0,0,0,36,96V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V96A12,12,0,0,0,208,84ZM92,56a36,36,0,0,1,72,0V84H92ZM212,208a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V96a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-76-56a8,8,0,1,1-8-8A8,8,0,0,1,136,152Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(n.default,{ref:r,...e,weights:o}));r.displayName="LockIcon",e.s(["LockIcon",0,r],645640)},29260,e=>{"use strict";var t=e.i(191788),n=e.i(123895),o=e.i(645640),r=e.i(79897),a=e.i(485108),l=e.i(37541),i=e.i(725695),s=e.i(505716),c=e.i(470743),d=e.i(937389),u=e.i(883364),m=e.i(841209),p=e.i(582498),h=e.i(391398);e.s(["AuthenticationForm",0,function({noShadow:e,noPadding:f,noSubmit:x,style:g}){let[j,v]=(0,t.useState)("register"),[w,y]=(0,t.useState)(!1),[b,D]=(0,t.useState)(null),B=(0,p.useForm)({initialValues:{firstName:"",lastName:"",email:"",password:"",confirmPassword:"",termsOfService:!0}});return(0,h.jsx)(c.Paper,{p:f?0:"lg",shadow:e?"none":"sm",style:{...g,position:"relative",backgroundColor:"var(--mantine-color-body)"},children:(0,h.jsxs)("form",{onSubmit:B.onSubmit(()=>{y(!0),D(null),setTimeout(()=>{y(!1),D("register"===j?"User with this email already exists":"User with this email does not exist")},3e3)}),children:[(0,h.jsx)(s.LoadingOverlay,{visible:w}),"register"===j&&(0,h.jsxs)(i.Group,{grow:!0,children:[(0,h.jsx)(m.TextInput,{"data-autofocus":!0,required:!0,placeholder:"Your first name",label:"First name",...B.getInputProps("firstName")}),(0,h.jsx)(m.TextInput,{required:!0,placeholder:"Your last name",label:"Last name",...B.getInputProps("lastName")})]}),(0,h.jsx)(m.TextInput,{mt:"md",required:!0,placeholder:"Your email",label:"Email",leftSection:(0,h.jsx)(n.AtIcon,{size:16}),...B.getInputProps("email")}),(0,h.jsx)(d.PasswordInput,{mt:"md",required:!0,placeholder:"Password",label:"Password",leftSection:(0,h.jsx)(o.LockIcon,{size:16}),...B.getInputProps("password")}),"register"===j&&(0,h.jsx)(d.PasswordInput,{mt:"md",required:!0,label:"Confirm Password",placeholder:"Confirm password",leftSection:(0,h.jsx)(o.LockIcon,{size:16}),...B.getInputProps("confirmPassword")}),"register"===j&&(0,h.jsx)(l.Checkbox,{mt:"xl",label:"I agree to sell my soul and privacy to this corporation",...B.getInputProps("termsOfService",{type:"checkbox"})}),b&&(0,h.jsx)(u.Text,{c:"red",size:"sm",mt:"sm",children:b}),!x&&(0,h.jsxs)(i.Group,{justify:"space-between",mt:"xl",children:[(0,h.jsx)(r.Anchor,{component:"button",type:"button",c:"dimmed",onClick:()=>{v(e=>"register"===e?"login":"register"),D(null)},size:"sm",children:"register"===j?"Have an account? Login":"Don't have an account? Register"}),(0,h.jsx)(a.Button,{color:"blue",type:"submit",children:"register"===j?"Register":"Login"})]})]})})}])},299593,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let o=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M164.24,100.24,136.48,128l27.76,27.76a6,6,0,1,1-8.48,8.48L128,136.48l-27.76,27.76a6,6,0,0,1-8.48-8.48L119.52,128,91.76,100.24a6,6,0,0,1,8.48-8.48L128,119.52l27.76-27.76a6,6,0,0,1,8.48,8.48ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M162.83,98.83,133.66,128l29.17,29.17a4,4,0,0,1-5.66,5.66L128,133.66,98.83,162.83a4,4,0,0,1-5.66-5.66L122.34,128,93.17,98.83a4,4,0,0,1,5.66-5.66L128,122.34l29.17-29.17a4,4,0,1,1,5.66,5.66ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(n.default,{ref:r,...e,weights:o}));r.displayName="XCircleIcon",e.s(["XCircleIcon",0,r],299593)},323121,e=>{"use strict";var t=e.i(191788);function n(e){let n=e.reduce((e,t)=>({...e,[t]:!1}),{}),[o,r]=(0,t.useState)(n),a=(0,t.useCallback)(e=>{r(t=>({...t,[e]:!0}))},[]),l=(0,t.useCallback)(e=>r(t=>({...t,[e]:!1})),[]),i=(0,t.useCallback)(e=>r(t=>({...t,[e]:!t[e]})),[]);return{state:o,open:a,close:l,closeAll:(0,t.useCallback)(()=>r(n),[]),toggle:i,register:(0,t.useCallback)(e=>({opened:o[e],onClose:()=>l(e),stackId:e}),[o])}}e.s(["useDrawersStack",0,n,"useModalsStack",0,n])},611615,e=>{"use strict";var t=e.i(648863),n=e.i(191788),o=e.i(402638),r=e.i(671640),a=e.i(883364),l=e.i(391398);let i={type:"configurator",component:function(e){let[t,i]=(0,n.useState)("#C5D899");return(0,l.jsxs)(r.Stack,{align:"center",children:[(0,l.jsx)(o.ColorPicker,{value:t,onChange:i,...e}),(0,l.jsx)(a.Text,{children:t})]})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`,controls:[{prop:"format",type:"select",initialValue:"hex",libraryValue:"hex",data:[{value:"hex",label:"HEX"},{value:"hexa",label:"HEXA"},{value:"rgb",label:"RGB"},{value:"rgba",label:"RGBA"},{value:"hsl",label:"HSL"},{value:"hsla",label:"HSLA"}]}]};var s=e.i(922);let c={type:"configurator",component:function(e){return(0,l.jsx)(o.ColorPicker,{mx:"auto",format:"rgba",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(s.DEFAULT_THEME.colors).map(e=>s.DEFAULT_THEME.colors[e][6]),...e})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker{{props}} />;
}
`,controls:[{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"}]},d={type:"configurator",component:function(e){return(0,l.jsx)(o.ColorPicker,{mx:"auto",format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(s.DEFAULT_THEME.colors).map(e=>s.DEFAULT_THEME.colors[e][6]),...e})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker{{props}} format="hex" swatches={[${Object.keys(s.DEFAULT_THEME.colors).map(e=>`'${s.DEFAULT_THEME.colors[e][6]}'`).join(", ")}]} />
  );
}
`,controls:[{prop:"swatchesPerRow",type:"number",initialValue:7,libraryValue:7,min:5,max:12}]},u={type:"code",component:function(){return(0,l.jsx)(r.Stack,{align:"center",children:(0,l.jsx)(o.ColorPicker,{format:"hex",defaultValue:"rgba(50, 151, 194, 1)",swatches:Object.keys(s.DEFAULT_THEME.colors).map(e=>s.DEFAULT_THEME.colors[e][6])})})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker
      format="hex"
      swatches={[${Object.keys(s.DEFAULT_THEME.colors).map(e=>`'${s.DEFAULT_THEME.colors[e][6]}'`).join(", ")}]}
    />
  );
}
`},m={type:"code",component:function(){let[e,t]=(0,n.useState)("#fff");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.ColorPicker,{format:"hex",value:e,onChange:t,withPicker:!1,fullWidth:!0,swatches:[...s.DEFAULT_THEME.colors.red.slice(0,7),...s.DEFAULT_THEME.colors.green.slice(0,7),...s.DEFAULT_THEME.colors.blue.slice(0,7)]}),(0,l.jsx)(a.Text,{ta:"center",mt:5,children:e})]})},code:`
import { useState } from 'react';
import { DEFAULT_THEME, ColorPicker, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState('#fff');

  return (
    <>
      <ColorPicker
        format="hex"
        value={value}
        onChange={onChange}
        withPicker={false}
        fullWidth
        swatches={[
          ...DEFAULT_THEME.colors.red.slice(0, 7),
          ...DEFAULT_THEME.colors.green.slice(0, 7),
          ...DEFAULT_THEME.colors.blue.slice(0, 7),
        ]}
      />

      <Text>{value}</Text>
    </>
  );
}
`,centered:!0,maxWidth:220},p={type:"code",component:function(){let[e,t]=(0,n.useState)("rgba(47, 119, 150, 0.7)");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.ColorPicker,{format:"rgba",value:e,onChange:t}),(0,l.jsx)(a.Text,{mt:"md",children:e})]})},code:`
import { useState } from 'react';
import { ColorPicker, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');

  return (
    <>
      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>
    </>
  );
}
`,centered:!0},h={type:"code",component:function(){return(0,l.jsx)(o.ColorPicker,{fullWidth:!0,size:"lg",format:"rgba"})},code:`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return <ColorPicker fullWidth size="lg" format="rgba" />;
}
`};var f=e.i(39683);let x=`
import { ColorPicker } from '@mantine/core';

function Demo() {
  return (
    <ColorPicker format="rgba" size="lg"{{props}} swatches={['#25262b', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5']} />
  );
}
`,g={type:"styles-api",data:f.ColorPickerStylesApi,component:function(e){return(0,l.jsx)(o.ColorPicker,{size:"lg",format:"rgba",swatches:["#25262b","#868e96","#fa5252","#e64980","#be4bdb","#7950f2","#4c6ef5"],...e})},centered:!0,code:x};var j=e.i(829453);let v={type:"code",component:function(){let[e,t]=(0,n.useState)(.55);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.Text,{children:["Alpha value: ",e]}),(0,l.jsx)(j.AlphaSlider,{color:"#1c7ed6",value:e,onChange:t})]})},code:`
import { useState } from 'react';
import { AlphaSlider, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState(0.55);

  return (
    <>
      <Text>Alpha value: {value}</Text>
      <AlphaSlider color="#1c7ed6" value={value} onChange={onChange} />
    </>
  );
}
`,centered:!0,maxWidth:300};var w=e.i(637148);let y={type:"code",component:function(){let[e,t]=(0,n.useState)(250);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.Text,{children:["Hue value: ",e]}),(0,l.jsx)(w.HueSlider,{value:e,onChange:t})]})},code:`
import { useState } from 'react';
import { HueSlider, Text } from '@mantine/core';

function Demo() {
  const [value, onChange] = useState(250);

  return (
    <>
      <Text>Hue value: {value}</Text>
      <HueSlider value={value} onChange={onChange} />
    </>
  );
}
`,centered:!0,maxWidth:300};var b=(0,t.__exportAll)({alphaSlider:()=>v,formatsConfigurator:()=>i,fullWidth:()=>h,hueSlider:()=>y,sizeConfigurator:()=>c,stylesApi:()=>g,swatches:()=>u,swatchesConfigurator:()=>d,swatchesOnly:()=>m,usage:()=>p});e.s(["ColorPickerDemos",0,b],611615)},191830,e=>{"use strict";var t=e.i(749218),n=e.i(44091),o=e.i(275519),r={root:"m_f11b401e",header:"m_5a7c2c9",content:"m_b8a05bbd",inner:"m_31cd769a"},a=e.i(477777);let[l,i]=(0,e.i(386179).createSafeContext)("Drawer component was not found in tree");var s=e.i(391398);let c=(0,o.factory)(e=>{let{classNames:t,className:o,style:r,styles:l,vars:c,...d}=(0,n.useProps)("DrawerBody",null,e);return(0,s.jsx)(a.ModalBaseBody,{...i().getStyles("body",{classNames:t,style:r,styles:l,className:o}),...d})});c.classes=r,c.displayName="@mantine/core/DrawerBody";var d=e.i(430731);let u=(0,o.factory)(e=>{let{classNames:t,className:o,style:r,styles:a,vars:l,...c}=(0,n.useProps)("DrawerCloseButton",null,e);return(0,s.jsx)(d.ModalBaseCloseButton,{...i().getStyles("close",{classNames:t,style:r,styles:a,className:o}),...c})});u.classes=r,u.displayName="@mantine/core/DrawerCloseButton";var m=e.i(637245),p=e.i(225147);let h=(0,o.factory)(e=>{let{classNames:t,className:o,style:r,styles:a,vars:l,children:c,radius:d,__hidden:u,...h}=(0,n.useProps)("DrawerContent",null,e),f=i(),x=f.scrollAreaComponent||p.NativeScrollArea;return(0,s.jsx)(m.ModalBaseContent,{...f.getStyles("content",{className:o,style:r,styles:a,classNames:t}),innerProps:f.getStyles("inner",{className:o,style:r,styles:a,classNames:t}),...h,radius:d||f.radius||0,"data-hidden":u||void 0,children:(0,s.jsx)(x,{style:{height:"calc(100vh - var(--drawer-offset) * 2)"},children:c})})});h.classes=r,h.displayName="@mantine/core/DrawerContent";var f=e.i(811590);let x=(0,o.factory)(e=>{let{classNames:t,className:o,style:r,styles:a,vars:l,...c}=(0,n.useProps)("DrawerHeader",null,e);return(0,s.jsx)(f.ModalBaseHeader,{...i().getStyles("header",{classNames:t,style:r,styles:a,className:o}),...c})});x.classes=r,x.displayName="@mantine/core/DrawerHeader";var g=e.i(426611);let j=(0,o.factory)(e=>{let{classNames:t,className:o,style:r,styles:a,vars:l,...c}=(0,n.useProps)("DrawerOverlay",null,e);return(0,s.jsx)(g.ModalBaseOverlay,{...i().getStyles("overlay",{classNames:t,style:r,styles:a,className:o}),...c})});j.classes=r,j.displayName="@mantine/core/DrawerOverlay";var v=e.i(779177),w=e.i(433512),y=e.i(481178),b=e.i(391466),D=e.i(323283),B=e.i(19300),C=e.i(32044);let k={top:"slide-down",bottom:"slide-up",left:"slide-right",right:"slide-left"},A={top:"slide-down",bottom:"slide-up",right:"slide-right",left:"slide-left"},E={closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:(0,t.getDefaultZIndex)("modal"),position:"left"},M=(0,y.createVarsResolver)((e,{position:t,size:n,offset:o})=>({root:{"--drawer-size":(0,w.getSize)(n,"drawer-size"),"--drawer-flex":function(e){if("top"===e||"bottom"===e)return"0 0 calc(100% - var(--drawer-offset, 0rem) * 2)"}(t),"--drawer-height":"left"===t||"right"===t?void 0:"var(--drawer-size)","--drawer-align":function(e){switch(e){case"top":return"flex-start";case"bottom":return"flex-end";default:return}}(t),"--drawer-justify":"right"===t?"flex-end":void 0,"--drawer-offset":(0,v.rem)(o)}})),S=(0,o.factory)(e=>{let t=(0,n.useProps)("DrawerRoot",E,e),{classNames:o,className:a,style:i,styles:c,unstyled:d,vars:u,scrollAreaComponent:m,position:p,transitionProps:h,radius:f,attributes:x,...g}=t,{dir:j}=(0,D.useDirection)(),v=(0,b.useStyles)({name:"Drawer",classes:r,props:t,className:a,style:i,classNames:o,styles:c,unstyled:d,attributes:x,vars:u,varsResolver:M}),w=("rtl"===j?A:k)[p];return(0,s.jsx)(l,{value:{scrollAreaComponent:m,getStyles:v,radius:f},children:(0,s.jsx)(C.ModalBase,{...v("root"),transitionProps:{transition:w,...h},"data-offset-scrollbars":m===B.ScrollArea.Autosize||void 0,unstyled:d,...g})})});S.classes=r,S.varsResolver=M,S.displayName="@mantine/core/DrawerRoot";var T=e.i(191788);let V=(0,T.createContext)(null);function I({children:e}){let[n,o]=(0,T.useState)([]),[r,a]=(0,T.useState)((0,t.getDefaultZIndex)("modal"));return(0,s.jsx)(V,{value:{stack:n,addModal:(e,t)=>{o(t=>[...new Set([...t,e])]),a(e=>"number"==typeof t&&"number"==typeof e?Math.max(e,t):e)},removeModal:e=>o(t=>t.filter(t=>t!==e)),getZIndex:e=>`calc(${r} + ${n.indexOf(e)} + 1)`,currentId:n[n.length-1],maxZIndex:r},children:e})}I.displayName="@mantine/core/DrawerStack";var F=e.i(446817);let H=(0,o.factory)(e=>{let{classNames:t,className:o,style:r,styles:a,vars:l,...c}=(0,n.useProps)("DrawerTitle",null,e);return(0,s.jsx)(F.ModalBaseTitle,{...i().getStyles("title",{classNames:t,style:r,styles:a,className:o}),...c})});H.classes=r,H.displayName="@mantine/core/DrawerTitle";let Z={closeOnClickOutside:!0,withinPortal:!0,lockScroll:!0,trapFocus:!0,returnFocus:!0,closeOnEscape:!0,keepMounted:!1,zIndex:(0,t.getDefaultZIndex)("modal"),withOverlay:!0,withCloseButton:!0},P=(0,o.factory)(e=>{let{title:o,withOverlay:r,overlayProps:a,withCloseButton:l,closeButtonProps:i,children:d,opened:m,stackId:p,zIndex:f,...g}=(0,n.useProps)("Drawer",Z,e),v=(0,T.use)(V),w=!!o||l,y=v&&p?{closeOnEscape:v.currentId===p,trapFocus:v.currentId===p,zIndex:v.getZIndex(p)}:{},b=!1!==r&&(p&&v?v.currentId===p:m);return(0,T.useEffect)(()=>{v&&p&&(m?v.addModal(p,f||(0,t.getDefaultZIndex)("modal")):v.removeModal(p))},[m,p,f]),(0,s.jsxs)(S,{opened:m,zIndex:v&&p?v.getZIndex(p):f,...g,...y,children:[r&&(0,s.jsx)(j,{visible:b,transitionProps:v&&p?{duration:0}:void 0,...a}),(0,s.jsxs)(h,{__hidden:!!v&&!!p&&!!m&&p!==v.currentId,children:[w&&(0,s.jsxs)(x,{children:[o&&(0,s.jsx)(H,{children:o}),l&&(0,s.jsx)(u,{...i})]}),(0,s.jsx)(c,{children:d})]})]})});P.classes=r,P.displayName="@mantine/core/Drawer",P.Root=S,P.Overlay=j,P.Content=h,P.Body=c,P.Header=x,P.Title=H,P.CloseButton=u,P.Stack=I,e.s(["Drawer",0,P],191830)},613688,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let o=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M144,96a16,16,0,1,1,16,16A16,16,0,0,1,144,96Zm92-40V200a20,20,0,0,1-20,20H40a20,20,0,0,1-20-20V56A20,20,0,0,1,40,36H216A20,20,0,0,1,236,56ZM44,60v79.72l33.86-33.86a20,20,0,0,1,28.28,0L147.31,147l17.18-17.17a20,20,0,0,1,28.28,0L212,149.09V60Zm0,136H162.34L92,125.66l-48,48Zm168,0V183l-33.37-33.37L164.28,164l32,32Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,56V178.06l-39.72-39.72a8,8,0,0,0-11.31,0L147.31,164,97.66,114.34a8,8,0,0,0-11.32,0L32,168.69V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z",opacity:"0.2"}),t.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM156,88a12,12,0,1,1-12,12A12,12,0,0,1,156,88Zm60,112H40V160.69l46.34-46.35a8,8,0,0,1,11.32,0h0L165,181.66a8,8,0,0,0,11.32-11.32l-17.66-17.65L173,138.34a8,8,0,0,1,11.31,0L216,170.07V200Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,42H40A14,14,0,0,0,26,56V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V56A14,14,0,0,0,216,42ZM40,54H216a2,2,0,0,1,2,2V163.57L188.53,134.1a14,14,0,0,0-19.8,0l-21.42,21.42L101.9,110.1a14,14,0,0,0-19.8,0L38,154.2V56A2,2,0,0,1,40,54ZM38,200V171.17l52.58-52.58a2,2,0,0,1,2.84,0L176.83,202H40A2,2,0,0,1,38,200Zm178,2H193.8l-38-38,21.41-21.42a2,2,0,0,1,2.83,0l38,38V200A2,2,0,0,1,216,202ZM146,100a10,10,0,1,1,10,10A10,10,0,0,1,146,100Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216,44H40A12,12,0,0,0,28,56V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V56A12,12,0,0,0,216,44ZM40,52H216a4,4,0,0,1,4,4V168.4l-32.89-32.89a12,12,0,0,0-17,0l-22.83,22.83-46.82-46.83a12,12,0,0,0-17,0L36,159V56A4,4,0,0,1,40,52ZM36,200V170.34l53.17-53.17a4,4,0,0,1,5.66,0L181.66,204H40A4,4,0,0,1,36,200Zm180,4H193l-40-40,22.83-22.83a4,4,0,0,1,5.66,0L220,179.71V200A4,4,0,0,1,216,204ZM148,100a8,8,0,1,1,8,8A8,8,0,0,1,148,100Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(n.default,{ref:r,...e,weights:o}));r.displayName="ImageIcon",e.s(["ImageIcon",0,r],613688)},577830,e=>{"use strict";e.s(["gradientControls",0,[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]])},153338,e=>{"use strict";e.s(["interactiveVariantsControl",0,{type:"select",prop:"variant",data:["default","filled","light","outline","subtle","transparent","white"],initialValue:"filled",libraryValue:"__none__"},"staticVariantsControl",0,{type:"select",prop:"variant",data:["filled","light","outline","transparent","white","default"],initialValue:"filled",libraryValue:"__none__"}])},617576,e=>{"use strict";var t=e.i(191788),n=e.i(171481);let o=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216.49,168.49a12,12,0,0,1-17,0L128,97,56.49,168.49a12,12,0,0,1-17-17l80-80a12,12,0,0,1,17,0l80,80A12,12,0,0,1,216.49,168.49Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,160H48l80-80Z",opacity:"0.2"}),t.createElement("path",{d:"M213.66,154.34l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,48,168H208a8,8,0,0,0,5.66-13.66ZM67.31,152,128,91.31,188.69,152Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M215.39,163.06A8,8,0,0,1,208,168H48a8,8,0,0,1-5.66-13.66l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,215.39,163.06Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M212.24,164.24a6,6,0,0,1-8.48,0L128,88.49,52.24,164.24a6,6,0,0,1-8.48-8.48l80-80a6,6,0,0,1,8.48,0l80,80A6,6,0,0,1,212.24,164.24Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,165.66a8,8,0,0,1-11.32,0L128,91.31,53.66,165.66a8,8,0,0,1-11.32-11.32l80-80a8,8,0,0,1,11.32,0l80,80A8,8,0,0,1,213.66,165.66Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M210.83,162.83a4,4,0,0,1-5.66,0L128,85.66,50.83,162.83a4,4,0,0,1-5.66-5.66l80-80a4,4,0,0,1,5.66,0l80,80A4,4,0,0,1,210.83,162.83Z"}))]]),r=t.forwardRef((e,r)=>t.createElement(n.default,{ref:r,...e,weights:o}));r.displayName="CaretUpIcon",e.s(["CaretUpIcon",0,r],617576)},265334,e=>{"use strict";var t=e.i(648863),n=e.i(153338),o=e.i(485108),r=e.i(391398);let a={type:"configurator",component:function(e){return(0,r.jsx)(o.Button,{...e,children:"Button"})},code:`
import { Button } from '@mantine/core';

function Demo() {
  return <Button{{props}}>Button</Button>;
}
`,centered:!0,controls:[n.interactiveVariantsControl,{type:"color",prop:"color",initialValue:"blue",libraryValue:"blue"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"}]},l={type:"code",component:function(){return(0,r.jsx)(o.Button,{disabled:!0,children:"Disabled button"})},centered:!0,code:`
import { Button } from '@mantine/core';

function Demo() {
  return <Button disabled>Disabled button</Button>;
}
`},i={type:"code",component:function(){return(0,r.jsx)(o.Button,{className:"m_13d58bb2",disabled:!0,children:"Disabled with styles"})},centered:!0,code:[{fileName:"Demo.module.css",code:`
.button {
  &:disabled,
  &[data-disabled] {
    border-color: light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
    background-color: transparent;
  }
}
`,language:"scss"},{fileName:"Demo.tsx",code:`
import { Button } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Button className={classes.button} disabled>
      Disabled with styles
    </Button>
  );
}
`,language:"tsx"}]};var s=e.i(725695);let c={type:"configurator",component:function(e){return(0,r.jsxs)(s.Group,{justify:"center",children:[(0,r.jsxs)(o.Button,{size:e.size,children:["Regular ",e.size]}),(0,r.jsxs)(o.Button,{size:`compact-${e.size}`,children:["Compact ",e.size]})]})},code:e=>`
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Button size="${e.size}">Regular ${e.size}</Button>
      <Button size="compact-${e.size}">Compact ${e.size}</Button>
    </Group>
  );
}
`,centered:!0,controls:[{type:"size",prop:"size",initialValue:"md",libraryValue:"__none__"}]};var d=e.i(502325),u=e.i(541772);let m={type:"code",component:function(){let[e,{toggle:t}]=(0,u.useDisclosure)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.Group,{children:[(0,r.jsx)(o.Button,{loading:e,children:"Filled button"}),(0,r.jsx)(o.Button,{variant:"light",loading:e,children:"Light button"}),(0,r.jsx)(o.Button,{variant:"outline",loading:e,children:"Outline button"})]}),(0,r.jsx)(d.Switch,{checked:e,onChange:t,label:"Loading state",mt:"md"})]})},centered:!0,code:`
import { Button, Group, Switch } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [loading, { toggle }] = useDisclosure();
  return (
    <>
      <Group>
        <Button loading={loading}>Filled button</Button>
        <Button variant="light" loading={loading}>
          Light button
        </Button>
        <Button variant="outline" loading={loading}>
          Outline button
        </Button>
      </Group>

      <Switch checked={loading} onChange={toggle} label="Loading state" mt="md" />
    </>
  );
}
`},p={type:"code",component:function(){return(0,r.jsx)(o.Button,{loading:!0,loaderProps:{type:"dots"},children:"Loading button"})},centered:!0,code:`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button loading loaderProps={{ type: 'dots' }}>
      Loading button
    </Button>
  );
}
`},h={type:"configurator",component:function(e){return(0,r.jsx)(o.Button,{variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree},children:"Gradient button"})},code:e=>`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button
      variant="gradient"
      gradient={{ from: '${e.gradientFrom}', to: '${e.gradientTo}', deg: ${e.gradientDegree} }}
    >
      Gradient button
    </Button>
  );
}
`,centered:!0,controls:e.i(577830).gradientControls},f={type:"code",component:function(){return(0,r.jsx)(o.Button,{fullWidth:!0,children:"Full width button"})},code:`
import { Button } from '@mantine/core';

function Demo() {
  return <Button fullWidth>Full width button</Button>;
}
`},x={type:"configurator",component:function(e){return(0,r.jsxs)(o.Button.Group,{...e,children:[(0,r.jsx)(o.Button,{variant:"default",children:"First"}),(0,r.jsx)(o.Button,{variant:"default",children:"Second"}),(0,r.jsx)(o.Button,{variant:"default",children:"Third"})]})},code:`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button.Group{{props}}>
      <Button variant="default">First</Button>
      <Button variant="default">Second</Button>
      <Button variant="default">Third</Button>
    </Button.Group>
  );
}
`,centered:!0,controls:[{type:"segmented",prop:"orientation",data:["horizontal","vertical"],initialValue:"horizontal",libraryValue:"horizontal"}]};var g=e.i(431868);let j={type:"code",component:function(){return(0,r.jsx)(g.Tooltip,{label:"Tooltip for disabled button",children:(0,r.jsx)(o.Button,{"data-disabled":!0,onClick:e=>e.preventDefault(),children:"Disabled button with tooltip"})})},centered:!0,code:`
import { Button, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <Button data-disabled onClick={(event) => event.preventDefault()}>
        Disabled button with tooltip
      </Button>
    </Tooltip>
  );
}
`};var v=e.i(951254),w=e.i(530514);let y=`
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
`,b=`
.root {
  &[data-variant='danger'] {
    background-color: var(--mantine-color-red-9);
    color: var(--mantine-color-red-0);
  }

  &[data-variant='primary'] {
    background: linear-gradient(45deg, #4b6cb7 10%, #253b67 90%);
    color: var(--mantine-color-white);
    border-width: 0;
  }
}
`,D=(0,w.createTheme)({components:{Button:o.Button.extend({classNames:{root:"m_3abb4e8a"}})}}),B={type:"code",component:function(){return(0,r.jsx)(v.MantineThemeProvider,{theme:D,children:(0,r.jsxs)(s.Group,{children:[(0,r.jsx)(o.Button,{variant:"danger",children:"Danger variant"}),(0,r.jsx)(o.Button,{variant:"primary",children:"Primary variant"})]})})},centered:!0,code:[{fileName:"Demo.tsx",code:y,language:"tsx"},{fileName:"Demo.module.css",code:b,language:"scss"}]};var C=e.i(858508),k=e.i(191788),A=e.i(171481);let E=new Map([["bold",k.createElement(k.Fragment,null,k.createElement("path",{d:"M228,144v64a12,12,0,0,1-12,12H40a12,12,0,0,1-12-12V144a12,12,0,0,1,24,0v52H204V144a12,12,0,0,1,24,0Zm-108.49,8.49a12,12,0,0,0,17,0l40-40a12,12,0,0,0-17-17L140,115V32a12,12,0,0,0-24,0v83L96.49,95.51a12,12,0,0,0-17,17Z"}))],["duotone",k.createElement(k.Fragment,null,k.createElement("path",{d:"M216,48V208H40V48A16,16,0,0,1,56,32H200A16,16,0,0,1,216,48Z",opacity:"0.2"}),k.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"}))],["fill",k.createElement(k.Fragment,null,k.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40A8,8,0,0,0,168,96H136V32a8,8,0,0,0-16,0V96H88a8,8,0,0,0-5.66,13.66Z"}))],["light",k.createElement(k.Fragment,null,k.createElement("path",{d:"M222,144v64a6,6,0,0,1-6,6H40a6,6,0,0,1-6-6V144a6,6,0,0,1,12,0v58H210V144a6,6,0,0,1,12,0Zm-98.24,4.24a6,6,0,0,0,8.48,0l40-40a6,6,0,0,0-8.48-8.48L134,129.51V32a6,6,0,0,0-12,0v97.51L92.24,99.76a6,6,0,0,0-8.48,8.48Z"}))],["regular",k.createElement(k.Fragment,null,k.createElement("path",{d:"M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z"}))],["thin",k.createElement(k.Fragment,null,k.createElement("path",{d:"M220,144v64a4,4,0,0,1-4,4H40a4,4,0,0,1-4-4V144a4,4,0,0,1,8,0v60H212V144a4,4,0,0,1,8,0Zm-94.83,2.83a4,4,0,0,0,5.66,0l40-40a4,4,0,1,0-5.66-5.66L132,134.34V32a4,4,0,0,0-8,0V134.34L90.83,101.17a4,4,0,0,0-5.66,5.66Z"}))]]),M=k.forwardRef((e,t)=>k.createElement(A.default,{ref:t,...e,weights:E}));M.displayName="DownloadSimpleIcon";var S=e.i(613688);let T={type:"code",component:function(){return(0,r.jsxs)(s.Group,{justify:"center",children:[(0,r.jsx)(o.Button,{leftSection:(0,r.jsx)(S.ImageIcon,{size:14}),variant:"default",children:"Gallery"}),(0,r.jsx)(o.Button,{rightSection:(0,r.jsx)(M,{size:14}),children:"Download"}),(0,r.jsx)(o.Button,{variant:"light",leftSection:(0,r.jsx)(S.ImageIcon,{size:14}),rightSection:(0,r.jsx)(C.ArrowRightIcon,{size:14,className:"mantine-rotate-rtl"}),children:"Visit gallery"})]})},code:`
import { Group, Button } from '@mantine/core';
import { ImageIcon, DownloadSimpleIcon, ArrowRightIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Group justify="center">
      <Button leftSection={<ImageIcon size={14} />} variant="default">
        Gallery
      </Button>

      <Button rightSection={<DownloadSimpleIcon size={14} />}>Download</Button>

      <Button
        variant="light"
        leftSection={<ImageIcon size={14} />}
        rightSection={<ArrowRightIcon size={14} />}
      >
        Visit gallery
      </Button>
    </Group>
  );
}
`},V={type:"configurator",component:function(e){let t=(0,r.jsx)(S.ImageIcon,{size:14});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Button,{fullWidth:!0,leftSection:t,rightSection:t,variant:"default",...e,children:"Button label"}),(0,r.jsx)(o.Button,{fullWidth:!0,leftSection:t,variant:"default",mt:"md",...e,children:"Button label"}),(0,r.jsx)(o.Button,{fullWidth:!0,rightSection:t,variant:"default",mt:"md",...e,children:"Button label"}),(0,r.jsx)(o.Button,{fullWidth:!0,rightSection:t,leftSection:(0,r.jsx)("span",{}),variant:"default",mt:"md",...e,children:"Button label"})]})},code:e=>`
import { Button } from '@mantine/core';
import { ImageIcon } from '@phosphor-icons/react';

function Demo() {
  const icon = <ImageIcon size={14} />;
  return (
    <>
      <Button justify="${e.justify}" fullWidth leftSection={icon} rightSection={icon} variant="default">
        Button label
      </Button>

      <Button justify="${e.justify}" fullWidth leftSection={icon} variant="default" mt="md">
        Button label
      </Button>

      <Button justify="${e.justify}" fullWidth rightSection={icon} variant="default" mt="md">
        Button label
      </Button>

      <Button
        justify="${e.justify}"
        fullWidth
        rightSection={icon}
        leftSection={<span />}
        variant="default"
        mt="md"
      >
        Button label
      </Button>
    </>
  );
}
`,controls:[{type:"segmented",prop:"justify",data:["center","space-between"],initialValue:"center",libraryValue:"__none__"}]},I={type:"code",component:function(){return(0,r.jsx)(o.Button,{component:"a",href:"https://mantine.dev","data-disabled":!0,onClick:e=>e.preventDefault(),children:"Disabled link"})},centered:!0,code:`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button
      component="a"
      href="https://mantine.dev"
      data-disabled
      onClick={(event) => event.preventDefault()}
    >
      Disabled link
    </Button>
  );
}
`};var F=e.i(123895),H=e.i(490965);let Z=`
import { Button } from '@mantine/core';
import { AtIcon } from '@phosphor-icons/react';

function Demo() {
  return <Button{{props}} leftSection={<AtIcon size={16} />}>Your email</Button>;
}
`,P={type:"styles-api",data:H.ButtonStylesApi,component:function(e){return(0,r.jsx)(o.Button,{leftSection:(0,r.jsx)(F.AtIcon,{size:16}),...e,children:"Your email"})},code:Z,centered:!0},L={type:"code",component:function(){return(0,r.jsxs)(s.Group,{children:[(0,r.jsx)(o.Button,{color:"lime.4",children:"Default"}),(0,r.jsx)(o.Button,{color:"lime.4",autoContrast:!0,children:"Auto contrast"})]})},code:`
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Button color="lime.4">Default</Button>
      <Button color="lime.4" autoContrast>
        Auto contrast
      </Button>
    </Group>
  );
}
`,centered:!0};var z=e.i(931882),_=e.i(617576),O=e.i(692385);let N={type:"code",component:function(){let[e,{increment:t,decrement:n}]=(0,O.useCounter)(135,{min:0});return(0,r.jsxs)(o.Button.Group,{children:[(0,r.jsx)(o.Button,{variant:"default",onClick:n,children:(0,r.jsx)(z.CaretDownIcon,{color:"var(--mantine-color-red-text)"})}),(0,r.jsx)(o.Button.GroupSection,{variant:"default",bg:"var(--mantine-color-body)",miw:80,children:e}),(0,r.jsx)(o.Button,{variant:"default",onClick:t,children:(0,r.jsx)(_.CaretUpIcon,{color:"var(--mantine-color-teal-text)"})})]})},code:`
import { CaretDownIcon, CaretUpIcon } from '@phosphor-icons/react';
import { Button } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

function Demo() {
  const [value, { increment, decrement }] = useCounter(135, { min: 0 });

  return (
    <Button.Group>
      <Button variant="default" onClick={decrement}>
        <CaretDownIcon color="var(--mantine-color-red-text)" />
      </Button>
      <Button.GroupSection variant="default" bg="var(--mantine-color-body)" miw={80}>
        {value}
      </Button.GroupSection>
      <Button variant="default" onClick={increment}>
        <CaretUpIcon color="var(--mantine-color-teal-text)" />
      </Button>
    </Button.Group>
  );
}
`,centered:!0};var G=(0,t.__exportAll)({autoContrast:()=>L,compact:()=>c,configurator:()=>a,customVariant:()=>B,disabled:()=>l,disabledLink:()=>I,disabledStyles:()=>i,disabledTooltip:()=>j,fullWidth:()=>f,gradient:()=>h,group:()=>x,groupSection:()=>N,loaderProps:()=>p,loading:()=>m,sections:()=>T,sectionsJustify:()=>V,stylesApi:()=>P});e.s(["ButtonDemos",0,G],265334)},231245,e=>{"use strict";var t=e.i(648863),n=e.i(29260),o=e.i(485108),r=e.i(191830),a=e.i(391398),l=e.i(541772);let i={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,l.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Drawer,{opened:e,onClose:i,title:"Authentication",children:(0,a.jsx)(n.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,a.jsx)(o.Button,{variant:"default",onClick:t,children:"Open Drawer"})]})}};var s=e.i(191788),c=e.i(725695);let d={type:"code",component:function(){let[e,t]=(0,s.useState)(!1),[n,l]=(0,s.useState)("top"),i=e=>{l(e),t(!0)};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Drawer,{opened:e,onClose:()=>t(!1),padding:"md",position:n,withCloseButton:!1,children:"Press escape to close the drawer"}),(0,a.jsxs)(c.Group,{justify:"center",children:[(0,a.jsx)(o.Button,{variant:"default",onClick:()=>i("left"),children:"Left"}),(0,a.jsx)(o.Button,{variant:"default",onClick:()=>i("right"),children:"Right"}),(0,a.jsx)(o.Button,{variant:"default",onClick:()=>i("top"),children:"Top"}),(0,a.jsx)(o.Button,{variant:"default",onClick:()=>i("bottom"),children:"Bottom"})]})]})}},u={type:"code",component:function(){let[e,t]=(0,s.useState)(!1),[n,l]=(0,s.useState)("top"),i=["xs","sm","md","lg","xl","100%","40rem","25%"].map(e=>(0,a.jsx)(o.Button,{variant:"default",onClick:()=>{l(e),t(!0)},children:e},e));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Drawer,{opened:e,onClose:()=>t(!1),padding:"md",size:n,withCloseButton:!1,children:"Press escape to close the drawer"}),(0,a.jsx)(c.Group,{justify:"center",children:i})]})}},m={type:"code",code:`
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

`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,l.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Drawer,{opened:e,onClose:i,title:"Authentication",transitionProps:{transition:"rotate-left",duration:150,timingFunction:"linear"},children:(0,a.jsx)(n.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,a.jsx)(o.Button,{variant:"default",onClick:t,children:"Open Drawer"})]})}},p={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,l.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Drawer,{opened:e,onClose:i,title:"Authentication",overlayProps:{backgroundOpacity:.5,blur:4},children:(0,a.jsx)(n.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,a.jsx)(o.Button,{variant:"default",onClick:t,children:"Open Drawer"})]})}},h={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,l.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.Drawer.Root,{opened:e,onClose:n,children:[(0,a.jsx)(r.Drawer.Overlay,{}),(0,a.jsxs)(r.Drawer.Content,{children:[(0,a.jsxs)(r.Drawer.Header,{children:[(0,a.jsx)(r.Drawer.Title,{children:"Drawer title"}),(0,a.jsx)(r.Drawer.CloseButton,{})]}),(0,a.jsx)(r.Drawer.Body,{children:"Drawer content"})]})]}),(0,a.jsx)(o.Button,{variant:"default",onClick:t,children:"Open Drawer"})]})}},f={type:"code",code:`
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

`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,l.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Drawer,{opened:e,onClose:n,withCloseButton:!1,children:"Drawer without header, press escape or click on overlay to close"}),(0,a.jsx)(o.Button,{variant:"default",onClick:t,children:"Open Drawer"})]})}};var x=e.i(841209);let g={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,l.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.Drawer,{opened:e,onClose:n,title:"Focus demo",children:[(0,a.jsx)(x.TextInput,{label:"First input",placeholder:"First input"}),(0,a.jsx)(x.TextInput,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,a.jsx)(o.Button,{variant:"default",onClick:t,children:"Open Drawer"})]})}};var j=e.i(19300);let v={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,l.useDisclosure)(!1),i=Array(100).fill(0).map((e,t)=>(0,a.jsx)("p",{children:"Drawer with scroll"},t));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Drawer,{opened:e,onClose:n,title:"Header is sticky",scrollAreaComponent:j.ScrollArea.Autosize,children:i}),(0,a.jsx)(o.Button,{variant:"default",onClick:t,children:"Open Drawer"})]})}},w={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,l.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Drawer,{opened:e,onClose:n,title:"Header is sticky",children:Array(100).fill(0).map((e,t)=>(0,a.jsx)("p",{children:"Drawer with scroll"},t))}),(0,a.jsx)(o.Button,{variant:"default",onClick:t,children:"Open Drawer"})]})}},y={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,l.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Drawer,{offset:8,radius:"md",opened:e,onClose:i,title:"Authentication",children:(0,a.jsx)(n.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,a.jsx)(o.Button,{variant:"default",onClick:t,children:"Open Drawer"})]})}};var b=e.i(299593);let D={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:i}]=(0,l.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Drawer,{opened:e,onClose:i,title:"Authentication",closeButtonProps:{icon:(0,a.jsx)(b.XCircleIcon,{size:20})},children:(0,a.jsx)(n.AuthenticationForm,{noShadow:!0,noPadding:!0})}),(0,a.jsx)(o.Button,{variant:"default",onClick:t,children:"Open Drawer"})]})}};var B=e.i(22630);let C={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:n}]=(0,l.useDisclosure)(!1);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.Drawer,{opened:e,onClose:n,title:"Focus demo",children:[(0,a.jsx)(B.FocusTrap.InitialFocus,{}),(0,a.jsx)(x.TextInput,{label:"First input",placeholder:"First input"}),(0,a.jsx)(x.TextInput,{"data-autofocus":!0,label:"Input with initial focus",placeholder:"It has data-autofocus attribute",mt:"md"})]}),(0,a.jsx)(o.Button,{variant:"default",onClick:t,children:"Open Drawer"})]})}};var k=e.i(323121);let A={type:"code",code:`
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
`,centered:!0,component:function(){let e=(0,k.useDrawersStack)(["delete-page","confirm-action","really-confirm-action"]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.Drawer.Stack,{children:[(0,a.jsxs)(r.Drawer,{...e.register("delete-page"),title:"Delete this page?",children:["Are you sure you want to delete this page? This action cannot be undone.",(0,a.jsxs)(c.Group,{mt:"lg",justify:"flex-end",children:[(0,a.jsx)(o.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,a.jsx)(o.Button,{onClick:()=>e.open("confirm-action"),color:"red",children:"Delete"})]})]}),(0,a.jsxs)(r.Drawer,{...e.register("confirm-action"),title:"Confirm action",children:["Are you sure you want to perform this action? This action cannot be undone. If you are sure, press confirm button below.",(0,a.jsxs)(c.Group,{mt:"lg",justify:"flex-end",children:[(0,a.jsx)(o.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,a.jsx)(o.Button,{onClick:()=>e.open("really-confirm-action"),color:"red",children:"Confirm"})]})]}),(0,a.jsxs)(r.Drawer,{...e.register("really-confirm-action"),title:"Really confirm action",children:["Jokes aside. You have confirmed this action. This is your last chance to cancel it. After you press confirm button below, action will be performed and cannot be undone. For real this time. Are you sure you want to proceed?",(0,a.jsxs)(c.Group,{mt:"lg",justify:"flex-end",children:[(0,a.jsx)(o.Button,{onClick:e.closeAll,variant:"default",children:"Cancel"}),(0,a.jsx)(o.Button,{onClick:e.closeAll,color:"red",children:"Confirm"})]})]})]}),(0,a.jsx)(o.Button,{variant:"default",onClick:()=>e.open("delete-page"),children:"Open drawer"})]})}},E={type:"code",code:`
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
`,centered:!0,component:function(){let[e,t]=(0,l.useDisclosure)(!1),[n,i]=(0,l.useDisclosure)(!1),[d,u]=(0,s.useState)({title:"",message:""});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Drawer,{opened:e,onClose:()=>{t.close(),u({title:"",message:""})},transitionProps:{duration:300,exitDuration:1e3},title:d.title,children:d.message}),(0,a.jsx)(r.Drawer,{opened:n,onClose:i.close,transitionProps:{duration:300,exitDuration:1e3},onExitTransitionEnd:()=>u({title:"",message:""}),title:d.title,children:d.message}),(0,a.jsxs)(c.Group,{children:[(0,a.jsx)(o.Button,{onClick:()=>{t.open(),u({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onClose"}),(0,a.jsx)(o.Button,{onClick:()=>{i.open(),u({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onExitTransitionEnd"})]})]})},defaultExpanded:!1};var M=(0,t.__exportAll)({closeIcon:()=>D,composition:()=>h,header:()=>f,initialFocus:()=>g,initialFocusTrap:()=>C,offset:()=>y,overflow:()=>w,overlay:()=>p,positions:()=>d,scrollarea:()=>v,sizes:()=>u,stack:()=>A,transitionEnd:()=>E,transitions:()=>m,usage:()=>i});e.s(["DrawerDemos",0,M],231245)},986793,e=>{"use strict";var t=e.i(391398),n=e.i(38856),o=e.i(265334),r=e.i(648863),a=e.i(37541),l=e.i(690920),i=e.i(671640);let s={type:"code",component:function(){return(0,t.jsxs)(i.Stack,{gap:7,children:[(0,t.jsx)(a.Checkbox,{variant:"outline",label:"Outline Checkbox",defaultChecked:!0}),(0,t.jsx)(a.Checkbox,{variant:"outline",label:"Outline indeterminate Checkbox",indeterminate:!0}),(0,t.jsx)(l.Radio,{variant:"outline",label:"Outline Radio",defaultChecked:!0})]})},code:`
import { Radio, Checkbox, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack gap={7}>
      <Checkbox variant="outline" label="Outline Checkbox" defaultChecked />
      <Checkbox variant="outline" label="Outline indeterminate Checkbox" indeterminate />
      <Radio variant="outline" label="Outline Radio" defaultChecked />
    </Stack>
  );
}
`,centered:!0};var c=(0,r.__exportAll)({checkboxRadioVariant:()=>s}),d=e.i(611615),u=e.i(231245);e.i(603441);var m=e.i(62558);e.i(457450);var p=e.i(418026);let h=(0,m.Layout)(p.MDX_DATA.Changelog730);function f(e){let r={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.useMDXComponents)(),...e.components},{Demo:a,InstallScript:l}=r;return a||x("Demo",!0),l||x("InstallScript",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"smaller-than-and-larger-than-mixins",children:"smaller-than and larger-than mixins"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"smaller-than"})," and ",(0,t.jsx)(r.code,{children:"larger-than"})," mixins can be used to create styles that will be applied only when the screen is smaller or larger than specified breakpoint.\nNote that to use these mixins, you need to update ",(0,t.jsx)(r.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"})," to version ",(0,t.jsx)(r.code,{children:"1.11.0"})," or higher."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-scss",children:".demo {\n  @mixin smaller-than 320px {\n    color: red;\n  }\n\n  @mixin larger-than 320px {\n    color: blue;\n  }\n}\n"})}),"\n",(0,t.jsx)(r.p,{children:"Will be transformed to:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-scss",children:"// Breakpoint values are converted to em units\n// In smaller-than mixin 0.1px is subtracted from breakpoint value\n// to avoid intersection with larger-than mixin\n@media (max-width: 19.99375em) {\n  .demo {\n    color: red;\n  }\n}\n\n@media (min-width: 20em) {\n  .demo {\n    color: blue;\n  }\n}\n"})}),"\n",(0,t.jsxs)(r.p,{children:["You can also use ",(0,t.jsx)(r.code,{children:"smaller-than"})," and ",(0,t.jsx)(r.code,{children:"larger-than"})," mixins with ",(0,t.jsx)(r.a,{href:"/styles/responsive/#breakpoints-variables-in-css-modules",children:"mantine breakpoints"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-scss",children:".demo {\n  @mixin smaller-than $mantine-breakpoint-sm {\n    color: red;\n  }\n\n  @mixin larger-than $mantine-breakpoint-sm {\n    color: blue;\n  }\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"form-schema-resolvers-packages",children:"Form schema resolvers packages"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"@mantine/form"})," schema validation resolver packages are now available as ",(0,t.jsx)(r.a,{href:"/form/schema-validation",children:"separate packages"}),".\nMoving resolvers to separate packages allows making them type-safe and fully tested.\nOld resolvers are still exported from ",(0,t.jsx)(r.code,{children:"@mantine/form"})," package – you will be able to use them without any changes\nuntil 8.0.0 release."]}),"\n",(0,t.jsx)(r.p,{children:"The new packages are drop-in replacements for old resolvers, they have the same API and can be used in the same way."}),"\n",(0,t.jsx)(r.p,{children:"Example of zod resolver:"}),"\n",(0,t.jsx)(l,{packages:"zod mantine-form-zod-resolver"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import { zodResolver } from 'mantine-form-zod-resolver';\nimport { z } from 'zod';\nimport { useForm } from '@mantine/form';\n\nconst schema = z.object({\n  name: z\n    .string()\n    .min(2, { message: 'Name should have at least 2 letters' }),\n  email: z.string().email({ message: 'Invalid email' }),\n  age: z.number().min(18, {\n    message: 'You must be at least 18 to create an account',\n  }),\n});\n\nconst form = useForm({\n  initialValues: {\n    name: '',\n    email: '',\n    age: 16,\n  },\n  validate: zodResolver(schema),\n});\n\nform.validate();\nform.errors;\n// -> {\n//  name: 'Name should have at least 2 letters',\n//  email: 'Invalid email',\n//  age: 'You must be at least 18 to create an account'\n// }\n"})}),"\n",(0,t.jsx)(r.h2,{id:"remem-functions-improvements",children:"rem/em functions improvements"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/styles/rem",children:"rem and em"})," function now support space-separated values. This feature is available\nboth in ",(0,t.jsx)(r.code,{children:"rem"})," function exported from ",(0,t.jsx)(r.code,{children:"@mantine/core"})," package and ",(0,t.jsx)(r.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"}),".\nNote that you need to update ",(0,t.jsx)(r.a,{href:"/styles/postcss-preset",children:"postcss-preset-mantine"})," to ",(0,t.jsx)(r.code,{children:"1.11.0"})," to use this feature."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import { rem } from '@mantine/core';\n\nrem('16px 32px');\n// -> calc(1rem * var(--mantine-scale)) calc(2rem * var(--mantine-scale))\n"})}),"\n",(0,t.jsxs)(r.p,{children:["All components props that are converted to ",(0,t.jsx)(r.code,{children:"rem"})," units now support space-separated values as well.\nFor example, space-separated values can be used in ",(0,t.jsx)(r.code,{children:"radius"})," prop of ",(0,t.jsx)(r.a,{href:"/core/modal",children:"Modal"})," component:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import { Modal } from '@mantine/core';\n\nfunction Demo() {\n  return <Modal radius=\"10px 10px 0 0\" opened onClose={() => {}} />;\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"component-and-renderroot-props-for-non-polymorphic-components",children:"component and renderRoot props for non-polymorphic components"}),"\n",(0,t.jsxs)(r.p,{children:["All Mantine components now support ",(0,t.jsx)(r.code,{children:"component"})," and ",(0,t.jsx)(r.code,{children:"renderRoot"})," props event if they are not ",(0,t.jsx)(r.a,{href:"/guides/polymorphic",children:"polymorphic"}),".\nThe difference between polymorphic and non-polymorphic components is that polymorphic components\ninclude the full set of props of the component passed to the ",(0,t.jsx)(r.code,{children:"component"})," prop, while non-polymorphic\ncomponents only include props that are specific to the original component. It is done this way to\nimprove TypeScript performance."]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import { Group } from '@mantine/core';\n\n// Group is not polymorphic component,\n// but it still supports component and renderRoot props\nfunction Demo() {\n  return (\n    <Group component=\"nav\">\n      <a>Item 1</a>\n      <a>Item 2</a>\n      <a>Item 3</a>\n    </Group>\n  );\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"outline-checkbox-and-radio-variant",children:"Outline Checkbox and Radio variant"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/core/checkbox",children:"Checkbox"})," and ",(0,t.jsx)(r.a,{href:"/core/radio",children:"Radio"})," components now support ",(0,t.jsx)(r.code,{children:"outline"})," variant:"]}),"\n",(0,t.jsx)(a,{data:c.checkboxRadioVariant}),"\n",(0,t.jsx)(r.h2,{id:"hueslider-and-alphaslider-components",children:"HueSlider and AlphaSlider components"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/core/color-picker",children:"HueSlider and AlphaSlider"})," components were added back:"]}),"\n",(0,t.jsx)(a,{data:d.ColorPickerDemos.hueSlider}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsx)(a,{data:d.ColorPickerDemos.alphaSlider}),"\n",(0,t.jsx)(r.h2,{id:"button-loading-state-animation",children:"Button loading state animation"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/core/button",children:"Button"})," component now has loading state animation:"]}),"\n",(0,t.jsx)(a,{data:o.ButtonDemos.loading}),"\n",(0,t.jsx)(r.h2,{id:"drawer-offset",children:"Drawer offset"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/core/drawer",children:"Drawer"})," now supports ",(0,t.jsx)(r.code,{children:"offset"})," prop. It changes drawer offset from the edge of the viewport:"]}),"\n",(0,t.jsx)(a,{data:u.DrawerDemos.offset}),"\n",(0,t.jsx)(r.h2,{id:"z-index-css-variables",children:"z-index CSS variables"}),"\n",(0,t.jsx)(r.p,{children:"You can now use Mantine z-index CSS variables:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"--mantine-z-index-app"})," – value ",(0,t.jsx)(r.code,{children:"100"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"--mantine-z-index-modal"})," – value ",(0,t.jsx)(r.code,{children:"200"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"--mantine-z-index-popover"})," – value ",(0,t.jsx)(r.code,{children:"300"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"--mantine-z-index-overlay"})," – value ",(0,t.jsx)(r.code,{children:"400"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"--mantine-z-index-max"})," – value ",(0,t.jsx)(r.code,{children:"9999"})]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Example of using ",(0,t.jsx)(r.code,{children:"--mantine-z-index-modal"})," variable:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-css",children:"/* Display content above the modal */\n.my-content {\n  z-index: calc(var(--mantine-z-index-modal) + 1);\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"improved-dark-color-scheme-colors",children:"Improved dark color scheme colors"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"theme.colors.dark"})," colors were slightly changed to improve contrast and make it easier to read text.\nYou can preview new colors on ",(0,t.jsx)(r.a,{href:"/theming/colors/#default-colors",children:"this page"}),". New colors values are:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-scss",children:"--mantine-color-dark-0: #c9c9c9;\n--mantine-color-dark-1: #b8b8b8;\n--mantine-color-dark-2: #828282;\n--mantine-color-dark-3: #696969;\n--mantine-color-dark-4: #424242;\n--mantine-color-dark-5: #3b3b3b;\n--mantine-color-dark-6: #2e2e2e;\n--mantine-color-dark-7: #242424;\n--mantine-color-dark-8: #1f1f1f;\n--mantine-color-dark-9: #141414;\n"})}),"\n",(0,t.jsxs)(r.p,{children:["If you prefer old colors, change theme settings on ",(0,t.jsx)(r.code,{children:"MantineProvider"}),":"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"import { createTheme, MantineProvider } from '@mantine/core';\n\nconst theme = createTheme({\n  colors: {\n    dark: [\n      '#C1C2C5',\n      '#A6A7AB',\n      '#909296',\n      '#5c5f66',\n      '#373A40',\n      '#2C2E33',\n      '#25262b',\n      '#1A1B1E',\n      '#141517',\n      '#101113',\n    ],\n  },\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      {/* Your app here */}\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Schema-based validation with ",(0,t.jsx)(r.code,{children:"@mantine/form"})," now has a ",(0,t.jsx)(r.a,{href:"/form/schema-validation",children:"dedicated page"}),". It includes more examples for basic, nested and list fields validation for each resolver."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/core/autocomplete",children:"Autocomplete"}),", ",(0,t.jsx)(r.a,{href:"/core/select",children:"Select"}),", ",(0,t.jsx)(r.a,{href:"/core/multi-select",children:"MultiSelect"})," and ",(0,t.jsx)(r.a,{href:"/core/tags-input",children:"TagsInput"})," now include new demos that show how to customize dropdown behavior and styles."]}),"\n",(0,t.jsxs)(r.li,{children:["Example of using Mantine with disabled JavaScript was added to the ",(0,t.jsx)(r.a,{href:"/theming/color-schemes/#with-disabled-javascript",children:"color schemes guide"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/core/pagination",children:"Pagination"})," now includes an additional example with chunked content handling."]}),"\n",(0,t.jsxs)(r.li,{children:["A new section about dayjs localization with Next.js app router and server components has been added to the ",(0,t.jsx)(r.a,{href:"/dates/getting-started/#localization-and-server-components",children:"dates getting started page"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/x/modals/#modal-props",children:"Modals manager"})," now includes a guide on how to pass props down to the underlying ",(0,t.jsx)(r.a,{href:"/core/modal",children:"Modal"})," component."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/core/slider",children:"Slider"})," now has sections about decimal values and ",(0,t.jsx)(r.code,{children:"minRange"})," prop."]}),"\n",(0,t.jsxs)(r.li,{children:["You can now view all 200+ releases with release dates on the ",(0,t.jsx)(r.a,{href:"/changelog/all-releases/",children:"all releases page"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/hooks/use-hash/",children:"use-hash"})," hook now supports ",(0,t.jsx)(r.code,{children:"getInitialValueInEffect: false"})," option to get initial value during state initialization."]}),"\n",(0,t.jsxs)(r.li,{children:["New ",(0,t.jsx)(r.code,{children:"useMantineColorScheme({ keepTransitions: true })"})," option allows keeping transitions when color scheme changes. Note that it is ",(0,t.jsx)(r.code,{children:"false"})," by default."]}),"\n",(0,t.jsxs)(r.li,{children:["All templates were migrated to ",(0,t.jsx)(r.a,{href:"https://yarnpkg.com/blog/release/4.0",children:"yarn v4"})," – this change significantly improves installation speed."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/core/typography",children:"Typography"})," now has styles for ",(0,t.jsx)(r.code,{children:"<kbd />"})," element."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/core/multi-select",children:"MultiSelect"})," and ",(0,t.jsx)(r.a,{href:"/core/tags-input",children:"TagsInput"})," components now support ",(0,t.jsx)(r.code,{children:"hiddenValuesDivider"})," prop. It allows customizing divider character between values in ",(0,t.jsx)(r.code,{children:"value"})," prop of the hidden input."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/core/grid",children:"Grid"})," component now supports ",(0,t.jsx)(r.code,{children:"overflow"})," prop, which allows controlling ",(0,t.jsx)(r.code,{children:"overflow"})," CSS property on the root element. It is ",(0,t.jsx)(r.code,{children:"hidden"})," by default."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/core/modal",children:"Modal"})," and ",(0,t.jsx)(r.a,{href:"/core/drawer",children:"Drawer"})," components now support ",(0,t.jsx)(r.code,{children:"removeScrollProps"})," prop. It allows configuring ",(0,t.jsx)(r.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/core/app-shell",children:"AppShell"})," now supports ",(0,t.jsx)(r.code,{children:"offsetScrollbars"})," prop. It determines whether scrollbars should be offset, it is ",(0,t.jsx)(r.code,{children:"true"})," by default. The logic of scrollbars offset is controlled by ",(0,t.jsx)(r.a,{href:"https://github.com/theKashey/react-remove-scroll",children:"react-remove-scroll"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"/core/menu",children:"Menu"})," now supports ",(0,t.jsx)(r.code,{children:'trigger="click-hover"'})," prop, to open menu both on click and on hover."]}),"\n",(0,t.jsxs)(r.li,{children:["It is now possible to set ",(0,t.jsx)(r.code,{children:"keepMounted"})," prop on ",(0,t.jsx)(r.a,{href:"/core/tabs",children:"Tabs.Panel"})," components individually, not only on ",(0,t.jsx)(r.code,{children:"Tabs"})," component."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://mantinedev.github.io/mantine-flagpack/",children:"mantine-flagpack"})," has been migrated to support ",(0,t.jsx)(r.code,{children:"7.x"})," versions of ",(0,t.jsx)(r.code,{children:"@mantine/core"}),". To use it, update ",(0,t.jsx)(r.code,{children:"mantine-flagpack"})," to ",(0,t.jsx)(r.code,{children:"4.0.0"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.a,{href:"https://github.com/mantinedev/vite-template",children:"vite-template"})," was migrated from Jest to ",(0,t.jsx)(r.a,{href:"https://vitest.dev/",children:"Vitest"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["The main ",(0,t.jsx)(r.a,{href:"https://github.com/mantinedev/mantine",children:"Mantine repository"})," was migrated to ",(0,t.jsx)(r.a,{href:"https://yarnpkg.com/blog/release/4.0",children:"yarn v4"}),". The process of getting started locally ",(0,t.jsx)(r.a,{href:"/contribute/#get-started-with-mantine-locally",children:"was changed"})]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"@mantine/ds"})," package has been deprecated. You can use ",(0,t.jsx)(r.code,{children:"@mantinex/mantine-logo"})," package to use ",(0,t.jsx)(r.code,{children:"MantineLogo"})," component in your project."]}),"\n"]})]})}function x(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(h,{...e,children:(0,t.jsx)(f,{...e})})}],986793)},10168,(e,t,n)=>{let o="/changelog/7-3-0";(window.__NEXT_P=window.__NEXT_P||[]).push([o,()=>e.r(986793)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([o])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);