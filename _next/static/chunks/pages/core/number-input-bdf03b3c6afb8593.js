(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1928],{1798:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},8268:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","at","At",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},12601:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/number-input",function(){return n(15777)}])},15777:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>B});var r=n(6029),a=n(16285),l=n(70204),o=n(55661);let i={type:"configurator",component:function(e){return(0,r.jsx)(l.Q,{...e,placeholder:"Input placeholder"})},code:`
import { NumberInput } from '@mantine/core';


function Demo() {
  return (
    <NumberInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,centered:!0,maxWidth:340,controls:o.$7},s={type:"code",component:function(){return(0,r.jsx)(l.Q,{label:"Enter value between 10 and 20",placeholder:"Don't enter more than 20 and less than 10",min:10,max:20})},code:`
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
`,centered:!0,maxWidth:340},c={type:"code",component:function(){return(0,r.jsx)(l.Q,{label:"You cannot enter number less than 0 or greater than 100",placeholder:"You cannot enter number less than 0 or greater than 100",clampBehavior:"strict",min:0,max:100})},code:`
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
`,centered:!0,maxWidth:340};var d=n(74812);let u={type:"code",component:function(){return(0,r.jsx)(l.Q,{label:"Negative number are not allowed",placeholder:"Do not enter negative numbers",allowNegative:!1})},code:`
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
`,centered:!0,maxWidth:340},p={type:"code",component:function(){return(0,r.jsx)(l.Q,{label:"Decimals are not allowed",placeholder:"Do not enter decimal numbers",allowDecimal:!1})},code:`
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
`,centered:!0,maxWidth:340},m={type:"code",component:function(){return(0,r.jsx)(l.Q,{label:"You can enter only 2 digits after decimal point",placeholder:"Do not enter more that 2",decimalScale:2})},code:`
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
`,centered:!0,maxWidth:340},h={type:"code",component:function(){return(0,r.jsx)(l.Q,{label:"Always show 2 digits after decimal point",placeholder:"Do not enter more that 2",decimalScale:2,fixedDecimalScale:!0,defaultValue:2.2})},code:`
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
`,centered:!0,maxWidth:340},b={type:"code",component:function(){return(0,r.jsx)(l.Q,{label:"Custom decimal separator",placeholder:"You can change it",decimalSeparator:",",defaultValue:20.573})},code:`
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
`,centered:!0,maxWidth:340},f={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Q,{label:"Thousands are separated with a coma",placeholder:"Thousands are separated with a coma",thousandSeparator:",",defaultValue:1e6}),(0,r.jsx)(l.Q,{label:"Thousands are separated with a space",placeholder:"Thousands are separated with a space",thousandSeparator:" ",defaultValue:1e6,mt:"md"})]})},code:`
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
`,centered:!0,maxWidth:340};var x=n(41495);let v=(0,x.A)("outline","currency-dram","CurrencyDram",[["path",{d:"M4 10a6 6 0 1 1 12 0v10",key:"svg-0"}],["path",{d:"M12 16h8",key:"svg-1"}],["path",{d:"M12 12h8",key:"svg-2"}]]),g={type:"code",component:function(){let e=(0,r.jsx)(v,{size:20,stroke:1.5});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Q,{leftSection:e,label:"With left section",placeholder:"With left section"}),(0,r.jsx)(l.Q,{rightSection:e,label:"With right section",placeholder:"With right section",mt:"md"})]})},code:`
import { NumberInput } from '@mantine/core';
import { IconCurrencyDram } from '@tabler/icons-react';

function Demo() {
  const icon = <IconCurrencyDram size={20} stroke={1.5} />;
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
`,centered:!0,maxWidth:340},y=(0,x.A)("outline","chart-bubble","ChartBubble",[["path",{d:"M6 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-0"}],["path",{d:"M16 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M14.5 7.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0",key:"svg-2"}]]),j={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Q,{label:"Hide controls",placeholder:"Hide controls",hideControls:!0}),(0,r.jsx)(l.Q,{label:"Custom right section",placeholder:"Custom right section",mt:"md",rightSection:(0,r.jsx)(y,{}),rightSectionPointerEvents:"none"})]})},code:`
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
`,component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Q,{label:"Step on hold",description:"Step value when clicking and holding increment/decrement buttons",placeholder:"Hold mouse down on control button",stepHoldDelay:500,stepHoldInterval:100}),(0,r.jsx)(l.Q,{mt:"md",label:"Step the value with interval function",description:"Step value will increase incrementally when control is hold",placeholder:"Hold mouse down on control button",stepHoldDelay:500,stepHoldInterval:e=>Math.max(1e3/e**2,25)})]})},centered:!0,maxWidth:340};var w=n(55729),I=n(57414),k=n(61087);let D={type:"code",component:function(){let e=(0,w.useRef)(null);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Q,{label:"Click buttons to change value",placeholder:"Click the buttons",handlersRef:e,step:2,min:10,max:20,defaultValue:15}),(0,r.jsxs)(I.Y,{mt:"md",justify:"center",children:[(0,r.jsx)(k.$,{onClick:()=>e.current?.decrement(),variant:"default",children:"Decrement by 2"}),(0,r.jsx)(k.$,{onClick:()=>e.current?.increment(),variant:"default",children:"Increment by 2"})]})]})},code:`
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
`,centered:!0,maxWidth:340},S={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Q,{label:"Boolean error",placeholder:"Boolean error",error:!0}),(0,r.jsx)(l.Q,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"})]})},maxWidth:340,centered:!0,code:`
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
`},M={type:"code",component:function(){return(0,r.jsx)(l.Q,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:`
import { NumberInput } from '@mantine/core';

function Demo() {
  return <NumberInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`};var V=n(8268),A=n(52206);let C=`
import { IconAt } from '@tabler/icons-react';
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="Label"
      placeholder="NumberInput"
      description="Description"
      error="Error"
      withAsterisk
      leftSection={<IconAt size={18} />}
      {{props}}
    />
  );
}
`,E={type:"styles-api",data:A.G,component:function(e){return(0,r.jsx)(l.Q,{label:"Label",placeholder:"NumberInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:(0,r.jsx)(V.A,{size:18}),...e})},code:C,centered:!0,maxWidth:340};var _=n(38547),W=n(5262);let R=(0,_.P)(W.XZ.NumberInput);function T(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components},{Demo:n,GetElementRef:l,InputAccessibility:o,InputFeatures:x,InputSections:v,StylesApiSelectors:y}=t;return n||F("Demo",!0),l||F("GetElementRef",!0),o||F("InputAccessibility",!0),x||F("InputFeatures",!0),v||F("InputSections",!0),y||F("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"NumberInput"})," is based on ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/react-number-format",children:"react-number-format"}),".\nIt supports most of the props from the ",(0,r.jsx)(t.code,{children:"NumericFormat"})," component in the original package."]}),"\n",(0,r.jsx)(x,{component:"NumberInput",element:"input"}),"\n",(0,r.jsx)(n,{data:i}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { NumberInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string | number>('');\n  return <NumberInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"value-type",children:"Value type"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"value"}),", ",(0,r.jsx)(t.code,{children:"defaultValue"})," and ",(0,r.jsx)(t.code,{children:"onChange"})," props can be either string or number. In all cases\nwhen ",(0,r.jsx)(t.code,{children:"NumberInput"})," value can be represented as a number, ",(0,r.jsx)(t.code,{children:"onChange"})," function is called\nwith a number (for example ",(0,r.jsx)(t.code,{children:"55"}),", ",(0,r.jsx)(t.code,{children:"1.28"}),", ",(0,r.jsx)(t.code,{children:"-100"}),", etc.). But there are several cases when\nit is not possible to represent value as a number:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Empty state is represented as an empty string – ",(0,r.jsx)(t.code,{children:"''"})]}),"\n",(0,r.jsxs)(t.li,{children:["Numbers that are larger than ",(0,r.jsx)(t.code,{children:"Number.MAX_SAFE_INTEGER - 1"})," or smaller than ",(0,r.jsx)(t.code,{children:"Number.MIN_SAFE_INTEGER + 1"})," are represented as strings – ",(0,r.jsx)(t.code,{children:"'90071992547409910'"})]}),"\n",(0,r.jsxs)(t.li,{children:["Numbers that consist of only multiple zeros are represented as strings – ",(0,r.jsx)(t.code,{children:"0."}),", ",(0,r.jsx)(t.code,{children:"0.0"}),", ",(0,r.jsx)(t.code,{children:"-0.00"}),", etc."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"min-and-max",children:"min and max"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"min"})," and ",(0,r.jsx)(t.code,{children:"max"})," props to limit the input value:"]}),"\n",(0,r.jsx)(n,{data:s}),"\n",(0,r.jsx)(t.h2,{id:"clamp-behavior",children:"Clamp behavior"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the value is clamped when the input is blurred. If you set ",(0,r.jsx)(t.code,{children:'clampBehavior="strict"'}),",\nit will not be possible to enter value outside of min/max range. Note that this option\nmay cause issues if you have tight ",(0,r.jsx)(t.code,{children:"min"})," and ",(0,r.jsx)(t.code,{children:"max"}),", for example ",(0,r.jsx)(t.code,{children:"min={10}"})," and ",(0,r.jsx)(t.code,{children:"max={20}"}),".\nIf you need to disable value clamping entirely, set ",(0,r.jsx)(t.code,{children:'clampBehavior="none"'}),"."]}),"\n",(0,r.jsx)(n,{data:c}),"\n",(0,r.jsx)(t.h2,{id:"prefix-and-suffix",children:"Prefix and suffix"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"prefix"})," and ",(0,r.jsx)(t.code,{children:"suffix"})," props to add given string to the start or end of the input value:"]}),"\n",(0,r.jsx)(n,{data:d.K}),"\n",(0,r.jsx)(t.h2,{id:"negative-numbers",children:"Negative numbers"}),"\n",(0,r.jsxs)(t.p,{children:["By default, negative numbers are allowed. Set ",(0,r.jsx)(t.code,{children:"allowNegative={false}"})," to allow only positive numbers."]}),"\n",(0,r.jsx)(n,{data:u}),"\n",(0,r.jsx)(t.h2,{id:"decimal-numbers",children:"Decimal numbers"}),"\n",(0,r.jsxs)(t.p,{children:["By default, decimal numbers are allowed. Set ",(0,r.jsx)(t.code,{children:"allowDecimal={false}"})," to allow only integers."]}),"\n",(0,r.jsx)(n,{data:p}),"\n",(0,r.jsx)(t.h2,{id:"decimal-scale",children:"Decimal scale"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"decimalScale"})," controls how many decimal places are allowed:"]}),"\n",(0,r.jsx)(n,{data:m}),"\n",(0,r.jsx)(t.h2,{id:"fixed-decimal-scale",children:"Fixed decimal scale"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"fixedDecimalScale"})," to always display fixed number of decimal places:"]}),"\n",(0,r.jsx)(n,{data:h}),"\n",(0,r.jsx)(t.h2,{id:"decimal-separator",children:"Decimal separator"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"decimalSeparator"})," to change decimal separator character:"]}),"\n",(0,r.jsx)(n,{data:b}),"\n",(0,r.jsx)(t.h2,{id:"thousand-separator",children:"Thousand separator"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"thousandSeparator"})," prop to separate thousands with a character. You can control\ngrouping logic with ",(0,r.jsx)(t.code,{children:"thousandsGroupStyle"}),", it accepts: ",(0,r.jsx)(t.code,{children:"thousand"}),", ",(0,r.jsx)(t.code,{children:"lakh"}),", ",(0,r.jsx)(t.code,{children:"wan"}),", ",(0,r.jsx)(t.code,{children:"none"})," values."]}),"\n",(0,r.jsx)(n,{data:f}),"\n",(0,r.jsx)(v,{component:"NumberInput"}),"\n",(0,r.jsx)(n,{data:g}),"\n",(0,r.jsx)(t.h2,{id:"incrementdecrement-controls",children:"Increment/decrement controls"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the right section is occupied by increment and decrement buttons.\nTo hide them, set ",(0,r.jsx)(t.code,{children:"hideControls"})," prop. You can also use ",(0,r.jsx)(t.code,{children:"rightSection"})," prop to render anything\nin the right section to replace the default controls."]}),"\n",(0,r.jsx)(n,{data:j}),"\n",(0,r.jsx)(t.h2,{id:"incrementdecrement-on-hold",children:"Increment/decrement on hold"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"stepHoldDelay"})," and ",(0,r.jsx)(t.code,{children:"stepHoldInterval"})," props to define behavior when increment/decrement controls are clicked and hold:"]}),"\n",(0,r.jsx)(n,{data:N}),"\n",(0,r.jsx)(t.h2,{id:"custom-increment-and-decrement-controls",children:"Custom increment and decrement controls"}),"\n",(0,r.jsxs)(t.p,{children:["You can get a ref with ",(0,r.jsx)(t.code,{children:"increment"})," and ",(0,r.jsx)(t.code,{children:"decrement"})," functions to create custom controls:"]}),"\n",(0,r.jsx)(n,{data:D}),"\n",(0,r.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,r.jsx)(n,{data:S}),"\n",(0,r.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,r.jsx)(n,{data:M}),"\n",(0,r.jsx)(y,{component:"NumberInput"}),"\n",(0,r.jsx)(n,{data:E}),"\n",(0,r.jsx)(l,{component:"NumberInput",refType:"input"}),"\n",(0,r.jsx)(o,{component:"NumberInput"})]})}function B(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(R,{...e,children:(0,r.jsx)(T,{...e})})}function F(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},24583:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41949:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},55661:(e,t,n)=>{"use strict";n.d(t,{$7:()=>l,l$:()=>r,wQ:()=>a});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],a=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},65433:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},70204:(e,t,n)=>{"use strict";n.d(t,{Q:()=>A});var r=n(6029),a=n(55729),l=n(50212),o=n(2027),i=n(38744),s=n(7798),c=n(28136),d=n(18963),u=n(14163),p=n(33987),m=n(38757),h=n(15583),b=n(38919),f=n(8411),x=n(51718),v=n(17976),g={root:"m_e2f5cd4e",controls:"m_95e17d22",control:"m_80b4b171"};function y({direction:e,style:t,...n}){return(0,r.jsx)("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n,children:(0,r.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}let j=/^(0\.0*|-0(\.0*)?)$/,N=/^-?0\d+(\.\d+)?\.?$/,w=/\.\d*0$/,I=/^-?\d+\.$/;function k(e){return"string"==typeof e&&""!==e&&!Number.isNaN(Number(e))}function D(e){return"number"==typeof e?e<Number.MAX_SAFE_INTEGER:""===e||k(e)&&Number(e)<Number.MAX_SAFE_INTEGER}function S(e,t,n){return void 0===e||(void 0===t||e>=t)&&(void 0===n||e<=n)}let M={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,withKeyboardEvents:!0,allowLeadingZeros:!0,trimLeadingZeroesOnBlur:!0,startValue:0,allowedDecimalSeparators:[".",","]},V=(0,p.V)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,u.YC)(t,"ni-chevron-size")}})),A=(0,f.P9)((e,t)=>{let n=(0,b.Y)("NumberInput",M,e),{className:u,classNames:p,styles:f,unstyled:A,vars:C,onChange:E,onValueChange:_,value:W,defaultValue:R,max:T,min:B,step:F,hideControls:Q,rightSection:z,isAllowed:H,clampBehavior:P,onBlur:Y,allowDecimal:G,decimalScale:$,onKeyDown:L,onKeyDownCapture:X,handlersRef:K,startValue:O,disabled:Z,rightSectionPointerEvents:q,allowNegative:U,readOnly:J,size:ee,rightSectionWidth:et,stepHoldInterval:en,stepHoldDelay:er,allowLeadingZeros:ea,withKeyboardEvents:el,trimLeadingZeroesOnBlur:eo,allowedDecimalSeparators:ei,attributes:es,...ec}=n,ed=(0,h.I)({name:"NumberInput",classes:g,props:n,classNames:p,styles:f,unstyled:A,attributes:es,vars:C,varsResolver:V}),{resolvedClassNames:eu,resolvedStyles:ep}=(0,m.Y)({classNames:p,styles:f,props:n}),[em,eh]=(0,s.Z)({value:W,defaultValue:R,finalValue:"",onChange:E}),eb=void 0!==er&&void 0!==en,ef=(0,a.useRef)(null),ex=(0,a.useRef)(null),ev=(0,a.useRef)(0),eg=e=>{let t=String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},ey=e=>{ef.current&&void 0!==e&&ef.current.setSelectionRange(e,e)},ej=(0,a.useRef)(d.l);ej.current=()=>{let e;if(!D(em))return;let t=Math.max(eg(em),eg(F)),n=10**t;if(!k(em)&&("number"!=typeof em||Number.isNaN(em)))e=(0,i.q)(O,B,T);else if(void 0!==T){let t=(Math.round(Number(em)*n)+Math.round(F*n))/n;e=t<=T?t:T}else e=(Math.round(Number(em)*n)+Math.round(F*n))/n;let r=e.toFixed(t);eh(parseFloat(r)),_?.({floatValue:parseFloat(r),formattedValue:r,value:r},{source:"increment"}),setTimeout(()=>ey(ef.current?.value.length),0)};let eN=(0,a.useRef)(d.l);eN.current=()=>{let e;if(!D(em))return;let t=void 0!==B?B:U?Number.MIN_SAFE_INTEGER:0,n=Math.max(eg(em),eg(F)),r=10**n;if(!k(em)&&"number"!=typeof em||Number.isNaN(em))e=(0,i.q)(O,t,T);else{let n=(Math.round(Number(em)*r)-Math.round(F*r))/r;e=void 0!==t&&n<t?t:n}let a=e.toFixed(n);eh(parseFloat(a)),_?.({floatValue:parseFloat(a),formattedValue:a,value:a},{source:"decrement"}),setTimeout(()=>ey(ef.current?.value.length),0)},(0,c.bl)(K,{increment:ej.current,decrement:eN.current});let ew=e=>{e?ej.current?.():eN.current?.(),ev.current+=1},eI=e=>{if(ew(e),eb){let t="number"==typeof en?en:en(ev.current);ex.current=window.setTimeout(()=>eI(e),t)}},ek=(e,t)=>{e.preventDefault(),ef.current?.focus(),ew(t),eb&&(ex.current=window.setTimeout(()=>eI(t),er))},eD=()=>{ex.current&&window.clearTimeout(ex.current),ex.current=null,ev.current=0},eS=(0,r.jsxs)("div",{...ed("controls"),children:[(0,r.jsx)(v.N,{...ed("control"),tabIndex:-1,"aria-hidden":!0,disabled:Z||"number"==typeof em&&void 0!==T&&em>=T,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ek(e,!0)},onPointerUp:eD,onPointerLeave:eD,children:(0,r.jsx)(y,{direction:"up"})}),(0,r.jsx)(v.N,{...ed("control"),tabIndex:-1,"aria-hidden":!0,disabled:Z||"number"==typeof em&&void 0!==B&&em<=B,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{ek(e,!1)},onPointerUp:eD,onPointerLeave:eD,children:(0,r.jsx)(y,{direction:"down"})})]});return(0,r.jsx)(x.O,{component:o.HG,allowNegative:U,className:(0,l.A)(g.root,u),size:ee,inputMode:"decimal",...ec,readOnly:J,disabled:Z,value:em,getInputRef:(0,c.pc)(t,ef),onValueChange:(e,t)=>{"event"===t.source&&eh(!function(e,t){return("number"==typeof e?e<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(e)))&&!Number.isNaN(e)&&14>t.toString().replace(".","").length&&""!==t}(e.floatValue,e.value)||j.test(e.value)||ea&&N.test(e.value)||w.test(e.value)||I.test(e.value)?e.value:e.floatValue),_?.(e,t)},rightSection:Q||J||!D(em)?z:z||eS,classNames:eu,styles:ep,unstyled:A,__staticSelector:"NumberInput",decimalScale:G?$:0,onKeyDown:e=>{L?.(e),!J&&el&&("ArrowUp"===e.key&&(e.preventDefault(),ej.current?.()),"ArrowDown"===e.key&&(e.preventDefault(),eN.current?.()))},onKeyDownCapture:e=>{if(X?.(e),"Backspace"===e.key){let t=ef.current;t&&0===t.selectionStart&&t.selectionStart===t.selectionEnd&&(e.preventDefault(),window.setTimeout(()=>ey(0),0))}},rightSectionPointerEvents:q??(Z?"none":void 0),rightSectionWidth:et??`var(--ni-right-section-width-${ee||"sm"})`,allowLeadingZeros:ea,allowedDecimalSeparators:ei,onBlur:e=>{let t=em;"blur"===P&&"number"==typeof t&&(t=(0,i.q)(t,B,T)),eo&&"string"==typeof t&&15>eg(t)&&(t=function(e,t,n){let r=e.toString(),a=I.test(r),l=r.replace(/^0+(?=\d)/,""),o=parseFloat(l);if(Number.isNaN(o))return l;if(o>Number.MAX_SAFE_INTEGER)return void 0!==t?t:l;let s=(0,i.q)(o,n,t);if(a){let e=s.toString().replace(/^0+(?=\d)/,"");return`${e}.`}return s}(t,T,B)),em!==t&&eh(t),Y?.(e)},attributes:es,isAllowed:e=>"strict"===P?H?H(e)&&S(e.floatValue,B,T):S(e.floatValue,B,T):!H||H(e)})});A.classes={...x.O.classes,...g},A.displayName="@mantine/core/NumberInput"},74812:(e,t,n)=>{"use strict";n.d(t,{K:()=>l});var r=n(6029),a=n(70204);let l={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.Q,{label:"With prefix",placeholder:"Dollars",prefix:"$",defaultValue:100,mb:"md"}),(0,r.jsx)(a.Q,{label:"With suffix",placeholder:"Percents",suffix:"%",defaultValue:100,mt:"md"})]})},code:`
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
`,centered:!0,maxWidth:340}},84276:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,n)=>{"use strict";n.d(t,{A:()=>r});let r=(0,n(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}},e=>{e.O(0,[2027,38547,90636,46593,38792],()=>e(e.s=12601)),_N_E=e.O()}]);