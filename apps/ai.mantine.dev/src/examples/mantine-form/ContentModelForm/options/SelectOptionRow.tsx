import { IconGripVertical, IconTrash } from '@tabler/icons-react';
import { ActionIcon, Group, TextInput } from '@mantine/core';
import { useSortableItem } from '../Sortable';
import type { FieldFormType } from '../types';
import classes from './SelectOptionRow.module.css';

interface SelectOptionRowProps {
  form: FieldFormType;
  id: string;
  index: number;
  onRemove: () => void;
}

export function SelectOptionRow({ form, id, index, onRemove }: SelectOptionRowProps) {
  const { itemProps, handleProps } = useSortableItem(id);
  const position = index + 1;

  return (
    <div role="listitem" {...itemProps}>
      <Group gap="xs" align="flex-start" wrap="nowrap">
        <ActionIcon
          variant="default"
          size="input-sm"
          {...handleProps}
          aria-label={`Reorder option ${position}`}
        >
          <IconGripVertical size={16} />
        </ActionIcon>
        <TextInput
          className={classes.input}
          aria-label={`Option ${position} value`}
          placeholder="Value"
          {...form.getInputProps(`selectOptions.${index}.value`)}
        />
        <TextInput
          className={classes.input}
          aria-label={`Option ${position} label`}
          placeholder="Label"
          {...form.getInputProps(`selectOptions.${index}.label`)}
        />
        <ActionIcon
          variant="default"
          size="input-sm"
          aria-label={`Remove option ${position}`}
          onClick={onRemove}
        >
          <IconTrash size={16} color="var(--mantine-color-red-text)" />
        </ActionIcon>
      </Group>
    </div>
  );
}
