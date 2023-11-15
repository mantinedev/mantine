import { buildPackage } from './build-package';
import { getPackagesBuildOrder } from './get-packages-build-order';
import { generateCSS } from './generate-css';

export async function buildAllPackages() {
  const packages = await getPackagesBuildOrder();

  for (const item of packages) {
    if (!item!.packageJson.name) {
      process.stdout.write(`Skipping ${item!.path} because it has no name\n`);
    } else {
      await buildPackage(item!.packageJson.name);
    }
  }

  await generateCSS();

  return packages;
}
