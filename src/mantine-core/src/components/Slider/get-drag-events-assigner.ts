import { ClientPositionEvent } from './get-client-position';

interface GetEventsManager {
  onDrag(event: ClientPositionEvent): void;
  onDragEnd(event: ClientPositionEvent): void;
}

export function getDragEventsAssigner({ onDrag, onDragEnd }: GetEventsManager) {
  const handleDrag = (event: ClientPositionEvent) => {
    if (event.cancelable) {
      event.preventDefault();
    }
    onDrag(event);
  };

  const handleDragEnd = (event: ClientPositionEvent) => {
    if (event.cancelable) {
      event.preventDefault();
    }
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    removeEvents();
    onDragEnd(event);
  };

  const assignEvents = () => {
    document.addEventListener('mousemove', handleDrag);
    document.addEventListener('mouseup', handleDragEnd);
    document.addEventListener('touchmove', handleDrag, { passive: false });
    document.addEventListener('touchend', handleDragEnd, { passive: false });
    document.addEventListener('touchcancel', handleDragEnd, { passive: false });
  };

  function removeEvents() {
    document.removeEventListener('mousemove', handleDrag);
    document.removeEventListener('mouseup', handleDragEnd);
    document.removeEventListener('touchmove', handleDrag);
    document.removeEventListener('touchend', handleDragEnd);
    document.removeEventListener('touchcancel', handleDragEnd);
  }

  return { assignEvents, removeEvents };
}
