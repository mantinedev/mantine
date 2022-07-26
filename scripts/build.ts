/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

import { buildPackage, BuildOptions } from './utils/build-package';
import { buildAllPackages } from './utils/build-all-packages';

const { argv }: { argv: any } = yargs(hideBin(process.argv))
  .option('all', {
    type: 'boolean',
    default: false,
    description: 'Build all packages.',
  })
  .option('project', {
    type: 'string',
    description: 'Specify package which should be bundled.',
  })
  .option('analyze', {
    type: 'boolean',
    default: false,
    description: 'Generate bundle analytics.',
  })
  .option('sourcemap', {
    type: 'boolean',
    default: true,
    description: 'Generate sourcemap.',
  })
  .option('formats', {
    type: 'string',
    array: true,
    choices: ['es', 'cjs', 'umd'],
    default: ['es', 'cjs'],
    description: "Specify module code generation: 'es', 'cjs'.",
  })
  .example([
    ['$0 all --formats umd cjs', 'Bundle packages to umd and cjs.'],
    ['$0 @mantine/core --analyze', 'Bundle mantine-core package and generate bundle analytics.'],
  ]);

(async () => {
  if (argv._[0] === 'all' || argv.all) {
    await buildAllPackages(argv as BuildOptions);
  } else if (argv._[0] || argv.project) {
    for (const item of argv._) {
      await buildPackage((item || argv.project) as string, argv as BuildOptions);
    }
  }
})();
