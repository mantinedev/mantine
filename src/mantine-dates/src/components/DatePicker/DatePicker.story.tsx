/* eslint-disable no-console */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { useDisclosure } from '@mantine/hooks';
import { MANTINE_SIZES, MantineProvider, TextInput, Modal, Button } from '@mantine/core';
import { WithinOverlays, SubmitForm } from '@mantine/storybook';
import { DatePicker } from './DatePicker';

function Controlled() {
  const [value, onChange] = useState(new Date(2021, 7, 5));

  return (
    <DatePicker
      value={value}
      onChange={(val) => {
        console.log(val);
        onChange(val);
      }}
      placeholder="With month and year"
      label="Date picker"
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
        onChange={(val) => {
          console.log(val);
          onChange(val);
        }}
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

function WithinModal() {
  const [opened, handlers] = useDisclosure(false);
  return (
    <>
      <Button onClick={handlers.open}>Open Modal</Button>
      <Modal opened={opened} onClose={handlers.close} title="Modal with DatePicker">
        <DatePicker mt="md" id="dateOfBirth" label="Date Of Birth" placeholder="Date Of Birth" />
      </Modal>
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
    label="This is label"
    description="This is description"
  />
));

storiesOf('DatePicker', module)
  .add('Sizes', () => <div style={{ maxWidth: 400, padding: 40 }}>{sizes}</div>)
  .add('Hide week days', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePicker hideWeekdays label="Date picker" />
    </div>
  ))
  .add('Hide outside dates', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePicker hideOutsideDates label="Date picker" />
    </div>
  ))
  .add('Within modal', () => <WithinModal />)
  .add('Dropdown type modal', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePicker
        dropdownType="modal"
        placeholder="Pick date"
        label="Date picker"
        modalZIndex={4554}
      />
    </div>
  ))
  .add('Amount of months', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePicker
        amountOfMonths={2}
        label="Two months"
        onDropdownClose={() => console.log('Close')}
        onDropdownOpen={() => console.log('open')}
      />
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
      <ControlledFreeInput />
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

      <DatePicker placeholder="Pick date" label="Date picker" allowFreeInput mt={20} mb={40} />

      <button type="button">Focus test</button>

      <ControlledFreeInput />
    </div>
  ))
  .add('Date format on MantineProvider', () => (
    <MantineProvider theme={{ dateFormat: 'MM YYYY DD' }}>
      <DatePicker label="One month" />
    </MantineProvider>
  ))
  .add('Within overlays', () => (
    <WithinOverlays>
      <DatePicker placeholder="Pick date" label="Event date" withinPortal={false} />
    </WithinOverlays>
  ))
  .add('Within form', () => (
    <SubmitForm>
      <DatePicker placeholder="Submit with enter" label="Event date" />
    </SubmitForm>
  ))
  .add('Within form: free input', () => (
    <SubmitForm>
      <DatePicker
        placeholder="Submit with enter with free input"
        label="Event date"
        allowFreeInput
      />
    </SubmitForm>
  ))
  .add('Clear button tab index disabled', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DatePicker placeholder="Submit with enter" label="Event date" clearButtonTabIndex={-1} />
    </div>
  ));
