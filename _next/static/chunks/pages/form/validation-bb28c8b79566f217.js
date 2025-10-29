(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[94740],{1798:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},3117:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/validation",function(){return o(99706)}])},6620:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},13112:(e,t,o)=>{"use strict";function n(e){let t=e||!0;return e=>"string"==typeof e?e.trim().length>0?null:t:Array.isArray(e)?e.length>0?null:t:null==e||!1===e?t:null}o.d(t,{h:()=>n})},24583:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},36076:(e,t,o)=>{"use strict";o.d(t,{a:()=>h});var n=o(6029),l=o(90993),a=o(57414),r=o(38774),i=o(47371),s=o(44572),m=o(45208),u=o(61087),d=o(69329),c=o(18549),p=o(13112),f=o(8440);let h={type:"code",component:function(){let e=(0,d.m)({mode:"uncontrolled",initialValues:{employees:[{name:"",active:!1,key:(0,f.z)()}]},validate:{employees:{[c.N]:(0,p.h)("At least one employee is required"),name:(0,p.h)("Name is required")}}}),t=e.getValues().employees.map((t,o)=>(0,n.jsxs)(a.Y,{mt:"xs",children:[(0,n.jsx)(r.k,{placeholder:"John Doe",withAsterisk:!0,style:{flex:1},...e.getInputProps(`employees.${o}.name`)},e.key(`employees.${o}.name`)),(0,n.jsx)(i.d,{label:"Active",...e.getInputProps(`employees.${o}.active`,{type:"checkbox"})},e.key(`employees.${o}.active`)),(0,n.jsx)(s.M,{color:"red",onClick:()=>e.removeListItem("employees",o),children:(0,n.jsx)(l.A,{size:16})})]},t.key));return(0,n.jsxs)("form",{onSubmit:e.onSubmit(()=>{}),children:[t.length>0?(0,n.jsxs)(a.Y,{mb:"xs",children:[(0,n.jsx)(m.E,{fw:500,size:"sm",style:{flex:1},children:"Name"}),(0,n.jsx)(m.E,{fw:500,size:"sm",pr:90,children:"Status"})]}):(0,n.jsx)(m.E,{c:"dimmed",ta:"center",children:"No one here..."}),t,e.errors.employees&&(0,n.jsx)(m.E,{c:"red",size:"sm",mt:"sm",children:e.errors.employees}),(0,n.jsxs)(a.Y,{justify:"space-between",mt:"md",children:[(0,n.jsx)(u.$,{variant:"default",onClick:()=>{e.insertListItem("employees",{name:"",active:!1,key:(0,f.z)()}),e.clearFieldError("employees")},children:"Add employee"}),(0,n.jsx)(u.$,{type:"submit",children:"Submit"})]})]})},code:`
import { IconTrash } from '@tabler/icons-react';
import { ActionIcon, Button, Group, Switch, Text, TextInput } from '@mantine/core';
import { formRootRule, isNotEmpty, useForm } from '@mantine/form';
import { randomId } from '@mantine/hooks';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      employees: [{ name: '', active: false, key: randomId() }],
    },
    validate: {
      employees: {
        [formRootRule]: isNotEmpty('At least one employee is required'),
        name: isNotEmpty('Name is required'),
      },
    },
  });

  const fields = form.getValues().employees.map((item, index) => (
    <Group key={item.key} mt="xs">
      <TextInput
        placeholder="John Doe"
        withAsterisk
        style={{ flex: 1 }}
        key={form.key(\`employees.\${index}.name\`)}
        {...form.getInputProps(\`employees.\${index}.name\`)}
      />
      <Switch
        label="Active"
        key={form.key(\`employees.\${index}.active\`)}
        {...form.getInputProps(\`employees.\${index}.active\`, { type: 'checkbox' })}
      />
      <ActionIcon color="red" onClick={() => form.removeListItem('employees', index)}>
        <IconTrash size={16} />
      </ActionIcon>
    </Group>
  ));

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      {fields.length > 0 ? (
        <Group mb="xs">
          <Text fw={500} size="sm" style={{ flex: 1 }}>
            Name
          </Text>
          <Text fw={500} size="sm" pr={90}>
            Status
          </Text>
        </Group>
      ) : (
        <Text c="dimmed" ta="center">
          No one here...
        </Text>
      )}

      {fields}

      {form.errors.employees && (
        <Text c="red" size="sm" mt="sm">
          {form.errors.employees}
        </Text>
      )}

      <Group justify="space-between" mt="md">
        <Button
          variant="default"
          onClick={() => {
            form.insertListItem('employees', { name: '', active: false, key: randomId() });
            form.clearFieldError('employees');
          }}
        >
          Add employee
        </Button>
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`,centered:!0,defaultExpanded:!1,maxWidth:440}},41949:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},46626:(e,t,o)=>{"use strict";o.d(t,{E:()=>u});var n=o(6029),l=o(38774),a=o(45208),r=o(61087),i=o(69329),s=o(18549),m=o(13112);let u={type:"code",component:function(){let e=(0,i.m)({mode:"uncontrolled",initialValues:{user:{firstName:"",lastName:""}},validate:{user:{[s.N]:e=>e.firstName.trim().length>0&&e.firstName===e.lastName?"First name and last name cannot be the same":null,firstName:(0,m.h)("First name is required"),lastName:(0,m.h)("Last name is required")}}});return(0,n.jsxs)("form",{onSubmit:e.onSubmit(()=>{}),children:[(0,n.jsx)(l.k,{label:"First name",placeholder:"First name",...e.getInputProps("user.firstName")}),(0,n.jsx)(l.k,{label:"Last name",placeholder:"Last name",mt:"md",...e.getInputProps("user.lastName")}),e.errors.user&&(0,n.jsx)(a.E,{c:"red",mt:5,fz:"sm",children:e.errors.user}),(0,n.jsx)(r.$,{type:"submit",mt:"lg",children:"Submit"})]})},code:`
import { Button, Text, TextInput } from '@mantine/core';
import { formRootRule, isNotEmpty, useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      user: {
        firstName: '',
        lastName: '',
      },
    },

    validate: {
      user: {
        [formRootRule]: (value) =>
          value.firstName.trim().length > 0 && value.firstName === value.lastName
            ? 'First name and last name cannot be the same'
            : null,
        firstName: isNotEmpty('First name is required'),
        lastName: isNotEmpty('Last name is required'),
      },
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
      <TextInput
        label="First name"
        placeholder="First name"
        {...form.getInputProps('user.firstName')}
      />
      <TextInput
        label="Last name"
        placeholder="Last name"
        mt="md"
        {...form.getInputProps('user.lastName')}
      />
      {form.errors.user && (
        <Text c="red" mt={5} fz="sm">
          {form.errors.user}
        </Text>
      )}
      <Button type="submit" mt="lg">
        Submit
      </Button>
    </form>
  );
}
`,maxWidth:340,centered:!0}},55272:e=>{"use strict";e.exports=function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;if(Array.isArray(t)){if((n=t.length)!=o.length)return!1;for(l=n;0!=l--;)if(!e(t[l],o[l]))return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((n=(a=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(l=n;0!=l--;)if(!Object.prototype.hasOwnProperty.call(o,a[l]))return!1;for(l=n;0!=l--;){var n,l,a,r=a[l];if(!e(t[r],o[r]))return!1}return!0}return t!=t&&o!=o}},62114:(e,t,o)=>{"use strict";o.d(t,{x:()=>l});var n=o(73186);function l(e){return(0,n.c)(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,e)}},65433:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},70204:(e,t,o)=>{"use strict";o.d(t,{Q:()=>A});var n=o(6029),l=o(55729),a=o(50212),r=o(2027),i=o(38744),s=o(7798),m=o(28136),u=o(18963),d=o(14163),c=o(33987),p=o(38757),f=o(15583),h=o(38919),v=o(8411),g=o(51718),b=o(17976);function y({direction:e,style:t,...o}){return(0,n.jsx)("svg",{style:{width:"var(--ni-chevron-size)",height:"var(--ni-chevron-size)",transform:"up"===e?"rotate(180deg)":void 0,...t},viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",...o,children:(0,n.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}var x={root:"m_e2f5cd4e",controls:"m_95e17d22",control:"m_80b4b171"};let j=/^(0\.0*|-0(\.0*)?)$/,k=/^-?0\d+(\.\d+)?\.?$/,I=/\.\d*0$/;function w(e){return"string"==typeof e&&""!==e&&!Number.isNaN(Number(e))}function N(e){return"number"==typeof e?e<Number.MAX_SAFE_INTEGER:""===e||w(e)&&Number(e)<Number.MAX_SAFE_INTEGER}function S(e,t,o){return void 0===e||(void 0===t||e>=t)&&(void 0===o||e<=o)}let P={step:1,clampBehavior:"blur",allowDecimal:!0,allowNegative:!0,withKeyboardEvents:!0,allowLeadingZeros:!0,trimLeadingZeroesOnBlur:!0,startValue:0},E=(0,c.V)((e,{size:t})=>({controls:{"--ni-chevron-size":(0,d.YC)(t,"ni-chevron-size")}})),A=(0,v.P9)((e,t)=>{let o=(0,h.Y)("NumberInput",P,e),{className:d,classNames:c,styles:v,unstyled:A,vars:M,onChange:T,onValueChange:F,value:C,defaultValue:O,max:B,min:V,step:_,hideControls:$,rightSection:D,isAllowed:R,clampBehavior:Y,onBlur:z,allowDecimal:L,decimalScale:G,onKeyDown:J,onKeyDownCapture:q,handlersRef:X,startValue:Z,disabled:W,rightSectionPointerEvents:Q,allowNegative:K,readOnly:U,size:H,rightSectionWidth:ee,stepHoldInterval:et,stepHoldDelay:eo,allowLeadingZeros:en,withKeyboardEvents:el,trimLeadingZeroesOnBlur:ea,attributes:er,...ei}=o,es=(0,f.I)({name:"NumberInput",classes:x,props:o,classNames:c,styles:v,unstyled:A,attributes:er,vars:M,varsResolver:E}),{resolvedClassNames:em,resolvedStyles:eu}=(0,p.Y)({classNames:c,styles:v,props:o}),[ed,ec]=(0,s.Z)({value:C,defaultValue:O,finalValue:"",onChange:T}),ep=void 0!==eo&&void 0!==et,ef=(0,l.useRef)(null),eh=(0,l.useRef)(null),ev=(0,l.useRef)(0),eg=e=>{let t=String(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0},eb=e=>{ef.current&&void 0!==e&&ef.current.setSelectionRange(e,e)},ey=(0,l.useRef)(u.l);ey.current=()=>{let e;if(!N(ed))return;let t=Math.max(eg(ed),eg(_)),o=10**t;if(!w(ed)&&("number"!=typeof ed||Number.isNaN(ed)))e=(0,i.q)(Z,V,B);else if(void 0!==B){let t=(Math.round(Number(ed)*o)+Math.round(_*o))/o;e=t<=B?t:B}else e=(Math.round(Number(ed)*o)+Math.round(_*o))/o;let n=e.toFixed(t);ec(parseFloat(n)),F?.({floatValue:parseFloat(n),formattedValue:n,value:n},{source:"increment"}),setTimeout(()=>eb(ef.current?.value.length),0)};let ex=(0,l.useRef)(u.l);ex.current=()=>{let e;if(!N(ed))return;let t=void 0!==V?V:K?Number.MIN_SAFE_INTEGER:0,o=Math.max(eg(ed),eg(_)),n=10**o;if(!w(ed)&&"number"!=typeof ed||Number.isNaN(ed))e=(0,i.q)(Z,t,B);else{let o=(Math.round(Number(ed)*n)-Math.round(_*n))/n;e=void 0!==t&&o<t?t:o}let l=e.toFixed(o);ec(parseFloat(l)),F?.({floatValue:parseFloat(l),formattedValue:l,value:l},{source:"decrement"}),setTimeout(()=>eb(ef.current?.value.length),0)},(0,m.bl)(X,{increment:ey.current,decrement:ex.current});let ej=e=>{e?ey.current?.():ex.current?.(),ev.current+=1},ek=e=>{if(ej(e),ep){let t="number"==typeof et?et:et(ev.current);eh.current=window.setTimeout(()=>ek(e),t)}},eI=(e,t)=>{e.preventDefault(),ef.current?.focus(),ej(t),ep&&(eh.current=window.setTimeout(()=>ek(t),eo))},ew=()=>{eh.current&&window.clearTimeout(eh.current),eh.current=null,ev.current=0},eN=(0,n.jsxs)("div",{...es("controls"),children:[(0,n.jsx)(b.N,{...es("control"),tabIndex:-1,"aria-hidden":!0,disabled:W||"number"==typeof ed&&void 0!==B&&ed>=B,mod:{direction:"up"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{eI(e,!0)},onPointerUp:ew,onPointerLeave:ew,children:(0,n.jsx)(y,{direction:"up"})}),(0,n.jsx)(b.N,{...es("control"),tabIndex:-1,"aria-hidden":!0,disabled:W||"number"==typeof ed&&void 0!==V&&ed<=V,mod:{direction:"down"},onMouseDown:e=>e.preventDefault(),onPointerDown:e=>{eI(e,!1)},onPointerUp:ew,onPointerLeave:ew,children:(0,n.jsx)(y,{direction:"down"})})]});return(0,n.jsx)(g.O,{component:r.HG,allowNegative:K,className:(0,a.A)(x.root,d),size:H,...ei,readOnly:U,disabled:W,value:ed,getInputRef:(0,m.pc)(t,ef),onValueChange:(e,t)=>{"event"===t.source&&ec(!function(e,t){return("number"==typeof e?e<Number.MAX_SAFE_INTEGER:!Number.isNaN(Number(e)))&&!Number.isNaN(e)&&14>t.toString().replace(".","").length&&""!==t}(e.floatValue,e.value)||j.test(e.value)||en&&k.test(e.value)||I.test(e.value)?e.value:e.floatValue),F?.(e,t)},rightSection:$||U||!N(ed)?D:D||eN,classNames:em,styles:eu,unstyled:A,__staticSelector:"NumberInput",decimalScale:L?G:0,onKeyDown:e=>{J?.(e),!U&&el&&("ArrowUp"===e.key&&(e.preventDefault(),ey.current?.()),"ArrowDown"===e.key&&(e.preventDefault(),ex.current?.()))},onKeyDownCapture:e=>{if(q?.(e),"Backspace"===e.key){let t=ef.current;t&&0===t.selectionStart&&t.selectionStart===t.selectionEnd&&(e.preventDefault(),window.setTimeout(()=>eb(0),0))}},rightSectionPointerEvents:Q??(W?"none":void 0),rightSectionWidth:ee??`var(--ni-right-section-width-${H||"sm"})`,allowLeadingZeros:en,onBlur:e=>{let t=ed;"blur"===Y&&"number"==typeof t&&(t=(0,i.q)(t,V,B)),ea&&"string"==typeof t&&15>eg(t)&&(t=function(e,t,o){let n=e.toString().replace(/^0+(?=\d)/,""),l=parseFloat(n);return Number.isNaN(l)?n:l>Number.MAX_SAFE_INTEGER?void 0!==t?t:n:(0,i.q)(l,o,t)}(t,B,V)),ed!==t&&ec(t),z?.(e)},attributes:er,isAllowed:e=>"strict"===Y?R?R(e)&&S(e.floatValue,V,B):S(e.floatValue,V,B):!R||R(e)})});A.classes={...g.O.classes,...x},A.displayName="@mantine/core/NumberInput"},73186:(e,t,o)=>{"use strict";function n(e,t){let o=t||!0;return t=>"string"!=typeof t?o:e.test(t)?null:o}o.d(t,{c:()=>n})},84276:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},86874:(e,t,o)=>{"use strict";function n(e,t,o){"object"==typeof o.value&&(o.value=l(o.value)),o.enumerable&&!o.get&&!o.set&&o.configurable&&o.writable&&"__proto__"!==t?e[t]=o.value:Object.defineProperty(e,t,o)}function l(e){if("object"!=typeof e)return e;var t,o,a,r=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?a=Object.create(e.__proto__||null):"[object Array]"===i?a=Array(e.length):"[object Set]"===i?(a=new Set,e.forEach(function(e){a.add(l(e))})):"[object Map]"===i?(a=new Map,e.forEach(function(e,t){a.set(l(t),l(e))})):"[object Date]"===i?a=new Date(+e):"[object RegExp]"===i?a=new RegExp(e.source,e.flags):"[object DataView]"===i?a=new e.constructor(l(e.buffer)):"[object ArrayBuffer]"===i?a=e.slice(0):"Array]"===i.slice(-6)&&(a=new e.constructor(e)),a){for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)n(a,o[r],Object.getOwnPropertyDescriptor(e,o[r]));for(r=0,o=Object.getOwnPropertyNames(e);r<o.length;r++)Object.hasOwnProperty.call(a,t=o[r])&&a[t]===e[t]||n(a,t,Object.getOwnPropertyDescriptor(e,t))}return a||e}o.d(t,{Q:()=>l})},88795:(e,t,o)=>{"use strict";o.d(t,{V:()=>u});var n=o(6029),l=o(38774),a=o(57414),r=o(61087),i=o(69329),s=o(13112),m=o(62114);let u={type:"code",component:function(){let e=(0,i.m)({mode:"uncontrolled",name:"register-form",initialValues:{name:"",email:""},validate:{name:(0,s.h)("Name is required"),email:(0,m.x)("Invalid email")}});return(0,n.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e),t=>{let o=Object.keys(t)[0];e.getInputNode(o)?.focus()}),children:[(0,n.jsx)(l.k,{withAsterisk:!0,label:"Your name",placeholder:"Your name",...e.getInputProps("name")},e.key("name")),(0,n.jsx)(l.k,{withAsterisk:!0,label:"Your email",placeholder:"your@email.com",mt:"md",...e.getInputProps("email")},e.key("email")),(0,n.jsx)(a.Y,{justify:"flex-end",mt:"md",children:(0,n.jsx)(r.$,{type:"submit",children:"Submit"})})]})},code:`
import { Button, Group, TextInput } from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    name: 'register-form',
    initialValues: {
      name: '',
      email: '',
    },

    validate: {
      name: isNotEmpty('Name is required'),
      email: isEmail('Invalid email'),
    },
  });

  return (
    <form
      onSubmit={form.onSubmit(
        (values) => console.log(values),
        (errors) => {
          const firstErrorPath = Object.keys(errors)[0];
          form.getInputNode(firstErrorPath)?.focus();
        }
      )}
    >
      <TextInput
        withAsterisk
        label="Your name"
        placeholder="Your name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />

      <TextInput
        withAsterisk
        label="Your email"
        placeholder="your@email.com"
        mt="md"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`,maxWidth:340,centered:!0}},88992:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},89009:(e,t,o)=>{"use strict";o.d(t,{y:()=>x});var n=o(6029),l=o(50212),a=o(2011),r=o(7798);o(55729);var i=o(14163),s=o(33987),m=o(38757),u=o(15583),d=o(38919),c=o(59278),p=o(8411),f=o(44572),h=o(29734),v=o(51718),g={root:"m_f61ca620",input:"m_ccf8da4c",innerInput:"m_f2d85dd2",visibilityToggle:"m_b1072d44"};let b={visibilityToggleIcon:({reveal:e})=>(0,n.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"var(--psi-icon-size)",height:"var(--psi-icon-size)"},children:(0,n.jsx)("path",{d:e?"M13.3536 2.35355C13.5488 2.15829 13.5488 1.84171 13.3536 1.64645C13.1583 1.45118 12.8417 1.45118 12.6464 1.64645L10.6828 3.61012C9.70652 3.21671 8.63759 3 7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C0.902945 9.08812 2.02314 10.1861 3.36061 10.9323L1.64645 12.6464C1.45118 12.8417 1.45118 13.1583 1.64645 13.3536C1.84171 13.5488 2.15829 13.5488 2.35355 13.3536L4.31723 11.3899C5.29348 11.7833 6.36241 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C14.0971 5.9119 12.9769 4.81391 11.6394 4.06771L13.3536 2.35355ZM9.90428 4.38861C9.15332 4.1361 8.34759 4 7.5 4C4.80285 4 2.52952 5.37816 1.09622 7.50001C1.87284 8.6497 2.89609 9.58106 4.09974 10.1931L9.90428 4.38861ZM5.09572 10.6114L10.9003 4.80685C12.1039 5.41894 13.1272 6.35031 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11C6.65241 11 5.84668 10.8639 5.09572 10.6114Z":"M7.5 11C4.80285 11 2.52952 9.62184 1.09622 7.50001C2.52952 5.37816 4.80285 4 7.5 4C10.1971 4 12.4705 5.37816 13.9038 7.50001C12.4705 9.62183 10.1971 11 7.5 11ZM7.5 3C4.30786 3 1.65639 4.70638 0.0760002 7.23501C-0.0253338 7.39715 -0.0253334 7.60288 0.0760014 7.76501C1.65639 10.2936 4.30786 12 7.5 12C10.6921 12 13.3436 10.2936 14.924 7.76501C15.0253 7.60288 15.0253 7.39715 14.924 7.23501C13.3436 4.70638 10.6921 3 7.5 3ZM7.5 9.5C8.60457 9.5 9.5 8.60457 9.5 7.5C9.5 6.39543 8.60457 5.5 7.5 5.5C6.39543 5.5 5.5 6.39543 5.5 7.5C5.5 8.60457 6.39543 9.5 7.5 9.5Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})},y=(0,s.V)((e,{size:t})=>({root:{"--psi-icon-size":(0,i.YC)(t,"psi-icon-size"),"--psi-button-size":(0,i.YC)(t,"psi-button-size")}})),x=(0,p.P9)((e,t)=>{let o=(0,d.Y)("PasswordInput",b,e),{classNames:i,className:s,style:p,styles:v,unstyled:x,vars:j,required:k,error:I,leftSection:w,disabled:N,id:S,variant:P,inputContainer:E,description:A,label:M,size:T,errorProps:F,descriptionProps:C,labelProps:O,withAsterisk:B,inputWrapperOrder:V,wrapperProps:_,radius:$,rightSection:D,rightSectionWidth:R,rightSectionPointerEvents:Y,leftSectionWidth:z,visible:L,defaultVisible:G,onVisibilityChange:J,visibilityToggleIcon:q,visibilityToggleButtonProps:X,rightSectionProps:Z,leftSectionProps:W,leftSectionPointerEvents:Q,withErrorStyles:K,mod:U,attributes:H,...ee}=o,et=(0,a.B)(S),[eo,en]=(0,r.Z)({value:L,defaultValue:G,finalValue:!1,onChange:J}),el=()=>en(!eo),ea=(0,u.I)({name:"PasswordInput",classes:g,props:o,className:s,style:p,classNames:i,styles:v,unstyled:x,attributes:H,vars:j,varsResolver:y}),{resolvedClassNames:er,resolvedStyles:ei}=(0,m.Y)({classNames:i,styles:v,props:o}),{styleProps:es,rest:em}=(0,c.j)(ee),eu=F?.id||`${et}-error`,ed=C?.id||`${et}-description`,ec=!!I&&"boolean"!=typeof I,ep=!!A,ef=`${ec?eu:""} ${ep?ed:""}`,eh=ef.trim().length>0?ef.trim():void 0,ev=(0,n.jsx)(f.M,{...ea("visibilityToggle"),disabled:N,radius:$,"aria-hidden":!X,tabIndex:-1,...X,variant:X?.variant??"subtle",color:"gray",unstyled:x,onTouchEnd:e=>{e.preventDefault(),X?.onTouchEnd?.(e),el()},onMouseDown:e=>{e.preventDefault(),X?.onMouseDown?.(e),el()},onKeyDown:e=>{X?.onKeyDown?.(e)," "===e.key&&(e.preventDefault(),el())},children:(0,n.jsx)(q,{reveal:eo})});return(0,n.jsx)(h.p.Wrapper,{required:k,id:et,label:M,error:I,description:A,size:T,classNames:er,styles:ei,__staticSelector:"PasswordInput",unstyled:x,withAsterisk:B,inputWrapperOrder:V,inputContainer:E,variant:P,labelProps:{...O,htmlFor:et},descriptionProps:{...C,id:ed},errorProps:{...F,id:eu},mod:U,attributes:H,...ea("root"),...es,..._,children:(0,n.jsx)(h.p,{component:"div",error:I,leftSection:w,size:T,classNames:{...er,input:(0,l.A)(g.input,er.input)},styles:ei,radius:$,disabled:N,__staticSelector:"PasswordInput",rightSectionWidth:R,rightSection:D??ev,variant:P,unstyled:x,leftSectionWidth:z,rightSectionPointerEvents:Y||"all",rightSectionProps:Z,leftSectionProps:W,leftSectionPointerEvents:Q,withAria:!1,withErrorStyles:K,attributes:H,children:(0,n.jsx)("input",{required:k,"data-invalid":!!I||void 0,"data-with-left-section":!!w||void 0,...ea("innerInput"),disabled:N,id:et,ref:t,...em,"aria-describedby":eh,autoComplete:em.autoComplete||"off",type:eo?"text":"password"})})})});x.classes={...v.O.classes,...g},x.displayName="@mantine/core/PasswordInput"},90993:(e,t,o)=>{"use strict";o.d(t,{A:()=>n});let n=(0,o(41495).A)("outline","trash","Trash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])},99706:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>T});var n=o(6029),l=o(16285),a=o(38774),r=o(70204),i=o(61087),s=o(69329);let m={type:"code",component:function(){let e=(0,s.m)({mode:"uncontrolled",initialValues:{name:"",email:"",age:0},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null}});return(0,n.jsxs)("form",{onSubmit:e.onSubmit(console.log),children:[(0,n.jsx)(a.k,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,n.jsx)(a.k,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,n.jsx)(r.Q,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")},e.key("age")),(0,n.jsx)(i.$,{type:"submit",mt:"sm",children:"Submit"})]})},code:`
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '', age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
    },
  });

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
`,centered:!0,maxWidth:340};var u=o(36076),d=o(46626),c=o(76320),p=o(89009),f=o(57414);let h={type:"code",component:function(){let e=(0,s.m)({mode:"uncontrolled",initialValues:{password:"secret",confirmPassword:"sevret"},validate:{confirmPassword:(e,t)=>e!==t.password?"Passwords did not match":null}});return(0,n.jsx)(c.a,{maw:340,mx:"auto",children:(0,n.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,n.jsx)(p.y,{label:"Password",placeholder:"Password",...e.getInputProps("password")},e.key("password")),(0,n.jsx)(p.y,{mt:"sm",label:"Confirm password",placeholder:"Confirm password",...e.getInputProps("confirmPassword")},e.key("confirmPassword")),(0,n.jsx)(f.Y,{justify:"flex-end",mt:"md",children:(0,n.jsx)(i.$,{type:"submit",children:"Submit"})})]})})},code:`
import { useForm } from '@mantine/form';
import { PasswordInput, Group, Button, Box } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      password: 'secret',
      confirmPassword: 'sevret',
    },

    validate: {
      confirmPassword: (value, values) =>
        value !== values.password ? 'Passwords did not match' : null,
    },
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <PasswordInput
          label="Password"
          placeholder="Password"
          key={form.key('password')}
          {...form.getInputProps('password')}
        />

        <PasswordInput
          mt="sm"
          label="Confirm password"
          placeholder="Confirm password"
          key={form.key('confirmPassword')}
          {...form.getInputProps('confirmPassword')}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
`},v={type:"code",component:function(){let e=(0,s.m)({mode:"uncontrolled",initialValues:{name:"",age:void 0},validate:e=>({name:e.name.length<2?"Too short name":null,age:void 0===e.age?"Age is required":e.age<18?"You must be at least 18":null})});return(0,n.jsx)(c.a,{maw:340,mx:"auto",children:(0,n.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,n.jsx)(a.k,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,n.jsx)(r.Q,{mt:"sm",label:"Age",placeholder:"You age",...e.getInputProps("age")},e.key("age")),(0,n.jsx)(f.Y,{justify:"flex-end",mt:"md",children:(0,n.jsx)(i.$,{type:"submit",children:"Submit"})})]})})},code:`
import { useForm } from '@mantine/form';
import { Box, TextInput, NumberInput, Button, Group } from '@mantine/core';

function Demo() {
  const form = useForm<{ name: string; age: number | undefined }>({
    mode: 'uncontrolled',
    initialValues: { name: '', age: undefined },
    validate: (values) => ({
      name: values.name.length < 2 ? 'Too short name' : null,
      age:
        values.age === undefined
          ? 'Age is required'
          : values.age < 18
            ? 'You must be at least 18'
            : null,
    }),
  });

  return (
    <Box maw={340} mx="auto">
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          label="Name"
          placeholder="Name"
          key={form.key('name')}
          {...form.getInputProps('name')}
        />
        <NumberInput
          mt="sm"
          label="Age"
          placeholder="You age"
          key={form.key('age')}
          {...form.getInputProps('age')}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Box>
  );
}
`},g={type:"code",component:function(){let e=(0,s.m)({mode:"uncontrolled",validateInputOnChange:!0,initialValues:{name:"",email:"",age:0},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null}});return(0,n.jsxs)("form",{onSubmit:e.onSubmit(console.log),children:[(0,n.jsx)(a.k,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,n.jsx)(a.k,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,n.jsx)(r.Q,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")},e.key("age")),(0,n.jsx)(i.$,{type:"submit",mt:"sm",children:"Submit"})]})},code:`
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button, } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnChange: true,
    initialValues: { name: '', email: '', age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
    },
  });

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
`,centered:!0,maxWidth:340};var b=o(93898);let y={type:"code",component:function(){let e=(0,s.m)({mode:"uncontrolled",validateInputOnChange:["email","name",`jobs.${b.K}.title`],initialValues:{name:"",email:"",age:0,jobs:[{title:""},{title:""}]},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null,jobs:{title:e=>e.length<2?"Job must have at least 2 letters":null}}});return(0,n.jsxs)("form",{onSubmit:e.onSubmit(console.log),children:[(0,n.jsx)(a.k,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,n.jsx)(a.k,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,n.jsx)(r.Q,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")},e.key("age")),(0,n.jsx)(a.k,{mt:"sm",label:"Job 1",placeholder:"Job 1",...e.getInputProps("jobs.0.title")},e.key("jobs.0.title")),(0,n.jsx)(a.k,{mt:"sm",label:"Job 2",placeholder:"Job 2",...e.getInputProps("jobs.1.title")},e.key("jobs.1.title")),(0,n.jsx)(i.$,{type:"submit",mt:"sm",children:"Submit"})]})},code:`
import { useForm, FORM_INDEX } from '@mantine/form';
import { NumberInput, TextInput, Button } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnChange: [
      'email',
      'name',
      // use FORM_INDEX to reference fields indices
      \`jobs.\${FORM_INDEX}.title\`,
    ],
    initialValues: { name: '', email: '', age: 0, jobs: [{ title: '' }, { title: '' }] },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
      jobs: {
        title: (value) => (value.length < 2 ? 'Job must have at least 2 letters' : null),
      },
    },
  });

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      <TextInput
        mt="sm"
        label="Job 1"
        placeholder="Job 1"
        key={form.key('jobs.0.title')}
        {...form.getInputProps('jobs.0.title')}
      />
      <TextInput
        mt="sm"
        label="Job 2"
        placeholder="Job 2"
        key={form.key('jobs.1.title')}
        {...form.getInputProps('jobs.1.title')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
`,centered:!0,maxWidth:340},x={type:"code",component:function(){let e=(0,s.m)({mode:"uncontrolled",validateInputOnBlur:!0,initialValues:{name:"",email:"",age:0},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null}});return(0,n.jsxs)("form",{onSubmit:e.onSubmit(console.log),children:[(0,n.jsx)(a.k,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,n.jsx)(a.k,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,n.jsx)(r.Q,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")},e.key("age")),(0,n.jsx)(i.$,{type:"submit",mt:"sm",children:"Submit"})]})},code:`
import { useForm } from '@mantine/form';
import { NumberInput, TextInput, Button } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnBlur: true,
    initialValues: { name: '', email: '', age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
    },
  });

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
`,centered:!0,maxWidth:340},j={type:"code",component:function(){let e=(0,s.m)({mode:"uncontrolled",validateInputOnBlur:["email","name",`jobs.${b.K}.title`],initialValues:{name:"",email:"",age:0,jobs:[{title:""},{title:""}]},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email",age:e=>e<18?"You must be at least 18 to register":null,jobs:{title:e=>e.length<2?"Job must have at least 2 letters":null}}});return(0,n.jsxs)("form",{onSubmit:e.onSubmit(console.log),children:[(0,n.jsx)(a.k,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,n.jsx)(a.k,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,n.jsx)(r.Q,{mt:"sm",label:"Age",placeholder:"Age",min:0,max:99,...e.getInputProps("age")},e.key("age")),(0,n.jsx)(a.k,{mt:"sm",label:"Job 1",placeholder:"Job 1",...e.getInputProps("jobs.0.title")},e.key("jobs.0.title")),(0,n.jsx)(a.k,{mt:"sm",label:"Job 2",placeholder:"Job 2",...e.getInputProps("jobs.1.title")},e.key("jobs.1.title")),(0,n.jsx)(i.$,{type:"submit",mt:"sm",children:"Submit"})]})},code:`
import { useForm, FORM_INDEX } from '@mantine/form';
import { NumberInput, TextInput, Button } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    validateInputOnBlur: [
      'email',
      'name',
      // use FORM_INDEX to reference fields indices
      \`jobs.\${FORM_INDEX}.title\`,
    ],
    initialValues: { name: '', email: '', age: 0, jobs: [{ title: '' }, { title: '' }] },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
      jobs: {
        title: (value) => (value.length < 2 ? 'Job must have at least 2 letters' : null),
      },
    },
  });

  return (
    <form onSubmit={form.onSubmit(console.log)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <NumberInput
        mt="sm"
        label="Age"
        placeholder="Age"
        min={0}
        max={99}
        key={form.key('age')}
        {...form.getInputProps('age')}
      />
      <TextInput
        mt="sm"
        label="Job 1"
        placeholder="Job 1"
        key={form.key('jobs.0.title')}
        {...form.getInputProps('jobs.0.title')}
      />
      <TextInput
        mt="sm"
        label="Job 2"
        placeholder="Job 2"
        key={form.key('jobs.1.title')}
        {...form.getInputProps('jobs.1.title')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
`,centered:!0,maxWidth:340};var k=o(4349);let I={type:"code",component:function(){let e=(0,s.m)({mode:"uncontrolled",clearInputErrorOnChange:!1,initialValues:{email:"",termsOfService:!1},validate:{email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email"}});return(0,n.jsxs)("form",{onSubmit:e.onSubmit(e=>console.log(e)),children:[(0,n.jsx)(a.k,{withAsterisk:!0,label:"Email",placeholder:"your@email.com",...e.getInputProps("email")},e.key("email")),(0,n.jsx)(k.S,{mt:"md",label:"I agree to sell my privacy",...e.getInputProps("termsOfService",{type:"checkbox"})},e.key("termsOfService")),(0,n.jsx)(f.Y,{justify:"flex-end",mt:"md",children:(0,n.jsx)(i.$,{type:"submit",children:"Submit"})})]})},code:`
import { TextInput, Checkbox, Button, Group } from '@mantine/core';
import { useForm } from '@mantine/form';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    clearInputErrorOnChange: false,
    initialValues: {
      email: '',
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput
        withAsterisk
        label="Email"
        placeholder="your@email.com"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />

      <Checkbox
        mt="md"
        label="I agree to sell my privacy"
        key={form.key('termsOfService')}
        {...form.getInputProps('termsOfService', { type: 'checkbox' })}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}
`,centered:!0,maxWidth:340};var w=o(70530);let N={type:"code",component:function(){let e=(0,s.m)({mode:"uncontrolled",initialValues:{name:"",email:""},validate:{name:e=>e.length<2?"Name must have at least 2 letters":null,email:e=>/^\S+@\S+$/.test(e)?null:"Invalid email"}});return(0,n.jsxs)("form",{onSubmit:e.onSubmit(console.log,e=>{e.name?w.$e.show({message:"Please fill name field",color:"red"}):e.email&&w.$e.show({message:"Please provide a valid email",color:"red"})}),children:[(0,n.jsx)(a.k,{label:"Name",placeholder:"Name",...e.getInputProps("name")},e.key("name")),(0,n.jsx)(a.k,{mt:"sm",label:"Email",placeholder:"Email",...e.getInputProps("email")},e.key("email")),(0,n.jsx)(i.$,{type:"submit",mt:"sm",children:"Submit"})]})},code:`
import { useForm } from '@mantine/form';
import { TextInput, Button } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: '', email: '' },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\\S+@\\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleError = (errors: typeof form.errors) => {
    if (errors.name) {
      notifications.show({ message: 'Please fill name field', color: 'red' });
    } else if (errors.email) {
      notifications.show({ message: 'Please provide a valid email', color: 'red' });
    }
  };

  return (
    <form onSubmit={form.onSubmit(console.log, handleError)}>
      <TextInput
        label="Name"
        placeholder="Name"
        key={form.key('name')}
        {...form.getInputProps('name')}
      />
      <TextInput
        mt="sm"
        label="Email"
        placeholder="Email"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <Button type="submit" mt="sm">
        Submit
      </Button>
    </form>
  );
}
`,centered:!0,maxWidth:340};var S=o(88795),P=o(38547),E=o(5262);let A=(0,P.P)(E.XZ.formValidation);function M(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components},{Demo:o}=t;return o||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"validation-with-rules-object",children:"Validation with rules object"}),"\n",(0,n.jsx)(t.p,{children:"To validate form with rules object, provide an object of functions which take field value as an argument\nand return error message (any React node) or null if field is valid:"}),"\n",(0,n.jsx)(o,{data:m}),"\n",(0,n.jsx)(t.h2,{id:"rule-function-arguments",children:"Rule function arguments"}),"\n",(0,n.jsx)(t.p,{children:"Each form rule receives the following arguments:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"value"})," – value of field"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"values"})," – all form values"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"path"})," – field path, for example ",(0,n.jsx)(t.code,{children:"user.email"})," or ",(0,n.jsx)(t.code,{children:"cart.0.price"})]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"path"})," argument can be used to get information about field location relative to other fields,\nfor example you can get index of array element:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { a: [{ b: 1 }, { b: 2 }] },\n  validate: {\n    a: {\n      b: (value, values, path) => (path === 'a.0.b' ? 'error' : null),\n    },\n  },\n});\n"})}),"\n",(0,n.jsx)(t.h2,{id:"formrootrule",children:"formRootRule"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"formRootRule"})," is a special rule path that can be used to validate objects and arrays\nalongside with their nested fields. For example, it is useful when you want to capture\na list of values, validate each value individually and then validate the list itself\nto not be empty:"]}),"\n",(0,n.jsx)(o,{data:u.a}),"\n",(0,n.jsx)(t.p,{children:"Another example is to validate an object fields combination:"}),"\n",(0,n.jsx)(o,{data:d.E}),"\n",(0,n.jsx)(t.h2,{id:"validation-based-on-other-form-values",children:"Validation based on other form values"}),"\n",(0,n.jsx)(t.p,{children:"You can get all form values as a second rule function argument to perform field validation based on other\nform values. For example, you can validate that password confirmation is the same as password:"}),"\n",(0,n.jsx)(o,{data:h}),"\n",(0,n.jsx)(t.h2,{id:"function-based-validation",children:"Function based validation"}),"\n",(0,n.jsxs)(t.p,{children:["Another approach to handle validation is to provide a function to ",(0,n.jsx)(t.code,{children:"validate"}),".\nFunction takes form values as single argument and should return object that contains\nerrors of corresponding fields. If field is valid or field validation is not required, you can either return null or simply omit it\nfrom the validation results."]}),"\n",(0,n.jsx)(o,{data:v}),"\n",(0,n.jsx)(t.h2,{id:"validate-fields-on-change",children:"Validate fields on change"}),"\n",(0,n.jsxs)(t.p,{children:["To validate all fields on change set ",(0,n.jsx)(t.code,{children:"validateInputOnChange"})," option to ",(0,n.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  validateInputOnChange: true,\n});\n"})}),"\n",(0,n.jsx)(o,{data:g,demoProps:{toggle:!0}}),"\n",(0,n.jsx)(t.p,{children:"You can also provide an array of fields paths to validate only those values:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { FORM_INDEX, useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  validateInputOnChange: [\n    'name',\n    'email',\n    `jobs.${FORM_INDEX}.title`,\n  ],\n});\n"})}),"\n",(0,n.jsx)(o,{data:y,demoProps:{toggle:!0}}),"\n",(0,n.jsx)(t.h2,{id:"validate-fields-on-blur",children:"Validate fields on blur"}),"\n",(0,n.jsxs)(t.p,{children:["To validate all fields on blur set ",(0,n.jsx)(t.code,{children:"validateInputOnBlur"})," option to ",(0,n.jsx)(t.code,{children:"true"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  validateInputOnBlur: true,\n});\n"})}),"\n",(0,n.jsx)(o,{data:x,demoProps:{toggle:!0}}),"\n",(0,n.jsx)(t.p,{children:"You can also provide an array of fields paths to validate only those values:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { FORM_INDEX, useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  validateInputOnBlur: ['name', 'email', `jobs.${FORM_INDEX}.title`],\n});\n"})}),"\n",(0,n.jsx)(o,{data:j,demoProps:{toggle:!0}}),"\n",(0,n.jsx)(t.h2,{id:"clear-field-error-on-change",children:"Clear field error on change"}),"\n",(0,n.jsxs)(t.p,{children:["By default, field error is cleared when value changes. To change this, set ",(0,n.jsx)(t.code,{children:"clearInputErrorOnChange"})," to ",(0,n.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  clearInputErrorOnChange: false,\n});\n"})}),"\n",(0,n.jsx)(o,{data:I,demoProps:{toggle:!0}}),"\n",(0,n.jsx)(t.h2,{id:"validation-in-onsubmit-handler",children:"Validation in onSubmit handler"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"form.onSubmit"})," accepts two arguments: first argument is ",(0,n.jsx)(t.code,{children:"handleSubmit"})," function that will be called with form values, when validation\nwas completed without errors, second argument is ",(0,n.jsx)(t.code,{children:"handleErrors"})," function, it is called with errors object when validation was completed with errors."]}),"\n",(0,n.jsxs)(t.p,{children:["You can use ",(0,n.jsx)(t.code,{children:"handleErrors"})," function to perform certain actions when user tries to submit form without values,\nfor example, you can show a notification:"]}),"\n",(0,n.jsx)(o,{data:N}),"\n",(0,n.jsx)(t.h2,{id:"isvalid-handler",children:"isValid handler"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"form.isValid"})," performs form validation with given validation functions, rules object or schema, but unlike\n",(0,n.jsx)(t.code,{children:"form.validate"})," it does not set ",(0,n.jsx)(t.code,{children:"form.errors"})," and just returns boolean value that indicates whether form is valid."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: { name: '', age: 0 },\n  validate: {\n    name: (value) => (value.trim().length < 2 ? 'Too short' : null),\n    age: (value) => (value < 18 ? 'Too young' : null),\n  },\n});\n\n// get validation status of all values\nform.isValid(); // -> false\n\n// get validation status of field\nform.isValid('name'); // -> false\n"})}),"\n",(0,n.jsx)(t.h2,{id:"focus-first-invalid-field",children:"Focus first invalid field"}),"\n",(0,n.jsxs)(t.p,{children:["The second argument of the ",(0,n.jsx)(t.code,{children:"form.onSubmit"})," function is a callback function that is called\nwith the ",(0,n.jsx)(t.a,{href:"/form/errors",children:"errors object"})," when form validation fails.\nYou can use this callback to focus the first invalid field or perform any other action."]}),"\n",(0,n.jsxs)(t.p,{children:["To get the DOM node of any input, use ",(0,n.jsx)(t.code,{children:"form.getInputNode('path-to-field')"}),". Note that\nin order for this feature to work, you need to spread ",(0,n.jsx)(t.code,{children:"form.getInputProps('path-to-field')"})," to\nthe input element."]}),"\n",(0,n.jsx)(o,{data:S.V})]})}function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(A,{...e,children:(0,n.jsx)(M,{...e})})}}},e=>{e.O(0,[2027,38547,69329,90636,46593,38792],()=>e(e.s=3117)),_N_E=e.O()}]);