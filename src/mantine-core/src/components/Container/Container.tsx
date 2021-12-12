import React, { forwardRef } from 'react';
import { DefaultProps, MantineNumberSize } from '@mantine/styles';
import { Box } from '../Box';
import useStyles from './Container.styles';

export interface ContainerProps extends DefaultProps, React.ComponentPropsWithoutRef<'div'> {
  /** Predefined container max-width or number for max-width in px */
  size?: MantineNumberSize;

  /** Horizontal padding defined in theme.spacing, or number value for padding in px */
  padding?: MantineNumberSize;

  /** If fluid is set to true, size prop is ignored and Container always take 100% of width */
  fluid?: boolean;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    { className, padding = 'md', fluid, size, styles, classNames, ...others }: ContainerProps,
    ref
  ) => {
    const { classes, cx } = useStyles(
      { padding, fluid, size },
      { styles, classNames, name: 'Container' }
    );
    return <Box className={cx(classes.root, className)} ref={ref} {...others} />;
  }
);

Container.displayName = '@mantine/core/Container';
