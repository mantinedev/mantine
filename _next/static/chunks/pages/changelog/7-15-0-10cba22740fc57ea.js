(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[36928],{18605:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-15-0",function(){return n(33661)}])},23926:(e,t,n)=>{"use strict";n.d(t,{K:()=>i});var o=n(6029),r=n(2027);n(55729);var a=n(38919);function i(e){let{value:t,defaultValue:n,...i}=(0,a.Y)("NumberFormatter",null,e);return void 0===t?null:(0,o.jsx)(r.HG,{displayType:"text",value:t,...i})}i.extend=e=>e,i.displayName="@mantine/core/NumberFormatter"},27081:(e,t,n)=>{"use strict";n.d(t,{H:()=>i});var o=n(6029),r=n(17407),a=n(99764);let i={type:"code",component:function(){return(0,o.jsx)(r.E,{h:300,data:a.p,dataKey:"month",getBarColor:e=>e>700?"teal.8":"red.8",series:[{name:"Laptops",color:"gray.6"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import { data } from './data';

function Demo() {
  return (
    <BarChart
      h={300}
      data={data}
      dataKey="month"
      getBarColor={(value) => (value > 700 ? 'teal.8' : 'red.8')}
      series={[{ name: 'Laptops', color: 'gray.6' }]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:a.kZ,language:"tsx",fileName:"data.ts"}]}},33355:(e,t,n)=>{"use strict";n.d(t,{L:()=>l});var o=n(6029),r=n(17407),a=n(33822),i=n(99764),s={root:"m_661936e7",bar:"m_c97c716e"};let l={type:"code",component:function(){let e=(0,a.U)("(min-width: 48em)")?42:26,t=.5*e;return(0,o.jsx)(r.E,{h:300,data:i.DM,dataKey:"index",barChartProps:{barGap:-((e+t)/2)},barProps:n=>({barSize:"you"===n.name?e:t}),classNames:s,series:[{name:"you",color:"var(--you-bar-color)"},{name:"average",color:"var(--average-bar-color)"}]})},code:[{code:`
import { BarChart } from '@mantine/charts';
import classes from './Demo.module.css';
import { data } from './data';

function Demo() {
  const bigBarWidth = useMediaQuery('(min-width: 48em)') ? 42 : 26;
  const ratio = 0.5;
  const smallBarWidth = bigBarWidth * ratio;
  const barGap = (bigBarWidth + smallBarWidth) / -2;

  return (
    <BarChart
      h={300}
      data={overlayData}
      dataKey="index"
      barChartProps={{ barGap }}
      barProps={(data) => ({ barSize: data.name === 'you' ? bigBarWidth : smallBarWidth })}
      classNames={classes}
      series={[
        { name: 'you', color: 'var(--you-bar-color)' },
        { name: 'average', color: 'var(--average-bar-color)' },
      ]}
    />
  );
}
`,language:"tsx",fileName:"Demo.tsx"},{code:`.root {
  @mixin light {
    --average-bar-color: var(--mantine-color-dark-8);
    --you-bar-color: var(--mantine-color-blue-3);
  }

  @mixin dark {
    --you-bar-color: var(--mantine-color-blue-8);
    --average-bar-color: var(--mantine-color-gray-4);
  }
}

.bar {
  transform: translateX(-1.5px);
}
`,language:"scss",fileName:"Demo.module.css"},{code:i.Em,language:"tsx",fileName:"data.ts"}]}},33661:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>g});var o=n(6029),r=n(16285),a=n(60140),i=n(27081),s=n(60821),l=n(67221),d=n(68335),c=n(92123),u=n(49957),m=n(84919),h=n(70863),p=n(33857),x=n(33355),f=n(38547),b=n(5262);let v=(0,f.P)(b.XZ.Changelog7150);function j(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components},{Demo:n,SponsorButton:f}=t;return n||T("Demo",!0),f||T("SponsorButton",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"support-mantine-development",children:"Support Mantine development"}),"\n",(0,o.jsxs)(t.p,{children:["You can now sponsor Mantine development with ",(0,o.jsx)(t.a,{href:"https://opencollective.com/mantinedev",children:"OpenCollective"}),".\nAll funds are used to improve Mantine and create new features and components."]}),"\n",(0,o.jsx)(f,{}),"\n",(0,o.jsx)(t.h2,{id:"use-radial-move-hook",children:"use-radial-move hook"}),"\n",(0,o.jsxs)(t.p,{children:["New ",(0,o.jsx)(t.a,{href:"/hooks/use-radial-move",children:"use-radial-move"})," hook can be used to create custom radial sliders:"]}),"\n",(0,o.jsx)(n,{data:a.P}),"\n",(0,o.jsx)(t.h2,{id:"barchart-color-based-on-value",children:"BarChart color based on value"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/charts/bar-chart",children:"BarChart"})," component now supports ",(0,o.jsx)(t.code,{children:"getBarColor"})," prop to assign color based on value.\n",(0,o.jsx)(t.code,{children:"getBarColor"})," function is called with two arguments: value and series object. It should return a color\nstring (theme color reference or any valid CSS color value)."]}),"\n",(0,o.jsx)(n,{data:i.H}),"\n",(0,o.jsx)(t.h2,{id:"buttongroupsection-and-actionicongroupsection",children:"Button.GroupSection and ActionIcon.GroupSection"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"ActionIcon.GroupSection"})," and ",(0,o.jsx)(t.code,{children:"Button.GroupSection"})," are new components that\ncan be used in ",(0,o.jsx)(t.code,{children:"ActionIcon.Group"}),"/",(0,o.jsx)(t.code,{children:"Button.Group"})," to create sections that are\nnot ",(0,o.jsx)(t.code,{children:"ActionIcon"}),"/",(0,o.jsx)(t.code,{children:"Button"})," components:"]}),"\n",(0,o.jsx)(n,{data:s.h}),"\n",(0,o.jsx)(t.h2,{id:"table-vertical-variant",children:"Table vertical variant"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/core/table",children:"Table"})," component now support ",(0,o.jsx)(t.code,{children:'variant="vertical"'}),":"]}),"\n",(0,o.jsx)(n,{data:l.V}),"\n",(0,o.jsx)(t.h2,{id:"table-tabular-numbers",children:"Table tabular numbers"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/core/table",children:"Table"})," component now supports ",(0,o.jsx)(t.code,{children:"tabularNums"})," prop to render numbers in tabular style. It sets\n",(0,o.jsx)(t.code,{children:"font-variant-numeric: tabular-nums"})," which makes numbers to have equal width.\nThis is useful when you have columns with numbers and you want them to be aligned:"]}),"\n",(0,o.jsx)(n,{data:d.j}),"\n",(0,o.jsx)(t.h2,{id:"update-function-in-modals-manager",children:"Update function in modals manager"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/x/modals",children:"Modals manager"})," now supports ",(0,o.jsx)(t.code,{children:"modals.updateModal"})," and ",(0,o.jsx)(t.code,{children:"modals.updateContextModal"}),"\nfunction to update modal after it was opened:"]}),"\n",(0,o.jsx)(n,{data:c.z}),"\n",(0,o.jsx)(t.h2,{id:"useform-submitting-state",children:"useForm submitting state"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/form/use-form",children:"use-form"})," hook now supports ",(0,o.jsx)(t.code,{children:"form.submitting"})," field\nand ",(0,o.jsx)(t.code,{children:"form.setSubmitting"})," function to track form submission state."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"form.submitting"})," field will be set to ",(0,o.jsx)(t.code,{children:"true"})," if function passed to\n",(0,o.jsx)(t.code,{children:"form.onSubmit"})," returns a promise. After the promise is resolved or rejected,\n",(0,o.jsx)(t.code,{children:"form.submitting"})," will be set to ",(0,o.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,o.jsx)(n,{data:u.B}),"\n",(0,o.jsxs)(t.p,{children:["You can also manually set ",(0,o.jsx)(t.code,{children:"form.submitting"})," to ",(0,o.jsx)(t.code,{children:"true"})," or ",(0,o.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({ mode: 'uncontrolled' });\nform.submitting; // -> false\n\nform.setSubmitting(true);\nform.submitting; // -> true\n\nform.setSubmitting(false);\nform.submitting; // -> false\n"})}),"\n",(0,o.jsx)(t.h2,{id:"useform-onsubmitpreventdefault-option",children:"useForm onSubmitPreventDefault option"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/form/use-form",children:"use-form"})," hook now supports ",(0,o.jsx)(t.code,{children:"onSubmitPreventDefault"})," option.\nThis option is useful if you want to integrate ",(0,o.jsx)(t.code,{children:"useForm"})," hook with ",(0,o.jsx)(t.a,{href:"https://github.com/mantinedev/mantine/issues/7142",children:"server actions"}),".\nBy default, ",(0,o.jsx)(t.code,{children:"event.preventDefault()"})," is called on the form ",(0,o.jsx)(t.code,{children:"onSubmit"})," handler.\nIf you want to change this behavior, you can pass ",(0,o.jsx)(t.code,{children:"onSubmitPreventDefault"})," option\nto ",(0,o.jsx)(t.code,{children:"useForm"})," hook. It can have the following values:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"always"})," (default) - always call ",(0,o.jsx)(t.code,{children:"event.preventDefault()"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"never"})," - never call ",(0,o.jsx)(t.code,{children:"event.preventDefault()"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"validation-failed"})," - call ",(0,o.jsx)(t.code,{children:"event.preventDefault()"})," only if validation failed"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  onSubmitPreventDefault: 'never',\n});\n"})}),"\n",(0,o.jsx)(t.h2,{id:"subtle-richtexteditor-variant",children:"Subtle RichTextEditor variant"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/x/tiptap",children:"RichTextEditor"})," component now supports ",(0,o.jsx)(t.code,{children:"subtle"})," variant:"]}),"\n",(0,o.jsx)(n,{data:m.f}),"\n",(0,o.jsx)(t.h2,{id:"onexittransitionend-and-onentertransitionend",children:"onExitTransitionEnd and onEnterTransitionEnd"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/core/modal",children:"Modal"})," and ",(0,o.jsx)(t.a,{href:"/core/drawer",children:"Drawer"})," components now support ",(0,o.jsx)(t.code,{children:"onExitTransitionEnd"})," and ",(0,o.jsx)(t.code,{children:"onEnterTransitionEnd"})," props,\nwhich can be used to run code after exit/enter transition is finished. For example, this is useful when you want to clear\ndata after modal is closed:"]}),"\n",(0,o.jsx)(n,{data:h.X}),"\n",(0,o.jsx)(t.h2,{id:"week-numbers-in-datepicker",children:"Week numbers in DatePicker"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/dates/date-picker",children:"DatePicker"})," and other components based on Calendar component now support ",(0,o.jsx)(t.code,{children:"withWeekNumbers"})," prop to display week numbers:"]}),"\n",(0,o.jsx)(n,{data:p.v}),"\n",(0,o.jsx)(t.h2,{id:"new-demo-barchart-with-overlay",children:"New demo: BarChart with overlay"}),"\n",(0,o.jsx)(n,{data:x.L}),"\n",(0,o.jsx)(t.h2,{id:"variants-types-augmentation",children:"Variants types augmentation"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/styles/variants-sizes#custom-variants-types",children:"Custom variants"})," types augmentation guide was added to the documentation."]}),"\n",(0,o.jsxs)(t.p,{children:["Example of adding custom variant type to ",(0,o.jsx)(t.a,{href:"/core/button",children:"Button"})," component:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { ButtonVariant, MantineSize } from '@mantine/core';\n\ntype ExtendedButtonVariant = ButtonVariant | 'contrast' | 'radial-gradient';\n\ndeclare module '@mantine/core' {\n  export interface ButtonProps {\n    variant?: ExtendedButtonVariant;\n  }\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"help-center-updates",children:"Help Center updates"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/templates-usage",children:"How to use Mantine template on GitHub?"})," and ",(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/submit-template",children:"How can I submit a template to Mantine documentation?"})," pages were moved from the documentation to Help Center"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/how-that-thing-is-done",children:"How that thing is done on mantine.dev website?"})," question"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/ten-shades-per-color",children:"Why is it required to have 10 shades per color?"})," question"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/color-scheme-flickering",children:"Why I see color scheme flickering on page load?"})," question"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/portals-testing",children:"How can I test Modal/Drawer/Popover components?"})," question"]}),"\n"]})]})}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(v,{...e,children:(0,o.jsx)(j,{...e})})}function T(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},33857:(e,t,n)=>{"use strict";n.d(t,{v:()=>a});var o=n(6029),r=n(55223);let a={type:"code",centered:!0,component:function(){return(0,o.jsx)(r.l,{withWeekNumbers:!0})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker withWeekNumbers />;
}
`}},39878:(e,t,n)=>{"use strict";n.d(t,{I:()=>i});var o=n(55729),r=n(38744);let a={min:-1/0,max:1/0};function i(e=0,t){let{min:n,max:s}={...a,...t},[l,d]=(0,o.useState)((0,r.q)(e,n,s)),c=(0,o.useCallback)(()=>d(e=>(0,r.q)(e+1,n,s)),[n,s]),u=(0,o.useCallback)(()=>d(e=>(0,r.q)(e-1,n,s)),[n,s]);return[l,{increment:c,decrement:u,set:(0,o.useCallback)(e=>d((0,r.q)(e,n,s)),[n,s]),reset:(0,o.useCallback)(()=>d((0,r.q)(e,n,s)),[e,n,s])}]}},49957:(e,t,n)=>{"use strict";n.d(t,{B:()=>u});var o=n(6029),r=n(55729),a=n(72139),i=n(45208),s=n(61087),l=n(38774),d=n(57414),c=n(69329);let u={type:"code",component:function(){let e=(0,c.m)({mode:"uncontrolled",initialValues:{name:"John"}}),[t,n]=(0,r.useState)(!1),u=async e=>{await new Promise(t=>setTimeout(()=>t(e),3e3)),n(!0)};return t?(0,o.jsxs)(a.B,{children:[(0,o.jsx)(i.E,{children:"Form submitted!"}),(0,o.jsx)(s.$,{onClick:()=>n(!1),children:"Reset to initial state"})]}):(0,o.jsxs)("form",{onSubmit:e.onSubmit(u),children:[(0,o.jsx)(l.k,{withAsterisk:!0,label:"Name",placeholder:"Your name",disabled:e.submitting,...e.getInputProps("name")},e.key("name")),(0,o.jsx)(d.Y,{justify:"flex-end",mt:"md",children:(0,o.jsx)(s.$,{type:"submit",loading:e.submitting,children:"Submit"})})]})},code:`
import { useState } from 'react';
import { Button, Group, Stack, Text, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

const asyncSubmit = (values: any) =>
  new Promise((resolve) => setTimeout(() => resolve(values), 3000));

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { name: 'John' },
  });

  const [completed, setCompleted] = useState(false);

  const handleSubmit = async (values: typeof form.values) => {
    await asyncSubmit(values);
    setCompleted(true);
  };

  if (completed) {
    return (
      <Stack>
        <Text>Form submitted!</Text>
        <Button onClick={() => setCompleted(false)}>Reset to initial state</Button>
      </Stack>
    );
  }

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <TextInput
        withAsterisk
        label="Name"
        placeholder="Your name"
        key={form.key('name')}
        disabled={form.submitting}
        {...form.getInputProps('name')}
      />

      <Group justify="flex-end" mt="md">
        <Button type="submit" loading={form.submitting}>
          Submit
        </Button>
      </Group>
    </form>
  );
}
`,maxWidth:340,centered:!0}},54180:(e,t,n)=>{"use strict";n.d(t,{k:()=>s});var o=n(74312),r=n(55729),a=n(25356);function i(e,t){let n=[...t].sort((e,t)=>o(e).isAfter(o(t))?1:-1);return o(n[0]).startOf("day").subtract(1,"ms").isBefore(e)&&o(n[1]).endOf("day").add(1,"ms").isAfter(e)}function s({type:e,level:t,value:n,defaultValue:s,onChange:l,allowSingleDateInRange:d,allowDeselect:c,onMouseLeave:u}){let[m,h]=(0,a.w)({type:e,value:n,defaultValue:s,onChange:l}),[p,x]=(0,r.useState)("range"===e&&m[0]&&!m[1]?m[0]:null),[f,b]=(0,r.useState)(null),v="range"===e?e=>{u?.(e),b(null)}:u,j="range"===e&&p?b:()=>{};return(0,r.useEffect)(()=>{if("range"===e)if(m[0]&&!m[1])x(m[0]);else{let e=null==m[0]&&null==m[1],t=null!=m[0]&&null!=m[1];(e||t)&&(x(null),b(null))}},[m]),{onDateChange:n=>{if("range"===e){if(p&&!m[1]){if(o(n).isSame(p,t)&&!d){x(null),b(null),h([null,null]);return}let e=[n,p];e.sort((e,t)=>o(e).isAfter(o(t))?1:-1),h(e),b(null),x(null);return}if(m[0]&&!m[1]&&o(n).isSame(m[0],t)&&!d){x(null),b(null),h([null,null]);return}h([n,null]),b(null),x(n);return}if("multiple"===e)return void(m.some(e=>o(e).isSame(n,t))?h(m.filter(e=>!o(e).isSame(n,t))):h([...m,n]));m&&c&&o(n).isSame(m,t)?h(null):h(n)},onRootMouseLeave:v,onHoveredDateChange:j,getControlProps:n=>{if("range"===e)return{selected:m.some(e=>e&&o(e).isSame(n,t)),inRange:p&&f?i(n,[f,p]):!!m[0]&&!!m[1]&&i(n,m),firstInRange:!!m[0]&&!!o(n).isSame(m[0],t)&&!(f&&o(f).isBefore(m[0])),lastInRange:m[1]?o(n).isSame(m[1],t):!!m[0]&&!!f&&o(f).isBefore(m[0])&&o(n).isSame(m[0],t),"data-autofocus":!!m[0]&&o(m[0]).isSame(n,t)||void 0};if("multiple"===e)return{selected:m.some(e=>e&&o(e).isSame(n,t)),"data-autofocus":!!m[0]&&o(m[0]).isSame(n,t)||void 0};let r=o(m).isSame(n,t);return{selected:r,"data-autofocus":r||void 0}},_value:m,setValue:h}}},55223:(e,t,n)=>{"use strict";n.d(t,{l:()=>T});var o=n(6029),r=n(74312),a=n(55729),i=n(33987),s=n(14163),l=n(8411),d=n(38919),c=n(15583),u=n(38757),m=n(17976),h=n(76320),p=n(54180),x=n(97164),f=n(85493),b=n(45085),v={datePickerRoot:"m_765a40cf",presetsList:"m_d6a681e1",presetButton:"m_acd30b22"};let j=(0,i.V)((e,{size:t})=>({datePickerRoot:{"--preset-font-size":(0,s.ny)(t)}})),g={type:"default",defaultLevel:"month",numberOfColumns:1,size:"sm"},T=(0,l.P9)((e,t)=>{let n=(0,d.Y)("DatePicker",g,e),{allowDeselect:i,allowSingleDateInRange:s,value:l,defaultValue:T,onChange:y,onMouseLeave:w,classNames:S,styles:k,__staticSelector:C,__onDayClick:E,__onDayMouseEnter:D,__onPresetSelect:B,__stopPropagation:P,presets:I,className:M,style:N,unstyled:R,size:X,vars:_,attributes:A,...G}=n,{calendarProps:L,others:F}=(0,f.q)(G),O=(0,a.useRef)(null),q=(0,a.useRef)(null),H=(0,c.I)({name:C||"DatePicker",classes:v,props:n,className:M,style:N,classNames:S,styles:k,unstyled:R,attributes:A,rootSelector:I?"datePickerRoot":void 0,varsResolver:j,vars:_}),{onDateChange:z,onRootMouseLeave:V,onHoveredDateChange:W,getControlProps:Y,_value:U,setValue:K}=(0,p.k)({type:F.type,level:"day",allowDeselect:i,allowSingleDateInRange:s,value:l,defaultValue:T,onChange:y,onMouseLeave:w}),{resolvedClassNames:$,resolvedStyles:Q}=(0,u.Y)({classNames:S,styles:k,props:n}),J=(0,o.jsx)(x.V,{ref:t,classNames:$,styles:Q,__staticSelector:C||"DatePicker",onMouseLeave:V,size:X,...L,...!I?F:{},__stopPropagation:P,__setDateRef:O,__setLevelRef:q,minLevel:L.minLevel||"month",__onDayMouseEnter:(e,t)=>{W(t),D?.(e,t)},__onDayClick:(e,t)=>{z(t),E?.(e,t)},getDayProps:e=>({...Y(e),...L.getDayProps?.(e)}),getMonthControlProps:e=>({selected:"string"==typeof U&&(0,b.t)(e,U),...L.getMonthControlProps?.(e)}),getYearControlProps:e=>({selected:"string"==typeof U&&r(e).isSame(U,"year"),...L.getYearControlProps?.(e)}),hideOutsideDates:L.hideOutsideDates??1!==L.numberOfColumns,...!I?{className:M,style:N,attributes:A}:{}});if(!I)return J;let Z=I.map((e,t)=>(0,o.jsx)(m.N,{...H("presetButton"),onClick:()=>(e=>{let t=Array.isArray(e)?e[0]:e;void 0!==t&&(O.current?.(t),q.current?.("month"),B?B(t):K(e))})(e.value),onMouseDown:e=>e.preventDefault(),"data-mantine-stop-propagation":P||void 0,children:e.label},t));return(0,o.jsxs)(h.a,{...H("datePickerRoot"),size:X,...F,children:[(0,o.jsx)("div",{...H("presetsList"),children:Z}),J]})});T.classes=x.V.classes,T.displayName="@mantine/dates/DatePicker"},56302:(e,t,n)=>{"use strict";n.d(t,{R:()=>i,i:()=>a});var o=n(55729),r=n(38744);function a(e,t){var n,o;let a=(0,r.q)(e,0,360),i=Math.ceil(a/t),s=Math.round(a/t);return n=i>=a/t?i*t==360?0:i*t:s*t,o=t.toString().split(".")[1]?.length||0,parseFloat(n.toFixed(o))}function i(e,{step:t=.01,onChangeEnd:n,onScrubStart:r,onScrubEnd:s}={}){let l=(0,o.useRef)(!1),[d,c]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{l.current=!0},[]),{ref:(0,o.useCallback)(o=>{let i=(r,i=!1)=>{if(o){o.style.userSelect="none";let s=a(function(e,t){let n=function(e){let t=e.getBoundingClientRect();return[t.left+t.width/2,t.top+t.height/2]}(t);return 360-(180/Math.PI*Math.atan2(e[0]-n[0],e[1]-n[1])+180)}([r.clientX,r.clientY],o),t||1);e(s),i&&n?.(s)}},l=()=>{r?.(),c(!0),document.addEventListener("mousemove",m,!1),document.addEventListener("mouseup",h,!1),document.addEventListener("touchmove",p,{passive:!1}),document.addEventListener("touchend",x,!1)},d=()=>{s?.(),c(!1),document.removeEventListener("mousemove",m,!1),document.removeEventListener("mouseup",h,!1),document.removeEventListener("touchmove",p,!1),document.removeEventListener("touchend",x,!1)},u=e=>{l(),i(e)},m=e=>{i(e)},h=e=>{i(e,!0),d()},p=e=>{e.preventDefault(),i(e.touches[0])},x=e=>{i(e.changedTouches[0],!0),d()},f=e=>{e.preventDefault(),l(),i(e.touches[0])};return o?.addEventListener("mousedown",u),o?.addEventListener("touchstart",f,{passive:!1}),()=>{o&&(o.removeEventListener("mousedown",u),o.removeEventListener("touchstart",f))}},[e]),active:d}}},60140:(e,t,n)=>{"use strict";n.d(t,{P:()=>l});var o=n(6029),r=n(55729),a=n(76320),i=n(56302),s={root:"m_7cf02604",value:"m_2146908f",thumb:"m_212db0f4"};let l={type:"code",component:function(){let[e,t]=(0,r.useState)(115),{ref:n}=(0,i.R)(t);return(0,o.jsxs)(a.a,{className:s.root,ref:n,style:{"--angle":`${e}deg`},children:[(0,o.jsxs)("div",{className:s.value,children:[e,"\xb0"]}),(0,o.jsx)("div",{className:s.thumb})]})},code:[{fileName:"Demo.tsx",code:`
import { useState } from 'react';
import { Box } from '@mantine/core';
import { useRadialMove } from '@mantine/hooks';
import classes from './Demo.module.css';

function Demo() {
  const [value, setValue] = useState(115);
  const { ref } = useRadialMove(setValue);

  return (
    <Box className={classes.root} ref={ref} style={{ '--angle': \`\${value}deg\` }}>
      <div className={classes.value}>{value}\xb0</div>
      <div className={classes.thumb} />
    </Box>
  );
}
`,language:"tsx"},{fileName:"Demo.module.css",code:`.root {
  position: relative;
  width: 160px;
  height: 160px;
  border-radius: 160px;
  display: flex;
  align-items: center;
  justify-content: center;

  --empty-color: light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-6));
  --filled-color: light-dark(var(--mantine-color-blue-6), var(--mantine-color-blue-8));

  background-image: conic-gradient(
    var(--filled-color) 0deg,
    var(--filled-color) var(--angle, 0deg),
    var(--empty-color) var(--angle, 0deg)
  );
}

.value {
  background-color: var(--mantine-color-body);
  width: 132px;
  height: 132px;
  border-radius: 132px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.thumb {
  position: absolute;
  width: 14px;
  height: 160px;
  transform: rotate(var(--angle, 0deg));

  &::before {
    content: '';
    position: absolute;
    width: 14px;
    height: 14px;
    background-color: light-dark(var(--mantine-color-white), var(--filled-color));
    border: 2px solid light-dark(var(--filled-color), var(--mantine-color-white));
    border-radius: 50%;
    left: 50%;
    transform: translateX(-50%);
  }
}`,language:"scss"}],centered:!0}},60821:(e,t,n)=>{"use strict";n.d(t,{h:()=>l});var o=n(6029),r=n(23474),a=n(58333),i=n(44572),s=n(39878);let l={type:"code",component:function(){let[e,{increment:t,decrement:n}]=(0,s.I)(135,{min:0});return(0,o.jsxs)(i.M.Group,{children:[(0,o.jsx)(i.M,{variant:"default",size:"lg",radius:"md",onClick:n,children:(0,o.jsx)(r.A,{color:"var(--mantine-color-red-text)"})}),(0,o.jsx)(i.M.GroupSection,{variant:"default",size:"lg",bg:"var(--mantine-color-body)",miw:60,children:e}),(0,o.jsx)(i.M,{variant:"default",size:"lg",radius:"md",onClick:t,children:(0,o.jsx)(a.A,{color:"var(--mantine-color-teal-text)"})})]})},code:`
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { ActionIcon } from '@mantine/core';
import { useCounter } from '@mantine/hooks';

function Demo() {
  const [value, { increment, decrement }] = useCounter(135, { min: 0 });

  return (
    <ActionIcon.Group>
      <ActionIcon variant="default" size="lg" radius="md" onClick={decrement}>
        <IconChevronDown color="var(--mantine-color-red-text)" />
      </ActionIcon>
      <ActionIcon.GroupSection variant="default" size="lg" bg="var(--mantine-color-body)" miw={60}>
        {value}
      </ActionIcon.GroupSection>
      <ActionIcon variant="default" size="lg" radius="md" onClick={increment}>
        <IconChevronUp color="var(--mantine-color-teal-text)" />
      </ActionIcon>
    </ActionIcon.Group>
  );
}
`,centered:!0}},67221:(e,t,n)=>{"use strict";n.d(t,{V:()=>a});var o=n(6029),r=n(19577);let a={type:"code",code:`
import { Table } from '@mantine/core';

export function Demo() {
  return (
    <Table variant="vertical" layout="fixed" withTableBorder>
      <Table.Tbody>
        <Table.Tr>
          <Table.Th w={160}>Epic name</Table.Th>
          <Table.Td>7.x migration</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Status</Table.Th>
          <Table.Td>Open</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Total issues</Table.Th>
          <Table.Td>135</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Total story points</Table.Th>
          <Table.Td>874</Table.Td>
        </Table.Tr>

        <Table.Tr>
          <Table.Th>Last updated at</Table.Th>
          <Table.Td>September 26, 2024 17:41:26</Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
}
`,component:function(){return(0,o.jsx)(r.X,{variant:"vertical",layout:"fixed",withTableBorder:!0,children:(0,o.jsxs)(r.X.Tbody,{children:[(0,o.jsxs)(r.X.Tr,{children:[(0,o.jsx)(r.X.Th,{w:160,children:"Epic name"}),(0,o.jsx)(r.X.Td,{children:"7.x migration"})]}),(0,o.jsxs)(r.X.Tr,{children:[(0,o.jsx)(r.X.Th,{children:"Status"}),(0,o.jsx)(r.X.Td,{children:"Open"})]}),(0,o.jsxs)(r.X.Tr,{children:[(0,o.jsx)(r.X.Th,{children:"Total issues"}),(0,o.jsx)(r.X.Td,{children:"135"})]}),(0,o.jsxs)(r.X.Tr,{children:[(0,o.jsx)(r.X.Th,{children:"Total story points"}),(0,o.jsx)(r.X.Td,{children:"874"})]}),(0,o.jsxs)(r.X.Tr,{children:[(0,o.jsx)(r.X.Th,{children:"Last updated at"}),(0,o.jsx)(r.X.Td,{children:"September 26, 2024 17:41:26"})]})]})})}}},68335:(e,t,n)=>{"use strict";n.d(t,{j:()=>s});var o=n(6029),r=n(19577),a=n(23926);let i=[{product:"Apples",unitsSold:0x83fd3be2},{product:"Oranges",unitsSold:0x25314e33b},{product:"Bananas",unitsSold:0x499602d2},{product:"Pineapples",unitsSold:994881e4},{product:"Pears",unitsSold:0x250195167}],s={type:"configurator",component:function(e){let t=i.map(e=>(0,o.jsxs)(r.X.Tr,{children:[(0,o.jsx)(r.X.Td,{children:e.product}),(0,o.jsx)(r.X.Td,{children:(0,o.jsx)(a.K,{value:e.unitsSold,thousandSeparator:!0})})]},e.product));return(0,o.jsxs)(r.X,{...e,children:[(0,o.jsx)(r.X.Thead,{children:(0,o.jsxs)(r.X.Tr,{children:[(0,o.jsx)(r.X.Th,{children:"Product"}),(0,o.jsx)(r.X.Th,{children:"Units sold"})]})}),(0,o.jsx)(r.X.Tbody,{children:t})]})},code:`
import { NumberFormatter, Table } from '@mantine/core';

const data = [
  { product: 'Apples', unitsSold: 2214411234 },
  { product: 'Oranges', unitsSold: 9983812411 },
  { product: 'Bananas', unitsSold: 1234567890 },
  { product: 'Pineapples', unitsSold: 9948810000 },
  { product: 'Pears', unitsSold: 9933771111 },
];

function Demo() {
  const rows = data.map((item) => (
    <Table.Tr key={item.product}>
      <Table.Td>{item.product}</Table.Td>
      <Table.Td>
        <NumberFormatter value={item.unitsSold} thousandSeparator />
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table{{props}}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Product</Table.Th>
          <Table.Th>Units sold</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
`,controls:[{type:"boolean",prop:"tabularNums",initialValue:!0,libraryValue:!1}]}},70863:(e,t,n)=>{"use strict";n.d(t,{X:()=>d});var o=n(6029),r=n(55729),a=n(48195),i=n(57414),s=n(61087),l=n(66438);let d={type:"code",code:`
import { useState } from 'react';
import { Button, Group, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

function Demo() {
  const [firstOpened, firstHandlers] = useDisclosure(false);
  const [secondOpened, secondHandlers] = useDisclosure(false);
  const [modalData, setModalData] = useState({
    title: '',
    message: '',
  });

  return (
    <>
      <Modal
        opened={firstOpened}
        onClose={() => {
          firstHandlers.close();
          setModalData({ title: '', message: '' });
        }}
        title={modalData.title}
      >
        {modalData.message}
      </Modal>
      <Modal
        opened={secondOpened}
        onClose={secondHandlers.close}
        onExitTransitionEnd={() => setModalData({ title: '', message: '' })}
        title={modalData.title}
      >
        {modalData.message}
      </Modal>

      <Group>
        <Button
          onClick={() => {
            firstHandlers.open();
            setModalData({ title: 'Edit your profile', message: 'Imagine a form here' });
          }}
        >
          Clear data in onClose
        </Button>

        <Button
          onClick={() => {
            secondHandlers.open();
            setModalData({ title: 'Edit your profile', message: 'Imagine a form here' });
          }}
        >
          Clear data in onExitTransitionEnd
        </Button>
      </Group>
    </>
  );
}
`,centered:!0,component:function(){let[e,t]=(0,l.j)(!1),[n,d]=(0,l.j)(!1),[c,u]=(0,r.useState)({title:"",message:""});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.a,{opened:e,onClose:()=>{t.close(),u({title:"",message:""})},transitionProps:{duration:300,exitDuration:1e3,transition:"fade-down"},title:c.title,children:c.message}),(0,o.jsx)(a.a,{opened:n,onClose:d.close,transitionProps:{duration:300,exitDuration:1e3,transition:"fade-down"},onExitTransitionEnd:()=>u({title:"",message:""}),title:c.title,children:c.message}),(0,o.jsxs)(i.Y,{children:[(0,o.jsx)(s.$,{onClick:()=>{t.open(),u({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onClose"}),(0,o.jsx)(s.$,{onClick:()=>{d.open(),u({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onExitTransitionEnd"})]})]})},defaultExpanded:!1}},84919:(e,t,n)=>{"use strict";n.d(t,{f:()=>l});var o=n(6029),r=n(84548),a=n(70649),i=n(72160),s=n(62421);let l={type:"code",component:function(){let e=(0,a.hG)({immediatelyRender:!1,shouldRerenderOnTransaction:!0,extensions:[i.A,r.Ay],content:"<p>Subtle rich text editor variant</p>"});return(0,o.jsxs)(s.d,{editor:e,variant:"subtle",children:[(0,o.jsx)(s.d.Toolbar,{sticky:!0,stickyOffset:"var(--docs-header-height)",children:(0,o.jsxs)(s.d.ControlsGroup,{children:[(0,o.jsx)(s.d.Bold,{}),(0,o.jsx)(s.d.Italic,{}),(0,o.jsx)(s.d.Underline,{}),(0,o.jsx)(s.d.Strikethrough,{}),(0,o.jsx)(s.d.ClearFormatting,{}),(0,o.jsx)(s.d.Highlight,{}),(0,o.jsx)(s.d.Code,{})]})}),(0,o.jsx)(s.d.Content,{})]})},code:`
import Highlight from '@tiptap/extension-highlight';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';

const content = '<p>Subtle rich text editor variant</p>';

function Demo() {
  const editor = useEditor({
    shouldRerenderOnTransaction: true,
    extensions: [StarterKit, Highlight],
    content,
  });

  return (
    <RichTextEditor editor={editor} variant="subtle">
      <RichTextEditor.Toolbar sticky stickyOffset="var(--docs-header-height)">
        <RichTextEditor.ControlsGroup>
          <RichTextEditor.Bold />
          <RichTextEditor.Italic />
          <RichTextEditor.Underline />
          <RichTextEditor.Strikethrough />
          <RichTextEditor.ClearFormatting />
          <RichTextEditor.Highlight />
          <RichTextEditor.Code />
        </RichTextEditor.ControlsGroup>
      </RichTextEditor.Toolbar>

      <RichTextEditor.Content />
    </RichTextEditor>
  );
}
`}},85493:(e,t,n)=>{"use strict";function o(e){let{maxLevel:t,minLevel:n,defaultLevel:o,level:r,onLevelChange:a,nextIcon:i,previousIcon:s,date:l,defaultDate:d,onDateChange:c,numberOfColumns:u,columnsToScroll:m,ariaLabels:h,nextLabel:p,previousLabel:x,onYearSelect:f,onMonthSelect:b,onYearMouseEnter:v,onMonthMouseEnter:j,onNextMonth:g,onPreviousMonth:T,onNextYear:y,onPreviousYear:w,onNextDecade:S,onPreviousDecade:k,withCellSpacing:C,highlightToday:E,__updateDateOnYearSelect:D,__updateDateOnMonthSelect:B,__setDateRef:P,__setLevelRef:I,withWeekNumbers:M,headerControlsOrder:N,firstDayOfWeek:R,weekdayFormat:X,weekendDays:_,getDayProps:A,excludeDate:G,renderDay:L,hideOutsideDates:F,hideWeekdays:O,getDayAriaLabel:q,monthLabelFormat:H,monthsListFormat:z,getMonthControlProps:V,yearLabelFormat:W,yearsListFormat:Y,getYearControlProps:U,decadeLabelFormat:K,allowSingleDateInRange:$,allowDeselect:Q,minDate:J,maxDate:Z,locale:ee,...et}=e;return{calendarProps:{maxLevel:t,minLevel:n,defaultLevel:o,level:r,onLevelChange:a,nextIcon:i,previousIcon:s,date:l,defaultDate:d,onDateChange:c,numberOfColumns:u,columnsToScroll:m,ariaLabels:h,nextLabel:p,previousLabel:x,onYearSelect:f,onMonthSelect:b,onYearMouseEnter:v,onMonthMouseEnter:j,onNextMonth:g,onPreviousMonth:T,onNextYear:y,onPreviousYear:w,onNextDecade:S,onPreviousDecade:k,withCellSpacing:C,highlightToday:E,__updateDateOnYearSelect:D,__updateDateOnMonthSelect:B,__setDateRef:P,withWeekNumbers:M,headerControlsOrder:N,firstDayOfWeek:R,weekdayFormat:X,weekendDays:_,getDayProps:A,excludeDate:G,renderDay:L,hideOutsideDates:F,hideWeekdays:O,getDayAriaLabel:q,monthLabelFormat:H,monthsListFormat:z,getMonthControlProps:V,yearLabelFormat:W,yearsListFormat:Y,getYearControlProps:U,decadeLabelFormat:K,allowSingleDateInRange:$,allowDeselect:Q,minDate:J,maxDate:Z,locale:ee},others:et}}n.d(t,{q:()=>o})},92123:(e,t,n)=>{"use strict";n.d(t,{z:()=>s});var o=n(6029),r=n(61087),a=n(45208),i=n(87167);let s={type:"code",centered:!0,component:function(){return(0,o.jsx)(r.$,{onClick:()=>{let e=i.jQ.open({title:"Initial Modal Title",children:(0,o.jsx)(a.E,{size:"sm",children:"This text will update after 2 seconds."})});setTimeout(()=>{i.jQ.updateModal({modalId:e,title:"Updated Modal Title",children:(0,o.jsx)(a.E,{size:"sm",children:"This is the updated content of the modal."})})},2e3)},children:"Open updating modal"})},code:`
import { Button } from '@mantine/core';
import { modals } from '@mantine/modals';

function Demo() {
  return (
    <Button
      onClick={() => {
        const modalId = modals.open({
          title: 'Initial Modal Title',
          children: <Text>This text will update in 2 seconds.</Text>,
        });

        setTimeout(() => {
          modals.updateModal({
            modalId,
            title: 'Updated Modal Title',
            children: (
              <Text size="sm" c="dimmed">
                This is the updated content of the modal.
              </Text>
            ),
          });
        }, 2000);
      }}
    >
      Open updating modal
    </Button>
  );
}
`}}},e=>{e.O(0,[36010,38635,78213,29040,60454,2027,32777,21475,38547,69329,97164,1490,62421,90636,46593,38792],()=>e(e.s=18605)),_N_E=e.O()}]);