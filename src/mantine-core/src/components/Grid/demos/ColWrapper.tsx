import React from 'react';
import { Col, ColProps, Text, useMantineTheme } from '../../../index';

export function ColWrapper(props: ColProps) {
  const theme = useMantineTheme();
  return (
    <Col
      {...props}
      style={{
        ...props.style,
      }}
    >
      <div
        style={{
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.blue[0],
          padding: theme.spacing.md,
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
      </div>
    </Col>
  );
}
