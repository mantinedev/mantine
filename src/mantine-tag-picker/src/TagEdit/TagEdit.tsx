import React, { useEffect, useState } from 'react';
import { useClickOutside, useFocusTrap } from '@mantine/hooks';
import {
  Paper,
  TextInput,
  ActionIcon,
  ColorSwatch,
  useMantineTheme,
  MantineThemeOverride,
} from '@mantine/core';
import { CheckIcon } from './CheckIcon';
import { TagPickerColor, TagPickerTag } from '../types';
import useStyles from './TagEdit.styles';

export interface TagEditProps {
  style?: React.CSSProperties;
  initialValues: TagPickerTag;
  colors: TagPickerColor[];
  deleteLabel: string;
  saveLabel: string;
  onTagUpdate(id: string, values: Omit<TagPickerTag, 'id'>): void;
  onTagDelete(id: string): void;
  onClose(): void;
  id: string;
  themeOverride?: MantineThemeOverride;
  enableDelete?: boolean;
  enableColorChange?: boolean;
}

export default function TagEdit({
  style,
  onClose,
  initialValues,
  deleteLabel,
  colors,
  onTagUpdate,
  onTagDelete,
  id,
  saveLabel,
  themeOverride,
  enableDelete,
  enableColorChange,
}: TagEditProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme });
  const dropdownRef = useClickOutside(onClose);
  const focusTrapRef = useFocusTrap();
  const [values, setValues] = useState<Omit<TagPickerTag, 'id'>>({ name: '', color: '' });
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

  const colorsList = colors.map((color) => (
    <button
      className={classes.colorControl}
      type="button"
      key={color.color}
      onClick={() => handleColorChange(color.color)}
    >
      <div className={classes.colorControlBody}>
        <ColorSwatch color={theme.colors[color.color][5]} size={18} themeOverride={themeOverride} />
        <span className={classes.colorLabel}>{color.name}</span>
      </div>
      {color.color === values.color && <CheckIcon style={{ width: 14, height: 14 }} />}
    </button>
  ));

  return (
    <Paper
      shadow="sm"
      className={classes.tagEdit}
      elementRef={dropdownRef}
      onKeyDownCapture={handleKeyDownCapture}
      style={style}
      themeOverride={themeOverride}
    >
      <div ref={focusTrapRef}>
        <div className={classes.header}>
          <TextInput
            className={classes.input}
            value={values.name}
            onChange={(event) => handleNameChange(event.currentTarget.value)}
            onKeyDown={(event) => event.nativeEvent.code === 'Enter' && handleSubmit()}
            autoFocus
            themeOverride={themeOverride}
          />

          <ActionIcon
            size={36}
            variant="light"
            onClick={handleSubmit}
            themeOverride={themeOverride}
            aria-label={saveLabel}
          >
            <CheckIcon style={{ width: 16, height: 16 }} />
          </ActionIcon>
        </div>

        {enableDelete && (
          <button className={classes.deleteControl} type="button" onClick={handleDelete}>
            {deleteLabel}
          </button>
        )}

        {enableColorChange && <div className={classes.colorsList}>{colorsList}</div>}
      </div>
    </Paper>
  );
}

TagEdit.displayName = '@mantine/tag-picker/TagEdit';
