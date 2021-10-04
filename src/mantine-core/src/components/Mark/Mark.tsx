import React, { forwardRef } from 'react';
import {
  useMantineTheme,
  DefaultProps,
  getThemeColor,
  MantineColor,
  useExtractedMargins,
} from '@mantine/styles';

export interface MarkProps extends DefaultProps, React.ComponentPropsWithoutRef<'mark'> {
  /** Background color from theme.colors */
  color?: MantineColor;
}

export const Mark = forwardRef<HTMLElement, MarkProps>(
  ({ color = 'yellow', style, ...others }: MarkProps, ref) => {
    const theme = useMantineTheme();
    const { mergedStyles, rest } = useExtractedMargins({ others, style });

    return (
      <mark
        ref={ref}
        style={{
          backgroundColor: getThemeColor({
            theme,
            color,
            shade: theme.colorScheme === 'dark' ? 5 : 2,
          }),
          color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'inherit',
          ...mergedStyles,
        }}
        {...rest}
      />
    );
  }
);

Mark.displayName = '@mantine/core/Mark';
