import { useRef } from 'react';
import { movePill, PillReorderPosition } from './move-pill';

export interface PillReorderProps {
  draggable: boolean;
  onMouseDown: (event: React.MouseEvent<HTMLElement>) => void;
  onDragStart: (event: React.DragEvent<HTMLElement>) => void;
  onDragOver: (event: React.DragEvent<HTMLElement>) => void;
  onDragLeave: (event: React.DragEvent<HTMLElement>) => void;
  onDrop: (event: React.DragEvent<HTMLElement>) => void;
  onDragEnd: (event: React.DragEvent<HTMLElement>) => void;
}

export interface UsePillsReorderInput<T> {
  value: T[];
  onChange: (value: T[]) => void;
  enabled: boolean | undefined;
}

interface PillDragState {
  draggedIndex: number | null;
  currentDropTarget: HTMLElement | null;
}

export function usePillsReorder<T>({ value, onChange, enabled }: UsePillsReorderInput<T>) {
  const dragStateRef = useRef<PillDragState>({ draggedIndex: null, currentDropTarget: null });
  const valueRef = useRef(value);
  valueRef.current = value;

  const getPillProps = (index: number): PillReorderProps | undefined => {
    if (!enabled) {
      return undefined;
    }

    return {
      draggable: true,
      onMouseDown: (event) => {
        if (event.button === 0) {
          event.stopPropagation();
        }
      },
      onDragStart: (event) => {
        event.stopPropagation();
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', String(index));
        dragStateRef.current.draggedIndex = index;

        const target = event.currentTarget;
        const rect = target.getBoundingClientRect();
        const ghost = target.cloneNode(true) as HTMLElement;
        ghost.removeAttribute('data-dragging');
        ghost.removeAttribute('data-drag-over');
        ghost.style.position = 'fixed';
        ghost.style.top = '-9999px';
        ghost.style.left = '-9999px';
        ghost.style.width = `${rect.width}px`;
        ghost.style.height = `${rect.height}px`;
        ghost.style.pointerEvents = 'none';
        document.body.appendChild(ghost);
        event.dataTransfer.setDragImage(ghost, event.clientX - rect.left, event.clientY - rect.top);

        setTimeout(() => ghost.parentNode?.removeChild(ghost), 0);

        requestAnimationFrame(() => {
          target.setAttribute('data-dragging', 'true');
        });
      },
      onDragOver: (event) => {
        const { draggedIndex } = dragStateRef.current;
        if (draggedIndex === null || draggedIndex === index) {
          return;
        }

        const target = event.currentTarget;
        const rect = target.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const isRtl = getComputedStyle(target).direction === 'rtl';
        const isStart = isRtl ? x > rect.width / 2 : x < rect.width / 2;
        const position: PillReorderPosition = isStart ? 'before' : 'after';

        event.preventDefault();
        event.stopPropagation();
        event.dataTransfer.dropEffect = 'move';

        const prevTarget = dragStateRef.current.currentDropTarget;
        if (prevTarget && prevTarget !== target) {
          prevTarget.removeAttribute('data-drag-over');
        }

        target.setAttribute('data-drag-over', position);
        dragStateRef.current.currentDropTarget = target;
      },
      onDragLeave: (event) => {
        const target = event.currentTarget;
        const related = event.relatedTarget as Node | null;
        if (related && target.contains(related)) {
          return;
        }

        target.removeAttribute('data-drag-over');
        if (dragStateRef.current.currentDropTarget === target) {
          dragStateRef.current.currentDropTarget = null;
        }
      },
      onDrop: (event) => {
        event.preventDefault();
        event.stopPropagation();

        const target = event.currentTarget;
        const position = target.getAttribute('data-drag-over') as PillReorderPosition | null;
        target.removeAttribute('data-drag-over');

        const { draggedIndex } = dragStateRef.current;
        if (draggedIndex !== null && position && draggedIndex !== index) {
          const nextValue = movePill(valueRef.current, draggedIndex, index, position);
          if (nextValue !== valueRef.current) {
            onChange(nextValue);
          }
        }

        dragStateRef.current.draggedIndex = null;
        dragStateRef.current.currentDropTarget = null;
      },
      onDragEnd: (event) => {
        const target = event.currentTarget;
        target.removeAttribute('data-dragging');

        const prevTarget = dragStateRef.current.currentDropTarget;
        if (prevTarget) {
          prevTarget.removeAttribute('data-drag-over');
        }

        dragStateRef.current.draggedIndex = null;
        dragStateRef.current.currentDropTarget = null;
      },
    };
  };

  return { getPillProps };
}
