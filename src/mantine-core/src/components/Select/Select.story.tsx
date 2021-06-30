import React from 'react';
import { storiesOf } from '@storybook/react';
import { Select } from './Select';

const data = [
  { value: 'React', label: 'React' },
  { value: 'Angular', label: 'Angular' },
  { value: 'Svelte', label: 'Svelte' },
  { value: 'Vue', label: 'Vue' },
];

storiesOf('@mantine/core/Select', module).add('General usage', () => (
  <div style={{ padding: 40, maxWidth: 300 }}>
    <Select label="Choose your favorite library/framework" placeholder="Choose value" data={data} />
  </div>
));
