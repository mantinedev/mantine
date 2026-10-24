import { MultiSelect } from '@mantine/core';
import { LABELS } from '../constants';
import type { ActionParamsProps } from './types';

export function LabelsParams({ form, path }: ActionParamsProps) {
  return (
    <MultiSelect
      label="Labels"
      placeholder="Pick labels"
      data={LABELS}
      withAsterisk
      {...form.getInputProps(`${path}.labels`)}
    />
  );
}
