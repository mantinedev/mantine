import React, { forwardRef } from 'react';
import {
  DefaultProps,
  PolymorphicComponentProps,
  PolymorphicRef,
  useExtractedMargins,
} from '@mantine/styles';
import { useSx, BoxSx } from './use-sx/use-sx';

interface _BoxProps extends Omit<DefaultProps, 'sx'> {
  sx?: BoxSx;
}

export type BoxProps<C extends React.ElementType> = PolymorphicComponentProps<C, _BoxProps>;

type BoxComponent = (<C extends React.ElementType = 'div'>(
  props: BoxProps<C>
) => React.ReactElement) & { displayName?: string };

export const Box: BoxComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    { className, component, style, sx, ...others }: BoxProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const Element = component || 'div';

    return <Element ref={ref} className={useSx(sx, className)} style={mergedStyles} {...rest} />;
  }
);

// displayName is different to support sx tests
Box.displayName = 'MantineBox';
