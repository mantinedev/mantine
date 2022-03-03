import React, { forwardRef } from 'react';
import { DefaultProps, PolymorphicComponentProps, PolymorphicRef } from '@mantine/styles';
import { Box } from '../Box';

export interface _CenterProps extends DefaultProps {
  /** Content that should be centered vertically and horizontally */
  children: React.ReactNode;

  /** Set to true to use inline-flex instead of flex */
  inline?: boolean;
}

export type CenterProps<C> = PolymorphicComponentProps<C, _CenterProps>;

type CenterComponent = (<C = 'div'>(props: CenterProps<C>) => React.ReactElement) & {
  displayName?: string;
};

export const Center: CenterComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    { inline = false, sx, ...others }: CenterProps<C>,
    ref: PolymorphicRef<C>
  ) => (
    <Box<any>
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
