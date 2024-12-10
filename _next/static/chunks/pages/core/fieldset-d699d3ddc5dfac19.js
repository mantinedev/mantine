(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58568],{74791:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/fieldset",function(){return n(17146)}])},17146:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var l=n(52322),o=n(45392),r=n(56592),i=n(46325),d=n(74770),a=n(93010),s=n(39629);let u={type:"code",component:function(){return(0,l.jsxs)(i.p,{legend:"Personal information",disabled:!0,children:[(0,l.jsx)(d.o,{label:"Your name",placeholder:"Your name"}),(0,l.jsx)(d.o,{label:"Email",placeholder:"Email",mt:"md"}),(0,l.jsx)(a.Z,{justify:"flex-end",mt:"md",children:(0,l.jsx)(s.z,{children:"Submit"})})]})},maxWidth:500,centered:!0,code:`
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
`};var c=n(25071),m=n(15019);let p=(0,c.A)(m.us.Fieldset);function f(e){let t={code:"code",h2:"h2",p:"p",...(0,o.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n,{data:r.j}),"\n",(0,l.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"disabled"})," prop to disable all inputs and buttons inside the fieldset:"]}),"\n",(0,l.jsx)(n,{data:u})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(p,{...e,children:(0,l.jsx)(f,{...e})})}},56592:function(e,t,n){"use strict";n.d(t,{j:function(){return i}});var l=n(52322),o=n(46325),r=n(74770);let i={type:"configurator",component:function(e){return(0,l.jsxs)(o.p,{legend:"Personal information",...e,children:[(0,l.jsx)(r.o,{label:"Your name",placeholder:"Your name"}),(0,l.jsx)(r.o,{label:"Email",placeholder:"Email",mt:"md"})]})},code:`
import { Fieldset, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information"{{props}}>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />
    </Fieldset>
  );
}
`,maxWidth:500,centered:!0,controls:[{type:"segmented",prop:"variant",initialValue:"default",libraryValue:"default",data:["default","filled","unstyled"]},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]}},46325:function(e,t,n){"use strict";n.d(t,{p:function(){return p}});var l=n(52322);n(2784);var o=n(91482),r=n(11200),i=n(38483),d=n(46690),a=n(28559),s=n(82027),u={root:"m_e9408a47","root--default":"m_84c9523a","root--filled":"m_ef274e49","root--unstyled":"m_eda993d3",legend:"m_90794832","legend--unstyled":"m_74ca27fe"};let c={variant:"default"},m=(0,r.Z)((e,{radius:t})=>({root:{"--fieldset-radius":void 0===t?void 0:(0,o.H5)(t)}})),p=(0,s.d5)((e,t)=>{let n=(0,i.w)("Fieldset",c,e),{classNames:o,className:r,style:s,styles:p,unstyled:f,vars:h,legend:x,variant:j,children:b,..._}=n,g=(0,d.y)({name:"Fieldset",classes:u,props:n,className:r,style:s,classNames:o,styles:p,unstyled:f,vars:h,varsResolver:m});return(0,l.jsxs)(a.x,{component:"fieldset",ref:t,variant:j,...g("root",{variant:j}),..._,children:[x&&(0,l.jsx)("legend",{...g("legend",{variant:j}),children:x}),b]})});p.classes=u,p.displayName="@mantine/core/Fieldset"}},function(e){e.O(0,[61177,66748,11340,92888,49774,40179],function(){return e(e.s=74791)}),_N_E=e.O()}]);