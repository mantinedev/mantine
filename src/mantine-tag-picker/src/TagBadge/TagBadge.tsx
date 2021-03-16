import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps } from '@mantine/theme';
import { TagPickerTag } from '../types';
import { isBrightColor } from './is-bright-color/is-bright-color';
import useStyles from './TagBadge.styles';

interface TagBadgeProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  data: TagPickerTag;
}

export default function TagBadge({
  className,
  data,
  themeOverride,
  style,
  ...others
}: TagBadgeProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme });

  return (
    <div
      className={cx(classes.tagBadge, className)}
      style={{
        color: data.color || (isBrightColor(data.background) ? theme.black : theme.white),
        backgroundColor: data.background,
        ...style,
      }}
      {...others}
    >
      {data.name}
    </div>
  );
}

TagBadge.displayName = '@mantine/tag-picker/TagBadge';
