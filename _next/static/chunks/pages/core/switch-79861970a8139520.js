(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62084],{98141:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/switch",function(){return n(99871)}])},99871:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>z});var o=n(31085),r=n(71184),a=n(94667),i=n(56051),l=n(26975);let c={type:"code",component:function(){return(0,o.jsxs)(i.Y,{justify:"center",children:[(0,o.jsx)(l.d,{size:"xs",onLabel:"ON",offLabel:"OFF"}),(0,o.jsx)(l.d,{size:"sm",onLabel:"ON",offLabel:"OFF"}),(0,o.jsx)(l.d,{size:"md",onLabel:"ON",offLabel:"OFF"}),(0,o.jsx)(l.d,{size:"lg",onLabel:"ON",offLabel:"OFF"}),(0,o.jsx)(l.d,{size:"xl",onLabel:"ON",offLabel:"OFF"})]})},code:`
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
`};var s=n(84032),d=n(42244);let h={type:"code",component:function(){return(0,o.jsx)(l.d,{size:"md",color:"dark.4",onLabel:(0,o.jsx)(s.A,{size:16,stroke:2.5,color:"var(--mantine-color-yellow-4)"}),offLabel:(0,o.jsx)(d.A,{size:16,stroke:2.5,color:"var(--mantine-color-blue-6)"})})},centered:!0,code:`
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
`};var u=n(14041),p=n(11466),m=n(3650);let v={type:"code",component:function(){let[e,t]=(0,u.useState)(!1);return(0,o.jsx)(l.d,{checked:e,onChange:e=>t(e.currentTarget.checked),color:"teal",size:"md",label:"Switch with thumb icon",thumbIcon:e?(0,o.jsx)(p.A,{size:12,color:"var(--mantine-color-teal-6)",stroke:3}):(0,o.jsx)(m.A,{size:12,color:"var(--mantine-color-red-6)",stroke:3})})},centered:!0,code:`
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
`};var b=n(2912);let f={type:"code",component:function(){return(0,o.jsx)(b.m,{label:"Switch tooltip",refProp:"rootRef",children:(0,o.jsx)(l.d,{label:"Switch with tooltip"})})},code:`
import { Switch, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Switch tooltip" refProp="rootRef">
      <Switch label="Switch with tooltip" />
    </Tooltip>
  );
}
`,centered:!0},g={type:"configurator",component:function(e){return(0,o.jsx)(l.d.Group,{defaultValue:["react"],...e,children:(0,o.jsxs)(i.Y,{mt:"xs",children:[(0,o.jsx)(l.d,{value:"react",label:"React"}),(0,o.jsx)(l.d,{value:"svelte",label:"Svelte"}),(0,o.jsx)(l.d,{value:"ng",label:"Angular"}),(0,o.jsx)(l.d,{value:"vue",label:"Vue"})]})})},code:`
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
`,centered:!0,controls:[{prop:"label",type:"string",initialValue:"Select your favorite framework/library",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]};var y={track:"m_976e9ab1",thumb:"m_976a5b3c"};let k={type:"code",component:function(){return(0,o.jsx)(l.d,{classNames:y,size:"lg"})},code:[{fileName:"Demo.module.css",code:`.track {
  transition:
    background-color 200ms ease,
    border-color 200ms ease;

  input:checked + & {
    background-color: var(--mantine-color-lime-5);
    border-color: var(--mantine-color-lime-5);

    & > .thumb {
      background-color: var(--mantine-color-black);

      &::before {
        background-color: var(--mantine-color-lime-5);
      }
    }
  }
}`,language:"scss"},{fileName:"Demo.tsx",code:`
import { Switch } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return <Switch classNames={classes} size="lg" />;
}
`,language:"tsx"}],centered:!0,defaultExpanded:!1};var x=n(35098);let w=`
import { Switch } from '@mantine/core';

function Demo() {
  return <Switch{{props}} label="Switch component" description="Switch description" error="Switch error />;
}
`,S={type:"styles-api",data:x.F,component:function(e){return(0,o.jsx)(l.d,{...e,label:"Switch component",description:"Switch description",error:"Switch error"})},centered:!0,code:w};var j=n(18675),M=n(20017);let A=(0,j.P)(M.XZ.Switch);function V(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Demo:n,StylesApiSelectors:i,WrapperProps:l}=t;return n||L("Demo",!0),i||L("StylesApiSelectors",!0),l||L("WrapperProps",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n,{data:a.c}),"\n",(0,o.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Switch } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Switch\n      checked={checked}\n      onChange={(event) => setChecked(event.currentTarget.checked)}\n    />\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"inner-labels",children:"Inner Labels"}),"\n",(0,o.jsx)(n,{data:c}),"\n",(0,o.jsx)(t.h2,{id:"icon-labels",children:"Icon labels"}),"\n",(0,o.jsx)(n,{data:h}),"\n",(0,o.jsx)(t.h2,{id:"thumb-icon",children:"Thumb icon"}),"\n",(0,o.jsx)(n,{data:v}),"\n",(0,o.jsx)(t.h2,{id:"with-tooltip",children:"With tooltip"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:'refProp="rootRef"'})," on ",(0,o.jsx)(t.a,{href:"/core/tooltip/",children:"Tooltip"})," and other similar components to make them work with ",(0,o.jsx)(t.code,{children:"Switch"}),":"]}),"\n",(0,o.jsx)(n,{data:f}),"\n",(0,o.jsx)(t.h2,{id:"pointer-cursor",children:"Pointer cursor"}),"\n",(0,o.jsxs)(t.p,{children:["By default, switch input and label have ",(0,o.jsx)(t.code,{children:"cursor: default"})," (same as native ",(0,o.jsx)(t.code,{children:'input[type="checkbox"]'}),").\nTo change cursor to pointer, set ",(0,o.jsx)(t.code,{children:"cursorType"})," on ",(0,o.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { createTheme, MantineProvider, Switch } from '@mantine/core';\n\nconst theme = createTheme({\n  cursorType: 'pointer',\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Switch label=\"Pointer cursor\" />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(l,{component:"Switch"}),"\n",(0,o.jsx)(t.h2,{id:"switchgroup",children:"Switch.Group"}),"\n",(0,o.jsx)(n,{data:g}),"\n",(0,o.jsx)(t.h2,{id:"controlled-switchgroup",children:"Controlled Switch.Group"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Switch } from \'@mantine/core\';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n\n  return (\n    <Switch.Group value={value} onChange={setValue}>\n      <Switch value="react" label="React" />\n      <Switch value="svelte" label="Svelte" />\n    </Switch.Group>\n  );\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"change-styles-based-on-checked-state",children:"Change styles based on checked state"}),"\n",(0,o.jsx)(n,{data:k}),"\n",(0,o.jsx)(i,{component:"Switch"}),"\n",(0,o.jsx)(n,{data:S}),"\n",(0,o.jsx)(t.h2,{id:"get-input-ref",children:"Get input ref"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useRef } from 'react';\nimport { Switch } from '@mantine/core';\n\nfunction Demo() {\n  const ref = useRef<HTMLInputElement>(null);\n  return <Switch ref={ref} />;\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Switch"})," is a regular ",(0,o.jsx)(t.code,{children:'input[type="checkbox"]'}),". Set ",(0,o.jsx)(t.code,{children:"aria-label"})," if the ",(0,o.jsx)(t.code,{children:"Switch"})," is used without ",(0,o.jsx)(t.code,{children:"label"})," prop:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'import { Switch } from \'@mantine/core\';\n\n// -> not ok, input is not labeled\nfunction Bad() {\n  return <Switch />;\n}\n\n// -> ok, input has aria-label\nfunction Good() {\n  return <Switch aria-label="I agree to everything" />;\n}\n\n// -> ok, input has associated label\nfunction AlsoGood() {\n  return <Switch label="I agree to everything" />;\n}\n'})})]})}function z(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(A,{...e,children:(0,o.jsx)(V,{...e})})}function L(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},87186:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},42244:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","moon-stars","IconMoonStars",[["path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",key:"svg-0"}],["path",{d:"M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2",key:"svg-1"}],["path",{d:"M19 11h2m-1 -1v2",key:"svg-2"}]])},9613:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},3650:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});var o=(0,n(73366).A)("outline","x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])},94667:(e,t,n)=>{"use strict";n.d(t,{c:()=>a});var o=n(31085),r=n(26975);let a={type:"configurator",component:e=>(0,o.jsx)(r.d,{defaultChecked:!0,...e}),code:`
import { Switch } from '@mantine/core';


function Demo() {
  return (
    <Switch
      defaultChecked
      {{props}}
    />
  );
}
`,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"withThumbIndicator",type:"boolean",initialValue:!0,libraryValue:!0},{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I agree to sell my privacy",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1}]}}},e=>{var t=t=>e(e.s=t);e.O(0,[18675,90636,46593,38792],()=>t(98141)),_N_E=e.O()}]);