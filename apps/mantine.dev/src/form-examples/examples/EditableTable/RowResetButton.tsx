import { ArrowCounterClockwiseIcon } from '@phosphor-icons/react';
import { ActionIcon } from '@mantine/core';
import { TableForm } from './types';

interface RowResetButtonProps {
  form: TableForm;
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
