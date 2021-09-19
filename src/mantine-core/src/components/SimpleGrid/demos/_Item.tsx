import React from 'react';
import { Text } from '../../Text/Text';
import { useMantineTheme } from '@mantine/theme';

export function GridItem(props: React.ComponentPropsWithoutRef<'div'>) {
  const theme = useMantineTheme();

  return (
    <div
      {...props}
      style={{
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.blue[0],
        padding: theme.spacing.md,
        ...props.style,
      }}
    >
      <Text
        color={theme.colorScheme === 'dark' ? 'gray' : 'blue'}
        size="xl"
        weight={700}
        align="center"
      >
        {props.children}
      </Text>
    </div>
  );
}

export const defaultItems = Array(5)
  .fill(0)
  .map((_, index) => <GridItem key={index}>{index + 1}</GridItem>);
