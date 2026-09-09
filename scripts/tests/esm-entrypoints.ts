// Validates that the built ESM entry of every published package can be imported.
// Catches circular dependencies that throw at module initialization time.
import { execFile } from 'node:child_process';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { promisify } from 'node:util';
import fs from 'fs-extra';
import { getPackagesBuildOrder } from '../build/get-packages-build-order';
import { createLogger } from '../utils/signale';

const execFileAsync = promisify(execFile);
const logger = createLogger('esm-entrypoints');

function getErrorMessage(error: any) {
  const stderr = String(error.stderr || '');
  const line = stderr.split('\n').find((item) => /Error/.test(item));
  return line?.trim() || error.message;
}

getPackagesBuildOrder().then(async (packages) => {
  const entries = packages
    // Packages with a bin entry are executables that keep the process alive on import
    .filter((pkg) => pkg.packageJson.name?.startsWith('@mantine/') && !pkg.packageJson.bin)
    .map((pkg) => ({
      name: pkg.packageJson.name!,
      path: pkg.path,
      entry: path.join(pkg.path, (pkg.packageJson.exports as any)?.['.']?.import?.default || ''),
    }));

  const errors = (
    await Promise.all(
      entries.map(async ({ name, path: cwd, entry }) => {
        if (!fs.existsSync(entry)) {
          return `Missing esm entry for package ${name}, run "npm run build all" first`;
        }

        const code = `await import(${JSON.stringify(pathToFileURL(entry).href)})`;

        try {
          await execFileAsync(process.execPath, ['--input-type=module', '-e', code], {
            cwd,
            timeout: 60_000,
          });
          return null;
        } catch (error: any) {
          return `Cannot import ${name}: ${getErrorMessage(error)}`;
        }
      })
    )
  ).filter((error): error is string => error !== null);

  if (errors.length > 0) {
    errors.forEach((error) => {
      logger.error(error);
    });
    process.exit(1);
  } else {
    logger.success(`All esm entry points can be imported (${entries.length} packages)`);
    process.exit(0);
  }
});
