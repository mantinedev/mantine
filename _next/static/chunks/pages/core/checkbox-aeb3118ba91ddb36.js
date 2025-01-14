(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[71639],{25680:function(e,o,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/checkbox",function(){return n(6755)}])},6755:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return Y}});var t=n(52322),a=n(45392),c=n(95047);let i={type:"configurator",component:e=>(0,t.jsx)(c.X,{...e,defaultChecked:!0}),code:`
import { Checkbox } from '@mantine/core';


function Demo() {
  return (
    <Checkbox
      defaultChecked
      {{props}}
    />
  );
}
`,centered:!0,controls:[{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I agree to sell my privacy",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"outline",label:"Outline"}],initialValue:"filled",libraryValue:"filled"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"indeterminate",type:"boolean",initialValue:!1,libraryValue:!1}]};var r=n(65438);let l={type:"code",component:function(){return(0,t.jsxs)(r.K,{children:[(0,t.jsx)(c.X,{checked:!1,onChange:()=>{},label:"Default checkbox"}),(0,t.jsx)(c.X,{checked:!1,onChange:()=>{},indeterminate:!0,label:"Indeterminate checkbox"}),(0,t.jsx)(c.X,{checked:!0,onChange:()=>{},label:"Checked checkbox"}),(0,t.jsx)(c.X,{checked:!0,variant:"outline",onChange:()=>{},label:"Outline checked checkbox"}),(0,t.jsx)(c.X,{variant:"outline",onChange:()=>{},indeterminate:!0,label:"Outline indeterminate checkbox"}),(0,t.jsx)(c.X,{disabled:!0,label:"Disabled checkbox"}),(0,t.jsx)(c.X,{disabled:!0,checked:!0,onChange:()=>{},label:"Disabled checked checkbox"}),(0,t.jsx)(c.X,{disabled:!0,indeterminate:!0,label:"Disabled indeterminate checkbox"})]})},code:`
import { Checkbox, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Checkbox checked={false} onChange={() => {}} label="Default checkbox" />
      <Checkbox checked={false} onChange={() => {}} indeterminate label="Indeterminate checkbox" />
      <Checkbox checked onChange={() => {}} label="Checked checkbox" />
      <Checkbox checked variant="outline" onChange={() => {}} label="Outline checked checkbox" />
      <Checkbox
        variant="outline"
        onChange={() => {}}
        indeterminate
        label="Outline indeterminate checkbox"
      />
      <Checkbox disabled label="Disabled checkbox" />
      <Checkbox disabled checked onChange={() => {}} label="Disabled checked checkbox" />
      <Checkbox disabled indeterminate label="Disabled indeterminate checkbox" />
    </Stack>
  );
}
`};var s=n(73681),d=(0,s.Z)("outline","radioactive","IconRadioactive",[["path",{d:"M13.5 14.6l3 5.19a9 9 0 0 0 4.5 -7.79h-6a3 3 0 0 1 -1.5 2.6",key:"svg-0"}],["path",{d:"M13.5 9.4l3 -5.19a9 9 0 0 0 -9 0l3 5.19a3 3 0 0 1 3 0",key:"svg-1"}],["path",{d:"M10.5 14.6l-3 5.19a9 9 0 0 1 -4.5 -7.79h6a3 3 0 0 0 1.5 2.6",key:"svg-2"}]]),h=(0,s.Z)("outline","biohazard","IconBiohazard",[["path",{d:"M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M11.939 14c0 .173 .048 .351 .056 .533l0 .217a4.75 4.75 0 0 1 -4.533 4.745l-.217 0m-4.75 -4.75a4.75 4.75 0 0 1 7.737 -3.693m6.513 8.443a4.75 4.75 0 0 1 -4.69 -5.503l-.06 0m1.764 -2.944a4.75 4.75 0 0 1 7.731 3.477l0 .217m-11.195 -3.813a4.75 4.75 0 0 1 -1.828 -7.624l.164 -.172m6.718 0a4.75 4.75 0 0 1 -1.665 7.798",key:"svg-1"}]]);let m=({indeterminate:e,...o})=>e?(0,t.jsx)(d,{...o}):(0,t.jsx)(h,{...o}),u={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.X,{icon:m,label:"Custom icon",defaultChecked:!0}),(0,t.jsx)(c.X,{icon:m,label:"Custom icon: indeterminate",indeterminate:!0,mt:"sm"})]})},code:`
import { Checkbox, CheckboxProps } from '@mantine/core';
import { IconBiohazard, IconRadioactive } from '@tabler/icons-react';

const CheckboxIcon: CheckboxProps['icon'] = ({ indeterminate, ...others }) =>
  indeterminate ? <IconRadioactive {...others} /> : <IconBiohazard {...others} />;

function Demo() {
  return (
    <>
      <Checkbox icon={CheckboxIcon} label="Custom icon" defaultChecked />
      <Checkbox icon={CheckboxIcon} label="Custom icon: indeterminate" indeterminate mt="sm" />
    </>
  );
}
`},x={type:"code",component:function(){return(0,t.jsx)(c.X,{defaultChecked:!0,color:"lime.4",iconColor:"dark.8",size:"md",label:"Bright lime checkbox"})},code:`
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      defaultChecked
      color="lime.4"
      iconColor="dark.8"
      size="md"
      label="Bright lime checkbox"
    />
  );
}
`,centered:!0};var b=n(78309),p=n(71873);let k={type:"code",component:function(){return(0,t.jsx)(c.X,{label:(0,t.jsxs)(t.Fragment,{children:["I accept"," ",(0,t.jsx)(p.e,{href:"https://mantine.dev",target:"_blank",inherit:!0,children:"terms and conditions"})]})})},code:`
import { Checkbox, Anchor } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      label={
        <>
          I accept{' '}
          <Anchor href="https://mantine.dev" target="_blank" inherit>
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}
`};var f=n(893);let C={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f.u,{label:"Checkbox with tooltip",children:(0,t.jsx)(c.X,{label:"Tooltip on checkbox only"})}),(0,t.jsx)(f.u,{label:"Checkbox with tooltip",refProp:"rootRef",children:(0,t.jsx)(c.X,{label:"Tooltip the entire element",mt:"md"})})]})},code:`
import { Tooltip, Checkbox } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip label="Checkbox with tooltip">
        <Checkbox label="Tooltip on checkbox only" />
      </Tooltip>

      <Tooltip label="Checkbox with tooltip" refProp="rootRef">
        <Checkbox label="Tooltip the entire element" mt="md" />
      </Tooltip>
    </>
  );
}
`,centered:!0};var j=n(17757),g=n(60231),v=n(68755);let y=`.root {
  --checkbox-size-xxl: 42px;
  --checkbox-size-xxs: 14px;

  &[data-size='xxl'] {
    .label {
      font-size: 22px;
      line-height: 40px;
    }
  }

  &[data-size='xxs'] {
    .label {
      font-size: 10px;
      line-height: 14px;
    }
  }
}
`,T=`
import { MantineProvider, Checkbox, createTheme } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Checkbox: Checkbox.extend({ classNames: classes }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <Checkbox size="xxs" label="Extra small checkbox" />
      <Checkbox size="xxl" label="Extra large checkbox" mt="md" />
    </MantineProvider>
  );
}
`,w=(0,g.j)({components:{Checkbox:c.X.extend({classNames:{root:"m_4308addd",label:"m_1db1f159"}})}}),I={type:"code",centered:!0,component:function(){return(0,t.jsxs)(v.M2,{theme:w,children:[(0,t.jsx)(c.X,{size:"xxs",label:"Extra small checkbox"}),(0,t.jsx)(c.X,{size:"xxl",label:"Extra large checkbox",mt:"md"})]})},code:[{fileName:"Demo.tsx",code:T,language:"tsx"},{fileName:"Demo.module.css",code:y,language:"scss"}]};var S=n(93010);let X={type:"configurator",component:function(e){return(0,t.jsx)(c.X.Group,{defaultValue:["react"],...e,children:(0,t.jsxs)(S.Z,{mt:"xs",children:[(0,t.jsx)(c.X,{value:"react",label:"React"}),(0,t.jsx)(c.X,{value:"svelte",label:"Svelte"}),(0,t.jsx)(c.X,{value:"ng",label:"Angular"}),(0,t.jsx)(c.X,{value:"vue",label:"Vue"})]})})},code:`
import { Checkbox, Group } from '@mantine/core';


function Demo() {
  return (
    <Checkbox.Group
      defaultValue={['react']}
      {{props}}
    >
      <Group mt="xs">
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="ng" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Group>
    </Checkbox.Group>
  );
}
`,centered:!0,maxWidth:"100%",controls:[{prop:"label",type:"string",initialValue:"Select your favorite frameworks/libraries",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]};var N=n(81402),D=n(78502),V=n(81717),z=n(29476);let P=`
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox
      label="Checkbox"
      description="Checkbox description"
      error="Checkbox error"
      defaultChecked
     {{props}}
    />
  );
}
`,R={type:"styles-api",data:z.Bl,component:function(e){return(0,t.jsx)(c.X,{label:"Checkbox",description:"Checkbox description",error:"Checkbox error",defaultChecked:!0,...e})},code:P,centered:!0};var G=n(76204),E=n(2784),_={root:"m_43bfb50c"};let M={type:"code",component:function(){let[e,o]=(0,E.useState)(!1);return(0,t.jsx)(c.X,{classNames:_,label:"Checkbox button",checked:e,onChange:e=>o(e.currentTarget.checked),wrapperProps:{onClick:()=>o(e=>!e)}})},centered:!0,defaultExpanded:!1,code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import { Checkbox } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox
      classNames={classes}
      label="Checkbox button"
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      wrapperProps={{
        onClick: () => setChecked((c) => !c),
      }}
    />
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`
.root {
  border: 1px solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
  padding: var(--mantine-spacing-xs) var(--mantine-spacing-sm);
  border-radius: var(--mantine-radius-md);
  font-weight: 500;
  transition:
    color 100ms ease,
    background-color 100ms ease,
    border-color 100ms ease;
  cursor: pointer;

  &[data-checked] {
    background-color: var(--mantine-color-blue-filled);
    border-color: var(--mantine-color-blue-filled);
    color: var(--mantine-color-white);
  }

  & * {
    pointer-events: none;
    user-select: none;
  }
}
`,language:"scss"}]};var A=n(54078),Z=n(15019);let B=(0,A.A)(Z.us.Checkbox);function O(e){let o={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Demo:n,GetElementRef:c,StylesApiSelectors:r,WrapperProps:s}=o;return n||F("Demo",!0),c||F("GetElementRef",!0),r||F("StylesApiSelectors",!0),s||F("WrapperProps",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n,{data:i}),"\n",(0,t.jsx)(o.h2,{id:"controlled",children:"Controlled"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Checkbox } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Checkbox\n      checked={checked}\n      onChange={(event) => setChecked(event.currentTarget.checked)}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(o.h2,{id:"states",children:"States"}),"\n",(0,t.jsx)(n,{data:l}),"\n",(0,t.jsx)(o.h2,{id:"change-icons",children:"Change icons"}),"\n",(0,t.jsx)(n,{data:u}),"\n",(0,t.jsx)(o.h2,{id:"change-icon-color",children:"Change icon color"}),"\n",(0,t.jsxs)(o.p,{children:["Use ",(0,t.jsx)(o.code,{children:"iconColor"})," prop to change icon color. You can reference colors from ",(0,t.jsx)(o.code,{children:"theme.colors"})," or use any valid CSS color:"]}),"\n",(0,t.jsx)(n,{data:x}),"\n",(0,t.jsx)(o.h2,{id:"indeterminate-state",children:"Indeterminate state"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Checkbox"})," supports indeterminate state. When ",(0,t.jsx)(o.code,{children:"indeterminate"})," prop is set,\n",(0,t.jsx)(o.code,{children:"checked"})," prop is ignored (checkbox always has checked styles):"]}),"\n",(0,t.jsx)(n,{data:b.N,demoProps:{toggle:!0}}),"\n",(0,t.jsx)(o.h2,{id:"label-with-link",children:"Label with link"}),"\n",(0,t.jsx)(n,{data:k}),"\n",(0,t.jsx)(o.h2,{id:"checkbox-with-tooltip",children:"Checkbox with tooltip"}),"\n",(0,t.jsxs)(o.p,{children:["You can change target element to which tooltip is attached with ",(0,t.jsx)(o.code,{children:"refProp"}),":"]}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["If ",(0,t.jsx)(o.code,{children:"refProp"})," is not set, the tooltip is attached to the checkbox input"]}),"\n",(0,t.jsxs)(o.li,{children:["If ",(0,t.jsx)(o.code,{children:'refProp="rootRef"'})," is set, the tooltip is attached to the root element (contains label, input and other elements)"]}),"\n"]}),"\n",(0,t.jsx)(n,{data:C}),"\n",(0,t.jsx)(o.h2,{id:"pointer-cursor",children:"Pointer cursor"}),"\n",(0,t.jsxs)(o.p,{children:["By default, checkbox input and label have ",(0,t.jsx)(o.code,{children:"cursor: default"})," (same as native ",(0,t.jsx)(o.code,{children:'input[type="checkbox"]'}),").\nTo change cursor to pointer, set ",(0,t.jsx)(o.code,{children:"cursorType"})," on ",(0,t.jsx)(o.a,{href:"/theming/theme-object/",children:"theme"}),":"]}),"\n",(0,t.jsx)(n,{data:j.g}),"\n",(0,t.jsx)(o.h2,{id:"add-custom-sizes",children:"Add custom sizes"}),"\n",(0,t.jsxs)(o.p,{children:["You can add any number of custom sizes with ",(0,t.jsx)(o.a,{href:"/styles/data-attributes/",children:"data-size"})," attribute:"]}),"\n",(0,t.jsx)(n,{data:I}),"\n",(0,t.jsx)(s,{component:"Checkbox"}),"\n",(0,t.jsx)(o.h2,{id:"checkboxgroup",children:"Checkbox.Group"}),"\n",(0,t.jsx)(n,{data:X}),"\n",(0,t.jsx)(o.h2,{id:"controlled-checkboxgroup",children:"Controlled Checkbox.Group"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Checkbox } from \'@mantine/core\';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n\n  return (\n    <Checkbox.Group value={value} onChange={setValue}>\n      <Checkbox value="react" label="React" />\n      <Checkbox value="svelte" label="Svelte" />\n    </Checkbox.Group>\n  );\n}\n'})}),"\n",(0,t.jsx)(o.h2,{id:"checkboxindicator",children:"Checkbox.Indicator"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Checkbox.Indicator"})," looks exactly the same as ",(0,t.jsx)(o.code,{children:"Checkbox"})," component, but it does not\nhave any semantic meaning, it's just a visual representation of checkbox state. You\ncan use it in any place where you need to display checkbox state without any interaction\nrelated to the indicator. For example, it is useful in cards based on buttons, trees, etc."]}),"\n",(0,t.jsxs)(o.p,{children:["Note that ",(0,t.jsx)(o.code,{children:"Checkbox.Indicator"})," cannot be focused or selected with keyboard. It is not\naccessible and should not be used as a replacement for ",(0,t.jsx)(o.code,{children:"Checkbox"})," component."]}),"\n",(0,t.jsx)(n,{data:N._}),"\n",(0,t.jsx)(o.h2,{id:"checkboxcard-component",children:"Checkbox.Card component"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"Checkbox.Card"})," component can be used as a replacement for ",(0,t.jsx)(o.code,{children:"Checkbox"})," to build custom\ncards/buttons/other things that work as checkboxes. The root element of the component\nhas ",(0,t.jsx)(o.code,{children:'role="checkbox"'})," attribute, it is accessible by default and supports the same\nkeyboard interactions as ",(0,t.jsx)(o.code,{children:'input[type="checkbox"]'}),"."]}),"\n",(0,t.jsx)(n,{data:D.I}),"\n",(0,t.jsxs)(o.p,{children:["You can use ",(0,t.jsx)(o.code,{children:"Checkbox.Card"})," with ",(0,t.jsx)(o.code,{children:"Checkbox.Group"})," the same way as ",(0,t.jsx)(o.code,{children:"Checkbox"})," component:"]}),"\n",(0,t.jsx)(n,{data:V.x}),"\n",(0,t.jsx)(c,{component:"Checkbox",refType:"input"}),"\n",(0,t.jsx)(r,{component:"Checkbox"}),"\n",(0,t.jsx)(n,{data:R}),"\n",(0,t.jsx)(o.h2,{id:"example-table-with-row-selection",children:"Example: Table with row selection"}),"\n",(0,t.jsx)(n,{data:G.j}),"\n",(0,t.jsx)(o.h2,{id:"example-customize-with-styles-api",children:"Example: Customize with Styles API"}),"\n",(0,t.jsx)(n,{data:M}),"\n",(0,t.jsx)(o.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(o.p,{children:["Set ",(0,t.jsx)(o.code,{children:"aria-label"})," or ",(0,t.jsx)(o.code,{children:"label"})," prop to make the checkbox accessible:"]}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-tsx",children:'import { Checkbox } from \'@mantine/core\';\n\n// Not ok, input is not labeled\nfunction Bad() {\n  return <Checkbox />;\n}\n\n// Ok, input is labelled by aria-label\nfunction GoodAriaLabel() {\n  return <Checkbox aria-label="My checkbox" />;\n}\n\n// Ok, input is labelled by label element\nfunction GoodLabel() {\n  return <Checkbox label="My checkbox" />;\n}\n'})})]})}function Y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(B,{...e,children:(0,t.jsx)(O,{...e})})}function F(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},78502:function(e,o,n){"use strict";n.d(o,{I:function(){return s}});var t=n(52322),a=n(2784),c=n(95047),i=n(93010),r=n(8582),l=n(16767);let s={type:"code",centered:!0,maxWidth:320,component:function(){let[e,o]=(0,a.useState)(!1);return(0,t.jsx)(c.X.Card,{className:l.Z.root,radius:"md",checked:e,onClick:()=>o(e=>!e),children:(0,t.jsxs)(i.Z,{wrap:"nowrap",align:"flex-start",children:[(0,t.jsx)(c.X.Indicator,{}),(0,t.jsxs)("div",{children:[(0,t.jsx)(r.x,{className:l.Z.label,children:"@mantine/core"}),(0,t.jsx)(r.x,{className:l.Z.description,children:"Core components library: inputs, buttons, overlays, etc."})]})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import { Checkbox, Group, Text } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Checkbox.Card
      className={classes.root}
      radius="md"
      checked={checked}
      onClick={() => setChecked((c) => !c)}
    >
      <Group wrap="nowrap" align="flex-start">
        <Checkbox.Indicator />
        <div>
          <Text className={classes.label}>@mantine/core</Text>
          <Text className={classes.description}>
            Core components library: inputs, buttons, overlays, etc.
          </Text>
        </div>
      </Group>
    </Checkbox.Card>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`.root {
  position: relative;
  padding: var(--mantine-spacing-md);
  transition: border-color 150ms ease;

  &[data-checked] {
    border-color: var(--mantine-primary-color-filled);
  }

  @mixin hover {
    @mixin light {
      background-color: var(--mantine-color-gray-0);
    }

    @mixin dark {
      background-color: var(--mantine-color-dark-6);
    }
  }
}

.label {
  font-family: var(--mantine-font-family-monospace);
  font-weight: bold;
  font-size: var(--mantine-font-size-md);
  line-height: 1.3;
  color: var(--mantine-color-bright);
}

.description {
  margin-top: 8px;
  color: var(--mantine-color-dimmed);
  font-size: var(--mantine-font-size-xs);
}
`}]}},16767:function(e,o,n){"use strict";n.d(o,{Z:function(){return t}});var t={root:"m_2cb8989f",label:"m_69ff5ed7",description:"m_cf98ad9f"}},81717:function(e,o,n){"use strict";n.d(o,{x:function(){return h}});var t=n(52322),a=n(2784),c=n(95047),i=n(93010),r=n(8582),l=n(65438),s=n(16767);let d=[{name:"@mantine/core",description:"Core components library: inputs, buttons, overlays, etc."},{name:"@mantine/hooks",description:"Collection of reusable hooks for React applications."},{name:"@mantine/notifications",description:"Notifications system"}],h={type:"code",centered:!0,maxWidth:320,component:function(){let[e,o]=(0,a.useState)([]),n=d.map(e=>(0,t.jsx)(c.X.Card,{className:s.Z.root,radius:"md",value:e.name,children:(0,t.jsxs)(i.Z,{wrap:"nowrap",align:"flex-start",children:[(0,t.jsx)(c.X.Indicator,{}),(0,t.jsxs)("div",{children:[(0,t.jsx)(r.x,{className:s.Z.label,children:e.name}),(0,t.jsx)(r.x,{className:s.Z.description,children:e.description})]})]})},e.name));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.X.Group,{value:e,onChange:o,label:"Pick packages to install",description:"Choose all packages that you will need in your application",children:(0,t.jsx)(l.K,{pt:"md",gap:"xs",children:n})}),(0,t.jsxs)(r.x,{fz:"xs",mt:"md",children:["CurrentValue: ",e.join(", ")||"–"]})]})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import { Checkbox, Group, Stack, Text } from '@mantine/core';
import classes from './Demo.module.css';

const data = [
  {
    name: '@mantine/core',
    description: 'Core components library: inputs, buttons, overlays, etc.',
  },
  { name: '@mantine/hooks', description: 'Collection of reusable hooks for React applications.' },
  { name: '@mantine/notifications', description: 'Notifications system' },
];

function Demo() {
  const [value, setValue] = useState<string[]>([]);

  const cards = data.map((item) => (
    <Checkbox.Card className={classes.root} radius="md" value={item.name} key={item.name}>
      <Group wrap="nowrap" align="flex-start">
        <Checkbox.Indicator />
        <div>
          <Text className={classes.label}>{item.name}</Text>
          <Text className={classes.description}>{item.description}</Text>
        </div>
      </Group>
    </Checkbox.Card>
  ));

  return (
    <>
      <Checkbox.Group
        value={value}
        onChange={setValue}
        label="Pick packages to install"
        description="Choose all packages that you will need in your application"
      >
        <Stack pt="md" gap="xs">
          {cards}
        </Stack>
      </Checkbox.Group>

      <Text fz="xs" mt="md">
        CurrentValue: {value.join(', ') || '\u2013'}
      </Text>
    </>
  );
}
`},{fileName:"Demo.module.css",language:"scss",code:`.root {
  position: relative;
  padding: var(--mantine-spacing-md);
  transition: border-color 150ms ease;

  &[data-checked] {
    border-color: var(--mantine-primary-color-filled);
  }

  @mixin hover {
    @mixin light {
      background-color: var(--mantine-color-gray-0);
    }

    @mixin dark {
      background-color: var(--mantine-color-dark-6);
    }
  }
}

.label {
  font-family: var(--mantine-font-family-monospace);
  font-weight: bold;
  font-size: var(--mantine-font-size-md);
  line-height: 1.3;
  color: var(--mantine-color-bright);
}

.description {
  margin-top: 8px;
  color: var(--mantine-color-dimmed);
  font-size: var(--mantine-font-size-xs);
}
`}]}},78309:function(e,o,n){"use strict";n.d(o,{N:function(){return d}});var t=n(52322),a=n(95047),c=n(28559),i=n(73533),r=n(2784);let l=`
import { useListState, randomId } from '@mantine/hooks';
import { Checkbox } from '@mantine/core';

const initialValues = [
  { label: 'Receive email notifications', checked: false, key: randomId() },
  { label: 'Receive sms notifications', checked: false, key: randomId() },
  { label: 'Receive push notifications', checked: false, key: randomId() },
];

export function IndeterminateCheckbox() {
  const [values, handlers] = useListState(initialValues);

  const allChecked = values.every((value) => value.checked);
  const indeterminate = values.some((value) => value.checked) && !allChecked;

  const items = values.map((value, index) => (
    <Checkbox
      mt="xs"
      ml={33}
      label={value.label}
      key={value.key}
      checked={value.checked}
      onChange={(event) => handlers.setItemProp(index, 'checked', event.currentTarget.checked)}
    />
  ));

  return (
    <>
      <Checkbox
        checked={allChecked}
        indeterminate={indeterminate}
        label="Receive all notifications"
        onChange={() =>
          handlers.setState((current) =>
            current.map((value) => ({ ...value, checked: !allChecked }))
          )
        }
      />
      {items}
    </>
  );
}
`,s=[{label:"Receive email notifications",checked:!1,key:(0,i.k)()},{label:"Receive sms notifications",checked:!1,key:(0,i.k)()},{label:"Receive push notifications",checked:!1,key:(0,i.k)()}],d={type:"code",code:l,component:function(){let[e,o]=function(e=[]){let[o,n]=(0,r.useState)(e);return[o,{setState:n,append:(...e)=>n(o=>[...o,...e]),prepend:(...e)=>n(o=>[...e,...o]),insert:(e,...o)=>n(n=>[...n.slice(0,e),...o,...n.slice(e)]),pop:()=>n(e=>{let o=[...e];return o.pop(),o}),shift:()=>n(e=>{let o=[...e];return o.shift(),o}),apply:e=>n(o=>o.map((o,n)=>e(o,n))),applyWhere:(e,o)=>n(n=>n.map((n,t)=>e(n,t)?o(n,t):n)),remove:(...e)=>n(o=>o.filter((o,n)=>!e.includes(n))),reorder:({from:e,to:o})=>n(n=>{let t=[...n],a=n[e];return t.splice(e,1),t.splice(o,0,a),t}),swap:({from:e,to:o})=>n(n=>{let t=[...n],a=t[e],c=t[o];return t.splice(o,1,a),t.splice(e,1,c),t}),setItem:(e,o)=>n(n=>{let t=[...n];return t[e]=o,t}),setItemProp:(e,o,t)=>n(n=>{let a=[...n];return a[e]={...a[e],[o]:t},a}),filter:e=>{n(o=>o.filter(e))}}]}(s),n=e.every(e=>e.checked),i=e.some(e=>e.checked)&&!n,l=e.map((e,n)=>(0,t.jsx)(a.X,{mt:"xs",ml:33,label:e.label,checked:e.checked,onChange:e=>o.setItemProp(n,"checked",e.currentTarget.checked)},e.key));return(0,t.jsxs)(c.x,{maw:400,mx:"auto",children:[(0,t.jsx)(a.X,{checked:n,indeterminate:i,label:"Receive all notifications",onChange:()=>o.setState(e=>e.map(e=>({...e,checked:!n})))}),l]})}}},81402:function(e,o,n){"use strict";n.d(o,{_:function(){return i}});var t=n(52322),a=n(93010),c=n(95047);let i={type:"code",component:function(){return(0,t.jsxs)(a.Z,{children:[(0,t.jsx)(c.X.Indicator,{}),(0,t.jsx)(c.X.Indicator,{checked:!0}),(0,t.jsx)(c.X.Indicator,{indeterminate:!0}),(0,t.jsx)(c.X.Indicator,{disabled:!0}),(0,t.jsx)(c.X.Indicator,{disabled:!0,checked:!0}),(0,t.jsx)(c.X.Indicator,{disabled:!0,indeterminate:!0})]})},code:`
import { Checkbox, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Checkbox.Indicator />
      <Checkbox.Indicator checked />
      <Checkbox.Indicator indeterminate />
      <Checkbox.Indicator disabled />
      <Checkbox.Indicator disabled checked />
      <Checkbox.Indicator disabled indeterminate />
    </Group>
  );
}
`}},76204:function(e,o,n){"use strict";n.d(o,{j:function(){return l}});var t=n(52322),a=n(2784),c=n(96242),i=n(95047);let r=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],l={type:"code",component:function(){let[e,o]=(0,a.useState)([]),n=r.map(n=>(0,t.jsxs)(c.i.Tr,{bg:e.includes(n.position)?"var(--mantine-color-blue-light)":void 0,children:[(0,t.jsx)(c.i.Td,{children:(0,t.jsx)(i.X,{"aria-label":"Select row",checked:e.includes(n.position),onChange:t=>o(t.currentTarget.checked?[...e,n.position]:e.filter(e=>e!==n.position))})}),(0,t.jsx)(c.i.Td,{children:n.position}),(0,t.jsx)(c.i.Td,{children:n.name}),(0,t.jsx)(c.i.Td,{children:n.symbol}),(0,t.jsx)(c.i.Td,{children:n.mass})]},n.name));return(0,t.jsxs)(c.i,{children:[(0,t.jsx)(c.i.Thead,{children:(0,t.jsxs)(c.i.Tr,{children:[(0,t.jsx)(c.i.Th,{}),(0,t.jsx)(c.i.Th,{children:"Element position"}),(0,t.jsx)(c.i.Th,{children:"Element name"}),(0,t.jsx)(c.i.Th,{children:"Symbol"}),(0,t.jsx)(c.i.Th,{children:"Atomic mass"})]})}),(0,t.jsx)(c.i.Tbody,{children:n})]})},defaultExpanded:!1,code:`
import { useState } from 'react';
import { Table, Checkbox } from '@mantine/core';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

function Demo() {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);

  const rows = elements.map((element) => (
    <Table.Tr
      key={element.name}
      bg={selectedRows.includes(element.position) ? 'var(--mantine-color-blue-light)' : undefined}
    >
      <Table.Td>
        <Checkbox
          aria-label="Select row"
          checked={selectedRows.includes(element.position)}
          onChange={(event) =>
            setSelectedRows(
              event.currentTarget.checked
                ? [...selectedRows, element.position]
                : selectedRows.filter((position) => position !== element.position)
            )
          }
        />
      </Table.Td>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th />
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`}},17757:function(e,o,n){"use strict";n.d(o,{g:function(){return s}});var t=n(52322),a=n(60231),c=n(95047),i=n(68755);let r=`
import { MantineProvider, createTheme, Checkbox } from '@mantine/core';

const theme = createTheme({
  cursorType: 'pointer',
});

function Demo() {
  return (
    <>
      <Checkbox label="Default cursor" />

      <MantineProvider theme={theme}>
        <Checkbox label="Pointer cursor" mt="md" />
      </MantineProvider>
    </>
  );
}
`,l=(0,a.j)({cursorType:"pointer"}),s={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.X,{label:"Default cursor"}),(0,t.jsx)(i.M2,{theme:l,children:(0,t.jsx)(c.X,{label:"Pointer cursor",mt:"md",styles:{input:{cursor:"pointer"},label:{cursor:"pointer"}}})})]})},centered:!0,code:r}}},function(e){e.O(0,[61177,66748,61639,92888,49774,40179],function(){return e(e.s=25680)}),_N_E=e.O()}]);