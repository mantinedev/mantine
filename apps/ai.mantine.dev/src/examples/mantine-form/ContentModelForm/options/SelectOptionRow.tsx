import { IconGripVertical, IconTrash } from '@tabler/icons-react';
import { ActionIcon, Group, TextInput } from '@mantine/core';
import { useSortableRow } from '../Sortable';
import type { FieldFormType } from '../types';
import classes from './SelectOptionRow.module.css';

interface SelectOptionRowProps {
  form: FieldFormType;
  id: string;
  index: number;
}

export function SelectOptionRow({ form, id, index }: SelectOptionRowProps) {
  const { rowProps, handleProps } = useSortableRow(id);
  const position = index + 1;

  return (
    <div {...rowProps}>
      <Group gap="xs" wrap="nowrap" align="flex-start">
        <ActionIcon
          variant="default"
          size="input-sm"
          aria-label={`Reorder option ${position}`}
          {...handleProps}
        >
          <IconGripVertical size={16} />
        </ActionIcon>
        <TextInput
          className={classes.input}
          aria-label={`Option ${position} value`}
          placeholder="Value"
          classNames={{ input: classes.monospace }}
          {...form.getInputProps(`options.${index}.value`)}
        />
        <TextInput
          className={classes.input}
          aria-label={`Option ${position} label`}
          placeholder="Label"
          {...form.getInputProps(`options.${index}.label`)}
        />
        <ActionIcon
          variant="default"
          size="input-sm"
          aria-label={`Remove option ${position}`}
          onClick={() => form.removeListItem('options', index)}
        >
          <IconTrash size={16} color="var(--mantine-color-red-text)" />
        </ActionIcon>
      </Group>
    </div>
  );
}
