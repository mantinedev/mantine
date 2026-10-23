import { NumberInput } from '@mantine/core';
import { MAX_DAYS } from '../constants';
import type { ActionParamsProps } from './types';

export function DueDateParams({ form, path }: ActionParamsProps) {
  return (
    <NumberInput
      label="Days from now"
      placeholder="Days from now"
      min={1}
      max={MAX_DAYS}
      clampBehavior="none"
      allowNegative={false}
      allowDecimal={false}
      withAsterisk
      {...form.getInputProps(`${path}.dueInDays`)}
    />
  );
}
