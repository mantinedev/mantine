import React, { forwardRef } from 'react';
import { DefaultProps, MantineNumberSize, useComponentDefaultProps } from '@mantine/styles';
import { packSx } from '@mantine/utils';
import { Box } from '../Box';

export interface SpaceProps extends DefaultProps {
  /** Width, set to add horizontal spacing */
  w?: MantineNumberSize;

  /** Height, set to add vertical spacing */
  h?: MantineNumberSize;
}

const defaultProps: Partial<SpaceProps> = {
  w: 0,
  h: 0,
};

export const Space = forwardRef<HTMLDivElement, SpaceProps>((props: SpaceProps, ref) => {
  const { w, h, sx, ...others } = useComponentDefaultProps('Space', defaultProps, props);

  return (
    <Box
      ref={ref}
      sx={[
        (theme) => {
          const width = theme.fn.size({ size: w, sizes: theme.spacing });
          const height = theme.fn.size({ size: h, sizes: theme.spacing });
          return { width, height, minWidth: width, minHeight: height };
        },
        ...packSx(sx),
      ]}
      {...others}
    />
  );
});

Space.displayName = '@mantine/core/Space';
