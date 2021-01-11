import oc from 'open-color';
import React, { useRef } from 'react';
import { useClickOutside } from 'xooks';
import { DropdownBody } from '@mantine/core';
import TagsList, { TagsListProps } from '../TagsList/TagsList';
import TagBadge from '../TagBadge/TagBadge';
import classes from './TagPicker.styles.less';

interface TagPickerProps extends TagsListProps {
  dropdownOpened: boolean;
  controlRef: React.RefObject<HTMLButtonElement>;
  openDropdown(): void;
  closeDropdown(): void;
  noValueLabel: string;
}

export default function TagPicker({
  dropdownOpened,
  openDropdown,
  closeDropdown,
  controlRef,
  value,
  noValueLabel,
  ...others
}: TagPickerProps) {
  const dropdownRef = useRef<HTMLDivElement>();

  useClickOutside(dropdownRef, closeDropdown);

  return (
    <div className={classes.tagPicker}>
      <button className={classes.control} type="button" ref={controlRef} onClick={openDropdown}>
        <TagBadge data={value || { id: 'no-value', color: oc.gray[2], name: noValueLabel }} />
      </button>

      {dropdownOpened && (
        <DropdownBody className={classes.dropdown} elementRef={dropdownRef} noPadding>
          <TagsList value={value} {...others} />
        </DropdownBody>
      )}
    </div>
  );
}
