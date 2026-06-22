(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var i=Object.defineProperty;e.s(["__exportAll",0,(e,t)=>{let r={};for(var a in e)i(r,a,{get:e[a],enumerable:!0});return t||i(r,Symbol.toStringTag,{value:"Module"}),r}])},719834,e=>{"use strict";var i=e.i(191788),t=e.i(171481);let r=new Map([["bold",i.createElement(i.Fragment,null,i.createElement("path",{d:"M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"}))],["duotone",i.createElement(i.Fragment,null,i.createElement("path",{d:"M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",opacity:"0.2"}),i.createElement("path",{d:"M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["fill",i.createElement(i.Fragment,null,i.createElement("path",{d:"M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"}))],["light",i.createElement(i.Fragment,null,i.createElement("path",{d:"M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"}))],["regular",i.createElement(i.Fragment,null,i.createElement("path",{d:"M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"}))],["thin",i.createElement(i.Fragment,null,i.createElement("path",{d:"M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"}))]]),a=i.forwardRef((e,a)=>i.createElement(t.default,{ref:a,...e,weights:r}));a.displayName="MagnifyingGlassIcon",e.s(["MagnifyingGlassIcon",0,a],719834)},2054,e=>{"use strict";var i=e.i(433512),t=e.i(481178),r=e.i(317477),a=e.i(44091),n=e.i(391466),s=e.i(275519),o=e.i(232471),l={root:"m_3eebeb36",label:"m_9e365f20"},d=e.i(391398);let c={orientation:"horizontal"},m=(0,t.createVarsResolver)((e,{color:t,variant:a,size:n})=>({root:{"--divider-color":t?(0,r.getThemeColor)(t,e):void 0,"--divider-border-style":a,"--divider-size":(0,i.getSize)(n,"divider-size")}})),u=(0,s.factory)(e=>{let i=(0,a.useProps)("Divider",c,e),{classNames:t,className:r,style:s,styles:u,unstyled:x,vars:v,color:h,orientation:p,label:f,labelPosition:D,mod:b,attributes:g,...j}=i,y=(0,n.useStyles)({name:"Divider",classes:l,props:i,className:r,style:s,classNames:t,styles:u,unstyled:x,attributes:g,vars:v,varsResolver:m});return(0,d.jsx)(o.Box,{mod:[{orientation:p,withLabel:!!f},b],role:"separator",...y("root"),...j,children:f&&(0,d.jsx)(o.Box,{component:"span",mod:{position:D},...y("label"),children:f})})});u.classes=l,u.varsResolver=m,u.displayName="@mantine/core/Divider",e.s(["Divider",0,u],2054)},168854,e=>{"use strict";var i=e.i(391398),t=e.i(38856),r=e.i(648863),a=e.i(2054),n=e.i(883364);let s={type:"code",component:function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.Text,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"}),(0,i.jsx)(a.Divider,{my:"md"}),(0,i.jsx)(n.Text,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"}),(0,i.jsx)(a.Divider,{my:"md"}),(0,i.jsx)(n.Text,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"})]})},code:`
import { Text, Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
        perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
        aliquid commodi atque sunt officiis natus?
      </Text>

      <Divider my="md" />

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
        perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
        aliquid commodi atque sunt officiis natus?
      </Text>

      <Divider my="md" />

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea,
        perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur
        aliquid commodi atque sunt officiis natus?
      </Text>
    </>
  );
}

`,centered:!0,maxWidth:500};var o=e.i(719834),l=e.i(79897),d=e.i(232471);let c={type:"code",code:`
import { Divider, Box, Anchor } from '@mantine/core';
import { MagnifyingGlassIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      <Divider my="xs" label="Label on the left" labelPosition="left" />
      <Divider my="xs" label="Label in the center" labelPosition="center" />
      <Divider my="xs" label="Label on the right" labelPosition="right" />
      <Divider
        my="xs"
        variant="dashed"
        labelPosition="center"
        label={
          <>
            <MagnifyingGlassIcon size={12} />
            <Box ml={5}>Search results</Box>
          </>
        }
      />
      <Divider
        my="xs"
        label={
          <Anchor href="https://mantine.dev" target="_blank" inherit>
            Link label
          </Anchor>
        }
      />
    </>
  );
}
`,component:function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Divider,{my:"xs",label:"Label on the left",labelPosition:"left"}),(0,i.jsx)(a.Divider,{my:"xs",label:"Label in the center",labelPosition:"center"}),(0,i.jsx)(a.Divider,{my:"xs",label:"Label on the right",labelPosition:"right"}),(0,i.jsx)(a.Divider,{my:"xs",variant:"dashed",labelPosition:"center",label:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o.MagnifyingGlassIcon,{size:12}),(0,i.jsx)(d.Box,{ml:5,children:"Search results"})]})}),(0,i.jsx)(a.Divider,{my:"xs",label:(0,i.jsx)(l.Anchor,{href:"https://mantine.dev",target:"_blank",inherit:!0,children:"Link label"})})]})}},m={type:"code",code:`
import { Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Divider size="xs" />
      <Divider size="sm" />
      <Divider size="md" />
      <Divider size="lg" />
      <Divider size="xl" />
      <Divider size={10} />
    </>
  );
}
`,component:function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Divider,{my:"xs",size:"xs"}),(0,i.jsx)(a.Divider,{my:"xs",size:"sm"}),(0,i.jsx)(a.Divider,{my:"xs",size:"md"}),(0,i.jsx)(a.Divider,{my:"xs",size:"lg"}),(0,i.jsx)(a.Divider,{my:"xs",size:"xl"}),(0,i.jsx)(a.Divider,{my:"xs",size:10})]})}};var u=e.i(725695);let x={type:"code",code:`
import { Divider, Group, Text } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Text>Label</Text>
      <Divider orientation="vertical" />
      <Text>Label</Text>
      <Divider size="sm" orientation="vertical" />
      <Text>Label</Text>
      <Divider size="md" orientation="vertical" />
      <Text>Label</Text>
      <Divider size="lg" orientation="vertical" />
      <Text>Label</Text>
      <Divider size="xl" orientation="vertical" />
      <Text>Label</Text>
    </Group>
  );
}
`,component:function(){return(0,i.jsxs)(u.Group,{children:[(0,i.jsx)(n.Text,{children:"Label"}),(0,i.jsx)(a.Divider,{orientation:"vertical"}),(0,i.jsx)(n.Text,{children:"Label"}),(0,i.jsx)(a.Divider,{size:"sm",orientation:"vertical"}),(0,i.jsx)(n.Text,{children:"Label"}),(0,i.jsx)(a.Divider,{size:"md",orientation:"vertical"}),(0,i.jsx)(n.Text,{children:"Label"}),(0,i.jsx)(a.Divider,{size:"lg",orientation:"vertical"}),(0,i.jsx)(n.Text,{children:"Label"}),(0,i.jsx)(a.Divider,{size:"xl",orientation:"vertical"}),(0,i.jsx)(n.Text,{children:"Label"})]})}},v={type:"code",code:`
import { Divider } from '@mantine/core';

function Demo() {
  return (
    <>
      <Divider my="sm" />
      <Divider my="sm" variant="dashed" />
      <Divider my="sm" variant="dotted" />
    </>
  );
}
`,component:function(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.Divider,{my:"sm"}),(0,i.jsx)(a.Divider,{my:"sm",variant:"dashed"}),(0,i.jsx)(a.Divider,{my:"sm",variant:"dotted"})]})}};var h=(0,r.__exportAll)({labels:()=>c,orientation:()=>x,sizes:()=>m,usage:()=>s,variants:()=>v});e.i(603441);var p=e.i(62558);e.i(457450);var f=e.i(418026);let D=(0,p.Layout)(f.MDX_DATA.Divider);function b(e){let r={h2:"h2",...(0,t.useMDXComponents)(),...e.components},{Demo:a}=r;return a||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(a,{data:h.usage}),"\n",(0,i.jsx)(r.h2,{id:"variants",children:"Variants"}),"\n",(0,i.jsx)(a,{data:h.variants}),"\n",(0,i.jsx)(r.h2,{id:"with-label",children:"With label"}),"\n",(0,i.jsx)(a,{data:h.labels}),"\n",(0,i.jsx)(r.h2,{id:"sizes",children:"Sizes"}),"\n",(0,i.jsx)(a,{data:h.sizes}),"\n",(0,i.jsx)(r.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,i.jsx)(a,{data:h.orientation})]})}e.s(["default",0,function(e={}){return(0,i.jsx)(D,{...e,children:(0,i.jsx)(b,{...e})})}],168854)},295871,(e,i,t)=>{let r="/core/divider";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(168854)]),i.hot&&i.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(i=>Promise.all(["static/chunks/22379_btw709h.js"].map(i=>e.l(i))).then(()=>i(493594)))},828805,e=>{e.v(i=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(i=>e.l(i))).then(()=>i(879466)))}]);