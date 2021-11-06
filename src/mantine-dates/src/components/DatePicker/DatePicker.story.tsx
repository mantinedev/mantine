import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { MANTINE_SIZES, Group, Modal, Button } from '@mantine/core';
import dayjs from 'dayjs';
import { DatePicker } from './DatePicker';

function WrappedModal(
  props: Omit<React.ComponentPropsWithoutRef<typeof Modal>, 'opened' | 'onClose'>
) {
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
    <DatePicker
      value={value}
      onChange={onChange}
      placeholder="With month and year"
      label="Date picker"
      withSelect
    />
  );
}

const sizes = MANTINE_SIZES.map((size) => (
  <DatePicker
    placeholder={`${size} placeholder`}
    size={size}
    key={size}
    style={{ marginTop: 30 }}
    defaultValue={new Date()}
    withSelect
    label="This is label"
    description="This is description"
  />
));

storiesOf('@mantine/dates/DatePicker', module)
  .add('Uncontrolled', () => (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <DatePicker placeholder="Pick date" label="Date picker" />
      <DatePicker
        placeholder="Pick date"
        label="First day of week - sunday"
        style={{ marginTop: 20 }}
      />
      <DatePicker
        placeholder="With month and year"
        label="Date picker"
        withSelect
        style={{ marginTop: 20 }}
      />
      <DatePicker
        placeholder="Initial month"
        label="Initial month"
        withSelect
        initialMonth={dayjs(new Date()).subtract(1, 'year').toDate()}
        style={{ marginTop: 20 }}
      />
    </div>
  ))
  .add('Sizes', () => <div style={{ maxWidth: 300, padding: 40 }}>{sizes}</div>)
  .add('Placeholder overflow', () => (
    <div style={{ maxWidth: 200, padding: 30 }}>
      <DatePicker placeholder="Placeholder so large it overflows" />
    </div>
  ))
  .add('Within Group', () => (
    <div style={{ padding: 40 }}>
      <Group grow>
        <DatePicker label="First" />
        <DatePicker label="Second" />
      </Group>
    </div>
  ))
  .add('Within Modal', () => (
    <WrappedModal>
      <DatePicker placeholder="Pick date" label="Date picker" zIndex={1000} />
    </WrappedModal>
  ))
  .add('In modal', () => (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <DatePicker dropdownType="modal" placeholder="Pick date" label="Date picker" />
    </div>
  ))
  .add('Controlled', () => (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <Controlled />
    </div>
  ));
