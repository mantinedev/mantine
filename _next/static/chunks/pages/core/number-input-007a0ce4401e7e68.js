(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6672],{93693:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},72916:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/number-input",function(){return n(57542)}])},57542:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return q}});var r=n(24246),a=n(71670),o=n(3916),l=n(30289),i=n(27378),c=n(62339),u=n(77481);let d=`
import { NumberInput } from '@mantine/core';


function Demo() {
  return (
    <NumberInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,s={type:"configurator",component:function(e){return i.createElement(c.Y,{...e,placeholder:"Input placeholder"})},code:d,centered:!0,maxWidth:340,controls:u.pc},m=`
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
`,p={type:"code",component:function(){return i.createElement(c.Y,{label:"Enter value between 10 and 20",placeholder:"Don't enter more than 20 and less than 10",min:10,max:20})},code:m,centered:!0,maxWidth:340},h=`
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
`,b={type:"code",component:function(){return i.createElement(c.Y,{label:"You cannot enter number less than 0 or greater than 100",placeholder:"You cannot enter number less than 0 or greater than 100",clampBehavior:"strict",min:0,max:100})},code:h,centered:!0,maxWidth:340};var f=n(12375);let x=`
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
`,y={type:"code",component:function(){return i.createElement(c.Y,{label:"Negative number are not allowed",placeholder:"Do not enter negative numbers",allowNegative:!1})},code:x,centered:!0,maxWidth:340},g=`
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
`,v={type:"code",component:function(){return i.createElement(c.Y,{label:"Decimals are not allowed",placeholder:"Do not enter decimal numbers",allowDecimal:!1})},code:g,centered:!0,maxWidth:340},N=`
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
`,I={type:"code",component:function(){return i.createElement(c.Y,{label:"You can enter only 2 digits after decimal point",placeholder:"Do not enter more that 2",decimalScale:2})},code:N,centered:!0,maxWidth:340},j=`
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
`,w={type:"code",component:function(){return i.createElement(c.Y,{label:"Always show 2 digits after decimal point",placeholder:"Do not enter more that 2",decimalScale:2,fixedDecimalScale:!0,defaultValue:2.2})},code:j,centered:!0,maxWidth:340},D=`
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
`,E={type:"code",component:function(){return i.createElement(c.Y,{label:"Custom decimal separator",placeholder:"You can change it",decimalSeparator:",",defaultValue:20.573})},code:D,centered:!0,maxWidth:340},V=`
import { NumberInput } from '@mantine/core';

function Demo() {
  return (
    <NumberInput
      label="With thousands separator"
      placeholder="Thousands are separated with coma"
      thousandSeparator=","
      defaultValue={1_000_000}
    />
  );
}
`,S={type:"code",component:function(){return i.createElement(c.Y,{label:"With thousands separator",placeholder:"Thousands are separated with coma",thousandSeparator:",",defaultValue:1e6})},code:V,centered:!0,maxWidth:340};var C=n(71078),W=n(54764),k=(0,W.Z)("currency-dram","IconCurrencyDram",[["path",{d:"M4 10a6 6 0 1 1 12 0v10",key:"svg-0"}],["path",{d:"M12 16h8",key:"svg-1"}],["path",{d:"M12 12h8",key:"svg-2"}]]);let Y=`
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
`,B={type:"code",component:function(){let e=i.createElement(k,{style:{width:(0,C.h)(20),height:(0,C.h)(20)},stroke:1.5});return i.createElement(i.Fragment,null,i.createElement(c.Y,{leftSection:e,label:"With left section",placeholder:"With left section"}),i.createElement(c.Y,{rightSection:e,label:"With right section",placeholder:"With right section",mt:"md"}))},code:Y,centered:!0,maxWidth:340};var _=(0,W.Z)("chart-bubble","IconChartBubble",[["path",{d:"M6 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-0"}],["path",{d:"M16 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M14.5 7.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0",key:"svg-2"}]]);let A=`
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
`,z={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.Y,{label:"Hide controls",placeholder:"Hide controls",hideControls:!0}),i.createElement(c.Y,{label:"Custom right section",placeholder:"Custom right section",mt:"md",rightSection:i.createElement(_,null),rightSectionPointerEvents:"none"}))},code:A,centered:!0,maxWidth:340};var M=n(22971),R=n(8671);let P=`
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
`,Z={type:"code",component:function(){let e=(0,i.useRef)(null);return i.createElement(i.Fragment,null,i.createElement(c.Y,{label:"Click buttons to change value",placeholder:"Click the buttons",handlersRef:e,step:2,min:10,max:20,defaultValue:15}),i.createElement(M.Z,{mt:"md",justify:"center"},i.createElement(R.z,{onClick:()=>e.current?.decrement(),variant:"default"},"Decrement by 2"),i.createElement(R.z,{onClick:()=>e.current?.increment(),variant:"default"},"Increment by 2")))},code:P,centered:!0,maxWidth:340},F=`
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
`,L={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.Y,{label:"Boolean error",placeholder:"Boolean error",error:!0}),i.createElement(c.Y,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"}))},maxWidth:340,centered:!0,code:F},T=`
import { NumberInput } from '@mantine/core';

function Demo() {
  return <NumberInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`,H={type:"code",component:function(){return i.createElement(c.Y,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:T};var G=n(93693),$=n(68170);let O=`
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
`,U={type:"styles-api",data:$.L,component:function(e){return i.createElement(c.Y,{label:"Label",placeholder:"NumberInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:i.createElement(G.Z,{style:{width:(0,C.h)(18),height:(0,C.h)(18)}}),...e})},code:O,centered:!0,maxWidth:340},X=(0,o.A)(l.us.NumberInput);function K(e){let t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components},{Demo:n,GetElementRef:o,InputAccessibility:l,InputFeatures:i,InputSections:c,StylesApiSelectors:u}=t;return n||J("Demo",!0),o||J("GetElementRef",!0),l||J("InputAccessibility",!0),i||J("InputFeatures",!0),c||J("InputSections",!0),u||J("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(i,{component:"NumberInput",element:"input"}),"\n",(0,r.jsx)(n,{data:s}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { NumberInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string | number>('');\n  return <NumberInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"min-and-max",children:"min and max"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"min"})," and ",(0,r.jsx)(t.code,{children:"max"})," props to limit the input value:"]}),"\n",(0,r.jsx)(n,{data:p}),"\n",(0,r.jsx)(t.h2,{id:"clamp-behavior",children:"Clamp behavior"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the value is clamped when the input is blurred. If you set ",(0,r.jsx)(t.code,{children:'clampBehavior="strict"'}),",\nit will not be possible to enter value outside of min/max range. Note that this option\nmay cause issues if you have tight ",(0,r.jsx)(t.code,{children:"min"})," and ",(0,r.jsx)(t.code,{children:"max"}),", for example ",(0,r.jsx)(t.code,{children:"min={10}"})," and ",(0,r.jsx)(t.code,{children:"max={20}"}),".\nIf you need to disable value clamping entirely, set ",(0,r.jsx)(t.code,{children:'clampBehavior="none"'}),"."]}),"\n",(0,r.jsx)(n,{data:b}),"\n",(0,r.jsx)(t.h2,{id:"prefix-and-suffix",children:"Prefix and suffix"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"prefix"})," and ",(0,r.jsx)(t.code,{children:"suffix"})," props to add given string to the start or end of the input value:"]}),"\n",(0,r.jsx)(n,{data:f.C}),"\n",(0,r.jsx)(t.h2,{id:"negative-numbers",children:"Negative numbers"}),"\n",(0,r.jsxs)(t.p,{children:["By default, negative numbers are allowed. Set ",(0,r.jsx)(t.code,{children:"allowNegative={false}"})," to allow only positive numbers."]}),"\n",(0,r.jsx)(n,{data:y}),"\n",(0,r.jsx)(t.h2,{id:"decimal-numbers",children:"Decimal numbers"}),"\n",(0,r.jsxs)(t.p,{children:["By default, decimal numbers are allowed. Set ",(0,r.jsx)(t.code,{children:"allowDecimal={false}"})," to allow only integers."]}),"\n",(0,r.jsx)(n,{data:v}),"\n",(0,r.jsx)(t.h2,{id:"decimal-scale",children:"Decimal scale"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"decimalScale"})," controls how many decimal places are allowed:"]}),"\n",(0,r.jsx)(n,{data:I}),"\n",(0,r.jsx)(t.h2,{id:"fixed-decimal-scale",children:"Fixed decimal scale"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"fixedDecimalScale"})," to always display fixed number of decimal places:"]}),"\n",(0,r.jsx)(n,{data:w}),"\n",(0,r.jsx)(t.h2,{id:"decimal-separator",children:"Decimal separator"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"decimalSeparator"})," to change decimal separator character:"]}),"\n",(0,r.jsx)(n,{data:E}),"\n",(0,r.jsx)(t.h2,{id:"thousand-separator",children:"Thousand separator"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"thousandSeparator"})," prop to separate thousands with a character. You can control\ngrouping logic with ",(0,r.jsx)(t.code,{children:"thousandsGroupStyle"}),", it accepts: ",(0,r.jsx)(t.code,{children:"thousand"}),", ",(0,r.jsx)(t.code,{children:"lakh"}),", ",(0,r.jsx)(t.code,{children:"wan"}),", ",(0,r.jsx)(t.code,{children:"none"})," values."]}),"\n",(0,r.jsx)(n,{data:S}),"\n",(0,r.jsx)(c,{component:"NumberInput"}),"\n",(0,r.jsx)(n,{data:B}),"\n",(0,r.jsx)(t.h2,{id:"incrementdecrement-controls",children:"Increment/decrement controls"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the right section is occupied by increment and decrement buttons.\nTo hide them, set ",(0,r.jsx)(t.code,{children:"hideControls"})," prop. You can also use ",(0,r.jsx)(t.code,{children:"rightSection"})," prop to render anything\nin the right section to replace the default controls."]}),"\n",(0,r.jsx)(n,{data:z}),"\n",(0,r.jsx)(t.h2,{id:"custom-increment-and-decrement-controls",children:"Custom increment and decrement controls"}),"\n",(0,r.jsxs)(t.p,{children:["You can get a ref with ",(0,r.jsx)(t.code,{children:"increment"})," and ",(0,r.jsx)(t.code,{children:"decrement"})," functions to create custom controls:"]}),"\n",(0,r.jsx)(n,{data:Z}),"\n",(0,r.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,r.jsx)(n,{data:L}),"\n",(0,r.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,r.jsx)(n,{data:H}),"\n",(0,r.jsx)(u,{component:"NumberInput"}),"\n",(0,r.jsx)(n,{data:U}),"\n",(0,r.jsx)(o,{component:"NumberInput",refType:"input"}),"\n",(0,r.jsx)(l,{component:"NumberInput"})]})}function q(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(X,{...e,children:(0,r.jsx)(K,{...e})})}function J(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},12375:function(e,t,n){"use strict";n.d(t,{C:function(){return l}});var r=n(27378),a=n(62339);let o=`
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
`,l={type:"code",component:function(){return r.createElement(r.Fragment,null,r.createElement(a.Y,{label:"With prefix",placeholder:"Dollars",prefix:"$",defaultValue:100,mb:"md"}),r.createElement(a.Y,{label:"With suffix",placeholder:"Percents",suffix:"%",defaultValue:100,mt:"md"}))},code:o,centered:!0,maxWidth:340}},77481:function(e,t,n){"use strict";n.d(t,{Mt:function(){return r},nW:function(){return a},pc:function(){return o}});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],a=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},62339:function(e,t,n){"use strict";n.d(t,{Y:function(){return I}});var r=n(27378),a=n(40624),o=n(62740),l=n(58675),i=n(28086),c=n(72840),u=n(92082),d=n(83453),s=n(5564),m=n(6231),p=n(96739),h=n(20410),b=n(19397),f=n(23163);function x({direction:e,style:t,...n}){return r.createElement("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},r.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var y={root:"m-e2f5cd4e",controls:"m-95e17d22",control:"m-80b4b171"};function g(e,t,n){return void 0===e||(void 0===t||e>=t)&&(void 0===n||e<=n)}let v={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,startValue:0},N=(0,d.Z)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,u.ap)(t,"ni-chevron-size")}})),I=(0,h.d)((e,t)=>{let n=(0,p.w)("NumberInput",v,e),{className:u,classNames:d,styles:h,unstyled:I,vars:j,onChange:w,onValueChange:D,value:E,defaultValue:V,max:S,min:C,step:W,hideControls:k,rightSection:Y,isAllowed:B,clampBehavior:_,onBlur:A,allowDecimal:z,decimalScale:M,onKeyDown:R,handlersRef:P,startValue:Z,disabled:F,rightSectionPointerEvents:L,allowNegative:T,readOnly:H,size:G,rightSectionWidth:$,...O}=n,U=(0,m.y)({name:"NumberInput",classes:y,props:n,classNames:d,styles:h,unstyled:I,vars:j,varsResolver:N}),{resolvedClassNames:X,resolvedStyles:K}=(0,s.h)({classNames:d,styles:h,props:n}),[q,J]=(0,l.C)({value:E,defaultValue:V,onChange:w}),Q=()=>{"number"!=typeof q||Number.isNaN(q)?J(C??(0,i.u)(Z,C,S)):void 0!==S?J(q+W<=S?q+W:S):J(q+W)},ee=()=>{"number"!=typeof q||Number.isNaN(q)?J(S??(0,i.u)(Z,C,S)):J(function({value:e,min:t,step:n=1,allowNegative:r}){let a=e-n;return void 0!==t&&a<t?t:!r&&a<0&&void 0===t?e:a}({value:q,min:C,step:W,allowNegative:T}))};(0,c.kR)(P,{increment:Q,decrement:ee});let et=r.createElement("div",{...U("controls")},r.createElement(b.k,{...U("control"),tabIndex:-1,"aria-hidden":!0,disabled:F||"number"==typeof q&&void 0!==S&&q>=S,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:Q},r.createElement(x,{direction:"up"})),r.createElement(b.k,{...U("control"),tabIndex:-1,"aria-hidden":!0,disabled:F||"number"==typeof q&&void 0!==C&&q<=C,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:ee},r.createElement(x,{direction:"down"})));return r.createElement(f.M,{component:o.h3,allowNegative:T,className:(0,a.Z)(y.root,u),size:G,...O,readOnly:H,disabled:F,value:q,getInputRef:t,onValueChange:(e,t)=>{if("event"===t.source){var n;J("number"!=typeof(n=e.floatValue)&&Number.isNaN(Number(n))||Number.isNaN(n)?e.value:e.floatValue)}D?.(e,t)},rightSection:k||H?Y:Y||et,classNames:X,styles:K,unstyled:I,__staticSelector:"NumberInput",decimalScale:z?M:0,onKeyDown:e=>{R?.(e),H||("ArrowUp"===e.key&&(e.preventDefault(),Q()),"ArrowDown"===e.key&&(e.preventDefault(),ee()))},rightSectionPointerEvents:L??F?"none":void 0,rightSectionWidth:$??`var(--ni-right-section-width-${G||"sm"})`,onBlur:e=>{if(A?.(e),"blur"===_&&"number"==typeof q){let e=(0,i.u)(q,C,S);e!==q&&J((0,i.u)(q,C,S))}},isAllowed:e=>"strict"===_?B?B(e)&&g(e.floatValue,C,S):g(e.floatValue,C,S):!B||B(e)})});I.classes={...f.M.classes,...y},I.displayName="@mantine/core/NumberInput"}},function(e){e.O(0,[370,2740,5819,2775,9774,2888,179],function(){return e(e.s=72916)}),_N_E=e.O()}]);