import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { useDebouncedValue } from './use-debounced-value';

function Example() {
  const [value, setValue] = useState('');
  const [debounced] = useDebouncedValue(value, 200);
  return (
    <div>
      <input value={value} onChange={(event) => setValue(event.currentTarget.value)} />
      <div style={{ marginTop: 20 }}>Debounced value: {debounced}</div>
    </div>
  );
}

storiesOf('Hooks/use-debounced-value', module).add('Usage', () => (
  <div style={{ padding: 40 }}>
    <Example />
  </div>
));
