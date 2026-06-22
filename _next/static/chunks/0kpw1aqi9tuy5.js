(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,648863,e=>{"use strict";var t=Object.defineProperty;e.s(["__exportAll",0,(e,a)=>{let n={};for(var l in e)t(n,l,{get:e[l],enumerable:!0});return a||t(n,Symbol.toStringTag,{value:"Module"}),n}])},931882,e=>{"use strict";var t=e.i(191788),a=e.i(171481);let n=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M208,96l-80,80L48,96Z",opacity:"0.2"}),t.createElement("path",{d:"M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z"}))]]),l=t.forwardRef((e,l)=>t.createElement(a.default,{ref:l,...e,weights:n}));l.displayName="CaretDownIcon",e.s(["CaretDownIcon",0,l],931882)},960831,e=>{"use strict";e.s(["inputControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}],"inputOnlyControls",0,[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"md",libraryValue:"md"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],"inputWrapperOnlyControls",0,[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}]])},780800,e=>{"use strict";var t=e.i(391398),a=e.i(38856),n=e.i(648863),l=e.i(960831),r=e.i(856171);let i={type:"configurator",component:function(e){return(0,t.jsx)(r.NativeSelect,{...e,data:["React","Angular","Vue"]})},code:`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect{{props}} data={['React', 'Angular', 'Vue']} />;
}
`,centered:!0,maxWidth:340,controls:l.inputControls},o={type:"code",component:function(){return(0,t.jsxs)(r.NativeSelect,{label:"With children options",children:[(0,t.jsxs)("optgroup",{label:"Frontend libraries",children:[(0,t.jsx)("option",{value:"react",children:"React"}),(0,t.jsx)("option",{value:"angular",children:"Angular"}),(0,t.jsx)("option",{value:"vue",disabled:!0,children:"Vue"})]}),(0,t.jsxs)("optgroup",{label:"Backend libraries",children:[(0,t.jsx)("option",{value:"express",children:"Express"}),(0,t.jsx)("option",{value:"koa",children:"Koa"}),(0,t.jsx)("option",{value:"django",children:"Django"})]})]})},maxWidth:340,centered:!0,code:`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect label="With children options">
      <optgroup label="Frontend libraries">
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue" disabled>
          Vue
        </option>
      </optgroup>

      <optgroup label="Backend libraries">
        <option value="express">Express</option>
        <option value="koa">Koa</option>
        <option value="django">Django</option>
      </optgroup>
    </NativeSelect>
  );
}
`},c={type:"code",component:function(){return(0,t.jsx)(r.NativeSelect,{data:[{group:"Frontend libraries",items:[{label:"React",value:"react"},{label:"Angular",value:"angular"},{label:"Vue",value:"vue",disabled:!0}]},{group:"Backend libraries",items:[{label:"Express",value:"express"},{label:"Koa",value:"koa"},{label:"Django",value:"django"}]}]})},maxWidth:340,centered:!0,code:`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect
      data={[
        {
          group: 'Frontend libraries',
          items: [
            { label: 'React', value: 'react' },
            { label: 'Angular', value: 'angular' },
            { label: 'Vue', value: 'vue', disabled: true },
          ],
        },
        {
          group: 'Backend libraries',
          items: [
            { label: 'Express', value: 'express' },
            { label: 'Koa', value: 'koa' },
            { label: 'Django', value: 'django' },
          ],
        },
      ]}
    />
  );
}
`},s={type:"code",component:function(){return(0,t.jsx)(r.NativeSelect,{disabled:!0,data:["React","Angular"],label:"Disabled NativeSelect"})},maxWidth:340,centered:!0,code:`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect disabled data={['React', 'Angular']} label="Disabled NativeSelect" />;
}
`},d={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.NativeSelect,{error:!0,label:"Boolean error",data:["React","Angular"]}),(0,t.jsx)(r.NativeSelect,{error:"Error message",label:"React node error",data:["React","Angular"],mt:"md"})]})},maxWidth:340,centered:!0,code:`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <>
      <NativeSelect error label="Boolean error" data={['React', 'Angular']} />
      <NativeSelect
        error="Error message"
        label="React node error"
        data={['React', 'Angular']}
        mt="md"
      />
    </>
  );
}
`},u={type:"code",component:function(){return(0,t.jsx)(r.NativeSelect,{label:"Native Select",data:["React","Angular","Vue","Svelte"],success:"Looks good!"})},code:`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect label="Native Select" data={['React', 'Angular', 'Vue', 'Svelte']} success="Looks good!" />;
}
`,maxWidth:340,centered:!0};var p=e.i(931882),m=e.i(191788),h=e.i(171481);let v=new Map([["bold",m.createElement(m.Fragment,null,m.createElement("path",{d:"M224,84H180.2l7.61-41.85a12,12,0,0,0-23.62-4.3L155.8,84H116.2l7.61-41.85a12,12,0,1,0-23.62-4.3L91.8,84H48a12,12,0,0,0,0,24H87.44l-7.27,40H32a12,12,0,0,0,0,24H75.8l-7.61,41.85a12,12,0,0,0,9.66,14A11.43,11.43,0,0,0,80,228a12,12,0,0,0,11.8-9.86L100.2,172h39.6l-7.61,41.85a12,12,0,0,0,9.66,14,11.43,11.43,0,0,0,2.16.2,12,12,0,0,0,11.8-9.86L164.2,172H208a12,12,0,0,0,0-24H168.56l7.27-40H224a12,12,0,0,0,0-24Zm-79.83,64H104.56l7.27-40h39.61Z"}))],["duotone",m.createElement(m.Fragment,null,m.createElement("path",{d:"M165.82,96l-11.64,64h-64l11.64-64Z",opacity:"0.2"}),m.createElement("path",{d:"M224,88H175.4l8.47-46.57a8,8,0,0,0-15.74-2.86l-9,49.43H111.4l8.47-46.57a8,8,0,0,0-15.74-2.86L95.14,88H48a8,8,0,0,0,0,16H92.23L83.5,152H32a8,8,0,0,0,0,16H80.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,80,224a8,8,0,0,0,7.86-6.57l9-49.43H144.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,144,224a8,8,0,0,0,7.86-6.57l9-49.43H208a8,8,0,0,0,0-16H163.77l8.73-48H224a8,8,0,0,0,0-16Zm-76.5,64H99.77l8.73-48h47.73Z"}))],["fill",m.createElement(m.Fragment,null,m.createElement("path",{d:"M116.25,112h31.5l-8,32h-31.5ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Zm-16,56a8,8,0,0,0-8-8H168.25l7.51-30.06a8,8,0,0,0-15.52-3.88L151.75,96h-31.5l7.51-30.06a8,8,0,0,0-15.52-3.88L103.75,96H64a8,8,0,0,0,0,16H99.75l-8,32H56a8,8,0,0,0,0,16H87.75l-7.51,30.06a8,8,0,0,0,5.82,9.7,8.13,8.13,0,0,0,2,.24,8,8,0,0,0,7.75-6.06L104.25,160h31.5l-7.51,30.06a8,8,0,0,0,5.82,9.7A8.13,8.13,0,0,0,136,200a8,8,0,0,0,7.75-6.06L152.25,160H192a8,8,0,0,0,0-16H156.25l8-32H200A8,8,0,0,0,208,104Z"}))],["light",m.createElement(m.Fragment,null,m.createElement("path",{d:"M224,90H173l8.89-48.93a6,6,0,1,0-11.8-2.14L160.81,90H109l8.89-48.93a6,6,0,0,0-11.8-2.14L96.81,90H48a6,6,0,0,0,0,12H94.63l-9.46,52H32a6,6,0,0,0,0,12H83L74.1,214.93a6,6,0,0,0,4.83,7A5.64,5.64,0,0,0,80,222a6,6,0,0,0,5.89-4.93L95.19,166H147l-8.89,48.93a6,6,0,0,0,4.83,7,5.64,5.64,0,0,0,1.08.1,6,6,0,0,0,5.89-4.93L159.19,166H208a6,6,0,0,0,0-12H161.37l9.46-52H224a6,6,0,0,0,0-12Zm-74.83,64H97.37l9.46-52h51.8Z"}))],["regular",m.createElement(m.Fragment,null,m.createElement("path",{d:"M224,88H175.4l8.47-46.57a8,8,0,0,0-15.74-2.86l-9,49.43H111.4l8.47-46.57a8,8,0,0,0-15.74-2.86L95.14,88H48a8,8,0,0,0,0,16H92.23L83.5,152H32a8,8,0,0,0,0,16H80.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,80,224a8,8,0,0,0,7.86-6.57l9-49.43H144.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,144,224a8,8,0,0,0,7.86-6.57l9-49.43H208a8,8,0,0,0,0-16H163.77l8.73-48H224a8,8,0,0,0,0-16Zm-76.5,64H99.77l8.73-48h47.73Z"}))],["thin",m.createElement(m.Fragment,null,m.createElement("path",{d:"M224,92H170.61l9.33-51.28a4,4,0,1,0-7.88-1.44L162.48,92H106.61l9.33-51.28a4,4,0,1,0-7.88-1.44L98.48,92H48a4,4,0,0,0,0,8H97L86.84,156H32a4,4,0,0,0,0,8H85.39l-9.33,51.28a4,4,0,0,0,3.22,4.65A3.65,3.65,0,0,0,80,220a4,4,0,0,0,3.94-3.29L93.52,164h55.87l-9.33,51.28a4,4,0,0,0,3.22,4.65,3.65,3.65,0,0,0,.72.07,4,4,0,0,0,3.94-3.29L157.52,164H208a4,4,0,0,0,0-8H159l10.19-56H224a4,4,0,0,0,0-8Zm-73.16,64H95l10.19-56H161Z"}))]]),g=m.forwardRef((e,t)=>m.createElement(h.default,{ref:t,...e,weights:v}));g.displayName="HashIcon";let x={type:"code",component:function(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.NativeSelect,{leftSection:(0,t.jsx)(g,{size:16}),leftSectionPointerEvents:"none",label:"Left section",data:["React","Angular"]}),(0,t.jsx)(r.NativeSelect,{rightSection:(0,t.jsx)(p.CaretDownIcon,{size:16}),label:"Right section",data:["React","Angular"],mt:"md"})]})},maxWidth:340,centered:!0,code:`
import { NativeSelect } from '@mantine/core';
import { CaretDownIcon, HashIcon } from '@phosphor-icons/react';

function Demo() {
  return (
    <>
      <NativeSelect
        leftSection={<HashIcon size={16} />}
        leftSectionPointerEvents="none"
        label="Left section"
        data={['React', 'Angular']}
      />

      <NativeSelect
        rightSection={<CaretDownIcon size={16} />}
        label="Right section"
        data={['React', 'Angular']}
        mt="md"
      />
    </>
  );
}
`};var j=e.i(990730);let b=`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return <NativeSelect{{props}} data={['React', 'Angular']} label="NativeSelect label" description="NativeSelect description" error="NativeSelect error" withAsterisk />;
}
`,f={type:"styles-api",data:j.NativeSelectStylesApi,component:function(e){return(0,t.jsx)(r.NativeSelect,{...e,data:["React","Angular"],label:"NativeSelect label",description:"NativeSelect description",error:"NativeSelect error",withAsterisk:!0})},centered:!0,maxWidth:340,code:b},S={type:"code",component:function(){return(0,t.jsxs)(r.NativeSelect,{label:"With dividers",children:[(0,t.jsx)("option",{children:"Select library"}),(0,t.jsx)("hr",{}),(0,t.jsxs)("optgroup",{label:"Frontend libraries",children:[(0,t.jsx)("option",{value:"react",children:"React"}),(0,t.jsx)("option",{value:"angular",children:"Angular"}),(0,t.jsx)("option",{value:"vue",children:"Vue"})]}),(0,t.jsx)("hr",{}),(0,t.jsxs)("optgroup",{label:"Backend libraries",children:[(0,t.jsx)("option",{value:"express",children:"Express"}),(0,t.jsx)("option",{value:"koa",children:"Koa"}),(0,t.jsx)("option",{value:"django",children:"Django"})]})]})},maxWidth:340,centered:!0,code:`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect label="With dividers">
      <option>Select library</option>

      <hr />

      <optgroup label="Frontend libraries">
        <option value="react">React</option>
        <option value="angular">Angular</option>
        <option value="vue">Vue</option>
      </optgroup>

      <hr />

      <optgroup label="Backend libraries">
        <option value="express">Express</option>
        <option value="koa">Koa</option>
        <option value="django">Django</option>
      </optgroup>
    </NativeSelect>
  );
}
`},y={type:"code",component:function(){return(0,t.jsx)(r.NativeSelect,{label:"Your favorite framework",data:["React","Angular","Vue","Svelte"],loading:!0})},code:`
import { NativeSelect } from '@mantine/core';

function Demo() {
  return (
    <NativeSelect
      label="Your favorite framework"
      data={['React', 'Angular', 'Vue', 'Svelte']}
      loading
    />
  );
}
`,centered:!0,maxWidth:340};var N=(0,n.__exportAll)({data:()=>c,disabled:()=>s,dividers:()=>S,error:()=>d,loading:()=>y,options:()=>o,sections:()=>x,stylesApi:()=>f,success:()=>u,usage:()=>i});e.i(603441);var H=e.i(62558);e.i(457450);var A=e.i(418026);let V=(0,H.Layout)(A.MDX_DATA.NativeSelect);function E(e){let n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.useMDXComponents)(),...e.components},{Demo:l,InputAccessibility:r,InputFeatures:i,InputSections:o,StylesApiSelectors:c}=n;return l||w("Demo",!0),r||w("InputAccessibility",!0),i||w("InputFeatures",!0),o||w("InputSections",!0),c||w("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(i,{component:"NativeSelect",element:"select"}),"\n",(0,t.jsx)(l,{data:N.usage}),"\n",(0,t.jsx)(n.h2,{id:"loading-state",children:"Loading state"}),"\n",(0,t.jsxs)(n.p,{children:["Set ",(0,t.jsx)(n.code,{children:"loading"})," prop to display a loading indicator. By default, the loader is displayed on the right side of the input.\nYou can change the position with the ",(0,t.jsx)(n.code,{children:"loadingPosition"})," prop to ",(0,t.jsx)(n.code,{children:"'left'"})," or ",(0,t.jsx)(n.code,{children:"'right'"}),". This is useful for async operations like API calls, searches, or validations:"]}),"\n",(0,t.jsx)(l,{data:N.loading}),"\n",(0,t.jsx)(n.h2,{id:"controlled",children:"Controlled"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { useState } from 'react';\nimport { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  const [value, setValue] = useState('');\n\n  return (\n    <NativeSelect\n      value={value}\n      onChange={(event) => setValue(event.currentTarget.value)}\n      data={['React', 'Angular', 'Svelte', 'Vue']}\n    />\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"uncontrolled",children:"Uncontrolled"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"NativeSelect"})," can be used with uncontrolled forms the same way as a native ",(0,t.jsx)(n.code,{children:"select"})," element.\nSet the ",(0,t.jsx)(n.code,{children:"name"})," attribute to include native select value in ",(0,t.jsx)(n.code,{children:"FormData"})," object on form submission.\nTo control the initial value in uncontrolled forms, use the ",(0,t.jsx)(n.code,{children:"defaultValue"})," prop."]}),"\n",(0,t.jsxs)(n.p,{children:["Example usage of uncontrolled ",(0,t.jsx)(n.code,{children:"NativeSelect"})," with ",(0,t.jsx)(n.code,{children:"FormData"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <form\n      onSubmit={(event) => {\n        event.preventDefault();\n        const formData = new FormData(event.currentTarget);\n        console.log('Select value:', formData.get('framework'));\n      }}\n    >\n      <NativeSelect\n        label=\"Select a framework\"\n        name=\"framework\"\n        data={['React', 'Angular', 'Svelte', 'Vue']}\n        defaultValue=\"React\"\n      />\n      <button type=\"submit\">Submit</button>\n    </form>\n  );\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"adding-options",children:"Adding options"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"NativeSelect"})," allows passing options in two ways:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"data"})," prop array"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"children"})," prop with ",(0,t.jsx)(n.code,{children:"option"})," components"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Note that if ",(0,t.jsx)(n.code,{children:"children"})," is used, the ",(0,t.jsx)(n.code,{children:"data"})," will be ignored."]}),"\n",(0,t.jsx)(n.h3,{id:"data-prop",children:"data prop"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"data"})," prop accepts values in one of the following formats:"]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Array of strings:"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <NativeSelect data={['React', 'Angular', 'Svelte', 'Vue']} />\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Array of objects with ",(0,t.jsx)(n.code,{children:"label"}),", ",(0,t.jsx)(n.code,{children:"value"})," and ",(0,t.jsx)(n.code,{children:"disabled"})," keys:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <NativeSelect\n      data={[\n        { label: 'React', value: 'react' },\n        { label: 'Angular', value: 'angular' },\n        { label: 'Svelte', value: 'svelte', disabled: true },\n        { label: 'Vue', value: 'vue' },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Array of grouped options (string format):"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <NativeSelect\n      data={[\n        {\n          group: 'Frontend libraries',\n          items: ['React', 'Angular', 'Svelte', 'Vue'],\n        },\n        {\n          group: 'Backend libraries',\n          items: ['Express', 'Koa', 'Django'],\n        },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Array of grouped options (object format):"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",children:"import { NativeSelect } from '@mantine/core';\n\nfunction Demo() {\n  return (\n    <NativeSelect\n      data={[\n        {\n          group: 'Frontend libraries',\n          items: [\n            { label: 'React', value: 'react' },\n            { label: 'Angular', value: 'angular' },\n            { label: 'Vue', value: 'vue', disabled: true },\n          ],\n        },\n        {\n          group: 'Backend libraries',\n          items: [\n            { label: 'Express', value: 'express' },\n            { label: 'Koa', value: 'koa' },\n            { label: 'Django', value: 'django' },\n          ],\n        },\n      ]}\n    />\n  );\n}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example of the ",(0,t.jsx)(n.code,{children:"data"})," prop with an array of grouped options:"]}),"\n",(0,t.jsx)(l,{data:N.data}),"\n",(0,t.jsx)(n.h3,{id:"children-options",children:"children options"}),"\n",(0,t.jsxs)(n.p,{children:["To add options with the ",(0,t.jsx)(n.code,{children:"children"})," prop, use ",(0,t.jsx)(n.code,{children:"option"})," elements to add options and ",(0,t.jsx)(n.code,{children:"optgroup"}),"\nelements to group them:"]}),"\n",(0,t.jsx)(l,{data:N.options}),"\n",(0,t.jsx)(n.h2,{id:"with-dividers",children:"With dividers"}),"\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"hr"})," tags to add dividers between options:"]}),"\n",(0,t.jsx)(l,{data:N.dividers}),"\n",(0,t.jsx)(o,{component:"NativeSelect"}),"\n",(0,t.jsx)(l,{data:N.sections}),"\n",(0,t.jsx)(n.h2,{id:"disabled-state",children:"Disabled state"}),"\n",(0,t.jsx)(l,{data:N.disabled}),"\n",(0,t.jsx)(n.h2,{id:"error-state",children:"Error state"}),"\n",(0,t.jsx)(l,{data:N.error}),"\n",(0,t.jsx)(n.h2,{id:"success-state",children:"Success state"}),"\n",(0,t.jsx)(l,{data:N.success}),"\n",(0,t.jsx)(c,{component:"NativeSelect"}),"\n",(0,t.jsx)(l,{data:N.stylesApi}),"\n",(0,t.jsx)(r,{component:"NativeSelect"})]})}function w(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}e.s(["default",0,function(e={}){return(0,t.jsx)(V,{...e,children:(0,t.jsx)(E,{...e})})}],780800)},47906,(e,t,a)=>{let n="/core/native-select";(window.__NEXT_P=window.__NEXT_P||[]).push([n,()=>e.r(780800)]),t.hot&&t.hot.dispose(function(){window.__NEXT_P.push([n])})},648761,e=>{e.v(t=>Promise.all(["static/chunks/22379_btw709h.js"].map(t=>e.l(t))).then(()=>t(493594)))},828805,e=>{e.v(t=>Promise.all(["static/chunks/4558t_0mgc5j4.js"].map(t=>e.l(t))).then(()=>t(879466)))}]);