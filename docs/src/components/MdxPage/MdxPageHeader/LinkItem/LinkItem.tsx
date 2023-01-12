import React from 'react';
import { Anchor } from '@mantine/core';
import { HeaderItem } from '../HeaderItem/HeaderItem';
import useStyles from './LinkItem.styles';

interface LinkItemProps {
  label: React.ReactNode;
  icon: React.ReactNode;
  children: React.ReactNode;
  link: string;
}

export function LinkItem({ label, icon, children, link }: LinkItemProps) {
  const { classes } = useStyles();

  return (
    <HeaderItem label={label}>
      <div className={classes.wrapper}>
        <Anchor className={classes.link} href={link} size="sm">
          <div className={classes.icon}>{icon}</div>
          {children}
        </Anchor>
      </div>
    </HeaderItem>
  );
}
