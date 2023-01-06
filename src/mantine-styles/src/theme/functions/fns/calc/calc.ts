import { sizeUnit } from '../size-unit/size-unit';

export function calc(value: unknown, operation: string) {
  return `calc(${sizeUnit(value)} ${operation})`;
}
