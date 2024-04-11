(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58568],{74791:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/fieldset",function(){return n(17146)}])},17146:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var l=n(52322),o=n(45392),r=n(56592),a=n(2784),i=n(46325),d=n(74770),u=n(93010),s=n(17115);let m=`
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
`,c={type:"code",component:function(){return a.createElement(i.p,{legend:"Personal information",disabled:!0},a.createElement(d.o,{label:"Your name",placeholder:"Your name"}),a.createElement(d.o,{label:"Email",placeholder:"Email",mt:"md"}),a.createElement(u.Z,{justify:"flex-end",mt:"md"},a.createElement(s.z,null,"Submit")))},maxWidth:500,centered:!0,code:m};var p=n(79016),f=n(33638);let h=(0,p.A)(f.us.Fieldset);function E(e){let t={code:"code",h2:"h2",p:"p",...(0,o.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n,{data:r.j}),"\n",(0,l.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"disabled"})," prop to disable all inputs and buttons inside the fieldset:"]}),"\n",(0,l.jsx)(n,{data:c})]})}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(h,{...e,children:(0,l.jsx)(E,{...e})})}},56592:function(e,t,n){"use strict";n.d(t,{j:function(){return i}});var l=n(2784),o=n(46325),r=n(74770);let a=`
import { Fieldset, TextInput } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information"{{props}}>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />
    </Fieldset>
  );
}
`,i={type:"configurator",component:function(e){return l.createElement(o.p,{legend:"Personal information",...e},l.createElement(r.o,{label:"Your name",placeholder:"Your name"}),l.createElement(r.o,{label:"Email",placeholder:"Email",mt:"md"}))},code:a,maxWidth:500,centered:!0,controls:[{type:"segmented",prop:"variant",initialValue:"default",libraryValue:"default",data:["default","filled","unstyled"]},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]}},46325:function(e,t,n){"use strict";n.d(t,{p:function(){return p}});var l=n(2784),o=n(91482),r=n(11200),a=n(38483),i=n(62378),d=n(28559),u=n(82027),s={root:"m_e9408a47","root--default":"m_84c9523a","root--filled":"m_ef274e49","root--unstyled":"m_eda993d3",legend:"m_90794832","legend--unstyled":"m_74ca27fe"};let m={variant:"default"},c=(0,r.Z)((e,{radius:t})=>({root:{"--fieldset-radius":void 0===t?void 0:(0,o.H5)(t)}})),p=(0,u.d)((e,t)=>{let n=(0,a.w)("Fieldset",m,e),{classNames:o,className:r,style:u,styles:p,unstyled:f,vars:h,legend:E,variant:b,children:x,..._}=n,g=(0,i.y)({name:"Fieldset",classes:s,props:n,className:r,style:u,classNames:o,styles:p,unstyled:f,vars:h,varsResolver:c});return l.createElement(d.x,{component:"fieldset",ref:t,variant:b,...g("root",{variant:b}),..._},E&&l.createElement("legend",{...g("legend",{variant:b})},E),x)});p.classes=s,p.displayName="@mantine/core/Fieldset"}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=74791)}),_N_E=e.O()}]);