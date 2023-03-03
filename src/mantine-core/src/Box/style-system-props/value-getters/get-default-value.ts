import { rem } from '@mantine/styles';

export function getSizeValue<T>(value: T) {
  return rem(value);
}

export function identity<T>(value: T) {
  return value;
}
