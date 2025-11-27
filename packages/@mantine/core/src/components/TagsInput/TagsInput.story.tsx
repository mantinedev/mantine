import { useState } from 'react';
import { Button } from '../Button';
import { TagsInput } from './TagsInput';

export default { title: 'TagsInput' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput
        data={[
          'React',
          'Angular',
          'Svelte',
          'Vue',
          'Ember',
          'Backbone',
          'Preact',
          'Inferno',
          'Aurelia',
          'Meteor',
        ]}
        placeholder="Select something"
      />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput
        disabled
        label="disabled"
        defaultValue={['React', 'Angular']}
        placeholder="Enter tags"
      />
      <fieldset disabled>
        <TagsInput
          label="disabled fieldset"
          defaultValue={['React', 'Angular']}
          placeholder="Enter tags"
        />
      </fieldset>
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

export function EditableTags() {
  const [value, setValue] = useState<string[]>(['React', 'Angular', 'Vue']);
  return (
    <div style={{ padding: 40 }}>
      <TagsInput
        label="Editable tags (double-click to edit)"
        description="Double-click on a tag to edit it. Press Enter to save, Escape to cancel."
        value={value}
        onChange={setValue}
        allowTagEdit
        onTagEdit={(oldValue, newValue, index) => {
          console.log(`Tag edited: "${oldValue}" → "${newValue}" at index ${index}`);
        }}
        placeholder="Enter tags"
      />
      <div style={{ marginTop: 16 }}>Current values: {JSON.stringify(value)}</div>
    </div>
  );
}

export function EditableTagsWithDuplicateCheck() {
  const [value, setValue] = useState<string[]>(['React', 'Angular', 'Vue']);
  const [duplicateAttempt, setDuplicateAttempt] = useState<string | null>(null);

  return (
    <div style={{ padding: 40 }}>
      <TagsInput
        label="Editable tags with duplicate check"
        description="Try editing a tag to match another existing tag"
        value={value}
        onChange={setValue}
        allowTagEdit
        onDuplicate={(val) => {
          setDuplicateAttempt(val);
          setTimeout(() => setDuplicateAttempt(null), 2000);
        }}
        placeholder="Enter tags"
      />
      {duplicateAttempt && (
        <div style={{ marginTop: 8, color: 'red' }}>
          Duplicate detected: &quot;{duplicateAttempt}&quot;
        </div>
      )}
    </div>
  );
}

export function EditableTagsWithAllowDuplicates() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput
        label="Editable tags allowing duplicates"
        description="Duplicates are allowed when editing"
        defaultValue={['React', 'Angular', 'Vue']}
        allowTagEdit
        allowDuplicates
        placeholder="Enter tags"
      />
    </div>
  );
}
