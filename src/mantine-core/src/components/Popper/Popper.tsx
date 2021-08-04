import React, { useState } from 'react';
import cx from 'clsx';
import { usePopper } from 'react-popper';
import { useMergedRef } from '@mantine/hooks';
import useStyles from './Popper.styles';
import { Portal } from '../Portal/Portal';
import { MantineTransition } from '../Transition/Transition';
import { Transition } from '../Transition/CustomTransition';

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
  zIndex = 1000,
}: PopperProps<T>) {
  const padding = withArrow ? gutter + arrowSize : gutter;
  const classes = useStyles({ arrowSize });
  const [popperElement, setPopperElement] = useState(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: placement === 'center' ? position : `${position}-${placement}`,
    modifiers: [{ name: 'offset', options: { offset: [0, padding] } }],
  });

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
              ref={useMergedRef(setPopperElement, (node) => {
                node?.offsetHeight;
              })}
              style={{ ...styles.popper, pointerEvents: 'none' }}
              {...attributes.popper}
            >
              <div style={{ opacity: 0, ...transitionStyles }}>
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
          </Portal>
        </div>
      )}
    </Transition>
  );
}

Popper.displayName = '@mantine/core/Popper';
