import React from 'react';
import { IconPhone } from '@tabler/icons-react';
import { TextInput } from './TextInput';

export default { title: 'TextInput' };

export function WithinDisabledFieldset() {
  return (
    <fieldset disabled style={{ padding: 40 }}>
      <legend>Disabled fieldset</legend>
      <TextInput label="Disabled by fieldset" placeholder="Disabled by fieldset" />
      <TextInput label="Disabled by prop" placeholder="Disabled by prop" disabled mt="md" />
    </fieldset>
  );
}

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <TextInput
        label="Text input"
        placeholder="This is text input"
        description="Description"
        error="Error"
        id="test-id"
        labelProps={{ style: { color: 'red' } }}
        descriptionProps={{ style: { color: 'red' } }}
        errorProps={{ style: { color: 'blue' } }}
      />
    </div>
  );
}

export function ErrorWithIcon() {
  return (
    <div style={{ padding: 40 }}>
      <TextInput
        label="Text input"
        leftSection={<IconPhone />}
        rightSection={<IconPhone />}
        error="Error"
        placeholder="This is text input"
        description="Description"
        id="test-id"
      />
    </div>
  );
}

export function DisabledWithRightSection() {
  return (
    <div style={{ padding: 40 }}>
      <TextInput
        label="Text input"
        placeholder="This is text input"
        description="Description"
        disabled
        rightSection="$$$"
      />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <TextInput
        label="Text input"
        placeholder="This is text input"
        description="Description"
        error="Error"
        unstyled
      />
    </div>
  );
}

export function WithoutErrorStyles() {
  return (
    <div style={{ padding: 40 }}>
      <TextInput
        label="Text input without error styles"
        description="Description"
        withErrorStyles={false}
        error="Error"
      />
    </div>
  );
}

export function Breakpoints() {
  return (
    <div style={{ padding: 40 }}>
      <TextInput label="Text input without error styles" bg="red" hiddenFrom="sm" />
      <TextInput label="Text input without error styles" bg="blue" visibleFrom="md" />
    </div>
  );
}
