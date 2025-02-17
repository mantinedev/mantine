(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64092],{37901:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/button",function(){return n(25177)}])},25177:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>q});var o=n(31085),r=n(71184),i=n(75963),a=n(52022);let l={type:"code",component:function(){return(0,o.jsx)(a.$,{fullWidth:!0,children:"Full width button"})},code:`
import { Button } from '@mantine/core';

function Demo() {
  return <Button fullWidth>Full width button</Button>;
}
`};var d=n(33102),s=(0,n(73366).A)("outline","download","IconDownload",[["path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M7 11l5 5l5 -5",key:"svg-1"}],["path",{d:"M12 4l0 12",key:"svg-2"}]]),c=n(89689),u=n(56051);let h={type:"code",component:function(){return(0,o.jsxs)(u.Y,{justify:"center",children:[(0,o.jsx)(a.$,{leftSection:(0,o.jsx)(d.A,{size:14}),variant:"default",children:"Gallery"}),(0,o.jsx)(a.$,{rightSection:(0,o.jsx)(s,{size:14}),children:"Download"}),(0,o.jsx)(a.$,{variant:"light",leftSection:(0,o.jsx)(d.A,{size:14}),rightSection:(0,o.jsx)(c.A,{size:14,className:"mantine-rotate-rtl"}),children:"Visit gallery"})]})},code:`
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
`},p={type:"configurator",component:function(e){let t=(0,o.jsx)(d.A,{size:14});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.$,{fullWidth:!0,leftSection:t,rightSection:t,variant:"default",...e,children:"Button label"}),(0,o.jsx)(a.$,{fullWidth:!0,leftSection:t,variant:"default",mt:"md",...e,children:"Button label"}),(0,o.jsx)(a.$,{fullWidth:!0,rightSection:t,variant:"default",mt:"md",...e,children:"Button label"}),(0,o.jsx)(a.$,{fullWidth:!0,rightSection:t,leftSection:(0,o.jsx)("span",{}),variant:"default",mt:"md",...e,children:"Button label"})]})},code:e=>`
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
`,controls:[{type:"segmented",prop:"justify",data:["center","space-between"],initialValue:"center",libraryValue:"__none__"}]},m={type:"configurator",component:function(e){return(0,o.jsxs)(u.Y,{justify:"center",children:[(0,o.jsxs)(a.$,{size:e.size,children:["Regular ",e.size]}),(0,o.jsxs)(a.$,{size:`compact-${e.size}`,children:["Compact ",e.size]})]})},code:e=>`
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Button size="${e.size}">Regular ${e.size}</Button>
      <Button size="compact-${e.size}">Compact ${e.size}</Button>
    </Group>
  );
}
`,centered:!0,controls:[{type:"size",prop:"size",initialValue:"md",libraryValue:"__none__"}]},f={type:"configurator",component:function(e){return(0,o.jsx)(a.$,{variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree},children:"Gradient button"})},code:e=>`
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
`,centered:!0,controls:n(61866).n},x={type:"code",component:function(){return(0,o.jsx)(a.$,{disabled:!0,children:"Disabled button"})},centered:!0,code:`
import { Button } from '@mantine/core';

function Demo() {
  return <Button disabled>Disabled button</Button>;
}
`},j={type:"code",component:function(){return(0,o.jsx)(a.$,{component:"a",href:"https://mantine.dev","data-disabled":!0,onClick:e=>e.preventDefault(),children:"Disabled link"})},centered:!0,code:`
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
`};var b={button:"m_13d58bb2"};let v={type:"code",component:function(){return(0,o.jsx)(a.$,{className:b.button,disabled:!0,children:"Disabled with styles"})},centered:!0,code:[{fileName:"Demo.module.css",code:`
.button {
  &:disabled,
  &[data-disabled] {
    border-color: light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
    background-color: transparent;
  }
}
`,language:"scss"},{fileName:"Demo.tsx",code:`
import { Button } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Button className={classes.button} disabled>
      Disabled with styles
    </Button>
  );
}
`,language:"tsx"}]};var g=n(2912);let B={type:"code",component:function(){return(0,o.jsx)(g.m,{label:"Tooltip for disabled button",children:(0,o.jsx)(a.$,{"data-disabled":!0,onClick:e=>e.preventDefault(),children:"Disabled button with tooltip"})})},centered:!0,code:`
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
`};var y=n(65435);let w={type:"code",component:function(){return(0,o.jsx)(a.$,{loading:!0,loaderProps:{type:"dots"},children:"Loading button"})},centered:!0,code:`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button loading loaderProps={{ type: 'dots' }}>
      Loading button
    </Button>
  );
}
`};var k=n(32653),D=n(80242);let C=`
import { Button } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  return <Button{{props}} leftSection={<IconAt size={16} />}>Your email</Button>;
}
`,S={type:"styles-api",data:D.r,component:function(e){return(0,o.jsx)(a.$,{leftSection:(0,o.jsx)(k.A,{size:16}),...e,children:"Your email"})},code:C,centered:!0};var z=n(73175),$=n(12616),_=n(92408);let G=`
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
`,A=`
.root {
  &[data-variant='danger'] {
    background-color: var(--mantine-color-red-9);
    color: var(--mantine-color-red-0);
  }

  &[data-variant='primary'] {
    background: linear-gradient(45deg, #4b6cb7 10%, #253b67 90%);
    color: var(--mantine-color-white);
    border-width: 0;
  }
}
`,T=(0,$.a)({components:{Button:a.$.extend({classNames:{root:"m_3abb4e8a"}})}}),I={type:"code",component:function(){return(0,o.jsx)(_.nW,{theme:T,children:(0,o.jsxs)(u.Y,{children:[(0,o.jsx)(a.$,{variant:"danger",children:"Danger variant"}),(0,o.jsx)(a.$,{variant:"primary",children:"Primary variant"})]})})},centered:!0,code:[{fileName:"Demo.tsx",code:G,language:"tsx"},{fileName:"Demo.module.css",code:A,language:"scss"}]};var V=n(40975);let P={type:"code",component:function(){return(0,o.jsxs)(u.Y,{children:[(0,o.jsx)(a.$,{color:"lime.4",children:"Default"}),(0,o.jsx)(a.$,{color:"lime.4",autoContrast:!0,children:"Auto contrast"})]})},code:`
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Button color="lime.4">Default</Button>
      <Button color="lime.4" autoContrast>
        Auto contrast
      </Button>
    </Group>
  );
}
`,centered:!0},N={type:"configurator",component:function(e){return(0,o.jsxs)(a.$.Group,{...e,children:[(0,o.jsx)(a.$,{variant:"default",children:"First"}),(0,o.jsx)(a.$,{variant:"default",children:"Second"}),(0,o.jsx)(a.$,{variant:"default",children:"Third"})]})},code:`
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
`,centered:!0,controls:[{type:"segmented",prop:"orientation",data:["horizontal","vertical"],initialValue:"horizontal",libraryValue:"horizontal"}]};var R=n(24551),F=n(6800),L=n(89939);let M={type:"code",component:function(){let[e,{increment:t,decrement:n}]=(0,L.I)(135,{min:0});return(0,o.jsxs)(a.$.Group,{children:[(0,o.jsx)(a.$,{variant:"default",radius:"md",onClick:n,children:(0,o.jsx)(R.A,{color:"var(--mantine-color-red-text)"})}),(0,o.jsx)(a.$.GroupSection,{variant:"default",bg:"var(--mantine-color-body)",miw:80,children:e}),(0,o.jsx)(a.$,{variant:"default",radius:"md",onClick:t,children:(0,o.jsx)(F.A,{color:"var(--mantine-color-teal-text)"})})]})},code:`
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { Button } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

function Demo() {
  const [value, { increment, decrement }] = useCounter(135, { min: 0 });

  return (
    <Button.Group>
      <Button variant="default" radius="md" onClick={decrement}>
        <IconChevronDown color="var(--mantine-color-red-text)" />
      </Button>
      <Button.GroupSection variant="default" bg="var(--mantine-color-body)" miw={80}>
        {value}
      </Button.GroupSection>
      <Button variant="default" radius="md" onClick={increment}>
        <IconChevronUp color="var(--mantine-color-teal-text)" />
      </Button>
    </Button.Group>
  );
}
`,centered:!0};var W=n(85954),Y=n(38215);let E=(0,W.P)(Y.XZ.Button);function O(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{AutoContrast:n,Demo:a,GetElementRef:d,Gradient:s,Polymorphic:c,StylesApiSelectors:u}=t;return n||U("AutoContrast",!0),a||U("Demo",!0),d||U("GetElementRef",!0),s||U("Gradient",!0),c||U("Polymorphic",!0),u||U("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(a,{data:i.c}),"\n",(0,o.jsx)(t.h2,{id:"full-width",children:"Full width"}),"\n",(0,o.jsxs)(t.p,{children:["If ",(0,o.jsx)(t.code,{children:"fullWidth"})," prop is set ",(0,o.jsx)(t.code,{children:"Button"})," will take 100% of parent width:"]}),"\n",(0,o.jsx)(a,{data:l}),"\n",(0,o.jsx)(t.h2,{id:"left-and-right-sections",children:"Left and right sections"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"leftSection"})," and ",(0,o.jsx)(t.code,{children:"rightSection"})," allow adding icons or any other element to the left and right side of the button.\nWhen a section is added, padding on the corresponding side is reduced."]}),"\n",(0,o.jsxs)(t.p,{children:["Note that ",(0,o.jsx)(t.code,{children:"leftSection"})," and ",(0,o.jsx)(t.code,{children:"rightSection"})," are flipped in ",(0,o.jsx)(t.a,{href:"/styles/rtl",children:"RTL"})," mode\n(",(0,o.jsx)(t.code,{children:"leftSection"})," is displayed on the right and ",(0,o.jsx)(t.code,{children:"rightSection"})," is displayed on the left)."]}),"\n",(0,o.jsx)(a,{data:h}),"\n",(0,o.jsx)(t.h2,{id:"sections-position",children:"Sections position"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"justify"})," prop sets ",(0,o.jsx)(t.code,{children:"justify-content"})," of ",(0,o.jsx)(t.code,{children:"inner"})," element. You can use it to change the alignment of\nleft and right sections. For example, to spread them across the button set ",(0,o.jsx)(t.code,{children:'justify="space-between"'}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["If you need to align just one section to the side of the button set ",(0,o.jsx)(t.code,{children:"justify"})," to ",(0,o.jsx)(t.code,{children:"space-between"}),"\nand add empty ",(0,o.jsx)(t.code,{children:"<span />"})," to the opposite section."]}),"\n",(0,o.jsx)(a,{data:p}),"\n",(0,o.jsx)(t.h2,{id:"compact-size",children:"Compact size"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Button"})," supports ",(0,o.jsx)(t.code,{children:"xs"})," – ",(0,o.jsx)(t.code,{children:"xl"})," and ",(0,o.jsx)(t.code,{children:"compact-xs"})," – ",(0,o.jsx)(t.code,{children:"compact-xl"})," sizes. ",(0,o.jsx)(t.code,{children:"compact"})," sizes have\nthe same font-size as ",(0,o.jsx)(t.code,{children:"xs"})," – ",(0,o.jsx)(t.code,{children:"xl"})," but reduced padding and height."]}),"\n",(0,o.jsx)(a,{data:m}),"\n",(0,o.jsx)(s,{component:"Button"}),"\n",(0,o.jsx)(a,{data:f}),"\n",(0,o.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,o.jsxs)(t.p,{children:["To make ",(0,o.jsx)(t.code,{children:"Button"})," disabled, set ",(0,o.jsx)(t.code,{children:"disabled"})," prop, this will prevent any interactions with the button\nand add disabled styles. If you want the button to just look disabled but still be interactive,\nset ",(0,o.jsx)(t.code,{children:"data-disabled"})," prop instead. Note that disabled styles are the same for all variants."]}),"\n",(0,o.jsx)(a,{data:x}),"\n",(0,o.jsx)(t.h2,{id:"disabled-state-when-button-is-link",children:"Disabled state when Button is link"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"<a />"})," element does not support ",(0,o.jsx)(t.code,{children:"disabled"})," attribute. To make ",(0,o.jsx)(t.code,{children:"Button"})," disabled when it is\nrendered as a link, set ",(0,o.jsx)(t.code,{children:"data-disabled"})," attribute instead and prevent default behavior in\n",(0,o.jsx)(t.code,{children:"onClick"})," event handler."]}),"\n",(0,o.jsx)(a,{data:j}),"\n",(0,o.jsx)(t.h2,{id:"customize-disabled-styles",children:"Customize disabled styles"}),"\n",(0,o.jsxs)(t.p,{children:["To customize disabled styles, it is recommended to use both ",(0,o.jsx)(t.code,{children:"&:disabled"})," and ",(0,o.jsx)(t.code,{children:"&[data-disabled]"}),"\nselectors:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"&:disabled"})," is used to style the button when ",(0,o.jsx)(t.code,{children:"disabled"})," prop is set and\nalso when the button is disabled by the parent component (for example, when ",(0,o.jsx)(t.code,{children:"disabled"})," prop is set on a\n",(0,o.jsx)(t.code,{children:"<fieldset />"})," element which contains ",(0,o.jsx)(t.code,{children:"Button"}),")."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"&[data-disabled]"})," is used to style the button when it is not actually disabled but should look like\nit is (for example, ",(0,o.jsx)(t.code,{children:"data-disabled"})," should be used if you need to use ",(0,o.jsx)(t.a,{href:"/core/tooltip",children:"Tooltip"})," with disabled ",(0,o.jsx)(t.code,{children:"Button"}),"\nor when ",(0,o.jsx)(t.code,{children:"Button"})," is used as a link)"]}),"\n"]}),"\n",(0,o.jsx)(a,{data:v}),"\n",(0,o.jsx)(t.h2,{id:"disabled-button-with-tooltip",children:"Disabled button with Tooltip"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"onMouseLeave"})," event ",(0,o.jsx)(t.a,{href:"https://github.com/facebook/react/issues/18753",children:"is not triggered"})," when ",(0,o.jsx)(t.code,{children:"Button"})," is disabled, so if you need to use\n",(0,o.jsx)(t.a,{href:"/core/tooltip",children:"Tooltip"})," with disabled ",(0,o.jsx)(t.code,{children:"Button"})," you need to set ",(0,o.jsx)(t.code,{children:"data-disabled"})," prop on ",(0,o.jsx)(t.code,{children:"Button"}),"\ninstead of ",(0,o.jsx)(t.code,{children:"disabled"}),". Note that it is also required to change ",(0,o.jsx)(t.code,{children:"onClick"})," event handler to\n",(0,o.jsx)(t.code,{children:"(event) => event.preventDefault()"})," as ",(0,o.jsx)(t.code,{children:"Button"})," is not actually disabled and will still trigger\n",(0,o.jsx)(t.code,{children:"onClick"})," event."]}),"\n",(0,o.jsx)(a,{data:B}),"\n",(0,o.jsx)(t.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,o.jsxs)(t.p,{children:["When ",(0,o.jsx)(t.code,{children:"loading"})," prop is set, ",(0,o.jsx)(t.code,{children:"Button"})," will be disabled and ",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," with overlay will be rendered\nin the center of the button. ",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," color depends on ",(0,o.jsx)(t.code,{children:"Button"})," variant."]}),"\n",(0,o.jsx)(a,{data:y.L}),"\n",(0,o.jsx)(t.h2,{id:"loader-props",children:"Loader props"}),"\n",(0,o.jsxs)(t.p,{children:["You can customize ",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," with ",(0,o.jsx)(t.code,{children:"loaderProps"})," prop, it accepts all props that\n",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," component has:"]}),"\n",(0,o.jsx)(a,{data:w}),"\n",(0,o.jsx)(u,{component:"Button"}),"\n",(0,o.jsx)(a,{data:S}),"\n",(0,o.jsxs)(t.p,{children:["Example of customizing ",(0,o.jsx)(t.code,{children:"Button"})," with ",(0,o.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"})," and ",(0,o.jsx)(t.a,{href:"/styles/data-attributes",children:"data-* attributes"}),":"]}),"\n",(0,o.jsx)(a,{data:z.g}),"\n",(0,o.jsx)(t.h2,{id:"custom-variants",children:"Custom variants"}),"\n",(0,o.jsxs)(t.p,{children:["To add new ",(0,o.jsx)(t.code,{children:"Button"})," variants, use ",(0,o.jsx)(t.a,{href:"/styles/variants-sizes",children:"data-variant"})," attribute.\nUsually new variants are added on ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"}),", this way they are\navailable in all ",(0,o.jsx)(t.code,{children:"Button"})," components in your application."]}),"\n",(0,o.jsx)(a,{data:I}),"\n",(0,o.jsx)(t.h2,{id:"customize-variants-colors",children:"Customize variants colors"}),"\n",(0,o.jsxs)(t.p,{children:["You can customize colors for ",(0,o.jsx)(t.code,{children:"Button"})," and other components variants by adding\n",(0,o.jsx)(t.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"})," to your theme."]}),"\n",(0,o.jsx)(a,{data:V._}),"\n",(0,o.jsx)(n,{component:"Button"}),"\n",(0,o.jsx)(a,{data:P}),"\n",(0,o.jsx)(t.h2,{id:"buttongroup",children:"Button.Group"}),"\n",(0,o.jsx)(a,{data:N}),"\n",(0,o.jsxs)(t.p,{children:["Note that you must not wrap child ",(0,o.jsx)(t.code,{children:"Button"})," components with any additional elements:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button.Group>\n      <div>\n        <Button>This will not work</Button>\n      </div>\n      <Button>Buttons will have incorrect borders</Button>\n    </Button.Group>\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"buttongroupsection",children:"Button.GroupSection"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"Button.GroupSection"})," component to render sections that are not buttons inside ",(0,o.jsx)(t.code,{children:"Button.Group"}),":"]}),"\n",(0,o.jsx)(a,{data:M}),"\n",(0,o.jsx)(c,{defaultElement:"button",changeToElement:"a",component:"Button",withNext:!0}),"\n",(0,o.jsx)(d,{component:"Button",refType:"button"})]})}function q(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(E,{...e,children:(0,o.jsx)(O,{...e})})}function U(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},32653:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},6800:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","chevron-up","IconChevronUp",[["path",{d:"M6 15l6 -6l6 6",key:"svg-0"}]])},33102:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},75963:(e,t,n)=>{"use strict";n.d(t,{c:()=>i});var o=n(31085),r=n(52022);let i={type:"configurator",component:function(e){return(0,o.jsx)(r.$,{...e,children:"Button"})},code:`
import { Button } from '@mantine/core';

function Demo() {
  return <Button{{props}}>Button</Button>;
}
`,centered:!0,controls:[n(78362).ip,{type:"color",prop:"color",initialValue:"blue",libraryValue:"blue"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]}},65435:(e,t,n)=>{"use strict";n.d(t,{L:()=>d});var o=n(31085),r=n(56051),i=n(52022),a=n(26975),l=n(92051);let d={type:"code",component:function(){let[e,{toggle:t}]=(0,l.j)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.Y,{children:[(0,o.jsx)(i.$,{loading:e,children:"Filled button"}),(0,o.jsx)(i.$,{variant:"light",loading:e,children:"Light button"}),(0,o.jsx)(i.$,{variant:"outline",loading:e,children:"Outline button"})]}),(0,o.jsx)(a.d,{checked:e,onChange:t,label:"Loading state",mt:"md"})]})},centered:!0,code:`
import { Button, Group, Switch } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [loading, { toggle }] = useDisclosure();
  return (
    <>
      <Group>
        <Button loading={loading}>Filled button</Button>
        <Button variant="light" loading={loading}>
          Light button
        </Button>
        <Button variant="outline" loading={loading}>
          Outline button
        </Button>
      </Group>

      <Switch checked={loading} onChange={toggle} label="Loading state" mt="md" />
    </>
  );
}
`}},73175:(e,t,n)=>{"use strict";n.d(t,{g:()=>s});var o=n(31085),r=n(89689),i=n(52022),a=n(56051),l={root:"m_8b35c16f",section:"m_27c75738"};function d(e){return(0,o.jsx)(i.$,{...e,radius:"md",classNames:l})}let s={type:"code",component:function(){return(0,o.jsxs)(a.Y,{children:[(0,o.jsx)(d,{leftSection:"12",rightSection:(0,o.jsx)(r.A,{size:18}),children:"Send files"}),(0,o.jsx)(d,{leftSection:"3",rightSection:(0,o.jsx)(r.A,{size:18}),disabled:!0,children:"Send files"})]})},centered:!0,code:[{fileName:"Demo.module.css",code:`
.root {
  border-top-left-radius: var(--mantine-radius-xl);
  border-bottom-left-radius: var(--mantine-radius-xl);
  padding-left: 4px;

  /* The following styles will be applied only when button is disabled */
  &[data-disabled] {
    /* You can use Mantine PostCSS mixins inside data attributes */
    @mixin light {
      border: 1px solid var(--mantine-color-gray-2);
    }

    @mixin dark {
      border: 1px solid var(--mantine-color-dark-4);
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
    --section-size: calc(var(--button-height) - 8px);

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
`,language:"scss"},{fileName:"Demo.tsx",code:`
import { Button, ButtonProps, Group } from '@mantine/core';
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
        rightSection={<IconArrowRight size={18} />}
      >
        Send files
      </SendFilesButton>
      <SendFilesButton
        leftSection="3"
        rightSection={<IconArrowRight size={18} />}
        disabled
      >
        Send files
      </SendFilesButton>
    </Group>
  );
}
`,language:"tsx"}]}},40975:(e,t,n)=>{"use strict";n.d(t,{_:()=>h});var o=n(31085),r=n(26762),i=n(81754),a=n(16560),l=n(69842),d=n(92408),s=n(56051),c=n(52022);let u=e=>{let t=(0,r.v)(e),n=(0,i.g)({color:e.color||e.theme.primaryColor,theme:e.theme});return n.isThemeColor&&"lime"===n.color&&"filled"===e.variant?{...t,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,a.B)(n.value,.1),hover:(0,a.B)(n.value,.15),border:`1px solid ${n.value}`,color:(0,l.e)(n.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:t},h={type:"code",component:function(){return(0,o.jsx)(d.nW,{theme:{variantColorResolver:u},children:(0,o.jsxs)(s.Y,{children:[(0,o.jsx)(c.$,{color:"lime.4",variant:"filled",children:"Lime filled button"}),(0,o.jsx)(c.$,{color:"orange",variant:"light",children:"Orange light button"}),(0,o.jsx)(c.$,{variant:"danger",children:"Danger button"})]})})},centered:!0,code:`
import {
  Button,
  Group,
  MantineProvider,
  defaultVariantColorsResolver,
  VariantColorsResolver,
  parseThemeColor,
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
    return {
      ...defaultResolvedColors,
      color: 'var(--mantine-color-black)',
      hoverColor: 'var(--mantine-color-black)',
    };
  }

  // Completely override variant
  if (input.variant === 'light') {
    return {
      background: rgba(parsedColor.value, 0.1),
      hover: rgba(parsedColor.value, 0.15),
      border: \`1px solid \${parsedColor.value}\`,
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
`}},61866:(e,t,n)=>{"use strict";n.d(t,{n:()=>o});let o=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]},78362:(e,t,n)=>{"use strict";n.d(t,{eD:()=>r,ip:()=>o});let o={type:"select",prop:"variant",data:["default","filled","light","outline","subtle","transparent","white"],initialValue:"filled",libraryValue:"__none__"},r={type:"select",prop:"variant",data:["filled","light","outline","transparent","white","default"],initialValue:"filled",libraryValue:"__none__"}},89939:(e,t,n)=>{"use strict";n.d(t,{I:()=>a});var o=n(14041),r=n(68193);let i={min:-1/0,max:1/0};function a(e=0,t){let{min:n,max:l}={...i,...t},[d,s]=(0,o.useState)((0,r.q)(e,n,l));return[d,{increment:()=>s(e=>(0,r.q)(e+1,n,l)),decrement:()=>s(e=>(0,r.q)(e-1,n,l)),set:e=>s((0,r.q)(e,n,l)),reset:()=>s((0,r.q)(e,n,l))}]}},92051:(e,t,n)=>{"use strict";n.d(t,{j:()=>r});var o=n(14041);function r(e=!1,t){let{onOpen:n,onClose:i}=t||{},[a,l]=(0,o.useState)(e),d=(0,o.useCallback)(()=>{l(e=>e||(n?.(),!0))},[n]),s=(0,o.useCallback)(()=>{l(e=>e?(i?.(),!1):e)},[i]),c=(0,o.useCallback)(()=>{a?s():d()},[s,d,a]);return[a,{open:d,close:s,toggle:c}]}}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(37901)),_N_E=e.O()}]);