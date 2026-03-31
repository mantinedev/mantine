(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,435741,o=>{"use strict";var e=o.i(648863),t=o.i(191788),n=o.i(711976),r=o.i(841209),i=o.i(734858),l=o.i(391398);let s=["🍎 Apples","🍌 Bananas","🥦 Broccoli","🥕 Carrots","🍫 Chocolate"],a={type:"code",component:function(){let o=(0,i.useCombobox)(),[e,a]=(0,t.useState)(""),b=(!s.some(o=>o===e)?s.filter(o=>o.toLowerCase().includes(e.toLowerCase().trim())):s).map(o=>(0,l.jsx)(n.Combobox.Option,{value:o,children:o},o));return(0,l.jsxs)(n.Combobox,{store:o,onOptionSubmit:e=>{a(e),o.closeDropdown()},children:[(0,l.jsx)(n.Combobox.Target,{children:(0,l.jsx)(r.TextInput,{label:"Pick value or type anything",placeholder:"Pick value or type anything",value:e,onChange:e=>{a(e.currentTarget.value),o.openDropdown(),o.updateSelectedOptionIndex()},onClick:()=>o.openDropdown(),onFocus:()=>o.openDropdown(),onBlur:()=>o.closeDropdown()})}),(0,l.jsx)(n.Combobox.Dropdown,{children:(0,l.jsx)(n.Combobox.Options,{children:0===b.length?(0,l.jsx)(n.Combobox.Empty,{children:"Nothing found"}):b})})]})},centered:!0,maxWidth:340,defaultExpanded:!1,code:`
import { useState } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

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
      store={combobox}
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
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
`},b=["🍎 Apples","🍌 Bananas","🥦 Broccoli","🥕 Carrots","🍫 Chocolate"],c={type:"code",component:function(){let o=(0,i.useCombobox)(),[e,s]=(0,t.useState)(""),a=(!b.some(o=>o===e)?b.filter(o=>o.toLowerCase().includes(e.toLowerCase().trim())):b).map(o=>(0,l.jsx)(n.Combobox.Option,{value:o,children:o},o));return(0,l.jsxs)(n.Combobox,{store:o,onOptionSubmit:e=>{s(e),o.closeDropdown()},children:[(0,l.jsx)(n.Combobox.Target,{children:(0,l.jsx)(r.TextInput,{label:"Pick value or type anything",placeholder:"Pick value or type anything",value:e,onChange:e=>{s(e.currentTarget.value),o.openDropdown()},onClick:()=>o.openDropdown(),onFocus:()=>o.openDropdown(),onBlur:()=>o.closeDropdown()})}),(0,l.jsx)(n.Combobox.Dropdown,{hidden:0===a.length,children:(0,l.jsx)(n.Combobox.Options,{children:a})})]})},centered:!0,maxWidth:340,defaultExpanded:!1,code:`
import { useState } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

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
      store={combobox}
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
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
`};var p=o.i(294788),m=o.i(586488);let u=["🍎 Apples","🍌 Bananas","🥦 Broccoli","🥕 Carrots","🍫 Chocolate"],d={type:"code",component:function(){let o=(0,i.useCombobox)({onDropdownClose:()=>o.resetSelectedOption()}),[e,r]=(0,t.useState)(null),s=u.map(o=>(0,l.jsx)(n.Combobox.Option,{value:o,children:o},o));return(0,l.jsxs)(n.Combobox,{store:o,onOptionSubmit:e=>{r(e),o.closeDropdown()},children:[(0,l.jsx)(n.Combobox.Target,{children:(0,l.jsx)(m.InputBase,{component:"button",type:"button",pointer:!0,rightSection:(0,l.jsx)(n.Combobox.Chevron,{}),rightSectionPointerEvents:"none",onClick:()=>o.toggleDropdown(),children:e||(0,l.jsx)(p.Input.Placeholder,{children:"Pick value"})})}),(0,l.jsx)(n.Combobox.Dropdown,{children:(0,l.jsx)(n.Combobox.Options,{children:s})})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

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
`},x=["🍎 Apples","🍌 Bananas","🥦 Broccoli","🥕 Carrots","🍫 Chocolate"],C={type:"code",component:function(){let o=(0,i.useCombobox)({onDropdownClose:()=>o.resetSelectedOption()}),[e,r]=(0,t.useState)(null),[s,a]=(0,t.useState)(""),b=(x.every(o=>o!==s)?x.filter(o=>o.toLowerCase().includes(s.toLowerCase().trim())):x).map(o=>(0,l.jsx)(n.Combobox.Option,{value:o,children:o},o));return(0,l.jsxs)(n.Combobox,{store:o,onOptionSubmit:e=>{r(e),a(e),o.closeDropdown()},children:[(0,l.jsx)(n.Combobox.Target,{children:(0,l.jsx)(m.InputBase,{rightSection:(0,l.jsx)(n.Combobox.Chevron,{}),rightSectionPointerEvents:"none",onClick:()=>o.openDropdown(),onFocus:()=>o.openDropdown(),onBlur:()=>{o.closeDropdown(),a(e||"")},placeholder:"Search value",value:s,onChange:e=>{o.updateSelectedOptionIndex(),a(e.currentTarget.value)}})}),(0,l.jsx)(n.Combobox.Dropdown,{children:(0,l.jsx)(n.Combobox.Options,{children:b.length>0?b:(0,l.jsx)(n.Combobox.Empty,{children:"Nothing found"})})})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:`
import { useState } from 'react';
import { InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

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
`};var h=o.i(232471),v=o.i(485108),g=o.i(883364);let O=["🍎 Apples","🍌 Bananas","🥦 Broccoli","🥕 Carrots","🍫 Chocolate"],S={type:"code",component:function(){let[o,e]=(0,t.useState)(null),r=(0,i.useCombobox)({onDropdownClose:()=>r.resetSelectedOption()}),s=O.map(o=>(0,l.jsx)(n.Combobox.Option,{value:o,children:o},o));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(h.Box,{mb:"xs",children:[(0,l.jsxs)(g.Text,{span:!0,size:"sm",c:"dimmed",children:["Selected item:"," "]}),(0,l.jsx)(g.Text,{span:!0,size:"sm",children:o||"Nothing selected"})]}),(0,l.jsxs)(n.Combobox,{store:r,width:250,position:"bottom-start",withArrow:!0,onOptionSubmit:o=>{e(o),r.closeDropdown()},children:[(0,l.jsx)(n.Combobox.Target,{children:(0,l.jsx)(v.Button,{onClick:()=>r.toggleDropdown(),children:"Pick item"})}),(0,l.jsx)(n.Combobox.Dropdown,{children:(0,l.jsx)(n.Combobox.Options,{children:s})})]})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:`
import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

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
`},w=["🍎 Apples","🍌 Bananas","🥦 Broccoli","🥕 Carrots","🍫 Chocolate"],D={type:"code",component:function(){let[o,e]=(0,t.useState)(""),[r,s]=(0,t.useState)(null),a=(0,i.useCombobox)({onDropdownClose:()=>{a.resetSelectedOption(),a.focusTarget(),e("")},onDropdownOpen:()=>{a.focusSearchInput()}}),b=w.filter(e=>e.toLowerCase().includes(o.toLowerCase().trim())).map(o=>(0,l.jsx)(n.Combobox.Option,{value:o,children:o},o));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(h.Box,{mb:"xs",children:[(0,l.jsxs)(g.Text,{span:!0,size:"sm",c:"dimmed",children:["Selected item:"," "]}),(0,l.jsx)(g.Text,{span:!0,size:"sm",children:r||"Nothing selected"})]}),(0,l.jsxs)(n.Combobox,{store:a,width:250,position:"bottom-start",withArrow:!0,onOptionSubmit:o=>{s(o),a.closeDropdown()},children:[(0,l.jsx)(n.Combobox.Target,{withAriaAttributes:!1,children:(0,l.jsx)(v.Button,{onClick:()=>a.toggleDropdown(),children:"Pick item"})}),(0,l.jsxs)(n.Combobox.Dropdown,{children:[(0,l.jsx)(n.Combobox.Search,{value:o,onChange:o=>e(o.currentTarget.value),placeholder:"Search groceries"}),(0,l.jsx)(n.Combobox.Options,{children:b.length>0?b:(0,l.jsx)(n.Combobox.Empty,{children:"Nothing found"})})]})]})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:`
import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

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
`},f=["🍎 Apples","🍌 Bananas","🥦 Broccoli","🥕 Carrots","🍫 Chocolate"],I={type:"code",component:function(){let o=(0,i.useCombobox)({onDropdownClose:()=>o.resetSelectedOption()}),[e,s]=(0,t.useState)(""),a=(!f.some(o=>o===e)?f.filter(o=>o.toLowerCase().includes(e.toLowerCase().trim())):f).map(o=>(0,l.jsx)(n.Combobox.Option,{value:o,children:o},o));return(0,t.useEffect)(()=>{o.selectFirstOption()},[e]),(0,l.jsxs)(n.Combobox,{store:o,onOptionSubmit:e=>{s(e),o.closeDropdown()},children:[(0,l.jsx)(n.Combobox.Target,{children:(0,l.jsx)(r.TextInput,{label:"Pick value or type anything",placeholder:"Pick value or type anything",value:e,onChange:e=>{s(e.currentTarget.value),o.openDropdown()},onClick:()=>o.openDropdown(),onFocus:()=>o.openDropdown(),onBlur:()=>o.closeDropdown()})}),(0,l.jsx)(n.Combobox.Dropdown,{children:(0,l.jsx)(n.Combobox.Options,{children:0===a.length?(0,l.jsx)(n.Combobox.Empty,{children:"Nothing found"}):a})})]})},centered:!0,maxWidth:340,defaultExpanded:!1,code:`
import { useState, useEffect } from 'react';
import { Combobox, TextInput, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

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
      store={combobox}
      onOptionSubmit={(optionValue) => {
        setValue(optionValue);
        combobox.closeDropdown();
      }}
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
`},j=["🍎 Apples","🍌 Bananas","🥦 Broccoli","🥕 Carrots","🍫 Chocolate"],B={type:"code",component:function(){let[o,e]=(0,t.useState)(!1),s=(0,i.useCombobox)({opened:o}),a=j.map(o=>(0,l.jsx)(n.Combobox.Option,{value:o,children:o},o));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v.Button,{mb:"md",onClick:()=>e(o=>!o),children:"Toggle dropdown"}),(0,l.jsxs)(n.Combobox,{store:s,children:[(0,l.jsx)(n.Combobox.Target,{children:(0,l.jsx)(r.TextInput,{label:"Autocomplete",description:"Dropdown is opened/closed when button is clicked",placeholder:"Click button to toggle dropdown"})}),(0,l.jsx)(n.Combobox.Dropdown,{children:(0,l.jsx)(n.Combobox.Options,{children:a})})]})]})},code:`
import { useState } from 'react';
import { TextInput, Button, Combobox, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

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
`,maxWidth:340,centered:!0,defaultExpanded:!1};var T=o.i(956031),k=o.i(725695);let y=["🍎 Apples","🍌 Bananas","🥦 Broccoli","🥕 Carrots","🍫 Chocolate"],P={type:"code",component:function(){let o=(0,i.useCombobox)({onDropdownClose:()=>o.resetSelectedOption(),onDropdownOpen:e=>{"keyboard"===e?o.selectActiveOption():o.updateSelectedOptionIndex("active")}}),[e,r]=(0,t.useState)("🥦 Broccoli"),s=y.map(o=>(0,l.jsx)(n.Combobox.Option,{value:o,active:o===e,children:(0,l.jsxs)(k.Group,{gap:"xs",children:[o===e&&(0,l.jsx)(T.CheckIcon,{size:12}),(0,l.jsx)("span",{children:o})]})},o));return(0,l.jsxs)(n.Combobox,{store:o,resetSelectionOnOptionHover:!0,onOptionSubmit:e=>{r(e),o.updateSelectedOptionIndex("active")},children:[(0,l.jsx)(n.Combobox.Target,{targetType:"button",children:(0,l.jsx)(m.InputBase,{component:"button",type:"button",pointer:!0,rightSection:(0,l.jsx)(n.Combobox.Chevron,{}),rightSectionPointerEvents:"none",onClick:()=>o.toggleDropdown(),children:e||(0,l.jsx)(p.Input.Placeholder,{children:"Pick value"})})}),(0,l.jsx)(n.Combobox.Dropdown,{children:(0,l.jsx)(n.Combobox.Options,{children:s})})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox, CheckIcon, Group } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

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

  const [value, setValue] = useState<string | null>('🥦 Broccoli');

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
`},A=["🍎 Apples","🍌 Bananas","🥦 Broccoli","🥕 Carrots","🍫 Chocolate","🍇 Grapes","🍋 Lemon","🥬 Lettuce","🍄 Mushrooms","🍊 Oranges","🥔 Potatoes","🍅 Tomatoes","🥚 Eggs","🥛 Milk","🍞 Bread","🍗 Chicken","🍔 Hamburger","🧀 Cheese","🥩 Steak","🍟 French Fries","🍕 Pizza","🥦 Cauliflower","🥜 Peanuts","🍦 Ice Cream","🍯 Honey","🥖 Baguette","🍣 Sushi","🥝 Kiwi","🍓 Strawberries"],E={type:"code",component:function(){let o=(0,i.useCombobox)({onDropdownClose:()=>o.resetSelectedOption()}),[e,r]=(0,t.useState)(null),s=A.map(o=>(0,l.jsx)(n.Combobox.Option,{value:o,children:o},o));return(0,l.jsxs)(n.Combobox,{store:o,onOptionSubmit:e=>{r(e),o.closeDropdown()},children:[(0,l.jsx)(n.Combobox.Target,{children:(0,l.jsx)(m.InputBase,{component:"button",type:"button",pointer:!0,rightSection:(0,l.jsx)(n.Combobox.Chevron,{}),rightSectionPointerEvents:"none",onClick:()=>o.toggleDropdown(),children:e||(0,l.jsx)(p.Input.Placeholder,{children:"Pick value"})})}),(0,l.jsx)(n.Combobox.Dropdown,{children:(0,l.jsx)(n.Combobox.Options,{mah:200,style:{overflowY:"auto"},children:s})})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = [
  '🍎 Apples',
  '🍌 Bananas',
  '🥦 Broccoli',
  '🥕 Carrots',
  '🍫 Chocolate',
  '🍇 Grapes',
  '🍋 Lemon',
  '🥬 Lettuce',
  '🍄 Mushrooms',
  '🍊 Oranges',
  '🥔 Potatoes',
  '🍅 Tomatoes',
  '🥚 Eggs',
  '🥛 Milk',
  '🍞 Bread',
  '🍗 Chicken',
  '🍔 Hamburger',
  '🧀 Cheese',
  '🥩 Steak',
  '🍟 French Fries',
  '🍕 Pizza',
  '🥦 Cauliflower',
  '🥜 Peanuts',
  '🍦 Ice Cream',
  '🍯 Honey',
  '🥖 Baguette',
  '🍣 Sushi',
  '🥝 Kiwi',
  '🍓 Strawberries',
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
`};var V=o.i(19300);let z=["🍎 Apples","🍌 Bananas","🥦 Broccoli","🥕 Carrots","🍫 Chocolate","🍇 Grapes","🍋 Lemon","🥬 Lettuce","🍄 Mushrooms","🍊 Oranges","🥔 Potatoes","🍅 Tomatoes","🥚 Eggs","🥛 Milk","🍞 Bread","🍗 Chicken","🍔 Hamburger","🧀 Cheese","🥩 Steak","🍟 French Fries","🍕 Pizza","🥦 Cauliflower","🥜 Peanuts","🍦 Ice Cream","🍯 Honey","🥖 Baguette","🍣 Sushi","🥝 Kiwi","🍓 Strawberries"],F={type:"code",component:function(){let o=(0,i.useCombobox)({onDropdownClose:()=>o.resetSelectedOption()}),[e,r]=(0,t.useState)(null),s=z.map(o=>(0,l.jsx)(n.Combobox.Option,{value:o,children:o},o));return(0,l.jsxs)(n.Combobox,{store:o,onOptionSubmit:e=>{r(e),o.closeDropdown()},children:[(0,l.jsx)(n.Combobox.Target,{children:(0,l.jsx)(m.InputBase,{component:"button",type:"button",pointer:!0,rightSection:(0,l.jsx)(n.Combobox.Chevron,{}),rightSectionPointerEvents:"none",onClick:()=>o.toggleDropdown(),children:e||(0,l.jsx)(p.Input.Placeholder,{children:"Pick value"})})}),(0,l.jsx)(n.Combobox.Dropdown,{children:(0,l.jsx)(n.Combobox.Options,{children:(0,l.jsx)(V.ScrollArea.Autosize,{type:"scroll",mah:200,children:s})})})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox, ScrollArea } from '@mantine/core';

const groceries = [
  '🍎 Apples',
  '🍌 Bananas',
  '🥦 Broccoli',
  '🥕 Carrots',
  '🍫 Chocolate',
  '🍇 Grapes',
  '🍋 Lemon',
  '🥬 Lettuce',
  '🍄 Mushrooms',
  '🍊 Oranges',
  '🥔 Potatoes',
  '🍅 Tomatoes',
  '🥚 Eggs',
  '🥛 Milk',
  '🍞 Bread',
  '🍗 Chicken',
  '🍔 Hamburger',
  '🧀 Cheese',
  '🥩 Steak',
  '🍟 French Fries',
  '🍕 Pizza',
  '🥦 Cauliflower',
  '🥜 Peanuts',
  '🍦 Ice Cream',
  '🍯 Honey',
  '🥖 Baguette',
  '🍣 Sushi',
  '🥝 Kiwi',
  '🍓 Strawberries',
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
`};var G=o.i(122057),L=o.i(217633);let H=["🍎 Apples","🍌 Bananas","🥦 Broccoli","🥕 Carrots","🍫 Chocolate"],R={type:"code",component:function(){let o=(0,i.useCombobox)({onDropdownClose:()=>o.resetSelectedOption(),onDropdownOpen:()=>o.updateSelectedOptionIndex("active")}),[e,r]=(0,t.useState)([]),s=o=>r(e=>e.filter(e=>e!==o)),a=e.map(o=>(0,l.jsx)(G.Pill,{withRemoveButton:!0,onRemove:()=>s(o),children:o},o)),b=H.map(o=>(0,l.jsx)(n.Combobox.Option,{value:o,active:e.includes(o),children:(0,l.jsxs)(k.Group,{gap:"sm",children:[e.includes(o)?(0,l.jsx)(T.CheckIcon,{size:12}):null,(0,l.jsx)("span",{children:o})]})},o));return(0,l.jsxs)(n.Combobox,{store:o,onOptionSubmit:o=>r(e=>e.includes(o)?e.filter(e=>e!==o):[...e,o]),children:[(0,l.jsx)(n.Combobox.DropdownTarget,{children:(0,l.jsx)(L.PillsInput,{pointer:!0,onClick:()=>o.toggleDropdown(),children:(0,l.jsxs)(G.Pill.Group,{children:[a.length>0?a:(0,l.jsx)(p.Input.Placeholder,{children:"Pick one or more values"}),(0,l.jsx)(n.Combobox.EventsTarget,{children:(0,l.jsx)(L.PillsInput.Field,{type:"hidden",onBlur:()=>o.closeDropdown(),onKeyDown:o=>{"Backspace"===o.key&&e.length>0&&(o.preventDefault(),s(e[e.length-1]))}})})]})})}),(0,l.jsx)(n.Combobox.Dropdown,{children:(0,l.jsx)(n.Combobox.Options,{children:b})})]})},code:`
import { useState } from 'react';
import { PillsInput, Pill, Input, Combobox, CheckIcon, Group, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

function Demo() {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

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

  const options = groceries.map((item) => (
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
        <PillsInput pointer onClick={() => combobox.toggleDropdown()}>
          <Pill.Group>
            {values.length > 0 ? (
              values
            ) : (
              <Input.Placeholder>Pick one or more values</Input.Placeholder>
            )}

            <Combobox.EventsTarget>
              <PillsInput.Field
                type="hidden"
                onBlur={() => combobox.closeDropdown()}
                onKeyDown={(event) => {
                  if (event.key === 'Backspace' && value.length > 0) {
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
        <Combobox.Options>{options}</Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,centered:!0,defaultExpanded:!1,maxWidth:340},M=["🍎 Apples","🍌 Bananas","🥦 Broccoli","🥕 Carrots","🍫 Chocolate"],W={type:"code",component:function(){let o=(0,i.useCombobox)({onDropdownClose:()=>o.resetSelectedOption(),onDropdownOpen:()=>o.updateSelectedOptionIndex("active")}),[e,r]=(0,t.useState)(""),[s,a]=(0,t.useState)([]),b=o=>a(e=>e.filter(e=>e!==o)),c=s.map(o=>(0,l.jsx)(G.Pill,{withRemoveButton:!0,onRemove:()=>b(o),children:o},o)),p=M.filter(o=>o.toLowerCase().includes(e.trim().toLowerCase())).map(o=>(0,l.jsx)(n.Combobox.Option,{value:o,active:s.includes(o),children:(0,l.jsxs)(k.Group,{gap:"sm",children:[s.includes(o)?(0,l.jsx)(T.CheckIcon,{size:12}):null,(0,l.jsx)("span",{children:o})]})},o));return(0,l.jsxs)(n.Combobox,{store:o,onOptionSubmit:o=>a(e=>e.includes(o)?e.filter(e=>e!==o):[...e,o]),children:[(0,l.jsx)(n.Combobox.DropdownTarget,{children:(0,l.jsx)(L.PillsInput,{onClick:()=>o.openDropdown(),children:(0,l.jsxs)(G.Pill.Group,{children:[c,(0,l.jsx)(n.Combobox.EventsTarget,{children:(0,l.jsx)(L.PillsInput.Field,{onFocus:()=>o.openDropdown(),onBlur:()=>o.closeDropdown(),value:e,placeholder:"Search values",onChange:e=>{o.updateSelectedOptionIndex(),r(e.currentTarget.value)},onKeyDown:o=>{"Backspace"===o.key&&0===e.length&&s.length>0&&(o.preventDefault(),b(s[s.length-1]))}})})]})})}),(0,l.jsx)(n.Combobox.Dropdown,{children:(0,l.jsx)(n.Combobox.Options,{children:p.length>0?p:(0,l.jsx)(n.Combobox.Empty,{children:"Nothing found..."})})})]})},code:`
import { useState } from 'react';
import { PillsInput, Pill, Combobox, CheckIcon, Group, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

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
`,centered:!0,defaultExpanded:!1,maxWidth:340},N={type:"code",component:function(){let[o,e]=(0,t.useState)("");return(0,l.jsxs)(n.Combobox,{onOptionSubmit:e,children:[(0,l.jsx)(n.Combobox.EventsTarget,{children:(0,l.jsx)(r.TextInput,{placeholder:"Pick value",value:o,onChange:o=>e(o.currentTarget.value)})}),(0,l.jsxs)(n.Combobox.Options,{mt:"sm",children:[(0,l.jsx)(n.Combobox.Option,{value:"First",children:"First"}),(0,l.jsx)(n.Combobox.Option,{value:"Second",children:"Second"}),(0,l.jsx)(n.Combobox.Option,{value:"Third",children:"Third"})]})]})},code:`
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
`,centered:!0,maxWidth:340,defaultExpanded:!1},$={type:"code",component:function(){let o=(0,i.useCombobox)({onDropdownClose:()=>o.resetSelectedOption()}),[e,r]=(0,t.useState)(null);return(0,l.jsxs)(n.Combobox,{store:o,onOptionSubmit:e=>{r(e),o.closeDropdown()},children:[(0,l.jsx)(n.Combobox.Target,{children:(0,l.jsx)(m.InputBase,{component:"button",type:"button",pointer:!0,rightSection:(0,l.jsx)(n.Combobox.Chevron,{}),rightSectionPointerEvents:"none",onClick:()=>o.toggleDropdown(),children:e||(0,l.jsx)(p.Input.Placeholder,{children:"Pick value"})})}),(0,l.jsx)(n.Combobox.Dropdown,{children:(0,l.jsxs)(n.Combobox.Options,{children:[(0,l.jsxs)(n.Combobox.Group,{label:"Fruits",children:[(0,l.jsx)(n.Combobox.Option,{value:"🍎 Apples",children:"🍎 Apples"}),(0,l.jsx)(n.Combobox.Option,{value:"🍌 Bananas",children:"🍌 Bananas"}),(0,l.jsx)(n.Combobox.Option,{value:"🍇 Grape",children:"🍇 Grape"})]}),(0,l.jsxs)(n.Combobox.Group,{label:"Vegetables",children:[(0,l.jsx)(n.Combobox.Option,{value:"🥦 Broccoli",children:"🥦 Broccoli"}),(0,l.jsx)(n.Combobox.Option,{value:"🥕 Carrots",children:"🥕 Carrots"}),(0,l.jsx)(n.Combobox.Option,{value:"🥬 Lettuce",children:"🥬 Lettuce"})]})]})})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:`
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
            <Combobox.Option value="🍎 Apples">🍎 Apples</Combobox.Option>
            <Combobox.Option value="🍌 Bananas">🍌 Bananas</Combobox.Option>
            <Combobox.Option value="🍇 Grape">🍇 Grape</Combobox.Option>
          </Combobox.Group>

          <Combobox.Group label="Vegetables">
            <Combobox.Option value="🥦 Broccoli">🥦 Broccoli</Combobox.Option>
            <Combobox.Option value="🥕 Carrots">🥕 Carrots</Combobox.Option>
            <Combobox.Option value="🥬 Lettuce">🥬 Lettuce</Combobox.Option>
          </Combobox.Group>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`};var K=o.i(229062);let _=`
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
`,q={type:"styles-api",data:K.ComboboxStylesApi,component:function(o){return(0,l.jsxs)(n.Combobox,{store:(0,i.useCombobox)({opened:!0}),...o,middlewares:{flip:!1,shift:!1},children:[(0,l.jsx)(n.Combobox.Target,{children:(0,l.jsx)(r.TextInput,{placeholder:"Pick value"})}),(0,l.jsxs)(n.Combobox.Dropdown,{children:[(0,l.jsx)(n.Combobox.Header,{children:"Combobox header"}),(0,l.jsx)(n.Combobox.Search,{placeholder:"Search input"}),(0,l.jsxs)(n.Combobox.Options,{children:[(0,l.jsxs)(n.Combobox.Group,{label:"First group",children:[(0,l.jsx)(n.Combobox.Option,{value:"1",children:"First"}),(0,l.jsx)(n.Combobox.Option,{value:"2",children:"Second"})]}),(0,l.jsxs)(n.Combobox.Group,{label:"Second group",children:[(0,l.jsx)(n.Combobox.Option,{value:"3",children:"Third"}),(0,l.jsx)(n.Combobox.Option,{value:"4",children:"Fourth"})]}),(0,l.jsx)(n.Combobox.Group,{label:"Third group",children:(0,l.jsx)(n.Combobox.Empty,{children:"Nothing found in this group..."})})]}),(0,l.jsx)(n.Combobox.Footer,{children:"Combobox footer"})]})]})},code:_},Y=["🍎 Apples","🍌 Bananas","🥦 Broccoli","🥕 Carrots","🍫 Chocolate"],U={type:"code",component:function(){let o=(0,i.useCombobox)({onDropdownClose:()=>o.resetSelectedOption()}),[e,r]=(0,t.useState)(null),s=Y.map(o=>(0,l.jsx)(n.Combobox.Option,{value:o,children:o},o));return(0,l.jsxs)(n.Combobox,{store:o,position:"bottom",middlewares:{flip:!1,shift:!1},onOptionSubmit:e=>{r(e),o.closeDropdown()},children:[(0,l.jsx)(n.Combobox.Target,{children:(0,l.jsx)(m.InputBase,{component:"button",type:"button",pointer:!0,rightSection:(0,l.jsx)(n.Combobox.Chevron,{}),rightSectionPointerEvents:"none",onClick:()=>o.toggleDropdown(),children:e||(0,l.jsx)(p.Input.Placeholder,{children:"Pick value"})})}),(0,l.jsx)(n.Combobox.Dropdown,{children:(0,l.jsx)(n.Combobox.Options,{children:s})})]})},maxWidth:340,centered:!0,defaultExpanded:!1,code:`
import { useState } from 'react';
import { Input, InputBase, Combobox, useCombobox } from '@mantine/core';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

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
`};var J=o.i(324869),Q=o.i(654715);let X=`
import { useRef, useState } from 'react';
import { Virtuoso, VirtuosoHandle } from 'react-virtuoso';
import { Combobox, Input, InputBase, ScrollArea, useVirtualizedCombobox } from '@mantine/core';

const largeData = Array(10000)
  .fill(0)
  .map((_, index) => ({
    value: \`value-\${index}\`,
    label: \`Label \${index}\`,
    id: \`item-\${index}\`,
    disabled: false,
  }));

function Demo() {
  const [opened, setOpened] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
  const [activeOptionIndex, setActiveOptionIndex] = useState(-1);
  const [value, setValue] = useState('');
  const virtuoso = useRef<VirtuosoHandle>(null);
  const [scrollParent, setScrollParent] = useState<HTMLDivElement | null>(null);

  const combobox = useVirtualizedCombobox({
    opened,
    onOpenedChange: setOpened,
    onDropdownOpen: () => {
      if (activeOptionIndex !== -1) {
        setSelectedOptionIndex(activeOptionIndex);
        requestAnimationFrame(() => {
          virtuoso.current?.scrollToIndex({ index: activeOptionIndex });
        });
      }
    },
    isOptionDisabled: (index) => largeData[index].disabled,
    totalOptionsCount: largeData.length,
    getOptionId: (index) => largeData[index].id,
    selectedOptionIndex,
    activeOptionIndex,
    setSelectedOptionIndex: (index) => {
      setSelectedOptionIndex(index);
      if (index !== -1) {
        virtuoso.current?.scrollIntoView({ index });
      }
    },
    onSelectedOptionSubmit: onOptionSubmit,
  });

  function onOptionSubmit(index: number) {
    const option = largeData[index];
    setValue(option.value);
    setActiveOptionIndex(index);
    combobox.closeDropdown();
    combobox.resetSelectedOption();
  }

  return (
    <Combobox store={combobox} resetSelectionOnOptionHover={false} keepMounted>
      <Combobox.Target>
        <InputBase component="button" onClick={() => combobox.toggleDropdown()} pointer>
          {value || <Input.Placeholder>Pick a value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>
      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize
            mah={220}
            type="scroll"
            scrollbarSize={4}
            viewportRef={setScrollParent}
            onMouseDown={(event) => event.preventDefault()}
          >
            <Virtuoso
              data={largeData}
              ref={virtuoso}
              style={{ height: 420 }}
              customScrollParent={scrollParent ?? undefined}
              itemContent={(index, item) => (
                <Combobox.Option
                  value={item.value}
                  key={item.value}
                  active={index === activeOptionIndex}
                  selected={index === selectedOptionIndex}
                  onClick={() => onOptionSubmit(index)}
                >
                  {item.label}
                </Combobox.Option>
              )}
            />
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,Z=Array(1e4).fill(0).map((o,e)=>({value:`value-${e}`,label:`Label ${e}`,id:`item-${e}`,disabled:!1})),oo={type:"code",component:function(){let[o,e]=(0,t.useState)(!1),[r,i]=(0,t.useState)(-1),[s,a]=(0,t.useState)(-1),[b,c]=(0,t.useState)(""),u=(0,t.useRef)(null),[d,x]=(0,t.useState)(null),C=(0,J.useVirtualizedCombobox)({opened:o,onOpenedChange:e,onDropdownOpen:()=>{-1!==s&&(i(s),requestAnimationFrame(()=>{u.current?.scrollToIndex({index:s})}))},isOptionDisabled:o=>Z[o].disabled,totalOptionsCount:Z.length,getOptionId:o=>Z[o].id,selectedOptionIndex:r,activeOptionIndex:s,setSelectedOptionIndex:o=>{i(o),-1!==o&&u.current?.scrollIntoView({index:o})},onSelectedOptionSubmit:h});function h(o){c(Z[o].value),a(o),C.closeDropdown(),C.resetSelectedOption()}return(0,l.jsxs)(n.Combobox,{store:C,resetSelectionOnOptionHover:!1,keepMounted:!0,children:[(0,l.jsx)(n.Combobox.Target,{children:(0,l.jsx)(m.InputBase,{component:"button",onClick:()=>C.toggleDropdown(),pointer:!0,children:b||(0,l.jsx)(p.Input.Placeholder,{children:"Pick a value"})})}),(0,l.jsx)(n.Combobox.Dropdown,{children:(0,l.jsx)(n.Combobox.Options,{children:(0,l.jsx)(V.ScrollArea.Autosize,{mah:220,type:"scroll",scrollbarSize:4,viewportRef:x,onMouseDown:o=>o.preventDefault(),children:(0,l.jsx)(Q.Virtuoso,{data:Z,ref:u,style:{height:420},customScrollParent:d??void 0,itemContent:(o,e)=>(0,l.jsx)(n.Combobox.Option,{value:e.value,active:o===s,selected:o===r,onClick:()=>h(o),children:e.label},e.value)})})})})]})},code:X,maxWidth:340,centered:!0,defaultExpanded:!1};var oe=o.i(463044);let ot=`
import { useState } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Combobox, Input, InputBase, ScrollArea, useVirtualizedCombobox } from '@mantine/core';

const ITEM_HEIGHT = 36;

const largeData = Array(10000)
  .fill(0)
  .map((_, index) => ({
    value: \`value-\${index}\`,
    label: \`Label \${index}\`,
    id: \`item-\${index}\`,
    disabled: false,
  }));

function Demo() {
  const [opened, setOpened] = useState(false);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
  const [activeOptionIndex, setActiveOptionIndex] = useState(-1);
  const [value, setValue] = useState('');
  const [scrollParent, setScrollParent] = useState<HTMLDivElement | null>(null);

  const virtualizer = useVirtualizer({
    count: largeData.length,
    getScrollElement: () => scrollParent,
    estimateSize: () => ITEM_HEIGHT,
    overscan: 5,
  });

  const combobox = useVirtualizedCombobox({
    opened,
    onOpenedChange: setOpened,
    onDropdownOpen: () => {
      if (activeOptionIndex !== -1) {
        setSelectedOptionIndex(activeOptionIndex);
        requestAnimationFrame(() => {
          virtualizer.scrollToIndex(activeOptionIndex, { align: 'auto' });
        });
      }
    },
    isOptionDisabled: (index) => largeData[index].disabled,
    totalOptionsCount: largeData.length,
    getOptionId: (index) => largeData[index].id,
    selectedOptionIndex,
    activeOptionIndex,
    setSelectedOptionIndex: (index) => {
      setSelectedOptionIndex(index);
      if (index !== -1) {
        virtualizer.scrollToIndex(index, { align: 'auto' });
      }
    },
    onSelectedOptionSubmit: onOptionSubmit,
  });

  function onOptionSubmit(index: number) {
    const option = largeData[index];
    setValue(option.value);
    setActiveOptionIndex(index);
    combobox.closeDropdown();
    combobox.resetSelectedOption();
  }

  return (
    <Combobox store={combobox} resetSelectionOnOptionHover={false} keepMounted>
      <Combobox.Target>
        <InputBase component="button" onClick={() => combobox.toggleDropdown()} pointer>
          {value || <Input.Placeholder>Pick a value</Input.Placeholder>}
        </InputBase>
      </Combobox.Target>
      <Combobox.Dropdown>
        <Combobox.Options>
          <ScrollArea.Autosize
            mah={220}
            type="scroll"
            scrollbarSize={4}
            viewportRef={setScrollParent}
            onMouseDown={(event) => event.preventDefault()}
          >
            <div style={{ height: virtualizer.getTotalSize(), position: 'relative' }}>
              {virtualizer.getVirtualItems().map((virtualItem) => {
                const item = largeData[virtualItem.index];
                return (
                  <Combobox.Option
                    value={item.value}
                    key={item.value}
                    active={virtualItem.index === activeOptionIndex}
                    selected={virtualItem.index === selectedOptionIndex}
                    onClick={() => onOptionSubmit(virtualItem.index)}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: virtualItem.size,
                      transform: \`translateY(\${virtualItem.start}px)\`,
                    }}
                  >
                    {item.label}
                  </Combobox.Option>
                );
              })}
            </div>
          </ScrollArea.Autosize>
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
`,on=Array(1e4).fill(0).map((o,e)=>({value:`value-${e}`,label:`Label ${e}`,id:`item-${e}`,disabled:!1})),or={type:"code",component:function(){let[o,e]=(0,t.useState)(!1),[r,i]=(0,t.useState)(-1),[s,a]=(0,t.useState)(-1),[b,c]=(0,t.useState)(""),[u,d]=(0,t.useState)(null),x=(0,oe.useVirtualizer)({count:on.length,getScrollElement:()=>u,estimateSize:()=>36,overscan:5}),C=(0,J.useVirtualizedCombobox)({opened:o,onOpenedChange:e,onDropdownOpen:()=>{-1!==s&&(i(s),requestAnimationFrame(()=>{x.scrollToIndex(s,{align:"auto"})}))},isOptionDisabled:o=>on[o].disabled,totalOptionsCount:on.length,getOptionId:o=>on[o].id,selectedOptionIndex:r,activeOptionIndex:s,setSelectedOptionIndex:o=>{i(o),-1!==o&&x.scrollToIndex(o,{align:"auto"})},onSelectedOptionSubmit:h});function h(o){c(on[o].value),a(o),C.closeDropdown(),C.resetSelectedOption()}return(0,l.jsxs)(n.Combobox,{store:C,resetSelectionOnOptionHover:!1,keepMounted:!0,children:[(0,l.jsx)(n.Combobox.Target,{children:(0,l.jsx)(m.InputBase,{component:"button",onClick:()=>C.toggleDropdown(),pointer:!0,children:b||(0,l.jsx)(p.Input.Placeholder,{children:"Pick a value"})})}),(0,l.jsx)(n.Combobox.Dropdown,{children:(0,l.jsx)(n.Combobox.Options,{children:(0,l.jsx)(V.ScrollArea.Autosize,{mah:220,type:"scroll",scrollbarSize:4,viewportRef:d,onMouseDown:o=>o.preventDefault(),children:(0,l.jsx)("div",{style:{height:x.getTotalSize(),position:"relative"},children:x.getVirtualItems().map(o=>{let e=on[o.index];return(0,l.jsx)(n.Combobox.Option,{value:e.value,active:o.index===s,selected:o.index===r,onClick:()=>h(o.index),style:{position:"absolute",top:0,left:0,width:"100%",height:o.size,transform:`translateY(${o.start}px)`},children:e.label},e.value)})})})})})]})},code:ot,maxWidth:340,centered:!0,defaultExpanded:!1};var oi=(0,e.__exportAll)({activeOption:()=>P,autocomplete:()=>a,button:()=>S,buttonSearch:()=>D,controlledDropdown:()=>B,dropdownPosition:()=>U,groups:()=>$,hiddenDropdown:()=>c,multiselect:()=>R,nativeScroll:()=>E,noDropdown:()=>N,scrollArea:()=>F,searchableMultiselect:()=>W,searchableSelect:()=>C,select:()=>d,selectFirstOption:()=>I,stylesApi:()=>q,virtualized:()=>oo,virtualizedTanstack:()=>or});o.s(["ComboboxDemos",0,oi],435741)}]);