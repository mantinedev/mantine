import React from 'react';
import { Text } from '@mantine/core';
import useStyles from './HeaderItem.styles';

interface HeaderItemProps {
  label: React.ReactNode;
  children: React.ReactNode;
  align?: 'center' | 'flex-start';
}

export function HeaderItem({ label, children, align }: HeaderItemProps) {
  const { classes } = useStyles();
  return (
    <div className={classes.item} style={{ alignItems: align }}>
      <Text className={classes.label} size="sm">
        {label}
      </Text>
      {children}
    </div>
  );
}
