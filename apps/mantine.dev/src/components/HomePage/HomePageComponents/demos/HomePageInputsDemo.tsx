import {
  ColorInput,
  FileInput,
  Input,
  MultiSelect,
  NumberInput,
  PasswordInput,
  PinInput,
  Select,
  SimpleGrid,
  TextInput,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';

const inputProps = {
  size: 'lg' as const,
  radius: 'md',
};

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
        <PasswordInput
          label="Password input"
          placeholder="Secret"
          defaultValue="😎🤏🤨🕶️🤏"
          {...inputProps}
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
