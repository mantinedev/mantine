(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8785],{33507:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var r=(0,o(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},12127:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hooks/use-move",function(){return o(80437)}])},80437:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return k}});var r=o(85893),n=o(11151),a=o(19905),i=o(9904),l=o(37083),s=o(67294),c=o(16262),u=o(72622),d=o(72039),h=o(56578);let m=`
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
`,v={type:"code",code:m,component:function(){let[e,t]=(0,s.useState)(.2),{ref:o}=(0,h.r)(({x:e})=>t(e));return s.createElement(s.Fragment,null,s.createElement(c.Z,{justify:"center"},s.createElement("div",{ref:o,style:{width:(0,u.h)(400),height:(0,u.h)(16),backgroundColor:"var(--mantine-color-blue-light)",position:"relative"}},s.createElement("div",{style:{width:`${100*e}%`,height:(0,u.h)(16),backgroundColor:"var(--mantine-color-blue-filled)"}}),s.createElement("div",{style:{position:"absolute",left:`calc(${100*e}% - ${(0,u.h)(8)})`,top:0,width:(0,u.h)(16),height:(0,u.h)(16),backgroundColor:"var(--mantine-color-blue-7)"}}))),s.createElement(d.x,{ta:"center",mt:"sm"},"Value: ",Math.round(100*e)))}},g=`
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
}`,p={type:"code",code:g,component:function(){let[e,t]=(0,s.useState)(.2),{ref:o}=(0,h.r)(({y:e})=>t(1-e));return s.createElement(s.Fragment,null,s.createElement(c.Z,{justify:"center"},s.createElement("div",{ref:o,style:{width:(0,u.h)(16),height:(0,u.h)(120),backgroundColor:"var(--mantine-color-blue-light)",position:"relative"}},s.createElement("div",{style:{position:"absolute",bottom:0,height:`${100*e}%`,width:(0,u.h)(16),backgroundColor:"var(--mantine-color-blue-filled)"}}),s.createElement("div",{style:{position:"absolute",bottom:`calc(${100*e}% - ${(0,u.h)(8)})`,left:0,width:(0,u.h)(16),height:(0,u.h)(16),backgroundColor:"var(--mantine-color-blue-7)"}}))),s.createElement(d.x,{ta:"center",mt:"sm"},"Value: ",Math.round(100*e)))}},f=`
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
}`,y={type:"code",code:f,component:function(){let[e,t]=(0,s.useState)({x:.2,y:.6}),{ref:o}=(0,h.r)(t);return s.createElement("div",null,s.createElement("div",{ref:o,style:{width:(0,u.h)(300),height:(0,u.h)(150),backgroundColor:"red",position:"relative"}},s.createElement("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:"linear-gradient(90deg, #fff, transparent)"}}),s.createElement("div",{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:"linear-gradient(0deg, #000, transparent)"}}),s.createElement("div",{style:{position:"absolute",left:`calc(${100*e.x}% - ${(0,u.h)(8)})`,top:`calc(${100*e.y}% - ${(0,u.h)(8)})`,width:(0,u.h)(16),height:(0,u.h)(16),border:`${(0,u.h)(2)} solid #fff`,borderRadius:(0,u.h)(16)}})))},centered:!0},b=(0,a.A)(i.us.useMove);function x(e){let t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre"},(0,n.ah)(),e.components),{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"use-move"})," handles move behavior over any element:"]}),"\n",(0,r.jsx)(o,{data:l.A}),"\n",(0,r.jsx)(t.h2,{id:"api",children:"API"}),"\n",(0,r.jsxs)(t.p,{children:["The hook accepts a callback that is called when user moves pressed mouse over the given element\nand returns an object with ",(0,r.jsx)(t.code,{children:"ref"})," and active state:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"const {\n  ref, // -> pass ref to target element\n  active, // -> is user changing something right now?\n} = useMove(({ x, y }) => setValue({ x, y }));\n"})}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"x"})," and ",(0,r.jsx)(t.code,{children:"y"})," values are always between ",(0,r.jsx)(t.code,{children:"0"})," and ",(0,r.jsx)(t.code,{children:"1"}),", you can use them to calculate value in your boundaries."]}),"\n",(0,r.jsx)(t.h2,{id:"horizontal-slider",children:"Horizontal slider"}),"\n",(0,r.jsx)(t.p,{children:"You can ignore changes for one of the axis:"}),"\n",(0,r.jsx)(o,{data:v,demoProps:{toggle:!0}}),"\n",(0,r.jsx)(t.h2,{id:"vertical-slider",children:"Vertical slider"}),"\n",(0,r.jsxs)(t.p,{children:["Moving the slider down increases the value, to reverse that set value to ",(0,r.jsx)(t.code,{children:"1 - y"})," in your ",(0,r.jsx)(t.code,{children:"setValue"})," function:"]}),"\n",(0,r.jsx)(o,{data:p,demoProps:{toggle:!0}}),"\n",(0,r.jsx)(t.h2,{id:"color-picker",children:"Color picker"}),"\n",(0,r.jsx)(o,{data:y,demoProps:{toggle:!0}}),"\n",(0,r.jsx)(t.h2,{id:"definition",children:"Definition"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"function useMove<T extends HTMLElement = HTMLDivElement>(\n  onChange: (value: UseMovePosition) => void,\n  handlers?: useMoveHandlers,\n  dir?: 'ltr' | 'rtl'\n): {\n  ref: MutableRefObject<T>;\n  active: boolean;\n};\n"})})]})}var k=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(b,Object.assign({},e,{children:(0,r.jsx)(x,e)}))}},37083:function(e,t,o){"use strict";o.d(t,{A:function(){return u}});var r=o(67294),n=o(16262),a=o(72622),i=o(72039),l=o(53777),s=o(56578);let c=`
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
}`,u={type:"code",code:c,component:function(){let[e,t]=(0,r.useState)({x:.2,y:.6}),{ref:o,active:c}=(0,s.r)(t);return r.createElement(r.Fragment,null,r.createElement(n.Z,{justify:"center"},r.createElement("div",{ref:o,style:{width:(0,a.h)(400),height:(0,a.h)(120),backgroundColor:"var(--mantine-color-blue-light)",position:"relative"}},r.createElement("div",{style:{position:"absolute",left:`calc(${100*e.x}% - ${(0,a.h)(8)})`,top:`calc(${100*e.y}% - ${(0,a.h)(8)})`,width:(0,a.h)(16),height:(0,a.h)(16),backgroundColor:c?"var(--mantine-color-teal-7)":"var(--mantine-color-blue-7)"}}))),r.createElement(i.x,{ta:"center",mt:"sm"},"Values ",r.createElement(l.E,null,`{ x: ${Math.round(100*e.x)}, y: ${Math.round(100*e.y)} }`)))}}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=12127)}),_N_E=e.O()}]);