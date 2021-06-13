import React from 'react';
import { useMantineTheme, Text } from '@mantine/core';
import { usage as CardDemo } from '@mantine/core/src/components/Card/demos/usage';
import { usage as AlertDemo } from '@mantine/core/src/components/Alert/demos/usage';

export function ContentDemos() {
  const theme = useMantineTheme();
  const CardComponent = CardDemo.component;
  const AlertComponent = AlertDemo.component;

  return (
    <>
      <Text size="lg" style={{ marginBottom: 15 }}>
        Card component
      </Text>
      <div
        style={{
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        }}
      >
        <div
          style={{
            maxWidth: 320,
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: 30,
            paddingBottom: 30,
          }}
        >
          <CardComponent />
        </div>
      </div>

      <Text size="lg" style={{ marginBottom: 15, marginTop: 30 }}>
        Alert component
      </Text>

      <div
        style={{
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        }}
      >
        <div
          style={{
            maxWidth: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingTop: 30,
            paddingBottom: 30,
          }}
        >
          <AlertComponent />
        </div>
      </div>
    </>
  );
}
