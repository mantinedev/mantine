// Validates all package.json files have all the required properties
import { PackageJson } from 'type-fest';
import { getPackagesBuildOrder } from '../build/get-packages-build-order';
import { createLogger } from '../utils/signale';

const logger = createLogger('validate-package-json');

function validatePackageJson(content: PackageJson, errors: string[]) {
  !content.name && errors.push(`Missing name for package ${content.name}`);
  !content.version && errors.push(`Missing version for package ${content.name}`);
  !content.main && errors.push(`Missing main for package ${content.name}`);
  !content.types && errors.push(`Missing types for package ${content.name}`);
  !content.module && errors.push(`Missing module for package ${content.name}`);
  !content.exports && errors.push(`Missing exports for package ${content.name}`);
  !content.description && errors.push(`Missing description for package ${content.name}`);
  !content.author && errors.push(`Missing author for package ${content.name}`);
  !content.license && errors.push(`Missing license for package ${content.name}`);
  !content.repository && errors.push(`Missing repository for package ${content.name}`);
  content.sideEffects == null && errors.push(`Missing sideEffects for package ${content.name}`);
  !content.homepage && errors.push(`Missing homepage for package ${content.name}`);
  !content.keywords && errors.push(`Missing keywords for package ${content.name}`);
}

getPackagesBuildOrder().then((packages) => {
  const errors: string[] = [];

  packages.forEach((pkg) => {
    validatePackageJson(pkg.packageJson, errors);
  });

  if (errors.length > 0) {
    errors.forEach((error) => {
      logger.error(error);
    });
    process.exit(1);
  } else {
    logger.success('All package.json files are valid');
    process.exit(0);
  }
});
