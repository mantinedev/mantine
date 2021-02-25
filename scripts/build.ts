import path from 'path';
import fs from 'fs-extra';
import { argv } from 'yargs';
import createPackageConfig from '../configuration/webpack/create-package-config';
import locatePackage from './utils/locate-package';
import compile from './utils/compile';

(async () => {
  const analyze = argv._[1] === 'analyze';
  const packagePath = await locatePackage((argv._[0] as string) || '');
  if (!packagePath) {
    process.stdout.write('Package does not exist\n');
    process.exit(1);
  }

  const packageJson = await fs.readJSON(path.join(packagePath, 'package.json'));

  const config = createPackageConfig({
    basePath: packagePath,
    outputPath: path.join(packagePath, 'dist'),
    externals: Object.keys(packageJson.peerDependencies || {}),
    analyze,
  });

  try {
    await compile(config);
  } catch (err) {
    process.stdout.write(`${err.toString('minimal')}\n`);
  }
})();
