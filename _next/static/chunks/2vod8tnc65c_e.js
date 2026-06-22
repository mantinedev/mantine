(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,n)=>{let r={};for(var a in e)t(r,a,{get:e[a],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:"Module"}),r}])},960831,e=>{"use strict";e.s(["inputControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}],"inputOnlyControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],"inputWrapperOnlyControls",0,[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}]])},229564,e=>{"use strict";var t=e.i(648863),n=e.i(960831),r=e.i(647114),a=e.i(391398);let s={type:"configurator",component:function(e){return(0,a.jsx)(r.MaskInput,{...e,mask:"(999) 999-9999",placeholder:"(___) ___-____"})},code:`
import { MaskInput } from '@mantine/core';


function Demo() {
  return (
    <MaskInput
      {{props}}
      mask="(999) 999-9999"
      placeholder="(___) ___-____"
    />
  );
}
`,centered:!0,maxWidth:340,controls:n.inputControls},o={type:"code",code:`
import { MaskInput } from '@mantine/core';

function Demo() {
  return (
    <MaskInput
      label="Credit card"
      placeholder="____ ____ ____ ____"
      mask="9999 9999 9999 9999"
      modify={(value) => {
        if (/^3[47]/.test(value)) {
          return { mask: '9999 999999 99999' };
        }
        return undefined;
      }}
    />
  );
}
`,component:function(){return(0,a.jsx)(r.MaskInput,{label:"Credit card",placeholder:"____ ____ ____ ____",mask:"9999 9999 9999 9999",modify:e=>{if(/^3[47]/.test(e))return{mask:"9999 999999 99999"}}})},centered:!0,maxWidth:340},i={type:"code",code:`
import { MaskInput } from '@mantine/core';

function Demo() {
  return (
    <MaskInput
      label="Hex color"
      placeholder="#______"
      mask="#hhhhhh"
      tokens={{ h: /[0-9a-fA-F]/ }}
    />
  );
}
`,component:function(){return(0,a.jsx)(r.MaskInput,{label:"Hex color",placeholder:"#______",mask:"#hhhhhh",tokens:{h:/[0-9a-fA-F]/}})},centered:!0,maxWidth:340},l={type:"code",code:`
import { MaskInput } from '@mantine/core';

function Demo() {
  return (
    <MaskInput
      label="Time (HH:MM)"
      placeholder="__:__"
      mask={[/[0-2]/, /\\\\d/, ':', /[0-5]/, /\\\\d/]}
    />
  );
}
`,component:function(){return(0,a.jsx)(r.MaskInput,{label:"Time (HH:MM)",placeholder:"__:__",mask:[/[0-2]/,/\d/,":",/[0-5]/,/\d/]})},centered:!0,maxWidth:340};var c=e.i(883364);let d={type:"code",code:`
import { MaskInput, Text } from '@mantine/core';
import { formatMask, isMaskComplete } from '@mantine/hooks';

function Demo() {
  return (
    <>
      <MaskInput
        label="Promo code"
        placeholder="AAA-9999"
        mask="AAA-9999"
        transform={(char) => char.toUpperCase()}
        slotChar="XXX-0000"
      />
      <Text size="sm" mt="sm" c="dimmed">
        Type lowercase letters – they will be auto-uppercased
      </Text>
    </>
  );
}
`,component:function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.MaskInput,{label:"Promo code",placeholder:"AAA-9999",mask:"AAA-9999",transform:e=>e.toUpperCase(),slotChar:"XXX-0000"}),(0,a.jsx)(c.Text,{size:"sm",mt:"sm",c:"dimmed",children:"Type lowercase letters – they will be auto-uppercased"})]})},centered:!0,maxWidth:340},u={type:"code",code:`
import { MaskInput } from '@mantine/core';

function Demo() {
  return (
    <MaskInput
      label="Phone number"
      placeholder="(___) ___-____"
      mask="(999) 999-9999"
      disabled
    />
  );
}
`,component:function(){return(0,a.jsx)(r.MaskInput,{label:"Phone number",placeholder:"(___) ___-____",mask:"(999) 999-9999",disabled:!0})},centered:!0,maxWidth:340},p={type:"code",code:`
import { MaskInput } from '@mantine/core';

function Demo() {
  return (
    <MaskInput
      label="Phone number"
      placeholder="(___) ___-____"
      mask="(999) 999-9999"
      error="Invalid phone number"
    />
  );
}
`,component:function(){return(0,a.jsx)(r.MaskInput,{label:"Phone number",placeholder:"(___) ___-____",mask:"(999) 999-9999",error:"Invalid phone number"})},centered:!0,maxWidth:340},m={type:"code",code:`
import { MaskInput } from '@mantine/core';

function Demo() {
  return (
    <MaskInput
      label="Phone number"
      placeholder="(___) ___-____"
      mask="(999) 999-9999"
      success="Looks good!"
    />
  );
}
`,component:function(){return(0,a.jsx)(r.MaskInput,{label:"Phone number",placeholder:"(___) ___-____",mask:"(999) 999-9999",success:"Looks good!"})},centered:!0,maxWidth:340};var h=e.i(191788),_=e.i(485108),x=e.i(725695);let k={type:"code",component:function(){let e=(0,h.useRef)(null);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.MaskInput,{label:"Phone number",placeholder:"(___) ___-____",mask:"(999) 999-9999",resetRef:e}),(0,a.jsx)(x.Group,{mt:"md",children:(0,a.jsx)(_.Button,{onClick:()=>e.current?.(),children:"Reset"})})]})},code:`
import { useRef } from 'react';
import { MaskInput, Button, Group } from '@mantine/core';

function Demo() {
  const resetRef = useRef<() => void>(null);

  return (
    <>
      <MaskInput
        label="Phone number"
        placeholder="(___) ___-____"
        mask="(999) 999-9999"
        resetRef={resetRef}
      />

      <Group mt="md">
        <Button onClick={() => resetRef.current?.()}>Reset</Button>
      </Group>
    </>
  );
}
`,maxWidth:340,centered:!0};var f=e.i(582498);let j={type:"code",component:function(){let e=(0,f.useForm)({mode:"uncontrolled",initialValues:{phone:""}});return(0,a.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,a.jsx)(r.MaskInput,{mask:"(999) 999-9999",placeholder:"(___) ___-____",label:"Phone",onChangeRaw:t=>e.setFieldValue("phone",t,{forceUpdate:!1})}),(0,a.jsx)(_.Button,{type:"submit",mt:"md",children:"Submit"})]})},code:`
import { Button, MaskInput } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { phone: '' },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <MaskInput
        mask="(999) 999-9999"
        placeholder="(___) ___-____"
        label="Phone"
        onChangeRaw={(raw) => form.setFieldValue('phone', raw, { forceUpdate: false })}
      />

      <Button type="submit" mt="md">
        Submit
      </Button>
    </form>
  );
}
`,maxWidth:340,centered:!0};var b=(0,t.__exportAll)({customTokens:()=>i,disabled:()=>u,dynamic:()=>o,error:()=>p,regex:()=>l,resetRef:()=>k,success:()=>m,transform:()=>d,usage:()=>s,withUseForm:()=>j});e.s(["MaskInputDemos",0,b],229564)},663037,e=>{"use strict";var t=e.i(391398),n=e.i(38856),r=e.i(229564);e.i(603441);var a=e.i(62558);e.i(457450);var s=e.i(418026);let o=(0,a.Layout)(s.MDX_DATA.MaskInput);function i(e){let a={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.useMDXComponents)(),...e.components},{Demo:s}=a;return s||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaskInput"})," is a wrapper around ",(0,t.jsx)(a.a,{href:"/hooks/use-mask",children:"useMask"})," hook that provides all standard input\nprops (label, description, error, etc.) and supports all mask options. The mask string defines\nthe expected format using token characters (",(0,t.jsx)(a.code,{children:"9"})," for digits, ",(0,t.jsx)(a.code,{children:"a"})," for letters, etc.)."]}),"\n",(0,t.jsx)(s,{data:r.MaskInputDemos.usage}),"\n",(0,t.jsx)(a.h2,{id:"dynamic-mask",children:"Dynamic mask"}),"\n",(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.code,{children:"modify"})," option to change the mask based on the current input value.\nThis example switches between standard and American Express credit card formats:"]}),"\n",(0,t.jsx)(s,{data:r.MaskInputDemos.dynamic}),"\n",(0,t.jsx)(a.h2,{id:"custom-tokens",children:"Custom tokens"}),"\n",(0,t.jsxs)(a.p,{children:["Override or extend the built-in token map with the ",(0,t.jsx)(a.code,{children:"tokens"})," option:"]}),"\n",(0,t.jsx)(s,{data:r.MaskInputDemos.customTokens}),"\n",(0,t.jsx)(a.h2,{id:"regex-array-format",children:"Regex array format"}),"\n",(0,t.jsxs)(a.p,{children:["For complex masks where built-in tokens are not enough, pass an array of\nstring literals and ",(0,t.jsx)(a.code,{children:"RegExp"})," objects:"]}),"\n",(0,t.jsx)(s,{data:r.MaskInputDemos.regex}),"\n",(0,t.jsx)(a.h2,{id:"transform",children:"Transform"}),"\n",(0,t.jsxs)(a.p,{children:["Use the ",(0,t.jsx)(a.code,{children:"transform"})," option to convert each character before validation.\nThis example auto-uppercases input so the ",(0,t.jsx)(a.code,{children:"A"})," token accepts lowercase letters:"]}),"\n",(0,t.jsx)(s,{data:r.MaskInputDemos.transform}),"\n",(0,t.jsx)(a.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,t.jsx)(s,{data:r.MaskInputDemos.disabled}),"\n",(0,t.jsx)(a.h2,{id:"error-state",children:"Error state"}),"\n",(0,t.jsx)(s,{data:r.MaskInputDemos.error}),"\n",(0,t.jsx)(a.h2,{id:"success-state",children:"Success state"}),"\n",(0,t.jsx)(s,{data:r.MaskInputDemos.success}),"\n",(0,t.jsx)(a.h2,{id:"reset-value",children:"Reset value"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaskInput"})," is uncontrolled internally – setting ",(0,t.jsx)(a.code,{children:"value"})," from a parent will not clear it.\nUse the ",(0,t.jsx)(a.code,{children:"resetRef"})," prop to get a function that clears the input value imperatively:"]}),"\n",(0,t.jsx)(s,{data:r.MaskInputDemos.resetRef}),"\n",(0,t.jsx)(a.h2,{id:"with-use-form",children:"With use-form"}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.code,{children:"MaskInput"})," is uncontrolled by design – it manages its own DOM value internally.\nTo integrate with ",(0,t.jsx)(a.a,{href:"/form/use-form",children:"use-form"}),", pass the initial value via ",(0,t.jsx)(a.code,{children:"defaultValue"}),"\nand use the ",(0,t.jsx)(a.code,{children:"onChangeRaw"})," callback to write the raw (unmasked) value to form state.\nIn uncontrolled form mode, pass ",(0,t.jsx)(a.code,{children:"{ forceUpdate: false }"})," to ",(0,t.jsx)(a.code,{children:"form.setFieldValue"})," so the\ninput is not remounted on every keystroke:"]}),"\n",(0,t.jsx)(s,{data:r.MaskInputDemos.withUseForm}),"\n",(0,t.jsx)(a.h2,{id:"mask-pattern-syntax",children:"Mask pattern syntax"}),"\n",(0,t.jsxs)(a.p,{children:["The mask string defines the expected format. Each character is either a ",(0,t.jsx)(a.strong,{children:"token"})," (editable slot)\nor a ",(0,t.jsx)(a.strong,{children:"literal"})," (fixed character inserted automatically)."]}),"\n",(0,t.jsx)(a.h3,{id:"built-in-tokens",children:"Built-in tokens"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"9"})," – any single digit (",(0,t.jsx)(a.code,{children:"[0-9]"}),")"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"a"})," – any single letter (",(0,t.jsx)(a.code,{children:"[A-Za-z]"}),")"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"A"})," – any uppercase letter (",(0,t.jsx)(a.code,{children:"[A-Z]"}),")"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"*"})," – any alphanumeric character (",(0,t.jsx)(a.code,{children:"[A-Za-z0-9]"}),")"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"#"})," – digit or sign (",(0,t.jsx)(a.code,{children:"[-+0-9]"}),")"]}),"\n"]}),"\n",(0,t.jsx)(a.h3,{id:"optional-segments",children:"Optional segments"}),"\n",(0,t.jsxs)(a.p,{children:["Append ",(0,t.jsx)(a.code,{children:"?"})," after the last required character to mark remaining slots as optional:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:'<MaskInput mask="(999) 999-9999? x9999" /> // Extension is optional\n'})}),"\n",(0,t.jsx)(a.h3,{id:"escaping",children:"Escaping"}),"\n",(0,t.jsxs)(a.p,{children:["Prefix a token character with ",(0,t.jsx)(a.code,{children:"\\"})," to treat it as a literal:"]}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-tsx",children:'<MaskInput mask="\\A999" /> // "A" is literal, not a token\n'})})]})}e.s(["default",0,function(e={}){return(0,t.jsx)(o,{...e,children:(0,t.jsx)(i,{...e})})}])},20424,(e,t,n)=>{let r="/core/mask-input";(window.__NEXT_P=window.__NEXT_P||[]).push([r,()=>e.r(663037)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([r])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);