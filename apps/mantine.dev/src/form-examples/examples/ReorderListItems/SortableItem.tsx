import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { DotsSixVerticalIcon, TrashIcon } from '@phosphor-icons/react';
import { ActionIcon, Group, TextInput } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { TasksValues } from './types';

interface SortableItemProps {
  id: string;
  index: number;
  form: UseFormReturnType<TasksValues>;
}

export function SortableItem({ id, index, form }: SortableItemProps) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  return (
    <Group
      ref={setNodeRef}
      gap="xs"
      wrap="nowrap"
      align="flex-start"
      style={{ transform: CSS.Transform.toString(transform), transition }}
    >
      <ActionIcon
        variant="default"
        size="input-md"
        aria-label="Drag to reorder"
        style={{ cursor: 'grab', touchAction: 'none' }}
        {...attributes}
        {...listeners}
      >
        <DotsSixVerticalIcon size={18} />
      </ActionIcon>

      <TextInput
        size="md"
        placeholder="What needs to be done?"
        aria-label="Task"
        style={{ flex: 1 }}
        {...form.getInputProps(`items.${index}.title`)}
      />

      <ActionIcon
        variant="default"
        size="input-md"
        aria-label="Remove task"
        onClick={() => form.removeListItem('items', index)}
      >
        <TrashIcon size={18} color="var(--mantine-color-red-6)" />
      </ActionIcon>
    </Group>
  );
}
