import path from 'path';
import fs from 'fs-extra';
import { RollupOptions } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import externals from 'rollup-plugin-node-externals';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import json from '@rollup/plugin-json';
import alias, { Alias } from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';
import { getPackagesList } from '../../scripts/utils/get-packages-list';

interface PkgConfigInput {
  entry?: string;
  basePath: string;
  externals?: string[];
  publicPath?: string;
  analyze?: boolean;
}

export default async function createPackageConfig(config: PkgConfigInput): Promise<RollupOptions> {
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(config.basePath, './package.json')).toString('utf-8')
  );
  const pkgList = await getPackagesList();
  const globalsPkgList = pkgList
    .map((pkg) => ({
      [pkg.packageJson.name]: pkg.packageJson.name,
    }))
    .reduce((globals, pkgGlobal) => ({ ...globals, ...pkgGlobal }), {});
  const aliasEntries: Alias[] = pkgList.map((pkg) => ({
    find: new RegExp(`^${pkg.packageJson.name}`),
    replacement: path.resolve(pkg.path, 'src'),
  }));

  return {
    input: config.entry || path.resolve(config.basePath, 'src/index.ts'),
    output: [
      {
        name: packageJson.name,
        file: path.resolve(config.basePath, 'lib/index.umd.js'),
        format: 'umd',
        externalLiveBindings: false,
        globals: {
          ...globalsPkgList,
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-jss': 'reactJss',
        },
        sourcemap: true,
      },
      {
        name: packageJson.name,
        dir: path.resolve(config.basePath, 'cjs'),
        format: 'cjs',
        exports: 'named',
        preserveModules: true,
        // preserveModulesRoot: path.resolve(config.basePath, 'src'),
        sourcemap: true,
      },
      {
        name: packageJson.name,
        dir: path.resolve(config.basePath, 'esm'),
        format: 'es',
        preserveModules: true,
        // preserveModulesRoot: path.resolve(config.basePath, 'src'),
        sourcemap: true,
      },
    ],
    external: config.externals || [],
    plugins: [
      commonjs(),
      externals(),
      nodeResolve({
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      }),
      esbuild({
        tsconfig: path.resolve(process.cwd(), 'tsconfig.json'),
      }),
      json(),
      alias({ entries: aliasEntries }),
      replace({ preventAssignment: true }),
    ],
  };
}
