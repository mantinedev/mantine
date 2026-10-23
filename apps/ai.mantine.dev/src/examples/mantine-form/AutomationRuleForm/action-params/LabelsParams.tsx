import { MultiSelect } from '@mantine/core';
import { LABELS } from '../constants';
import type { ActionParamsProps } from './types';

export function LabelsParams({ form, path }: ActionParamsProps) {
  const labels = form.useWatchValue(`${path}.labels`) as string[];

  return (
    <MultiSelect
      label="Labels"
      placeholder={labels.length === 0 ? 'Pick labels' : undefined}
      data={LABELS}
      withAsterisk
      {...form.getInputProps(`${path}.labels`)}
    />
  );
}
