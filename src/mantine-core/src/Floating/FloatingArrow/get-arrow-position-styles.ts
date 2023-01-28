import { CSSObject } from '@mantine/styles';
import type { FloatingPosition, FloatingSide, FloatingPlacement, ArrowPosition } from '../types';

function horizontalSide(
  placement: FloatingPlacement | 'center',
  arrowY: number,
  arrowOffset: number,
  arrowPosition: ArrowPosition
) {
  if (placement === 'center' || arrowPosition === 'center') {
    return { top: arrowY };
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
  arrowX: number,
  arrowOffset: number,
  arrowPosition: ArrowPosition,
  dir: 'rtl' | 'ltr'
) {
  if (placement === 'center' || arrowPosition === 'center') {
    return { left: arrowX };
  }

  if (placement === 'end') {
    return { [dir === 'ltr' ? 'right' : 'left']: arrowOffset };
  }

  if (placement === 'start') {
    return { [dir === 'ltr' ? 'left' : 'right']: arrowOffset };
  }

  return {};
}

const radiusByFloatingSide: Record<
  FloatingSide,
  keyof Pick<
    CSSObject,
    | 'borderBottomLeftRadius'
    | 'borderBottomRightRadius'
    | 'borderTopLeftRadius'
    | 'borderTopRightRadius'
  >
> = {
  bottom: 'borderTopLeftRadius',
  left: 'borderTopRightRadius',
  right: 'borderBottomLeftRadius',
  top: 'borderBottomRightRadius',
};

export function getArrowPositionStyles({
  position,
  withBorder,
  arrowSize,
  arrowOffset,
  arrowRadius,
  arrowPosition,
  arrowX,
  arrowY,
  dir,
}: {
  position: FloatingPosition;
  withBorder: boolean;
  arrowSize: number;
  arrowOffset: number;
  arrowRadius: number;
  arrowPosition: ArrowPosition;
  arrowX: number;
  arrowY: number;
  dir: 'rtl' | 'ltr';
}) {
  const [side, placement = 'center'] = position.split('-') as [FloatingSide, FloatingPlacement];
  const baseStyles = {
    width: arrowSize,
    height: arrowSize,
    transform: 'rotate(45deg)',
    position: 'absolute',
    [radiusByFloatingSide[side]]: arrowRadius,
  };

  const arrowPlacement = withBorder ? -arrowSize / 2 - 1 : -arrowSize / 2;

  if (side === 'left') {
    return {
      ...baseStyles,
      ...horizontalSide(placement, arrowY, arrowOffset, arrowPosition),
      right: arrowPlacement,
      borderLeft: 0,
      borderBottom: 0,
    };
  }

  if (side === 'right') {
    return {
      ...baseStyles,
      ...horizontalSide(placement, arrowY, arrowOffset, arrowPosition),
      left: arrowPlacement,
      borderRight: 0,
      borderTop: 0,
    };
  }

  if (side === 'top') {
    return {
      ...baseStyles,
      ...verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir),
      bottom: arrowPlacement,
      borderTop: 0,
      borderLeft: 0,
    };
  }

  if (side === 'bottom') {
    return {
      ...baseStyles,
      ...verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir),
      top: arrowPlacement,
      borderBottom: 0,
      borderRight: 0,
    };
  }

  return {};
}
