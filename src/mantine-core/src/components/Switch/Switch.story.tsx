import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME, MantineSize, MANTINE_SIZES } from '@mantine/styles';
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

const switchWithLabels = [
  { on: 'D', off: 'L', size: 'md' },
  { on: 'On', off: 'Off', size: 'lg' },
  { on: 'Dark', off: 'Light', size: 'xl' },
].map((label) => (
  <Switch
    color="blue"
    label={`On: ${label.on} Off: ${label.off}`}
    key={label.on}
    size={label.size as MantineSize}
    onLabel={label.on}
    offLabel={label.off}
    style={{ marginTop: 15 }}
  />
));

storiesOf('Switch', module)
  .add('Themes', () => <div style={{ padding: 15 }}>{getThemes({ checked: true })}</div>)
  .add('Sizes', () => <div style={{ padding: 15 }}>{sizes}</div>)
  .add('With on off labels', () => <div style={{ padding: 15 }}>{switchWithLabels}</div>)
  .add('Controlled', () => <SwitchWrapper label="Controlled" style={{ padding: 15 }} />);
