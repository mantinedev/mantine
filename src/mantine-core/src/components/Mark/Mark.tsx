import React, { forwardRef } from 'react';
import {
  useMantineTheme,
  DefaultProps,
  MantineColor,
  useExtractedMargins,
  useSx,
} from '@mantine/styles';

export interface MarkProps extends DefaultProps, React.ComponentPropsWithoutRef<'mark'> {
  /** Background color from theme.colors */
  color?: MantineColor;
}

export const Mark = forwardRef<HTMLElement, MarkProps>(
  ({ color = 'yellow', style, sx, className, ...others }: MarkProps, ref) => {
    const theme = useMantineTheme();
    const { sxClassName, css, cx } = useSx({ sx, className });
    const { mergedStyles, rest } = useExtractedMargins({ others, style });

    return (
      <mark
        ref={ref}
        style={mergedStyles}
        className={cx(
          css({
            backgroundColor: theme.fn.themeColor(color, theme.colorScheme === 'dark' ? 5 : 2),
            color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : 'inherit',
          }),
          sxClassName
        )}
        {...rest}
      />
    );
  }
);

Mark.displayName = '@mantine/core/Mark';
