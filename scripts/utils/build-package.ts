import path from 'path';
import fs from 'fs-extra';
import chalk from 'chalk';
import createPackageConfig from '../../configuration/webpack/create-package-config';
import locatePackage from './locate-package';
import compile from './compile';
import { Logger } from './Logger';

const logger = new Logger('build-package');

export async function buildPackage(packageName: string, analyze = false) {
  const packagePath = await locatePackage(packageName || '');

  if (!packagePath) {
    logger.error(`Package ${chalk.cyan(packageName)} does not exist`);
    process.exit(1);
  }

  const packageJson = await fs.readJSON(path.join(packagePath, 'package.json'));

  const config = createPackageConfig({
    analyze,
    basePath: packagePath,
    outputPath: path.join(packagePath, 'dist'),
    externals: [
      ...Object.keys(packageJson.peerDependencies || {}),
      ...Object.keys(packageJson.dependencies || {}),
    ],
  });

  logger.info(`Building package ${chalk.cyan(packageName)}`);

  try {
    const startTime = Date.now();
    await compile(config);
    logger.info(
      `Package ${chalk.cyan(packageName)} was build in ${chalk.green(
        `${((Date.now() - startTime) / 1000).toFixed(2)}s`
      )}`
    );
  } catch (err) {
    logger.error(`Failed to compile package: ${chalk.cyan(packageName)}`);
    process.stdout.write(`${err.toString('minimal')}\n`);
    process.exit(1);
  }
}
