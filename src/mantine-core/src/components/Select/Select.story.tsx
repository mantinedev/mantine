import React, { useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { SubmitForm } from '@mantine/storybook';
import { Select, SelectProps } from './Select';
import { Button } from '../Button';
import { Group } from '../Group';

const paragraph =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magnam veniam excepturi numquam facere odio eveniet nihil quidem iure. Saepe et illo, earum quia tenetur incidunt quae cum iure iusto!';

const data = [
  { value: 'react', label: 'React' },
  { value: 'ng', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue' },
];

const groupedData = [
  { value: 'react', label: 'React', disabled: true, group: 'FB' },
  { value: 'ng', label: 'Angular', group: 'Google' },
  { value: 'lit', label: 'Lit', group: 'Google' },
  { value: 'svelte', label: 'Svelte' },
  { value: 'vue', label: 'Vue', group: 'Evan' },
];

const stringData = ['React', 'Angular', 'Svelte', 'Vue'];

const largeData = Array(50)
  .fill(0)
  .map((_, index) => ({
    value: `${index}`,
    label: `Item ${index}`,
  }));

function Controlled(props: Partial<SelectProps>) {
  const [value, setValue] = useState(null);

  return (
    <div>
      <Select
        label="Controlled"
        placeholder="Controlled"
        value={value}
        onChange={setValue}
        data={data}
        mt="md"
        {...props}
      />
      <Group mt="md">
        <Button variant="outline" onClick={() => setValue(null)}>
          Set null
        </Button>
        <Button variant="outline" onClick={() => setValue('react')}>
          Set value
        </Button>
      </Group>
    </div>
  );
}

const content = Array(10)
  .fill(0)
  .map((_, index) => <p key={index}>{paragraph}</p>);

function Creatable() {
  const [creatableData, setData] = useState(stringData);

  return (
    <Select
      label="Creatable Select"
      data={creatableData}
      placeholder="Select items"
      nothingFound="Nothing found"
      searchable
      creatable
      onCreate={(query) => setData((c) => [...c, query])}
      getCreateLabel={(query) => `+ Create ${query}`}
    />
  );
}

function DynamicLabels(props: Partial<SelectProps>) {
  const [value, setValue] = useState(null);
  const [dynamicData, setDynamicData] = useState(data);

  useEffect(() => {
    const interval = setInterval(() => {
      setDynamicData(
        data.map((d) => ({
          value: d.value,
          label: `${d.label}-${Math.floor(Math.random() * 100)}`,
        }))
      );
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div>
      <Select
        label="Controlled"
        placeholder="Controlled"
        value={value}
        onChange={setValue}
        data={dynamicData}
        mt="md"
        {...props}
      />
      <Group mt="md">
        <Button variant="outline" onClick={() => setValue(null)}>
          Set null
        </Button>
        <Button variant="outline" onClick={() => setValue('react')}>
          Set value
        </Button>
      </Group>
    </div>
  );
}

storiesOf('Select', module)
  .add('Controlled', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Controlled />
    </div>
  ))
  .add('Fixed value', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Select
        label="Controlled (fixed value)"
        placeholder="Choose value"
        searchable
        value="ng"
        data={data}
        mt={20}
      />
    </div>
  ))
  .add('Dynamic Labels', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DynamicLabels />
    </div>
  ))
  .add('Dynamic Labels (searchable)', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <DynamicLabels searchable />
    </div>
  ))
  .add('Disabled items', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Select
        label="Disabled Elements"
        placeholder="Choose value"
        data={[...data, { value: 'lit', label: 'Lit', disabled: true }]}
        mt={20}
      />
    </div>
  ))
  .add('Grouped data', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Select
        label="With Grouped and Disabled Data"
        placeholder="Choose value"
        data={groupedData}
        mt={20}
        searchable
      />
    </div>
  ))
  .add('With native scrollbars', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Select
        data={largeData}
        label="Native scrollbars"
        placeholder="Select with native scrollbars"
        dropdownComponent="div"
      />
    </div>
  ))
  .add('Creatable', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Creatable />
    </div>
  ))
  .add('Deselect item', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Select
        label="Allow deselect"
        placeholder="Choose value"
        data={[...data, { value: 'lit', label: 'Lit', disabled: true }]}
        mt={20}
        allowDeselect
      />
      <Select
        label="Disallow deselect"
        placeholder="Choose value"
        data={[...data, { value: 'lit', label: 'Lit', disabled: true }]}
        mt={20}
        allowDeselect={false}
      />
    </div>
  ))
  .add('String as data', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Select
        label="Choose your favorite library/framework"
        placeholder="Choose value"
        data={stringData}
      />
    </div>
  ))
  .add('Searchable without nothing found', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Select
        label="Choose your favorite library/framework"
        placeholder="Choose value"
        data={stringData}
        searchable
      />
    </div>
  ))
  .add('Within form', () => (
    <SubmitForm>
      <Select
        label="Submit with enter"
        data={data}
        placeholder="Select items"
        searchable
        name="test"
      />
    </SubmitForm>
  ))
  .add('Out of viewport', () => (
    <div style={{ position: 'relative', marginTop: 40 }}>
      <Select
        label="Out of viewport"
        data={data}
        placeholder="Select items"
        sx={{ position: 'absolute', right: '-50%' }}
      />
    </div>
  ))
  .add('Popper flip', () => (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      {content}
      <Select label="Dropdown flip" data={data} placeholder="Select items" />
      {content}
    </div>
  ))
  .add('Popper flip (with direction switch)', () => (
    <div style={{ maxWidth: 600, margin: 'auto' }}>
      {content}
      <Select label="Dropdown flip" data={data} placeholder="Select items" switchDirectionOnFlip />
      {content}
    </div>
  ))
  .add('Searchable value clear', () => (
    <div style={{ padding: 40 }}>
      <Controlled
        label="ControlledSearchable value clear"
        placeholder="Searchable value clear"
        searchable
        clearable
        data={[
          { value: 'react', label: 'React' },
          { value: 'ng', label: 'Angular' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
        ]}
      />

      <Select
        label="Searchable value clear"
        placeholder="Searchable value clear"
        searchable
        clearable
        mt="xl"
        data={[
          { value: 'react', label: 'React' },
          { value: 'ng', label: 'Angular' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
        ]}
      />
    </div>
  ))
  .add('Uncontrolled with name', () => (
    <div style={{ padding: 40 }}>
      <Select
        name="test"
        label="Your favorite framework/library"
        placeholder="Pick one"
        data={[
          { value: 'react', label: 'React' },
          { value: 'ng', label: 'Angular' },
          { value: 'svelte', label: 'Svelte' },
          { value: 'vue', label: 'Vue' },
        ]}
      />
    </div>
  ))
  .add('Disabled', () => (
    <div style={{ padding: 40 }}>
      <Controlled disabled />
    </div>
  ))
  .add('Clearable and disabled', () => {
    const [value, setValue] = useState(data[0].value);

    return (
      <div style={{ padding: 40 }}>
        <Select data={data} value={value} onChange={setValue} disabled clearable />
      </div>
    );
  })
  .add('Filter searchable data', () => (
    <div style={{ padding: 40 }}>
      <Select
        filterDataOnExactSearchMatch
        clearable
        data={['React', 'Angular']}
        defaultValue="React"
        label="Filter"
        searchable
      />
      <Select
        mt="md"
        clearable
        data={['React', 'Angular']}
        defaultValue="React"
        label="Do not filter (default)"
        searchable
      />
    </div>
  ))
  .add('Clearable button not in tab index', () => (
    <div style={{ padding: 40, maxWidth: 400 }}>
      <Select
        label="Search in first select"
        placeholder="Choose value"
        data={stringData}
        searchable
        clearable
        clearButtonTabIndex={-1}
      />
      <Select
        label="Tab directly to next select"
        placeholder="Choose value"
        data={stringData}
        searchable
        clearable
        clearButtonTabIndex={-1}
      />
    </div>
  ));
