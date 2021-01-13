import path from 'path';
import fs from 'fs-extra';
import webpack from 'webpack';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import tsTransformPaths from '@zerollup/ts-transform-paths';

interface PageConfigInput {
  entry?: string;
  basePath: string;
  outputPath: string;
  externals?: string[];
  publicPath?: string;
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
      minimizer: [new TerserPlugin({}), new CssMinimizerPlugin()],
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
        {
          test: /\.(less)$/,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: {
                  localIdentName: '[path][name]__[local]',
                },
              },
            },
            {
              loader: 'less-loader',
              options: {
                additionalData: "@import 'open-color/open-color.less';",
              },
            },
          ],
        },
      ],
    },

    plugins: [new CaseSensitivePathsPlugin(), new MiniCssExtractPlugin({ filename: 'lib.css' })],
  };
}
