import React from 'react';
import { MANTINE_SIZES } from '@mantine/styles';
import { Avatar } from '../Avatar';
import { Group } from '../../Group/Group';
import { Text } from '../../Text/Text';

const image =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80';

function Demo() {
  const sizes = MANTINE_SIZES.map((size) => (
    <Avatar key={size} size={size} src={image} alt="it's me" />
  ));

  const radius = MANTINE_SIZES.map((size) => (
    <Avatar key={size} radius={size} src={image} alt="it's me" />
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
