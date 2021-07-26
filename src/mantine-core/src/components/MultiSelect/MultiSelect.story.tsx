import React from 'react';
import { storiesOf } from '@storybook/react';
import { Group } from '../Group/Group';
import { TextInput } from '../TextInput/TextInput';
import { MultiSelect } from './MultiSelect';

const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
  { value: 'riot', label: 'Riot' },
  { value: 'next', label: 'Next.js' },
  { value: 'blitz', label: 'Blitz.js' },
];

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
  ));
