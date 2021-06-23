import React from 'react';
import { Container } from '@mantine/core';
import { Installation } from './Installation/Installation';

export function GettingStarted() {
  return (
    <Container style={{ padding: 40 }}>
      <Installation />
    </Container>
  );
}
