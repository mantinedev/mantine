import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { useUncontrolled } from './use-uncontrolled';
import { useId } from '../use-id/use-id';

interface CustomInputProps {
  label: string;
  value?: string;
  defaultValue?: string;
  onChange?: (nextValue: string) => void;
}

function CustomInput({ label, value, defaultValue, onChange }: CustomInputProps) {
  const id = useId();
  const [_value, handleChange] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange,
    rule: (val) => typeof val === 'string',
  });

  return (
    <div style={{ padding: '1rem' }}>
      <label htmlFor={id}>{label}</label>
      <br />
      <input id={id} type="text" value={_value} onChange={(e) => handleChange(e.target.value)} />
    </div>
  );
}

function Example() {
  const [controlledValue, setControlledValue] = useState('controlled');

  return (
    <div style={{ padding: 20 }}>
      <CustomInput label="Uncontrolled" defaultValue="uncontrolled" />
      <CustomInput label="Controlled" value={controlledValue} onChange={setControlledValue} />
      <CustomInput label="Controlled (fixed value)" value="fixed" onChange={setControlledValue} />
    </div>
  );
}

storiesOf('Hooks/use-uncontrolled', module).add('Usage', () => <Example />);
