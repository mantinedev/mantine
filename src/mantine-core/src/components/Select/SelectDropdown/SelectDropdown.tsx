import React, { forwardRef } from 'react';
import { DefaultProps, MantineShadow, ClassNames } from '@mantine/styles';
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
  children: React.ReactNode;
  __staticSelector: string;
  dropdownComponent?: React.FC<any>;
  referenceElement?: HTMLElement;
  direction?: 'column' | 'column-reverse';
  onDirectionChange?: (direction: 'column' | 'column-reverse') => void;
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
      children,
      classNames,
      styles,
      dropdownComponent,
      referenceElement,
      direction = 'column',
      onDirectionChange,
      __staticSelector,
    }: SelectDropdownProps,
    ref
  ) => {
    const { classes } = useStyles(null, { classNames, styles, name: __staticSelector });

    return (
      <Popper
        referenceElement={referenceElement}
        mounted={mounted}
        // mounted
        transition={transition}
        transitionDuration={transitionDuration}
        transitionTimingFunction={transitionTimingFunction}
        position="bottom"
        modifiers={[
          {
            name: 'flip',
            enabled: Boolean(onDirectionChange),
            options: {
              fallbackPlacements: ['top'],
            },
          },
          {
            // @ts-ignore
            name: 'directionControl',
            enabled: true,
            phase: 'main',
            fn: ({ state }) => {
              const nextDirection = state.placement === 'top' ? 'column-reverse' : 'column';

              if (direction !== nextDirection) {
                onDirectionChange && onDirectionChange(nextDirection);
              }
            },
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
        ]}
      >
        <Paper<'div'>
          component={(dropdownComponent || 'div') as any}
          id={`${uuid}-items`}
          aria-labelledby={`${uuid}-label`}
          role="listbox"
          className={classes.dropdown}
          shadow={shadow}
          ref={ref}
          style={{
            maxHeight: maxDropdownHeight,
            flexDirection: direction,
          }}
          onMouseDown={(event) => event.preventDefault()}
        >
          {children}
        </Paper>
      </Popper>
    );
  }
);

SelectDropdown.displayName = '@mantine/core/SelectDropdown';
