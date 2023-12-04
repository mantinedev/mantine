import path from 'node:path';
import fs from 'fs-extra';

export function getPackagePaths(packageFolder: string) {
  return fs
    .readdirSync(packageFolder)
    .filter((p) => fs.pathExistsSync(path.join(packageFolder, p, `${p}.tsx`)))
    .map((p) => path.join(packageFolder, p, `${p}.tsx`));
}
