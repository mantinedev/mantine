import { ClientPositionEvent } from './get-client-position';

interface GetEventsManager {
  onDrag(event: ClientPositionEvent): void;
  onDragEnd(event: ClientPositionEvent): void;
}

export function getDragEventsAssigner({ onDrag, onDragEnd }: GetEventsManager) {
  const handleDrag = (event: ClientPositionEvent) => {
    event.preventDefault();
    onDrag(event);
  };

  const handleDragEnd = (event: ClientPositionEvent) => {
    event.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    removeEvents();
    onDragEnd(event);
  };

  const addEvents = () => {
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchmove', handleDrag, { passive: false });
    document.addEventListener('touchend', handleDragEnd);
    document.addEventListener('touchcancel', handleDragEnd);
  };

  function removeEvents() {
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', handleDragEnd);
    document.removeEventListener('touchmove', handleDrag);
    document.removeEventListener('touchend', handleDragEnd);
    document.removeEventListener('touchcancel', handleDragEnd);
  }

  return addEvents;
}
