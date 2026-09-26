export type DrawerPosition = 'top' | 'bottom' | 'left' | 'right';

export type DrawerAxis = 'x' | 'y';

export function getAxis(position: DrawerPosition): DrawerAxis {
  return position === 'top' || position === 'bottom' ? 'y' : 'x';
}

export function resolvePosition(position: DrawerPosition, dir: 'ltr' | 'rtl'): DrawerPosition {
  if (dir === 'rtl' && position === 'left') {
    return 'right';
  }

  if (dir === 'rtl' && position === 'right') {
    return 'left';
  }

  return position;
}

export interface UseDrawerTransformInput {
  position: DrawerPosition;
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
