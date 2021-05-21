import chalk from 'chalk';
import execa from 'execa';
import { Logger } from './Logger';

const logger = new Logger('publish-package');

export async function publishPackage({
  path,
  name,
  tag,
}: {
  path: string;
  name: string;
  tag: string;
}) {
  try {
    await execa('yarn', ['publish', path, '--tag', tag]);
    logger.success(`Package ${chalk.cyan(name)} was published`);
  } catch (error) {
    logger.error(`Failed to publish package ${chalk.red(name)}`);
    process.stdout.write(chalk.red`${error.message}\n`);
    process.exit(1);
  }
}
