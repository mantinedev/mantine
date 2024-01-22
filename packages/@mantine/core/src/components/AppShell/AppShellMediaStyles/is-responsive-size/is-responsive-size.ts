import type { AppShellResponsiveSize, AppShellSize } from '../../AppShell.types';

export function isResponsiveSize(
  size: AppShellSize | AppShellResponsiveSize | undefined
): size is AppShellResponsiveSize {
  if (typeof size !== 'object' || size === null) {
    return false;
  }

  if (Object.keys(size as object).length === 1 && 'base' in (size as object)) {
    return false;
  }

  return true;
}
