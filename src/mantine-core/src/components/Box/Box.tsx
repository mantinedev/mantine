import React, { forwardRef } from 'react';
import {
  DefaultProps,
  PolymorphicComponentProps,
  PolymorphicRef,
  useCss,
  useMantineTheme,
  useExtractedMargins,
  CSSObject,
  MantineTheme,
} from '@mantine/styles';

type Sx = CSSObject | ((theme: MantineTheme) => CSSObject);
type BoxSx = Sx | Sx[];

interface _BoxProps extends Omit<DefaultProps, 'sx'> {
  sx?: BoxSx;
}

export type BoxProps<C extends React.ElementType> = PolymorphicComponentProps<C, _BoxProps>;

type BoxComponent = (<C extends React.ElementType = 'div'>(
  props: BoxProps<C>
) => React.ReactElement) & { displayName?: string };

function extractSx(sx: Sx, theme: MantineTheme) {
  return typeof sx === 'function' ? sx(theme) : sx;
}

function useBoxSx(sx: BoxSx, className: string) {
  const { css, cx } = useCss();
  const theme = useMantineTheme();
  if (Array.isArray(sx)) {
    return cx(
      className,
      sx.map((partial) => css(extractSx(partial, theme)))
    );
  }
  return cx(className, css(extractSx(sx, theme)));
}

export const Box: BoxComponent = forwardRef(
  <C extends React.ElementType = 'div'>(
    { className, component, style, sx, ...others }: BoxProps<C>,
    ref: PolymorphicRef<C>
  ) => {
    const { mergedStyles, rest } = useExtractedMargins({ others, style });
    const Element = component || 'div';

    return <Element ref={ref} className={useBoxSx(sx, className)} style={mergedStyles} {...rest} />;
  }
);

// displayName is different to support sx tests
Box.displayName = 'MantineBox';
