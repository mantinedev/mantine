import React, { forwardRef } from 'react';
import {
  DefaultProps,
  PolymorphicComponentProps,
  PolymorphicRef,
  extractSystemStyles,
} from '@mantine/styles';
import { useSx, BoxSx } from './use-sx/use-sx';

interface _BoxProps extends Omit<DefaultProps, 'sx'> {
  sx?: BoxSx;
}

export type BoxProps<C> = C extends React.ElementType
  ? PolymorphicComponentProps<C, _BoxProps>
  : never;

type BoxComponent = (<C = 'div'>(props: BoxProps<C>) => React.ReactElement) & {
  displayName?: string;
};

export const Box: BoxComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    { className, component, style, sx, ...others }: BoxProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { systemStyles, rest } = extractSystemStyles(others);
    const Element = component || 'div';
    return (
      <Element ref={ref} className={useSx(sx, systemStyles, className)} style={style} {...rest} />
    );
  }
);

Box.displayName = '@mantine/core/Box';
