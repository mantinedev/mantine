(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68781],{62727:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/ring-progress",function(){return n(96503)}])},96503:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return I}});var t=n(52322),r=n(45392),s=n(2784),i=n(58898),l=n(11200),c=n(38483),a=n(46690),u=n(28559),d=n(82027),p=n(13588),h=n(68755),x=n(893);function m({size:e,value:o,offset:n,sum:r,thickness:s,root:i,color:l,lineRoundCaps:c,tooltip:a,getStyles:d,display:m,...g}){let v=(0,h.rZ)();return(0,t.jsx)(x.u.Floating,{disabled:!a,label:a,children:(0,t.jsx)(u.x,{component:"circle",...g,...d("curve"),__vars:{"--curve-color":l?(0,p.p)(l,v):void 0},fill:"none",strokeLinecap:c?"round":"butt",...function({size:e,thickness:o,sum:n,value:t,root:r,offset:s}){let i=(.9*e-2*o)/2,l=Math.PI*i*2/100,c=r||void 0===t?`${(100-n)*l}, ${n*l}`:`${t*l}, ${(100-t)*l}`;return{strokeWidth:Number.isNaN(o)?12:o,cx:e/2||0,cy:e/2||0,r:i||0,transform:r?`scale(1, -1) translate(0, -${e})`:void 0,strokeDasharray:c,strokeDashoffset:r?0:s||0}}({sum:r,size:e,thickness:s,value:o,offset:n,root:i})})})}m.displayName="@mantine/core/Curve";var g={root:"m_b32e4812",svg:"m_d43b5134",curve:"m_b1ca1fbf",label:"m_b23f9dc4"};let v={size:120,thickness:12},f=(0,l.Z)((e,{size:o,thickness:n,transitionDuration:t})=>({root:{"--rp-size":(0,i.h)(o),"--rp-label-offset":(0,i.h)(2*n),"--rp-transition-duration":t?`${t}ms`:void 0}})),j=(0,d.d5)((e,o)=>{let n=(0,c.w)("RingProgress",v,e),{classNames:r,className:i,style:l,styles:d,unstyled:p,vars:h,label:x,sections:j,size:b,thickness:y,roundCaps:R,rootColor:k,transitionDuration:P,...z}=n,C=(0,a.y)({name:"RingProgress",classes:g,props:n,className:i,style:l,classNames:r,styles:d,unstyled:p,vars:h,varsResolver:f}),M=Math.min(y||12,(b||120)/4),_=(function({size:e,thickness:o,sections:n,renderRoundedLineCaps:t,rootColor:r}){let s=n.reduce((e,o)=>e+o.value,0),i=(.9*e-2*o)/2*Math.PI*2,l=i,c=[],a=[];for(let e=0;e<n.length;e+=1)c.push({sum:s,offset:l,data:n[e],root:!1}),l-=n[e].value/100*i;if(c.push({sum:s,offset:l,data:{color:r},root:!0}),a.push({...c[c.length-1],lineRoundCaps:!1}),c.length>2){a.push({...c[0],lineRoundCaps:t}),a.push({...c[c.length-2],lineRoundCaps:t});for(let e=1;e<=c.length-3;e+=1)a.push({...c[e],lineRoundCaps:!1})}else a.push({...c[0],lineRoundCaps:t});return a})({size:b,thickness:M,sections:j,renderRoundedLineCaps:R,rootColor:k}).map(({data:e,sum:o,root:n,lineRoundCaps:t,offset:r},i)=>(0,s.createElement)(m,{...e,key:i,size:b,thickness:M,sum:o,offset:r,color:e?.color,root:n,lineRoundCaps:t,getStyles:C}));return(0,t.jsxs)(u.x,{...C("root"),size:b,ref:o,...z,children:[(0,t.jsx)("svg",{...C("svg"),children:_}),x&&(0,t.jsx)("div",{...C("label"),children:x})]})});j.classes=g,j.displayName="@mantine/core/RingProgress";var b=n(8582);let y={type:"code",code:`
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
`,centered:!0,component:function(){return(0,t.jsx)(j,{label:(0,t.jsx)(b.x,{size:"xs",ta:"center",children:"Application data usage"}),sections:[{value:40,color:"cyan"},{value:15,color:"orange"},{value:15,color:"grape"}]})}},R={type:"configurator",component:function(e){return(0,t.jsx)(j,{...e,sections:[{value:40,color:"cyan"},{value:15,color:"orange"},{value:15,color:"grape"}]})},centered:!0,code:`
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
`,controls:[{prop:"size",type:"number",initialValue:120,step:10,min:60,max:400,libraryValue:"__"},{prop:"thickness",type:"number",initialValue:12,step:1,min:1,max:40,libraryValue:"__"},{prop:"roundCaps",type:"boolean",initialValue:!0,libraryValue:!1}]},k={type:"code",code:`
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
`,centered:!0,component:function(){return(0,t.jsx)(j,{size:170,thickness:16,label:(0,t.jsx)(b.x,{size:"xs",ta:"center",px:"xs",style:{pointerEvents:"none"},children:"Hover sections to see tooltips"}),sections:[{value:40,color:"cyan",tooltip:"Documents – 40 Gb"},{value:25,color:"orange",tooltip:"Apps – 25 Gb"},{value:15,color:"grape",tooltip:"Other – 15 Gb"}]})}},P={type:"code",code:`
import { RingProgress } from '@mantine/core';

function Demo() {
  return <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />;
}
`,centered:!0,component:function(){return(0,t.jsx)(j,{sections:[{value:40,color:"yellow"}],rootColor:"red"})}},z={type:"code",component:function(){let[e,o]=(0,s.useState)(-1),n=()=>o(-1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(j,{onMouseLeave:()=>o(-1),size:140,sections:[{value:40,color:"cyan",onMouseEnter:()=>o(0),onMouseLeave:n},{value:20,color:"blue",onMouseEnter:()=>o(1),onMouseLeave:n},{value:15,color:"indigo",onMouseEnter:()=>o(2),onMouseLeave:n}]}),(0,t.jsxs)(b.x,{children:["Hovered section: ",-1===e?"none":e]})]})},code:`
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
`};var C=n(9705),M=n(93010),_=n(16438),T=n(54813);let w={type:"code",code:`
import { ActionIcon, RingProgress, Text, Center, rem } from '@mantine/core';
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
              <IconCheck style={{ width: rem(22), height: rem(22) }} />
            </ActionIcon>
          </Center>
        }
      />
    </>
  );
}
`,component:function(){return(0,t.jsxs)(M.Z,{justify:"center",children:[(0,t.jsx)(j,{sections:[{value:40,color:"blue"}],label:(0,t.jsx)(b.x,{c:"blue",fw:700,ta:"center",size:"xl",children:"40%"})}),(0,t.jsx)(j,{sections:[{value:100,color:"teal"}],label:(0,t.jsx)(_.M,{children:(0,t.jsx)(T.A,{color:"teal",variant:"light",radius:"xl",size:"xl",children:(0,t.jsx)(C.Z,{style:{width:(0,i.h)(22),height:(0,i.h)(22)}})})})})]})}};var E=n(65438),S=n(17115);let D={type:"code",component:function(){let[e,o]=(0,s.useState)(30);return(0,t.jsxs)(E.K,{align:"center",children:[(0,t.jsx)(j,{sections:[{value:e,color:"blue"}],transitionDuration:250,label:(0,t.jsxs)(b.x,{ta:"center",children:[e,"%"]})}),(0,t.jsx)(S.z,{onClick:()=>o(Math.floor(100*Math.random())),children:"Set random value"})]})},code:`
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
`,centered:!0};var A=n(25071),H=n(15019);let L=(0,A.A)(H.us.RingProgress);function N(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components},{Demo:n}=o;return n||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"sections"})," prop to an array of:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"value"})," – number between 0 and 100 – amount of space filled by segment"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"color"})," – segment color from theme or any other css color value"]}),"\n"]}),"\n",(0,t.jsx)(n,{data:y}),"\n",(0,t.jsx)(o.h2,{id:"size-thickness--rounded-caps",children:"Size, thickness & rounded caps"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"size"}),", ",(0,t.jsx)(o.code,{children:"thickness"})," & ",(0,t.jsx)(o.code,{children:"roundCaps"})," props to configure RingProgress, size and thickness values:"]}),"\n",(0,t.jsx)(n,{data:R}),"\n",(0,t.jsx)(o.h2,{id:"sections-tooltips",children:"Sections tooltips"}),"\n",(0,t.jsxs)(o.p,{children:["Add ",(0,t.jsx)(o.code,{children:"tooltip"})," property to section to display floating ",(0,t.jsx)(o.a,{href:"/core/tooltip/",children:"Tooltip"})," when user hovers over it:"]}),"\n",(0,t.jsx)(n,{data:k}),"\n",(0,t.jsx)(o.h2,{id:"root-color",children:"Root color"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"rootColor"})," property to change the root color:"]}),"\n",(0,t.jsx)(n,{data:P}),"\n",(0,t.jsx)(o.h2,{id:"sections-props",children:"Sections props"}),"\n",(0,t.jsx)(o.p,{children:"You can add any additional props to sections:"}),"\n",(0,t.jsx)(n,{data:z}),"\n",(0,t.jsx)(o.h2,{id:"customize-label",children:"Customize label"}),"\n",(0,t.jsxs)(o.p,{children:["You can add any React node as label, e.g. ",(0,t.jsx)(o.a,{href:"/core/text/",children:"Text"})," component with some additional styles\nor ",(0,t.jsx)(o.a,{href:"/core/theme-icon/",children:"ThemeIcon"}),":"]}),"\n",(0,t.jsx)(n,{data:w}),"\n",(0,t.jsx)(o.h2,{id:"filled-segment-transition",children:"Filled segment transition"}),"\n",(0,t.jsxs)(o.p,{children:["By default, transitions are disabled, to enable them, set ",(0,t.jsx)(o.code,{children:"transitionDuration"})," prop\nto a number of milliseconds:"]}),"\n",(0,t.jsx)(n,{data:D})]})}function I(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(L,{...e,children:(0,t.jsx)(N,{...e})})}}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=62727)}),_N_E=e.O()}]);