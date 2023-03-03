import React from 'react';
import type { MantineColor } from '@mantine/styles';

export interface LoaderProps extends React.ComponentPropsWithoutRef<'svg'> {
  size: number | string;
  color: MantineColor;
}
