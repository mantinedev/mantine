import { MultiSelect } from '@mantine/core';
import { FIELDS } from '../constants';
import type { ValueInputProps } from './types';

export function OptionsValue({ form, path, field }: ValueInputProps) {
  const values = form.useWatchValue(`${path}.options`) as string[];

  return (
    <MultiSelect
      aria-label="Values"
      placeholder={values.length === 0 ? 'Pick values' : undefined}
      data={FIELDS[field].options}
      {...form.getInputProps(`${path}.options`)}
    />
  );
}
