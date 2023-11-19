// Validates that all packages have the same files structure
import fs from 'fs-extra';
import path from 'node:path';
import { createLogger } from '../utils/signale';
import { getPackagesBuildOrder } from '../build/get-packages-build-order';

const logger = createLogger('validate-packages-files');

function validatePackage(packagePath: string, errors: string[]) {
  !fs.existsSync(path.join(packagePath, 'tsconfig.json')) &&
    errors.push(`Missing tsconfig.json for package ${packagePath}`);
  !fs.existsSync(path.join(packagePath, 'tsconfig.build.json')) &&
    errors.push(`Missing tsconfig.build.json for package ${packagePath}`);
  !fs.existsSync(path.join(packagePath, '.npmignore')) &&
    errors.push(`Missing .npmignore for package ${packagePath}`);
  !fs.existsSync(path.join(packagePath, 'README.md')) &&
    errors.push(`Missing README.md for package ${packagePath}`);
}

getPackagesBuildOrder().then((packages) => {
  const errors: string[] = [];

  packages.forEach((pkg) => {
    validatePackage(pkg.path, errors);
  });

  if (errors.length > 0) {
    errors.forEach((error) => {
      logger.error(error);
    });
    process.exit(1);
  } else {
    logger.success('All packages files are valid');
    process.exit(0);
  }
});
