import { MantineColorsTuple } from '../../theme.types';

export function colorsTuple(input: string | string[]): MantineColorsTuple {
  if (Array.isArray(input)) {
    return input as unknown as MantineColorsTuple;
  }

  return Array(10).fill(input) as unknown as MantineColorsTuple;
}
