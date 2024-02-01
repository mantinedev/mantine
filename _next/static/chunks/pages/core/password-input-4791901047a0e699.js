(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56696],{38956:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(54764).Z)("lock","IconLock",[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]])},86171:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(54764).Z)("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])},14785:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/password-input",function(){return r(75095)}])},75095:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return O}});var n=r(24246),o=r(71670),i=r(27378),l=r(25916),s=r(77481);let a=`
import { PasswordInput } from '@mantine/core';


function Demo() {
  return (
    <PasswordInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,c={type:"configurator",component:function(e){return i.createElement(l.W,{...e,placeholder:"Input placeholder"})},code:a,centered:!0,maxWidth:340,controls:s.pc};var p=r(27884),u=r(87921);let d=`
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
`,m={type:"code",component:function(){let[e,{toggle:t}]=(0,u.q)(!1);return i.createElement(p.K,null,i.createElement(l.W,{label:"Password",defaultValue:"secret",visible:e,onVisibilityChange:t}),i.createElement(l.W,{label:"Confirm password",defaultValue:"secret",visible:e,onVisibilityChange:t}))},code:d,centered:!0,maxWidth:340};var h=r(54764),g=(0,h.Z)("eye-off","IconEyeOff",[["path",{d:"M10.585 10.587a2 2 0 0 0 2.829 2.828",key:"svg-0"}],["path",{d:"M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87",key:"svg-1"}],["path",{d:"M3 3l18 18",key:"svg-2"}]]),b=(0,h.Z)("eye-check","IconEyeCheck",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M11.102 17.957c-3.204 -.307 -5.904 -2.294 -8.102 -5.957c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6a19.5 19.5 0 0 1 -.663 1.032",key:"svg-1"}],["path",{d:"M15 19l2 2l4 -4",key:"svg-2"}]]);let y=`
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
`,v={type:"code",component:function(){return i.createElement(l.W,{maw:320,mx:"auto",label:"Change visibility toggle icon",placeholder:"Change visibility toggle icon",defaultValue:"secret",visibilityToggleIcon:({reveal:e})=>e?i.createElement(g,{style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}}):i.createElement(b,{style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}})})},code:y};var f=r(16659),w=r(86171),Text=r(26569),x=r(71078),I=r(56589),P=r(63433),C=r(30454);let E=`
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
`;function V({meets:e,label:t}){return i.createElement(Text.x,{c:e?"teal":"red",style:{display:"flex",alignItems:"center"},mt:7,size:"sm"},e?i.createElement(f.Z,{style:{width:(0,x.h)(14),height:(0,x.h)(14)}}):i.createElement(w.Z,{style:{width:(0,x.h)(14),height:(0,x.h)(14)}})," ",i.createElement(I.x,{ml:10},t))}let j=[{re:/[0-9]/,label:"Includes number"},{re:/[a-z]/,label:"Includes lowercase letter"},{re:/[A-Z]/,label:"Includes uppercase letter"},{re:/[$&+,:;=?@#|'<>.^*()%!-]/,label:"Includes special symbol"}],k={type:"code",code:E,component:function(){let e;let[t,r]=(0,i.useState)(!1),[n,o]=(0,i.useState)(""),s=j.map((e,t)=>i.createElement(V,{key:t,label:e.label,meets:e.re.test(n)})),a=(e=n.length>5?0:1,j.forEach(t=>{t.re.test(n)||(e+=1)}),Math.max(100-100/(j.length+1)*e,10));return i.createElement(P.J,{opened:t,position:"bottom",width:"target",transitionProps:{transition:"pop"}},i.createElement(P.J.Target,null,i.createElement("div",{onFocusCapture:()=>r(!0),onBlurCapture:()=>r(!1)},i.createElement(l.W,{withAsterisk:!0,label:"Your password",placeholder:"Your password",value:n,onChange:e=>o(e.currentTarget.value)}))),i.createElement(P.J.Dropdown,null,i.createElement(C.E,{color:100===a?"teal":a>50?"yellow":"red",value:a,size:5,mb:"xs"}),i.createElement(V,{label:"Includes at least 6 characters",meets:n.length>5}),s))},centered:!0,maxWidth:340};var S=r(38956);let W=`
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
`,z={type:"code",component:function(){let e=i.createElement(S.Z,{style:{width:(0,x.h)(18),height:(0,x.h)(18)},stroke:1.5});return i.createElement(i.Fragment,null,i.createElement(l.W,{leftSection:e,leftSectionPointerEvents:"none",label:"With left section",placeholder:"With left section"}),i.createElement(l.W,{rightSection:e,label:"With right section",placeholder:"With right section",rightSectionPointerEvents:"none",mt:"md"}))},code:W,centered:!0,maxWidth:340},D=`
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
`,T={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(l.W,{label:"Boolean error",placeholder:"Boolean error",error:!0}),i.createElement(l.W,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"}))},maxWidth:340,centered:!0,code:D},M=`
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput disabled label="Disabled password input" placeholder="Disabled password input" />
  );
}
`,Z={type:"code",component:function(){return i.createElement(l.W,{disabled:!0,label:"Disabled password input",placeholder:"Disabled password input"})},code:M,centered:!0,maxWidth:340};var _=r(20827);let N=`
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
`,L={type:"styles-api",data:_.m,component:function(e){return i.createElement(l.W,{label:"Label",placeholder:"PasswordInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:i.createElement(S.Z,{style:{width:(0,x.h)(18),height:(0,x.h)(18)}}),...e})},code:N,centered:!0,maxWidth:340};var q=r(3916),A=r(54568);let R=(0,q.A)(A.us.PasswordInput);function B(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:r,GetElementRef:i,InputAccessibility:l,InputFeatures:s,InputSections:a,StylesApiSelectors:p}=t;return r||F("Demo",!0),i||F("GetElementRef",!0),l||F("InputAccessibility",!0),s||F("InputFeatures",!0),a||F("InputSections",!0),p||F("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(s,{component:"PasswordInput",element:"input"}),"\n",(0,n.jsx)(r,{data:c}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { PasswordInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return (\n    <PasswordInput\n      value={value}\n      onChange={(event) => setValue(event.currentTarget.value)}\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"controlled-visibility-toggle",children:"Controlled visibility toggle"}),"\n",(0,n.jsxs)(t.p,{children:["Control visibility state with ",(0,n.jsx)(t.code,{children:"visible"})," and ",(0,n.jsx)(t.code,{children:"onVisibilityChange"})," props,\nfor example, the props can be used to sync visibility state between two inputs:"]}),"\n",(0,n.jsx)(r,{data:m}),"\n",(0,n.jsx)(t.h2,{id:"change-visibility-toggle-icon",children:"Change visibility toggle icon"}),"\n",(0,n.jsxs)(t.p,{children:["To change visibility toggle icon, pass a React component that accepts ",(0,n.jsx)(t.code,{children:"reveal"})," prop to ",(0,n.jsx)(t.code,{children:"visibilityToggleIcon"}),":"]}),"\n",(0,n.jsx)(r,{data:v}),"\n",(0,n.jsx)(t.h2,{id:"strength-meter-example",children:"Strength meter example"}),"\n",(0,n.jsxs)(t.p,{children:["Password strength meter example with ",(0,n.jsx)(t.a,{href:"/core/progress/",children:"Progress"})," and ",(0,n.jsx)(t.a,{href:"/core/popover/",children:"Popover"})," components:"]}),"\n",(0,n.jsx)(r,{data:k,demoProps:{zIndex:4}}),"\n",(0,n.jsx)(t.h2,{id:"usage-without-visibility-toggle",children:"Usage without visibility toggle"}),"\n",(0,n.jsxs)(t.p,{children:["If you do not need visibility toggle button, use ",(0,n.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"})," component instead:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { TextInput } from '@mantine/core';\n\nfunction Demo() {\n  return <TextInput type=\"password\" />;\n}\n"})}),"\n",(0,n.jsx)(a,{component:"PasswordInput"}),"\n",(0,n.jsxs)(t.p,{children:["Note that when ",(0,n.jsx)(t.code,{children:"rightSection"})," prop is used, visibility toggle button is not rendered."]}),"\n",(0,n.jsx)(r,{data:z}),"\n",(0,n.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,n.jsx)(r,{data:T}),"\n",(0,n.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,n.jsxs)(t.p,{children:["When ",(0,n.jsx)(t.code,{children:"disabled"})," prop is set, visibility toggle button is hidden:"]}),"\n",(0,n.jsx)(r,{data:Z}),"\n",(0,n.jsx)(p,{component:"PasswordInput"}),"\n",(0,n.jsx)(r,{data:L}),"\n",(0,n.jsx)(i,{component:"PasswordInput",refType:"input"}),"\n",(0,n.jsx)(l,{component:"PasswordInput"}),"\n",(0,n.jsxs)(t.p,{children:["To set ",(0,n.jsx)(t.code,{children:"aria-label"})," on the visibility toggle button, use ",(0,n.jsx)(t.code,{children:"visibilityToggleButtonProps"})," prop:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { PasswordInput } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <PasswordInput\n      label=\"Password\"\n      visibilityToggleButtonProps={{\n        'aria-label': 'Toggle password visibility',\n      }}\n    />\n  );\n}\n"})})]})}function O(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(R,{...e,children:(0,n.jsx)(B,{...e})})}function F(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},77481:function(e,t,r){"use strict";r.d(t,{Mt:function(){return n},nW:function(){return o},pc:function(){return i}});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],o=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],i=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},25916:function(e,t,r){"use strict";r.d(t,{W:function(){return w}});var n=r(27378),o=r(40624),i=r(31002),l=r(58675),s=r(92082),a=r(83453),c=r(5564),p=r(6231),u=r(96739),d=r(55934),m=r(20410),h=r(84246),g=r(42487),b=r(23163),y={root:"m-f61ca620",input:"m-ccf8da4c",innerInput:"m-f2d85dd2",visibilityToggle:"m-b1072d44"};let v={visibilityToggleIcon:({reveal:e})=>n.createElement("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}},n.createElement("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))},f=(0,a.Z)((e,{size:t})=>({root:{"--psi-icon-size":(0,s.ap)(t,"psi-icon-size"),"--psi-button-size":(0,s.ap)(t,"psi-button-size")}})),w=(0,m.d)((e,t)=>{let r=(0,u.w)("PasswordInput",v,e),{classNames:s,className:a,style:m,styles:b,unstyled:w,vars:x,required:I,error:P,leftSection:C,disabled:E,id:V,variant:j,inputContainer:k,description:S,label:W,size:z,errorProps:D,descriptionProps:T,labelProps:M,withAsterisk:Z,inputWrapperOrder:_,wrapperProps:N,radius:L,rightSection:q,rightSectionWidth:A,rightSectionPointerEvents:R,leftSectionWidth:B,visible:O,defaultVisible:F,onVisibilityChange:X,visibilityToggleIcon:$,visibilityToggleButtonProps:Y,rightSectionProps:J,leftSectionProps:K,leftSectionPointerEvents:U,mod:G,...H}=r,Q=(0,i.M)(V),[ee,et]=(0,l.C)({value:O,defaultValue:F,finalValue:!1,onChange:X}),er=()=>et(!ee),en=(0,p.y)({name:"PasswordInput",classes:y,props:r,className:a,style:m,classNames:s,styles:b,unstyled:w,vars:x,varsResolver:f}),{resolvedClassNames:eo,resolvedStyles:ei}=(0,c.h)({classNames:s,styles:b,props:r}),{styleProps:el,rest:es}=(0,d.c)(H),ea=n.createElement(h.A,{...en("visibilityToggle"),disabled:E,radius:L,"aria-hidden":!Y,tabIndex:-1,...Y,variant:"subtle",color:"gray",unstyled:w,onMouseDown:e=>{e.preventDefault(),Y?.onMouseDown?.(e),er()},onKeyDown:e=>{Y?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),er())}},n.createElement($,{reveal:ee}));return n.createElement(g.I.Wrapper,{required:I,id:Q,label:W,error:P,description:S,size:z,classNames:eo,styles:ei,__staticSelector:"PasswordInput",errorProps:D,descriptionProps:T,unstyled:w,withAsterisk:Z,inputWrapperOrder:_,inputContainer:k,variant:j,labelProps:{...M,htmlFor:Q},mod:G,...en("root"),...el,...N},n.createElement(g.I,{component:"div",error:P,leftSection:C,size:z,classNames:{...eo,input:(0,o.Z)(y.input,eo.input)},styles:ei,radius:L,disabled:E,__staticSelector:"PasswordInput",rightSectionWidth:A,rightSection:q??ea,variant:j,unstyled:w,leftSectionWidth:B,rightSectionPointerEvents:R||"all",rightSectionProps:J,leftSectionProps:K,leftSectionPointerEvents:U,withAria:!1},n.createElement("input",{required:I,"data-invalid":!!P||void 0,"data-with-left-section":!!C||void 0,...en("innerInput"),disabled:E,id:Q,ref:t,...es,autoComplete:es.autoComplete||"off",type:ee?"text":"password"})))});w.classes={...b.M.classes,...y},w.displayName="@mantine/core/PasswordInput"},30454:function(e,t,r){"use strict";r.d(t,{E:function(){return j}});var n=r(27378),o=r(5564),i=r(96739),l=r(20410),s=r(56589),a=r(71656);let[c,p]=(0,a.R)("Progress.Root component was not found in tree");var u={root:"m-db6d6462",section:"m-2242eb65","stripes-animation":"m-81a374bd",label:"m-91e40b74"};let d={},m=(0,l.d)((e,t)=>{let{classNames:r,className:o,style:l,styles:a,vars:c,...u}=(0,i.w)("ProgressLabel",d,e),m=p();return n.createElement(s.x,{ref:t,...m.getStyles("label",{className:o,style:l,classNames:r,styles:a}),...u})});m.classes=u,m.displayName="@mantine/core/ProgressLabel";var h=r(92082),g=r(83453),b=r(6231);let y={},v=(0,g.Z)((e,{size:t,radius:r,transitionDuration:n})=>({root:{"--progress-size":(0,h.ap)(t,"progress-size"),"--progress-radius":void 0===r?void 0:(0,h.H5)(r),"--progress-transition-duration":"number"==typeof n?`${n}ms`:void 0}})),f=(0,l.d)((e,t)=>{let r=(0,i.w)("ProgressRoot",y,e),{classNames:o,className:l,style:a,styles:p,unstyled:d,vars:m,autoContrast:h,transitionDuration:g,...f}=r,w=(0,b.y)({name:"Progress",classes:u,props:r,className:l,style:a,classNames:o,styles:p,unstyled:d,vars:m,varsResolver:v});return n.createElement(c,{value:{getStyles:w,autoContrast:h}},n.createElement(s.x,{ref:t,...w("root"),...f}))});f.classes=u,f.displayName="@mantine/core/ProgressRoot";var w=r(89738),x=r(34121),I=r(55357),P=r(2256);let C={withAria:!0},E=(0,l.d)((e,t)=>{let{classNames:r,className:o,style:l,styles:a,vars:c,value:u,withAria:d,color:m,striped:h,animated:g,mod:b,...y}=(0,i.w)("ProgressSection",C,e),v=p(),f=(0,P.rZ)(),E=d?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":u,"aria-valuetext":`${u}%`}:{};return n.createElement(s.x,{ref:t,...v.getStyles("section",{className:o,classNames:r,styles:a,style:l}),...y,...E,mod:[{striped:h||g,animated:g},b],__vars:{"--progress-section-width":`${u}%`,"--progress-section-color":(0,w.p)(m,f),"--progress-label-color":(0,I.o)(v.autoContrast,f)?(0,x.R)({color:m,theme:f}):void 0}})});E.classes=u,E.displayName="@mantine/core/ProgressSection";let V={},j=(0,l.d)((e,t)=>{let r=(0,i.w)("Progress",V,e),{value:l,classNames:s,styles:a,vars:c,color:p,striped:u,animated:d,"aria-label":m,...h}=r,{resolvedClassNames:g,resolvedStyles:b}=(0,o.h)({classNames:s,styles:a,props:r});return n.createElement(f,{ref:t,classNames:g,styles:b,vars:c,...h},n.createElement(E,{value:l,color:p,striped:u,animated:d,"aria-label":m}))});j.classes=u,j.displayName="@mantine/core/Progress",j.Section=E,j.Root=f,j.Label=m},87921:function(e,t,r){"use strict";r.d(t,{q:function(){return o}});var n=r(27378);function o(e=!1,t){let{onOpen:r,onClose:o}=t||{},[i,l]=(0,n.useState)(e),s=(0,n.useCallback)(()=>{l(e=>e||(r?.(),!0))},[r]),a=(0,n.useCallback)(()=>{l(e=>e?(o?.(),!1):e)},[o]),c=(0,n.useCallback)(()=>{i?a():s()},[a,s,i]);return[i,{open:s,close:a,toggle:c}]}}},function(e){e.O(0,[30370,15819,2775,49774,92888,40179],function(){return e(e.s=14785)}),_N_E=e.O()}]);