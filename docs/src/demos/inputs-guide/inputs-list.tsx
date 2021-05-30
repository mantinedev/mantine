import React, { useState } from 'react';
import {
  TextInput,
  PasswordInput,
  NumberInput,
  RadioGroup,
  Radio,
  Select,
  Textarea,
  Checkbox,
  Switch,
  SegmentedControl,
  SegmentedControlProps,
  useMantineTheme,
} from '@mantine/core';
import CodeDemo from '../../components/Demo/CodeDemo/CodeDemo';

const data = [
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'ng' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
];

export function SegmentedControlWrapper(
  props: Omit<SegmentedControlProps, 'value' | 'onChange' | 'data'>
) {
  const [value, onChange] = useState<string>('react');
  return <SegmentedControl {...props} data={data} value={value} onChange={onChange} />;
}

const selectData = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'ng', label: 'Angular', disabled: true },
  { value: 'svelte', label: 'Svelte' },
];

export function WrappedInputsDemo() {
  const theme = useMantineTheme();
  const inputVariant = theme.colorScheme === 'dark' ? 'filled' : 'default';

  return (
    <CodeDemo>
      <div style={{ maxWidth: 400, margin: 'auto' }}>
        <RadioGroup label="RadioGroup">
          <Radio value="react">React</Radio>
          <Radio value="svelte">Svelte</Radio>
          <Radio value="ng" disabled title="Unless you can't, haha">
            Angular
          </Radio>
          <Radio value="vue">Vue</Radio>
        </RadioGroup>

        <TextInput
          style={{ marginTop: 25 }}
          placeholder="This is text input"
          label="TextInput"
          required
          variant={inputVariant}
        />

        <PasswordInput
          style={{ marginTop: 25 }}
          placeholder="This is password input"
          label="PasswordInput"
          required
          variant={inputVariant}
        />

        <NumberInput
          style={{ marginTop: 25 }}
          placeholder="This is number input"
          label="NumberInput"
          required
          variant={inputVariant}
        />

        <Textarea
          style={{ marginTop: 25 }}
          placeholder="This is textarea"
          label="Textarea"
          required
          variant={inputVariant}
        />

        <Textarea
          style={{ marginTop: 25 }}
          autosize
          minRows={2}
          placeholder="This is textarea with autosize option"
          label="Textarea autosize"
          required
          variant={inputVariant}
        />

        <Select
          style={{ marginTop: 25 }}
          data={selectData}
          placeholder="This is select"
          label="Select"
          required
          variant={inputVariant}
        />
      </div>
    </CodeDemo>
  );
}

export function RegularInputsDemo() {
  return (
    <CodeDemo>
      <div style={{ maxWidth: 400, margin: 'auto' }}>
        <Checkbox label="Checkbox" />
        <Switch style={{ marginTop: 15 }} label="Switch" />
        <SegmentedControlWrapper style={{ marginTop: 15 }} />
      </div>
    </CodeDemo>
  );
}
