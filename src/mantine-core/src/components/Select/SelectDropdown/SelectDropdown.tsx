import React, { forwardRef } from 'react';
import { mergeStyles, DefaultProps, MantineShadow, ClassNames } from '@mantine/styles';
import { Transition, MantineTransition } from '../../Transition';
import { Paper } from '../../Paper';
import useStyles from './SelectDropdown.styles';

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
      __staticSelector,
    }: SelectDropdownProps,
    ref
  ) => {
    const { classes } = useStyles(null, classNames, __staticSelector);
    const _styles = mergeStyles(classes, styles);

    return (
      <Transition
        mounted={mounted}
        transition={transition}
        duration={transitionDuration}
        timingFunction={transitionTimingFunction}
      >
        {(transitionStyles) => (
          <div style={{ position: 'relative' }}>
            <Paper
              id={`${uuid}-items`}
              aria-labelledby={`${uuid}-label`}
              role="listbox"
              className={classes.dropdown}
              shadow={shadow}
              ref={ref}
              style={{ ..._styles.dropdown, ...transitionStyles, maxHeight: maxDropdownHeight }}
              onMouseDown={(event) => event.preventDefault()}
            >
              {children}
            </Paper>
          </div>
        )}
      </Transition>
    );
  }
);

SelectDropdown.displayName = '@mantine/core/SelectDropdown';
