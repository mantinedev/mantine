import React from 'react';
import Link from 'next/link';
import { frameworkIcons } from '@/components/icons';
import type { FrameworkData } from '../data';
import classes from './FrameworkLink.module.css';

interface FrameworkLinkProps {
  data: FrameworkData;
}

export function FrameworkLink({ data }: FrameworkLinkProps) {
  const Icon = frameworkIcons[data.type];
  return (
    <Link href={data.link} className={classes.link}>
      <div className={classes.iconWrapper}>
        <Icon className={classes.icon} />
      </div>
      <div className={classes.name}>{data.name}</div>
    </Link>
  );
}
