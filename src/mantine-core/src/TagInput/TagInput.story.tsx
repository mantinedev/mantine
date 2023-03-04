import React, { useState } from 'react';
import { MANTINE_SIZES } from '@mantine/styles';
import { Stack } from '../Stack';
import { TextInput } from '../TextInput';
import { Group } from '../Group';

import { TagInput } from './TagInput';
import { InputFieldPosition } from './TagInput.styles';

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

export function ReadOnly() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TagInput label="Tag Input" value={['react', 'ng']} placeholder="Input tag" readOnly />
    </div>
  );
}

export function Sizes() {
  return (
    <div style={{ padding: 40 }}>
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
    </div>
  );
}

export function Variants() {
  return (
    <div style={{ padding: 40 }}>
      {(['default', 'filled', 'unstyled'] as const).map((variant) => (
        <Group grow key={variant} style={{ marginTop: 30 }}>
          <TagInput variant={variant} label="Tag Input" placeholder="Input Tag" />
          <TextInput label="Text input" placeholder="Text input" variant={variant} />
        </Group>
      ))}
    </div>
  );
}

export function Alignment() {
  return (
    <div style={{ padding: 40 }}>
      <Group style={{ padding: 40, paddingBottom: 0 }} grow align="flex-start">
        <TagInput label="Tag Input" defaultValue={['react', 'ng']} placeholder="Input tag" />
        <TextInput label="Text input" placeholder="Input tag" />
      </Group>
      <Group style={{ padding: 40, paddingTop: 0 }} grow align="flex-start" mt="md">
        <TextInput label="Text input" placeholder="Input tag" />
        <TagInput label="Tag Input" defaultValue={['react', 'ng']} placeholder="Input tag" />
      </Group>
    </div>
  );
}

export function InputFieldPositions() {
  return (
    <Stack style={{ padding: 40 }}>
      {(['inside', 'top', 'bottom'] as InputFieldPosition[]).map((inputFieldPosition) => (
        <TagInput
          label={`inputFieldPosition ${inputFieldPosition}`}
          defaultValue={['react', 'ng']}
          placeholder="Input tag"
          inputFieldPosition={inputFieldPosition}
        />
      ))}
    </Stack>
  );
}
