import { execa } from 'execa';
import fg from 'fast-glob';
import path from 'node:path';
import fs from 'fs-extra';

export async function generateDts(packagePath: string) {
  await execa('yarn', ['tsc', '--project', path.join(packagePath, 'tsconfig.build.json')]);
  const files = await fg(['lib/**/*.js'], { cwd: packagePath });

  // Duplicate the type definitions for ESM
  await fs.copy(
    path.join(packagePath, 'lib/index.d.ts'),
    path.join(packagePath, 'lib/index.d.mts')
  );

  return Promise.all(files.map((file) => fs.remove(path.join(packagePath, file))));
}
