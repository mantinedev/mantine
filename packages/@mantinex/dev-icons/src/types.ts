import type { ElementProps, BoxProps } from '@mantine/core';

export interface DevIconProps extends BoxProps, ElementProps<'svg', 'display' | 'opacity'> {
  size?: number | string;
}
