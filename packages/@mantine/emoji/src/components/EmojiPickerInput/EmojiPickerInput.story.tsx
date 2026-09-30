import { useState } from 'react';
import data from '@emoji-mart/data';
import { Button, Group } from '@mantine/core';
import { emojiMartAdapter } from '../../adapters';
import { EmojiPickerInput } from './EmojiPickerInput';

export default { title: 'EmojiPickerInput' };

const emojiData = emojiMartAdapter(data);

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <EmojiPickerInput data={emojiData} placeholder="Select emoji" label="Pick an emoji" />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState<string | null>('grinning');

  return (
    <div style={{ padding: 40 }}>
      <EmojiPickerInput
        data={emojiData}
        value={value}
        onChange={setValue}
        placeholder="Select emoji"
        label="Controlled"
        pickerProps={{ defaultSkinTone: 2 }}
      />
      <div style={{ marginTop: 8 }}>Value: {value ?? 'null'}</div>
      <Group mt="md">
        <Button variant="default" onClick={() => setValue('+1')}>
          Set +1
        </Button>
        <Button variant="default" onClick={() => setValue('heart_eyes')}>
          Set heart_eyes
        </Button>
        <Button variant="default" onClick={() => setValue(null)}>
          Reset
        </Button>
      </Group>
    </div>
  );
}

export function NotClearable() {
  return (
    <div style={{ padding: 40 }}>
      <EmojiPickerInput
        data={emojiData}
        clearable={false}
        defaultValue="smile"
        label="Not clearable"
      />
    </div>
  );
}

export function WithLabel() {
  return (
    <div style={{ padding: 40 }}>
      <EmojiPickerInput
        data={emojiData}
        label="Emoji"
        description="Pick your favorite emoji"
        placeholder="Select emoji"
      />
    </div>
  );
}

export function WithError() {
  return (
    <div style={{ padding: 40 }}>
      <EmojiPickerInput
        data={emojiData}
        label="Emoji"
        error="Please select an emoji"
        placeholder="Select emoji"
      />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40 }}>
      <EmojiPickerInput data={emojiData} disabled label="Disabled" placeholder="Select emoji" />
    </div>
  );
}

export function ReadOnly() {
  return (
    <div style={{ padding: 40 }}>
      <EmojiPickerInput data={emojiData} readOnly defaultValue="grinning" label="Read only" />
    </div>
  );
}

export function WithDefaultValue() {
  return (
    <div style={{ padding: 40 }}>
      <EmojiPickerInput data={emojiData} defaultValue="heart_eyes" label="Default value" />
    </div>
  );
}

export function CloseOnSelectFalse() {
  return (
    <div style={{ padding: 40 }}>
      <EmojiPickerInput
        data={emojiData}
        closeOnSelect={false}
        placeholder="Select emoji"
        label="Close on select = false"
      />
    </div>
  );
}

export function Clearable() {
  return (
    <div style={{ padding: 40 }}>
      <EmojiPickerInput
        data={emojiData}
        clearable
        defaultValue="grinning"
        label="Clearable"
        clearButtonProps={{ 'aria-label': 'Clear selected emoji' }}
      />
    </div>
  );
}
