import React from 'react';
import cx from 'clsx';
import {
  useMantineTheme,
  DefaultProps,
  MantineNumberSize,
  getThemeColor,
  getSizeValue,
  MantineColor,
  MantineTheme,
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

export function Loader({ size = 'md', color, className, variant, ...others }: LoaderProps) {
  const theme = useMantineTheme();
  const defaultLoader = variant in LOADERS ? variant : theme.loader;
  const Component = LOADERS[defaultLoader] || LOADERS.bars;
  const _color = color || theme.primaryColor;

  return (
    <Component
      size={getSizeValue({ size, sizes: LOADER_SIZES })}
      color={
        _color in theme.colors
          ? getThemeColor({ theme, color: _color, shade: theme.colorScheme === 'dark' ? 4 : 6 })
          : color
      }
      role="presentation"
      className={cx('mantine-loader', className)}
      {...others}
    />
  );
}

Loader.displayName = '@mantine/core/Loader';
