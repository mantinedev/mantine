import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Select } from './Select';

const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
];

function Controlled() {
  const [value, setValue] = useState(null);

  return (
    <Select
      label="Controlled"
      placeholder="Controlled"
      value={value}
      onChange={setValue}
      data={data}
      style={{ marginTop: 30 }}
    />
  );
}

storiesOf('@mantine/core/Select', module).add('General usage', () => (
  <div style={{ padding: 40, maxWidth: 300 }}>
    <Select label="Choose your favorite library/framework" placeholder="Choose value" data={data} />
    <Controlled />
  </div>
));
