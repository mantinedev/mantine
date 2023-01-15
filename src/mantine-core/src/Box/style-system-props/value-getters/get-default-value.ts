import { rem } from '@mantine/styles';

export function getDefaultValue<T>(value: T) {
  return rem(value);
}
