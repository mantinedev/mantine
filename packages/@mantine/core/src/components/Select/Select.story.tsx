/* eslint-disable no-console */
import { useState } from 'react';
import { Button } from '../Button';
import { Select } from './Select';

export default { title: 'Select' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        data={['React', 'Angular', 'Svelte']}
        placeholder="Select something"
        onChange={console.log}
        allowDeselect={false}
        chevronColor="violet"
      />
    </div>
  );
}

export function WithAreaLabel() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        data={['React', 'Angular', 'Svelte']}
        aria-label="Library"
        placeholder="Select something"
        dropdownOpened
      />
    </div>
  );
}

export function FixedValue() {
  return (
    <div style={{ padding: 40 }}>
      <Select data={['React', 'Angular', 'Svelte']} placeholder="Select something" value="React" />
    </div>
  );
}

export function ScrollToSelected() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        data={['React', 'Angular', 'Svelte'].flatMap((value) =>
          Array(10)
            .fill(0)
            .map((_, index) => `${value} ${index}`)
        )}
        placeholder="Select something"
        defaultValue="First"
      />
    </div>
  );
}

export function EmptyOptionValue() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        data={[
          { value: '', label: 'Empty value' },
          { value: 'test', label: 'Not empty' },
        ]}
        defaultValue=""
        placeholder="Select value"
      />
    </div>
  );
}

export function LongOptions() {
  return (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <Select
        data={['Option that is so long that is collapses to the next line', 'React']}
        placeholder="Select something"
        defaultValue="First"
      />
    </div>
  );
}

export function SelectedValueNotInDataArray() {
  return (
    <div style={{ padding: 40, maxWidth: 300 }}>
      <Select
        data={['Angular', 'React']}
        value="test"
        placeholder="Select something"
        defaultValue="First"
        onChange={() => {}}
      />
    </div>
  );
}

export function WithinForm() {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        console.log('Form submitted');
      }}
      style={{ padding: 40 }}
    >
      <Select
        data={['React', 'Angular', 'Svelte']}
        placeholder="Select something"
        defaultValue="First"
        searchable
      />
    </form>
  );
}

export function Clearable() {
  return (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Select
        data={['React', 'Angular', 'Svelte']}
        placeholder="Clearable default"
        defaultValue="React"
        clearable
      />

      <Select
        data={['React', 'Angular', 'Svelte']}
        placeholder="Clearable disabled"
        defaultValue="React"
        clearable
        disabled
        mt="md"
      />

      <Select
        data={['React', 'Angular', 'Svelte']}
        placeholder="Clearable read only"
        defaultValue="React"
        clearable
        readOnly
        mt="md"
      />
    </div>
  );
}

export function DataChangesOverTime() {
  const [data, setData] = useState<any[]>([]);
  return (
    <div style={{ padding: 40 }}>
      <Select
        value="1"
        data={data}
        placeholder="Select something"
        defaultValue="First"
        searchable
      />
      <Button onClick={() => setData([{ value: '1', label: Math.random().toString() }])}>
        Set Data
      </Button>
    </div>
  );
}

export function Unstyled() {
  return (
    <div style={{ padding: 40 }}>
      <Select data={['React', 'Angular', 'Svelte']} placeholder="Select something" unstyled />
    </div>
  );
}

export function ControlledSearch() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        data={['React', 'Angular', 'Svelte']}
        placeholder="Select something"
        searchable
        searchValue="Re"
      />
    </div>
  );
}

export function SearchControlledValue() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        value="React"
        data={['React', 'Angular', 'Svelte']}
        placeholder="Select something"
        searchable
      />
    </div>
  );
}

export function ControlledSearchAndValue() {
  const [value, setValue] = useState<string | null>('Angular');
  const [searchValue, setSearchValue] = useState('');

  return (
    <div style={{ padding: 40 }}>
      <Select
        searchable
        searchValue={searchValue}
        onSearchChange={setSearchValue}
        data={['React', 'Angular', 'Svelte']}
        value={value}
        onChange={setValue}
      />
    </div>
  );
}

export function AllowDeselectFalse() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        data={['React', 'Angular', 'Svelte']}
        placeholder="Select something"
        allowDeselect={false}
      />
    </div>
  );
}

export function ReadOnly() {
  return (
    <div style={{ padding: 40 }}>
      <Select data={['React', 'Angular', 'Svelte']} placeholder="Select something" readOnly />
    </div>
  );
}

export function Controlled() {
  const [value, setValue] = useState<string | null>('React');
  return (
    <div style={{ padding: 40 }}>
      <Select
        value={value}
        onChange={setValue}
        data={['React', 'Angular', 'Svelte']}
        placeholder="Select something"
      />
      <Button onClick={() => setValue('Angular')}>Angular</Button>
      <Button onClick={() => setValue(null)}>Null</Button>
    </div>
  );
}

export function Searchable() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        data={['React', 'Angular', 'Svelte']}
        placeholder="Select something"
        searchable
        nothingFoundMessage="Nothing found..."
      />
    </div>
  );
}

export function NoDataProvidedMessage() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        data={[]}
        placeholder="Select something"
        nothingFoundMessage="Try adding some data..."
      />
    </div>
  );
}

export function HiddenDropdown() {
  return (
    <div style={{ padding: 40 }}>
      <Select
        data={['React', 'Angular', 'Svelte']}
        placeholder="Select something"
        searchable
        nothingFoundMessage="Nothing found..."
      />
      <Select data={['React', 'Angular', 'Svelte']} placeholder="No message" searchable mt="xl" />
      <Select data={[]} placeholder="Empty data" searchable mt="xl" />
    </div>
  );
}
