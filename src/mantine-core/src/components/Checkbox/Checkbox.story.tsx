import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MANTINE_COLORS, MantineProvider } from '@mantine/styles';
import { Checkbox, CheckboxProps } from './Checkbox';
import { CheckboxGroup } from './CheckboxGroup/CheckboxGroup';

function Controlled(props: Partial<CheckboxProps>) {
  const [value, onChange] = useState(true);
  return (
    <Checkbox
      checked={value}
      onChange={(event) => onChange(event.currentTarget.checked)}
      {...props}
    />
  );
}

function CheckboxGroupControlled() {
  const [value, setValue] = useState(['react']);

  return (
    <CheckboxGroup
      label="Checkboxes group"
      description="Pick libraries that you like"
      value={value}
      onChange={setValue}
    >
      <Checkbox value="react" label="React" />
      <Checkbox value="ng" label="Angular" />
      <Checkbox value="sv" label="Svelte" />
    </CheckboxGroup>
  );
}

const getThemes = (props?: Partial<CheckboxProps>) =>
  MANTINE_COLORS.map((color) => (
    <Checkbox key={color} color={color} {...props} label={color} mt={15} />
  ));

storiesOf('@mantine/core/Checkbox/stories', module)
  .add('Colors', () => <div style={{ padding: 15 }}>{getThemes({ checked: true })}</div>)
  .add('Controlled', () => <Controlled label="Controlled" style={{ padding: 15 }} />)
  .add('CheckboxGroup: uncontrolled', () => (
    <div style={{ padding: 40 }}>
      <CheckboxGroup
        label="Checkboxes group"
        description="Pick libraries that you like"
        defaultValue={['react']}
      >
        <Checkbox value="react" label="React" />
        <Checkbox value="ng" label="Angular" />
        <Checkbox value="sv" label="Svelte" />
      </CheckboxGroup>
    </div>
  ))
  .add('CheckboxGroup: controlled', () => (
    <div style={{ padding: 40 }}>
      <CheckboxGroupControlled />
    </div>
  ))
  .add('Default props on MantineProvider', () => (
    <MantineProvider defaultProps={{ Checkbox: { size: 'xl', color: 'red' } }}>
      <Controlled label="Controlled" style={{ padding: 15 }} />
    </MantineProvider>
  ))
  .add('Default radius on MantineProvider', () => (
    <MantineProvider theme={{ defaultRadius: 0 }}>
      <Controlled label="Controlled" style={{ padding: 15 }} />
    </MantineProvider>
  ));
