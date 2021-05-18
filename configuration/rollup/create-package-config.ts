import path from 'path';
import fs from 'fs-extra';
import { RollupOptions } from 'rollup';
import commonjs from '@rollup/plugin-commonjs';
import externals from 'rollup-plugin-node-externals';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import esbuild from 'rollup-plugin-esbuild';
import json from '@rollup/plugin-json';
import alias from '@rollup/plugin-alias';
import replace from '@rollup/plugin-replace';

interface PkgConfigInput {
  entry?: string;
  basePath: string;
  outputPath: string;
  externals?: string[];
  publicPath?: string;
  analyze?: boolean;
}

export default function createPackageConfig(config: PkgConfigInput): RollupOptions {
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(config.basePath, './package.json')).toString('utf-8')
  );

  return {
    input: config.entry || path.resolve(config.basePath, 'src/index.ts'),
    output: [
      {
        name: packageJson.name,
        dir: config.outputPath,
        format: 'umd',
        sourcemap: true,
      },
      {
        name: packageJson.name,
        dir: path.resolve(config.outputPath, '../es'),
        format: 'es',
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
        tsconfig: path.resolve(config.basePath, '_tsconfig.json'),
      }),
      json(),
      alias(),
      replace(),
    ],
  };
}
