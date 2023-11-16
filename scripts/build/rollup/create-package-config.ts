import path from 'node:path';
import { RollupOptions } from 'rollup';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import alias, { Alias } from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import banner from 'rollup-plugin-banner2';
import esbuild from 'rollup-plugin-esbuild';
import { generateScopedName } from 'hash-css-selector';
import { getPackagesList } from '../../packages/get-packages-list';
import { getPath } from '../../utils/get-path';
import { ROLLUP_EXTERNALS } from './rollup-externals';
import { ROLLUP_EXCLUDE_USE_CLIENT } from './rollup-exclude-use-client';

export async function createPackageConfig(packagePath: string): Promise<RollupOptions> {
  const pkgList = await getPackagesList();

  const aliasEntries: Alias[] = pkgList.map((pkg) => ({
    find: new RegExp(`^${pkg.packageJson.name}`),
    replacement: path.resolve(pkg.path, 'src'),
  }));

  const plugins = [
    nodeResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
    esbuild({
      sourceMap: false,
      tsconfig: getPath('tsconfig.json'),
    }),
    alias({ entries: aliasEntries }),
    replace({ preventAssignment: true }),
    postcss({
      extract: true,
      modules: { generateScopedName },
      minimize: true,
    }),
    banner((chunk) => {
      if (!ROLLUP_EXCLUDE_USE_CLIENT.includes(chunk.fileName)) {
        return "'use client';\n";
      }

      return undefined;
    }),
  ];

  return {
    input: path.resolve(packagePath, 'src/index.ts'),
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
    external: ROLLUP_EXTERNALS,
    plugins,
  };
}
