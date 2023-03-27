import React from 'react';
import { Link } from 'gatsby';
import { ThemeIcon, useMantineTheme } from '@mantine/core';
import useStyles from './NavbarMainLink.styles';

interface NavbarMainLinkProps {
  className?: string;
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  color: string;
  rawIcon?: boolean;
  onClick(): void;
}

export default function NavbarMainLink({
  to,
  className,
  icon,
  children,
  color,
  onClick,
  rawIcon,
}: NavbarMainLinkProps) {
  const { classes, cx } = useStyles();
  const theme = useMantineTheme();

  const Component: any = to.startsWith('https') ? 'a' : Link;
  const linkProps = to.startsWith('https') ? { href: to } : { to, activeClassName: classes.active };

  return (
    <Component className={cx(classes.mainLink, className)} onClick={onClick} {...linkProps}>
      {rawIcon ? (
        icon
      ) : (
        <ThemeIcon size={30} sx={{ backgroundColor: color, color: theme.white }} radius="lg">
          {icon}
        </ThemeIcon>
      )}

      <div className={classes.body}>{children}</div>
    </Component>
  );
}
