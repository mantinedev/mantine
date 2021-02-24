import path from 'path';
import fs from 'fs-extra';
import webpack from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import tsTransformPaths from '@zerollup/ts-transform-paths';

interface PageConfigInput {
  entry?: string;
  basePath: string;
  outputPath: string;
  externals?: string[];
  publicPath?: string;
  analyze?: boolean;
}

export default function createPackageConfig(config: PageConfigInput): webpack.Configuration {
  const packageJson = JSON.parse(
    fs.readFileSync(path.join(config.basePath, './package.json')).toString('utf-8')
  );

  const externals = (config.externals || []).reduce((acc, dependency) => {
    acc[dependency] = `umd ${dependency}`;
    return acc;
  }, {});

  return {
    externals,

    mode: 'production',
    devtool: 'source-map',

    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({})],
    },

    entry: config.entry || path.join(config.basePath, './src/index.ts'),

    output: {
      path: config.outputPath,
      filename: 'lib.js',
      library: packageJson.name,
      libraryTarget: 'umd',
      globalObject: 'this',
    },

    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
      plugins: [
        new TsconfigPathsPlugin({
          extensions: ['.ts', '.tsx', '.js'],
          configFile: path.join(__dirname, '../../tsconfig.json'),
        }),
      ],
    },

    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: path.join(config.basePath, 'tsconfig.json'),
                getCustomTransformers: (program) => {
                  const transformer = tsTransformPaths(program);

                  return {
                    before: [transformer.before],
                    afterDeclarations: [transformer.afterDeclarations],
                  };
                },
              },
            },
          ],
          exclude: /node_modules/,
        },
      ],
    },

    plugins: [
      new CaseSensitivePathsPlugin(),
      new BundleAnalyzerPlugin({ analyzerMode: config.analyze ? 'static' : 'disabled' }),
    ],
  };
}
