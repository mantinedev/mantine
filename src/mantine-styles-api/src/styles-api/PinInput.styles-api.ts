import type { PinInputStylesNames } from '@mantine/core';
import { Input } from './Input.styles-api';

export const PinInput: Record<PinInputStylesNames, string> = {
  root: 'Root element',
  ...Input,
};
