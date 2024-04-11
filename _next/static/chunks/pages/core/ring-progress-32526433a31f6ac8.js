(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[68781],{62727:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/ring-progress",function(){return n(44711)}])},44711:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return V}});var t=n(52322),r=n(45392),s=n(2784),l=n(58898),c=n(11200),a=n(38483),i=n(62378),u=n(28559),d=n(82027),p=n(13588),m=n(68755),h=n(893);function v({size:e,value:o,offset:n,sum:t,thickness:r,root:l,color:c,lineRoundCaps:a,tooltip:i,getStyles:d,display:v,...g}){let x=(0,m.rZ)();return s.createElement(h.u.Floating,{disabled:!i,label:i},s.createElement(u.x,{component:"circle",...g,...d("curve"),__vars:{"--curve-color":c?(0,p.p)(c,x):void 0},fill:"none",strokeLinecap:a?"round":"butt",...function({size:e,thickness:o,sum:n,value:t,root:r,offset:s}){let l=(.9*e-2*o)/2,c=Math.PI*l*2/100,a=r||void 0===t?`${(100-n)*c}, ${n*c}`:`${t*c}, ${(100-t)*c}`;return{strokeWidth:Number.isNaN(o)?12:o,cx:e/2||0,cy:e/2||0,r:l||0,transform:r?`scale(1, -1) translate(0, -${e})`:void 0,strokeDasharray:a,strokeDashoffset:r?0:s||0}}({sum:t,size:e,thickness:r,value:o,offset:n,root:l})}))}v.displayName="@mantine/core/Curve";var g={root:"m_b32e4812",svg:"m_d43b5134",curve:"m_b1ca1fbf",label:"m_b23f9dc4"};let x={size:120,thickness:12},f=(0,c.Z)((e,{size:o,thickness:n})=>({root:{"--rp-size":(0,l.h)(o),"--rp-label-offset":(0,l.h)(2*n)}})),b=(0,d.d)((e,o)=>{let n=(0,a.w)("RingProgress",x,e),{classNames:t,className:r,style:l,styles:c,unstyled:d,vars:p,label:m,sections:h,size:b,thickness:y,roundCaps:E,rootColor:j,...R}=n,C=(0,i.y)({name:"RingProgress",classes:g,props:n,className:r,style:l,classNames:t,styles:c,unstyled:d,vars:p,varsResolver:f}),_=Math.min(y||12,(b||120)/4),P=(function({size:e,thickness:o,sections:n,renderRoundedLineCaps:t,rootColor:r}){let s=n.reduce((e,o)=>e+o.value,0),l=Math.PI*((.9*e-2*o)/2)*2,c=l,a=[],i=[];for(let e=0;e<n.length;e+=1)a.push({sum:s,offset:c,data:n[e],root:!1}),c-=n[e].value/100*l;if(a.push({sum:s,offset:c,data:{color:r},root:!0}),i.push({...a[a.length-1],lineRoundCaps:!1}),a.length>2){i.push({...a[0],lineRoundCaps:t}),i.push({...a[a.length-2],lineRoundCaps:t});for(let e=1;e<=a.length-3;e+=1)i.push({...a[e],lineRoundCaps:!1})}else i.push({...a[0],lineRoundCaps:t});return i})({size:b,thickness:_,sections:h,renderRoundedLineCaps:E,rootColor:j}).map(({data:e,sum:o,root:n,lineRoundCaps:t,offset:r},l)=>s.createElement(v,{...e,key:l,size:b,thickness:_,sum:o,offset:r,color:e?.color,root:n,lineRoundCaps:t,getStyles:C}));return s.createElement(u.x,{...C("root"),size:b,ref:o,...R},s.createElement("svg",{...C("svg")},P),m&&s.createElement("div",{...C("label")},m))});b.classes=g,b.displayName="@mantine/core/RingProgress";var Text=n(8582);let y=`
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
`,E={type:"code",code:y,centered:!0,component:function(){return s.createElement(b,{label:s.createElement(Text.x,{size:"xs",ta:"center"},"Application data usage"),sections:[{value:40,color:"cyan"},{value:15,color:"orange"},{value:15,color:"grape"}]})}},j=`
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
`,R={type:"configurator",component:function(e){return s.createElement(b,{...e,sections:[{value:40,color:"cyan"},{value:15,color:"orange"},{value:15,color:"grape"}]})},centered:!0,code:j,controls:[{prop:"size",type:"number",initialValue:120,step:10,min:60,max:400,libraryValue:"__"},{prop:"thickness",type:"number",initialValue:12,step:1,min:1,max:40,libraryValue:"__"},{prop:"roundCaps",type:"boolean",initialValue:!0,libraryValue:!1}]},C=`
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
`,_={type:"code",code:C,centered:!0,component:function(){return s.createElement(b,{size:170,thickness:16,label:s.createElement(Text.x,{size:"xs",ta:"center",px:"xs",style:{pointerEvents:"none"}},"Hover sections to see tooltips"),sections:[{value:40,color:"cyan",tooltip:"Documents – 40 Gb"},{value:25,color:"orange",tooltip:"Apps – 25 Gb"},{value:15,color:"grape",tooltip:"Other – 15 Gb"}]})}},P=`
import { RingProgress } from '@mantine/core';

function Demo() {
  return <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />;
}
`,k={type:"code",code:P,centered:!0,component:function(){return s.createElement(b,{sections:[{value:40,color:"yellow"}],rootColor:"red"})}},z=`
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
`,M={type:"code",component:function(){let[e,o]=(0,s.useState)(-1),n=()=>o(-1);return s.createElement(s.Fragment,null,s.createElement(b,{onMouseLeave:()=>o(-1),size:140,sections:[{value:40,color:"cyan",onMouseEnter:()=>o(0),onMouseLeave:n},{value:20,color:"blue",onMouseEnter:()=>o(1),onMouseLeave:n},{value:15,color:"indigo",onMouseEnter:()=>o(2),onMouseLeave:n}]}),s.createElement(Text.x,null,"Hovered section: ",-1===e?"none":e))},code:z};var w=n(92856),T=n(93010),N=n(16438),A=n(54813);let D=`
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
`,H={type:"code",code:D,component:function(){return s.createElement(T.Z,{justify:"center"},s.createElement(b,{sections:[{value:40,color:"blue"}],label:s.createElement(Text.x,{c:"blue",fw:700,ta:"center",size:"xl"},"40%")}),s.createElement(b,{sections:[{value:100,color:"teal"}],label:s.createElement(N.M,null,s.createElement(A.A,{color:"teal",variant:"light",radius:"xl",size:"xl"},s.createElement(w.Z,{style:{width:(0,l.h)(22),height:(0,l.h)(22)}})))}))}};var L=n(79016),I=n(33638);let S=(0,L.A)(I.us.RingProgress);function G(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components},{Demo:n}=o;return n||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"sections"})," prop to an array of:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"value"})," – number between 0 and 100 – amount of space filled by segment"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"color"})," – segment color from theme or any other css color value"]}),"\n"]}),"\n",(0,t.jsx)(n,{data:E}),"\n",(0,t.jsx)(o.h2,{id:"size-thickness--rounded-caps",children:"Size, thickness & rounded caps"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"size"}),", ",(0,t.jsx)(o.code,{children:"thickness"})," & ",(0,t.jsx)(o.code,{children:"roundCaps"})," props to configure RingProgress, size and thickness values:"]}),"\n",(0,t.jsx)(n,{data:R}),"\n",(0,t.jsx)(o.h2,{id:"sections-tooltips",children:"Sections tooltips"}),"\n",(0,t.jsxs)(o.p,{children:["Add ",(0,t.jsx)(o.code,{children:"tooltip"})," property to section to display floating ",(0,t.jsx)(o.a,{href:"/core/tooltip/",children:"Tooltip"})," when user hovers over it:"]}),"\n",(0,t.jsx)(n,{data:_}),"\n",(0,t.jsx)(o.h2,{id:"root-color",children:"Root color"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"rootColor"})," property to change the root color:"]}),"\n",(0,t.jsx)(n,{data:k}),"\n",(0,t.jsx)(o.h2,{id:"sections-props",children:"Sections props"}),"\n",(0,t.jsx)(o.p,{children:"You can add any additional props to sections:"}),"\n",(0,t.jsx)(n,{data:M}),"\n",(0,t.jsx)(o.h2,{id:"customize-label",children:"Customize label"}),"\n",(0,t.jsxs)(o.p,{children:["You can add any React node as label, e.g. ",(0,t.jsx)(o.a,{href:"/core/text/",children:"Text"})," component with some additional styles\nor ",(0,t.jsx)(o.a,{href:"/core/theme-icon/",children:"ThemeIcon"}),":"]}),"\n",(0,t.jsx)(n,{data:H})]})}function V(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(S,{...e,children:(0,t.jsx)(G,{...e})})}},16438:function(e,o,n){"use strict";n.d(o,{M:function(){return u}});var t=n(2784),r=n(38483),s=n(62378),l=n(28559),c=n(33502),a={root:"m_4451eb3a"};let i={},u=(0,c.b)((e,o)=>{let n=(0,r.w)("Center",i,e),{classNames:c,className:u,style:d,styles:p,unstyled:m,vars:h,inline:v,mod:g,...x}=n,f=(0,s.y)({name:"Center",props:n,classes:a,className:u,style:d,classNames:c,styles:p,unstyled:m,vars:h});return t.createElement(l.x,{ref:o,mod:[{inline:v},g],...f("root"),...x})});u.classes=a,u.displayName="@mantine/core/Center"}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=62727)}),_N_E=e.O()}]);