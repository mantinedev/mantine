import type { AppShellResponsiveSize, AppShellSize } from '../../AppShell.types';

export function isPrimitiveSize(
  size: AppShellSize | AppShellResponsiveSize | undefined
): size is AppShellSize | AppShellResponsiveSize {
  const isBaseSize =
    typeof size === 'object' &&
    size !== null &&
    typeof size.base !== 'undefined' &&
    Object.keys(size).length === 1;
  return typeof size === 'number' || typeof size === 'string' || isBaseSize;
}
