import React from 'react';
import cx from 'clsx';
import { IconSearch } from '@tabler/icons-react';
import { UnstyledButton, Text, Group, BoxProps, ElementProps, rem } from '@mantine/core';
import classes from './SearchControl.module.css';

interface SearchControlProps extends BoxProps, ElementProps<'button'> {}

export function SearchControl({ className, ...others }: SearchControlProps) {
  function isMacOs() {
    if (typeof window === "undefined") return false
  
    return window.navigator.userAgent.includes("Mac")
  }
  return (
    <UnstyledButton {...others} className={cx(classes.root, className)}>
      <Group gap="xs">
        <IconSearch style={{ width: rem(15), height: rem(15) }} stroke={1.5} />
        <Text fz="sm" c="dimmed" pr={80}>
          Search
        </Text>
        <Text fw={700} className={classes.shortcut}>
        {isMacOs() ? '⌘' : 'Ctrl'} + K
        </Text>
      </Group>
    </UnstyledButton>
  );
}
