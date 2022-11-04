import React from 'react';
import { Button } from '../Button';
import { Flex } from './Flex';

export default { title: 'Flex' };

export function Usage() {
  return (
    <div style={{ padding: 40 }}>
      <Flex gap={{ base: 10, sm: 100 }} direction={{ base: 'column', sm: 'row' }}>
        <Button>First</Button>
        <Button>Second</Button>
      </Flex>
    </div>
  );
}
