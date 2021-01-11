import React, { useState } from 'react';
import cx from 'clsx';
import { ActionIcon } from '@mantine/core';
import { DotsHorizontalIcon } from '@modulz/radix-icons';
import classes from './TagItem.styles.less';
import { TagPickerTag } from '../types';

interface TagItemProps {
  index: number;
  hovered: number;
  data: TagPickerTag;
  onSelect(value: TagPickerTag): void;
  onTagUpdate(id: string, values: Omit<TagPickerTag, 'id'>): void;
  onHover(index: number): void;
}

export default function TagItem({
  index,
  hovered,
  data,
  onSelect,
  onTagUpdate,
  onHover,
}: TagItemProps) {
  const [editDropdownOpened, setEditDropdownOpened] = useState(false);

  return (
    <div
      className={cx(classes.item, { [classes.hovered]: hovered === index })}
      onMouseEnter={() => onHover(index)}
    >
      {editDropdownOpened && <div>edit</div>}
      <button type="button" className={classes.control} onClick={() => onSelect(data)}>
        {data.name}
      </button>

      <ActionIcon onClick={() => setEditDropdownOpened(true)}>
        <DotsHorizontalIcon />
      </ActionIcon>
    </div>
  );
}

TagItem.displayName = '@mantine/tag-picker/TagItem';
