import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { RocketIcon } from '@modulz/radix-icons';
import { DEFAULT_THEME } from '../../theme';
import { NativeSelect } from './NativeSelect';

const data = [
  { label: 'React', value: 'react' },
  { label: 'Angular', value: 'ng' },
  { label: 'Vue', value: 'vue' },
  { label: 'Svelte', value: 'svelte' },
];

function WrappedSelect(
  props: Omit<React.ComponentProps<typeof NativeSelect>, 'value' | 'onChange' | 'data'>
) {
  const [value, onChange] = useState(null);
  return (
    <NativeSelect
      value={value}
      onChange={(event) => onChange(event.currentTarget.value)}
      data={data}
      {...props}
    />
  );
}

storiesOf('@mantine/core/Select', module)
  .add('General usage', () => (
    <div style={{ maxWidth: 300, padding: 20 }}>
      <WrappedSelect label="Your favorite library" placeholder="Your favorite library" />
    </div>
  ))
  .add('Uncontrolled', () => (
    <div style={{ maxWidth: 300, padding: 20 }}>
      <NativeSelect label="Your favorite library" placeholder="Your favorite library" data={data} />
    </div>
  ))
  .add('Required', () => (
    <div style={{ maxWidth: 300, padding: 20 }}>
      <WrappedSelect required label="Your favorite library" placeholder="Your favorite library" />
    </div>
  ))
  .add('Filled', () => (
    <div style={{ maxWidth: 300, padding: 20 }}>
      <WrappedSelect
        required
        label="Your favorite library"
        placeholder="Your favorite library"
        variant="filled"
      />
    </div>
  ))
  .add('With description', () => (
    <div style={{ maxWidth: 300, padding: 20 }}>
      <WrappedSelect
        description="Please choose wisely, you will not be able to change answer"
        required
        label="Your favorite library"
        placeholder="Your favorite library"
      />
    </div>
  ))
  .add('With error', () => (
    <div style={{ maxWidth: 300, padding: 20 }}>
      <WrappedSelect
        required
        label="Your favorite library"
        placeholder="Your favorite library"
        error="You need to choose value"
      />
    </div>
  ))
  .add('Invalid without error', () => (
    <div style={{ maxWidth: 300, padding: 20 }}>
      <WrappedSelect label="Your favorite library" placeholder="Your favorite library" error />
    </div>
  ))
  .add('Custom radius', () => (
    <div style={{ maxWidth: 300, padding: 20 }}>
      <WrappedSelect
        label="Your favorite library"
        placeholder="Your favorite library"
        radius="xl"
      />
    </div>
  ))
  .add('Disabled', () => (
    <div style={{ maxWidth: 300, padding: 20 }}>
      <NativeSelect
        disabled
        label="Your favorite library"
        placeholder="Your favorite library"
        data={data}
      />
      <NativeSelect
        style={{ marginTop: 20 }}
        disabled
        label="Your favorite library"
        placeholder="Your favorite library"
        value="react"
        data={data}
      />
    </div>
  ))
  .add('With icon', () => (
    <div style={{ maxWidth: 300, padding: 20 }}>
      <WrappedSelect
        icon={<RocketIcon />}
        label="Your favorite library"
        required
        placeholder="Your favorite library"
      />
    </div>
  ))
  .add('Dark theme', () => (
    <div style={{ backgroundColor: DEFAULT_THEME.colors.dark[7], padding: 40, minHeight: '100vh' }}>
      <div style={{ width: 300, padding: 20 }}>
        <NativeSelect
          label="Your favorite library"
          placeholder="Your favorite library"
          data={data}
          themeOverride={{ colorScheme: 'dark' }}
        />
      </div>
    </div>
  ));
