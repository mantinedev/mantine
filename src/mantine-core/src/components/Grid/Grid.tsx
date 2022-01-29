import React, { Children, forwardRef } from 'react';
import { DefaultProps, MantineNumberSize, ForwardRefWithStaticComponents } from '@mantine/styles';
import { Box } from '../Box';
import { Col } from './Col/Col';
import useStyles from './Grid.styles';

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

type GridComponent = ForwardRefWithStaticComponents<GridProps, { Col: typeof Col }>;

export const Grid: GridComponent = forwardRef<HTMLDivElement, GridProps>(
  (
    {
      gutter = 'md',
      children,
      grow = false,
      justify = 'flex-start',
      align = 'stretch',
      columns = 12,
      className,
      classNames,
      styles,
      id,
      ...others
    }: GridProps,
    ref
  ) => {
    const { classes, cx } = useStyles(
      { gutter, justify, align },
      { classNames, styles, name: 'Grid' }
    );

    const cols = (Children.toArray(children) as React.ReactElement[]).map((col, index) =>
      React.cloneElement(col, {
        gutter,
        grow,
        columns,
        span: col.props.span || columns,
        key: index,
      })
    );

    return (
      <Box className={cx(classes.root, className)} ref={ref} {...others}>
        {cols}
      </Box>
    );
  }
) as any;

Grid.Col = Col;
Grid.displayName = '@mantine/core/Grid';
