import oc from 'open-color';
import React, { useRef } from 'react';
import { useClickOutside } from 'xooks';
import { DropdownBody } from '@mantine/core';
import TagsList, { TagsListProps } from './TagsList/TagsList';
import TagBadge from './TagBadge/TagBadge';

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
    <div>
      <button type="button" ref={controlRef} onClick={openDropdown}>
        <TagBadge data={value || { id: 'no-value', color: oc.gray[6], name: noValueLabel }} />
      </button>

      {dropdownOpened && (
        <DropdownBody elementRef={dropdownRef}>
          <TagsList value={value} {...others} />
        </DropdownBody>
      )}
    </div>
  );
}
