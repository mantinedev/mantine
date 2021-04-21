import React from 'react';
import { useClickOutside, useReducedMotion } from '@mantine/hooks';
import { Paper, Transition } from '@mantine/core';
import { useMantineTheme } from '@mantine/theme';
import TagsList, { TagsListProps } from '../TagsList/TagsList';
import TagBadge from '../TagBadge/TagBadge';
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
        <TagBadge
          data={
            value || {
              id: 'no-value',
              background: theme.colors.gray[2],
              color: theme.colors.gray[7],
              name: noValueLabel,
            }
          }
        />
      </button>

      <Transition duration={duration} mounted={dropdownOpened} transition="skew-up">
        {(transitionStyles) => (
          <Paper
            shadow="xs"
            className={classes.dropdown}
            elementRef={dropdownRef}
            style={transitionStyles}
          >
            <TagsList value={value} transitionDuration={transitionDuration} {...others} />
          </Paper>
        )}
      </Transition>
    </div>
  );
}
