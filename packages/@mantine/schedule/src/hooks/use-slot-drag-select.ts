import { useCallback, useEffect, useRef, useState } from 'react';

interface DragState {
  group: string;
  startIndex: number;
  currentIndex: number;
}

interface SelectedRange {
  group: string;
  start: number;
  end: number;
}

interface UseSlotDragSelectInput {
  enabled?: boolean;
  onDragEnd?: (startIndex: number, endIndex: number, group: string) => void;
}

export function useSlotDragSelect({ enabled = true, onDragEnd }: UseSlotDragSelectInput) {
  const [selectedRange, setSelectedRange] = useState<SelectedRange | null>(null);
  const dragRef = useRef<DragState | null>(null);
  const onDragEndRef = useRef(onDragEnd);
  onDragEndRef.current = onDragEnd;

  const handleSlotPointerDown = useCallback(
    (_event: React.PointerEvent<HTMLButtonElement>, index: number, group: string) => {
      if (!enabled) {
        return;
      }
      dragRef.current = { group, startIndex: index, currentIndex: index };
      setSelectedRange({ group, start: index, end: index });
    },
    [enabled]
  );

  const isDragging = selectedRange !== null;

  useEffect(() => {
    if (!isDragging) {
      return undefined;
    }

    const savedUserSelect = document.body.style.userSelect;
    document.body.style.userSelect = 'none';

    const handlePointerMove = (e: PointerEvent) => {
      if (!dragRef.current) {
        return;
      }

      const elements = document.elementsFromPoint(e.clientX, e.clientY);
      for (const el of elements) {
        const indexAttr = (el as HTMLElement).getAttribute?.('data-drag-slot-index');
        const groupAttr = (el as HTMLElement).getAttribute?.('data-drag-slot-group');
        if (indexAttr != null && groupAttr != null) {
          if (groupAttr === dragRef.current.group) {
            const newIndex = Number(indexAttr);
            if (!isNaN(newIndex) && newIndex !== dragRef.current.currentIndex) {
              dragRef.current.currentIndex = newIndex;
              setSelectedRange({
                group: groupAttr,
                start: Math.min(dragRef.current.startIndex, newIndex),
                end: Math.max(dragRef.current.startIndex, newIndex),
              });
            }
          }
          break;
        }
      }
    };

    const handlePointerUp = () => {
      if (dragRef.current) {
        const { startIndex, currentIndex, group } = dragRef.current;
        if (startIndex !== currentIndex) {
          onDragEndRef.current?.(
            Math.min(startIndex, currentIndex),
            Math.max(startIndex, currentIndex),
            group
          );
        }
      }
      dragRef.current = null;
      setSelectedRange(null);
    };

    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);

    return () => {
      document.body.style.userSelect = savedUserSelect;
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };
  }, [isDragging]);

  const isSlotSelected = useCallback(
    (index: number, group: string): boolean => {
      if (!selectedRange || selectedRange.group !== group) {
        return false;
      }
      return index >= selectedRange.start && index <= selectedRange.end;
    },
    [selectedRange]
  );

  return {
    handleSlotPointerDown,
    isSlotSelected,
    isDragging,
  };
}
