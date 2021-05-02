import React, { useState, useRef } from 'react';
import cx from 'clsx';
import {
  ActionIcon,
  Transition,
  Badge,
  useMantineTheme,
  MantineThemeOverride,
} from '@mantine/core';
import { useReducedMotion } from '@mantine/hooks';
import { TagPickerColor, TagPickerTag } from '../types';
import { MenuIcon } from './MenuIcon';
import TagEdit from '../TagEdit/TagEdit';
import useStyles from './TagItem.styles';

interface TagItemProps {
  index: number;
  hovered: number;
  data: TagPickerTag;
  colors: TagPickerColor[];
  deleteLabel: string;
  saveLabel: string;
  editTagLabel: string;
  onSelect(value: TagPickerTag): void;
  onTagUpdate(id: string, values: Omit<TagPickerTag, 'id'>): void;
  onTagDelete(id: string): void;
  onHover(index: number): void;
  onEventsCaptureChange(shouldCaptureEvents: boolean): void;
  themeOverride?: MantineThemeOverride;
  enableUpdate?: boolean;
  enableDelete?: boolean;
  enableColorChange?: boolean;
  transitionDuration?: number;
}

export default function TagItem({
  index,
  hovered,
  data,
  onSelect,
  onTagUpdate,
  onHover,
  deleteLabel,
  saveLabel,
  editTagLabel,
  colors,
  onTagDelete,
  onEventsCaptureChange,
  themeOverride,
  enableUpdate,
  enableDelete,
  enableColorChange,
  transitionDuration,
}: TagItemProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });
  const controlRef = useRef<HTMLButtonElement>();
  const [editDropdownOpened, setEditDropdownOpened] = useState(false);
  const reduceMotion = useReducedMotion();
  const duration = reduceMotion ? 1 : transitionDuration;

  const openEditDropdown = () => {
    setEditDropdownOpened(true);
    onEventsCaptureChange(false);
  };

  const closeEditDropdown = () => {
    setEditDropdownOpened(false);
    onEventsCaptureChange(true);

    // Focus should be wrapped in setTimeout to prevent multiple keyboard events capturing
    // since edit dropdown has focus trap, control cannot be focused until transition ended + 10ms for buffer
    setTimeout(() => {
      controlRef.current.focus();
    }, transitionDuration + 35);
  };

  return (
    <div
      className={cx(classes.item, { [classes.hovered]: hovered === index })}
      onMouseEnter={() => onHover(index)}
    >
      <Transition
        duration={duration}
        mounted={editDropdownOpened}
        transition="skew-up"
        themeOverride={themeOverride}
      >
        {(transitionStyles) => (
          <TagEdit
            style={transitionStyles}
            saveLabel={saveLabel}
            onClose={closeEditDropdown}
            initialValues={data}
            deleteLabel={deleteLabel}
            colors={colors}
            onTagUpdate={onTagUpdate}
            onTagDelete={onTagDelete}
            id={data.id}
            enableDelete={enableDelete}
            enableColorChange={enableColorChange}
            themeOverride={themeOverride}
          />
        )}
      </Transition>

      <div className={classes.body}>
        <button type="button" className={classes.control} onClick={() => onSelect(data)}>
          <div className={classes.controlInner}>
            <Badge
              variant="light"
              className={classes.badge}
              color={data.color}
              fullWidth
              style={{ cursor: 'pointer' }}
              themeOverride={themeOverride}
            >
              {data.name}
            </Badge>
          </div>
        </button>

        {enableUpdate && (
          <ActionIcon
            onClick={openEditDropdown}
            elementRef={controlRef}
            themeOverride={themeOverride}
            aria-label={editTagLabel}
          >
            <MenuIcon />
          </ActionIcon>
        )}
      </div>
    </div>
  );
}

TagItem.displayName = '@mantine/tag-picker/TagItem';
