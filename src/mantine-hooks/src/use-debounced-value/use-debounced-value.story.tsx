import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { TextInput, Text } from '@mantine/core';
import { useDebouncedValue } from './use-debounced-value';

function Example() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 200);
  return (
    <div>
      <TextInput value={value} onChange={(event) => setValue(event.currentTarget.value)} />
      <Text style={{ marginTop: 20 }}>Debounced value: {debounced}</Text>
    </div>
  );
}

storiesOf('@mantine/hooks/use-debounced-value', module).add('Usage', () => (
  <div style={{ padding: 40 }}>
    <Example />
  </div>
));
