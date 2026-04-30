export function getClientPosition(event: any, orientation?: 'horizontal' | 'vertical') {
  if ('TouchEvent' in window && event instanceof window.TouchEvent) {
    const touch = event.touches[0];
    return orientation === 'vertical' ? touch.clientY : touch.clientX;
  }

  return orientation === 'vertical' ? event.clientY : event.clientX;
}
