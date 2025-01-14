(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56696],{83114:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/password-input",function(){return r(79897)}])},79897:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Z}});var n=r(52322),o=r(45392),s=r(60284);let i={type:"configurator",component:function(e){return(0,n.jsx)(s.W,{...e,placeholder:"Input placeholder"})},code:`
import { PasswordInput } from '@mantine/core';


function Demo() {
  return (
    <PasswordInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:340,controls:r(76528).pc};var a=r(65438),l=r(3900);let c={type:"code",component:function(){let[e,{toggle:t}]=(0,l.q)(!1);return(0,n.jsxs)(a.K,{children:[(0,n.jsx)(s.W,{label:"Password",defaultValue:"secret",visible:e,onVisibilityChange:t}),(0,n.jsx)(s.W,{label:"Confirm password",defaultValue:"secret",visible:e,onVisibilityChange:t})]})},code:`
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
`,centered:!0,maxWidth:340};var p=r(73681),d=(0,p.Z)("outline","eye-off","IconEyeOff",[["path",{d:"M10.585 10.587a2 2 0 0 0 2.829 2.828",key:"svg-0"}],["path",{d:"M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87",key:"svg-1"}],["path",{d:"M3 3l18 18",key:"svg-2"}]]),u=(0,p.Z)("outline","eye-check","IconEyeCheck",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M11.102 17.957c-3.204 -.307 -5.904 -2.294 -8.102 -5.957c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6a19.5 19.5 0 0 1 -.663 1.032",key:"svg-1"}],["path",{d:"M15 19l2 2l4 -4",key:"svg-2"}]]);let h=({reveal:e})=>e?(0,n.jsx)(d,{style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}}):(0,n.jsx)(u,{style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"}}),m={type:"code",component:function(){return(0,n.jsx)(s.W,{maw:320,mx:"auto",label:"Change visibility toggle icon",placeholder:"Change visibility toggle icon",defaultValue:"secret",visibilityToggleIcon:h})},code:`
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
`};var g=r(2784),b=r(9705),v=r(12980),x=r(8582),y=r(28559),f=r(26972),w=r(45757);function I({meets:e,label:t}){return(0,n.jsxs)(x.x,{c:e?"teal":"red",style:{display:"flex",alignItems:"center"},mt:7,size:"sm",children:[e?(0,n.jsx)(b.Z,{size:14}):(0,n.jsx)(v.Z,{size:14}),(0,n.jsx)(y.x,{ml:10,children:t})]})}let j=[{re:/[0-9]/,label:"Includes number"},{re:/[a-z]/,label:"Includes lowercase letter"},{re:/[A-Z]/,label:"Includes uppercase letter"},{re:/[$&+,:;=?@#|'<>.^*()%!-]/,label:"Includes special symbol"}],P={type:"code",code:`
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
`,component:function(){let e;let[t,r]=(0,g.useState)(!1),[o,i]=(0,g.useState)(""),a=j.map((e,t)=>(0,n.jsx)(I,{label:e.label,meets:e.re.test(o)},t)),l=(e=o.length>5?0:1,j.forEach(t=>{t.re.test(o)||(e+=1)}),Math.max(100-100/(j.length+1)*e,10));return(0,n.jsxs)(f.J,{opened:t,position:"bottom",width:"target",transitionProps:{transition:"pop"},children:[(0,n.jsx)(f.J.Target,{children:(0,n.jsx)("div",{onFocusCapture:()=>r(!0),onBlurCapture:()=>r(!1),children:(0,n.jsx)(s.W,{withAsterisk:!0,label:"Your password",placeholder:"Your password",value:o,onChange:e=>i(e.currentTarget.value)})})}),(0,n.jsxs)(f.J.Dropdown,{children:[(0,n.jsx)(w.E,{color:100===l?"teal":l>50?"yellow":"red",value:l,size:5,mb:"xs"}),(0,n.jsx)(I,{label:"Includes at least 6 characters",meets:o.length>5}),a]})]})},centered:!0,maxWidth:340};var C=r(51934);let V={type:"code",component:function(){let e=(0,n.jsx)(C.Z,{size:18,stroke:1.5});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.W,{leftSection:e,leftSectionPointerEvents:"none",label:"With left section",placeholder:"With left section"}),(0,n.jsx)(s.W,{rightSection:e,label:"With right section",placeholder:"With right section",rightSectionPointerEvents:"none",mt:"md"})]})},code:`
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
`,centered:!0,maxWidth:340},k={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.W,{label:"Boolean error",placeholder:"Boolean error",error:!0}),(0,n.jsx)(s.W,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"})]})},maxWidth:340,centered:!0,code:`
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
`},z={type:"code",component:function(){return(0,n.jsx)(s.W,{disabled:!0,label:"Disabled password input",placeholder:"Disabled password input"})},code:`
import { PasswordInput } from '@mantine/core';

function Demo() {
  return (
    <PasswordInput disabled label="Disabled password input" placeholder="Disabled password input" />
  );
}
`,centered:!0,maxWidth:340};var S=r(58869);let W=`
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
`,D={type:"styles-api",data:S.m,component:function(e){return(0,n.jsx)(s.W,{label:"Label",placeholder:"PasswordInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:(0,n.jsx)(C.Z,{size:18}),...e})},code:W,centered:!0,maxWidth:340};var T=r(54078),E=r(15019);let _=(0,T.A)(E.us.PasswordInput);function M(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:r,GetElementRef:s,InputAccessibility:a,InputFeatures:l,InputSections:p,StylesApiSelectors:d}=t;return r||N("Demo",!0),s||N("GetElementRef",!0),a||N("InputAccessibility",!0),l||N("InputFeatures",!0),p||N("InputSections",!0),d||N("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(l,{component:"PasswordInput",element:"input"}),"\n",(0,n.jsx)(r,{data:i}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { PasswordInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n  return (\n    <PasswordInput\n      value={value}\n      onChange={(event) => setValue(event.currentTarget.value)}\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"controlled-visibility-toggle",children:"Controlled visibility toggle"}),"\n",(0,n.jsxs)(t.p,{children:["Control visibility state with ",(0,n.jsx)(t.code,{children:"visible"})," and ",(0,n.jsx)(t.code,{children:"onVisibilityChange"})," props,\nfor example, the props can be used to sync visibility state between two inputs:"]}),"\n",(0,n.jsx)(r,{data:c}),"\n",(0,n.jsx)(t.h2,{id:"change-visibility-toggle-icon",children:"Change visibility toggle icon"}),"\n",(0,n.jsxs)(t.p,{children:["To change visibility toggle icon, pass a React component that accepts ",(0,n.jsx)(t.code,{children:"reveal"})," prop to ",(0,n.jsx)(t.code,{children:"visibilityToggleIcon"}),":"]}),"\n",(0,n.jsx)(r,{data:m}),"\n",(0,n.jsx)(t.h2,{id:"strength-meter-example",children:"Strength meter example"}),"\n",(0,n.jsxs)(t.p,{children:["Password strength meter example with ",(0,n.jsx)(t.a,{href:"/core/progress/",children:"Progress"})," and ",(0,n.jsx)(t.a,{href:"/core/popover/",children:"Popover"})," components:"]}),"\n",(0,n.jsx)(r,{data:P,demoProps:{zIndex:4}}),"\n",(0,n.jsx)(t.h2,{id:"usage-without-visibility-toggle",children:"Usage without visibility toggle"}),"\n",(0,n.jsxs)(t.p,{children:["If you do not need visibility toggle button, use ",(0,n.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"})," component instead:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { TextInput } from '@mantine/core';\n\nfunction Demo() {\n  return <TextInput type=\"password\" />;\n}\n"})}),"\n",(0,n.jsx)(p,{component:"PasswordInput"}),"\n",(0,n.jsxs)(t.p,{children:["Note that when ",(0,n.jsx)(t.code,{children:"rightSection"})," prop is used, visibility toggle button is not rendered."]}),"\n",(0,n.jsx)(r,{data:V}),"\n",(0,n.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,n.jsx)(r,{data:k}),"\n",(0,n.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,n.jsxs)(t.p,{children:["When ",(0,n.jsx)(t.code,{children:"disabled"})," prop is set, visibility toggle button is hidden:"]}),"\n",(0,n.jsx)(r,{data:z}),"\n",(0,n.jsx)(d,{component:"PasswordInput"}),"\n",(0,n.jsx)(r,{data:D}),"\n",(0,n.jsx)(s,{component:"PasswordInput",refType:"input"}),"\n",(0,n.jsx)(a,{component:"PasswordInput"}),"\n",(0,n.jsxs)(t.p,{children:["To set ",(0,n.jsx)(t.code,{children:"aria-label"})," on the visibility toggle button, use ",(0,n.jsx)(t.code,{children:"visibilityToggleButtonProps"})," prop:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { PasswordInput } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <PasswordInput\n      label=\"Password\"\n      visibilityToggleButtonProps={{\n        'aria-label': 'Toggle password visibility',\n      }}\n    />\n  );\n}\n"})})]})}function Z(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(_,{...e,children:(0,n.jsx)(M,{...e})})}function N(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},51934:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(73681).Z)("outline","lock","IconLock",[["path",{d:"M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z",key:"svg-0"}],["path",{d:"M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0",key:"svg-1"}],["path",{d:"M8 11v-4a4 4 0 1 1 8 0v4",key:"svg-2"}]])},12980:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(73681).Z)("outline","x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])},76528:function(e,t,r){"use strict";r.d(t,{Mt:function(){return n},nW:function(){return o},pc:function(){return s}});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],o=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],s=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},60284:function(e,t,r){"use strict";r.d(t,{W:function(){return f}});var n=r(52322),o=r(40489),s=r(66178),i=r(9341);r(2784);var a=r(91482),l=r(11200),c=r(51477),p=r(46690),d=r(38483),u=r(97072),h=r(82027),m=r(15981),g=r(89420),b=r(73063),v={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"};let x={visibilityToggleIcon:({reveal:e})=>(0,n.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"},children:(0,n.jsx)("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})},y=(0,l.Z)((e,{size:t})=>({root:{"--psi-icon-size":(0,a.ap)(t,"psi-icon-size"),"--psi-button-size":(0,a.ap)(t,"psi-button-size")}})),f=(0,h.d5)((e,t)=>{let r=(0,d.w)("PasswordInput",x,e),{classNames:a,className:l,style:h,styles:b,unstyled:f,vars:w,required:I,error:j,leftSection:P,disabled:C,id:V,variant:k,inputContainer:z,description:S,label:W,size:D,errorProps:T,descriptionProps:E,labelProps:_,withAsterisk:M,inputWrapperOrder:Z,wrapperProps:N,radius:L,rightSection:q,rightSectionWidth:A,rightSectionPointerEvents:R,leftSectionWidth:B,visible:O,defaultVisible:F,onVisibilityChange:X,visibilityToggleIcon:$,visibilityToggleButtonProps:Y,rightSectionProps:J,leftSectionProps:K,leftSectionPointerEvents:U,withErrorStyles:G,mod:H,...Q}=r,ee=(0,s.M)(V),[et,er]=(0,i.C)({value:O,defaultValue:F,finalValue:!1,onChange:X}),en=()=>er(!et),eo=(0,p.y)({name:"PasswordInput",classes:v,props:r,className:l,style:h,classNames:a,styles:b,unstyled:f,vars:w,varsResolver:y}),{resolvedClassNames:es,resolvedStyles:ei}=(0,c.h)({classNames:a,styles:b,props:r}),{styleProps:ea,rest:el}=(0,u.c)(Q),ec=(0,n.jsx)(m.A,{...eo("visibilityToggle"),disabled:C,radius:L,"aria-hidden":!Y,tabIndex:-1,...Y,variant:Y?.variant??"subtle",color:"gray",unstyled:f,onTouchEnd:e=>{e.preventDefault(),Y?.onTouchEnd?.(e),en()},onMouseDown:e=>{e.preventDefault(),Y?.onMouseDown?.(e),en()},onKeyDown:e=>{Y?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),en())},children:(0,n.jsx)($,{reveal:et})});return(0,n.jsx)(g.I.Wrapper,{required:I,id:ee,label:W,error:j,description:S,size:D,classNames:es,styles:ei,__staticSelector:"PasswordInput",errorProps:T,descriptionProps:E,unstyled:f,withAsterisk:M,inputWrapperOrder:Z,inputContainer:z,variant:k,labelProps:{..._,htmlFor:ee},mod:H,...eo("root"),...ea,...N,children:(0,n.jsx)(g.I,{component:"div",error:j,leftSection:P,size:D,classNames:{...es,input:(0,o.Z)(v.input,es.input)},styles:ei,radius:L,disabled:C,__staticSelector:"PasswordInput",rightSectionWidth:A,rightSection:q??ec,variant:k,unstyled:f,leftSectionWidth:B,rightSectionPointerEvents:R||"all",rightSectionProps:J,leftSectionProps:K,leftSectionPointerEvents:U,withAria:!1,withErrorStyles:G,children:(0,n.jsx)("input",{required:I,"data-invalid":!!j||void 0,"data-with-left-section":!!P||void 0,...eo("innerInput"),disabled:C,id:ee,ref:t,...el,autoComplete:el.autoComplete||"off",type:et?"text":"password"})})})});f.classes={...b.M.classes,...v},f.displayName="@mantine/core/PasswordInput"},45757:function(e,t,r){"use strict";r.d(t,{E:function(){return V}});var n=r(52322);r(2784);var o=r(51477),s=r(38483),i=r(82027),a=r(28559);let[l,c]=(0,r(89106).R)("Progress.Root component was not found in tree");var p={root:"m_db6d6462",section:"m_2242eb65","stripes-animation":"m_81a374bd",label:"m_91e40b74"};let d={},u=(0,i.d5)((e,t)=>{let{classNames:r,className:o,style:i,styles:l,vars:p,...u}=(0,s.w)("ProgressLabel",d,e),h=c();return(0,n.jsx)(a.x,{ref:t,...h.getStyles("label",{className:o,style:i,classNames:r,styles:l}),...u})});u.classes=p,u.displayName="@mantine/core/ProgressLabel";var h=r(91482),m=r(11200),g=r(46690);let b={},v=(0,m.Z)((e,{size:t,radius:r,transitionDuration:n})=>({root:{"--progress-size":(0,h.ap)(t,"progress-size"),"--progress-radius":void 0===r?void 0:(0,h.H5)(r),"--progress-transition-duration":"number"==typeof n?`${n}ms`:void 0}})),x=(0,i.d5)((e,t)=>{let r=(0,s.w)("ProgressRoot",b,e),{classNames:o,className:i,style:c,styles:d,unstyled:u,vars:h,autoContrast:m,transitionDuration:x,...y}=r,f=(0,g.y)({name:"Progress",classes:p,props:r,className:i,style:c,classNames:o,styles:d,unstyled:u,vars:h,varsResolver:v});return(0,n.jsx)(l,{value:{getStyles:f,autoContrast:m},children:(0,n.jsx)(a.x,{ref:t,...f("root"),...y})})});x.classes=p,x.displayName="@mantine/core/ProgressRoot";var y=r(13588),f=r(39568),w=r(90006),I=r(68755);let j={withAria:!0},P=(0,i.d5)((e,t)=>{let{classNames:r,className:o,style:i,styles:l,vars:p,value:d,withAria:u,color:h,striped:m,animated:g,mod:b,...v}=(0,s.w)("ProgressSection",j,e),x=c(),P=(0,I.rZ)(),C=u?{role:"progressbar","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":d,"aria-valuetext":`${d}%`}:{};return(0,n.jsx)(a.x,{ref:t,...x.getStyles("section",{className:o,classNames:r,styles:l,style:i}),...v,...C,mod:[{striped:m||g,animated:g},b],__vars:{"--progress-section-width":`${d}%`,"--progress-section-color":(0,y.p)(h,P),"--progress-label-color":(0,w.o)(x.autoContrast,P)?(0,f.R)({color:h,theme:P,autoContrast:x.autoContrast}):void 0}})});P.classes=p,P.displayName="@mantine/core/ProgressSection";let C={},V=(0,i.d5)((e,t)=>{let r=(0,s.w)("Progress",C,e),{value:i,classNames:a,styles:l,vars:c,color:p,striped:d,animated:u,"aria-label":h,...m}=r,{resolvedClassNames:g,resolvedStyles:b}=(0,o.h)({classNames:a,styles:l,props:r});return(0,n.jsx)(x,{ref:t,classNames:g,styles:b,vars:c,...m,children:(0,n.jsx)(P,{value:i,color:p,striped:d,animated:u,"aria-label":h})})});V.classes=p,V.displayName="@mantine/core/Progress",V.Section=P,V.Root=x,V.Label=u},3900:function(e,t,r){"use strict";r.d(t,{q:function(){return o}});var n=r(2784);function o(e=!1,t){let{onOpen:r,onClose:o}=t||{},[s,i]=(0,n.useState)(e),a=(0,n.useCallback)(()=>{i(e=>e||(r?.(),!0))},[r]),l=(0,n.useCallback)(()=>{i(e=>e?(o?.(),!1):e)},[o]),c=(0,n.useCallback)(()=>{s?l():a()},[l,a,s]);return[s,{open:a,close:l,toggle:c}]}}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=83114)}),_N_E=e.O()}]);