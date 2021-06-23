import React from 'react';
import { Container } from '@mantine/core';
import { Installation } from './Installation/Installation';
import { Guides } from './Guides/Guides';

export function GettingStarted() {
  return (
    <Container style={{ padding: 40 }}>
      <Installation />
      <Guides />
    </Container>
  );
}
