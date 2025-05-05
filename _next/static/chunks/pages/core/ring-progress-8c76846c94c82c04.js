(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86754],{57189:(e,o,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/ring-progress",function(){return t(54894)}])},54894:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>N});var n=t(31085),s=t(71184),r=t(14041),a=t(39735),l=t(7098),i=t(29686),c=t(69564),d=t(34056),u=t(6754),h=t(51606),p=t(92408),v=t(2912);function g({size:e,value:o,offset:t,sum:s,thickness:r,root:a,color:l,lineRoundCaps:i,tooltip:c,getStyles:u,display:g,...x}){let m=(0,p.xd)();return(0,n.jsx)(v.m.Floating,{disabled:!c,label:c,children:(0,n.jsx)(d.a,{component:"circle",...x,...u("curve"),__vars:{"--curve-color":l?(0,h.r)(l,m):void 0},fill:"none",strokeLinecap:i?"round":"butt",...function({size:e,thickness:o,sum:t,value:n,root:s,offset:r}){let a=(.9*e-2*o)/2,l=Math.PI*a*2/100,i=s||void 0===n?`${(100-t)*l}, ${t*l}`:`${n*l}, ${(100-n)*l}`;return{strokeWidth:Number.isNaN(o)?12:o,cx:e/2||0,cy:e/2||0,r:a||0,transform:s?`scale(1, -1) translate(0, -${e})`:void 0,strokeDasharray:i,strokeDashoffset:s?0:r||0}}({sum:s,size:e,thickness:r,value:o,offset:t,root:a})})})}g.displayName="@mantine/core/Curve";var x={root:"m_b32e4812",svg:"m_d43b5134",curve:"m_b1ca1fbf",label:"m_b23f9dc4"};let m={size:120,thickness:12},y=(0,l.V)((e,{size:o,thickness:t,transitionDuration:n})=>({root:{"--rp-size":(0,a.D)(o),"--rp-label-offset":(0,a.D)(2*t),"--rp-transition-duration":n?`${n}ms`:void 0}})),f=(0,u.P9)((e,o)=>{let t=(0,i.Y)("RingProgress",m,e),{classNames:s,className:a,style:l,styles:u,unstyled:h,vars:p,label:v,sections:f,size:j,thickness:k,roundCaps:M,rootColor:b,transitionDuration:A,...R}=t,P=(0,c.I)({name:"RingProgress",classes:x,props:t,className:a,style:l,classNames:s,styles:u,unstyled:h,vars:p,varsResolver:y}),z=Math.min(k||12,(j||120)/4),C=(function({size:e,thickness:o,sections:t,renderRoundedLineCaps:n,rootColor:s}){let r=t.reduce((e,o)=>e+o.value,0),a=(.9*e-2*o)/2*Math.PI*2,l=a,i=[],c=[];for(let e=0;e<t.length;e+=1)i.push({sum:r,offset:l,data:t[e],root:!1}),l-=t[e].value/100*a;if(i.push({sum:r,offset:l,data:{color:s},root:!0}),c.push({...i[i.length-1],lineRoundCaps:!1}),i.length>2){c.push({...i[0],lineRoundCaps:n}),c.push({...i[i.length-2],lineRoundCaps:n});for(let e=1;e<=i.length-3;e+=1)c.push({...i[e],lineRoundCaps:!1})}else c.push({...i[0],lineRoundCaps:n});return c})({size:j,thickness:z,sections:f,renderRoundedLineCaps:M,rootColor:b}).map(({data:e,sum:o,root:t,lineRoundCaps:n,offset:s},a)=>(0,r.createElement)(g,{...e,key:a,size:j,thickness:z,sum:o,offset:s,color:e?.color,root:t,lineRoundCaps:n,getStyles:P}));return(0,n.jsxs)(d.a,{...P("root"),size:j,ref:o,...R,children:[(0,n.jsx)("svg",{...P("svg"),children:C}),v&&(0,n.jsx)("div",{...P("label"),children:v})]})});f.classes=x,f.displayName="@mantine/core/RingProgress";var j=t(93065);let k={type:"code",code:`
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
`,centered:!0,component:function(){return(0,n.jsx)(f,{label:(0,n.jsx)(j.E,{size:"xs",ta:"center",children:"Application data usage"}),sections:[{value:40,color:"cyan"},{value:15,color:"orange"},{value:15,color:"grape"}]})}},M={type:"configurator",component:function(e){return(0,n.jsx)(f,{...e,sections:[{value:40,color:"cyan"},{value:15,color:"orange"},{value:15,color:"grape"}]})},centered:!0,code:`
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
`,controls:[{prop:"size",type:"number",initialValue:120,step:10,min:60,max:400,libraryValue:"__"},{prop:"thickness",type:"number",initialValue:12,step:1,min:1,max:40,libraryValue:"__"},{prop:"roundCaps",type:"boolean",initialValue:!0,libraryValue:!1}]},b={type:"code",code:`
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
        { value: 40, color: 'cyan', tooltip: 'Documents \u2013 40 Gb' },
        { value: 25, color: 'orange', tooltip: 'Apps \u2013 25 Gb' },
        { value: 15, color: 'grape', tooltip: 'Other \u2013 15 Gb' },
      ]}
    />
  );
}
`,centered:!0,component:function(){return(0,n.jsx)(f,{size:170,thickness:16,label:(0,n.jsx)(j.E,{size:"xs",ta:"center",px:"xs",style:{pointerEvents:"none"},children:"Hover sections to see tooltips"}),sections:[{value:40,color:"cyan",tooltip:"Documents – 40 Gb"},{value:25,color:"orange",tooltip:"Apps – 25 Gb"},{value:15,color:"grape",tooltip:"Other – 15 Gb"}]})}},A={type:"code",code:`
import { RingProgress } from '@mantine/core';

function Demo() {
  return <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />;
}
`,centered:!0,component:function(){return(0,n.jsx)(f,{sections:[{value:40,color:"yellow"}],rootColor:"red"})}},R={type:"code",component:function(){let[e,o]=(0,r.useState)(-1),t=()=>o(-1);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f,{onMouseLeave:()=>o(-1),size:140,sections:[{value:40,color:"cyan",onMouseEnter:()=>o(0),onMouseLeave:t},{value:20,color:"blue",onMouseEnter:()=>o(1),onMouseLeave:t},{value:15,color:"indigo",onMouseEnter:()=>o(2),onMouseLeave:t}]}),(0,n.jsxs)(j.E,{children:["Hovered section: ",-1===e?"none":e]})]})},code:`
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
`};var P=t(11466),z=t(56051),C=t(73687),_=t(22962);let E={type:"code",code:`
import { ActionIcon, RingProgress, Text, Center } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

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
              <IconCheck size={22} />
            </ActionIcon>
          </Center>
        }
      />
    </>
  );
}
`,component:function(){return(0,n.jsxs)(z.Y,{justify:"center",children:[(0,n.jsx)(f,{sections:[{value:40,color:"blue"}],label:(0,n.jsx)(j.E,{c:"blue",fw:700,ta:"center",size:"xl",children:"40%"})}),(0,n.jsx)(f,{sections:[{value:100,color:"teal"}],label:(0,n.jsx)(C.o,{children:(0,n.jsx)(_.M,{color:"teal",variant:"light",radius:"xl",size:"xl",children:(0,n.jsx)(P.A,{size:22})})})})]})}};var T=t(75390),w=t(52022);let I={type:"code",component:function(){let[e,o]=(0,r.useState)(30);return(0,n.jsxs)(T.B,{align:"center",children:[(0,n.jsx)(f,{sections:[{value:e,color:"blue"}],transitionDuration:250,label:(0,n.jsxs)(j.E,{ta:"center",children:[e,"%"]})}),(0,n.jsx)(w.$,{onClick:()=>o(Math.floor(100*Math.random())),children:"Set random value"})]})},code:`
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
`,centered:!0};var D=t(18675),S=t(20017);let L=(0,D.P)(S.XZ.RingProgress);function H(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components},{Demo:t}=o;return t||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(o.p,{children:["Set ",(0,n.jsx)(o.code,{children:"sections"})," prop to an array of:"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"value"})," – number between 0 and 100 – amount of space filled by segment"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.code,{children:"color"})," – segment color from theme or any other css color value"]}),"\n"]}),"\n",(0,n.jsx)(t,{data:k}),"\n",(0,n.jsx)(o.h2,{id:"size-thickness--rounded-caps",children:"Size, thickness & rounded caps"}),"\n",(0,n.jsxs)(o.p,{children:["Use ",(0,n.jsx)(o.code,{children:"size"}),", ",(0,n.jsx)(o.code,{children:"thickness"})," & ",(0,n.jsx)(o.code,{children:"roundCaps"})," props to configure RingProgress, size and thickness values:"]}),"\n",(0,n.jsx)(t,{data:M}),"\n",(0,n.jsx)(o.h2,{id:"sections-tooltips",children:"Sections tooltips"}),"\n",(0,n.jsxs)(o.p,{children:["Add ",(0,n.jsx)(o.code,{children:"tooltip"})," property to section to display floating ",(0,n.jsx)(o.a,{href:"/core/tooltip/",children:"Tooltip"})," when user hovers over it:"]}),"\n",(0,n.jsx)(t,{data:b}),"\n",(0,n.jsx)(o.h2,{id:"root-color",children:"Root color"}),"\n",(0,n.jsxs)(o.p,{children:["Use ",(0,n.jsx)(o.code,{children:"rootColor"})," property to change the root color:"]}),"\n",(0,n.jsx)(t,{data:A}),"\n",(0,n.jsx)(o.h2,{id:"sections-props",children:"Sections props"}),"\n",(0,n.jsx)(o.p,{children:"You can add any additional props to sections:"}),"\n",(0,n.jsx)(t,{data:R}),"\n",(0,n.jsx)(o.h2,{id:"customize-label",children:"Customize label"}),"\n",(0,n.jsxs)(o.p,{children:["You can add any React node as label, e.g. ",(0,n.jsx)(o.a,{href:"/core/text/",children:"Text"})," component with some additional styles\nor ",(0,n.jsx)(o.a,{href:"/core/theme-icon/",children:"ThemeIcon"}),":"]}),"\n",(0,n.jsx)(t,{data:E}),"\n",(0,n.jsx)(o.h2,{id:"filled-segment-transition",children:"Filled segment transition"}),"\n",(0,n.jsxs)(o.p,{children:["By default, transitions are disabled, to enable them, set ",(0,n.jsx)(o.code,{children:"transitionDuration"})," prop\nto a number of milliseconds:"]}),"\n",(0,n.jsx)(t,{data:I})]})}function N(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(L,{...e,children:(0,n.jsx)(H,{...e})})}},87186:(e,o,t)=>{"use strict";t.d(o,{A:()=>n});var n=(0,t(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,o,t)=>{"use strict";t.d(o,{A:()=>n});var n=(0,t(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,o,t)=>{"use strict";t.d(o,{A:()=>n});var n=(0,t(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,o,t)=>{"use strict";t.d(o,{A:()=>n});var n=(0,t(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,o,t)=>{"use strict";t.d(o,{A:()=>n});var n=(0,t(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,o,t)=>{"use strict";t.d(o,{A:()=>n});var n=(0,t(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,o,t)=>{"use strict";t.d(o,{A:()=>n});var n=(0,t(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,o,t)=>{"use strict";t.d(o,{A:()=>n});var n=(0,t(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,o,t)=>{"use strict";t.d(o,{A:()=>n});var n=(0,t(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])}},e=>{var o=o=>e(e.s=o);e.O(0,[18675,90636,46593,38792],()=>o(57189)),_N_E=e.O()}]);