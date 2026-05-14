import { useState } from 'react';
import { Badge, Box, Group, ScrollArea, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';

const code = `
import { useState } from 'react';
import { Badge, Box, Group, ScrollArea, Stack, Text } from '@mantine/core';

function Demo() {
  const [topReached, setTopReached] = useState(0);
  const [bottomReached, setBottomReached] = useState(0);
  const [leftReached, setLeftReached] = useState(0);
  const [rightReached, setRightReached] = useState(0);

  return (
    <Stack align="center">
      <Group>
        <Badge color="blue">Top: {topReached}</Badge>
        <Badge color="green">Bottom: {bottomReached}</Badge>
        <Badge color="orange">Left: {leftReached}</Badge>
        <Badge color="grape">Right: {rightReached}</Badge>
      </Group>

      <ScrollArea
        h={200}
        w={300}
        onTopReached={() => setTopReached((c) => c + 1)}
        onBottomReached={() => setBottomReached((c) => c + 1)}
        onLeftReached={() => setLeftReached((c) => c + 1)}
        onRightReached={() => setRightReached((c) => c + 1)}
      >
        <Box w={600}>
          {Array(50)
            .fill(0)
            .map((_, i) => (
              <Text key={i}>
                Line {i + 1} - This is a long line that requires horizontal scrolling
              </Text>
            ))}
        </Box>
      </ScrollArea>
    </Stack>
  );
}
`;

function Demo() {
  const [topReached, setTopReached] = useState(0);
  const [bottomReached, setBottomReached] = useState(0);
  const [leftReached, setLeftReached] = useState(0);
  const [rightReached, setRightReached] = useState(0);

  return (
    <Stack align="center">
      <Group>
        <Badge color="blue">Top: {topReached}</Badge>
        <Badge color="green">Bottom: {bottomReached}</Badge>
        <Badge color="orange">Left: {leftReached}</Badge>
        <Badge color="grape">Right: {rightReached}</Badge>
      </Group>

      <ScrollArea
        h={200}
        w={300}
        onTopReached={() => setTopReached((c) => c + 1)}
        onBottomReached={() => setBottomReached((c) => c + 1)}
        onLeftReached={() => setLeftReached((c) => c + 1)}
        onRightReached={() => setRightReached((c) => c + 1)}
      >
        <Box w={600}>
          {Array(50)
            .fill(0)
            .map((_, i) => (
              <Text key={i}>
                Line {i + 1} - This is a long line that requires horizontal scrolling
              </Text>
            ))}
        </Box>
      </ScrollArea>
    </Stack>
  );
}

export const boundaries: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
