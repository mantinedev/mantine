(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var o=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let n={};for(var s in e)o(n,s,{get:e[s],enumerable:!0});return t||o(n,Symbol.toStringTag,{value:"Module"}),n}])},330573,e=>{"use strict";var o=e.i(44091),t=e.i(391466),n=e.i(956449),s=e.i(232471),r={root:"m_4451eb3a"},i=e.i(391398);let c=(0,n.polymorphicFactory)(e=>{let n=(0,o.useProps)("Center",null,e),{classNames:c,className:l,style:a,styles:d,unstyled:u,vars:g,inline:p,mod:x,attributes:h,...m}=n,v=(0,t.useStyles)({name:"Center",props:n,classes:r,className:l,style:a,classNames:c,styles:d,unstyled:u,attributes:h,vars:g});return(0,i.jsx)(s.Box,{mod:[{inline:p},x],...v("root"),...m})});c.classes=r,c.displayName="@mantine/core/Center",e.s(["Center",0,c],330573)},848719,e=>{"use strict";var o=e.i(779177),t=e.i(481178),n=e.i(44091),s=e.i(391466),r=e.i(275519),i=e.i(232471),c=e.i(317477),l=e.i(951254),a=e.i(431868),d=e.i(391398);function u({size:e,value:o,offset:t,sum:n,thickness:s,root:r,color:g,lineRoundCaps:p,tooltip:x,getStyles:h,display:m,...v}){let j=(0,l.useMantineTheme)();return(0,d.jsx)(a.Tooltip.Floating,{disabled:!x,label:x,children:(0,d.jsx)(i.Box,{component:"circle",...v,...h("curve"),__vars:{"--curve-color":g?(0,c.getThemeColor)(g,j):void 0},fill:"none",strokeLinecap:p?"round":"butt",...function({size:e,thickness:o,sum:t,value:n,root:s,offset:r}){let i=(.9*e-2*o)/2,c=Math.PI*i*2/100,l=s||void 0===n?`${(100-t)*c}, ${t*c}`:`${n*c}, ${(100-n)*c}`;return{strokeWidth:Number.isNaN(o)?12:o,cx:e/2||0,cy:e/2||0,r:i||0,transform:s?`scale(1, -1) translate(0, -${e})`:void 0,strokeDasharray:l,strokeDashoffset:s?0:r||0}}({sum:n,size:e,thickness:s,value:o,offset:t,root:r})})})}u.displayName="@mantine/core/Curve";var g={root:"m_b32e4812",svg:"m_d43b5134",curve:"m_b1ca1fbf",label:"m_b23f9dc4"},p=e.i(191788);let x={size:120,thickness:12,startAngle:270},h=(0,t.createVarsResolver)((e,{size:t,thickness:n,transitionDuration:s,startAngle:r})=>({root:{"--rp-size":(0,o.rem)(t),"--rp-label-offset":(0,o.rem)(2*n),"--rp-transition-duration":s?`${s}ms`:void 0},svg:{"--rp-start-angle":`${r}deg`}})),m=(0,r.factory)(e=>{let o=(0,n.useProps)("RingProgress",x,e),{classNames:t,className:r,style:c,styles:l,unstyled:a,vars:m,label:v,sections:j,size:f,thickness:b,roundCaps:y,rootColor:T,transitionDuration:P,sectionGap:R,startAngle:k,attributes:S,...z}=o,C=(0,s.useStyles)({name:"RingProgress",classes:g,props:o,className:r,style:c,classNames:t,styles:l,unstyled:a,attributes:S,vars:m,varsResolver:h}),A=Math.min(b||12,(f||120)/4),M=(function({size:e,thickness:o,sections:t,renderRoundedLineCaps:n,rootColor:s,sectionGap:r=0}){let i=t.reduce((e,o)=>e+o.value,0),c=(.9*e-2*o)/2*Math.PI*2,l=c,a=[],d=[],u=r/360*100;for(let e=0;e<t.length;e+=1){let o=Math.max(0,t[e].value-u);a.push({sum:i,offset:l,data:{...t[e],value:o},root:!1}),l-=t[e].value/100*c}if(a.push({sum:i,offset:l,data:{color:s},root:!0}),d.push({...a[a.length-1],lineRoundCaps:!1}),a.length>2){d.push({...a[0],lineRoundCaps:n}),d.push({...a[a.length-2],lineRoundCaps:n});for(let e=1;e<=a.length-3;e+=1)d.push({...a[e],lineRoundCaps:!1})}else d.push({...a[0],lineRoundCaps:n});return d})({size:f,thickness:A,sections:j,renderRoundedLineCaps:y,rootColor:T,sectionGap:R}).map(({data:e,sum:o,root:t,lineRoundCaps:n,offset:s},r)=>(0,p.createElement)(u,{...e,key:r,size:f,thickness:A,sum:o,offset:s,color:e?.color,root:t,lineRoundCaps:n,getStyles:C}));return(0,d.jsxs)(i.Box,{...C("root"),size:f,...z,children:[(0,d.jsx)("svg",{...C("svg"),viewBox:`0 0 ${f} ${f}`,children:M}),v&&(0,d.jsx)("div",{...C("label"),children:v})]})});m.classes=g,m.varsResolver=h,m.displayName="@mantine/core/RingProgress",e.s(["RingProgress",0,m],848719)},468691,e=>{"use strict";var o=e.i(391398),t=e.i(38856),n=e.i(648863),s=e.i(848719),r=e.i(883364);let i={type:"code",code:`
import { RingProgress, Text } from '@mantine/core';

function Demo() {
  return (
    <RingProgress
      label={
        <Text size="xs" ta="center">
          Application data usage
        </Text>
      }
      sections={[
        { value: 40, color: 'cyan' },
        { value: 15, color: 'orange' },
        { value: 15, color: 'grape' },
      ]}
    />
  );
}
`,centered:!0,component:function(){return(0,o.jsx)(s.RingProgress,{label:(0,o.jsx)(r.Text,{size:"xs",ta:"center",children:"Application data usage"}),sections:[{value:40,color:"cyan"},{value:15,color:"orange"},{value:15,color:"grape"}]})}},c={type:"configurator",component:function(e){return(0,o.jsx)(s.RingProgress,{...e,sections:[{value:40,color:"cyan"},{value:15,color:"orange"},{value:15,color:"grape"}]})},centered:!0,code:`
import { RingProgress } from '@mantine/core';

function Demo() {
  return (
    <RingProgress
      {{props}}
      sections={[
        { value: 40, color: 'cyan' },
        { value: 15, color: 'orange' },
        { value: 15, color: 'grape' },
      ]}
    />
  )
}
`,controls:[{prop:"size",type:"number",initialValue:120,step:10,min:60,max:400,libraryValue:"__"},{prop:"thickness",type:"number",initialValue:12,step:1,min:1,max:40,libraryValue:"__"},{prop:"roundCaps",type:"boolean",initialValue:!0,libraryValue:!1}]};var l=e.i(837048),a=e.i(658109),d=e.i(330573),u=e.i(725695);let g={type:"code",code:`
import { ActionIcon, RingProgress, Text, Center } from '@mantine/core';
import { CheckIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      <RingProgress
        sections={[{ value: 40, color: 'blue' }]}
        label={
          <Text c="blue" fw={700} ta="center" size="xl">
            40%
          </Text>
        }
      />

      <RingProgress
        sections={[{ value: 100, color: 'teal' }]}
        label={
          <Center>
            <ActionIcon color="teal" variant="light" radius="xl" size="xl">
              <CheckIcon size={22} />
            </ActionIcon>
          </Center>
        }
      />
    </>
  );
}
`,component:function(){return(0,o.jsxs)(u.Group,{justify:"center",children:[(0,o.jsx)(s.RingProgress,{sections:[{value:40,color:"blue"}],label:(0,o.jsx)(r.Text,{c:"blue",fw:700,ta:"center",size:"xl",children:"40%"})}),(0,o.jsx)(s.RingProgress,{sections:[{value:100,color:"teal"}],label:(0,o.jsx)(d.Center,{children:(0,o.jsx)(a.ActionIcon,{color:"teal",variant:"light",radius:"xl",size:"xl",children:(0,o.jsx)(l.CheckIcon,{size:22})})})})]})}},p={type:"code",code:`
import { RingProgress, Text } from '@mantine/core';

function Demo() {
  return (
    <RingProgress
      size={170}
      thickness={16}
      label={
        <Text size="xs" ta="center" px="xs" style={{ pointerEvents: 'none' }}>
          Hover sections to see tooltips
        </Text>
      }
      sections={[
        { value: 40, color: 'cyan', tooltip: 'Documents – 40 Gb' },
        { value: 25, color: 'orange', tooltip: 'Apps – 25 Gb' },
        { value: 15, color: 'grape', tooltip: 'Other – 15 Gb' },
      ]}
    />
  );
}
`,centered:!0,component:function(){return(0,o.jsx)(s.RingProgress,{size:170,thickness:16,label:(0,o.jsx)(r.Text,{size:"xs",ta:"center",px:"xs",style:{pointerEvents:"none"},children:"Hover sections to see tooltips"}),sections:[{value:40,color:"cyan",tooltip:"Documents – 40 Gb"},{value:25,color:"orange",tooltip:"Apps – 25 Gb"},{value:15,color:"grape",tooltip:"Other – 15 Gb"}]})}};var x=e.i(191788);let h={type:"code",component:function(){let[e,t]=(0,x.useState)(-1),n=()=>t(-1);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.RingProgress,{onMouseLeave:()=>t(-1),size:140,sections:[{value:40,color:"cyan",onMouseEnter:()=>t(0),onMouseLeave:n},{value:20,color:"blue",onMouseEnter:()=>t(1),onMouseLeave:n},{value:15,color:"indigo",onMouseEnter:()=>t(2),onMouseLeave:n}]}),(0,o.jsxs)(r.Text,{children:["Hovered section: ",-1===e?"none":e]})]})},code:`
import { useState } from 'react';
import { RingProgress, Text } from '@mantine/core';

function Demo() {
  const [hovered, setHovered] = useState(-1);
  const reset = () => setHovered(-1);
  return (
    <>
      <RingProgress
        onMouseLeave={() => setHovered(-1)}
        size={140}
        sections={[
          { value: 40, color: 'cyan', onMouseEnter: () => setHovered(0), onMouseLeave: reset },
          { value: 20, color: 'blue', onMouseEnter: () => setHovered(1), onMouseLeave: reset },
          { value: 15, color: 'indigo', onMouseEnter: () => setHovered(2), onMouseLeave: reset },
        ]}
      />
      <Text>Hovered section: {hovered === -1 ? 'none' : hovered}</Text>
    </>
  );
}
`},m={type:"code",code:`
import { RingProgress } from '@mantine/core';

function Demo() {
  return <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />;
}
`,centered:!0,component:function(){return(0,o.jsx)(s.RingProgress,{sections:[{value:40,color:"yellow"}],rootColor:"red"})}};var v=e.i(485108),j=e.i(671640);let f={type:"code",component:function(){let[e,t]=(0,x.useState)(30);return(0,o.jsxs)(j.Stack,{align:"center",children:[(0,o.jsx)(s.RingProgress,{sections:[{value:e,color:"blue"}],transitionDuration:250,label:(0,o.jsxs)(r.Text,{ta:"center",children:[e,"%"]})}),(0,o.jsx)(v.Button,{onClick:()=>t(Math.floor(100*Math.random())),children:"Set random value"})]})},code:`
import { useState } from 'react';
import { Button, RingProgress, Stack, Text } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState(30);

  return (
    <Stack align="center">
      <RingProgress
        sections={[{ value, color: 'blue' }]}
        transitionDuration={250}
        label={<Text ta="center">{value}%</Text>}
      />

      <Button onClick={() => setValue(Math.floor(Math.random() * 100))}>Set random value</Button>
    </Stack>
  );
}
`,centered:!0},b={type:"code",component:function(){let e=[{value:40,color:"cyan"},{value:25,color:"orange"},{value:15,color:"grape"}];return(0,o.jsxs)(j.Stack,{align:"center",children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(r.Text,{size:"sm",ta:"center",mb:"xs",children:"No gap (default)"}),(0,o.jsx)(s.RingProgress,{sections:e})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(r.Text,{size:"sm",ta:"center",mb:"xs",children:"5° gap"}),(0,o.jsx)(s.RingProgress,{sections:e,sectionGap:5})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(r.Text,{size:"sm",ta:"center",mb:"xs",children:"10° gap"}),(0,o.jsx)(s.RingProgress,{sections:e,sectionGap:10})]})]})},code:`
import { RingProgress, Stack, Text } from '@mantine/core';

function Demo() {
  const sections = [
    { value: 40, color: 'cyan' },
    { value: 25, color: 'orange' },
    { value: 15, color: 'grape' },
  ];

  return (
    <Stack align="center">
      <div>
        <Text size="sm" ta="center" mb="xs">
          No gap (default)
        </Text>
        <RingProgress sections={sections} />
      </div>

      <div>
        <Text size="sm" ta="center" mb="xs">
          5\xb0 gap
        </Text>
        <RingProgress sections={sections} sectionGap={5} />
      </div>

      <div>
        <Text size="sm" ta="center" mb="xs">
          10\xb0 gap
        </Text>
        <RingProgress sections={sections} sectionGap={10} />
      </div>
    </Stack>
  );
}
`},y={type:"code",component:function(){let e=[{value:40,color:"cyan"}];return(0,o.jsxs)(u.Group,{justify:"center",children:[(0,o.jsxs)(j.Stack,{align:"center",gap:"xs",children:[(0,o.jsx)(s.RingProgress,{sections:e,startAngle:0}),(0,o.jsx)(r.Text,{size:"sm",children:"0° (right)"})]}),(0,o.jsxs)(j.Stack,{align:"center",gap:"xs",children:[(0,o.jsx)(s.RingProgress,{sections:e,startAngle:90}),(0,o.jsx)(r.Text,{size:"sm",children:"90° (bottom)"})]}),(0,o.jsxs)(j.Stack,{align:"center",gap:"xs",children:[(0,o.jsx)(s.RingProgress,{sections:e,startAngle:180}),(0,o.jsx)(r.Text,{size:"sm",children:"180° (left)"})]}),(0,o.jsxs)(j.Stack,{align:"center",gap:"xs",children:[(0,o.jsx)(s.RingProgress,{sections:e,startAngle:270}),(0,o.jsx)(r.Text,{size:"sm",children:"270° (top)"})]})]})},code:`
import { Group, RingProgress, Stack, Text } from '@mantine/core';

function Demo() {
  const sections = [{ value: 40, color: 'cyan' }];

  return (
    <Group justify="center">
      <Stack align="center" gap="xs">
        <RingProgress sections={sections} startAngle={0} />
        <Text size="sm">0\xb0 (right)</Text>
      </Stack>

      <Stack align="center" gap="xs">
        <RingProgress sections={sections} startAngle={90} />
        <Text size="sm">90\xb0 (bottom)</Text>
      </Stack>

      <Stack align="center" gap="xs">
        <RingProgress sections={sections} startAngle={180} />
        <Text size="sm">180\xb0 (left)</Text>
      </Stack>

      <Stack align="center" gap="xs">
        <RingProgress sections={sections} startAngle={270} />
        <Text size="sm">270\xb0 (top)</Text>
      </Stack>
    </Group>
  );
}
`};var T=(0,n.__exportAll)({configurator:()=>c,label:()=>g,rootColor:()=>m,sectionGap:()=>b,sectionsProps:()=>h,startAngle:()=>y,tooltip:()=>p,transitions:()=>f,usage:()=>i});e.i(603441);var P=e.i(62558);e.i(457450);var R=e.i(418026);let k=(0,P.Layout)(R.MDX_DATA.RingProgress);function S(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.useMDXComponents)(),...e.components},{Demo:s}=n;return s||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"sections"})," prop accepts an array of objects with the following properties:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"value"})," – number between 0 and 100 representing the percentage of the ring to fill"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"color"})," – segment color from theme.colors or any CSS color value"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"tooltip"})," (optional) – React node to display when hovering over the section"]}),"\n",(0,o.jsxs)(n.li,{children:["Any valid SVG ",(0,o.jsx)(n.code,{children:"<circle>"})," element props (onClick, onMouseEnter, style, etc.)"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," Section values should sum to 100% or less for expected behavior. Values exceeding 100% total will cause sections to overlap."]}),"\n",(0,o.jsx)(s,{data:T.usage}),"\n",(0,o.jsx)(n.h2,{id:"size-thickness--rounded-caps",children:"Size, thickness & rounded caps"}),"\n",(0,o.jsxs)(n.p,{children:["Use the ",(0,o.jsx)(n.code,{children:"size"}),", ",(0,o.jsx)(n.code,{children:"thickness"})," & ",(0,o.jsx)(n.code,{children:"roundCaps"})," props to configure the RingProgress size and thickness values:"]}),"\n",(0,o.jsx)(s,{data:T.configurator}),"\n",(0,o.jsx)(n.h2,{id:"sections-tooltips",children:"Sections tooltips"}),"\n",(0,o.jsxs)(n.p,{children:["Add a ",(0,o.jsx)(n.code,{children:"tooltip"})," property to a section to display a floating ",(0,o.jsx)(n.a,{href:"/core/tooltip/",children:"Tooltip"})," when the user hovers over it:"]}),"\n",(0,o.jsx)(s,{data:T.tooltip}),"\n",(0,o.jsx)(n.h2,{id:"section-gaps",children:"Section gaps"}),"\n",(0,o.jsxs)(n.p,{children:["Use the ",(0,o.jsx)(n.code,{children:"sectionGap"})," prop to add visual separation between sections. The gap is specified in degrees:"]}),"\n",(0,o.jsx)(s,{data:T.sectionGap}),"\n",(0,o.jsx)(n.h2,{id:"start-angle",children:"Start angle"}),"\n",(0,o.jsxs)(n.p,{children:["Use the ",(0,o.jsx)(n.code,{children:"startAngle"})," prop to control where the progress starts. The angle is specified in degrees,\nwhere ",(0,o.jsx)(n.code,{children:"0"})," = right, ",(0,o.jsx)(n.code,{children:"90"})," = bottom, ",(0,o.jsx)(n.code,{children:"180"})," = left, and ",(0,o.jsx)(n.code,{children:"270"})," = top (default):"]}),"\n",(0,o.jsx)(s,{data:T.startAngle}),"\n",(0,o.jsx)(n.h2,{id:"background-color",children:"Background color"}),"\n",(0,o.jsxs)(n.p,{children:["Use the ",(0,o.jsx)(n.code,{children:"rootColor"})," prop to customize the color of the unfilled portion of the ring (the background):"]}),"\n",(0,o.jsx)(s,{data:T.rootColor}),"\n",(0,o.jsx)(n.h2,{id:"section-events",children:"Section events"}),"\n",(0,o.jsxs)(n.p,{children:["Each section can receive any valid SVG ",(0,o.jsx)(n.code,{children:"<circle>"})," element props, including event handlers like ",(0,o.jsx)(n.code,{children:"onClick"}),", ",(0,o.jsx)(n.code,{children:"onMouseEnter"}),", and ",(0,o.jsx)(n.code,{children:"onMouseLeave"}),":"]}),"\n",(0,o.jsx)(s,{data:T.sectionsProps}),"\n",(0,o.jsx)(n.h2,{id:"customize-label",children:"Customize label"}),"\n",(0,o.jsxs)(n.p,{children:["You can add any React node as a label, for example a ",(0,o.jsx)(n.a,{href:"/core/text/",children:"Text"})," component with custom styling\nor an ",(0,o.jsx)(n.a,{href:"/core/action-icon/",children:"ActionIcon"}),":"]}),"\n",(0,o.jsx)(s,{data:T.label}),"\n",(0,o.jsx)(n.h2,{id:"filled-segment-transition",children:"Filled segment transition"}),"\n",(0,o.jsxs)(n.p,{children:["By default, transitions are disabled. To enable them, set the ",(0,o.jsx)(n.code,{children:"transitionDuration"})," prop\nto a number of milliseconds:"]}),"\n",(0,o.jsx)(s,{data:T.transitions})]})}e.s(["default",0,function(e={}){return(0,o.jsx)(k,{...e,children:(0,o.jsx)(S,{...e})})}],468691)},715168,(e,o,t)=>{let n="/core/ring-progress";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(468691)]),o.hot&&o.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(o=>Promise.all(["static/chunks/22379_btw709h.js"].map(o=>e.l(o))).then(()=>o(493594)))},828805,e=>{e.v(o=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(o=>e.l(o))).then(()=>o(879466)))}]);