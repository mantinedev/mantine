export function getClientPosition(event: any) {
  if ('TouchEvent' in window && event instanceof window.TouchEvent) {
    const touch = event.touches[0];
    return touch.clientX;
  }

  return event.clientX;
}
