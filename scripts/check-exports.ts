import fs from 'fs';
import path from 'path';
import { getPackagesBuildOrder } from './utils/get-packages-build-order';
import { Logger } from './utils/Logger';

const logger = new Logger('exports');

getPackagesBuildOrder().then((packages) => {
  const errors = [];
  packages.forEach((pkg) => {
    const main = fs.existsSync(path.join(pkg.path, pkg.packageJson.main));
    const types = fs.existsSync(path.join(pkg.path, pkg.packageJson.types));
    const module = fs.existsSync(path.join(pkg.path, pkg.packageJson.types));

    !main && errors.push(`Missing main for package ${pkg.packageJson.name}`);
    !types && errors.push(`Missing types for package ${pkg.packageJson.name}`);
    !module && errors.push(`Missing module for package ${pkg.packageJson.name}`);
  });

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
