import path from 'node:path';
import chalk from 'chalk';
import fs from 'fs-extra';
import { createLogger } from '../utils/signale';
import { BuildInfo, readBuildInfo, writeBuildInfo } from './build-info';
import { buildPackage } from './build-package';
import { generateCSS } from './generate-css';
import { getBuildTime } from './get-build-time';
import { getPackagesBuildOrder } from './get-packages-build-order';
import { getSourceHash } from './get-source-hash';

const logger = createLogger('build-all-packages');

function hasBuildOutput(packagePath: string): boolean {
  return (
    fs.pathExistsSync(path.join(packagePath, 'cjs')) &&
    fs.pathExistsSync(path.join(packagePath, 'esm'))
  );
}

export async function buildAllPackages() {
  const packages = await getPackagesBuildOrder();
  const buildInfo = readBuildInfo();
  const newBuildInfo: BuildInfo = { ...buildInfo };

  const startTime = Date.now();
  logger.log('Building all packages...');

  let skippedCount = 0;

  for (const item of packages) {
    const name = item!.packageJson.name;

    if (!name) {
      process.stdout.write(`Skipping ${item!.path} because it has no name\n`);
      continue;
    }

    const currentHash = getSourceHash(item!.path);
    const previousHash = buildInfo[name];
    const hasOutput = hasBuildOutput(item!.path);

    if (currentHash && currentHash === previousHash && hasOutput) {
      logger.log(`Skipping ${chalk.cyan(name)} ${chalk.gray('(unchanged)')}`);
      skippedCount++;
      continue;
    }

    await buildPackage(name);

    if (currentHash) {
      newBuildInfo[name] = currentHash;
    }
  }

  writeBuildInfo(newBuildInfo);
  await generateCSS();

  const builtCount = packages.length - skippedCount;
  logger.success(
    `Done in ${chalk.green(getBuildTime(startTime))}. ` +
      `Built: ${chalk.cyan(String(builtCount))}, skipped: ${chalk.gray(String(skippedCount))}`
  );

  return packages;
}
