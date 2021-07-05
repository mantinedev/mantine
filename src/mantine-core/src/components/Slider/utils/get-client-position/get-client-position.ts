export function getClientPosition(event: any) {
  if (Array.isArray(event.touches)) {
    const touch = event.touches[0];
    return touch.clientX;
  }

  return event.clientX;
}
