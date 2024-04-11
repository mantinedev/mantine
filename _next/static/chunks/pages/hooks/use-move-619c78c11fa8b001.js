(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[18785],{42158:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-move",function(){return o(67239)}])},67239:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return y}});var n=o(52322),r=o(45392),i=o(61465),a=o(2784),l=o(93010),s=o(58898),Text=o(8582),c=o(51438);let d=`
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
`,u={type:"code",code:d,component:function(){let[e,t]=(0,a.useState)(.2),{ref:o}=(0,c.r)(({x:e})=>t(e));return a.createElement(a.Fragment,null,a.createElement(l.Z,{justify:"center"},a.createElement("div",{ref:o,style:{width:(0,s.h)(400),height:(0,s.h)(16),backgroundColor:"var(--mantine-color-blue-light)",position:"relative"}},a.createElement("div",{style:{width:`${100*e}%`,height:(0,s.h)(16),backgroundColor:"var(--mantine-color-blue-filled)"}}),a.createElement("div",{style:{position:"absolute",left:`calc(${100*e}% - ${(0,s.h)(8)})`,top:0,width:(0,s.h)(16),height:(0,s.h)(16),backgroundColor:"var(--mantine-color-blue-7)"}}))),a.createElement(Text.x,{ta:"center",mt:"sm"},"Value: ",Math.round(100*e)))}},h=`
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
}`,m={type:"code",code:h,component:function(){let[e,t]=(0,a.useState)(.2),{ref:o}=(0,c.r)(({y:e})=>t(1-e));return a.createElement(a.Fragment,null,a.createElement(l.Z,{justify:"center"},a.createElement("div",{ref:o,style:{width:(0,s.h)(16),height:(0,s.h)(120),backgroundColor:"var(--mantine-color-blue-light)",position:"relative"}},a.createElement("div",{style:{position:"absolute",bottom:0,height:`${100*e}%`,width:(0,s.h)(16),backgroundColor:"var(--mantine-color-blue-filled)"}}),a.createElement("div",{style:{position:"absolute",bottom:`calc(${100*e}% - ${(0,s.h)(8)})`,left:0,width:(0,s.h)(16),height:(0,s.h)(16),backgroundColor:"var(--mantine-color-blue-7)"}}))),a.createElement(Text.x,{ta:"center",mt:"sm"},"Value: ",Math.round(100*e)))}},v=`
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
}`,p={type:"code",code:v,component:function(){let[e,t]=(0,a.useState)({x:.2,y:.6}),{ref:o}=(0,c.r)(t);return a.createElement("div",null,a.createElement("div",{ref:o,style:{width:(0,s.h)(300),height:(0,s.h)(150),backgroundColor:"red",position:"relative"}},a.createElement("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:"linear-gradient(90deg, #fff, transparent)"}}),a.createElement("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:"linear-gradient(0deg, #000, transparent)"}}),a.createElement("div",{style:{position:"absolute",left:`calc(${100*e.x}% - ${(0,s.h)(8)})`,top:`calc(${100*e.y}% - ${(0,s.h)(8)})`,width:(0,s.h)(16),height:(0,s.h)(16),border:`${(0,s.h)(2)} solid #fff`,borderRadius:(0,s.h)(16)}})))},centered:!0};var f=o(79016),g=o(33638);let x=(0,f.A)(g.us.useMove);function b(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"use-move"})," handles move behavior over any element:"]}),"\n",(0,n.jsx)(o,{data:i.A}),"\n",(0,n.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,n.jsxs)(t.p,{children:["The hook accepts a callback that is called when user moves pressed mouse over the given element\nand returns an object with ",(0,n.jsx)(t.code,{children:"ref"})," and active state:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useMove } from '@mantine/hooks';\n\nconst {\n  ref, // -> pass ref to target element\n  active, // -> is user changing something right now?\n} = useMove(({ x, y }) => console.log({ x, y }));\n"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"x"})," and ",(0,n.jsx)(t.code,{children:"y"})," values are always between ",(0,n.jsx)(t.code,{children:"0"})," and ",(0,n.jsx)(t.code,{children:"1"}),", you can use them to calculate value in your boundaries."]}),"\n",(0,n.jsx)(t.h2,{id:"horizontal-slider",children:"Horizontal slider"}),"\n",(0,n.jsx)(t.p,{children:"You can ignore changes for one of the axis:"}),"\n",(0,n.jsx)(o,{data:u,demoProps:{toggle:!0}}),"\n",(0,n.jsx)(t.h2,{id:"vertical-slider",children:"Vertical slider"}),"\n",(0,n.jsxs)(t.p,{children:["Moving the slider down increases the value, to reverse that set value to ",(0,n.jsx)(t.code,{children:"1 - y"})," in your ",(0,n.jsx)(t.code,{children:"setValue"})," function:"]}),"\n",(0,n.jsx)(o,{data:m,demoProps:{toggle:!0}}),"\n",(0,n.jsx)(t.h2,{id:"color-picker",children:"Color picker"}),"\n",(0,n.jsx)(o,{data:p,demoProps:{toggle:!0}}),"\n",(0,n.jsx)(t.h2,{id:"clampusemoveposition",children:"clampUseMovePosition"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"clampUseMovePosition"})," function can be used to clamp ",(0,n.jsx)(t.code,{children:"x"})," and ",(0,n.jsx)(t.code,{children:"y"})," values to ",(0,n.jsx)(t.code,{children:"0-1"})," range.\nIt is useful when you want to use external events to change the value, for example changing value with keyboard arrows:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { clampUseMovePosition } from '@mantine/hooks';\n\nclampUseMovePosition({ x: 0.5, y: 0.5 }); // -> { x: 0.5, y: 0.5 }\nclampUseMovePosition({ x: 1.5, y: 0.5 }); // -> { x: 1, y: 0.5 }\nclampUseMovePosition({ x: -0.5, y: 0.5 }); // -> { x: 0, y: 0.5 }\n"})}),"\n",(0,n.jsx)(t.h2,{id:"usemoveposition",children:"UseMovePosition"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"@mantine/hooks"})," exports ",(0,n.jsx)(t.code,{children:"UseMovePosition"})," type, it can be used as a type parameter for ",(0,n.jsx)(t.code,{children:"useState"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { UseMovePosition } from '@mantine/hooks';\n\nconst [value, setValue] = useState<UseMovePosition>({\n  x: 0.5,\n  y: 0.5,\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"interface UseMovePosition {\n  x: number;\n  y: number;\n}\n\ninterface useMoveHandlers {\n  onScrubStart?: () => void;\n  onScrubEnd?: () => void;\n}\n\nfunction useMove<T extends HTMLElement = HTMLDivElement>(\n  onChange: (value: UseMovePosition) => void,\n  handlers?: useMoveHandlers,\n  dir?: 'ltr' | 'rtl'\n): {\n  ref: React.RefObject<T>;\n  active: boolean;\n};\n"})})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(x,{...e,children:(0,n.jsx)(b,{...e})})}},61465:function(e,t,o){"use strict";o.d(t,{A:function(){return d}});var n=o(2784),r=o(93010),i=o(58898),a=o(8582),l=o(45909),s=o(51438);let c=`
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
}`,d={type:"code",code:c,component:function(){let[e,t]=(0,n.useState)({x:.2,y:.6}),{ref:o,active:c}=(0,s.r)(t);return n.createElement(n.Fragment,null,n.createElement(r.Z,{justify:"center"},n.createElement("div",{ref:o,style:{width:(0,i.h)(400),height:(0,i.h)(120),backgroundColor:"var(--mantine-color-blue-light)",position:"relative"}},n.createElement("div",{style:{position:"absolute",left:`calc(${100*e.x}% - ${(0,i.h)(8)})`,top:`calc(${100*e.y}% - ${(0,i.h)(8)})`,width:(0,i.h)(16),height:(0,i.h)(16),backgroundColor:c?"var(--mantine-color-teal-7)":"var(--mantine-color-blue-7)"}}))),n.createElement(a.x,{ta:"center",mt:"sm"},"Values ",n.createElement(l.E,null,`{ x: ${Math.round(100*e.x)}, y: ${Math.round(100*e.y)} }`)))}}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=42158)}),_N_E=e.O()}]);