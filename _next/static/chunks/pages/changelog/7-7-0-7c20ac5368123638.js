(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81287],{9195:(e,t,r)=>{"use strict";r.d(t,{o:()=>v});var o=r(6029),n=r(55729),s=r(66764),a=r(97767),i=r(91173),l=r(24583),c=r(54607),d=r(88992),h=r(22551),p=r(67872),u=r(21936),m=r(71174),x=r(17976),f={root:"m_59c14cf6",indicator:"m_f9a45e7b",controlsGroup:"m_378d0bd5",control:"m_cc1130c9"};let v={type:"code",component:function(){let[e,t]=(0,n.useState)(null),[r,v]=(0,n.useState)({}),[g,j]=(0,n.useState)("center"),y=e=>t=>{r[e]=t,v(r)};return(0,o.jsxs)("div",{className:f.root,dir:"ltr",ref:t,children:[(0,o.jsx)(m.g,{target:r[g],parent:e,className:f.indicator}),(0,o.jsxs)("div",{className:f.controlsGroup,children:[(0,o.jsx)(x.N,{className:f.control,onClick:()=>j("up-left"),ref:y("up-left"),mod:{active:"up-left"===g},children:(0,o.jsx)(s.A,{size:26,stroke:1.5})}),(0,o.jsx)(x.N,{className:f.control,onClick:()=>j("up"),ref:y("up"),mod:{active:"up"===g},children:(0,o.jsx)(a.A,{size:26,stroke:1.5})}),(0,o.jsx)(x.N,{className:f.control,onClick:()=>j("up-right"),ref:y("up-right"),mod:{active:"up-right"===g},children:(0,o.jsx)(i.A,{size:26,stroke:1.5})})]}),(0,o.jsxs)("div",{className:f.controlsGroup,children:[(0,o.jsx)(x.N,{className:f.control,onClick:()=>j("left"),ref:y("left"),mod:{active:"left"===g},children:(0,o.jsx)(l.A,{size:26,stroke:1.5})}),(0,o.jsx)(x.N,{className:f.control,onClick:()=>j("center"),ref:y("center"),mod:{active:"center"===g},children:(0,o.jsx)(c.A,{size:26,stroke:1.5})}),(0,o.jsx)(x.N,{className:f.control,onClick:()=>j("right"),ref:y("right"),mod:{active:"right"===g},children:(0,o.jsx)(d.A,{size:26,stroke:1.5})})]}),(0,o.jsxs)("div",{className:f.controlsGroup,children:[(0,o.jsx)(x.N,{className:f.control,onClick:()=>j("down-left"),ref:y("down-left"),mod:{active:"down-left"===g},children:(0,o.jsx)(h.A,{size:26,stroke:1.5})}),(0,o.jsx)(x.N,{className:f.control,onClick:()=>j("down"),ref:y("down"),mod:{active:"down"===g},children:(0,o.jsx)(p.A,{size:26,stroke:1.5})}),(0,o.jsx)(x.N,{className:f.control,onClick:()=>j("down-right"),ref:y("down-right"),mod:{active:"down-right"===g},children:(0,o.jsx)(u.A,{size:26,stroke:1.5})})]})]})},centered:!0,defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
}`}]}},18625:(e,t,r)=>{"use strict";r.d(t,{g:()=>c});var o=r(6029),n=r(45208),s=r(57414),a=r(61087),i=r(1608),l=r(55729);let c={type:"code",component:function(){let[e,t,r]=function(e){let[t,r]=(0,l.useState)({history:[1],current:0}),o=(0,l.useCallback)(e=>r(t=>{let r=[...t.history.slice(0,t.current+1),e];return{history:r,current:r.length-1}}),[]),n=(0,l.useCallback)((e=1)=>r(t=>({history:t.history,current:Math.max(0,t.current-e)})),[]),s=(0,l.useCallback)((e=1)=>r(t=>({history:t.history,current:Math.min(t.history.length-1,t.current+e)})),[]),a=(0,l.useCallback)(()=>{r({history:[1],current:0})},[e]),i=(0,l.useMemo)(()=>({back:n,forward:s,reset:a,set:o}),[n,s,a,o]);return[t.history[t.current],i,t]}(1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.E,{children:["Current value: ",e]}),(0,o.jsxs)(s.Y,{my:"md",children:[(0,o.jsx)(a.$,{onClick:()=>t.set(Math.ceil(100*Math.random())+1),children:"Set value"}),(0,o.jsx)(a.$,{onClick:()=>t.back(),children:"Back"}),(0,o.jsx)(a.$,{onClick:()=>t.forward(),children:"Forward"}),(0,o.jsx)(a.$,{onClick:()=>t.reset(),children:"Reset"})]}),(0,o.jsx)(i.C,{block:!0,children:JSON.stringify(r,null,2)})]})},code:`
import { Button, Code, Group, Text } from '@mantine/core';
import { useStateHistory } from '@mantine/hooks';

function Demo() {
  const [value, handlers, history] = useStateHistory(1);
  return (
    <>
      <Text>Current value: {value}</Text>
      <Group my="md">
        <Button onClick={() => handlers.set(Math.ceil(Math.random() * 100) + 1)}>Set value</Button>
        <Button onClick={() => handlers.back()}>Back</Button>
        <Button onClick={() => handlers.forward()}>Forward</Button>
        <Button onClick={() => handlers.reset()}>Reset</Button>
      </Group>
      <Code block>{JSON.stringify(history, null, 2)}</Code>
    </>
  );
}
`}},34483:(e,t,r)=>{"use strict";r.d(t,{s:()=>n});var o=r(6029);function n({color:e,id:t,withGradient:r,fillOpacity:n}){return(0,o.jsx)(o.Fragment,{children:r?(0,o.jsxs)("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,o.jsx)("stop",{offset:"0%",stopColor:e,stopOpacity:n}),(0,o.jsx)("stop",{offset:"100%",stopColor:e,stopOpacity:.01})]}):(0,o.jsx)("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1",children:(0,o.jsx)("stop",{stopColor:e,stopOpacity:n??.2})})})}n.displayName="@mantine/charts/AreaGradient"},39963:(e,t,r)=>{"use strict";r.d(t,{B:()=>a});var o=r(6029),n=r(77409),s=r(90968);let a={type:"code",component:function(){return(0,o.jsx)(n.Q,{h:300,data:s.p,dataKey:"date",type:"stacked",xAxisLabel:"Date",yAxisLabel:"Amount",series:[{name:"Apples",color:"indigo.6"},{name:"Oranges",color:"blue.6"},{name:"Tomatoes",color:"teal.6"}]})},code:[{code:`
import { AreaChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <AreaChart
      h={300}
      data={data}
      dataKey="date"
      type="stacked"
      xAxisLabel="Date"
      yAxisLabel="Amount"
      series={[
        { name: 'Apples', color: 'indigo.6' },
        { name: 'Oranges', color: 'blue.6' },
        { name: 'Tomatoes', color: 'teal.6' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:s.kZ,language:"tsx",fileName:"data.ts"}]}},52345:(e,t,r)=>{"use strict";r.d(t,{x:()=>n});var o=r(6029);function n({x:e,y:t,value:r,valueFormatter:n}){return(0,o.jsx)("g",{transform:`translate(${e},${t})`,children:(0,o.jsx)("text",{x:0,y:0,dy:-8,dx:-10,textAnchor:"top",fill:"var(--chart-text-color, var(--mantine-color-dimmed))",fontSize:8,children:n?n(r):r})})}},52733:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-7-0",function(){return r(75240)}])},75240:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var o=r(6029),n=r(16285),s=r(85138),a=r(9195),i=r(60194),l=r(75734),c=r(18625),d=r(39963),h=r(38547),p=r(5262);let u=(0,h.P)(p.XZ.Changelog770);function m(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components},{Demo:r}=t;return r||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"virtual-colors",children:"Virtual colors"}),"\n",(0,o.jsxs)(t.p,{children:["Virtual color is a special color which values should be different for light and dark color schemes.\nTo define a virtual color, use ",(0,o.jsx)(t.code,{children:"virtualColor"})," function which accepts an object with the following\nproperties as a single argument:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"name"})," – color name, must be the same as the key in ",(0,o.jsx)(t.code,{children:"theme.colors"})," object"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"light"})," – a key of ",(0,o.jsx)(t.code,{children:"theme.colors"})," object for light color scheme"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"dark"})," – a key of ",(0,o.jsx)(t.code,{children:"theme.colors"})," object for dark color scheme"]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["To see the demo in action, switch between light and dark color schemes (",(0,o.jsx)(t.code,{children:"Ctrl + J"}),"):"]}),"\n",(0,o.jsx)(r,{data:s.O}),"\n",(0,o.jsx)(t.h2,{id:"floatingindicator-component",children:"FloatingIndicator component"}),"\n",(0,o.jsxs)(t.p,{children:["New ",(0,o.jsx)(t.a,{href:"/core/floating-indicator",children:"FloatingIndicator"})," component:"]}),"\n",(0,o.jsx)(r,{data:a.o}),"\n",(0,o.jsx)(t.h2,{id:"scatterchart-component",children:"ScatterChart component"}),"\n",(0,o.jsxs)(t.p,{children:["New ",(0,o.jsx)(t.a,{href:"/charts/scatter-chart",children:"ScatterChart"})," component:"]}),"\n",(0,o.jsx)(r,{data:i.C}),"\n",(0,o.jsx)(t.h2,{id:"colorstuple-function",children:"colorsTuple function"}),"\n",(0,o.jsxs)(t.p,{children:["New ",(0,o.jsx)(t.code,{children:"colorsTuple"})," function can be used to:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Use single color as the same color for all shades"}),"\n",(0,o.jsx)(t.li,{children:"Transform dynamic string arrays to Mantine color tuple (the array should still have 10 values)"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { colorsTuple, createTheme } from '@mantine/core';\n\nconst theme = createTheme({\n  colors: {\n    custom: colorsTuple('#FFC0CB'),\n    dynamic: colorsTuple(\n      Array.from({ length: 10 }, (_, index) => '#FFC0CB')\n    ),\n  },\n});\n"})}),"\n",(0,o.jsx)(t.h2,{id:"use-mutation-observer-hook",children:"use-mutation-observer hook"}),"\n",(0,o.jsxs)(t.p,{children:["New ",(0,o.jsx)(t.a,{href:"/hooks/use-mutation-observer",children:"useMutationObserver"})," hook:"]}),"\n",(0,o.jsx)(r,{data:l.i}),"\n",(0,o.jsx)(t.h2,{id:"use-state-history-hook",children:"use-state-history hook"}),"\n",(0,o.jsxs)(t.p,{children:["New ",(0,o.jsx)(t.a,{href:"/hooks/use-state-history",children:"useStateHistory"})," hook:"]}),"\n",(0,o.jsx)(r,{data:c.g}),"\n",(0,o.jsx)(t.h2,{id:"axis-labels",children:"Axis labels"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/charts/area-chart",children:"AreaChart"}),", ",(0,o.jsx)(t.a,{href:"/charts/bar-chart",children:"BarChart"})," and ",(0,o.jsx)(t.a,{href:"/charts/line-chart",children:"LineChart"}),"\ncomponents now support ",(0,o.jsx)(t.code,{children:"xAxisLabel"})," and ",(0,o.jsx)(t.code,{children:"yAxisLabel"})," props:"]}),"\n",(0,o.jsx)(r,{data:d.B}),"\n",(0,o.jsx)(t.h2,{id:"documentation-updates",children:"Documentation updates"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["New section has been added to the ",(0,o.jsx)(t.a,{href:"/styles/responsive#hidden-and-visible-from-as-classes",children:"responsive guide"})," on how to use ",(0,o.jsx)(t.code,{children:"mantine-hidden-from-{x}"})," and ",(0,o.jsx)(t.code,{children:"mantine-visible-from-{x}"})," classes."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/guides/jest",children:"Jest"})," and ",(0,o.jsx)(t.a,{href:"/guides/vitest",children:"Vitest"})," guides configuration has been updated to include mocks for ",(0,o.jsx)(t.code,{children:"window.HTMLElement.prototype.scrollIntoView"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/styles/css-variables",children:"CSS variables"})," documentation has been updated to include more information about typography and colors variables"]}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"help-center-updates",children:"Help center updates"}),"\n",(0,o.jsxs)(t.p,{children:["New articles added to the ",(0,o.jsx)(t.a,{href:"https://help.mantine.dev",children:"help center"}),":"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/segmented-control-no-value",children:"Can I use SegmentedControl with empty value?"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/other-libs",children:"Is there a comparison with other libraries?"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/vue-svelte-angular",children:"Can I use Mantine with Vue/Svelte/Angular/etc.?"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/combobox-testing",children:"How can I test Select/MultiSelect components?"})}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/core/segmented-control",children:"SegmentedControl"})," indicator positioning logic has been migrated to ",(0,o.jsx)(t.a,{href:"/core/floating-indicator",children:"FloatingIndicator"}),". It is now more performant and works better when used inside elements with ",(0,o.jsx)(t.code,{children:"transform: scale()"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["New ",(0,o.jsx)(t.a,{href:"/hooks/use-mounted",children:"use-mounted"})," hook"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/charts/sparkline",children:"Sparkline"})," now supports ",(0,o.jsx)(t.code,{children:"connectNulls"})," and ",(0,o.jsx)(t.code,{children:"areaProps"})," props"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/core/select",children:"Select"}),", ",(0,o.jsx)(t.a,{href:"/core/multi-select",children:"MultiSelect"}),", ",(0,o.jsx)(t.a,{href:"/core/autocomplete",children:"Autocomplete"})," and ",(0,o.jsx)(t.a,{href:"/core/tags-input",children:"TagsInput"})," components now support ",(0,o.jsx)(t.code,{children:"scrollAreaProps"})," prop to pass props down to the ",(0,o.jsx)(t.a,{href:"/core/scroll-area",children:"ScrollArea"})," component in the dropdown"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"/core/transition",children:"Transition"})," component now supports 4 new transitions: ",(0,o.jsx)(t.code,{children:"fade-up"}),", ",(0,o.jsx)(t.code,{children:"fade-down"}),", ",(0,o.jsx)(t.code,{children:"fade-left"}),", ",(0,o.jsx)(t.code,{children:"fade-right"})]}),"\n",(0,o.jsxs)(t.li,{children:["Default ",(0,o.jsx)(t.a,{href:"/core/modal",children:"Modal"})," transition was changed to ",(0,o.jsx)(t.code,{children:"fade-down"}),". This change resolves issues with ",(0,o.jsx)(t.a,{href:"/core/segmented-control",children:"SegmentedControl"})," indicator positioning when used inside modals."]}),"\n",(0,o.jsxs)(t.li,{children:["You can now reference headings font sizes and line heights in ",(0,o.jsx)(t.code,{children:"fz"})," and ",(0,o.jsx)(t.code,{children:"lh"})," style props with ",(0,o.jsx)(t.code,{children:"h1"}),", ",(0,o.jsx)(t.code,{children:"h2"}),", ",(0,o.jsx)(t.code,{children:"h3"}),", ",(0,o.jsx)(t.code,{children:"h4"}),", ",(0,o.jsx)(t.code,{children:"h5"}),", ",(0,o.jsx)(t.code,{children:"h6"})," values"]}),"\n"]})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(u,{...e,children:(0,o.jsx)(m,{...e})})}},75734:(e,t,r)=>{"use strict";r.d(t,{i:()=>l});var o=r(6029),n=r(55729),s=r(45208),a=r(35885),i=r(23862);let l={type:"code",component:function(){let[e,t]=(0,n.useState)("");return(0,i.P)(e=>{e.forEach(e=>{"attributes"===e.type&&"dir"===e.attributeName&&e.target instanceof HTMLElement&&t(e.target.getAttribute("dir")||"")})},{attributes:!0,attributeFilter:["dir"]},()=>document.documentElement),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.E,{children:["Press ",(0,o.jsx)(a.u,{children:"Ctrl"})," + ",(0,o.jsx)(a.u,{children:"Shift"})," + ",(0,o.jsx)(a.u,{children:"L"})," to change direction"]}),(0,o.jsxs)(s.E,{mt:10,children:["Direction was changed to: ",e||"Not changed yet"]})]})},code:`
import { useState } from 'react';
import { Kbd, Text } from '@mantine/core';
import { useMutationObserver } from '@mantine/hooks';

function Demo() {
  const [lastMutation, setLastMutation] = useState('');

  useMutationObserver(
    (mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'dir') {
          mutation.target instanceof HTMLElement &&
            setLastMutation(mutation.target.getAttribute('dir') || '');
        }
      });
    },
    {
      attributes: true,
      attributeFilter: ['dir'],
    },
    () => document.documentElement
  );

  return (
    <>
      <Text>
        Press <Kbd>Ctrl</Kbd> + <Kbd>Shift</Kbd> + <Kbd>L</Kbd> to change direction
      </Text>

      <Text mt={10}>Direction was changed to: {lastMutation || 'Not changed yet'}</Text>
    </>
  );
}
`}},77409:(e,t,r)=>{"use strict";r.d(t,{Q:()=>D});var o=r(6029),n=r(55729),s=r(13297),a=r(93463),i=r(40684),l=r(56721),c=r(64370),d=r(8454),h=r(2893),p=r(35555),u=r(47122),m=r(31292),x=r(33987),f=r(21351),v=r(8411),g=r(38919),j=r(49643),y=r(38757),k=r(15583),A=r(76320),w=r(48101),b=r(42738),C=r(58486),M=r(52345),N=r(34483);function T({offset:e,id:t,colors:r,fillOpacity:n}){let s=(0,j.xd)();return(0,o.jsxs)("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"1",children:[(0,o.jsx)("stop",{offset:e,stopColor:(0,f.r)(r[0],s),stopOpacity:n??.2}),(0,o.jsx)("stop",{offset:e,stopColor:(0,f.r)(r[1],s),stopOpacity:n??.2})]})}function S(e){return`${(100*e).toFixed(0)}%`}T.displayName="@mantine/charts/AreaSplit";let B={withXAxis:!0,withYAxis:!0,withDots:!0,withTooltip:!0,connectNulls:!0,strokeWidth:2,tooltipAnimationDuration:0,fillOpacity:.2,tickLine:"y",strokeDasharray:"5 5",curveType:"monotone",gridAxis:"x",type:"default",splitColors:["green.7","red.7"],orientation:"horizontal"},I=(0,x.V)((e,{textColor:t,gridColor:r})=>({root:{"--chart-text-color":t?(0,f.r)(t,e):void 0,"--chart-grid-color":r?(0,f.r)(r,e):void 0}})),D=(0,v.P9)((e,t)=>{let r=(0,g.Y)("AreaChart",B,e),{classNames:x,className:v,style:D,styles:L,unstyled:R,vars:z,data:O,series:P,withGradient:E,dataKey:U,withXAxis:F,withYAxis:G,curveType:_,gridProps:H,withDots:K,tickLine:$,strokeDasharray:J,gridAxis:V,unit:W,yAxisProps:X,xAxisProps:Y,dotProps:Z,activeDotProps:q,strokeWidth:Q,tooltipAnimationDuration:ee,type:et,legendProps:er,tooltipProps:eo,withLegend:en,withTooltip:es,areaChartProps:ea,fillOpacity:ei,splitColors:el,splitOffset:ec,connectNulls:ed,onMouseLeave:eh,orientation:ep,referenceLines:eu,dir:em,valueFormatter:ex,children:ef,areaProps:ev,xAxisLabel:eg,yAxisLabel:ej,withRightYAxis:ey,rightYAxisLabel:ek,rightYAxisProps:eA,withPointLabels:ew,gridColor:eb,textColor:eC,attributes:eM,...eN}=r,eT=(0,j.xd)(),eS=(0,n.useId)(),eB=`${eS}-split`,eI=(ee||0)>0,eD="boolean"==typeof E?E:"default"===et,eL="stacked"===et||"percent"===et,[eR,ez]=(0,n.useState)(null),eO=null!==eR,{resolvedClassNames:eP,resolvedStyles:eE}=(0,y.Y)({classNames:x,styles:L,props:r}),eU=(0,k.I)({name:"AreaChart",classes:C.A,props:r,className:v,style:D,classNames:x,styles:L,unstyled:R,attributes:eM,vars:z,varsResolver:I}),eF=P.map(e=>{let t=(0,f.r)(e.color,eT),r=eO&&eR!==e.name;return(0,n.createElement)(s.G,{...eU("area"),activeDot:{fill:eT.white,stroke:t,strokeWidth:2,r:4,...q},dot:{fill:t,fillOpacity:+!r,strokeWidth:2,r:4,...Z},key:e.name,name:e.name,type:_,dataKey:e.name,fill:"none",strokeWidth:Q,stroke:"none",isAnimationActive:!1,connectNulls:ed,stackId:eL?"stack-dots":void 0,yAxisId:e.yAxisId||"left",..."function"==typeof ev?ev(e):ev})}),eG=P.map(e=>{let t=`${eS}-${e.color.replace(/[^a-zA-Z0-9]/g,"")}`,r=(0,f.r)(e.color,eT),a=eO&&eR!==e.name;return(0,o.jsxs)(n.Fragment,{children:[(0,o.jsx)("defs",{children:(0,o.jsx)(N.s,{color:r,withGradient:eD,id:t,fillOpacity:ei})}),(0,o.jsx)(s.G,{...eU("area"),activeDot:!1,dot:!1,name:e.name,type:e.curveType??_,dataKey:e.name,fill:"split"===et?`url(#${eB})`:`url(#${t})`,strokeWidth:Q,stroke:r,isAnimationActive:!1,connectNulls:ed,stackId:eL?"stack":void 0,fillOpacity:+!a,strokeOpacity:a?.5:1,strokeDasharray:e.strokeDasharray,yAxisId:e.yAxisId||"left",label:ew?(0,o.jsx)(M.x,{valueFormatter:ex}):void 0,..."function"==typeof ev?ev(e):ev})]},e.name)}),e_=eu?.map((e,t)=>{let r=(0,f.r)(e.color,eT);return(0,o.jsx)(a.e,{stroke:e.color?r:"var(--chart-grid-color)",strokeWidth:1,yAxisId:e.yAxisId||"left",...e,label:{value:e.label,fill:e.color?r:"currentColor",fontSize:12,position:e.labelPosition??"insideBottomLeft"},...eU("referenceLine")},t)}),eH="percent"===et?S:ex,eK={axisLine:!1,..."vertical"===ep?{dataKey:U,type:"category"}:{type:"number"},tickLine:"none"!==V&&("y"===$||"xy"===$)&&{stroke:"currentColor"},allowDecimals:!0,unit:W,tickFormatter:"vertical"===ep?void 0:eH,...eU("axis")};return(0,o.jsx)(A.a,{ref:t,...eU("root"),onMouseLeave:e=>{ez(null),eh?.(e)},dir:em||"ltr",...eN,children:(0,o.jsx)(i.u,{...eU("container"),children:(0,o.jsxs)(l.Q,{data:O,stackOffset:"percent"===et?"expand":void 0,layout:ep,margin:{bottom:eg?30:void 0,left:ej?10:void 0,right:ej?5:void 0},...ea,children:[e_,en&&(0,o.jsx)(c.s,{verticalAlign:"top",content:e=>(0,o.jsx)(w._,{payload:e.payload,onHighlight:ez,legendPosition:er?.verticalAlign||"top",classNames:eP,styles:eE,series:P,attributes:eM}),...er}),(0,o.jsx)(d.d,{strokeDasharray:J,vertical:"y"===V||"xy"===V,horizontal:"x"===V||"xy"===V,...eU("grid"),...H}),(0,o.jsxs)(h.W,{hide:!F,..."vertical"===ep?{type:"number"}:{dataKey:U},tick:{transform:"translate(0, 10)",fontSize:12,fill:"currentColor"},stroke:"",interval:"preserveStartEnd",tickLine:"none"!==V&&("x"===$||"xy"===$)&&{stroke:"currentColor"},minTickGap:5,tickFormatter:"vertical"===ep?eH:void 0,...eU("axis"),...Y,children:[eg&&(0,o.jsx)(p.J,{position:"insideBottom",offset:-20,fontSize:12,...eU("axisLabel"),children:eg}),Y?.children]}),(0,o.jsxs)(u.h,{yAxisId:"left",orientation:"left",tick:{transform:"translate(-10, 0)",fontSize:12,fill:"currentColor"},hide:!G,...eK,...X,children:[ej&&(0,o.jsx)(p.J,{position:"insideLeft",angle:-90,textAnchor:"middle",fontSize:12,offset:-5,...eU("axisLabel"),children:ej}),X?.children]}),(0,o.jsxs)(u.h,{yAxisId:"right",orientation:"right",tick:{transform:"translate(10, 0)",fontSize:12,fill:"currentColor"},hide:!ey,...eK,...eA,children:[ek&&(0,o.jsx)(p.J,{position:"insideRight",angle:90,textAnchor:"middle",fontSize:12,offset:-5,...eU("axisLabel"),children:ek}),X?.children]}),es&&(0,o.jsx)(m.m,{animationDuration:ee,isAnimationActive:eI,position:"vertical"===ep?{}:{y:0},cursor:{stroke:"var(--chart-grid-color)",strokeWidth:1,strokeDasharray:J},content:({label:e,payload:t,labelFormatter:r})=>(0,o.jsx)(b.I,{label:r&&t?r(e,t):e,payload:t,unit:W,classNames:eP,styles:eE,series:P,valueFormatter:ex,attributes:eM}),...eo}),"split"===et&&(0,o.jsx)("defs",{children:(0,o.jsx)(T,{colors:el,id:eB,offset:ec??function({data:e,series:t}){return 1===t.length?function({data:e,dataKey:t}){let r=Math.max(...e.map(e=>e[t])),o=Math.min(...e.map(e=>e[t]));return r<=0?0:o>=0?1:r/(r-o)}({data:e,dataKey:t[0].name}):.5}({data:O,series:P}),fillOpacity:ei})}),eG,K&&eF,ef]})})})});D.classes=C.A,D.displayName="@mantine/charts/AreaChart"},85138:(e,t,r)=>{"use strict";r.d(t,{O:()=>s});var o=r(6029),n=r(76320);let s={type:"code",component:function(){return(0,o.jsx)(n.a,{bg:"virtual",c:"white",p:"md",fw:700,children:"This box has virtual background color, it is pink in dark mode and cyan in light mode"})},code:[{fileName:"App.tsx",code:`
import { createTheme, MantineProvider, virtualColor } from '@mantine/core';
import { Demo } from './Demo';

const theme = createTheme({
  colors: {
    primary: virtualColor({
      name: 'primary',
      dark: 'pink',
      light: 'cyan',
    }),
  },
});

function App() {
  return (
    <MantineProvider theme={theme}>
      <Demo />
    </MantineProvider>
  );
}
`,language:"tsx"},{fileName:"Demo.tsx",code:`
import { Box } from '@mantine/core';

export function Demo() {
  return (
    <Box bg="primary" c="white" p="md" fw={700}>
      This box has virtual background color,
      it is pink in dark mode and cyan in light mode
    </Box>
  );
}
`,language:"tsx"}]}},90968:(e,t,r)=>{"use strict";r.d(t,{EC:()=>a,EJ:()=>p,Zf:()=>s,d8:()=>h,dX:()=>d,kD:()=>l,kZ:()=>n,p:()=>o,sC:()=>c,v1:()=>i});let o=[{date:"Mar 22",Apples:2890,Oranges:2338,Tomatoes:2452},{date:"Mar 23",Apples:2756,Oranges:2103,Tomatoes:2402},{date:"Mar 24",Apples:3322,Oranges:986,Tomatoes:1821},{date:"Mar 25",Apples:3470,Oranges:2108,Tomatoes:2809},{date:"Mar 26",Apples:3129,Oranges:1726,Tomatoes:2290}],n=`
export const data = [
  {
    date: 'Mar 22',
    Apples: 2890,
    Oranges: 2338,
    Tomatoes: 2452,
  },
  {
    date: 'Mar 23',
    Apples: 2756,
    Oranges: 2103,
    Tomatoes: 2402,
  },
  {
    date: 'Mar 24',
    Apples: 3322,
    Oranges: 986,
    Tomatoes: 1821,
  },
  {
    date: 'Mar 25',
    Apples: 3470,
    Oranges: 2108,
    Tomatoes: 2809,
  },
  {
    date: 'Mar 26',
    Apples: 3129,
    Oranges: 1726,
    Tomatoes: 2290,
  },
];
`,s=[{date:"Mar 22",Apples:110},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:-80},{date:"Mar 25",Apples:40},{date:"Mar 26",Apples:-40},{date:"Mar 27",Apples:80}],a=`
export const data = [
  {
    date: 'Mar 22',
    Apples: 110,
  },
  {
    date: 'Mar 23',
    Apples: 60,
  },
  {
    date: 'Mar 24',
    Apples: -80,
  },
  {
    date: 'Mar 25',
    Apples: 40,
  },
  {
    date: 'Mar 26',
    Apples: -40,
  },
  {
    date: 'Mar 27',
    Apples: 80,
  },
];
`,i=[{date:"Mar 22",Apples:110},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:80},{date:"Mar 25",Apples:null},{date:"Mar 26",Apples:null},{date:"Mar 27",Apples:40},{date:"Mar 28",Apples:120},{date:"Mar 29",Apples:80}],l=`
export const data = [
  {
    date: 'Mar 22',
    Apples: 110,
  },
  {
    date: 'Mar 23',
    Apples: 60,
  },
  {
    date: 'Mar 24',
    Apples: 80,
  },
  {
    date: 'Mar 25',
    Apples: null,
  },
  {
    date: 'Mar 26',
    Apples: null,
  },
  {
    date: 'Mar 27',
    Apples: 40,
  },
  {
    date: 'Mar 28',
    Apples: 120,
  },
  {
    date: 'Mar 29',
    Apples: 80,
  },
];
`,c=[{date:"Mar 22",Apples:50},{date:"Mar 23",Apples:60},{date:"Mar 24",Apples:40},{date:"Mar 25",Apples:30},{date:"Mar 26",Apples:0},{date:"Mar 27",Apples:20},{date:"Mar 28",Apples:20},{date:"Mar 29",Apples:10}],d=`
export const data = [
  {
    date: 'Mar 22',
    Apples: 50,
  },
  {
    date: 'Mar 23',
    Apples: 60,
  },
  {
    date: 'Mar 24',
    Apples: 40,
  },
  {
    date: 'Mar 25',
    Apples: 30,
  },
  {
    date: 'Mar 26',
    Apples: 0,
  },
  {
    date: 'Mar 27',
    Apples: 20,
  },
  {
    date: 'Mar 28',
    Apples: 20,
  },
  {
    date: 'Mar 29',
    Apples: 10,
  },
];
`,h=[{name:"Page A",uv:4e3,pv:2400},{name:"Page B",uv:3e3,pv:1398},{name:"Page C",uv:2e3,pv:9800},{name:"Page D",uv:2780,pv:3908},{name:"Page E",uv:1890,pv:4800},{name:"Page F",uv:2390,pv:3800},{name:"Page G",uv:3490,pv:4300}],p=`
export const biaxialData = [
  { name: 'Page A', uv: 4000, pv: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398 },
  { name: 'Page C', uv: 2000, pv: 9800 },
  { name: 'Page D', uv: 2780, pv: 3908 },
  { name: 'Page E', uv: 1890, pv: 4800 },
  { name: 'Page F', uv: 2390, pv: 3800 },
  { name: 'Page G', uv: 3490, pv: 4300 },
];
`}},e=>{e.O(0,[29040,60454,13297,50285,42192,38547,60194,90636,46593,38792],()=>e(e.s=52733)),_N_E=e.O()}]);