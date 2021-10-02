import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME } from '@mantine/styles';
import { Checkbox } from './Checkbox';
import { DarkStory } from '../../../demos';

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

function States() {
  return (
    <div style={{ padding: 40 }}>
      <Checkbox label="default" />
      <Checkbox style={{ marginTop: 15 }} label="checked" checked />
      <Checkbox style={{ marginTop: 15 }} label="indeterminate" indeterminate />
      <Checkbox style={{ marginTop: 15 }} label="indeterminate disabled" indeterminate disabled />
      <Checkbox style={{ marginTop: 15 }} label="checked disabled" checked disabled />
    </div>
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
  .add('States', () => <States />)
  .add('Dark theme', () => (
    <DarkStory>
      <States />
    </DarkStory>
  ));
