import type { ArrowPosition, FloatingPlacement, FloatingPosition, FloatingSide } from '../types';

function horizontalSide(
  placement: FloatingPlacement | 'center',
  arrowY: number | undefined,
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
  arrowX: number | undefined,
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
    React.CSSProperties,
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

function getMergeArrowStyles({
  position,
  arrowSize,
  dir,
}: {
  position: FloatingPosition;
  arrowSize: number;
  dir: 'rtl' | 'ltr';
}) {
  const [side, placement] = position.split('-') as [FloatingSide, FloatingPlacement | undefined];

  if (!placement) {
    return undefined;
  }

  const baseStyles = {
    width: arrowSize,
    height: arrowSize,
    position: 'absolute' as const,
  };

  if (side === 'bottom') {
    const isStart = placement === 'start';
    const physicalSide = isStart
      ? dir === 'ltr'
        ? 'left'
        : 'right'
      : dir === 'ltr'
        ? 'right'
        : 'left';

    return {
      ...baseStyles,
      top: -arrowSize,
      [physicalSide]: 0,
      clipPath:
        isStart !== (dir === 'rtl')
          ? 'polygon(0% 0%, 0% 100%, 100% 100%)'
          : 'polygon(100% 0%, 0% 100%, 100% 100%)',
    };
  }

  if (side === 'top') {
    const isStart = placement === 'start';
    const physicalSide = isStart
      ? dir === 'ltr'
        ? 'left'
        : 'right'
      : dir === 'ltr'
        ? 'right'
        : 'left';

    return {
      ...baseStyles,
      bottom: -arrowSize,
      [physicalSide]: 0,
      clipPath:
        isStart !== (dir === 'rtl')
          ? 'polygon(0% 0%, 100% 0%, 0% 100%)'
          : 'polygon(0% 0%, 100% 0%, 100% 100%)',
    };
  }

  if (side === 'left') {
    return {
      ...baseStyles,
      right: -arrowSize,
      [placement === 'start' ? 'top' : 'bottom']: 0,
      clipPath:
        placement === 'start'
          ? 'polygon(0% 0%, 100% 0%, 0% 100%)'
          : 'polygon(0% 0%, 0% 100%, 100% 100%)',
    };
  }

  if (side === 'right') {
    return {
      ...baseStyles,
      left: -arrowSize,
      [placement === 'start' ? 'top' : 'bottom']: 0,
      clipPath:
        placement === 'start'
          ? 'polygon(0% 0%, 100% 0%, 100% 100%)'
          : 'polygon(100% 0%, 0% 100%, 100% 100%)',
    };
  }

  return undefined;
}

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
  arrowX: number | undefined;
  arrowY: number | undefined;
  dir: 'rtl' | 'ltr';
}) {
  if (arrowPosition === 'merge') {
    return getMergeArrowStyles({ position, arrowSize, dir }) || {};
  }

  const [side, placement = 'center'] = position.split('-') as [FloatingSide, FloatingPlacement];
  const baseStyles = {
    width: arrowSize,
    height: arrowSize,
    transform: 'rotate(45deg)',
    position: 'absolute',
    [radiusByFloatingSide[side]]: arrowRadius,
  };

  const arrowPlacement = -arrowSize / 2;

  if (side === 'left') {
    return {
      ...baseStyles,
      ...horizontalSide(placement, arrowY, arrowOffset, arrowPosition),
      right: arrowPlacement,
      borderLeftColor: 'transparent',
      borderBottomColor: 'transparent',
      clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
    };
  }

  if (side === 'right') {
    return {
      ...baseStyles,
      ...horizontalSide(placement, arrowY, arrowOffset, arrowPosition),
      left: arrowPlacement,
      borderRightColor: 'transparent',
      borderTopColor: 'transparent',
      clipPath: 'polygon(0 100%, 0 0, 100% 100%)',
    };
  }

  if (side === 'top') {
    return {
      ...baseStyles,
      ...verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir),
      bottom: arrowPlacement,
      borderTopColor: 'transparent',
      borderLeftColor: 'transparent',
      clipPath: 'polygon(0 100%, 100% 100%, 100% 0)',
    };
  }

  if (side === 'bottom') {
    return {
      ...baseStyles,
      ...verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir),
      top: arrowPlacement,
      borderBottomColor: 'transparent',
      borderRightColor: 'transparent',
      clipPath: 'polygon(0 100%, 0 0, 100% 0)',
    };
  }

  return {};
}

export function getArrowMergeDropdownStyles({
  position,
  dir,
}: {
  position: FloatingPosition;
  dir: 'rtl' | 'ltr';
}): React.CSSProperties | undefined {
  const [side, placement] = position.split('-') as [FloatingSide, FloatingPlacement | undefined];

  if (!placement) {
    return undefined;
  }

  const isPhysicallyLeft =
    (placement === 'start' && dir === 'ltr') || (placement === 'end' && dir === 'rtl');

  if (side === 'bottom') {
    return isPhysicallyLeft ? { borderTopLeftRadius: 0 } : { borderTopRightRadius: 0 };
  }

  if (side === 'top') {
    return isPhysicallyLeft ? { borderBottomLeftRadius: 0 } : { borderBottomRightRadius: 0 };
  }

  if (side === 'left') {
    return placement === 'start' ? { borderTopRightRadius: 0 } : { borderBottomRightRadius: 0 };
  }

  if (side === 'right') {
    return placement === 'start' ? { borderTopLeftRadius: 0 } : { borderBottomLeftRadius: 0 };
  }

  return undefined;
}
