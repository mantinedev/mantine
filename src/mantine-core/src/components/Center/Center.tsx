import React, { forwardRef } from 'react';
import {
  DefaultProps,
  PolymorphicComponentProps,
  PolymorphicRef,
  useMantineDefaultProps,
} from '@mantine/styles';
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
  (props: CenterProps<'div'>, ref: PolymorphicRef<'div'>) => {
    const { inline, sx, ...others } = useMantineDefaultProps('Center', {}, props);
    return (
      <Box
        ref={ref}
        sx={[
          {
            display: inline ? 'inline-flex' : 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...others}
      />
    );
  }
) as any;

Center.displayName = '@mantine/core/Center';
