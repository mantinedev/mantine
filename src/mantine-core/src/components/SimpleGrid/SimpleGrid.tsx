import React, { Children } from 'react';
import cx from 'clsx';
import { useId } from '@mantine/hooks';
import { useMantineTheme, DefaultProps, MantineNumberSize, getSizeValue } from '@mantine/tss';

interface GridBreakpoint {
  maxWidth: number;
  cols: number;
  spacing?: MantineNumberSize;
}

export interface SimpleGridProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Breakpoints data to change items per row and spacing based on max-width */
  breakpoints?: GridBreakpoint[];

  /** Default amount of columns, used when none of breakpoints can be applied  */
  cols: number;

  /** Default spacing between columns, used when none of breakpoints can be applied */
  spacing?: MantineNumberSize;
}

export function SimpleGrid({
  className,
  breakpoints = [],
  cols,
  id,
  spacing = 'md',
  children,
  ...others
}: SimpleGridProps) {
  const uuid = useId(id);
  const theme = useMantineTheme();
  const sortedBreakpoints = [...breakpoints].sort((a, b) => b.maxWidth - a.maxWidth);
  const gridClassName = `grid-${uuid}`;
  const colClassName = `col-${uuid}`;

  const columns = (Children.toArray(children) as React.ReactElement[]).map((column) =>
    React.cloneElement(column, { className: cx(colClassName, column.props.className) })
  );

  const baseSpacing = getSizeValue({ size: spacing, sizes: theme.spacing });
  const baseStyles = `
    .${gridClassName} {
      box-sizing: border-box;
      display: flex;
      flex-wrap: wrap;
      margin: ${-baseSpacing / 2}px;
    }

    .${colClassName} {
      box-sizing: border-box;
      width: 100%;
      margin: ${baseSpacing / 2}px;
      max-width: calc(${100 / cols}% - ${baseSpacing}px);
    }
  `;

  const queries = sortedBreakpoints.reduce((acc, query) => {
    const querySpacing = getSizeValue({ size: query.spacing || spacing, sizes: theme.spacing });
    return `${acc}
      @media (max-width: ${query.maxWidth}px) {
        .${gridClassName} {
          margin: ${-querySpacing / 2}px;
        }

        .${colClassName} {
          margin: ${querySpacing / 2}px;
          max-width: calc(${100 / query.cols}% - ${querySpacing}px);
        }
      }
    `;
  }, baseStyles);

  return (
    <>
      {/* Usage of style tag is required due to bug in jss which does not allow to implement this */}
      <style>{queries}</style>
      <div className={cx(gridClassName, className)} id={id} {...others}>
        {columns}
      </div>
    </>
  );
}

SimpleGrid.displayName = '@mantine/core/SimpleGrid';
