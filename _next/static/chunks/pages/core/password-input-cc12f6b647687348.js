(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6696],{16659:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(54764).Z)("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]])},38956:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(54764).Z)("lock","IconLock",[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]])},86171:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(54764).Z)("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])},14785:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/password-input",function(){return r(75095)}])},75095:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return O}});var n=r(24246),o=r(71670),i=r(3916),l=r(30289),s=r(27378),a=r(25916),c=r(77481);let p=`
import { PasswordInput } from '@mantine/core';


function Demo() {
  return (
    <PasswordInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,u={type:"configurator",component:function(e){return s.createElement(a.W,{...e,placeholder:"Input placeholder"})},code:p,centered:!0,maxWidth:340,controls:c.pc};var d=r(87921),m=r(27884);let h=`
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
`,g={type:"code",component:function(){let[e,{toggle:t}]=(0,d.q)(!1);return s.createElement(m.K,null,s.createElement(a.W,{label:"Password",defaultValue:"secret",visible:e,onVisibilityChange:t}),s.createElement(a.W,{label:"Confirm password",defaultValue:"secret",visible:e,onVisibilityChange:t}))},code:h,centered:!0,maxWidth:340};var b=r(54764),y=(0,b.Z)("eye-off","IconEyeOff",[["path",{d:"M10.585 10.587a2 2 0 0 0 2.829 2.828",key:"svg-0"}],["path",{d:"M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87",key:"svg-1"}],["path",{d:"M3 3l18 18",key:"svg-2"}]]),v=(0,b.Z)("eye-check","IconEyeCheck",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M11.102 17.957c-3.204 -.307 -5.904 -2.294 -8.102 -5.957c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6a19.5 19.5 0 0 1 -.663 1.032",key:"svg-1"}],["path",{d:"M15 19l2 2l4 -4",key:"svg-2"}]]);let f=`
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
`,w={type:"code",component:function(){return s.createElement(a.W,{maw:320,mx:"auto",label:"Change visibility toggle icon",placeholder:"Change visibility toggle icon",defaultValue:"secret",visibilityToggleIcon:({reveal:e})=>e?s.createElement(y,{style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}}):s.createElement(v,{style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}})})},code:f};var x=r(16659),I=r(86171),Text=r(26569),P=r(71078),C=r(56589),E=r(63433),k=r(30454);let V=`
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
`;function j({meets:e,label:t}){return s.createElement(Text.x,{c:e?"teal":"red",style:{display:"flex",alignItems:"center"},mt:7,size:"sm"},e?s.createElement(x.Z,{style:{width:(0,P.h)(14),height:(0,P.h)(14)}}):s.createElement(I.Z,{style:{width:(0,P.h)(14),height:(0,P.h)(14)}})," ",s.createElement(C.x,{ml:10},t))}let S=[{re:/[0-9]/,label:"Includes number"},{re:/[a-z]/,label:"Includes lowercase letter"},{re:/[A-Z]/,label:"Includes uppercase letter"},{re:/[$&+,:;=?@#|'<>.^*()%!-]/,label:"Includes special symbol"}],W={type:"code",code:V,component:function(){let e;let[t,r]=(0,s.useState)(!1),[n,o]=(0,s.useState)(""),i=S.map((e,t)=>s.createElement(j,{key:t,label:e.label,meets:e.re.test(n)})),l=(e=n.length>5?0:1,S.forEach(t=>{t.re.test(n)||(e+=1)}),Math.max(100-100/(S.length+1)*e,10));return s.createElement(E.J,{opened:t,position:"bottom",width:"target",transitionProps:{transition:"pop"}},s.createElement(E.J.Target,null,s.createElement("div",{onFocusCapture:()=>r(!0),onBlurCapture:()=>r(!1)},s.createElement(a.W,{withAsterisk:!0,label:"Your password",placeholder:"Your password",value:n,onChange:e=>o(e.currentTarget.value)}))),s.createElement(E.J.Dropdown,null,s.createElement(k.E,{color:100===l?"teal":l>50?"yellow":"red",value:l,size:5,mb:"xs"}),s.createElement(j,{label:"Includes at least 6 characters",meets:n.length>5}),i))},centered:!0,maxWidth:340};var z=r(38956);let D=`
import { PasswordInput, rem } from '@mantine/core';
import { IconLock } from '@tabler/icons-react';

function Demo() {
  const icon = <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />;

  return (
    <>
      <PasswordInput leftSection={icon} label="With left section" placeholder="With left section" />
      <PasswordInput
        rightSection={icon}
        label="With right section"
        placeholder="With right section"
        mt="md"
      />
    </>
  );
}
`,T={type:"code",component:function(){let e=s.createElement(z.Z,{style:{width:(0,P.h)(18),height:(0,P.h)(18)},stroke:1.5});return s.createElement(s.Fragment,null,s.createElement(a.W,{leftSection:e,leftSectionPointerEvents:"none",label:"With left section",placeholder:"With left section"}),s.createElement(a.W,{rightSection:e,label:"With right section",placeholder:"With right section",rightSectionPointerEvents:"none",mt:"md"}))},code:D,centered:!0,maxWidth:340},M=`
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
`,Z={type:"code",component:function(){return s.createElement(s.Fragment,null,s.createElement(a.W,{label:"Boolean error",placeholder:"Boolean error",error:!0}),s.createElement(a.W,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"}))},maxWidth:340,centered:!0,code:M},_=`
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput disabled label="Disabled password input" placeholder="Disabled password input" />
  );
}
`,N={type:"code",component:function(){return s.createElement(a.W,{disabled:!0,label:"Disabled password input",placeholder:"Disabled password input"})},code:_,centered:!0,maxWidth:340};var L=r(20827);let q=`
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
`,A={type:"styles-api",data:L.m,component:function(e){return s.createElement(a.W,{label:"Label",placeholder:"PasswordInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:s.createElement(z.Z,{style:{width:(0,P.h)(18),height:(0,P.h)(18)}}),...e})},code:q,centered:!0,maxWidth:340},B=(0,i.A)(l.us.PasswordInput);function R(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:r,GetElementRef:i,InputAccessibility:l,InputFeatures:s,InputSections:a,StylesApiSelectors:c}=t;return r||F("Demo",!0),i||F("GetElementRef",!0),l||F("InputAccessibility",!0),s||F("InputFeatures",!0),a||F("InputSections",!0),c||F("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s,{component:"PasswordInput",element:"input"}),"\n",(0,n.jsx)(r,{data:u}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { PasswordInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return (\n    <PasswordInput\n      value={value}\n      onChange={(event) => setValue(event.currentTarget.value)}\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"controlled-visibility-toggle",children:"Controlled visibility toggle"}),"\n",(0,n.jsxs)(t.p,{children:["Control visibility state with ",(0,n.jsx)(t.code,{children:"visible"})," and ",(0,n.jsx)(t.code,{children:"onVisibilityChange"})," props,\nfor example, the props can be used to sync visibility state between two inputs:"]}),"\n",(0,n.jsx)(r,{data:g}),"\n",(0,n.jsx)(t.h2,{id:"change-visibility-toggle-icon",children:"Change visibility toggle icon"}),"\n",(0,n.jsxs)(t.p,{children:["To change visibility toggle icon, pass a React component that accepts ",(0,n.jsx)(t.code,{children:"reveal"})," prop to ",(0,n.jsx)(t.code,{children:"visibilityToggleIcon"}),":"]}),"\n",(0,n.jsx)(r,{data:w}),"\n",(0,n.jsx)(t.h2,{id:"strength-meter-example",children:"Strength meter example"}),"\n",(0,n.jsxs)(t.p,{children:["Password strength meter example with ",(0,n.jsx)(t.a,{href:"/core/progress/",children:"Progress"})," and ",(0,n.jsx)(t.a,{href:"/core/popover/",children:"Popover"})," components:"]}),"\n",(0,n.jsx)(r,{data:W,demoProps:{zIndex:4}}),"\n",(0,n.jsx)(t.h2,{id:"usage-without-visibility-toggle",children:"Usage without visibility toggle"}),"\n",(0,n.jsxs)(t.p,{children:["If you do not need visibility toggle button, use ",(0,n.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"})," component instead:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { TextInput } from '@mantine/core';\n\nfunction Demo() {\n  return <TextInput type=\"password\" />;\n}\n"})}),"\n",(0,n.jsx)(a,{component:"PasswordInput"}),"\n",(0,n.jsxs)(t.p,{children:["Note that when ",(0,n.jsx)(t.code,{children:"rightSection"})," prop is used, visibility toggle button is not rendered."]}),"\n",(0,n.jsx)(r,{data:T}),"\n",(0,n.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,n.jsx)(r,{data:Z}),"\n",(0,n.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,n.jsxs)(t.p,{children:["When ",(0,n.jsx)(t.code,{children:"disabled"})," prop is set, visibility toggle button is hidden:"]}),"\n",(0,n.jsx)(r,{data:N}),"\n",(0,n.jsx)(c,{component:"PasswordInput"}),"\n",(0,n.jsx)(r,{data:A}),"\n",(0,n.jsx)(i,{component:"PasswordInput",refType:"input"}),"\n",(0,n.jsx)(l,{component:"PasswordInput"}),"\n",(0,n.jsxs)(t.p,{children:["To set ",(0,n.jsx)(t.code,{children:"aria-label"})," on the visibility toggle button, use ",(0,n.jsx)(t.code,{children:"visibilityToggleButtonProps"})," prop:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { PasswordInput } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <PasswordInput\n      label=\"Password\"\n      visibilityToggleButtonProps={{\n        'aria-label': 'Toggle password visibility',\n      }}\n    />\n  );\n}\n"})})]})}function O(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(B,{...e,children:(0,n.jsx)(R,{...e})})}function F(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},77481:function(e,t,r){"use strict";r.d(t,{Mt:function(){return n},nW:function(){return o},pc:function(){return i}});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],o=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],i=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},25916:function(e,t,r){"use strict";r.d(t,{W:function(){return w}});var n=r(27378),o=r(40624),i=r(31002),l=r(58675),s=r(92082),a=r(83453),c=r(5564),p=r(6231),u=r(96739),d=r(55934),m=r(20410),h=r(23163),g=r(42487),b=r(84246),y={root:"m-f61ca620",input:"m-ccf8da4c",innerInput:"m-f2d85dd2",visibilityToggle:"m-b1072d44"};let v={visibilityToggleIcon:({reveal:e})=>n.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}},n.createElement("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))},f=(0,a.Z)((e,{size:t})=>({root:{"--psi-icon-size":(0,s.ap)(t,"psi-icon-size"),"--psi-button-size":(0,s.ap)(t,"psi-button-size")}})),w=(0,m.d)((e,t)=>{let r=(0,u.w)("PasswordInput",v,e),{classNames:s,className:a,style:m,styles:h,unstyled:w,vars:x,required:I,error:P,leftSection:C,disabled:E,id:k,variant:V,inputContainer:j,description:S,label:W,size:z,errorProps:D,descriptionProps:T,labelProps:M,withAsterisk:Z,inputWrapperOrder:_,wrapperProps:N,radius:L,rightSection:q,rightSectionWidth:A,rightSectionPointerEvents:B,leftSectionWidth:R,visible:O,defaultVisible:F,onVisibilityChange:X,visibilityToggleIcon:Y,visibilityToggleButtonProps:$,rightSectionProps:J,leftSectionProps:K,leftSectionPointerEvents:U,...G}=r,H=(0,i.M)(k),[Q,ee]=(0,l.C)({value:O,defaultValue:F,finalValue:!1,onChange:X}),et=()=>ee(!Q),er=(0,p.y)({name:"PasswordInput",classes:y,props:r,className:a,style:m,classNames:s,styles:h,unstyled:w,vars:x,varsResolver:f}),{resolvedClassNames:en,resolvedStyles:eo}=(0,c.h)({classNames:s,styles:h,props:r}),{styleProps:ei,rest:el}=(0,d.c)(G),es=n.createElement(b.A,{...er("visibilityToggle"),disabled:E,radius:L,"aria-hidden":!$,tabIndex:-1,...$,variant:"subtle",color:"gray",unstyled:w,onMouseDown:e=>{e.preventDefault(),$?.onMouseDown?.(e),et()},onKeyDown:e=>{$?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),et())}},n.createElement(Y,{reveal:Q}));return n.createElement(g.I.Wrapper,{required:I,id:H,label:W,error:P,description:S,size:z,classNames:en,styles:eo,__staticSelector:"PasswordInput",errorProps:D,descriptionProps:T,unstyled:w,withAsterisk:Z,inputWrapperOrder:_,inputContainer:j,variant:V,labelProps:{...M,htmlFor:H},...er("root"),...ei,...N},n.createElement(g.I,{component:"div",error:P,leftSection:C,size:z,classNames:{...en,input:(0,o.Z)(y.input,en.input)},styles:eo,radius:L,disabled:E,__staticSelector:"PasswordInput",rightSectionWidth:A,rightSection:q??es,variant:V,unstyled:w,leftSectionWidth:R,rightSectionPointerEvents:B||"all",rightSectionProps:J,leftSectionProps:K,leftSectionPointerEvents:U,withAria:!1},n.createElement("input",{required:I,"data-invalid":!!P||void 0,"data-with-left-section":!!C||void 0,...er("innerInput"),disabled:E,id:H,ref:t,...el,autoComplete:el.autoComplete||"off",type:Q?"text":"password"})))});w.classes={...h.M.classes,...y},w.displayName="@mantine/core/PasswordInput"},30454:function(e,t,r){"use strict";r.d(t,{E:function(){return E}});var n=r(27378),o=r(5564),i=r(96739),l=r(20410),s=r(92082),a=r(83453),c=r(6231),p=r(56589),u=r(71656);let[d,m]=(0,u.R)("Progress.Root component was not found in tree");var h={root:"m-db6d6462",section:"m-2242eb65","stripes-animation":"m-81a374bd",label:"m-91e40b74"};let g={},b=(0,a.Z)((e,{size:t,radius:r})=>({root:{"--progress-size":(0,s.ap)(t,"progress-size"),"--progress-radius":void 0===r?void 0:(0,s.H5)(r)}})),y=(0,l.d)((e,t)=>{let r=(0,i.w)("ProgressRoot",g,e),{classNames:o,className:l,style:s,styles:a,unstyled:u,vars:m,...y}=r,v=(0,c.y)({name:"Progress",classes:h,props:r,className:l,style:s,classNames:o,styles:a,unstyled:u,vars:m,varsResolver:b});return n.createElement(d,{value:{getStyles:v}},n.createElement(p.x,{ref:t,...v("root"),...y}))});y.classes=h,y.displayName="@mantine/core/ProgressRoot";var v=r(89738),f=r(2256);let w={withAria:!0},x=(0,l.d)((e,t)=>{let{classNames:r,className:o,style:l,styles:s,vars:a,value:c,withAria:u,color:d,striped:h,animated:g,...b}=(0,i.w)("ProgressSection",w,e),y=m(),x=(0,f.rZ)(),I=u?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":c,"aria-valuetext":`${c}%`}:{};return n.createElement(p.x,{ref:t,...y.getStyles("section",{className:o,classNames:r,styles:s,style:l}),...b,...I,mod:{striped:h||g,animated:g},__vars:{"--progress-section-width":`${c}%`,"--progress-section-color":(0,v.p)(d,x)}})});x.classes=h,x.displayName="@mantine/core/ProgressSection";let I={},P=(0,l.d)((e,t)=>{let{classNames:r,className:o,style:l,styles:s,vars:a,...c}=(0,i.w)("ProgressLabel",I,e),u=m();return n.createElement(p.x,{ref:t,...u.getStyles("label",{className:o,style:l,classNames:r,styles:s}),...c})});P.classes=h,P.displayName="@mantine/core/ProgressLabel";let C={},E=(0,l.d)((e,t)=>{let r=(0,i.w)("Progress",C,e),{value:l,classNames:s,styles:a,vars:c,color:p,striped:u,animated:d,"aria-label":m,...h}=r,{resolvedClassNames:g,resolvedStyles:b}=(0,o.h)({classNames:s,styles:a,props:r});return n.createElement(y,{ref:t,classNames:g,styles:b,vars:c,...h},n.createElement(x,{value:l,color:p,striped:u,animated:d,"aria-label":m}))});E.classes=h,E.displayName="@mantine/core/Progress",E.Section=x,E.Root=y,E.Label=P},87921:function(e,t,r){"use strict";r.d(t,{q:function(){return o}});var n=r(27378);function o(e=!1,t){let{onOpen:r,onClose:o}=t||{},[i,l]=(0,n.useState)(e),s=(0,n.useCallback)(()=>{l(e=>e||(r?.(),!0))},[r]),a=(0,n.useCallback)(()=>{l(e=>e?(o?.(),!1):e)},[o]),c=(0,n.useCallback)(()=>{i?a():s()},[a,s,i]);return[i,{open:s,close:a,toggle:c}]}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=14785)}),_N_E=e.O()}]);