import { useEffect, useRef } from 'react';
import { offset, useFloating } from '@floating-ui/react';
import { useMergedRef } from '@mantine/hooks';
import { UnstyledButton } from '../UnstyledButton';
import { pressAwareAutoUpdate } from './press-aware-auto-update';
import { useTargetElement, type TourTarget } from './use-target-rect';

interface TourBeaconPositionedProps {
  target: TourTarget;
  onClick: () => void;
  ariaLabel: string;
  className?: string;
  style?: React.CSSProperties;
  pulseStyles?: Record<string, unknown>;
  withInitialFocus?: boolean;
  onInitialFocus?: () => void;
}

export function TourBeaconPositioned({
  target,
  onClick,
  ariaLabel,
  className,
  style,
  pulseStyles,
  withInitialFocus,
  onInitialFocus,
}: TourBeaconPositionedProps) {
  const element = useTargetElement(target);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { refs, floatingStyles } = useFloating({
    elements: { reference: element },
    placement: 'top-end',
    whileElementsMounted: pressAwareAutoUpdate,
    middleware: [offset({ mainAxis: -4, crossAxis: -4 })],
  });

  const mergedRef = useMergedRef(refs.setFloating, buttonRef);

  useEffect(() => {
    if (withInitialFocus && buttonRef.current) {
      buttonRef.current.focus({ preventScroll: true });
      onInitialFocus?.();
    }
  }, [withInitialFocus, element]);

  if (!element) {
    return null;
  }

  return (
    <UnstyledButton
      ref={mergedRef}
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
