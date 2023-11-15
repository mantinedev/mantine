import chalk from 'chalk';
import { createPackageConfig } from './rollup/create-package-config';
import { compile } from './compile';
import { generateDts } from './generate-dts';
import locatePackage from '../utils/locate-package';
import { Logger } from '../utils/Logger';
import { getPackageName } from '../utils/get-package-name';

const logger = new Logger('build-package');

export async function buildPackage(_packageName: string) {
  const packageName = getPackageName(_packageName);
  const packagePath = await locatePackage(packageName);

  if (!packagePath) {
    logger.error(`Package ${chalk.cyan(packageName)} does not exist`);
    process.exit(1);
  }

  logger.info(`Building package ${chalk.cyan(packageName)}`);

  try {
    const startTime = Date.now();
    await generateDts(packagePath);

    for (const format of ['es', 'cjs']) {
      const config = await createPackageConfig({ basePath: packagePath, format });
      logger.info(`Building to ${chalk.cyan(format)} format...`);
      await compile(config);
    }

    logger.info(
      `Package ${chalk.cyan(packageName)} was built in ${chalk.green(
        `${((Date.now() - startTime) / 1000).toFixed(2)}s`
      )}`
    );
  } catch (err: any) {
    logger.error(`Failed to compile package: ${chalk.cyan(packageName)}`);
    process.stdout.write(`${err.toString('minimal')}\n`);
    process.exit(1);
  }
}
