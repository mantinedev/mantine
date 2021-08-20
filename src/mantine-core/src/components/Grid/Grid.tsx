import React, { Children } from 'react';
import cx from 'clsx';
import { DefaultProps, MantineNumberSize, useMantineTheme, getSizeValue } from '../../theme';
import { Col, ColProps, breakpoints, getColumnWidth } from './Col';

export { Col };
export type { ColProps };

export interface GridProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** <Col /> components only */
  children: React.ReactNode;

  /** Spacing between columns predefined value from theme.spacing or number for gutter in px  */
  gutter?: MantineNumberSize;

  /** Should columns in the last row take 100% of grid width */
  grow?: boolean;

  /** Set grid justify-content property */
  justify?: React.CSSProperties['justifyContent'];

  /** Set grid align-content property */
  align?: React.CSSProperties['alignContent'];

  /** Amount of columns in each row */
  columns?: number;
}

export function Grid({
  themeOverride,
  gutter = 'md',
  children,
  grow = false,
  justify = 'flex-start',
  align = 'stretch',
  style,
  columns = 12,
  className,
  ...others
}: GridProps) {
  const theme = useMantineTheme(themeOverride);
  const spacing = getSizeValue({ size: gutter, sizes: theme.spacing });

  const cols = (Children.toArray(children) as React.ReactElement[]).map((col, index) =>
    React.cloneElement(col, { gutter, grow, columns, key: index })
  );

  const columnSizes = [];
  for (let index = 0; index < columns; index += 1) {
    columnSizes.push(index + 1);
  }

  const createStyles = () => {
    let mediaQueries = '';
    let baseStyles = '';
    columnSizes.forEach((columnSpan) => {
       baseStyles = `${baseStyles} .mantine-col-${columnSpan} {
          flex:${grow ? '1' : '0'} 0 ${getColumnWidth(columnSpan, columns, spacing)};
          max-width:  ${grow ? 'unset' : getColumnWidth(columnSpan, columns, spacing)};
        }`;
    });

    breakpoints.forEach((breakpoint) => {
      let colStyles = '';
      columnSizes.forEach((columnSpan) => {
        colStyles = `${colStyles} .mantine-col-${breakpoint}-${columnSpan} {
          flex:${grow ? '1' : '0'} 0 ${getColumnWidth(columnSpan, columns, spacing)};
          max-width:  ${grow ? 'unset' : getColumnWidth(columnSpan, columns, spacing)};
        }`;
      });
       mediaQueries = `${mediaQueries} @media (min-width: ${theme.breakpoints[breakpoint]}px) { ${colStyles} }`;
    });
    mediaQueries = `${baseStyles} ${mediaQueries}`;
    return mediaQueries;
  };

  return (
    <>
      <style>
        {createStyles()}
      </style>
      <div
        style={{
          margin: -spacing / 2,
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: justify,
          alignItems: align,
          ...style,
        }}
        className={cx('mantine-grid', className)}
        {...others}
      >
        {cols}
      </div>
    </>
  );
}

Grid.displayName = '@mantine/core/Grid';
