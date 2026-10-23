import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { IconGripVertical, IconTrash } from '@tabler/icons-react';
import { ActionIcon, Group, Select, Stack, Text } from '@mantine/core';
import { ACTION_PARAMS } from '../action-params';
import { ACTION_TYPES, REPEATABLE_ACTIONS } from '../constants';
import type { ActionType, RuleFormType } from '../types';
import classes from './ActionRow.module.css';

interface ActionRowProps {
  form: RuleFormType;
  id: string;
  index: number;
  /** Types picked by the other actions of the list */
  usedTypes: ActionType[];
  onRemove: () => void;
}

export function ActionRow({ form, id, index, usedTypes, onRemove }: ActionRowProps) {
  const path = `actions.${index}`;
  const type = form.useWatchValue(`${path}.type`) as ActionType | null;
  const Params = type ? ACTION_PARAMS[type] : null;
  const label = `Action ${index + 1}`;
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const typeOptions = ACTION_TYPES.map((option) => ({
    ...option,
    disabled: !REPEATABLE_ACTIONS.includes(option.value) && usedTypes.includes(option.value),
  }));

  return (
    <div
      ref={setNodeRef}
      role="group"
      aria-label={label}
      className={classes.row}
      data-dragging={isDragging || undefined}
      style={{ transform: CSS.Translate.toString(transform), transition }}
    >
      <Group justify="space-between" wrap="nowrap" mb="sm">
        <Group gap="xs" wrap="nowrap">
          <ActionIcon
            ref={setActivatorNodeRef}
            variant="default"
            className={classes.handle}
            aria-label={`Reorder action ${index + 1}`}
            {...attributes}
            {...listeners}
          >
            <IconGripVertical size={16} />
          </ActionIcon>
          <Text size="sm" className={classes.title}>
            {label}
          </Text>
        </Group>
        <ActionIcon variant="default" aria-label={`Remove action ${index + 1}`} onClick={onRemove}>
          <IconTrash size={16} color="var(--mantine-color-red-text)" />
        </ActionIcon>
      </Group>

      <Stack gap="xs">
        <Select
          label="Action type"
          placeholder="Pick an action"
          data={typeOptions}
          withAsterisk
          allowDeselect={false}
          {...form.getInputProps(`${path}.type`)}
        />
        {Params && <Params form={form} path={path} />}
      </Stack>
    </div>
  );
}
