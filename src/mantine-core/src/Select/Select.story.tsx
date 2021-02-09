import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/theme';
import Select from './Select';

const data = [
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'ng' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
];

function WrappedSelect(
  props: Omit<React.ComponentProps<typeof Select>, 'value' | 'onChange' | 'data'>
) {
  const [value, onChange] = useState('');
  return (
    <div style={{ maxWidth: 300, marginTop: 20 }}>
      <Select value={value} onChange={onChange} data={data} {...props} />
    </div>
  );
}

storiesOf('@mantine/core', module).add('Select', () => (
  <MantineProvider>
    <WrappedSelect label="Your favourite library" required placeholder="Your favourite library" />
    <WrappedSelect label="Your favourite library" placeholder="Your favourite library" />
    <WrappedSelect label="Your favourite library" required placeholder="Your favourite library" />
    <WrappedSelect
      radius="xl"
      label="Your favourite library"
      required
      placeholder="Your favourite library"
      disabled
    />
    <WrappedSelect
      label="Your favourite library"
      placeholder="Your favourite library"
      error="Your favourite library cannot be Angular"
    />
  </MantineProvider>
));
