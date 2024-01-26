(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81583],{67670:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/divider",function(){return t(81458)}])},81458:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return L}});var r=t(24246),n=t(71670),a=t(27378),Text=t(26569),o=t(67181);let l=`
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

`,s={type:"code",component:function(){return a.createElement(a.Fragment,null,a.createElement(Text.x,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"),a.createElement(o.i,{my:"md"}),a.createElement(Text.x,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"),a.createElement(o.i,{my:"md"}),a.createElement(Text.x,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"))},code:l,centered:!0,maxWidth:500},m=`
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
`,c={type:"code",code:m,component:function(){return a.createElement(a.Fragment,null,a.createElement(o.i,{my:"sm"}),a.createElement(o.i,{my:"sm",variant:"dashed"}),a.createElement(o.i,{my:"sm",variant:"dotted"}))}};var d=t(27854),u=t(56589),p=t(9136);let x=`
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
`,f={type:"code",code:x,component:function(){return a.createElement(a.Fragment,null,a.createElement(o.i,{my:"xs",label:"Label on the left",labelPosition:"left"}),a.createElement(o.i,{my:"xs",label:"Label in the center",labelPosition:"center"}),a.createElement(o.i,{my:"xs",label:"Label on the right",labelPosition:"right"}),a.createElement(o.i,{my:"xs",variant:"dashed",labelPosition:"center",label:a.createElement(a.Fragment,null,a.createElement(d.Z,{size:12}),a.createElement(u.x,{ml:5},"Search results"))}),a.createElement(o.i,{my:"xs",label:a.createElement(p.e,{href:"https://mantine.dev",target:"_blank",inherit:!0},"Link label")}))}},v=`
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
`,h={type:"code",code:v,component:function(){return a.createElement(a.Fragment,null,a.createElement(o.i,{my:"xs",size:"xs"}),a.createElement(o.i,{my:"xs",size:"sm"}),a.createElement(o.i,{my:"xs",size:"md"}),a.createElement(o.i,{my:"xs",size:"lg"}),a.createElement(o.i,{my:"xs",size:"xl"}),a.createElement(o.i,{my:"xs",size:10}))}};var b=t(22971);let E=`
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
`,y={type:"code",code:E,component:function(){return a.createElement(b.Z,null,a.createElement(Text.x,null,"Label"),a.createElement(o.i,{orientation:"vertical"}),a.createElement(Text.x,null,"Label"),a.createElement(o.i,{size:"sm",orientation:"vertical"}),a.createElement(Text.x,null,"Label"),a.createElement(o.i,{size:"md",orientation:"vertical"}),a.createElement(Text.x,null,"Label"),a.createElement(o.i,{size:"lg",orientation:"vertical"}),a.createElement(Text.x,null,"Label"),a.createElement(o.i,{size:"xl",orientation:"vertical"}),a.createElement(Text.x,null,"Label"))}};var D=t(3916),g=t(54568);let q=(0,D.A)(g.us.Divider);function z(e){let i={h2:"h2",...(0,n.a)(),...e.components},{Demo:t}=i;return t||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:s}),"\n",(0,r.jsx)(i.h2,{id:"variants",children:"Variants"}),"\n",(0,r.jsx)(t,{data:c}),"\n",(0,r.jsx)(i.h2,{id:"with-label",children:"With label"}),"\n",(0,r.jsx)(t,{data:f}),"\n",(0,r.jsx)(i.h2,{id:"sizes",children:"Sizes"}),"\n",(0,r.jsx)(t,{data:h}),"\n",(0,r.jsx)(i.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,r.jsx)(t,{data:y})]})}function L(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(q,{...e,children:(0,r.jsx)(z,{...e})})}},67181:function(e,i,t){"use strict";t.d(i,{i:function(){return x}});var r=t(27378),n=t(92082),a=t(83453),o=t(89738),l=t(96739),s=t(6231),m=t(56589),c=t(20410),d={root:"m-3eebeb36",label:"m-9e365f20"};let u={orientation:"horizontal"},p=(0,a.Z)((e,{color:i,variant:t,size:r})=>({root:{"--divider-color":i?(0,o.p)(i,e):void 0,"--divider-border-style":t,"--divider-size":(0,n.ap)(r,"divider-size")}})),x=(0,c.d)((e,i)=>{let t=(0,l.w)("Divider",u,e),{classNames:n,className:a,style:o,styles:c,unstyled:x,vars:f,color:v,orientation:h,label:b,labelPosition:E,mod:y,...D}=t,g=(0,s.y)({name:"Divider",classes:d,props:t,className:a,style:o,classNames:n,styles:c,unstyled:x,vars:f,varsResolver:p});return r.createElement(m.x,{ref:i,mod:[{orientation:h,"with-label":!!b},y],...g("root"),...D,role:"separator"},b&&r.createElement(m.x,{component:"span",mod:{position:E},...g("label")},b))});x.classes=d,x.displayName="@mantine/core/Divider"}},function(e){e.O(0,[30370,15819,2775,49774,92888,40179],function(){return e(e.s=67670)}),_N_E=e.O()}]);