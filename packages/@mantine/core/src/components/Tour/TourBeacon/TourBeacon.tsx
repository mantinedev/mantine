import { offset, useFloating } from '@floating-ui/react';
import { useMergedRef } from '@mantine/hooks';
import {
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useDirection,
  useProps,
} from '../../../core';
import { getFloatingPosition } from '../../../utils/Floating';
import { UnstyledButton } from '../../UnstyledButton';
import { pressAwareAutoUpdate } from '../press-aware-auto-update';
import { useTourContext } from '../Tour.context';
import { useTargetElement } from '../use-target-rect';
import classes from '../Tour.module.css';

export type TourBeaconStylesNames = 'beacon' | 'beaconPulse';

export interface TourBeaconProps
  extends BoxProps, CompoundStylesApiProps<TourBeaconFactory>, ElementProps<'button'> {
  /** CSS selector or ref to the target element */
  target?: string | React.RefObject<HTMLElement | null>;

  /** Called when the beacon is clicked */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export type TourBeaconFactory = Factory<{
  props: TourBeaconProps;
  ref: HTMLButtonElement;
  stylesNames: TourBeaconStylesNames;
  compound: true;
}>;

const defaultProps: Partial<TourBeaconProps> = {};

export const TourBeacon = factory<TourBeaconFactory>((_props) => {
  const props = useProps('TourBeacon', defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    target,
    onClick,
    ref,
    role: _role,
    'aria-label': ariaLabel,
    ...others
  } = props;

  const ctx = useTourContext();
  const { dir } = useDirection();
  const element = useTargetElement(target);

  const { refs, floatingStyles } = useFloating({
    elements: { reference: element },
    placement: getFloatingPosition(dir, 'right-start'),
    whileElementsMounted: pressAwareAutoUpdate,
    middleware: [offset(8)],
  });

  const mergedRef = useMergedRef(refs.setFloating, ref);
  const beaconStyles = ctx.getStyles('beacon', { className, classNames, style, styles });

  if (!element) {
    return null;
  }

  return (
    <UnstyledButton
      ref={mergedRef}
      role="button"
      aria-label={ariaLabel || ctx.labels.beacon}
      {...beaconStyles}
      style={{
        ...beaconStyles.style,
        ...floatingStyles,
      }}
      onClick={onClick}
      {...others}
    >
      <span {...ctx.getStyles('beaconPulse')} />
    </UnstyledButton>
  );
});

TourBeacon.classes = classes;
TourBeacon.displayName = '@mantine/core/TourBeacon';

export namespace TourBeacon {
  export type Props = TourBeaconProps;
}
