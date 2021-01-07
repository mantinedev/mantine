import path from 'path';
import fs from 'fs-extra';

export default async function locatePackage(packageName: string) {
  const folder = packageName.replace('@', '').replace('/', '-');
  const packagePath = path.join(__dirname, '../../src', folder);
  const exists = await fs.pathExists(packagePath);
  return exists ? packagePath : null;
}
