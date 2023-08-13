import React, { useState } from 'react';
import { useForm } from '@mantine/form';
import { Group } from '../Group';
import { Button } from '../Button';
import { NumberInput } from './NumberInput';

export default { title: 'NumberInput' };

export function Usage() {
  const [value, setValue] = useState<number | '' | undefined>(0);
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <NumberInput
        value={value}
        onChange={setValue}
        precision={2}
        decimalSeparator=","
        thousandsSeparator="."
        mb="md"
        min={10}
        defaultValue={12}
        max={15}
      />
      <Group>
        <Button onClick={() => setValue('')}>Set empty value</Button>
        <Button onClick={() => setValue(10)}>Set 10</Button>
        <Button onClick={() => setValue(undefined)}>Reset to initialValue</Button>
      </Group>
    </div>
  );
}

export function FixedValue() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <NumberInput value={4} />
    </div>
  );
}

export function WithUseFormHook() {
  const mantineForm = useForm({
    initialValues: {
      someNumber: 0,
    },
    validateInputOnBlur: true,
    validate: {
      someNumber: (val) => (!val ? 'please enter a number greater than zero' : null),
    },
  });
  return <NumberInput min={0} max={5} step={1} {...mantineForm.getInputProps('someNumber')} />;
}
