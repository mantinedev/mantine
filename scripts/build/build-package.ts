import path from 'node:path';
import chalk from 'chalk';
import fs from 'fs-extra';
import { getPackageName } from '../packages/get-package-name';
import { locatePackage } from '../packages/locate-package';
import { createLogger } from '../utils/signale';
import { compile } from './compile';
import { generateDts } from './generate-dts';
import { getBuildTime } from './get-build-time';
import { createPackageConfig } from './rollup/create-package-config';

const logger = createLogger('build-package');
const INVALID_ESM_DIRECTORIES = ['node_modules'] as const;

function getInvalidImportSpecifier(relativeFilePath: string) {
  const normalizedPath = relativeFilePath.split(path.sep).join('/');

  if (normalizedPath.endsWith('/package.json') || normalizedPath.endsWith('.map')) {
    return null;
  }

  const withoutExtension = normalizedPath.replace(/\.[^/.]+$/, '');
  return withoutExtension.endsWith('/index')
    ? withoutExtension.replace(/\/index$/, '')
    : withoutExtension;
}

async function getIncorrectDependencies(nodeModulesPath: string) {
  const dependencies = new Map<string, string>();

  async function walk(currentPath: string, segments: string[] = []) {
    const entries = await fs.readdir(currentPath, { withFileTypes: true });

    for (const entry of entries) {
      const nextSegments = [...segments, entry.name];

      if (entry.isDirectory()) {
        await walk(path.join(currentPath, entry.name), nextSegments);
        continue;
      }

      const relativeFilePath = nextSegments.join('/');
      const invalidImportSpecifier = getInvalidImportSpecifier(relativeFilePath);

      if (invalidImportSpecifier) {
        dependencies.set(invalidImportSpecifier, relativeFilePath.split(path.sep).join('/'));
      }
    }
  }

  await walk(nodeModulesPath);

  return Array.from(dependencies.entries())
    .sort(([specifierA], [specifierB]) => specifierA.localeCompare(specifierB))
    .map(([specifier, filePath]) => ({ specifier, filePath }));
}

async function clearInvalidEsmDirectories(packagePath: string) {
  const esmPath = path.join(packagePath, 'esm');

  await Promise.all(
    INVALID_ESM_DIRECTORIES.map(async (directoryName) => {
      const directoryPath = path.join(esmPath, directoryName);

      if (await fs.pathExists(directoryPath)) {
        await fs.remove(directoryPath);
      }
    })
  );
}

async function validateEsmOutput(packagePath: string) {
  const esmPath = path.join(packagePath, 'esm');
  const errors: string[] = [];
  const nodeModulesPath = path.join(esmPath, 'node_modules');

  if (await fs.pathExists(nodeModulesPath)) {
    const incorrectDependencies = await getIncorrectDependencies(nodeModulesPath);
    const formattedDependencies =
      incorrectDependencies.length > 0
        ? incorrectDependencies
            .map(({ specifier, filePath }) => `- ${specifier} (from esm/node_modules/${filePath})`)
            .join('\n')
        : '- Unable to determine leaked import paths';

    errors.push(
      `Found unexpected esm/node_modules folder.\nLeaked dependency imports:\n${formattedDependencies}`
    );
  }

  if (errors.length > 0) {
    throw new Error(
      `Unexpected directories were generated in ${esmPath} after bundling.\n${errors.join('\n\n')}`
    );
  }
}

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

    const config = createPackageConfig(packagePath);
    logger.log(`Compiling ${formattedPackageName} package with rolldown...`);

    await clearInvalidEsmDirectories(packagePath);
    await compile(config);
    await validateEsmOutput(packagePath);

    if (await fs.pathExists(path.join(packagePath, 'esm/index.css'))) {
      await fs.copyFile(
        path.join(packagePath, 'esm/index.css'),
        path.join(packagePath, 'styles.css')
      );

      await fs.remove(path.join(packagePath, 'esm/index.css'));
      await fs.remove(path.join(packagePath, 'cjs/index.css'));
    }

    const repoRoot = path.resolve(__dirname, '../../');
    const licenseSource = path.join(repoRoot, 'LICENSE');
    const licenseDestination = path.join(packagePath, 'LICENSE');

    if (await fs.pathExists(licenseSource)) {
      await fs.copyFile(licenseSource, licenseDestination);
      logger.log(`Copied LICENSE file to ${formattedPackageName}`);
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
