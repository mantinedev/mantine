import chalk from 'chalk';
import simpleGit from 'simple-git';
import { getNextVersion } from 'version-next';
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';
import { $ } from 'zx';
import packageJson from '../../package.json';
import { getPath } from '../utils/get-path';
import { createLogger } from '../utils/signale';
import { setMantinePackagesVersion } from './set-mantine-packages-version';

const logger = createLogger('release');
const git = simpleGit();

const { argv }: { argv: any } = yargs(hideBin(process.argv)).option('stage', {
  type: 'string',
  choices: ['alpha', 'beta'],
  description: "Prerelease stage: 'alpha', 'beta'",
});

async function release() {
  const status = await git.status();

  if (status.files.length !== 0) {
    logger.error('Working tree is not clean');
    process.exit(1);
  }

  logger.log('Preparing release for all packages');

  const incrementedVersion = getNextVersion(packageJson.version, {
    type: argv._[0],
    stage: argv.stage,
  });

  logger.log(`New version: ${chalk.cyan(incrementedVersion)}`);
  await setMantinePackagesVersion(incrementedVersion);

  await $`yarn`;
  await git.add([
    getPath('packages'),
    getPath('package.json'),
    getPath('yarn.lock'),
    getPath('scripts/plop/templates/package.json'),
  ]);
  await git.commit(`[release] Version: ${incrementedVersion}`);
  await git.push();

  logger.success('Release commit pushed. GitHub Actions will publish after approval.');
}

release();
