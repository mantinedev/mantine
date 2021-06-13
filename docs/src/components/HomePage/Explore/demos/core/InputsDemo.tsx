import React, { useState } from 'react';
import { MailIcon } from '@primer/octicons-react';
import {
  TextInput,
  Textarea,
  NumberInput,
  Select,
  Slider,
  InputWrapper,
  RangeSlider,
  Switch,
  Checkbox,
  SegmentedControl,
  SegmentedControlProps,
  RadioGroup,
  Radio,
} from '@mantine/core';

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

export function InputsDemo() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1, paddingRight: 10 }}>
        <TextInput
          label="Text input"
          placeholder="General text input"
          description="Use text input to capture string data from user"
        />

        <Select
          style={{ marginTop: 15 }}
          label="Native select"
          data={[
            { value: 'react', label: 'React' },
            { value: 'vue', label: 'Vue' },
            { value: 'ng', label: 'Angular' },
            { value: 'svelte', label: 'Svelte' },
          ]}
        />

        <TextInput
          style={{ marginTop: 15 }}
          label="Invalid state"
          placeholder="Your email"
          icon={<MailIcon size={12} />}
          error="Please enter a valid email"
        />

        <RadioGroup label="Radio group" style={{ marginTop: 15 }}>
          <Radio value="react">React</Radio>
          <Radio value="svelte">Svelte</Radio>
          <Radio value="vue">Vue</Radio>
        </RadioGroup>

        <Checkbox style={{ marginTop: 20 }} label="Checkbox" defaultChecked />

        <Switch style={{ marginTop: 15 }} label="Switch" defaultChecked />
      </div>

      <div style={{ flex: 1, paddingLeft: 10 }}>
        <NumberInput label="Number input" description="Enter your age" defaultValue={18} />

        <Textarea
          style={{ marginTop: 15 }}
          label="Autosize textarea"
          placeholder="Textarea will grow when you type"
          autosize
          minRows={2}
        />

        <InputWrapper labelElement="div" label="Segmented control" style={{ marginTop: 15 }}>
          <SegmentedControlWrapper fullWidth />
        </InputWrapper>

        <InputWrapper labelElement="div" label="Slider and RangeSlider" style={{ marginTop: 15 }}>
          <Slider defaultValue={40} style={{ marginTop: 10 }} />
          <div style={{ paddingLeft: 4, paddingRight: 4 }}>
            <RangeSlider
              style={{ marginTop: 10 }}
              step={25}
              defaultValue={[25, 75]}
              minRange={25}
              radius={0}
              marks={[
                { value: 0, label: 'xs' },
                { value: 25, label: 'sm' },
                { value: 50, label: 'md' },
                { value: 75, label: 'lg' },
                { value: 100, label: 'xl' },
              ]}
            />
          </div>
        </InputWrapper>
      </div>
    </div>
  );
}
