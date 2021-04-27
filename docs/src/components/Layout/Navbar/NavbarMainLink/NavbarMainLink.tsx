import React from 'react';
import { Link } from 'gatsby';
import cx from 'clsx';
import { ThemeIcon, useMantineTheme } from '@mantine/core';
import useStyles from './NavbarMainLink.styles';

interface NavbarMainLinkProps {
  className?: string;
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  color: string;
  onClick(): void;
}

export default function NavbarMainLink({
  to,
  className,
  icon,
  children,
  color,
  onClick,
}: NavbarMainLinkProps) {
  const classes = useStyles();
  const theme = useMantineTheme();

  return (
    <Link
      className={cx(classes.mainLink, className)}
      activeClassName={classes.active}
      to={to}
      onClick={onClick}
    >
      <ThemeIcon
        size={30}
        color={color}
        variant={theme.colorScheme === 'dark' ? 'filled' : 'light'}
        radius="lg"
      >
        {icon}
      </ThemeIcon>
      <div className={classes.body}>{children}</div>
    </Link>
  );
}
