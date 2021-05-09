import React, { Children } from 'react';
import cx from 'clsx';
import { DefaultProps, MantineNumberSize, useMantineTheme, getSizeValue } from '@mantine/theme';
import { Col } from './Col/Col';
import useStyles from './Grid.styles';

export { Col };

interface GridProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** <Col /> components only */
  children: React.ReactNode;

  /** Spacing between columns predefined value from theme.spacing or number for gutter in px  */
  gutter?: MantineNumberSize;
}

export function Grid({ className, themeOverride, gutter = 'md', children }: GridProps) {
  const theme = useMantineTheme(themeOverride);
  const classes = useStyles({ theme });
  const spacing = getSizeValue({ size: gutter, sizes: theme.spacing });

  const cols = (Children.toArray(children) as React.ReactElement[])
    .filter((item) => item.type === Col)
    .map((col) => React.cloneElement(col, { gutter }));

  return (
    <div style={{ margin: -spacing / 2 }} className={cx(classes.grid, className)}>
      {cols}
    </div>
  );
}

Grid.displayName = '@mantine/core/Grid';
