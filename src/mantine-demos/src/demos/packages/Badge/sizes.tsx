import React from 'react';
import { Group, Text, Badge, MANTINE_SIZES } from '@mantine/core';

function Demo() {
  const sizes = MANTINE_SIZES.map((size) => (
    <Badge key={size} size={size}>
      {size} size
    </Badge>
  ));

  const radius = MANTINE_SIZES.map((size) => (
    <Badge key={size} radius={size}>
      {size} radius
    </Badge>
  ));

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Text size="lg" style={{ marginBottom: 20 }}>
          Predefined sizes from xs to xl:
        </Text>
        <Group position="center">{sizes}</Group>
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 40 }}
      >
        <Text size="lg" style={{ marginBottom: 20 }}>
          Theme radius from xs to xl:
        </Text>
        <Group position="center">{radius}</Group>
      </div>
    </>
  );
}

export const sizes: MantineDemo = {
  type: 'demo',
  component: Demo,
};
