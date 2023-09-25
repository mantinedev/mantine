(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8807],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},98063:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/stepper",function(){return n(12737)}])},12737:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eB}});var r=n(85893),o=n(11151),c=n(19905),p=n(9904),a=n(67294),l=n(46112),i=n(16262),s=n(14469),d=n(81110),S=Object.defineProperty,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&v(e,n,t[n]);if(m)for(var n of m(t))h.call(t,n)&&v(e,n,t[n]);return e};function b(e){return a.createElement(d.x,f({style:{height:60,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:500,fontSize:"var(--mantine-font-size-lg)"}},e))}let y=`
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
`,g={type:"code",component:function(){let[e,t]=(0,a.useState)(1),n=()=>t(e=>e<3?e+1:e),r=()=>t(e=>e>0?e-1:e);return a.createElement(a.Fragment,null,a.createElement(l.v,{active:e,onStepClick:t},a.createElement(l.v.Step,{label:"First step",description:"Create an account"},a.createElement(b,null,"Step 1 content: Create an account")),a.createElement(l.v.Step,{label:"Second step",description:"Verify email"},a.createElement(b,null,"Step 2 content: Verify email")),a.createElement(l.v.Step,{label:"Final step",description:"Get full access"},a.createElement(b,null,"Step 3 content: Get full access")),a.createElement(l.v.Completed,null,a.createElement(b,null,"Completed, click back button to get to previous step"))),a.createElement(i.Z,{justify:"center",mt:"xl"},a.createElement(s.z,{variant:"default",onClick:r},"Back"),a.createElement(s.z,{onClick:n},"Next step")))},code:y},k=`
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
`,C={type:"code",component:function(){let[e,t]=(0,a.useState)(1),[n,r]=(0,a.useState)(e),o=e=>{e>3||e<0||(t(e),r(t=>Math.max(t,e)))};return a.createElement(a.Fragment,null,a.createElement(l.v,{active:e,onStepClick:t},a.createElement(l.v.Step,{label:"First step",description:"Create an account",allowStepSelect:n>=0&&0!==e},a.createElement(b,null,"Step 1 content: Create an account")),a.createElement(l.v.Step,{label:"Second step",description:"Verify email",allowStepSelect:n>=1&&1!==e},a.createElement(b,null,"Step 2 content: Verify email")),a.createElement(l.v.Step,{label:"Final step",description:"Get full access",allowStepSelect:n>=2&&2!==e},a.createElement(b,null,"Step 3 content: Get full access")),a.createElement(l.v.Completed,null,a.createElement(b,null,"Completed, click back button to get to previous step"))),a.createElement(i.Z,{justify:"center",mt:"xl"},a.createElement(s.z,{variant:"default",onClick:()=>o(e-1)},"Back"),a.createElement(s.z,{onClick:()=>o(e+1)},"Next step")))},code:k},x=`
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
`,E={type:"code",component:function(){let[e,t]=(0,a.useState)(1),n=()=>t(e=>e<3?e+1:e),r=()=>t(e=>e>0?e-1:e);return a.createElement(a.Fragment,null,a.createElement(l.v,{active:e,onStepClick:t,allowNextStepsSelect:!1},a.createElement(l.v.Step,{label:"First step",description:"Create an account"},a.createElement(b,null,"Step 1 content: Create an account")),a.createElement(l.v.Step,{label:"Second step",description:"Verify email"},a.createElement(b,null,"Step 2 content: Verify email")),a.createElement(l.v.Step,{label:"Final step",description:"Get full access"},a.createElement(b,null,"Step 3 content: Get full access")),a.createElement(l.v.Completed,null,a.createElement(b,null,"Completed, click back button to get to previous step"))),a.createElement(i.Z,{justify:"center",mt:"xl"},a.createElement(s.z,{variant:"default",onClick:r},"Back"),a.createElement(s.z,{onClick:n},"Next step")))},code:x};var j=Object.defineProperty,w=Object.defineProperties,O=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,V=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,z=(e,t)=>{for(var n in t||(t={}))M.call(t,n)&&V(e,n,t[n]);if(I)for(var n of I(t))P.call(t,n)&&V(e,n,t[n]);return e},A=(e,t)=>w(e,O(t));let G=`
import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper{{props}} active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
    </Stepper>
  );
}
`,N={type:"configurator",component:function(e){return a.createElement(l.v,A(z({},e),{active:1}),a.createElement(l.v.Step,{label:"Step 1",description:"Create an account"}),a.createElement(l.v.Step,{label:"Step 2",description:"Verify email"}))},code:G,centered:!0,maxWidth:"100%",controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"}]};var B=Object.defineProperty,D=Object.defineProperties,Z=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable,L=(e,t,n)=>t in e?B(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T=(e,t)=>{for(var n in t||(t={}))W.call(t,n)&&L(e,n,t[n]);if(F)for(var n of F(t))_.call(t,n)&&L(e,n,t[n]);return e},R=(e,t)=>D(e,Z(t));let U=`
import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper{{props}} active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
    </Stepper>
  );
}
`,Y={type:"configurator",component:function(e){return a.createElement(l.v,R(T({},e),{active:1}),a.createElement(l.v.Step,{label:"Step 1",description:"Create an account"}),a.createElement(l.v.Step,{label:"Step 2",description:"Verify email"}))},code:U,controls:[{prop:"iconSize",type:"number",initialValue:42,libraryValue:"__",min:32,max:62,step:5}]};var H=n(43310),X=n(54764),$=(0,X.Z)("user-check","IconUserCheck",[["path",{d:"M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0",key:"svg-0"}],["path",{d:"M6 21v-2a4 4 0 0 1 4 -4h4",key:"svg-1"}],["path",{d:"M15 19l2 2l4 -4",key:"svg-2"}]]),q=(0,X.Z)("mail-opened","IconMailOpened",[["path",{d:"M3 9l9 6l9 -6l-9 -6l-9 6",key:"svg-0"}],["path",{d:"M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10",key:"svg-1"}],["path",{d:"M3 19l6 -6",key:"svg-2"}],["path",{d:"M15 13l6 6",key:"svg-3"}]]),J=(0,X.Z)("shield-check","IconShieldCheck",[["path",{d:"M11.46 20.846a12 12 0 0 1 -7.96 -14.846a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3a12 12 0 0 1 -.09 7.06",key:"svg-0"}],["path",{d:"M15 19l2 2l4 -4",key:"svg-1"}]]),K=n(72622);let Q=`
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
`,ee={type:"code",component:function(){let[e,t]=(0,a.useState)(1);return a.createElement(l.v,{active:e,onStepClick:t,completedIcon:a.createElement(H.Z,{style:{width:(0,K.h)(18),height:(0,K.h)(18)}})},a.createElement(l.v.Step,{icon:a.createElement($,{style:{width:(0,K.h)(18),height:(0,K.h)(18)}}),label:"Step 1",description:"Create an account"}),a.createElement(l.v.Step,{icon:a.createElement(q,{style:{width:(0,K.h)(18),height:(0,K.h)(18)}}),label:"Step 2",description:"Verify email"}),a.createElement(l.v.Step,{icon:a.createElement(J,{style:{width:(0,K.h)(18),height:(0,K.h)(18)}}),label:"Step 3",description:"Get full access"}))},code:Q},et=`
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
`,en={type:"code",component:function(){let[e,t]=(0,a.useState)(0);return a.createElement(l.v,{active:e,onStepClick:t},a.createElement(l.v.Step,{icon:a.createElement($,{style:{width:(0,K.h)(18),height:(0,K.h)(18)}})}),a.createElement(l.v.Step,{icon:a.createElement(q,{style:{width:(0,K.h)(18),height:(0,K.h)(18)}})}),a.createElement(l.v.Step,{icon:a.createElement(J,{style:{width:(0,K.h)(18),height:(0,K.h)(18)}})}))},code:et};var er=(0,X.Z)("circle-x","IconCircleX",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M10 10l4 4m0 -4l-4 4",key:"svg-1"}]]);let eo=`
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
`,ec={type:"code",component:function(){return a.createElement(l.v,{active:2},a.createElement(l.v.Step,{label:"Step 1",description:"Create an account"}),a.createElement(l.v.Step,{label:"Step 2",description:"Verify email",color:"red",completedIcon:a.createElement(er,{style:{width:(0,K.h)(20),height:(0,K.h)(20)}})}),a.createElement(l.v.Step,{label:"Step 3",description:"Get full access"}))},code:eo},ep=`
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
`,ea={type:"code",component:function(){let[e,t]=(0,a.useState)(1);return a.createElement(l.v,{active:e,onStepClick:t,orientation:"vertical"},a.createElement(l.v.Step,{label:"Step 1",description:"Create an account"}),a.createElement(l.v.Step,{label:"Step 2",description:"Verify email"}),a.createElement(l.v.Step,{label:"Step 3",description:"Get full access"}))},code:ep},el=`
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
`,ei={type:"code",component:function(){let[e,t]=(0,a.useState)(1);return a.createElement(l.v,{active:e,onStepClick:t,iconPosition:"right"},a.createElement(l.v.Step,{label:"Step 1",description:"Create an account"}),a.createElement(l.v.Step,{label:"Step 2",description:"Verify email"}),a.createElement(l.v.Step,{label:"Step 3",description:"Get full access"}))},code:el},es=`
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
`,ed={type:"code",component:function(){return a.createElement(l.v,{active:1},a.createElement(l.v.Step,{label:"Step 1",description:"Create an account"}),a.createElement(l.v.Step,{label:"Step 2",description:"Verify email",loading:!0}),a.createElement(l.v.Step,{label:"Step 3",description:"Get full access"}))},code:es};var eS=n(90301),em=Object.defineProperty,eu=Object.getOwnPropertySymbols,eh=Object.prototype.hasOwnProperty,ev=Object.prototype.propertyIsEnumerable,ef=(e,t,n)=>t in e?em(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,eb=(e,t)=>{for(var n in t||(t={}))eh.call(t,n)&&ef(e,n,t[n]);if(eu)for(var n of eu(t))ev.call(t,n)&&ef(e,n,t[n]);return e};let ey=`
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
`,eg={type:"styles-api",centered:!0,maxWidth:"100%",data:eS.U,component:function(e){let[t,n]=(0,a.useState)(1),r=()=>n(e=>e<2?e+1:e),o=()=>n(e=>e>0?e-1:e);return a.createElement(a.Fragment,null,a.createElement(l.v,eb({active:t,onStepClick:n},e),a.createElement(l.v.Step,{label:"First step",description:"Create an account",loading:!0},a.createElement(b,null,"Step 1 content: Create an account")),a.createElement(l.v.Step,{label:"Second step",description:"Verify email"},a.createElement(b,null,"Step 2 content: Verify email")),a.createElement(l.v.Completed,null,a.createElement(b,null,"Completed, click back button to get to previous step"))),a.createElement(i.Z,{justify:"center",mt:"xl"},a.createElement(s.z,{variant:"default",onClick:o},"Back"),a.createElement(s.z,{onClick:r},"Next step")))},code:ey};var ek=Object.defineProperty,eC=Object.getOwnPropertySymbols,ex=Object.prototype.hasOwnProperty,eE=Object.prototype.propertyIsEnumerable,ej=(e,t,n)=>t in e?ek(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ew=(e,t)=>{for(var n in t||(t={}))ex.call(t,n)&&ej(e,n,t[n]);if(eC)for(var n of eC(t))eE.call(t,n)&&ej(e,n,t[n]);return e};let eO=`
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
`;function eI(e){return a.createElement(l.v,ew({styles:{stepBody:{display:"none"},step:{padding:0},stepIcon:{borderWidth:(0,K.h)(3)},separator:{marginLeft:(0,K.h)(-2),marginRight:(0,K.h)(-2),height:(0,K.h)(6)}}},e))}let eM={type:"code",component:function(){let[e,t]=(0,a.useState)(1);return a.createElement(eI,{active:e,onStepClick:t},a.createElement(l.v.Step,{label:"Step 1",description:"Create an account"}),a.createElement(l.v.Step,{label:"Step 2",description:"Verify email"}),a.createElement(l.v.Step,{label:"Step 3",description:"Get full access"}))},code:eO};var eP={separator:"m-24b8a321",stepIcon:"m-ced9b9a9",step:"m-f1461110"};let eV=`.separator {
  height: rem(2px);
  border-top: rem(2px) solid light-dark(var(--mantine-color-gray-4), var(--mantine-color-dark-3));
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
`,ez=`
import { useState } from 'react';
import { Stepper } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper classNames={classes} active={active} onStepClick={setActive} breakpoint="sm">
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`,eA={type:"code",component:function(){let[e,t]=(0,a.useState)(1);return a.createElement(l.v,{classNames:eP,active:e,onStepClick:t},a.createElement(l.v.Step,{label:"Step 1",description:"Create an account"}),a.createElement(l.v.Step,{label:"Step 2",description:"Verify email"}),a.createElement(l.v.Step,{label:"Step 3",description:"Get full access"}))},code:[{fileName:"Demo.tsx",code:ez,language:"tsx"},{fileName:"Demo.module.css",code:eV,language:"css"}]},eG=(0,c.A)(p.us.Stepper);function eN(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,o.ah)(),e.components),{Demo:n,StylesApiSelectors:c}=t;return n||eD("Demo",!0),c||eD("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:g}),"\n",(0,r.jsx)(t.h2,{id:"allow-step-select",children:"Allow step select"}),"\n",(0,r.jsxs)(t.p,{children:["To disable step selection, set ",(0,r.jsx)(t.code,{children:"allowStepSelect"})," prop on ",(0,r.jsx)(t.code,{children:"Stepper.Step"})," component.\nIt can be used to prevent the user from reaching next steps while letting them go back and forth between steps they've already reached before:"]}),"\n",(0,r.jsx)(n,{data:C}),"\n",(0,r.jsx)(t.h2,{id:"disable-next-steps-selection",children:"Disable next steps selection"}),"\n",(0,r.jsxs)(t.p,{children:["Another way to disable selection of upcoming steps is to use the ",(0,r.jsx)(t.code,{children:"allowNextStepsSelect"})," directly on the ",(0,r.jsx)(t.code,{children:"Stepper"})," component.\nThis is useful when you don't need to control the behavior specifically for each step."]}),"\n",(0,r.jsx)(n,{data:E}),"\n",(0,r.jsx)(t.h2,{id:"color-radius-and-size",children:"Color, radius and size"}),"\n",(0,r.jsx)(n,{data:N}),"\n",(0,r.jsxs)(t.p,{children:["Component size is controlled by two props: ",(0,r.jsx)(t.code,{children:"size"})," and ",(0,r.jsx)(t.code,{children:"iconSize"}),".\n",(0,r.jsx)(t.code,{children:"size"})," prop controls icon size, label and description font size.\n",(0,r.jsx)(t.code,{children:"iconSize"})," allows to overwrite icon size separately from other size values:"]}),"\n",(0,r.jsx)(n,{data:Y}),"\n",(0,r.jsx)(t.h2,{id:"with-custom-icons",children:"With custom icons"}),"\n",(0,r.jsxs)(t.p,{children:["You can replace the step icon by setting ",(0,r.jsx)(t.code,{children:"icon"})," prop on ",(0,r.jsx)(t.code,{children:"Stepper.Step"})," component.\nTo change completed check icon set ",(0,r.jsx)(t.code,{children:"completedIcon"})," on ",(0,r.jsx)(t.code,{children:"Stepper"})," component.\nYou can use any React node as an icon: component, string, number:"]}),"\n",(0,r.jsx)(n,{data:ee}),"\n",(0,r.jsxs)(t.p,{children:["You can use ",(0,r.jsx)(t.code,{children:"Stepper"})," with icons only. Note that in this case, you will have to\nset ",(0,r.jsx)(t.code,{children:"aria-label"})," or ",(0,r.jsx)(t.code,{children:"title"})," on ",(0,r.jsx)(t.code,{children:"Stepper.Step"})," component to make it accessible:"]}),"\n",(0,r.jsx)(n,{data:en}),"\n",(0,r.jsx)(t.p,{children:"You can also change the completed icon for each step, for example, to indicate error state:"}),"\n",(0,r.jsx)(n,{data:ec}),"\n",(0,r.jsx)(t.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,r.jsx)(n,{data:ea}),"\n",(0,r.jsx)(t.h2,{id:"icon-position",children:"Icon position"}),"\n",(0,r.jsxs)(t.p,{children:["To change step icon and body arrangement, set ",(0,r.jsx)(t.code,{children:'iconPosition="right"'}),":"]}),"\n",(0,r.jsx)(n,{data:ei}),"\n",(0,r.jsx)(t.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,r.jsxs)(t.p,{children:["To indicate loading state set ",(0,r.jsx)(t.code,{children:"loading"})," prop on Step component, ",(0,r.jsx)(t.code,{children:"Loader"})," will replace step icon.\nYou can configure the default loader in the ",(0,r.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"}),"."]}),"\n",(0,r.jsx)(n,{data:ed}),"\n",(0,r.jsx)(c,{component:"Stepper"}),"\n",(0,r.jsx)(n,{data:eg}),"\n",(0,r.jsx)(t.p,{children:"Examples of styles customization with Styles API:"}),"\n",(0,r.jsx)(n,{data:eM}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(n,{data:eA}),"\n",(0,r.jsx)(t.h2,{id:"get-step-ref",children:"Get step ref"}),"\n",(0,r.jsx)(t.p,{children:"You can get refs of step button and stepper root element (div):"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useRef } from 'react';\nimport { Stepper } from '@mantine/core';\n\nfunction MyStepper() {\n  const firstStep = useRef<HTMLButtonElement>(null);\n  const stepper = useRef<HTMLDivElement>(null);\n\n  return (\n    <Stepper ref={stepper} active={0}>\n      <Stepper.Step label=\"First step\" ref={firstStep} />\n      <Stepper.Step label=\"Second step\" />\n    </Stepper>\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"wrap-stepperstep",children:"Wrap Stepper.Step"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Stepper"})," component relies on ",(0,r.jsx)(t.code,{children:"Stepper.Step"})," order. Wrapping ",(0,r.jsx)(t.code,{children:"Stepper.Step"})," is not supported,\nInstead you will need to use different approaches:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Stepper } from \'@mantine/core\';\n\n// This will not work, step children will not render\nfunction WillNotWork() {\n  return (\n    <Stepper.Step label="Nope" description="It will not work">\n      This part will not render\n    </Stepper.Step>\n  );\n}\n\n// Create a separate component for children\nfunction WillWork() {\n  return <div>This will work as expected!</div>;\n}\n\nfunction Demo() {\n  return (\n    <Stepper active={1}>\n      <Stepper.Step label="Regular step">First step</Stepper.Step>\n      {/* Wrapped Stepper.Step will not render children, do not do that */}\n      <WillNotWork />\n      <Stepper.Step label="Step with custom content">\n        <WillWork />\n      </Stepper.Step>\n      <Stepper.Step label="Regular step">Third step</Stepper.Step>\n    </Stepper>\n  );\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"<Stepper.Step />"})," components render button element, set ",(0,r.jsx)(t.code,{children:"aria-label"})," or ",(0,r.jsx)(t.code,{children:"title"})," props\nto make component visible for screen readers in case you do not specify ",(0,r.jsx)(t.code,{children:"label"})," or ",(0,r.jsx)(t.code,{children:"description"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'<Stepper.Step /> // -> not ok, empty labels for screen reader\n<Stepper.Step label="Step 1" description="Create an account" /> // -> ok\n<Stepper.Step aria-label="Create an account" /> // -> ok\n<Stepper.Step title="Create an account" /> // -> ok\n'})})]})}var eB=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(eG,Object.assign({},e,{children:(0,r.jsx)(eN,e)}))};function eD(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},43310:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("circle-check","IconCircleCheck",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}],["path",{d:"M9 12l2 2l4 -4",key:"svg-1"}]])},46112:function(e,t,n){"use strict";n.d(t,{v:function(){return H}});var r=n(67294),o=n(45763);let[c,p]=(0,o.R)("Stepper component was not found in tree");var a={root:"m-cbb4ea7e",steps:"m-aaf89d0b",separator:"m-2a371ac9",content:"m-78da155d",step:"m-cbb57068","step--horizontal":"m-f56b1e2c","step--vertical":"m-833edb7e",verticalSeparator:"m-6496b3f3",stepWrapper:"m-818e70b",stepIcon:"m-1959ad01",stepCompletedIcon:"m-a79331dc",stepBody:"m-1956aa2a",stepLabel:"m-12051f6c",stepDescription:"m-164eea74"},l=n(86610),i=n(56338),s=n(77015),d=n(38238),S=n(3154),m=n(30370),u=n(43440),h=n(40184),v=Object.defineProperty,f=Object.defineProperties,b=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,x=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&C(e,n,t[n]);if(y)for(var n of y(t))k.call(t,n)&&C(e,n,t[n]);return e},E=(e,t)=>f(e,b(t)),j=(e,t)=>{var n={};for(var r in e)g.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&y)for(var r of y(e))0>t.indexOf(r)&&k.call(e,r)&&(n[r]=e[r]);return n};let w=(e,t)=>"function"==typeof e?r.createElement(e,{step:t||0}):e,O={withIcon:!0,allowStepClick:!0,iconPosition:"left"},I=(0,S.d)((e,t)=>{let n=(0,m.w)("StepperStep",O,e),{classNames:o,className:c,style:a,styles:S,vars:v,step:f,state:b,color:y,icon:g,completedIcon:k,progressIcon:C,label:I,description:M,withIcon:P,iconSize:V,loading:z,allowStepClick:A,allowStepSelect:G,iconPosition:N,orientation:B}=n,D=j(n,["classNames","className","style","styles","vars","step","state","color","icon","completedIcon","progressIcon","label","description","withIcon","iconSize","loading","allowStepClick","allowStepSelect","iconPosition","orientation"]),Z=p(),F=(0,u.rZ)(),W={classNames:o,styles:S},_={"data-progress":"stepProgress"===b||void 0,"data-completed":"stepCompleted"===b||void 0};return r.createElement(l.k,E(x(x(E(x({},Z.getStyles("step",x({className:c,style:a,variant:Z.orientation},W))),{mod:{"icon-position":N||Z.iconPosition,"allow-click":A},ref:t}),_),D),{__vars:{"--step-color":y?(0,h.p)(y,F):void 0},tabIndex:A?0:-1}),P&&r.createElement("span",x({},Z.getStyles("stepWrapper",W)),r.createElement("span",x(x({},Z.getStyles("stepIcon",W)),_),r.createElement(i.u,{mounted:"stepCompleted"===b,transition:"pop",duration:200},e=>r.createElement("span",x({},Z.getStyles("stepCompletedIcon",x({style:e},W))),z?r.createElement(s.a,x({color:"var(--mantine-color-white)",size:"calc(var(--stepper-icon-size) / 2)"},Z.getStyles("stepLoader",W))):w(k,f)||r.createElement(d.n,{size:"60%"}))),"stepCompleted"!==b?z?r.createElement(s.a,E(x({},Z.getStyles("stepLoader",W)),{size:"calc(var(--stepper-icon-size) / 2)",color:y})):w(("stepCompleted"===b?null:"stepProgress"===b?C:g)||g,f):null),"vertical"===B&&r.createElement("span",E(x({},Z.getStyles("verticalSeparator",W)),{"data-active":"stepCompleted"===b||void 0}))),(I||M)&&r.createElement("span",E(x({},Z.getStyles("stepBody",W)),{"data-orientation":Z.orientation,"data-icon-position":N||Z.iconPosition}),I&&r.createElement("span",x({},Z.getStyles("stepLabel",W)),w(I,f)),M&&r.createElement("span",x({},Z.getStyles("stepDescription",W)),w(M,f))))});I.classes=a,I.displayName="@mantine/core/StepperStep";let M=()=>null;M.displayName="@mantine/core/StepperCompleted";var P=n(86109),V=n(81110),z=n(8586),A=n(48468),G=n(72622),N=Object.defineProperty,B=Object.defineProperties,D=Object.getOwnPropertyDescriptors,Z=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable,_=(e,t,n)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,L=(e,t)=>{for(var n in t||(t={}))F.call(t,n)&&_(e,n,t[n]);if(Z)for(var n of Z(t))W.call(t,n)&&_(e,n,t[n]);return e},T=(e,t)=>B(e,D(t)),R=(e,t)=>{var n={};for(var r in e)F.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&Z)for(var r of Z(e))0>t.indexOf(r)&&W.call(e,r)&&(n[r]=e[r]);return n};let U={orientation:"horizontal",iconPosition:"left",allowNextStepsSelect:!0,wrap:!0},Y=(0,z.Z)((e,{color:t,iconSize:n,size:r,contentPadding:o,radius:c})=>({root:{"--stepper-color":t?(0,h.p)(t,e):void 0,"--stepper-icon-size":void 0===n?(0,A.ap)(r,"stepper-icon-size"):(0,G.h)(n),"--stepper-content-padding":(0,A.bG)(o),"--stepper-radius":void 0===c?void 0:(0,A.H5)(c),"--stepper-fz":(0,A.yv)(r),"--stepper-spacing":(0,A.bG)(r)}})),H=(0,S.d)((e,t)=>{var n,o,p;let l=(0,m.w)("Stepper",U,e),{classNames:i,className:s,style:d,styles:S,unstyled:u,vars:h,children:v,onStepClick:f,active:b,icon:y,completedIcon:g,progressIcon:k,color:C,iconSize:x,contentPadding:E,orientation:j,iconPosition:w,size:O,radius:I,allowNextStepsSelect:z,wrap:A}=l,G=R(l,["classNames","className","style","styles","unstyled","vars","children","onStepClick","active","icon","completedIcon","progressIcon","color","iconSize","contentPadding","orientation","iconPosition","size","radius","allowNextStepsSelect","wrap"]),N=(0,P.y)({name:"Stepper",classes:a,props:l,className:s,style:d,classNames:i,styles:S,unstyled:u,vars:h,varsResolver:Y}),B=r.Children.toArray(v),D=B.filter(e=>e.type!==M),Z=B.find(e=>e.type===M),F=D.reduce((e,t,n)=>{let o=b===n?"stepProgress":b>n?"stepCompleted":"stepInactive",c="function"==typeof f&&("boolean"==typeof t.props.allowStepSelect?t.props.allowStepSelect:"stepCompleted"===o||z);return e.push((0,r.cloneElement)(t,{icon:t.props.icon||y||n+1,key:n,step:n,state:o,onClick:()=>c&&(null==f?void 0:f(n)),allowStepClick:c,completedIcon:t.props.completedIcon||g,progressIcon:t.props.progressIcon||k,color:t.props.color||C,iconSize:x,radius:I,iconPosition:t.props.iconPosition||w,orientation:j,unstyled:u})),"horizontal"===j&&n!==D.length-1&&e.push(r.createElement("div",T(L({},N("separator")),{"data-active":n<b||void 0,"data-orientation":j,key:`separator-${n}`}))),e},[]),W=null==(o=null==(n=D[b])?void 0:n.props)?void 0:o.children,_=null==(p=null==Z?void 0:Z.props)?void 0:p.children,H=b>D.length-1?_:W;return r.createElement(c,{value:{getStyles:N,orientation:j,iconPosition:w}},r.createElement(V.x,L(T(L({},N("root")),{ref:t,size:O}),G),r.createElement(V.x,T(L({},N("steps")),{mod:{orientation:j,"icon-position":w,wrap:A&&"vertical"!==j}}),F),H&&r.createElement("div",L({},N("content")),H)))});H.classes=a,H.displayName="@mantine/core/Stepper",H.Completed=M,H.Step=I}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=98063)}),_N_E=e.O()}]);