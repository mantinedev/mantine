import React, { forwardRef } from 'react';
import {
  useExtractedMargins,
  DefaultProps,
  MantineNumberSize,
  getSizeValue,
  useMantineTheme,
} from '@mantine/styles';

export interface SpaceProps extends DefaultProps {
  /** Width, set to add horizontal spacing */
  w?: MantineNumberSize;

  /** Height, set to add vertical spacing */
  h?: MantineNumberSize;
}

export const Space = forwardRef<HTMLDivElement, SpaceProps>(
  ({ w, h, style, ...others }: SpaceProps, ref) => {
    const theme = useMantineTheme();
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const width = getSizeValue({ size: w, sizes: theme.spacing });
    const height = getSizeValue({ size: h, sizes: theme.spacing });

    return (
      <div
        ref={ref}
        style={{
          ...mergedStyles,
          width,
          height,
          minWidth: width,
          minHeight: height,
        }}
        {...rest}
      />
    );
  }
);

Space.displayName = '@mantine/core/Space';
