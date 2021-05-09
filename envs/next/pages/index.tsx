import React from 'react';
import { ElementsGroup, Button, Portal } from '@mantine/core';

export default function IndexPage() {
  return (
    <div>
      <ElementsGroup>
        <Button>Hello</Button>
        <Button>Hello</Button>
      </ElementsGroup>
      <Portal>Hello</Portal>
    </div>
  );
}
