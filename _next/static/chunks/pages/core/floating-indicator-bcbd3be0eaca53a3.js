(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[53782],{14703:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(99882).Z)("arrow-up","IconArrowUp",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 11l-6 -6",key:"svg-1"}],["path",{d:"M6 11l6 -6",key:"svg-2"}]])},60023:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/floating-indicator",function(){return o(30897)}])},30897:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return g}});var n=o(52322),r=o(45392),s=o(2784),a=o(63409),c=o(19296);let i=`
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
`,l=`.root {
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
}`,d=["React","Vue","Angular","Svelte"],m={type:"code",component:function(){let[e,t]=(0,s.useState)(null),[o,r]=(0,s.useState)({}),[i,l]=(0,s.useState)(0),m=e=>t=>{o[e]=t,r(o)},u=d.map((e,t)=>(0,n.jsx)(a.k,{className:"m_f163915c",ref:m(t),onClick:()=>l(t),mod:{active:i===t},children:(0,n.jsx)("span",{className:"m_848976f8",children:e})},e));return(0,n.jsxs)("div",{className:"m_f1cded43",ref:t,children:[u,(0,n.jsx)(c.G,{target:o[i],parent:e,className:"m_13e0e64e"})]})},centered:!0,defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:i},{fileName:"Demo.module.css",language:"scss",code:l}]};var u=o(44442),f=o(79016),v=o(33638);let h=(0,f.A)(v.us.FloatingIndicator);function p(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,r.a)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"FloatingIndicator"})," is designed to highlight active element in a group.\nIt can be used to create custom segmented controls, tabs and other similar components."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"FloatingIndicator"})," renders an element over the ",(0,n.jsx)(t.code,{children:"target"})," element. To calculate the position it is\nrequired to pass ",(0,n.jsx)(t.code,{children:"parent"})," element which has a relative position."]}),"\n",(0,n.jsxs)(t.p,{children:["By default, ",(0,n.jsx)(t.code,{children:"FloatingIndicator"})," does not have any visible styles. You can use ",(0,n.jsx)(t.code,{children:"className"})," prop\nor ",(0,n.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"})," to apply styles."]}),"\n",(0,n.jsx)(o,{data:m}),"\n",(0,n.jsx)(t.h2,{id:"multiple-rows",children:"Multiple rows"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"FloatingIndicator"})," can be used to highlight active element in a group with multiple rows:"]}),"\n",(0,n.jsx)(o,{data:u.o})]})}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(h,{...e,children:(0,n.jsx)(p,{...e})})}},44442:function(e,t,o){"use strict";o.d(t,{o:function(){return x}});var n=o(52322),r=o(2784),s=o(99882),a=(0,s.Z)("arrow-up-left","IconArrowUpLeft",[["path",{d:"M7 7l10 10",key:"svg-0"}],["path",{d:"M16 7l-9 0l0 9",key:"svg-1"}]]),c=o(14703),i=(0,s.Z)("arrow-up-right","IconArrowUpRight",[["path",{d:"M17 7l-10 10",key:"svg-0"}],["path",{d:"M8 7l9 0l0 9",key:"svg-1"}]]),l=o(8113),d=(0,s.Z)("circle","IconCircle",[["path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0",key:"svg-0"}]]),m=o(4521),u=(0,s.Z)("arrow-down-left","IconArrowDownLeft",[["path",{d:"M17 7l-10 10",key:"svg-0"}],["path",{d:"M16 17l-9 0l0 -9",key:"svg-1"}]]),f=(0,s.Z)("arrow-down","IconArrowDown",[["path",{d:"M12 5l0 14",key:"svg-0"}],["path",{d:"M18 13l-6 6",key:"svg-1"}],["path",{d:"M6 13l6 6",key:"svg-2"}]]),v=(0,s.Z)("arrow-down-right","IconArrowDownRight",[["path",{d:"M7 7l10 10",key:"svg-0"}],["path",{d:"M17 8l0 9l-9 0",key:"svg-1"}]]),h=o(19296),p=o(63409),g={root:"m_59c14cf6",indicator:"m_f9a45e7b",controlsGroup:"m_378d0bd5",control:"m_cc1130c9"};let k=`
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
`,w=`.root {
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
}`,x={type:"code",component:function(){let[e,t]=(0,r.useState)(null),[o,s]=(0,r.useState)({}),[k,w]=(0,r.useState)("center"),x=e=>t=>{o[e]=t,s(o)};return(0,n.jsxs)("div",{className:g.root,dir:"ltr",ref:t,children:[(0,n.jsx)(h.G,{target:o[k],parent:e,className:g.indicator}),(0,n.jsxs)("div",{className:g.controlsGroup,children:[(0,n.jsx)(p.k,{className:g.control,onClick:()=>w("up-left"),ref:x("up-left"),mod:{active:"up-left"===k},children:(0,n.jsx)(a,{size:26,stroke:1.5})}),(0,n.jsx)(p.k,{className:g.control,onClick:()=>w("up"),ref:x("up"),mod:{active:"up"===k},children:(0,n.jsx)(c.Z,{size:26,stroke:1.5})}),(0,n.jsx)(p.k,{className:g.control,onClick:()=>w("up-right"),ref:x("up-right"),mod:{active:"up-right"===k},children:(0,n.jsx)(i,{size:26,stroke:1.5})})]}),(0,n.jsxs)("div",{className:g.controlsGroup,children:[(0,n.jsx)(p.k,{className:g.control,onClick:()=>w("left"),ref:x("left"),mod:{active:"left"===k},children:(0,n.jsx)(l.Z,{size:26,stroke:1.5})}),(0,n.jsx)(p.k,{className:g.control,onClick:()=>w("center"),ref:x("center"),mod:{active:"center"===k},children:(0,n.jsx)(d,{size:26,stroke:1.5})}),(0,n.jsx)(p.k,{className:g.control,onClick:()=>w("right"),ref:x("right"),mod:{active:"right"===k},children:(0,n.jsx)(m.Z,{size:26,stroke:1.5})})]}),(0,n.jsxs)("div",{className:g.controlsGroup,children:[(0,n.jsx)(p.k,{className:g.control,onClick:()=>w("down-left"),ref:x("down-left"),mod:{active:"down-left"===k},children:(0,n.jsx)(u,{size:26,stroke:1.5})}),(0,n.jsx)(p.k,{className:g.control,onClick:()=>w("down"),ref:x("down"),mod:{active:"down"===k},children:(0,n.jsx)(f,{size:26,stroke:1.5})}),(0,n.jsx)(p.k,{className:g.control,onClick:()=>w("down-right"),ref:x("down-right"),mod:{active:"down-right"===k},children:(0,n.jsx)(v,{size:26,stroke:1.5})})]})]})},centered:!0,defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:k},{fileName:"Demo.module.css",language:"scss",code:w}]}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=60023)}),_N_E=e.O()}]);