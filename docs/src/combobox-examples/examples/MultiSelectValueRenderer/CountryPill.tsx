import React from 'react';
import { CloseButton } from '@mantine/core';
import { countriesData, flags } from './countries-data';
import classes from './CountryPill.module.css';

interface CountryPillProps extends React.ComponentPropsWithoutRef<'div'> {
  value: string;
  onRemove?(): void;
}

export function CountryPill({ value, onRemove, ...others }: CountryPillProps) {
  const OptionFlag = flags[value];
  const country = countriesData.find((item) => item.value === value);

  return (
    <div className={classes.pill} {...others}>
      <div className={classes.flag}>
        <OptionFlag />
      </div>
      <div className={classes.label}>{country?.label}</div>
      <CloseButton
        onMouseDown={onRemove}
        variant="transparent"
        color="gray"
        size={22}
        iconSize={14}
        tabIndex={-1}
      />
    </div>
  );
}
