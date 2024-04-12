(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53782],{14703:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(99882).Z)("arrow-up","IconArrowUp",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 11l-6 -6",key:"svg-1"}],["path",{d:"M6 11l6 -6",key:"svg-2"}]])},60023:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/floating-indicator",function(){return o(30897)}])},30897:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return h}});var n=o(52322),r=o(45392),a=o(2784),s=o(63409),c=o(19296);let l=`
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
`,i=`.root {
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
}`,d=["React","Vue","Angular","Svelte"],m={type:"code",component:function(){let[e,t]=(0,a.useState)(null),[o,n]=(0,a.useState)({}),[r,l]=(0,a.useState)(0),i=e=>t=>{o[e]=t,n(o)},m=d.map((e,t)=>a.createElement(s.k,{key:e,className:"m_f163915c",ref:i(t),onClick:()=>l(t),mod:{active:r===t}},a.createElement("span",{className:"m_848976f8"},e)));return a.createElement("div",{className:"m_f1cded43",ref:t},m,a.createElement(c.G,{target:o[r],parent:e,className:"m_13e0e64e"}))},centered:!0,defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:l},{fileName:"Demo.module.css",language:"scss",code:i}]};var u=o(44442),f=o(79016),v=o(33638);let p=(0,f.A)(v.us.FloatingIndicator);function g(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,r.a)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"FloatingIndicator"})," is designed to highlight active element in a group.\nIt can be used to create custom segmented controls, tabs and other similar components."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"FloatingIndicator"})," renders an element over the ",(0,n.jsx)(t.code,{children:"target"})," element. To calculate the position it is\nrequired to pass ",(0,n.jsx)(t.code,{children:"parent"})," element which has a relative position."]}),"\n",(0,n.jsxs)(t.p,{children:["By default, ",(0,n.jsx)(t.code,{children:"FloatingIndicator"})," does not have any visible styles. You can use ",(0,n.jsx)(t.code,{children:"className"})," prop\nor ",(0,n.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"})," to apply styles."]}),"\n",(0,n.jsx)(o,{data:m}),"\n",(0,n.jsx)(t.h2,{id:"multiple-rows",children:"Multiple rows"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"FloatingIndicator"})," can be used to highlight active element in a group with multiple rows:"]}),"\n",(0,n.jsx)(o,{data:u.o})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(p,{...e,children:(0,n.jsx)(g,{...e})})}},44442:function(e,t,o){"use strict";o.d(t,{o:function(){return w}});var n=o(2784),r=o(99882),a=(0,r.Z)("arrow-up-left","IconArrowUpLeft",[["path",{d:"M7 7l10 10",key:"svg-0"}],["path",{d:"M16 7l-9 0l0 9",key:"svg-1"}]]),s=o(14703),c=(0,r.Z)("arrow-up-right","IconArrowUpRight",[["path",{d:"M17 7l-10 10",key:"svg-0"}],["path",{d:"M8 7l9 0l0 9",key:"svg-1"}]]),l=o(8113),i=(0,r.Z)("circle","IconCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}]]),d=o(4521),m=(0,r.Z)("arrow-down-left","IconArrowDownLeft",[["path",{d:"M17 7l-10 10",key:"svg-0"}],["path",{d:"M16 17l-9 0l0 -9",key:"svg-1"}]]),u=(0,r.Z)("arrow-down","IconArrowDown",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 13l-6 6",key:"svg-1"}],["path",{d:"M6 13l6 6",key:"svg-2"}]]),f=(0,r.Z)("arrow-down-right","IconArrowDownRight",[["path",{d:"M7 7l10 10",key:"svg-0"}],["path",{d:"M17 8l0 9l-9 0",key:"svg-1"}]]),v=o(19296),p=o(63409),g={root:"m_59c14cf6",indicator:"m_f9a45e7b",controlsGroup:"m_378d0bd5",control:"m_cc1130c9"};let h=`
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
`,k=`.root {
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
}`,w={type:"code",component:function(){let[e,t]=(0,n.useState)(null),[o,r]=(0,n.useState)({}),[h,k]=(0,n.useState)("center"),w=e=>t=>{o[e]=t,r(o)};return n.createElement("div",{className:g.root,dir:"ltr",ref:t},n.createElement(v.G,{target:o[h],parent:e,className:g.indicator}),n.createElement("div",{className:g.controlsGroup},n.createElement(p.k,{className:g.control,onClick:()=>k("up-left"),ref:w("up-left"),mod:{active:"up-left"===h}},n.createElement(a,{size:26,stroke:1.5})),n.createElement(p.k,{className:g.control,onClick:()=>k("up"),ref:w("up"),mod:{active:"up"===h}},n.createElement(s.Z,{size:26,stroke:1.5})),n.createElement(p.k,{className:g.control,onClick:()=>k("up-right"),ref:w("up-right"),mod:{active:"up-right"===h}},n.createElement(c,{size:26,stroke:1.5}))),n.createElement("div",{className:g.controlsGroup},n.createElement(p.k,{className:g.control,onClick:()=>k("left"),ref:w("left"),mod:{active:"left"===h}},n.createElement(l.Z,{size:26,stroke:1.5})),n.createElement(p.k,{className:g.control,onClick:()=>k("center"),ref:w("center"),mod:{active:"center"===h}},n.createElement(i,{size:26,stroke:1.5})),n.createElement(p.k,{className:g.control,onClick:()=>k("right"),ref:w("right"),mod:{active:"right"===h}},n.createElement(d.Z,{size:26,stroke:1.5}))),n.createElement("div",{className:g.controlsGroup},n.createElement(p.k,{className:g.control,onClick:()=>k("down-left"),ref:w("down-left"),mod:{active:"down-left"===h}},n.createElement(m,{size:26,stroke:1.5})),n.createElement(p.k,{className:g.control,onClick:()=>k("down"),ref:w("down"),mod:{active:"down"===h}},n.createElement(u,{size:26,stroke:1.5})),n.createElement(p.k,{className:g.control,onClick:()=>k("down-right"),ref:w("down-right"),mod:{active:"down-right"===h}},n.createElement(f,{size:26,stroke:1.5}))))},centered:!0,defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:h},{fileName:"Demo.module.css",language:"scss",code:k}]}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=60023)}),_N_E=e.O()}]);