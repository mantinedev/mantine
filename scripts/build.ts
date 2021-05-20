import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

import { buildPackage, BuildOptions } from './utils/build-package';
import { buildAllPackages } from './utils/build-all-packages';

const { argv } = yargs(hideBin(process.argv))
  .option('all', {
    type: 'boolean',
    default: false,
    description: 'Build all packages',
  })
  .option('project', {
    type: 'string',
    description: 'Specify package should be bundled.',
  })
  .option('analyze', {
    type: 'boolean',
    default: false,
    description: 'Generate analyze files.',
  })
  .option('sourcemap', {
    type: 'boolean',
    default: true,
    description: 'Generate sourcemap.',
  })
  .option('minify', {
    type: 'boolean',
    default: true,
    description: 'Minify umd files.',
  });

(async () => {
  if (argv.all) {
    await buildAllPackages(argv as BuildOptions);
  } else if (argv.project) {
    await buildPackage(argv.project, argv as BuildOptions);
  }
})();
