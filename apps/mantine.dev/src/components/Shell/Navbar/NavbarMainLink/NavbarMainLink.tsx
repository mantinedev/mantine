import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconExternalLink } from '@tabler/icons-react';
import { UnstyledButton } from '@mantine/core';
import classes from './NavbarMainLink.module.css';

interface NavbarMainLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  external?: boolean;
  children: React.ReactNode;
  icon: React.ReactNode;
  onNavbarClose: () => void;
}

export function NavbarMainLink({
  href,
  external,
  children,
  icon,
  onNavbarClose,
}: NavbarMainLinkProps) {
  const router = useRouter();
  return (
    <UnstyledButton<any>
      component={external ? 'a' : Link}
      href={href}
      target={external ? '_blank' : undefined}
      className={classes.link}
      mod={{ active: router.pathname === href }}
      onClick={onNavbarClose}
    >
      <span className={classes.icon}>{icon}</span>
      <span className={classes.label}>{children}</span>
      {external && (
        <span className={classes.external}>
          <IconExternalLink size={14} />
        </span>
      )}
    </UnstyledButton>
  );
}
