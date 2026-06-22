(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var o=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let l={};for(var n in e)o(l,n,{get:e[n],enumerable:!0});return t||o(l,Symbol.toStringTag,{value:"Module"}),l}])},895791,e=>{"use strict";var o=e.i(648863),t=e.i(433512),l=e.i(481178),n=e.i(44091),i=e.i(391466),r=e.i(275519),a=e.i(232471),c={root:"m_7dc7d3cd",content:"m_1f9675ae","marquee-horizontal":"m_55dc625a","marquee-vertical":"m_cdef532c",group:"m_3a9900f4"},d=e.i(391398);let s={repeat:4,duration:1e5,orientation:"horizontal",fadeEdges:!0},u=(0,l.createVarsResolver)((e,{duration:o,gap:l,repeat:n,fadeEdgeColor:i,fadeEdgeSize:r})=>({root:{"--marquee-duration":`${o}ms`,"--marquee-gap":(0,t.getSpacing)(l),"--marquee-repeat":(n??4).toString(),"--marquee-fade-color":i,"--marquee-fade-size":r}})),h=(0,r.factory)(e=>{let o=(0,n.useProps)("Marquee",s,e),{classNames:t,className:l,style:r,styles:h,unstyled:g,vars:p,children:f,reverse:y,pauseOnHover:m,orientation:x,repeat:M,duration:j,gap:L,fadeEdges:w,fadeEdgeColor:v,fadeEdgeSize:b,mod:q,attributes:z,...T}=o,S=(0,i.useStyles)({name:"Marquee",classes:c,props:o,className:l,style:r,classNames:t,styles:h,unstyled:g,attributes:z,vars:p,varsResolver:u}),_=Array(M).fill(0).map((e,o)=>(0,d.jsx)("div",{...S("group"),children:f},o));return(0,d.jsx)(a.Box,{...S("root"),mod:[{orientation:x,reverse:y,pauseOnHover:m,"fade-edges":w},q],...T,children:(0,d.jsx)("div",{...S("content"),children:_})})});h.classes=c,h.varsResolver=u,h.displayName="@mantine/core/Marquee";var g=e.i(78747);let p={type:"configurator",component:function(e){return(0,d.jsxs)(h,{...e,mah:200,maw:400,children:[(0,d.jsx)(g.MantineLogo,{width:120,type:"full",color:"blue"}),(0,d.jsx)(g.MantineLogo,{width:120,type:"full",color:"cyan"}),(0,d.jsx)(g.MantineLogo,{width:120,type:"full",color:"teal"}),(0,d.jsx)(g.MantineLogo,{width:120,type:"full",color:"green"}),(0,d.jsx)(g.MantineLogo,{width:120,type:"full",color:"lime"}),(0,d.jsx)(g.MantineLogo,{width:120,type:"full",color:"yellow"}),(0,d.jsx)(g.MantineLogo,{width:120,type:"full",color:"orange"}),(0,d.jsx)(g.MantineLogo,{width:120,type:"full",color:"red"})]})},code:`
import { Marquee } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return (
    <Marquee{{props}} mah={200} maw={400}>
      <MantineLogo width={120} type="full" color="blue" />
      <MantineLogo width={120} type="full" color="cyan" />
      <MantineLogo width={120} type="full" color="teal" />
      <MantineLogo width={120} type="full" color="green" />
      <MantineLogo width={120} type="full" color="lime" />
      <MantineLogo width={120} type="full" color="yellow" />
      <MantineLogo width={120} type="full" color="orange" />
      <MantineLogo width={120} type="full" color="red" />
    </Marquee>
  );
}
`,centered:!0,maxWidth:400,controls:[{prop:"reverse",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"pauseOnHover",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"orientation",type:"segmented",data:["horizontal","vertical"],initialValue:"horizontal",libraryValue:"horizontal"},{prop:"repeat",type:"number",min:1,max:10,initialValue:4,libraryValue:4},{prop:"duration",type:"number",min:5e3,max:1e5,step:1e3,initialValue:4e4,libraryValue:4e4},{prop:"gap",type:"size",initialValue:"md",libraryValue:"md"},{prop:"fadeEdges",type:"boolean",initialValue:!0,libraryValue:!0}]},f={type:"code",component:function(){return(0,d.jsxs)(h,{gap:"lg",children:[(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"blue"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"cyan"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"teal"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"green"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"lime"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"yellow"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"orange"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"red"})]})},code:`
import { Marquee } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return (
    <Marquee gap="lg">
      <MantineLogo width={80} type="full" color="blue" />
      <MantineLogo width={80} type="full" color="cyan" />
      <MantineLogo width={80} type="full" color="teal" />
      <MantineLogo width={80} type="full" color="green" />
      <MantineLogo width={80} type="full" color="lime" />
      <MantineLogo width={80} type="full" color="yellow" />
      <MantineLogo width={80} type="full" color="orange" />
      <MantineLogo width={80} type="full" color="red" />
    </Marquee>
  );
}
`,centered:!0,maxWidth:"100%"},y={type:"code",component:function(){return(0,d.jsxs)(h,{orientation:"vertical",h:300,children:[(0,d.jsx)(g.MantineLogo,{height:40,type:"full",color:"blue"}),(0,d.jsx)(g.MantineLogo,{height:40,type:"full",color:"cyan"}),(0,d.jsx)(g.MantineLogo,{height:40,type:"full",color:"teal"}),(0,d.jsx)(g.MantineLogo,{height:40,type:"full",color:"green"}),(0,d.jsx)(g.MantineLogo,{height:40,type:"full",color:"lime"}),(0,d.jsx)(g.MantineLogo,{height:40,type:"full",color:"yellow"}),(0,d.jsx)(g.MantineLogo,{height:40,type:"full",color:"orange"}),(0,d.jsx)(g.MantineLogo,{height:40,type:"full",color:"red"})]})},code:`
import { Marquee } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return (
    <Marquee orientation="vertical" h={300}>
      <MantineLogo height={40} type="full" color="blue" />
      <MantineLogo height={40} type="full" color="cyan" />
      <MantineLogo height={40} type="full" color="teal" />
      <MantineLogo height={40} type="full" color="green" />
      <MantineLogo height={40} type="full" color="lime" />
      <MantineLogo height={40} type="full" color="yellow" />
      <MantineLogo height={40} type="full" color="orange" />
      <MantineLogo height={40} type="full" color="red" />
    </Marquee>
  );
}
`,centered:!0},m={type:"code",component:function(){return(0,d.jsxs)(h,{pauseOnHover:!0,children:[(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"blue"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"cyan"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"teal"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"green"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"lime"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"yellow"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"orange"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"red"})]})},code:`
import { Marquee } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return (
    <Marquee pauseOnHover>
      <MantineLogo width={80} type="full" color="blue" />
      <MantineLogo width={80} type="full" color="cyan" />
      <MantineLogo width={80} type="full" color="teal" />
      <MantineLogo width={80} type="full" color="green" />
      <MantineLogo width={80} type="full" color="lime" />
      <MantineLogo width={80} type="full" color="yellow" />
      <MantineLogo width={80} type="full" color="orange" />
      <MantineLogo width={80} type="full" color="red" />
    </Marquee>
  );
}
`,centered:!0,maxWidth:"100%"};var x=e.i(671640);let M={type:"code",component:function(){return(0,d.jsxs)(x.Stack,{children:[(0,d.jsxs)(h,{children:[(0,d.jsx)(g.MantineLogo,{height:20,type:"full",color:"blue"}),(0,d.jsx)(g.MantineLogo,{height:20,type:"full",color:"cyan"}),(0,d.jsx)(g.MantineLogo,{height:20,type:"full",color:"teal"}),(0,d.jsx)(g.MantineLogo,{height:20,type:"full",color:"green"})]}),(0,d.jsxs)(h,{reverse:!0,children:[(0,d.jsx)(g.MantineLogo,{height:20,type:"full",color:"lime"}),(0,d.jsx)(g.MantineLogo,{height:20,type:"full",color:"yellow"}),(0,d.jsx)(g.MantineLogo,{height:20,type:"full",color:"orange"}),(0,d.jsx)(g.MantineLogo,{height:20,type:"full",color:"red"})]})]})},code:`
import { Marquee, Stack } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return (
    <Stack>
      <Marquee>
        <MantineLogo height={20} type="full" color="blue" />
        <MantineLogo height={20} type="full" color="cyan" />
        <MantineLogo height={20} type="full" color="teal" />
        <MantineLogo height={20} type="full" color="green" />
      </Marquee>
      <Marquee reverse>
        <MantineLogo height={20} type="full" color="lime" />
        <MantineLogo height={20} type="full" color="yellow" />
        <MantineLogo height={20} type="full" color="orange" />
        <MantineLogo height={20} type="full" color="red" />
      </Marquee>
    </Stack>
  );
}
`,centered:!0,maxWidth:"100%"};var j=e.i(883364);let L={type:"code",component:function(){return(0,d.jsxs)(x.Stack,{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)(j.Text,{size:"sm",mb:"xs",children:"Default fade (5%)"}),(0,d.jsxs)(h,{children:[(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"blue"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"cyan"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"teal"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"green"})]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)(j.Text,{size:"sm",mb:"xs",children:"Larger fade (15%)"}),(0,d.jsxs)(h,{fadeEdgeSize:"15%",children:[(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"lime"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"yellow"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"orange"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"red"})]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)(j.Text,{size:"sm",mb:"xs",children:"Custom fade color"}),(0,d.jsxs)(h,{fadeEdgeColor:"var(--mantine-color-blue-light)",children:[(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"violet"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"grape"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"pink"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"red"})]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)(j.Text,{size:"sm",mb:"xs",children:"No fade"}),(0,d.jsxs)(h,{fadeEdges:!1,children:[(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"blue"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"teal"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"green"}),(0,d.jsx)(g.MantineLogo,{width:80,type:"full",color:"yellow"})]})]})]})},code:`
import { Marquee, Stack, Text } from '@mantine/core';
import { MantineLogo } from '@mantinex/mantine-logo';

function Demo() {
  return (
    <Stack>
      <div>
        <Text size="sm" mb="xs">Default fade (5%)</Text>
        <Marquee>
          <MantineLogo width={80} type="full" color="blue" />
          <MantineLogo width={80} type="full" color="cyan" />
          <MantineLogo width={80} type="full" color="teal" />
          <MantineLogo width={80} type="full" color="green" />
        </Marquee>
      </div>

      <div>
        <Text size="sm" mb="xs">Larger fade (15%)</Text>
        <Marquee fadeEdgeSize="15%">
          <MantineLogo width={80} type="full" color="lime" />
          <MantineLogo width={80} type="full" color="yellow" />
          <MantineLogo width={80} type="full" color="orange" />
          <MantineLogo width={80} type="full" color="red" />
        </Marquee>
      </div>

      <div>
        <Text size="sm" mb="xs">Custom fade color</Text>
        <Marquee fadeEdgeColor="var(--mantine-color-blue-light)">
          <MantineLogo width={80} type="full" color="violet" />
          <MantineLogo width={80} type="full" color="grape" />
          <MantineLogo width={80} type="full" color="pink" />
          <MantineLogo width={80} type="full" color="red" />
        </Marquee>
      </div>

      <div>
        <Text size="sm" mb="xs">No fade</Text>
        <Marquee fadeEdges={false}>
          <MantineLogo width={80} type="full" color="blue" />
          <MantineLogo width={80} type="full" color="teal" />
          <MantineLogo width={80} type="full" color="green" />
          <MantineLogo width={80} type="full" color="yellow" />
        </Marquee>
      </div>
    </Stack>
  );
}
`};var w=(0,o.__exportAll)({configurator:()=>p,fadeEdges:()=>L,multipleRows:()=>M,pauseOnHover:()=>m,usage:()=>f,vertical:()=>y});e.s(["MarqueeDemos",0,w],895791)},223324,e=>{"use strict";var o=e.i(391398),t=e.i(38856),l=e.i(895791);e.i(603441);var n=e.i(62558);e.i(457450);var i=e.i(418026);let r=(0,n.Layout)(i.MDX_DATA.Marquee);function a(e){let n={code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.useMDXComponents)(),...e.components},{Demo:i}=n;return i||function(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Marquee"})," component creates a continuous scrolling animation for its children.\nIt is commonly used for displaying logos, testimonials, or any repeating content."]}),"\n",(0,o.jsx)(i,{data:l.MarqueeDemos.usage}),"\n",(0,o.jsx)(n.h2,{id:"pause-on-hover",children:"Pause on hover"}),"\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:"pauseOnHover"})," prop to pause the animation when the user hovers over the component:"]}),"\n",(0,o.jsx)(i,{data:l.MarqueeDemos.pauseOnHover}),"\n",(0,o.jsx)(n.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,o.jsxs)(n.p,{children:["Set ",(0,o.jsx)(n.code,{children:'orientation="vertical"'})," to scroll content vertically. Note that you need to set\na fixed height on the container for vertical scrolling:"]}),"\n",(0,o.jsx)(i,{data:l.MarqueeDemos.vertical}),"\n",(0,o.jsx)(n.h2,{id:"multiple-rows",children:"Multiple rows"}),"\n",(0,o.jsxs)(n.p,{children:["You can combine multiple ",(0,o.jsx)(n.code,{children:"Marquee"})," components with different directions to create\nmore complex layouts:"]}),"\n",(0,o.jsx)(i,{data:l.MarqueeDemos.multipleRows}),"\n",(0,o.jsx)(n.h2,{id:"fade-edges",children:"Fade edges"}),"\n",(0,o.jsxs)(n.p,{children:["By default, ",(0,o.jsx)(n.code,{children:"Marquee"})," displays gradient fade on edges to create a smooth transition effect.\nYou can customize the fade using the following props:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"fadeEdges"})," – enables/disables fade gradient (default: ",(0,o.jsx)(n.code,{children:"true"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"fadeEdgeColor"})," – color of the fade gradient (default: ",(0,o.jsx)(n.code,{children:"var(--mantine-color-body)"}),")"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"fadeEdgeSize"})," – size of the fade area (default: ",(0,o.jsx)(n.code,{children:"5%"}),")"]}),"\n"]}),"\n",(0,o.jsx)(i,{data:l.MarqueeDemos.fadeEdges}),"\n",(0,o.jsx)(n.h2,{id:"customization",children:"Customization"}),"\n",(0,o.jsx)(n.p,{children:"Use the following props to customize the marquee behavior:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"reverse"})," – reverses animation direction"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"pauseOnHover"})," – pauses animation on hover"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"orientation"})," – ",(0,o.jsx)(n.code,{children:"horizontal"})," (default) or ",(0,o.jsx)(n.code,{children:"vertical"})," scroll direction"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"repeat"})," – number of times children are repeated for seamless scrolling (default: 4)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"duration"})," – animation duration in ms (default: 40000)"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"gap"})," – gap between repeated children, key of ",(0,o.jsx)(n.code,{children:"theme.spacing"})," or any valid CSS value"]}),"\n"]}),"\n",(0,o.jsx)(i,{data:l.MarqueeDemos.configurator})]})}e.s(["default",0,function(e={}){return(0,o.jsx)(r,{...e,children:(0,o.jsx)(a,{...e})})}])},252453,(e,o,t)=>{let l="/core/marquee";(window.__NEXT_P=window.__NEXT_P||[]).push([l,()=>e.r(223324)]),o.hot&&o.hot.dispose(function(){window.__NEXT_P.push([l])})},648761,e=>{e.v(o=>Promise.all(["static/chunks/22379_btw709h.js"].map(o=>e.l(o))).then(()=>o(493594)))},828805,e=>{e.v(o=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(o=>e.l(o))).then(()=>o(879466)))}]);