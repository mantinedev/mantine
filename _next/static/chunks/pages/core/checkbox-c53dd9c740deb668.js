(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1639],{33507:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},12162:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},8427:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},38767:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},94342:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("list","IconList",[["path",{d:"M9 6l11 0",key:"svg-0"}],["path",{d:"M9 12l11 0",key:"svg-1"}],["path",{d:"M9 18l11 0",key:"svg-2"}],["path",{d:"M5 6l0 .01",key:"svg-3"}],["path",{d:"M5 12l0 .01",key:"svg-4"}],["path",{d:"M5 18l0 .01",key:"svg-5"}]])},30471:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},62640:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var o=(0,n(30853).Z)("switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},34840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/checkbox",function(){return n(58914)}])},58914:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return eM}});var o=n(85893),r=n(11151),a=n(19905),c=n(9904),l=n(67294),i=n(19286),s=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(h)for(var n of h(t))b.call(t,n)&&p(e,n,t[n]);return e},x=(e,t)=>d(e,m(t));let f=`
import { Checkbox } from '@mantine/core';


function Demo() {
  return (
    <Checkbox
      defaultChecked
      {{props}}
    />
  );
}
`,v={type:"configurator",component:e=>l.createElement(i.X,x(k({},e),{defaultChecked:!0})),code:f,centered:!0,controls:[{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I agree to sell my privacy",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"indeterminate",type:"boolean",initialValue:!1,libraryValue:!1}]};var y=n(75253);let g=`
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <>
      <Checkbox />
      <Checkbox indeterminate />
      <Checkbox checked indeterminate />
      <Checkbox checked />
      <Checkbox disabled />
      <Checkbox disabled checked />
      <Checkbox disabled indeterminate />
    </>
  );
}
`,C={type:"code",component:function(){return l.createElement(y.K,null,l.createElement(i.X,{checked:!1,onChange:()=>{},label:"Default checkbox"}),l.createElement(i.X,{checked:!1,onChange:()=>{},indeterminate:!0,label:"Indeterminate checkbox"}),l.createElement(i.X,{checked:!0,onChange:()=>{},indeterminate:!0,label:"Indeterminate checked checkbox"}),l.createElement(i.X,{checked:!0,onChange:()=>{},label:"Checked checkbox"}),l.createElement(i.X,{disabled:!0,label:"Disabled checkbox"}),l.createElement(i.X,{disabled:!0,checked:!0,onChange:()=>{},label:"Disabled checked checkbox"}),l.createElement(i.X,{disabled:!0,indeterminate:!0,label:"Disabled indeterminate checkbox"}))},code:g};var T=n(54764),j=(0,T.Z)("radioactive","IconRadioactive",[["path",{d:"M13.5 14.6l3 5.19a9 9 0 0 0 4.5 -7.79h-6a3 3 0 0 1 -1.5 2.6",key:"svg-0"}],["path",{d:"M13.5 9.4l3 -5.19a9 9 0 0 0 -9 0l3 5.19a3 3 0 0 1 3 0",key:"svg-1"}],["path",{d:"M10.5 14.6l-3 5.19a9 9 0 0 1 -4.5 -7.79h6a3 3 0 0 0 1.5 2.6",key:"svg-2"}]]),E=(0,T.Z)("biohazard","IconBiohazard",[["path",{d:"M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M11.939 14c0 .173 .048 .351 .056 .533l0 .217a4.75 4.75 0 0 1 -4.533 4.745l-.217 0m-4.75 -4.75a4.75 4.75 0 0 1 7.737 -3.693m6.513 8.443a4.75 4.75 0 0 1 -4.69 -5.503l-.06 0m1.764 -2.944a4.75 4.75 0 0 1 7.731 3.477l0 .217m-11.195 -3.813a4.75 4.75 0 0 1 -1.828 -7.624l.164 -.172m6.718 0a4.75 4.75 0 0 1 -1.665 7.798",key:"svg-1"}]]),w=Object.defineProperty,O=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,I=(e,t,n)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,S=(e,t)=>{for(var n in t||(t={}))P.call(t,n)&&I(e,n,t[n]);if(O)for(var n of O(t))M.call(t,n)&&I(e,n,t[n]);return e},N=(e,t)=>{var n={};for(var o in e)P.call(e,o)&&0>t.indexOf(o)&&(n[o]=e[o]);if(null!=e&&O)for(var o of O(e))0>t.indexOf(o)&&M.call(e,o)&&(n[o]=e[o]);return n};let D=`
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
`,V=e=>{var{indeterminate:t}=e,n=N(e,["indeterminate"]);return t?l.createElement(j,S({},n)):l.createElement(E,S({},n))},z={type:"code",component:function(){return l.createElement(l.Fragment,null,l.createElement(i.X,{icon:V,label:"Custom icon",defaultChecked:!0}),l.createElement(i.X,{icon:V,label:"Custom icon: indeterminate",indeterminate:!0,mt:"sm"}))},code:D},X=`
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
`,R={type:"code",component:function(){return l.createElement(i.X,{defaultChecked:!0,color:"lime.4",iconColor:"dark.8",size:"md",label:"Bright lime checkbox"})},code:X,centered:!0};var Z=n(2300),A=n(67585);let B=`
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
`,_={type:"code",component:function(){return l.createElement(i.X,{label:l.createElement(l.Fragment,null,"I accept"," ",l.createElement(A.e,{href:"https://mantine.dev",target:"_blank",inherit:!0},"terms and conditions"))})},code:B};var G=n(46842);let L=`
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
`,W={type:"code",component:function(){return l.createElement(l.Fragment,null,l.createElement(G.u,{label:"Checkbox with tooltip"},l.createElement(i.X,{label:"Tooltip on checkbox only"})),l.createElement(G.u,{label:"Checkbox with tooltip",refProp:"rootRef"},l.createElement(i.X,{label:"Tooltip the entire element",mt:"md"})))},code:L,centered:!0};var Y=n(27196),F=n(28120),U=n(43440);let K=`.root {
  --checkbox-size-xxl: rem(42px);
  --checkbox-size-xxs: rem(14px);

  &[data-size='xxl'] {
    .label {
      font-size: rem(22px);
      line-height: rem(40px);
    }
  }

  &[data-size='xxs'] {
    .label {
      font-size: rem(10px);
      line-height: rem(14px);
    }
  }
}
`,q=`
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
`,H=(0,F.j)({components:{Checkbox:i.X.extend({classNames:{root:"m-4308addd",label:"m-1db1f159"}})}}),J={type:"code",centered:!0,component:function(){return l.createElement(U.M2,{theme:H},l.createElement(i.X,{size:"xxs",label:"Extra small checkbox"}),l.createElement(i.X,{size:"xxl",label:"Extra large checkbox",mt:"md"}))},code:[{fileName:"Demo.tsx",code:q,language:"tsx"},{fileName:"Demo.module.css",code:K,language:"css"}]};var Q=n(16262),$=Object.defineProperty,ee=Object.getOwnPropertySymbols,et=Object.prototype.hasOwnProperty,en=Object.prototype.propertyIsEnumerable,eo=(e,t,n)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,er=(e,t)=>{for(var n in t||(t={}))et.call(t,n)&&eo(e,n,t[n]);if(ee)for(var n of ee(t))en.call(t,n)&&eo(e,n,t[n]);return e};let ea=`
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
`,ec={type:"configurator",component:function(e){return l.createElement(i.X.Group,er({defaultValue:["react"]},e),l.createElement(Q.Z,{mt:"xs"},l.createElement(i.X,{value:"react",label:"React"}),l.createElement(i.X,{value:"svelte",label:"Svelte"}),l.createElement(i.X,{value:"ng",label:"Angular"}),l.createElement(i.X,{value:"vue",label:"Vue"})))},code:ea,centered:!0,maxWidth:"100%",controls:[{prop:"label",type:"string",initialValue:"Select your favorite frameworks/libraries",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]};var el=n(36275),ei=Object.defineProperty,es=Object.getOwnPropertySymbols,ed=Object.prototype.hasOwnProperty,em=Object.prototype.propertyIsEnumerable,eh=(e,t,n)=>t in e?ei(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,eu=(e,t)=>{for(var n in t||(t={}))ed.call(t,n)&&eh(e,n,t[n]);if(es)for(var n of es(t))em.call(t,n)&&eh(e,n,t[n]);return e};let eb=`
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
`,ep={type:"styles-api",data:el.B,component:function(e){return l.createElement(i.X,eu({label:"Checkbox",description:"Checkbox description",error:"Checkbox error",defaultChecked:!0},e))},code:eb,centered:!0};var ek=n(58091),ex=n(86610),ef=n(72039),ev={root:"m-2cb8989f",control:"m-241ed880",checkboxWrapper:"m-aa376f73",checkbox:"m-dd220d00",label:"m-69ff5ed7",description:"m-cf98ad9f"};let ey=`.root {
  position: relative;
}

.control {
  background-color: light-dark(var(--mantine-color-white), var(--mantine-color-dark-6));
  border: rem(1px) solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
  padding: var(--mantine-spacing-md);
  padding-left: rem(60px);
  border-radius: var(--mantine-radius-md);
  transition: border-color 100ms ease;

  &[data-checked] {
    border-color: var(--mantine-color-blue-filled);
  }
}

.checkboxWrapper {
  position: absolute;
  top: var(--mantine-spacing-md);
  left: var(--mantine-spacing-md);
  pointer-events: none;
}

.checkbox {
  &:not(:checked) {
    background-color: var(--mantine-color-body);
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
  margin-top: rem(8px);
  color: var(--mantine-color-dimmed);
  font-size: var(--mantine-font-size-xs);
}
`,eg=`
import { Checkbox, UnstyledButton, Text } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <div className={classes.root}>
      <Checkbox
        classNames={{ root: classes.checkboxWrapper, input: classes.checkbox }}
        checked={checked}
        onChange={(event) => setChecked(event.currentTarget.checked)}
        tabIndex={-1}
        size="md"
        aria-label="Checkbox example"
      />

      <UnstyledButton
        className={classes.control}
        data-checked={checked || undefined}
        onClick={() => setChecked((c) => !c)}
      >
        <Text className={classes.label}>@mantine/core</Text>
        <Text className={classes.description}>
          Core components library: inputs, buttons, overlays, etc.
        </Text>
      </UnstyledButton>
    </div>
  );
}
`,eC={type:"code",centered:!0,maxWidth:320,component:function(){let[e,t]=(0,l.useState)(!1);return l.createElement("div",{className:ev.root},l.createElement(i.X,{classNames:{root:ev.checkboxWrapper,input:ev.checkbox},checked:e,onChange:e=>t(e.currentTarget.checked),tabIndex:-1,size:"md","aria-label":"Checkbox example"}),l.createElement(ex.k,{className:ev.control,"data-checked":e||void 0,onClick:()=>t(e=>!e)},l.createElement(ef.x,{className:ev.label},"@mantine/core"),l.createElement(ef.x,{className:ev.description},"Core components library: inputs, buttons, overlays, etc.")))},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:eg},{fileName:"Demo.module.css",language:"css",code:ey}]};var eT={root:"m-43bfb50c"};let ej=`
.root {
  border: rem(1px) solid light-dark(var(--mantine-color-gray-3), var(--mantine-color-dark-4));
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
`,eE=`
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
`,ew={type:"code",component:function(){let[e,t]=(0,l.useState)(!1);return l.createElement(i.X,{classNames:eT,label:"Checkbox button",checked:e,onChange:e=>t(e.currentTarget.checked),wrapperProps:{onClick:()=>t(e=>!e)}})},centered:!0,defaultExpanded:!1,code:[{fileName:"Demo.tsx",code:eE,language:"tsx"},{fileName:"Demo.module.css",code:ej,language:"css"}]},eO=(0,a.A)(c.us.Checkbox);function eP(e){let t=Object.assign({h2:"h2",p:"p",code:"code",pre:"pre",ul:"ul",li:"li",a:"a"},(0,r.ah)(),e.components),{Demo:n,WrapperProps:a,GetElementRef:c,StylesApiSelectors:l}=t;return n||eI("Demo",!0),c||eI("GetElementRef",!0),l||eI("StylesApiSelectors",!0),a||eI("WrapperProps",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(n,{data:v}),"\n",(0,o.jsx)(t.h2,{id:"states",children:"States"}),"\n",(0,o.jsx)(n,{data:C}),"\n",(0,o.jsx)(t.h2,{id:"change-icons",children:"Change icons"}),"\n",(0,o.jsx)(n,{data:z}),"\n",(0,o.jsx)(t.h2,{id:"change-icon-color",children:"Change icon color"}),"\n",(0,o.jsxs)(t.p,{children:["Use ",(0,o.jsx)(t.code,{children:"iconColor"})," prop to change icon color. You can reference colors from ",(0,o.jsx)(t.code,{children:"theme.colors"})," or use any valid CSS color:"]}),"\n",(0,o.jsx)(n,{data:R}),"\n",(0,o.jsx)(t.h2,{id:"indeterminate-state",children:"Indeterminate state"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"Checkbox"})," supports indeterminate state. When ",(0,o.jsx)(t.code,{children:"indeterminate"})," prop is set,\n",(0,o.jsx)(t.code,{children:"checked"})," prop is ignored (checkbox always has checked styles):"]}),"\n",(0,o.jsx)(n,{data:Z.N,demoProps:{toggle:!0}}),"\n",(0,o.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Checkbox } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Checkbox checked={checked} onChange={(event) => setChecked(event.currentTarget.checked)} />\n  );\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"label-with-link",children:"Label with link"}),"\n",(0,o.jsx)(n,{data:_}),"\n",(0,o.jsx)(t.h2,{id:"checkbox-with-tooltip",children:"Checkbox with tooltip"}),"\n",(0,o.jsxs)(t.p,{children:["You can change target element to which tooltip is attached with ",(0,o.jsx)(t.code,{children:"refProp"}),":"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["If ",(0,o.jsx)(t.code,{children:"refProp"})," is not set, the tooltip is attached to the checkbox input"]}),"\n",(0,o.jsxs)(t.li,{children:["If ",(0,o.jsx)(t.code,{children:'refProp="rootRef"'})," is set, the tooltip is attached to the root element (contains label, input and other elements)"]}),"\n"]}),"\n",(0,o.jsx)(n,{data:W}),"\n",(0,o.jsx)(t.h2,{id:"pointer-cursor",children:"Pointer cursor"}),"\n",(0,o.jsxs)(t.p,{children:["By default, checkbox input and label have ",(0,o.jsx)(t.code,{children:"cursor: default"})," (same as native ",(0,o.jsx)(t.code,{children:'input[type="checkbox"]'}),").\nTo change cursor to pointer, set ",(0,o.jsx)(t.code,{children:"cursorType"})," on ",(0,o.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"}),":"]}),"\n",(0,o.jsx)(n,{data:Y.g}),"\n",(0,o.jsx)(t.h2,{id:"add-custom-sizes",children:"Add custom sizes"}),"\n",(0,o.jsxs)(t.p,{children:["You can add any number of custom sizes with ",(0,o.jsx)(t.a,{href:"/styles/data-attributes/",children:"data-size"})," attribute:"]}),"\n",(0,o.jsx)(n,{data:J}),"\n",(0,o.jsx)(a,{component:"Checkbox"}),"\n",(0,o.jsx)(t.h2,{id:"checkboxgroup",children:"Checkbox.Group"}),"\n",(0,o.jsx)(n,{data:ec}),"\n",(0,o.jsx)(t.h2,{id:"controlled-checkboxgroup",children:"Controlled Checkbox.Group"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Checkbox } from \'@mantine/core\';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n\n  return (\n    <Checkbox.Group value={value} onChange={setValue}>\n      <Checkbox value="react" label="React" />\n      <Checkbox value="svelte" label="Svelte" />\n    </Checkbox.Group>\n  );\n}\n'})}),"\n",(0,o.jsx)(c,{component:"Checkbox",refType:"input"}),"\n",(0,o.jsx)(l,{component:"Checkbox"}),"\n",(0,o.jsx)(n,{data:ep}),"\n",(0,o.jsx)(t.h2,{id:"example-table-with-row-selection",children:"Example: Table with row selection"}),"\n",(0,o.jsx)(n,{data:ek.j}),"\n",(0,o.jsx)(t.h2,{id:"example-checkbox-card",children:"Example: Checkbox card"}),"\n",(0,o.jsx)(n,{data:eC}),"\n",(0,o.jsx)(t.h2,{id:"example-customize-with-styles-api",children:"Example: Customize with Styles API"}),"\n",(0,o.jsx)(n,{data:ew}),"\n",(0,o.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(t.p,{children:["Set ",(0,o.jsx)(t.code,{children:"aria-label"})," or ",(0,o.jsx)(t.code,{children:"label"})," prop to make the checkbox accessible:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:'import { Checkbox } from \'@mantine/core\';\n\n// Not ok, input is not labeled\nfunction Bad() {\n  return <Checkbox />;\n}\n\n// Ok, input is labelled by aria-label\nfunction GoodAriaLabel() {\n  return <Checkbox aria-label="My checkbox" />;\n}\n\n// Ok, input is labelled by label element\nfunction GoodLabel() {\n  return <Checkbox label="My checkbox" />;\n}\n'})})]})}var eM=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(eO,Object.assign({},e,{children:(0,o.jsx)(eP,e)}))};function eI(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},2300:function(e,t,n){"use strict";n.d(t,{N:function(){return O}});var o=n(67294),r=n(97718),a=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&m(e,n,t[n]);if(i)for(var n of i(t))d.call(t,n)&&m(e,n,t[n]);return e},u=(e,t)=>c(e,l(t)),b=n(19286),p=n(81110),k=Object.defineProperty,x=Object.defineProperties,f=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?k(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,T=(e,t)=>{for(var n in t||(t={}))y.call(t,n)&&C(e,n,t[n]);if(v)for(var n of v(t))g.call(t,n)&&C(e,n,t[n]);return e},j=(e,t)=>x(e,f(t));let E=`
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
`,w=[{label:"Receive email notifications",checked:!1,key:(0,r.k)()},{label:"Receive sms notifications",checked:!1,key:(0,r.k)()},{label:"Receive push notifications",checked:!1,key:(0,r.k)()}],O={type:"code",code:E,component:function(){let[e,t]=function(e=[]){let[t,n]=(0,o.useState)(e),r=(...e)=>n(t=>[...t,...e]),a=(...e)=>n(t=>[...e,...t]),c=(e,...t)=>n(n=>[...n.slice(0,e),...t,...n.slice(e)]),l=e=>n(t=>t.map((t,n)=>e(t,n))),i=(...e)=>n(t=>t.filter((t,n)=>!e.includes(n))),s=()=>n(e=>{let t=[...e];return t.pop(),t}),d=()=>n(e=>{let t=[...e];return t.shift(),t}),m=({from:e,to:t})=>n(n=>{let o=[...n],r=n[e];return o.splice(e,1),o.splice(t,0,r),o}),b=(e,t)=>n(n=>{let o=[...n];return o[e]=t,o}),p=(e,t,o)=>n(n=>{let r=[...n];return r[e]=u(h({},r[e]),{[t]:o}),r}),k=(e,t)=>n(n=>n.map((n,o)=>e(n,o)?t(n,o):n)),x=e=>{n(t=>t.filter(e))};return[t,{setState:n,append:r,prepend:a,insert:c,pop:s,shift:d,apply:l,applyWhere:k,remove:i,reorder:m,setItem:b,setItemProp:p,filter:x}]}(w),n=e.every(e=>e.checked),r=e.some(e=>e.checked)&&!n,a=e.map((e,n)=>o.createElement(b.X,{mt:"xs",ml:33,label:e.label,key:e.key,checked:e.checked,onChange:e=>t.setItemProp(n,"checked",e.currentTarget.checked)}));return o.createElement(p.x,{maw:400,mx:"auto"},o.createElement(b.X,{checked:n,indeterminate:r,label:"Receive all notifications",onChange:()=>t.setState(e=>e.map(e=>j(T({},e),{checked:!n})))}),a)}}},58091:function(e,t,n){"use strict";n.d(t,{j:function(){return i}});var o=n(67294),r=n(93992),a=n(19286);let c=`
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
`,l=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],i={type:"code",component:function(){let[e,t]=(0,o.useState)([]),n=l.map(n=>o.createElement(r.i.Tr,{key:n.name,bg:e.includes(n.position)?"var(--mantine-color-blue-light)":void 0},o.createElement(r.i.Td,null,o.createElement(a.X,{"aria-label":"Select row",checked:e.includes(n.position),onChange:o=>t(o.currentTarget.checked?[...e,n.position]:e.filter(e=>e!==n.position))})),o.createElement(r.i.Td,null,n.position),o.createElement(r.i.Td,null,n.name),o.createElement(r.i.Td,null,n.symbol),o.createElement(r.i.Td,null,n.mass)));return o.createElement(r.i,null,o.createElement(r.i.Thead,null,o.createElement(r.i.Tr,null,o.createElement(r.i.Th,null),o.createElement(r.i.Th,null,"Element position"),o.createElement(r.i.Th,null,"Element name"),o.createElement(r.i.Th,null,"Symbol"),o.createElement(r.i.Th,null,"Atomic mass"))),o.createElement(r.i.Tbody,null,n))},defaultExpanded:!1,code:c}},27196:function(e,t,n){"use strict";n.d(t,{g:function(){return s}});var o=n(67294),r=n(28120),a=n(19286),c=n(43440);let l=`
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
`,i=(0,r.j)({cursorType:"pointer"}),s={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(a.X,{label:"Default cursor"}),o.createElement(c.M2,{theme:i},o.createElement(a.X,{label:"Pointer cursor",mt:"md",styles:{input:{cursor:"pointer"},label:{cursor:"pointer"}}})))},centered:!0,code:l}}},function(e){e.O(0,[8992,178,9774,2888,179],function(){return e(e.s=34840)}),_N_E=e.O()}]);