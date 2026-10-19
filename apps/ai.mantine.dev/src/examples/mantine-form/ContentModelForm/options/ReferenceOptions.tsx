import { Checkbox, Select } from '@mantine/core';
import { REFERENCE_TARGETS } from '../fieldTypes';
import type { FieldFormType } from '../types';

export function ReferenceOptions({ form }: { form: FieldFormType }) {
  return (
    <>
      <Select
        label="Target model"
        placeholder="Select a model"
        withAsterisk
        data={REFERENCE_TARGETS}
        {...form.getInputProps('targetModel')}
      />
      <Checkbox
        label="Allow multiple"
        {...form.getInputProps('allowMultiple', { type: 'checkbox' })}
      />
    </>
  );
}
