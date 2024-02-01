import React, { useMemo } from 'react';
import { Checkbox, Composite, CompositeBaseProps, Flex, Paper } from '@mantine/core';
import { mantineComponents } from './_data';
import classes from './Composite.demo.module.css';

export function PackageList(
  props: Omit<CompositeBaseProps<string>, 'items' | 'getItemKey' | 'renderItem'>
) {
  const packages = useMemo(
    () =>
      mantineComponents.reduce((_packages, component) => {
        if (component.package) _packages.add(component.package);
        return _packages;
      }, new Set<string>()),

    []
  );

  return (
    <Composite
      {...props}
      role="listbox"
      navigableChildRole="option"
      items={[...packages]}
      getItemKey={(item) => item}
      renderRoot={(rootProps) => <Flex {...rootProps} direction="column" gap="xs" />}
      renderItem={(item, { selected, disabled }, itemProps) => (
        <Paper
          {...itemProps}
          // withBorder
          p="xs"
          className={classes.compositeItem}
        >
          <Checkbox readOnly checked={selected} disabled={disabled} label={item} />
        </Paper>
      )}
    />
  );
}
