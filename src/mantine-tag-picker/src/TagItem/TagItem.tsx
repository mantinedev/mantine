import React, { useState, useRef } from 'react';
import cx from 'clsx';
import { DotsHorizontalIcon } from '@modulz/radix-icons';
import { ActionIcon, Transition } from '@mantine/core';
import { useMantineTheme, MantineThemeOverride } from '@mantine/theme';
import { useReducedMotion } from '@mantine/hooks';
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
    }, transitionDuration + 10);
  };

  return (
    <div
      className={cx(classes.item, { [classes.hovered]: hovered === index })}
      onMouseEnter={() => onHover(index)}
    >
      <Transition duration={duration} mounted={editDropdownOpened} transition="skew-up">
        {(transitionStyles) => (
          <TagEdit
            style={transitionStyles}
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
      </Transition>

      <div className={classes.body}>
        <button type="button" className={classes.control} onClick={() => onSelect(data)}>
          <div className={classes.controlInner}>
            <TagBadge className={classes.badge} data={data} />
          </div>
        </button>

        {enableUpdate && (
          <ActionIcon onClick={openEditDropdown} elementRef={controlRef}>
            <DotsHorizontalIcon />
          </ActionIcon>
        )}
      </div>
    </div>
  );
}

TagItem.displayName = '@mantine/tag-picker/TagItem';
