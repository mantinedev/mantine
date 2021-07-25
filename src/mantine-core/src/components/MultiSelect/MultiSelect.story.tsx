import React from 'react';
import { storiesOf } from '@storybook/react';
import { MultiSelect } from './MultiSelect';

const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
];

storiesOf('@mantine/core/MultiSelect', module).add('General usage', () => (
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
