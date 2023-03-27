import path from 'path';
import fs from 'fs-extra';
import { RollupOptions, OutputOptions, ModuleFormat } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import nodeExternals from 'rollup-plugin-node-externals';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import json from '@rollup/plugin-json';
import alias, { Alias } from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import visualizer from 'rollup-plugin-visualizer';
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
    nodeExternals(),
    nodeResolve({ extensions: ['.ts', '.tsx', '.js', '.jsx'] }),
    esbuild({
      minify: config.format === 'umd',
      sourceMap: false,
      tsconfig: path.resolve(process.cwd(), 'tsconfig.json'),
    }),
    json(),
    alias({ entries: aliasEntries }),
    replace({ preventAssignment: true }),
  ];

  let externals;

  if (config.format === 'umd') {
    externals = [
      ...(config?.externals || []),
      ...Object.keys({
        ...packageJson.peerDependencies,
      }),
    ];
  } else {
    externals = [
      '@emotion/server/create-instance',
      'dayjs/locale/ru',
      'klona/full',
      'highlight.js/lib/languages/typescript',
      '@emotion/cache',
      '@emotion/utils',
      '@emotion/serialize',
      'prism-react-renderer/themes/duotoneDark',
      'prism-react-renderer/themes/duotoneLight',
      ...(config?.externals || []),
      ...Object.keys({
        ...packageJson.peerDependencies,
        ...packageJson.dependencies,
      }),
    ];
  }

  const output: OutputOptions = {
    name: packageJson.name,
    format: config.format as ModuleFormat,
    externalLiveBindings: false,
    sourcemap: config.sourcemap,
  };

  if (config.format === 'es') {
    output.dir = path.resolve(config.basePath, 'esm');
    output.preserveModules = true;
  }

  if (config.format === 'cjs') {
    output.dir = path.resolve(config.basePath, 'cjs');
    output.preserveModules = true;
    output.exports = 'named';
  }

  if (config.format === 'umd') {
    output.file = path.resolve(config.basePath, 'lib/index.umd.js');
    output.globals = {
      ...pkgList
        .map((pkg) => ({
          [pkg.packageJson.name]: pkg.packageJson.name,
        }))
        .reduce((globals, pkgGlobal) => ({ ...globals, ...pkgGlobal }), {}),
      react: 'React',
      dayjs: 'dayjs',
      'react-dom': 'ReactDOM',
    };
  }

  if (config.analyze && config.format === 'es') {
    plugins.push(
      visualizer({
        title: packageJson.name,
        filename: path.join(config.basePath, 'lib/stats.html'),
        projectRoot: path.join(config.basePath, 'src'),
        sourcemap: true,
        gzipSize: true,
      }),
      visualizer({
        title: packageJson.name,
        filename: path.join(config.basePath, 'lib/stats.json'),
        projectRoot: path.join(config.basePath, 'src'),
        json: true,
        sourcemap: true,
        gzipSize: true,
      })
    );
  }

  return {
    input: config?.entry || path.resolve(config.basePath, 'src/index.ts'),
    output,
    external: externals,
    plugins,
  };
}
