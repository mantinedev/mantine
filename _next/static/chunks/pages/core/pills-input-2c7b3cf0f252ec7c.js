(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7020],{19169:function(e,l,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/pills-input",function(){return n(26267)}])},26267:function(e,l,n){"use strict";n.r(l),n.d(l,{default:function(){return E}});var t=n(85893),i=n(11151),r=n(19905),a=n(9904),s=n(67294),o=n(9461),u=n(14462);let p=`
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
`,c={type:"code",component:function(){return s.createElement(o.d,{label:"PillsInput"},s.createElement(u.D.Group,null,s.createElement(u.D,null,"React"),s.createElement(u.D,null,"Vue"),s.createElement(u.D,null,"Svelte"),s.createElement(o.d.Field,{placeholder:"Enter tags"})))},code:p,maxWidth:440,centered:!0};var d=n(88005),b=Object.defineProperty,m=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,P=(e,l,n)=>l in e?b(e,l,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[l]=n,f=(e,l)=>{for(var n in l||(l={}))h.call(l,n)&&P(e,n,l[n]);if(m)for(var n of m(l))y.call(l,n)&&P(e,n,l[n]);return e};let I=`
import { PillsInput, Pill } from '@mantine/core';


function Demo() {
  return (
    <PillsInput
      label="PillsInput"
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
`,x={type:"configurator",component:function(e){return s.createElement(o.d,f({label:"PillsInput"},e),s.createElement(u.D.Group,null,s.createElement(u.D,null,"React"),s.createElement(u.D,null,"Vue"),s.createElement(u.D,null,"Svelte"),s.createElement(o.d.Field,{placeholder:"Enter tags"})))},code:I,centered:!0,maxWidth:440,controls:d.pc};var j=n(43360);let V=(0,r.A)(a.us.PillsInput);function g(e){let l=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,i.ah)(),e.components),{Demo:n,InputFeatures:r}=l;return n||w("Demo",!0),r||w("InputFeatures",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"PillsInput"})," is a utility component that can be used to create custom tag inputs, multi selects and\nother similar components. By itself it does not include any logic, it only renders given children.\nUsually, ",(0,t.jsx)(l.code,{children:"PillsInput"})," is used in combination with ",(0,t.jsx)(l.a,{href:"/core/pill",children:"Pill"})," component."]}),"\n",(0,t.jsx)(n,{data:c}),"\n",(0,t.jsx)(l.h2,{id:"input-props",children:"Input props"}),"\n",(0,t.jsx)(r,{component:"PillsInput",element:"div"}),"\n",(0,t.jsx)(n,{data:x}),"\n",(0,t.jsx)(l.h2,{id:"searchable-select-example",children:"Searchable select example"}),"\n",(0,t.jsxs)(l.p,{children:["Combine ",(0,t.jsx)(l.code,{children:"PillsInput"})," with ",(0,t.jsx)(l.a,{href:"/core/combobox",children:"Combobox"})," to create searchable multiselect:"]}),"\n",(0,t.jsx)(n,{data:j.R}),"\n",(0,t.jsx)(l.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(l.p,{children:["If ",(0,t.jsx)(l.code,{children:"PillsInput"})," is used without label prop, it will not be announced properly by screen reader:"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:"import { PillsInput } from '@mantine/core';\n\n// Inaccessible input – screen reader will not announce it properly\nfunction Demo() {\n  return (\n    <PillsInput>\n      <PillsInput.Field />\n    </PillsInput>\n  );\n}\n"})}),"\n",(0,t.jsxs)(l.p,{children:["Set ",(0,t.jsx)(l.code,{children:"aria-label"})," on the ",(0,t.jsx)(l.code,{children:"PillsInput.Field"})," component to make the input accessible.\nIn this case label will not be visible, but screen reader will announce it:"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:"import { PillsInput } from '@mantine/core';\n\n// Accessible input – it has aria-label\nfunction Demo() {\n  return (\n    <PillsInput>\n      <PillsInput.Field aria-label=\"Enter tags\" />\n    </PillsInput>\n  );\n}\n"})}),"\n",(0,t.jsxs)(l.p,{children:["If ",(0,t.jsx)(l.code,{children:"label"})," prop is set, the input will be accessible it is not required to set ",(0,t.jsx)(l.code,{children:"aria-label"}),":"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:"import { PillsInput } from '@mantine/core';\n\n// Accessible input – it has associated label element\nfunction Demo() {\n  return (\n    <PillsInput label=\"Enter tags\">\n      <PillsInput.Field />\n    </PillsInput>\n  );\n}\n"})})]})}var E=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(V,Object.assign({},e,{children:(0,t.jsx)(g,e)}))};function w(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},88005:function(e,l,n){"use strict";n.d(l,{Mt:function(){return t},nW:function(){return i},pc:function(){return r}});let t=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],i=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],r=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]}},function(e){e.O(0,[8992,178,4391,327,9774,2888,179],function(){return e(e.s=19169)}),_N_E=e.O()}]);