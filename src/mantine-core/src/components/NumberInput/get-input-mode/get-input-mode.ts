import { OS } from '@mantine/hooks';

export const getInputMode = (
  step: number,
  precision: number,
  os: OS
): 'none' | 'text' | 'search' | 'email' | 'tel' | 'url' | 'numeric' | 'decimal' => {
  if (Number.isInteger(step) && step >= 0 && precision === 0) return 'numeric';
  if (!Number.isInteger(step) && step >= 0 && precision !== 0) return 'decimal';
  if (Number.isInteger(step) && step < 0 && precision === 0) {
    if (os === 'ios') return 'text';
    return 'decimal';
  }
  if (!Number.isInteger(step) && step < 0 && precision !== 0) {
    if (os === 'ios') return 'text';
    return 'decimal';
  }
  return 'numeric';
};
