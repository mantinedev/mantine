(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65938],{76869:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-move",function(){return o(30534)}])},30534:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>y});var a=o(31085),n=o(71184),i=o(14041),s=o(56051),r=o(93065),l=o(37905),d=o(7235);let c={type:"code",code:`
import { useState } from 'react';
import { Group, Text, Code } from '@mantine/core';
import { useMove } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref, active } = useMove(setValue);

  return (
    <>
      <Group justify="center">
        <div
          ref={ref}
          style={{
            width: 400,
            height: 120,
            backgroundColor: 'var(--mantine-color-blue-light)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: \`calc(\${value.x * 100}% - 8px)\`,
              top: \`calc(\${value.y * 100}% - 8px)\`,
              width: 16,
              height: 16,
              backgroundColor: active ? 'var(--mantine-color-teal-7)' : 'var(--mantine-color-blue-7)',
            }}
          />
        </div>
      </Group>
      <Text ta="center" mt="sm">
        Values <Code>{\`{ x: \${Math.round(value.x * 100)}, y: \${Math.round(value.y * 100)} }\`}</Code>
      </Text>
    </>
  );
}`,component:function(){let[e,t]=(0,i.useState)({x:.2,y:.6}),{ref:o,active:n}=(0,d.f)(t);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Y,{justify:"center",children:(0,a.jsx)("div",{ref:o,style:{width:400,height:120,backgroundColor:"var(--mantine-color-blue-light)",position:"relative"},children:(0,a.jsx)("div",{style:{position:"absolute",left:`calc(${100*e.x}% - 8px)`,top:`calc(${100*e.y}% - 8px)`,width:16,height:16,backgroundColor:n?"var(--mantine-color-teal-7)":"var(--mantine-color-blue-7)"}})})}),(0,a.jsxs)(r.E,{ta:"center",mt:"sm",children:["Values ",(0,a.jsx)(l.C,{children:`{ x: ${Math.round(100*e.x)}, y: ${Math.round(100*e.y)} }`})]})]})}},h={type:"code",code:`
import { useState } from 'react';
import { Group, Text } from '@mantine/core';
import { useMove } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState(0.2);
  const { ref } = useMove(({ x }) => setValue(x));

  return (
    <>
      <Group justify="center">
        <div
          ref={ref}
          style={{
            width: 400,
            height: 16,
            backgroundColor: 'var(--mantine-color-blue-light)',
            position: 'relative',
          }}
        >
          {/* Filled bar */}
          <div
            style={{
              width: \`\${value * 100}%\`,
              height: 16,
              backgroundColor: 'var(--mantine-color-blue-filled)',
              opacity: 0.7,
            }}
          />

          {/* Thumb */}
          <div
            style={{
              position: 'absolute',
              left: \`calc(\${value * 100}% - 8px)\`,
              top: 0,
              width: 16,
              height: 16,
              backgroundColor: 'var(--mantine-color-blue-7)',
            }}
          />
        </div>
      </Group>

      <Text ta="center" mt="sm">
        Value: {Math.round(value * 100)}
      </Text>
    </>
  );
}
`,component:function(){let[e,t]=(0,i.useState)(.2),{ref:o}=(0,d.f)(({x:e})=>t(e));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Y,{justify:"center",children:(0,a.jsxs)("div",{ref:o,style:{width:400,height:16,backgroundColor:"var(--mantine-color-blue-light)",position:"relative"},children:[(0,a.jsx)("div",{style:{width:`${100*e}%`,height:16,backgroundColor:"var(--mantine-color-blue-filled)",opacity:.7}}),(0,a.jsx)("div",{style:{position:"absolute",left:`calc(${100*e}% - 8px)`,top:0,width:16,height:16,backgroundColor:"var(--mantine-color-blue-7)"}})]})}),(0,a.jsxs)(r.E,{ta:"center",mt:"sm",children:["Value: ",Math.round(100*e)]})]})}};var u=o(61914);let v={type:"code",code:`
import { useState } from 'react';
import { Group, Text } from '@mantine/core';
import { useMove } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState(0.2);
  const { ref } = useMove(({ y }) => setValue(1 - y));

  return (
    <>
      <Group justify="center">
        <div
          ref={ref}
          style={{
            width: 16,
            height: 120,
            backgroundColor: 'var(--mantine-color-blue-light)',
            position: 'relative',
          }}
        >
          {/* Filled bar */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              height: \`\${value * 100}%\`,
              width: 16,
              backgroundColor: 'var(--mantine-color-blue-filled)',
              opacity: 0.7,
            }}
          />

          {/* Thumb */}
          <div
            style={{
              position: 'absolute',
              bottom: \`calc(\${value * 100}% - 8px)\`,
              left: 0,
              width: 16,
              height: 16,
              backgroundColor: 'var(--mantine-color-blue-7)',
            }}
          />
        </div>
      </Group>

      <Text ta="center" mt="sm">
        Value: {Math.round(value * 100)}
      </Text>
    </>
  );
}`,component:function(){let[e,t]=(0,i.useState)(.2),{ref:o}=(0,d.f)(({y:e})=>t(1-e));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.Y,{justify:"center",children:(0,a.jsxs)("div",{ref:o,style:{width:16,height:120,backgroundColor:"var(--mantine-color-blue-light)",position:"relative"},children:[(0,a.jsx)("div",{style:{position:"absolute",bottom:0,height:`${100*e}%`,width:16,backgroundColor:"var(--mantine-color-blue-filled)",opacity:.7}}),(0,a.jsx)("div",{style:{position:"absolute",bottom:`calc(${100*e}% - 8px)`,left:0,width:16,height:16,backgroundColor:"var(--mantine-color-blue-7)"}})]})}),(0,a.jsxs)(r.E,{ta:"center",mt:"sm",children:["Value: ",Math.round(100*e)]})]})}},m={type:"code",code:`
import { useState } from 'react';
import { useMove } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref } = useMove(setValue);

  return (
    <div>
      <div
        ref={ref}
        style={{
          width: 300,
          height: 150,
          backgroundColor: 'red',
          position: 'relative',
        }}
      >
        {/* Gradient overlays */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(90deg, #fff, transparent)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'linear-gradient(0deg, #000, transparent)',
          }}
        />

        {/* Thumb */}
        <div
          style={{
            position: 'absolute',
            left: \`calc(\${value.x * 100}% - 8px)\`,
            top: \`calc(\${value.y * 100}% - 8px)\`,
            width: 16,
            height: 16,
            border: '2px solid #fff',
            borderRadius: 16,
          }}
        />
      </div>
    </div>
  );
}`,component:function(){let[e,t]=(0,i.useState)({x:.2,y:.6}),{ref:o}=(0,d.f)(t);return(0,a.jsx)("div",{children:(0,a.jsxs)("div",{ref:o,style:{width:300,height:150,backgroundColor:"red",position:"relative"},children:[(0,a.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:"linear-gradient(90deg, #fff, transparent)"}}),(0,a.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:"linear-gradient(0deg, #000, transparent)"}}),(0,a.jsx)("div",{style:{position:"absolute",left:`calc(${100*e.x}% - 8px)`,top:`calc(${100*e.y}% - 8px)`,width:16,height:16,border:"2px solid #fff",borderRadius:16}})]})})},centered:!0};var p=o(18675),g=o(20017);let x=(0,p.P)(g.XZ.useMove);function f(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"use-move"})," handles move behavior over any element:"]}),"\n",(0,a.jsx)(o,{data:c}),"\n",(0,a.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,a.jsxs)(t.p,{children:["The hook accepts a callback that is called when user moves pressed mouse over the given element\nand returns an object with ",(0,a.jsx)(t.code,{children:"ref"})," and active state:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useMove } from '@mantine/hooks';\n\nconst {\n  ref, // -> pass ref to target element\n  active, // -> is user changing something right now?\n} = useMove(({ x, y }) => console.log({ x, y }));\n"})}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"x"})," and ",(0,a.jsx)(t.code,{children:"y"})," values are always between ",(0,a.jsx)(t.code,{children:"0"})," and ",(0,a.jsx)(t.code,{children:"1"}),", you can use them to calculate value in your boundaries."]}),"\n",(0,a.jsx)(t.h2,{id:"horizontal-slider",children:"Horizontal slider"}),"\n",(0,a.jsx)(t.p,{children:"You can ignore changes for one of the axis:"}),"\n",(0,a.jsx)(o,{data:h,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(t.h2,{id:"horizontal-slider-with-styles",children:"Horizontal slider with styles"}),"\n",(0,a.jsx)(o,{data:u.x}),"\n",(0,a.jsx)(t.h2,{id:"vertical-slider",children:"Vertical slider"}),"\n",(0,a.jsxs)(t.p,{children:["Moving the slider down increases the value, to reverse that set value to ",(0,a.jsx)(t.code,{children:"1 - y"})," in your ",(0,a.jsx)(t.code,{children:"setValue"})," function:"]}),"\n",(0,a.jsx)(o,{data:v,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(t.h2,{id:"color-picker",children:"Color picker"}),"\n",(0,a.jsx)(o,{data:m,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(t.h2,{id:"clampusemoveposition",children:"clampUseMovePosition"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"clampUseMovePosition"})," function can be used to clamp ",(0,a.jsx)(t.code,{children:"x"})," and ",(0,a.jsx)(t.code,{children:"y"})," values to ",(0,a.jsx)(t.code,{children:"0-1"})," range.\nIt is useful when you want to use external events to change the value, for example changing value with keyboard arrows:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { clampUseMovePosition } from '@mantine/hooks';\n\nclampUseMovePosition({ x: 0.5, y: 0.5 }); // -> { x: 0.5, y: 0.5 }\nclampUseMovePosition({ x: 1.5, y: 0.5 }); // -> { x: 1, y: 0.5 }\nclampUseMovePosition({ x: -0.5, y: 0.5 }); // -> { x: 0, y: 0.5 }\n"})}),"\n",(0,a.jsx)(t.h2,{id:"usemoveposition",children:"UseMovePosition"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"@mantine/hooks"})," exports ",(0,a.jsx)(t.code,{children:"UseMovePosition"})," type, it can be used as a type parameter for ",(0,a.jsx)(t.code,{children:"useState"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { UseMovePosition } from '@mantine/hooks';\n\nconst [value, setValue] = useState<UseMovePosition>({\n  x: 0.5,\n  y: 0.5,\n});\n"})}),"\n",(0,a.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:'interface UseMovePosition {\n  x: number;\n  y: number;\n}\n\ninterface UseMoveHandlers {\n  onScrubStart?: () => void;\n  onScrubEnd?: () => void;\n}\n\ninterface UseMoveReturnValue<T extends HTMLElement = any> {\n  ref: React.RefCallback<T | null>;\n  active: boolean;\n}\n\nfunction useMove<T extends HTMLElement = any>(\n  onChange: (value: UseMovePosition) => void,\n  handlers?: UseMoveHandlers,\n  dir?: "ltr" | "rtl",\n): UseMoveReturnValue<T>\n'})}),"\n",(0,a.jsx)(t.h2,{id:"exported-types",children:"Exported types"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"UseMovePosition"}),", ",(0,a.jsx)(t.code,{children:"UseMoveReturnValue"})," and ",(0,a.jsx)(t.code,{children:"UseMoveHandlers"})," types are exported from ",(0,a.jsx)(t.code,{children:"@mantine/hooks"})," package,\nyou can import them in your application:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import type { UseMovePosition, UseMoveHandlers, UseMoveReturnValue } from '@mantine/hooks';\n"})})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(x,{...e,children:(0,a.jsx)(f,{...e})})}},87186:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},21848:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","grip-vertical","IconGripVertical",[["path",{d:"M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}],["path",{d:"M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-4"}],["path",{d:"M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-5"}]])},89843:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a=(0,o(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},61914:(e,t,o)=>{"use strict";o.d(t,{x:()=>d});var a=o(31085),n=o(14041),i=o(21848),s=o(7235),r=o(68193),l={root:"m_1e8dea5f",track:"m_b34cb76e",filled:"m_9decab9f",empty:"m_b2774b70",thumb:"m_b34877f9",label:"m_b2d44517"};let d={type:"code",component:function(){let[e,t]=(0,n.useState)(.3),{ref:o}=(0,s.f)(({x:e})=>t((0,r.q)(e,.1,.9))),d=e<.2||e>.8;return(0,a.jsx)("div",{className:l.root,children:(0,a.jsxs)("div",{className:l.track,ref:o,children:[(0,a.jsx)("div",{className:l.filled,style:{width:`calc(${100*e}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,a.jsx)("span",{className:l.label,"data-floating":d||void 0,"data-filled":!0,children:(100*e).toFixed(0)})}),(0,a.jsx)("div",{className:l.empty,style:{width:`calc(${(1-e)*100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,a.jsx)("span",{className:l.label,"data-floating":d||void 0,children:((1-e)*100).toFixed(0)})}),(0,a.jsx)("div",{className:l.thumb,style:{left:`calc(${100*e}% - var(--thumb-width) / 2)`},children:(0,a.jsx)(i.A,{stroke:1.5})})]})})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import { IconGripVertical } from '@tabler/icons-react';
import { clamp, useMove } from '@mantine/hooks';
import classes from './Demo.module.css';

function Demo() {
  const [value, setValue] = useState(0.3);
  const { ref } = useMove(({ x }) => setValue(clamp(x, 0.1, 0.9)));
  const labelFloating = value < 0.2 || value > 0.8;

  return (
    <div className={classes.root}>
      <div className={classes.track} ref={ref}>
        <div
          className={classes.filled}
          style={{
            width: \`calc(\${value * 100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)\`,
          }}
        >
          <span className={classes.label} data-floating={labelFloating || undefined} data-filled>
            {(value * 100).toFixed(0)}
          </span>
        </div>

        <div
          className={classes.empty}
          style={{
            width: \`calc(\${(1 - value) * 100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)\`,
          }}
        >
          <span className={classes.label} data-floating={labelFloating || undefined}>
            {((1 - value) * 100).toFixed(0)}
          </span>
        </div>

        <div
          className={classes.thumb}
          style={{ left: \`calc(\${value * 100}% - var(--thumb-width) / 2)\` }}
        >
          <IconGripVertical stroke={1.5} />
        </div>
      </div>
    </div>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.root {
  padding-top: 20px;
}

.track {
  --thumb-width: 20px;
  --thumb-offset: 10px;

  position: relative;
  height: 60px;
  display: flex;
}

.filled {
  height: 100%;
  margin-right: calc(var(--thumb-offset) / 2 + var(--thumb-width) / 2);
  border-radius: var(--mantine-radius-md);
  background-color: var(--mantine-color-blue-filled);
  display: flex;
  align-items: center;
  padding-inline: 10px;
}

.empty {
  height: 100%;
  margin-left: calc(var(--thumb-offset) / 2 + var(--thumb-width) / 2);
  border-radius: var(--mantine-radius-md);
  background-color: var(--mantine-color-gray-1);
  display: flex;
  align-items: center;
  padding-inline: 10px;
  justify-content: flex-end;

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
  }
}

.thumb {
  position: absolute;
  background-color: var(--mantine-color-white);
  border: 1px solid var(--mantine-color-gray-2);
  border-radius: var(--mantine-radius-md);
  height: 100%;
  width: var(--thumb-width);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mantine-color-gray-5);

  @mixin dark {
    background-color: var(--mantine-color-dark-6);
    border-color: var(--mantine-color-dark-4);
    color: var(--mantine-color-dark-0);
  }
}

.label {
  font-size: var(--mantine-font-size-xl);
  font-weight: 700;
  transition:
    transform 100ms ease,
    color 100ms ease;

  &[data-filled] {
    color: var(--mantine-color-white);
  }

  &[data-floating] {
    transform: translateY(-44px) translateX(-10px);
    color: var(--mantine-color-black);

    &:not([data-filled]) {
      transform: translateY(-44px) translateX(10px);
    }

    @mixin dark {
      color: var(--mantine-color-white);
    }
  }
}
`,language:"scss"}],maxWidth:500,centered:!0}}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,90636,46593,38792],()=>t(76869)),_N_E=e.O()}]);