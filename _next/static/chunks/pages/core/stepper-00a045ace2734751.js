(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[52450],{62839:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/stepper",function(){return n(33896)}])},33896:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var r=n(52322),p=n(45392),o=n(2784),i=n(6403),c=n(93010),s=n(17115),l=n(28559);function a(e){return(0,r.jsx)(l.x,{style:{height:60,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:500,fontSize:"var(--mantine-font-size-lg)"},...e})}let d={type:"code",component:function(){let[e,t]=(0,o.useState)(1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.v,{active:e,onStepClick:t,children:[(0,r.jsx)(i.v.Step,{label:"First step",description:"Create an account",children:(0,r.jsx)(a,{children:"Step 1 content: Create an account"})}),(0,r.jsx)(i.v.Step,{label:"Second step",description:"Verify email",children:(0,r.jsx)(a,{children:"Step 2 content: Verify email"})}),(0,r.jsx)(i.v.Step,{label:"Final step",description:"Get full access",children:(0,r.jsx)(a,{children:"Step 3 content: Get full access"})}),(0,r.jsx)(i.v.Completed,{children:(0,r.jsx)(a,{children:"Completed, click back button to get to previous step"})})]}),(0,r.jsxs)(c.Z,{justify:"center",mt:"xl",children:[(0,r.jsx)(s.z,{variant:"default",onClick:()=>t(e=>e>0?e-1:e),children:"Back"}),(0,r.jsx)(s.z,{onClick:()=>t(e=>e<3?e+1:e),children:"Next step"})]})]})},code:`
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
`},S={type:"code",component:function(){let[e,t]=(0,o.useState)(1),[n,p]=(0,o.useState)(e),l=e=>{e>3||e<0||(t(e),p(t=>Math.max(t,e)))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.v,{active:e,onStepClick:t,children:[(0,r.jsx)(i.v.Step,{label:"First step",description:"Create an account",allowStepSelect:n>=0&&0!==e,children:(0,r.jsx)(a,{children:"Step 1 content: Create an account"})}),(0,r.jsx)(i.v.Step,{label:"Second step",description:"Verify email",allowStepSelect:n>=1&&1!==e,children:(0,r.jsx)(a,{children:"Step 2 content: Verify email"})}),(0,r.jsx)(i.v.Step,{label:"Final step",description:"Get full access",allowStepSelect:n>=2&&2!==e,children:(0,r.jsx)(a,{children:"Step 3 content: Get full access"})}),(0,r.jsx)(i.v.Completed,{children:(0,r.jsx)(a,{children:"Completed, click back button to get to previous step"})})]}),(0,r.jsxs)(c.Z,{justify:"center",mt:"xl",children:[(0,r.jsx)(s.z,{variant:"default",onClick:()=>l(e-1),children:"Back"}),(0,r.jsx)(s.z,{onClick:()=>l(e+1),children:"Next step"})]})]})},code:`
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
`},u={type:"code",component:function(){let[e,t]=(0,o.useState)(1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.v,{active:e,onStepClick:t,allowNextStepsSelect:!1,children:[(0,r.jsx)(i.v.Step,{label:"First step",description:"Create an account",children:(0,r.jsx)(a,{children:"Step 1 content: Create an account"})}),(0,r.jsx)(i.v.Step,{label:"Second step",description:"Verify email",children:(0,r.jsx)(a,{children:"Step 2 content: Verify email"})}),(0,r.jsx)(i.v.Step,{label:"Final step",description:"Get full access",children:(0,r.jsx)(a,{children:"Step 3 content: Get full access"})}),(0,r.jsx)(i.v.Completed,{children:(0,r.jsx)(a,{children:"Completed, click back button to get to previous step"})})]}),(0,r.jsxs)(c.Z,{justify:"center",mt:"xl",children:[(0,r.jsx)(s.z,{variant:"default",onClick:()=>t(e=>e>0?e-1:e),children:"Back"}),(0,r.jsx)(s.z,{onClick:()=>t(e=>e<3?e+1:e),children:"Next step"})]})]})},code:`
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
`},h={type:"configurator",component:function(e){return(0,r.jsxs)(i.v,{...e,active:1,children:[(0,r.jsx)(i.v.Step,{label:"Step 1",description:"Create an account"}),(0,r.jsx)(i.v.Step,{label:"Step 2",description:"Verify email"})]})},code:`
import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper{{props}} active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
    </Stepper>
  );
}
`,centered:!0,maxWidth:"100%",controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"}]},m={type:"configurator",component:function(e){return(0,r.jsxs)(i.v,{...e,active:1,children:[(0,r.jsx)(i.v.Step,{label:"Step 1",description:"Create an account"}),(0,r.jsx)(i.v.Step,{label:"Step 2",description:"Verify email"})]})},code:`
import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper{{props}} active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
    </Stepper>
  );
}
`,controls:[{prop:"iconSize",type:"number",initialValue:42,libraryValue:"__",min:32,max:62,step:5}]};var x=n(40848),v=n(73681),f=(0,v.Z)("outline","user-check","IconUserCheck",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4",key:"svg-1"}],["path",{d:"M15 19l2 2l4 -4",key:"svg-2"}]]),j=(0,v.Z)("outline","mail-opened","IconMailOpened",[["path",{d:"M3 9l9 6l9 -6l-9 -6l-9 6",key:"svg-0"}],["path",{d:"M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10",key:"svg-1"}],["path",{d:"M3 19l6 -6",key:"svg-2"}],["path",{d:"M15 13l6 6",key:"svg-3"}]]),b=(0,v.Z)("outline","shield-check","IconShieldCheck",[["path",{d:"M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06",key:"svg-0"}],["path",{d:"M15 19l2 2l4 -4",key:"svg-1"}]]),y=n(58898);let g={type:"code",component:function(){let[e,t]=(0,o.useState)(1);return(0,r.jsxs)(i.v,{active:e,onStepClick:t,completedIcon:(0,r.jsx)(x.Z,{style:{width:(0,y.h)(18),height:(0,y.h)(18)}}),children:[(0,r.jsx)(i.v.Step,{icon:(0,r.jsx)(f,{style:{width:(0,y.h)(18),height:(0,y.h)(18)}}),label:"Step 1",description:"Create an account"}),(0,r.jsx)(i.v.Step,{icon:(0,r.jsx)(j,{style:{width:(0,y.h)(18),height:(0,y.h)(18)}}),label:"Step 2",description:"Verify email"}),(0,r.jsx)(i.v.Step,{icon:(0,r.jsx)(b,{style:{width:(0,y.h)(18),height:(0,y.h)(18)}}),label:"Step 3",description:"Get full access"})]})},code:`
import { useState } from 'react';
import {
  IconUserCheck,
  IconMailOpened,
  IconShieldCheck,
  IconCircleCheck,
} from '@tabler/icons-react';
import { Stepper, rem } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper
      active={active}
      onStepClick={setActive}
      completedIcon={<IconCircleCheck style={{ width: rem(18), height: rem(18) }} />}
    >
      <Stepper.Step
        icon={<IconUserCheck style={{ width: rem(18), height: rem(18) }} />}
        label="Step 1"
        description="Create an account"
      />
      <Stepper.Step
        icon={<IconMailOpened style={{ width: rem(18), height: rem(18) }} />}
        label="Step 2"
        description="Verify email"
      />
      <Stepper.Step
        icon={<IconShieldCheck style={{ width: rem(18), height: rem(18) }} />}
        label="Step 3"
        description="Get full access"
      />
    </Stepper>
  );
}
`},C={type:"code",component:function(){let[e,t]=(0,o.useState)(0);return(0,r.jsxs)(i.v,{active:e,onStepClick:t,children:[(0,r.jsx)(i.v.Step,{icon:(0,r.jsx)(f,{style:{width:(0,y.h)(18),height:(0,y.h)(18)}})}),(0,r.jsx)(i.v.Step,{icon:(0,r.jsx)(j,{style:{width:(0,y.h)(18),height:(0,y.h)(18)}})}),(0,r.jsx)(i.v.Step,{icon:(0,r.jsx)(b,{style:{width:(0,y.h)(18),height:(0,y.h)(18)}})})]})},code:`
import { useState } from 'react';
import { Stepper, rem } from '@mantine/core';
import { IconUserCheck, IconMailOpened, IconShieldCheck } from '@tabler/icons-react';

function Demo() {
  const [active, setActive] = useState(0);

  return (
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step icon={<IconUserCheck style={{ width: rem(18), height: rem(18) }} />} />
      <Stepper.Step icon={<IconMailOpened style={{ width: rem(18), height: rem(18) }} />} />
      <Stepper.Step icon={<IconShieldCheck style={{ width: rem(18), height: rem(18) }} />} />
    </Stepper>
  );
}
`};var k=(0,v.Z)("outline","circle-x","IconCircleX",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M10 10l4 4m0 -4l-4 4",key:"svg-1"}]]);let w={type:"code",component:function(){return(0,r.jsxs)(i.v,{active:2,children:[(0,r.jsx)(i.v.Step,{label:"Step 1",description:"Create an account"}),(0,r.jsx)(i.v.Step,{label:"Step 2",description:"Verify email",color:"red",completedIcon:(0,r.jsx)(k,{style:{width:(0,y.h)(20),height:(0,y.h)(20)}})}),(0,r.jsx)(i.v.Step,{label:"Step 3",description:"Get full access"})]})},code:`
import { Stepper, rem } from '@mantine/core';
import { IconCircleX } from '@tabler/icons-react';

function Demo() {
  return (
    <Stepper active={2}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step
        label="Step 2"
        description="Verify email"
        color="red"
        completedIcon={<IconCircleX style={{ width: rem(20), height: rem(20) }} />}
      />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`},I={type:"code",component:function(){let[e,t]=(0,o.useState)(1);return(0,r.jsxs)(i.v,{active:e,onStepClick:t,orientation:"vertical",children:[(0,r.jsx)(i.v.Step,{label:"Step 1",description:"Create an account"}),(0,r.jsx)(i.v.Step,{label:"Step 2",description:"Verify email"}),(0,r.jsx)(i.v.Step,{label:"Step 3",description:"Get full access"})]})},code:`
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
`},V={type:"code",component:function(){let[e,t]=(0,o.useState)(1);return(0,r.jsxs)(i.v,{active:e,onStepClick:t,iconPosition:"right",children:[(0,r.jsx)(i.v.Step,{label:"Step 1",description:"Create an account"}),(0,r.jsx)(i.v.Step,{label:"Step 2",description:"Verify email"}),(0,r.jsx)(i.v.Step,{label:"Step 3",description:"Get full access"})]})},code:`
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
`},G={type:"code",component:function(){return(0,r.jsxs)(i.v,{active:1,children:[(0,r.jsx)(i.v.Step,{label:"Step 1",description:"Create an account"}),(0,r.jsx)(i.v.Step,{label:"Step 2",description:"Verify email",loading:!0}),(0,r.jsx)(i.v.Step,{label:"Step 3",description:"Get full access"})]})},code:`
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
`};var A=n(38637);let z=`
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
`,B={type:"styles-api",centered:!0,maxWidth:"100%",data:A.U,component:function(e){let[t,n]=(0,o.useState)(1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.v,{active:t,onStepClick:n,...e,children:[(0,r.jsx)(i.v.Step,{label:"First step",description:"Create an account",loading:!0,children:(0,r.jsx)(a,{children:"Step 1 content: Create an account"})}),(0,r.jsx)(i.v.Step,{label:"Second step",description:"Verify email",children:(0,r.jsx)(a,{children:"Step 2 content: Verify email"})}),(0,r.jsx)(i.v.Completed,{children:(0,r.jsx)(a,{children:"Completed, click back button to get to previous step"})})]}),(0,r.jsxs)(c.Z,{justify:"center",mt:"xl",children:[(0,r.jsx)(s.z,{variant:"default",onClick:()=>n(e=>e>0?e-1:e),children:"Back"}),(0,r.jsx)(s.z,{onClick:()=>n(e=>e<2?e+1:e),children:"Next step"})]})]})},code:z};function _(e){return(0,r.jsx)(i.v,{styles:{stepBody:{display:"none"},step:{padding:0},stepIcon:{borderWidth:(0,y.h)(3)},separator:{marginLeft:(0,y.h)(-2),marginRight:(0,y.h)(-2),height:(0,y.h)(6)}},...e})}let N={type:"code",component:function(){let[e,t]=(0,o.useState)(1);return(0,r.jsxs)(_,{active:e,onStepClick:t,children:[(0,r.jsx)(i.v.Step,{label:"Step 1",description:"Create an account"}),(0,r.jsx)(i.v.Step,{label:"Step 2",description:"Verify email"}),(0,r.jsx)(i.v.Step,{label:"Step 3",description:"Get full access"})]})},code:`
import { useState } from 'react';
import { Stepper, StepperProps, rem } from '@mantine/core';

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
          borderWidth: rem(4),
        },

        separator: {
          marginLeft: rem(-2),
          marginRight: rem(-2),
          height: rem(10),
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
`};var D={separator:"m_24b8a321",stepIcon:"m_ced9b9a9",step:"m_f1461110"};let M={type:"code",component:function(){let[e,t]=(0,o.useState)(1);return(0,r.jsxs)(i.v,{classNames:D,active:e,onStepClick:t,children:[(0,r.jsx)(i.v.Step,{label:"Step 1",description:"Create an account"}),(0,r.jsx)(i.v.Step,{label:"Step 2",description:"Verify email"}),(0,r.jsx)(i.v.Step,{label:"Step 3",description:"Get full access"})]})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}]};var F=n(25071),W=n(15019);let P=(0,F.A)(W.us.Stepper);function O(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,p.a)(),...e.components},{Demo:n,StylesApiSelectors:o}=t;return n||Z("Demo",!0),o||Z("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:d}),"\n",(0,r.jsx)(t.h2,{id:"allow-step-select",children:"Allow step select"}),"\n",(0,r.jsxs)(t.p,{children:["To disable step selection, set ",(0,r.jsx)(t.code,{children:"allowStepSelect"})," prop on ",(0,r.jsx)(t.code,{children:"Stepper.Step"})," component.\nIt can be used to prevent the user from reaching next steps while letting them go back and forth between steps they've already reached before:"]}),"\n",(0,r.jsx)(n,{data:S}),"\n",(0,r.jsx)(t.h2,{id:"disable-next-steps-selection",children:"Disable next steps selection"}),"\n",(0,r.jsxs)(t.p,{children:["Another way to disable selection of upcoming steps is to use the ",(0,r.jsx)(t.code,{children:"allowNextStepsSelect"})," directly on the ",(0,r.jsx)(t.code,{children:"Stepper"})," component.\nThis is useful when you don't need to control the behavior specifically for each step."]}),"\n",(0,r.jsx)(n,{data:u}),"\n",(0,r.jsx)(t.h2,{id:"color-radius-and-size",children:"Color, radius and size"}),"\n",(0,r.jsx)(n,{data:h}),"\n",(0,r.jsxs)(t.p,{children:["Component size is controlled by two props: ",(0,r.jsx)(t.code,{children:"size"})," and ",(0,r.jsx)(t.code,{children:"iconSize"}),".\n",(0,r.jsx)(t.code,{children:"size"})," prop controls icon size, label and description font size.\n",(0,r.jsx)(t.code,{children:"iconSize"})," allows to overwrite icon size separately from other size values:"]}),"\n",(0,r.jsx)(n,{data:m}),"\n",(0,r.jsx)(t.h2,{id:"with-custom-icons",children:"With custom icons"}),"\n",(0,r.jsxs)(t.p,{children:["You can replace the step icon by setting ",(0,r.jsx)(t.code,{children:"icon"})," prop on ",(0,r.jsx)(t.code,{children:"Stepper.Step"})," component.\nTo change completed check icon set ",(0,r.jsx)(t.code,{children:"completedIcon"})," on ",(0,r.jsx)(t.code,{children:"Stepper"})," component.\nYou can use any React node as an icon: component, string, number:"]}),"\n",(0,r.jsx)(n,{data:g}),"\n",(0,r.jsxs)(t.p,{children:["You can use ",(0,r.jsx)(t.code,{children:"Stepper"})," with icons only. Note that in this case, you will have to\nset ",(0,r.jsx)(t.code,{children:"aria-label"})," or ",(0,r.jsx)(t.code,{children:"title"})," on ",(0,r.jsx)(t.code,{children:"Stepper.Step"})," component to make it accessible:"]}),"\n",(0,r.jsx)(n,{data:C}),"\n",(0,r.jsx)(t.p,{children:"You can also change the completed icon for each step, for example, to indicate error state:"}),"\n",(0,r.jsx)(n,{data:w}),"\n",(0,r.jsx)(t.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,r.jsx)(n,{data:I}),"\n",(0,r.jsx)(t.h2,{id:"icon-position",children:"Icon position"}),"\n",(0,r.jsxs)(t.p,{children:["To change step icon and body arrangement, set ",(0,r.jsx)(t.code,{children:'iconPosition="right"'}),":"]}),"\n",(0,r.jsx)(n,{data:V}),"\n",(0,r.jsx)(t.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,r.jsxs)(t.p,{children:["To indicate loading state set ",(0,r.jsx)(t.code,{children:"loading"})," prop on Step component, ",(0,r.jsx)(t.code,{children:"Loader"})," will replace step icon.\nYou can configure the default loader in the ",(0,r.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"}),"."]}),"\n",(0,r.jsx)(n,{data:G}),"\n",(0,r.jsx)(o,{component:"Stepper"}),"\n",(0,r.jsx)(n,{data:B}),"\n",(0,r.jsx)(t.p,{children:"Examples of styles customization with Styles API:"}),"\n",(0,r.jsx)(n,{data:N}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n,{data:M}),"\n",(0,r.jsx)(t.h2,{id:"get-step-ref",children:"Get step ref"}),"\n",(0,r.jsx)(t.p,{children:"You can get refs of step button and stepper root element (div):"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useRef } from 'react';\nimport { Stepper } from '@mantine/core';\n\nfunction MyStepper() {\n  const firstStep = useRef<HTMLButtonElement>(null);\n  const stepper = useRef<HTMLDivElement>(null);\n\n  return (\n    <Stepper ref={stepper} active={0}>\n      <Stepper.Step label=\"First step\" ref={firstStep} />\n      <Stepper.Step label=\"Second step\" />\n    </Stepper>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"wrap-stepperstep",children:"Wrap Stepper.Step"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Stepper"})," component relies on ",(0,r.jsx)(t.code,{children:"Stepper.Step"})," order. Wrapping ",(0,r.jsx)(t.code,{children:"Stepper.Step"})," is not supported,\nInstead you will need to use different approaches:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Stepper } from \'@mantine/core\';\n\n// This will not work, step children will not render\nfunction WillNotWork() {\n  return (\n    <Stepper.Step label="Nope" description="It will not work">\n      This part will not render\n    </Stepper.Step>\n  );\n}\n\n// Create a separate component for children\nfunction WillWork() {\n  return <div>This will work as expected!</div>;\n}\n\nfunction Demo() {\n  return (\n    <Stepper active={1}>\n      <Stepper.Step label="Regular step">First step</Stepper.Step>\n      {/* Wrapped Stepper.Step will not render children, do not do that */}\n      <WillNotWork />\n      <Stepper.Step label="Step with custom content">\n        <WillWork />\n      </Stepper.Step>\n      <Stepper.Step label="Regular step">Third step</Stepper.Step>\n    </Stepper>\n  );\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"<Stepper.Step />"})," components render button element, set ",(0,r.jsx)(t.code,{children:"aria-label"})," or ",(0,r.jsx)(t.code,{children:"title"})," props\nto make component visible for screen readers in case you do not specify ",(0,r.jsx)(t.code,{children:"label"})," or ",(0,r.jsx)(t.code,{children:"description"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Stepper } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Stepper active={0}>\n      {/* Not ok, no label for screen reader */}\n      <Stepper.Step />\n\n      {/* Ok, label and description */}\n      <Stepper.Step label="Step 1" description="Create an account" />\n\n      {/* Ok, aria-label */}\n      <Stepper.Step aria-label="Create an account" />\n    </Stepper>\n  );\n}\n'})})]})}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(P,{...e,children:(0,r.jsx)(O,{...e})})}function Z(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},40848:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(73681).Z)("outline","circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]])},6403:function(e,t,n){"use strict";n.d(t,{v:function(){return A}});var r=n(52322),p=n(2784),o=n(58898),i=n(91482),c=n(11200),s=n(13588),l=n(39568),a=n(90006),d=n(38483),S=n(46690),u=n(28559),h=n(82027);let[m,x]=(0,n(89106).R)("Stepper component was not found in tree"),v=()=>null;v.displayName="@mantine/core/StepperCompleted";var f=n(68755),j=n(40284),b=n(12491),y=n(96321),g=n(63409),C={root:"m_cbb4ea7e",steps:"m_aaf89d0b",separator:"m_2a371ac9",content:"m_78da155d",step:"m_cbb57068","step--horizontal":"m_f56b1e2c","step--vertical":"m_833edb7e",verticalSeparator:"m_6496b3f3",stepWrapper:"m_818e70b",stepIcon:"m_1959ad01",stepCompletedIcon:"m_a79331dc",stepBody:"m_1956aa2a",stepLabel:"m_12051f6c",stepDescription:"m_164eea74"};let k=(e,t)=>"function"==typeof e?(0,r.jsx)(e,{step:t||0}):e,w={withIcon:!0,allowStepClick:!0,iconPosition:"left"},I=(0,h.d5)((e,t)=>{let{classNames:n,className:p,style:o,styles:i,vars:c,step:l,state:a,color:S,icon:u,completedIcon:h,progressIcon:m,label:v,description:C,withIcon:I,iconSize:V,loading:G,allowStepClick:A,allowStepSelect:z,iconPosition:B,orientation:_,mod:N,...D}=(0,d.w)("StepperStep",w,e),M=x(),F=(0,f.rZ)(),W={classNames:n,styles:i},P="stepCompleted"===a?null:"stepProgress"===a?m:u,O={"data-progress":"stepProgress"===a||void 0,"data-completed":"stepCompleted"===a||void 0};return(0,r.jsxs)(g.k,{...M.getStyles("step",{className:p,style:o,variant:M.orientation,...W}),mod:[{"icon-position":B||M.iconPosition,"allow-click":A},N],ref:t,...O,...D,__vars:{"--step-color":S?(0,s.p)(S,F):void 0},tabIndex:A?0:-1,children:[I&&(0,r.jsxs)("span",{...M.getStyles("stepWrapper",W),children:[(0,r.jsxs)("span",{...M.getStyles("stepIcon",W),...O,children:[(0,r.jsx)(y.u,{mounted:"stepCompleted"===a,transition:"pop",duration:200,children:e=>(0,r.jsx)("span",{...M.getStyles("stepCompletedIcon",{style:e,...W}),children:G?(0,r.jsx)(b.a,{color:"var(--mantine-color-white)",size:"calc(var(--stepper-icon-size) / 2)",...M.getStyles("stepLoader",W)}):k(h,l)||(0,r.jsx)(j.n,{size:"60%"})})}),"stepCompleted"!==a?G?(0,r.jsx)(b.a,{...M.getStyles("stepLoader",W),size:"calc(var(--stepper-icon-size) / 2)",color:S}):k(P||u,l):null]}),"vertical"===_&&(0,r.jsx)("span",{...M.getStyles("verticalSeparator",W),"data-active":"stepCompleted"===a||void 0})]}),(v||C)&&(0,r.jsxs)("span",{...M.getStyles("stepBody",W),"data-orientation":M.orientation,"data-icon-position":B||M.iconPosition,children:[v&&(0,r.jsx)("span",{...M.getStyles("stepLabel",W),children:k(v,l)}),C&&(0,r.jsx)("span",{...M.getStyles("stepDescription",W),children:k(C,l)})]})]})});I.classes=C,I.displayName="@mantine/core/StepperStep";let V={orientation:"horizontal",iconPosition:"left",allowNextStepsSelect:!0,wrap:!0},G=(0,c.Z)((e,{color:t,iconSize:n,size:r,contentPadding:p,radius:c,autoContrast:d})=>({root:{"--stepper-color":t?(0,s.p)(t,e):void 0,"--stepper-icon-color":(0,a.o)(d,e)?(0,l.R)({color:t,theme:e,autoContrast:d}):void 0,"--stepper-icon-size":void 0===n?(0,i.ap)(r,"stepper-icon-size"):(0,o.h)(n),"--stepper-content-padding":(0,i.bG)(p),"--stepper-radius":void 0===c?void 0:(0,i.H5)(c),"--stepper-fz":(0,i.yv)(r),"--stepper-spacing":(0,i.bG)(r)}})),A=(0,h.d5)((e,t)=>{let n=(0,d.w)("Stepper",V,e),{classNames:o,className:i,style:c,styles:s,unstyled:l,vars:a,children:h,onStepClick:x,active:f,icon:j,completedIcon:b,progressIcon:y,color:g,iconSize:k,contentPadding:w,orientation:I,iconPosition:A,size:z,radius:B,allowNextStepsSelect:_,wrap:N,autoContrast:D,...M}=n,F=(0,S.y)({name:"Stepper",classes:C,props:n,className:i,style:c,classNames:o,styles:s,unstyled:l,vars:a,varsResolver:G}),W=p.Children.toArray(h),P=W.filter(e=>e.type!==v),O=W.find(e=>e.type===v),T=P.reduce((e,t,n)=>{let r=f===n?"stepProgress":f>n?"stepCompleted":"stepInactive",o="function"==typeof x&&("boolean"==typeof t.props.allowStepSelect?t.props.allowStepSelect:"stepCompleted"===r||_);return e.push((0,p.cloneElement)(t,{icon:t.props.icon||j||n+1,key:n,step:n,state:r,onClick:()=>o&&x?.(n),allowStepClick:o,completedIcon:t.props.completedIcon||b,progressIcon:t.props.progressIcon||y,color:t.props.color||g,iconSize:k,radius:B,iconPosition:t.props.iconPosition||A,orientation:I,unstyled:l})),"horizontal"===I&&n!==P.length-1&&e.push((0,p.createElement)("div",{...F("separator"),"data-active":n<f||void 0,"data-orientation":I,key:`separator-${n}`})),e},[]),Z=P[f]?.props?.children,E=O?.props?.children,L=f>P.length-1?E:Z;return(0,r.jsx)(m,{value:{getStyles:F,orientation:I,iconPosition:A},children:(0,r.jsxs)(u.x,{...F("root"),ref:t,size:z,...M,children:[(0,r.jsx)(u.x,{...F("steps"),mod:{orientation:I,"icon-position":A,wrap:N&&"vertical"!==I},children:T}),L&&(0,r.jsx)("div",{...F("content"),children:L})]})})});A.classes=C,A.displayName="@mantine/core/Stepper",A.Completed=v,A.Step=I}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=62839)}),_N_E=e.O()}]);