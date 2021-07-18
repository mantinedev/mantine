import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, MantineNumberSize, getSizeValue } from '../../theme';

export interface ColProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  span: number;
  columns?: number;
  offset?: number;
  gutter?: MantineNumberSize;
  grow?: boolean;
}

export function isValidSpan(span: number) {
  return typeof span === 'number' && span > 0 && span % 1 === 0;
}

export function Col({
  themeOverride,
  children,
  span,
  gutter,
  offset = 0,
  grow,
  style,
  columns,
  className,
  ...others
}: ColProps) {
  const theme = useMantineTheme(themeOverride);
  const spacing = getSizeValue({ size: gutter, sizes: theme.spacing });

  if (!isValidSpan(span) || span > columns) {
    return null;
  }

  const columnWidth = `calc(${100 / (columns / span)}% - ${spacing}px)`;

  const styles: React.CSSProperties = {
    ...style,
    boxSizing: 'border-box',
    flex: `${grow ? '1' : '0'} 0 ${columnWidth}`,
    maxWidth: grow ? 'unset' : columnWidth,
    margin: spacing / 2,
  };

  if (isValidSpan(offset)) {
    styles.marginLeft = `calc(${100 / (columns / offset)}% + ${spacing / 2}px)`;
  }

  return (
    <div style={styles} className={cx('mantine-col', className)} {...others}>
      {children}
    </div>
  );
}

Col.displayName = '@mantine/core/Col';
