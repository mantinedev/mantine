import React, { useState, forwardRef } from 'react';
import { storiesOf } from '@storybook/react';
import { Scrollbars } from 'react-custom-scrollbars';
import { Select } from './Select';

const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
];

const groupedData = [
  { value: 'react', label: 'React', disabled: true, group: 'FB' },
  { value: 'ng', label: 'Angular', group: 'Google' },
  { value: 'lit', label: 'Lit', group: 'Google' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue', group: 'Evan' },
];

const stringData = ['React', 'Angular', 'Svelte', 'Vue'];

const largeData = Array(50)
  .fill(0)
  .map((_, index) => ({
    value: `${index}`,
    label: `Item ${index}`,
  }));

const CustomScrollbars = forwardRef<any, any>((props: any, ref: any) => (
  <Scrollbars
    {...props}
    style={{ ...props.style, height: 300 }}
    ref={(scrollbars: any) => scrollbars?.view && ref(scrollbars.view)}
  >
    <div style={{ padding: 3 }}>{props.children}</div>
  </Scrollbars>
));

function Controlled({ clearable = false }: { clearable?: boolean }) {
  const [value, setValue] = useState(null);

  return (
    <div>
      <Select
        clearable={clearable}
        label="Controlled"
        placeholder="Controlled"
        value={value}
        onChange={setValue}
        data={data}
        style={{ marginTop: 20 }}
      />
      <button type="button" onClick={() => setValue(null)}>
        Set value to null
      </button>
    </div>
  );
}

function Creatable() {
  const [creatableData, setData] = useState(stringData);

  return (
    <Select
      label="Creatable Select"
      data={creatableData}
      placeholder="Select items"
      nothingFound="Nothing found"
      searchable
      creatable
      onCreate={(query) => setData((c) => [...c, query])}
      getCreateLabel={(query) => `+ Create ${query}`}
      style={{ marginTop: 20 }}
    />
  );
}

storiesOf('@mantine/core/Select', module)
  .add('General usage', () => (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <Select
        label="Choose your favorite library/framework"
        placeholder="Choose value"
        data={data}
      />
      <Select
        label="Choose your favorite library/framework"
        placeholder="Choose value"
        data={data}
        disabled
      />
      <Select
        label="Choose your favorite library/framework"
        placeholder="Choose value"
        data={data}
        searchable
        disabled
      />
      <Select
        searchable
        label="Choose your favorite library/framework"
        placeholder="Choose value"
        data={data}
        style={{ marginTop: 20 }}
        nothingFound="No options"
      />
      <Controlled />
      <Select
        label="Controlled (fixed value)"
        placeholder="Choose value"
        searchable
        value="ng"
        data={data}
        style={{ marginTop: 20 }}
      />
      <Select
        label="Disabled Elements"
        placeholder="Choose value"
        data={[...data, { value: 'lit', label: 'Lit', disabled: true }]}
        style={{ marginTop: 20 }}
      />
      <Select
        label="With Grouped and Disabled Data"
        placeholder="Choose value"
        data={groupedData}
        style={{ marginTop: 20 }}
        searchable
      />
      <Select
        label="Large data set"
        placeholder="Choose value"
        searchable
        data={largeData}
        style={{ marginTop: 20 }}
      />
    </div>
  ))
  .add('With custom scrollbars', () => (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <Select
        data={largeData}
        label="custom scrollbars"
        placeholder="select with custom scrollbars"
        dropdownComponent={CustomScrollbars}
      />
    </div>
  ))
  .add('Clearable', () => (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <Creatable />
    </div>
  ))
  .add('String as data', () => (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <Select
        label="Choose your favorite library/framework"
        placeholder="Choose value"
        data={stringData}
      />
      <Select
        searchable
        label="Choose your favorite library/framework"
        placeholder="Choose value"
        limit={2}
        data={stringData}
        style={{ marginTop: 20 }}
        nothingFound="No options"
      />
      <Select
        label="Controlled (fixed value)"
        placeholder="Choose value"
        searchable
        value="react"
        data={stringData}
        style={{ marginTop: 20 }}
      />
      <Select
        size="xl"
        searchable
        clearable
        label="Choose your favorite library/framework"
        placeholder="Choose value"
        data={stringData}
        style={{ marginTop: 20 }}
        nothingFound="No options"
      />
      <Select
        clearable
        label="Choose your favorite library/framework"
        placeholder="Choose value"
        data={stringData}
        style={{ marginTop: 20 }}
        nothingFound="No options"
      />
      <Select
        clearable
        creatable
        getCreateLabel={(query) => `create ${query}`}
        label="Creatable Select"
        placeholder="Choose value"
        searchable
        data={stringData}
        style={{ marginTop: 20 }}
      />
      <Select
        clearable
        label="Controlled (fixed value)"
        placeholder="Choose value"
        searchable
        value="React"
        data={stringData}
        style={{ marginTop: 20 }}
      />
    </div>
  ));
