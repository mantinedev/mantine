(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8781],{16659:function(e,o,n){"use strict";n.d(o,{Z:function(){return t}});var t=(0,n(54764).Z)("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]])},61951:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/ring-progress",function(){return n(93717)}])},93717:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return V}});var t=n(24246),r=n(71670),s=n(3916),l=n(30289),c=n(27378),i=n(71078),a=n(83453),u=n(96739),d=n(6231),p=n(56589),m=n(20410),h={root:"m-b32e4812",svg:"m-d43b5134",curve:"m-b1ca1fbf",label:"m-b23f9dc4"},v=n(89738),g=n(2256),x=n(99684);function f({size:e,value:o,offset:n,sum:t,thickness:r,root:s,color:l,lineRoundCaps:i,tooltip:a,getStyles:u,display:d,...m}){let h=(0,g.rZ)();return c.createElement(x.u.Floating,{disabled:!a,label:a},c.createElement(p.x,{component:"circle",...m,...u("curve"),__vars:{"--curve-color":l?(0,v.p)(l,h):void 0},fill:"none",strokeLinecap:i?"round":"butt",...function({size:e,thickness:o,sum:n,value:t,root:r,offset:s}){let l=(.9*e-2*o)/2,c=Math.PI*l*2/100,i=r||void 0===t?`${(100-n)*c}, ${n*c}`:`${t*c}, ${(100-t)*c}`;return{strokeWidth:Number.isNaN(o)?12:o,cx:e/2||0,cy:e/2||0,r:l||0,transform:r?`scale(1, -1) translate(0, -${e})`:void 0,strokeDasharray:i,strokeDashoffset:r?0:s||0}}({sum:t,size:e,thickness:r,value:o,offset:n,root:s})}))}f.displayName="@mantine/core/Curve";let b={size:120,thickness:12},y=(0,a.Z)((e,{size:o,thickness:n})=>({root:{"--rp-size":(0,i.h)(o),"--rp-label-offset":(0,i.h)(2*n)}})),E=(0,m.d)((e,o)=>{let n=(0,u.w)("RingProgress",b,e),{classNames:t,className:r,style:s,styles:l,unstyled:i,vars:a,label:m,sections:v,size:g,thickness:x,roundCaps:E,rootColor:j,...R}=n,k=(0,d.y)({name:"RingProgress",classes:h,props:n,className:r,style:s,classNames:t,styles:l,unstyled:i,vars:a,varsResolver:y}),C=Math.min(x||12,(g||120)/4),P=(function({size:e,thickness:o,sections:n,renderRoundedLineCaps:t,rootColor:r}){let s=n.reduce((e,o)=>e+o.value,0),l=Math.PI*((.9*e-2*o)/2)*2,c=l,i=[],a=[];for(let e=0;e<n.length;e+=1)i.push({sum:s,offset:c,data:n[e],root:!1}),c-=n[e].value/100*l;if(i.push({sum:s,offset:c,data:{color:r},root:!0}),a.push({...i[i.length-1],lineRoundCaps:!1}),i.length>2){a.push({...i[0],lineRoundCaps:t}),a.push({...i[i.length-2],lineRoundCaps:t});for(let e=1;e<=i.length-3;e+=1)a.push({...i[e],lineRoundCaps:!1})}else a.push({...i[0],lineRoundCaps:t});return a})({size:g,thickness:C,sections:v,renderRoundedLineCaps:E,rootColor:j}).map(({data:e,sum:o,root:n,lineRoundCaps:t,offset:r},s)=>c.createElement(f,{...e,key:s,size:g,thickness:C,sum:o,offset:r,color:e?.color,root:n,lineRoundCaps:t,getStyles:k}));return c.createElement(p.x,{...k("root"),size:g,ref:o,...R},c.createElement("svg",{...k("svg")},P),m&&c.createElement("div",{...k("label")},m))});E.classes=h,E.displayName="@mantine/core/RingProgress";var Text=n(26569);let j=`
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
`,R={type:"code",code:j,centered:!0,component:function(){return c.createElement(E,{label:c.createElement(Text.x,{size:"xs",ta:"center"},"Application data usage"),sections:[{value:40,color:"cyan"},{value:15,color:"orange"},{value:15,color:"grape"}]})}},k=`
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
`,C={type:"configurator",component:function(e){return c.createElement(E,{...e,sections:[{value:40,color:"cyan"},{value:15,color:"orange"},{value:15,color:"grape"}]})},centered:!0,code:k,controls:[{prop:"size",type:"number",initialValue:120,step:10,min:60,max:400,libraryValue:"__"},{prop:"thickness",type:"number",initialValue:12,step:1,min:1,max:40,libraryValue:"__"},{prop:"roundCaps",type:"boolean",initialValue:!0,libraryValue:!1}]},P=`
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
`,z={type:"code",code:P,centered:!0,component:function(){return c.createElement(E,{size:170,thickness:16,label:c.createElement(Text.x,{size:"xs",ta:"center",px:"xs",style:{pointerEvents:"none"}},"Hover sections to see tooltips"),sections:[{value:40,color:"cyan",tooltip:"Documents – 40 Gb"},{value:25,color:"orange",tooltip:"Apps – 25 Gb"},{value:15,color:"grape",tooltip:"Other – 15 Gb"}]})}},M=`
import { RingProgress } from '@mantine/core';

function Demo() {
  return <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />;
}
`,w={type:"code",code:M,centered:!0,component:function(){return c.createElement(E,{sections:[{value:40,color:"yellow"}],rootColor:"red"})}},_=`
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
`,T={type:"code",component:function(){let[e,o]=(0,c.useState)(-1),n=()=>o(-1);return c.createElement(c.Fragment,null,c.createElement(E,{onMouseLeave:()=>o(-1),size:140,sections:[{value:40,color:"cyan",onMouseEnter:()=>o(0),onMouseLeave:n},{value:20,color:"blue",onMouseEnter:()=>o(1),onMouseLeave:n},{value:15,color:"indigo",onMouseEnter:()=>o(2),onMouseLeave:n}]}),c.createElement(Text.x,null,"Hovered section: ",-1===e?"none":e))},code:_};var N=n(16659),A=n(22971),D=n(62150),H=n(84246);let L=`
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
              <IconCheck style={{ width: rem(22), height: rem(22) }} />
            </ActionIcon>
          </Center>
        }
      />
    </>
  );
}
`,I={type:"code",code:L,component:function(){return c.createElement(A.Z,{justify:"center"},c.createElement(E,{sections:[{value:40,color:"blue"}],label:c.createElement(Text.x,{c:"blue",fw:700,ta:"center",size:"xl"},"40%")}),c.createElement(E,{sections:[{value:100,color:"teal"}],label:c.createElement(D.M,null,c.createElement(H.A,{color:"teal",variant:"light",radius:"xl",size:"xl"},c.createElement(N.Z,{style:{width:(0,i.h)(22),height:(0,i.h)(22)}})))}))}},S=(0,s.A)(l.us.RingProgress);function G(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components},{Demo:n}=o;return n||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"sections"})," prop to an array of:"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"value"})," – number between 0 and 100 – amount of space filled by segment"]}),"\n",(0,t.jsxs)(o.li,{children:[(0,t.jsx)(o.code,{children:"color"})," – segment color from theme or any other css color value"]}),"\n"]}),"\n",(0,t.jsx)(n,{data:R}),"\n",(0,t.jsx)(o.h2,{id:"size-thickness--rounded-caps",children:"Size, thickness & rounded caps"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"size"}),", ",(0,t.jsx)(o.code,{children:"thickness"})," & ",(0,t.jsx)(o.code,{children:"roundCaps"})," props to configure RingProgress, size and thickness values:"]}),"\n",(0,t.jsx)(n,{data:C}),"\n",(0,t.jsx)(o.h2,{id:"sections-tooltips",children:"Sections tooltips"}),"\n",(0,t.jsxs)(o.p,{children:["Add ",(0,t.jsx)(o.code,{children:"tooltip"})," property to section to display floating ",(0,t.jsx)(o.a,{href:"/core/tooltip/",children:"Tooltip"})," when user hovers over it:"]}),"\n",(0,t.jsx)(n,{data:z}),"\n",(0,t.jsx)(o.h2,{id:"root-color",children:"Root color"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"rootColor"})," property to change the root color:"]}),"\n",(0,t.jsx)(n,{data:w}),"\n",(0,t.jsx)(o.h2,{id:"sections-props",children:"Sections props"}),"\n",(0,t.jsx)(o.p,{children:"You can add any additional props to sections:"}),"\n",(0,t.jsx)(n,{data:T}),"\n",(0,t.jsx)(o.h2,{id:"customize-label",children:"Customize label"}),"\n",(0,t.jsxs)(o.p,{children:["You can add any React node as label, e.g. ",(0,t.jsx)(o.a,{href:"/core/text/",children:"Text"})," component with some additional styles\nor ",(0,t.jsx)(o.a,{href:"/core/theme-icon/",children:"ThemeIcon"}),":"]}),"\n",(0,t.jsx)(n,{data:I})]})}function V(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(S,{...e,children:(0,t.jsx)(G,{...e})})}},62150:function(e,o,n){"use strict";n.d(o,{M:function(){return u}});var t=n(27378),r=n(96739),s=n(6231),l=n(56589),c=n(50332),i={root:"m-4451eb3a"};let a={},u=(0,c.b)((e,o)=>{let n=(0,r.w)("Center",a,e),{classNames:c,className:u,style:d,styles:p,unstyled:m,vars:h,inline:v,...g}=n,x=(0,s.y)({name:"Center",props:n,classes:i,className:u,style:d,classNames:c,styles:p,unstyled:m,vars:h});return t.createElement(l.x,{ref:o,mod:{inline:v},...x("root"),...g})});u.classes=i,u.displayName="@mantine/core/Center"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=61951)}),_N_E=e.O()}]);