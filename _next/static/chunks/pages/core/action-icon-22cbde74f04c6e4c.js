(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1002:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(54764).Z)("heart","IconHeart",[["path",{d:"M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572",key:"svg-0"}]])},60060:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(54764).Z)("photo","IconPhoto",[["path",{d:"M15 8h.01",key:"svg-0"}],["path",{d:"M3 6a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v12a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3v-12z",key:"svg-1"}],["path",{d:"M3 16l5 -5c.928 -.893 2.072 -.893 3 0l5 5",key:"svg-2"}],["path",{d:"M14 14l1 -1c.928 -.893 2.072 -.893 3 0l3 3",key:"svg-3"}]])},17569:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var o=(0,t(54764).Z)("settings","IconSettings",[["path",{d:"M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z",key:"svg-0"}],["path",{d:"M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0",key:"svg-1"}]])},66296:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/action-icon",function(){return t(88945)}])},88945:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return q}});var o=t(24246),i=t(71670),a=t(3916),r=t(30289),c=t(27378),l=(0,t(54764).Z)("adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]]),s=t(84246),d=t(85411);let h=`
import { ActionIcon } from '@mantine/core';
import { IconAdjustments } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon{{props}} aria-label="Settings">
      <IconAdjustments style={{ width: '70%', height: '70%' }} stroke={1.5} />
    </ActionIcon>
  );
}
`,u={type:"configurator",component:function(e){return c.createElement(s.A,{...e,"aria-label":"Settings"},c.createElement(l,{style:{width:"70%",height:"70%"},stroke:1.5}))},code:h,centered:!0,controls:[d.cH,{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"size",type:"size",initialValue:"md",libraryValue:"md"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"}]};var m=t(1002),p=t(99989);let b={type:"configurator",component:function(e){return c.createElement(s.A,{variant:"gradient",size:"xl","aria-label":"Gradient action icon",gradient:{from:e.gradientFrom,to:e.gradientTo,deg:e.gradientDegree}},c.createElement(m.Z,null))},code:e=>`
import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon
      variant="gradient"
      size="xl"
      aria-label="Gradient action icon"
      gradient={{ from: '${e.gradientFrom}', to: '${e.gradientTo}', deg: ${e.gradientDegree} }}
    >
      <IconHeart />
    </ActionIcon>
  );
}
`,centered:!0,controls:p.P};var x=t(71078);let f=`
import { ActionIcon, rem } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon size={42} variant="default" aria-label="ActionIcon with size as a number">
      <IconHeart style={{ width: rem(24), height: rem(24) }} />
    </ActionIcon>
  );
}
`,g={type:"code",centered:!0,component:function(){return c.createElement(s.A,{size:42,variant:"default","aria-label":"ActionIcon with size as a number"},c.createElement(m.Z,{style:{width:(0,x.h)(24),height:(0,x.h)(24)}}))},code:f};var j=t(22971);let I=`
import { ActionIcon, Group } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <Group justify="center">
      <ActionIcon size="xl" disabled aria-label="Disabled and not interactive">
        <IconHeart />
      </ActionIcon>

      <ActionIcon size="xl" data-disabled aria-label="Has disabled styles but still interactive">
        <IconHeart />
      </ActionIcon>
    </Group>
  );
}
`,y={type:"code",component:function(){return c.createElement(j.Z,{justify:"center"},c.createElement(s.A,{size:"xl",disabled:!0,"aria-label":"Disabled and not interactive"},c.createElement(m.Z,null)),c.createElement(s.A,{size:"xl","data-disabled":!0,"aria-label":"Has disabled styles but still interactive"},c.createElement(m.Z,null)))},code:I};var v=t(31550);let A=`
import { ActionIcon } from '@mantine/core';
import { IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon
      component="a"
      href="https://mantine.dev"
      data-disabled
      size="xl"
      aria-label="Open in a new tab"
      onClick={(event) => event.preventDefault()}
    >
      <IconExternalLink />
    </ActionIcon>
  );
}
`,w={type:"code",component:function(){return c.createElement(s.A,{component:"a",href:"https://mantine.dev","data-disabled":!0,size:"xl","aria-label":"Open in a new tab",onClick:e=>e.preventDefault()},c.createElement(v.Z,null))},centered:!0,code:A},z=`
import { ActionIcon } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

function Demo() {
  return (
    <ActionIcon size="xl" className={classes.button} disabled aria-label="Disabled with styles">
      <IconHeart />
    </ActionIcon>
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
`,E={type:"code",component:function(){return c.createElement(s.A,{size:"xl",className:"m-892ca4f5",disabled:!0,"aria-label":"Disabled with styles"},c.createElement(m.Z,null))},centered:!0,code:[{fileName:"Demo.module.css",code:k,language:"scss"},{fileName:"Demo.tsx",code:z,language:"tsx"}]};var D=t(99684);let _=`
import { ActionIcon, Tooltip } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <Tooltip label="Tooltip for disabled button">
      <ActionIcon size="xl" data-disabled onClick={(event) => event.preventDefault()}>
        <IconHeart />
      </ActionIcon>
    </Tooltip>
  );
}
`,H={type:"code",component:function(){return c.createElement(D.u,{label:"Tooltip for disabled button"},c.createElement(s.A,{size:"xl","data-disabled":!0,onClick:e=>e.preventDefault()},c.createElement(m.Z,null)))},centered:!0,code:_},T=`
import { ActionIcon, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <ActionIcon loading aria-label="Filled loading" />
      <ActionIcon variant="light" loading aria-label="Light loading" />
      <ActionIcon variant="outline" loading aria-label="Outline loading" />
    </Group>
  );
}
`,M={type:"code",component:function(){return c.createElement(j.Z,{justify:"center"},c.createElement(s.A,{loading:!0,"aria-label":"Filled loading"}),c.createElement(s.A,{variant:"light",loading:!0,"aria-label":"Light loading"}),c.createElement(s.A,{variant:"outline",loading:!0,"aria-label":"Outline loading"}))},code:T},Z=`
import { ActionIcon } from '@mantine/core';

function Demo() {
  return <ActionIcon size="xl" loading loaderProps={{ type: 'dots' }} />;
}
`,G={type:"code",component:function(){return c.createElement(s.A,{size:"xl",loading:!0,loaderProps:{type:"dots"}})},centered:!0,code:Z};var N=t(74369),V=t(2256);let P=`
import { Group, ActionIcon, MantineProvider, createTheme } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    ActionIcon: ActionIcon.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Group justify="center">
        <ActionIcon size="xl" variant="danger" aria-label="Danger variant">
          <IconHeart />
        </ActionIcon>
        <ActionIcon size="xl" variant="primary" aria-label="Primary variant">
          <IconHeart />
        </ActionIcon>
      </Group>
    </MantineProvider>
  );
}
`,C=`
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
`,L=(0,N.j)({components:{ActionIcon:s.A.extend({classNames:{root:"m-6f3d7427"}})}}),S={type:"code",component:function(){return c.createElement(V.M2,{theme:L},c.createElement(j.Z,{justify:"center"},c.createElement(s.A,{size:"xl",variant:"danger","aria-label":"Danger variant"},c.createElement(m.Z,null)),c.createElement(s.A,{size:"xl",variant:"primary","aria-label":"Primary variant"},c.createElement(m.Z,null))))},centered:!0,code:[{fileName:"Demo.tsx",code:P,language:"tsx"},{fileName:"Demo.module.css",code:C,language:"scss"}]};var F=t(52257),O=t(60060),W=t(17569);let $=`
import { ActionIcon, rem } from '@mantine/core';
import { IconPhoto, IconSettings, IconHeart } from '@tabler/icons-react';

function Demo() {
  return (
    <ActionIcon.Group{{props}}>
      <ActionIcon variant="default" size="lg" aria-label="Gallery">
        <IconPhoto style={{ width: rem(20) }} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Settings">
        <IconSettings style={{ width: rem(20) }} stroke={1.5} />
      </ActionIcon>

      <ActionIcon variant="default" size="lg" aria-label="Likes">
        <IconHeart style={{ width: rem(20) }} stroke={1.5} />
      </ActionIcon>
    </ActionIcon.Group>
  );
}
`,U={type:"configurator",component:function(e){return c.createElement(s.A.Group,{...e},c.createElement(s.A,{variant:"default",size:"lg","aria-label":"Gallery"},c.createElement(O.Z,{style:{width:(0,x.h)(20)},stroke:1.5})),c.createElement(s.A,{variant:"default",size:"lg","aria-label":"Settings"},c.createElement(W.Z,{style:{width:(0,x.h)(20)},stroke:1.5})),c.createElement(s.A,{variant:"default",size:"lg","aria-label":"Likes"},c.createElement(m.Z,{style:{width:(0,x.h)(20)},stroke:1.5})))},code:$,centered:!0,controls:[{type:"segmented",prop:"orientation",data:["horizontal","vertical"],initialValue:"horizontal",libraryValue:"horizontal"}]},X=(0,a.A)(r.us.ActionIcon);function Y(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components},{Demo:t,GetElementRef:a,Gradient:r,Polymorphic:c}=n;return t||R("Demo",!0),a||R("GetElementRef",!0),r||R("Gradient",!0),c||R("Polymorphic",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(t,{data:u}),"\n",(0,o.jsx)(r,{component:"ActionIcon"}),"\n",(0,o.jsx)(t,{data:b}),"\n",(0,o.jsx)(n.h2,{id:"size",children:"Size"}),"\n",(0,o.jsxs)(n.p,{children:["You can use any valid CSS value in ",(0,o.jsx)(n.code,{children:"size"})," prop, it is used to set ",(0,o.jsx)(n.code,{children:"width"}),", ",(0,o.jsx)(n.code,{children:"min-width"}),", ",(0,o.jsx)(n.code,{children:"min-height"})," and ",(0,o.jsx)(n.code,{children:"height"}),"\nproperties. Note that ",(0,o.jsx)(n.code,{children:"size"})," prop does not control child ",(0,o.jsx)(n.a,{href:"/guides/icons",children:"icon"})," size, you need to\nset it manually on icon component. When ",(0,o.jsx)(n.code,{children:"size"})," is a number, the value is treated as ",(0,o.jsx)(n.code,{children:"px"})," units and\nconverted to ",(0,o.jsx)(n.a,{href:"/styles/rem",children:"rem"})," units."]}),"\n",(0,o.jsx)(t,{data:g}),"\n",(0,o.jsx)(n.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,o.jsxs)(n.p,{children:["To make ",(0,o.jsx)(n.code,{children:"ActionIcon"})," disabled set ",(0,o.jsx)(n.code,{children:"disabled"})," prop, this will prevent any interactions with the button\nand add disabled styles. If you want the button to just look disabled but still be interactive,\nset ",(0,o.jsx)(n.code,{children:"data-disabled"})," prop instead. Note that disabled styles are the same for all variants."]}),"\n",(0,o.jsx)(t,{data:y}),"\n",(0,o.jsx)(n.h2,{id:"disabled-state-when-actionicon-is-link",children:"Disabled state when ActionIcon is link"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"<a />"})," element does not support ",(0,o.jsx)(n.code,{children:"disabled"})," attribute. To make ",(0,o.jsx)(n.code,{children:"ActionIcon"})," disabled when it is\nrendered as a link, set ",(0,o.jsx)(n.code,{children:"data-disabled"})," attribute instead and prevent default behavior in\n",(0,o.jsx)(n.code,{children:"onClick"})," event handler."]}),"\n",(0,o.jsx)(t,{data:w}),"\n",(0,o.jsx)(n.h2,{id:"customize-disabled-styles",children:"Customize disabled styles"}),"\n",(0,o.jsxs)(n.p,{children:["To customize disabled styles, it is recommended to use both ",(0,o.jsx)(n.code,{children:"&:disabled"})," and ",(0,o.jsx)(n.code,{children:"&[data-disabled]"}),"\nselectors:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"&:disabled"})," is used to style the button when ",(0,o.jsx)(n.code,{children:"disabled"})," prop is set and\nalso when the button is disabled by the parent component (for example, when ",(0,o.jsx)(n.code,{children:"disabled"})," prop is set on a\n",(0,o.jsx)(n.code,{children:"<fieldset />"})," element which contains ",(0,o.jsx)(n.code,{children:"ActionIcon"}),")."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"&[data-disabled]"})," is used to style the button when it is not actually disabled but should look like\nit is (for example, ",(0,o.jsx)(n.code,{children:"data-disabled"})," should be used if you need to use ",(0,o.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"})," with disabled ",(0,o.jsx)(n.code,{children:"ActionIcon"}),"\nor when ",(0,o.jsx)(n.code,{children:"ActionIcon"})," is used as a link)"]}),"\n"]}),"\n",(0,o.jsx)(t,{data:E}),"\n",(0,o.jsx)(n.h2,{id:"disabled-button-with-tooltip",children:"Disabled button with Tooltip"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"onMouseLeave"})," event ",(0,o.jsx)(n.a,{href:"https://github.com/facebook/react/issues/18753",children:"is not triggered"})," when ",(0,o.jsx)(n.code,{children:"ActionIcon"})," is disabled, so if you need to use\n",(0,o.jsx)(n.a,{href:"/core/tooltip",children:"Tooltip"})," with disabled ",(0,o.jsx)(n.code,{children:"ActionIcon"})," you need to set ",(0,o.jsx)(n.code,{children:"data-disabled"})," prop on ",(0,o.jsx)(n.code,{children:"ActionIcon"}),"\ninstead of ",(0,o.jsx)(n.code,{children:"disabled"}),". Note that it is also required to change ",(0,o.jsx)(n.code,{children:"onClick"})," event handler to\n",(0,o.jsx)(n.code,{children:"(event) => event.preventDefault()"})," as ",(0,o.jsx)(n.code,{children:"ActionIcon"})," is not actually disabled and will still trigger\n",(0,o.jsx)(n.code,{children:"onClick"})," event."]}),"\n",(0,o.jsx)(t,{data:H}),"\n",(0,o.jsx)(n.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,o.jsxs)(n.p,{children:["When ",(0,o.jsx)(n.code,{children:"loading"})," prop is set, ",(0,o.jsx)(n.code,{children:"ActionIcon"})," will be disabled and ",(0,o.jsx)(n.a,{href:"/core/loader",children:"Loader"})," with overlay will be rendered\nin the center of the button. ",(0,o.jsx)(n.a,{href:"/core/loader",children:"Loader"})," color depends on ",(0,o.jsx)(n.code,{children:"ActionIcon"})," variant."]}),"\n",(0,o.jsx)(t,{data:M}),"\n",(0,o.jsx)(n.h2,{id:"loader-props",children:"Loader props"}),"\n",(0,o.jsxs)(n.p,{children:["You can customize ",(0,o.jsx)(n.a,{href:"/core/loader",children:"Loader"})," with ",(0,o.jsx)(n.code,{children:"loaderProps"})," prop, it accepts all props that\n",(0,o.jsx)(n.a,{href:"/core/loader",children:"Loader"})," component has:"]}),"\n",(0,o.jsx)(t,{data:G}),"\n",(0,o.jsx)(n.h2,{id:"add-custom-variants",children:"Add custom variants"}),"\n",(0,o.jsxs)(n.p,{children:["To add new ",(0,o.jsx)(n.code,{children:"ActionIcon"})," variants, use ",(0,o.jsx)(n.a,{href:"/styles/variants-sizes",children:"data-variant"})," attribute.\nUsually new variants are added on ",(0,o.jsx)(n.a,{href:"/theming/theme-object",children:"theme"}),", this way they are\navailable in all ",(0,o.jsx)(n.code,{children:"ActionIcon"})," components in your application."]}),"\n",(0,o.jsx)(t,{data:S}),"\n",(0,o.jsx)(n.h2,{id:"add-custom-sizes",children:"Add custom sizes"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ActionIcon"})," sizes are defined by ",(0,o.jsx)(n.code,{children:"--ai-size-{x}"})," CSS variables. The easiest way to add new sizes is to\ndefine additional ",(0,o.jsx)(n.code,{children:"--ai-size-{x}"})," variables on the ",(0,o.jsx)(n.code,{children:"root"})," element:"]}),"\n",(0,o.jsx)(t,{data:F.h}),"\n",(0,o.jsx)(n.h2,{id:"actionicongroup",children:"ActionIcon.Group"}),"\n",(0,o.jsx)(t,{data:U}),"\n",(0,o.jsxs)(n.p,{children:["Note that you must not wrap child ",(0,o.jsx)(n.code,{children:"ActionIcon"})," components with any additional elements:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { ActionIcon } from '@mantine/core';\n\n// Will not work correctly\nfunction Demo() {\n  return (\n    <ActionIcon.Group>\n      <div>\n        <ActionIcon>This will not work</ActionIcon>\n      </div>\n      <ActionIcon>ActionIcons will have incorrect borders</ActionIcon>\n    </ActionIcon.Group>\n  );\n}\n"})}),"\n",(0,o.jsx)(c,{defaultElement:"button",changeToElement:"a",component:"ActionIcon",withNext:!0}),"\n",(0,o.jsx)(a,{component:"ActionIcon",refType:"button"}),"\n",(0,o.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(n.p,{children:["To make ",(0,o.jsx)(n.code,{children:"ActionIcon"})," accessible for screen readers, you need to either set ",(0,o.jsx)(n.code,{children:"aria-label"})," or\nuse ",(0,o.jsx)(n.a,{href:"/core/visually-hidden",children:"VisuallyHidden"})," component:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { ActionIcon, VisuallyHidden } from '@mantine/core';\nimport { IconHeart } from '@tabler/icons-react';\n\nfunction Demo() {\n  return (\n    <>\n      <ActionIcon aria-label=\"Like post\">\n        <IconHeart />\n      </ActionIcon>\n\n      <ActionIcon>\n        <VisuallyHidden>Like post</VisuallyHidden>\n        <IconHeart />\n      </ActionIcon>\n    </>\n  );\n}\n"})})]})}function q(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(X,{...e,children:(0,o.jsx)(Y,{...e})})}function R(e,n){throw Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},52257:function(e,n,t){"use strict";t.d(n,{h:function(){return m}});var o=t(27378),i=t(74369),a=t(84246),r=t(2256),c=t(22971),l=t(71078),s=t(1002);let d=`
import { ActionIcon, createTheme, Group, MantineThemeProvider, rem } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    ActionIcon: ActionIcon.extend({
      classNames: classes,
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <Group justify="center">
        <ActionIcon size="xxs" aria-label="Custom xxs size">
          <IconHeart style={{ width: rem(10), height: rem(10) }} />
        </ActionIcon>

        <ActionIcon size="xxl" aria-label="Custom xxl size">
          <IconHeart style={{ width: rem(32), height: rem(32) }} />
        </ActionIcon>
      </Group>
    </MantineThemeProvider>
  );
}
`,h=`
.root {
  --ai-size-xxs: rem(16px);
  --ai-size-xxl: rem(50px);
}
`,u=(0,i.j)({components:{ActionIcon:a.A.extend({classNames:{root:"m-2be4ed51"}})}}),m={type:"code",component:function(){return o.createElement(r.M2,{theme:u},o.createElement(c.Z,{justify:"center"},o.createElement(a.A,{size:"xxs","aria-label":"Custom xxs size"},o.createElement(s.Z,{style:{width:(0,l.h)(10),height:(0,l.h)(10)}})),o.createElement(a.A,{size:"xxl","aria-label":"Custom xxl size"},o.createElement(s.Z,{style:{width:(0,l.h)(32),height:(0,l.h)(32)}}))))},code:[{fileName:"Demo.module.css",code:h,language:"scss"},{fileName:"Demo.tsx",code:d,language:"tsx"}]}},99989:function(e,n,t){"use strict";t.d(n,{P:function(){return o}});let o=[{type:"color",prop:"gradientFrom",initialValue:"blue",libraryValue:"__none__"},{type:"color",prop:"gradientTo",initialValue:"cyan",libraryValue:"__none__"},{type:"number",prop:"gradientDegree",initialValue:90,min:0,max:360,libraryValue:"__none__"}]},85411:function(e,n,t){"use strict";t.d(n,{cH:function(){return o},d_:function(){return i}});let o={type:"select",prop:"variant",data:["default","filled","light","outline","subtle","transparent","white"],initialValue:"filled",libraryValue:"__none__"},i={type:"select",prop:"variant",data:["filled","light","outline","transparent","white","default"],initialValue:"filled",libraryValue:"__none__"}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=66296)}),_N_E=e.O()}]);