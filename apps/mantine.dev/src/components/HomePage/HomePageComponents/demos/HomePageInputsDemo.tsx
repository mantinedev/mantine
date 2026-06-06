import {
  ColorInput,
  FileInput,
  Input,
  MultiSelect,
  NumberInput,
  PinInput,
  Select,
  SimpleGrid,
  TextInput,
  TreeSelect,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';

const inputProps = {
  size: 'lg' as const,
  radius: 'md',
};

const treeSelectData = [
  {
    value: 'frontend',
    label: 'Frontend',
    children: [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue' },
      { value: 'svelte', label: 'Svelte' },
    ],
  },
  {
    value: 'backend',
    label: 'Backend',
    children: [
      { value: 'nodejs', label: 'Node.js' },
      { value: 'go', label: 'Go' },
      { value: 'rust', label: 'Rust' },
    ],
  },
];

export function HomePageInputsDemo() {
  return (
    <div>
      <SimpleGrid cols={{ md: 3 }} spacing="xl" verticalSpacing={25}>
        <TextInput label="Text input" placeholder="Text input" {...inputProps} />
        <NumberInput
          label="Number input"
          placeholder="Number input"
          {...inputProps}
          prefix="$ "
          thousandSeparator
          defaultValue={30712}
        />
        <DatePickerInput
          label="Date range picker"
          placeholder="Your last vacation"
          popoverProps={{ radius: 'md' }}
          type="range"
          {...inputProps}
        />
        <ColorInput
          label="Color input"
          defaultValue="#129ce0"
          placeholder="What other library has color input?"
          format="rgba"
          popoverProps={{ radius: 'md' }}
          {...inputProps}
        />
        <TreeSelect
          label="Tree select"
          placeholder="Pick from the tree"
          {...inputProps}
          data={treeSelectData}
          defaultValue="react"
          comboboxProps={{ radius: 'md' }}
        />

        <FileInput label="File input" placeholder="Upload file" {...inputProps} />

        <Select
          label="Select"
          placeholder="Pick one option"
          {...inputProps}
          checkIconPosition="right"
          defaultValue="🇫🇷 France"
          data={['🇩🇪 Germany', '🇫🇷 France', '🇬🇧 United Kingdom', '🇺🇸 United States of America']}
        />

        <MultiSelect
          label="Multiselect"
          placeholder="Search and pick"
          {...inputProps}
          comboboxProps={{ radius: 'md' }}
          defaultValue={['React', 'Vue']}
          searchable
          checkIconPosition="right"
          data={['React', 'Angular', 'Vue', 'Svelte', 'Ember', 'Preact', 'Solid', 'Alpine']}
        />

        <div>
          <Input.Label size="lg">Pin input</Input.Label>
          <PinInput {...inputProps} />
        </div>
      </SimpleGrid>
    </div>
  );
}
