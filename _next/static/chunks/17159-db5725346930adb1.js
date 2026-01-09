"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[17159],{1798:(e,t,o)=>{o.d(t,{A:()=>l});let l=(0,o(41495).A)("outline","license","License",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},6620:(e,t,o)=>{o.d(t,{A:()=>l});let l=(0,o(41495).A)("outline","code","Code",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},6892:(e,t,o)=>{o.d(t,{A:()=>l});let l=(0,o(41495).A)("outline","pencil","Pencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},8122:(e,t,o)=>{o.d(t,{t:()=>b});var l=o(6029),a=o(55729),n=o(38919),s=o(8411),i=o(51718),r=o(14995),d=o(28136),p=o(15583),c=o(76320),u=o(67166),v={field:"m_45c4369d"};let h={type:"visible"},m=(0,s.P9)((e,t)=>{let o=(0,n.Y)("PillsInputField",h,e),{classNames:a,className:s,style:i,styles:m,unstyled:g,vars:b,type:y,disabled:x,id:k,pointer:C,mod:f,attributes:M,...w}=o,P=(0,r.n)(),D=(0,u.e)(),j=(0,p.I)({name:"PillsInputField",classes:v,props:o,className:s,style:i,classNames:a,styles:m,unstyled:g,attributes:M,rootSelector:"field"}),A=x||P?.disabled;return(0,l.jsx)(c.a,{component:"input",ref:(0,d.pc)(t,P?.fieldRef),"data-type":y,disabled:A,mod:[{disabled:A,pointer:C},f],...j("field"),...w,id:D?.inputId||k,"aria-invalid":P?.hasError,"aria-describedby":D?.describedBy,type:"text",onMouseDown:e=>!C&&e.stopPropagation()})});m.classes=v,m.displayName="@mantine/core/PillsInputField";let g={size:"sm"},b=(0,s.P9)((e,t)=>{let{children:o,onMouseDown:s,onClick:d,size:p,disabled:c,__staticSelector:u,error:v,variant:h,...m}=(0,n.Y)("PillsInput",g,e),b=(0,a.useRef)(null);return(0,l.jsx)(r.q,{value:{fieldRef:b,size:p,disabled:c,hasError:!!v,variant:h},children:(0,l.jsx)(i.O,{size:p,error:v,variant:h,component:"div",ref:t,"data-no-overflow":!0,onMouseDown:e=>{e.preventDefault(),s?.(e),b.current?.focus()},onClick:e=>{e.preventDefault();let t=e.currentTarget.closest("fieldset");t?.disabled||(b.current?.focus(),d?.(e))},...m,multiline:!0,disabled:c,__staticSelector:u||"PillsInput",withAria:!1,children:o})})});b.displayName="@mantine/core/PillsInput",b.Field=m},14995:(e,t,o)=>{o.d(t,{n:()=>a,q:()=>l}),o(55729),o(6029);let[l,a]=(0,o(24965).e)()},24583:(e,t,o)=>{o.d(t,{A:()=>l});let l=(0,o(41495).A)("outline","arrow-left","ArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},34891:(e,t,o)=>{o.d(t,{A:()=>l});let l=(0,o(41495).A)("outline","adjustments","Adjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},41008:(e,t,o)=>{o.d(t,{Q:()=>u});var l=o(6029),a=o(55729),n=o(28425),s=o(67023),i=o(2061),r=o(57414),d=o(98538),p=o(8122);let c=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],u={type:"code",component:function(){let e=(0,n.B)({onDropdownClose:()=>e.resetSelectedOption(),onDropdownOpen:()=>e.updateSelectedOptionIndex("active")}),[t,o]=(0,a.useState)(""),[u,v]=(0,a.useState)([]),h=e=>v(t=>t.filter(t=>t!==e)),m=u.map(e=>(0,l.jsx)(s.a,{withRemoveButton:!0,onRemove:()=>h(e),children:e},e)),g=c.filter(e=>e.toLowerCase().includes(t.trim().toLowerCase())).map(e=>(0,l.jsx)(i.G.Option,{value:e,active:u.includes(e),children:(0,l.jsxs)(r.Y,{gap:"sm",children:[u.includes(e)?(0,l.jsx)(d.S,{size:12}):null,(0,l.jsx)("span",{children:e})]})},e));return(0,l.jsxs)(i.G,{store:e,onOptionSubmit:e=>v(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e]),children:[(0,l.jsx)(i.G.DropdownTarget,{children:(0,l.jsx)(p.t,{onClick:()=>e.openDropdown(),children:(0,l.jsxs)(s.a.Group,{children:[m,(0,l.jsx)(i.G.EventsTarget,{children:(0,l.jsx)(p.t.Field,{onFocus:()=>e.openDropdown(),onBlur:()=>e.closeDropdown(),value:t,placeholder:"Search values",onChange:t=>{e.updateSelectedOptionIndex(),o(t.currentTarget.value)},onKeyDown:e=>{"Backspace"===e.key&&0===t.length&&u.length>0&&(e.preventDefault(),h(u[u.length-1]))}})})]})})}),(0,l.jsx)(i.G.Dropdown,{children:(0,l.jsx)(i.G.Options,{children:g.length>0?g:(0,l.jsx)(i.G.Empty,{children:"Nothing found..."})})})]})},code:`
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
                  if (event.key === 'Backspace' && search.length === 0 && value.length > 0) {
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
`,centered:!0,defaultExpanded:!1,maxWidth:340}},41949:(e,t,o)=>{o.d(t,{A:()=>l});let l=(0,o(41495).A)("outline","calendar","Calendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},65433:(e,t,o)=>{o.d(t,{A:()=>l});let l=(0,o(41495).A)("outline","switch-2","Switch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},67023:(e,t,o)=>{o.d(t,{a:()=>x});var l=o(6029);o(55729);var a=o(14163),n=o(33987),s=o(38919),i=o(15583),r=o(76320),d=o(8411),p=o(39967),c=o(14995),u={root:"m_7cda1cd6","root--default":"m_44da308b","root--contrast":"m_e3a01f8",label:"m_1e0e6180",remove:"m_ae386778",group:"m_1dcfd90b"};let[v,h]=(0,o(24965).e)(),m=(0,n.V)((e,{gap:t},{size:o})=>({group:{"--pg-gap":void 0!==t?(0,a.YC)(t):(0,a.YC)(o,"pg-gap")}})),g=(0,d.P9)((e,t)=>{let o=(0,s.Y)("PillGroup",null,e),{classNames:a,className:n,style:d,styles:p,unstyled:h,vars:g,size:b,disabled:y,attributes:x,...k}=o,C=(0,c.n)(),f=C?.size||b||void 0,M=(0,i.I)({name:"PillGroup",classes:u,props:o,className:n,style:d,classNames:a,styles:p,unstyled:h,attributes:x,vars:g,varsResolver:m,stylesCtx:{size:f},rootSelector:"group"});return(0,l.jsx)(v,{value:{size:f,disabled:y},children:(0,l.jsx)(r.a,{ref:t,size:f,...M("group"),...k})})});g.classes=u,g.displayName="@mantine/core/PillGroup";let b={variant:"default"},y=(0,n.V)((e,{radius:t},{size:o})=>({root:{"--pill-fz":(0,a.YC)(o,"pill-fz"),"--pill-height":(0,a.YC)(o,"pill-height"),"--pill-radius":void 0===t?void 0:(0,a.nJ)(t)}})),x=(0,d.P9)((e,t)=>{let o=(0,s.Y)("Pill",b,e),{classNames:a,className:n,style:d,styles:v,unstyled:m,vars:g,variant:x,children:k,withRemoveButton:C,onRemove:f,removeButtonProps:M,radius:w,size:P,disabled:D,mod:j,attributes:A,...S}=o,I=h(),G=(0,c.n)(),O=P||I?.size||void 0,z=G?.variant==="filled"?"contrast":x||"default",F=(0,i.I)({name:"Pill",classes:u,props:o,className:n,style:d,classNames:a,styles:v,unstyled:m,attributes:A,vars:g,varsResolver:y,stylesCtx:{size:O}});return(0,l.jsxs)(r.a,{component:"span",ref:t,variant:z,size:O,...F("root",{variant:z}),mod:[{"with-remove":C&&!D,disabled:D||I?.disabled},j],...S,children:[(0,l.jsx)("span",{...F("label"),children:k}),C&&(0,l.jsx)(p.J,{variant:"transparent",radius:w,tabIndex:-1,"aria-hidden":!0,unstyled:m,...M,...F("remove",{className:M?.className,style:M?.style}),onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),M?.onMouseDown?.(e)},onClick:e=>{e.stopPropagation(),f?.(),M?.onClick?.(e)}})]})});x.classes=u,x.displayName="@mantine/core/Pill",x.Group=g},84276:(e,t,o)=>{o.d(t,{A:()=>l});let l=(0,o(41495).A)("outline","file-text","FileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},88992:(e,t,o)=>{o.d(t,{A:()=>l});let l=(0,o(41495).A)("outline","arrow-right","ArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])}}]);