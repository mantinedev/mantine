import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { RocketIcon } from '@modulz/radix-icons';
import { MantineProvider } from '@mantine/theme';
import { Select } from './Select';

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
      <Select
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        data={data}
        {...props}
      />
    </div>
  );
}

storiesOf('@mantine/core', module).add('Select', () => (
  <MantineProvider>
    <Select label="Uncontrolled" data={data} placeholder="Your favorite library" />
    <WrappedSelect
      icon={<RocketIcon />}
      label="Your favorite library"
      required
      placeholder="Your favorite library"
    />
    <WrappedSelect label="Your favorite library" placeholder="Your favorite library" />
    <WrappedSelect label="Your favorite library" required placeholder="Your favorite library" />
    <WrappedSelect
      radius="xl"
      label="Your favorite library"
      required
      placeholder="Your favorite library"
      disabled
    />
    <WrappedSelect
      label="Your favorite library"
      placeholder="Your favorite library"
      error="Your favorite library cannot be Angular"
    />
  </MantineProvider>
));
