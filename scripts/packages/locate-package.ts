import path from 'node:path';
import fs from 'fs-extra';
import { getPackageName } from './get-package-name';
import { getPath } from '../utils/get-path';

export async function locatePackage(packageName: string) {
  const folder = getPackageName(packageName).replace('@', '').replace('/', '-');
  const packagePath = path.join(getPath('src'), folder);
  const exists = await fs.pathExists(packagePath);
  return exists ? packagePath : null;
}
