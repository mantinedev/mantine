import { NumberInput } from '@mantine/core';
import { MAX_DAYS } from '../constants';
import type { ActionParamsProps } from './types';

export function DueDateParams({ form, path }: ActionParamsProps) {
  return (
    <NumberInput
      label="Days from now"
      placeholder={`1 to ${MAX_DAYS}`}
      allowNegative={false}
      allowDecimal={false}
      withAsterisk
      {...form.getInputProps(`${path}.days`)}
    />
  );
}
