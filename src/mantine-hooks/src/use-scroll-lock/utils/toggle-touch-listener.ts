function preventDefault(event: Event) {
  event.preventDefault();
}

export function toggleTouchListener(lock: boolean) {
  if (lock) {
    document.addEventListener('touchmove', preventDefault, { passive: false });
  } else {
    document.removeEventListener('touchmove', preventDefault);
  }
}
