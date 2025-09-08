(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[64092],{1798:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},8268:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","at","At",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},16440:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>q});var o=n(6029),r=n(16285),i=n(96830),a=n(61087);let l={type:"code",component:function(){return(0,o.jsx)(a.$,{fullWidth:!0,children:"Full width button"})},code:`
import { Button } from '@mantine/core';

function Demo() {
  return <Button fullWidth>Full width button</Button>;
}
`};var s=n(39887);let d=(0,n(41495).A)("outline","download","Download",[["path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M7 11l5 5l5 -5",key:"svg-1"}],["path",{d:"M12 4l0 12",key:"svg-2"}]]);var c=n(88992),u=n(57414);let h={type:"code",component:function(){return(0,o.jsxs)(u.Y,{justify:"center",children:[(0,o.jsx)(a.$,{leftSection:(0,o.jsx)(s.A,{size:14}),variant:"default",children:"Gallery"}),(0,o.jsx)(a.$,{rightSection:(0,o.jsx)(d,{size:14}),children:"Download"}),(0,o.jsx)(a.$,{variant:"light",leftSection:(0,o.jsx)(s.A,{size:14}),rightSection:(0,o.jsx)(c.A,{size:14,className:"mantine-rotate-rtl"}),children:"Visit gallery"})]})},code:`
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
`},p={type:"configurator",component:function(e){let t=(0,o.jsx)(s.A,{size:14});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.$,{fullWidth:!0,leftSection:t,rightSection:t,variant:"default",...e,children:"Button label"}),(0,o.jsx)(a.$,{fullWidth:!0,leftSection:t,variant:"default",mt:"md",...e,children:"Button label"}),(0,o.jsx)(a.$,{fullWidth:!0,rightSection:t,variant:"default",mt:"md",...e,children:"Button label"}),(0,o.jsx)(a.$,{fullWidth:!0,rightSection:t,leftSection:(0,o.jsx)("span",{}),variant:"default",mt:"md",...e,children:"Button label"})]})},code:e=>`
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
`,centered:!0,controls:[{type:"size",prop:"size",initialValue:"md",libraryValue:"__none__"}]},v={type:"configurator",component:function(e){return(0,o.jsx)(a.$,{variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree},children:"Gradient button"})},code:e=>`
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
`,centered:!0,controls:n(27411).n},f={type:"code",component:function(){return(0,o.jsx)(a.$,{disabled:!0,children:"Disabled button"})},centered:!0,code:`
import { Button } from '@mantine/core';

function Demo() {
  return <Button disabled>Disabled button</Button>;
}
`},x={type:"code",component:function(){return(0,o.jsx)(a.$,{component:"a",href:"https://mantine.dev","data-disabled":!0,onClick:e=>e.preventDefault(),children:"Disabled link"})},centered:!0,code:`
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
`};var g={button:"m_13d58bb2"};let j={type:"code",component:function(){return(0,o.jsx)(a.$,{className:g.button,disabled:!0,children:"Disabled with styles"})},centered:!0,code:[{fileName:"Demo.module.css",code:`
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
`,language:"tsx"}]};var b=n(70304);let y={type:"code",component:function(){return(0,o.jsx)(b.m,{label:"Tooltip for disabled button",children:(0,o.jsx)(a.$,{"data-disabled":!0,onClick:e=>e.preventDefault(),children:"Disabled button with tooltip"})})},centered:!0,code:`
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
`};var B=n(82181);let k={type:"code",component:function(){return(0,o.jsx)(a.$,{loading:!0,loaderProps:{type:"dots"},children:"Loading button"})},centered:!0,code:`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button loading loaderProps={{ type: 'dots' }}>
      Loading button
    </Button>
  );
}
`};var w=n(8268),C=n(64107);let D=`
import { Button } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  return <Button{{props}} leftSection={<IconAt size={16} />}>Your email</Button>;
}
`,S={type:"styles-api",data:C.r,component:function(e){return(0,o.jsx)(a.$,{leftSection:(0,o.jsx)(w.A,{size:16}),...e,children:"Your email"})},code:D,centered:!0};var z=n(21923),M=n(17093),A=n(49643);let $=`
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
`,_=`
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
`,G=(0,M.a)({components:{Button:a.$.extend({classNames:{root:"m_3abb4e8a"}})}}),T={type:"code",component:function(){return(0,o.jsx)(A.nW,{theme:G,children:(0,o.jsxs)(u.Y,{children:[(0,o.jsx)(a.$,{variant:"danger",children:"Danger variant"}),(0,o.jsx)(a.$,{variant:"primary",children:"Primary variant"})]})})},centered:!0,code:[{fileName:"Demo.tsx",code:$,language:"tsx"},{fileName:"Demo.module.css",code:_,language:"scss"}]};var V=n(67658);let P={type:"code",component:function(){return(0,o.jsxs)(u.Y,{children:[(0,o.jsx)(a.$,{color:"lime.4",children:"Default"}),(0,o.jsx)(a.$,{color:"lime.4",autoContrast:!0,children:"Auto contrast"})]})},code:`
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
`,centered:!0},I={type:"configurator",component:function(e){return(0,o.jsxs)(a.$.Group,{...e,children:[(0,o.jsx)(a.$,{variant:"default",children:"First"}),(0,o.jsx)(a.$,{variant:"default",children:"Second"}),(0,o.jsx)(a.$,{variant:"default",children:"Third"})]})},code:`
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
`,centered:!0,controls:[{type:"segmented",prop:"orientation",data:["horizontal","vertical"],initialValue:"horizontal",libraryValue:"horizontal"}]};var N=n(23474),R=n(58333),L=n(39878);let F={type:"code",component:function(){let[e,{increment:t,decrement:n}]=(0,L.I)(135,{min:0});return(0,o.jsxs)(a.$.Group,{children:[(0,o.jsx)(a.$,{variant:"default",radius:"md",onClick:n,children:(0,o.jsx)(N.A,{color:"var(--mantine-color-red-text)"})}),(0,o.jsx)(a.$.GroupSection,{variant:"default",bg:"var(--mantine-color-body)",miw:80,children:e}),(0,o.jsx)(a.$,{variant:"default",radius:"md",onClick:t,children:(0,o.jsx)(R.A,{color:"var(--mantine-color-teal-text)"})})]})},code:`
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
`,centered:!0};var W=n(38547),Y=n(5262);let E=(0,W.P)(Y.XZ.Button);function O(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{AutoContrast:n,Demo:a,GetElementRef:s,Gradient:d,Polymorphic:c,StylesApiSelectors:u}=t;return n||U("AutoContrast",!0),a||U("Demo",!0),s||U("GetElementRef",!0),d||U("Gradient",!0),c||U("Polymorphic",!0),u||U("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(a,{data:i.c}),"\n",(0,o.jsx)(t.h2,{id:"full-width",children:"Full width"}),"\n",(0,o.jsxs)(t.p,{children:["If ",(0,o.jsx)(t.code,{children:"fullWidth"})," prop is set ",(0,o.jsx)(t.code,{children:"Button"})," will take 100% of parent width:"]}),"\n",(0,o.jsx)(a,{data:l}),"\n",(0,o.jsx)(t.h2,{id:"left-and-right-sections",children:"Left and right sections"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"leftSection"})," and ",(0,o.jsx)(t.code,{children:"rightSection"})," allow adding icons or any other element to the left and right side of the button.\nWhen a section is added, padding on the corresponding side is reduced."]}),"\n",(0,o.jsxs)(t.p,{children:["Note that ",(0,o.jsx)(t.code,{children:"leftSection"})," and ",(0,o.jsx)(t.code,{children:"rightSection"})," are flipped in ",(0,o.jsx)(t.a,{href:"/styles/rtl",children:"RTL"})," mode\n(",(0,o.jsx)(t.code,{children:"leftSection"})," is displayed on the right and ",(0,o.jsx)(t.code,{children:"rightSection"})," is displayed on the left)."]}),"\n",(0,o.jsx)(a,{data:h}),"\n",(0,o.jsx)(t.h2,{id:"sections-position",children:"Sections position"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"justify"})," prop sets ",(0,o.jsx)(t.code,{children:"justify-content"})," of ",(0,o.jsx)(t.code,{children:"inner"})," element. You can use it to change the alignment of\nleft and right sections. For example, to spread them across the button set ",(0,o.jsx)(t.code,{children:'justify="space-between"'}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["If you need to align just one section to the side of the button set ",(0,o.jsx)(t.code,{children:"justify"})," to ",(0,o.jsx)(t.code,{children:"space-between"}),"\nand add empty ",(0,o.jsx)(t.code,{children:"<span />"})," to the opposite section."]}),"\n",(0,o.jsx)(a,{data:p}),"\n",(0,o.jsx)(t.h2,{id:"compact-size",children:"Compact size"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Button"})," supports ",(0,o.jsx)(t.code,{children:"xs"})," – ",(0,o.jsx)(t.code,{children:"xl"})," and ",(0,o.jsx)(t.code,{children:"compact-xs"})," – ",(0,o.jsx)(t.code,{children:"compact-xl"})," sizes. ",(0,o.jsx)(t.code,{children:"compact"})," sizes have\nthe same font-size as ",(0,o.jsx)(t.code,{children:"xs"})," – ",(0,o.jsx)(t.code,{children:"xl"})," but reduced padding and height."]}),"\n",(0,o.jsx)(a,{data:m}),"\n",(0,o.jsx)(d,{component:"Button"}),"\n",(0,o.jsx)(a,{data:v}),"\n",(0,o.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,o.jsxs)(t.p,{children:["To make ",(0,o.jsx)(t.code,{children:"Button"})," disabled, set ",(0,o.jsx)(t.code,{children:"disabled"})," prop, this will prevent any interactions with the button\nand add disabled styles. If you want the button to just look disabled but still be interactive,\nset ",(0,o.jsx)(t.code,{children:"data-disabled"})," prop instead. Note that disabled styles are the same for all variants."]}),"\n",(0,o.jsx)(a,{data:f}),"\n",(0,o.jsx)(t.h2,{id:"disabled-state-when-button-is-link",children:"Disabled state when Button is link"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"<a />"})," element does not support ",(0,o.jsx)(t.code,{children:"disabled"})," attribute. To make ",(0,o.jsx)(t.code,{children:"Button"})," disabled when it is\nrendered as a link, set ",(0,o.jsx)(t.code,{children:"data-disabled"})," attribute instead and prevent default behavior in\n",(0,o.jsx)(t.code,{children:"onClick"})," event handler."]}),"\n",(0,o.jsx)(a,{data:x}),"\n",(0,o.jsx)(t.h2,{id:"customize-disabled-styles",children:"Customize disabled styles"}),"\n",(0,o.jsxs)(t.p,{children:["To customize disabled styles, it is recommended to use both ",(0,o.jsx)(t.code,{children:"&:disabled"})," and ",(0,o.jsx)(t.code,{children:"&[data-disabled]"}),"\nselectors:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"&:disabled"})," is used to style the button when ",(0,o.jsx)(t.code,{children:"disabled"})," prop is set and\nalso when the button is disabled by the parent component (for example, when ",(0,o.jsx)(t.code,{children:"disabled"})," prop is set on a\n",(0,o.jsx)(t.code,{children:"<fieldset />"})," element which contains ",(0,o.jsx)(t.code,{children:"Button"}),")."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"&[data-disabled]"})," is used to style the button when it is not actually disabled but should look like\nit is (for example, ",(0,o.jsx)(t.code,{children:"data-disabled"})," should be used if you need to use ",(0,o.jsx)(t.a,{href:"/core/tooltip",children:"Tooltip"})," with disabled ",(0,o.jsx)(t.code,{children:"Button"}),"\nor when ",(0,o.jsx)(t.code,{children:"Button"})," is used as a link)"]}),"\n"]}),"\n",(0,o.jsx)(a,{data:j}),"\n",(0,o.jsx)(t.h2,{id:"disabled-button-with-tooltip",children:"Disabled button with Tooltip"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"onMouseLeave"})," event ",(0,o.jsx)(t.a,{href:"https://github.com/facebook/react/issues/18753",children:"is not triggered"})," when ",(0,o.jsx)(t.code,{children:"Button"})," is disabled, so if you need to use\n",(0,o.jsx)(t.a,{href:"/core/tooltip",children:"Tooltip"})," with disabled ",(0,o.jsx)(t.code,{children:"Button"})," you need to set ",(0,o.jsx)(t.code,{children:"data-disabled"})," prop on ",(0,o.jsx)(t.code,{children:"Button"}),"\ninstead of ",(0,o.jsx)(t.code,{children:"disabled"}),". Note that it is also required to change ",(0,o.jsx)(t.code,{children:"onClick"})," event handler to\n",(0,o.jsx)(t.code,{children:"(event) => event.preventDefault()"})," as ",(0,o.jsx)(t.code,{children:"Button"})," is not actually disabled and will still trigger\n",(0,o.jsx)(t.code,{children:"onClick"})," event."]}),"\n",(0,o.jsx)(a,{data:y}),"\n",(0,o.jsx)(t.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,o.jsxs)(t.p,{children:["When ",(0,o.jsx)(t.code,{children:"loading"})," prop is set, ",(0,o.jsx)(t.code,{children:"Button"})," will be disabled and ",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," with overlay will be rendered\nin the center of the button. ",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," color depends on ",(0,o.jsx)(t.code,{children:"Button"})," variant."]}),"\n",(0,o.jsx)(a,{data:B.L}),"\n",(0,o.jsx)(t.h2,{id:"loader-props",children:"Loader props"}),"\n",(0,o.jsxs)(t.p,{children:["You can customize ",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," with ",(0,o.jsx)(t.code,{children:"loaderProps"})," prop, it accepts all props that\n",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," component has:"]}),"\n",(0,o.jsx)(a,{data:k}),"\n",(0,o.jsx)(u,{component:"Button"}),"\n",(0,o.jsx)(a,{data:S}),"\n",(0,o.jsxs)(t.p,{children:["Example of customizing ",(0,o.jsx)(t.code,{children:"Button"})," with ",(0,o.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"})," and ",(0,o.jsx)(t.a,{href:"/styles/data-attributes",children:"data-* attributes"}),":"]}),"\n",(0,o.jsx)(a,{data:z.g}),"\n",(0,o.jsx)(t.h2,{id:"custom-variants",children:"Custom variants"}),"\n",(0,o.jsxs)(t.p,{children:["To add new ",(0,o.jsx)(t.code,{children:"Button"})," variants, use ",(0,o.jsx)(t.a,{href:"/styles/variants-sizes",children:"data-variant"})," attribute.\nUsually new variants are added on ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"}),", this way they are\navailable in all ",(0,o.jsx)(t.code,{children:"Button"})," components in your application."]}),"\n",(0,o.jsx)(a,{data:T}),"\n",(0,o.jsx)(t.h2,{id:"customize-variants-colors",children:"Customize variants colors"}),"\n",(0,o.jsxs)(t.p,{children:["You can customize colors for ",(0,o.jsx)(t.code,{children:"Button"})," and other components variants by adding\n",(0,o.jsx)(t.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"})," to your theme."]}),"\n",(0,o.jsx)(a,{data:V._}),"\n",(0,o.jsx)(n,{component:"Button"}),"\n",(0,o.jsx)(a,{data:P}),"\n",(0,o.jsx)(t.h2,{id:"buttongroup",children:"Button.Group"}),"\n",(0,o.jsx)(a,{data:I}),"\n",(0,o.jsxs)(t.p,{children:["Note that you must not wrap child ",(0,o.jsx)(t.code,{children:"Button"})," components with any additional elements:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button.Group>\n      <div>\n        <Button>This will not work</Button>\n      </div>\n      <Button>Buttons will have incorrect borders</Button>\n    </Button.Group>\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"buttongroupsection",children:"Button.GroupSection"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"Button.GroupSection"})," component to render sections that are not buttons inside ",(0,o.jsx)(t.code,{children:"Button.Group"}),":"]}),"\n",(0,o.jsx)(a,{data:F}),"\n",(0,o.jsx)(c,{defaultElement:"button",changeToElement:"a",component:"Button",withNext:!0}),"\n",(0,o.jsx)(s,{component:"Button",refType:"button"})]})}function q(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(E,{...e,children:(0,o.jsx)(O,{...e})})}function U(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},21923:(e,t,n)=>{"use strict";n.d(t,{g:()=>d});var o=n(6029),r=n(88992),i=n(61087),a=n(57414),l={root:"m_8b35c16f",section:"m_27c75738"};function s(e){return(0,o.jsx)(i.$,{...e,radius:"md",classNames:l})}let d={type:"code",component:function(){return(0,o.jsxs)(a.Y,{children:[(0,o.jsx)(s,{leftSection:"12",rightSection:(0,o.jsx)(r.A,{size:18}),children:"Send files"}),(0,o.jsx)(s,{leftSection:"3",rightSection:(0,o.jsx)(r.A,{size:18}),disabled:!0,children:"Send files"})]})},centered:!0,code:[{fileName:"Demo.module.css",code:`
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
`,language:"tsx"}]}},24583:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},27411:(e,t,n)=>{"use strict";n.d(t,{n:()=>o});let o=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]},34891:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},39878:(e,t,n)=>{"use strict";n.d(t,{I:()=>a});var o=n(55729),r=n(38744);let i={min:-1/0,max:1/0};function a(e=0,t){let{min:n,max:l}={...i,...t},[s,d]=(0,o.useState)((0,r.q)(e,n,l)),c=(0,o.useCallback)(()=>d(e=>(0,r.q)(e+1,n,l)),[n,l]),u=(0,o.useCallback)(()=>d(e=>(0,r.q)(e-1,n,l)),[n,l]);return[s,{increment:c,decrement:u,set:(0,o.useCallback)(e=>d((0,r.q)(e,n,l)),[n,l]),reset:(0,o.useCallback)(()=>d((0,r.q)(e,n,l)),[e,n,l])}]}},39887:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","photo","Photo",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},41949:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},58333:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","chevron-up","ChevronUp",[["path",{d:"M6 15l6 -6l6 6",key:"svg-0"}]])},65433:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},67658:(e,t,n)=>{"use strict";n.d(t,{_:()=>h});var o=n(6029),r=n(44211),i=n(20931),a=n(2205),l=n(54475),s=n(49643),d=n(57414),c=n(61087);let u=e=>{let t=(0,r.v)(e),n=(0,i.g)({color:e.color||e.theme.primaryColor,theme:e.theme});return n.isThemeColor&&"lime"===n.color&&"filled"===e.variant?{...t,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,a.B)(n.value,.1),hover:(0,a.B)(n.value,.15),border:`1px solid ${n.value}`,color:(0,l.e)(n.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:t},h={type:"code",component:function(){return(0,o.jsx)(s.nW,{theme:{variantColorResolver:u},children:(0,o.jsxs)(d.Y,{children:[(0,o.jsx)(c.$,{color:"lime.4",variant:"filled",children:"Lime filled button"}),(0,o.jsx)(c.$,{color:"orange",variant:"light",children:"Orange light button"}),(0,o.jsx)(c.$,{variant:"danger",children:"Danger button"})]})})},centered:!0,code:`
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
`}},68579:(e,t,n)=>{"use strict";n.d(t,{eD:()=>r,ip:()=>o});let o={type:"select",prop:"variant",data:["default","filled","light","outline","subtle","transparent","white"],initialValue:"filled",libraryValue:"__none__"},r={type:"select",prop:"variant",data:["filled","light","outline","transparent","white","default"],initialValue:"filled",libraryValue:"__none__"}},76229:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/button",function(){return n(16440)}])},82181:(e,t,n)=>{"use strict";n.d(t,{L:()=>s});var o=n(6029),r=n(57414),i=n(61087),a=n(47371),l=n(66438);let s={type:"code",component:function(){let[e,{toggle:t}]=(0,l.j)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.Y,{children:[(0,o.jsx)(i.$,{loading:e,children:"Filled button"}),(0,o.jsx)(i.$,{variant:"light",loading:e,children:"Light button"}),(0,o.jsx)(i.$,{variant:"outline",loading:e,children:"Outline button"})]}),(0,o.jsx)(a.d,{checked:e,onChange:t,label:"Loading state",mt:"md"})]})},centered:!0,code:`
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
`}},84276:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});let o=(0,n(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},96830:(e,t,n)=>{"use strict";n.d(t,{c:()=>a});var o=n(6029),r=n(61087),i=n(68579);let a={type:"configurator",component:function(e){return(0,o.jsx)(r.$,{...e,children:"Button"})},code:`
import { Button } from '@mantine/core';

function Demo() {
  return <Button{{props}}>Button</Button>;
}
`,centered:!0,controls:[i.ip,{type:"color",prop:"color",initialValue:"blue",libraryValue:"blue"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]}}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=76229)),_N_E=e.O()}]);