import React from 'react';
import cx from 'clsx';
import { DefaultProps, useMantineTheme, MantineNumberSize, getSizeValue } from '../../theme';

export interface ColProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  span: number;
  columns?: number;
  offset?: number;
  gutter?: MantineNumberSize;
  grow?: boolean;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export function isValidSpan(span: number) {
  return typeof span === 'number' && span > 0 && span % 1 === 0;
}

const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'] as const;

export function Col({
  themeOverride,
  children,
  span,
  gutter,
  offset = 0,
  grow,
  xs,
  sm,
  md,
  lg,
  xl,
  style,
  columns,
  className,
  ...others
}: ColProps) {
  const breakpoints = { xs, sm, md, lg, xl };
  const theme = useMantineTheme(themeOverride);
  const spacing = getSizeValue({ size: gutter, sizes: theme.spacing });

  if (!isValidSpan(span) || span > columns) {
    return null;
  }

  let styles: React.CSSProperties = {};

  styles = {
    ...style,
    boxSizing: 'border-box',
    margin: spacing / 2,
  };

  if (isValidSpan(offset)) {
    styles.marginLeft = `calc(${100 / (columns / offset)}% + ${spacing / 2}px)`;
  }

  const getColumnWidth = (colSpan) => `calc(${100 / (columns / colSpan)}% - ${spacing}px)`;

  let sizeClassObj = {
    [`mantine-col-${span}`]: span !== undefined,
  };

  sizes.forEach((size) => {
    const propSize = breakpoints[size];
    if (!isValidSpan(breakpoints[size])) {
      return null;
    }
    sizeClassObj = {
      ...sizeClassObj,
      [`mantine-col-${size}-${propSize}`]: propSize !== undefined,
    };
    return true;
  });

  return (
    <>
      <style>
        {`
          .mantine-col-${span} {
            flex: ${grow ? '1' : '0'} 0 ${getColumnWidth(span)};
            max-width: ${grow ? 'unset' : getColumnWidth(span)};
          }
        `}
      </style>
      {sizes.map((size) => {
        if (!isValidSpan(breakpoints[size])) {
          return null;
        }
        return (
          <style>
            {`
                @media (min-width: ${theme.breakpoints[size]}px) {
                  .mantine-col-${size}-${breakpoints[size]} {
                    flex: ${grow ? '1' : '0'} 0 ${getColumnWidth(breakpoints[size])};
                    max-width: ${grow ? 'unset' : getColumnWidth(breakpoints[size])};
                  }
                }
              `}
          </style>
        );
      })}
      <div style={styles} className={cx('mantine-col', className, sizeClassObj)} {...others}>
        {children}
      </div>
    </>
  );
}

Col.displayName = '@mantine/core/Col';
