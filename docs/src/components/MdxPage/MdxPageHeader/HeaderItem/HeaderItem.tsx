import React from 'react';
import { Text } from '@mantine/core';
import useStyles from './HeaderItem.styles';

interface HeaderItemProps {
  label: React.ReactNode;
  children: React.ReactNode;
}

export function HeaderItem({ label, children }: HeaderItemProps) {
  const classes = useStyles();
  return (
    <div className={classes.item}>
      <Text className={classes.label} size="sm">
        {label}
      </Text>
      {children}
    </div>
  );
}
