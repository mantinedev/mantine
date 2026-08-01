import chalk from 'chalk';
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';
import { $ } from 'zx';
import { getPackagesList } from '../packages/get-packages-list';
import { createLogger } from '../utils/signale';
import { decidePublish } from './decide-publish';
import { filterPublishablePackages } from './get-publishable-packages';
import { getLatestVersion, getPublishedVersions } from './registry';
import { resolveDistTag, wouldMoveLatestBackward } from './resolve-dist-tag';

const logger = createLogger('publish-ci');

const { argv }: { argv: any } = yargs(hideBin(process.argv))
  .option('dry-run', { type: 'boolean', default: false })
  .option('package', { type: 'string', description: 'Publish only this package' });

async function publishOne(
  packagePath: string,
  name: string,
  version: string,
  tag: 'latest' | 'next'
): Promise<boolean> {
  if (argv.dryRun) {
    logger.log(`[dry-run] would publish ${chalk.cyan(`${name}@${version}`)} (tag ${tag})`);
    return true;
  }

  const flags = ['--access', 'public', '--tag', tag];

  if (process.env.GITHUB_ACTIONS === 'true') {
    flags.push('--provenance');
  }

  try {
    await $`cd ${packagePath} && npm publish ${flags}`;
    logger.success(`Published ${chalk.cyan(`${name}@${version}`)} (tag ${tag})`);
    return true;
  } catch (error: any) {
    logger.error(`Failed to publish ${chalk.red(name)}: ${error.message}`);
    return false;
  }
}

async function publishCi() {
  let packages = filterPublishablePackages(getPackagesList());

  if (argv.package) {
    packages = packages.filter((p) => p.packageJson.name === argv.package);

    if (packages.length === 0) {
      logger.error(`Package ${chalk.red(argv.package)} is not publishable or does not exist`);
      process.exit(1);
    }
  }

  let published = 0;
  let failures = 0;

  for (const pkg of packages) {
    const name = pkg.packageJson.name!;
    const version = pkg.packageJson.version!;
    const publishedVersions = await getPublishedVersions(name);
    const decision = decidePublish(version, publishedVersions);

    if (decision === 'skip-already-published') {
      logger.log(`Skip ${chalk.gray(`${name}@${version}`)} (already on registry)`);
      continue;
    }

    if (decision === 'skip-not-on-registry') {
      logger.log(
        `Skip ${chalk.yellow(name)} (not on registry — first publish needs manual bootstrap)`
      );
      continue;
    }

    const tag = resolveDistTag(version);

    if (tag === 'latest') {
      const currentLatest = await getLatestVersion(name);

      if (wouldMoveLatestBackward(version, currentLatest)) {
        logger.error(
          `Refusing ${chalk.red(`${name}@${version}`)}: older than current latest (${currentLatest}); publishing it would move the "latest" tag backward. Publish manually with an explicit dist-tag if this is intended.`
        );
        failures += 1;
        continue;
      }
    }

    const ok = await publishOne(pkg.path, name, version, tag);

    if (ok) {
      published += 1;
    } else {
      failures += 1;
    }
  }

  logger.log(`Done. Published: ${chalk.cyan(published)}, failures: ${chalk.cyan(failures)}`);

  if (failures > 0) {
    process.exit(1);
  }
}

publishCi();
