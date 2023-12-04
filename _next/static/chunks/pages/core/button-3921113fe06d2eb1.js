(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7945],{93693:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},60060:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(54764).Z)("photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},66739:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/button",function(){return n(64669)}])},64669:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return K}});var o=n(24246),r=n(71670),i=n(3916),a=n(30289),l=n(27402),d=n(27378),s=n(8671);let c=`
import { Button } from '@mantine/core';

function Demo() {
  return <Button fullWidth>Full width button</Button>;
}
`,u={type:"code",component:function(){return d.createElement(s.z,{fullWidth:!0},"Full width button")},code:c};var h=n(22971),m=n(60060),p=(0,n(54764).Z)("download","IconDownload",[["path",{d:"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2",key:"svg-0"}],["path",{d:"M7 11l5 5l5 -5",key:"svg-1"}],["path",{d:"M12 4l0 12",key:"svg-2"}]]),f=n(4687);let b=`
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
`,g={type:"code",component:function(){return d.createElement(h.Z,{justify:"center"},d.createElement(s.z,{leftSection:d.createElement(m.Z,{size:14}),variant:"default"},"Gallery"),d.createElement(s.z,{rightSection:d.createElement(p,{size:14})},"Download"),d.createElement(s.z,{variant:"light",leftSection:d.createElement(m.Z,{size:14}),rightSection:d.createElement(f.Z,{size:14,className:"mantine-rotate-rtl"})},"Visit gallery"))},code:b},v={type:"configurator",component:function(e){let t=d.createElement(m.Z,{size:14});return d.createElement(d.Fragment,null,d.createElement(s.z,{fullWidth:!0,leftSection:t,rightSection:t,variant:"default",...e},"Button label"),d.createElement(s.z,{fullWidth:!0,leftSection:t,variant:"default",mt:"md",...e},"Button label"),d.createElement(s.z,{fullWidth:!0,rightSection:t,variant:"default",mt:"md",...e},"Button label"),d.createElement(s.z,{fullWidth:!0,rightSection:t,leftSection:d.createElement("span",null),variant:"default",mt:"md",...e},"Button label"))},code:e=>`
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
`,controls:[{type:"segmented",prop:"justify",data:["center","space-between"],initialValue:"center",libraryValue:"__none__"}]},x={type:"configurator",component:function(e){return d.createElement(h.Z,{justify:"center"},d.createElement(s.z,{size:e.size},"Regular ",e.size),d.createElement(s.z,{size:`compact-${e.size}`},"Compact ",e.size))},code:e=>`
import { Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Button size="${e.size}">Regular ${e.size}</Button>
      <Button size="compact-${e.size}">Compact ${e.size}</Button>
    </Group>
  );
}
`,centered:!0,controls:[{type:"size",prop:"size",initialValue:"md",libraryValue:"__none__"}]};var j=n(99989);let y={type:"configurator",component:function(e){return d.createElement(s.z,{variant:"gradient",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree}},"Gradient button")},code:e=>`
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
`,centered:!0,controls:j.P},B=`
import { Button } from '@mantine/core';

function Demo() {
  return <Button disabled>Disabled button</Button>;
}
`,w={type:"code",component:function(){return d.createElement(s.z,{disabled:!0},"Disabled button")},centered:!0,code:B},z=`
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
`,E={type:"code",component:function(){return d.createElement(s.z,{component:"a",href:"https://mantine.dev","data-disabled":!0,onClick:e=>e.preventDefault()},"Disabled link")},centered:!0,code:z},D=`
import { Button } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <Button className={classes.button} disabled>
      Disabled with styles
    </Button>
  );
}
`,k=`
.button {
  &:disabled,
  &[data-disabled] {
    border-color: light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
    background-color: transparent;
  }
}
`,S={type:"code",component:function(){return d.createElement(s.z,{className:"m-13d58bb2",disabled:!0},"Disabled with styles")},centered:!0,code:[{fileName:"Demo.module.css",code:k,language:"scss"},{fileName:"Demo.tsx",code:D,language:"tsx"}]};var C=n(99684);let _=`
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
`,G={type:"code",component:function(){return d.createElement(C.u,{label:"Tooltip for disabled button"},d.createElement(s.z,{"data-disabled":!0,onClick:e=>e.preventDefault()},"Disabled button with tooltip"))},centered:!0,code:_};var T=n(909);let V=`
import { Button } from '@mantine/core';

function Demo() {
  return (
    <Button loading loaderProps={{ type: 'dots' }}>
      Loading button
    </Button>
  );
}
`,P={type:"code",component:function(){return d.createElement(s.z,{loading:!0,loaderProps:{type:"dots"}},"Loading button")},centered:!0,code:V};var N=n(71078),I=n(86140),R=n(93693);let F=`
import { Button, rem } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  return <Button{{props}} leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}>Your email</Button>;
}
`,M={type:"styles-api",data:I.B,component:function(e){return d.createElement(s.z,{leftSection:d.createElement(R.Z,{style:{width:(0,N.h)(16),height:(0,N.h)(16)}}),...e},"Your email")},code:F,centered:!0};var Z=n(86913),L=n(74369),$=n(2256);let W=`
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
`,O=(0,L.j)({components:{Button:s.z.extend({classNames:{root:"m-3abb4e8a"}})}}),Y={type:"code",component:function(){return d.createElement($.M2,{theme:O},d.createElement(h.Z,null,d.createElement(s.z,{variant:"danger"},"Danger variant"),d.createElement(s.z,{variant:"primary"},"Primary variant")))},centered:!0,code:[{fileName:"Demo.tsx",code:W,language:"tsx"},{fileName:"Demo.module.css",code:A,language:"scss"}]};var q=n(77417);let H=`
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
`,U={type:"configurator",component:function(e){return d.createElement(s.z.Group,{...e},d.createElement(s.z,{variant:"default"},"First"),d.createElement(s.z,{variant:"default"},"Second"),d.createElement(s.z,{variant:"default"},"Third"))},code:H,centered:!0,controls:[{type:"segmented",prop:"orientation",data:["horizontal","vertical"],initialValue:"horizontal",libraryValue:"horizontal"}]},X=(0,i.A)(a.us.Button);function J(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:n,GetElementRef:i,Gradient:a,Polymorphic:d,StylesApiSelectors:s}=t;return n||Q("Demo",!0),i||Q("GetElementRef",!0),a||Q("Gradient",!0),d||Q("Polymorphic",!0),s||Q("StylesApiSelectors",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n,{data:l.g}),"\n",(0,o.jsx)(t.h2,{id:"full-width",children:"Full width"}),"\n",(0,o.jsxs)(t.p,{children:["If ",(0,o.jsx)(t.code,{children:"fullWidth"})," prop is set ",(0,o.jsx)(t.code,{children:"Button"})," will take 100% of parent width:"]}),"\n",(0,o.jsx)(n,{data:u}),"\n",(0,o.jsx)(t.h2,{id:"left-and-right-sections",children:"Left and right sections"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"leftSection"})," and ",(0,o.jsx)(t.code,{children:"rightSection"})," allow adding icons or any other element to the left and right side of the button.\nWhen a section is added, padding on the corresponding side is reduced."]}),"\n",(0,o.jsxs)(t.p,{children:["Note that ",(0,o.jsx)(t.code,{children:"leftSection"})," and ",(0,o.jsx)(t.code,{children:"rightSection"})," are flipped in ",(0,o.jsx)(t.a,{href:"/styles/rtl",children:"RTL"})," mode\n(",(0,o.jsx)(t.code,{children:"leftSection"})," is displayed on the right and ",(0,o.jsx)(t.code,{children:"rightSection"})," is displayed on the left)."]}),"\n",(0,o.jsx)(n,{data:g}),"\n",(0,o.jsx)(t.h2,{id:"sections-position",children:"Sections position"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"justify"})," prop sets ",(0,o.jsx)(t.code,{children:"justify-content"})," of ",(0,o.jsx)(t.code,{children:"inner"})," element. You can use it to change the alignment of\nleft and right sections. For example, to spread them across the button set ",(0,o.jsx)(t.code,{children:'justify="space-between"'}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["If you need to align just one section to the side of the button set ",(0,o.jsx)(t.code,{children:"justify"})," to ",(0,o.jsx)(t.code,{children:"space-between"}),"\nand add empty ",(0,o.jsx)(t.code,{children:"<span />"})," to the opposite section."]}),"\n",(0,o.jsx)(n,{data:v}),"\n",(0,o.jsx)(t.h2,{id:"compact-size",children:"Compact size"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Button"})," supports ",(0,o.jsx)(t.code,{children:"xs"})," – ",(0,o.jsx)(t.code,{children:"xl"})," and ",(0,o.jsx)(t.code,{children:"compact-xs"})," – ",(0,o.jsx)(t.code,{children:"compact-xl"})," sizes. ",(0,o.jsx)(t.code,{children:"compact"})," sizes have\nthe same font-size as ",(0,o.jsx)(t.code,{children:"xs"})," – ",(0,o.jsx)(t.code,{children:"xl"})," but reduced padding and height."]}),"\n",(0,o.jsx)(n,{data:x}),"\n",(0,o.jsx)(a,{component:"Button"}),"\n",(0,o.jsx)(n,{data:y}),"\n",(0,o.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,o.jsxs)(t.p,{children:["To make ",(0,o.jsx)(t.code,{children:"Button"})," disabled, set ",(0,o.jsx)(t.code,{children:"disabled"})," prop, this will prevent any interactions with the button\nand add disabled styles. If you want the button to just look disabled but still be interactive,\nset ",(0,o.jsx)(t.code,{children:"data-disabled"})," prop instead. Note that disabled styles are the same for all variants."]}),"\n",(0,o.jsx)(n,{data:w}),"\n",(0,o.jsx)(t.h2,{id:"disabled-state-when-button-is-link",children:"Disabled state when Button is link"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"<a />"})," element does not support ",(0,o.jsx)(t.code,{children:"disabled"})," attribute. To make ",(0,o.jsx)(t.code,{children:"Button"})," disabled when it is\nrendered as a link, set ",(0,o.jsx)(t.code,{children:"data-disabled"})," attribute instead and prevent default behavior in\n",(0,o.jsx)(t.code,{children:"onClick"})," event handler."]}),"\n",(0,o.jsx)(n,{data:E}),"\n",(0,o.jsx)(t.h2,{id:"customize-disabled-styles",children:"Customize disabled styles"}),"\n",(0,o.jsxs)(t.p,{children:["To customize disabled styles, it is recommended to use both ",(0,o.jsx)(t.code,{children:"&:disabled"})," and ",(0,o.jsx)(t.code,{children:"&[data-disabled]"}),"\nselectors:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"&:disabled"})," is used to style the button when ",(0,o.jsx)(t.code,{children:"disabled"})," prop is set and\nalso when the button is disabled by the parent component (for example, when ",(0,o.jsx)(t.code,{children:"disabled"})," prop is set on a\n",(0,o.jsx)(t.code,{children:"<fieldset />"})," element which contains ",(0,o.jsx)(t.code,{children:"Button"}),")."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"&[data-disabled]"})," is used to style the button when it is not actually disabled but should look like\nit is (for example, ",(0,o.jsx)(t.code,{children:"data-disabled"})," should be used if you need to use ",(0,o.jsx)(t.a,{href:"/core/tooltip",children:"Tooltip"})," with disabled ",(0,o.jsx)(t.code,{children:"Button"}),"\nor when ",(0,o.jsx)(t.code,{children:"Button"})," is used as a link)"]}),"\n"]}),"\n",(0,o.jsx)(n,{data:S}),"\n",(0,o.jsx)(t.h2,{id:"disabled-button-with-tooltip",children:"Disabled button with Tooltip"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"onMouseLeave"})," event ",(0,o.jsx)(t.a,{href:"https://github.com/facebook/react/issues/18753",children:"is not triggered"})," when ",(0,o.jsx)(t.code,{children:"Button"})," is disabled, so if you need to use\n",(0,o.jsx)(t.a,{href:"/core/tooltip",children:"Tooltip"})," with disabled ",(0,o.jsx)(t.code,{children:"Button"})," you need to set ",(0,o.jsx)(t.code,{children:"data-disabled"})," prop on ",(0,o.jsx)(t.code,{children:"Button"}),"\ninstead of ",(0,o.jsx)(t.code,{children:"disabled"}),". Note that it is also required to change ",(0,o.jsx)(t.code,{children:"onClick"})," event handler to\n",(0,o.jsx)(t.code,{children:"(event) => event.preventDefault()"})," as ",(0,o.jsx)(t.code,{children:"Button"})," is not actually disabled and will still trigger\n",(0,o.jsx)(t.code,{children:"onClick"})," event."]}),"\n",(0,o.jsx)(n,{data:G}),"\n",(0,o.jsx)(t.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,o.jsxs)(t.p,{children:["When ",(0,o.jsx)(t.code,{children:"loading"})," prop is set, ",(0,o.jsx)(t.code,{children:"Button"})," will be disabled and ",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," with overlay will be rendered\nin the center of the button. ",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," color depends on ",(0,o.jsx)(t.code,{children:"Button"})," variant."]}),"\n",(0,o.jsx)(n,{data:T.V}),"\n",(0,o.jsx)(t.h2,{id:"loader-props",children:"Loader props"}),"\n",(0,o.jsxs)(t.p,{children:["You can customize ",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," with ",(0,o.jsx)(t.code,{children:"loaderProps"})," prop, it accepts all props that\n",(0,o.jsx)(t.a,{href:"/core/loader",children:"Loader"})," component has:"]}),"\n",(0,o.jsx)(n,{data:P}),"\n",(0,o.jsx)(s,{component:"Button"}),"\n",(0,o.jsx)(n,{data:M}),"\n",(0,o.jsxs)(t.p,{children:["Example of customizing ",(0,o.jsx)(t.code,{children:"Button"})," with ",(0,o.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"})," and ",(0,o.jsx)(t.a,{href:"/styles/data-attributes",children:"data-* attributes"}),":"]}),"\n",(0,o.jsx)(n,{data:Z.C}),"\n",(0,o.jsx)(t.h2,{id:"custom-variants",children:"Custom variants"}),"\n",(0,o.jsxs)(t.p,{children:["To add new ",(0,o.jsx)(t.code,{children:"Button"})," variants, use ",(0,o.jsx)(t.a,{href:"/styles/variants-sizes",children:"data-variant"})," attribute.\nUsually new variants are added on ",(0,o.jsx)(t.a,{href:"/theming/theme-object",children:"theme"}),", this way they are\navailable in all ",(0,o.jsx)(t.code,{children:"Button"})," components in your application."]}),"\n",(0,o.jsx)(n,{data:Y}),"\n",(0,o.jsx)(t.h2,{id:"customize-variants-colors",children:"Customize variants colors"}),"\n",(0,o.jsxs)(t.p,{children:["You can customize colors for ",(0,o.jsx)(t.code,{children:"Button"})," and other components variants by adding\n",(0,o.jsx)(t.a,{href:"/theming/colors#colors-variant-resolver",children:"variantColorResolver"})," to your theme."]}),"\n",(0,o.jsx)(n,{data:q.D}),"\n",(0,o.jsx)(t.h2,{id:"buttongroup",children:"Button.Group"}),"\n",(0,o.jsx)(n,{data:U}),"\n",(0,o.jsxs)(t.p,{children:["Note that you must not wrap child ",(0,o.jsx)(t.code,{children:"Button"})," components with any additional elements:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { Button } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <Button.Group>\n      <div>\n        <Button>This will not work</Button>\n      </div>\n      <Button>Buttons will have incorrect borders</Button>\n    </Button.Group>\n  );\n}\n"})}),"\n",(0,o.jsx)(d,{defaultElement:"button",changeToElement:"a",component:"Button",withNext:!0}),"\n",(0,o.jsx)(i,{component:"Button",refType:"button"})]})}function K(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(X,{...e,children:(0,o.jsx)(J,{...e})})}function Q(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},27402:function(e,t,n){"use strict";n.d(t,{g:function(){return l}});var o=n(27378),r=n(8671),i=n(85411);let a=`
import { Button } from '@mantine/core';

function Demo() {
  return <Button{{props}}>Button</Button>;
}
`,l={type:"configurator",component:function(e){return o.createElement(r.z,{...e},"Button")},code:a,centered:!0,controls:[i.cH,{type:"color",prop:"color",initialValue:"blue",libraryValue:"blue"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]}},909:function(e,t,n){"use strict";n.d(t,{V:function(){return s}});var o=n(27378),r=n(87921),i=n(22971),a=n(8671),l=n(17829);let d=`
import { Button, Group } from '@mantine/core';

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
`,s={type:"code",component:function(){let[e,{toggle:t}]=(0,r.q)();return o.createElement(o.Fragment,null,o.createElement(i.Z,null,o.createElement(a.z,{loading:e},"Filled button"),o.createElement(a.z,{variant:"light",loading:e},"Light button"),o.createElement(a.z,{variant:"outline",loading:e},"Outline button")),o.createElement(l.r,{checked:e,onChange:t,label:"Loading state",mt:"md"}))},centered:!0,code:d}},86913:function(e,t,n){"use strict";n.d(t,{C:function(){return h}});var o=n(27378),r=n(8671),i=n(22971),a=n(71078),l=n(4687),d={root:"m-8b35c16f",section:"m-27c75738"};let s=`
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
`,c=`
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
`;function u(e){return o.createElement(r.z,{...e,radius:"md",classNames:d})}let h={type:"code",component:function(){return o.createElement(i.Z,null,o.createElement(u,{leftSection:"12",rightSection:o.createElement(l.Z,{style:{width:(0,a.h)(18)}})},"Send files"),o.createElement(u,{leftSection:"3",rightSection:o.createElement(l.Z,{style:{width:(0,a.h)(18)}}),disabled:!0},"Send files"))},centered:!0,code:[{fileName:"Demo.module.css",code:c,language:"scss"},{fileName:"Demo.tsx",code:s,language:"tsx"}]}},77417:function(e,t,n){"use strict";n.d(t,{D:function(){return p}});var o=n(27378),r=n(61658),i=n(88193),a=n(91948),l=n(71078),d=n(97717),s=n(2256),c=n(22971),u=n(8671);let h=`
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
`,m=e=>{let t=(0,r.B)(e),n=(0,i.E)({color:e.color||e.theme.primaryColor,theme:e.theme});return n.isThemeColor&&"lime"===n.color&&"filled"===e.variant?{...t,color:"var(--mantine-color-black)",hoverColor:"var(--mantine-color-black)"}:"light"===e.variant?{background:(0,a.m)(n.value,.1),hover:(0,a.m)(n.value,.15),border:`${(0,l.h)(1)} solid ${n.value}`,color:(0,d._)(n.value,.1)}:"danger"===e.variant?{background:"var(--mantine-color-red-9)",hover:"var(--mantine-color-red-8)",color:"var(--mantine-color-white)",border:"none"}:t},p={type:"code",component:function(){return o.createElement(s.M2,{theme:{variantColorResolver:m}},o.createElement(c.Z,null,o.createElement(u.z,{color:"lime.4",variant:"filled"},"Lime filled button"),o.createElement(u.z,{color:"orange",variant:"light"},"Orange light button"),o.createElement(u.z,{variant:"danger"},"Danger button")))},centered:!0,code:h}},99989:function(e,t,n){"use strict";n.d(t,{P:function(){return o}});let o=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]},85411:function(e,t,n){"use strict";n.d(t,{cH:function(){return o},d_:function(){return r}});let o={type:"select",prop:"variant",data:["default","filled","light","outline","subtle","transparent","white"],initialValue:"filled",libraryValue:"__none__"},r={type:"select",prop:"variant",data:["filled","light","outline","transparent","white","default"],initialValue:"filled",libraryValue:"__none__"}},87921:function(e,t,n){"use strict";n.d(t,{q:function(){return r}});var o=n(27378);function r(e=!1,t){let{onOpen:n,onClose:r}=t||{},[i,a]=(0,o.useState)(e),l=(0,o.useCallback)(()=>{a(e=>e||(n?.(),!0))},[n]),d=(0,o.useCallback)(()=>{a(e=>e?(r?.(),!1):e)},[r]),s=(0,o.useCallback)(()=>{i?d():l()},[d,l,i]);return[i,{open:l,close:d,toggle:s}]}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=66739)}),_N_E=e.O()}]);