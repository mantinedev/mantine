import React, { useEffect, useRef, useState } from 'react';
import { useClickOutside } from 'xooks';
import { TrashIcon, CheckIcon } from '@modulz/radix-icons';
import { DropdownBody, Input, ActionIcon, ColorSwatch } from '@mantine/core';
import { TagPickerColor, TagPickerTag } from '../types';
import classes from './TagEdit.styles.less';

export interface TagEditProps {
  opened: boolean;
  initialValues: TagPickerTag;
  colors: TagPickerColor[];
  deleteLabel: string;
  onTagUpdate(id: string, values: Omit<TagPickerTag, 'id'>): void;
  onTagDelete(id: string): void;
  onClose(): void;
  id: string;
}

export default function TagEdit({
  opened,
  onClose,
  initialValues,
  deleteLabel,
  colors,
  onTagUpdate,
  onTagDelete,
  id,
}: TagEditProps) {
  const dropdownRef = useRef<HTMLDivElement>();
  const [values, setValues] = useState<Omit<TagPickerTag, 'id'>>(null);
  const handleNameChange = (value: string) => setValues((current) => ({ ...current, name: value }));
  const handleColorChange = (value: string) =>
    setValues((current) => ({ ...current, color: value }));

  const handleSubmit = () => {
    onTagUpdate(id, { name: values.name, color: values.color });
    onClose();
  };

  const handleDelete = () => {
    onTagDelete(id);
    onClose();
  };

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  useClickOutside(dropdownRef, onClose);

  if (!opened) {
    return null;
  }

  const colorsList = colors.map((color) => (
    <button type="button" key={color.color} onClick={() => handleColorChange(color.color)}>
      <ColorSwatch color={color.color} />
      <span className={classes.colorLabel}>{color.name}</span>
    </button>
  ));

  return (
    <DropdownBody elementRef={dropdownRef}>
      <div className={classes.header}>
        <Input
          value={values.name}
          onChange={(event) => handleNameChange(event.currentTarget.value)}
        />

        <ActionIcon theme="success" onClick={handleSubmit}>
          <CheckIcon />
        </ActionIcon>
      </div>

      <button className={classes.deleteControl} type="button" onClick={handleDelete}>
        <TrashIcon className={classes.deleteIcon} />
        <span className={classes.deleteLabel}>{deleteLabel}</span>
      </button>

      <div className={classes.colorsList}>{colorsList}</div>
    </DropdownBody>
  );
}

TagEdit.displayName = '@mantine/tag-picker/TagEdit';
