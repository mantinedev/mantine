import React from 'react';
import cx from 'clsx';
import { ColorSwatch, ElementProps, Group, Paper, PaperProps } from '@mantine/core';
import classes from './ChartTooltip.module.css';

interface ChartTooltipProps extends PaperProps, ElementProps<'div'> {
  label?: React.ReactNode;
  payload: any[];
}

export function ChartTooltip({ payload, label, className, ...others }: ChartTooltipProps) {
  const items = payload.map((item) => (
    <Group key={item.name} justify="space-between" gap={0} className={classes.item}>
      <Group className={classes.itemBody}>
        <ColorSwatch
          color={item.color}
          size={12}
          className={classes.itemColor}
          withShadow={false}
        />
        <div className={classes.itemName}>{item.name}</div>
      </Group>
      <div className={classes.itemData}>{item.payload[item.dataKey]}</div>
    </Group>
  ));

  return (
    <Paper shadow="lg" radius="md" className={cx(classes.root, className)} {...others}>
      {label && <div className={classes.label}>{label}</div>}
      <div className={classes.body}>{items}</div>
    </Paper>
  );
}
