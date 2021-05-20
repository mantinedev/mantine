/* eslint-disable no-await-in-loop, no-restricted-syntax */

import { buildPackage, BuildOptions } from './build-package';
import { getPackagesBuildOrder } from './get-packages-build-order';

export async function buildAllPackages(options?: BuildOptions) {
  const packages = await getPackagesBuildOrder();

  for (const item of packages) {
    await buildPackage(item.packageJson.name, options);
  }

  return packages;
}
