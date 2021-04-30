import React from 'react';
import { Card, CardsGrid, Text, useMantineTheme } from '@mantine/core';
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
    <CardsGrid cardsPerRow={3}>
      {cards}
    </CardsGrid>
  );
}`;

export function CardsGridDemo() {
  const theme = useMantineTheme();

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
        <CardsGrid cardsPerRow={3}>{cards}</CardsGrid>
      </div>
    </CodeDemo>
  );
}
