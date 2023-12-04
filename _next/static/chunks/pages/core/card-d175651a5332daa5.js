(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3320],{3691:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("dots","IconDots",[["path",{d:"M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]])},52076:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("eye","IconEye",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",key:"svg-1"}]])},89611:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])},15352:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/card",function(){return n(48693)}])},48693:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var o=n(24246),a=n(71670),r=n(3916),i=n(30289),d=n(27378),s=n(92082),c=n(83453),m=n(96739),l=n(6231),h=n(50332),p=n(98477),u=n(56589),g=n(71656);let[f,w]=(0,g.R)("Card component was not found in tree");var x={root:"m-e615b15f",section:"m-599a2148"};let v={},y=(0,h.b)((e,t)=>{let n=(0,m.w)("CardSection",v,e),{classNames:o,className:a,style:r,styles:i,vars:s,withBorder:c,inheritPadding:l,...h}=n,p=w();return d.createElement(u.x,{ref:t,mod:{"with-border":c,"inherit-padding":l},...p.getStyles("section",{className:a,style:r,styles:i,classNames:o}),...h})});y.classes=x,y.displayName="@mantine/core/CardSection";let b={},C=(0,c.Z)((e,{padding:t})=>({root:{"--card-padding":(0,s.bG)(t)}})),j=(0,h.b)((e,t)=>{let n=(0,m.w)("Card",b,e),{classNames:o,className:a,style:r,styles:i,unstyled:s,vars:c,children:h,padding:u,...g}=n,w=(0,l.y)({name:"Card",props:n,classes:x,className:a,style:r,classNames:o,styles:i,unstyled:s,vars:c,varsResolver:C}),v=d.Children.toArray(h),j=v.map((e,t)=>"object"==typeof e&&e&&"type"in e&&e.type===y?(0,d.cloneElement)(e,{"data-first-section":0===t||void 0,"data-last-section":t===v.length-1||void 0}):e);return d.createElement(f,{value:{getStyles:w}},d.createElement(p.X,{ref:t,unstyled:s,...w("root"),...g},j))});j.classes=x,j.displayName="@mantine/core/Card",j.Section=y;var Image=n(58818),E=n(22971),Text=n(26569),S=n(73988),k=n(8671);let I=`
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
}

`,M={type:"code",code:I,component:function(){return d.createElement(j,{shadow:"sm",padding:"lg",radius:"md",withBorder:!0},d.createElement(j.Section,null,d.createElement(Image.E,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",height:160,alt:"Norway"})),d.createElement(E.Z,{justify:"space-between",mt:"md",mb:"xs"},d.createElement(Text.x,{fw:500},"Norway Fjord Adventures"),d.createElement(S.C,{color:"pink"},"On Sale")),d.createElement(Text.x,{size:"sm",c:"dimmed"},"With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"),d.createElement(k.z,{color:"blue",fullWidth:!0,mt:"md",radius:"md"},"Book classic tour now"))},centered:!0,maxWidth:340,dimmed:!0},T=`
import { Card, Image, Text } from '@mantine/core';

function Demo() {
  return (
    <Card
      shadow="sm"
      padding="xl"
      component="a"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
      target="_blank"
    >
      <Card.Section>
        <Image
          src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
          h={160}
          alt="No way!"
        />
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        You&apos;ve won a million dollars in cash!
      </Text>

      <Text mt="xs" c="dimmed" size="sm">
        Please click anywhere on this card to claim your reward, this is not a fraud, trust us
      </Text>
    </Card>
  );
}
`,B={type:"code",code:T,component:function(){return d.createElement(j,{shadow:"sm",padding:"lg",component:"a",href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",target:"_blank"},d.createElement(j.Section,null,d.createElement(Image.E,{src:"https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",h:160,alt:"No way!"})),d.createElement(Text.x,{fw:500,size:"lg",mt:"md"},"You've won a million dollars in cash!"),d.createElement(Text.x,{mt:"xs",c:"dimmed",size:"sm"},"Please click anywhere on this card to claim your reward, this is not a fraud, trust us"))},centered:!0,maxWidth:340,dimmed:!0},N=`
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section component="a" href="https://mantine.dev/">
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>Norway Fjord Adventures</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
}
`,G={type:"code",code:N,component:function(){return d.createElement(j,{shadow:"sm",padding:"lg",radius:"md",withBorder:!0},d.createElement(j.Section,{component:"a",href:"https://mantine.dev/"},d.createElement(Image.E,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",height:160,alt:"Norway"})),d.createElement(E.Z,{justify:"space-between",mt:"md",mb:"xs"},d.createElement(Text.x,{fw:500},"Norway Fjord Adventures"),d.createElement(S.C,{color:"pink"},"On Sale")),d.createElement(Text.x,{size:"sm",c:"dimmed"},"With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"),d.createElement(k.z,{color:"blue",fullWidth:!0,mt:"md",radius:"md"},"Book classic tour now"))},centered:!0,maxWidth:340,dimmed:!0};var D=n(82409),Z=n(84246),z=n(71078),W=n(37454),P=n(3691),F=(0,n(54764).Z)("file-zip","IconFileZip",[["path",{d:"M6 20.735a2 2 0 0 1 -1 -1.735v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1",key:"svg-0"}],["path",{d:"M11 17a2 2 0 0 1 2 2v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a2 2 0 0 1 2 -2z",key:"svg-1"}],["path",{d:"M11 5l-1 0",key:"svg-2"}],["path",{d:"M13 7l-1 0",key:"svg-3"}],["path",{d:"M11 9l-1 0",key:"svg-4"}],["path",{d:"M13 11l-1 0",key:"svg-5"}],["path",{d:"M11 13l-1 0",key:"svg-6"}],["path",{d:"M13 15l-1 0",key:"svg-7"}]]),_=n(52076),A=n(89611);let H=`
import { Card, Group, Text, Menu, ActionIcon, Image, SimpleGrid, rem } from '@mantine/core';
import { IconDots, IconEye, IconFileZip, IconTrash } from '@tabler/icons-react';

const images = [
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png',
  'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png',
];

function Demo() {
  return (
    <Card withBorder shadow="sm" radius="md">
      <Card.Section withBorder inheritPadding py="xs">
        <Group justify="space-between">
          <Text fw={500}>Review pictures</Text>
          <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
              <ActionIcon variant="subtle" color="gray">
                <IconDots style={{ width: rem(16), height: rem(16) }} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item leftSection={<IconFileZip style={{ width: rem(14), height: rem(14) }} />}>
                Download zip
              </Menu.Item>
              <Menu.Item leftSection={<IconEye style={{ width: rem(14), height: rem(14) }} />}>
                Preview all
              </Menu.Item>
              <Menu.Item
                leftSection={<IconTrash style={{ width: rem(14), height: rem(14) }} />}
                color="red"
              >
                Delete all
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card.Section>

      <Text mt="sm" c="dimmed" size="sm">
        <Text span inherit c="var(--mantine-color-anchor)">
          200+ images uploaded
        </Text>{' '}
        since last visit, review them to select which one should be added to your gallery
      </Text>

      <Card.Section mt="sm">
        <Image src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png" />
      </Card.Section>

      <Card.Section inheritPadding mt="sm" pb="md">
        <SimpleGrid cols={3}>
          {images.map((image) => (
            <Image src={image} key={image} radius="sm" />
          ))}
        </SimpleGrid>
      </Card.Section>
    </Card>
  );
}
`,X=["https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png"],O={type:"code",component:function(){return d.createElement(j,{withBorder:!0,shadow:"sm",radius:"md"},d.createElement(j.Section,{withBorder:!0,inheritPadding:!0,py:"xs"},d.createElement(E.Z,{justify:"space-between"},d.createElement(Text.x,{fw:500},"Review pictures"),d.createElement(D.v,{withinPortal:!0,position:"bottom-end",shadow:"sm"},d.createElement(D.v.Target,null,d.createElement(Z.A,{variant:"subtle",color:"gray"},d.createElement(P.Z,{style:{width:(0,z.h)(16),height:(0,z.h)(16)}}))),d.createElement(D.v.Dropdown,null,d.createElement(D.v.Item,{leftSection:d.createElement(F,{style:{width:(0,z.h)(14),height:(0,z.h)(14)}})},"Download zip"),d.createElement(D.v.Item,{leftSection:d.createElement(_.Z,{style:{width:(0,z.h)(14),height:(0,z.h)(14)}})},"Preview all"),d.createElement(D.v.Item,{leftSection:d.createElement(A.Z,{style:{width:(0,z.h)(14),height:(0,z.h)(14)}}),color:"red"},"Delete all"))))),d.createElement(Text.x,{mt:"sm",c:"dimmed",size:"sm"},d.createElement(Text.x,{span:!0,inherit:!0,c:"var(--mantine-color-anchor)"},"200+ images uploaded")," ","since last visit, review them to select which one should be added to your gallery"),d.createElement(j.Section,{mt:"sm"},d.createElement(Image.E,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png"})),d.createElement(j.Section,{inheritPadding:!0,mt:"sm",pb:"md"},d.createElement(W.M,{cols:3},X.map(e=>d.createElement(Image.E,{src:e,key:e,radius:"sm"})))))},code:H,centered:!0,maxWidth:340,dimmed:!0},Q=(0,r.A)(i.us.Card);function R(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Card"})," is a wrapper around ",(0,o.jsx)(t.a,{href:"/core/paper/",children:"Paper"})," component with some additional styles and ",(0,o.jsx)(t.code,{children:"Card.Section"}),"\ncomponent that allows to split card into sections. If you do not need sections, you use ",(0,o.jsx)(t.a,{href:"/core/paper/",children:"Paper"})," component instead."]}),"\n",(0,o.jsx)(n,{data:M}),"\n",(0,o.jsx)(t.h2,{id:"polymorphic-component",children:"Polymorphic component"}),"\n",(0,o.jsxs)(t.p,{children:["Card is a ",(0,o.jsx)(t.a,{href:"/guides/polymorphic/",children:"polymorphic component"})," component, you can change its root element:"]}),"\n",(0,o.jsx)(n,{data:B}),"\n",(0,o.jsx)(t.h2,{id:"cardsection",children:"Card.Section"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Card.Section"})," is a special component that is used to remove Card padding from its children while other elements still have horizontal spacing.\n",(0,o.jsx)(t.code,{children:"Card.Section"})," works the following way:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"If component is the first child in Card, then it has negative top, left and right margins"}),"\n",(0,o.jsx)(t.li,{children:"If it is the last child in Card, then it has negative bottom, left and right margins"}),"\n",(0,o.jsx)(t.li,{children:"If it is in the middle then, only the left and right margins will be negative"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Card } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Card padding=\"xl\">\n      {/* top, right, left margins are negative – -1 * theme.spacing.xl */}\n      <Card.Section>First section</Card.Section>\n\n      {/* Content that is not inside Card.Section will have theme.spacing.xl spacing on all sides relative to Card */}\n      <Text>Some other content</Text>\n\n      {/* right, left margins are negative – -1 * theme.spacing.xl */}\n      <Card.Section>Middle section</Card.Section>\n\n      {/* bottom, right, left margins are negative – -1 * theme.spacing.xl */}\n      <Card.Section>Last section</Card.Section>\n    </Card>\n  );\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Note that ",(0,o.jsx)(t.code,{children:"Card"})," relies on mapping direct children and you cannot use fragments or others wrappers for ",(0,o.jsx)(t.code,{children:"Card.Section"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Card } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Card padding=\"xl\">\n      <div>\n        <Card.Section>Won't work</Card.Section>\n      </div>\n\n      <>\n        <Card.Section>Won't work either</Card.Section>\n      </>\n\n      <Card.Section>Works fine</Card.Section>\n    </Card>\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"polymorphic-cardsection",children:"Polymorphic Card.Section"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Card.Section"})," is a ",(0,o.jsx)(t.a,{href:"/guides/polymorphic/",children:"polymorphic component"})," component, you can change its root element:"]}),"\n",(0,o.jsx)(n,{data:G}),"\n",(0,o.jsx)(t.h2,{id:"withborder-and-inheritpadding-props",children:"withBorder and inheritPadding props"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"withBorder"})," prop adds top and bottom border to ",(0,o.jsx)(t.code,{children:"Card.Section"})," depending on its position relative to other content and sections"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"inheritPadding"})," prop adds the same left and right padding to ",(0,o.jsx)(t.code,{children:"Card.Section"})," as set in ",(0,o.jsx)(t.code,{children:"Card"})," component"]}),"\n"]}),"\n",(0,o.jsx)(n,{data:O})]})}function Y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(Q,{...e,children:(0,o.jsx)(R,{...e})})}},73988:function(e,t,n){"use strict";n.d(t,{C:function(){return u}});var o=n(27378),a=n(92082),r=n(83453),i=n(89738),d=n(96739),s=n(6231),c=n(56589),m=n(50332),l={root:"m-347db0ec","root--dot":"m-fbd81e3d",label:"m-5add502a",section:"m-91fdda9b"};let h={},p=(0,r.Z)((e,{radius:t,color:n,gradient:o,variant:r,size:d})=>{let s=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:o,variant:r||"filled"});return{root:{"--badge-height":(0,a.ap)(d,"badge-height"),"--badge-padding-x":(0,a.ap)(d,"badge-padding-x"),"--badge-fz":(0,a.ap)(d,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,a.H5)(t),"--badge-bg":n||r?s.background:void 0,"--badge-color":n||r?s.color:void 0,"--badge-bd":n||r?s.border:void 0,"--badge-dot-color":"dot"===r?(0,i.p)(n,e):void 0}}}),u=(0,m.b)((e,t)=>{let n=(0,d.w)("Badge",h,e),{classNames:a,className:r,style:i,styles:m,unstyled:u,vars:g,radius:f,color:w,gradient:x,leftSection:v,rightSection:y,children:b,variant:C,fullWidth:j,...E}=n,S=(0,s.y)({name:"Badge",props:n,classes:l,className:r,style:i,classNames:a,styles:m,unstyled:u,vars:g,varsResolver:p});return o.createElement(c.x,{variant:C,mod:{block:j},...S("root",{variant:C}),ref:t,...E},v&&o.createElement("span",{...S("section"),"data-position":"left"},v),o.createElement("span",{...S("label")},b),y&&o.createElement("span",{...S("section"),"data-position":"right"},y))});u.classes=l,u.displayName="@mantine/core/Badge"},58818:function(e,t,n){"use strict";n.d(t,{E:function(){return Image}});var o=n(27378),a=n(92082),r=n(83453),i=n(96739),d=n(6231),s=n(56589),c=n(50332),m={root:"m-9e117634"};let l={},h=(0,r.Z)((e,{radius:t,fit:n})=>({root:{"--image-radius":void 0===t?void 0:(0,a.H5)(t),"--image-object-fit":n}})),Image=(0,c.b)((e,t)=>{let n=(0,i.w)("Image",l,e),{classNames:a,className:r,style:c,styles:p,unstyled:u,vars:g,onError:f,src:w,radius:x,fit:v,fallbackSrc:y,...b}=n,[C,j]=(0,o.useState)(!w);(0,o.useEffect)(()=>j(!w),[w]);let E=(0,d.y)({name:"Image",classes:m,props:n,className:r,style:c,classNames:a,styles:p,unstyled:u,vars:g,varsResolver:h});return C&&y?o.createElement(s.x,{component:"img",src:y,...E("root"),onError:f,mod:"fallback",...b}):o.createElement(s.x,{component:"img",ref:t,...E("root"),src:w,onError:e=>{f?.(e),j(!0)},...b})});Image.classes=m,Image.displayName="@mantine/core/Image"},37454:function(e,t,n){"use strict";n.d(t,{M:function(){return v}});var o=n(27378),a=n(96739),r=n(6231),i=n(40593),d=n(56589),s=n(20410),c=n(53007),m=n(86689),l=n(92082),h=n(31582),p=n(75001),u=n(2256),g=n(9889);function f({spacing:e,verticalSpacing:t,cols:n,selector:a}){let r=(0,u.rZ)(),i=void 0===t?e:t,d=(0,m.L)({"--sg-spacing-x":(0,l.bG)((0,p.v)(e)),"--sg-spacing-y":(0,l.bG)((0,p.v)(i)),"--sg-cols":p.v(n)?.toString()}),s=(0,c.X)(r.breakpoints).reduce((t,o)=>(t[o]||(t[o]={}),"object"==typeof e&&void 0!==e[o]&&(t[o]["--sg-spacing-x"]=(0,l.bG)(e[o])),"object"==typeof i&&void 0!==i[o]&&(t[o]["--sg-spacing-y"]=(0,l.bG)(i[o])),"object"==typeof n&&void 0!==n[o]&&(t[o]["--sg-cols"]=n[o]),t),{}),f=(0,h.I)((0,c.X)(s),r).filter(e=>(0,c.X)(s[e.value]).length>0),w=f.map(e=>({query:`(min-width: ${r.breakpoints[e.value]})`,styles:s[e.value]}));return o.createElement(g.f,{styles:d,media:w,selector:a})}var w={root:"m-2415a157"};let x={cols:1,spacing:"md"},v=(0,s.d)((e,t)=>{let n=(0,a.w)("SimpleGrid",x,e),{classNames:s,className:c,style:m,styles:l,unstyled:h,vars:p,cols:u,verticalSpacing:g,spacing:v,...y}=n,b=(0,r.y)({name:"SimpleGrid",classes:w,props:n,className:c,style:m,classNames:s,styles:l,unstyled:h,vars:p}),C=(0,i.m)();return o.createElement(o.Fragment,null,o.createElement(f,{...n,selector:`.${C}`}),o.createElement(d.x,{ref:t,...b("root",{className:C}),...y}))});v.classes=w,v.displayName="@mantine/core/SimpleGrid"},75001:function(e,t,n){"use strict";function o(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}n.d(t,{v:function(){return o}})},10874:function(e,t,n){"use strict";n.d(t,{o:function(){return a}});var o=n(27589);function a(e,t){return e in t.breakpoints?(0,o.px)(t.breakpoints[e]):(0,o.px)(e)}},31582:function(e,t,n){"use strict";n.d(t,{I:function(){return a}});var o=n(10874);function a(e,t){let n=e.map(e=>({value:e,px:(0,o.o)(e,t)}));return n.sort((e,t)=>e.px-t.px),n}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=15352)}),_N_E=e.O()}]);