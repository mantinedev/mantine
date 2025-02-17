(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62084],{98141:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/switch",function(){return o(76809)}])},76809:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>N});var n=o(31085),r=o(71184),i=o(26975);let c={type:"configurator",component:e=>(0,n.jsx)(i.d,{defaultChecked:!0,...e}),code:`
import { Switch } from '@mantine/core';


function Demo() {
  return (
    <Switch
      defaultChecked
      {{props}}
    />
  );
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I agree to sell my privacy",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1}]};var a=o(56051);let l={type:"code",component:function(){return(0,n.jsxs)(a.Y,{justify:"center",children:[(0,n.jsx)(i.d,{size:"xs",onLabel:"ON",offLabel:"OFF"}),(0,n.jsx)(i.d,{size:"sm",onLabel:"ON",offLabel:"OFF"}),(0,n.jsx)(i.d,{size:"md",onLabel:"ON",offLabel:"OFF"}),(0,n.jsx)(i.d,{size:"lg",onLabel:"ON",offLabel:"OFF"}),(0,n.jsx)(i.d,{size:"xl",onLabel:"ON",offLabel:"OFF"})]})},code:`
import { Switch, Group } from '@mantine/core';

function Demo() {
  return (
    <Group justify="center">
      <Switch size="xs" onLabel="ON" offLabel="OFF" />
      <Switch size="sm" onLabel="ON" offLabel="OFF" />
      <Switch size="md" onLabel="ON" offLabel="OFF" />
      <Switch size="lg" onLabel="ON" offLabel="OFF" />
      <Switch size="xl" onLabel="ON" offLabel="OFF" />
    </Group>
  );
}
`};var s=o(84032),d=o(42244);let h={type:"code",component:function(){return(0,n.jsx)(i.d,{size:"md",color:"dark.4",onLabel:(0,n.jsx)(s.A,{size:16,stroke:2.5,color:"var(--mantine-color-yellow-4)"}),offLabel:(0,n.jsx)(d.A,{size:16,stroke:2.5,color:"var(--mantine-color-blue-6)"})})},centered:!0,code:`
import { Switch } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

function Demo() {
  return (
    <Switch
      size="md"
      color="dark.4"
      onLabel={<IconSun size={16} stroke={2.5} color="var(--mantine-color-yellow-4)" />}
      offLabel={<IconMoonStars size={16} stroke={2.5} color="var(--mantine-color-blue-6)" />}
    />
  );
}
`};var u=o(14041),p=o(11466),m=o(3650);let b={type:"code",component:function(){let[e,t]=(0,u.useState)(!1);return(0,n.jsx)(i.d,{checked:e,onChange:e=>t(e.currentTarget.checked),color:"teal",size:"md",label:"Switch with thumb icon",thumbIcon:e?(0,n.jsx)(p.A,{size:12,color:"var(--mantine-color-teal-6)",stroke:3}):(0,n.jsx)(m.A,{size:12,color:"var(--mantine-color-red-6)",stroke:3})})},centered:!0,code:`
import { useState } from 'react';
import { Switch } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      checked={checked}
      onChange={(event) => setChecked(event.currentTarget.checked)}
      color="teal"
      size="md"
      label="Switch with thumb icon"
      thumbIcon={
        checked ? (
          <IconCheck size={12} color="var(--mantine-color-teal-6)" stroke={3} />
        ) : (
          <IconX size={12} color="var(--mantine-color-red-6)" stroke={3} />
        )
      }
    />
  );
}
`};var f=o(2912);let x={type:"code",component:function(){return(0,n.jsx)(f.m,{label:"Switch tooltip",refProp:"rootRef",children:(0,n.jsx)(i.d,{label:"Switch with tooltip"})})},code:`
import { Switch, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Switch tooltip" refProp="rootRef">
      <Switch label="Switch with tooltip" />
    </Tooltip>
  );
}
`,centered:!0},w={type:"configurator",component:function(e){return(0,n.jsx)(i.d.Group,{defaultValue:["react"],...e,children:(0,n.jsxs)(a.Y,{mt:"xs",children:[(0,n.jsx)(i.d,{value:"react",label:"React"}),(0,n.jsx)(i.d,{value:"svelte",label:"Svelte"}),(0,n.jsx)(i.d,{value:"ng",label:"Angular"}),(0,n.jsx)(i.d,{value:"vue",label:"Vue"})]})})},code:`
import { Switch, Group } from '@mantine/core';

function Demo() {
  return (
    <Switch.Group
      defaultValue={['react']}
      {{props}}
    >
      <Group mt="xs">
        <Switch value="react" label="React" />
        <Switch value="svelte" label="Svelte" />
        <Switch value="ng" label="Angular" />
        <Switch value="vue" label="Vue" />
      </Group>
    </Switch.Group>
  );
}
`,centered:!0,controls:[{prop:"label",type:"string",initialValue:"Select your favorite framework/library",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]};var S={track:"m_976e9ab1",thumb:"m_976a5b3c"};let j={type:"code",component:function(){return(0,n.jsx)(i.d,{classNames:S,size:"lg"})},code:[{fileName:"Demo.module.css",code:`.track {
  transition:
    background-color 200ms ease,
    border-color 200ms ease;

  input:checked + & {
    background-color: var(--mantine-color-lime-5);
    border-color: var(--mantine-color-lime-5);

    & > .thumb {
      background-color: var(--mantine-color-black);
      border-color: var(--mantine-color-black);
    }
  }
}

.thumb {
  transition:
    inset-inline-start 200ms ease,
    background-color 200ms ease,
    border-color 200ms ease;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 8px;
    background-color: var(--mantine-color-lime-5);
    position: absolute;
    left: calc(50% - 4px);
    top: calc(50% - 4px);
  }
}`,language:"scss"},{fileName:"Demo.tsx",code:`
import { Switch } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return <Switch classNames={classes} size="lg" />;
}
`,language:"tsx"}],centered:!0,defaultExpanded:!1};var g=o(35098);let v=`
import { Switch } from '@mantine/core';

function Demo() {
  return <Switch{{props}} label="Switch component" description="Switch description" error="Switch error />;
}
`,y={type:"styles-api",data:g.F,component:function(e){return(0,n.jsx)(i.d,{...e,label:"Switch component",description:"Switch description",error:"Switch error"})},centered:!0,code:v};var k=o(85954),V=o(38215);let z=(0,k.P)(V.XZ.Switch);function L(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Demo:o,StylesApiSelectors:i,WrapperProps:a}=t;return o||F("Demo",!0),i||F("StylesApiSelectors",!0),a||F("WrapperProps",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(o,{data:c}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Switch } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Switch\n      checked={checked}\n      onChange={(event) => setChecked(event.currentTarget.checked)}\n    />\n  );\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"inner-labels",children:"Inner Labels"}),"\n",(0,n.jsx)(o,{data:l}),"\n",(0,n.jsx)(t.h2,{id:"icon-labels",children:"Icon labels"}),"\n",(0,n.jsx)(o,{data:h}),"\n",(0,n.jsx)(t.h2,{id:"thumb-icon",children:"Thumb icon"}),"\n",(0,n.jsx)(o,{data:b}),"\n",(0,n.jsx)(t.h2,{id:"with-tooltip",children:"With tooltip"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:'refProp="rootRef"'})," on ",(0,n.jsx)(t.a,{href:"/core/tooltip/",children:"Tooltip"})," and other similar components to make them work with ",(0,n.jsx)(t.code,{children:"Switch"}),":"]}),"\n",(0,n.jsx)(o,{data:x}),"\n",(0,n.jsx)(t.h2,{id:"pointer-cursor",children:"Pointer cursor"}),"\n",(0,n.jsxs)(t.p,{children:["By default, switch input and label have ",(0,n.jsx)(t.code,{children:"cursor: default"})," (same as native ",(0,n.jsx)(t.code,{children:'input[type="checkbox"]'}),").\nTo change cursor to pointer, set ",(0,n.jsx)(t.code,{children:"cursorType"})," on ",(0,n.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { createTheme, MantineProvider, Switch } from '@mantine/core';\n\nconst theme = createTheme({\n  cursorType: 'pointer',\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Switch label=\"Pointer cursor\" />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,n.jsx)(a,{component:"Switch"}),"\n",(0,n.jsx)(t.h2,{id:"switchgroup",children:"Switch.Group"}),"\n",(0,n.jsx)(o,{data:w}),"\n",(0,n.jsx)(t.h2,{id:"controlled-switchgroup",children:"Controlled Switch.Group"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Switch } from \'@mantine/core\';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n\n  return (\n    <Switch.Group value={value} onChange={setValue}>\n      <Switch value="react" label="React" />\n      <Switch value="svelte" label="Svelte" />\n    </Switch.Group>\n  );\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"change-styles-based-on-checked-state",children:"Change styles based on checked state"}),"\n",(0,n.jsx)(o,{data:j}),"\n",(0,n.jsx)(i,{component:"Switch"}),"\n",(0,n.jsx)(o,{data:y}),"\n",(0,n.jsx)(t.h2,{id:"get-input-ref",children:"Get input ref"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useRef } from 'react';\nimport { Switch } from '@mantine/core';\n\nfunction Demo() {\n  const ref = useRef<HTMLInputElement>(null);\n  return <Switch ref={ref} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Switch"})," is a regular ",(0,n.jsx)(t.code,{children:'input[type="checkbox"]'}),". Set ",(0,n.jsx)(t.code,{children:"aria-label"})," if the ",(0,n.jsx)(t.code,{children:"Switch"})," is used without ",(0,n.jsx)(t.code,{children:"label"})," prop:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { Switch } from \'@mantine/core\';\n\n// -> not ok, input is not labeled\nfunction Bad() {\n  return <Switch />;\n}\n\n// -> ok, input has aria-label\nfunction Good() {\n  return <Switch aria-label="I agree to everything" />;\n}\n\n// -> ok, input has associated label\nfunction AlsoGood() {\n  return <Switch label="I agree to everything" />;\n}\n'})})]})}function N(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(z,{...e,children:(0,n.jsx)(L,{...e})})}function F(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},42244:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});var n=(0,o(73366).A)("outline","moon-stars","IconMoonStars",[["path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",key:"svg-0"}],["path",{d:"M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2",key:"svg-1"}],["path",{d:"M19 11h2m-1 -1v2",key:"svg-2"}]])},3650:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});var n=(0,o(73366).A)("outline","x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(98141)),_N_E=e.O()}]);