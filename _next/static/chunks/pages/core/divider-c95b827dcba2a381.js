(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81583],{30768:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/divider",function(){return t(19839)}])},19839:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return z}});var r=t(52322),n=t(45392),Text=t(8582),s=t(17539);let a=`
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

`,o={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Text.x,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"}),(0,r.jsx)(s.i,{my:"md"}),(0,r.jsx)(Text.x,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"}),(0,r.jsx)(s.i,{my:"md"}),(0,r.jsx)(Text.x,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"})]})},code:a,centered:!0,maxWidth:500},d=`
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
`,l={type:"code",code:d,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.i,{my:"sm"}),(0,r.jsx)(s.i,{my:"sm",variant:"dashed"}),(0,r.jsx)(s.i,{my:"sm",variant:"dotted"})]})}};var c=t(11909),m=t(28559),u=t(71873);let x=`
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
`,h={type:"code",code:x,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.i,{my:"xs",label:"Label on the left",labelPosition:"left"}),(0,r.jsx)(s.i,{my:"xs",label:"Label in the center",labelPosition:"center"}),(0,r.jsx)(s.i,{my:"xs",label:"Label on the right",labelPosition:"right"}),(0,r.jsx)(s.i,{my:"xs",variant:"dashed",labelPosition:"center",label:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c.Z,{size:12}),(0,r.jsx)(m.x,{ml:5,children:"Search results"})]})}),(0,r.jsx)(s.i,{my:"xs",label:(0,r.jsx)(u.e,{href:"https://mantine.dev",target:"_blank",inherit:!0,children:"Link label"})})]})}},p=`
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
`,v={type:"code",code:p,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.i,{my:"xs",size:"xs"}),(0,r.jsx)(s.i,{my:"xs",size:"sm"}),(0,r.jsx)(s.i,{my:"xs",size:"md"}),(0,r.jsx)(s.i,{my:"xs",size:"lg"}),(0,r.jsx)(s.i,{my:"xs",size:"xl"}),(0,r.jsx)(s.i,{my:"xs",size:10})]})}};var f=t(93010);let j=`
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
`,b={type:"code",code:j,component:function(){return(0,r.jsxs)(f.Z,{children:[(0,r.jsx)(Text.x,{children:"Label"}),(0,r.jsx)(s.i,{orientation:"vertical"}),(0,r.jsx)(Text.x,{children:"Label"}),(0,r.jsx)(s.i,{size:"sm",orientation:"vertical"}),(0,r.jsx)(Text.x,{children:"Label"}),(0,r.jsx)(s.i,{size:"md",orientation:"vertical"}),(0,r.jsx)(Text.x,{children:"Label"}),(0,r.jsx)(s.i,{size:"lg",orientation:"vertical"}),(0,r.jsx)(Text.x,{children:"Label"}),(0,r.jsx)(s.i,{size:"xl",orientation:"vertical"}),(0,r.jsx)(Text.x,{children:"Label"})]})}};var y=t(79016),D=t(33638);let g=(0,y.A)(D.us.Divider);function q(e){let i={h2:"h2",...(0,n.a)(),...e.components},{Demo:t}=i;return t||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:o}),"\n",(0,r.jsx)(i.h2,{id:"variants",children:"Variants"}),"\n",(0,r.jsx)(t,{data:l}),"\n",(0,r.jsx)(i.h2,{id:"with-label",children:"With label"}),"\n",(0,r.jsx)(t,{data:h}),"\n",(0,r.jsx)(i.h2,{id:"sizes",children:"Sizes"}),"\n",(0,r.jsx)(t,{data:v}),"\n",(0,r.jsx)(i.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,r.jsx)(t,{data:b})]})}function z(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(g,{...e,children:(0,r.jsx)(q,{...e})})}},17539:function(e,i,t){"use strict";t.d(i,{i:function(){return h}});var r=t(52322);t(2784);var n=t(91482),s=t(11200),a=t(13588),o=t(38483),d=t(46690),l=t(28559),c=t(82027),m={root:"m_3eebeb36",label:"m_9e365f20"};let u={orientation:"horizontal"},x=(0,s.Z)((e,{color:i,variant:t,size:r})=>({root:{"--divider-color":i?(0,a.p)(i,e):void 0,"--divider-border-style":t,"--divider-size":(0,n.ap)(r,"divider-size")}})),h=(0,c.d)((e,i)=>{let t=(0,o.w)("Divider",u,e),{classNames:n,className:s,style:a,styles:c,unstyled:h,vars:p,color:v,orientation:f,label:j,labelPosition:b,mod:y,...D}=t,g=(0,d.y)({name:"Divider",classes:m,props:t,className:s,style:a,classNames:n,styles:c,unstyled:h,vars:p,varsResolver:x});return(0,r.jsx)(l.x,{ref:i,mod:[{orientation:f,"with-label":!!j},y],...g("root"),...D,role:"separator",children:j&&(0,r.jsx)(l.x,{component:"span",mod:{position:b},...g("label"),children:j})})});h.classes=m,h.displayName="@mantine/core/Divider"}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=30768)}),_N_E=e.O()}]);