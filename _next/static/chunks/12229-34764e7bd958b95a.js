"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12229],{87186:(e,o,t)=>{t.d(o,{A:()=>l});var l=(0,t(73366).A)("outline","adjustments","IconAdjustments",[["path",{d:"M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-0"}],["path",{d:"M6 4v4",key:"svg-1"}],["path",{d:"M6 12v8",key:"svg-2"}],["path",{d:"M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-3"}],["path",{d:"M12 4v10",key:"svg-4"}],["path",{d:"M12 18v2",key:"svg-5"}],["path",{d:"M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0",key:"svg-6"}],["path",{d:"M18 4v1",key:"svg-7"}],["path",{d:"M18 9v11",key:"svg-8"}]])},80502:(e,o,t)=>{t.d(o,{A:()=>l});var l=(0,t(73366).A)("outline","arrow-left","IconArrowLeft",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M5 12l6 6",key:"svg-1"}],["path",{d:"M5 12l6 -6",key:"svg-2"}]])},89689:(e,o,t)=>{t.d(o,{A:()=>l});var l=(0,t(73366).A)("outline","arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},61584:(e,o,t)=>{t.d(o,{A:()=>l});var l=(0,t(73366).A)("outline","calendar","IconCalendar",[["path",{d:"M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z",key:"svg-0"}],["path",{d:"M16 3v4",key:"svg-1"}],["path",{d:"M8 3v4",key:"svg-2"}],["path",{d:"M4 11h16",key:"svg-3"}],["path",{d:"M11 15h1",key:"svg-4"}],["path",{d:"M12 15v3",key:"svg-5"}]])},91133:(e,o,t)=>{t.d(o,{A:()=>l});var l=(0,t(73366).A)("outline","code","IconCode",[["path",{d:"M7 8l-4 4l4 4",key:"svg-0"}],["path",{d:"M17 8l4 4l-4 4",key:"svg-1"}],["path",{d:"M14 4l-4 16",key:"svg-2"}]])},11749:(e,o,t)=>{t.d(o,{A:()=>l});var l=(0,t(73366).A)("outline","file-text","IconFileText",[["path",{d:"M14 3v4a1 1 0 0 0 1 1h4",key:"svg-0"}],["path",{d:"M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z",key:"svg-1"}],["path",{d:"M9 9l1 0",key:"svg-2"}],["path",{d:"M9 13l6 0",key:"svg-3"}],["path",{d:"M9 17l6 0",key:"svg-4"}]])},89843:(e,o,t)=>{t.d(o,{A:()=>l});var l=(0,t(73366).A)("outline","license","IconLicense",[["path",{d:"M15 21h-9a3 3 0 0 1 -3 -3v-1h10v2a2 2 0 0 0 4 0v-14a2 2 0 1 1 2 2h-2m2 -4h-11a3 3 0 0 0 -3 3v11",key:"svg-0"}],["path",{d:"M9 7l4 0",key:"svg-1"}],["path",{d:"M9 11l4 0",key:"svg-2"}]])},9613:(e,o,t)=>{t.d(o,{A:()=>l});var l=(0,t(73366).A)("outline","pencil","IconPencil",[["path",{d:"M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4",key:"svg-0"}],["path",{d:"M13.5 6.5l4 4",key:"svg-1"}]])},55764:(e,o,t)=>{t.d(o,{A:()=>l});var l=(0,t(73366).A)("outline","switch-2","IconSwitch2",[["path",{d:"M3 17h5l1.67 -2.386m3.66 -5.227l1.67 -2.387h6",key:"svg-0"}],["path",{d:"M18 4l3 3l-3 3",key:"svg-1"}],["path",{d:"M3 7h5l7 10h6",key:"svg-2"}],["path",{d:"M18 20l3 -3l-3 -3",key:"svg-3"}]])},23145:(e,o,t)=>{t.d(o,{Q:()=>u});var l=t(31085),a=t(14041),n=t(88559),s=t(31778),r=t(31791),i=t(56051),d=t(5583),p=t(42215);let c=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],u={type:"code",component:function(){let e=(0,n.B)({onDropdownClose:()=>e.resetSelectedOption(),onDropdownOpen:()=>e.updateSelectedOptionIndex("active")}),[o,t]=(0,a.useState)(""),[u,v]=(0,a.useState)([]),h=e=>v(o=>o.filter(o=>o!==e)),m=u.map(e=>(0,l.jsx)(s.a,{withRemoveButton:!0,onRemove:()=>h(e),children:e},e)),g=c.filter(e=>e.toLowerCase().includes(o.trim().toLowerCase())).map(e=>(0,l.jsx)(r.G.Option,{value:e,active:u.includes(e),children:(0,l.jsxs)(i.Y,{gap:"sm",children:[u.includes(e)?(0,l.jsx)(d.S,{size:12}):null,(0,l.jsx)("span",{children:e})]})},e));return(0,l.jsxs)(r.G,{store:e,onOptionSubmit:e=>v(o=>o.includes(e)?o.filter(o=>o!==e):[...o,e]),children:[(0,l.jsx)(r.G.DropdownTarget,{children:(0,l.jsx)(p.t,{onClick:()=>e.openDropdown(),children:(0,l.jsxs)(s.a.Group,{children:[m,(0,l.jsx)(r.G.EventsTarget,{children:(0,l.jsx)(p.t.Field,{onFocus:()=>e.openDropdown(),onBlur:()=>e.closeDropdown(),value:o,placeholder:"Search values",onChange:o=>{e.updateSelectedOptionIndex(),t(o.currentTarget.value)},onKeyDown:e=>{"Backspace"===e.key&&0===o.length&&u.length>0&&(e.preventDefault(),h(u[u.length-1]))}})})]})})}),(0,l.jsx)(r.G.Dropdown,{children:(0,l.jsx)(r.G.Options,{children:g.length>0?g:(0,l.jsx)(r.G.Empty,{children:"Nothing found..."})})})]})},code:`
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
`,centered:!0,defaultExpanded:!1,maxWidth:340}},31778:(e,o,t)=>{t.d(o,{a:()=>k});var l=t(31085);t(14041);var a=t(33450),n=t(7098),s=t(29686),r=t(69564),i=t(34056),d=t(6754),p=t(94310),c=t(73418);let[u,v]=(0,t(49128).e)();var h={root:"m_7cda1cd6","root--default":"m_44da308b","root--contrast":"m_e3a01f8",label:"m_1e0e6180",remove:"m_ae386778",group:"m_1dcfd90b"};let m={},g=(0,n.V)((e,{gap:o},{size:t})=>({group:{"--pg-gap":void 0!==o?(0,a.YC)(o):(0,a.YC)(t,"pg-gap")}})),b=(0,d.P9)((e,o)=>{let t=(0,s.Y)("PillGroup",m,e),{classNames:a,className:n,style:d,styles:p,unstyled:v,vars:b,size:y,disabled:x,...k}=t,C=(0,c.n)(),f=C?.size||y||void 0,M=(0,r.I)({name:"PillGroup",classes:h,props:t,className:n,style:d,classNames:a,styles:p,unstyled:v,vars:b,varsResolver:g,stylesCtx:{size:f},rootSelector:"group"});return(0,l.jsx)(u,{value:{size:f,disabled:x},children:(0,l.jsx)(i.a,{ref:o,size:f,...M("group"),...k})})});b.classes=h,b.displayName="@mantine/core/PillGroup";let y={variant:"default"},x=(0,n.V)((e,{radius:o},{size:t})=>({root:{"--pill-fz":(0,a.YC)(t,"pill-fz"),"--pill-height":(0,a.YC)(t,"pill-height"),"--pill-radius":void 0===o?void 0:(0,a.nJ)(o)}})),k=(0,d.P9)((e,o)=>{let t=(0,s.Y)("Pill",y,e),{classNames:a,className:n,style:d,styles:u,unstyled:m,vars:g,variant:b,children:k,withRemoveButton:C,onRemove:f,removeButtonProps:M,radius:w,size:I,disabled:P,mod:D,...j}=t,A=v(),S=(0,c.n)(),G=I||A?.size||void 0,O=S?.variant==="filled"?"contrast":b||"default",F=(0,r.I)({name:"Pill",classes:h,props:t,className:n,style:d,classNames:a,styles:u,unstyled:m,vars:g,varsResolver:x,stylesCtx:{size:G}});return(0,l.jsxs)(i.a,{component:"span",ref:o,variant:O,size:G,...F("root",{variant:O}),mod:[{"with-remove":C&&!P,disabled:P||A?.disabled},D],...j,children:[(0,l.jsx)("span",{...F("label"),children:k}),C&&(0,l.jsx)(p.J,{variant:"transparent",radius:w,tabIndex:-1,"aria-hidden":!0,unstyled:m,...M,...F("remove",{className:M?.className,style:M?.style}),onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),M?.onMouseDown?.(e)},onClick:e=>{e.stopPropagation(),f?.(),M?.onClick?.(e)}})]})});k.classes=h,k.displayName="@mantine/core/Pill",k.Group=b},73418:(e,o,t)=>{t.d(o,{n:()=>a,q:()=>l}),t(14041),t(31085);let[l,a]=(0,t(49128).e)()},42215:(e,o,t)=>{t.d(o,{t:()=>b});var l=t(31085),a=t(14041),n=t(29686),s=t(6754),r=t(87059),i=t(73418),d=t(34321),p=t(69564),c=t(34056),u=t(62363),v={field:"m_45c4369d"};let h={type:"visible"},m=(0,s.P9)((e,o)=>{let t=(0,n.Y)("PillsInputField",h,e),{classNames:a,className:s,style:r,styles:m,unstyled:g,vars:b,type:y,disabled:x,id:k,pointer:C,mod:f,...M}=t,w=(0,i.n)(),I=(0,u.e)(),P=(0,p.I)({name:"PillsInputField",classes:v,props:t,className:s,style:r,classNames:a,styles:m,unstyled:g,rootSelector:"field"}),D=x||w?.disabled;return(0,l.jsx)(c.a,{component:"input",ref:(0,d.pc)(o,w?.fieldRef),"data-type":y,disabled:D,mod:[{disabled:D,pointer:C},f],...P("field"),...M,id:I?.inputId||k,"aria-invalid":w?.hasError,"aria-describedby":I?.describedBy,type:"text",onMouseDown:e=>!C&&e.stopPropagation()})});m.classes=v,m.displayName="@mantine/core/PillsInputField";let g={},b=(0,s.P9)((e,o)=>{let{children:t,onMouseDown:s,onClick:d,size:p,disabled:c,__staticSelector:u,error:v,variant:h,...m}=(0,n.Y)("PillsInput",g,e),b=(0,a.useRef)(null);return(0,l.jsx)(i.q,{value:{fieldRef:b,size:p,disabled:c,hasError:!!v,variant:h},children:(0,l.jsx)(r.O,{size:p,error:v,variant:h,component:"div",ref:o,onMouseDown:e=>{e.preventDefault(),s?.(e),b.current?.focus()},onClick:e=>{e.preventDefault();let o=e.currentTarget.closest("fieldset");o?.disabled||(b.current?.focus(),d?.(e))},...m,multiline:!0,disabled:c,__staticSelector:u||"PillsInput",withAria:!1,children:t})})});b.displayName="@mantine/core/PillsInput",b.Field=m}}]);