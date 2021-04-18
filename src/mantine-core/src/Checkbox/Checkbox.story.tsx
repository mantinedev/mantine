import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/theme';
import { Checkbox } from './Checkbox';

function CheckboxWrapper(props: Omit<React.ComponentProps<typeof Checkbox>, 'value' | 'onChange'>) {
  const [value, onChange] = useState(true);
  return (
    <Checkbox
      checked={value}
      onChange={(event) => onChange(event.currentTarget.checked)}
      {...props}
    />
  );
}

const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
  <Checkbox
    color="blue"
    key={size}
    size={size}
    label={`Checkbox ${size}`}
    style={{ marginTop: 15 }}
  />
));

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Checkbox key={color} color={color} {...props} label={color} style={{ marginTop: 15 }} />
  ));

storiesOf('@mantine/core/Checkbox', module)
  .add('Themes', () => <div style={{ padding: 15 }}>{getThemes({ checked: true })}</div>)
  .add('Sizes', () => <div style={{ padding: 15 }}>{sizes}</div>)
  .add('Controlled', () => <CheckboxWrapper label="Controlled" style={{ padding: 15 }} />)
  .add('Intermediate', () => <Checkbox intermediate label="Intermediate" style={{ padding: 15 }} />)
  .add('Disabled', () => (
    <div style={{ padding: 15 }}>
      <Checkbox label="Disabled" disabled />
      <Checkbox checked label="Disabled checked" disabled style={{ marginTop: 15 }} />
    </div>
  ))
  .add('Dark theme', () => (
    <div style={{ background: DEFAULT_THEME.colors.dark[7], minHeight: '100vh', padding: 50 }}>
      {getThemes({ themeOverride: { colorScheme: 'dark' }, checked: true })}
      <Checkbox
        themeOverride={{ colorScheme: 'dark' }}
        label="Checkbox"
        style={{ marginTop: 15 }}
      />
      <Checkbox
        themeOverride={{ colorScheme: 'dark' }}
        label="Disabled"
        disabled
        style={{ marginTop: 15 }}
      />
      <Checkbox
        themeOverride={{ colorScheme: 'dark' }}
        checked
        label="Disabled checked"
        disabled
        style={{ marginTop: 15 }}
      />
    </div>
  ));
