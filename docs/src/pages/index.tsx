import React from 'react';
import { Button, MantineProvider } from '@mantine/core';

export default function IndexPage() {
  return (
    <MantineProvider>
      <Button>Mantine button</Button>
    </MantineProvider>
  );
}
