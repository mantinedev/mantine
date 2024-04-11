(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[67020],{72852:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/pills-input",function(){return l(77282)}])},77282:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return x}});var n=l(52322),i=l(45392),o=l(2784),r=l(92258),a=l(45855);let s=`
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
`,u={type:"code",component:function(){return o.createElement(r.d,{label:"PillsInput"},o.createElement(a.D.Group,null,o.createElement(a.D,null,"React"),o.createElement(a.D,null,"Vue"),o.createElement(a.D,null,"Svelte"),o.createElement(r.d.Field,{placeholder:"Enter tags"})))},code:s,maxWidth:440,centered:!0};var c=l(76528);let p=`
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
`,d={type:"configurator",component:function(e){return o.createElement(r.d,{...e},o.createElement(a.D.Group,null,o.createElement(a.D,null,"React"),o.createElement(a.D,null,"Vue"),o.createElement(a.D,null,"Svelte"),o.createElement(r.d.Field,{placeholder:"Enter tags"})))},code:p,centered:!0,maxWidth:440,controls:c.pc};var m=l(83355),b=l(79016),h=l(33638);let f=(0,b.A)(h.us.PillsInput);function v(e){let t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Demo:l,InputFeatures:o}=t;return l||y("Demo",!0),o||y("InputFeatures",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"PillsInput"})," is a utility component that can be used to create custom tag inputs, multi selects and\nother similar components. By itself it does not include any logic, it only renders given children.\nUsually, ",(0,n.jsx)(t.code,{children:"PillsInput"})," is used in combination with ",(0,n.jsx)(t.a,{href:"/core/pill",children:"Pill"})," component."]}),"\n",(0,n.jsx)(l,{data:u}),"\n",(0,n.jsx)(t.h2,{id:"input-props",children:"Input props"}),"\n",(0,n.jsx)(o,{component:"PillsInput",element:"div"}),"\n",(0,n.jsx)(l,{data:d}),"\n",(0,n.jsx)(t.h2,{id:"searchable-select-example",children:"Searchable select example"}),"\n",(0,n.jsxs)(t.p,{children:["Combine ",(0,n.jsx)(t.code,{children:"PillsInput"})," with ",(0,n.jsx)(t.a,{href:"/core/combobox",children:"Combobox"})," to create searchable multiselect:"]}),"\n",(0,n.jsx)(l,{data:m.R}),"\n",(0,n.jsx)(t.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(t.p,{children:["If ",(0,n.jsx)(t.code,{children:"PillsInput"})," is used without label prop, it will not be announced properly by screen reader:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { PillsInput } from '@mantine/core';\n\n// Inaccessible input – screen reader will not announce it properly\nfunction Demo() {\n  return (\n    <PillsInput>\n      <PillsInput.Field />\n    </PillsInput>\n  );\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Set ",(0,n.jsx)(t.code,{children:"aria-label"})," on the ",(0,n.jsx)(t.code,{children:"PillsInput.Field"})," component to make the input accessible.\nIn this case label will not be visible, but screen reader will announce it:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { PillsInput } from '@mantine/core';\n\n// Accessible input – it has aria-label\nfunction Demo() {\n  return (\n    <PillsInput>\n      <PillsInput.Field aria-label=\"Enter tags\" />\n    </PillsInput>\n  );\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If ",(0,n.jsx)(t.code,{children:"label"})," prop is set, the input will be accessible it is not required to set ",(0,n.jsx)(t.code,{children:"aria-label"}),":"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:"import { PillsInput } from '@mantine/core';\n\n// Accessible input – it has associated label element\nfunction Demo() {\n  return (\n    <PillsInput label=\"Enter tags\">\n      <PillsInput.Field />\n    </PillsInput>\n  );\n}\n"})})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(f,{...e,children:(0,n.jsx)(v,{...e})})}function y(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},83355:function(e,t,l){"use strict";l.d(t,{R:function(){return d}});var n=l(2784),i=l(56237),o=l(45855),r=l(61324),a=l(93010),s=l(40284),u=l(92258);let c=`
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
`,p=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],d={type:"code",component:function(){let e=(0,i.K)({onDropdownClose:()=>e.resetSelectedOption(),onDropdownOpen:()=>e.updateSelectedOptionIndex("active")}),[t,l]=(0,n.useState)(""),[c,d]=(0,n.useState)([]),m=e=>d(t=>t.filter(t=>t!==e)),b=c.map(e=>n.createElement(o.D,{key:e,withRemoveButton:!0,onRemove:()=>m(e)},e)),h=p.filter(e=>e.toLowerCase().includes(t.trim().toLowerCase())).map(e=>n.createElement(r.h.Option,{value:e,key:e,active:c.includes(e)},n.createElement(a.Z,{gap:"sm"},c.includes(e)?n.createElement(s.n,{size:12}):null,n.createElement("span",null,e))));return n.createElement(r.h,{store:e,onOptionSubmit:e=>d(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])},n.createElement(r.h.DropdownTarget,null,n.createElement(u.d,{onClick:()=>e.openDropdown()},n.createElement(o.D.Group,null,b,n.createElement(r.h.EventsTarget,null,n.createElement(u.d.Field,{onFocus:()=>e.openDropdown(),onBlur:()=>e.closeDropdown(),value:t,placeholder:"Search values",onChange:t=>{e.updateSelectedOptionIndex(),l(t.currentTarget.value)},onKeyDown:e=>{"Backspace"===e.key&&0===t.length&&(e.preventDefault(),m(c[c.length-1]))}}))))),n.createElement(r.h.Dropdown,null,n.createElement(r.h.Options,null,h.length>0?h:n.createElement(r.h.Empty,null,"Nothing found..."))))},code:c,centered:!0,defaultExpanded:!1,maxWidth:340}},76528:function(e,t,l){"use strict";l.d(t,{Mt:function(){return n},nW:function(){return i},pc:function(){return o}});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],i=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},45855:function(e,t,l){"use strict";l.d(t,{D:function(){return g}});var n=l(2784),i=l(91482),o=l(11200),r=l(38483),a=l(62378),s=l(28559),u=l(82027),c=l(2670),p=l(7450),d=l(75336);let[m,b]=(0,d.V)();var h={root:"m_7cda1cd6","root--default":"m_44da308b","root--contrast":"m_e3a01f8",label:"m_1e0e6180",remove:"m_ae386778",group:"m_1dcfd90b"};let f={},v=(0,o.Z)((e,{gap:t},{size:l})=>({group:{"--pg-gap":void 0!==t?(0,i.ap)(t):(0,i.ap)(l,"pg-gap")}})),x=(0,u.d)((e,t)=>{let l=(0,r.w)("PillGroup",f,e),{classNames:i,className:o,style:u,styles:c,unstyled:d,vars:b,size:x,disabled:y,...P}=l,g=(0,p.D)(),I=g?.size||x||void 0,E=(0,a.y)({name:"PillGroup",classes:h,props:l,className:o,style:u,classNames:i,styles:c,unstyled:d,vars:b,varsResolver:v,stylesCtx:{size:I},rootSelector:"group"});return n.createElement(m,{value:{size:I,disabled:y}},n.createElement(s.x,{ref:t,size:I,...E("group"),...P}))});x.classes=h,x.displayName="@mantine/core/PillGroup";let y={variant:"default"},P=(0,o.Z)((e,{radius:t},{size:l})=>({root:{"--pill-fz":(0,i.ap)(l,"pill-fz"),"--pill-height":(0,i.ap)(l,"pill-height"),"--pill-radius":void 0===t?void 0:(0,i.H5)(t)}})),g=(0,u.d)((e,t)=>{let l=(0,r.w)("Pill",y,e),{classNames:i,className:o,style:u,styles:d,unstyled:m,vars:f,variant:v,children:x,withRemoveButton:g,onRemove:I,removeButtonProps:E,radius:w,size:D,disabled:V,mod:C,...j}=l,S=b(),k=(0,p.D)(),F=D||S?.size||void 0,_=k?.variant==="filled"?"contrast":v||"default",z=(0,a.y)({name:"Pill",classes:h,props:l,className:o,style:u,classNames:i,styles:d,unstyled:m,vars:f,varsResolver:P,stylesCtx:{size:F}});return n.createElement(s.x,{component:"span",ref:t,variant:_,size:F,...z("root",{variant:_}),mod:[{"with-remove":g&&!V,disabled:V||S?.disabled},C],...j},n.createElement("span",{...z("label")},x),g&&n.createElement(c.P,{variant:"transparent",radius:w,tabIndex:-1,"aria-hidden":!0,unstyled:m,...E,...z("remove",{className:E?.className,style:E?.style}),onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),E?.onMouseDown?.(e)},onClick:e=>{e.stopPropagation(),I?.(),E?.onClick?.(e)}}))});g.classes=h,g.displayName="@mantine/core/Pill",g.Group=x},7450:function(e,t,l){"use strict";l.d(t,{D:function(){return o},H:function(){return i}}),l(2784);var n=l(75336);let[i,o]=(0,n.V)()},92258:function(e,t,l){"use strict";l.d(t,{d:function(){return f}});var n=l(2784),i=l(38483),o=l(82027),r=l(73063),a=l(7450),s=l(70837),u=l(62378),c=l(28559),p=l(69349),d={field:"m_45c4369d"};let m={type:"visible"},b=(0,o.d)((e,t)=>{let l=(0,i.w)("PillsInputField",m,e),{classNames:o,className:r,style:b,styles:h,unstyled:f,vars:v,type:x,disabled:y,id:P,pointer:g,mod:I,...E}=l,w=(0,a.D)(),D=(0,p.D)(),V=(0,u.y)({name:"PillsInputField",classes:d,props:l,className:r,style:b,classNames:o,styles:h,unstyled:f,rootSelector:"field"}),C=y||w?.disabled;return n.createElement(c.x,{component:"input",ref:(0,s.Yx)(t,w?.fieldRef),"data-type":x,disabled:C,mod:[{disabled:C,pointer:g},I],...V("field"),...E,id:D?.inputId||P,"aria-invalid":w?.hasError,"aria-describedby":D?.describedBy,type:"text",onMouseDown:e=>!g&&e.stopPropagation()})});b.classes=d,b.displayName="@mantine/core/PillsInputField";let h={},f=(0,o.d)((e,t)=>{let l=(0,i.w)("PillsInput",h,e),{children:o,onMouseDown:s,onClick:u,size:c,disabled:p,__staticSelector:d,error:m,variant:b,...f}=l,v=(0,n.useRef)();return n.createElement(a.H,{value:{fieldRef:v,size:c,disabled:p,hasError:!!m,variant:b}},n.createElement(r.M,{size:c,error:m,variant:b,component:"div",ref:t,onMouseDown:e=>{e.preventDefault(),s?.(e),v.current?.focus()},onClick:e=>{e.preventDefault(),u?.(e),v.current?.focus()},...f,multiline:!0,disabled:p,__staticSelector:d||"PillsInput",withAria:!1},o))});f.displayName="@mantine/core/PillsInput",f.Field=b}},function(e){e.O(0,[57938,17454,47747,61324,49774,92888,40179],function(){return e(e.s=72852)}),_N_E=e.O()}]);