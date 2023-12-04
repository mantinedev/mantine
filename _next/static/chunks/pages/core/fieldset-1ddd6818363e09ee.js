(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8568],{49391:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/fieldset",function(){return n(36612)}])},36612:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var l=n(24246),o=n(71670),r=n(3916),a=n(30289),i=n(45679),d=n(27378),u=n(40106),s=n(7033),m=n(22971),c=n(8671);let p=`
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
`,f={type:"code",component:function(){return d.createElement(u.p,{legend:"Personal information",disabled:!0},d.createElement(s.o,{label:"Your name",placeholder:"Your name"}),d.createElement(s.o,{label:"Email",placeholder:"Email",mt:"md"}),d.createElement(m.Z,{justify:"flex-end",mt:"md"},d.createElement(c.z,null,"Submit")))},maxWidth:500,centered:!0,code:p},h=(0,r.A)(a.us.Fieldset);function E(e){let t={code:"code",h2:"h2",p:"p",...(0,o.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,l.jsx)(n,{data:i.j}),"\n",(0,l.jsx)(t.h2,{id:"disabled",children:"Disabled"}),"\n",(0,l.jsxs)(t.p,{children:["Set ",(0,l.jsx)(t.code,{children:"disabled"})," prop to disable all inputs and buttons inside the fieldset:"]}),"\n",(0,l.jsx)(n,{data:f})]})}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,l.jsx)(h,{...e,children:(0,l.jsx)(E,{...e})})}},45679:function(e,t,n){"use strict";n.d(t,{j:function(){return i}});var l=n(27378),o=n(40106),r=n(7033);let a=`
import { Fieldset } from '@mantine/core';

function Demo() {
  return (
    <Fieldset legend="Personal information"{{props}}>
      <TextInput label="Your name" placeholder="Your name" />
      <TextInput label="Email" placeholder="Email" mt="md" />
    </Fieldset>
  );
}
`,i={type:"configurator",component:function(e){return l.createElement(o.p,{legend:"Personal information",...e},l.createElement(r.o,{label:"Your name",placeholder:"Your name"}),l.createElement(r.o,{label:"Email",placeholder:"Email",mt:"md"}))},code:a,maxWidth:500,centered:!0,controls:[{type:"segmented",prop:"variant",initialValue:"default",libraryValue:"default",data:["default","filled","unstyled"]},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"}]}},40106:function(e,t,n){"use strict";n.d(t,{p:function(){return p}});var l=n(27378),o=n(92082),r=n(83453),a=n(96739),i=n(6231),d=n(56589),u=n(20410),s={root:"m-e9408a47","root--default":"m-84c9523a","root--filled":"m-ef274e49","root--unstyled":"m-eda993d3",legend:"m-90794832","legend--unstyled":"m-74ca27fe"};let m={variant:"default"},c=(0,r.Z)((e,{radius:t})=>({root:{"--fieldset-radius":void 0===t?void 0:(0,o.H5)(t)}})),p=(0,u.d)((e,t)=>{let n=(0,a.w)("Fieldset",m,e),{classNames:o,className:r,style:u,styles:p,unstyled:f,vars:h,legend:E,variant:b,children:x,...g}=n,y=(0,i.y)({name:"Fieldset",classes:s,props:n,className:r,style:u,classNames:o,styles:p,unstyled:f,vars:h,varsResolver:c});return l.createElement(d.x,{component:"fieldset",ref:t,variant:b,...y("root",{variant:b}),...g},E&&l.createElement("legend",{...y("legend",{variant:b})},E),x)});p.classes=s,p.displayName="@mantine/core/Fieldset"}},function(e){e.O(0,[370,5819,2775,9774,2888,179],function(){return e(e.s=49391)}),_N_E=e.O()}]);