import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { IconGripVertical, IconTrash } from '@tabler/icons-react';
import { ActionIcon, Group, TextInput } from '@mantine/core';
import type { FieldEditorFormType } from '../../types';
import classes from './SelectOptionRow.module.css';

interface SelectOptionRowProps {
  form: FieldEditorFormType;
  id: string;
  index: number;
  onRemove: () => void;
}

export function SelectOptionRow({ form, id, index, onRemove }: SelectOptionRowProps) {
  const name = `option ${index + 1}`;
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  return (
    <Group
      ref={setNodeRef}
      gap="xs"
      wrap="nowrap"
      align="flex-start"
      className={classes.row}
      data-dragging={isDragging || undefined}
      style={{ transform: CSS.Transform.toString(transform), transition }}
    >
      <ActionIcon
        variant="default"
        size="input-sm"
        className={classes.handle}
        aria-label={`Reorder ${name}`}
        ref={setActivatorNodeRef}
        {...attributes}
        {...listeners}
      >
        <IconGripVertical size={16} />
      </ActionIcon>
      <TextInput
        aria-label={`Value of ${name}`}
        placeholder="Value"
        className={classes.input}
        {...form.getInputProps(`select.options.${index}.value`)}
      />
      <TextInput
        aria-label={`Label of ${name}`}
        placeholder="Label"
        className={classes.input}
        {...form.getInputProps(`select.options.${index}.label`)}
      />
      <ActionIcon
        variant="default"
        size="input-sm"
        aria-label={`Remove ${name}`}
        onClick={onRemove}
      >
        <IconTrash size={16} color="var(--mantine-color-red-text)" />
      </ActionIcon>
    </Group>
  );
}
