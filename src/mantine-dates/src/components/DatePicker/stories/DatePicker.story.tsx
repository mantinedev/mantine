import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import {
  MANTINE_SIZES,
  Modal,
  Button,
  MantineProvider,
  TextInput,
  Popover,
  Group,
} from '@mantine/core';
import { DatePicker } from '../DatePicker';

function WithinPopover() {
  const [opened, setOpened] = useState(false);
  return (
    <Group position="center" mt="xl">
      <Popover
        opened={opened}
        onClose={() => setOpened(false)}
        target={<Button onClick={() => setOpened((o) => !o)}>Toggle popover</Button>}
        position="bottom"
        placement="start"
        withArrow
        withCloseButton
      >
        <DatePicker placeholder="Pick date" label="Event date" required />
      </Popover>
    </Group>
  );
}

function WrappedModal(
  props: Omit<React.ComponentPropsWithoutRef<typeof Modal>, 'opened' | 'onClose'>
) {
  const [opened, setOpened] = useState(true);

  return (
    <div style={{ padding: 50 }}>
      <Button onClick={() => setOpened(true)}>Open Modal</Button>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Date picker in modal"
        {...props}
      />
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

function ControlledFreeInput() {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <DatePicker
        mt={20}
        mb={10}
        value={value}
        onChange={onChange}
        placeholder="Controlled with free input"
        label="Date picker"
        allowFreeInput
      />
      <button type="button" onClick={() => onChange(new Date())}>
        Set date
      </button>
    </>
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

storiesOf('@mantine/dates/DatePicker/stories', module)
  .add('Sizes', () => <div style={{ maxWidth: 400, padding: 40 }}>{sizes}</div>)
  .add('Within Modal', () => (
    <WrappedModal>
      <DatePicker placeholder="Pick date" label="Date picker" zIndex={1000} />
    </WrappedModal>
  ))
  .add('Within Popover', () => <WithinPopover />)
  .add('Dropdown type modal', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePicker dropdownType="modal" placeholder="Pick date" label="Date picker" />
    </div>
  ))
  .add('Amount of months', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePicker amountOfMonths={2} label="Two months" />
      <DatePicker amountOfMonths={3} label="Three months" />
    </div>
  ))
  .add('Controlled', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Controlled />
    </div>
  ))
  .add('Controlled with free input', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Controlled />
    </div>
  ))
  .add('Restricted input focus', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TextInput placeholder="Focus me when dropdown is opened" />
      <DatePicker placeholder="Pick date" label="Date picker" mt="xl" />
    </div>
  ))
  .add('Free input focus', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePicker placeholder="Pick date" label="Date picker" allowFreeInput />

      <DatePicker
        placeholder="Pick date"
        label="Date picker"
        allowFreeInput
        withSelect
        mt={20}
        mb={40}
      />

      <button type="button">Focus test</button>

      <ControlledFreeInput />
    </div>
  ))
  .add('Date format on MantineProvider', () => (
    <MantineProvider theme={{ dateFormat: 'MM YYYY DD' }}>
      <DatePicker label="One month" />
    </MantineProvider>
  ));
