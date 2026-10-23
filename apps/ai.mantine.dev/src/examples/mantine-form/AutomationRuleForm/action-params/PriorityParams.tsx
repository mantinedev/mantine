import { Select } from '@mantine/core';
import { PRIORITIES } from '../constants';
import type { ActionParamsProps } from './types';

export function PriorityParams({ form, path }: ActionParamsProps) {
  return (
    <Select
      label="Priority"
      placeholder="Pick a priority"
      data={PRIORITIES}
      withAsterisk
      {...form.getInputProps(`${path}.priority`)}
    />
  );
}
