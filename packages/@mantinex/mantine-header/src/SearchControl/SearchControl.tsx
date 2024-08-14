import { IconSearch } from '@tabler/icons-react';
import cx from 'clsx';
import { BoxProps, ElementProps, Group, rem, Text, UnstyledButton } from '@mantine/core';
import classes from './SearchControl.module.css';
import type { ReactNode } from 'react'

interface SearchControlProps extends BoxProps, ElementProps<'button'> {
  placeholder: ReactNode
  shortcuts: ReactNode
}

export function SearchControl({ className, placeholder, shortcuts,  ...others }: SearchControlProps) {
  return (
    <UnstyledButton {...others} className={cx(classes.root, className)}>
      <Group gap="xs">
        <IconSearch style={{ width: rem(15), height: rem(15) }} stroke={1.5} />
        <Text fz="sm" c="dimmed" pr={80}>
          { placeholder || "Search" }
        </Text>
        <Text fw={700} className={classes.shortcut}>
          { shortcuts || "Ctrl + K" }
        </Text>
      </Group>
    </UnstyledButton>
  );
}
