import React from 'react';
import { MANTINE_SIZES } from '@mantine/theme';
import { Button } from '../Button';
import { Group } from '../../Group/Group';
import { Text } from '../../Text/Text';

function Demo() {
  const sizes = MANTINE_SIZES.map((size) => (
    <Button key={size} size={size} variant="outline">
      {size} size
    </Button>
  ));

  const compact = MANTINE_SIZES.map((size) => (
    <Button key={size} size={size} variant="outline" compact>
      {size} compact size
    </Button>
  ));

  const radius = MANTINE_SIZES.map((size) => (
    <Button key={size} radius={size} variant="outline">
      {size} radius
    </Button>
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
          Predefined compact sizes from xs to xl:
        </Text>
        <Group position="center">{compact}</Group>
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
