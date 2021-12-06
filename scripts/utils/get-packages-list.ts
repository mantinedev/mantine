/* eslint-disable no-restricted-syntax, no-await-in-loop */
import path from 'path';
import fs from 'fs-extra';

interface PackageJson {
  readonly name: string;
  readonly version: string;
  readonly private: boolean;
  readonly main: string;
  readonly license: string;
  readonly types?: string;
  readonly author: string;
  readonly sideEffects?: boolean;
  readonly scripts?: Record<string, string>;
  readonly peerDependencies?: Record<string, string>;
  readonly dependencies?: Record<string, string>;
  readonly devDependencies?: Record<string, string>;
}

export interface Package {
  path: string;
  packageJsonPath: string;
  packageJson: PackageJson;
}

export async function getPackagesList() {
  const basePath = path.join(__dirname, '../../src');
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
