import Link from 'next/link';
import { Anchor } from '@mantine/core';
import { HeaderItem } from '../HeaderItem/HeaderItem';
import classes from './LinkItem.module.css';

interface LinkItemProps {
  label: React.ReactNode;
  icon: React.ReactNode;
  children: React.ReactNode;
  link: string;
}

export function LinkItem({ label, icon, children, link }: LinkItemProps) {
  return (
    <HeaderItem label={label}>
      <div className={classes.wrapper}>
        <Anchor<any>
          component={link.startsWith('/') ? Link : 'a'}
          className={classes.link}
          href={link}
          fz="sm"
        >
          <div className={classes.icon}>{icon}</div>
          {children}
        </Anchor>
      </div>
    </HeaderItem>
  );
}
