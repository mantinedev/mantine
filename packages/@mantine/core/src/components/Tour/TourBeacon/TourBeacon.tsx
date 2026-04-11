import { useEffect, useState } from 'react';
import { offset, useFloating } from '@floating-ui/react';
import {
  BoxProps,
  CompoundStylesApiProps,
  ElementProps,
  factory,
  Factory,
  useProps,
} from '../../../core';
import { UnstyledButton } from '../../UnstyledButton';
import { useTourContext } from '../Tour.context';
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
    ref: _ref,
    role: _role,
    'aria-label': ariaLabel,
    ...others
  } = props;

  const ctx = useTourContext();
  const [element, setElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!target) {
      setElement(null);
      return;
    }

    const el =
      typeof target === 'string'
        ? document.querySelector<HTMLElement>(target)
        : target?.current || null;

    setElement(el);
  }, [target]);

  const { refs, floatingStyles } = useFloating({
    elements: { reference: element },
    placement: 'right-start',
    middleware: [offset(8)],
  });

  if (!element) {
    return null;
  }

  return (
    <UnstyledButton
      ref={refs.setFloating}
      role="button"
      aria-label={ariaLabel || ctx.labels.beacon}
      {...ctx.getStyles('beacon', { className, classNames, style, styles })}
      style={{
        ...ctx.getStyles('beacon').style,
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
