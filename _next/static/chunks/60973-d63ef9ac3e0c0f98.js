"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[60973],{19917:(e,o,a)=>{a.d(o,{N:()=>d});var i=a(6029),r=a(55729),n=a(40025),t=a(57414),c=a(45208),s=a(58360);let d={type:"code",centered:!0,maxWidth:320,component:function(){let[e,o]=(0,r.useState)(!1);return(0,i.jsx)(n.s.Card,{className:s.A.root,radius:"md",checked:e,onClick:()=>o(e=>!e),children:(0,i.jsxs)(t.Y,{wrap:"nowrap",align:"flex-start",children:[(0,i.jsx)(n.s.Indicator,{}),(0,i.jsxs)("div",{children:[(0,i.jsx)(c.E,{className:s.A.label,children:"@mantine/core"}),(0,i.jsx)(c.E,{className:s.A.description,children:"Core components library: inputs, buttons, overlays, etc."})]})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
import { useState } from 'react';
import { Radio, Group, Text } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  const [checked, setChecked] = useState(false);

  return (
    <Radio.Card
      className={classes.root}
      radius="md"
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
`}]}},40025:(e,o,a)=>{a.d(o,{s:()=>J});var i=a(6029),r=a(2011);a(55729);var n=a(14163),t=a(33987),c=a(20931),s=a(21351),d=a(70151),l=a(58563),m=a(38919),p=a(15583),u=a(59278),h=a(76320),v=a(8411),f=a(13942),x=a(90851),g=a(17976),b=a(24965);let[k,y]=(0,b.e)(),[C,j]=(0,b.e)();var w={card:"m_9dc8ae12"};let R={withBorder:!0},N=(0,t.V)((e,{radius:o})=>({card:{"--card-radius":(0,n.nJ)(o)}})),_=(0,v.P9)((e,o)=>{let a=(0,m.Y)("RadioCard",R,e),{classNames:r,className:n,style:t,styles:c,unstyled:s,vars:d,checked:l,mod:u,withBorder:h,value:v,onClick:f,name:b,onKeyDown:k,attributes:j,..._}=a,z=(0,p.I)({name:"RadioCard",classes:w,props:a,className:n,style:t,classNames:r,styles:c,unstyled:s,attributes:j,vars:d,varsResolver:N,rootSelector:"card"}),{dir:I}=(0,x.jH)(),A=y(),G="boolean"==typeof l?l:A?.value===v,D=b||A?.name;return(0,i.jsx)(C,{value:{checked:G},children:(0,i.jsx)(g.N,{ref:o,mod:[{"with-border":h,checked:G},u],...z("card"),..._,role:"radio","aria-checked":G,name:D,onClick:e=>{f?.(e),A?.onChange(v||"")},onKeyDown:e=>{if(k?.(e),["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(e.nativeEvent.code)){e.preventDefault();let o=Array.from(document.querySelectorAll(`[role="radio"][name="${D||"__mantine"}"]`)),a=o.findIndex(o=>o===e.target),i=a+1>=o.length?0:a+1,r=a-1<0?o.length-1:a-1;"ArrowDown"===e.nativeEvent.code&&(o[i].focus(),o[i].click()),"ArrowUp"===e.nativeEvent.code&&(o[r].focus(),o[r].click()),"ArrowLeft"===e.nativeEvent.code&&(o["ltr"===I?r:i].focus(),o["ltr"===I?r:i].click()),"ArrowRight"===e.nativeEvent.code&&(o["ltr"===I?i:r].focus(),o["ltr"===I?i:r].click())}}})})});_.displayName="@mantine/core/RadioCard",_.classes=w;var z=a(7798),I=a(11443),A=a(29734);let G=(0,v.P9)((e,o)=>{let{value:a,defaultValue:n,onChange:t,size:c,wrapperProps:s,children:d,name:l,readOnly:p,disabled:u,...h}=(0,m.Y)("RadioGroup",null,e),v=(0,r.B)(l),[f,x]=(0,z.Z)({value:a,defaultValue:n,finalValue:"",onChange:t});return(0,i.jsx)(k,{value:{value:f,onChange:e=>!p&&x("string"==typeof e?e:e.currentTarget.value),size:c,name:v,disabled:u},children:(0,i.jsx)(A.p.Wrapper,{size:c,ref:o,...s,...h,labelElement:"div",__staticSelector:"RadioGroup",children:(0,i.jsx)(I.F,{role:"radiogroup",children:d})})})});G.classes=A.p.Wrapper.classes,G.displayName="@mantine/core/RadioGroup";var D=a(26082);function E({size:e,style:o,...a}){return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 5 5",style:{width:(0,D.D)(e),height:(0,D.D)(e),...o},"aria-hidden":!0,...a,children:(0,i.jsx)("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"currentColor"})})}var T={indicator:"m_717d7ff6",icon:"m_3e4da632","indicator--outline":"m_2980836c"};let S={icon:E},Y=(0,t.V)((e,{radius:o,color:a,size:i,iconColor:r,variant:t,autoContrast:m})=>{let p=(0,c.g)({color:a||e.primaryColor,theme:e}),u=p.isThemeColor&&void 0===p.shade?`var(--mantine-color-${p.color}-outline)`:p.color;return{indicator:{"--radio-size":(0,n.YC)(i,"radio-size"),"--radio-radius":void 0===o?void 0:(0,n.nJ)(o),"--radio-color":"outline"===t?u:(0,s.r)(a,e),"--radio-icon-size":(0,n.YC)(i,"radio-icon-size"),"--radio-icon-color":r?(0,s.r)(r,e):(0,l.v)(m,e)?(0,d.w)({color:a,theme:e,autoContrast:m}):void 0}}}),P=(0,v.P9)((e,o)=>{let a=(0,m.Y)("RadioIndicator",S,e),{classNames:r,className:n,style:t,styles:c,unstyled:s,vars:d,icon:l,radius:u,color:v,iconColor:f,autoContrast:x,checked:g,mod:b,variant:k,disabled:y,attributes:C,...w}=a,R=(0,p.I)({name:"RadioIndicator",classes:T,props:a,className:n,style:t,classNames:r,styles:c,unstyled:s,attributes:C,vars:d,varsResolver:Y,rootSelector:"indicator"}),N=j(),_="boolean"==typeof g?g:N?.checked||!1;return(0,i.jsx)(h.a,{ref:o,...R("indicator",{variant:k}),variant:k,mod:[{checked:_,disabled:y},b],...w,children:(0,i.jsx)(l,{...R("icon")})})});P.displayName="@mantine/core/RadioIndicator",P.classes=T;var V={root:"m_f3f1af94",inner:"m_89c4f5e4",icon:"m_f3ed6b2b",radio:"m_8a3dbb89","radio--outline":"m_1bfe9d39"};let B={labelPosition:"right"},W=(0,t.V)((e,{size:o,radius:a,color:i,iconColor:r,variant:t,autoContrast:m})=>{let p=(0,c.g)({color:i||e.primaryColor,theme:e}),u=p.isThemeColor&&void 0===p.shade?`var(--mantine-color-${p.color}-outline)`:p.color;return{root:{"--radio-size":(0,n.YC)(o,"radio-size"),"--radio-radius":void 0===a?void 0:(0,n.nJ)(a),"--radio-color":"outline"===t?u:(0,s.r)(i,e),"--radio-icon-color":r?(0,s.r)(r,e):(0,l.v)(m,e)?(0,d.w)({color:i,theme:e,autoContrast:m}):void 0,"--radio-icon-size":(0,n.YC)(o,"radio-icon-size")}}}),J=(0,v.P9)((e,o)=>{let a=(0,m.Y)("Radio",B,e),{classNames:n,className:t,style:c,styles:s,unstyled:d,vars:l,id:v,size:x,label:g,labelPosition:b,description:k,error:C,radius:j,color:w,variant:R,disabled:N,wrapperProps:_,icon:z=E,rootRef:I,iconColor:A,onChange:G,mod:D,attributes:T,checked:S,...Y}=a,P=(0,p.I)({name:"Radio",classes:V,props:a,className:t,style:c,classNames:n,styles:s,unstyled:d,attributes:T,vars:l,varsResolver:W}),J=y(),$=J?.size??x,q=a.size?x:$,{styleProps:F,rest:L}=(0,u.j)(Y),U=(0,r.B)(v),H={checked:J?.value===L.value||S||void 0,name:J?.name??L.name,onChange:e=>{J?.onChange(e),G?.(e)},disabled:J?.disabled??N};return(0,i.jsx)(f.I,{...P("root"),__staticSelector:"Radio",__stylesApiProps:a,id:U,size:q,labelPosition:b,label:g,description:k,error:C,disabled:H.disabled,classNames:n,styles:s,unstyled:d,"data-checked":H.checked,variant:R,ref:I,mod:D,...F,..._,children:(0,i.jsxs)(h.a,{...P("inner"),mod:{"label-position":b},children:[(0,i.jsx)(h.a,{...P("radio",{focusable:!0,variant:R}),...L,...H,component:"input",mod:{error:!!C},ref:o,id:U,type:"radio"}),(0,i.jsx)(z,{...P("icon"),"aria-hidden":!0})]})})});J.classes=V,J.displayName="@mantine/core/Radio",J.Group=G,J.Card=_,J.Indicator=P},58360:(e,o,a)=>{a.d(o,{A:()=>i});var i={root:"m_6fb185a7",label:"m_862412cf",description:"m_7b348797"}},58840:(e,o,a)=>{a.d(o,{k:()=>m});var i=a(6029),r=a(55729),n=a(40025),t=a(57414),c=a(45208),s=a(72139),d=a(58360);let l=[{name:"@mantine/core",description:"Core components library: inputs, buttons, overlays, etc."},{name:"@mantine/hooks",description:"Collection of reusable hooks for React applications."},{name:"@mantine/notifications",description:"Notifications system"}],m={type:"code",centered:!0,maxWidth:320,component:function(){let[e,o]=(0,r.useState)(null),a=l.map(e=>(0,i.jsx)(n.s.Card,{className:d.A.root,radius:"md",value:e.name,children:(0,i.jsxs)(t.Y,{wrap:"nowrap",align:"flex-start",children:[(0,i.jsx)(n.s.Indicator,{}),(0,i.jsxs)("div",{children:[(0,i.jsx)(c.E,{className:d.A.label,children:e.name}),(0,i.jsx)(c.E,{className:d.A.description,children:e.description})]})]})},e.name));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.s.Group,{value:e,onChange:o,label:"Pick one package to install",description:"Choose a package that you will need in your application",children:(0,i.jsx)(s.B,{pt:"md",gap:"xs",children:a})}),(0,i.jsxs)(c.E,{fz:"xs",mt:"md",children:["CurrentValue: ",e||"–"]})]})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
    <Radio.Card className={classes.root} radius="md" value={item.name} key={item.name}>
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
        CurrentValue: {value || '\u2013'}
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
`}]}},61400:(e,o,a)=>{a.d(o,{q:()=>t});var i=a(6029),r=a(57414),n=a(40025);let t={type:"code",component:function(){return(0,i.jsxs)(r.Y,{children:[(0,i.jsx)(n.s.Indicator,{}),(0,i.jsx)(n.s.Indicator,{checked:!0}),(0,i.jsx)(n.s.Indicator,{disabled:!0}),(0,i.jsx)(n.s.Indicator,{disabled:!0,checked:!0})]})},code:`
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
`}}}]);