import React, { useMemo, useState, useRef } from 'react';
import { usePopper, StrictModifier } from 'react-popper';
import type { Placement } from '@popperjs/core';
import { useDidUpdate } from '@mantine/hooks';
import { Portal } from '../Portal';
import { Transition, MantineTransition } from '../Transition';
import { parsePopperPosition } from './parse-popper-position/parse-popper-position';
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

  /** Renders arrow if true */
  withArrow?: boolean;

  /** Popper z-index */
  zIndex?: number;

  /** Customize mount/unmount transition */
  transition?: MantineTransition;

  /** Mount/unmount transition duration in ms */
  transitionDuration?: number;

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

  // Called when transition ends
  onTransitionEnd?(): void;

  /** valid popperjs modifiers array */
  modifiers?: StrictModifier[];

  /** Controls popper flip behavior  */
  allowPlacementChange?: boolean;

  /** Controls where popper can flip out */
  placementFallbacks?: Placement[];

  /** Called when popper changes its placement */
  onPlacementChange?(placement: Placement): void;
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
  transition = 'pop-top-left',
  transitionDuration,
  transitionTimingFunction,
  arrowClassName,
  arrowStyle,
  zIndex = 100,
  forceUpdateDependencies = [],
  modifiers = [],
  onTransitionEnd,
  allowPlacementChange = true,
  placementFallbacks = ['bottom'],
  onPlacementChange,
}: PopperProps<T>) {
  const padding = withArrow ? gutter + arrowSize : gutter;
  const { classes, cx } = useStyles({ arrowSize }, { name: 'Popper' });
  const [popperElement, setPopperElement] = useState(null);

  const initialPlacement: Placement =
    placement === 'center' ? position : `${position}-${placement}`;

  const previousPlacement = useRef<Placement>(initialPlacement);

  // https://popper.js.org/react-popper/v2/faq/#why-i-get-render-loop-whenever-i-put-a-function-inside-the-popper-configuration
  const directionControlModifier = useMemo(
    () => ({
      name: 'directionControl',
      enabled: allowPlacementChange && Boolean(onPlacementChange),
      phase: 'main',
      fn: ({ state }) => {
        if (onPlacementChange && previousPlacement.current !== state.placement) {
          previousPlacement.current = state.placement;

          onPlacementChange(state.placement);
        }
      },
    }),
    [onPlacementChange, allowPlacementChange]
  );

  const { styles, attributes, forceUpdate } = usePopper(referenceElement, popperElement, {
    placement: initialPlacement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, padding],
        },
      },
      {
        name: 'flip',
        enabled: allowPlacementChange,
        options: {
          fallbackPlacements: placementFallbacks,
        },
      },
      // @ts-ignore
      directionControlModifier,
      ...modifiers,
    ],
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
      onExited={onTransitionEnd}
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
