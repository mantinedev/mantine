import React from 'react';
import { SimpleGrid, Skeleton, Container, Group, useMantineTheme } from '@mantine/core';

const getChild = (height: number) => <Skeleton height={height} radius="md" animate={false} />;
const BASE_HEIGHT = 360;
const getSubHeight = (children: number, spacing: number) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);

export function Subgrid() {
  const theme = useMantineTheme();
  return (
    <Container my="md">
      <SimpleGrid cols={4} breakpoints={[{ maxWidth: 'xs', cols: 1 }]}>
        {getChild(BASE_HEIGHT)}
        <Group direction="column">
          {getChild(getSubHeight(2, theme.spacing.md))}
          {getChild(getSubHeight(2, theme.spacing.md))}
        </Group>
        <Group direction="column">
          {getChild(getSubHeight(3, theme.spacing.md))}
          {getChild(getSubHeight(3, theme.spacing.md))}
          {getChild(getSubHeight(3, theme.spacing.md))}
        </Group>
        {getChild(BASE_HEIGHT)}
      </SimpleGrid>
    </Container>
  );
}
