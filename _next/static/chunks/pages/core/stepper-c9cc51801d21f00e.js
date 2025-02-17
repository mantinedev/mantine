(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31827],{81423:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/stepper",function(){return n(35531)}])},35531:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Y});var p=n(31085),r=n(71184),o=n(14041),i=n(70967),c=n(56051),s=n(52022),l=n(34056);function a(e){return(0,p.jsx)(l.a,{style:{height:60,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:500,fontSize:"var(--mantine-font-size-lg)"},...e})}let d={type:"code",component:function(){let[e,t]=(0,o.useState)(1);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(i.C,{active:e,onStepClick:t,children:[(0,p.jsx)(i.C.Step,{label:"First step",description:"Create an account",children:(0,p.jsx)(a,{children:"Step 1 content: Create an account"})}),(0,p.jsx)(i.C.Step,{label:"Second step",description:"Verify email",children:(0,p.jsx)(a,{children:"Step 2 content: Verify email"})}),(0,p.jsx)(i.C.Step,{label:"Final step",description:"Get full access",children:(0,p.jsx)(a,{children:"Step 3 content: Get full access"})}),(0,p.jsx)(i.C.Completed,{children:(0,p.jsx)(a,{children:"Completed, click back button to get to previous step"})})]}),(0,p.jsxs)(c.Y,{justify:"center",mt:"xl",children:[(0,p.jsx)(s.$,{variant:"default",onClick:()=>t(e=>e>0?e-1:e),children:"Back"}),(0,p.jsx)(s.$,{onClick:()=>t(e=>e<3?e+1:e),children:"Next step"})]})]})},code:`
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step label="First step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}
`},S={type:"code",component:function(){let[e,t]=(0,o.useState)(1),[n,r]=(0,o.useState)(e),l=e=>{e>3||e<0||(t(e),r(t=>Math.max(t,e)))};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(i.C,{active:e,onStepClick:t,children:[(0,p.jsx)(i.C.Step,{label:"First step",description:"Create an account",allowStepSelect:n>=0&&0!==e,children:(0,p.jsx)(a,{children:"Step 1 content: Create an account"})}),(0,p.jsx)(i.C.Step,{label:"Second step",description:"Verify email",allowStepSelect:n>=1&&1!==e,children:(0,p.jsx)(a,{children:"Step 2 content: Verify email"})}),(0,p.jsx)(i.C.Step,{label:"Final step",description:"Get full access",allowStepSelect:n>=2&&2!==e,children:(0,p.jsx)(a,{children:"Step 3 content: Get full access"})}),(0,p.jsx)(i.C.Completed,{children:(0,p.jsx)(a,{children:"Completed, click back button to get to previous step"})})]}),(0,p.jsxs)(c.Y,{justify:"center",mt:"xl",children:[(0,p.jsx)(s.$,{variant:"default",onClick:()=>l(e-1),children:"Back"}),(0,p.jsx)(s.$,{onClick:()=>l(e+1),children:"Next step"})]})]})},code:`
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  const [highestStepVisited, setHighestStepVisited] = useState(active);

  const handleStepChange = (nextStep: number) => {
    const isOutOfBounds = nextStep > 3 || nextStep < 0;

    if (isOutOfBounds) {
      return;
    }

    setActive(nextStep);
    setHighestStepVisited((hSC) => Math.max(hSC, nextStep));
  };

  // Allow the user to freely go back and forth between visited steps.
  const shouldAllowSelectStep = (step: number) => highestStepVisited >= step && active !== step;

  return (
    <>
      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step
          label="First step"
          description="Create an account"
          allowStepSelect={shouldAllowSelectStep(0)}
        >
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step
          label="Second step"
          description="Verify email"
          allowStepSelect={shouldAllowSelectStep(1)}
        >
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step
          label="Final step"
          description="Get full access"
          allowStepSelect={shouldAllowSelectStep(2)}
        >
          Step 3 content: Get full access
        </Stepper.Step>

        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={() => handleStepChange(active - 1)}>
          Back
        </Button>
        <Button onClick={() => handleStepChange(active + 1)}>Next step</Button>
      </Group>
    </>
  );
}
`},u={type:"code",component:function(){let[e,t]=(0,o.useState)(1);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(i.C,{active:e,onStepClick:t,allowNextStepsSelect:!1,children:[(0,p.jsx)(i.C.Step,{label:"First step",description:"Create an account",children:(0,p.jsx)(a,{children:"Step 1 content: Create an account"})}),(0,p.jsx)(i.C.Step,{label:"Second step",description:"Verify email",children:(0,p.jsx)(a,{children:"Step 2 content: Verify email"})}),(0,p.jsx)(i.C.Step,{label:"Final step",description:"Get full access",children:(0,p.jsx)(a,{children:"Step 3 content: Get full access"})}),(0,p.jsx)(i.C.Completed,{children:(0,p.jsx)(a,{children:"Completed, click back button to get to previous step"})})]}),(0,p.jsxs)(c.Y,{justify:"center",mt:"xl",children:[(0,p.jsx)(s.$,{variant:"default",onClick:()=>t(e=>e>0?e-1:e),children:"Back"}),(0,p.jsx)(s.$,{onClick:()=>t(e=>e<3?e+1:e),children:"Next step"})]})]})},code:`
import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive} allowNextStepsSelect={false}>
        <Stepper.Step label="First step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}
`},m={type:"configurator",component:function(e){return(0,p.jsxs)(i.C,{...e,active:1,children:[(0,p.jsx)(i.C.Step,{label:"Step 1",description:"Create an account"}),(0,p.jsx)(i.C.Step,{label:"Step 2",description:"Verify email"})]})},code:`
import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper{{props}} active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
    </Stepper>
  );
}
`,centered:!0,maxWidth:"100%",controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"}]},h={type:"configurator",component:function(e){return(0,p.jsxs)(i.C,{...e,active:1,children:[(0,p.jsx)(i.C.Step,{label:"Step 1",description:"Create an account"}),(0,p.jsx)(i.C.Step,{label:"Step 2",description:"Verify email"})]})},code:`
import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper{{props}} active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
    </Stepper>
  );
}
`,controls:[{prop:"iconSize",type:"number",initialValue:42,libraryValue:"__",min:32,max:62,step:5}]};var x=n(50662),f=n(73366),j=(0,f.A)("outline","user-check","IconUserCheck",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4",key:"svg-1"}],["path",{d:"M15 19l2 2l4 -4",key:"svg-2"}]]),C=(0,f.A)("outline","mail-opened","IconMailOpened",[["path",{d:"M3 9l9 6l9 -6l-9 -6l-9 6",key:"svg-0"}],["path",{d:"M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10",key:"svg-1"}],["path",{d:"M3 19l6 -6",key:"svg-2"}],["path",{d:"M15 13l6 6",key:"svg-3"}]]),v=(0,f.A)("outline","shield-check","IconShieldCheck",[["path",{d:"M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06",key:"svg-0"}],["path",{d:"M15 19l2 2l4 -4",key:"svg-1"}]]);let b={type:"code",component:function(){let[e,t]=(0,o.useState)(1);return(0,p.jsxs)(i.C,{active:e,onStepClick:t,completedIcon:(0,p.jsx)(x.A,{size:18}),children:[(0,p.jsx)(i.C.Step,{icon:(0,p.jsx)(j,{size:18}),label:"Step 1",description:"Create an account"}),(0,p.jsx)(i.C.Step,{icon:(0,p.jsx)(C,{size:18}),label:"Step 2",description:"Verify email"}),(0,p.jsx)(i.C.Step,{icon:(0,p.jsx)(v,{size:18}),label:"Step 3",description:"Get full access"})]})},code:`
import { useState } from 'react';
import {
  IconUserCheck,
  IconMailOpened,
  IconShieldCheck,
  IconCircleCheck,
} from '@tabler/icons-react';
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper
      active={active}
      onStepClick={setActive}
      completedIcon={<IconCircleCheck size={18} />}
    >
      <Stepper.Step
        icon={<IconUserCheck size={18} />}
        label="Step 1"
        description="Create an account"
      />
      <Stepper.Step
        icon={<IconMailOpened size={18} />}
        label="Step 2"
        description="Verify email"
      />
      <Stepper.Step
        icon={<IconShieldCheck size={18} />}
        label="Step 3"
        description="Get full access"
      />
    </Stepper>
  );
}
`},y={type:"code",component:function(){let[e,t]=(0,o.useState)(0);return(0,p.jsxs)(i.C,{active:e,onStepClick:t,children:[(0,p.jsx)(i.C.Step,{icon:(0,p.jsx)(j,{size:18})}),(0,p.jsx)(i.C.Step,{icon:(0,p.jsx)(C,{size:18})}),(0,p.jsx)(i.C.Step,{icon:(0,p.jsx)(v,{size:18})})]})},code:`
import { useState } from 'react';
import { Stepper } from '@mantine/core';
import { IconUserCheck, IconMailOpened, IconShieldCheck } from '@tabler/icons-react';

function Demo() {
  const [active, setActive] = useState(0);

  return (
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step icon={<IconUserCheck size={18} />} />
      <Stepper.Step icon={<IconMailOpened size={18} />} />
      <Stepper.Step icon={<IconShieldCheck size={18} />} />
    </Stepper>
  );
}
`};var g=(0,f.A)("outline","circle-x","IconCircleX",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M10 10l4 4m0 -4l-4 4",key:"svg-1"}]]);let k={type:"code",component:function(){return(0,p.jsxs)(i.C,{active:2,children:[(0,p.jsx)(i.C.Step,{label:"Step 1",description:"Create an account"}),(0,p.jsx)(i.C.Step,{label:"Step 2",description:"Verify email",color:"red",completedIcon:(0,p.jsx)(g,{size:20})}),(0,p.jsx)(i.C.Step,{label:"Step 3",description:"Get full access"})]})},code:`
import { Stepper } from '@mantine/core';
import { IconCircleX } from '@tabler/icons-react';

function Demo() {
  return (
    <Stepper active={2}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step
        label="Step 2"
        description="Verify email"
        color="red"
        completedIcon={<IconCircleX size={20} />}
      />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`},w={type:"code",component:function(){let[e,t]=(0,o.useState)(1);return(0,p.jsxs)(i.C,{active:e,onStepClick:t,orientation:"vertical",children:[(0,p.jsx)(i.C.Step,{label:"Step 1",description:"Create an account"}),(0,p.jsx)(i.C.Step,{label:"Step 2",description:"Verify email"}),(0,p.jsx)(i.C.Step,{label:"Step 3",description:"Get full access"})]})},code:`
import { useState } from 'react';
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper active={active} onStepClick={setActive} orientation="vertical">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`},I={type:"code",component:function(){let[e,t]=(0,o.useState)(1);return(0,p.jsxs)(i.C,{active:e,onStepClick:t,iconPosition:"right",children:[(0,p.jsx)(i.C.Step,{label:"Step 1",description:"Create an account"}),(0,p.jsx)(i.C.Step,{label:"Step 2",description:"Verify email"}),(0,p.jsx)(i.C.Step,{label:"Step 3",description:"Get full access"})]})},code:`
import { useState } from 'react';
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper active={active} onStepClick={setActive} iconPosition="right">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`},V={type:"code",component:function(){return(0,p.jsxs)(i.C,{active:1,children:[(0,p.jsx)(i.C.Step,{label:"Step 1",description:"Create an account"}),(0,p.jsx)(i.C.Step,{label:"Step 2",description:"Verify email",loading:!0}),(0,p.jsx)(i.C.Step,{label:"Step 3",description:"Get full access"})]})},code:`
import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" loading />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`};var z=n(85669);let A=`
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 2 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <Stepper active={active} onStepClick={setActive}{{props}}>
        <Stepper.Step label="First step" description="Create an account" loading>
          <Content>Step 1 content: Create an account</Content>
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          <Content>Step 2 content: Verify email</Content>
        </Stepper.Step>

        <Stepper.Completed>
          <Content>Completed, click back button to get to previous step</Content>
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}
`,G={type:"styles-api",centered:!0,maxWidth:"100%",data:z.q,component:function(e){let[t,n]=(0,o.useState)(1);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(i.C,{active:t,onStepClick:n,...e,children:[(0,p.jsx)(i.C.Step,{label:"First step",description:"Create an account",loading:!0,children:(0,p.jsx)(a,{children:"Step 1 content: Create an account"})}),(0,p.jsx)(i.C.Step,{label:"Second step",description:"Verify email",children:(0,p.jsx)(a,{children:"Step 2 content: Verify email"})}),(0,p.jsx)(i.C.Completed,{children:(0,p.jsx)(a,{children:"Completed, click back button to get to previous step"})})]}),(0,p.jsxs)(c.Y,{justify:"center",mt:"xl",children:[(0,p.jsx)(s.$,{variant:"default",onClick:()=>n(e=>e>0?e-1:e),children:"Back"}),(0,p.jsx)(s.$,{onClick:()=>n(e=>e<2?e+1:e),children:"Next step"})]})]})},code:A};function B(e){return(0,p.jsx)(i.C,{styles:{stepBody:{display:"none"},step:{padding:0},stepIcon:{borderWidth:3},separator:{marginLeft:-2,marginRight:-2,height:6}},...e})}let N={type:"code",component:function(){let[e,t]=(0,o.useState)(1);return(0,p.jsxs)(B,{active:e,onStepClick:t,children:[(0,p.jsx)(i.C.Step,{label:"Step 1",description:"Create an account"}),(0,p.jsx)(i.C.Step,{label:"Step 2",description:"Verify email"}),(0,p.jsx)(i.C.Step,{label:"Step 3",description:"Get full access"})]})},code:`
import { useState } from 'react';
import { Stepper, StepperProps } from '@mantine/core';

function StyledStepper(props: StepperProps) {
  return (
    <Stepper
      styles={{
        stepBody: {
          display: 'none',
        },

        step: {
          padding: 0,
        },

        stepIcon: {
          borderWidth: 4,
        },

        separator: {
          marginLeft: -2,
          marginRight: -2,
          height: 10,
        },
      }}
      {...props}
    />
  );
}

function Demo() {
  const [active, setActive] = useState(1);
  return (
    <StyledStepper active={active} onStepClick={setActive}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </StyledStepper>
  );
}
`};var _={separator:"m_24b8a321",stepIcon:"m_ced9b9a9",step:"m_f1461110"};let D={type:"code",component:function(){let[e,t]=(0,o.useState)(1);return(0,p.jsxs)(i.C,{classNames:_,active:e,onStepClick:t,children:[(0,p.jsx)(i.C.Step,{label:"Step 1",description:"Create an account"}),(0,p.jsx)(i.C.Step,{label:"Step 2",description:"Verify email"}),(0,p.jsx)(i.C.Step,{label:"Step 3",description:"Get full access"})]})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import { Stepper } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper classNames={classes} active={active} onStepClick={setActive}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`.separator {
  height: 2px;
  border-top: 2px solid light-dark(var(--mantine-color-gray-4), var(--mantine-color-dark-3));
  border-radius: var(--mantine-radius-xl);
  background-color: transparent;

  &[data-active] {
    border-width: 0;
    background-image: linear-gradient(
      45deg,
      var(--mantine-color-blue-6),
      var(--mantine-color-cyan-6)
    );
  }
}

.stepIcon {
  border-color: transparent;
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-4));
  border-width: 0;

  &[data-completed] {
    border-width: 0;
    background-color: transparent;
    background-image: linear-gradient(
      45deg,
      var(--mantine-color-blue-6),
      var(--mantine-color-cyan-6)
    );
  }
}

.step {
  transition: transform 150ms ease;

  &[data-progress] {
    transform: scale(1.05);
  }
}
`,language:"scss"}]};var M=n(85954),F=n(38215);let P=(0,M.P)(F.XZ.Stepper);function W(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Demo:n,StylesApiSelectors:o}=t;return n||O("Demo",!0),o||O("StylesApiSelectors",!0),(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,p.jsx)(n,{data:d}),"\n",(0,p.jsx)(t.h2,{id:"allow-step-select",children:"Allow step select"}),"\n",(0,p.jsxs)(t.p,{children:["To disable step selection, set ",(0,p.jsx)(t.code,{children:"allowStepSelect"})," prop on ",(0,p.jsx)(t.code,{children:"Stepper.Step"})," component.\nIt can be used to prevent the user from reaching next steps while letting them go back and forth between steps they've already reached before:"]}),"\n",(0,p.jsx)(n,{data:S}),"\n",(0,p.jsx)(t.h2,{id:"disable-next-steps-selection",children:"Disable next steps selection"}),"\n",(0,p.jsxs)(t.p,{children:["Another way to disable selection of upcoming steps is to use the ",(0,p.jsx)(t.code,{children:"allowNextStepsSelect"})," directly on the ",(0,p.jsx)(t.code,{children:"Stepper"})," component.\nThis is useful when you don't need to control the behavior specifically for each step."]}),"\n",(0,p.jsx)(n,{data:u}),"\n",(0,p.jsx)(t.h2,{id:"color-radius-and-size",children:"Color, radius and size"}),"\n",(0,p.jsx)(n,{data:m}),"\n",(0,p.jsxs)(t.p,{children:["Component size is controlled by two props: ",(0,p.jsx)(t.code,{children:"size"})," and ",(0,p.jsx)(t.code,{children:"iconSize"}),".\n",(0,p.jsx)(t.code,{children:"size"})," prop controls icon size, label and description font size.\n",(0,p.jsx)(t.code,{children:"iconSize"})," allows to overwrite icon size separately from other size values:"]}),"\n",(0,p.jsx)(n,{data:h}),"\n",(0,p.jsx)(t.h2,{id:"with-custom-icons",children:"With custom icons"}),"\n",(0,p.jsxs)(t.p,{children:["You can replace the step icon by setting ",(0,p.jsx)(t.code,{children:"icon"})," prop on ",(0,p.jsx)(t.code,{children:"Stepper.Step"})," component.\nTo change completed check icon set ",(0,p.jsx)(t.code,{children:"completedIcon"})," on ",(0,p.jsx)(t.code,{children:"Stepper"})," component.\nYou can use any React node as an icon: component, string, number:"]}),"\n",(0,p.jsx)(n,{data:b}),"\n",(0,p.jsxs)(t.p,{children:["You can use ",(0,p.jsx)(t.code,{children:"Stepper"})," with icons only. Note that in this case, you will have to\nset ",(0,p.jsx)(t.code,{children:"aria-label"})," or ",(0,p.jsx)(t.code,{children:"title"})," on ",(0,p.jsx)(t.code,{children:"Stepper.Step"})," component to make it accessible:"]}),"\n",(0,p.jsx)(n,{data:y}),"\n",(0,p.jsx)(t.p,{children:"You can also change the completed icon for each step, for example, to indicate error state:"}),"\n",(0,p.jsx)(n,{data:k}),"\n",(0,p.jsx)(t.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,p.jsx)(n,{data:w}),"\n",(0,p.jsx)(t.h2,{id:"icon-position",children:"Icon position"}),"\n",(0,p.jsxs)(t.p,{children:["To change step icon and body arrangement, set ",(0,p.jsx)(t.code,{children:'iconPosition="right"'}),":"]}),"\n",(0,p.jsx)(n,{data:I}),"\n",(0,p.jsx)(t.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,p.jsxs)(t.p,{children:["To indicate loading state set ",(0,p.jsx)(t.code,{children:"loading"})," prop on Step component, ",(0,p.jsx)(t.code,{children:"Loader"})," will replace step icon.\nYou can configure the default loader in the ",(0,p.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"}),"."]}),"\n",(0,p.jsx)(n,{data:V}),"\n",(0,p.jsx)(o,{component:"Stepper"}),"\n",(0,p.jsx)(n,{data:G}),"\n",(0,p.jsx)(t.p,{children:"Examples of styles customization with Styles API:"}),"\n",(0,p.jsx)(n,{data:N}),"\n",(0,p.jsx)("br",{}),"\n",(0,p.jsx)(n,{data:D}),"\n",(0,p.jsx)(t.h2,{id:"get-step-ref",children:"Get step ref"}),"\n",(0,p.jsx)(t.p,{children:"You can get refs of step button and stepper root element (div):"}),"\n",(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:"language-tsx",children:"import { useRef } from 'react';\nimport { Stepper } from '@mantine/core';\n\nfunction MyStepper() {\n  const firstStep = useRef<HTMLButtonElement>(null);\n  const stepper = useRef<HTMLDivElement>(null);\n\n  return (\n    <Stepper ref={stepper} active={0}>\n      <Stepper.Step label=\"First step\" ref={firstStep} />\n      <Stepper.Step label=\"Second step\" />\n    </Stepper>\n  );\n}\n"})}),"\n",(0,p.jsx)(t.h2,{id:"wrap-stepperstep",children:"Wrap Stepper.Step"}),"\n",(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:"Stepper"})," component relies on ",(0,p.jsx)(t.code,{children:"Stepper.Step"})," order. Wrapping ",(0,p.jsx)(t.code,{children:"Stepper.Step"})," is not supported,\nInstead you will need to use different approaches:"]}),"\n",(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:"language-tsx",children:'import { Stepper } from \'@mantine/core\';\n\n// This will not work, step children will not render\nfunction WillNotWork() {\n  return (\n    <Stepper.Step label="Nope" description="It will not work">\n      This part will not render\n    </Stepper.Step>\n  );\n}\n\n// Create a separate component for children\nfunction WillWork() {\n  return <div>This will work as expected!</div>;\n}\n\nfunction Demo() {\n  return (\n    <Stepper active={1}>\n      <Stepper.Step label="Regular step">First step</Stepper.Step>\n      {/* Wrapped Stepper.Step will not render children, do not do that */}\n      <WillNotWork />\n      <Stepper.Step label="Step with custom content">\n        <WillWork />\n      </Stepper.Step>\n      <Stepper.Step label="Regular step">Third step</Stepper.Step>\n    </Stepper>\n  );\n}\n'})}),"\n",(0,p.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,p.jsxs)(t.p,{children:[(0,p.jsx)(t.code,{children:"<Stepper.Step />"})," components render button element, set ",(0,p.jsx)(t.code,{children:"aria-label"})," or ",(0,p.jsx)(t.code,{children:"title"})," props\nto make component visible for screen readers in case you do not specify ",(0,p.jsx)(t.code,{children:"label"})," or ",(0,p.jsx)(t.code,{children:"description"}),":"]}),"\n",(0,p.jsx)(t.pre,{children:(0,p.jsx)(t.code,{className:"language-tsx",children:'import { Stepper } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Stepper active={0}>\n      {/* Not ok, no label for screen reader */}\n      <Stepper.Step />\n\n      {/* Ok, label and description */}\n      <Stepper.Step label="Step 1" description="Create an account" />\n\n      {/* Ok, aria-label */}\n      <Stepper.Step aria-label="Create an account" />\n    </Stepper>\n  );\n}\n'})})]})}function Y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,p.jsx)(P,{...e,children:(0,p.jsx)(W,{...e})})}function O(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50662:(e,t,n)=>{"use strict";n.d(t,{A:()=>p});var p=(0,n(73366).A)("outline","circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]])},70967:(e,t,n)=>{"use strict";n.d(t,{C:()=>A});var p=n(31085),r=n(14041),o=n(39735),i=n(33450),c=n(7098),s=n(51606),l=n(3702),a=n(62554),d=n(29686),S=n(69564),u=n(34056),m=n(6754);let[h,x]=(0,n(59852).F)("Stepper component was not found in tree"),f=()=>null;f.displayName="@mantine/core/StepperCompleted";var j=n(92408),C=n(5583),v=n(25810),b=n(98523),y=n(33970),g={root:"m_cbb4ea7e",steps:"m_aaf89d0b",separator:"m_2a371ac9",content:"m_78da155d",step:"m_cbb57068","step--horizontal":"m_f56b1e2c","step--vertical":"m_833edb7e",verticalSeparator:"m_6496b3f3",stepWrapper:"m_818e70b",stepIcon:"m_1959ad01",stepCompletedIcon:"m_a79331dc",stepBody:"m_1956aa2a",stepLabel:"m_12051f6c",stepDescription:"m_164eea74"};let k=(e,t)=>"function"==typeof e?(0,p.jsx)(e,{step:t||0}):e,w={withIcon:!0,allowStepClick:!0,iconPosition:"left"},I=(0,m.P9)((e,t)=>{let{classNames:n,className:r,style:o,styles:i,vars:c,step:l,state:a,color:S,icon:u,completedIcon:m,progressIcon:h,label:f,description:g,withIcon:I,iconSize:V,loading:z,allowStepClick:A,allowStepSelect:G,iconPosition:B,orientation:N,mod:_,...D}=(0,d.Y)("StepperStep",w,e),M=x(),F=(0,j.xd)(),P={classNames:n,styles:i},W="stepCompleted"===a?null:"stepProgress"===a?h:u,Y={"data-progress":"stepProgress"===a||void 0,"data-completed":"stepCompleted"===a||void 0};return(0,p.jsxs)(y.N,{...M.getStyles("step",{className:r,style:o,variant:M.orientation,...P}),mod:[{"icon-position":B||M.iconPosition,"allow-click":A},_],ref:t,...Y,...D,__vars:{"--step-color":S?(0,s.r)(S,F):void 0},tabIndex:A?0:-1,children:[I&&(0,p.jsxs)("span",{...M.getStyles("stepWrapper",P),children:[(0,p.jsxs)("span",{...M.getStyles("stepIcon",P),...Y,children:[(0,p.jsx)(b.e,{mounted:"stepCompleted"===a,transition:"pop",duration:200,children:e=>(0,p.jsx)("span",{...M.getStyles("stepCompletedIcon",{style:e,...P}),children:z?(0,p.jsx)(v.a,{color:"var(--mantine-color-white)",size:"calc(var(--stepper-icon-size) / 2)",...M.getStyles("stepLoader",P)}):k(m,l)||(0,p.jsx)(C.S,{size:"60%"})})}),"stepCompleted"!==a?z?(0,p.jsx)(v.a,{...M.getStyles("stepLoader",P),size:"calc(var(--stepper-icon-size) / 2)",color:S}):k(W||u,l):null]}),"vertical"===N&&(0,p.jsx)("span",{...M.getStyles("verticalSeparator",P),"data-active":"stepCompleted"===a||void 0})]}),(f||g)&&(0,p.jsxs)("span",{...M.getStyles("stepBody",P),"data-orientation":M.orientation,"data-icon-position":B||M.iconPosition,children:[f&&(0,p.jsx)("span",{...M.getStyles("stepLabel",P),children:k(f,l)}),g&&(0,p.jsx)("span",{...M.getStyles("stepDescription",P),children:k(g,l)})]})]})});I.classes=g,I.displayName="@mantine/core/StepperStep";let V={orientation:"horizontal",iconPosition:"left",allowNextStepsSelect:!0,wrap:!0},z=(0,c.V)((e,{color:t,iconSize:n,size:p,contentPadding:r,radius:c,autoContrast:d})=>({root:{"--stepper-color":t?(0,s.r)(t,e):void 0,"--stepper-icon-color":(0,a.v)(d,e)?(0,l.w)({color:t,theme:e,autoContrast:d}):void 0,"--stepper-icon-size":void 0===n?(0,i.YC)(p,"stepper-icon-size"):(0,o.D)(n),"--stepper-content-padding":(0,i.GY)(r),"--stepper-radius":void 0===c?void 0:(0,i.nJ)(c),"--stepper-fz":(0,i.ny)(p),"--stepper-spacing":(0,i.GY)(p)}})),A=(0,m.P9)((e,t)=>{let n=(0,d.Y)("Stepper",V,e),{classNames:o,className:i,style:c,styles:s,unstyled:l,vars:a,children:m,onStepClick:x,active:j,icon:C,completedIcon:v,progressIcon:b,color:y,iconSize:k,contentPadding:w,orientation:I,iconPosition:A,size:G,radius:B,allowNextStepsSelect:N,wrap:_,autoContrast:D,...M}=n,F=(0,S.I)({name:"Stepper",classes:g,props:n,className:i,style:c,classNames:o,styles:s,unstyled:l,vars:a,varsResolver:z}),P=r.Children.toArray(m),W=P.filter(e=>e.type!==f),Y=P.find(e=>e.type===f),O=W.reduce((e,t,n)=>{let p=j===n?"stepProgress":j>n?"stepCompleted":"stepInactive",o="function"==typeof x&&("boolean"==typeof t.props.allowStepSelect?t.props.allowStepSelect:"stepCompleted"===p||N);return e.push((0,r.cloneElement)(t,{icon:t.props.icon||C||n+1,key:n,step:n,state:p,onClick:()=>o&&x?.(n),allowStepClick:o,completedIcon:t.props.completedIcon||v,progressIcon:t.props.progressIcon||b,color:t.props.color||y,iconSize:k,iconPosition:t.props.iconPosition||A,orientation:I})),"horizontal"===I&&n!==W.length-1&&e.push((0,r.createElement)("div",{...F("separator"),"data-active":n<j||void 0,"data-orientation":I,key:`separator-${n}`})),e},[]),T=W[j]?.props?.children,E=Y?.props?.children,L=j>W.length-1?E:T;return(0,p.jsx)(h,{value:{getStyles:F,orientation:I,iconPosition:A},children:(0,p.jsxs)(u.a,{...F("root"),ref:t,size:G,...M,children:[(0,p.jsx)(u.a,{...F("steps"),mod:{orientation:I,"icon-position":A,wrap:_&&"vertical"!==I},children:O}),L&&(0,p.jsx)("div",{...F("content"),children:L})]})})});A.classes=g,A.displayName="@mantine/core/Stepper",A.Completed=f,A.Step=I}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(81423)),_N_E=e.O()}]);