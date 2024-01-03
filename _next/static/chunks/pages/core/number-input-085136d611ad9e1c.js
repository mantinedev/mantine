(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56672],{93693:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},72916:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/number-input",function(){return n(2524)}])},2524:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Q}});var r=n(24246),a=n(71670),o=n(27378),l=n(62339),i=n(77481);let c=`
import { NumberInput } from '@mantine/core';


function Demo() {
  return (
    <NumberInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,u={type:"configurator",component:function(e){return o.createElement(l.Y,{...e,placeholder:"Input placeholder"})},code:c,centered:!0,maxWidth:340,controls:i.pc},d=`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Enter value between 10 and 20"
      placeholder="Don't enter more than 20 and less than 10"
      min={10}
      max={20}
    />
  );
}
`,s={type:"code",component:function(){return o.createElement(l.Y,{label:"Enter value between 10 and 20",placeholder:"Don't enter more than 20 and less than 10",min:10,max:20})},code:d,centered:!0,maxWidth:340},m=`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="You cannot enter number less than 0 or greater than 100"
      placeholder="You cannot enter number less than 0 or greater than 100"
      clampBehavior="strict"
      min={0}
      max={100}
    />
  );
}
`,p={type:"code",component:function(){return o.createElement(l.Y,{label:"You cannot enter number less than 0 or greater than 100",placeholder:"You cannot enter number less than 0 or greater than 100",clampBehavior:"strict",min:0,max:100})},code:m,centered:!0,maxWidth:340};var h=n(12375);let b=`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Negative number are not allowed"
      placeholder="Do not enter negative numbers"
      allowNegative={false}
    />
  );
}
`,f={type:"code",component:function(){return o.createElement(l.Y,{label:"Negative number are not allowed",placeholder:"Do not enter negative numbers",allowNegative:!1})},code:b,centered:!0,maxWidth:340},x=`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Decimals are not allowed"
      placeholder="Do not enter decimal numbers"
      allowDecimal={false}
    />
  );
}
`,y={type:"code",component:function(){return o.createElement(l.Y,{label:"Decimals are not allowed",placeholder:"Do not enter decimal numbers",allowDecimal:!1})},code:x,centered:!0,maxWidth:340},v=`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="You can enter only 2 digits after decimal point"
      placeholder="Do not enter more that 2"
      decimalScale={2}
    />
  );
}
`,g={type:"code",component:function(){return o.createElement(l.Y,{label:"You can enter only 2 digits after decimal point",placeholder:"Do not enter more that 2",decimalScale:2})},code:v,centered:!0,maxWidth:340},w=`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Always show 2 digits after decimal point"
      placeholder="Do not enter more that 2"
      decimalScale={2}
      fixedDecimalScale
      defaultValue={2.2}
    />
  );
}
`,I={type:"code",component:function(){return o.createElement(l.Y,{label:"Always show 2 digits after decimal point",placeholder:"Do not enter more that 2",decimalScale:2,fixedDecimalScale:!0,defaultValue:2.2})},code:w,centered:!0,maxWidth:340},j=`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Custom decimal separator"
      placeholder="You can change it"
      decimalSeparator=","
      defaultValue={20.573}
    />
  );
}
`,N={type:"code",component:function(){return o.createElement(l.Y,{label:"Custom decimal separator",placeholder:"You can change it",decimalSeparator:",",defaultValue:20.573})},code:j,centered:!0,maxWidth:340},D=`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="Thousands are separated with a coma"
        placeholder="Thousands are separated with a coma"
        thousandSeparator=","
        defaultValue={1_000_000}
      />

      <NumberInput
        label="Thousands are separated with a space"
        placeholder="Thousands are separated with a space"
        thousandSeparator=" "
        defaultValue={1_000_000}
        mt="md"
      />
    </>
  );
}
`,E={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(l.Y,{label:"Thousands are separated with a coma",placeholder:"Thousands are separated with a coma",thousandSeparator:",",defaultValue:1e6}),o.createElement(l.Y,{label:"Thousands are separated with a space",placeholder:"Thousands are separated with a space",thousandSeparator:" ",defaultValue:1e6,mt:"md"}))},code:D,centered:!0,maxWidth:340};var V=n(54764),S=(0,V.Z)("currency-dram","IconCurrencyDram",[["path",{d:"M4 10a6 6 0 1 1 12 0v10",key:"svg-0"}],["path",{d:"M12 16h8",key:"svg-1"}],["path",{d:"M12 12h8",key:"svg-2"}]]),C=n(71078);let k=`
import { NumberInput, rem } from '@mantine/core';
import { IconCurrencyDram } from '@tabler/icons-react';

function Demo() {
  const icon = <IconCurrencyDram style={{ width: rem(20), height: rem(20) }} stroke={1.5} />;
  return (
    <>
      <NumberInput leftSection={icon} label="With left section" placeholder="With left section" />
      <NumberInput
        rightSection={icon}
        label="With right section"
        placeholder="With right section"
        mt="md"
      />
    </>
  );
}
`,Y={type:"code",component:function(){let e=o.createElement(S,{style:{width:(0,C.h)(20),height:(0,C.h)(20)},stroke:1.5});return o.createElement(o.Fragment,null,o.createElement(l.Y,{leftSection:e,label:"With left section",placeholder:"With left section"}),o.createElement(l.Y,{rightSection:e,label:"With right section",placeholder:"With right section",mt:"md"}))},code:k,centered:!0,maxWidth:340};var W=(0,V.Z)("chart-bubble","IconChartBubble",[["path",{d:"M6 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-0"}],["path",{d:"M16 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M14.5 7.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0",key:"svg-2"}]]);let B=`
import { NumberInput } from '@mantine/core';
import { IconChartBubble } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <NumberInput label="Hide controls" placeholder="Hide controls" hideControls />
      <NumberInput
        label="Custom right section"
        placeholder="Custom right section"
        mt="md"
        rightSection={<IconChartBubble />}
        rightSectionPointerEvents="none"
      />
    </>
  );
}
`,H={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(l.Y,{label:"Hide controls",placeholder:"Hide controls",hideControls:!0}),o.createElement(l.Y,{label:"Custom right section",placeholder:"Custom right section",mt:"md",rightSection:o.createElement(W,null),rightSectionPointerEvents:"none"}))},code:B,centered:!0,maxWidth:340},R=`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="Step on hold"
        description="Step value when clicking and holding increment/decrement buttons"
        stepHoldDelay={500}
        stepHoldInterval={100}
      />

      <NumberInput
        label="Step the value with interval function"
        description="Step value will increase incrementally when control is hold"
        stepHoldDelay={500}
        stepHoldInterval={(t) => Math.max(1000 / t ** 2, 25)}
      />
    </>
  );
}
`,_={type:"code",code:R,component:function(){return o.createElement(o.Fragment,null,o.createElement(l.Y,{label:"Step on hold",description:"Step value when clicking and holding increment/decrement buttons",placeholder:"Hold mouse down on control button",stepHoldDelay:500,stepHoldInterval:100}),o.createElement(l.Y,{mt:"md",label:"Step the value with interval function",description:"Step value will increase incrementally when control is hold",placeholder:"Hold mouse down on control button",stepHoldDelay:500,stepHoldInterval:e=>Math.max(1e3/e**2,25)}))},centered:!0,maxWidth:340};var M=n(22971),T=n(8671);let A=`
import { useRef } from 'react';
import { NumberInput, Group, Button, NumberInputHandlers } from '@mantine/core';

function Demo() {
  const handlersRef = useRef<NumberInputHandlers>(null);
  return (
    <>
      <NumberInput
        label="Click buttons to change value"
        placeholder="Click the buttons"
        handlersRef={handlersRef}
        step={2}
        min={10}
        max={20}
        defaultValue={15}
      />

      <Group mt="md" justify="center">
        <Button onClick={() => handlersRef.current?.decrement()} variant="default">
          Decrement by 2
        </Button>

        <Button onClick={() => handlersRef.current?.increment()} variant="default">
          Increment by 2
        </Button>
      </Group>
    </>
  );
}
`,z={type:"code",component:function(){let e=(0,o.useRef)(null);return o.createElement(o.Fragment,null,o.createElement(l.Y,{label:"Click buttons to change value",placeholder:"Click the buttons",handlersRef:e,step:2,min:10,max:20,defaultValue:15}),o.createElement(M.Z,{mt:"md",justify:"center"},o.createElement(T.z,{onClick:()=>e.current?.decrement(),variant:"default"},"Decrement by 2"),o.createElement(T.z,{onClick:()=>e.current?.increment(),variant:"default"},"Increment by 2")))},code:A,centered:!0,maxWidth:340},P=`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput label="Boolean error" placeholder="Boolean error" error />
      <NumberInput
        mt="md"
        label="With error message"
        placeholder="With error message"
        error="Invalid name"
      />
    </>
  );
}
`,F={type:"code",component:function(){return o.createElement(o.Fragment,null,o.createElement(l.Y,{label:"Boolean error",placeholder:"Boolean error",error:!0}),o.createElement(l.Y,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"}))},maxWidth:340,centered:!0,code:P},L=`
import { NumberInput } from '@mantine/core';

function Demo() {
  return <NumberInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`,Z={type:"code",component:function(){return o.createElement(l.Y,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:L};var G=n(93693),U=n(68170);let $=`
import { IconAt } from '@tabler/icons-react';
import { NumberInput, rem } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Label"
      placeholder="NumberInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt style={{ width: rem(18), height: rem(18) }} />}
      {{props}}
    />
  );
}
`,O={type:"styles-api",data:U.L,component:function(e){return o.createElement(l.Y,{label:"Label",placeholder:"NumberInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:o.createElement(G.Z,{style:{width:(0,C.h)(18),height:(0,C.h)(18)}}),...e})},code:$,centered:!0,maxWidth:340};var X=n(3916),K=n(54568);let q=(0,X.A)(K.us.NumberInput);function J(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Demo:n,GetElementRef:o,InputAccessibility:l,InputFeatures:i,InputSections:c,StylesApiSelectors:d}=t;return n||ee("Demo",!0),o||ee("GetElementRef",!0),l||ee("InputAccessibility",!0),i||ee("InputFeatures",!0),c||ee("InputSections",!0),d||ee("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"NumberInput"})," is based on ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/react-number-format",children:"react-number-format"}),".\nIt supports most of the props from the ",(0,r.jsx)(t.code,{children:"NumericFormat"})," component in the original package."]}),"\n",(0,r.jsx)(i,{component:"NumberInput",element:"input"}),"\n",(0,r.jsx)(n,{data:u}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { NumberInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string | number>('');\n  return <NumberInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"min-and-max",children:"min and max"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"min"})," and ",(0,r.jsx)(t.code,{children:"max"})," props to limit the input value:"]}),"\n",(0,r.jsx)(n,{data:s}),"\n",(0,r.jsx)(t.h2,{id:"clamp-behavior",children:"Clamp behavior"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the value is clamped when the input is blurred. If you set ",(0,r.jsx)(t.code,{children:'clampBehavior="strict"'}),",\nit will not be possible to enter value outside of min/max range. Note that this option\nmay cause issues if you have tight ",(0,r.jsx)(t.code,{children:"min"})," and ",(0,r.jsx)(t.code,{children:"max"}),", for example ",(0,r.jsx)(t.code,{children:"min={10}"})," and ",(0,r.jsx)(t.code,{children:"max={20}"}),".\nIf you need to disable value clamping entirely, set ",(0,r.jsx)(t.code,{children:'clampBehavior="none"'}),"."]}),"\n",(0,r.jsx)(n,{data:p}),"\n",(0,r.jsx)(t.h2,{id:"prefix-and-suffix",children:"Prefix and suffix"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"prefix"})," and ",(0,r.jsx)(t.code,{children:"suffix"})," props to add given string to the start or end of the input value:"]}),"\n",(0,r.jsx)(n,{data:h.C}),"\n",(0,r.jsx)(t.h2,{id:"negative-numbers",children:"Negative numbers"}),"\n",(0,r.jsxs)(t.p,{children:["By default, negative numbers are allowed. Set ",(0,r.jsx)(t.code,{children:"allowNegative={false}"})," to allow only positive numbers."]}),"\n",(0,r.jsx)(n,{data:f}),"\n",(0,r.jsx)(t.h2,{id:"decimal-numbers",children:"Decimal numbers"}),"\n",(0,r.jsxs)(t.p,{children:["By default, decimal numbers are allowed. Set ",(0,r.jsx)(t.code,{children:"allowDecimal={false}"})," to allow only integers."]}),"\n",(0,r.jsx)(n,{data:y}),"\n",(0,r.jsx)(t.h2,{id:"decimal-scale",children:"Decimal scale"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"decimalScale"})," controls how many decimal places are allowed:"]}),"\n",(0,r.jsx)(n,{data:g}),"\n",(0,r.jsx)(t.h2,{id:"fixed-decimal-scale",children:"Fixed decimal scale"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"fixedDecimalScale"})," to always display fixed number of decimal places:"]}),"\n",(0,r.jsx)(n,{data:I}),"\n",(0,r.jsx)(t.h2,{id:"decimal-separator",children:"Decimal separator"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"decimalSeparator"})," to change decimal separator character:"]}),"\n",(0,r.jsx)(n,{data:N}),"\n",(0,r.jsx)(t.h2,{id:"thousand-separator",children:"Thousand separator"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"thousandSeparator"})," prop to separate thousands with a character. You can control\ngrouping logic with ",(0,r.jsx)(t.code,{children:"thousandsGroupStyle"}),", it accepts: ",(0,r.jsx)(t.code,{children:"thousand"}),", ",(0,r.jsx)(t.code,{children:"lakh"}),", ",(0,r.jsx)(t.code,{children:"wan"}),", ",(0,r.jsx)(t.code,{children:"none"})," values."]}),"\n",(0,r.jsx)(n,{data:E}),"\n",(0,r.jsx)(c,{component:"NumberInput"}),"\n",(0,r.jsx)(n,{data:Y}),"\n",(0,r.jsx)(t.h2,{id:"incrementdecrement-controls",children:"Increment/decrement controls"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the right section is occupied by increment and decrement buttons.\nTo hide them, set ",(0,r.jsx)(t.code,{children:"hideControls"})," prop. You can also use ",(0,r.jsx)(t.code,{children:"rightSection"})," prop to render anything\nin the right section to replace the default controls."]}),"\n",(0,r.jsx)(n,{data:H}),"\n",(0,r.jsx)(t.h2,{id:"incrementdecrement-on-hold",children:"Increment/decrement on hold"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"stepHoldDelay"})," and ",(0,r.jsx)(t.code,{children:"stepHoldInterval"})," props to define behavior when increment/decrement controls are clicked and hold:"]}),"\n",(0,r.jsx)(n,{data:_}),"\n",(0,r.jsx)(t.h2,{id:"custom-increment-and-decrement-controls",children:"Custom increment and decrement controls"}),"\n",(0,r.jsxs)(t.p,{children:["You can get a ref with ",(0,r.jsx)(t.code,{children:"increment"})," and ",(0,r.jsx)(t.code,{children:"decrement"})," functions to create custom controls:"]}),"\n",(0,r.jsx)(n,{data:z}),"\n",(0,r.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,r.jsx)(n,{data:F}),"\n",(0,r.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,r.jsx)(n,{data:Z}),"\n",(0,r.jsx)(d,{component:"NumberInput"}),"\n",(0,r.jsx)(n,{data:O}),"\n",(0,r.jsx)(o,{component:"NumberInput",refType:"input"}),"\n",(0,r.jsx)(l,{component:"NumberInput"})]})}function Q(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(q,{...e,children:(0,r.jsx)(J,{...e})})}function ee(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},12375:function(e,t,n){"use strict";n.d(t,{C:function(){return l}});var r=n(27378),a=n(62339);let o=`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <NumberInput
        label="With prefix"
        placeholder="Dollars"
        prefix="$"
        defaultValue={100}
        mb="md"
      />
      <NumberInput
        label="With suffix"
        placeholder="Percents"
        suffix="%"
        defaultValue={100}
        mt="md"
      />
    </>
  );
}
`,l={type:"code",component:function(){return r.createElement(r.Fragment,null,r.createElement(a.Y,{label:"With prefix",placeholder:"Dollars",prefix:"$",defaultValue:100,mb:"md"}),r.createElement(a.Y,{label:"With suffix",placeholder:"Percents",suffix:"%",defaultValue:100,mt:"md"}))},code:o,centered:!0,maxWidth:340}},77481:function(e,t,n){"use strict";n.d(t,{Mt:function(){return r},nW:function(){return a},pc:function(){return o}});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],a=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},62339:function(e,t,n){"use strict";n.d(t,{Y:function(){return I}});var r=n(27378),a=n(40624),o=n(62740),l=n(58675),i=n(28086),c=n(72840),u=n(92082),d=n(83453),s=n(5564),m=n(6231),p=n(96739),h=n(20410),b=n(23163),f=n(19397);function x({direction:e,style:t,...n}){return r.createElement("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},r.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var y={root:"m-e2f5cd4e",controls:"m-95e17d22",control:"m-80b4b171"};function v(e,t,n){return void 0===e||(void 0===t||e>=t)&&(void 0===n||e<=n)}let g={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,startValue:0},w=(0,d.Z)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,u.ap)(t,"ni-chevron-size")}})),I=(0,h.d)((e,t)=>{let n=(0,p.w)("NumberInput",g,e),{className:u,classNames:d,styles:h,unstyled:I,vars:j,onChange:N,onValueChange:D,value:E,defaultValue:V,max:S,min:C,step:k,hideControls:Y,rightSection:W,isAllowed:B,clampBehavior:H,onBlur:R,allowDecimal:_,decimalScale:M,onKeyDown:T,handlersRef:A,startValue:z,disabled:P,rightSectionPointerEvents:F,allowNegative:L,readOnly:Z,size:G,rightSectionWidth:U,stepHoldInterval:$,stepHoldDelay:O,...X}=n,K=(0,m.y)({name:"NumberInput",classes:y,props:n,classNames:d,styles:h,unstyled:I,vars:j,varsResolver:w}),{resolvedClassNames:q,resolvedStyles:J}=(0,s.h)({classNames:d,styles:h,props:n}),[Q,ee]=(0,l.C)({value:E,defaultValue:V,onChange:N}),et=void 0!==O&&void 0!==$,en=(0,r.useRef)(null),er=(0,r.useRef)(null),ea=(0,r.useRef)(0),eo=(0,r.useRef)();eo.current=()=>{"number"!=typeof Q||Number.isNaN(Q)?ee((0,i.u)(z,C,S)):void 0!==S?ee(Q+k<=S?Q+k:S):ee(Q+k)};let el=(0,r.useRef)();el.current=()=>{"number"!=typeof Q||Number.isNaN(Q)?ee((0,i.u)(z,C,S)):ee(function({value:e,min:t,step:n=1,allowNegative:r}){let a=e-n;return void 0!==t&&a<t?t:!r&&a<0&&void 0===t?e:a}({value:Q,min:C,step:k,allowNegative:L}))},(0,c.kR)(A,{increment:eo.current,decrement:el.current});let ei=e=>{e?eo.current():el.current(),ea.current+=1},ec=e=>{if(ei(e),et){let t="number"==typeof $?$:$(ea.current);er.current=window.setTimeout(()=>ec(e),t)}},eu=(e,t)=>{e.preventDefault(),en.current?.focus(),ei(t),et&&(er.current=window.setTimeout(()=>ec(t),O))},ed=()=>{er.current&&window.clearTimeout(er.current),er.current=null,ea.current=0},es=r.createElement("div",{...K("controls")},r.createElement(f.k,{...K("control"),tabIndex:-1,"aria-hidden":!0,disabled:P||"number"==typeof Q&&void 0!==S&&Q>=S,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{eu(e,!0)},onPointerUp:ed,onPointerLeave:ed},r.createElement(x,{direction:"up"})),r.createElement(f.k,{...K("control"),tabIndex:-1,"aria-hidden":!0,disabled:P||"number"==typeof Q&&void 0!==C&&Q<=C,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{eu(e,!1)},onPointerUp:ed,onPointerLeave:ed},r.createElement(x,{direction:"down"})));return r.createElement(b.M,{component:o.h3,allowNegative:L,className:(0,a.Z)(y.root,u),size:G,...X,readOnly:Z,disabled:P,value:Q,getInputRef:(0,c.Yx)(t,en),onValueChange:(e,t)=>{if("event"===t.source){var n;ee("number"!=typeof(n=e.floatValue)&&Number.isNaN(Number(n))||Number.isNaN(n)||"-0"===e.value||"-0."===e.value?e.value:e.floatValue)}D?.(e,t)},rightSection:Y||Z?W:W||es,classNames:q,styles:J,unstyled:I,__staticSelector:"NumberInput",decimalScale:_?M:0,onKeyDown:e=>{T?.(e),Z||("ArrowUp"===e.key&&(e.preventDefault(),eo.current()),"ArrowDown"===e.key&&(e.preventDefault(),el.current()))},rightSectionPointerEvents:F??P?"none":void 0,rightSectionWidth:U??`var(--ni-right-section-width-${G||"sm"})`,onBlur:e=>{if(R?.(e),"blur"===H&&"number"==typeof Q){let e=(0,i.u)(Q,C,S);e!==Q&&ee((0,i.u)(Q,C,S))}},isAllowed:e=>"strict"===H?B?B(e)&&v(e.floatValue,C,S):v(e.floatValue,C,S):!B||B(e)})});I.classes={...b.M.classes,...y},I.displayName="@mantine/core/NumberInput"}},function(e){e.O(0,[30370,62740,15819,2775,49774,92888,40179],function(){return e(e.s=72916)}),_N_E=e.O()}]);