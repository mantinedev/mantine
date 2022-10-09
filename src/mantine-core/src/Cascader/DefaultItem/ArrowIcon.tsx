import React from 'react';
import { DefaultProps, MantineSize, useMantineTheme } from '@mantine/styles';

export interface CascaderArrowIconProps
  extends DefaultProps,
    React.ComponentPropsWithoutRef<'span'> {
  size: MantineSize;
  error?: any;
}

const iconSizes = {
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
};

export function ArrowIcon({ size, error, style, ...rest }: CascaderArrowIconProps) {
  const theme = useMantineTheme();
  const _size = theme.fn.size({ size, sizes: iconSizes });

  return (
    <span
      style={{
        fontSize: _size,
        color: error ? theme.colors.red[6] : theme.colors.gray[6],
        paddingLeft: theme.dir === 'ltr' ? 0.5 * _size : undefined,
        paddingRight: theme.dir === 'rtl' ? 0.5 * _size : undefined,
        ...style,
      }}
      {...rest}
    >
      {'>'}
    </span>
  );
}
