import React, { Children } from 'react';
import cx from 'clsx';
import { useId } from '@mantine/hooks';
import { DefaultProps, MantineNumberSize, useMantineTheme, getSizeValue } from '@mantine/theme';
import { Col, ColProps, breakpoints } from './Col';
import { getResponsiveStyles } from './get-responsive-styles';

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
  gutter = 'md',
  children,
  grow = false,
  justify = 'flex-start',
  align = 'stretch',
  style,
  columns = 12,
  className,
  id,
  ...others
}: GridProps) {
  const uuid = useId(id);
  const theme = useMantineTheme();
  const spacing = getSizeValue({ size: gutter, sizes: theme.spacing });

  const cols = (Children.toArray(children) as React.ReactElement[]).map((col, index) =>
    React.cloneElement(col, { gutter, grow, columns, key: index, id: uuid })
  );

  let styles: React.CSSProperties = {};

  styles = {
    margin: -spacing / 2,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: justify,
    alignItems: align,
    ...style,
  };

  return (
    <div style={styles} className={cx('mantine-grid', className)} {...others}>
      <style>{getResponsiveStyles({ uuid, breakpoints, columns, grow, theme })}</style>
      {cols}
    </div>
  );
}

Grid.displayName = '@mantine/core/Grid';
