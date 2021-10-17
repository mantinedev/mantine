import React, { Children, forwardRef } from 'react';
import { DefaultProps, MantineNumberSize, useUuid, useExtractedMargins } from '@mantine/styles';
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

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    {
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
    }: GridProps,
    ref
  ) => {
    const uuid = useUuid(id);
    const { classes, cx } = useStyles({ gutter, justify, align }, { name: 'Grid' });
    const { mergedStyles, rest } = useExtractedMargins({ others, style });

    const cols = (Children.toArray(children) as React.ReactElement[]).map((col, index) =>
      React.cloneElement(col, { gutter, grow, columns, key: index, id: uuid })
    );

    return (
      <div style={mergedStyles} className={cx(classes.grid, className)} ref={ref} {...rest}>
        {cols}
      </div>
    );
  }
);

Grid.displayName = '@mantine/core/Grid';
