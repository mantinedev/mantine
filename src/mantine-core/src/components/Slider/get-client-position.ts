export type Coordinates = { x: number; y: number };
export type ClientPositionEvent = MouseEvent | TouchEvent;

export function getClientPosition(event: ClientPositionEvent): Coordinates {
  if (event instanceof TouchEvent) {
    const touch = event.touches[0];
    return {
      x: touch.clientX,
      y: touch.clientY,
    };
  }

  return {
    x: event.clientX,
    y: event.clientY,
  };
}
