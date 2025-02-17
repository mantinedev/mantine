(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[72524],{10513:(e,t,l)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/fieldset",function(){return l(17209)}])},17209:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>h});var n=l(31085),o=l(71184),d=l(56217),r=l(37173),a=l(90275),i=l(56051),s=l(52022);let u={type:"code",component:function(){return(0,n.jsxs)(r.L,{legend:"Personal information",disabled:!0,children:[(0,n.jsx)(a.k,{label:"Your name",placeholder:"Your name"}),(0,n.jsx)(a.k,{label:"Email",placeholder:"Email",mt:"md"}),(0,n.jsx)(i.Y,{justify:"flex-end",mt:"md",children:(0,n.jsx)(s.$,{children:"Submit"})})]})},maxWidth:500,centered:!0,code:`
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
`};var m=l(85954),c=l(38215);let p=(0,m.P)(c.XZ.Fieldset);function f(e){let t={code:"code",h2:"h2",p:"p",...(0,o.R)(),...e.components},{Demo:l}=t;return l||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsx)(l,{data:d.C}),"\n",(0,n.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"disabled"})," prop to disable all inputs and buttons inside the fieldset:"]}),"\n",(0,n.jsx)(l,{data:u})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(p,{...e,children:(0,n.jsx)(f,{...e})})}},56217:(e,t,l)=>{"use strict";l.d(t,{C:()=>r});var n=l(31085),o=l(37173),d=l(90275);let r={type:"configurator",component:function(e){return(0,n.jsxs)(o.L,{legend:"Personal information",...e,children:[(0,n.jsx)(d.k,{label:"Your name",placeholder:"Your name"}),(0,n.jsx)(d.k,{label:"Email",placeholder:"Email",mt:"md"})]})},code:`
import { Fieldset, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information"{{props}}>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />
    </Fieldset>
  );
}
`,maxWidth:500,centered:!0,controls:[{type:"segmented",prop:"variant",initialValue:"default",libraryValue:"default",data:["default","filled","unstyled"]},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]}},37173:(e,t,l)=>{"use strict";l.d(t,{L:()=>p});var n=l(31085);l(14041);var o=l(33450),d=l(7098),r=l(29686),a=l(69564),i=l(34056),s=l(6754),u={root:"m_e9408a47","root--default":"m_84c9523a","root--filled":"m_ef274e49","root--unstyled":"m_eda993d3",legend:"m_90794832","legend--unstyled":"m_74ca27fe"};let m={variant:"default"},c=(0,d.V)((e,{radius:t})=>({root:{"--fieldset-radius":void 0===t?void 0:(0,o.nJ)(t)}})),p=(0,s.P9)((e,t)=>{let l=(0,r.Y)("Fieldset",m,e),{classNames:o,className:d,style:s,styles:p,unstyled:f,vars:h,legend:x,variant:b,children:j,..._}=l,g=(0,a.I)({name:"Fieldset",classes:u,props:l,className:d,style:s,classNames:o,styles:p,unstyled:f,vars:h,varsResolver:c});return(0,n.jsxs)(i.a,{component:"fieldset",ref:t,variant:b,...g("root",{variant:b}),..._,children:[x&&(0,n.jsx)("legend",{...g("legend",{variant:b}),children:x}),j]})});p.classes=u,p.displayName="@mantine/core/Fieldset"}},e=>{var t=t=>e(e.s=t);e.O(0,[67456,39699,68831,90636,46593,38792],()=>t(10513)),_N_E=e.O()}]);