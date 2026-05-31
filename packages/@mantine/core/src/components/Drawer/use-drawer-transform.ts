export interface UseDrawerTransformInput {
  position: 'top' | 'bottom' | 'left' | 'right';
  dragging: boolean;
  dragOffset: number;
  baseTransform?: string;
  baseOpacity?: number;
}

export interface DrawerInnerStyle {
  transform?: string;
  opacity?: number;
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
  baseTransform,
  baseOpacity,
}: UseDrawerTransformInput): DrawerInnerStyle {
  const dragTranslate = dragOffset !== 0 ? getDragTranslate(position, dragOffset) : null;

  const transform = [baseTransform, dragTranslate].filter(Boolean).join(' ') || undefined;

  return {
    transform,
    opacity: baseOpacity,
    transition: dragging ? 'none' : undefined,
  };
}
