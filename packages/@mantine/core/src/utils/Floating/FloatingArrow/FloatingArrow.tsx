import { useDirection } from '../../../core';
import { ArrowPosition, FloatingPosition } from '../types';
import { getArrowPositionStyles } from './get-arrow-position-styles';

interface FloatingArrowProps extends React.ComponentProps<'div'> {
  position: FloatingPosition;
  arrowSize: number;
  arrowOffset: number;
  arrowRadius: number;
  arrowPosition: ArrowPosition;
  arrowX: number | undefined;
  arrowY: number | undefined;
  visible: boolean | undefined;
}

export function FloatingArrow({
  position,
  arrowSize,
  arrowOffset,
  arrowRadius,
  arrowPosition,
  visible,
  arrowX,
  arrowY,
  style,
  ...others
}: FloatingArrowProps) {
  const { dir } = useDirection();
  if (!visible) {
    return null;
  }

  return (
    <div
      {...others}
      style={{
        ...style,
        ...getArrowPositionStyles({
          position,
          arrowSize,
          arrowOffset,
          arrowRadius,
          arrowPosition,
          dir,
          arrowX,
          arrowY,
        }),
      }}
    />
  );
}

FloatingArrow.displayName = '@mantine/core/FloatingArrow';
