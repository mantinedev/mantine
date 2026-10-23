import { Checkbox, SimpleGrid, Stack, TextInput } from '@mantine/core';
import type { FieldEditorFormType } from './types';

export function CommonFieldOptions({ form }: { form: FieldEditorFormType }) {
  return (
    <Stack>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <TextInput
          label="Label"
          placeholder="Title"
          withAsterisk
          data-autofocus
          {...form.getInputProps('label')}
        />
        <TextInput label="Key" placeholder="title" withAsterisk {...form.getInputProps('key')} />
      </SimpleGrid>
      <TextInput
        label="Description"
        placeholder="Help text shown to editors"
        {...form.getInputProps('description')}
      />
      <Checkbox
        label="Required"
        description="Entries cannot be saved without a value"
        {...form.getInputProps('required', { type: 'checkbox' })}
      />
    </Stack>
  );
}
