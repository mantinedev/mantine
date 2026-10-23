import {
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';

export function useSortableSensors() {
  return useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 4 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );
}

export function getMove(ids: string[], { active, over }: DragEndEvent) {
  if (!over || active.id === over.id) {
    return null;
  }
  return { from: ids.indexOf(String(active.id)), to: ids.indexOf(String(over.id)) };
}
