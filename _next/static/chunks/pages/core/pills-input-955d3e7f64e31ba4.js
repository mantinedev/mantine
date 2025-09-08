(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41799],{10379:(e,l,i)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/pills-input",function(){return i(80635)}])},55661:(e,l,i)=>{"use strict";i.d(l,{$7:()=>r,l$:()=>n,wQ:()=>t});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],t=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},80635:(e,l,i)=>{"use strict";i.r(l),i.d(l,{default:()=>m});var n=i(6029),t=i(16285),r=i(8122),a=i(67023);let s={type:"code",component:function(){return(0,n.jsx)(r.t,{label:"PillsInput",children:(0,n.jsxs)(a.a.Group,{children:[(0,n.jsx)(a.a,{children:"React"}),(0,n.jsx)(a.a,{children:"Vue"}),(0,n.jsx)(a.a,{children:"Svelte"}),(0,n.jsx)(r.t.Field,{placeholder:"Enter tags"})]})})},code:`
import { PillsInput, Pill } from '@mantine/core';

function Demo() {
  return (
    <PillsInput label="PillsInput">
      <Pill.Group>
        <Pill>React</Pill>
        <Pill>Vue</Pill>
        <Pill>Svelte</Pill>
        <PillsInput.Field placeholder="Enter tags" />
      </Pill.Group>
    </PillsInput>
  );
}
`,maxWidth:440,centered:!0};var o=i(55661);let p={type:"configurator",component:function(e){return(0,n.jsx)(r.t,{...e,children:(0,n.jsxs)(a.a.Group,{children:[(0,n.jsx)(a.a,{children:"React"}),(0,n.jsx)(a.a,{children:"Vue"}),(0,n.jsx)(a.a,{children:"Svelte"}),(0,n.jsx)(r.t.Field,{placeholder:"Enter tags"})]})})},code:`
import { PillsInput, Pill } from '@mantine/core';


function Demo() {
  return (
    <PillsInput
      {{props}}
    >
      <Pill.Group>
        <Pill>React</Pill>
        <Pill>Vue</Pill>
        <Pill>Svelte</Pill>
        <PillsInput.Field placeholder="Enter tags" />
      </Pill.Group>
    </PillsInput>
  );
}
`,centered:!0,maxWidth:440,controls:o.$7};var u=i(41008),c=i(38547),d=i(5262);let h=(0,c.P)(d.XZ.PillsInput);function b(e){let l={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components},{Demo:i,InputFeatures:r}=l;return i||x("Demo",!0),r||x("InputFeatures",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.code,{children:"PillsInput"})," is a utility component that can be used to create custom tag inputs, multi selects and\nother similar components. By itself it does not include any logic, it only renders given children.\nUsually, ",(0,n.jsx)(l.code,{children:"PillsInput"})," is used in combination with ",(0,n.jsx)(l.a,{href:"/core/pill",children:"Pill"})," component."]}),"\n",(0,n.jsx)(i,{data:s}),"\n",(0,n.jsx)(l.h2,{id:"input-props",children:"Input props"}),"\n",(0,n.jsx)(r,{component:"PillsInput",element:"div"}),"\n",(0,n.jsx)(i,{data:p}),"\n",(0,n.jsx)(l.h2,{id:"searchable-select-example",children:"Searchable select example"}),"\n",(0,n.jsxs)(l.p,{children:["Combine ",(0,n.jsx)(l.code,{children:"PillsInput"})," with ",(0,n.jsx)(l.a,{href:"/core/combobox",children:"Combobox"})," to create searchable multiselect:"]}),"\n",(0,n.jsx)(i,{data:u.Q}),"\n",(0,n.jsx)(l.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(l.p,{children:["If ",(0,n.jsx)(l.code,{children:"PillsInput"})," is used without label prop, it will not be announced properly by screen reader:"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import { PillsInput } from '@mantine/core';\n\n// Inaccessible input – screen reader will not announce it properly\nfunction Demo() {\n  return (\n    <PillsInput>\n      <PillsInput.Field />\n    </PillsInput>\n  );\n}\n"})}),"\n",(0,n.jsxs)(l.p,{children:["Set ",(0,n.jsx)(l.code,{children:"aria-label"})," on the ",(0,n.jsx)(l.code,{children:"PillsInput.Field"})," component to make the input accessible.\nIn this case label will not be visible, but screen reader will announce it:"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import { PillsInput } from '@mantine/core';\n\n// Accessible input – it has aria-label\nfunction Demo() {\n  return (\n    <PillsInput>\n      <PillsInput.Field aria-label=\"Enter tags\" />\n    </PillsInput>\n  );\n}\n"})}),"\n",(0,n.jsxs)(l.p,{children:["If ",(0,n.jsx)(l.code,{children:"label"})," prop is set, the input will be accessible it is not required to set ",(0,n.jsx)(l.code,{children:"aria-label"}),":"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import { PillsInput } from '@mantine/core';\n\n// Accessible input – it has associated label element\nfunction Demo() {\n  return (\n    <PillsInput label=\"Enter tags\">\n      <PillsInput.Field />\n    </PillsInput>\n  );\n}\n"})})]})}function m(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(h,{...e,children:(0,n.jsx)(b,{...e})})}function x(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}},e=>{e.O(0,[38547,2061,17159,90636,46593,38792],()=>e(e.s=10379)),_N_E=e.O()}]);