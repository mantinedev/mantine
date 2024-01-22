// Validates that there are no git conflicts in package.json files
import fs from 'fs-extra';
import { getPackagesBuildOrder } from '../build/get-packages-build-order';
import { createLogger } from '../utils/signale';

const logger = createLogger('check-conflicts');

getPackagesBuildOrder().then((packages) => {
  const errors = packages.reduce<string[]>((acc, pkg) => {
    try {
      fs.readJsonSync(pkg.packageJsonPath);
      return acc;
    } catch (err) {
      acc.push(pkg.packageJsonPath);
      return acc;
    }
  }, []);

  if (errors.length > 0) {
    errors.forEach((error) => {
      logger.error(error);
    });
    process.exit(1);
  } else {
    logger.success('All files are in place');
    process.exit(0);
  }
});
