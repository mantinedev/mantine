import React, { useEffect, useState } from 'react';
import { useClickOutside } from '@mantine/hooks';
import { TrashIcon, CheckIcon, Pencil1Icon } from '@modulz/radix-icons';
import useFocusTrap from '@charlietango/use-focus-trap';
import {
  Paper,
  Input,
  ActionIcon,
  ColorSwatch,
  useMantineTheme,
  MantineThemeOverride,
} from '@mantine/core';
import { TagPickerColor, TagPickerTag } from '../types';
import useStyles from './TagEdit.styles';

export interface TagEditProps {
  opened: boolean;
  initialValues: TagPickerTag;
  colors: TagPickerColor[];
  deleteLabel: string;
  onTagUpdate(id: string, values: Omit<TagPickerTag, 'id'>): void;
  onTagDelete(id: string): void;
  onClose(): void;
  id: string;
  themeOverride?: MantineThemeOverride;
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
  themeOverride,
}: TagEditProps) {
  const classes = useStyles({ theme: useMantineTheme(themeOverride) });
  const dropdownRef = useClickOutside(onClose);
  const focusTrapRef = useFocusTrap();
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

  const handleKeyDownCapture = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.nativeEvent.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  if (!opened) {
    return null;
  }

  const colorsList = colors.map((color) => (
    <button
      className={classes.colorControl}
      type="button"
      key={color.color}
      onClick={() => handleColorChange(color.color)}
    >
      <div className={classes.colorControlBody}>
        <ColorSwatch color={color.color} size={18} />
        <span className={classes.colorLabel}>{color.name}</span>
      </div>
      {color.color === values.color && <CheckIcon />}
    </button>
  ));

  return (
    <Paper
      shadow="xs"
      className={classes.tagEdit}
      ref={dropdownRef}
      onKeyDownCapture={handleKeyDownCapture}
    >
      <div ref={focusTrapRef}>
        <div className={classes.header}>
          <Input
            className={classes.input}
            value={values.name}
            onChange={(event) => handleNameChange(event.currentTarget.value)}
            onKeyDown={(event) => event.nativeEvent.code === 'Enter' && handleSubmit()}
            icon={<Pencil1Icon />}
            autoFocus
          />

          <ActionIcon color="teal" onClick={handleSubmit}>
            <CheckIcon />
          </ActionIcon>
        </div>

        <button className={classes.deleteControl} type="button" onClick={handleDelete}>
          <TrashIcon className={classes.deleteIcon} />
          <span>{deleteLabel}</span>
        </button>

        <div className={classes.colorsList}>{colorsList}</div>
      </div>
    </Paper>
  );
}

TagEdit.displayName = '@mantine/tag-picker/TagEdit';
