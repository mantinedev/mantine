"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7763],{9380:function(e,o,a){a.d(o,{I:function(){return d}});var r=a(52322),i=a(2784),n=a(54171),t=a(93010),c=a(8582),s=a(34994);let d={type:"code",centered:!0,maxWidth:320,component:function(){let[e,o]=(0,i.useState)(!1);return(0,r.jsx)(n.Y.Card,{className:s.Z.root,radius:"md",checked:e,onClick:()=>o(e=>!e),children:(0,r.jsxs)(t.Z,{wrap:"nowrap",align:"flex-start",children:[(0,r.jsx)(n.Y.Indicator,{}),(0,r.jsxs)("div",{children:[(0,r.jsx)(c.x,{className:s.Z.label,children:"@mantine/core"}),(0,r.jsx)(c.x,{className:s.Z.description,children:"Core components library: inputs, buttons, overlays, etc."})]})]})})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`}]}},34994:function(e,o,a){a.d(o,{Z:function(){return r}});var r={root:"m_6fb185a7",label:"m_862412cf",description:"m_7b348797"}},70333:function(e,o,a){a.d(o,{x:function(){return m}});var r=a(52322),i=a(2784),n=a(54171),t=a(93010),c=a(8582),s=a(65438),d=a(34994);let l=[{name:"@mantine/core",description:"Core components library: inputs, buttons, overlays, etc."},{name:"@mantine/hooks",description:"Collection of reusable hooks for React applications."},{name:"@mantine/notifications",description:"Notifications system"}],m={type:"code",centered:!0,maxWidth:320,component:function(){let[e,o]=(0,i.useState)(null),a=l.map(e=>(0,r.jsx)(n.Y.Card,{className:d.Z.root,radius:"md",value:e.name,children:(0,r.jsxs)(t.Z,{wrap:"nowrap",align:"flex-start",children:[(0,r.jsx)(n.Y.Indicator,{}),(0,r.jsxs)("div",{children:[(0,r.jsx)(c.x,{className:d.Z.label,children:e.name}),(0,r.jsx)(c.x,{className:d.Z.description,children:e.description})]})]})},e.name));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.Y.Group,{value:e,onChange:o,label:"Pick one package to install",description:"Choose a package that you will need in your application",children:(0,r.jsx)(s.K,{pt:"md",gap:"xs",children:a})}),(0,r.jsxs)(c.x,{fz:"xs",mt:"md",children:["CurrentValue: ",e||"–"]})]})},defaultExpanded:!1,code:[{fileName:"Demo.tsx",language:"tsx",code:`
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
`}]}},45992:function(e,o,a){a.d(o,{_:function(){return t}});var r=a(52322),i=a(93010),n=a(54171);let t={type:"code",component:function(){return(0,r.jsxs)(i.Z,{children:[(0,r.jsx)(n.Y.Indicator,{}),(0,r.jsx)(n.Y.Indicator,{checked:!0}),(0,r.jsx)(n.Y.Indicator,{disabled:!0}),(0,r.jsx)(n.Y.Indicator,{disabled:!0,checked:!0})]})},code:`
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
`}},54171:function(e,o,a){a.d(o,{Y:function(){return $}});var r=a(52322),i=a(66178);a(2784);var n=a(91482),t=a(11200),c=a(46403),s=a(13588),d=a(39568),l=a(90006),m=a(38483),u=a(46690),p=a(97072),f=a(28559),h=a(82027),v=a(50569),x=a(89027),g=a(63409),k=a(75336);let[b,y]=(0,k.V)(),[C,w]=(0,k.V)();var R={card:"m_9dc8ae12"};let j={withBorder:!0},_=(0,t.Z)((e,{radius:o})=>({card:{"--card-radius":(0,n.H5)(o)}})),N=(0,h.d5)((e,o)=>{let a=(0,m.w)("RadioCard",j,e),{classNames:i,className:n,style:t,styles:c,unstyled:s,vars:d,checked:l,mod:p,withBorder:f,value:h,onClick:v,name:k,onKeyDown:b,...w}=a,N=(0,u.y)({name:"RadioCard",classes:R,props:a,className:n,style:t,classNames:i,styles:c,unstyled:s,vars:d,varsResolver:_,rootSelector:"card"}),{dir:z}=(0,x.gm)(),I=y(),G="boolean"==typeof l?l:I?.value===h,T=k||I?.name;return(0,r.jsx)(C,{value:{checked:G},children:(0,r.jsx)(g.k,{ref:o,mod:[{"with-border":f,checked:G},p],...N("card"),...w,role:"radio","aria-checked":G,name:T,onClick:e=>{v?.(e),I?.onChange(h||"")},onKeyDown:e=>{if(b?.(e),["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(e.nativeEvent.code)){e.preventDefault();let o=Array.from(document.querySelectorAll(`[role="radio"][name="${T||"__mantine"}"]`)),a=o.findIndex(o=>o===e.target),r=a+1>=o.length?0:a+1,i=a-1<0?o.length-1:a-1;"ArrowDown"===e.nativeEvent.code&&(o[r].focus(),o[r].click()),"ArrowUp"===e.nativeEvent.code&&(o[i].focus(),o[i].click()),"ArrowLeft"===e.nativeEvent.code&&(o["ltr"===z?i:r].focus(),o["ltr"===z?i:r].click()),"ArrowRight"===e.nativeEvent.code&&(o["ltr"===z?r:i].focus(),o["ltr"===z?r:i].click())}}})})});N.displayName="@mantine/core/RadioCard",N.classes=R;var z=a(9341),I=a(6941),G=a(62770);let T={},S=(0,h.d5)((e,o)=>{let{value:a,defaultValue:n,onChange:t,size:c,wrapperProps:s,children:d,name:l,readOnly:u,...p}=(0,m.w)("RadioGroup",T,e),f=(0,i.M)(l),[h,v]=(0,z.C)({value:a,defaultValue:n,finalValue:"",onChange:t});return(0,r.jsx)(b,{value:{value:h,onChange:e=>!u&&v("string"==typeof e?e:e.currentTarget.value),size:c,name:f},children:(0,r.jsx)(I.I.Wrapper,{size:c,ref:o,...s,...p,labelElement:"div",__staticSelector:"RadioGroup",children:(0,r.jsx)(G.m,{role:"radiogroup",children:d})})})});S.classes=I.I.Wrapper.classes,S.displayName="@mantine/core/RadioGroup";var Z=a(58898);function D({size:e,style:o,...a}){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 5 5",style:{width:(0,Z.h)(e),height:(0,Z.h)(e),...o},"aria-hidden":!0,...a,children:(0,r.jsx)("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"currentColor"})})}var E={indicator:"m_717d7ff6",icon:"m_3e4da632","indicator--outline":"m_2980836c"};let A={icon:D},Y=(0,t.Z)((e,{radius:o,color:a,size:r,iconColor:i,variant:t,autoContrast:m})=>{let u=(0,c.E)({color:a||e.primaryColor,theme:e}),p=u.isThemeColor&&void 0===u.shade?`var(--mantine-color-${u.color}-outline)`:u.color;return{indicator:{"--radio-size":(0,n.ap)(r,"radio-size"),"--radio-radius":void 0===o?void 0:(0,n.H5)(o),"--radio-color":"outline"===t?p:(0,s.p)(a,e),"--radio-icon-size":(0,n.ap)(r,"radio-icon-size"),"--radio-icon-color":i?(0,s.p)(i,e):(0,l.o)(m,e)?(0,d.R)({color:a,theme:e,autoContrast:m}):void 0}}}),V=(0,h.d5)((e,o)=>{let a=(0,m.w)("RadioIndicator",A,e),{classNames:i,className:n,style:t,styles:c,unstyled:s,vars:d,icon:l,radius:p,color:h,iconColor:v,autoContrast:x,checked:g,mod:k,variant:b,disabled:y,...C}=a,R=(0,u.y)({name:"RadioIndicator",classes:E,props:a,className:n,style:t,classNames:i,styles:c,unstyled:s,vars:d,varsResolver:Y,rootSelector:"indicator"}),j=w(),_="boolean"==typeof g?g:j?.checked||!1;return(0,r.jsx)(f.x,{ref:o,...R("indicator",{variant:b}),variant:b,mod:[{checked:_,disabled:y},k],...C,children:(0,r.jsx)(l,{...R("icon")})})});V.displayName="@mantine/core/RadioIndicator",V.classes=E;var P={root:"m_f3f1af94",inner:"m_89c4f5e4",icon:"m_f3ed6b2b",radio:"m_8a3dbb89","radio--outline":"m_1bfe9d39"};let W={labelPosition:"right"},H=(0,t.Z)((e,{size:o,radius:a,color:r,iconColor:i,variant:t,autoContrast:m})=>{let u=(0,c.E)({color:r||e.primaryColor,theme:e}),p=u.isThemeColor&&void 0===u.shade?`var(--mantine-color-${u.color}-outline)`:u.color;return{root:{"--radio-size":(0,n.ap)(o,"radio-size"),"--radio-radius":void 0===a?void 0:(0,n.H5)(a),"--radio-color":"outline"===t?p:(0,s.p)(r,e),"--radio-icon-color":i?(0,s.p)(i,e):(0,l.o)(m,e)?(0,d.R)({color:r,theme:e,autoContrast:m}):void 0,"--radio-icon-size":(0,n.ap)(o,"radio-icon-size")}}}),$=(0,h.d5)((e,o)=>{let a=(0,m.w)("Radio",W,e),{classNames:n,className:t,style:c,styles:s,unstyled:d,vars:l,id:h,size:x,label:g,labelPosition:k,description:b,error:C,radius:w,color:R,variant:j,disabled:_,wrapperProps:N,icon:z=D,rootRef:I,iconColor:G,onChange:T,mod:S,...Z}=a,E=(0,u.y)({name:"Radio",classes:P,props:a,className:t,style:c,classNames:n,styles:s,unstyled:d,vars:l,varsResolver:H}),A=y(),Y=A?.size??x,V=a.size?x:Y,{styleProps:$,rest:B}=(0,p.c)(Z),K=(0,i.M)(h),L=A?{checked:A.value===B.value,name:B.name??A.name,onChange:e=>{A.onChange(e),T?.(e)}}:{};return(0,r.jsx)(v.Z,{...E("root"),__staticSelector:"Radio",__stylesApiProps:a,id:K,size:V,labelPosition:k,label:g,description:b,error:C,disabled:_,classNames:n,styles:s,unstyled:d,"data-checked":L.checked||void 0,variant:j,ref:I,mod:S,...$,...N,children:(0,r.jsxs)(f.x,{...E("inner"),mod:{"label-position":k},children:[(0,r.jsx)(f.x,{...E("radio",{focusable:!0,variant:j}),onChange:T,...B,...L,component:"input",mod:{error:!!C},ref:o,id:K,disabled:_,type:"radio"}),(0,r.jsx)(z,{...E("icon"),"aria-hidden":!0})]})})});$.classes=P,$.displayName="@mantine/core/Radio",$.Group=S,$.Card=N,$.Indicator=V}}]);