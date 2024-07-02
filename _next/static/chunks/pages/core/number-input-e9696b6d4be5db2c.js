(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56672],{6062:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/number-input",function(){return n(98809)}])},98809:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return T}});var r=n(52322),o=n(45392),a=n(42697);let l={type:"configurator",component:function(e){return(0,r.jsx)(a.Y,{...e,placeholder:"Input placeholder"})},code:`
import { NumberInput } from '@mantine/core';


function Demo() {
  return (
    <NumberInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:340,controls:n(76528).pc},i={type:"code",component:function(){return(0,r.jsx)(a.Y,{label:"Enter value between 10 and 20",placeholder:"Don't enter more than 20 and less than 10",min:10,max:20})},code:`
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
`,centered:!0,maxWidth:340},c={type:"code",component:function(){return(0,r.jsx)(a.Y,{label:"You cannot enter number less than 0 or greater than 100",placeholder:"You cannot enter number less than 0 or greater than 100",clampBehavior:"strict",min:0,max:100})},code:`
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
`,centered:!0,maxWidth:340};var u=n(34772);let d={type:"code",component:function(){return(0,r.jsx)(a.Y,{label:"Negative number are not allowed",placeholder:"Do not enter negative numbers",allowNegative:!1})},code:`
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
`,centered:!0,maxWidth:340},s={type:"code",component:function(){return(0,r.jsx)(a.Y,{label:"Decimals are not allowed",placeholder:"Do not enter decimal numbers",allowDecimal:!1})},code:`
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
`,centered:!0,maxWidth:340},m={type:"code",component:function(){return(0,r.jsx)(a.Y,{label:"You can enter only 2 digits after decimal point",placeholder:"Do not enter more that 2",decimalScale:2})},code:`
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
`,centered:!0,maxWidth:340},p={type:"code",component:function(){return(0,r.jsx)(a.Y,{label:"Always show 2 digits after decimal point",placeholder:"Do not enter more that 2",decimalScale:2,fixedDecimalScale:!0,defaultValue:2.2})},code:`
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
`,centered:!0,maxWidth:340},h={type:"code",component:function(){return(0,r.jsx)(a.Y,{label:"Custom decimal separator",placeholder:"You can change it",decimalSeparator:",",defaultValue:20.573})},code:`
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
`,centered:!0,maxWidth:340},b={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Y,{label:"Thousands are separated with a coma",placeholder:"Thousands are separated with a coma",thousandSeparator:",",defaultValue:1e6}),(0,r.jsx)(a.Y,{label:"Thousands are separated with a space",placeholder:"Thousands are separated with a space",thousandSeparator:" ",defaultValue:1e6,mt:"md"})]})},code:`
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
`,centered:!0,maxWidth:340};var f=n(73681),x=(0,f.Z)("outline","currency-dram","IconCurrencyDram",[["path",{d:"M4 10a6 6 0 1 1 12 0v10",key:"svg-0"}],["path",{d:"M12 16h8",key:"svg-1"}],["path",{d:"M12 12h8",key:"svg-2"}]]),j=n(58898);let v={type:"code",component:function(){let e=(0,r.jsx)(x,{style:{width:(0,j.h)(20),height:(0,j.h)(20)},stroke:1.5});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Y,{leftSection:e,label:"With left section",placeholder:"With left section"}),(0,r.jsx)(a.Y,{rightSection:e,label:"With right section",placeholder:"With right section",mt:"md"})]})},code:`
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
`,centered:!0,maxWidth:340};/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var y=(0,f.Z)("outline","chart-bubble","IconChartBubble",[["path",{d:"M6 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-0"}],["path",{d:"M16 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M14.5 7.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0",key:"svg-2"}]]);let g={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Y,{label:"Hide controls",placeholder:"Hide controls",hideControls:!0}),(0,r.jsx)(a.Y,{label:"Custom right section",placeholder:"Custom right section",mt:"md",rightSection:(0,r.jsx)(y,{}),rightSectionPointerEvents:"none"})]})},code:`
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
`,centered:!0,maxWidth:340},w={type:"code",code:`
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
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Y,{label:"Step on hold",description:"Step value when clicking and holding increment/decrement buttons",placeholder:"Hold mouse down on control button",stepHoldDelay:500,stepHoldInterval:100}),(0,r.jsx)(a.Y,{mt:"md",label:"Step the value with interval function",description:"Step value will increase incrementally when control is hold",placeholder:"Hold mouse down on control button",stepHoldDelay:500,stepHoldInterval:e=>Math.max(1e3/e**2,25)})]})},centered:!0,maxWidth:340};var N=n(2784),I=n(93010),D=n(17115);let S={type:"code",component:function(){let e=(0,N.useRef)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Y,{label:"Click buttons to change value",placeholder:"Click the buttons",handlersRef:e,step:2,min:10,max:20,defaultValue:15}),(0,r.jsxs)(I.Z,{mt:"md",justify:"center",children:[(0,r.jsx)(D.z,{onClick:()=>e.current?.decrement(),variant:"default",children:"Decrement by 2"}),(0,r.jsx)(D.z,{onClick:()=>e.current?.increment(),variant:"default",children:"Increment by 2"})]})]})},code:`
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
`,centered:!0,maxWidth:340},V={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Y,{label:"Boolean error",placeholder:"Boolean error",error:!0}),(0,r.jsx)(a.Y,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"})]})},maxWidth:340,centered:!0,code:`
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
`},k={type:"code",component:function(){return(0,r.jsx)(a.Y,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:`
import { NumberInput } from '@mantine/core';

function Demo() {
  return <NumberInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`};var C=n(89868),Y=n(37095);let W=`
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
`,E={type:"styles-api",data:Y.L,component:function(e){return(0,r.jsx)(a.Y,{label:"Label",placeholder:"NumberInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:(0,r.jsx)(C.Z,{style:{width:(0,j.h)(18),height:(0,j.h)(18)}}),...e})},code:W,centered:!0,maxWidth:340};var M=n(25071),_=n(15019);let B=(0,M.A)(_.us.NumberInput);function R(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components},{Demo:n,GetElementRef:a,InputAccessibility:f,InputFeatures:x,InputSections:j,StylesApiSelectors:y}=t;return n||F("Demo",!0),a||F("GetElementRef",!0),f||F("InputAccessibility",!0),x||F("InputFeatures",!0),j||F("InputSections",!0),y||F("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"NumberInput"})," is based on ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/react-number-format",children:"react-number-format"}),".\nIt supports most of the props from the ",(0,r.jsx)(t.code,{children:"NumericFormat"})," component in the original package."]}),"\n",(0,r.jsx)(x,{component:"NumberInput",element:"input"}),"\n",(0,r.jsx)(n,{data:l}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { NumberInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string | number>('');\n  return <NumberInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"min-and-max",children:"min and max"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"min"})," and ",(0,r.jsx)(t.code,{children:"max"})," props to limit the input value:"]}),"\n",(0,r.jsx)(n,{data:i}),"\n",(0,r.jsx)(t.h2,{id:"clamp-behavior",children:"Clamp behavior"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the value is clamped when the input is blurred. If you set ",(0,r.jsx)(t.code,{children:'clampBehavior="strict"'}),",\nit will not be possible to enter value outside of min/max range. Note that this option\nmay cause issues if you have tight ",(0,r.jsx)(t.code,{children:"min"})," and ",(0,r.jsx)(t.code,{children:"max"}),", for example ",(0,r.jsx)(t.code,{children:"min={10}"})," and ",(0,r.jsx)(t.code,{children:"max={20}"}),".\nIf you need to disable value clamping entirely, set ",(0,r.jsx)(t.code,{children:'clampBehavior="none"'}),"."]}),"\n",(0,r.jsx)(n,{data:c}),"\n",(0,r.jsx)(t.h2,{id:"prefix-and-suffix",children:"Prefix and suffix"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"prefix"})," and ",(0,r.jsx)(t.code,{children:"suffix"})," props to add given string to the start or end of the input value:"]}),"\n",(0,r.jsx)(n,{data:u.C}),"\n",(0,r.jsx)(t.h2,{id:"negative-numbers",children:"Negative numbers"}),"\n",(0,r.jsxs)(t.p,{children:["By default, negative numbers are allowed. Set ",(0,r.jsx)(t.code,{children:"allowNegative={false}"})," to allow only positive numbers."]}),"\n",(0,r.jsx)(n,{data:d}),"\n",(0,r.jsx)(t.h2,{id:"decimal-numbers",children:"Decimal numbers"}),"\n",(0,r.jsxs)(t.p,{children:["By default, decimal numbers are allowed. Set ",(0,r.jsx)(t.code,{children:"allowDecimal={false}"})," to allow only integers."]}),"\n",(0,r.jsx)(n,{data:s}),"\n",(0,r.jsx)(t.h2,{id:"decimal-scale",children:"Decimal scale"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"decimalScale"})," controls how many decimal places are allowed:"]}),"\n",(0,r.jsx)(n,{data:m}),"\n",(0,r.jsx)(t.h2,{id:"fixed-decimal-scale",children:"Fixed decimal scale"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"fixedDecimalScale"})," to always display fixed number of decimal places:"]}),"\n",(0,r.jsx)(n,{data:p}),"\n",(0,r.jsx)(t.h2,{id:"decimal-separator",children:"Decimal separator"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"decimalSeparator"})," to change decimal separator character:"]}),"\n",(0,r.jsx)(n,{data:h}),"\n",(0,r.jsx)(t.h2,{id:"thousand-separator",children:"Thousand separator"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"thousandSeparator"})," prop to separate thousands with a character. You can control\ngrouping logic with ",(0,r.jsx)(t.code,{children:"thousandsGroupStyle"}),", it accepts: ",(0,r.jsx)(t.code,{children:"thousand"}),", ",(0,r.jsx)(t.code,{children:"lakh"}),", ",(0,r.jsx)(t.code,{children:"wan"}),", ",(0,r.jsx)(t.code,{children:"none"})," values."]}),"\n",(0,r.jsx)(n,{data:b}),"\n",(0,r.jsx)(j,{component:"NumberInput"}),"\n",(0,r.jsx)(n,{data:v}),"\n",(0,r.jsx)(t.h2,{id:"incrementdecrement-controls",children:"Increment/decrement controls"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the right section is occupied by increment and decrement buttons.\nTo hide them, set ",(0,r.jsx)(t.code,{children:"hideControls"})," prop. You can also use ",(0,r.jsx)(t.code,{children:"rightSection"})," prop to render anything\nin the right section to replace the default controls."]}),"\n",(0,r.jsx)(n,{data:g}),"\n",(0,r.jsx)(t.h2,{id:"incrementdecrement-on-hold",children:"Increment/decrement on hold"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"stepHoldDelay"})," and ",(0,r.jsx)(t.code,{children:"stepHoldInterval"})," props to define behavior when increment/decrement controls are clicked and hold:"]}),"\n",(0,r.jsx)(n,{data:w}),"\n",(0,r.jsx)(t.h2,{id:"custom-increment-and-decrement-controls",children:"Custom increment and decrement controls"}),"\n",(0,r.jsxs)(t.p,{children:["You can get a ref with ",(0,r.jsx)(t.code,{children:"increment"})," and ",(0,r.jsx)(t.code,{children:"decrement"})," functions to create custom controls:"]}),"\n",(0,r.jsx)(n,{data:S}),"\n",(0,r.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,r.jsx)(n,{data:V}),"\n",(0,r.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,r.jsx)(n,{data:k}),"\n",(0,r.jsx)(y,{component:"NumberInput"}),"\n",(0,r.jsx)(n,{data:E}),"\n",(0,r.jsx)(a,{component:"NumberInput",refType:"input"}),"\n",(0,r.jsx)(f,{component:"NumberInput"})]})}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(B,{...e,children:(0,r.jsx)(R,{...e})})}function F(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},89868:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});/**
 * @license @tabler/icons-react v3.3.0 - MIT
 *
 * This source code is licensed under the MIT license.
 * See the LICENSE file in the root directory of this source tree.
 */var r=(0,n(73681).Z)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},34772:function(e,t,n){"use strict";n.d(t,{C:function(){return a}});var r=n(52322),o=n(42697);let a={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Y,{label:"With prefix",placeholder:"Dollars",prefix:"$",defaultValue:100,mb:"md"}),(0,r.jsx)(o.Y,{label:"With suffix",placeholder:"Percents",suffix:"%",defaultValue:100,mt:"md"})]})},code:`
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
`,centered:!0,maxWidth:340}},76528:function(e,t,n){"use strict";n.d(t,{Mt:function(){return r},nW:function(){return o},pc:function(){return a}});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],o=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],a=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},42697:function(e,t,n){"use strict";n.d(t,{Y:function(){return D}});var r=n(52322),o=n(2784),a=n(40489),l=n(9462),i=n(9341),c=n(82692),u=n(70837),d=n(91482),s=n(11200),m=n(51477),p=n(46690),h=n(38483),b=n(82027),f=n(73063),x=n(63409);function j({direction:e,style:t,...n}){return(0,r.jsx)("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,r.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}var v={root:"m_e2f5cd4e",controls:"m_95e17d22",control:"m_80b4b171"};let y=/^(0\.0*|-0(\.0*)?)$/,g=/^-?0\d+(\.\d+)?\.?$/;function w(e,t,n){return void 0===e||(void 0===t||e>=t)&&(void 0===n||e<=n)}let N={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,withKeyboardEvents:!0,allowLeadingZeros:!0,trimLeadingZeroesOnBlur:!0,startValue:0},I=(0,s.Z)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,d.ap)(t,"ni-chevron-size")}})),D=(0,b.d)((e,t)=>{let n=(0,h.w)("NumberInput",N,e),{className:d,classNames:s,styles:b,unstyled:D,vars:S,onChange:V,onValueChange:k,value:C,defaultValue:Y,max:W,min:E,step:M,hideControls:_,rightSection:B,isAllowed:R,clampBehavior:T,onBlur:F,allowDecimal:A,decimalScale:H,onKeyDown:z,onKeyDownCapture:P,handlersRef:L,startValue:Z,disabled:G,rightSectionPointerEvents:$,allowNegative:U,readOnly:X,size:K,rightSectionWidth:O,stepHoldInterval:q,stepHoldDelay:J,allowLeadingZeros:Q,withKeyboardEvents:ee,trimLeadingZeroesOnBlur:et,...en}=n,er=(0,p.y)({name:"NumberInput",classes:v,props:n,classNames:s,styles:b,unstyled:D,vars:S,varsResolver:I}),{resolvedClassNames:eo,resolvedStyles:ea}=(0,m.h)({classNames:s,styles:b,props:n}),[el,ei]=(0,i.C)({value:C,defaultValue:Y,onChange:V}),ec=void 0!==J&&void 0!==q,eu=(0,o.useRef)(null),ed=(0,o.useRef)(null),es=(0,o.useRef)(0),em=e=>{let t=String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},ep=e=>{eu.current&&void 0!==e&&eu.current.setSelectionRange(e,e)},eh=(0,o.useRef)();eh.current=()=>{let e;let t=Math.max(em(el),em(M)),n=10**t;if("number"!=typeof el||Number.isNaN(el))e=(0,c.u)(Z,E,W);else if(void 0!==W){let t=(Math.round(el*n)+Math.round(M*n))/n;e=t<=W?t:W}else e=(Math.round(el*n)+Math.round(M*n))/n;let r=e.toFixed(t);ei(parseFloat(r)),k?.({floatValue:parseFloat(r),formattedValue:r,value:r},{source:"increment"}),setTimeout(()=>ep(eu.current?.value.length),0)};let eb=(0,o.useRef)();eb.current=()=>{let e;let t=void 0!==E?E:U?Number.MIN_SAFE_INTEGER:0,n=Math.max(em(el),em(M)),r=10**n;if("number"!=typeof el||Number.isNaN(el))e=(0,c.u)(Z,t,W);else{let n=(Math.round(el*r)-Math.round(M*r))/r;e=void 0!==t&&n<t?t:n}let o=e.toFixed(n);ei(parseFloat(o)),k?.({floatValue:parseFloat(o),formattedValue:o,value:o},{source:"decrement"}),setTimeout(()=>ep(eu.current?.value.length),0)},(0,u.kR)(L,{increment:eh.current,decrement:eb.current});let ef=e=>{e?eh.current():eb.current(),es.current+=1},ex=e=>{if(ef(e),ec){let t="number"==typeof q?q:q(es.current);ed.current=window.setTimeout(()=>ex(e),t)}},ej=(e,t)=>{e.preventDefault(),eu.current?.focus(),ef(t),ec&&(ed.current=window.setTimeout(()=>ex(t),J))},ev=()=>{ed.current&&window.clearTimeout(ed.current),ed.current=null,es.current=0},ey=(0,r.jsxs)("div",{...er("controls"),children:[(0,r.jsx)(x.k,{...er("control"),tabIndex:-1,"aria-hidden":!0,disabled:G||"number"==typeof el&&void 0!==W&&el>=W,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ej(e,!0)},onPointerUp:ev,onPointerLeave:ev,children:(0,r.jsx)(j,{direction:"up"})}),(0,r.jsx)(x.k,{...er("control"),tabIndex:-1,"aria-hidden":!0,disabled:G||"number"==typeof el&&void 0!==E&&el<=E,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ej(e,!1)},onPointerUp:ev,onPointerLeave:ev,children:(0,r.jsx)(j,{direction:"down"})})]});return(0,r.jsx)(f.M,{component:l.h3,allowNegative:U,className:(0,a.Z)(v.root,d),size:K,...en,readOnly:X,disabled:G,value:el,getInputRef:(0,u.Yx)(t,eu),onValueChange:(e,t)=>{if("event"===t.source){var n;ei(!(("number"==typeof(n=e.floatValue)?n<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(n)))&&!Number.isNaN(n))||y.test(e.value)||Q&&g.test(e.value)?e.value:e.floatValue)}k?.(e,t)},rightSection:_||X?B:B||ey,classNames:eo,styles:ea,unstyled:D,__staticSelector:"NumberInput",decimalScale:A?H:0,onKeyDown:e=>{z?.(e),!X&&ee&&("ArrowUp"===e.key&&(e.preventDefault(),eh.current()),"ArrowDown"===e.key&&(e.preventDefault(),eb.current()))},onKeyDownCapture:e=>{if(P?.(e),"Backspace"===e.key){let t=eu.current;0===t.selectionStart&&t.selectionStart===t.selectionEnd&&(e.preventDefault(),window.setTimeout(()=>ep(0),0))}},rightSectionPointerEvents:$??(G?"none":void 0),rightSectionWidth:O??`var(--ni-right-section-width-${K||"sm"})`,allowLeadingZeros:Q,onBlur:e=>{if(F?.(e),"blur"===T&&"number"==typeof el&&(0,c.u)(el,E,W)!==el&&ei((0,c.u)(el,E,W)),et&&"string"==typeof el){let e=el.replace(/^0+/,""),t=parseFloat(e);ei(Number.isNaN(t)||t>Number.MAX_SAFE_INTEGER?e:t)}},isAllowed:e=>"strict"===T?R?R(e)&&w(e.floatValue,E,W):w(e.floatValue,E,W):!R||R(e)})});D.classes={...f.M.classes,...v},D.displayName="@mantine/core/NumberInput"}},function(e){e.O(0,[61177,9462,66748,11340,92888,49774,40179],function(){return e(e.s=6062)}),_N_E=e.O()}]);