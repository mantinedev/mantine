import { Select } from '@mantine/core';
import { STATUSES } from '../constants';
import type { ActionParamsProps } from './types';

export function StatusParams({ form, path }: ActionParamsProps) {
  return (
    <Select
      label="Status"
      placeholder="Pick a status"
      data={STATUSES}
      withAsterisk
      {...form.getInputProps(`${path}.status`)}
    />
  );
}
