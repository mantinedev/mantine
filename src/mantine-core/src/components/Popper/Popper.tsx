import React, { useState } from 'react';
import cx from 'clsx';
import { usePopper } from 'react-popper';
import { useDidUpdate } from '@mantine/hooks';
import useStyles from './Popper.styles';
import { Portal } from '../Portal/Portal';
import { Transition, MantineTransition } from '../Transition/Transition';

export interface SharedPopperProps {
  position?: 'top' | 'left' | 'bottom' | 'right';
  placement?: 'start' | 'center' | 'end';
  gutter?: number;
  arrowSize?: number;
  withArrow?: boolean;
  zIndex?: number;
}

export interface PopperProps<T extends HTMLElement> extends SharedPopperProps {
  referenceElement: T;
  children: React.ReactNode;
  mounted: boolean;
  transition: MantineTransition;
  transitionDuration: number;
  transitionTimingFunction?: string;
  arrowClassName?: string;
  arrowStyle?: React.CSSProperties;
  forceUpdateDependencies?: any[];
}

function parsePopperPosition(position: string) {
  if (typeof position !== 'string') {
    return { position: 'top', placement: 'center' };
  }

  const splitted = position.split('-');

  if (splitted.length === 1) {
    return { position, placement: 'center' };
  }

  return { position: splitted[0], placement: splitted[1] };
}

export function Popper<T extends HTMLElement = HTMLDivElement>({
  position = 'top',
  placement = 'center',
  gutter = 5,
  arrowSize = 2,
  withArrow = false,
  referenceElement,
  children,
  mounted,
  transition,
  transitionDuration,
  transitionTimingFunction,
  arrowClassName,
  arrowStyle,
  zIndex = 1000,
  forceUpdateDependencies = [],
}: PopperProps<T>) {
  const padding = withArrow ? gutter + arrowSize : gutter;
  const classes = useStyles({ arrowSize });
  const [popperElement, setPopperElement] = useState(null);

  const { styles, attributes, forceUpdate } = usePopper(referenceElement, popperElement, {
    placement: placement === 'center' ? position : `${position}-${placement}`,
    modifiers: [{ name: 'offset', options: { offset: [0, padding] } }],
  });

  const parsedAttributes = parsePopperPosition(attributes.popper?.['data-popper-placement']);

  useDidUpdate(() => {
    typeof forceUpdate === 'function' && forceUpdate();
  }, forceUpdateDependencies);

  return (
    <Transition
      mounted={mounted}
      duration={transitionDuration}
      transition={transition}
      timingFunction={transitionTimingFunction}
    >
      {(transitionStyles) => (
        <div>
          <Portal zIndex={zIndex}>
            <div
              ref={setPopperElement}
              style={{ ...styles.popper, pointerEvents: 'none' }}
              {...attributes.popper}
            >
              <div style={transitionStyles}>
                {children}
                {withArrow && (
                  <div
                    style={arrowStyle}
                    className={cx(
                      classes.arrow,
                      classes[parsedAttributes.placement],
                      classes[parsedAttributes.position],
                      arrowClassName
                    )}
                  />
                )}
              </div>
            </div>
          </Portal>
        </div>
      )}
    </Transition>
  );
}

Popper.displayName = '@mantine/core/Popper';
