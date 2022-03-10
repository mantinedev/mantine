import React, { forwardRef } from 'react';
import { DefaultProps, getDefaultZIndex, useMantineDefaultProps } from '@mantine/styles';
import { Box } from '../../Box';
import useStyles, { HeaderPosition } from './Header.styles';

export interface HeaderProps extends DefaultProps, React.ComponentPropsWithoutRef<'nav'> {
  /** Header content */
  children: React.ReactNode;

  /** Header height */
  height: number | string;

  /** Changes position to fixed, controlled by AppShell component if rendered inside */
  fixed?: boolean;

  /** Control top, left, right or bottom position values, controlled by AppShell component if rendered inside */
  position?: HeaderPosition;

  /** z-index */
  zIndex?: number;
}

const defaultProps: Partial<HeaderProps> = {
  fixed: false,
  position: { top: 0, left: 0, right: 0 },
  zIndex: getDefaultZIndex('app'),
};

export const Header = forwardRef<HTMLElement, HeaderProps>((props: HeaderProps, ref) => {
  const { children, className, classNames, styles, height, fixed, position, zIndex, ...others } =
    useMantineDefaultProps('Header', defaultProps, props);

  const { classes, cx } = useStyles(
    { height, fixed, position, zIndex },
    { name: 'Header', classNames, styles }
  );

  return (
    <Box component="nav" className={cx(classes.root, className)} ref={ref} {...others}>
      {children}
    </Box>
  );
});

Header.displayName = '@mantine/core/Header';
