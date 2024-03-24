import { DEFAULT_THEME } from '../../default-theme';
import { isVirtualColor, virtualColor } from './virtual-color';

describe('@mantine/core/virtual-color', () => {
  it('creates virtual color object', () => {
    expect(virtualColor({ name: 'test', dark: 'dark', light: 'light' })).toStrictEqual([
      'var(--mantine-color-test-0)',
      'var(--mantine-color-test-1)',
      'var(--mantine-color-test-2)',
      'var(--mantine-color-test-3)',
      'var(--mantine-color-test-4)',
      'var(--mantine-color-test-5)',
      'var(--mantine-color-test-6)',
      'var(--mantine-color-test-7)',
      'var(--mantine-color-test-8)',
      'var(--mantine-color-test-9)',
    ]);

    expect(virtualColor({ name: 'test', dark: 'dark', light: 'light' })).toHaveProperty(
      'dark',
      'dark'
    );
    expect(virtualColor({ name: 'test', dark: 'dark', light: 'light' })).toHaveProperty(
      'light',
      'light'
    );
  });

  it('correctly detects virtual color object', () => {
    expect(isVirtualColor(virtualColor({ name: 'test', dark: 'dark', light: 'light' }))).toBe(true);
    expect(isVirtualColor(DEFAULT_THEME.colors.blue)).toBe(false);
  });
});
