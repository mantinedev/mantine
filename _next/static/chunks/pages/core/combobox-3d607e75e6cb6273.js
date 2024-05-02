(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7012],{72580:function(o,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/combobox",function(){return n(82921)}])},82921:function(o,e,n){"use strict";n.r(e),n.d(e,{default:function(){return oc}});var t=n(52322),r=n(45392),s=n(89237),i=n(2784),l=n(56237),c=n(61324),a=n(74770);let p=`
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
`,d=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],u={type:"code",component:function(){let o=(0,l.K)(),[e,n]=(0,i.useState)(""),r=!d.some(o=>o===e),s=r?d.filter(o=>o.toLowerCase().includes(e.toLowerCase().trim())):d,p=s.map(o=>(0,t.jsx)(c.h.Option,{value:o,children:o},o));return(0,t.jsxs)(c.h,{onOptionSubmit:e=>{n(e),o.closeDropdown()},store:o,children:[(0,t.jsx)(c.h.Target,{children:(0,t.jsx)(a.o,{label:"Pick value or type anything",placeholder:"Pick value or type anything",value:e,onChange:e=>{n(e.currentTarget.value),o.openDropdown(),o.updateSelectedOptionIndex()},onClick:()=>o.openDropdown(),onFocus:()=>o.openDropdown(),onBlur:()=>o.closeDropdown()})}),(0,t.jsx)(c.h.Dropdown,{children:(0,t.jsx)(c.h.Options,{children:0===p.length?(0,t.jsx)(c.h.Empty,{children:"Nothing found"}):p})})]})},centered:!0,maxWidth:340,defaultExpanded:!1,code:p};var b=n(28559),Text=n(8582),m=n(17115);let x=`
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
`,h=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],C={type:"code",component:function(){let[o,e]=(0,i.useState)(null),n=(0,l.K)({onDropdownClose:()=>n.resetSelectedOption()}),r=h.map(o=>(0,t.jsx)(c.h.Option,{value:o,children:o},o));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(b.x,{mb:"xs",children:[(0,t.jsxs)(Text.x,{span:!0,size:"sm",c:"dimmed",children:["Selected item:"," "]}),(0,t.jsx)(Text.x,{span:!0,size:"sm",children:o||"Nothing selected"})]}),(0,t.jsxs)(c.h,{store:n,width:250,position:"bottom-start",withArrow:!0,onOptionSubmit:o=>{e(o),n.closeDropdown()},children:[(0,t.jsx)(c.h.Target,{children:(0,t.jsx)(m.z,{onClick:()=>n.toggleDropdown(),children:"Pick item"})}),(0,t.jsx)(c.h.Dropdown,{children:(0,t.jsx)(c.h.Options,{children:r})})]})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:x};var g=n(83355),v=n(73063);let w=`
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
`,j=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],f={type:"code",component:function(){let o=(0,l.K)({onDropdownClose:()=>o.resetSelectedOption()}),[e,n]=(0,i.useState)(null),[r,s]=(0,i.useState)(""),a=j.every(o=>o!==r),p=a?j.filter(o=>o.toLowerCase().includes(r.toLowerCase().trim())):j,d=p.map(o=>(0,t.jsx)(c.h.Option,{value:o,children:o},o));return(0,t.jsxs)(c.h,{store:o,onOptionSubmit:e=>{n(e),s(e),o.closeDropdown()},children:[(0,t.jsx)(c.h.Target,{children:(0,t.jsx)(v.M,{rightSection:(0,t.jsx)(c.h.Chevron,{}),rightSectionPointerEvents:"none",onClick:()=>o.openDropdown(),onFocus:()=>o.openDropdown(),onBlur:()=>{o.closeDropdown(),s(e||"")},placeholder:"Search value",value:r,onChange:e=>{o.updateSelectedOptionIndex(),s(e.currentTarget.value)}})}),(0,t.jsx)(c.h.Dropdown,{children:(0,t.jsx)(c.h.Options,{children:d.length>0?d:(0,t.jsx)(c.h.Empty,{children:"Nothing found"})})})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:w},O=`
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
`,S=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],D={type:"code",component:function(){let[o,e]=(0,i.useState)(""),[n,r]=(0,i.useState)(null),s=(0,l.K)({onDropdownClose:()=>{s.resetSelectedOption(),s.focusTarget(),e("")},onDropdownOpen:()=>{s.focusSearchInput()}}),a=S.filter(e=>e.toLowerCase().includes(o.toLowerCase().trim())).map(o=>(0,t.jsx)(c.h.Option,{value:o,children:o},o));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(b.x,{mb:"xs",children:[(0,t.jsxs)(Text.x,{span:!0,size:"sm",c:"dimmed",children:["Selected item:"," "]}),(0,t.jsx)(Text.x,{span:!0,size:"sm",children:n||"Nothing selected"})]}),(0,t.jsxs)(c.h,{store:s,width:250,position:"bottom-start",withArrow:!0,onOptionSubmit:o=>{r(o),s.closeDropdown()},children:[(0,t.jsx)(c.h.Target,{withAriaAttributes:!1,children:(0,t.jsx)(m.z,{onClick:()=>s.toggleDropdown(),children:"Pick item"})}),(0,t.jsxs)(c.h.Dropdown,{children:[(0,t.jsx)(c.h.Search,{value:o,onChange:o=>e(o.currentTarget.value),placeholder:"Search groceries"}),(0,t.jsx)(c.h.Options,{children:a.length>0?a:(0,t.jsx)(c.h.Empty,{children:"Nothing found"})})]})]})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:O},F=`
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
`,y=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],B={type:"code",component:function(){let o=(0,l.K)({onDropdownClose:()=>o.resetSelectedOption()}),[e,n]=(0,i.useState)(""),r=!y.some(o=>o===e),s=r?y.filter(o=>o.toLowerCase().includes(e.toLowerCase().trim())):y,p=s.map(o=>(0,t.jsx)(c.h.Option,{value:o,children:o},o));return(0,i.useEffect)(()=>{o.selectFirstOption()},[e]),(0,t.jsxs)(c.h,{onOptionSubmit:e=>{n(e),o.closeDropdown()},store:o,children:[(0,t.jsx)(c.h.Target,{children:(0,t.jsx)(a.o,{label:"Pick value or type anything",placeholder:"Pick value or type anything",value:e,onChange:e=>{n(e.currentTarget.value),o.openDropdown()},onClick:()=>o.openDropdown(),onFocus:()=>o.openDropdown(),onBlur:()=>o.closeDropdown()})}),(0,t.jsx)(c.h.Dropdown,{children:(0,t.jsx)(c.h.Options,{children:0===p.length?(0,t.jsx)(c.h.Empty,{children:"Nothing found"}):p})})]})},centered:!0,maxWidth:340,defaultExpanded:!1,code:F};var T=n(93010),k=n(40284),I=n(6941);let P=`
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
`,E=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],A={type:"code",component:function(){let o=(0,l.K)({onDropdownClose:()=>o.resetSelectedOption(),onDropdownOpen:e=>{"keyboard"===e?o.selectActiveOption():o.updateSelectedOptionIndex("active")}}),[e,n]=(0,i.useState)("\uD83E\uDD66 Broccoli"),r=E.map(o=>(0,t.jsx)(c.h.Option,{value:o,active:o===e,children:(0,t.jsxs)(T.Z,{gap:"xs",children:[o===e&&(0,t.jsx)(k.n,{size:12}),(0,t.jsx)("span",{children:o})]})},o));return(0,t.jsxs)(c.h,{store:o,resetSelectionOnOptionHover:!0,onOptionSubmit:e=>{n(e),o.updateSelectedOptionIndex("active")},children:[(0,t.jsx)(c.h.Target,{targetType:"button",children:(0,t.jsx)(v.M,{component:"button",type:"button",pointer:!0,rightSection:(0,t.jsx)(c.h.Chevron,{}),rightSectionPointerEvents:"none",onClick:()=>o.toggleDropdown(),children:e||(0,t.jsx)(I.I.Placeholder,{children:"Pick value"})})}),(0,t.jsx)(c.h.Dropdown,{children:(0,t.jsx)(c.h.Options,{children:r})})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:P},V=`
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
`,L={type:"code",component:function(){let o=(0,l.K)({onDropdownClose:()=>o.resetSelectedOption()}),[e,n]=(0,i.useState)(null);return(0,t.jsxs)(c.h,{store:o,onOptionSubmit:e=>{n(e),o.closeDropdown()},children:[(0,t.jsx)(c.h.Target,{children:(0,t.jsx)(v.M,{component:"button",type:"button",pointer:!0,rightSection:(0,t.jsx)(c.h.Chevron,{}),rightSectionPointerEvents:"none",onClick:()=>o.toggleDropdown(),children:e||(0,t.jsx)(I.I.Placeholder,{children:"Pick value"})})}),(0,t.jsx)(c.h.Dropdown,{children:(0,t.jsxs)(c.h.Options,{children:[(0,t.jsxs)(c.h.Group,{label:"Fruits",children:[(0,t.jsx)(c.h.Option,{value:"\uD83C\uDF4E Apples",children:"\uD83C\uDF4E Apples"}),(0,t.jsx)(c.h.Option,{value:"\uD83C\uDF4C Bananas",children:"\uD83C\uDF4C Bananas"}),(0,t.jsx)(c.h.Option,{value:"\uD83C\uDF47 Grape",children:"\uD83C\uDF47 Grape"})]}),(0,t.jsxs)(c.h.Group,{label:"Vegetables",children:[(0,t.jsx)(c.h.Option,{value:"\uD83E\uDD66 Broccoli",children:"\uD83E\uDD66 Broccoli"}),(0,t.jsx)(c.h.Option,{value:"\uD83E\uDD55 Carrots",children:"\uD83E\uDD55 Carrots"}),(0,t.jsx)(c.h.Option,{value:"\uD83E\uDD6C Lettuce",children:"\uD83E\uDD6C Lettuce"})]})]})})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:V},G=`
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
`,z=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate","\uD83C\uDF47 Grapes","\uD83C\uDF4B Lemon","\uD83E\uDD6C Lettuce","\uD83C\uDF44 Mushrooms","\uD83C\uDF4A Oranges","\uD83E\uDD54 Potatoes","\uD83C\uDF45 Tomatoes","\uD83E\uDD5A Eggs","\uD83E\uDD5B Milk","\uD83C\uDF5E Bread","\uD83C\uDF57 Chicken","\uD83C\uDF54 Hamburger","\uD83E\uDDC0 Cheese","\uD83E\uDD69 Steak","\uD83C\uDF5F French Fries","\uD83C\uDF55 Pizza","\uD83E\uDD66 Cauliflower","\uD83E\uDD5C Peanuts","\uD83C\uDF66 Ice Cream","\uD83C\uDF6F Honey","\uD83E\uDD56 Baguette","\uD83C\uDF63 Sushi","\uD83E\uDD5D Kiwi","\uD83C\uDF53 Strawberries"],N={type:"code",component:function(){let o=(0,l.K)({onDropdownClose:()=>o.resetSelectedOption()}),[e,n]=(0,i.useState)(null),r=z.map(o=>(0,t.jsx)(c.h.Option,{value:o,children:o},o));return(0,t.jsxs)(c.h,{store:o,onOptionSubmit:e=>{n(e),o.closeDropdown()},children:[(0,t.jsx)(c.h.Target,{children:(0,t.jsx)(v.M,{component:"button",type:"button",pointer:!0,rightSection:(0,t.jsx)(c.h.Chevron,{}),rightSectionPointerEvents:"none",onClick:()=>o.toggleDropdown(),children:e||(0,t.jsx)(I.I.Placeholder,{children:"Pick value"})})}),(0,t.jsx)(c.h.Dropdown,{children:(0,t.jsx)(c.h.Options,{mah:200,style:{overflowY:"auto"},children:r})})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:G};var M=n(38405);let R=`
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
`,K=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate","\uD83C\uDF47 Grapes","\uD83C\uDF4B Lemon","\uD83E\uDD6C Lettuce","\uD83C\uDF44 Mushrooms","\uD83C\uDF4A Oranges","\uD83E\uDD54 Potatoes","\uD83C\uDF45 Tomatoes","\uD83E\uDD5A Eggs","\uD83E\uDD5B Milk","\uD83C\uDF5E Bread","\uD83C\uDF57 Chicken","\uD83C\uDF54 Hamburger","\uD83E\uDDC0 Cheese","\uD83E\uDD69 Steak","\uD83C\uDF5F French Fries","\uD83C\uDF55 Pizza","\uD83E\uDD66 Cauliflower","\uD83E\uDD5C Peanuts","\uD83C\uDF66 Ice Cream","\uD83C\uDF6F Honey","\uD83E\uDD56 Baguette","\uD83C\uDF63 Sushi","\uD83E\uDD5D Kiwi","\uD83C\uDF53 Strawberries"],_={type:"code",component:function(){let o=(0,l.K)({onDropdownClose:()=>o.resetSelectedOption()}),[e,n]=(0,i.useState)(null),r=K.map(o=>(0,t.jsx)(c.h.Option,{value:o,children:o},o));return(0,t.jsxs)(c.h,{store:o,onOptionSubmit:e=>{n(e),o.closeDropdown()},children:[(0,t.jsx)(c.h.Target,{children:(0,t.jsx)(v.M,{component:"button",type:"button",pointer:!0,rightSection:(0,t.jsx)(c.h.Chevron,{}),rightSectionPointerEvents:"none",onClick:()=>o.toggleDropdown(),children:e||(0,t.jsx)(I.I.Placeholder,{children:"Pick value"})})}),(0,t.jsx)(c.h.Dropdown,{children:(0,t.jsx)(c.h.Options,{children:(0,t.jsx)(M.x.Autosize,{type:"scroll",mah:200,children:r})})})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:R},H=`
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
`,Y=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],W={type:"code",component:function(){let o=(0,l.K)(),[e,n]=(0,i.useState)(""),r=!Y.some(o=>o===e),s=r?Y.filter(o=>o.toLowerCase().includes(e.toLowerCase().trim())):Y,p=s.map(o=>(0,t.jsx)(c.h.Option,{value:o,children:o},o));return(0,t.jsxs)(c.h,{onOptionSubmit:e=>{n(e),o.closeDropdown()},store:o,children:[(0,t.jsx)(c.h.Target,{children:(0,t.jsx)(a.o,{label:"Pick value or type anything",placeholder:"Pick value or type anything",value:e,onChange:e=>{n(e.currentTarget.value),o.openDropdown()},onClick:()=>o.openDropdown(),onFocus:()=>o.openDropdown(),onBlur:()=>o.closeDropdown()})}),(0,t.jsx)(c.h.Dropdown,{hidden:0===p.length,children:(0,t.jsx)(c.h.Options,{children:p})})]})},centered:!0,maxWidth:340,defaultExpanded:!1,code:H},U=`
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
`,q=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],Z={type:"code",component:function(){let[o,e]=(0,i.useState)(!1),n=(0,l.K)({opened:o}),r=q.map(o=>(0,t.jsx)(c.h.Option,{value:o,children:o},o));return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.z,{mb:"md",onClick:()=>e(o=>!o),children:"Toggle dropdown"}),(0,t.jsxs)(c.h,{store:n,children:[(0,t.jsx)(c.h.Target,{children:(0,t.jsx)(a.o,{label:"Autocomplete",description:"Dropdown is opened/closed when button is clicked",placeholder:"Click button to toggle dropdown"})}),(0,t.jsx)(c.h.Dropdown,{children:(0,t.jsx)(c.h.Options,{children:r})})]})]})},code:U,maxWidth:340,centered:!0,defaultExpanded:!1},X=`
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
`,$=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],J={type:"code",component:function(){let o=(0,l.K)({onDropdownClose:()=>o.resetSelectedOption()}),[e,n]=(0,i.useState)(null),r=$.map(o=>(0,t.jsx)(c.h.Option,{value:o,children:o},o));return(0,t.jsxs)(c.h,{store:o,position:"bottom",middlewares:{flip:!1,shift:!1},onOptionSubmit:e=>{n(e),o.closeDropdown()},children:[(0,t.jsx)(c.h.Target,{children:(0,t.jsx)(v.M,{component:"button",type:"button",pointer:!0,rightSection:(0,t.jsx)(c.h.Chevron,{}),rightSectionPointerEvents:"none",onClick:()=>o.toggleDropdown(),children:e||(0,t.jsx)(I.I.Placeholder,{children:"Pick value"})})}),(0,t.jsx)(c.h.Dropdown,{children:(0,t.jsx)(c.h.Options,{children:r})})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:X},Q=`
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
`,oo={type:"code",component:function(){let[o,e]=(0,i.useState)("");return(0,t.jsxs)(c.h,{onOptionSubmit:e,children:[(0,t.jsx)(c.h.EventsTarget,{children:(0,t.jsx)(a.o,{placeholder:"Pick value",value:o,onChange:o=>e(o.currentTarget.value)})}),(0,t.jsxs)(c.h.Options,{mt:"sm",children:[(0,t.jsx)(c.h.Option,{value:"First",children:"First"}),(0,t.jsx)(c.h.Option,{value:"Second",children:"Second"}),(0,t.jsx)(c.h.Option,{value:"Third",children:"Third"})]})]})},code:Q,centered:!0,maxWidth:340,defaultExpanded:!1};var oe=n(43814);let on=`
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
`,ot={type:"styles-api",data:oe.$,component:function(o){let e=(0,l.K)({opened:!0});return(0,t.jsxs)(c.h,{store:e,...o,middlewares:{flip:!1,shift:!1},children:[(0,t.jsx)(c.h.Target,{children:(0,t.jsx)(a.o,{placeholder:"Pick value"})}),(0,t.jsxs)(c.h.Dropdown,{children:[(0,t.jsx)(c.h.Header,{children:"Combobox header"}),(0,t.jsx)(c.h.Search,{placeholder:"Search input"}),(0,t.jsxs)(c.h.Options,{children:[(0,t.jsxs)(c.h.Group,{label:"First group",children:[(0,t.jsx)(c.h.Option,{value:"1",children:"First"}),(0,t.jsx)(c.h.Option,{value:"2",children:"Second"})]}),(0,t.jsxs)(c.h.Group,{label:"Second group",children:[(0,t.jsx)(c.h.Option,{value:"3",children:"Third"}),(0,t.jsx)(c.h.Option,{value:"4",children:"Fourth"})]}),(0,t.jsx)(c.h.Group,{label:"Third group",children:(0,t.jsx)(c.h.Empty,{children:"Nothing found in this group..."})})]}),(0,t.jsx)(c.h.Footer,{children:"Combobox footer"})]})]})},code:on};var or=n(79016),os=n(33638);let oi=(0,or.A)(os.us.Combobox);function ol(o){let e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...o.components},{Demo:n,ExamplesButton:i,StylesApiSelectors:l}=e;return n||oa("Demo",!0),i||oa("ExamplesButton",!0),l||oa("StylesApiSelectors",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,t.jsxs)(e.p,{children:["This page contains only a small set of examples, as the full code of the demos is long.\nYou can find all 50+ examples on a ",(0,t.jsx)(e.a,{href:"/combobox?e=BasicSelect",children:"separate page"}),"."]}),"\n",(0,t.jsx)(i,{link:"/combobox?e=BasicSelect",label:"Open Combobox examples page"}),"\n",(0,t.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Combobox"})," provides a set of components and hooks to custom select, multiselect or autocomplete components.\nThe component is very flexible – you have full control of the rendering and logic."]}),"\n",(0,t.jsx)(n,{data:s.Y}),"\n",(0,t.jsx)(e.h2,{id:"usecombobox-hook",children:"useCombobox hook"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"useCombobox"})," hook provides combobox store. The store contains the current state of the component\nand handlers to update it. Created store must be passed to the ",(0,t.jsx)(e.code,{children:"store"})," prop of ",(0,t.jsx)(e.code,{children:"Combobox"}),":"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import { Combobox, useCombobox } from '@mantine/core';\n\nfunction Demo() {\n  const combobox = useCombobox();\n  return (\n    <Combobox store={combobox}>{/* Your implementation */}</Combobox>\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"usecombobox-options",children:"useCombobox options"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"useCombobox"})," hooks accepts an options object with the following properties:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"interface UseComboboxOptions {\n  /** Default value for `dropdownOpened`, `false` by default */\n  defaultOpened?: boolean;\n\n  /** Controlled `dropdownOpened` state */\n  opened?: boolean;\n\n  /** Called when `dropdownOpened` state changes */\n  onOpenedChange?(opened: boolean): void;\n\n  /** Called when dropdown closes with event source: keyboard, mouse or unknown */\n  onDropdownClose?(eventSource: ComboboxDropdownEventSource): void;\n\n  /** Called when dropdown opens with event source: keyboard, mouse or unknown */\n  onDropdownOpen?(eventSource: ComboboxDropdownEventSource): void;\n\n  /** Determines whether arrow key presses should loop though items (first to last and last to first), `true` by default */\n  loop?: boolean;\n\n  /** `behavior` passed down to `element.scrollIntoView`, `'instant'` by default */\n  scrollBehavior?: ScrollBehavior;\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["You can import ",(0,t.jsx)(e.code,{children:"UseComboboxOptions"})," type from ",(0,t.jsx)(e.code,{children:"@mantine/core"})," package:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import type { UseComboboxOptions } from '@mantine/core';\n"})}),"\n",(0,t.jsx)(e.h2,{id:"combobox-store",children:"Combobox store"}),"\n",(0,t.jsx)(e.p,{children:"Combobox store is an object with the following properties:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"interface ComboboxStore {\n  /** Current dropdown opened state */\n  dropdownOpened: boolean;\n\n  /** Opens dropdown */\n  openDropdown(eventSource?: 'keyboard' | 'mouse' | 'unknown'): void;\n\n  /** Closes dropdown */\n  closeDropdown(eventSource?: 'keyboard' | 'mouse' | 'unknown'): void;\n\n  /** Toggles dropdown opened state */\n  toggleDropdown(\n    eventSource?: 'keyboard' | 'mouse' | 'unknown'\n  ): void;\n\n  /** Selected option index */\n  selectedOptionIndex: number;\n\n  /** Selects `Combobox.Option` by index */\n  selectOption(index: number): void;\n\n  /** Selects first `Combobox.Option` with `active` prop.\n   *  If there are no such options, the function does nothing.\n   */\n  selectActiveOption(): string | null;\n\n  /** Selects first `Combobox.Option` that is not disabled.\n   *  If there are no such options, the function does nothing.\n   * */\n  selectFirstOption(): string | null;\n\n  /** Selects next `Combobox.Option` that is not disabled.\n   *  If the current option is the last one, the function selects first option, if `loop` is true.\n   */\n  selectNextOption(): string | null;\n\n  /** Selects previous `Combobox.Option` that is not disabled.\n   *  If the current option is the first one, the function selects last option, if `loop` is true.\n   * */\n  selectPreviousOption(): string | null;\n\n  /** Resets selected option index to -1, removes `data-combobox-selected` from selected option */\n  resetSelectedOption(): void;\n\n  /** Triggers `onClick` event of selected option.\n   *  If there is no selected option, the function does nothing.\n   */\n  clickSelectedOption(): void;\n\n  /** Updates selected option index to currently selected or active option.\n   *  The function is required to be used with searchable components to update selected option index\n   *  when options list changes based on search query.\n   */\n  updateSelectedOptionIndex(target?: 'active' | 'selected'): void;\n\n  /** List id, used for `aria-*` attributes */\n  listId: string | null;\n\n  /** Sets list id */\n  setListId(id: string): void;\n\n  /** Ref of `Combobox.Search` input */\n  searchRef: React.MutableRefObject<HTMLInputElement | null>;\n\n  /** Moves focus to `Combobox.Search` input */\n  focusSearchInput(): void;\n\n  /** Ref of the target element */\n  targetRef: React.MutableRefObject<HTMLElement | null>;\n\n  /** Moves focus to the target element */\n  focusTarget(): void;\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["You can import ",(0,t.jsx)(e.code,{children:"ComboboxStore"})," type from ",(0,t.jsx)(e.code,{children:"@mantine/core"})," package:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import type { ComboboxStore } from '@mantine/core';\n"})}),"\n",(0,t.jsx)(e.h2,{id:"usecombobox-handlers",children:"useCombobox handlers"}),"\n",(0,t.jsxs)(e.p,{children:["Combobox store handlers can be used to control ",(0,t.jsx)(e.code,{children:"Combobox"})," state.\nFor example, to open the dropdown, call ",(0,t.jsx)(e.code,{children:"openDropdown"})," handler:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import { Button, Combobox, useCombobox } from '@mantine/core';\n\nfunction Demo() {\n  const combobox = useCombobox();\n\n  return (\n    <Combobox>\n      <Combobox.Target>\n        <Button onClick={() => combobox.openDropdown()}>\n          Open dropdown\n        </Button>\n      </Combobox.Target>\n\n      {/* Your implementation */}\n    </Combobox>\n  );\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:["You can use store handlers in ",(0,t.jsx)(e.code,{children:"useCombobox"})," options. For example, you can\ncall ",(0,t.jsx)(e.code,{children:"selectFirstOption"})," when the dropdown is opened and ",(0,t.jsx)(e.code,{children:"resetSelectedOption"}),"\nwhen it is closed:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"import { Combobox, useCombobox } from '@mantine/core';\n\nfunction Demo() {\n  const combobox = useCombobox({\n    onDropdownOpen: () => combobox.selectFirstOption(),\n    onDropdownClose: () => combobox.resetSelectedOption(),\n  });\n\n  return (\n    <Combobox store={combobox}>{/* Your implementation */}</Combobox>\n  );\n}\n"})}),"\n",(0,t.jsx)(e.h2,{id:"comboboxtarget",children:"Combobox.Target"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Combobox.Target"})," should be used as a wrapper for the target element or component.\n",(0,t.jsx)(e.code,{children:"Combobox.Target"})," marks its child as a target for dropdown and sets ",(0,t.jsx)(e.code,{children:"aria-*"})," attributes\nand adds keyboard event listeners to it."]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Combobox.Target"})," requires a single child element or component. The child component\nmust accept ",(0,t.jsx)(e.code,{children:"ref"})," and ",(0,t.jsx)(e.code,{children:"...others"})," props. You can use any Mantine component as a target without\nany additional configuration, for example, ",(0,t.jsx)(e.a,{href:"/core/button/",children:"Button"}),", ",(0,t.jsx)(e.a,{href:"/core/text-input/",children:"TextInput"}),"\nor ",(0,t.jsx)(e.a,{href:"/core/input/#inputbase-component",children:"InputBase"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Example of using ",(0,t.jsx)(e.code,{children:"Combobox.Target"})," with ",(0,t.jsx)(e.a,{href:"/core/text-input/",children:"TextInput"})," component:"]}),"\n",(0,t.jsx)(n,{data:u}),"\n",(0,t.jsxs)(e.p,{children:["Example of using ",(0,t.jsx)(e.code,{children:"Combobox.Target"})," with ",(0,t.jsx)(e.a,{href:"/core/button",children:"Button"})," component:"]}),"\n",(0,t.jsx)(n,{data:C}),"\n",(0,t.jsx)(e.h2,{id:"split-events-and-dropdown-targets",children:"Split events and dropdown targets"}),"\n",(0,t.jsxs)(e.p,{children:["In some cases, you might need to use different elements as an events target and as a dropdown.\nUse ",(0,t.jsx)(e.code,{children:"Combobox.EventsTarget"})," to add ",(0,t.jsx)(e.code,{children:"aria-*"})," attributes and keyboard event handlers, and\n",(0,t.jsx)(e.code,{children:"Combobox.DropdownTarget"})," to position the dropdown relative to the target."]}),"\n",(0,t.jsxs)(e.p,{children:["You can have as many ",(0,t.jsx)(e.code,{children:"Combobox.EventsTarget"})," as you need, but only one ",(0,t.jsx)(e.code,{children:"Combobox.DropdownTarget"}),"\nper ",(0,t.jsx)(e.code,{children:"Combobox"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["Example of using ",(0,t.jsx)(e.code,{children:"Combobox.EventsTarget"})," and ",(0,t.jsx)(e.code,{children:"Combobox.DropdownTarget"})," with ",(0,t.jsx)(e.a,{href:"/core/pills-input",children:"PillsInput"})," component\nto create a searchable multiselect component:"]}),"\n",(0,t.jsx)(n,{data:g.R}),"\n",(0,t.jsx)(e.h2,{id:"update-selected-option-index",children:"Update selected option index"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"updateSelectedOptionIndex"})," handler is required to be called when options list changes.\nUsually, the options list changes when options are filtered based on the search query. In this case,\nyou need to call ",(0,t.jsx)(e.code,{children:"updateSelectedOptionIndex"})," in ",(0,t.jsx)(e.code,{children:"onChange"})," handler of the search input."]}),"\n",(0,t.jsxs)(e.p,{children:["Example of using ",(0,t.jsx)(e.code,{children:"updateSelectedOptionIndex"})," handler in searchable select component:"]}),"\n",(0,t.jsx)(n,{data:f}),"\n",(0,t.jsx)(e.h2,{id:"search-input",children:"Search input"}),"\n",(0,t.jsxs)(e.p,{children:["If you prefer search input inside the dropdown, use ",(0,t.jsx)(e.code,{children:"Combobox.Search"})," component.\nTo focus the search input, call ",(0,t.jsx)(e.code,{children:"combobox.focusSearchInput"}),", usually it is done\nwhen the dropdown is opened. To prevent focus loss after the dropdown is closed,\ncall ",(0,t.jsx)(e.code,{children:"combobox.focusTarget"}),":"]}),"\n",(0,t.jsx)(n,{data:D}),"\n",(0,t.jsx)(e.h2,{id:"select-first-option",children:"Select first option"}),"\n",(0,t.jsxs)(e.p,{children:["Use ",(0,t.jsx)(e.code,{children:"combobox.selectFirstOption"})," function to select the first option. It is useful\nif you want to select the first option when user searching for options in the list.\nIf there are no options available, it will do nothing."]}),"\n",(0,t.jsx)(n,{data:B}),"\n",(0,t.jsx)(e.h2,{id:"active-option",children:"Active option"}),"\n",(0,t.jsxs)(e.p,{children:["Set ",(0,t.jsx)(e.code,{children:"active"})," prop on ",(0,t.jsx)(e.code,{children:"Combobox.Option"})," component to mark it as active.\nBy default, an active option does not have any styles, you can use ",(0,t.jsx)(e.code,{children:"data-combobox-active"}),"\n",(0,t.jsx)(e.a,{href:"/styles/data-attributes",children:"data attribute"})," to style it."]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"combobox.selectActiveOption"})," function selects active option. Usually, it is called\nwhen the dropdown is opened:"]}),"\n",(0,t.jsx)(n,{data:A}),"\n",(0,t.jsx)(e.h2,{id:"options-groups",children:"Options groups"}),"\n",(0,t.jsxs)(e.p,{children:["Render ",(0,t.jsx)(e.code,{children:"Combobox.Option"})," components inside ",(0,t.jsx)(e.code,{children:"Combobox.Group"})," to create options group.\n",(0,t.jsx)(e.code,{children:"Combobox.Group"})," label will be automatically hidden if the group does not have any\nchildren."]}),"\n",(0,t.jsx)(n,{data:L}),"\n",(0,t.jsx)(e.h2,{id:"scrollable-list",children:"Scrollable list"}),"\n",(0,t.jsxs)(e.p,{children:["Set ",(0,t.jsx)(e.code,{children:"max-height"})," style on either ",(0,t.jsx)(e.code,{children:"Combobox.Dropdown"})," or ",(0,t.jsx)(e.code,{children:"Combobox.Options"})," to make the\noptions list scrollable. You can use ",(0,t.jsx)(e.code,{children:"mah"})," ",(0,t.jsx)(e.a,{href:"/styles/style-props",children:"style prop"})," to set\n",(0,t.jsx)(e.code,{children:"max-height"}),"."]}),"\n",(0,t.jsx)(n,{data:N}),"\n",(0,t.jsx)(e.h2,{id:"scrollable-list-with-scrollarea",children:"Scrollable list with ScrollArea"}),"\n",(0,t.jsxs)(e.p,{children:["You can also use ",(0,t.jsx)(e.a,{href:"/core/scroll-area",children:"ScrollArea or ScrollArea.Autosize"})," components\ninstead of native scrollbars:"]}),"\n",(0,t.jsx)(n,{data:_}),"\n",(0,t.jsx)(e.h2,{id:"hide-dropdown",children:"Hide dropdown"}),"\n",(0,t.jsxs)(e.p,{children:["Set ",(0,t.jsx)(e.code,{children:"hidden"})," prop on ",(0,t.jsx)(e.code,{children:"Combobox.Dropdown"})," to hide the dropdown. For example,\nit can be useful when you want to show the dropdown only when there is at least\none option available:"]}),"\n",(0,t.jsx)(n,{data:W}),"\n",(0,t.jsx)(e.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,t.jsxs)(e.p,{children:["To control the dropdown opened state, pass ",(0,t.jsx)(e.code,{children:"opened"})," to ",(0,t.jsx)(e.code,{children:"useCombobox"})," hook:"]}),"\n",(0,t.jsx)(n,{data:Z}),"\n",(0,t.jsx)(e.h2,{id:"popover-props",children:"Popover props"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.code,{children:"Combobox"})," supports most of ",(0,t.jsx)(e.a,{href:"/core/popover",children:"Popover"})," props. For example,\nyou can control dropdown position with ",(0,t.jsx)(e.code,{children:"position"})," prop and disable Floating UI\nmiddlewares with ",(0,t.jsx)(e.code,{children:"middlewares"})," prop:"]}),"\n",(0,t.jsx)(n,{data:J}),"\n",(0,t.jsx)(e.h2,{id:"without-dropdown",children:"Without dropdown"}),"\n",(0,t.jsxs)(e.p,{children:["You can use ",(0,t.jsx)(e.code,{children:"Combobox"})," without dropdown. To do so, use ",(0,t.jsx)(e.code,{children:"Combobox.EventsTarget"})," instead\nof ",(0,t.jsx)(e.code,{children:"Combobox.Target"}),":"]}),"\n",(0,t.jsx)(n,{data:oo}),"\n",(0,t.jsx)(l,{component:"Combobox"}),"\n",(0,t.jsx)(n,{data:ot})]})}function oc(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,t.jsx)(oi,{...o,children:(0,t.jsx)(ol,{...o})})}function oa(o,e){throw Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}},83355:function(o,e,n){"use strict";n.d(e,{R:function(){return b}});var t=n(52322),r=n(2784),s=n(56237),i=n(45855),l=n(61324),c=n(93010),a=n(40284),p=n(92258);let d=`
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
`,u=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],b={type:"code",component:function(){let o=(0,s.K)({onDropdownClose:()=>o.resetSelectedOption(),onDropdownOpen:()=>o.updateSelectedOptionIndex("active")}),[e,n]=(0,r.useState)(""),[d,b]=(0,r.useState)([]),m=o=>b(e=>e.filter(e=>e!==o)),x=d.map(o=>(0,t.jsx)(i.D,{withRemoveButton:!0,onRemove:()=>m(o),children:o},o)),h=u.filter(o=>o.toLowerCase().includes(e.trim().toLowerCase())).map(o=>(0,t.jsx)(l.h.Option,{value:o,active:d.includes(o),children:(0,t.jsxs)(c.Z,{gap:"sm",children:[d.includes(o)?(0,t.jsx)(a.n,{size:12}):null,(0,t.jsx)("span",{children:o})]})},o));return(0,t.jsxs)(l.h,{store:o,onOptionSubmit:o=>b(e=>e.includes(o)?e.filter(e=>e!==o):[...e,o]),children:[(0,t.jsx)(l.h.DropdownTarget,{children:(0,t.jsx)(p.d,{onClick:()=>o.openDropdown(),children:(0,t.jsxs)(i.D.Group,{children:[x,(0,t.jsx)(l.h.EventsTarget,{children:(0,t.jsx)(p.d.Field,{onFocus:()=>o.openDropdown(),onBlur:()=>o.closeDropdown(),value:e,placeholder:"Search values",onChange:e=>{o.updateSelectedOptionIndex(),n(e.currentTarget.value)},onKeyDown:o=>{"Backspace"===o.key&&0===e.length&&(o.preventDefault(),m(d[d.length-1]))}})})]})})}),(0,t.jsx)(l.h.Dropdown,{children:(0,t.jsx)(l.h.Options,{children:h.length>0?h:(0,t.jsx)(l.h.Empty,{children:"Nothing found..."})})})]})},code:d,centered:!0,defaultExpanded:!1,maxWidth:340}},89237:function(o,e,n){"use strict";n.d(e,{Y:function(){return d}});var t=n(52322),r=n(2784),s=n(56237),i=n(61324),l=n(73063),c=n(6941);let a=`
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
`,p=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],d={type:"code",component:function(){let o=(0,s.K)({onDropdownClose:()=>o.resetSelectedOption()}),[e,n]=(0,r.useState)(null),a=p.map(o=>(0,t.jsx)(i.h.Option,{value:o,children:o},o));return(0,t.jsxs)(i.h,{store:o,onOptionSubmit:e=>{n(e),o.closeDropdown()},children:[(0,t.jsx)(i.h.Target,{children:(0,t.jsx)(l.M,{component:"button",type:"button",pointer:!0,rightSection:(0,t.jsx)(i.h.Chevron,{}),rightSectionPointerEvents:"none",onClick:()=>o.toggleDropdown(),children:e||(0,t.jsx)(c.I.Placeholder,{children:"Pick value"})})}),(0,t.jsx)(i.h.Dropdown,{children:(0,t.jsx)(i.h.Options,{children:a})})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:a}},45855:function(o,e,n){"use strict";n.d(e,{D:function(){return j}});var t=n(52322);n(2784);var r=n(91482),s=n(11200),i=n(38483),l=n(46690),c=n(28559),a=n(82027),p=n(2670),d=n(7450),u=n(75336);let[b,m]=(0,u.V)();var x={root:"m_7cda1cd6","root--default":"m_44da308b","root--contrast":"m_e3a01f8",label:"m_1e0e6180",remove:"m_ae386778",group:"m_1dcfd90b"};let h={},C=(0,s.Z)((o,{gap:e},{size:n})=>({group:{"--pg-gap":void 0!==e?(0,r.ap)(e):(0,r.ap)(n,"pg-gap")}})),g=(0,a.d)((o,e)=>{let n=(0,i.w)("PillGroup",h,o),{classNames:r,className:s,style:a,styles:p,unstyled:u,vars:m,size:g,disabled:v,...w}=n,j=(0,d.D)(),f=j?.size||g||void 0,O=(0,l.y)({name:"PillGroup",classes:x,props:n,className:s,style:a,classNames:r,styles:p,unstyled:u,vars:m,varsResolver:C,stylesCtx:{size:f},rootSelector:"group"});return(0,t.jsx)(b,{value:{size:f,disabled:v},children:(0,t.jsx)(c.x,{ref:e,size:f,...O("group"),...w})})});g.classes=x,g.displayName="@mantine/core/PillGroup";let v={variant:"default"},w=(0,s.Z)((o,{radius:e},{size:n})=>({root:{"--pill-fz":(0,r.ap)(n,"pill-fz"),"--pill-height":(0,r.ap)(n,"pill-height"),"--pill-radius":void 0===e?void 0:(0,r.H5)(e)}})),j=(0,a.d)((o,e)=>{let n=(0,i.w)("Pill",v,o),{classNames:r,className:s,style:a,styles:u,unstyled:b,vars:h,variant:C,children:g,withRemoveButton:j,onRemove:f,removeButtonProps:O,radius:S,size:D,disabled:F,mod:y,...B}=n,T=m(),k=(0,d.D)(),I=D||T?.size||void 0,P=k?.variant==="filled"?"contrast":C||"default",E=(0,l.y)({name:"Pill",classes:x,props:n,className:s,style:a,classNames:r,styles:u,unstyled:b,vars:h,varsResolver:w,stylesCtx:{size:I}});return(0,t.jsxs)(c.x,{component:"span",ref:e,variant:P,size:I,...E("root",{variant:P}),mod:[{"with-remove":j&&!F,disabled:F||T?.disabled},y],...B,children:[(0,t.jsx)("span",{...E("label"),children:g}),j&&(0,t.jsx)(p.P,{variant:"transparent",radius:S,tabIndex:-1,"aria-hidden":!0,unstyled:b,...O,...E("remove",{className:O?.className,style:O?.style}),onMouseDown:o=>{o.preventDefault(),o.stopPropagation(),O?.onMouseDown?.(o)},onClick:o=>{o.stopPropagation(),f?.(),O?.onClick?.(o)}})]})});j.classes=x,j.displayName="@mantine/core/Pill",j.Group=g},7450:function(o,e,n){"use strict";n.d(e,{D:function(){return s},H:function(){return r}}),n(2784),n(52322);var t=n(75336);let[r,s]=(0,t.V)()},92258:function(o,e,n){"use strict";n.d(e,{d:function(){return C}});var t=n(52322),r=n(2784),s=n(38483),i=n(82027),l=n(73063),c=n(7450),a=n(70837),p=n(46690),d=n(28559),u=n(69349),b={field:"m_45c4369d"};let m={type:"visible"},x=(0,i.d)((o,e)=>{let n=(0,s.w)("PillsInputField",m,o),{classNames:r,className:i,style:l,styles:x,unstyled:h,vars:C,type:g,disabled:v,id:w,pointer:j,mod:f,...O}=n,S=(0,c.D)(),D=(0,u.D)(),F=(0,p.y)({name:"PillsInputField",classes:b,props:n,className:i,style:l,classNames:r,styles:x,unstyled:h,rootSelector:"field"}),y=v||S?.disabled;return(0,t.jsx)(d.x,{component:"input",ref:(0,a.Yx)(e,S?.fieldRef),"data-type":g,disabled:y,mod:[{disabled:y,pointer:j},f],...F("field"),...O,id:D?.inputId||w,"aria-invalid":S?.hasError,"aria-describedby":D?.describedBy,type:"text",onMouseDown:o=>!j&&o.stopPropagation()})});x.classes=b,x.displayName="@mantine/core/PillsInputField";let h={},C=(0,i.d)((o,e)=>{let n=(0,s.w)("PillsInput",h,o),{children:i,onMouseDown:a,onClick:p,size:d,disabled:u,__staticSelector:b,error:m,variant:x,...C}=n,g=(0,r.useRef)();return(0,t.jsx)(c.H,{value:{fieldRef:g,size:d,disabled:u,hasError:!!m,variant:x},children:(0,t.jsx)(l.M,{size:d,error:m,variant:x,component:"div",ref:e,onMouseDown:o=>{o.preventDefault(),a?.(o),g.current?.focus()},onClick:o=>{o.preventDefault(),p?.(o),g.current?.focus()},...C,multiline:!0,disabled:u,__staticSelector:b||"PillsInput",withAria:!1,children:i})})});C.displayName="@mantine/core/PillsInput",C.Field=x}},function(o){o.O(0,[57938,17454,47747,61324,49774,92888,40179],function(){return o(o.s=72580)}),_N_E=o.O()}]);