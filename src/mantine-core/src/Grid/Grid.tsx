import React, { Children } from 'react';
import { DefaultProps, MantineNumberSize, useMantineTheme, getSizeValue } from '@mantine/theme';
import { Col, ColProps } from './Col';

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
  ...others
}: GridProps) {
  const theme = useMantineTheme(themeOverride);
  const spacing = getSizeValue({ size: gutter, sizes: theme.spacing });

  const cols = (Children.toArray(children) as React.ReactElement[]).map((col, index) =>
    React.cloneElement(col, { gutter, grow, columns, key: index })
  );

  return (
    <div
      style={{
        margin: -spacing / 2,
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: justify,
        alignItems: align,
        ...style,
      }}
      {...others}
    >
      {cols}
    </div>
  );
}

Grid.displayName = '@mantine/core/Grid';
