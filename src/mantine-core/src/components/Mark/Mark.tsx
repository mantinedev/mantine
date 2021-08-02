import React from 'react';
import { useMantineTheme, DefaultProps, getThemeColor } from '../../theme';

export interface MarkProps extends DefaultProps, React.ComponentPropsWithoutRef<'mark'> {
  /** Background color from theme.colors */
  color?: string;
}

export function Mark({ color = 'yellow', style, themeOverride, ...others }: MarkProps) {
  const theme = useMantineTheme(themeOverride);

  return (
    <mark
      style={{
        backgroundColor: getThemeColor({
          theme,
          color,
          shade: theme.colorScheme === 'dark' ? 5 : 2,
        }),
        color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'inherit',
        ...style,
      }}
      {...others}
    />
  );
}

Mark.displayName = '@mantine/core/Mark';
