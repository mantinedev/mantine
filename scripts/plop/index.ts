import path from 'node:path';
import chalk from 'chalk';
import fs from 'fs-extra';
import { argv } from 'yargs';
import { $ } from 'zx';
import { getPath } from '../utils/get-path';
import { createLogger } from '../utils/signale';

const logger = createLogger('plop');

const _argv: any = argv;
const packageName = _argv._[0];
const description = _argv._[1];

if (!packageName) {
  logger.error('Package name is missing');
  process.exit(1);
}

if (!description) {
  logger.error('Package description is missing');
  process.exit(1);
}

const packagePath = path.join(getPath('packages'), packageName);

if (fs.existsSync(packagePath)) {
  logger.error(`Package ${chalk.cyan(packageName)} already exists`);
  process.exit(1);
}

const index = fs.readFileSync(getPath('scripts/plop/templates/src/index.ts'), 'utf-8');
const npmignore = fs.readFileSync(getPath('scripts/plop/templates/.npmignore'), 'utf-8');
const packageJson = fs.readFileSync(getPath('scripts/plop/templates/package.json'), 'utf-8');
const readme = fs.readFileSync(getPath('scripts/plop/templates/README.md'), 'utf-8');
const tsconfig = fs.readFileSync(getPath('scripts/plop/templates/tsconfig.json'), 'utf-8');
const tsconfigBuild = fs.readFileSync(
  getPath('scripts/plop/templates/tsconfig.build.json'),
  'utf-8'
);

function replacePlaceholders(content: string) {
  return content.replaceAll('{{package}}', packageName).replaceAll('{{description}}', description);
}

fs.ensureDirSync(packagePath);
fs.mkdirSync(path.join(packagePath, 'src'));
fs.writeFileSync(path.join(packagePath, 'src/index.ts'), replacePlaceholders(index));
fs.writeFileSync(path.join(packagePath, '.npmignore'), replacePlaceholders(npmignore));
fs.writeFileSync(path.join(packagePath, 'package.json'), replacePlaceholders(packageJson));
fs.writeFileSync(path.join(packagePath, 'README.md'), replacePlaceholders(readme));
fs.writeFileSync(path.join(packagePath, 'tsconfig.json'), replacePlaceholders(tsconfig));
fs.writeFileSync(path.join(packagePath, 'tsconfig.build.json'), replacePlaceholders(tsconfigBuild));

logger.success(`Package ${chalk.cyan(packageName)} has been created`);

$`yarn`;
