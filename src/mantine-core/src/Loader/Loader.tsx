import React from 'react';
import {
  DefaultProps,
  MantineNumberSize,
  MantineColor,
  MantineTheme,
  useMantineTheme,
  useComponentDefaultProps,
} from '@mantine/styles';
import { Box } from '../Box';
import { Bars } from './loaders/Bars';
import { Oval } from './loaders/Oval';
import { Dots } from './loaders/Dots';

const LOADERS = {
  bars: Bars,
  oval: Oval,
  dots: Dots,
};

const sizes = {
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

const defaultProps: Partial<LoaderProps> = {
  size: 'md',
};

export function Loader(props: LoaderProps) {
  const { size, color, variant, ...others } = useComponentDefaultProps(
    'Loader',
    defaultProps,
    props
  );
  const theme = useMantineTheme();
  const defaultLoader = variant in LOADERS ? variant : theme.loader;
  const _color = color || theme.primaryColor;

  return (
    <Box
      role="presentation"
      component={LOADERS[defaultLoader] || LOADERS.bars}
      size={theme.fn.size({ size, sizes })}
      color={_color in theme.colors ? theme.fn.themeColor(_color, theme.fn.primaryShade()) : color}
      {...others}
    />
  );
}

Loader.displayName = '@mantine/core/Loader';
