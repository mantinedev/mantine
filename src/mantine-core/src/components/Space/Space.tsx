import React, { forwardRef } from 'react';
import {
  useExtractedMargins,
  DefaultProps,
  MantineNumberSize,
  useMantineTheme,
  useSx,
} from '@mantine/styles';

export interface SpaceProps extends DefaultProps {
  /** Width, set to add horizontal spacing */
  w?: MantineNumberSize;

  /** Height, set to add vertical spacing */
  h?: MantineNumberSize;
}

export const Space = forwardRef<HTMLDivElement, SpaceProps>(
  ({ w, h, style, sx, className, ...others }: SpaceProps, ref) => {
    const { sxClassName, css, cx } = useSx({ sx, className });
    const theme = useMantineTheme();
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const width = theme.fn.size({ size: w, sizes: theme.spacing });
    const height = theme.fn.size({ size: h, sizes: theme.spacing });

    return (
      <div
        ref={ref}
        style={mergedStyles}
        className={cx(css({ width, height, minWidth: width, minHeight: height }), sxClassName)}
        {...rest}
      />
    );
  }
);

Space.displayName = '@mantine/core/Space';
