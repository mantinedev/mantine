(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7020],{10333:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/pills-input",function(){return t(41301)}])},41301:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return x}});var n=t(24246),i=t(71670),o=t(3916),r=t(30289),a=t(27378),s=t(28639),u=t(39394);let c=`
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
`,p={type:"code",component:function(){return a.createElement(s.d,{label:"PillsInput"},a.createElement(u.D.Group,null,a.createElement(u.D,null,"React"),a.createElement(u.D,null,"Vue"),a.createElement(u.D,null,"Svelte"),a.createElement(s.d.Field,{placeholder:"Enter tags"})))},code:c,maxWidth:440,centered:!0};var d=t(77481);let m=`
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
`,b={type:"configurator",component:function(e){return a.createElement(s.d,{label:"PillsInput",...e},a.createElement(u.D.Group,null,a.createElement(u.D,null,"React"),a.createElement(u.D,null,"Vue"),a.createElement(u.D,null,"Svelte"),a.createElement(s.d.Field,{placeholder:"Enter tags"})))},code:m,centered:!0,maxWidth:440,controls:d.pc};var h=t(81320);let f=(0,o.A)(r.us.PillsInput);function v(e){let l={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.a)(),...e.components},{Demo:t,InputFeatures:o}=l;return t||y("Demo",!0),o||y("InputFeatures",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(l.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(l.p,{children:[(0,n.jsx)(l.code,{children:"PillsInput"})," is a utility component that can be used to create custom tag inputs, multi selects and\nother similar components. By itself it does not include any logic, it only renders given children.\nUsually, ",(0,n.jsx)(l.code,{children:"PillsInput"})," is used in combination with ",(0,n.jsx)(l.a,{href:"/core/pill",children:"Pill"})," component."]}),"\n",(0,n.jsx)(t,{data:p}),"\n",(0,n.jsx)(l.h2,{id:"input-props",children:"Input props"}),"\n",(0,n.jsx)(o,{component:"PillsInput",element:"div"}),"\n",(0,n.jsx)(t,{data:b}),"\n",(0,n.jsx)(l.h2,{id:"searchable-select-example",children:"Searchable select example"}),"\n",(0,n.jsxs)(l.p,{children:["Combine ",(0,n.jsx)(l.code,{children:"PillsInput"})," with ",(0,n.jsx)(l.a,{href:"/core/combobox",children:"Combobox"})," to create searchable multiselect:"]}),"\n",(0,n.jsx)(t,{data:h.R}),"\n",(0,n.jsx)(l.h2,{id:"accessibility",children:"Accessibility"}),"\n",(0,n.jsxs)(l.p,{children:["If ",(0,n.jsx)(l.code,{children:"PillsInput"})," is used without label prop, it will not be announced properly by screen reader:"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import { PillsInput } from '@mantine/core';\n\n// Inaccessible input – screen reader will not announce it properly\nfunction Demo() {\n  return (\n    <PillsInput>\n      <PillsInput.Field />\n    </PillsInput>\n  );\n}\n"})}),"\n",(0,n.jsxs)(l.p,{children:["Set ",(0,n.jsx)(l.code,{children:"aria-label"})," on the ",(0,n.jsx)(l.code,{children:"PillsInput.Field"})," component to make the input accessible.\nIn this case label will not be visible, but screen reader will announce it:"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import { PillsInput } from '@mantine/core';\n\n// Accessible input – it has aria-label\nfunction Demo() {\n  return (\n    <PillsInput>\n      <PillsInput.Field aria-label=\"Enter tags\" />\n    </PillsInput>\n  );\n}\n"})}),"\n",(0,n.jsxs)(l.p,{children:["If ",(0,n.jsx)(l.code,{children:"label"})," prop is set, the input will be accessible it is not required to set ",(0,n.jsx)(l.code,{children:"aria-label"}),":"]}),"\n",(0,n.jsx)(l.pre,{children:(0,n.jsx)(l.code,{className:"language-tsx",children:"import { PillsInput } from '@mantine/core';\n\n// Accessible input – it has associated label element\nfunction Demo() {\n  return (\n    <PillsInput label=\"Enter tags\">\n      <PillsInput.Field />\n    </PillsInput>\n  );\n}\n"})})]})}function x(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(f,{...e,children:(0,n.jsx)(v,{...e})})}function y(e,l){throw Error("Expected "+(l?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},81320:function(e,l,t){"use strict";t.d(l,{R:function(){return d}});var n=t(27378),i=t(54526),o=t(39394),r=t(45608),a=t(22971),s=t(38765),u=t(28639);let c=`
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
`,p=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],d={type:"code",component:function(){let e=(0,i.K)({onDropdownClose:()=>e.resetSelectedOption(),onDropdownOpen:()=>e.updateSelectedOptionIndex("active")}),[l,t]=(0,n.useState)(""),[c,d]=(0,n.useState)([]),m=e=>d(l=>l.filter(l=>l!==e)),b=c.map(e=>n.createElement(o.D,{key:e,withRemoveButton:!0,onRemove:()=>m(e)},e)),h=p.filter(e=>e.toLowerCase().includes(l.trim().toLowerCase())).map(e=>n.createElement(r.h.Option,{value:e,key:e,active:c.includes(e)},n.createElement(a.Z,{gap:"sm"},c.includes(e)?n.createElement(s.n,{size:12}):null,n.createElement("span",null,e))));return n.createElement(r.h,{store:e,onOptionSubmit:e=>d(l=>l.includes(e)?l.filter(l=>l!==e):[...l,e])},n.createElement(r.h.DropdownTarget,null,n.createElement(u.d,{onClick:()=>e.openDropdown()},n.createElement(o.D.Group,null,b,n.createElement(r.h.EventsTarget,null,n.createElement(u.d.Field,{onFocus:()=>e.openDropdown(),onBlur:()=>e.closeDropdown(),value:l,placeholder:"Search values",onChange:l=>{e.updateSelectedOptionIndex(),t(l.currentTarget.value)},onKeyDown:e=>{"Backspace"===e.key&&0===l.length&&(e.preventDefault(),m(c[c.length-1]))}}))))),n.createElement(r.h.Dropdown,null,n.createElement(r.h.Options,null,h.length>0?h:n.createElement(r.h.Empty,null,"Nothing found..."))))},code:c,centered:!0,defaultExpanded:!1,maxWidth:340}},77481:function(e,l,t){"use strict";t.d(l,{Mt:function(){return n},nW:function(){return i},pc:function(){return o}});let n=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"boolean",prop:"disabled",initialValue:!1,libraryValue:!1},{type:"boolean",prop:"error",initialValue:!1,libraryValue:!1}],i=[{type:"string",prop:"label",initialValue:"Input label",libraryValue:null},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:null},{type:"string",prop:"error",initialValue:"Input error",libraryValue:null},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"}],o=[{type:"segmented",prop:"variant",data:["default","filled","unstyled"],initialValue:"default",libraryValue:"default"},{type:"size",prop:"size",initialValue:"sm",libraryValue:"sm"},{type:"size",prop:"radius",initialValue:"sm",libraryValue:"sm"},{type:"string",prop:"label",initialValue:"Input label",libraryValue:""},{type:"boolean",prop:"withAsterisk",initialValue:!1,libraryValue:!1},{type:"string",prop:"description",initialValue:"Input description",libraryValue:""},{type:"string",prop:"error",initialValue:"",libraryValue:""}]},39394:function(e,l,t){"use strict";t.d(l,{D:function(){return g}});var n=t(27378),i=t(92082),o=t(83453),r=t(96739),a=t(6231),s=t(56589),u=t(20410),c=t(96217),p=t(89871);let[d,m]=(0,p.V)();var b=t(33),h={root:"m-7cda1cd6","root--default":"m-44da308b","root--contrast":"m-e3a01f8",label:"m-1e0e6180",remove:"m-ae386778",group:"m-1dcfd90b"};let f={},v=(0,o.Z)((e,{gap:l},{size:t})=>({group:{"--pg-gap":void 0!==l?(0,i.ap)(l):(0,i.ap)(t,"pg-gap")}})),x=(0,u.d)((e,l)=>{let t=(0,r.w)("PillGroup",f,e),{classNames:i,className:o,style:u,styles:c,unstyled:p,vars:m,size:x,disabled:y,...P}=t,g=(0,b.D)(),I=g?.size||x||void 0,E=(0,a.y)({name:"PillGroup",classes:h,props:t,className:o,style:u,classNames:i,styles:c,unstyled:p,vars:m,varsResolver:v,stylesCtx:{size:I},rootSelector:"group"});return n.createElement(d,{value:{size:I,disabled:y}},n.createElement(s.x,{ref:l,size:I,...E("group"),...P}))});x.classes=h,x.displayName="@mantine/core/PillGroup";let y={variant:"default"},P=(0,o.Z)((e,{radius:l},{size:t})=>({root:{"--pill-fz":(0,i.ap)(t,"pill-fz"),"--pill-height":(0,i.ap)(t,"pill-height"),"--pill-radius":void 0===l?void 0:(0,i.H5)(l)}})),g=(0,u.d)((e,l)=>{let t=(0,r.w)("Pill",y,e),{classNames:i,className:o,style:u,styles:p,unstyled:d,vars:f,variant:v,children:x,withRemoveButton:g,onRemove:I,removeButtonProps:E,radius:w,size:D,disabled:V,...C}=t,j=m(),S=(0,b.D)(),k=D||j?.size||void 0,F=S?.variant==="filled"?"contrast":v||"default",z=(0,a.y)({name:"Pill",classes:h,props:t,className:o,style:u,classNames:i,styles:p,unstyled:d,vars:f,varsResolver:P,stylesCtx:{size:k}});return n.createElement(s.x,{component:"span",ref:l,variant:F,size:k,...z("root",{variant:F}),mod:{"with-remove":g,disabled:V||j?.disabled},...C},n.createElement("span",{...z("label")},x),g&&n.createElement(c.P,{variant:"transparent",radius:w,tabIndex:-1,"aria-hidden":!0,unstyled:d,...E,...z("remove",{className:E?.className,style:E?.style}),onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),E?.onMouseDown?.(e)},onClick:e=>{e.stopPropagation(),I?.(),E?.onClick?.(e)}}))});g.classes=h,g.displayName="@mantine/core/Pill",g.Group=x},33:function(e,l,t){"use strict";t.d(l,{D:function(){return o},H:function(){return i}}),t(27378);var n=t(89871);let[i,o]=(0,n.V)()},28639:function(e,l,t){"use strict";t.d(l,{d:function(){return f}});var n=t(27378),i=t(96739),o=t(20410),r=t(23163),a=t(33),s=t(72840),u=t(6231),c=t(56589),p=t(5739),d={field:"m-45c4369d"};let m={type:"visible"},b=(0,o.d)((e,l)=>{let t=(0,i.w)("PillsInputField",m,e),{classNames:o,className:r,style:b,styles:h,unstyled:f,vars:v,type:x,disabled:y,id:P,pointer:g,...I}=t,E=(0,a.D)(),w=(0,p.D)(),D=(0,u.y)({name:"PillsInputField",classes:d,props:t,className:r,style:b,classNames:o,styles:h,unstyled:f,rootSelector:"field"}),V=y||E?.disabled;return n.createElement(c.x,{component:"input",ref:(0,s.Yx)(l,E?.fieldRef),"data-type":x,disabled:V,mod:{disabled:V,pointer:g},...D("field"),...I,id:w?.inputId||P,"aria-invalid":E?.hasError,"aria-describedby":w?.describedBy})});b.classes=d,b.displayName="@mantine/core/PillsInputField";let h={},f=(0,o.d)((e,l)=>{let t=(0,i.w)("PillsInput",h,e),{children:o,onMouseDown:s,onClick:u,size:c,disabled:p,__staticSelector:d,error:m,variant:b,...f}=t,v=(0,n.useRef)();return n.createElement(a.H,{value:{fieldRef:v,size:c,disabled:p,hasError:!!m,variant:b}},n.createElement(r.M,{size:c,error:m,variant:b,component:"div",ref:l,onMouseDown:e=>{e.preventDefault(),s?.(e),v.current?.focus()},onClick:e=>{e.preventDefault(),u?.(e),v.current?.focus()},...f,multiline:!0,disabled:p,__staticSelector:d||"PillsInput",withAria:!1},o))});f.displayName="@mantine/core/PillsInput",f.Field=b}},function(e){e.O(0,[370,5819,2775,5608,9774,2888,179],function(){return e(e.s=10333)}),_N_E=e.O()}]);