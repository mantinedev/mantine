(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6696],{33507:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},22043:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/password-input",function(){return r(51695)}])},51695:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return et}});var n=r(85893),a=r(11151),l=r(19905),o=r(9904),i=r(67294),s=r(91361),c=r(88005),p=Object.defineProperty,u=Object.defineProperties,d=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&y(e,r,t[r]);if(m)for(var r of m(t))v.call(t,r)&&y(e,r,t[r]);return e},b=(e,t)=>u(e,d(t));let f=`
import { PasswordInput } from '@mantine/core';


function Demo() {
  return (
    <PasswordInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,w={type:"configurator",component:function(e){return i.createElement(s.W,b(g({},e),{placeholder:"Input placeholder"}))},code:f,centered:!0,maxWidth:340,controls:c.pc};var P=r(12177),I=r(75253);let x=`
import { useDisclosure } from '@mantine/hooks';
import { PasswordInput, Stack } from '@mantine/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <Stack>
      <PasswordInput
        label="Password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
      <PasswordInput
        label="Confirm password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
    </Stack>
  );
}
`,k={type:"code",component:function(){let[e,{toggle:t}]=(0,P.q)(!1);return i.createElement(I.K,null,i.createElement(s.W,{label:"Password",defaultValue:"secret",visible:e,onVisibilityChange:t}),i.createElement(s.W,{label:"Confirm password",defaultValue:"secret",visible:e,onVisibilityChange:t}))},code:x,centered:!0,maxWidth:340};var O=r(54764),C=(0,O.Z)("eye-off","IconEyeOff",[["path",{d:"M10.585 10.587a2 2 0 0 0 2.829 2.828",key:"svg-0"}],["path",{d:"M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87",key:"svg-1"}],["path",{d:"M3 3l18 18",key:"svg-2"}]]),j=(0,O.Z)("eye-check","IconEyeCheck",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M11.102 17.957c-3.204 -.307 -5.904 -2.294 -8.102 -5.957c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6a19.5 19.5 0 0 1 -.663 1.032",key:"svg-1"}],["path",{d:"M15 19l2 2l4 -4",key:"svg-2"}]]);let E=`
import { PasswordInput } from '@mantine/core';
import { IconEyeCheck, IconEyeOff } from '@tabler/icons-react';

function Demo() {
  return (
    <PasswordInput
      label="Change visibility toggle icon"
      placeholder="Change visibility toggle icon"
      defaultValue="secret"
      visibilityToggleIcon={({ reveal }) =>
        reveal ? (
          <IconEyeOff style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
        ) : (
          <IconEyeCheck style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
        )
      }
    />
  );
}
`,V={type:"code",component:function(){return i.createElement(s.W,{maw:320,mx:"auto",label:"Change visibility toggle icon",placeholder:"Change visibility toggle icon",defaultValue:"secret",visibilityToggleIcon:({reveal:e})=>e?i.createElement(C,{style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}}):i.createElement(j,{style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}})})},code:E};var M=r(16659),S=r(86171),Z=r(72039),z=r(72622),D=r(81110),T=r(84131),N=r(47081);let W=`
import { useState } from 'react';
import { IconX, IconCheck } from '@tabler/icons-react';
import { PasswordInput, Progress, Text, Popover, Box, rem } from '@mantine/core';

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text
      c={meets ? 'teal' : 'red'}
      style={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size="sm"
    >
      {meets ? (
        <IconCheck style={{ width: rem(14), height: rem(14) }} />
      ) : (
        <IconX style={{ width: rem(14), height: rem(14) }} />
      )}{' '}
      <Box ml={10}>{label}</Box>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: 'Includes number' },
  { re: /[a-z]/, label: 'Includes lowercase letter' },
  { re: /[A-Z]/, label: 'Includes uppercase letter' },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password: string) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 10);
}

function Demo() {
  const [popoverOpened, setPopoverOpened] = useState(false);
  const [value, setValue] = useState('');
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(value)} />
  ));

  const strength = getStrength(value);
  const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

  return (
    <Popover opened={popoverOpened} position="bottom" width="target" transitionProps={{ transition: 'pop' }}>
      <Popover.Target>
        <div
          onFocusCapture={() => setPopoverOpened(true)}
          onBlurCapture={() => setPopoverOpened(false)}
        >
          <PasswordInput
            withAsterisk
            label="Your password"
            placeholder="Your password"
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
          />
        </div>
      </Popover.Target>
      <Popover.Dropdown>
        <Progress color={color} value={strength} size={5} mb="xs" />
        <PasswordRequirement label="Includes at least 6 characters" meets={value.length > 5} />
        {checks}
      </Popover.Dropdown>
    </Popover>
  );
}
`;function A({meets:e,label:t}){return i.createElement(Z.x,{c:e?"teal":"red",style:{display:"flex",alignItems:"center"},mt:7,size:"sm"},e?i.createElement(M.Z,{style:{width:(0,z.h)(14),height:(0,z.h)(14)}}):i.createElement(S.Z,{style:{width:(0,z.h)(14),height:(0,z.h)(14)}})," ",i.createElement(D.x,{ml:10},t))}let _=[{re:/[0-9]/,label:"Includes number"},{re:/[a-z]/,label:"Includes lowercase letter"},{re:/[A-Z]/,label:"Includes uppercase letter"},{re:/[$&+,:;=?@#|'<>.^*()%!-]/,label:"Includes special symbol"}],L={type:"code",code:W,component:function(){let e;let[t,r]=(0,i.useState)(!1),[n,a]=(0,i.useState)(""),l=_.map((e,t)=>i.createElement(A,{key:t,label:e.label,meets:e.re.test(n)})),o=(e=n.length>5?0:1,_.forEach(t=>{t.re.test(n)||(e+=1)}),Math.max(100-100/(_.length+1)*e,10));return i.createElement(T.J,{opened:t,position:"bottom",width:"target",transitionProps:{transition:"pop"}},i.createElement(T.J.Target,null,i.createElement("div",{onFocusCapture:()=>r(!0),onBlurCapture:()=>r(!1)},i.createElement(s.W,{withAsterisk:!0,label:"Your password",placeholder:"Your password",value:n,onChange:e=>a(e.currentTarget.value)}))),i.createElement(T.J.Dropdown,null,i.createElement(N.E,{color:100===o?"teal":o>50?"yellow":"red",value:o,size:5,mb:"xs"}),i.createElement(A,{label:"Includes at least 6 characters",meets:n.length>5}),l))},centered:!0,maxWidth:340},q=`
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <PasswordInput label="Boolean error" placeholder="Boolean error" error />
      <PasswordInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
`,R={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(s.W,{label:"Boolean error",placeholder:"Boolean error",error:!0}),i.createElement(s.W,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"}))},maxWidth:340,centered:!0,code:q};var B=r(38956),F=r(82671),X=Object.defineProperty,Y=Object.getOwnPropertySymbols,$=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable,K=(e,t,r)=>t in e?X(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,G=(e,t)=>{for(var r in t||(t={}))$.call(t,r)&&K(e,r,t[r]);if(Y)for(var r of Y(t))J.call(t,r)&&K(e,r,t[r]);return e};let H=`
import { IconLock } from '@tabler/icons-react';
import { PasswordInput, rem } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput
      label="Label"
      placeholder="PasswordInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} />}
      {{props}}
    />
  );
}
`,U={type:"styles-api",data:F.m,component:function(e){return i.createElement(s.W,G({label:"Label",placeholder:"PasswordInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:i.createElement(B.Z,{style:{width:(0,z.h)(18),height:(0,z.h)(18)}})},e))},code:H,centered:!0,maxWidth:340},Q=(0,l.A)(o.us.PasswordInput);function ee(e){let t=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p",a:"a"},(0,a.ah)(),e.components),{InputFeatures:r,Demo:l,StylesApiSelectors:o,GetElementRef:i,InputAccessibility:s}=t;return l||er("Demo",!0),i||er("GetElementRef",!0),s||er("InputAccessibility",!0),r||er("InputFeatures",!0),o||er("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r,{component:"PasswordInput",element:"input"}),"\n",(0,n.jsx)(l,{data:w}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { PasswordInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return <PasswordInput value={value} onChange={(event) => setValue(event.currentTarget.value)} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"controlled-visibility-toggle",children:"Controlled visibility toggle"}),"\n",(0,n.jsxs)(t.p,{children:["Control visibility state with ",(0,n.jsx)(t.code,{children:"visible"})," and ",(0,n.jsx)(t.code,{children:"onVisibilityChange"})," props,\nfor example, the props can be used to sync visibility state between two inputs:"]}),"\n",(0,n.jsx)(l,{data:k}),"\n",(0,n.jsx)(t.h2,{id:"change-visibility-toggle-icon",children:"Change visibility toggle icon"}),"\n",(0,n.jsxs)(t.p,{children:["To change visibility toggle icon, pass a React component that accepts ",(0,n.jsx)(t.code,{children:"reveal"})," prop to ",(0,n.jsx)(t.code,{children:"visibilityToggleIcon"}),":"]}),"\n",(0,n.jsx)(l,{data:V}),"\n",(0,n.jsx)(t.h2,{id:"strength-meter-example",children:"Strength meter example"}),"\n",(0,n.jsxs)(t.p,{children:["Password strength meter example with ",(0,n.jsx)(t.a,{href:"/core/progress/",children:"Progress"})," and ",(0,n.jsx)(t.a,{href:"/core/popover/",children:"Popover"})," components:"]}),"\n",(0,n.jsx)(l,{data:L,demoProps:{zIndex:4}}),"\n",(0,n.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,n.jsx)(l,{data:R}),"\n",(0,n.jsx)(o,{component:"PasswordInput"}),"\n",(0,n.jsx)(l,{data:U}),"\n",(0,n.jsx)(i,{component:"PasswordInput",refType:"input"}),"\n",(0,n.jsx)(s,{component:"PasswordInput"}),"\n",(0,n.jsxs)(t.p,{children:["To set ",(0,n.jsx)(t.code,{children:"aria-label"})," on the visibility toggle button, use ",(0,n.jsx)(t.code,{children:"visibilityToggleButtonProps"})," prop:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { PasswordInput } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <PasswordInput\n      label=\"Password\"\n      visibilityToggleProps={{ 'aria-label': 'Toggle password visibility' }}\n    />\n  );\n}\n"})})]})}var et=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(Q,Object.assign({},e,{children:(0,n.jsx)(ee,e)}))};function er(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},16659:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(54764).Z)("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]])},38956:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(54764).Z)("lock","IconLock",[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]])},86171:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(54764).Z)("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])},91361:function(e,t,r){"use strict";r.d(t,{W:function(){return S}});var n=r(67294),a=r(40624),l=r(9779),o=r(643);let i=({reveal:e})=>n.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}},n.createElement("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}));var s={root:"m-f61ca620",input:"m-ccf8da4c",innerInput:"m-f2d85dd2",visibilityToggle:"m-b1072d44"},c=r(89363),p=r(52561),u=r(70097),d=r(3154),m=r(30370),h=r(86109),v=r(28816),y=r(7872),g=r(8586),b=r(48468),f=Object.defineProperty,w=Object.defineProperties,P=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,O=(e,t,r)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,C=(e,t)=>{for(var r in t||(t={}))x.call(t,r)&&O(e,r,t[r]);if(I)for(var r of I(t))k.call(t,r)&&O(e,r,t[r]);return e},j=(e,t)=>w(e,P(t)),E=(e,t)=>{var r={};for(var n in e)x.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&I)for(var n of I(e))0>t.indexOf(n)&&k.call(e,n)&&(r[n]=e[n]);return r};let V={__staticSelector:"PasswordInput",visibilityToggleIcon:i},M=(0,g.Z)((e,{size:t})=>({root:{"--psi-icon-size":(0,b.ap)(t,"psi-icon-size"),"--psi-button-size":(0,b.ap)(t,"psi-button-size")}})),S=(0,d.d)((e,t)=>{let r=(0,m.w)("PasswordInput",V,e),{classNames:i,className:u,style:d,styles:g,unstyled:b,vars:f,required:w,error:P,leftSection:I,disabled:x,id:k,variant:O,inputContainer:S,description:Z,label:z,size:D,__staticSelector:T,errorProps:N,descriptionProps:W,labelProps:A,withAsterisk:_,inputWrapperOrder:L,wrapperProps:q,radius:R,rightSection:B,rightSectionWidth:F,leftSectionWidth:X,visible:Y,defaultVisible:$,onVisibilityChange:J,visibilityToggleIcon:K,visibilityToggleButtonProps:G,rightSectionProps:H,leftSectionProps:U,leftSectionPointerEvents:Q}=r,ee=E(r,["classNames","className","style","styles","unstyled","vars","required","error","leftSection","disabled","id","variant","inputContainer","description","label","size","__staticSelector","errorProps","descriptionProps","labelProps","withAsterisk","inputWrapperOrder","wrapperProps","radius","rightSection","rightSectionWidth","leftSectionWidth","visible","defaultVisible","onVisibilityChange","visibilityToggleIcon","visibilityToggleButtonProps","rightSectionProps","leftSectionProps","leftSectionPointerEvents"]),et=(0,l.M)(k),[er,en]=(0,o.C)({value:Y,defaultValue:$,finalValue:!1,onChange:J}),ea=()=>en(!er),el=(0,h.y)({name:"PasswordInput",classes:s,props:r,className:u,style:d,classNames:i,styles:g,unstyled:b,vars:f,varsResolver:M}),{resolvedClassNames:eo,resolvedStyles:ei}=(0,v.h)({classNames:i,styles:g,props:r}),{styleProps:es,rest:ec}=(0,y.c)(ee),ep=n.createElement(c.A,j(C(j(C({},el("visibilityToggle")),{radius:R,"aria-hidden":!G,tabIndex:-1}),G),{variant:"subtle",color:"gray",unstyled:b,onMouseDown:e=>{var t;e.preventDefault(),null==(t=null==G?void 0:G.onMouseDown)||t.call(G,e),ea()},onKeyDown:e=>{var t;null==(t=null==G?void 0:G.onKeyDown)||t.call(G,e)," "===e.key&&(e.preventDefault(),ea())}}),n.createElement(K,{reveal:er}));return n.createElement(p.I.Wrapper,C(C(C({required:w,id:et,label:z,error:P,description:Z,size:D,classNames:eo,styles:ei,__staticSelector:T,errorProps:N,descriptionProps:W,unstyled:b,withAsterisk:_,inputWrapperOrder:L,inputContainer:S,variant:O,labelProps:j(C({},A),{htmlFor:et})},el("root")),es),q),n.createElement(p.I,{component:"div",error:P,leftSection:I,size:D,classNames:j(C({},eo),{input:(0,a.Z)(s.input,eo.input)}),styles:ei,radius:R,disabled:x,__staticSelector:T,rightSectionWidth:F,rightSection:null!=B?B:ep,variant:O,unstyled:b,leftSectionWidth:X,rightSectionPointerEvents:"all",rightSectionProps:H,leftSectionProps:U,leftSectionPointerEvents:Q,withAria:!1},n.createElement("input",j(C(j(C({required:w,"data-invalid":!!P||void 0,"data-with-left-section":!!I||void 0},el("innerInput")),{disabled:x,id:et,ref:t}),ec),{autoComplete:ec.autoComplete||"off",type:er?"text":"password"}))))});S.classes=C(C({},u.M.classes),s),S.displayName="@mantine/core/PasswordInput"},47081:function(e,t,r){"use strict";r.d(t,{E:function(){return er}});var n=r(67294),a=r(45763);let[l,o]=(0,a.R)("Progress.Root component was not found in tree");var i={root:"m-db6d6462",section:"m-2242eb65","stripes-animation":"m-81a374bd",label:"m-91e40b74"},s=r(3154),c=r(30370),p=r(86109),u=r(81110),d=r(8586),m=r(48468),h=Object.defineProperty,v=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,b=(e,t,r)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))y.call(t,r)&&b(e,r,t[r]);if(v)for(var r of v(t))g.call(t,r)&&b(e,r,t[r]);return e},w=(e,t)=>{var r={};for(var n in e)y.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&v)for(var n of v(e))0>t.indexOf(n)&&g.call(e,n)&&(r[n]=e[n]);return r};let P={},I=(0,d.Z)((e,{size:t,radius:r})=>({root:{"--progress-size":(0,m.ap)(t,"progress-size"),"--progress-radius":void 0===r?void 0:(0,m.H5)(r)}})),x=(0,s.d)((e,t)=>{let r=(0,c.w)("ProgressRoot",P,e),{classNames:a,className:o,style:s,styles:d,unstyled:m,vars:h}=r,v=w(r,["classNames","className","style","styles","unstyled","vars"]),y=(0,p.y)({name:"Progress",classes:i,props:r,className:o,style:s,classNames:a,styles:d,unstyled:m,vars:h,varsResolver:I});return n.createElement(l,{value:{getStyles:y}},n.createElement(u.x,f(f({ref:t},y("root")),v)))});x.classes=i,x.displayName="@mantine/core/ProgressRoot";var k=r(43440),O=r(40184),C=Object.defineProperty,j=Object.defineProperties,E=Object.getOwnPropertyDescriptors,V=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,Z=(e,t,r)=>t in e?C(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,z=(e,t)=>{for(var r in t||(t={}))M.call(t,r)&&Z(e,r,t[r]);if(V)for(var r of V(t))S.call(t,r)&&Z(e,r,t[r]);return e},D=(e,t)=>j(e,E(t)),T=(e,t)=>{var r={};for(var n in e)M.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&V)for(var n of V(e))0>t.indexOf(n)&&S.call(e,n)&&(r[n]=e[n]);return r};let N={withAria:!0},W=(0,s.d)((e,t)=>{let r=(0,c.w)("ProgressSection",N,e),{classNames:a,className:l,style:i,styles:s,vars:p,value:d,withAria:m,color:h,striped:v,animated:y}=r,g=T(r,["classNames","className","style","styles","vars","value","withAria","color","striped","animated"]),b=o(),f=(0,k.rZ)(),w=m?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":d,"aria-valuetext":`${d}%`}:{};return n.createElement(u.x,D(z(z(z({ref:t},b.getStyles("section",{className:l,classNames:a,styles:s,style:i})),g),w),{mod:{striped:v||y,animated:y},__vars:{"--progress-section-width":`${d}%`,"--progress-section-color":(0,O.p)(h,f)}}))});W.classes=i,W.displayName="@mantine/core/ProgressSection";var A=Object.defineProperty,_=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable,R=(e,t,r)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,B=(e,t)=>{for(var r in t||(t={}))L.call(t,r)&&R(e,r,t[r]);if(_)for(var r of _(t))q.call(t,r)&&R(e,r,t[r]);return e},F=(e,t)=>{var r={};for(var n in e)L.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&_)for(var n of _(e))0>t.indexOf(n)&&q.call(e,n)&&(r[n]=e[n]);return r};let X={},Y=(0,s.d)((e,t)=>{let r=(0,c.w)("ProgressLabel",X,e),{classNames:a,className:l,style:i,styles:s,vars:p}=r,d=F(r,["classNames","className","style","styles","vars"]),m=o();return n.createElement(u.x,B(B({ref:t},m.getStyles("label",{className:l,style:i,classNames:a,styles:s})),d))});Y.classes=i,Y.displayName="@mantine/core/ProgressLabel";var $=r(28816),J=Object.defineProperty,K=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable,U=(e,t,r)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Q=(e,t)=>{for(var r in t||(t={}))G.call(t,r)&&U(e,r,t[r]);if(K)for(var r of K(t))H.call(t,r)&&U(e,r,t[r]);return e},ee=(e,t)=>{var r={};for(var n in e)G.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&K)for(var n of K(e))0>t.indexOf(n)&&H.call(e,n)&&(r[n]=e[n]);return r};let et={},er=(0,s.d)((e,t)=>{let r=(0,c.w)("Progress",et,e),{value:a,classNames:l,styles:o,vars:i,color:s,striped:p,animated:u,"aria-label":d}=r,m=ee(r,["value","classNames","styles","vars","color","striped","animated","aria-label"]),{resolvedClassNames:h,resolvedStyles:v}=(0,$.h)({classNames:l,styles:o,props:r});return n.createElement(x,Q({ref:t,classNames:h,styles:v,vars:i},m),n.createElement(W,{value:a,color:s,striped:p,animated:u,"aria-label":d}))});er.classes=i,er.displayName="@mantine/core/Progress",er.Section=W,er.Root=x,er.Label=Y},88005:function(e,t,r){"use strict";r.d(t,{Mt:function(){return n},nW:function(){return a},pc:function(){return l}});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],a=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},12177:function(e,t,r){"use strict";r.d(t,{q:function(){return a}});var n=r(67294);function a(e=!1,t){let{onOpen:r,onClose:a}=t||{},[l,o]=(0,n.useState)(e),i=(0,n.useCallback)(()=>{o(e=>e||(null==r||r(),!0))},[r]),s=(0,n.useCallback)(()=>{o(e=>e?(null==a||a(),!1):e)},[a]),c=(0,n.useCallback)(()=>{l?s():i()},[s,i,l]);return[l,{open:i,close:s,toggle:c}]}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=22043)}),_N_E=e.O()}]);