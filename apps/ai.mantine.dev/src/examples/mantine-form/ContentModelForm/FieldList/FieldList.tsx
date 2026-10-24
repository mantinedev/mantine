import type { RefObject } from 'react';
import { closestCenter, DndContext, type DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { IconPlus } from '@tabler/icons-react';
import { Button, Group, Input, Stack, Text } from '@mantine/core';
import { getMove, useSortableSensors } from '../dnd';
import { FieldRow } from '../FieldRow/FieldRow';
import type { ContentModelFormType } from '../types';
import classes from './FieldList.module.css';

interface FieldListProps {
  form: ContentModelFormType;
  addButtonRef: RefObject<HTMLButtonElement | null>;
  onAdd: () => void;
  onEdit: (index: number) => void;
}

export function FieldList({ form, addButtonRef, onAdd, onEdit }: FieldListProps) {
  const fields = form.useWatchValue('fields');
  const sensors = useSortableSensors();
  const ids = fields.map((field) => field.id);

  const handleDragEnd = (event: DragEndEvent) => {
    const move = getMove(ids, event);
    move && form.reorderListItem('fields', move);
  };

  return (
    <Stack gap="xs">
      {fields.length > 0 ? (
        <DndContext
          id="field-list"
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext items={ids} strategy={verticalListSortingStrategy}>
            <ul className={classes.list} aria-label="Fields">
              {fields.map((field, index) => (
                <FieldRow
                  key={field.id}
                  field={field}
                  onEdit={() => onEdit(index)}
                  onRemove={() => form.removeListItem('fields', index)}
                />
              ))}
            </ul>
          </SortableContext>
        </DndContext>
      ) : (
        <Text size="sm">No fields added</Text>
      )}

      {form.errors.fields && <Input.Error>{form.errors.fields}</Input.Error>}

      <Group>
        <Button
          ref={addButtonRef}
          variant="default"
          leftSection={<IconPlus size={18} />}
          onClick={onAdd}
        >
          Add field
        </Button>
      </Group>
    </Stack>
  );
}
