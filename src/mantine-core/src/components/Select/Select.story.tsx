import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Select } from './Select';

const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
];

const stringData = [
  'React',
  'Angular',
  'Svelte',
  'Vue',
];

const largeData = Array(50)
  .fill(0)
  .map((_, index) => ({
    value: `${index}`,
    label: `Item ${index}`,
  }));

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
        style={{ marginTop: 30 }}
      />
      <button type="button" onClick={() => setValue('react')}>
        Fill value
      </button>
    </div>
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
        searchable
        label="Choose your favorite library/framework"
        placeholder="Choose value"
        limit={2}
        data={data}
        style={{ marginTop: 20 }}
        nothingFound="No options"
      />
      <Controlled />
      <Select
        label="Controlled (fixed value)"
        placeholder="Choose value"
        searchable
        value="react"
        data={data}
        style={{ marginTop: 20 }}
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
  .add('Clearable', () => (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <Select
        size="xl"
        searchable
        clearable
        label="Choose your favorite library/framework"
        placeholder="Choose value"
        data={data}
        style={{ marginTop: 20 }}
        nothingFound="No options"
      />

      <Select
        clearable
        label="Choose your favorite library/framework"
        placeholder="Choose value"
        data={data}
        style={{ marginTop: 20 }}
        nothingFound="No options"
      />
      <Controlled clearable />
      <Select
        clearable
        label="Controlled (fixed value)"
        placeholder="Choose value"
        searchable
        value="react"
        data={data}
        style={{ marginTop: 20 }}
      />
    </div>
  )).add('String as data', () => (
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
        label="Controlled (fixed value)"
        placeholder="Choose value"
        searchable
        value="React"
        data={stringData}
        style={{ marginTop: 20 }}
      />
    </div>
  ));
