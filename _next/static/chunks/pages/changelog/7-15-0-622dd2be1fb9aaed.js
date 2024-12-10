(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[42085],{14190:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/changelog/7-15-0",function(){return n(89933)}])},89933:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y}});var o=n(52322),r=n(45392),a=n(39629),i=n(31079),s=n(47984),l=n(14015),d=n(85749),c=n(31463),u=n(34738),m=n(69792),h=n(68822),p=n(62767),f=n(22231),x=n(35376),b=n(24725),v=n(25071),j=n(15019);let T=(0,v.A)(j.us.Changelog7150);function g(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"support-mantine-development",children:"Support Mantine development"}),"\n",(0,o.jsxs)(t.p,{children:["You can now sponsor Mantine development with ",(0,o.jsx)(t.a,{href:"https://opencollective.com/mantinedev",children:"OpenCollective"}),".\nAll funds will be used to improve Mantine and create new features and components."]}),"\n",(0,o.jsx)(a.z,{rightSection:(0,o.jsx)(i.Z,{size:22,color:"var(--mantine-color-red-7)"}),size:"lg",miw:300,justify:"space-between",children:"Sponsor Mantine",variant:"default",radius:"md"}),"\n",(0,o.jsx)(t.h2,{id:"use-radial-move-hook",children:"use-radial-move hook"}),"\n",(0,o.jsxs)(t.p,{children:["New ",(0,o.jsx)(t.a,{href:"/hooks/use-radial-move",children:"use-radial-move"})," hook can be used to create custom radial sliders:"]}),"\n",(0,o.jsx)(n,{data:s.W}),"\n",(0,o.jsx)(t.h2,{id:"barchart-color-based-on-value",children:"BarChart color based on value"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/charts/bar-chart",children:"BarChart"})," component now supports ",(0,o.jsx)(t.code,{children:"getBarColor"})," prop to assign color based on value.\n",(0,o.jsx)(t.code,{children:"getBarColor"})," function is called with two arguments: value and series object. It should return a color\nstring (theme color reference or any valid CSS color value)."]}),"\n",(0,o.jsx)(n,{data:l.I}),"\n",(0,o.jsx)(t.h2,{id:"buttongroupsection-and-actionicongroupsection",children:"Button.GroupSection and ActionIcon.GroupSection"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"ActionIcon.GroupSection"})," and ",(0,o.jsx)(t.code,{children:"Button.GroupSection"})," are new components that\ncan be used in ",(0,o.jsx)(t.code,{children:"ActionIcon.Group"}),"/",(0,o.jsx)(t.code,{children:"Button.Group"})," to create sections that are\nnot ",(0,o.jsx)(t.code,{children:"ActionIcon"}),"/",(0,o.jsx)(t.code,{children:"Button"})," components:"]}),"\n",(0,o.jsx)(n,{data:d.S}),"\n",(0,o.jsx)(t.h2,{id:"table-vertical-variant",children:"Table vertical variant"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/core/table",children:"Table"})," component now support ",(0,o.jsx)(t.code,{children:'variant="vertical"'}),":"]}),"\n",(0,o.jsx)(n,{data:c.K}),"\n",(0,o.jsx)(t.h2,{id:"table-tabular-numbers",children:"Table tabular numbers"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/core/table",children:"Table"})," component now supports ",(0,o.jsx)(t.code,{children:"tabularNums"})," prop to render numbers in tabular style. It sets\n",(0,o.jsx)(t.code,{children:"font-variant-numeric: tabular-nums"})," which makes numbers to have equal width.\nThis is useful when you have columns with numbers and you want them to be aligned:"]}),"\n",(0,o.jsx)(n,{data:u.A}),"\n",(0,o.jsx)(t.h2,{id:"update-function-in-modals-manager",children:"Update function in modals manager"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/x/modals",children:"Modals manager"})," now supports ",(0,o.jsx)(t.code,{children:"modals.updateModal"})," and ",(0,o.jsx)(t.code,{children:"modals.updateContextModal"}),"\nfunction to update modal after it was opened:"]}),"\n",(0,o.jsx)(n,{data:m.o}),"\n",(0,o.jsx)(t.h2,{id:"useform-submitting-state",children:"useForm submitting state"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/form/use-form",children:"use-form"})," hook now supports ",(0,o.jsx)(t.code,{children:"form.submitting"})," field\nand ",(0,o.jsx)(t.code,{children:"form.setSubmitting"})," function to track form submission state."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"form.submitting"})," field will be set to ",(0,o.jsx)(t.code,{children:"true"})," if function passed to\n",(0,o.jsx)(t.code,{children:"form.onSubmit"})," returns a promise. After the promise is resolved or rejected,\n",(0,o.jsx)(t.code,{children:"form.submitting"})," will be set to ",(0,o.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,o.jsx)(n,{data:h.i}),"\n",(0,o.jsxs)(t.p,{children:["You can also manually set ",(0,o.jsx)(t.code,{children:"form.submitting"})," to ",(0,o.jsx)(t.code,{children:"true"})," or ",(0,o.jsx)(t.code,{children:"false"}),":"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({ mode: 'uncontrolled' });\nform.submitting; // -> false\n\nform.setSubmitting(true);\nform.submitting; // -> true\n\nform.setSubmitting(false);\nform.submitting; // -> false\n"})}),"\n",(0,o.jsx)(t.h2,{id:"useform-onsubmitpreventdefault-option",children:"useForm onSubmitPreventDefault option"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/form/use-form",children:"use-form"})," hook now supports ",(0,o.jsx)(t.code,{children:"onSubmitPreventDefault"})," option.\nThis option is useful if you want to integrate ",(0,o.jsx)(t.code,{children:"useForm"})," hook with ",(0,o.jsx)(t.a,{href:"https://github.com/mantinedev/mantine/issues/7142",children:"server actions"}),".\nBy default, ",(0,o.jsx)(t.code,{children:"event.preventDefault()"})," is called on the form ",(0,o.jsx)(t.code,{children:"onSubmit"})," handler.\nIf you want to change this behavior, you can pass ",(0,o.jsx)(t.code,{children:"onSubmitPreventDefault"})," option\nto ",(0,o.jsx)(t.code,{children:"useForm"})," hook. It can have the following values:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"always"})," (default) - always call ",(0,o.jsx)(t.code,{children:"event.preventDefault()"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"never"})," - never call ",(0,o.jsx)(t.code,{children:"event.preventDefault()"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.code,{children:"validation-failed"})," - call ",(0,o.jsx)(t.code,{children:"event.preventDefault()"})," only if validation failed"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  onSubmitPreventDefault: 'never',\n});\n"})}),"\n",(0,o.jsx)(t.h2,{id:"subtle-richtexteditor-variant",children:"Subtle RichTextEditor variant"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/x/tiptap",children:"RichTextEditor"})," component now supports ",(0,o.jsx)(t.code,{children:"subtle"})," variant:"]}),"\n",(0,o.jsx)(n,{data:p.Z}),"\n",(0,o.jsx)(t.h2,{id:"onexittransitionend-and-onentertransitionend",children:"onExitTransitionEnd and onEnterTransitionEnd"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/core/modal",children:"Modal"})," and ",(0,o.jsx)(t.a,{href:"/core/drawer",children:"Drawer"})," components now support ",(0,o.jsx)(t.code,{children:"onExitTransitionEnd"})," and ",(0,o.jsx)(t.code,{children:"onEnterTransitionEnd"})," props,\nwhich can be used to run code after exit/enter transition is finished. For example, this is useful when you want to clear\ndata after modal is closed:"]}),"\n",(0,o.jsx)(n,{data:f.l}),"\n",(0,o.jsx)(t.h2,{id:"week-numbers-in-datepicker",children:"Week numbers in DatePicker"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/dates/date-picker",children:"DatePicker"})," and other components based on Calendar component now support ",(0,o.jsx)(t.code,{children:"withWeekNumbers"})," prop to display week numbers:"]}),"\n",(0,o.jsx)(n,{data:x.P}),"\n",(0,o.jsx)(t.h2,{id:"new-demo-barchart-with-overlay",children:"New demo: BarChart with overlay"}),"\n",(0,o.jsx)(n,{data:b.I}),"\n",(0,o.jsx)(t.h2,{id:"variants-types-augmentation",children:"Variants types augmentation"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/styles/variants-sizes#custom-variants-types",children:"Custom variants"})," types augmentation guide was added to the documentation."]}),"\n",(0,o.jsxs)(t.p,{children:["Example of adding custom variant type to ",(0,o.jsx)(t.a,{href:"/core/button",children:"Button"})," component:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-tsx",children:"import { ButtonVariant, MantineSize } from '@mantine/core';\n\ntype ExtendedButtonVariant = ButtonVariant | 'contrast' | 'radial-gradient';\n\ndeclare module '@mantine/core' {\n  export interface ButtonProps {\n    variant?: ExtendedButtonVariant;\n  }\n}\n"})}),"\n",(0,o.jsx)(t.h2,{id:"help-center-updates",children:"Help Center updates"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/templates-usage",children:"How to use Mantine template on GitHub?"})," and ",(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/submit-template",children:"How can I submit a template to Mantine documentation?"})," pages were moved from the documentation to Help Center"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/how-that-thing-is-done",children:"How that thing is done on mantine.dev website?"})," question"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/ten-shades-per-color",children:"Why is it required to have 10 shades per color?"})," question"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/color-scheme-flickering",children:"Why I see color scheme flickering on page load?"})," question"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.a,{href:"https://help.mantine.dev/q/portals-testing",children:"How can I test Modal/Drawer/Popover components?"})," question"]}),"\n"]})]})}function y(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(T,{...e,children:(0,o.jsx)(g,{...e})})}},14015:function(e,t,n){"use strict";n.d(t,{I:function(){return i}});var o=n(52322),r=n(8132),a=n(9404);let i={type:"code",component:function(){return(0,o.jsx)(r.v,{h:300,data:a.aT,dataKey:"month",getBarColor:e=>e>700?"teal.8":"red.8",series:[{name:"Laptops",color:"gray.6"}]})},code:[{code:`
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
`,language:"tsx",fileName:"Demo.tsx"},{code:a.op,language:"tsx",fileName:"data.ts"}]}},24725:function(e,t,n){"use strict";n.d(t,{I:function(){return l}});var o=n(52322),r=n(8132),a=n(27780),i=n(9404),s={root:"m_661936e7",bar:"m_c97c716e"};let l={type:"code",component:function(){let e=(0,a.a)("(min-width: 48em)")?42:26,t=.5*e;return(0,o.jsx)(r.v,{h:300,data:i.pB,dataKey:"index",barChartProps:{barGap:-((e+t)/2)},barProps:n=>({barSize:"you"===n.name?e:t}),classNames:s,series:[{name:"you",color:"var(--you-bar-color)"},{name:"average",color:"var(--average-bar-color)"}]})},code:[{code:`
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
`,language:"scss",fileName:"Demo.module.css"},{code:i.fU,language:"tsx",fileName:"data.ts"}]}},85749:function(e,t,n){"use strict";n.d(t,{S:function(){return l}});var o=n(52322),r=n(92536),a=n(60188),i=n(15981),s=n(43647);let l={type:"code",component:function(){let[e,{increment:t,decrement:n}]=(0,s.C)(135,{min:0});return(0,o.jsxs)(i.A.Group,{children:[(0,o.jsx)(i.A,{variant:"default",size:"lg",radius:"md",onClick:n,children:(0,o.jsx)(r.Z,{color:"var(--mantine-color-red-text)"})}),(0,o.jsx)(i.A.GroupSection,{variant:"default",size:"lg",bg:"var(--mantine-color-body)",miw:60,children:e}),(0,o.jsx)(i.A,{variant:"default",size:"lg",radius:"md",onClick:t,children:(0,o.jsx)(a.Z,{color:"var(--mantine-color-teal-text)"})})]})},code:`
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
`,centered:!0}},22231:function(e,t,n){"use strict";n.d(t,{l:function(){return d}});var o=n(52322),r=n(2784),a=n(31946),i=n(93010),s=n(39629),l=n(3900);let d={type:"code",code:`
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
`,centered:!0,component:function(){let[e,t]=(0,l.q)(!1),[n,d]=(0,l.q)(!1),[c,u]=(0,r.useState)({title:"",message:""});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.u,{opened:e,onClose:()=>{t.close(),u({title:"",message:""})},transitionProps:{duration:300,exitDuration:1e3,transition:"fade-down"},title:c.title,children:c.message}),(0,o.jsx)(a.u,{opened:n,onClose:d.close,transitionProps:{duration:300,exitDuration:1e3,transition:"fade-down"},onExitTransitionEnd:()=>u({title:"",message:""}),title:c.title,children:c.message}),(0,o.jsxs)(i.Z,{children:[(0,o.jsx)(s.z,{onClick:()=>{t.open(),u({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onClose"}),(0,o.jsx)(s.z,{onClick:()=>{d.open(),u({title:"Edit your profile",message:"Imagine a form here"})},variant:"default",children:"Clear data in onExitTransitionEnd"})]})]})},defaultExpanded:!1}},34738:function(e,t,n){"use strict";n.d(t,{A:function(){return s}});var o=n(52322),r=n(96242),a=n(49934);let i=[{product:"Apples",unitsSold:2214411234},{product:"Oranges",unitsSold:9983812411},{product:"Bananas",unitsSold:1234567890},{product:"Pineapples",unitsSold:994881e4},{product:"Pears",unitsSold:9933771111}],s={type:"configurator",component:function(e){let t=i.map(e=>(0,o.jsxs)(r.i.Tr,{children:[(0,o.jsx)(r.i.Td,{children:e.product}),(0,o.jsx)(r.i.Td,{children:(0,o.jsx)(a.e,{value:e.unitsSold,thousandSeparator:!0})})]},e.product));return(0,o.jsxs)(r.i,{...e,children:[(0,o.jsx)(r.i.Thead,{children:(0,o.jsxs)(r.i.Tr,{children:[(0,o.jsx)(r.i.Th,{children:"Product"}),(0,o.jsx)(r.i.Th,{children:"Units sold"})]})}),(0,o.jsx)(r.i.Tbody,{children:t})]})},code:`
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
`,controls:[{type:"boolean",prop:"tabularNums",initialValue:!0,libraryValue:!1}]}},31463:function(e,t,n){"use strict";n.d(t,{K:function(){return a}});var o=n(52322),r=n(96242);let a={type:"code",code:`
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
`,component:function(){return(0,o.jsx)(r.i,{variant:"vertical",layout:"fixed",withTableBorder:!0,children:(0,o.jsxs)(r.i.Tbody,{children:[(0,o.jsxs)(r.i.Tr,{children:[(0,o.jsx)(r.i.Th,{w:160,children:"Epic name"}),(0,o.jsx)(r.i.Td,{children:"7.x migration"})]}),(0,o.jsxs)(r.i.Tr,{children:[(0,o.jsx)(r.i.Th,{children:"Status"}),(0,o.jsx)(r.i.Td,{children:"Open"})]}),(0,o.jsxs)(r.i.Tr,{children:[(0,o.jsx)(r.i.Th,{children:"Total issues"}),(0,o.jsx)(r.i.Td,{children:"135"})]}),(0,o.jsxs)(r.i.Tr,{children:[(0,o.jsx)(r.i.Th,{children:"Total story points"}),(0,o.jsx)(r.i.Td,{children:"874"})]}),(0,o.jsxs)(r.i.Tr,{children:[(0,o.jsx)(r.i.Th,{children:"Last updated at"}),(0,o.jsx)(r.i.Td,{children:"September 26, 2024 17:41:26"})]})]})})}}},35376:function(e,t,n){"use strict";n.d(t,{P:function(){return a}});var o=n(52322),r=n(95488);let a={type:"code",centered:!0,component:function(){return(0,o.jsx)(r.M,{withWeekNumbers:!0})},code:`
import { DatePicker } from '@mantine/dates';

function Demo() {
  return <DatePicker withWeekNumbers />;
}
`}},68822:function(e,t,n){"use strict";n.d(t,{i:function(){return m}});var o=n(52322),r=n(2784),a=n(65438),i=n(8582),s=n(39629),l=n(74770),d=n(93010),c=n(43092);let u=e=>new Promise(t=>setTimeout(()=>t(e),3e3)),m={type:"code",component:function(){let e=(0,c.c)({mode:"uncontrolled",initialValues:{name:"John"}}),[t,n]=(0,r.useState)(!1),m=async e=>{await u(e),n(!0)};return t?(0,o.jsxs)(a.K,{children:[(0,o.jsx)(i.x,{children:"Form submitted!"}),(0,o.jsx)(s.z,{onClick:()=>n(!1),children:"Reset to initial state"})]}):(0,o.jsxs)("form",{onSubmit:e.onSubmit(m),children:[(0,o.jsx)(l.o,{withAsterisk:!0,label:"Name",placeholder:"Your name",disabled:e.submitting,...e.getInputProps("name")},e.key("name")),(0,o.jsx)(d.Z,{justify:"flex-end",mt:"md",children:(0,o.jsx)(s.z,{type:"submit",loading:e.submitting,children:"Submit"})})]})},code:`
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
`,maxWidth:340,centered:!0}},47984:function(e,t,n){"use strict";n.d(t,{W:function(){return s}});var o=n(52322),r=n(2784),a=n(28559),i=n(28994);let s={type:"code",component:function(){let[e,t]=(0,r.useState)(115),{ref:n}=(0,i.M)(t);return(0,o.jsxs)(a.x,{className:"m_7cf02604",ref:n,style:{"--angle":`${e}deg`},children:[(0,o.jsxs)("div",{className:"m_2146908f",children:[e,"\xb0"]}),(0,o.jsx)("div",{className:"m_212db0f4"})]})},code:[{fileName:"Demo.tsx",code:`
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
}`,language:"scss"}],centered:!0}},69792:function(e,t,n){"use strict";n.d(t,{o:function(){return s}});var o=n(52322),r=n(39629),a=n(8582),i=n(2807);let s={type:"code",centered:!0,component:function(){return(0,o.jsx)(r.z,{onClick:()=>{let e=i.qk.open({title:"Initial Modal Title",children:(0,o.jsx)(a.x,{size:"sm",children:"This text will update after 2 seconds."})});setTimeout(()=>{i.qk.updateModal({modalId:e,title:"Updated Modal Title",children:(0,o.jsx)(a.x,{size:"sm",children:"This is the updated content of the modal."})})},2e3)},children:"Open updating modal"})},code:`
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
`}},62767:function(e,t,n){"use strict";n.d(t,{Z:function(){return d}});var o=n(52322),r=n(6776),a=n(39475),i=n(13635),s=n(31981),l=n(76124);let d={type:"code",component:function(){let e=(0,i.jE)({extensions:[s.Z,a.Z,r.ZP],content:"<p>Subtle rich text editor variant</p>"});return(0,o.jsxs)(l.L,{editor:e,variant:"subtle",children:[(0,o.jsx)(l.L.Toolbar,{sticky:!0,stickyOffset:60,children:(0,o.jsxs)(l.L.ControlsGroup,{children:[(0,o.jsx)(l.L.Bold,{}),(0,o.jsx)(l.L.Italic,{}),(0,o.jsx)(l.L.Underline,{}),(0,o.jsx)(l.L.Strikethrough,{}),(0,o.jsx)(l.L.ClearFormatting,{}),(0,o.jsx)(l.L.Highlight,{}),(0,o.jsx)(l.L.Code,{})]})}),(0,o.jsx)(l.L.Content,{})]})},code:`
import Highlight from '@tiptap/extension-highlight';
import Underline from '@tiptap/extension-underline';
import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { RichTextEditor } from '@mantine/tiptap';

const content = '<p>Subtle rich text editor variant</p>';

function Demo() {
  const editor = useEditor({
    extensions: [StarterKit, Underline, Highlight],
    content,
  });

  return (
    <RichTextEditor editor={editor} variant="subtle">
      <RichTextEditor.Toolbar sticky stickyOffset={60}>
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
`}},49934:function(e,t,n){"use strict";n.d(t,{e:function(){return s}});var o=n(52322),r=n(9462);n(2784);var a=n(38483);let i={};function s(e){let{value:t,defaultValue:n,...s}=(0,a.w)("NumberFormatter",i,e);return void 0===t?null:(0,o.jsx)(r.h3,{displayType:"text",value:t,...s})}s.extend=e=>e,s.displayName="@mantine/core/NumberFormatter"},95488:function(e,t,n){"use strict";n.d(t,{M:function(){return m}});var o=n(52322),r=n(82027),a=n(38483),i=n(51477),s=n(82083),l=n(46766);n(28879);var d=n(51235);n(2784);var c=n(1572);let u={type:"default",defaultLevel:"month",numberOfColumns:1},m=(0,r.d5)((e,t)=>{let n=(0,a.w)("DatePicker",u,e),{classNames:r,styles:m,vars:h,type:p,defaultValue:f,value:x,onChange:b,__staticSelector:v,getDayProps:j,allowSingleDateInRange:T,allowDeselect:g,onMouseLeave:y,numberOfColumns:w,hideOutsideDates:S,__onDayMouseEnter:k,__onDayClick:C,__timezoneApplied:D,...E}=n,{onDateChange:B,onRootMouseLeave:I,onHoveredDateChange:M,getControlProps:N}=(0,s.D)({type:p,level:"day",allowDeselect:g,allowSingleDateInRange:T,value:x,defaultValue:f,onChange:b,onMouseLeave:y,applyTimezone:!D}),{resolvedClassNames:P,resolvedStyles:L}=(0,i.h)({classNames:r,styles:m,props:n}),A=(0,l.e)();return(0,o.jsx)(c.f,{ref:t,minLevel:"month",classNames:P,styles:L,__staticSelector:v||"DatePicker",onMouseLeave:I,numberOfColumns:w,hideOutsideDates:S??1!==w,__onDayMouseEnter:(e,t)=>{M(t),k?.(e,t)},__onDayClick:(e,t)=>{B(t),C?.(e,t)},getDayProps:e=>({...N(e),...j?.(e)}),...E,date:(0,d.w)("add",E.date,A.getTimezone(),D),__timezoneApplied:!0})});m.classes=c.f.classes,m.displayName="@mantine/dates/DatePicker"},82083:function(e,t,n){"use strict";n.d(t,{D:function(){return s}});var o=n(28879),r=n(2784),a=n(93141);function i(e,t){let n=[...t].sort((e,t)=>e.getTime()-t.getTime());return o(n[0]).startOf("day").subtract(1,"ms").isBefore(e)&&o(n[1]).endOf("day").add(1,"ms").isAfter(e)}function s({type:e,level:t,value:n,defaultValue:s,onChange:l,allowSingleDateInRange:d,allowDeselect:c,onMouseLeave:u,applyTimezone:m=!0}){let[h,p]=(0,a.l)({type:e,value:n,defaultValue:s,onChange:l,applyTimezone:m}),[f,x]=(0,r.useState)("range"===e&&h[0]&&!h[1]?h[0]:null),[b,v]=(0,r.useState)(null),j=e=>f instanceof Date&&b instanceof Date?i(e,[b,f]):h[0]instanceof Date&&h[1]instanceof Date&&i(e,h),T="range"===e?e=>{u?.(e),v(null)}:u,g=e=>h[0]instanceof Date&&!!o(e).isSame(h[0],t)&&!(b&&o(b).isBefore(h[0])),y=e=>h[1]instanceof Date?o(e).isSame(h[1],t):h[0]instanceof Date&&!!b&&o(b).isBefore(h[0])&&o(e).isSame(h[0],t),w="range"===e&&f?v:()=>{};return(0,r.useEffect)(()=>{if("range"!==e)return;let t=null==h[0]&&null==h[1],n=null!=h[0]&&null!=h[1];(t||n)&&(x(null),v(null))},[h]),{onDateChange:n=>{if("range"===e){if(f instanceof Date&&!h[1]){if(o(n).isSame(f,t)&&!d){x(null),v(null),p([null,null]);return}let e=[n,f];e.sort((e,t)=>e.getTime()-t.getTime()),p(e),v(null),x(null);return}if(h[0]&&!h[1]&&o(n).isSame(h[0],t)&&!d){x(null),v(null),p([null,null]);return}p([n,null]),v(null),x(n);return}if("multiple"===e){h.some(e=>o(e).isSame(n,t))?p(h.filter(e=>!o(e).isSame(n,t))):p([...h,n]);return}h&&c&&o(n).isSame(h,t)?p(null):p(n)},onRootMouseLeave:T,onHoveredDateChange:w,getControlProps:n=>{if("range"===e)return{selected:h.some(e=>e&&o(e).isSame(n,t)),inRange:j(n),firstInRange:g(n),lastInRange:y(n),"data-autofocus":!!h[0]&&o(h[0]).isSame(n,t)||void 0};if("multiple"===e)return{selected:h.some(e=>e&&o(e).isSame(n,t)),"data-autofocus":!!h[0]&&o(h[0]).isSame(n,t)||void 0};let r=o(h).isSame(n,t);return{selected:r,"data-autofocus":r||void 0}},_value:h,setValue:p}}},43647:function(e,t,n){"use strict";n.d(t,{C:function(){return i}});var o=n(2784),r=n(82692);let a={min:-1/0,max:1/0};function i(e=0,t){let{min:n,max:i}={...a,...t},[s,l]=(0,o.useState)((0,r.u)(e,n,i));return[s,{increment:()=>l(e=>(0,r.u)(e+1,n,i)),decrement:()=>l(e=>(0,r.u)(e-1,n,i)),set:e=>l((0,r.u)(e,n,i)),reset:()=>l((0,r.u)(e,n,i))}]}},3900:function(e,t,n){"use strict";n.d(t,{q:function(){return r}});var o=n(2784);function r(e=!1,t){let{onOpen:n,onClose:r}=t||{},[a,i]=(0,o.useState)(e),s=(0,o.useCallback)(()=>{i(e=>e||(n?.(),!0))},[n]),l=(0,o.useCallback)(()=>{i(e=>e?(r?.(),!1):e)},[r]),d=(0,o.useCallback)(()=>{a?l():s()},[l,s,a]);return[a,{open:s,close:l,toggle:d}]}},28994:function(e,t,n){"use strict";n.d(t,{M:function(){return i},w:function(){return a}});var o=n(2784),r=n(82692);function a(e,t){var n,o;let a=(0,r.u)(e,0,360),i=Math.ceil(a/t);return n=i>=a/t?i*t==360?0:i*t:Math.round(a/t)*t,o=t.toString().split(".")[1]?.length||0,parseFloat(n.toFixed(o))}function i(e,{step:t=.01,onChangeEnd:n,onScrubStart:r,onScrubEnd:i}={}){let s=(0,o.useRef)(null),l=(0,o.useRef)(!1),[d,c]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{l.current=!0},[]),(0,o.useEffect)(()=>{let o=(o,r=!1)=>{if(s.current){s.current.style.userSelect="none";let i=a(function(e,t){let n=function(e){let t=e.getBoundingClientRect();return[t.left+t.width/2,t.top+t.height/2]}(t);return 360-(180/Math.PI*Math.atan2(e[0]-n[0],e[1]-n[1])+180)}([o.clientX,o.clientY],s.current),t||1);e(i),r&&n?.(i)}},l=()=>{r?.(),c(!0),document.addEventListener("mousemove",m,!1),document.addEventListener("mouseup",h,!1),document.addEventListener("touchmove",p,{passive:!1}),document.addEventListener("touchend",f,!1)},d=()=>{i?.(),c(!1),document.removeEventListener("mousemove",m,!1),document.removeEventListener("mouseup",h,!1),document.removeEventListener("touchmove",p,!1),document.removeEventListener("touchend",f,!1)},u=e=>{l(),o(e)},m=e=>{o(e)},h=e=>{o(e,!0),d()},p=e=>{e.preventDefault(),o(e.touches[0])},f=e=>{o(e.changedTouches[0],!0),d()},x=e=>{e.preventDefault(),l(),o(e.touches[0])};return s.current?.addEventListener("mousedown",u),s.current?.addEventListener("touchstart",x,{passive:!1}),()=>{s.current&&(s.current.removeEventListener("mousedown",u),s.current.removeEventListener("touchstart",x))}},[e]),{ref:s,active:d}}}},function(e){e.O(0,[53224,72812,75417,61177,5248,90160,9462,95607,80964,66748,11340,43092,1572,40296,76124,92888,49774,40179],function(){return e(e.s=14190)}),_N_E=e.O()}]);