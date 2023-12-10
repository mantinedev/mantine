import path from 'node:path';
import { execa } from 'execa';
import fs from 'fs-extra';

export async function generateDts(packagePath: string) {
  await execa('yarn', ['tsc', '--project', path.join(packagePath, 'tsconfig.build.json')]);

  // Duplicate the type definitions for ESM
  await fs.copy(
    path.join(packagePath, 'lib/index.d.ts'),
    path.join(packagePath, 'lib/index.d.mts')
  );
}
