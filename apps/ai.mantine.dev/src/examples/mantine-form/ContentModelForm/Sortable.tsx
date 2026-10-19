import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import classes from './Sortable.module.css';

interface SortableListProps {
  ids: string[];
  onReorder: (move: { from: number; to: number }) => void;
  children: React.ReactNode;
}

export function SortableList({ ids, onReorder, children }: SortableListProps) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = ({ active, over }: DragEndEvent) => {
    if (over && active.id !== over.id) {
      onReorder({ from: ids.indexOf(String(active.id)), to: ids.indexOf(String(over.id)) });
    }
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={ids} strategy={verticalListSortingStrategy}>
        {children}
      </SortableContext>
    </DndContext>
  );
}

export function useSortableRow(id: string) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id,
  });

  return {
    rowProps: {
      ref: setNodeRef,
      className: classes.row,
      'data-dragging': isDragging || undefined,
      // dnd-kit moves rows with a transform computed on every pointer move
      style: { transform: CSS.Translate.toString(transform), transition },
    },
    handleProps: { ...attributes, ...listeners, className: classes.handle },
  };
}
