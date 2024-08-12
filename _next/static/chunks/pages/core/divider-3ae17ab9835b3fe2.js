(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81583],{30768:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/divider",function(){return t(19839)}])},19839:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return y}});var r=t(52322),n=t(45392),s=t(8582),a=t(17539);let o={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.x,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"}),(0,r.jsx)(a.i,{my:"md"}),(0,r.jsx)(s.x,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"}),(0,r.jsx)(a.i,{my:"md"}),(0,r.jsx)(s.x,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"})]})},code:`
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

`,centered:!0,maxWidth:500},d={type:"code",code:`
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
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.i,{my:"sm"}),(0,r.jsx)(a.i,{my:"sm",variant:"dashed"}),(0,r.jsx)(a.i,{my:"sm",variant:"dotted"})]})}};var l=t(27111),c=t(28559),m=t(71873);let u={type:"code",code:`
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
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.i,{my:"xs",label:"Label on the left",labelPosition:"left"}),(0,r.jsx)(a.i,{my:"xs",label:"Label in the center",labelPosition:"center"}),(0,r.jsx)(a.i,{my:"xs",label:"Label on the right",labelPosition:"right"}),(0,r.jsx)(a.i,{my:"xs",variant:"dashed",labelPosition:"center",label:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{size:12}),(0,r.jsx)(c.x,{ml:5,children:"Search results"})]})}),(0,r.jsx)(a.i,{my:"xs",label:(0,r.jsx)(m.e,{href:"https://mantine.dev",target:"_blank",inherit:!0,children:"Link label"})})]})}},x={type:"code",code:`
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
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.i,{my:"xs",size:"xs"}),(0,r.jsx)(a.i,{my:"xs",size:"sm"}),(0,r.jsx)(a.i,{my:"xs",size:"md"}),(0,r.jsx)(a.i,{my:"xs",size:"lg"}),(0,r.jsx)(a.i,{my:"xs",size:"xl"}),(0,r.jsx)(a.i,{my:"xs",size:10})]})}};var h=t(93010);let p={type:"code",code:`
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
`,component:function(){return(0,r.jsxs)(h.Z,{children:[(0,r.jsx)(s.x,{children:"Label"}),(0,r.jsx)(a.i,{orientation:"vertical"}),(0,r.jsx)(s.x,{children:"Label"}),(0,r.jsx)(a.i,{size:"sm",orientation:"vertical"}),(0,r.jsx)(s.x,{children:"Label"}),(0,r.jsx)(a.i,{size:"md",orientation:"vertical"}),(0,r.jsx)(s.x,{children:"Label"}),(0,r.jsx)(a.i,{size:"lg",orientation:"vertical"}),(0,r.jsx)(s.x,{children:"Label"}),(0,r.jsx)(a.i,{size:"xl",orientation:"vertical"}),(0,r.jsx)(s.x,{children:"Label"})]})}};var v=t(25071),f=t(15019);let j=(0,v.A)(f.us.Divider);function b(e){let i={h2:"h2",...(0,n.a)(),...e.components},{Demo:t}=i;return t||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:o}),"\n",(0,r.jsx)(i.h2,{id:"variants",children:"Variants"}),"\n",(0,r.jsx)(t,{data:d}),"\n",(0,r.jsx)(i.h2,{id:"with-label",children:"With label"}),"\n",(0,r.jsx)(t,{data:u}),"\n",(0,r.jsx)(i.h2,{id:"sizes",children:"Sizes"}),"\n",(0,r.jsx)(t,{data:x}),"\n",(0,r.jsx)(i.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,r.jsx)(t,{data:p})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(j,{...e,children:(0,r.jsx)(b,{...e})})}},17539:function(e,i,t){"use strict";t.d(i,{i:function(){return h}});var r=t(52322);t(2784);var n=t(91482),s=t(11200),a=t(13588),o=t(38483),d=t(46690),l=t(28559),c=t(82027),m={root:"m_3eebeb36",label:"m_9e365f20"};let u={orientation:"horizontal"},x=(0,s.Z)((e,{color:i,variant:t,size:r})=>({root:{"--divider-color":i?(0,a.p)(i,e):void 0,"--divider-border-style":t,"--divider-size":(0,n.ap)(r,"divider-size")}})),h=(0,c.d5)((e,i)=>{let t=(0,o.w)("Divider",u,e),{classNames:n,className:s,style:a,styles:c,unstyled:h,vars:p,color:v,orientation:f,label:j,labelPosition:b,mod:y,...D}=t,g=(0,d.y)({name:"Divider",classes:m,props:t,className:s,style:a,classNames:n,styles:c,unstyled:h,vars:p,varsResolver:x});return(0,r.jsx)(l.x,{ref:i,mod:[{orientation:f,"with-label":!!j},y],...g("root"),...D,role:"separator",children:j&&(0,r.jsx)(l.x,{component:"span",mod:{position:b},...g("label"),children:j})})});h.classes=m,h.displayName="@mantine/core/Divider"}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=30768)}),_N_E=e.O()}]);