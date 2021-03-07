import React from 'react';
import cx from 'clsx';
import { MagnifyingGlassIcon } from '@modulz/radix-icons';
import useFocusTrap from '@charlietango/use-focus-trap';
import { Input, MantineThemeOverride, Text, useMantineTheme } from '@mantine/core';
import { TagPickerColor, TagPickerTag } from '../types';
import TagItem from '../TagItem/TagItem';
import TagBadge from '../TagBadge/TagBadge';
import useStyles from './TagsList.styles';

export interface TagsListProps {
  description?: string;
  searchPlaceholder?: string;
  searchQuery: string;
  hovered: number;
  value: TagPickerTag;
  data: TagPickerTag[];
  canCreate: boolean;
  createLabel?: string;
  deleteLabel?: string;
  colors: TagPickerColor[];
  createColor: string;
  onSearchChange(query: string): void;
  onCreate(): void;
  onTagUpdate(id: string, values: Omit<TagPickerTag, 'id'>): void;
  onTagDelete(id: string): void;
  onChange(value: TagPickerTag): void;
  onHoveredChange(index: number): void;
  onEventsCaptureChange(shouldCaptureEvents: boolean): void;
  onArrowsCaptureChange(shouldCaptureArrowEvents: boolean): void;
  themeOverride?: MantineThemeOverride;
  enableCreate?: boolean;
  enableUpdate?: boolean;
  enableDelete?: boolean;
  enableColorChange?: boolean;
}

export default function TagsList({
  searchQuery,
  searchPlaceholder,
  description,
  hovered,
  data,
  canCreate,
  createLabel,
  deleteLabel,
  colors,
  createColor,
  onSearchChange,
  onCreate,
  onTagDelete,
  onTagUpdate,
  onChange,
  onHoveredChange,
  onEventsCaptureChange,
  onArrowsCaptureChange,
  themeOverride,
  enableCreate,
  enableUpdate,
  enableDelete,
  enableColorChange,
}: TagsListProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });
  const focusTrapRef = useFocusTrap();

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
      onEventsCaptureChange={onEventsCaptureChange}
      enableUpdate={enableUpdate}
      enableDelete={enableDelete}
      enableColorChange={enableColorChange}
    />
  ));

  return (
    <div className={classes.tagsList} ref={focusTrapRef}>
      <Input
        className={classes.searchInput}
        placeholder={searchPlaceholder}
        value={searchQuery}
        onChange={(event) => onSearchChange(event.currentTarget.value)}
        onFocus={() => onArrowsCaptureChange(true)}
        onBlur={() => {
          onHoveredChange(-1);
          onArrowsCaptureChange(false);
        }}
        icon={<MagnifyingGlassIcon />}
      />

      {description && (
        <Text color="gray" size="sm" className={classes.description}>
          {description}
        </Text>
      )}

      <div>
        {tags}

        {enableCreate && canCreate && (
          <button
            className={cx(classes.createControl, {
              [classes.createControlHovered]: hovered === data.length,
            })}
            type="button"
            onClick={onCreate}
            onMouseEnter={() => onHoveredChange(data.length)}
          >
            <span className={classes.createControlLabel}>{createLabel || '+'}</span>
            <TagBadge data={{ id: 'create-placeholder', color: createColor, name: searchQuery }} />
          </button>
        )}
      </div>
    </div>
  );
}

TagsList.displayName = '@mantine/tag-picker/TagsList';
