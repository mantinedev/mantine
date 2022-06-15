import React from 'react';
import {
  SimpleGrid,
  TextInput,
  PasswordInput,
  ColorInput,
  Select,
  NativeSelect,
  MultiSelect,
  Autocomplete,
} from '@mantine/core';

export function Inputs() {
  return (
    <SimpleGrid
      cols={2}
      breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
      sx={(theme) => ({ rowGap: theme.spacing.md })}
      spacing="xl"
    >
      <TextInput label="Text input" placeholder="Text input" required />
      <PasswordInput label="Password input" placeholder="Password input" required />
      <ColorInput
        label="Color input"
        defaultValue="rgba(34, 138, 230, 0.8)"
        format="rgba"
        placeholder="What other library has that?"
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
