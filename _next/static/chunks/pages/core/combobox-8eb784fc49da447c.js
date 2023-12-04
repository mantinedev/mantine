(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7012],{90342:function(e,o,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/combobox",function(){return t(2920)}])},2920:function(e,o,t){"use strict";t.r(o),t.d(o,{default:function(){return el}});var n=t(24246),r=t(71670),l=t(3916),a=t(30289),s=t(46378),i=t(27378),c=t(54526),p=t(45608),u=t(7033);let m=`
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
`,d=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],b={type:"code",component:function(){let e=(0,c.K)(),[o,t]=(0,i.useState)(""),n=!d.some(e=>e===o),r=n?d.filter(e=>e.toLowerCase().includes(o.toLowerCase().trim())):d,l=r.map(e=>i.createElement(p.h.Option,{value:e,key:e},e));return i.createElement(p.h,{onOptionSubmit:o=>{t(o),e.closeDropdown()},store:e},i.createElement(p.h.Target,null,i.createElement(u.o,{label:"Pick value or type anything",placeholder:"Pick value or type anything",value:o,onChange:o=>{t(o.currentTarget.value),e.openDropdown(),e.updateSelectedOptionIndex()},onClick:()=>e.openDropdown(),onFocus:()=>e.openDropdown(),onBlur:()=>e.closeDropdown()})),i.createElement(p.h.Dropdown,null,i.createElement(p.h.Options,null,0===l.length?i.createElement(p.h.Empty,null,"Nothing found"):l)))},centered:!0,maxWidth:340,defaultExpanded:!1,code:m};var x=t(56589),Text=t(26569),h=t(8671);let C=`
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
`,g=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],v={type:"code",component:function(){let[e,o]=(0,i.useState)(null),t=(0,c.K)({onDropdownClose:()=>t.resetSelectedOption()}),n=g.map(e=>i.createElement(p.h.Option,{value:e,key:e},e));return i.createElement(i.Fragment,null,i.createElement(x.x,{mb:"xs"},i.createElement(Text.x,{span:!0,size:"sm",c:"dimmed"},"Selected item:"," "),i.createElement(Text.x,{span:!0,size:"sm"},e||"Nothing selected")),i.createElement(p.h,{store:t,width:250,position:"bottom-start",withArrow:!0,onOptionSubmit:e=>{o(e),t.closeDropdown()}},i.createElement(p.h.Target,null,i.createElement(h.z,{onClick:()=>t.toggleDropdown()},"Pick item")),i.createElement(p.h.Dropdown,null,i.createElement(p.h.Options,null,n))))},maxWidth:340,centered:!0,defaultExpanded:!1,code:C};var w=t(81320),f=t(23163);let O=`
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
`,E=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],S={type:"code",component:function(){let e=(0,c.K)({onDropdownClose:()=>e.resetSelectedOption()}),[o,t]=(0,i.useState)(null),[n,r]=(0,i.useState)(""),l=E.every(e=>e!==n),a=l?E.filter(e=>e.toLowerCase().includes(n.toLowerCase().trim())):E,s=a.map(e=>i.createElement(p.h.Option,{value:e,key:e},e));return i.createElement(p.h,{store:e,onOptionSubmit:o=>{t(o),r(o),e.closeDropdown()}},i.createElement(p.h.Target,null,i.createElement(f.M,{rightSection:i.createElement(p.h.Chevron,null),onClick:()=>e.openDropdown(),onFocus:()=>e.openDropdown(),onBlur:()=>{e.closeDropdown(),r(o||"")},placeholder:"Search value",value:n,onChange:o=>{e.updateSelectedOptionIndex(),r(o.currentTarget.value)}})),i.createElement(p.h.Dropdown,null,i.createElement(p.h.Options,null,s.length>0?s:i.createElement(p.h.Empty,null,"Nothing found"))))},maxWidth:340,centered:!0,defaultExpanded:!1,code:O},D=`
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
`,F=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],y={type:"code",component:function(){let[e,o]=(0,i.useState)(""),[t,n]=(0,i.useState)(null),r=(0,c.K)({onDropdownClose:()=>{r.resetSelectedOption(),r.focusTarget(),o("")},onDropdownOpen:()=>{r.focusSearchInput()}}),l=F.filter(o=>o.toLowerCase().includes(e.toLowerCase().trim())).map(e=>i.createElement(p.h.Option,{value:e,key:e},e));return i.createElement(i.Fragment,null,i.createElement(x.x,{mb:"xs"},i.createElement(Text.x,{span:!0,size:"sm",c:"dimmed"},"Selected item:"," "),i.createElement(Text.x,{span:!0,size:"sm"},t||"Nothing selected")),i.createElement(p.h,{store:r,width:250,position:"bottom-start",withArrow:!0,onOptionSubmit:e=>{n(e),r.closeDropdown()}},i.createElement(p.h.Target,{withAriaAttributes:!1},i.createElement(h.z,{onClick:()=>r.toggleDropdown()},"Pick item")),i.createElement(p.h.Dropdown,null,i.createElement(p.h.Search,{value:e,onChange:e=>o(e.currentTarget.value),placeholder:"Search groceries"}),i.createElement(p.h.Options,null,l.length>0?l:i.createElement(p.h.Empty,null,"Nothing found")))))},maxWidth:340,centered:!0,defaultExpanded:!1,code:D},j=`
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
`,k=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],B={type:"code",component:function(){let e=(0,c.K)({onDropdownClose:()=>e.resetSelectedOption()}),[o,t]=(0,i.useState)(""),n=!k.some(e=>e===o),r=n?k.filter(e=>e.toLowerCase().includes(o.toLowerCase().trim())):k,l=r.map(e=>i.createElement(p.h.Option,{value:e,key:e},e));return(0,i.useEffect)(()=>{e.selectFirstOption()},[o]),i.createElement(p.h,{onOptionSubmit:o=>{t(o),e.closeDropdown()},store:e},i.createElement(p.h.Target,null,i.createElement(u.o,{label:"Pick value or type anything",placeholder:"Pick value or type anything",value:o,onChange:o=>{t(o.currentTarget.value),e.openDropdown()},onClick:()=>e.openDropdown(),onFocus:()=>e.openDropdown(),onBlur:()=>e.closeDropdown()})),i.createElement(p.h.Dropdown,null,i.createElement(p.h.Options,null,0===l.length?i.createElement(p.h.Empty,null,"Nothing found"):l)))},centered:!0,maxWidth:340,defaultExpanded:!1,code:j};var T=t(22971),I=t(38765),P=t(42487);let A=`
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
          pointer
          rightSection={<Combobox.Chevron />}
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
`,V=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],L={type:"code",component:function(){let e=(0,c.K)({onDropdownClose:()=>e.resetSelectedOption(),onDropdownOpen:o=>{"keyboard"===o?e.selectActiveOption():e.updateSelectedOptionIndex("active")}}),[o,t]=(0,i.useState)("\uD83E\uDD66 Broccoli"),n=V.map(e=>i.createElement(p.h.Option,{value:e,key:e,active:e===o},i.createElement(T.Z,{gap:"xs"},e===o&&i.createElement(I.n,{size:12}),i.createElement("span",null,e))));return i.createElement(p.h,{store:e,resetSelectionOnOptionHover:!0,onOptionSubmit:o=>{t(o),e.updateSelectedOptionIndex("active")}},i.createElement(p.h.Target,{targetType:"button"},i.createElement(f.M,{component:"button",pointer:!0,rightSection:i.createElement(p.h.Chevron,null),onClick:()=>e.toggleDropdown()},o||i.createElement(P.I.Placeholder,null,"Pick value"))),i.createElement(p.h.Dropdown,null,i.createElement(p.h.Options,null,n)))},maxWidth:340,centered:!0,defaultExpanded:!1,code:A},G=`
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
          pointer
          rightSection={<Combobox.Chevron />}
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
`,z={type:"code",component:function(){let e=(0,c.K)({onDropdownClose:()=>e.resetSelectedOption()}),[o,t]=(0,i.useState)(null);return i.createElement(p.h,{store:e,onOptionSubmit:o=>{t(o),e.closeDropdown()}},i.createElement(p.h.Target,null,i.createElement(f.M,{component:"button",pointer:!0,rightSection:i.createElement(p.h.Chevron,null),onClick:()=>e.toggleDropdown()},o||i.createElement(P.I.Placeholder,null,"Pick value"))),i.createElement(p.h.Dropdown,null,i.createElement(p.h.Options,null,i.createElement(p.h.Group,{label:"Fruits"},i.createElement(p.h.Option,{value:"\uD83C\uDF4E Apples"},"\uD83C\uDF4E Apples"),i.createElement(p.h.Option,{value:"\uD83C\uDF4C Bananas"},"\uD83C\uDF4C Bananas"),i.createElement(p.h.Option,{value:"\uD83C\uDF47 Grape"},"\uD83C\uDF47 Grape")),i.createElement(p.h.Group,{label:"Vegetables"},i.createElement(p.h.Option,{value:"\uD83E\uDD66 Broccoli"},"\uD83E\uDD66 Broccoli"),i.createElement(p.h.Option,{value:"\uD83E\uDD55 Carrots"},"\uD83E\uDD55 Carrots"),i.createElement(p.h.Option,{value:"\uD83E\uDD6C Lettuce"},"\uD83E\uDD6C Lettuce")))))},maxWidth:340,centered:!0,defaultExpanded:!1,code:G},N=`
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
          pointer
          rightSection={<Combobox.Chevron />}
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
`,M=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate","\uD83C\uDF47 Grapes","\uD83C\uDF4B Lemon","\uD83E\uDD6C Lettuce","\uD83C\uDF44 Mushrooms","\uD83C\uDF4A Oranges","\uD83E\uDD54 Potatoes","\uD83C\uDF45 Tomatoes","\uD83E\uDD5A Eggs","\uD83E\uDD5B Milk","\uD83C\uDF5E Bread","\uD83C\uDF57 Chicken","\uD83C\uDF54 Hamburger","\uD83E\uDDC0 Cheese","\uD83E\uDD69 Steak","\uD83C\uDF5F French Fries","\uD83C\uDF55 Pizza","\uD83E\uDD66 Cauliflower","\uD83E\uDD5C Peanuts","\uD83C\uDF66 Ice Cream","\uD83C\uDF6F Honey","\uD83E\uDD56 Baguette","\uD83C\uDF63 Sushi","\uD83E\uDD5D Kiwi","\uD83C\uDF53 Strawberries"],R={type:"code",component:function(){let e=(0,c.K)({onDropdownClose:()=>e.resetSelectedOption()}),[o,t]=(0,i.useState)(null),n=M.map(e=>i.createElement(p.h.Option,{value:e,key:e},e));return i.createElement(p.h,{store:e,onOptionSubmit:o=>{t(o),e.closeDropdown()}},i.createElement(p.h.Target,null,i.createElement(f.M,{component:"button",pointer:!0,rightSection:i.createElement(p.h.Chevron,null),onClick:()=>e.toggleDropdown()},o||i.createElement(P.I.Placeholder,null,"Pick value"))),i.createElement(p.h.Dropdown,null,i.createElement(p.h.Options,{mah:200,style:{overflowY:"auto"}},n)))},maxWidth:340,centered:!0,defaultExpanded:!1,code:N};var K=t(49849);let H=`
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
          pointer
          rightSection={<Combobox.Chevron />}
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
`,Y=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate","\uD83C\uDF47 Grapes","\uD83C\uDF4B Lemon","\uD83E\uDD6C Lettuce","\uD83C\uDF44 Mushrooms","\uD83C\uDF4A Oranges","\uD83E\uDD54 Potatoes","\uD83C\uDF45 Tomatoes","\uD83E\uDD5A Eggs","\uD83E\uDD5B Milk","\uD83C\uDF5E Bread","\uD83C\uDF57 Chicken","\uD83C\uDF54 Hamburger","\uD83E\uDDC0 Cheese","\uD83E\uDD69 Steak","\uD83C\uDF5F French Fries","\uD83C\uDF55 Pizza","\uD83E\uDD66 Cauliflower","\uD83E\uDD5C Peanuts","\uD83C\uDF66 Ice Cream","\uD83C\uDF6F Honey","\uD83E\uDD56 Baguette","\uD83C\uDF63 Sushi","\uD83E\uDD5D Kiwi","\uD83C\uDF53 Strawberries"],W={type:"code",component:function(){let e=(0,c.K)({onDropdownClose:()=>e.resetSelectedOption()}),[o,t]=(0,i.useState)(null),n=Y.map(e=>i.createElement(p.h.Option,{value:e,key:e},e));return i.createElement(p.h,{store:e,onOptionSubmit:o=>{t(o),e.closeDropdown()}},i.createElement(p.h.Target,null,i.createElement(f.M,{component:"button",pointer:!0,rightSection:i.createElement(p.h.Chevron,null),onClick:()=>e.toggleDropdown()},o||i.createElement(P.I.Placeholder,null,"Pick value"))),i.createElement(p.h.Dropdown,null,i.createElement(p.h.Options,null,i.createElement(K.x.Autosize,{type:"scroll",mah:200},n))))},maxWidth:340,centered:!0,defaultExpanded:!1,code:H},_=`
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
`,U=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],q={type:"code",component:function(){let e=(0,c.K)(),[o,t]=(0,i.useState)(""),n=!U.some(e=>e===o),r=n?U.filter(e=>e.toLowerCase().includes(o.toLowerCase().trim())):U,l=r.map(e=>i.createElement(p.h.Option,{value:e,key:e},e));return i.createElement(p.h,{onOptionSubmit:o=>{t(o),e.closeDropdown()},store:e},i.createElement(p.h.Target,null,i.createElement(u.o,{label:"Pick value or type anything",placeholder:"Pick value or type anything",value:o,onChange:o=>{t(o.currentTarget.value),e.openDropdown()},onClick:()=>e.openDropdown(),onFocus:()=>e.openDropdown(),onBlur:()=>e.closeDropdown()})),i.createElement(p.h.Dropdown,{hidden:0===l.length},i.createElement(p.h.Options,null,l)))},centered:!0,maxWidth:340,defaultExpanded:!1,code:_},Z=`
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
`,X=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],$={type:"code",component:function(){let[e,o]=(0,i.useState)(!1),t=(0,c.K)({opened:e}),n=X.map(e=>i.createElement(p.h.Option,{value:e,key:e},e));return i.createElement(i.Fragment,null,i.createElement(h.z,{mb:"md",onClick:()=>o(e=>!e)},"Toggle dropdown"),i.createElement(p.h,{store:t},i.createElement(p.h.Target,null,i.createElement(u.o,{label:"Autocomplete",description:"Dropdown is opened/closed when button is clicked",placeholder:"Click button to toggle dropdown"})),i.createElement(p.h.Dropdown,null,i.createElement(p.h.Options,null,n))))},code:Z,maxWidth:340,centered:!0,defaultExpanded:!1},J=`
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
`,Q={type:"code",component:function(){let[e,o]=(0,i.useState)("");return i.createElement(p.h,{onOptionSubmit:o},i.createElement(p.h.EventsTarget,null,i.createElement(u.o,{placeholder:"Pick value",value:e,onChange:e=>o(e.currentTarget.value)})),i.createElement(p.h.Options,{mt:"sm"},i.createElement(p.h.Option,{value:"First"},"First"),i.createElement(p.h.Option,{value:"Second"},"Second"),i.createElement(p.h.Option,{value:"Third"},"Third")))},code:J,centered:!0,maxWidth:340,defaultExpanded:!1};var ee=t(92511);let eo=`
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
`,et={type:"styles-api",data:ee.$,component:function(e){let o=(0,c.K)({opened:!0});return i.createElement(p.h,{store:o,...e,middlewares:{flip:!1,shift:!1}},i.createElement(p.h.Target,null,i.createElement(u.o,{placeholder:"Pick value"})),i.createElement(p.h.Dropdown,null,i.createElement(p.h.Header,null,"Combobox header"),i.createElement(p.h.Search,{placeholder:"Search input"}),i.createElement(p.h.Options,null,i.createElement(p.h.Group,{label:"First group"},i.createElement(p.h.Option,{value:"1"},"First"),i.createElement(p.h.Option,{value:"2"},"Second")),i.createElement(p.h.Group,{label:"Second group"},i.createElement(p.h.Option,{value:"3"},"Third"),i.createElement(p.h.Option,{value:"4"},"Fourth")),i.createElement(p.h.Group,{label:"Third group"},i.createElement(p.h.Empty,null,"Nothing found in this group..."))),i.createElement(p.h.Footer,null,"Combobox footer")))},code:eo},en=(0,l.A)(a.us.Combobox);function er(e){let o={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Demo:t,ExamplesButton:l,StylesApiSelectors:a}=o;return t||ea("Demo",!0),l||ea("ExamplesButton",!0),a||ea("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(o.p,{children:["This page contains only a small set of examples, as the full code of the demos is long.\nYou can find all 50+ examples on a ",(0,n.jsx)(o.a,{href:"/combobox?e=BasicSelect",children:"separate page"}),"."]}),"\n",(0,n.jsx)(l,{link:"/combobox?e=BasicSelect",label:"Open Combobox examples page"}),"\n",(0,n.jsx)(o.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"Combobox"})," provides a set of components and hooks to custom select, multiselect or autocomplete components.\nThe component is very flexible – you have full control of the rendering and logic."]}),"\n",(0,n.jsx)(t,{data:s.Y}),"\n",(0,n.jsx)(o.h2,{id:"usecombobox-hook",children:"useCombobox hook"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"useCombobox"})," hook provides combobox store. The store contains the current state of the component\nand handlers to update it. Created store must be passed to the ",(0,n.jsx)(o.code,{children:"store"})," prop of ",(0,n.jsx)(o.code,{children:"Combobox"}),":"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { useCombobox, Combobox } from '@mantine/core';\n\nfunction Demo() {\n  const combobox = useCombobox();\n  return (\n    <Combobox store={combobox}>{/* Your implementation */}</Combobox>\n  );\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"usecombobox-options",children:"useCombobox options"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"useCombobox"})," hooks accepts an options object with the following properties:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"interface UseComboboxOptions {\n  /** Default value for `dropdownOpened`, `false` by default */\n  defaultOpened?: boolean;\n\n  /** Controlled `dropdownOpened` state */\n  opened?: boolean;\n\n  /** Called when `dropdownOpened` state changes */\n  onOpenedChange?(opened: boolean): void;\n\n  /** Called when dropdown closes with event source: keyboard, mouse or unknown */\n  onDropdownClose?(eventSource: ComboboxDropdownEventSource): void;\n\n  /** Called when dropdown opens with event source: keyboard, mouse or unknown */\n  onDropdownOpen?(eventSource: ComboboxDropdownEventSource): void;\n\n  /** Determines whether arrow key presses should loop though items (first to last and last to first), `true` by default */\n  loop?: boolean;\n\n  /** `behavior` passed down to `element.scrollIntoView`, `'instant'` by default */\n  scrollBehavior?: ScrollBehavior;\n}\n"})}),"\n",(0,n.jsxs)(o.p,{children:["You can import ",(0,n.jsx)(o.code,{children:"UseComboboxOptions"})," type from ",(0,n.jsx)(o.code,{children:"@mantine/core"})," package:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import type { UseComboboxOptions } from '@mantine/core';\n"})}),"\n",(0,n.jsx)(o.h2,{id:"combobox-store",children:"Combobox store"}),"\n",(0,n.jsx)(o.p,{children:"Combobox store is an object with the following properties:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"interface ComboboxStore {\n  /** Current dropdown opened state */\n  dropdownOpened: boolean;\n\n  /** Opens dropdown */\n  openDropdown(eventSource?: 'keyboard' | 'mouse' | 'unknown'): void;\n\n  /** Closes dropdown */\n  closeDropdown(eventSource?: 'keyboard' | 'mouse' | 'unknown'): void;\n\n  /** Toggles dropdown opened state */\n  toggleDropdown(\n    eventSource?: 'keyboard' | 'mouse' | 'unknown'\n  ): void;\n\n  /** Selected option index */\n  selectedOptionIndex: number;\n\n  /** Selects `Combobox.Option` by index */\n  selectOption(index: number): void;\n\n  /** Selects first `Combobox.Option` with `active` prop.\n   *  If there are no such options, the function does nothing.\n   */\n  selectActiveOption(): string | null;\n\n  /** Selects first `Combobox.Option` that is not disabled.\n   *  If there are no such options, the function does nothing.\n   * */\n  selectFirstOption(): string | null;\n\n  /** Selects next `Combobox.Option` that is not disabled.\n   *  If the current option is the last one, the function selects first option, if `loop` is true.\n   */\n  selectNextOption(): string | null;\n\n  /** Selects previous `Combobox.Option` that is not disabled.\n   *  If the current option is the first one, the function selects last option, if `loop` is true.\n   * */\n  selectPreviousOption(): string | null;\n\n  /** Resets selected option index to -1, removes `data-combobox-selected` from selected option */\n  resetSelectedOption(): void;\n\n  /** Triggers `onClick` event of selected option.\n   *  If there is no selected option, the function does nothing.\n   */\n  clickSelectedOption(): void;\n\n  /** Updates selected option index to currently selected or active option.\n   *  The function is required to be used with searchable components to update selected option index\n   *  when options list changes based on search query.\n   */\n  updateSelectedOptionIndex(target?: 'active' | 'selected'): void;\n\n  /** List id, used for `aria-*` attributes */\n  listId: string | null;\n\n  /** Sets list id */\n  setListId(id: string): void;\n\n  /** Ref of `Combobox.Search` input */\n  searchRef: React.MutableRefObject<HTMLInputElement | null>;\n\n  /** Moves focus to `Combobox.Search` input */\n  focusSearchInput(): void;\n\n  /** Ref of the target element */\n  targetRef: React.MutableRefObject<HTMLElement | null>;\n\n  /** Moves focus to the target element */\n  focusTarget(): void;\n}\n"})}),"\n",(0,n.jsxs)(o.p,{children:["You can import ",(0,n.jsx)(o.code,{children:"ComboboxStore"})," type from ",(0,n.jsx)(o.code,{children:"@mantine/core"})," package:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import type { ComboboxStore } from '@mantine/core';\n"})}),"\n",(0,n.jsx)(o.h2,{id:"usecombobox-handlers",children:"useCombobox handlers"}),"\n",(0,n.jsxs)(o.p,{children:["Combobox store handlers can be used to control ",(0,n.jsx)(o.code,{children:"Combobox"})," state.\nFor example, to open the dropdown, call ",(0,n.jsx)(o.code,{children:"openDropdown"})," handler:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { useCombobox, Combobox, Button } from '@mantine/core';\n\nfunction Demo() {\n  const combobox = useCombobox();\n\n  return (\n    <Combobox>\n      <Combobox.Target>\n        <Button onClick={() => combobox.openDropdown()}>\n          Open dropdown\n        </Button>\n      </Combobox.Target>\n\n      {/* Your implementation */}\n    </Combobox>\n  );\n}\n"})}),"\n",(0,n.jsxs)(o.p,{children:["You can use store handlers in ",(0,n.jsx)(o.code,{children:"useCombobox"})," options. For example, you can\ncall ",(0,n.jsx)(o.code,{children:"selectFirstOption"})," when the dropdown is opened and ",(0,n.jsx)(o.code,{children:"resetSelectedOption"}),"\nwhen it is closed:"]}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-tsx",children:"import { useCombobox, Combobox } from '@mantine/core';\n\nfunction Demo() {\n  const combobox = useCombobox({\n    onDropdownOpen: () => combobox.selectFirstOption(),\n    onDropdownClose: () => combobox.resetSelectedOption(),\n  });\n\n  return (\n    <Combobox store={combobox}>{/* Your implementation */}</Combobox>\n  );\n}\n"})}),"\n",(0,n.jsx)(o.h2,{id:"comboboxtarget",children:"Combobox.Target"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"Combobox.Target"})," should be used as a wrapper for the target element or component.\n",(0,n.jsx)(o.code,{children:"Combobox.Target"})," marks its child as a target for dropdown and sets ",(0,n.jsx)(o.code,{children:"aria-*"})," attributes\nand adds keyboard event listeners to it."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"Combobox.Target"})," requires a single child element or component. The child component\nmust accept ",(0,n.jsx)(o.code,{children:"ref"})," and ",(0,n.jsx)(o.code,{children:"...others"})," props. You can use any Mantine component as a target without\nany additional configuration, for example, ",(0,n.jsx)(o.a,{href:"/core/button/",children:"Button"}),", ",(0,n.jsx)(o.a,{href:"/core/text-input/",children:"TextInput"}),"\nor ",(0,n.jsx)(o.a,{href:"/core/input/#inputbase-component",children:"InputBase"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Example of using ",(0,n.jsx)(o.code,{children:"Combobox.Target"})," with ",(0,n.jsx)(o.a,{href:"/core/text-input/",children:"TextInput"})," component:"]}),"\n",(0,n.jsx)(t,{data:b}),"\n",(0,n.jsxs)(o.p,{children:["Example of using ",(0,n.jsx)(o.code,{children:"Combobox.Target"})," with ",(0,n.jsx)(o.a,{href:"/core/button",children:"Button"})," component:"]}),"\n",(0,n.jsx)(t,{data:v}),"\n",(0,n.jsx)(o.h2,{id:"split-events-and-dropdown-targets",children:"Split events and dropdown targets"}),"\n",(0,n.jsxs)(o.p,{children:["In some cases, you might need to use different elements as an events target and as a dropdown.\nUse ",(0,n.jsx)(o.code,{children:"Combobox.EventsTarget"})," to add ",(0,n.jsx)(o.code,{children:"aria-*"})," attributes and keyboard event handlers, and\n",(0,n.jsx)(o.code,{children:"Combobox.DropdownTarget"})," to position the dropdown relative to the target."]}),"\n",(0,n.jsxs)(o.p,{children:["You can have as many ",(0,n.jsx)(o.code,{children:"Combobox.EventsTarget"})," as you need, but only one ",(0,n.jsx)(o.code,{children:"Combobox.DropdownTarget"}),"\nper ",(0,n.jsx)(o.code,{children:"Combobox"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Example of using ",(0,n.jsx)(o.code,{children:"Combobox.EventsTarget"})," and ",(0,n.jsx)(o.code,{children:"Combobox.DropdownTarget"})," with ",(0,n.jsx)(o.a,{href:"/core/pills-input",children:"PillsInput"})," component\nto create a searchable multiselect component:"]}),"\n",(0,n.jsx)(t,{data:w.R}),"\n",(0,n.jsx)(o.h2,{id:"update-selected-option-index",children:"Update selected option index"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"updateSelectedOptionIndex"})," handler is required to be called when options list changes.\nUsually, the options list changes when options are filtered based on the search query. In this case,\nyou need to call ",(0,n.jsx)(o.code,{children:"updateSelectedOptionIndex"})," in ",(0,n.jsx)(o.code,{children:"onChange"})," handler of the search input."]}),"\n",(0,n.jsxs)(o.p,{children:["Example of using ",(0,n.jsx)(o.code,{children:"updateSelectedOptionIndex"})," handler in searchable select component:"]}),"\n",(0,n.jsx)(t,{data:S}),"\n",(0,n.jsx)(o.h2,{id:"search-input",children:"Search input"}),"\n",(0,n.jsxs)(o.p,{children:["If you prefer search input inside the dropdown, use ",(0,n.jsx)(o.code,{children:"Combobox.Search"})," component.\nTo focus the search input, call ",(0,n.jsx)(o.code,{children:"combobox.focusSearchInput"}),", usually it is done\nwhen the dropdown is opened. To prevent focus loss after the dropdown is closed,\ncall ",(0,n.jsx)(o.code,{children:"combobox.focusTarget"}),":"]}),"\n",(0,n.jsx)(t,{data:y}),"\n",(0,n.jsx)(o.h2,{id:"select-first-option",children:"Select first option"}),"\n",(0,n.jsxs)(o.p,{children:["Use ",(0,n.jsx)(o.code,{children:"combobox.selectFirstOption"})," function to select the first option. It is useful\nif you want to select the first option when user searching for options in the list.\nIf there are no options available, it will do nothing."]}),"\n",(0,n.jsx)(t,{data:B}),"\n",(0,n.jsx)(o.h2,{id:"active-option",children:"Active option"}),"\n",(0,n.jsxs)(o.p,{children:["Set ",(0,n.jsx)(o.code,{children:"active"})," prop on ",(0,n.jsx)(o.code,{children:"Combobox.Option"})," component to mark it as active.\nBy default, an active option does not have any styles, you can use ",(0,n.jsx)(o.code,{children:"data-combobox-active"}),"\n",(0,n.jsx)(o.a,{href:"/styles/data-attributes",children:"data attribute"})," to style it."]}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.code,{children:"combobox.selectActiveOption"})," function selects active option. Usually, it is called\nwhen the dropdown is opened:"]}),"\n",(0,n.jsx)(t,{data:L}),"\n",(0,n.jsx)(o.h2,{id:"options-groups",children:"Options groups"}),"\n",(0,n.jsxs)(o.p,{children:["Render ",(0,n.jsx)(o.code,{children:"Combobox.Option"})," components inside ",(0,n.jsx)(o.code,{children:"Combobox.Group"})," to create options group.\n",(0,n.jsx)(o.code,{children:"Combobox.Group"})," label will be automatically hidden if the group does not have any\nchildren."]}),"\n",(0,n.jsx)(t,{data:z}),"\n",(0,n.jsx)(o.h2,{id:"scrollable-list",children:"Scrollable list"}),"\n",(0,n.jsxs)(o.p,{children:["Set ",(0,n.jsx)(o.code,{children:"max-height"})," style on either ",(0,n.jsx)(o.code,{children:"Combobox.Dropdown"})," or ",(0,n.jsx)(o.code,{children:"Combobox.Options"})," to make the\noptions list scrollable. You can use ",(0,n.jsx)(o.code,{children:"mah"})," ",(0,n.jsx)(o.a,{href:"/styles/style-props",children:"style prop"})," to set\n",(0,n.jsx)(o.code,{children:"max-height"}),"."]}),"\n",(0,n.jsx)(t,{data:R}),"\n",(0,n.jsx)(o.h2,{id:"scrollable-list-with-scrollarea",children:"Scrollable list with ScrollArea"}),"\n",(0,n.jsxs)(o.p,{children:["You can also use ",(0,n.jsx)(o.a,{href:"/core/scroll-area",children:"ScrollArea or ScrollArea.Autosize"})," components\ninstead of native scrollbars:"]}),"\n",(0,n.jsx)(t,{data:W}),"\n",(0,n.jsx)(o.h2,{id:"hide-dropdown",children:"Hide dropdown"}),"\n",(0,n.jsxs)(o.p,{children:["Set ",(0,n.jsx)(o.code,{children:"hidden"})," prop on ",(0,n.jsx)(o.code,{children:"Combobox.Dropdown"})," to hide the dropdown. For example,\nit can be useful when you want to show the dropdown only when there is at least\none option available:"]}),"\n",(0,n.jsx)(t,{data:q}),"\n",(0,n.jsx)(o.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,n.jsxs)(o.p,{children:["To control the dropdown opened state, pass ",(0,n.jsx)(o.code,{children:"opened"})," to ",(0,n.jsx)(o.code,{children:"useCombobox"})," hook:"]}),"\n",(0,n.jsx)(t,{data:$}),"\n",(0,n.jsx)(o.h2,{id:"without-dropdown",children:"Without dropdown"}),"\n",(0,n.jsxs)(o.p,{children:["You can use ",(0,n.jsx)(o.code,{children:"Combobox"})," without dropdown. To do so, use ",(0,n.jsx)(o.code,{children:"Combobox.EventsTarget"})," instead\nof ",(0,n.jsx)(o.code,{children:"Combobox.Target"}),":"]}),"\n",(0,n.jsx)(t,{data:Q}),"\n",(0,n.jsx)(a,{component:"Combobox"}),"\n",(0,n.jsx)(t,{data:et})]})}function el(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(en,{...e,children:(0,n.jsx)(er,{...e})})}function ea(e,o){throw Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},81320:function(e,o,t){"use strict";t.d(o,{R:function(){return m}});var n=t(27378),r=t(54526),l=t(39394),a=t(45608),s=t(22971),i=t(38765),c=t(28639);let p=`
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
`,u=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],m={type:"code",component:function(){let e=(0,r.K)({onDropdownClose:()=>e.resetSelectedOption(),onDropdownOpen:()=>e.updateSelectedOptionIndex("active")}),[o,t]=(0,n.useState)(""),[p,m]=(0,n.useState)([]),d=e=>m(o=>o.filter(o=>o!==e)),b=p.map(e=>n.createElement(l.D,{key:e,withRemoveButton:!0,onRemove:()=>d(e)},e)),x=u.filter(e=>e.toLowerCase().includes(o.trim().toLowerCase())).map(e=>n.createElement(a.h.Option,{value:e,key:e,active:p.includes(e)},n.createElement(s.Z,{gap:"sm"},p.includes(e)?n.createElement(i.n,{size:12}):null,n.createElement("span",null,e))));return n.createElement(a.h,{store:e,onOptionSubmit:e=>m(o=>o.includes(e)?o.filter(o=>o!==e):[...o,e])},n.createElement(a.h.DropdownTarget,null,n.createElement(c.d,{onClick:()=>e.openDropdown()},n.createElement(l.D.Group,null,b,n.createElement(a.h.EventsTarget,null,n.createElement(c.d.Field,{onFocus:()=>e.openDropdown(),onBlur:()=>e.closeDropdown(),value:o,placeholder:"Search values",onChange:o=>{e.updateSelectedOptionIndex(),t(o.currentTarget.value)},onKeyDown:e=>{"Backspace"===e.key&&0===o.length&&(e.preventDefault(),d(p[p.length-1]))}}))))),n.createElement(a.h.Dropdown,null,n.createElement(a.h.Options,null,x.length>0?x:n.createElement(a.h.Empty,null,"Nothing found..."))))},code:p,centered:!0,defaultExpanded:!1,maxWidth:340}},46378:function(e,o,t){"use strict";t.d(o,{Y:function(){return p}});var n=t(27378),r=t(54526),l=t(45608),a=t(23163),s=t(42487);let i=`
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
          pointer
          rightSection={<Combobox.Chevron />}
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
`,c=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],p={type:"code",component:function(){let e=(0,r.K)({onDropdownClose:()=>e.resetSelectedOption()}),[o,t]=(0,n.useState)(null),i=c.map(e=>n.createElement(l.h.Option,{value:e,key:e},e));return n.createElement(l.h,{store:e,onOptionSubmit:o=>{t(o),e.closeDropdown()}},n.createElement(l.h.Target,null,n.createElement(a.M,{component:"button",pointer:!0,rightSection:n.createElement(l.h.Chevron,null),onClick:()=>e.toggleDropdown()},o||n.createElement(s.I.Placeholder,null,"Pick value"))),n.createElement(l.h.Dropdown,null,n.createElement(l.h.Options,null,i)))},maxWidth:340,centered:!0,defaultExpanded:!1,code:i}},39394:function(e,o,t){"use strict";t.d(o,{D:function(){return f}});var n=t(27378),r=t(92082),l=t(83453),a=t(96739),s=t(6231),i=t(56589),c=t(20410),p=t(96217),u=t(89871);let[m,d]=(0,u.V)();var b=t(33),x={root:"m-7cda1cd6","root--default":"m-44da308b","root--contrast":"m-e3a01f8",label:"m-1e0e6180",remove:"m-ae386778",group:"m-1dcfd90b"};let h={},C=(0,l.Z)((e,{gap:o},{size:t})=>({group:{"--pg-gap":void 0!==o?(0,r.ap)(o):(0,r.ap)(t,"pg-gap")}})),g=(0,c.d)((e,o)=>{let t=(0,a.w)("PillGroup",h,e),{classNames:r,className:l,style:c,styles:p,unstyled:u,vars:d,size:g,disabled:v,...w}=t,f=(0,b.D)(),O=f?.size||g||void 0,E=(0,s.y)({name:"PillGroup",classes:x,props:t,className:l,style:c,classNames:r,styles:p,unstyled:u,vars:d,varsResolver:C,stylesCtx:{size:O},rootSelector:"group"});return n.createElement(m,{value:{size:O,disabled:v}},n.createElement(i.x,{ref:o,size:O,...E("group"),...w}))});g.classes=x,g.displayName="@mantine/core/PillGroup";let v={variant:"default"},w=(0,l.Z)((e,{radius:o},{size:t})=>({root:{"--pill-fz":(0,r.ap)(t,"pill-fz"),"--pill-height":(0,r.ap)(t,"pill-height"),"--pill-radius":void 0===o?void 0:(0,r.H5)(o)}})),f=(0,c.d)((e,o)=>{let t=(0,a.w)("Pill",v,e),{classNames:r,className:l,style:c,styles:u,unstyled:m,vars:h,variant:C,children:g,withRemoveButton:f,onRemove:O,removeButtonProps:E,radius:S,size:D,disabled:F,...y}=t,j=d(),k=(0,b.D)(),B=D||j?.size||void 0,T=k?.variant==="filled"?"contrast":C||"default",I=(0,s.y)({name:"Pill",classes:x,props:t,className:l,style:c,classNames:r,styles:u,unstyled:m,vars:h,varsResolver:w,stylesCtx:{size:B}});return n.createElement(i.x,{component:"span",ref:o,variant:T,size:B,...I("root",{variant:T}),mod:{"with-remove":f,disabled:F||j?.disabled},...y},n.createElement("span",{...I("label")},g),f&&n.createElement(p.P,{variant:"transparent",radius:S,tabIndex:-1,"aria-hidden":!0,unstyled:m,...E,...I("remove",{className:E?.className,style:E?.style}),onMouseDown:e=>{e.preventDefault(),e.stopPropagation(),E?.onMouseDown?.(e)},onClick:e=>{e.stopPropagation(),O?.(),E?.onClick?.(e)}}))});f.classes=x,f.displayName="@mantine/core/Pill",f.Group=g},33:function(e,o,t){"use strict";t.d(o,{D:function(){return l},H:function(){return r}}),t(27378);var n=t(89871);let[r,l]=(0,n.V)()},28639:function(e,o,t){"use strict";t.d(o,{d:function(){return h}});var n=t(27378),r=t(96739),l=t(20410),a=t(23163),s=t(33),i=t(72840),c=t(6231),p=t(56589),u=t(5739),m={field:"m-45c4369d"};let d={type:"visible"},b=(0,l.d)((e,o)=>{let t=(0,r.w)("PillsInputField",d,e),{classNames:l,className:a,style:b,styles:x,unstyled:h,vars:C,type:g,disabled:v,id:w,pointer:f,...O}=t,E=(0,s.D)(),S=(0,u.D)(),D=(0,c.y)({name:"PillsInputField",classes:m,props:t,className:a,style:b,classNames:l,styles:x,unstyled:h,rootSelector:"field"}),F=v||E?.disabled;return n.createElement(p.x,{component:"input",ref:(0,i.Yx)(o,E?.fieldRef),"data-type":g,disabled:F,mod:{disabled:F,pointer:f},...D("field"),...O,id:S?.inputId||w,"aria-invalid":E?.hasError,"aria-describedby":S?.describedBy})});b.classes=m,b.displayName="@mantine/core/PillsInputField";let x={},h=(0,l.d)((e,o)=>{let t=(0,r.w)("PillsInput",x,e),{children:l,onMouseDown:i,onClick:c,size:p,disabled:u,__staticSelector:m,error:d,variant:b,...h}=t,C=(0,n.useRef)();return n.createElement(s.H,{value:{fieldRef:C,size:p,disabled:u,hasError:!!d,variant:b}},n.createElement(a.M,{size:p,error:d,variant:b,component:"div",ref:o,onMouseDown:e=>{e.preventDefault(),i?.(e),C.current?.focus()},onClick:e=>{e.preventDefault(),c?.(e),C.current?.focus()},...h,multiline:!0,disabled:u,__staticSelector:m||"PillsInput",withAria:!1},l))});h.displayName="@mantine/core/PillsInput",h.Field=b}},function(e){e.O(0,[370,5819,2775,5608,9774,2888,179],function(){return e(e.s=90342)}),_N_E=e.O()}]);