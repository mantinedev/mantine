import path from 'path';
import fs from 'fs-extra';
import { RollupOptions, OutputOptions, ModuleFormat } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import alias, { Alias } from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import postcss from 'rollup-plugin-postcss';
import banner from 'rollup-plugin-banner2';
import esbuild from 'rollup-plugin-esbuild';
import { generateScopedName } from 'hash-css-selector';
import { getPackagesList } from '../../scripts/utils/get-packages-list';
import { ROLLUP_EXTERNALS } from './rollup-externals';
import { ROLLUP_EXCLUDE_USE_CLIENT } from './rollup-exclude-use-client';

interface PkgConfigInput {
  basePath: string;
  format: string;
  entry?: string;
  publicPath?: string;
  externals?: string[];
}

export default async function createPackageConfig(config: PkgConfigInput): Promise<RollupOptions> {
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(config.basePath, './package.json')).toString('utf-8')
  );

  const pkgList = await getPackagesList();

  const aliasEntries: Alias[] = pkgList.map((pkg) => ({
    find: new RegExp(`^${pkg.packageJson.name}`),
    replacement: path.resolve(pkg.path, 'src'),
  }));

  const plugins = [
    commonjs(),
    nodeResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
    esbuild({
      sourceMap: false,
      tsconfig: path.resolve(process.cwd(), 'tsconfig.json'),
    }),
    json(),
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

  const output: OutputOptions = {
    name: packageJson.name,
    format: config.format as ModuleFormat,
    externalLiveBindings: false,
    sourcemap: true,
  };

  if (config.format === 'es') {
    output.dir = path.resolve(config.basePath, 'esm');
    output.preserveModules = true;
    output.entryFileNames = '[name].mjs';
  }

  if (config.format === 'cjs') {
    output.dir = path.resolve(config.basePath, 'cjs');
    output.preserveModules = true;
    output.exports = 'named';
  }

  return {
    input: config?.entry || path.resolve(config.basePath, 'src/index.ts'),
    output,
    external: ROLLUP_EXTERNALS,
    plugins,
  };
}
