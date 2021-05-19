import React from 'react';
import { Col, Text, useMantineTheme } from '@mantine/core';

export function ColWrapper(props: React.ComponentProps<typeof Col>) {
  const theme = useMantineTheme();
  return (
    <Col
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
    </Col>
  );
}
