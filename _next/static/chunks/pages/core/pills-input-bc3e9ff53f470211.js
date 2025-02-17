(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[41799],{61835:(e,l,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/pills-input",function(){return n(99196)}])},99196:(e,l,n)=>{"use strict";n.r(l),n.d(l,{default:()=>b});var t=n(31085),i=n(71184),o=n(42215),r=n(31778);let a={type:"code",component:function(){return(0,t.jsx)(o.t,{label:"PillsInput",children:(0,t.jsxs)(r.a.Group,{children:[(0,t.jsx)(r.a,{children:"React"}),(0,t.jsx)(r.a,{children:"Vue"}),(0,t.jsx)(r.a,{children:"Svelte"}),(0,t.jsx)(o.t.Field,{placeholder:"Enter tags"})]})})},code:`
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
`,maxWidth:440,centered:!0},s={type:"configurator",component:function(e){return(0,t.jsx)(o.t,{...e,children:(0,t.jsxs)(r.a.Group,{children:[(0,t.jsx)(r.a,{children:"React"}),(0,t.jsx)(r.a,{children:"Vue"}),(0,t.jsx)(r.a,{children:"Svelte"}),(0,t.jsx)(o.t.Field,{placeholder:"Enter tags"})]})})},code:`
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
`,centered:!0,maxWidth:440,controls:n(23232).$7};var p=n(23145),c=n(85954),u=n(38215);let d=(0,c.P)(u.XZ.PillsInput);function m(e){let l={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components},{Demo:n,InputFeatures:o}=l;return n||h("Demo",!0),o||h("InputFeatures",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"PillsInput"})," is a utility component that can be used to create custom tag inputs, multi selects and\nother similar components. By itself it does not include any logic, it only renders given children.\nUsually, ",(0,t.jsx)(l.code,{children:"PillsInput"})," is used in combination with ",(0,t.jsx)(l.a,{href:"/core/pill",children:"Pill"})," component."]}),"\n",(0,t.jsx)(n,{data:a}),"\n",(0,t.jsx)(l.h2,{id:"input-props",children:"Input props"}),"\n",(0,t.jsx)(o,{component:"PillsInput",element:"div"}),"\n",(0,t.jsx)(n,{data:s}),"\n",(0,t.jsx)(l.h2,{id:"searchable-select-example",children:"Searchable select example"}),"\n",(0,t.jsxs)(l.p,{children:["Combine ",(0,t.jsx)(l.code,{children:"PillsInput"})," with ",(0,t.jsx)(l.a,{href:"/core/combobox",children:"Combobox"})," to create searchable multiselect:"]}),"\n",(0,t.jsx)(n,{data:p.Q}),"\n",(0,t.jsx)(l.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(l.p,{children:["If ",(0,t.jsx)(l.code,{children:"PillsInput"})," is used without label prop, it will not be announced properly by screen reader:"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:"import { PillsInput } from '@mantine/core';\n\n// Inaccessible input – screen reader will not announce it properly\nfunction Demo() {\n  return (\n    <PillsInput>\n      <PillsInput.Field />\n    </PillsInput>\n  );\n}\n"})}),"\n",(0,t.jsxs)(l.p,{children:["Set ",(0,t.jsx)(l.code,{children:"aria-label"})," on the ",(0,t.jsx)(l.code,{children:"PillsInput.Field"})," component to make the input accessible.\nIn this case label will not be visible, but screen reader will announce it:"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:"import { PillsInput } from '@mantine/core';\n\n// Accessible input – it has aria-label\nfunction Demo() {\n  return (\n    <PillsInput>\n      <PillsInput.Field aria-label=\"Enter tags\" />\n    </PillsInput>\n  );\n}\n"})}),"\n",(0,t.jsxs)(l.p,{children:["If ",(0,t.jsx)(l.code,{children:"label"})," prop is set, the input will be accessible it is not required to set ",(0,t.jsx)(l.code,{children:"aria-label"}),":"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:"import { PillsInput } from '@mantine/core';\n\n// Accessible input – it has associated label element\nfunction Demo() {\n  return (\n    <PillsInput label=\"Enter tags\">\n      <PillsInput.Field />\n    </PillsInput>\n  );\n}\n"})})]})}function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(d,{...e,children:(0,t.jsx)(m,{...e})})}function h(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},23145:(e,l,n)=>{"use strict";n.d(l,{Q:()=>d});var t=n(31085),i=n(14041),o=n(88559),r=n(31778),a=n(31791),s=n(56051),p=n(5583),c=n(42215);let u=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],d={type:"code",component:function(){let e=(0,o.B)({onDropdownClose:()=>e.resetSelectedOption(),onDropdownOpen:()=>e.updateSelectedOptionIndex("active")}),[l,n]=(0,i.useState)(""),[d,m]=(0,i.useState)([]),b=e=>m(l=>l.filter(l=>l!==e)),h=d.map(e=>(0,t.jsx)(r.a,{withRemoveButton:!0,onRemove:()=>b(e),children:e},e)),x=u.filter(e=>e.toLowerCase().includes(l.trim().toLowerCase())).map(e=>(0,t.jsx)(a.G.Option,{value:e,active:d.includes(e),children:(0,t.jsxs)(s.Y,{gap:"sm",children:[d.includes(e)?(0,t.jsx)(p.S,{size:12}):null,(0,t.jsx)("span",{children:e})]})},e));return(0,t.jsxs)(a.G,{store:e,onOptionSubmit:e=>m(l=>l.includes(e)?l.filter(l=>l!==e):[...l,e]),children:[(0,t.jsx)(a.G.DropdownTarget,{children:(0,t.jsx)(c.t,{onClick:()=>e.openDropdown(),children:(0,t.jsxs)(r.a.Group,{children:[h,(0,t.jsx)(a.G.EventsTarget,{children:(0,t.jsx)(c.t.Field,{onFocus:()=>e.openDropdown(),onBlur:()=>e.closeDropdown(),value:l,placeholder:"Search values",onChange:l=>{e.updateSelectedOptionIndex(),n(l.currentTarget.value)},onKeyDown:e=>{"Backspace"===e.key&&0===l.length&&(e.preventDefault(),b(d[d.length-1]))}})})]})})}),(0,t.jsx)(a.G.Dropdown,{children:(0,t.jsx)(a.G.Options,{children:x.length>0?x:(0,t.jsx)(a.G.Empty,{children:"Nothing found..."})})})]})},code:`
import { useState } from 'react';
import { PillsInput, Pill, Combobox, CheckIcon, Group, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [search, setSearch] = useState('');
  const [value, setValue] = useState<string[]>([]);

  const handleValueSelect = (val: string) =>
    setValue((current) =>
      current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
    );

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value.map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  const options = groceries
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option value={item} key={item} active={value.includes(item)}>
        <Group gap="sm">
          {value.includes(item) ? <CheckIcon size={12} /> : null}
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect}>
      <Combobox.DropdownTarget>
        <PillsInput onClick={() => combobox.openDropdown()}>
          <Pill.Group>
            {values}

            <Combobox.EventsTarget>
              <PillsInput.Field
                onFocus={() => combobox.openDropdown()}
                onBlur={() => combobox.closeDropdown()}
                value={search}
                placeholder="Search values"
                onChange={(event) => {
                  combobox.updateSelectedOptionIndex();
                  setSearch(event.currentTarget.value);
                }}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' && search.length === 0) {
                    event.preventDefault();
                    handleValueRemove(value[value.length - 1]);
                  }
                }}
              />
            </Combobox.EventsTarget>
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? options : <Combobox.Empty>Nothing found...</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,centered:!0,defaultExpanded:!1,maxWidth:340}},23232:(e,l,n)=>{"use strict";n.d(l,{$7:()=>o,l$:()=>t,wQ:()=>i});let t=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],i=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},31778:(e,l,n)=>{"use strict";n.d(l,{a:()=>f});var t=n(31085);n(14041);var i=n(33450),o=n(7098),r=n(29686),a=n(69564),s=n(34056),p=n(6754),c=n(94310),u=n(73418);let[d,m]=(0,n(49128).e)();var b={root:"m_7cda1cd6","root--default":"m_44da308b","root--contrast":"m_e3a01f8",label:"m_1e0e6180",remove:"m_ae386778",group:"m_1dcfd90b"};let h={},x=(0,o.V)((e,{gap:l},{size:n})=>({group:{"--pg-gap":void 0!==l?(0,i.YC)(l):(0,i.YC)(n,"pg-gap")}})),v=(0,p.P9)((e,l)=>{let n=(0,r.Y)("PillGroup",h,e),{classNames:i,className:o,style:p,styles:c,unstyled:m,vars:v,size:P,disabled:y,...f}=n,g=(0,u.n)(),j=g?.size||P||void 0,I=(0,a.I)({name:"PillGroup",classes:b,props:n,className:o,style:p,classNames:i,styles:c,unstyled:m,vars:v,varsResolver:x,stylesCtx:{size:j},rootSelector:"group"});return(0,t.jsx)(d,{value:{size:j,disabled:y},children:(0,t.jsx)(s.a,{ref:l,size:j,...I("group"),...f})})});v.classes=b,v.displayName="@mantine/core/PillGroup";let P={variant:"default"},y=(0,o.V)((e,{radius:l},{size:n})=>({root:{"--pill-fz":(0,i.YC)(n,"pill-fz"),"--pill-height":(0,i.YC)(n,"pill-height"),"--pill-radius":void 0===l?void 0:(0,i.nJ)(l)}})),f=(0,p.P9)((e,l)=>{let n=(0,r.Y)("Pill",P,e),{classNames:i,className:o,style:p,styles:d,unstyled:h,vars:x,variant:v,children:f,withRemoveButton:g,onRemove:j,removeButtonProps:I,radius:w,size:V,disabled:C,mod:D,...S}=n,E=m(),F=(0,u.n)(),G=V||E?.size||void 0,k=F?.variant==="filled"?"contrast":v||"default",_=(0,a.I)({name:"Pill",classes:b,props:n,className:o,style:p,classNames:i,styles:d,unstyled:h,vars:x,varsResolver:y,stylesCtx:{size:G}});return(0,t.jsxs)(s.a,{component:"span",ref:l,variant:k,size:G,..._("root",{variant:k}),mod:[{"with-remove":g&&!C,disabled:C||E?.disabled},D],...S,children:[(0,t.jsx)("span",{..._("label"),children:f}),g&&(0,t.jsx)(c.J,{variant:"transparent",radius:w,tabIndex:-1,"aria-hidden":!0,unstyled:h,...I,..._("remove",{className:I?.className,style:I?.style}),onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),I?.onMouseDown?.(e)},onClick:e=>{e.stopPropagation(),j?.(),I?.onClick?.(e)}})]})});f.classes=b,f.displayName="@mantine/core/Pill",f.Group=v},73418:(e,l,n)=>{"use strict";n.d(l,{n:()=>i,q:()=>t}),n(14041),n(31085);let[t,i]=(0,n(49128).e)()},42215:(e,l,n)=>{"use strict";n.d(l,{t:()=>v});var t=n(31085),i=n(14041),o=n(29686),r=n(6754),a=n(87059),s=n(73418),p=n(34321),c=n(69564),u=n(34056),d=n(62363),m={field:"m_45c4369d"};let b={type:"visible"},h=(0,r.P9)((e,l)=>{let n=(0,o.Y)("PillsInputField",b,e),{classNames:i,className:r,style:a,styles:h,unstyled:x,vars:v,type:P,disabled:y,id:f,pointer:g,mod:j,...I}=n,w=(0,s.n)(),V=(0,d.e)(),C=(0,c.I)({name:"PillsInputField",classes:m,props:n,className:r,style:a,classNames:i,styles:h,unstyled:x,rootSelector:"field"}),D=y||w?.disabled;return(0,t.jsx)(u.a,{component:"input",ref:(0,p.pc)(l,w?.fieldRef),"data-type":P,disabled:D,mod:[{disabled:D,pointer:g},j],...C("field"),...I,id:V?.inputId||f,"aria-invalid":w?.hasError,"aria-describedby":V?.describedBy,type:"text",onMouseDown:e=>!g&&e.stopPropagation()})});h.classes=m,h.displayName="@mantine/core/PillsInputField";let x={},v=(0,r.P9)((e,l)=>{let{children:n,onMouseDown:r,onClick:p,size:c,disabled:u,__staticSelector:d,error:m,variant:b,...h}=(0,o.Y)("PillsInput",x,e),v=(0,i.useRef)(null);return(0,t.jsx)(s.q,{value:{fieldRef:v,size:c,disabled:u,hasError:!!m,variant:b},children:(0,t.jsx)(a.O,{size:c,error:m,variant:b,component:"div",ref:l,onMouseDown:e=>{e.preventDefault(),r?.(e),v.current?.focus()},onClick:e=>{e.preventDefault(),p?.(e),v.current?.focus()},...h,multiline:!0,disabled:u,__staticSelector:d||"PillsInput",withAria:!1,children:n})})});v.displayName="@mantine/core/PillsInput",v.Field=h}},e=>{var l=l=>e(e.s=l);e.O(0,[67456,39699,68831,31791,90636,46593,38792],()=>l(61835)),_N_E=e.O()}]);