/* eslint-disable no-await-in-loop, no-restricted-syntax */

import { buildPackage, BuildOptions } from './build-package';
import { getPackagesBuildOrder } from './get-packages-build-order';

export async function buildAllPackages(options?: BuildOptions) {
  const packages = await getPackagesBuildOrder();

  // eslint-disable-next-line no-param-reassign
  options = options || {
    analyze: false,
    sourcemap: true,
    minify: false,
    formats: ['es', 'cjs'],
  };

  for (const item of packages) {
    await buildPackage(item.packageJson.name, options);
  }

  return packages;
}
