import fs from 'fs-extra';
import path from 'node:path';
import isDir from 'is-directory';
import chalk from 'chalk';
import { createLogger } from './utils/signale';

const logger = createLogger('check-conflicts');

const src = path.join(process.cwd(), 'src');

const errors: string[] = fs
  .readdirSync(src)
  .filter((folder) => isDir.sync(path.join(src, folder)))
  .reduce<string[]>((acc, folder) => {
    try {
      fs.readJsonSync(path.join(src, folder, 'package.json'));
      return acc;
    } catch (err) {
      acc.push(folder);
      return acc;
    }
  }, []);

try {
  fs.readJsonSync(path.join(process.cwd(), 'package.json'));
} catch (err) {
  errors.push('root');
}

if (errors.length === 0) {
  logger.success('All package.json files are valid');
  process.exit(0);
} else {
  logger.error(`package.json files with conflicts: ${chalk.red(errors.join(', '))}`);
  process.exit(1);
}
