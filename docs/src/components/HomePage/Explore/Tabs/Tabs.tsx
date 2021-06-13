import React from 'react';
import cx from 'clsx';
import { Text, Transition } from '@mantine/core';
import { ExploreDataItem } from '../data';
import useStyles from './Tabs.styles';

interface TabsProps {
  data: readonly ExploreDataItem[];
  active: string;
  onChange(value: string): void;
  className?: string;
}

export function Tabs({ data, active, onChange, className }: TabsProps) {
  const classes = useStyles();
  const tabs = data.map((tab, index) => (
    <button
      className={cx(classes.tab, { [classes.active]: active === tab.id })}
      type="button"
      key={tab.id}
      onClick={() => onChange(tab.id)}
    >
      <div className={classes.header}>
        <div className={classes.index}>{index + 1}</div>
        <Text className={classes.title}>{tab.title}</Text>
      </div>
      <Transition
        mounted={tab.id === active}
        duration={200}
        timingFunction="ease"
        transition={{
          in: { maxHeight: 80, opacity: 1 },
          out: { maxHeight: 0, opacity: 0 },
          common: { overflow: 'hidden' },
          transitionProperty: 'max-height, opacity',
        }}
      >
        {(transitionStyles) => (
          <Text className={classes.description} style={transitionStyles}>
            {tab.description}
          </Text>
        )}
      </Transition>
    </button>
  ));
  return <div className={className}>{tabs}</div>;
}
