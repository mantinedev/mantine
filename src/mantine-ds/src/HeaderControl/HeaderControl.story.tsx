import { Group } from '@mantine/core';
import { noop } from '@mantine/utils';
import React from 'react';
import { ColorSchemeControl } from './ColorSchemeControl';
import { DirectionControl } from './DirectionControl';

export default { title: 'DS/HeaderControl' };

export function Usage() {
  return (
    <Group>
      <ColorSchemeControl />
      <DirectionControl direction="rtl" toggleDirection={noop} />
    </Group>
  );
}
