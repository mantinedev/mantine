import path from 'node:path';
import fs from 'fs-extra';
import type { PackageJson } from 'type-fest';
import { getPath } from '../utils/get-path';

export interface Package {
  path: string;
  packageJsonPath: string;
  packageJson: PackageJson;
}

export async function getPackagesList() {
  const basePath = getPath('src');
  const srcPaths = await fs.readdir(basePath);
  const packages: Package[] = [];

  for (const srcPath of srcPaths) {
    const packageJsonPath = path.join(basePath, srcPath, 'package.json');
    if (await fs.pathExists(packageJsonPath)) {
      packages.push({
        path: path.join(basePath, srcPath),
        packageJsonPath,
        packageJson: await fs.readJSON(packageJsonPath),
      });
    }
  }

  return packages;
}
