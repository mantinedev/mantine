import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import cx from 'clsx';
import { BoxProps, ElementProps, Group, rem, Text, UnstyledButton } from '@mantine/core';
import classes from './SearchControl.module.css';

interface SearchControlProps extends BoxProps, ElementProps<'button'> {}

export function SearchControl({ className, ...others }: SearchControlProps) {
  return (
    <UnstyledButton {...others} className={cx(classes.root, className)}>
      <Group gap="xs">
        <MagnifyingGlassIcon style={{ width: rem(15), height: rem(15) }} />
        <Text fz="sm" c="dimmed" pr={80}>
          Search
        </Text>
        <Text fw={700} className={classes.shortcut}>
          Ctrl + K
        </Text>
      </Group>
    </UnstyledButton>
  );
}
