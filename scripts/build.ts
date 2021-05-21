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
    default: false,
    description: 'Minify umd files.',
  })
  .option('formats', {
    type: 'string',
    array: true,
    default: ['es', 'cjs', 'umd'],
    description: "Specify module code generation: 'es', 'cjs', 'umd'",
  });

(async () => {
  if (argv._[0] === 'all' || argv.all) {
    await buildAllPackages(argv as BuildOptions);
  } else if (argv._[0] || argv.project) {
    await buildPackage((argv._[0] || argv.project) as string, argv as BuildOptions);
  }
})();
