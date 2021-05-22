import chalk from 'chalk';
import { Logger } from '../utils/Logger';

const logger = new Logger('increment-version');

const VERSION_INCREMENT: string[] = ['patch', 'minor', 'major'];
const VERSION_STAGE: string[] = ['alpha', 'beta', 'rc'];

export function getIncrementedVersion(
  version: string,
  options: { type: string; stage?: string }
): string {
  if (!VERSION_INCREMENT.includes(options.type)) {
    logger.error(
      `Incorrect version type: ${chalk.cyan(
        options.type
      )}, it should be one of these values: ${VERSION_INCREMENT.join(', ')}`
    );

    process.exit(1);
  }

  if (options.stage && !VERSION_STAGE.includes(options.stage)) {
    logger.error(
      `Incorrect version stage: ${chalk.cyan(
        options.stage
      )}, it should be one of these values: ${VERSION_STAGE.join(', ')}`
    );

    process.exit(1);
  }

  const updateVersion = (raw: string): string => {
    const splitted = raw.split('.');

    if (options.type === 'patch') {
      splitted[2] = (parseInt(splitted[2], 10) + 1).toString();
    }

    if (options.type === 'minor') {
      splitted[1] = (parseInt(splitted[1], 10) + 1).toString();
      splitted[2] = '0';
    }

    if (options.type === 'major') {
      splitted[0] = (parseInt(splitted[0], 10) + 1).toString();
      splitted[1] = '0';
      splitted[2] = '0';
    }

    return splitted.join('.');
  };

  const updateStage = (raw: string): string => {
    const [name, no] = (raw || '').split('.');

    if (!raw || name !== options.stage) return `${options.stage}.0`;

    return `${name}.${parseInt(no, 10) + 1}`;
  };

  try {
    const [rawVersion, rawStage] = version.split('-');

    // entering prerelease
    if (!rawStage && options.stage) {
      return `${updateVersion(rawVersion)}-${updateStage(rawStage)}`;
    }

    // exiting prerelase
    if (rawStage && !options.stage) {
      return rawVersion;
    }

    // release
    if (!rawStage && !options.stage) {
      return updateVersion(rawVersion);
    }

    // prerelease
    return `${rawVersion}-${updateStage(rawStage)}`;
  } catch (e) {
    logger.error('Failed to parse core package.json');
    process.exit(1);
    return null;
  }
}
