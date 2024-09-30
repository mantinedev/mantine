(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18785],{42158:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-move",function(){return o(67239)}])},67239:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return b}});var n=o(52322),r=o(45392),a=o(61465),i=o(2784),s=o(93010),l=o(58898),c=o(8582),d=o(51438);let u={type:"code",code:`
import { useState } from 'react';
import { Group, Text, rem } from '@mantine/core';
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
            width: rem(400),
            height: rem(16),
            backgroundColor: 'var(--mantine-color-blue-light)',
            position: 'relative',
          }}
        >
          {/* Filled bar */}
          <div
            style={{
              width: \`\${value * 100}%\`,
              height: rem(16),
              backgroundColor: 'var(--mantine-color-blue-filled)',
              opacity: 0.7,
            }}
          />

          {/* Thumb */}
          <div
            style={{
              position: 'absolute',
              left: \`calc(\${value * 100}% - \${rem(8)})\`,
              top: 0,
              width: rem(16),
              height: rem(16),
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
`,component:function(){let[e,t]=(0,i.useState)(.2),{ref:o}=(0,d.r)(({x:e})=>t(e));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{justify:"center",children:(0,n.jsxs)("div",{ref:o,style:{width:(0,l.h)(400),height:(0,l.h)(16),backgroundColor:"var(--mantine-color-blue-light)",position:"relative"},children:[(0,n.jsx)("div",{style:{width:`${100*e}%`,height:(0,l.h)(16),backgroundColor:"var(--mantine-color-blue-filled)",opacity:.7}}),(0,n.jsx)("div",{style:{position:"absolute",left:`calc(${100*e}% - ${(0,l.h)(8)})`,top:0,width:(0,l.h)(16),height:(0,l.h)(16),backgroundColor:"var(--mantine-color-blue-7)"}})]})}),(0,n.jsxs)(c.x,{ta:"center",mt:"sm",children:["Value: ",Math.round(100*e)]})]})}};var h=o(76924);let m={type:"code",code:`
import { useState } from 'react';
import { Group, Text, rem } from '@mantine/core';
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
            width: rem(16),
            height: rem(120),
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
              width: rem(16),
              backgroundColor: 'var(--mantine-color-blue-filled)',
              opacity: 0.7,
            }}
          />

          {/* Thumb */}
          <div
            style={{
              position: 'absolute',
              bottom: \`calc(\${value * 100}% - \${rem(8)})\`,
              left: 0,
              width: rem(16),
              height: rem(16),
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
}`,component:function(){let[e,t]=(0,i.useState)(.2),{ref:o}=(0,d.r)(({y:e})=>t(1-e));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{justify:"center",children:(0,n.jsxs)("div",{ref:o,style:{width:(0,l.h)(16),height:(0,l.h)(120),backgroundColor:"var(--mantine-color-blue-light)",position:"relative"},children:[(0,n.jsx)("div",{style:{position:"absolute",bottom:0,height:`${100*e}%`,width:(0,l.h)(16),backgroundColor:"var(--mantine-color-blue-filled)",opacity:.7}}),(0,n.jsx)("div",{style:{position:"absolute",bottom:`calc(${100*e}% - ${(0,l.h)(8)})`,left:0,width:(0,l.h)(16),height:(0,l.h)(16),backgroundColor:"var(--mantine-color-blue-7)"}})]})}),(0,n.jsxs)(c.x,{ta:"center",mt:"sm",children:["Value: ",Math.round(100*e)]})]})}},v={type:"code",code:`
import { useState } from 'react';
import { rem } from '@mantine/core';
import { useMove } from '@mantine/hooks';

function Demo() {
  const [value, setValue] = useState({ x: 0.2, y: 0.6 });
  const { ref } = useMove(setValue);

  return (
    <div>
      <div
        ref={ref}
        style={{
          width: rem(300),
          height: rem(150),
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
            left: \`calc(\${value.x * 100}% - \${rem(8)})\`,
            top: \`calc(\${value.y * 100}% - \${rem(8)})\`,
            width: rem(16),
            height: rem(16),
            border: \`\${rem(2)} solid #fff\`,
            borderRadius: rem(16),
          }}
        />
      </div>
    </div>
  );
}`,component:function(){let[e,t]=(0,i.useState)({x:.2,y:.6}),{ref:o}=(0,d.r)(t);return(0,n.jsx)("div",{children:(0,n.jsxs)("div",{ref:o,style:{width:(0,l.h)(300),height:(0,l.h)(150),backgroundColor:"red",position:"relative"},children:[(0,n.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:"linear-gradient(90deg, #fff, transparent)"}}),(0,n.jsx)("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:"linear-gradient(0deg, #000, transparent)"}}),(0,n.jsx)("div",{style:{position:"absolute",left:`calc(${100*e.x}% - ${(0,l.h)(8)})`,top:`calc(${100*e.y}% - ${(0,l.h)(8)})`,width:(0,l.h)(16),height:(0,l.h)(16),border:`${(0,l.h)(2)} solid #fff`,borderRadius:(0,l.h)(16)}})]})})},centered:!0};var p=o(25071),f=o(15019);let x=(0,p.A)(f.us.useMove);function g(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"use-move"})," handles move behavior over any element:"]}),"\n",(0,n.jsx)(o,{data:a.A}),"\n",(0,n.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,n.jsxs)(t.p,{children:["The hook accepts a callback that is called when user moves pressed mouse over the given element\nand returns an object with ",(0,n.jsx)(t.code,{children:"ref"})," and active state:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useMove } from '@mantine/hooks';\n\nconst {\n  ref, // -> pass ref to target element\n  active, // -> is user changing something right now?\n} = useMove(({ x, y }) => console.log({ x, y }));\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"x"})," and ",(0,n.jsx)(t.code,{children:"y"})," values are always between ",(0,n.jsx)(t.code,{children:"0"})," and ",(0,n.jsx)(t.code,{children:"1"}),", you can use them to calculate value in your boundaries."]}),"\n",(0,n.jsx)(t.h2,{id:"horizontal-slider",children:"Horizontal slider"}),"\n",(0,n.jsx)(t.p,{children:"You can ignore changes for one of the axis:"}),"\n",(0,n.jsx)(o,{data:u,demoProps:{toggle:!0}}),"\n",(0,n.jsx)(t.h2,{id:"horizontal-slider-with-styles",children:"Horizontal slider with styles"}),"\n",(0,n.jsx)(o,{data:h.H}),"\n",(0,n.jsx)(t.h2,{id:"vertical-slider",children:"Vertical slider"}),"\n",(0,n.jsxs)(t.p,{children:["Moving the slider down increases the value, to reverse that set value to ",(0,n.jsx)(t.code,{children:"1 - y"})," in your ",(0,n.jsx)(t.code,{children:"setValue"})," function:"]}),"\n",(0,n.jsx)(o,{data:m,demoProps:{toggle:!0}}),"\n",(0,n.jsx)(t.h2,{id:"color-picker",children:"Color picker"}),"\n",(0,n.jsx)(o,{data:v,demoProps:{toggle:!0}}),"\n",(0,n.jsx)(t.h2,{id:"clampusemoveposition",children:"clampUseMovePosition"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"clampUseMovePosition"})," function can be used to clamp ",(0,n.jsx)(t.code,{children:"x"})," and ",(0,n.jsx)(t.code,{children:"y"})," values to ",(0,n.jsx)(t.code,{children:"0-1"})," range.\nIt is useful when you want to use external events to change the value, for example changing value with keyboard arrows:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { clampUseMovePosition } from '@mantine/hooks';\n\nclampUseMovePosition({ x: 0.5, y: 0.5 }); // -> { x: 0.5, y: 0.5 }\nclampUseMovePosition({ x: 1.5, y: 0.5 }); // -> { x: 1, y: 0.5 }\nclampUseMovePosition({ x: -0.5, y: 0.5 }); // -> { x: 0, y: 0.5 }\n"})}),"\n",(0,n.jsx)(t.h2,{id:"usemoveposition",children:"UseMovePosition"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"@mantine/hooks"})," exports ",(0,n.jsx)(t.code,{children:"UseMovePosition"})," type, it can be used as a type parameter for ",(0,n.jsx)(t.code,{children:"useState"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { UseMovePosition } from '@mantine/hooks';\n\nconst [value, setValue] = useState<UseMovePosition>({\n  x: 0.5,\n  y: 0.5,\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"interface UseMovePosition {\n  x: number;\n  y: number;\n}\n\ninterface useMoveHandlers {\n  onScrubStart?: () => void;\n  onScrubEnd?: () => void;\n}\n\nfunction useMove<T extends HTMLElement = HTMLDivElement>(\n  onChange: (value: UseMovePosition) => void,\n  handlers?: useMoveHandlers,\n  dir?: 'ltr' | 'rtl'\n): {\n  ref: React.RefObject<T>;\n  active: boolean;\n};\n"})})]})}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(x,{...e,children:(0,n.jsx)(g,{...e})})}},18064:function(e,t,o){"use strict";o.d(t,{Z:function(){return n}});var n=(0,o(73681).Z)("outline","grip-vertical","IconGripVertical",[["path",{d:"M9 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M9 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M9 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M15 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}],["path",{d:"M15 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-4"}],["path",{d:"M15 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-5"}]])},76924:function(e,t,o){"use strict";o.d(t,{H:function(){return c}});var n=o(52322),r=o(2784),a=o(18064),i=o(51438),s=o(82692),l="m_b2d44517";let c={type:"code",component:function(){let[e,t]=(0,r.useState)(.3),{ref:o}=(0,i.r)(({x:e})=>t((0,s.u)(e,.1,.9))),c=e<.2||e>.8;return(0,n.jsx)("div",{className:"m_1e8dea5f",children:(0,n.jsxs)("div",{className:"m_b34cb76e",ref:o,children:[(0,n.jsx)("div",{className:"m_9decab9f",style:{width:`calc(${100*e}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,n.jsx)("span",{className:l,"data-floating":c||void 0,"data-filled":!0,children:(100*e).toFixed(0)})}),(0,n.jsx)("div",{className:"m_b2774b70",style:{width:`calc(${(1-e)*100}% - var(--thumb-width) / 2 - var(--thumb-offset) / 2)`},children:(0,n.jsx)("span",{className:l,"data-floating":c||void 0,children:((1-e)*100).toFixed(0)})}),(0,n.jsx)("div",{className:"m_b34877f9",style:{left:`calc(${100*e}% - var(--thumb-width) / 2)`},children:(0,n.jsx)(a.Z,{stroke:1.5})})]})})},code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}],maxWidth:500,centered:!0}},61465:function(e,t,o){"use strict";o.d(t,{A:function(){return d}});var n=o(52322),r=o(2784),a=o(93010),i=o(58898),s=o(8582),l=o(45909),c=o(51438);let d={type:"code",code:`
import { useState } from 'react';
import { Group, Text, Code, rem } from '@mantine/core';
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
            width: rem(400),
            height: rem(120),
            backgroundColor: 'var(--mantine-color-blue-light)',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: \`calc(\${value.x * 100}% - \${rem(8)})\`,
              top: \`calc(\${value.y * 100}% - \${rem(8)})\`,
              width: rem(16),
              height: rem(16),
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
}`,component:function(){let[e,t]=(0,r.useState)({x:.2,y:.6}),{ref:o,active:d}=(0,c.r)(t);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.Z,{justify:"center",children:(0,n.jsx)("div",{ref:o,style:{width:(0,i.h)(400),height:(0,i.h)(120),backgroundColor:"var(--mantine-color-blue-light)",position:"relative"},children:(0,n.jsx)("div",{style:{position:"absolute",left:`calc(${100*e.x}% - ${(0,i.h)(8)})`,top:`calc(${100*e.y}% - ${(0,i.h)(8)})`,width:(0,i.h)(16),height:(0,i.h)(16),backgroundColor:d?"var(--mantine-color-teal-7)":"var(--mantine-color-blue-7)"}})})}),(0,n.jsxs)(s.x,{ta:"center",mt:"sm",children:["Values ",(0,n.jsx)(l.E,{children:`{ x: ${Math.round(100*e.x)}, y: ${Math.round(100*e.y)} }`})]})]})}}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=42158)}),_N_E=e.O()}]);