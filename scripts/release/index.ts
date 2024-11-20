import chalk from 'chalk';
import simpleGit from 'simple-git';
import { getNextVersion } from 'version-next';
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';
import { $ } from 'zx';
import packageJson from '../../package.json';
import { buildAllPackages } from '../build/build-all-packages';
import { getMantinePackagesList } from '../packages/get-packages-list';
import { publishPackage } from '../publish/publish-package';
import { getPath } from '../utils/get-path';
import { createLogger } from '../utils/signale';
import { openGithubRelease } from './open-github-release';
import { setMantinePackagesVersion } from './set-mantine-packages-version';

const logger = createLogger('release');
const git = simpleGit();

const { argv }: { argv: any } = yargs(hideBin(process.argv))
  .option('stage', {
    type: 'string',
    choices: ['alpha', 'beta'],
    description: "Prerelease stage: 'alpha', 'beta'",
  })
  .option('tag', {
    type: 'string',
    default: 'latest',
    description: 'Tag',
  });

async function release() {
  const status = await git.status();

  if (status.files.length !== 0) {
    logger.error('Working tree is not clean');
    process.exit(1);
  }

  logger.log('Releasing all packages');

  const incrementedVersion = getNextVersion(packageJson.version, {
    type: argv._[0],
    stage: argv.stage,
  });

  logger.log(`New version: ${chalk.cyan(incrementedVersion)}`);
  await setMantinePackagesVersion(incrementedVersion);

  await buildAllPackages();
  logger.success('All packages have been built successfully');

  logger.log('Publishing packages to npm');

  if (argv.stage && argv.tag === 'latest') {
    argv.tag = 'next';
  }

  const mantinePackages = await getMantinePackagesList();

  await Promise.all(
    mantinePackages.map((p) =>
      publishPackage({ packagePath: p!.path, name: p!.packageJson.name!, tag: argv.tag })
    )
  );

  logger.success('All packages have been published successfully');

  await $`yarn`;
  await git.add([
    getPath('packages'),
    getPath('package.json'),
    getPath('yarn.lock'),
    getPath('scripts/plop/templates/package.json'),
  ]);
  await git.commit(`[release] Version: ${incrementedVersion}`);
  await git.push();

  openGithubRelease(incrementedVersion);
}

release();
