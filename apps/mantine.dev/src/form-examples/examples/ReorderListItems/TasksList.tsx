import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { Input, Stack, Text } from '@mantine/core';
import { UseFormReturnType } from '@mantine/form';
import { SortableItem } from './SortableItem';
import { TasksValues } from './types';

interface TasksListProps {
  form: UseFormReturnType<TasksValues>;
}

export function TasksList({ form }: TasksListProps) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const ids = form.useWatchValue('items').map((item) => item.key);

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (over && active.id !== over.id) {
      form.reorderListItem('items', {
        from: ids.indexOf(String(active.id)),
        to: ids.indexOf(String(over.id)),
      });
    }
  };

  return (
    <div>
      <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={ids} strategy={verticalListSortingStrategy}>
          <Stack gap="xs">
            {ids.map((id, index) => (
              <SortableItem key={id} id={id} index={index} form={form} />
            ))}
          </Stack>
        </SortableContext>
      </DndContext>

      {ids.length === 0 && (
        <Text size="sm" ta="center">
          No tasks yet
        </Text>
      )}

      {form.errors.items && (
        <Input.Error size="md" mt="xs">
          {form.errors.items}
        </Input.Error>
      )}
    </div>
  );
}
