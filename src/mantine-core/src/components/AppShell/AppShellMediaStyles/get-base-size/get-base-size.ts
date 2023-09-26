import type { AppShellSize, AppShellResponsiveSize } from '../../AppShell.types';

export function getBaseSize(size: AppShellSize | AppShellResponsiveSize) {
  if (typeof size === 'object') {
    return size.base;
  }

  return size;
}
