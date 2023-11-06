(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2909],{33507:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},73456:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/switch",function(){return r(95825)}])},95825:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return et}});var n=r(85893),o=r(11151),c=r(19905),i=r(9904),l=r(67294),a=r(87809),s=Object.defineProperty,h=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&d(e,r,t[r]);if(h)for(var r of h(t))p.call(t,r)&&d(e,r,t[r]);return e};let f=`
import { Switch } from '@mantine/core';


function Demo() {
  return (
    <Switch
      defaultChecked
      {{props}}
    />
  );
}
`,b={type:"configurator",component:e=>l.createElement(a.r,m({defaultChecked:!0},e)),code:f,centered:!0,controls:[{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I agree to sell my privacy",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"radius",type:"size",initialValue:"xl",libraryValue:"xl"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1}]};var y=r(16262);let g=`
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
`,v={type:"code",component:function(){return l.createElement(y.Z,{justify:"center"},l.createElement(a.r,{size:"xs",onLabel:"ON",offLabel:"OFF"}),l.createElement(a.r,{size:"sm",onLabel:"ON",offLabel:"OFF"}),l.createElement(a.r,{size:"md",onLabel:"ON",offLabel:"OFF"}),l.createElement(a.r,{size:"lg",onLabel:"ON",offLabel:"OFF"}),l.createElement(a.r,{size:"xl",onLabel:"ON",offLabel:"OFF"}))},code:g};var w=r(43440),S=r(72622),k=r(61736),j=(0,r(54764).Z)("moon-stars","IconMoonStars",[["path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z",key:"svg-0"}],["path",{d:"M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2",key:"svg-1"}],["path",{d:"M19 11h2m-1 -1v2",key:"svg-2"}]]);let x=`
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
`,O={type:"code",component:function(){let e=(0,w.rZ)(),t=l.createElement(k.Z,{style:{width:(0,S.h)(16),height:(0,S.h)(16)},stroke:2.5,color:e.colors.yellow[4]}),r=l.createElement(j,{style:{width:(0,S.h)(16),height:(0,S.h)(16)},stroke:2.5,color:e.colors.blue[6]});return l.createElement(a.r,{size:"md",color:"dark.4",onLabel:t,offLabel:r})},centered:!0,code:x};var M=r(16659),E=r(86171);let I=`
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
`,L={type:"code",component:function(){let e=(0,w.rZ)(),[t,r]=(0,l.useState)(!1);return l.createElement(a.r,{checked:t,onChange:e=>r(e.currentTarget.checked),color:"teal",size:"md",label:"Switch with thumb icon",thumbIcon:t?l.createElement(M.Z,{style:{width:(0,S.h)(12),height:(0,S.h)(12)},color:e.colors.teal[6],stroke:3}):l.createElement(E.Z,{style:{width:(0,S.h)(12),height:(0,S.h)(12)},color:e.colors.red[6],stroke:3})})},centered:!0,code:I};var V=r(46842);let Z=`
import { Switch, Tooltip } from '@mantine/core';

function Demo() {
  return (
    <Tooltip label="Switch tooltip" refProp="rootRef">
      <Switch label="Switch with tooltip" />
    </Tooltip>
  );
}
`,P={type:"code",component:function(){return l.createElement(V.u,{label:"Switch tooltip",refProp:"rootRef"},l.createElement(a.r,{label:"Switch with tooltip"}))},code:Z,centered:!0};var T=Object.defineProperty,F=Object.getOwnPropertySymbols,N=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable,C=(e,t,r)=>t in e?T(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,G=(e,t)=>{for(var r in t||(t={}))N.call(t,r)&&C(e,r,t[r]);if(F)for(var r of F(t))z.call(t,r)&&C(e,r,t[r]);return e};let D=`
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
`,_={type:"configurator",component:function(e){return l.createElement(a.r.Group,G({defaultValue:["react"]},e),l.createElement(y.Z,{mt:"xs"},l.createElement(a.r,{value:"react",label:"React"}),l.createElement(a.r,{value:"svelte",label:"Svelte"}),l.createElement(a.r,{value:"ng",label:"Angular"}),l.createElement(a.r,{value:"vue",label:"Vue"})))},code:D,centered:!0,controls:[{prop:"label",type:"string",initialValue:"Select your favorite framework/library",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]};var R=r(43297),A=Object.defineProperty,X=Object.defineProperties,B=Object.getOwnPropertyDescriptors,W=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,q=(e,t,r)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,J=(e,t)=>{for(var r in t||(t={}))H.call(t,r)&&q(e,r,t[r]);if(W)for(var r of W(t))U.call(t,r)&&q(e,r,t[r]);return e},K=(e,t)=>X(e,B(t));let Q=`
import { Switch } from '@mantine/core';

function Demo() {
  return <Switch{{props}} label="Switch component" description="Switch description" error="Switch error />;
}
`,Y={type:"styles-api",data:R.T,component:function(e){return l.createElement(a.r,K(J({},e),{label:"Switch component",description:"Switch description",error:"Switch error"}))},centered:!0,code:Q},$=(0,c.A)(i.us.Switch);function ee(e){let t=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p",a:"a"},(0,o.ah)(),e.components),{Demo:r,WrapperProps:c,StylesApiSelectors:i}=t;return r||er("Demo",!0),i||er("StylesApiSelectors",!0),c||er("WrapperProps",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(r,{data:b}),"\n",(0,n.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Switch } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return <Switch checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"inner-labels",children:"Inner Labels"}),"\n",(0,n.jsx)(r,{data:v}),"\n",(0,n.jsx)(t.h2,{id:"icon-labels",children:"Icon labels"}),"\n",(0,n.jsx)(r,{data:O}),"\n",(0,n.jsx)(t.h2,{id:"thumb-icon",children:"Thumb icon"}),"\n",(0,n.jsx)(r,{data:L}),"\n",(0,n.jsx)(t.h2,{id:"with-tooltip",children:"With tooltip"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:'refProp="rootRef"'})," on ",(0,n.jsx)(t.a,{href:"/core/tooltip/",children:"Tooltip"})," and other similar components to make them work with ",(0,n.jsx)(t.code,{children:"Switch"}),":"]}),"\n",(0,n.jsx)(r,{data:P}),"\n",(0,n.jsx)(t.h2,{id:"pointer-cursor",children:"Pointer cursor"}),"\n",(0,n.jsxs)(t.p,{children:["By default, switch input and label have ",(0,n.jsx)(t.code,{children:"cursor: default"})," (same as native ",(0,n.jsx)(t.code,{children:'input[type="checkbox"]'}),").\nTo change cursor to pointer, set ",(0,n.jsx)(t.code,{children:"cursorType"})," on ",(0,n.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { MantineProvider, createTheme, Switch } from '@mantine/core';\n\nconst theme = createTheme({\n  cursorType: 'pointer',\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Switch label=\"Pointer cursor\" />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,n.jsx)(c,{component:"Switch"}),"\n",(0,n.jsx)(t.h2,{id:"switchgroup",children:"Switch.Group"}),"\n",(0,n.jsx)(r,{data:_}),"\n",(0,n.jsx)(t.h2,{id:"controlled-switchgroup",children:"Controlled Switch.Group"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Switch } from \'@mantine/core\';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n\n  return (\n    <Switch.Group value={value} onChange={setValue}>\n      <Switch value="react" label="React" />\n      <Switch value="svelte" label="Svelte" />\n    </Switch.Group>\n  );\n}\n'})}),"\n",(0,n.jsx)(i,{component:"Switch"}),"\n",(0,n.jsx)(r,{data:Y}),"\n",(0,n.jsx)(t.h2,{id:"get-input-ref",children:"Get input ref"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useRef } from 'react';\nimport { Switch } from '@mantine/core';\n\nfunction Demo() {\n  const ref = useRef<HTMLInputElement>(null);\n  return <Switch ref={ref} />;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Switch"})," is a regular ",(0,n.jsx)(t.code,{children:'input[type="checkbox"]'}),". Set ",(0,n.jsx)(t.code,{children:"aria-label"})," if the ",(0,n.jsx)(t.code,{children:"Switch"})," is used without ",(0,n.jsx)(t.code,{children:"label"})," prop:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { Switch } from \'@mantine/core\';\n\n// -> not ok, input is not labeled\nfunction Bad() {\n  return <Switch />;\n}\n\n// -> ok, input has aria-label\nfunction Good() {\n  return <Switch aria-label="I agree to everything" />;\n}\n\n// -> ok, input has associated label\nfunction AlsoGood() {\n  return <Switch label="I agree to everything" />;\n}\n'})})]})}var et=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)($,Object.assign({},e,{children:(0,n.jsx)(ee,e)}))};function er(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},16659:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(54764).Z)("check","IconCheck",[["path",{d:"M5 12l5 5l10 -10",key:"svg-0"}]])},86171:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var n=(0,r(54764).Z)("x","IconX",[["path",{d:"M18 6l-12 12",key:"svg-0"}],["path",{d:"M6 6l12 12",key:"svg-1"}]])}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=73456)}),_N_E=e.O()}]);