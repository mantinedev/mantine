/* eslint-disable no-console */
import { useRef, useState } from 'react';
import { useForm } from '@mantine/form';
import { Button } from '../Button';
import { Group } from '../Group';
import { TextInput } from '../TextInput';
import { NumberInput, NumberInputHandlers } from './NumberInput';

export default { title: 'NumberInput' };

export function Usage() {
  const [value, setValue] = useState<number | string>('133');
  return (
    <div style={{ padding: 40 }}>
      <NumberInput
        value={value}
        label="Number input"
        placeholder="Number input"
        onChange={setValue}
        // onValueChange={console.log}
      />
      {typeof value === 'number' ? `${value} number` : `${value === '' ? 'empty' : value} string`}
      <Button onClick={() => setValue(245.32)}>Set value to float</Button>
    </div>
  );
}

export function LargeDecimalPoints() {
  const [val, setVal] = useState<string | number>(2.99999999999999);

  return (
    <>
      <NumberInput
        label="Input label"
        description="Input description"
        placeholder="Input placeholder"
        value={val}
        onChange={setVal}
      />
      <div>
        state: {val} <br />
        typeof State: {typeof val}
      </div>
    </>
  );
}

export function AllowLeadingZeros() {
  const [value, setValue] = useState<number | string>('');
  return (
    <div style={{ padding: 40 }}>
      <NumberInput
        value={value}
        label="Number input"
        placeholder="Number input"
        onChange={setValue}
        allowLeadingZeros
      />
      {typeof value === 'number' ? `${value} number` : `${value === '' ? 'empty' : value} string`}
      <Button onClick={() => setValue(245.32)}>Set value to float</Button>
    </div>
  );
}

export function MinWithStartValue() {
  return (
    <div style={{ padding: 40 }}>
      <NumberInput label="with min" min={-1000} startValue={20} />
    </div>
  );
}

export function OnChangeValue() {
  const [value, setValue] = useState<number | string>(345);
  return (
    <div style={{ padding: 40 }}>
      <NumberInput
        value={value}
        label="Number input"
        placeholder="Number input"
        suffix="suf"
        prefix="pref"
        thousandSeparator
        onChange={setValue}
      />
      {typeof value === 'number' ? `${value} number` : `${value === '' ? 'empty' : value} string`}
      <Button onClick={() => setValue(245.32)}>Set value to float</Button>
    </div>
  );
}

export function RightSectionSizes() {
  return (
    <div
      style={{
        maxWidth: 340,
        margin: 'auto',
        padding: 40,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
      }}
    >
      <NumberInput placeholder="xs" size="xs" styles={{ section: { background: 'transparent' } }} />
      <NumberInput placeholder="sm" size="sm" styles={{ section: { background: 'transparent' } }} />
      <NumberInput placeholder="md" size="md" styles={{ section: { background: 'transparent' } }} />
      <NumberInput placeholder="lg" size="lg" styles={{ section: { background: 'transparent' } }} />
      <NumberInput placeholder="xl" size="xl" styles={{ section: { background: 'transparent' } }} />
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
        onChange={(val) => {
          setValue(val);
        }}
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

export function FormValidateOnBlur() {
  const form = useForm({
    validateInputOnBlur: true,
    validate: {
      age: (value) => {
        if (typeof value === 'string' && value === '') {
          return 'Required';
        }
        if (typeof value === 'number' && value < 18) {
          return 'Error';
        }
        return null;
      },
      name: (value) => (value.length < 2 ? 'Error' : null),
    },
    initialValues: {
      name: '',
      age: '' as string | number,
    },
  });

  return (
    <div style={{ padding: 40, maxWidth: 340 }}>
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <NumberInput label="Age" required {...form.getInputProps('age')} />
        <TextInput label="Name" {...form.getInputProps('name')} />
        <Group justify="flex-end" mt="xl">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </div>
  );
}

export function ExternalOnChange() {
  const [value, setValue] = useState(0);
  return (
    <div>
      <NumberInput
        disabled={value === 0}
        value={value}
        onChange={(v) => {
          console.log('onChange', v);
          setValue(35);
        }}
        suffix="%"
      />
      <Group>
        <Button onClick={() => setValue(0)}>Set value to 0</Button>
        <Button onClick={() => setValue(1)}>Set value to 1</Button>
      </Group>
    </div>
  );
}
