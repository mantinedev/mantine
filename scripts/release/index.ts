import chalk from 'chalk';
import simpleGit from 'simple-git';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { getNextVersion } from 'version-next';
import { createLogger } from '../utils/signale';
import { buildAllPackages } from '../build/build-all-packages';
import { getPath } from '../utils/get-path';
import { publishPackage } from './publish-package';
import { setPackagesVersion } from './set-packages-version';
import { openGithubRelease } from './open-github-release';
import packageJson from '../../package.json';

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
  await setPackagesVersion(incrementedVersion);

  const packages = await buildAllPackages();
  logger.success('All packages were built successfully');

  logger.log('Publishing packages to npm');

  if (argv.stage && argv.tag === 'latest') {
    argv.tag = 'next';
  }

  await Promise.all(
    packages.map((p) =>
      publishPackage({ path: p!.path, name: p!.packageJson.name!, tag: argv.tag })
    )
  );

  logger.success('All packages were published successfully');

  await git.add([getPath('src'), getPath('package.json')]);
  await git.commit(`[release] Version: ${incrementedVersion}`);
  await git.push();

  openGithubRelease(incrementedVersion);
}

release();
