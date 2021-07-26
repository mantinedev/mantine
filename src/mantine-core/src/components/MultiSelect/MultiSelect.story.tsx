import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MANTINE_SIZES, DEFAULT_THEME, MantineProvider } from '../../theme';
import { Group } from '../Group/Group';
import { TextInput } from '../TextInput/TextInput';
import { MultiSelect } from './MultiSelect';
import { CountriesSelect } from './demos/countries';

const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
  { value: 'riot', label: 'Riot' },
  { value: 'next', label: 'Next.js' },
  { value: 'blitz', label: 'Blitz.js' },
];

const stringData = ['React', 'Angular', 'Svelte', 'Vue'];

const largeData = Array(1000)
  .fill(0)
  .map((_, index) => ({
    value: `${index}`,
    label: `Item ${index}`,
  }));

function Controlled() {
  const [value, setValue] = useState([]);
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <MultiSelect
        label="Multi select"
        data={data}
        value={value}
        onChange={setValue}
        placeholder="Select items"
        nothingFound="Nothing found"
        searchable
      />
      <button type="button" onClick={() => setValue(['react', 'ng'])}>
        Set value
      </button>
    </div>
  );
}

const sizes = MANTINE_SIZES.map((size) => (
  <Group grow key={size} style={{ marginTop: 30 }} direction="column">
    <MultiSelect
      size={size}
      label="Multi select"
      data={data}
      defaultValue={['react', 'ng']}
      placeholder="Select items"
      nothingFound="Nothing found"
    />
    <TextInput label="Text input" placeholder="Text input" size={size} />
  </Group>
));

const variants = (['default', 'filled', 'unstyled', 'headless'] as const).map((variant) => (
  <Group grow key={variant} style={{ marginTop: 30 }} direction="column">
    <MultiSelect
      variant={variant}
      label="Multi select"
      data={data}
      placeholder="Select items"
      nothingFound="Nothing found"
    />
    <TextInput label="Text input" placeholder="Text input" variant={variant} />
  </Group>
));

storiesOf('@mantine/core/MultiSelect', module)
  .add('Alignment', () => (
    <>
      <Group style={{ padding: 40, paddingBottom: 0 }} grow align="flex-start">
        <MultiSelect
          label="Multi select"
          data={data}
          defaultValue={['react', 'ng']}
          placeholder="Select items"
          nothingFound="Nothing found"
        />
        <TextInput label="Text input" placeholder="Select items" />
      </Group>
      <Group style={{ padding: 40, paddingTop: 0 }} grow align="flex-start">
        <TextInput label="Text input" placeholder="Select items" />
        <MultiSelect
          label="Multi select"
          data={data}
          defaultValue={['react', 'ng']}
          placeholder="Select items"
          nothingFound="Nothing found"
        />
      </Group>
    </>
  ))
  .add('String data', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <MultiSelect
        label="Multi select"
        data={stringData}
        placeholder="Select items"
        nothingFound="Nothing found"
        searchable
      />
    </div>
  ))
  .add('Large data', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <MultiSelect
        label="Multi select"
        data={largeData}
        limit={20}
        placeholder="Select items"
        nothingFound="Nothing found"
        searchable
      />
    </div>
  ))
  .add('Controlled', () => <Controlled />)
  .add('Searchable', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <MultiSelect
        label="Multi select"
        data={data}
        defaultValue={['react', 'ng']}
        placeholder="Select items"
        nothingFound="Nothing found"
        searchable
      />
    </div>
  ))
  .add('Clearable', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <MultiSelect
        label="Multi select"
        data={data}
        defaultValue={['react', 'ng']}
        placeholder="Select items"
        nothingFound="Nothing found"
        searchable
        clearable
      />
      <MultiSelect
        label="Multi select"
        data={data}
        defaultValue={['react', 'ng']}
        placeholder="Select items"
        nothingFound="Nothing found"
        clearable
      />
    </div>
  ))
  .add('Sizes', () => <div style={{ padding: 40 }}>{sizes}</div>)
  .add('Variants', () => <div style={{ padding: 40 }}>{variants}</div>)
  .add('Countries select', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <CountriesSelect />
    </div>
  ))
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 50 }}>
      <MantineProvider theme={{ colorScheme: 'dark' }}>
        <CountriesSelect />

        <MultiSelect
          style={{ marginTop: 30 }}
          label="Multi select"
          data={data}
          defaultValue={['react', 'ng']}
          placeholder="Select items"
          nothingFound="Nothing found"
          searchable
          clearable
        />
      </MantineProvider>
    </div>
  ));
