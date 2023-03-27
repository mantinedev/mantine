import path from 'path';
import fs from 'fs-extra';
import { getPackageName } from './get-package-name';

export default async function locatePackage(packageName: string) {
  const folder = getPackageName(packageName).replace('@', '').replace('/', '-');
  const packagePath = path.join(__dirname, '../../src', folder);
  const exists = await fs.pathExists(packagePath);
  return exists ? packagePath : null;
}
