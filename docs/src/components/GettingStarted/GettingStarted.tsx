import React, { useState } from 'react';
import { Container } from '@mantine/core';
import { Installation } from './Installation/Installation';
import { Guides } from './Guides/Guides';

export function GettingStarted() {
  const [dependencies, setDependencies] = useState('react-jss @mantine/hooks @mantine/core');

  return (
    <Container style={{ padding: 40 }}>
      <Installation setDependencies={setDependencies} />
      <Guides dependencies={dependencies} />
    </Container>
  );
}
