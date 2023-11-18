import React, { useState } from 'react';
import { TagsInput } from './TagsInput';
import { Button } from '../Button';

export default { title: 'TagsInput' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput defaultValue={['React', 'Angular']} placeholder="Enter tags" />
    </div>
  );
}

export function Clearable() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput
        placeholder="Clearable"
        data={['React', 'Angular', 'Svelte']}
        defaultValue={['React']}
        clearable
      />

      <TagsInput
        placeholder="Disabled"
        data={['React', 'Angular', 'Svelte']}
        defaultValue={['React']}
        clearable
        disabled
        mt="md"
      />

      <TagsInput
        placeholder="Read only"
        data={['React', 'Angular', 'Svelte']}
        defaultValue={['React']}
        clearable
        readOnly
        mt="md"
      />
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput defaultValue={['React', 'Angular']} placeholder="Enter tags" unstyled />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState<string[]>(['React']);
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <TagsInput
        value={value}
        onChange={setValue}
        label="Test"
        placeholder="Test autocomplete"
        data={['React', 'Angular', 'Svelte']}
      />
      <Button onClick={() => setValue(['angular'])}>Angular</Button>
      <Button onClick={() => setValue([])}>Empty</Button>
    </div>
  );
}

export function MaxTags() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput
        defaultValue={['React', 'Angular']}
        placeholder="Enter tags"
        maxTags={3}
        data={['First', 'Second', 'Third']}
      />
    </div>
  );
}

export function SplitChars() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput
        defaultValue={['React', 'Angular']}
        placeholder="Enter tags"
        splitChars={[' ', ',']}
      />
    </div>
  );
}

export function AllowDuplicates() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput defaultValue={['React', 'Angular']} placeholder="Enter tags" allowDuplicates />
    </div>
  );
}

export function WithData() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput
        defaultValue={['React', 'Angular']}
        placeholder="Enter tags"
        data={['test-1', 'test-2']}
      />
    </div>
  );
}
