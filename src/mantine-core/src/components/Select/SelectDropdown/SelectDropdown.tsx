import React from 'react';
import { useMantineTheme, DefaultProps, mergeStyles } from '../../../theme';
import { Transition, MantineTransition } from '../../Transition/Transition';
import { Paper } from '../../Paper/Paper';
import useStyles from './SelectDropdown.styles';

export type SelectDropdownStylesNames = keyof ReturnType<typeof useStyles>;

interface SelectDropdownProps extends DefaultProps<SelectDropdownStylesNames> {
  mounted: boolean;
  transition: MantineTransition;
  transitionDuration: number;
  transitionTimingFunction: string;
  uuid: string;
  shadow: string;
  maxDropdownHeight?: number | string;
  children: React.ReactNode;
  __staticSelector: string;
  elementRef?: React.ForwardedRef<HTMLDivElement>;
}

export function SelectDropdown({
  themeOverride,
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
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme }, classNames, __staticSelector);
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
