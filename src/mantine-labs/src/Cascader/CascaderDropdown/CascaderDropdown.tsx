import {
  ClassNames,
  DefaultProps,
  getDefaultZIndex,
  MantineShadow,
  MantineTransition,
  Paper,
  Popper,
} from '@mantine/core';
import { Placement } from '@popperjs/core';
import React, { forwardRef, useRef } from 'react';
import { useStyles } from './CascaderDropdown.styles';

export type CascaderDropdownStyles = ClassNames<typeof useStyles>;

export interface CascaderDropdownProps extends DefaultProps<CascaderDropdownStyles> {
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
  preventOverflow: boolean;
  placement: 'start' | 'center' | 'end';
}

export const CascaderDropdown = forwardRef<HTMLDivElement, CascaderDropdownProps>(
  (
    {
      mounted,
      transition,
      transitionDuration,
      transitionTimingFunction,
      uuid,
      shadow,
      maxDropdownHeight,
      placement,
      withinPortal = true,
      children,
      classNames,
      styles,
      dropdownComponent,
      referenceElement,
      direction = 'row',
      onDirectionChange,
      preventOverflow,
      switchDirectionOnFlip = false,
      zIndex = getDefaultZIndex('popover'),
      dropdownPosition = 'flip',
      __staticSelector,
    }: CascaderDropdownProps,
    ref
  ) => {
    const { classes } = useStyles(
      { native: false },
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
        placement={placement}
        withinPortal={withinPortal}
        zIndex={zIndex}
        modifiers={[
          {
            name: 'preventOverflow',
            enabled: preventOverflow,
          },
          {
            name: 'flip',
            enabled: dropdownPosition === 'flip',
          },
          // {
          //   name: 'offset',
          //   options: {
          //     offset: ({ popper, reference, placement }) => [-reference.width / 2, 0],
          //   },
          // },
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
