import type { Package } from '../packages/get-packages-list';

const PUBLISHABLE_SCOPES = ['@mantine/'];

export function isPublishablePackage(pkg: Package): boolean {
  const { name, private: isPrivate } = pkg.packageJson;

  if (isPrivate === true || !name) {
    return false;
  }

  return PUBLISHABLE_SCOPES.some((scope) => name.startsWith(scope));
}

export function filterPublishablePackages(packages: Package[]): Package[] {
  return packages.filter(isPublishablePackage);
}
