import { useState } from 'react';
import { Box } from '../../core';
import { Button } from '../Button';
import { Group } from '../Group';
import { TextInput } from '../TextInput';
import { MultiSelect } from './MultiSelect';

export default { title: 'MultiSelect' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <MultiSelect
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
        searchable
        selectFirstOptionOnChange
      />
    </div>
  );
}

export function Disabled() {
  return (
    <div style={{ padding: 40 }}>
      <MultiSelect
        disabled
        label="disabled"
        defaultValue={['React', 'Angular']}
        placeholder="Enter tags"
      />
      <fieldset disabled>
        <MultiSelect
          label="disabled fieldset"
          defaultValue={['React']}
          placeholder="Enter tags"
          data={['React', 'Angular', 'Svelte']}
        />
      </fieldset>
    </div>
  );
}

export function EmptyStringValue() {
  return (
    <div style={{ padding: 40 }}>
      <MultiSelect
        placeholder="MultiSelect something"
        defaultValue={['']}
        data={[
          { value: '', label: 'Empty string' },
          { value: 'something', label: 'Non empty string' },
        ]}
      />
    </div>
  );
}

export function Placeholder() {
  return (
    <>
      <MultiSelect
        label="Without Placeholder"
        w={200}
        placeholder="Placeholder"
        data={[
          { value: '1', label: 'React' },
          { value: '2', label: 'Angular' },
          { value: '3', label: 'Svelte' },
        ]}
      />
      <MultiSelect
        label="Without Placeholder"
        w={200}
        data={[
          { value: '1', label: 'React' },
          { value: '2', label: 'Angular' },
          { value: '3', label: 'Svelte' },
        ]}
      />
    </>
  );
}

function InputsGroup({ size }: { size: string }) {
  return (
    <Group style={{ padding: 40 }} grow align="flex-start">
      <MultiSelect
        data={['React', 'Angular']}
        defaultValue={['React']}
        placeholder={`MultiSelect with value (${size})"`}
        size={size}
      />
      <MultiSelect
        data={['React', 'Angular']}
        placeholder={`MultiSelect without value (${size})"`}
        size={size}
      />
      <TextInput placeholder={`TextInput (${size})`} size={size} />
    </Group>
  );
}

export function InputsAlignment() {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl'].map((size) => (
    <div key={size}>
      <InputsGroup size={size} />
    </div>
  ));
  return <>{sizes}</>;
}

export function Clearable() {
  return (
    <div style={{ padding: 40 }}>
      <MultiSelect
        placeholder="Clearable"
        data={['React', 'Angular', 'Svelte']}
        defaultValue={['React']}
        clearable
      />

      <MultiSelect
        placeholder="Searchable"
        data={['React', 'Angular', 'Svelte']}
        defaultValue={['React']}
        clearable
        searchable
        mt="md"
      />

      <MultiSelect
        placeholder="Disabled"
        data={['React', 'Angular', 'Svelte']}
        defaultValue={['React']}
        clearable
        disabled
        mt="md"
      />

      <MultiSelect
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
      <MultiSelect
        placeholder="MultiSelect something"
        unstyled
        data={[
          { value: '1', label: 'React' },
          { value: '2', label: 'Angular' },
          { value: '3', label: 'Svelte' },
        ]}
      />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState<string[]>(['React']);
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <MultiSelect
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

export function HidePickedOptions() {
  return (
    <div style={{ padding: 40 }}>
      <MultiSelect
        data={[
          { value: 'test 1', label: 'React lib' },
          { value: 'test 2', label: 'Angular lib' },
          { value: 'test 3', label: 'Svelte lib' },
        ]}
        placeholder="MultiSelect something"
        hidePickedOptions
      />
    </div>
  );
}

export function Searchable() {
  return (
    <div style={{ padding: 40 }}>
      <MultiSelect
        data={['React', 'Angular', 'Svelte']}
        placeholder="MultiSelect something"
        searchable
        nothingFoundMessage="Nothing found..."
      />
    </div>
  );
}

export function NoDataProvidedMessage() {
  return (
    <div style={{ padding: 40 }}>
      <MultiSelect
        data={[]}
        placeholder="MultiSelect something"
        nothingFoundMessage="Try adding some data..."
      />
    </div>
  );
}

export function SearchableHidePicked() {
  return (
    <div style={{ padding: 40 }}>
      <MultiSelect
        data={['React', 'Angular', 'Svelte']}
        placeholder="MultiSelect something"
        searchable
        hidePickedOptions
        nothingFoundMessage="Nothing found..."
      />
    </div>
  );
}

export function PlaceholderOverflow() {
  return (
    <Box w="50%">
      <MultiSelect
        maw={80}
        data={['Option 1', 'Option2']}
        placeholder="This is the placeholder label"
      />
    </Box>
  );
}
