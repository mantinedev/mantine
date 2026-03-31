(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,617699,e=>{"use strict";var t=e.i(191788),p=e.i(171481);let r=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"}))]]),n=t.forwardRef((e,n)=>t.createElement(p.default,{ref:n,...e,weights:r}));n.displayName="CheckCircleIcon",e.s(["CheckCircleIcon",0,n],617699)},206920,e=>{"use strict";var t=e.i(648863),p=e.i(232471),r=e.i(391398);function n(e){return(0,r.jsx)(p.Box,{style:{height:60,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:500,fontSize:"var(--mantine-font-size-lg)"},...e})}var c=e.i(191788),a=e.i(485108),l=e.i(725695),i=e.i(702992);let o={type:"code",component:function(){let[e,t]=(0,c.useState)(1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.Stepper,{active:e,onStepClick:t,children:[(0,r.jsx)(i.Stepper.Step,{label:"First step",description:"Create an account",children:(0,r.jsx)(n,{children:"Step 1 content: Create an account"})}),(0,r.jsx)(i.Stepper.Step,{label:"Second step",description:"Verify email",children:(0,r.jsx)(n,{children:"Step 2 content: Verify email"})}),(0,r.jsx)(i.Stepper.Step,{label:"Final step",description:"Get full access",children:(0,r.jsx)(n,{children:"Step 3 content: Get full access"})}),(0,r.jsx)(i.Stepper.Completed,{children:(0,r.jsx)(n,{children:"Completed, click back button to get to previous step"})})]}),(0,r.jsxs)(l.Group,{justify:"center",mt:"xl",children:[(0,r.jsx)(a.Button,{variant:"default",onClick:()=>t(e=>e>0?e-1:e),children:"Back"}),(0,r.jsx)(a.Button,{onClick:()=>t(e=>e<3?e+1:e),children:"Next step"})]})]})},code:`
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
`},s={type:"configurator",component:function(e){return(0,r.jsxs)(i.Stepper,{...e,active:1,children:[(0,r.jsx)(i.Stepper.Step,{label:"Step 1",description:"Create an account"}),(0,r.jsx)(i.Stepper.Step,{label:"Step 2",description:"Verify email"})]})},code:`
import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper{{props}} active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
    </Stepper>
  );
}
`,centered:!0,maxWidth:"100%",controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"}]};var S=e.i(617699),u=e.i(171481);let d=new Map([["bold",c.createElement(c.Fragment,null,c.createElement("path",{d:"M230.66,86l-96-64a12,12,0,0,0-13.32,0l-96,64A12,12,0,0,0,20,96V200a20,20,0,0,0,20,20H216a20,20,0,0,0,20-20V96A12,12,0,0,0,230.66,86ZM89.81,152,44,184.31v-65ZM114.36,164h27.28L187,196H69.05ZM166.19,152,212,119.29v65ZM128,46.42l74.86,49.91L141.61,140H114.39L53.14,96.33Z"}))],["duotone",c.createElement(c.Fragment,null,c.createElement("path",{d:"M224,96l-78.55,56h-34.9L32,96l96-64Z",opacity:"0.2"}),c.createElement("path",{d:"M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM96.72,152,40,192V111.53Zm16.37,8h29.82l56.63,40H56.46Zm46.19-8L216,111.53V192ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78Z"}))],["fill",c.createElement(c.Fragment,null,c.createElement("path",{d:"M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM96.72,152,40,192V111.53Zm16.37,8h29.82l56.63,40H56.46Zm46.19-8L216,111.53V192Z"}))],["light",c.createElement(c.Fragment,null,c.createElement("path",{d:"M227.33,91l-96-64a6,6,0,0,0-6.66,0l-96,64A6,6,0,0,0,26,96V200a14,14,0,0,0,14,14H216a14,14,0,0,0,14-14V96A6,6,0,0,0,227.33,91ZM100.18,152,38,195.9V107.65Zm12.27,6h31.1l62.29,44H50.16Zm43.37-6L218,107.65V195.9ZM128,39.21l85.43,57L143.53,146H112.47L42.57,96.17Z"}))],["regular",c.createElement(c.Fragment,null,c.createElement("path",{d:"M228.44,89.34l-96-64a8,8,0,0,0-8.88,0l-96,64A8,8,0,0,0,24,96V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V96A8,8,0,0,0,228.44,89.34ZM96.72,152,40,192V111.53Zm16.37,8h29.82l56.63,40H56.46Zm46.19-8L216,111.53V192ZM128,41.61l81.91,54.61-67,47.78H113.11l-67-47.78Z"}))],["thin",c.createElement(c.Fragment,null,c.createElement("path",{d:"M226.22,92.67l-96-64a4,4,0,0,0-4.44,0l-96,64A4,4,0,0,0,28,96V200a12,12,0,0,0,12,12H216a12,12,0,0,0,12-12V96A4,4,0,0,0,226.22,92.67ZM103.63,152,36,199.76v-96Zm8.19,4h32.36l68,48H43.86Zm40.55-4L220,103.76v96ZM128,36.81,217,96.11,144.17,148H111.83L39.05,96.11Z"}))]]),m=c.forwardRef((e,t)=>c.createElement(u.default,{ref:t,...e,weights:d}));m.displayName="EnvelopeOpenIcon";let h=new Map([["bold",c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,36H48A20,20,0,0,0,28,56v56c0,54.29,26.32,87.22,48.4,105.29,23.71,19.39,47.44,26,48.44,26.29a12.1,12.1,0,0,0,6.32,0c1-.28,24.73-6.9,48.44-26.29,22.08-18.07,48.4-51,48.4-105.29V56A20,20,0,0,0,208,36Zm-4,76c0,35.71-13.09,64.69-38.91,86.15A126.28,126.28,0,0,1,128,219.38a126.14,126.14,0,0,1-37.09-21.23C65.09,176.69,52,147.71,52,112V60H204ZM79.51,144.49a12,12,0,1,1,17-17L112,143l47.51-47.52a12,12,0,0,1,17,17l-56,56a12,12,0,0,1-17,0Z"}))],["duotone",c.createElement(c.Fragment,null,c.createElement("path",{d:"M216,56v56c0,96-88,120-88,120S40,208,40,112V56a8,8,0,0,1,8-8H208A8,8,0,0,1,216,56Z",opacity:"0.2"}),c.createElement("path",{d:"M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"}))],["fill",c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm-34.32,69.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"}))],["light",c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,42H48A14,14,0,0,0,34,56v56c0,51.94,25.12,83.4,46.2,100.64,22.73,18.6,45.27,24.89,46.22,25.15a6,6,0,0,0,3.16,0c.95-.26,23.49-6.55,46.22-25.15C196.88,195.4,222,163.94,222,112V56A14,14,0,0,0,208,42Zm2,70c0,37.76-13.94,68.39-41.44,91.06A131.17,131.17,0,0,1,128,225.72a130.94,130.94,0,0,1-40.56-22.66C59.94,180.39,46,149.76,46,112V56a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2ZM172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76Z"}))],["regular",c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,40H48A16,16,0,0,0,32,56v56c0,52.72,25.52,84.67,46.93,102.19,23.06,18.86,46,25.26,47,25.53a8,8,0,0,0,4.2,0c1-.27,23.91-6.67,47-25.53C198.48,196.67,224,164.72,224,112V56A16,16,0,0,0,208,40Zm0,72c0,37.07-13.66,67.16-40.6,89.42A129.3,129.3,0,0,1,128,223.62a128.25,128.25,0,0,1-38.92-21.81C61.82,179.51,48,149.3,48,112l0-56,160,0ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"}))],["thin",c.createElement(c.Fragment,null,c.createElement("path",{d:"M208,44H48A12,12,0,0,0,36,56v56c0,51.16,24.73,82.12,45.47,99.1,22.4,18.32,44.55,24.5,45.48,24.76a4,4,0,0,0,2.1,0c.93-.26,23.08-6.44,45.48-24.76,20.74-17,45.47-47.94,45.47-99.1V56A12,12,0,0,0,208,44Zm4,68c0,38.44-14.23,69.63-42.29,92.71A132.45,132.45,0,0,1,128,227.82a132.23,132.23,0,0,1-41.71-23.11C58.23,181.63,44,150.44,44,112V56a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4Zm-41.17-10.83a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17Z"}))]]),f=c.forwardRef((e,t)=>c.createElement(u.default,{ref:t,...e,weights:h}));f.displayName="ShieldCheckIcon";let C=new Map([["bold",c.createElement(c.Fragment,null,c.createElement("path",{d:"M152.5,156.54a72,72,0,1,0-89,0,124,124,0,0,0-48.69,35.74,12,12,0,0,0,18.38,15.44C46.88,191.42,71,172,108,172s61.12,19.42,74.81,35.72a12,12,0,1,0,18.38-15.44A123.89,123.89,0,0,0,152.5,156.54ZM60,100a48,48,0,1,1,48,48A48.05,48.05,0,0,1,60,100Zm192.49,36.49-32,32a12,12,0,0,1-17,0l-16-16a12,12,0,0,1,17-17L212,143l23.51-23.52a12,12,0,1,1,17,17Z"}))],["duotone",c.createElement(c.Fragment,null,c.createElement("path",{d:"M168,100a60,60,0,1,1-60-60A60,60,0,0,1,168,100Z",opacity:"0.2"}),c.createElement("path",{d:"M144,157.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17a8,8,0,0,0,12.25,10.3C50.25,181.19,77.91,168,108,168s57.75,13.19,77.87,37.15a8,8,0,0,0,12.25-10.3C183.18,177.07,164.6,164.44,144,157.68ZM56,100a52,52,0,1,1,52,52A52.06,52.06,0,0,1,56,100Zm197.66,33.66-32,32a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,11.32-11.32L216,148.69l26.34-26.35a8,8,0,0,1,11.32,11.32Z"}))],["fill",c.createElement(c.Fragment,null,c.createElement("path",{d:"M253.66,133.66l-32,32a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,11.32-11.32L216,148.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM144,157.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17A8,8,0,0,0,24,208H192a8,8,0,0,0,6.13-13.15C183.18,177.07,164.6,164.44,144,157.68Z"}))],["light",c.createElement(c.Fragment,null,c.createElement("path",{d:"M139,158.25a66,66,0,1,0-62,0c-22,6.23-41.88,19.16-57.61,37.89a6,6,0,0,0,9.18,7.72C49.11,179.44,77.31,166,108,166s58.9,13.44,79.41,37.86a6,6,0,1,0,9.18-7.72C180.86,177.41,161,164.48,139,158.25ZM54,100a54,54,0,1,1,54,54A54.06,54.06,0,0,1,54,100Zm198.24,32.24-32,32a6,6,0,0,1-8.48,0l-16-16a6,6,0,0,1,8.48-8.48L216,151.51l27.76-27.75a6,6,0,1,1,8.48,8.48Z"}))],["regular",c.createElement(c.Fragment,null,c.createElement("path",{d:"M144,157.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17a8,8,0,0,0,12.25,10.3C50.25,181.19,77.91,168,108,168s57.75,13.19,77.87,37.15a8,8,0,0,0,12.25-10.3C183.18,177.07,164.6,164.44,144,157.68ZM56,100a52,52,0,1,1,52,52A52.06,52.06,0,0,1,56,100Zm197.66,33.66-32,32a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,11.32-11.32L216,148.69l26.34-26.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",c.createElement(c.Fragment,null,c.createElement("path",{d:"M133.17,158.84a64,64,0,1,0-50.34,0c-23.76,5.46-45.18,18.69-61.89,38.59a4,4,0,1,0,6.12,5.14C48,177.7,76.71,164,108,164s60,13.7,80.94,38.57a4,4,0,0,0,6.12-5.14C178.35,177.53,156.93,164.3,133.17,158.84ZM52,100a56,56,0,1,1,56,56A56.06,56.06,0,0,1,52,100Zm198.83,30.83-32,32a4,4,0,0,1-5.66,0l-16-16a4,4,0,0,1,5.66-5.66L216,154.34l29.17-29.17a4,4,0,1,1,5.66,5.66Z"}))]]),x=c.forwardRef((e,t)=>c.createElement(u.default,{ref:t,...e,weights:C}));x.displayName="UserCheckIcon";let v={type:"code",component:function(){let[e,t]=(0,c.useState)(1);return(0,r.jsxs)(i.Stepper,{active:e,onStepClick:t,completedIcon:(0,r.jsx)(S.CheckCircleIcon,{size:18}),children:[(0,r.jsx)(i.Stepper.Step,{icon:(0,r.jsx)(x,{size:18}),label:"Step 1",description:"Create an account"}),(0,r.jsx)(i.Stepper.Step,{icon:(0,r.jsx)(m,{size:18}),label:"Step 2",description:"Verify email"}),(0,r.jsx)(i.Stepper.Step,{icon:(0,r.jsx)(f,{size:18}),label:"Step 3",description:"Get full access"})]})},code:`
import { useState } from 'react';
import { UserCheckIcon, EnvelopeOpenIcon, ShieldCheckIcon, CheckCircleIcon } from '@phosphor-icons/react';
import { Stepper } from '@mantine/core';

function Demo() {
  const [active, setActive] = useState(1);

  return (
    <Stepper
      active={active}
      onStepClick={setActive}
      completedIcon={<CheckCircleIcon size={18} />}
    >
      <Stepper.Step
        icon={<UserCheckIcon size={18} />}
        label="Step 1"
        description="Create an account"
      />
      <Stepper.Step
        icon={<EnvelopeOpenIcon size={18} />}
        label="Step 2"
        description="Verify email"
      />
      <Stepper.Step
        icon={<ShieldCheckIcon size={18} />}
        label="Step 3"
        description="Get full access"
      />
    </Stepper>
  );
}
`},b={type:"configurator",component:function(e){return(0,r.jsxs)(i.Stepper,{...e,active:1,children:[(0,r.jsx)(i.Stepper.Step,{label:"Step 1",description:"Create an account"}),(0,r.jsx)(i.Stepper.Step,{label:"Step 2",description:"Verify email"})]})},code:`
import { Stepper } from '@mantine/core';

function Demo() {
  return (
    <Stepper{{props}} active={1}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step label="Step 2" description="Verify email" />
    </Stepper>
  );
}
`,controls:[{prop:"iconSize",type:"number",initialValue:42,libraryValue:"__",min:32,max:62,step:5}]},j={type:"code",component:function(){let[e,t]=(0,c.useState)(0);return(0,r.jsxs)(i.Stepper,{active:e,onStepClick:t,children:[(0,r.jsx)(i.Stepper.Step,{icon:(0,r.jsx)(x,{size:18})}),(0,r.jsx)(i.Stepper.Step,{icon:(0,r.jsx)(m,{size:18})}),(0,r.jsx)(i.Stepper.Step,{icon:(0,r.jsx)(f,{size:18})})]})},code:`
import { useState } from 'react';
import { Stepper } from '@mantine/core';
import { UserCheckIcon, EnvelopeOpenIcon, ShieldCheckIcon } from '@phosphor-icons/react';

function Demo() {
  const [active, setActive] = useState(0);

  return (
    <Stepper active={active} onStepClick={setActive}>
      <Stepper.Step icon={<UserCheckIcon size={18} />} />
      <Stepper.Step icon={<EnvelopeOpenIcon size={18} />} />
      <Stepper.Step icon={<ShieldCheckIcon size={18} />} />
    </Stepper>
  );
}
`},g={type:"code",component:function(){let[e,t]=(0,c.useState)(1);return(0,r.jsxs)(i.Stepper,{active:e,onStepClick:t,orientation:"vertical",children:[(0,r.jsx)(i.Stepper.Step,{label:"Step 1",description:"Create an account"}),(0,r.jsx)(i.Stepper.Step,{label:"Step 2",description:"Verify email"}),(0,r.jsx)(i.Stepper.Step,{label:"Step 3",description:"Get full access"})]})},code:`
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
`},y={type:"code",component:function(){let[e,t]=(0,c.useState)(1);return(0,r.jsxs)(i.Stepper,{active:e,onStepClick:t,iconPosition:"right",children:[(0,r.jsx)(i.Stepper.Step,{label:"Step 1",description:"Create an account"}),(0,r.jsx)(i.Stepper.Step,{label:"Step 2",description:"Verify email"}),(0,r.jsx)(i.Stepper.Step,{label:"Step 3",description:"Get full access"})]})},code:`
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
`},A={type:"code",component:function(){return(0,r.jsxs)(i.Stepper,{active:1,children:[(0,r.jsx)(i.Stepper.Step,{label:"Step 1",description:"Create an account"}),(0,r.jsx)(i.Stepper.Step,{label:"Step 2",description:"Verify email",loading:!0}),(0,r.jsx)(i.Stepper.Step,{label:"Step 3",description:"Get full access"})]})},code:`
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
`};var k=e.i(299593);let Z={type:"code",component:function(){return(0,r.jsxs)(i.Stepper,{active:2,children:[(0,r.jsx)(i.Stepper.Step,{label:"Step 1",description:"Create an account"}),(0,r.jsx)(i.Stepper.Step,{label:"Step 2",description:"Verify email",color:"red",completedIcon:(0,r.jsx)(k.XCircleIcon,{size:20})}),(0,r.jsx)(i.Stepper.Step,{label:"Step 3",description:"Get full access"})]})},code:`
import { Stepper } from '@mantine/core';
import { XCircleIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <Stepper active={2}>
      <Stepper.Step label="Step 1" description="Create an account" />
      <Stepper.Step
        label="Step 2"
        description="Verify email"
        color="red"
        completedIcon={<XCircleIcon size={20} />}
      />
      <Stepper.Step label="Step 3" description="Get full access" />
    </Stepper>
  );
}
`};var V={separator:"m_24b8a321",stepIcon:"m_ced9b9a9",step:"m_f1461110"};let M={type:"code",component:function(){let[e,t]=(0,c.useState)(1);return(0,r.jsxs)(i.Stepper,{classNames:V,active:e,onStepClick:t,children:[(0,r.jsx)(i.Stepper.Step,{label:"Step 1",description:"Create an account"}),(0,r.jsx)(i.Stepper.Step,{label:"Step 2",description:"Verify email"}),(0,r.jsx)(i.Stepper.Step,{label:"Step 3",description:"Get full access"})]})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}]};function E(e){return(0,r.jsx)(i.Stepper,{styles:{stepBody:{display:"none"},step:{padding:0},stepIcon:{borderWidth:3},separator:{marginLeft:-2,marginRight:-2,height:6}},...e})}let B={type:"code",component:function(){let[e,t]=(0,c.useState)(1);return(0,r.jsxs)(E,{active:e,onStepClick:t,children:[(0,r.jsx)(i.Stepper.Step,{label:"Step 1",description:"Create an account"}),(0,r.jsx)(i.Stepper.Step,{label:"Step 2",description:"Verify email"}),(0,r.jsx)(i.Stepper.Step,{label:"Step 3",description:"Get full access"})]})},code:`
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
`},F={type:"code",component:function(){let[e,t]=(0,c.useState)(1),[p,o]=(0,c.useState)(e),s=e=>{e>3||e<0||(t(e),o(t=>Math.max(t,e)))},S=t=>p>=t&&e!==t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.Stepper,{active:e,onStepClick:t,children:[(0,r.jsx)(i.Stepper.Step,{label:"First step",description:"Create an account",allowStepSelect:S(0),children:(0,r.jsx)(n,{children:"Step 1 content: Create an account"})}),(0,r.jsx)(i.Stepper.Step,{label:"Second step",description:"Verify email",allowStepSelect:S(1),children:(0,r.jsx)(n,{children:"Step 2 content: Verify email"})}),(0,r.jsx)(i.Stepper.Step,{label:"Final step",description:"Get full access",allowStepSelect:S(2),children:(0,r.jsx)(n,{children:"Step 3 content: Get full access"})}),(0,r.jsx)(i.Stepper.Completed,{children:(0,r.jsx)(n,{children:"Completed, click back button to get to previous step"})})]}),(0,r.jsxs)(l.Group,{justify:"center",mt:"xl",children:[(0,r.jsx)(a.Button,{variant:"default",onClick:()=>s(e-1),children:"Back"}),(0,r.jsx)(a.Button,{onClick:()=>s(e+1),children:"Next step"})]})]})},code:`
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
`},G={type:"code",component:function(){let[e,t]=(0,c.useState)(1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.Stepper,{active:e,onStepClick:t,allowNextStepsSelect:!1,children:[(0,r.jsx)(i.Stepper.Step,{label:"First step",description:"Create an account",children:(0,r.jsx)(n,{children:"Step 1 content: Create an account"})}),(0,r.jsx)(i.Stepper.Step,{label:"Second step",description:"Verify email",children:(0,r.jsx)(n,{children:"Step 2 content: Verify email"})}),(0,r.jsx)(i.Stepper.Step,{label:"Final step",description:"Get full access",children:(0,r.jsx)(n,{children:"Step 3 content: Get full access"})}),(0,r.jsx)(i.Stepper.Completed,{children:(0,r.jsx)(n,{children:"Completed, click back button to get to previous step"})})]}),(0,r.jsxs)(l.Group,{justify:"center",mt:"xl",children:[(0,r.jsx)(a.Button,{variant:"default",onClick:()=>t(e=>e>0?e-1:e),children:"Back"}),(0,r.jsx)(a.Button,{onClick:()=>t(e=>e<3?e+1:e),children:"Next step"})]})]})},code:`
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
`};var I=e.i(430756);let L=`
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
`,w={type:"styles-api",centered:!0,maxWidth:"100%",data:I.StepperStylesApi,component:function(e){let[t,p]=(0,c.useState)(1);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i.Stepper,{active:t,onStepClick:p,...e,children:[(0,r.jsx)(i.Stepper.Step,{label:"First step",description:"Create an account",loading:!0,children:(0,r.jsx)(n,{children:"Step 1 content: Create an account"})}),(0,r.jsx)(i.Stepper.Step,{label:"Second step",description:"Verify email",children:(0,r.jsx)(n,{children:"Step 2 content: Verify email"})}),(0,r.jsx)(i.Stepper.Completed,{children:(0,r.jsx)(n,{children:"Completed, click back button to get to previous step"})})]}),(0,r.jsxs)(l.Group,{justify:"center",mt:"xl",children:[(0,r.jsx)(a.Button,{variant:"default",onClick:()=>p(e=>e>0?e-1:e),children:"Back"}),(0,r.jsx)(a.Button,{onClick:()=>p(e=>e<2?e+1:e),children:"Next step"})]})]})},code:L};var H=(0,t.__exportAll)({allowNextStepsSelect:()=>G,allowStepSelect:()=>F,configurator:()=>s,iconPosition:()=>y,iconSizeConfigurator:()=>b,icons:()=>v,iconsOnly:()=>j,loading:()=>A,orientation:()=>g,stepColor:()=>Z,stylesApi:()=>w,stylesApi2:()=>B,stylesApi3:()=>M,usage:()=>o});e.s(["StepperDemos",0,H],206920)}]);