import React from 'react';
import { Composite, CompositeBaseProps } from '@mantine/core';
import classes from './Composite.grid.module.css';

export function LayoutGrid<T>({
  items,
  getItemKey,
  value,
  defaultValue,
  onChange,
  disabledKeys,
  focusOptions,
  selectionOptions,
  renderItem,
}: CompositeBaseProps<T>) {
  return (
    <Composite
      // {...props}
      role="grid"
      navigableChildRole="gridcell"
      disabledKeys={disabledKeys}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      focusOptions={focusOptions}
      selectionOptions={selectionOptions}
      items={items}
      getItemKey={getItemKey}
      renderItem={renderItem}
      renderRoot={({ children, ...rootProps }) => (
        <div {...rootProps} className={classes.grid}>
          <div role="row" className={classes.row}>
            {children}
          </div>
        </div>
      )}
    />
  );
}
