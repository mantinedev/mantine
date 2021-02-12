import React from 'react';
import cx from 'clsx';
import { useMantineTheme, MantineThemeOverride } from '@mantine/core';
import { TagPickerTag } from '../types';
import isBrightColor from './is-bright-color';
import useStyles from './TagBadge.styles';

interface TagBadgeProps {
  className?: string;
  data: TagPickerTag;
  themeOverride?: MantineThemeOverride;
}

export default function TagBadge({ className, data, themeOverride }: TagBadgeProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme });

  return (
    <div
      className={cx(classes.tagBadge, className)}
      style={{
        color: isBrightColor(data.color) ? theme.black : theme.white,
        backgroundColor: data.color,
      }}
    >
      {data.name}
    </div>
  );
}

TagBadge.displayName = '@mantine/tag-picker/TagBadge';
