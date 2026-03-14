(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97475],{36:(e,t,o)=>{"use strict";o.d(t,{w:()=>d});var a=o(6029),n=o(4349),c=o(76320),l=o(8440),i=o(55729);let r=`
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
`,s=[{label:"Receive email notifications",checked:!1,key:(0,l.z)()},{label:"Receive sms notifications",checked:!1,key:(0,l.z)()},{label:"Receive push notifications",checked:!1,key:(0,l.z)()}],d={type:"code",code:r,component:function(){let[e,t]=function(e=[]){let[t,o]=(0,i.useState)(e),a=(0,i.useCallback)((...e)=>o(t=>[...t,...e]),[]),n=(0,i.useCallback)((...e)=>o(t=>[...e,...t]),[]),c=(0,i.useCallback)((e,...t)=>o(o=>[...o.slice(0,e),...t,...o.slice(e)]),[]),l=(0,i.useCallback)(e=>o(t=>t.map((t,o)=>e(t,o))),[]),r=(0,i.useCallback)((...e)=>o(t=>t.filter((t,o)=>!e.includes(o))),[]),s=(0,i.useCallback)(()=>o(e=>{let t=[...e];return t.pop(),t}),[]),d=(0,i.useCallback)(()=>o(e=>{let t=[...e];return t.shift(),t}),[]),h=(0,i.useCallback)(({from:e,to:t})=>o(o=>{let a=[...o],n=o[e];return a.splice(e,1),a.splice(t,0,n),a}),[]),m=(0,i.useCallback)(({from:e,to:t})=>o(o=>{let a=[...o],n=a[e],c=a[t];return a.splice(t,1,n),a.splice(e,1,c),a}),[]),u=(0,i.useCallback)((e,t)=>o(o=>{let a=[...o];return a[e]=t,a}),[]),b=(0,i.useCallback)((e,t,a)=>o(o=>{let n=[...o];return n[e]={...n[e],[t]:a},n}),[]),p=(0,i.useCallback)((e,t)=>o(o=>o.map((o,a)=>e(o,a)?t(o,a):o)),[]),x=(0,i.useCallback)(e=>{o(t=>t.filter(e))},[]),k=(0,i.useMemo)(()=>({setState:o,append:a,prepend:n,insert:c,pop:s,shift:d,apply:l,applyWhere:p,remove:r,reorder:h,swap:m,setItem:u,setItemProp:b,filter:x}),[]);return[t,k]}(s),o=e.every(e=>e.checked),l=e.some(e=>e.checked)&&!o,r=e.map((e,o)=>(0,a.jsx)(n.S,{mt:"xs",ml:33,label:e.label,checked:e.checked,onChange:e=>t.setItemProp(o,"checked",e.currentTarget.checked)},e.key));return(0,a.jsxs)(c.a,{maw:400,mx:"auto",children:[(0,a.jsx)(n.S,{checked:o,indeterminate:l,label:"Receive all notifications",onChange:()=>t.setState(e=>e.map(e=>({...e,checked:!o})))}),r]})}}},1798:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},12312:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>L});var a=o(6029),n=o(16285),c=o(4349);let l={type:"configurator",component:e=>(0,a.jsx)(c.S,{...e,defaultChecked:!0}),code:`
import { Checkbox } from '@mantine/core';


function Demo() {
  return (
    <Checkbox
      defaultChecked
      {{props}}
    />
  );
}
`,centered:!0,controls:[{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I agree to sell my privacy",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"outline",label:"Outline"}],initialValue:"filled",libraryValue:"filled"},{prop:"radius",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"disabled",type:"boolean",initialValue:!1,libraryValue:!1},{prop:"indeterminate",type:"boolean",initialValue:!1,libraryValue:!1}]};var i=o(72139);let r={type:"code",component:function(){return(0,a.jsxs)(i.B,{children:[(0,a.jsx)(c.S,{checked:!1,onChange:()=>{},label:"Default checkbox"}),(0,a.jsx)(c.S,{checked:!1,onChange:()=>{},indeterminate:!0,label:"Indeterminate checkbox"}),(0,a.jsx)(c.S,{checked:!0,onChange:()=>{},label:"Checked checkbox"}),(0,a.jsx)(c.S,{checked:!0,variant:"outline",onChange:()=>{},label:"Outline checked checkbox"}),(0,a.jsx)(c.S,{variant:"outline",onChange:()=>{},indeterminate:!0,label:"Outline indeterminate checkbox"}),(0,a.jsx)(c.S,{disabled:!0,label:"Disabled checkbox"}),(0,a.jsx)(c.S,{disabled:!0,checked:!0,onChange:()=>{},label:"Disabled checked checkbox"}),(0,a.jsx)(c.S,{disabled:!0,indeterminate:!0,label:"Disabled indeterminate checkbox"})]})},code:`
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
`};var s=o(41495);let d=(0,s.A)("outline","radioactive","Radioactive",[["path",{d:"M13.5 14.6l3 5.19a9 9 0 0 0 4.5 -7.79h-6a3 3 0 0 1 -1.5 2.6",key:"svg-0"}],["path",{d:"M13.5 9.4l3 -5.19a9 9 0 0 0 -9 0l3 5.19a3 3 0 0 1 3 0",key:"svg-1"}],["path",{d:"M10.5 14.6l-3 5.19a9 9 0 0 1 -4.5 -7.79h6a3 3 0 0 0 1.5 2.6",key:"svg-2"}]]),h=(0,s.A)("outline","biohazard","Biohazard",[["path",{d:"M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-0"}],["path",{d:"M11.939 14c0 .173 .048 .351 .056 .533l0 .217a4.75 4.75 0 0 1 -4.533 4.745l-.217 0m-4.75 -4.75a4.75 4.75 0 0 1 7.737 -3.693m6.513 8.443a4.75 4.75 0 0 1 -4.69 -5.503l-.06 0m1.764 -2.944a4.75 4.75 0 0 1 7.731 3.477l0 .217m-11.195 -3.813a4.75 4.75 0 0 1 -1.828 -7.624l.164 -.172m6.718 0a4.75 4.75 0 0 1 -1.665 7.798",key:"svg-1"}]]),m=({indeterminate:e,...t})=>e?(0,a.jsx)(d,{...t}):(0,a.jsx)(h,{...t}),u={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.S,{icon:m,label:"Custom icon",defaultChecked:!0}),(0,a.jsx)(c.S,{icon:m,label:"Custom icon: indeterminate",indeterminate:!0,mt:"sm"})]})},code:`
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
`},b={type:"code",component:function(){return(0,a.jsx)(c.S,{defaultChecked:!0,color:"lime.4",iconColor:"dark.8",size:"md",label:"Bright lime checkbox"})},code:`
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
`,centered:!0};var p=o(36),x=o(32758);let k={type:"code",component:function(){return(0,a.jsx)(c.S,{label:(0,a.jsxs)(a.Fragment,{children:["I accept"," ",(0,a.jsx)(x.M,{href:"https://mantine.dev",target:"_blank",inherit:!0,children:"terms and conditions"})]})})},code:`
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
`};var v=o(70304);let C={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(v.m,{label:"Checkbox with tooltip",children:(0,a.jsx)(c.S,{label:"Tooltip on checkbox only"})}),(0,a.jsx)(v.m,{label:"Checkbox with tooltip",refProp:"rootRef",children:(0,a.jsx)(c.S,{label:"Tooltip the entire element",mt:"md"})})]})},code:`
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
`,centered:!0};var f=o(35493),g=o(17093),y=o(49643);let j=`.root {
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
`,S=(0,g.a)({components:{Checkbox:c.S.extend({classNames:{root:"m_4308addd",label:"m_1db1f159"}})}}),w={type:"code",centered:!0,component:function(){return(0,a.jsxs)(y.nW,{theme:S,children:[(0,a.jsx)(c.S,{size:"xxs",label:"Extra small checkbox"}),(0,a.jsx)(c.S,{size:"xxl",label:"Extra large checkbox",mt:"md"})]})},code:[{fileName:"Demo.tsx",code:T,language:"tsx"},{fileName:"Demo.module.css",code:j,language:"scss"}]};var M=o(57414);let A={type:"configurator",component:function(e){return(0,a.jsx)(c.S.Group,{defaultValue:["react"],...e,children:(0,a.jsxs)(M.Y,{mt:"xs",children:[(0,a.jsx)(c.S,{value:"react",label:"React"}),(0,a.jsx)(c.S,{value:"svelte",label:"Svelte"}),(0,a.jsx)(c.S,{value:"ng",label:"Angular"}),(0,a.jsx)(c.S,{value:"vue",label:"Vue"})]})})},code:`
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
`,centered:!0,maxWidth:"100%",controls:[{prop:"label",type:"string",initialValue:"Select your favorite frameworks/libraries",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]},I={type:"code",component:function(){return(0,a.jsx)(c.S.Group,{disabled:!0,label:"Select your favorite frameworks/libraries",description:"This is anonymous",children:(0,a.jsxs)(i.B,{mt:"xs",children:[(0,a.jsx)(c.S,{value:"react",label:"React"}),(0,a.jsx)(c.S,{value:"svelte",label:"Svelte"}),(0,a.jsx)(c.S,{value:"angular",label:"Angular"}),(0,a.jsx)(c.S,{value:"vue",label:"Vue"})]})})},code:`
import { Checkbox } from '@mantine/core';

function Demo() {
  return (
    <Checkbox.Group disabled>
      <Stack>
        <Checkbox value="react" label="React" />
        <Checkbox value="svelte" label="Svelte" />
        <Checkbox value="angular" label="Angular" />
        <Checkbox value="vue" label="Vue" />
      </Stack>
    </Checkbox.Group>
  );
}
`,centered:!0};var N=o(68256),V=o(87781),D=o(51120),z=o(95914);let R=`
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
`,P={type:"styles-api",data:z.yR,component:function(e){return(0,a.jsx)(c.S,{label:"Checkbox",description:"Checkbox description",error:"Checkbox error",defaultChecked:!0,...e})},code:R,centered:!0};var G=o(94613),E=o(55729),_={root:"m_43bfb50c"};let X={type:"code",component:function(){let[e,t]=(0,E.useState)(!1);return(0,a.jsx)(c.S,{classNames:_,label:"Checkbox button",checked:e,onChange:e=>t(e.currentTarget.checked),wrapperProps:{onClick:()=>t(e=>!e)}})},centered:!0,defaultExpanded:!1,code:[{fileName:"Demo.tsx",code:`
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
`,language:"scss"}]};var B=o(38547),Y=o(5262);let F=(0,B.P)(Y.XZ.Checkbox);function O(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components},{Demo:o,GetElementRef:c,StylesApiSelectors:i,WrapperProps:s}=t;return o||W("Demo",!0),c||W("GetElementRef",!0),i||W("StylesApiSelectors",!0),s||W("WrapperProps",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,a.jsx)(o,{data:l}),"\n",(0,a.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Checkbox } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Checkbox\n      checked={checked}\n      onChange={(event) => setChecked(event.currentTarget.checked)}\n    />\n  );\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"states",children:"States"}),"\n",(0,a.jsx)(o,{data:r}),"\n",(0,a.jsx)(t.h2,{id:"change-icons",children:"Change icons"}),"\n",(0,a.jsx)(o,{data:u}),"\n",(0,a.jsx)(t.h2,{id:"change-icon-color",children:"Change icon color"}),"\n",(0,a.jsxs)(t.p,{children:["Use ",(0,a.jsx)(t.code,{children:"iconColor"})," prop to change icon color. You can reference colors from ",(0,a.jsx)(t.code,{children:"theme.colors"})," or use any valid CSS color:"]}),"\n",(0,a.jsx)(o,{data:b}),"\n",(0,a.jsx)(t.h2,{id:"indeterminate-state",children:"Indeterminate state"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Checkbox"})," supports indeterminate state. When ",(0,a.jsx)(t.code,{children:"indeterminate"})," prop is set,\n",(0,a.jsx)(t.code,{children:"checked"})," prop is ignored (checkbox always has checked styles):"]}),"\n",(0,a.jsx)(o,{data:p.w,demoProps:{toggle:!0}}),"\n",(0,a.jsx)(t.h2,{id:"label-with-link",children:"Label with link"}),"\n",(0,a.jsx)(o,{data:k}),"\n",(0,a.jsx)(t.h2,{id:"checkbox-with-tooltip",children:"Checkbox with tooltip"}),"\n",(0,a.jsxs)(t.p,{children:["You can change target element to which tooltip is attached with ",(0,a.jsx)(t.code,{children:"refProp"}),":"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["If ",(0,a.jsx)(t.code,{children:"refProp"})," is not set, the tooltip is attached to the checkbox input"]}),"\n",(0,a.jsxs)(t.li,{children:["If ",(0,a.jsx)(t.code,{children:'refProp="rootRef"'})," is set, the tooltip is attached to the root element (contains label, input and other elements)"]}),"\n"]}),"\n",(0,a.jsx)(o,{data:C}),"\n",(0,a.jsx)(t.h2,{id:"pointer-cursor",children:"Pointer cursor"}),"\n",(0,a.jsxs)(t.p,{children:["By default, checkbox input and label have ",(0,a.jsx)(t.code,{children:"cursor: default"})," (same as native ",(0,a.jsx)(t.code,{children:'input[type="checkbox"]'}),").\nTo change cursor to pointer, set ",(0,a.jsx)(t.code,{children:"cursorType"})," on ",(0,a.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"}),":"]}),"\n",(0,a.jsx)(o,{data:f.l}),"\n",(0,a.jsx)(t.h2,{id:"add-custom-sizes",children:"Add custom sizes"}),"\n",(0,a.jsxs)(t.p,{children:["You can add any number of custom sizes with ",(0,a.jsx)(t.a,{href:"/styles/data-attributes/",children:"data-size"})," attribute:"]}),"\n",(0,a.jsx)(o,{data:w}),"\n",(0,a.jsx)(s,{component:"Checkbox"}),"\n",(0,a.jsx)(t.h2,{id:"checkboxgroup",children:"Checkbox.Group"}),"\n",(0,a.jsx)(o,{data:A}),"\n",(0,a.jsx)(t.h2,{id:"checkboxgroup-disabled",children:"Checkbox.Group disabled"}),"\n",(0,a.jsx)(o,{data:I}),"\n",(0,a.jsx)(t.h2,{id:"controlled-checkboxgroup",children:"Controlled Checkbox.Group"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Checkbox } from \'@mantine/core\';\n\nfunction Demo() {\n  const [value, setValue] = useState<string[]>([]);\n\n  return (\n    <Checkbox.Group value={value} onChange={setValue}>\n      <Checkbox value="react" label="React" />\n      <Checkbox value="svelte" label="Svelte" />\n    </Checkbox.Group>\n  );\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"checkboxindicator",children:"Checkbox.Indicator"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Checkbox.Indicator"})," looks exactly the same as ",(0,a.jsx)(t.code,{children:"Checkbox"})," component, but it does not\nhave any semantic meaning, it's just a visual representation of checkbox state. You\ncan use it in any place where you need to display checkbox state without any interaction\nrelated to the indicator. For example, it is useful in cards based on buttons, trees, etc."]}),"\n",(0,a.jsxs)(t.p,{children:["Note that ",(0,a.jsx)(t.code,{children:"Checkbox.Indicator"})," cannot be focused or selected with keyboard. It is not\naccessible and should not be used as a replacement for ",(0,a.jsx)(t.code,{children:"Checkbox"})," component."]}),"\n",(0,a.jsx)(o,{data:N.q}),"\n",(0,a.jsx)(t.h2,{id:"checkboxcard-component",children:"Checkbox.Card component"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"Checkbox.Card"})," component can be used as a replacement for ",(0,a.jsx)(t.code,{children:"Checkbox"})," to build custom\ncards/buttons/other things that work as checkboxes. The root element of the component\nhas ",(0,a.jsx)(t.code,{children:'role="checkbox"'})," attribute, it is accessible by default and supports the same\nkeyboard interactions as ",(0,a.jsx)(t.code,{children:'input[type="checkbox"]'}),"."]}),"\n",(0,a.jsx)(o,{data:V.N}),"\n",(0,a.jsxs)(t.p,{children:["You can use ",(0,a.jsx)(t.code,{children:"Checkbox.Card"})," with ",(0,a.jsx)(t.code,{children:"Checkbox.Group"})," the same way as ",(0,a.jsx)(t.code,{children:"Checkbox"})," component:"]}),"\n",(0,a.jsx)(o,{data:D.k}),"\n",(0,a.jsx)(c,{component:"Checkbox",refType:"input"}),"\n",(0,a.jsx)(i,{component:"Checkbox"}),"\n",(0,a.jsx)(o,{data:P}),"\n",(0,a.jsx)(t.h2,{id:"example-table-with-row-selection",children:"Example: Table with row selection"}),"\n",(0,a.jsx)(o,{data:G.P}),"\n",(0,a.jsx)(t.h2,{id:"example-customize-with-styles-api",children:"Example: Customize with Styles API"}),"\n",(0,a.jsx)(o,{data:X}),"\n",(0,a.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,a.jsxs)(t.p,{children:["Set ",(0,a.jsx)(t.code,{children:"aria-label"})," or ",(0,a.jsx)(t.code,{children:"label"})," prop to make the checkbox accessible:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-tsx",children:'import { Checkbox } from \'@mantine/core\';\n\n// Not ok, input is not labeled\nfunction Bad() {\n  return <Checkbox />;\n}\n\n// Ok, input is labelled by aria-label\nfunction GoodAriaLabel() {\n  return <Checkbox aria-label="My checkbox" />;\n}\n\n// Ok, input is labelled by label element\nfunction GoodLabel() {\n  return <Checkbox label="My checkbox" />;\n}\n'})})]})}function L(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(F,{...e,children:(0,a.jsx)(O,{...e})})}function W(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},24583:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},35493:(e,t,o)=>{"use strict";o.d(t,{l:()=>s});var a=o(6029),n=o(17093),c=o(4349),l=o(49643);let i=`
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
`,r=(0,n.a)({cursorType:"pointer"}),s={type:"code",component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.S,{label:"Default cursor"}),(0,a.jsx)(l.nW,{theme:r,children:(0,a.jsx)(c.S,{label:"Pointer cursor",mt:"md",styles:{input:{cursor:"pointer"},label:{cursor:"pointer"}}})})]})},centered:!0,code:i}},41949:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},51120:(e,t,o)=>{"use strict";o.d(t,{k:()=>h});var a=o(6029),n=o(55729),c=o(4349),l=o(57414),i=o(45208),r=o(72139),s=o(74992);let d=[{name:"@mantine/core",description:"Core components library: inputs, buttons, overlays, etc."},{name:"@mantine/hooks",description:"Collection of reusable hooks for React applications."},{name:"@mantine/notifications",description:"Notifications system"}],h={type:"code",centered:!0,maxWidth:320,component:function(){let[e,t]=(0,n.useState)([]),o=d.map(e=>(0,a.jsx)(c.S.Card,{className:s.A.root,radius:"md",value:e.name,children:(0,a.jsxs)(l.Y,{wrap:"nowrap",align:"flex-start",children:[(0,a.jsx)(c.S.Indicator,{}),(0,a.jsxs)("div",{children:[(0,a.jsx)(i.E,{className:s.A.label,children:e.name}),(0,a.jsx)(i.E,{className:s.A.description,children:e.description})]})]})},e.name));return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.S.Group,{value:e,onChange:t,label:"Pick packages to install",description:"Choose all packages that you will need in your application",children:(0,a.jsx)(r.B,{pt:"md",gap:"xs",children:o})}),(0,a.jsxs)(i.E,{fz:"xs",mt:"md",children:["CurrentValue: ",e.join(", ")||"–"]})]})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`}]}},65433:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},68256:(e,t,o)=>{"use strict";o.d(t,{q:()=>l});var a=o(6029),n=o(57414),c=o(4349);let l={type:"code",component:function(){return(0,a.jsxs)(n.Y,{children:[(0,a.jsx)(c.S.Indicator,{}),(0,a.jsx)(c.S.Indicator,{checked:!0}),(0,a.jsx)(c.S.Indicator,{indeterminate:!0}),(0,a.jsx)(c.S.Indicator,{disabled:!0}),(0,a.jsx)(c.S.Indicator,{disabled:!0,checked:!0}),(0,a.jsx)(c.S.Indicator,{disabled:!0,indeterminate:!0})]})},code:`
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
`}},74992:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});var a={root:"m_2cb8989f",label:"m_69ff5ed7",description:"m_cf98ad9f"}},84276:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},87513:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/checkbox",function(){return o(12312)}])},87781:(e,t,o)=>{"use strict";o.d(t,{N:()=>s});var a=o(6029),n=o(55729),c=o(4349),l=o(57414),i=o(45208),r=o(74992);let s={type:"code",centered:!0,maxWidth:320,component:function(){let[e,t]=(0,n.useState)(!1);return(0,a.jsx)(c.S.Card,{className:r.A.root,radius:"md",checked:e,onClick:()=>t(e=>!e),children:(0,a.jsxs)(l.Y,{wrap:"nowrap",align:"flex-start",children:[(0,a.jsx)(c.S.Indicator,{}),(0,a.jsxs)("div",{children:[(0,a.jsx)(i.E,{className:r.A.label,children:"@mantine/core"}),(0,a.jsx)(i.E,{className:r.A.description,children:"Core components library: inputs, buttons, overlays, etc."})]})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`}]}},88992:(e,t,o)=>{"use strict";o.d(t,{A:()=>a});let a=(0,o(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},94613:(e,t,o)=>{"use strict";o.d(t,{P:()=>r});var a=o(6029),n=o(55729),c=o(19577),l=o(4349);let i=[{position:6,mass:12.011,symbol:"C",name:"Carbon"},{position:7,mass:14.007,symbol:"N",name:"Nitrogen"},{position:39,mass:88.906,symbol:"Y",name:"Yttrium"},{position:56,mass:137.33,symbol:"Ba",name:"Barium"},{position:58,mass:140.12,symbol:"Ce",name:"Cerium"}],r={type:"code",component:function(){let[e,t]=(0,n.useState)([]),o=i.map(o=>(0,a.jsxs)(c.X.Tr,{bg:e.includes(o.position)?"var(--mantine-color-blue-light)":void 0,children:[(0,a.jsx)(c.X.Td,{children:(0,a.jsx)(l.S,{"aria-label":"Select row",checked:e.includes(o.position),onChange:a=>t(a.currentTarget.checked?[...e,o.position]:e.filter(e=>e!==o.position))})}),(0,a.jsx)(c.X.Td,{children:o.position}),(0,a.jsx)(c.X.Td,{children:o.name}),(0,a.jsx)(c.X.Td,{children:o.symbol}),(0,a.jsx)(c.X.Td,{children:o.mass})]},o.name));return(0,a.jsxs)(c.X,{children:[(0,a.jsx)(c.X.Thead,{visibleFrom:"sm",children:(0,a.jsxs)(c.X.Tr,{children:[(0,a.jsx)(c.X.Th,{}),(0,a.jsx)(c.X.Th,{children:"Element position"}),(0,a.jsx)(c.X.Th,{children:"Element name"}),(0,a.jsx)(c.X.Th,{children:"Symbol"}),(0,a.jsx)(c.X.Th,{children:"Atomic mass"})]})}),(0,a.jsx)(c.X.Tbody,{children:o})]})},defaultExpanded:!1,code:`
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
`}}},e=>{e.O(0,[38547,90636,46593,38792],()=>e(e.s=87513)),_N_E=e.O()}]);