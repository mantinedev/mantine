import React, { useState } from 'react';
import cx from 'clsx';
import { usePopper } from 'react-popper';
import useStyles from './Popper.styles';
import { Portal } from '../Portal/Portal';
import { Transition, MantineTransition } from '../Transition/Transition';

export interface SharedPopperProps {
  position?: 'top' | 'left' | 'bottom' | 'right';
  placement?: 'start' | 'center' | 'end';
  gutter?: number;
  arrowSize?: number;
  withArrow?: boolean;
}

export interface PopperProps<T extends HTMLElement> extends SharedPopperProps {
  referenceElement: T;
  children: React.ReactNode;
  mounted: boolean;
  transition: MantineTransition;
  transitionDuration: number;
  transitionTimingFunction?: string;
  arrowClassName?: string;
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
}: PopperProps<T>) {
  const padding = withArrow ? gutter + arrowSize : gutter;
  const classes = useStyles({ arrowSize });
  const [popperElement, setPopperElement] = useState(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: placement === 'center' ? position : `${position}-${placement}`,
    modifiers: [{ name: 'offset', options: { offset: [0, padding] } }],
  });

  return (
    <Portal zIndex={1000}>
      <Transition
        mounted={mounted}
        duration={transitionDuration}
        transition={transition}
        timingFunction={transitionTimingFunction}
      >
        {(transitionStyles) => (
          <div ref={setPopperElement} style={{ ...styles.popper }} {...attributes.popper}>
            <div style={transitionStyles}>
              {children}
              {withArrow && (
                <div
                  className={cx(
                    classes.arrow,
                    classes[position],
                    classes[placement],
                    arrowClassName
                  )}
                />
              )}
            </div>
          </div>
        )}
      </Transition>
    </Portal>
  );
}

Popper.displayName = '@mantine/core/Popper';
