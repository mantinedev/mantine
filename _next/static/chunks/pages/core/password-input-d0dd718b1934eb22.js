(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56696],{9945:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(99882).Z)("lock","IconLock",[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]])},5858:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(99882).Z)("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])},83114:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/password-input",function(){return r(11224)}])},11224:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return O}});var n=r(52322),o=r(45392),s=r(60284),i=r(76528);let l=`
import { PasswordInput } from '@mantine/core';


function Demo() {
  return (
    <PasswordInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,a={type:"configurator",component:function(e){return(0,n.jsx)(s.W,{...e,placeholder:"Input placeholder"})},code:l,centered:!0,maxWidth:340,controls:i.pc};var c=r(65438),d=r(3900);let p=`
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
`,u={type:"code",component:function(){let[e,{toggle:t}]=(0,d.q)(!1);return(0,n.jsxs)(c.K,{children:[(0,n.jsx)(s.W,{label:"Password",defaultValue:"secret",visible:e,onVisibilityChange:t}),(0,n.jsx)(s.W,{label:"Confirm password",defaultValue:"secret",visible:e,onVisibilityChange:t})]})},code:p,centered:!0,maxWidth:340};var h=r(99882),m=(0,h.Z)("eye-off","IconEyeOff",[["path",{d:"M10.585 10.587a2 2 0 0 0 2.829 2.828",key:"svg-0"}],["path",{d:"M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87",key:"svg-1"}],["path",{d:"M3 3l18 18",key:"svg-2"}]]),g=(0,h.Z)("eye-check","IconEyeCheck",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M11.102 17.957c-3.204 -.307 -5.904 -2.294 -8.102 -5.957c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6a19.5 19.5 0 0 1 -.663 1.032",key:"svg-1"}],["path",{d:"M15 19l2 2l4 -4",key:"svg-2"}]]);let b=`
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
`,v={type:"code",component:function(){return(0,n.jsx)(s.W,{maw:320,mx:"auto",label:"Change visibility toggle icon",placeholder:"Change visibility toggle icon",defaultValue:"secret",visibilityToggleIcon:({reveal:e})=>e?(0,n.jsx)(m,{style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}}):(0,n.jsx)(g,{style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}})})},code:b};var y=r(2784),x=r(92856),f=r(5858),Text=r(8582),w=r(58898),j=r(28559),I=r(50205),P=r(45757);let C=`
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
`;function V({meets:e,label:t}){return(0,n.jsxs)(Text.x,{c:e?"teal":"red",style:{display:"flex",alignItems:"center"},mt:7,size:"sm",children:[e?(0,n.jsx)(x.Z,{style:{width:(0,w.h)(14),height:(0,w.h)(14)}}):(0,n.jsx)(f.Z,{style:{width:(0,w.h)(14),height:(0,w.h)(14)}})," ",(0,n.jsx)(j.x,{ml:10,children:t})]})}let k=[{re:/[0-9]/,label:"Includes number"},{re:/[a-z]/,label:"Includes lowercase letter"},{re:/[A-Z]/,label:"Includes uppercase letter"},{re:/[$&+,:;=?@#|'<>.^*()%!-]/,label:"Includes special symbol"}],S={type:"code",code:C,component:function(){let e;let[t,r]=(0,y.useState)(!1),[o,i]=(0,y.useState)(""),l=k.map((e,t)=>(0,n.jsx)(V,{label:e.label,meets:e.re.test(o)},t)),a=(e=o.length>5?0:1,k.forEach(t=>{t.re.test(o)||(e+=1)}),Math.max(100-100/(k.length+1)*e,10));return(0,n.jsxs)(I.J,{opened:t,position:"bottom",width:"target",transitionProps:{transition:"pop"},children:[(0,n.jsx)(I.J.Target,{children:(0,n.jsx)("div",{onFocusCapture:()=>r(!0),onBlurCapture:()=>r(!1),children:(0,n.jsx)(s.W,{withAsterisk:!0,label:"Your password",placeholder:"Your password",value:o,onChange:e=>i(e.currentTarget.value)})})}),(0,n.jsxs)(I.J.Dropdown,{children:[(0,n.jsx)(P.E,{color:100===a?"teal":a>50?"yellow":"red",value:a,size:5,mb:"xs"}),(0,n.jsx)(V,{label:"Includes at least 6 characters",meets:o.length>5}),l]})]})},centered:!0,maxWidth:340};var W=r(9945);let z=`
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
`,D={type:"code",component:function(){let e=(0,n.jsx)(W.Z,{style:{width:(0,w.h)(18),height:(0,w.h)(18)},stroke:1.5});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.W,{leftSection:e,leftSectionPointerEvents:"none",label:"With left section",placeholder:"With left section"}),(0,n.jsx)(s.W,{rightSection:e,label:"With right section",placeholder:"With right section",rightSectionPointerEvents:"none",mt:"md"})]})},code:z,centered:!0,maxWidth:340},T=`
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
`,_={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.W,{label:"Boolean error",placeholder:"Boolean error",error:!0}),(0,n.jsx)(s.W,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"})]})},maxWidth:340,centered:!0,code:T},E=`
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput disabled label="Disabled password input" placeholder="Disabled password input" />
  );
}
`,M={type:"code",component:function(){return(0,n.jsx)(s.W,{disabled:!0,label:"Disabled password input",placeholder:"Disabled password input"})},code:E,centered:!0,maxWidth:340};var Z=r(58869);let N=`
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
`,L={type:"styles-api",data:Z.m,component:function(e){return(0,n.jsx)(s.W,{label:"Label",placeholder:"PasswordInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:(0,n.jsx)(W.Z,{style:{width:(0,w.h)(18),height:(0,w.h)(18)}}),...e})},code:N,centered:!0,maxWidth:340};var q=r(79016),A=r(33638);let R=(0,q.A)(A.us.PasswordInput);function B(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:r,GetElementRef:s,InputAccessibility:i,InputFeatures:l,InputSections:c,StylesApiSelectors:d}=t;return r||F("Demo",!0),s||F("GetElementRef",!0),i||F("InputAccessibility",!0),l||F("InputFeatures",!0),c||F("InputSections",!0),d||F("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(l,{component:"PasswordInput",element:"input"}),"\n",(0,n.jsx)(r,{data:a}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { PasswordInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return (\n    <PasswordInput\n      value={value}\n      onChange={(event) => setValue(event.currentTarget.value)}\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"controlled-visibility-toggle",children:"Controlled visibility toggle"}),"\n",(0,n.jsxs)(t.p,{children:["Control visibility state with ",(0,n.jsx)(t.code,{children:"visible"})," and ",(0,n.jsx)(t.code,{children:"onVisibilityChange"})," props,\nfor example, the props can be used to sync visibility state between two inputs:"]}),"\n",(0,n.jsx)(r,{data:u}),"\n",(0,n.jsx)(t.h2,{id:"change-visibility-toggle-icon",children:"Change visibility toggle icon"}),"\n",(0,n.jsxs)(t.p,{children:["To change visibility toggle icon, pass a React component that accepts ",(0,n.jsx)(t.code,{children:"reveal"})," prop to ",(0,n.jsx)(t.code,{children:"visibilityToggleIcon"}),":"]}),"\n",(0,n.jsx)(r,{data:v}),"\n",(0,n.jsx)(t.h2,{id:"strength-meter-example",children:"Strength meter example"}),"\n",(0,n.jsxs)(t.p,{children:["Password strength meter example with ",(0,n.jsx)(t.a,{href:"/core/progress/",children:"Progress"})," and ",(0,n.jsx)(t.a,{href:"/core/popover/",children:"Popover"})," components:"]}),"\n",(0,n.jsx)(r,{data:S,demoProps:{zIndex:4}}),"\n",(0,n.jsx)(t.h2,{id:"usage-without-visibility-toggle",children:"Usage without visibility toggle"}),"\n",(0,n.jsxs)(t.p,{children:["If you do not need visibility toggle button, use ",(0,n.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"})," component instead:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { TextInput } from '@mantine/core';\n\nfunction Demo() {\n  return <TextInput type=\"password\" />;\n}\n"})}),"\n",(0,n.jsx)(c,{component:"PasswordInput"}),"\n",(0,n.jsxs)(t.p,{children:["Note that when ",(0,n.jsx)(t.code,{children:"rightSection"})," prop is used, visibility toggle button is not rendered."]}),"\n",(0,n.jsx)(r,{data:D}),"\n",(0,n.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,n.jsx)(r,{data:_}),"\n",(0,n.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,n.jsxs)(t.p,{children:["When ",(0,n.jsx)(t.code,{children:"disabled"})," prop is set, visibility toggle button is hidden:"]}),"\n",(0,n.jsx)(r,{data:M}),"\n",(0,n.jsx)(d,{component:"PasswordInput"}),"\n",(0,n.jsx)(r,{data:L}),"\n",(0,n.jsx)(s,{component:"PasswordInput",refType:"input"}),"\n",(0,n.jsx)(i,{component:"PasswordInput"}),"\n",(0,n.jsxs)(t.p,{children:["To set ",(0,n.jsx)(t.code,{children:"aria-label"})," on the visibility toggle button, use ",(0,n.jsx)(t.code,{children:"visibilityToggleButtonProps"})," prop:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { PasswordInput } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <PasswordInput\n      label=\"Password\"\n      visibilityToggleButtonProps={{\n        'aria-label': 'Toggle password visibility',\n      }}\n    />\n  );\n}\n"})})]})}function O(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(R,{...e,children:(0,n.jsx)(B,{...e})})}function F(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},76528:function(e,t,r){"use strict";r.d(t,{Mt:function(){return n},nW:function(){return o},pc:function(){return s}});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],o=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],s=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},60284:function(e,t,r){"use strict";r.d(t,{W:function(){return f}});var n=r(52322),o=r(40489),s=r(66178),i=r(9341);r(2784);var l=r(91482),a=r(11200),c=r(51477),d=r(46690),p=r(38483),u=r(97072),h=r(82027),m=r(54813),g=r(6941),b=r(73063),v={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"};let y={visibilityToggleIcon:({reveal:e})=>(0,n.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"},children:(0,n.jsx)("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})},x=(0,a.Z)((e,{size:t})=>({root:{"--psi-icon-size":(0,l.ap)(t,"psi-icon-size"),"--psi-button-size":(0,l.ap)(t,"psi-button-size")}})),f=(0,h.d)((e,t)=>{let r=(0,p.w)("PasswordInput",y,e),{classNames:l,className:a,style:h,styles:b,unstyled:f,vars:w,required:j,error:I,leftSection:P,disabled:C,id:V,variant:k,inputContainer:S,description:W,label:z,size:D,errorProps:T,descriptionProps:_,labelProps:E,withAsterisk:M,inputWrapperOrder:Z,wrapperProps:N,radius:L,rightSection:q,rightSectionWidth:A,rightSectionPointerEvents:R,leftSectionWidth:B,visible:O,defaultVisible:F,onVisibilityChange:X,visibilityToggleIcon:$,visibilityToggleButtonProps:Y,rightSectionProps:J,leftSectionProps:K,leftSectionPointerEvents:U,mod:G,...H}=r,Q=(0,s.M)(V),[ee,et]=(0,i.C)({value:O,defaultValue:F,finalValue:!1,onChange:X}),er=()=>et(!ee),en=(0,d.y)({name:"PasswordInput",classes:v,props:r,className:a,style:h,classNames:l,styles:b,unstyled:f,vars:w,varsResolver:x}),{resolvedClassNames:eo,resolvedStyles:es}=(0,c.h)({classNames:l,styles:b,props:r}),{styleProps:ei,rest:el}=(0,u.c)(H),ea=(0,n.jsx)(m.A,{...en("visibilityToggle"),disabled:C,radius:L,"aria-hidden":!Y,tabIndex:-1,...Y,variant:"subtle",color:"gray",unstyled:f,onMouseDown:e=>{e.preventDefault(),Y?.onMouseDown?.(e),er()},onKeyDown:e=>{Y?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),er())},children:(0,n.jsx)($,{reveal:ee})});return(0,n.jsx)(g.I.Wrapper,{required:j,id:Q,label:z,error:I,description:W,size:D,classNames:eo,styles:es,__staticSelector:"PasswordInput",errorProps:T,descriptionProps:_,unstyled:f,withAsterisk:M,inputWrapperOrder:Z,inputContainer:S,variant:k,labelProps:{...E,htmlFor:Q},mod:G,...en("root"),...ei,...N,children:(0,n.jsx)(g.I,{component:"div",error:I,leftSection:P,size:D,classNames:{...eo,input:(0,o.Z)(v.input,eo.input)},styles:es,radius:L,disabled:C,__staticSelector:"PasswordInput",rightSectionWidth:A,rightSection:q??ea,variant:k,unstyled:f,leftSectionWidth:B,rightSectionPointerEvents:R||"all",rightSectionProps:J,leftSectionProps:K,leftSectionPointerEvents:U,withAria:!1,children:(0,n.jsx)("input",{required:j,"data-invalid":!!I||void 0,"data-with-left-section":!!P||void 0,...en("innerInput"),disabled:C,id:Q,ref:t,...el,autoComplete:el.autoComplete||"off",type:ee?"text":"password"})})})});f.classes={...b.M.classes,...v},f.displayName="@mantine/core/PasswordInput"},45757:function(e,t,r){"use strict";r.d(t,{E:function(){return k}});var n=r(52322);r(2784);var o=r(51477),s=r(38483),i=r(82027),l=r(28559),a=r(89106);let[c,d]=(0,a.R)("Progress.Root component was not found in tree");var p={root:"m_db6d6462",section:"m_2242eb65","stripes-animation":"m_81a374bd",label:"m_91e40b74"};let u={},h=(0,i.d)((e,t)=>{let{classNames:r,className:o,style:i,styles:a,vars:c,...p}=(0,s.w)("ProgressLabel",u,e),h=d();return(0,n.jsx)(l.x,{ref:t,...h.getStyles("label",{className:o,style:i,classNames:r,styles:a}),...p})});h.classes=p,h.displayName="@mantine/core/ProgressLabel";var m=r(91482),g=r(11200),b=r(46690);let v={},y=(0,g.Z)((e,{size:t,radius:r,transitionDuration:n})=>({root:{"--progress-size":(0,m.ap)(t,"progress-size"),"--progress-radius":void 0===r?void 0:(0,m.H5)(r),"--progress-transition-duration":"number"==typeof n?`${n}ms`:void 0}})),x=(0,i.d)((e,t)=>{let r=(0,s.w)("ProgressRoot",v,e),{classNames:o,className:i,style:a,styles:d,unstyled:u,vars:h,autoContrast:m,transitionDuration:g,...x}=r,f=(0,b.y)({name:"Progress",classes:p,props:r,className:i,style:a,classNames:o,styles:d,unstyled:u,vars:h,varsResolver:y});return(0,n.jsx)(c,{value:{getStyles:f,autoContrast:m},children:(0,n.jsx)(l.x,{ref:t,...f("root"),...x})})});x.classes=p,x.displayName="@mantine/core/ProgressRoot";var f=r(13588),w=r(39568),j=r(90006),I=r(68755);let P={withAria:!0},C=(0,i.d)((e,t)=>{let{classNames:r,className:o,style:i,styles:a,vars:c,value:p,withAria:u,color:h,striped:m,animated:g,mod:b,...v}=(0,s.w)("ProgressSection",P,e),y=d(),x=(0,I.rZ)(),C=u?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":p,"aria-valuetext":`${p}%`}:{};return(0,n.jsx)(l.x,{ref:t,...y.getStyles("section",{className:o,classNames:r,styles:a,style:i}),...v,...C,mod:[{striped:m||g,animated:g},b],__vars:{"--progress-section-width":`${p}%`,"--progress-section-color":(0,f.p)(h,x),"--progress-label-color":(0,j.o)(y.autoContrast,x)?(0,w.R)({color:h,theme:x}):void 0}})});C.classes=p,C.displayName="@mantine/core/ProgressSection";let V={},k=(0,i.d)((e,t)=>{let r=(0,s.w)("Progress",V,e),{value:i,classNames:l,styles:a,vars:c,color:d,striped:p,animated:u,"aria-label":h,...m}=r,{resolvedClassNames:g,resolvedStyles:b}=(0,o.h)({classNames:l,styles:a,props:r});return(0,n.jsx)(x,{ref:t,classNames:g,styles:b,vars:c,...m,children:(0,n.jsx)(C,{value:i,color:d,striped:p,animated:u,"aria-label":h})})});k.classes=p,k.displayName="@mantine/core/Progress",k.Section=C,k.Root=x,k.Label=h},3900:function(e,t,r){"use strict";r.d(t,{q:function(){return o}});var n=r(2784);function o(e=!1,t){let{onOpen:r,onClose:o}=t||{},[s,i]=(0,n.useState)(e),l=(0,n.useCallback)(()=>{i(e=>e||(r?.(),!0))},[r]),a=(0,n.useCallback)(()=>{i(e=>e?(o?.(),!1):e)},[o]),c=(0,n.useCallback)(()=>{s?a():l()},[a,l,s]);return[s,{open:l,close:a,toggle:c}]}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=83114)}),_N_E=e.O()}]);