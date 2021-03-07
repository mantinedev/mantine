import React, { useState, useRef } from 'react';
import cx from 'clsx';
import { ActionIcon, useMantineTheme, MantineThemeOverride } from '@mantine/core';
import { DotsHorizontalIcon } from '@modulz/radix-icons';
import { TagPickerColor, TagPickerTag } from '../types';
import TagEdit from '../TagEdit/TagEdit';
import TagBadge from '../TagBadge/TagBadge';
import useStyles from './TagItem.styles';

interface TagItemProps {
  index: number;
  hovered: number;
  data: TagPickerTag;
  colors: TagPickerColor[];
  deleteLabel: string;
  onSelect(value: TagPickerTag): void;
  onTagUpdate(id: string, values: Omit<TagPickerTag, 'id'>): void;
  onTagDelete(id: string): void;
  onHover(index: number): void;
  onEventsCaptureChange(shouldCaptureEvents: boolean): void;
  themeOverride?: MantineThemeOverride;
  enableUpdate?: boolean;
  enableDelete?: boolean;
  enableColorChange?: boolean;
}

export default function TagItem({
  index,
  hovered,
  data,
  onSelect,
  onTagUpdate,
  onHover,
  deleteLabel,
  colors,
  onTagDelete,
  onEventsCaptureChange,
  themeOverride,
  enableUpdate,
  enableDelete,
  enableColorChange,
}: TagItemProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });
  const controlRef = useRef<HTMLButtonElement>();
  const [editDropdownOpened, setEditDropdownOpened] = useState(false);

  const openEditDropdown = () => {
    setEditDropdownOpened(true);
    onEventsCaptureChange(false);
  };

  const closeEditDropdown = () => {
    setEditDropdownOpened(false);
    onEventsCaptureChange(true);

    // Focus should be wrapped in setImmediate to prevent multiple keyboard events capturing
    setImmediate(() => controlRef.current.focus());
  };

  return (
    <div
      className={cx(classes.item, { [classes.hovered]: hovered === index })}
      onMouseEnter={() => onHover(index)}
    >
      {enableUpdate && (
        <TagEdit
          opened={editDropdownOpened}
          onClose={closeEditDropdown}
          initialValues={data}
          deleteLabel={deleteLabel}
          colors={colors}
          onTagUpdate={onTagUpdate}
          onTagDelete={onTagDelete}
          id={data.id}
          enableDelete={enableDelete}
          enableColorChange={enableColorChange}
        />
      )}
      <div className={classes.body}>
        <button type="button" className={classes.control} onClick={() => onSelect(data)}>
          <TagBadge data={data} />
        </button>

        {enableUpdate && (
          <ActionIcon onClick={openEditDropdown} ref={controlRef}>
            <DotsHorizontalIcon />
          </ActionIcon>
        )}
      </div>
    </div>
  );
}

TagItem.displayName = '@mantine/tag-picker/TagItem';
