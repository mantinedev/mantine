import { createContext, useContext } from 'react';
import { DropTarget, ScheduleEventData } from '../../types';

export interface DragContextValue {
  /** Whether an event is currently being dragged */
  isDragging: boolean;

  /** ID of the event being dragged */
  draggedEventId: string | number | null;

  /** The event being dragged */
  draggedEvent: ScheduleEventData | null;

  /** Current drop target information */
  dropTarget: DropTarget | null;

  /** Called when drag starts */
  onDragStart: (event: ScheduleEventData) => void;

  /** Called when drag ends */
  onDragEnd: () => void;

  /** Set the current drop target */
  setDropTarget: (target: DropTarget | null) => void;
}

export const DragContext = createContext<DragContextValue | null>(null);

export function useDragContext(): DragContextValue {
  const context = useContext(DragContext);

  if (!context) {
    throw new Error('useDragContext must be used within DragContext.Provider');
  }

  return context;
}
