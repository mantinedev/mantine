import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { IconGripVertical, IconTrash } from '@tabler/icons-react';
import { ActionIcon, Select, Text } from '@mantine/core';
import { ACTION_PARAMS } from '../action-params';
import { ACTION_TYPES, createAction } from '../constants';
import type { ActionType, RuleAction, RuleFormType } from '../types';
import classes from './ActionRow.module.css';

interface ActionRowProps {
  form: RuleFormType;
  action: RuleAction;
  index: number;
  usedTypes: ActionType[];
  onRemove: () => void;
}

export function ActionRow({ form, action, index, usedTypes, onRemove }: ActionRowProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: action.id,
  });
  const label = `Action ${index + 1}`;
  const path = `actions.${index}`;
  const typeProps = form.getInputProps(`${path}.type`);
  const Params = action.type ? ACTION_PARAMS[action.type] : null;

  const typeOptions = ACTION_TYPES.map((type) => ({
    value: type.value,
    label: type.label,
    disabled: !type.repeatable && type.value !== action.type && usedTypes.includes(type.value),
  }));

  const handleTypeChange = (next: string | null) => {
    if (next === action.type) {
      return;
    }
    form.setFieldValue(path, createAction(next as ActionType | null, action.id));
  };

  return (
    <div
      ref={setNodeRef}
      role="group"
      aria-label={label}
      className={classes.row}
      data-dragging={isDragging || undefined}
      style={{ transform: CSS.Transform.toString(transform), transition }}
    >
      <div className={classes.header}>
        <ActionIcon
          variant="default"
          size="input-sm"
          aria-label={`Reorder action ${index + 1}`}
          className={classes.handle}
          {...attributes}
          {...listeners}
        >
          <IconGripVertical size={16} />
        </ActionIcon>
        <Text size="sm" className={classes.number}>
          {index + 1}.
        </Text>
        <Select
          aria-label={`${label} type`}
          placeholder="Pick an action"
          data={typeOptions}
          allowDeselect={false}
          className={classes.type}
          {...typeProps}
          onChange={handleTypeChange}
        />
        <ActionIcon
          variant="default"
          size="input-sm"
          aria-label={`Remove action ${index + 1}`}
          onClick={onRemove}
        >
          <IconTrash size={16} color="var(--mantine-color-red-text)" />
        </ActionIcon>
      </div>
      {Params && (
        <div className={classes.params}>
          <Params form={form} path={`${path}.params`} />
        </div>
      )}
    </div>
  );
}
