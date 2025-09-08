(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84675],{1798:(e,i,t)=>{"use strict";t.d(i,{A:()=>r});let r=(0,t(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},3224:(e,i,t)=>{"use strict";t.d(i,{c:()=>v});var r=t(6029);t(55729);var s=t(14163),a=t(33987),n=t(21351),o=t(38919),d=t(15583),l=t(76320),c=t(8411),m={root:"m_3eebeb36",label:"m_9e365f20"};let u={orientation:"horizontal"},h=(0,a.V)((e,{color:i,variant:t,size:r})=>({root:{"--divider-color":i?(0,n.r)(i,e):void 0,"--divider-border-style":t,"--divider-size":(0,s.YC)(r,"divider-size")}})),v=(0,c.P9)((e,i)=>{let t=(0,o.Y)("Divider",u,e),{classNames:s,className:a,style:n,styles:c,unstyled:v,vars:p,color:x,orientation:y,label:g,labelPosition:f,mod:j,attributes:b,...k}=t,M=(0,d.I)({name:"Divider",classes:m,props:t,className:a,style:n,classNames:s,styles:c,unstyled:v,attributes:b,vars:p,varsResolver:h});return(0,r.jsx)(l.a,{ref:i,mod:[{orientation:y,"with-label":!!g},j],...M("root"),...k,role:"separator",children:g&&(0,r.jsx)(l.a,{component:"span",mod:{position:f},...M("label"),children:g})})});v.classes=m,v.displayName="@mantine/core/Divider"},6620:(e,i,t)=>{"use strict";t.d(i,{A:()=>r});let r=(0,t(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,i,t)=>{"use strict";t.d(i,{A:()=>r});let r=(0,t(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},14367:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>j});var r=t(6029),s=t(16285),a=t(45208),n=t(3224);let o={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.E,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"}),(0,r.jsx)(n.c,{my:"md"}),(0,r.jsx)(a.E,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"}),(0,r.jsx)(n.c,{my:"md"}),(0,r.jsx)(a.E,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"})]})},code:`
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
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.c,{my:"sm"}),(0,r.jsx)(n.c,{my:"sm",variant:"dashed"}),(0,r.jsx)(n.c,{my:"sm",variant:"dotted"})]})}};var l=t(41279),c=t(76320),m=t(32758);let u={type:"code",code:`
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
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.c,{my:"xs",label:"Label on the left",labelPosition:"left"}),(0,r.jsx)(n.c,{my:"xs",label:"Label in the center",labelPosition:"center"}),(0,r.jsx)(n.c,{my:"xs",label:"Label on the right",labelPosition:"right"}),(0,r.jsx)(n.c,{my:"xs",variant:"dashed",labelPosition:"center",label:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.A,{size:12}),(0,r.jsx)(c.a,{ml:5,children:"Search results"})]})}),(0,r.jsx)(n.c,{my:"xs",label:(0,r.jsx)(m.M,{href:"https://mantine.dev",target:"_blank",inherit:!0,children:"Link label"})})]})}},h={type:"code",code:`
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
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.c,{my:"xs",size:"xs"}),(0,r.jsx)(n.c,{my:"xs",size:"sm"}),(0,r.jsx)(n.c,{my:"xs",size:"md"}),(0,r.jsx)(n.c,{my:"xs",size:"lg"}),(0,r.jsx)(n.c,{my:"xs",size:"xl"}),(0,r.jsx)(n.c,{my:"xs",size:10})]})}};var v=t(57414);let p={type:"code",code:`
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
`,component:function(){return(0,r.jsxs)(v.Y,{children:[(0,r.jsx)(a.E,{children:"Label"}),(0,r.jsx)(n.c,{orientation:"vertical"}),(0,r.jsx)(a.E,{children:"Label"}),(0,r.jsx)(n.c,{size:"sm",orientation:"vertical"}),(0,r.jsx)(a.E,{children:"Label"}),(0,r.jsx)(n.c,{size:"md",orientation:"vertical"}),(0,r.jsx)(a.E,{children:"Label"}),(0,r.jsx)(n.c,{size:"lg",orientation:"vertical"}),(0,r.jsx)(a.E,{children:"Label"}),(0,r.jsx)(n.c,{size:"xl",orientation:"vertical"}),(0,r.jsx)(a.E,{children:"Label"})]})}};var x=t(38547),y=t(5262);let g=(0,x.P)(y.XZ.Divider);function f(e){let i={h2:"h2",...(0,s.R)(),...e.components},{Demo:t}=i;return t||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:o}),"\n",(0,r.jsx)(i.h2,{id:"variants",children:"Variants"}),"\n",(0,r.jsx)(t,{data:d}),"\n",(0,r.jsx)(i.h2,{id:"with-label",children:"With label"}),"\n",(0,r.jsx)(t,{data:u}),"\n",(0,r.jsx)(i.h2,{id:"sizes",children:"Sizes"}),"\n",(0,r.jsx)(t,{data:h}),"\n",(0,r.jsx)(i.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,r.jsx)(t,{data:p})]})}function j(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(g,{...e,children:(0,r.jsx)(f,{...e})})}},24583:(e,i,t)=>{"use strict";t.d(i,{A:()=>r});let r=(0,t(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},31807:(e,i,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/divider",function(){return t(14367)}])},34891:(e,i,t)=>{"use strict";t.d(i,{A:()=>r});let r=(0,t(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,i,t)=>{"use strict";t.d(i,{A:()=>r});let r=(0,t(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},65433:(e,i,t)=>{"use strict";t.d(i,{A:()=>r});let r=(0,t(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},84276:(e,i,t)=>{"use strict";t.d(i,{A:()=>r});let r=(0,t(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,i,t)=>{"use strict";t.d(i,{A:()=>r});let r=(0,t(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=31807)),_N_E=e.O()}]);