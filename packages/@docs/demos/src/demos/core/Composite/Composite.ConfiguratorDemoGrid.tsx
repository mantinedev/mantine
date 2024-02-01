import React from 'react';
import { Composite, CompositeItemRenderFn, FocusOptions, SelectionOptions } from '@mantine/core';
import classes from './Composite.grid.module.css';

export interface DemoCompositeComponentProps<T> extends SelectionOptions, FocusOptions {
  renderItem: CompositeItemRenderFn<T>;
  items: T[];
}

export function ConfiguratorDemoGrid<T>({
  multiple,
  followFocus,
  trackSelectioMode,
  loop,
  moveToNextColumn,
  moveToNextRow,
  renderItem,
  items,
  ...rest
}: DemoCompositeComponentProps<T>) {
  return (
    <Composite
      {...rest}
      role="grid"
      navigableChildRole="gridcell"
      items={items}
      focusOptions={{ loop, moveToNextRow, moveToNextColumn }}
      selectionOptions={{ multiple, followFocus, trackSelectioMode }}
      renderRoot={({ children, ...rootProps }) => (
        <div {...rootProps} className={classes.grid}>
          <div role="row" className={classes.row}>
            {children}
          </div>
        </div>
      )}
      renderItem={renderItem}
    />
  );
}
