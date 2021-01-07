import webpack from 'webpack';

export default function compile(config: webpack.Configuration): Promise<webpack.Stats> {
  const compiler = webpack(config);

  return new Promise((resolve, reject) => {
    compiler.run((err: Error, stats: webpack.Stats) => {
      if (err) {
        throw err;
      }

      if (stats.hasErrors()) {
        reject(stats);
      }

      resolve(stats);
    });
  });
}
