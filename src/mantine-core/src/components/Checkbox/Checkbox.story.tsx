import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Checkbox from './Checkbox';

function CheckboxWrapper(props: Omit<React.ComponentProps<typeof Checkbox>, 'value' | 'onChange'>) {
  const [value, onChange] = useState(false);
  return <Checkbox value={value} onChange={onChange} {...props} />;
}

storiesOf('@mantine/core', module).add('Checkbox', () => (
  <>
    <CheckboxWrapper label="Turn on the notifications" />
    <CheckboxWrapper label="Turn on the notifications" disabled style={{ marginTop: 15 }} />
  </>
));
