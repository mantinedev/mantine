(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84675],{41039:(e,i,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/divider",function(){return t(40479)}])},40479:(e,i,t)=>{"use strict";t.r(i),t.d(i,{default:()=>T});var r=t(31085),s=t(71184),a=t(93065);t(14041);var n=t(33450),o=t(7098),d=t(51606),l=t(29686),c=t(69564),m=t(34056),u=t(6754),v={root:"m_3eebeb36",label:"m_9e365f20"};let h={orientation:"horizontal"},p=(0,o.V)((e,{color:i,variant:t,size:r})=>({root:{"--divider-color":i?(0,d.r)(i,e):void 0,"--divider-border-style":t,"--divider-size":(0,n.YC)(r,"divider-size")}})),x=(0,u.P9)((e,i)=>{let t=(0,l.Y)("Divider",h,e),{classNames:s,className:a,style:n,styles:o,unstyled:d,vars:u,color:x,orientation:y,label:g,labelPosition:f,mod:j,...b}=t,k=(0,c.I)({name:"Divider",classes:v,props:t,className:a,style:n,classNames:s,styles:o,unstyled:d,vars:u,varsResolver:p});return(0,r.jsx)(m.a,{ref:i,mod:[{orientation:y,"with-label":!!g},j],...k("root"),...b,role:"separator",children:g&&(0,r.jsx)(m.a,{component:"span",mod:{position:f},...k("label"),children:g})})});x.classes=v,x.displayName="@mantine/core/Divider";let y={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.E,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"}),(0,r.jsx)(x,{my:"md"}),(0,r.jsx)(a.E,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"}),(0,r.jsx)(x,{my:"md"}),(0,r.jsx)(a.E,{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, officiis! Fugit minus ea, perferendis eum consectetur quae vitae. Aliquid, quam reprehenderit? Maiores sed pariatur aliquid commodi atque sunt officiis natus?"})]})},code:`
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

`,centered:!0,maxWidth:500},g={type:"code",code:`
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
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{my:"sm"}),(0,r.jsx)(x,{my:"sm",variant:"dashed"}),(0,r.jsx)(x,{my:"sm",variant:"dotted"})]})}};var f=t(5310),j=t(12129);let b={type:"code",code:`
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
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{my:"xs",label:"Label on the left",labelPosition:"left"}),(0,r.jsx)(x,{my:"xs",label:"Label in the center",labelPosition:"center"}),(0,r.jsx)(x,{my:"xs",label:"Label on the right",labelPosition:"right"}),(0,r.jsx)(x,{my:"xs",variant:"dashed",labelPosition:"center",label:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.A,{size:12}),(0,r.jsx)(m.a,{ml:5,children:"Search results"})]})}),(0,r.jsx)(x,{my:"xs",label:(0,r.jsx)(j.M,{href:"https://mantine.dev",target:"_blank",inherit:!0,children:"Link label"})})]})}},k={type:"code",code:`
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
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(x,{my:"xs",size:"xs"}),(0,r.jsx)(x,{my:"xs",size:"sm"}),(0,r.jsx)(x,{my:"xs",size:"md"}),(0,r.jsx)(x,{my:"xs",size:"lg"}),(0,r.jsx)(x,{my:"xs",size:"xl"}),(0,r.jsx)(x,{my:"xs",size:10})]})}};var M=t(56051);let A={type:"code",code:`
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
`,component:function(){return(0,r.jsxs)(M.Y,{children:[(0,r.jsx)(a.E,{children:"Label"}),(0,r.jsx)(x,{orientation:"vertical"}),(0,r.jsx)(a.E,{children:"Label"}),(0,r.jsx)(x,{size:"sm",orientation:"vertical"}),(0,r.jsx)(a.E,{children:"Label"}),(0,r.jsx)(x,{size:"md",orientation:"vertical"}),(0,r.jsx)(a.E,{children:"Label"}),(0,r.jsx)(x,{size:"lg",orientation:"vertical"}),(0,r.jsx)(a.E,{children:"Label"}),(0,r.jsx)(x,{size:"xl",orientation:"vertical"}),(0,r.jsx)(a.E,{children:"Label"})]})}};var D=t(18675),q=t(20017);let z=(0,D.P)(q.XZ.Divider);function L(e){let i={h2:"h2",...(0,s.R)(),...e.components},{Demo:t}=i;return t||function(e,i){throw Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(t,{data:y}),"\n",(0,r.jsx)(i.h2,{id:"variants",children:"Variants"}),"\n",(0,r.jsx)(t,{data:g}),"\n",(0,r.jsx)(i.h2,{id:"with-label",children:"With label"}),"\n",(0,r.jsx)(t,{data:b}),"\n",(0,r.jsx)(i.h2,{id:"sizes",children:"Sizes"}),"\n",(0,r.jsx)(t,{data:k}),"\n",(0,r.jsx)(i.h2,{id:"vertical-orientation",children:"Vertical orientation"}),"\n",(0,r.jsx)(t,{data:A})]})}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(z,{...e,children:(0,r.jsx)(L,{...e})})}},87186:(e,i,t)=>{"use strict";t.d(i,{A:()=>r});var r=(0,t(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,i,t)=>{"use strict";t.d(i,{A:()=>r});var r=(0,t(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,i,t)=>{"use strict";t.d(i,{A:()=>r});var r=(0,t(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,i,t)=>{"use strict";t.d(i,{A:()=>r});var r=(0,t(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,i,t)=>{"use strict";t.d(i,{A:()=>r});var r=(0,t(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,i,t)=>{"use strict";t.d(i,{A:()=>r});var r=(0,t(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,i,t)=>{"use strict";t.d(i,{A:()=>r});var r=(0,t(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,i,t)=>{"use strict";t.d(i,{A:()=>r});var r=(0,t(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,i,t)=>{"use strict";t.d(i,{A:()=>r});var r=(0,t(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])}},e=>{var i=i=>e(e.s=i);e.O(0,[18675,90636,46593,38792],()=>i(41039)),_N_E=e.O()}]);