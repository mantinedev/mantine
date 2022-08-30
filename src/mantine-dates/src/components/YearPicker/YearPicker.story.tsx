/* eslint-disable no-console */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { useDisclosure } from '@mantine/hooks';
import { MANTINE_SIZES, MantineProvider, TextInput, Modal, Button, Tooltip } from '@mantine/core';
import { WithinOverlays, SubmitForm } from '@mantine/storybook';
import { YearPicker } from './YearPicker';

function Controlled() {
  const [value, onChange] = useState(2021);

  return (
    <YearPicker
      value={value}
      onChange={(val) => {
        console.log(val);
        onChange(val);
      }}
      placeholder="Pick year"
      label="Year picker"
    />
  );
}

function ControlledFreeInput() {
  const [value, onChange] = useState(2021);

  return (
    <>
      <YearPicker
        mt={20}
        mb={10}
        value={value}
        onChange={(val) => {
          console.log(val);
          onChange(val);
        }}
        placeholder="Controlled with free input"
        label="Year picker"
        allowFreeInput
      />
      <button type="button" onClick={() => onChange(new Date().getFullYear())}>
        Set year
      </button>
    </>
  );
}

function WithinModal() {
  const [opened, handlers] = useDisclosure(false);
  return (
    <>
      <Button onClick={handlers.open}>Open Modal</Button>
      <Modal opened={opened} onClose={handlers.close} title="Modal with YearPicker">
        <YearPicker mt="md" id="yearOfBirth" label="Year Of Birth" placeholder="Year Of Birth" />
      </Modal>
    </>
  );
}

const sizes = MANTINE_SIZES.map((size) => (
  <YearPicker
    placeholder={`${size} placeholder`}
    size={size}
    key={size}
    style={{ marginTop: 30 }}
    defaultValue={new Date().getFullYear()}
    label="This is label"
    description="This is description"
  />
));

function WithInputContainer() {
  return (
    <div style={{ width: 300, padding: 20 }}>
      <YearPicker
        className="test-class-name"
        label="with tooltip"
        description="with tooltip"
        error="with tooltip"
        inputContainer={(children) => (
          <Tooltip label="tooltip" position="bottom-start">
            <div>{children}</div>
          </Tooltip>
        )}
      />
    </div>
  );
}

storiesOf('YearPicker', module)
  .add('With inputContainer', () => <WithInputContainer />)
  .add('Sizes', () => <div style={{ maxWidth: 400, padding: 40 }}>{sizes}</div>)
  .add('Within modal', () => <WithinModal />)
  .add('Dropdown type modal', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <YearPicker
        dropdownType="modal"
        placeholder="Pick year"
        label="Year picker"
        modalZIndex={4554}
        modalProps={{ styles: { modal: { backgroundColor: 'pink' } } }}
      />
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
      <YearPicker placeholder="Pick date" label="Date picker" mt="xl" />
    </div>
  ))
  .add('Free input focus', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <YearPicker placeholder="Pick date" label="Date picker" allowFreeInput />

      <YearPicker placeholder="Pick date" label="Date picker" allowFreeInput mt={20} mb={40} />

      <button type="button">Focus test</button>

      <ControlledFreeInput />
    </div>
  ))
  .add('Date format on MantineProvider', () => (
    <MantineProvider theme={{ dateFormat: 'MM YYYY DD' }}>
      <YearPicker label="One month" />
    </MantineProvider>
  ))
  .add('Within overlays', () => (
    <WithinOverlays>
      <YearPicker placeholder="Pick date" label="Event date" withinPortal={false} />
    </WithinOverlays>
  ))
  .add('Within form', () => (
    <SubmitForm>
      <YearPicker placeholder="Submit with enter" label="Event date" />
    </SubmitForm>
  ))
  .add('Within form: free input', () => (
    <SubmitForm>
      <YearPicker
        placeholder="Submit with enter with free input"
        label="Event date"
        allowFreeInput
      />
    </SubmitForm>
  ))
  .add('Clear button tab index disabled', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <YearPicker placeholder="Submit with enter" label="Event date" clearButtonTabIndex={-1} />
    </div>
  ));
