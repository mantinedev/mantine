import React from 'react';
import cx from 'clsx';
import { useMantineTheme, DefaultProps, MantineColor, MantineSize } from '@mantine/theme';
import useStyles from './Text.styles';

interface TextProps extends DefaultProps {
  component?: React.ElementType<any>;
  children?: React.ReactNode;
  size?: MantineSize;
  color?: MantineColor;
  bold?: boolean;
  semibold?: boolean;
}

export default function Text<T = Record<string, any>>({
  className,
  component = 'div',
  children,
  size = 'md',
  bold = false,
  semibold = false,
  color,
  themeOverride,
  ...others
}: TextProps & T) {
  const classes = useStyles({ color, size, theme: useMantineTheme(themeOverride) });

  return React.createElement(
    component,
    {
      className: cx(
        classes.text,
        classes[size],
        { [classes.bold]: bold, [classes.semibold]: semibold },
        className
      ),
      ...others,
    },
    children
  );
}

Text.displayName = '@mantine/core/Text';
