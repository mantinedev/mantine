const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  webpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve = {
      ...config.resolve,
      plugins: [
        ...(config.resolve.plugins || []),
        new TsconfigPathsPlugin({
          extensions: ['.ts', '.tsx', '.js'],
          configFile: path.resolve(__dirname, './tsconfig.json'),
        }),
      ],
    };

    return config;
  },
};
