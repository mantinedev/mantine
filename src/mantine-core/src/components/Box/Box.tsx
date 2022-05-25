import React, { forwardRef } from 'react';
import {
  DefaultProps,
  PolymorphicComponentProps,
  PolymorphicRef,
  extractSystemStyles,
} from '@mantine/styles';
import { useSx } from './use-sx/use-sx';

interface _BoxProps extends DefaultProps {}

export type BoxProps<C> = PolymorphicComponentProps<C, _BoxProps>;

type BoxComponent = (<C = 'div'>(props: BoxProps<C>) => React.ReactElement) & {
  displayName?: string;
};

export const Box: BoxComponent = forwardRef(
  ({ className, component, style, sx, ...others }: BoxProps<'div'>, ref: PolymorphicRef<'div'>) => {
    const { systemStyles, rest } = extractSystemStyles(others);
    const Element = component || 'div';
    return (
      <Element ref={ref} className={useSx(sx, systemStyles, className)} style={style} {...rest} />
    );
  }
) as any;

Box.displayName = '@mantine/core/Box';
