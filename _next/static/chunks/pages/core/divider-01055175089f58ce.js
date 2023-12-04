(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1583],{67670:function(e,i,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/divider",function(){return t(81458)}])},81458:function(e,i,t){"use strict";t.r(i),t.d(i,{default:function(){return L}});var r=t(24246),n=t(71670),a=t(3916),o=t(30289),l=t(27378),Text=t(26569),s=t(67181);let m=`
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

`,c={type:"code",component:function(){return l.createElement(l.Fragment,null,l.createElement(Text.x,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"),l.createElement(s.i,{my:"md"}),l.createElement(Text.x,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"),l.createElement(s.i,{my:"md"}),l.createElement(Text.x,null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"))},code:m,centered:!0,maxWidth:500},d=`
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
`,u={type:"code",code:d,component:function(){return l.createElement(l.Fragment,null,l.createElement(s.i,{my:"sm"}),l.createElement(s.i,{my:"sm",variant:"dashed"}),l.createElement(s.i,{my:"sm",variant:"dotted"}))}};var p=t(27854),x=t(56589),f=t(9136);let v=`
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
`,h={type:"code",code:v,component:function(){return l.createElement(l.Fragment,null,l.createElement(s.i,{my:"xs",label:"Label on the left",labelPosition:"left"}),l.createElement(s.i,{my:"xs",label:"Label in the center",labelPosition:"center"}),l.createElement(s.i,{my:"xs",label:"Label on the right",labelPosition:"right"}),l.createElement(s.i,{my:"xs",variant:"dashed",labelPosition:"center",label:l.createElement(l.Fragment,null,l.createElement(p.Z,{size:12}),l.createElement(x.x,{ml:5},"Search results"))}),l.createElement(s.i,{my:"xs",label:l.createElement(f.e,{href:"https://mantine.dev",target:"_blank",inherit:!0},"Link label")}))}},b=`
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
`,E={type:"code",code:b,component:function(){return l.createElement(l.Fragment,null,l.createElement(s.i,{my:"xs",size:"xs"}),l.createElement(s.i,{my:"xs",size:"sm"}),l.createElement(s.i,{my:"xs",size:"md"}),l.createElement(s.i,{my:"xs",size:"lg"}),l.createElement(s.i,{my:"xs",size:"xl"}),l.createElement(s.i,{my:"xs",size:10}))}};var y=t(22971);let D=`
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
`,g={type:"code",code:D,component:function(){return l.createElement(y.Z,null,l.createElement(Text.x,null,"Label"),l.createElement(s.i,{orientation:"vertical"}),l.createElement(Text.x,null,"Label"),l.createElement(s.i,{size:"sm",orientation:"vertical"}),l.createElement(Text.x,null,"Label"),l.createElement(s.i,{size:"md",orientation:"vertical"}),l.createElement(Text.x,null,"Label"),l.createElement(s.i,{size:"lg",orientation:"vertical"}),l.createElement(Text.x,null,"Label"),l.createElement(s.i,{size:"xl",orientation:"vertical"}),l.createElement(Text.x,null,"Label"))}},q=(0,a.A)(o.us.Divider);function z(e){let i={h2:"h2",...(0,n.a)(),...e.components},{Demo:t}=i;return t||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:c}),"\n",(0,r.jsx)(i.h2,{id:"variants",children:"Variants"}),"\n",(0,r.jsx)(t,{data:u}),"\n",(0,r.jsx)(i.h2,{id:"with-label",children:"With label"}),"\n",(0,r.jsx)(t,{data:h}),"\n",(0,r.jsx)(i.h2,{id:"sizes",children:"Sizes"}),"\n",(0,r.jsx)(t,{data:E}),"\n",(0,r.jsx)(i.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,r.jsx)(t,{data:g})]})}function L(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(q,{...e,children:(0,r.jsx)(z,{...e})})}},67181:function(e,i,t){"use strict";t.d(i,{i:function(){return x}});var r=t(27378),n=t(92082),a=t(83453),o=t(89738),l=t(96739),s=t(6231),m=t(56589),c=t(20410),d={root:"m-3eebeb36",label:"m-9e365f20"};let u={orientation:"horizontal"},p=(0,a.Z)((e,{color:i,variant:t,size:r})=>({root:{"--divider-color":i?(0,o.p)(i,e):void 0,"--divider-border-style":t,"--divider-size":(0,n.ap)(r,"divider-size")}})),x=(0,c.d)((e,i)=>{let t=(0,l.w)("Divider",u,e),{classNames:n,className:a,style:o,styles:c,unstyled:x,vars:f,color:v,orientation:h,label:b,labelPosition:E,...y}=t,D=(0,s.y)({name:"Divider",classes:d,props:t,className:a,style:o,classNames:n,styles:c,unstyled:x,vars:f,varsResolver:p});return r.createElement(m.x,{ref:i,mod:{orientation:h,"with-label":!!b},...D("root"),...y,role:"separator"},b&&r.createElement(m.x,{component:"span",mod:{position:E},...D("label")},b))});x.classes=d,x.displayName="@mantine/core/Divider"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=67670)}),_N_E=e.O()}]);