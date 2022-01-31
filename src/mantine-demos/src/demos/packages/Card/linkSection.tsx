import React from 'react';
import { Card, Image, Text, Badge, Button, Group, useMantineTheme } from '@mantine/core';
import { demoBase } from './_demo-base';

const code = `
<Card shadow="sm" padding="lg">
  <Card.Section component="a" href="https://mantine.dev" target="_blank">
    <Image src="./image" height={160} alt="Norway" />
  </Card.Section>

  {/* ... other card content */}
</Card>
`;

function Demo() {
  const theme = useMantineTheme();
  const secondaryColor = theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <Card shadow="sm" padding="lg">
      <Card.Section component="a" href="https://mantine.dev" target="_blank">
        <Image
          src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
        <Text weight={500}>Norway Fjord Adventures</Text>
        <Badge color="pink" variant="light">
          On Sale
        </Badge>
      </Group>

      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        With Fjord Tours you can explore more of the magical fjord landscapes with tours and
        activities on and around the fjords of Norway
      </Text>

      <Button variant="light" color="blue" fullWidth style={{ marginTop: 14 }}>
        Book classic tour now
      </Button>
    </Card>
  );
}

export const linkSection: MantineDemo = {
  ...demoBase,
  type: 'demo',
  code,
  component: Demo,
};
