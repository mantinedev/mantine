(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[39625],{30861:(o,e,n)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/combobox",function(){return n(36779)}])},36779:(o,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>X});var t=n(31085),r=n(71184),s=n(57314),i=n(14041),l=n(88559),c=n(31791),a=n(90275);let p=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],d={type:"code",component:function(){let o=(0,l.B)(),[e,n]=(0,i.useState)(""),r=(p.some(o=>o===e)?p:p.filter(o=>o.toLowerCase().includes(e.toLowerCase().trim()))).map(o=>(0,t.jsx)(c.G.Option,{value:o,children:o},o));return(0,t.jsxs)(c.G,{onOptionSubmit:e=>{n(e),o.closeDropdown()},store:o,children:[(0,t.jsx)(c.G.Target,{children:(0,t.jsx)(a.k,{label:"Pick value or type anything",placeholder:"Pick value or type anything",value:e,onChange:e=>{n(e.currentTarget.value),o.openDropdown(),o.updateSelectedOptionIndex()},onClick:()=>o.openDropdown(),onFocus:()=>o.openDropdown(),onBlur:()=>o.closeDropdown()})}),(0,t.jsx)(c.G.Dropdown,{children:(0,t.jsx)(c.G.Options,{children:0===r.length?(0,t.jsx)(c.G.Empty,{children:"Nothing found"}):r})})]})},centered:!0,maxWidth:340,defaultExpanded:!1,code:`
import { useState } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox();
  const [value, setValue] = useState('');
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          label="Pick value or type anything"
          placeholder="Pick value or type anything"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
            combobox.updateSelectedOptionIndex();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`};var b=n(34056),u=n(93065),m=n(52022);let x=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],h={type:"code",component:function(){let[o,e]=(0,i.useState)(null),n=(0,l.B)({onDropdownClose:()=>n.resetSelectedOption()}),r=x.map(o=>(0,t.jsx)(c.G.Option,{value:o,children:o},o));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(b.a,{mb:"xs",children:[(0,t.jsxs)(u.E,{span:!0,size:"sm",c:"dimmed",children:["Selected item:"," "]}),(0,t.jsx)(u.E,{span:!0,size:"sm",children:o||"Nothing selected"})]}),(0,t.jsxs)(c.G,{store:n,width:250,position:"bottom-start",withArrow:!0,onOptionSubmit:o=>{e(o),n.closeDropdown()},children:[(0,t.jsx)(c.G.Target,{children:(0,t.jsx)(m.$,{onClick:()=>n.toggleDropdown(),children:"Pick item"})}),(0,t.jsx)(c.G.Dropdown,{children:(0,t.jsx)(c.G.Options,{children:r})})]})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:`
import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Box mb="xs">
        <Text span size="sm" c="dimmed">
          Selected item:{' '}
        </Text>

        <Text span size="sm">
          {selectedItem || 'Nothing selected'}
        </Text>
      </Box>

      <Combobox
        store={combobox}
        width={250}
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <Button onClick={() => combobox.toggleDropdown()}>Pick item</Button>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
`};var C=n(23145),g=n(87059);let v=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],w={type:"code",component:function(){let o=(0,l.B)({onDropdownClose:()=>o.resetSelectedOption()}),[e,n]=(0,i.useState)(null),[r,s]=(0,i.useState)(""),a=(v.every(o=>o!==r)?v.filter(o=>o.toLowerCase().includes(r.toLowerCase().trim())):v).map(o=>(0,t.jsx)(c.G.Option,{value:o,children:o},o));return(0,t.jsxs)(c.G,{store:o,onOptionSubmit:e=>{n(e),s(e),o.closeDropdown()},children:[(0,t.jsx)(c.G.Target,{children:(0,t.jsx)(g.O,{rightSection:(0,t.jsx)(c.G.Chevron,{}),rightSectionPointerEvents:"none",onClick:()=>o.openDropdown(),onFocus:()=>o.openDropdown(),onBlur:()=>{o.closeDropdown(),s(e||"")},placeholder:"Search value",value:r,onChange:e=>{o.updateSelectedOptionIndex(),s(e.currentTarget.value)}})}),(0,t.jsx)(c.G.Dropdown,{children:(0,t.jsx)(c.G.Options,{children:a.length>0?a:(0,t.jsx)(c.G.Empty,{children:"Nothing found"})})})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:`
import { useState } from 'react';
import { InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);
  const [search, setSearch] = useState('');

  const shouldFilterOptions = groceries.every((item) => item !== search);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        setSearch(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => {
            combobox.closeDropdown();
            setSearch(value || '');
          }}
          placeholder="Search value"
          value={search}
          onChange={(event) => {
            combobox.updateSelectedOptionIndex();
            setSearch(event.currentTarget.value);
          }}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`},j=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],f={type:"code",component:function(){let[o,e]=(0,i.useState)(""),[n,r]=(0,i.useState)(null),s=(0,l.B)({onDropdownClose:()=>{s.resetSelectedOption(),s.focusTarget(),e("")},onDropdownOpen:()=>{s.focusSearchInput()}}),a=j.filter(e=>e.toLowerCase().includes(o.toLowerCase().trim())).map(o=>(0,t.jsx)(c.G.Option,{value:o,children:o},o));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(b.a,{mb:"xs",children:[(0,t.jsxs)(u.E,{span:!0,size:"sm",c:"dimmed",children:["Selected item:"," "]}),(0,t.jsx)(u.E,{span:!0,size:"sm",children:n||"Nothing selected"})]}),(0,t.jsxs)(c.G,{store:s,width:250,position:"bottom-start",withArrow:!0,onOptionSubmit:o=>{r(o),s.closeDropdown()},children:[(0,t.jsx)(c.G.Target,{withAriaAttributes:!1,children:(0,t.jsx)(m.$,{onClick:()=>s.toggleDropdown(),children:"Pick item"})}),(0,t.jsxs)(c.G.Dropdown,{children:[(0,t.jsx)(c.G.Search,{value:o,onChange:o=>e(o.currentTarget.value),placeholder:"Search groceries"}),(0,t.jsx)(c.G.Options,{children:a.length>0?a:(0,t.jsx)(c.G.Empty,{children:"Nothing found"})})]})]})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:`
import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const [search, setSearch] = useState('');
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption();
      combobox.focusTarget();
      setSearch('');
    },

    onDropdownOpen: () => {
      combobox.focusSearchInput();
    },
  });

  const options = groceries
    .filter((item) => item.toLowerCase().includes(search.toLowerCase().trim()))
    .map((item) => (
      <Combobox.Option value={item} key={item}>
        {item}
      </Combobox.Option>
    ));

  return (
    <>
      <Box mb="xs">
        <Text span size="sm" c="dimmed">
          Selected item:{' '}
        </Text>

        <Text span size="sm">
          {selectedItem || 'Nothing selected'}
        </Text>
      </Box>

      <Combobox
        store={combobox}
        width={250}
        position="bottom-start"
        withArrow
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target withAriaAttributes={false}>
          <Button onClick={() => combobox.toggleDropdown()}>Pick item</Button>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Search
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            placeholder="Search groceries"
          />
          <Combobox.Options>
            {options.length > 0 ? options : <Combobox.Empty>Nothing found</Combobox.Empty>}
          </Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
`},O=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],S={type:"code",component:function(){let o=(0,l.B)({onDropdownClose:()=>o.resetSelectedOption()}),[e,n]=(0,i.useState)(""),r=(O.some(o=>o===e)?O:O.filter(o=>o.toLowerCase().includes(e.toLowerCase().trim()))).map(o=>(0,t.jsx)(c.G.Option,{value:o,children:o},o));return(0,i.useEffect)(()=>{o.selectFirstOption()},[e]),(0,t.jsxs)(c.G,{onOptionSubmit:e=>{n(e),o.closeDropdown()},store:o,children:[(0,t.jsx)(c.G.Target,{children:(0,t.jsx)(a.k,{label:"Pick value or type anything",placeholder:"Pick value or type anything",value:e,onChange:e=>{n(e.currentTarget.value),o.openDropdown()},onClick:()=>o.openDropdown(),onFocus:()=>o.openDropdown(),onBlur:()=>o.closeDropdown()})}),(0,t.jsx)(c.G.Dropdown,{children:(0,t.jsx)(c.G.Options,{children:0===r.length?(0,t.jsx)(c.G.Empty,{children:"Nothing found"}):r})})]})},centered:!0,maxWidth:340,defaultExpanded:!1,code:`
import { useState, useEffect } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState('');
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  useEffect(() => {
    // we need to wait for options to render before we can select first one
    combobox.selectFirstOption();
  }, [value]);

  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          label="Pick value or type anything"
          placeholder="Pick value or type anything"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          {options.length === 0 ? <Combobox.Empty>Nothing found</Combobox.Empty> : options}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`};var D=n(56051),F=n(5583),y=n(34452);let B=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],G={type:"code",component:function(){let o=(0,l.B)({onDropdownClose:()=>o.resetSelectedOption(),onDropdownOpen:e=>{"keyboard"===e?o.selectActiveOption():o.updateSelectedOptionIndex("active")}}),[e,n]=(0,i.useState)("\uD83E\uDD66 Broccoli"),r=B.map(o=>(0,t.jsx)(c.G.Option,{value:o,active:o===e,children:(0,t.jsxs)(D.Y,{gap:"xs",children:[o===e&&(0,t.jsx)(F.S,{size:12}),(0,t.jsx)("span",{children:o})]})},o));return(0,t.jsxs)(c.G,{store:o,resetSelectionOnOptionHover:!0,onOptionSubmit:e=>{n(e),o.updateSelectedOptionIndex("active")},children:[(0,t.jsx)(c.G.Target,{targetType:"button",children:(0,t.jsx)(g.O,{component:"button",type:"button",pointer:!0,rightSection:(0,t.jsx)(c.G.Chevron,{}),rightSectionPointerEvents:"none",onClick:()=>o.toggleDropdown(),children:e||(0,t.jsx)(y.p.Placeholder,{children:"Pick value"})})}),(0,t.jsx)(c.G.Dropdown,{children:(0,t.jsx)(c.G.Options,{children:r})})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox, CheckIcon, Group } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: (eventSource) => {
      if (eventSource === 'keyboard') {
        combobox.selectActiveOption();
      } else {
        combobox.updateSelectedOptionIndex('active');
      }
    },
  });

  const [value, setValue] = useState<string | null>('\u{1F966} Broccoli');

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item} active={item === value}>
      <Group gap="xs">
        {item === value && <CheckIcon size={12} />}
        <span>{item}</span>
      </Group>
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      resetSelectionOnOptionHover
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.updateSelectedOptionIndex('active');
      }}
    >
      <Combobox.Target targetType="button">
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`},k={type:"code",component:function(){let o=(0,l.B)({onDropdownClose:()=>o.resetSelectedOption()}),[e,n]=(0,i.useState)(null);return(0,t.jsxs)(c.G,{store:o,onOptionSubmit:e=>{n(e),o.closeDropdown()},children:[(0,t.jsx)(c.G.Target,{children:(0,t.jsx)(g.O,{component:"button",type:"button",pointer:!0,rightSection:(0,t.jsx)(c.G.Chevron,{}),rightSectionPointerEvents:"none",onClick:()=>o.toggleDropdown(),children:e||(0,t.jsx)(y.p.Placeholder,{children:"Pick value"})})}),(0,t.jsx)(c.G.Dropdown,{children:(0,t.jsxs)(c.G.Options,{children:[(0,t.jsxs)(c.G.Group,{label:"Fruits",children:[(0,t.jsx)(c.G.Option,{value:"\uD83C\uDF4E Apples",children:"\uD83C\uDF4E Apples"}),(0,t.jsx)(c.G.Option,{value:"\uD83C\uDF4C Bananas",children:"\uD83C\uDF4C Bananas"}),(0,t.jsx)(c.G.Option,{value:"\uD83C\uDF47 Grape",children:"\uD83C\uDF47 Grape"})]}),(0,t.jsxs)(c.G.Group,{label:"Vegetables",children:[(0,t.jsx)(c.G.Option,{value:"\uD83E\uDD66 Broccoli",children:"\uD83E\uDD66 Broccoli"}),(0,t.jsx)(c.G.Option,{value:"\uD83E\uDD55 Carrots",children:"\uD83E\uDD55 Carrots"}),(0,t.jsx)(c.G.Option,{value:"\uD83E\uDD6C Lettuce",children:"\uD83E\uDD6C Lettuce"})]})]})})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          <Combobox.Group label="Fruits">
            <Combobox.Option value="\u{1F34E} Apples">\u{1F34E} Apples</Combobox.Option>
            <Combobox.Option value="\u{1F34C} Bananas">\u{1F34C} Bananas</Combobox.Option>
            <Combobox.Option value="\u{1F347} Grape">\u{1F347} Grape</Combobox.Option>
          </Combobox.Group>

          <Combobox.Group label="Vegetables">
            <Combobox.Option value="\u{1F966} Broccoli">\u{1F966} Broccoli</Combobox.Option>
            <Combobox.Option value="\u{1F955} Carrots">\u{1F955} Carrots</Combobox.Option>
            <Combobox.Option value="\u{1F96C} Lettuce">\u{1F96C} Lettuce</Combobox.Option>
          </Combobox.Group>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`},T=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate","\uD83C\uDF47 Grapes","\uD83C\uDF4B Lemon","\uD83E\uDD6C Lettuce","\uD83C\uDF44 Mushrooms","\uD83C\uDF4A Oranges","\uD83E\uDD54 Potatoes","\uD83C\uDF45 Tomatoes","\uD83E\uDD5A Eggs","\uD83E\uDD5B Milk","\uD83C\uDF5E Bread","\uD83C\uDF57 Chicken","\uD83C\uDF54 Hamburger","\uD83E\uDDC0 Cheese","\uD83E\uDD69 Steak","\uD83C\uDF5F French Fries","\uD83C\uDF55 Pizza","\uD83E\uDD66 Cauliflower","\uD83E\uDD5C Peanuts","\uD83C\uDF66 Ice Cream","\uD83C\uDF6F Honey","\uD83E\uDD56 Baguette","\uD83C\uDF63 Sushi","\uD83E\uDD5D Kiwi","\uD83C\uDF53 Strawberries"],I={type:"code",component:function(){let o=(0,l.B)({onDropdownClose:()=>o.resetSelectedOption()}),[e,n]=(0,i.useState)(null),r=T.map(o=>(0,t.jsx)(c.G.Option,{value:o,children:o},o));return(0,t.jsxs)(c.G,{store:o,onOptionSubmit:e=>{n(e),o.closeDropdown()},children:[(0,t.jsx)(c.G.Target,{children:(0,t.jsx)(g.O,{component:"button",type:"button",pointer:!0,rightSection:(0,t.jsx)(c.G.Chevron,{}),rightSectionPointerEvents:"none",onClick:()=>o.toggleDropdown(),children:e||(0,t.jsx)(y.p.Placeholder,{children:"Pick value"})})}),(0,t.jsx)(c.G.Dropdown,{children:(0,t.jsx)(c.G.Options,{mah:200,style:{overflowY:"auto"},children:r})})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = [
  '\u{1F34E} Apples',
  '\u{1F34C} Bananas',
  '\u{1F966} Broccoli',
  '\u{1F955} Carrots',
  '\u{1F36B} Chocolate',
  '\u{1F347} Grapes',
  '\u{1F34B} Lemon',
  '\u{1F96C} Lettuce',
  '\u{1F344} Mushrooms',
  '\u{1F34A} Oranges',
  '\u{1F954} Potatoes',
  '\u{1F345} Tomatoes',
  '\u{1F95A} Eggs',
  '\u{1F95B} Milk',
  '\u{1F35E} Bread',
  '\u{1F357} Chicken',
  '\u{1F354} Hamburger',
  '\u{1F9C0} Cheese',
  '\u{1F969} Steak',
  '\u{1F35F} French Fries',
  '\u{1F355} Pizza',
  '\u{1F966} Cauliflower',
  '\u{1F95C} Peanuts',
  '\u{1F366} Ice Cream',
  '\u{1F36F} Honey',
  '\u{1F956} Baguette',
  '\u{1F363} Sushi',
  '\u{1F95D} Kiwi',
  '\u{1F353} Strawberries',
];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options mah={200} style={{ overflowY: 'auto' }}>
          {options}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`};var P=n(37950);let E=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate","\uD83C\uDF47 Grapes","\uD83C\uDF4B Lemon","\uD83E\uDD6C Lettuce","\uD83C\uDF44 Mushrooms","\uD83C\uDF4A Oranges","\uD83E\uDD54 Potatoes","\uD83C\uDF45 Tomatoes","\uD83E\uDD5A Eggs","\uD83E\uDD5B Milk","\uD83C\uDF5E Bread","\uD83C\uDF57 Chicken","\uD83C\uDF54 Hamburger","\uD83E\uDDC0 Cheese","\uD83E\uDD69 Steak","\uD83C\uDF5F French Fries","\uD83C\uDF55 Pizza","\uD83E\uDD66 Cauliflower","\uD83E\uDD5C Peanuts","\uD83C\uDF66 Ice Cream","\uD83C\uDF6F Honey","\uD83E\uDD56 Baguette","\uD83C\uDF63 Sushi","\uD83E\uDD5D Kiwi","\uD83C\uDF53 Strawberries"],A={type:"code",component:function(){let o=(0,l.B)({onDropdownClose:()=>o.resetSelectedOption()}),[e,n]=(0,i.useState)(null),r=E.map(o=>(0,t.jsx)(c.G.Option,{value:o,children:o},o));return(0,t.jsxs)(c.G,{store:o,onOptionSubmit:e=>{n(e),o.closeDropdown()},children:[(0,t.jsx)(c.G.Target,{children:(0,t.jsx)(g.O,{component:"button",type:"button",pointer:!0,rightSection:(0,t.jsx)(c.G.Chevron,{}),rightSectionPointerEvents:"none",onClick:()=>o.toggleDropdown(),children:e||(0,t.jsx)(y.p.Placeholder,{children:"Pick value"})})}),(0,t.jsx)(c.G.Dropdown,{children:(0,t.jsx)(c.G.Options,{children:(0,t.jsx)(P.F.Autosize,{type:"scroll",mah:200,children:r})})})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox, ScrollArea } from '@mantine/core';

const groceries = [
  '\u{1F34E} Apples',
  '\u{1F34C} Bananas',
  '\u{1F966} Broccoli',
  '\u{1F955} Carrots',
  '\u{1F36B} Chocolate',
  '\u{1F347} Grapes',
  '\u{1F34B} Lemon',
  '\u{1F96C} Lettuce',
  '\u{1F344} Mushrooms',
  '\u{1F34A} Oranges',
  '\u{1F954} Potatoes',
  '\u{1F345} Tomatoes',
  '\u{1F95A} Eggs',
  '\u{1F95B} Milk',
  '\u{1F35E} Bread',
  '\u{1F357} Chicken',
  '\u{1F354} Hamburger',
  '\u{1F9C0} Cheese',
  '\u{1F969} Steak',
  '\u{1F35F} French Fries',
  '\u{1F355} Pizza',
  '\u{1F966} Cauliflower',
  '\u{1F95C} Peanuts',
  '\u{1F366} Ice Cream',
  '\u{1F36F} Honey',
  '\u{1F956} Baguette',
  '\u{1F363} Sushi',
  '\u{1F95D} Kiwi',
  '\u{1F353} Strawberries',
];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize type="scroll" mah={200}>
            {options}
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`},V=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],L={type:"code",component:function(){let o=(0,l.B)(),[e,n]=(0,i.useState)(""),r=(V.some(o=>o===e)?V:V.filter(o=>o.toLowerCase().includes(e.toLowerCase().trim()))).map(o=>(0,t.jsx)(c.G.Option,{value:o,children:o},o));return(0,t.jsxs)(c.G,{onOptionSubmit:e=>{n(e),o.closeDropdown()},store:o,children:[(0,t.jsx)(c.G.Target,{children:(0,t.jsx)(a.k,{label:"Pick value or type anything",placeholder:"Pick value or type anything",value:e,onChange:e=>{n(e.currentTarget.value),o.openDropdown()},onClick:()=>o.openDropdown(),onFocus:()=>o.openDropdown(),onBlur:()=>o.closeDropdown()})}),(0,t.jsx)(c.G.Dropdown,{hidden:0===r.length,children:(0,t.jsx)(c.G.Options,{children:r})})]})},centered:!0,maxWidth:340,defaultExpanded:!1,code:`
import { useState } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox();
  const [value, setValue] = useState('');
  const shouldFilterOptions = !groceries.some((item) => item === value);
  const filteredOptions = shouldFilterOptions
    ? groceries.filter((item) => item.toLowerCase().includes(value.toLowerCase().trim()))
    : groceries;

  const options = filteredOptions.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          label="Pick value or type anything"
          placeholder="Pick value or type anything"
          value={value}
          onChange={(event) => {
            setValue(event.currentTarget.value);
            combobox.openDropdown();
          }}
          onClick={() => combobox.openDropdown()}
          onFocus={() => combobox.openDropdown()}
          onBlur={() => combobox.closeDropdown()}
        />
      </Combobox.Target>

      <Combobox.Dropdown hidden={options.length === 0}>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`},N=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],z={type:"code",component:function(){let[o,e]=(0,i.useState)(!1),n=(0,l.B)({opened:o}),r=N.map(o=>(0,t.jsx)(c.G.Option,{value:o,children:o},o));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.$,{mb:"md",onClick:()=>e(o=>!o),children:"Toggle dropdown"}),(0,t.jsxs)(c.G,{store:n,children:[(0,t.jsx)(c.G.Target,{children:(0,t.jsx)(a.k,{label:"Autocomplete",description:"Dropdown is opened/closed when button is clicked",placeholder:"Click button to toggle dropdown"})}),(0,t.jsx)(c.G.Dropdown,{children:(0,t.jsx)(c.G.Options,{children:r})})]})]})},code:`
import { useState } from 'react';
import { TextInput, Button, Combobox, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const [opened, setOpened] = useState(false);
  const combobox = useCombobox({ opened });

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Button mb="md" onClick={() => setOpened((o) => !o)}>
        Toggle dropdown
      </Button>

      <Combobox store={combobox}>
        <Combobox.Target>
          <TextInput
            label="Autocomplete"
            description="Dropdown is opened/closed when button is clicked"
            placeholder="Click button to toggle dropdown"
          />
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
}
`,maxWidth:340,centered:!0,defaultExpanded:!1},Y=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],R={type:"code",component:function(){let o=(0,l.B)({onDropdownClose:()=>o.resetSelectedOption()}),[e,n]=(0,i.useState)(null),r=Y.map(o=>(0,t.jsx)(c.G.Option,{value:o,children:o},o));return(0,t.jsxs)(c.G,{store:o,position:"bottom",middlewares:{flip:!1,shift:!1},onOptionSubmit:e=>{n(e),o.closeDropdown()},children:[(0,t.jsx)(c.G.Target,{children:(0,t.jsx)(g.O,{component:"button",type:"button",pointer:!0,rightSection:(0,t.jsx)(c.G.Chevron,{}),rightSectionPointerEvents:"none",onClick:()=>o.toggleDropdown(),children:e||(0,t.jsx)(y.p.Placeholder,{children:"Pick value"})})}),(0,t.jsx)(c.G.Dropdown,{children:(0,t.jsx)(c.G.Options,{children:r})})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      position="bottom"
      middlewares={{ flip: false, shift: false }}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`},_={type:"code",component:function(){let[o,e]=(0,i.useState)("");return(0,t.jsxs)(c.G,{onOptionSubmit:e,children:[(0,t.jsx)(c.G.EventsTarget,{children:(0,t.jsx)(a.k,{placeholder:"Pick value",value:o,onChange:o=>e(o.currentTarget.value)})}),(0,t.jsxs)(c.G.Options,{mt:"sm",children:[(0,t.jsx)(c.G.Option,{value:"First",children:"First"}),(0,t.jsx)(c.G.Option,{value:"Second",children:"Second"}),(0,t.jsx)(c.G.Option,{value:"Third",children:"Third"})]})]})},code:`
import { useState } from 'react';
import { Combobox, TextInput } from '@mantine/core';

function Demo() {
  const [value, setValue] = useState('');

  return (
    <Combobox onOptionSubmit={setValue}>
      <Combobox.EventsTarget>
        <TextInput
          placeholder="Pick value"
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      </Combobox.EventsTarget>

      <Combobox.Options mt="sm">
        <Combobox.Option value="First">First</Combobox.Option>
        <Combobox.Option value="Second">Second</Combobox.Option>
        <Combobox.Option value="Third">Third</Combobox.Option>
      </Combobox.Options>
    </Combobox>
  );
}
`,centered:!0,maxWidth:340,defaultExpanded:!1};var M=n(91273);let H=`
import { Combobox, TextInput, useCombobox } from '@mantine/core';

function Demo() {
  const combobox = useCombobox({ opened: true });

  return (
    <Combobox store={combobox}{{props}}>
      <Combobox.Target>
        <TextInput placeholder="Pick value" />
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Header>Combobox header</Combobox.Header>
        <Combobox.Search placeholder="Search input" />

        <Combobox.Options>
          <Combobox.Group label="First group">
            <Combobox.Option value="1">First</Combobox.Option>
            <Combobox.Option value="2">Second</Combobox.Option>
          </Combobox.Group>

          <Combobox.Group label="Second group">
            <Combobox.Option value="3">Third</Combobox.Option>
            <Combobox.Option value="4">Fourth</Combobox.Option>
          </Combobox.Group>

          <Combobox.Group label="Third group">
            <Combobox.Empty>Nothing found in this group...</Combobox.Empty>
          </Combobox.Group>
        </Combobox.Options>

        <Combobox.Footer>Combobox footer</Combobox.Footer>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,W={type:"styles-api",data:M.Q,component:function(o){let e=(0,l.B)({opened:!0});return(0,t.jsxs)(c.G,{store:e,...o,middlewares:{flip:!1,shift:!1},children:[(0,t.jsx)(c.G.Target,{children:(0,t.jsx)(a.k,{placeholder:"Pick value"})}),(0,t.jsxs)(c.G.Dropdown,{children:[(0,t.jsx)(c.G.Header,{children:"Combobox header"}),(0,t.jsx)(c.G.Search,{placeholder:"Search input"}),(0,t.jsxs)(c.G.Options,{children:[(0,t.jsxs)(c.G.Group,{label:"First group",children:[(0,t.jsx)(c.G.Option,{value:"1",children:"First"}),(0,t.jsx)(c.G.Option,{value:"2",children:"Second"})]}),(0,t.jsxs)(c.G.Group,{label:"Second group",children:[(0,t.jsx)(c.G.Option,{value:"3",children:"Third"}),(0,t.jsx)(c.G.Option,{value:"4",children:"Fourth"})]}),(0,t.jsx)(c.G.Group,{label:"Third group",children:(0,t.jsx)(c.G.Empty,{children:"Nothing found in this group..."})})]}),(0,t.jsx)(c.G.Footer,{children:"Combobox footer"})]})]})},code:H};var U=n(85954),q=n(38215);let K=(0,U.P)(q.XZ.Combobox);function Q(o){let e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...o.components},{Demo:n,ExamplesButton:i,StylesApiSelectors:l}=e;return n||$("Demo",!0),i||$("ExamplesButton",!0),l||$("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(e.p,{children:["This page contains only a small set of examples, as the full code of the demos is long.\nYou can find all 50+ examples on a ",(0,t.jsx)(e.a,{href:"/combobox?e=BasicSelect",children:"separate page"}),"."]}),"\n",(0,t.jsx)(i,{link:"/combobox?e=BasicSelect",label:"Open Combobox examples page"}),"\n",(0,t.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Combobox"})," provides a set of components and hooks to custom select, multiselect or autocomplete components.\nThe component is very flexible – you have full control of the rendering and logic."]}),"\n",(0,t.jsx)(n,{data:s.L}),"\n",(0,t.jsx)(e.h2,{id:"usecombobox-hook",children:"useCombobox hook"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"useCombobox"})," hook provides combobox store. The store contains the current state of the component\nand handlers to update it. Created store must be passed to the ",(0,t.jsx)(e.code,{children:"store"})," prop of ",(0,t.jsx)(e.code,{children:"Combobox"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import { Combobox, useCombobox } from '@mantine/core';\n\nfunction Demo() {\n  const combobox = useCombobox();\n  return (\n    <Combobox store={combobox}>{/* Your implementation */}</Combobox>\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"usecombobox-options",children:"useCombobox options"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"useCombobox"})," hooks accepts an options object with the following properties:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"interface UseComboboxOptions {\n  /** Default value for `dropdownOpened`, `false` by default */\n  defaultOpened?: boolean;\n\n  /** Controlled `dropdownOpened` state */\n  opened?: boolean;\n\n  /** Called when `dropdownOpened` state changes */\n  onOpenedChange?(opened: boolean): void;\n\n  /** Called when dropdown closes with event source: keyboard, mouse or unknown */\n  onDropdownClose?(eventSource: ComboboxDropdownEventSource): void;\n\n  /** Called when dropdown opens with event source: keyboard, mouse or unknown */\n  onDropdownOpen?(eventSource: ComboboxDropdownEventSource): void;\n\n  /** Determines whether arrow key presses should loop though items (first to last and last to first), `true` by default */\n  loop?: boolean;\n\n  /** `behavior` passed down to `element.scrollIntoView`, `'instant'` by default */\n  scrollBehavior?: ScrollBehavior;\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["You can import ",(0,t.jsx)(e.code,{children:"UseComboboxOptions"})," type from ",(0,t.jsx)(e.code,{children:"@mantine/core"})," package:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import type { UseComboboxOptions } from '@mantine/core';\n"})}),"\n",(0,t.jsx)(e.h2,{id:"combobox-store",children:"Combobox store"}),"\n",(0,t.jsx)(e.p,{children:"Combobox store is an object with the following properties:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"interface ComboboxStore {\n  /** Current dropdown opened state */\n  dropdownOpened: boolean;\n\n  /** Opens dropdown */\n  openDropdown(eventSource?: 'keyboard' | 'mouse' | 'unknown'): void;\n\n  /** Closes dropdown */\n  closeDropdown(eventSource?: 'keyboard' | 'mouse' | 'unknown'): void;\n\n  /** Toggles dropdown opened state */\n  toggleDropdown(\n    eventSource?: 'keyboard' | 'mouse' | 'unknown'\n  ): void;\n\n  /** Selected option index */\n  selectedOptionIndex: number;\n\n  /** Selects `Combobox.Option` by index */\n  selectOption(index: number): void;\n\n  /** Selects first `Combobox.Option` with `active` prop.\n   *  If there are no such options, the function does nothing.\n   */\n  selectActiveOption(): string | null;\n\n  /** Selects first `Combobox.Option` that is not disabled.\n   *  If there are no such options, the function does nothing.\n   * */\n  selectFirstOption(): string | null;\n\n  /** Selects next `Combobox.Option` that is not disabled.\n   *  If the current option is the last one, the function selects first option, if `loop` is true.\n   */\n  selectNextOption(): string | null;\n\n  /** Selects previous `Combobox.Option` that is not disabled.\n   *  If the current option is the first one, the function selects last option, if `loop` is true.\n   * */\n  selectPreviousOption(): string | null;\n\n  /** Resets selected option index to -1, removes `data-combobox-selected` from selected option */\n  resetSelectedOption(): void;\n\n  /** Triggers `onClick` event of selected option.\n   *  If there is no selected option, the function does nothing.\n   */\n  clickSelectedOption(): void;\n\n  /** Updates selected option index to currently selected or active option.\n   *  The function is required to be used with searchable components to update selected option index\n   *  when options list changes based on search query.\n   */\n  updateSelectedOptionIndex(target?: 'active' | 'selected'): void;\n\n  /** List id, used for `aria-*` attributes */\n  listId: string | null;\n\n  /** Sets list id */\n  setListId(id: string): void;\n\n  /** Ref of `Combobox.Search` input */\n  searchRef: React.MutableRefObject<HTMLInputElement | null>;\n\n  /** Moves focus to `Combobox.Search` input */\n  focusSearchInput(): void;\n\n  /** Ref of the target element */\n  targetRef: React.MutableRefObject<HTMLElement | null>;\n\n  /** Moves focus to the target element */\n  focusTarget(): void;\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["You can import ",(0,t.jsx)(e.code,{children:"ComboboxStore"})," type from ",(0,t.jsx)(e.code,{children:"@mantine/core"})," package:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import type { ComboboxStore } from '@mantine/core';\n"})}),"\n",(0,t.jsx)(e.h2,{id:"usecombobox-handlers",children:"useCombobox handlers"}),"\n",(0,t.jsxs)(e.p,{children:["Combobox store handlers can be used to control ",(0,t.jsx)(e.code,{children:"Combobox"})," state.\nFor example, to open the dropdown, call ",(0,t.jsx)(e.code,{children:"openDropdown"})," handler:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import { Button, Combobox, useCombobox } from '@mantine/core';\n\nfunction Demo() {\n  const combobox = useCombobox();\n\n  return (\n    <Combobox>\n      <Combobox.Target>\n        <Button onClick={() => combobox.openDropdown()}>\n          Open dropdown\n        </Button>\n      </Combobox.Target>\n\n      {/* Your implementation */}\n    </Combobox>\n  );\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["You can use store handlers in ",(0,t.jsx)(e.code,{children:"useCombobox"})," options. For example, you can\ncall ",(0,t.jsx)(e.code,{children:"selectFirstOption"})," when the dropdown is opened and ",(0,t.jsx)(e.code,{children:"resetSelectedOption"}),"\nwhen it is closed:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import { Combobox, useCombobox } from '@mantine/core';\n\nfunction Demo() {\n  const combobox = useCombobox({\n    onDropdownOpen: () => combobox.selectFirstOption(),\n    onDropdownClose: () => combobox.resetSelectedOption(),\n  });\n\n  return (\n    <Combobox store={combobox}>{/* Your implementation */}</Combobox>\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"comboboxtarget",children:"Combobox.Target"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Combobox.Target"})," should be used as a wrapper for the target element or component.\n",(0,t.jsx)(e.code,{children:"Combobox.Target"})," marks its child as a target for dropdown and sets ",(0,t.jsx)(e.code,{children:"aria-*"})," attributes\nand adds keyboard event listeners to it."]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Combobox.Target"})," requires a single child element or component. The child component\nmust accept ",(0,t.jsx)(e.code,{children:"ref"})," and ",(0,t.jsx)(e.code,{children:"...others"})," props. You can use any Mantine component as a target without\nany additional configuration, for example, ",(0,t.jsx)(e.a,{href:"/core/button/",children:"Button"}),", ",(0,t.jsx)(e.a,{href:"/core/text-input/",children:"TextInput"}),"\nor ",(0,t.jsx)(e.a,{href:"/core/input/#inputbase-component",children:"InputBase"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Example of using ",(0,t.jsx)(e.code,{children:"Combobox.Target"})," with ",(0,t.jsx)(e.a,{href:"/core/text-input/",children:"TextInput"})," component:"]}),"\n",(0,t.jsx)(n,{data:d}),"\n",(0,t.jsxs)(e.p,{children:["Example of using ",(0,t.jsx)(e.code,{children:"Combobox.Target"})," with ",(0,t.jsx)(e.a,{href:"/core/button",children:"Button"})," component:"]}),"\n",(0,t.jsx)(n,{data:h}),"\n",(0,t.jsx)(e.h2,{id:"split-events-and-dropdown-targets",children:"Split events and dropdown targets"}),"\n",(0,t.jsxs)(e.p,{children:["In some cases, you might need to use different elements as an events target and as a dropdown.\nUse ",(0,t.jsx)(e.code,{children:"Combobox.EventsTarget"})," to add ",(0,t.jsx)(e.code,{children:"aria-*"})," attributes and keyboard event handlers, and\n",(0,t.jsx)(e.code,{children:"Combobox.DropdownTarget"})," to position the dropdown relative to the target."]}),"\n",(0,t.jsxs)(e.p,{children:["You can have as many ",(0,t.jsx)(e.code,{children:"Combobox.EventsTarget"})," as you need, but only one ",(0,t.jsx)(e.code,{children:"Combobox.DropdownTarget"}),"\nper ",(0,t.jsx)(e.code,{children:"Combobox"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Example of using ",(0,t.jsx)(e.code,{children:"Combobox.EventsTarget"})," and ",(0,t.jsx)(e.code,{children:"Combobox.DropdownTarget"})," with ",(0,t.jsx)(e.a,{href:"/core/pills-input",children:"PillsInput"})," component\nto create a searchable multiselect component:"]}),"\n",(0,t.jsx)(n,{data:C.Q}),"\n",(0,t.jsx)(e.h2,{id:"update-selected-option-index",children:"Update selected option index"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"updateSelectedOptionIndex"})," handler is required to be called when options list changes.\nUsually, the options list changes when options are filtered based on the search query. In this case,\nyou need to call ",(0,t.jsx)(e.code,{children:"updateSelectedOptionIndex"})," in ",(0,t.jsx)(e.code,{children:"onChange"})," handler of the search input."]}),"\n",(0,t.jsxs)(e.p,{children:["Example of using ",(0,t.jsx)(e.code,{children:"updateSelectedOptionIndex"})," handler in searchable select component:"]}),"\n",(0,t.jsx)(n,{data:w}),"\n",(0,t.jsx)(e.h2,{id:"search-input",children:"Search input"}),"\n",(0,t.jsxs)(e.p,{children:["If you prefer search input inside the dropdown, use ",(0,t.jsx)(e.code,{children:"Combobox.Search"})," component.\nTo focus the search input, call ",(0,t.jsx)(e.code,{children:"combobox.focusSearchInput"}),", usually it is done\nwhen the dropdown is opened. To prevent focus loss after the dropdown is closed,\ncall ",(0,t.jsx)(e.code,{children:"combobox.focusTarget"}),":"]}),"\n",(0,t.jsx)(n,{data:f}),"\n",(0,t.jsx)(e.h2,{id:"select-first-option",children:"Select first option"}),"\n",(0,t.jsxs)(e.p,{children:["Use ",(0,t.jsx)(e.code,{children:"combobox.selectFirstOption"})," function to select the first option. It is useful\nif you want to select the first option when user searching for options in the list.\nIf there are no options available, it will do nothing."]}),"\n",(0,t.jsx)(n,{data:S}),"\n",(0,t.jsx)(e.h2,{id:"active-option",children:"Active option"}),"\n",(0,t.jsxs)(e.p,{children:["Set ",(0,t.jsx)(e.code,{children:"active"})," prop on ",(0,t.jsx)(e.code,{children:"Combobox.Option"})," component to mark it as active.\nBy default, an active option does not have any styles, you can use ",(0,t.jsx)(e.code,{children:"data-combobox-active"}),"\n",(0,t.jsx)(e.a,{href:"/styles/data-attributes",children:"data attribute"})," to style it."]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"combobox.selectActiveOption"})," function selects active option. Usually, it is called\nwhen the dropdown is opened:"]}),"\n",(0,t.jsx)(n,{data:G}),"\n",(0,t.jsx)(e.h2,{id:"options-groups",children:"Options groups"}),"\n",(0,t.jsxs)(e.p,{children:["Render ",(0,t.jsx)(e.code,{children:"Combobox.Option"})," components inside ",(0,t.jsx)(e.code,{children:"Combobox.Group"})," to create options group.\n",(0,t.jsx)(e.code,{children:"Combobox.Group"})," label will be automatically hidden if the group does not have any\nchildren."]}),"\n",(0,t.jsx)(n,{data:k}),"\n",(0,t.jsx)(e.h2,{id:"scrollable-list",children:"Scrollable list"}),"\n",(0,t.jsxs)(e.p,{children:["Set ",(0,t.jsx)(e.code,{children:"max-height"})," style on either ",(0,t.jsx)(e.code,{children:"Combobox.Dropdown"})," or ",(0,t.jsx)(e.code,{children:"Combobox.Options"})," to make the\noptions list scrollable. You can use ",(0,t.jsx)(e.code,{children:"mah"})," ",(0,t.jsx)(e.a,{href:"/styles/style-props",children:"style prop"})," to set\n",(0,t.jsx)(e.code,{children:"max-height"}),"."]}),"\n",(0,t.jsx)(n,{data:I}),"\n",(0,t.jsx)(e.h2,{id:"scrollable-list-with-scrollarea",children:"Scrollable list with ScrollArea"}),"\n",(0,t.jsxs)(e.p,{children:["You can also use ",(0,t.jsx)(e.a,{href:"/core/scroll-area",children:"ScrollArea or ScrollArea.Autosize"})," components\ninstead of native scrollbars:"]}),"\n",(0,t.jsx)(n,{data:A}),"\n",(0,t.jsx)(e.h2,{id:"hide-dropdown",children:"Hide dropdown"}),"\n",(0,t.jsxs)(e.p,{children:["Set ",(0,t.jsx)(e.code,{children:"hidden"})," prop on ",(0,t.jsx)(e.code,{children:"Combobox.Dropdown"})," to hide the dropdown. For example,\nit can be useful when you want to show the dropdown only when there is at least\none option available:"]}),"\n",(0,t.jsx)(n,{data:L}),"\n",(0,t.jsx)(e.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,t.jsxs)(e.p,{children:["To control the dropdown opened state, pass ",(0,t.jsx)(e.code,{children:"opened"})," to ",(0,t.jsx)(e.code,{children:"useCombobox"})," hook:"]}),"\n",(0,t.jsx)(n,{data:z}),"\n",(0,t.jsx)(e.h2,{id:"popover-props",children:"Popover props"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Combobox"})," supports most of ",(0,t.jsx)(e.a,{href:"/core/popover",children:"Popover"})," props. For example,\nyou can control dropdown position with ",(0,t.jsx)(e.code,{children:"position"})," prop and disable Floating UI\nmiddlewares with ",(0,t.jsx)(e.code,{children:"middlewares"})," prop:"]}),"\n",(0,t.jsx)(n,{data:R}),"\n",(0,t.jsx)(e.h2,{id:"without-dropdown",children:"Without dropdown"}),"\n",(0,t.jsxs)(e.p,{children:["You can use ",(0,t.jsx)(e.code,{children:"Combobox"})," without dropdown. To do so, use ",(0,t.jsx)(e.code,{children:"Combobox.EventsTarget"})," instead\nof ",(0,t.jsx)(e.code,{children:"Combobox.Target"}),":"]}),"\n",(0,t.jsx)(n,{data:_}),"\n",(0,t.jsx)(l,{component:"Combobox"}),"\n",(0,t.jsx)(n,{data:W})]})}function X(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(K,{...o,children:(0,t.jsx)(Q,{...o})})}function $(o,e){throw Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}},23145:(o,e,n)=>{"use strict";n.d(e,{Q:()=>b});var t=n(31085),r=n(14041),s=n(88559),i=n(31778),l=n(31791),c=n(56051),a=n(5583),p=n(42215);let d=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],b={type:"code",component:function(){let o=(0,s.B)({onDropdownClose:()=>o.resetSelectedOption(),onDropdownOpen:()=>o.updateSelectedOptionIndex("active")}),[e,n]=(0,r.useState)(""),[b,u]=(0,r.useState)([]),m=o=>u(e=>e.filter(e=>e!==o)),x=b.map(o=>(0,t.jsx)(i.a,{withRemoveButton:!0,onRemove:()=>m(o),children:o},o)),h=d.filter(o=>o.toLowerCase().includes(e.trim().toLowerCase())).map(o=>(0,t.jsx)(l.G.Option,{value:o,active:b.includes(o),children:(0,t.jsxs)(c.Y,{gap:"sm",children:[b.includes(o)?(0,t.jsx)(a.S,{size:12}):null,(0,t.jsx)("span",{children:o})]})},o));return(0,t.jsxs)(l.G,{store:o,onOptionSubmit:o=>u(e=>e.includes(o)?e.filter(e=>e!==o):[...e,o]),children:[(0,t.jsx)(l.G.DropdownTarget,{children:(0,t.jsx)(p.t,{onClick:()=>o.openDropdown(),children:(0,t.jsxs)(i.a.Group,{children:[x,(0,t.jsx)(l.G.EventsTarget,{children:(0,t.jsx)(p.t.Field,{onFocus:()=>o.openDropdown(),onBlur:()=>o.closeDropdown(),value:e,placeholder:"Search values",onChange:e=>{o.updateSelectedOptionIndex(),n(e.currentTarget.value)},onKeyDown:o=>{"Backspace"===o.key&&0===e.length&&(o.preventDefault(),m(b[b.length-1]))}})})]})})}),(0,t.jsx)(l.G.Dropdown,{children:(0,t.jsx)(l.G.Options,{children:h.length>0?h:(0,t.jsx)(l.G.Empty,{children:"Nothing found..."})})})]})},code:`
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
`,centered:!0,defaultExpanded:!1,maxWidth:340}},57314:(o,e,n)=>{"use strict";n.d(e,{L:()=>p});var t=n(31085),r=n(14041),s=n(88559),i=n(31791),l=n(87059),c=n(34452);let a=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],p={type:"code",component:function(){let o=(0,s.B)({onDropdownClose:()=>o.resetSelectedOption()}),[e,n]=(0,r.useState)(null),p=a.map(o=>(0,t.jsx)(i.G.Option,{value:o,children:o},o));return(0,t.jsxs)(i.G,{store:o,onOptionSubmit:e=>{n(e),o.closeDropdown()},children:[(0,t.jsx)(i.G.Target,{children:(0,t.jsx)(l.O,{component:"button",type:"button",pointer:!0,rightSection:(0,t.jsx)(i.G.Chevron,{}),rightSectionPointerEvents:"none",onClick:()=>o.toggleDropdown(),children:e||(0,t.jsx)(c.p.Placeholder,{children:"Pick value"})})}),(0,t.jsx)(i.G.Dropdown,{children:(0,t.jsx)(i.G.Options,{children:p})})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['\u{1F34E} Apples', '\u{1F34C} Bananas', '\u{1F966} Broccoli', '\u{1F955} Carrots', '\u{1F36B} Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const [value, setValue] = useState<string | null>(null);

  const options = groceries.map((item) => (
    <Combobox.Option value={item} key={item}>
      {item}
    </Combobox.Option>
  ));

  return (
    <Combobox
      store={combobox}
      onOptionSubmit={(val) => {
        setValue(val);
        combobox.closeDropdown();
      }}
    >
      <Combobox.Target>
        <InputBase
          component="button"
          type="button"
          pointer
          rightSection={<Combobox.Chevron />}
          rightSectionPointerEvents="none"
          onClick={() => combobox.toggleDropdown()}
        >
          {value || <Input.Placeholder>Pick value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>

      <Combobox.Dropdown>
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`}},31778:(o,e,n)=>{"use strict";n.d(e,{a:()=>w});var t=n(31085);n(14041);var r=n(33450),s=n(7098),i=n(29686),l=n(69564),c=n(34056),a=n(6754),p=n(94310),d=n(73418);let[b,u]=(0,n(49128).e)();var m={root:"m_7cda1cd6","root--default":"m_44da308b","root--contrast":"m_e3a01f8",label:"m_1e0e6180",remove:"m_ae386778",group:"m_1dcfd90b"};let x={},h=(0,s.V)((o,{gap:e},{size:n})=>({group:{"--pg-gap":void 0!==e?(0,r.YC)(e):(0,r.YC)(n,"pg-gap")}})),C=(0,a.P9)((o,e)=>{let n=(0,i.Y)("PillGroup",x,o),{classNames:r,className:s,style:a,styles:p,unstyled:u,vars:C,size:g,disabled:v,...w}=n,j=(0,d.n)(),f=j?.size||g||void 0,O=(0,l.I)({name:"PillGroup",classes:m,props:n,className:s,style:a,classNames:r,styles:p,unstyled:u,vars:C,varsResolver:h,stylesCtx:{size:f},rootSelector:"group"});return(0,t.jsx)(b,{value:{size:f,disabled:v},children:(0,t.jsx)(c.a,{ref:e,size:f,...O("group"),...w})})});C.classes=m,C.displayName="@mantine/core/PillGroup";let g={variant:"default"},v=(0,s.V)((o,{radius:e},{size:n})=>({root:{"--pill-fz":(0,r.YC)(n,"pill-fz"),"--pill-height":(0,r.YC)(n,"pill-height"),"--pill-radius":void 0===e?void 0:(0,r.nJ)(e)}})),w=(0,a.P9)((o,e)=>{let n=(0,i.Y)("Pill",g,o),{classNames:r,className:s,style:a,styles:b,unstyled:x,vars:h,variant:C,children:w,withRemoveButton:j,onRemove:f,removeButtonProps:O,radius:S,size:D,disabled:F,mod:y,...B}=n,G=u(),k=(0,d.n)(),T=D||G?.size||void 0,I=k?.variant==="filled"?"contrast":C||"default",P=(0,l.I)({name:"Pill",classes:m,props:n,className:s,style:a,classNames:r,styles:b,unstyled:x,vars:h,varsResolver:v,stylesCtx:{size:T}});return(0,t.jsxs)(c.a,{component:"span",ref:e,variant:I,size:T,...P("root",{variant:I}),mod:[{"with-remove":j&&!F,disabled:F||G?.disabled},y],...B,children:[(0,t.jsx)("span",{...P("label"),children:w}),j&&(0,t.jsx)(p.J,{variant:"transparent",radius:S,tabIndex:-1,"aria-hidden":!0,unstyled:x,...O,...P("remove",{className:O?.className,style:O?.style}),onMouseDown:o=>{o.preventDefault(),o.stopPropagation(),O?.onMouseDown?.(o)},onClick:o=>{o.stopPropagation(),f?.(),O?.onClick?.(o)}})]})});w.classes=m,w.displayName="@mantine/core/Pill",w.Group=C},73418:(o,e,n)=>{"use strict";n.d(e,{n:()=>r,q:()=>t}),n(14041),n(31085);let[t,r]=(0,n(49128).e)()},42215:(o,e,n)=>{"use strict";n.d(e,{t:()=>C});var t=n(31085),r=n(14041),s=n(29686),i=n(6754),l=n(87059),c=n(73418),a=n(34321),p=n(69564),d=n(34056),b=n(62363),u={field:"m_45c4369d"};let m={type:"visible"},x=(0,i.P9)((o,e)=>{let n=(0,s.Y)("PillsInputField",m,o),{classNames:r,className:i,style:l,styles:x,unstyled:h,vars:C,type:g,disabled:v,id:w,pointer:j,mod:f,...O}=n,S=(0,c.n)(),D=(0,b.e)(),F=(0,p.I)({name:"PillsInputField",classes:u,props:n,className:i,style:l,classNames:r,styles:x,unstyled:h,rootSelector:"field"}),y=v||S?.disabled;return(0,t.jsx)(d.a,{component:"input",ref:(0,a.pc)(e,S?.fieldRef),"data-type":g,disabled:y,mod:[{disabled:y,pointer:j},f],...F("field"),...O,id:D?.inputId||w,"aria-invalid":S?.hasError,"aria-describedby":D?.describedBy,type:"text",onMouseDown:o=>!j&&o.stopPropagation()})});x.classes=u,x.displayName="@mantine/core/PillsInputField";let h={},C=(0,i.P9)((o,e)=>{let{children:n,onMouseDown:i,onClick:a,size:p,disabled:d,__staticSelector:b,error:u,variant:m,...x}=(0,s.Y)("PillsInput",h,o),C=(0,r.useRef)(null);return(0,t.jsx)(c.q,{value:{fieldRef:C,size:p,disabled:d,hasError:!!u,variant:m},children:(0,t.jsx)(l.O,{size:p,error:u,variant:m,component:"div",ref:e,onMouseDown:o=>{o.preventDefault(),i?.(o),C.current?.focus()},onClick:o=>{o.preventDefault(),a?.(o),C.current?.focus()},...x,multiline:!0,disabled:d,__staticSelector:b||"PillsInput",withAria:!1,children:n})})});C.displayName="@mantine/core/PillsInput",C.Field=x}},o=>{var e=e=>o(o.s=e);o.O(0,[67456,39699,68831,31791,90636,46593,38792],()=>e(30861)),_N_E=o.O()}]);