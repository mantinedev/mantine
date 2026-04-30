import crypto from 'node:crypto';
import path from 'node:path';
import glob from 'fast-glob';
import fs from 'fs-extra';

export function getSourceHash(packagePath: string): string {
  const hash = crypto.createHash('sha256');
  const srcDir = path.join(packagePath, 'src');

  if (!fs.pathExistsSync(srcDir)) {
    return '';
  }

  const pattern = glob.convertPathToPattern(srcDir);
  const files = glob.sync(`${pattern}/**/*`, { onlyFiles: true }).sort();

  for (const file of files) {
    hash.update(file);
    hash.update(fs.readFileSync(file));
  }

  const packageJsonPath = path.join(packagePath, 'package.json');
  if (fs.pathExistsSync(packageJsonPath)) {
    hash.update(fs.readFileSync(packageJsonPath));
  }

  return hash.digest('hex');
}
