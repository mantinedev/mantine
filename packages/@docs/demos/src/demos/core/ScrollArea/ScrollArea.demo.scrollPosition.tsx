import { useState } from 'react';
import { Box, Code, ScrollArea, Stack, Text } from '@mantine/core';
import { MantineDemo } from '@mantinex/demo';
import { Content } from './_content';

const code = `
import { useState } from 'react';
import { Text, ScrollArea, Code, Box } from '@mantine/core';

function Demo() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

  return (
    <>
      <ScrollArea
        w={300}
        h={200}
        onScrollPositionChange={onScrollPositionChange}
      >
        <Box w={600}>
          {/* ... content */}
        </Box>
      </ScrollArea>

      <Text>
        Scroll position: <Code>{\`{ x: \${scrollPosition.x}, y: \${scrollPosition.y} }\`}</Code>
      </Text>
    </>
  );
}
`;

function Demo() {
  const [scrollPosition, onScrollPositionChange] = useState({ x: 0, y: 0 });

  return (
    <Stack align="center">
      <ScrollArea w={300} h={200} onScrollPositionChange={onScrollPositionChange}>
        <Box w={600}>
          <Content />
        </Box>
      </ScrollArea>
      <Text>
        Scroll position: <Code>{`{ x: ${scrollPosition.x}, y: ${scrollPosition.y} }`}</Code>
      </Text>
    </Stack>
  );
}

export const scrollPosition: MantineDemo = {
  type: 'code',
  component: Demo,
  code,
};
