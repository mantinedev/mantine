import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { IconGripVertical, IconPencil, IconTrash } from '@tabler/icons-react';
import { ActionIcon, Group, Surface, Text, ThemeIcon, VisuallyHidden } from '@mantine/core';
import { FIELD_TYPES } from '../constants';
import type { ModelField } from '../types';
import classes from './FieldRow.module.css';

interface FieldRowProps {
  field: ModelField;
  onEdit: () => void;
  onRemove: () => void;
}

export function FieldRow({ field, onEdit, onRemove }: FieldRowProps) {
  const type = FIELD_TYPES[field.type];
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: field.id });

  return (
    <Surface
      component="li"
      withBorder
      p="sm"
      ref={setNodeRef}
      className={classes.row}
      data-dragging={isDragging || undefined}
      style={{ transform: CSS.Transform.toString(transform), transition }}
    >
      <Group gap="sm" wrap="nowrap">
        <ActionIcon
          variant="default"
          size="lg"
          className={classes.handle}
          aria-label={`Reorder field ${field.label}`}
          ref={setActivatorNodeRef}
          {...attributes}
          {...listeners}
        >
          <IconGripVertical size={18} />
        </ActionIcon>

        <ThemeIcon variant="default" size="lg" aria-hidden>
          <type.icon size={18} color={`var(--mantine-color-${type.color}-text)`} />
        </ThemeIcon>

        <div className={classes.texts}>
          <Text size="sm" className={classes.label} truncate>
            {field.label}
            {field.required && (
              <>
                <span className={classes.required} aria-hidden>
                  *
                </span>
                <VisuallyHidden>(required)</VisuallyHidden>
              </>
            )}
          </Text>
          <Text size="xs" truncate>
            <span className={classes.key}>{field.key}</span> · {type.label}
          </Text>
        </div>

        <Group gap={6} wrap="nowrap">
          <ActionIcon
            variant="default"
            size="lg"
            aria-label={`Edit field ${field.label}`}
            onClick={onEdit}
          >
            <IconPencil size={18} />
          </ActionIcon>
          <ActionIcon
            variant="default"
            size="lg"
            aria-label={`Remove field ${field.label}`}
            onClick={onRemove}
          >
            <IconTrash size={18} color="var(--mantine-color-red-text)" />
          </ActionIcon>
        </Group>
      </Group>
    </Surface>
  );
}
