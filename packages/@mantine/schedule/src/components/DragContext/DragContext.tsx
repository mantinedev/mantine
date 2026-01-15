import { createContext } from 'react';
import { DropTarget, ScheduleEventData } from '../../types';

export interface DragContextValue {
  /** Whether an event is currently being dragged */
  isDragging?: boolean;

  /** ID of the event being dragged */
  draggedEventId?: string | number | null;

  /** The event being dragged */
  draggedEvent?: ScheduleEventData | null;

  /** Current drop target information */
  dropTarget?: DropTarget | null;

  /** Called when drag starts */
  onDragStart?: (event: ScheduleEventData) => void;

  /** Called when drag ends */
  onDragEnd?: () => void;

  /** Set the current drop target */
  setDropTarget?: (target: DropTarget | null) => void;
}

export const DragContext = createContext<DragContextValue>({});
