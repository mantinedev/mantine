import React from 'react';
import { Button, Group } from '@mantine/core';
import { useSpotlight } from '@mantine/spotlight';

export function SpotlightControl() {
  const spotlight = useSpotlight();
  return (
    <Group position="center">
      <Button onClick={spotlight.openSpotlight}>Open spotlight</Button>
    </Group>
  );
}
