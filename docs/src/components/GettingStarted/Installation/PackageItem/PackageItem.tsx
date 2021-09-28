import React from 'react';
import { CheckboxCard } from '../../../../gallery/CheckboxCard/CheckboxCard';
import useStyles from './PackageItem.styles';

interface PackageItemProps {
  title: string;
  description: string;
  checked: boolean;
  onChange(value: boolean): void;
}

export function PackageItem({ title, description, checked, onChange }: PackageItemProps) {
  const { classes } = useStyles();
  return (
    <CheckboxCard
      checked={checked}
      title={title}
      description={description}
      onChange={onChange}
      className={classes.wrapper}
    />
  );
}
