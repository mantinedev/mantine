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
  <div style={{ padding: 40 }}>
    <MultiSelect data={data} defaultValue={['react', 'ng']}>
      Hello
    </MultiSelect>
  </div>
));
