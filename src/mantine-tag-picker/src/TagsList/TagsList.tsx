import React from 'react';
import cx from 'clsx';
import { useFocusTrap } from '@mantine/hooks';
import {
  TextInput,
  Text,
  Badge,
  MantineThemeOverride,
  useMantineTheme,
  MantineTransition,
} from '@mantine/core';
import { TagPickerColor, TagPickerTag } from '../types';
import TagItem from '../TagItem/TagItem';
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
  transitionDuration?: number;
  transition?: MantineTransition;
  transitionTimingFunction?: string;
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
  transitionDuration,
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
      transitionDuration={transitionDuration}
      themeOverride={themeOverride}
    />
  ));

  return (
    <div className={classes.tagsList} ref={focusTrapRef}>
      <TextInput
        themeOverride={themeOverride}
        className={classes.searchInput}
        placeholder={searchPlaceholder}
        value={searchQuery}
        onChange={(event) => onSearchChange(event.currentTarget.value)}
        onFocus={() => onArrowsCaptureChange(true)}
        onBlur={() => {
          onHoveredChange(-1);
          onArrowsCaptureChange(false);
        }}
      />

      {description && (
        <Text color="gray" size="sm" className={classes.description} themeOverride={themeOverride}>
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
            <Badge
              variant="light"
              className={classes.createControlBadge}
              color={createColor}
              style={{ cursor: 'pointer' }}
              themeOverride={themeOverride}
            >
              {searchQuery}
            </Badge>
          </button>
        )}
      </div>
    </div>
  );
}

TagsList.displayName = '@mantine/tag-picker/TagsList';
