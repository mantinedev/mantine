import React from 'react';
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
  elementRef?: React.ForwardedRef<HTMLDivElement>;
}

export function SelectDropdown({
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
  elementRef,
  __staticSelector,
}: SelectDropdownProps) {
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
            elementRef={elementRef}
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

SelectDropdown.displayName = '@mantine/core/SelectDropdown';
