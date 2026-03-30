import path from 'node:path';
import chalk from 'chalk';
import { closest, distance } from 'fastest-levenshtein';
import fs from 'fs-extra';
import { getPath } from '../utils/get-path';

function getValidShortNames(): string[] {
  const basePath = getPath('packages');
  const names: string[] = [];

  const mantineDir = path.join(basePath, '@mantine');
  if (fs.pathExistsSync(mantineDir)) {
    for (const name of fs.readdirSync(mantineDir)) {
      if (fs.lstatSync(path.join(mantineDir, name)).isDirectory()) {
        names.push(name);
      }
    }
  }

  const docsDir = path.join(basePath, '@docs');
  if (fs.pathExistsSync(docsDir)) {
    for (const name of fs.readdirSync(docsDir)) {
      if (fs.lstatSync(path.join(docsDir, name)).isDirectory()) {
        names.push(name);
      }
    }
  }

  const mantinexDir = path.join(basePath, '@mantinex');
  if (fs.pathExistsSync(mantinexDir)) {
    for (const name of fs.readdirSync(mantinexDir)) {
      if (fs.lstatSync(path.join(mantinexDir, name)).isDirectory()) {
        names.push(`x-${name}`);
      }
    }
  }

  const testsDir = path.join(basePath, '@mantine-tests');
  if (fs.pathExistsSync(testsDir)) {
    for (const name of fs.readdirSync(testsDir)) {
      if (fs.lstatSync(path.join(testsDir, name)).isDirectory()) {
        names.push(`tests-${name}`);
      }
    }
  }

  names.push('all');
  return names;
}

export function correctPackageName(input: string): string {
  if (input.startsWith('@')) {
    return input;
  }

  const validNames = getValidShortNames();

  if (validNames.includes(input)) {
    return input;
  }

  const match = closest(input, validNames);
  const dist = distance(input, match);
  const maxDistance = Math.max(2, Math.floor(input.length / 2));

  if (dist <= maxDistance) {
    process.stdout.write(chalk.yellow(`Autocorrected "${input}" → "${match}"\n`));
    return match;
  }

  return input;
}
