(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31827],{81423:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/stepper",function(){return n(35010)}])},35010:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>W});var r=n(31085),p=n(71184),c=n(71703),i=n(14041),o=n(70967),s=n(56051),l=n(52022),a=n(39284);let d={type:"code",component:function(){let[e,t]=(0,i.useState)(1),[n,p]=(0,i.useState)(e),c=e=>{e>3||e<0||(t(e),p(t=>Math.max(t,e)))};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.C,{active:e,onStepClick:t,children:[(0,r.jsx)(o.C.Step,{label:"First step",description:"Create an account",allowStepSelect:n>=0&&0!==e,children:(0,r.jsx)(a.U,{children:"Step 1 content: Create an account"})}),(0,r.jsx)(o.C.Step,{label:"Second step",description:"Verify email",allowStepSelect:n>=1&&1!==e,children:(0,r.jsx)(a.U,{children:"Step 2 content: Verify email"})}),(0,r.jsx)(o.C.Step,{label:"Final step",description:"Get full access",allowStepSelect:n>=2&&2!==e,children:(0,r.jsx)(a.U,{children:"Step 3 content: Get full access"})}),(0,r.jsx)(o.C.Completed,{children:(0,r.jsx)(a.U,{children:"Completed, click back button to get to previous step"})})]}),(0,r.jsxs)(s.Y,{justify:"center",mt:"xl",children:[(0,r.jsx)(l.$,{variant:"default",onClick:()=>c(e-1),children:"Back"}),(0,r.jsx)(l.$,{onClick:()=>c(e+1),children:"Next step"})]})]})},code:`
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
`},S={type:"code",component:function(){let[e,t]=(0,i.useState)(1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.C,{active:e,onStepClick:t,allowNextStepsSelect:!1,children:[(0,r.jsx)(o.C.Step,{label:"First step",description:"Create an account",children:(0,r.jsx)(a.U,{children:"Step 1 content: Create an account"})}),(0,r.jsx)(o.C.Step,{label:"Second step",description:"Verify email",children:(0,r.jsx)(a.U,{children:"Step 2 content: Verify email"})}),(0,r.jsx)(o.C.Step,{label:"Final step",description:"Get full access",children:(0,r.jsx)(a.U,{children:"Step 3 content: Get full access"})}),(0,r.jsx)(o.C.Completed,{children:(0,r.jsx)(a.U,{children:"Completed, click back button to get to previous step"})})]}),(0,r.jsxs)(s.Y,{justify:"center",mt:"xl",children:[(0,r.jsx)(l.$,{variant:"default",onClick:()=>t(e=>e>0?e-1:e),children:"Back"}),(0,r.jsx)(l.$,{onClick:()=>t(e=>e<3?e+1:e),children:"Next step"})]})]})},code:`
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
`},u={type:"configurator",component:function(e){return(0,r.jsxs)(o.C,{...e,active:1,children:[(0,r.jsx)(o.C.Step,{label:"Step 1",description:"Create an account"}),(0,r.jsx)(o.C.Step,{label:"Step 2",description:"Verify email"})]})},code:`
import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper{{props}} active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
    </Stepper>
  );
}
`,centered:!0,maxWidth:"100%",controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"}]},m={type:"configurator",component:function(e){return(0,r.jsxs)(o.C,{...e,active:1,children:[(0,r.jsx)(o.C.Step,{label:"Step 1",description:"Create an account"}),(0,r.jsx)(o.C.Step,{label:"Step 2",description:"Verify email"})]})},code:`
import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper{{props}} active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
    </Stepper>
  );
}
`,controls:[{prop:"iconSize",type:"number",initialValue:42,libraryValue:"__",min:32,max:62,step:5}]};var h=n(50662),x=n(73366),f=(0,x.A)("outline","user-check","IconUserCheck",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4",key:"svg-1"}],["path",{d:"M15 19l2 2l4 -4",key:"svg-2"}]]),j=(0,x.A)("outline","mail-opened","IconMailOpened",[["path",{d:"M3 9l9 6l9 -6l-9 -6l-9 6",key:"svg-0"}],["path",{d:"M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10",key:"svg-1"}],["path",{d:"M3 19l6 -6",key:"svg-2"}],["path",{d:"M15 13l6 6",key:"svg-3"}]]),C=(0,x.A)("outline","shield-check","IconShieldCheck",[["path",{d:"M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06",key:"svg-0"}],["path",{d:"M15 19l2 2l4 -4",key:"svg-1"}]]);let b={type:"code",component:function(){let[e,t]=(0,i.useState)(1);return(0,r.jsxs)(o.C,{active:e,onStepClick:t,completedIcon:(0,r.jsx)(h.A,{size:18}),children:[(0,r.jsx)(o.C.Step,{icon:(0,r.jsx)(f,{size:18}),label:"Step 1",description:"Create an account"}),(0,r.jsx)(o.C.Step,{icon:(0,r.jsx)(j,{size:18}),label:"Step 2",description:"Verify email"}),(0,r.jsx)(o.C.Step,{icon:(0,r.jsx)(C,{size:18}),label:"Step 3",description:"Get full access"})]})},code:`
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
`},v={type:"code",component:function(){let[e,t]=(0,i.useState)(0);return(0,r.jsxs)(o.C,{active:e,onStepClick:t,children:[(0,r.jsx)(o.C.Step,{icon:(0,r.jsx)(f,{size:18})}),(0,r.jsx)(o.C.Step,{icon:(0,r.jsx)(j,{size:18})}),(0,r.jsx)(o.C.Step,{icon:(0,r.jsx)(C,{size:18})})]})},code:`
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
`};var y=(0,x.A)("outline","circle-x","IconCircleX",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M10 10l4 4m0 -4l-4 4",key:"svg-1"}]]);let k={type:"code",component:function(){return(0,r.jsxs)(o.C,{active:2,children:[(0,r.jsx)(o.C.Step,{label:"Step 1",description:"Create an account"}),(0,r.jsx)(o.C.Step,{label:"Step 2",description:"Verify email",color:"red",completedIcon:(0,r.jsx)(y,{size:20})}),(0,r.jsx)(o.C.Step,{label:"Step 3",description:"Get full access"})]})},code:`
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
`},g={type:"code",component:function(){let[e,t]=(0,i.useState)(1);return(0,r.jsxs)(o.C,{active:e,onStepClick:t,orientation:"vertical",children:[(0,r.jsx)(o.C.Step,{label:"Step 1",description:"Create an account"}),(0,r.jsx)(o.C.Step,{label:"Step 2",description:"Verify email"}),(0,r.jsx)(o.C.Step,{label:"Step 3",description:"Get full access"})]})},code:`
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
`},w={type:"code",component:function(){let[e,t]=(0,i.useState)(1);return(0,r.jsxs)(o.C,{active:e,onStepClick:t,iconPosition:"right",children:[(0,r.jsx)(o.C.Step,{label:"Step 1",description:"Create an account"}),(0,r.jsx)(o.C.Step,{label:"Step 2",description:"Verify email"}),(0,r.jsx)(o.C.Step,{label:"Step 3",description:"Get full access"})]})},code:`
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
`},V={type:"code",component:function(){return(0,r.jsxs)(o.C,{active:1,children:[(0,r.jsx)(o.C.Step,{label:"Step 1",description:"Create an account"}),(0,r.jsx)(o.C.Step,{label:"Step 2",description:"Verify email",loading:!0}),(0,r.jsx)(o.C.Step,{label:"Step 3",description:"Get full access"})]})},code:`
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
`};var A=n(85669);let I=`
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
`,z={type:"styles-api",centered:!0,maxWidth:"100%",data:A.q,component:function(e){let[t,n]=(0,i.useState)(1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.C,{active:t,onStepClick:n,...e,children:[(0,r.jsx)(o.C.Step,{label:"First step",description:"Create an account",loading:!0,children:(0,r.jsx)(a.U,{children:"Step 1 content: Create an account"})}),(0,r.jsx)(o.C.Step,{label:"Second step",description:"Verify email",children:(0,r.jsx)(a.U,{children:"Step 2 content: Verify email"})}),(0,r.jsx)(o.C.Completed,{children:(0,r.jsx)(a.U,{children:"Completed, click back button to get to previous step"})})]}),(0,r.jsxs)(s.Y,{justify:"center",mt:"xl",children:[(0,r.jsx)(l.$,{variant:"default",onClick:()=>n(e=>e>0?e-1:e),children:"Back"}),(0,r.jsx)(l.$,{onClick:()=>n(e=>e<2?e+1:e),children:"Next step"})]})]})},code:I};function G(e){return(0,r.jsx)(o.C,{styles:{stepBody:{display:"none"},step:{padding:0},stepIcon:{borderWidth:3},separator:{marginLeft:-2,marginRight:-2,height:6}},...e})}let N={type:"code",component:function(){let[e,t]=(0,i.useState)(1);return(0,r.jsxs)(G,{active:e,onStepClick:t,children:[(0,r.jsx)(o.C.Step,{label:"Step 1",description:"Create an account"}),(0,r.jsx)(o.C.Step,{label:"Step 2",description:"Verify email"}),(0,r.jsx)(o.C.Step,{label:"Step 3",description:"Get full access"})]})},code:`
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
`};var B={separator:"m_24b8a321",stepIcon:"m_ced9b9a9",step:"m_f1461110"};let M={type:"code",component:function(){let[e,t]=(0,i.useState)(1);return(0,r.jsxs)(o.C,{classNames:B,active:e,onStepClick:t,children:[(0,r.jsx)(o.C.Step,{label:"Step 1",description:"Create an account"}),(0,r.jsx)(o.C.Step,{label:"Step 2",description:"Verify email"}),(0,r.jsx)(o.C.Step,{label:"Step 3",description:"Get full access"})]})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}]};var D=n(18675),U=n(20017);let _=(0,D.P)(U.XZ.Stepper);function F(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,p.R)(),...e.components},{Demo:n,StylesApiSelectors:i}=t;return n||O("Demo",!0),i||O("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:c.C}),"\n",(0,r.jsx)(t.h2,{id:"allow-step-select",children:"Allow step select"}),"\n",(0,r.jsxs)(t.p,{children:["To disable step selection, set ",(0,r.jsx)(t.code,{children:"allowStepSelect"})," prop on ",(0,r.jsx)(t.code,{children:"Stepper.Step"})," component.\nIt can be used to prevent the user from reaching next steps while letting them go back and forth between steps they've already reached before:"]}),"\n",(0,r.jsx)(n,{data:d}),"\n",(0,r.jsx)(t.h2,{id:"disable-next-steps-selection",children:"Disable next steps selection"}),"\n",(0,r.jsxs)(t.p,{children:["Another way to disable selection of upcoming steps is to use the ",(0,r.jsx)(t.code,{children:"allowNextStepsSelect"})," directly on the ",(0,r.jsx)(t.code,{children:"Stepper"})," component.\nThis is useful when you don't need to control the behavior specifically for each step."]}),"\n",(0,r.jsx)(n,{data:S}),"\n",(0,r.jsx)(t.h2,{id:"color-radius-and-size",children:"Color, radius and size"}),"\n",(0,r.jsx)(n,{data:u}),"\n",(0,r.jsxs)(t.p,{children:["Component size is controlled by two props: ",(0,r.jsx)(t.code,{children:"size"})," and ",(0,r.jsx)(t.code,{children:"iconSize"}),".\n",(0,r.jsx)(t.code,{children:"size"})," prop controls icon size, label and description font size.\n",(0,r.jsx)(t.code,{children:"iconSize"})," allows to overwrite icon size separately from other size values:"]}),"\n",(0,r.jsx)(n,{data:m}),"\n",(0,r.jsx)(t.h2,{id:"with-custom-icons",children:"With custom icons"}),"\n",(0,r.jsxs)(t.p,{children:["You can replace the step icon by setting ",(0,r.jsx)(t.code,{children:"icon"})," prop on ",(0,r.jsx)(t.code,{children:"Stepper.Step"})," component.\nTo change completed check icon set ",(0,r.jsx)(t.code,{children:"completedIcon"})," on ",(0,r.jsx)(t.code,{children:"Stepper"})," component.\nYou can use any React node as an icon: component, string, number:"]}),"\n",(0,r.jsx)(n,{data:b}),"\n",(0,r.jsxs)(t.p,{children:["You can use ",(0,r.jsx)(t.code,{children:"Stepper"})," with icons only. Note that in this case, you will have to\nset ",(0,r.jsx)(t.code,{children:"aria-label"})," or ",(0,r.jsx)(t.code,{children:"title"})," on ",(0,r.jsx)(t.code,{children:"Stepper.Step"})," component to make it accessible:"]}),"\n",(0,r.jsx)(n,{data:v}),"\n",(0,r.jsx)(t.p,{children:"You can also change the completed icon for each step, for example, to indicate error state:"}),"\n",(0,r.jsx)(n,{data:k}),"\n",(0,r.jsx)(t.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,r.jsx)(n,{data:g}),"\n",(0,r.jsx)(t.h2,{id:"icon-position",children:"Icon position"}),"\n",(0,r.jsxs)(t.p,{children:["To change step icon and body arrangement, set ",(0,r.jsx)(t.code,{children:'iconPosition="right"'}),":"]}),"\n",(0,r.jsx)(n,{data:w}),"\n",(0,r.jsx)(t.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,r.jsxs)(t.p,{children:["To indicate loading state set ",(0,r.jsx)(t.code,{children:"loading"})," prop on Step component, ",(0,r.jsx)(t.code,{children:"Loader"})," will replace step icon.\nYou can configure the default loader in the ",(0,r.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"}),"."]}),"\n",(0,r.jsx)(n,{data:V}),"\n",(0,r.jsx)(i,{component:"Stepper"}),"\n",(0,r.jsx)(n,{data:z}),"\n",(0,r.jsx)(t.p,{children:"Examples of styles customization with Styles API:"}),"\n",(0,r.jsx)(n,{data:N}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n,{data:M}),"\n",(0,r.jsx)(t.h2,{id:"get-step-ref",children:"Get step ref"}),"\n",(0,r.jsx)(t.p,{children:"You can get refs of step button and stepper root element (div):"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useRef } from 'react';\nimport { Stepper } from '@mantine/core';\n\nfunction MyStepper() {\n  const firstStep = useRef<HTMLButtonElement>(null);\n  const stepper = useRef<HTMLDivElement>(null);\n\n  return (\n    <Stepper ref={stepper} active={0}>\n      <Stepper.Step label=\"First step\" ref={firstStep} />\n      <Stepper.Step label=\"Second step\" />\n    </Stepper>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"wrap-stepperstep",children:"Wrap Stepper.Step"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Stepper"})," component relies on ",(0,r.jsx)(t.code,{children:"Stepper.Step"})," order. Wrapping ",(0,r.jsx)(t.code,{children:"Stepper.Step"})," is not supported,\nInstead you will need to use different approaches:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Stepper } from \'@mantine/core\';\n\n// This will not work, step children will not render\nfunction WillNotWork() {\n  return (\n    <Stepper.Step label="Nope" description="It will not work">\n      This part will not render\n    </Stepper.Step>\n  );\n}\n\n// Create a separate component for children\nfunction WillWork() {\n  return <div>This will work as expected!</div>;\n}\n\nfunction Demo() {\n  return (\n    <Stepper active={1}>\n      <Stepper.Step label="Regular step">First step</Stepper.Step>\n      {/* Wrapped Stepper.Step will not render children, do not do that */}\n      <WillNotWork />\n      <Stepper.Step label="Step with custom content">\n        <WillWork />\n      </Stepper.Step>\n      <Stepper.Step label="Regular step">Third step</Stepper.Step>\n    </Stepper>\n  );\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"<Stepper.Step />"})," components render button element, set ",(0,r.jsx)(t.code,{children:"aria-label"})," or ",(0,r.jsx)(t.code,{children:"title"})," props\nto make component visible for screen readers in case you do not specify ",(0,r.jsx)(t.code,{children:"label"})," or ",(0,r.jsx)(t.code,{children:"description"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Stepper } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Stepper active={0}>\n      {/* Not ok, no label for screen reader */}\n      <Stepper.Step />\n\n      {/* Ok, label and description */}\n      <Stepper.Step label="Step 1" description="Create an account" />\n\n      {/* Ok, aria-label */}\n      <Stepper.Step aria-label="Create an account" />\n    </Stepper>\n  );\n}\n'})})]})}function W(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(_,{...e,children:(0,r.jsx)(F,{...e})})}function O(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},50662:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});var r=(0,n(73366).A)("outline","circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]])}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,13555,90636,46593,38792],()=>t(81423)),_N_E=e.O()}]);