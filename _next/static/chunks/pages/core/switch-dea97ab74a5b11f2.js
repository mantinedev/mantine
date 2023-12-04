(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2909],{16659:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]])},60617:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("moon-stars","IconMoonStars",[["path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",key:"svg-0"}],["path",{d:"M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2",key:"svg-1"}],["path",{d:"M19 11h2m-1 -1v2",key:"svg-2"}]])},86171:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])},44448:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/switch",function(){return n(63204)}])},63204:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var r=n(24246),o=n(71670),i=n(3916),c=n(30289),l=n(27378),a=n(17829);let s=`
import { Switch } from '@mantine/core';


function Demo() {
  return (
    <Switch
      defaultChecked
      {{props}}
    />
  );
}
`,h={type:"configurator",component:e=>l.createElement(a.r,{defaultChecked:!0,...e}),code:s,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I agree to sell my privacy",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1}]};var u=n(22971);let d=`
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
`,p={type:"code",component:function(){return l.createElement(u.Z,{justify:"center"},l.createElement(a.r,{size:"xs",onLabel:"ON",offLabel:"OFF"}),l.createElement(a.r,{size:"sm",onLabel:"ON",offLabel:"OFF"}),l.createElement(a.r,{size:"md",onLabel:"ON",offLabel:"OFF"}),l.createElement(a.r,{size:"lg",onLabel:"ON",offLabel:"OFF"}),l.createElement(a.r,{size:"xl",onLabel:"ON",offLabel:"OFF"}))},code:d};var m=n(2256),f=n(71078),b=n(61736),w=n(60617);let S=`
import { Switch, useMantineTheme, rem } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

function Demo() {
  const theme = useMantineTheme();

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  return <Switch size="md" color="dark.4" onLabel={sunIcon} offLabel={moonIcon} />;
}
`,g={type:"code",component:function(){let e=(0,m.rZ)(),t=l.createElement(b.Z,{style:{width:(0,f.h)(16),height:(0,f.h)(16)},stroke:2.5,color:e.colors.yellow[4]}),n=l.createElement(w.Z,{style:{width:(0,f.h)(16),height:(0,f.h)(16)},stroke:2.5,color:e.colors.blue[6]});return l.createElement(a.r,{size:"md",color:"dark.4",onLabel:t,offLabel:n})},centered:!0,code:S};var y=n(16659),x=n(86171);let v=`
import { useState } from 'react';
import { Switch, useMantineTheme, rem } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons-react';

function Demo() {
  const theme = useMantineTheme();
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
          <IconCheck
            style={{ width: rem(12), height: rem(12) }}
            color={theme.colors.teal[6]}
            stroke={3}
          />
        ) : (
          <IconX
            style={{ width: rem(12), height: rem(12) }}
            color={theme.colors.red[6]}
            stroke={3}
          />
        )
      }
    />
  );
}
`,j={type:"code",component:function(){let e=(0,m.rZ)(),[t,n]=(0,l.useState)(!1);return l.createElement(a.r,{checked:t,onChange:e=>n(e.currentTarget.checked),color:"teal",size:"md",label:"Switch with thumb icon",thumbIcon:t?l.createElement(y.Z,{style:{width:(0,f.h)(12),height:(0,f.h)(12)},color:e.colors.teal[6],stroke:3}):l.createElement(x.Z,{style:{width:(0,f.h)(12),height:(0,f.h)(12)},color:e.colors.red[6],stroke:3})})},centered:!0,code:v};var k=n(99684);let E=`
import { Switch, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Switch tooltip" refProp="rootRef">
      <Switch label="Switch with tooltip" />
    </Tooltip>
  );
}
`,V={type:"code",component:function(){return l.createElement(k.u,{label:"Switch tooltip",refProp:"rootRef"},l.createElement(a.r,{label:"Switch with tooltip"}))},code:E,centered:!0},L=`
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
`,I={type:"configurator",component:function(e){return l.createElement(a.r.Group,{defaultValue:["react"],...e},l.createElement(u.Z,{mt:"xs"},l.createElement(a.r,{value:"react",label:"React"}),l.createElement(a.r,{value:"svelte",label:"Svelte"}),l.createElement(a.r,{value:"ng",label:"Angular"}),l.createElement(a.r,{value:"vue",label:"Vue"})))},code:L,centered:!0,controls:[{prop:"label",type:"string",initialValue:"Select your favorite framework/library",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]};var O=n(12379);let T=`
import { Switch } from '@mantine/core';

function Demo() {
  return <Switch{{props}} label="Switch component" description="Switch description" error="Switch error />;
}
`,F={type:"styles-api",data:O.T,component:function(e){return l.createElement(a.r,{...e,label:"Switch component",description:"Switch description",error:"Switch error"})},centered:!0,code:T},N=(0,i.A)(c.us.Switch);function z(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:n,StylesApiSelectors:i,WrapperProps:c}=t;return n||M("Demo",!0),i||M("StylesApiSelectors",!0),c||M("WrapperProps",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{data:h}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Switch } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Switch\n      checked={checked}\n      onChange={(event) => setChecked(event.currentTarget.checked)}\n    />\n  );\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"inner-labels",children:"Inner Labels"}),"\n",(0,r.jsx)(n,{data:p}),"\n",(0,r.jsx)(t.h2,{id:"icon-labels",children:"Icon labels"}),"\n",(0,r.jsx)(n,{data:g}),"\n",(0,r.jsx)(t.h2,{id:"thumb-icon",children:"Thumb icon"}),"\n",(0,r.jsx)(n,{data:j}),"\n",(0,r.jsx)(t.h2,{id:"with-tooltip",children:"With tooltip"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:'refProp="rootRef"'})," on ",(0,r.jsx)(t.a,{href:"/core/tooltip/",children:"Tooltip"})," and other similar components to make them work with ",(0,r.jsx)(t.code,{children:"Switch"}),":"]}),"\n",(0,r.jsx)(n,{data:V}),"\n",(0,r.jsx)(t.h2,{id:"pointer-cursor",children:"Pointer cursor"}),"\n",(0,r.jsxs)(t.p,{children:["By default, switch input and label have ",(0,r.jsx)(t.code,{children:"cursor: default"})," (same as native ",(0,r.jsx)(t.code,{children:'input[type="checkbox"]'}),").\nTo change cursor to pointer, set ",(0,r.jsx)(t.code,{children:"cursorType"})," on ",(0,r.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { MantineProvider, createTheme, Switch } from '@mantine/core';\n\nconst theme = createTheme({\n  cursorType: 'pointer',\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Switch label=\"Pointer cursor\" />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,r.jsx)(c,{component:"Switch"}),"\n",(0,r.jsx)(t.h2,{id:"switchgroup",children:"Switch.Group"}),"\n",(0,r.jsx)(n,{data:I}),"\n",(0,r.jsx)(t.h2,{id:"controlled-switchgroup",children:"Controlled Switch.Group"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Switch } from \'@mantine/core\';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n\n  return (\n    <Switch.Group value={value} onChange={setValue}>\n      <Switch value="react" label="React" />\n      <Switch value="svelte" label="Svelte" />\n    </Switch.Group>\n  );\n}\n'})}),"\n",(0,r.jsx)(i,{component:"Switch"}),"\n",(0,r.jsx)(n,{data:F}),"\n",(0,r.jsx)(t.h2,{id:"get-input-ref",children:"Get input ref"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useRef } from 'react';\nimport { Switch } from '@mantine/core';\n\nfunction Demo() {\n  const ref = useRef<HTMLInputElement>(null);\n  return <Switch ref={ref} />;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Switch"})," is a regular ",(0,r.jsx)(t.code,{children:'input[type="checkbox"]'}),". Set ",(0,r.jsx)(t.code,{children:"aria-label"})," if the ",(0,r.jsx)(t.code,{children:"Switch"})," is used without ",(0,r.jsx)(t.code,{children:"label"})," prop:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Switch } from \'@mantine/core\';\n\n// -> not ok, input is not labeled\nfunction Bad() {\n  return <Switch />;\n}\n\n// -> ok, input has aria-label\nfunction Good() {\n  return <Switch aria-label="I agree to everything" />;\n}\n\n// -> ok, input has associated label\nfunction AlsoGood() {\n  return <Switch label="I agree to everything" />;\n}\n'})})]})}function C(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(N,{...e,children:(0,r.jsx)(z,{...e})})}function M(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=44448)}),_N_E=e.O()}]);