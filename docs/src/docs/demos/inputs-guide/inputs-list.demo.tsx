import React from 'react';
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
  useMantineTheme,
} from '@mantine/core';
import { SegmentedControlWrapper } from '../core/SegmentedControl/segmented-control-wrapper';
import CodeDemo from '../../../components/CodeDemo/CodeDemo';

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
  const theme = useMantineTheme();

  return (
    <CodeDemo demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white}>
      <div style={{ maxWidth: 400, margin: 'auto' }}>
        <Checkbox label="Checkbox" />
        <Switch style={{ marginTop: 15 }} label="Switch" />
        <SegmentedControlWrapper style={{ marginTop: 15 }} />
      </div>
    </CodeDemo>
  );
}
