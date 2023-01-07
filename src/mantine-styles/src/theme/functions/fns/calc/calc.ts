import { rem } from '../../../utils';

export function calc(value: unknown, operation: string) {
  return `calc(${rem(value)} ${operation})`;
}
