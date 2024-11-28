"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[36503],{69378:function(e){e.exports=function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)){if((o=t.length)!=r.length)return!1;for(n=o;0!=n--;)if(!e(t[n],r[n]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if((o=(i=Object.keys(t)).length)!==Object.keys(r).length)return!1;for(n=o;0!=n--;)if(!Object.prototype.hasOwnProperty.call(r,i[n]))return!1;for(n=o;0!=n--;){var o,n,i,s=i[n];if(!e(t[s],r[s]))return!1}return!0}return t!=t&&r!=r}},89868:function(e,t,r){r.d(t,{Z:function(){return o}});var o=(0,r(73681).Z)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},51934:function(e,t,r){r.d(t,{Z:function(){return o}});var o=(0,r(73681).Z)("outline","lock","IconLock",[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]])},15463:function(e,t,r){function o(e,t,r){"object"==typeof r.value&&(r.value=n(r.value)),r.enumerable&&!r.get&&!r.set&&r.configurable&&r.writable&&"__proto__"!==t?e[t]=r.value:Object.defineProperty(e,t,r)}function n(e){if("object"!=typeof e)return e;var t,r,i,s=0,a=Object.prototype.toString.call(e);if("[object Object]"===a?i=Object.create(e.__proto__||null):"[object Array]"===a?i=Array(e.length):"[object Set]"===a?(i=new Set,e.forEach(function(e){i.add(n(e))})):"[object Map]"===a?(i=new Map,e.forEach(function(e,t){i.set(n(t),n(e))})):"[object Date]"===a?i=new Date(+e):"[object RegExp]"===a?i=new RegExp(e.source,e.flags):"[object DataView]"===a?i=new e.constructor(n(e.buffer)):"[object ArrayBuffer]"===a?i=e.slice(0):"Array]"===a.slice(-6)&&(i=new e.constructor(e)),i){for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)o(i,r[s],Object.getOwnPropertyDescriptor(e,r[s]));for(s=0,r=Object.getOwnPropertyNames(e);s<r.length;s++)Object.hasOwnProperty.call(i,t=r[s])&&i[t]===e[t]||o(i,t,Object.getOwnPropertyDescriptor(e,t))}return i||e}r.d(t,{Y:function(){return n}})},12209:function(e,t,r){r.d(t,{l:function(){return u}});var o=r(52322),n=r(28559),i=r(20992),s=r(93010),a=r(17115),l=r(3900),c=r(3789);let u={centered:!0,maxWidth:400,dimmed:!0,type:"code",code:`
import { useDisclosure } from '@mantine/hooks';
import { LoadingOverlay, Button, Group, Box } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);

  return (
    <>
      <Box pos="relative">
        <LoadingOverlay visible={visible} loaderProps={{ children: 'Loading...' }} />
        {/* ...other content */}
      </Box>

      <Group justify="center">
        <Button onClick={toggle}>Toggle overlay</Button>
      </Group>
    </>
  );
}`,component:function(){let[e,{toggle:t}]=(0,l.q)(!1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.x,{pos:"relative",children:[(0,o.jsx)(i.f,{visible:e,loaderProps:{children:"Loading..."}}),(0,o.jsx)(c._,{noSubmit:!0})]}),(0,o.jsx)(s.Z,{justify:"center",mt:"xl",children:(0,o.jsx)(a.z,{onClick:t,children:"Toggle overlay"})})]})}}},3789:function(e,t,r){r.d(t,{_:function(){return h}});var o=r(52322),n=r(2784),i=r(89868),s=r(51934),a=r(1198),l=r(20992),c=r(93010),u=r(74770),d=r(60284),p=r(95047),f=r(8582),g=r(71873),m=r(17115),v=r(43092);function h({noShadow:e,noPadding:t,noSubmit:r,style:h}){let[y,b]=(0,n.useState)("register"),[j,x]=(0,n.useState)(!1),[w,C]=(0,n.useState)(null),O=(0,v.c)({initialValues:{firstName:"",lastName:"",email:"",password:"",confirmPassword:"",termsOfService:!0}});return(0,o.jsx)(a.X,{p:t?0:"lg",shadow:e?"none":"sm",style:{...h,position:"relative",backgroundColor:"var(--mantine-color-body)"},children:(0,o.jsxs)("form",{onSubmit:O.onSubmit(()=>{x(!0),C(null),setTimeout(()=>{x(!1),C("register"===y?"User with this email already exists":"User with this email does not exist")},3e3)}),children:[(0,o.jsx)(l.f,{visible:j}),"register"===y&&(0,o.jsxs)(c.Z,{grow:!0,children:[(0,o.jsx)(u.o,{"data-autofocus":!0,required:!0,placeholder:"Your first name",label:"First name",...O.getInputProps("firstName")}),(0,o.jsx)(u.o,{required:!0,placeholder:"Your last name",label:"Last name",...O.getInputProps("lastName")})]}),(0,o.jsx)(u.o,{mt:"md",required:!0,placeholder:"Your email",label:"Email",leftSection:(0,o.jsx)(i.Z,{size:16,stroke:1.5}),...O.getInputProps("email")}),(0,o.jsx)(d.W,{mt:"md",required:!0,placeholder:"Password",label:"Password",leftSection:(0,o.jsx)(s.Z,{size:16,stroke:1.5}),...O.getInputProps("password")}),"register"===y&&(0,o.jsx)(d.W,{mt:"md",required:!0,label:"Confirm Password",placeholder:"Confirm password",leftSection:(0,o.jsx)(s.Z,{size:16,stroke:1.5}),...O.getInputProps("confirmPassword")}),"register"===y&&(0,o.jsx)(p.X,{mt:"xl",label:"I agree to sell my soul and privacy to this corporation",...O.getInputProps("termsOfService",{type:"checkbox"})}),w&&(0,o.jsx)(f.x,{c:"red",size:"sm",mt:"sm",children:w}),!r&&(0,o.jsxs)(c.Z,{justify:"space-between",mt:"xl",children:[(0,o.jsx)(g.e,{component:"button",type:"button",c:"dimmed",onClick:()=>{b(e=>"register"===e?"login":"register"),C(null)},size:"sm",children:"register"===y?"Have an account? Login":"Don't have an account? Register"}),(0,o.jsx)(m.z,{color:"blue",type:"submit",children:"register"===y?"Register":"Login"})]})]})})}},20992:function(e,t,r){r.d(t,{f:function(){return h}});var o=r(52322);r(2784);var n=r(97263),i=r(11200),s=r(68755),a=r(38483),l=r(46690),c=r(28559),u=r(82027),d=r(12491),p=r(87170),f=r(96321),g={root:"m_6e45937b",loader:"m_e8eb006c",overlay:"m_df587f17"};let m={transitionProps:{transition:"fade",duration:0},overlayProps:{backgroundOpacity:.75},zIndex:(0,n.w)("overlay")},v=(0,i.Z)((e,{zIndex:t})=>({root:{"--lo-z-index":t?.toString()}})),h=(0,u.d5)((e,t)=>{let r=(0,a.w)("LoadingOverlay",m,e),{classNames:n,className:i,style:u,styles:h,unstyled:y,vars:b,transitionProps:j,loaderProps:x,overlayProps:w,visible:C,zIndex:O,...P}=r,k=(0,s.rZ)(),S=(0,l.y)({name:"LoadingOverlay",classes:g,props:r,className:i,style:u,classNames:n,styles:h,unstyled:y,vars:b,varsResolver:v}),_={...m.overlayProps,...w};return(0,o.jsx)(f.u,{transition:"fade",...j,mounted:!!C,children:e=>(0,o.jsxs)(c.x,{...S("root",{style:e}),ref:t,...P,children:[(0,o.jsx)(d.a,{...S("loader"),unstyled:y,...x}),(0,o.jsx)(p.a,{..._,...S("overlay"),darkHidden:!0,unstyled:y,color:w?.color||k.white}),(0,o.jsx)(p.a,{..._,...S("overlay"),lightHidden:!0,unstyled:y,color:w?.color||k.colors.dark[5]})]})})});h.classes=g,h.displayName="@mantine/core/LoadingOverlay"},60284:function(e,t,r){r.d(t,{W:function(){return j}});var o=r(52322),n=r(40489),i=r(66178),s=r(9341);r(2784);var a=r(91482),l=r(11200),c=r(51477),u=r(46690),d=r(38483),p=r(97072),f=r(82027),g=r(54813),m=r(6941),v=r(73063),h={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"};let y={visibilityToggleIcon:({reveal:e})=>(0,o.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"},children:(0,o.jsx)("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})},b=(0,l.Z)((e,{size:t})=>({root:{"--psi-icon-size":(0,a.ap)(t,"psi-icon-size"),"--psi-button-size":(0,a.ap)(t,"psi-button-size")}})),j=(0,f.d5)((e,t)=>{let r=(0,d.w)("PasswordInput",y,e),{classNames:a,className:l,style:f,styles:v,unstyled:j,vars:x,required:w,error:C,leftSection:O,disabled:P,id:k,variant:S,inputContainer:_,description:I,label:Z,size:L,errorProps:M,descriptionProps:z,labelProps:D,withAsterisk:E,inputWrapperOrder:N,wrapperProps:A,radius:B,rightSection:T,rightSectionWidth:q,rightSectionPointerEvents:R,leftSectionWidth:W,visible:V,defaultVisible:Y,onVisibilityChange:F,visibilityToggleIcon:G,visibilityToggleButtonProps:H,rightSectionProps:K,leftSectionProps:U,leftSectionPointerEvents:X,withErrorStyles:J,mod:Q,...$}=r,ee=(0,i.M)(k),[et,er]=(0,s.C)({value:V,defaultValue:Y,finalValue:!1,onChange:F}),eo=()=>er(!et),en=(0,u.y)({name:"PasswordInput",classes:h,props:r,className:l,style:f,classNames:a,styles:v,unstyled:j,vars:x,varsResolver:b}),{resolvedClassNames:ei,resolvedStyles:es}=(0,c.h)({classNames:a,styles:v,props:r}),{styleProps:ea,rest:el}=(0,p.c)($),ec=(0,o.jsx)(g.A,{...en("visibilityToggle"),disabled:P,radius:B,"aria-hidden":!H,tabIndex:-1,...H,variant:H?.variant??"subtle",color:"gray",unstyled:j,onTouchEnd:e=>{e.preventDefault(),H?.onTouchEnd?.(e),eo()},onMouseDown:e=>{e.preventDefault(),H?.onMouseDown?.(e),eo()},onKeyDown:e=>{H?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),eo())},children:(0,o.jsx)(G,{reveal:et})});return(0,o.jsx)(m.I.Wrapper,{required:w,id:ee,label:Z,error:C,description:I,size:L,classNames:ei,styles:es,__staticSelector:"PasswordInput",errorProps:M,descriptionProps:z,unstyled:j,withAsterisk:E,inputWrapperOrder:N,inputContainer:_,variant:S,labelProps:{...D,htmlFor:ee},mod:Q,...en("root"),...ea,...A,children:(0,o.jsx)(m.I,{component:"div",error:C,leftSection:O,size:L,classNames:{...ei,input:(0,n.Z)(h.input,ei.input)},styles:es,radius:B,disabled:P,__staticSelector:"PasswordInput",rightSectionWidth:q,rightSection:T??ec,variant:S,unstyled:j,leftSectionWidth:W,rightSectionPointerEvents:R||"all",rightSectionProps:K,leftSectionProps:U,leftSectionPointerEvents:X,withAria:!1,withErrorStyles:J,children:(0,o.jsx)("input",{required:w,"data-invalid":!!C||void 0,"data-with-left-section":!!O||void 0,...en("innerInput"),disabled:P,id:ee,ref:t,...el,autoComplete:el.autoComplete||"off",type:et?"text":"password"})})})});j.classes={...v.M.classes,...h},j.displayName="@mantine/core/PasswordInput"},3900:function(e,t,r){r.d(t,{q:function(){return n}});var o=r(2784);function n(e=!1,t){let{onOpen:r,onClose:n}=t||{},[i,s]=(0,o.useState)(e),a=(0,o.useCallback)(()=>{s(e=>e||(r?.(),!0))},[r]),l=(0,o.useCallback)(()=>{s(e=>e?(n?.(),!1):e)},[n]),c=(0,o.useCallback)(()=>{i?l():a()},[l,a,i]);return[i,{open:a,close:l,toggle:c}]}}}]);