import React from 'react';
import { useClickOutside, useReducedMotion } from '@mantine/hooks';
import { Paper, Transition, Badge, useMantineTheme } from '@mantine/core';
import TagsList, { TagsListProps } from '../TagsList/TagsList';
import useStyles from './TagPicker.styles';

interface TagPickerProps extends TagsListProps {
  dropdownOpened: boolean;
  controlRef: React.RefCallback<HTMLButtonElement>;
  openDropdown(): void;
  closeDropdown(): void;
  onEventsCaptureChange(shouldCaptureEvents: boolean): void;
  noValueLabel: string;
}

export default function TagPicker({
  dropdownOpened,
  openDropdown,
  closeDropdown,
  controlRef,
  value,
  noValueLabel,
  themeOverride,
  transitionDuration,
  ...others
}: TagPickerProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme });
  const dropdownRef = useClickOutside(closeDropdown);
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 1 : transitionDuration;

  return (
    <div className={classes.tagPicker}>
      <button className={classes.control} type="button" ref={controlRef} onClick={openDropdown}>
        <Badge
          color={(value && value.color) || 'gray'}
          style={{ cursor: 'pointer' }}
          themeOverride={themeOverride}
        >
          {(value && value.name) || noValueLabel}
        </Badge>
      </button>

      <Transition
        duration={duration}
        mounted={dropdownOpened}
        transition="skew-up"
        themeOverride={themeOverride}
      >
        {(transitionStyles) => (
          <Paper
            shadow="xs"
            className={classes.dropdown}
            elementRef={dropdownRef}
            style={transitionStyles}
            themeOverride={themeOverride}
          >
            <TagsList
              value={value}
              transitionDuration={transitionDuration}
              themeOverride={themeOverride}
              {...others}
            />
          </Paper>
        )}
      </Transition>
    </div>
  );
}
