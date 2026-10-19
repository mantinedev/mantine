import { IconGripVertical, IconPencil, IconTrash } from '@tabler/icons-react';
import { ActionIcon, Group, Surface, Text, ThemeIcon } from '@mantine/core';
import { getFieldType } from './fieldTypes';
import { useSortableRow } from './Sortable';
import type { FieldValues } from './types';
import classes from './FieldRow.module.css';

interface FieldRowProps {
  field: FieldValues;
  onEdit: () => void;
  onRemove: () => void;
}

export function FieldRow({ field, onEdit, onRemove }: FieldRowProps) {
  const { rowProps, handleProps } = useSortableRow(field.id);
  const type = getFieldType(field.type);

  return (
    <div {...rowProps}>
      <Surface withBorder p="sm">
        <Group gap="sm" wrap="nowrap">
          <ActionIcon
            variant="default"
            size="lg"
            aria-label={`Reorder field ${field.label}`}
            {...handleProps}
          >
            <IconGripVertical size={18} />
          </ActionIcon>
          <ThemeIcon variant="default" size="lg" aria-hidden>
            <type.icon size={18} color={`var(--mantine-color-${type.color}-text)`} />
          </ThemeIcon>
          <div className={classes.texts}>
            <Text size="sm" fw={500} truncate>
              {field.label}
              {field.required && (
                <span className={classes.required} aria-label="required">
                  *
                </span>
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
    </div>
  );
}
