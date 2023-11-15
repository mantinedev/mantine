import path from 'node:path';
import fs from 'fs-extra';
import { getPackageName } from './get-package-name';

export async function locatePackage(packageName: string) {
  const folder = getPackageName(packageName).replace('@', '').replace('/', '-');
  const packagePath = path.join(process.cwd(), 'src', folder);
  const exists = await fs.pathExists(packagePath);
  return exists ? packagePath : null;
}
