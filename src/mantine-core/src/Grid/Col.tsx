import React from 'react';
import { DefaultProps, useMantineTheme, MantineNumberSize, getSizeValue } from '@mantine/theme';

interface ColProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  span: number;
  offset?: number;
  gutter?: MantineNumberSize;
  grow?: boolean;
}

export function Col({
  themeOverride,
  children,
  span,
  gutter,
  offset = 0,
  grow,
  style,
  ...others
}: ColProps) {
  const theme = useMantineTheme(themeOverride);
  const spacing = getSizeValue({ size: gutter, sizes: theme.spacing });

  const styles: React.CSSProperties = {
    ...style,
    boxSizing: 'border-box',
    flex: `${grow ? '1' : '0'} 0 calc(${100 / (12 / span)}% - ${spacing}px)`,
    margin: spacing / 2,
  };

  if (offset) {
    styles.marginLeft = `calc(${100 / (12 / offset)}% + ${spacing / 2}px)`;
  }

  return (
    <div style={styles} {...others}>
      {children}
    </div>
  );
}

Col.displayName = '@mantine/core/Col';
