import type { FloatingPosition, FloatingSide, FloatingPlacement } from '../types';

function horizontalSide(
  placement: FloatingPlacement | 'center',
  arrowSize: number,
  arrowOffset: number
) {
  if (placement === 'center') {
    return { top: `calc(50% - ${arrowSize / 2}px)` };
  }

  if (placement === 'end') {
    return { bottom: arrowOffset };
  }

  if (placement === 'start') {
    return { top: arrowOffset };
  }

  return {};
}

function verticalSide(
  placement: FloatingPlacement | 'center',
  arrowSize: number,
  arrowOffset: number,
  dir: 'rtl' | 'ltr'
) {
  if (placement === 'center') {
    return { left: `calc(50% - ${arrowSize / 2}px)` };
  }

  if (placement === 'end') {
    return { [dir === 'ltr' ? 'right' : 'left']: arrowOffset };
  }

  if (placement === 'start') {
    return { [dir === 'ltr' ? 'left' : 'right']: arrowOffset };
  }

  return {};
}

export function getArrowPositionStyles({
  position,
  withBorder,
  arrowSize,
  arrowOffset,
  dir,
}: {
  position: FloatingPosition;
  withBorder: boolean;
  arrowSize: number;
  arrowOffset: number;
  dir: 'rtl' | 'ltr';
}) {
  const [side, placement = 'center'] = position.split('-') as [FloatingSide, FloatingPlacement];
  const baseStyles = {
    width: arrowSize,
    height: arrowSize,
    transform: 'rotate(45deg)',
    position: 'absolute',
  };

  const arrowPosition = withBorder ? -arrowSize / 2 - 1 : -arrowSize / 2;

  if (side === 'left') {
    return {
      ...baseStyles,
      ...horizontalSide(placement, arrowSize, arrowOffset),
      [dir === 'ltr' ? 'right' : 'left']: arrowPosition,
      [dir === 'ltr' ? 'borderLeft' : 'borderRight']: 0,
      borderBottom: 0,
    };
  }

  if (side === 'right') {
    return {
      ...baseStyles,
      ...horizontalSide(placement, arrowSize, arrowOffset),
      [dir === 'ltr' ? 'left' : 'right']: arrowPosition,
      [dir === 'ltr' ? 'borderRight' : 'borderLeft']: 0,
      borderTop: 0,
    };
  }

  if (side === 'top') {
    return {
      ...baseStyles,
      ...verticalSide(placement, arrowSize, arrowOffset, dir),
      bottom: arrowPosition,
      borderTop: 0,
      [dir === 'ltr' ? 'borderLeft' : 'borderRight']: 0,
    };
  }

  if (side === 'bottom') {
    return {
      ...baseStyles,
      ...verticalSide(placement, arrowSize, arrowOffset, dir),
      top: arrowPosition,
      borderBottom: 0,
      [dir === 'ltr' ? 'borderRight' : 'borderLeft']: 0,
    };
  }

  return {};
}
