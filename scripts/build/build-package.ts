import chalk from 'chalk';
import { createPackageConfig } from './rollup/create-package-config';
import { compile } from './compile';
import { generateDts } from './generate-dts';
import { createLogger } from '../utils/signale';
import locatePackage from '../utils/locate-package';
import { getPackageName } from '../utils/get-package-name';
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

    for (const format of ['es', 'cjs']) {
      const config = await createPackageConfig({ basePath: packagePath, format });
      logger.log(`Compiling ${formattedPackageName} package to ${chalk.cyan(format)} format...`);
      await compile(config);
    }

    logger.success(
      `Package ${formattedPackageName} has been built in ${chalk.green(getBuildTime(startTime))}`
    );
  } catch (err: any) {
    logger.error(`Failed to compile package: ${formattedPackageName}`);
    logger.error(err);
    process.exit(1);
  }
}
