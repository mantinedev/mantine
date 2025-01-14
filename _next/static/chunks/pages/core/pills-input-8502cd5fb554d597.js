(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[67020],{72852:function(e,l,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/pills-input",function(){return n(77282)}])},77282:function(e,l,n){"use strict";n.r(l),n.d(l,{default:function(){return h}});var t=n(52322),i=n(45392),o=n(92258),r=n(45855);let a={type:"code",component:function(){return(0,t.jsx)(o.d,{label:"PillsInput",children:(0,t.jsxs)(r.D.Group,{children:[(0,t.jsx)(r.D,{children:"React"}),(0,t.jsx)(r.D,{children:"Vue"}),(0,t.jsx)(r.D,{children:"Svelte"}),(0,t.jsx)(o.d.Field,{placeholder:"Enter tags"})]})})},code:`
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
`,maxWidth:440,centered:!0},s={type:"configurator",component:function(e){return(0,t.jsx)(o.d,{...e,children:(0,t.jsxs)(r.D.Group,{children:[(0,t.jsx)(r.D,{children:"React"}),(0,t.jsx)(r.D,{children:"Vue"}),(0,t.jsx)(r.D,{children:"Svelte"}),(0,t.jsx)(o.d.Field,{placeholder:"Enter tags"})]})})},code:`
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
`,centered:!0,maxWidth:440,controls:n(76528).pc};var u=n(83355),c=n(54078),p=n(15019);let d=(0,c.A)(p.us.PillsInput);function m(e){let l={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Demo:n,InputFeatures:o}=l;return n||b("Demo",!0),o||b("InputFeatures",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.code,{children:"PillsInput"})," is a utility component that can be used to create custom tag inputs, multi selects and\nother similar components. By itself it does not include any logic, it only renders given children.\nUsually, ",(0,t.jsx)(l.code,{children:"PillsInput"})," is used in combination with ",(0,t.jsx)(l.a,{href:"/core/pill",children:"Pill"})," component."]}),"\n",(0,t.jsx)(n,{data:a}),"\n",(0,t.jsx)(l.h2,{id:"input-props",children:"Input props"}),"\n",(0,t.jsx)(o,{component:"PillsInput",element:"div"}),"\n",(0,t.jsx)(n,{data:s}),"\n",(0,t.jsx)(l.h2,{id:"searchable-select-example",children:"Searchable select example"}),"\n",(0,t.jsxs)(l.p,{children:["Combine ",(0,t.jsx)(l.code,{children:"PillsInput"})," with ",(0,t.jsx)(l.a,{href:"/core/combobox",children:"Combobox"})," to create searchable multiselect:"]}),"\n",(0,t.jsx)(n,{data:u.R}),"\n",(0,t.jsx)(l.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,t.jsxs)(l.p,{children:["If ",(0,t.jsx)(l.code,{children:"PillsInput"})," is used without label prop, it will not be announced properly by screen reader:"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:"import { PillsInput } from '@mantine/core';\n\n// Inaccessible input – screen reader will not announce it properly\nfunction Demo() {\n  return (\n    <PillsInput>\n      <PillsInput.Field />\n    </PillsInput>\n  );\n}\n"})}),"\n",(0,t.jsxs)(l.p,{children:["Set ",(0,t.jsx)(l.code,{children:"aria-label"})," on the ",(0,t.jsx)(l.code,{children:"PillsInput.Field"})," component to make the input accessible.\nIn this case label will not be visible, but screen reader will announce it:"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:"import { PillsInput } from '@mantine/core';\n\n// Accessible input – it has aria-label\nfunction Demo() {\n  return (\n    <PillsInput>\n      <PillsInput.Field aria-label=\"Enter tags\" />\n    </PillsInput>\n  );\n}\n"})}),"\n",(0,t.jsxs)(l.p,{children:["If ",(0,t.jsx)(l.code,{children:"label"})," prop is set, the input will be accessible it is not required to set ",(0,t.jsx)(l.code,{children:"aria-label"}),":"]}),"\n",(0,t.jsx)(l.pre,{children:(0,t.jsx)(l.code,{className:"language-tsx",children:"import { PillsInput } from '@mantine/core';\n\n// Accessible input – it has associated label element\nfunction Demo() {\n  return (\n    <PillsInput label=\"Enter tags\">\n      <PillsInput.Field />\n    </PillsInput>\n  );\n}\n"})})]})}function h(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(d,{...e,children:(0,t.jsx)(m,{...e})})}function b(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},83355:function(e,l,n){"use strict";n.d(l,{R:function(){return d}});var t=n(52322),i=n(2784),o=n(56237),r=n(45855),a=n(61324),s=n(93010),u=n(40284),c=n(92258);let p=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],d={type:"code",component:function(){let e=(0,o.K)({onDropdownClose:()=>e.resetSelectedOption(),onDropdownOpen:()=>e.updateSelectedOptionIndex("active")}),[l,n]=(0,i.useState)(""),[d,m]=(0,i.useState)([]),h=e=>m(l=>l.filter(l=>l!==e)),b=d.map(e=>(0,t.jsx)(r.D,{withRemoveButton:!0,onRemove:()=>h(e),children:e},e)),x=p.filter(e=>e.toLowerCase().includes(l.trim().toLowerCase())).map(e=>(0,t.jsx)(a.h.Option,{value:e,active:d.includes(e),children:(0,t.jsxs)(s.Z,{gap:"sm",children:[d.includes(e)?(0,t.jsx)(u.n,{size:12}):null,(0,t.jsx)("span",{children:e})]})},e));return(0,t.jsxs)(a.h,{store:e,onOptionSubmit:e=>m(l=>l.includes(e)?l.filter(l=>l!==e):[...l,e]),children:[(0,t.jsx)(a.h.DropdownTarget,{children:(0,t.jsx)(c.d,{onClick:()=>e.openDropdown(),children:(0,t.jsxs)(r.D.Group,{children:[b,(0,t.jsx)(a.h.EventsTarget,{children:(0,t.jsx)(c.d.Field,{onFocus:()=>e.openDropdown(),onBlur:()=>e.closeDropdown(),value:l,placeholder:"Search values",onChange:l=>{e.updateSelectedOptionIndex(),n(l.currentTarget.value)},onKeyDown:e=>{"Backspace"===e.key&&0===l.length&&(e.preventDefault(),h(d[d.length-1]))}})})]})})}),(0,t.jsx)(a.h.Dropdown,{children:(0,t.jsx)(a.h.Options,{children:x.length>0?x:(0,t.jsx)(a.h.Empty,{children:"Nothing found..."})})})]})},code:`
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
`,centered:!0,defaultExpanded:!1,maxWidth:340}},76528:function(e,l,n){"use strict";n.d(l,{Mt:function(){return t},nW:function(){return i},pc:function(){return o}});let t=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],i=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},45855:function(e,l,n){"use strict";n.d(l,{D:function(){return P}});var t=n(52322);n(2784);var i=n(91482),o=n(11200),r=n(38483),a=n(46690),s=n(28559),u=n(82027),c=n(2670),p=n(7450);let[d,m]=(0,n(75336).V)();var h={root:"m_7cda1cd6","root--default":"m_44da308b","root--contrast":"m_e3a01f8",label:"m_1e0e6180",remove:"m_ae386778",group:"m_1dcfd90b"};let b={},x=(0,o.Z)((e,{gap:l},{size:n})=>({group:{"--pg-gap":void 0!==l?(0,i.ap)(l):(0,i.ap)(n,"pg-gap")}})),f=(0,u.d5)((e,l)=>{let n=(0,r.w)("PillGroup",b,e),{classNames:i,className:o,style:u,styles:c,unstyled:m,vars:f,size:v,disabled:y,...P}=n,g=(0,p.D)(),j=g?.size||v||void 0,I=(0,a.y)({name:"PillGroup",classes:h,props:n,className:o,style:u,classNames:i,styles:c,unstyled:m,vars:f,varsResolver:x,stylesCtx:{size:j},rootSelector:"group"});return(0,t.jsx)(d,{value:{size:j,disabled:y},children:(0,t.jsx)(s.x,{ref:l,size:j,...I("group"),...P})})});f.classes=h,f.displayName="@mantine/core/PillGroup";let v={variant:"default"},y=(0,o.Z)((e,{radius:l},{size:n})=>({root:{"--pill-fz":(0,i.ap)(n,"pill-fz"),"--pill-height":(0,i.ap)(n,"pill-height"),"--pill-radius":void 0===l?void 0:(0,i.H5)(l)}})),P=(0,u.d5)((e,l)=>{let n=(0,r.w)("Pill",v,e),{classNames:i,className:o,style:u,styles:d,unstyled:b,vars:x,variant:f,children:P,withRemoveButton:g,onRemove:j,removeButtonProps:I,radius:w,size:D,disabled:V,mod:C,...S}=n,E=m(),F=(0,p.D)(),k=D||E?.size||void 0,_=F?.variant==="filled"?"contrast":f||"default",z=(0,a.y)({name:"Pill",classes:h,props:n,className:o,style:u,classNames:i,styles:d,unstyled:b,vars:x,varsResolver:y,stylesCtx:{size:k}});return(0,t.jsxs)(s.x,{component:"span",ref:l,variant:_,size:k,...z("root",{variant:_}),mod:[{"with-remove":g&&!V,disabled:V||E?.disabled},C],...S,children:[(0,t.jsx)("span",{...z("label"),children:P}),g&&(0,t.jsx)(c.P,{variant:"transparent",radius:w,tabIndex:-1,"aria-hidden":!0,unstyled:b,...I,...z("remove",{className:I?.className,style:I?.style}),onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),I?.onMouseDown?.(e)},onClick:e=>{e.stopPropagation(),j?.(),I?.onClick?.(e)}})]})});P.classes=h,P.displayName="@mantine/core/Pill",P.Group=f},7450:function(e,l,n){"use strict";n.d(l,{D:function(){return i},H:function(){return t}}),n(2784),n(52322);let[t,i]=(0,n(75336).V)()},92258:function(e,l,n){"use strict";n.d(l,{d:function(){return f}});var t=n(52322),i=n(2784),o=n(38483),r=n(82027),a=n(73063),s=n(7450),u=n(70837),c=n(46690),p=n(28559),d=n(69349),m={field:"m_45c4369d"};let h={type:"visible"},b=(0,r.d5)((e,l)=>{let n=(0,o.w)("PillsInputField",h,e),{classNames:i,className:r,style:a,styles:b,unstyled:x,vars:f,type:v,disabled:y,id:P,pointer:g,mod:j,...I}=n,w=(0,s.D)(),D=(0,d.D)(),V=(0,c.y)({name:"PillsInputField",classes:m,props:n,className:r,style:a,classNames:i,styles:b,unstyled:x,rootSelector:"field"}),C=y||w?.disabled;return(0,t.jsx)(p.x,{component:"input",ref:(0,u.Yx)(l,w?.fieldRef),"data-type":v,disabled:C,mod:[{disabled:C,pointer:g},j],...V("field"),...I,id:D?.inputId||P,"aria-invalid":w?.hasError,"aria-describedby":D?.describedBy,type:"text",onMouseDown:e=>!g&&e.stopPropagation()})});b.classes=m,b.displayName="@mantine/core/PillsInputField";let x={},f=(0,r.d5)((e,l)=>{let{children:n,onMouseDown:r,onClick:u,size:c,disabled:p,__staticSelector:d,error:m,variant:h,...b}=(0,o.w)("PillsInput",x,e),f=(0,i.useRef)(null);return(0,t.jsx)(s.H,{value:{fieldRef:f,size:c,disabled:p,hasError:!!m,variant:h},children:(0,t.jsx)(a.M,{size:c,error:m,variant:h,component:"div",ref:l,onMouseDown:e=>{e.preventDefault(),r?.(e),f.current?.focus()},onClick:e=>{e.preventDefault(),u?.(e),f.current?.focus()},...b,multiline:!0,disabled:p,__staticSelector:d||"PillsInput",withAria:!1,children:n})})});f.displayName="@mantine/core/PillsInput",f.Field=b}},function(e){e.O(0,[61177,66748,61639,61324,92888,49774,40179],function(){return e(e.s=72852)}),_N_E=e.O()}]);