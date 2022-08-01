import React, { useRef } from 'react';
import { storiesOf } from '@storybook/react';
import { useDebouncedState } from './use-debounced-state';

function Example() {
  const [value, setValue] = useDebouncedState('', 200);
  const counter = useRef(0);

  counter.current += 1;
  return (
    <div>
      <input defaultValue={value} onChange={(event) => setValue(event.target.value)} />
      <div style={{ marginTop: 20 }}>Debounced value: {value}</div>
      <div style={{ marginTop: 20 }}>Number of renders: {counter.current}</div>
    </div>
  );
}

storiesOf('Hooks/use-debounced-state', module).add('Usage', () => (
  <div style={{ padding: 40 }}>
    <Example />
  </div>
));
