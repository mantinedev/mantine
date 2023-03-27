import path from 'path';
import chalk from 'chalk';
import simpleGit from 'simple-git';
import githubRelease from 'new-github-release-url';
import open from 'open';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { Logger } from './utils/Logger';
import { publishPackage } from './utils/publish-package';
import { getIncrementedVersion } from './release/get-incremented-version';
import { setPackagesVersion } from './release/set-packages-version';
import { buildAllPackages } from './utils/build-all-packages';
import { getPackagesBuildOrder } from './utils/get-packages-build-order';
import packageJson from '../package.json';

const logger = new Logger('release');
const git = simpleGit();
const { argv }: { argv: any } = yargs(hideBin(process.argv))
  .option('stage', {
    type: 'string',
    choices: ['alpha', 'beta', 'rc'],
    description: "Prerelease stage: 'alpha', 'beta' or 'rc'",
  })
  .option('tag', {
    type: 'string',
    default: 'latest',
    description: 'Tag',
  })
  .option('skip-version-check', {
    type: 'boolean',
    default: false,
    description: 'Skip checking version.',
  })
  .option('skip-build', {
    type: 'boolean',
    default: false,
    description: 'Skip building step.',
  })
  .option('skip-publish', {
    type: 'boolean',
    default: false,
    description: 'Skip publishing step.',
  })
  .example([
    ['$0 minor --skip-build', 'Release but skip building packages.'],
    ['$0 minor --alpha', 'Prerelease to alpha stage.'],
  ]);

(async () => {
  const status = await git.status();

  if (status.files.length !== 0) {
    logger.error('Working tree is not clean');
    process.exit(1);
  }

  logger.info('Releasing all packages');

  let incrementedVersion = packageJson.version;

  if (!argv.skipVersionCheck) {
    incrementedVersion = getIncrementedVersion(incrementedVersion, {
      type: argv._[0] as string,

      stage: argv.stage,
    });
    logger.info(`New version: ${chalk.cyan(incrementedVersion)}`);

    await setPackagesVersion(incrementedVersion);
  }

  let packages;

  if (!argv.skipBuild) {
    packages = await buildAllPackages();
    logger.success('All packages were built successfully');
  } else {
    packages = await getPackagesBuildOrder();
  }

  if (!argv.skipPublish) {
    logger.info('Publishing packages to npm');

    if (argv.stage && argv.tag === 'latest') {
      argv.tag = 'next';
    }

    await Promise.all(
      packages.map((p) => publishPackage({ path: p.path, name: p.packageJson.name, tag: argv.tag }))
    );

    logger.success('All packages were published successfully');
  }

  await git.add([path.join(__dirname, '../src'), path.join(__dirname, '../package.json')]);
  await git.commit(`[release] Version: ${incrementedVersion}`);
  await git.push();

  open(
    githubRelease({
      user: 'mantinedev',
      repo: 'mantine',
      tag: incrementedVersion,
      title: incrementedVersion,
    })
  );
})();
