import { Checkbox, Select, Stack } from '@mantine/core';
import { REFERENCE_MODELS } from '../constants';
import type { OptionsProps } from './options';

export function ReferenceOptions({ form }: OptionsProps) {
  return (
    <Stack>
      <Select
        label="Target model"
        placeholder="Pick a model"
        data={REFERENCE_MODELS}
        allowDeselect={false}
        withAsterisk
        {...form.getInputProps('reference.targetModel')}
      />
      <Checkbox
        label="Allow multiple"
        description="Entries can link to several entries of the target model"
        {...form.getInputProps('reference.multiple', { type: 'checkbox' })}
      />
    </Stack>
  );
}
