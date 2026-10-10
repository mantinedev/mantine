import { ArrowCounterClockwiseIcon } from '@phosphor-icons/react';
import { ActionIcon } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { TableRow } from './data';

interface RowResetButtonProps {
  form: UseFormReturnType<{ rows: TableRow[] }>;
  index: number;
}

export function RowResetButton({ form, index }: RowResetButtonProps) {
  const dirty = form.useDirty(`rows.${index}`);

  if (!dirty) {
    return null;
  }

  return (
    <ActionIcon
      variant="default"
      size="lg"
      aria-label="Reset row"
      onClick={() => form.resetField(`rows.${index}`)}
    >
      <ArrowCounterClockwiseIcon size={16} />
    </ActionIcon>
  );
}
