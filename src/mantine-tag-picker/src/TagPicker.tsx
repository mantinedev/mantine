import React, { useRef } from 'react';
import { useClickOutside } from 'xooks';
import { DropdownBody } from '@mantine/core';
import TagsList, { TagsListProps } from './TagsList/TagsList';

interface TagPickerProps extends TagsListProps {
  dropdownOpened: boolean;
  controlRef: React.RefObject<HTMLButtonElement>;
  openDropdown(): void;
  closeDropdown(): void;
}

export default function TagPicker({
  dropdownOpened,
  openDropdown,
  closeDropdown,
  controlRef,
  ...others
}: TagPickerProps) {
  const dropdownRef = useRef<HTMLDivElement>();

  useClickOutside(dropdownRef, closeDropdown);

  return (
    <div>
      <button type="button" ref={controlRef} onClick={openDropdown}>
        Control
      </button>

      {dropdownOpened && (
        <DropdownBody elementRef={dropdownRef}>
          <TagsList {...others} />
        </DropdownBody>
      )}
    </div>
  );
}
