import React from 'react';
import { Checkbox, Text } from '@mantine/core';
import useStyles from './PackageItem.styles';

interface PackageItemProps {
  title: string;
  description: string;
  checked: boolean;
  onChange(value: boolean): void;
}

export function PackageItem({ title, description, checked, onChange }: PackageItemProps) {
  const classes = useStyles();
  return (
    <button className={classes.wrapper} type="button" onClick={() => onChange(!checked)}>
      <Checkbox checked={checked} onChange={() => {}} />
      <div className={classes.body}>
        <Text className={classes.title}>{title}</Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </button>
  );
}
