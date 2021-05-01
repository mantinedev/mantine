import React from 'react';
import { Card, CardsGrid, Text, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Card, CardsGrid, Text } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

function Demo() {
  const px1000 = useMediaQuery('(max-width: 1000px)');
  const px750 = useMediaQuery('(max-width: 750px)');
  const px540 = useMediaQuery('(max-width: 540px)');
  const cardsPerRow = px540 ? 1 : px750 ? 2 : px1000 ? 3 : 4;

  const cards = Array(5)
    .fill(0)
    .map((_, index) => (
      <Card key={index} shadow="sm">
        <Text size="xl" weight={700} align="center">
          {index}
        </Text>
      </Card>
    ));

  return (
    <CardsGrid grow cardsPerRow={cardsPerRow}>
      {cards}
    </CardsGrid>
  );
}`;

export function CardsGridBreakpointsDemo() {
  const theme = useMantineTheme();

  const px1000 = useMediaQuery('(max-width: 1000px)');
  const px750 = useMediaQuery('(max-width: 750px)');
  const px540 = useMediaQuery('(max-width: 540px)');
  const cardsPerRow = px540 ? 1 : px750 ? 2 : px1000 ? 3 : 4;

  const cards = Array(5)
    .fill(0)
    .map((_, index) => (
      <Card key={index} shadow="sm">
        <Text size="xl" weight={700} align="center">
          {index}
        </Text>
      </Card>
    ));

  return (
    <CodeDemo
      code={code}
      language="tsx"
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0]}
    >
      <div style={{ padding: 10 }}>
        <CardsGrid grow cardsPerRow={cardsPerRow}>
          {cards}
        </CardsGrid>
      </div>
    </CodeDemo>
  );
}
