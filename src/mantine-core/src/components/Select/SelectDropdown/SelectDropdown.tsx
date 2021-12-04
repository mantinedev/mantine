import React, { forwardRef, useRef } from 'react';
import { DefaultProps, MantineShadow, ClassNames, getDefaultZIndex } from '@mantine/styles';
import type { Placement } from '@popperjs/core';
import { MantineTransition } from '../../Transition';
import { Paper } from '../../Paper';
import useStyles from './SelectDropdown.styles';
import { Popper } from '../../Popper';

export type SelectDropdownStylesNames = ClassNames<typeof useStyles>;

interface SelectDropdownProps extends DefaultProps<SelectDropdownStylesNames> {
  mounted: boolean;
  transition: MantineTransition;
  transitionDuration: number;
  transitionTimingFunction: string;
  uuid: string;
  shadow: MantineShadow;
  maxDropdownHeight?: number | string;
  withinPortal?: boolean;
  children: React.ReactNode;
  __staticSelector: string;
  dropdownComponent?: React.FC<any>;
  referenceElement?: HTMLElement;
  direction?: React.CSSProperties['flexDirection'];
  onDirectionChange?: (direction: React.CSSProperties['flexDirection']) => void;
  switchDirectionOnFlip?: boolean;
  zIndex?: number;
}

export const SelectDropdown = forwardRef<HTMLDivElement, SelectDropdownProps>(
  (
    {
      mounted,
      transition,
      transitionDuration,
      transitionTimingFunction,
      uuid,
      shadow,
      maxDropdownHeight,
      withinPortal = true,
      children,
      classNames,
      styles,
      dropdownComponent,
      referenceElement,
      direction = 'column',
      onDirectionChange,
      switchDirectionOnFlip = true,
      zIndex = getDefaultZIndex('popover'),
      __staticSelector,
    }: SelectDropdownProps,
    ref
  ) => {
    const { classes } = useStyles(null, { classNames, styles, name: __staticSelector });

    const previousPlacement = useRef<Placement>('bottom');

    return (
      <Popper
        referenceElement={referenceElement}
        mounted={mounted}
        transition={transition}
        transitionDuration={transitionDuration}
        transitionTimingFunction={transitionTimingFunction}
        position="bottom"
        withinPortal={withinPortal}
        placementFallbacks={['top']}
        zIndex={zIndex}
        modifiers={[
          {
            name: 'preventOverflow',
            enabled: false,
          },
          {
            // @ts-ignore
            name: 'sameWidth',
            enabled: true,
            phase: 'beforeWrite',
            requires: ['computeStyles'],
            fn: ({ state }) => {
              // eslint-disable-next-line no-param-reassign
              state.styles.popper.width = `${state.rects.reference.width}px`;
            },
            effect: ({ state }) => {
              // eslint-disable-next-line no-param-reassign
              state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
            },
          },
          {
            // @ts-ignore
            name: 'directionControl',
            enabled: true,
            phase: 'main',
            fn: ({ state }) => {
              if (previousPlacement.current !== state.placement) {
                previousPlacement.current = state.placement;

                const nextDirection = state.placement === 'top' ? 'column-reverse' : 'column';

                if (direction !== nextDirection && switchDirectionOnFlip) {
                  onDirectionChange && onDirectionChange(nextDirection);
                }
              }
            },
          },
        ]}
      >
        <div style={{ maxHeight: maxDropdownHeight, display: 'flex' }}>
          <Paper<'div'>
            component={(dropdownComponent || 'div') as any}
            id={`${uuid}-items`}
            aria-labelledby={`${uuid}-label`}
            role="listbox"
            className={classes.dropdown}
            shadow={shadow}
            ref={ref}
            onMouseDown={(event) => event.preventDefault()}
          >
            <div style={{ display: 'flex', flexDirection: direction }}>{children}</div>
          </Paper>
        </div>
      </Popper>
    );
  }
);

SelectDropdown.displayName = '@mantine/core/SelectDropdown';
