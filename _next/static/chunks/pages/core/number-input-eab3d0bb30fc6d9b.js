(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6672],{49457:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/number-input",function(){return n(37755)}])},37755:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ec}});var r=n(85893),a=n(11151),l=n(19905),o=n(9904),i=n(67294),c=n(95645),u=n(88005),d=Object.defineProperty,s=Object.defineProperties,m=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,f=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&f(e,n,t[n]);if(p)for(var n of p(t))b.call(t,n)&&f(e,n,t[n]);return e},x=(e,t)=>s(e,m(t));let v=`
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
`,w={type:"code",component:function(){return i.createElement(c.Y,{label:"Enter value between 10 and 20",placeholder:"Don't enter more than 20 and less than 10",min:10,max:20})},code:j,centered:!0,maxWidth:340},I=`
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
`,N={type:"code",component:function(){return i.createElement(c.Y,{label:"You cannot enter number less than 0 or greater than 100",placeholder:"You cannot enter number less than 0 or greater than 100",clampBehavior:"strict",min:0,max:100})},code:I,centered:!0,maxWidth:340};var D=n(67519);let V=`
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
`,E={type:"code",component:function(){return i.createElement(c.Y,{label:"Negative number are not allowed",placeholder:"Do not enter negative numbers",allowNegative:!1})},code:V,centered:!0,maxWidth:340},S=`
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
`,Y={type:"code",component:function(){return i.createElement(c.Y,{label:"You can enter only 2 digits after decimal point",placeholder:"Do not enter more that 2",decimalScale:2})},code:O,centered:!0,maxWidth:340},k=`
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
`,P={type:"code",component:function(){return i.createElement(c.Y,{label:"Always show 2 digits after decimal point",placeholder:"Do not enter more that 2",decimalScale:2,fixedDecimalScale:!0,defaultValue:2.2})},code:k,centered:!0,maxWidth:340},W=`
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
`,B={type:"code",component:function(){return i.createElement(c.Y,{label:"Custom decimal separator",placeholder:"You can change it",decimalSeparator:",",defaultValue:20.573})},code:W,centered:!0,maxWidth:340},A=`
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
`,_={type:"code",component:function(){return i.createElement(c.Y,{label:"With thousands separator",placeholder:"Thousands are separated with coma",thousandSeparator:",",defaultValue:1e6})},code:A,centered:!0,maxWidth:340};var R=(0,n(54764).Z)("chart-bubble","IconChartBubble",[["path",{d:"M6 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0",key:"svg-0"}],["path",{d:"M16 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0",key:"svg-1"}],["path",{d:"M14.5 7.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0",key:"svg-2"}]]);let z=`
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
`,M={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.Y,{label:"Hide controls",placeholder:"Hide controls",hideControls:!0}),i.createElement(c.Y,{label:"Custom right section",placeholder:"Custom right section",mt:"md",rightSection:i.createElement(R,null),rightSectionPointerEvents:"none"}))},code:z,centered:!0,maxWidth:340};var F=n(16262),L=n(14469);let T=`
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
`,Z={type:"code",component:function(){let e=(0,i.useRef)(null);return i.createElement(i.Fragment,null,i.createElement(c.Y,{label:"Click buttons to change value",placeholder:"Click the buttons",handlersRef:e,step:2,min:10,max:20,defaultValue:15}),i.createElement(F.Z,{mt:"md",justify:"center"},i.createElement(L.z,{onClick:()=>{var t;return null==(t=e.current)?void 0:t.decrement()},variant:"default"},"Decrement by 2"),i.createElement(L.z,{onClick:()=>{var t;return null==(t=e.current)?void 0:t.increment()},variant:"default"},"Increment by 2")))},code:T,centered:!0,maxWidth:340},H=`
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
`,G={type:"code",component:function(){return i.createElement(i.Fragment,null,i.createElement(c.Y,{label:"Boolean error",placeholder:"Boolean error",error:!0}),i.createElement(c.Y,{mt:"md",label:"With error message",placeholder:"With error message",error:"Invalid name"}))},maxWidth:340,centered:!0,code:H},K=`
import { NumberInput } from '@mantine/core';

function Demo() {
  return <NumberInput disabled label="Disabled input" placeholder="Disabled input" />;
}
`,U={type:"code",component:function(){return i.createElement(c.Y,{disabled:!0,label:"Disabled input",placeholder:"Disabled input"})},maxWidth:340,centered:!0,code:K};var X=n(72622),$=n(93693),q=n(32637),J=Object.defineProperty,Q=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable,en=(e,t,n)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,er=(e,t)=>{for(var n in t||(t={}))ee.call(t,n)&&en(e,n,t[n]);if(Q)for(var n of Q(t))et.call(t,n)&&en(e,n,t[n]);return e};let ea=`
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
`,el={type:"styles-api",data:q.L,component:function(e){return i.createElement(c.Y,er({label:"Label",placeholder:"NumberInput",description:"Description",error:"Error",withAsterisk:!0,leftSection:i.createElement($.Z,{style:{width:(0,X.h)(18),height:(0,X.h)(18)}})},e))},code:ea,centered:!0,maxWidth:340},eo=(0,l.A)(o.us.NumberInput);function ei(e){let t=Object.assign({h2:"h2",pre:"pre",code:"code",p:"p"},(0,a.ah)(),e.components),{InputFeatures:n,Demo:l,StylesApiSelectors:o,GetElementRef:i,InputAccessibility:c}=t;return l||eu("Demo",!0),i||eu("GetElementRef",!0),c||eu("InputAccessibility",!0),n||eu("InputFeatures",!0),o||eu("StylesApiSelectors",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(n,{component:"NumberInput",element:"input"}),"\n",(0,r.jsx)(l,{data:g}),"\n",(0,r.jsx)(t.h2,{id:"controlled",children:"Controlled"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { NumberInput } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState<string | number>('');\n  return <NumberInput value={value} onChange={setValue} />;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"min-and-max",children:"min and max"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"min"})," and ",(0,r.jsx)(t.code,{children:"max"})," props to limit the input value:"]}),"\n",(0,r.jsx)(l,{data:w}),"\n",(0,r.jsx)(t.h2,{id:"clamp-behavior",children:"Clamp behavior"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the value is clamped when the input is blurred. If you set ",(0,r.jsx)(t.code,{children:'clampBehavior="strict"'}),",\nit will not be possible to enter value outside of min/max range. Note that this option\nmay cause issues if you have tight ",(0,r.jsx)(t.code,{children:"min"})," and ",(0,r.jsx)(t.code,{children:"max"}),", for example ",(0,r.jsx)(t.code,{children:"min={10}"})," and ",(0,r.jsx)(t.code,{children:"max={20}"}),".\nIf you need to disable value clamping entirely, set ",(0,r.jsx)(t.code,{children:'clampBehavior="none"'}),"."]}),"\n",(0,r.jsx)(l,{data:N}),"\n",(0,r.jsx)(t.h2,{id:"prefix-and-suffix",children:"Prefix and suffix"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"prefix"})," and ",(0,r.jsx)(t.code,{children:"suffix"})," props to add given string to the start or end of the input value:"]}),"\n",(0,r.jsx)(l,{data:D.C}),"\n",(0,r.jsx)(t.h2,{id:"negative-numbers",children:"Negative numbers"}),"\n",(0,r.jsxs)(t.p,{children:["By default, negative numbers are allowed. Set ",(0,r.jsx)(t.code,{children:"allowNegative={false}"})," to allow only positive numbers."]}),"\n",(0,r.jsx)(l,{data:E}),"\n",(0,r.jsx)(t.h2,{id:"decimal-numbers",children:"Decimal numbers"}),"\n",(0,r.jsxs)(t.p,{children:["By default, decimal numbers are allowed. Set ",(0,r.jsx)(t.code,{children:"allowDecimal={false}"})," to allow only integers."]}),"\n",(0,r.jsx)(l,{data:C}),"\n",(0,r.jsx)(t.h2,{id:"decimal-scale",children:"Decimal scale"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"decimalScale"})," controls how many decimal places are allowed:"]}),"\n",(0,r.jsx)(l,{data:Y}),"\n",(0,r.jsx)(t.h2,{id:"fixed-decimal-scale",children:"Fixed decimal scale"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"fixedDecimalScale"})," to always display fixed number of decimal places:"]}),"\n",(0,r.jsx)(l,{data:P}),"\n",(0,r.jsx)(t.h2,{id:"decimal-separator",children:"Decimal separator"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"decimalSeparator"})," to change decimal separator character:"]}),"\n",(0,r.jsx)(l,{data:B}),"\n",(0,r.jsx)(t.h2,{id:"thousand-separator",children:"Thousand separator"}),"\n",(0,r.jsxs)(t.p,{children:["Set ",(0,r.jsx)(t.code,{children:"thousandSeparator"})," prop to separate thousands with a character. You can control\ngrouping logic with ",(0,r.jsx)(t.code,{children:"thousandsGroupStyle"}),", it accepts: ",(0,r.jsx)(t.code,{children:"thousand"}),", ",(0,r.jsx)(t.code,{children:"lakh"}),", ",(0,r.jsx)(t.code,{children:"wan"}),", ",(0,r.jsx)(t.code,{children:"none"})," values."]}),"\n",(0,r.jsx)(l,{data:_}),"\n",(0,r.jsx)(t.h2,{id:"right-section",children:"Right section"}),"\n",(0,r.jsxs)(t.p,{children:["By default, the right section is occupied by increment and decrement buttons.\nTo hide them, set ",(0,r.jsx)(t.code,{children:"hideControls"})," prop. You can also use ",(0,r.jsx)(t.code,{children:"rightSection"})," prop to render anything\nin the right section to replace the default controls."]}),"\n",(0,r.jsx)(l,{data:M}),"\n",(0,r.jsx)(t.h2,{id:"custom-increment-and-decrement-controls",children:"Custom increment and decrement controls"}),"\n",(0,r.jsxs)(t.p,{children:["You can get a ref with ",(0,r.jsx)(t.code,{children:"increment"})," and ",(0,r.jsx)(t.code,{children:"decrement"})," functions to create custom controls:"]}),"\n",(0,r.jsx)(l,{data:Z}),"\n",(0,r.jsx)(t.h2,{id:"error-state",children:"Error state"}),"\n",(0,r.jsx)(l,{data:G}),"\n",(0,r.jsx)(t.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,r.jsx)(l,{data:U}),"\n",(0,r.jsx)(o,{component:"NumberInput"}),"\n",(0,r.jsx)(l,{data:el}),"\n",(0,r.jsx)(i,{component:"NumberInput",refType:"input"}),"\n",(0,r.jsx)(c,{component:"NumberInput"})]})}var ec=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(eo,Object.assign({},e,{children:(0,r.jsx)(ei,e)}))};function eu(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},93693:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(54764).Z)("at","IconAt",[["path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0",key:"svg-0"}],["path",{d:"M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28",key:"svg-1"}]])},95645:function(e,t,n){"use strict";n.d(t,{Y:function(){return R}});var r=n(67294),a=n(62740),l=n(643),o=n(71062),i=n(83443),c=Object.defineProperty,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))s.call(t,n)&&m(e,n,t[n]);return e},h=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))0>t.indexOf(r)&&s.call(e,r)&&(n[r]=e[r]);return n};function b(e){var{direction:t,style:n}=e,a=h(e,["direction","style"]);return r.createElement("svg",p({style:p({width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===t?"rotate(180deg)":void 0},n),viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a),r.createElement("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"}))}var f={controls:"m-95e17d22",control:"m-80b4b171"},y=n(86610),x=n(70097),v=n(3154),g=n(30370),j=n(86109),w=n(28816),I=n(8586),N=n(48468),D=Object.defineProperty,V=Object.defineProperties,E=Object.getOwnPropertyDescriptors,S=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,Y=(e,t,n)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))C.call(t,n)&&Y(e,n,t[n]);if(S)for(var n of S(t))O.call(t,n)&&Y(e,n,t[n]);return e},P=(e,t)=>V(e,E(t)),W=(e,t)=>{var n={};for(var r in e)C.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&S)for(var r of S(e))0>t.indexOf(r)&&O.call(e,r)&&(n[r]=e[r]);return n};function B(e,t,n){return void 0===e||(void 0===t||e>=t)&&(void 0===n||e<=n)}let A={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,startValue:0},_=(0,I.Z)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,N.ap)(t,"ni-chevron-size")}})),R=(0,v.d)((e,t)=>{let n=(0,g.w)("NumberInput",A,e),{classNames:c,styles:u,unstyled:d,vars:s,onChange:m,onValueChange:p,value:h,defaultValue:v,max:I,min:N,step:D,hideControls:V,rightSection:E,isAllowed:S,clampBehavior:C,onBlur:O,allowDecimal:Y,decimalScale:R,onKeyDown:z,handlersRef:M,startValue:F,disabled:L,rightSectionPointerEvents:T,allowNegative:Z,readOnly:H}=n,G=W(n,["classNames","styles","unstyled","vars","onChange","onValueChange","value","defaultValue","max","min","step","hideControls","rightSection","isAllowed","clampBehavior","onBlur","allowDecimal","decimalScale","onKeyDown","handlersRef","startValue","disabled","rightSectionPointerEvents","allowNegative","readOnly"]),K=(0,j.y)({name:"NumberInput",classes:f,props:n,classNames:c,styles:u,unstyled:d,vars:s,varsResolver:_}),{resolvedClassNames:U,resolvedStyles:X}=(0,w.h)({classNames:c,styles:u,props:n}),[$,q]=(0,l.C)({value:h,defaultValue:v,onChange:m}),J=(e,t)=>{var n;q("number"!=typeof $||"number"!=typeof(n=e.floatValue)||Number.isNaN(n)?e.value:e.floatValue),null==p||p(e,t)},Q=()=>{"number"!=typeof $||Number.isNaN($)?q(null!=N?N:(0,o.u)(F,N,I)):void 0!==I?q($+D<=I?$+D:I):q($+D)},ee=()=>{"number"!=typeof $||Number.isNaN($)?q(null!=I?I:(0,o.u)(F,N,I)):q(function({value:e,min:t,step:n=1,allowNegative:r}){let a=e-n;return void 0!==t&&a<t?t:!r&&a<0&&void 0===t?e:a}({value:$,min:N,step:D,allowNegative:Z}))},et=e=>{null==z||z(e),H||("ArrowUp"===e.key&&(e.preventDefault(),Q()),"ArrowDown"===e.key&&(e.preventDefault(),ee()))};(0,i.kR)(M,{increment:Q,decrement:ee});let en=r.createElement("div",k({},K("controls")),r.createElement(y.k,P(k({},K("control")),{tabIndex:-1,"aria-hidden":!0,disabled:L||"number"==typeof $&&void 0!==I&&$>=I,mod:{direction:"up"},onPointerDown:Q}),r.createElement(b,{direction:"up"})),r.createElement(y.k,P(k({},K("control")),{tabIndex:-1,"aria-hidden":!0,disabled:L||"number"==typeof $&&void 0!==N&&$<=N,mod:{direction:"down"},onPointerDown:ee}),r.createElement(b,{direction:"down"})));return r.createElement(x.M,P(k({component:a.h3,allowNegative:Z},G),{readOnly:H,disabled:L,value:$,getInputRef:t,onValueChange:J,rightSection:V||H?E:E||en,classNames:U,styles:X,unstyled:d,__staticSelector:"NumberInput",decimalScale:Y?R:0,onKeyDown:et,rightSectionPointerEvents:(null!=T?T:L)?"none":void 0,onBlur:e=>{null==O||O(e),"blur"===C&&"number"==typeof $&&q((0,o.u)($,N,I))},isAllowed:e=>"strict"===C?S?S(e)&&B(e.floatValue,N,I):B(e.floatValue,N,I):!S||S(e)}))});R.classes=k(k({},x.M.classes),f),R.displayName="@mantine/core/NumberInput"},67519:function(e,t,n){"use strict";n.d(t,{C:function(){return o}});var r=n(67294),a=n(95645);let l=`
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
`,o={type:"code",component:function(){return r.createElement(r.Fragment,null,r.createElement(a.Y,{label:"With prefix",placeholder:"Dollars",prefix:"$",defaultValue:100,mb:"md"}),r.createElement(a.Y,{label:"With suffix",placeholder:"Percents",suffix:"%",defaultValue:100,mt:"md"}))},code:l,centered:!0,maxWidth:340}},88005:function(e,t,n){"use strict";n.d(t,{Mt:function(){return r},nW:function(){return a},pc:function(){return l}});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],a=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[4136,8992,178,9774,2888,179],function(){return e(e.s=49457)}),_N_E=e.O()}]);