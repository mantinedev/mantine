import { CSSObject } from '@mantine/styles';
import type { FloatingPosition, FloatingSide, FloatingPlacement } from '../types';

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
  arrowRadius,
  arrowX,
  arrowY,
}: {
  position: FloatingPosition;
  withBorder: boolean;
  arrowSize: number;
  arrowRadius: number;
  arrowX: number;
  arrowY: number;
}) {
  const [side] = position.split('-') as [FloatingSide, FloatingPlacement];
  const baseStyles = {
    width: arrowSize,
    height: arrowSize,
    transform: 'rotate(45deg)',
    position: 'absolute',
    [radiusByFloatingSide[side]]: arrowRadius,
  };

  const arrowPosition = withBorder ? -arrowSize / 2 - 1 : -arrowSize / 2;

  if (side === 'left') {
    return {
      ...baseStyles,
      top: arrowY,
      right: arrowPosition,
      borderLeft: 0,
      borderBottom: 0,
    };
  }

  if (side === 'right') {
    return {
      ...baseStyles,
      top: arrowY,
      left: arrowPosition,
      borderRight: 0,
      borderTop: 0,
    };
  }

  if (side === 'top') {
    return {
      ...baseStyles,
      left: arrowX,
      bottom: arrowPosition,
      borderTop: 0,
      borderLeft: 0,
    };
  }

  if (side === 'bottom') {
    return {
      ...baseStyles,
      left: arrowX,
      top: arrowPosition,
      borderBottom: 0,
      borderRight: 0,
    };
  }

  return {};
}
