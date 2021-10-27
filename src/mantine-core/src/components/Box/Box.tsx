import React, { forwardRef } from 'react';
import {
  DefaultProps,
  PolymorphicComponentProps,
  PolymorphicRef,
  useSx,
  useExtractedMargins,
} from '@mantine/styles';

interface _BoxProps extends DefaultProps {}

export type BoxProps<C extends React.ElementType> = PolymorphicComponentProps<C, _BoxProps>;

type BoxComponent = <C extends React.ElementType = 'div'>(props: BoxProps<C>) => React.ReactElement;

export const Box: BoxComponent & { displayName?: string } = forwardRef(
  <C extends React.ElementType = 'div'>(
    { className, component, style, sx, ...others }: BoxProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { sxClassName } = useSx({ sx, className });
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const Element = component || 'div';

    return <Element ref={ref} className={sxClassName} style={mergedStyles} {...rest} />;
  }
);

Box.displayName = '@mantine/core/Box';
