export interface UseDrawerTransformInput {
  position: 'top' | 'bottom' | 'left' | 'right';
  dragging: boolean;
  dragOffset: number;
}

export interface DrawerInnerStyle {
  transform?: string;
  transition?: string;
}

function getDragTranslate(position: UseDrawerTransformInput['position'], dragOffset: number) {
  switch (position) {
    case 'bottom':
      return `translateY(${dragOffset}px)`;
    case 'top':
      return `translateY(${-dragOffset}px)`;
    case 'right':
      return `translateX(${dragOffset}px)`;
    case 'left':
    default:
      return `translateX(${-dragOffset}px)`;
  }
}

export function getDrawerInnerStyle({
  position,
  dragging,
  dragOffset,
}: UseDrawerTransformInput): DrawerInnerStyle {
  return {
    transform: dragOffset !== 0 ? getDragTranslate(position, dragOffset) : undefined,
    transition: dragging ? 'none' : undefined,
  };
}
