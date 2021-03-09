import path from 'path';
import chalk from 'chalk';
import simpleGit from 'simple-git';
import { argv } from 'yargs';
import { Logger } from './utils/Logger';
import { VersionIncrement, getIncrementedVersion } from './release/get-incremented-version';
import { setPackagesVersion } from './release/set-packages-version';
import { buildAllPackages } from './utils/build-all-packages';

const logger = new Logger('release');
const git = simpleGit();

(async () => {
  const status = await git.status();

  if (status.current !== 'master') {
    logger.error(
      `It is allowed to release changes from master branch, current branch is ${chalk.red(
        status.current
      )}`
    );
    process.exit(1);
  }

  if (status.files.length !== 0) {
    logger.error('Working tree is not clean');
    process.exit(1);
  }

  logger.info('Releasing all packages');

  const incrementedVersion = await getIncrementedVersion(argv._[0] as VersionIncrement);
  logger.info(`New version: ${chalk.cyan(incrementedVersion)}`);

  await setPackagesVersion(incrementedVersion);
  await buildAllPackages();
  logger.success('All packages were built successfully');

  await git.add([path.join(__dirname, '../src'), path.join(__dirname, '../package.json')]);
  await git.commit(`[release] Version: ${incrementedVersion}`);
})();
