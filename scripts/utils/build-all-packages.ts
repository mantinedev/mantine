/* eslint-disable no-await-in-loop, no-restricted-syntax */

import { buildPackage } from './build-package';
import { getPackagesBuildOrder } from './get-packages-build-order';

export async function buildAllPackages() {
  for (const item of await getPackagesBuildOrder()) {
    await buildPackage(item.packageJson.name);
  }
}

buildAllPackages();
