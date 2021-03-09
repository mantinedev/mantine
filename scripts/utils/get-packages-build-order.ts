/* eslint-disable no-param-reassign, no-restricted-syntax, no-continue, no-await-in-loop */
import { getPackagesList, Package } from './get-packages-list';

export async function getPackagesBuildOrder(
  packages?: Package[],
  order: Record<string, number> = {}
) {
  const data = packages || (await getPackagesList());

  for (const item of data) {
    const { name } = item.packageJson;

    if (name in order) {
      continue;
    }

    if (item.packageJson.private) {
      order[name] = -1;
      continue;
    }

    const dependencies = Object.keys({
      ...item.packageJson.dependencies,
      ...item.packageJson.peerDependencies,
    })
      .filter((dependency) => dependency.includes('@mantine/'))
      .map((dependency) => data.find((dataItem) => dataItem.packageJson.name === dependency));

    if (dependencies.length === 0) {
      order[name] = 0;
      continue;
    }

    await getPackagesBuildOrder(dependencies, order);
    order[name] =
      1 + Math.max(...dependencies.map((dependency) => order[dependency.packageJson.name]));
  }

  return Object.keys(order)
    .filter((p) => order[p] !== -1)
    .sort((a, b) => order[a] - order[b])
    .map((p) => data.find((dataItem) => dataItem.packageJson.name === p));
}
