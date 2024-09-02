/* eslint-disable no-param-reassign */
import { getPackagesList, Package } from '../packages/get-packages-list';

export async function getPackageBuildOrder(
  packages: Package[],
  pkg: Package,
  order: Record<string, number> = {}
) {
  const name = pkg.packageJson.name!;

  if (name in order) {
    return;
  }
  if (pkg.packageJson.private) {
    order[name] = -1;
    return;
  }

  packages = packages || [];

  const dependencies = Object.keys({
    ...pkg.packageJson.peerDependencies,
    ...pkg.packageJson.dependencies,
    ...pkg.packageJson.devDependencies,
  })
    .filter((dependency) => dependency.includes('@mantine/') || dependency.includes('@mantinex/'))
    .map((dependency) => packages.find((pkgItem) => pkgItem.packageJson.name === dependency));

  if (dependencies.length === 0) {
    order[name] = 0;
    return;
  }

  await Promise.all(
    dependencies.map((dependency) => getPackageBuildOrder(packages, dependency!, order))
  );

  order[name] =
    1 + Math.max(...dependencies.map((dependency) => order[dependency!.packageJson.name!]));
}

export async function getPackagesBuildOrder(
  packages?: Package[],
  order: Record<string, number> = {}
): Promise<Package[]> {
  const _packages = packages || getPackagesList();

  for (const pkg of _packages) {
    await getPackageBuildOrder(_packages, pkg, order);
  }

  return Object.keys(order)
    .filter((p) => order[p] !== -1)
    .sort((a, b) => order[a] - order[b])
    .map((p) => _packages.find((dataItem) => dataItem.packageJson.name === p)!);
}
