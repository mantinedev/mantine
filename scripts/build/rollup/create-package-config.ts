import fs from 'node:fs';
import path from 'node:path';
import { generateScopedName } from 'hash-css-selector';
import { RolldownOptions } from 'rolldown';
import banner from 'rollup-plugin-banner2';
import postcss from 'rollup-plugin-postcss';
import { getPackagesList } from '../../packages/get-packages-list';
import { getPath } from '../../utils/get-path';
import { ROLLUP_EXCLUDE_USE_CLIENT } from './rollup-exclude-use-client';
import { ROLLUP_EXTERNALS } from './rollup-externals';

export function createPackageConfig(packagePath: string): RolldownOptions {
  const pkgJson = JSON.parse(fs.readFileSync(path.resolve(packagePath, 'package.json'), 'utf-8'));
  const pkgDeps = [
    ...Object.keys(pkgJson.dependencies || {}),
    ...Object.keys(pkgJson.peerDependencies || {}),
  ];
  const packagesList = getPackagesList();

  const aliasEntries: Record<string, string> = {};
  for (const pkg of packagesList) {
    aliasEntries[pkg.packageJson.name!] = path.resolve(pkg.path, 'src');
  }

  const plugins = [
    postcss({
      extract: true,
      modules: { generateScopedName },
    }),
    banner((chunk: any) => {
      if (!ROLLUP_EXCLUDE_USE_CLIENT.includes(chunk.fileName)) {
        return "'use client';\n";
      }

      return undefined;
    }),
  ];

  return {
    onwarn(warning, warn) {
      if (warning.code === 'CIRCULAR_DEPENDENCY') {
        return;
      }
      warn(warning);
    },
    input: path.resolve(packagePath, 'src/index.ts'),
    resolve: {
      alias: aliasEntries,
    },
    tsconfig: getPath('tsconfig.json'),
    output: [
      {
        format: 'es',
        entryFileNames: '[name].mjs',
        dir: path.resolve(packagePath, 'esm'),
        preserveModules: true,
        sourcemap: true,
      },
      {
        format: 'cjs',
        entryFileNames: '[name].cjs',
        dir: path.resolve(packagePath, 'cjs'),
        preserveModules: true,
        sourcemap: true,
      },
    ],
    moduleTypes: {
      '.css': 'js',
      '.module.css': 'js',
    },
    external: [...ROLLUP_EXTERNALS, ...pkgDeps],
    plugins,
  };
}
