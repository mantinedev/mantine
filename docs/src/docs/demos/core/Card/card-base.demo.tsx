import React from 'react';
import { Card, Image, Text, Hr, Badge, Button, useMantineTheme } from '@mantine/core';
import CodeDemo from '../../../../components/CodeDemo/CodeDemo';

const code = `import React from 'react';
import { Card, Image, Text, Hr, Badge, Button, useMantineTheme } from '@mantine/core';

function Demo() {
  const theme = useMantineTheme();
  
  const secondaryColor = theme.colorScheme === 'dark'
    ? theme.colors.dark[1]
    : theme.colors.gray[7];
  
  return (
    <div style={{ width: 340, margin: 'auto' }}>
      <Card shadow="sm">
        <Image
          src="https://images.unsplash.com/long-image-url.jpg"
          height={160}
          alt="Norway"
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <Text weight={500}>Norway Fjord Adventures</Text>
          <Badge color="red" variant={theme.colorScheme === 'dark' ? 'light' : 'filled'}>
            On Sale
          </Badge>
        </div>

        <Text size="sm" style={{ color: secondaryColor }}>
          With Fjord Tours you can explore more of the magical fjord landscapes with tours and
          activities on and around the fjords of Norway
        </Text>

        <Hr />

        <Text size="sm" style={{ color: secondaryColor }}>
          Book Norway tour today and get a 5% discount
        </Text>

        <Button size="sm" variant="light" color="cyan" fullWidth style={{ marginTop: 10 }}>
          Book classic tour
        </Button>
      </Card>
    </div>
  );
}`;

export function CardBaseDemo() {
  const theme = useMantineTheme();
  const secondaryColor = theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <CodeDemo
      code={code}
      language="tsx"
      demoBackground={theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0]}
    >
      <div style={{ width: 340, margin: 'auto' }}>
        <Card shadow="sm">
          <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            height={160}
            alt="Norway"
          />

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
            }}
          >
            <Text weight={500}>Norway Fjord Adventures</Text>
            <Badge color="red" variant={theme.colorScheme === 'dark' ? 'light' : 'filled'}>
              On Sale
            </Badge>
          </div>

          <Text size="sm" style={{ color: secondaryColor }}>
            With Fjord Tours you can explore more of the magical fjord landscapes with tours and
            activities on and around the fjords of Norway
          </Text>

          <Hr />

          <Text size="sm" style={{ color: secondaryColor }}>
            Book Norway tour today and get a 5% discount
          </Text>

          <Button size="sm" variant="light" color="cyan" fullWidth style={{ marginTop: 10 }}>
            Book classic tour
          </Button>
        </Card>
      </div>
    </CodeDemo>
  );
}
