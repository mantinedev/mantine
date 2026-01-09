(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19418],{1798:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},4386:(e,t,n)=>{"use strict";n.d(t,{_:()=>p});var a=n(6029),i=n(55729),o=n(14163),r=n(33987),d=n(38919),s=n(15583),c=n(76320),l=n(82500),h={root:"m_9e117634"};let m=(0,r.V)((e,{radius:t,fit:n})=>({root:{"--image-radius":void 0===t?void 0:(0,o.nJ)(t),"--image-object-fit":n}})),p=(0,l.v)((e,t)=>{let n=(0,d.Y)("Image",null,e),{classNames:o,className:r,style:l,styles:p,unstyled:g,vars:u,onError:x,src:v,radius:w,fit:y,fallbackSrc:f,mod:j,attributes:b,...k}=n,[C,M]=(0,i.useState)(!v);(0,i.useEffect)(()=>M(!v),[v]);let S=(0,s.I)({name:"Image",classes:h,props:n,className:r,style:l,classNames:o,styles:p,unstyled:g,attributes:b,vars:u,varsResolver:m});return C&&f?(0,a.jsx)(c.a,{component:"img",ref:t,src:f,...S("root"),onError:x,mod:["fallback",j],...k}):(0,a.jsx)(c.a,{component:"img",ref:t,...S("root"),src:v,onError:e=>{x?.(e),M(!0)},mod:j,...k})});p.classes=h,p.displayName="@mantine/core/Image"},6620:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},12060:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","eye","Eye",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",key:"svg-1"}]])},24583:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},31584:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>A});var a=n(6029),i=n(16285),o=n(66416),r=n(4386),d=n(57414),s=n(45208),c=n(55968),l=n(61087);let h={type:"code",code:`
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

`,component:function(){return(0,a.jsxs)(o.Z,{shadow:"sm",padding:"lg",radius:"md",withBorder:!0,children:[(0,a.jsx)(o.Z.Section,{children:(0,a.jsx)(r._,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",height:160,alt:"Norway"})}),(0,a.jsxs)(d.Y,{justify:"space-between",mt:"md",mb:"xs",children:[(0,a.jsx)(s.E,{fw:500,children:"Norway Fjord Adventures"}),(0,a.jsx)(c.E,{color:"pink",children:"On Sale"})]}),(0,a.jsx)(s.E,{size:"sm",c:"dimmed",children:"With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"}),(0,a.jsx)(l.$,{color:"blue",fullWidth:!0,mt:"md",radius:"md",children:"Book classic tour now"})]})},centered:!0,maxWidth:340,dimmed:!0},m={type:"code",code:`
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
`,component:function(){return(0,a.jsxs)(o.Z,{shadow:"sm",padding:"lg",component:"a",href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",target:"_blank",children:[(0,a.jsx)(o.Z.Section,{children:(0,a.jsx)(r._,{src:"https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",h:160,alt:"No way!"})}),(0,a.jsx)(s.E,{fw:500,size:"lg",mt:"md",children:"You've won a million dollars in cash!"}),(0,a.jsx)(s.E,{mt:"xs",c:"dimmed",size:"sm",children:"Please click anywhere on this card to claim your reward, this is not a fraud, trust us"})]})},centered:!0,maxWidth:340,dimmed:!0},p={type:"code",code:`
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
`,component:function(){return(0,a.jsxs)(o.Z,{shadow:"sm",padding:"lg",radius:"md",withBorder:!0,children:[(0,a.jsx)(o.Z.Section,{component:"a",href:"https://mantine.dev/",children:(0,a.jsx)(r._,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",height:160,alt:"Norway"})}),(0,a.jsxs)(d.Y,{justify:"space-between",mt:"md",mb:"xs",children:[(0,a.jsx)(s.E,{fw:500,children:"Norway Fjord Adventures"}),(0,a.jsx)(c.E,{color:"pink",children:"On Sale"})]}),(0,a.jsx)(s.E,{size:"sm",c:"dimmed",children:"With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"}),(0,a.jsx)(l.$,{color:"blue",fullWidth:!0,mt:"md",radius:"md",children:"Book classic tour now"})]})},centered:!0,maxWidth:340,dimmed:!0};var g=n(73711);let u=(0,n(41495).A)("outline","file-zip","FileZip",[["path",{d:"M6 20.735a2 2 0 0 1 -1 -1.735v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1",key:"svg-0"}],["path",{d:"M11 17a2 2 0 0 1 2 2v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a2 2 0 0 1 2 -2z",key:"svg-1"}],["path",{d:"M11 5l-1 0",key:"svg-2"}],["path",{d:"M13 7l-1 0",key:"svg-3"}],["path",{d:"M11 9l-1 0",key:"svg-4"}],["path",{d:"M13 11l-1 0",key:"svg-5"}],["path",{d:"M11 13l-1 0",key:"svg-6"}],["path",{d:"M13 15l-1 0",key:"svg-7"}]]);var x=n(12060),v=n(90993),w=n(43858),y=n(44572),f=n(89238);let j=["https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png"],b={type:"code",component:function(){return(0,a.jsxs)(o.Z,{withBorder:!0,shadow:"sm",radius:"md",children:[(0,a.jsx)(o.Z.Section,{withBorder:!0,inheritPadding:!0,py:"xs",children:(0,a.jsxs)(d.Y,{justify:"space-between",children:[(0,a.jsx)(s.E,{fw:500,children:"Review pictures"}),(0,a.jsxs)(w.W,{withinPortal:!0,position:"bottom-end",shadow:"sm",children:[(0,a.jsx)(w.W.Target,{children:(0,a.jsx)(y.M,{variant:"subtle",color:"gray",children:(0,a.jsx)(g.A,{size:16})})}),(0,a.jsxs)(w.W.Dropdown,{children:[(0,a.jsx)(w.W.Item,{leftSection:(0,a.jsx)(u,{size:14}),children:"Download zip"}),(0,a.jsx)(w.W.Item,{leftSection:(0,a.jsx)(x.A,{size:14}),children:"Preview all"}),(0,a.jsx)(w.W.Item,{leftSection:(0,a.jsx)(v.A,{size:14}),color:"red",children:"Delete all"})]})]})]})}),(0,a.jsxs)(s.E,{mt:"sm",c:"dimmed",size:"sm",children:[(0,a.jsx)(s.E,{span:!0,inherit:!0,c:"var(--mantine-color-anchor)",children:"200+ images uploaded"})," ","since last visit, review them to select which one should be added to your gallery"]}),(0,a.jsx)(o.Z.Section,{mt:"sm",children:(0,a.jsx)(r._,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png"})}),(0,a.jsx)(o.Z.Section,{inheritPadding:!0,mt:"sm",pb:"md",children:(0,a.jsx)(f.r,{cols:3,children:j.map(e=>(0,a.jsx)(r._,{src:e,radius:"sm"},e))})})]})},code:`
import { ActionIcon, Card, Group, Image, Menu, SimpleGrid, Text } from '@mantine/core';
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
                <IconDots size={16} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item leftSection={<IconFileZip size={14} />}>
                Download zip
              </Menu.Item>
              <Menu.Item leftSection={<IconEye size={14} />}>
                Preview all
              </Menu.Item>
              <Menu.Item
                leftSection={<IconTrash size={14} />}
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
`,centered:!0,maxWidth:340,dimmed:!0};var k=n(38547),C=n(5262);let M=(0,k.P)(C.XZ.Card);function S(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Card"})," is a wrapper around ",(0,a.jsx)(t.a,{href:"/core/paper/",children:"Paper"})," component with some additional styles and ",(0,a.jsx)(t.code,{children:"Card.Section"}),"\ncomponent that allows to split card into sections. If you do not need sections, you use ",(0,a.jsx)(t.a,{href:"/core/paper/",children:"Paper"})," component instead."]}),"\n",(0,a.jsx)(n,{data:h}),"\n",(0,a.jsx)(t.h2,{id:"polymorphic-component",children:"Polymorphic component"}),"\n",(0,a.jsxs)(t.p,{children:["Card is a ",(0,a.jsx)(t.a,{href:"/guides/polymorphic/",children:"polymorphic component"})," component, you can change its root element:"]}),"\n",(0,a.jsx)(n,{data:m}),"\n",(0,a.jsx)(t.h2,{id:"cardsection",children:"Card.Section"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Card.Section"})," is a special component that is used to remove Card padding from its children while other elements still have horizontal spacing.\n",(0,a.jsx)(t.code,{children:"Card.Section"})," works the following way:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"If component is the first child in Card, then it has negative top, left and right margins"}),"\n",(0,a.jsx)(t.li,{children:"If it is the last child in Card, then it has negative bottom, left and right margins"}),"\n",(0,a.jsx)(t.li,{children:"If it is in the middle then, only the left and right margins will be negative"}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { Card, Text } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Card padding=\"xl\">\n      {/* top, right, left margins are negative – -1 * theme.spacing.xl */}\n      <Card.Section>First section</Card.Section>\n\n      {/* Content that is not inside Card.Section will have theme.spacing.xl spacing on all sides relative to Card */}\n      <Text>Some other content</Text>\n\n      {/* right, left margins are negative – -1 * theme.spacing.xl */}\n      <Card.Section>Middle section</Card.Section>\n\n      {/* bottom, right, left margins are negative – -1 * theme.spacing.xl */}\n      <Card.Section>Last section</Card.Section>\n    </Card>\n  );\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Note that ",(0,a.jsx)(t.code,{children:"Card"})," relies on mapping direct children and you cannot use fragments or other wrappers for ",(0,a.jsx)(t.code,{children:"Card.Section"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { Card } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Card padding=\"xl\">\n      <div>\n        <Card.Section>Won't work</Card.Section>\n      </div>\n\n      <>\n        <Card.Section>Won't work either</Card.Section>\n      </>\n\n      <Card.Section>Works fine</Card.Section>\n    </Card>\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"polymorphic-cardsection",children:"Polymorphic Card.Section"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Card.Section"})," is a ",(0,a.jsx)(t.a,{href:"/guides/polymorphic/",children:"polymorphic component"})," component, you can change its root element:"]}),"\n",(0,a.jsx)(n,{data:p}),"\n",(0,a.jsx)(t.h2,{id:"withborder-and-inheritpadding-props",children:"withBorder and inheritPadding props"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"withBorder"})," prop adds top and bottom border to ",(0,a.jsx)(t.code,{children:"Card.Section"})," depending on its position relative to other content and sections"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"inheritPadding"})," prop adds the same left and right padding to ",(0,a.jsx)(t.code,{children:"Card.Section"})," as set in ",(0,a.jsx)(t.code,{children:"Card"})," component"]}),"\n"]}),"\n",(0,a.jsx)(n,{data:b})]})}function A(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(M,{...e,children:(0,a.jsx)(S,{...e})})}},34891:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},55968:(e,t,n)=>{"use strict";n.d(t,{E:()=>p});var a=n(6029);n(55729);var i=n(14163),o=n(33987),r=n(21351),d=n(38919),s=n(15583),c=n(76320),l=n(82500),h={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let m=(0,o.V)((e,{radius:t,color:n,gradient:a,variant:o,size:d,autoContrast:s,circle:c})=>{let l=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:a,variant:o||"filled",autoContrast:s});return{root:{"--badge-height":(0,i.YC)(d,"badge-height"),"--badge-padding-x":(0,i.YC)(d,"badge-padding-x"),"--badge-fz":(0,i.YC)(d,"badge-fz"),"--badge-radius":c||void 0===t?void 0:(0,i.nJ)(t),"--badge-bg":n||o?l.background:void 0,"--badge-color":n||o?l.color:void 0,"--badge-bd":n||o?l.border:void 0,"--badge-dot-color":"dot"===o?(0,r.r)(n,e):void 0}}}),p=(0,l.v)((e,t)=>{let n=(0,d.Y)("Badge",null,e),{classNames:i,className:o,style:r,styles:l,unstyled:p,vars:g,radius:u,color:x,gradient:v,leftSection:w,rightSection:y,children:f,variant:j,fullWidth:b,autoContrast:k,circle:C,mod:M,attributes:S,...A}=n,I=(0,s.I)({name:"Badge",props:n,classes:h,className:o,style:r,classNames:i,styles:l,unstyled:p,attributes:S,vars:g,varsResolver:m});return(0,a.jsxs)(c.a,{variant:j,mod:[{block:b,circle:C,"with-right-section":!!y,"with-left-section":!!w},M],...I("root",{variant:j}),ref:t,...A,children:[w&&(0,a.jsx)("span",{...I("section"),"data-position":"left",children:w}),(0,a.jsx)("span",{...I("label"),children:f}),y&&(0,a.jsx)("span",{...I("section"),"data-position":"right",children:y})]})});p.classes=h,p.displayName="@mantine/core/Badge"},65433:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},66416:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var a=n(6029),i=n(55729),o=n(14163),r=n(33987),d=n(38919),s=n(15583),c=n(82500),l=n(5086);let[h,m]=(0,n(95681).F)("Card component was not found in tree");var p={root:"m_e615b15f",section:"m_599a2148"},g=n(76320);let u=(0,c.v)((e,t)=>{let{classNames:n,className:i,style:o,styles:r,vars:s,withBorder:c,inheritPadding:l,mod:h,...p}=(0,d.Y)("CardSection",null,e),u=m();return(0,a.jsx)(g.a,{ref:t,mod:[{"with-border":c,"inherit-padding":l},h],...u.getStyles("section",{className:i,style:o,styles:r,classNames:n}),...p})});u.classes=p,u.displayName="@mantine/core/CardSection";let x=(0,r.V)((e,{padding:t})=>({root:{"--card-padding":(0,o.GY)(t)}})),v=(0,c.v)((e,t)=>{let n=(0,d.Y)("Card",null,e),{classNames:o,className:r,style:c,styles:m,unstyled:g,vars:v,children:w,padding:y,attributes:f,...j}=n,b=(0,s.I)({name:"Card",props:n,classes:p,className:r,style:c,classNames:o,styles:m,unstyled:g,attributes:f,vars:v,varsResolver:x}),k=i.Children.toArray(w),C=k.map((e,t)=>"object"==typeof e&&e&&"type"in e&&e.type===u?(0,i.cloneElement)(e,{"data-first-section":0===t||void 0,"data-last-section":t===k.length-1||void 0}):e);return(0,a.jsx)(h,{value:{getStyles:b},children:(0,a.jsx)(l.t,{ref:t,unstyled:g,...b("root"),...j,children:C})})});v.classes=p,v.displayName="@mantine/core/Card",v.Section=u},73711:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","dots","Dots",[["path",{d:"M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]])},79493:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/card",function(){return n(31584)}])},84276:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},90993:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});let a=(0,n(41495).A)("outline","trash","Trash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=79493)),_N_E=e.O()}]);