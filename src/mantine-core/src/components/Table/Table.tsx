import React, { forwardRef } from 'react';
import { DefaultProps, useExtractedMargins } from '@mantine/styles';
import useStyles from './Table.styles';

export interface TableProps extends DefaultProps, React.ComponentPropsWithoutRef<'table'> {
  /** If true every odd row of table will have gray background color */
  striped?: boolean;

  /** If true row will have hover color */
  highlightOnHover?: boolean;

  /** Table caption position */
  captionSide?: 'top' | 'bottom';
}

export const Table = forwardRef<HTMLTableElement, TableProps>(
  (
    {
      className,
      children,
      striped = false,
      highlightOnHover = false,
      captionSide = 'top',
      style,
      sx,
      ...others
    }: TableProps,
    ref
  ) => {
    const { classes, cx } = useStyles({ captionSide }, { sx, name: 'Table' });
    const { mergedStyles, rest } = useExtractedMargins({ others, style });

    return (
      <table
        {...rest}
        ref={ref}
        style={mergedStyles}
        className={cx(
          classes.root,
          { [classes.striped]: striped, [classes.hover]: highlightOnHover },
          className
        )}
      >
        {children}
      </table>
    );
  }
);

Table.displayName = '@mantine/core/Table';
