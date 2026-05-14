import { useCallback, useEffect, useRef } from 'react';
import { movePill, PillReorderPosition } from './move-pill';

export interface PillReorderProps {
  draggable: boolean;
  tabIndex: number;
  'data-mantine-pill-index': number;
  'aria-keyshortcuts': string;
  onMouseDown: (event: React.MouseEvent<HTMLElement>) => void;
  onDragStart: (event: React.DragEvent<HTMLElement>) => void;
  onDragOver: (event: React.DragEvent<HTMLElement>) => void;
  onDragLeave: (event: React.DragEvent<HTMLElement>) => void;
  onDrop: (event: React.DragEvent<HTMLElement>) => void;
  onDragEnd: (event: React.DragEvent<HTMLElement>) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void;
}

export interface PillsReorderListProps {
  ref?: (node: HTMLDivElement | null) => void;
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

interface PendingFocus<T> {
  container: HTMLElement | null;
  index: number;
  expectedValue: T[];
}

const findSearchInput = (container: HTMLElement): HTMLInputElement | null => {
  const lastChild = container.lastElementChild;
  if (!lastChild) {
    return null;
  }
  if (lastChild instanceof HTMLInputElement) {
    return lastChild;
  }
  return lastChild.querySelector<HTMLInputElement>('input');
};

const valuesMatch = <T>(a: T[], b: T[]): boolean => {
  if (a === b) {
    return true;
  }
  if (a.length !== b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] !== b[i]) {
      return false;
    }
  }
  return true;
};

export function usePillsReorder<T>({ value, onChange, enabled }: UsePillsReorderInput<T>) {
  const dragStateRef = useRef<PillDragState>({ draggedIndex: null, currentDropTarget: null });
  const pendingFocusRef = useRef<PendingFocus<T> | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const valueRef = useRef(value);
  valueRef.current = value;

  useEffect(() => {
    const pending = pendingFocusRef.current;
    if (!pending) {
      return;
    }
    pendingFocusRef.current = null;
    if (!valuesMatch(valueRef.current, pending.expectedValue)) {
      return;
    }
    pending.container
      ?.querySelector<HTMLElement>(`[data-mantine-pill-index="${pending.index}"]`)
      ?.focus();
  });

  const setContainer = useCallback((node: HTMLDivElement | null) => {
    containerRef.current = node;
  }, []);

  const getListProps = (): PillsReorderListProps => {
    if (!enabled) {
      return {};
    }
    return { ref: setContainer };
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (!enabled || event.key !== 'ArrowLeft') {
      return;
    }

    const input = event.currentTarget;
    const caretAtStart =
      input.value.length === 0 || (input.selectionStart === 0 && input.selectionEnd === 0);
    if (!caretAtStart) {
      return;
    }

    const container = containerRef.current;
    if (!container) {
      return;
    }

    const pills = container.querySelectorAll<HTMLElement>('[data-mantine-pill-index]');
    if (pills.length === 0) {
      return;
    }

    event.preventDefault();
    pills[pills.length - 1].focus();
  };

  const getPillProps = (index: number): PillReorderProps | undefined => {
    if (!enabled) {
      return undefined;
    }

    return {
      draggable: true,
      tabIndex: -1,
      'data-mantine-pill-index': index,
      'aria-keyshortcuts': 'Alt+ArrowLeft Alt+ArrowRight',
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
      onKeyDown: (event) => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') {
          return;
        }

        const target = event.currentTarget;
        const isRtl = getComputedStyle(target).direction === 'rtl';
        const movingForward = isRtl ? event.key === 'ArrowLeft' : event.key === 'ArrowRight';
        const targetIndex = movingForward ? index + 1 : index - 1;

        if (event.altKey) {
          if (targetIndex < 0 || targetIndex >= valueRef.current.length) {
            return;
          }

          event.preventDefault();
          event.stopPropagation();

          const position: PillReorderPosition = movingForward ? 'after' : 'before';
          const nextValue = movePill(valueRef.current, index, targetIndex, position);
          if (nextValue === valueRef.current) {
            return;
          }

          pendingFocusRef.current = {
            container: target.parentElement,
            index: targetIndex,
            expectedValue: nextValue,
          };
          onChange(nextValue);
          return;
        }

        if (targetIndex < 0) {
          return;
        }

        const container = target.parentElement;
        if (!container) {
          return;
        }

        event.preventDefault();
        event.stopPropagation();

        if (targetIndex >= valueRef.current.length) {
          findSearchInput(container)?.focus();
          return;
        }

        container.querySelector<HTMLElement>(`[data-mantine-pill-index="${targetIndex}"]`)?.focus();
      },
    };
  };

  return { getPillProps, getListProps, handleInputKeyDown };
}
