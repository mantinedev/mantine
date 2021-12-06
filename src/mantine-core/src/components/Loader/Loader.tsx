import React from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  MantineColor,
  MantineTheme,
  useExtractedMargins,
  useSx,
} from '@mantine/styles';
import { Bars } from './loaders/Bars';
import { Oval } from './loaders/Oval';
import { Dots } from './loaders/Dots';

const LOADERS = {
  bars: Bars,
  oval: Oval,
  dots: Dots,
} as const;

export const LOADER_SIZES = {
  xs: 18,
  sm: 22,
  md: 36,
  lg: 44,
  xl: 58,
};

export interface LoaderProps extends DefaultProps, React.ComponentPropsWithoutRef<'svg'> {
  /** Defines width of loader */
  size?: MantineNumberSize;

  /** Loader color from theme */
  color?: MantineColor;

  /** Loader appearance */
  variant?: MantineTheme['loader'];
}

export function Loader({
  size = 'md',
  color,
  className,
  variant,
  style,
  sx,
  ...others
}: LoaderProps) {
  const { sxClassName, theme } = useSx({ sx, className });
  const { mergedStyles, rest } = useExtractedMargins({ others, style });
  const defaultLoader = variant in LOADERS ? variant : theme.loader;
  const Component = LOADERS[defaultLoader] || LOADERS.bars;
  const _color = color || theme.primaryColor;

  return (
    <Component
      size={theme.fn.size({ size, sizes: LOADER_SIZES })}
      style={mergedStyles}
      color={
        _color in theme.colors
          ? theme.fn.themeColor(_color, theme.colorScheme === 'dark' ? 4 : 6)
          : color
      }
      role="presentation"
      className={sxClassName}
      {...rest}
    />
  );
}

Loader.displayName = '@mantine/core/Loader';
