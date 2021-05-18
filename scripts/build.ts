import { argv } from 'yargs';

import { buildPackage } from './utils/build-package';
import { buildAllPackages } from './utils/build-all-packages';

(async () => {
  if (argv._[0] === 'all') {
    await buildAllPackages();
  } else if (argv._[0]) {
    await buildPackage(argv._[0] as string, argv._[1] === 'analyze');
  }
})();
