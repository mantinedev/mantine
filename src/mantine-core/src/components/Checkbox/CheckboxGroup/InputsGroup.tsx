import React from 'react';
import { MantineNumberSize } from '@mantine/styles';
import { Group } from '../../Group/Group';
import { Stack } from '../../Stack/Stack';

interface InputsGroupProps {
  spacing: MantineNumberSize;
  orientation: 'horizontal' | 'vertical';
  children: React.ReactNode;
}

export function InputsGroup({ spacing, orientation, children }: InputsGroupProps) {
  if (orientation === 'horizontal') {
    return (
      <Group pt={5} spacing={spacing}>
        {children}
      </Group>
    );
  }

  return (
    <Stack pt={5} spacing={spacing}>
      {children}
    </Stack>
  );
}
