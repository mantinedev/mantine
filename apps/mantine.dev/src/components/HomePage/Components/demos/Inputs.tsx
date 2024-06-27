import {
  Autocomplete,
  ColorInput,
  MultiSelect,
  NativeSelect,
  PasswordInput,
  Select,
  SimpleGrid,
  TextInput,
} from '@mantine/core';

export function Inputs() {
  return (
    <SimpleGrid
      cols={{ base: 1, sm: 2 }}
      style={{ rowGap: 'var(--mantine-spacing-md' }}
      spacing="xl"
    >
      <TextInput label="Text input" placeholder="Text input" required />
      <PasswordInput label="Password input" placeholder="Password input" required />
      <ColorInput
        label="Color input"
        defaultValue="rgba(34, 138, 230, 0.8)"
        format="rgba"
        placeholder="What other library has that?"
        eyeDropperButtonProps={{ 'aria-label': 'Pick color' }}
      />
      <NativeSelect label="Native select" data={['React', 'Angular', 'Svelte', 'Vue']} />
      <Select
        label="Custom select"
        placeholder="Custom select"
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
      <Select
        label="Searchable select"
        placeholder="Search me"
        searchable
        nothingFoundMessage="Nothing found..."
        data={['React', 'Angular', 'Svelte', 'Vue']}
      />
      <MultiSelect
        data={['React', 'Angular', 'Svelte', 'Vue']}
        searchable
        label="Custom multi select"
        placeholder="Pick all you want"
      />

      <Autocomplete
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Autocomplete"
        placeholder="Enter anything with suggestions"
      />

      <TextInput
        label="With description"
        placeholder="Additional info is always useful"
        description="Every input can have description..."
      />
      <TextInput label="With error" placeholder="Oh-oh" error="...and error" />
    </SimpleGrid>
  );
}
