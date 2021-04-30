import React from 'react';
import { Card, CardsGrid, Text, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Card, CardsGrid, Text } from '@mantine/core';

function Demo() {
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
    <CardsGrid
      grow
      cardsPerRow={4}
      breakpoints={[
        { maxWidth: 1000, cardsPerRow: 3 },
        { maxWidth: 750, cardsPerRow: 2 },
        { maxWidth: 540, cardsPerRow: 1 },
      ]}
    >
      {cards}
    </CardsGrid>
  );
}`;

export function CardsGridBreakpointsDemo() {
  const theme = useMantineTheme();

  // dirty hack
  // somehow gatsby does not generate media queries with breakpoints prop
  // it works in storybook and everywhere else, I have no idea why it does not work here
  // I wanted to do a demo, don't judge me, please, we all do these dirty hacks
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
