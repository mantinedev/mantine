export type ClientPositionEvent = MouseEvent | TouchEvent;

export function getClientPosition(event: ClientPositionEvent) {
  if (event instanceof TouchEvent) {
    const touch = event.touches[0];
    return touch.clientX;
  }

  return event.clientX;
}
