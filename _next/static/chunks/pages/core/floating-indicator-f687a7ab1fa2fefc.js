(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23926],{86589:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/floating-indicator",function(){return o(29547)}])},29547:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>p});var r=o(31085),n=o(71184),a=o(14041),s=o(33970),l=o(47108),c={root:"m_f1cded43",control:"m_f163915c",controlLabel:"m_848976f8",indicator:"m_13e0e64e"};let i=["React","Vue","Angular","Svelte"],d={type:"code",component:function(){let[e,t]=(0,a.useState)(null),[o,n]=(0,a.useState)({}),[d,m]=(0,a.useState)(0),u=e=>t=>{o[e]=t,n(o)},v=i.map((e,t)=>(0,r.jsx)(s.N,{className:c.control,ref:u(t),onClick:()=>m(t),mod:{active:d===t},children:(0,r.jsx)("span",{className:c.controlLabel,children:e})},e));return(0,r.jsxs)("div",{className:c.root,ref:t,children:[v,(0,r.jsx)(l.g,{target:o[d],parent:e,className:c.indicator})]})},centered:!0,defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import { FloatingIndicator, UnstyledButton } from '@mantine/core';
import classes from './Demo.module.css';

const data = ['React', 'Vue', 'Angular', 'Svelte'];

function Demo() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const [active, setActive] = useState(0);

  const setControlRef = (index: number) => (node: HTMLButtonElement) => {
    controlsRefs[index] = node;
    setControlsRefs(controlsRefs);
  };

  const controls = data.map((item, index) => (
    <UnstyledButton
      key={item}
      className={classes.control}
      ref={setControlRef(index)}
      onClick={() => setActive(index)}
      mod={{ active: active === index }}
    >
      <span className={classes.controlLabel}>{item}</span>
    </UnstyledButton>
  ));

  return (
    <div className={classes.root} ref={setRootRef}>
      {controls}

      <FloatingIndicator
        target={controlsRefs[active]}
        parent={rootRef}
        className={classes.indicator}
      />
    </div>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`.root {
  position: relative;
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-8));
  width: fit-content;
  border-radius: var(--mantine-radius-md);
  padding: 5px;
  border: 1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-4));
}

.control {
  padding: 7px 12px;
  line-height: 1;
  color: light-dark(var(--mantine-color-gray-7), var(--mantine-color-dark-2));
  border-radius: var(--mantine-radius-md);
  font-size: var(--mantine-font-size-sm);
  transition: color 100ms ease;
  font-weight: 500;

  @mixin hover {
    color: light-dark(var(--mantine-color-black), var(--mantine-color-white));
    background-color: light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-7));
  }

  &[data-active] {
    color: var(--mantine-color-white);
  }
}

.controlLabel {
  position: relative;
  z-index: 1;
}

.indicator {
  background-color: var(--mantine-primary-color-filled);
  border-radius: var(--mantine-radius-md);
}`}]};var m=o(20106),u=o(47345),v=o(85954),f=o(38215);let h=(0,v.P)(f.XZ.FloatingIndicator);function g(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,n.R)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"FloatingIndicator"})," is designed to highlight active element in a group.\nIt can be used to create custom segmented controls, tabs and other similar components."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"FloatingIndicator"})," renders an element over the ",(0,r.jsx)(t.code,{children:"target"})," element. To calculate the position it is\nrequired to pass ",(0,r.jsx)(t.code,{children:"parent"})," element which has a relative position."]}),"\n",(0,r.jsxs)(t.p,{children:["By default, ",(0,r.jsx)(t.code,{children:"FloatingIndicator"})," does not have any visible styles. You can use ",(0,r.jsx)(t.code,{children:"className"})," prop\nor ",(0,r.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"})," to apply styles."]}),"\n",(0,r.jsx)(o,{data:d}),"\n",(0,r.jsx)(t.h2,{id:"multiple-rows",children:"Multiple rows"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"FloatingIndicator"})," can be used to highlight active element in a group with multiple rows:"]}),"\n",(0,r.jsx)(o,{data:m.o}),"\n",(0,r.jsx)(t.h2,{id:"example-tabs",children:"Example: Tabs"}),"\n",(0,r.jsx)(o,{data:u.v})]})}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(h,{...e,children:(0,r.jsx)(g,{...e})})}},3257:(e,t,o)=>{"use strict";o.d(t,{A:()=>r});var r=(0,o(73366).A)("outline","arrow-down","IconArrowDown",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 13l-6 6",key:"svg-1"}],["path",{d:"M6 13l6 6",key:"svg-2"}]])},34310:(e,t,o)=>{"use strict";o.d(t,{A:()=>r});var r=(0,o(73366).A)("outline","arrow-down-left","IconArrowDownLeft",[["path",{d:"M17 7l-10 10",key:"svg-0"}],["path",{d:"M16 17l-9 0l0 -9",key:"svg-1"}]])},56265:(e,t,o)=>{"use strict";o.d(t,{A:()=>r});var r=(0,o(73366).A)("outline","arrow-down-right","IconArrowDownRight",[["path",{d:"M7 7l10 10",key:"svg-0"}],["path",{d:"M17 8l0 9l-9 0",key:"svg-1"}]])},41590:(e,t,o)=>{"use strict";o.d(t,{A:()=>r});var r=(0,o(73366).A)("outline","arrow-up","IconArrowUp",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 11l-6 -6",key:"svg-1"}],["path",{d:"M6 11l6 -6",key:"svg-2"}]])},75021:(e,t,o)=>{"use strict";o.d(t,{A:()=>r});var r=(0,o(73366).A)("outline","arrow-up-left","IconArrowUpLeft",[["path",{d:"M7 7l10 10",key:"svg-0"}],["path",{d:"M16 7l-9 0l0 9",key:"svg-1"}]])},94088:(e,t,o)=>{"use strict";o.d(t,{A:()=>r});var r=(0,o(73366).A)("outline","arrow-up-right","IconArrowUpRight",[["path",{d:"M17 7l-10 10",key:"svg-0"}],["path",{d:"M8 7l9 0l0 9",key:"svg-1"}]])},10670:(e,t,o)=>{"use strict";o.d(t,{A:()=>r});var r=(0,o(73366).A)("outline","circle","IconCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}]])},20106:(e,t,o)=>{"use strict";o.d(t,{o:()=>p});var r=o(31085),n=o(14041),a=o(75021),s=o(41590),l=o(94088),c=o(80502),i=o(10670),d=o(89689),m=o(34310),u=o(3257),v=o(56265),f=o(47108),h=o(33970),g={root:"m_59c14cf6",indicator:"m_f9a45e7b",controlsGroup:"m_378d0bd5",control:"m_cc1130c9"};let p={type:"code",component:function(){let[e,t]=(0,n.useState)(null),[o,p]=(0,n.useState)({}),[k,x]=(0,n.useState)("center"),b=e=>t=>{o[e]=t,p(o)};return(0,r.jsxs)("div",{className:g.root,dir:"ltr",ref:t,children:[(0,r.jsx)(f.g,{target:o[k],parent:e,className:g.indicator}),(0,r.jsxs)("div",{className:g.controlsGroup,children:[(0,r.jsx)(h.N,{className:g.control,onClick:()=>x("up-left"),ref:b("up-left"),mod:{active:"up-left"===k},children:(0,r.jsx)(a.A,{size:26,stroke:1.5})}),(0,r.jsx)(h.N,{className:g.control,onClick:()=>x("up"),ref:b("up"),mod:{active:"up"===k},children:(0,r.jsx)(s.A,{size:26,stroke:1.5})}),(0,r.jsx)(h.N,{className:g.control,onClick:()=>x("up-right"),ref:b("up-right"),mod:{active:"up-right"===k},children:(0,r.jsx)(l.A,{size:26,stroke:1.5})})]}),(0,r.jsxs)("div",{className:g.controlsGroup,children:[(0,r.jsx)(h.N,{className:g.control,onClick:()=>x("left"),ref:b("left"),mod:{active:"left"===k},children:(0,r.jsx)(c.A,{size:26,stroke:1.5})}),(0,r.jsx)(h.N,{className:g.control,onClick:()=>x("center"),ref:b("center"),mod:{active:"center"===k},children:(0,r.jsx)(i.A,{size:26,stroke:1.5})}),(0,r.jsx)(h.N,{className:g.control,onClick:()=>x("right"),ref:b("right"),mod:{active:"right"===k},children:(0,r.jsx)(d.A,{size:26,stroke:1.5})})]}),(0,r.jsxs)("div",{className:g.controlsGroup,children:[(0,r.jsx)(h.N,{className:g.control,onClick:()=>x("down-left"),ref:b("down-left"),mod:{active:"down-left"===k},children:(0,r.jsx)(m.A,{size:26,stroke:1.5})}),(0,r.jsx)(h.N,{className:g.control,onClick:()=>x("down"),ref:b("down"),mod:{active:"down"===k},children:(0,r.jsx)(u.A,{size:26,stroke:1.5})}),(0,r.jsx)(h.N,{className:g.control,onClick:()=>x("down-right"),ref:b("down-right"),mod:{active:"down-right"===k},children:(0,r.jsx)(v.A,{size:26,stroke:1.5})})]})]})},centered:!0,defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import {
  IconArrowDown,
  IconArrowDownLeft,
  IconArrowDownRight,
  IconArrowLeft,
  IconArrowRight,
  IconArrowUp,
  IconArrowUpLeft,
  IconArrowUpRight,
  IconCircle,
} from '@tabler/icons-react';
import { FloatingIndicator, UnstyledButton } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const [active, setActive] = useState('center');

  const setControlRef = (name: string) => (node: HTMLButtonElement) => {
    controlsRefs[name] = node;
    setControlsRefs(controlsRefs);
  };

  return (
    <div className={classes.root} dir="ltr" ref={setRootRef}>
      <FloatingIndicator
        target={controlsRefs[active]}
        parent={rootRef}
        className={classes.indicator}
      />

      <div className={classes.controlsGroup}>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('up-left')}
          ref={setControlRef('up-left')}
          mod={{ active: active === 'up-left' }}
        >
          <IconArrowUpLeft size={26} stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('up')}
          ref={setControlRef('up')}
          mod={{ active: active === 'up' }}
        >
          <IconArrowUp size={26} stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('up-right')}
          ref={setControlRef('up-right')}
          mod={{ active: active === 'up-right' }}
        >
          <IconArrowUpRight size={26} stroke={1.5} />
        </UnstyledButton>
      </div>
      <div className={classes.controlsGroup}>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('left')}
          ref={setControlRef('left')}
          mod={{ active: active === 'left' }}
        >
          <IconArrowLeft size={26} stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('center')}
          ref={setControlRef('center')}
          mod={{ active: active === 'center' }}
        >
          <IconCircle size={26} stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('right')}
          ref={setControlRef('right')}
          mod={{ active: active === 'right' }}
        >
          <IconArrowRight size={26} stroke={1.5} />
        </UnstyledButton>
      </div>
      <div className={classes.controlsGroup}>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('down-left')}
          ref={setControlRef('down-left')}
          mod={{ active: active === 'down-left' }}
        >
          <IconArrowDownLeft size={26} stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('down')}
          ref={setControlRef('down')}
          mod={{ active: active === 'down' }}
        >
          <IconArrowDown size={26} stroke={1.5} />
        </UnstyledButton>
        <UnstyledButton
          className={classes.control}
          onClick={() => setActive('down-right')}
          ref={setControlRef('down-right')}
          mod={{ active: active === 'down-right' }}
        >
          <IconArrowDownRight size={26} stroke={1.5} />
        </UnstyledButton>
      </div>
    </div>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`.root {
  position: relative;
  background-color: light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-8));
  width: fit-content;
  padding: var(--mantine-spacing-sm);
  border-radius: var(--mantine-radius-md);
}

.indicator {
  background-color: light-dark(var(--mantine-color-white), var(--mantine-color-dark-6));
  border-radius: var(--mantine-radius-md);
  box-shadow: var(--mantine-shadow-md);
  border: 1px solid light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-4));
}

.controlsGroup {
  display: flex;
}

.control {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: light-dark(var(--mantine-color-gray-6), var(--mantine-color-dark-2));
  border-radius: var(--mantine-radius-md);

  &[data-active] {
    color: light-dark(var(--mantine-color-black), var(--mantine-color-white));
  }

  @mixin hover {
    color: light-dark(var(--mantine-color-black), var(--mantine-color-white));
    background-color: light-dark(var(--mantine-color-gray-1), var(--mantine-color-dark-7));
  }

  & svg {
    display: block;
    position: relative;
    z-index: 1;
  }
}`}]}},47345:(e,t,o)=>{"use strict";o.d(t,{v:()=>c});var r=o(31085),n=o(14041),a=o(48336),s=o(47108),l={list:"m_590a4747",indicator:"m_8268e906",tab:"m_65f82fcc"};let c={type:"code",component:function(){let[e,t]=(0,n.useState)(null),[o,c]=(0,n.useState)("1"),[i,d]=(0,n.useState)({}),m=e=>t=>{i[e]=t,d(i)};return(0,r.jsxs)(a.t,{variant:"none",value:o,onChange:c,children:[(0,r.jsxs)(a.t.List,{ref:t,className:l.list,children:[(0,r.jsx)(a.t.Tab,{value:"1",ref:m("1"),className:l.tab,children:"First tab"}),(0,r.jsx)(a.t.Tab,{value:"2",ref:m("2"),className:l.tab,children:"Second tab"}),(0,r.jsx)(a.t.Tab,{value:"3",ref:m("3"),className:l.tab,children:"Third tab"}),(0,r.jsx)(s.g,{target:o?i[o]:null,parent:e,className:l.indicator})]}),(0,r.jsx)(a.t.Panel,{value:"1",children:"First tab content"}),(0,r.jsx)(a.t.Panel,{value:"2",children:"Second tab content"}),(0,r.jsx)(a.t.Panel,{value:"3",children:"Third tab content"})]})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import { FloatingIndicator, Tabs } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string | null>('1');
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };

  return (
    <Tabs variant="none" value={value} onChange={setValue}>
      <Tabs.List ref={setRootRef} className={classes.list}>
        <Tabs.Tab value="1" ref={setControlRef('1')} className={classes.tab}>
          First tab
        </Tabs.Tab>
        <Tabs.Tab value="2" ref={setControlRef('2')} className={classes.tab}>
          Second tab
        </Tabs.Tab>
        <Tabs.Tab value="3" ref={setControlRef('3')} className={classes.tab}>
          Third tab
        </Tabs.Tab>

        <FloatingIndicator
          target={value ? controlsRefs[value] : null}
          parent={rootRef}
          className={classes.indicator}
        />
      </Tabs.List>

      <Tabs.Panel value="1">First tab content</Tabs.Panel>
      <Tabs.Panel value="2">Second tab content</Tabs.Panel>
      <Tabs.Panel value="3">Third tab content</Tabs.Panel>
    </Tabs>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.list {
  position: relative;
  margin-bottom: var(--mantine-spacing-md);
}

.indicator {
  background-color: var(--mantine-color-white);
  border-radius: var(--mantine-radius-md);
  border: 1px solid var(--mantine-color-gray-2);
  box-shadow: var(--mantine-shadow-sm);

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
    border-color: var(--mantine-color-dark-4);
  }
}

.tab {
  z-index: 1;
  font-weight: 500;
  transition: color 100ms ease;
  color: var(--mantine-color-gray-7);

  &[data-active] {
    color: var(--mantine-color-black);
  }

  @mixin dark {
    color: var(--mantine-color-dark-1);

    &[data-active] {
      color: var(--mantine-color-white);
    }
  }
}
`,language:"scss"}]}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(86589)),_N_E=e.O()}]);