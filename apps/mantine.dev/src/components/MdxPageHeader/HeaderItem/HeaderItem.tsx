import cx from 'clsx';
import { Text } from '@mantine/core';
import classes from './HeaderItem.module.css';

interface HeaderItemProps {
  label: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function HeaderItem({ label, children, className }: HeaderItemProps) {
  return (
    <div className={cx(classes.item, className)}>
      <Text className={classes.label} fz="sm">
        {label}
      </Text>
      {children}
    </div>
  );
}
