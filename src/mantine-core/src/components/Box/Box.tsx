import React, { forwardRef } from 'react';
import {
  DefaultProps,
  PolymorphicComponentProps,
  PolymorphicRef,
  extractMargins,
} from '@mantine/styles';
import { useSx, BoxSx } from './use-sx/use-sx';

interface _BoxProps extends Omit<DefaultProps, 'sx'> {
  sx?: BoxSx;
}

export type BoxProps<C> = PolymorphicComponentProps<C, _BoxProps>;

type BoxComponent = (<C = 'div'>(props: BoxProps<C>) => React.ReactElement) & {
  displayName?: string;
};

export const Box: BoxComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    { className, component, style, sx, ...others }: BoxProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { margins, rest } = extractMargins(others);
    const Element = component || 'div';
    return <Element ref={ref} className={useSx(sx, margins, className)} style={style} {...rest} />;
  }
);

Box.displayName = '@mantine/core/Box';
