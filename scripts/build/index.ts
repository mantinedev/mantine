import { hideBin } from 'yargs/helpers';
import yargs from 'yargs/yargs';
import { buildAllPackages } from './build-all-packages';
import { buildPackage } from './build-package';
import { correctPackageName } from './correct-package-name';

const { argv } = yargs(hideBin(process.argv)) as any;

(async () => {
  const correctedArgs = argv._.map((item: string) => correctPackageName(String(item)));

  if (correctedArgs.length === 0 || correctedArgs[0] === 'all') {
    await buildAllPackages();
  } else {
    for (const item of correctedArgs) {
      await buildPackage(item);
    }
  }
})();
