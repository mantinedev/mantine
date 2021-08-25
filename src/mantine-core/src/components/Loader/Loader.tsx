import React from 'react';
import cx from 'clsx';
import {
  DefaultProps,
  MantineNumberSize,
  useMantineTheme,
  getThemeColor,
  getSizeValue,
} from '../../theme';
import { Bars } from './loaders/Bars';
import { Oval } from './loaders/Oval';
import { Dots } from './loaders/Dots';

const LOADERS = {
  bars: Bars,
  oval: Oval,
  dots: Dots,
};

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
  color?: string;

  /** Loader appearance */
  variant?: 'bars' | 'oval' | 'dots';
}

export function Loader({
  size = 'md',
  color,
  themeOverride,
  className,
  variant = 'oval',
  ...others
}: LoaderProps) {
  const theme = useMantineTheme(themeOverride);
  const Component = LOADERS[variant] || LOADERS.bars;

  return (
    <Component
      size={getSizeValue({ size, sizes: LOADER_SIZES })}
      color={getThemeColor({ theme, color, shade: theme.colorScheme === 'dark' ? 4 : 6 })}
      role="presentation"
      className={cx('mantine-loader', className)}
      {...others}
    />
  );
}

Loader.displayName = '@mantine/core/Loader';
