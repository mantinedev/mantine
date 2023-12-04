(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9354],{600:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/input",function(){return n(30350)}])},30350:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ea}});var r=n(24246),o=n(71670),l=n(3916),i=n(30289),a=n(27378),p=n(42487),c=n(77481);let s=`
import { Input } from '@mantine/core';

function Demo() {
  return <Input{{props}} placeholder="Input component" />;
}
`,u={type:"configurator",component:function(e){return a.createElement(p.I,{placeholder:"Input component",...e})},code:s,centered:!0,maxWidth:340,controls:c.Mt};var d=n(96217),m=n(93693);let h=`
import { useState } from 'react';
import { Input, CloseButton } from '@mantine/core';
import { IconAt } from '@tabler/icons-react';

function Demo() {
  const [value, setValue] = useState('Clear me');
  return (
    <>
      <Input placeholder="Your email" leftSection={<IconAt size={16} />} />
      <Input
        placeholder="Clearable input"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        mt="md"
        rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => setValue('')}
            style={{ display: value ? undefined : 'none' }}
          />
        }
      />
    </>
  );
}
`,x={type:"code",component:function(){let[e,t]=(0,a.useState)("Clear me");return a.createElement(a.Fragment,null,a.createElement(p.I,{placeholder:"Your email",leftSection:a.createElement(m.Z,{size:16})}),a.createElement(p.I,{placeholder:"Clearable input",value:e,onChange:e=>t(e.currentTarget.value),rightSectionPointerEvents:"all",mt:"md",rightSection:a.createElement(d.P,{"aria-label":"Clear input",onClick:()=>t(""),style:{display:e?void 0:"none"}})}))},maxWidth:340,centered:!0,code:h};var I=n(62283);let f=`
import { Input } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <Input component="button" pointer>
        Button input
      </Input>

      <Input
        component="select"
        rightSection={<IconChevronDown size={14} stroke={1.5} />}
        pointer
        mt="md"
      >
        <option value="1">1</option>
        <option value="2">2</option>
      </Input>
    </>
  );
}
`,b={type:"code",component:function(){return a.createElement(a.Fragment,null,a.createElement(p.I,{component:"button",pointer:!0},"Button input"),a.createElement(p.I,{component:"select",rightSection:a.createElement(I.Z,{size:14,stroke:1.5}),pointer:!0,mt:"md"},a.createElement("option",{value:"1"},"1"),a.createElement("option",{value:"2"},"2")))},code:f};var j=n(62229);let y=`
import { Input } from '@mantine/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return <Input component={IMaskInput} mask="+7 (000) 000-00-00" placeholder="Your phone" />;
}
`,g={type:"code",component:function(){return a.createElement(p.I,{component:j.oc,mask:"+7 (000) 000-00-00",placeholder:"Your phone"})},maxWidth:340,centered:!0,code:y},v=`
import { Input } from '@mantine/core';

function Wrapper() {
  return (
    <Input.Wrapper{{props}}>
      <Input placeholder="Input inside Input.Wrapper" />
    </Input.Wrapper>
  );
}
`,E={type:"configurator",component:function(e){return a.createElement(p.I.Wrapper,{...e},a.createElement(p.I,{placeholder:"Input inside Input.Wrapper"}))},code:v,centered:!0,maxWidth:440,controls:c.nW};var w=n(7033);let W=`
import { TextInput } from '@mantine/core';

function Demo() {
  return (
    <>
      <TextInput
        label="Custom layout"
        placeholder="Custom layout"
        description="Description below the input"
        inputWrapperOrder={['label', 'error', 'input', 'description']}
      />
      <TextInput
        mt="xl"
        label="Custom layout"
        placeholder="Custom layout"
        description="Error and description are"
        error="both below the input"
        inputWrapperOrder={['label', 'input', 'description', 'error']}
      />
    </>
  );
}
`,T={type:"code",component:function(){return a.createElement(a.Fragment,null,a.createElement(w.o,{label:"Custom layout",placeholder:"Custom layout",description:"Description below the input",inputWrapperOrder:["label","error","input","description"]}),a.createElement(w.o,{mt:"md",label:"Custom layout",placeholder:"Custom layout",description:"Error and description are",error:"both below the input",inputWrapperOrder:["label","input","description","error"]}))},maxWidth:340,centered:!0,code:W};var S=n(99684);let k=`
import { useState } from 'react';
import { TextInput, Tooltip } from '@mantine/core';

function Demo() {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      label="TextInput with tooltip"
      description="Tooltip will be relative to the input"
      placeholder="Focus me to see tooltip"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      inputContainer={(children) => (
        <Tooltip label="Additional information" position="top-start" opened={focused}>
          {children}
        </Tooltip>
      )}
    />
  );
}
`,D={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,a.useState)(!1);return a.createElement(w.o,{label:"TextInput with tooltip",description:"Tooltip will be relative to the input",placeholder:"Focus me to see tooltip",onFocus:()=>t(!0),onBlur:()=>t(!1),inputContainer:t=>a.createElement(S.u,{label:"Additional information",position:"top-start",opened:e},t)})},code:k};var N=n(62144);let V=`
import { Input } from '@mantine/core';

function Demo() {
  return (
    <>
      <Input.Label required>Input label</Input.Label>
      <Input.Description>Input description</Input.Description>
      <Input.Error>Input error</Input.Error>
    </>
  );
}
`,C={type:"code",component:function(){return a.createElement(a.Fragment,null,a.createElement(p.I.Label,{required:!0},"Input label"),a.createElement(p.I.Description,null,"Input description"),a.createElement(p.I.Error,null,"Input error"))},code:V},A=`
import { Input } from '@mantine/core';

function Demo() {
  return (
    <Input component="button" pointer>
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </Input>
  );
}
`,P={type:"code",component:function(){return a.createElement(p.I,{component:"button",pointer:!0},a.createElement(p.I.Placeholder,null,"Placeholder content"))},maxWidth:340,centered:!0,code:A};var F=n(74369),M=n(2256),Y=n(28764);let q=`
import { TextInput, NativeSelect, MantineProvider, createTheme, Input } from '@mantine/core';

const theme = createTheme({
  components: {
    Input: Input.extend({
      defaultProps: {
        variant: 'filled',
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      defaultProps: {
        inputWrapperOrder: ['label', 'input', 'description', 'error'],
      },
    }),
  },
});

function Demo() {
  return (
    <MantineProvider theme={theme}>
      <TextInput
        label="Text input"
        placeholder="Text input"
        description="Description below the input"
      />

      <NativeSelect
        mt="md"
        label="Native select"
        placeholder="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
        description="Description below the input"
      />
    </MantineProvider>
  );
}
`,z=(0,F.j)({components:{Input:p.I.extend({defaultProps:{variant:"filled"}}),InputWrapper:p.I.Wrapper.extend({defaultProps:{inputWrapperOrder:["label","input","description","error"]}})}}),B={type:"code",component:function(){return a.createElement(M.M2,{theme:z},a.createElement(w.o,{label:"Text input",placeholder:"Text input",description:"Description below the input"}),a.createElement(Y.p,{mt:"md",label:"Native select",placeholder:"Native select",data:["React","Angular","Vue","Svelte"],description:"Description below the input"}))},centered:!0,maxWidth:340,code:q};var R={label:"m-8ccacaf5",input:"m-8ca6a3cb"};let _=`
import { TextInput, NativeSelect, MantineThemeProvider, createTheme, Input } from '@mantine/core';
import classes from './Demo.module.css';

const theme = createTheme({
  components: {
    Input: Input.extend({
      classNames: {
        input: classes.input,
      },
    }),

    InputWrapper: Input.Wrapper.extend({
      classNames: {
        label: classes.label,
      },
    }),
  },
});

function Demo() {
  return (
    <MantineThemeProvider theme={theme}>
      <TextInput label="Text input" placeholder="Text input" />

      <NativeSelect
        mt="md"
        label="Native select"
        placeholder="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </MantineThemeProvider>
  );
}
`,O=`
.label {
  background-color: var(--mantine-color-blue-light);
}

.input {
  border: rem(1px) solid var(--mantine-color-violet-filled);
}
`,L=(0,F.j)({components:{Input:p.I.extend({classNames:{input:R.input}}),InputWrapper:p.I.Wrapper.extend({classNames:{label:R.label}})}}),U={type:"code",component:function(){return a.createElement(M.M2,{theme:L},a.createElement(w.o,{label:"Text input",placeholder:"Text input"}),a.createElement(Y.p,{mt:"md",label:"Native select",placeholder:"Native select",data:["React","Angular","Vue","Svelte"]}))},centered:!0,maxWidth:340,code:[{fileName:"Demo.tsx",code:_,language:"tsx"},{fileName:"Demo.module.css",code:O,language:"scss"}]};var Z={input:"m-4ba3a790"};let X=`
import { Input, TextInput } from '@mantine/core';
import classes from './Demo.module.css';

function Demo() {
  return (
    <>
      <Input placeholder="Regular Input component" classNames={classes} />
      <TextInput
        placeholder="TextInput component"
        label="TextInput component"
        mt="md"
        classNames={classes}
      />
    </>
  );
}
`,G=`
.input {
  transition: none;

  &:focus-within {
    outline: rem(2px) solid var(--mantine-color-blue-filled);
    border-color: transparent;
  }
}
`,H={type:"code",component:function(){return a.createElement(a.Fragment,null,a.createElement(p.I,{placeholder:"Regular Input component",classNames:Z}),a.createElement(w.o,{placeholder:"TextInput component",label:"TextInput component",mt:"md",classNames:Z}))},maxWidth:340,centered:!0,code:[{fileName:"Demo.module.css",code:G,language:"scss"},{fileName:"Demo.tsx",code:X,language:"tsx"}]};var J=n(23163);let K=`
import { InputBase } from '@mantine/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return (
    <>
      <InputBase
        label="Your phone"
        component={IMaskInput}
        mask="+7 (000) 000-0000"
        placeholder="Your phone"
      />

      <InputBase label="Custom native select" component="select" mt="md">
        <option value="react">React</option>
        <option value="react">Angular</option>
        <option value="svelte">Svelte</option>
      </InputBase>
    </>
  );
}
`,Q={type:"code",component:function(){return a.createElement(a.Fragment,null,a.createElement(J.M,{label:"Your phone",component:j.oc,mask:"+7 (000) 000-0000",placeholder:"Your phone"}),a.createElement(J.M,{label:"Custom native select",component:"select",mt:"md"},a.createElement("option",{value:"react"},"React"),a.createElement("option",{value:"react"},"Angular"),a.createElement("option",{value:"svelte"},"Svelte")))},maxWidth:340,centered:!0,code:K};var $=n(71078),ee=n(50352);let et=`
import { Input, rem } from '@mantine/core';

function Demo() {
  const at = <IconAt style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;
  const chevron = <IconChevronDown style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;
  return <Input{{props}} placeholder="Input component" leftSection={at} rightSection={chevron} />;
}
`,en={type:"styles-api",data:ee.a,component:function(e){let t=a.createElement(m.Z,{style:{width:(0,$.h)(16),height:(0,$.h)(16)},stroke:1.5}),n=a.createElement(I.Z,{style:{width:(0,$.h)(16),height:(0,$.h)(16)},stroke:1.5});return a.createElement(p.I,{placeholder:"Input component",leftSection:t,rightSection:n,...e})},code:et,centered:!0,maxWidth:340},er=`
import { Input } from '@mantine/core';

function Demo() {
  return <Input.Wrapper{{props}} label="Input label" description="Input description" error="Input error" withAsterisk />;
}
`,eo={type:"styles-api",data:ee.X,component:function(e){return a.createElement(p.I.Wrapper,{label:"Input label",description:"Input description",error:"Input error",withAsterisk:!0,...e},a.createElement(p.I,{placeholder:"Input"}))},code:er,centered:!0,maxWidth:340},el=(0,l.A)(i.us.Input);function ei(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components},{Demo:n,GetElementRef:l,InputSections:i}=t;return n||ep("Demo",!0),l||ep("GetElementRef",!0),i||ep("InputSections",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"disclaimer",children:"Disclaimer"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"!important:"})," In most cases, you should not use ",(0,r.jsx)(t.code,{children:"Input"})," in your application.\n",(0,r.jsx)(t.code,{children:"Input"})," is a base for other inputs and was not designed to be used directly.\nUse ",(0,r.jsx)(t.code,{children:"Input"})," to create custom inputs, for other cases prefer ",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"}),"\nor other component."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Input, TextInput } from \'@mantine/core\';\n\n// Incorrect usage, input is not accessible\nfunction Incorrect() {\n  return (\n    <Input.Wrapper label="Input label">\n      <Input />\n    </Input.Wrapper>\n  );\n}\n\n// Use TextInput instead of Input everywhere you want to use Input,\n// it is accessible by default and includes Input.Wrapper\nfunction Correct() {\n  return (\n    <TextInput label="Input label" description="Input description" />\n  );\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input"})," component is used as base for some other inputs (",(0,r.jsx)(t.a,{href:"/core/native-select/",children:"NativeSelect"}),", ",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"}),", ",(0,r.jsx)(t.a,{href:"/core/textarea/",children:"Textarea"}),", etc.).\nThe purpose of the ",(0,r.jsx)(t.code,{children:"Input"})," is to provide shared styles and features to other inputs."]}),"\n",(0,r.jsx)(n,{data:u}),"\n",(0,r.jsx)(i,{component:"Input"}),"\n",(0,r.jsx)(n,{data:x}),"\n",(0,r.jsx)(t.h2,{id:"change-input-element",children:"Change input element"}),"\n",(0,r.jsxs)(t.p,{children:["Input is a ",(0,r.jsx)(t.a,{href:"/guides/polymorphic",children:"polymorphic component"}),", the default root element is ",(0,r.jsx)(t.code,{children:"input"}),",\nbut it can be changed to any other element or component."]}),"\n",(0,r.jsxs)(t.p,{children:["Example of using ",(0,r.jsx)(t.code,{children:"Input"})," as ",(0,r.jsx)(t.code,{children:"button"})," and ",(0,r.jsx)(t.code,{children:"select"}),":"]}),"\n",(0,r.jsx)(n,{data:b}),"\n",(0,r.jsxs)(t.p,{children:["Example of using ",(0,r.jsx)(t.a,{href:"https://github.com/uNmAnNeR/imaskjs/tree/master/packages/react-imask",children:"react-imask"})," with ",(0,r.jsx)(t.code,{children:"Input"}),":"]}),"\n",(0,r.jsx)(n,{data:g}),"\n",(0,r.jsx)(t.h2,{id:"inputwrapper-component",children:"Input.Wrapper component"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input.Wrapper"})," component is used in all other inputs\n(",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"}),", ",(0,r.jsx)(t.a,{href:"/core/native-select/",children:"NativeSelect"}),", ",(0,r.jsx)(t.a,{href:"/core/textarea/",children:"Textarea"}),", etc.)\nunder the hood, you ",(0,r.jsx)(t.em,{children:"do not need to wrap your inputs with it, as it is already included in all of them"}),".\nUse ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," only when you want to create custom inputs."]}),"\n",(0,r.jsx)(n,{data:E}),"\n",(0,r.jsx)(t.h2,{id:"inputwrapperorder",children:"inputWrapperOrder"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"inputWrapperOrder"})," allows configuring the order of ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," parts.\nIt accepts an array of four elements: ",(0,r.jsx)(t.code,{children:"label"}),", ",(0,r.jsx)(t.code,{children:"input"}),", ",(0,r.jsx)(t.code,{children:"error"})," and ",(0,r.jsx)(t.code,{children:"description"}),".\nNote that it is not required to include all of them, you can use only those that you need\n– parts that are not included will not be rendered."]}),"\n",(0,r.jsx)(n,{data:T}),"\n",(0,r.jsx)(t.h2,{id:"inputcontainer",children:"inputContainer"}),"\n",(0,r.jsxs)(t.p,{children:["With ",(0,r.jsx)(t.code,{children:"inputContainer"})," prop, you can enhance inputs that use ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," under the hood,\nfor example, you can add ",(0,r.jsx)(t.a,{href:"/core/tooltip/",children:"Tooltip"})," to the ",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"})," when\nthe input is focused:"]}),"\n",(0,r.jsx)(n,{data:D}),"\n",(0,r.jsx)(t.h2,{id:"required-and-withasterisk-props",children:"required and withAsterisk props"}),"\n",(0,r.jsxs)(t.p,{children:["All components that are based on ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," support ",(0,r.jsx)(t.code,{children:"required"})," and ",(0,r.jsx)(t.code,{children:"withAsterisk"})," props.\nWhen set to true, both of these props will add a red asterisk to the end of the label.\nThe only difference is whether input element will have ",(0,r.jsx)(t.code,{children:"required"})," attribute, example with\n",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"})," component:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { TextInput } from \'@mantine/core\';\n\n// Will display required asterisk and add `required` attribute to the input element\nfunction RequiredDemo() {\n  return <TextInput label="test-label" required />;\n}\n\n// Will only display the asterisk, `required` attribute is not added to the input element\nfunction AsteriskDemo() {\n  return <TextInput label="test-label" withAsterisk />;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"error-prop",children:"error prop"}),"\n",(0,r.jsxs)(t.p,{children:["All inputs that use ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," under the hood support ",(0,r.jsx)(t.code,{children:"error"})," prop.\nWhen set to ",(0,r.jsx)(t.code,{children:"true"}),", it will add a red border to the input. You can also pass a React node to display\nan error message below the input. To only display error message without a red border, set ",(0,r.jsx)(t.code,{children:"error"})," prop\nto React node and ",(0,r.jsx)(t.code,{children:"withErrorStyles={false}"}),":"]}),"\n",(0,r.jsx)(n,{data:N.v}),"\n",(0,r.jsx)(t.h2,{id:"inputlabel-inputdescription-and-inputerror-components",children:"Input.Label, Input.Description and Input.Error components"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input.Label"}),", ",(0,r.jsx)(t.code,{children:"Input.Error"})," and ",(0,r.jsx)(t.code,{children:"Input.Description"})," components can be used to create custom\nform layouts if the default ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," layout does not meet your requirements."]}),"\n",(0,r.jsx)(n,{data:C}),"\n",(0,r.jsx)(t.h2,{id:"inputplaceholder-component",children:"Input.Placeholder component"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input.Placeholder"})," component can be used to add placeholder to ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"InputBase"})," components that are based on ",(0,r.jsx)(t.code,{children:"button"})," element\nor do not support placeholder property natively:"]}),"\n",(0,r.jsx)(n,{data:P}),"\n",(0,r.jsx)(t.h2,{id:"default-props-on-theme",children:"Default props on theme"}),"\n",(0,r.jsxs)(t.p,{children:["You can add ",(0,r.jsx)(t.a,{href:"/theming/default-props/",children:"default props"})," on ",(0,r.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"}),"\nto ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," components. These default props will be inherited by all inputs\nthat use ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," under the hood (",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"}),", ",(0,r.jsx)(t.a,{href:"/core/native-select/",children:"NativeSelect"}),", ",(0,r.jsx)(t.a,{href:"/core/textarea/",children:"Textarea"}),", etc.):"]}),"\n",(0,r.jsx)(n,{data:B}),"\n",(0,r.jsx)(t.h2,{id:"styles-on-theme",children:"Styles on theme"}),"\n",(0,r.jsxs)(t.p,{children:["Same as with default props, you can use ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," ",(0,r.jsx)(t.a,{href:"/styles/styles-api/",children:"Styles API"}),"\non ",(0,r.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"})," to add styles to all inputs:"]}),"\n",(0,r.jsx)(n,{data:U}),"\n",(0,r.jsx)(t.h2,{id:"change-focus-styles",children:"Change focus styles"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"&:focus-within"})," selector to change inputs focus styles. You can apply these styles to\none component with ",(0,r.jsx)(t.code,{children:"classNames"})," prop or to all inputs with ",(0,r.jsx)(t.a,{href:"/styles/styles-api/",children:"Styles API"}),"\non ",(0,r.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"}),"."]}),"\n",(0,r.jsx)(n,{data:H}),"\n",(0,r.jsx)(t.h2,{id:"inputbase-component",children:"InputBase component"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"InputBase"})," component combines ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," components and supports ",(0,r.jsx)(t.code,{children:"component"})," prop:"]}),"\n",(0,r.jsx)(n,{data:Q}),"\n",(0,r.jsx)(t.h2,{id:"styles-api",children:"Styles API"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," components support ",(0,r.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"})," –\nyou can customize styles of any inner element with ",(0,r.jsx)(t.code,{children:"classNames"})," and ",(0,r.jsx)(t.code,{children:"styles"})," props."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input"})," Styles API selectors:"]}),"\n",(0,r.jsx)(n,{data:en}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input.Wrapper"})," Styles API selectors:"]}),"\n",(0,r.jsx)(n,{data:eo}),"\n",(0,r.jsx)(l,{component:"Input",refType:"input"}),"\n",(0,r.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsxs)(t.p,{children:["If you use ",(0,r.jsx)(t.code,{children:"Input"})," component without associated label element, set ",(0,r.jsx)(t.code,{children:"aria-label"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Input } from \'@mantine/core\';\n\n// ok – the input is labelled by the aria-label\nfunction WithAriaLabel() {\n  return <Input aria-label="Your email" />;\n}\n\n// ok – the input is labelled by the label element\nfunction WithLabel() {\n  return (\n    <>\n      <label htmlFor="my-email">Your email</label>\n      <Input id="my-email" />\n    </>\n  );\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["When you use ",(0,r.jsx)(t.code,{children:"Input"})," with ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," it is required to set ",(0,r.jsx)(t.code,{children:"id"})," on both components\nto connect label and other elements with the input:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Input } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Input.Wrapper label="Your email" id="your-email">\n      <Input id="your-email" />\n    </Input.Wrapper>\n  );\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["You can use ",(0,r.jsx)(t.a,{href:"/hooks/use-id",children:"use-id"})," to generate unique ids:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useId } from '@mantine/hooks';\nimport { Input } from '@mantine/core';\n\nfunction Demo() {\n  const id = useId();\n  return (\n    <Input.Wrapper label=\"Your email\" id={id}>\n      <Input id={id} />\n    </Input.Wrapper>\n  );\n}\n"})})]})}function ea(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(el,{...e,children:(0,r.jsx)(ei,{...e})})}function ep(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},62144:function(e,t,n){"use strict";n.d(t,{v:function(){return p}});var r=n(27378),o=n(7033),l=n(71078),i=n(19786);let a=`
import { TextInput, rem } from '@mantine/core';
import { IconExclamationCircle } from '@tabler/icons-react';

function Demo() {
  return (
    <>
      <TextInput placeholder="Error as boolean" label="Error as boolean" error />
      <TextInput
        mt="md"
        placeholder="Error as react node"
        label="Error as react node"
        error="Something went wrong"
      />

      <TextInput
        mt="md"
        placeholder="Without error styles on input"
        label="Without error styles on input"
        error="Something went wrong"
        withErrorStyles={false}
        rightSectionPointerEvents="none"
        rightSection={
          <IconExclamationCircle
            style={{ width: rem(20), height: rem(20) }}
            color="var(--mantine-color-error)"
          />
        }
      />
    </>
  );
}
`,p={type:"code",component:function(){return r.createElement(r.Fragment,null,r.createElement(o.o,{placeholder:"Error as boolean",label:"Error as boolean",error:!0}),r.createElement(o.o,{mt:"md",placeholder:"Error as react node",label:"Error as react node",error:"Something went wrong"}),r.createElement(o.o,{mt:"md",placeholder:"Without error styles on input",label:"Without error styles on input",error:"Something went wrong",withErrorStyles:!1,rightSectionPointerEvents:"none",rightSection:r.createElement(i.Z,{style:{width:(0,l.h)(20),height:(0,l.h)(20)},color:"var(--mantine-color-error)"})}))},code:a,maxWidth:340,centered:!0}},77481:function(e,t,n){"use strict";n.d(t,{Mt:function(){return r},nW:function(){return o},pc:function(){return l}});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],o=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],l=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[370,5723,5819,2775,9774,2888,179],function(){return e(e.s=600)}),_N_E=e.O()}]);