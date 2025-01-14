(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53782],{60023:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/floating-indicator",function(){return o(30897)}])},30897:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return g}});var n=o(52322),r=o(45392),a=o(2784),s=o(63409),l=o(19296);let i=["React","Vue","Angular","Svelte"],c={type:"code",component:function(){let[e,t]=(0,a.useState)(null),[o,r]=(0,a.useState)({}),[c,d]=(0,a.useState)(0),u=e=>t=>{o[e]=t,r(o)},m=i.map((e,t)=>(0,n.jsx)(s.k,{className:"m_f163915c",ref:u(t),onClick:()=>d(t),mod:{active:c===t},children:(0,n.jsx)("span",{className:"m_848976f8",children:e})},e));return(0,n.jsxs)("div",{className:"m_f1cded43",ref:t,children:[m,(0,n.jsx)(l.G,{target:o[c],parent:e,className:"m_13e0e64e"})]})},centered:!0,defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
}`}]};var d=o(61745),u=o(1922),m=o(54078),f=o(15019);let v=(0,m.A)(f.us.FloatingIndicator);function h(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,r.a)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"FloatingIndicator"})," is designed to highlight active element in a group.\nIt can be used to create custom segmented controls, tabs and other similar components."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"FloatingIndicator"})," renders an element over the ",(0,n.jsx)(t.code,{children:"target"})," element. To calculate the position it is\nrequired to pass ",(0,n.jsx)(t.code,{children:"parent"})," element which has a relative position."]}),"\n",(0,n.jsxs)(t.p,{children:["By default, ",(0,n.jsx)(t.code,{children:"FloatingIndicator"})," does not have any visible styles. You can use ",(0,n.jsx)(t.code,{children:"className"})," prop\nor ",(0,n.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"})," to apply styles."]}),"\n",(0,n.jsx)(o,{data:c}),"\n",(0,n.jsx)(t.h2,{id:"multiple-rows",children:"Multiple rows"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"FloatingIndicator"})," can be used to highlight active element in a group with multiple rows:"]}),"\n",(0,n.jsx)(o,{data:d.o}),"\n",(0,n.jsx)(t.h2,{id:"example-tabs",children:"Example: Tabs"}),"\n",(0,n.jsx)(o,{data:u.e})]})}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(v,{...e,children:(0,n.jsx)(h,{...e})})}},11264:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(73681).Z)("outline","arrow-down","IconArrowDown",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 13l-6 6",key:"svg-1"}],["path",{d:"M6 13l6 6",key:"svg-2"}]])},36762:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(73681).Z)("outline","arrow-down-left","IconArrowDownLeft",[["path",{d:"M17 7l-10 10",key:"svg-0"}],["path",{d:"M16 17l-9 0l0 -9",key:"svg-1"}]])},63118:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(73681).Z)("outline","arrow-down-right","IconArrowDownRight",[["path",{d:"M7 7l10 10",key:"svg-0"}],["path",{d:"M17 8l0 9l-9 0",key:"svg-1"}]])},85448:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(73681).Z)("outline","arrow-up","IconArrowUp",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 11l-6 -6",key:"svg-1"}],["path",{d:"M6 11l6 -6",key:"svg-2"}]])},60210:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(73681).Z)("outline","arrow-up-left","IconArrowUpLeft",[["path",{d:"M7 7l10 10",key:"svg-0"}],["path",{d:"M16 7l-9 0l0 9",key:"svg-1"}]])},21243:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(73681).Z)("outline","arrow-up-right","IconArrowUpRight",[["path",{d:"M17 7l-10 10",key:"svg-0"}],["path",{d:"M8 7l9 0l0 9",key:"svg-1"}]])},99765:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(73681).Z)("outline","circle","IconCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}]])},61745:function(e,t,o){"use strict";o.d(t,{o:function(){return k}});var n=o(52322),r=o(2784),a=o(60210),s=o(85448),l=o(21243),i=o(66041),c=o(99765),d=o(10631),u=o(36762),m=o(11264),f=o(63118),v=o(19296),h=o(63409),g="m_378d0bd5",p="m_cc1130c9";let k={type:"code",component:function(){let[e,t]=(0,r.useState)(null),[o,k]=(0,r.useState)({}),[x,w]=(0,r.useState)("center"),b=e=>t=>{o[e]=t,k(o)};return(0,n.jsxs)("div",{className:"m_59c14cf6",dir:"ltr",ref:t,children:[(0,n.jsx)(v.G,{target:o[x],parent:e,className:"m_f9a45e7b"}),(0,n.jsxs)("div",{className:g,children:[(0,n.jsx)(h.k,{className:p,onClick:()=>w("up-left"),ref:b("up-left"),mod:{active:"up-left"===x},children:(0,n.jsx)(a.Z,{size:26,stroke:1.5})}),(0,n.jsx)(h.k,{className:p,onClick:()=>w("up"),ref:b("up"),mod:{active:"up"===x},children:(0,n.jsx)(s.Z,{size:26,stroke:1.5})}),(0,n.jsx)(h.k,{className:p,onClick:()=>w("up-right"),ref:b("up-right"),mod:{active:"up-right"===x},children:(0,n.jsx)(l.Z,{size:26,stroke:1.5})})]}),(0,n.jsxs)("div",{className:g,children:[(0,n.jsx)(h.k,{className:p,onClick:()=>w("left"),ref:b("left"),mod:{active:"left"===x},children:(0,n.jsx)(i.Z,{size:26,stroke:1.5})}),(0,n.jsx)(h.k,{className:p,onClick:()=>w("center"),ref:b("center"),mod:{active:"center"===x},children:(0,n.jsx)(c.Z,{size:26,stroke:1.5})}),(0,n.jsx)(h.k,{className:p,onClick:()=>w("right"),ref:b("right"),mod:{active:"right"===x},children:(0,n.jsx)(d.Z,{size:26,stroke:1.5})})]}),(0,n.jsxs)("div",{className:g,children:[(0,n.jsx)(h.k,{className:p,onClick:()=>w("down-left"),ref:b("down-left"),mod:{active:"down-left"===x},children:(0,n.jsx)(u.Z,{size:26,stroke:1.5})}),(0,n.jsx)(h.k,{className:p,onClick:()=>w("down"),ref:b("down"),mod:{active:"down"===x},children:(0,n.jsx)(m.Z,{size:26,stroke:1.5})}),(0,n.jsx)(h.k,{className:p,onClick:()=>w("down-right"),ref:b("down-right"),mod:{active:"down-right"===x},children:(0,n.jsx)(f.Z,{size:26,stroke:1.5})})]})]})},centered:!0,defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
}`}]}},1922:function(e,t,o){"use strict";o.d(t,{e:function(){return i}});var n=o(52322),r=o(2784),a=o(40437),s=o(19296),l="m_65f82fcc";let i={type:"code",component:function(){let[e,t]=(0,r.useState)(null),[o,i]=(0,r.useState)("1"),[c,d]=(0,r.useState)({}),u=e=>t=>{c[e]=t,d(c)};return(0,n.jsxs)(a.m,{variant:"none",value:o,onChange:i,children:[(0,n.jsxs)(a.m.List,{ref:t,className:"m_590a4747",children:[(0,n.jsx)(a.m.Tab,{value:"1",ref:u("1"),className:l,children:"First tab"}),(0,n.jsx)(a.m.Tab,{value:"2",ref:u("2"),className:l,children:"Second tab"}),(0,n.jsx)(a.m.Tab,{value:"3",ref:u("3"),className:l,children:"Third tab"}),(0,n.jsx)(s.G,{target:o?c[o]:null,parent:e,className:"m_8268e906"})]}),(0,n.jsx)(a.m.Panel,{value:"1",children:"First tab content"}),(0,n.jsx)(a.m.Panel,{value:"2",children:"Second tab content"}),(0,n.jsx)(a.m.Panel,{value:"3",children:"Third tab content"})]})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}]}}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=60023)}),_N_E=e.O()}]);