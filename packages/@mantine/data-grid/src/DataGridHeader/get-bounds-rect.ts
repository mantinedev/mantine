import type React from 'react';

export function getBoundsRect(
  scrollContainerRef: React.RefObject<HTMLElement | null>,
  rootRef: React.RefObject<HTMLElement | null>
) {
  const bounds = scrollContainerRef.current ?? rootRef.current;
  return bounds ? bounds.getBoundingClientRect() : null;
}
