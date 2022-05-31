import React from 'react';
import { MantineNumberSize } from '@mantine/styles';
import { Group } from '../../Group/Group';
import { Stack } from '../../Stack/Stack';

interface InputsGroupProps {
  spacing: MantineNumberSize;
  orientation: 'horizontal' | 'vertical';
  role?: string;
  children: React.ReactNode;
  unstyled?: boolean;
}

export function InputsGroup({ spacing, orientation, children, role, unstyled }: InputsGroupProps) {
  if (orientation === 'horizontal') {
    return (
      <Group pt={5} spacing={spacing} role={role} unstyled={unstyled}>
        {children}
      </Group>
    );
  }

  return (
    <Stack pt={5} spacing={spacing} role={role} unstyled={unstyled}>
      {children}
    </Stack>
  );
}
