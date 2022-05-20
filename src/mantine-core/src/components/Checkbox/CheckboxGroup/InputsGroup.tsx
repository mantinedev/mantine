import React from 'react';
import { MantineNumberSize } from '@mantine/styles';
import { Group } from '../../Group/Group';
import { Stack } from '../../Stack/Stack';

interface InputsGroupProps {
  spacing: MantineNumberSize;
  orientation: 'horizontal' | 'vertical';
  role?: string;
  children: React.ReactNode;
}

export function InputsGroup({ spacing, orientation, children, role }: InputsGroupProps) {
  if (orientation === 'horizontal') {
    return (
      <Group pt={5} spacing={spacing} role={role}>
        {children}
      </Group>
    );
  }

  return (
    <Stack pt={5} spacing={spacing} role={role}>
      {children}
    </Stack>
  );
}
