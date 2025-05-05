(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19968],{91065:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/password-input",function(){return s(25744)}])},25744:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>W});var r=s(31085),o=s(71184),n=s(52404);let i={type:"configurator",component:function(e){return(0,r.jsx)(n.y,{...e,placeholder:"Input placeholder"})},code:`
import { PasswordInput } from '@mantine/core';


function Demo() {
  return (
    <PasswordInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:340,controls:s(23232).$7};var a=s(75390),l=s(92051);let c={type:"code",component:function(){let[e,{toggle:t}]=(0,l.j)(!1);return(0,r.jsxs)(a.B,{children:[(0,r.jsx)(n.y,{label:"Password",defaultValue:"secret",visible:e,onVisibilityChange:t}),(0,r.jsx)(n.y,{label:"Confirm password",defaultValue:"secret",visible:e,onVisibilityChange:t})]})},code:`
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
`,centered:!0,maxWidth:340};var d=s(73366),p=(0,d.A)("outline","eye-off","IconEyeOff",[["path",{d:"M10.585 10.587a2 2 0 0 0 2.829 2.828",key:"svg-0"}],["path",{d:"M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87",key:"svg-1"}],["path",{d:"M3 3l18 18",key:"svg-2"}]]),u=(0,d.A)("outline","eye-check","IconEyeCheck",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M11.102 17.957c-3.204 -.307 -5.904 -2.294 -8.102 -5.957c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6a19.5 19.5 0 0 1 -.663 1.032",key:"svg-1"}],["path",{d:"M15 19l2 2l4 -4",key:"svg-2"}]]);let h=({reveal:e})=>e?(0,r.jsx)(p,{style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}}):(0,r.jsx)(u,{style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}}),g={type:"code",component:function(){return(0,r.jsx)(n.y,{maw:320,mx:"auto",label:"Change visibility toggle icon",placeholder:"Change visibility toggle icon",defaultValue:"secret",visibilityToggleIcon:h})},code:`
import { PasswordInput } from '@mantine/core';
import { IconEyeCheck, IconEyeOff } from '@tabler/icons-react';

const VisibilityToggleIcon = ({ reveal }: { reveal: boolean }) =>
  reveal ? (
    <IconEyeOff style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
  ) : (
    <IconEyeCheck style={{ width: 'var(--psi-icon-size)', height: 'var(--psi-icon-size)' }} />
  );

function Demo() {
  return (
    <PasswordInput
      maw={320}
      mx="auto"
      label="Change visibility toggle icon"
      placeholder="Change visibility toggle icon"
      defaultValue="secret"
      visibilityToggleIcon={VisibilityToggleIcon}
    />
  );
}
`};var m=s(14041),v=s(11466),y=s(3650),b=s(93065),x=s(34056),w=s(35764),f=s(44419);function I({meets:e,label:t}){return(0,r.jsxs)(b.E,{c:e?"teal":"red",style:{display:"flex",alignItems:"center"},mt:7,size:"sm",children:[e?(0,r.jsx)(v.A,{size:14}):(0,r.jsx)(y.A,{size:14}),(0,r.jsx)(x.a,{ml:10,children:t})]})}let j=[{re:/[0-9]/,label:"Includes number"},{re:/[a-z]/,label:"Includes lowercase letter"},{re:/[A-Z]/,label:"Includes uppercase letter"},{re:/[$&+,:;=?@#|'<>.^*()%!-]/,label:"Includes special symbol"}],P={type:"code",code:`
import { useState } from 'react';
import { IconX, IconCheck } from '@tabler/icons-react';
import { PasswordInput, Progress, Text, Popover, Box } from '@mantine/core';

function PasswordRequirement({ meets, label }: { meets: boolean; label: string }) {
  return (
    <Text
      c={meets ? 'teal' : 'red'}
      style={{ display: 'flex', alignItems: 'center' }}
      mt={7}
      size="sm"
    >
      {meets ? <IconCheck size={14} /> : <IconX size={14} />}
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
`,component:function(){let e;let[t,s]=(0,m.useState)(!1),[o,i]=(0,m.useState)(""),a=j.map((e,t)=>(0,r.jsx)(I,{label:e.label,meets:e.re.test(o)},t)),l=(e=o.length>5?0:1,j.forEach(t=>{t.re.test(o)||(e+=1)}),Math.max(100-100/(j.length+1)*e,10));return(0,r.jsxs)(w.A,{opened:t,position:"bottom",width:"target",transitionProps:{transition:"pop"},children:[(0,r.jsx)(w.A.Target,{children:(0,r.jsx)("div",{onFocusCapture:()=>s(!0),onBlurCapture:()=>s(!1),children:(0,r.jsx)(n.y,{withAsterisk:!0,label:"Your password",placeholder:"Your password",value:o,onChange:e=>i(e.currentTarget.value)})})}),(0,r.jsxs)(w.A.Dropdown,{children:[(0,r.jsx)(f.k,{color:100===l?"teal":l>50?"yellow":"red",value:l,size:5,mb:"xs"}),(0,r.jsx)(I,{label:"Includes at least 6 characters",meets:o.length>5}),a]})]})},centered:!0,maxWidth:340};var k=s(53223);let C={type:"code",component:function(){let e=(0,r.jsx)(k.A,{size:18,stroke:1.5});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.y,{leftSection:e,leftSectionPointerEvents:"none",label:"With left section",placeholder:"With left section"}),(0,r.jsx)(n.y,{rightSection:e,label:"With right section",placeholder:"With right section",rightSectionPointerEvents:"none",mt:"md"})]})},code:`
import { PasswordInput } from '@mantine/core';
import { IconLock } from '@tabler/icons-react';

function Demo() {
  const icon = <IconLock size={18} stroke={1.5} />;

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
`,centered:!0,maxWidth:340},M={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.y,{label:"Boolean error",placeholder:"Boolean error",error:!0}),(0,r.jsx)(n.y,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"})]})},maxWidth:340,centered:!0,code:`
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
`},V={type:"code",component:function(){return(0,r.jsx)(n.y,{disabled:!0,label:"Disabled password input",placeholder:"Disabled password input"})},code:`
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput disabled label="Disabled password input" placeholder="Disabled password input" />
  );
}
`,centered:!0,maxWidth:340};var A=s(89419);let z=`
import { IconLock } from '@tabler/icons-react';
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput
      label="Label"
      placeholder="PasswordInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconLock size={18} />}
      {{props}}
    />
  );
}
`,S={type:"styles-api",data:A.o,component:function(e){return(0,r.jsx)(n.y,{label:"Label",placeholder:"PasswordInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:(0,r.jsx)(k.A,{size:18}),...e})},code:z,centered:!0,maxWidth:340};var D=s(18675),T=s(20017);let _=(0,D.P)(T.XZ.PasswordInput);function E(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Demo:s,GetElementRef:n,InputAccessibility:a,InputFeatures:l,InputSections:d,StylesApiSelectors:p}=t;return s||L("Demo",!0),n||L("GetElementRef",!0),a||L("InputAccessibility",!0),l||L("InputFeatures",!0),d||L("InputSections",!0),p||L("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(l,{component:"PasswordInput",element:"input"}),"\n",(0,r.jsx)(s,{data:i}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { PasswordInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return (\n    <PasswordInput\n      value={value}\n      onChange={(event) => setValue(event.currentTarget.value)}\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"controlled-visibility-toggle",children:"Controlled visibility toggle"}),"\n",(0,r.jsxs)(t.p,{children:["Control visibility state with ",(0,r.jsx)(t.code,{children:"visible"})," and ",(0,r.jsx)(t.code,{children:"onVisibilityChange"})," props,\nfor example, the props can be used to sync visibility state between two inputs:"]}),"\n",(0,r.jsx)(s,{data:c}),"\n",(0,r.jsx)(t.h2,{id:"change-visibility-toggle-icon",children:"Change visibility toggle icon"}),"\n",(0,r.jsxs)(t.p,{children:["To change visibility toggle icon, pass a React component that accepts ",(0,r.jsx)(t.code,{children:"reveal"})," prop to ",(0,r.jsx)(t.code,{children:"visibilityToggleIcon"}),":"]}),"\n",(0,r.jsx)(s,{data:g}),"\n",(0,r.jsx)(t.h2,{id:"strength-meter-example",children:"Strength meter example"}),"\n",(0,r.jsxs)(t.p,{children:["Password strength meter example with ",(0,r.jsx)(t.a,{href:"/core/progress/",children:"Progress"})," and ",(0,r.jsx)(t.a,{href:"/core/popover/",children:"Popover"})," components:"]}),"\n",(0,r.jsx)(s,{data:P,demoProps:{zIndex:4}}),"\n",(0,r.jsx)(t.h2,{id:"usage-without-visibility-toggle",children:"Usage without visibility toggle"}),"\n",(0,r.jsxs)(t.p,{children:["If you do not need visibility toggle button, use ",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"})," component instead:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { TextInput } from '@mantine/core';\n\nfunction Demo() {\n  return <TextInput type=\"password\" />;\n}\n"})}),"\n",(0,r.jsx)(d,{component:"PasswordInput"}),"\n",(0,r.jsxs)(t.p,{children:["Note that when ",(0,r.jsx)(t.code,{children:"rightSection"})," prop is used, visibility toggle button is not rendered."]}),"\n",(0,r.jsx)(s,{data:C}),"\n",(0,r.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,r.jsx)(s,{data:M}),"\n",(0,r.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,r.jsxs)(t.p,{children:["When ",(0,r.jsx)(t.code,{children:"disabled"})," prop is set, visibility toggle button is hidden:"]}),"\n",(0,r.jsx)(s,{data:V}),"\n",(0,r.jsx)(p,{component:"PasswordInput"}),"\n",(0,r.jsx)(s,{data:S}),"\n",(0,r.jsx)(n,{component:"PasswordInput",refType:"input"}),"\n",(0,r.jsx)(a,{component:"PasswordInput"}),"\n",(0,r.jsxs)(t.p,{children:["To set ",(0,r.jsx)(t.code,{children:"aria-label"})," on the visibility toggle button, use ",(0,r.jsx)(t.code,{children:"visibilityToggleButtonProps"})," prop:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { PasswordInput } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <PasswordInput\n      label=\"Password\"\n      visibilityToggleButtonProps={{\n        'aria-label': 'Toggle password visibility',\n      }}\n    />\n  );\n}\n"})})]})}function W(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(_,{...e,children:(0,r.jsx)(E,{...e})})}function L(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var r=(0,s(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var r=(0,s(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var r=(0,s(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var r=(0,s(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var r=(0,s(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var r=(0,s(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var r=(0,s(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},53223:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var r=(0,s(73366).A)("outline","lock","IconLock",[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]])},9613:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var r=(0,s(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var r=(0,s(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},3650:(e,t,s)=>{"use strict";s.d(t,{A:()=>r});var r=(0,s(73366).A)("outline","x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])},23232:(e,t,s)=>{"use strict";s.d(t,{$7:()=>n,l$:()=>r,wQ:()=>o});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],o=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},52404:(e,t,s)=>{"use strict";s.d(t,{y:()=>w});var r=s(31085),o=s(54357),n=s(97567),i=s(82307);s(14041);var a=s(33450),l=s(7098),c=s(36456),d=s(69564),p=s(29686),u=s(18315),h=s(6754),g=s(22962),m=s(34452),v=s(87059),y={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"};let b={visibilityToggleIcon:({reveal:e})=>(0,r.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"},children:(0,r.jsx)("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})},x=(0,l.V)((e,{size:t})=>({root:{"--psi-icon-size":(0,a.YC)(t,"psi-icon-size"),"--psi-button-size":(0,a.YC)(t,"psi-button-size")}})),w=(0,h.P9)((e,t)=>{let s=(0,p.Y)("PasswordInput",b,e),{classNames:a,className:l,style:h,styles:v,unstyled:w,vars:f,required:I,error:j,leftSection:P,disabled:k,id:C,variant:M,inputContainer:V,description:A,label:z,size:S,errorProps:D,descriptionProps:T,labelProps:_,withAsterisk:E,inputWrapperOrder:W,wrapperProps:L,radius:N,rightSection:B,rightSectionWidth:Y,rightSectionPointerEvents:R,leftSectionWidth:q,visible:O,defaultVisible:Z,onVisibilityChange:F,visibilityToggleIcon:$,visibilityToggleButtonProps:X,rightSectionProps:K,leftSectionProps:U,leftSectionPointerEvents:G,withErrorStyles:J,mod:Q,...H}=s,ee=(0,n.B)(C),[et,es]=(0,i.Z)({value:O,defaultValue:Z,finalValue:!1,onChange:F}),er=()=>es(!et),eo=(0,d.I)({name:"PasswordInput",classes:y,props:s,className:l,style:h,classNames:a,styles:v,unstyled:w,vars:f,varsResolver:x}),{resolvedClassNames:en,resolvedStyles:ei}=(0,c.Y)({classNames:a,styles:v,props:s}),{styleProps:ea,rest:el}=(0,u.j)(H),ec=(0,r.jsx)(g.M,{...eo("visibilityToggle"),disabled:k,radius:N,"aria-hidden":!X,tabIndex:-1,...X,variant:X?.variant??"subtle",color:"gray",unstyled:w,onTouchEnd:e=>{e.preventDefault(),X?.onTouchEnd?.(e),er()},onMouseDown:e=>{e.preventDefault(),X?.onMouseDown?.(e),er()},onKeyDown:e=>{X?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),er())},children:(0,r.jsx)($,{reveal:et})});return(0,r.jsx)(m.p.Wrapper,{required:I,id:ee,label:z,error:j,description:A,size:S,classNames:en,styles:ei,__staticSelector:"PasswordInput",errorProps:D,descriptionProps:T,unstyled:w,withAsterisk:E,inputWrapperOrder:W,inputContainer:V,variant:M,labelProps:{..._,htmlFor:ee},mod:Q,...eo("root"),...ea,...L,children:(0,r.jsx)(m.p,{component:"div",error:j,leftSection:P,size:S,classNames:{...en,input:(0,o.A)(y.input,en.input)},styles:ei,radius:N,disabled:k,__staticSelector:"PasswordInput",rightSectionWidth:Y,rightSection:B??ec,variant:M,unstyled:w,leftSectionWidth:q,rightSectionPointerEvents:R||"all",rightSectionProps:K,leftSectionProps:U,leftSectionPointerEvents:G,withAria:!1,withErrorStyles:J,children:(0,r.jsx)("input",{required:I,"data-invalid":!!j||void 0,"data-with-left-section":!!P||void 0,...eo("innerInput"),disabled:k,id:ee,ref:t,...el,autoComplete:el.autoComplete||"off",type:et?"text":"password"})})})});w.classes={...v.O.classes,...y},w.displayName="@mantine/core/PasswordInput"},44419:(e,t,s)=>{"use strict";s.d(t,{k:()=>C});var r=s(31085);s(14041);var o=s(36456),n=s(29686),i=s(6754),a=s(34056);let[l,c]=(0,s(59852).F)("Progress.Root component was not found in tree");var d={root:"m_db6d6462",section:"m_2242eb65","stripes-animation":"m_81a374bd",label:"m_91e40b74"};let p={},u=(0,i.P9)((e,t)=>{let{classNames:s,className:o,style:i,styles:l,vars:d,...u}=(0,n.Y)("ProgressLabel",p,e),h=c();return(0,r.jsx)(a.a,{ref:t,...h.getStyles("label",{className:o,style:i,classNames:s,styles:l}),...u})});u.classes=d,u.displayName="@mantine/core/ProgressLabel";var h=s(33450),g=s(7098),m=s(69564);let v={},y=(0,g.V)((e,{size:t,radius:s,transitionDuration:r})=>({root:{"--progress-size":(0,h.YC)(t,"progress-size"),"--progress-radius":void 0===s?void 0:(0,h.nJ)(s),"--progress-transition-duration":"number"==typeof r?`${r}ms`:void 0}})),b=(0,i.P9)((e,t)=>{let s=(0,n.Y)("ProgressRoot",v,e),{classNames:o,className:i,style:c,styles:p,unstyled:u,vars:h,autoContrast:g,transitionDuration:b,...x}=s,w=(0,m.I)({name:"Progress",classes:d,props:s,className:i,style:c,classNames:o,styles:p,unstyled:u,vars:h,varsResolver:y});return(0,r.jsx)(l,{value:{getStyles:w,autoContrast:g},children:(0,r.jsx)(a.a,{ref:t,...w("root"),...x})})});b.classes=d,b.displayName="@mantine/core/ProgressRoot";var x=s(51606),w=s(3702),f=s(62554),I=s(92408);let j={withAria:!0},P=(0,i.P9)((e,t)=>{let{classNames:s,className:o,style:i,styles:l,vars:d,value:p,withAria:u,color:h,striped:g,animated:m,mod:v,...y}=(0,n.Y)("ProgressSection",j,e),b=c(),P=(0,I.xd)(),k=u?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":p,"aria-valuetext":`${p}%`}:{};return(0,r.jsx)(a.a,{ref:t,...b.getStyles("section",{className:o,classNames:s,styles:l,style:i}),...y,...k,mod:[{striped:g||m,animated:m},v],__vars:{"--progress-section-width":`${p}%`,"--progress-section-color":(0,x.r)(h,P),"--progress-label-color":(0,f.v)(b.autoContrast,P)?(0,w.w)({color:h,theme:P,autoContrast:b.autoContrast}):void 0}})});P.classes=d,P.displayName="@mantine/core/ProgressSection";let k={},C=(0,i.P9)((e,t)=>{let s=(0,n.Y)("Progress",k,e),{value:i,classNames:a,styles:l,vars:c,color:d,striped:p,animated:u,"aria-label":h,...g}=s,{resolvedClassNames:m,resolvedStyles:v}=(0,o.Y)({classNames:a,styles:l,props:s});return(0,r.jsx)(b,{ref:t,classNames:m,styles:v,vars:c,...g,children:(0,r.jsx)(P,{value:i,color:d,striped:p,animated:u,"aria-label":h})})});C.classes=d,C.displayName="@mantine/core/Progress",C.Section=P,C.Root=b,C.Label=u}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,90636,46593,38792],()=>t(91065)),_N_E=e.O()}]);