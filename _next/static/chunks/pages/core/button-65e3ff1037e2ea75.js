(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7945],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},68140:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/button",function(){return n(11227)}])},11227:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eO}});var o=n(85893),r=n(11151),i=n(19905),a=n(9904),l=n(67294),d=n(14469),s=n(99009),c=Object.defineProperty,u=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&m(e,n,t[n]);return e};let b=`
import { Button } from '@mantine/core';

function Demo() {
  return <Button{{props}}>Button</Button>;
}
`,v={type:"configurator",component:function(e){return l.createElement(d.z,f({},e),"Button")},code:b,centered:!0,controls:[s.cH,{type:"color",prop:"color",initialValue:"blue",libraryValue:"blue"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]},g=`
import { Button } from '@mantine/core';

function Demo() {
  return <Button fullWidth>Full width button</Button>;
}
`,y={type:"code",component:function(){return l.createElement(d.z,{fullWidth:!0},"Full width button")},code:g};var j=n(16262),x=n(60060),B=(0,n(54764).Z)("download","IconDownload",[["path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M7 11l5 5l5 -5",key:"svg-1"}],["path",{d:"M12 4l0 12",key:"svg-2"}]]),w=n(4687);let k=`
import { Group, Button } from '@mantine/core';
import { IconPhoto, IconDownload, IconArrowRight } from '@tabler/icons-react';

function Demo() {
  return (
    <Group justify="center">
      <Button leftSection={<IconPhoto size={14} />} variant="default">
        Gallery
      </Button>

      <Button rightSection={<IconDownload size={14} />}>Download</Button>

      <Button
        variant="light"
        leftSection={<IconPhoto size={14} />}
        rightSection={<IconArrowRight size={14} />}
      >
        Visit gallery
      </Button>
    </Group>
  );
}
`,z={type:"code",component:function(){return l.createElement(j.Z,{justify:"center"},l.createElement(d.z,{leftSection:l.createElement(x.Z,{size:14}),variant:"default"},"Gallery"),l.createElement(d.z,{rightSection:l.createElement(B,{size:14})},"Download"),l.createElement(d.z,{variant:"light",leftSection:l.createElement(x.Z,{size:14}),rightSection:l.createElement(w.Z,{size:14,className:"mantine-rotate-rtl"})},"Visit gallery"))},code:k};var E=Object.defineProperty,D=Object.getOwnPropertySymbols,S=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,P=(e,t,n)=>t in e?E(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,M=(e,t)=>{for(var n in t||(t={}))S.call(t,n)&&P(e,n,t[n]);if(D)for(var n of D(t))O.call(t,n)&&P(e,n,t[n]);return e};let C=e=>`
import { Button } from '@mantine/core';
import { IconPhoto } from '@tabler/icons-react';

function Demo() {
  const icon = <IconPhoto size={14} />;
  return (
    <>
      <Button justify="${e.justify}" fullWidth leftSection={icon} rightSection={icon} variant="default">
        Button label
      </Button>

      <Button justify="${e.justify}" fullWidth leftSection={icon} variant="default" mt="md">
        Button label
      </Button>

      <Button justify="${e.justify}" fullWidth rightSection={icon} variant="default" mt="md">
        Button label
      </Button>

      <Button
        justify="${e.justify}"
        fullWidth
        rightSection={icon}
        leftSection={<span />}
        variant="default"
        mt="md"
      >
        Button label
      </Button>
    </>
  );
}
`,_={type:"configurator",component:function(e){let t=l.createElement(x.Z,{size:14});return l.createElement(l.Fragment,null,l.createElement(d.z,M({fullWidth:!0,leftSection:t,rightSection:t,variant:"default"},e),"Button label"),l.createElement(d.z,M({fullWidth:!0,leftSection:t,variant:"default",mt:"md"},e),"Button label"),l.createElement(d.z,M({fullWidth:!0,rightSection:t,variant:"default",mt:"md"},e),"Button label"),l.createElement(d.z,M({fullWidth:!0,rightSection:t,leftSection:l.createElement("span",null),variant:"default",mt:"md"},e),"Button label"))},code:C,controls:[{type:"segmented",prop:"justify",data:["center","space-between"],initialValue:"center",libraryValue:"__none__"}]},I=e=>`
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Button size="${e.size}">Regular ${e.size}</Button>
      <Button size="compact-${e.size}">Compact ${e.size}</Button>
    </Group>
  );
}
`,Z={type:"configurator",component:function(e){return l.createElement(j.Z,{justify:"center"},l.createElement(d.z,{size:e.size},"Regular ",e.size),l.createElement(d.z,{size:`compact-${e.size}`},"Compact ",e.size))},code:I,centered:!0,controls:[{type:"size",prop:"size",initialValue:"md",libraryValue:"__none__"}]};var G=n(69137);let T=e=>`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button
      variant="gradient"
      gradient={{ from: '${e.gradientFrom}', to: '${e.gradientTo}', deg: ${e.gradientDegree} }}
    >
      Gradient button
    </Button>
  );
}
`,V={type:"configurator",component:function(e){return l.createElement(d.z,{variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree}},"Gradient button")},code:T,centered:!0,controls:G.P},N=`
import { Button } from '@mantine/core';

function Demo() {
  return <Button disabled>Disabled button</Button>;
}
`,R={type:"code",component:function(){return l.createElement(d.z,{disabled:!0},"Disabled button")},centered:!0,code:N},F=`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button
      component="a"
      href="https://mantine.dev"
      data-disabled
      onClick={(event) => event.preventDefault()}
    >
      Disabled link
    </Button>
  );
}
`,L={type:"code",component:function(){return l.createElement(d.z,{component:"a",href:"https://mantine.dev","data-disabled":!0,onClick:e=>e.preventDefault()},"Disabled link")},centered:!0,code:F};var A={button:"m-13d58bb2"};let $=`
import { Button } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Button className={classes.button} disabled>
      Disabled with styles
    </Button>
  );
}
`,W=`
.button {
  &:disabled,
  &[data-disabled] {
    border-color: light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
    background-color: transparent;
  }
}
`,Y={type:"code",component:function(){return l.createElement(d.z,{className:A.button,disabled:!0},"Disabled with styles")},centered:!0,code:[{fileName:"Demo.module.css",code:W,language:"css"},{fileName:"Demo.tsx",code:$,language:"tsx"}]};var H=n(46842);let U=`
import { Button, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <Button data-disabled onClick={(event) => event.preventDefault()}>
        Disabled button with tooltip
      </Button>
    </Tooltip>
  );
}
`,X={type:"code",component:function(){return l.createElement(H.u,{label:"Tooltip for disabled button"},l.createElement(d.z,{"data-disabled":!0,onClick:e=>e.preventDefault()},"Disabled button with tooltip"))},centered:!0,code:U},q=`
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Button loading>Filled button</Button>
      <Button variant="light" loading>
        Light button
      </Button>
      <Button variant="outline" loading>
        Outline button
      </Button>
    </Group>
  );
}
`,J={type:"code",component:function(){return l.createElement(j.Z,null,l.createElement(d.z,{loading:!0},"Filled button"),l.createElement(d.z,{variant:"light",loading:!0},"Light button"),l.createElement(d.z,{variant:"outline",loading:!0},"Outline button"))},centered:!0,code:q},K=`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button loading loaderProps={{ type: 'dots' }}>
      Loading button
    </Button>
  );
}
`,Q={type:"code",component:function(){return l.createElement(d.z,{loading:!0,loaderProps:{type:"dots"}},"Loading button")},centered:!0,code:K};var ee=n(72622),et=n(5878),en=n(93693),eo=Object.defineProperty,er=Object.getOwnPropertySymbols,ei=Object.prototype.hasOwnProperty,ea=Object.prototype.propertyIsEnumerable,el=(e,t,n)=>t in e?eo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ed=(e,t)=>{for(var n in t||(t={}))ei.call(t,n)&&el(e,n,t[n]);if(er)for(var n of er(t))ea.call(t,n)&&el(e,n,t[n]);return e};let es=`
import { Button, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  return <Button{{props}} leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}>Your email</Button>;
}
`,ec={type:"styles-api",data:et.B,component:function(e){return l.createElement(d.z,ed({leftSection:l.createElement(en.Z,{style:{width:(0,ee.h)(16),height:(0,ee.h)(16)}})},e),"Your email")},code:es,centered:!0};var eu=n(87321),eh=n(28120),ep=n(43440);let em=`
import { Group, Button, MantineProvider, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Button: Button.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group>
        <Button variant="danger">Danger variant</Button>
        <Button variant="primary">Primary variant</Button>
      </Group>
    </MantineProvider>
  );
}
`,ef=`
.root {
  &[data-variant='danger'] {
    background-color: var(--mantine-color-red-9);
    color: var(--mantine-color-red-0);
  }

  &[data-variant='primary'] {
    background: linear-gradient(45deg, #4b6cb7 10%, #253b67 90%);
    color: var(--mantine-color-white);
  }
}
`,eb=(0,eh.j)({components:{Button:d.z.extend({classNames:{root:"m-3abb4e8a"}})}}),ev={type:"code",component:function(){return l.createElement(ep.M2,{theme:eb},l.createElement(j.Z,null,l.createElement(d.z,{variant:"danger"},"Danger variant"),l.createElement(d.z,{variant:"primary"},"Primary variant")))},centered:!0,code:[{fileName:"Demo.tsx",code:em,language:"tsx"},{fileName:"Demo.module.css",code:ef,language:"css"}]};var eg=n(53029),ey=Object.defineProperty,ej=Object.getOwnPropertySymbols,ex=Object.prototype.hasOwnProperty,eB=Object.prototype.propertyIsEnumerable,ew=(e,t,n)=>t in e?ey(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ek=(e,t)=>{for(var n in t||(t={}))ex.call(t,n)&&ew(e,n,t[n]);if(ej)for(var n of ej(t))eB.call(t,n)&&ew(e,n,t[n]);return e};let ez=`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button.Group{{props}}>
      <Button variant="default">First</Button>
      <Button variant="default">Second</Button>
      <Button variant="default">Third</Button>
    </Button.Group>
  );
}
`,eE={type:"configurator",component:function(e){return l.createElement(d.z.Group,ek({},e),l.createElement(d.z,{variant:"default"},"First"),l.createElement(d.z,{variant:"default"},"Second"),l.createElement(d.z,{variant:"default"},"Third"))},code:ez,centered:!0,controls:[{type:"segmented",prop:"orientation",data:["horizontal","vertical"],initialValue:"horizontal",libraryValue:"horizontal"}]},eD=(0,i.A)(a.us.Button);function eS(e){let t=Object.assign({h2:"h2",p:"p",code:"code",a:"a",ul:"ul",li:"li",pre:"pre"},(0,r.ah)(),e.components),{Demo:n,Gradient:i,StylesApiSelectors:a,Polymorphic:l,GetElementRef:d}=t;return n||eP("Demo",!0),d||eP("GetElementRef",!0),i||eP("Gradient",!0),l||eP("Polymorphic",!0),a||eP("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n,{data:v}),"\n",(0,o.jsx)(t.h2,{id:"full-width",children:"Full width"}),"\n",(0,o.jsxs)(t.p,{children:["If ",(0,o.jsx)(t.code,{children:"fullWidth"})," prop is set ",(0,o.jsx)(t.code,{children:"Button"})," will take 100% of parent width:"]}),"\n",(0,o.jsx)(n,{data:y}),"\n",(0,o.jsx)(t.h2,{id:"left-and-right-sections",children:"Left and right sections"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"leftSection"})," and ",(0,o.jsx)(t.code,{children:"rightSection"})," allow adding icons or any other element to the left and right side of the button.\nWhen a section is added, padding on the corresponding side is reduced."]}),"\n",(0,o.jsxs)(t.p,{children:["Note that ",(0,o.jsx)(t.code,{children:"leftSection"})," and ",(0,o.jsx)(t.code,{children:"rightSection"})," are flipped in ",(0,o.jsx)(t.a,{href:"/styles/rtl",children:"RTL"})," mode\n(",(0,o.jsx)(t.code,{children:"leftSection"})," is displayed on the right and ",(0,o.jsx)(t.code,{children:"rightSection"})," is displayed on the left)."]}),"\n",(0,o.jsx)(n,{data:z}),"\n",(0,o.jsx)(t.h2,{id:"sections-position",children:"Sections position"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"justify"})," prop sets ",(0,o.jsx)(t.code,{children:"justify-content"})," of ",(0,o.jsx)(t.code,{children:"inner"})," element. You can use it to change the alignment of\nleft and right sections. For example, to spread them across the button set ",(0,o.jsx)(t.code,{children:'justify="space-between"'}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["If you need to align just one section to the side of the button set ",(0,o.jsx)(t.code,{children:"justify"})," to ",(0,o.jsx)(t.code,{children:"space-between"}),"\nand add empty ",(0,o.jsx)(t.code,{children:"<span />"})," to the opposite section."]}),"\n",(0,o.jsx)(n,{data:_}),"\n",(0,o.jsx)(t.h2,{id:"compact-size",children:"Compact size"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Button"})," supports ",(0,o.jsx)(t.code,{children:"xs"})," – ",(0,o.jsx)(t.code,{children:"xl"})," and ",(0,o.jsx)(t.code,{children:"compact-xs"})," – ",(0,o.jsx)(t.code,{children:"compact-xl"})," sizes. ",(0,o.jsx)(t.code,{children:"compact"})," sizes have\nthe same font-size as ",(0,o.jsx)(t.code,{children:"xs"})," – ",(0,o.jsx)(t.code,{children:"xl"})," but reduced padding and height."]}),"\n",(0,o.jsx)(n,{data:Z}),"\n",(0,o.jsx)(i,{component:"Button"}),"\n",(0,o.jsx)(n,{data:V}),"\n",(0,o.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,o.jsxs)(t.p,{children:["To make ",(0,o.jsx)(t.code,{children:"Button"})," disabled, set ",(0,o.jsx)(t.code,{children:"disabled"})," prop, this will prevent any interactions with the button\nand add disabled styles. If you want the button to just look disabled but still be interactive,\nset ",(0,o.jsx)(t.code,{children:"data-disabled"})," prop instead. Note that disabled styles are the same for all variants."]}),"\n",(0,o.jsx)(n,{data:R}),"\n",(0,o.jsx)(t.h2,{id:"disabled-state-when-button-is-link",children:"Disabled state when Button is link"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"<a />"})," element does not support ",(0,o.jsx)(t.code,{children:"disabled"})," attribute. To make ",(0,o.jsx)(t.code,{children:"Button"})," disabled when it is\nrendered as a link, set ",(0,o.jsx)(t.code,{children:"data-disabled"})," attribute instead and prevent default behavior in\n",(0,o.jsx)(t.code,{children:"onClick"})," event handler."]}),"\n",(0,o.jsx)(n,{data:L}),"\n",(0,o.jsx)(t.h2,{id:"customize-disabled-styles",children:"Customize disabled styles"}),"\n",(0,o.jsxs)(t.p,{children:["To customize disabled styles, it is recommended to use both ",(0,o.jsx)(t.code,{children:"&:disabled"})," and ",(0,o.jsx)(t.code,{children:"&[data-disabled]"}),"\nselectors:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"&:disabled"})," is used to style the button when ",(0,o.jsx)(t.code,{children:"disabled"})," prop is set and\nalso when the button is disabled by the parent component (for example, when ",(0,o.jsx)(t.code,{children:"disabled"})," prop is set on a\n",(0,o.jsx)(t.code,{children:"<fieldset />"})," element which contains ",(0,o.jsx)(t.code,{children:"Button"}),")."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"&[data-disabled]"})," is used to style the button when it is not actually disabled but should look like\nit is (for example, ",(0,o.jsx)(t.code,{children:"data-disabled"})," should be used if you need to use ",(0,o.jsx)(t.a,{href:"/core/tooltip",children:"Tooltip"})," with disabled ",(0,o.jsx)(t.code,{children:"Button"}),"\nor when ",(0,o.jsx)(t.code,{children:"Button"})," is used as a link)"]}),"\n"]}),"\n",(0,o.jsx)(n,{data:Y}),"\n",(0,o.jsx)(t.h2,{id:"disabled-button-with-tooltip",children:"Disabled button with Tooltip"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"onMouseLeave"})," event ",(0,o.jsx)(t.a,{href:"https://github.com/facebook/react/issues/18753",children:"is not triggered"})," when ",(0,o.jsx)(t.code,{children:"Button"})," is disabled, so if you need to use\n",(0,o.jsx)(t.a,{href:"/core/tooltip",children:"Tooltip"})," with disabled ",(0,o.jsx)(t.code,{children:"Button"})," you need to set ",(0,o.jsx)(t.code,{children:"data-disabled"})," prop on ",(0,o.jsx)(t.code,{children:"Button"}),"\ninstead of ",(0,o.jsx)(t.code,{children:"disabled"}),". Note that it is also required to change ",(0,o.jsx)(t.code,{children:"onClick"})," event handler to\n",(0,o.jsx)(t.code,{children:"(event) => event.preventDefault()"})," as ",(0,o.jsx)(t.code,{children:"Button"})," is not actually disabled and will still trigger\n",(0,o.jsx)(t.code,{children:"onClick"})," event."]}),"\n",(0,o.jsx)(n,{data:X}),"\n",(0,o.jsx)(t.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,o.jsxs)(t.p,{children:["When ",(0,o.jsx)(t.code,{children:"loading"})," prop is set, ",(0,o.jsx)(t.code,{children:"Button"})," will be disabled and ",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," with overlay will be rendered\nin the center of the button. ",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," color depends on ",(0,o.jsx)(t.code,{children:"Button"})," variant."]}),"\n",(0,o.jsx)(n,{data:J}),"\n",(0,o.jsx)(t.h2,{id:"loader-props",children:"Loader props"}),"\n",(0,o.jsxs)(t.p,{children:["You can customize ",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," with ",(0,o.jsx)(t.code,{children:"loaderProps"})," prop, it accepts all props that\n",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," component has:"]}),"\n",(0,o.jsx)(n,{data:Q}),"\n",(0,o.jsx)(a,{component:"Button"}),"\n",(0,o.jsx)(n,{data:ec}),"\n",(0,o.jsxs)(t.p,{children:["Example of customizing ",(0,o.jsx)(t.code,{children:"Button"})," with ",(0,o.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"})," and ",(0,o.jsx)(t.a,{href:"/styles/data-attributes",children:"data-* attributes"}),":"]}),"\n",(0,o.jsx)(n,{data:eu.C}),"\n",(0,o.jsx)(t.h2,{id:"custom-variants",children:"Custom variants"}),"\n",(0,o.jsxs)(t.p,{children:["To add new ",(0,o.jsx)(t.code,{children:"Button"})," variants, use ",(0,o.jsx)(t.a,{href:"/styles/variants-sizes",children:"data-variant"})," attribute.\nUsually new variants are added on ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"}),", this way they are\navailable in all ",(0,o.jsx)(t.code,{children:"Button"})," components in your application."]}),"\n",(0,o.jsx)(n,{data:ev}),"\n",(0,o.jsx)(t.h2,{id:"customize-variants-colors",children:"Customize variants colors"}),"\n",(0,o.jsxs)(t.p,{children:["You can customize colors for ",(0,o.jsx)(t.code,{children:"Button"})," and other components variants by adding\n",(0,o.jsx)(t.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"})," to your theme."]}),"\n",(0,o.jsx)(n,{data:eg.D}),"\n",(0,o.jsx)(t.h2,{id:"buttongroup",children:"Button.Group"}),"\n",(0,o.jsx)(n,{data:eE}),"\n",(0,o.jsxs)(t.p,{children:["Note that you must not wrap child ",(0,o.jsx)(t.code,{children:"Button"})," components with any additional elements:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button.Group>\n      <div>\n        <Button>This will not work</Button>\n      </div>\n      <Button>Buttons will have incorrect borders</Button>\n    </Button.Group>\n  );\n}\n"})}),"\n",(0,o.jsx)(l,{defaultElement:"button",changeToElement:"a",component:"Button",withNext:!0}),"\n",(0,o.jsx)(d,{component:"Button",refType:"button"})]})}var eO=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(eD,Object.assign({},e,{children:(0,o.jsx)(eS,e)}))};function eP(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},4687:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},93693:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},60060:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},87321:function(e,t,n){"use strict";n.d(t,{C:function(){return x}});var o=n(67294),r=n(14469),i=n(16262),a=n(72622),l=n(4687),d={root:"m-8b35c16f",section:"m-27c75738"},s=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,b=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&f(e,n,t[n]);if(h)for(var n of h(t))m.call(t,n)&&f(e,n,t[n]);return e},v=(e,t)=>c(e,u(t));let g=`
import { Button, ButtonProps, Group, rem } from '@mantine/core';
import { IconArrowRight } from '@tabler/icons-react';
import classes from './Demo.module.css';

function SendFilesButton(props: ButtonProps & React.ComponentPropsWithoutRef<'button'>) {
  return <Button {...props} radius="md" classNames={classes} />;
}

function Demo() {
  return (
    <Group>
      <SendFilesButton
        leftSection="12"
        rightSection={<IconArrowRight style={{ width: rem(18) }} />}
      >
        Send files
      </SendFilesButton>
      <SendFilesButton
        leftSection="3"
        rightSection={<IconArrowRight style={{ width: rem(18) }} />}
        disabled
      >
        Send files
      </SendFilesButton>
    </Group>
  );
}
`,y=`
.root {
  border-top-left-radius: var(--mantine-radius-xl);
  border-bottom-left-radius: var(--mantine-radius-xl);
  padding-left: rem(4px);

  /* The following styles will be applied only when button is disabled */
  &[data-disabled] {
    /* You can use Mantine PostCSS mixins inside data attributes */
    @mixin light {
      border: rem(1px) solid var(--mantine-color-gray-2);
    }

    @mixin dark {
      border: rem(1px) solid var(--mantine-color-dark-4);
    }

    /* You can target child elements that are inside .root[data-disabled] */
    & .section[data-position='left'] {
      opacity: 0.6;
    }
  }
}

.section {
  /* Apply styles only to left section */
  &[data-position='left'] {
    --section-size: calc(var(--button-height) - rem(8px));

    background-color: var(--mantine-color-body);
    color: var(--mantine-color-text);
    height: var(--section-size);
    width: var(--section-size);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--mantine-radius-xl);
  }

  &[data-position='right'] {
    @mixin rtl {
      transform: rotate(180deg);
    }
  }
}
`;function j(e){return o.createElement(r.z,v(b({},e),{radius:"md",classNames:d}))}let x={type:"code",component:function(){return o.createElement(i.Z,null,o.createElement(j,{leftSection:"12",rightSection:o.createElement(l.Z,{style:{width:(0,a.h)(18)}})},"Send files"),o.createElement(j,{leftSection:"3",rightSection:o.createElement(l.Z,{style:{width:(0,a.h)(18)}}),disabled:!0},"Send files"))},centered:!0,code:[{fileName:"Demo.module.css",code:y,language:"css"},{fileName:"Demo.tsx",code:g,language:"tsx"}]}},53029:function(e,t,n){"use strict";n.d(t,{D:function(){return w}});var o=n(67294),r=n(63428),i=n(52845),a=n(26754),l=n(72622),d=n(55310),s=n(43440),c=n(16262),u=n(14469),h=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))b.call(t,n)&&g(e,n,t[n]);if(f)for(var n of f(t))v.call(t,n)&&g(e,n,t[n]);return e},j=(e,t)=>p(e,m(t));let x=`
import {
  Button,
  Group,
  MantineProvider,
  defaultVariantColorsResolver,
  VariantColorsResolver,
  parseThemeColor,
  rem,
  rgba,
  darken,
} from '@mantine/core';

const variantColorResolver: VariantColorsResolver = (input) => {
  const defaultResolvedColors = defaultVariantColorsResolver(input);
  const parsedColor = parseThemeColor({
    color: input.color || input.theme.primaryColor,
    theme: input.theme,
  });

  // Override some properties for variant
  if (parsedColor.isThemeColor && parsedColor.color === 'lime' && input.variant === 'filled') {
    return { ...defaultResolvedColors, color: 'var(--mantine-color-black)' };
  }

  // Completely override variant
  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: \`\${rem(1)} solid \${parsedColor.value}\`,
      color: darken(parsedColor.value, 0.1),
    };
  }

  // Add new variants support
  if (input.variant === 'danger') {
    return {
      background: 'var(--mantine-color-red-9)',
      hover: 'var(--mantine-color-red-8)',
      color: 'var(--mantine-color-white)',
      border: 'none',
    };
  }

  return defaultResolvedColors;
};

function Demo() {
  return (
    <MantineProvider theme={{ variantColorResolver }}>
      <Group>
        <Button color="lime.4" variant="filled">
          Lime filled button
        </Button>

        <Button color="orange" variant="light">
          Orange light button
        </Button>

        <Button variant="danger">Danger button</Button>
      </Group>
    </MantineProvider>
  );
}
`,B=e=>{let t=(0,r.B)(e),n=(0,i.E)({color:e.color||e.theme.primaryColor,theme:e.theme});return n.isThemeColor&&"lime"===n.color&&"filled"===e.variant?j(y({},t),{color:"var(--mantine-color-black)"}):"light"===e.variant?{background:(0,a.m)(n.value,.1),hover:(0,a.m)(n.value,.15),border:`${(0,l.h)(1)} solid ${n.value}`,color:(0,d._)(n.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:t},w={type:"code",component:function(){return o.createElement(s.M2,{theme:{variantColorResolver:B}},o.createElement(c.Z,null,o.createElement(u.z,{color:"lime.4",variant:"filled"},"Lime filled button"),o.createElement(u.z,{color:"orange",variant:"light"},"Orange light button"),o.createElement(u.z,{variant:"danger"},"Danger button")))},centered:!0,code:x}},69137:function(e,t,n){"use strict";n.d(t,{P:function(){return o}});let o=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]},99009:function(e,t,n){"use strict";n.d(t,{cH:function(){return o},d_:function(){return r}});let o={type:"select",prop:"variant",data:["default","filled","light","outline","subtle","transparent","white"],initialValue:"filled",libraryValue:"__none__"},r={type:"select",prop:"variant",data:["filled","light","outline","transparent","white","default"],initialValue:"filled",libraryValue:"__none__"}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=68140)}),_N_E=e.O()}]);