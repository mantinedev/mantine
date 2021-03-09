/* eslint-disable no-await-in-loop, no-restricted-syntax */

import { buildPackage } from './build-package';
import { getPackagesBuildOrder } from './get-packages-build-order';

export async function buildAllPackages() {
  const packages = await getPackagesBuildOrder();

  for (const item of packages) {
    await buildPackage(item.packageJson.name);
  }

  return packages;
}
