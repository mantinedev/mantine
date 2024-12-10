(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[56672],{6062:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/number-input",function(){return n(98809)}])},98809:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var r=n(52322),a=n(45392),o=n(42697);let l={type:"configurator",component:function(e){return(0,r.jsx)(o.Y,{...e,placeholder:"Input placeholder"})},code:`
import { NumberInput } from '@mantine/core';


function Demo() {
  return (
    <NumberInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:340,controls:n(76528).pc},i={type:"code",component:function(){return(0,r.jsx)(o.Y,{label:"Enter value between 10 and 20",placeholder:"Don't enter more than 20 and less than 10",min:10,max:20})},code:`
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
`,centered:!0,maxWidth:340},c={type:"code",component:function(){return(0,r.jsx)(o.Y,{label:"You cannot enter number less than 0 or greater than 100",placeholder:"You cannot enter number less than 0 or greater than 100",clampBehavior:"strict",min:0,max:100})},code:`
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
`,centered:!0,maxWidth:340};var s=n(34772);let u={type:"code",component:function(){return(0,r.jsx)(o.Y,{label:"Negative number are not allowed",placeholder:"Do not enter negative numbers",allowNegative:!1})},code:`
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
`,centered:!0,maxWidth:340},d={type:"code",component:function(){return(0,r.jsx)(o.Y,{label:"Decimals are not allowed",placeholder:"Do not enter decimal numbers",allowDecimal:!1})},code:`
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
`,centered:!0,maxWidth:340},m={type:"code",component:function(){return(0,r.jsx)(o.Y,{label:"You can enter only 2 digits after decimal point",placeholder:"Do not enter more that 2",decimalScale:2})},code:`
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
`,centered:!0,maxWidth:340},p={type:"code",component:function(){return(0,r.jsx)(o.Y,{label:"Always show 2 digits after decimal point",placeholder:"Do not enter more that 2",decimalScale:2,fixedDecimalScale:!0,defaultValue:2.2})},code:`
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
`,centered:!0,maxWidth:340},h={type:"code",component:function(){return(0,r.jsx)(o.Y,{label:"Custom decimal separator",placeholder:"You can change it",decimalSeparator:",",defaultValue:20.573})},code:`
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
`,centered:!0,maxWidth:340},b={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Y,{label:"Thousands are separated with a coma",placeholder:"Thousands are separated with a coma",thousandSeparator:",",defaultValue:1e6}),(0,r.jsx)(o.Y,{label:"Thousands are separated with a space",placeholder:"Thousands are separated with a space",thousandSeparator:" ",defaultValue:1e6,mt:"md"})]})},code:`
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
`,centered:!0,maxWidth:340};var f=n(73681),x=(0,f.Z)("outline","currency-dram","IconCurrencyDram",[["path",{d:"M4 10a6 6 0 1 1 12 0v10",key:"svg-0"}],["path",{d:"M12 16h8",key:"svg-1"}],["path",{d:"M12 12h8",key:"svg-2"}]]),j=n(58898);let v={type:"code",component:function(){let e=(0,r.jsx)(x,{style:{width:(0,j.h)(20),height:(0,j.h)(20)},stroke:1.5});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Y,{leftSection:e,label:"With left section",placeholder:"With left section"}),(0,r.jsx)(o.Y,{rightSection:e,label:"With right section",placeholder:"With right section",mt:"md"})]})},code:`
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
`,centered:!0,maxWidth:340};var y=(0,f.Z)("outline","chart-bubble","IconChartBubble",[["path",{d:"M6 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-0"}],["path",{d:"M16 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M14.5 7.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0",key:"svg-2"}]]);let g={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Y,{label:"Hide controls",placeholder:"Hide controls",hideControls:!0}),(0,r.jsx)(o.Y,{label:"Custom right section",placeholder:"Custom right section",mt:"md",rightSection:(0,r.jsx)(y,{}),rightSectionPointerEvents:"none"})]})},code:`
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
`,centered:!0,maxWidth:340},N={type:"code",code:`
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
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Y,{label:"Step on hold",description:"Step value when clicking and holding increment/decrement buttons",placeholder:"Hold mouse down on control button",stepHoldDelay:500,stepHoldInterval:100}),(0,r.jsx)(o.Y,{mt:"md",label:"Step the value with interval function",description:"Step value will increase incrementally when control is hold",placeholder:"Hold mouse down on control button",stepHoldDelay:500,stepHoldInterval:e=>Math.max(1e3/e**2,25)})]})},centered:!0,maxWidth:340};var I=n(2784),w=n(93010),D=n(39629);let S={type:"code",component:function(){let e=(0,I.useRef)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Y,{label:"Click buttons to change value",placeholder:"Click the buttons",handlersRef:e,step:2,min:10,max:20,defaultValue:15}),(0,r.jsxs)(w.Z,{mt:"md",justify:"center",children:[(0,r.jsx)(D.z,{onClick:()=>e.current?.decrement(),variant:"default",children:"Decrement by 2"}),(0,r.jsx)(D.z,{onClick:()=>e.current?.increment(),variant:"default",children:"Increment by 2"})]})]})},code:`
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
`,centered:!0,maxWidth:340},V={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Y,{label:"Boolean error",placeholder:"Boolean error",error:!0}),(0,r.jsx)(o.Y,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"})]})},maxWidth:340,centered:!0,code:`
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
`},C={type:"code",component:function(){return(0,r.jsx)(o.Y,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:`
import { NumberInput } from '@mantine/core';

function Demo() {
  return <NumberInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`};var E=n(89868),k=n(37095);let Y=`
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
`,W={type:"styles-api",data:k.L,component:function(e){return(0,r.jsx)(o.Y,{label:"Label",placeholder:"NumberInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:(0,r.jsx)(E.Z,{style:{width:(0,j.h)(18),height:(0,j.h)(18)}}),...e})},code:Y,centered:!0,maxWidth:340};var _=n(25071),M=n(15019);let A=(0,_.A)(M.us.NumberInput);function B(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Demo:n,GetElementRef:o,InputAccessibility:f,InputFeatures:x,InputSections:j,StylesApiSelectors:y}=t;return n||T("Demo",!0),o||T("GetElementRef",!0),f||T("InputAccessibility",!0),x||T("InputFeatures",!0),j||T("InputSections",!0),y||T("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"NumberInput"})," is based on ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/react-number-format",children:"react-number-format"}),".\nIt supports most of the props from the ",(0,r.jsx)(t.code,{children:"NumericFormat"})," component in the original package."]}),"\n",(0,r.jsx)(x,{component:"NumberInput",element:"input"}),"\n",(0,r.jsx)(n,{data:l}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { NumberInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string | number>('');\n  return <NumberInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"value-type",children:"Value type"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"value"}),", ",(0,r.jsx)(t.code,{children:"defaultValue"})," and ",(0,r.jsx)(t.code,{children:"onChange"})," props can be either string or number. In all cases\nwhen ",(0,r.jsx)(t.code,{children:"NumberInput"})," value can be represented as a number, ",(0,r.jsx)(t.code,{children:"onChange"})," function is called\nwith a number (for example ",(0,r.jsx)(t.code,{children:"55"}),", ",(0,r.jsx)(t.code,{children:"1.28"}),", ",(0,r.jsx)(t.code,{children:"-100"}),", etc.). But there are several cases when\nit is not possible to represent value as a number:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Empty state is represented as an empty string – ",(0,r.jsx)(t.code,{children:"''"})]}),"\n",(0,r.jsxs)(t.li,{children:["Numbers that are larger than ",(0,r.jsx)(t.code,{children:"Number.MAX_SAFE_INTEGER"})," or smaller than ",(0,r.jsx)(t.code,{children:"Number.MIN_SAFE_INTEGER"})," are represented as strings – ",(0,r.jsx)(t.code,{children:"'90071992547409910'"})]}),"\n",(0,r.jsxs)(t.li,{children:["Numbers that consist of only multiple zeros are represented as strings – ",(0,r.jsx)(t.code,{children:"0."}),", ",(0,r.jsx)(t.code,{children:"0.0"}),", ",(0,r.jsx)(t.code,{children:"-0.00"}),", etc."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"min-and-max",children:"min and max"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"min"})," and ",(0,r.jsx)(t.code,{children:"max"})," props to limit the input value:"]}),"\n",(0,r.jsx)(n,{data:i}),"\n",(0,r.jsx)(t.h2,{id:"clamp-behavior",children:"Clamp behavior"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the value is clamped when the input is blurred. If you set ",(0,r.jsx)(t.code,{children:'clampBehavior="strict"'}),",\nit will not be possible to enter value outside of min/max range. Note that this option\nmay cause issues if you have tight ",(0,r.jsx)(t.code,{children:"min"})," and ",(0,r.jsx)(t.code,{children:"max"}),", for example ",(0,r.jsx)(t.code,{children:"min={10}"})," and ",(0,r.jsx)(t.code,{children:"max={20}"}),".\nIf you need to disable value clamping entirely, set ",(0,r.jsx)(t.code,{children:'clampBehavior="none"'}),"."]}),"\n",(0,r.jsx)(n,{data:c}),"\n",(0,r.jsx)(t.h2,{id:"prefix-and-suffix",children:"Prefix and suffix"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"prefix"})," and ",(0,r.jsx)(t.code,{children:"suffix"})," props to add given string to the start or end of the input value:"]}),"\n",(0,r.jsx)(n,{data:s.C}),"\n",(0,r.jsx)(t.h2,{id:"negative-numbers",children:"Negative numbers"}),"\n",(0,r.jsxs)(t.p,{children:["By default, negative numbers are allowed. Set ",(0,r.jsx)(t.code,{children:"allowNegative={false}"})," to allow only positive numbers."]}),"\n",(0,r.jsx)(n,{data:u}),"\n",(0,r.jsx)(t.h2,{id:"decimal-numbers",children:"Decimal numbers"}),"\n",(0,r.jsxs)(t.p,{children:["By default, decimal numbers are allowed. Set ",(0,r.jsx)(t.code,{children:"allowDecimal={false}"})," to allow only integers."]}),"\n",(0,r.jsx)(n,{data:d}),"\n",(0,r.jsx)(t.h2,{id:"decimal-scale",children:"Decimal scale"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"decimalScale"})," controls how many decimal places are allowed:"]}),"\n",(0,r.jsx)(n,{data:m}),"\n",(0,r.jsx)(t.h2,{id:"fixed-decimal-scale",children:"Fixed decimal scale"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"fixedDecimalScale"})," to always display fixed number of decimal places:"]}),"\n",(0,r.jsx)(n,{data:p}),"\n",(0,r.jsx)(t.h2,{id:"decimal-separator",children:"Decimal separator"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"decimalSeparator"})," to change decimal separator character:"]}),"\n",(0,r.jsx)(n,{data:h}),"\n",(0,r.jsx)(t.h2,{id:"thousand-separator",children:"Thousand separator"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"thousandSeparator"})," prop to separate thousands with a character. You can control\ngrouping logic with ",(0,r.jsx)(t.code,{children:"thousandsGroupStyle"}),", it accepts: ",(0,r.jsx)(t.code,{children:"thousand"}),", ",(0,r.jsx)(t.code,{children:"lakh"}),", ",(0,r.jsx)(t.code,{children:"wan"}),", ",(0,r.jsx)(t.code,{children:"none"})," values."]}),"\n",(0,r.jsx)(n,{data:b}),"\n",(0,r.jsx)(j,{component:"NumberInput"}),"\n",(0,r.jsx)(n,{data:v}),"\n",(0,r.jsx)(t.h2,{id:"incrementdecrement-controls",children:"Increment/decrement controls"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the right section is occupied by increment and decrement buttons.\nTo hide them, set ",(0,r.jsx)(t.code,{children:"hideControls"})," prop. You can also use ",(0,r.jsx)(t.code,{children:"rightSection"})," prop to render anything\nin the right section to replace the default controls."]}),"\n",(0,r.jsx)(n,{data:g}),"\n",(0,r.jsx)(t.h2,{id:"incrementdecrement-on-hold",children:"Increment/decrement on hold"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"stepHoldDelay"})," and ",(0,r.jsx)(t.code,{children:"stepHoldInterval"})," props to define behavior when increment/decrement controls are clicked and hold:"]}),"\n",(0,r.jsx)(n,{data:N}),"\n",(0,r.jsx)(t.h2,{id:"custom-increment-and-decrement-controls",children:"Custom increment and decrement controls"}),"\n",(0,r.jsxs)(t.p,{children:["You can get a ref with ",(0,r.jsx)(t.code,{children:"increment"})," and ",(0,r.jsx)(t.code,{children:"decrement"})," functions to create custom controls:"]}),"\n",(0,r.jsx)(n,{data:S}),"\n",(0,r.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,r.jsx)(n,{data:V}),"\n",(0,r.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,r.jsx)(n,{data:C}),"\n",(0,r.jsx)(y,{component:"NumberInput"}),"\n",(0,r.jsx)(n,{data:W}),"\n",(0,r.jsx)(o,{component:"NumberInput",refType:"input"}),"\n",(0,r.jsx)(f,{component:"NumberInput"})]})}function R(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(A,{...e,children:(0,r.jsx)(B,{...e})})}function T(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},89868:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(73681).Z)("outline","at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},34772:function(e,t,n){"use strict";n.d(t,{C:function(){return o}});var r=n(52322),a=n(42697);let o={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Y,{label:"With prefix",placeholder:"Dollars",prefix:"$",defaultValue:100,mb:"md"}),(0,r.jsx)(a.Y,{label:"With suffix",placeholder:"Percents",suffix:"%",defaultValue:100,mt:"md"})]})},code:`
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
`,centered:!0,maxWidth:340}},76528:function(e,t,n){"use strict";n.d(t,{Mt:function(){return r},nW:function(){return a},pc:function(){return o}});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],a=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},42697:function(e,t,n){"use strict";n.d(t,{Y:function(){return C}});var r=n(52322),a=n(2784),o=n(40489),l=n(9462),i=n(9341),c=n(82692),s=n(70837),u=n(31938),d=n(91482),m=n(11200),p=n(51477),h=n(46690),b=n(38483),f=n(82027),x=n(73063),j=n(63409);function v({direction:e,style:t,...n}){return(0,r.jsx)("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,r.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}var y={root:"m_e2f5cd4e",controls:"m_95e17d22",control:"m_80b4b171"};let g=/^(0\.0*|-0(\.0*)?)$/,N=/^-?0\d+(\.\d+)?\.?$/;function I(e){return"string"==typeof e&&""!==e&&!Number.isNaN(Number(e))}function w(e){return"number"==typeof e?e<Number.MAX_SAFE_INTEGER:""===e||I(e)&&Number(e)<Number.MAX_SAFE_INTEGER}function D(e,t,n){return void 0===e||(void 0===t||e>=t)&&(void 0===n||e<=n)}let S={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,withKeyboardEvents:!0,allowLeadingZeros:!0,trimLeadingZeroesOnBlur:!0,startValue:0},V=(0,m.Z)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,d.ap)(t,"ni-chevron-size")}})),C=(0,f.d5)((e,t)=>{let n=(0,b.w)("NumberInput",S,e),{className:d,classNames:m,styles:f,unstyled:C,vars:E,onChange:k,onValueChange:Y,value:W,defaultValue:_,max:M,min:A,step:B,hideControls:R,rightSection:T,isAllowed:F,clampBehavior:H,onBlur:z,allowDecimal:P,decimalScale:Z,onKeyDown:G,onKeyDownCapture:L,handlersRef:X,startValue:$,disabled:U,rightSectionPointerEvents:K,allowNegative:O,readOnly:q,size:J,rightSectionWidth:Q,stepHoldInterval:ee,stepHoldDelay:et,allowLeadingZeros:en,withKeyboardEvents:er,trimLeadingZeroesOnBlur:ea,...eo}=n,el=(0,h.y)({name:"NumberInput",classes:y,props:n,classNames:m,styles:f,unstyled:C,vars:E,varsResolver:V}),{resolvedClassNames:ei,resolvedStyles:ec}=(0,p.h)({classNames:m,styles:f,props:n}),[es,eu]=(0,i.C)({value:W,defaultValue:_,finalValue:"",onChange:k}),ed=void 0!==et&&void 0!==ee,em=(0,a.useRef)(null),ep=(0,a.useRef)(null),eh=(0,a.useRef)(0),eb=e=>{let t=String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},ef=e=>{em.current&&void 0!==e&&em.current.setSelectionRange(e,e)},ex=(0,a.useRef)(u.Z);ex.current=()=>{let e;if(!w(es))return;let t=Math.max(eb(es),eb(B)),n=10**t;if(!I(es)&&("number"!=typeof es||Number.isNaN(es)))e=(0,c.u)($,A,M);else if(void 0!==M){let t=(Math.round(Number(es)*n)+Math.round(B*n))/n;e=t<=M?t:M}else e=(Math.round(Number(es)*n)+Math.round(B*n))/n;let r=e.toFixed(t);eu(parseFloat(r)),Y?.({floatValue:parseFloat(r),formattedValue:r,value:r},{source:"increment"}),setTimeout(()=>ef(em.current?.value.length),0)};let ej=(0,a.useRef)(u.Z);ej.current=()=>{let e;if(!w(es))return;let t=void 0!==A?A:O?Number.MIN_SAFE_INTEGER:0,n=Math.max(eb(es),eb(B)),r=10**n;if(!I(es)&&"number"!=typeof es||Number.isNaN(es))e=(0,c.u)($,t,M);else{let n=(Math.round(Number(es)*r)-Math.round(B*r))/r;e=void 0!==t&&n<t?t:n}let a=e.toFixed(n);eu(parseFloat(a)),Y?.({floatValue:parseFloat(a),formattedValue:a,value:a},{source:"decrement"}),setTimeout(()=>ef(em.current?.value.length),0)},(0,s.kR)(X,{increment:ex.current,decrement:ej.current});let ev=e=>{e?ex.current():ej.current(),eh.current+=1},ey=e=>{if(ev(e),ed){let t="number"==typeof ee?ee:ee(eh.current);ep.current=window.setTimeout(()=>ey(e),t)}},eg=(e,t)=>{e.preventDefault(),em.current?.focus(),ev(t),ed&&(ep.current=window.setTimeout(()=>ey(t),et))},eN=()=>{ep.current&&window.clearTimeout(ep.current),ep.current=null,eh.current=0},eI=(0,r.jsxs)("div",{...el("controls"),children:[(0,r.jsx)(j.k,{...el("control"),tabIndex:-1,"aria-hidden":!0,disabled:U||"number"==typeof es&&void 0!==M&&es>=M,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{eg(e,!0)},onPointerUp:eN,onPointerLeave:eN,children:(0,r.jsx)(v,{direction:"up"})}),(0,r.jsx)(j.k,{...el("control"),tabIndex:-1,"aria-hidden":!0,disabled:U||"number"==typeof es&&void 0!==A&&es<=A,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{eg(e,!1)},onPointerUp:eN,onPointerLeave:eN,children:(0,r.jsx)(v,{direction:"down"})})]});return(0,r.jsx)(x.M,{component:l.h3,allowNegative:O,className:(0,o.Z)(y.root,d),size:J,...eo,readOnly:q,disabled:U,value:es,getInputRef:(0,s.Yx)(t,em),onValueChange:(e,t)=>{var n,r;"event"===t.source&&eu((n=e.floatValue,r=e.value,("number"==typeof n?!(n<Number.MAX_SAFE_INTEGER):!!Number.isNaN(Number(n)))||Number.isNaN(n)||!(14>r.toString().replace(".","").length)||""===r||g.test(e.value)||en&&N.test(e.value))?e.value:e.floatValue),Y?.(e,t)},rightSection:R||q||!w(es)?T:T||eI,classNames:ei,styles:ec,unstyled:C,__staticSelector:"NumberInput",decimalScale:P?Z:0,onKeyDown:e=>{G?.(e),!q&&er&&("ArrowUp"===e.key&&(e.preventDefault(),ex.current()),"ArrowDown"===e.key&&(e.preventDefault(),ej.current()))},onKeyDownCapture:e=>{if(L?.(e),"Backspace"===e.key){let t=em.current;0===t.selectionStart&&t.selectionStart===t.selectionEnd&&(e.preventDefault(),window.setTimeout(()=>ef(0),0))}},rightSectionPointerEvents:K??(U?"none":void 0),rightSectionWidth:Q??`var(--ni-right-section-width-${J||"sm"})`,allowLeadingZeros:en,onBlur:e=>{if(z?.(e),"blur"===H&&"number"==typeof es&&(0,c.u)(es,A,M)!==es&&eu((0,c.u)(es,A,M)),ea&&"string"==typeof es&&15>eb(es)){let e=es.replace(/^0+/,""),t=parseFloat(e);eu(Number.isNaN(t)||t>Number.MAX_SAFE_INTEGER?e:(0,c.u)(t,A,M))}},isAllowed:e=>"strict"===H?F?F(e)&&D(e.floatValue,A,M):D(e.floatValue,A,M):!F||F(e)})});C.classes={...x.M.classes,...y},C.displayName="@mantine/core/NumberInput"}},function(e){e.O(0,[61177,9462,66748,11340,92888,49774,40179],function(){return e(e.s=6062)}),_N_E=e.O()}]);