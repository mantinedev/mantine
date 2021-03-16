import { argv } from 'yargs';

import { buildPackage } from './utils/build-package';

(async () => {
  await buildPackage(argv._[0] as string, argv._[1] === 'analyze');
})();
