(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84675],{41039:(e,i,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/divider",function(){return t(57635)}])},57635:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>D});var r=t(31085),n=t(71184),s=t(93065),a=t(78263);let o={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.E,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"}),(0,r.jsx)(a.c,{my:"md"}),(0,r.jsx)(s.E,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"}),(0,r.jsx)(a.c,{my:"md"}),(0,r.jsx)(s.E,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"})]})},code:`
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

`,centered:!0,maxWidth:500},c={type:"code",code:`
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
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.c,{my:"sm"}),(0,r.jsx)(a.c,{my:"sm",variant:"dashed"}),(0,r.jsx)(a.c,{my:"sm",variant:"dotted"})]})}};var d=t(5310),l=t(34056),m=t(12129);let u={type:"code",code:`
import { Divider, Box, Anchor } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

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
            <IconSearch size={12} />
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
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.c,{my:"xs",label:"Label on the left",labelPosition:"left"}),(0,r.jsx)(a.c,{my:"xs",label:"Label in the center",labelPosition:"center"}),(0,r.jsx)(a.c,{my:"xs",label:"Label on the right",labelPosition:"right"}),(0,r.jsx)(a.c,{my:"xs",variant:"dashed",labelPosition:"center",label:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.A,{size:12}),(0,r.jsx)(l.a,{ml:5,children:"Search results"})]})}),(0,r.jsx)(a.c,{my:"xs",label:(0,r.jsx)(m.M,{href:"https://mantine.dev",target:"_blank",inherit:!0,children:"Link label"})})]})}},x={type:"code",code:`
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
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.c,{my:"xs",size:"xs"}),(0,r.jsx)(a.c,{my:"xs",size:"sm"}),(0,r.jsx)(a.c,{my:"xs",size:"md"}),(0,r.jsx)(a.c,{my:"xs",size:"lg"}),(0,r.jsx)(a.c,{my:"xs",size:"xl"}),(0,r.jsx)(a.c,{my:"xs",size:10})]})}};var h=t(56051);let p={type:"code",code:`
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
`,component:function(){return(0,r.jsxs)(h.Y,{children:[(0,r.jsx)(s.E,{children:"Label"}),(0,r.jsx)(a.c,{orientation:"vertical"}),(0,r.jsx)(s.E,{children:"Label"}),(0,r.jsx)(a.c,{size:"sm",orientation:"vertical"}),(0,r.jsx)(s.E,{children:"Label"}),(0,r.jsx)(a.c,{size:"md",orientation:"vertical"}),(0,r.jsx)(s.E,{children:"Label"}),(0,r.jsx)(a.c,{size:"lg",orientation:"vertical"}),(0,r.jsx)(s.E,{children:"Label"}),(0,r.jsx)(a.c,{size:"xl",orientation:"vertical"}),(0,r.jsx)(s.E,{children:"Label"})]})}};var v=t(85954),f=t(38215);let j=(0,v.P)(f.XZ.Divider);function b(e){let i={h2:"h2",...(0,n.R)(),...e.components},{Demo:t}=i;return t||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:o}),"\n",(0,r.jsx)(i.h2,{id:"variants",children:"Variants"}),"\n",(0,r.jsx)(t,{data:c}),"\n",(0,r.jsx)(i.h2,{id:"with-label",children:"With label"}),"\n",(0,r.jsx)(t,{data:u}),"\n",(0,r.jsx)(i.h2,{id:"sizes",children:"Sizes"}),"\n",(0,r.jsx)(t,{data:x}),"\n",(0,r.jsx)(i.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,r.jsx)(t,{data:p})]})}function D(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(j,{...e,children:(0,r.jsx)(b,{...e})})}},78263:(e,i,t)=>{"use strict";t.d(i,{c:()=>h});var r=t(31085);t(14041);var n=t(33450),s=t(7098),a=t(51606),o=t(29686),c=t(69564),d=t(34056),l=t(6754),m={root:"m_3eebeb36",label:"m_9e365f20"};let u={orientation:"horizontal"},x=(0,s.V)((e,{color:i,variant:t,size:r})=>({root:{"--divider-color":i?(0,a.r)(i,e):void 0,"--divider-border-style":t,"--divider-size":(0,n.YC)(r,"divider-size")}})),h=(0,l.P9)((e,i)=>{let t=(0,o.Y)("Divider",u,e),{classNames:n,className:s,style:a,styles:l,unstyled:h,vars:p,color:v,orientation:f,label:j,labelPosition:b,mod:D,...y}=t,g=(0,c.I)({name:"Divider",classes:m,props:t,className:s,style:a,classNames:n,styles:l,unstyled:h,vars:p,varsResolver:x});return(0,r.jsx)(d.a,{ref:i,mod:[{orientation:f,"with-label":!!j},D],...g("root"),...y,role:"separator",children:j&&(0,r.jsx)(d.a,{component:"span",mod:{position:b},...g("label"),children:j})})});h.classes=m,h.displayName="@mantine/core/Divider"}},e=>{var i=i=>e(e.s=i);e.O(0,[67456,39699,68831,90636,46593,38792],()=>i(41039)),_N_E=e.O()}]);