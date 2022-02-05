import React, { forwardRef } from 'react';
import { DefaultProps, MantineNumberSize, useMantineDefaultProps } from '@mantine/styles';
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

const defaultProps: Partial<ContainerProps> = {
  padding: 'md',
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (props: ContainerProps, ref) => {
    const { className, padding, fluid, size, styles, classNames, ...others } =
      useMantineDefaultProps('Container', defaultProps, props);

    const { classes, cx } = useStyles(
      { padding, fluid, size },
      { styles, classNames, name: 'Container' }
    );

    return <Box className={cx(classes.root, className)} ref={ref} {...others} />;
  }
);

Container.displayName = '@mantine/core/Container';
