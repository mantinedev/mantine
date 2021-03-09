import path from 'path';
import fs from 'fs-extra';
import chalk from 'chalk';
import { Logger } from '../utils/Logger';

const logger = new Logger('increment-version');

const VERSION_INCREMENT = ['patch', 'minor', 'major'] as const;
export type VersionIncrement = typeof VERSION_INCREMENT[number];

export default function getIncrementedVersion(increment: VersionIncrement) {
  if (!VERSION_INCREMENT.includes(increment)) {
    logger.error(
      `Incorrect version type: ${chalk.cyan(
        increment
      )}, it should be one of these values: ${VERSION_INCREMENT.join(', ')}`
    );

    process.exit(1);
  }

  try {
    const currentVersion = fs.readJSONSync(path.join(__dirname, '../../package.json')).version;
    const splitted = currentVersion.split('.');

    if (increment === 'patch') {
      splitted[2] = (parseInt(splitted[2], 10) + 1).toString();
    }

    if (increment === 'minor') {
      splitted[1] = (parseInt(splitted[1], 10) + 1).toString();
      splitted[2] = '0';
    }

    if (increment === 'major') {
      splitted[0] = (parseInt(splitted[0], 10) + 1).toString();
      splitted[1] = '0';
      splitted[2] = '0';
    }

    return splitted.join('.');
  } catch (e) {
    logger.error('Failed to parse core package.json');
    process.exit(1);
    return null;
  }
}
