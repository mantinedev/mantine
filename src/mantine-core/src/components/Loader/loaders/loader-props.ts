import React from 'react';
import type { MantineColor } from '@mantine/theme';

export interface LoaderProps extends React.ComponentPropsWithoutRef<'svg'> {
  size: number;
  color: MantineColor;
}
