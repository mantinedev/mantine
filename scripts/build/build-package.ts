import chalk from 'chalk';
import { createLogger } from '../utils/signale';
import { locatePackage } from '../packages/locate-package';
import { getPackageName } from '../packages/get-package-name';
import { createPackageConfig } from './rollup/create-package-config';
import { compile } from './compile';
import { generateDts } from './generate-dts';
import { getBuildTime } from './get-build-time';

const logger = createLogger('build-package');

export async function buildPackage(_packageName: string) {
  const packageName = getPackageName(_packageName);
  const packagePath = await locatePackage(packageName);
  const formattedPackageName = chalk.cyan(packageName);

  if (!packagePath) {
    logger.error(`Package ${formattedPackageName} does not exist`);
    process.exit(1);
  }

  logger.log(`Building package ${formattedPackageName}`);

  try {
    const startTime = Date.now();

    logger.log(`Generating ${formattedPackageName} *.d.ts files...`);
    await generateDts(packagePath);

    const config = await createPackageConfig(packagePath);
    logger.log(`Compiling ${formattedPackageName} package with rollup...`);

    await compile(config);
    logger.success(
      `Package ${formattedPackageName} has been built in ${chalk.green(getBuildTime(startTime))}`
    );
  } catch (err: any) {
    logger.error(`Failed to compile package: ${formattedPackageName}`);
    logger.error(err);
    process.exit(1);
  }
}
