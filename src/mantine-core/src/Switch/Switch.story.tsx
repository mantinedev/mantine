import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME, MantineProvider } from '@mantine/theme';
import { Switch } from './Switch';

function SwitchWrapper(props: Omit<React.ComponentProps<typeof Switch>, 'value' | 'onChange'>) {
  const [value, onChange] = useState(true);
  return (
    <Switch
      checked={value}
      onChange={(event) => onChange(event.currentTarget.checked)}
      {...props}
    />
  );
}

const sizes = (['xs', 'sm', 'md', 'lg', 'xl'] as any[]).map((size) => (
  <Switch color="blue" key={size} size={size} label={`Switch ${size}`} style={{ marginTop: 15 }} />
));

const getThemes = (props?: any) =>
  Object.keys(DEFAULT_THEME.colors).map((color) => (
    <Switch key={color} color={color} {...props} label={color} style={{ marginTop: 15 }} />
  ));

storiesOf('@mantine/core/Switch', module)
  .add('Themes', () => <div style={{ padding: 15 }}>{getThemes({ checked: true })}</div>)
  .add('Sizes', () => <div style={{ padding: 15 }}>{sizes}</div>)
  .add('Controlled', () => <SwitchWrapper label="Controlled" style={{ padding: 15 }} />)
  .add('Autofocus', () => <SwitchWrapper label="Autofocus" style={{ padding: 15 }} autoFocus />)
  .add('Disabled', () => (
    <div style={{ padding: 15 }}>
      <Switch label="Disabled" disabled />
      <Switch checked label="Disabled checked" disabled style={{ marginTop: 15 }} />
    </div>
  ))
  .add('Dark theme', () => (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <div
        style={{ backgroundColor: DEFAULT_THEME.colors.dark[7], padding: 40, minHeight: '100vh' }}
      >
        {getThemes({ checked: true })}
        <Switch label="Disabled" disabled style={{ marginTop: 15 }} />
        <Switch checked label="Disabled checked" disabled style={{ marginTop: 15 }} />
        <SwitchWrapper label="Controlled" style={{ marginTop: 15 }} />
      </div>
    </MantineProvider>
  ));
