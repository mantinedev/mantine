import chalk from 'chalk';
import { buildPackage } from './build-package';
import { getPackagesBuildOrder } from './get-packages-build-order';
import { generateCSS } from './generate-css';
import { createLogger } from '../utils/signale';
import { getBuildTime } from './get-build-time';

const logger = createLogger('build-all-packages');

export async function buildAllPackages() {
  const packages = await getPackagesBuildOrder();

  const startTime = Date.now();
  logger.log('Building all packages...');

  for (const item of packages) {
    if (!item!.packageJson.name) {
      process.stdout.write(`Skipping ${item!.path} because it has no name\n`);
    } else {
      await buildPackage(item!.packageJson.name);
    }
  }

  await generateCSS();

  logger.success(`All packages have been built in ${chalk.green(getBuildTime(startTime))}`);

  return packages;
}
