import React from 'react';
import { DefaultProps, useMantineTheme, MantineNumberSize, getSizeValue } from '@mantine/theme';

interface ColProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  span: number;
  gutter?: MantineNumberSize;
}

export function Col({ themeOverride, children, span, gutter, ...others }: ColProps) {
  const theme = useMantineTheme(themeOverride);
  const spacing = getSizeValue({ size: gutter, sizes: theme.spacing });

  const width = `calc(${100 / (12 / span)}% - ${spacing}px)`;
  return (
    <div style={{ flex: `0 0 ${width}`, margin: spacing / 2 }} {...others}>
      {children}
    </div>
  );
}

Col.displayName = '@mantine/core/Col';
