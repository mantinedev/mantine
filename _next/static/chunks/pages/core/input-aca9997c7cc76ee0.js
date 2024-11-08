(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29354],{30094:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/input",function(){return n(59079)}])},59079:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return G}});var r=n(52322),o=n(45392),i=n(6941),l=n(76528);let a={type:"configurator",component:function(e){return(0,r.jsx)(i.I,{placeholder:"Input component",...e})},code:`
import { Input } from '@mantine/core';

function Demo() {
  return <Input{{props}} placeholder="Input component" />;
}
`,centered:!0,maxWidth:340,controls:l.Mt};var p=n(2784),s=n(89868),c=n(2670);let u={type:"code",component:function(){let[e,t]=(0,p.useState)("Clear me");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.I,{placeholder:"Your email",leftSection:(0,r.jsx)(s.Z,{size:16})}),(0,r.jsx)(i.I,{placeholder:"Clearable input",value:e,onChange:e=>t(e.currentTarget.value),rightSectionPointerEvents:"all",mt:"md",rightSection:(0,r.jsx)(c.P,{"aria-label":"Clear input",onClick:()=>t(""),style:{display:e?void 0:"none"}})})]})},maxWidth:340,centered:!0,code:`
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
`};var d=n(92536);let h={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.I,{component:"button",pointer:!0,children:"Button input"}),(0,r.jsxs)(i.I,{component:"select",rightSection:(0,r.jsx)(d.Z,{size:14,stroke:1.5}),pointer:!0,mt:"md",children:[(0,r.jsx)("option",{value:"1",children:"1"}),(0,r.jsx)("option",{value:"2",children:"2"})]})]})},code:`
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
`};var m=n(99519);let x={type:"code",component:function(){return(0,r.jsx)(i.I,{component:m.oc,mask:"+7 (000) 000-00-00",placeholder:"Your phone"})},maxWidth:340,centered:!0,code:`
import { Input } from '@mantine/core';
import { IMaskInput } from 'react-imask';

function Demo() {
  return <Input component={IMaskInput} mask="+7 (000) 000-00-00" placeholder="Your phone" />;
}
`},I={type:"configurator",component:function(e){return(0,r.jsx)(i.I.Wrapper,{...e,children:(0,r.jsx)(i.I,{placeholder:"Input inside Input.Wrapper"})})},code:`
import { Input } from '@mantine/core';

function Wrapper() {
  return (
    <Input.Wrapper{{props}}>
      <Input placeholder="Input inside Input.Wrapper" />
    </Input.Wrapper>
  );
}
`,centered:!0,maxWidth:440,controls:l.nW};var j=n(74770);let f={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j.o,{label:"Custom layout",placeholder:"Custom layout",description:"Description below the input",inputWrapperOrder:["label","error","input","description"]}),(0,r.jsx)(j.o,{mt:"md",label:"Custom layout",placeholder:"Custom layout",description:"Error and description are",error:"both below the input",inputWrapperOrder:["label","input","description","error"]})]})},maxWidth:340,centered:!0,code:`
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
`};var b=n(893);let y={type:"code",centered:!0,maxWidth:400,component:function(){let[e,t]=(0,p.useState)(!1);return(0,r.jsx)(j.o,{label:"TextInput with tooltip",description:"Tooltip will be relative to the input",placeholder:"Focus me to see tooltip",onFocus:()=>t(!0),onBlur:()=>t(!1),inputContainer:t=>(0,r.jsx)(b.u,{label:"Additional information",position:"top-start",opened:e,children:t})})},code:`
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
`};var g=n(97332);let v={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.I.Label,{required:!0,children:"Input label"}),(0,r.jsx)(i.I.Description,{children:"Input description"}),(0,r.jsx)(i.I.Error,{children:"Input error"})]})},code:`
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
`},w={type:"code",component:function(){return(0,r.jsx)(i.I,{component:"button",pointer:!0,children:(0,r.jsx)(i.I.Placeholder,{children:"Placeholder content"})})},maxWidth:340,centered:!0,code:`
import { Input } from '@mantine/core';

function Demo() {
  return (
    <Input component="button" pointer>
      <Input.Placeholder>Placeholder content</Input.Placeholder>
    </Input>
  );
}
`};var W=n(60231),T=n(68755),S=n(12189);let k=`
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
`,D=(0,W.j)({components:{Input:i.I.extend({defaultProps:{variant:"filled"}}),InputWrapper:i.I.Wrapper.extend({defaultProps:{inputWrapperOrder:["label","input","description","error"]}})}}),V={type:"code",component:function(){return(0,r.jsxs)(T.M2,{theme:D,children:[(0,r.jsx)(j.o,{label:"Text input",placeholder:"Text input",description:"Description below the input"}),(0,r.jsx)(S.p,{mt:"md",label:"Native select",data:["React","Angular","Vue","Svelte"],description:"Description below the input"})]})},centered:!0,maxWidth:340,code:k},N=`
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
`,C=`
.label {
  background-color: var(--mantine-color-blue-light);
}

.input {
  border: 1px solid var(--mantine-color-violet-filled);
}
`,E=(0,W.j)({components:{Input:i.I.extend({classNames:{input:"m_8ca6a3cb"}}),InputWrapper:i.I.Wrapper.extend({classNames:{label:"m_8ccacaf5"}})}}),A={type:"code",component:function(){return(0,r.jsxs)(T.M2,{theme:E,children:[(0,r.jsx)(j.o,{label:"Text input",placeholder:"Text input"}),(0,r.jsx)(S.p,{mt:"md",label:"Native select",data:["React","Angular","Vue","Svelte"]})]})},centered:!0,maxWidth:340,code:[{fileName:"Demo.tsx",code:N,language:"tsx"},{fileName:"Demo.module.css",code:C,language:"scss"}]};var P={input:"m_4ba3a790"};let F={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.I,{placeholder:"Regular Input component",classNames:P}),(0,r.jsx)(j.o,{placeholder:"TextInput component",label:"TextInput component",mt:"md",classNames:P})]})},maxWidth:340,centered:!0,code:[{fileName:"Demo.module.css",code:`
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
`,language:"tsx"}]};var M=n(73063);let Y={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(M.M,{label:"Your phone",component:m.oc,mask:"+7 (000) 000-0000",placeholder:"Your phone"}),(0,r.jsxs)(M.M,{label:"Custom native select",component:"select",mt:"md",children:[(0,r.jsx)("option",{value:"react",children:"React"}),(0,r.jsx)("option",{value:"react",children:"Angular"}),(0,r.jsx)("option",{value:"svelte",children:"Svelte"})]})]})},maxWidth:340,centered:!0,code:`
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
`};var q=n(58898),_=n(52349);let z=`
import { Input, rem } from '@mantine/core';

function Demo() {
  const at = <IconAt style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;
  const chevron = <IconChevronDown style={{ width: rem(16), height: rem(16) }} stroke={1.5} />;
  return <Input{{props}} placeholder="Input component" leftSection={at} rightSection={chevron} />;
}
`,B={type:"styles-api",data:_.a,component:function(e){let t=(0,r.jsx)(s.Z,{style:{width:(0,q.h)(16),height:(0,q.h)(16)},stroke:1.5}),n=(0,r.jsx)(d.Z,{style:{width:(0,q.h)(16),height:(0,q.h)(16)},stroke:1.5});return(0,r.jsx)(i.I,{placeholder:"Input component",leftSection:t,rightSection:n,...e})},code:z,centered:!0,maxWidth:340},R=`
import { Input } from '@mantine/core';

function Demo() {
  return <Input.Wrapper{{props}} label="Input label" description="Input description" error="Input error" withAsterisk />;
}
`,O={type:"styles-api",data:_.X,component:function(e){return(0,r.jsx)(i.I.Wrapper,{label:"Input label",description:"Input description",error:"Input error",withAsterisk:!0,...e,children:(0,r.jsx)(i.I,{placeholder:"Input"})})},code:R,centered:!0,maxWidth:340};var L=n(25071),U=n(15019);let Z=(0,L.A)(U.us.Input);function X(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components},{Demo:n,GetElementRef:i,InputSections:l}=t;return n||H("Demo",!0),i||H("GetElementRef",!0),l||H("InputSections",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"disclaimer",children:"Disclaimer"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"!important:"})," In most cases, you should not use ",(0,r.jsx)(t.code,{children:"Input"})," in your application.\n",(0,r.jsx)(t.code,{children:"Input"})," is a base for other inputs and was not designed to be used directly.\nUse ",(0,r.jsx)(t.code,{children:"Input"})," to create custom inputs, for other cases prefer ",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"}),"\nor other component."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Input, TextInput } from \'@mantine/core\';\n\n// Incorrect usage, input is not accessible\nfunction Incorrect() {\n  return (\n    <Input.Wrapper label="Input label">\n      <Input />\n    </Input.Wrapper>\n  );\n}\n\n// Use TextInput instead of Input everywhere you want to use Input,\n// it is accessible by default and includes Input.Wrapper\nfunction Correct() {\n  return (\n    <TextInput label="Input label" description="Input description" />\n  );\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input"})," component is used as base for some other inputs (",(0,r.jsx)(t.a,{href:"/core/native-select/",children:"NativeSelect"}),", ",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"}),", ",(0,r.jsx)(t.a,{href:"/core/textarea/",children:"Textarea"}),", etc.).\nThe purpose of the ",(0,r.jsx)(t.code,{children:"Input"})," is to provide shared styles and features to other inputs."]}),"\n",(0,r.jsx)(n,{data:a}),"\n",(0,r.jsx)(l,{component:"Input"}),"\n",(0,r.jsx)(n,{data:u}),"\n",(0,r.jsx)(t.h2,{id:"change-input-element",children:"Change input element"}),"\n",(0,r.jsxs)(t.p,{children:["Input is a ",(0,r.jsx)(t.a,{href:"/guides/polymorphic",children:"polymorphic component"}),", the default root element is ",(0,r.jsx)(t.code,{children:"input"}),",\nbut it can be changed to any other element or component."]}),"\n",(0,r.jsxs)(t.p,{children:["Example of using ",(0,r.jsx)(t.code,{children:"Input"})," as ",(0,r.jsx)(t.code,{children:"button"})," and ",(0,r.jsx)(t.code,{children:"select"}),":"]}),"\n",(0,r.jsx)(n,{data:h}),"\n",(0,r.jsxs)(t.p,{children:["Example of using ",(0,r.jsx)(t.a,{href:"https://github.com/uNmAnNeR/imaskjs/tree/master/packages/react-imask",children:"react-imask"})," with ",(0,r.jsx)(t.code,{children:"Input"}),":"]}),"\n",(0,r.jsx)(n,{data:x}),"\n",(0,r.jsx)(t.h2,{id:"inputwrapper-component",children:"Input.Wrapper component"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input.Wrapper"})," component is used in all other inputs\n(",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"}),", ",(0,r.jsx)(t.a,{href:"/core/native-select/",children:"NativeSelect"}),", ",(0,r.jsx)(t.a,{href:"/core/textarea/",children:"Textarea"}),", etc.)\nunder the hood, you ",(0,r.jsx)(t.em,{children:"do not need to wrap your inputs with it, as it is already included in all of them"}),".\nUse ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," only when you want to create custom inputs."]}),"\n",(0,r.jsx)(n,{data:I}),"\n",(0,r.jsx)(t.h2,{id:"inputwrapperorder",children:"inputWrapperOrder"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"inputWrapperOrder"})," allows configuring the order of ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," parts.\nIt accepts an array of four elements: ",(0,r.jsx)(t.code,{children:"label"}),", ",(0,r.jsx)(t.code,{children:"input"}),", ",(0,r.jsx)(t.code,{children:"error"})," and ",(0,r.jsx)(t.code,{children:"description"}),".\nNote that it is not required to include all of them, you can use only those that you need\n– parts that are not included will not be rendered."]}),"\n",(0,r.jsx)(n,{data:f}),"\n",(0,r.jsx)(t.h2,{id:"inputcontainer",children:"inputContainer"}),"\n",(0,r.jsxs)(t.p,{children:["With ",(0,r.jsx)(t.code,{children:"inputContainer"})," prop, you can enhance inputs that use ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," under the hood,\nfor example, you can add ",(0,r.jsx)(t.a,{href:"/core/tooltip/",children:"Tooltip"})," to the ",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"})," when\nthe input is focused:"]}),"\n",(0,r.jsx)(n,{data:y}),"\n",(0,r.jsx)(t.h2,{id:"required-and-withasterisk-props",children:"required and withAsterisk props"}),"\n",(0,r.jsxs)(t.p,{children:["All components that are based on ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," support ",(0,r.jsx)(t.code,{children:"required"})," and ",(0,r.jsx)(t.code,{children:"withAsterisk"})," props.\nWhen set to true, both of these props will add a red asterisk to the end of the label.\nThe only difference is whether input element will have ",(0,r.jsx)(t.code,{children:"required"})," attribute, example with\n",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"})," component:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { TextInput } from \'@mantine/core\';\n\n// Will display required asterisk and add `required` attribute to the input element\nfunction RequiredDemo() {\n  return <TextInput label="test-label" required />;\n}\n\n// Will only display the asterisk, `required` attribute is not added to the input element\nfunction AsteriskDemo() {\n  return <TextInput label="test-label" withAsterisk />;\n}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"error-prop",children:"error prop"}),"\n",(0,r.jsxs)(t.p,{children:["All inputs that use ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," under the hood support ",(0,r.jsx)(t.code,{children:"error"})," prop.\nWhen set to ",(0,r.jsx)(t.code,{children:"true"}),", it will add a red border to the input. You can also pass a React node to display\nan error message below the input. To only display error message without a red border, set ",(0,r.jsx)(t.code,{children:"error"})," prop\nto React node and ",(0,r.jsx)(t.code,{children:"withErrorStyles={false}"}),":"]}),"\n",(0,r.jsx)(n,{data:g.v}),"\n",(0,r.jsx)(t.h2,{id:"inputlabel-inputdescription-and-inputerror-components",children:"Input.Label, Input.Description and Input.Error components"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input.Label"}),", ",(0,r.jsx)(t.code,{children:"Input.Error"})," and ",(0,r.jsx)(t.code,{children:"Input.Description"})," components can be used to create custom\nform layouts if the default ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," layout does not meet your requirements."]}),"\n",(0,r.jsx)(n,{data:v}),"\n",(0,r.jsx)(t.h2,{id:"inputplaceholder-component",children:"Input.Placeholder component"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input.Placeholder"})," component can be used to add placeholder to ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"InputBase"})," components that are based on ",(0,r.jsx)(t.code,{children:"button"})," element\nor do not support placeholder property natively:"]}),"\n",(0,r.jsx)(n,{data:w}),"\n",(0,r.jsx)(t.h2,{id:"default-props-on-theme",children:"Default props on theme"}),"\n",(0,r.jsxs)(t.p,{children:["You can add ",(0,r.jsx)(t.a,{href:"/theming/default-props/",children:"default props"})," on ",(0,r.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"}),"\nto ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," components. These default props will be inherited by all inputs\nthat use ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," under the hood (",(0,r.jsx)(t.a,{href:"/core/text-input/",children:"TextInput"}),", ",(0,r.jsx)(t.a,{href:"/core/native-select/",children:"NativeSelect"}),", ",(0,r.jsx)(t.a,{href:"/core/textarea/",children:"Textarea"}),", etc.):"]}),"\n",(0,r.jsx)(n,{data:V}),"\n",(0,r.jsx)(t.h2,{id:"styles-on-theme",children:"Styles on theme"}),"\n",(0,r.jsxs)(t.p,{children:["Same as with default props, you can use ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," ",(0,r.jsx)(t.a,{href:"/styles/styles-api/",children:"Styles API"}),"\non ",(0,r.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"})," to add styles to all inputs:"]}),"\n",(0,r.jsx)(n,{data:A}),"\n",(0,r.jsx)(t.h2,{id:"change-focus-styles",children:"Change focus styles"}),"\n",(0,r.jsxs)(t.p,{children:["Use ",(0,r.jsx)(t.code,{children:"&:focus-within"})," selector to change inputs focus styles. You can apply these styles to\none component with ",(0,r.jsx)(t.code,{children:"classNames"})," prop or to all inputs with ",(0,r.jsx)(t.a,{href:"/styles/styles-api/",children:"Styles API"}),"\non ",(0,r.jsx)(t.a,{href:"/theming/theme-object/",children:"theme"}),"."]}),"\n",(0,r.jsx)(n,{data:F}),"\n",(0,r.jsx)(t.h2,{id:"inputbase-component",children:"InputBase component"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"InputBase"})," component combines ",(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," components and supports ",(0,r.jsx)(t.code,{children:"component"})," prop:"]}),"\n",(0,r.jsx)(n,{data:Y}),"\n",(0,r.jsx)(t.h2,{id:"styles-api",children:"Styles API"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input"})," and ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," components support ",(0,r.jsx)(t.a,{href:"/styles/styles-api",children:"Styles API"})," –\nyou can customize styles of any inner element with ",(0,r.jsx)(t.code,{children:"classNames"})," and ",(0,r.jsx)(t.code,{children:"styles"})," props."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input"})," Styles API selectors:"]}),"\n",(0,r.jsx)(n,{data:B}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"Input.Wrapper"})," Styles API selectors:"]}),"\n",(0,r.jsx)(n,{data:O}),"\n",(0,r.jsx)(i,{component:"Input",refType:"input"}),"\n",(0,r.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,r.jsxs)(t.p,{children:["If you use ",(0,r.jsx)(t.code,{children:"Input"})," component without associated label element, set ",(0,r.jsx)(t.code,{children:"aria-label"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Input } from \'@mantine/core\';\n\n// ok – the input is labelled by the aria-label\nfunction WithAriaLabel() {\n  return <Input aria-label="Your email" />;\n}\n\n// ok – the input is labelled by the label element\nfunction WithLabel() {\n  return (\n    <>\n      <label htmlFor="my-email">Your email</label>\n      <Input id="my-email" />\n    </>\n  );\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["When you use ",(0,r.jsx)(t.code,{children:"Input"})," with ",(0,r.jsx)(t.code,{children:"Input.Wrapper"})," it is required to set ",(0,r.jsx)(t.code,{children:"id"})," on both components\nto connect label and other elements with the input:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'import { Input } from \'@mantine/core\';\n\nfunction Demo() {\n  return (\n    <Input.Wrapper label="Your email" id="your-email">\n      <Input id="your-email" />\n    </Input.Wrapper>\n  );\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["You can use ",(0,r.jsx)(t.a,{href:"/hooks/use-id",children:"use-id"})," to generate unique ids:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { Input } from '@mantine/core';\nimport { useId } from '@mantine/hooks';\n\nfunction Demo() {\n  const id = useId();\n  return (\n    <Input.Wrapper label=\"Your email\" id={id}>\n      <Input id={id} />\n    </Input.Wrapper>\n  );\n}\n"})})]})}function G(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(Z,{...e,children:(0,r.jsx)(X,{...e})})}function H(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},97332:function(e,t,n){"use strict";n.d(t,{v:function(){return a}});var r=n(52322),o=n(71899),i=n(74770),l=n(58898);let a={type:"code",component:function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.o,{placeholder:"Error as boolean",label:"Error as boolean",error:!0}),(0,r.jsx)(i.o,{mt:"md",placeholder:"Error as react node",label:"Error as react node",error:"Something went wrong"}),(0,r.jsx)(i.o,{mt:"md",placeholder:"Without error styles on input",label:"Without error styles on input",error:"Something went wrong",withErrorStyles:!1,rightSectionPointerEvents:"none",rightSection:(0,r.jsx)(o.Z,{style:{width:(0,l.h)(20),height:(0,l.h)(20)},color:"var(--mantine-color-error)"})})]})},code:`
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
`,maxWidth:340,centered:!0}},76528:function(e,t,n){"use strict";n.d(t,{Mt:function(){return r},nW:function(){return o},pc:function(){return i}});let r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],o=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],i=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[61177,41329,66748,11340,92888,49774,40179],function(){return e(e.s=30094)}),_N_E=e.O()}]);