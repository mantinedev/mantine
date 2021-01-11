import React, { useState } from 'react';
import cx from 'clsx';
import { ActionIcon } from '@mantine/core';
import { DotsHorizontalIcon } from '@modulz/radix-icons';
import { TagPickerColor, TagPickerTag } from '../types';
import TagEdit from '../TagEdit/TagEdit';
import classes from './TagItem.styles.less';

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
}: TagItemProps) {
  const [editDropdownOpened, setEditDropdownOpened] = useState(false);

  return (
    <div
      className={cx(classes.item, { [classes.hovered]: hovered === index })}
      onMouseEnter={() => onHover(index)}
    >
      <TagEdit
        opened={editDropdownOpened}
        onClose={() => setEditDropdownOpened(false)}
        initialValues={data}
        deleteLabel={deleteLabel}
        colors={colors}
        onTagUpdate={onTagUpdate}
        onTagDelete={onTagDelete}
        id={data.id}
      />
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
