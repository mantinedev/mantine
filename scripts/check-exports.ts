import fs from 'fs';
import path from 'path';
import { getPackagesBuildOrder } from './build/get-packages-build-order';
import { createLogger } from './utils/signale';

const logger = createLogger('exports');

getPackagesBuildOrder().then((packages) => {
  const errors: string[] = [];
  packages.forEach((pkg) => {
    // Base properties
    const main = fs.existsSync(path.join(pkg!.path, pkg!.packageJson.main));
    const types = fs.existsSync(path.join(pkg!.path, pkg!.packageJson.types!));
    const module = fs.existsSync(path.join(pkg!.path, pkg!.packageJson.types!));

    !main && errors.push(`Missing main for package ${pkg!.packageJson.name}`);
    !types && errors.push(`Missing types for package ${pkg!.packageJson.name}`);
    !module && errors.push(`Missing module for package ${pkg!.packageJson.name}`);

    // Exports properties
    const exports = pkg!.packageJson.exports!;
    const esmTypes = fs.existsSync(path.join(pkg!.path, exports['.'].import.types));
    const esmFile = fs.existsSync(path.join(pkg!.path, exports['.'].import.default));
    const cjsTypes = fs.existsSync(path.join(pkg!.path, exports['.'].require.types));
    const cjsFile = fs.existsSync(path.join(pkg!.path, exports['.'].require.default));

    !esmTypes && errors.push(`Missing esm types for package ${pkg!.packageJson.name}`);
    !esmFile && errors.push(`Missing esm file for package ${pkg!.packageJson.name}`);
    !cjsTypes && errors.push(`Missing cjs types for package ${pkg!.packageJson.name}`);
    !cjsFile && errors.push(`Missing cjs file for package ${pkg!.packageJson.name}`);
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
