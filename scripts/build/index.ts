import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';
import { buildPackage } from './build-package';
import { buildAllPackages } from './build-all-packages';

const { argv } = yargs(hideBin(process.argv)) as any;

(async () => {
  if (argv._[0] === 'all') {
    await buildAllPackages();
  } else if (argv._[0]) {
    for (const item of argv._) {
      await buildPackage(item);
    }
  }
})();
