import React from 'react';
import { DefaultProps, MantineNumberSize } from '@mantine/styles';
import useStyles from './Stack.styles';
import { Box } from '../Box';

export interface StackProps extends DefaultProps {
  spacing?: MantineNumberSize;
  direction?: React.CSSProperties['flexDirection'];
  children?: React.ReactNode;
}

export const Stack: React.FC<StackProps> = ({
  children,
  direction = 'column',
  classNames,
  styles,
  className,
  spacing,
  ...others
}) => {
  const { classes, cx } = useStyles({ direction, spacing }, { styles, classNames, name: 'Stack' });
  return (
    <Box className={cx(classes.root, className)} {...others}>
      {children}
    </Box>
  );
};

Stack.displayName = '@mantine/core/Stack';
