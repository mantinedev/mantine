(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,l)=>{let i={};for(var o in e)t(i,o,{get:e[o],enumerable:!0});return l||t(i,Symbol.toStringTag,{value:"Module"}),i}])},89361,e=>{"use strict";var t=e.i(433512),l=e.i(481178),i=e.i(44091),o=e.i(391466),n=e.i(275519),r=e.i(232471),s={root:"m_e9408a47","root--default":"m_84c9523a","root--filled":"m_ef274e49","root--unstyled":"m_eda993d3",legend:"m_90794832","legend--unstyled":"m_74ca27fe"},a=e.i(391398);let d={variant:"default"},u=(0,l.createVarsResolver)((e,{radius:l})=>({root:{"--fieldset-radius":void 0===l?void 0:(0,t.getRadius)(l)}})),m=(0,n.factory)(e=>{let t=(0,i.useProps)("Fieldset",d,e),{classNames:l,className:n,style:m,styles:c,unstyled:p,vars:h,legend:f,variant:x,children:b,attributes:j,...g}=t,_=(0,o.useStyles)({name:"Fieldset",classes:s,props:t,className:n,style:m,classNames:l,styles:c,unstyled:p,attributes:j,vars:h,varsResolver:u});return(0,a.jsxs)(r.Box,{component:"fieldset",variant:x,..._("root",{variant:x}),...g,children:[f&&(0,a.jsx)("legend",{..._("legend",{variant:x}),children:f}),b]})});m.classes=s,m.varsResolver=u,m.displayName="@mantine/core/Fieldset",e.s(["Fieldset",0,m],89361)},863767,e=>{"use strict";var t=e.i(648863),l=e.i(89361),i=e.i(841209),o=e.i(391398);let n={type:"configurator",component:function(e){return(0,o.jsxs)(l.Fieldset,{legend:"Personal information",...e,children:[(0,o.jsx)(i.TextInput,{label:"Your name",placeholder:"Your name"}),(0,o.jsx)(i.TextInput,{label:"Email",placeholder:"Email",mt:"md"})]})},code:`
import { Fieldset, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information"{{props}}>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />
    </Fieldset>
  );
}
`,maxWidth:500,centered:!0,controls:[{type:"segmented",prop:"variant",initialValue:"default",libraryValue:"default",data:["default","filled","unstyled"]},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"}]};var r=e.i(485108),s=e.i(725695);let a={type:"code",component:function(){return(0,o.jsxs)(l.Fieldset,{legend:"Personal information",disabled:!0,children:[(0,o.jsx)(i.TextInput,{label:"Your name",placeholder:"Your name"}),(0,o.jsx)(i.TextInput,{label:"Email",placeholder:"Email",mt:"md"}),(0,o.jsx)(s.Group,{justify:"flex-end",mt:"md",children:(0,o.jsx)(r.Button,{children:"Submit"})})]})},maxWidth:500,centered:!0,code:`
import { Fieldset, TextInput, Button, Group } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information" disabled>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />

      <Group justify="flex-end" mt="md">
        <Button>Submit</Button>
      </Group>
    </Fieldset>
  );
}
`};var d=(0,t.__exportAll)({disabled:()=>a,usage:()=>n});e.s(["FieldsetDemos",0,d],863767)},403184,e=>{"use strict";var t=e.i(391398),l=e.i(38856),i=e.i(863767);e.i(603441);var o=e.i(62558);e.i(457450);var n=e.i(418026);let r=(0,o.Layout)(n.MDX_DATA.Fieldset);function s(e){let o={code:"code",h2:"h2",p:"p",...(0,l.useMDXComponents)(),...e.components},{Demo:n}=o;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n,{data:i.FieldsetDemos.usage}),"\n",(0,t.jsx)(o.h2,{id:"disabled",children:"Disabled"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.code,{children:"disabled"})," prop disables all inputs and buttons inside the fieldset:"]}),"\n",(0,t.jsx)(n,{data:i.FieldsetDemos.disabled})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(r,{...e,children:(0,t.jsx)(s,{...e})})}])},486753,(e,t,l)=>{let i="/core/fieldset";(window.__NEXT_P=window.__NEXT_P||[]).push([i,()=>e.r(403184)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([i])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);