(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[23926],{1798:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},9195:(e,t,o)=>{"use strict";o.d(t,{o:()=>f});var a=o(6029),s=o(55729),r=o(66764),n=o(97767),l=o(91173),i=o(24583),c=o(54607),d=o(88992),m=o(22551),v=o(67872),u=o(21936),h=o(71174),g=o(17976),p={root:"m_59c14cf6",indicator:"m_f9a45e7b",controlsGroup:"m_378d0bd5",control:"m_cc1130c9"};let f={type:"code",component:function(){let[e,t]=(0,s.useState)(null),[o,f]=(0,s.useState)({}),[k,y]=(0,s.useState)("center"),x=e=>t=>{o[e]=t,f(o)};return(0,a.jsxs)("div",{className:p.root,dir:"ltr",ref:t,children:[(0,a.jsx)(h.g,{target:o[k],parent:e,className:p.indicator}),(0,a.jsxs)("div",{className:p.controlsGroup,children:[(0,a.jsx)(g.N,{className:p.control,onClick:()=>y("up-left"),ref:x("up-left"),mod:{active:"up-left"===k},children:(0,a.jsx)(r.A,{size:26,stroke:1.5})}),(0,a.jsx)(g.N,{className:p.control,onClick:()=>y("up"),ref:x("up"),mod:{active:"up"===k},children:(0,a.jsx)(n.A,{size:26,stroke:1.5})}),(0,a.jsx)(g.N,{className:p.control,onClick:()=>y("up-right"),ref:x("up-right"),mod:{active:"up-right"===k},children:(0,a.jsx)(l.A,{size:26,stroke:1.5})})]}),(0,a.jsxs)("div",{className:p.controlsGroup,children:[(0,a.jsx)(g.N,{className:p.control,onClick:()=>y("left"),ref:x("left"),mod:{active:"left"===k},children:(0,a.jsx)(i.A,{size:26,stroke:1.5})}),(0,a.jsx)(g.N,{className:p.control,onClick:()=>y("center"),ref:x("center"),mod:{active:"center"===k},children:(0,a.jsx)(c.A,{size:26,stroke:1.5})}),(0,a.jsx)(g.N,{className:p.control,onClick:()=>y("right"),ref:x("right"),mod:{active:"right"===k},children:(0,a.jsx)(d.A,{size:26,stroke:1.5})})]}),(0,a.jsxs)("div",{className:p.controlsGroup,children:[(0,a.jsx)(g.N,{className:p.control,onClick:()=>y("down-left"),ref:x("down-left"),mod:{active:"down-left"===k},children:(0,a.jsx)(m.A,{size:26,stroke:1.5})}),(0,a.jsx)(g.N,{className:p.control,onClick:()=>y("down"),ref:x("down"),mod:{active:"down"===k},children:(0,a.jsx)(v.A,{size:26,stroke:1.5})}),(0,a.jsx)(g.N,{className:p.control,onClick:()=>y("down-right"),ref:x("down-right"),mod:{active:"down-right"===k},children:(0,a.jsx)(u.A,{size:26,stroke:1.5})})]})]})},centered:!0,defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
}`}]}},21936:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","arrow-down-right","ArrowDownRight",[["path",{d:"M7 7l10 10",key:"svg-0"}],["path",{d:"M17 8l0 9l-9 0",key:"svg-1"}]])},22551:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","arrow-down-left","ArrowDownLeft",[["path",{d:"M17 7l-10 10",key:"svg-0"}],["path",{d:"M16 17l-9 0l0 -9",key:"svg-1"}]])},24583:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},42757:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/floating-indicator",function(){return o(52698)}])},52698:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>f});var a=o(6029),s=o(16285),r=o(55729),n=o(17976),l=o(71174),i={root:"m_f1cded43",control:"m_f163915c",controlLabel:"m_848976f8",indicator:"m_13e0e64e"};let c=["React","Vue","Angular","Svelte"],d={type:"code",component:function(){let[e,t]=(0,r.useState)(null),[o,s]=(0,r.useState)({}),[d,m]=(0,r.useState)(0),v=c.map((e,t)=>(0,a.jsx)(n.N,{className:i.control,ref:e=>{o[t]=e,s(o)},onClick:()=>m(t),mod:{active:d===t},children:(0,a.jsx)("span",{className:i.controlLabel,children:e})},e));return(0,a.jsxs)("div",{className:i.root,ref:t,children:[v,(0,a.jsx)(l.g,{target:o[d],parent:e,className:i.indicator})]})},centered:!0,defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
}`}]};var m=o(9195),v=o(53167),u=o(38547),h=o(5262);let g=(0,u.P)(h.XZ.FloatingIndicator);function p(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,s.R)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"FloatingIndicator"})," is designed to highlight active element in a group.\nIt can be used to create custom segmented controls, tabs and other similar components."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"FloatingIndicator"})," renders an element over the ",(0,a.jsx)(t.code,{children:"target"})," element. To calculate the position it is\nrequired to pass ",(0,a.jsx)(t.code,{children:"parent"})," element which has a relative position."]}),"\n",(0,a.jsxs)(t.p,{children:["By default, ",(0,a.jsx)(t.code,{children:"FloatingIndicator"})," does not have any visible styles. You can use ",(0,a.jsx)(t.code,{children:"className"})," prop\nor ",(0,a.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"})," to apply styles."]}),"\n",(0,a.jsx)(o,{data:d}),"\n",(0,a.jsx)(t.h2,{id:"multiple-rows",children:"Multiple rows"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"FloatingIndicator"})," can be used to highlight active element in a group with multiple rows:"]}),"\n",(0,a.jsx)(o,{data:m.o}),"\n",(0,a.jsx)(t.h2,{id:"example-tabs",children:"Example: Tabs"}),"\n",(0,a.jsx)(o,{data:v.v})]})}function f(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(g,{...e,children:(0,a.jsx)(p,{...e})})}},53167:(e,t,o)=>{"use strict";o.d(t,{v:()=>i});var a=o(6029),s=o(55729),r=o(59117),n=o(71174),l={list:"m_590a4747",indicator:"m_8268e906",tab:"m_65f82fcc"};let i={type:"code",component:function(){let[e,t]=(0,s.useState)(null),[o,i]=(0,s.useState)("1"),[c,d]=(0,s.useState)({}),m=e=>t=>{c[e]=t,d(c)};return(0,a.jsxs)(r.t,{variant:"none",value:o,onChange:i,children:[(0,a.jsxs)(r.t.List,{ref:t,className:l.list,children:[(0,a.jsx)(r.t.Tab,{value:"1",ref:m("1"),className:l.tab,children:"First tab"}),(0,a.jsx)(r.t.Tab,{value:"2",ref:m("2"),className:l.tab,children:"Second tab"}),(0,a.jsx)(r.t.Tab,{value:"3",ref:m("3"),className:l.tab,children:"Third tab"}),(0,a.jsx)(n.g,{target:o?c[o]:null,parent:e,className:l.indicator})]}),(0,a.jsx)(r.t.Panel,{value:"1",children:"First tab content"}),(0,a.jsx)(r.t.Panel,{value:"2",children:"Second tab content"}),(0,a.jsx)(r.t.Panel,{value:"3",children:"Third tab content"})]})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}]}},54607:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","circle","Circle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}]])},65433:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},66764:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","arrow-up-left","ArrowUpLeft",[["path",{d:"M7 7l10 10",key:"svg-0"}],["path",{d:"M16 7l-9 0l0 9",key:"svg-1"}]])},67872:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","arrow-down","ArrowDown",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 13l-6 6",key:"svg-1"}],["path",{d:"M6 13l6 6",key:"svg-2"}]])},84276:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},91173:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","arrow-up-right","ArrowUpRight",[["path",{d:"M17 7l-10 10",key:"svg-0"}],["path",{d:"M8 7l9 0l0 9",key:"svg-1"}]])},97767:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","arrow-up","ArrowUp",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 11l-6 -6",key:"svg-1"}],["path",{d:"M6 11l6 -6",key:"svg-2"}]])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=42757)),_N_E=e.O()}]);