(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44268],{14569:(e,t,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/input",function(){return n(27430)}])},27430:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>G});var r=n(31085),o=n(71184),i=n(34452),l=n(23232);let a={type:"configurator",component:function(e){return(0,r.jsx)(i.p,{placeholder:"Input component",...e})},code:`
import { Input } from '@mantine/core';

function Demo() {
  return <Input{{props}} placeholder="Input component" />;
}
`,centered:!0,maxWidth:340,controls:l.l$};var p=n(14041),s=n(32653),c=n(94310);let u={type:"code",component:function(){let[e,t]=(0,p.useState)("Clear me");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{placeholder:"Your email",leftSection:(0,r.jsx)(s.A,{size:16})}),(0,r.jsx)(i.p,{placeholder:"Clearable input",value:e,onChange:e=>t(e.currentTarget.value),rightSectionPointerEvents:"all",mt:"md",rightSection:(0,r.jsx)(c.J,{"aria-label":"Clear input",onClick:()=>t(""),style:{display:e?void 0:"none"}})})]})},maxWidth:340,centered:!0,code:`
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
`};var d=n(24551);let h={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{component:"button",pointer:!0,children:"Button input"}),(0,r.jsxs)(i.p,{component:"select",rightSection:(0,r.jsx)(d.A,{size:14,stroke:1.5}),pointer:!0,mt:"md",children:[(0,r.jsx)("option",{value:"1",children:"1"}),(0,r.jsx)("option",{value:"2",children:"2"})]})]})},code:`
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
`};var m=n(47090);let x={type:"code",component:function(){return(0,r.jsx)(i.p,{component:m._g,mask:"+7 (000) 000-00-00",placeholder:"Your phone"})},maxWidth:340,centered:!0,code:`
import { Input } from '@mantine/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return <Input component={IMaskInput} mask="+7 (000) 000-00-00" placeholder="Your phone" />;
}
`},j={type:"configurator",component:function(e){return(0,r.jsx)(i.p.Wrapper,{...e,children:(0,r.jsx)(i.p,{placeholder:"Input inside Input.Wrapper"})})},code:`
import { Input } from '@mantine/core';

function Wrapper() {
  return (
    <Input.Wrapper{{props}}>
      <Input placeholder="Input inside Input.Wrapper" />
    </Input.Wrapper>
  );
}
`,centered:!0,maxWidth:440,controls:l.wQ};var I=n(90275);let f={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I.k,{label:"Custom layout",placeholder:"Custom layout",description:"Description below the input",inputWrapperOrder:["label","error","input","description"]}),(0,r.jsx)(I.k,{mt:"md",label:"Custom layout",placeholder:"Custom layout",description:"Error and description are",error:"both below the input",inputWrapperOrder:["label","input","description","error"]})]})},maxWidth:340,centered:!0,code:`
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
`};var b=n(2912);let y={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,p.useState)(!1);return(0,r.jsx)(I.k,{label:"TextInput with tooltip",description:"Tooltip will be relative to the input",placeholder:"Focus me to see tooltip",onFocus:()=>t(!0),onBlur:()=>t(!1),inputContainer:t=>(0,r.jsx)(b.m,{label:"Additional information",position:"top-start",opened:e,children:t})})},code:`
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
`};var g=n(30280);let v={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p.Label,{required:!0,children:"Input label"}),(0,r.jsx)(i.p.Description,{children:"Input description"}),(0,r.jsx)(i.p.Error,{children:"Input error"})]})},code:`
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
`},W={type:"code",component:function(){return(0,r.jsx)(i.p,{component:"button",pointer:!0,children:(0,r.jsx)(i.p.Placeholder,{children:"Placeholder content"})})},maxWidth:340,centered:!0,code:`
import { Input } from '@mantine/core';

function Demo() {
  return (
    <Input component="button" pointer>
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </Input>
  );
}
`};var w=n(85233),T=n(12616),S=n(92408),k=n(73199);let C=`
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
        data={['React', 'Angular', 'Vue', 'Svelte']}
        description="Description below the input"
      />
    </MantineProvider>
  );
}
`,V=(0,T.a)({components:{Input:i.p.extend({defaultProps:{variant:"filled"}}),InputWrapper:i.p.Wrapper.extend({defaultProps:{inputWrapperOrder:["label","input","description","error"]}})}}),D={type:"code",component:function(){return(0,r.jsxs)(S.nW,{theme:V,children:[(0,r.jsx)(I.k,{label:"Text input",placeholder:"Text input",description:"Description below the input"}),(0,r.jsx)(k.m,{mt:"md",label:"Native select",data:["React","Angular","Vue","Svelte"],description:"Description below the input"})]})},centered:!0,maxWidth:340,code:C};var N={label:"m_8ccacaf5",input:"m_8ca6a3cb"};let E=`
import { TextInput, NativeSelect, MantineProvider, createTheme, Input } from '@mantine/core';
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
    <MantineProvider theme={theme}>
      <TextInput label="Text input" placeholder="Text input" />

      <NativeSelect
        mt="md"
        label="Native select"
        data={['React', 'Angular', 'Vue', 'Svelte']}
      />
    </MantineProvider>
  );
}
`,A=`
.label {
  background-color: var(--mantine-color-blue-light);
}

.input {
  border: 1px solid var(--mantine-color-violet-filled);
}
`,P=(0,T.a)({components:{Input:i.p.extend({classNames:{input:N.input}}),InputWrapper:i.p.Wrapper.extend({classNames:{label:N.label}})}}),z={type:"code",component:function(){return(0,r.jsxs)(S.nW,{theme:P,children:[(0,r.jsx)(I.k,{label:"Text input",placeholder:"Text input"}),(0,r.jsx)(k.m,{mt:"md",label:"Native select",data:["React","Angular","Vue","Svelte"]})]})},centered:!0,maxWidth:340,code:[{fileName:"Demo.tsx",code:E,language:"tsx"},{fileName:"Demo.module.css",code:A,language:"scss"}]};var _={input:"m_4ba3a790"};let B={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{placeholder:"Regular Input component",classNames:_}),(0,r.jsx)(I.k,{placeholder:"TextInput component",label:"TextInput component",mt:"md",classNames:_})]})},maxWidth:340,centered:!0,code:[{fileName:"Demo.module.css",code:`
.input {
  transition: none;

  &:focus-within {
    outline: 2px solid var(--mantine-color-blue-filled);
    border-color: transparent;
  }
}
`,language:"scss"},{fileName:"Demo.tsx",code:`
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
`,language:"tsx"}]};var F=n(87059);let Y={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(F.O,{label:"Your phone",component:m._g,mask:"+7 (000) 000-0000",placeholder:"Your phone"}),(0,r.jsxs)(F.O,{label:"Custom native select",component:"select",mt:"md",children:[(0,r.jsx)("option",{value:"react",children:"React"}),(0,r.jsx)("option",{value:"react",children:"Angular"}),(0,r.jsx)("option",{value:"svelte",children:"Svelte"})]})]})},maxWidth:340,centered:!0,code:`
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
`};var q=n(6688);let R=`
import { Input } from '@mantine/core';

function Demo() {
  const at = <IconAt size={16} stroke={1.5} />;
  const chevron = <IconChevronDown size={16} stroke={1.5} />;
  return <Input{{props}} placeholder="Input component" leftSection={at} rightSection={chevron} />;
}
`,O={type:"styles-api",data:q.h,component:function(e){let t=(0,r.jsx)(s.A,{size:16,stroke:1.5}),n=(0,r.jsx)(d.A,{size:16,stroke:1.5});return(0,r.jsx)(i.p,{placeholder:"Input component",leftSection:t,rightSection:n,...e})},code:R,centered:!0,maxWidth:340},M=`
import { Input } from '@mantine/core';

function Demo() {
  return <Input.Wrapper{{props}} label="Input label" description="Input description" error="Input error" withAsterisk />;
}
`,L={type:"styles-api",data:q.m,component:function(e){return(0,r.jsx)(i.p.Wrapper,{label:"Input label",description:"Input description",error:"Input error",withAsterisk:!0,...e,children:(0,r.jsx)(i.p,{placeholder:"Input"})})},code:M,centered:!0,maxWidth:340};var U=n(18675),$=n(20017);let X=(0,U.P)($.XZ.Input);function Q(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components},{Demo:n,GetElementRef:i,InputSections:l}=t;return n||J("Demo",!0),i||J("GetElementRef",!0),l||J("InputSections",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"disclaimer",children:"Disclaimer"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"!important:"})," In most cases, you should not use ",(0,r.jsx)(t.code,{children:"Input"})," in your application.\n",(0,r.jsx)(t.code,{children:"Input"})," is a base for other inputs and was not designed to be used directly.\nUse ",(0,r.jsx)(t.code,{children:"Input"})," to create custom inputs, for other cases prefer ",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"}),"\nor other component."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Input, TextInput } from \'@mantine/core\';\n\n// Incorrect usage, input is not accessible\nfunction Incorrect() {\n  return (\n    <Input.Wrapper label="Input label">\n      <Input />\n    </Input.Wrapper>\n  );\n}\n\n// Use TextInput instead of Input everywhere you want to use Input,\n// it is accessible by default and includes Input.Wrapper\nfunction Correct() {\n  return (\n    <TextInput label="Input label" description="Input description" />\n  );\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input"})," component is used as base for some other inputs (",(0,r.jsx)(t.a,{href:"/core/native-select/",children:"NativeSelect"}),", ",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"}),", ",(0,r.jsx)(t.a,{href:"/core/textarea/",children:"Textarea"}),", etc.).\nThe purpose of the ",(0,r.jsx)(t.code,{children:"Input"})," is to provide shared styles and features to other inputs."]}),"\n",(0,r.jsx)(n,{data:a}),"\n",(0,r.jsx)(l,{component:"Input"}),"\n",(0,r.jsx)(n,{data:u}),"\n",(0,r.jsx)(t.h2,{id:"change-input-element",children:"Change input element"}),"\n",(0,r.jsxs)(t.p,{children:["Input is a ",(0,r.jsx)(t.a,{href:"/guides/polymorphic",children:"polymorphic component"}),", the default root element is ",(0,r.jsx)(t.code,{children:"input"}),",\nbut it can be changed to any other element or component."]}),"\n",(0,r.jsxs)(t.p,{children:["Example of using ",(0,r.jsx)(t.code,{children:"Input"})," as ",(0,r.jsx)(t.code,{children:"button"})," and ",(0,r.jsx)(t.code,{children:"select"}),":"]}),"\n",(0,r.jsx)(n,{data:h}),"\n",(0,r.jsxs)(t.p,{children:["Example of using ",(0,r.jsx)(t.a,{href:"https://github.com/uNmAnNeR/imaskjs/tree/master/packages/react-imask",children:"react-imask"})," with ",(0,r.jsx)(t.code,{children:"Input"}),":"]}),"\n",(0,r.jsx)(n,{data:x}),"\n",(0,r.jsx)(t.h2,{id:"inputwrapper-component",children:"Input.Wrapper component"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input.Wrapper"})," component is used in all other inputs\n(",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"}),", ",(0,r.jsx)(t.a,{href:"/core/native-select/",children:"NativeSelect"}),", ",(0,r.jsx)(t.a,{href:"/core/textarea/",children:"Textarea"}),", etc.)\nunder the hood, you ",(0,r.jsx)(t.em,{children:"do not need to wrap your inputs with it, as it is already included in all of them"}),".\nUse ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," only when you want to create custom inputs."]}),"\n",(0,r.jsx)(n,{data:j}),"\n",(0,r.jsx)(t.h2,{id:"inputwrapperorder",children:"inputWrapperOrder"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"inputWrapperOrder"})," allows configuring the order of ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," parts.\nIt accepts an array of four elements: ",(0,r.jsx)(t.code,{children:"label"}),", ",(0,r.jsx)(t.code,{children:"input"}),", ",(0,r.jsx)(t.code,{children:"error"})," and ",(0,r.jsx)(t.code,{children:"description"}),".\nNote that it is not required to include all of them, you can use only those that you need\n– parts that are not included will not be rendered."]}),"\n",(0,r.jsx)(n,{data:f}),"\n",(0,r.jsx)(t.h2,{id:"inputcontainer",children:"inputContainer"}),"\n",(0,r.jsxs)(t.p,{children:["With ",(0,r.jsx)(t.code,{children:"inputContainer"})," prop, you can enhance inputs that use ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," under the hood,\nfor example, you can add ",(0,r.jsx)(t.a,{href:"/core/tooltip/",children:"Tooltip"})," to the ",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"})," when\nthe input is focused:"]}),"\n",(0,r.jsx)(n,{data:y}),"\n",(0,r.jsx)(t.h2,{id:"required-and-withasterisk-props",children:"required and withAsterisk props"}),"\n",(0,r.jsxs)(t.p,{children:["All components that are based on ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," support ",(0,r.jsx)(t.code,{children:"required"})," and ",(0,r.jsx)(t.code,{children:"withAsterisk"})," props.\nWhen set to true, both of these props will add a red asterisk to the end of the label.\nThe only difference is whether input element will have ",(0,r.jsx)(t.code,{children:"required"})," attribute, example with\n",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"})," component:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { TextInput } from \'@mantine/core\';\n\n// Will display required asterisk and add `required` attribute to the input element\nfunction RequiredDemo() {\n  return <TextInput label="test-label" required />;\n}\n\n// Will only display the asterisk, `required` attribute is not added to the input element\nfunction AsteriskDemo() {\n  return <TextInput label="test-label" withAsterisk />;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"error-prop",children:"error prop"}),"\n",(0,r.jsxs)(t.p,{children:["All inputs that use ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," under the hood support ",(0,r.jsx)(t.code,{children:"error"})," prop.\nWhen set to ",(0,r.jsx)(t.code,{children:"true"}),", it will add a red border to the input. You can also pass a React node to display\nan error message below the input. To only display error message without a red border, set ",(0,r.jsx)(t.code,{children:"error"})," prop\nto React node and ",(0,r.jsx)(t.code,{children:"withErrorStyles={false}"}),":"]}),"\n",(0,r.jsx)(n,{data:g.z}),"\n",(0,r.jsx)(t.h2,{id:"inputlabel-inputdescription-and-inputerror-components",children:"Input.Label, Input.Description and Input.Error components"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input.Label"}),", ",(0,r.jsx)(t.code,{children:"Input.Error"})," and ",(0,r.jsx)(t.code,{children:"Input.Description"})," components can be used to create custom\nform layouts if the default ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," layout does not meet your requirements."]}),"\n",(0,r.jsx)(n,{data:v}),"\n",(0,r.jsx)(t.h2,{id:"inputplaceholder-component",children:"Input.Placeholder component"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input.Placeholder"})," component can be used to add placeholder to ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"InputBase"})," components that are based on ",(0,r.jsx)(t.code,{children:"button"})," element\nor do not support placeholder property natively:"]}),"\n",(0,r.jsx)(n,{data:W}),"\n",(0,r.jsx)(t.h2,{id:"inputclearbutton-component",children:"Input.ClearButton component"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"Input.ClearButton"})," component to add clear button to custom inputs\nbased on ",(0,r.jsx)(t.code,{children:"Input"})," component. ",(0,r.jsx)(t.code,{children:"size"})," of the clear button is automatically\ninherited from the input:"]}),"\n",(0,r.jsx)(n,{data:w.m}),"\n",(0,r.jsx)(t.h2,{id:"default-props-on-theme",children:"Default props on theme"}),"\n",(0,r.jsxs)(t.p,{children:["You can add ",(0,r.jsx)(t.a,{href:"/theming/default-props/",children:"default props"})," on ",(0,r.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"}),"\nto ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," components. These default props will be inherited by all inputs\nthat use ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," under the hood (",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"}),", ",(0,r.jsx)(t.a,{href:"/core/native-select/",children:"NativeSelect"}),", ",(0,r.jsx)(t.a,{href:"/core/textarea/",children:"Textarea"}),", etc.):"]}),"\n",(0,r.jsx)(n,{data:D}),"\n",(0,r.jsx)(t.h2,{id:"styles-on-theme",children:"Styles on theme"}),"\n",(0,r.jsxs)(t.p,{children:["Same as with default props, you can use ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," ",(0,r.jsx)(t.a,{href:"/styles/styles-api/",children:"Styles API"}),"\non ",(0,r.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"})," to add styles to all inputs:"]}),"\n",(0,r.jsx)(n,{data:z}),"\n",(0,r.jsx)(t.h2,{id:"change-focus-styles",children:"Change focus styles"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"&:focus-within"})," selector to change inputs focus styles. You can apply these styles to\none component with ",(0,r.jsx)(t.code,{children:"classNames"})," prop or to all inputs with ",(0,r.jsx)(t.a,{href:"/styles/styles-api/",children:"Styles API"}),"\non ",(0,r.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"}),"."]}),"\n",(0,r.jsx)(n,{data:B}),"\n",(0,r.jsx)(t.h2,{id:"inputbase-component",children:"InputBase component"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"InputBase"})," component combines ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," components and supports ",(0,r.jsx)(t.code,{children:"component"})," prop:"]}),"\n",(0,r.jsx)(n,{data:Y}),"\n",(0,r.jsx)(t.h2,{id:"styles-api",children:"Styles API"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," components support ",(0,r.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"})," –\nyou can customize styles of any inner element with ",(0,r.jsx)(t.code,{children:"classNames"})," and ",(0,r.jsx)(t.code,{children:"styles"})," props."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input"})," Styles API selectors:"]}),"\n",(0,r.jsx)(n,{data:O}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input.Wrapper"})," Styles API selectors:"]}),"\n",(0,r.jsx)(n,{data:L}),"\n",(0,r.jsx)(i,{component:"Input",refType:"input"}),"\n",(0,r.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsxs)(t.p,{children:["If you use ",(0,r.jsx)(t.code,{children:"Input"})," component without associated label element, set ",(0,r.jsx)(t.code,{children:"aria-label"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Input } from \'@mantine/core\';\n\n// ok – the input is labelled by the aria-label\nfunction WithAriaLabel() {\n  return <Input aria-label="Your email" />;\n}\n\n// ok – the input is labelled by the label element\nfunction WithLabel() {\n  return (\n    <>\n      <label htmlFor="my-email">Your email</label>\n      <Input id="my-email" />\n    </>\n  );\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["When you use ",(0,r.jsx)(t.code,{children:"Input"})," with ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," it is required to set ",(0,r.jsx)(t.code,{children:"id"})," on both components\nto connect label and other elements with the input:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Input } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Input.Wrapper label="Your email" id="your-email">\n      <Input id="your-email" />\n    </Input.Wrapper>\n  );\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["You can use ",(0,r.jsx)(t.a,{href:"/hooks/use-id",children:"use-id"})," to generate unique ids:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { Input } from '@mantine/core';\nimport { useId } from '@mantine/hooks';\n\nfunction Demo() {\n  const id = useId();\n  return (\n    <Input.Wrapper label=\"Your email\" id={id}>\n      <Input id={id} />\n    </Input.Wrapper>\n  );\n}\n"})})]})}function G(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(X,{...e,children:(0,r.jsx)(Q,{...e})})}function J(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},85233:(e,t,n)=>{"use strict";n.d(t,{m:()=>l});var r=n(31085),o=n(14041),i=n(34452);let l={type:"configurator",component:function(e){let[t,n]=(0,o.useState)("clearable");return(0,r.jsx)(i.p,{placeholder:"Clearable input",value:t,onChange:e=>n(e.currentTarget.value),rightSection:""!==t?(0,r.jsx)(i.p.ClearButton,{onClick:()=>n("")}):void 0,rightSectionPointerEvents:"auto",...e})},code:e=>`
import { Input } from '@mantine/core';

function Demo(){
  const [value, setValue] = useState('clearable');

  return (
    <Input
      placeholder="Clearable input"
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      rightSection={value !== '' ? <Input.ClearButton onClick={() => setValue('')} /> : undefined}
      rightSectionPointerEvents="auto"
      size="${e.size}"
    />
  );
}
`,maxWidth:340,centered:!0,controls:[{type:"size",prop:"size",initialValue:"sm",libraryValue:"__"}]}},30280:(e,t,n)=>{"use strict";n.d(t,{z:()=>l});var r=n(31085),o=n(94701),i=n(90275);let l={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.k,{placeholder:"Error as boolean",label:"Error as boolean",error:!0}),(0,r.jsx)(i.k,{mt:"md",placeholder:"Error as react node",label:"Error as react node",error:"Something went wrong"}),(0,r.jsx)(i.k,{mt:"md",placeholder:"Without error styles on input",label:"Without error styles on input",error:"Something went wrong",withErrorStyles:!1,rightSectionPointerEvents:"none",rightSection:(0,r.jsx)(o.A,{size:20,color:"var(--mantine-color-error)"})})]})},code:`
import { TextInput } from '@mantine/core';
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
            size={20}
            color="var(--mantine-color-error)"
          />
        }
      />
    </>
  );
}
`,maxWidth:340,centered:!0}},23232:(e,t,n)=>{"use strict";n.d(t,{$7:()=>i,l$:()=>r,wQ:()=>o});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],o=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],i=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},e=>{var t=t=>e(e.s=t);e.O(0,[75720,18675,90636,46593,38792],()=>t(14569)),_N_E=e.O()}]);