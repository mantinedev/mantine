import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME, MANTINE_SIZES } from '@mantine/styles';
import { Switch, SwitchProps } from './Switch';

function SwitchWrapper(props: Omit<SwitchProps, 'value' | 'onChange'>) {
  const [value, onChange] = useState(true);
  return (
    <Switch
      checked={value}
      onChange={(event) => onChange(event.currentTarget.checked)}
      {...props}
    />
  );
}

const sizes = MANTINE_SIZES.map((size) => (
  <Switch color="blue" key={size} size={size} label={`Switch ${size}`} style={{ marginTop: 15 }} />
));

const getThemes = (props?: Partial<SwitchProps>) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Switch key={color} color={color} {...props} label={color} style={{ marginTop: 15 }} />
  ));

storiesOf('@mantine/core/Switch/stories', module)
  .add('Themes', () => <div style={{ padding: 15 }}>{getThemes({ checked: true })}</div>)
  .add('Sizes', () => <div style={{ padding: 15 }}>{sizes}</div>)
  .add('Controlled', () => <SwitchWrapper label="Controlled" style={{ padding: 15 }} />);
