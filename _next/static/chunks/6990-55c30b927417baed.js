"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6990],{38792:e=>{e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)){if((o=t.length)!=r.length)return!1;for(n=o;0!=n--;)if(!e(t[n],r[n]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((o=(s=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(n=o;0!=n--;)if(!Object.prototype.hasOwnProperty.call(r,s[n]))return!1;for(n=o;0!=n--;){var o,n,s,a=s[n];if(!e(t[a],r[a]))return!1}return!0}return t!=t&&r!=r}},32653:(e,t,r)=>{r.d(t,{A:()=>o});var o=(0,r(73366).A)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},53223:(e,t,r)=>{r.d(t,{A:()=>o});var o=(0,r(73366).A)("outline","lock","IconLock",[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]])},74015:(e,t,r)=>{function o(e,t,r){"object"==typeof r.value&&(r.value=n(r.value)),r.enumerable&&!r.get&&!r.set&&r.configurable&&r.writable&&"__proto__"!==t?e[t]=r.value:Object.defineProperty(e,t,r)}function n(e){if("object"!=typeof e)return e;var t,r,s,a=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?s=Object.create(e.__proto__||null):"[object Array]"===i?s=Array(e.length):"[object Set]"===i?(s=new Set,e.forEach(function(e){s.add(n(e))})):"[object Map]"===i?(s=new Map,e.forEach(function(e,t){s.set(n(t),n(e))})):"[object Date]"===i?s=new Date(+e):"[object RegExp]"===i?s=new RegExp(e.source,e.flags):"[object DataView]"===i?s=new e.constructor(n(e.buffer)):"[object ArrayBuffer]"===i?s=e.slice(0):"Array]"===i.slice(-6)&&(s=new e.constructor(e)),s){for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)o(s,r[a],Object.getOwnPropertyDescriptor(e,r[a]));for(a=0,r=Object.getOwnPropertyNames(e);a<r.length;a++)Object.hasOwnProperty.call(s,t=r[a])&&s[t]===e[t]||o(s,t,Object.getOwnPropertyDescriptor(e,t))}return s||e}r.d(t,{Q:()=>n})},28051:(e,t,r)=>{r.d(t,{C:()=>l});var o=r(31085),n=r(19042),s=r(52022),a=r(92051),i=r(86934);let l={type:"code",code:`
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
`,centered:!0,component:function(){let[e,{open:t,close:r}]=(0,a.j)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.a,{opened:e,onClose:r,title:"Authentication",children:(0,o.jsx)(i.d,{noShadow:!0,noPadding:!0})}),(0,o.jsx)(s.$,{variant:"default",onClick:t,children:"Open modal"})]})}}},86934:(e,t,r)=>{r.d(t,{d:()=>v});var o=r(31085),n=r(14041),s=r(32653),a=r(53223),i=r(58120),l=r(35395),c=r(56051),u=r(90275),d=r(52404),p=r(87858),f=r(93065),m=r(12129),g=r(52022),h=r(23719);function v({noShadow:e,noPadding:t,noSubmit:r,style:v}){let[y,b]=(0,n.useState)("register"),[j,C]=(0,n.useState)(!1),[w,x]=(0,n.useState)(null),O=(0,h.m)({initialValues:{firstName:"",lastName:"",email:"",password:"",confirmPassword:"",termsOfService:!0}});return(0,o.jsx)(i.t,{p:t?0:"lg",shadow:e?"none":"sm",style:{...v,position:"relative",backgroundColor:"var(--mantine-color-body)"},children:(0,o.jsxs)("form",{onSubmit:O.onSubmit(()=>{C(!0),x(null),setTimeout(()=>{C(!1),x("register"===y?"User with this email already exists":"User with this email does not exist")},3e3)}),children:[(0,o.jsx)(l.p,{visible:j}),"register"===y&&(0,o.jsxs)(c.Y,{grow:!0,children:[(0,o.jsx)(u.k,{"data-autofocus":!0,required:!0,placeholder:"Your first name",label:"First name",...O.getInputProps("firstName")}),(0,o.jsx)(u.k,{required:!0,placeholder:"Your last name",label:"Last name",...O.getInputProps("lastName")})]}),(0,o.jsx)(u.k,{mt:"md",required:!0,placeholder:"Your email",label:"Email",leftSection:(0,o.jsx)(s.A,{size:16,stroke:1.5}),...O.getInputProps("email")}),(0,o.jsx)(d.y,{mt:"md",required:!0,placeholder:"Password",label:"Password",leftSection:(0,o.jsx)(a.A,{size:16,stroke:1.5}),...O.getInputProps("password")}),"register"===y&&(0,o.jsx)(d.y,{mt:"md",required:!0,label:"Confirm Password",placeholder:"Confirm password",leftSection:(0,o.jsx)(a.A,{size:16,stroke:1.5}),...O.getInputProps("confirmPassword")}),"register"===y&&(0,o.jsx)(p.S,{mt:"xl",label:"I agree to sell my soul and privacy to this corporation",...O.getInputProps("termsOfService",{type:"checkbox"})}),w&&(0,o.jsx)(f.E,{c:"red",size:"sm",mt:"sm",children:w}),!r&&(0,o.jsxs)(c.Y,{justify:"space-between",mt:"xl",children:[(0,o.jsx)(m.M,{component:"button",type:"button",c:"dimmed",onClick:()=>{b(e=>"register"===e?"login":"register"),x(null)},size:"sm",children:"register"===y?"Have an account? Login":"Don't have an account? Register"}),(0,o.jsx)(g.$,{color:"blue",type:"submit",children:"register"===y?"Register":"Login"})]})]})})}},35395:(e,t,r)=>{r.d(t,{p:()=>v});var o=r(31085);r(14041);var n=r(81296),s=r(7098),a=r(92408),i=r(29686),l=r(69564),c=r(34056),u=r(6754),d=r(25810),p=r(51629),f=r(98523),m={root:"m_6e45937b",loader:"m_e8eb006c",overlay:"m_df587f17"};let g={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,n.I)("overlay")},h=(0,s.V)((e,{zIndex:t})=>({root:{"--lo-z-index":t?.toString()}})),v=(0,u.P9)((e,t)=>{let r=(0,i.Y)("LoadingOverlay",g,e),{classNames:n,className:s,style:u,styles:v,unstyled:y,vars:b,transitionProps:j,loaderProps:C,overlayProps:w,visible:x,zIndex:O,...k}=r,P=(0,a.xd)(),S=(0,l.I)({name:"LoadingOverlay",classes:m,props:r,className:s,style:u,classNames:n,styles:v,unstyled:y,vars:b,varsResolver:h}),_={...g.overlayProps,...w};return(0,o.jsx)(f.e,{transition:"fade",...j,mounted:!!x,children:e=>(0,o.jsxs)(c.a,{...S("root",{style:e}),ref:t,...k,children:[(0,o.jsx)(d.a,{...S("loader"),unstyled:y,...C}),(0,o.jsx)(p.h,{..._,...S("overlay"),darkHidden:!0,unstyled:y,color:w?.color||P.white}),(0,o.jsx)(p.h,{..._,...S("overlay"),lightHidden:!0,unstyled:y,color:w?.color||P.colors.dark[5]})]})})});v.classes=m,v.displayName="@mantine/core/LoadingOverlay"},52404:(e,t,r)=>{r.d(t,{y:()=>j});var o=r(31085),n=r(54357),s=r(97567),a=r(82307);r(14041);var i=r(33450),l=r(7098),c=r(36456),u=r(69564),d=r(29686),p=r(18315),f=r(6754),m=r(22962),g=r(34452),h=r(87059),v={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"};let y={visibilityToggleIcon:({reveal:e})=>(0,o.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"},children:(0,o.jsx)("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})},b=(0,l.V)((e,{size:t})=>({root:{"--psi-icon-size":(0,i.YC)(t,"psi-icon-size"),"--psi-button-size":(0,i.YC)(t,"psi-button-size")}})),j=(0,f.P9)((e,t)=>{let r=(0,d.Y)("PasswordInput",y,e),{classNames:i,className:l,style:f,styles:h,unstyled:j,vars:C,required:w,error:x,leftSection:O,disabled:k,id:P,variant:S,inputContainer:_,description:I,label:M,size:A,errorProps:D,descriptionProps:z,labelProps:L,withAsterisk:E,inputWrapperOrder:N,wrapperProps:Y,radius:R,rightSection:Z,rightSectionWidth:B,rightSectionPointerEvents:T,leftSectionWidth:V,visible:q,defaultVisible:F,onVisibilityChange:H,visibilityToggleIcon:K,visibilityToggleButtonProps:U,rightSectionProps:$,leftSectionProps:Q,leftSectionPointerEvents:W,withErrorStyles:G,mod:J,...X}=r,ee=(0,s.B)(P),[et,er]=(0,a.Z)({value:q,defaultValue:F,finalValue:!1,onChange:H}),eo=()=>er(!et),en=(0,u.I)({name:"PasswordInput",classes:v,props:r,className:l,style:f,classNames:i,styles:h,unstyled:j,vars:C,varsResolver:b}),{resolvedClassNames:es,resolvedStyles:ea}=(0,c.Y)({classNames:i,styles:h,props:r}),{styleProps:ei,rest:el}=(0,p.j)(X),ec=(0,o.jsx)(m.M,{...en("visibilityToggle"),disabled:k,radius:R,"aria-hidden":!U,tabIndex:-1,...U,variant:U?.variant??"subtle",color:"gray",unstyled:j,onTouchEnd:e=>{e.preventDefault(),U?.onTouchEnd?.(e),eo()},onMouseDown:e=>{e.preventDefault(),U?.onMouseDown?.(e),eo()},onKeyDown:e=>{U?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),eo())},children:(0,o.jsx)(K,{reveal:et})});return(0,o.jsx)(g.p.Wrapper,{required:w,id:ee,label:M,error:x,description:I,size:A,classNames:es,styles:ea,__staticSelector:"PasswordInput",errorProps:D,descriptionProps:z,unstyled:j,withAsterisk:E,inputWrapperOrder:N,inputContainer:_,variant:S,labelProps:{...L,htmlFor:ee},mod:J,...en("root"),...ei,...Y,children:(0,o.jsx)(g.p,{component:"div",error:x,leftSection:O,size:A,classNames:{...es,input:(0,n.A)(v.input,es.input)},styles:ea,radius:R,disabled:k,__staticSelector:"PasswordInput",rightSectionWidth:B,rightSection:Z??ec,variant:S,unstyled:j,leftSectionWidth:V,rightSectionPointerEvents:T||"all",rightSectionProps:$,leftSectionProps:Q,leftSectionPointerEvents:W,withAria:!1,withErrorStyles:G,children:(0,o.jsx)("input",{required:w,"data-invalid":!!x||void 0,"data-with-left-section":!!O||void 0,...en("innerInput"),disabled:k,id:ee,ref:t,...el,autoComplete:el.autoComplete||"off",type:et?"text":"password"})})})});j.classes={...h.O.classes,...v},j.displayName="@mantine/core/PasswordInput"},92051:(e,t,r)=>{r.d(t,{j:()=>n});var o=r(14041);function n(e=!1,t){let{onOpen:r,onClose:s}=t||{},[a,i]=(0,o.useState)(e),l=(0,o.useCallback)(()=>{i(e=>e||(r?.(),!0))},[r]),c=(0,o.useCallback)(()=>{i(e=>e?(s?.(),!1):e)},[s]),u=(0,o.useCallback)(()=>{a?c():l()},[c,l,a]);return[a,{open:l,close:c,toggle:u}]}}}]);