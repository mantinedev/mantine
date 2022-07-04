import React, { useState } from 'react';
import { usePopper, StrictModifier } from 'react-popper';
import { getDefaultZIndex } from '@mantine/styles';
import type { Placement } from '@popperjs/core';
import { useDidUpdate } from '@mantine/hooks';
import { Transition, MantineTransition } from '../Transition';
import { parsePopperPosition } from './parse-popper-position/parse-popper-position';
import { PopperContainer } from './PopperContainer/PopperContainer';
import useStyles from './Popper.styles';

export interface SharedPopperProps {
  /** Position relative to reference element */
  position?: 'top' | 'left' | 'bottom' | 'right';

  /** Placement relative to reference element */
  placement?: 'start' | 'center' | 'end';

  /** Spacing between element and popper in px  */
  gutter?: number;

  /** Arrow size in px */
  arrowSize?: number;

  /** Arrow distance to the left/right * arrowSize */
  arrowDistance?: number;

  /** Renders arrow if true */
  withArrow?: boolean;

  /** Popper z-index */
  zIndex?: number;

  /** Customize mount/unmount transition */
  transition?: MantineTransition;

  /** Mount transition duration in ms */
  transitionDuration?: number;

  /** Unmount transition duration in ms */
  exitTransitionDuration?: number;

  /** Mount/unmount transition timing function, defaults to theme.transitionTimingFunction */
  transitionTimingFunction?: string;
}

export interface PopperProps<T extends HTMLElement> extends SharedPopperProps {
  /** Element at which popper should be attached */
  referenceElement: T;

  /** Popper content */
  children: React.ReactNode;

  /** True to show popper, false to hide */
  mounted: boolean;

  /** Arrow class name */
  arrowClassName?: string;

  /** Arrow inline styles */
  arrowStyle?: React.CSSProperties;

  /** useEffect dependencies to force update popper position */
  forceUpdateDependencies?: any[];

  /** Called when transition ends */
  onTransitionEnd?(): void;

  /** Popperjs modifiers array */
  modifiers?: StrictModifier[];

  /** Whether to render the target element in a Portal */
  withinPortal?: boolean;
}

function flipPlacement(placement: 'start' | 'center' | 'end', dir: 'ltr' | 'rtl') {
  if (placement === 'center') {
    return placement;
  }

  if (dir === 'rtl') {
    if (placement === 'end') {
      return 'start';
    }

    return 'end';
  }

  return placement;
}

function flipPosition(position: 'top' | 'left' | 'bottom' | 'right', dir: 'ltr' | 'rtl') {
  if (position === 'top' || position === 'bottom') {
    return position;
  }

  if (dir === 'rtl') {
    if (position === 'left') {
      return 'right';
    }

    return 'left';
  }

  return position;
}

export function Popper<T extends HTMLElement = HTMLDivElement>({
  position = 'top',
  placement = 'center',
  gutter = 5,
  arrowSize = 2,
  arrowDistance = 2,
  withArrow = false,
  referenceElement,
  children,
  mounted,
  transition = 'pop-top-left',
  transitionDuration,
  exitTransitionDuration = transitionDuration,
  transitionTimingFunction,
  arrowClassName,
  arrowStyle,
  zIndex = getDefaultZIndex('popover'),
  forceUpdateDependencies = [],
  modifiers = [],
  onTransitionEnd,
  withinPortal = true,
}: PopperProps<T>) {
  const padding = withArrow ? gutter + arrowSize : gutter;
  const { classes, cx, theme } = useStyles({ arrowSize, arrowDistance }, { name: 'Popper' });
  const [popperElement, setPopperElement] = useState(null);
  const _placement = flipPlacement(placement, theme.dir);
  const _position = flipPosition(position, theme.dir);

  const initialPlacement: Placement =
    _placement === 'center' ? _position : `${_position}-${_placement}`;

  const { styles, attributes, forceUpdate } = usePopper(referenceElement, popperElement, {
    placement: initialPlacement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, padding],
        },
      },
      ...modifiers,
    ],
  });

  const parsedAttributes = parsePopperPosition(attributes.popper?.['data-popper-placement']);

  useDidUpdate(() => {
    typeof forceUpdate === 'function' && forceUpdate();
  }, forceUpdateDependencies);

  return (
    <Transition
      mounted={mounted && !!referenceElement}
      duration={transitionDuration}
      exitDuration={exitTransitionDuration}
      transition={transition}
      timingFunction={transitionTimingFunction}
      onExited={onTransitionEnd}
    >
      {(transitionStyles) => (
        <div>
          <PopperContainer withinPortal={withinPortal} zIndex={zIndex}>
            <div
              ref={setPopperElement}
              style={{
                ...styles.popper,
                pointerEvents: 'none',
              }}
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
          </PopperContainer>
        </div>
      )}
    </Transition>
  );
}

Popper.displayName = '@mantine/core/Popper';
