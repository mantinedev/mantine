import OpenColor from 'open-color';
import React from 'react';
import { useClickOutside } from '@mantine/hooks';
import { DropdownBody, useMantineTheme } from '@mantine/core';
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
  ...others
}: TagPickerProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });
  const dropdownRef = useClickOutside(closeDropdown);

  return (
    <div className={classes.tagPicker}>
      <button className={classes.control} type="button" ref={controlRef} onClick={openDropdown}>
        <TagBadge
          data={value || { id: 'no-value', color: OpenColor.gray[2], name: noValueLabel }}
        />
      </button>

      {dropdownOpened && (
        <DropdownBody className={classes.dropdown} ref={dropdownRef} noPadding>
          <TagsList value={value} {...others} />
        </DropdownBody>
      )}
    </div>
  );
}
