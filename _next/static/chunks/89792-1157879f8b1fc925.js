"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89792],{4448:(e,o,a)=>{a.d(o,{N:()=>d});var r=a(31085),i=a(14041),n=a(46386),t=a(56051),c=a(93065),s=a(56865);let d={type:"code",centered:!0,maxWidth:320,component:function(){let[e,o]=(0,i.useState)(!1);return(0,r.jsx)(n.s.Card,{className:s.A.root,radius:"md",checked:e,onClick:()=>o(e=>!e),children:(0,r.jsxs)(t.Y,{wrap:"nowrap",align:"flex-start",children:[(0,r.jsx)(n.s.Indicator,{}),(0,r.jsxs)("div",{children:[(0,r.jsx)(c.E,{className:s.A.label,children:"@mantine/core"}),(0,r.jsx)(c.E,{className:s.A.description,children:"Core components library: inputs, buttons, overlays, etc."})]})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`}]}},56865:(e,o,a)=>{a.d(o,{A:()=>r});var r={root:"m_6fb185a7",label:"m_862412cf",description:"m_7b348797"}},5441:(e,o,a)=>{a.d(o,{k:()=>m});var r=a(31085),i=a(14041),n=a(46386),t=a(56051),c=a(93065),s=a(75390),d=a(56865);let l=[{name:"@mantine/core",description:"Core components library: inputs, buttons, overlays, etc."},{name:"@mantine/hooks",description:"Collection of reusable hooks for React applications."},{name:"@mantine/notifications",description:"Notifications system"}],m={type:"code",centered:!0,maxWidth:320,component:function(){let[e,o]=(0,i.useState)(null),a=l.map(e=>(0,r.jsx)(n.s.Card,{className:d.A.root,radius:"md",value:e.name,children:(0,r.jsxs)(t.Y,{wrap:"nowrap",align:"flex-start",children:[(0,r.jsx)(n.s.Indicator,{}),(0,r.jsxs)("div",{children:[(0,r.jsx)(c.E,{className:d.A.label,children:e.name}),(0,r.jsx)(c.E,{className:d.A.description,children:e.description})]})]})},e.name));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.s.Group,{value:e,onChange:o,label:"Pick one package to install",description:"Choose a package that you will need in your application",children:(0,r.jsx)(s.B,{pt:"md",gap:"xs",children:a})}),(0,r.jsxs)(c.E,{fz:"xs",mt:"md",children:["CurrentValue: ",e||"–"]})]})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`}]}},75393:(e,o,a)=>{a.d(o,{q:()=>t});var r=a(31085),i=a(56051),n=a(46386);let t={type:"code",component:function(){return(0,r.jsxs)(i.Y,{children:[(0,r.jsx)(n.s.Indicator,{}),(0,r.jsx)(n.s.Indicator,{checked:!0}),(0,r.jsx)(n.s.Indicator,{disabled:!0}),(0,r.jsx)(n.s.Indicator,{disabled:!0,checked:!0})]})},code:`
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
`}},46386:(e,o,a)=>{a.d(o,{s:()=>$});var r=a(31085),i=a(97567);a(14041);var n=a(33450),t=a(7098),c=a(81754),s=a(51606),d=a(3702),l=a(62554),m=a(29686),p=a(69564),u=a(18315),h=a(34056),v=a(6754),f=a(74969),x=a(46746),g=a(33970),k=a(49128);let[b,y]=(0,k.e)(),[C,j]=(0,k.e)();var w={card:"m_9dc8ae12"};let R={withBorder:!0},N=(0,t.V)((e,{radius:o})=>({card:{"--card-radius":(0,n.nJ)(o)}})),_=(0,v.P9)((e,o)=>{let a=(0,m.Y)("RadioCard",R,e),{classNames:i,className:n,style:t,styles:c,unstyled:s,vars:d,checked:l,mod:u,withBorder:h,value:v,onClick:f,name:k,onKeyDown:b,...j}=a,_=(0,p.I)({name:"RadioCard",classes:w,props:a,className:n,style:t,classNames:i,styles:c,unstyled:s,vars:d,varsResolver:N,rootSelector:"card"}),{dir:z}=(0,x.jH)(),I=y(),A="boolean"==typeof l?l:I?.value===v,G=k||I?.name;return(0,r.jsx)(C,{value:{checked:A},children:(0,r.jsx)(g.N,{ref:o,mod:[{"with-border":h,checked:A},u],..._("card"),...j,role:"radio","aria-checked":A,name:G,onClick:e=>{f?.(e),I?.onChange(v||"")},onKeyDown:e=>{if(b?.(e),["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(e.nativeEvent.code)){e.preventDefault();let o=Array.from(document.querySelectorAll(`[role="radio"][name="${G||"__mantine"}"]`)),a=o.findIndex(o=>o===e.target),r=a+1>=o.length?0:a+1,i=a-1<0?o.length-1:a-1;"ArrowDown"===e.nativeEvent.code&&(o[r].focus(),o[r].click()),"ArrowUp"===e.nativeEvent.code&&(o[i].focus(),o[i].click()),"ArrowLeft"===e.nativeEvent.code&&(o["ltr"===z?i:r].focus(),o["ltr"===z?i:r].click()),"ArrowRight"===e.nativeEvent.code&&(o["ltr"===z?r:i].focus(),o["ltr"===z?r:i].click())}}})})});_.displayName="@mantine/core/RadioCard",_.classes=w;var z=a(82307),I=a(34452),A=a(64971);let G={},D=(0,v.P9)((e,o)=>{let{value:a,defaultValue:n,onChange:t,size:c,wrapperProps:s,children:d,name:l,readOnly:p,...u}=(0,m.Y)("RadioGroup",G,e),h=(0,i.B)(l),[v,f]=(0,z.Z)({value:a,defaultValue:n,finalValue:"",onChange:t});return(0,r.jsx)(b,{value:{value:v,onChange:e=>!p&&f("string"==typeof e?e:e.currentTarget.value),size:c,name:h},children:(0,r.jsx)(I.p.Wrapper,{size:c,ref:o,...s,...u,labelElement:"div",__staticSelector:"RadioGroup",children:(0,r.jsx)(A.F,{role:"radiogroup",children:d})})})});D.classes=I.p.Wrapper.classes,D.displayName="@mantine/core/RadioGroup";var E=a(39735);function T({size:e,style:o,...a}){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 5 5",style:{width:(0,E.D)(e),height:(0,E.D)(e),...o},"aria-hidden":!0,...a,children:(0,r.jsx)("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"currentColor"})})}var S={indicator:"m_717d7ff6",icon:"m_3e4da632","indicator--outline":"m_2980836c"};let Y={icon:T},P=(0,t.V)((e,{radius:o,color:a,size:r,iconColor:i,variant:t,autoContrast:m})=>{let p=(0,c.g)({color:a||e.primaryColor,theme:e}),u=p.isThemeColor&&void 0===p.shade?`var(--mantine-color-${p.color}-outline)`:p.color;return{indicator:{"--radio-size":(0,n.YC)(r,"radio-size"),"--radio-radius":void 0===o?void 0:(0,n.nJ)(o),"--radio-color":"outline"===t?u:(0,s.r)(a,e),"--radio-icon-size":(0,n.YC)(r,"radio-icon-size"),"--radio-icon-color":i?(0,s.r)(i,e):(0,l.v)(m,e)?(0,d.w)({color:a,theme:e,autoContrast:m}):void 0}}}),V=(0,v.P9)((e,o)=>{let a=(0,m.Y)("RadioIndicator",Y,e),{classNames:i,className:n,style:t,styles:c,unstyled:s,vars:d,icon:l,radius:u,color:v,iconColor:f,autoContrast:x,checked:g,mod:k,variant:b,disabled:y,...C}=a,w=(0,p.I)({name:"RadioIndicator",classes:S,props:a,className:n,style:t,classNames:i,styles:c,unstyled:s,vars:d,varsResolver:P,rootSelector:"indicator"}),R=j(),N="boolean"==typeof g?g:R?.checked||!1;return(0,r.jsx)(h.a,{ref:o,...w("indicator",{variant:b}),variant:b,mod:[{checked:N,disabled:y},k],...C,children:(0,r.jsx)(l,{...w("icon")})})});V.displayName="@mantine/core/RadioIndicator",V.classes=S;var B={root:"m_f3f1af94",inner:"m_89c4f5e4",icon:"m_f3ed6b2b",radio:"m_8a3dbb89","radio--outline":"m_1bfe9d39"};let W={labelPosition:"right"},J=(0,t.V)((e,{size:o,radius:a,color:r,iconColor:i,variant:t,autoContrast:m})=>{let p=(0,c.g)({color:r||e.primaryColor,theme:e}),u=p.isThemeColor&&void 0===p.shade?`var(--mantine-color-${p.color}-outline)`:p.color;return{root:{"--radio-size":(0,n.YC)(o,"radio-size"),"--radio-radius":void 0===a?void 0:(0,n.nJ)(a),"--radio-color":"outline"===t?u:(0,s.r)(r,e),"--radio-icon-color":i?(0,s.r)(i,e):(0,l.v)(m,e)?(0,d.w)({color:r,theme:e,autoContrast:m}):void 0,"--radio-icon-size":(0,n.YC)(o,"radio-icon-size")}}}),$=(0,v.P9)((e,o)=>{let a=(0,m.Y)("Radio",W,e),{classNames:n,className:t,style:c,styles:s,unstyled:d,vars:l,id:v,size:x,label:g,labelPosition:k,description:b,error:C,radius:j,color:w,variant:R,disabled:N,wrapperProps:_,icon:z=T,rootRef:I,iconColor:A,onChange:G,mod:D,...E}=a,S=(0,p.I)({name:"Radio",classes:B,props:a,className:t,style:c,classNames:n,styles:s,unstyled:d,vars:l,varsResolver:J}),Y=y(),P=Y?.size??x,V=a.size?x:P,{styleProps:$,rest:q}=(0,u.j)(E),F=(0,i.B)(v),L=Y?{checked:Y.value===q.value,name:q.name??Y.name,onChange:e=>{Y.onChange(e),G?.(e)}}:{};return(0,r.jsx)(f.I,{...S("root"),__staticSelector:"Radio",__stylesApiProps:a,id:F,size:V,labelPosition:k,label:g,description:b,error:C,disabled:N,classNames:n,styles:s,unstyled:d,"data-checked":L.checked||void 0,variant:R,ref:I,mod:D,...$,..._,children:(0,r.jsxs)(h.a,{...S("inner"),mod:{"label-position":k},children:[(0,r.jsx)(h.a,{...S("radio",{focusable:!0,variant:R}),onChange:G,...q,...L,component:"input",mod:{error:!!C},ref:o,id:F,disabled:N,type:"radio"}),(0,r.jsx)(z,{...S("icon"),"aria-hidden":!0})]})})});$.classes=B,$.displayName="@mantine/core/Radio",$.Group=D,$.Card=_,$.Indicator=V}}]);