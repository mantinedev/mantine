import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MANTINE_SIZES, Group, Modal, Button } from '@mantine/core';
import dayjs from 'dayjs';

import {MonthPicker} from './MonthPicker';
function WrappedModal(props: Omit<React.ComponentProps<typeof Modal>, 'opened' | 'onClose'>) {
  const [opened, setOpened] = useState(true);

  return (
    <div style={{ padding: 50 }}>
      <Button onClick={() => setOpened(true)}>Open Modal</Button>
      <Modal opened={opened} onClose={() => setOpened(false)} {...props} />
    </div>
  );
}

function Controlled() {
  const [value, onChange] = useState(new Date());

  return (
    <MonthPicker
      value={value}
      onChange={onChange}
      placeholder="With month and year"
      label="Month picker"
      withSelect
    />
  );
}

storiesOf('@mantine/dates/MonthPicker', module)
  .add('Controlled', () => (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <Controlled />
    </div>
  ));
