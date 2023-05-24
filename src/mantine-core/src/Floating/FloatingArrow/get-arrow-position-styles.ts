import { CSSObject, rem } from '@mantine/styles';
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
  arrowSize,
  arrowOffset,
  arrowRadius,
  arrowPosition,
  arrowX,
  arrowY,
  dir,
}: {
  position: FloatingPosition;
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
    width: rem(arrowSize),
    height: rem(arrowSize),
    transform: 'rotate(45deg)',
    position: 'absolute',
    [radiusByFloatingSide[side]]: rem(arrowRadius),
  };

  const arrowPlacement = rem(-arrowSize / 2);

  if (side === 'left') {
    return {
      ...baseStyles,
      ...horizontalSide(placement, arrowY, arrowOffset, arrowPosition),
      right: arrowPlacement,
      borderLeftColor: 'transparent',
      borderBottomColor: 'transparent',
    };
  }

  if (side === 'right') {
    return {
      ...baseStyles,
      ...horizontalSide(placement, arrowY, arrowOffset, arrowPosition),
      left: arrowPlacement,
      borderRightColor: 'transparent',
      borderTopColor: 'transparent',
    };
  }

  if (side === 'top') {
    return {
      ...baseStyles,
      ...verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir),
      bottom: arrowPlacement,
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
    };
  }

  if (side === 'bottom') {
    return {
      ...baseStyles,
      ...verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir),
      top: arrowPlacement,
      borderBottomColor: 'transparent',
      borderRightColor: 'transparent',
    };
  }

  return {};
}
