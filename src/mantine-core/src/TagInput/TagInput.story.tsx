import React, { useState } from 'react';
import { MANTINE_SIZES } from '@mantine/styles';
import { Stack } from '../Stack';
import { TextInput } from '../TextInput';
import { Group } from '../Group';

import { TagInput } from './TagInput';

export default { title: 'TagInput' };

export function Controlled() {
  const [value, setValue] = useState([]);
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TagInput label="Tag Input" value={value} onChange={setValue} placeholder="Input tag" />
      <button type="button" onClick={() => setValue(['react', 'ng'])}>
        Set value
      </button>
    </div>
  );
}

export function Sizes() {
  return (
    <>
      {MANTINE_SIZES.map((size) => (
        <Stack key={size} style={{ marginTop: 30 }}>
          <TagInput
            size={size}
            variant="unstyled"
            label="Tag Input"
            defaultValue={['react', 'ng']}
            placeholder="Input Tag"
          />
          <TextInput label="Text input" placeholder="Text input" size={size} />
        </Stack>
      ))}
    </>
  );
}

export function Variants() {
  return (
    <>
      {(['default', 'filled', 'unstyled'] as const).map((variant) => (
        <Group grow key={variant} style={{ marginTop: 30 }}>
          <TagInput variant={variant} label="Tag Input" placeholder="Input Tag" />
          <TextInput label="Text input" placeholder="Text input" variant={variant} />
        </Group>
      ))}
    </>
  );
}

export function Alignment() {
  return (
    <>
      <Group style={{ padding: 40, paddingBottom: 0 }} grow align="flex-start">
        <TagInput label="Tag Input" defaultValue={['react', 'ng']} placeholder="Input tag" />
        <TextInput label="Text input" placeholder="Input tag" />
      </Group>
      <Group style={{ padding: 40, paddingTop: 0 }} grow align="flex-start" mt="md">
        <TextInput label="Text input" placeholder="Input tag" />
        <TagInput
          label="Tag Input with separator and disabled items"
          defaultValue={['react', 'ng']}
          placeholder="Input tag"
        />
      </Group>
    </>
  );
}
export function MaxSelected() {
  return (
    <Group style={{ padding: 40, paddingBottom: 0 }} grow align="flex-start">
      <TagInput
        label=" with Max Selectable Values"
        defaultValue={['react', 'ng']}
        placeholder="Input tag"
        maxTags={5}
      />
    </Group>
  );
}
