(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[73320],{20184:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(99882).Z)("dots","IconDots",[["path",{d:"M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-0"}],["path",{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}]])},59905:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(99882).Z)("eye","IconEye",[["path",{d:"M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6",key:"svg-1"}]])},64278:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(99882).Z)("trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])},6110:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/card",function(){return n(94851)}])},94851:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Y}});var o=n(52322),i=n(45392),r=n(2784),a=n(91482),d=n(11200),s=n(38483),c=n(46690),l=n(33502),m=n(1198),h=n(89106);let[p,u]=(0,h.R)("Card component was not found in tree");var g=n(28559),x={root:"m_e615b15f",section:"m_599a2148"};let f={},w=(0,l.b)((e,t)=>{let n=(0,s.w)("CardSection",f,e),{classNames:i,className:r,style:a,styles:d,vars:c,withBorder:l,inheritPadding:m,mod:h,...p}=n,x=u();return(0,o.jsx)(g.x,{ref:t,mod:[{"with-border":l,"inherit-padding":m},h],...x.getStyles("section",{className:r,style:a,styles:d,classNames:i}),...p})});w.classes=x,w.displayName="@mantine/core/CardSection";let j={},v=(0,d.Z)((e,{padding:t})=>({root:{"--card-padding":(0,a.bG)(t)}})),y=(0,l.b)((e,t)=>{let n=(0,s.w)("Card",j,e),{classNames:i,className:a,style:d,styles:l,unstyled:h,vars:u,children:g,padding:f,...y}=n,b=(0,c.y)({name:"Card",props:n,classes:x,className:a,style:d,classNames:i,styles:l,unstyled:h,vars:u,varsResolver:v}),C=r.Children.toArray(g),S=C.map((e,t)=>"object"==typeof e&&e&&"type"in e&&e.type===w?(0,r.cloneElement)(e,{"data-first-section":0===t||void 0,"data-last-section":t===C.length-1||void 0}):e);return(0,o.jsx)(p,{value:{getStyles:b},children:(0,o.jsx)(m.X,{ref:t,unstyled:h,...b("root"),...y,children:S})})});y.classes=x,y.displayName="@mantine/core/Card",y.Section=w;var Image=n(43076),b=n(93010),Text=n(8582),C=n(32581),S=n(17115);let k=`
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

`,I={type:"code",code:k,component:function(){return(0,o.jsxs)(y,{shadow:"sm",padding:"lg",radius:"md",withBorder:!0,children:[(0,o.jsx)(y.Section,{children:(0,o.jsx)(Image.E,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",height:160,alt:"Norway"})}),(0,o.jsxs)(b.Z,{justify:"space-between",mt:"md",mb:"xs",children:[(0,o.jsx)(Text.x,{fw:500,children:"Norway Fjord Adventures"}),(0,o.jsx)(C.C,{color:"pink",children:"On Sale"})]}),(0,o.jsx)(Text.x,{size:"sm",c:"dimmed",children:"With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"}),(0,o.jsx)(S.z,{color:"blue",fullWidth:!0,mt:"md",radius:"md",children:"Book classic tour now"})]})},centered:!0,maxWidth:340,dimmed:!0},M=`
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
`,T={type:"code",code:M,component:function(){return(0,o.jsxs)(y,{shadow:"sm",padding:"lg",component:"a",href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",target:"_blank",children:[(0,o.jsx)(y.Section,{children:(0,o.jsx)(Image.E,{src:"https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80",h:160,alt:"No way!"})}),(0,o.jsx)(Text.x,{fw:500,size:"lg",mt:"md",children:"You've won a million dollars in cash!"}),(0,o.jsx)(Text.x,{mt:"xs",c:"dimmed",size:"sm",children:"Please click anywhere on this card to claim your reward, this is not a fraud, trust us"})]})},centered:!0,maxWidth:340,dimmed:!0},B=`
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
`,N={type:"code",code:B,component:function(){return(0,o.jsxs)(y,{shadow:"sm",padding:"lg",radius:"md",withBorder:!0,children:[(0,o.jsx)(y.Section,{component:"a",href:"https://mantine.dev/",children:(0,o.jsx)(Image.E,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png",height:160,alt:"Norway"})}),(0,o.jsxs)(b.Z,{justify:"space-between",mt:"md",mb:"xs",children:[(0,o.jsx)(Text.x,{fw:500,children:"Norway Fjord Adventures"}),(0,o.jsx)(C.C,{color:"pink",children:"On Sale"})]}),(0,o.jsx)(Text.x,{size:"sm",c:"dimmed",children:"With Fjord Tours you can explore more of the magical fjord landscapes with tours and activities on and around the fjords of Norway"}),(0,o.jsx)(S.z,{color:"blue",fullWidth:!0,mt:"md",radius:"md",children:"Book classic tour now"})]})},centered:!0,maxWidth:340,dimmed:!0};var G=n(20184),_=(0,n(99882).Z)("file-zip","IconFileZip",[["path",{d:"M6 20.735a2 2 0 0 1 -1 -1.735v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-1",key:"svg-0"}],["path",{d:"M11 17a2 2 0 0 1 2 2v2a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-2a2 2 0 0 1 2 -2z",key:"svg-1"}],["path",{d:"M11 5l-1 0",key:"svg-2"}],["path",{d:"M13 7l-1 0",key:"svg-3"}],["path",{d:"M11 9l-1 0",key:"svg-4"}],["path",{d:"M13 11l-1 0",key:"svg-5"}],["path",{d:"M11 13l-1 0",key:"svg-6"}],["path",{d:"M13 15l-1 0",key:"svg-7"}]]),D=n(59905),Z=n(64278),z=n(36761),E=n(54813),W=n(58898),P=n(26802);let F=`
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
`,A=["https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-2.png","https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-3.png"],H={type:"code",component:function(){return(0,o.jsxs)(y,{withBorder:!0,shadow:"sm",radius:"md",children:[(0,o.jsx)(y.Section,{withBorder:!0,inheritPadding:!0,py:"xs",children:(0,o.jsxs)(b.Z,{justify:"space-between",children:[(0,o.jsx)(Text.x,{fw:500,children:"Review pictures"}),(0,o.jsxs)(z.v,{withinPortal:!0,position:"bottom-end",shadow:"sm",children:[(0,o.jsx)(z.v.Target,{children:(0,o.jsx)(E.A,{variant:"subtle",color:"gray",children:(0,o.jsx)(G.Z,{style:{width:(0,W.h)(16),height:(0,W.h)(16)}})})}),(0,o.jsxs)(z.v.Dropdown,{children:[(0,o.jsx)(z.v.Item,{leftSection:(0,o.jsx)(_,{style:{width:(0,W.h)(14),height:(0,W.h)(14)}}),children:"Download zip"}),(0,o.jsx)(z.v.Item,{leftSection:(0,o.jsx)(D.Z,{style:{width:(0,W.h)(14),height:(0,W.h)(14)}}),children:"Preview all"}),(0,o.jsx)(z.v.Item,{leftSection:(0,o.jsx)(Z.Z,{style:{width:(0,W.h)(14),height:(0,W.h)(14)}}),color:"red",children:"Delete all"})]})]})]})}),(0,o.jsxs)(Text.x,{mt:"sm",c:"dimmed",size:"sm",children:[(0,o.jsx)(Text.x,{span:!0,inherit:!0,c:"var(--mantine-color-anchor)",children:"200+ images uploaded"})," ","since last visit, review them to select which one should be added to your gallery"]}),(0,o.jsx)(y.Section,{mt:"sm",children:(0,o.jsx)(Image.E,{src:"https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-4.png"})}),(0,o.jsx)(y.Section,{inheritPadding:!0,mt:"sm",pb:"md",children:(0,o.jsx)(P.M,{cols:3,children:A.map(e=>(0,o.jsx)(Image.E,{src:e,radius:"sm"},e))})})]})},code:F,centered:!0,maxWidth:340,dimmed:!0};var X=n(79016),O=n(33638);let Q=(0,X.A)(O.us.Card);function R(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Card"})," is a wrapper around ",(0,o.jsx)(t.a,{href:"/core/paper/",children:"Paper"})," component with some additional styles and ",(0,o.jsx)(t.code,{children:"Card.Section"}),"\ncomponent that allows to split card into sections. If you do not need sections, you use ",(0,o.jsx)(t.a,{href:"/core/paper/",children:"Paper"})," component instead."]}),"\n",(0,o.jsx)(n,{data:I}),"\n",(0,o.jsx)(t.h2,{id:"polymorphic-component",children:"Polymorphic component"}),"\n",(0,o.jsxs)(t.p,{children:["Card is a ",(0,o.jsx)(t.a,{href:"/guides/polymorphic/",children:"polymorphic component"})," component, you can change its root element:"]}),"\n",(0,o.jsx)(n,{data:T}),"\n",(0,o.jsx)(t.h2,{id:"cardsection",children:"Card.Section"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Card.Section"})," is a special component that is used to remove Card padding from its children while other elements still have horizontal spacing.\n",(0,o.jsx)(t.code,{children:"Card.Section"})," works the following way:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"If component is the first child in Card, then it has negative top, left and right margins"}),"\n",(0,o.jsx)(t.li,{children:"If it is the last child in Card, then it has negative bottom, left and right margins"}),"\n",(0,o.jsx)(t.li,{children:"If it is in the middle then, only the left and right margins will be negative"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Card, Text } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Card padding=\"xl\">\n      {/* top, right, left margins are negative – -1 * theme.spacing.xl */}\n      <Card.Section>First section</Card.Section>\n\n      {/* Content that is not inside Card.Section will have theme.spacing.xl spacing on all sides relative to Card */}\n      <Text>Some other content</Text>\n\n      {/* right, left margins are negative – -1 * theme.spacing.xl */}\n      <Card.Section>Middle section</Card.Section>\n\n      {/* bottom, right, left margins are negative – -1 * theme.spacing.xl */}\n      <Card.Section>Last section</Card.Section>\n    </Card>\n  );\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["Note that ",(0,o.jsx)(t.code,{children:"Card"})," relies on mapping direct children and you cannot use fragments or others wrappers for ",(0,o.jsx)(t.code,{children:"Card.Section"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Card } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Card padding=\"xl\">\n      <div>\n        <Card.Section>Won't work</Card.Section>\n      </div>\n\n      <>\n        <Card.Section>Won't work either</Card.Section>\n      </>\n\n      <Card.Section>Works fine</Card.Section>\n    </Card>\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"polymorphic-cardsection",children:"Polymorphic Card.Section"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Card.Section"})," is a ",(0,o.jsx)(t.a,{href:"/guides/polymorphic/",children:"polymorphic component"})," component, you can change its root element:"]}),"\n",(0,o.jsx)(n,{data:N}),"\n",(0,o.jsx)(t.h2,{id:"withborder-and-inheritpadding-props",children:"withBorder and inheritPadding props"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"withBorder"})," prop adds top and bottom border to ",(0,o.jsx)(t.code,{children:"Card.Section"})," depending on its position relative to other content and sections"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"inheritPadding"})," prop adds the same left and right padding to ",(0,o.jsx)(t.code,{children:"Card.Section"})," as set in ",(0,o.jsx)(t.code,{children:"Card"})," component"]}),"\n"]}),"\n",(0,o.jsx)(n,{data:H})]})}function Y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(Q,{...e,children:(0,o.jsx)(R,{...e})})}},32581:function(e,t,n){"use strict";n.d(t,{C:function(){return u}});var o=n(52322);n(2784);var i=n(91482),r=n(11200),a=n(13588),d=n(38483),s=n(46690),c=n(28559),l=n(33502),m={root:"m_347db0ec","root--dot":"m_fbd81e3d",label:"m_5add502a",section:"m_91fdda9b"};let h={},p=(0,r.Z)((e,{radius:t,color:n,gradient:o,variant:r,size:d,autoContrast:s})=>{let c=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:o,variant:r||"filled",autoContrast:s});return{root:{"--badge-height":(0,i.ap)(d,"badge-height"),"--badge-padding-x":(0,i.ap)(d,"badge-padding-x"),"--badge-fz":(0,i.ap)(d,"badge-fz"),"--badge-radius":void 0===t?void 0:(0,i.H5)(t),"--badge-bg":n||r?c.background:void 0,"--badge-color":n||r?c.color:void 0,"--badge-bd":n||r?c.border:void 0,"--badge-dot-color":"dot"===r?(0,a.p)(n,e):void 0}}}),u=(0,l.b)((e,t)=>{let n=(0,d.w)("Badge",h,e),{classNames:i,className:r,style:a,styles:l,unstyled:u,vars:g,radius:x,color:f,gradient:w,leftSection:j,rightSection:v,children:y,variant:b,fullWidth:C,autoContrast:S,circle:k,mod:I,...M}=n,T=(0,s.y)({name:"Badge",props:n,classes:m,className:r,style:a,classNames:i,styles:l,unstyled:u,vars:g,varsResolver:p});return(0,o.jsxs)(c.x,{variant:b,mod:[{block:C,circle:k},I],...T("root",{variant:b}),ref:t,...M,children:[j&&(0,o.jsx)("span",{...T("section"),"data-position":"left",children:j}),(0,o.jsx)("span",{...T("label"),children:y}),v&&(0,o.jsx)("span",{...T("section"),"data-position":"right",children:v})]})});u.classes=m,u.displayName="@mantine/core/Badge"},43076:function(e,t,n){"use strict";n.d(t,{E:function(){return Image}});var o=n(52322),i=n(2784),r=n(91482),a=n(11200),d=n(38483),s=n(46690),c=n(28559),l=n(33502),m={root:"m_9e117634"};let h={},p=(0,a.Z)((e,{radius:t,fit:n})=>({root:{"--image-radius":void 0===t?void 0:(0,r.H5)(t),"--image-object-fit":n}})),Image=(0,l.b)((e,t)=>{let n=(0,d.w)("Image",h,e),{classNames:r,className:a,style:l,styles:u,unstyled:g,vars:x,onError:f,src:w,radius:j,fit:v,fallbackSrc:y,mod:b,...C}=n,[S,k]=(0,i.useState)(!w);(0,i.useEffect)(()=>k(!w),[w]);let I=(0,s.y)({name:"Image",classes:m,props:n,className:a,style:l,classNames:r,styles:u,unstyled:g,vars:x,varsResolver:p});return S&&y?(0,o.jsx)(c.x,{component:"img",ref:t,src:y,...I("root"),onError:f,mod:["fallback",b],...C}):(0,o.jsx)(c.x,{component:"img",ref:t,...I("root"),src:w,onError:e=>{f?.(e),k(!0)},mod:b,...C})});Image.classes=m,Image.displayName="@mantine/core/Image"},26802:function(e,t,n){"use strict";n.d(t,{M:function(){return j}});var o=n(52322);n(2784);var i=n(38483),r=n(46690),a=n(12063),d=n(28559),s=n(82027),c=n(98446),l=n(40580),m=n(91482),h=n(54541),p=n(32100),u=n(68755),g=n(9437);function x({spacing:e,verticalSpacing:t,cols:n,selector:i}){let r=(0,u.rZ)(),a=void 0===t?e:t,d=(0,l.L)({"--sg-spacing-x":(0,m.bG)((0,p.v)(e)),"--sg-spacing-y":(0,m.bG)((0,p.v)(a)),"--sg-cols":p.v(n)?.toString()}),s=(0,c.X)(r.breakpoints).reduce((t,o)=>(t[o]||(t[o]={}),"object"==typeof e&&void 0!==e[o]&&(t[o]["--sg-spacing-x"]=(0,m.bG)(e[o])),"object"==typeof a&&void 0!==a[o]&&(t[o]["--sg-spacing-y"]=(0,m.bG)(a[o])),"object"==typeof n&&void 0!==n[o]&&(t[o]["--sg-cols"]=n[o]),t),{}),x=(0,h.I)((0,c.X)(s),r).filter(e=>(0,c.X)(s[e.value]).length>0),f=x.map(e=>({query:`(min-width: ${r.breakpoints[e.value]})`,styles:s[e.value]}));return(0,o.jsx)(g.f,{styles:d,media:f,selector:i})}var f={root:"m_2415a157"};let w={cols:1,spacing:"md"},j=(0,s.d)((e,t)=>{let n=(0,i.w)("SimpleGrid",w,e),{classNames:s,className:c,style:l,styles:m,unstyled:h,vars:p,cols:u,verticalSpacing:g,spacing:j,...v}=n,y=(0,r.y)({name:"SimpleGrid",classes:f,props:n,className:c,style:l,classNames:s,styles:m,unstyled:h,vars:p}),b=(0,a.m)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(x,{...n,selector:`.${b}`}),(0,o.jsx)(d.x,{ref:t,...y("root",{className:b}),...v})]})});j.classes=f,j.displayName="@mantine/core/SimpleGrid"},32100:function(e,t,n){"use strict";function o(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}n.d(t,{v:function(){return o}})},99070:function(e,t,n){"use strict";n.d(t,{o:function(){return i}});var o=n(65744);function i(e,t){return e in t.breakpoints?(0,o.px)(t.breakpoints[e]):(0,o.px)(e)}},54541:function(e,t,n){"use strict";n.d(t,{I:function(){return i}});var o=n(99070);function i(e,t){let n=e.map(e=>({value:e,px:(0,o.o)(e,t)}));return n.sort((e,t)=>e.px-t.px),n}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=6110)}),_N_E=e.O()}]);