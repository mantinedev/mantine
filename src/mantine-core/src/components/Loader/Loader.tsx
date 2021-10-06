import React from 'react';
import clsx from 'clsx';
import {
  useMantineTheme,
  DefaultProps,
  MantineNumberSize,
  getThemeColor,
  getSizeValue,
  MantineColor,
  MantineTheme,
  useExtractedMargins,
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

export function Loader({ size = 'md', color, className, variant, style, ...others }: LoaderProps) {
  const theme = useMantineTheme();
  const { mergedStyles, rest } = useExtractedMargins({ others, style });
  const defaultLoader = variant in LOADERS ? variant : theme.loader;
  const Component = LOADERS[defaultLoader] || LOADERS.bars;
  const _color = color || theme.primaryColor;

  return (
    <Component
      size={getSizeValue({ size, sizes: LOADER_SIZES })}
      style={mergedStyles}
      color={
        _color in theme.colors
          ? getThemeColor({ theme, color: _color, shade: theme.colorScheme === 'dark' ? 4 : 6 })
          : color
      }
      role="presentation"
      className={clsx('mantine-loader', className)}
      {...rest}
    />
  );
}

Loader.displayName = '@mantine/core/Loader';
