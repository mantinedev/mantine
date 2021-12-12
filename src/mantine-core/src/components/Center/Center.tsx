import React, { forwardRef } from 'react';
import { DefaultProps } from '@mantine/styles';
import { Box } from '../Box';

export interface CenterProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Content that should be centered vertically and horizontally */
  children: React.ReactNode;

  /** Set to true to use inline-flex instead of flex */
  inline?: boolean;
}

export const Center = forwardRef<HTMLDivElement, CenterProps>(
  ({ inline = false, sx, ...others }: CenterProps, ref) => (
    <Box
      ref={ref}
      sx={[
        {
          display: inline ? 'inline-flex' : 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        sx,
      ]}
      {...others}
    />
  )
);

Center.displayName = '@mantine/core/Center';
