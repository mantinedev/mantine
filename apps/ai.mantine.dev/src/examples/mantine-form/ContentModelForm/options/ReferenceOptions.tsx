import { Checkbox, Select, Stack } from '@mantine/core';
import { REFERENCE_MODELS } from '../fieldTypes';
import type { FieldFormType } from '../types';

export function ReferenceOptions({ form }: { form: FieldFormType }) {
  return (
    <Stack>
      <Select
        label="Target model"
        placeholder="Select a model"
        withAsterisk
        data={REFERENCE_MODELS}
        {...form.getInputProps('referenceModel')}
      />
      <Checkbox
        label="Allow multiple"
        {...form.getInputProps('allowMultiple', { type: 'checkbox' })}
      />
    </Stack>
  );
}
