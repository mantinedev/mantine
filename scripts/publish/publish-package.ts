import chalk from 'chalk';
import { $ } from 'zx';
import { createLogger } from '../utils/signale';

const logger = createLogger('publish-package');

interface PublishPackage {
  packagePath: string;
  name: string;
  tag: string;
}

export async function publishPackage({ packagePath, name, tag }: PublishPackage) {
  try {
    $`cd ${packagePath} && npm publish --access public --tag ${tag}`;
    logger.success(`Package ${chalk.cyan(name)} has been published`);
  } catch (error: any) {
    logger.error(`Failed to publish package ${chalk.red(name)}`);
    process.stdout.write(chalk.red`${error.message}\n`);
    process.exit(1);
  }
}
