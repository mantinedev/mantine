import React, { forwardRef, useRef } from 'react';
import { DefaultProps, MantineShadow, Selectors, getDefaultZIndex } from '@mantine/styles';
import type { Placement } from '@popperjs/core';
import { SelectScrollArea } from '../SelectScrollArea/SelectScrollArea';
import { MantineTransition } from '../../Transition';
import { Paper } from '../../Paper';
import useStyles from './SelectDropdown.styles';
import { Popper } from '../../Popper';

export type SelectDropdownStylesNames = Selectors<typeof useStyles>;

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
  dropdownPosition?: 'bottom' | 'top' | 'flip';
  positionDependencies?: any[];
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
      switchDirectionOnFlip = false,
      zIndex = getDefaultZIndex('popover'),
      dropdownPosition = 'flip',
      __staticSelector,
      positionDependencies = [],
    }: SelectDropdownProps,
    ref
  ) => {
    const { classes } = useStyles(
      { native: dropdownComponent !== SelectScrollArea },
      { classNames, styles, name: __staticSelector }
    );

    const previousPlacement = useRef<Placement>('bottom');

    return (
      <Popper
        referenceElement={referenceElement}
        mounted={mounted}
        transition={transition}
        transitionDuration={transitionDuration}
        exitTransitionDuration={0}
        transitionTimingFunction={transitionTimingFunction}
        position={dropdownPosition === 'flip' ? 'bottom' : dropdownPosition}
        withinPortal={withinPortal}
        forceUpdateDependencies={positionDependencies}
        zIndex={zIndex}
        modifiers={[
          {
            name: 'preventOverflow',
            enabled: false,
          },
          {
            name: 'flip',
            enabled: dropdownPosition === 'flip',
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
            radius="sm"
            component={(dropdownComponent || 'div') as any}
            id={`${uuid}-items`}
            aria-labelledby={`${uuid}-label`}
            role="listbox"
            className={classes.dropdown}
            shadow={shadow}
            ref={ref}
            onMouseDown={(event) => event.preventDefault()}
          >
            <div style={{ display: 'flex', flexDirection: direction, width: '100%' }}>
              {children}
            </div>
          </Paper>
        </div>
      </Popper>
    );
  }
);

SelectDropdown.displayName = '@mantine/core/SelectDropdown';
