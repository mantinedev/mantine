(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6672],{49457:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/number-input",function(){return n(87415)}])},87415:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return em}});var r=n(85893),a=n(11151),o=n(19905),l=n(9904),i=n(67294),c=n(95645),u=n(88005),d=Object.defineProperty,s=Object.defineProperties,m=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&f(e,n,t[n]);if(p)for(var n of p(t))b.call(t,n)&&f(e,n,t[n]);return e},x=(e,t)=>s(e,m(t));let v=`
import { NumberInput } from '@mantine/core';


function Demo() {
  return (
    <NumberInput
      {{props}}
      placeholder="Input placeholder"
    />
  );
}
`,g={type:"configurator",component:function(e){return i.createElement(c.Y,x(y({},e),{placeholder:"Input placeholder"}))},code:v,centered:!0,maxWidth:340,controls:u.pc},j=`
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
`,I={type:"code",component:function(){return i.createElement(c.Y,{label:"Enter value between 10 and 20",placeholder:"Don't enter more than 20 and less than 10",min:10,max:20})},code:j,centered:!0,maxWidth:340},w=`
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
`,N={type:"code",component:function(){return i.createElement(c.Y,{label:"You cannot enter number less than 0 or greater than 100",placeholder:"You cannot enter number less than 0 or greater than 100",clampBehavior:"strict",min:0,max:100})},code:w,centered:!0,maxWidth:340};var D=n(67519);let E=`
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
`,V={type:"code",component:function(){return i.createElement(c.Y,{label:"Negative number are not allowed",placeholder:"Do not enter negative numbers",allowNegative:!1})},code:E,centered:!0,maxWidth:340},S=`
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
`,C={type:"code",component:function(){return i.createElement(c.Y,{label:"Decimals are not allowed",placeholder:"Do not enter decimal numbers",allowDecimal:!1})},code:S,centered:!0,maxWidth:340},O=`
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
`,W={type:"code",component:function(){return i.createElement(c.Y,{label:"You can enter only 2 digits after decimal point",placeholder:"Do not enter more that 2",decimalScale:2})},code:O,centered:!0,maxWidth:340},k=`
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
`,Y={type:"code",component:function(){return i.createElement(c.Y,{label:"Always show 2 digits after decimal point",placeholder:"Do not enter more that 2",decimalScale:2,fixedDecimalScale:!0,defaultValue:2.2})},code:k,centered:!0,maxWidth:340},P=`
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
`,B={type:"code",component:function(){return i.createElement(c.Y,{label:"Custom decimal separator",placeholder:"You can change it",decimalSeparator:",",defaultValue:20.573})},code:P,centered:!0,maxWidth:340},A=`
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
`,_={type:"code",component:function(){return i.createElement(c.Y,{label:"With thousands separator",placeholder:"Thousands are separated with coma",thousandSeparator:",",defaultValue:1e6})},code:A,centered:!0,maxWidth:340};var z=n(72622),M=n(54764),R=(0,M.Z)("currency-dram","IconCurrencyDram",[["path",{d:"M4 10a6 6 0 1 1 12 0v10",key:"svg-0"}],["path",{d:"M12 16h8",key:"svg-1"}],["path",{d:"M12 12h8",key:"svg-2"}]]);let F=`
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
`,Z={type:"code",component:function(){let e=i.createElement(R,{style:{width:(0,z.h)(20),height:(0,z.h)(20)},stroke:1.5});return i.createElement(i.Fragment,null,i.createElement(c.Y,{leftSection:e,label:"With left section",placeholder:"With left section"}),i.createElement(c.Y,{rightSection:e,label:"With right section",placeholder:"With right section",mt:"md"}))},code:F,centered:!0,maxWidth:340};var L=(0,M.Z)("chart-bubble","IconChartBubble",[["path",{d:"M6 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-0"}],["path",{d:"M16 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M14.5 7.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0",key:"svg-2"}]]);let T=`
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
`,H={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.Y,{label:"Hide controls",placeholder:"Hide controls",hideControls:!0}),i.createElement(c.Y,{label:"Custom right section",placeholder:"Custom right section",mt:"md",rightSection:i.createElement(L,null),rightSectionPointerEvents:"none"}))},code:T,centered:!0,maxWidth:340};var G=n(16262),K=n(14469);let U=`
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
`,X={type:"code",component:function(){let e=(0,i.useRef)(null);return i.createElement(i.Fragment,null,i.createElement(c.Y,{label:"Click buttons to change value",placeholder:"Click the buttons",handlersRef:e,step:2,min:10,max:20,defaultValue:15}),i.createElement(G.Z,{mt:"md",justify:"center"},i.createElement(K.z,{onClick:()=>{var t;return null==(t=e.current)?void 0:t.decrement()},variant:"default"},"Decrement by 2"),i.createElement(K.z,{onClick:()=>{var t;return null==(t=e.current)?void 0:t.increment()},variant:"default"},"Increment by 2")))},code:U,centered:!0,maxWidth:340},$=`
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
`,q={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.Y,{label:"Boolean error",placeholder:"Boolean error",error:!0}),i.createElement(c.Y,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"}))},maxWidth:340,centered:!0,code:$},J=`
import { NumberInput } from '@mantine/core';

function Demo() {
  return <NumberInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`,Q={type:"code",component:function(){return i.createElement(c.Y,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:J};var ee=n(93693),et=n(32637),en=Object.defineProperty,er=Object.getOwnPropertySymbols,ea=Object.prototype.hasOwnProperty,eo=Object.prototype.propertyIsEnumerable,el=(e,t,n)=>t in e?en(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ei=(e,t)=>{for(var n in t||(t={}))ea.call(t,n)&&el(e,n,t[n]);if(er)for(var n of er(t))eo.call(t,n)&&el(e,n,t[n]);return e};let ec=`
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
`,eu={type:"styles-api",data:et.L,component:function(e){return i.createElement(c.Y,ei({label:"Label",placeholder:"NumberInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:i.createElement(ee.Z,{style:{width:(0,z.h)(18),height:(0,z.h)(18)}})},e))},code:ec,centered:!0,maxWidth:340},ed=(0,o.A)(l.us.NumberInput);function es(e){let t=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p"},(0,a.ah)(),e.components),{InputFeatures:n,Demo:o,InputSections:l,StylesApiSelectors:i,GetElementRef:c,InputAccessibility:u}=t;return o||ep("Demo",!0),c||ep("GetElementRef",!0),u||ep("InputAccessibility",!0),n||ep("InputFeatures",!0),l||ep("InputSections",!0),i||ep("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{component:"NumberInput",element:"input"}),"\n",(0,r.jsx)(o,{data:g}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { NumberInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string | number>('');\n  return <NumberInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"min-and-max",children:"min and max"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"min"})," and ",(0,r.jsx)(t.code,{children:"max"})," props to limit the input value:"]}),"\n",(0,r.jsx)(o,{data:I}),"\n",(0,r.jsx)(t.h2,{id:"clamp-behavior",children:"Clamp behavior"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the value is clamped when the input is blurred. If you set ",(0,r.jsx)(t.code,{children:'clampBehavior="strict"'}),",\nit will not be possible to enter value outside of min/max range. Note that this option\nmay cause issues if you have tight ",(0,r.jsx)(t.code,{children:"min"})," and ",(0,r.jsx)(t.code,{children:"max"}),", for example ",(0,r.jsx)(t.code,{children:"min={10}"})," and ",(0,r.jsx)(t.code,{children:"max={20}"}),".\nIf you need to disable value clamping entirely, set ",(0,r.jsx)(t.code,{children:'clampBehavior="none"'}),"."]}),"\n",(0,r.jsx)(o,{data:N}),"\n",(0,r.jsx)(t.h2,{id:"prefix-and-suffix",children:"Prefix and suffix"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"prefix"})," and ",(0,r.jsx)(t.code,{children:"suffix"})," props to add given string to the start or end of the input value:"]}),"\n",(0,r.jsx)(o,{data:D.C}),"\n",(0,r.jsx)(t.h2,{id:"negative-numbers",children:"Negative numbers"}),"\n",(0,r.jsxs)(t.p,{children:["By default, negative numbers are allowed. Set ",(0,r.jsx)(t.code,{children:"allowNegative={false}"})," to allow only positive numbers."]}),"\n",(0,r.jsx)(o,{data:V}),"\n",(0,r.jsx)(t.h2,{id:"decimal-numbers",children:"Decimal numbers"}),"\n",(0,r.jsxs)(t.p,{children:["By default, decimal numbers are allowed. Set ",(0,r.jsx)(t.code,{children:"allowDecimal={false}"})," to allow only integers."]}),"\n",(0,r.jsx)(o,{data:C}),"\n",(0,r.jsx)(t.h2,{id:"decimal-scale",children:"Decimal scale"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"decimalScale"})," controls how many decimal places are allowed:"]}),"\n",(0,r.jsx)(o,{data:W}),"\n",(0,r.jsx)(t.h2,{id:"fixed-decimal-scale",children:"Fixed decimal scale"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"fixedDecimalScale"})," to always display fixed number of decimal places:"]}),"\n",(0,r.jsx)(o,{data:Y}),"\n",(0,r.jsx)(t.h2,{id:"decimal-separator",children:"Decimal separator"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"decimalSeparator"})," to change decimal separator character:"]}),"\n",(0,r.jsx)(o,{data:B}),"\n",(0,r.jsx)(t.h2,{id:"thousand-separator",children:"Thousand separator"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"thousandSeparator"})," prop to separate thousands with a character. You can control\ngrouping logic with ",(0,r.jsx)(t.code,{children:"thousandsGroupStyle"}),", it accepts: ",(0,r.jsx)(t.code,{children:"thousand"}),", ",(0,r.jsx)(t.code,{children:"lakh"}),", ",(0,r.jsx)(t.code,{children:"wan"}),", ",(0,r.jsx)(t.code,{children:"none"})," values."]}),"\n",(0,r.jsx)(o,{data:_}),"\n",(0,r.jsx)(l,{component:"NumberInput"}),"\n",(0,r.jsx)(o,{data:Z}),"\n",(0,r.jsx)(t.h2,{id:"incrementdecrement-controls",children:"Increment/decrement controls"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the right section is occupied by increment and decrement buttons.\nTo hide them, set ",(0,r.jsx)(t.code,{children:"hideControls"})," prop. You can also use ",(0,r.jsx)(t.code,{children:"rightSection"})," prop to render anything\nin the right section to replace the default controls."]}),"\n",(0,r.jsx)(o,{data:H}),"\n",(0,r.jsx)(t.h2,{id:"custom-increment-and-decrement-controls",children:"Custom increment and decrement controls"}),"\n",(0,r.jsxs)(t.p,{children:["You can get a ref with ",(0,r.jsx)(t.code,{children:"increment"})," and ",(0,r.jsx)(t.code,{children:"decrement"})," functions to create custom controls:"]}),"\n",(0,r.jsx)(o,{data:X}),"\n",(0,r.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,r.jsx)(o,{data:q}),"\n",(0,r.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,r.jsx)(o,{data:Q}),"\n",(0,r.jsx)(i,{component:"NumberInput"}),"\n",(0,r.jsx)(o,{data:eu}),"\n",(0,r.jsx)(c,{component:"NumberInput",refType:"input"}),"\n",(0,r.jsx)(u,{component:"NumberInput"})]})}var em=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(ed,Object.assign({},e,{children:(0,r.jsx)(es,e)}))};function ep(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93693:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},95645:function(e,t,n){"use strict";n.d(t,{Y:function(){return z}});var r=n(67294),a=n(62740),o=n(643),l=n(71062),i=n(83443),c=Object.defineProperty,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))s.call(t,n)&&m(e,n,t[n]);return e},h=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))0>t.indexOf(r)&&s.call(e,r)&&(n[r]=e[r]);return n};function b(e){var{direction:t,style:n}=e,a=h(e,["direction","style"]);return r.createElement("svg",p({style:p({width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===t?"rotate(180deg)":void 0},n),viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a),r.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var f={controls:"m-95e17d22",control:"m-80b4b171"},y=n(86610),x=n(70097),v=n(3154),g=n(30370),j=n(86109),I=n(28816),w=n(8586),N=n(48468),D=Object.defineProperty,E=Object.defineProperties,V=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,W=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))C.call(t,n)&&W(e,n,t[n]);if(S)for(var n of S(t))O.call(t,n)&&W(e,n,t[n]);return e},Y=(e,t)=>E(e,V(t)),P=(e,t)=>{var n={};for(var r in e)C.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&S)for(var r of S(e))0>t.indexOf(r)&&O.call(e,r)&&(n[r]=e[r]);return n};function B(e,t,n){return void 0===e||(void 0===t||e>=t)&&(void 0===n||e<=n)}let A={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,startValue:0},_=(0,w.Z)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,N.ap)(t,"ni-chevron-size")}})),z=(0,v.d)((e,t)=>{let n=(0,g.w)("NumberInput",A,e),{classNames:c,styles:u,unstyled:d,vars:s,onChange:m,onValueChange:p,value:h,defaultValue:v,max:w,min:N,step:D,hideControls:E,rightSection:V,isAllowed:S,clampBehavior:C,onBlur:O,allowDecimal:W,decimalScale:z,onKeyDown:M,handlersRef:R,startValue:F,disabled:Z,rightSectionPointerEvents:L,allowNegative:T,readOnly:H}=n,G=P(n,["classNames","styles","unstyled","vars","onChange","onValueChange","value","defaultValue","max","min","step","hideControls","rightSection","isAllowed","clampBehavior","onBlur","allowDecimal","decimalScale","onKeyDown","handlersRef","startValue","disabled","rightSectionPointerEvents","allowNegative","readOnly"]),K=(0,j.y)({name:"NumberInput",classes:f,props:n,classNames:c,styles:u,unstyled:d,vars:s,varsResolver:_}),{resolvedClassNames:U,resolvedStyles:X}=(0,I.h)({classNames:c,styles:u,props:n}),[$,q]=(0,o.C)({value:h,defaultValue:v,onChange:m}),J=(e,t)=>{var n;q("number"!=typeof $||"number"!=typeof(n=e.floatValue)||Number.isNaN(n)?e.value:e.floatValue),null==p||p(e,t)},Q=()=>{"number"!=typeof $||Number.isNaN($)?q(null!=N?N:(0,l.u)(F,N,w)):void 0!==w?q($+D<=w?$+D:w):q($+D)},ee=()=>{"number"!=typeof $||Number.isNaN($)?q(null!=w?w:(0,l.u)(F,N,w)):q(function({value:e,min:t,step:n=1,allowNegative:r}){let a=e-n;return void 0!==t&&a<t?t:!r&&a<0&&void 0===t?e:a}({value:$,min:N,step:D,allowNegative:T}))},et=e=>{null==M||M(e),H||("ArrowUp"===e.key&&(e.preventDefault(),Q()),"ArrowDown"===e.key&&(e.preventDefault(),ee()))};(0,i.kR)(R,{increment:Q,decrement:ee});let en=r.createElement("div",k({},K("controls")),r.createElement(y.k,Y(k({},K("control")),{tabIndex:-1,"aria-hidden":!0,disabled:Z||"number"==typeof $&&void 0!==w&&$>=w,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:Q}),r.createElement(b,{direction:"up"})),r.createElement(y.k,Y(k({},K("control")),{tabIndex:-1,"aria-hidden":!0,disabled:Z||"number"==typeof $&&void 0!==N&&$<=N,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:ee}),r.createElement(b,{direction:"down"})));return r.createElement(x.M,Y(k({component:a.h3,allowNegative:T},G),{readOnly:H,disabled:Z,value:$,getInputRef:t,onValueChange:J,rightSection:E||H?V:V||en,classNames:U,styles:X,unstyled:d,__staticSelector:"NumberInput",decimalScale:W?z:0,onKeyDown:et,rightSectionPointerEvents:(null!=L?L:Z)?"none":void 0,onBlur:e=>{null==O||O(e),"blur"===C&&"number"==typeof $&&q((0,l.u)($,N,w))},isAllowed:e=>"strict"===C?S?S(e)&&B(e.floatValue,N,w):B(e.floatValue,N,w):!S||S(e)}))});z.classes=k(k({},x.M.classes),f),z.displayName="@mantine/core/NumberInput"},67519:function(e,t,n){"use strict";n.d(t,{C:function(){return l}});var r=n(67294),a=n(95645);let o=`
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
`,l={type:"code",component:function(){return r.createElement(r.Fragment,null,r.createElement(a.Y,{label:"With prefix",placeholder:"Dollars",prefix:"$",defaultValue:100,mb:"md"}),r.createElement(a.Y,{label:"With suffix",placeholder:"Percents",suffix:"%",defaultValue:100,mt:"md"}))},code:o,centered:!0,maxWidth:340}},88005:function(e,t,n){"use strict";n.d(t,{Mt:function(){return r},nW:function(){return a},pc:function(){return o}});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],a=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[4136,8992,178,9774,2888,179],function(){return e(e.s=49457)}),_N_E=e.O()}]);