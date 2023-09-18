import React, { useState, useRef } from 'react';
import { NumberInput, NumberInputHandlers } from './NumberInput';
import { Button } from '../Button';

export default { title: 'NumberInput' };

export function Usage() {
  const [value, setValue] = useState<number | string>(345);
  return (
    <div style={{ padding: 40 }}>
      <NumberInput
        value={value}
        label="Number input"
        placeholder="Number input"
        onChange={setValue}
      />
      {typeof value === 'number' ? `${value} number` : `${value === '' ? 'empty' : value} string`}
      <Button onClick={() => setValue(245.32)}>Set value to float</Button>
    </div>
  );
}

export function Unstyled() {
  const [value, setValue] = useState<number | string>(345);
  return (
    <div style={{ padding: 40 }}>
      <NumberInput
        value={value}
        label="Number input"
        placeholder="Number input"
        onChange={setValue}
        unstyled
      />
      {typeof value === 'number' ? `${value} number` : `${value === '' ? 'empty' : value} string`}
      <Button onClick={() => setValue(245.32)}>Set value to float</Button>
    </div>
  );
}

export function ReadOnly() {
  const [value, setValue] = useState<number | string>(345);
  return (
    <div style={{ padding: 40 }}>
      <NumberInput
        value={value}
        label="Number input"
        placeholder="Number input"
        readOnly
        onChange={setValue}
      />
    </div>
  );
}

export function MinMax() {
  const [value, setValue] = useState<number | string>(15);
  return (
    <div style={{ padding: 40 }}>
      <NumberInput
        value={value}
        label="Number input"
        placeholder="Number input"
        onChange={setValue}
        min={0}
        max={100}
      />
      {typeof value === 'number' ? `${value} number` : `${value === '' ? 'empty' : value} string`}
      <Button onClick={() => setValue(245.32)}>Set value to float</Button>
    </div>
  );
}

export function NegativeMin() {
  const [value, setValue] = useState<number | string>(0);
  return (
    <div style={{ padding: 40 }}>
      <NumberInput
        value={value}
        label="Number input"
        placeholder="Number input"
        onChange={setValue}
        min={-10}
        max={-5}
      />
      {typeof value === 'number' ? `${value} number` : `${value === '' ? 'empty' : value} string`}
      <Button onClick={() => setValue(245.32)}>Set value to float</Button>
    </div>
  );
}

export function NoDecimals() {
  const [value, setValue] = useState<number | string>(15);
  return (
    <div style={{ padding: 40 }}>
      <NumberInput
        value={value}
        label="Number input"
        placeholder="Number input"
        onChange={setValue}
        allowDecimal={false}
      />
      {typeof value === 'number' ? `${value} number` : `${value === '' ? 'empty' : value} string`}
      <Button onClick={() => setValue(245.32)}>Set value to float</Button>
    </div>
  );
}

export function Handlers() {
  const [value, setValue] = useState<number | string>(15);
  const handlersRef = useRef<NumberInputHandlers>(null);
  return (
    <div style={{ padding: 40 }}>
      <NumberInput
        value={value}
        label="Number input"
        placeholder="Number input"
        onChange={setValue}
        allowDecimal={false}
        handlersRef={handlersRef}
        min={10}
        max={20}
      />
      {typeof value === 'number' ? `${value} number` : `${value === '' ? 'empty' : value} string`}
      <Button onClick={() => handlersRef.current?.increment()}>Increment</Button>
      <Button onClick={() => handlersRef.current?.decrement()}>Decrement</Button>
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40 }}>
      <NumberInput disabled value={4000} label="Disabled with value" rightSection="$$" />
      <NumberInput disabled placeholder="Test value" label="Disabled with placeholder" />
    </div>
  );
}
