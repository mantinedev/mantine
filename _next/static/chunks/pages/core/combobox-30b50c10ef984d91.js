(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7012],{92815:function(o,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/core/combobox",function(){return t(8664)}])},8664:function(o,e,t){"use strict";t.r(e),t.d(e,{default:function(){return ox}});var n=t(85893),r=t(11151),l=t(19905),s=t(9904),a=t(77275),c=t(67294),i=t(16658),p=t(84391),m=t(50780);let u=`
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
`,b=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],d={type:"code",component:function(){let o=(0,i.K)(),[e,t]=(0,c.useState)(""),n=!b.some(o=>o===e),r=n?b.filter(o=>o.toLowerCase().includes(e.toLowerCase().trim())):b,l=r.map(o=>c.createElement(p.h.Option,{value:o,key:o},o));return c.createElement(p.h,{onOptionSubmit:e=>{t(e),o.closeDropdown()},store:o},c.createElement(p.h.Target,null,c.createElement(m.o,{label:"Pick value or type anything",placeholder:"Pick value or type anything",value:e,onChange:e=>{t(e.currentTarget.value),o.openDropdown(),o.updateSelectedOptionIndex()},onClick:()=>o.openDropdown(),onFocus:()=>o.openDropdown(),onBlur:()=>o.closeDropdown()})),c.createElement(p.h.Dropdown,null,c.createElement(p.h.Options,null,0===l.length?c.createElement(p.h.Empty,null,"Nothing found"):l)))},centered:!0,maxWidth:340,defaultExpanded:!1,code:u};var x=t(81110),h=t(72039),C=t(14469);let g=`
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
`,w=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],v={type:"code",component:function(){let[o,e]=(0,c.useState)(null),t=(0,i.K)({onDropdownClose:()=>t.resetSelectedOption()}),n=w.map(o=>c.createElement(p.h.Option,{value:o,key:o},o));return c.createElement(c.Fragment,null,c.createElement(x.x,{mb:"xs"},c.createElement(h.x,{span:!0,size:"sm",c:"dimmed"},"Selected item:"," "),c.createElement(h.x,{span:!0,size:"sm"},o||"Nothing selected")),c.createElement(p.h,{store:t,width:250,position:"bottom-start",withArrow:!0,onOptionSubmit:o=>{e(o),t.closeDropdown()}},c.createElement(p.h.Target,null,c.createElement(C.z,{onClick:()=>t.toggleDropdown()},"Pick item")),c.createElement(p.h.Dropdown,null,c.createElement(p.h.Options,null,n))))},maxWidth:340,centered:!0,defaultExpanded:!1,code:g};var f=t(43360),O=t(70097);let E=`
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
`,S=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],F={type:"code",component:function(){let o=(0,i.K)({onDropdownClose:()=>o.resetSelectedOption()}),[e,t]=(0,c.useState)(null),[n,r]=(0,c.useState)(""),l=S.every(o=>o!==n),s=l?S.filter(o=>o.toLowerCase().includes(n.toLowerCase().trim())):S,a=s.map(o=>c.createElement(p.h.Option,{value:o,key:o},o));return c.createElement(p.h,{store:o,onOptionSubmit:e=>{t(e),r(e),o.closeDropdown()}},c.createElement(p.h.Target,null,c.createElement(O.M,{rightSection:c.createElement(p.h.Chevron,null),onClick:()=>o.openDropdown(),onFocus:()=>o.openDropdown(),onBlur:()=>{o.closeDropdown(),r(e||"")},placeholder:"Search value",value:n,onChange:e=>{o.updateSelectedOptionIndex(),r(e.currentTarget.value)}})),c.createElement(p.h.Dropdown,null,c.createElement(p.h.Options,null,a.length>0?a:c.createElement(p.h.Empty,null,"Nothing found"))))},maxWidth:340,centered:!0,defaultExpanded:!1,code:E},D=`
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
`,j=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],y={type:"code",component:function(){let[o,e]=(0,c.useState)(""),[t,n]=(0,c.useState)(null),r=(0,i.K)({onDropdownClose:()=>{r.resetSelectedOption(),r.focusTarget(),e("")},onDropdownOpen:()=>{r.focusSearchInput()}}),l=j.filter(e=>e.toLowerCase().includes(o.toLowerCase().trim())).map(o=>c.createElement(p.h.Option,{value:o,key:o},o));return c.createElement(c.Fragment,null,c.createElement(x.x,{mb:"xs"},c.createElement(h.x,{span:!0,size:"sm",c:"dimmed"},"Selected item:"," "),c.createElement(h.x,{span:!0,size:"sm"},t||"Nothing selected")),c.createElement(p.h,{store:r,width:250,position:"bottom-start",withArrow:!0,onOptionSubmit:o=>{n(o),r.closeDropdown()}},c.createElement(p.h.Target,{withAriaAttributes:!1},c.createElement(C.z,{onClick:()=>r.toggleDropdown()},"Pick item")),c.createElement(p.h.Dropdown,null,c.createElement(p.h.Search,{value:o,onChange:o=>e(o.currentTarget.value),placeholder:"Search groceries"}),c.createElement(p.h.Options,null,l.length>0?l:c.createElement(p.h.Empty,null,"Nothing found")))))},maxWidth:340,centered:!0,defaultExpanded:!1,code:D},T=`
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
`,k=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],B={type:"code",component:function(){let o=(0,i.K)({onDropdownClose:()=>o.resetSelectedOption()}),[e,t]=(0,c.useState)(""),n=!k.some(o=>o===e),r=n?k.filter(o=>o.toLowerCase().includes(e.toLowerCase().trim())):k,l=r.map(o=>c.createElement(p.h.Option,{value:o,key:o},o));return(0,c.useEffect)(()=>{o.selectFirstOption()},[e]),c.createElement(p.h,{onOptionSubmit:e=>{t(e),o.closeDropdown()},store:o},c.createElement(p.h.Target,null,c.createElement(m.o,{label:"Pick value or type anything",placeholder:"Pick value or type anything",value:e,onChange:e=>{t(e.currentTarget.value),o.openDropdown()},onClick:()=>o.openDropdown(),onFocus:()=>o.openDropdown(),onBlur:()=>o.closeDropdown()})),c.createElement(p.h.Dropdown,null,c.createElement(p.h.Options,null,0===l.length?c.createElement(p.h.Empty,null,"Nothing found"):l)))},centered:!0,maxWidth:340,defaultExpanded:!1,code:T};var I=t(16262),P=t(38238),A=t(52561);let L=`
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
`,V=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],G={type:"code",component:function(){let o=(0,i.K)({onDropdownClose:()=>o.resetSelectedOption(),onDropdownOpen:e=>{"keyboard"===e?o.selectActiveOption():o.updateSelectedOptionIndex("active")}}),[e,t]=(0,c.useState)("\uD83E\uDD66 Broccoli"),n=V.map(o=>c.createElement(p.h.Option,{value:o,key:o,active:o===e},c.createElement(I.Z,{gap:"xs"},o===e&&c.createElement(P.n,{size:12}),c.createElement("span",null,o))));return c.createElement(p.h,{store:o,resetSelectionOnOptionHover:!0,onOptionSubmit:e=>{t(e),o.updateSelectedOptionIndex("active")}},c.createElement(p.h.Target,{targetType:"button"},c.createElement(O.M,{component:"button",pointer:!0,rightSection:c.createElement(p.h.Chevron,null),onClick:()=>o.toggleDropdown()},e||c.createElement(A.I.Placeholder,null,"Pick value"))),c.createElement(p.h.Dropdown,null,c.createElement(p.h.Options,null,n)))},maxWidth:340,centered:!0,defaultExpanded:!1,code:L},N=`
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
`,z={type:"code",component:function(){let o=(0,i.K)({onDropdownClose:()=>o.resetSelectedOption()}),[e,t]=(0,c.useState)(null);return c.createElement(p.h,{store:o,onOptionSubmit:e=>{t(e),o.closeDropdown()}},c.createElement(p.h.Target,null,c.createElement(O.M,{component:"button",pointer:!0,rightSection:c.createElement(p.h.Chevron,null),onClick:()=>o.toggleDropdown()},e||c.createElement(A.I.Placeholder,null,"Pick value"))),c.createElement(p.h.Dropdown,null,c.createElement(p.h.Options,null,c.createElement(p.h.Group,{label:"Fruits"},c.createElement(p.h.Option,{value:"\uD83C\uDF4E Apples"},"\uD83C\uDF4E Apples"),c.createElement(p.h.Option,{value:"\uD83C\uDF4C Bananas"},"\uD83C\uDF4C Bananas"),c.createElement(p.h.Option,{value:"\uD83C\uDF47 Grape"},"\uD83C\uDF47 Grape")),c.createElement(p.h.Group,{label:"Vegetables"},c.createElement(p.h.Option,{value:"\uD83E\uDD66 Broccoli"},"\uD83E\uDD66 Broccoli"),c.createElement(p.h.Option,{value:"\uD83E\uDD55 Carrots"},"\uD83E\uDD55 Carrots"),c.createElement(p.h.Option,{value:"\uD83E\uDD6C Lettuce"},"\uD83E\uDD6C Lettuce")))))},maxWidth:340,centered:!0,defaultExpanded:!1,code:N},M=`
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
`,K=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate","\uD83C\uDF47 Grapes","\uD83C\uDF4B Lemon","\uD83E\uDD6C Lettuce","\uD83C\uDF44 Mushrooms","\uD83C\uDF4A Oranges","\uD83E\uDD54 Potatoes","\uD83C\uDF45 Tomatoes","\uD83E\uDD5A Eggs","\uD83E\uDD5B Milk","\uD83C\uDF5E Bread","\uD83C\uDF57 Chicken","\uD83C\uDF54 Hamburger","\uD83E\uDDC0 Cheese","\uD83E\uDD69 Steak","\uD83C\uDF5F French Fries","\uD83C\uDF55 Pizza","\uD83E\uDD66 Cauliflower","\uD83E\uDD5C Peanuts","\uD83C\uDF66 Ice Cream","\uD83C\uDF6F Honey","\uD83E\uDD56 Baguette","\uD83C\uDF63 Sushi","\uD83E\uDD5D Kiwi","\uD83C\uDF53 Strawberries"],H={type:"code",component:function(){let o=(0,i.K)({onDropdownClose:()=>o.resetSelectedOption()}),[e,t]=(0,c.useState)(null),n=K.map(o=>c.createElement(p.h.Option,{value:o,key:o},o));return c.createElement(p.h,{store:o,onOptionSubmit:e=>{t(e),o.closeDropdown()}},c.createElement(p.h.Target,null,c.createElement(O.M,{component:"button",pointer:!0,rightSection:c.createElement(p.h.Chevron,null),onClick:()=>o.toggleDropdown()},e||c.createElement(A.I.Placeholder,null,"Pick value"))),c.createElement(p.h.Dropdown,null,c.createElement(p.h.Options,{mah:200,style:{overflowY:"auto"}},n)))},maxWidth:340,centered:!0,defaultExpanded:!1,code:M};var Y=t(18094);let W=`
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
`,_=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate","\uD83C\uDF47 Grapes","\uD83C\uDF4B Lemon","\uD83E\uDD6C Lettuce","\uD83C\uDF44 Mushrooms","\uD83C\uDF4A Oranges","\uD83E\uDD54 Potatoes","\uD83C\uDF45 Tomatoes","\uD83E\uDD5A Eggs","\uD83E\uDD5B Milk","\uD83C\uDF5E Bread","\uD83C\uDF57 Chicken","\uD83C\uDF54 Hamburger","\uD83E\uDDC0 Cheese","\uD83E\uDD69 Steak","\uD83C\uDF5F French Fries","\uD83C\uDF55 Pizza","\uD83E\uDD66 Cauliflower","\uD83E\uDD5C Peanuts","\uD83C\uDF66 Ice Cream","\uD83C\uDF6F Honey","\uD83E\uDD56 Baguette","\uD83C\uDF63 Sushi","\uD83E\uDD5D Kiwi","\uD83C\uDF53 Strawberries"],R={type:"code",component:function(){let o=(0,i.K)({onDropdownClose:()=>o.resetSelectedOption()}),[e,t]=(0,c.useState)(null),n=_.map(o=>c.createElement(p.h.Option,{value:o,key:o},o));return c.createElement(p.h,{store:o,onOptionSubmit:e=>{t(e),o.closeDropdown()}},c.createElement(p.h.Target,null,c.createElement(O.M,{component:"button",pointer:!0,rightSection:c.createElement(p.h.Chevron,null),onClick:()=>o.toggleDropdown()},e||c.createElement(A.I.Placeholder,null,"Pick value"))),c.createElement(p.h.Dropdown,null,c.createElement(p.h.Options,null,c.createElement(Y.x.Autosize,{type:"scroll",mah:200},n))))},maxWidth:340,centered:!0,defaultExpanded:!1,code:W},U=`
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
`,q=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],X={type:"code",component:function(){let o=(0,i.K)(),[e,t]=(0,c.useState)(""),n=!q.some(o=>o===e),r=n?q.filter(o=>o.toLowerCase().includes(e.toLowerCase().trim())):q,l=r.map(o=>c.createElement(p.h.Option,{value:o,key:o},o));return c.createElement(p.h,{onOptionSubmit:e=>{t(e),o.closeDropdown()},store:o},c.createElement(p.h.Target,null,c.createElement(m.o,{label:"Pick value or type anything",placeholder:"Pick value or type anything",value:e,onChange:e=>{t(e.currentTarget.value),o.openDropdown()},onClick:()=>o.openDropdown(),onFocus:()=>o.openDropdown(),onBlur:()=>o.closeDropdown()})),c.createElement(p.h.Dropdown,{hidden:0===l.length},c.createElement(p.h.Options,null,l)))},centered:!0,maxWidth:340,defaultExpanded:!1,code:U},Z=`
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
`,$=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],J={type:"code",component:function(){let[o,e]=(0,c.useState)(!1),t=(0,i.K)({opened:o}),n=$.map(o=>c.createElement(p.h.Option,{value:o,key:o},o));return c.createElement(c.Fragment,null,c.createElement(C.z,{mb:"md",onClick:()=>e(o=>!o)},"Toggle dropdown"),c.createElement(p.h,{store:t},c.createElement(p.h.Target,null,c.createElement(m.o,{label:"Autocomplete",description:"Dropdown is opened/closed when button is clicked",placeholder:"Click button to toggle dropdown"})),c.createElement(p.h.Dropdown,null,c.createElement(p.h.Options,null,n))))},code:Z,maxWidth:340,centered:!0,defaultExpanded:!1},Q=`
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
`,oo={type:"code",component:function(){let[o,e]=(0,c.useState)("");return c.createElement(p.h,{onOptionSubmit:e},c.createElement(p.h.EventsTarget,null,c.createElement(m.o,{placeholder:"Pick value",value:o,onChange:o=>e(o.currentTarget.value)})),c.createElement(p.h.Options,{mt:"sm"},c.createElement(p.h.Option,{value:"First"},"First"),c.createElement(p.h.Option,{value:"Second"},"Second"),c.createElement(p.h.Option,{value:"Third"},"Third")))},code:Q,centered:!0,maxWidth:340,defaultExpanded:!1};var oe=t(66858),ot=Object.defineProperty,on=Object.defineProperties,or=Object.getOwnPropertyDescriptors,ol=Object.getOwnPropertySymbols,os=Object.prototype.hasOwnProperty,oa=Object.prototype.propertyIsEnumerable,oc=(o,e,t)=>e in o?ot(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t,oi=(o,e)=>{for(var t in e||(e={}))os.call(e,t)&&oc(o,t,e[t]);if(ol)for(var t of ol(e))oa.call(e,t)&&oc(o,t,e[t]);return o},op=(o,e)=>on(o,or(e));let om=`
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
`,ou={type:"styles-api",data:oe.$,component:function(o){let e=(0,i.K)({opened:!0});return c.createElement(p.h,op(oi({store:e},o),{middlewares:{flip:!1,shift:!1}}),c.createElement(p.h.Target,null,c.createElement(m.o,{placeholder:"Pick value"})),c.createElement(p.h.Dropdown,null,c.createElement(p.h.Header,null,"Combobox header"),c.createElement(p.h.Search,{placeholder:"Search input"}),c.createElement(p.h.Options,null,c.createElement(p.h.Group,{label:"First group"},c.createElement(p.h.Option,{value:"1"},"First"),c.createElement(p.h.Option,{value:"2"},"Second")),c.createElement(p.h.Group,{label:"Second group"},c.createElement(p.h.Option,{value:"3"},"Third"),c.createElement(p.h.Option,{value:"4"},"Fourth")),c.createElement(p.h.Group,{label:"Third group"},c.createElement(p.h.Empty,null,"Nothing found in this group..."))),c.createElement(p.h.Footer,null,"Combobox footer")))},code:om},ob=(0,l.A)(s.us.Combobox);function od(o){let e=Object.assign({h2:"h2",p:"p",code:"code",a:"a",pre:"pre"},(0,r.ah)(),o.components),{Demo:t,StylesApiSelectors:l}=e;return t||oh("Demo",!0),l||oh("StylesApiSelectors",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"usage",children:"Usage"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"Combobox"})," provides a set of components and hooks to custom select, multiselect or autocomplete components.\nThe component is very flexible – you have full control of the rendering and logic."]}),"\n",(0,n.jsx)(t,{data:a.Y}),"\n",(0,n.jsx)(e.h2,{id:"examples",children:"Examples"}),"\n",(0,n.jsxs)(e.p,{children:["This page contains only a small set of examples, as the full code of the demos is long.\nYou can find all 50+ examples on a ",(0,n.jsx)(e.a,{href:"/combobox?e=BasicSelect",children:"separate page"}),"."]}),"\n",(0,n.jsx)(e.h2,{id:"usecombobox-hook",children:"useCombobox hook"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"useCombobox"})," hook provides combobox store. The store contains the current state of the component\nand handlers to update it. Created store must be passed to the ",(0,n.jsx)(e.code,{children:"store"})," prop of ",(0,n.jsx)(e.code,{children:"Combobox"}),":"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:"import { useCombobox, Combobox } from '@mantine/core';\n\nfunction Demo() {\n  const combobox = useCombobox();\n  return <Combobox store={combobox}>{/* Your implementation */}</Combobox>;\n}\n"})}),"\n",(0,n.jsx)(e.h2,{id:"usecombobox-options",children:"useCombobox options"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"useCombobox"})," hooks accepts an options object with the following properties:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:"interface UseComboboxOptions {\n  /** Default value for `dropdownOpened`, `false` by default */\n  defaultOpened?: boolean;\n\n  /** Controlled `dropdownOpened` state */\n  opened?: boolean;\n\n  /** Called when `dropdownOpened` state changes */\n  onOpenedChange?(opened: boolean): void;\n\n  /** Called when dropdown closes with event source: keyboard, mouse or unknown */\n  onDropdownClose?(eventSource: ComboboxDropdownEventSource): void;\n\n  /** Called when dropdown opens with event source: keyboard, mouse or unknown */\n  onDropdownOpen?(eventSource: ComboboxDropdownEventSource): void;\n\n  /** Determines whether arrow key presses should loop though items (first to last and last to first), `true` by default */\n  loop?: boolean;\n\n  /** `behavior` passed down to `element.scrollIntoView`, `'instant'` by default */\n  scrollBehavior?: ScrollBehavior;\n}\n"})}),"\n",(0,n.jsxs)(e.p,{children:["You can import ",(0,n.jsx)(e.code,{children:"UseComboboxOptions"})," type from ",(0,n.jsx)(e.code,{children:"@mantine/core"})," package:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:"import type { UseComboboxOptions } from '@mantine/core';\n"})}),"\n",(0,n.jsx)(e.h2,{id:"combobox-store",children:"Combobox store"}),"\n",(0,n.jsx)(e.p,{children:"Combobox store is an object with the following properties:"}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:"interface ComboboxStore {\n  /** Current dropdown opened state */\n  dropdownOpened: boolean;\n\n  /** Opens dropdown */\n  openDropdown(eventSource?: 'keyboard' | 'mouse' | 'unknown'): void;\n\n  /** Closes dropdown */\n  closeDropdown(eventSource?: 'keyboard' | 'mouse' | 'unknown'): void;\n\n  /** Toggles dropdown opened state */\n  toggleDropdown(eventSource?: 'keyboard' | 'mouse' | 'unknown'): void;\n\n  /** Selected option index */\n  selectedOptionIndex: number;\n\n  /** Selects `Combobox.Option` by index */\n  selectOption(index: number): void;\n\n  /** Selects first `Combobox.Option` with `active` prop.\n   *  If there are no such options, the function does nothing.\n   */\n  selectActiveOption(): string | null;\n\n  /** Selects first `Combobox.Option` that is not disabled.\n   *  If there are no such options, the function does nothing.\n   * */\n  selectFirstOption(): string | null;\n\n  /** Selects next `Combobox.Option` that is not disabled.\n   *  If the current option is the last one, the function selects first option, if `loop` is true.\n   */\n  selectNextOption(): string | null;\n\n  /** Selects previous `Combobox.Option` that is not disabled.\n   *  If the current option is the first one, the function selects last option, if `loop` is true.\n   * */\n  selectPreviousOption(): string | null;\n\n  /** Resets selected option index to -1, removes `data-combobox-selected` from selected option */\n  resetSelectedOption(): void;\n\n  /** Triggers `onClick` event of selected option.\n   *  If there is no selected option, the function does nothing.\n   */\n  clickSelectedOption(): void;\n\n  /** Updates selected option index to currently selected or active option.\n   *  The function is required to be used with searchable components to update selected option index\n   *  when options list changes based on search query.\n   */\n  updateSelectedOptionIndex(target?: 'active' | 'selected'): void;\n\n  /** List id, used for `aria-*` attributes */\n  listId: string | null;\n\n  /** Sets list id */\n  setListId(id: string): void;\n\n  /** Ref of `Combobox.Search` input */\n  searchRef: React.MutableRefObject<HTMLInputElement | null>;\n\n  /** Moves focus to `Combobox.Search` input */\n  focusSearchInput(): void;\n\n  /** Ref of the target element */\n  targetRef: React.MutableRefObject<HTMLElement | null>;\n\n  /** Moves focus to the target element */\n  focusTarget(): void;\n}\n"})}),"\n",(0,n.jsxs)(e.p,{children:["You can import ",(0,n.jsx)(e.code,{children:"ComboboxStore"})," type from ",(0,n.jsx)(e.code,{children:"@mantine/core"})," package:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:"import type { ComboboxStore } from '@mantine/core';\n"})}),"\n",(0,n.jsx)(e.h2,{id:"usecombobox-handlers",children:"useCombobox handlers"}),"\n",(0,n.jsxs)(e.p,{children:["Combobox store handlers can be used to control ",(0,n.jsx)(e.code,{children:"Combobox"})," state.\nFor example, to open the dropdown, call ",(0,n.jsx)(e.code,{children:"openDropdown"})," handler:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:"import { useCombobox, Combobox, Button } from '@mantine/core';\n\nfunction Demo() {\n  const combobox = useCombobox();\n\n  return (\n    <Combobox>\n      <Combobox.Target>\n        <Button onClick={() => combobox.openDropdown()}>Open dropdown</Button>\n      </Combobox.Target>\n\n      {/* Your implementation */}\n    </Combobox>\n  );\n}\n"})}),"\n",(0,n.jsxs)(e.p,{children:["You can use store handlers in ",(0,n.jsx)(e.code,{children:"useCombobox"})," options. For example, you can\ncall ",(0,n.jsx)(e.code,{children:"selectFirstOption"})," when the dropdown is opened and ",(0,n.jsx)(e.code,{children:"resetSelectedOption"}),"\nwhen it is closed:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-tsx",children:"import { useCombobox, Combobox } from '@mantine/core';\n\nfunction Demo() {\n  const combobox = useCombobox({\n    onDropdownOpen: () => combobox.selectFirstOption(),\n    onDropdownClose: () => combobox.resetSelectedOption(),\n  });\n\n  return <Combobox store={combobox}>{/* Your implementation */}</Combobox>;\n}\n"})}),"\n",(0,n.jsx)(e.h2,{id:"comboboxtarget",children:"Combobox.Target"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"Combobox.Target"})," should be used as a wrapper for the target element or component.\n",(0,n.jsx)(e.code,{children:"Combobox.Target"})," marks its child as a target for dropdown and sets ",(0,n.jsx)(e.code,{children:"aria-*"})," attributes\nand adds keyboard event listeners to it."]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"Combobox.Target"})," requires a single child element or component. The child component\nmust accept ",(0,n.jsx)(e.code,{children:"ref"})," and ",(0,n.jsx)(e.code,{children:"...others"})," props. You can use any Mantine component as a target without\nany additional configuration, for example, ",(0,n.jsx)(e.a,{href:"/core/button/",children:"Button"}),", ",(0,n.jsx)(e.a,{href:"/core/text-input/",children:"TextInput"}),"\nor ",(0,n.jsx)(e.a,{href:"/core/input/#inputbase-component",children:"InputBase"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["Example of using ",(0,n.jsx)(e.code,{children:"Combobox.Target"})," with ",(0,n.jsx)(e.a,{href:"/core/text-input/",children:"TextInput"})," component:"]}),"\n",(0,n.jsx)(t,{data:d}),"\n",(0,n.jsxs)(e.p,{children:["Example of using ",(0,n.jsx)(e.code,{children:"Combobox.Target"})," with ",(0,n.jsx)(e.a,{href:"/core/button",children:"Button"})," component:"]}),"\n",(0,n.jsx)(t,{data:v}),"\n",(0,n.jsx)(e.h2,{id:"split-events-and-dropdown-targets",children:"Split events and dropdown targets"}),"\n",(0,n.jsxs)(e.p,{children:["In some cases, you might need to use different elements as an events target and as a dropdown.\nUse ",(0,n.jsx)(e.code,{children:"Combobox.EventsTarget"})," to add ",(0,n.jsx)(e.code,{children:"aria-*"})," attributes and keyboard event handlers, and\n",(0,n.jsx)(e.code,{children:"Combobox.DropdownTarget"})," to position the dropdown relative to the target."]}),"\n",(0,n.jsxs)(e.p,{children:["You can have as many ",(0,n.jsx)(e.code,{children:"Combobox.EventsTarget"})," as you need, but only one ",(0,n.jsx)(e.code,{children:"Combobox.DropdownTarget"}),"\nper ",(0,n.jsx)(e.code,{children:"Combobox"}),"."]}),"\n",(0,n.jsxs)(e.p,{children:["Example of using ",(0,n.jsx)(e.code,{children:"Combobox.EventsTarget"})," and ",(0,n.jsx)(e.code,{children:"Combobox.DropdownTarget"})," with ",(0,n.jsx)(e.a,{href:"/core/pills-input",children:"PillsInput"})," component\nto create a searchable multiselect component:"]}),"\n",(0,n.jsx)(t,{data:f.R}),"\n",(0,n.jsx)(e.h2,{id:"update-selected-option-index",children:"Update selected option index"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"updateSelectedOptionIndex"})," handler is required to be called when options list changes.\nUsually, the options list changes when options are filtered based on the search query. In this case,\nyou need to call ",(0,n.jsx)(e.code,{children:"updateSelectedOptionIndex"})," in ",(0,n.jsx)(e.code,{children:"onChange"})," handler of the search input."]}),"\n",(0,n.jsxs)(e.p,{children:["Example of using ",(0,n.jsx)(e.code,{children:"updateSelectedOptionIndex"})," handler in searchable select component:"]}),"\n",(0,n.jsx)(t,{data:F}),"\n",(0,n.jsx)(e.h2,{id:"search-input",children:"Search input"}),"\n",(0,n.jsxs)(e.p,{children:["If you prefer search input inside the dropdown, use ",(0,n.jsx)(e.code,{children:"Combobox.Search"})," component.\nTo focus the search input, call ",(0,n.jsx)(e.code,{children:"combobox.focusSearchInput"}),", usually it is done\nwhen the dropdown is opened. To prevent focus loss after the dropdown is closed,\ncall ",(0,n.jsx)(e.code,{children:"combobox.focusTarget"}),":"]}),"\n",(0,n.jsx)(t,{data:y}),"\n",(0,n.jsx)(e.h2,{id:"select-first-option",children:"Select first option"}),"\n",(0,n.jsxs)(e.p,{children:["Use ",(0,n.jsx)(e.code,{children:"combobox.selectFirstOption"})," function to select the first option. It is useful\nif you want to select the first option when user searching for options in the list.\nIf there are no options available, it will do nothing."]}),"\n",(0,n.jsx)(t,{data:B}),"\n",(0,n.jsx)(e.h2,{id:"active-option",children:"Active option"}),"\n",(0,n.jsxs)(e.p,{children:["Set ",(0,n.jsx)(e.code,{children:"active"})," prop on ",(0,n.jsx)(e.code,{children:"Combobox.Option"})," component to mark it as active.\nBy default, an active option does not have any styles, you can use ",(0,n.jsx)(e.code,{children:"data-combobox-active"}),"\n",(0,n.jsx)(e.a,{href:"/styles/data-attributes",children:"data attribute"})," to style it."]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.code,{children:"combobox.selectActiveOption"})," function selects active option. Usually, it is called\nwhen the dropdown is opened:"]}),"\n",(0,n.jsx)(t,{data:G}),"\n",(0,n.jsx)(e.h2,{id:"options-groups",children:"Options groups"}),"\n",(0,n.jsxs)(e.p,{children:["Render ",(0,n.jsx)(e.code,{children:"Combobox.Option"})," components inside ",(0,n.jsx)(e.code,{children:"Combobox.Group"})," to create options group.\n",(0,n.jsx)(e.code,{children:"Combobox.Group"})," label will be automatically hidden if the group does not have any\nchildren."]}),"\n",(0,n.jsx)(t,{data:z}),"\n",(0,n.jsx)(e.h2,{id:"scrollable-list",children:"Scrollable list"}),"\n",(0,n.jsxs)(e.p,{children:["Set ",(0,n.jsx)(e.code,{children:"max-height"})," style on either ",(0,n.jsx)(e.code,{children:"Combobox.Dropdown"})," or ",(0,n.jsx)(e.code,{children:"Combobox.Options"})," to make the\noptions list scrollable. You can use ",(0,n.jsx)(e.code,{children:"mah"})," ",(0,n.jsx)(e.a,{href:"/styles/style-props",children:"style prop"})," to set\n",(0,n.jsx)(e.code,{children:"max-height"}),"."]}),"\n",(0,n.jsx)(t,{data:H}),"\n",(0,n.jsx)(e.h2,{id:"scrollable-list-with-scrollarea",children:"Scrollable list with ScrollArea"}),"\n",(0,n.jsxs)(e.p,{children:["You can also use ",(0,n.jsx)(e.a,{href:"/core/scroll-area",children:"ScrollArea or ScrollArea.Autosize"})," components\ninstead of native scrollbars:"]}),"\n",(0,n.jsx)(t,{data:R}),"\n",(0,n.jsx)(e.h2,{id:"hide-dropdown",children:"Hide dropdown"}),"\n",(0,n.jsxs)(e.p,{children:["Set ",(0,n.jsx)(e.code,{children:"hidden"})," prop on ",(0,n.jsx)(e.code,{children:"Combobox.Dropdown"})," to hide the dropdown. For example,\nit can be useful when you want to show the dropdown only when there is at least\none option available:"]}),"\n",(0,n.jsx)(t,{data:X}),"\n",(0,n.jsx)(e.h2,{id:"control-dropdown-opened-state",children:"Control dropdown opened state"}),"\n",(0,n.jsxs)(e.p,{children:["To control the dropdown opened state, pass ",(0,n.jsx)(e.code,{children:"opened"})," to ",(0,n.jsx)(e.code,{children:"useCombobox"})," hook:"]}),"\n",(0,n.jsx)(t,{data:J}),"\n",(0,n.jsx)(e.h2,{id:"without-dropdown",children:"Without dropdown"}),"\n",(0,n.jsxs)(e.p,{children:["You can use ",(0,n.jsx)(e.code,{children:"Combobox"})," without dropdown. To do so, use ",(0,n.jsx)(e.code,{children:"Combobox.EventsTarget"})," instead\nof ",(0,n.jsx)(e.code,{children:"Combobox.Target"}),":"]}),"\n",(0,n.jsx)(t,{data:oo}),"\n",(0,n.jsx)(l,{component:"Combobox"}),"\n",(0,n.jsx)(t,{data:ou})]})}var ox=function(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,n.jsx)(ob,Object.assign({},o,{children:(0,n.jsx)(od,o)}))};function oh(o,e){throw Error("Expected "+(e?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}},77275:function(o,e,t){"use strict";t.d(e,{Y:function(){return p}});var n=t(67294),r=t(16658),l=t(84391),s=t(70097),a=t(52561);let c=`
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
`,i=["\uD83C\uDF4E Apples","\uD83C\uDF4C Bananas","\uD83E\uDD66 Broccoli","\uD83E\uDD55 Carrots","\uD83C\uDF6B Chocolate"],p={type:"code",component:function(){let o=(0,r.K)({onDropdownClose:()=>o.resetSelectedOption()}),[e,t]=(0,n.useState)(null),c=i.map(o=>n.createElement(l.h.Option,{value:o,key:o},o));return n.createElement(l.h,{store:o,onOptionSubmit:e=>{t(e),o.closeDropdown()}},n.createElement(l.h.Target,null,n.createElement(s.M,{component:"button",pointer:!0,rightSection:n.createElement(l.h.Chevron,null),onClick:()=>o.toggleDropdown()},e||n.createElement(a.I.Placeholder,null,"Pick value"))),n.createElement(l.h.Dropdown,null,n.createElement(l.h.Options,null,c)))},maxWidth:340,centered:!0,defaultExpanded:!1,code:c}}},function(o){o.O(0,[8992,178,4391,327,9774,2888,179],function(){return o(o.s=92815)}),_N_E=o.O()}]);