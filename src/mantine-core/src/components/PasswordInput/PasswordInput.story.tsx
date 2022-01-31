import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MANTINE_SIZES } from '@mantine/styles';
import { PasswordInput, PasswordInputProps } from './PasswordInput';

const sizes = MANTINE_SIZES.map((size) => (
  <PasswordInput placeholder={size} key={size} size={size} style={{ marginTop: 20 }} />
));

function Controlled(props: Partial<PasswordInputProps>) {
  const [value, onChange] = useState('');
  return (
    <div style={{ width: 400, padding: 20 }}>
      <PasswordInput
        value={value}
        onChange={(event) => onChange(event.currentTarget.value)}
        label="Password"
        placeholder="Password"
        {...props}
      />
    </div>
  );
}

storiesOf('@mantine/core/PasswordInput/stories', module)
  .add('Controlled', () => <Controlled />)
  .add('Sizes', () => <div style={{ width: 400, padding: 20 }}>{sizes}</div>)
  .add('Invalid', () => <Controlled error="error" />);
