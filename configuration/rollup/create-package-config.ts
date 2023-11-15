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

interface PkgConfigInput {
  basePath: string;
  format: string;
  entry?: string;
  publicPath?: string;
  externals?: string[];
  sourcemap: boolean;
  minify: boolean;
  analyze: boolean;
}

const excludeUseClient = [
  'index',
  'core/utils/units-converters/rem',
  'core/utils/units-converters/px',
  'core/MantineProvider/create-theme/create-theme',
  'core/MantineProvider/color-functions/darken/darken',
  'core/MantineProvider/color-functions/lighten/lighten',
  'core/MantineProvider/color-functions/rgba/rgba',
  'core/MantineProvider/color-functions/to-rgba/to-rgba',
  'core/MantineProvider/default-colors',
  'core/MantineProvider/default-theme',
].reduce<string[]>((acc, name) => {
  acc.push(`${name}.js`, `${name}.mjs`);
  return acc;
}, []);

const rootPackageJson = JSON.parse(
  fs.readFileSync(path.join(process.cwd(), './package.json')).toString('utf-8')
);

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
    // nodeExternals({ packagePath: path.resolve(config.basePath, 'package.json') }),
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
      if (!excludeUseClient.includes(chunk.fileName)) {
        return "'use client';\n";
      }

      return undefined;
    }),
  ];

  const externals = [
    'dayjs/locale/ru',
    'dayjs/plugin/customParseFormat.js',
    'dayjs/plugin/customParseFormat',
    'dayjs/plugin/utc.js',
    'dayjs/plugin/timezone.js',
    'klona/full',
    'highlight.js/lib/languages/typescript',
    ...(config?.externals || []),
    ...Object.keys({
      ...packageJson.peerDependencies,
      ...packageJson.devDependencies,
      ...packageJson.dependencies,
    }),
    ...Object.keys({
      ...rootPackageJson.devDependencies,
      ...rootPackageJson.peerDependencies,
      ...rootPackageJson.dependencies,
    }),
  ];

  const output: OutputOptions = {
    name: packageJson.name,
    format: config.format as ModuleFormat,
    externalLiveBindings: false,
    sourcemap: config.sourcemap,
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
    external: externals,
    plugins,
  };
}
