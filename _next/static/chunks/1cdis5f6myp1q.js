(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var o=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let i={};for(var n in e)o(i,n,{get:e[n],enumerable:!0});return a||o(i,Symbol.toStringTag,{value:"Module"}),i}])},420759,e=>{"use strict";var o=e.i(779177),a=e.i(391398);e.s(["RadioIcon",0,function({size:e,style:i,...n}){return(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 5 5",style:{width:(0,o.rem)(e),height:(0,o.rem)(e),...i},"aria-hidden":!0,...n,children:(0,a.jsx)("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"currentColor"})})}])},690920,e=>{"use strict";var o=e.i(433512),a=e.i(481178),i=e.i(670989),n=e.i(317477),r=e.i(700145),t=e.i(853487),l=e.i(44091),d=e.i(391466),c=e.i(425254),s=e.i(275519),u=e.i(232471),m=e.i(617078),p=e.i(420759),h=e.i(294788),x=e.i(668019),b=e.i(191788),f=e.i(107315),v=e.i(579560),R=e.i(391398);let j=(0,b.createContext)(null),g=(0,s.genericFactory)(e=>{let{value:o,defaultValue:a,onChange:i,size:n,wrapperProps:r,children:t,name:d,readOnly:c,disabled:s,...u}=(0,l.useProps)("RadioGroup",null,e),m=(0,f.useId)(d),[p,b]=(0,v.useUncontrolled)({value:o,defaultValue:a,finalValue:"",onChange:i});return(0,R.jsx)(j,{value:{value:p,onChange:e=>!c&&b("string"==typeof e?e:e.currentTarget.value),size:n,name:m,disabled:s},children:(0,R.jsx)(h.Input.Wrapper,{size:n,...r,...u,labelElement:"div",__staticSelector:"RadioGroup",children:(0,R.jsx)(x.InputsGroupFieldset,{role:"radiogroup",children:t})})})});g.classes=h.Input.Wrapper.classes,g.displayName="@mantine/core/RadioGroup";var y=e.i(323283),k=e.i(284629),C={card:"m_9dc8ae12"};let w=(0,b.createContext)(null),T={withBorder:!0},D=(0,a.createVarsResolver)((e,{radius:a})=>({card:{"--card-radius":(0,o.getRadius)(a)}})),S=(0,s.factory)(e=>{let o=(0,l.useProps)("RadioCard",T,e),{classNames:a,className:i,style:n,styles:r,unstyled:t,vars:c,checked:s,mod:u,withBorder:m,value:p,onClick:h,name:x,onKeyDown:f,attributes:v,...g}=o,S=(0,d.useStyles)({name:"RadioCard",classes:C,props:o,className:i,style:n,classNames:a,styles:r,unstyled:t,attributes:v,vars:c,varsResolver:D,rootSelector:"card"}),{dir:G}=(0,y.useDirection)(),V=(0,b.use)(j),I="boolean"==typeof s?s:V?.value===p,A=x||V?.name;return(0,R.jsx)(w,{value:{checked:I},children:(0,R.jsx)(k.UnstyledButton,{mod:[{"with-border":m,checked:I},u],...S("card"),...g,role:"radio","aria-checked":I,name:A,onClick:e=>{h?.(e),V?.onChange(p||"")},onKeyDown:e=>{if(f?.(e),A&&["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(e.nativeEvent.code)){e.preventDefault();let o=Array.from(document.querySelectorAll(`[role="radio"][name="${A}"]`)),a=o.findIndex(o=>o===e.target),i=a+1>=o.length?0:a+1,n=a-1<0?o.length-1:a-1;"ArrowDown"===e.nativeEvent.code&&(o[i].focus(),o[i].click()),"ArrowUp"===e.nativeEvent.code&&(o[n].focus(),o[n].click()),"ArrowLeft"===e.nativeEvent.code&&(o["ltr"===G?n:i].focus(),o["ltr"===G?n:i].click()),"ArrowRight"===e.nativeEvent.code&&(o["ltr"===G?i:n].focus(),o["ltr"===G?i:n].click())}}})})});S.displayName="@mantine/core/RadioCard",S.classes=C,S.varsResolver=D;var G={indicator:"m_717d7ff6",icon:"m_3e4da632","indicator--outline":"m_2980836c"};let V={icon:p.RadioIcon},I=(0,a.createVarsResolver)((e,{radius:a,color:l,size:d,iconColor:c,variant:s,autoContrast:u})=>{let m=(0,i.parseThemeColor)({color:l||e.primaryColor,theme:e}),p=m.isThemeColor&&void 0===m.shade?`var(--mantine-color-${m.color}-outline)`:m.color;return{indicator:{"--radio-size":(0,o.getSize)(d,"radio-size"),"--radio-radius":void 0===a?void 0:(0,o.getRadius)(a),"--radio-color":"outline"===s?p:(0,n.getThemeColor)(l,e),"--radio-icon-size":"number"==typeof d?`calc(${(0,o.getSize)(d,"radio-size")} * 0.4)`:(0,o.getSize)(d,"radio-icon-size"),"--radio-icon-color":c?(0,n.getThemeColor)(c,e):(0,t.getAutoContrastValue)(u,e)?(0,r.getContrastColor)({color:l,theme:e,autoContrast:u}):void 0}}}),A=(0,s.factory)(e=>{let o=(0,l.useProps)("RadioIndicator",V,e),{classNames:a,className:i,style:n,styles:r,unstyled:t,vars:c,icon:s,radius:m,color:p,iconColor:h,autoContrast:x,checked:f,mod:v,variant:j,disabled:g,attributes:y,...k}=o,C=(0,d.useStyles)({name:"RadioIndicator",classes:G,props:o,className:i,style:n,classNames:a,styles:r,unstyled:t,attributes:y,vars:c,varsResolver:I,rootSelector:"indicator"}),T=(0,b.use)(w),D="boolean"==typeof f?f:T?.checked||!1;return(0,R.jsx)(u.Box,{...C("indicator",{variant:j}),variant:j,mod:[{checked:D,disabled:g},v],...k,children:(0,R.jsx)(s,{...C("icon")})})});A.displayName="@mantine/core/RadioIndicator",A.classes=G,A.varsResolver=I;var _={root:"m_f3f1af94",inner:"m_89c4f5e4",icon:"m_f3ed6b2b",radio:"m_8a3dbb89","radio--outline":"m_1bfe9d39"};let N={labelPosition:"right",withErrorStyles:!0},z=(0,a.createVarsResolver)((e,{size:a,radius:l,color:d,iconColor:c,variant:s,autoContrast:u})=>{let m=(0,i.parseThemeColor)({color:d||e.primaryColor,theme:e}),p=m.isThemeColor&&void 0===m.shade?`var(--mantine-color-${m.color}-outline)`:m.color;return{root:{"--radio-size":(0,o.getSize)(a,"radio-size"),"--radio-radius":void 0===l?void 0:(0,o.getRadius)(l),"--radio-color":"outline"===s?p:(0,n.getThemeColor)(d,e),"--radio-icon-color":c?(0,n.getThemeColor)(c,e):(0,t.getAutoContrastValue)(u,e)?(0,r.getContrastColor)({color:d,theme:e,autoContrast:u}):void 0,"--radio-icon-size":(0,o.getSize)(a,"radio-icon-size")}}}),P=(0,s.factory)(e=>{let o=(0,l.useProps)("Radio",N,e),{classNames:a,className:i,style:n,styles:r,unstyled:t,vars:s,id:h,size:x,label:v,labelPosition:g,description:y,error:k,radius:C,color:w,variant:T,disabled:D,wrapperProps:S,icon:G=p.RadioIcon,rootRef:V,iconColor:I,onChange:A,mod:P,attributes:E,withErrorStyles:F,checked:B,...O}=o,M=(0,d.useStyles)({name:"Radio",classes:_,props:o,className:i,style:n,classNames:a,styles:r,unstyled:t,attributes:E,vars:s,varsResolver:z}),U=(0,b.use)(j),L=U?.size??x,$=o.size?x:L,{styleProps:W,rest:X}=(0,c.extractStyleProps)(O),K=(0,f.useId)(h),Y=[y?`${K}-description`:void 0,k&&"boolean"!=typeof k?`${K}-error`:void 0,X["aria-describedby"]].filter(Boolean).join(" ")||void 0,q=U?U.value===X.value:void 0,H={checked:q??B,name:X.name??U?.name,onChange:e=>{U?.onChange(e),A?.(e)},disabled:U?.disabled??D};return(0,R.jsx)(m.InlineInput,{...M("root"),__staticSelector:"Radio",__stylesApiProps:o,id:K,size:$,labelPosition:g,label:v,description:y,error:k,disabled:H.disabled,classNames:a,styles:r,unstyled:t,"data-checked":(q??B)||void 0,variant:T,ref:V,mod:P,attributes:E,...W,...S,children:(0,R.jsxs)(u.Box,{...M("inner"),mod:{"label-position":g},children:[(0,R.jsx)(u.Box,{...M("radio",{focusable:!0,variant:T}),...X,...H,component:"input",mod:{error:!!k,"with-error-styles":F},id:K,type:"radio","aria-describedby":Y}),(0,R.jsx)(G,{...M("icon"),"aria-hidden":!0})]})})});P.classes=_,P.varsResolver=z,P.displayName="@mantine/core/Radio",P.Group=g,P.Card=S,P.Indicator=A,e.s(["Radio",0,P],690920)},96783,e=>{"use strict";var o=e.i(648863),a=e.i(725695),i=e.i(690920),n=e.i(391398);let r={type:"configurator",component:function(e){return(0,n.jsx)(i.Radio.Group,{defaultValue:"react",name:"favoriteFramework",...e,children:(0,n.jsxs)(a.Group,{mt:"xs",children:[(0,n.jsx)(i.Radio,{value:"react",label:"React"}),(0,n.jsx)(i.Radio,{value:"svelte",label:"Svelte"}),(0,n.jsx)(i.Radio,{value:"ng",label:"Angular"}),(0,n.jsx)(i.Radio,{value:"vue",label:"Vue"})]})})},centered:!0,code:`
import { Radio, Group } from '@mantine/core';


function Demo() {
  return (
    <Radio.Group
      name="favoriteFramework"
      {{props}}
    >
      <Group mt="xs">
        <Radio value="react" label="React" />
        <Radio value="svelte" label="Svelte" />
        <Radio value="ng" label="Angular" />
        <Radio value="vue" label="Vue" />
      </Group>
    </Radio.Group>
  );
}
`,controls:[{prop:"label",type:"string",initialValue:"Select your favorite framework/library",libraryValue:""},{prop:"description",type:"string",initialValue:"This is anonymous",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"withAsterisk",type:"boolean",initialValue:!0,libraryValue:!1}]},t={type:"configurator",component:function(e){return(0,n.jsx)(i.Radio.Group,{name:"demo",defaultValue:"react",children:(0,n.jsx)(i.Radio,{value:"react",...e})})},code:`
import { Radio } from '@mantine/core';


function Demo() {
  return (
    <Radio
      {{props}}
    />
  );
}
`,centered:!0,controls:[{prop:"labelPosition",type:"segmented",data:[{value:"right",label:"Right"},{value:"left",label:"Left"}],initialValue:"right",libraryValue:"right"},{prop:"label",type:"string",initialValue:"I cannot be unchecked",libraryValue:""},{prop:"description",type:"string",initialValue:"",libraryValue:""},{prop:"error",type:"string",initialValue:"",libraryValue:""},{prop:"size",type:"size",initialValue:"sm",libraryValue:"sm"},{prop:"color",type:"color",initialValue:"blue",libraryValue:"blue"},{prop:"variant",type:"segmented",data:[{value:"filled",label:"Filled"},{value:"outline",label:"Outline"}],initialValue:"filled",libraryValue:"filled"}]},l={type:"code",centered:!0,component:function(){return(0,n.jsx)(i.Radio.Group,{disabled:!0,name:"favoriteFramework",label:"Select your favorite framework/library",description:"This is anonymous",children:(0,n.jsxs)(a.Group,{mt:"xs",children:[(0,n.jsx)(i.Radio,{label:"React",value:"react"}),(0,n.jsx)(i.Radio,{label:"Angular",value:"nu"}),(0,n.jsx)(i.Radio,{label:"Svelte",value:"sv"})]})})},code:`
import { Radio, Group } from '@mantine/core';

function Demo() {
  return (
    <Radio.Group
      disabled
      name="favoriteFramework"
      label="Select your favorite framework/library"
      description="This is anonymous"
    >
      <Group mt="xs">
        <Radio label="React" value="react" />
        <Radio label="Angular" value="nu" />
        <Radio label="Svelte" value="sv" />
      </Group>
    </Radio.Group>
  );
}
`};var d=e.i(956031);let c={type:"code",centered:!0,component:function(){return(0,n.jsx)(i.Radio,{icon:d.CheckIcon,label:"Custom check icon",name:"check",value:"check",defaultChecked:!0})},code:`
import { Radio, CheckIcon } from '@mantine/core';

function Demo() {
  return (
    <Radio icon={CheckIcon} label="Custom check icon" name="check" value="check" defaultChecked />
  );
}
`},s={type:"code",centered:!0,component:function(){return(0,n.jsx)(i.Radio,{iconColor:"dark.8",color:"lime.4",label:"Custom icon color",name:"check",value:"check",defaultChecked:!0})},code:`
import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio
      iconColor="dark.8"
      color="lime.4"
      label="Custom icon color"
      name="check"
      value="check"
      defaultChecked
    />
  );
}
`};var u=e.i(277991);let m=`
import { Radio } from '@mantine/core';

function Demo() {
  return (
    <Radio
      label="Radio"
      description="Radio description"
      error="Radio error"
      defaultChecked
     {{props}}
    />
  );
}
`,p={type:"styles-api",data:u.RadioStylesApi,component:function(e){return(0,n.jsx)(i.Radio,{label:"Radio",description:"Radio description",error:"Radio error",defaultChecked:!0,...e})},code:m,centered:!0};var h=e.i(431868);let x={type:"code",component:function(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h.Tooltip,{label:"Radio with tooltip",children:(0,n.jsx)(i.Radio,{label:"Tooltip on radio only"})}),(0,n.jsx)(h.Tooltip,{label:"Radio with tooltip",refProp:"rootRef",children:(0,n.jsx)(i.Radio,{label:"Tooltip the entire element",mt:"md"})})]})},code:`
import { Tooltip, Radio } from '@mantine/core';

function Demo() {
  return (
    <>
      <Tooltip label="Radio with tooltip">
        <Radio label="Tooltip on radio only" />
      </Tooltip>

      <Tooltip label="Radio with tooltip" refProp="rootRef">
        <Radio label="Tooltip the entire element" mt="md" />
      </Tooltip>
    </>
  );
}
`,centered:!0};var b=e.i(671640);let f={type:"code",component:function(){return(0,n.jsxs)(b.Stack,{children:[(0,n.jsx)(i.Radio,{checked:!1,onChange:()=>{},label:"Default radio"}),(0,n.jsx)(i.Radio,{checked:!0,onChange:()=>{},label:"Checked radio"}),(0,n.jsx)(i.Radio,{checked:!0,variant:"outline",onChange:()=>{},label:"Outline checked radio"}),(0,n.jsx)(i.Radio,{disabled:!0,label:"Disabled radio"}),(0,n.jsx)(i.Radio,{disabled:!0,checked:!0,onChange:()=>{},label:"Disabled checked radio"})]})},code:`
import { Radio, Stack } from '@mantine/core';

function Demo() {
  return (
    <Stack>
      <Radio checked={false} onChange={() => {}} label="Default radio" />
      <Radio checked onChange={() => {}} label="Checked radio" />
      <Radio checked variant="outline" onChange={() => {}} label="Outline checked radio" />
      <Radio disabled label="Disabled radio" />
      <Radio disabled checked onChange={() => {}} label="Disabled checked radio" />
    </Stack>
  );
}
`};var v="m_6fb185a7",R="m_862412cf",j="m_7b348797",g=e.i(191788),y=e.i(883364);let k={type:"code",centered:!0,maxWidth:320,component:function(){let[e,o]=(0,g.useState)(!1);return(0,n.jsx)(i.Radio.Card,{className:v,checked:e,onClick:()=>o(e=>!e),children:(0,n.jsxs)(a.Group,{wrap:"nowrap",align:"flex-start",children:[(0,n.jsx)(i.Radio.Indicator,{}),(0,n.jsxs)("div",{children:[(0,n.jsx)(y.Text,{className:R,children:"@mantine/core"}),(0,n.jsx)(y.Text,{className:j,children:"Core components library: inputs, buttons, overlays, etc."})]})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import { Radio, Group, Text } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Radio.Card
      className={classes.root}
      checked={checked}
      onClick={() => setChecked((c) => !c)}
    >
      <Group wrap="nowrap" align="flex-start">
        <Radio.Indicator />
        <div>
          <Text className={classes.label}>@mantine/core</Text>
          <Text className={classes.description}>
            Core components library: inputs, buttons, overlays, etc.
          </Text>
        </div>
      </Group>
    </Radio.Card>
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
`}]},C=[{name:"@mantine/core",description:"Core components library: inputs, buttons, overlays, etc."},{name:"@mantine/hooks",description:"Collection of reusable hooks for React applications."},{name:"@mantine/notifications",description:"Notifications system"}],w={type:"code",centered:!0,maxWidth:320,component:function(){let[e,o]=(0,g.useState)(null),r=C.map(e=>(0,n.jsx)(i.Radio.Card,{className:v,value:e.name,children:(0,n.jsxs)(a.Group,{wrap:"nowrap",align:"flex-start",children:[(0,n.jsx)(i.Radio.Indicator,{}),(0,n.jsxs)("div",{children:[(0,n.jsx)(y.Text,{className:R,children:e.name}),(0,n.jsx)(y.Text,{className:j,children:e.description})]})]})},e.name));return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Radio.Group,{value:e,onChange:o,label:"Pick one package to install",description:"Choose a package that you will need in your application",children:(0,n.jsx)(b.Stack,{pt:"md",gap:"xs",children:r})}),(0,n.jsxs)(y.Text,{fz:"xs",mt:"md",children:["CurrentValue: ",e||"–"]})]})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import { Radio, Group, Stack, Text } from '@mantine/core';
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
  const [value, setValue] = useState<string | null>(null);

  const cards = data.map((item) => (
    <Radio.Card className={classes.root} value={item.name} key={item.name}>
      <Group wrap="nowrap" align="flex-start">
        <Radio.Indicator />
        <div>
          <Text className={classes.label}>{item.name}</Text>
          <Text className={classes.description}>{item.description}</Text>
        </div>
      </Group>
    </Radio.Card>
  ));

  return (
    <>
      <Radio.Group
        value={value}
        onChange={setValue}
        label="Pick one package to install"
        description="Choose a package that you will need in your application"
      >
        <Stack pt="md" gap="xs">
          {cards}
        </Stack>
      </Radio.Group>

      <Text fz="xs" mt="md">
        CurrentValue: {value || '–'}
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
`}]},T={type:"code",component:function(){return(0,n.jsxs)(a.Group,{children:[(0,n.jsx)(i.Radio.Indicator,{}),(0,n.jsx)(i.Radio.Indicator,{checked:!0}),(0,n.jsx)(i.Radio.Indicator,{disabled:!0}),(0,n.jsx)(i.Radio.Indicator,{disabled:!0,checked:!0})]})},code:`
import { Radio, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Radio.Indicator />
      <Radio.Indicator checked />
      <Radio.Indicator disabled />
      <Radio.Indicator disabled checked />
    </Group>
  );
}
`},D={type:"code",centered:!0,component:function(){return(0,n.jsxs)(a.Group,{children:[(0,n.jsx)(i.Radio,{checked:!0,disabled:!0,label:"React",value:"react"}),(0,n.jsx)(i.Radio,{disabled:!0,label:"Angular",value:"nu"}),(0,n.jsx)(i.Radio,{disabled:!0,label:"Svelte",value:"sv"})]})},code:`
import { Radio, Group } from '@mantine/core';

function Demo() {
  return (
    <Group>
      <Radio checked disabled label="React" value="react" />
      <Radio disabled label="Angular" value="nu" />
      <Radio disabled label="Svelte" value="sv" />
    </Group>
  );
}
`};var S=(0,o.__exportAll)({card:()=>k,cardGroup:()=>w,configurator:()=>t,disabled:()=>D,groupConfigurator:()=>r,groupDisabled:()=>l,icon:()=>c,iconColor:()=>s,indicator:()=>T,states:()=>f,stylesApi:()=>p,tooltip:()=>x});e.s(["RadioDemos",0,S],96783)},754232,e=>{"use strict";var o=e.i(391398),a=e.i(38856),i=e.i(96783);e.i(603441);var n=e.i(62558);e.i(457450);var r=e.i(418026);let t=(0,n.Layout)(r.MDX_DATA.Radio);function l(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.useMDXComponents)(),...e.components},{Demo:r,GetElementRef:t,StylesApiSelectors:l,WrapperProps:c}=n;return r||d("Demo",!0),t||d("GetElementRef",!0),l||d("StylesApiSelectors",!0),c||d("WrapperProps",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsx)(r,{data:i.RadioDemos.configurator}),"\n",(0,o.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { Radio } from '@mantine/core';\n\nfunction Demo() {\n  const [checked, setChecked] = useState(false);\n  return (\n    <Radio\n      checked={checked}\n      onChange={(event) => setChecked(event.currentTarget.checked)}\n    />\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"uncontrolled",children:"Uncontrolled"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Radio"})," can be used with uncontrolled forms the same way as a native ",(0,o.jsx)(n.code,{children:'input[type="radio"]'}),".\nSet the ",(0,o.jsx)(n.code,{children:"name"})," and ",(0,o.jsx)(n.code,{children:"value"})," attributes to include radio value in ",(0,o.jsx)(n.code,{children:"FormData"})," object on form submission.\nTo control the initial checked state in uncontrolled forms, use ",(0,o.jsx)(n.code,{children:"defaultChecked"})," prop."]}),"\n",(0,o.jsxs)(n.p,{children:["Example usage of uncontrolled ",(0,o.jsx)(n.code,{children:"Radio"})," with ",(0,o.jsx)(n.code,{children:"FormData"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { Radio } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <form\n      onSubmit={(event) => {\n        event.preventDefault();\n        const formData = new FormData(event.currentTarget);\n        console.log(\'Radio value:\', formData.get(\'option\'));\n      }}\n    >\n      <Radio name="option" value="option1" label="Option 1" />\n      <Radio name="option" value="option2" label="Option 2" defaultChecked />\n      <button type="submit">Submit</button>\n    </form>\n  );\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"states",children:"States"}),"\n",(0,o.jsx)(r,{data:i.RadioDemos.states}),"\n",(0,o.jsx)(n.h2,{id:"change-icon",children:"Change icon"}),"\n",(0,o.jsx)(r,{data:i.RadioDemos.icon}),"\n",(0,o.jsx)(n.h2,{id:"change-icon-color",children:"Change icon color"}),"\n",(0,o.jsx)(r,{data:i.RadioDemos.iconColor}),"\n",(0,o.jsx)(n.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,o.jsx)(r,{data:i.RadioDemos.disabled}),"\n",(0,o.jsx)(n.h2,{id:"pointer-cursor",children:"Pointer cursor"}),"\n",(0,o.jsxs)(n.p,{children:["By default, the radio input and label have ",(0,o.jsx)(n.code,{children:"cursor: default"})," (same as native ",(0,o.jsx)(n.code,{children:'input[type="radio"]'}),").\nTo change the cursor to pointer, set ",(0,o.jsx)(n.code,{children:"cursorType"})," on the ",(0,o.jsx)(n.a,{href:"/theming/theme-object/",children:"theme"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { createTheme, MantineProvider, Radio } from '@mantine/core';\n\nconst theme = createTheme({\n  cursorType: 'pointer',\n});\n\nfunction Demo() {\n  return (\n    <MantineProvider theme={theme}>\n      <Radio label=\"Pointer cursor\" />\n    </MantineProvider>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"radio-with-tooltip",children:"Radio with tooltip"}),"\n",(0,o.jsxs)(n.p,{children:["You can change the target element to which the tooltip is attached with ",(0,o.jsx)(n.code,{children:"refProp"}),":"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If ",(0,o.jsx)(n.code,{children:"refProp"})," is not set, the tooltip is attached to the radio input"]}),"\n",(0,o.jsxs)(n.li,{children:["If ",(0,o.jsx)(n.code,{children:'refProp="rootRef"'})," is set, the tooltip is attached to the root element (contains label, input, and other elements)"]}),"\n"]}),"\n",(0,o.jsx)(r,{data:i.RadioDemos.tooltip}),"\n",(0,o.jsx)(c,{component:"Radio"}),"\n",(0,o.jsx)(n.h2,{id:"radiogroup-component",children:"Radio.Group component"}),"\n",(0,o.jsx)(r,{data:i.RadioDemos.groupConfigurator}),"\n",(0,o.jsx)(n.h2,{id:"radiogroup-disabled-state",children:"Radio.Group disabled state"}),"\n",(0,o.jsx)(r,{data:i.RadioDemos.groupDisabled}),"\n",(0,o.jsx)(n.h2,{id:"controlled-radiogroup",children:"Controlled Radio.Group"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { useState } from \'react\';\nimport { Radio } from \'@mantine/core\';\n\nfunction Demo() {\n  const [value, setValue] = useState(\'react\');\n\n  return (\n    <Radio.Group\n      value={value}\n      onChange={setValue}\n      name="favoriteFramework"\n      label="Select your favorite framework/library"\n      description="This is anonymous"\n      withAsterisk\n    >\n      <Radio value="react" label="React" />\n      <Radio value="svelte" label="Svelte" />\n      <Radio value="ng" label="Angular" />\n      <Radio value="vue" label="Vue" />\n    </Radio.Group>\n  );\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"radioindicator",children:"Radio.Indicator"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Radio.Indicator"})," looks exactly the same as the ",(0,o.jsx)(n.code,{children:"Radio"})," component, but it does not\nhave any semantic meaning; it's just a visual representation of the radio state. You\ncan use it in any place where you need to display the radio state without any interaction\nrelated to the indicator. For example, it is useful in cards based on buttons, trees, etc."]}),"\n",(0,o.jsxs)(n.p,{children:["Note that ",(0,o.jsx)(n.code,{children:"Radio.Indicator"})," cannot be focused or selected with the keyboard. It is not\naccessible and should not be used as a replacement for the ",(0,o.jsx)(n.code,{children:"Radio"})," component."]}),"\n",(0,o.jsx)(r,{data:i.RadioDemos.indicator}),"\n",(0,o.jsx)(n.h2,{id:"radiocard-component",children:"Radio.Card component"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Radio.Card"})," component can be used as a replacement for ",(0,o.jsx)(n.code,{children:"Radio"})," to build custom\ncards/buttons/other things that work as radios. The root element of the component\nhas the ",(0,o.jsx)(n.code,{children:'role="radio"'})," attribute; it is accessible by default and supports the same\nkeyboard interactions as ",(0,o.jsx)(n.code,{children:'input[type="radio"]'}),"."]}),"\n",(0,o.jsx)(r,{data:i.RadioDemos.card}),"\n",(0,o.jsxs)(n.p,{children:["You can use ",(0,o.jsx)(n.code,{children:"Radio.Card"})," with ",(0,o.jsx)(n.code,{children:"Radio.Group"})," the same way as the ",(0,o.jsx)(n.code,{children:"Radio"})," component:"]}),"\n",(0,o.jsx)(r,{data:i.RadioDemos.cardGroup}),"\n",(0,o.jsx)(t,{component:"Radio",refType:"input"}),"\n",(0,o.jsx)(l,{component:"Radio"}),"\n",(0,o.jsx)(r,{data:i.RadioDemos.stylesApi}),"\n",(0,o.jsx)(n.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,o.jsxs)(n.p,{children:["Set the ",(0,o.jsx)(n.code,{children:"aria-label"})," or ",(0,o.jsx)(n.code,{children:"label"})," prop to make the radio accessible:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { Radio } from \'@mantine/core\';\n\n// Not ok, input is not labeled\nfunction Bad() {\n  return <Radio />;\n}\n\n// Ok, input is labeled by aria-label\nfunction GoodAriaLabel() {\n  return <Radio aria-label="My radio" />;\n}\n\n// Ok, input is labeled by label element\nfunction GoodLabel() {\n  return <Radio label="My radio" />;\n}\n'})})]})}function d(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})})}])},181173,(e,o,a)=>{let i="/core/radio";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(754232)]),o.hot&&o.hot.dispose(function(){window.__NEXT_P.push([i])})},648761,e=>{e.v(o=>Promise.all(["static/chunks/22379_btw709h.js"].map(o=>e.l(o))).then(()=>o(493594)))},828805,e=>{e.v(o=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(o=>e.l(o))).then(()=>o(879466)))}]);