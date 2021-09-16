import React from 'react';
import type { MantineColor } from '../../../theme';

export interface LoaderProps extends React.ComponentPropsWithoutRef<'svg'> {
  size: number;
  color: MantineColor;
}
