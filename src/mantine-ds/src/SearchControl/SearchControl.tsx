import React from 'react';
import { IconSearch } from '@tabler/icons-react';
import { UnstyledButton, Text, Group, DefaultProps, rem } from '@mantine/core';
import useStyles from './SearchControl.styles';

interface SearchControlProps extends DefaultProps, React.ComponentPropsWithoutRef<'button'> {
  onClick(): void;
}

export function SearchControl({ className, ...others }: SearchControlProps) {
  const { classes, cx } = useStyles();

  return (
    <UnstyledButton {...others} className={cx(classes.root, className)}>
      <Group spacing="xs">
        <IconSearch size={rem(14)} stroke={1.5} />
        <Text size="sm" color="dimmed" pr={80}>
          Search
        </Text>
        <Text weight={700} className={classes.shortcut}>
          /
        </Text>
      </Group>
    </UnstyledButton>
  );
}
