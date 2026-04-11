import { offset, useFloating } from '@floating-ui/react';
import { UnstyledButton } from '../UnstyledButton';
import { useTargetRect } from './use-target-rect';

interface TourBeaconPositionedProps {
  target: string | React.RefObject<HTMLElement | null> | undefined;
  onClick: () => void;
  ariaLabel: string;
  className?: string;
  style?: React.CSSProperties;
  pulseStyles?: Record<string, unknown>;
}

export function TourBeaconPositioned({
  target,
  onClick,
  ariaLabel,
  className,
  style,
  pulseStyles,
}: TourBeaconPositionedProps) {
  const { element } = useTargetRect(target);

  const { refs, floatingStyles } = useFloating({
    elements: { reference: element },
    placement: 'top-end',
    middleware: [offset({ mainAxis: -4, crossAxis: -4 })],
  });

  if (!element) {
    return null;
  }

  return (
    <UnstyledButton
      ref={refs.setFloating}
      role="button"
      aria-label={ariaLabel}
      className={className}
      style={{ ...style, ...floatingStyles }}
      onClick={onClick}
    >
      <span {...pulseStyles} />
    </UnstyledButton>
  );
}
