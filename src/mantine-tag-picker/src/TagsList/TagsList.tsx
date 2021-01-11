import React from 'react';
import cx from 'clsx';
import { Input } from '@mantine/core';
import TagItem from '../TagItem/TagItem';
import classes from './TagsList.styles.less';
import { TagPickerColor, TagPickerTag } from '../types';

export interface TagsListProps {
  description?: string;
  searchPlaceholder?: string;
  searchQuery: string;
  hovered: number;
  data: TagPickerTag[];
  canCreate: boolean;
  createLabel?: string;
  deleteLabel?: string;
  colors: TagPickerColor[];
  onSearchChange(query: string): void;
  onCreate(): void;
  onTagUpdate(id: string, values: Omit<TagPickerTag, 'id'>): void;
  onTagDelete(id: string): void;
  onChange(value: TagPickerTag): void;
  onHoveredChange(index: number): void;
}

export default function TagsList({
  onSearchChange,
  searchQuery,
  searchPlaceholder,
  description,
  hovered,
  data,
  canCreate,
  createLabel,
  deleteLabel,
  colors,
  onCreate,
  onTagDelete,
  onTagUpdate,
  onChange,
  onHoveredChange,
}: TagsListProps) {
  const tags = data.map((tag, index) => (
    <TagItem
      key={tag.id}
      index={index}
      hovered={hovered}
      data={tag}
      onSelect={onChange}
      onTagUpdate={onTagUpdate}
      onHover={onHoveredChange}
      colors={colors}
      deleteLabel={deleteLabel}
      onTagDelete={onTagDelete}
    />
  ));
  return (
    <div className={classes.tagsList}>
      <Input
        placeholder={searchPlaceholder}
        value={searchQuery}
        onChange={(event) => onSearchChange(event.currentTarget.value)}
      />

      {description && <div className={classes.description}>{description}</div>}

      <div className={classes.tags}>
        {tags}

        {canCreate && (
          <button
            className={cx(classes.createControl, {
              [classes.createControlHovered]: hovered === data.length,
            })}
            type="button"
            onClick={onCreate}
            tabIndex={-1}
          >
            <span className={classes.createControlLabel}>+ {createLabel || '+'}</span>
            <div>{searchQuery}</div>
          </button>
        )}
      </div>
    </div>
  );
}

TagsList.displayName = '@mantine/tag-picker/TagsList';
