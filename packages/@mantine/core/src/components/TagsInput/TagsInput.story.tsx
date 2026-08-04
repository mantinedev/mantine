import { useState } from 'react';
import { Button } from '../Button';
import { TagsInput } from './TagsInput';

export default { title: 'TagsInput' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <TagsInput
        data={['react', 'angular']}
        placeholder="Select something"
        onChange={console.log}
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

export function MaxDisplayedValues() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <h3>Max displayed: 2</h3>
      <TagsInput
        defaultValue={['React', 'Angular', 'Svelte', 'Vue']}
        maxDisplayedValues={2}
        placeholder="Enter tags"
      />

      <h3 style={{ marginTop: 20 }}>Max displayed: 2 with custom format function</h3>
      <TagsInput
        defaultValue={['React', 'Angular', 'Svelte', 'Vue']}
        maxDisplayedValues={2}
        maxDisplayedValuesContent={(overflow) => `and ${overflow} other tags`}
        placeholder="Enter tags"
      />
    </div>
  );
}

export function HidePlaceholder() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <h3>hidePlaceholder: true</h3>
      <TagsInput placeholder="Placeholder goes away once tag is entered" hidePlaceholder />

      <h3 style={{ marginTop: 20 }}>hidePlaceholder: false</h3>
      <TagsInput placeholder="Placeholder stays when tag is entered" hidePlaceholder={false} />
    </div>
  );
}
